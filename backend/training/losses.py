"""Loss Functions for Depth Anything V2 Domain Adaptation
Implements Scale-and-Shift Invariant (SSI) Loss and Multi-Scale Edge Gradient Loss
for remote-sensing single-view depth/elevation adaptation on GAMUS.
ISRO SIH 2026 Problem Statement 26175 (DepthWizard)
"""

from typing import Tuple, Optional
import torch
import torch.nn as nn
import torch.nn.functional as F

class ScaleAndShiftInvariantLoss(nn.Module):
    """Scale-and-Shift Invariant (SSI) L1 Loss.
    Solves for the optimal per-sample affine alignment (scale s, shift t)
    between the relative depth prediction and ground truth elevation/height.
    """

    def __init__(self, eps: float = 1e-6):
        super().__init__()
        self.eps = eps

    def forward(
        self,
        pred: torch.Tensor,
        target: torch.Tensor,
        mask: Optional[torch.Tensor] = None,
    ) -> torch.Tensor:
        """
        Args:
            pred: (B, 1, H, W) or (B, H, W) predicted relative depth
            target: (B, 1, H, W) or (B, H, W) reference metric elevation / height
            mask: Optional (B, 1, H, W) boolean mask of valid pixels
        Returns:
            Scalar loss tensor
        """
        if pred.ndim == 3:
            pred = pred.unsqueeze(1)
        if target.ndim == 3:
            target = target.unsqueeze(1)

        if mask is None:
            # Mask valid pixels: non-NaN, non-Inf, and non-negative
            mask = (~torch.isnan(target)) & (~torch.isinf(target)) & (target >= 0.0)

        batch_size = pred.shape[0]
        total_loss = torch.tensor(0.0, device=pred.device, dtype=pred.dtype)
        valid_samples = 0

        for i in range(batch_size):
            p_i = pred[i, 0][mask[i, 0]]
            t_i = target[i, 0][mask[i, 0]]

            if p_i.numel() < 32:
                continue

            # Compute closed-form least-squares affine parameters: s * p + t ≈ y
            p_mean = p_i.mean()
            t_mean = t_i.mean()

            p_diff = p_i - p_mean
            t_diff = t_i - t_mean

            var_p = (p_diff ** 2).mean()
            cov_pt = (p_diff * t_diff).mean()

            s = cov_pt / (var_p + self.eps)
            t = t_mean - s * p_mean

            # Aligned prediction
            p_aligned = s * p_i + t

            # L1 residual error
            loss_i = torch.abs(p_aligned - t_i).mean()
            total_loss = total_loss + loss_i
            valid_samples += 1

        if valid_samples > 0:
            return total_loss / valid_samples
        return F.l1_loss(pred, target)

class EdgeGradientLoss(nn.Module):
    """Multi-Scale Gradient Loss.
    Penalizes discrepancies in spatial depth gradients (x and y directions)
    to preserve sharp building boundaries and terrain ridge contours.
    """

    def __init__(self, scales: int = 3):
        super().__init__()
        self.scales = scales

    def forward(
        self,
        pred: torch.Tensor,
        target: torch.Tensor,
        mask: Optional[torch.Tensor] = None,
    ) -> torch.Tensor:
        if pred.ndim == 3:
            pred = pred.unsqueeze(1)
        if target.ndim == 3:
            target = target.unsqueeze(1)

        if mask is None:
            mask = (~torch.isnan(target)) & (~torch.isinf(target)) & (target >= 0.0)

        total_grad_loss = torch.tensor(0.0, device=pred.device, dtype=pred.dtype)

        curr_pred = pred
        curr_target = target
        curr_mask = mask.float()

        for s in range(self.scales):
            # Compute x and y gradients
            diff = curr_pred - curr_target
            grad_x = torch.abs(diff[:, :, :, :-1] - diff[:, :, :, 1:])
            grad_y = torch.abs(diff[:, :, :-1, :] - diff[:, :, 1:, :])

            mask_x = curr_mask[:, :, :, :-1] * curr_mask[:, :, :, 1:]
            mask_y = curr_mask[:, :, :-1, :] * curr_mask[:, :, 1:, :]

            loss_x = (grad_x * mask_x).sum() / (mask_x.sum() + 1e-6)
            loss_y = (grad_y * mask_y).sum() / (mask_y.sum() + 1e-6)

            total_grad_loss = total_grad_loss + loss_x + loss_y

            # Downsample for multi-scale gradient assessment
            if s < self.scales - 1:
                curr_pred = F.interpolate(curr_pred, scale_factor=0.5, mode="bilinear", align_corners=False)
                curr_target = F.interpolate(curr_target, scale_factor=0.5, mode="bilinear", align_corners=False)
                curr_mask = F.interpolate(curr_mask, scale_factor=0.5, mode="nearest")

        return total_grad_loss / self.scales

class RemoteSensingDepthLoss(nn.Module):
    """Combined domain adaptation loss for satellite monocular depth/elevation.
    L_total = L_ssi + alpha * L_grad
    """

    def __init__(self, alpha_grad: float = 0.5):
        super().__init__()
        self.ssi_loss = ScaleAndShiftInvariantLoss()
        self.grad_loss = EdgeGradientLoss(scales=3)
        self.alpha_grad = alpha_grad

    def forward(
        self,
        pred: torch.Tensor,
        target: torch.Tensor,
        mask: Optional[torch.Tensor] = None,
    ) -> Tuple[torch.Tensor, dict]:
        l_ssi = self.ssi_loss(pred, target, mask=mask)
        l_grad = self.grad_loss(pred, target, mask=mask)
        total = l_ssi + self.alpha_grad * l_grad
        return total, {
            "loss_total": float(total.item()),
            "loss_ssi": float(l_ssi.item()),
            "loss_grad": float(l_grad.item()),
        }
