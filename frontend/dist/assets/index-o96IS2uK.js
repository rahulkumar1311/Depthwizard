(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const f of l)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const f={};return l.integrity&&(f.integrity=l.integrity),l.referrerPolicy&&(f.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?f.credentials="include":l.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(l){if(l.ep)return;l.ep=!0;const f=i(l);fetch(l.href,f)}})();function GE(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var od={exports:{}},hl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fv;function VE(){if(fv)return hl;fv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,f){var h=null;if(f!==void 0&&(h=""+f),l.key!==void 0&&(h=""+l.key),"key"in l){f={};for(var d in l)d!=="key"&&(f[d]=l[d])}else f=l;return l=f.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:f}}return hl.Fragment=e,hl.jsx=i,hl.jsxs=i,hl}var hv;function jE(){return hv||(hv=1,od.exports=VE()),od.exports}var m=jE(),ld={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dv;function kE(){if(dv)return le;dv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),x=Symbol.for("react.view_transition"),E=Symbol.iterator;function b(N){return N===null||typeof N!="object"?null:(N=E&&N[E]||N["@@iterator"],typeof N=="function"?N:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,S={};function O(N,W,tt){this.props=N,this.context=W,this.refs=S,this.updater=tt||A}O.prototype.isReactComponent={},O.prototype.setState=function(N,W){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,W,"setState")},O.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function z(){}z.prototype=O.prototype;function D(N,W,tt){this.props=N,this.context=W,this.refs=S,this.updater=tt||A}var j=D.prototype=new z;j.constructor=D,M(j,O.prototype),j.isPureReactComponent=!0;var F=Array.isArray;function P(){}var B={H:null,A:null,T:null,S:null},U=Object.prototype.hasOwnProperty;function C(N,W,tt){var ft=tt.ref;return{$$typeof:o,type:N,key:W,ref:ft!==void 0?ft:null,props:tt}}function H(N,W){return C(N.type,W,N.props)}function at(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function $(N){var W={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(tt){return W[tt]})}var dt=/\/+/g;function ht(N,W){return typeof N=="object"&&N!==null&&N.key!=null?$(""+N.key):W.toString(36)}function q(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(P,P):(N.status="pending",N.then(function(W){N.status==="pending"&&(N.status="fulfilled",N.value=W)},function(W){N.status==="pending"&&(N.status="rejected",N.reason=W)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function ot(N,W,tt,ft,St){var Bt=typeof N;(Bt==="undefined"||Bt==="boolean")&&(N=null);var Nt=!1;if(N===null)Nt=!0;else switch(Bt){case"bigint":case"string":case"number":Nt=!0;break;case"object":switch(N.$$typeof){case o:case e:Nt=!0;break;case v:return Nt=N._init,ot(Nt(N._payload),W,tt,ft,St)}}if(Nt)return St=St(N),Nt=ft===""?"."+ht(N,0):ft,F(St)?(tt="",Nt!=null&&(tt=Nt.replace(dt,"$&/")+"/"),ot(St,W,tt,"",function(ae){return ae})):St!=null&&(at(St)&&(St=H(St,tt+(St.key==null||N&&N.key===St.key?"":(""+St.key).replace(dt,"$&/")+"/")+Nt)),W.push(St)),1;Nt=0;var bt=ft===""?".":ft+":";if(F(N))for(var Gt=0;Gt<N.length;Gt++)ft=N[Gt],Bt=bt+ht(ft,Gt),Nt+=ot(ft,W,tt,Bt,St);else if(Gt=b(N),typeof Gt=="function")for(N=Gt.call(N),Gt=0;!(ft=N.next()).done;)ft=ft.value,Bt=bt+ht(ft,Gt++),Nt+=ot(ft,W,tt,Bt,St);else if(Bt==="object"){if(typeof N.then=="function")return ot(q(N),W,tt,ft,St);throw W=String(N),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.")}return Nt}function X(N,W,tt){if(N==null)return N;var ft=[],St=0;return ot(N,ft,"","",function(Bt){return W.call(tt,Bt,St++)}),ft}function xt(N){if(N._status===-1){var W=N._result,tt=W();tt.then(function(ft){(N._status===0||N._status===-1)&&(N._status=1,N._result=ft,tt.status===void 0&&(tt.status="fulfilled",tt.value=ft))},function(ft){(N._status===0||N._status===-1)&&(N._status=2,N._result=ft,tt.status===void 0&&(tt.status="rejected",tt.reason=ft))}),N._status===-1&&(N._status=0,N._result=tt)}if(N._status===1)return N._result.default;throw N._result}var yt=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var W=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(W))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function Rt(N){var W=B.T,tt={};tt.types=W!==null?W.types:null,B.T=tt;try{var ft=N(),St=B.S;St!==null&&St(tt,ft),typeof ft=="object"&&ft!==null&&typeof ft.then=="function"&&ft.then(P,yt)}catch(Bt){yt(Bt)}finally{W!==null&&tt.types!==null&&(W.types=tt.types),B.T=W}}function zt(N){var W=B.T;if(W!==null){var tt=W.types;tt===null?W.types=[N]:tt.indexOf(N)===-1&&tt.push(N)}else Rt(zt.bind(null,N))}var Wt={map:X,forEach:function(N,W,tt){X(N,function(){W.apply(this,arguments)},tt)},count:function(N){var W=0;return X(N,function(){W++}),W},toArray:function(N){return X(N,function(W){return W})||[]},only:function(N){if(!at(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return le.Activity=g,le.Children=Wt,le.Component=O,le.Fragment=i,le.Profiler=l,le.PureComponent=D,le.StrictMode=s,le.Suspense=p,le.ViewTransition=x,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,le.__COMPILER_RUNTIME={__proto__:null,c:function(N){return B.H.useMemoCache(N)}},le.addTransitionType=zt,le.cache=function(N){return function(){return N.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(N,W,tt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var ft=M({},N.props),St=N.key;if(W!=null)for(Bt in W.key!==void 0&&(St=""+W.key),W)!U.call(W,Bt)||Bt==="key"||Bt==="__self"||Bt==="__source"||Bt==="ref"&&W.ref===void 0||(ft[Bt]=W[Bt]);var Bt=arguments.length-2;if(Bt===1)ft.children=tt;else if(1<Bt){for(var Nt=Array(Bt),bt=0;bt<Bt;bt++)Nt[bt]=arguments[bt+2];ft.children=Nt}return C(N.type,St,ft)},le.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:f,_context:N},N},le.createElement=function(N,W,tt){var ft,St={},Bt=null;if(W!=null)for(ft in W.key!==void 0&&(Bt=""+W.key),W)U.call(W,ft)&&ft!=="key"&&ft!=="__self"&&ft!=="__source"&&(St[ft]=W[ft]);var Nt=arguments.length-2;if(Nt===1)St.children=tt;else if(1<Nt){for(var bt=Array(Nt),Gt=0;Gt<Nt;Gt++)bt[Gt]=arguments[Gt+2];St.children=bt}if(N&&N.defaultProps)for(ft in Nt=N.defaultProps,Nt)St[ft]===void 0&&(St[ft]=Nt[ft]);return C(N,Bt,St)},le.createRef=function(){return{current:null}},le.forwardRef=function(N){return{$$typeof:d,render:N}},le.isValidElement=at,le.lazy=function(N){return{$$typeof:v,_payload:{_status:-1,_result:N},_init:xt}},le.memo=function(N,W){return{$$typeof:_,type:N,compare:W===void 0?null:W}},le.startTransition=Rt,le.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},le.use=function(N){return B.H.use(N)},le.useActionState=function(N,W,tt){return B.H.useActionState(N,W,tt)},le.useCallback=function(N,W){return B.H.useCallback(N,W)},le.useContext=function(N){return B.H.useContext(N)},le.useDebugValue=function(){},le.useDeferredValue=function(N,W){return B.H.useDeferredValue(N,W)},le.useEffect=function(N,W){return B.H.useEffect(N,W)},le.useEffectEvent=function(N){return B.H.useEffectEvent(N)},le.useId=function(){return B.H.useId()},le.useImperativeHandle=function(N,W,tt){return B.H.useImperativeHandle(N,W,tt)},le.useInsertionEffect=function(N,W){return B.H.useInsertionEffect(N,W)},le.useLayoutEffect=function(N,W){return B.H.useLayoutEffect(N,W)},le.useMemo=function(N,W){return B.H.useMemo(N,W)},le.useOptimistic=function(N,W){return B.H.useOptimistic(N,W)},le.useReducer=function(N,W,tt){return B.H.useReducer(N,W,tt)},le.useRef=function(N){return B.H.useRef(N)},le.useState=function(N){return B.H.useState(N)},le.useSyncExternalStore=function(N,W,tt){return B.H.useSyncExternalStore(N,W,tt)},le.useTransition=function(){return B.H.useTransition()},le.version="19.3.0",le}var pv;function Pp(){return pv||(pv=1,ld.exports=kE()),ld.exports}var Kt=Pp();const Dx=GE(Kt);var cd={exports:{}},dl={},ud={exports:{}},fd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mv;function XE(){return mv||(mv=1,(function(o){function e(q,ot){var X=q.length;q.push(ot);t:for(;0<X;){var xt=X-1>>>1,yt=q[xt];if(0<l(yt,ot))q[xt]=ot,q[X]=yt,X=xt;else break t}}function i(q){return q.length===0?null:q[0]}function s(q){if(q.length===0)return null;var ot=q[0],X=q.pop();if(X!==ot){q[0]=X;t:for(var xt=0,yt=q.length,Rt=yt>>>1;xt<Rt;){var zt=2*(xt+1)-1,Wt=q[zt],N=zt+1,W=q[N];if(0>l(Wt,X))N<yt&&0>l(W,Wt)?(q[xt]=W,q[N]=X,xt=N):(q[xt]=Wt,q[zt]=X,xt=zt);else if(N<yt&&0>l(W,X))q[xt]=W,q[N]=X,xt=N;else break t}}return ot}function l(q,ot){var X=q.sortIndex-ot.sortIndex;return X!==0?X:q.id-ot.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var p=[],_=[],v=1,g=null,x=3,E=!1,b=!1,A=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function D(q){for(var ot=i(_);ot!==null;){if(ot.callback===null)s(_);else if(ot.startTime<=q)s(_),ot.sortIndex=ot.expirationTime,e(p,ot);else break;ot=i(_)}}function j(q){if(A=!1,D(q),!b)if(i(p)!==null)b=!0,F||(F=!0,at());else{var ot=i(_);ot!==null&&ht(j,ot.startTime-q)}}var F=!1,P=-1,B=5,U=-1;function C(){return M?!0:!(o.unstable_now()-U<B)}function H(){if(M=!1,F){var q=o.unstable_now();U=q;var ot=!0;try{t:{b=!1,A&&(A=!1,O(P),P=-1),E=!0;var X=x;try{e:{for(D(q),g=i(p);g!==null&&!(g.expirationTime>q&&C());){var xt=g.callback;if(typeof xt=="function"){g.callback=null,x=g.priorityLevel;var yt=xt(g.expirationTime<=q);if(q=o.unstable_now(),typeof yt=="function"){g.callback=yt,D(q),ot=!0;break e}g===i(p)&&s(p),D(q)}else s(p);g=i(p)}if(g!==null)ot=!0;else{var Rt=i(_);Rt!==null&&ht(j,Rt.startTime-q),ot=!1}}break t}finally{g=null,x=X,E=!1}ot=void 0}}finally{ot?at():F=!1}}}var at;if(typeof z=="function")at=function(){z(H)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,dt=$.port2;$.port1.onmessage=H,at=function(){dt.postMessage(null)}}else at=function(){S(H,0)};function ht(q,ot){P=S(function(){q(o.unstable_now())},ot)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(q){q.callback=null},o.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<q?Math.floor(1e3/q):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(q){switch(x){case 1:case 2:case 3:var ot=3;break;default:ot=x}var X=x;x=ot;try{return q()}finally{x=X}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(q,ot){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var X=x;x=q;try{return ot()}finally{x=X}},o.unstable_scheduleCallback=function(q,ot,X){var xt=o.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?xt+X:xt):X=xt,q){case 1:var yt=-1;break;case 2:yt=250;break;case 5:yt=1073741823;break;case 4:yt=1e4;break;default:yt=5e3}return yt=X+yt,q={id:v++,callback:ot,priorityLevel:q,startTime:X,expirationTime:yt,sortIndex:-1},X>xt?(q.sortIndex=X,e(_,q),i(p)===null&&q===i(_)&&(A?(O(P),P=-1):A=!0,ht(j,X-xt))):(q.sortIndex=yt,e(p,q),b||E||(b=!0,F||(F=!0,at()))),q},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(q){var ot=x;return function(){var X=x;x=ot;try{return q.apply(this,arguments)}finally{x=X}}}})(fd)),fd}var gv;function qE(){return gv||(gv=1,ud.exports=XE()),ud.exports}var hd={exports:{}},Pn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _v;function YE(){if(_v)return Pn;_v=1;var o=Pp();function e(v){var g="https://react.dev/errors/"+v;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)g+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+v+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(v,g,x){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:E==null?null:E===h?h:""+E,children:v,containerInfo:g,implementation:x}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function _(v,g){if(v==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Pn.browser=function(v){return{$$typeof:f,_reason:v}},Pn.createPortal=function(v,g){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return d(v,g,null,x)},Pn.flushSync=function(v){var g=p.T,x=s.p;try{if(p.T=null,s.p=2,v)return v()}finally{p.T=g,s.p=x,s.d.f()}},Pn.preconnect=function(v,g){typeof v=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(v,g))},Pn.prefetchDNS=function(v){typeof v=="string"&&s.d.D(v)},Pn.preinit=function(v,g){if(typeof v=="string"&&g&&typeof g.as=="string"){var x=g.as,E=_(x,g.crossOrigin),b=typeof g.integrity=="string"?g.integrity:void 0,A=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;x==="style"?s.d.S(v,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:E,integrity:b,fetchPriority:A}):x==="script"&&s.d.X(v,{crossOrigin:E,integrity:b,fetchPriority:A,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Pn.preinitModule=function(v,g){if(typeof v=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var x=_(g.as,g.crossOrigin);s.d.M(v,{crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&s.d.M(v)},Pn.preload=function(v,g){if(typeof v=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var x=g.as,E=_(x,g.crossOrigin);s.d.L(v,x,{crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Pn.preloadModule=function(v,g){if(typeof v=="string")if(g){var x=_(g.as,g.crossOrigin);s.d.m(v,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else s.d.m(v)},Pn.requestFormReset=function(v){s.d.r(v)},Pn.unstable_batchedUpdates=function(v,g){return v(g)},Pn.useFormState=function(v,g,x){return p.H.useFormState(v,g,x)},Pn.useFormStatus=function(){return p.H.useHostTransitionStatus()},Pn.version="19.3.0",Pn}var vv;function WE(){if(vv)return hd.exports;vv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),hd.exports=YE(),hd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xv;function ZE(){if(xv)return dl;xv=1;var o=qE(),e=Pp(),i=WE();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(f(t)!==t)throw Error(s(188))}function _(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var c=a.return;if(c===null)break;var u=c.alternate;if(u===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===u.child){for(u=c.child;u;){if(u===a)return p(c),t;if(u===r)return p(c),n;u=u.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=u;else{for(var y=!1,T=c.child;T;){if(T===a){y=!0,a=c,r=u;break}if(T===r){y=!0,r=c,a=u;break}T=T.sibling}if(!y){for(T=u.child;T;){if(T===a){y=!0,a=u,r=c;break}if(T===r){y=!0,r=u,a=c;break}T=T.sibling}if(!y)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}function g(t,n,a,r,c,u){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,r,c,u)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&g(t.child,n,a,r,c,u))return!0;t=t.sibling}return!1}function x(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function E(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function b(t){var n=[null,null],a=x(t);return a===null||A(n,t,a.child,{foundSelf:!1}),n}function A(t,n,a,r){for(;a!==null;){if(a===n)r.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(r.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&A(t,n,a.child,r))return!0;a=a.sibling}return!1}function M(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(s(559))}}var S=null,O=null;function z(t,n,a){return t===a?!0:t===n?(S=t,!0):!1}function D(t,n,a){return t===a?(O=t,!1):t===n?(O!==null&&(S=t),!0):!1}function j(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function F(t,n,a){for(var r=0,c=t;c;c=a(c))r++;c=0;for(var u=n;u;u=a(u))c++;for(;0<r-c;)t=a(t),r--;for(;0<c-r;)n=a(n),c--;for(;r--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var P=Object.assign,B=Symbol.for("react.element"),U=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),at=Symbol.for("react.strict_mode"),$=Symbol.for("react.profiler"),dt=Symbol.for("react.consumer"),ht=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),ot=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),xt=Symbol.for("react.memo"),yt=Symbol.for("react.lazy"),Rt=Symbol.for("react.activity"),zt=Symbol.for("react.legacy_hidden"),Wt=Symbol.for("react.memo_cache_sentinel"),N=Symbol.for("react.view_transition"),W=Symbol.for("react.recoverable"),tt=Symbol.iterator;function ft(t){return t===null||typeof t!="object"?null:(t=tt&&t[tt]||t["@@iterator"],typeof t=="function"?t:null)}var St=Symbol.for("react.client.reference");function Bt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===St?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case H:return"Fragment";case $:return"Profiler";case at:return"StrictMode";case ot:return"Suspense";case X:return"SuspenseList";case Rt:return"Activity";case N:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case C:return"Portal";case ht:return t.displayName||"Context";case dt:return(t._context.displayName||"Context")+".Consumer";case q:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case xt:return n=t.displayName||null,n!==null?n:Bt(t.type)||"Memo";case yt:n=t._payload,t=t._init;try{return Bt(t(n))}catch{}}return null}var Nt=Array.isArray,bt=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Gt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae={pending:!1,data:null,method:null,action:null},G=[],on=-1;function se(t){return{current:t}}function $t(t){0>on||(t.current=G[on],G[on]=null,on--)}function Ct(t,n){on++,G[on]=t.current,t.current=n}var _e=se(null),Vt=se(null),L=se(null),R=se(null);function st(t,n){switch(Ct(L,n),Ct(Vt,t),Ct(_e,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?y0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=y0(n),t=S0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}$t(_e),Ct(_e,t)}function vt(){$t(_e),$t(Vt),$t(L)}function Mt(t){var n=t.memoizedState;n!==null&&(kr._currentValue=n.memoizedState,Ct(R,t)),n=_e.current;var a=S0(n,t.type);n!==a&&(Ct(Vt,t),Ct(_e,a))}function _t(t){Vt.current===t&&($t(_e),$t(Vt)),R.current===t&&($t(R),kr._currentValue=ae)}var Yt,Ft;function It(t){if(Yt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Yt=n&&n[1]||"",Ft=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Yt+t+Ft}var me=!1;function At(t,n){if(!t||me)return"";me=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(Ot){var Y=Ot}Reflect.construct(t,[],mt)}else{try{mt.call()}catch(Ot){Y=Ot}mt=!1;try{var it=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),mt=!0,new t}finally{mt&&(it!==void 0?Object.defineProperty(t.prototype,"props",it):delete t.prototype.props)}}}else{try{throw Error()}catch(Ot){Y=Ot}(mt=t())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(Ot){if(Ot&&Y&&typeof Ot.stack=="string")return[Ot.stack,Y.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=r.DetermineComponentFrameRoot(),y=u[0],T=u[1];if(y&&T){var I=y.split(`
`),Q=T.split(`
`);for(c=r=0;r<I.length&&!I[r].includes("DetermineComponentFrameRoot");)r++;for(;c<Q.length&&!Q[c].includes("DetermineComponentFrameRoot");)c++;if(r===I.length||c===Q.length)for(r=I.length-1,c=Q.length-1;1<=r&&0<=c&&I[r]!==Q[c];)c--;for(;1<=r&&0<=c;r--,c--)if(I[r]!==Q[c]){if(r!==1||c!==1)do if(r--,c--,0>c||I[r]!==Q[c]){var rt=`
`+I[r].replace(" at new "," at ");return t.displayName&&rt.includes("<anonymous>")&&(rt=rt.replace("<anonymous>",t.displayName)),rt}while(1<=r&&0<=c);break}}}finally{me=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?It(a):""}function kt(t,n){switch(t.tag){case 26:case 27:case 5:return It(t.type);case 16:return It("Lazy");case 13:return t.child!==n&&n!==null?It("Suspense Fallback"):It("Suspense");case 19:return It("SuspenseList");case 0:case 15:return At(t.type,!1);case 11:return At(t.type.render,!1);case 1:return At(t.type,!0);case 31:return It("Activity");case 30:return It("ViewTransition");default:return""}}function Jt(t){try{var n="",a=null;do n+=kt(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var ee=Object.prototype.hasOwnProperty,jt=o.unstable_scheduleCallback,de=o.unstable_cancelCallback,ce=o.unstable_shouldYield,Le=o.unstable_requestPaint,k=o.unstable_now,Et=o.unstable_getCurrentPriorityLevel,lt=o.unstable_ImmediatePriority,gt=o.unstable_UserBlockingPriority,wt=o.unstable_NormalPriority,Lt=o.unstable_LowPriority,ne=o.unstable_IdlePriority,ke=o.log,ln=o.unstable_setDisableYieldValue,ye=null,Ne=null;function en(t){if(typeof ke=="function"&&ln(t),Ne&&typeof Ne.setStrictMode=="function")try{Ne.setStrictMode(ye,t)}catch{}}var cn=Math.clz32?Math.clz32:Ni,ar=Math.log,wi=Math.LN2;function Ni(t){return t>>>=0,t===0?32:31-(ar(t)/wi|0)|0}var ni=256,ra=262144,Di=4194304;function ii(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function mi(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var c=0,u=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var T=r&134217727;return T!==0?(r=T&~u,r!==0?c=ii(r):(y&=T,y!==0?c=ii(y):a||(a=T&~t,a!==0&&(c=ii(a))))):(T=r&~u,T!==0?c=ii(T):y!==0?c=ii(y):a||(a=r&~t,a!==0&&(c=ii(a)))),c===0?0:n!==0&&n!==c&&(n&u)===0&&(u=c&-c,a=n&-n,u>=a||u===32&&(a&4194048)!==0)?n:c}function Ui(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Oa(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var r=31-cn(a),c=1<<r;n|=t[r],a&=~c}return n}function Eo(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sr(){var t=Di;return Di<<=1,(Di&62914560)===0&&(Di=4194304),t}function ys(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function oa(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function rr(t,n,a,r,c,u){var y=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,I=t.expirationTimes,Q=t.hiddenUpdates;for(a=y&~a;0<a;){var rt=31-cn(a),mt=1<<rt;T[rt]=0,I[rt]=-1;var Y=Q[rt];if(Y!==null)for(Q[rt]=null,rt=0;rt<Y.length;rt++){var it=Y[rt];it!==null&&(it.lane&=-536870913)}a&=~mt}r!==0&&Ss(t,r,0),u!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=u&~(y&~n))}function Ss(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-cn(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function w(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-cn(a),c=1<<r;c&n|t[r]&n&&(t[r]|=n),a&=~c}}function K(t,n){var a=n&-n;return a=(a&42)!==0?1:ct(a),(a&(t.suspendedLanes|n))!==0?0:a}function ct(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ut(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function J(){var t=Gt.p;return t!==0?t:(t=window.event,t===void 0?32:av(t.type))}function Tt(t,n){var a=Gt.p;try{return Gt.p=t,n()}finally{Gt.p=a}}var Ut=Math.random().toString(36).slice(2),Dt="__reactFiber$"+Ut,Pt="__reactProps$"+Ut,ie="__reactContainer$"+Ut,oe="__reactEvents$"+Ut,te="__reactListeners$"+Ut,we="__reactHandles$"+Ut,Ue="__reactResources$"+Ut,We="__reactMarker$"+Ut,Xe="__reactLoad$"+Ut;function Se(t){delete t[Dt],delete t[Pt],delete t[te],delete t[we]}function Zt(t){var n;if(n=t[Dt])return n;for(var a=t.parentNode;a;){if(n=a[ie]||a[Dt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=F0(t);t!==null;){if(a=t[Dt])return a;t=F0(t)}return n}t=a,a=t.parentNode}return null}function Je(t){if(t=t[Dt]||t[ie]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Ae(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function En(t){var n=t[Ue];return n||(n=t[Ue]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Qe(t){t[We]=!0}function In(t){t[Xe]=void 0}var za=new Set,qe={};function fn(t,n){vn(t,n),vn(t+"Capture",n)}function vn(t,n){for(qe[t]=n,t=0;t<n.length;t++)za.add(n[t])}var wn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Nn={},or={};function la(t){return ee.call(or,t)?!0:ee.call(Nn,t)?!1:wn.test(t)?or[t]=!0:(Nn[t]=!0,!1)}var Oe=!1;function rm(){var t=Oe;return Oe=!1,t}function wl(t,n,a){if(la(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function Nl(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function ca(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,r)}}function ai(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function om(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function oS(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,u=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(y){a=""+y,u.call(this,y)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Pu(t){if(!t._valueTracker){var n=om(t)?"checked":"value";t._valueTracker=oS(t,n,""+t[n])}}function lm(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=om(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}var lS=/[\n"\\]/g;function gi(t){return t.replace(lS,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Iu(t,n,a,r,c,u,y,T){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),n!=null?y==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ai(n)):t.value!==""+ai(n)&&(t.value=""+ai(n)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),n!=null?y==="number"&&t.value==n?Fu(t,ai(t.value)):Fu(t,ai(n)):a!=null?Fu(t,ai(a)):r!=null&&t.removeAttribute("value"),c==null&&u!=null&&(t.defaultChecked=!!u),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+ai(T):t.removeAttribute("name")}function cm(t,n,a,r,c,u,y,T){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),n!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||n!=null)){Pu(t);return}a=a!=null?""+ai(a):"",n=n!=null?""+ai(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=T?t.checked:!!r,t.defaultChecked=!!r,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),Pu(t)}function Fu(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function lr(t,n,a,r){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&r&&(t[a].defaultSelected=!0)}else{for(a=""+ai(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,r&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function um(t,n,a){if(n!=null&&(n=""+ai(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ai(a):""}function fm(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(Nt(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=ai(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),Pu(t)}function cr(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var cS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function hm(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||cS.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function dm(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="",Oe=!0);for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&(hm(t,c,r),Oe=!0)}else for(var u in n)n.hasOwnProperty(u)&&hm(t,u,n[u])}function Bu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var uS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),fS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Dl(t){return fS.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Xi(){}var Hu=null;function Gu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ur=null,fr=null;function pm(t){var n=Je(t);if(n&&(t=n.stateNode)){var a=t[Pt]||null;t:switch(t=n.stateNode,n.type){case"input":if(Iu(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+gi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var c=r[Pt]||null;if(!c)throw Error(s(90));Iu(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&lm(r)}break t;case"textarea":um(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&lr(t,!!a.multiple,n,!1)}}}var Vu=!1;function mm(t,n,a){if(Vu)return t(n,a);Vu=!0;try{var r=t(n);return r}finally{if(Vu=!1,(ur!==null||fr!==null)&&(Dc(),ur&&(n=ur,t=fr,fr=ur=null,pm(n),t)))for(n=0;n<t.length;n++)pm(t[n])}}function bo(t,n){var a=t.stateNode;if(a===null)return null;var r=a[Pt]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ua=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ju=!1;if(ua)try{var To={};Object.defineProperty(To,"passive",{get:function(){ju=!0}}),window.addEventListener("test",To,To),window.removeEventListener("test",To,To)}catch{ju=!1}var Pa=null,ku=null,Ul=null;function gm(){if(Ul)return Ul;var t,n=ku,a=n.length,r,c="value"in Pa?Pa.value:Pa.textContent,u=c.length;for(t=0;t<a&&n[t]===c[t];t++);var y=a-t;for(r=1;r<=y&&n[a-r]===c[u-r];r++);return Ul=c.slice(t,1<r?1-r:void 0)}function Ll(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Ol(){return!0}function _m(){return!1}function Vn(t){function n(a,r,c,u,y){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=u,this.target=y,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(u):u[T]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Ol:_m,this.isPropagationStopped=_m,this}return P(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ol)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ol)},persist:function(){},isPersistent:Ol}),n}var Ia={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zl=Vn(Ia),Ao=P({},Ia,{view:0,detail:0}),hS=Vn(Ao),Xu,qu,Ro,Pl=P({},Ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ro&&(Ro&&t.type==="mousemove"?(Xu=t.screenX-Ro.screenX,qu=t.screenY-Ro.screenY):qu=Xu=0,Ro=t),Xu)},movementY:function(t){return"movementY"in t?t.movementY:qu}}),vm=Vn(Pl),dS=P({},Pl,{dataTransfer:0}),pS=Vn(dS),mS=P({},Ao,{relatedTarget:0}),Yu=Vn(mS),gS=P({},Ia,{animationName:0,elapsedTime:0,pseudoElement:0}),_S=Vn(gS),vS=P({},Ia,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),xS=Vn(vS),yS=P({},Ia,{data:0}),xm=Vn(yS),SS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},MS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ES={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bS(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=ES[t])?!!n[t]:!1}function Wu(){return bS}var TS=P({},Ao,{key:function(t){if(t.key){var n=SS[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Ll(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?MS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wu,charCode:function(t){return t.type==="keypress"?Ll(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ll(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),AS=Vn(TS),RS=P({},Pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ym=Vn(RS),CS=P({},Ia,{submitter:0}),wS=Vn(CS),NS=P({},Ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wu}),DS=Vn(NS),US=P({},Ia,{propertyName:0,elapsedTime:0,pseudoElement:0}),LS=Vn(US),OS=P({},Pl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),zS=Vn(OS),PS=P({},Ia,{newState:0,oldState:0,source:0}),IS=Vn(PS),FS=[9,13,27,32],Zu=ua&&"CompositionEvent"in window,Co=null;ua&&"documentMode"in document&&(Co=document.documentMode);var BS=ua&&"TextEvent"in window&&!Co,Sm=ua&&(!Zu||Co&&8<Co&&11>=Co),Mm=" ",Em=!1;function bm(t,n){switch(t){case"keyup":return FS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var hr=!1;function HS(t,n){switch(t){case"compositionend":return Tm(n);case"keypress":return n.which!==32?null:(Em=!0,Mm);case"textInput":return t=n.data,t===Mm&&Em?null:t;default:return null}}function GS(t,n){if(hr)return t==="compositionend"||!Zu&&bm(t,n)?(t=gm(),Ul=ku=Pa=null,hr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Sm&&n.locale!=="ko"?null:n.data;default:return null}}var VS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Am(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!VS[t.type]:n==="textarea"}function Rm(t,n,a,r){ur?fr?fr.push(r):fr=[r]:ur=r,n=Ic(n,"onChange"),0<n.length&&(a=new zl("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var wo=null,No=null;function jS(t){p0(t,0)}function Il(t){var n=Ae(t);if(lm(n))return t}function Cm(t,n){if(t==="change")return n}var wm=!1;if(ua){var Ku;if(ua){var Qu="oninput"in document;if(!Qu){var Nm=document.createElement("div");Nm.setAttribute("oninput","return;"),Qu=typeof Nm.oninput=="function"}Ku=Qu}else Ku=!1;wm=Ku&&(!document.documentMode||9<document.documentMode)}function Dm(){wo&&(wo.detachEvent("onpropertychange",Um),No=wo=null)}function Um(t){if(t.propertyName==="value"&&Il(No)){var n=[];Rm(n,No,t,Gu(t)),mm(jS,n)}}function kS(t,n,a){t==="focusin"?(Dm(),wo=n,No=a,wo.attachEvent("onpropertychange",Um)):t==="focusout"&&Dm()}function XS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Il(No)}function qS(t,n){if(t==="click")return Il(n)}function YS(t,n){if(t==="input"||t==="change")return Il(n)}function WS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var si=typeof Object.is=="function"?Object.is:WS;function Do(t,n){if(si(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!ee.call(n,c)||!si(t[c],n[c]))return!1}return!0}function Ju(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Lm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Om(t,n){var a=Lm(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Lm(a)}}function zm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?zm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Pm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Ju(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Ju(t.document)}return n}function $u(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var ZS=ua&&"documentMode"in document&&11>=document.documentMode,dr=null,tf=null,Uo=null,ef=!1;function Im(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ef||dr==null||dr!==Ju(r)||(r=dr,"selectionStart"in r&&$u(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Uo&&Do(Uo,r)||(Uo=r,r=Ic(tf,"onSelect"),0<r.length&&(n=new zl("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=dr)))}function Ms(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var pr={animationend:Ms("Animation","AnimationEnd"),animationiteration:Ms("Animation","AnimationIteration"),animationstart:Ms("Animation","AnimationStart"),transitionrun:Ms("Transition","TransitionRun"),transitionstart:Ms("Transition","TransitionStart"),transitioncancel:Ms("Transition","TransitionCancel"),transitionend:Ms("Transition","TransitionEnd")},nf={},Fm={};ua&&(Fm=document.createElement("div").style,"AnimationEvent"in window||(delete pr.animationend.animation,delete pr.animationiteration.animation,delete pr.animationstart.animation),"TransitionEvent"in window||delete pr.transitionend.transition);function Es(t){if(nf[t])return nf[t];if(!pr[t])return t;var n=pr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Fm)return nf[t]=n[a];return t}var Bm=Es("animationend"),Hm=Es("animationiteration"),Gm=Es("animationstart"),KS=Es("transitionrun"),QS=Es("transitionstart"),JS=Es("transitioncancel"),Vm=Es("transitionend"),jm=new Map,af="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");af.push("scrollEnd");function Li(t,n){jm.set(t,n),fn(n,[t])}var $S=0;function fa(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=Ii.identifierPrefix;var a=$S++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function km(t){if(t==null||typeof t=="string")return t;var n=null,a=Or;if(a!==null)for(var r=0;r<a.length;r++){var c=t[a[r]];if(c!=null){if(c==="none")return"none";n=n==null?c:n+(" "+c)}}return n??t.default}function ha(t,n){return t=km(t),n=km(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var Fl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},_i=[],mr=0,sf=0;function Bl(){for(var t=mr,n=sf=mr=0;n<t;){var a=_i[n];_i[n++]=null;var r=_i[n];_i[n++]=null;var c=_i[n];_i[n++]=null;var u=_i[n];if(_i[n++]=null,r!==null&&c!==null){var y=r.pending;y===null?c.next=c:(c.next=y.next,y.next=c),r.pending=c}u!==0&&Xm(a,c,u)}}function Hl(t,n,a,r){_i[mr++]=t,_i[mr++]=n,_i[mr++]=a,_i[mr++]=r,sf|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function rf(t,n,a,r){return Hl(t,n,a,r),Gl(t)}function bs(t,n){return Hl(t,null,null,n),Gl(t)}function Xm(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var c=!1,u=t.return;u!==null;)u.childLanes|=a,r=u.alternate,r!==null&&(r.childLanes|=a),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(c=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,c&&n!==null&&(c=31-cn(a),t=u.hiddenUpdates,r=t[c],r===null?t[c]=[n]:r.push(n),n.lane=a|536870912),u):null}function Gl(t){if(50<tl)throw tl=0,Nc=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var gr={};function tM(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(t,n,a,r){return new tM(t,n,a,r)}function of(t){return t=t.prototype,!(!t||!t.isReactComponent)}function da(t,n){var a=t.alternate;return a===null?(a=Yn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function qm(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Vl(t,n,a,r,c,u){var y=0;if(r=t,typeof r=="function")of(r)&&(y=1);else if(typeof r=="string")y=CE(t,a,_e.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(r){case Rt:return t=Yn(31,a,n,c),t.elementType=Rt,t.lanes=u,t;case H:return Ts(a.children,c,u,n);case at:y=8,c|=24;break;case $:return t=Yn(12,a,n,c|2),t.elementType=$,t.lanes=u,t;case ot:return t=Yn(13,a,n,c),t.elementType=ot,t.lanes=u,t;case X:return t=Yn(19,a,n,c),t.elementType=X,t.lanes=u,t;case zt:case N:return t=c|32,t=Yn(30,a,n,t),t.elementType=N,t.lanes=u,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case ht:y=10;break t;case dt:y=9;break t;case q:y=11;break t;case xt:y=14;break t;case yt:y=16,r=null;break t}y=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=Yn(y,a,n,c),n.elementType=t,n.type=r,n.lanes=u,n}function Ts(t,n,a,r){return t=Yn(7,t,r,n),t.lanes=a,t}function lf(t,n,a){return t=Yn(6,t,null,n),t.lanes=a,t}function Ym(t){var n=Yn(18,null,null,0);return n.stateNode=t,n}function cf(t,n,a){return n=Yn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Wm=new WeakMap;function vi(t,n){if(typeof t=="object"&&t!==null){var a=Wm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Jt(n)},Wm.set(t,n),n)}return{value:t,source:n,stack:Jt(n)}}var _r=[],vr=0,jl=null,Lo=0,xi=[],yi=0,Fa=null,qi=1,Yi="";function pa(t,n){_r[vr++]=Lo,_r[vr++]=jl,jl=t,Lo=n}function Zm(t,n,a){xi[yi++]=qi,xi[yi++]=Yi,xi[yi++]=Fa,Fa=t;var r=qi;t=Yi;var c=32-cn(r)-1;r&=~(1<<c),a+=1;var u=32-cn(n)+c;if(30<u){var y=c-c%5;u=(r&(1<<y)-1).toString(32),r>>=y,c-=y,qi=1<<32-cn(n)+c|a<<c|r,Yi=u+t}else qi=1<<u|a<<c|r,Yi=t}function kl(t){t.return!==null&&(pa(t,1),Zm(t,1,0))}function uf(t){for(;t===jl;)jl=_r[--vr],_r[vr]=null,Lo=_r[--vr],_r[vr]=null;for(;t===Fa;)Fa=xi[--yi],xi[yi]=null,Yi=xi[--yi],xi[yi]=null,qi=xi[--yi],xi[yi]=null}function Km(t,n){xi[yi++]=qi,xi[yi++]=Yi,xi[yi++]=Fa,qi=n.id,Yi=n.overflow,Fa=t}var bn=null,Ze=null,ve=!1,Ba=null,Si=!1,ff=Error(s(519));function Ha(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Oo(vi(n,t)),ff}function Qm(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[Dt]=t,n[Pt]=r,a){case"dialog":Ee("cancel",n),Ee("close",n);break;case"iframe":case"object":case"embed":Ee("load",n);break;case"video":case"audio":for(a=0;a<nl.length;a++)Ee(nl[a],n);break;case"source":Ee("error",n);break;case"img":case"image":case"link":Ee("error",n),Ee("load",n);break;case"details":Ee("toggle",n);break;case"input":Ee("invalid",n),cm(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Ee("invalid",n);break;case"textarea":Ee("invalid",n),fm(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||v0(n.textContent,a)?(r.popover!=null&&(Ee("beforetoggle",n),Ee("toggle",n)),r.onScroll!=null&&Ee("scroll",n),r.onScrollEnd!=null&&Ee("scrollend",n),r.onClick!=null&&(n.onclick=Xi),n=!0):n=!1,n||Ha(t,!0)}function Xl(t){for(bn=t.return;bn;)switch(bn.tag){case 5:case 31:case 13:Si=!1;return;case 27:case 3:Si=!0;return;default:bn=bn.return}}function xr(t){if(t!==bn)return!1;if(!ve)return Xl(t),ve=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Gh(t.type,t.memoizedProps)),a=!a),a&&Ze&&Ha(t),Xl(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ze=I0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ze=I0(t)}else n===27?(n=Ze,ns(t.type)?(t=Kh,Kh=null,Ze=t):Ze=n):Ze=bn?Ei(t.stateNode.nextSibling):null;return!0}function As(){Ze=bn=null,ve=!1}function hf(){var t=Ba;return t!==null&&(Kn===null?Kn=t:Kn.push.apply(Kn,t),Ba=null),t}function Oo(t){Ba===null?Ba=[t]:Ba.push(t)}var df=se(null),Rs=null,ma=null;function Ga(t,n,a){Ct(df,n._currentValue),n._currentValue=a}function ga(t){t._currentValue=df.current,$t(df)}function ql(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function pf(t,n,a,r){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var u=c.dependencies;if(u!==null){var y=c.child;u=u.firstContext;t:for(;u!==null;){var T=u;u=c;for(var I=0;I<n.length;I++)if(T.context===n[I]){u.lanes|=a,T=u.alternate,T!==null&&(T.lanes|=a),ql(u.return,a,t),r||(y=null);break t}u=T.next}}else if(c.tag===18){if(y=c.return,y===null)throw Error(s(341));y.lanes|=a,u=y.alternate,u!==null&&(u.lanes|=a),ql(y,a,t),y=null}else c.tag===13&&c.memoizedState!==null&&c.memoizedState.dehydrated===null?(c.lanes|=a,y=c.alternate,y!==null&&(y.lanes|=a),ql(c.return,a,t),y=c.child,y=y!==null?y.sibling:null):y=c.child;if(y!==null)y.return=c;else for(y=c;y!==null;){if(y===t){y=null;break}if(c=y.sibling,c!==null){c.return=y.return,y=c;break}y=y.return}c=y}}function Cs(t,n,a,r){t=null;for(var c=n,u=!1;c!==null;){if(!u){if((c.flags&524288)!==0)u=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var y=c.alternate;if(y===null)throw Error(s(387));if(y=y.memoizedProps,y!==null){var T=c.type;si(c.pendingProps.value,y.value)||(t!==null?t.push(T):t=[T])}}else if(c===R.current){if(y=c.alternate,y===null)throw Error(s(387));y.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(kr):t=[kr])}c=c.return}return t!==null&&pf(n,t,a,r),n.flags|=262144,t!==null}function Yl(t){for(t=t.firstContext;t!==null;){if(!si(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ws(t){Rs=t,ma=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Dn(t){return Jm(Rs,t)}function Wl(t,n){return Rs===null&&ws(t),Jm(t,n)}function Jm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ma===null){if(t===null)throw Error(s(308));ma=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ma=ma.next=n;return a}var eM=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},nM=o.unstable_scheduleCallback,iM=o.unstable_NormalPriority,hn={$$typeof:ht,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function mf(){return{controller:new eM,data:new Map,refCount:0}}function zo(t){t.refCount--,t.refCount===0&&nM(iM,function(){t.controller.abort()})}function $m(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var r=n[t];a.indexOf(r)===-1&&a.push(r)}}}var Po=null;function aM(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Io=null,gf=0,Ns=0,yr=null;function sM(t,n){if(Io===null){var a=Io=[];gf=0,Ns=Uh(),yr={status:"pending",value:void 0,then:function(r){a.push(r)}}}return gf++,n.then(tg,tg),n}function tg(){if(--gf===0&&(Po=null,Io!==null)){yr!==null&&(yr.status="fulfilled");var t=Io;Io=null,Ns=0,yr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function rM(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var eg=bt.S;bt.S=function(t,n){if(Y_=k(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&sM(t,n),Po!==null)for(var a=Fr;a!==null;)$m(a,Po),a=a.next;if(a=t.types,a!==null){for(var r=Fr;r!==null;)$m(r,a),r=r.next;if(Ns!==0){r=Po,r===null&&(r=Po=[]);for(var c=0;c<a.length;c++){var u=a[c];r.indexOf(u)===-1&&r.push(u)}}}eg!==null&&eg(t,n)};var Ds=se(null);function _f(){var t=Ds.current;return t!==null?t:Ye.pooledCache}function Zl(t,n){n===null?Ct(Ds,Ds.current):Ct(Ds,n.pool)}function ng(){var t=_f();return t===null?null:{parent:hn._currentValue,pool:t}}var Sr=Error(s(460)),vf=Error(s(474)),Kl=Error(s(542)),Ql={then:function(){}};function ig(t){return t=t.status,t==="fulfilled"||t==="rejected"}function ag(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Xi,Xi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,rg(t),t===void 0&&!("reason"in n)?Error(s(600)):t;default:if(typeof n.status=="string")n.then(Xi,Xi);else{if(t=Ye,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,rg(t),t}throw Ls=n,Sr}}function Us(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ls=a,Sr):a}}var Ls=null;function sg(){if(Ls===null)throw Error(s(459));var t=Ls;return Ls=null,t}function rg(t){if(t===Sr||t===Kl)throw Error(s(483))}var Mr=null,Fo=0;function Jl(t){var n=Fo;return Fo+=1,Mr===null&&(Mr=[]),ag(Mr,t,n)}function Va(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function $l(t,n){throw n.$$typeof===B?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function og(t){function n(Z,V){if(t){var et=Z.deletions;et===null?(Z.deletions=[V],Z.flags|=16):et.push(V)}}function a(Z,V){if(!t)return null;for(;V!==null;)n(Z,V),V=V.sibling;return null}function r(Z){for(var V=new Map;Z!==null;)Z.key===null?V.set(Z.index,Z):V.set(Z.key,Z),Z=Z.sibling;return V}function c(Z,V){return Z=da(Z,V),Z.index=0,Z.sibling=null,Z}function u(Z,V,et){return Z.index=et,t?(et=Z.alternate,et!==null?(et=et.index,et<V?(Z.flags|=2,V):et):(Z.flags|=134217730,V)):(Z.flags|=1048576,V)}function y(Z){return t&&Z.alternate===null&&(Z.flags|=134217730),Z}function T(Z,V,et,pt){return V===null||V.tag!==6?(V=lf(et,Z.mode,pt),V.return=Z,V):(V=c(V,et),V.return=Z,V)}function I(Z,V,et,pt){var Xt=et.type;return Xt===H?(Z=rt(Z,V,et.props.children,pt,et.key),Va(Z,et),Z):V!==null&&(V.elementType===Xt||typeof Xt=="object"&&Xt!==null&&Xt.$$typeof===yt&&Us(Xt)===V.type)?(V=c(V,et.props),Va(V,et),V.return=Z,V):(V=Vl(et.type,et.key,et.props,null,Z.mode,pt),Va(V,et),V.return=Z,V)}function Q(Z,V,et,pt){return V===null||V.tag!==4||V.stateNode.containerInfo!==et.containerInfo||V.stateNode.implementation!==et.implementation?(V=cf(et,Z.mode,pt),V.return=Z,V):(V=c(V,et.children||[]),V.return=Z,V)}function rt(Z,V,et,pt,Xt){return V===null||V.tag!==7?(V=Ts(et,Z.mode,pt,Xt),V.return=Z,V):(V=c(V,et),V.return=Z,V)}function mt(Z,V,et){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=lf(""+V,Z.mode,et),V.return=Z,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case U:return et=Vl(V.type,V.key,V.props,null,Z.mode,et),Va(et,V),et.return=Z,et;case C:return V=cf(V,Z.mode,et),V.return=Z,V;case yt:return V=Us(V),mt(Z,V,et)}if(Nt(V)||ft(V))return V=Ts(V,Z.mode,et,null),V.return=Z,V;if(typeof V.then=="function")return mt(Z,Jl(V),et);if(V.$$typeof===ht)return mt(Z,Wl(Z,V),et);$l(Z,V)}return null}function Y(Z,V,et,pt){var Xt=V!==null?V.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return Xt!==null?null:T(Z,V,""+et,pt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case U:return et.key===Xt?I(Z,V,et,pt):null;case C:return et.key===Xt?Q(Z,V,et,pt):null;case yt:return et=Us(et),Y(Z,V,et,pt)}if(Nt(et)||ft(et))return Xt!==null?null:rt(Z,V,et,pt,null);if(typeof et.then=="function")return Y(Z,V,Jl(et),pt);if(et.$$typeof===ht)return Y(Z,V,Wl(Z,et),pt);$l(Z,et)}return null}function it(Z,V,et,pt,Xt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return Z=Z.get(et)||null,T(V,Z,""+pt,Xt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case U:return Z=Z.get(pt.key===null?et:pt.key)||null,I(V,Z,pt,Xt);case C:return Z=Z.get(pt.key===null?et:pt.key)||null,Q(V,Z,pt,Xt);case yt:return pt=Us(pt),it(Z,V,et,pt,Xt)}if(Nt(pt)||ft(pt))return Z=Z.get(et)||null,rt(V,Z,pt,Xt,null);if(typeof pt.then=="function")return it(Z,V,et,Jl(pt),Xt);if(pt.$$typeof===ht)return it(Z,V,et,Wl(V,pt),Xt);$l(V,pt)}return null}function Ot(Z,V,et,pt){for(var Xt=null,Ce=null,Qt=V,re=V=0,mn=null;Qt!==null&&re<et.length;re++){Qt.index>re?(mn=Qt,Qt=null):mn=Qt.sibling;var De=Y(Z,Qt,et[re],pt);if(De===null){Qt===null&&(Qt=mn);break}t&&Qt&&De.alternate===null&&n(Z,Qt),V=u(De,V,re),Ce===null?Xt=De:Ce.sibling=De,Ce=De,Qt=mn}if(re===et.length)return a(Z,Qt),ve&&pa(Z,re),Xt;if(Qt===null){for(;re<et.length;re++)Qt=mt(Z,et[re],pt),Qt!==null&&(V=u(Qt,V,re),Ce===null?Xt=Qt:Ce.sibling=Qt,Ce=Qt);return ve&&pa(Z,re),Xt}for(Qt=r(Qt);re<et.length;re++)mn=it(Qt,Z,re,et[re],pt),mn!==null&&(t&&(De=mn.alternate,De!==null&&Qt.delete(De.key===null?re:De.key)),V=u(mn,V,re),Ce===null?Xt=mn:Ce.sibling=mn,Ce=mn);return t&&Qt.forEach(function(os){return n(Z,os)}),ve&&pa(Z,re),Xt}function qt(Z,V,et,pt){if(et==null)throw Error(s(151));for(var Xt=null,Ce=null,Qt=V,re=V=0,mn=null,De=et.next();Qt!==null&&!De.done;re++,De=et.next()){Qt.index>re?(mn=Qt,Qt=null):mn=Qt.sibling;var os=Y(Z,Qt,De.value,pt);if(os===null){Qt===null&&(Qt=mn);break}t&&Qt&&os.alternate===null&&n(Z,Qt),V=u(os,V,re),Ce===null?Xt=os:Ce.sibling=os,Ce=os,Qt=mn}if(De.done)return a(Z,Qt),ve&&pa(Z,re),Xt;if(Qt===null){for(;!De.done;re++,De=et.next())De=mt(Z,De.value,pt),De!==null&&(V=u(De,V,re),Ce===null?Xt=De:Ce.sibling=De,Ce=De);return ve&&pa(Z,re),Xt}for(Qt=r(Qt);!De.done;re++,De=et.next())De=it(Qt,Z,re,De.value,pt),De!==null&&(t&&(mn=De.alternate,mn!==null&&Qt.delete(mn.key===null?re:mn.key)),V=u(De,V,re),Ce===null?Xt=De:Ce.sibling=De,Ce=De);return t&&Qt.forEach(function(HE){return n(Z,HE)}),ve&&pa(Z,re),Xt}function he(Z,V,et,pt){if(typeof et=="object"&&et!==null&&et.type===H&&et.key===null&&et.props.ref===void 0&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case U:t:{for(var Xt=et.key;V!==null;){if(V.key===Xt){if(Xt=et.type,Xt===H){if(V.tag===7){a(Z,V.sibling),pt=c(V,et.props.children),Va(pt,et),pt.return=Z,Z=pt;break t}}else if(V.elementType===Xt||typeof Xt=="object"&&Xt!==null&&Xt.$$typeof===yt&&Us(Xt)===V.type){a(Z,V.sibling),pt=c(V,et.props),Va(pt,et),pt.return=Z,Z=pt;break t}a(Z,V);break}else n(Z,V);V=V.sibling}et.type===H?(pt=Ts(et.props.children,Z.mode,pt,et.key),Va(pt,et),pt.return=Z,Z=pt):(pt=Vl(et.type,et.key,et.props,null,Z.mode,pt),Va(pt,et),pt.return=Z,Z=pt)}return y(Z);case C:t:{for(Xt=et.key;V!==null;){if(V.key===Xt)if(V.tag===4&&V.stateNode.containerInfo===et.containerInfo&&V.stateNode.implementation===et.implementation){a(Z,V.sibling),pt=c(V,et.children||[]),pt.return=Z,Z=pt;break t}else{a(Z,V);break}else n(Z,V);V=V.sibling}pt=cf(et,Z.mode,pt),pt.return=Z,Z=pt}return y(Z);case yt:return et=Us(et),he(Z,V,et,pt)}if(Nt(et))return Ot(Z,V,et,pt);if(ft(et)){if(Xt=ft(et),typeof Xt!="function")throw Error(s(150));return et=Xt.call(et),qt(Z,V,et,pt)}if(typeof et.then=="function")return he(Z,V,Jl(et),pt);if(et.$$typeof===ht)return he(Z,V,Wl(Z,et),pt);$l(Z,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,V!==null&&V.tag===6?(a(Z,V.sibling),pt=c(V,et),pt.return=Z,Z=pt):(a(Z,V),pt=lf(et,Z.mode,pt),pt.return=Z,Z=pt),y(Z)):a(Z,V)}return function(Z,V,et,pt){try{Fo=0;var Xt=he(Z,V,et,pt);return Mr=null,Xt}catch(Qt){if(Qt===Sr||Qt===Kl)throw Qt;var Ce=Yn(29,Qt,null,Z.mode);return Ce.lanes=pt,Ce.return=Z,Ce}finally{}}}var Os=og(!0),lg=og(!1),ja=!1;function xf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ka(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Xa(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Pe&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=Gl(t),Xm(t,null,a),n}return Hl(t,r,n,a),Gl(t)}function Bo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,w(t,a)}}function Sf(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?c=u=y:u=u.next=y,a=a.next}while(a!==null);u===null?c=u=n:u=u.next=n}else c=u=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:u,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Mf=!1;function Ho(){if(Mf){var t=yr;if(t!==null)throw t}}function Go(t,n,a,r){Mf=!1;var c=t.updateQueue;ja=!1;var u=c.firstBaseUpdate,y=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var I=T,Q=I.next;I.next=null,y===null?u=Q:y.next=Q,y=I;var rt=t.alternate;rt!==null&&(rt=rt.updateQueue,T=rt.lastBaseUpdate,T!==y&&(T===null?rt.firstBaseUpdate=Q:T.next=Q,rt.lastBaseUpdate=I))}if(u!==null){var mt=c.baseState;y=0,rt=Q=I=null,T=u;do{var Y=T.lane&-536870913,it=Y!==T.lane;if(it?(Re&Y)===Y:(r&Y)===Y){Y!==0&&Y===Ns&&(Mf=!0),rt!==null&&(rt=rt.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Ot=t,qt=T;Y=n;var he=a;switch(qt.tag){case 1:if(Ot=qt.payload,typeof Ot=="function"){mt=Ot.call(he,mt,Y);break t}mt=Ot;break t;case 3:Ot.flags=Ot.flags&-65537|128;case 0:if(Ot=qt.payload,Y=typeof Ot=="function"?Ot.call(he,mt,Y):Ot,Y==null)break t;mt=P({},mt,Y);break t;case 2:ja=!0}}Y=T.callback,Y!==null&&(t.flags|=64,it&&(t.flags|=8192),it=c.callbacks,it===null?c.callbacks=[Y]:it.push(Y))}else it={lane:Y,tag:T.tag,payload:T.payload,callback:T.callback,next:null},rt===null?(Q=rt=it,I=mt):rt=rt.next=it,y|=Y;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;it=T,T=it.next,it.next=null,c.lastBaseUpdate=it,c.shared.pending=null}}while(!0);rt===null&&(I=mt),c.baseState=I,c.firstBaseUpdate=Q,c.lastBaseUpdate=rt,u===null&&(c.shared.lanes=0),Ja|=y,t.lanes=y,t.memoizedState=mt}}function cg(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function ug(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)cg(a[t],n)}var qa=se(null),tc=se(0);function fg(t,n){t=Sa,Ct(tc,t),Ct(qa,n),Sa=t|n.baseLanes}function Ef(){Ct(tc,Sa),Ct(qa,qa.current)}function bf(){Sa=tc.current,$t(qa),$t(tc)}var Un=se(null),Fn=null;function Ya(t){var n=t.alternate;Ct(Ln,Ln.current&1),Ct(Un,t),Fn===null&&(n===null||qa.current!==null||n.memoizedState!==null)&&(Fn=t)}function Tf(t){Ct(Ln,Ln.current),Ct(Un,t),Fn===null&&(Fn=t)}function hg(t){t.tag===22?(Ct(Ln,Ln.current),Ct(Un,t),Fn===null&&(Fn=t)):Wa()}function Wa(){Ct(Ln,Ln.current),Ct(Un,Un.current)}function ri(t){$t(Un),Fn===t&&(Fn=null),$t(Ln)}var Ln=se(0);function Vo(t,n){Ct(Un,Un.current),Ct(Ln,n)}function Af(t){$t(Ln),$t(Un),Fn===t&&(Fn=null)}function ec(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Wh(a)||Zh(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var _a=0,fe=null,Ge=null,dn=null,nc=!1,Er=!1,zs=!1,ic=0,jo=0,br=null,oM=0;function an(){throw Error(s(321))}function Rf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!si(t[a],n[a]))return!1;return!0}function Cf(t,n,a,r,c,u){return _a=u,fe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,bt.H=t===null||t.memoizedState===null?Zg:Kg,zs=!1,u=a(r,c),zs=!1,Er&&(u=pg(n,a,r,c)),dg(t),u}function dg(t){bt.H=uc;var n=Ge!==null&&Ge.next!==null;if(_a=0,dn=Ge=fe=null,nc=!1,jo=0,br=null,n)throw Error(s(300));t===null||pn||(t=t.dependencies,t!==null&&Yl(t)&&(pn=!0))}function pg(t,n,a,r){fe=t;var c=0;do{if(Er&&(br=null),jo=0,Er=!1,25<=c)throw Error(s(301));if(c+=1,dn=Ge=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}bt.H=mM,u=n(a,r)}while(Er);return u}function lM(){var t=bt.H,n=t.useState()[0];return n=typeof n.then=="function"?ko(n):n,t=t.useState()[0],(Ge!==null?Ge.memoizedState:null)!==t&&(fe.flags|=1024),n}function wf(){var t=ic!==0;return ic=0,t}function Nf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Df(t){if(nc){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}nc=!1}_a=0,dn=Ge=fe=null,Er=!1,jo=ic=0,br=null}function jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?fe.memoizedState=dn=t:dn=dn.next=t,dn}function un(){if(Ge===null){var t=fe.alternate;t=t!==null?t.memoizedState:null}else t=Ge.next;var n=dn===null?fe.memoizedState:dn.next;if(n!==null)dn=n,Ge=t;else{if(t===null)throw fe.alternate===null?Error(s(467)):Error(s(310));Ge=t,t={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},dn===null?fe.memoizedState=dn=t:dn=dn.next=t}return dn}function ac(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ko(t){var n=jo;return jo+=1,br===null&&(br=[]),t=ag(br,t,n),n=fe,(dn===null?n.memoizedState:dn.next)===null&&(n=n.alternate,bt.H=n===null||n.memoizedState===null?Zg:Kg),t}function sc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ko(t);if(t.$$typeof===W)return;if(t.$$typeof===ht)return Dn(t)}throw Error(s(438,String(t)))}function Uf(t){var n=null,a=fe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=fe.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ac(),fe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=Wt;return n.index++,a}function va(t,n){return typeof n=="function"?n(t):n}function rc(t){var n=un();return Lf(n,Ge,t)}function Lf(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=t.baseQueue,u=r.pending;if(u!==null){if(c!==null){var y=c.next;c.next=u.next,u.next=y}n.baseQueue=c=u,r.pending=null}if(u=t.baseState,c===null)t.memoizedState=u;else{n=c.next;var T=y=null,I=null,Q=n,rt=!1;do{var mt=Q.lane&-536870913;if(mt!==Q.lane?(Re&mt)===mt:(_a&mt)===mt){var Y=Q.revertLane;if(Y===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),mt===Ns&&(rt=!0);else if((_a&Y)===Y){Q=Q.next,Y===Ns&&(rt=!0);continue}else mt={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},I===null?(T=I=mt,y=u):I=I.next=mt,fe.lanes|=Y,Ja|=Y;mt=Q.action,zs&&a(u,mt),u=Q.hasEagerState?Q.eagerState:a(u,mt)}else Y={lane:mt,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},I===null?(T=I=Y,y=u):I=I.next=Y,fe.lanes|=mt,Ja|=mt;Q=Q.next}while(Q!==null&&Q!==n);if(I===null?y=u:I.next=T,!si(u,t.memoizedState)&&(pn=!0,rt&&(a=yr,a!==null)))throw a;t.memoizedState=u,t.baseState=y,t.baseQueue=I,r.lastRenderedState=u}return c===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Of(t){var n=un(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,c=a.pending,u=n.memoizedState;if(c!==null){a.pending=null;var y=c=c.next;do u=t(u,y.action),y=y.next;while(y!==c);si(u,n.memoizedState)||(pn=!0),n.memoizedState=u,n.baseQueue===null&&(n.baseState=u),a.lastRenderedState=u}return[u,r]}function mg(t,n,a){var r=fe,c=un(),u=ve;if(u){if(a===void 0)throw Error(s(407));a=a()}else a=n();var y=!si((Ge||c).memoizedState,a);if(y&&(c.memoizedState=a,pn=!0),c=c.queue,If(vg.bind(null,r,c,t),[t]),t=c.getSnapshot!==n||y||dn!==null&&(dn.memoizedState.tag&1)!==0,Tr(t?9:8,{destroy:void 0},_g.bind(null,r,c,a,n),null),t){if(r.flags|=2048,Ye===null)throw Error(s(349));u||(_a&127)!==0||gg(r,n,a)}return a}function gg(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=fe.updateQueue,n===null?(n=ac(),fe.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function _g(t,n,a,r){n.value=a,n.getSnapshot=r,xg(n)&&yg(t)}function vg(t,n,a){return a(function(){xg(n)&&yg(t)})}function xg(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!si(t,a)}catch{return!0}}function yg(t){var n=bs(t,2);n!==null&&Qn(n,t,2)}function zf(t){var n=jn();if(typeof t=="function"){var a=t;if(t=a(),zs){en(!0);try{a()}finally{en(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:t},n}function Sg(t,n,a,r){return t.baseState=a,Lf(t,Ge,typeof r=="function"?r:va)}function cM(t,n,a,r,c){if(cc(t))throw Error(s(485));if(t=n.action,t!==null){var u={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){u.listeners.push(y)}};bt.T!==null?a(!0):u.isTransition=!1,r(u),a=n.pending,a===null?(u.next=n.pending=u,Mg(n,u)):(u.next=a.next,n.pending=a.next=u)}}function Mg(t,n){var a=n.action,r=n.payload,c=t.state;if(n.isTransition){var u=bt.T,y={};y.types=u!==null?u.types:null,bt.T=y;try{var T=a(c,r),I=bt.S;I!==null&&I(y,T),Eg(t,n,T)}catch(Q){Pf(t,n,Q)}finally{u!==null&&y.types!==null&&(u.types=y.types),bt.T=u}}else try{u=a(c,r),Eg(t,n,u)}catch(Q){Pf(t,n,Q)}}function Eg(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){bg(t,n,r)},function(r){return Pf(t,n,r)}):bg(t,n,a)}function bg(t,n,a){n.status="fulfilled",n.value=a,Tg(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Mg(t,a)))}function Pf(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Tg(n),n=n.next;while(n!==r)}t.action=null}function Tg(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Ag(t,n){return n}function Rg(t,n){if(ve){var a=Ye.formState;if(a!==null){t:{var r=fe;if(ve){if(Ze){e:{for(var c=Ze,u=Si;c.nodeType!==8;){if(!u){c=null;break e}if(c=Ei(c.nextSibling),c===null){c=null;break e}}u=c.data,c=u==="F!"||u==="F"?c:null}if(c){Ze=Ei(c.nextSibling),r=c.data==="F!";break t}}Ha(r)}r=!1}r&&(n=a[0])}}return a=jn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ag,lastRenderedState:n},a.queue=r,a=qg.bind(null,fe,r),r.dispatch=a,r=zf(!1),u=Vf.bind(null,fe,!1,r.queue),r=jn(),c={state:n,dispatch:null,action:t,pending:null},r.queue=c,a=cM.bind(null,fe,c,u,a),c.dispatch=a,r.memoizedState=t,[n,a,!1]}function Cg(t){var n=un();return wg(n,Ge,t)}function wg(t,n,a){if(n=Lf(t,n,Ag)[0],t=rc(va)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=ko(n)}catch(y){throw y===Sr?Kl:y}else r=n;n=un();var c=n.queue,u=c.dispatch;return a!==n.memoizedState&&(fe.flags|=2048,Tr(9,{destroy:void 0},uM.bind(null,c,a),null)),[r,u,t]}function uM(t,n){t.action=n}function Ng(t){var n=un(),a=Ge;if(a!==null)return wg(n,a,t);un(),n=n.memoizedState,a=un();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function Tr(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=fe.updateQueue,n===null&&(n=ac(),fe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function Dg(){return un().memoizedState}function oc(t,n,a,r){var c=jn();fe.flags|=t,c.memoizedState=Tr(1|n,{destroy:void 0},a,r===void 0?null:r)}function lc(t,n,a,r){var c=un();r=r===void 0?null:r;var u=c.memoizedState.inst;Ge!==null&&r!==null&&Rf(r,Ge.memoizedState.deps)?c.memoizedState=Tr(n,u,a,r):(fe.flags|=t,c.memoizedState=Tr(1|n,u,a,r))}function Ug(t,n){oc(8390656,8,t,n)}function If(t,n){lc(2048,8,t,n)}function fM(t){fe.flags|=4;var n=fe.updateQueue;if(n===null)n=ac(),fe.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Lg(t){var n=un().memoizedState;return fM({ref:n,nextImpl:t}),function(){if((Pe&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Og(t,n){return lc(4,2,t,n)}function zg(t,n){return lc(4,4,t,n)}function Pg(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Ig(t,n,a){a=a!=null?a.concat([t]):null,lc(4,4,Pg.bind(null,n,t),a)}function Ff(){}function Fg(t,n){var a=un();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Rf(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function Bg(t,n){var a=un();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Rf(n,r[1]))return r[0];if(r=t(),zs){en(!0);try{t()}finally{en(!1)}}return a.memoizedState=[r,n],r}function Bf(t,n,a){return a===void 0||(_a&1073741824)!==0&&(Re&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Z_(),fe.lanes|=t,Ja|=t,a)}function Hg(t,n,a,r){return si(a,n)?a:qa.current!==null?(t=Bf(t,a,r),si(t,n)||(pn=!0),t):(_a&106)===0||(_a&1073741824)!==0&&(Re&261930)===0?(pn=!0,t.memoizedState=a):(t=Z_(),fe.lanes|=t,Ja|=t,n)}function Gg(t,n,a,r,c){var u=Gt.p;Gt.p=u!==0&&8>u?u:8;var y=bt.T,T={};T.types=y!==null?y.types:null,bt.T=T,Vf(t,!1,n,a);try{var I=c(),Q=bt.S;if(Q!==null&&Q(T,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var rt=rM(I,r);Xo(t,n,rt,ui(t))}else Xo(t,n,r,ui(t))}catch(mt){Xo(t,n,{then:function(){},status:"rejected",reason:mt},ui())}finally{Gt.p=u,y!==null&&T.types!==null&&(y.types=T.types),bt.T=y}}function hM(){}function Hf(t,n,a,r){if(t.tag!==5)throw Error(s(476));var c=Vg(t).queue;Gg(t,c,n,ae,a===null?hM:function(){return jg(t),a(r)})}function Vg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ae,baseState:ae,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:ae},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function jg(t){var n=Vg(t);n.next===null&&(n=t.alternate.memoizedState),Xo(t,n.next.queue,{},ui())}function Gf(){return Dn(kr)}function kg(){return un().memoizedState}function Xg(){return un().memoizedState}function dM(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ui();t=ka(a);var r=Xa(n,t,a);r!==null&&(Qn(r,n,a),Bo(r,n,a)),n={cache:mf()},t.payload=n;return}n=n.return}}function pM(t,n,a){var r=ui();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},cc(t)?Yg(n,a):(a=rf(t,n,a,r),a!==null&&(Qn(a,t,r),Wg(a,n,r)))}function qg(t,n,a){var r=ui();Xo(t,n,a,r)}function Xo(t,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(cc(t))Yg(n,c);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=n.lastRenderedReducer,u!==null))try{var y=n.lastRenderedState,T=u(y,a);if(c.hasEagerState=!0,c.eagerState=T,si(T,y))return Hl(t,n,c,0),Ye===null&&Bl(),!1}catch{}finally{}if(a=rf(t,n,c,r),a!==null)return Qn(a,t,r),Wg(a,n,r),!0}return!1}function Vf(t,n,a,r){if(r={lane:2,revertLane:Uh(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},cc(t)){if(n)throw Error(s(479))}else n=rf(t,a,r,2),n!==null&&Qn(n,t,2)}function cc(t){var n=t.alternate;return t===fe||n!==null&&n===fe}function Yg(t,n){Er=nc=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Wg(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,w(t,a)}}var uc={readContext:Dn,use:sc,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an,useEffectEvent:an},Zg={readContext:Dn,use:sc,useCallback:function(t,n){return jn().memoizedState=[t,n===void 0?null:n],t},useContext:Dn,useEffect:Ug,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,oc(4194308,4,Pg.bind(null,n,t),a)},useLayoutEffect:function(t,n){return oc(4194308,4,t,n)},useInsertionEffect:function(t,n){oc(4,2,t,n)},useMemo:function(t,n){var a=jn();n=n===void 0?null:n;var r=t();if(zs){en(!0);try{t()}finally{en(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=jn();if(a!==void 0){var c=a(n);if(zs){en(!0);try{a(n)}finally{en(!1)}}}else c=n;return r.memoizedState=r.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},r.queue=t,t=t.dispatch=pM.bind(null,fe,t),[r.memoizedState,t]},useRef:function(t){var n=jn();return t={current:t},n.memoizedState=t},useState:function(t){t=zf(t);var n=t.queue,a=qg.bind(null,fe,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Ff,useDeferredValue:function(t,n){var a=jn();return Bf(a,t,n)},useTransition:function(){var t=zf(!1);return t=Gg.bind(null,fe,t.queue,!0,!1),jn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=fe,c=jn();if(ve){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ye===null)throw Error(s(349));(Re&127)!==0||gg(r,n,a)}c.memoizedState=a;var u={value:a,getSnapshot:n};return c.queue=u,Ug(vg.bind(null,r,u,t),[t]),r.flags|=2048,Tr(9,{destroy:void 0},_g.bind(null,r,u,a,n),null),a},useId:function(){var t=jn(),n=Ye.identifierPrefix;if(ve){var a=Yi,r=qi;a=(r&~(1<<32-cn(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=ic++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=oM++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Gf,useFormState:Rg,useActionState:Rg,useOptimistic:function(t){var n=jn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Vf.bind(null,fe,!0,a),a.dispatch=n,[t,n]},useMemoCache:Uf,useCacheRefresh:function(){return jn().memoizedState=dM.bind(null,fe)},useEffectEvent:function(t){var n=jn(),a={impl:t};return n.memoizedState=a,function(){if((Pe&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Kg={readContext:Dn,use:sc,useCallback:Fg,useContext:Dn,useEffect:If,useImperativeHandle:Ig,useInsertionEffect:Og,useLayoutEffect:zg,useMemo:Bg,useReducer:rc,useRef:Dg,useState:function(){return rc(va)},useDebugValue:Ff,useDeferredValue:function(t,n){var a=un();return Hg(a,Ge.memoizedState,t,n)},useTransition:function(){var t=rc(va)[0],n=un().memoizedState;return[typeof t=="boolean"?t:ko(t),n]},useSyncExternalStore:mg,useId:kg,useHostTransitionStatus:Gf,useFormState:Cg,useActionState:Cg,useOptimistic:function(t,n){var a=un();return Sg(a,Ge,t,n)},useMemoCache:Uf,useCacheRefresh:Xg,useEffectEvent:Lg},mM={readContext:Dn,use:sc,useCallback:Fg,useContext:Dn,useEffect:If,useImperativeHandle:Ig,useInsertionEffect:Og,useLayoutEffect:zg,useMemo:Bg,useReducer:Of,useRef:Dg,useState:function(){return Of(va)},useDebugValue:Ff,useDeferredValue:function(t,n){var a=un();return Ge===null?Bf(a,t,n):Hg(a,Ge.memoizedState,t,n)},useTransition:function(){var t=Of(va)[0],n=un().memoizedState;return[typeof t=="boolean"?t:ko(t),n]},useSyncExternalStore:mg,useId:kg,useHostTransitionStatus:Gf,useFormState:Ng,useActionState:Ng,useOptimistic:function(t,n){var a=un();return Ge!==null?Sg(a,Ge,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Uf,useCacheRefresh:Xg,useEffectEvent:Lg};function jf(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:P({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var kf={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=ui(),c=ka(r);c.payload=n,a!=null&&(c.callback=a),n=Xa(t,c,r),n!==null&&(Qn(n,t,r),Bo(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=ui(),c=ka(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Xa(t,c,r),n!==null&&(Qn(n,t,r),Bo(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ui(),r=ka(a);r.tag=2,n!=null&&(r.callback=n),n=Xa(t,r,a),n!==null&&(Qn(n,t,a),Bo(n,t,a))}};function Qg(t,n,a,r,c,u,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,u,y):n.prototype&&n.prototype.isPureReactComponent?!Do(a,r)||!Do(c,u):!0}function Jg(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&kf.enqueueReplaceState(n,n.state,null)}function Ps(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=P({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function $g(t){Fl(t)}function t_(t){console.error(t)}function e_(t){Fl(t)}function fc(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function n_(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Xf(t,n,a){return a=ka(a),a.tag=3,a.payload={element:null},a.callback=function(){fc(t,n)},a}function i_(t){return t=ka(t),t.tag=3,t}function a_(t,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var u=r.value;t.payload=function(){return c(u)},t.callback=function(){n_(n,a,r)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){n_(n,a,r),typeof c!="function"&&($a===null?$a=new Set([this]):$a.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})})}function gM(t,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Cs(n,a,c,!0),a=Un.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Fn===null?Uc():a.alternate===null&&sn===0&&(sn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===Ql?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),wh(t,r,c)),!1;case 22:return a.flags|=65536,r===Ql?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),wh(t,r,c)),!1}throw Error(s(435,a.tag))}return wh(t,r,c),Uc(),!1}if(ve)return n=Un.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==ff&&(t=Error(s(422),{cause:r}),Oo(vi(t,a)))):(r!==ff&&(n=Error(s(423),{cause:r}),Oo(vi(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,r=vi(r,a),c=Xf(t.stateNode,r,c),Sf(t,c),sn!==4&&(sn=2)),!1;var u=Error(s(520),{cause:r});if(u=vi(u,a),$o===null?$o=[u]:$o.push(u),sn!==4&&(sn=2),n===null)return!0;r=vi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Xf(a.stateNode,r,t),Sf(a,t),!1;case 1:if(n=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&($a===null||!$a.has(u))))return a.flags|=65536,c&=-c,a.lanes|=c,c=i_(c),a_(c,t,a,r),Sf(a,c),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var qf=Error(s(461)),pn=!1;function xn(t,n,a,r){n.child=t===null?lg(n,null,a,r):Os(n,t.child,a,r)}function s_(t,n,a,r,c){a=a.render;var u=n.ref;if("ref"in r){var y={};for(var T in r)T!=="ref"&&(y[T]=r[T])}else y=r;return ws(n),r=Cf(t,n,a,y,u,c),T=wf(),t!==null&&!pn?(Nf(t,n,c),xa(t,n,c)):(ve&&T&&kl(n),n.flags|=1,xn(t,n,r,c),n.child)}function r_(t,n,a,r,c){if(t===null){var u=a.type;return typeof u=="function"&&!of(u)&&u.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=u,o_(t,n,u,r,c)):(t=Vl(a.type,null,r,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(u=t.child,!th(t,c)){var y=u.memoizedProps;if(a=a.compare,a=a!==null?a:Do,a(y,r)&&t.ref===n.ref)return xa(t,n,c)}return n.flags|=1,t=da(u,r),t.ref=n.ref,t.return=n,n.child=t}function o_(t,n,a,r,c){if(t!==null){var u=t.memoizedProps;if(Do(u,r)&&t.ref===n.ref)if(pn=!1,n.pendingProps=r=u,th(t,c))(t.flags&131072)!==0&&(pn=!0);else return n.lanes=t.lanes,xa(t,n,c)}return Yf(t,n,a,r,c)}function l_(t,n,a,r){var c=r.children,u=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(u=u!==null?u.baseLanes|a:a,t!==null){for(r=n.child=t.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~u}else r=0,n.child=null;return c_(t,n,u,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Zl(n,u!==null?u.cachePool:null),u!==null?fg(n,u):Ef(),hg(n);else return r=n.lanes=536870912,c_(t,n,u!==null?u.baseLanes|a:a,a,r)}else u!==null?(Zl(n,u.cachePool),fg(n,u),Wa(),n.memoizedState=null):(t!==null&&Zl(n,null),Ef(),Wa());return xn(t,n,c,a),n.child}function qo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function c_(t,n,a,r,c){var u=_f();return u=u===null?null:{parent:hn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},t!==null&&Zl(n,null),Ef(),hg(n),t!==null&&Cs(t,n,r,!0),n.childLanes=c,null}function hc(t,n){return n=dc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function u_(t,n,a){return Os(n,t.child,null,a),t=hc(n,n.pendingProps),t.flags|=2,ri(n),n.memoizedState=null,t}function _M(t,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(ve){if(r.mode==="hidden")return t=hc(n,r),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},qo(null,t);if(Tf(n),(t=Ze)?(t=P0(t,Si),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Fa!==null?{id:qi,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},a=Ym(t),a.return=n,n.child=a,bn=n,Ze=null)):t=null,t===null)throw Ha(n);return n.lanes=536870912,null}return hc(n,r)}var u=t.memoizedState;if(u!==null){var y=u.dehydrated;if(Tf(n),c)if(n.flags&256)n.flags&=-257,n=u_(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(pn||Cs(t,n,a,!1),c=(a&t.childLanes)!==0,pn||c){if(qa.current===null){if(r=Ye,r!==null&&(y=K(r,a),y!==0&&y!==u.retryLane))throw u.retryLane=y,bs(t,y),Qn(r,t,y),qf;Uc()}n=u_(t,n,a)}else t=u.treeContext,Ze=Ei(y.nextSibling),bn=n,ve=!0,Ba=null,Si=!1,t!==null&&Km(n,t),n=hc(n,r),n.flags|=134221824;return n}return t=da(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Ar(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Yf(t,n,a,r,c){return ws(n),a=Cf(t,n,a,r,void 0,c),r=wf(),t!==null&&!pn?(Nf(t,n,c),xa(t,n,c)):(ve&&r&&kl(n),n.flags|=1,xn(t,n,a,c),n.child)}function f_(t,n,a,r,c,u){return ws(n),n.updateQueue=null,a=pg(n,r,a,c),dg(t),r=wf(),t!==null&&!pn?(Nf(t,n,u),xa(t,n,u)):(ve&&r&&kl(n),n.flags|=1,xn(t,n,a,u),n.child)}function h_(t,n,a,r,c){if(ws(n),n.stateNode===null){var u=gr,y=a.contextType;typeof y=="object"&&y!==null&&(u=Dn(y)),u=new a(r,u),n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=kf,n.stateNode=u,u._reactInternals=n,u=n.stateNode,u.props=r,u.state=n.memoizedState,u.refs={},xf(n),y=a.contextType,u.context=typeof y=="object"&&y!==null?Dn(y):gr,u.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(jf(n,a,y,r),u.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(y=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),y!==u.state&&kf.enqueueReplaceState(u,u.state,null),Go(n,r,u,c),Ho(),u.state=n.memoizedState),typeof u.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){u=n.stateNode;var T=n.memoizedProps,I=Ps(a,T);u.props=I;var Q=u.context,rt=a.contextType;y=gr,typeof rt=="object"&&rt!==null&&(y=Dn(rt));var mt=a.getDerivedStateFromProps;rt=typeof mt=="function"||typeof u.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,rt||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(T||Q!==y)&&Jg(n,u,r,y),ja=!1;var Y=n.memoizedState;u.state=Y,Go(n,r,u,c),Ho(),Q=n.memoizedState,T||Y!==Q||ja?(typeof mt=="function"&&(jf(n,a,mt,r),Q=n.memoizedState),(I=ja||Qg(n,a,I,r,Y,Q,y))?(rt||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(n.flags|=4194308)):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=Q),u.props=r,u.state=Q,u.context=y,r=I):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{u=n.stateNode,yf(t,n),y=n.memoizedProps,rt=Ps(a,y),u.props=rt,mt=n.pendingProps,Y=u.context,Q=a.contextType,I=gr,typeof Q=="object"&&Q!==null&&(I=Dn(Q)),T=a.getDerivedStateFromProps,(Q=typeof T=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(y!==mt||Y!==I)&&Jg(n,u,r,I),ja=!1,Y=n.memoizedState,u.state=Y,Go(n,r,u,c),Ho();var it=n.memoizedState;y!==mt||Y!==it||ja||t!==null&&t.dependencies!==null&&Yl(t.dependencies)?(typeof T=="function"&&(jf(n,a,T,r),it=n.memoizedState),(rt=ja||Qg(n,a,rt,r,Y,it,I)||t!==null&&t.dependencies!==null&&Yl(t.dependencies))?(Q||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,it,I),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,it,I)),typeof u.componentDidUpdate=="function"&&(n.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof u.componentDidUpdate!="function"||y===t.memoizedProps&&Y===t.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&Y===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=it),u.props=r,u.state=it,u.context=I,r=rt):(typeof u.componentDidUpdate!="function"||y===t.memoizedProps&&Y===t.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&Y===t.memoizedState||(n.flags|=1024),r=!1)}return u=r,Ar(t,n),r=(n.flags&128)!==0,u||r?(u=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:u.render(),n.flags|=1,t!==null&&r?(n.child=Os(n,t.child,null,c),n.child=Os(n,null,a,c)):xn(t,n,a,c),n.memoizedState=u.state,t=n.child):t=xa(t,n,c),t}function d_(t,n,a,r){return As(),n.flags|=256,xn(t,n,a,r),n.child}var Wf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Zf(t){return{baseLanes:t,cachePool:ng()}}function Kf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ci),t}function p_(t,n,a){var r=n.pendingProps,c=!1,u=(n.flags&128)!==0,y;if((y=u)||(y=t!==null&&t.memoizedState===null?!1:(Ln.current&2)!==0),y&&(c=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,t===null){if(ve){if(c?Ya(n):Wa(),(t=Ze)?(t=P0(t,Si),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Fa!==null?{id:qi,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},a=Ym(t),a.return=n,n.child=a,bn=n,Ze=null)):t=null,t===null)throw Ha(n);return Zh(t)?n.lanes=32:n.lanes=536870912,null}return u=r.children,r=r.fallback,c?(Wa(),c=n.mode,u=dc({mode:"hidden",children:u},c),r=Ts(r,c,a,null),u.return=n,r.return=n,u.sibling=r,n.child=u,r=n.child,r.memoizedState=Zf(a),r.childLanes=Kf(t,y,a),n.memoizedState=Wf,qo(null,r)):(Ya(n),Qf(n,u))}var T=t.memoizedState;if(T!==null){var I=T.dehydrated;if(I!==null)return vM(t,n,u,y,r,I,T,a)}return c?(Wa(),c=r.fallback,u=n.mode,T=t.child,I=T.sibling,r=da(T,{mode:"hidden",children:r.children}),r.subtreeFlags=T.subtreeFlags&1206910976,I!==null?c=da(I,c):(c=Ts(c,u,a,null),c.flags|=2),c.return=n,r.return=n,r.sibling=c,n.child=r,qo(null,r),r=n.child,c=t.child.memoizedState,c===null?c=Zf(a):(u=c.cachePool,u!==null?(T=hn._currentValue,u=u.parent!==T?{parent:T,pool:T}:u):u=ng(),c={baseLanes:c.baseLanes|a,cachePool:u}),r.memoizedState=c,r.childLanes=Kf(t,y,a),n.memoizedState=Wf,qo(t.child,r)):(Ya(n),a=t.child,t=a.sibling,a=da(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(y=n.deletions,y===null?(n.deletions=[t],n.flags|=16):y.push(t)),n.child=a,n.memoizedState=null,a)}function Qf(t,n){return n=dc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function dc(t,n){return t=Yn(22,t,null,n),t.lanes=0,t}function pc(t,n,a){return Os(n,t.child,null,a),t=Qf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function vM(t,n,a,r,c,u,y,T){if(a)return n.flags&256?(Ya(n),n.flags&=-257,pc(t,n,T)):n.memoizedState!==null?(Wa(),n.child=t.child,n.flags|=128,null):(Wa(),u=c.fallback,y=n.mode,c=dc({mode:"visible",children:c.children},y),u=Ts(u,y,T,null),u.flags|=2,c.return=n,u.return=n,c.sibling=u,n.child=c,Os(n,t.child,null,T),c=n.child,c.memoizedState=Zf(T),c.childLanes=Kf(t,r,T),n.memoizedState=Wf,qo(null,c));if(Ya(n),Zh(u)){if(r=u.nextSibling&&u.nextSibling.dataset,r)var I=r.dgst;return r=I,r!==""&&(c=Error(s(419)),c.stack="",c.digest=r,Oo({value:c,source:null,stack:null})),pc(t,n,T)}if(pn||Cs(t,n,T,!1),r=(T&t.childLanes)!==0,pn||r){if(qa.current!==null)return pc(t,n,T);if(r=Ye,r!==null&&(c=K(r,T),c!==0&&c!==y.retryLane))throw y.retryLane=c,bs(t,c),Qn(r,t,c),qf;return Wh(u)||Uc(),pc(t,n,T)}return Wh(u)?(n.flags|=192,n.child=t.child,null):(t=y.treeContext,Ze=Ei(u.nextSibling),bn=n,ve=!0,Ba=null,Si=!1,t!==null&&Km(n,t),n=Qf(n,c.children),n.flags|=134221824,n)}function m_(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),ql(t.return,n,a)}function g_(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&ec(a)===null&&(n=t),t=t.sibling}return n}function mc(t,n,a,r,c,u){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:u}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=r,y.tail=a,y.tailMode=c,y.treeForkCount=u)}function Jf(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function $f(t,n,a){var r=n.pendingProps,c=r.revealOrder,u=r.tail;r=r.children;var y=Ln.current;if(n.flags&128)return Vo(n,y),null;var T=(y&2)!==0;if(T?(y=y&1|2,n.flags|=128):y&=1,Vo(n,y),c==="backwards"&&t!==null?(Jf(t),xn(t,n,r,a),Jf(t)):xn(t,n,r,a),r=ve?Lo:0,!T&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&m_(t,a,n);else if(t.tag===19)m_(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"backwards":a=g_(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null,Jf(n)),mc(n,!0,c,null,u,r);break;case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&ec(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}mc(n,!0,a,null,u,r);break;case"together":mc(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:a=g_(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),mc(n,!1,c,a,u,r)}return n.child}function __(t,n,a){var r=n.pendingProps;return Ga(n,n.type,r.value),xn(t,n,r.children,a),n.child}function xa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ja|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Cs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=da(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=da(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function th(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Yl(t)))}function xM(t,n,a){switch(n.tag){case 3:st(n,n.stateNode.containerInfo),Ga(n,hn,t.memoizedState.cache),As();break;case 27:case 5:Mt(n);break;case 4:st(n,n.stateNode.containerInfo);break;case 10:Ga(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Tf(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return Ya(n),n.flags|=128,null;r=Cs(t,n,a,!1);var c=n.child.childLanes;return r||(a&c)!==0?p_(t,n,a):(Ya(n),t=xa(t,n,a),t!==null?t.sibling:null)}Ya(n);break;case 19:if(n.flags&128)return $f(t,n,a);if(c=(t.flags&128)!==0,r=(a&n.childLanes)!==0,r||(Cs(t,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return $f(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Vo(n,Ln.current),r)break;return null;case 22:return n.lanes=0,l_(t,n,a,n.pendingProps);case 24:Ga(n,hn,t.memoizedState.cache)}return xa(t,n,a)}function v_(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)pn=!0;else{if(!th(t,a)&&(n.flags&128)===0)return pn=!1,xM(t,n,a);pn=(t.flags&131072)!==0}else pn=!1,ve&&(n.flags&1048576)!==0&&Zm(n,Lo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=Us(n.elementType),n.type=t,typeof t=="function")of(t)?(r=Ps(t,r),n.tag=1,n=h_(null,n,t,r,a)):(n.tag=0,n=Yf(null,n,t,r,a));else{if(t!=null){var c=t.$$typeof;if(c===q){n.tag=11,n=s_(null,n,t,r,a);break t}else if(c===xt){n.tag=14,n=r_(null,n,t,r,a);break t}else if(c===ht){n.tag=10,n.type=t,n=__(null,n,a);break t}}throw n=Bt(t)||t,Error(s(306,n,""))}}return n;case 0:return Yf(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=Ps(r,n.pendingProps),h_(t,n,r,c,a);case 3:t:{if(st(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var u=n.memoizedState;c=u.element,yf(t,n),Go(n,r,null,a);var y=n.memoizedState;if(r=y.cache,Ga(n,hn,r),r!==u.cache&&pf(n,[hn],a,!0),Ho(),r=y.element,u.isDehydrated)if(u={element:r,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=u,n.memoizedState=u,n.flags&256){n=d_(t,n,r,a);break t}else if(r!==c){c=vi(Error(s(424)),n),Oo(c),n=d_(t,n,r,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ze=Ei(t.firstChild),bn=n,ve=!0,Ba=null,Si=!0,a=lg(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(As(),r===c){n=xa(t,n,a);break t}xn(t,n,r,a)}n=n.child}return n;case 26:return Ar(t,n),t===null?(a=j0(n.type,null,n.pendingProps,null))?n.memoizedState=a:ve||(n.stateNode=M0(n.type,n.pendingProps,L.current,n)):n.memoizedState=j0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Mt(n),t===null&&ve&&(r=n.stateNode=B0(n.type,n.pendingProps,L.current),bn=n,Si=!0,c=Ze,ns(n.type)?(Kh=c,Ze=Ei(r.firstChild)):Ze=c),xn(t,n,n.pendingProps.children,a),Ar(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&ve&&((c=r=Ze)&&(r=dE(r,n.type,n.pendingProps,Si),r!==null?(n.stateNode=r,bn=n,Ze=Ei(r.firstChild),Si=!1,c=!0):c=!1),c||Ha(n)),Mt(n),c=n.type,u=n.pendingProps,y=t!==null?t.memoizedProps:null,r=u.children,Gh(c,u)?r=null:y!==null&&Gh(c,y)&&(n.flags|=32),n.memoizedState!==null&&(c=Cf(t,n,lM,null,null,a),kr._currentValue=c),Ar(t,n),xn(t,n,r,a),n.child;case 6:return t===null&&ve&&((t=a=Ze)&&(a=pE(a,n.pendingProps,Si),a!==null?(n.stateNode=a,bn=n,Ze=null,t=!0):t=!1),t||Ha(n)),null;case 13:return p_(t,n,a);case 4:return st(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=Os(n,null,r,a):xn(t,n,r,a),n.child;case 11:return s_(t,n,n.type,n.pendingProps,a);case 7:return r=n.pendingProps,Ar(t,n),xn(t,n,r,a),n.child;case 8:return xn(t,n,n.pendingProps.children,a),n.child;case 12:return xn(t,n,n.pendingProps.children,a),n.child;case 10:return __(t,n,a);case 9:return c=n.type._context,r=n.pendingProps.children,ws(n),c=Dn(c),r=r(c),n.flags|=1,xn(t,n,r,a),n.child;case 14:return r_(t,n,n.type,n.pendingProps,a);case 15:return o_(t,n,n.type,n.pendingProps,a);case 19:return $f(t,n,a);case 31:return _M(t,n,a);case 22:return l_(t,n,a,n.pendingProps);case 24:return ws(n),r=Dn(hn),t===null?(c=_f(),c===null&&(c=Ye,u=mf(),c.pooledCache=u,u.refCount++,u!==null&&(c.pooledCacheLanes|=a),c=u),n.memoizedState={parent:r,cache:c},xf(n),Ga(n,hn,c)):((t.lanes&a)!==0&&(yf(t,n),Go(n,null,null,a),Ho()),c=t.memoizedState,u=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Ga(n,hn,r)):(r=u.cache,Ga(n,hn,r),r!==c.cache&&pf(n,[hn],a,!0))),xn(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=t===null?18882560:18874368:ve&&kl(n),t!==null&&t.memoizedProps.name!==r.name?n.flags|=4194816:Ar(t,n),xn(t,n,r.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ya(t){t.flags|=4}function eh(t,n,a,r,c){var u;if((u=(t.mode&32)!==0)&&(u=a===null?Y0(n,r):Y0(n,r)&&(r.src!==a.src||r.srcSet!==a.srcSet)),u){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if($_())t.flags|=8192;else throw Ls=Ql,vf}else t.flags&=-16777217}function x_(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!W0(n))if($_())t.flags|=8192;else throw Ls=Ql,vf}function gc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?sr():536870912,t.lanes|=n,Dr|=n)}function Yo(t,n){if(!ve)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function Ke(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&1206910976,r|=c.flags&1206910976,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function yM(t,n,a){var r=n.pendingProps;switch(uf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),ga(hn),vt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(xr(n)?ya(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,hf())),Ke(n),null;case 26:var c=n.type,u=n.memoizedState;return t===null?(ya(n),u!==null?(Ke(n),x_(n,u)):(Ke(n),eh(n,c,null,r,a))):u?u!==t.memoizedState?(ya(n),Ke(n),x_(n,u)):(Ke(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&ya(n),Ke(n),eh(n,c,t,r,a)),null;case 27:if(_t(n),a=L.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ya(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ke(n),n.subtreeFlags&=-33554433,null}t=_e.current,xr(n)?Qm(n):(t=B0(c,r,a),n.stateNode=t,ya(n))}return Ke(n),n.subtreeFlags&=-33554433,null;case 5:if(_t(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ya(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ke(n),n.subtreeFlags&=-33554433,null}if(u=_e.current,xr(n))Qm(n);else{var y=al(L.current);switch(u){case 1:u=y.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:u=y.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":u=y.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":u=y.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":u=y.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof r.is=="string"?y.createElement("select",{is:r.is}):y.createElement("select"),r.multiple?u.multiple=!0:r.size&&(u.size=r.size);break;default:u=typeof r.is=="string"?y.createElement(c,{is:r.is}):y.createElement(c)}}u[Dt]=n,u[Pt]=r;t:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)u.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break t;for(;y.sibling===null;){if(y.return===null||y.return===n)break t;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=u;t:switch(zn(u,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&ya(n)}}return Ke(n),n.subtreeFlags&=-33554433,eh(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&ya(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=L.current,xr(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,c=bn,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}t[Dt]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||v0(t.nodeValue,a)),t||Ha(n,!0)}else t=al(t).createTextNode(r),t[Dt]=n,n.stateNode=t}return Ke(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=xr(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[Dt]=n}else As(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),t=!1}else a=hf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ri(n),n):(ri(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ke(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=xr(n),r!==null&&r.dehydrated!==null){if(t===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[Dt]=n}else As(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),c=!1}else c=hf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(ri(n),n):(ri(n),null)}return ri(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==c&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),gc(n,n.updateQueue),Ke(n),null);case 4:return vt(),t===null&&Ph(n.stateNode.containerInfo),n.flags|=67108864,Ke(n),null;case 10:return ga(n.type),Ke(n),null;case 19:if(Af(n),r=n.memoizedState,r===null)return Ke(n),null;if(c=(n.flags&128)!==0,u=r.rendering,u===null)if(c)Yo(r,!1);else{if(sn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(u=ec(t),u!==null){for(n.flags|=128,Yo(r,!1),t=u.updateQueue,n.updateQueue=t,gc(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)qm(a,t),a=a.sibling;return Vo(n,Ln.current&1|2),ve&&pa(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&k()>Cc&&(n.flags|=128,c=!0,Yo(r,!1),n.lanes=4194304)}else{if(!c)if(t=ec(u),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,gc(n,t),Yo(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!u.alternate&&!ve)return Ke(n),null}else 2*k()-r.renderingStartTime>Cc&&a!==536870912&&(n.flags|=128,c=!0,Yo(r,!1),n.lanes=4194304);r.isBackwards?(u.sibling=n.child,n.child=u):(t=r.last,t!==null?t.sibling=u:n.child=u,r.last=u)}if(r.tail!==null){t=r.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return r.rendering=t,r.tail=t.sibling,r.renderingStartTime=k(),t.sibling=null,u=Ln.current,u=c?u&1|2:u&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!a||ve?Vo(n,u):(a=u,Ct(Un,n),Ct(Ln,a),Fn===null&&(Fn=n)),ve&&pa(n,r.treeForkCount),t}return Ke(n),null;case 22:case 23:return ri(n),bf(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),a=n.updateQueue,a!==null&&gc(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&$t(Ds),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ga(hn),Ke(n),null;case 25:return null;case 30:return n.flags|=33554432,Ke(n),null}throw Error(s(156,n.tag))}function SM(t,n){switch(uf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ga(hn),vt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return _t(n),null;case 31:if(n.memoizedState!==null){if(ri(n),n.alternate===null)throw Error(s(340));As()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ri(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));As()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Af(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return vt(),null;case 10:return ga(n.type),null;case 22:case 23:return ri(n),bf(),t!==null&&$t(Ds),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ga(hn),null;case 25:return null;default:return null}}function y_(t,n){switch(uf(n),n.tag){case 3:ga(hn),vt();break;case 26:case 27:case 5:_t(n);break;case 4:vt();break;case 31:n.memoizedState!==null&&ri(n);break;case 13:ri(n);break;case 19:Af(n);break;case 10:ga(n.type);break;case 22:case 23:ri(n),bf(),t!==null&&$t(Ds);break;case 24:ga(hn)}}function Wo(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&t)===t){r=void 0;var u=a.create,y=a.inst;r=u(),y.destroy=r}a=a.next}while(a!==c)}}catch(T){Be(n,n.return,T)}}function Za(t,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var u=c.next;r=u;do{if((r.tag&t)===t){var y=r.inst,T=y.destroy;if(T!==void 0){y.destroy=void 0,c=n;var I=a,Q=T;try{Q()}catch(rt){Be(c,I,rt)}}}r=r.next}while(r!==u)}}catch(rt){Be(n,n.return,rt)}}function S_(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{ug(n,a)}catch(r){Be(t,t.return,r)}}}function M_(t,n,a){a.props=Ps(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Be(t,n,r)}}function Wi(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:var c=t.stateNode,u=fa(t.memoizedProps,c);(c.ref===null||c.ref.name!==u)&&(c.ref=w0(u)),r=c.ref;break;case 7:if(t.stateNode===null){var y=new fi(t);g(t.child,!1,fE,y,void 0,void 0),t.stateNode=y}r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(T){Be(t,n,T)}}function On(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){Be(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Be(t,n,c)}else a.current=null}function _c(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)z0(t.stateNode,n[a])}function E_(t){for(var n=t.return;n!==null&&(ih(n)&&z0(t.stateNode,n.stateNode),!nh(n));)n=n.return}function Zo(t){for(var n=t.return;n!==null&&(ih(n)&&hE(t.stateNode,n.stateNode),!nh(n));)n=n.return}function nh(t){return t.tag===5||t.tag===3||t.tag===27}function ih(t){return t&&t.tag===7&&t.stateNode!==null}function ah(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){Be(t,t.return,c)}}function sh(t,n,a){try{var r=t.stateNode;YM(r,t.type,a,n),r[Pt]=n}catch(c){Be(t,t.return,c)}}function b_(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ns(t.type)||t.tag===4}function rh(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||b_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ns(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function oh(t,n,a,r){var c=t.tag;if(c===5||c===6)c=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(c,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(c),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Xi)),_c(t,r),Oe=!0;else if(c!==4&&(c===27&&(_c(t,r),r=null,ns(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(oh(t,n,a,r),t=t.sibling;t!==null;)oh(t,n,a,r),t=t.sibling}function vc(t,n,a,r){var c=t.tag;if(c===5||c===6)c=t.stateNode,n?a.insertBefore(c,n):a.appendChild(c),_c(t,r),Oe=!0;else if(c!==4&&(c===27&&(_c(t,r),r=null,ns(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(vc(t,n,a,r),t=t.sibling;t!==null;)vc(t,n,a,r),t=t.sibling}function T_(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);zn(n,r,a),n[Dt]=t,n[Pt]=a}catch(u){Be(t,t.return,u)}}var xc=!1,oi=null;function A_(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(xc=!0)}var Zi=null;function R_(){var t=Zi;return Zi=null,t}var Wn=0;function Rr(t,n,a,r,c){return Wn=0,C_(t.child,n,a,r,c)}function C_(t,n,a,r,c){for(var u=!1;t!==null;){if(t.tag===5){var y=t.stateNode;if(r!==null){var T=kh(y);r.push(T),T.view&&(u=!0)}else u||kh(y).view&&(u=!0);xc=!0,R0(y,Wn===0?n:n+"_"+Wn,a),Wn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&c||C_(t.child,n,a,r,c)&&(u=!0));t=t.sibling}return u}function Ki(t,n){for(;t!==null;)t.tag===5?C0(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Ki(t.child,n)),t=t.sibling}function yc(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(yc(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=ha(n.default,n.share),n!=="none"&&(Rr(t,a,n,null,!1)||Ki(t.child,!1))}t=t.sibling}}function lh(t,n){if(t.tag===30){var a=t.stateNode,r=t.memoizedProps,c=fa(r,a),u=ha(r.default,a.paired?r.share:r.enter);u!=="none"?Rr(t,c,u,null,!1)?(yc(t),a.paired||n||zr(t,r.onEnter)):Ki(t.child,!1):yc(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)lh(t,n),t=t.sibling;else yc(t)}function ch(t){if(oi!==null&&oi.size!==0){var n=oi;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,r=a.name;if(r!=null&&r!=="auto"){var c=n.get(r);if(c!==void 0){var u=ha(a.default,a.share);if(u!=="none"&&(Rr(t,r,u,null,!1)?(u=t.stateNode,c.paired=u,u.paired=c,zr(t,a.onShare)):Ki(t.child,!1)),n.delete(r),n.size===0)break}}}ch(t)}t=t.sibling}}}function uh(t){if(t.tag===30){var n=t.memoizedProps,a=fa(n,t.stateNode),r=oi!==null?oi.get(a):void 0,c=ha(n.default,r!==void 0?n.share:n.exit);c!=="none"&&(Rr(t,a,c,null,!1)?r!==void 0?(c=t.stateNode,r.paired=c,c.paired=r,oi.delete(a),zr(t,n.onShare)):zr(t,n.onExit):Ki(t.child,!1)),oi!==null&&ch(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)uh(t),t=t.sibling;else oi!==null&&ch(t)}function w_(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=fa(n,t.stateNode);n=ha(n.default,n.update),t.flags&=-5,n!=="none"&&Rr(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&w_(t);t=t.sibling}}function fh(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,Ki(t.child,!1))}fh(t)}t=t.sibling}}function Sc(t){if(t.tag===30)t.stateNode.paired=null,Ki(t.child,!1),fh(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Sc(t),t=t.sibling;else fh(t)}function N_(t){for(t=t.child;t!==null;)t.tag===30?Ki(t.child,!1):(t.subtreeFlags&33554432)!==0&&N_(t),t=t.sibling}function hh(t,n,a,r,c,u,y){for(var T=!1;n!==null;){if(n.tag===5){var I=n.stateNode;if(u!==null&&Wn<u.length){var Q=u[Wn],rt=kh(I);(Q.view||rt.view)&&(T=!0);var mt;if(mt=(t.flags&4)===0)if(rt.clip)mt=!0;else{mt=Q.rect;var Y=rt.rect;mt=mt.y!==Y.y||mt.x!==Y.x||mt.height!==Y.height||mt.width!==Y.width}mt&&(t.flags|=4),rt.abs?rt=!Q.abs:(Q=Q.rect,rt=rt.rect,rt=Q.height!==rt.height||Q.width!==rt.width),rt&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&R0(I,Wn===0?a:a+"_"+Wn,c),T&&(t.flags&4)!==0||(Zi===null&&(Zi=[]),Zi.push(I,Wn===0?r:r+"_"+Wn,n.memoizedProps)),Wn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&y?t.flags|=n.flags&32:hh(t,n.child,a,r,c,u,y)&&(T=!0));n=n.sibling}return T}function D_(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,r=t.stateNode,c=fa(a,r),u=ha(a.default,a.update),y;y=t.memoizedState,t.memoizedState=null,r=t;var T=t.child;Wn=0,c=hh(r,T,c,c,u,y,!1),(t.flags&4)!==0&&c&&zr(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&D_(t);t=t.sibling}}var Tn=!1,Ie=!1,Qi=!1,dh=!1,U_=typeof WeakSet=="function"?WeakSet:Set,An=null,Ji=!1,Ko=!1,Mc=!1,ph=!1;function MM(t,n,a){if(t=t.containerInfo,Bh=Xr,t=Pm(t),$u(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var c=r.getSelection&&r.getSelection();if(c&&c.rangeCount!==0){r=c.anchorNode;var u=c.anchorOffset,y=c.focusNode;c=c.focusOffset;try{r.nodeType,y.nodeType}catch{r=null;break t}var T=0,I=-1,Q=-1,rt=0,mt=0,Y=t,it=null;e:for(;;){for(var Ot;Y!==r||u!==0&&Y.nodeType!==3||(I=T+u),Y!==y||c!==0&&Y.nodeType!==3||(Q=T+c),Y.nodeType===3&&(T+=Y.nodeValue.length),(Ot=Y.firstChild)!==null;)it=Y,Y=Ot;for(;;){if(Y===t)break e;if(it===r&&++rt===u&&(I=T),it===y&&++mt===c&&(Q=T),(Ot=Y.nextSibling)!==null)break;Y=it,it=Y.parentNode}Y=Ot}r=I===-1||Q===-1?null:{start:I,end:Q}}else r=null}r=r||{start:0,end:0}}else r=null;for(Hh={focusedElem:t,selectionRange:r},Xr=!1,a=(a&335544064)===a,An=n,n=a?9270:1024;An!==null;){if(t=An,a&&(r=t.deletions,r!==null))for(u=0;u<r.length;u++)a&&uh(r[u]);if(t.alternate===null&&(t.flags&2)!==0)a&&A_(t),Ec(a);else{if(t.tag===22){if(r=t.alternate,t.memoizedState!==null){r!==null&&r.memoizedState===null&&a&&uh(r),Ec(a);continue}else if(r!==null&&r.memoizedState!==null){a&&A_(t),Ec(a);continue}}r=t.child,(t.subtreeFlags&n)!==0&&r!==null?(r.return=t,An=r):(a&&w_(t),Ec(a))}}oi=null}function Ec(t){for(;An!==null;){var n=An,a=t,r=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((c&1024)!==0&&r!==null){a=void 0,c=r.memoizedProps,r=r.memoizedState;var u=n.stateNode;try{var y=Ps(n.type,c);a=u.getSnapshotBeforeUpdate(y,r),u.__reactInternalSnapshotBeforeUpdate=a}catch(T){Be(n,n.return,T)}}break;case 3:if((c&1024)!==0){if(r=n.stateNode.containerInfo,a=r.nodeType,a===9)Yh(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Yh(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&r!==null&&(a=fa(r.memoizedProps,r.stateNode),c=n.memoizedProps,c=ha(c.default,c.update),c!=="none"&&Rr(r,a,c,r.memoizedState=[],!0));break;default:if((c&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,An=r;break}An=n.return}}function L_(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:$i(t,a),r&4&&Wo(5,a);break;case 1:if($i(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(y){Be(a,a.return,y)}else{var c=Ps(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(y){Be(a,a.return,y)}}r&64&&S_(a),r&512&&Wi(a,a.return);break;case 3:if($i(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{ug(t,n)}catch(y){Be(a,a.return,y)}}break;case 27:n===null&&r&4&&T_(a);case 26:case 5:$i(t,a),n===null&&r&4&&ah(a),r&512&&Wi(a,a.return);break;case 12:$i(t,a);break;case 31:$i(t,a),r&4&&I_(t,a);break;case 13:$i(t,a),r&4&&F_(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=OM.bind(null,a),mE(t,a))));break;case 22:if(r=a.memoizedState!==null||Tn,!r){var u=n!==null&&n.memoizedState!==null||Ie;n=Tn,c=Ie,Tn=r,(Ie=u)&&!c?(r=2,(a.subtreeFlags&8772)!==0&&(r|=1),Pi(t,a,r)):$i(t,a),Tn=n,Ie=c}break;case 30:$i(t,a),r&512&&Wi(a,a.return);break;case 7:r&512&&Wi(a,a.return);default:$i(t,a)}}function mh(t,n){for(t=t.child;t!==null;)O_(t,n),t=t.sibling}function O_(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var r=a.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var c=t.stateNode,u=t.memoizedProps.style,y=u!=null&&u.hasOwnProperty("display")?u.display:null;c.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(I){Be(t,t.return,I)}gh(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,Oe=!0}catch(I){Be(t,t.return,I)}break;case 18:try{var T=t.stateNode;n?A0(T,!0):A0(t.stateNode,!1)}catch(I){Be(t,t.return,I)}break;case 22:case 23:t.memoizedState===null&&mh(t,n);break;default:mh(t,n)}}function gh(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,r=n;switch(a.tag){case 4:O_(a,r);break t;case 22:a.memoizedState===null&&gh(a,r);break t;default:gh(a,r)}}t=t.sibling}}function z_(t){var n=t.alternate;n!==null&&(t.alternate=null,z_(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Se(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var $e=null,Zn=!1;function Oi(t,n,a){for(a=a.child;a!==null;)P_(t,n,a),a=a.sibling}function P_(t,n,a){if(Ne&&typeof Ne.onCommitFiberUnmount=="function")try{Ne.onCommitFiberUnmount(ye,a)}catch{}switch(a.tag){case 26:Ie||On(a,n),Oi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Ie&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ie||On(a,n),Zo(a);var r=$e,c=Zn;ns(a.type)&&($e=a.stateNode,Zn=!1),Oi(t,n,a),H0(a.stateNode,a.type,a.memoizedProps),$e=r,Zn=c;break;case 5:Ie||On(a,n),Zo(a);case 6:if(a.tag===6&&Zo(a),r=$e,c=Zn,$e=null,Oi(t,n,a),$e=r,Zn=c,$e!==null)if(Zn)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(a.stateNode),Oe=!0}catch(u){Be(a,n,u)}else try{$e.removeChild(a.stateNode),Oe=!0}catch(u){Be(a,n,u)}break;case 18:$e!==null&&(Zn?(t=$e,T0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),qr(t)):T0($e,a.stateNode));break;case 4:r=$e,c=Zn,$e=a.stateNode.containerInfo,Zn=!0,Oi(t,n,a),$e=r,Zn=c;break;case 0:case 11:case 14:case 15:Za(2,a,n),Ie||Za(4,a,n),Oi(t,n,a);break;case 1:Ie||(On(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&M_(a,n,r)),Oi(t,n,a);break;case 21:Oi(t,n,a);break;case 22:Ie=(r=Ie)||a.memoizedState!==null,Oi(t,n,a),Ie=r;break;case 30:On(a,n),Oi(t,n,a);break;case 7:Ie||On(a,n),Oi(t,n,a);break;default:Oi(t,n,a)}}function I_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{qr(t)}catch(a){Be(n,n.return,a)}}}function F_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{qr(t)}catch(a){Be(n,n.return,a)}}function EM(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new U_),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new U_),n;default:throw Error(s(435,t.tag))}}function bc(t,n){var a=EM(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=zM.bind(null,t,r);r.then(c,c)}})}function kn(t,n,a){var r=n.deletions;if(r!==null)for(var c=0;c<r.length;c++){var u=r[c],y=t,T=n,I=T;t:for(;I!==null;){switch(I.tag){case 27:if(ns(I.type)){$e=I.stateNode,Zn=!1;break t}break;case 5:$e=I.stateNode,Zn=!1;break t;case 3:case 4:$e=I.stateNode.containerInfo,Zn=!0;break t}I=I.return}if($e===null)throw Error(s(160));P_(y,T,u),$e=null,Zn=!1,y=u.alternate,y!==null&&(y.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)B_(n,t,a),n=n.sibling}var zi=null;function B_(t,n,a){var r=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(c&4&&(r=t.updateQueue,r=r!==null?r.events:null,r!==null))for(var u=0;u<r.length;u++){var y=r[u];y.ref.impl=y.nextImpl}kn(n,t,a),Xn(t),c&4&&(Za(3,t,t.return),Wo(3,t),Za(5,t,t.return));break;case 1:kn(n,t,a),Xn(t),c&512&&(Ie||r===null||On(r,r.return)),c&64&&Tn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(u=zi,kn(n,t,a),Xn(t),c&512&&(Ie||r===null||On(r,r.return)),c&4)if(c=r!==null?r.memoizedState:null,a=t.memoizedState,r===null)if(a===null)if(t.stateNode===null)if(Tn)t.stateNode=M0(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,c=u.ownerDocument||u;e:switch(n){case"title":r=c.getElementsByTagName("title")[0],(!r||r[We]||r[Dt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=c.createElement(n),c.head.insertBefore(r,c.querySelector("head > title"))),zn(r,n,a),r[Dt]=t,Qe(r),n=r;break t;case"link":if(u=q0("link","href",c).get(n+(a.href||""))){for(y=0;y<u.length;y++)if(r=u[y],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(y,1);break e}}r=c.createElement(n),zn(r,n,a),c.head.appendChild(r);break;case"meta":if(u=q0("meta","content",c).get(n+(a.content||""))){for(y=0;y<u.length;y++)if(r=u[y],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(y,1);break e}}r=c.createElement(n),zn(r,n,a),c.head.appendChild(r);break;default:throw Error(s(468,n))}r[Dt]=t,Qe(r),n=r}t.stateNode=n}else Tn||td(u,t.type,t.stateNode);else t.stateNode=X0(u,a,t.memoizedProps);else c!==a?(c===null?(n=r.stateNode,n===null||Ie||n.parentNode.removeChild(n)):c.count--,a===null?Tn||td(u,t.type,t.stateNode):X0(u,a,t.memoizedProps)):a===null&&t.stateNode!==null&&sh(t,t.memoizedProps,r.memoizedProps);break;case 27:kn(n,t,a),Xn(t),c&512&&(Ie||r===null||On(r,r.return)),r!==null&&c&4&&sh(t,t.memoizedProps,r.memoizedProps);break;case 5:if(u=Qi,Qi=!1,kn(n,t,a),Qi=u,Xn(t),c&512&&(Ie||r===null||On(r,r.return)),t.flags&32){n=t.stateNode;try{cr(n,""),Oe=!0}catch(rt){Be(t,t.return,rt)}}c&4&&t.stateNode!=null&&(n=t.memoizedProps,sh(t,n,r!==null?r.memoizedProps:n)),c&1024&&(dh=!0);break;case 6:if(kn(n,t,a),Xn(t),c&4){if(t.stateNode===null)throw Error(s(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,Oe=!0}catch(rt){Be(t,t.return,rt)}}break;case 3:if(Oe=!1,Bc=null,u=zi,zi=sl(n.containerInfo),kn(n,t,a),zi=u,Xn(t),c&4&&r!==null&&r.memoizedState.isDehydrated)try{qr(n.containerInfo)}catch(rt){Be(t,t.return,rt)}dh&&(dh=!1,H_(t)),Oe=!1;break;case 4:c=Qi,Qi=Tn,r=rm(),u=zi,zi=sl(t.stateNode.containerInfo),kn(n,t,a),Xn(t),zi=u,Oe&&Ko&&(Mc=!0),Oe=r,Qi=c;break;case 12:kn(n,t,a),Xn(t);break;case 31:kn(n,t,a),Xn(t),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,bc(t,n)));break;case 13:kn(n,t,a),Xn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Rc=k()),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,bc(t,n)));break;case 22:u=t.memoizedState!==null,y=r!==null&&r.memoizedState!==null;var T=Tn,I=Ie,Q=Qi;Tn=T||u,Qi=Q||u,Ie=I||y,kn(n,t,a),Ie=I,Qi=Q,Tn=T,Xn(t),c&8192&&(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,!u||r===null||y||Tn||Ie||(n=y||Ie,a=Tn,r=Ie,Tn=u||Tn,Ie=n,Ka(t,2),Tn=a,Ie=r),!u&&Qi||mh(t,u)),c&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,bc(t,a))));break;case 19:kn(n,t,a),Xn(t),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,bc(t,n)));break;case 30:c&512&&(Ie||r===null||On(r,r.return)),c=rm(),u=Ko,y=(a&335544064)===a,T=t.memoizedProps,Ko=y&&ha(T.default,T.update)!=="none",kn(n,t,a),Xn(t),y&&r!==null&&Oe&&(t.flags|=4),Ko=u,Oe=c;break;case 21:break;case 7:c&512&&(Ie||r===null||On(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=t);default:kn(n,t,a),Xn(t)}}function Xn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(b_(r)){a=r;break}r=r.return}r=null;for(var c=t.return;c!==null;){if(ih(c)){var u=c.stateNode;r===null?r=[u]:r.push(u)}if(nh(c))break;c=c.return}var y=r;if(a==null)throw Error(s(160));switch(a.tag){case 27:var T=a.stateNode,I=rh(t);vc(t,I,T,y);break;case 5:var Q=a.stateNode;a.flags&32&&(cr(Q,""),a.flags&=-33);var rt=rh(t);vc(t,rt,Q,y);break;case 3:case 4:var mt=a.stateNode.containerInfo,Y=rh(t);oh(t,Y,mt,y);break;default:throw Error(s(161))}}catch(it){Be(t,t.return,it)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function H_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;H_(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Xr=!0,n.reset(),Xr=!1),t=t.sibling}}function Cr(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)G_(n,t),n=n.sibling;else D_(n)}function G_(t,n){var a=t.alternate;if(a===null)lh(t,!1);else switch(t.tag){case 3:if(ph=Ji=!1,R_(),Cr(n,t),!Ji&&!Mc){if(t=Zi,t!==null)for(var r=0;r<t.length;r+=3){a=t[r];var c=t[r+1];C0(a,t[r+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+c+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),ph=!0}Zi=null;break;case 5:Cr(n,t);break;case 4:r=Ji,Ji=!1,Cr(n,t),Ji&&(Mc=!0),Ji=r;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?lh(t,!1):Cr(n,t));break;case 30:r=Ji,c=R_(),Ji=!1,Cr(n,t),Ji&&(t.flags|=4);var u=t.memoizedProps,y=t.stateNode;n=fa(u,y),y=fa(a.memoizedProps,y);var T=ha(u.default,u.update);T==="none"?n=!1:(u=a.memoizedState,a.memoizedState=null,a=t.child,Wn=0,n=hh(t,a,n,y,T,u,!0),Wn!==(u===null?0:u.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(zr(t,t.memoizedProps.onUpdate),Zi=c):c!==null&&(c.push.apply(c,Zi),Zi=c),Ji=(t.flags&32)!==0?!0:r;break;default:Cr(n,t)}}function $i(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)L_(t,n.alternate,n),n=n.sibling}function Ka(t,n){for(t=t.child;t!==null;){var a=t,r=n;switch(a.tag){case 0:case 11:case 14:case 15:Za(4,a,a.return),Ka(a,r);break;case 1:On(a,a.return);var c=a.stateNode;typeof c.componentWillUnmount=="function"&&M_(a,a.return,c),Ka(a,r);break;case 27:(r&2)!==0&&H0(a.stateNode,a.type,a.memoizedProps);case 5:On(a,a.return),a.tag!==5&&a.tag!==27||Zo(a),Ka(a,r);break;case 6:Zo(a);break;case 26:On(a,a.return),c=a.stateNode,a.memoizedState!==null||c===null||Ie||c.parentNode.removeChild(c),Ka(a,r);break;case 22:a.memoizedState===null&&Ka(a,r);break;case 30:On(a,a.return),Ka(a,r);break;case 7:On(a,a.return);default:Ka(a,r)}t=t.sibling}}function Pi(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var r=n.alternate,c=t,u=n,y=u.flags,T=(a&1)!==0;switch(u.tag){case 0:case 11:case 15:Pi(c,u,a),Wo(4,u);break;case 1:if(Pi(c,u,a),r=u,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(rt){Be(r,r.return,rt)}if(r=u,c=r.updateQueue,c!==null){var I=r.stateNode;try{var Q=c.shared.hiddenCallbacks;if(Q!==null)for(c.shared.hiddenCallbacks=null,c=0;c<Q.length;c++)cg(Q[c],I)}catch(rt){Be(r,r.return,rt)}}T&&y&64&&S_(u),Wi(u,u.return);break;case 27:(a&2)!==0&&T_(u);case 5:u.tag!==5&&u.tag!==27||E_(u),Pi(c,u,a),T&&r===null&&y&4&&ah(u),Wi(u,u.return);break;case 6:E_(u);break;case 26:I=u.stateNode,u.memoizedState!==null||I===null||Tn||td(sl(I.ownerDocument),u.type,I),Pi(c,u,a),T&&r===null&&y&4&&ah(u),Wi(u,u.return);break;case 12:Pi(c,u,a);break;case 31:Pi(c,u,a),T&&y&4&&I_(c,u);break;case 13:Pi(c,u,a),T&&y&4&&F_(c,u);break;case 22:u.memoizedState===null&&Pi(c,u,a),Wi(u,u.return);break;case 30:Pi(c,u,a),Wi(u,u.return);break;case 7:Wi(u,u.return);default:Pi(c,u,a)}n=n.sibling}}function _h(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&zo(a))}function vh(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&zo(t))}function Mi(t,n,a,r){var c=(a&335544064)===a;if(n.subtreeFlags&(c?10262:10256))for(n=n.child;n!==null;)V_(t,n,a,r),n=n.sibling;else c&&N_(n)}function V_(t,n,a,r){var c=(a&335544064)===a;c&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Sc(n);var u=n.flags;switch(n.tag){case 0:case 11:case 15:Mi(t,n,a,r),u&2048&&Wo(9,n);break;case 1:Mi(t,n,a,r);break;case 3:Mi(t,n,a,r),c&&ph&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),u&2048&&(u=null,n.alternate!==null&&(u=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==u&&(n.refCount++,u!=null&&zo(u)));break;case 12:if(u&2048){Mi(t,n,a,r),u=n.stateNode;try{var y=n.memoizedProps,T=y.id,I=y.onPostCommit;typeof I=="function"&&I(T,n.alternate===null?"mount":"update",u.passiveEffectDuration,-0)}catch(Q){Be(n,n.return,Q)}}else Mi(t,n,a,r);break;case 31:Mi(t,n,a,r);break;case 13:Mi(t,n,a,r);break;case 23:break;case 22:y=n.stateNode,T=n.alternate,n.memoizedState!==null?(c&&T!==null&&T.memoizedState===null&&Sc(T),y._visibility&2?Mi(t,n,a,r):Qo(t,n)):(c&&T!==null&&T.memoizedState!==null&&Sc(n),y._visibility&2?Mi(t,n,a,r):(y._visibility|=2,wr(t,n,a,r,(n.subtreeFlags&10256)!==0||!1))),u&2048&&_h(T,n);break;case 24:Mi(t,n,a,r),u&2048&&vh(n.alternate,n);break;case 30:c&&(u=n.alternate,u!==null&&(Ki(u.child,!0),Ki(n.child,!0))),Mi(t,n,a,r);break;default:Mi(t,n,a,r)}}function wr(t,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var u=t,y=n,T=a,I=r,Q=y.flags;switch(y.tag){case 0:case 11:case 15:wr(u,y,T,I,c),Wo(8,y);break;case 23:break;case 22:var rt=y.stateNode;y.memoizedState!==null?rt._visibility&2?wr(u,y,T,I,c):Qo(u,y):(rt._visibility|=2,wr(u,y,T,I,c)),c&&Q&2048&&_h(y.alternate,y);break;case 24:wr(u,y,T,I,c),c&&Q&2048&&vh(y.alternate,y);break;default:wr(u,y,T,I,c)}n=n.sibling}}function Qo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,c=r.flags;switch(r.tag){case 22:Qo(a,r),c&2048&&_h(r.alternate,r);break;case 24:Qo(a,r),c&2048&&vh(r.alternate,r);break;default:Qo(a,r)}n=n.sibling}}var Is=8192;function Fs(t,n,a){if(t.subtreeFlags&Is)for(t=t.child;t!==null;)j_(t,n,a),t=t.sibling}function j_(t,n,a){switch(t.tag){case 26:Fs(t,n,a),t.flags&Is&&(t.memoizedState!==null?wE(a,zi,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&K0(a,t)));break;case 5:Fs(t,n,a),t.flags&Is&&(t=t.stateNode,(n&335544128)===n&&K0(a,t));break;case 3:case 4:var r=zi;zi=sl(t.stateNode.containerInfo),Fs(t,n,a),zi=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=Is,Is=16777216,Fs(t,n,a),Is=r):Fs(t,n,a));break;case 30:if((t.flags&Is)!==0&&(r=t.memoizedProps.name,r!=null&&r!=="auto")){var c=t.stateNode;c.paired=null,oi===null&&(oi=new Map),oi.set(r,c)}Fs(t,n,a);break;default:Fs(t,n,a)}}function k_(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Jo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];An=r,q_(r,t)}k_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)X_(t),t=t.sibling}function X_(t){switch(t.tag){case 0:case 11:case 15:Jo(t),t.flags&2048&&Za(9,t,t.return);break;case 3:Jo(t);break;case 12:Jo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Tc(t)):Jo(t);break;default:Jo(t)}}function Tc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];An=r,q_(r,t)}k_(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Za(8,n,n.return),Tc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Tc(n));break;default:Tc(n)}t=t.sibling}}function q_(t,n){for(;An!==null;){var a=An;switch(a.tag){case 0:case 11:case 15:Za(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:zo(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,An=r;else t:for(a=t;An!==null;){r=An;var c=r.sibling,u=r.return;if(z_(r),r===a){An=null;break t}if(c!==null){c.return=u,An=c;break t}An=u}}}var bM={getCacheForType:function(t){var n=Dn(hn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Dn(hn).controller.signal}},TM=typeof WeakMap=="function"?WeakMap:Map,Pe=0,Ye=null,Me=null,Re=0,Fe=0,li=null,Qa=!1,Nr=!1,xh=!1,Sa=0,sn=0,Ja=0,Bs=0,Ac=0,ci=0,Dr=0,$o=null,Kn=null,yh=!1,Rc=0,Y_=0,Cc=1/0,wc=null,$a=null,nn=0,Ii=null,Hs=null,ta=0,Sh=0,Mh=null,W_=null,Ur=null,Lr=null,Or=null,tl=0,Nc=null;function ui(){return(Pe&2)!==0&&Re!==0?Re&-Re:bt.T!==null?Uh():J()}function Z_(){if(ci===0)if((Re&536870912)===0||ve){var t=ra;ra<<=1,(ra&3932160)===0&&(ra=262144),ci=t}else ci=536870912;return t=Un.current,t!==null&&(t.flags|=32),ci}function zr(t,n){if(n!=null){var a=t.stateNode,r=a.ref;r===null&&(r=a.ref=w0(fa(t.memoizedProps,a))),Lr===null&&(Lr=[]),Lr.push(n.bind(null,r))}}function Qn(t,n,a){(t===Ye&&(Fe===2||Fe===9)||t.cancelPendingCommit!==null)&&(Pr(t,0),ts(t,Re,ci,!1)),oa(t,a),((Pe&2)===0||t!==Ye)&&(t===Ye&&((Pe&2)===0&&(Bs|=a),sn===4&&ts(t,Re,ci,!1)),ea(t))}function K_(t,n,a){if((Pe&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ui(t,n),c=r?CM(t,n):bh(t,n,!0),u=r;do{if(c===0){Nr&&!r&&ts(t,n,0,!1);break}else{if(a=t.current.alternate,u&&!AM(a)){c=bh(t,n,!1),u=!1;continue}if(c===2){if(u=n,t.errorRecoveryDisabledLanes&u)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var T=t;c=$o;var I=T.current.memoizedState.isDehydrated;if(I&&(Pr(T,y).flags|=256),y=bh(T,y,!1),y!==2&&y!==6){if(xh&&!I){T.errorRecoveryDisabledLanes|=u,Bs|=u,c=4;break t}u=Kn,Kn=c,u!==null&&(Kn===null?Kn=u:Kn.push.apply(Kn,u))}c=y}if(u=!1,c!==2)continue}}if(c===1){Pr(t,0),ts(t,n,0,!0);break}t:{switch(r=t,u=c,u){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:ts(r,n,ci,!Qa);break t;case 2:Kn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Rc+300-k(),10<c)){if(ts(r,n,ci,!Qa),mi(r,0,!0)!==0)break t;ta=n,r.timeoutHandle=jh(Q_.bind(null,r,a,Kn,wc,yh,n,ci,Bs,Dr,Qa,u,"Throttled",-0,0),c);break t}Q_(r,a,Kn,wc,yh,n,ci,Bs,Dr,Qa,u,null,-0,0)}}break}while(!0);ea(t)}function Q_(t,n,a,r,c,u,y,T,I,Q,rt,mt,Y,it){t.timeoutHandle=-1;var Ot=n.subtreeFlags,qt=(u&335544064)===u;if(mt=null,(qt||Ot&8192||(Ot&16785408)===16785408)&&(mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Xi},oi=null,j_(n,u,mt),qt&&(Ot=mt,qt=t.containerInfo,qt=(qt.nodeType===9?qt:qt.ownerDocument).__reactViewTransition,qt!=null&&(Ot.count++,Ot.waitingForViewTransition=!0,Ot=ll.bind(Ot),qt.finished.then(Ot,Ot))),Ot=(u&62914560)===u?Rc-k():(u&4194048)===u?Y_-k():0,Ot=NE(mt,Ot),Ot!==null)){ta=u,t.cancelPendingCommit=Ot(s0.bind(null,t,n,u,a,r,c,y,T,I,Q,rt,mt,null,Y,it)),ts(t,u,y,!Q);return}s0(t,n,u,a,r,c,y,T,I,Q,rt,mt)}function AM(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],u=c.getSnapshot;c=c.value;try{if(!si(u(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ts(t,n,a,r){n=Oa(t,n),n&=~Ac,n&=~Bs,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var c=n;0<c;){var u=31-cn(c),y=1<<u;r[u]=-1,c&=~y}a!==0&&Ss(t,a,n)}function Dc(){return(Pe&6)===0?(el(0),!1):!0}function Eh(){if(Me!==null){if(Fe===0)var t=Me.return;else t=Me,ma=Rs=null,Df(t),Mr=null,Fo=0,t=Me;for(;t!==null;)y_(t.alternate,t),t=t.return;Me=null}}function Pr(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,KM(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ta=0,Eh(),Ye=t,Me=a=da(t.current,null),Re=n,Fe=0,li=null,Qa=!1,Nr=Ui(t,n),xh=!1,Dr=ci=Ac=Bs=Ja=sn=0,Kn=$o=null,yh=!1,Sa=Oa(t,n),Bl(),a}function J_(t,n){fe=null,bt.H=uc,n===Sr||n===Kl?(n=sg(),Fe=3):n===vf?(n=sg(),Fe=4):Fe=n===qf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,li=n,Me===null&&(sn=1,fc(t,vi(n,t.current)))}function $_(){var t=Un.current;return t===null?!0:(Re&4194048)===Re?Fn===null:(Re&62914560)===Re||(Re&536870912)!==0?t===Fn:!1}function t0(){var t=bt.H;return bt.H=uc,t===null?uc:t}function e0(){var t=bt.A;return bt.A=bM,t}function Uc(){sn=4,Qa||(Re&4194048)!==Re&&Un.current!==null||(Nr=!0),(Ja&134217727)===0&&(Bs&134217727)===0||Ye===null||ts(Ye,Re,ci,!1)}function bh(t,n,a){var r=Pe;Pe|=2;var c=t0(),u=e0();(Ye!==t||Re!==n)&&(wc=null,Pr(t,n)),n=!1;var y=sn;t:do try{if(Fe!==0&&Me!==null){var T=Me,I=li;switch(Fe){case 8:Eh(),y=6;break t;case 3:case 2:case 9:case 6:Un.current===null&&(n=!0);var Q=Fe;if(Fe=0,li=null,Ir(t,T,I,Q),a&&Nr){y=0;break t}break;default:Q=Fe,Fe=0,li=null,Ir(t,T,I,Q)}}RM(),y=sn;break}catch(rt){J_(t,rt)}while(!0);return n&&t.shellSuspendCounter++,ma=Rs=null,Pe=r,bt.H=c,bt.A=u,Me===null&&(Ye=null,Re=0,Bl()),y}function RM(){for(;Me!==null;)n0(Me)}function CM(t,n){var a=Pe;Pe|=2;var r=t0(),c=e0();Ye!==t||Re!==n?(wc=null,Cc=k()+500,Pr(t,n)):Nr=Ui(t,n);t:do try{if(Fe!==0&&Me!==null){n=Me;var u=li;e:switch(Fe){case 1:Fe=0,li=null,Ir(t,n,u,1);break;case 2:case 9:if(ig(u)){Fe=0,li=null,i0(n);break}n=function(){Fe!==2&&Fe!==9||Ye!==t||(Fe=7),ea(t)},u.then(n,n);break t;case 3:Fe=7;break t;case 4:Fe=5;break t;case 7:ig(u)?(Fe=0,li=null,i0(n)):(Fe=0,li=null,Ir(t,n,u,7));break;case 5:var y=null;switch(Me.tag){case 26:y=Me.memoizedState;case 5:case 27:var T=Me;if(y?W0(y):T.stateNode.complete){Fe=0,li=null;var I=T.sibling;if(I!==null)Me=I;else{var Q=T.return;Q!==null?(Me=Q,Lc(Q)):Me=null}break e}}Fe=0,li=null,Ir(t,n,u,5);break;case 6:Fe=0,li=null,Ir(t,n,u,6);break;case 8:Eh(),sn=6;break t;default:throw Error(s(462))}}wM();break}catch(rt){J_(t,rt)}while(!0);return ma=Rs=null,bt.H=r,bt.A=c,Pe=a,Me!==null?0:(Ye=null,Re=0,Bl(),sn)}function wM(){for(;Me!==null&&!ce();)n0(Me)}function n0(t){var n=v_(t.alternate,t,Sa);t.memoizedProps=t.pendingProps,n===null?Lc(t):Me=n}function i0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=f_(a,n,n.pendingProps,n.type,void 0,Re);break;case 11:n=f_(a,n,n.pendingProps,n.type.render,n.ref,Re);break;case 5:Df(n);var r=n;r===bn&&(ve?(Xl(r),r.tag===5&&r.stateNode!=null&&(Ze=r.stateNode)):(Xl(r),ve=!0));default:y_(a,n),n=Me=qm(n,Sa),n=v_(a,n,Sa)}t.memoizedProps=t.pendingProps,n===null?Lc(t):Me=n}function Ir(t,n,a,r){ma=Rs=null,Df(n),Mr=null,Fo=0;var c=n.return;try{if(gM(t,c,n,a,Re)){sn=1,fc(t,vi(a,t.current)),Me=null;return}}catch(u){if(c!==null)throw Me=c,u;sn=1,fc(t,vi(a,t.current)),Me=null;return}n.flags&32768?(ve||r===1?t=!0:Nr||(Re&536870912)!==0?t=!1:(Qa=t=!0,(r===2||r===9||r===3||r===6)&&(r=Un.current,r!==null&&r.tag===13&&(r.flags|=16384))),a0(n,t)):Lc(n)}function Lc(t){var n=t;do{if((n.flags&32768)!==0){a0(n,Qa);return}t=n.return;var a=yM(n.alternate,n,Sa);if(a!==null){Me=a;return}if(n=n.sibling,n!==null){Me=n;return}Me=n=t}while(n!==null);sn===0&&(sn=5)}function a0(t,n){do{var a=SM(t.alternate,t);if(a!==null){a.flags&=32767,Me=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Me=t;return}Me=t=a}while(t!==null);sn=6,Me=null}function s0(t,n,a,r,c,u,y,T,I,Q,rt,mt){t.cancelPendingCommit=null;do Oc();while(nn!==0);if((Pe&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));t===Ye&&(Me=Ye=null,Re=0),Hs=n,Ii=t,ta=a,Mh=c,W_=r,NM(t,n,a,y,T,I,mt)}}function NM(t,n,a,r,c,u,y){var T=n.lanes|n.childLanes;if(Sh=T,T|=sf,rr(t,a,T,r,c,u),Lr=null,(a&335544064)===a?(Or=aM(t),r=10262):(Or=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(t.callbackNode=null,t.callbackPriority=0,PM(wt,function(){return Ch(),null})):(t.callbackNode=null,t.callbackPriority=0),xc=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=bt.T,bt.T=null,c=Gt.p,Gt.p=2,u=Pe,Pe|=4;try{MM(t,n,a)}finally{Pe=u,Gt.p=c,bt.T=r}}nn=1,xc?Ur=nE(y,t.containerInfo,Or,Th,Ah,UM,Rh,Ch,DM):(Th(),Ah(),Rh())}function DM(t){if(nn!==0){var n=Ii.onRecoverableError;n(t,{componentStack:null})}}function UM(){nn===3&&(nn=0,G_(Hs,Ii),nn=4)}function Th(){if(nn===1){nn=0;var t=Ii,n=Hs,a=ta,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=bt.T,bt.T=null;var c=Gt.p;Gt.p=2;var u=Pe;Pe|=4;try{Ko=Mc=!1,B_(n,t,a),a=Hh;var y=Pm(t.containerInfo),T=a.focusedElem,I=a.selectionRange;if(y!==T&&T&&T.ownerDocument&&zm(T.ownerDocument.documentElement,T)){if(I!==null&&$u(T)){var Q=I.start,rt=I.end;if(rt===void 0&&(rt=Q),"selectionStart"in T)T.selectionStart=Q,T.selectionEnd=Math.min(rt,T.value.length);else{var mt=T.ownerDocument||document,Y=mt&&mt.defaultView||window;if(Y.getSelection){var it=Y.getSelection(),Ot=T.textContent.length,qt=Math.min(I.start,Ot),he=I.end===void 0?qt:Math.min(I.end,Ot);!it.extend&&qt>he&&(y=he,he=qt,qt=y);var Z=Om(T,qt),V=Om(T,he);if(Z&&V&&(it.rangeCount!==1||it.anchorNode!==Z.node||it.anchorOffset!==Z.offset||it.focusNode!==V.node||it.focusOffset!==V.offset)){var et=mt.createRange();et.setStart(Z.node,Z.offset),it.removeAllRanges(),qt>he?(it.addRange(et),it.extend(V.node,V.offset)):(et.setEnd(V.node,V.offset),it.addRange(et))}}}}for(mt=[],it=T;it=it.parentNode;)it.nodeType===1&&mt.push({element:it,left:it.scrollLeft,top:it.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<mt.length;T++){var pt=mt[T];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}Xr=!!Bh,Hh=Bh=null}finally{Pe=u,Gt.p=c,bt.T=r}}t.current=n,nn=2}}function Ah(){if(nn===2){nn=0;var t=Ii,n=Hs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=bt.T,bt.T=null;var r=Gt.p;Gt.p=2;var c=Pe;Pe|=4;try{L_(t,n.alternate,n)}finally{Pe=c,Gt.p=r,bt.T=a}}nn=3}}function Rh(){if(nn===4||nn===3){nn=0;var t=Ur;Ur=null,Le();var n=Ii,a=Hs,r=ta,c=W_,u=(r&335544064)===r?10262:10256;if((a.subtreeFlags&u)!==0||(a.flags&u)!==0?nn=5:(nn=0,Hs=Ii=null,r0(n,n.pendingLanes)),u=n.pendingLanes,u===0&&($a=null),ut(r),a=a.stateNode,Ne&&typeof Ne.onCommitFiberRoot=="function")try{Ne.onCommitFiberRoot(ye,a,void 0,(a.current.flags&128)===128)}catch{}if(c!==null){a=bt.T,u=Gt.p,Gt.p=2,bt.T=null;try{for(var y=n.onRecoverableError,T=0;T<c.length;T++){var I=c[T];y(I.value,{componentStack:I.stack})}}finally{bt.T=a,Gt.p=u}}if(c=Lr,y=Or,Or=null,c!==null&&(Lr=null,y===null&&(y=[]),t!==null))for(I=0;I<c.length;I++)a=(0,c[I])(y),a!==void 0&&t.finished.finally(a);(ta&3)!==0&&Oc(),ea(n),u=n.pendingLanes,(r&261930)!==0&&(u&42)!==0?n===Nc?tl++:(tl=0,Nc=n):(tl=0,Nc=null),el(0)}}function r0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,zo(n)))}function Oc(){return Ur!==null&&(Ur.skipTransition(),Ur=null),Th(),Ah(),Rh(),Ch()}function Ch(){if(nn!==5)return!1;var t=Ii,n=Sh;Sh=0;var a=ut(ta),r=bt.T,c=Gt.p;try{Gt.p=32>a?32:a,bt.T=null,a=Mh,Mh=null;var u=Ii,y=ta;if(nn=0,Hs=Ii=null,ta=0,(Pe&6)!==0)throw Error(s(331));var T=Pe;if(Pe|=4,X_(u.current),V_(u,u.current,y,a),Pe=T,el(0,!1),Ne&&typeof Ne.onPostCommitFiberRoot=="function")try{Ne.onPostCommitFiberRoot(ye,u)}catch{}return!0}finally{Gt.p=c,bt.T=r,r0(t,n)}}function o0(t,n,a){n=vi(a,n),n=Xf(t.stateNode,n,2),t=Xa(t,n,2),t!==null&&(oa(t,2),ea(t))}function Be(t,n,a){if(t.tag===3)o0(t,t,a);else for(;n!==null;){if(n.tag===3){o0(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($a===null||!$a.has(r))){t=vi(a,t),a=i_(2),r=Xa(n,a,2),r!==null&&(a_(a,r,n,t),oa(r,2),ea(r));break}}n=n.return}}function wh(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new TM;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(xh=!0,c.add(a),t=LM.bind(null,t,n,a),n.then(t,t))}function LM(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ye===t&&(Re&a)===a&&((sn===4||sn===3&&(Re&62914560)===Re&&300>k()-Rc)&&(Pe&2)===0?Pr(t,0):Ac|=a,Dr===Re&&(Dr=0)),ea(t)}function l0(t,n){n===0&&(n=sr()),t=bs(t,n),t!==null&&(oa(t,n),ea(t))}function OM(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),l0(t,a)}function zM(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),l0(t,a)}function PM(t,n){return jt(t,n)}var Fr=null,Br=null,Nh=!1,zc=!1,Dh=!1,es=0;function ea(t){t!==Br&&t.next===null&&(Br===null?Fr=Br=t:Br=Br.next=t),zc=!0,Nh||(Nh=!0,FM())}function el(t,n){if(!Dh&&zc){Dh=!0;do for(var a=!1,r=Fr;r!==null;){if(t!==0){var c=r.pendingLanes;if(c===0)var u=0;else{var y=r.suspendedLanes,T=r.pingedLanes;u=(1<<31-cn(42|t)+1)-1,u&=c&~(y&~T),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,h0(r,u))}else u=Re,u=mi(r,r===Ye?u:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(u&3)===0||Ui(r,u)||(a=!0,h0(r,u));r=r.next}while(a);Dh=!1}}function IM(){c0()}function c0(){zc=Nh=!1;var t=0;es!==0&&ZM()&&(t=es);for(var n=k(),a=null,r=Fr;r!==null;){var c=r.next,u=u0(r,n);u===0?(r.next=null,a===null?Fr=c:a.next=c,c===null&&(Br=a)):(a=r,(t!==0||(u&3)!==0)&&(zc=!0)),r=c}nn!==0&&nn!==5||el(t),es!==0&&(es=0)}function u0(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,c=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var y=31-cn(u),T=1<<y,I=c[y];I===-1?((T&a)===0||(T&r)!==0)&&(c[y]=Eo(T,n)):I<=n&&(t.expiredLanes|=T),u&=~T}if(n=Ye,a=Re,a=mi(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(Fe===2||Fe===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&de(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ui(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&de(r),ut(a)){case 2:case 8:a=gt;break;case 32:a=wt;break;case 268435456:a=ne;break;default:a=wt}return r=f0.bind(null,t),a=jt(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&de(r),t.callbackPriority=2,t.callbackNode=null,2}function f0(t,n){if(nn!==0&&nn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Oc()&&t.callbackNode!==a)return null;var r=Re;return r=mi(t,t===Ye?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(K_(t,r,n),u0(t,k()),t.callbackNode!=null&&t.callbackNode===a?f0.bind(null,t):null)}function h0(t,n){if(Oc())return null;K_(t,n,!0)}function FM(){QM(function(){(Pe&6)!==0?jt(lt,IM):c0()})}function Uh(){if(es===0){var t=Ns;t===0&&(t=ni,ni<<=1,(ni&261888)===0&&(ni=256)),es=t}return es}function d0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Dl(t)}function BM(t,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var u=d0((c[Pt]||null).action),y=r.submitter;y&&(n=(n=y[Pt]||null)?d0(n.formAction):y.getAttribute("formAction"),n!==null&&(u=n,y=null));var T=new zl("action","action",null,r,c);t.push({event:T,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(es!==0){var I=new FormData(c,y);Hf(a,{pending:!0,data:I,method:c.method,action:u},null,I)}}else typeof u=="function"&&(T.preventDefault(),I=new FormData(c,y),Hf(a,{pending:!0,data:I,method:c.method,action:u},u,I))},currentTarget:c}]})}}for(var Lh=0;Lh<af.length;Lh++){var Oh=af[Lh],HM=Oh.toLowerCase(),GM=Oh[0].toUpperCase()+Oh.slice(1);Li(HM,"on"+GM)}Li(Bm,"onAnimationEnd"),Li(Hm,"onAnimationIteration"),Li(Gm,"onAnimationStart"),Li("dblclick","onDoubleClick"),Li("focusin","onFocus"),Li("focusout","onBlur"),Li(KS,"onTransitionRun"),Li(QS,"onTransitionStart"),Li(JS,"onTransitionCancel"),Li(Vm,"onTransitionEnd"),vn("onMouseEnter",["mouseout","mouseover"]),vn("onMouseLeave",["mouseout","mouseover"]),vn("onPointerEnter",["pointerout","pointerover"]),vn("onPointerLeave",["pointerout","pointerover"]),fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),fn("onBeforeInput",["compositionend","keypress","textInput","paste"]),fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var nl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),VM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(nl));function p0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],c=r.event;r=r.listeners;t:{var u=void 0;if(n)for(var y=r.length-1;0<=y;y--){var T=r[y],I=T.instance,Q=T.currentTarget;if(T=T.listener,I!==u&&c.isPropagationStopped())break t;u=T,c.currentTarget=Q;try{u(c)}catch(rt){Fl(rt)}c.currentTarget=null,u=I}else for(y=0;y<r.length;y++){if(T=r[y],I=T.instance,Q=T.currentTarget,T=T.listener,I!==u&&c.isPropagationStopped())break t;u=T,c.currentTarget=Q;try{u(c)}catch(rt){Fl(rt)}c.currentTarget=null,u=I}}}}function Ee(t,n){var a=n[oe];a===void 0&&(a=n[oe]=new Set);var r=t+"__bubble";a.has(r)||(m0(n,t,2,!1),a.add(r))}function zh(t,n,a){var r=0;n&&(r|=4),m0(a,t,r,n)}var Pc="_reactListening"+Math.random().toString(36).slice(2);function Ph(t){if(!t[Pc]){t[Pc]=!0,za.forEach(function(a){a!=="selectionchange"&&(VM.has(a)||zh(a,!1,t),zh(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Pc]||(n[Pc]=!0,zh("selectionchange",!1,n))}}function m0(t,n,a,r){switch(av(n)){case 2:var c=OE;break;case 8:c=zE;break;default:c=nd}a=c.bind(null,n,a,t),c=void 0,!ju||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Ih(t,n,a,r,c){var u=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var y=r.tag;if(y===3||y===4){var T=r.stateNode.containerInfo;if(T===c)break;if(y===4)for(y=r.return;y!==null;){var I=y.tag;if((I===3||I===4)&&y.stateNode.containerInfo===c)return;y=y.return}for(;T!==null;){if(y=Zt(T),y===null)return;if(I=y.tag,I===5||I===6||I===26||I===27){r=u=y;continue t}T=T.parentNode}}r=r.return}mm(function(){var Q=u,rt=Gu(a),mt=[];t:{var Y=jm.get(t);if(Y!==void 0){var it=zl,Ot=t;switch(t){case"keypress":if(Ll(a)===0)break t;case"keydown":case"keyup":it=AS;break;case"focusin":Ot="focus",it=Yu;break;case"focusout":Ot="blur",it=Yu;break;case"beforeblur":case"afterblur":it=Yu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":it=vm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":it=pS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":it=DS;break;case Bm:case Hm:case Gm:it=_S;break;case Vm:it=LS;break;case"scroll":case"scrollend":it=hS;break;case"wheel":it=zS;break;case"copy":case"cut":case"paste":it=xS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":it=ym;break;case"submit":it=wS;break;case"toggle":case"beforetoggle":it=IS}var qt=(n&4)!==0,he=!qt&&(t==="scroll"||t==="scrollend"),Z=qt?Y!==null?Y+"Capture":null:Y;qt=[];for(var V=Q,et;V!==null;){var pt=V;if(et=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||et===null||Z===null||(pt=bo(V,Z),pt!=null&&qt.push(il(V,pt,et))),he)break;V=V.return}0<qt.length&&(Y=new it(Y,Ot,null,a,rt),mt.push({event:Y,listeners:qt}))}}if((n&7)===0){t:{if(it=t==="mouseover"||t==="pointerover",Y=t==="mouseout"||t==="pointerout",it&&a!==Hu&&(Ot=a.relatedTarget||a.fromElement)&&(Zt(Ot)||Ot[ie]))break t;(Y||it)&&(Ot=rt.window===rt?rt:(it=rt.ownerDocument)?it.defaultView||it.parentWindow:window,Y?(it=a.relatedTarget||a.toElement,Y=Q,it=it?Zt(it):null,it!==null&&(he=f(it),qt=it.tag,it!==he||qt!==5&&qt!==27&&qt!==6)&&(it=null)):(Y=null,it=Q),Y!==it&&(qt=vm,pt="onMouseLeave",Z="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(qt=ym,pt="onPointerLeave",Z="onPointerEnter",V="pointer"),he=Y==null?Ot:Ae(Y),et=it==null?Ot:Ae(it),Ot=new qt(pt,V+"leave",Y,a,rt),Ot.target=he,Ot.relatedTarget=et,pt=null,Zt(rt)===Q&&(qt=new qt(Z,V+"enter",it,a,rt),qt.target=et,qt.relatedTarget=he,pt=qt),he=pt,qt=Y&&it?F(Y,it,jM):null,Y!==null&&g0(mt,Ot,Y,qt,!1),it!==null&&he!==null&&g0(mt,he,it,qt,!0)))}t:{if(Y=Q?Ae(Q):window,it=Y.nodeName&&Y.nodeName.toLowerCase(),it==="select"||it==="input"&&Y.type==="file")var Xt=Cm;else if(Am(Y))if(wm)Xt=YS;else{Xt=XS;var Ce=kS}else it=Y.nodeName,!it||it.toLowerCase()!=="input"||Y.type!=="checkbox"&&Y.type!=="radio"?Q&&Bu(Q.elementType)&&(Xt=Cm):Xt=qS;if(Xt&&(Xt=Xt(t,Q))){Rm(mt,Xt,a,rt);break t}Ce&&Ce(t,Y,Q)}switch(Ce=Q?Ae(Q):window,t){case"focusin":(Am(Ce)||Ce.contentEditable==="true")&&(dr=Ce,tf=Q,Uo=null);break;case"focusout":Uo=tf=dr=null;break;case"mousedown":ef=!0;break;case"contextmenu":case"mouseup":case"dragend":ef=!1,Im(mt,a,rt);break;case"selectionchange":if(ZS)break;case"keydown":case"keyup":Im(mt,a,rt)}var Qt;if(Zu)t:{switch(t){case"compositionstart":var re="onCompositionStart";break t;case"compositionend":re="onCompositionEnd";break t;case"compositionupdate":re="onCompositionUpdate";break t}re=void 0}else hr?bm(t,a)&&(re="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(re="onCompositionStart");re&&(Sm&&a.locale!=="ko"&&(hr||re!=="onCompositionStart"?re==="onCompositionEnd"&&hr&&(Qt=gm()):(Pa=rt,ku="value"in Pa?Pa.value:Pa.textContent,hr=!0)),Ce=Ic(Q,re),0<Ce.length&&(re=new xm(re,t,null,a,rt),mt.push({event:re,listeners:Ce}),Qt?re.data=Qt:(Qt=Tm(a),Qt!==null&&(re.data=Qt)))),(Qt=BS?HS(t,a):GS(t,a))&&(re=Ic(Q,"onBeforeInput"),0<re.length&&(Ce=new xm("onBeforeInput","beforeinput",null,a,rt),mt.push({event:Ce,listeners:re}),Ce.data=Qt)),BM(mt,t,Q,a,rt)}p0(mt,n)})}function il(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Ic(t,n){for(var a=n+"Capture",r=[];t!==null;){var c=t,u=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||u===null||(c=bo(t,a),c!=null&&r.unshift(il(t,c,u)),c=bo(t,n),c!=null&&r.push(il(t,c,u))),t.tag===3)return r;t=t.return}return[]}function jM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function g0(t,n,a,r,c){for(var u=n._reactName,y=[];a!==null&&a!==r;){var T=a,I=T.alternate,Q=T.stateNode;if(T=T.tag,I!==null&&I===r)break;T!==5&&T!==26&&T!==27||Q===null||(I=Q,c?(Q=bo(a,u),Q!=null&&y.unshift(il(a,Q,I))):c||(Q=bo(a,u),Q!=null&&y.push(il(a,Q,I)))),a=a.return}y.length!==0&&t.push({event:n,listeners:y})}var kM=/\r\n?/g,XM=/\u0000|\uFFFD/g;function _0(t){return(typeof t=="string"?t:""+t).replace(kM,`
`).replace(XM,"")}function v0(t,n){return n=_0(n),_0(t)===n}function He(t,n,a,r,c,u){switch(a){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||cr(t,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&cr(t,""+r);else return;break;case"className":Nl(t,"class",r);break;case"tabIndex":Nl(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Nl(t,a,r);break;case"style":dm(t,r,u);return;case"data":if(n!=="object"){Nl(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Dl(r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(n!=="input"&&He(t,n,"name",c.name,c,null),He(t,n,"formEncType",c.formEncType,c,null),He(t,n,"formMethod",c.formMethod,c,null),He(t,n,"formTarget",c.formTarget,c,null)):(He(t,n,"encType",c.encType,c,null),He(t,n,"method",c.method,c,null),He(t,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Dl(r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=Xi);return;case"onScroll":r!=null&&Ee("scroll",t);return;case"onScrollEnd":r!=null&&Ee("scrollend",t);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));(u!=null?u.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=Dl(r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":Ee("beforetoggle",t),Ee("toggle",t),wl(t,"popover",r);break;case"xlinkActuate":ca(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":ca(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":ca(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":ca(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":ca(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":ca(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":ca(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":ca(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":ca(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":wl(t,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=uS.get(a)||a,wl(t,a,r);else return}Oe=!0}function Fh(t,n,a,r,c,u){switch(a){case"style":dm(t,r,u);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));(u!=null?u.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"children":if(typeof r=="string")cr(t,r);else if(typeof r=="number"||typeof r=="bigint")cr(t,""+r);else return;break;case"onScroll":r!=null&&Ee("scroll",t);return;case"onScrollEnd":r!=null&&Ee("scrollend",t);return;case"onClick":r!=null&&(t.onclick=Xi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!qe.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),u=a.slice(2,c?a.length-7:void 0),n=t[Pt]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(u,n,c),typeof r=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(u,r,c);break t}Oe=!0,a in t?t[a]=r:r===!0?t.setAttribute(a,""):wl(t,a,r)}return}Oe=!0}function zn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",t),Ee("load",t);var r=!1,c=!1,u;for(u in a)if(a.hasOwnProperty(u)){var y=a[u];if(y!=null)switch(u){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:He(t,n,u,y,a,null)}}c&&He(t,n,"srcSet",a.srcSet,a,null),r&&He(t,n,"src",a.src,a,null);return;case"input":Ee("invalid",t);var T=u=y=c=null,I=null,Q=null;for(r in a)if(a.hasOwnProperty(r)){var rt=a[r];if(rt!=null)switch(r){case"name":c=rt;break;case"type":y=rt;break;case"checked":I=rt;break;case"defaultChecked":Q=rt;break;case"value":u=rt;break;case"defaultValue":T=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(s(137,n));break;default:He(t,n,r,rt,a,null)}}cm(t,u,T,I,Q,y,c,!1);return;case"select":Ee("invalid",t),r=y=u=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":u=T;break;case"defaultValue":y=T;break;case"multiple":r=T;default:He(t,n,c,T,a,null)}n=u,a=y,t.multiple=!!r,n!=null?lr(t,!!r,n,!1):a!=null&&lr(t,!!r,a,!0);return;case"textarea":Ee("invalid",t),u=c=r=null;for(y in a)if(a.hasOwnProperty(y)&&(T=a[y],T!=null))switch(y){case"value":r=T;break;case"defaultValue":c=T;break;case"children":u=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:He(t,n,y,T,a,null)}fm(t,r,c,u);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(r=a[I],r!=null))switch(I){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:He(t,n,I,r,a,null)}return;case"dialog":Ee("beforetoggle",t),Ee("toggle",t),Ee("cancel",t),Ee("close",t);break;case"iframe":case"object":Ee("load",t);break;case"video":case"audio":for(r=0;r<nl.length;r++)Ee(nl[r],t);break;case"image":Ee("error",t),Ee("load",t);break;case"details":Ee("toggle",t);break;case"embed":case"source":case"link":Ee("error",t),Ee("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(r=a[Q],r!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:He(t,n,Q,r,a,null)}return;default:if(Bu(n)){for(rt in a)a.hasOwnProperty(rt)&&(r=a[rt],r!==void 0&&Fh(t,n,rt,r,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(r=a[T],r!=null&&He(t,n,T,r,a,null))}var qM={};function YM(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,u=null,y=null,T=null,I=null,Q=null,rt=null;for(it in a){var mt=a[it];if(a.hasOwnProperty(it)&&mt!=null)switch(it){case"checked":break;case"value":break;case"defaultValue":I=mt;default:r.hasOwnProperty(it)||He(t,n,it,null,r,mt)}}for(var Y in r){var it=r[Y];if(mt=a[Y],r.hasOwnProperty(Y)&&(it!=null||mt!=null))switch(Y){case"type":it!==mt&&(Oe=!0),u=it;break;case"name":it!==mt&&(Oe=!0),c=it;break;case"checked":it!==mt&&(Oe=!0),Q=it;break;case"defaultChecked":it!==mt&&(Oe=!0),rt=it;break;case"value":it!==mt&&(Oe=!0),y=it;break;case"defaultValue":it!==mt&&(Oe=!0),T=it;break;case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(s(137,n));break;default:it!==mt&&He(t,n,Y,it,r,mt)}}Iu(t,y,T,I,Q,rt,u,c);return;case"select":it=y=T=Y=null;for(u in a)if(I=a[u],a.hasOwnProperty(u)&&I!=null)switch(u){case"value":break;case"multiple":it=I;default:r.hasOwnProperty(u)||He(t,n,u,null,r,I)}for(c in r)if(u=r[c],I=a[c],r.hasOwnProperty(c)&&(u!=null||I!=null))switch(c){case"value":u!==I&&(Oe=!0),Y=u;break;case"defaultValue":u!==I&&(Oe=!0),T=u;break;case"multiple":u!==I&&(Oe=!0),y=u;default:u!==I&&He(t,n,c,u,r,I)}n=T,a=y,r=it,Y!=null?lr(t,!!a,Y,!1):!!r!=!!a&&(n!=null?lr(t,!!a,n,!0):lr(t,!!a,a?[]:"",!1));return;case"textarea":it=Y=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!r.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:He(t,n,T,null,r,c)}for(y in r)if(c=r[y],u=a[y],r.hasOwnProperty(y)&&(c!=null||u!=null))switch(y){case"value":c!==u&&(Oe=!0),Y=c;break;case"defaultValue":c!==u&&(Oe=!0),it=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==u&&He(t,n,y,c,r,u)}um(t,Y,it);return;case"option":for(var Ot in a)if(Y=a[Ot],a.hasOwnProperty(Ot)&&Y!=null&&!r.hasOwnProperty(Ot))switch(Ot){case"selected":t.selected=!1;break;default:He(t,n,Ot,null,r,Y)}for(I in r)if(Y=r[I],it=a[I],r.hasOwnProperty(I)&&Y!==it&&(Y!=null||it!=null))switch(I){case"selected":Y!==it&&(Oe=!0),t.selected=Y&&typeof Y!="function"&&typeof Y!="symbol";break;default:He(t,n,I,Y,r,it)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var qt in a)Y=a[qt],a.hasOwnProperty(qt)&&Y!=null&&!r.hasOwnProperty(qt)&&He(t,n,qt,null,r,Y);for(Q in r)if(Y=r[Q],it=a[Q],r.hasOwnProperty(Q)&&Y!==it&&(Y!=null||it!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(s(137,n));break;default:He(t,n,Q,Y,r,it)}return;default:if(Bu(n)){for(var he in a)Y=a[he],a.hasOwnProperty(he)&&Y!==void 0&&!r.hasOwnProperty(he)&&Fh(t,n,he,void 0,r,Y);for(rt in r)Y=r[rt],it=a[rt],!r.hasOwnProperty(rt)||Y===it||Y===void 0&&it===void 0||Fh(t,n,rt,Y,r,it);return}}for(var Z in a)Y=a[Z],a.hasOwnProperty(Z)&&Y!=null&&!r.hasOwnProperty(Z)&&He(t,n,Z,null,r,Y);for(mt in r)Y=r[mt],it=a[mt],!r.hasOwnProperty(mt)||Y===it||Y==null&&it==null||He(t,n,mt,Y,r,it)}function x0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function WM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],u=c.transferSize,y=c.initiatorType,T=c.duration;if(u&&T&&x0(y)){for(y=0,T=c.responseEnd,r+=1;r<a.length;r++){var I=a[r],Q=I.startTime;if(Q>T)break;var rt=I.transferSize,mt=I.initiatorType;rt&&x0(mt)&&(I=I.responseEnd,y+=rt*(I<T?1:(T-Q)/(I-Q)))}if(--r,n+=8*(u+y)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Bh=null,Hh=null;function al(t){return t.nodeType===9?t:t.ownerDocument}function y0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function S0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function M0(t,n,a,r){return a=al(a).createElement(t),a[Dt]=r,a[Pt]=n,zn(a,t,n),Qe(a),a}function Gh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Vh=null;function ZM(){var t=window.event;return t&&t.type==="popstate"?t===Vh?!1:(Vh=t,!0):(Vh=null,!1)}var jh=typeof setTimeout=="function"?setTimeout:void 0,KM=typeof clearTimeout=="function"?clearTimeout:void 0,E0=typeof Promise=="function"?Promise:void 0,b0=typeof requestAnimationFrame=="function"?requestAnimationFrame:jh,QM=typeof queueMicrotask=="function"?queueMicrotask:typeof E0<"u"?function(t){return E0.resolve(null).then(t).catch(JM)}:jh;function JM(t){setTimeout(function(){throw t})}function ns(t){return t==="head"}function T0(t,n){var a=n,r=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(c),qr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Qh(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Qh(a);for(var u=a.firstChild;u;){var y=u.nextSibling,T=u.nodeName;u[We]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=y}}else a==="body"&&Qh(t.ownerDocument.body);a=c}while(a);qr(n)}function A0(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function R0(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var r=1;else for(var c=r=0;c<n.length;c++){var u=n[c];0<u.width&&0<u.height&&r++}r===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function C0(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function $M(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function kh(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return $M(n,a,t)}function tE(t){return t.documentElement.clientHeight}function eE(t){this.addEventListener("load",t),this.addEventListener("error",t)}function nE(t,n,a,r,c,u,y,T,I){var Q=n.nodeType===9?n:n.ownerDocument;try{var rt=Q.startViewTransition({update:function(){var Y=Q.defaultView,it=Y.navigation&&Y.navigation.transition,Ot=Q.fonts.status;r();var qt=[];if(Ot==="loaded"&&(tE(Q),Q.fonts.status==="loading"&&qt.push(Q.fonts.ready)),Ot=qt.length,t!==null)for(var he=t.suspenseyImages,Z=0,V=0;V<he.length;V++){var et=he[V];if(!et.complete){var pt=et.getBoundingClientRect();if(0<pt.bottom&&0<pt.right&&pt.top<Y.innerHeight&&pt.left<Y.innerWidth){if(Z+=Z0(et),Z>Hc){qt.length=Ot;break}et=new Promise(eE.bind(et)),qt.push(et)}}}if(0<qt.length)return Y=Promise.race([Promise.all(qt),new Promise(function(Xt){return setTimeout(Xt,500)})]).then(c,c),(it?Promise.allSettled([it.finished,Y]):Y).then(u,u);if(c(),it)return it.finished.then(u,u);u()},types:a});Q.__reactViewTransition=rt;var mt=[];return rt.ready.then(function(){for(var Y=Q.documentElement.getAnimations({subtree:!0}),it=0;it<Y.length;it++){var Ot=Y[it],qt=Ot.effect,he=qt.pseudoElement;if(he!=null&&he.startsWith("::view-transition")){mt.push(Ot),Ot=qt.getKeyframes();for(var Z=he=void 0,V=!0,et=0;et<Ot.length;et++){var pt=Ot[et],Xt=pt.width;if(he===void 0)he=Xt;else if(he!==Xt){V=!1;break}if(Xt=pt.height,Z===void 0)Z=Xt;else if(Z!==Xt){V=!1;break}delete pt.width,delete pt.height,pt.transform==="none"&&delete pt.transform}V&&he!==void 0&&Z!==void 0&&(qt.setKeyframes(Ot),V=getComputedStyle(qt.target,qt.pseudoElement),V.width!==he||V.height!==Z)&&(V=Ot[0],V.width=he,V.height=Z,V=Ot[Ot.length-1],V.width=he,V.height=Z,qt.setKeyframes(Ot))}}y()},function(Y){Q.__reactViewTransition===rt&&(Q.__reactViewTransition=null);try{if(typeof Y=="object"&&Y!==null)switch(Y.name){case"InvalidStateError":(Y.message==="View transition was skipped because document visibility state is hidden."||Y.message==="Skipping view transition because document visibility state has become hidden."||Y.message==="Skipping view transition because viewport size changed."||Y.message==="Transition was aborted because of invalid state")&&(Y=null)}Y!==null&&I(Y)}finally{r(),c(),y()}}),rt.finished.finally(function(){for(var Y=0;Y<mt.length;Y++)mt[Y].cancel();Q.__reactViewTransition===rt&&(Q.__reactViewTransition=null),T()}),rt}catch{return r(),c(),y(),null}}function Gs(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Gs.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:P({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Gs.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),r=[],c=0;c<a.length;c++){var u=a[c].effect;u!==null&&u.target===t&&u.pseudoElement===n&&r.push(a[c])}return r},Gs.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function w0(t){return{name:t,group:new Gs("group",t),imagePair:new Gs("image-pair",t),old:new Gs("old",t),new:new Gs("new",t)}}function fi(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}fi.prototype.addEventListener=function(t,n,a){var r=null,c=null;if(!(a!=null&&typeof a!="boolean"&&(r=a.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var u=this._eventListeners;if(D0(u,t,n,a)===-1){var y=this,T=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(T=function(I){y.removeEventListener(t,n,a),typeof n=="function"?n.call(this,I):n.handleEvent(I)}),r!==null&&(c=y.removeEventListener.bind(y,t,n,a),r.addEventListener("abort",c,{once:!0}),c=r.removeEventListener.bind(r,"abort",c)),r=Hr(a),u.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:T,cleanup:c}),g(this._fragmentFiber.child,!1,iE,t,T,r)}this._eventListeners=u}};function iE(t,n,a,r){return M(t).addEventListener(n,a,r),!1}fi.prototype.removeEventListener=function(t,n,a){var r=this._eventListeners;if(r!==null&&(n=D0(r,t,n,a),n!==-1)){var c=r[n];a=c.attachedListener;var u=c.cleanup;c=Hr(c.optionsOrUseCapture),g(this._fragmentFiber.child,!1,aE,t,a,c),r.splice(n,1),u!==null&&u()}};function aE(t,n,a,r){return M(t).removeEventListener(n,a,r),!1}function Hr(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function N0(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function D0(t,n,a,r){if(t.length===0)return-1;r=N0(r);for(var c=0;c<t.length;c++){var u=t[c];if(u.type===n&&u.listener===a&&N0(u.optionsOrUseCapture)===r)return c}return-1}fi.prototype.dispatchEvent=function(t){var n=x(this._fragmentFiber);if(n===null)return!0;n=M(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var c=0;c<a.length;c++){var u=a[c];r.addEventListener(u.type,u.attachedListener,Hr(u.optionsOrUseCapture))}if(n.appendChild(r),t=r.dispatchEvent(t),a)for(c=0;c<a.length;c++)u=a[c],r.removeEventListener(u.type,u.attachedListener,Hr(u.optionsOrUseCapture));return n.removeChild(r),t}return n.dispatchEvent(t)},fi.prototype.focus=function(t){g(this._fragmentFiber.child,!0,U0,t,void 0,void 0)};function U0(t,n){return t.tag===6?!1:(t=M(t),gE(t,n))}fi.prototype.focusLast=function(t){var n=[];g(this._fragmentFiber.child,!0,Xh,n,void 0,void 0);for(var a=n.length-1;0<=a&&!U0(n[a],t);a--);};function Xh(t,n){return n.push(t),!1}fi.prototype.blur=function(){var t=x(this._fragmentFiber);t!==null&&(t=M(t),t=al(t).activeElement,t!==null&&g(this._fragmentFiber.child,!1,sE,t,void 0,void 0))};function sE(t,n){return t.tag===6?!1:(t=M(t),t===n||t.contains(n)?(n.blur(),!0):!1)}fi.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),g(this._fragmentFiber.child,!1,rE,t,void 0,void 0)};function rE(t,n){return t.tag===6||(t=M(t),n.observe(t)),!1}fi.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),g(this._fragmentFiber.child,!1,oE,t,void 0,void 0);for(var a=n=0;a<Fi.length;a++){var r=Fi[a];r.fragmentInstance===this&&r.observer===t?t.unobserve(r.instance):Fi[n++]=r}Fi.length=n}};function oE(t,n){return t.tag===6||(t=M(t),n.unobserve(t)),!1}var Fi=[],qh=!1;function lE(t,n,a){Fi.push({fragmentInstance:t,observer:n,instance:a}),qh||(qh=!0,_E(function(){qh=!1;var r=Fi;Fi=[];for(var c=0;c<r.length;c++){var u=r[c];u.observer.unobserve(u.instance)}}))}fi.prototype.getClientRects=function(){var t=[];return g(this._fragmentFiber.child,!1,cE,t,void 0,void 0),t};function cE(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=M(t),n.push.apply(n,t.getClientRects());return!1}fi.prototype.getRootNode=function(t){var n=x(this._fragmentFiber);return n===null?this:M(n).getRootNode(t)},fi.prototype.compareDocumentPosition=function(t){var n=x(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];g(this._fragmentFiber.child,!1,Xh,a,void 0,void 0);var r=M(n);if(a.length===0){if(a=r,E(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var c=r=a.compareDocumentPosition(t);return a===t?c=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=b(n)[1],a===null?c=Node.DOCUMENT_POSITION_PRECEDING:(t=M(a).compareDocumentPosition(t),c=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),c|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(a[0]),c=M(a[a.length-1]);var u=E(this._fragmentFiber)?n.parentElement:r;if(u==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=u.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,u=u.compareDocumentPosition(c)&Node.DOCUMENT_POSITION_CONTAINED_BY;var y=n.compareDocumentPosition(t),T=c.compareDocumentPosition(t),I=y&Node.DOCUMENT_POSITION_CONTAINED_BY||T&Node.DOCUMENT_POSITION_CONTAINED_BY;return T=r&&u&&y&Node.DOCUMENT_POSITION_FOLLOWING&&T&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===t||u&&c===t||I||T?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===t||!u&&c===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:y,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||uE(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function uE(t,n,a,r,c){var u=Zt(c);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!u)t:{for(;u!==null;){if(u.tag===7&&(u===n||u.alternate===n)){a=!0;break t}u=u.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(u===null)return u=c.ownerDocument,c===u||c===u.documentElement||c===u.body;t:{for(u=n,n=x(n);u!==null;){if(!(u.tag!==5&&u.tag!==3&&u.tag!==27||u!==n&&u.alternate!==n)){u=!0;break t}u=u.return}u=!1}return u}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!u)&&!(n=u===a)&&(n=F(a,u,j),n===null?n=!1:(g(n,!0,z,u,a),u=S,S=null,n=u!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!u)&&!(n=u===r)&&(n=F(r,u,j),n===null?n=!1:(g(n,!0,D,u,r),u=S,O=S=null,n=u!==null)),n):!1}function L0(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}fi.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(s(566));var n=[];g(this._fragmentFiber.child,!1,Xh,n,void 0,void 0);var a=t!==!1;if(n.length===0){var r=b(this._fragmentFiber);if(r=a?r[1]||r[0]||x(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){t=M(r),L0(t,a);return}if(r=M(r),r.nodeType!==9){if(r.nodeType===11){a="host"in r?r.host:null,a!==null&&a.scrollIntoView(t);return}r.scrollIntoView(t)}}for(r=a?n.length-1:0;r!==(a?-1:n.length);){var c=n[r];c.tag===6?(c=M(c),L0(c,a)):M(c).scrollIntoView(t),r+=a?-1:1}};function fE(t,n){return t=M(t),O0(t,n),!1}function O0(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function z0(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r];t.addEventListener(c.type,c.attachedListener,Hr(c.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(u){for(var y=0,T=0;T<Fi.length;T++){var I=Fi[T];(I.fragmentInstance!==n||I.observer!==u||I.instance!==t)&&(Fi[y++]=I)}Fi.length=y,u.observe(t)}),O0(t,n))}function hE(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r];t.removeEventListener(c.type,c.attachedListener,Hr(c.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(u){typeof u.rootMargin=="string"?lE(n,u,t):u.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function Yh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Yh(a),Se(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function dE(t,n,a,r){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[We])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var u=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=Ei(t.nextSibling),t===null)break}return null}function pE(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ei(t.nextSibling),t===null))return null;return t}function P0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ei(t.nextSibling),t===null))return null;return t}function Wh(t){return t.data==="$?"||t.data==="$~"}function Zh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function mE(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function Ei(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Kh=null;function I0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Ei(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function F0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function gE(t,n){function a(){r=!0}if(t.ownerDocument.activeElement===t)return!0;var r=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return r}function _E(t){b0(function(){b0(function(n){return t(n)})})}function B0(t,n,a){switch(n=al(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function H0(t,n,a){for(var r in a){var c=a[r];a.hasOwnProperty(r)&&c!=null&&He(t,n,r,null,qM,c)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Xi&&(t.onclick=null),Se(t)}function Qh(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Se(t)}var bi=new Map,G0=new Set;function sl(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var Ma=Gt.d;Gt.d={f:vE,r:xE,D:yE,C:SE,L:ME,m:EE,X:TE,S:bE,M:AE};function vE(){var t=Ma.f(),n=Dc();return t||n}function xE(t){var n=Je(t);n!==null&&n.tag===5&&n.type==="form"?jg(n):Ma.r(t)}var Gr=typeof document>"u"?null:document;function V0(t,n,a){var r=Gr;if(r&&typeof n=="string"&&n){var c=gi(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),G0.has(c)||(G0.add(c),t={rel:t,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),zn(n,"link",t),Qe(n),r.head.appendChild(n)))}}function yE(t){Ma.D(t),V0("dns-prefetch",t,null)}function SE(t,n){Ma.C(t,n),V0("preconnect",t,n)}function ME(t,n,a){Ma.L(t,n,a);var r=Gr;if(r&&t&&n){var c='link[rel="preload"][as="'+gi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+gi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+gi(a.imageSizes)+'"]')):c+='[href="'+gi(t)+'"]';var u=c;switch(n){case"style":u=Vr(t);break;case"script":u=jr(t)}if(!(bi.has(u)||(t=P({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),bi.set(u,t),r.querySelector(c)!==null||n==="style"&&r.querySelector(rl(u))||n==="script"&&r.querySelector(ol(u))))){var y=r.createElement("link");zn(y,"link",t),n==="style"&&(y[Xe]=!0,y.onload=y.onerror=function(){In(y)}),Qe(y),r.head.appendChild(y)}}}function EE(t,n){Ma.m(t,n);var a=Gr;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+gi(r)+'"][href="'+gi(t)+'"]',u=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=jr(t)}if(!bi.has(u)&&(t=P({rel:"modulepreload",href:t},n),bi.set(u,t),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ol(u)))return}r=a.createElement("link"),zn(r,"link",t),Qe(r),a.head.appendChild(r)}}}function bE(t,n,a){Ma.S(t,n,a);var r=Gr;if(r&&t){var c=En(r).hoistableStyles,u=Vr(t);n=n||"default";var y=c.get(u);if(!y){var T={loading:0,preload:null};if(y=r.querySelector(rl(u)))T.loading=5;else{t=P({rel:"stylesheet",href:t,"data-precedence":n},a),(a=bi.get(u))&&Jh(t,a);var I=y=r.createElement("link");Qe(I),zn(I,"link",t),I._p=new Promise(function(Q,rt){I.onload=Q,I.onerror=rt}),I.addEventListener("load",function(){T.loading|=1}),I.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Fc(y,n,r)}y={type:"stylesheet",instance:y,count:1,state:T},c.set(u,y)}}}function TE(t,n){Ma.X(t,n);var a=Gr;if(a&&t){var r=En(a).hoistableScripts,c=jr(t),u=r.get(c);u||(u=a.querySelector(ol(c)),u||(t=P({src:t,async:!0},n),(n=bi.get(c))&&$h(t,n),u=a.createElement("script"),Qe(u),zn(u,"link",t),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(c,u))}}function AE(t,n){Ma.M(t,n);var a=Gr;if(a&&t){var r=En(a).hoistableScripts,c=jr(t),u=r.get(c);u||(u=a.querySelector(ol(c)),u||(t=P({src:t,async:!0,type:"module"},n),(n=bi.get(c))&&$h(t,n),u=a.createElement("script"),Qe(u),zn(u,"link",t),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(c,u))}}function j0(t,n,a,r){var c=(c=L.current)?sl(c):null;if(!c)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Vr(a.href),n=En(c).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Vr(a.href);var u=En(c).hoistableStyles,y=u.get(t);if(y||(c=c.ownerDocument||c,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,y),(u=c.querySelector(rl(t)))?u._p||(y.instance=u,y.state.loading=5):(u=bi.get(t),u||(u={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},bi.set(t,u)),RE(c,t,u,y.state))),n&&r===null)throw Error(s(528,""));return y}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=jr(a),n=En(c).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Vr(t){return'href="'+gi(t)+'"'}function rl(t){return'link[rel="stylesheet"]['+t+"]"}function k0(t){return P({},t,{"data-precedence":t.precedence,precedence:null})}function RE(t,n,a,r){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Xe]!==!0){r.loading=1;return}}else n=t.createElement("link"),n[Xe]=!0,n.onload=n.onerror=In.bind(null,n),zn(n,"link",a),Qe(n),t.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function jr(t){return'[src="'+gi(t)+'"]'}function ol(t){return"script[async]"+t}function X0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+gi(a.href)+'"]');if(r)return n.instance=r,Qe(r),r;var c=P({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),Qe(r),zn(r,"style",c),Fc(r,a.precedence,t),n.instance=r;case"stylesheet":c=Vr(a.href);var u=t.querySelector(rl(c));if(u)return n.state.loading|=4,n.instance=u,Qe(u),u;r=k0(a),(c=bi.get(c))&&Jh(r,c),u=(t.ownerDocument||t).createElement("link"),Qe(u);var y=u;return y._p=new Promise(function(T,I){y.onload=T,y.onerror=I}),zn(u,"link",r),n.state.loading|=4,Fc(u,a.precedence,t),n.instance=u;case"script":return u=jr(a.src),(c=t.querySelector(ol(u)))?(n.instance=c,Qe(c),c):(r=a,(c=bi.get(u))&&(r=P({},a),$h(r,c)),t=t.ownerDocument||t,c=t.createElement("script"),Qe(c),zn(c,"link",r),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Fc(r,a.precedence,t));return n.instance}function Fc(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,u=c,y=0;y<r.length;y++){var T=r[y];if(T.dataset.precedence===n)u=T;else if(u!==c)break}u?u.parentNode.insertBefore(t,u.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Jh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function $h(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Bc=null;function q0(t,n,a){if(Bc===null){var r=new Map,c=Bc=new Map;c.set(a,r)}else c=Bc,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var u=a[c];if(!(u[We]||u[Dt]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var y=u.getAttribute(n)||"";y=t+y;var T=r.get(y);T?T.push(u):r.set(y,[u])}}return r}function td(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function CE(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Y0(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function W0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Z0(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function K0(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=Z0(n),t.suspenseyImages.push(n)),t=DE.bind(t),n.decode().then(t,t))}function wE(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=Vr(r.href),u=n.querySelector(rl(c));if(u){n=u._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=ll.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=u,Qe(u);return}u=n.ownerDocument||n,r=k0(r),(c=bi.get(c))&&Jh(r,c),u=u.createElement("link"),Qe(u);var y=u;y._p=new Promise(function(T,I){y.onload=T,y.onerror=I}),zn(u,"link",r),a.instance=u}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=ll.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Hc=0;function NE(t,n){return t.stylesheets&&t.count===0&&Vc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&Vc(t,t.stylesheets),t.unsuspend){var u=t.unsuspend;t.unsuspend=null,u()}},6e4+n);0<t.imgBytes&&Hc===0&&(Hc=62500*WM());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Vc(t,t.stylesheets),t.unsuspend)){var u=t.unsuspend;t.unsuspend=null,u()}},(t.imgBytes>Hc?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function Q0(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Vc(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function ll(){this.count--,Q0(this)}function DE(){this.imgCount--,Q0(this)}var Gc=null;function Vc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Gc=new Map,n.forEach(UE,t),Gc=null,ll.call(t))}function UE(t,n){if(!(n.state.loading&4)){var a=Gc.get(t);if(a)var r=a.get(null);else{a=new Map,Gc.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<c.length;u++){var y=c[u];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),r=y)}r&&a.set(null,r)}c=n.instance,y=c.getAttribute("data-precedence"),u=a.get(y)||r,u===r&&a.set(null,c),a.set(y,c),this.count++,r=ll.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),u?u.parentNode.insertBefore(c,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var kr={$$typeof:ht,Provider:null,Consumer:null,_currentValue:ae,_currentValue2:ae,_threadCount:0};function LE(t,n,a,r,c,u,y,T,I){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ys(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ys(0),this.hiddenUpdates=ys(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=u,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.transitionTypes=null,this.incompleteTransitions=new Map}function J0(t,n,a,r,c,u,y,T,I,Q,rt,mt){return t=new LE(t,n,a,y,I,Q,rt,mt,T),n=1,u===!0&&(n|=24),u=Yn(3,null,null,n),t.current=u,u.stateNode=t,n=mf(),n.refCount++,t.pooledCache=n,n.refCount++,u.memoizedState={element:r,isDehydrated:a,cache:n},xf(u),t}function $0(t){return t?(t=gr,t):gr}function tv(t,n,a,r,c,u){c=$0(c),r.context===null?r.context=c:r.pendingContext=c,r=ka(n),r.payload={element:a},u=u===void 0?null:u,u!==null&&(r.callback=u),a=Xa(t,r,n),a!==null&&(Qn(a,t,n),Bo(a,t,n))}function ev(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function ed(t,n){ev(t,n),(t=t.alternate)&&ev(t,n)}function nv(t){if(t.tag===13||t.tag===31){var n=bs(t,67108864);n!==null&&Qn(n,t,67108864),ed(t,67108864)}}function iv(t){if(t.tag===13||t.tag===31){var n=ui();n=ct(n);var a=bs(t,n);a!==null&&Qn(a,t,n),ed(t,n)}}var Xr=!0;function OE(t,n,a,r){var c=bt.T;bt.T=null;var u=Gt.p;try{Gt.p=2,nd(t,n,a,r)}finally{Gt.p=u,bt.T=c}}function zE(t,n,a,r){var c=bt.T;bt.T=null;var u=Gt.p;try{Gt.p=8,nd(t,n,a,r)}finally{Gt.p=u,bt.T=c}}function nd(t,n,a,r){if(Xr){var c=id(r);if(c===null)Ih(t,n,r,jc,a),sv(t,r);else if(IE(c,t,n,a,r))r.stopPropagation();else if(sv(t,r),n&4&&-1<PE.indexOf(t)){for(;c!==null;){var u=Je(c);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var y=ii(u.pendingLanes);if(y!==0){var T=u;for(T.pendingLanes|=2,T.entangledLanes|=2;y;){var I=1<<31-cn(y);T.entanglements[1]|=I,y&=~I}ea(u),(Pe&6)===0&&(Cc=k()+500,el(0))}}break;case 31:case 13:T=bs(u,2),T!==null&&Qn(T,u,2),Dc(),ed(u,2)}if(u=id(r),u===null&&Ih(t,n,r,jc,a),u===c)break;c=u}c!==null&&r.stopPropagation()}else Ih(t,n,r,null,a)}}function id(t){return t=Gu(t),ad(t)}var jc=null;function ad(t){if(jc=null,t=Zt(t),t!==null){var n=f(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return jc=t,null}function av(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Et()){case lt:return 2;case gt:return 8;case wt:case Lt:return 32;case ne:return 268435456;default:return 32}default:return 32}}var sd=!1,is=null,as=null,ss=null,cl=new Map,ul=new Map,rs=[],PE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function sv(t,n){switch(t){case"focusin":case"focusout":is=null;break;case"dragenter":case"dragleave":as=null;break;case"mouseover":case"mouseout":ss=null;break;case"pointerover":case"pointerout":cl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ul.delete(n.pointerId)}}function fl(t,n,a,r,c,u){return t===null||t.nativeEvent!==u?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:u,targetContainers:[c]},n!==null&&(n=Je(n),n!==null&&nv(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function IE(t,n,a,r,c){switch(n){case"focusin":return is=fl(is,t,n,a,r,c),!0;case"dragenter":return as=fl(as,t,n,a,r,c),!0;case"mouseover":return ss=fl(ss,t,n,a,r,c),!0;case"pointerover":var u=c.pointerId;return cl.set(u,fl(cl.get(u)||null,t,n,a,r,c)),!0;case"gotpointercapture":return u=c.pointerId,ul.set(u,fl(ul.get(u)||null,t,n,a,r,c)),!0}return!1}function rv(t){var n=Zt(t.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Tt(t.priority,function(){iv(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Tt(t.priority,function(){iv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function kc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=id(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);Hu=r,a.target.dispatchEvent(r),Hu=null}else return n=Je(a),n!==null&&nv(n),t.blockedOn=a,!1;n.shift()}return!0}function ov(t,n,a){kc(t)&&a.delete(n)}function FE(){sd=!1,is!==null&&kc(is)&&(is=null),as!==null&&kc(as)&&(as=null),ss!==null&&kc(ss)&&(ss=null),cl.forEach(ov),ul.forEach(ov)}function Xc(t,n){t.blockedOn===n&&(t.blockedOn=null,sd||(sd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,FE)))}var qc=null;function lv(t){qc!==t&&(qc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){qc===t&&(qc=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],c=t[n+2];if(typeof r!="function"){if(ad(r||a)===null)continue;break}var u=Je(a);u!==null&&(t.splice(n,3),n-=3,Hf(u,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function qr(t){function n(I){return Xc(I,t)}is!==null&&Xc(is,t),as!==null&&Xc(as,t),ss!==null&&Xc(ss,t),cl.forEach(n),ul.forEach(n);for(var a=0;a<rs.length;a++){var r=rs[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<rs.length&&(a=rs[0],a.blockedOn===null);)rv(a),a.blockedOn===null&&rs.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],u=a[r+1],y=c[Pt]||null;if(typeof u=="function")y||lv(a);else if(y){var T=null;if(u&&u.hasAttribute("formAction")){if(c=u,y=u[Pt]||null)T=y.formAction;else if(ad(c)!==null)continue}else T=y.action;typeof T=="function"?a[r+1]=T:(a.splice(r,3),r-=3),lv(a)}}}function cv(){function t(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(y){return c=y})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function rd(t){this._internalRoot=t}Yc.prototype.render=rd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ui();tv(a,r,t,n,null,null)},Yc.prototype.unmount=rd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;tv(t.current,2,null,t,null,null),Dc(),n[ie]=null}};function Yc(t){this._internalRoot=t}Yc.prototype.unstable_scheduleHydration=function(t){if(t){var n=J();t={blockedOn:null,target:t,priority:n};for(var a=0;a<rs.length&&n!==0&&n<rs[a].priority;a++);rs.splice(a,0,t),a===0&&rv(t)}};var uv=e.version;if(uv!=="19.3.0")throw Error(s(527,uv,"19.3.0"));Gt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=_(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var BE={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:bt,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wc.isDisabled&&Wc.supportsFiber)try{ye=Wc.inject(BE),Ne=Wc}catch{}}return dl.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",c=$g,u=t_,y=e_;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(u=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=J0(t,1,!1,null,null,a,r,null,c,u,y,cv),t[ie]=n.current,Ph(t),new rd(n)},dl.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,c="",u=$g,y=t_,T=e_,I=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=J0(t,1,!0,n,a??null,r,c,I,u,y,T,cv),n.context=$0(null),a=n.current,r=ui(),r=ct(r),c=ka(r),c.callback=null,Xa(a,c,r),a=r,n.current.lanes=a,oa(n,a),ea(n),t[ie]=n.current,Ph(t),new Yc(n)},dl.version="19.3.0",dl}var yv;function KE(){if(yv)return cd.exports;yv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),cd.exports=ZE(),cd.exports}var QE=KE();/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JE=o=>o==null?void 0:o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function $E(o,e,i=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:JE(o),size:24,node:e,...i.length>0?{aliases:i}:{}}}/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=o=>{let e="",i=!1;for(const s of o){if(s==="-"||s==="_"||s<=" "){i=e.length>0;continue}e.length===0?e+=s.toLowerCase():e+=i?s.toUpperCase():s,i=!1}return e};/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=o=>{const e=t1(o);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=(...o)=>o.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim();/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vs={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function dd(o){return o!=null}function n1(o,e={}){var x,E;const i=e.attributeNames??{},s=b=>i[b]??b,l=o.size??o.width??Vs.width,f=o.size??o.height??Vs.height,h=((x=o.aliases)==null?void 0:x.filter(b=>typeof b=="string"&&b.trim()!=="").map(b=>`lucide-${b}`))??[],d=[...o.name?[`lucide-${o.name}`]:[],...h],p=((E=e.className)==null?void 0:E.split(" ").filter(Boolean))??[],_=e.includeDefaultClasses===!1?Yd(...p):Yd("lucide",...d,...p),v=e.absoluteStrokeWidth?Number(e.strokeWidth??Vs["stroke-width"])*Number(o.size??o.width??Vs.width)/Number(e.size??e.width??Vs.width):e.strokeWidth??Vs["stroke-width"];return["svg",{...Object.entries(Vs).reduce((b,[A,M])=>(b[s(A)]=M,b),{}),..."color"in e&&e.color&&{[s("stroke")]:e.color},..."size"in e&&dd(e.size)&&{[s("width")]:e.size,[s("height")]:e.size},..."width"in e&&dd(e.width)&&{[s("width")]:e.width},..."height"in e&&dd(e.height)&&{[s("height")]:e.height},[s("stroke-width")]:v,..._&&{[s("class")]:_},[s("viewBox")]:`0 0 ${l} ${f}`,...e.hasA11yProp===!1?{[s("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},o.node.map(b=>{const[A,M,S]=b,O=e.nonScalingStroke?{[s("vector-effect")]:"non-scaling-stroke",...M}:M;return S?[A,O,S]:[A,O]})]}/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function i1(o,e={}){return n1(o,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=o=>{for(const e in o)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},s1=Kt.createContext({}),r1=()=>Kt.useContext(s1),o1=Kt.forwardRef(({color:o,size:e,width:i,height:s,strokeWidth:l,absoluteStrokeWidth:f,nonScalingStroke:h,className:d="",children:p,iconNode:_=[],icon:v={node:_,aliases:[],size:24},...g},x)=>{const{size:E=24,strokeWidth:b=2,absoluteStrokeWidth:A=!1,nonScalingStroke:M=!1,color:S="currentColor",className:O=""}=r1()??{},z=!!p||a1(g),[D,j,F=[]]=i1(v,{color:o??S,width:i??e??E,height:s??e??E,strokeWidth:l??b,absoluteStrokeWidth:f??A,nonScalingStroke:h??M,className:Yd(O,d),hasA11yProp:z,attributes:g});return Kt.createElement(D,{ref:x,...j},[...F.map(([P,B])=>Kt.createElement(P,B)),...Array.isArray(p)?p:[p]])});/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function xe(o,e=[],i=[]){const s=typeof o=="string"?$E(o,e,i):o,l=Kt.forwardRef(({className:f,...h},d)=>Kt.createElement(o1,{ref:d,icon:s,className:f,...h}));return s.name&&(l.displayName=e1(s.name)),l}/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux={name:"activity",size:24,node:[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]};Ux.node;const l1=xe(Ux);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]};Lx.node;const Ox=xe(Lx);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx={name:"award",size:24,node:[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]};zx.node;const c1=xe(zx);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px={name:"box",size:24,node:[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]};Px.node;const Ix=xe(Px);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx={name:"camera",size:24,node:[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]};Fx.node;const u1=xe(Fx);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx={name:"chart-column",size:24,node:[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],aliases:["bar-chart-3"]};Bx.node;const Hx=xe(Bx);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};Gx.node;const f1=xe(Gx);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]};Vx.node;const h1=xe(Vx);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx={name:"circle-alert",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aliases:["alert-circle"]};jx.node;const d1=xe(jx);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};kx.node;const Sv=xe(kx);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx={name:"circle-x",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],aliases:["x-circle"]};Xx.node;const p1=xe(Xx);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx={name:"clock",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]};qx.node;const Mv=xe(qx);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx={name:"cloud-upload",size:24,node:[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]],aliases:["upload-cloud"]};Yx.node;const m1=xe(Yx);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx={name:"compass",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}]]};Wx.node;const Zx=xe(Wx);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx={name:"cpu",size:24,node:[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]};Kx.node;const Qx=xe(Kx);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx={name:"download",size:24,node:[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]};Jx.node;const Ip=xe(Jx);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x={name:"file-check-corner",size:24,node:[["path",{d:"M10.5 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v6",key:"g5mvt7"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m14 20 2 2 4-4",key:"15kota"}]],aliases:["file-check-2"]};$x.node;const Fp=xe($x);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty={name:"file-image",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["circle",{cx:"10",cy:"12",r:"2",key:"737tya"}],["path",{d:"m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22",key:"wt3hpn"}]]};ty.node;const g1=xe(ty);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey={name:"file-text",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]};ey.node;const ny=xe(ey);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy={name:"globe",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]};iy.node;const _1=xe(iy);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay={name:"info",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]};ay.node;const v1=xe(ay);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};sy.node;const Du=xe(sy);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry={name:"loader-circle",size:24,node:[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],aliases:["loader-2"]};ry.node;const oy=xe(ry);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly={name:"maximize-2",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]]};ly.node;const x1=xe(ly);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy={name:"menu",size:24,node:[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]};cy.node;const y1=xe(cy);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy={name:"minimize-2",size:24,node:[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]]};uy.node;const S1=xe(uy);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy={name:"mountain",size:24,node:[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}]]};fy.node;const Bp=xe(fy);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy={name:"orbit",size:24,node:[["path",{d:"M20.341 6.484A10 10 0 0 1 10.266 21.85",key:"1enhxb"}],["path",{d:"M3.659 17.516A10 10 0 0 1 13.74 2.152",key:"1crzgf"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}]]};hy.node;const M1=xe(hy);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy={name:"plane",size:24,node:[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]]};dy.node;const E1=xe(dy);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py={name:"play",size:24,node:[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]};py.node;const b1=xe(py);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my={name:"refresh-cw",size:24,node:[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]};my.node;const T1=xe(my);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy={name:"rotate-ccw",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]};gy.node;const A1=xe(gy);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y={name:"settings",size:24,node:[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};_y.node;const vy=xe(_y);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};xy.node;const yy=xe(xy);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy={name:"sliders-vertical",size:24,node:[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],aliases:["sliders"]};Sy.node;const Hp=xe(Sy);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};My.node;const Au=xe(My);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey={name:"trending-down",size:24,node:[["path",{d:"M16 17h6v-6",key:"t6n2it"}],["path",{d:"m22 17-8.5-8.5-5 5L2 7",key:"x473p"}]]};Ey.node;const Ev=xe(Ey);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by={name:"trending-up",size:24,node:[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]]};by.node;const R1=xe(by);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};Ty.node;const Ay=xe(Ty);function C1({activeNav:o="dashboard",onSelectNav:e,onOpenSettings:i,onRunDemo:s,isRunning:l=!1,systemStatus:f=null}){const[h,d]=Kt.useState(!1),[p,_]=Kt.useState(!1);Kt.useEffect(()=>{const x=()=>{d(window.scrollY>20)};return window.addEventListener("scroll",x),()=>window.removeEventListener("scroll",x)},[]);const v=[{id:"dashboard",label:"Home"},{id:"upload",label:"Platform"},{id:"da3",label:"DA3 Engine"},{id:"terrain",label:"3D Flythrough"},{id:"dsm-analysis",label:"DSM & GeoTIFF"},{id:"accuracy",label:"Accuracy"},{id:"measurements",label:"Terrain Analysis"},{id:"gamus",label:"GAMUS Data"}],g=x=>{_(!1),e==null||e(x)};return m.jsxs("header",{className:`floating-nav-wrapper ${h?"nav-scrolled":""}`,children:[m.jsxs("div",{className:"floating-nav-pill",children:[m.jsxs("div",{className:"nav-logo-group",onClick:()=>g("dashboard"),children:[m.jsx("div",{className:"nav-geom-icon",children:m.jsxs("svg",{width:"26",height:"26",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[m.jsx("circle",{cx:"18",cy:"18",r:"4",fill:"#0f172a"}),m.jsx("circle",{cx:"18",cy:"8",r:"3.2",stroke:"#0f172a",strokeWidth:"2",fill:"white"}),m.jsx("circle",{cx:"26.66",cy:"13",r:"3.2",stroke:"#0f172a",strokeWidth:"2",fill:"white"}),m.jsx("circle",{cx:"26.66",cy:"23",r:"3.2",stroke:"#0f172a",strokeWidth:"2",fill:"white"}),m.jsx("circle",{cx:"18",cy:"28",r:"3.2",stroke:"#0f172a",strokeWidth:"2",fill:"white"}),m.jsx("circle",{cx:"9.34",cy:"23",r:"3.2",stroke:"#0f172a",strokeWidth:"2",fill:"white"}),m.jsx("circle",{cx:"9.34",cy:"13",r:"3.2",stroke:"#0f172a",strokeWidth:"2",fill:"white"}),m.jsx("line",{x1:"18",y1:"14",x2:"18",y2:"11.2",stroke:"#0f172a",strokeWidth:"1.5"}),m.jsx("line",{x1:"21.5",y1:"16",x2:"23.9",y2:"14.6",stroke:"#0f172a",strokeWidth:"1.5"}),m.jsx("line",{x1:"21.5",y1:"20",x2:"23.9",y2:"21.4",stroke:"#0f172a",strokeWidth:"1.5"}),m.jsx("line",{x1:"18",y1:"22",x2:"18",y2:"24.8",stroke:"#0f172a",strokeWidth:"1.5"}),m.jsx("line",{x1:"14.5",y1:"20",x2:"12.1",y2:"21.4",stroke:"#0f172a",strokeWidth:"1.5"}),m.jsx("line",{x1:"14.5",y1:"16",x2:"12.1",y2:"14.6",stroke:"#0f172a",strokeWidth:"1.5"})]})}),m.jsxs("div",{className:"nav-brand-title",children:[m.jsx("span",{className:"brand-name",children:"DepthWizard"}),m.jsx("span",{className:"brand-badge-ai",children:"DA3"})]})]}),m.jsx("nav",{className:"nav-center-links",children:v.map(x=>m.jsx("button",{className:`nav-link-btn ${o===x.id?"active":""}`,onClick:()=>g(x.id),children:x.label},x.id))}),m.jsxs("div",{className:"nav-actions-group",children:[m.jsx("button",{className:"nav-demo-pill-btn",onClick:s,disabled:l,title:"Execute End-to-End DA3 Pipeline with Sample Optical Imagery","aria-label":"Run Live Demo",children:l?m.jsxs(m.Fragment,{children:[m.jsx("span",{className:"nav-spinner"}),m.jsx("span",{className:"nav-demo-text",children:"Processing..."})]}):m.jsxs(m.Fragment,{children:[m.jsx(Au,{size:13,className:"text-blue-500"}),m.jsx("span",{className:"nav-demo-text",children:"Live Demo"}),m.jsx("span",{className:"nav-demo-text-short",children:"Demo"})]})}),m.jsx("button",{className:"nav-icon-btn",onClick:i,title:"System Diagnostics & Settings","aria-label":"Settings",children:m.jsx(vy,{size:16})}),m.jsx("button",{className:"nav-mobile-toggle",onClick:()=>_(!p),"aria-label":p?"Close Menu":"Open Menu",children:p?m.jsx(Ay,{size:20}):m.jsx(y1,{size:20})})]})]}),p&&m.jsxs(m.Fragment,{children:[m.jsx("div",{className:"mobile-nav-backdrop",onClick:()=>_(!1)}),m.jsxs("div",{className:"mobile-nav-dropdown",children:[m.jsx("div",{className:"mobile-nav-links-list",children:v.map(x=>m.jsxs("button",{className:`mobile-nav-link ${o===x.id?"active":""}`,onClick:()=>g(x.id),children:[m.jsx("span",{children:x.label}),m.jsx(h1,{size:14})]},x.id))}),m.jsx("div",{className:"mobile-nav-actions",children:m.jsxs("button",{className:"mobile-demo-btn",onClick:()=>{_(!1),s==null||s()},disabled:l,children:[m.jsx(Au,{size:15}),m.jsx("span",{children:l?"Running DA3 Demo...":"Run Live DA3 Demo"})]})})]})]})]})}function w1({onUploadClick:o,onDemoClick:e,onSelectFeature:i,activeFeature:s="upload",isRunning:l=!1}){const f=[{id:"upload",icon:Ix,label:"Single-View Optical"},{id:"da3",icon:l1,label:"Relative Depth (DA3)"},{id:"dsm-analysis",icon:Bp,label:"Metric DSM & GeoTIFF"},{id:"terrain",icon:Zx,label:"3D WebGL Flythrough"},{id:"measurements",icon:Du,label:"Slope & Height Profile"}];return m.jsxs("section",{className:"luminous-hero-container",children:[m.jsx("div",{className:"hero-circuit-bg","aria-hidden":"true",children:m.jsxs("svg",{className:"circuit-lines-svg",width:"100%",height:"100%",viewBox:"0 0 1440 600",fill:"none",preserveAspectRatio:"none",children:[m.jsx("path",{d:"M 0 180 L 180 180 L 220 220 L 220 380 L 260 420 L 340 420",stroke:"rgba(255, 255, 255, 0.45)",strokeWidth:"1.2",strokeDasharray:"3 3"}),m.jsx("path",{d:"M 0 320 L 120 320 L 160 360 L 160 480",stroke:"rgba(255, 255, 255, 0.35)",strokeWidth:"1"}),m.jsx("circle",{cx:"220",cy:"220",r:"3",fill:"rgba(255, 255, 255, 0.7)"}),m.jsx("circle",{cx:"260",cy:"420",r:"3",fill:"rgba(255, 255, 255, 0.7)"}),m.jsx("path",{d:"M 1440 180 L 1260 180 L 1220 220 L 1220 380 L 1180 420 L 1100 420",stroke:"rgba(255, 255, 255, 0.45)",strokeWidth:"1.2",strokeDasharray:"3 3"}),m.jsx("path",{d:"M 1440 320 L 1320 320 L 1280 360 L 1280 480",stroke:"rgba(255, 255, 255, 0.35)",strokeWidth:"1"}),m.jsx("circle",{cx:"1220",cy:"220",r:"3",fill:"rgba(255, 255, 255, 0.7)"}),m.jsx("circle",{cx:"1180",cy:"420",r:"3",fill:"rgba(255, 255, 255, 0.7)"}),m.jsx("line",{x1:"720",y1:"50",x2:"720",y2:"70",stroke:"rgba(255, 255, 255, 0.3)",strokeWidth:"1"}),m.jsx("line",{x1:"710",y1:"60",x2:"730",y2:"60",stroke:"rgba(255, 255, 255, 0.3)",strokeWidth:"1"})]})}),m.jsxs("div",{className:"hero-inner-content",children:[m.jsxs("div",{className:"hero-pill-badge",children:[m.jsx("span",{className:"badge-sparkle",children:"✦"}),m.jsx("span",{className:"badge-text",children:"THE AGENTIC 3D TERRAIN & ELEVATION PLATFORM"})]}),m.jsxs("h1",{className:"hero-editorial-title",children:["Reconstruct 3D elevation models that ",m.jsx("span",{className:"title-serif-italic",children:"convert"})," with AI intelligence"]}),m.jsx("p",{className:"hero-editorial-subtitle",children:"A fast, consistent, and high-precision monocular depth & DSM terrain elevation AI platform powered by Depth Anything 3."}),m.jsxs("div",{className:"hero-cta-buttons-row",children:[m.jsx("button",{className:"hero-btn-dark-glow",onClick:e,disabled:l,children:l?m.jsxs(m.Fragment,{children:[m.jsx("span",{className:"btn-spinner"}),m.jsx("span",{children:"Running DA3 Inference..."})]}):m.jsxs(m.Fragment,{children:[m.jsx("span",{children:"Start Depth Estimation"}),m.jsx(Ox,{size:16})]})}),m.jsx("button",{className:"hero-btn-white-pill",onClick:o,children:m.jsx("span",{children:"Upload Optical Imagery"})})]}),m.jsxs("div",{className:"hero-bottom-dock-wrapper",children:[m.jsx("div",{className:"dock-connector-line","aria-hidden":"true"}),m.jsx("div",{className:"hero-bottom-dock",children:f.map(h=>{const d=h.icon,p=s===h.id;return m.jsxs("button",{className:`dock-pill-chip ${p?"active":""}`,onClick:()=>i==null?void 0:i(h.id),children:[m.jsx(d,{size:14,className:"dock-chip-icon"}),m.jsx("span",{children:h.label})]},h.id)})})]})]})]})}function N1({pipelineResult:o=null,dsmMesh:e=null,selectedMeasurement:i=null}){var O,z;const s=o!==null,l=(O=o==null?void 0:o.stages)==null?void 0:O.relative_depth,f=s?"Generated":"Standby",h=l?`[${l.min_depth}, ${l.max_depth}]`:"Standby",d=l?"Relative Ray Depth Range":"Depth Anything 3",p=(z=o==null?void 0:o.stages)==null?void 0:z.dsm,_=s||e?"Ready":"Standby",v=p?`${p.minimum_elevation.toFixed(1)}m – ${p.maximum_elevation.toFixed(1)}m`:e?`${e.min_height.toFixed(1)}m – ${e.max_height.toFixed(1)}m`:"outputs/dsm.tif",g=p?`Mean: ${p.mean_elevation.toFixed(1)}m`:"GeoTIFF Surface Raster",x=i&&i.height!==void 0,E=x?`${i.height.toFixed(2)} m`:e?`${(e.max_height-e.min_height).toFixed(2)} m`:"--",b=x?"Selected Point Above Ground":"Total Relief Span",A=i&&i.slope!==void 0,M=A?`${i.slope.toFixed(1)}°`:"--";let S="Click terrain to calculate";if(A){const D=i.slope;D<5?S="Flat Surface (<5°)":D<15?S="Gentle Gradient (5-15°)":D<30?S="Moderate Incline (15-30°)":S="Steep Topography (>30°)"}return m.jsxs("section",{className:"analytics-cards-grid",children:[m.jsxs("div",{className:"analytics-card",children:[m.jsxs("div",{className:"card-top-row",children:[m.jsx("div",{className:"card-icon-wrapper cyan",children:m.jsx(Du,{size:20})}),m.jsxs("div",{className:`card-status-pill ${s?"success":"neutral"}`,children:[s?m.jsx(Sv,{size:12}):m.jsx(Mv,{size:12}),m.jsx("span",{children:f})]})]}),m.jsxs("div",{className:"card-body",children:[m.jsx("span",{className:"card-metric-title",children:"RELATIVE DEPTH"}),m.jsx("div",{className:"card-metric-number font-mono",children:h}),m.jsx("span",{className:"card-metric-sub",children:d})]})]}),m.jsxs("div",{className:"analytics-card",children:[m.jsxs("div",{className:"card-top-row",children:[m.jsx("div",{className:"card-icon-wrapper emerald",children:m.jsx(Fp,{size:20})}),m.jsxs("div",{className:`card-status-pill ${s||e?"success":"neutral"}`,children:[s||e?m.jsx(Sv,{size:12}):m.jsx(Mv,{size:12}),m.jsx("span",{children:_})]})]}),m.jsxs("div",{className:"card-body",children:[m.jsx("span",{className:"card-metric-title",children:"METRIC DSM"}),m.jsx("div",{className:"card-metric-number font-mono",children:v}),m.jsx("span",{className:"card-metric-sub",children:g})]})]}),m.jsxs("div",{className:"analytics-card",children:[m.jsxs("div",{className:"card-top-row",children:[m.jsx("div",{className:"card-icon-wrapper blue",children:m.jsx(Bp,{size:20})}),m.jsx("div",{className:`card-status-pill ${x?"active":"neutral"}`,children:m.jsx("span",{children:x?"Point Sampled":"Relief Max"})})]}),m.jsxs("div",{className:"card-body",children:[m.jsx("span",{className:"card-metric-title",children:"TERRAIN HEIGHT"}),m.jsx("div",{className:"card-metric-number font-mono",children:E}),m.jsx("span",{className:"card-metric-sub",children:b})]})]}),m.jsxs("div",{className:"analytics-card",children:[m.jsxs("div",{className:"card-top-row",children:[m.jsx("div",{className:"card-icon-wrapper amber",children:m.jsx(Zx,{size:20})}),m.jsx("div",{className:`card-status-pill ${A?"active":"neutral"}`,children:m.jsx("span",{children:A?"Calculated":"Standby"})})]}),m.jsxs("div",{className:"card-body",children:[m.jsx("span",{className:"card-metric-title",children:"SLOPE"}),m.jsx("div",{className:"card-metric-number font-mono",children:M}),m.jsx("span",{className:"card-metric-sub",children:S})]})]})]})}function D1({pipelineState:o="idle",pipelineResult:e=null}){var f,h,d,p,_;const i=o==="running",s=o==="completed",l=[{id:"rgb",title:"RGB INPUT",label:"Optical Satellite",icon:u1,detail:(f=e==null?void 0:e.stages)!=null&&f.rgb_ingestion?`${e.stages.rgb_ingestion.dimensions.width}×${e.stages.rgb_ingestion.dimensions.height}`:"PNG / JPG / GeoTIFF"},{id:"ai",title:"DEPTH AI",label:"Depth Anything 3",icon:Au,detail:"ViT-S Monocular Backbone"},{id:"depth",title:"RELATIVE DEPTH",label:"Inverse Depth",icon:Du,detail:(h=e==null?void 0:e.stages)!=null&&h.relative_depth?`[${e.stages.relative_depth.min_depth}, ${e.stages.relative_depth.max_depth}]`:"Unitless D"},{id:"calib",title:"CALIBRATION",label:"Affine Fit",icon:Hp,detail:(d=e==null?void 0:e.stages)!=null&&d.metric_calibration?`H = a·D + b (RMSE: ${e.stages.metric_calibration.rmse_meters.toFixed(1)}m)`:"Metric Ground Datum"},{id:"dsm",title:"METRIC DSM",label:"GeoTIFF Raster",icon:Fp,detail:(p=e==null?void 0:e.stages)!=null&&p.dsm?`${e.stages.dsm.minimum_elevation.toFixed(1)}m to ${e.stages.dsm.maximum_elevation.toFixed(1)}m`:"EPSG:3857 Grid"},{id:"mesh",title:"3D MESH",label:"WebGL Surface",icon:Ix,detail:(_=e==null?void 0:e.stages)!=null&&_.terrain_3d?`${e.stages.terrain_3d.vertex_count.toLocaleString()} Vertices`:"32,258 Triangles"}];return m.jsxs("section",{className:"horizontal-pipeline-section","aria-label":"End-to-End Processing Pipeline",children:[m.jsxs("div",{className:"pipeline-header-bar",children:[m.jsx("span",{className:"pipeline-title-label",children:"PROCESSING PIPELINE"}),m.jsx("span",{className:"pipeline-status-text",children:i?"Pipeline Running...":s?`✓ Finished in ${e==null?void 0:e.total_execution_seconds}s`:"Ready for Ingestion"})]}),m.jsx("div",{className:"pipeline-stages-container",children:l.map((v,g)=>{const x=v.icon,E=s,b=i;return m.jsxs(Dx.Fragment,{children:[m.jsxs("div",{className:`pipeline-stage-item ${E?"completed":b?"active":""}`,children:[m.jsx("div",{className:"stage-icon-circle",children:E?m.jsx(f1,{size:16,className:"text-emerald"}):b?m.jsx(oy,{size:16,className:"spin-icon"}):m.jsx(x,{size:16})}),m.jsxs("div",{className:"stage-text-block",children:[m.jsx("span",{className:"stage-step-title",children:v.title}),m.jsx("span",{className:"stage-step-label",children:v.label}),m.jsx("span",{className:"stage-step-detail font-mono",children:v.detail})]})]}),g<l.length-1&&m.jsx("div",{className:`pipeline-connector-line ${E?"completed":b?"active":""}`,children:m.jsx(Ox,{size:14,className:"connector-arrow"})})]},v.id)})})]})}function U1({selectedFile:o=null,fileName:e="sample_gamus_optical.png",fileFormat:i="PNG",filePreviewUrl:s=null,fileResolution:l="1024 × 1024 px",pipelineState:f="idle",pipelineResult:h=null,pipelineError:d=null,onFileSelect:p=null,onLoadSample:_=null,onRunPipeline:v=null}){var j;const[g,x]=Kt.useState(!1),E=Kt.useRef(null),b=f==="running",A=f==="completed",M=F=>{F.preventDefault(),x(!0)},S=()=>{x(!1)},O=F=>{var B;F.preventDefault(),x(!1);const P=(B=F.dataTransfer.files)==null?void 0:B[0];P&&p&&p(P)},z=F=>{var B;const P=(B=F.target.files)==null?void 0:B[0];P&&p&&p(P)},D=[{id:"rgb",title:"RGB IMAGE",desc:"Optical Ingestion"},{id:"depth",title:"DEPTH ESTIMATION",desc:"Depth Anything 3"},{id:"calib",title:"SCALE CALIBRATION",desc:"H = a·D + b"},{id:"dsm",title:"METRIC DSM",desc:"GeoTIFF Surface"},{id:"terrain",title:"3D TERRAIN",desc:"WebGL Heightfield"}];return m.jsxs("section",{className:"image-processing-card",id:"upload-section",children:[m.jsxs("div",{className:"card-header-bar",children:[m.jsxs("div",{className:"card-title-group",children:[m.jsx(g1,{className:"card-header-icon",size:20}),m.jsxs("div",{children:[m.jsx("h3",{className:"card-heading-text",children:"Upload Remote-Sensing Image"}),m.jsx("p",{className:"card-subheading-text",children:"Accepts optical satellite or aerial imagery (PNG, JPG, GeoTIFF) for single-view 3D elevation extraction."})]})]}),m.jsx("div",{className:"card-header-actions",children:m.jsxs("button",{className:"btn-sample-load",onClick:_,disabled:b,title:"Load representative GAMUS satellite optical image",children:[m.jsx(Au,{size:14}),m.jsx("span",{children:"Use Sample Image (DC_02_26)"})]})})]}),m.jsxs("div",{className:"upload-and-info-grid",children:[m.jsxs("div",{className:`dropzone-area ${g?"drag-over":""}`,onDragOver:M,onDragLeave:S,onDrop:O,onClick:()=>{var F;return(F=E.current)==null?void 0:F.click()},children:[m.jsx("input",{ref:E,type:"file",accept:".png,.jpg,.jpeg,.tif,.tiff",onChange:z,style:{display:"none"}}),m.jsxs("div",{className:"dropzone-inner-content",children:[m.jsx("div",{className:"dropzone-icon-box",children:m.jsx(m1,{size:32})}),m.jsxs("p",{className:"dropzone-prompt",children:[m.jsx("strong",{children:"Click to upload"})," or drag and drop optical image"]}),m.jsxs("span",{className:"dropzone-supported",children:["Supports: ",m.jsx("strong",{children:"PNG"}),", ",m.jsx("strong",{children:"JPG"}),", ",m.jsx("strong",{children:"GeoTIFF (.tif, .tiff)"})]})]})]}),m.jsxs("div",{className:"upload-metadata-panel",children:[m.jsxs("div",{className:"meta-card-preview-row",children:[s?m.jsx("div",{className:"preview-image-box",children:m.jsx("img",{src:s,alt:"Satellite Input Preview",className:"preview-thumbnail"})}):m.jsxs("div",{className:"preview-placeholder-box",children:[m.jsx(ny,{size:28}),m.jsx("span",{children:"GeoTIFF / Raster"})]}),m.jsxs("div",{className:"metadata-text-column",children:[m.jsxs("div",{className:"meta-field",children:[m.jsx("span",{className:"meta-field-label",children:"File Name:"}),m.jsx("span",{className:"meta-field-value font-mono",children:e})]}),m.jsxs("div",{className:"meta-field",children:[m.jsx("span",{className:"meta-field-label",children:"Resolution:"}),m.jsx("span",{className:"meta-field-value font-mono",children:(j=h==null?void 0:h.stages)!=null&&j.rgb_ingestion?`${h.stages.rgb_ingestion.dimensions.width} × ${h.stages.rgb_ingestion.dimensions.height} px`:l})]}),m.jsxs("div",{className:"meta-field",children:[m.jsx("span",{className:"meta-field-label",children:"File Type:"}),m.jsx("span",{className:"format-tag",children:i})]}),m.jsxs("div",{className:"meta-field",children:[m.jsx("span",{className:"meta-field-label",children:"Processing Status:"}),m.jsx("span",{className:`status-pill-small ${b?"running":A?"completed":"ready"}`,children:b?"Processing...":A?"Completed":"Ready"})]})]})]}),m.jsxs("div",{className:"vertical-stepper-box",children:[m.jsx("div",{className:"stepper-title",children:"PIPELINE STAGES"}),m.jsx("div",{className:"stepper-steps-flow",children:D.map((F,P)=>m.jsxs(Dx.Fragment,{children:[m.jsxs("div",{className:`step-badge-node ${A?"done":b?"active":""}`,children:[m.jsx("span",{className:"step-node-dot"}),m.jsx("span",{className:"step-node-text",children:F.title})]}),P<D.length-1&&m.jsx("span",{className:"step-node-arrow",children:"↓"})]},F.id))})]}),m.jsxs("div",{className:"action-button-row",children:[m.jsx("button",{className:`btn-primary-execute ${b?"running":""}`,onClick:v,disabled:b,children:b?m.jsxs(m.Fragment,{children:[m.jsx(oy,{size:16,className:"spin-icon"}),m.jsx("span",{children:"Processing Depth & DSM..."})]}):m.jsxs(m.Fragment,{children:[m.jsx(b1,{size:16,fill:"currentColor"}),m.jsx("span",{children:"▶ Run End-to-End Pipeline"})]})}),A&&m.jsxs("span",{className:"execution-time-label",children:["✓ Executed in ",h==null?void 0:h.total_execution_seconds,"s"]}),d&&m.jsxs("span",{className:"execution-error-label",children:[m.jsx(d1,{size:14})," ",d]})]})]})]})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gp="174",co={ROTATE:0,DOLLY:1,PAN:2},oo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},L1=0,bv=1,O1=2,Ry=1,Cy=2,Ca=3,vs=0,ei=1,ia=2,gs=0,uo=1,Tv=2,Av=3,Rv=4,z1=5,Qs=100,P1=101,I1=102,F1=103,B1=104,H1=200,G1=201,V1=202,j1=203,Wd=204,Zd=205,k1=206,X1=207,q1=208,Y1=209,W1=210,Z1=211,K1=212,Q1=213,J1=214,Kd=0,Qd=1,Jd=2,po=3,$d=4,tp=5,ep=6,np=7,wy=0,$1=1,tb=2,_s=0,eb=1,nb=2,ib=3,ab=4,sb=5,rb=6,ob=7,Ny=300,mo=301,go=302,ip=303,ap=304,Uu=306,sp=1e3,wa=1001,rp=1002,ki=1003,lb=1004,Zc=1005,ti=1006,pd=1007,$s=1008,La=1009,Dy=1010,Uy=1011,Ml=1012,Vp=1013,tr=1014,Na=1015,bl=1016,jp=1017,kp=1018,_o=1020,Ly=35902,Oy=1021,zy=1022,ji=1023,Py=1024,Iy=1025,fo=1026,vo=1027,Fy=1028,Xp=1029,By=1030,qp=1031,Yp=1033,xu=33776,yu=33777,Su=33778,Mu=33779,op=35840,lp=35841,cp=35842,up=35843,fp=36196,hp=37492,dp=37496,pp=37808,mp=37809,gp=37810,_p=37811,vp=37812,xp=37813,yp=37814,Sp=37815,Mp=37816,Ep=37817,bp=37818,Tp=37819,Ap=37820,Rp=37821,Eu=36492,Cp=36494,wp=36495,Hy=36283,Np=36284,Dp=36285,Up=36286,cb=3200,ub=3201,Gy=0,fb=1,ms="",Ai="srgb",xo="srgb-linear",Ru="linear",Ve="srgb",Yr=7680,Cv=519,hb=512,db=513,pb=514,Vy=515,mb=516,gb=517,_b=518,vb=519,wv=35044,Nv="300 es",Da=2e3,Cu=2001;class ir{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const f=l.indexOf(i);f!==-1&&l.splice(f,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let f=0,h=l.length;f<h;f++)l[f].call(this,e);e.target=null}}}const Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bu=Math.PI/180,Lp=180/Math.PI;function Tl(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Bn[o&255]+Bn[o>>8&255]+Bn[o>>16&255]+Bn[o>>24&255]+"-"+Bn[e&255]+Bn[e>>8&255]+"-"+Bn[e>>16&15|64]+Bn[e>>24&255]+"-"+Bn[i&63|128]+Bn[i>>8&255]+"-"+Bn[i>>16&255]+Bn[i>>24&255]+Bn[s&255]+Bn[s>>8&255]+Bn[s>>16&255]+Bn[s>>24&255]).toLowerCase()}function be(o,e,i){return Math.max(e,Math.min(i,o))}function xb(o,e){return(o%e+e)%e}function md(o,e,i){return(1-i)*o+i*e}function pl(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Jn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const yb={DEG2RAD:bu};class ue{constructor(e=0,i=0){ue.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=be(this.x,e.x,i.x),this.y=be(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=be(this.x,e,i),this.y=be(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(be(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(be(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),f=this.x-e.x,h=this.y-e.y;return this.x=f*s-h*l+e.x,this.y=f*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pe{constructor(e,i,s,l,f,h,d,p,_){pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,f,h,d,p,_)}set(e,i,s,l,f,h,d,p,_){const v=this.elements;return v[0]=e,v[1]=l,v[2]=d,v[3]=i,v[4]=f,v[5]=p,v[6]=s,v[7]=h,v[8]=_,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,f=this.elements,h=s[0],d=s[3],p=s[6],_=s[1],v=s[4],g=s[7],x=s[2],E=s[5],b=s[8],A=l[0],M=l[3],S=l[6],O=l[1],z=l[4],D=l[7],j=l[2],F=l[5],P=l[8];return f[0]=h*A+d*O+p*j,f[3]=h*M+d*z+p*F,f[6]=h*S+d*D+p*P,f[1]=_*A+v*O+g*j,f[4]=_*M+v*z+g*F,f[7]=_*S+v*D+g*P,f[2]=x*A+E*O+b*j,f[5]=x*M+E*z+b*F,f[8]=x*S+E*D+b*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],f=e[3],h=e[4],d=e[5],p=e[6],_=e[7],v=e[8];return i*h*v-i*d*_-s*f*v+s*d*p+l*f*_-l*h*p}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],f=e[3],h=e[4],d=e[5],p=e[6],_=e[7],v=e[8],g=v*h-d*_,x=d*p-v*f,E=_*f-h*p,b=i*g+s*x+l*E;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/b;return e[0]=g*A,e[1]=(l*_-v*s)*A,e[2]=(d*s-l*h)*A,e[3]=x*A,e[4]=(v*i-l*p)*A,e[5]=(l*f-d*i)*A,e[6]=E*A,e[7]=(s*p-_*i)*A,e[8]=(h*i-s*f)*A,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,f,h,d){const p=Math.cos(f),_=Math.sin(f);return this.set(s*p,s*_,-s*(p*h+_*d)+h+e,-l*_,l*p,-l*(-_*h+p*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(gd.makeScale(e,i)),this}rotate(e){return this.premultiply(gd.makeRotation(-e)),this}translate(e,i){return this.premultiply(gd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gd=new pe;function jy(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function El(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Sb(){const o=El("canvas");return o.style.display="block",o}const Dv={};function Zs(o){o in Dv||(Dv[o]=!0,console.warn(o))}function Mb(o,e,i){return new Promise(function(s,l){function f(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:s()}}setTimeout(f,i)})}function Eb(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function bb(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Uv=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lv=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Tb(){const o={enabled:!0,workingColorSpace:xo,spaces:{},convert:function(l,f,h){return this.enabled===!1||f===h||!f||!h||(this.spaces[f].transfer===Ve&&(l.r=Ua(l.r),l.g=Ua(l.g),l.b=Ua(l.b)),this.spaces[f].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[f].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ve&&(l.r=ho(l.r),l.g=ho(l.g),l.b=ho(l.b))),l},fromWorkingColorSpace:function(l,f){return this.convert(l,this.workingColorSpace,f)},toWorkingColorSpace:function(l,f){return this.convert(l,f,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ms?Ru:this.spaces[l].transfer},getLuminanceCoefficients:function(l,f=this.workingColorSpace){return l.fromArray(this.spaces[f].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,f,h){return l.copy(this.spaces[f].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[xo]:{primaries:e,whitePoint:s,transfer:Ru,toXYZ:Uv,fromXYZ:Lv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ai},outputColorSpaceConfig:{drawingBufferColorSpace:Ai}},[Ai]:{primaries:e,whitePoint:s,transfer:Ve,toXYZ:Uv,fromXYZ:Lv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ai}}}),o}const ze=Tb();function Ua(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ho(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Wr;class Ab{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Wr===void 0&&(Wr=El("canvas")),Wr.width=e.width,Wr.height=e.height;const s=Wr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Wr}return i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=El("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),f=l.data;for(let h=0;h<f.length;h++)f[h]=Ua(f[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ua(i[s]/255)*255):i[s]=Ua(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Rb=0;class Wp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rb++}),this.uuid=Tl(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let f;if(Array.isArray(l)){f=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?f.push(_d(l[h].image)):f.push(_d(l[h]))}else f=_d(l);s.url=f}return i||(e.images[this.uuid]=s),s}}function _d(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Ab.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cb=0;class Gn extends ir{constructor(e=Gn.DEFAULT_IMAGE,i=Gn.DEFAULT_MAPPING,s=wa,l=wa,f=ti,h=$s,d=ji,p=La,_=Gn.DEFAULT_ANISOTROPY,v=ms){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cb++}),this.uuid=Tl(),this.name="",this.source=new Wp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=f,this.minFilter=h,this.anisotropy=_,this.format=d,this.internalFormat=null,this.type=p,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ny)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sp:e.x=e.x-Math.floor(e.x);break;case wa:e.x=e.x<0?0:1;break;case rp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sp:e.y=e.y-Math.floor(e.y);break;case wa:e.y=e.y<0?0:1;break;case rp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=Ny;Gn.DEFAULT_ANISOTROPY=1;class rn{constructor(e=0,i=0,s=0,l=1){rn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,f=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*f,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*f,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*f,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*f,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,f;const p=e.elements,_=p[0],v=p[4],g=p[8],x=p[1],E=p[5],b=p[9],A=p[2],M=p[6],S=p[10];if(Math.abs(v-x)<.01&&Math.abs(g-A)<.01&&Math.abs(b-M)<.01){if(Math.abs(v+x)<.1&&Math.abs(g+A)<.1&&Math.abs(b+M)<.1&&Math.abs(_+E+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const z=(_+1)/2,D=(E+1)/2,j=(S+1)/2,F=(v+x)/4,P=(g+A)/4,B=(b+M)/4;return z>D&&z>j?z<.01?(s=0,l=.707106781,f=.707106781):(s=Math.sqrt(z),l=F/s,f=P/s):D>j?D<.01?(s=.707106781,l=0,f=.707106781):(l=Math.sqrt(D),s=F/l,f=B/l):j<.01?(s=.707106781,l=.707106781,f=0):(f=Math.sqrt(j),s=P/f,l=B/f),this.set(s,l,f,i),this}let O=Math.sqrt((M-b)*(M-b)+(g-A)*(g-A)+(x-v)*(x-v));return Math.abs(O)<.001&&(O=1),this.x=(M-b)/O,this.y=(g-A)/O,this.z=(x-v)/O,this.w=Math.acos((_+E+S-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=be(this.x,e.x,i.x),this.y=be(this.y,e.y,i.y),this.z=be(this.z,e.z,i.z),this.w=be(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=be(this.x,e,i),this.y=be(this.y,e,i),this.z=be(this.z,e,i),this.w=be(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(be(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wb extends ir{constructor(e=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new rn(0,0,e,i),this.scissorTest=!1,this.viewport=new rn(0,0,e,i);const l={width:e,height:i,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const f=new Gn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);f.flipY=!1,f.generateMipmaps=s.generateMipmaps,f.internalFormat=s.internalFormat,this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=f.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,f=this.textures.length;l<f;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Wp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class er extends wb{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class ky extends Gn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=ki,this.minFilter=ki,this.wrapR=wa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Nb extends Gn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=ki,this.minFilter=ki,this.wrapR=wa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nr{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,f,h,d){let p=s[l+0],_=s[l+1],v=s[l+2],g=s[l+3];const x=f[h+0],E=f[h+1],b=f[h+2],A=f[h+3];if(d===0){e[i+0]=p,e[i+1]=_,e[i+2]=v,e[i+3]=g;return}if(d===1){e[i+0]=x,e[i+1]=E,e[i+2]=b,e[i+3]=A;return}if(g!==A||p!==x||_!==E||v!==b){let M=1-d;const S=p*x+_*E+v*b+g*A,O=S>=0?1:-1,z=1-S*S;if(z>Number.EPSILON){const j=Math.sqrt(z),F=Math.atan2(j,S*O);M=Math.sin(M*F)/j,d=Math.sin(d*F)/j}const D=d*O;if(p=p*M+x*D,_=_*M+E*D,v=v*M+b*D,g=g*M+A*D,M===1-d){const j=1/Math.sqrt(p*p+_*_+v*v+g*g);p*=j,_*=j,v*=j,g*=j}}e[i]=p,e[i+1]=_,e[i+2]=v,e[i+3]=g}static multiplyQuaternionsFlat(e,i,s,l,f,h){const d=s[l],p=s[l+1],_=s[l+2],v=s[l+3],g=f[h],x=f[h+1],E=f[h+2],b=f[h+3];return e[i]=d*b+v*g+p*E-_*x,e[i+1]=p*b+v*x+_*g-d*E,e[i+2]=_*b+v*E+d*x-p*g,e[i+3]=v*b-d*g-p*x-_*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,f=e._z,h=e._order,d=Math.cos,p=Math.sin,_=d(s/2),v=d(l/2),g=d(f/2),x=p(s/2),E=p(l/2),b=p(f/2);switch(h){case"XYZ":this._x=x*v*g+_*E*b,this._y=_*E*g-x*v*b,this._z=_*v*b+x*E*g,this._w=_*v*g-x*E*b;break;case"YXZ":this._x=x*v*g+_*E*b,this._y=_*E*g-x*v*b,this._z=_*v*b-x*E*g,this._w=_*v*g+x*E*b;break;case"ZXY":this._x=x*v*g-_*E*b,this._y=_*E*g+x*v*b,this._z=_*v*b+x*E*g,this._w=_*v*g-x*E*b;break;case"ZYX":this._x=x*v*g-_*E*b,this._y=_*E*g+x*v*b,this._z=_*v*b-x*E*g,this._w=_*v*g+x*E*b;break;case"YZX":this._x=x*v*g+_*E*b,this._y=_*E*g+x*v*b,this._z=_*v*b-x*E*g,this._w=_*v*g-x*E*b;break;case"XZY":this._x=x*v*g-_*E*b,this._y=_*E*g-x*v*b,this._z=_*v*b+x*E*g,this._w=_*v*g+x*E*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],f=i[8],h=i[1],d=i[5],p=i[9],_=i[2],v=i[6],g=i[10],x=s+d+g;if(x>0){const E=.5/Math.sqrt(x+1);this._w=.25/E,this._x=(v-p)*E,this._y=(f-_)*E,this._z=(h-l)*E}else if(s>d&&s>g){const E=2*Math.sqrt(1+s-d-g);this._w=(v-p)/E,this._x=.25*E,this._y=(l+h)/E,this._z=(f+_)/E}else if(d>g){const E=2*Math.sqrt(1+d-s-g);this._w=(f-_)/E,this._x=(l+h)/E,this._y=.25*E,this._z=(p+v)/E}else{const E=2*Math.sqrt(1+g-s-d);this._w=(h-l)/E,this._x=(f+_)/E,this._y=(p+v)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(be(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,f=e._z,h=e._w,d=i._x,p=i._y,_=i._z,v=i._w;return this._x=s*v+h*d+l*_-f*p,this._y=l*v+h*p+f*d-s*_,this._z=f*v+h*_+s*p-l*d,this._w=h*v-s*d-l*p-f*_,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,f=this._z,h=this._w;let d=h*e._w+s*e._x+l*e._y+f*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=s,this._y=l,this._z=f,this;const p=1-d*d;if(p<=Number.EPSILON){const E=1-i;return this._w=E*h+i*this._w,this._x=E*s+i*this._x,this._y=E*l+i*this._y,this._z=E*f+i*this._z,this.normalize(),this}const _=Math.sqrt(p),v=Math.atan2(_,d),g=Math.sin((1-i)*v)/_,x=Math.sin(i*v)/_;return this._w=h*g+this._w*x,this._x=s*g+this._x*x,this._y=l*g+this._y*x,this._z=f*g+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),f=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),f*Math.sin(i),f*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class nt{constructor(e=0,i=0,s=0){nt.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Ov.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Ov.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[3]*s+f[6]*l,this.y=f[1]*i+f[4]*s+f[7]*l,this.z=f[2]*i+f[5]*s+f[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,f=e.elements,h=1/(f[3]*i+f[7]*s+f[11]*l+f[15]);return this.x=(f[0]*i+f[4]*s+f[8]*l+f[12])*h,this.y=(f[1]*i+f[5]*s+f[9]*l+f[13])*h,this.z=(f[2]*i+f[6]*s+f[10]*l+f[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,f=e.x,h=e.y,d=e.z,p=e.w,_=2*(h*l-d*s),v=2*(d*i-f*l),g=2*(f*s-h*i);return this.x=i+p*_+h*g-d*v,this.y=s+p*v+d*_-f*g,this.z=l+p*g+f*v-h*_,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l,this.y=f[1]*i+f[5]*s+f[9]*l,this.z=f[2]*i+f[6]*s+f[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=be(this.x,e.x,i.x),this.y=be(this.y,e.y,i.y),this.z=be(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=be(this.x,e,i),this.y=be(this.y,e,i),this.z=be(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(be(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,f=e.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-f*d,this.y=f*h-s*p,this.z=s*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return vd.copy(this).projectOnVector(e),this.sub(vd)}reflect(e){return this.sub(vd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(be(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vd=new nt,Ov=new nr;class Al{constructor(e=new nt(1/0,1/0,1/0),i=new nt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Bi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Bi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Bi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const f=s.getAttribute("position");if(i===!0&&f!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=f.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Bi):Bi.fromBufferAttribute(f,h),Bi.applyMatrix4(e.matrixWorld),this.expandByPoint(Bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Kc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Kc.copy(s.boundingBox)),Kc.applyMatrix4(e.matrixWorld),this.union(Kc)}const l=e.children;for(let f=0,h=l.length;f<h;f++)this.expandByObject(l[f],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bi),Bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ml),Qc.subVectors(this.max,ml),Zr.subVectors(e.a,ml),Kr.subVectors(e.b,ml),Qr.subVectors(e.c,ml),ls.subVectors(Kr,Zr),cs.subVectors(Qr,Kr),js.subVectors(Zr,Qr);let i=[0,-ls.z,ls.y,0,-cs.z,cs.y,0,-js.z,js.y,ls.z,0,-ls.x,cs.z,0,-cs.x,js.z,0,-js.x,-ls.y,ls.x,0,-cs.y,cs.x,0,-js.y,js.x,0];return!xd(i,Zr,Kr,Qr,Qc)||(i=[1,0,0,0,1,0,0,0,1],!xd(i,Zr,Kr,Qr,Qc))?!1:(Jc.crossVectors(ls,cs),i=[Jc.x,Jc.y,Jc.z],xd(i,Zr,Kr,Qr,Qc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ea[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ea[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ea[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ea[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ea[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ea[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ea[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ea[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ea),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ea=[new nt,new nt,new nt,new nt,new nt,new nt,new nt,new nt],Bi=new nt,Kc=new Al,Zr=new nt,Kr=new nt,Qr=new nt,ls=new nt,cs=new nt,js=new nt,ml=new nt,Qc=new nt,Jc=new nt,ks=new nt;function xd(o,e,i,s,l){for(let f=0,h=o.length-3;f<=h;f+=3){ks.fromArray(o,f);const d=l.x*Math.abs(ks.x)+l.y*Math.abs(ks.y)+l.z*Math.abs(ks.z),p=e.dot(ks),_=i.dot(ks),v=s.dot(ks);if(Math.max(-Math.max(p,_,v),Math.min(p,_,v))>d)return!1}return!0}const Db=new Al,gl=new nt,yd=new nt;class Lu{constructor(e=new nt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):Db.setFromPoints(e).getCenter(s);let l=0;for(let f=0,h=e.length;f<h;f++)l=Math.max(l,s.distanceToSquared(e[f]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gl.subVectors(e,this.center);const i=gl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(gl,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gl.copy(e.center).add(yd)),this.expandByPoint(gl.copy(e.center).sub(yd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ba=new nt,Sd=new nt,$c=new nt,us=new nt,Md=new nt,tu=new nt,Ed=new nt;class Ou{constructor(e=new nt,i=new nt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ba)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ba.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ba.copy(this.origin).addScaledVector(this.direction,i),ba.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Sd.copy(e).add(i).multiplyScalar(.5),$c.copy(i).sub(e).normalize(),us.copy(this.origin).sub(Sd);const f=e.distanceTo(i)*.5,h=-this.direction.dot($c),d=us.dot(this.direction),p=-us.dot($c),_=us.lengthSq(),v=Math.abs(1-h*h);let g,x,E,b;if(v>0)if(g=h*p-d,x=h*d-p,b=f*v,g>=0)if(x>=-b)if(x<=b){const A=1/v;g*=A,x*=A,E=g*(g+h*x+2*d)+x*(h*g+x+2*p)+_}else x=f,g=Math.max(0,-(h*x+d)),E=-g*g+x*(x+2*p)+_;else x=-f,g=Math.max(0,-(h*x+d)),E=-g*g+x*(x+2*p)+_;else x<=-b?(g=Math.max(0,-(-h*f+d)),x=g>0?-f:Math.min(Math.max(-f,-p),f),E=-g*g+x*(x+2*p)+_):x<=b?(g=0,x=Math.min(Math.max(-f,-p),f),E=x*(x+2*p)+_):(g=Math.max(0,-(h*f+d)),x=g>0?f:Math.min(Math.max(-f,-p),f),E=-g*g+x*(x+2*p)+_);else x=h>0?-f:f,g=Math.max(0,-(h*x+d)),E=-g*g+x*(x+2*p)+_;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Sd).addScaledVector($c,x),E}intersectSphere(e,i){ba.subVectors(e.center,this.origin);const s=ba.dot(this.direction),l=ba.dot(ba)-s*s,f=e.radius*e.radius;if(l>f)return null;const h=Math.sqrt(f-l),d=s-h,p=s+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,f,h,d,p;const _=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,x=this.origin;return _>=0?(s=(e.min.x-x.x)*_,l=(e.max.x-x.x)*_):(s=(e.max.x-x.x)*_,l=(e.min.x-x.x)*_),v>=0?(f=(e.min.y-x.y)*v,h=(e.max.y-x.y)*v):(f=(e.max.y-x.y)*v,h=(e.min.y-x.y)*v),s>h||f>l||((f>s||isNaN(s))&&(s=f),(h<l||isNaN(l))&&(l=h),g>=0?(d=(e.min.z-x.z)*g,p=(e.max.z-x.z)*g):(d=(e.max.z-x.z)*g,p=(e.min.z-x.z)*g),s>p||d>l)||((d>s||s!==s)&&(s=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,ba)!==null}intersectTriangle(e,i,s,l,f){Md.subVectors(i,e),tu.subVectors(s,e),Ed.crossVectors(Md,tu);let h=this.direction.dot(Ed),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;us.subVectors(this.origin,e);const p=d*this.direction.dot(tu.crossVectors(us,tu));if(p<0)return null;const _=d*this.direction.dot(Md.cross(us));if(_<0||p+_>h)return null;const v=-d*us.dot(Ed);return v<0?null:this.at(v/h,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(e,i,s,l,f,h,d,p,_,v,g,x,E,b,A,M){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,f,h,d,p,_,v,g,x,E,b,A,M)}set(e,i,s,l,f,h,d,p,_,v,g,x,E,b,A,M){const S=this.elements;return S[0]=e,S[4]=i,S[8]=s,S[12]=l,S[1]=f,S[5]=h,S[9]=d,S[13]=p,S[2]=_,S[6]=v,S[10]=g,S[14]=x,S[3]=E,S[7]=b,S[11]=A,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/Jr.setFromMatrixColumn(e,0).length(),f=1/Jr.setFromMatrixColumn(e,1).length(),h=1/Jr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*f,i[5]=s[5]*f,i[6]=s[6]*f,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,f=e.z,h=Math.cos(s),d=Math.sin(s),p=Math.cos(l),_=Math.sin(l),v=Math.cos(f),g=Math.sin(f);if(e.order==="XYZ"){const x=h*v,E=h*g,b=d*v,A=d*g;i[0]=p*v,i[4]=-p*g,i[8]=_,i[1]=E+b*_,i[5]=x-A*_,i[9]=-d*p,i[2]=A-x*_,i[6]=b+E*_,i[10]=h*p}else if(e.order==="YXZ"){const x=p*v,E=p*g,b=_*v,A=_*g;i[0]=x+A*d,i[4]=b*d-E,i[8]=h*_,i[1]=h*g,i[5]=h*v,i[9]=-d,i[2]=E*d-b,i[6]=A+x*d,i[10]=h*p}else if(e.order==="ZXY"){const x=p*v,E=p*g,b=_*v,A=_*g;i[0]=x-A*d,i[4]=-h*g,i[8]=b+E*d,i[1]=E+b*d,i[5]=h*v,i[9]=A-x*d,i[2]=-h*_,i[6]=d,i[10]=h*p}else if(e.order==="ZYX"){const x=h*v,E=h*g,b=d*v,A=d*g;i[0]=p*v,i[4]=b*_-E,i[8]=x*_+A,i[1]=p*g,i[5]=A*_+x,i[9]=E*_-b,i[2]=-_,i[6]=d*p,i[10]=h*p}else if(e.order==="YZX"){const x=h*p,E=h*_,b=d*p,A=d*_;i[0]=p*v,i[4]=A-x*g,i[8]=b*g+E,i[1]=g,i[5]=h*v,i[9]=-d*v,i[2]=-_*v,i[6]=E*g+b,i[10]=x-A*g}else if(e.order==="XZY"){const x=h*p,E=h*_,b=d*p,A=d*_;i[0]=p*v,i[4]=-g,i[8]=_*v,i[1]=x*g+A,i[5]=h*v,i[9]=E*g-b,i[2]=b*g-E,i[6]=d*v,i[10]=A*g+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ub,e,Lb)}lookAt(e,i,s){const l=this.elements;return hi.subVectors(e,i),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),fs.crossVectors(s,hi),fs.lengthSq()===0&&(Math.abs(s.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),fs.crossVectors(s,hi)),fs.normalize(),eu.crossVectors(hi,fs),l[0]=fs.x,l[4]=eu.x,l[8]=hi.x,l[1]=fs.y,l[5]=eu.y,l[9]=hi.y,l[2]=fs.z,l[6]=eu.z,l[10]=hi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,f=this.elements,h=s[0],d=s[4],p=s[8],_=s[12],v=s[1],g=s[5],x=s[9],E=s[13],b=s[2],A=s[6],M=s[10],S=s[14],O=s[3],z=s[7],D=s[11],j=s[15],F=l[0],P=l[4],B=l[8],U=l[12],C=l[1],H=l[5],at=l[9],$=l[13],dt=l[2],ht=l[6],q=l[10],ot=l[14],X=l[3],xt=l[7],yt=l[11],Rt=l[15];return f[0]=h*F+d*C+p*dt+_*X,f[4]=h*P+d*H+p*ht+_*xt,f[8]=h*B+d*at+p*q+_*yt,f[12]=h*U+d*$+p*ot+_*Rt,f[1]=v*F+g*C+x*dt+E*X,f[5]=v*P+g*H+x*ht+E*xt,f[9]=v*B+g*at+x*q+E*yt,f[13]=v*U+g*$+x*ot+E*Rt,f[2]=b*F+A*C+M*dt+S*X,f[6]=b*P+A*H+M*ht+S*xt,f[10]=b*B+A*at+M*q+S*yt,f[14]=b*U+A*$+M*ot+S*Rt,f[3]=O*F+z*C+D*dt+j*X,f[7]=O*P+z*H+D*ht+j*xt,f[11]=O*B+z*at+D*q+j*yt,f[15]=O*U+z*$+D*ot+j*Rt,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],f=e[12],h=e[1],d=e[5],p=e[9],_=e[13],v=e[2],g=e[6],x=e[10],E=e[14],b=e[3],A=e[7],M=e[11],S=e[15];return b*(+f*p*g-l*_*g-f*d*x+s*_*x+l*d*E-s*p*E)+A*(+i*p*E-i*_*x+f*h*x-l*h*E+l*_*v-f*p*v)+M*(+i*_*g-i*d*E-f*h*g+s*h*E+f*d*v-s*_*v)+S*(-l*d*v-i*p*g+i*d*x+l*h*g-s*h*x+s*p*v)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],f=e[3],h=e[4],d=e[5],p=e[6],_=e[7],v=e[8],g=e[9],x=e[10],E=e[11],b=e[12],A=e[13],M=e[14],S=e[15],O=g*M*_-A*x*_+A*p*E-d*M*E-g*p*S+d*x*S,z=b*x*_-v*M*_-b*p*E+h*M*E+v*p*S-h*x*S,D=v*A*_-b*g*_+b*d*E-h*A*E-v*d*S+h*g*S,j=b*g*p-v*A*p-b*d*x+h*A*x+v*d*M-h*g*M,F=i*O+s*z+l*D+f*j;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/F;return e[0]=O*P,e[1]=(A*x*f-g*M*f-A*l*E+s*M*E+g*l*S-s*x*S)*P,e[2]=(d*M*f-A*p*f+A*l*_-s*M*_-d*l*S+s*p*S)*P,e[3]=(g*p*f-d*x*f-g*l*_+s*x*_+d*l*E-s*p*E)*P,e[4]=z*P,e[5]=(v*M*f-b*x*f+b*l*E-i*M*E-v*l*S+i*x*S)*P,e[6]=(b*p*f-h*M*f-b*l*_+i*M*_+h*l*S-i*p*S)*P,e[7]=(h*x*f-v*p*f+v*l*_-i*x*_-h*l*E+i*p*E)*P,e[8]=D*P,e[9]=(b*g*f-v*A*f-b*s*E+i*A*E+v*s*S-i*g*S)*P,e[10]=(h*A*f-b*d*f+b*s*_-i*A*_-h*s*S+i*d*S)*P,e[11]=(v*d*f-h*g*f-v*s*_+i*g*_+h*s*E-i*d*E)*P,e[12]=j*P,e[13]=(v*A*l-b*g*l+b*s*x-i*A*x-v*s*M+i*g*M)*P,e[14]=(b*d*l-h*A*l-b*s*p+i*A*p+h*s*M-i*d*M)*P,e[15]=(h*g*l-v*d*l+v*s*p-i*g*p-h*s*x+i*d*x)*P,this}scale(e){const i=this.elements,s=e.x,l=e.y,f=e.z;return i[0]*=s,i[4]*=l,i[8]*=f,i[1]*=s,i[5]*=l,i[9]*=f,i[2]*=s,i[6]*=l,i[10]*=f,i[3]*=s,i[7]*=l,i[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),f=1-s,h=e.x,d=e.y,p=e.z,_=f*h,v=f*d;return this.set(_*h+s,_*d-l*p,_*p+l*d,0,_*d+l*p,v*d+s,v*p-l*h,0,_*p-l*d,v*p+l*h,f*p*p+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,f,h){return this.set(1,s,f,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,f=i._x,h=i._y,d=i._z,p=i._w,_=f+f,v=h+h,g=d+d,x=f*_,E=f*v,b=f*g,A=h*v,M=h*g,S=d*g,O=p*_,z=p*v,D=p*g,j=s.x,F=s.y,P=s.z;return l[0]=(1-(A+S))*j,l[1]=(E+D)*j,l[2]=(b-z)*j,l[3]=0,l[4]=(E-D)*F,l[5]=(1-(x+S))*F,l[6]=(M+O)*F,l[7]=0,l[8]=(b+z)*P,l[9]=(M-O)*P,l[10]=(1-(x+A))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let f=Jr.set(l[0],l[1],l[2]).length();const h=Jr.set(l[4],l[5],l[6]).length(),d=Jr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(f=-f),e.x=l[12],e.y=l[13],e.z=l[14],Hi.copy(this);const _=1/f,v=1/h,g=1/d;return Hi.elements[0]*=_,Hi.elements[1]*=_,Hi.elements[2]*=_,Hi.elements[4]*=v,Hi.elements[5]*=v,Hi.elements[6]*=v,Hi.elements[8]*=g,Hi.elements[9]*=g,Hi.elements[10]*=g,i.setFromRotationMatrix(Hi),s.x=f,s.y=h,s.z=d,this}makePerspective(e,i,s,l,f,h,d=Da){const p=this.elements,_=2*f/(i-e),v=2*f/(s-l),g=(i+e)/(i-e),x=(s+l)/(s-l);let E,b;if(d===Da)E=-(h+f)/(h-f),b=-2*h*f/(h-f);else if(d===Cu)E=-h/(h-f),b=-h*f/(h-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=v,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,f,h,d=Da){const p=this.elements,_=1/(i-e),v=1/(s-l),g=1/(h-f),x=(i+e)*_,E=(s+l)*v;let b,A;if(d===Da)b=(h+f)*g,A=-2*g;else if(d===Cu)b=f*g,A=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*_,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*v,p[9]=0,p[13]=-E,p[2]=0,p[6]=0,p[10]=A,p[14]=-b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const Jr=new nt,Hi=new tn,Ub=new nt(0,0,0),Lb=new nt(1,1,1),fs=new nt,eu=new nt,hi=new nt,zv=new tn,Pv=new nr;class sa{constructor(e=0,i=0,s=0,l=sa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,f=l[0],h=l[4],d=l[8],p=l[1],_=l[5],v=l[9],g=l[2],x=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(be(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,E),this._z=Math.atan2(-h,f)):(this._x=Math.atan2(x,_),this._z=0);break;case"YXZ":this._x=Math.asin(-be(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,E),this._z=Math.atan2(p,_)):(this._y=Math.atan2(-g,f),this._z=0);break;case"ZXY":this._x=Math.asin(be(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,E),this._z=Math.atan2(-h,_)):(this._y=0,this._z=Math.atan2(p,f));break;case"ZYX":this._y=Math.asin(-be(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,E),this._z=Math.atan2(p,f)):(this._x=0,this._z=Math.atan2(-h,_));break;case"YZX":this._z=Math.asin(be(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,_),this._y=Math.atan2(-g,f)):(this._x=0,this._y=Math.atan2(d,E));break;case"XZY":this._z=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,_),this._y=Math.atan2(d,f)):(this._x=Math.atan2(-v,E),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return zv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zv,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Pv.setFromEuler(this),this.setFromQuaternion(Pv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sa.DEFAULT_ORDER="XYZ";class Zp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ob=0;const Iv=new nt,$r=new nr,Ta=new tn,nu=new nt,_l=new nt,zb=new nt,Pb=new nr,Fv=new nt(1,0,0),Bv=new nt(0,1,0),Hv=new nt(0,0,1),Gv={type:"added"},Ib={type:"removed"},to={type:"childadded",child:null},bd={type:"childremoved",child:null};class Cn extends ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ob++}),this.uuid=Tl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Cn.DEFAULT_UP.clone();const e=new nt,i=new sa,s=new nr,l=new nt(1,1,1);function f(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(f),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new tn},normalMatrix:{value:new pe}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=Cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return $r.setFromAxisAngle(e,i),this.quaternion.multiply($r),this}rotateOnWorldAxis(e,i){return $r.setFromAxisAngle(e,i),this.quaternion.premultiply($r),this}rotateX(e){return this.rotateOnAxis(Fv,e)}rotateY(e){return this.rotateOnAxis(Bv,e)}rotateZ(e){return this.rotateOnAxis(Hv,e)}translateOnAxis(e,i){return Iv.copy(e).applyQuaternion(this.quaternion),this.position.add(Iv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Fv,e)}translateY(e){return this.translateOnAxis(Bv,e)}translateZ(e){return this.translateOnAxis(Hv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ta.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?nu.copy(e):nu.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),_l.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ta.lookAt(_l,nu,this.up):Ta.lookAt(nu,_l,this.up),this.quaternion.setFromRotationMatrix(Ta),l&&(Ta.extractRotation(l.matrixWorld),$r.setFromRotationMatrix(Ta),this.quaternion.premultiply($r.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gv),to.child=e,this.dispatchEvent(to),to.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Ib),bd.child=e,this.dispatchEvent(bd),bd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ta.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ta.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ta),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gv),to.child=e,this.dispatchEvent(to),to.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let f=0,h=l.length;f<h;f++)l[f].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_l,e,zb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_l,Pb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let f=0,h=l.length;f<h;f++)l[f].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function f(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=f(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let _=0,v=p.length;_<v;_++){const g=p[_];f(e.shapes,g)}else f(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,_=this.material.length;p<_;p++)d.push(f(e.materials,this.material[p]));l.material=d}else l.material=f(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(f(e.animations,p))}}if(i){const d=h(e.geometries),p=h(e.materials),_=h(e.textures),v=h(e.images),g=h(e.shapes),x=h(e.skeletons),E=h(e.animations),b=h(e.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),_.length>0&&(s.textures=_),v.length>0&&(s.images=v),g.length>0&&(s.shapes=g),x.length>0&&(s.skeletons=x),E.length>0&&(s.animations=E),b.length>0&&(s.nodes=b)}return s.object=l,s;function h(d){const p=[];for(const _ in d){const v=d[_];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Cn.DEFAULT_UP=new nt(0,1,0);Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gi=new nt,Aa=new nt,Td=new nt,Ra=new nt,eo=new nt,no=new nt,Vv=new nt,Ad=new nt,Rd=new nt,Cd=new nt,wd=new rn,Nd=new rn,Dd=new rn;class Vi{constructor(e=new nt,i=new nt,s=new nt){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Gi.subVectors(e,i),l.cross(Gi);const f=l.lengthSq();return f>0?l.multiplyScalar(1/Math.sqrt(f)):l.set(0,0,0)}static getBarycoord(e,i,s,l,f){Gi.subVectors(l,i),Aa.subVectors(s,i),Td.subVectors(e,i);const h=Gi.dot(Gi),d=Gi.dot(Aa),p=Gi.dot(Td),_=Aa.dot(Aa),v=Aa.dot(Td),g=h*_-d*d;if(g===0)return f.set(0,0,0),null;const x=1/g,E=(_*p-d*v)*x,b=(h*v-d*p)*x;return f.set(1-E-b,b,E)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Ra)===null?!1:Ra.x>=0&&Ra.y>=0&&Ra.x+Ra.y<=1}static getInterpolation(e,i,s,l,f,h,d,p){return this.getBarycoord(e,i,s,l,Ra)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(f,Ra.x),p.addScaledVector(h,Ra.y),p.addScaledVector(d,Ra.z),p)}static getInterpolatedAttribute(e,i,s,l,f,h){return wd.setScalar(0),Nd.setScalar(0),Dd.setScalar(0),wd.fromBufferAttribute(e,i),Nd.fromBufferAttribute(e,s),Dd.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(wd,f.x),h.addScaledVector(Nd,f.y),h.addScaledVector(Dd,f.z),h}static isFrontFacing(e,i,s,l){return Gi.subVectors(s,i),Aa.subVectors(e,i),Gi.cross(Aa).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gi.subVectors(this.c,this.b),Aa.subVectors(this.a,this.b),Gi.cross(Aa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Vi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,f){return Vi.getInterpolation(e,this.a,this.b,this.c,i,s,l,f)}containsPoint(e){return Vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,f=this.c;let h,d;eo.subVectors(l,s),no.subVectors(f,s),Ad.subVectors(e,s);const p=eo.dot(Ad),_=no.dot(Ad);if(p<=0&&_<=0)return i.copy(s);Rd.subVectors(e,l);const v=eo.dot(Rd),g=no.dot(Rd);if(v>=0&&g<=v)return i.copy(l);const x=p*g-v*_;if(x<=0&&p>=0&&v<=0)return h=p/(p-v),i.copy(s).addScaledVector(eo,h);Cd.subVectors(e,f);const E=eo.dot(Cd),b=no.dot(Cd);if(b>=0&&E<=b)return i.copy(f);const A=E*_-p*b;if(A<=0&&_>=0&&b<=0)return d=_/(_-b),i.copy(s).addScaledVector(no,d);const M=v*b-E*g;if(M<=0&&g-v>=0&&E-b>=0)return Vv.subVectors(f,l),d=(g-v)/(g-v+(E-b)),i.copy(l).addScaledVector(Vv,d);const S=1/(M+A+x);return h=A*S,d=x*S,i.copy(s).addScaledVector(eo,h).addScaledVector(no,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hs={h:0,s:0,l:0},iu={h:0,s:0,l:0};function Ud(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Te{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ze.toWorkingColorSpace(this,i),this}setRGB(e,i,s,l=ze.workingColorSpace){return this.r=e,this.g=i,this.b=s,ze.toWorkingColorSpace(this,l),this}setHSL(e,i,s,l=ze.workingColorSpace){if(e=xb(e,1),i=be(i,0,1),s=be(s,0,1),i===0)this.r=this.g=this.b=s;else{const f=s<=.5?s*(1+i):s+i-s*i,h=2*s-f;this.r=Ud(h,f,e+1/3),this.g=Ud(h,f,e),this.b=Ud(h,f,e-1/3)}return ze.toWorkingColorSpace(this,l),this}setStyle(e,i=Ai){function s(f){f!==void 0&&parseFloat(f)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=l[1],h=f.length;if(h===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(f,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Ai){const s=Xy[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ua(e.r),this.g=Ua(e.g),this.b=Ua(e.b),this}copyLinearToSRGB(e){return this.r=ho(e.r),this.g=ho(e.g),this.b=ho(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ai){return ze.fromWorkingColorSpace(Hn.copy(this),e),Math.round(be(Hn.r*255,0,255))*65536+Math.round(be(Hn.g*255,0,255))*256+Math.round(be(Hn.b*255,0,255))}getHexString(e=Ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=ze.workingColorSpace){ze.fromWorkingColorSpace(Hn.copy(this),i);const s=Hn.r,l=Hn.g,f=Hn.b,h=Math.max(s,l,f),d=Math.min(s,l,f);let p,_;const v=(d+h)/2;if(d===h)p=0,_=0;else{const g=h-d;switch(_=v<=.5?g/(h+d):g/(2-h-d),h){case s:p=(l-f)/g+(l<f?6:0);break;case l:p=(f-s)/g+2;break;case f:p=(s-l)/g+4;break}p/=6}return e.h=p,e.s=_,e.l=v,e}getRGB(e,i=ze.workingColorSpace){return ze.fromWorkingColorSpace(Hn.copy(this),i),e.r=Hn.r,e.g=Hn.g,e.b=Hn.b,e}getStyle(e=Ai){ze.fromWorkingColorSpace(Hn.copy(this),e);const i=Hn.r,s=Hn.g,l=Hn.b;return e!==Ai?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(hs),this.setHSL(hs.h+e,hs.s+i,hs.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(hs),e.getHSL(iu);const s=md(hs.h,iu.h,i),l=md(hs.s,iu.s,i),f=md(hs.l,iu.l,i);return this.setHSL(s,l,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,f=e.elements;return this.r=f[0]*i+f[3]*s+f[6]*l,this.g=f[1]*i+f[4]*s+f[7]*l,this.b=f[2]*i+f[5]*s+f[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Hn=new Te;Te.NAMES=Xy;let Fb=0;class So extends ir{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fb++}),this.uuid=Tl(),this.name="",this.type="Material",this.blending=uo,this.side=vs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wd,this.blendDst=Zd,this.blendEquation=Qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yr,this.stencilZFail=Yr,this.stencilZPass=Yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==uo&&(s.blending=this.blending),this.side!==vs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Wd&&(s.blendSrc=this.blendSrc),this.blendDst!==Zd&&(s.blendDst=this.blendDst),this.blendEquation!==Qs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==po&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cv&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Yr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Yr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(f){const h=[];for(const d in f){const p=f[d];delete p.metadata,h.push(p)}return h}if(i){const f=l(e.textures),h=l(e.images);f.length>0&&(s.textures=f),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let f=0;f!==l;++f)s[f]=i[f].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Kp extends So{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sa,this.combine=wy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gn=new nt,au=new ue;let Bb=0;class aa{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bb++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=wv,this.updateRanges=[],this.gpuType=Na,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,f=this.itemSize;l<f;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)au.fromBufferAttribute(this,i),au.applyMatrix3(e),this.setXY(i,au.x,au.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix3(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix4(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyNormalMatrix(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.transformDirection(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=pl(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Jn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=pl(i,this.array)),i}setX(e,i){return this.normalized&&(i=Jn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=pl(i,this.array)),i}setY(e,i){return this.normalized&&(i=Jn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=pl(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Jn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=pl(i,this.array)),i}setW(e,i){return this.normalized&&(i=Jn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Jn(i,this.array),s=Jn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Jn(i,this.array),s=Jn(s,this.array),l=Jn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,f){return e*=this.itemSize,this.normalized&&(i=Jn(i,this.array),s=Jn(s,this.array),l=Jn(l,this.array),f=Jn(f,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wv&&(e.usage=this.usage),e}}class qy extends aa{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class Yy extends aa{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class _n extends aa{constructor(e,i,s){super(new Float32Array(e),i,s)}}let Hb=0;const Ti=new tn,Ld=new Cn,io=new nt,di=new Al,vl=new Al,Rn=new nt;class Ci extends ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hb++}),this.uuid=Tl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jy(e)?Yy:qy)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const f=new pe().getNormalMatrix(e);s.applyNormalMatrix(f),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ti.makeRotationFromQuaternion(e),this.applyMatrix4(Ti),this}rotateX(e){return Ti.makeRotationX(e),this.applyMatrix4(Ti),this}rotateY(e){return Ti.makeRotationY(e),this.applyMatrix4(Ti),this}rotateZ(e){return Ti.makeRotationZ(e),this.applyMatrix4(Ti),this}translate(e,i,s){return Ti.makeTranslation(e,i,s),this.applyMatrix4(Ti),this}scale(e,i,s){return Ti.makeScale(e,i,s),this.applyMatrix4(Ti),this}lookAt(e){return Ld.lookAt(e),Ld.updateMatrix(),this.applyMatrix4(Ld.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(io).negate(),this.translate(io.x,io.y,io.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,f=e.length;l<f;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new _n(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const f=e[l];i.setXYZ(l,f.x,f.y,f.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Al);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new nt(-1/0,-1/0,-1/0),new nt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const f=i[s];di.setFromBufferAttribute(f),this.morphTargetsRelative?(Rn.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint(Rn),Rn.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint(Rn)):(this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lu);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new nt,1/0);return}if(e){const s=this.boundingSphere.center;if(di.setFromBufferAttribute(e),i)for(let f=0,h=i.length;f<h;f++){const d=i[f];vl.setFromBufferAttribute(d),this.morphTargetsRelative?(Rn.addVectors(di.min,vl.min),di.expandByPoint(Rn),Rn.addVectors(di.max,vl.max),di.expandByPoint(Rn)):(di.expandByPoint(vl.min),di.expandByPoint(vl.max))}di.getCenter(s);let l=0;for(let f=0,h=e.count;f<h;f++)Rn.fromBufferAttribute(e,f),l=Math.max(l,s.distanceToSquared(Rn));if(i)for(let f=0,h=i.length;f<h;f++){const d=i[f],p=this.morphTargetsRelative;for(let _=0,v=d.count;_<v;_++)Rn.fromBufferAttribute(d,_),p&&(io.fromBufferAttribute(e,_),Rn.add(io)),l=Math.max(l,s.distanceToSquared(Rn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,f=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new aa(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],p=[];for(let B=0;B<s.count;B++)d[B]=new nt,p[B]=new nt;const _=new nt,v=new nt,g=new nt,x=new ue,E=new ue,b=new ue,A=new nt,M=new nt;function S(B,U,C){_.fromBufferAttribute(s,B),v.fromBufferAttribute(s,U),g.fromBufferAttribute(s,C),x.fromBufferAttribute(f,B),E.fromBufferAttribute(f,U),b.fromBufferAttribute(f,C),v.sub(_),g.sub(_),E.sub(x),b.sub(x);const H=1/(E.x*b.y-b.x*E.y);isFinite(H)&&(A.copy(v).multiplyScalar(b.y).addScaledVector(g,-E.y).multiplyScalar(H),M.copy(g).multiplyScalar(E.x).addScaledVector(v,-b.x).multiplyScalar(H),d[B].add(A),d[U].add(A),d[C].add(A),p[B].add(M),p[U].add(M),p[C].add(M))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let B=0,U=O.length;B<U;++B){const C=O[B],H=C.start,at=C.count;for(let $=H,dt=H+at;$<dt;$+=3)S(e.getX($+0),e.getX($+1),e.getX($+2))}const z=new nt,D=new nt,j=new nt,F=new nt;function P(B){j.fromBufferAttribute(l,B),F.copy(j);const U=d[B];z.copy(U),z.sub(j.multiplyScalar(j.dot(U))).normalize(),D.crossVectors(F,U);const H=D.dot(p[B])<0?-1:1;h.setXYZW(B,z.x,z.y,z.z,H)}for(let B=0,U=O.length;B<U;++B){const C=O[B],H=C.start,at=C.count;for(let $=H,dt=H+at;$<dt;$+=3)P(e.getX($+0)),P(e.getX($+1)),P(e.getX($+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new aa(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,E=s.count;x<E;x++)s.setXYZ(x,0,0,0);const l=new nt,f=new nt,h=new nt,d=new nt,p=new nt,_=new nt,v=new nt,g=new nt;if(e)for(let x=0,E=e.count;x<E;x+=3){const b=e.getX(x+0),A=e.getX(x+1),M=e.getX(x+2);l.fromBufferAttribute(i,b),f.fromBufferAttribute(i,A),h.fromBufferAttribute(i,M),v.subVectors(h,f),g.subVectors(l,f),v.cross(g),d.fromBufferAttribute(s,b),p.fromBufferAttribute(s,A),_.fromBufferAttribute(s,M),d.add(v),p.add(v),_.add(v),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(A,p.x,p.y,p.z),s.setXYZ(M,_.x,_.y,_.z)}else for(let x=0,E=i.count;x<E;x+=3)l.fromBufferAttribute(i,x+0),f.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),v.subVectors(h,f),g.subVectors(l,f),v.cross(g),s.setXYZ(x+0,v.x,v.y,v.z),s.setXYZ(x+1,v.x,v.y,v.z),s.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Rn.fromBufferAttribute(e,i),Rn.normalize(),e.setXYZ(i,Rn.x,Rn.y,Rn.z)}toNonIndexed(){function e(d,p){const _=d.array,v=d.itemSize,g=d.normalized,x=new _.constructor(p.length*v);let E=0,b=0;for(let A=0,M=p.length;A<M;A++){d.isInterleavedBufferAttribute?E=p[A]*d.data.stride+d.offset:E=p[A]*v;for(let S=0;S<v;S++)x[b++]=_[E++]}return new aa(x,v,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ci,s=this.index.array,l=this.attributes;for(const d in l){const p=l[d],_=e(p,s);i.setAttribute(d,_)}const f=this.morphAttributes;for(const d in f){const p=[],_=f[d];for(let v=0,g=_.length;v<g;v++){const x=_[v],E=e(x,s);p.push(E)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const _=h[d];i.addGroup(_.start,_.count,_.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const _ in p)p[_]!==void 0&&(e[_]=p[_]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const _=s[p];e.data.attributes[p]=_.toJSON(e.data)}const l={};let f=!1;for(const p in this.morphAttributes){const _=this.morphAttributes[p],v=[];for(let g=0,x=_.length;g<x;g++){const E=_[g];v.push(E.toJSON(e.data))}v.length>0&&(l[p]=v,f=!0)}f&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(i));const l=e.attributes;for(const _ in l){const v=l[_];this.setAttribute(_,v.clone(i))}const f=e.morphAttributes;for(const _ in f){const v=[],g=f[_];for(let x=0,E=g.length;x<E;x++)v.push(g[x].clone(i));this.morphAttributes[_]=v}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let _=0,v=h.length;_<v;_++){const g=h[_];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jv=new tn,Xs=new Ou,su=new Lu,kv=new nt,ru=new nt,ou=new nt,lu=new nt,Od=new nt,cu=new nt,Xv=new nt,uu=new nt;class pi extends Cn{constructor(e=new Ci,i=new Kp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,h=l.length;f<h;f++){const d=l[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=f}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,f=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(f&&d){cu.set(0,0,0);for(let p=0,_=f.length;p<_;p++){const v=d[p],g=f[p];v!==0&&(Od.fromBufferAttribute(g,e),h?cu.addScaledVector(Od,v):cu.addScaledVector(Od.sub(i),v))}i.add(cu)}return i}raycast(e,i){const s=this.geometry,l=this.material,f=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),su.copy(s.boundingSphere),su.applyMatrix4(f),Xs.copy(e.ray).recast(e.near),!(su.containsPoint(Xs.origin)===!1&&(Xs.intersectSphere(su,kv)===null||Xs.origin.distanceToSquared(kv)>(e.far-e.near)**2))&&(jv.copy(f).invert(),Xs.copy(e.ray).applyMatrix4(jv),!(s.boundingBox!==null&&Xs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Xs)))}_computeIntersections(e,i,s){let l;const f=this.geometry,h=this.material,d=f.index,p=f.attributes.position,_=f.attributes.uv,v=f.attributes.uv1,g=f.attributes.normal,x=f.groups,E=f.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,A=x.length;b<A;b++){const M=x[b],S=h[M.materialIndex],O=Math.max(M.start,E.start),z=Math.min(d.count,Math.min(M.start+M.count,E.start+E.count));for(let D=O,j=z;D<j;D+=3){const F=d.getX(D),P=d.getX(D+1),B=d.getX(D+2);l=fu(this,S,e,s,_,v,g,F,P,B),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,E.start),A=Math.min(d.count,E.start+E.count);for(let M=b,S=A;M<S;M+=3){const O=d.getX(M),z=d.getX(M+1),D=d.getX(M+2);l=fu(this,h,e,s,_,v,g,O,z,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let b=0,A=x.length;b<A;b++){const M=x[b],S=h[M.materialIndex],O=Math.max(M.start,E.start),z=Math.min(p.count,Math.min(M.start+M.count,E.start+E.count));for(let D=O,j=z;D<j;D+=3){const F=D,P=D+1,B=D+2;l=fu(this,S,e,s,_,v,g,F,P,B),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,E.start),A=Math.min(p.count,E.start+E.count);for(let M=b,S=A;M<S;M+=3){const O=M,z=M+1,D=M+2;l=fu(this,h,e,s,_,v,g,O,z,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function Gb(o,e,i,s,l,f,h,d){let p;if(e.side===ei?p=s.intersectTriangle(h,f,l,!0,d):p=s.intersectTriangle(l,f,h,e.side===vs,d),p===null)return null;uu.copy(d),uu.applyMatrix4(o.matrixWorld);const _=i.ray.origin.distanceTo(uu);return _<i.near||_>i.far?null:{distance:_,point:uu.clone(),object:o}}function fu(o,e,i,s,l,f,h,d,p,_){o.getVertexPosition(d,ru),o.getVertexPosition(p,ou),o.getVertexPosition(_,lu);const v=Gb(o,e,i,s,ru,ou,lu,Xv);if(v){const g=new nt;Vi.getBarycoord(Xv,ru,ou,lu,g),l&&(v.uv=Vi.getInterpolatedAttribute(l,d,p,_,g,new ue)),f&&(v.uv1=Vi.getInterpolatedAttribute(f,d,p,_,g,new ue)),h&&(v.normal=Vi.getInterpolatedAttribute(h,d,p,_,g,new nt),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const x={a:d,b:p,c:_,normal:new nt,materialIndex:0};Vi.getNormal(ru,ou,lu,x.normal),v.face=x,v.barycoord=g}return v}class Rl extends Ci{constructor(e=1,i=1,s=1,l=1,f=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:f,depthSegments:h};const d=this;l=Math.floor(l),f=Math.floor(f),h=Math.floor(h);const p=[],_=[],v=[],g=[];let x=0,E=0;b("z","y","x",-1,-1,s,i,e,h,f,0),b("z","y","x",1,-1,s,i,-e,h,f,1),b("x","z","y",1,1,e,s,i,l,h,2),b("x","z","y",1,-1,e,s,-i,l,h,3),b("x","y","z",1,-1,e,i,s,l,f,4),b("x","y","z",-1,-1,e,i,-s,l,f,5),this.setIndex(p),this.setAttribute("position",new _n(_,3)),this.setAttribute("normal",new _n(v,3)),this.setAttribute("uv",new _n(g,2));function b(A,M,S,O,z,D,j,F,P,B,U){const C=D/P,H=j/B,at=D/2,$=j/2,dt=F/2,ht=P+1,q=B+1;let ot=0,X=0;const xt=new nt;for(let yt=0;yt<q;yt++){const Rt=yt*H-$;for(let zt=0;zt<ht;zt++){const Wt=zt*C-at;xt[A]=Wt*O,xt[M]=Rt*z,xt[S]=dt,_.push(xt.x,xt.y,xt.z),xt[A]=0,xt[M]=0,xt[S]=F>0?1:-1,v.push(xt.x,xt.y,xt.z),g.push(zt/P),g.push(1-yt/B),ot+=1}}for(let yt=0;yt<B;yt++)for(let Rt=0;Rt<P;Rt++){const zt=x+Rt+ht*yt,Wt=x+Rt+ht*(yt+1),N=x+(Rt+1)+ht*(yt+1),W=x+(Rt+1)+ht*yt;p.push(zt,Wt,W),p.push(Wt,N,W),X+=6}d.addGroup(E,X,U),E+=X,x+=ot}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function yo(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function qn(o){const e={};for(let i=0;i<o.length;i++){const s=yo(o[i]);for(const l in s)e[l]=s[l]}return e}function Vb(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Wy(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ze.workingColorSpace}const jb={clone:yo,merge:qn};var kb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xs extends So{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kb,this.fragmentShader=Xb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yo(e.uniforms),this.uniformsGroups=Vb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Zy extends Cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=Da}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ds=new nt,qv=new ue,Yv=new ue;class Ri extends Zy{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Lp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(bu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lp*2*Math.atan(Math.tan(bu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ds.x,ds.y).multiplyScalar(-e/ds.z),ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ds.x,ds.y).multiplyScalar(-e/ds.z)}getViewSize(e,i){return this.getViewBounds(e,qv,Yv),i.subVectors(Yv,qv)}setViewOffset(e,i,s,l,f,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(bu*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,f=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,_=h.fullHeight;f+=h.offsetX*l/p,i-=h.offsetY*s/_,l*=h.width/p,s*=h.height/_}const d=this.filmOffset;d!==0&&(f+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+l,i,i-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ao=-90,so=1;class qb extends Cn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ri(ao,so,e,i);l.layers=this.layers,this.add(l);const f=new Ri(ao,so,e,i);f.layers=this.layers,this.add(f);const h=new Ri(ao,so,e,i);h.layers=this.layers,this.add(h);const d=new Ri(ao,so,e,i);d.layers=this.layers,this.add(d);const p=new Ri(ao,so,e,i);p.layers=this.layers,this.add(p);const _=new Ri(ao,so,e,i);_.layers=this.layers,this.add(_)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,f,h,d,p]=i;for(const _ of i)this.remove(_);if(e===Da)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Cu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const _ of i)this.add(_),_.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[f,h,d,p,_,v]=this.children,g=e.getRenderTarget(),x=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,f),e.setRenderTarget(s,1,l),e.render(i,h),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,p),e.setRenderTarget(s,4,l),e.render(i,_),s.texture.generateMipmaps=A,e.setRenderTarget(s,5,l),e.render(i,v),e.setRenderTarget(g,x,E),e.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class Ky extends Gn{constructor(e,i,s,l,f,h,d,p,_,v){e=e!==void 0?e:[],i=i!==void 0?i:mo,super(e,i,s,l,f,h,d,p,_,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Yb extends er{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new Ky(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:ti}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Rl(5,5,5),f=new xs({name:"CubemapFromEquirect",uniforms:yo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ei,blending:gs});f.uniforms.tEquirect.value=i;const h=new pi(l,f),d=i.minFilter;return i.minFilter===$s&&(i.minFilter=ti),new qb(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i,s,l){const f=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(f)}}class yl extends Cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wb={type:"move"};class zd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new nt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new nt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new nt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new nt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,f=null,h=null;const d=this._targetRay,p=this._grip,_=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(_&&e.hand){h=!0;for(const A of e.hand.values()){const M=i.getJointPose(A,s),S=this._getHandJoint(_,A);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const v=_.joints["index-finger-tip"],g=_.joints["thumb-tip"],x=v.position.distanceTo(g.position),E=.02,b=.005;_.inputState.pinching&&x>E+b?(_.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!_.inputState.pinching&&x<=E-b&&(_.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(f=i.getPose(e.gripSpace,s),f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,f.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(f.linearVelocity)):p.hasLinearVelocity=!1,f.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(f.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&f!==null&&(l=f),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Wb)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=f!==null),_!==null&&(_.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new yl;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class Qp{constructor(e,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new Te(e),this.density=i}clone(){return new Qp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Zb extends Cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sa,this.environmentIntensity=1,this.environmentRotation=new sa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Pd=new nt,Kb=new nt,Qb=new pe;class ps{constructor(e=new nt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Pd.subVectors(s,i).cross(Kb.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Pd),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/l;return f<0||f>1?null:i.copy(e.start).addScaledVector(s,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||Qb.getNormalMatrix(e),l=this.coplanarPoint(Pd).applyMatrix4(e),f=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qs=new Lu,hu=new nt;class Jp{constructor(e=new ps,i=new ps,s=new ps,l=new ps,f=new ps,h=new ps){this.planes=[e,i,s,l,f,h]}set(e,i,s,l,f,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(f),d[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Da){const s=this.planes,l=e.elements,f=l[0],h=l[1],d=l[2],p=l[3],_=l[4],v=l[5],g=l[6],x=l[7],E=l[8],b=l[9],A=l[10],M=l[11],S=l[12],O=l[13],z=l[14],D=l[15];if(s[0].setComponents(p-f,x-_,M-E,D-S).normalize(),s[1].setComponents(p+f,x+_,M+E,D+S).normalize(),s[2].setComponents(p+h,x+v,M+b,D+O).normalize(),s[3].setComponents(p-h,x-v,M-b,D-O).normalize(),s[4].setComponents(p-d,x-g,M-A,D-z).normalize(),i===Da)s[5].setComponents(p+d,x+g,M+A,D+z).normalize();else if(i===Cu)s[5].setComponents(d,g,A,z).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),qs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qs)}intersectsSprite(e){return qs.center.set(0,0,0),qs.radius=.7071067811865476,qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(qs)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(hu.x=l.normal.x>0?e.max.x:e.min.x,hu.y=l.normal.y>0?e.max.y:e.min.y,hu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(hu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Qy extends So{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const wu=new nt,Nu=new nt,Wv=new tn,xl=new Ou,du=new Lu,Id=new nt,Zv=new nt;class Jb extends Cn{constructor(e=new Ci,i=new Qy){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,f=i.count;l<f;l++)wu.fromBufferAttribute(i,l-1),Nu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=wu.distanceTo(Nu);e.setAttribute("lineDistance",new _n(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,f=e.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),du.copy(s.boundingSphere),du.applyMatrix4(l),du.radius+=f,e.ray.intersectsSphere(du)===!1)return;Wv.copy(l).invert(),xl.copy(e.ray).applyMatrix4(Wv);const d=f/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,_=this.isLineSegments?2:1,v=s.index,x=s.attributes.position;if(v!==null){const E=Math.max(0,h.start),b=Math.min(v.count,h.start+h.count);for(let A=E,M=b-1;A<M;A+=_){const S=v.getX(A),O=v.getX(A+1),z=pu(this,e,xl,p,S,O,A);z&&i.push(z)}if(this.isLineLoop){const A=v.getX(b-1),M=v.getX(E),S=pu(this,e,xl,p,A,M,b-1);S&&i.push(S)}}else{const E=Math.max(0,h.start),b=Math.min(x.count,h.start+h.count);for(let A=E,M=b-1;A<M;A+=_){const S=pu(this,e,xl,p,A,A+1,A);S&&i.push(S)}if(this.isLineLoop){const A=pu(this,e,xl,p,b-1,E,b-1);A&&i.push(A)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,h=l.length;f<h;f++){const d=l[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=f}}}}}function pu(o,e,i,s,l,f,h){const d=o.geometry.attributes.position;if(wu.fromBufferAttribute(d,l),Nu.fromBufferAttribute(d,f),i.distanceSqToSegment(wu,Nu,Id,Zv)>s)return;Id.applyMatrix4(o.matrixWorld);const _=e.ray.origin.distanceTo(Id);if(!(_<e.near||_>e.far))return{distance:_,point:Zv.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}const Kv=new nt,Qv=new nt;class $b extends Jb{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,f=i.count;l<f;l+=2)Kv.fromBufferAttribute(i,l),Qv.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+Kv.distanceTo(Qv);e.setAttribute("lineDistance",new _n(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Jy extends Gn{constructor(e,i,s,l,f,h,d,p,_){super(e,i,s,l,f,h,d,p,_),this.isCanvasTexture=!0,this.needsUpdate=!0}}class $y extends Gn{constructor(e,i,s,l,f,h,d,p,_,v=fo){if(v!==fo&&v!==vo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&v===fo&&(s=tr),s===void 0&&v===vo&&(s=_o),super(null,l,f,h,d,p,v,s,_),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=d!==void 0?d:ki,this.minFilter=p!==void 0?p:ki,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class $p extends Ci{constructor(e=1,i=1,s=1,l=32,f=1,h=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:s,radialSegments:l,heightSegments:f,openEnded:h,thetaStart:d,thetaLength:p};const _=this;l=Math.floor(l),f=Math.floor(f);const v=[],g=[],x=[],E=[];let b=0;const A=[],M=s/2;let S=0;O(),h===!1&&(e>0&&z(!0),i>0&&z(!1)),this.setIndex(v),this.setAttribute("position",new _n(g,3)),this.setAttribute("normal",new _n(x,3)),this.setAttribute("uv",new _n(E,2));function O(){const D=new nt,j=new nt;let F=0;const P=(i-e)/s;for(let B=0;B<=f;B++){const U=[],C=B/f,H=C*(i-e)+e;for(let at=0;at<=l;at++){const $=at/l,dt=$*p+d,ht=Math.sin(dt),q=Math.cos(dt);j.x=H*ht,j.y=-C*s+M,j.z=H*q,g.push(j.x,j.y,j.z),D.set(ht,P,q).normalize(),x.push(D.x,D.y,D.z),E.push($,1-C),U.push(b++)}A.push(U)}for(let B=0;B<l;B++)for(let U=0;U<f;U++){const C=A[U][B],H=A[U+1][B],at=A[U+1][B+1],$=A[U][B+1];(e>0||U!==0)&&(v.push(C,H,$),F+=3),(i>0||U!==f-1)&&(v.push(H,at,$),F+=3)}_.addGroup(S,F,0),S+=F}function z(D){const j=b,F=new ue,P=new nt;let B=0;const U=D===!0?e:i,C=D===!0?1:-1;for(let at=1;at<=l;at++)g.push(0,M*C,0),x.push(0,C,0),E.push(.5,.5),b++;const H=b;for(let at=0;at<=l;at++){const dt=at/l*p+d,ht=Math.cos(dt),q=Math.sin(dt);P.x=U*q,P.y=M*C,P.z=U*ht,g.push(P.x,P.y,P.z),x.push(0,C,0),F.x=ht*.5+.5,F.y=q*.5*C+.5,E.push(F.x,F.y),b++}for(let at=0;at<l;at++){const $=j+at,dt=H+at;D===!0?v.push(dt,dt+1,$):v.push(dt+1,dt,$),B+=3}_.addGroup(S,B,D===!0?1:2),S+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $p(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Cl extends Ci{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const f=e/2,h=i/2,d=Math.floor(s),p=Math.floor(l),_=d+1,v=p+1,g=e/d,x=i/p,E=[],b=[],A=[],M=[];for(let S=0;S<v;S++){const O=S*x-h;for(let z=0;z<_;z++){const D=z*g-f;b.push(D,-O,0),A.push(0,0,1),M.push(z/d),M.push(1-S/p)}}for(let S=0;S<p;S++)for(let O=0;O<d;O++){const z=O+_*S,D=O+_*(S+1),j=O+1+_*(S+1),F=O+1+_*S;E.push(z,D,F),E.push(D,j,F)}this.setIndex(E),this.setAttribute("position",new _n(b,3)),this.setAttribute("normal",new _n(A,3)),this.setAttribute("uv",new _n(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cl(e.width,e.height,e.widthSegments,e.heightSegments)}}class tm extends Ci{constructor(e=.5,i=1,s=32,l=1,f=0,h=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:f,thetaLength:h},s=Math.max(3,s),l=Math.max(1,l);const d=[],p=[],_=[],v=[];let g=e;const x=(i-e)/l,E=new nt,b=new ue;for(let A=0;A<=l;A++){for(let M=0;M<=s;M++){const S=f+M/s*h;E.x=g*Math.cos(S),E.y=g*Math.sin(S),p.push(E.x,E.y,E.z),_.push(0,0,1),b.x=(E.x/i+1)/2,b.y=(E.y/i+1)/2,v.push(b.x,b.y)}g+=x}for(let A=0;A<l;A++){const M=A*(s+1);for(let S=0;S<s;S++){const O=S+M,z=O,D=O+s+1,j=O+s+2,F=O+1;d.push(z,D,F),d.push(D,j,F)}}this.setIndex(d),this.setAttribute("position",new _n(p,3)),this.setAttribute("normal",new _n(_,3)),this.setAttribute("uv",new _n(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tm(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class em extends Ci{constructor(e=1,i=32,s=16,l=0,f=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:f,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const p=Math.min(h+d,Math.PI);let _=0;const v=[],g=new nt,x=new nt,E=[],b=[],A=[],M=[];for(let S=0;S<=s;S++){const O=[],z=S/s;let D=0;S===0&&h===0?D=.5/i:S===s&&p===Math.PI&&(D=-.5/i);for(let j=0;j<=i;j++){const F=j/i;g.x=-e*Math.cos(l+F*f)*Math.sin(h+z*d),g.y=e*Math.cos(h+z*d),g.z=e*Math.sin(l+F*f)*Math.sin(h+z*d),b.push(g.x,g.y,g.z),x.copy(g).normalize(),A.push(x.x,x.y,x.z),M.push(F+D,1-z),O.push(_++)}v.push(O)}for(let S=0;S<s;S++)for(let O=0;O<i;O++){const z=v[S][O+1],D=v[S][O],j=v[S+1][O],F=v[S+1][O+1];(S!==0||h>0)&&E.push(z,D,F),(S!==s-1||p<Math.PI)&&E.push(D,j,F)}this.setIndex(E),this.setAttribute("position",new _n(b,3)),this.setAttribute("normal",new _n(A,3)),this.setAttribute("uv",new _n(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new em(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Fd extends So{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gy,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sa,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tT extends So{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class eT extends So{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Jv={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class nT{constructor(e,i,s){const l=this;let f=!1,h=0,d=0,p;const _=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=s,this.itemStart=function(v){d++,f===!1&&l.onStart!==void 0&&l.onStart(v,h,d),f=!0},this.itemEnd=function(v){h++,l.onProgress!==void 0&&l.onProgress(v,h,d),h===d&&(f=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(v){l.onError!==void 0&&l.onError(v)},this.resolveURL=function(v){return p?p(v):v},this.setURLModifier=function(v){return p=v,this},this.addHandler=function(v,g){return _.push(v,g),this},this.removeHandler=function(v){const g=_.indexOf(v);return g!==-1&&_.splice(g,2),this},this.getHandler=function(v){for(let g=0,x=_.length;g<x;g+=2){const E=_[g],b=_[g+1];if(E.global&&(E.lastIndex=0),E.test(v))return b}return null}}}const iT=new nT;class nm{constructor(e){this.manager=e!==void 0?e:iT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,i){const s=this;return new Promise(function(l,f){s.load(e,l,i,f)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}nm.DEFAULT_MATERIAL_NAME="__DEFAULT";class aT extends nm{constructor(e){super(e)}load(e,i,s,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const f=this,h=Jv.get(e);if(h!==void 0)return f.manager.itemStart(e),setTimeout(function(){i&&i(h),f.manager.itemEnd(e)},0),h;const d=El("img");function p(){v(),Jv.add(e,this),i&&i(this),f.manager.itemEnd(e)}function _(g){v(),l&&l(g),f.manager.itemError(e),f.manager.itemEnd(e)}function v(){d.removeEventListener("load",p,!1),d.removeEventListener("error",_,!1)}return d.addEventListener("load",p,!1),d.addEventListener("error",_,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),f.manager.itemStart(e),d.src=e,d}}class sT extends nm{constructor(e){super(e)}load(e,i,s,l){const f=new Gn,h=new aT(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(e,function(d){f.image=d,f.needsUpdate=!0,i!==void 0&&i(f)},s,l),f}}class im extends Cn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class rT extends im{constructor(e,i,s){super(e,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}}const Bd=new tn,$v=new nt,tx=new nt;class oT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jp,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;$v.setFromMatrixPosition(e.matrixWorld),i.position.copy($v),tx.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(tx),i.updateMatrixWorld(),Bd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bd),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Bd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class tS extends Zy{constructor(e=-1,i=1,s=1,l=-1,f=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=f,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,f,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let f=s-e,h=s+e,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const _=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=_*this.view.offsetX,h=f+_*this.view.width,d-=v*this.view.offsetY,p=d-v*this.view.height}this.projectionMatrix.makeOrthographic(f,h,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class lT extends oT{constructor(){super(new tS(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cT extends im{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.target=new Cn,this.shadow=new lT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class uT extends im{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class fT extends Ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}const ex=new tn;class hT{constructor(e,i,s=0,l=1/0){this.ray=new Ou(e,i),this.near=s,this.far=l,this.camera=null,this.layers=new Zp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return ex.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ex),this}intersectObject(e,i=!0,s=[]){return Op(e,this,s,i),s.sort(nx),s}intersectObjects(e,i=!0,s=[]){for(let l=0,f=e.length;l<f;l++)Op(e[l],this,s,i);return s.sort(nx),s}}function nx(o,e){return o.distance-e.distance}function Op(o,e,i,s){let l=!0;if(o.layers.test(e.layers)&&o.raycast(e,i)===!1&&(l=!1),l===!0&&s===!0){const f=o.children;for(let h=0,d=f.length;h<d;h++)Op(f[h],e,i,!0)}}class ix{constructor(e=1,i=0,s=0){this.radius=e,this.phi=i,this.theta=s}set(e,i,s){return this.radius=e,this.phi=i,this.theta=s,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=be(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,s){return this.radius=Math.sqrt(e*e+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,s),this.phi=Math.acos(be(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class dT extends $b{constructor(e=10,i=10,s=4473924,l=8947848){s=new Te(s),l=new Te(l);const f=i/2,h=e/i,d=e/2,p=[],_=[];for(let x=0,E=0,b=-d;x<=i;x++,b+=h){p.push(-d,0,b,d,0,b),p.push(b,0,-d,b,0,d);const A=x===f?s:l;A.toArray(_,E),E+=3,A.toArray(_,E),E+=3,A.toArray(_,E),E+=3,A.toArray(_,E),E+=3}const v=new Ci;v.setAttribute("position",new _n(p,3)),v.setAttribute("color",new _n(_,3));const g=new Qy({vertexColors:!0,toneMapped:!1});super(v,g),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class pT extends ir{constructor(e,i=null){super(),this.object=e,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function ax(o,e,i,s){const l=mT(s);switch(i){case Oy:return o*e;case Py:return o*e;case Iy:return o*e*2;case Fy:return o*e/l.components*l.byteLength;case Xp:return o*e/l.components*l.byteLength;case By:return o*e*2/l.components*l.byteLength;case qp:return o*e*2/l.components*l.byteLength;case zy:return o*e*3/l.components*l.byteLength;case ji:return o*e*4/l.components*l.byteLength;case Yp:return o*e*4/l.components*l.byteLength;case xu:case yu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Su:case Mu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case lp:case up:return Math.max(o,16)*Math.max(e,8)/4;case op:case cp:return Math.max(o,8)*Math.max(e,8)/2;case fp:case hp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case dp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case pp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case mp:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case gp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case _p:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case vp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case xp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case yp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Sp:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Mp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Ep:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case bp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Tp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Ap:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Rp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Eu:case Cp:case wp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Hy:case Np:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Dp:case Up:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function mT(o){switch(o){case La:case Dy:return{byteLength:1,components:1};case Ml:case Uy:case bl:return{byteLength:2,components:1};case jp:case kp:return{byteLength:2,components:4};case tr:case Vp:case Na:return{byteLength:4,components:1};case Ly:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function eS(){let o=null,e=!1,i=null,s=null;function l(f,h){i(f,h),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(f){i=f},setContext:function(f){o=f}}}function gT(o){const e=new WeakMap;function i(d,p){const _=d.array,v=d.usage,g=_.byteLength,x=o.createBuffer();o.bindBuffer(p,x),o.bufferData(p,_,v),d.onUploadCallback();let E;if(_ instanceof Float32Array)E=o.FLOAT;else if(_ instanceof Uint16Array)d.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(_ instanceof Int16Array)E=o.SHORT;else if(_ instanceof Uint32Array)E=o.UNSIGNED_INT;else if(_ instanceof Int32Array)E=o.INT;else if(_ instanceof Int8Array)E=o.BYTE;else if(_ instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(_ instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+_);return{buffer:x,type:E,bytesPerElement:_.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,p,_){const v=p.array,g=p.updateRanges;if(o.bindBuffer(_,d),g.length===0)o.bufferSubData(_,0,v);else{g.sort((E,b)=>E.start-b.start);let x=0;for(let E=1;E<g.length;E++){const b=g[x],A=g[E];A.start<=b.start+b.count+1?b.count=Math.max(b.count,A.start+A.count-b.start):(++x,g[x]=A)}g.length=x+1;for(let E=0,b=g.length;E<b;E++){const A=g[E];o.bufferSubData(_,A.start*v.BYTES_PER_ELEMENT,v,A.start,A.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function f(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(o.deleteBuffer(p.buffer),e.delete(d))}function h(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const _=e.get(d);if(_===void 0)e.set(d,i(d,p));else if(_.version<d.version){if(_.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(_.buffer,d,p),_.version=d.version}}return{get:l,remove:f,update:h}}var _T=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ST=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,MT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ET=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,TT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,AT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,RT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,CT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,NT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,DT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,UT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,LT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,OT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,PT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,IT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,FT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,BT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,HT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,GT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,VT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,XT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,YT="gl_FragColor = linearToOutputTexel( gl_FragColor );",WT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ZT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,KT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,QT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,JT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$T=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,aA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,sA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,oA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,cA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,uA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,mA=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_A=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xA=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yA=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SA=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MA=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,EA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,TA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,AA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,CA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,NA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,DA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,LA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,PA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,BA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,HA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,GA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,VA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,XA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,qA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,YA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,WA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ZA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,KA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,QA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,JA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,$A=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,t2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,e2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,n2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,i2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,a2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,s2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,r2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,o2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,l2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,c2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,u2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,f2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,h2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,d2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,p2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,m2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const g2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,E2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,b2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,T2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,A2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,R2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,w2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,N2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,D2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,z2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,I2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,F2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,G2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,j2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,X2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,q2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Y2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,W2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Z2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ge={alphahash_fragment:_T,alphahash_pars_fragment:vT,alphamap_fragment:xT,alphamap_pars_fragment:yT,alphatest_fragment:ST,alphatest_pars_fragment:MT,aomap_fragment:ET,aomap_pars_fragment:bT,batching_pars_vertex:TT,batching_vertex:AT,begin_vertex:RT,beginnormal_vertex:CT,bsdfs:wT,iridescence_fragment:NT,bumpmap_pars_fragment:DT,clipping_planes_fragment:UT,clipping_planes_pars_fragment:LT,clipping_planes_pars_vertex:OT,clipping_planes_vertex:zT,color_fragment:PT,color_pars_fragment:IT,color_pars_vertex:FT,color_vertex:BT,common:HT,cube_uv_reflection_fragment:GT,defaultnormal_vertex:VT,displacementmap_pars_vertex:jT,displacementmap_vertex:kT,emissivemap_fragment:XT,emissivemap_pars_fragment:qT,colorspace_fragment:YT,colorspace_pars_fragment:WT,envmap_fragment:ZT,envmap_common_pars_fragment:KT,envmap_pars_fragment:QT,envmap_pars_vertex:JT,envmap_physical_pars_fragment:cA,envmap_vertex:$T,fog_vertex:tA,fog_pars_vertex:eA,fog_fragment:nA,fog_pars_fragment:iA,gradientmap_pars_fragment:aA,lightmap_pars_fragment:sA,lights_lambert_fragment:rA,lights_lambert_pars_fragment:oA,lights_pars_begin:lA,lights_toon_fragment:uA,lights_toon_pars_fragment:fA,lights_phong_fragment:hA,lights_phong_pars_fragment:dA,lights_physical_fragment:pA,lights_physical_pars_fragment:mA,lights_fragment_begin:gA,lights_fragment_maps:_A,lights_fragment_end:vA,logdepthbuf_fragment:xA,logdepthbuf_pars_fragment:yA,logdepthbuf_pars_vertex:SA,logdepthbuf_vertex:MA,map_fragment:EA,map_pars_fragment:bA,map_particle_fragment:TA,map_particle_pars_fragment:AA,metalnessmap_fragment:RA,metalnessmap_pars_fragment:CA,morphinstance_vertex:wA,morphcolor_vertex:NA,morphnormal_vertex:DA,morphtarget_pars_vertex:UA,morphtarget_vertex:LA,normal_fragment_begin:OA,normal_fragment_maps:zA,normal_pars_fragment:PA,normal_pars_vertex:IA,normal_vertex:FA,normalmap_pars_fragment:BA,clearcoat_normal_fragment_begin:HA,clearcoat_normal_fragment_maps:GA,clearcoat_pars_fragment:VA,iridescence_pars_fragment:jA,opaque_fragment:kA,packing:XA,premultiplied_alpha_fragment:qA,project_vertex:YA,dithering_fragment:WA,dithering_pars_fragment:ZA,roughnessmap_fragment:KA,roughnessmap_pars_fragment:QA,shadowmap_pars_fragment:JA,shadowmap_pars_vertex:$A,shadowmap_vertex:t2,shadowmask_pars_fragment:e2,skinbase_vertex:n2,skinning_pars_vertex:i2,skinning_vertex:a2,skinnormal_vertex:s2,specularmap_fragment:r2,specularmap_pars_fragment:o2,tonemapping_fragment:l2,tonemapping_pars_fragment:c2,transmission_fragment:u2,transmission_pars_fragment:f2,uv_pars_fragment:h2,uv_pars_vertex:d2,uv_vertex:p2,worldpos_vertex:m2,background_vert:g2,background_frag:_2,backgroundCube_vert:v2,backgroundCube_frag:x2,cube_vert:y2,cube_frag:S2,depth_vert:M2,depth_frag:E2,distanceRGBA_vert:b2,distanceRGBA_frag:T2,equirect_vert:A2,equirect_frag:R2,linedashed_vert:C2,linedashed_frag:w2,meshbasic_vert:N2,meshbasic_frag:D2,meshlambert_vert:U2,meshlambert_frag:L2,meshmatcap_vert:O2,meshmatcap_frag:z2,meshnormal_vert:P2,meshnormal_frag:I2,meshphong_vert:F2,meshphong_frag:B2,meshphysical_vert:H2,meshphysical_frag:G2,meshtoon_vert:V2,meshtoon_frag:j2,points_vert:k2,points_frag:X2,shadow_vert:q2,shadow_frag:Y2,sprite_vert:W2,sprite_frag:Z2},Ht={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},na={basic:{uniforms:qn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:qn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Te(0)}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:qn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:qn([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:qn([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new Te(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:qn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:qn([Ht.points,Ht.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:qn([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:qn([Ht.common,Ht.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:qn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:qn([Ht.sprite,Ht.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distanceRGBA:{uniforms:qn([Ht.common,Ht.displacementmap,{referencePosition:{value:new nt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distanceRGBA_vert,fragmentShader:ge.distanceRGBA_frag},shadow:{uniforms:qn([Ht.lights,Ht.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};na.physical={uniforms:qn([na.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};const mu={r:0,b:0,g:0},Ys=new sa,K2=new tn;function Q2(o,e,i,s,l,f,h){const d=new Te(0);let p=f===!0?0:1,_,v,g=null,x=0,E=null;function b(z){let D=z.isScene===!0?z.background:null;return D&&D.isTexture&&(D=(z.backgroundBlurriness>0?i:e).get(D)),D}function A(z){let D=!1;const j=b(z);j===null?S(d,p):j&&j.isColor&&(S(j,1),D=!0);const F=o.xr.getEnvironmentBlendMode();F==="additive"?s.buffers.color.setClear(0,0,0,1,h):F==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(z,D){const j=b(D);j&&(j.isCubeTexture||j.mapping===Uu)?(v===void 0&&(v=new pi(new Rl(1,1,1),new xs({name:"BackgroundCubeMaterial",uniforms:yo(na.backgroundCube.uniforms),vertexShader:na.backgroundCube.vertexShader,fragmentShader:na.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(F,P,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),Ys.copy(D.backgroundRotation),Ys.x*=-1,Ys.y*=-1,Ys.z*=-1,j.isCubeTexture&&j.isRenderTargetTexture===!1&&(Ys.y*=-1,Ys.z*=-1),v.material.uniforms.envMap.value=j,v.material.uniforms.flipEnvMap.value=j.isCubeTexture&&j.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(K2.makeRotationFromEuler(Ys)),v.material.toneMapped=ze.getTransfer(j.colorSpace)!==Ve,(g!==j||x!==j.version||E!==o.toneMapping)&&(v.material.needsUpdate=!0,g=j,x=j.version,E=o.toneMapping),v.layers.enableAll(),z.unshift(v,v.geometry,v.material,0,0,null)):j&&j.isTexture&&(_===void 0&&(_=new pi(new Cl(2,2),new xs({name:"BackgroundMaterial",uniforms:yo(na.background.uniforms),vertexShader:na.background.vertexShader,fragmentShader:na.background.fragmentShader,side:vs,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),Object.defineProperty(_.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(_)),_.material.uniforms.t2D.value=j,_.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,_.material.toneMapped=ze.getTransfer(j.colorSpace)!==Ve,j.matrixAutoUpdate===!0&&j.updateMatrix(),_.material.uniforms.uvTransform.value.copy(j.matrix),(g!==j||x!==j.version||E!==o.toneMapping)&&(_.material.needsUpdate=!0,g=j,x=j.version,E=o.toneMapping),_.layers.enableAll(),z.unshift(_,_.geometry,_.material,0,0,null))}function S(z,D){z.getRGB(mu,Wy(o)),s.buffers.color.setClear(mu.r,mu.g,mu.b,D,h)}function O(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0)}return{getClearColor:function(){return d},setClearColor:function(z,D=1){d.set(z),p=D,S(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(z){p=z,S(d,p)},render:A,addToRenderList:M,dispose:O}}function J2(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=x(null);let f=l,h=!1;function d(C,H,at,$,dt){let ht=!1;const q=g($,at,H);f!==q&&(f=q,_(f.object)),ht=E(C,$,at,dt),ht&&b(C,$,at,dt),dt!==null&&e.update(dt,o.ELEMENT_ARRAY_BUFFER),(ht||h)&&(h=!1,D(C,H,at,$),dt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(dt).buffer))}function p(){return o.createVertexArray()}function _(C){return o.bindVertexArray(C)}function v(C){return o.deleteVertexArray(C)}function g(C,H,at){const $=at.wireframe===!0;let dt=s[C.id];dt===void 0&&(dt={},s[C.id]=dt);let ht=dt[H.id];ht===void 0&&(ht={},dt[H.id]=ht);let q=ht[$];return q===void 0&&(q=x(p()),ht[$]=q),q}function x(C){const H=[],at=[],$=[];for(let dt=0;dt<i;dt++)H[dt]=0,at[dt]=0,$[dt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:at,attributeDivisors:$,object:C,attributes:{},index:null}}function E(C,H,at,$){const dt=f.attributes,ht=H.attributes;let q=0;const ot=at.getAttributes();for(const X in ot)if(ot[X].location>=0){const yt=dt[X];let Rt=ht[X];if(Rt===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(Rt=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(Rt=C.instanceColor)),yt===void 0||yt.attribute!==Rt||Rt&&yt.data!==Rt.data)return!0;q++}return f.attributesNum!==q||f.index!==$}function b(C,H,at,$){const dt={},ht=H.attributes;let q=0;const ot=at.getAttributes();for(const X in ot)if(ot[X].location>=0){let yt=ht[X];yt===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(yt=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(yt=C.instanceColor));const Rt={};Rt.attribute=yt,yt&&yt.data&&(Rt.data=yt.data),dt[X]=Rt,q++}f.attributes=dt,f.attributesNum=q,f.index=$}function A(){const C=f.newAttributes;for(let H=0,at=C.length;H<at;H++)C[H]=0}function M(C){S(C,0)}function S(C,H){const at=f.newAttributes,$=f.enabledAttributes,dt=f.attributeDivisors;at[C]=1,$[C]===0&&(o.enableVertexAttribArray(C),$[C]=1),dt[C]!==H&&(o.vertexAttribDivisor(C,H),dt[C]=H)}function O(){const C=f.newAttributes,H=f.enabledAttributes;for(let at=0,$=H.length;at<$;at++)H[at]!==C[at]&&(o.disableVertexAttribArray(at),H[at]=0)}function z(C,H,at,$,dt,ht,q){q===!0?o.vertexAttribIPointer(C,H,at,dt,ht):o.vertexAttribPointer(C,H,at,$,dt,ht)}function D(C,H,at,$){A();const dt=$.attributes,ht=at.getAttributes(),q=H.defaultAttributeValues;for(const ot in ht){const X=ht[ot];if(X.location>=0){let xt=dt[ot];if(xt===void 0&&(ot==="instanceMatrix"&&C.instanceMatrix&&(xt=C.instanceMatrix),ot==="instanceColor"&&C.instanceColor&&(xt=C.instanceColor)),xt!==void 0){const yt=xt.normalized,Rt=xt.itemSize,zt=e.get(xt);if(zt===void 0)continue;const Wt=zt.buffer,N=zt.type,W=zt.bytesPerElement,tt=N===o.INT||N===o.UNSIGNED_INT||xt.gpuType===Vp;if(xt.isInterleavedBufferAttribute){const ft=xt.data,St=ft.stride,Bt=xt.offset;if(ft.isInstancedInterleavedBuffer){for(let Nt=0;Nt<X.locationSize;Nt++)S(X.location+Nt,ft.meshPerAttribute);C.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Nt=0;Nt<X.locationSize;Nt++)M(X.location+Nt);o.bindBuffer(o.ARRAY_BUFFER,Wt);for(let Nt=0;Nt<X.locationSize;Nt++)z(X.location+Nt,Rt/X.locationSize,N,yt,St*W,(Bt+Rt/X.locationSize*Nt)*W,tt)}else{if(xt.isInstancedBufferAttribute){for(let ft=0;ft<X.locationSize;ft++)S(X.location+ft,xt.meshPerAttribute);C.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let ft=0;ft<X.locationSize;ft++)M(X.location+ft);o.bindBuffer(o.ARRAY_BUFFER,Wt);for(let ft=0;ft<X.locationSize;ft++)z(X.location+ft,Rt/X.locationSize,N,yt,Rt*W,Rt/X.locationSize*ft*W,tt)}}else if(q!==void 0){const yt=q[ot];if(yt!==void 0)switch(yt.length){case 2:o.vertexAttrib2fv(X.location,yt);break;case 3:o.vertexAttrib3fv(X.location,yt);break;case 4:o.vertexAttrib4fv(X.location,yt);break;default:o.vertexAttrib1fv(X.location,yt)}}}}O()}function j(){B();for(const C in s){const H=s[C];for(const at in H){const $=H[at];for(const dt in $)v($[dt].object),delete $[dt];delete H[at]}delete s[C]}}function F(C){if(s[C.id]===void 0)return;const H=s[C.id];for(const at in H){const $=H[at];for(const dt in $)v($[dt].object),delete $[dt];delete H[at]}delete s[C.id]}function P(C){for(const H in s){const at=s[H];if(at[C.id]===void 0)continue;const $=at[C.id];for(const dt in $)v($[dt].object),delete $[dt];delete at[C.id]}}function B(){U(),h=!0,f!==l&&(f=l,_(f.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:B,resetDefaultState:U,dispose:j,releaseStatesOfGeometry:F,releaseStatesOfProgram:P,initAttributes:A,enableAttribute:M,disableUnusedAttributes:O}}function $2(o,e,i){let s;function l(_){s=_}function f(_,v){o.drawArrays(s,_,v),i.update(v,s,1)}function h(_,v,g){g!==0&&(o.drawArraysInstanced(s,_,v,g),i.update(v,s,g))}function d(_,v,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,_,0,v,0,g);let E=0;for(let b=0;b<g;b++)E+=v[b];i.update(E,s,1)}function p(_,v,g,x){if(g===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let b=0;b<_.length;b++)h(_[b],v[b],x[b]);else{E.multiDrawArraysInstancedWEBGL(s,_,0,v,0,x,0,g);let b=0;for(let A=0;A<g;A++)b+=v[A]*x[A];i.update(b,s,1)}}this.setMode=l,this.render=f,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function tR(o,e,i,s){let l;function f(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(P){return!(P!==ji&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const B=P===bl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==La&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Na&&!B)}function p(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let _=i.precision!==void 0?i.precision:"highp";const v=p(_);v!==_&&(console.warn("THREE.WebGLRenderer:",_,"not supported, using",v,"instead."),_=v);const g=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),O=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),z=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),j=b>0,F=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:d,precision:_,logarithmicDepthBuffer:g,reverseDepthBuffer:x,maxTextures:E,maxVertexTextures:b,maxTextureSize:A,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:O,maxVaryings:z,maxFragmentUniforms:D,vertexTextures:j,maxSamples:F}}function eR(o){const e=this;let i=null,s=0,l=!1,f=!1;const h=new ps,d=new pe,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const E=g.length!==0||x||s!==0||l;return l=x,s=g.length,E},this.beginShadows=function(){f=!0,v(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(g,x){i=v(g,x,0)},this.setState=function(g,x,E){const b=g.clippingPlanes,A=g.clipIntersection,M=g.clipShadows,S=o.get(g);if(!l||b===null||b.length===0||f&&!M)f?v(null):_();else{const O=f?0:s,z=O*4;let D=S.clippingState||null;p.value=D,D=v(b,x,z,E);for(let j=0;j!==z;++j)D[j]=i[j];S.clippingState=D,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=O}};function _(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(g,x,E,b){const A=g!==null?g.length:0;let M=null;if(A!==0){if(M=p.value,b!==!0||M===null){const S=E+A*4,O=x.matrixWorldInverse;d.getNormalMatrix(O),(M===null||M.length<S)&&(M=new Float32Array(S));for(let z=0,D=E;z!==A;++z,D+=4)h.copy(g[z]).applyMatrix4(O,d),h.normal.toArray(M,D),M[D+3]=h.constant}p.value=M,p.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,M}}function nR(o){let e=new WeakMap;function i(h,d){return d===ip?h.mapping=mo:d===ap&&(h.mapping=go),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===ip||d===ap)if(e.has(h)){const p=e.get(h).texture;return i(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const _=new Yb(p.height);return _.fromEquirectangularTexture(o,h),e.set(h,_),h.addEventListener("dispose",l),i(_.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function f(){e=new WeakMap}return{get:s,dispose:f}}const lo=4,sx=[.125,.215,.35,.446,.526,.582],Js=20,Hd=new tS,rx=new Te;let Gd=null,Vd=0,jd=0,kd=!1;const Ks=(1+Math.sqrt(5))/2,ro=1/Ks,ox=[new nt(-Ks,ro,0),new nt(Ks,ro,0),new nt(-ro,0,Ks),new nt(ro,0,Ks),new nt(0,Ks,-ro),new nt(0,Ks,ro),new nt(-1,1,-1),new nt(1,1,-1),new nt(-1,1,1),new nt(1,1,1)],iR=new nt;class lx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100,f={}){const{size:h=256,position:d=iR}=f;Gd=this._renderer.getRenderTarget(),Vd=this._renderer.getActiveCubeFace(),jd=this._renderer.getActiveMipmapLevel(),kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,s,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ux(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Gd,Vd,jd),this._renderer.xr.enabled=kd,e.scissorTest=!1,gu(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===mo||e.mapping===go?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gd=this._renderer.getRenderTarget(),Vd=this._renderer.getActiveCubeFace(),jd=this._renderer.getActiveMipmapLevel(),kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:ti,minFilter:ti,generateMipmaps:!1,type:bl,format:ji,colorSpace:xo,depthBuffer:!1},l=cx(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cx(e,i,s);const{_lodMax:f}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=aR(f)),this._blurMaterial=sR(f,e,i)}return l}_compileMaterial(e){const i=new pi(this._lodPlanes[0],e);this._renderer.compile(i,Hd)}_sceneToCubeUV(e,i,s,l,f){const p=new Ri(90,1,i,s),_=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,E=g.toneMapping;g.getClearColor(rx),g.toneMapping=_s,g.autoClear=!1;const b=new Kp({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1}),A=new pi(new Rl,b);let M=!1;const S=e.background;S?S.isColor&&(b.color.copy(S),e.background=null,M=!0):(b.color.copy(rx),M=!0);for(let O=0;O<6;O++){const z=O%3;z===0?(p.up.set(0,_[O],0),p.position.set(f.x,f.y,f.z),p.lookAt(f.x+v[O],f.y,f.z)):z===1?(p.up.set(0,0,_[O]),p.position.set(f.x,f.y,f.z),p.lookAt(f.x,f.y+v[O],f.z)):(p.up.set(0,_[O],0),p.position.set(f.x,f.y,f.z),p.lookAt(f.x,f.y,f.z+v[O]));const D=this._cubeSize;gu(l,z*D,O>2?D:0,D,D),g.setRenderTarget(l),M&&g.render(A,p),g.render(e,p)}A.geometry.dispose(),A.material.dispose(),g.toneMapping=E,g.autoClear=x,e.background=S}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===mo||e.mapping===go;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=fx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ux());const f=l?this._cubemapMaterial:this._equirectMaterial,h=new pi(this._lodPlanes[0],f),d=f.uniforms;d.envMap.value=e;const p=this._cubeSize;gu(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(h,Hd)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let f=1;f<l;f++){const h=Math.sqrt(this._sigmas[f]*this._sigmas[f]-this._sigmas[f-1]*this._sigmas[f-1]),d=ox[(l-f-1)%ox.length];this._blur(e,f-1,f,h,d)}i.autoClear=s}_blur(e,i,s,l,f){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",f),this._halfBlur(h,e,s,s,l,"longitudinal",f)}_halfBlur(e,i,s,l,f,h,d){const p=this._renderer,_=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,g=new pi(this._lodPlanes[l],_),x=_.uniforms,E=this._sizeLods[s]-1,b=isFinite(f)?Math.PI/(2*E):2*Math.PI/(2*Js-1),A=f/b,M=isFinite(f)?1+Math.floor(v*A):Js;M>Js&&console.warn(`sigmaRadians, ${f}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Js}`);const S=[];let O=0;for(let P=0;P<Js;++P){const B=P/A,U=Math.exp(-B*B/2);S.push(U),P===0?O+=U:P<M&&(O+=2*U)}for(let P=0;P<S.length;P++)S[P]=S[P]/O;x.envMap.value=e.texture,x.samples.value=M,x.weights.value=S,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:z}=this;x.dTheta.value=b,x.mipInt.value=z-s;const D=this._sizeLods[l],j=3*D*(l>z-lo?l-z+lo:0),F=4*(this._cubeSize-D);gu(i,j,F,3*D,2*D),p.setRenderTarget(i),p.render(g,Hd)}}function aR(o){const e=[],i=[],s=[];let l=o;const f=o-lo+1+sx.length;for(let h=0;h<f;h++){const d=Math.pow(2,l);i.push(d);let p=1/d;h>o-lo?p=sx[h-o+lo-1]:h===0&&(p=0),s.push(p);const _=1/(d-2),v=-_,g=1+_,x=[v,v,g,v,g,g,v,v,g,g,v,g],E=6,b=6,A=3,M=2,S=1,O=new Float32Array(A*b*E),z=new Float32Array(M*b*E),D=new Float32Array(S*b*E);for(let F=0;F<E;F++){const P=F%3*2/3-1,B=F>2?0:-1,U=[P,B,0,P+2/3,B,0,P+2/3,B+1,0,P,B,0,P+2/3,B+1,0,P,B+1,0];O.set(U,A*b*F),z.set(x,M*b*F);const C=[F,F,F,F,F,F];D.set(C,S*b*F)}const j=new Ci;j.setAttribute("position",new aa(O,A)),j.setAttribute("uv",new aa(z,M)),j.setAttribute("faceIndex",new aa(D,S)),e.push(j),l>lo&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function cx(o,e,i){const s=new er(o,e,i);return s.texture.mapping=Uu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function gu(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function sR(o,e,i){const s=new Float32Array(Js),l=new nt(0,1,0);return new xs({name:"SphericalGaussianBlur",defines:{n:Js,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:am(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gs,depthTest:!1,depthWrite:!1})}function ux(){return new xs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:am(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gs,depthTest:!1,depthWrite:!1})}function fx(){return new xs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:am(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gs,depthTest:!1,depthWrite:!1})}function am(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function rR(o){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const p=d.mapping,_=p===ip||p===ap,v=p===mo||p===go;if(_||v){let g=e.get(d);const x=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new lx(o)),g=_?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const E=d.image;return _&&E&&E.height>0||v&&E&&l(E)?(i===null&&(i=new lx(o)),g=_?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",f),g.texture):null}}}return d}function l(d){let p=0;const _=6;for(let v=0;v<_;v++)d[v]!==void 0&&p++;return p===_}function f(d){const p=d.target;p.removeEventListener("dispose",f);const _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function oR(o){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Zs("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function lR(o,e,i,s){const l={},f=new WeakMap;function h(g){const x=g.target;x.index!==null&&e.remove(x.index);for(const b in x.attributes)e.remove(x.attributes[b]);x.removeEventListener("dispose",h),delete l[x.id];const E=f.get(x);E&&(e.remove(E),f.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(g,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function p(g){const x=g.attributes;for(const E in x)e.update(x[E],o.ARRAY_BUFFER)}function _(g){const x=[],E=g.index,b=g.attributes.position;let A=0;if(E!==null){const O=E.array;A=E.version;for(let z=0,D=O.length;z<D;z+=3){const j=O[z+0],F=O[z+1],P=O[z+2];x.push(j,F,F,P,P,j)}}else if(b!==void 0){const O=b.array;A=b.version;for(let z=0,D=O.length/3-1;z<D;z+=3){const j=z+0,F=z+1,P=z+2;x.push(j,F,F,P,P,j)}}else return;const M=new(jy(x)?Yy:qy)(x,1);M.version=A;const S=f.get(g);S&&e.remove(S),f.set(g,M)}function v(g){const x=f.get(g);if(x){const E=g.index;E!==null&&x.version<E.version&&_(g)}else _(g);return f.get(g)}return{get:d,update:p,getWireframeAttribute:v}}function cR(o,e,i){let s;function l(x){s=x}let f,h;function d(x){f=x.type,h=x.bytesPerElement}function p(x,E){o.drawElements(s,E,f,x*h),i.update(E,s,1)}function _(x,E,b){b!==0&&(o.drawElementsInstanced(s,E,f,x*h,b),i.update(E,s,b))}function v(x,E,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,E,0,f,x,0,b);let M=0;for(let S=0;S<b;S++)M+=E[S];i.update(M,s,1)}function g(x,E,b,A){if(b===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let S=0;S<x.length;S++)_(x[S]/h,E[S],A[S]);else{M.multiDrawElementsInstancedWEBGL(s,E,0,f,x,0,A,0,b);let S=0;for(let O=0;O<b;O++)S+=E[O]*A[O];i.update(S,s,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=_,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function uR(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(f,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(f/3);break;case o.LINES:i.lines+=d*(f/2);break;case o.LINE_STRIP:i.lines+=d*(f-1);break;case o.LINE_LOOP:i.lines+=d*f;break;case o.POINTS:i.points+=d*f;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function fR(o,e,i){const s=new WeakMap,l=new rn;function f(h,d,p){const _=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=v!==void 0?v.length:0;let x=s.get(d);if(x===void 0||x.count!==g){let C=function(){B.dispose(),s.delete(d),d.removeEventListener("dispose",C)};var E=C;x!==void 0&&x.texture.dispose();const b=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],O=d.morphAttributes.normal||[],z=d.morphAttributes.color||[];let D=0;b===!0&&(D=1),A===!0&&(D=2),M===!0&&(D=3);let j=d.attributes.position.count*D,F=1;j>e.maxTextureSize&&(F=Math.ceil(j/e.maxTextureSize),j=e.maxTextureSize);const P=new Float32Array(j*F*4*g),B=new ky(P,j,F,g);B.type=Na,B.needsUpdate=!0;const U=D*4;for(let H=0;H<g;H++){const at=S[H],$=O[H],dt=z[H],ht=j*F*4*H;for(let q=0;q<at.count;q++){const ot=q*U;b===!0&&(l.fromBufferAttribute(at,q),P[ht+ot+0]=l.x,P[ht+ot+1]=l.y,P[ht+ot+2]=l.z,P[ht+ot+3]=0),A===!0&&(l.fromBufferAttribute($,q),P[ht+ot+4]=l.x,P[ht+ot+5]=l.y,P[ht+ot+6]=l.z,P[ht+ot+7]=0),M===!0&&(l.fromBufferAttribute(dt,q),P[ht+ot+8]=l.x,P[ht+ot+9]=l.y,P[ht+ot+10]=l.z,P[ht+ot+11]=dt.itemSize===4?l.w:1)}}x={count:g,texture:B,size:new ue(j,F)},s.set(d,x),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let b=0;for(let M=0;M<_.length;M++)b+=_[M];const A=d.morphTargetsRelative?1:1-b;p.getUniforms().setValue(o,"morphTargetBaseInfluence",A),p.getUniforms().setValue(o,"morphTargetInfluences",_)}p.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:f}}function hR(o,e,i,s){let l=new WeakMap;function f(p){const _=s.render.frame,v=p.geometry,g=e.get(p,v);if(l.get(g)!==_&&(e.update(g),l.set(g,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==_&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),l.set(p,_))),p.isSkinnedMesh){const x=p.skeleton;l.get(x)!==_&&(x.update(),l.set(x,_))}return g}function h(){l=new WeakMap}function d(p){const _=p.target;_.removeEventListener("dispose",d),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:f,dispose:h}}const nS=new Gn,hx=new $y(1,1),iS=new ky,aS=new Nb,sS=new Ky,dx=[],px=[],mx=new Float32Array(16),gx=new Float32Array(9),_x=new Float32Array(4);function Mo(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let f=dx[l];if(f===void 0&&(f=new Float32Array(l),dx[l]=f),e!==0){s.toArray(f,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(f,d)}return f}function Sn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function Mn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function zu(o,e){let i=px[e];i===void 0&&(i=new Int32Array(e),px[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function dR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function pR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;o.uniform2fv(this.addr,e),Mn(i,e)}}function mR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Sn(i,e))return;o.uniform3fv(this.addr,e),Mn(i,e)}}function gR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;o.uniform4fv(this.addr,e),Mn(i,e)}}function _R(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(Sn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),Mn(i,e)}else{if(Sn(i,s))return;_x.set(s),o.uniformMatrix2fv(this.addr,!1,_x),Mn(i,s)}}function vR(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(Sn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),Mn(i,e)}else{if(Sn(i,s))return;gx.set(s),o.uniformMatrix3fv(this.addr,!1,gx),Mn(i,s)}}function xR(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(Sn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),Mn(i,e)}else{if(Sn(i,s))return;mx.set(s),o.uniformMatrix4fv(this.addr,!1,mx),Mn(i,s)}}function yR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function SR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;o.uniform2iv(this.addr,e),Mn(i,e)}}function MR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;o.uniform3iv(this.addr,e),Mn(i,e)}}function ER(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;o.uniform4iv(this.addr,e),Mn(i,e)}}function bR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function TR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;o.uniform2uiv(this.addr,e),Mn(i,e)}}function AR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;o.uniform3uiv(this.addr,e),Mn(i,e)}}function RR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;o.uniform4uiv(this.addr,e),Mn(i,e)}}function CR(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let f;this.type===o.SAMPLER_2D_SHADOW?(hx.compareFunction=Vy,f=hx):f=nS,i.setTexture2D(e||f,l)}function wR(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||aS,l)}function NR(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||sS,l)}function DR(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||iS,l)}function UR(o){switch(o){case 5126:return dR;case 35664:return pR;case 35665:return mR;case 35666:return gR;case 35674:return _R;case 35675:return vR;case 35676:return xR;case 5124:case 35670:return yR;case 35667:case 35671:return SR;case 35668:case 35672:return MR;case 35669:case 35673:return ER;case 5125:return bR;case 36294:return TR;case 36295:return AR;case 36296:return RR;case 35678:case 36198:case 36298:case 36306:case 35682:return CR;case 35679:case 36299:case 36307:return wR;case 35680:case 36300:case 36308:case 36293:return NR;case 36289:case 36303:case 36311:case 36292:return DR}}function LR(o,e){o.uniform1fv(this.addr,e)}function OR(o,e){const i=Mo(e,this.size,2);o.uniform2fv(this.addr,i)}function zR(o,e){const i=Mo(e,this.size,3);o.uniform3fv(this.addr,i)}function PR(o,e){const i=Mo(e,this.size,4);o.uniform4fv(this.addr,i)}function IR(o,e){const i=Mo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function FR(o,e){const i=Mo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function BR(o,e){const i=Mo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function HR(o,e){o.uniform1iv(this.addr,e)}function GR(o,e){o.uniform2iv(this.addr,e)}function VR(o,e){o.uniform3iv(this.addr,e)}function jR(o,e){o.uniform4iv(this.addr,e)}function kR(o,e){o.uniform1uiv(this.addr,e)}function XR(o,e){o.uniform2uiv(this.addr,e)}function qR(o,e){o.uniform3uiv(this.addr,e)}function YR(o,e){o.uniform4uiv(this.addr,e)}function WR(o,e,i){const s=this.cache,l=e.length,f=zu(i,l);Sn(s,f)||(o.uniform1iv(this.addr,f),Mn(s,f));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||nS,f[h])}function ZR(o,e,i){const s=this.cache,l=e.length,f=zu(i,l);Sn(s,f)||(o.uniform1iv(this.addr,f),Mn(s,f));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||aS,f[h])}function KR(o,e,i){const s=this.cache,l=e.length,f=zu(i,l);Sn(s,f)||(o.uniform1iv(this.addr,f),Mn(s,f));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||sS,f[h])}function QR(o,e,i){const s=this.cache,l=e.length,f=zu(i,l);Sn(s,f)||(o.uniform1iv(this.addr,f),Mn(s,f));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||iS,f[h])}function JR(o){switch(o){case 5126:return LR;case 35664:return OR;case 35665:return zR;case 35666:return PR;case 35674:return IR;case 35675:return FR;case 35676:return BR;case 5124:case 35670:return HR;case 35667:case 35671:return GR;case 35668:case 35672:return VR;case 35669:case 35673:return jR;case 5125:return kR;case 36294:return XR;case 36295:return qR;case 36296:return YR;case 35678:case 36198:case 36298:case 36306:case 35682:return WR;case 35679:case 36299:case 36307:return ZR;case 35680:case 36300:case 36308:case 36293:return KR;case 36289:case 36303:case 36311:case 36292:return QR}}class $R{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=UR(i.type)}}class tC{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=JR(i.type)}}class eC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let f=0,h=l.length;f!==h;++f){const d=l[f];d.setValue(e,i[d.id],s)}}}const Xd=/(\w+)(\])?(\[|\.)?/g;function vx(o,e){o.seq.push(e),o.map[e.id]=e}function nC(o,e,i){const s=o.name,l=s.length;for(Xd.lastIndex=0;;){const f=Xd.exec(s),h=Xd.lastIndex;let d=f[1];const p=f[2]==="]",_=f[3];if(p&&(d=d|0),_===void 0||_==="["&&h+2===l){vx(i,_===void 0?new $R(d,o,e):new tC(d,o,e));break}else{let g=i.map[d];g===void 0&&(g=new eC(d),vx(i,g)),i=g}}}class Tu{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const f=e.getActiveUniform(i,l),h=e.getUniformLocation(i,f.name);nC(f,h,this)}}setValue(e,i,s,l){const f=this.map[i];f!==void 0&&f.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let f=0,h=i.length;f!==h;++f){const d=i[f],p=s[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,f=e.length;l!==f;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function xx(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const iC=37297;let aC=0;function sC(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),f=Math.min(e+6,i.length);for(let h=l;h<f;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const yx=new pe;function rC(o){ze._getMatrix(yx,ze.workingColorSpace,o);const e=`mat3( ${yx.elements.map(i=>i.toFixed(4))} )`;switch(ze.getTransfer(o)){case Ru:return[e,"LinearTransferOETF"];case Ve:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Sx(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(s&&l==="")return"";const f=/ERROR: 0:(\d+)/.exec(l);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+l+`

`+sC(o.getShaderSource(e),h)}else return l}function oC(o,e){const i=rC(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function lC(o,e){let i;switch(e){case eb:i="Linear";break;case nb:i="Reinhard";break;case ib:i="Cineon";break;case ab:i="ACESFilmic";break;case rb:i="AgX";break;case ob:i="Neutral";break;case sb:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const _u=new nt;function cC(){ze.getLuminanceCoefficients(_u);const o=_u.x.toFixed(4),e=_u.y.toFixed(4),i=_u.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uC(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sl).join(`
`)}function fC(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function hC(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const f=o.getActiveAttrib(e,l),h=f.name;let d=1;f.type===o.FLOAT_MAT2&&(d=2),f.type===o.FLOAT_MAT3&&(d=3),f.type===o.FLOAT_MAT4&&(d=4),i[h]={type:f.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Sl(o){return o!==""}function Mx(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ex(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dC=/^[ \t]*#include +<([\w\d./]+)>/gm;function zp(o){return o.replace(dC,mC)}const pC=new Map;function mC(o,e){let i=ge[e];if(i===void 0){const s=pC.get(e);if(s!==void 0)i=ge[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return zp(i)}const gC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bx(o){return o.replace(gC,_C)}function _C(o,e,i,s){let l="";for(let f=parseInt(e);f<parseInt(i);f++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return l}function Tx(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function vC(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Ry?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Cy?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ca&&(e="SHADOWMAP_TYPE_VSM"),e}function xC(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case mo:case go:e="ENVMAP_TYPE_CUBE";break;case Uu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function yC(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case go:e="ENVMAP_MODE_REFRACTION";break}return e}function SC(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case wy:e="ENVMAP_BLENDING_MULTIPLY";break;case $1:e="ENVMAP_BLENDING_MIX";break;case tb:e="ENVMAP_BLENDING_ADD";break}return e}function MC(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function EC(o,e,i,s){const l=o.getContext(),f=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=vC(i),_=xC(i),v=yC(i),g=SC(i),x=MC(i),E=uC(i),b=fC(f),A=l.createProgram();let M,S,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Sl).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Sl).join(`
`),S.length>0&&(S+=`
`)):(M=[Tx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sl).join(`
`),S=[Tx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==_s?"#define TONE_MAPPING":"",i.toneMapping!==_s?ge.tonemapping_pars_fragment:"",i.toneMapping!==_s?lC("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,oC("linearToOutputTexel",i.outputColorSpace),cC(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Sl).join(`
`)),h=zp(h),h=Mx(h,i),h=Ex(h,i),d=zp(d),d=Mx(d,i),d=Ex(d,i),h=bx(h),d=bx(d),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,M=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",i.glslVersion===Nv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Nv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const z=O+M+h,D=O+S+d,j=xx(l,l.VERTEX_SHADER,z),F=xx(l,l.FRAGMENT_SHADER,D);l.attachShader(A,j),l.attachShader(A,F),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function P(H){if(o.debug.checkShaderErrors){const at=l.getProgramInfoLog(A).trim(),$=l.getShaderInfoLog(j).trim(),dt=l.getShaderInfoLog(F).trim();let ht=!0,q=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(ht=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,A,j,F);else{const ot=Sx(l,j,"vertex"),X=Sx(l,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+at+`
`+ot+`
`+X)}else at!==""?console.warn("THREE.WebGLProgram: Program Info Log:",at):($===""||dt==="")&&(q=!1);q&&(H.diagnostics={runnable:ht,programLog:at,vertexShader:{log:$,prefix:M},fragmentShader:{log:dt,prefix:S}})}l.deleteShader(j),l.deleteShader(F),B=new Tu(l,A),U=hC(l,A)}let B;this.getUniforms=function(){return B===void 0&&P(this),B};let U;this.getAttributes=function(){return U===void 0&&P(this),U};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(A,iC)),C},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=aC++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=j,this.fragmentShader=F,this}let bC=0;class TC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),f=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(f)===!1&&(h.add(f),f.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new AC(e),i.set(e,s)),s}}class AC{constructor(e){this.id=bC++,this.code=e,this.usedTimes=0}}function RC(o,e,i,s,l,f,h){const d=new Zp,p=new TC,_=new Set,v=[],g=l.logarithmicDepthBuffer,x=l.vertexTextures;let E=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(U){return _.add(U),U===0?"uv":`uv${U}`}function M(U,C,H,at,$){const dt=at.fog,ht=$.geometry,q=U.isMeshStandardMaterial?at.environment:null,ot=(U.isMeshStandardMaterial?i:e).get(U.envMap||q),X=ot&&ot.mapping===Uu?ot.image.height:null,xt=b[U.type];U.precision!==null&&(E=l.getMaxPrecision(U.precision),E!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",E,"instead."));const yt=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,Rt=yt!==void 0?yt.length:0;let zt=0;ht.morphAttributes.position!==void 0&&(zt=1),ht.morphAttributes.normal!==void 0&&(zt=2),ht.morphAttributes.color!==void 0&&(zt=3);let Wt,N,W,tt;if(xt){const ye=na[xt];Wt=ye.vertexShader,N=ye.fragmentShader}else Wt=U.vertexShader,N=U.fragmentShader,p.update(U),W=p.getVertexShaderID(U),tt=p.getFragmentShaderID(U);const ft=o.getRenderTarget(),St=o.state.buffers.depth.getReversed(),Bt=$.isInstancedMesh===!0,Nt=$.isBatchedMesh===!0,bt=!!U.map,Gt=!!U.matcap,ae=!!ot,G=!!U.aoMap,on=!!U.lightMap,se=!!U.bumpMap,$t=!!U.normalMap,Ct=!!U.displacementMap,_e=!!U.emissiveMap,Vt=!!U.metalnessMap,L=!!U.roughnessMap,R=U.anisotropy>0,st=U.clearcoat>0,vt=U.dispersion>0,Mt=U.iridescence>0,_t=U.sheen>0,Yt=U.transmission>0,Ft=R&&!!U.anisotropyMap,It=st&&!!U.clearcoatMap,me=st&&!!U.clearcoatNormalMap,At=st&&!!U.clearcoatRoughnessMap,kt=Mt&&!!U.iridescenceMap,Jt=Mt&&!!U.iridescenceThicknessMap,ee=_t&&!!U.sheenColorMap,jt=_t&&!!U.sheenRoughnessMap,de=!!U.specularMap,ce=!!U.specularColorMap,Le=!!U.specularIntensityMap,k=Yt&&!!U.transmissionMap,Et=Yt&&!!U.thicknessMap,lt=!!U.gradientMap,gt=!!U.alphaMap,wt=U.alphaTest>0,Lt=!!U.alphaHash,ne=!!U.extensions;let ke=_s;U.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(ke=o.toneMapping);const ln={shaderID:xt,shaderType:U.type,shaderName:U.name,vertexShader:Wt,fragmentShader:N,defines:U.defines,customVertexShaderID:W,customFragmentShaderID:tt,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:E,batching:Nt,batchingColor:Nt&&$._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&$.instanceColor!==null,instancingMorph:Bt&&$.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ft===null?o.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:xo,alphaToCoverage:!!U.alphaToCoverage,map:bt,matcap:Gt,envMap:ae,envMapMode:ae&&ot.mapping,envMapCubeUVHeight:X,aoMap:G,lightMap:on,bumpMap:se,normalMap:$t,displacementMap:x&&Ct,emissiveMap:_e,normalMapObjectSpace:$t&&U.normalMapType===fb,normalMapTangentSpace:$t&&U.normalMapType===Gy,metalnessMap:Vt,roughnessMap:L,anisotropy:R,anisotropyMap:Ft,clearcoat:st,clearcoatMap:It,clearcoatNormalMap:me,clearcoatRoughnessMap:At,dispersion:vt,iridescence:Mt,iridescenceMap:kt,iridescenceThicknessMap:Jt,sheen:_t,sheenColorMap:ee,sheenRoughnessMap:jt,specularMap:de,specularColorMap:ce,specularIntensityMap:Le,transmission:Yt,transmissionMap:k,thicknessMap:Et,gradientMap:lt,opaque:U.transparent===!1&&U.blending===uo&&U.alphaToCoverage===!1,alphaMap:gt,alphaTest:wt,alphaHash:Lt,combine:U.combine,mapUv:bt&&A(U.map.channel),aoMapUv:G&&A(U.aoMap.channel),lightMapUv:on&&A(U.lightMap.channel),bumpMapUv:se&&A(U.bumpMap.channel),normalMapUv:$t&&A(U.normalMap.channel),displacementMapUv:Ct&&A(U.displacementMap.channel),emissiveMapUv:_e&&A(U.emissiveMap.channel),metalnessMapUv:Vt&&A(U.metalnessMap.channel),roughnessMapUv:L&&A(U.roughnessMap.channel),anisotropyMapUv:Ft&&A(U.anisotropyMap.channel),clearcoatMapUv:It&&A(U.clearcoatMap.channel),clearcoatNormalMapUv:me&&A(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&A(U.clearcoatRoughnessMap.channel),iridescenceMapUv:kt&&A(U.iridescenceMap.channel),iridescenceThicknessMapUv:Jt&&A(U.iridescenceThicknessMap.channel),sheenColorMapUv:ee&&A(U.sheenColorMap.channel),sheenRoughnessMapUv:jt&&A(U.sheenRoughnessMap.channel),specularMapUv:de&&A(U.specularMap.channel),specularColorMapUv:ce&&A(U.specularColorMap.channel),specularIntensityMapUv:Le&&A(U.specularIntensityMap.channel),transmissionMapUv:k&&A(U.transmissionMap.channel),thicknessMapUv:Et&&A(U.thicknessMap.channel),alphaMapUv:gt&&A(U.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&($t||R),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!ht.attributes.uv&&(bt||gt),fog:!!dt,useFog:U.fog===!0,fogExp2:!!dt&&dt.isFogExp2,flatShading:U.flatShading===!0,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:St,skinning:$.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:zt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:U.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:ke,decodeVideoTexture:bt&&U.map.isVideoTexture===!0&&ze.getTransfer(U.map.colorSpace)===Ve,decodeVideoTextureEmissive:_e&&U.emissiveMap.isVideoTexture===!0&&ze.getTransfer(U.emissiveMap.colorSpace)===Ve,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===ia,flipSided:U.side===ei,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:ne&&U.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&U.extensions.multiDraw===!0||Nt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return ln.vertexUv1s=_.has(1),ln.vertexUv2s=_.has(2),ln.vertexUv3s=_.has(3),_.clear(),ln}function S(U){const C=[];if(U.shaderID?C.push(U.shaderID):(C.push(U.customVertexShaderID),C.push(U.customFragmentShaderID)),U.defines!==void 0)for(const H in U.defines)C.push(H),C.push(U.defines[H]);return U.isRawShaderMaterial===!1&&(O(C,U),z(C,U),C.push(o.outputColorSpace)),C.push(U.customProgramCacheKey),C.join()}function O(U,C){U.push(C.precision),U.push(C.outputColorSpace),U.push(C.envMapMode),U.push(C.envMapCubeUVHeight),U.push(C.mapUv),U.push(C.alphaMapUv),U.push(C.lightMapUv),U.push(C.aoMapUv),U.push(C.bumpMapUv),U.push(C.normalMapUv),U.push(C.displacementMapUv),U.push(C.emissiveMapUv),U.push(C.metalnessMapUv),U.push(C.roughnessMapUv),U.push(C.anisotropyMapUv),U.push(C.clearcoatMapUv),U.push(C.clearcoatNormalMapUv),U.push(C.clearcoatRoughnessMapUv),U.push(C.iridescenceMapUv),U.push(C.iridescenceThicknessMapUv),U.push(C.sheenColorMapUv),U.push(C.sheenRoughnessMapUv),U.push(C.specularMapUv),U.push(C.specularColorMapUv),U.push(C.specularIntensityMapUv),U.push(C.transmissionMapUv),U.push(C.thicknessMapUv),U.push(C.combine),U.push(C.fogExp2),U.push(C.sizeAttenuation),U.push(C.morphTargetsCount),U.push(C.morphAttributeCount),U.push(C.numDirLights),U.push(C.numPointLights),U.push(C.numSpotLights),U.push(C.numSpotLightMaps),U.push(C.numHemiLights),U.push(C.numRectAreaLights),U.push(C.numDirLightShadows),U.push(C.numPointLightShadows),U.push(C.numSpotLightShadows),U.push(C.numSpotLightShadowsWithMaps),U.push(C.numLightProbes),U.push(C.shadowMapType),U.push(C.toneMapping),U.push(C.numClippingPlanes),U.push(C.numClipIntersection),U.push(C.depthPacking)}function z(U,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),U.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),U.push(d.mask)}function D(U){const C=b[U.type];let H;if(C){const at=na[C];H=jb.clone(at.uniforms)}else H=U.uniforms;return H}function j(U,C){let H;for(let at=0,$=v.length;at<$;at++){const dt=v[at];if(dt.cacheKey===C){H=dt,++H.usedTimes;break}}return H===void 0&&(H=new EC(o,C,U,f),v.push(H)),H}function F(U){if(--U.usedTimes===0){const C=v.indexOf(U);v[C]=v[v.length-1],v.pop(),U.destroy()}}function P(U){p.remove(U)}function B(){p.dispose()}return{getParameters:M,getProgramCacheKey:S,getUniforms:D,acquireProgram:j,releaseProgram:F,releaseShaderCache:P,programs:v,dispose:B}}function CC(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,p){o.get(h)[d]=p}function f(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:f}}function wC(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Ax(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Rx(){const o=[];let e=0;const i=[],s=[],l=[];function f(){e=0,i.length=0,s.length=0,l.length=0}function h(g,x,E,b,A,M){let S=o[e];return S===void 0?(S={id:g.id,object:g,geometry:x,material:E,groupOrder:b,renderOrder:g.renderOrder,z:A,group:M},o[e]=S):(S.id=g.id,S.object=g,S.geometry=x,S.material=E,S.groupOrder=b,S.renderOrder=g.renderOrder,S.z=A,S.group=M),e++,S}function d(g,x,E,b,A,M){const S=h(g,x,E,b,A,M);E.transmission>0?s.push(S):E.transparent===!0?l.push(S):i.push(S)}function p(g,x,E,b,A,M){const S=h(g,x,E,b,A,M);E.transmission>0?s.unshift(S):E.transparent===!0?l.unshift(S):i.unshift(S)}function _(g,x){i.length>1&&i.sort(g||wC),s.length>1&&s.sort(x||Ax),l.length>1&&l.sort(x||Ax)}function v(){for(let g=e,x=o.length;g<x;g++){const E=o[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:s,transparent:l,init:f,push:d,unshift:p,finish:v,sort:_}}function NC(){let o=new WeakMap;function e(s,l){const f=o.get(s);let h;return f===void 0?(h=new Rx,o.set(s,[h])):l>=f.length?(h=new Rx,f.push(h)):h=f[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function DC(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new nt,color:new Te};break;case"SpotLight":i={position:new nt,direction:new nt,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new nt,color:new Te,distance:0,decay:0};break;case"HemisphereLight":i={direction:new nt,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":i={color:new Te,position:new nt,halfWidth:new nt,halfHeight:new nt};break}return o[e.id]=i,i}}}function UC(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let LC=0;function OC(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function zC(o){const e=new DC,i=UC(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let _=0;_<9;_++)s.probe.push(new nt);const l=new nt,f=new tn,h=new tn;function d(_){let v=0,g=0,x=0;for(let U=0;U<9;U++)s.probe[U].set(0,0,0);let E=0,b=0,A=0,M=0,S=0,O=0,z=0,D=0,j=0,F=0,P=0;_.sort(OC);for(let U=0,C=_.length;U<C;U++){const H=_[U],at=H.color,$=H.intensity,dt=H.distance,ht=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)v+=at.r*$,g+=at.g*$,x+=at.b*$;else if(H.isLightProbe){for(let q=0;q<9;q++)s.probe[q].addScaledVector(H.sh.coefficients[q],$);P++}else if(H.isDirectionalLight){const q=e.get(H);if(q.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const ot=H.shadow,X=i.get(H);X.shadowIntensity=ot.intensity,X.shadowBias=ot.bias,X.shadowNormalBias=ot.normalBias,X.shadowRadius=ot.radius,X.shadowMapSize=ot.mapSize,s.directionalShadow[E]=X,s.directionalShadowMap[E]=ht,s.directionalShadowMatrix[E]=H.shadow.matrix,O++}s.directional[E]=q,E++}else if(H.isSpotLight){const q=e.get(H);q.position.setFromMatrixPosition(H.matrixWorld),q.color.copy(at).multiplyScalar($),q.distance=dt,q.coneCos=Math.cos(H.angle),q.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),q.decay=H.decay,s.spot[A]=q;const ot=H.shadow;if(H.map&&(s.spotLightMap[j]=H.map,j++,ot.updateMatrices(H),H.castShadow&&F++),s.spotLightMatrix[A]=ot.matrix,H.castShadow){const X=i.get(H);X.shadowIntensity=ot.intensity,X.shadowBias=ot.bias,X.shadowNormalBias=ot.normalBias,X.shadowRadius=ot.radius,X.shadowMapSize=ot.mapSize,s.spotShadow[A]=X,s.spotShadowMap[A]=ht,D++}A++}else if(H.isRectAreaLight){const q=e.get(H);q.color.copy(at).multiplyScalar($),q.halfWidth.set(H.width*.5,0,0),q.halfHeight.set(0,H.height*.5,0),s.rectArea[M]=q,M++}else if(H.isPointLight){const q=e.get(H);if(q.color.copy(H.color).multiplyScalar(H.intensity),q.distance=H.distance,q.decay=H.decay,H.castShadow){const ot=H.shadow,X=i.get(H);X.shadowIntensity=ot.intensity,X.shadowBias=ot.bias,X.shadowNormalBias=ot.normalBias,X.shadowRadius=ot.radius,X.shadowMapSize=ot.mapSize,X.shadowCameraNear=ot.camera.near,X.shadowCameraFar=ot.camera.far,s.pointShadow[b]=X,s.pointShadowMap[b]=ht,s.pointShadowMatrix[b]=H.shadow.matrix,z++}s.point[b]=q,b++}else if(H.isHemisphereLight){const q=e.get(H);q.skyColor.copy(H.color).multiplyScalar($),q.groundColor.copy(H.groundColor).multiplyScalar($),s.hemi[S]=q,S++}}M>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ht.LTC_FLOAT_1,s.rectAreaLTC2=Ht.LTC_FLOAT_2):(s.rectAreaLTC1=Ht.LTC_HALF_1,s.rectAreaLTC2=Ht.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=g,s.ambient[2]=x;const B=s.hash;(B.directionalLength!==E||B.pointLength!==b||B.spotLength!==A||B.rectAreaLength!==M||B.hemiLength!==S||B.numDirectionalShadows!==O||B.numPointShadows!==z||B.numSpotShadows!==D||B.numSpotMaps!==j||B.numLightProbes!==P)&&(s.directional.length=E,s.spot.length=A,s.rectArea.length=M,s.point.length=b,s.hemi.length=S,s.directionalShadow.length=O,s.directionalShadowMap.length=O,s.pointShadow.length=z,s.pointShadowMap.length=z,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=O,s.pointShadowMatrix.length=z,s.spotLightMatrix.length=D+j-F,s.spotLightMap.length=j,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=P,B.directionalLength=E,B.pointLength=b,B.spotLength=A,B.rectAreaLength=M,B.hemiLength=S,B.numDirectionalShadows=O,B.numPointShadows=z,B.numSpotShadows=D,B.numSpotMaps=j,B.numLightProbes=P,s.version=LC++)}function p(_,v){let g=0,x=0,E=0,b=0,A=0;const M=v.matrixWorldInverse;for(let S=0,O=_.length;S<O;S++){const z=_[S];if(z.isDirectionalLight){const D=s.directional[g];D.direction.setFromMatrixPosition(z.matrixWorld),l.setFromMatrixPosition(z.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),g++}else if(z.isSpotLight){const D=s.spot[E];D.position.setFromMatrixPosition(z.matrixWorld),D.position.applyMatrix4(M),D.direction.setFromMatrixPosition(z.matrixWorld),l.setFromMatrixPosition(z.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),E++}else if(z.isRectAreaLight){const D=s.rectArea[b];D.position.setFromMatrixPosition(z.matrixWorld),D.position.applyMatrix4(M),h.identity(),f.copy(z.matrixWorld),f.premultiply(M),h.extractRotation(f),D.halfWidth.set(z.width*.5,0,0),D.halfHeight.set(0,z.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),b++}else if(z.isPointLight){const D=s.point[x];D.position.setFromMatrixPosition(z.matrixWorld),D.position.applyMatrix4(M),x++}else if(z.isHemisphereLight){const D=s.hemi[A];D.direction.setFromMatrixPosition(z.matrixWorld),D.direction.transformDirection(M),A++}}}return{setup:d,setupView:p,state:s}}function Cx(o){const e=new zC(o),i=[],s=[];function l(v){_.camera=v,i.length=0,s.length=0}function f(v){i.push(v)}function h(v){s.push(v)}function d(){e.setup(i)}function p(v){e.setupView(i,v)}const _={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:_,setupLights:d,setupLightsView:p,pushLight:f,pushShadow:h}}function PC(o){let e=new WeakMap;function i(l,f=0){const h=e.get(l);let d;return h===void 0?(d=new Cx(o),e.set(l,[d])):f>=h.length?(d=new Cx(o),h.push(d)):d=h[f],d}function s(){e=new WeakMap}return{get:i,dispose:s}}const IC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function BC(o,e,i){let s=new Jp;const l=new ue,f=new ue,h=new rn,d=new tT({depthPacking:ub}),p=new eT,_={},v=i.maxTextureSize,g={[vs]:ei,[ei]:vs,[ia]:ia},x=new xs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:IC,fragmentShader:FC}),E=x.clone();E.defines.HORIZONTAL_PASS=1;const b=new Ci;b.setAttribute("position",new aa(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new pi(b,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ry;let S=this.type;this.render=function(F,P,B){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||F.length===0)return;const U=o.getRenderTarget(),C=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),at=o.state;at.setBlending(gs),at.buffers.color.setClear(1,1,1,1),at.buffers.depth.setTest(!0),at.setScissorTest(!1);const $=S!==Ca&&this.type===Ca,dt=S===Ca&&this.type!==Ca;for(let ht=0,q=F.length;ht<q;ht++){const ot=F[ht],X=ot.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",ot,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;l.copy(X.mapSize);const xt=X.getFrameExtents();if(l.multiply(xt),f.copy(X.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(f.x=Math.floor(v/xt.x),l.x=f.x*xt.x,X.mapSize.x=f.x),l.y>v&&(f.y=Math.floor(v/xt.y),l.y=f.y*xt.y,X.mapSize.y=f.y)),X.map===null||$===!0||dt===!0){const Rt=this.type!==Ca?{minFilter:ki,magFilter:ki}:{};X.map!==null&&X.map.dispose(),X.map=new er(l.x,l.y,Rt),X.map.texture.name=ot.name+".shadowMap",X.camera.updateProjectionMatrix()}o.setRenderTarget(X.map),o.clear();const yt=X.getViewportCount();for(let Rt=0;Rt<yt;Rt++){const zt=X.getViewport(Rt);h.set(f.x*zt.x,f.y*zt.y,f.x*zt.z,f.y*zt.w),at.viewport(h),X.updateMatrices(ot,Rt),s=X.getFrustum(),D(P,B,X.camera,ot,this.type)}X.isPointLightShadow!==!0&&this.type===Ca&&O(X,B),X.needsUpdate=!1}S=this.type,M.needsUpdate=!1,o.setRenderTarget(U,C,H)};function O(F,P){const B=e.update(A);x.defines.VSM_SAMPLES!==F.blurSamples&&(x.defines.VSM_SAMPLES=F.blurSamples,E.defines.VSM_SAMPLES=F.blurSamples,x.needsUpdate=!0,E.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new er(l.x,l.y)),x.uniforms.shadow_pass.value=F.map.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,o.setRenderTarget(F.mapPass),o.clear(),o.renderBufferDirect(P,null,B,x,A,null),E.uniforms.shadow_pass.value=F.mapPass.texture,E.uniforms.resolution.value=F.mapSize,E.uniforms.radius.value=F.radius,o.setRenderTarget(F.map),o.clear(),o.renderBufferDirect(P,null,B,E,A,null)}function z(F,P,B,U){let C=null;const H=B.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(H!==void 0)C=H;else if(C=B.isPointLight===!0?p:d,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const at=C.uuid,$=P.uuid;let dt=_[at];dt===void 0&&(dt={},_[at]=dt);let ht=dt[$];ht===void 0&&(ht=C.clone(),dt[$]=ht,P.addEventListener("dispose",j)),C=ht}if(C.visible=P.visible,C.wireframe=P.wireframe,U===Ca?C.side=P.shadowSide!==null?P.shadowSide:P.side:C.side=P.shadowSide!==null?P.shadowSide:g[P.side],C.alphaMap=P.alphaMap,C.alphaTest=P.alphaTest,C.map=P.map,C.clipShadows=P.clipShadows,C.clippingPlanes=P.clippingPlanes,C.clipIntersection=P.clipIntersection,C.displacementMap=P.displacementMap,C.displacementScale=P.displacementScale,C.displacementBias=P.displacementBias,C.wireframeLinewidth=P.wireframeLinewidth,C.linewidth=P.linewidth,B.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const at=o.properties.get(C);at.light=B}return C}function D(F,P,B,U,C){if(F.visible===!1)return;if(F.layers.test(P.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&C===Ca)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,F.matrixWorld);const $=e.update(F),dt=F.material;if(Array.isArray(dt)){const ht=$.groups;for(let q=0,ot=ht.length;q<ot;q++){const X=ht[q],xt=dt[X.materialIndex];if(xt&&xt.visible){const yt=z(F,xt,U,C);F.onBeforeShadow(o,F,P,B,$,yt,X),o.renderBufferDirect(B,null,$,yt,F,X),F.onAfterShadow(o,F,P,B,$,yt,X)}}}else if(dt.visible){const ht=z(F,dt,U,C);F.onBeforeShadow(o,F,P,B,$,ht,null),o.renderBufferDirect(B,null,$,ht,F,null),F.onAfterShadow(o,F,P,B,$,ht,null)}}const at=F.children;for(let $=0,dt=at.length;$<dt;$++)D(at[$],P,B,U,C)}function j(F){F.target.removeEventListener("dispose",j);for(const B in _){const U=_[B],C=F.target.uuid;C in U&&(U[C].dispose(),delete U[C])}}}const HC={[Kd]:Qd,[Jd]:ep,[$d]:np,[po]:tp,[Qd]:Kd,[ep]:Jd,[np]:$d,[tp]:po};function GC(o,e){function i(){let k=!1;const Et=new rn;let lt=null;const gt=new rn(0,0,0,0);return{setMask:function(wt){lt!==wt&&!k&&(o.colorMask(wt,wt,wt,wt),lt=wt)},setLocked:function(wt){k=wt},setClear:function(wt,Lt,ne,ke,ln){ln===!0&&(wt*=ke,Lt*=ke,ne*=ke),Et.set(wt,Lt,ne,ke),gt.equals(Et)===!1&&(o.clearColor(wt,Lt,ne,ke),gt.copy(Et))},reset:function(){k=!1,lt=null,gt.set(-1,0,0,0)}}}function s(){let k=!1,Et=!1,lt=null,gt=null,wt=null;return{setReversed:function(Lt){if(Et!==Lt){const ne=e.get("EXT_clip_control");Et?ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.ZERO_TO_ONE_EXT):ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.NEGATIVE_ONE_TO_ONE_EXT);const ke=wt;wt=null,this.setClear(ke)}Et=Lt},getReversed:function(){return Et},setTest:function(Lt){Lt?ft(o.DEPTH_TEST):St(o.DEPTH_TEST)},setMask:function(Lt){lt!==Lt&&!k&&(o.depthMask(Lt),lt=Lt)},setFunc:function(Lt){if(Et&&(Lt=HC[Lt]),gt!==Lt){switch(Lt){case Kd:o.depthFunc(o.NEVER);break;case Qd:o.depthFunc(o.ALWAYS);break;case Jd:o.depthFunc(o.LESS);break;case po:o.depthFunc(o.LEQUAL);break;case $d:o.depthFunc(o.EQUAL);break;case tp:o.depthFunc(o.GEQUAL);break;case ep:o.depthFunc(o.GREATER);break;case np:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}gt=Lt}},setLocked:function(Lt){k=Lt},setClear:function(Lt){wt!==Lt&&(Et&&(Lt=1-Lt),o.clearDepth(Lt),wt=Lt)},reset:function(){k=!1,lt=null,gt=null,wt=null,Et=!1}}}function l(){let k=!1,Et=null,lt=null,gt=null,wt=null,Lt=null,ne=null,ke=null,ln=null;return{setTest:function(ye){k||(ye?ft(o.STENCIL_TEST):St(o.STENCIL_TEST))},setMask:function(ye){Et!==ye&&!k&&(o.stencilMask(ye),Et=ye)},setFunc:function(ye,Ne,en){(lt!==ye||gt!==Ne||wt!==en)&&(o.stencilFunc(ye,Ne,en),lt=ye,gt=Ne,wt=en)},setOp:function(ye,Ne,en){(Lt!==ye||ne!==Ne||ke!==en)&&(o.stencilOp(ye,Ne,en),Lt=ye,ne=Ne,ke=en)},setLocked:function(ye){k=ye},setClear:function(ye){ln!==ye&&(o.clearStencil(ye),ln=ye)},reset:function(){k=!1,Et=null,lt=null,gt=null,wt=null,Lt=null,ne=null,ke=null,ln=null}}}const f=new i,h=new s,d=new l,p=new WeakMap,_=new WeakMap;let v={},g={},x=new WeakMap,E=[],b=null,A=!1,M=null,S=null,O=null,z=null,D=null,j=null,F=null,P=new Te(0,0,0),B=0,U=!1,C=null,H=null,at=null,$=null,dt=null;const ht=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,ot=0;const X=o.getParameter(o.VERSION);X.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(X)[1]),q=ot>=1):X.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),q=ot>=2);let xt=null,yt={};const Rt=o.getParameter(o.SCISSOR_BOX),zt=o.getParameter(o.VIEWPORT),Wt=new rn().fromArray(Rt),N=new rn().fromArray(zt);function W(k,Et,lt,gt){const wt=new Uint8Array(4),Lt=o.createTexture();o.bindTexture(k,Lt),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ne=0;ne<lt;ne++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Et,0,o.RGBA,1,1,gt,0,o.RGBA,o.UNSIGNED_BYTE,wt):o.texImage2D(Et+ne,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,wt);return Lt}const tt={};tt[o.TEXTURE_2D]=W(o.TEXTURE_2D,o.TEXTURE_2D,1),tt[o.TEXTURE_CUBE_MAP]=W(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[o.TEXTURE_2D_ARRAY]=W(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),tt[o.TEXTURE_3D]=W(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ft(o.DEPTH_TEST),h.setFunc(po),se(!1),$t(bv),ft(o.CULL_FACE),G(gs);function ft(k){v[k]!==!0&&(o.enable(k),v[k]=!0)}function St(k){v[k]!==!1&&(o.disable(k),v[k]=!1)}function Bt(k,Et){return g[k]!==Et?(o.bindFramebuffer(k,Et),g[k]=Et,k===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Et),k===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Et),!0):!1}function Nt(k,Et){let lt=E,gt=!1;if(k){lt=x.get(Et),lt===void 0&&(lt=[],x.set(Et,lt));const wt=k.textures;if(lt.length!==wt.length||lt[0]!==o.COLOR_ATTACHMENT0){for(let Lt=0,ne=wt.length;Lt<ne;Lt++)lt[Lt]=o.COLOR_ATTACHMENT0+Lt;lt.length=wt.length,gt=!0}}else lt[0]!==o.BACK&&(lt[0]=o.BACK,gt=!0);gt&&o.drawBuffers(lt)}function bt(k){return b!==k?(o.useProgram(k),b=k,!0):!1}const Gt={[Qs]:o.FUNC_ADD,[P1]:o.FUNC_SUBTRACT,[I1]:o.FUNC_REVERSE_SUBTRACT};Gt[F1]=o.MIN,Gt[B1]=o.MAX;const ae={[H1]:o.ZERO,[G1]:o.ONE,[V1]:o.SRC_COLOR,[Wd]:o.SRC_ALPHA,[W1]:o.SRC_ALPHA_SATURATE,[q1]:o.DST_COLOR,[k1]:o.DST_ALPHA,[j1]:o.ONE_MINUS_SRC_COLOR,[Zd]:o.ONE_MINUS_SRC_ALPHA,[Y1]:o.ONE_MINUS_DST_COLOR,[X1]:o.ONE_MINUS_DST_ALPHA,[Z1]:o.CONSTANT_COLOR,[K1]:o.ONE_MINUS_CONSTANT_COLOR,[Q1]:o.CONSTANT_ALPHA,[J1]:o.ONE_MINUS_CONSTANT_ALPHA};function G(k,Et,lt,gt,wt,Lt,ne,ke,ln,ye){if(k===gs){A===!0&&(St(o.BLEND),A=!1);return}if(A===!1&&(ft(o.BLEND),A=!0),k!==z1){if(k!==M||ye!==U){if((S!==Qs||D!==Qs)&&(o.blendEquation(o.FUNC_ADD),S=Qs,D=Qs),ye)switch(k){case uo:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Tv:o.blendFunc(o.ONE,o.ONE);break;case Av:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Rv:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case uo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Tv:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Av:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Rv:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}O=null,z=null,j=null,F=null,P.set(0,0,0),B=0,M=k,U=ye}return}wt=wt||Et,Lt=Lt||lt,ne=ne||gt,(Et!==S||wt!==D)&&(o.blendEquationSeparate(Gt[Et],Gt[wt]),S=Et,D=wt),(lt!==O||gt!==z||Lt!==j||ne!==F)&&(o.blendFuncSeparate(ae[lt],ae[gt],ae[Lt],ae[ne]),O=lt,z=gt,j=Lt,F=ne),(ke.equals(P)===!1||ln!==B)&&(o.blendColor(ke.r,ke.g,ke.b,ln),P.copy(ke),B=ln),M=k,U=!1}function on(k,Et){k.side===ia?St(o.CULL_FACE):ft(o.CULL_FACE);let lt=k.side===ei;Et&&(lt=!lt),se(lt),k.blending===uo&&k.transparent===!1?G(gs):G(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),f.setMask(k.colorWrite);const gt=k.stencilWrite;d.setTest(gt),gt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),_e(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ft(o.SAMPLE_ALPHA_TO_COVERAGE):St(o.SAMPLE_ALPHA_TO_COVERAGE)}function se(k){C!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),C=k)}function $t(k){k!==L1?(ft(o.CULL_FACE),k!==H&&(k===bv?o.cullFace(o.BACK):k===O1?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):St(o.CULL_FACE),H=k}function Ct(k){k!==at&&(q&&o.lineWidth(k),at=k)}function _e(k,Et,lt){k?(ft(o.POLYGON_OFFSET_FILL),($!==Et||dt!==lt)&&(o.polygonOffset(Et,lt),$=Et,dt=lt)):St(o.POLYGON_OFFSET_FILL)}function Vt(k){k?ft(o.SCISSOR_TEST):St(o.SCISSOR_TEST)}function L(k){k===void 0&&(k=o.TEXTURE0+ht-1),xt!==k&&(o.activeTexture(k),xt=k)}function R(k,Et,lt){lt===void 0&&(xt===null?lt=o.TEXTURE0+ht-1:lt=xt);let gt=yt[lt];gt===void 0&&(gt={type:void 0,texture:void 0},yt[lt]=gt),(gt.type!==k||gt.texture!==Et)&&(xt!==lt&&(o.activeTexture(lt),xt=lt),o.bindTexture(k,Et||tt[k]),gt.type=k,gt.texture=Et)}function st(){const k=yt[xt];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function vt(){try{o.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Mt(){try{o.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _t(){try{o.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Yt(){try{o.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ft(){try{o.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function It(){try{o.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function me(){try{o.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function At(){try{o.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function kt(){try{o.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Jt(){try{o.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ee(k){Wt.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),Wt.copy(k))}function jt(k){N.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),N.copy(k))}function de(k,Et){let lt=_.get(Et);lt===void 0&&(lt=new WeakMap,_.set(Et,lt));let gt=lt.get(k);gt===void 0&&(gt=o.getUniformBlockIndex(Et,k.name),lt.set(k,gt))}function ce(k,Et){const gt=_.get(Et).get(k);p.get(Et)!==gt&&(o.uniformBlockBinding(Et,gt,k.__bindingPointIndex),p.set(Et,gt))}function Le(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},xt=null,yt={},g={},x=new WeakMap,E=[],b=null,A=!1,M=null,S=null,O=null,z=null,D=null,j=null,F=null,P=new Te(0,0,0),B=0,U=!1,C=null,H=null,at=null,$=null,dt=null,Wt.set(0,0,o.canvas.width,o.canvas.height),N.set(0,0,o.canvas.width,o.canvas.height),f.reset(),h.reset(),d.reset()}return{buffers:{color:f,depth:h,stencil:d},enable:ft,disable:St,bindFramebuffer:Bt,drawBuffers:Nt,useProgram:bt,setBlending:G,setMaterial:on,setFlipSided:se,setCullFace:$t,setLineWidth:Ct,setPolygonOffset:_e,setScissorTest:Vt,activeTexture:L,bindTexture:R,unbindTexture:st,compressedTexImage2D:vt,compressedTexImage3D:Mt,texImage2D:kt,texImage3D:Jt,updateUBOMapping:de,uniformBlockBinding:ce,texStorage2D:me,texStorage3D:At,texSubImage2D:_t,texSubImage3D:Yt,compressedTexSubImage2D:Ft,compressedTexSubImage3D:It,scissor:ee,viewport:jt,reset:Le}}function VC(o,e,i,s,l,f,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new ue,v=new WeakMap;let g;const x=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(L,R){return E?new OffscreenCanvas(L,R):El("canvas")}function A(L,R,st){let vt=1;const Mt=Vt(L);if((Mt.width>st||Mt.height>st)&&(vt=st/Math.max(Mt.width,Mt.height)),vt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const _t=Math.floor(vt*Mt.width),Yt=Math.floor(vt*Mt.height);g===void 0&&(g=b(_t,Yt));const Ft=R?b(_t,Yt):g;return Ft.width=_t,Ft.height=Yt,Ft.getContext("2d").drawImage(L,0,0,_t,Yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+_t+"x"+Yt+")."),Ft}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),L;return L}function M(L){return L.generateMipmaps}function S(L){o.generateMipmap(L)}function O(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function z(L,R,st,vt,Mt=!1){if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let _t=R;if(R===o.RED&&(st===o.FLOAT&&(_t=o.R32F),st===o.HALF_FLOAT&&(_t=o.R16F),st===o.UNSIGNED_BYTE&&(_t=o.R8)),R===o.RED_INTEGER&&(st===o.UNSIGNED_BYTE&&(_t=o.R8UI),st===o.UNSIGNED_SHORT&&(_t=o.R16UI),st===o.UNSIGNED_INT&&(_t=o.R32UI),st===o.BYTE&&(_t=o.R8I),st===o.SHORT&&(_t=o.R16I),st===o.INT&&(_t=o.R32I)),R===o.RG&&(st===o.FLOAT&&(_t=o.RG32F),st===o.HALF_FLOAT&&(_t=o.RG16F),st===o.UNSIGNED_BYTE&&(_t=o.RG8)),R===o.RG_INTEGER&&(st===o.UNSIGNED_BYTE&&(_t=o.RG8UI),st===o.UNSIGNED_SHORT&&(_t=o.RG16UI),st===o.UNSIGNED_INT&&(_t=o.RG32UI),st===o.BYTE&&(_t=o.RG8I),st===o.SHORT&&(_t=o.RG16I),st===o.INT&&(_t=o.RG32I)),R===o.RGB_INTEGER&&(st===o.UNSIGNED_BYTE&&(_t=o.RGB8UI),st===o.UNSIGNED_SHORT&&(_t=o.RGB16UI),st===o.UNSIGNED_INT&&(_t=o.RGB32UI),st===o.BYTE&&(_t=o.RGB8I),st===o.SHORT&&(_t=o.RGB16I),st===o.INT&&(_t=o.RGB32I)),R===o.RGBA_INTEGER&&(st===o.UNSIGNED_BYTE&&(_t=o.RGBA8UI),st===o.UNSIGNED_SHORT&&(_t=o.RGBA16UI),st===o.UNSIGNED_INT&&(_t=o.RGBA32UI),st===o.BYTE&&(_t=o.RGBA8I),st===o.SHORT&&(_t=o.RGBA16I),st===o.INT&&(_t=o.RGBA32I)),R===o.RGB&&st===o.UNSIGNED_INT_5_9_9_9_REV&&(_t=o.RGB9_E5),R===o.RGBA){const Yt=Mt?Ru:ze.getTransfer(vt);st===o.FLOAT&&(_t=o.RGBA32F),st===o.HALF_FLOAT&&(_t=o.RGBA16F),st===o.UNSIGNED_BYTE&&(_t=Yt===Ve?o.SRGB8_ALPHA8:o.RGBA8),st===o.UNSIGNED_SHORT_4_4_4_4&&(_t=o.RGBA4),st===o.UNSIGNED_SHORT_5_5_5_1&&(_t=o.RGB5_A1)}return(_t===o.R16F||_t===o.R32F||_t===o.RG16F||_t===o.RG32F||_t===o.RGBA16F||_t===o.RGBA32F)&&e.get("EXT_color_buffer_float"),_t}function D(L,R){let st;return L?R===null||R===tr||R===_o?st=o.DEPTH24_STENCIL8:R===Na?st=o.DEPTH32F_STENCIL8:R===Ml&&(st=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===tr||R===_o?st=o.DEPTH_COMPONENT24:R===Na?st=o.DEPTH_COMPONENT32F:R===Ml&&(st=o.DEPTH_COMPONENT16),st}function j(L,R){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==ki&&L.minFilter!==ti?Math.log2(Math.max(R.width,R.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?R.mipmaps.length:1}function F(L){const R=L.target;R.removeEventListener("dispose",F),B(R),R.isVideoTexture&&v.delete(R)}function P(L){const R=L.target;R.removeEventListener("dispose",P),C(R)}function B(L){const R=s.get(L);if(R.__webglInit===void 0)return;const st=L.source,vt=x.get(st);if(vt){const Mt=vt[R.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&U(L),Object.keys(vt).length===0&&x.delete(st)}s.remove(L)}function U(L){const R=s.get(L);o.deleteTexture(R.__webglTexture);const st=L.source,vt=x.get(st);delete vt[R.__cacheKey],h.memory.textures--}function C(L){const R=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let vt=0;vt<6;vt++){if(Array.isArray(R.__webglFramebuffer[vt]))for(let Mt=0;Mt<R.__webglFramebuffer[vt].length;Mt++)o.deleteFramebuffer(R.__webglFramebuffer[vt][Mt]);else o.deleteFramebuffer(R.__webglFramebuffer[vt]);R.__webglDepthbuffer&&o.deleteRenderbuffer(R.__webglDepthbuffer[vt])}else{if(Array.isArray(R.__webglFramebuffer))for(let vt=0;vt<R.__webglFramebuffer.length;vt++)o.deleteFramebuffer(R.__webglFramebuffer[vt]);else o.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&o.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&o.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let vt=0;vt<R.__webglColorRenderbuffer.length;vt++)R.__webglColorRenderbuffer[vt]&&o.deleteRenderbuffer(R.__webglColorRenderbuffer[vt]);R.__webglDepthRenderbuffer&&o.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const st=L.textures;for(let vt=0,Mt=st.length;vt<Mt;vt++){const _t=s.get(st[vt]);_t.__webglTexture&&(o.deleteTexture(_t.__webglTexture),h.memory.textures--),s.remove(st[vt])}s.remove(L)}let H=0;function at(){H=0}function $(){const L=H;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),H+=1,L}function dt(L){const R=[];return R.push(L.wrapS),R.push(L.wrapT),R.push(L.wrapR||0),R.push(L.magFilter),R.push(L.minFilter),R.push(L.anisotropy),R.push(L.internalFormat),R.push(L.format),R.push(L.type),R.push(L.generateMipmaps),R.push(L.premultiplyAlpha),R.push(L.flipY),R.push(L.unpackAlignment),R.push(L.colorSpace),R.join()}function ht(L,R){const st=s.get(L);if(L.isVideoTexture&&Ct(L),L.isRenderTargetTexture===!1&&L.version>0&&st.__version!==L.version){const vt=L.image;if(vt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(vt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{N(st,L,R);return}}i.bindTexture(o.TEXTURE_2D,st.__webglTexture,o.TEXTURE0+R)}function q(L,R){const st=s.get(L);if(L.version>0&&st.__version!==L.version){N(st,L,R);return}i.bindTexture(o.TEXTURE_2D_ARRAY,st.__webglTexture,o.TEXTURE0+R)}function ot(L,R){const st=s.get(L);if(L.version>0&&st.__version!==L.version){N(st,L,R);return}i.bindTexture(o.TEXTURE_3D,st.__webglTexture,o.TEXTURE0+R)}function X(L,R){const st=s.get(L);if(L.version>0&&st.__version!==L.version){W(st,L,R);return}i.bindTexture(o.TEXTURE_CUBE_MAP,st.__webglTexture,o.TEXTURE0+R)}const xt={[sp]:o.REPEAT,[wa]:o.CLAMP_TO_EDGE,[rp]:o.MIRRORED_REPEAT},yt={[ki]:o.NEAREST,[lb]:o.NEAREST_MIPMAP_NEAREST,[Zc]:o.NEAREST_MIPMAP_LINEAR,[ti]:o.LINEAR,[pd]:o.LINEAR_MIPMAP_NEAREST,[$s]:o.LINEAR_MIPMAP_LINEAR},Rt={[hb]:o.NEVER,[vb]:o.ALWAYS,[db]:o.LESS,[Vy]:o.LEQUAL,[pb]:o.EQUAL,[_b]:o.GEQUAL,[mb]:o.GREATER,[gb]:o.NOTEQUAL};function zt(L,R){if(R.type===Na&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===ti||R.magFilter===pd||R.magFilter===Zc||R.magFilter===$s||R.minFilter===ti||R.minFilter===pd||R.minFilter===Zc||R.minFilter===$s)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,xt[R.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,xt[R.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,xt[R.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,yt[R.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,yt[R.minFilter]),R.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,Rt[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===ki||R.minFilter!==Zc&&R.minFilter!==$s||R.type===Na&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||s.get(R).__currentAnisotropy){const st=e.get("EXT_texture_filter_anisotropic");o.texParameterf(L,st.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,l.getMaxAnisotropy())),s.get(R).__currentAnisotropy=R.anisotropy}}}function Wt(L,R){let st=!1;L.__webglInit===void 0&&(L.__webglInit=!0,R.addEventListener("dispose",F));const vt=R.source;let Mt=x.get(vt);Mt===void 0&&(Mt={},x.set(vt,Mt));const _t=dt(R);if(_t!==L.__cacheKey){Mt[_t]===void 0&&(Mt[_t]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,st=!0),Mt[_t].usedTimes++;const Yt=Mt[L.__cacheKey];Yt!==void 0&&(Mt[L.__cacheKey].usedTimes--,Yt.usedTimes===0&&U(R)),L.__cacheKey=_t,L.__webglTexture=Mt[_t].texture}return st}function N(L,R,st){let vt=o.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(vt=o.TEXTURE_2D_ARRAY),R.isData3DTexture&&(vt=o.TEXTURE_3D);const Mt=Wt(L,R),_t=R.source;i.bindTexture(vt,L.__webglTexture,o.TEXTURE0+st);const Yt=s.get(_t);if(_t.version!==Yt.__version||Mt===!0){i.activeTexture(o.TEXTURE0+st);const Ft=ze.getPrimaries(ze.workingColorSpace),It=R.colorSpace===ms?null:ze.getPrimaries(R.colorSpace),me=R.colorSpace===ms||Ft===It?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,R.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,R.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let At=A(R.image,!1,l.maxTextureSize);At=_e(R,At);const kt=f.convert(R.format,R.colorSpace),Jt=f.convert(R.type);let ee=z(R.internalFormat,kt,Jt,R.colorSpace,R.isVideoTexture);zt(vt,R);let jt;const de=R.mipmaps,ce=R.isVideoTexture!==!0,Le=Yt.__version===void 0||Mt===!0,k=_t.dataReady,Et=j(R,At);if(R.isDepthTexture)ee=D(R.format===vo,R.type),Le&&(ce?i.texStorage2D(o.TEXTURE_2D,1,ee,At.width,At.height):i.texImage2D(o.TEXTURE_2D,0,ee,At.width,At.height,0,kt,Jt,null));else if(R.isDataTexture)if(de.length>0){ce&&Le&&i.texStorage2D(o.TEXTURE_2D,Et,ee,de[0].width,de[0].height);for(let lt=0,gt=de.length;lt<gt;lt++)jt=de[lt],ce?k&&i.texSubImage2D(o.TEXTURE_2D,lt,0,0,jt.width,jt.height,kt,Jt,jt.data):i.texImage2D(o.TEXTURE_2D,lt,ee,jt.width,jt.height,0,kt,Jt,jt.data);R.generateMipmaps=!1}else ce?(Le&&i.texStorage2D(o.TEXTURE_2D,Et,ee,At.width,At.height),k&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,At.width,At.height,kt,Jt,At.data)):i.texImage2D(o.TEXTURE_2D,0,ee,At.width,At.height,0,kt,Jt,At.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){ce&&Le&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Et,ee,de[0].width,de[0].height,At.depth);for(let lt=0,gt=de.length;lt<gt;lt++)if(jt=de[lt],R.format!==ji)if(kt!==null)if(ce){if(k)if(R.layerUpdates.size>0){const wt=ax(jt.width,jt.height,R.format,R.type);for(const Lt of R.layerUpdates){const ne=jt.data.subarray(Lt*wt/jt.data.BYTES_PER_ELEMENT,(Lt+1)*wt/jt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,lt,0,0,Lt,jt.width,jt.height,1,kt,ne)}R.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,lt,0,0,0,jt.width,jt.height,At.depth,kt,jt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,lt,ee,jt.width,jt.height,At.depth,0,jt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ce?k&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,lt,0,0,0,jt.width,jt.height,At.depth,kt,Jt,jt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,lt,ee,jt.width,jt.height,At.depth,0,kt,Jt,jt.data)}else{ce&&Le&&i.texStorage2D(o.TEXTURE_2D,Et,ee,de[0].width,de[0].height);for(let lt=0,gt=de.length;lt<gt;lt++)jt=de[lt],R.format!==ji?kt!==null?ce?k&&i.compressedTexSubImage2D(o.TEXTURE_2D,lt,0,0,jt.width,jt.height,kt,jt.data):i.compressedTexImage2D(o.TEXTURE_2D,lt,ee,jt.width,jt.height,0,jt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?k&&i.texSubImage2D(o.TEXTURE_2D,lt,0,0,jt.width,jt.height,kt,Jt,jt.data):i.texImage2D(o.TEXTURE_2D,lt,ee,jt.width,jt.height,0,kt,Jt,jt.data)}else if(R.isDataArrayTexture)if(ce){if(Le&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Et,ee,At.width,At.height,At.depth),k)if(R.layerUpdates.size>0){const lt=ax(At.width,At.height,R.format,R.type);for(const gt of R.layerUpdates){const wt=At.data.subarray(gt*lt/At.data.BYTES_PER_ELEMENT,(gt+1)*lt/At.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,gt,At.width,At.height,1,kt,Jt,wt)}R.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,kt,Jt,At.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,ee,At.width,At.height,At.depth,0,kt,Jt,At.data);else if(R.isData3DTexture)ce?(Le&&i.texStorage3D(o.TEXTURE_3D,Et,ee,At.width,At.height,At.depth),k&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,kt,Jt,At.data)):i.texImage3D(o.TEXTURE_3D,0,ee,At.width,At.height,At.depth,0,kt,Jt,At.data);else if(R.isFramebufferTexture){if(Le)if(ce)i.texStorage2D(o.TEXTURE_2D,Et,ee,At.width,At.height);else{let lt=At.width,gt=At.height;for(let wt=0;wt<Et;wt++)i.texImage2D(o.TEXTURE_2D,wt,ee,lt,gt,0,kt,Jt,null),lt>>=1,gt>>=1}}else if(de.length>0){if(ce&&Le){const lt=Vt(de[0]);i.texStorage2D(o.TEXTURE_2D,Et,ee,lt.width,lt.height)}for(let lt=0,gt=de.length;lt<gt;lt++)jt=de[lt],ce?k&&i.texSubImage2D(o.TEXTURE_2D,lt,0,0,kt,Jt,jt):i.texImage2D(o.TEXTURE_2D,lt,ee,kt,Jt,jt);R.generateMipmaps=!1}else if(ce){if(Le){const lt=Vt(At);i.texStorage2D(o.TEXTURE_2D,Et,ee,lt.width,lt.height)}k&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,kt,Jt,At)}else i.texImage2D(o.TEXTURE_2D,0,ee,kt,Jt,At);M(R)&&S(vt),Yt.__version=_t.version,R.onUpdate&&R.onUpdate(R)}L.__version=R.version}function W(L,R,st){if(R.image.length!==6)return;const vt=Wt(L,R),Mt=R.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+st);const _t=s.get(Mt);if(Mt.version!==_t.__version||vt===!0){i.activeTexture(o.TEXTURE0+st);const Yt=ze.getPrimaries(ze.workingColorSpace),Ft=R.colorSpace===ms?null:ze.getPrimaries(R.colorSpace),It=R.colorSpace===ms||Yt===Ft?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,R.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,R.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);const me=R.isCompressedTexture||R.image[0].isCompressedTexture,At=R.image[0]&&R.image[0].isDataTexture,kt=[];for(let gt=0;gt<6;gt++)!me&&!At?kt[gt]=A(R.image[gt],!0,l.maxCubemapSize):kt[gt]=At?R.image[gt].image:R.image[gt],kt[gt]=_e(R,kt[gt]);const Jt=kt[0],ee=f.convert(R.format,R.colorSpace),jt=f.convert(R.type),de=z(R.internalFormat,ee,jt,R.colorSpace),ce=R.isVideoTexture!==!0,Le=_t.__version===void 0||vt===!0,k=Mt.dataReady;let Et=j(R,Jt);zt(o.TEXTURE_CUBE_MAP,R);let lt;if(me){ce&&Le&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Et,de,Jt.width,Jt.height);for(let gt=0;gt<6;gt++){lt=kt[gt].mipmaps;for(let wt=0;wt<lt.length;wt++){const Lt=lt[wt];R.format!==ji?ee!==null?ce?k&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,wt,0,0,Lt.width,Lt.height,ee,Lt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,wt,de,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ce?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,wt,0,0,Lt.width,Lt.height,ee,jt,Lt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,wt,de,Lt.width,Lt.height,0,ee,jt,Lt.data)}}}else{if(lt=R.mipmaps,ce&&Le){lt.length>0&&Et++;const gt=Vt(kt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Et,de,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(At){ce?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,kt[gt].width,kt[gt].height,ee,jt,kt[gt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,de,kt[gt].width,kt[gt].height,0,ee,jt,kt[gt].data);for(let wt=0;wt<lt.length;wt++){const ne=lt[wt].image[gt].image;ce?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,wt+1,0,0,ne.width,ne.height,ee,jt,ne.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,wt+1,de,ne.width,ne.height,0,ee,jt,ne.data)}}else{ce?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,ee,jt,kt[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,de,ee,jt,kt[gt]);for(let wt=0;wt<lt.length;wt++){const Lt=lt[wt];ce?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,wt+1,0,0,ee,jt,Lt.image[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,wt+1,de,ee,jt,Lt.image[gt])}}}M(R)&&S(o.TEXTURE_CUBE_MAP),_t.__version=Mt.version,R.onUpdate&&R.onUpdate(R)}L.__version=R.version}function tt(L,R,st,vt,Mt,_t){const Yt=f.convert(st.format,st.colorSpace),Ft=f.convert(st.type),It=z(st.internalFormat,Yt,Ft,st.colorSpace),me=s.get(R),At=s.get(st);if(At.__renderTarget=R,!me.__hasExternalTextures){const kt=Math.max(1,R.width>>_t),Jt=Math.max(1,R.height>>_t);Mt===o.TEXTURE_3D||Mt===o.TEXTURE_2D_ARRAY?i.texImage3D(Mt,_t,It,kt,Jt,R.depth,0,Yt,Ft,null):i.texImage2D(Mt,_t,It,kt,Jt,0,Yt,Ft,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),$t(R)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,vt,Mt,At.__webglTexture,0,se(R)):(Mt===o.TEXTURE_2D||Mt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,vt,Mt,At.__webglTexture,_t),i.bindFramebuffer(o.FRAMEBUFFER,null)}function ft(L,R,st){if(o.bindRenderbuffer(o.RENDERBUFFER,L),R.depthBuffer){const vt=R.depthTexture,Mt=vt&&vt.isDepthTexture?vt.type:null,_t=D(R.stencilBuffer,Mt),Yt=R.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ft=se(R);$t(R)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ft,_t,R.width,R.height):st?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ft,_t,R.width,R.height):o.renderbufferStorage(o.RENDERBUFFER,_t,R.width,R.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Yt,o.RENDERBUFFER,L)}else{const vt=R.textures;for(let Mt=0;Mt<vt.length;Mt++){const _t=vt[Mt],Yt=f.convert(_t.format,_t.colorSpace),Ft=f.convert(_t.type),It=z(_t.internalFormat,Yt,Ft,_t.colorSpace),me=se(R);st&&$t(R)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,me,It,R.width,R.height):$t(R)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,me,It,R.width,R.height):o.renderbufferStorage(o.RENDERBUFFER,It,R.width,R.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function St(L,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const vt=s.get(R.depthTexture);vt.__renderTarget=R,(!vt.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),ht(R.depthTexture,0);const Mt=vt.__webglTexture,_t=se(R);if(R.depthTexture.format===fo)$t(R)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Mt,0,_t):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Mt,0);else if(R.depthTexture.format===vo)$t(R)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Mt,0,_t):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Mt,0);else throw new Error("Unknown depthTexture format")}function Bt(L){const R=s.get(L),st=L.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==L.depthTexture){const vt=L.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),vt){const Mt=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,vt.removeEventListener("dispose",Mt)};vt.addEventListener("dispose",Mt),R.__depthDisposeCallback=Mt}R.__boundDepthTexture=vt}if(L.depthTexture&&!R.__autoAllocateDepthBuffer){if(st)throw new Error("target.depthTexture not supported in Cube render targets");St(R.__webglFramebuffer,L)}else if(st){R.__webglDepthbuffer=[];for(let vt=0;vt<6;vt++)if(i.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer[vt]),R.__webglDepthbuffer[vt]===void 0)R.__webglDepthbuffer[vt]=o.createRenderbuffer(),ft(R.__webglDepthbuffer[vt],L,!1);else{const Mt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,_t=R.__webglDepthbuffer[vt];o.bindRenderbuffer(o.RENDERBUFFER,_t),o.framebufferRenderbuffer(o.FRAMEBUFFER,Mt,o.RENDERBUFFER,_t)}}else if(i.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=o.createRenderbuffer(),ft(R.__webglDepthbuffer,L,!1);else{const vt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Mt=R.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Mt),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,Mt)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Nt(L,R,st){const vt=s.get(L);R!==void 0&&tt(vt.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),st!==void 0&&Bt(L)}function bt(L){const R=L.texture,st=s.get(L),vt=s.get(R);L.addEventListener("dispose",P);const Mt=L.textures,_t=L.isWebGLCubeRenderTarget===!0,Yt=Mt.length>1;if(Yt||(vt.__webglTexture===void 0&&(vt.__webglTexture=o.createTexture()),vt.__version=R.version,h.memory.textures++),_t){st.__webglFramebuffer=[];for(let Ft=0;Ft<6;Ft++)if(R.mipmaps&&R.mipmaps.length>0){st.__webglFramebuffer[Ft]=[];for(let It=0;It<R.mipmaps.length;It++)st.__webglFramebuffer[Ft][It]=o.createFramebuffer()}else st.__webglFramebuffer[Ft]=o.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){st.__webglFramebuffer=[];for(let Ft=0;Ft<R.mipmaps.length;Ft++)st.__webglFramebuffer[Ft]=o.createFramebuffer()}else st.__webglFramebuffer=o.createFramebuffer();if(Yt)for(let Ft=0,It=Mt.length;Ft<It;Ft++){const me=s.get(Mt[Ft]);me.__webglTexture===void 0&&(me.__webglTexture=o.createTexture(),h.memory.textures++)}if(L.samples>0&&$t(L)===!1){st.__webglMultisampledFramebuffer=o.createFramebuffer(),st.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,st.__webglMultisampledFramebuffer);for(let Ft=0;Ft<Mt.length;Ft++){const It=Mt[Ft];st.__webglColorRenderbuffer[Ft]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,st.__webglColorRenderbuffer[Ft]);const me=f.convert(It.format,It.colorSpace),At=f.convert(It.type),kt=z(It.internalFormat,me,At,It.colorSpace,L.isXRRenderTarget===!0),Jt=se(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,Jt,kt,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ft,o.RENDERBUFFER,st.__webglColorRenderbuffer[Ft])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(st.__webglDepthRenderbuffer=o.createRenderbuffer(),ft(st.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(_t){i.bindTexture(o.TEXTURE_CUBE_MAP,vt.__webglTexture),zt(o.TEXTURE_CUBE_MAP,R);for(let Ft=0;Ft<6;Ft++)if(R.mipmaps&&R.mipmaps.length>0)for(let It=0;It<R.mipmaps.length;It++)tt(st.__webglFramebuffer[Ft][It],L,R,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,It);else tt(st.__webglFramebuffer[Ft],L,R,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0);M(R)&&S(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Yt){for(let Ft=0,It=Mt.length;Ft<It;Ft++){const me=Mt[Ft],At=s.get(me);i.bindTexture(o.TEXTURE_2D,At.__webglTexture),zt(o.TEXTURE_2D,me),tt(st.__webglFramebuffer,L,me,o.COLOR_ATTACHMENT0+Ft,o.TEXTURE_2D,0),M(me)&&S(o.TEXTURE_2D)}i.unbindTexture()}else{let Ft=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ft=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ft,vt.__webglTexture),zt(Ft,R),R.mipmaps&&R.mipmaps.length>0)for(let It=0;It<R.mipmaps.length;It++)tt(st.__webglFramebuffer[It],L,R,o.COLOR_ATTACHMENT0,Ft,It);else tt(st.__webglFramebuffer,L,R,o.COLOR_ATTACHMENT0,Ft,0);M(R)&&S(Ft),i.unbindTexture()}L.depthBuffer&&Bt(L)}function Gt(L){const R=L.textures;for(let st=0,vt=R.length;st<vt;st++){const Mt=R[st];if(M(Mt)){const _t=O(L),Yt=s.get(Mt).__webglTexture;i.bindTexture(_t,Yt),S(_t),i.unbindTexture()}}}const ae=[],G=[];function on(L){if(L.samples>0){if($t(L)===!1){const R=L.textures,st=L.width,vt=L.height;let Mt=o.COLOR_BUFFER_BIT;const _t=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Yt=s.get(L),Ft=R.length>1;if(Ft)for(let It=0;It<R.length;It++)i.bindFramebuffer(o.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+It,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Yt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+It,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer);for(let It=0;It<R.length;It++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Mt|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Mt|=o.STENCIL_BUFFER_BIT)),Ft){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Yt.__webglColorRenderbuffer[It]);const me=s.get(R[It]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,me,0)}o.blitFramebuffer(0,0,st,vt,0,0,st,vt,Mt,o.NEAREST),p===!0&&(ae.length=0,G.length=0,ae.push(o.COLOR_ATTACHMENT0+It),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ae.push(_t),G.push(_t),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,G)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ae))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ft)for(let It=0;It<R.length;It++){i.bindFramebuffer(o.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+It,o.RENDERBUFFER,Yt.__webglColorRenderbuffer[It]);const me=s.get(R[It]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Yt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+It,o.TEXTURE_2D,me,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&p){const R=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[R])}}}function se(L){return Math.min(l.maxSamples,L.samples)}function $t(L){const R=s.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Ct(L){const R=h.render.frame;v.get(L)!==R&&(v.set(L,R),L.update())}function _e(L,R){const st=L.colorSpace,vt=L.format,Mt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||st!==xo&&st!==ms&&(ze.getTransfer(st)===Ve?(vt!==ji||Mt!==La)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",st)),R}function Vt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(_.width=L.naturalWidth||L.width,_.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(_.width=L.displayWidth,_.height=L.displayHeight):(_.width=L.width,_.height=L.height),_}this.allocateTextureUnit=$,this.resetTextureUnits=at,this.setTexture2D=ht,this.setTexture2DArray=q,this.setTexture3D=ot,this.setTextureCube=X,this.rebindTextures=Nt,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=on,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=$t}function jC(o,e){function i(s,l=ms){let f;const h=ze.getTransfer(l);if(s===La)return o.UNSIGNED_BYTE;if(s===jp)return o.UNSIGNED_SHORT_4_4_4_4;if(s===kp)return o.UNSIGNED_SHORT_5_5_5_1;if(s===Ly)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===Dy)return o.BYTE;if(s===Uy)return o.SHORT;if(s===Ml)return o.UNSIGNED_SHORT;if(s===Vp)return o.INT;if(s===tr)return o.UNSIGNED_INT;if(s===Na)return o.FLOAT;if(s===bl)return o.HALF_FLOAT;if(s===Oy)return o.ALPHA;if(s===zy)return o.RGB;if(s===ji)return o.RGBA;if(s===Py)return o.LUMINANCE;if(s===Iy)return o.LUMINANCE_ALPHA;if(s===fo)return o.DEPTH_COMPONENT;if(s===vo)return o.DEPTH_STENCIL;if(s===Fy)return o.RED;if(s===Xp)return o.RED_INTEGER;if(s===By)return o.RG;if(s===qp)return o.RG_INTEGER;if(s===Yp)return o.RGBA_INTEGER;if(s===xu||s===yu||s===Su||s===Mu)if(h===Ve)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(s===xu)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===yu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Su)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Mu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(s===xu)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===yu)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Su)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Mu)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===op||s===lp||s===cp||s===up)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(s===op)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===lp)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===cp)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===up)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===fp||s===hp||s===dp)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(s===fp||s===hp)return h===Ve?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(s===dp)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===pp||s===mp||s===gp||s===_p||s===vp||s===xp||s===yp||s===Sp||s===Mp||s===Ep||s===bp||s===Tp||s===Ap||s===Rp)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(s===pp)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===mp)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===gp)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===_p)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===vp)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===xp)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===yp)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Sp)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Mp)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ep)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===bp)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Tp)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ap)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Rp)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Eu||s===Cp||s===wp)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(s===Eu)return h===Ve?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Cp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===wp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Hy||s===Np||s===Dp||s===Up)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(s===Eu)return f.COMPRESSED_RED_RGTC1_EXT;if(s===Np)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Dp)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Up)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===_o?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const kC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class qC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,s){if(this.texture===null){const l=new Gn,f=e.properties.get(l);f.__webglTexture=i.texture,(i.depthNear!==s.depthNear||i.depthFar!==s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new xs({vertexShader:kC,fragmentShader:XC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new pi(new Cl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class YC extends ir{constructor(e,i){super();const s=this;let l=null,f=1,h=null,d="local-floor",p=1,_=null,v=null,g=null,x=null,E=null,b=null;const A=new qC,M=i.getContextAttributes();let S=null,O=null;const z=[],D=[],j=new ue;let F=null;const P=new Ri;P.viewport=new rn;const B=new Ri;B.viewport=new rn;const U=[P,B],C=new fT;let H=null,at=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let W=z[N];return W===void 0&&(W=new zd,z[N]=W),W.getTargetRaySpace()},this.getControllerGrip=function(N){let W=z[N];return W===void 0&&(W=new zd,z[N]=W),W.getGripSpace()},this.getHand=function(N){let W=z[N];return W===void 0&&(W=new zd,z[N]=W),W.getHandSpace()};function $(N){const W=D.indexOf(N.inputSource);if(W===-1)return;const tt=z[W];tt!==void 0&&(tt.update(N.inputSource,N.frame,_||h),tt.dispatchEvent({type:N.type,data:N.inputSource}))}function dt(){l.removeEventListener("select",$),l.removeEventListener("selectstart",$),l.removeEventListener("selectend",$),l.removeEventListener("squeeze",$),l.removeEventListener("squeezestart",$),l.removeEventListener("squeezeend",$),l.removeEventListener("end",dt),l.removeEventListener("inputsourceschange",ht);for(let N=0;N<z.length;N++){const W=D[N];W!==null&&(D[N]=null,z[N].disconnect(W))}H=null,at=null,A.reset(),e.setRenderTarget(S),E=null,x=null,g=null,l=null,O=null,Wt.stop(),s.isPresenting=!1,e.setPixelRatio(F),e.setSize(j.width,j.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){f=N,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){d=N,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return _||h},this.setReferenceSpace=function(N){_=N},this.getBaseLayer=function(){return x!==null?x:E},this.getBinding=function(){return g},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(N){if(l=N,l!==null){if(S=e.getRenderTarget(),l.addEventListener("select",$),l.addEventListener("selectstart",$),l.addEventListener("selectend",$),l.addEventListener("squeeze",$),l.addEventListener("squeezestart",$),l.addEventListener("squeezeend",$),l.addEventListener("end",dt),l.addEventListener("inputsourceschange",ht),M.xrCompatible!==!0&&await i.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(j),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let tt=null,ft=null,St=null;M.depth&&(St=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,tt=M.stencil?vo:fo,ft=M.stencil?_o:tr);const Bt={colorFormat:i.RGBA8,depthFormat:St,scaleFactor:f};g=new XRWebGLBinding(l,i),x=g.createProjectionLayer(Bt),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),O=new er(x.textureWidth,x.textureHeight,{format:ji,type:La,depthTexture:new $y(x.textureWidth,x.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const tt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:f};E=new XRWebGLLayer(l,i,tt),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),O=new er(E.framebufferWidth,E.framebufferHeight,{format:ji,type:La,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(p),_=null,h=await l.requestReferenceSpace(d),Wt.setContext(l),Wt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function ht(N){for(let W=0;W<N.removed.length;W++){const tt=N.removed[W],ft=D.indexOf(tt);ft>=0&&(D[ft]=null,z[ft].disconnect(tt))}for(let W=0;W<N.added.length;W++){const tt=N.added[W];let ft=D.indexOf(tt);if(ft===-1){for(let Bt=0;Bt<z.length;Bt++)if(Bt>=D.length){D.push(tt),ft=Bt;break}else if(D[Bt]===null){D[Bt]=tt,ft=Bt;break}if(ft===-1)break}const St=z[ft];St&&St.connect(tt)}}const q=new nt,ot=new nt;function X(N,W,tt){q.setFromMatrixPosition(W.matrixWorld),ot.setFromMatrixPosition(tt.matrixWorld);const ft=q.distanceTo(ot),St=W.projectionMatrix.elements,Bt=tt.projectionMatrix.elements,Nt=St[14]/(St[10]-1),bt=St[14]/(St[10]+1),Gt=(St[9]+1)/St[5],ae=(St[9]-1)/St[5],G=(St[8]-1)/St[0],on=(Bt[8]+1)/Bt[0],se=Nt*G,$t=Nt*on,Ct=ft/(-G+on),_e=Ct*-G;if(W.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(_e),N.translateZ(Ct),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert(),St[10]===-1)N.projectionMatrix.copy(W.projectionMatrix),N.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{const Vt=Nt+Ct,L=bt+Ct,R=se-_e,st=$t+(ft-_e),vt=Gt*bt/L*Vt,Mt=ae*bt/L*Vt;N.projectionMatrix.makePerspective(R,st,vt,Mt,Vt,L),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}}function xt(N,W){W===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(W.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(l===null)return;let W=N.near,tt=N.far;A.texture!==null&&(A.depthNear>0&&(W=A.depthNear),A.depthFar>0&&(tt=A.depthFar)),C.near=B.near=P.near=W,C.far=B.far=P.far=tt,(H!==C.near||at!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),H=C.near,at=C.far),P.layers.mask=N.layers.mask|2,B.layers.mask=N.layers.mask|4,C.layers.mask=P.layers.mask|B.layers.mask;const ft=N.parent,St=C.cameras;xt(C,ft);for(let Bt=0;Bt<St.length;Bt++)xt(St[Bt],ft);St.length===2?X(C,P,B):C.projectionMatrix.copy(P.projectionMatrix),yt(N,C,ft)};function yt(N,W,tt){tt===null?N.matrix.copy(W.matrixWorld):(N.matrix.copy(tt.matrixWorld),N.matrix.invert(),N.matrix.multiply(W.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(W.projectionMatrix),N.projectionMatrixInverse.copy(W.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=Lp*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(x===null&&E===null))return p},this.setFoveation=function(N){p=N,x!==null&&(x.fixedFoveation=N),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=N)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(C)};let Rt=null;function zt(N,W){if(v=W.getViewerPose(_||h),b=W,v!==null){const tt=v.views;E!==null&&(e.setRenderTargetFramebuffer(O,E.framebuffer),e.setRenderTarget(O));let ft=!1;tt.length!==C.cameras.length&&(C.cameras.length=0,ft=!0);for(let Nt=0;Nt<tt.length;Nt++){const bt=tt[Nt];let Gt=null;if(E!==null)Gt=E.getViewport(bt);else{const G=g.getViewSubImage(x,bt);Gt=G.viewport,Nt===0&&(e.setRenderTargetTextures(O,G.colorTexture,x.ignoreDepthValues?void 0:G.depthStencilTexture),e.setRenderTarget(O))}let ae=U[Nt];ae===void 0&&(ae=new Ri,ae.layers.enable(Nt),ae.viewport=new rn,U[Nt]=ae),ae.matrix.fromArray(bt.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(bt.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(Gt.x,Gt.y,Gt.width,Gt.height),Nt===0&&(C.matrix.copy(ae.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ft===!0&&C.cameras.push(ae)}const St=l.enabledFeatures;if(St&&St.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&g){const Nt=g.getDepthInformation(tt[0]);Nt&&Nt.isValid&&Nt.texture&&A.init(e,Nt,l.renderState)}}for(let tt=0;tt<z.length;tt++){const ft=D[tt],St=z[tt];ft!==null&&St!==void 0&&St.update(ft,W,_||h)}Rt&&Rt(N,W),W.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:W}),b=null}const Wt=new eS;Wt.setAnimationLoop(zt),this.setAnimationLoop=function(N){Rt=N},this.dispose=function(){}}}const Ws=new sa,WC=new tn;function ZC(o,e){function i(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function s(M,S){S.color.getRGB(M.fogColor.value,Wy(o)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function l(M,S,O,z,D){S.isMeshBasicMaterial||S.isMeshLambertMaterial?f(M,S):S.isMeshToonMaterial?(f(M,S),g(M,S)):S.isMeshPhongMaterial?(f(M,S),v(M,S)):S.isMeshStandardMaterial?(f(M,S),x(M,S),S.isMeshPhysicalMaterial&&E(M,S,D)):S.isMeshMatcapMaterial?(f(M,S),b(M,S)):S.isMeshDepthMaterial?f(M,S):S.isMeshDistanceMaterial?(f(M,S),A(M,S)):S.isMeshNormalMaterial?f(M,S):S.isLineBasicMaterial?(h(M,S),S.isLineDashedMaterial&&d(M,S)):S.isPointsMaterial?p(M,S,O,z):S.isSpriteMaterial?_(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function f(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,i(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===ei&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,i(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===ei&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,i(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,i(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const O=e.get(S),z=O.envMap,D=O.envMapRotation;z&&(M.envMap.value=z,Ws.copy(D),Ws.x*=-1,Ws.y*=-1,Ws.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(Ws.y*=-1,Ws.z*=-1),M.envMapRotation.value.setFromMatrix4(WC.makeRotationFromEuler(Ws)),M.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,M.aoMapTransform))}function h(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform))}function d(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function p(M,S,O,z){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*O,M.scale.value=z*.5,S.map&&(M.map.value=S.map,i(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function _(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function v(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function g(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function x(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function E(M,S,O){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===ei&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=O.texture,M.transmissionSamplerSize.value.set(O.width,O.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,S){S.matcap&&(M.matcap.value=S.matcap)}function A(M,S){const O=e.get(S).light;M.referencePosition.value.setFromMatrixPosition(O.matrixWorld),M.nearDistance.value=O.shadow.camera.near,M.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function KC(o,e,i,s){let l={},f={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(O,z){const D=z.program;s.uniformBlockBinding(O,D)}function _(O,z){let D=l[O.id];D===void 0&&(b(O),D=v(O),l[O.id]=D,O.addEventListener("dispose",M));const j=z.program;s.updateUBOMapping(O,j);const F=e.render.frame;f[O.id]!==F&&(x(O),f[O.id]=F)}function v(O){const z=g();O.__bindingPointIndex=z;const D=o.createBuffer(),j=O.__size,F=O.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,j,F),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,z,D),D}function g(){for(let O=0;O<d;O++)if(h.indexOf(O)===-1)return h.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(O){const z=l[O.id],D=O.uniforms,j=O.__cache;o.bindBuffer(o.UNIFORM_BUFFER,z);for(let F=0,P=D.length;F<P;F++){const B=Array.isArray(D[F])?D[F]:[D[F]];for(let U=0,C=B.length;U<C;U++){const H=B[U];if(E(H,F,U,j)===!0){const at=H.__offset,$=Array.isArray(H.value)?H.value:[H.value];let dt=0;for(let ht=0;ht<$.length;ht++){const q=$[ht],ot=A(q);typeof q=="number"||typeof q=="boolean"?(H.__data[0]=q,o.bufferSubData(o.UNIFORM_BUFFER,at+dt,H.__data)):q.isMatrix3?(H.__data[0]=q.elements[0],H.__data[1]=q.elements[1],H.__data[2]=q.elements[2],H.__data[3]=0,H.__data[4]=q.elements[3],H.__data[5]=q.elements[4],H.__data[6]=q.elements[5],H.__data[7]=0,H.__data[8]=q.elements[6],H.__data[9]=q.elements[7],H.__data[10]=q.elements[8],H.__data[11]=0):(q.toArray(H.__data,dt),dt+=ot.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,at,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(O,z,D,j){const F=O.value,P=z+"_"+D;if(j[P]===void 0)return typeof F=="number"||typeof F=="boolean"?j[P]=F:j[P]=F.clone(),!0;{const B=j[P];if(typeof F=="number"||typeof F=="boolean"){if(B!==F)return j[P]=F,!0}else if(B.equals(F)===!1)return B.copy(F),!0}return!1}function b(O){const z=O.uniforms;let D=0;const j=16;for(let P=0,B=z.length;P<B;P++){const U=Array.isArray(z[P])?z[P]:[z[P]];for(let C=0,H=U.length;C<H;C++){const at=U[C],$=Array.isArray(at.value)?at.value:[at.value];for(let dt=0,ht=$.length;dt<ht;dt++){const q=$[dt],ot=A(q),X=D%j,xt=X%ot.boundary,yt=X+xt;D+=xt,yt!==0&&j-yt<ot.storage&&(D+=j-yt),at.__data=new Float32Array(ot.storage/Float32Array.BYTES_PER_ELEMENT),at.__offset=D,D+=ot.storage}}}const F=D%j;return F>0&&(D+=j-F),O.__size=D,O.__cache={},this}function A(O){const z={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(z.boundary=4,z.storage=4):O.isVector2?(z.boundary=8,z.storage=8):O.isVector3||O.isColor?(z.boundary=16,z.storage=12):O.isVector4?(z.boundary=16,z.storage=16):O.isMatrix3?(z.boundary=48,z.storage=48):O.isMatrix4?(z.boundary=64,z.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),z}function M(O){const z=O.target;z.removeEventListener("dispose",M);const D=h.indexOf(z.__bindingPointIndex);h.splice(D,1),o.deleteBuffer(l[z.id]),delete l[z.id],delete f[z.id]}function S(){for(const O in l)o.deleteBuffer(l[O]);h=[],l={},f={}}return{bind:p,update:_,dispose:S}}class QC{constructor(e={}){const{canvas:i=Sb(),context:s=null,depth:l=!0,stencil:f=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:_=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=h;const b=new Uint32Array(4),A=new Int32Array(4);let M=null,S=null;const O=[],z=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ai,this.toneMapping=_s,this.toneMappingExposure=1;const D=this;let j=!1,F=0,P=0,B=null,U=-1,C=null;const H=new rn,at=new rn;let $=null;const dt=new Te(0);let ht=0,q=i.width,ot=i.height,X=1,xt=null,yt=null;const Rt=new rn(0,0,q,ot),zt=new rn(0,0,q,ot);let Wt=!1;const N=new Jp;let W=!1,tt=!1;this.transmissionResolutionScale=1;const ft=new tn,St=new tn,Bt=new nt,Nt=new rn,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function ae(){return B===null?X:1}let G=s;function on(w,K){return i.getContext(w,K)}try{const w={alpha:!0,depth:l,stencil:f,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:_,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Gp}`),i.addEventListener("webglcontextlost",gt,!1),i.addEventListener("webglcontextrestored",wt,!1),i.addEventListener("webglcontextcreationerror",Lt,!1),G===null){const K="webgl2";if(G=on(K,w),G===null)throw on(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let se,$t,Ct,_e,Vt,L,R,st,vt,Mt,_t,Yt,Ft,It,me,At,kt,Jt,ee,jt,de,ce,Le,k;function Et(){se=new oR(G),se.init(),ce=new jC(G,se),$t=new tR(G,se,e,ce),Ct=new GC(G,se),$t.reverseDepthBuffer&&x&&Ct.buffers.depth.setReversed(!0),_e=new uR(G),Vt=new CC,L=new VC(G,se,Ct,Vt,$t,ce,_e),R=new nR(D),st=new rR(D),vt=new gT(G),Le=new J2(G,vt),Mt=new lR(G,vt,_e,Le),_t=new hR(G,Mt,vt,_e),ee=new fR(G,$t,L),At=new eR(Vt),Yt=new RC(D,R,st,se,$t,Le,At),Ft=new ZC(D,Vt),It=new NC,me=new PC(se),Jt=new Q2(D,R,st,Ct,_t,E,p),kt=new BC(D,_t,$t),k=new KC(G,_e,$t,Ct),jt=new $2(G,se,_e),de=new cR(G,se,_e),_e.programs=Yt.programs,D.capabilities=$t,D.extensions=se,D.properties=Vt,D.renderLists=It,D.shadowMap=kt,D.state=Ct,D.info=_e}Et();const lt=new YC(D,G);this.xr=lt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const w=se.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=se.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(w){w!==void 0&&(X=w,this.setSize(q,ot,!1))},this.getSize=function(w){return w.set(q,ot)},this.setSize=function(w,K,ct=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=w,ot=K,i.width=Math.floor(w*X),i.height=Math.floor(K*X),ct===!0&&(i.style.width=w+"px",i.style.height=K+"px"),this.setViewport(0,0,w,K)},this.getDrawingBufferSize=function(w){return w.set(q*X,ot*X).floor()},this.setDrawingBufferSize=function(w,K,ct){q=w,ot=K,X=ct,i.width=Math.floor(w*ct),i.height=Math.floor(K*ct),this.setViewport(0,0,w,K)},this.getCurrentViewport=function(w){return w.copy(H)},this.getViewport=function(w){return w.copy(Rt)},this.setViewport=function(w,K,ct,ut){w.isVector4?Rt.set(w.x,w.y,w.z,w.w):Rt.set(w,K,ct,ut),Ct.viewport(H.copy(Rt).multiplyScalar(X).round())},this.getScissor=function(w){return w.copy(zt)},this.setScissor=function(w,K,ct,ut){w.isVector4?zt.set(w.x,w.y,w.z,w.w):zt.set(w,K,ct,ut),Ct.scissor(at.copy(zt).multiplyScalar(X).round())},this.getScissorTest=function(){return Wt},this.setScissorTest=function(w){Ct.setScissorTest(Wt=w)},this.setOpaqueSort=function(w){xt=w},this.setTransparentSort=function(w){yt=w},this.getClearColor=function(w){return w.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor(...arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha(...arguments)},this.clear=function(w=!0,K=!0,ct=!0){let ut=0;if(w){let J=!1;if(B!==null){const Tt=B.texture.format;J=Tt===Yp||Tt===qp||Tt===Xp}if(J){const Tt=B.texture.type,Ut=Tt===La||Tt===tr||Tt===Ml||Tt===_o||Tt===jp||Tt===kp,Dt=Jt.getClearColor(),Pt=Jt.getClearAlpha(),ie=Dt.r,oe=Dt.g,te=Dt.b;Ut?(b[0]=ie,b[1]=oe,b[2]=te,b[3]=Pt,G.clearBufferuiv(G.COLOR,0,b)):(A[0]=ie,A[1]=oe,A[2]=te,A[3]=Pt,G.clearBufferiv(G.COLOR,0,A))}else ut|=G.COLOR_BUFFER_BIT}K&&(ut|=G.DEPTH_BUFFER_BIT),ct&&(ut|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(ut)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",gt,!1),i.removeEventListener("webglcontextrestored",wt,!1),i.removeEventListener("webglcontextcreationerror",Lt,!1),Jt.dispose(),It.dispose(),me.dispose(),Vt.dispose(),R.dispose(),st.dispose(),_t.dispose(),Le.dispose(),k.dispose(),Yt.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",cn),lt.removeEventListener("sessionend",ar),wi.stop()};function gt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),j=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),j=!1;const w=_e.autoReset,K=kt.enabled,ct=kt.autoUpdate,ut=kt.needsUpdate,J=kt.type;Et(),_e.autoReset=w,kt.enabled=K,kt.autoUpdate=ct,kt.needsUpdate=ut,kt.type=J}function Lt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ne(w){const K=w.target;K.removeEventListener("dispose",ne),ke(K)}function ke(w){ln(w),Vt.remove(w)}function ln(w){const K=Vt.get(w).programs;K!==void 0&&(K.forEach(function(ct){Yt.releaseProgram(ct)}),w.isShaderMaterial&&Yt.releaseShaderCache(w))}this.renderBufferDirect=function(w,K,ct,ut,J,Tt){K===null&&(K=bt);const Ut=J.isMesh&&J.matrixWorld.determinant()<0,Dt=Eo(w,K,ct,ut,J);Ct.setMaterial(ut,Ut);let Pt=ct.index,ie=1;if(ut.wireframe===!0){if(Pt=Mt.getWireframeAttribute(ct),Pt===void 0)return;ie=2}const oe=ct.drawRange,te=ct.attributes.position;let we=oe.start*ie,Ue=(oe.start+oe.count)*ie;Tt!==null&&(we=Math.max(we,Tt.start*ie),Ue=Math.min(Ue,(Tt.start+Tt.count)*ie)),Pt!==null?(we=Math.max(we,0),Ue=Math.min(Ue,Pt.count)):te!=null&&(we=Math.max(we,0),Ue=Math.min(Ue,te.count));const We=Ue-we;if(We<0||We===1/0)return;Le.setup(J,ut,Dt,ct,Pt);let Xe,Se=jt;if(Pt!==null&&(Xe=vt.get(Pt),Se=de,Se.setIndex(Xe)),J.isMesh)ut.wireframe===!0?(Ct.setLineWidth(ut.wireframeLinewidth*ae()),Se.setMode(G.LINES)):Se.setMode(G.TRIANGLES);else if(J.isLine){let Zt=ut.linewidth;Zt===void 0&&(Zt=1),Ct.setLineWidth(Zt*ae()),J.isLineSegments?Se.setMode(G.LINES):J.isLineLoop?Se.setMode(G.LINE_LOOP):Se.setMode(G.LINE_STRIP)}else J.isPoints?Se.setMode(G.POINTS):J.isSprite&&Se.setMode(G.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)Zs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Se.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))Se.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const Zt=J._multiDrawStarts,Je=J._multiDrawCounts,Ae=J._multiDrawCount,En=Pt?vt.get(Pt).bytesPerElement:1,Qe=Vt.get(ut).currentProgram.getUniforms();for(let In=0;In<Ae;In++)Qe.setValue(G,"_gl_DrawID",In),Se.render(Zt[In]/En,Je[In])}else if(J.isInstancedMesh)Se.renderInstances(we,We,J.count);else if(ct.isInstancedBufferGeometry){const Zt=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,Je=Math.min(ct.instanceCount,Zt);Se.renderInstances(we,We,Je)}else Se.render(we,We)};function ye(w,K,ct){w.transparent===!0&&w.side===ia&&w.forceSinglePass===!1?(w.side=ei,w.needsUpdate=!0,mi(w,K,ct),w.side=vs,w.needsUpdate=!0,mi(w,K,ct),w.side=ia):mi(w,K,ct)}this.compile=function(w,K,ct=null){ct===null&&(ct=w),S=me.get(ct),S.init(K),z.push(S),ct.traverseVisible(function(J){J.isLight&&J.layers.test(K.layers)&&(S.pushLight(J),J.castShadow&&S.pushShadow(J))}),w!==ct&&w.traverseVisible(function(J){J.isLight&&J.layers.test(K.layers)&&(S.pushLight(J),J.castShadow&&S.pushShadow(J))}),S.setupLights();const ut=new Set;return w.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Tt=J.material;if(Tt)if(Array.isArray(Tt))for(let Ut=0;Ut<Tt.length;Ut++){const Dt=Tt[Ut];ye(Dt,ct,J),ut.add(Dt)}else ye(Tt,ct,J),ut.add(Tt)}),S=z.pop(),ut},this.compileAsync=function(w,K,ct=null){const ut=this.compile(w,K,ct);return new Promise(J=>{function Tt(){if(ut.forEach(function(Ut){Vt.get(Ut).currentProgram.isReady()&&ut.delete(Ut)}),ut.size===0){J(w);return}setTimeout(Tt,10)}se.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Ne=null;function en(w){Ne&&Ne(w)}function cn(){wi.stop()}function ar(){wi.start()}const wi=new eS;wi.setAnimationLoop(en),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(w){Ne=w,lt.setAnimationLoop(w),w===null?wi.stop():wi.start()},lt.addEventListener("sessionstart",cn),lt.addEventListener("sessionend",ar),this.render=function(w,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(j===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(K),K=lt.getCamera()),w.isScene===!0&&w.onBeforeRender(D,w,K,B),S=me.get(w,z.length),S.init(K),z.push(S),St.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),N.setFromProjectionMatrix(St),tt=this.localClippingEnabled,W=At.init(this.clippingPlanes,tt),M=It.get(w,O.length),M.init(),O.push(M),lt.enabled===!0&&lt.isPresenting===!0){const Tt=D.xr.getDepthSensingMesh();Tt!==null&&Ni(Tt,K,-1/0,D.sortObjects)}Ni(w,K,0,D.sortObjects),M.finish(),D.sortObjects===!0&&M.sort(xt,yt),Gt=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,Gt&&Jt.addToRenderList(M,w),this.info.render.frame++,W===!0&&At.beginShadows();const ct=S.state.shadowsArray;kt.render(ct,w,K),W===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset();const ut=M.opaque,J=M.transmissive;if(S.setupLights(),K.isArrayCamera){const Tt=K.cameras;if(J.length>0)for(let Ut=0,Dt=Tt.length;Ut<Dt;Ut++){const Pt=Tt[Ut];ra(ut,J,w,Pt)}Gt&&Jt.render(w);for(let Ut=0,Dt=Tt.length;Ut<Dt;Ut++){const Pt=Tt[Ut];ni(M,w,Pt,Pt.viewport)}}else J.length>0&&ra(ut,J,w,K),Gt&&Jt.render(w),ni(M,w,K);B!==null&&P===0&&(L.updateMultisampleRenderTarget(B),L.updateRenderTargetMipmap(B)),w.isScene===!0&&w.onAfterRender(D,w,K),Le.resetDefaultState(),U=-1,C=null,z.pop(),z.length>0?(S=z[z.length-1],W===!0&&At.setGlobalState(D.clippingPlanes,S.state.camera)):S=null,O.pop(),O.length>0?M=O[O.length-1]:M=null};function Ni(w,K,ct,ut){if(w.visible===!1)return;if(w.layers.test(K.layers)){if(w.isGroup)ct=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(K);else if(w.isLight)S.pushLight(w),w.castShadow&&S.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||N.intersectsSprite(w)){ut&&Nt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(St);const Ut=_t.update(w),Dt=w.material;Dt.visible&&M.push(w,Ut,Dt,ct,Nt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||N.intersectsObject(w))){const Ut=_t.update(w),Dt=w.material;if(ut&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Nt.copy(w.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),Nt.copy(Ut.boundingSphere.center)),Nt.applyMatrix4(w.matrixWorld).applyMatrix4(St)),Array.isArray(Dt)){const Pt=Ut.groups;for(let ie=0,oe=Pt.length;ie<oe;ie++){const te=Pt[ie],we=Dt[te.materialIndex];we&&we.visible&&M.push(w,Ut,we,ct,Nt.z,te)}}else Dt.visible&&M.push(w,Ut,Dt,ct,Nt.z,null)}}const Tt=w.children;for(let Ut=0,Dt=Tt.length;Ut<Dt;Ut++)Ni(Tt[Ut],K,ct,ut)}function ni(w,K,ct,ut){const J=w.opaque,Tt=w.transmissive,Ut=w.transparent;S.setupLightsView(ct),W===!0&&At.setGlobalState(D.clippingPlanes,ct),ut&&Ct.viewport(H.copy(ut)),J.length>0&&Di(J,K,ct),Tt.length>0&&Di(Tt,K,ct),Ut.length>0&&Di(Ut,K,ct),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function ra(w,K,ct,ut){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;S.state.transmissionRenderTarget[ut.id]===void 0&&(S.state.transmissionRenderTarget[ut.id]=new er(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?bl:La,minFilter:$s,samples:4,stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ze.workingColorSpace}));const Tt=S.state.transmissionRenderTarget[ut.id],Ut=ut.viewport||H;Tt.setSize(Ut.z*D.transmissionResolutionScale,Ut.w*D.transmissionResolutionScale);const Dt=D.getRenderTarget();D.setRenderTarget(Tt),D.getClearColor(dt),ht=D.getClearAlpha(),ht<1&&D.setClearColor(16777215,.5),D.clear(),Gt&&Jt.render(ct);const Pt=D.toneMapping;D.toneMapping=_s;const ie=ut.viewport;if(ut.viewport!==void 0&&(ut.viewport=void 0),S.setupLightsView(ut),W===!0&&At.setGlobalState(D.clippingPlanes,ut),Di(w,ct,ut),L.updateMultisampleRenderTarget(Tt),L.updateRenderTargetMipmap(Tt),se.has("WEBGL_multisampled_render_to_texture")===!1){let oe=!1;for(let te=0,we=K.length;te<we;te++){const Ue=K[te],We=Ue.object,Xe=Ue.geometry,Se=Ue.material,Zt=Ue.group;if(Se.side===ia&&We.layers.test(ut.layers)){const Je=Se.side;Se.side=ei,Se.needsUpdate=!0,ii(We,ct,ut,Xe,Se,Zt),Se.side=Je,Se.needsUpdate=!0,oe=!0}}oe===!0&&(L.updateMultisampleRenderTarget(Tt),L.updateRenderTargetMipmap(Tt))}D.setRenderTarget(Dt),D.setClearColor(dt,ht),ie!==void 0&&(ut.viewport=ie),D.toneMapping=Pt}function Di(w,K,ct){const ut=K.isScene===!0?K.overrideMaterial:null;for(let J=0,Tt=w.length;J<Tt;J++){const Ut=w[J],Dt=Ut.object,Pt=Ut.geometry,ie=ut===null?Ut.material:ut,oe=Ut.group;Dt.layers.test(ct.layers)&&ii(Dt,K,ct,Pt,ie,oe)}}function ii(w,K,ct,ut,J,Tt){w.onBeforeRender(D,K,ct,ut,J,Tt),w.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),J.onBeforeRender(D,K,ct,ut,w,Tt),J.transparent===!0&&J.side===ia&&J.forceSinglePass===!1?(J.side=ei,J.needsUpdate=!0,D.renderBufferDirect(ct,K,ut,J,w,Tt),J.side=vs,J.needsUpdate=!0,D.renderBufferDirect(ct,K,ut,J,w,Tt),J.side=ia):D.renderBufferDirect(ct,K,ut,J,w,Tt),w.onAfterRender(D,K,ct,ut,J,Tt)}function mi(w,K,ct){K.isScene!==!0&&(K=bt);const ut=Vt.get(w),J=S.state.lights,Tt=S.state.shadowsArray,Ut=J.state.version,Dt=Yt.getParameters(w,J.state,Tt,K,ct),Pt=Yt.getProgramCacheKey(Dt);let ie=ut.programs;ut.environment=w.isMeshStandardMaterial?K.environment:null,ut.fog=K.fog,ut.envMap=(w.isMeshStandardMaterial?st:R).get(w.envMap||ut.environment),ut.envMapRotation=ut.environment!==null&&w.envMap===null?K.environmentRotation:w.envMapRotation,ie===void 0&&(w.addEventListener("dispose",ne),ie=new Map,ut.programs=ie);let oe=ie.get(Pt);if(oe!==void 0){if(ut.currentProgram===oe&&ut.lightsStateVersion===Ut)return Oa(w,Dt),oe}else Dt.uniforms=Yt.getUniforms(w),w.onBeforeCompile(Dt,D),oe=Yt.acquireProgram(Dt,Pt),ie.set(Pt,oe),ut.uniforms=Dt.uniforms;const te=ut.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(te.clippingPlanes=At.uniform),Oa(w,Dt),ut.needsLights=ys(w),ut.lightsStateVersion=Ut,ut.needsLights&&(te.ambientLightColor.value=J.state.ambient,te.lightProbe.value=J.state.probe,te.directionalLights.value=J.state.directional,te.directionalLightShadows.value=J.state.directionalShadow,te.spotLights.value=J.state.spot,te.spotLightShadows.value=J.state.spotShadow,te.rectAreaLights.value=J.state.rectArea,te.ltc_1.value=J.state.rectAreaLTC1,te.ltc_2.value=J.state.rectAreaLTC2,te.pointLights.value=J.state.point,te.pointLightShadows.value=J.state.pointShadow,te.hemisphereLights.value=J.state.hemi,te.directionalShadowMap.value=J.state.directionalShadowMap,te.directionalShadowMatrix.value=J.state.directionalShadowMatrix,te.spotShadowMap.value=J.state.spotShadowMap,te.spotLightMatrix.value=J.state.spotLightMatrix,te.spotLightMap.value=J.state.spotLightMap,te.pointShadowMap.value=J.state.pointShadowMap,te.pointShadowMatrix.value=J.state.pointShadowMatrix),ut.currentProgram=oe,ut.uniformsList=null,oe}function Ui(w){if(w.uniformsList===null){const K=w.currentProgram.getUniforms();w.uniformsList=Tu.seqWithValue(K.seq,w.uniforms)}return w.uniformsList}function Oa(w,K){const ct=Vt.get(w);ct.outputColorSpace=K.outputColorSpace,ct.batching=K.batching,ct.batchingColor=K.batchingColor,ct.instancing=K.instancing,ct.instancingColor=K.instancingColor,ct.instancingMorph=K.instancingMorph,ct.skinning=K.skinning,ct.morphTargets=K.morphTargets,ct.morphNormals=K.morphNormals,ct.morphColors=K.morphColors,ct.morphTargetsCount=K.morphTargetsCount,ct.numClippingPlanes=K.numClippingPlanes,ct.numIntersection=K.numClipIntersection,ct.vertexAlphas=K.vertexAlphas,ct.vertexTangents=K.vertexTangents,ct.toneMapping=K.toneMapping}function Eo(w,K,ct,ut,J){K.isScene!==!0&&(K=bt),L.resetTextureUnits();const Tt=K.fog,Ut=ut.isMeshStandardMaterial?K.environment:null,Dt=B===null?D.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:xo,Pt=(ut.isMeshStandardMaterial?st:R).get(ut.envMap||Ut),ie=ut.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,oe=!!ct.attributes.tangent&&(!!ut.normalMap||ut.anisotropy>0),te=!!ct.morphAttributes.position,we=!!ct.morphAttributes.normal,Ue=!!ct.morphAttributes.color;let We=_s;ut.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(We=D.toneMapping);const Xe=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,Se=Xe!==void 0?Xe.length:0,Zt=Vt.get(ut),Je=S.state.lights;if(W===!0&&(tt===!0||w!==C)){const wn=w===C&&ut.id===U;At.setState(ut,w,wn)}let Ae=!1;ut.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==Je.state.version||Zt.outputColorSpace!==Dt||J.isBatchedMesh&&Zt.batching===!1||!J.isBatchedMesh&&Zt.batching===!0||J.isBatchedMesh&&Zt.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Zt.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Zt.instancing===!1||!J.isInstancedMesh&&Zt.instancing===!0||J.isSkinnedMesh&&Zt.skinning===!1||!J.isSkinnedMesh&&Zt.skinning===!0||J.isInstancedMesh&&Zt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Zt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Zt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Zt.instancingMorph===!1&&J.morphTexture!==null||Zt.envMap!==Pt||ut.fog===!0&&Zt.fog!==Tt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==At.numPlanes||Zt.numIntersection!==At.numIntersection)||Zt.vertexAlphas!==ie||Zt.vertexTangents!==oe||Zt.morphTargets!==te||Zt.morphNormals!==we||Zt.morphColors!==Ue||Zt.toneMapping!==We||Zt.morphTargetsCount!==Se)&&(Ae=!0):(Ae=!0,Zt.__version=ut.version);let En=Zt.currentProgram;Ae===!0&&(En=mi(ut,K,J));let Qe=!1,In=!1,za=!1;const qe=En.getUniforms(),fn=Zt.uniforms;if(Ct.useProgram(En.program)&&(Qe=!0,In=!0,za=!0),ut.id!==U&&(U=ut.id,In=!0),Qe||C!==w){Ct.buffers.depth.getReversed()?(ft.copy(w.projectionMatrix),Eb(ft),bb(ft),qe.setValue(G,"projectionMatrix",ft)):qe.setValue(G,"projectionMatrix",w.projectionMatrix),qe.setValue(G,"viewMatrix",w.matrixWorldInverse);const Nn=qe.map.cameraPosition;Nn!==void 0&&Nn.setValue(G,Bt.setFromMatrixPosition(w.matrixWorld)),$t.logarithmicDepthBuffer&&qe.setValue(G,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ut.isMeshPhongMaterial||ut.isMeshToonMaterial||ut.isMeshLambertMaterial||ut.isMeshBasicMaterial||ut.isMeshStandardMaterial||ut.isShaderMaterial)&&qe.setValue(G,"isOrthographic",w.isOrthographicCamera===!0),C!==w&&(C=w,In=!0,za=!0)}if(J.isSkinnedMesh){qe.setOptional(G,J,"bindMatrix"),qe.setOptional(G,J,"bindMatrixInverse");const wn=J.skeleton;wn&&(wn.boneTexture===null&&wn.computeBoneTexture(),qe.setValue(G,"boneTexture",wn.boneTexture,L))}J.isBatchedMesh&&(qe.setOptional(G,J,"batchingTexture"),qe.setValue(G,"batchingTexture",J._matricesTexture,L),qe.setOptional(G,J,"batchingIdTexture"),qe.setValue(G,"batchingIdTexture",J._indirectTexture,L),qe.setOptional(G,J,"batchingColorTexture"),J._colorsTexture!==null&&qe.setValue(G,"batchingColorTexture",J._colorsTexture,L));const vn=ct.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&ee.update(J,ct,En),(In||Zt.receiveShadow!==J.receiveShadow)&&(Zt.receiveShadow=J.receiveShadow,qe.setValue(G,"receiveShadow",J.receiveShadow)),ut.isMeshGouraudMaterial&&ut.envMap!==null&&(fn.envMap.value=Pt,fn.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),ut.isMeshStandardMaterial&&ut.envMap===null&&K.environment!==null&&(fn.envMapIntensity.value=K.environmentIntensity),In&&(qe.setValue(G,"toneMappingExposure",D.toneMappingExposure),Zt.needsLights&&sr(fn,za),Tt&&ut.fog===!0&&Ft.refreshFogUniforms(fn,Tt),Ft.refreshMaterialUniforms(fn,ut,X,ot,S.state.transmissionRenderTarget[w.id]),Tu.upload(G,Ui(Zt),fn,L)),ut.isShaderMaterial&&ut.uniformsNeedUpdate===!0&&(Tu.upload(G,Ui(Zt),fn,L),ut.uniformsNeedUpdate=!1),ut.isSpriteMaterial&&qe.setValue(G,"center",J.center),qe.setValue(G,"modelViewMatrix",J.modelViewMatrix),qe.setValue(G,"normalMatrix",J.normalMatrix),qe.setValue(G,"modelMatrix",J.matrixWorld),ut.isShaderMaterial||ut.isRawShaderMaterial){const wn=ut.uniformsGroups;for(let Nn=0,or=wn.length;Nn<or;Nn++){const la=wn[Nn];k.update(la,En),k.bind(la,En)}}return En}function sr(w,K){w.ambientLightColor.needsUpdate=K,w.lightProbe.needsUpdate=K,w.directionalLights.needsUpdate=K,w.directionalLightShadows.needsUpdate=K,w.pointLights.needsUpdate=K,w.pointLightShadows.needsUpdate=K,w.spotLights.needsUpdate=K,w.spotLightShadows.needsUpdate=K,w.rectAreaLights.needsUpdate=K,w.hemisphereLights.needsUpdate=K}function ys(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(w,K,ct){Vt.get(w.texture).__webglTexture=K,Vt.get(w.depthTexture).__webglTexture=ct;const ut=Vt.get(w);ut.__hasExternalTextures=!0,ut.__autoAllocateDepthBuffer=ct===void 0,ut.__autoAllocateDepthBuffer||se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ut.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,K){const ct=Vt.get(w);ct.__webglFramebuffer=K,ct.__useDefaultFramebuffer=K===void 0};const oa=G.createFramebuffer();this.setRenderTarget=function(w,K=0,ct=0){B=w,F=K,P=ct;let ut=!0,J=null,Tt=!1,Ut=!1;if(w){const Pt=Vt.get(w);if(Pt.__useDefaultFramebuffer!==void 0)Ct.bindFramebuffer(G.FRAMEBUFFER,null),ut=!1;else if(Pt.__webglFramebuffer===void 0)L.setupRenderTarget(w);else if(Pt.__hasExternalTextures)L.rebindTextures(w,Vt.get(w.texture).__webglTexture,Vt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const te=w.depthTexture;if(Pt.__boundDepthTexture!==te){if(te!==null&&Vt.has(te)&&(w.width!==te.image.width||w.height!==te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(w)}}const ie=w.texture;(ie.isData3DTexture||ie.isDataArrayTexture||ie.isCompressedArrayTexture)&&(Ut=!0);const oe=Vt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(oe[K])?J=oe[K][ct]:J=oe[K],Tt=!0):w.samples>0&&L.useMultisampledRTT(w)===!1?J=Vt.get(w).__webglMultisampledFramebuffer:Array.isArray(oe)?J=oe[ct]:J=oe,H.copy(w.viewport),at.copy(w.scissor),$=w.scissorTest}else H.copy(Rt).multiplyScalar(X).floor(),at.copy(zt).multiplyScalar(X).floor(),$=Wt;if(ct!==0&&(J=oa),Ct.bindFramebuffer(G.FRAMEBUFFER,J)&&ut&&Ct.drawBuffers(w,J),Ct.viewport(H),Ct.scissor(at),Ct.setScissorTest($),Tt){const Pt=Vt.get(w.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+K,Pt.__webglTexture,ct)}else if(Ut){const Pt=Vt.get(w.texture),ie=K;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Pt.__webglTexture,ct,ie)}else if(w!==null&&ct!==0){const Pt=Vt.get(w.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Pt.__webglTexture,ct)}U=-1},this.readRenderTargetPixels=function(w,K,ct,ut,J,Tt,Ut){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=Vt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ut!==void 0&&(Dt=Dt[Ut]),Dt){Ct.bindFramebuffer(G.FRAMEBUFFER,Dt);try{const Pt=w.texture,ie=Pt.format,oe=Pt.type;if(!$t.textureFormatReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$t.textureTypeReadable(oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=w.width-ut&&ct>=0&&ct<=w.height-J&&G.readPixels(K,ct,ut,J,ce.convert(ie),ce.convert(oe),Tt)}finally{const Pt=B!==null?Vt.get(B).__webglFramebuffer:null;Ct.bindFramebuffer(G.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(w,K,ct,ut,J,Tt,Ut){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=Vt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ut!==void 0&&(Dt=Dt[Ut]),Dt){const Pt=w.texture,ie=Pt.format,oe=Pt.type;if(!$t.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$t.textureTypeReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=w.width-ut&&ct>=0&&ct<=w.height-J){Ct.bindFramebuffer(G.FRAMEBUFFER,Dt);const te=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,te),G.bufferData(G.PIXEL_PACK_BUFFER,Tt.byteLength,G.STREAM_READ),G.readPixels(K,ct,ut,J,ce.convert(ie),ce.convert(oe),0);const we=B!==null?Vt.get(B).__webglFramebuffer:null;Ct.bindFramebuffer(G.FRAMEBUFFER,we);const Ue=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Mb(G,Ue,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,te),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Tt),G.deleteBuffer(te),G.deleteSync(Ue),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,K=null,ct=0){w.isTexture!==!0&&(Zs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,w=arguments[1]);const ut=Math.pow(2,-ct),J=Math.floor(w.image.width*ut),Tt=Math.floor(w.image.height*ut),Ut=K!==null?K.x:0,Dt=K!==null?K.y:0;L.setTexture2D(w,0),G.copyTexSubImage2D(G.TEXTURE_2D,ct,0,0,Ut,Dt,J,Tt),Ct.unbindTexture()};const rr=G.createFramebuffer(),Ss=G.createFramebuffer();this.copyTextureToTexture=function(w,K,ct=null,ut=null,J=0,Tt=null){w.isTexture!==!0&&(Zs("WebGLRenderer: copyTextureToTexture function signature has changed."),ut=arguments[0]||null,w=arguments[1],K=arguments[2],Tt=arguments[3]||0,ct=null),Tt===null&&(J!==0?(Zs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=J,J=0):Tt=0);let Ut,Dt,Pt,ie,oe,te,we,Ue,We;const Xe=w.isCompressedTexture?w.mipmaps[Tt]:w.image;if(ct!==null)Ut=ct.max.x-ct.min.x,Dt=ct.max.y-ct.min.y,Pt=ct.isBox3?ct.max.z-ct.min.z:1,ie=ct.min.x,oe=ct.min.y,te=ct.isBox3?ct.min.z:0;else{const vn=Math.pow(2,-J);Ut=Math.floor(Xe.width*vn),Dt=Math.floor(Xe.height*vn),w.isDataArrayTexture?Pt=Xe.depth:w.isData3DTexture?Pt=Math.floor(Xe.depth*vn):Pt=1,ie=0,oe=0,te=0}ut!==null?(we=ut.x,Ue=ut.y,We=ut.z):(we=0,Ue=0,We=0);const Se=ce.convert(K.format),Zt=ce.convert(K.type);let Je;K.isData3DTexture?(L.setTexture3D(K,0),Je=G.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(L.setTexture2DArray(K,0),Je=G.TEXTURE_2D_ARRAY):(L.setTexture2D(K,0),Je=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,K.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,K.unpackAlignment);const Ae=G.getParameter(G.UNPACK_ROW_LENGTH),En=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Qe=G.getParameter(G.UNPACK_SKIP_PIXELS),In=G.getParameter(G.UNPACK_SKIP_ROWS),za=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Xe.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Xe.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,ie),G.pixelStorei(G.UNPACK_SKIP_ROWS,oe),G.pixelStorei(G.UNPACK_SKIP_IMAGES,te);const qe=w.isDataArrayTexture||w.isData3DTexture,fn=K.isDataArrayTexture||K.isData3DTexture;if(w.isDepthTexture){const vn=Vt.get(w),wn=Vt.get(K),Nn=Vt.get(vn.__renderTarget),or=Vt.get(wn.__renderTarget);Ct.bindFramebuffer(G.READ_FRAMEBUFFER,Nn.__webglFramebuffer),Ct.bindFramebuffer(G.DRAW_FRAMEBUFFER,or.__webglFramebuffer);for(let la=0;la<Pt;la++)qe&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Vt.get(w).__webglTexture,J,te+la),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Vt.get(K).__webglTexture,Tt,We+la)),G.blitFramebuffer(ie,oe,Ut,Dt,we,Ue,Ut,Dt,G.DEPTH_BUFFER_BIT,G.NEAREST);Ct.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(J!==0||w.isRenderTargetTexture||Vt.has(w)){const vn=Vt.get(w),wn=Vt.get(K);Ct.bindFramebuffer(G.READ_FRAMEBUFFER,rr),Ct.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ss);for(let Nn=0;Nn<Pt;Nn++)qe?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,vn.__webglTexture,J,te+Nn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,vn.__webglTexture,J),fn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,wn.__webglTexture,Tt,We+Nn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,wn.__webglTexture,Tt),J!==0?G.blitFramebuffer(ie,oe,Ut,Dt,we,Ue,Ut,Dt,G.COLOR_BUFFER_BIT,G.NEAREST):fn?G.copyTexSubImage3D(Je,Tt,we,Ue,We+Nn,ie,oe,Ut,Dt):G.copyTexSubImage2D(Je,Tt,we,Ue,ie,oe,Ut,Dt);Ct.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else fn?w.isDataTexture||w.isData3DTexture?G.texSubImage3D(Je,Tt,we,Ue,We,Ut,Dt,Pt,Se,Zt,Xe.data):K.isCompressedArrayTexture?G.compressedTexSubImage3D(Je,Tt,we,Ue,We,Ut,Dt,Pt,Se,Xe.data):G.texSubImage3D(Je,Tt,we,Ue,We,Ut,Dt,Pt,Se,Zt,Xe):w.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Tt,we,Ue,Ut,Dt,Se,Zt,Xe.data):w.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Tt,we,Ue,Xe.width,Xe.height,Se,Xe.data):G.texSubImage2D(G.TEXTURE_2D,Tt,we,Ue,Ut,Dt,Se,Zt,Xe);G.pixelStorei(G.UNPACK_ROW_LENGTH,Ae),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,En),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Qe),G.pixelStorei(G.UNPACK_SKIP_ROWS,In),G.pixelStorei(G.UNPACK_SKIP_IMAGES,za),Tt===0&&K.generateMipmaps&&G.generateMipmap(Je),Ct.unbindTexture()},this.copyTextureToTexture3D=function(w,K,ct=null,ut=null,J=0){return w.isTexture!==!0&&(Zs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ct=arguments[0]||null,ut=arguments[1]||null,w=arguments[2],K=arguments[3],J=arguments[4]||0),Zs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,K,ct,ut,J)},this.initRenderTarget=function(w){Vt.get(w).__webglFramebuffer===void 0&&L.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?L.setTextureCube(w,0):w.isData3DTexture?L.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?L.setTexture2DArray(w,0):L.setTexture2D(w,0),Ct.unbindTexture()},this.resetState=function(){F=0,P=0,B=null,Ct.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Da}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorspace=ze._getDrawingBufferColorSpace(e),i.unpackColorSpace=ze._getUnpackColorSpace()}}const wx={type:"change"},sm={type:"start"},rS={type:"end"},vu=new Ou,Nx=new ps,JC=Math.cos(70*yb.DEG2RAD),yn=new nt,$n=2*Math.PI,je={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},qd=1e-6;class $C extends pT{constructor(e,i=null){super(e,i),this.state=je.NONE,this.enabled=!0,this.target=new nt,this.cursor=new nt,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:co.ROTATE,MIDDLE:co.DOLLY,RIGHT:co.PAN},this.touches={ONE:oo.ROTATE,TWO:oo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new nt,this._lastQuaternion=new nr,this._lastTargetPosition=new nt,this._quat=new nr().setFromUnitVectors(e.up,new nt(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ix,this._sphericalDelta=new ix,this._scale=1,this._panOffset=new nt,this._rotateStart=new ue,this._rotateEnd=new ue,this._rotateDelta=new ue,this._panStart=new ue,this._panEnd=new ue,this._panDelta=new ue,this._dollyStart=new ue,this._dollyEnd=new ue,this._dollyDelta=new ue,this._dollyDirection=new nt,this._mouse=new ue,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ew.bind(this),this._onPointerDown=tw.bind(this),this._onPointerUp=nw.bind(this),this._onContextMenu=cw.bind(this),this._onMouseWheel=sw.bind(this),this._onKeyDown=rw.bind(this),this._onTouchStart=ow.bind(this),this._onTouchMove=lw.bind(this),this._onMouseDown=iw.bind(this),this._onMouseMove=aw.bind(this),this._interceptControlDown=uw.bind(this),this._interceptControlUp=fw.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(wx),this.update(),this.state=je.NONE}update(e=null){const i=this.object.position;yn.copy(i).sub(this.target),yn.applyQuaternion(this._quat),this._spherical.setFromVector3(yn),this.autoRotate&&this.state===je.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=$n:s>Math.PI&&(s-=$n),l<-Math.PI?l+=$n:l>Math.PI&&(l-=$n),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let f=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),f=h!=this._spherical.radius}if(yn.setFromSpherical(this._spherical),yn.applyQuaternion(this._quatInverse),i.copy(this.target).add(yn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=yn.length();h=this._clampDistance(d*this._scale);const p=d-h;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),f=!!p}else if(this.object.isOrthographicCamera){const d=new nt(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),f=p!==this.object.zoom;const _=new nt(this._mouse.x,this._mouse.y,0);_.unproject(this.object),this.object.position.sub(_).add(d),this.object.updateMatrixWorld(),h=yn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(vu.origin.copy(this.object.position),vu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(vu.direction))<JC?this.object.lookAt(this.target):(Nx.setFromNormalAndCoplanarPoint(this.object.up,this.target),vu.intersectPlane(Nx,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),f=!0)}return this._scale=1,this._performCursorZoom=!1,f||this._lastPosition.distanceToSquared(this.object.position)>qd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>qd||this._lastTargetPosition.distanceToSquared(this.target)>qd?(this.dispatchEvent(wx),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?$n/60*this.autoRotateSpeed*e:$n/60/60*this.autoRotateSpeed}_getZoomScale(e){const i=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,i){yn.setFromMatrixColumn(i,0),yn.multiplyScalar(-e),this._panOffset.add(yn)}_panUp(e,i){this.screenSpacePanning===!0?yn.setFromMatrixColumn(i,1):(yn.setFromMatrixColumn(i,0),yn.crossVectors(this.object.up,yn)),yn.multiplyScalar(e),this._panOffset.add(yn)}_pan(e,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;yn.copy(l).sub(this.target);let f=yn.length();f*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*f/s.clientHeight,this.object.matrix),this._panUp(2*i*f/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=e-s.left,f=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(f/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft($n*this._rotateDelta.x/i.clientHeight),this._rotateUp($n*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let i=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp($n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-$n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft($n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-$n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,f=Math.sqrt(s*s+l*l);this._dollyStart.set(0,f)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const s=this._getSecondPointerPosition(e),l=.5*(e.pageX+s.x),f=.5*(e.pageY+s.y);this._rotateEnd.set(l,f)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft($n*this._rotateDelta.x/i.clientHeight),this._rotateUp($n*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,f=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,f),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(e.pageX+i.x)*.5,d=(e.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(e){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId)return!0;return!1}_trackPointer(e){let i=this._pointerPositions[e.pointerId];i===void 0&&(i=new ue,this._pointerPositions[e.pointerId]=i),i.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const i=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(e){const i=e.deltaMode,s={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function tw(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function ew(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function nw(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(rS),this.state=je.NONE;break;case 1:const e=this._pointers[0],i=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:i.x,pageY:i.y});break}}function iw(o){let e;switch(o.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case co.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=je.DOLLY;break;case co.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=je.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=je.ROTATE}break;case co.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=je.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=je.PAN}break;default:this.state=je.NONE}this.state!==je.NONE&&this.dispatchEvent(sm)}function aw(o){switch(this.state){case je.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case je.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case je.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function sw(o){this.enabled===!1||this.enableZoom===!1||this.state!==je.NONE||(o.preventDefault(),this.dispatchEvent(sm),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(rS))}function rw(o){this.enabled!==!1&&this._handleKeyDown(o)}function ow(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case oo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=je.TOUCH_ROTATE;break;case oo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=je.TOUCH_PAN;break;default:this.state=je.NONE}break;case 2:switch(this.touches.TWO){case oo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=je.TOUCH_DOLLY_PAN;break;case oo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=je.TOUCH_DOLLY_ROTATE;break;default:this.state=je.NONE}break;default:this.state=je.NONE}this.state!==je.NONE&&this.dispatchEvent(sm)}function lw(o){switch(this._trackPointer(o),this.state){case je.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case je.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case je.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case je.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=je.NONE}}function cw(o){this.enabled!==!1&&o.preventDefault()}function uw(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function fw(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function hw({heights:o,rows:e,cols:i,planeSize:s=200,verticalExaggeration:l=1}){const f=new Cl(s,s,i-1,e-1);f.rotateX(-Math.PI/2);const h=f.attributes.position,d=h.count;let p=1/0,_=-1/0;for(let g=0;g<d;g++){const x=o&&g<o.length?o[g]:0;x<p&&(p=x),x>_&&(_=x),h.setY(g,x*l)}f.computeVertexNormals();const v=f.attributes.uv;for(let g=0;g<v.count;g++){const x=g%i,E=Math.floor(g/i),b=x/(i-1),A=1-E/(e-1);v.setXY(g,b,A)}return{geometry:f,minElevation:p===1/0?0:p,maxElevation:_===-1/0?0:_}}function dw(o,e,i,s,l,f="terrain"){const h=document.createElement("canvas");h.width=i,h.height=e;const d=h.getContext("2d"),p=d.createImageData(i,e),_=p.data,v=Math.max(l-s,.001);for(let x=0;x<o.length;x++){const E=o[x],b=Math.max(0,Math.min(1,(E-s)/v));let A=0,M=0,S=0;f==="terrain"?b<.2?(A=50+b*250,M=120+b*400,S=70):b<.5?(A=100+(b-.2)*400,M=200+(b-.2)*100,S=80):b<.8?(A=220+(b-.5)*100,M=200-(b-.5)*200,S=80):(A=240+(b-.8)*75,M=240+(b-.8)*75,S=250):(A=Math.floor(b*255),M=Math.floor((1-Math.abs(b-.5)*2)*255),S=Math.floor((1-b)*255));const O=x*4;_[O]=Math.min(255,Math.max(0,Math.floor(A))),_[O+1]=Math.min(255,Math.max(0,Math.floor(M))),_[O+2]=Math.min(255,Math.max(0,Math.floor(S))),_[O+3]=255}d.putImageData(p,0,0);const g=new Jy(h);return g.minFilter=ti,g.magFilter=ti,g}function pw(o,e,i,s=200){const l=document.createElement("canvas");l.width=i,l.height=e;const f=l.getContext("2d"),h=f.createImageData(i,e),d=h.data,p=s/Math.max(1,i-1),_=s/Math.max(1,e-1);for(let g=0;g<e;g++)for(let x=0;x<i;x++){const E=g*i+x,b=Math.max(0,x-1),A=Math.min(i-1,x+1),M=Math.max(0,g-1),S=Math.min(e-1,g+1),O=o[g*i+b],z=o[g*i+A],D=o[M*i+x],j=o[S*i+x],F=(z-O)/Math.max(1e-4,(A-b)*p),P=(j-D)/Math.max(1e-4,(S-M)*_),B=Math.sqrt(F*F+P*P),U=Math.atan(B)*(180/Math.PI);let C=34,H=197,at=94;U<5?(C=34,H=197,at=94):U<15?(C=56,H=189,at=248):U<30?(C=245,H=158,at=11):(C=239,H=68,at=68);const $=E*4;d[$]=C,d[$+1]=H,d[$+2]=at,d[$+3]=255}f.putImageData(h,0,0);const v=new Jy(l);return v.minFilter=ti,v.magFilter=ti,v}function mw({dsmData:o=null,textureMode:e="rgb",onTextureModeChange:i=null,cameraMode:s="orbit",onCameraModeChange:l=null,verticalExaggeration:f=1,colorRamp:h="terrain",selectedPoint:d=null,onSelectPoint:p=null,resetViewTrigger:_=0}){var ot;const v=Kt.useRef(null),g=Kt.useRef(null),x=Kt.useRef(null),E=Kt.useRef(null),b=Kt.useRef(null),A=Kt.useRef(null),M=Kt.useRef(null),S=Kt.useRef(new hT),O=Kt.useRef(new ue),z=Kt.useRef({x:0,y:0}),[D,j]=Kt.useState("orbit"),[F,P]=Kt.useState(e),[B,U]=Kt.useState(null),[C,H]=Kt.useState(!0),at=s||D,$=e||F,dt=Kt.useRef({moveForward:!1,moveBackward:!1,moveLeft:!1,moveRight:!1,moveUp:!1,moveDown:!1,speed:40});Kt.useEffect(()=>{if(o){U(o),H(!1);return}const X="";H(!0),fetch(`${X}/api/terrain/mesh?resolution=128`).then(xt=>{if(!xt.ok)throw new Error("DSM mesh endpoint error");return xt.json()}).then(xt=>{U(xt),H(!1)}).catch(xt=>{console.warn("[DepthWizard] Using local metric DSM tile:",xt);const yt=128,Rt=new Float32Array(yt*yt);for(let zt=0;zt<yt;zt++)for(let Wt=0;Wt<yt;Wt++){const N=zt%24<14&&Wt%24<14,W=2+Math.sin(zt*.05)*1.5;Rt[zt*yt+Wt]=N?8.5+zt%5*.8:W}U({rows:yt,cols:yt,min_height:0,max_height:12.84,mean_height:7.85,heights:Array.from(Rt),texture_url:`${X}/static/data/sample/sample_gamus_optical.png`}),H(!1)})},[o]),Kt.useEffect(()=>{const X=v.current;if(!X||!B)return;const xt=X.clientWidth||800,yt=X.clientHeight||520,Rt=new Zb;Rt.background=new Te(658967),Rt.fog=new Qp(658967,.002),g.current=Rt;const zt=new Ri(45,xt/yt,.5,3e3);zt.position.set(0,90,160),E.current=zt;const Wt=new QC({antialias:!0,powerPreference:"high-performance"});Wt.setSize(xt,yt),Wt.setPixelRatio(Math.min(window.devicePixelRatio,2)),Wt.shadowMap.enabled=!0,Wt.shadowMap.type=Cy,x.current=Wt,X.innerHTML="",X.appendChild(Wt.domElement);const N=new $C(zt,Wt.domElement);N.enableDamping=!0,N.dampingFactor=.06,N.maxPolarAngle=Math.PI/2-.02,N.minDistance=10,N.maxDistance=600,b.current=N;const W=new uT(16777215,.65);Rt.add(W);const tt=new cT(16775405,1.4);tt.position.set(120,220,90),tt.castShadow=!0,tt.shadow.mapSize.width=2048,tt.shadow.mapSize.height=2048,Rt.add(tt);const ft=new rT(3718648,988970,.45);Rt.add(ft);const St=200,{geometry:Bt,minElevation:Nt,maxElevation:bt}=hw({heights:B.heights,rows:B.rows,cols:B.cols,planeSize:St,verticalExaggeration:f}),Gt=new sT;let ae=null;B.texture_url&&(ae=Gt.load(B.texture_url,()=>{Wt.render(Rt,zt)},void 0,Et=>{console.warn("Could not load RGB texture, fallback to color texture:",Et)}),ae.wrapS=wa,ae.wrapT=wa);const G=dw(B.heights,B.rows,B.cols,Nt,bt,h),on=pw(B.heights,B.rows,B.cols,St);let se=G;$==="rgb"&&ae?se=ae:$==="slope"?se=on:$==="colormap"&&(se=G);const $t=new Fd({map:$==="wireframe"?null:se,wireframe:$==="wireframe",roughness:.85,metalness:.05,flatShading:!1}),Ct=new pi(Bt,$t);Ct.receiveShadow=!0,Ct.castShadow=!0,Rt.add(Ct),A.current=Ct;const _e=new dT(St,20,165063,1976635);_e.position.y=-.2,Rt.add(_e);const Vt=new yl;Vt.visible=!1;const L=new em(1.6,16,16),R=new Fd({color:15680580,emissive:16711680,emissiveIntensity:.5,roughness:.3}),st=new pi(L,R);st.position.y=4,Vt.add(st);const vt=new $p(.2,.2,4,8),Mt=new Fd({color:16777215}),_t=new pi(vt,Mt);_t.position.y=2,Vt.add(_t);const Yt=new tm(1.2,1.8,24);Yt.rotateX(-Math.PI/2);const Ft=new Kp({color:3718648,side:ia}),It=new pi(Yt,Ft);It.position.y=.1,Vt.add(It),Rt.add(Vt),M.current=Vt;let me,At=performance.now();const kt=Et=>{me=requestAnimationFrame(kt);const lt=(Et-At)/1e3;if(At=Et,Vt.visible){const gt=1+.15*Math.sin(Et*.006);It.scale.set(gt,1,gt)}if(at==="fly"){const gt=dt.current,wt=gt.speed*lt,Lt=new nt;zt.getWorldDirection(Lt);const ne=new nt().crossVectors(Lt,zt.up).normalize();gt.moveForward&&zt.position.addScaledVector(Lt,wt),gt.moveBackward&&zt.position.addScaledVector(Lt,-wt),gt.moveLeft&&zt.position.addScaledVector(ne,-wt),gt.moveRight&&zt.position.addScaledVector(ne,wt),gt.moveUp&&(zt.position.y+=wt),gt.moveDown&&(zt.position.y=Math.max(1,zt.position.y-wt))}else N.update();Wt.render(Rt,zt)};kt(performance.now());const Jt=Wt.domElement,ee=Et=>{z.current={x:Et.clientX,y:Et.clientY}},jt=Et=>{const lt=Math.abs(Et.clientX-z.current.x),gt=Math.abs(Et.clientY-z.current.y);if(lt>4||gt>4)return;const wt=Jt.getBoundingClientRect();O.current.x=(Et.clientX-wt.left)/wt.width*2-1,O.current.y=-((Et.clientY-wt.top)/wt.height)*2+1,S.current.setFromCamera(O.current,zt);const Lt=S.current.intersectObject(Ct);if(Lt.length>0){const ne=Lt[0],ke=ne.point.x,ln=ne.point.z,ye=ne.point.y/Math.max(f,.001),Ne=B.cols,en=B.rows,cn=B.heights,ar=(ke/St+.5)*(Ne-1),wi=(ln/St+.5)*(en-1),Ni=Math.max(0,Math.min(Ne-1,Math.round(ar))),ni=Math.max(0,Math.min(en-1,Math.round(wi))),ra=St/(Ne-1),Di=St/(en-1),ii=Math.max(0,Ni-1),mi=Math.min(Ne-1,Ni+1),Ui=Math.max(0,ni-1),Oa=Math.min(en-1,ni+1),Eo=cn[ni*Ne+ii],sr=cn[ni*Ne+mi],ys=cn[Ui*Ne+Ni],oa=cn[Oa*Ne+Ni],rr=(sr-Eo)/Math.max(1e-4,(mi-ii)*ra),Ss=(oa-ys)/Math.max(1e-4,(Oa-Ui)*Di),w=Math.sqrt(rr*rr+Ss*Ss),K=Math.atan(w)*(180/Math.PI),ct=B.min_height??0,ut=Math.max(0,ye-ct);Vt.position.copy(ne.point),Vt.visible=!0,p&&p({height:ut,elevation:ye,slope:K,x:ke,z:ln,row:ni,col:Ni})}};Jt.addEventListener("pointerdown",ee),Jt.addEventListener("pointerup",jt);const de=Et=>{const lt=dt.current;switch(Et.code){case"KeyW":lt.moveForward=!0;break;case"KeyS":lt.moveBackward=!0;break;case"KeyA":lt.moveLeft=!0;break;case"KeyD":lt.moveRight=!0;break;case"KeyQ":lt.moveDown=!0;break;case"KeyE":lt.moveUp=!0;break}},ce=Et=>{const lt=dt.current;switch(Et.code){case"KeyW":lt.moveForward=!1;break;case"KeyS":lt.moveBackward=!1;break;case"KeyA":lt.moveLeft=!1;break;case"KeyD":lt.moveRight=!1;break;case"KeyQ":lt.moveDown=!1;break;case"KeyE":lt.moveUp=!1;break}};window.addEventListener("keydown",de),window.addEventListener("keyup",ce);const Le=()=>{if(!X)return;const Et=X.clientWidth,lt=X.clientHeight;Et===0||lt===0||(zt.aspect=Et/lt,zt.updateProjectionMatrix(),Wt.setSize(Et,lt))};window.addEventListener("resize",Le);const k=new ResizeObserver(()=>{Le()});return k.observe(X),()=>{cancelAnimationFrame(me),k.disconnect(),window.removeEventListener("resize",Le),window.removeEventListener("keydown",de),window.removeEventListener("keyup",ce),Jt.removeEventListener("pointerdown",ee),Jt.removeEventListener("pointerup",jt),N.dispose(),Bt.dispose(),$t.dispose(),Wt.dispose(),X.contains(Wt.domElement)&&X.removeChild(Wt.domElement)}},[B,$,f,h,at]),Kt.useEffect(()=>{M.current&&!d&&(M.current.visible=!1)},[d]),Kt.useEffect(()=>{E.current&&b.current&&_>0&&(E.current.position.set(0,90,160),b.current.target.set(0,0,0),b.current.update())},[_]);const ht=X=>{P(X),i&&i(X)},q=()=>{const X=at==="orbit"?"fly":"orbit";j(X),l&&l(X)};return m.jsx("div",{className:"terrain-viewer-wrapper",children:m.jsxs("div",{className:"terrain-canvas-box",ref:v,children:[C&&m.jsxs("div",{className:"terrain-loader-overlay",children:[m.jsx("div",{className:"loading-orbit"}),m.jsx("p",{children:"Constructing 3D Metric Terrain Mesh from DSM..."}),m.jsx("span",{children:"Connecting DSM vertices and mapping RGB texture"})]}),m.jsxs("div",{className:"terrain-overlay-hud",children:[m.jsxs("div",{className:"hud-metric-pill",children:[m.jsx("span",{className:"hud-metric-title",children:"HEIGHT"}),m.jsx("span",{className:"hud-metric-number",children:d?`${d.height.toFixed(1)} m`:B?`${(B.max_height-B.min_height).toFixed(1)} m`:"--"})]}),m.jsxs("div",{className:"hud-metric-pill",children:[m.jsx("span",{className:"hud-metric-title",children:"ELEVATION"}),m.jsx("span",{className:"hud-metric-number",children:d?`${d.elevation.toFixed(1)} m`:B?`${(ot=B.mean_height)==null?void 0:ot.toFixed(1)} m`:"--"})]}),m.jsxs("div",{className:"hud-metric-pill",children:[m.jsx("span",{className:"hud-metric-title",children:"SLOPE"}),m.jsx("span",{className:"hud-metric-number",children:d?`${d.slope.toFixed(1)}°`:"--"})]})]}),m.jsxs("div",{className:"terrain-quick-controls",children:[m.jsxs("div",{className:"view-mode-pills",children:[m.jsx("button",{className:`pill-btn ${$==="rgb"?"active":""}`,onClick:()=>ht("rgb"),title:"Drape original high-res optical satellite image",children:"🛰️ Optical RGB"}),m.jsx("button",{className:`pill-btn ${$==="colormap"?"active":""}`,onClick:()=>ht("colormap"),title:"Color-code terrain by metric elevation in meters",children:"🏔️ Elevation Color"}),m.jsx("button",{className:`pill-btn ${$==="slope"?"active":""}`,onClick:()=>ht("slope"),title:"Color-code terrain by surface slope gradient in degrees",children:"📐 Slope Map"}),m.jsx("button",{className:`pill-btn ${$==="wireframe"?"active":""}`,onClick:()=>ht("wireframe"),title:"Show topographic triangulated wireframe mesh",children:"🕸️ Wireframe"})]}),m.jsx("button",{className:`btn-camera-toggle ${at==="fly"?"active":""}`,onClick:q,title:"Toggle between orbital camera and flythrough mode (WASD + QE)",children:at==="fly"?"✈️ Fly Mode (WASD)":"🛰️ Orbit Camera"})]})]})})}function gw({dsmMesh:o=null,textureMode:e="rgb",onTextureModeChange:i=null,cameraMode:s="orbit",onCameraModeChange:l=null,verticalExaggeration:f=1,colorRamp:h="terrain",selectedMeasurement:d=null,onSelectMeasurement:p=null,resetViewTrigger:_=0,onResetView:v=null}){var z;const[g,x]=Kt.useState(!1),E=Kt.useRef(null),b=()=>{E.current&&(g?(document.exitFullscreen&&document.exitFullscreen(),x(!1)):(E.current.requestFullscreen&&E.current.requestFullscreen(),x(!0)))},A=d&&d.height!==void 0,M=A?`${d.height.toFixed(1)} m`:o?`${(o.max_height-o.min_height).toFixed(1)} m (span)`:"--",S=A?`${d.elevation.toFixed(1)} m`:o?`${(z=o.mean_height)==null?void 0:z.toFixed(1)} m (mean)`:"--",O=A?`${d.slope.toFixed(1)}°`:"--";return m.jsxs("section",{ref:E,className:`terrain-section-card ${g?"fullscreen-mode":""}`,id:"terrain-section",children:[m.jsxs("div",{className:"terrain-header-toolbar",children:[m.jsxs("div",{className:"toolbar-title-group",children:[m.jsx(Bp,{className:"text-cyan",size:20}),m.jsxs("div",{children:[m.jsx("h3",{className:"terrain-title-text",children:"3D Terrain"}),m.jsxs("span",{className:"terrain-subtitle-text",children:["WebGL Metric Heightfield (",o?`${o.rows}×${o.cols} Grid`:"128×128 Grid",")"]})]})]}),m.jsxs("div",{className:"toolbar-controls-group",children:[m.jsxs("div",{className:"camera-mode-toggle-group",children:[m.jsxs("button",{className:`tool-btn ${s==="orbit"?"active":""}`,onClick:()=>l&&l("orbit"),title:"Orbital inspection camera (Left click drag to rotate, right click to pan, scroll to zoom)",children:[m.jsx(M1,{size:15}),m.jsx("span",{children:"Orbit"})]}),m.jsxs("button",{className:`tool-btn ${s==="fly"?"active":""}`,onClick:()=>l&&l("fly"),title:"First-person drone flythrough mode (WASD keys to fly, Q/E for elevation)",children:[m.jsx(E1,{size:15}),m.jsx("span",{children:"Fly"})]})]}),m.jsxs("button",{className:"tool-btn-neutral",onClick:v,title:"Reset camera view to default orientation",children:[m.jsx(A1,{size:15}),m.jsx("span",{children:"Reset View"})]}),m.jsxs("button",{className:"tool-btn-neutral",onClick:b,title:g?"Exit Fullscreen":"View Fullscreen",children:[g?m.jsx(S1,{size:15}):m.jsx(x1,{size:15}),m.jsx("span",{children:g?"Exit":"Fullscreen"})]})]})]}),m.jsxs("div",{className:"terrain-canvas-wrapper",children:[m.jsx(mw,{dsmData:o,textureMode:e,onTextureModeChange:i,cameraMode:s,onCameraModeChange:l,verticalExaggeration:f,colorRamp:h,selectedPoint:d,onSelectPoint:p,resetViewTrigger:_}),m.jsxs("div",{className:"floating-hud-overlay",children:[m.jsxs("div",{className:"hud-card",children:[m.jsx("span",{className:"hud-label",children:"HEIGHT"}),m.jsx("span",{className:"hud-value font-mono",children:M}),m.jsx("span",{className:"hud-sub",children:"Above Ground"})]}),m.jsxs("div",{className:"hud-card",children:[m.jsx("span",{className:"hud-label",children:"ELEVATION"}),m.jsx("span",{className:"hud-value font-mono",children:S}),m.jsx("span",{className:"hud-sub",children:"Datum Elevation"})]}),m.jsxs("div",{className:"hud-card",children:[m.jsx("span",{className:"hud-label",children:"SLOPE"}),m.jsx("span",{className:"hud-value font-mono",children:O}),m.jsx("span",{className:"hud-sub",children:"Surface Angle"})]})]}),m.jsx("div",{className:"terrain-interaction-hint",children:m.jsx("span",{children:"🖱️ Click anywhere on the 3D surface to sample precise point elevation & slope gradient"})})]})]})}function _w({selectedMeasurement:o=null,onResetMeasurement:e=null,verticalExaggeration:i=1,onVerticalExaggerationChange:s=null,textureMode:l="rgb",onTextureModeChange:f=null,colorRamp:h="terrain",onColorRampChange:d=null,dsmMesh:p=null,onExportDSM:_=null}){var z,D,j;const v=o&&o.elevation!==void 0,g=v?o.height.toFixed(2):p?`${(p.max_height-p.min_height).toFixed(2)} (span)`:"--",x=v?o.elevation.toFixed(2):p?`${(z=p.mean_height)==null?void 0:z.toFixed(2)} (mean)`:"--",E=v?o.slope.toFixed(1):"--",b=v?o.x.toFixed(1):"--",A=v?o.z.toFixed(1):"--",M=v?Math.sqrt(o.x**2+o.z**2).toFixed(1):"--";let S="Normal",O="text-cyan";if(v){const F=o.slope;F<5?(S="Flat (<5°)",O="text-emerald"):F<15?(S="Gentle (5-15°)",O="text-cyan"):F<30?(S="Moderate (15-30°)",O="text-amber"):(S="Steep (>30°)",O="text-rose")}return m.jsxs("aside",{className:"terrain-analysis-sidebar",id:"measurements-section",children:[m.jsxs("div",{className:"panel-title-header",children:[m.jsx("div",{className:"panel-badge-label",children:"TERRAIN ANALYSIS"}),m.jsx("h3",{className:"panel-main-heading",children:"Point Measurements"}),m.jsx("p",{className:"panel-instruction-hint",children:v?m.jsxs("span",{className:"text-emerald",children:["🟢 Active Pin at (",b,"m, ",A,"m)"]}):m.jsx("span",{children:"🖱️ Click terrain to measure"})})]}),m.jsxs("div",{className:"analysis-metrics-stack",children:[m.jsxs("div",{className:"analysis-metric-box",children:[m.jsxs("div",{className:"metric-box-top",children:[m.jsx("span",{className:"metric-box-title",children:"HEIGHT"}),m.jsx("span",{className:"metric-box-subtitle",children:"Above Local Ground"})]}),m.jsxs("div",{className:"metric-box-content",children:[m.jsx("span",{className:"metric-num-lg font-mono",children:g}),m.jsx("span",{className:"metric-unit-text",children:"m"})]}),m.jsx("div",{className:"metric-box-footer",children:m.jsx("span",{children:"Datum: Local Relief Baseline"})})]}),m.jsxs("div",{className:"analysis-metric-box",children:[m.jsxs("div",{className:"metric-box-top",children:[m.jsx("span",{className:"metric-box-title",children:"ELEVATION"}),m.jsx("span",{className:"metric-box-subtitle",children:"Calibrated Metric DSM"})]}),m.jsxs("div",{className:"metric-box-content",children:[m.jsx("span",{className:"metric-num-lg font-mono",children:x}),m.jsx("span",{className:"metric-unit-text",children:"m"})]}),m.jsx("div",{className:"metric-box-footer",children:m.jsxs("span",{children:["Grid Min: ",((D=p==null?void 0:p.min_height)==null?void 0:D.toFixed(1))||0,"m | Max: ",((j=p==null?void 0:p.max_height)==null?void 0:j.toFixed(1))||0,"m"]})})]}),m.jsxs("div",{className:"analysis-metric-box",children:[m.jsxs("div",{className:"metric-box-top",children:[m.jsx("span",{className:"metric-box-title",children:"SLOPE"}),m.jsx("span",{className:`metric-box-subtitle ${O}`,children:v?S:"Local Surface Gradient"})]}),m.jsxs("div",{className:"metric-box-content",children:[m.jsx("span",{className:`metric-num-lg font-mono ${O}`,children:E}),m.jsx("span",{className:"metric-unit-text",children:"deg (°)"})]}),m.jsx("div",{className:"metric-box-footer",children:m.jsx("span",{children:"Gradient: arctan(|∇z|)"})})]}),m.jsxs("div",{className:"analysis-metric-box",children:[m.jsxs("div",{className:"metric-box-top",children:[m.jsx("span",{className:"metric-box-title",children:"DISTANCE"}),m.jsx("span",{className:"metric-box-subtitle",children:"From Center (0, 0)"})]}),m.jsxs("div",{className:"metric-box-content",children:[m.jsx("span",{className:"metric-num-lg font-mono",children:M}),m.jsx("span",{className:"metric-unit-text",children:"m"})]}),m.jsx("div",{className:"metric-box-footer",children:m.jsxs("span",{children:["Coords: (",b,"m, ",A,"m)"]})})]})]}),m.jsxs("div",{className:"panel-controls-group",children:[m.jsxs("div",{className:"control-header-label",children:[m.jsx(Hp,{size:14}),m.jsx("span",{children:"Surface & Exaggeration"})]}),m.jsxs("div",{className:"exaggeration-control-item",children:[m.jsxs("div",{className:"slider-label-row",children:[m.jsx("span",{children:"Vertical Exaggeration:"}),m.jsxs("span",{className:"font-mono text-cyan",children:[i.toFixed(1),"x"]})]}),m.jsx("input",{type:"range",min:"0.5",max:"4.0",step:"0.1",value:i,onChange:F=>s&&s(parseFloat(F.target.value)),className:"custom-range-slider"}),m.jsxs("div",{className:"slider-markers",children:[m.jsx("span",{children:"0.5x"}),m.jsx("span",{children:"1.0x (True)"}),m.jsx("span",{children:"2.5x"}),m.jsx("span",{children:"4.0x"})]})]}),m.jsxs("div",{className:"texture-switcher-row",children:[m.jsx("button",{className:`texture-pill-btn ${l==="rgb"?"active":""}`,onClick:()=>f&&f("rgb"),children:"🛰️ RGB"}),m.jsx("button",{className:`texture-pill-btn ${l==="colormap"?"active":""}`,onClick:()=>f&&f("colormap"),children:"🏔️ Color"}),m.jsx("button",{className:`texture-pill-btn ${l==="slope"?"active":""}`,onClick:()=>f&&f("slope"),children:"📐 Slope"}),m.jsx("button",{className:`texture-pill-btn ${l==="wireframe"?"active":""}`,onClick:()=>f&&f("wireframe"),children:"🕸️ Wire"})]})]}),m.jsxs("div",{className:"panel-action-buttons",children:[v&&e&&m.jsxs("button",{className:"btn-clear-pin",onClick:e,children:[m.jsx(p1,{size:15}),m.jsx("span",{children:"Reset Measurement Marker"})]}),m.jsxs("button",{className:"btn-download-dsm-direct",onClick:_,children:[m.jsx(Ip,{size:15}),m.jsx("span",{children:"Export Metric DSM GeoTIFF"})]})]})]})}function vw({pipelineResult:o=null,dsmMesh:e=null,onExportDSM:i=null}){var A,M;const s=(A=o==null?void 0:o.stages)==null?void 0:A.dsm,l=(M=o==null?void 0:o.stages)==null?void 0:M.metric_calibration,f=s?`${s.minimum_elevation.toFixed(2)} m`:e?`${e.min_height.toFixed(2)} m`:"--",h=s?`${s.maximum_elevation.toFixed(2)} m`:e?`${e.max_height.toFixed(2)} m`:"--",d=s?`${s.mean_elevation.toFixed(2)} m`:e?`${e.mean_height.toFixed(2)} m`:"--",p=s?`${s.raster_dimensions.width} × ${s.raster_dimensions.height} px`:"--",_=s?s.crs:e?"EPSG:3857 (Local Metric)":"--";s&&s.dsm_file;const v=(l==null?void 0:l.rmse_meters)!==void 0?`${l.rmse_meters.toFixed(2)} m`:"--",g=(l==null?void 0:l.mae_meters)!==void 0?`${l.mae_meters.toFixed(2)} m`:"--",x=(l==null?void 0:l.r_squared)!==void 0?`${l.r_squared.toFixed(3)}`:"--",E=(l==null?void 0:l.valid_pixel_percentage)!==void 0?`${l.valid_pixel_percentage.toFixed(1)}%`:"--",b=l!=null&&l.formula?`${l.formula} (a = ${l.scale_factor_a.toFixed(4)}, b = ${l.offset_b.toFixed(2)}m)`:"H = a·D + b";return m.jsxs("section",{className:"dsm-analysis-section",id:"dsm-analysis-section",children:[m.jsxs("div",{className:"section-header-block",children:[m.jsxs("div",{className:"section-title-wrap",children:[m.jsx(Hx,{className:"text-cyan",size:22}),m.jsxs("div",{children:[m.jsx("h3",{className:"section-title-text",children:"DSM Analysis & Accuracy Validation"}),m.jsx("p",{className:"section-subtitle-text",children:"Real geospatial surface metrics and physical ground truth validation extracted from the actual calibrated DSM."})]})]}),m.jsxs("button",{className:"btn-dsm-download",onClick:i,children:[m.jsx(Ip,{size:15}),m.jsx("span",{children:"Download GeoTIFF (dsm.tif)"})]})]}),m.jsxs("div",{className:"dsm-cards-container",children:[m.jsxs("div",{className:"dsm-card-box",children:[m.jsxs("div",{className:"dsm-card-title-bar",children:[m.jsx(Fp,{size:18,className:"text-emerald"}),m.jsx("h4",{children:"DSM Statistics"})]}),m.jsxs("div",{className:"dsm-stat-grid",children:[m.jsxs("div",{className:"dsm-stat-item",children:[m.jsx("span",{className:"stat-label",children:"Minimum Elevation"}),m.jsx("span",{className:"stat-value font-mono",children:f}),m.jsx("span",{className:"stat-desc",children:"Base ground datum"})]}),m.jsxs("div",{className:"dsm-stat-item",children:[m.jsx("span",{className:"stat-label",children:"Maximum Elevation"}),m.jsx("span",{className:"stat-value font-mono",children:h}),m.jsx("span",{className:"stat-desc",children:"Highest peak / roofline"})]}),m.jsxs("div",{className:"dsm-stat-item",children:[m.jsx("span",{className:"stat-label",children:"Mean Elevation"}),m.jsx("span",{className:"stat-value font-mono",children:d}),m.jsx("span",{className:"stat-desc",children:"Terrain surface average"})]}),m.jsxs("div",{className:"dsm-stat-item",children:[m.jsx("span",{className:"stat-label",children:"Raster Resolution"}),m.jsx("span",{className:"stat-value font-mono",children:p}),m.jsx("span",{className:"stat-desc",children:"Ground GSD: 0.50 m/px"})]}),m.jsxs("div",{className:"dsm-stat-item full-width",children:[m.jsx("span",{className:"stat-label",children:"Coordinate Reference System"}),m.jsx("span",{className:"stat-value font-mono crs-badge",children:_}),m.jsx("span",{className:"stat-desc",children:"Geospatial projection standard"})]})]})]}),m.jsxs("div",{className:"dsm-card-box",children:[m.jsxs("div",{className:"dsm-card-title-bar",children:[m.jsx(yy,{size:18,className:"text-blue"}),m.jsx("h4",{children:"Elevation Validation & Calibration"})]}),m.jsxs("div",{className:"dsm-stat-grid",children:[m.jsxs("div",{className:"dsm-stat-item",children:[m.jsx("span",{className:"stat-label",children:"Root Mean Square Error (RMSE)"}),m.jsx("span",{className:"stat-value font-mono text-cyan",children:v}),m.jsx("span",{className:"stat-desc",children:"Against reference elevation"})]}),m.jsxs("div",{className:"dsm-stat-item",children:[m.jsx("span",{className:"stat-label",children:"Mean Absolute Error (MAE)"}),m.jsx("span",{className:"stat-value font-mono text-emerald",children:g}),m.jsx("span",{className:"stat-desc",children:"Average absolute deviation"})]}),m.jsxs("div",{className:"dsm-stat-item",children:[m.jsx("span",{className:"stat-label",children:"Correlation (R²)"}),m.jsx("span",{className:"stat-value font-mono",children:x}),m.jsx("span",{className:"stat-desc",children:"Linear correlation goodness"})]}),m.jsxs("div",{className:"dsm-stat-item",children:[m.jsx("span",{className:"stat-label",children:"Valid Overlap"}),m.jsx("span",{className:"stat-value font-mono",children:E}),m.jsx("span",{className:"stat-desc",children:"NoData-filtered pixels"})]}),m.jsxs("div",{className:"dsm-stat-item full-width",children:[m.jsx("span",{className:"stat-label",children:"Metric Calibration Formula"}),m.jsx("span",{className:"stat-value font-mono formula-badge",children:b}),m.jsx("span",{className:"stat-desc",children:"Least-squares affine model"})]})]})]})]})]})}function xw({API_BASE:o=""}){var P,B,U,C,H,at,$,dt,ht,q,ot,X,xt,yt,Rt,zt,Wt,N,W;const[e,i]=Kt.useState(null),[s,l]=Kt.useState("dataset"),[f,h]=Kt.useState(!1),[d,p]=Kt.useState(null),_=async()=>{h(!0),p(null);try{const tt=await fetch(`${o}/api/evaluate/summary`);if(!tt.ok)throw new Error("Could not fetch accuracy evaluation report");const ft=await tt.json();i(ft)}catch(tt){console.warn("Evaluation summary fetch error:",tt),p(tt.message)}finally{h(!1)}};Kt.useEffect(()=>{_()},[o]);const v=async()=>{h(!0),p(null);try{const tt=await fetch(`${o}/api/evaluate`,{method:"POST"});if(!tt.ok)throw new Error("Accuracy evaluation run failed");const ft=await tt.json();await _()}catch(tt){console.error("Run evaluation error:",tt),p(tt.message)}finally{h(!1)}},g=s==="dataset",x=(P=e==null?void 0:e.sample_results)==null?void 0:P[0],E=g?(B=e==null?void 0:e.baseline)==null?void 0:B.mean_rmse:(U=x==null?void 0:x.baseline)==null?void 0:U.rmse,b=g?(C=e==null?void 0:e.after)==null?void 0:C.mean_rmse:(H=x==null?void 0:x.after)==null?void 0:H.rmse,A=g?(at=e==null?void 0:e.improvement)==null?void 0:at.rmse_percent:($=x==null?void 0:x.improvement)==null?void 0:$.rmse_percent,M=g?(dt=e==null?void 0:e.baseline)==null?void 0:dt.mean_mae:(ht=x==null?void 0:x.baseline)==null?void 0:ht.mae,S=g?(q=e==null?void 0:e.after)==null?void 0:q.mean_mae:(ot=x==null?void 0:x.after)==null?void 0:ot.mae,O=g?(X=e==null?void 0:e.improvement)==null?void 0:X.mae_percent:(xt=x==null?void 0:x.improvement)==null?void 0:xt.mae_percent,z=g?(yt=e==null?void 0:e.baseline)==null?void 0:yt.mean_correlation:(Rt=x==null?void 0:x.baseline)==null?void 0:Rt.correlation,D=g?(zt=e==null?void 0:e.after)==null?void 0:zt.mean_correlation:(Wt=x==null?void 0:x.after)==null?void 0:Wt.correlation,j=g?(N=e==null?void 0:e.improvement)==null?void 0:N.correlation_change:(W=x==null?void 0:x.improvement)==null?void 0:W.correlation_change,F=(tt,ft=2,St=!1)=>typeof tt=="number"&&!isNaN(tt)?`${St&&tt>0?"+":""}${tt.toFixed(ft)}`:"--";return m.jsxs("section",{className:"accuracy-evaluation-section",id:"accuracy-section",children:[m.jsxs("div",{className:"eval-header-bar",children:[m.jsxs("div",{className:"eval-title-group",children:[m.jsx("div",{className:"eval-header-icon-box",children:m.jsx(c1,{size:22,className:"text-emerald-500"})}),m.jsxs("div",{children:[m.jsxs("div",{className:"eval-badge-pill",children:[m.jsx("span",{className:"eval-badge-dot"}),m.jsx("span",{children:"REAL BENCHMARK EVALUATION"})]}),m.jsx("h3",{className:"eval-main-title",children:"Accuracy Improvement"}),m.jsx("p",{className:"eval-subtitle",children:"Measured against ground-truth LiDAR reference elevation data (GAMUS Benchmark Split)."})]})]}),m.jsxs("div",{className:"eval-controls-group",children:[m.jsxs("div",{className:"eval-mode-toggle",children:[m.jsx("button",{className:`mode-btn ${s==="dataset"?"active":""}`,onClick:()=>l("dataset"),children:m.jsx("span",{children:"Dataset Split (N=2)"})}),m.jsx("button",{className:`mode-btn ${s==="sample"?"active":""}`,onClick:()=>l("sample"),children:m.jsx("span",{children:"Held-Out Sample (DC_02_26)"})})]}),m.jsxs("button",{className:"btn-run-eval",onClick:v,disabled:f,title:"Compute real Before vs After metrics against ground-truth reference rasters",children:[m.jsx(T1,{size:14,className:f?"spin-icon":""}),m.jsx("span",{children:f?"Calculating Metrics...":"Re-Run Evaluation"})]})]})]}),d&&m.jsxs("div",{className:"eval-error-banner",children:[m.jsx(v1,{size:16}),m.jsxs("span",{children:["Notice: ",d,'. Click "Re-Run Evaluation" to calculate from validation HDF5 files.']})]}),m.jsxs("div",{className:"eval-metrics-grid",children:[m.jsxs("div",{className:"eval-metric-card",children:[m.jsxs("div",{className:"metric-card-header",children:[m.jsx("span",{className:"metric-tag-label",children:"ROOT MEAN SQUARE ERROR (RMSE)"}),m.jsx("span",{className:"metric-direction-tag lower",children:"Lower is better ↓"})]}),m.jsxs("div",{className:"metric-comparison-row",children:[m.jsxs("div",{className:"metric-column before",children:[m.jsx("span",{className:"comp-label",children:"BEFORE (Baseline DA3)"}),m.jsxs("div",{className:"comp-value-row",children:[m.jsx("strong",{className:"comp-number",children:F(E,2)}),m.jsx("span",{className:"comp-unit",children:"m"})]}),m.jsx("span",{className:"comp-subtext",children:"Pretrained relative depth"})]}),m.jsx("div",{className:"comp-arrow-divider",children:"→"}),m.jsxs("div",{className:"metric-column after",children:[m.jsx("span",{className:"comp-label",children:"AFTER (DepthWizard)"}),m.jsxs("div",{className:"comp-value-row",children:[m.jsx("strong",{className:"comp-number text-emerald",children:F(b,2)}),m.jsx("span",{className:"comp-unit",children:"m"})]}),m.jsx("span",{className:"comp-subtext",children:"Metric calibrated DSM"})]})]}),m.jsxs("div",{className:"metric-delta-footer positive",children:[m.jsx(Ev,{size:16}),m.jsxs("span",{className:"delta-text",children:[m.jsx("strong",{children:typeof A=="number"?`${A.toFixed(1)}%`:"--%"})," Error Reduction"]})]})]}),m.jsxs("div",{className:"eval-metric-card",children:[m.jsxs("div",{className:"metric-card-header",children:[m.jsx("span",{className:"metric-tag-label",children:"MEAN ABSOLUTE ERROR (MAE)"}),m.jsx("span",{className:"metric-direction-tag lower",children:"Lower is better ↓"})]}),m.jsxs("div",{className:"metric-comparison-row",children:[m.jsxs("div",{className:"metric-column before",children:[m.jsx("span",{className:"comp-label",children:"BEFORE (Baseline DA3)"}),m.jsxs("div",{className:"comp-value-row",children:[m.jsx("strong",{className:"comp-number",children:F(M,2)}),m.jsx("span",{className:"comp-unit",children:"m"})]}),m.jsx("span",{className:"comp-subtext",children:"Pretrained relative depth"})]}),m.jsx("div",{className:"comp-arrow-divider",children:"→"}),m.jsxs("div",{className:"metric-column after",children:[m.jsx("span",{className:"comp-label",children:"AFTER (DepthWizard)"}),m.jsxs("div",{className:"comp-value-row",children:[m.jsx("strong",{className:"comp-number text-emerald",children:F(S,2)}),m.jsx("span",{className:"comp-unit",children:"m"})]}),m.jsx("span",{className:"comp-subtext",children:"Metric calibrated DSM"})]})]}),m.jsxs("div",{className:"metric-delta-footer positive",children:[m.jsx(Ev,{size:16}),m.jsxs("span",{className:"delta-text",children:[m.jsx("strong",{children:typeof O=="number"?`${O.toFixed(1)}%`:"--%"})," Error Reduction"]})]})]}),m.jsxs("div",{className:"eval-metric-card",children:[m.jsxs("div",{className:"metric-card-header",children:[m.jsx("span",{className:"metric-tag-label",children:"PEARSON CORRELATION (r)"}),m.jsx("span",{className:"metric-direction-tag higher",children:"Higher is better ↑"})]}),m.jsxs("div",{className:"metric-comparison-row",children:[m.jsxs("div",{className:"metric-column before",children:[m.jsx("span",{className:"comp-label",children:"BEFORE (Baseline DA3)"}),m.jsx("div",{className:"comp-value-row",children:m.jsx("strong",{className:"comp-number",children:F(z,2,!0)})}),m.jsx("span",{className:"comp-subtext",children:"Raw inverse disparity"})]}),m.jsx("div",{className:"comp-arrow-divider",children:"→"}),m.jsxs("div",{className:"metric-column after",children:[m.jsx("span",{className:"comp-label",children:"AFTER (DepthWizard)"}),m.jsx("div",{className:"comp-value-row",children:m.jsx("strong",{className:"comp-number text-emerald",children:F(D,2,!0)})}),m.jsx("span",{className:"comp-subtext",children:"True elevation gradient"})]})]}),m.jsxs("div",{className:"metric-delta-footer positive",children:[m.jsx(R1,{size:16}),m.jsxs("span",{className:"delta-text",children:[m.jsx("strong",{children:F(j,3,!0)})," Positive Alignment"]})]})]})]}),m.jsxs("div",{className:"eval-visual-comparison-box",children:[m.jsxs("div",{className:"visual-box-header",children:[m.jsxs("div",{className:"visual-box-title",children:[m.jsx(Hx,{size:17,className:"text-cyan"}),m.jsx("h4",{children:"Before vs. After Reference Inspection"})]}),m.jsx("span",{className:"scientific-notice",children:"Lower RMSE & MAE indicate reduced metric height error. Higher correlation indicates stronger topological agreement."})]}),m.jsx("div",{className:"visual-figure-frame",children:m.jsx("img",{src:`${o}/static/outputs/evaluation/comparison.png?t=${Date.now()}`,alt:"DepthWizard Accuracy Evaluation Comparison",className:"comparison-figure-img",onError:tt=>{tt.target.style.display="none"}})})]}),m.jsxs("div",{className:"eval-provenance-box",children:[m.jsxs("div",{className:"provenance-grid",children:[m.jsxs("div",{className:"prov-item",children:[m.jsx("span",{className:"prov-label",children:"BENCHMARK DATASET"}),m.jsx("strong",{className:"prov-value",children:"GAMUS (Urban Surface)"}),m.jsx("span",{className:"prov-sub",children:"ISRO SIH 2026 Test Suite"})]}),m.jsxs("div",{className:"prov-item",children:[m.jsx("span",{className:"prov-label",children:"EVALUATION SPLIT"}),m.jsx("strong",{className:"prov-value",children:"Validation (Held-Out)"}),m.jsx("span",{className:"prov-sub",children:"Strictly zero training overlap"})]}),m.jsxs("div",{className:"prov-item",children:[m.jsx("span",{className:"prov-label",children:"REFERENCE GROUND TRUTH"}),m.jsx("strong",{className:"prov-value",children:"LiDAR AGL Elevation"}),m.jsx("span",{className:"prov-sub",children:"Physical meters datum"})]}),m.jsxs("div",{className:"prov-item",children:[m.jsx("span",{className:"prov-label",children:"PIPELINE ADAPTATION"}),m.jsx("strong",{className:"prov-value",children:"Affine Scale Calibration"}),m.jsx("span",{className:"prov-sub",children:"H = a·D + b (Least-Squares)"})]})]}),m.jsxs("div",{className:"provenance-actions-bar",children:[m.jsx("div",{className:"prov-notice-text",children:m.jsx("span",{children:"All values calculated mathematically from real prediction arrays and LiDAR ground truth."})}),m.jsxs("div",{className:"prov-download-links",children:[m.jsxs("a",{href:`${o}/static/outputs/evaluation/accuracy_report.json`,target:"_blank",rel:"noreferrer",className:"btn-prov-link",children:[m.jsx(Ip,{size:13}),m.jsx("span",{children:"accuracy_report.json"})]}),m.jsxs("a",{href:`${o}/static/outputs/evaluation/accuracy_report.csv`,target:"_blank",rel:"noreferrer",className:"btn-prov-link",children:[m.jsx(ny,{size:13}),m.jsx("span",{children:"accuracy_report.csv"})]})]})]})]})]})}function yw({isOpen:o=!1,onClose:e=null,systemStatus:i=null,colorRamp:s="terrain",onColorRampChange:l=null,verticalExaggeration:f=1,onVerticalExaggerationChange:h=null}){var v,g,x,E;if(!o)return null;const d=((v=i==null?void 0:i.environment)==null?void 0:v.device_name)||"CPU",p=((g=i==null?void 0:i.environment)==null?void 0:g.python_version)||"3.12+",_=(x=i==null?void 0:i.model)!=null&&x.weights_ready?"Cached & Ready":"Auto-Downloading";return m.jsx("div",{className:"modal-backdrop-blur",onClick:e,children:m.jsxs("div",{className:"settings-modal-dialog",onClick:b=>b.stopPropagation(),children:[m.jsxs("div",{className:"modal-header-row",children:[m.jsxs("div",{className:"modal-title-wrap",children:[m.jsx(vy,{size:20,className:"text-cyan"}),m.jsx("h3",{className:"modal-heading-text",children:"DepthWizard Settings & Diagnostics"})]}),m.jsx("button",{className:"modal-close-icon-btn",onClick:e,"aria-label":"Close dialog",children:m.jsx(Ay,{size:18})})]}),m.jsxs("div",{className:"modal-body-scrollable",children:[m.jsxs("div",{className:"settings-section-card",children:[m.jsxs("h4",{className:"settings-section-title",children:[m.jsx(Qx,{size:16}),m.jsx("span",{children:"Compute & Hardware Diagnostics"})]}),m.jsxs("div",{className:"settings-details-table",children:[m.jsxs("div",{className:"setting-row",children:[m.jsx("span",{className:"setting-key",children:"Active Compute Device"}),m.jsx("span",{className:"setting-val font-mono",children:d})]}),m.jsxs("div",{className:"setting-row",children:[m.jsx("span",{className:"setting-key",children:"PyTorch Acceleration"}),m.jsx("span",{className:"setting-val font-mono",children:(E=i==null?void 0:i.environment)!=null&&E.cuda_available?"CUDA Active":"CPU Optimization (AVX2)"})]}),m.jsxs("div",{className:"setting-row",children:[m.jsx("span",{className:"setting-key",children:"Python Runtime"}),m.jsxs("span",{className:"setting-val font-mono",children:["v",p]})]}),m.jsxs("div",{className:"setting-row",children:[m.jsx("span",{className:"setting-key",children:"Model Weights Status"}),m.jsx("span",{className:"setting-val font-mono",children:_})]})]})]}),m.jsxs("div",{className:"settings-section-card",children:[m.jsxs("h4",{className:"settings-section-title",children:[m.jsx(Hp,{size:16}),m.jsx("span",{children:"Display & Topographic Preferences"})]}),m.jsxs("div",{className:"settings-details-table",children:[m.jsxs("div",{className:"setting-row",children:[m.jsx("span",{className:"setting-key",children:"Elevation Colormap"}),m.jsxs("select",{value:s,onChange:b=>l&&l(b.target.value),className:"settings-dropdown",children:[m.jsx("option",{value:"terrain",children:"Natural Terrain (Hypsometric)"}),m.jsx("option",{value:"viridis",children:"Viridis Spectral"})]})]}),m.jsxs("div",{className:"setting-row",children:[m.jsx("span",{className:"setting-key",children:"Default Vertical Exaggeration"}),m.jsxs("span",{className:"setting-val font-mono",children:[f.toFixed(1),"x"]})]})]})]}),m.jsxs("div",{className:"settings-section-card",children:[m.jsxs("h4",{className:"settings-section-title",children:[m.jsx(_1,{size:16}),m.jsx("span",{children:"API Gateway & Service Health"})]}),m.jsxs("div",{className:"settings-details-table",children:[m.jsxs("div",{className:"setting-row",children:[m.jsx("span",{className:"setting-key",children:"Backend Endpoint"}),m.jsx("span",{className:"setting-val font-mono",children:"http://127.0.0.1:8000"})]}),m.jsxs("div",{className:"setting-row",children:[m.jsx("span",{className:"setting-key",children:"Swagger Documentation"}),m.jsx("a",{href:"http://127.0.0.1:8000/docs",target:"_blank",rel:"noreferrer",className:"setting-link font-mono",children:"/docs ↗"})]}),m.jsxs("div",{className:"setting-row",children:[m.jsx("span",{className:"setting-key",children:"ISRO Problem Statement"}),m.jsx("span",{className:"setting-val font-mono",children:"SIH 2026 #26175"})]})]})]})]}),m.jsx("div",{className:"modal-footer-row",children:m.jsx("button",{className:"btn-modal-done",onClick:e,children:"Done"})})]})})}function Sw(){var W;const[o,e]=Kt.useState("dashboard"),[i,s]=Kt.useState(!1),[l,f]=Kt.useState(null),h="",[d,p]=Kt.useState(null),[_,v]=Kt.useState("sample_gamus_optical.png"),[g,x]=Kt.useState("PNG"),[E,b]=Kt.useState(`${h}/static/data/sample/sample_gamus_optical.png`),[A,M]=Kt.useState("idle"),[S,O]=Kt.useState(null),[z,D]=Kt.useState(null),[j,F]=Kt.useState(null),[P,B]=Kt.useState("orbit"),[U,C]=Kt.useState("rgb"),[H,at]=Kt.useState(1),[$,dt]=Kt.useState("terrain"),[ht,q]=Kt.useState(null),[ot,X]=Kt.useState(0);Kt.useEffect(()=>{fetch(`${h}/api/health`).then(tt=>tt.json()).then(tt=>f(tt)).catch(tt=>{console.warn("Backend currently connecting:",tt)}),fetch(`${h}/api/terrain/mesh?resolution=128`).then(tt=>{if(!tt.ok)throw new Error("Could not load default mesh");return tt.json()}).then(tt=>{F(tt)}).catch(tt=>{console.log("Default mesh will be generated upon pipeline run:",tt)})},[]);const xt=tt=>{if(!tt)return;p(tt),v(tt.name);const ft=tt.name.split(".").pop().toUpperCase();if(x(ft==="TIF"||ft==="TIFF"?"GeoTIFF":ft),tt.type.startsWith("image/")){const St=URL.createObjectURL(tt);b(St)}else b(null)},yt=()=>{p(null),v("sample_gamus_optical.png"),x("PNG"),b(`${h}/static/data/sample/sample_gamus_optical.png`)},Rt=async()=>{var ft;M("running"),D(null);const tt=new FormData;d&&tt.append("file",d);try{const St=await fetch(`${h}/api/pipeline/run?gsd_m=0.5&mesh_resolution=128`,{method:"POST",body:tt});if(!St.ok){const bt=await St.json();throw new Error(bt.detail||"Pipeline execution failed")}const Bt=await St.json();if(O(Bt),M("completed"),(ft=Bt.stages)!=null&&ft.terrain_3d){const bt=Bt.stages.terrain_3d;F({rows:bt.rows,cols:bt.cols,min_height:bt.min_height,max_height:bt.max_height,mean_height:bt.mean_height,heights:bt.heights,texture_url:`${h}${bt.texture_url}?t=${Date.now()}`,dsm_vis_url:`${h}${bt.dsm_vis_url}?t=${Date.now()}`})}const Nt=document.getElementById("upload-section");Nt&&Nt.scrollIntoView({behavior:"smooth",block:"start"})}catch(St){console.error("Pipeline error:",St),D(St.message),M("error")}},zt=()=>{window.open(`${h}/static/outputs/dsm/dsm.tif`,"_blank")},Wt=tt=>{if(e(tt),tt==="settings"){s(!0);return}const St={dashboard:null,upload:"upload-section",da3:"upload-section",terrain:"terrain-section",measurements:"terrain-section","dsm-analysis":"dsm-analysis-section",accuracy:"accuracy-section",gamus:"accuracy-section"}[tt];if(St){const Bt=document.getElementById(St);Bt&&Bt.scrollIntoView({behavior:"smooth",block:"start"})}else window.scrollTo({top:0,behavior:"smooth"})},N=A==="running";return m.jsxs("div",{className:"luminous-app-root",children:[m.jsx(C1,{activeNav:o,onSelectNav:Wt,onOpenSettings:()=>s(!0),onRunDemo:()=>{yt(),Rt()},isRunning:N,systemStatus:l}),m.jsx(w1,{onUploadClick:()=>Wt("upload"),onDemoClick:()=>{yt(),Rt()},onSelectFeature:Wt,activeFeature:o,isRunning:N}),m.jsxs("main",{className:"luminous-workspace-content",children:[m.jsxs("div",{className:"specs-pill-banner",children:[m.jsxs("div",{className:"spec-item",children:[m.jsx("span",{className:"spec-dot green"}),m.jsx("span",{className:"spec-label",children:"Model:"}),m.jsx("strong",{className:"spec-val",children:"Depth Anything 3 (Small / 34.3M)"})]}),m.jsxs("div",{className:"spec-item",children:[m.jsx(Qx,{size:14,className:"text-slate-500"}),m.jsx("span",{className:"spec-label",children:"Backend Device:"}),m.jsx("strong",{className:"spec-val",children:((W=l==null?void 0:l.environment)==null?void 0:W.device_name)||"Host CPU / PyTorch 2.14"})]}),m.jsxs("div",{className:"spec-item",children:[m.jsx(Du,{size:14,className:"text-slate-500"}),m.jsx("span",{className:"spec-label",children:"Calibration:"}),m.jsx("strong",{className:"spec-val",children:"Affine Least-Squares (H = a·D + b)"})]}),m.jsxs("div",{className:"spec-item",children:[m.jsx(yy,{size:14,className:"text-emerald-500"}),m.jsx("span",{className:"spec-label",children:"ISRO SIH 2026:"}),m.jsx("strong",{className:"spec-val",children:"PS #26175 Verified"})]})]}),m.jsx("div",{className:"workspace-section-container",children:m.jsx(N1,{pipelineResult:S,dsmMesh:j,selectedMeasurement:ht})}),m.jsx("div",{className:"workspace-section-container",children:m.jsx(D1,{pipelineState:A,pipelineResult:S})}),m.jsx("div",{className:"workspace-section-container",id:"upload-section",children:m.jsx(U1,{selectedFile:d,fileName:_,fileFormat:g,filePreviewUrl:E,pipelineState:A,pipelineResult:S,pipelineError:z,onFileSelect:xt,onLoadSample:yt,onRunPipeline:Rt})}),m.jsx("div",{className:"workspace-section-container",id:"terrain-section",children:m.jsxs("div",{className:"terrain-workspace-layout-grid",children:[m.jsx("div",{className:"terrain-viewer-col",children:m.jsx(gw,{dsmMesh:j,textureMode:U,onTextureModeChange:C,cameraMode:P,onCameraModeChange:B,verticalExaggeration:H,colorRamp:$,selectedMeasurement:ht,onSelectMeasurement:q,resetViewTrigger:ot,onResetView:()=>X(tt=>tt+1)})}),m.jsx("div",{className:"terrain-sidebar-col",id:"measurements-section",children:m.jsx(_w,{selectedMeasurement:ht,onResetMeasurement:()=>q(null),verticalExaggeration:H,onVerticalExaggerationChange:at,textureMode:U,onTextureModeChange:C,colorRamp:$,onColorRampChange:dt,dsmMesh:j,onExportDSM:zt})})]})}),m.jsx("div",{className:"workspace-section-container",id:"dsm-analysis-section",children:m.jsx(vw,{pipelineResult:S,dsmMesh:j,onExportDSM:zt})}),m.jsx("div",{className:"workspace-section-container",id:"accuracy-section",children:m.jsx(xw,{API_BASE:h})}),m.jsxs("footer",{className:"luminous-footer",children:[m.jsxs("div",{className:"footer-content-inner",children:[m.jsxs("div",{className:"footer-brand-side",children:[m.jsx("div",{className:"footer-brand-title",children:"DepthWizard"}),m.jsx("p",{className:"footer-desc",children:"Single-View Height Estimation and 3D Flythrough for ISRO SIH 2026 Problem Statement 26175. Powered by Depth Anything 3 foundation geometry model."})]}),m.jsxs("div",{className:"footer-badges-side",children:[m.jsx("span",{className:"footer-chip",children:"Depth Anything 3"}),m.jsx("span",{className:"footer-chip",children:"FastAPI & PyTorch"}),m.jsx("span",{className:"footer-chip",children:"Three.js WebGL"}),m.jsx("span",{className:"footer-chip",children:"GAMUS & GLO-30 Grounded"})]})]}),m.jsxs("div",{className:"footer-bottom-line",children:[m.jsx("span",{children:"© 2026 DepthWizard Research Team. All rights reserved."}),m.jsx("span",{children:"ISRO Smart India Hackathon 2026 | Problem Statement 26175"})]})]})]}),m.jsx(yw,{isOpen:i,onClose:()=>s(!1),systemStatus:l,colorRamp:$,onColorRampChange:dt,verticalExaggeration:H,onVerticalExaggerationChange:at})]})}class Mw extends Kt.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,i){console.error("DepthWizard UI Render Error:",e,i)}render(){var e,i;return this.state.hasError?m.jsxs("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"#0f172a",color:"#f8fafc",fontFamily:"system-ui, -apple-system, sans-serif",padding:"30px",textAlign:"center"},children:[m.jsx("h2",{style:{fontSize:"26px",color:"#f87171",marginBottom:"14px",fontWeight:700},children:"DepthWizard UI Render Exception"}),m.jsx("p",{style:{maxWidth:"640px",color:"#cbd5e1",marginBottom:"20px",fontSize:"15px"},children:((e=this.state.error)==null?void 0:e.message)||"A render error occurred."}),m.jsx("pre",{style:{background:"#1e293b",border:"1px solid #334155",padding:"16px 20px",borderRadius:"10px",textAlign:"left",maxWidth:"850px",overflowX:"auto",fontSize:"12.5px",color:"#38bdf8"},children:(i=this.state.error)==null?void 0:i.stack}),m.jsx("button",{onClick:()=>window.location.reload(),style:{marginTop:"24px",padding:"12px 28px",background:"#0284c7",color:"#ffffff",border:"none",borderRadius:"9999px",fontWeight:700,fontSize:"14px",cursor:"pointer"},children:"Reload DepthWizard"})]}):this.props.children}}QE.createRoot(document.getElementById("root")).render(m.jsx(Kt.StrictMode,{children:m.jsx(Mw,{children:m.jsx(Sw,{})})}));
