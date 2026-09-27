(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const f of l)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const f={};return l.integrity&&(f.integrity=l.integrity),l.referrerPolicy&&(f.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?f.credentials="include":l.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function r(l){if(l.ep)return;l.ep=!0;const f=i(l);fetch(l.href,f)}})();function LE(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var od={exports:{}},hl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uv;function OE(){if(uv)return hl;uv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,f){var h=null;if(f!==void 0&&(h=""+f),l.key!==void 0&&(h=""+l.key),"key"in l){f={};for(var d in l)d!=="key"&&(f[d]=l[d])}else f=l;return l=f.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:f}}return hl.Fragment=e,hl.jsx=i,hl.jsxs=i,hl}var fv;function zE(){return fv||(fv=1,od.exports=OE()),od.exports}var S=zE(),ld={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hv;function PE(){if(hv)return le;hv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),m=Symbol.for("react.activity"),x=Symbol.for("react.view_transition"),E=Symbol.iterator;function T(D){return D===null||typeof D!="object"?null:(D=E&&D[E]||D["@@iterator"],typeof D=="function"?D:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,y={};function O(D,W,ct){this.props=D,this.context=W,this.refs=y,this.updater=ct||A}O.prototype.isReactComponent={},O.prototype.setState=function(D,W){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,W,"setState")},O.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function z(){}z.prototype=O.prototype;function N(D,W,ct){this.props=D,this.context=W,this.refs=y,this.updater=ct||A}var j=N.prototype=new z;j.constructor=N,M(j,O.prototype),j.isPureReactComponent=!0;var F=Array.isArray;function P(){}var B={H:null,A:null,T:null,S:null},U=Object.prototype.hasOwnProperty;function C(D,W,ct){var ft=ct.ref;return{$$typeof:o,type:D,key:W,ref:ft!==void 0?ft:null,props:ct}}function H(D,W){return C(D.type,W,D.props)}function it(D){return typeof D=="object"&&D!==null&&D.$$typeof===o}function $(D){var W={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(ct){return W[ct]})}var dt=/\/+/g;function ht(D,W){return typeof D=="object"&&D!==null&&D.key!=null?$(""+D.key):W.toString(36)}function q(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(P,P):(D.status="pending",D.then(function(W){D.status==="pending"&&(D.status="fulfilled",D.value=W)},function(W){D.status==="pending"&&(D.status="rejected",D.reason=W)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function lt(D,W,ct,ft,Mt){var Ht=typeof D;(Ht==="undefined"||Ht==="boolean")&&(D=null);var Dt=!1;if(D===null)Dt=!0;else switch(Ht){case"bigint":case"string":case"number":Dt=!0;break;case"object":switch(D.$$typeof){case o:case e:Dt=!0;break;case _:return Dt=D._init,lt(Dt(D._payload),W,ct,ft,Mt)}}if(Dt)return Mt=Mt(D),Dt=ft===""?"."+ht(D,0):ft,F(Mt)?(ct="",Dt!=null&&(ct=Dt.replace(dt,"$&/")+"/"),lt(Mt,W,ct,"",function(ae){return ae})):Mt!=null&&(it(Mt)&&(Mt=H(Mt,ct+(Mt.key==null||D&&D.key===Mt.key?"":(""+Mt.key).replace(dt,"$&/")+"/")+Dt)),W.push(Mt)),1;Dt=0;var Tt=ft===""?".":ft+":";if(F(D))for(var Gt=0;Gt<D.length;Gt++)ft=D[Gt],Ht=Tt+ht(ft,Gt),Dt+=lt(ft,W,ct,Ht,Mt);else if(Gt=T(D),typeof Gt=="function")for(D=Gt.call(D),Gt=0;!(ft=D.next()).done;)ft=ft.value,Ht=Tt+ht(ft,Gt++),Dt+=lt(ft,W,ct,Ht,Mt);else if(Ht==="object"){if(typeof D.then=="function")return lt(q(D),W,ct,ft,Mt);throw W=String(D),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.")}return Dt}function X(D,W,ct){if(D==null)return D;var ft=[],Mt=0;return lt(D,ft,"","",function(Ht){return W.call(ct,Ht,Mt++)}),ft}function xt(D){if(D._status===-1){var W=D._result,ct=W();ct.then(function(ft){(D._status===0||D._status===-1)&&(D._status=1,D._result=ft,ct.status===void 0&&(ct.status="fulfilled",ct.value=ft))},function(ft){(D._status===0||D._status===-1)&&(D._status=2,D._result=ft,ct.status===void 0&&(ct.status="rejected",ct.reason=ft))}),D._status===-1&&(D._status=0,D._result=ct)}if(D._status===1)return D._result.default;throw D._result}var yt=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var W=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(W))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function wt(D){var W=B.T,ct={};ct.types=W!==null?W.types:null,B.T=ct;try{var ft=D(),Mt=B.S;Mt!==null&&Mt(ct,ft),typeof ft=="object"&&ft!==null&&typeof ft.then=="function"&&ft.then(P,yt)}catch(Ht){yt(Ht)}finally{W!==null&&ct.types!==null&&(W.types=ct.types),B.T=W}}function Ft(D){var W=B.T;if(W!==null){var ct=W.types;ct===null?W.types=[D]:ct.indexOf(D)===-1&&ct.push(D)}else wt(Ft.bind(null,D))}var Wt={map:X,forEach:function(D,W,ct){X(D,function(){W.apply(this,arguments)},ct)},count:function(D){var W=0;return X(D,function(){W++}),W},toArray:function(D){return X(D,function(W){return W})||[]},only:function(D){if(!it(D))throw Error("React.Children.only expected to receive a single React element child.");return D}};return le.Activity=m,le.Children=Wt,le.Component=O,le.Fragment=i,le.Profiler=l,le.PureComponent=N,le.StrictMode=r,le.Suspense=p,le.ViewTransition=x,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,le.__COMPILER_RUNTIME={__proto__:null,c:function(D){return B.H.useMemoCache(D)}},le.addTransitionType=Ft,le.cache=function(D){return function(){return D.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(D,W,ct){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var ft=M({},D.props),Mt=D.key;if(W!=null)for(Ht in W.key!==void 0&&(Mt=""+W.key),W)!U.call(W,Ht)||Ht==="key"||Ht==="__self"||Ht==="__source"||Ht==="ref"&&W.ref===void 0||(ft[Ht]=W[Ht]);var Ht=arguments.length-2;if(Ht===1)ft.children=ct;else if(1<Ht){for(var Dt=Array(Ht),Tt=0;Tt<Ht;Tt++)Dt[Tt]=arguments[Tt+2];ft.children=Dt}return C(D.type,Mt,ft)},le.createContext=function(D){return D={$$typeof:h,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:f,_context:D},D},le.createElement=function(D,W,ct){var ft,Mt={},Ht=null;if(W!=null)for(ft in W.key!==void 0&&(Ht=""+W.key),W)U.call(W,ft)&&ft!=="key"&&ft!=="__self"&&ft!=="__source"&&(Mt[ft]=W[ft]);var Dt=arguments.length-2;if(Dt===1)Mt.children=ct;else if(1<Dt){for(var Tt=Array(Dt),Gt=0;Gt<Dt;Gt++)Tt[Gt]=arguments[Gt+2];Mt.children=Tt}if(D&&D.defaultProps)for(ft in Dt=D.defaultProps,Dt)Mt[ft]===void 0&&(Mt[ft]=Dt[ft]);return C(D,Ht,Mt)},le.createRef=function(){return{current:null}},le.forwardRef=function(D){return{$$typeof:d,render:D}},le.isValidElement=it,le.lazy=function(D){return{$$typeof:_,_payload:{_status:-1,_result:D},_init:xt}},le.memo=function(D,W){return{$$typeof:g,type:D,compare:W===void 0?null:W}},le.startTransition=wt,le.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},le.use=function(D){return B.H.use(D)},le.useActionState=function(D,W,ct){return B.H.useActionState(D,W,ct)},le.useCallback=function(D,W){return B.H.useCallback(D,W)},le.useContext=function(D){return B.H.useContext(D)},le.useDebugValue=function(){},le.useDeferredValue=function(D,W){return B.H.useDeferredValue(D,W)},le.useEffect=function(D,W){return B.H.useEffect(D,W)},le.useEffectEvent=function(D){return B.H.useEffectEvent(D)},le.useId=function(){return B.H.useId()},le.useImperativeHandle=function(D,W,ct){return B.H.useImperativeHandle(D,W,ct)},le.useInsertionEffect=function(D,W){return B.H.useInsertionEffect(D,W)},le.useLayoutEffect=function(D,W){return B.H.useLayoutEffect(D,W)},le.useMemo=function(D,W){return B.H.useMemo(D,W)},le.useOptimistic=function(D,W){return B.H.useOptimistic(D,W)},le.useReducer=function(D,W,ct){return B.H.useReducer(D,W,ct)},le.useRef=function(D){return B.H.useRef(D)},le.useState=function(D){return B.H.useState(D)},le.useSyncExternalStore=function(D,W,ct){return B.H.useSyncExternalStore(D,W,ct)},le.useTransition=function(){return B.H.useTransition()},le.version="19.3.0",le}var dv;function Pp(){return dv||(dv=1,ld.exports=PE()),ld.exports}var te=Pp();const wx=LE(te);var cd={exports:{}},dl={},ud={exports:{}},fd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pv;function IE(){return pv||(pv=1,(function(o){function e(q,lt){var X=q.length;q.push(lt);t:for(;0<X;){var xt=X-1>>>1,yt=q[xt];if(0<l(yt,lt))q[xt]=lt,q[X]=yt,X=xt;else break t}}function i(q){return q.length===0?null:q[0]}function r(q){if(q.length===0)return null;var lt=q[0],X=q.pop();if(X!==lt){q[0]=X;t:for(var xt=0,yt=q.length,wt=yt>>>1;xt<wt;){var Ft=2*(xt+1)-1,Wt=q[Ft],D=Ft+1,W=q[D];if(0>l(Wt,X))D<yt&&0>l(W,Wt)?(q[xt]=W,q[D]=X,xt=D):(q[xt]=Wt,q[Ft]=X,xt=Ft);else if(D<yt&&0>l(W,X))q[xt]=W,q[D]=X,xt=D;else break t}}return lt}function l(q,lt){var X=q.sortIndex-lt.sortIndex;return X!==0?X:q.id-lt.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var p=[],g=[],_=1,m=null,x=3,E=!1,T=!1,A=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function N(q){for(var lt=i(g);lt!==null;){if(lt.callback===null)r(g);else if(lt.startTime<=q)r(g),lt.sortIndex=lt.expirationTime,e(p,lt);else break;lt=i(g)}}function j(q){if(A=!1,N(q),!T)if(i(p)!==null)T=!0,F||(F=!0,it());else{var lt=i(g);lt!==null&&ht(j,lt.startTime-q)}}var F=!1,P=-1,B=5,U=-1;function C(){return M?!0:!(o.unstable_now()-U<B)}function H(){if(M=!1,F){var q=o.unstable_now();U=q;var lt=!0;try{t:{T=!1,A&&(A=!1,O(P),P=-1),E=!0;var X=x;try{e:{for(N(q),m=i(p);m!==null&&!(m.expirationTime>q&&C());){var xt=m.callback;if(typeof xt=="function"){m.callback=null,x=m.priorityLevel;var yt=xt(m.expirationTime<=q);if(q=o.unstable_now(),typeof yt=="function"){m.callback=yt,N(q),lt=!0;break e}m===i(p)&&r(p),N(q)}else r(p);m=i(p)}if(m!==null)lt=!0;else{var wt=i(g);wt!==null&&ht(j,wt.startTime-q),lt=!1}}break t}finally{m=null,x=X,E=!1}lt=void 0}}finally{lt?it():F=!1}}}var it;if(typeof z=="function")it=function(){z(H)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,dt=$.port2;$.port1.onmessage=H,it=function(){dt.postMessage(null)}}else it=function(){y(H,0)};function ht(q,lt){P=y(function(){q(o.unstable_now())},lt)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(q){q.callback=null},o.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<q?Math.floor(1e3/q):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(q){switch(x){case 1:case 2:case 3:var lt=3;break;default:lt=x}var X=x;x=lt;try{return q()}finally{x=X}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(q,lt){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var X=x;x=q;try{return lt()}finally{x=X}},o.unstable_scheduleCallback=function(q,lt,X){var xt=o.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?xt+X:xt):X=xt,q){case 1:var yt=-1;break;case 2:yt=250;break;case 5:yt=1073741823;break;case 4:yt=1e4;break;default:yt=5e3}return yt=X+yt,q={id:_++,callback:lt,priorityLevel:q,startTime:X,expirationTime:yt,sortIndex:-1},X>xt?(q.sortIndex=X,e(g,q),i(p)===null&&q===i(g)&&(A?(O(P),P=-1):A=!0,ht(j,X-xt))):(q.sortIndex=yt,e(p,q),T||E||(T=!0,F||(F=!0,it()))),q},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(q){var lt=x;return function(){var X=x;x=lt;try{return q.apply(this,arguments)}finally{x=X}}}})(fd)),fd}var mv;function FE(){return mv||(mv=1,ud.exports=IE()),ud.exports}var hd={exports:{}},Pn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gv;function BE(){if(gv)return Pn;gv=1;var o=Pp();function e(_){var m="https://react.dev/errors/"+_;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)m+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+_+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(_,m,x){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:E==null?null:E===h?h:""+E,children:_,containerInfo:m,implementation:x}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(_,m){if(_==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Pn.browser=function(_){return{$$typeof:f,_reason:_}},Pn.createPortal=function(_,m){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return d(_,m,null,x)},Pn.flushSync=function(_){var m=p.T,x=r.p;try{if(p.T=null,r.p=2,_)return _()}finally{p.T=m,r.p=x,r.d.f()}},Pn.preconnect=function(_,m){typeof _=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(_,m))},Pn.prefetchDNS=function(_){typeof _=="string"&&r.d.D(_)},Pn.preinit=function(_,m){if(typeof _=="string"&&m&&typeof m.as=="string"){var x=m.as,E=g(x,m.crossOrigin),T=typeof m.integrity=="string"?m.integrity:void 0,A=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;x==="style"?r.d.S(_,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:E,integrity:T,fetchPriority:A}):x==="script"&&r.d.X(_,{crossOrigin:E,integrity:T,fetchPriority:A,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Pn.preinitModule=function(_,m){if(typeof _=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var x=g(m.as,m.crossOrigin);r.d.M(_,{crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}}else m==null&&r.d.M(_)},Pn.preload=function(_,m){if(typeof _=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var x=m.as,E=g(x,m.crossOrigin);r.d.L(_,x,{crossOrigin:E,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Pn.preloadModule=function(_,m){if(typeof _=="string")if(m){var x=g(m.as,m.crossOrigin);r.d.m(_,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}else r.d.m(_)},Pn.requestFormReset=function(_){r.d.r(_)},Pn.unstable_batchedUpdates=function(_,m){return _(m)},Pn.useFormState=function(_,m,x){return p.H.useFormState(_,m,x)},Pn.useFormStatus=function(){return p.H.useHostTransitionStatus()},Pn.version="19.3.0",Pn}var _v;function HE(){if(_v)return hd.exports;_v=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),hd.exports=BE(),hd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vv;function GE(){if(vv)return dl;vv=1;var o=FE(),e=Pp(),i=HE();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(f(t)!==t)throw Error(r(188))}function g(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var u=c.alternate;if(u===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===u.child){for(u=c.child;u;){if(u===a)return p(c),t;if(u===s)return p(c),n;u=u.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=u;else{for(var v=!1,b=c.child;b;){if(b===a){v=!0,a=c,s=u;break}if(b===s){v=!0,s=c,a=u;break}b=b.sibling}if(!v){for(b=u.child;b;){if(b===a){v=!0,a=u,s=c;break}if(b===s){v=!0,s=u,a=c;break}b=b.sibling}if(!v)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}function m(t,n,a,s,c,u){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,s,c,u)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&m(t.child,n,a,s,c,u))return!0;t=t.sibling}return!1}function x(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function E(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function T(t){var n=[null,null],a=x(t);return a===null||A(n,t,a.child,{foundSelf:!1}),n}function A(t,n,a,s){for(;a!==null;){if(a===n)s.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(s.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&A(t,n,a.child,s))return!0;a=a.sibling}return!1}function M(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(r(559))}}var y=null,O=null;function z(t,n,a){return t===a?!0:t===n?(y=t,!0):!1}function N(t,n,a){return t===a?(O=t,!1):t===n?(O!==null&&(y=t),!0):!1}function j(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function F(t,n,a){for(var s=0,c=t;c;c=a(c))s++;c=0;for(var u=n;u;u=a(u))c++;for(;0<s-c;)t=a(t),s--;for(;0<c-s;)n=a(n),c--;for(;s--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var P=Object.assign,B=Symbol.for("react.element"),U=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),it=Symbol.for("react.strict_mode"),$=Symbol.for("react.profiler"),dt=Symbol.for("react.consumer"),ht=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),lt=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),xt=Symbol.for("react.memo"),yt=Symbol.for("react.lazy"),wt=Symbol.for("react.activity"),Ft=Symbol.for("react.legacy_hidden"),Wt=Symbol.for("react.memo_cache_sentinel"),D=Symbol.for("react.view_transition"),W=Symbol.for("react.recoverable"),ct=Symbol.iterator;function ft(t){return t===null||typeof t!="object"?null:(t=ct&&t[ct]||t["@@iterator"],typeof t=="function"?t:null)}var Mt=Symbol.for("react.client.reference");function Ht(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Mt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case H:return"Fragment";case $:return"Profiler";case it:return"StrictMode";case lt:return"Suspense";case X:return"SuspenseList";case wt:return"Activity";case D:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case C:return"Portal";case ht:return t.displayName||"Context";case dt:return(t._context.displayName||"Context")+".Consumer";case q:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case xt:return n=t.displayName||null,n!==null?n:Ht(t.type)||"Memo";case yt:n=t._payload,t=t._init;try{return Ht(t(n))}catch{}}return null}var Dt=Array.isArray,Tt=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Gt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae={pending:!1,data:null,method:null,action:null},G=[],on=-1;function se(t){return{current:t}}function Jt(t){0>on||(t.current=G[on],G[on]=null,on--)}function Rt(t,n){on++,G[on]=t.current,t.current=n}var _e=se(null),Vt=se(null),L=se(null),R=se(null);function at(t,n){switch(Rt(L,n),Rt(Vt,t),Rt(_e,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?x0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=x0(n),t=y0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Jt(_e),Rt(_e,t)}function vt(){Jt(_e),Jt(Vt),Jt(L)}function St(t){var n=t.memoizedState;n!==null&&(kr._currentValue=n.memoizedState,Rt(R,t)),n=_e.current;var a=y0(n,t.type);n!==a&&(Rt(Vt,t),Rt(_e,a))}function _t(t){Vt.current===t&&(Jt(_e),Jt(Vt)),R.current===t&&(Jt(R),kr._currentValue=ae)}var Yt,It;function Pt(t){if(Yt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Yt=n&&n[1]||"",It=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Yt+t+It}var me=!1;function At(t,n){if(!t||me)return"";me=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(Ot){var Y=Ot}Reflect.construct(t,[],mt)}else{try{mt.call()}catch(Ot){Y=Ot}mt=!1;try{var nt=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),mt=!0,new t}finally{mt&&(nt!==void 0?Object.defineProperty(t.prototype,"props",nt):delete t.prototype.props)}}}else{try{throw Error()}catch(Ot){Y=Ot}(mt=t())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(Ot){if(Ot&&Y&&typeof Ot.stack=="string")return[Ot.stack,Y.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=s.DetermineComponentFrameRoot(),v=u[0],b=u[1];if(v&&b){var I=v.split(`
`),Q=b.split(`
`);for(c=s=0;s<I.length&&!I[s].includes("DetermineComponentFrameRoot");)s++;for(;c<Q.length&&!Q[c].includes("DetermineComponentFrameRoot");)c++;if(s===I.length||c===Q.length)for(s=I.length-1,c=Q.length-1;1<=s&&0<=c&&I[s]!==Q[c];)c--;for(;1<=s&&0<=c;s--,c--)if(I[s]!==Q[c]){if(s!==1||c!==1)do if(s--,c--,0>c||I[s]!==Q[c]){var st=`
`+I[s].replace(" at new "," at ");return t.displayName&&st.includes("<anonymous>")&&(st=st.replace("<anonymous>",t.displayName)),st}while(1<=s&&0<=c);break}}}finally{me=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Pt(a):""}function kt(t,n){switch(t.tag){case 26:case 27:case 5:return Pt(t.type);case 16:return Pt("Lazy");case 13:return t.child!==n&&n!==null?Pt("Suspense Fallback"):Pt("Suspense");case 19:return Pt("SuspenseList");case 0:case 15:return At(t.type,!1);case 11:return At(t.type.render,!1);case 1:return At(t.type,!0);case 31:return Pt("Activity");case 30:return Pt("ViewTransition");default:return""}}function Qt(t){try{var n="",a=null;do n+=kt(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var ee=Object.prototype.hasOwnProperty,jt=o.unstable_scheduleCallback,de=o.unstable_cancelCallback,ce=o.unstable_shouldYield,Le=o.unstable_requestPaint,k=o.unstable_now,Et=o.unstable_getCurrentPriorityLevel,rt=o.unstable_ImmediatePriority,gt=o.unstable_UserBlockingPriority,Ct=o.unstable_NormalPriority,Lt=o.unstable_LowPriority,ne=o.unstable_IdlePriority,ke=o.log,ln=o.unstable_setDisableYieldValue,xe=null,we=null;function en(t){if(typeof ke=="function"&&ln(t),we&&typeof we.setStrictMode=="function")try{we.setStrictMode(xe,t)}catch{}}var cn=Math.clz32?Math.clz32:Di,ar=Math.log,wi=Math.LN2;function Di(t){return t>>>=0,t===0?32:31-(ar(t)/wi|0)|0}var ni=256,ra=262144,Ni=4194304;function ii(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function mi(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,u=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var b=s&134217727;return b!==0?(s=b&~u,s!==0?c=ii(s):(v&=b,v!==0?c=ii(v):a||(a=b&~t,a!==0&&(c=ii(a))))):(b=s&~u,b!==0?c=ii(b):v!==0?c=ii(v):a||(a=s&~t,a!==0&&(c=ii(a)))),c===0?0:n!==0&&n!==c&&(n&u)===0&&(u=c&-c,a=n&-n,u>=a||u===32&&(a&4194048)!==0)?n:c}function Ui(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Oa(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var s=31-cn(a),c=1<<s;n|=t[s],a&=~c}return n}function Eo(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sr(){var t=Ni;return Ni<<=1,(Ni&62914560)===0&&(Ni=4194304),t}function ys(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function oa(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function rr(t,n,a,s,c,u){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var b=t.entanglements,I=t.expirationTimes,Q=t.hiddenUpdates;for(a=v&~a;0<a;){var st=31-cn(a),mt=1<<st;b[st]=0,I[st]=-1;var Y=Q[st];if(Y!==null)for(Q[st]=null,st=0;st<Y.length;st++){var nt=Y[st];nt!==null&&(nt.lane&=-536870913)}a&=~mt}s!==0&&Ss(t,s,0),u!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=u&~(v&~n))}function Ss(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-cn(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function w(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-cn(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function K(t,n){var a=n&-n;return a=(a&42)!==0?1:ot(a),(a&(t.suspendedLanes|n))!==0?0:a}function ot(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ut(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function J(){var t=Gt.p;return t!==0?t:(t=window.event,t===void 0?32:iv(t.type))}function bt(t,n){var a=Gt.p;try{return Gt.p=t,n()}finally{Gt.p=a}}var Ut=Math.random().toString(36).slice(2),Nt="__reactFiber$"+Ut,zt="__reactProps$"+Ut,ie="__reactContainer$"+Ut,oe="__reactEvents$"+Ut,$t="__reactListeners$"+Ut,Ce="__reactHandles$"+Ut,Ue="__reactResources$"+Ut,We="__reactMarker$"+Ut,Xe="__reactLoad$"+Ut;function ye(t){delete t[Nt],delete t[zt],delete t[$t],delete t[Ce]}function Zt(t){var n;if(n=t[Nt])return n;for(var a=t.parentNode;a;){if(n=a[ie]||a[Nt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=I0(t);t!==null;){if(a=t[Nt])return a;t=I0(t)}return n}t=a,a=t.parentNode}return null}function Je(t){if(t=t[Nt]||t[ie]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function be(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function En(t){var n=t[Ue];return n||(n=t[Ue]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Qe(t){t[We]=!0}function In(t){t[Xe]=void 0}var za=new Set,qe={};function fn(t,n){vn(t,n),vn(t+"Capture",n)}function vn(t,n){for(qe[t]=n,t=0;t<n.length;t++)za.add(n[t])}var wn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Dn={},or={};function la(t){return ee.call(or,t)?!0:ee.call(Dn,t)?!1:wn.test(t)?or[t]=!0:(Dn[t]=!0,!1)}var Oe=!1;function sm(){var t=Oe;return Oe=!1,t}function wl(t,n,a){if(la(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function Dl(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function ca(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,s)}}function ai(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function rm(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function $y(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,u=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(v){a=""+v,u.call(this,v)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Pu(t){if(!t._valueTracker){var n=rm(t)?"checked":"value";t._valueTracker=$y(t,n,""+t[n])}}function om(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=rm(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}var tS=/[\n"\\]/g;function gi(t){return t.replace(tS,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Iu(t,n,a,s,c,u,v,b){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),n!=null?v==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ai(n)):t.value!==""+ai(n)&&(t.value=""+ai(n)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),n!=null?v==="number"&&t.value==n?Fu(t,ai(t.value)):Fu(t,ai(n)):a!=null?Fu(t,ai(a)):s!=null&&t.removeAttribute("value"),c==null&&u!=null&&(t.defaultChecked=!!u),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+ai(b):t.removeAttribute("name")}function lm(t,n,a,s,c,u,v,b){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),n!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||n!=null)){Pu(t);return}a=a!=null?""+ai(a):"",n=n!=null?""+ai(n):a,b||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=b?t.checked:!!s,t.defaultChecked=!!s,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v),Pu(t)}function Fu(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function lr(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+ai(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function cm(t,n,a){if(n!=null&&(n=""+ai(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ai(a):""}function um(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(Dt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ai(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),Pu(t)}function cr(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var eS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function fm(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||eS.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function hm(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="",Oe=!0);for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&(fm(t,c,s),Oe=!0)}else for(var u in n)n.hasOwnProperty(u)&&fm(t,u,n[u])}function Bu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),iS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Nl(t){return iS.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Xi(){}var Hu=null;function Gu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ur=null,fr=null;function dm(t){var n=Je(t);if(n&&(t=n.stateNode)){var a=t[zt]||null;t:switch(t=n.stateNode,n.type){case"input":if(Iu(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+gi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[zt]||null;if(!c)throw Error(r(90));Iu(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&om(s)}break t;case"textarea":cm(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&lr(t,!!a.multiple,n,!1)}}}var Vu=!1;function pm(t,n,a){if(Vu)return t(n,a);Vu=!0;try{var s=t(n);return s}finally{if(Vu=!1,(ur!==null||fr!==null)&&(Nc(),ur&&(n=ur,t=fr,fr=ur=null,dm(n),t)))for(n=0;n<t.length;n++)dm(t[n])}}function To(t,n){var a=t.stateNode;if(a===null)return null;var s=a[zt]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var ua=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ju=!1;if(ua)try{var bo={};Object.defineProperty(bo,"passive",{get:function(){ju=!0}}),window.addEventListener("test",bo,bo),window.removeEventListener("test",bo,bo)}catch{ju=!1}var Pa=null,ku=null,Ul=null;function mm(){if(Ul)return Ul;var t,n=ku,a=n.length,s,c="value"in Pa?Pa.value:Pa.textContent,u=c.length;for(t=0;t<a&&n[t]===c[t];t++);var v=a-t;for(s=1;s<=v&&n[a-s]===c[u-s];s++);return Ul=c.slice(t,1<s?1-s:void 0)}function Ll(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Ol(){return!0}function gm(){return!1}function Vn(t){function n(a,s,c,u,v){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=u,this.target=v,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(a=t[b],this[b]=a?a(u):u[b]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Ol:gm,this.isPropagationStopped=gm,this}return P(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ol)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ol)},persist:function(){},isPersistent:Ol}),n}var Ia={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zl=Vn(Ia),Ao=P({},Ia,{view:0,detail:0}),aS=Vn(Ao),Xu,qu,Ro,Pl=P({},Ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ro&&(Ro&&t.type==="mousemove"?(Xu=t.screenX-Ro.screenX,qu=t.screenY-Ro.screenY):qu=Xu=0,Ro=t),Xu)},movementY:function(t){return"movementY"in t?t.movementY:qu}}),_m=Vn(Pl),sS=P({},Pl,{dataTransfer:0}),rS=Vn(sS),oS=P({},Ao,{relatedTarget:0}),Yu=Vn(oS),lS=P({},Ia,{animationName:0,elapsedTime:0,pseudoElement:0}),cS=Vn(lS),uS=P({},Ia,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),fS=Vn(uS),hS=P({},Ia,{data:0}),vm=Vn(hS),dS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gS(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=mS[t])?!!n[t]:!1}function Wu(){return gS}var _S=P({},Ao,{key:function(t){if(t.key){var n=dS[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Ll(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?pS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wu,charCode:function(t){return t.type==="keypress"?Ll(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ll(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),vS=Vn(_S),xS=P({},Pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xm=Vn(xS),yS=P({},Ia,{submitter:0}),SS=Vn(yS),MS=P({},Ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wu}),ES=Vn(MS),TS=P({},Ia,{propertyName:0,elapsedTime:0,pseudoElement:0}),bS=Vn(TS),AS=P({},Pl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),RS=Vn(AS),CS=P({},Ia,{newState:0,oldState:0,source:0}),wS=Vn(CS),DS=[9,13,27,32],Zu=ua&&"CompositionEvent"in window,Co=null;ua&&"documentMode"in document&&(Co=document.documentMode);var NS=ua&&"TextEvent"in window&&!Co,ym=ua&&(!Zu||Co&&8<Co&&11>=Co),Sm=" ",Mm=!1;function Em(t,n){switch(t){case"keyup":return DS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var hr=!1;function US(t,n){switch(t){case"compositionend":return Tm(n);case"keypress":return n.which!==32?null:(Mm=!0,Sm);case"textInput":return t=n.data,t===Sm&&Mm?null:t;default:return null}}function LS(t,n){if(hr)return t==="compositionend"||!Zu&&Em(t,n)?(t=mm(),Ul=ku=Pa=null,hr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ym&&n.locale!=="ko"?null:n.data;default:return null}}var OS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!OS[t.type]:n==="textarea"}function Am(t,n,a,s){ur?fr?fr.push(s):fr=[s]:ur=s,n=Ic(n,"onChange"),0<n.length&&(a=new zl("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var wo=null,Do=null;function zS(t){d0(t,0)}function Il(t){var n=be(t);if(om(n))return t}function Rm(t,n){if(t==="change")return n}var Cm=!1;if(ua){var Ku;if(ua){var Qu="oninput"in document;if(!Qu){var wm=document.createElement("div");wm.setAttribute("oninput","return;"),Qu=typeof wm.oninput=="function"}Ku=Qu}else Ku=!1;Cm=Ku&&(!document.documentMode||9<document.documentMode)}function Dm(){wo&&(wo.detachEvent("onpropertychange",Nm),Do=wo=null)}function Nm(t){if(t.propertyName==="value"&&Il(Do)){var n=[];Am(n,Do,t,Gu(t)),pm(zS,n)}}function PS(t,n,a){t==="focusin"?(Dm(),wo=n,Do=a,wo.attachEvent("onpropertychange",Nm)):t==="focusout"&&Dm()}function IS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Il(Do)}function FS(t,n){if(t==="click")return Il(n)}function BS(t,n){if(t==="input"||t==="change")return Il(n)}function HS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var si=typeof Object.is=="function"?Object.is:HS;function No(t,n){if(si(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!ee.call(n,c)||!si(t[c],n[c]))return!1}return!0}function Ju(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Um(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Lm(t,n){var a=Um(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Um(a)}}function Om(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Om(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function zm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Ju(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Ju(t.document)}return n}function $u(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var GS=ua&&"documentMode"in document&&11>=document.documentMode,dr=null,tf=null,Uo=null,ef=!1;function Pm(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ef||dr==null||dr!==Ju(s)||(s=dr,"selectionStart"in s&&$u(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Uo&&No(Uo,s)||(Uo=s,s=Ic(tf,"onSelect"),0<s.length&&(n=new zl("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=dr)))}function Ms(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var pr={animationend:Ms("Animation","AnimationEnd"),animationiteration:Ms("Animation","AnimationIteration"),animationstart:Ms("Animation","AnimationStart"),transitionrun:Ms("Transition","TransitionRun"),transitionstart:Ms("Transition","TransitionStart"),transitioncancel:Ms("Transition","TransitionCancel"),transitionend:Ms("Transition","TransitionEnd")},nf={},Im={};ua&&(Im=document.createElement("div").style,"AnimationEvent"in window||(delete pr.animationend.animation,delete pr.animationiteration.animation,delete pr.animationstart.animation),"TransitionEvent"in window||delete pr.transitionend.transition);function Es(t){if(nf[t])return nf[t];if(!pr[t])return t;var n=pr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Im)return nf[t]=n[a];return t}var Fm=Es("animationend"),Bm=Es("animationiteration"),Hm=Es("animationstart"),VS=Es("transitionrun"),jS=Es("transitionstart"),kS=Es("transitioncancel"),Gm=Es("transitionend"),Vm=new Map,af="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");af.push("scrollEnd");function Li(t,n){Vm.set(t,n),fn(n,[t])}var XS=0;function fa(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=Ii.identifierPrefix;var a=XS++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function jm(t){if(t==null||typeof t=="string")return t;var n=null,a=Or;if(a!==null)for(var s=0;s<a.length;s++){var c=t[a[s]];if(c!=null){if(c==="none")return"none";n=n==null?c:n+(" "+c)}}return n??t.default}function ha(t,n){return t=jm(t),n=jm(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var Fl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},_i=[],mr=0,sf=0;function Bl(){for(var t=mr,n=sf=mr=0;n<t;){var a=_i[n];_i[n++]=null;var s=_i[n];_i[n++]=null;var c=_i[n];_i[n++]=null;var u=_i[n];if(_i[n++]=null,s!==null&&c!==null){var v=s.pending;v===null?c.next=c:(c.next=v.next,v.next=c),s.pending=c}u!==0&&km(a,c,u)}}function Hl(t,n,a,s){_i[mr++]=t,_i[mr++]=n,_i[mr++]=a,_i[mr++]=s,sf|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function rf(t,n,a,s){return Hl(t,n,a,s),Gl(t)}function Ts(t,n){return Hl(t,null,null,n),Gl(t)}function km(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,u=t.return;u!==null;)u.childLanes|=a,s=u.alternate,s!==null&&(s.childLanes|=a),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(c=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,c&&n!==null&&(c=31-cn(a),t=u.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),u):null}function Gl(t){if(50<tl)throw tl=0,Dc=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var gr={};function qS(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(t,n,a,s){return new qS(t,n,a,s)}function of(t){return t=t.prototype,!(!t||!t.isReactComponent)}function da(t,n){var a=t.alternate;return a===null?(a=Yn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Xm(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Vl(t,n,a,s,c,u){var v=0;if(s=t,typeof s=="function")of(s)&&(v=1);else if(typeof s=="string")v=yE(t,a,_e.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(s){case wt:return t=Yn(31,a,n,c),t.elementType=wt,t.lanes=u,t;case H:return bs(a.children,c,u,n);case it:v=8,c|=24;break;case $:return t=Yn(12,a,n,c|2),t.elementType=$,t.lanes=u,t;case lt:return t=Yn(13,a,n,c),t.elementType=lt,t.lanes=u,t;case X:return t=Yn(19,a,n,c),t.elementType=X,t.lanes=u,t;case Ft:case D:return t=c|32,t=Yn(30,a,n,t),t.elementType=D,t.lanes=u,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case ht:v=10;break t;case dt:v=9;break t;case q:v=11;break t;case xt:v=14;break t;case yt:v=16,s=null;break t}v=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Yn(v,a,n,c),n.elementType=t,n.type=s,n.lanes=u,n}function bs(t,n,a,s){return t=Yn(7,t,s,n),t.lanes=a,t}function lf(t,n,a){return t=Yn(6,t,null,n),t.lanes=a,t}function qm(t){var n=Yn(18,null,null,0);return n.stateNode=t,n}function cf(t,n,a){return n=Yn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Ym=new WeakMap;function vi(t,n){if(typeof t=="object"&&t!==null){var a=Ym.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Qt(n)},Ym.set(t,n),n)}return{value:t,source:n,stack:Qt(n)}}var _r=[],vr=0,jl=null,Lo=0,xi=[],yi=0,Fa=null,qi=1,Yi="";function pa(t,n){_r[vr++]=Lo,_r[vr++]=jl,jl=t,Lo=n}function Wm(t,n,a){xi[yi++]=qi,xi[yi++]=Yi,xi[yi++]=Fa,Fa=t;var s=qi;t=Yi;var c=32-cn(s)-1;s&=~(1<<c),a+=1;var u=32-cn(n)+c;if(30<u){var v=c-c%5;u=(s&(1<<v)-1).toString(32),s>>=v,c-=v,qi=1<<32-cn(n)+c|a<<c|s,Yi=u+t}else qi=1<<u|a<<c|s,Yi=t}function kl(t){t.return!==null&&(pa(t,1),Wm(t,1,0))}function uf(t){for(;t===jl;)jl=_r[--vr],_r[vr]=null,Lo=_r[--vr],_r[vr]=null;for(;t===Fa;)Fa=xi[--yi],xi[yi]=null,Yi=xi[--yi],xi[yi]=null,qi=xi[--yi],xi[yi]=null}function Zm(t,n){xi[yi++]=qi,xi[yi++]=Yi,xi[yi++]=Fa,qi=n.id,Yi=n.overflow,Fa=t}var Tn=null,Ze=null,ve=!1,Ba=null,Si=!1,ff=Error(r(519));function Ha(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Oo(vi(n,t)),ff}function Km(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[Nt]=t,n[zt]=s,a){case"dialog":Me("cancel",n),Me("close",n);break;case"iframe":case"object":case"embed":Me("load",n);break;case"video":case"audio":for(a=0;a<nl.length;a++)Me(nl[a],n);break;case"source":Me("error",n);break;case"img":case"image":case"link":Me("error",n),Me("load",n);break;case"details":Me("toggle",n);break;case"input":Me("invalid",n),lm(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Me("invalid",n);break;case"textarea":Me("invalid",n),um(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||_0(n.textContent,a)?(s.popover!=null&&(Me("beforetoggle",n),Me("toggle",n)),s.onScroll!=null&&Me("scroll",n),s.onScrollEnd!=null&&Me("scrollend",n),s.onClick!=null&&(n.onclick=Xi),n=!0):n=!1,n||Ha(t,!0)}function Xl(t){for(Tn=t.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:Si=!1;return;case 27:case 3:Si=!0;return;default:Tn=Tn.return}}function xr(t){if(t!==Tn)return!1;if(!ve)return Xl(t),ve=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Gh(t.type,t.memoizedProps)),a=!a),a&&Ze&&Ha(t),Xl(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ze=P0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ze=P0(t)}else n===27?(n=Ze,ns(t.type)?(t=Kh,Kh=null,Ze=t):Ze=n):Ze=Tn?Ei(t.stateNode.nextSibling):null;return!0}function As(){Ze=Tn=null,ve=!1}function hf(){var t=Ba;return t!==null&&(Kn===null?Kn=t:Kn.push.apply(Kn,t),Ba=null),t}function Oo(t){Ba===null?Ba=[t]:Ba.push(t)}var df=se(null),Rs=null,ma=null;function Ga(t,n,a){Rt(df,n._currentValue),n._currentValue=a}function ga(t){t._currentValue=df.current,Jt(df)}function ql(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function pf(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var u=c.dependencies;if(u!==null){var v=c.child;u=u.firstContext;t:for(;u!==null;){var b=u;u=c;for(var I=0;I<n.length;I++)if(b.context===n[I]){u.lanes|=a,b=u.alternate,b!==null&&(b.lanes|=a),ql(u.return,a,t),s||(v=null);break t}u=b.next}}else if(c.tag===18){if(v=c.return,v===null)throw Error(r(341));v.lanes|=a,u=v.alternate,u!==null&&(u.lanes|=a),ql(v,a,t),v=null}else c.tag===13&&c.memoizedState!==null&&c.memoizedState.dehydrated===null?(c.lanes|=a,v=c.alternate,v!==null&&(v.lanes|=a),ql(c.return,a,t),v=c.child,v=v!==null?v.sibling:null):v=c.child;if(v!==null)v.return=c;else for(v=c;v!==null;){if(v===t){v=null;break}if(c=v.sibling,c!==null){c.return=v.return,v=c;break}v=v.return}c=v}}function Cs(t,n,a,s){t=null;for(var c=n,u=!1;c!==null;){if(!u){if((c.flags&524288)!==0)u=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var v=c.alternate;if(v===null)throw Error(r(387));if(v=v.memoizedProps,v!==null){var b=c.type;si(c.pendingProps.value,v.value)||(t!==null?t.push(b):t=[b])}}else if(c===R.current){if(v=c.alternate,v===null)throw Error(r(387));v.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(kr):t=[kr])}c=c.return}return t!==null&&pf(n,t,a,s),n.flags|=262144,t!==null}function Yl(t){for(t=t.firstContext;t!==null;){if(!si(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ws(t){Rs=t,ma=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Nn(t){return Qm(Rs,t)}function Wl(t,n){return Rs===null&&ws(t),Qm(t,n)}function Qm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ma===null){if(t===null)throw Error(r(308));ma=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ma=ma.next=n;return a}var YS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},WS=o.unstable_scheduleCallback,ZS=o.unstable_NormalPriority,hn={$$typeof:ht,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function mf(){return{controller:new YS,data:new Map,refCount:0}}function zo(t){t.refCount--,t.refCount===0&&WS(ZS,function(){t.controller.abort()})}function Jm(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var s=n[t];a.indexOf(s)===-1&&a.push(s)}}}var Po=null;function KS(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Io=null,gf=0,Ds=0,yr=null;function QS(t,n){if(Io===null){var a=Io=[];gf=0,Ds=Uh(),yr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return gf++,n.then($m,$m),n}function $m(){if(--gf===0&&(Po=null,Io!==null)){yr!==null&&(yr.status="fulfilled");var t=Io;Io=null,Ds=0,yr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function JS(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var tg=Tt.S;Tt.S=function(t,n){if(q_=k(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&QS(t,n),Po!==null)for(var a=Fr;a!==null;)Jm(a,Po),a=a.next;if(a=t.types,a!==null){for(var s=Fr;s!==null;)Jm(s,a),s=s.next;if(Ds!==0){s=Po,s===null&&(s=Po=[]);for(var c=0;c<a.length;c++){var u=a[c];s.indexOf(u)===-1&&s.push(u)}}}tg!==null&&tg(t,n)};var Ns=se(null);function _f(){var t=Ns.current;return t!==null?t:Ye.pooledCache}function Zl(t,n){n===null?Rt(Ns,Ns.current):Rt(Ns,n.pool)}function eg(){var t=_f();return t===null?null:{parent:hn._currentValue,pool:t}}var Sr=Error(r(460)),vf=Error(r(474)),Kl=Error(r(542)),Ql={then:function(){}};function ng(t){return t=t.status,t==="fulfilled"||t==="rejected"}function ig(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Xi,Xi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,sg(t),t===void 0&&!("reason"in n)?Error(r(600)):t;default:if(typeof n.status=="string")n.then(Xi,Xi);else{if(t=Ye,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,sg(t),t}throw Ls=n,Sr}}function Us(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ls=a,Sr):a}}var Ls=null;function ag(){if(Ls===null)throw Error(r(459));var t=Ls;return Ls=null,t}function sg(t){if(t===Sr||t===Kl)throw Error(r(483))}var Mr=null,Fo=0;function Jl(t){var n=Fo;return Fo+=1,Mr===null&&(Mr=[]),ig(Mr,t,n)}function Va(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function $l(t,n){throw n.$$typeof===B?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function rg(t){function n(Z,V){if(t){var tt=Z.deletions;tt===null?(Z.deletions=[V],Z.flags|=16):tt.push(V)}}function a(Z,V){if(!t)return null;for(;V!==null;)n(Z,V),V=V.sibling;return null}function s(Z){for(var V=new Map;Z!==null;)Z.key===null?V.set(Z.index,Z):V.set(Z.key,Z),Z=Z.sibling;return V}function c(Z,V){return Z=da(Z,V),Z.index=0,Z.sibling=null,Z}function u(Z,V,tt){return Z.index=tt,t?(tt=Z.alternate,tt!==null?(tt=tt.index,tt<V?(Z.flags|=2,V):tt):(Z.flags|=134217730,V)):(Z.flags|=1048576,V)}function v(Z){return t&&Z.alternate===null&&(Z.flags|=134217730),Z}function b(Z,V,tt,pt){return V===null||V.tag!==6?(V=lf(tt,Z.mode,pt),V.return=Z,V):(V=c(V,tt),V.return=Z,V)}function I(Z,V,tt,pt){var Xt=tt.type;return Xt===H?(Z=st(Z,V,tt.props.children,pt,tt.key),Va(Z,tt),Z):V!==null&&(V.elementType===Xt||typeof Xt=="object"&&Xt!==null&&Xt.$$typeof===yt&&Us(Xt)===V.type)?(V=c(V,tt.props),Va(V,tt),V.return=Z,V):(V=Vl(tt.type,tt.key,tt.props,null,Z.mode,pt),Va(V,tt),V.return=Z,V)}function Q(Z,V,tt,pt){return V===null||V.tag!==4||V.stateNode.containerInfo!==tt.containerInfo||V.stateNode.implementation!==tt.implementation?(V=cf(tt,Z.mode,pt),V.return=Z,V):(V=c(V,tt.children||[]),V.return=Z,V)}function st(Z,V,tt,pt,Xt){return V===null||V.tag!==7?(V=bs(tt,Z.mode,pt,Xt),V.return=Z,V):(V=c(V,tt),V.return=Z,V)}function mt(Z,V,tt){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=lf(""+V,Z.mode,tt),V.return=Z,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case U:return tt=Vl(V.type,V.key,V.props,null,Z.mode,tt),Va(tt,V),tt.return=Z,tt;case C:return V=cf(V,Z.mode,tt),V.return=Z,V;case yt:return V=Us(V),mt(Z,V,tt)}if(Dt(V)||ft(V))return V=bs(V,Z.mode,tt,null),V.return=Z,V;if(typeof V.then=="function")return mt(Z,Jl(V),tt);if(V.$$typeof===ht)return mt(Z,Wl(Z,V),tt);$l(Z,V)}return null}function Y(Z,V,tt,pt){var Xt=V!==null?V.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return Xt!==null?null:b(Z,V,""+tt,pt);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case U:return tt.key===Xt?I(Z,V,tt,pt):null;case C:return tt.key===Xt?Q(Z,V,tt,pt):null;case yt:return tt=Us(tt),Y(Z,V,tt,pt)}if(Dt(tt)||ft(tt))return Xt!==null?null:st(Z,V,tt,pt,null);if(typeof tt.then=="function")return Y(Z,V,Jl(tt),pt);if(tt.$$typeof===ht)return Y(Z,V,Wl(Z,tt),pt);$l(Z,tt)}return null}function nt(Z,V,tt,pt,Xt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return Z=Z.get(tt)||null,b(V,Z,""+pt,Xt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case U:return Z=Z.get(pt.key===null?tt:pt.key)||null,I(V,Z,pt,Xt);case C:return Z=Z.get(pt.key===null?tt:pt.key)||null,Q(V,Z,pt,Xt);case yt:return pt=Us(pt),nt(Z,V,tt,pt,Xt)}if(Dt(pt)||ft(pt))return Z=Z.get(tt)||null,st(V,Z,pt,Xt,null);if(typeof pt.then=="function")return nt(Z,V,tt,Jl(pt),Xt);if(pt.$$typeof===ht)return nt(Z,V,tt,Wl(V,pt),Xt);$l(V,pt)}return null}function Ot(Z,V,tt,pt){for(var Xt=null,Re=null,Kt=V,re=V=0,mn=null;Kt!==null&&re<tt.length;re++){Kt.index>re?(mn=Kt,Kt=null):mn=Kt.sibling;var De=Y(Z,Kt,tt[re],pt);if(De===null){Kt===null&&(Kt=mn);break}t&&Kt&&De.alternate===null&&n(Z,Kt),V=u(De,V,re),Re===null?Xt=De:Re.sibling=De,Re=De,Kt=mn}if(re===tt.length)return a(Z,Kt),ve&&pa(Z,re),Xt;if(Kt===null){for(;re<tt.length;re++)Kt=mt(Z,tt[re],pt),Kt!==null&&(V=u(Kt,V,re),Re===null?Xt=Kt:Re.sibling=Kt,Re=Kt);return ve&&pa(Z,re),Xt}for(Kt=s(Kt);re<tt.length;re++)mn=nt(Kt,Z,re,tt[re],pt),mn!==null&&(t&&(De=mn.alternate,De!==null&&Kt.delete(De.key===null?re:De.key)),V=u(mn,V,re),Re===null?Xt=mn:Re.sibling=mn,Re=mn);return t&&Kt.forEach(function(os){return n(Z,os)}),ve&&pa(Z,re),Xt}function qt(Z,V,tt,pt){if(tt==null)throw Error(r(151));for(var Xt=null,Re=null,Kt=V,re=V=0,mn=null,De=tt.next();Kt!==null&&!De.done;re++,De=tt.next()){Kt.index>re?(mn=Kt,Kt=null):mn=Kt.sibling;var os=Y(Z,Kt,De.value,pt);if(os===null){Kt===null&&(Kt=mn);break}t&&Kt&&os.alternate===null&&n(Z,Kt),V=u(os,V,re),Re===null?Xt=os:Re.sibling=os,Re=os,Kt=mn}if(De.done)return a(Z,Kt),ve&&pa(Z,re),Xt;if(Kt===null){for(;!De.done;re++,De=tt.next())De=mt(Z,De.value,pt),De!==null&&(V=u(De,V,re),Re===null?Xt=De:Re.sibling=De,Re=De);return ve&&pa(Z,re),Xt}for(Kt=s(Kt);!De.done;re++,De=tt.next())De=nt(Kt,Z,re,De.value,pt),De!==null&&(t&&(mn=De.alternate,mn!==null&&Kt.delete(mn.key===null?re:mn.key)),V=u(De,V,re),Re===null?Xt=De:Re.sibling=De,Re=De);return t&&Kt.forEach(function(UE){return n(Z,UE)}),ve&&pa(Z,re),Xt}function he(Z,V,tt,pt){if(typeof tt=="object"&&tt!==null&&tt.type===H&&tt.key===null&&tt.props.ref===void 0&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case U:t:{for(var Xt=tt.key;V!==null;){if(V.key===Xt){if(Xt=tt.type,Xt===H){if(V.tag===7){a(Z,V.sibling),pt=c(V,tt.props.children),Va(pt,tt),pt.return=Z,Z=pt;break t}}else if(V.elementType===Xt||typeof Xt=="object"&&Xt!==null&&Xt.$$typeof===yt&&Us(Xt)===V.type){a(Z,V.sibling),pt=c(V,tt.props),Va(pt,tt),pt.return=Z,Z=pt;break t}a(Z,V);break}else n(Z,V);V=V.sibling}tt.type===H?(pt=bs(tt.props.children,Z.mode,pt,tt.key),Va(pt,tt),pt.return=Z,Z=pt):(pt=Vl(tt.type,tt.key,tt.props,null,Z.mode,pt),Va(pt,tt),pt.return=Z,Z=pt)}return v(Z);case C:t:{for(Xt=tt.key;V!==null;){if(V.key===Xt)if(V.tag===4&&V.stateNode.containerInfo===tt.containerInfo&&V.stateNode.implementation===tt.implementation){a(Z,V.sibling),pt=c(V,tt.children||[]),pt.return=Z,Z=pt;break t}else{a(Z,V);break}else n(Z,V);V=V.sibling}pt=cf(tt,Z.mode,pt),pt.return=Z,Z=pt}return v(Z);case yt:return tt=Us(tt),he(Z,V,tt,pt)}if(Dt(tt))return Ot(Z,V,tt,pt);if(ft(tt)){if(Xt=ft(tt),typeof Xt!="function")throw Error(r(150));return tt=Xt.call(tt),qt(Z,V,tt,pt)}if(typeof tt.then=="function")return he(Z,V,Jl(tt),pt);if(tt.$$typeof===ht)return he(Z,V,Wl(Z,tt),pt);$l(Z,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,V!==null&&V.tag===6?(a(Z,V.sibling),pt=c(V,tt),pt.return=Z,Z=pt):(a(Z,V),pt=lf(tt,Z.mode,pt),pt.return=Z,Z=pt),v(Z)):a(Z,V)}return function(Z,V,tt,pt){try{Fo=0;var Xt=he(Z,V,tt,pt);return Mr=null,Xt}catch(Kt){if(Kt===Sr||Kt===Kl)throw Kt;var Re=Yn(29,Kt,null,Z.mode);return Re.lanes=pt,Re.return=Z,Re}finally{}}}var Os=rg(!0),og=rg(!1),ja=!1;function xf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ka(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Xa(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Pe&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=Gl(t),km(t,null,a),n}return Hl(t,s,n,a),Gl(t)}function Bo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,w(t,a)}}function Sf(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?c=u=v:u=u.next=v,a=a.next}while(a!==null);u===null?c=u=n:u=u.next=n}else c=u=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:u,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Mf=!1;function Ho(){if(Mf){var t=yr;if(t!==null)throw t}}function Go(t,n,a,s){Mf=!1;var c=t.updateQueue;ja=!1;var u=c.firstBaseUpdate,v=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var I=b,Q=I.next;I.next=null,v===null?u=Q:v.next=Q,v=I;var st=t.alternate;st!==null&&(st=st.updateQueue,b=st.lastBaseUpdate,b!==v&&(b===null?st.firstBaseUpdate=Q:b.next=Q,st.lastBaseUpdate=I))}if(u!==null){var mt=c.baseState;v=0,st=Q=I=null,b=u;do{var Y=b.lane&-536870913,nt=Y!==b.lane;if(nt?(Ae&Y)===Y:(s&Y)===Y){Y!==0&&Y===Ds&&(Mf=!0),st!==null&&(st=st.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var Ot=t,qt=b;Y=n;var he=a;switch(qt.tag){case 1:if(Ot=qt.payload,typeof Ot=="function"){mt=Ot.call(he,mt,Y);break t}mt=Ot;break t;case 3:Ot.flags=Ot.flags&-65537|128;case 0:if(Ot=qt.payload,Y=typeof Ot=="function"?Ot.call(he,mt,Y):Ot,Y==null)break t;mt=P({},mt,Y);break t;case 2:ja=!0}}Y=b.callback,Y!==null&&(t.flags|=64,nt&&(t.flags|=8192),nt=c.callbacks,nt===null?c.callbacks=[Y]:nt.push(Y))}else nt={lane:Y,tag:b.tag,payload:b.payload,callback:b.callback,next:null},st===null?(Q=st=nt,I=mt):st=st.next=nt,v|=Y;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;nt=b,b=nt.next,nt.next=null,c.lastBaseUpdate=nt,c.shared.pending=null}}while(!0);st===null&&(I=mt),c.baseState=I,c.firstBaseUpdate=Q,c.lastBaseUpdate=st,u===null&&(c.shared.lanes=0),Ja|=v,t.lanes=v,t.memoizedState=mt}}function lg(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function cg(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)lg(a[t],n)}var qa=se(null),tc=se(0);function ug(t,n){t=Sa,Rt(tc,t),Rt(qa,n),Sa=t|n.baseLanes}function Ef(){Rt(tc,Sa),Rt(qa,qa.current)}function Tf(){Sa=tc.current,Jt(qa),Jt(tc)}var Un=se(null),Fn=null;function Ya(t){var n=t.alternate;Rt(Ln,Ln.current&1),Rt(Un,t),Fn===null&&(n===null||qa.current!==null||n.memoizedState!==null)&&(Fn=t)}function bf(t){Rt(Ln,Ln.current),Rt(Un,t),Fn===null&&(Fn=t)}function fg(t){t.tag===22?(Rt(Ln,Ln.current),Rt(Un,t),Fn===null&&(Fn=t)):Wa()}function Wa(){Rt(Ln,Ln.current),Rt(Un,Un.current)}function ri(t){Jt(Un),Fn===t&&(Fn=null),Jt(Ln)}var Ln=se(0);function Vo(t,n){Rt(Un,Un.current),Rt(Ln,n)}function Af(t){Jt(Ln),Jt(Un),Fn===t&&(Fn=null)}function ec(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Wh(a)||Zh(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var _a=0,fe=null,Ge=null,dn=null,nc=!1,Er=!1,zs=!1,ic=0,jo=0,Tr=null,$S=0;function an(){throw Error(r(321))}function Rf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!si(t[a],n[a]))return!1;return!0}function Cf(t,n,a,s,c,u){return _a=u,fe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Tt.H=t===null||t.memoizedState===null?Wg:Zg,zs=!1,u=a(s,c),zs=!1,Er&&(u=dg(n,a,s,c)),hg(t),u}function hg(t){Tt.H=uc;var n=Ge!==null&&Ge.next!==null;if(_a=0,dn=Ge=fe=null,nc=!1,jo=0,Tr=null,n)throw Error(r(300));t===null||pn||(t=t.dependencies,t!==null&&Yl(t)&&(pn=!0))}function dg(t,n,a,s){fe=t;var c=0;do{if(Er&&(Tr=null),jo=0,Er=!1,25<=c)throw Error(r(301));if(c+=1,dn=Ge=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}Tt.H=oM,u=n(a,s)}while(Er);return u}function tM(){var t=Tt.H,n=t.useState()[0];return n=typeof n.then=="function"?ko(n):n,t=t.useState()[0],(Ge!==null?Ge.memoizedState:null)!==t&&(fe.flags|=1024),n}function wf(){var t=ic!==0;return ic=0,t}function Df(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Nf(t){if(nc){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}nc=!1}_a=0,dn=Ge=fe=null,Er=!1,jo=ic=0,Tr=null}function jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?fe.memoizedState=dn=t:dn=dn.next=t,dn}function un(){if(Ge===null){var t=fe.alternate;t=t!==null?t.memoizedState:null}else t=Ge.next;var n=dn===null?fe.memoizedState:dn.next;if(n!==null)dn=n,Ge=t;else{if(t===null)throw fe.alternate===null?Error(r(467)):Error(r(310));Ge=t,t={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},dn===null?fe.memoizedState=dn=t:dn=dn.next=t}return dn}function ac(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ko(t){var n=jo;return jo+=1,Tr===null&&(Tr=[]),t=ig(Tr,t,n),n=fe,(dn===null?n.memoizedState:dn.next)===null&&(n=n.alternate,Tt.H=n===null||n.memoizedState===null?Wg:Zg),t}function sc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ko(t);if(t.$$typeof===W)return;if(t.$$typeof===ht)return Nn(t)}throw Error(r(438,String(t)))}function Uf(t){var n=null,a=fe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=fe.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ac(),fe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=Wt;return n.index++,a}function va(t,n){return typeof n=="function"?n(t):n}function rc(t){var n=un();return Lf(n,Ge,t)}function Lf(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,u=s.pending;if(u!==null){if(c!==null){var v=c.next;c.next=u.next,u.next=v}n.baseQueue=c=u,s.pending=null}if(u=t.baseState,c===null)t.memoizedState=u;else{n=c.next;var b=v=null,I=null,Q=n,st=!1;do{var mt=Q.lane&-536870913;if(mt!==Q.lane?(Ae&mt)===mt:(_a&mt)===mt){var Y=Q.revertLane;if(Y===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),mt===Ds&&(st=!0);else if((_a&Y)===Y){Q=Q.next,Y===Ds&&(st=!0);continue}else mt={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},I===null?(b=I=mt,v=u):I=I.next=mt,fe.lanes|=Y,Ja|=Y;mt=Q.action,zs&&a(u,mt),u=Q.hasEagerState?Q.eagerState:a(u,mt)}else Y={lane:mt,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},I===null?(b=I=Y,v=u):I=I.next=Y,fe.lanes|=mt,Ja|=mt;Q=Q.next}while(Q!==null&&Q!==n);if(I===null?v=u:I.next=b,!si(u,t.memoizedState)&&(pn=!0,st&&(a=yr,a!==null)))throw a;t.memoizedState=u,t.baseState=v,t.baseQueue=I,s.lastRenderedState=u}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Of(t){var n=un(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,u=n.memoizedState;if(c!==null){a.pending=null;var v=c=c.next;do u=t(u,v.action),v=v.next;while(v!==c);si(u,n.memoizedState)||(pn=!0),n.memoizedState=u,n.baseQueue===null&&(n.baseState=u),a.lastRenderedState=u}return[u,s]}function pg(t,n,a){var s=fe,c=un(),u=ve;if(u){if(a===void 0)throw Error(r(407));a=a()}else a=n();var v=!si((Ge||c).memoizedState,a);if(v&&(c.memoizedState=a,pn=!0),c=c.queue,If(_g.bind(null,s,c,t),[t]),t=c.getSnapshot!==n||v||dn!==null&&(dn.memoizedState.tag&1)!==0,br(t?9:8,{destroy:void 0},gg.bind(null,s,c,a,n),null),t){if(s.flags|=2048,Ye===null)throw Error(r(349));u||(_a&127)!==0||mg(s,n,a)}return a}function mg(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=fe.updateQueue,n===null?(n=ac(),fe.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function gg(t,n,a,s){n.value=a,n.getSnapshot=s,vg(n)&&xg(t)}function _g(t,n,a){return a(function(){vg(n)&&xg(t)})}function vg(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!si(t,a)}catch{return!0}}function xg(t){var n=Ts(t,2);n!==null&&Qn(n,t,2)}function zf(t){var n=jn();if(typeof t=="function"){var a=t;if(t=a(),zs){en(!0);try{a()}finally{en(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:t},n}function yg(t,n,a,s){return t.baseState=a,Lf(t,Ge,typeof s=="function"?s:va)}function eM(t,n,a,s,c){if(cc(t))throw Error(r(485));if(t=n.action,t!==null){var u={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){u.listeners.push(v)}};Tt.T!==null?a(!0):u.isTransition=!1,s(u),a=n.pending,a===null?(u.next=n.pending=u,Sg(n,u)):(u.next=a.next,n.pending=a.next=u)}}function Sg(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var u=Tt.T,v={};v.types=u!==null?u.types:null,Tt.T=v;try{var b=a(c,s),I=Tt.S;I!==null&&I(v,b),Mg(t,n,b)}catch(Q){Pf(t,n,Q)}finally{u!==null&&v.types!==null&&(u.types=v.types),Tt.T=u}}else try{u=a(c,s),Mg(t,n,u)}catch(Q){Pf(t,n,Q)}}function Mg(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Eg(t,n,s)},function(s){return Pf(t,n,s)}):Eg(t,n,a)}function Eg(t,n,a){n.status="fulfilled",n.value=a,Tg(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Sg(t,a)))}function Pf(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Tg(n),n=n.next;while(n!==s)}t.action=null}function Tg(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function bg(t,n){return n}function Ag(t,n){if(ve){var a=Ye.formState;if(a!==null){t:{var s=fe;if(ve){if(Ze){e:{for(var c=Ze,u=Si;c.nodeType!==8;){if(!u){c=null;break e}if(c=Ei(c.nextSibling),c===null){c=null;break e}}u=c.data,c=u==="F!"||u==="F"?c:null}if(c){Ze=Ei(c.nextSibling),s=c.data==="F!";break t}}Ha(s)}s=!1}s&&(n=a[0])}}return a=jn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:bg,lastRenderedState:n},a.queue=s,a=Xg.bind(null,fe,s),s.dispatch=a,s=zf(!1),u=Vf.bind(null,fe,!1,s.queue),s=jn(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=eM.bind(null,fe,c,u,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function Rg(t){var n=un();return Cg(n,Ge,t)}function Cg(t,n,a){if(n=Lf(t,n,bg)[0],t=rc(va)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=ko(n)}catch(v){throw v===Sr?Kl:v}else s=n;n=un();var c=n.queue,u=c.dispatch;return a!==n.memoizedState&&(fe.flags|=2048,br(9,{destroy:void 0},nM.bind(null,c,a),null)),[s,u,t]}function nM(t,n){t.action=n}function wg(t){var n=un(),a=Ge;if(a!==null)return Cg(n,a,t);un(),n=n.memoizedState,a=un();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function br(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=fe.updateQueue,n===null&&(n=ac(),fe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function Dg(){return un().memoizedState}function oc(t,n,a,s){var c=jn();fe.flags|=t,c.memoizedState=br(1|n,{destroy:void 0},a,s===void 0?null:s)}function lc(t,n,a,s){var c=un();s=s===void 0?null:s;var u=c.memoizedState.inst;Ge!==null&&s!==null&&Rf(s,Ge.memoizedState.deps)?c.memoizedState=br(n,u,a,s):(fe.flags|=t,c.memoizedState=br(1|n,u,a,s))}function Ng(t,n){oc(8390656,8,t,n)}function If(t,n){lc(2048,8,t,n)}function iM(t){fe.flags|=4;var n=fe.updateQueue;if(n===null)n=ac(),fe.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Ug(t){var n=un().memoizedState;return iM({ref:n,nextImpl:t}),function(){if((Pe&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Lg(t,n){return lc(4,2,t,n)}function Og(t,n){return lc(4,4,t,n)}function zg(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Pg(t,n,a){a=a!=null?a.concat([t]):null,lc(4,4,zg.bind(null,n,t),a)}function Ff(){}function Ig(t,n){var a=un();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Rf(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Fg(t,n){var a=un();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Rf(n,s[1]))return s[0];if(s=t(),zs){en(!0);try{t()}finally{en(!1)}}return a.memoizedState=[s,n],s}function Bf(t,n,a){return a===void 0||(_a&1073741824)!==0&&(Ae&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=W_(),fe.lanes|=t,Ja|=t,a)}function Bg(t,n,a,s){return si(a,n)?a:qa.current!==null?(t=Bf(t,a,s),si(t,n)||(pn=!0),t):(_a&106)===0||(_a&1073741824)!==0&&(Ae&261930)===0?(pn=!0,t.memoizedState=a):(t=W_(),fe.lanes|=t,Ja|=t,n)}function Hg(t,n,a,s,c){var u=Gt.p;Gt.p=u!==0&&8>u?u:8;var v=Tt.T,b={};b.types=v!==null?v.types:null,Tt.T=b,Vf(t,!1,n,a);try{var I=c(),Q=Tt.S;if(Q!==null&&Q(b,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var st=JS(I,s);Xo(t,n,st,ui(t))}else Xo(t,n,s,ui(t))}catch(mt){Xo(t,n,{then:function(){},status:"rejected",reason:mt},ui())}finally{Gt.p=u,v!==null&&b.types!==null&&(v.types=b.types),Tt.T=v}}function aM(){}function Hf(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=Gg(t).queue;Hg(t,c,n,ae,a===null?aM:function(){return Vg(t),a(s)})}function Gg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ae,baseState:ae,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:ae},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Vg(t){var n=Gg(t);n.next===null&&(n=t.alternate.memoizedState),Xo(t,n.next.queue,{},ui())}function Gf(){return Nn(kr)}function jg(){return un().memoizedState}function kg(){return un().memoizedState}function sM(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ui();t=ka(a);var s=Xa(n,t,a);s!==null&&(Qn(s,n,a),Bo(s,n,a)),n={cache:mf()},t.payload=n;return}n=n.return}}function rM(t,n,a){var s=ui();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},cc(t)?qg(n,a):(a=rf(t,n,a,s),a!==null&&(Qn(a,t,s),Yg(a,n,s)))}function Xg(t,n,a){var s=ui();Xo(t,n,a,s)}function Xo(t,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(cc(t))qg(n,c);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=n.lastRenderedReducer,u!==null))try{var v=n.lastRenderedState,b=u(v,a);if(c.hasEagerState=!0,c.eagerState=b,si(b,v))return Hl(t,n,c,0),Ye===null&&Bl(),!1}catch{}finally{}if(a=rf(t,n,c,s),a!==null)return Qn(a,t,s),Yg(a,n,s),!0}return!1}function Vf(t,n,a,s){if(s={lane:2,revertLane:Uh(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},cc(t)){if(n)throw Error(r(479))}else n=rf(t,a,s,2),n!==null&&Qn(n,t,2)}function cc(t){var n=t.alternate;return t===fe||n!==null&&n===fe}function qg(t,n){Er=nc=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Yg(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,w(t,a)}}var uc={readContext:Nn,use:sc,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an,useEffectEvent:an},Wg={readContext:Nn,use:sc,useCallback:function(t,n){return jn().memoizedState=[t,n===void 0?null:n],t},useContext:Nn,useEffect:Ng,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,oc(4194308,4,zg.bind(null,n,t),a)},useLayoutEffect:function(t,n){return oc(4194308,4,t,n)},useInsertionEffect:function(t,n){oc(4,2,t,n)},useMemo:function(t,n){var a=jn();n=n===void 0?null:n;var s=t();if(zs){en(!0);try{t()}finally{en(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=jn();if(a!==void 0){var c=a(n);if(zs){en(!0);try{a(n)}finally{en(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=rM.bind(null,fe,t),[s.memoizedState,t]},useRef:function(t){var n=jn();return t={current:t},n.memoizedState=t},useState:function(t){t=zf(t);var n=t.queue,a=Xg.bind(null,fe,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Ff,useDeferredValue:function(t,n){var a=jn();return Bf(a,t,n)},useTransition:function(){var t=zf(!1);return t=Hg.bind(null,fe,t.queue,!0,!1),jn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=fe,c=jn();if(ve){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ye===null)throw Error(r(349));(Ae&127)!==0||mg(s,n,a)}c.memoizedState=a;var u={value:a,getSnapshot:n};return c.queue=u,Ng(_g.bind(null,s,u,t),[t]),s.flags|=2048,br(9,{destroy:void 0},gg.bind(null,s,u,a,n),null),a},useId:function(){var t=jn(),n=Ye.identifierPrefix;if(ve){var a=Yi,s=qi;a=(s&~(1<<32-cn(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=ic++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=$S++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Gf,useFormState:Ag,useActionState:Ag,useOptimistic:function(t){var n=jn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Vf.bind(null,fe,!0,a),a.dispatch=n,[t,n]},useMemoCache:Uf,useCacheRefresh:function(){return jn().memoizedState=sM.bind(null,fe)},useEffectEvent:function(t){var n=jn(),a={impl:t};return n.memoizedState=a,function(){if((Pe&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Zg={readContext:Nn,use:sc,useCallback:Ig,useContext:Nn,useEffect:If,useImperativeHandle:Pg,useInsertionEffect:Lg,useLayoutEffect:Og,useMemo:Fg,useReducer:rc,useRef:Dg,useState:function(){return rc(va)},useDebugValue:Ff,useDeferredValue:function(t,n){var a=un();return Bg(a,Ge.memoizedState,t,n)},useTransition:function(){var t=rc(va)[0],n=un().memoizedState;return[typeof t=="boolean"?t:ko(t),n]},useSyncExternalStore:pg,useId:jg,useHostTransitionStatus:Gf,useFormState:Rg,useActionState:Rg,useOptimistic:function(t,n){var a=un();return yg(a,Ge,t,n)},useMemoCache:Uf,useCacheRefresh:kg,useEffectEvent:Ug},oM={readContext:Nn,use:sc,useCallback:Ig,useContext:Nn,useEffect:If,useImperativeHandle:Pg,useInsertionEffect:Lg,useLayoutEffect:Og,useMemo:Fg,useReducer:Of,useRef:Dg,useState:function(){return Of(va)},useDebugValue:Ff,useDeferredValue:function(t,n){var a=un();return Ge===null?Bf(a,t,n):Bg(a,Ge.memoizedState,t,n)},useTransition:function(){var t=Of(va)[0],n=un().memoizedState;return[typeof t=="boolean"?t:ko(t),n]},useSyncExternalStore:pg,useId:jg,useHostTransitionStatus:Gf,useFormState:wg,useActionState:wg,useOptimistic:function(t,n){var a=un();return Ge!==null?yg(a,Ge,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Uf,useCacheRefresh:kg,useEffectEvent:Ug};function jf(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:P({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var kf={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=ui(),c=ka(s);c.payload=n,a!=null&&(c.callback=a),n=Xa(t,c,s),n!==null&&(Qn(n,t,s),Bo(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=ui(),c=ka(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Xa(t,c,s),n!==null&&(Qn(n,t,s),Bo(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ui(),s=ka(a);s.tag=2,n!=null&&(s.callback=n),n=Xa(t,s,a),n!==null&&(Qn(n,t,a),Bo(n,t,a))}};function Kg(t,n,a,s,c,u,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,u,v):n.prototype&&n.prototype.isPureReactComponent?!No(a,s)||!No(c,u):!0}function Qg(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&kf.enqueueReplaceState(n,n.state,null)}function Ps(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=P({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function Jg(t){Fl(t)}function $g(t){console.error(t)}function t_(t){Fl(t)}function fc(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function e_(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Xf(t,n,a){return a=ka(a),a.tag=3,a.payload={element:null},a.callback=function(){fc(t,n)},a}function n_(t){return t=ka(t),t.tag=3,t}function i_(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var u=s.value;t.payload=function(){return c(u)},t.callback=function(){e_(n,a,s)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){e_(n,a,s),typeof c!="function"&&($a===null?$a=new Set([this]):$a.add(this));var b=s.stack;this.componentDidCatch(s.value,{componentStack:b!==null?b:""})})}function lM(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Cs(n,a,c,!0),a=Un.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Fn===null?Uc():a.alternate===null&&sn===0&&(sn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===Ql?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),wh(t,s,c)),!1;case 22:return a.flags|=65536,s===Ql?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),wh(t,s,c)),!1}throw Error(r(435,a.tag))}return wh(t,s,c),Uc(),!1}if(ve)return n=Un.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==ff&&(t=Error(r(422),{cause:s}),Oo(vi(t,a)))):(s!==ff&&(n=Error(r(423),{cause:s}),Oo(vi(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=vi(s,a),c=Xf(t.stateNode,s,c),Sf(t,c),sn!==4&&(sn=2)),!1;var u=Error(r(520),{cause:s});if(u=vi(u,a),$o===null?$o=[u]:$o.push(u),sn!==4&&(sn=2),n===null)return!0;s=vi(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Xf(a.stateNode,s,t),Sf(a,t),!1;case 1:if(n=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&($a===null||!$a.has(u))))return a.flags|=65536,c&=-c,a.lanes|=c,c=n_(c),i_(c,t,a,s),Sf(a,c),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var qf=Error(r(461)),pn=!1;function xn(t,n,a,s){n.child=t===null?og(n,null,a,s):Os(n,t.child,a,s)}function a_(t,n,a,s,c){a=a.render;var u=n.ref;if("ref"in s){var v={};for(var b in s)b!=="ref"&&(v[b]=s[b])}else v=s;return ws(n),s=Cf(t,n,a,v,u,c),b=wf(),t!==null&&!pn?(Df(t,n,c),xa(t,n,c)):(ve&&b&&kl(n),n.flags|=1,xn(t,n,s,c),n.child)}function s_(t,n,a,s,c){if(t===null){var u=a.type;return typeof u=="function"&&!of(u)&&u.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=u,r_(t,n,u,s,c)):(t=Vl(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(u=t.child,!th(t,c)){var v=u.memoizedProps;if(a=a.compare,a=a!==null?a:No,a(v,s)&&t.ref===n.ref)return xa(t,n,c)}return n.flags|=1,t=da(u,s),t.ref=n.ref,t.return=n,n.child=t}function r_(t,n,a,s,c){if(t!==null){var u=t.memoizedProps;if(No(u,s)&&t.ref===n.ref)if(pn=!1,n.pendingProps=s=u,th(t,c))(t.flags&131072)!==0&&(pn=!0);else return n.lanes=t.lanes,xa(t,n,c)}return Yf(t,n,a,s,c)}function o_(t,n,a,s){var c=s.children,u=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(u=u!==null?u.baseLanes|a:a,t!==null){for(s=n.child=t.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~u}else s=0,n.child=null;return l_(t,n,u,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Zl(n,u!==null?u.cachePool:null),u!==null?ug(n,u):Ef(),fg(n);else return s=n.lanes=536870912,l_(t,n,u!==null?u.baseLanes|a:a,a,s)}else u!==null?(Zl(n,u.cachePool),ug(n,u),Wa(),n.memoizedState=null):(t!==null&&Zl(n,null),Ef(),Wa());return xn(t,n,c,a),n.child}function qo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function l_(t,n,a,s,c){var u=_f();return u=u===null?null:{parent:hn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},t!==null&&Zl(n,null),Ef(),fg(n),t!==null&&Cs(t,n,s,!0),n.childLanes=c,null}function hc(t,n){return n=dc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function c_(t,n,a){return Os(n,t.child,null,a),t=hc(n,n.pendingProps),t.flags|=2,ri(n),n.memoizedState=null,t}function cM(t,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(ve){if(s.mode==="hidden")return t=hc(n,s),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},qo(null,t);if(bf(n),(t=Ze)?(t=z0(t,Si),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Fa!==null?{id:qi,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},a=qm(t),a.return=n,n.child=a,Tn=n,Ze=null)):t=null,t===null)throw Ha(n);return n.lanes=536870912,null}return hc(n,s)}var u=t.memoizedState;if(u!==null){var v=u.dehydrated;if(bf(n),c)if(n.flags&256)n.flags&=-257,n=c_(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(pn||Cs(t,n,a,!1),c=(a&t.childLanes)!==0,pn||c){if(qa.current===null){if(s=Ye,s!==null&&(v=K(s,a),v!==0&&v!==u.retryLane))throw u.retryLane=v,Ts(t,v),Qn(s,t,v),qf;Uc()}n=c_(t,n,a)}else t=u.treeContext,Ze=Ei(v.nextSibling),Tn=n,ve=!0,Ba=null,Si=!1,t!==null&&Zm(n,t),n=hc(n,s),n.flags|=134221824;return n}return t=da(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Ar(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Yf(t,n,a,s,c){return ws(n),a=Cf(t,n,a,s,void 0,c),s=wf(),t!==null&&!pn?(Df(t,n,c),xa(t,n,c)):(ve&&s&&kl(n),n.flags|=1,xn(t,n,a,c),n.child)}function u_(t,n,a,s,c,u){return ws(n),n.updateQueue=null,a=dg(n,s,a,c),hg(t),s=wf(),t!==null&&!pn?(Df(t,n,u),xa(t,n,u)):(ve&&s&&kl(n),n.flags|=1,xn(t,n,a,u),n.child)}function f_(t,n,a,s,c){if(ws(n),n.stateNode===null){var u=gr,v=a.contextType;typeof v=="object"&&v!==null&&(u=Nn(v)),u=new a(s,u),n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=kf,n.stateNode=u,u._reactInternals=n,u=n.stateNode,u.props=s,u.state=n.memoizedState,u.refs={},xf(n),v=a.contextType,u.context=typeof v=="object"&&v!==null?Nn(v):gr,u.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(jf(n,a,v,s),u.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(v=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),v!==u.state&&kf.enqueueReplaceState(u,u.state,null),Go(n,s,u,c),Ho(),u.state=n.memoizedState),typeof u.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){u=n.stateNode;var b=n.memoizedProps,I=Ps(a,b);u.props=I;var Q=u.context,st=a.contextType;v=gr,typeof st=="object"&&st!==null&&(v=Nn(st));var mt=a.getDerivedStateFromProps;st=typeof mt=="function"||typeof u.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,st||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(b||Q!==v)&&Qg(n,u,s,v),ja=!1;var Y=n.memoizedState;u.state=Y,Go(n,s,u,c),Ho(),Q=n.memoizedState,b||Y!==Q||ja?(typeof mt=="function"&&(jf(n,a,mt,s),Q=n.memoizedState),(I=ja||Kg(n,a,I,s,Y,Q,v))?(st||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(n.flags|=4194308)):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=Q),u.props=s,u.state=Q,u.context=v,s=I):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{u=n.stateNode,yf(t,n),v=n.memoizedProps,st=Ps(a,v),u.props=st,mt=n.pendingProps,Y=u.context,Q=a.contextType,I=gr,typeof Q=="object"&&Q!==null&&(I=Nn(Q)),b=a.getDerivedStateFromProps,(Q=typeof b=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(v!==mt||Y!==I)&&Qg(n,u,s,I),ja=!1,Y=n.memoizedState,u.state=Y,Go(n,s,u,c),Ho();var nt=n.memoizedState;v!==mt||Y!==nt||ja||t!==null&&t.dependencies!==null&&Yl(t.dependencies)?(typeof b=="function"&&(jf(n,a,b,s),nt=n.memoizedState),(st=ja||Kg(n,a,st,s,Y,nt,I)||t!==null&&t.dependencies!==null&&Yl(t.dependencies))?(Q||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(s,nt,I),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(s,nt,I)),typeof u.componentDidUpdate=="function"&&(n.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof u.componentDidUpdate!="function"||v===t.memoizedProps&&Y===t.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&Y===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=nt),u.props=s,u.state=nt,u.context=I,s=st):(typeof u.componentDidUpdate!="function"||v===t.memoizedProps&&Y===t.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&Y===t.memoizedState||(n.flags|=1024),s=!1)}return u=s,Ar(t,n),s=(n.flags&128)!==0,u||s?(u=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:u.render(),n.flags|=1,t!==null&&s?(n.child=Os(n,t.child,null,c),n.child=Os(n,null,a,c)):xn(t,n,a,c),n.memoizedState=u.state,t=n.child):t=xa(t,n,c),t}function h_(t,n,a,s){return As(),n.flags|=256,xn(t,n,a,s),n.child}var Wf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Zf(t){return{baseLanes:t,cachePool:eg()}}function Kf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ci),t}function d_(t,n,a){var s=n.pendingProps,c=!1,u=(n.flags&128)!==0,v;if((v=u)||(v=t!==null&&t.memoizedState===null?!1:(Ln.current&2)!==0),v&&(c=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,t===null){if(ve){if(c?Ya(n):Wa(),(t=Ze)?(t=z0(t,Si),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Fa!==null?{id:qi,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},a=qm(t),a.return=n,n.child=a,Tn=n,Ze=null)):t=null,t===null)throw Ha(n);return Zh(t)?n.lanes=32:n.lanes=536870912,null}return u=s.children,s=s.fallback,c?(Wa(),c=n.mode,u=dc({mode:"hidden",children:u},c),s=bs(s,c,a,null),u.return=n,s.return=n,u.sibling=s,n.child=u,s=n.child,s.memoizedState=Zf(a),s.childLanes=Kf(t,v,a),n.memoizedState=Wf,qo(null,s)):(Ya(n),Qf(n,u))}var b=t.memoizedState;if(b!==null){var I=b.dehydrated;if(I!==null)return uM(t,n,u,v,s,I,b,a)}return c?(Wa(),c=s.fallback,u=n.mode,b=t.child,I=b.sibling,s=da(b,{mode:"hidden",children:s.children}),s.subtreeFlags=b.subtreeFlags&1206910976,I!==null?c=da(I,c):(c=bs(c,u,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,qo(null,s),s=n.child,c=t.child.memoizedState,c===null?c=Zf(a):(u=c.cachePool,u!==null?(b=hn._currentValue,u=u.parent!==b?{parent:b,pool:b}:u):u=eg(),c={baseLanes:c.baseLanes|a,cachePool:u}),s.memoizedState=c,s.childLanes=Kf(t,v,a),n.memoizedState=Wf,qo(t.child,s)):(Ya(n),a=t.child,t=a.sibling,a=da(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(v=n.deletions,v===null?(n.deletions=[t],n.flags|=16):v.push(t)),n.child=a,n.memoizedState=null,a)}function Qf(t,n){return n=dc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function dc(t,n){return t=Yn(22,t,null,n),t.lanes=0,t}function pc(t,n,a){return Os(n,t.child,null,a),t=Qf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function uM(t,n,a,s,c,u,v,b){if(a)return n.flags&256?(Ya(n),n.flags&=-257,pc(t,n,b)):n.memoizedState!==null?(Wa(),n.child=t.child,n.flags|=128,null):(Wa(),u=c.fallback,v=n.mode,c=dc({mode:"visible",children:c.children},v),u=bs(u,v,b,null),u.flags|=2,c.return=n,u.return=n,c.sibling=u,n.child=c,Os(n,t.child,null,b),c=n.child,c.memoizedState=Zf(b),c.childLanes=Kf(t,s,b),n.memoizedState=Wf,qo(null,c));if(Ya(n),Zh(u)){if(s=u.nextSibling&&u.nextSibling.dataset,s)var I=s.dgst;return s=I,s!==""&&(c=Error(r(419)),c.stack="",c.digest=s,Oo({value:c,source:null,stack:null})),pc(t,n,b)}if(pn||Cs(t,n,b,!1),s=(b&t.childLanes)!==0,pn||s){if(qa.current!==null)return pc(t,n,b);if(s=Ye,s!==null&&(c=K(s,b),c!==0&&c!==v.retryLane))throw v.retryLane=c,Ts(t,c),Qn(s,t,c),qf;return Wh(u)||Uc(),pc(t,n,b)}return Wh(u)?(n.flags|=192,n.child=t.child,null):(t=v.treeContext,Ze=Ei(u.nextSibling),Tn=n,ve=!0,Ba=null,Si=!1,t!==null&&Zm(n,t),n=Qf(n,c.children),n.flags|=134221824,n)}function p_(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),ql(t.return,n,a)}function m_(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&ec(a)===null&&(n=t),t=t.sibling}return n}function mc(t,n,a,s,c,u){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:u}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=s,v.tail=a,v.tailMode=c,v.treeForkCount=u)}function Jf(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function $f(t,n,a){var s=n.pendingProps,c=s.revealOrder,u=s.tail;s=s.children;var v=Ln.current;if(n.flags&128)return Vo(n,v),null;var b=(v&2)!==0;if(b?(v=v&1|2,n.flags|=128):v&=1,Vo(n,v),c==="backwards"&&t!==null?(Jf(t),xn(t,n,s,a),Jf(t)):xn(t,n,s,a),s=ve?Lo:0,!b&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&p_(t,a,n);else if(t.tag===19)p_(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"backwards":a=m_(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null,Jf(n)),mc(n,!0,c,null,u,s);break;case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&ec(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}mc(n,!0,a,null,u,s);break;case"together":mc(n,!1,null,null,void 0,s);break;case"independent":n.memoizedState=null;break;default:a=m_(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),mc(n,!1,c,a,u,s)}return n.child}function g_(t,n,a){var s=n.pendingProps;return Ga(n,n.type,s.value),xn(t,n,s.children,a),n.child}function xa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ja|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Cs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=da(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=da(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function th(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Yl(t)))}function fM(t,n,a){switch(n.tag){case 3:at(n,n.stateNode.containerInfo),Ga(n,hn,t.memoizedState.cache),As();break;case 27:case 5:St(n);break;case 4:at(n,n.stateNode.containerInfo);break;case 10:Ga(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,bf(n),null;break;case 13:var s=n.memoizedState;if(s!==null){if(s.dehydrated!==null)return Ya(n),n.flags|=128,null;s=Cs(t,n,a,!1);var c=n.child.childLanes;return s||(a&c)!==0?d_(t,n,a):(Ya(n),t=xa(t,n,a),t!==null?t.sibling:null)}Ya(n);break;case 19:if(n.flags&128)return $f(t,n,a);if(c=(t.flags&128)!==0,s=(a&n.childLanes)!==0,s||(Cs(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return $f(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Vo(n,Ln.current),s)break;return null;case 22:return n.lanes=0,o_(t,n,a,n.pendingProps);case 24:Ga(n,hn,t.memoizedState.cache)}return xa(t,n,a)}function __(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)pn=!0;else{if(!th(t,a)&&(n.flags&128)===0)return pn=!1,fM(t,n,a);pn=(t.flags&131072)!==0}else pn=!1,ve&&(n.flags&1048576)!==0&&Wm(n,Lo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=Us(n.elementType),n.type=t,typeof t=="function")of(t)?(s=Ps(t,s),n.tag=1,n=f_(null,n,t,s,a)):(n.tag=0,n=Yf(null,n,t,s,a));else{if(t!=null){var c=t.$$typeof;if(c===q){n.tag=11,n=a_(null,n,t,s,a);break t}else if(c===xt){n.tag=14,n=s_(null,n,t,s,a);break t}else if(c===ht){n.tag=10,n.type=t,n=g_(null,n,a);break t}}throw n=Ht(t)||t,Error(r(306,n,""))}}return n;case 0:return Yf(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=Ps(s,n.pendingProps),f_(t,n,s,c,a);case 3:t:{if(at(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var u=n.memoizedState;c=u.element,yf(t,n),Go(n,s,null,a);var v=n.memoizedState;if(s=v.cache,Ga(n,hn,s),s!==u.cache&&pf(n,[hn],a,!0),Ho(),s=v.element,u.isDehydrated)if(u={element:s,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=u,n.memoizedState=u,n.flags&256){n=h_(t,n,s,a);break t}else if(s!==c){c=vi(Error(r(424)),n),Oo(c),n=h_(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ze=Ei(t.firstChild),Tn=n,ve=!0,Ba=null,Si=!0,a=og(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(As(),s===c){n=xa(t,n,a);break t}xn(t,n,s,a)}n=n.child}return n;case 26:return Ar(t,n),t===null?(a=V0(n.type,null,n.pendingProps,null))?n.memoizedState=a:ve||(n.stateNode=S0(n.type,n.pendingProps,L.current,n)):n.memoizedState=V0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return St(n),t===null&&ve&&(s=n.stateNode=F0(n.type,n.pendingProps,L.current),Tn=n,Si=!0,c=Ze,ns(n.type)?(Kh=c,Ze=Ei(s.firstChild)):Ze=c),xn(t,n,n.pendingProps.children,a),Ar(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&ve&&((c=s=Ze)&&(s=sE(s,n.type,n.pendingProps,Si),s!==null?(n.stateNode=s,Tn=n,Ze=Ei(s.firstChild),Si=!1,c=!0):c=!1),c||Ha(n)),St(n),c=n.type,u=n.pendingProps,v=t!==null?t.memoizedProps:null,s=u.children,Gh(c,u)?s=null:v!==null&&Gh(c,v)&&(n.flags|=32),n.memoizedState!==null&&(c=Cf(t,n,tM,null,null,a),kr._currentValue=c),Ar(t,n),xn(t,n,s,a),n.child;case 6:return t===null&&ve&&((t=a=Ze)&&(a=rE(a,n.pendingProps,Si),a!==null?(n.stateNode=a,Tn=n,Ze=null,t=!0):t=!1),t||Ha(n)),null;case 13:return d_(t,n,a);case 4:return at(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Os(n,null,s,a):xn(t,n,s,a),n.child;case 11:return a_(t,n,n.type,n.pendingProps,a);case 7:return s=n.pendingProps,Ar(t,n),xn(t,n,s,a),n.child;case 8:return xn(t,n,n.pendingProps.children,a),n.child;case 12:return xn(t,n,n.pendingProps.children,a),n.child;case 10:return g_(t,n,a);case 9:return c=n.type._context,s=n.pendingProps.children,ws(n),c=Nn(c),s=s(c),n.flags|=1,xn(t,n,s,a),n.child;case 14:return s_(t,n,n.type,n.pendingProps,a);case 15:return r_(t,n,n.type,n.pendingProps,a);case 19:return $f(t,n,a);case 31:return cM(t,n,a);case 22:return o_(t,n,a,n.pendingProps);case 24:return ws(n),s=Nn(hn),t===null?(c=_f(),c===null&&(c=Ye,u=mf(),c.pooledCache=u,u.refCount++,u!==null&&(c.pooledCacheLanes|=a),c=u),n.memoizedState={parent:s,cache:c},xf(n),Ga(n,hn,c)):((t.lanes&a)!==0&&(yf(t,n),Go(n,null,null,a),Ho()),c=t.memoizedState,u=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Ga(n,hn,s)):(s=u.cache,Ga(n,hn,s),s!==c.cache&&pf(n,[hn],a,!0))),xn(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),s=n.pendingProps,s.name!=null&&s.name!=="auto"?n.flags|=t===null?18882560:18874368:ve&&kl(n),t!==null&&t.memoizedProps.name!==s.name?n.flags|=4194816:Ar(t,n),xn(t,n,s.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ya(t){t.flags|=4}function eh(t,n,a,s,c){var u;if((u=(t.mode&32)!==0)&&(u=a===null?q0(n,s):q0(n,s)&&(s.src!==a.src||s.srcSet!==a.srcSet)),u){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(J_())t.flags|=8192;else throw Ls=Ql,vf}else t.flags&=-16777217}function v_(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Y0(n))if(J_())t.flags|=8192;else throw Ls=Ql,vf}function gc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?sr():536870912,t.lanes|=n,Nr|=n)}function Yo(t,n){if(!ve)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function Ke(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&1206910976,s|=c.flags&1206910976,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function hM(t,n,a){var s=n.pendingProps;switch(uf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),ga(hn),vt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(xr(n)?ya(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,hf())),Ke(n),null;case 26:var c=n.type,u=n.memoizedState;return t===null?(ya(n),u!==null?(Ke(n),v_(n,u)):(Ke(n),eh(n,c,null,s,a))):u?u!==t.memoizedState?(ya(n),Ke(n),v_(n,u)):(Ke(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&ya(n),Ke(n),eh(n,c,t,s,a)),null;case 27:if(_t(n),a=L.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ya(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ke(n),n.subtreeFlags&=-33554433,null}t=_e.current,xr(n)?Km(n):(t=F0(c,s,a),n.stateNode=t,ya(n))}return Ke(n),n.subtreeFlags&=-33554433,null;case 5:if(_t(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ya(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ke(n),n.subtreeFlags&=-33554433,null}if(u=_e.current,xr(n))Km(n);else{var v=al(L.current);switch(u){case 1:u=v.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:u=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":u=v.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":u=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":u=v.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof s.is=="string"?v.createElement("select",{is:s.is}):v.createElement("select"),s.multiple?u.multiple=!0:s.size&&(u.size=s.size);break;default:u=typeof s.is=="string"?v.createElement(c,{is:s.is}):v.createElement(c)}}u[Nt]=n,u[zt]=s;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)u.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=u;t:switch(zn(u,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&ya(n)}}return Ke(n),n.subtreeFlags&=-33554433,eh(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&ya(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=L.current,xr(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=Tn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[Nt]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||_0(t.nodeValue,a)),t||Ha(n,!0)}else t=al(t).createTextNode(s),t[Nt]=n,n.stateNode=t}return Ke(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=xr(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[Nt]=n}else As(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),t=!1}else a=hf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ri(n),n):(ri(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Ke(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=xr(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[Nt]=n}else As(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),c=!1}else c=hf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(ri(n),n):(ri(n),null)}return ri(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),u=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(u=s.memoizedState.cachePool.pool),u!==c&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),gc(n,n.updateQueue),Ke(n),null);case 4:return vt(),t===null&&Ph(n.stateNode.containerInfo),n.flags|=67108864,Ke(n),null;case 10:return ga(n.type),Ke(n),null;case 19:if(Af(n),s=n.memoizedState,s===null)return Ke(n),null;if(c=(n.flags&128)!==0,u=s.rendering,u===null)if(c)Yo(s,!1);else{if(sn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(u=ec(t),u!==null){for(n.flags|=128,Yo(s,!1),t=u.updateQueue,n.updateQueue=t,gc(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Xm(a,t),a=a.sibling;return Vo(n,Ln.current&1|2),ve&&pa(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&k()>Cc&&(n.flags|=128,c=!0,Yo(s,!1),n.lanes=4194304)}else{if(!c)if(t=ec(u),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,gc(n,t),Yo(s,!0),s.tail===null&&s.tailMode!=="collapsed"&&s.tailMode!=="visible"&&!u.alternate&&!ve)return Ke(n),null}else 2*k()-s.renderingStartTime>Cc&&a!==536870912&&(n.flags|=128,c=!0,Yo(s,!1),n.lanes=4194304);s.isBackwards?(u.sibling=n.child,n.child=u):(t=s.last,t!==null?t.sibling=u:n.child=u,s.last=u)}if(s.tail!==null){t=s.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return s.rendering=t,s.tail=t.sibling,s.renderingStartTime=k(),t.sibling=null,u=Ln.current,u=c?u&1|2:u&1,s.tailMode==="visible"||s.tailMode==="collapsed"||!a||ve?Vo(n,u):(a=u,Rt(Un,n),Rt(Ln,a),Fn===null&&(Fn=n)),ve&&pa(n,s.treeForkCount),t}return Ke(n),null;case 22:case 23:return ri(n),Tf(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),a=n.updateQueue,a!==null&&gc(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&Jt(Ns),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ga(hn),Ke(n),null;case 25:return null;case 30:return n.flags|=33554432,Ke(n),null}throw Error(r(156,n.tag))}function dM(t,n){switch(uf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ga(hn),vt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return _t(n),null;case 31:if(n.memoizedState!==null){if(ri(n),n.alternate===null)throw Error(r(340));As()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ri(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));As()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Af(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return vt(),null;case 10:return ga(n.type),null;case 22:case 23:return ri(n),Tf(),t!==null&&Jt(Ns),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ga(hn),null;case 25:return null;default:return null}}function x_(t,n){switch(uf(n),n.tag){case 3:ga(hn),vt();break;case 26:case 27:case 5:_t(n);break;case 4:vt();break;case 31:n.memoizedState!==null&&ri(n);break;case 13:ri(n);break;case 19:Af(n);break;case 10:ga(n.type);break;case 22:case 23:ri(n),Tf(),t!==null&&Jt(Ns);break;case 24:ga(hn)}}function Wo(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var u=a.create,v=a.inst;s=u(),v.destroy=s}a=a.next}while(a!==c)}}catch(b){Be(n,n.return,b)}}function Za(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var u=c.next;s=u;do{if((s.tag&t)===t){var v=s.inst,b=v.destroy;if(b!==void 0){v.destroy=void 0,c=n;var I=a,Q=b;try{Q()}catch(st){Be(c,I,st)}}}s=s.next}while(s!==u)}}catch(st){Be(n,n.return,st)}}function y_(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{cg(n,a)}catch(s){Be(t,t.return,s)}}}function S_(t,n,a){a.props=Ps(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Be(t,n,s)}}function Wi(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:var c=t.stateNode,u=fa(t.memoizedProps,c);(c.ref===null||c.ref.name!==u)&&(c.ref=C0(u)),s=c.ref;break;case 7:if(t.stateNode===null){var v=new fi(t);m(t.child,!1,iE,v,void 0,void 0),t.stateNode=v}s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(b){Be(t,n,b)}}function On(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Be(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Be(t,n,c)}else a.current=null}function _c(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)O0(t.stateNode,n[a])}function M_(t){for(var n=t.return;n!==null&&(ih(n)&&O0(t.stateNode,n.stateNode),!nh(n));)n=n.return}function Zo(t){for(var n=t.return;n!==null&&(ih(n)&&aE(t.stateNode,n.stateNode),!nh(n));)n=n.return}function nh(t){return t.tag===5||t.tag===3||t.tag===27}function ih(t){return t&&t.tag===7&&t.stateNode!==null}function ah(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Be(t,t.return,c)}}function sh(t,n,a){try{var s=t.stateNode;BM(s,t.type,a,n),s[zt]=n}catch(c){Be(t,t.return,c)}}function E_(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ns(t.type)||t.tag===4}function rh(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||E_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ns(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function oh(t,n,a,s){var c=t.tag;if(c===5||c===6)c=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(c,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(c),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Xi)),_c(t,s),Oe=!0;else if(c!==4&&(c===27&&(_c(t,s),s=null,ns(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(oh(t,n,a,s),t=t.sibling;t!==null;)oh(t,n,a,s),t=t.sibling}function vc(t,n,a,s){var c=t.tag;if(c===5||c===6)c=t.stateNode,n?a.insertBefore(c,n):a.appendChild(c),_c(t,s),Oe=!0;else if(c!==4&&(c===27&&(_c(t,s),s=null,ns(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(vc(t,n,a,s),t=t.sibling;t!==null;)vc(t,n,a,s),t=t.sibling}function T_(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);zn(n,s,a),n[Nt]=t,n[zt]=a}catch(u){Be(t,t.return,u)}}var xc=!1,oi=null;function b_(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(xc=!0)}var Zi=null;function A_(){var t=Zi;return Zi=null,t}var Wn=0;function Rr(t,n,a,s,c){return Wn=0,R_(t.child,n,a,s,c)}function R_(t,n,a,s,c){for(var u=!1;t!==null;){if(t.tag===5){var v=t.stateNode;if(s!==null){var b=kh(v);s.push(b),b.view&&(u=!0)}else u||kh(v).view&&(u=!0);xc=!0,A0(v,Wn===0?n:n+"_"+Wn,a),Wn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&c||R_(t.child,n,a,s,c)&&(u=!0));t=t.sibling}return u}function Ki(t,n){for(;t!==null;)t.tag===5?R0(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Ki(t.child,n)),t=t.sibling}function yc(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(yc(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(r(544));var a=n.name;n=ha(n.default,n.share),n!=="none"&&(Rr(t,a,n,null,!1)||Ki(t.child,!1))}t=t.sibling}}function lh(t,n){if(t.tag===30){var a=t.stateNode,s=t.memoizedProps,c=fa(s,a),u=ha(s.default,a.paired?s.share:s.enter);u!=="none"?Rr(t,c,u,null,!1)?(yc(t),a.paired||n||zr(t,s.onEnter)):Ki(t.child,!1):yc(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)lh(t,n),t=t.sibling;else yc(t)}function ch(t){if(oi!==null&&oi.size!==0){var n=oi;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,s=a.name;if(s!=null&&s!=="auto"){var c=n.get(s);if(c!==void 0){var u=ha(a.default,a.share);if(u!=="none"&&(Rr(t,s,u,null,!1)?(u=t.stateNode,c.paired=u,u.paired=c,zr(t,a.onShare)):Ki(t.child,!1)),n.delete(s),n.size===0)break}}}ch(t)}t=t.sibling}}}function uh(t){if(t.tag===30){var n=t.memoizedProps,a=fa(n,t.stateNode),s=oi!==null?oi.get(a):void 0,c=ha(n.default,s!==void 0?n.share:n.exit);c!=="none"&&(Rr(t,a,c,null,!1)?s!==void 0?(c=t.stateNode,s.paired=c,c.paired=s,oi.delete(a),zr(t,n.onShare)):zr(t,n.onExit):Ki(t.child,!1)),oi!==null&&ch(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)uh(t),t=t.sibling;else oi!==null&&ch(t)}function C_(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=fa(n,t.stateNode);n=ha(n.default,n.update),t.flags&=-5,n!=="none"&&Rr(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&C_(t);t=t.sibling}}function fh(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,Ki(t.child,!1))}fh(t)}t=t.sibling}}function Sc(t){if(t.tag===30)t.stateNode.paired=null,Ki(t.child,!1),fh(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Sc(t),t=t.sibling;else fh(t)}function w_(t){for(t=t.child;t!==null;)t.tag===30?Ki(t.child,!1):(t.subtreeFlags&33554432)!==0&&w_(t),t=t.sibling}function hh(t,n,a,s,c,u,v){for(var b=!1;n!==null;){if(n.tag===5){var I=n.stateNode;if(u!==null&&Wn<u.length){var Q=u[Wn],st=kh(I);(Q.view||st.view)&&(b=!0);var mt;if(mt=(t.flags&4)===0)if(st.clip)mt=!0;else{mt=Q.rect;var Y=st.rect;mt=mt.y!==Y.y||mt.x!==Y.x||mt.height!==Y.height||mt.width!==Y.width}mt&&(t.flags|=4),st.abs?st=!Q.abs:(Q=Q.rect,st=st.rect,st=Q.height!==st.height||Q.width!==st.width),st&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&A0(I,Wn===0?a:a+"_"+Wn,c),b&&(t.flags&4)!==0||(Zi===null&&(Zi=[]),Zi.push(I,Wn===0?s:s+"_"+Wn,n.memoizedProps)),Wn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&v?t.flags|=n.flags&32:hh(t,n.child,a,s,c,u,v)&&(b=!0));n=n.sibling}return b}function D_(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,s=t.stateNode,c=fa(a,s),u=ha(a.default,a.update),v;v=t.memoizedState,t.memoizedState=null,s=t;var b=t.child;Wn=0,c=hh(s,b,c,c,u,v,!1),(t.flags&4)!==0&&c&&zr(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&D_(t);t=t.sibling}}var bn=!1,Ie=!1,Qi=!1,dh=!1,N_=typeof WeakSet=="function"?WeakSet:Set,An=null,Ji=!1,Ko=!1,Mc=!1,ph=!1;function pM(t,n,a){if(t=t.containerInfo,Bh=Xr,t=zm(t),$u(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else t:{s=(s=t.ownerDocument)&&s.defaultView||window;var c=s.getSelection&&s.getSelection();if(c&&c.rangeCount!==0){s=c.anchorNode;var u=c.anchorOffset,v=c.focusNode;c=c.focusOffset;try{s.nodeType,v.nodeType}catch{s=null;break t}var b=0,I=-1,Q=-1,st=0,mt=0,Y=t,nt=null;e:for(;;){for(var Ot;Y!==s||u!==0&&Y.nodeType!==3||(I=b+u),Y!==v||c!==0&&Y.nodeType!==3||(Q=b+c),Y.nodeType===3&&(b+=Y.nodeValue.length),(Ot=Y.firstChild)!==null;)nt=Y,Y=Ot;for(;;){if(Y===t)break e;if(nt===s&&++st===u&&(I=b),nt===v&&++mt===c&&(Q=b),(Ot=Y.nextSibling)!==null)break;Y=nt,nt=Y.parentNode}Y=Ot}s=I===-1||Q===-1?null:{start:I,end:Q}}else s=null}s=s||{start:0,end:0}}else s=null;for(Hh={focusedElem:t,selectionRange:s},Xr=!1,a=(a&335544064)===a,An=n,n=a?9270:1024;An!==null;){if(t=An,a&&(s=t.deletions,s!==null))for(u=0;u<s.length;u++)a&&uh(s[u]);if(t.alternate===null&&(t.flags&2)!==0)a&&b_(t),Ec(a);else{if(t.tag===22){if(s=t.alternate,t.memoizedState!==null){s!==null&&s.memoizedState===null&&a&&uh(s),Ec(a);continue}else if(s!==null&&s.memoizedState!==null){a&&b_(t),Ec(a);continue}}s=t.child,(t.subtreeFlags&n)!==0&&s!==null?(s.return=t,An=s):(a&&C_(t),Ec(a))}}oi=null}function Ec(t){for(;An!==null;){var n=An,a=t,s=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((c&1024)!==0&&s!==null){a=void 0,c=s.memoizedProps,s=s.memoizedState;var u=n.stateNode;try{var v=Ps(n.type,c);a=u.getSnapshotBeforeUpdate(v,s),u.__reactInternalSnapshotBeforeUpdate=a}catch(b){Be(n,n.return,b)}}break;case 3:if((c&1024)!==0){if(s=n.stateNode.containerInfo,a=s.nodeType,a===9)Yh(s);else if(a===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":Yh(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&s!==null&&(a=fa(s.memoizedProps,s.stateNode),c=n.memoizedProps,c=ha(c.default,c.update),c!=="none"&&Rr(s,a,c,s.memoizedState=[],!0));break;default:if((c&1024)!==0)throw Error(r(163))}if(s=n.sibling,s!==null){s.return=n.return,An=s;break}An=n.return}}function U_(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:$i(t,a),s&4&&Wo(5,a);break;case 1:if($i(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(v){Be(a,a.return,v)}else{var c=Ps(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(v){Be(a,a.return,v)}}s&64&&y_(a),s&512&&Wi(a,a.return);break;case 3:if($i(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{cg(t,n)}catch(v){Be(a,a.return,v)}}break;case 27:n===null&&s&4&&T_(a);case 26:case 5:$i(t,a),n===null&&s&4&&ah(a),s&512&&Wi(a,a.return);break;case 12:$i(t,a);break;case 31:$i(t,a),s&4&&P_(t,a);break;case 13:$i(t,a),s&4&&I_(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=AM.bind(null,a),oE(t,a))));break;case 22:if(s=a.memoizedState!==null||bn,!s){var u=n!==null&&n.memoizedState!==null||Ie;n=bn,c=Ie,bn=s,(Ie=u)&&!c?(s=2,(a.subtreeFlags&8772)!==0&&(s|=1),Pi(t,a,s)):$i(t,a),bn=n,Ie=c}break;case 30:$i(t,a),s&512&&Wi(a,a.return);break;case 7:s&512&&Wi(a,a.return);default:$i(t,a)}}function mh(t,n){for(t=t.child;t!==null;)L_(t,n),t=t.sibling}function L_(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var s=a.style;typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"}else{var c=t.stateNode,u=t.memoizedProps.style,v=u!=null&&u.hasOwnProperty("display")?u.display:null;c.style.display=v==null||typeof v=="boolean"?"":(""+v).trim()}}catch(I){Be(t,t.return,I)}gh(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,Oe=!0}catch(I){Be(t,t.return,I)}break;case 18:try{var b=t.stateNode;n?b0(b,!0):b0(t.stateNode,!1)}catch(I){Be(t,t.return,I)}break;case 22:case 23:t.memoizedState===null&&mh(t,n);break;default:mh(t,n)}}function gh(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,s=n;switch(a.tag){case 4:L_(a,s);break t;case 22:a.memoizedState===null&&gh(a,s);break t;default:gh(a,s)}}t=t.sibling}}function O_(t){var n=t.alternate;n!==null&&(t.alternate=null,O_(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ye(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var $e=null,Zn=!1;function Oi(t,n,a){for(a=a.child;a!==null;)z_(t,n,a),a=a.sibling}function z_(t,n,a){if(we&&typeof we.onCommitFiberUnmount=="function")try{we.onCommitFiberUnmount(xe,a)}catch{}switch(a.tag){case 26:Ie||On(a,n),Oi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Ie&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ie||On(a,n),Zo(a);var s=$e,c=Zn;ns(a.type)&&($e=a.stateNode,Zn=!1),Oi(t,n,a),B0(a.stateNode,a.type,a.memoizedProps),$e=s,Zn=c;break;case 5:Ie||On(a,n),Zo(a);case 6:if(a.tag===6&&Zo(a),s=$e,c=Zn,$e=null,Oi(t,n,a),$e=s,Zn=c,$e!==null)if(Zn)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(a.stateNode),Oe=!0}catch(u){Be(a,n,u)}else try{$e.removeChild(a.stateNode),Oe=!0}catch(u){Be(a,n,u)}break;case 18:$e!==null&&(Zn?(t=$e,T0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),qr(t)):T0($e,a.stateNode));break;case 4:s=$e,c=Zn,$e=a.stateNode.containerInfo,Zn=!0,Oi(t,n,a),$e=s,Zn=c;break;case 0:case 11:case 14:case 15:Za(2,a,n),Ie||Za(4,a,n),Oi(t,n,a);break;case 1:Ie||(On(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&S_(a,n,s)),Oi(t,n,a);break;case 21:Oi(t,n,a);break;case 22:Ie=(s=Ie)||a.memoizedState!==null,Oi(t,n,a),Ie=s;break;case 30:On(a,n),Oi(t,n,a);break;case 7:Ie||On(a,n),Oi(t,n,a);break;default:Oi(t,n,a)}}function P_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{qr(t)}catch(a){Be(n,n.return,a)}}}function I_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{qr(t)}catch(a){Be(n,n.return,a)}}function mM(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new N_),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new N_),n;default:throw Error(r(435,t.tag))}}function Tc(t,n){var a=mM(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=RM.bind(null,t,s);s.then(c,c)}})}function kn(t,n,a){var s=n.deletions;if(s!==null)for(var c=0;c<s.length;c++){var u=s[c],v=t,b=n,I=b;t:for(;I!==null;){switch(I.tag){case 27:if(ns(I.type)){$e=I.stateNode,Zn=!1;break t}break;case 5:$e=I.stateNode,Zn=!1;break t;case 3:case 4:$e=I.stateNode.containerInfo,Zn=!0;break t}I=I.return}if($e===null)throw Error(r(160));z_(v,b,u),$e=null,Zn=!1,v=u.alternate,v!==null&&(v.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)F_(n,t,a),n=n.sibling}var zi=null;function F_(t,n,a){var s=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(c&4&&(s=t.updateQueue,s=s!==null?s.events:null,s!==null))for(var u=0;u<s.length;u++){var v=s[u];v.ref.impl=v.nextImpl}kn(n,t,a),Xn(t),c&4&&(Za(3,t,t.return),Wo(3,t),Za(5,t,t.return));break;case 1:kn(n,t,a),Xn(t),c&512&&(Ie||s===null||On(s,s.return)),c&64&&bn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(u=zi,kn(n,t,a),Xn(t),c&512&&(Ie||s===null||On(s,s.return)),c&4)if(c=s!==null?s.memoizedState:null,a=t.memoizedState,s===null)if(a===null)if(t.stateNode===null)if(bn)t.stateNode=S0(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,c=u.ownerDocument||u;e:switch(n){case"title":s=c.getElementsByTagName("title")[0],(!s||s[We]||s[Nt]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=c.createElement(n),c.head.insertBefore(s,c.querySelector("head > title"))),zn(s,n,a),s[Nt]=t,Qe(s),n=s;break t;case"link":if(u=X0("link","href",c).get(n+(a.href||""))){for(v=0;v<u.length;v++)if(s=u[v],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(v,1);break e}}s=c.createElement(n),zn(s,n,a),c.head.appendChild(s);break;case"meta":if(u=X0("meta","content",c).get(n+(a.content||""))){for(v=0;v<u.length;v++)if(s=u[v],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(v,1);break e}}s=c.createElement(n),zn(s,n,a),c.head.appendChild(s);break;default:throw Error(r(468,n))}s[Nt]=t,Qe(s),n=s}t.stateNode=n}else bn||td(u,t.type,t.stateNode);else t.stateNode=k0(u,a,t.memoizedProps);else c!==a?(c===null?(n=s.stateNode,n===null||Ie||n.parentNode.removeChild(n)):c.count--,a===null?bn||td(u,t.type,t.stateNode):k0(u,a,t.memoizedProps)):a===null&&t.stateNode!==null&&sh(t,t.memoizedProps,s.memoizedProps);break;case 27:kn(n,t,a),Xn(t),c&512&&(Ie||s===null||On(s,s.return)),s!==null&&c&4&&sh(t,t.memoizedProps,s.memoizedProps);break;case 5:if(u=Qi,Qi=!1,kn(n,t,a),Qi=u,Xn(t),c&512&&(Ie||s===null||On(s,s.return)),t.flags&32){n=t.stateNode;try{cr(n,""),Oe=!0}catch(st){Be(t,t.return,st)}}c&4&&t.stateNode!=null&&(n=t.memoizedProps,sh(t,n,s!==null?s.memoizedProps:n)),c&1024&&(dh=!0);break;case 6:if(kn(n,t,a),Xn(t),c&4){if(t.stateNode===null)throw Error(r(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,Oe=!0}catch(st){Be(t,t.return,st)}}break;case 3:if(Oe=!1,Bc=null,u=zi,zi=sl(n.containerInfo),kn(n,t,a),zi=u,Xn(t),c&4&&s!==null&&s.memoizedState.isDehydrated)try{qr(n.containerInfo)}catch(st){Be(t,t.return,st)}dh&&(dh=!1,B_(t)),Oe=!1;break;case 4:c=Qi,Qi=bn,s=sm(),u=zi,zi=sl(t.stateNode.containerInfo),kn(n,t,a),Xn(t),zi=u,Oe&&Ko&&(Mc=!0),Oe=s,Qi=c;break;case 12:kn(n,t,a),Xn(t);break;case 31:kn(n,t,a),Xn(t),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Tc(t,n)));break;case 13:kn(n,t,a),Xn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Rc=k()),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Tc(t,n)));break;case 22:u=t.memoizedState!==null,v=s!==null&&s.memoizedState!==null;var b=bn,I=Ie,Q=Qi;bn=b||u,Qi=Q||u,Ie=I||v,kn(n,t,a),Ie=I,Qi=Q,bn=b,Xn(t),c&8192&&(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,!u||s===null||v||bn||Ie||(n=v||Ie,a=bn,s=Ie,bn=u||bn,Ie=n,Ka(t,2),bn=a,Ie=s),!u&&Qi||mh(t,u)),c&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Tc(t,a))));break;case 19:kn(n,t,a),Xn(t),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Tc(t,n)));break;case 30:c&512&&(Ie||s===null||On(s,s.return)),c=sm(),u=Ko,v=(a&335544064)===a,b=t.memoizedProps,Ko=v&&ha(b.default,b.update)!=="none",kn(n,t,a),Xn(t),v&&s!==null&&Oe&&(t.flags|=4),Ko=u,Oe=c;break;case 21:break;case 7:c&512&&(Ie||s===null||On(s,s.return)),s&&s.stateNode!==null&&(s.stateNode._fragmentFiber=t);default:kn(n,t,a),Xn(t)}}function Xn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(E_(s)){a=s;break}s=s.return}s=null;for(var c=t.return;c!==null;){if(ih(c)){var u=c.stateNode;s===null?s=[u]:s.push(u)}if(nh(c))break;c=c.return}var v=s;if(a==null)throw Error(r(160));switch(a.tag){case 27:var b=a.stateNode,I=rh(t);vc(t,I,b,v);break;case 5:var Q=a.stateNode;a.flags&32&&(cr(Q,""),a.flags&=-33);var st=rh(t);vc(t,st,Q,v);break;case 3:case 4:var mt=a.stateNode.containerInfo,Y=rh(t);oh(t,Y,mt,v);break;default:throw Error(r(161))}}catch(nt){Be(t,t.return,nt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function B_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;B_(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Xr=!0,n.reset(),Xr=!1),t=t.sibling}}function Cr(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)H_(n,t),n=n.sibling;else D_(n)}function H_(t,n){var a=t.alternate;if(a===null)lh(t,!1);else switch(t.tag){case 3:if(ph=Ji=!1,A_(),Cr(n,t),!Ji&&!Mc){if(t=Zi,t!==null)for(var s=0;s<t.length;s+=3){a=t[s];var c=t[s+1];R0(a,t[s+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+c+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),ph=!0}Zi=null;break;case 5:Cr(n,t);break;case 4:s=Ji,Ji=!1,Cr(n,t),Ji&&(Mc=!0),Ji=s;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?lh(t,!1):Cr(n,t));break;case 30:s=Ji,c=A_(),Ji=!1,Cr(n,t),Ji&&(t.flags|=4);var u=t.memoizedProps,v=t.stateNode;n=fa(u,v),v=fa(a.memoizedProps,v);var b=ha(u.default,u.update);b==="none"?n=!1:(u=a.memoizedState,a.memoizedState=null,a=t.child,Wn=0,n=hh(t,a,n,v,b,u,!0),Wn!==(u===null?0:u.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(zr(t,t.memoizedProps.onUpdate),Zi=c):c!==null&&(c.push.apply(c,Zi),Zi=c),Ji=(t.flags&32)!==0?!0:s;break;default:Cr(n,t)}}function $i(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)U_(t,n.alternate,n),n=n.sibling}function Ka(t,n){for(t=t.child;t!==null;){var a=t,s=n;switch(a.tag){case 0:case 11:case 14:case 15:Za(4,a,a.return),Ka(a,s);break;case 1:On(a,a.return);var c=a.stateNode;typeof c.componentWillUnmount=="function"&&S_(a,a.return,c),Ka(a,s);break;case 27:(s&2)!==0&&B0(a.stateNode,a.type,a.memoizedProps);case 5:On(a,a.return),a.tag!==5&&a.tag!==27||Zo(a),Ka(a,s);break;case 6:Zo(a);break;case 26:On(a,a.return),c=a.stateNode,a.memoizedState!==null||c===null||Ie||c.parentNode.removeChild(c),Ka(a,s);break;case 22:a.memoizedState===null&&Ka(a,s);break;case 30:On(a,a.return),Ka(a,s);break;case 7:On(a,a.return);default:Ka(a,s)}t=t.sibling}}function Pi(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var s=n.alternate,c=t,u=n,v=u.flags,b=(a&1)!==0;switch(u.tag){case 0:case 11:case 15:Pi(c,u,a),Wo(4,u);break;case 1:if(Pi(c,u,a),s=u,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(st){Be(s,s.return,st)}if(s=u,c=s.updateQueue,c!==null){var I=s.stateNode;try{var Q=c.shared.hiddenCallbacks;if(Q!==null)for(c.shared.hiddenCallbacks=null,c=0;c<Q.length;c++)lg(Q[c],I)}catch(st){Be(s,s.return,st)}}b&&v&64&&y_(u),Wi(u,u.return);break;case 27:(a&2)!==0&&T_(u);case 5:u.tag!==5&&u.tag!==27||M_(u),Pi(c,u,a),b&&s===null&&v&4&&ah(u),Wi(u,u.return);break;case 6:M_(u);break;case 26:I=u.stateNode,u.memoizedState!==null||I===null||bn||td(sl(I.ownerDocument),u.type,I),Pi(c,u,a),b&&s===null&&v&4&&ah(u),Wi(u,u.return);break;case 12:Pi(c,u,a);break;case 31:Pi(c,u,a),b&&v&4&&P_(c,u);break;case 13:Pi(c,u,a),b&&v&4&&I_(c,u);break;case 22:u.memoizedState===null&&Pi(c,u,a),Wi(u,u.return);break;case 30:Pi(c,u,a),Wi(u,u.return);break;case 7:Wi(u,u.return);default:Pi(c,u,a)}n=n.sibling}}function _h(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&zo(a))}function vh(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&zo(t))}function Mi(t,n,a,s){var c=(a&335544064)===a;if(n.subtreeFlags&(c?10262:10256))for(n=n.child;n!==null;)G_(t,n,a,s),n=n.sibling;else c&&w_(n)}function G_(t,n,a,s){var c=(a&335544064)===a;c&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Sc(n);var u=n.flags;switch(n.tag){case 0:case 11:case 15:Mi(t,n,a,s),u&2048&&Wo(9,n);break;case 1:Mi(t,n,a,s);break;case 3:Mi(t,n,a,s),c&&ph&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),u&2048&&(u=null,n.alternate!==null&&(u=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==u&&(n.refCount++,u!=null&&zo(u)));break;case 12:if(u&2048){Mi(t,n,a,s),u=n.stateNode;try{var v=n.memoizedProps,b=v.id,I=v.onPostCommit;typeof I=="function"&&I(b,n.alternate===null?"mount":"update",u.passiveEffectDuration,-0)}catch(Q){Be(n,n.return,Q)}}else Mi(t,n,a,s);break;case 31:Mi(t,n,a,s);break;case 13:Mi(t,n,a,s);break;case 23:break;case 22:v=n.stateNode,b=n.alternate,n.memoizedState!==null?(c&&b!==null&&b.memoizedState===null&&Sc(b),v._visibility&2?Mi(t,n,a,s):Qo(t,n)):(c&&b!==null&&b.memoizedState!==null&&Sc(n),v._visibility&2?Mi(t,n,a,s):(v._visibility|=2,wr(t,n,a,s,(n.subtreeFlags&10256)!==0||!1))),u&2048&&_h(b,n);break;case 24:Mi(t,n,a,s),u&2048&&vh(n.alternate,n);break;case 30:c&&(u=n.alternate,u!==null&&(Ki(u.child,!0),Ki(n.child,!0))),Mi(t,n,a,s);break;default:Mi(t,n,a,s)}}function wr(t,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var u=t,v=n,b=a,I=s,Q=v.flags;switch(v.tag){case 0:case 11:case 15:wr(u,v,b,I,c),Wo(8,v);break;case 23:break;case 22:var st=v.stateNode;v.memoizedState!==null?st._visibility&2?wr(u,v,b,I,c):Qo(u,v):(st._visibility|=2,wr(u,v,b,I,c)),c&&Q&2048&&_h(v.alternate,v);break;case 24:wr(u,v,b,I,c),c&&Q&2048&&vh(v.alternate,v);break;default:wr(u,v,b,I,c)}n=n.sibling}}function Qo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:Qo(a,s),c&2048&&_h(s.alternate,s);break;case 24:Qo(a,s),c&2048&&vh(s.alternate,s);break;default:Qo(a,s)}n=n.sibling}}var Is=8192;function Fs(t,n,a){if(t.subtreeFlags&Is)for(t=t.child;t!==null;)V_(t,n,a),t=t.sibling}function V_(t,n,a){switch(t.tag){case 26:Fs(t,n,a),t.flags&Is&&(t.memoizedState!==null?SE(a,zi,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&Z0(a,t)));break;case 5:Fs(t,n,a),t.flags&Is&&(t=t.stateNode,(n&335544128)===n&&Z0(a,t));break;case 3:case 4:var s=zi;zi=sl(t.stateNode.containerInfo),Fs(t,n,a),zi=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=Is,Is=16777216,Fs(t,n,a),Is=s):Fs(t,n,a));break;case 30:if((t.flags&Is)!==0&&(s=t.memoizedProps.name,s!=null&&s!=="auto")){var c=t.stateNode;c.paired=null,oi===null&&(oi=new Map),oi.set(s,c)}Fs(t,n,a);break;default:Fs(t,n,a)}}function j_(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Jo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];An=s,X_(s,t)}j_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)k_(t),t=t.sibling}function k_(t){switch(t.tag){case 0:case 11:case 15:Jo(t),t.flags&2048&&Za(9,t,t.return);break;case 3:Jo(t);break;case 12:Jo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,bc(t)):Jo(t);break;default:Jo(t)}}function bc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];An=s,X_(s,t)}j_(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Za(8,n,n.return),bc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,bc(n));break;default:bc(n)}t=t.sibling}}function X_(t,n){for(;An!==null;){var a=An;switch(a.tag){case 0:case 11:case 15:Za(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:zo(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,An=s;else t:for(a=t;An!==null;){s=An;var c=s.sibling,u=s.return;if(O_(s),s===a){An=null;break t}if(c!==null){c.return=u,An=c;break t}An=u}}}var gM={getCacheForType:function(t){var n=Nn(hn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Nn(hn).controller.signal}},_M=typeof WeakMap=="function"?WeakMap:Map,Pe=0,Ye=null,Se=null,Ae=0,Fe=0,li=null,Qa=!1,Dr=!1,xh=!1,Sa=0,sn=0,Ja=0,Bs=0,Ac=0,ci=0,Nr=0,$o=null,Kn=null,yh=!1,Rc=0,q_=0,Cc=1/0,wc=null,$a=null,nn=0,Ii=null,Hs=null,ta=0,Sh=0,Mh=null,Y_=null,Ur=null,Lr=null,Or=null,tl=0,Dc=null;function ui(){return(Pe&2)!==0&&Ae!==0?Ae&-Ae:Tt.T!==null?Uh():J()}function W_(){if(ci===0)if((Ae&536870912)===0||ve){var t=ra;ra<<=1,(ra&3932160)===0&&(ra=262144),ci=t}else ci=536870912;return t=Un.current,t!==null&&(t.flags|=32),ci}function zr(t,n){if(n!=null){var a=t.stateNode,s=a.ref;s===null&&(s=a.ref=C0(fa(t.memoizedProps,a))),Lr===null&&(Lr=[]),Lr.push(n.bind(null,s))}}function Qn(t,n,a){(t===Ye&&(Fe===2||Fe===9)||t.cancelPendingCommit!==null)&&(Pr(t,0),ts(t,Ae,ci,!1)),oa(t,a),((Pe&2)===0||t!==Ye)&&(t===Ye&&((Pe&2)===0&&(Bs|=a),sn===4&&ts(t,Ae,ci,!1)),ea(t))}function Z_(t,n,a){if((Pe&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ui(t,n),c=s?yM(t,n):Th(t,n,!0),u=s;do{if(c===0){Dr&&!s&&ts(t,n,0,!1);break}else{if(a=t.current.alternate,u&&!vM(a)){c=Th(t,n,!1),u=!1;continue}if(c===2){if(u=n,t.errorRecoveryDisabledLanes&u)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var b=t;c=$o;var I=b.current.memoizedState.isDehydrated;if(I&&(Pr(b,v).flags|=256),v=Th(b,v,!1),v!==2&&v!==6){if(xh&&!I){b.errorRecoveryDisabledLanes|=u,Bs|=u,c=4;break t}u=Kn,Kn=c,u!==null&&(Kn===null?Kn=u:Kn.push.apply(Kn,u))}c=v}if(u=!1,c!==2)continue}}if(c===1){Pr(t,0),ts(t,n,0,!0);break}t:{switch(s=t,u=c,u){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:ts(s,n,ci,!Qa);break t;case 2:Kn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Rc+300-k(),10<c)){if(ts(s,n,ci,!Qa),mi(s,0,!0)!==0)break t;ta=n,s.timeoutHandle=jh(K_.bind(null,s,a,Kn,wc,yh,n,ci,Bs,Nr,Qa,u,"Throttled",-0,0),c);break t}K_(s,a,Kn,wc,yh,n,ci,Bs,Nr,Qa,u,null,-0,0)}}break}while(!0);ea(t)}function K_(t,n,a,s,c,u,v,b,I,Q,st,mt,Y,nt){t.timeoutHandle=-1;var Ot=n.subtreeFlags,qt=(u&335544064)===u;if(mt=null,(qt||Ot&8192||(Ot&16785408)===16785408)&&(mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Xi},oi=null,V_(n,u,mt),qt&&(Ot=mt,qt=t.containerInfo,qt=(qt.nodeType===9?qt:qt.ownerDocument).__reactViewTransition,qt!=null&&(Ot.count++,Ot.waitingForViewTransition=!0,Ot=ll.bind(Ot),qt.finished.then(Ot,Ot))),Ot=(u&62914560)===u?Rc-k():(u&4194048)===u?q_-k():0,Ot=ME(mt,Ot),Ot!==null)){ta=u,t.cancelPendingCommit=Ot(a0.bind(null,t,n,u,a,s,c,v,b,I,Q,st,mt,null,Y,nt)),ts(t,u,v,!Q);return}a0(t,n,u,a,s,c,v,b,I,Q,st,mt)}function vM(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],u=c.getSnapshot;c=c.value;try{if(!si(u(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ts(t,n,a,s){n=Oa(t,n),n&=~Ac,n&=~Bs,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var u=31-cn(c),v=1<<u;s[u]=-1,c&=~v}a!==0&&Ss(t,a,n)}function Nc(){return(Pe&6)===0?(el(0),!1):!0}function Eh(){if(Se!==null){if(Fe===0)var t=Se.return;else t=Se,ma=Rs=null,Nf(t),Mr=null,Fo=0,t=Se;for(;t!==null;)x_(t.alternate,t),t=t.return;Se=null}}function Pr(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,VM(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ta=0,Eh(),Ye=t,Se=a=da(t.current,null),Ae=n,Fe=0,li=null,Qa=!1,Dr=Ui(t,n),xh=!1,Nr=ci=Ac=Bs=Ja=sn=0,Kn=$o=null,yh=!1,Sa=Oa(t,n),Bl(),a}function Q_(t,n){fe=null,Tt.H=uc,n===Sr||n===Kl?(n=ag(),Fe=3):n===vf?(n=ag(),Fe=4):Fe=n===qf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,li=n,Se===null&&(sn=1,fc(t,vi(n,t.current)))}function J_(){var t=Un.current;return t===null?!0:(Ae&4194048)===Ae?Fn===null:(Ae&62914560)===Ae||(Ae&536870912)!==0?t===Fn:!1}function $_(){var t=Tt.H;return Tt.H=uc,t===null?uc:t}function t0(){var t=Tt.A;return Tt.A=gM,t}function Uc(){sn=4,Qa||(Ae&4194048)!==Ae&&Un.current!==null||(Dr=!0),(Ja&134217727)===0&&(Bs&134217727)===0||Ye===null||ts(Ye,Ae,ci,!1)}function Th(t,n,a){var s=Pe;Pe|=2;var c=$_(),u=t0();(Ye!==t||Ae!==n)&&(wc=null,Pr(t,n)),n=!1;var v=sn;t:do try{if(Fe!==0&&Se!==null){var b=Se,I=li;switch(Fe){case 8:Eh(),v=6;break t;case 3:case 2:case 9:case 6:Un.current===null&&(n=!0);var Q=Fe;if(Fe=0,li=null,Ir(t,b,I,Q),a&&Dr){v=0;break t}break;default:Q=Fe,Fe=0,li=null,Ir(t,b,I,Q)}}xM(),v=sn;break}catch(st){Q_(t,st)}while(!0);return n&&t.shellSuspendCounter++,ma=Rs=null,Pe=s,Tt.H=c,Tt.A=u,Se===null&&(Ye=null,Ae=0,Bl()),v}function xM(){for(;Se!==null;)e0(Se)}function yM(t,n){var a=Pe;Pe|=2;var s=$_(),c=t0();Ye!==t||Ae!==n?(wc=null,Cc=k()+500,Pr(t,n)):Dr=Ui(t,n);t:do try{if(Fe!==0&&Se!==null){n=Se;var u=li;e:switch(Fe){case 1:Fe=0,li=null,Ir(t,n,u,1);break;case 2:case 9:if(ng(u)){Fe=0,li=null,n0(n);break}n=function(){Fe!==2&&Fe!==9||Ye!==t||(Fe=7),ea(t)},u.then(n,n);break t;case 3:Fe=7;break t;case 4:Fe=5;break t;case 7:ng(u)?(Fe=0,li=null,n0(n)):(Fe=0,li=null,Ir(t,n,u,7));break;case 5:var v=null;switch(Se.tag){case 26:v=Se.memoizedState;case 5:case 27:var b=Se;if(v?Y0(v):b.stateNode.complete){Fe=0,li=null;var I=b.sibling;if(I!==null)Se=I;else{var Q=b.return;Q!==null?(Se=Q,Lc(Q)):Se=null}break e}}Fe=0,li=null,Ir(t,n,u,5);break;case 6:Fe=0,li=null,Ir(t,n,u,6);break;case 8:Eh(),sn=6;break t;default:throw Error(r(462))}}SM();break}catch(st){Q_(t,st)}while(!0);return ma=Rs=null,Tt.H=s,Tt.A=c,Pe=a,Se!==null?0:(Ye=null,Ae=0,Bl(),sn)}function SM(){for(;Se!==null&&!ce();)e0(Se)}function e0(t){var n=__(t.alternate,t,Sa);t.memoizedProps=t.pendingProps,n===null?Lc(t):Se=n}function n0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=u_(a,n,n.pendingProps,n.type,void 0,Ae);break;case 11:n=u_(a,n,n.pendingProps,n.type.render,n.ref,Ae);break;case 5:Nf(n);var s=n;s===Tn&&(ve?(Xl(s),s.tag===5&&s.stateNode!=null&&(Ze=s.stateNode)):(Xl(s),ve=!0));default:x_(a,n),n=Se=Xm(n,Sa),n=__(a,n,Sa)}t.memoizedProps=t.pendingProps,n===null?Lc(t):Se=n}function Ir(t,n,a,s){ma=Rs=null,Nf(n),Mr=null,Fo=0;var c=n.return;try{if(lM(t,c,n,a,Ae)){sn=1,fc(t,vi(a,t.current)),Se=null;return}}catch(u){if(c!==null)throw Se=c,u;sn=1,fc(t,vi(a,t.current)),Se=null;return}n.flags&32768?(ve||s===1?t=!0:Dr||(Ae&536870912)!==0?t=!1:(Qa=t=!0,(s===2||s===9||s===3||s===6)&&(s=Un.current,s!==null&&s.tag===13&&(s.flags|=16384))),i0(n,t)):Lc(n)}function Lc(t){var n=t;do{if((n.flags&32768)!==0){i0(n,Qa);return}t=n.return;var a=hM(n.alternate,n,Sa);if(a!==null){Se=a;return}if(n=n.sibling,n!==null){Se=n;return}Se=n=t}while(n!==null);sn===0&&(sn=5)}function i0(t,n){do{var a=dM(t.alternate,t);if(a!==null){a.flags&=32767,Se=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Se=t;return}Se=t=a}while(t!==null);sn=6,Se=null}function a0(t,n,a,s,c,u,v,b,I,Q,st,mt){t.cancelPendingCommit=null;do Oc();while(nn!==0);if((Pe&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));t===Ye&&(Se=Ye=null,Ae=0),Hs=n,Ii=t,ta=a,Mh=c,Y_=s,MM(t,n,a,v,b,I,mt)}}function MM(t,n,a,s,c,u,v){var b=n.lanes|n.childLanes;if(Sh=b,b|=sf,rr(t,a,b,s,c,u),Lr=null,(a&335544064)===a?(Or=KS(t),s=10262):(Or=null,s=10256),(n.subtreeFlags&s)!==0||(n.flags&s)!==0?(t.callbackNode=null,t.callbackPriority=0,CM(Ct,function(){return Ch(),null})):(t.callbackNode=null,t.callbackPriority=0),xc=!1,s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=Tt.T,Tt.T=null,c=Gt.p,Gt.p=2,u=Pe,Pe|=4;try{pM(t,n,a)}finally{Pe=u,Gt.p=c,Tt.T=s}}nn=1,xc?Ur=WM(v,t.containerInfo,Or,bh,Ah,TM,Rh,Ch,EM):(bh(),Ah(),Rh())}function EM(t){if(nn!==0){var n=Ii.onRecoverableError;n(t,{componentStack:null})}}function TM(){nn===3&&(nn=0,H_(Hs,Ii),nn=4)}function bh(){if(nn===1){nn=0;var t=Ii,n=Hs,a=ta,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=Tt.T,Tt.T=null;var c=Gt.p;Gt.p=2;var u=Pe;Pe|=4;try{Ko=Mc=!1,F_(n,t,a),a=Hh;var v=zm(t.containerInfo),b=a.focusedElem,I=a.selectionRange;if(v!==b&&b&&b.ownerDocument&&Om(b.ownerDocument.documentElement,b)){if(I!==null&&$u(b)){var Q=I.start,st=I.end;if(st===void 0&&(st=Q),"selectionStart"in b)b.selectionStart=Q,b.selectionEnd=Math.min(st,b.value.length);else{var mt=b.ownerDocument||document,Y=mt&&mt.defaultView||window;if(Y.getSelection){var nt=Y.getSelection(),Ot=b.textContent.length,qt=Math.min(I.start,Ot),he=I.end===void 0?qt:Math.min(I.end,Ot);!nt.extend&&qt>he&&(v=he,he=qt,qt=v);var Z=Lm(b,qt),V=Lm(b,he);if(Z&&V&&(nt.rangeCount!==1||nt.anchorNode!==Z.node||nt.anchorOffset!==Z.offset||nt.focusNode!==V.node||nt.focusOffset!==V.offset)){var tt=mt.createRange();tt.setStart(Z.node,Z.offset),nt.removeAllRanges(),qt>he?(nt.addRange(tt),nt.extend(V.node,V.offset)):(tt.setEnd(V.node,V.offset),nt.addRange(tt))}}}}for(mt=[],nt=b;nt=nt.parentNode;)nt.nodeType===1&&mt.push({element:nt,left:nt.scrollLeft,top:nt.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<mt.length;b++){var pt=mt[b];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}Xr=!!Bh,Hh=Bh=null}finally{Pe=u,Gt.p=c,Tt.T=s}}t.current=n,nn=2}}function Ah(){if(nn===2){nn=0;var t=Ii,n=Hs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=Tt.T,Tt.T=null;var s=Gt.p;Gt.p=2;var c=Pe;Pe|=4;try{U_(t,n.alternate,n)}finally{Pe=c,Gt.p=s,Tt.T=a}}nn=3}}function Rh(){if(nn===4||nn===3){nn=0;var t=Ur;Ur=null,Le();var n=Ii,a=Hs,s=ta,c=Y_,u=(s&335544064)===s?10262:10256;if((a.subtreeFlags&u)!==0||(a.flags&u)!==0?nn=5:(nn=0,Hs=Ii=null,s0(n,n.pendingLanes)),u=n.pendingLanes,u===0&&($a=null),ut(s),a=a.stateNode,we&&typeof we.onCommitFiberRoot=="function")try{we.onCommitFiberRoot(xe,a,void 0,(a.current.flags&128)===128)}catch{}if(c!==null){a=Tt.T,u=Gt.p,Gt.p=2,Tt.T=null;try{for(var v=n.onRecoverableError,b=0;b<c.length;b++){var I=c[b];v(I.value,{componentStack:I.stack})}}finally{Tt.T=a,Gt.p=u}}if(c=Lr,v=Or,Or=null,c!==null&&(Lr=null,v===null&&(v=[]),t!==null))for(I=0;I<c.length;I++)a=(0,c[I])(v),a!==void 0&&t.finished.finally(a);(ta&3)!==0&&Oc(),ea(n),u=n.pendingLanes,(s&261930)!==0&&(u&42)!==0?n===Dc?tl++:(tl=0,Dc=n):(tl=0,Dc=null),el(0)}}function s0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,zo(n)))}function Oc(){return Ur!==null&&(Ur.skipTransition(),Ur=null),bh(),Ah(),Rh(),Ch()}function Ch(){if(nn!==5)return!1;var t=Ii,n=Sh;Sh=0;var a=ut(ta),s=Tt.T,c=Gt.p;try{Gt.p=32>a?32:a,Tt.T=null,a=Mh,Mh=null;var u=Ii,v=ta;if(nn=0,Hs=Ii=null,ta=0,(Pe&6)!==0)throw Error(r(331));var b=Pe;if(Pe|=4,k_(u.current),G_(u,u.current,v,a),Pe=b,el(0,!1),we&&typeof we.onPostCommitFiberRoot=="function")try{we.onPostCommitFiberRoot(xe,u)}catch{}return!0}finally{Gt.p=c,Tt.T=s,s0(t,n)}}function r0(t,n,a){n=vi(a,n),n=Xf(t.stateNode,n,2),t=Xa(t,n,2),t!==null&&(oa(t,2),ea(t))}function Be(t,n,a){if(t.tag===3)r0(t,t,a);else for(;n!==null;){if(n.tag===3){r0(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&($a===null||!$a.has(s))){t=vi(a,t),a=n_(2),s=Xa(n,a,2),s!==null&&(i_(a,s,n,t),oa(s,2),ea(s));break}}n=n.return}}function wh(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new _M;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(xh=!0,c.add(a),t=bM.bind(null,t,n,a),n.then(t,t))}function bM(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ye===t&&(Ae&a)===a&&((sn===4||sn===3&&(Ae&62914560)===Ae&&300>k()-Rc)&&(Pe&2)===0?Pr(t,0):Ac|=a,Nr===Ae&&(Nr=0)),ea(t)}function o0(t,n){n===0&&(n=sr()),t=Ts(t,n),t!==null&&(oa(t,n),ea(t))}function AM(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),o0(t,a)}function RM(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),o0(t,a)}function CM(t,n){return jt(t,n)}var Fr=null,Br=null,Dh=!1,zc=!1,Nh=!1,es=0;function ea(t){t!==Br&&t.next===null&&(Br===null?Fr=Br=t:Br=Br.next=t),zc=!0,Dh||(Dh=!0,DM())}function el(t,n){if(!Nh&&zc){Nh=!0;do for(var a=!1,s=Fr;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var u=0;else{var v=s.suspendedLanes,b=s.pingedLanes;u=(1<<31-cn(42|t)+1)-1,u&=c&~(v&~b),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,f0(s,u))}else u=Ae,u=mi(s,s===Ye?u:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(u&3)===0||Ui(s,u)||(a=!0,f0(s,u));s=s.next}while(a);Nh=!1}}function wM(){l0()}function l0(){zc=Dh=!1;var t=0;es!==0&&GM()&&(t=es);for(var n=k(),a=null,s=Fr;s!==null;){var c=s.next,u=c0(s,n);u===0?(s.next=null,a===null?Fr=c:a.next=c,c===null&&(Br=a)):(a=s,(t!==0||(u&3)!==0)&&(zc=!0)),s=c}nn!==0&&nn!==5||el(t),es!==0&&(es=0)}function c0(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var v=31-cn(u),b=1<<v,I=c[v];I===-1?((b&a)===0||(b&s)!==0)&&(c[v]=Eo(b,n)):I<=n&&(t.expiredLanes|=b),u&=~b}if(n=Ye,a=Ae,a=mi(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Fe===2||Fe===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&de(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ui(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&de(s),ut(a)){case 2:case 8:a=gt;break;case 32:a=Ct;break;case 268435456:a=ne;break;default:a=Ct}return s=u0.bind(null,t),a=jt(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&de(s),t.callbackPriority=2,t.callbackNode=null,2}function u0(t,n){if(nn!==0&&nn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Oc()&&t.callbackNode!==a)return null;var s=Ae;return s=mi(t,t===Ye?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(Z_(t,s,n),c0(t,k()),t.callbackNode!=null&&t.callbackNode===a?u0.bind(null,t):null)}function f0(t,n){if(Oc())return null;Z_(t,n,!0)}function DM(){jM(function(){(Pe&6)!==0?jt(rt,wM):l0()})}function Uh(){if(es===0){var t=Ds;t===0&&(t=ni,ni<<=1,(ni&261888)===0&&(ni=256)),es=t}return es}function h0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Nl(t)}function NM(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var u=h0((c[zt]||null).action),v=s.submitter;v&&(n=(n=v[zt]||null)?h0(n.formAction):v.getAttribute("formAction"),n!==null&&(u=n,v=null));var b=new zl("action","action",null,s,c);t.push({event:b,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(es!==0){var I=new FormData(c,v);Hf(a,{pending:!0,data:I,method:c.method,action:u},null,I)}}else typeof u=="function"&&(b.preventDefault(),I=new FormData(c,v),Hf(a,{pending:!0,data:I,method:c.method,action:u},u,I))},currentTarget:c}]})}}for(var Lh=0;Lh<af.length;Lh++){var Oh=af[Lh],UM=Oh.toLowerCase(),LM=Oh[0].toUpperCase()+Oh.slice(1);Li(UM,"on"+LM)}Li(Fm,"onAnimationEnd"),Li(Bm,"onAnimationIteration"),Li(Hm,"onAnimationStart"),Li("dblclick","onDoubleClick"),Li("focusin","onFocus"),Li("focusout","onBlur"),Li(VS,"onTransitionRun"),Li(jS,"onTransitionStart"),Li(kS,"onTransitionCancel"),Li(Gm,"onTransitionEnd"),vn("onMouseEnter",["mouseout","mouseover"]),vn("onMouseLeave",["mouseout","mouseover"]),vn("onPointerEnter",["pointerout","pointerover"]),vn("onPointerLeave",["pointerout","pointerover"]),fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),fn("onBeforeInput",["compositionend","keypress","textInput","paste"]),fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var nl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),OM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(nl));function d0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var u=void 0;if(n)for(var v=s.length-1;0<=v;v--){var b=s[v],I=b.instance,Q=b.currentTarget;if(b=b.listener,I!==u&&c.isPropagationStopped())break t;u=b,c.currentTarget=Q;try{u(c)}catch(st){Fl(st)}c.currentTarget=null,u=I}else for(v=0;v<s.length;v++){if(b=s[v],I=b.instance,Q=b.currentTarget,b=b.listener,I!==u&&c.isPropagationStopped())break t;u=b,c.currentTarget=Q;try{u(c)}catch(st){Fl(st)}c.currentTarget=null,u=I}}}}function Me(t,n){var a=n[oe];a===void 0&&(a=n[oe]=new Set);var s=t+"__bubble";a.has(s)||(p0(n,t,2,!1),a.add(s))}function zh(t,n,a){var s=0;n&&(s|=4),p0(a,t,s,n)}var Pc="_reactListening"+Math.random().toString(36).slice(2);function Ph(t){if(!t[Pc]){t[Pc]=!0,za.forEach(function(a){a!=="selectionchange"&&(OM.has(a)||zh(a,!1,t),zh(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Pc]||(n[Pc]=!0,zh("selectionchange",!1,n))}}function p0(t,n,a,s){switch(iv(n)){case 2:var c=AE;break;case 8:c=RE;break;default:c=nd}a=c.bind(null,n,a,t),c=void 0,!ju||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Ih(t,n,a,s,c){var u=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var v=s.tag;if(v===3||v===4){var b=s.stateNode.containerInfo;if(b===c)break;if(v===4)for(v=s.return;v!==null;){var I=v.tag;if((I===3||I===4)&&v.stateNode.containerInfo===c)return;v=v.return}for(;b!==null;){if(v=Zt(b),v===null)return;if(I=v.tag,I===5||I===6||I===26||I===27){s=u=v;continue t}b=b.parentNode}}s=s.return}pm(function(){var Q=u,st=Gu(a),mt=[];t:{var Y=Vm.get(t);if(Y!==void 0){var nt=zl,Ot=t;switch(t){case"keypress":if(Ll(a)===0)break t;case"keydown":case"keyup":nt=vS;break;case"focusin":Ot="focus",nt=Yu;break;case"focusout":Ot="blur",nt=Yu;break;case"beforeblur":case"afterblur":nt=Yu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":nt=_m;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":nt=rS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":nt=ES;break;case Fm:case Bm:case Hm:nt=cS;break;case Gm:nt=bS;break;case"scroll":case"scrollend":nt=aS;break;case"wheel":nt=RS;break;case"copy":case"cut":case"paste":nt=fS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":nt=xm;break;case"submit":nt=SS;break;case"toggle":case"beforetoggle":nt=wS}var qt=(n&4)!==0,he=!qt&&(t==="scroll"||t==="scrollend"),Z=qt?Y!==null?Y+"Capture":null:Y;qt=[];for(var V=Q,tt;V!==null;){var pt=V;if(tt=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||tt===null||Z===null||(pt=To(V,Z),pt!=null&&qt.push(il(V,pt,tt))),he)break;V=V.return}0<qt.length&&(Y=new nt(Y,Ot,null,a,st),mt.push({event:Y,listeners:qt}))}}if((n&7)===0){t:{if(nt=t==="mouseover"||t==="pointerover",Y=t==="mouseout"||t==="pointerout",nt&&a!==Hu&&(Ot=a.relatedTarget||a.fromElement)&&(Zt(Ot)||Ot[ie]))break t;(Y||nt)&&(Ot=st.window===st?st:(nt=st.ownerDocument)?nt.defaultView||nt.parentWindow:window,Y?(nt=a.relatedTarget||a.toElement,Y=Q,nt=nt?Zt(nt):null,nt!==null&&(he=f(nt),qt=nt.tag,nt!==he||qt!==5&&qt!==27&&qt!==6)&&(nt=null)):(Y=null,nt=Q),Y!==nt&&(qt=_m,pt="onMouseLeave",Z="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(qt=xm,pt="onPointerLeave",Z="onPointerEnter",V="pointer"),he=Y==null?Ot:be(Y),tt=nt==null?Ot:be(nt),Ot=new qt(pt,V+"leave",Y,a,st),Ot.target=he,Ot.relatedTarget=tt,pt=null,Zt(st)===Q&&(qt=new qt(Z,V+"enter",nt,a,st),qt.target=tt,qt.relatedTarget=he,pt=qt),he=pt,qt=Y&&nt?F(Y,nt,zM):null,Y!==null&&m0(mt,Ot,Y,qt,!1),nt!==null&&he!==null&&m0(mt,he,nt,qt,!0)))}t:{if(Y=Q?be(Q):window,nt=Y.nodeName&&Y.nodeName.toLowerCase(),nt==="select"||nt==="input"&&Y.type==="file")var Xt=Rm;else if(bm(Y))if(Cm)Xt=BS;else{Xt=IS;var Re=PS}else nt=Y.nodeName,!nt||nt.toLowerCase()!=="input"||Y.type!=="checkbox"&&Y.type!=="radio"?Q&&Bu(Q.elementType)&&(Xt=Rm):Xt=FS;if(Xt&&(Xt=Xt(t,Q))){Am(mt,Xt,a,st);break t}Re&&Re(t,Y,Q)}switch(Re=Q?be(Q):window,t){case"focusin":(bm(Re)||Re.contentEditable==="true")&&(dr=Re,tf=Q,Uo=null);break;case"focusout":Uo=tf=dr=null;break;case"mousedown":ef=!0;break;case"contextmenu":case"mouseup":case"dragend":ef=!1,Pm(mt,a,st);break;case"selectionchange":if(GS)break;case"keydown":case"keyup":Pm(mt,a,st)}var Kt;if(Zu)t:{switch(t){case"compositionstart":var re="onCompositionStart";break t;case"compositionend":re="onCompositionEnd";break t;case"compositionupdate":re="onCompositionUpdate";break t}re=void 0}else hr?Em(t,a)&&(re="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(re="onCompositionStart");re&&(ym&&a.locale!=="ko"&&(hr||re!=="onCompositionStart"?re==="onCompositionEnd"&&hr&&(Kt=mm()):(Pa=st,ku="value"in Pa?Pa.value:Pa.textContent,hr=!0)),Re=Ic(Q,re),0<Re.length&&(re=new vm(re,t,null,a,st),mt.push({event:re,listeners:Re}),Kt?re.data=Kt:(Kt=Tm(a),Kt!==null&&(re.data=Kt)))),(Kt=NS?US(t,a):LS(t,a))&&(re=Ic(Q,"onBeforeInput"),0<re.length&&(Re=new vm("onBeforeInput","beforeinput",null,a,st),mt.push({event:Re,listeners:re}),Re.data=Kt)),NM(mt,t,Q,a,st)}d0(mt,n)})}function il(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Ic(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,u=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||u===null||(c=To(t,a),c!=null&&s.unshift(il(t,c,u)),c=To(t,n),c!=null&&s.push(il(t,c,u))),t.tag===3)return s;t=t.return}return[]}function zM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function m0(t,n,a,s,c){for(var u=n._reactName,v=[];a!==null&&a!==s;){var b=a,I=b.alternate,Q=b.stateNode;if(b=b.tag,I!==null&&I===s)break;b!==5&&b!==26&&b!==27||Q===null||(I=Q,c?(Q=To(a,u),Q!=null&&v.unshift(il(a,Q,I))):c||(Q=To(a,u),Q!=null&&v.push(il(a,Q,I)))),a=a.return}v.length!==0&&t.push({event:n,listeners:v})}var PM=/\r\n?/g,IM=/\u0000|\uFFFD/g;function g0(t){return(typeof t=="string"?t:""+t).replace(PM,`
`).replace(IM,"")}function _0(t,n){return n=g0(n),g0(t)===n}function He(t,n,a,s,c,u){switch(a){case"children":if(typeof s=="string")n==="body"||n==="textarea"&&s===""||cr(t,s);else if(typeof s=="number"||typeof s=="bigint")n!=="body"&&cr(t,""+s);else return;break;case"className":Dl(t,"class",s);break;case"tabIndex":Dl(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Dl(t,a,s);break;case"style":hm(t,s,u);return;case"data":if(n!=="object"){Dl(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Nl(s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(n!=="input"&&He(t,n,"name",c.name,c,null),He(t,n,"formEncType",c.formEncType,c,null),He(t,n,"formMethod",c.formMethod,c,null),He(t,n,"formTarget",c.formTarget,c,null)):(He(t,n,"encType",c.encType,c,null),He(t,n,"method",c.method,c,null),He(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Nl(s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Xi);return;case"onScroll":s!=null&&Me("scroll",t);return;case"onScrollEnd":s!=null&&Me("scrollend",t);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));(u!=null?u.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Nl(s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":Me("beforetoggle",t),Me("toggle",t),wl(t,"popover",s);break;case"xlinkActuate":ca(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":ca(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":ca(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":ca(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":ca(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":ca(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":ca(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":ca(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":ca(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":wl(t,"is",s);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=nS.get(a)||a,wl(t,a,s);else return}Oe=!0}function Fh(t,n,a,s,c,u){switch(a){case"style":hm(t,s,u);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));(u!=null?u.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"children":if(typeof s=="string")cr(t,s);else if(typeof s=="number"||typeof s=="bigint")cr(t,""+s);else return;break;case"onScroll":s!=null&&Me("scroll",t);return;case"onScrollEnd":s!=null&&Me("scrollend",t);return;case"onClick":s!=null&&(t.onclick=Xi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!qe.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),u=a.slice(2,c?a.length-7:void 0),n=t[zt]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(u,n,c),typeof s=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(u,s,c);break t}Oe=!0,a in t?t[a]=s:s===!0?t.setAttribute(a,""):wl(t,a,s)}return}Oe=!0}function zn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",t),Me("load",t);var s=!1,c=!1,u;for(u in a)if(a.hasOwnProperty(u)){var v=a[u];if(v!=null)switch(u){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:He(t,n,u,v,a,null)}}c&&He(t,n,"srcSet",a.srcSet,a,null),s&&He(t,n,"src",a.src,a,null);return;case"input":Me("invalid",t);var b=u=v=c=null,I=null,Q=null;for(s in a)if(a.hasOwnProperty(s)){var st=a[s];if(st!=null)switch(s){case"name":c=st;break;case"type":v=st;break;case"checked":I=st;break;case"defaultChecked":Q=st;break;case"value":u=st;break;case"defaultValue":b=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(r(137,n));break;default:He(t,n,s,st,a,null)}}lm(t,u,b,I,Q,v,c,!1);return;case"select":Me("invalid",t),s=v=u=null;for(c in a)if(a.hasOwnProperty(c)&&(b=a[c],b!=null))switch(c){case"value":u=b;break;case"defaultValue":v=b;break;case"multiple":s=b;default:He(t,n,c,b,a,null)}n=u,a=v,t.multiple=!!s,n!=null?lr(t,!!s,n,!1):a!=null&&lr(t,!!s,a,!0);return;case"textarea":Me("invalid",t),u=c=s=null;for(v in a)if(a.hasOwnProperty(v)&&(b=a[v],b!=null))switch(v){case"value":s=b;break;case"defaultValue":c=b;break;case"children":u=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:He(t,n,v,b,a,null)}um(t,s,c,u);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(s=a[I],s!=null))switch(I){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:He(t,n,I,s,a,null)}return;case"dialog":Me("beforetoggle",t),Me("toggle",t),Me("cancel",t),Me("close",t);break;case"iframe":case"object":Me("load",t);break;case"video":case"audio":for(s=0;s<nl.length;s++)Me(nl[s],t);break;case"image":Me("error",t),Me("load",t);break;case"details":Me("toggle",t);break;case"embed":case"source":case"link":Me("error",t),Me("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(s=a[Q],s!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:He(t,n,Q,s,a,null)}return;default:if(Bu(n)){for(st in a)a.hasOwnProperty(st)&&(s=a[st],s!==void 0&&Fh(t,n,st,s,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(s=a[b],s!=null&&He(t,n,b,s,a,null))}var FM={};function BM(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,u=null,v=null,b=null,I=null,Q=null,st=null;for(nt in a){var mt=a[nt];if(a.hasOwnProperty(nt)&&mt!=null)switch(nt){case"checked":break;case"value":break;case"defaultValue":I=mt;default:s.hasOwnProperty(nt)||He(t,n,nt,null,s,mt)}}for(var Y in s){var nt=s[Y];if(mt=a[Y],s.hasOwnProperty(Y)&&(nt!=null||mt!=null))switch(Y){case"type":nt!==mt&&(Oe=!0),u=nt;break;case"name":nt!==mt&&(Oe=!0),c=nt;break;case"checked":nt!==mt&&(Oe=!0),Q=nt;break;case"defaultChecked":nt!==mt&&(Oe=!0),st=nt;break;case"value":nt!==mt&&(Oe=!0),v=nt;break;case"defaultValue":nt!==mt&&(Oe=!0),b=nt;break;case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(r(137,n));break;default:nt!==mt&&He(t,n,Y,nt,s,mt)}}Iu(t,v,b,I,Q,st,u,c);return;case"select":nt=v=b=Y=null;for(u in a)if(I=a[u],a.hasOwnProperty(u)&&I!=null)switch(u){case"value":break;case"multiple":nt=I;default:s.hasOwnProperty(u)||He(t,n,u,null,s,I)}for(c in s)if(u=s[c],I=a[c],s.hasOwnProperty(c)&&(u!=null||I!=null))switch(c){case"value":u!==I&&(Oe=!0),Y=u;break;case"defaultValue":u!==I&&(Oe=!0),b=u;break;case"multiple":u!==I&&(Oe=!0),v=u;default:u!==I&&He(t,n,c,u,s,I)}n=b,a=v,s=nt,Y!=null?lr(t,!!a,Y,!1):!!s!=!!a&&(n!=null?lr(t,!!a,n,!0):lr(t,!!a,a?[]:"",!1));return;case"textarea":nt=Y=null;for(b in a)if(c=a[b],a.hasOwnProperty(b)&&c!=null&&!s.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:He(t,n,b,null,s,c)}for(v in s)if(c=s[v],u=a[v],s.hasOwnProperty(v)&&(c!=null||u!=null))switch(v){case"value":c!==u&&(Oe=!0),Y=c;break;case"defaultValue":c!==u&&(Oe=!0),nt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==u&&He(t,n,v,c,s,u)}cm(t,Y,nt);return;case"option":for(var Ot in a)if(Y=a[Ot],a.hasOwnProperty(Ot)&&Y!=null&&!s.hasOwnProperty(Ot))switch(Ot){case"selected":t.selected=!1;break;default:He(t,n,Ot,null,s,Y)}for(I in s)if(Y=s[I],nt=a[I],s.hasOwnProperty(I)&&Y!==nt&&(Y!=null||nt!=null))switch(I){case"selected":Y!==nt&&(Oe=!0),t.selected=Y&&typeof Y!="function"&&typeof Y!="symbol";break;default:He(t,n,I,Y,s,nt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var qt in a)Y=a[qt],a.hasOwnProperty(qt)&&Y!=null&&!s.hasOwnProperty(qt)&&He(t,n,qt,null,s,Y);for(Q in s)if(Y=s[Q],nt=a[Q],s.hasOwnProperty(Q)&&Y!==nt&&(Y!=null||nt!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(r(137,n));break;default:He(t,n,Q,Y,s,nt)}return;default:if(Bu(n)){for(var he in a)Y=a[he],a.hasOwnProperty(he)&&Y!==void 0&&!s.hasOwnProperty(he)&&Fh(t,n,he,void 0,s,Y);for(st in s)Y=s[st],nt=a[st],!s.hasOwnProperty(st)||Y===nt||Y===void 0&&nt===void 0||Fh(t,n,st,Y,s,nt);return}}for(var Z in a)Y=a[Z],a.hasOwnProperty(Z)&&Y!=null&&!s.hasOwnProperty(Z)&&He(t,n,Z,null,s,Y);for(mt in s)Y=s[mt],nt=a[mt],!s.hasOwnProperty(mt)||Y===nt||Y==null&&nt==null||He(t,n,mt,Y,s,nt)}function v0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function HM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],u=c.transferSize,v=c.initiatorType,b=c.duration;if(u&&b&&v0(v)){for(v=0,b=c.responseEnd,s+=1;s<a.length;s++){var I=a[s],Q=I.startTime;if(Q>b)break;var st=I.transferSize,mt=I.initiatorType;st&&v0(mt)&&(I=I.responseEnd,v+=st*(I<b?1:(b-Q)/(I-Q)))}if(--s,n+=8*(u+v)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Bh=null,Hh=null;function al(t){return t.nodeType===9?t:t.ownerDocument}function x0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function y0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function S0(t,n,a,s){return a=al(a).createElement(t),a[Nt]=s,a[zt]=n,zn(a,t,n),Qe(a),a}function Gh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Vh=null;function GM(){var t=window.event;return t&&t.type==="popstate"?t===Vh?!1:(Vh=t,!0):(Vh=null,!1)}var jh=typeof setTimeout=="function"?setTimeout:void 0,VM=typeof clearTimeout=="function"?clearTimeout:void 0,M0=typeof Promise=="function"?Promise:void 0,E0=typeof requestAnimationFrame=="function"?requestAnimationFrame:jh,jM=typeof queueMicrotask=="function"?queueMicrotask:typeof M0<"u"?function(t){return M0.resolve(null).then(t).catch(kM)}:jh;function kM(t){setTimeout(function(){throw t})}function ns(t){return t==="head"}function T0(t,n){var a=n,s=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(c),qr(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Qh(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Qh(a);for(var u=a.firstChild;u;){var v=u.nextSibling,b=u.nodeName;u[We]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=v}}else a==="body"&&Qh(t.ownerDocument.body);a=c}while(a);qr(n)}function b0(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function A0(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var s=1;else for(var c=s=0;c<n.length;c++){var u=n[c];0<u.width&&0<u.height&&s++}s===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function R0(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function XM(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function kh(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return XM(n,a,t)}function qM(t){return t.documentElement.clientHeight}function YM(t){this.addEventListener("load",t),this.addEventListener("error",t)}function WM(t,n,a,s,c,u,v,b,I){var Q=n.nodeType===9?n:n.ownerDocument;try{var st=Q.startViewTransition({update:function(){var Y=Q.defaultView,nt=Y.navigation&&Y.navigation.transition,Ot=Q.fonts.status;s();var qt=[];if(Ot==="loaded"&&(qM(Q),Q.fonts.status==="loading"&&qt.push(Q.fonts.ready)),Ot=qt.length,t!==null)for(var he=t.suspenseyImages,Z=0,V=0;V<he.length;V++){var tt=he[V];if(!tt.complete){var pt=tt.getBoundingClientRect();if(0<pt.bottom&&0<pt.right&&pt.top<Y.innerHeight&&pt.left<Y.innerWidth){if(Z+=W0(tt),Z>Hc){qt.length=Ot;break}tt=new Promise(YM.bind(tt)),qt.push(tt)}}}if(0<qt.length)return Y=Promise.race([Promise.all(qt),new Promise(function(Xt){return setTimeout(Xt,500)})]).then(c,c),(nt?Promise.allSettled([nt.finished,Y]):Y).then(u,u);if(c(),nt)return nt.finished.then(u,u);u()},types:a});Q.__reactViewTransition=st;var mt=[];return st.ready.then(function(){for(var Y=Q.documentElement.getAnimations({subtree:!0}),nt=0;nt<Y.length;nt++){var Ot=Y[nt],qt=Ot.effect,he=qt.pseudoElement;if(he!=null&&he.startsWith("::view-transition")){mt.push(Ot),Ot=qt.getKeyframes();for(var Z=he=void 0,V=!0,tt=0;tt<Ot.length;tt++){var pt=Ot[tt],Xt=pt.width;if(he===void 0)he=Xt;else if(he!==Xt){V=!1;break}if(Xt=pt.height,Z===void 0)Z=Xt;else if(Z!==Xt){V=!1;break}delete pt.width,delete pt.height,pt.transform==="none"&&delete pt.transform}V&&he!==void 0&&Z!==void 0&&(qt.setKeyframes(Ot),V=getComputedStyle(qt.target,qt.pseudoElement),V.width!==he||V.height!==Z)&&(V=Ot[0],V.width=he,V.height=Z,V=Ot[Ot.length-1],V.width=he,V.height=Z,qt.setKeyframes(Ot))}}v()},function(Y){Q.__reactViewTransition===st&&(Q.__reactViewTransition=null);try{if(typeof Y=="object"&&Y!==null)switch(Y.name){case"InvalidStateError":(Y.message==="View transition was skipped because document visibility state is hidden."||Y.message==="Skipping view transition because document visibility state has become hidden."||Y.message==="Skipping view transition because viewport size changed."||Y.message==="Transition was aborted because of invalid state")&&(Y=null)}Y!==null&&I(Y)}finally{s(),c(),v()}}),st.finished.finally(function(){for(var Y=0;Y<mt.length;Y++)mt[Y].cancel();Q.__reactViewTransition===st&&(Q.__reactViewTransition=null),b()}),st}catch{return s(),c(),v(),null}}function Gs(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Gs.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:P({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Gs.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),s=[],c=0;c<a.length;c++){var u=a[c].effect;u!==null&&u.target===t&&u.pseudoElement===n&&s.push(a[c])}return s},Gs.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function C0(t){return{name:t,group:new Gs("group",t),imagePair:new Gs("image-pair",t),old:new Gs("old",t),new:new Gs("new",t)}}function fi(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}fi.prototype.addEventListener=function(t,n,a){var s=null,c=null;if(!(a!=null&&typeof a!="boolean"&&(s=a.signal||null,s!==null&&s.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var u=this._eventListeners;if(D0(u,t,n,a)===-1){var v=this,b=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(b=function(I){v.removeEventListener(t,n,a),typeof n=="function"?n.call(this,I):n.handleEvent(I)}),s!==null&&(c=v.removeEventListener.bind(v,t,n,a),s.addEventListener("abort",c,{once:!0}),c=s.removeEventListener.bind(s,"abort",c)),s=Hr(a),u.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:b,cleanup:c}),m(this._fragmentFiber.child,!1,ZM,t,b,s)}this._eventListeners=u}};function ZM(t,n,a,s){return M(t).addEventListener(n,a,s),!1}fi.prototype.removeEventListener=function(t,n,a){var s=this._eventListeners;if(s!==null&&(n=D0(s,t,n,a),n!==-1)){var c=s[n];a=c.attachedListener;var u=c.cleanup;c=Hr(c.optionsOrUseCapture),m(this._fragmentFiber.child,!1,KM,t,a,c),s.splice(n,1),u!==null&&u()}};function KM(t,n,a,s){return M(t).removeEventListener(n,a,s),!1}function Hr(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function w0(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function D0(t,n,a,s){if(t.length===0)return-1;s=w0(s);for(var c=0;c<t.length;c++){var u=t[c];if(u.type===n&&u.listener===a&&w0(u.optionsOrUseCapture)===s)return c}return-1}fi.prototype.dispatchEvent=function(t){var n=x(this._fragmentFiber);if(n===null)return!0;n=M(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var s=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var c=0;c<a.length;c++){var u=a[c];s.addEventListener(u.type,u.attachedListener,Hr(u.optionsOrUseCapture))}if(n.appendChild(s),t=s.dispatchEvent(t),a)for(c=0;c<a.length;c++)u=a[c],s.removeEventListener(u.type,u.attachedListener,Hr(u.optionsOrUseCapture));return n.removeChild(s),t}return n.dispatchEvent(t)},fi.prototype.focus=function(t){m(this._fragmentFiber.child,!0,N0,t,void 0,void 0)};function N0(t,n){return t.tag===6?!1:(t=M(t),lE(t,n))}fi.prototype.focusLast=function(t){var n=[];m(this._fragmentFiber.child,!0,Xh,n,void 0,void 0);for(var a=n.length-1;0<=a&&!N0(n[a],t);a--);};function Xh(t,n){return n.push(t),!1}fi.prototype.blur=function(){var t=x(this._fragmentFiber);t!==null&&(t=M(t),t=al(t).activeElement,t!==null&&m(this._fragmentFiber.child,!1,QM,t,void 0,void 0))};function QM(t,n){return t.tag===6?!1:(t=M(t),t===n||t.contains(n)?(n.blur(),!0):!1)}fi.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),m(this._fragmentFiber.child,!1,JM,t,void 0,void 0)};function JM(t,n){return t.tag===6||(t=M(t),n.observe(t)),!1}fi.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),m(this._fragmentFiber.child,!1,$M,t,void 0,void 0);for(var a=n=0;a<Fi.length;a++){var s=Fi[a];s.fragmentInstance===this&&s.observer===t?t.unobserve(s.instance):Fi[n++]=s}Fi.length=n}};function $M(t,n){return t.tag===6||(t=M(t),n.unobserve(t)),!1}var Fi=[],qh=!1;function tE(t,n,a){Fi.push({fragmentInstance:t,observer:n,instance:a}),qh||(qh=!0,cE(function(){qh=!1;var s=Fi;Fi=[];for(var c=0;c<s.length;c++){var u=s[c];u.observer.unobserve(u.instance)}}))}fi.prototype.getClientRects=function(){var t=[];return m(this._fragmentFiber.child,!1,eE,t,void 0,void 0),t};function eE(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=M(t),n.push.apply(n,t.getClientRects());return!1}fi.prototype.getRootNode=function(t){var n=x(this._fragmentFiber);return n===null?this:M(n).getRootNode(t)},fi.prototype.compareDocumentPosition=function(t){var n=x(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];m(this._fragmentFiber.child,!1,Xh,a,void 0,void 0);var s=M(n);if(a.length===0){if(a=s,E(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var c=s=a.compareDocumentPosition(t);return a===t?c=Node.DOCUMENT_POSITION_CONTAINS:s&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=T(n)[1],a===null?c=Node.DOCUMENT_POSITION_PRECEDING:(t=M(a).compareDocumentPosition(t),c=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),c|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(a[0]),c=M(a[a.length-1]);var u=E(this._fragmentFiber)?n.parentElement:s;if(u==null)return Node.DOCUMENT_POSITION_DISCONNECTED;s=u.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,u=u.compareDocumentPosition(c)&Node.DOCUMENT_POSITION_CONTAINED_BY;var v=n.compareDocumentPosition(t),b=c.compareDocumentPosition(t),I=v&Node.DOCUMENT_POSITION_CONTAINED_BY||b&Node.DOCUMENT_POSITION_CONTAINED_BY;return b=s&&u&&v&Node.DOCUMENT_POSITION_FOLLOWING&&b&Node.DOCUMENT_POSITION_PRECEDING,n=s&&n===t||u&&c===t||I||b?Node.DOCUMENT_POSITION_CONTAINED_BY:!s&&n===t||!u&&c===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:v,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||nE(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function nE(t,n,a,s,c){var u=Zt(c);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!u)t:{for(;u!==null;){if(u.tag===7&&(u===n||u.alternate===n)){a=!0;break t}u=u.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(u===null)return u=c.ownerDocument,c===u||c===u.documentElement||c===u.body;t:{for(u=n,n=x(n);u!==null;){if(!(u.tag!==5&&u.tag!==3&&u.tag!==27||u!==n&&u.alternate!==n)){u=!0;break t}u=u.return}u=!1}return u}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!u)&&!(n=u===a)&&(n=F(a,u,j),n===null?n=!1:(m(n,!0,z,u,a),u=y,y=null,n=u!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!u)&&!(n=u===s)&&(n=F(s,u,j),n===null?n=!1:(m(n,!0,N,u,s),u=y,O=y=null,n=u!==null)),n):!1}function U0(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}fi.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(r(566));var n=[];m(this._fragmentFiber.child,!1,Xh,n,void 0,void 0);var a=t!==!1;if(n.length===0){var s=T(this._fragmentFiber);if(s=a?s[1]||s[0]||x(this._fragmentFiber):s[0]||s[1],s===null)return;if(s.tag===6){t=M(s),U0(t,a);return}if(s=M(s),s.nodeType!==9){if(s.nodeType===11){a="host"in s?s.host:null,a!==null&&a.scrollIntoView(t);return}s.scrollIntoView(t)}}for(s=a?n.length-1:0;s!==(a?-1:n.length);){var c=n[s];c.tag===6?(c=M(c),U0(c,a)):M(c).scrollIntoView(t),s+=a?-1:1}};function iE(t,n){return t=M(t),L0(t,n),!1}function L0(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function O0(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];t.addEventListener(c.type,c.attachedListener,Hr(c.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(u){for(var v=0,b=0;b<Fi.length;b++){var I=Fi[b];(I.fragmentInstance!==n||I.observer!==u||I.instance!==t)&&(Fi[v++]=I)}Fi.length=v,u.observe(t)}),L0(t,n))}function aE(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];t.removeEventListener(c.type,c.attachedListener,Hr(c.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(u){typeof u.rootMargin=="string"?tE(n,u,t):u.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function Yh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Yh(a),ye(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function sE(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[We])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var u=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=Ei(t.nextSibling),t===null)break}return null}function rE(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ei(t.nextSibling),t===null))return null;return t}function z0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ei(t.nextSibling),t===null))return null;return t}function Wh(t){return t.data==="$?"||t.data==="$~"}function Zh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function oE(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function Ei(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Kh=null;function P0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Ei(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function I0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function lE(t,n){function a(){s=!0}if(t.ownerDocument.activeElement===t)return!0;var s=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return s}function cE(t){E0(function(){E0(function(n){return t(n)})})}function F0(t,n,a){switch(n=al(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function B0(t,n,a){for(var s in a){var c=a[s];a.hasOwnProperty(s)&&c!=null&&He(t,n,s,null,FM,c)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Xi&&(t.onclick=null),ye(t)}function Qh(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ye(t)}var Ti=new Map,H0=new Set;function sl(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var Ma=Gt.d;Gt.d={f:uE,r:fE,D:hE,C:dE,L:pE,m:mE,X:_E,S:gE,M:vE};function uE(){var t=Ma.f(),n=Nc();return t||n}function fE(t){var n=Je(t);n!==null&&n.tag===5&&n.type==="form"?Vg(n):Ma.r(t)}var Gr=typeof document>"u"?null:document;function G0(t,n,a){var s=Gr;if(s&&typeof n=="string"&&n){var c=gi(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),H0.has(c)||(H0.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),zn(n,"link",t),Qe(n),s.head.appendChild(n)))}}function hE(t){Ma.D(t),G0("dns-prefetch",t,null)}function dE(t,n){Ma.C(t,n),G0("preconnect",t,n)}function pE(t,n,a){Ma.L(t,n,a);var s=Gr;if(s&&t&&n){var c='link[rel="preload"][as="'+gi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+gi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+gi(a.imageSizes)+'"]')):c+='[href="'+gi(t)+'"]';var u=c;switch(n){case"style":u=Vr(t);break;case"script":u=jr(t)}if(!(Ti.has(u)||(t=P({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Ti.set(u,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(rl(u))||n==="script"&&s.querySelector(ol(u))))){var v=s.createElement("link");zn(v,"link",t),n==="style"&&(v[Xe]=!0,v.onload=v.onerror=function(){In(v)}),Qe(v),s.head.appendChild(v)}}}function mE(t,n){Ma.m(t,n);var a=Gr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+gi(s)+'"][href="'+gi(t)+'"]',u=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=jr(t)}if(!Ti.has(u)&&(t=P({rel:"modulepreload",href:t},n),Ti.set(u,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ol(u)))return}s=a.createElement("link"),zn(s,"link",t),Qe(s),a.head.appendChild(s)}}}function gE(t,n,a){Ma.S(t,n,a);var s=Gr;if(s&&t){var c=En(s).hoistableStyles,u=Vr(t);n=n||"default";var v=c.get(u);if(!v){var b={loading:0,preload:null};if(v=s.querySelector(rl(u)))b.loading=5;else{t=P({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Ti.get(u))&&Jh(t,a);var I=v=s.createElement("link");Qe(I),zn(I,"link",t),I._p=new Promise(function(Q,st){I.onload=Q,I.onerror=st}),I.addEventListener("load",function(){b.loading|=1}),I.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Fc(v,n,s)}v={type:"stylesheet",instance:v,count:1,state:b},c.set(u,v)}}}function _E(t,n){Ma.X(t,n);var a=Gr;if(a&&t){var s=En(a).hoistableScripts,c=jr(t),u=s.get(c);u||(u=a.querySelector(ol(c)),u||(t=P({src:t,async:!0},n),(n=Ti.get(c))&&$h(t,n),u=a.createElement("script"),Qe(u),zn(u,"link",t),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},s.set(c,u))}}function vE(t,n){Ma.M(t,n);var a=Gr;if(a&&t){var s=En(a).hoistableScripts,c=jr(t),u=s.get(c);u||(u=a.querySelector(ol(c)),u||(t=P({src:t,async:!0,type:"module"},n),(n=Ti.get(c))&&$h(t,n),u=a.createElement("script"),Qe(u),zn(u,"link",t),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},s.set(c,u))}}function V0(t,n,a,s){var c=(c=L.current)?sl(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Vr(a.href),n=En(c).hoistableStyles,s=n.get(a),s||(s={type:"style",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Vr(a.href);var u=En(c).hoistableStyles,v=u.get(t);if(v||(c=c.ownerDocument||c,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,v),(u=c.querySelector(rl(t)))?u._p||(v.instance=u,v.state.loading=5):(u=Ti.get(t),u||(u={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ti.set(t,u)),xE(c,t,u,v.state))),n&&s===null)throw Error(r(528,""));return v}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=jr(a),n=En(c).hoistableScripts,s=n.get(a),s||(s={type:"script",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Vr(t){return'href="'+gi(t)+'"'}function rl(t){return'link[rel="stylesheet"]['+t+"]"}function j0(t){return P({},t,{"data-precedence":t.precedence,precedence:null})}function xE(t,n,a,s){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Xe]!==!0){s.loading=1;return}}else n=t.createElement("link"),n[Xe]=!0,n.onload=n.onerror=In.bind(null,n),zn(n,"link",a),Qe(n),t.head.appendChild(n);s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2})}function jr(t){return'[src="'+gi(t)+'"]'}function ol(t){return"script[async]"+t}function k0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+gi(a.href)+'"]');if(s)return n.instance=s,Qe(s),s;var c=P({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),Qe(s),zn(s,"style",c),Fc(s,a.precedence,t),n.instance=s;case"stylesheet":c=Vr(a.href);var u=t.querySelector(rl(c));if(u)return n.state.loading|=4,n.instance=u,Qe(u),u;s=j0(a),(c=Ti.get(c))&&Jh(s,c),u=(t.ownerDocument||t).createElement("link"),Qe(u);var v=u;return v._p=new Promise(function(b,I){v.onload=b,v.onerror=I}),zn(u,"link",s),n.state.loading|=4,Fc(u,a.precedence,t),n.instance=u;case"script":return u=jr(a.src),(c=t.querySelector(ol(u)))?(n.instance=c,Qe(c),c):(s=a,(c=Ti.get(u))&&(s=P({},a),$h(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),Qe(c),zn(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Fc(s,a.precedence,t));return n.instance}function Fc(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,u=c,v=0;v<s.length;v++){var b=s[v];if(b.dataset.precedence===n)u=b;else if(u!==c)break}u?u.parentNode.insertBefore(t,u.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Jh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function $h(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Bc=null;function X0(t,n,a){if(Bc===null){var s=new Map,c=Bc=new Map;c.set(a,s)}else c=Bc,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var u=a[c];if(!(u[We]||u[Nt]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var v=u.getAttribute(n)||"";v=t+v;var b=s.get(v);b?b.push(u):s.set(v,[u])}}return s}function td(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function yE(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function q0(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function Y0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function W0(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Z0(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=W0(n),t.suspenseyImages.push(n)),t=EE.bind(t),n.decode().then(t,t))}function SE(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=Vr(s.href),u=n.querySelector(rl(c));if(u){n=u._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=ll.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=u,Qe(u);return}u=n.ownerDocument||n,s=j0(s),(c=Ti.get(c))&&Jh(s,c),u=u.createElement("link"),Qe(u);var v=u;v._p=new Promise(function(b,I){v.onload=b,v.onerror=I}),zn(u,"link",s),a.instance=u}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=ll.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Hc=0;function ME(t,n){return t.stylesheets&&t.count===0&&Vc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&Vc(t,t.stylesheets),t.unsuspend){var u=t.unsuspend;t.unsuspend=null,u()}},6e4+n);0<t.imgBytes&&Hc===0&&(Hc=62500*HM());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Vc(t,t.stylesheets),t.unsuspend)){var u=t.unsuspend;t.unsuspend=null,u()}},(t.imgBytes>Hc?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function K0(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Vc(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function ll(){this.count--,K0(this)}function EE(){this.imgCount--,K0(this)}var Gc=null;function Vc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Gc=new Map,n.forEach(TE,t),Gc=null,ll.call(t))}function TE(t,n){if(!(n.state.loading&4)){var a=Gc.get(t);if(a)var s=a.get(null);else{a=new Map,Gc.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<c.length;u++){var v=c[u];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),s=v)}s&&a.set(null,s)}c=n.instance,v=c.getAttribute("data-precedence"),u=a.get(v)||s,u===s&&a.set(null,c),a.set(v,c),this.count++,s=ll.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),u?u.parentNode.insertBefore(c,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var kr={$$typeof:ht,Provider:null,Consumer:null,_currentValue:ae,_currentValue2:ae,_threadCount:0};function bE(t,n,a,s,c,u,v,b,I){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ys(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ys(0),this.hiddenUpdates=ys(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=u,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.transitionTypes=null,this.incompleteTransitions=new Map}function Q0(t,n,a,s,c,u,v,b,I,Q,st,mt){return t=new bE(t,n,a,v,I,Q,st,mt,b),n=1,u===!0&&(n|=24),u=Yn(3,null,null,n),t.current=u,u.stateNode=t,n=mf(),n.refCount++,t.pooledCache=n,n.refCount++,u.memoizedState={element:s,isDehydrated:a,cache:n},xf(u),t}function J0(t){return t?(t=gr,t):gr}function $0(t,n,a,s,c,u){c=J0(c),s.context===null?s.context=c:s.pendingContext=c,s=ka(n),s.payload={element:a},u=u===void 0?null:u,u!==null&&(s.callback=u),a=Xa(t,s,n),a!==null&&(Qn(a,t,n),Bo(a,t,n))}function tv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function ed(t,n){tv(t,n),(t=t.alternate)&&tv(t,n)}function ev(t){if(t.tag===13||t.tag===31){var n=Ts(t,67108864);n!==null&&Qn(n,t,67108864),ed(t,67108864)}}function nv(t){if(t.tag===13||t.tag===31){var n=ui();n=ot(n);var a=Ts(t,n);a!==null&&Qn(a,t,n),ed(t,n)}}var Xr=!0;function AE(t,n,a,s){var c=Tt.T;Tt.T=null;var u=Gt.p;try{Gt.p=2,nd(t,n,a,s)}finally{Gt.p=u,Tt.T=c}}function RE(t,n,a,s){var c=Tt.T;Tt.T=null;var u=Gt.p;try{Gt.p=8,nd(t,n,a,s)}finally{Gt.p=u,Tt.T=c}}function nd(t,n,a,s){if(Xr){var c=id(s);if(c===null)Ih(t,n,s,jc,a),av(t,s);else if(wE(c,t,n,a,s))s.stopPropagation();else if(av(t,s),n&4&&-1<CE.indexOf(t)){for(;c!==null;){var u=Je(c);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var v=ii(u.pendingLanes);if(v!==0){var b=u;for(b.pendingLanes|=2,b.entangledLanes|=2;v;){var I=1<<31-cn(v);b.entanglements[1]|=I,v&=~I}ea(u),(Pe&6)===0&&(Cc=k()+500,el(0))}}break;case 31:case 13:b=Ts(u,2),b!==null&&Qn(b,u,2),Nc(),ed(u,2)}if(u=id(s),u===null&&Ih(t,n,s,jc,a),u===c)break;c=u}c!==null&&s.stopPropagation()}else Ih(t,n,s,null,a)}}function id(t){return t=Gu(t),ad(t)}var jc=null;function ad(t){if(jc=null,t=Zt(t),t!==null){var n=f(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return jc=t,null}function iv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Et()){case rt:return 2;case gt:return 8;case Ct:case Lt:return 32;case ne:return 268435456;default:return 32}default:return 32}}var sd=!1,is=null,as=null,ss=null,cl=new Map,ul=new Map,rs=[],CE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function av(t,n){switch(t){case"focusin":case"focusout":is=null;break;case"dragenter":case"dragleave":as=null;break;case"mouseover":case"mouseout":ss=null;break;case"pointerover":case"pointerout":cl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ul.delete(n.pointerId)}}function fl(t,n,a,s,c,u){return t===null||t.nativeEvent!==u?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:u,targetContainers:[c]},n!==null&&(n=Je(n),n!==null&&ev(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function wE(t,n,a,s,c){switch(n){case"focusin":return is=fl(is,t,n,a,s,c),!0;case"dragenter":return as=fl(as,t,n,a,s,c),!0;case"mouseover":return ss=fl(ss,t,n,a,s,c),!0;case"pointerover":var u=c.pointerId;return cl.set(u,fl(cl.get(u)||null,t,n,a,s,c)),!0;case"gotpointercapture":return u=c.pointerId,ul.set(u,fl(ul.get(u)||null,t,n,a,s,c)),!0}return!1}function sv(t){var n=Zt(t.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,bt(t.priority,function(){nv(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,bt(t.priority,function(){nv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function kc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=id(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Hu=s,a.target.dispatchEvent(s),Hu=null}else return n=Je(a),n!==null&&ev(n),t.blockedOn=a,!1;n.shift()}return!0}function rv(t,n,a){kc(t)&&a.delete(n)}function DE(){sd=!1,is!==null&&kc(is)&&(is=null),as!==null&&kc(as)&&(as=null),ss!==null&&kc(ss)&&(ss=null),cl.forEach(rv),ul.forEach(rv)}function Xc(t,n){t.blockedOn===n&&(t.blockedOn=null,sd||(sd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,DE)))}var qc=null;function ov(t){qc!==t&&(qc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){qc===t&&(qc=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(ad(s||a)===null)continue;break}var u=Je(a);u!==null&&(t.splice(n,3),n-=3,Hf(u,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function qr(t){function n(I){return Xc(I,t)}is!==null&&Xc(is,t),as!==null&&Xc(as,t),ss!==null&&Xc(ss,t),cl.forEach(n),ul.forEach(n);for(var a=0;a<rs.length;a++){var s=rs[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<rs.length&&(a=rs[0],a.blockedOn===null);)sv(a),a.blockedOn===null&&rs.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],u=a[s+1],v=c[zt]||null;if(typeof u=="function")v||ov(a);else if(v){var b=null;if(u&&u.hasAttribute("formAction")){if(c=u,v=u[zt]||null)b=v.formAction;else if(ad(c)!==null)continue}else b=v.action;typeof b=="function"?a[s+1]=b:(a.splice(s,3),s-=3),ov(a)}}}function lv(){function t(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(v){return c=v})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function rd(t){this._internalRoot=t}Yc.prototype.render=rd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=ui();$0(a,s,t,n,null,null)},Yc.prototype.unmount=rd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;$0(t.current,2,null,t,null,null),Nc(),n[ie]=null}};function Yc(t){this._internalRoot=t}Yc.prototype.unstable_scheduleHydration=function(t){if(t){var n=J();t={blockedOn:null,target:t,priority:n};for(var a=0;a<rs.length&&n!==0&&n<rs[a].priority;a++);rs.splice(a,0,t),a===0&&sv(t)}};var cv=e.version;if(cv!=="19.3.0")throw Error(r(527,cv,"19.3.0"));Gt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=g(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var NE={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:Tt,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wc.isDisabled&&Wc.supportsFiber)try{xe=Wc.inject(NE),we=Wc}catch{}}return dl.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=Jg,u=$g,v=t_;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(u=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=Q0(t,1,!1,null,null,a,s,null,c,u,v,lv),t[ie]=n.current,Ph(t),new rd(n)},dl.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",u=Jg,v=$g,b=t_,I=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=Q0(t,1,!0,n,a??null,s,c,I,u,v,b,lv),n.context=J0(null),a=n.current,s=ui(),s=ot(s),c=ka(s),c.callback=null,Xa(a,c,s),a=s,n.current.lanes=a,oa(n,a),ea(n),t[ie]=n.current,Ph(t),new Yc(n)},dl.version="19.3.0",dl}var xv;function VE(){if(xv)return cd.exports;xv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),cd.exports=GE(),cd.exports}var jE=VE();/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kE=o=>o==null?void 0:o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function XE(o,e,i=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:kE(o),size:24,node:e,...i.length>0?{aliases:i}:{}}}/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qE=o=>{let e="",i=!1;for(const r of o){if(r==="-"||r==="_"||r<=" "){i=e.length>0;continue}e.length===0?e+=r.toLowerCase():e+=i?r.toUpperCase():r,i=!1}return e};/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YE=o=>{const e=qE(o);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=(...o)=>o.filter((e,i,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===i).join(" ").trim();/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vs={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function dd(o){return o!=null}function WE(o,e={}){var x,E;const i=e.attributeNames??{},r=T=>i[T]??T,l=o.size??o.width??Vs.width,f=o.size??o.height??Vs.height,h=((x=o.aliases)==null?void 0:x.filter(T=>typeof T=="string"&&T.trim()!=="").map(T=>`lucide-${T}`))??[],d=[...o.name?[`lucide-${o.name}`]:[],...h],p=((E=e.className)==null?void 0:E.split(" ").filter(Boolean))??[],g=e.includeDefaultClasses===!1?Yd(...p):Yd("lucide",...d,...p),_=e.absoluteStrokeWidth?Number(e.strokeWidth??Vs["stroke-width"])*Number(o.size??o.width??Vs.width)/Number(e.size??e.width??Vs.width):e.strokeWidth??Vs["stroke-width"];return["svg",{...Object.entries(Vs).reduce((T,[A,M])=>(T[r(A)]=M,T),{}),..."color"in e&&e.color&&{[r("stroke")]:e.color},..."size"in e&&dd(e.size)&&{[r("width")]:e.size,[r("height")]:e.size},..."width"in e&&dd(e.width)&&{[r("width")]:e.width},..."height"in e&&dd(e.height)&&{[r("height")]:e.height},[r("stroke-width")]:_,...g&&{[r("class")]:g},[r("viewBox")]:`0 0 ${l} ${f}`,...e.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},o.node.map(T=>{const[A,M,y]=T,O=e.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...M}:M;return y?[A,O,y]:[A,O]})]}/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function ZE(o,e={}){return WE(o,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KE=o=>{for(const e in o)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},QE=te.createContext({}),JE=()=>te.useContext(QE),$E=te.forwardRef(({color:o,size:e,width:i,height:r,strokeWidth:l,absoluteStrokeWidth:f,nonScalingStroke:h,className:d="",children:p,iconNode:g=[],icon:_={node:g,aliases:[],size:24},...m},x)=>{const{size:E=24,strokeWidth:T=2,absoluteStrokeWidth:A=!1,nonScalingStroke:M=!1,color:y="currentColor",className:O=""}=JE()??{},z=!!p||KE(m),[N,j,F=[]]=ZE(_,{color:o??y,width:i??e??E,height:r??e??E,strokeWidth:l??T,absoluteStrokeWidth:f??A,nonScalingStroke:h??M,className:Yd(O,d),hasA11yProp:z,attributes:m});return te.createElement(N,{ref:x,...j},[...F.map(([P,B])=>te.createElement(P,B)),...Array.isArray(p)?p:[p]])});/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Ne(o,e=[],i=[]){const r=typeof o=="string"?XE(o,e,i):o,l=te.forwardRef(({className:f,...h},d)=>te.createElement($E,{ref:d,icon:r,className:f,...h}));return r.name&&(l.displayName=YE(r.name)),l}/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dx={name:"activity",size:24,node:[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]};Dx.node;const t1=Ne(Dx);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]};Nx.node;const Ux=Ne(Nx);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx={name:"box",size:24,node:[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]};Lx.node;const Ox=Ne(Lx);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx={name:"camera",size:24,node:[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]};zx.node;const e1=Ne(zx);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px={name:"chart-column",size:24,node:[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],aliases:["bar-chart-3"]};Px.node;const n1=Ne(Px);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};Ix.node;const i1=Ne(Ix);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]};Fx.node;const a1=Ne(Fx);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx={name:"circle-alert",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aliases:["alert-circle"]};Bx.node;const s1=Ne(Bx);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};Hx.node;const yv=Ne(Hx);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx={name:"circle-x",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],aliases:["x-circle"]};Gx.node;const r1=Ne(Gx);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx={name:"clock",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]};Vx.node;const Sv=Ne(Vx);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx={name:"cloud-upload",size:24,node:[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]],aliases:["upload-cloud"]};jx.node;const o1=Ne(jx);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx={name:"compass",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}]]};kx.node;const Xx=Ne(kx);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx={name:"cpu",size:24,node:[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]};qx.node;const Yx=Ne(qx);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx={name:"download",size:24,node:[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]};Wx.node;const Zx=Ne(Wx);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx={name:"file-check-corner",size:24,node:[["path",{d:"M10.5 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v6",key:"g5mvt7"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m14 20 2 2 4-4",key:"15kota"}]],aliases:["file-check-2"]};Kx.node;const Ip=Ne(Kx);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx={name:"file-image",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["circle",{cx:"10",cy:"12",r:"2",key:"737tya"}],["path",{d:"m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22",key:"wt3hpn"}]]};Qx.node;const l1=Ne(Qx);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx={name:"file-text",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]};Jx.node;const c1=Ne(Jx);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x={name:"globe",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]};$x.node;const u1=Ne($x);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};ty.node;const Nu=Ne(ty);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey={name:"loader-circle",size:24,node:[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],aliases:["loader-2"]};ey.node;const ny=Ne(ey);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy={name:"maximize-2",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]]};iy.node;const f1=Ne(iy);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay={name:"menu",size:24,node:[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]};ay.node;const h1=Ne(ay);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy={name:"minimize-2",size:24,node:[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]]};sy.node;const d1=Ne(sy);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry={name:"mountain",size:24,node:[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}]]};ry.node;const Fp=Ne(ry);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy={name:"orbit",size:24,node:[["path",{d:"M20.341 6.484A10 10 0 0 1 10.266 21.85",key:"1enhxb"}],["path",{d:"M3.659 17.516A10 10 0 0 1 13.74 2.152",key:"1crzgf"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}]]};oy.node;const p1=Ne(oy);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly={name:"plane",size:24,node:[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]]};ly.node;const m1=Ne(ly);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy={name:"play",size:24,node:[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]};cy.node;const g1=Ne(cy);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy={name:"rotate-ccw",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]};uy.node;const _1=Ne(uy);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy={name:"settings",size:24,node:[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};fy.node;const hy=Ne(fy);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};dy.node;const py=Ne(dy);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my={name:"sliders-vertical",size:24,node:[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],aliases:["sliders"]};my.node;const Bp=Ne(my);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};gy.node;const Au=Ne(gy);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};_y.node;const vy=Ne(_y);function v1({activeNav:o="dashboard",onSelectNav:e,onOpenSettings:i,onRunDemo:r,isRunning:l=!1,systemStatus:f=null}){const[h,d]=te.useState(!1),[p,g]=te.useState(!1);te.useEffect(()=>{const x=()=>{d(window.scrollY>20)};return window.addEventListener("scroll",x),()=>window.removeEventListener("scroll",x)},[]);const _=[{id:"dashboard",label:"Home"},{id:"upload",label:"Platform"},{id:"da3",label:"DA3 Engine"},{id:"terrain",label:"3D Flythrough"},{id:"dsm-analysis",label:"DSM & GeoTIFF"},{id:"measurements",label:"Terrain Analysis"},{id:"gamus",label:"GAMUS Data"}],m=x=>{g(!1),e==null||e(x)};return S.jsxs("header",{className:`floating-nav-wrapper ${h?"nav-scrolled":""}`,children:[S.jsxs("div",{className:"floating-nav-pill",children:[S.jsxs("div",{className:"nav-logo-group",onClick:()=>m("dashboard"),children:[S.jsx("div",{className:"nav-geom-icon",children:S.jsxs("svg",{width:"26",height:"26",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[S.jsx("circle",{cx:"18",cy:"18",r:"4",fill:"#0f172a"}),S.jsx("circle",{cx:"18",cy:"8",r:"3.2",stroke:"#0f172a",strokeWidth:"2",fill:"white"}),S.jsx("circle",{cx:"26.66",cy:"13",r:"3.2",stroke:"#0f172a",strokeWidth:"2",fill:"white"}),S.jsx("circle",{cx:"26.66",cy:"23",r:"3.2",stroke:"#0f172a",strokeWidth:"2",fill:"white"}),S.jsx("circle",{cx:"18",cy:"28",r:"3.2",stroke:"#0f172a",strokeWidth:"2",fill:"white"}),S.jsx("circle",{cx:"9.34",cy:"23",r:"3.2",stroke:"#0f172a",strokeWidth:"2",fill:"white"}),S.jsx("circle",{cx:"9.34",cy:"13",r:"3.2",stroke:"#0f172a",strokeWidth:"2",fill:"white"}),S.jsx("line",{x1:"18",y1:"14",x2:"18",y2:"11.2",stroke:"#0f172a",strokeWidth:"1.5"}),S.jsx("line",{x1:"21.5",y1:"16",x2:"23.9",y2:"14.6",stroke:"#0f172a",strokeWidth:"1.5"}),S.jsx("line",{x1:"21.5",y1:"20",x2:"23.9",y2:"21.4",stroke:"#0f172a",strokeWidth:"1.5"}),S.jsx("line",{x1:"18",y1:"22",x2:"18",y2:"24.8",stroke:"#0f172a",strokeWidth:"1.5"}),S.jsx("line",{x1:"14.5",y1:"20",x2:"12.1",y2:"21.4",stroke:"#0f172a",strokeWidth:"1.5"}),S.jsx("line",{x1:"14.5",y1:"16",x2:"12.1",y2:"14.6",stroke:"#0f172a",strokeWidth:"1.5"})]})}),S.jsxs("div",{className:"nav-brand-title",children:[S.jsx("span",{className:"brand-name",children:"DepthWizard"}),S.jsx("span",{className:"brand-badge-ai",children:"DA3"})]})]}),S.jsx("nav",{className:"nav-center-links",children:_.map(x=>S.jsx("button",{className:`nav-link-btn ${o===x.id?"active":""}`,onClick:()=>m(x.id),children:x.label},x.id))}),S.jsxs("div",{className:"nav-actions-group",children:[S.jsx("button",{className:"nav-demo-pill-btn",onClick:r,disabled:l,title:"Execute End-to-End DA3 Pipeline with Sample Optical Imagery","aria-label":"Run Live Demo",children:l?S.jsxs(S.Fragment,{children:[S.jsx("span",{className:"nav-spinner"}),S.jsx("span",{className:"nav-demo-text",children:"Processing..."})]}):S.jsxs(S.Fragment,{children:[S.jsx(Au,{size:13,className:"text-blue-500"}),S.jsx("span",{className:"nav-demo-text",children:"Live Demo"}),S.jsx("span",{className:"nav-demo-text-short",children:"Demo"})]})}),S.jsx("button",{className:"nav-icon-btn",onClick:i,title:"System Diagnostics & Settings","aria-label":"Settings",children:S.jsx(hy,{size:16})}),S.jsx("button",{className:"nav-mobile-toggle",onClick:()=>g(!p),"aria-label":p?"Close Menu":"Open Menu",children:p?S.jsx(vy,{size:20}):S.jsx(h1,{size:20})})]})]}),p&&S.jsxs(S.Fragment,{children:[S.jsx("div",{className:"mobile-nav-backdrop",onClick:()=>g(!1)}),S.jsxs("div",{className:"mobile-nav-dropdown",children:[S.jsx("div",{className:"mobile-nav-links-list",children:_.map(x=>S.jsxs("button",{className:`mobile-nav-link ${o===x.id?"active":""}`,onClick:()=>m(x.id),children:[S.jsx("span",{children:x.label}),S.jsx(a1,{size:14})]},x.id))}),S.jsx("div",{className:"mobile-nav-actions",children:S.jsxs("button",{className:"mobile-demo-btn",onClick:()=>{g(!1),r==null||r()},disabled:l,children:[S.jsx(Au,{size:15}),S.jsx("span",{children:l?"Running DA3 Demo...":"Run Live DA3 Demo"})]})})]})]})]})}function x1({onUploadClick:o,onDemoClick:e,onSelectFeature:i,activeFeature:r="upload",isRunning:l=!1}){const f=[{id:"upload",icon:Ox,label:"Single-View Optical"},{id:"da3",icon:t1,label:"Relative Depth (DA3)"},{id:"dsm-analysis",icon:Fp,label:"Metric DSM & GeoTIFF"},{id:"terrain",icon:Xx,label:"3D WebGL Flythrough"},{id:"measurements",icon:Nu,label:"Slope & Height Profile"}];return S.jsxs("section",{className:"luminous-hero-container",children:[S.jsx("div",{className:"hero-circuit-bg","aria-hidden":"true",children:S.jsxs("svg",{className:"circuit-lines-svg",width:"100%",height:"100%",viewBox:"0 0 1440 600",fill:"none",preserveAspectRatio:"none",children:[S.jsx("path",{d:"M 0 180 L 180 180 L 220 220 L 220 380 L 260 420 L 340 420",stroke:"rgba(255, 255, 255, 0.45)",strokeWidth:"1.2",strokeDasharray:"3 3"}),S.jsx("path",{d:"M 0 320 L 120 320 L 160 360 L 160 480",stroke:"rgba(255, 255, 255, 0.35)",strokeWidth:"1"}),S.jsx("circle",{cx:"220",cy:"220",r:"3",fill:"rgba(255, 255, 255, 0.7)"}),S.jsx("circle",{cx:"260",cy:"420",r:"3",fill:"rgba(255, 255, 255, 0.7)"}),S.jsx("path",{d:"M 1440 180 L 1260 180 L 1220 220 L 1220 380 L 1180 420 L 1100 420",stroke:"rgba(255, 255, 255, 0.45)",strokeWidth:"1.2",strokeDasharray:"3 3"}),S.jsx("path",{d:"M 1440 320 L 1320 320 L 1280 360 L 1280 480",stroke:"rgba(255, 255, 255, 0.35)",strokeWidth:"1"}),S.jsx("circle",{cx:"1220",cy:"220",r:"3",fill:"rgba(255, 255, 255, 0.7)"}),S.jsx("circle",{cx:"1180",cy:"420",r:"3",fill:"rgba(255, 255, 255, 0.7)"}),S.jsx("line",{x1:"720",y1:"50",x2:"720",y2:"70",stroke:"rgba(255, 255, 255, 0.3)",strokeWidth:"1"}),S.jsx("line",{x1:"710",y1:"60",x2:"730",y2:"60",stroke:"rgba(255, 255, 255, 0.3)",strokeWidth:"1"})]})}),S.jsxs("div",{className:"hero-inner-content",children:[S.jsxs("div",{className:"hero-pill-badge",children:[S.jsx("span",{className:"badge-sparkle",children:"✦"}),S.jsx("span",{className:"badge-text",children:"THE AGENTIC 3D TERRAIN & ELEVATION PLATFORM"})]}),S.jsxs("h1",{className:"hero-editorial-title",children:["Reconstruct 3D elevation models that ",S.jsx("span",{className:"title-serif-italic",children:"convert"})," with AI intelligence"]}),S.jsx("p",{className:"hero-editorial-subtitle",children:"A fast, consistent, and high-precision monocular depth & DSM terrain elevation AI platform powered by Depth Anything 3."}),S.jsxs("div",{className:"hero-cta-buttons-row",children:[S.jsx("button",{className:"hero-btn-dark-glow",onClick:e,disabled:l,children:l?S.jsxs(S.Fragment,{children:[S.jsx("span",{className:"btn-spinner"}),S.jsx("span",{children:"Running DA3 Inference..."})]}):S.jsxs(S.Fragment,{children:[S.jsx("span",{children:"Start Depth Estimation"}),S.jsx(Ux,{size:16})]})}),S.jsx("button",{className:"hero-btn-white-pill",onClick:o,children:S.jsx("span",{children:"Upload Optical Imagery"})})]}),S.jsxs("div",{className:"hero-bottom-dock-wrapper",children:[S.jsx("div",{className:"dock-connector-line","aria-hidden":"true"}),S.jsx("div",{className:"hero-bottom-dock",children:f.map(h=>{const d=h.icon,p=r===h.id;return S.jsxs("button",{className:`dock-pill-chip ${p?"active":""}`,onClick:()=>i==null?void 0:i(h.id),children:[S.jsx(d,{size:14,className:"dock-chip-icon"}),S.jsx("span",{children:h.label})]},h.id)})})]})]})]})}function y1({pipelineResult:o=null,dsmMesh:e=null,selectedMeasurement:i=null}){var O,z;const r=o!==null,l=(O=o==null?void 0:o.stages)==null?void 0:O.relative_depth,f=r?"Generated":"Standby",h=l?`[${l.min_depth}, ${l.max_depth}]`:"Standby",d=l?"Relative Ray Depth Range":"Depth Anything 3",p=(z=o==null?void 0:o.stages)==null?void 0:z.dsm,g=r||e?"Ready":"Standby",_=p?`${p.minimum_elevation.toFixed(1)}m – ${p.maximum_elevation.toFixed(1)}m`:e?`${e.min_height.toFixed(1)}m – ${e.max_height.toFixed(1)}m`:"outputs/dsm.tif",m=p?`Mean: ${p.mean_elevation.toFixed(1)}m`:"GeoTIFF Surface Raster",x=i&&i.height!==void 0,E=x?`${i.height.toFixed(2)} m`:e?`${(e.max_height-e.min_height).toFixed(2)} m`:"--",T=x?"Selected Point Above Ground":"Total Relief Span",A=i&&i.slope!==void 0,M=A?`${i.slope.toFixed(1)}°`:"--";let y="Click terrain to calculate";if(A){const N=i.slope;N<5?y="Flat Surface (<5°)":N<15?y="Gentle Gradient (5-15°)":N<30?y="Moderate Incline (15-30°)":y="Steep Topography (>30°)"}return S.jsxs("section",{className:"analytics-cards-grid",children:[S.jsxs("div",{className:"analytics-card",children:[S.jsxs("div",{className:"card-top-row",children:[S.jsx("div",{className:"card-icon-wrapper cyan",children:S.jsx(Nu,{size:20})}),S.jsxs("div",{className:`card-status-pill ${r?"success":"neutral"}`,children:[r?S.jsx(yv,{size:12}):S.jsx(Sv,{size:12}),S.jsx("span",{children:f})]})]}),S.jsxs("div",{className:"card-body",children:[S.jsx("span",{className:"card-metric-title",children:"RELATIVE DEPTH"}),S.jsx("div",{className:"card-metric-number font-mono",children:h}),S.jsx("span",{className:"card-metric-sub",children:d})]})]}),S.jsxs("div",{className:"analytics-card",children:[S.jsxs("div",{className:"card-top-row",children:[S.jsx("div",{className:"card-icon-wrapper emerald",children:S.jsx(Ip,{size:20})}),S.jsxs("div",{className:`card-status-pill ${r||e?"success":"neutral"}`,children:[r||e?S.jsx(yv,{size:12}):S.jsx(Sv,{size:12}),S.jsx("span",{children:g})]})]}),S.jsxs("div",{className:"card-body",children:[S.jsx("span",{className:"card-metric-title",children:"METRIC DSM"}),S.jsx("div",{className:"card-metric-number font-mono",children:_}),S.jsx("span",{className:"card-metric-sub",children:m})]})]}),S.jsxs("div",{className:"analytics-card",children:[S.jsxs("div",{className:"card-top-row",children:[S.jsx("div",{className:"card-icon-wrapper blue",children:S.jsx(Fp,{size:20})}),S.jsx("div",{className:`card-status-pill ${x?"active":"neutral"}`,children:S.jsx("span",{children:x?"Point Sampled":"Relief Max"})})]}),S.jsxs("div",{className:"card-body",children:[S.jsx("span",{className:"card-metric-title",children:"TERRAIN HEIGHT"}),S.jsx("div",{className:"card-metric-number font-mono",children:E}),S.jsx("span",{className:"card-metric-sub",children:T})]})]}),S.jsxs("div",{className:"analytics-card",children:[S.jsxs("div",{className:"card-top-row",children:[S.jsx("div",{className:"card-icon-wrapper amber",children:S.jsx(Xx,{size:20})}),S.jsx("div",{className:`card-status-pill ${A?"active":"neutral"}`,children:S.jsx("span",{children:A?"Calculated":"Standby"})})]}),S.jsxs("div",{className:"card-body",children:[S.jsx("span",{className:"card-metric-title",children:"SLOPE"}),S.jsx("div",{className:"card-metric-number font-mono",children:M}),S.jsx("span",{className:"card-metric-sub",children:y})]})]})]})}function S1({pipelineState:o="idle",pipelineResult:e=null}){var f,h,d,p,g;const i=o==="running",r=o==="completed",l=[{id:"rgb",title:"RGB INPUT",label:"Optical Satellite",icon:e1,detail:(f=e==null?void 0:e.stages)!=null&&f.rgb_ingestion?`${e.stages.rgb_ingestion.dimensions.width}×${e.stages.rgb_ingestion.dimensions.height}`:"PNG / JPG / GeoTIFF"},{id:"ai",title:"DEPTH AI",label:"Depth Anything 3",icon:Au,detail:"ViT-S Monocular Backbone"},{id:"depth",title:"RELATIVE DEPTH",label:"Inverse Depth",icon:Nu,detail:(h=e==null?void 0:e.stages)!=null&&h.relative_depth?`[${e.stages.relative_depth.min_depth}, ${e.stages.relative_depth.max_depth}]`:"Unitless D"},{id:"calib",title:"CALIBRATION",label:"Affine Fit",icon:Bp,detail:(d=e==null?void 0:e.stages)!=null&&d.metric_calibration?`H = a·D + b (RMSE: ${e.stages.metric_calibration.rmse_meters.toFixed(1)}m)`:"Metric Ground Datum"},{id:"dsm",title:"METRIC DSM",label:"GeoTIFF Raster",icon:Ip,detail:(p=e==null?void 0:e.stages)!=null&&p.dsm?`${e.stages.dsm.minimum_elevation.toFixed(1)}m to ${e.stages.dsm.maximum_elevation.toFixed(1)}m`:"EPSG:3857 Grid"},{id:"mesh",title:"3D MESH",label:"WebGL Surface",icon:Ox,detail:(g=e==null?void 0:e.stages)!=null&&g.terrain_3d?`${e.stages.terrain_3d.vertex_count.toLocaleString()} Vertices`:"32,258 Triangles"}];return S.jsxs("section",{className:"horizontal-pipeline-section","aria-label":"End-to-End Processing Pipeline",children:[S.jsxs("div",{className:"pipeline-header-bar",children:[S.jsx("span",{className:"pipeline-title-label",children:"PROCESSING PIPELINE"}),S.jsx("span",{className:"pipeline-status-text",children:i?"Pipeline Running...":r?`✓ Finished in ${e==null?void 0:e.total_execution_seconds}s`:"Ready for Ingestion"})]}),S.jsx("div",{className:"pipeline-stages-container",children:l.map((_,m)=>{const x=_.icon,E=r,T=i;return S.jsxs(wx.Fragment,{children:[S.jsxs("div",{className:`pipeline-stage-item ${E?"completed":T?"active":""}`,children:[S.jsx("div",{className:"stage-icon-circle",children:E?S.jsx(i1,{size:16,className:"text-emerald"}):T?S.jsx(ny,{size:16,className:"spin-icon"}):S.jsx(x,{size:16})}),S.jsxs("div",{className:"stage-text-block",children:[S.jsx("span",{className:"stage-step-title",children:_.title}),S.jsx("span",{className:"stage-step-label",children:_.label}),S.jsx("span",{className:"stage-step-detail font-mono",children:_.detail})]})]}),m<l.length-1&&S.jsx("div",{className:`pipeline-connector-line ${E?"completed":T?"active":""}`,children:S.jsx(Ux,{size:14,className:"connector-arrow"})})]},_.id)})})]})}function M1({selectedFile:o=null,fileName:e="sample_gamus_optical.png",fileFormat:i="PNG",filePreviewUrl:r=null,fileResolution:l="1024 × 1024 px",pipelineState:f="idle",pipelineResult:h=null,pipelineError:d=null,onFileSelect:p=null,onLoadSample:g=null,onRunPipeline:_=null}){var j;const[m,x]=te.useState(!1),E=te.useRef(null),T=f==="running",A=f==="completed",M=F=>{F.preventDefault(),x(!0)},y=()=>{x(!1)},O=F=>{var B;F.preventDefault(),x(!1);const P=(B=F.dataTransfer.files)==null?void 0:B[0];P&&p&&p(P)},z=F=>{var B;const P=(B=F.target.files)==null?void 0:B[0];P&&p&&p(P)},N=[{id:"rgb",title:"RGB IMAGE",desc:"Optical Ingestion"},{id:"depth",title:"DEPTH ESTIMATION",desc:"Depth Anything 3"},{id:"calib",title:"SCALE CALIBRATION",desc:"H = a·D + b"},{id:"dsm",title:"METRIC DSM",desc:"GeoTIFF Surface"},{id:"terrain",title:"3D TERRAIN",desc:"WebGL Heightfield"}];return S.jsxs("section",{className:"image-processing-card",id:"upload-section",children:[S.jsxs("div",{className:"card-header-bar",children:[S.jsxs("div",{className:"card-title-group",children:[S.jsx(l1,{className:"card-header-icon",size:20}),S.jsxs("div",{children:[S.jsx("h3",{className:"card-heading-text",children:"Upload Remote-Sensing Image"}),S.jsx("p",{className:"card-subheading-text",children:"Accepts optical satellite or aerial imagery (PNG, JPG, GeoTIFF) for single-view 3D elevation extraction."})]})]}),S.jsx("div",{className:"card-header-actions",children:S.jsxs("button",{className:"btn-sample-load",onClick:g,disabled:T,title:"Load representative GAMUS satellite optical image",children:[S.jsx(Au,{size:14}),S.jsx("span",{children:"Use Sample Image (DC_02_26)"})]})})]}),S.jsxs("div",{className:"upload-and-info-grid",children:[S.jsxs("div",{className:`dropzone-area ${m?"drag-over":""}`,onDragOver:M,onDragLeave:y,onDrop:O,onClick:()=>{var F;return(F=E.current)==null?void 0:F.click()},children:[S.jsx("input",{ref:E,type:"file",accept:".png,.jpg,.jpeg,.tif,.tiff",onChange:z,style:{display:"none"}}),S.jsxs("div",{className:"dropzone-inner-content",children:[S.jsx("div",{className:"dropzone-icon-box",children:S.jsx(o1,{size:32})}),S.jsxs("p",{className:"dropzone-prompt",children:[S.jsx("strong",{children:"Click to upload"})," or drag and drop optical image"]}),S.jsxs("span",{className:"dropzone-supported",children:["Supports: ",S.jsx("strong",{children:"PNG"}),", ",S.jsx("strong",{children:"JPG"}),", ",S.jsx("strong",{children:"GeoTIFF (.tif, .tiff)"})]})]})]}),S.jsxs("div",{className:"upload-metadata-panel",children:[S.jsxs("div",{className:"meta-card-preview-row",children:[r?S.jsx("div",{className:"preview-image-box",children:S.jsx("img",{src:r,alt:"Satellite Input Preview",className:"preview-thumbnail"})}):S.jsxs("div",{className:"preview-placeholder-box",children:[S.jsx(c1,{size:28}),S.jsx("span",{children:"GeoTIFF / Raster"})]}),S.jsxs("div",{className:"metadata-text-column",children:[S.jsxs("div",{className:"meta-field",children:[S.jsx("span",{className:"meta-field-label",children:"File Name:"}),S.jsx("span",{className:"meta-field-value font-mono",children:e})]}),S.jsxs("div",{className:"meta-field",children:[S.jsx("span",{className:"meta-field-label",children:"Resolution:"}),S.jsx("span",{className:"meta-field-value font-mono",children:(j=h==null?void 0:h.stages)!=null&&j.rgb_ingestion?`${h.stages.rgb_ingestion.dimensions.width} × ${h.stages.rgb_ingestion.dimensions.height} px`:l})]}),S.jsxs("div",{className:"meta-field",children:[S.jsx("span",{className:"meta-field-label",children:"File Type:"}),S.jsx("span",{className:"format-tag",children:i})]}),S.jsxs("div",{className:"meta-field",children:[S.jsx("span",{className:"meta-field-label",children:"Processing Status:"}),S.jsx("span",{className:`status-pill-small ${T?"running":A?"completed":"ready"}`,children:T?"Processing...":A?"Completed":"Ready"})]})]})]}),S.jsxs("div",{className:"vertical-stepper-box",children:[S.jsx("div",{className:"stepper-title",children:"PIPELINE STAGES"}),S.jsx("div",{className:"stepper-steps-flow",children:N.map((F,P)=>S.jsxs(wx.Fragment,{children:[S.jsxs("div",{className:`step-badge-node ${A?"done":T?"active":""}`,children:[S.jsx("span",{className:"step-node-dot"}),S.jsx("span",{className:"step-node-text",children:F.title})]}),P<N.length-1&&S.jsx("span",{className:"step-node-arrow",children:"↓"})]},F.id))})]}),S.jsxs("div",{className:"action-button-row",children:[S.jsx("button",{className:`btn-primary-execute ${T?"running":""}`,onClick:_,disabled:T,children:T?S.jsxs(S.Fragment,{children:[S.jsx(ny,{size:16,className:"spin-icon"}),S.jsx("span",{children:"Processing Depth & DSM..."})]}):S.jsxs(S.Fragment,{children:[S.jsx(g1,{size:16,fill:"currentColor"}),S.jsx("span",{children:"▶ Run End-to-End Pipeline"})]})}),A&&S.jsxs("span",{className:"execution-time-label",children:["✓ Executed in ",h==null?void 0:h.total_execution_seconds,"s"]}),d&&S.jsxs("span",{className:"execution-error-label",children:[S.jsx(s1,{size:14})," ",d]})]})]})]})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hp="174",co={ROTATE:0,DOLLY:1,PAN:2},oo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},E1=0,Mv=1,T1=2,xy=1,yy=2,Ca=3,vs=0,ei=1,ia=2,gs=0,uo=1,Ev=2,Tv=3,bv=4,b1=5,Qs=100,A1=101,R1=102,C1=103,w1=104,D1=200,N1=201,U1=202,L1=203,Wd=204,Zd=205,O1=206,z1=207,P1=208,I1=209,F1=210,B1=211,H1=212,G1=213,V1=214,Kd=0,Qd=1,Jd=2,po=3,$d=4,tp=5,ep=6,np=7,Sy=0,j1=1,k1=2,_s=0,X1=1,q1=2,Y1=3,W1=4,Z1=5,K1=6,Q1=7,My=300,mo=301,go=302,ip=303,ap=304,Uu=306,sp=1e3,wa=1001,rp=1002,ki=1003,J1=1004,Zc=1005,ti=1006,pd=1007,$s=1008,La=1009,Ey=1010,Ty=1011,Ml=1012,Gp=1013,tr=1014,Da=1015,Tl=1016,Vp=1017,jp=1018,_o=1020,by=35902,Ay=1021,Ry=1022,ji=1023,Cy=1024,wy=1025,fo=1026,vo=1027,Dy=1028,kp=1029,Ny=1030,Xp=1031,qp=1033,xu=33776,yu=33777,Su=33778,Mu=33779,op=35840,lp=35841,cp=35842,up=35843,fp=36196,hp=37492,dp=37496,pp=37808,mp=37809,gp=37810,_p=37811,vp=37812,xp=37813,yp=37814,Sp=37815,Mp=37816,Ep=37817,Tp=37818,bp=37819,Ap=37820,Rp=37821,Eu=36492,Cp=36494,wp=36495,Uy=36283,Dp=36284,Np=36285,Up=36286,$1=3200,tT=3201,Ly=0,eT=1,ms="",Ai="srgb",xo="srgb-linear",Ru="linear",Ve="srgb",Yr=7680,Av=519,nT=512,iT=513,aT=514,Oy=515,sT=516,rT=517,oT=518,lT=519,Rv=35044,Cv="300 es",Na=2e3,Cu=2001;class ir{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const f=l.indexOf(i);f!==-1&&l.splice(f,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let f=0,h=l.length;f<h;f++)l[f].call(this,e);e.target=null}}}const Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tu=Math.PI/180,Lp=180/Math.PI;function bl(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Bn[o&255]+Bn[o>>8&255]+Bn[o>>16&255]+Bn[o>>24&255]+"-"+Bn[e&255]+Bn[e>>8&255]+"-"+Bn[e>>16&15|64]+Bn[e>>24&255]+"-"+Bn[i&63|128]+Bn[i>>8&255]+"-"+Bn[i>>16&255]+Bn[i>>24&255]+Bn[r&255]+Bn[r>>8&255]+Bn[r>>16&255]+Bn[r>>24&255]).toLowerCase()}function Ee(o,e,i){return Math.max(e,Math.min(i,o))}function cT(o,e){return(o%e+e)%e}function md(o,e,i){return(1-i)*o+i*e}function pl(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Jn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const uT={DEG2RAD:Tu};class ue{constructor(e=0,i=0){ue.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Ee(this.x,e.x,i.x),this.y=Ee(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Ee(this.x,e,i),this.y=Ee(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ee(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),f=this.x-e.x,h=this.y-e.y;return this.x=f*r-h*l+e.x,this.y=f*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pe{constructor(e,i,r,l,f,h,d,p,g){pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,f,h,d,p,g)}set(e,i,r,l,f,h,d,p,g){const _=this.elements;return _[0]=e,_[1]=l,_[2]=d,_[3]=i,_[4]=f,_[5]=p,_[6]=r,_[7]=h,_[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,f=this.elements,h=r[0],d=r[3],p=r[6],g=r[1],_=r[4],m=r[7],x=r[2],E=r[5],T=r[8],A=l[0],M=l[3],y=l[6],O=l[1],z=l[4],N=l[7],j=l[2],F=l[5],P=l[8];return f[0]=h*A+d*O+p*j,f[3]=h*M+d*z+p*F,f[6]=h*y+d*N+p*P,f[1]=g*A+_*O+m*j,f[4]=g*M+_*z+m*F,f[7]=g*y+_*N+m*P,f[2]=x*A+E*O+T*j,f[5]=x*M+E*z+T*F,f[8]=x*y+E*N+T*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],h=e[4],d=e[5],p=e[6],g=e[7],_=e[8];return i*h*_-i*d*g-r*f*_+r*d*p+l*f*g-l*h*p}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],h=e[4],d=e[5],p=e[6],g=e[7],_=e[8],m=_*h-d*g,x=d*p-_*f,E=g*f-h*p,T=i*m+r*x+l*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=m*A,e[1]=(l*g-_*r)*A,e[2]=(d*r-l*h)*A,e[3]=x*A,e[4]=(_*i-l*p)*A,e[5]=(l*f-d*i)*A,e[6]=E*A,e[7]=(r*p-g*i)*A,e[8]=(h*i-r*f)*A,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,f,h,d){const p=Math.cos(f),g=Math.sin(f);return this.set(r*p,r*g,-r*(p*h+g*d)+h+e,-l*g,l*p,-l*(-g*h+p*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(gd.makeScale(e,i)),this}rotate(e){return this.premultiply(gd.makeRotation(-e)),this}translate(e,i){return this.premultiply(gd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gd=new pe;function zy(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function El(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function fT(){const o=El("canvas");return o.style.display="block",o}const wv={};function Zs(o){o in wv||(wv[o]=!0,console.warn(o))}function hT(o,e,i){return new Promise(function(r,l){function f(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:r()}}setTimeout(f,i)})}function dT(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function pT(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Dv=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nv=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mT(){const o={enabled:!0,workingColorSpace:xo,spaces:{},convert:function(l,f,h){return this.enabled===!1||f===h||!f||!h||(this.spaces[f].transfer===Ve&&(l.r=Ua(l.r),l.g=Ua(l.g),l.b=Ua(l.b)),this.spaces[f].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[f].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ve&&(l.r=ho(l.r),l.g=ho(l.g),l.b=ho(l.b))),l},fromWorkingColorSpace:function(l,f){return this.convert(l,this.workingColorSpace,f)},toWorkingColorSpace:function(l,f){return this.convert(l,f,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ms?Ru:this.spaces[l].transfer},getLuminanceCoefficients:function(l,f=this.workingColorSpace){return l.fromArray(this.spaces[f].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,f,h){return l.copy(this.spaces[f].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[xo]:{primaries:e,whitePoint:r,transfer:Ru,toXYZ:Dv,fromXYZ:Nv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ai},outputColorSpaceConfig:{drawingBufferColorSpace:Ai}},[Ai]:{primaries:e,whitePoint:r,transfer:Ve,toXYZ:Dv,fromXYZ:Nv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ai}}}),o}const ze=mT();function Ua(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ho(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Wr;class gT{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Wr===void 0&&(Wr=El("canvas")),Wr.width=e.width,Wr.height=e.height;const r=Wr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Wr}return i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=El("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),f=l.data;for(let h=0;h<f.length;h++)f[h]=Ua(f[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Ua(i[r]/255)*255):i[r]=Ua(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _T=0;class Yp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_T++}),this.uuid=bl(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let f;if(Array.isArray(l)){f=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?f.push(_d(l[h].image)):f.push(_d(l[h]))}else f=_d(l);r.url=f}return i||(e.images[this.uuid]=r),r}}function _d(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?gT.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vT=0;class Gn extends ir{constructor(e=Gn.DEFAULT_IMAGE,i=Gn.DEFAULT_MAPPING,r=wa,l=wa,f=ti,h=$s,d=ji,p=La,g=Gn.DEFAULT_ANISOTROPY,_=ms){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vT++}),this.uuid=bl(),this.name="",this.source=new Yp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=f,this.minFilter=h,this.anisotropy=g,this.format=d,this.internalFormat=null,this.type=p,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==My)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sp:e.x=e.x-Math.floor(e.x);break;case wa:e.x=e.x<0?0:1;break;case rp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sp:e.y=e.y-Math.floor(e.y);break;case wa:e.y=e.y<0?0:1;break;case rp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=My;Gn.DEFAULT_ANISOTROPY=1;class rn{constructor(e=0,i=0,r=0,l=1){rn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,f=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*f,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*f,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*f,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*f,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,f;const p=e.elements,g=p[0],_=p[4],m=p[8],x=p[1],E=p[5],T=p[9],A=p[2],M=p[6],y=p[10];if(Math.abs(_-x)<.01&&Math.abs(m-A)<.01&&Math.abs(T-M)<.01){if(Math.abs(_+x)<.1&&Math.abs(m+A)<.1&&Math.abs(T+M)<.1&&Math.abs(g+E+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const z=(g+1)/2,N=(E+1)/2,j=(y+1)/2,F=(_+x)/4,P=(m+A)/4,B=(T+M)/4;return z>N&&z>j?z<.01?(r=0,l=.707106781,f=.707106781):(r=Math.sqrt(z),l=F/r,f=P/r):N>j?N<.01?(r=.707106781,l=0,f=.707106781):(l=Math.sqrt(N),r=F/l,f=B/l):j<.01?(r=.707106781,l=.707106781,f=0):(f=Math.sqrt(j),r=P/f,l=B/f),this.set(r,l,f,i),this}let O=Math.sqrt((M-T)*(M-T)+(m-A)*(m-A)+(x-_)*(x-_));return Math.abs(O)<.001&&(O=1),this.x=(M-T)/O,this.y=(m-A)/O,this.z=(x-_)/O,this.w=Math.acos((g+E+y-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Ee(this.x,e.x,i.x),this.y=Ee(this.y,e.y,i.y),this.z=Ee(this.z,e.z,i.z),this.w=Ee(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Ee(this.x,e,i),this.y=Ee(this.y,e,i),this.z=Ee(this.z,e,i),this.w=Ee(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xT extends ir{constructor(e=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new rn(0,0,e,i),this.scissorTest=!1,this.viewport=new rn(0,0,e,i);const l={width:e,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const f=new Gn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);f.flipY=!1,f.generateMipmaps=r.generateMipmaps,f.internalFormat=r.internalFormat,this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=f.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,f=this.textures.length;l<f;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Yp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class er extends xT{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Py extends Gn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=ki,this.minFilter=ki,this.wrapR=wa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yT extends Gn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=ki,this.minFilter=ki,this.wrapR=wa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nr{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,f,h,d){let p=r[l+0],g=r[l+1],_=r[l+2],m=r[l+3];const x=f[h+0],E=f[h+1],T=f[h+2],A=f[h+3];if(d===0){e[i+0]=p,e[i+1]=g,e[i+2]=_,e[i+3]=m;return}if(d===1){e[i+0]=x,e[i+1]=E,e[i+2]=T,e[i+3]=A;return}if(m!==A||p!==x||g!==E||_!==T){let M=1-d;const y=p*x+g*E+_*T+m*A,O=y>=0?1:-1,z=1-y*y;if(z>Number.EPSILON){const j=Math.sqrt(z),F=Math.atan2(j,y*O);M=Math.sin(M*F)/j,d=Math.sin(d*F)/j}const N=d*O;if(p=p*M+x*N,g=g*M+E*N,_=_*M+T*N,m=m*M+A*N,M===1-d){const j=1/Math.sqrt(p*p+g*g+_*_+m*m);p*=j,g*=j,_*=j,m*=j}}e[i]=p,e[i+1]=g,e[i+2]=_,e[i+3]=m}static multiplyQuaternionsFlat(e,i,r,l,f,h){const d=r[l],p=r[l+1],g=r[l+2],_=r[l+3],m=f[h],x=f[h+1],E=f[h+2],T=f[h+3];return e[i]=d*T+_*m+p*E-g*x,e[i+1]=p*T+_*x+g*m-d*E,e[i+2]=g*T+_*E+d*x-p*m,e[i+3]=_*T-d*m-p*x-g*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,f=e._z,h=e._order,d=Math.cos,p=Math.sin,g=d(r/2),_=d(l/2),m=d(f/2),x=p(r/2),E=p(l/2),T=p(f/2);switch(h){case"XYZ":this._x=x*_*m+g*E*T,this._y=g*E*m-x*_*T,this._z=g*_*T+x*E*m,this._w=g*_*m-x*E*T;break;case"YXZ":this._x=x*_*m+g*E*T,this._y=g*E*m-x*_*T,this._z=g*_*T-x*E*m,this._w=g*_*m+x*E*T;break;case"ZXY":this._x=x*_*m-g*E*T,this._y=g*E*m+x*_*T,this._z=g*_*T+x*E*m,this._w=g*_*m-x*E*T;break;case"ZYX":this._x=x*_*m-g*E*T,this._y=g*E*m+x*_*T,this._z=g*_*T-x*E*m,this._w=g*_*m+x*E*T;break;case"YZX":this._x=x*_*m+g*E*T,this._y=g*E*m+x*_*T,this._z=g*_*T-x*E*m,this._w=g*_*m-x*E*T;break;case"XZY":this._x=x*_*m-g*E*T,this._y=g*E*m-x*_*T,this._z=g*_*T+x*E*m,this._w=g*_*m+x*E*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],f=i[8],h=i[1],d=i[5],p=i[9],g=i[2],_=i[6],m=i[10],x=r+d+m;if(x>0){const E=.5/Math.sqrt(x+1);this._w=.25/E,this._x=(_-p)*E,this._y=(f-g)*E,this._z=(h-l)*E}else if(r>d&&r>m){const E=2*Math.sqrt(1+r-d-m);this._w=(_-p)/E,this._x=.25*E,this._y=(l+h)/E,this._z=(f+g)/E}else if(d>m){const E=2*Math.sqrt(1+d-r-m);this._w=(f-g)/E,this._x=(l+h)/E,this._y=.25*E,this._z=(p+_)/E}else{const E=2*Math.sqrt(1+m-r-d);this._w=(h-l)/E,this._x=(f+g)/E,this._y=(p+_)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ee(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,f=e._z,h=e._w,d=i._x,p=i._y,g=i._z,_=i._w;return this._x=r*_+h*d+l*g-f*p,this._y=l*_+h*p+f*d-r*g,this._z=f*_+h*g+r*p-l*d,this._w=h*_-r*d-l*p-f*g,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,f=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+f*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=f,this;const p=1-d*d;if(p<=Number.EPSILON){const E=1-i;return this._w=E*h+i*this._w,this._x=E*r+i*this._x,this._y=E*l+i*this._y,this._z=E*f+i*this._z,this.normalize(),this}const g=Math.sqrt(p),_=Math.atan2(g,d),m=Math.sin((1-i)*_)/g,x=Math.sin(i*_)/g;return this._w=h*m+this._w*x,this._x=r*m+this._x*x,this._y=l*m+this._y*x,this._z=f*m+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),f=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),f*Math.sin(i),f*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class et{constructor(e=0,i=0,r=0){et.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Uv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Uv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[3]*r+f[6]*l,this.y=f[1]*i+f[4]*r+f[7]*l,this.z=f[2]*i+f[5]*r+f[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,f=e.elements,h=1/(f[3]*i+f[7]*r+f[11]*l+f[15]);return this.x=(f[0]*i+f[4]*r+f[8]*l+f[12])*h,this.y=(f[1]*i+f[5]*r+f[9]*l+f[13])*h,this.z=(f[2]*i+f[6]*r+f[10]*l+f[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,f=e.x,h=e.y,d=e.z,p=e.w,g=2*(h*l-d*r),_=2*(d*i-f*l),m=2*(f*r-h*i);return this.x=i+p*g+h*m-d*_,this.y=r+p*_+d*g-f*m,this.z=l+p*m+f*_-h*g,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l,this.y=f[1]*i+f[5]*r+f[9]*l,this.z=f[2]*i+f[6]*r+f[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Ee(this.x,e.x,i.x),this.y=Ee(this.y,e.y,i.y),this.z=Ee(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Ee(this.x,e,i),this.y=Ee(this.y,e,i),this.z=Ee(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,f=e.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-f*d,this.y=f*h-r*p,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return vd.copy(this).projectOnVector(e),this.sub(vd)}reflect(e){return this.sub(vd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ee(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vd=new et,Uv=new nr;class Al{constructor(e=new et(1/0,1/0,1/0),i=new et(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Bi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Bi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Bi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const f=r.getAttribute("position");if(i===!0&&f!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=f.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Bi):Bi.fromBufferAttribute(f,h),Bi.applyMatrix4(e.matrixWorld),this.expandByPoint(Bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Kc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Kc.copy(r.boundingBox)),Kc.applyMatrix4(e.matrixWorld),this.union(Kc)}const l=e.children;for(let f=0,h=l.length;f<h;f++)this.expandByObject(l[f],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bi),Bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ml),Qc.subVectors(this.max,ml),Zr.subVectors(e.a,ml),Kr.subVectors(e.b,ml),Qr.subVectors(e.c,ml),ls.subVectors(Kr,Zr),cs.subVectors(Qr,Kr),js.subVectors(Zr,Qr);let i=[0,-ls.z,ls.y,0,-cs.z,cs.y,0,-js.z,js.y,ls.z,0,-ls.x,cs.z,0,-cs.x,js.z,0,-js.x,-ls.y,ls.x,0,-cs.y,cs.x,0,-js.y,js.x,0];return!xd(i,Zr,Kr,Qr,Qc)||(i=[1,0,0,0,1,0,0,0,1],!xd(i,Zr,Kr,Qr,Qc))?!1:(Jc.crossVectors(ls,cs),i=[Jc.x,Jc.y,Jc.z],xd(i,Zr,Kr,Qr,Qc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ea[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ea[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ea[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ea[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ea[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ea[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ea[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ea[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ea),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ea=[new et,new et,new et,new et,new et,new et,new et,new et],Bi=new et,Kc=new Al,Zr=new et,Kr=new et,Qr=new et,ls=new et,cs=new et,js=new et,ml=new et,Qc=new et,Jc=new et,ks=new et;function xd(o,e,i,r,l){for(let f=0,h=o.length-3;f<=h;f+=3){ks.fromArray(o,f);const d=l.x*Math.abs(ks.x)+l.y*Math.abs(ks.y)+l.z*Math.abs(ks.z),p=e.dot(ks),g=i.dot(ks),_=r.dot(ks);if(Math.max(-Math.max(p,g,_),Math.min(p,g,_))>d)return!1}return!0}const ST=new Al,gl=new et,yd=new et;class Lu{constructor(e=new et,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):ST.setFromPoints(e).getCenter(r);let l=0;for(let f=0,h=e.length;f<h;f++)l=Math.max(l,r.distanceToSquared(e[f]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gl.subVectors(e,this.center);const i=gl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(gl,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gl.copy(e.center).add(yd)),this.expandByPoint(gl.copy(e.center).sub(yd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ta=new et,Sd=new et,$c=new et,us=new et,Md=new et,tu=new et,Ed=new et;class Ou{constructor(e=new et,i=new et(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ta)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ta.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ta.copy(this.origin).addScaledVector(this.direction,i),Ta.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Sd.copy(e).add(i).multiplyScalar(.5),$c.copy(i).sub(e).normalize(),us.copy(this.origin).sub(Sd);const f=e.distanceTo(i)*.5,h=-this.direction.dot($c),d=us.dot(this.direction),p=-us.dot($c),g=us.lengthSq(),_=Math.abs(1-h*h);let m,x,E,T;if(_>0)if(m=h*p-d,x=h*d-p,T=f*_,m>=0)if(x>=-T)if(x<=T){const A=1/_;m*=A,x*=A,E=m*(m+h*x+2*d)+x*(h*m+x+2*p)+g}else x=f,m=Math.max(0,-(h*x+d)),E=-m*m+x*(x+2*p)+g;else x=-f,m=Math.max(0,-(h*x+d)),E=-m*m+x*(x+2*p)+g;else x<=-T?(m=Math.max(0,-(-h*f+d)),x=m>0?-f:Math.min(Math.max(-f,-p),f),E=-m*m+x*(x+2*p)+g):x<=T?(m=0,x=Math.min(Math.max(-f,-p),f),E=x*(x+2*p)+g):(m=Math.max(0,-(h*f+d)),x=m>0?f:Math.min(Math.max(-f,-p),f),E=-m*m+x*(x+2*p)+g);else x=h>0?-f:f,m=Math.max(0,-(h*x+d)),E=-m*m+x*(x+2*p)+g;return r&&r.copy(this.origin).addScaledVector(this.direction,m),l&&l.copy(Sd).addScaledVector($c,x),E}intersectSphere(e,i){Ta.subVectors(e.center,this.origin);const r=Ta.dot(this.direction),l=Ta.dot(Ta)-r*r,f=e.radius*e.radius;if(l>f)return null;const h=Math.sqrt(f-l),d=r-h,p=r+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,f,h,d,p;const g=1/this.direction.x,_=1/this.direction.y,m=1/this.direction.z,x=this.origin;return g>=0?(r=(e.min.x-x.x)*g,l=(e.max.x-x.x)*g):(r=(e.max.x-x.x)*g,l=(e.min.x-x.x)*g),_>=0?(f=(e.min.y-x.y)*_,h=(e.max.y-x.y)*_):(f=(e.max.y-x.y)*_,h=(e.min.y-x.y)*_),r>h||f>l||((f>r||isNaN(r))&&(r=f),(h<l||isNaN(l))&&(l=h),m>=0?(d=(e.min.z-x.z)*m,p=(e.max.z-x.z)*m):(d=(e.max.z-x.z)*m,p=(e.min.z-x.z)*m),r>p||d>l)||((d>r||r!==r)&&(r=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Ta)!==null}intersectTriangle(e,i,r,l,f){Md.subVectors(i,e),tu.subVectors(r,e),Ed.crossVectors(Md,tu);let h=this.direction.dot(Ed),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;us.subVectors(this.origin,e);const p=d*this.direction.dot(tu.crossVectors(us,tu));if(p<0)return null;const g=d*this.direction.dot(Md.cross(us));if(g<0||p+g>h)return null;const _=-d*us.dot(Ed);return _<0?null:this.at(_/h,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(e,i,r,l,f,h,d,p,g,_,m,x,E,T,A,M){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,f,h,d,p,g,_,m,x,E,T,A,M)}set(e,i,r,l,f,h,d,p,g,_,m,x,E,T,A,M){const y=this.elements;return y[0]=e,y[4]=i,y[8]=r,y[12]=l,y[1]=f,y[5]=h,y[9]=d,y[13]=p,y[2]=g,y[6]=_,y[10]=m,y[14]=x,y[3]=E,y[7]=T,y[11]=A,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/Jr.setFromMatrixColumn(e,0).length(),f=1/Jr.setFromMatrixColumn(e,1).length(),h=1/Jr.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*f,i[5]=r[5]*f,i[6]=r[6]*f,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,f=e.z,h=Math.cos(r),d=Math.sin(r),p=Math.cos(l),g=Math.sin(l),_=Math.cos(f),m=Math.sin(f);if(e.order==="XYZ"){const x=h*_,E=h*m,T=d*_,A=d*m;i[0]=p*_,i[4]=-p*m,i[8]=g,i[1]=E+T*g,i[5]=x-A*g,i[9]=-d*p,i[2]=A-x*g,i[6]=T+E*g,i[10]=h*p}else if(e.order==="YXZ"){const x=p*_,E=p*m,T=g*_,A=g*m;i[0]=x+A*d,i[4]=T*d-E,i[8]=h*g,i[1]=h*m,i[5]=h*_,i[9]=-d,i[2]=E*d-T,i[6]=A+x*d,i[10]=h*p}else if(e.order==="ZXY"){const x=p*_,E=p*m,T=g*_,A=g*m;i[0]=x-A*d,i[4]=-h*m,i[8]=T+E*d,i[1]=E+T*d,i[5]=h*_,i[9]=A-x*d,i[2]=-h*g,i[6]=d,i[10]=h*p}else if(e.order==="ZYX"){const x=h*_,E=h*m,T=d*_,A=d*m;i[0]=p*_,i[4]=T*g-E,i[8]=x*g+A,i[1]=p*m,i[5]=A*g+x,i[9]=E*g-T,i[2]=-g,i[6]=d*p,i[10]=h*p}else if(e.order==="YZX"){const x=h*p,E=h*g,T=d*p,A=d*g;i[0]=p*_,i[4]=A-x*m,i[8]=T*m+E,i[1]=m,i[5]=h*_,i[9]=-d*_,i[2]=-g*_,i[6]=E*m+T,i[10]=x-A*m}else if(e.order==="XZY"){const x=h*p,E=h*g,T=d*p,A=d*g;i[0]=p*_,i[4]=-m,i[8]=g*_,i[1]=x*m+A,i[5]=h*_,i[9]=E*m-T,i[2]=T*m-E,i[6]=d*_,i[10]=A*m+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(MT,e,ET)}lookAt(e,i,r){const l=this.elements;return hi.subVectors(e,i),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),fs.crossVectors(r,hi),fs.lengthSq()===0&&(Math.abs(r.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),fs.crossVectors(r,hi)),fs.normalize(),eu.crossVectors(hi,fs),l[0]=fs.x,l[4]=eu.x,l[8]=hi.x,l[1]=fs.y,l[5]=eu.y,l[9]=hi.y,l[2]=fs.z,l[6]=eu.z,l[10]=hi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,f=this.elements,h=r[0],d=r[4],p=r[8],g=r[12],_=r[1],m=r[5],x=r[9],E=r[13],T=r[2],A=r[6],M=r[10],y=r[14],O=r[3],z=r[7],N=r[11],j=r[15],F=l[0],P=l[4],B=l[8],U=l[12],C=l[1],H=l[5],it=l[9],$=l[13],dt=l[2],ht=l[6],q=l[10],lt=l[14],X=l[3],xt=l[7],yt=l[11],wt=l[15];return f[0]=h*F+d*C+p*dt+g*X,f[4]=h*P+d*H+p*ht+g*xt,f[8]=h*B+d*it+p*q+g*yt,f[12]=h*U+d*$+p*lt+g*wt,f[1]=_*F+m*C+x*dt+E*X,f[5]=_*P+m*H+x*ht+E*xt,f[9]=_*B+m*it+x*q+E*yt,f[13]=_*U+m*$+x*lt+E*wt,f[2]=T*F+A*C+M*dt+y*X,f[6]=T*P+A*H+M*ht+y*xt,f[10]=T*B+A*it+M*q+y*yt,f[14]=T*U+A*$+M*lt+y*wt,f[3]=O*F+z*C+N*dt+j*X,f[7]=O*P+z*H+N*ht+j*xt,f[11]=O*B+z*it+N*q+j*yt,f[15]=O*U+z*$+N*lt+j*wt,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],f=e[12],h=e[1],d=e[5],p=e[9],g=e[13],_=e[2],m=e[6],x=e[10],E=e[14],T=e[3],A=e[7],M=e[11],y=e[15];return T*(+f*p*m-l*g*m-f*d*x+r*g*x+l*d*E-r*p*E)+A*(+i*p*E-i*g*x+f*h*x-l*h*E+l*g*_-f*p*_)+M*(+i*g*m-i*d*E-f*h*m+r*h*E+f*d*_-r*g*_)+y*(-l*d*_-i*p*m+i*d*x+l*h*m-r*h*x+r*p*_)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],h=e[4],d=e[5],p=e[6],g=e[7],_=e[8],m=e[9],x=e[10],E=e[11],T=e[12],A=e[13],M=e[14],y=e[15],O=m*M*g-A*x*g+A*p*E-d*M*E-m*p*y+d*x*y,z=T*x*g-_*M*g-T*p*E+h*M*E+_*p*y-h*x*y,N=_*A*g-T*m*g+T*d*E-h*A*E-_*d*y+h*m*y,j=T*m*p-_*A*p-T*d*x+h*A*x+_*d*M-h*m*M,F=i*O+r*z+l*N+f*j;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/F;return e[0]=O*P,e[1]=(A*x*f-m*M*f-A*l*E+r*M*E+m*l*y-r*x*y)*P,e[2]=(d*M*f-A*p*f+A*l*g-r*M*g-d*l*y+r*p*y)*P,e[3]=(m*p*f-d*x*f-m*l*g+r*x*g+d*l*E-r*p*E)*P,e[4]=z*P,e[5]=(_*M*f-T*x*f+T*l*E-i*M*E-_*l*y+i*x*y)*P,e[6]=(T*p*f-h*M*f-T*l*g+i*M*g+h*l*y-i*p*y)*P,e[7]=(h*x*f-_*p*f+_*l*g-i*x*g-h*l*E+i*p*E)*P,e[8]=N*P,e[9]=(T*m*f-_*A*f-T*r*E+i*A*E+_*r*y-i*m*y)*P,e[10]=(h*A*f-T*d*f+T*r*g-i*A*g-h*r*y+i*d*y)*P,e[11]=(_*d*f-h*m*f-_*r*g+i*m*g+h*r*E-i*d*E)*P,e[12]=j*P,e[13]=(_*A*l-T*m*l+T*r*x-i*A*x-_*r*M+i*m*M)*P,e[14]=(T*d*l-h*A*l-T*r*p+i*A*p+h*r*M-i*d*M)*P,e[15]=(h*m*l-_*d*l+_*r*p-i*m*p-h*r*x+i*d*x)*P,this}scale(e){const i=this.elements,r=e.x,l=e.y,f=e.z;return i[0]*=r,i[4]*=l,i[8]*=f,i[1]*=r,i[5]*=l,i[9]*=f,i[2]*=r,i[6]*=l,i[10]*=f,i[3]*=r,i[7]*=l,i[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),f=1-r,h=e.x,d=e.y,p=e.z,g=f*h,_=f*d;return this.set(g*h+r,g*d-l*p,g*p+l*d,0,g*d+l*p,_*d+r,_*p-l*h,0,g*p-l*d,_*p+l*h,f*p*p+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,f,h){return this.set(1,r,f,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,f=i._x,h=i._y,d=i._z,p=i._w,g=f+f,_=h+h,m=d+d,x=f*g,E=f*_,T=f*m,A=h*_,M=h*m,y=d*m,O=p*g,z=p*_,N=p*m,j=r.x,F=r.y,P=r.z;return l[0]=(1-(A+y))*j,l[1]=(E+N)*j,l[2]=(T-z)*j,l[3]=0,l[4]=(E-N)*F,l[5]=(1-(x+y))*F,l[6]=(M+O)*F,l[7]=0,l[8]=(T+z)*P,l[9]=(M-O)*P,l[10]=(1-(x+A))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let f=Jr.set(l[0],l[1],l[2]).length();const h=Jr.set(l[4],l[5],l[6]).length(),d=Jr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(f=-f),e.x=l[12],e.y=l[13],e.z=l[14],Hi.copy(this);const g=1/f,_=1/h,m=1/d;return Hi.elements[0]*=g,Hi.elements[1]*=g,Hi.elements[2]*=g,Hi.elements[4]*=_,Hi.elements[5]*=_,Hi.elements[6]*=_,Hi.elements[8]*=m,Hi.elements[9]*=m,Hi.elements[10]*=m,i.setFromRotationMatrix(Hi),r.x=f,r.y=h,r.z=d,this}makePerspective(e,i,r,l,f,h,d=Na){const p=this.elements,g=2*f/(i-e),_=2*f/(r-l),m=(i+e)/(i-e),x=(r+l)/(r-l);let E,T;if(d===Na)E=-(h+f)/(h-f),T=-2*h*f/(h-f);else if(d===Cu)E=-h/(h-f),T=-h*f/(h-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=m,p[12]=0,p[1]=0,p[5]=_,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,f,h,d=Na){const p=this.elements,g=1/(i-e),_=1/(r-l),m=1/(h-f),x=(i+e)*g,E=(r+l)*_;let T,A;if(d===Na)T=(h+f)*m,A=-2*m;else if(d===Cu)T=f*m,A=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*g,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-E,p[2]=0,p[6]=0,p[10]=A,p[14]=-T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const Jr=new et,Hi=new tn,MT=new et(0,0,0),ET=new et(1,1,1),fs=new et,eu=new et,hi=new et,Lv=new tn,Ov=new nr;class sa{constructor(e=0,i=0,r=0,l=sa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,f=l[0],h=l[4],d=l[8],p=l[1],g=l[5],_=l[9],m=l[2],x=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(Ee(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,E),this._z=Math.atan2(-h,f)):(this._x=Math.atan2(x,g),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,E),this._z=Math.atan2(p,g)):(this._y=Math.atan2(-m,f),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-m,E),this._z=Math.atan2(-h,g)):(this._y=0,this._z=Math.atan2(p,f));break;case"ZYX":this._y=Math.asin(-Ee(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(x,E),this._z=Math.atan2(p,f)):(this._x=0,this._z=Math.atan2(-h,g));break;case"YZX":this._z=Math.asin(Ee(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,g),this._y=Math.atan2(-m,f)):(this._x=0,this._y=Math.atan2(d,E));break;case"XZY":this._z=Math.asin(-Ee(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,g),this._y=Math.atan2(d,f)):(this._x=Math.atan2(-_,E),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Lv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lv,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Ov.setFromEuler(this),this.setFromQuaternion(Ov,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sa.DEFAULT_ORDER="XYZ";class Wp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let TT=0;const zv=new et,$r=new nr,ba=new tn,nu=new et,_l=new et,bT=new et,AT=new nr,Pv=new et(1,0,0),Iv=new et(0,1,0),Fv=new et(0,0,1),Bv={type:"added"},RT={type:"removed"},to={type:"childadded",child:null},Td={type:"childremoved",child:null};class Cn extends ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:TT++}),this.uuid=bl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Cn.DEFAULT_UP.clone();const e=new et,i=new sa,r=new nr,l=new et(1,1,1);function f(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(f),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new tn},normalMatrix:{value:new pe}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=Cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return $r.setFromAxisAngle(e,i),this.quaternion.multiply($r),this}rotateOnWorldAxis(e,i){return $r.setFromAxisAngle(e,i),this.quaternion.premultiply($r),this}rotateX(e){return this.rotateOnAxis(Pv,e)}rotateY(e){return this.rotateOnAxis(Iv,e)}rotateZ(e){return this.rotateOnAxis(Fv,e)}translateOnAxis(e,i){return zv.copy(e).applyQuaternion(this.quaternion),this.position.add(zv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Pv,e)}translateY(e){return this.translateOnAxis(Iv,e)}translateZ(e){return this.translateOnAxis(Fv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ba.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?nu.copy(e):nu.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),_l.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ba.lookAt(_l,nu,this.up):ba.lookAt(nu,_l,this.up),this.quaternion.setFromRotationMatrix(ba),l&&(ba.extractRotation(l.matrixWorld),$r.setFromRotationMatrix(ba),this.quaternion.premultiply($r.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bv),to.child=e,this.dispatchEvent(to),to.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(RT),Td.child=e,this.dispatchEvent(Td),Td.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ba.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ba.multiply(e.parent.matrixWorld)),e.applyMatrix4(ba),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bv),to.child=e,this.dispatchEvent(to),to.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let f=0,h=l.length;f<h;f++)l[f].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_l,e,bT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_l,AT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let f=0,h=l.length;f<h;f++)l[f].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function f(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=f(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let g=0,_=p.length;g<_;g++){const m=p[g];f(e.shapes,m)}else f(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,g=this.material.length;p<g;p++)d.push(f(e.materials,this.material[p]));l.material=d}else l.material=f(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(f(e.animations,p))}}if(i){const d=h(e.geometries),p=h(e.materials),g=h(e.textures),_=h(e.images),m=h(e.shapes),x=h(e.skeletons),E=h(e.animations),T=h(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),g.length>0&&(r.textures=g),_.length>0&&(r.images=_),m.length>0&&(r.shapes=m),x.length>0&&(r.skeletons=x),E.length>0&&(r.animations=E),T.length>0&&(r.nodes=T)}return r.object=l,r;function h(d){const p=[];for(const g in d){const _=d[g];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Cn.DEFAULT_UP=new et(0,1,0);Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gi=new et,Aa=new et,bd=new et,Ra=new et,eo=new et,no=new et,Hv=new et,Ad=new et,Rd=new et,Cd=new et,wd=new rn,Dd=new rn,Nd=new rn;class Vi{constructor(e=new et,i=new et,r=new et){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Gi.subVectors(e,i),l.cross(Gi);const f=l.lengthSq();return f>0?l.multiplyScalar(1/Math.sqrt(f)):l.set(0,0,0)}static getBarycoord(e,i,r,l,f){Gi.subVectors(l,i),Aa.subVectors(r,i),bd.subVectors(e,i);const h=Gi.dot(Gi),d=Gi.dot(Aa),p=Gi.dot(bd),g=Aa.dot(Aa),_=Aa.dot(bd),m=h*g-d*d;if(m===0)return f.set(0,0,0),null;const x=1/m,E=(g*p-d*_)*x,T=(h*_-d*p)*x;return f.set(1-E-T,T,E)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Ra)===null?!1:Ra.x>=0&&Ra.y>=0&&Ra.x+Ra.y<=1}static getInterpolation(e,i,r,l,f,h,d,p){return this.getBarycoord(e,i,r,l,Ra)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(f,Ra.x),p.addScaledVector(h,Ra.y),p.addScaledVector(d,Ra.z),p)}static getInterpolatedAttribute(e,i,r,l,f,h){return wd.setScalar(0),Dd.setScalar(0),Nd.setScalar(0),wd.fromBufferAttribute(e,i),Dd.fromBufferAttribute(e,r),Nd.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(wd,f.x),h.addScaledVector(Dd,f.y),h.addScaledVector(Nd,f.z),h}static isFrontFacing(e,i,r,l){return Gi.subVectors(r,i),Aa.subVectors(e,i),Gi.cross(Aa).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gi.subVectors(this.c,this.b),Aa.subVectors(this.a,this.b),Gi.cross(Aa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Vi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,f){return Vi.getInterpolation(e,this.a,this.b,this.c,i,r,l,f)}containsPoint(e){return Vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,f=this.c;let h,d;eo.subVectors(l,r),no.subVectors(f,r),Ad.subVectors(e,r);const p=eo.dot(Ad),g=no.dot(Ad);if(p<=0&&g<=0)return i.copy(r);Rd.subVectors(e,l);const _=eo.dot(Rd),m=no.dot(Rd);if(_>=0&&m<=_)return i.copy(l);const x=p*m-_*g;if(x<=0&&p>=0&&_<=0)return h=p/(p-_),i.copy(r).addScaledVector(eo,h);Cd.subVectors(e,f);const E=eo.dot(Cd),T=no.dot(Cd);if(T>=0&&E<=T)return i.copy(f);const A=E*g-p*T;if(A<=0&&g>=0&&T<=0)return d=g/(g-T),i.copy(r).addScaledVector(no,d);const M=_*T-E*m;if(M<=0&&m-_>=0&&E-T>=0)return Hv.subVectors(f,l),d=(m-_)/(m-_+(E-T)),i.copy(l).addScaledVector(Hv,d);const y=1/(M+A+x);return h=A*y,d=x*y,i.copy(r).addScaledVector(eo,h).addScaledVector(no,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Iy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hs={h:0,s:0,l:0},iu={h:0,s:0,l:0};function Ud(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Te{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ze.toWorkingColorSpace(this,i),this}setRGB(e,i,r,l=ze.workingColorSpace){return this.r=e,this.g=i,this.b=r,ze.toWorkingColorSpace(this,l),this}setHSL(e,i,r,l=ze.workingColorSpace){if(e=cT(e,1),i=Ee(i,0,1),r=Ee(r,0,1),i===0)this.r=this.g=this.b=r;else{const f=r<=.5?r*(1+i):r+i-r*i,h=2*r-f;this.r=Ud(h,f,e+1/3),this.g=Ud(h,f,e),this.b=Ud(h,f,e-1/3)}return ze.toWorkingColorSpace(this,l),this}setStyle(e,i=Ai){function r(f){f!==void 0&&parseFloat(f)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=l[1],h=f.length;if(h===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(f,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Ai){const r=Iy[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ua(e.r),this.g=Ua(e.g),this.b=Ua(e.b),this}copyLinearToSRGB(e){return this.r=ho(e.r),this.g=ho(e.g),this.b=ho(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ai){return ze.fromWorkingColorSpace(Hn.copy(this),e),Math.round(Ee(Hn.r*255,0,255))*65536+Math.round(Ee(Hn.g*255,0,255))*256+Math.round(Ee(Hn.b*255,0,255))}getHexString(e=Ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=ze.workingColorSpace){ze.fromWorkingColorSpace(Hn.copy(this),i);const r=Hn.r,l=Hn.g,f=Hn.b,h=Math.max(r,l,f),d=Math.min(r,l,f);let p,g;const _=(d+h)/2;if(d===h)p=0,g=0;else{const m=h-d;switch(g=_<=.5?m/(h+d):m/(2-h-d),h){case r:p=(l-f)/m+(l<f?6:0);break;case l:p=(f-r)/m+2;break;case f:p=(r-l)/m+4;break}p/=6}return e.h=p,e.s=g,e.l=_,e}getRGB(e,i=ze.workingColorSpace){return ze.fromWorkingColorSpace(Hn.copy(this),i),e.r=Hn.r,e.g=Hn.g,e.b=Hn.b,e}getStyle(e=Ai){ze.fromWorkingColorSpace(Hn.copy(this),e);const i=Hn.r,r=Hn.g,l=Hn.b;return e!==Ai?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(hs),this.setHSL(hs.h+e,hs.s+i,hs.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(hs),e.getHSL(iu);const r=md(hs.h,iu.h,i),l=md(hs.s,iu.s,i),f=md(hs.l,iu.l,i);return this.setHSL(r,l,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,f=e.elements;return this.r=f[0]*i+f[3]*r+f[6]*l,this.g=f[1]*i+f[4]*r+f[7]*l,this.b=f[2]*i+f[5]*r+f[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Hn=new Te;Te.NAMES=Iy;let CT=0;class So extends ir{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:CT++}),this.uuid=bl(),this.name="",this.type="Material",this.blending=uo,this.side=vs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wd,this.blendDst=Zd,this.blendEquation=Qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Av,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yr,this.stencilZFail=Yr,this.stencilZPass=Yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==uo&&(r.blending=this.blending),this.side!==vs&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Wd&&(r.blendSrc=this.blendSrc),this.blendDst!==Zd&&(r.blendDst=this.blendDst),this.blendEquation!==Qs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==po&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Av&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Yr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Yr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(f){const h=[];for(const d in f){const p=f[d];delete p.metadata,h.push(p)}return h}if(i){const f=l(e.textures),h=l(e.images);f.length>0&&(r.textures=f),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let f=0;f!==l;++f)r[f]=i[f].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Zp extends So{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sa,this.combine=Sy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gn=new et,au=new ue;let wT=0;class aa{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wT++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Rv,this.updateRanges=[],this.gpuType=Da,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,f=this.itemSize;l<f;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)au.fromBufferAttribute(this,i),au.applyMatrix3(e),this.setXY(i,au.x,au.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix3(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix4(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)gn.fromBufferAttribute(this,i),gn.applyNormalMatrix(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)gn.fromBufferAttribute(this,i),gn.transformDirection(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=pl(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Jn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=pl(i,this.array)),i}setX(e,i){return this.normalized&&(i=Jn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=pl(i,this.array)),i}setY(e,i){return this.normalized&&(i=Jn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=pl(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Jn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=pl(i,this.array)),i}setW(e,i){return this.normalized&&(i=Jn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Jn(i,this.array),r=Jn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Jn(i,this.array),r=Jn(r,this.array),l=Jn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,f){return e*=this.itemSize,this.normalized&&(i=Jn(i,this.array),r=Jn(r,this.array),l=Jn(l,this.array),f=Jn(f,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rv&&(e.usage=this.usage),e}}class Fy extends aa{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class By extends aa{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class _n extends aa{constructor(e,i,r){super(new Float32Array(e),i,r)}}let DT=0;const bi=new tn,Ld=new Cn,io=new et,di=new Al,vl=new Al,Rn=new et;class Ci extends ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:DT++}),this.uuid=bl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zy(e)?By:Fy)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const f=new pe().getNormalMatrix(e);r.applyNormalMatrix(f),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bi.makeRotationFromQuaternion(e),this.applyMatrix4(bi),this}rotateX(e){return bi.makeRotationX(e),this.applyMatrix4(bi),this}rotateY(e){return bi.makeRotationY(e),this.applyMatrix4(bi),this}rotateZ(e){return bi.makeRotationZ(e),this.applyMatrix4(bi),this}translate(e,i,r){return bi.makeTranslation(e,i,r),this.applyMatrix4(bi),this}scale(e,i,r){return bi.makeScale(e,i,r),this.applyMatrix4(bi),this}lookAt(e){return Ld.lookAt(e),Ld.updateMatrix(),this.applyMatrix4(Ld.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(io).negate(),this.translate(io.x,io.y,io.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,f=e.length;l<f;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new _n(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const f=e[l];i.setXYZ(l,f.x,f.y,f.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Al);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new et(-1/0,-1/0,-1/0),new et(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const f=i[r];di.setFromBufferAttribute(f),this.morphTargetsRelative?(Rn.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint(Rn),Rn.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint(Rn)):(this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lu);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new et,1/0);return}if(e){const r=this.boundingSphere.center;if(di.setFromBufferAttribute(e),i)for(let f=0,h=i.length;f<h;f++){const d=i[f];vl.setFromBufferAttribute(d),this.morphTargetsRelative?(Rn.addVectors(di.min,vl.min),di.expandByPoint(Rn),Rn.addVectors(di.max,vl.max),di.expandByPoint(Rn)):(di.expandByPoint(vl.min),di.expandByPoint(vl.max))}di.getCenter(r);let l=0;for(let f=0,h=e.count;f<h;f++)Rn.fromBufferAttribute(e,f),l=Math.max(l,r.distanceToSquared(Rn));if(i)for(let f=0,h=i.length;f<h;f++){const d=i[f],p=this.morphTargetsRelative;for(let g=0,_=d.count;g<_;g++)Rn.fromBufferAttribute(d,g),p&&(io.fromBufferAttribute(e,g),Rn.add(io)),l=Math.max(l,r.distanceToSquared(Rn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,f=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new aa(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],p=[];for(let B=0;B<r.count;B++)d[B]=new et,p[B]=new et;const g=new et,_=new et,m=new et,x=new ue,E=new ue,T=new ue,A=new et,M=new et;function y(B,U,C){g.fromBufferAttribute(r,B),_.fromBufferAttribute(r,U),m.fromBufferAttribute(r,C),x.fromBufferAttribute(f,B),E.fromBufferAttribute(f,U),T.fromBufferAttribute(f,C),_.sub(g),m.sub(g),E.sub(x),T.sub(x);const H=1/(E.x*T.y-T.x*E.y);isFinite(H)&&(A.copy(_).multiplyScalar(T.y).addScaledVector(m,-E.y).multiplyScalar(H),M.copy(m).multiplyScalar(E.x).addScaledVector(_,-T.x).multiplyScalar(H),d[B].add(A),d[U].add(A),d[C].add(A),p[B].add(M),p[U].add(M),p[C].add(M))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let B=0,U=O.length;B<U;++B){const C=O[B],H=C.start,it=C.count;for(let $=H,dt=H+it;$<dt;$+=3)y(e.getX($+0),e.getX($+1),e.getX($+2))}const z=new et,N=new et,j=new et,F=new et;function P(B){j.fromBufferAttribute(l,B),F.copy(j);const U=d[B];z.copy(U),z.sub(j.multiplyScalar(j.dot(U))).normalize(),N.crossVectors(F,U);const H=N.dot(p[B])<0?-1:1;h.setXYZW(B,z.x,z.y,z.z,H)}for(let B=0,U=O.length;B<U;++B){const C=O[B],H=C.start,it=C.count;for(let $=H,dt=H+it;$<dt;$+=3)P(e.getX($+0)),P(e.getX($+1)),P(e.getX($+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new aa(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,E=r.count;x<E;x++)r.setXYZ(x,0,0,0);const l=new et,f=new et,h=new et,d=new et,p=new et,g=new et,_=new et,m=new et;if(e)for(let x=0,E=e.count;x<E;x+=3){const T=e.getX(x+0),A=e.getX(x+1),M=e.getX(x+2);l.fromBufferAttribute(i,T),f.fromBufferAttribute(i,A),h.fromBufferAttribute(i,M),_.subVectors(h,f),m.subVectors(l,f),_.cross(m),d.fromBufferAttribute(r,T),p.fromBufferAttribute(r,A),g.fromBufferAttribute(r,M),d.add(_),p.add(_),g.add(_),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(A,p.x,p.y,p.z),r.setXYZ(M,g.x,g.y,g.z)}else for(let x=0,E=i.count;x<E;x+=3)l.fromBufferAttribute(i,x+0),f.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),_.subVectors(h,f),m.subVectors(l,f),_.cross(m),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Rn.fromBufferAttribute(e,i),Rn.normalize(),e.setXYZ(i,Rn.x,Rn.y,Rn.z)}toNonIndexed(){function e(d,p){const g=d.array,_=d.itemSize,m=d.normalized,x=new g.constructor(p.length*_);let E=0,T=0;for(let A=0,M=p.length;A<M;A++){d.isInterleavedBufferAttribute?E=p[A]*d.data.stride+d.offset:E=p[A]*_;for(let y=0;y<_;y++)x[T++]=g[E++]}return new aa(x,_,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ci,r=this.index.array,l=this.attributes;for(const d in l){const p=l[d],g=e(p,r);i.setAttribute(d,g)}const f=this.morphAttributes;for(const d in f){const p=[],g=f[d];for(let _=0,m=g.length;_<m;_++){const x=g[_],E=e(x,r);p.push(E)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const g=h[d];i.addGroup(g.start,g.count,g.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const g in p)p[g]!==void 0&&(e[g]=p[g]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const g=r[p];e.data.attributes[p]=g.toJSON(e.data)}const l={};let f=!1;for(const p in this.morphAttributes){const g=this.morphAttributes[p],_=[];for(let m=0,x=g.length;m<x;m++){const E=g[m];_.push(E.toJSON(e.data))}_.length>0&&(l[p]=_,f=!0)}f&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(i));const l=e.attributes;for(const g in l){const _=l[g];this.setAttribute(g,_.clone(i))}const f=e.morphAttributes;for(const g in f){const _=[],m=f[g];for(let x=0,E=m.length;x<E;x++)_.push(m[x].clone(i));this.morphAttributes[g]=_}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let g=0,_=h.length;g<_;g++){const m=h[g];this.addGroup(m.start,m.count,m.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gv=new tn,Xs=new Ou,su=new Lu,Vv=new et,ru=new et,ou=new et,lu=new et,Od=new et,cu=new et,jv=new et,uu=new et;class pi extends Cn{constructor(e=new Ci,i=new Zp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,h=l.length;f<h;f++){const d=l[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=f}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,f=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(f&&d){cu.set(0,0,0);for(let p=0,g=f.length;p<g;p++){const _=d[p],m=f[p];_!==0&&(Od.fromBufferAttribute(m,e),h?cu.addScaledVector(Od,_):cu.addScaledVector(Od.sub(i),_))}i.add(cu)}return i}raycast(e,i){const r=this.geometry,l=this.material,f=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),su.copy(r.boundingSphere),su.applyMatrix4(f),Xs.copy(e.ray).recast(e.near),!(su.containsPoint(Xs.origin)===!1&&(Xs.intersectSphere(su,Vv)===null||Xs.origin.distanceToSquared(Vv)>(e.far-e.near)**2))&&(Gv.copy(f).invert(),Xs.copy(e.ray).applyMatrix4(Gv),!(r.boundingBox!==null&&Xs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Xs)))}_computeIntersections(e,i,r){let l;const f=this.geometry,h=this.material,d=f.index,p=f.attributes.position,g=f.attributes.uv,_=f.attributes.uv1,m=f.attributes.normal,x=f.groups,E=f.drawRange;if(d!==null)if(Array.isArray(h))for(let T=0,A=x.length;T<A;T++){const M=x[T],y=h[M.materialIndex],O=Math.max(M.start,E.start),z=Math.min(d.count,Math.min(M.start+M.count,E.start+E.count));for(let N=O,j=z;N<j;N+=3){const F=d.getX(N),P=d.getX(N+1),B=d.getX(N+2);l=fu(this,y,e,r,g,_,m,F,P,B),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,E.start),A=Math.min(d.count,E.start+E.count);for(let M=T,y=A;M<y;M+=3){const O=d.getX(M),z=d.getX(M+1),N=d.getX(M+2);l=fu(this,h,e,r,g,_,m,O,z,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let T=0,A=x.length;T<A;T++){const M=x[T],y=h[M.materialIndex],O=Math.max(M.start,E.start),z=Math.min(p.count,Math.min(M.start+M.count,E.start+E.count));for(let N=O,j=z;N<j;N+=3){const F=N,P=N+1,B=N+2;l=fu(this,y,e,r,g,_,m,F,P,B),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,E.start),A=Math.min(p.count,E.start+E.count);for(let M=T,y=A;M<y;M+=3){const O=M,z=M+1,N=M+2;l=fu(this,h,e,r,g,_,m,O,z,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function NT(o,e,i,r,l,f,h,d){let p;if(e.side===ei?p=r.intersectTriangle(h,f,l,!0,d):p=r.intersectTriangle(l,f,h,e.side===vs,d),p===null)return null;uu.copy(d),uu.applyMatrix4(o.matrixWorld);const g=i.ray.origin.distanceTo(uu);return g<i.near||g>i.far?null:{distance:g,point:uu.clone(),object:o}}function fu(o,e,i,r,l,f,h,d,p,g){o.getVertexPosition(d,ru),o.getVertexPosition(p,ou),o.getVertexPosition(g,lu);const _=NT(o,e,i,r,ru,ou,lu,jv);if(_){const m=new et;Vi.getBarycoord(jv,ru,ou,lu,m),l&&(_.uv=Vi.getInterpolatedAttribute(l,d,p,g,m,new ue)),f&&(_.uv1=Vi.getInterpolatedAttribute(f,d,p,g,m,new ue)),h&&(_.normal=Vi.getInterpolatedAttribute(h,d,p,g,m,new et),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:d,b:p,c:g,normal:new et,materialIndex:0};Vi.getNormal(ru,ou,lu,x.normal),_.face=x,_.barycoord=m}return _}class Rl extends Ci{constructor(e=1,i=1,r=1,l=1,f=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:f,depthSegments:h};const d=this;l=Math.floor(l),f=Math.floor(f),h=Math.floor(h);const p=[],g=[],_=[],m=[];let x=0,E=0;T("z","y","x",-1,-1,r,i,e,h,f,0),T("z","y","x",1,-1,r,i,-e,h,f,1),T("x","z","y",1,1,e,r,i,l,h,2),T("x","z","y",1,-1,e,r,-i,l,h,3),T("x","y","z",1,-1,e,i,r,l,f,4),T("x","y","z",-1,-1,e,i,-r,l,f,5),this.setIndex(p),this.setAttribute("position",new _n(g,3)),this.setAttribute("normal",new _n(_,3)),this.setAttribute("uv",new _n(m,2));function T(A,M,y,O,z,N,j,F,P,B,U){const C=N/P,H=j/B,it=N/2,$=j/2,dt=F/2,ht=P+1,q=B+1;let lt=0,X=0;const xt=new et;for(let yt=0;yt<q;yt++){const wt=yt*H-$;for(let Ft=0;Ft<ht;Ft++){const Wt=Ft*C-it;xt[A]=Wt*O,xt[M]=wt*z,xt[y]=dt,g.push(xt.x,xt.y,xt.z),xt[A]=0,xt[M]=0,xt[y]=F>0?1:-1,_.push(xt.x,xt.y,xt.z),m.push(Ft/P),m.push(1-yt/B),lt+=1}}for(let yt=0;yt<B;yt++)for(let wt=0;wt<P;wt++){const Ft=x+wt+ht*yt,Wt=x+wt+ht*(yt+1),D=x+(wt+1)+ht*(yt+1),W=x+(wt+1)+ht*yt;p.push(Ft,Wt,W),p.push(Wt,D,W),X+=6}d.addGroup(E,X,U),E+=X,x+=lt}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function yo(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function qn(o){const e={};for(let i=0;i<o.length;i++){const r=yo(o[i]);for(const l in r)e[l]=r[l]}return e}function UT(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Hy(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ze.workingColorSpace}const LT={clone:yo,merge:qn};var OT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xs extends So{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=OT,this.fragmentShader=zT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yo(e.uniforms),this.uniformsGroups=UT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Gy extends Cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=Na}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ds=new et,kv=new ue,Xv=new ue;class Ri extends Gy{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Lp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Tu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lp*2*Math.atan(Math.tan(Tu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ds.x,ds.y).multiplyScalar(-e/ds.z),ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ds.x,ds.y).multiplyScalar(-e/ds.z)}getViewSize(e,i){return this.getViewBounds(e,kv,Xv),i.subVectors(Xv,kv)}setViewOffset(e,i,r,l,f,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Tu*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,f=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,g=h.fullHeight;f+=h.offsetX*l/p,i-=h.offsetY*r/g,l*=h.width/p,r*=h.height/g}const d=this.filmOffset;d!==0&&(f+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ao=-90,so=1;class PT extends Cn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ri(ao,so,e,i);l.layers=this.layers,this.add(l);const f=new Ri(ao,so,e,i);f.layers=this.layers,this.add(f);const h=new Ri(ao,so,e,i);h.layers=this.layers,this.add(h);const d=new Ri(ao,so,e,i);d.layers=this.layers,this.add(d);const p=new Ri(ao,so,e,i);p.layers=this.layers,this.add(p);const g=new Ri(ao,so,e,i);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,f,h,d,p]=i;for(const g of i)this.remove(g);if(e===Na)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Cu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const g of i)this.add(g),g.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[f,h,d,p,g,_]=this.children,m=e.getRenderTarget(),x=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,f),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,p),e.setRenderTarget(r,4,l),e.render(i,g),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,l),e.render(i,_),e.setRenderTarget(m,x,E),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class Vy extends Gn{constructor(e,i,r,l,f,h,d,p,g,_){e=e!==void 0?e:[],i=i!==void 0?i:mo,super(e,i,r,l,f,h,d,p,g,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class IT extends er{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Vy(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:ti}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Rl(5,5,5),f=new xs({name:"CubemapFromEquirect",uniforms:yo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ei,blending:gs});f.uniforms.tEquirect.value=i;const h=new pi(l,f),d=i.minFilter;return i.minFilter===$s&&(i.minFilter=ti),new PT(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i,r,l){const f=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(f)}}class yl extends Cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const FT={type:"move"};class zd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new et,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new et),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new et,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new et),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,f=null,h=null;const d=this._targetRay,p=this._grip,g=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(g&&e.hand){h=!0;for(const A of e.hand.values()){const M=i.getJointPose(A,r),y=this._getHandJoint(g,A);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const _=g.joints["index-finger-tip"],m=g.joints["thumb-tip"],x=_.position.distanceTo(m.position),E=.02,T=.005;g.inputState.pinching&&x>E+T?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!g.inputState.pinching&&x<=E-T&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(f=i.getPose(e.gripSpace,r),f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,f.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(f.linearVelocity)):p.hasLinearVelocity=!1,f.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(f.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&f!==null&&(l=f),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(FT)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=f!==null),g!==null&&(g.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new yl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class Kp{constructor(e,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new Te(e),this.density=i}clone(){return new Kp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class BT extends Cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sa,this.environmentIntensity=1,this.environmentRotation=new sa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Pd=new et,HT=new et,GT=new pe;class ps{constructor(e=new et(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Pd.subVectors(r,i).cross(HT.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Pd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/l;return f<0||f>1?null:i.copy(e.start).addScaledVector(r,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||GT.getNormalMatrix(e),l=this.coplanarPoint(Pd).applyMatrix4(e),f=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qs=new Lu,hu=new et;class Qp{constructor(e=new ps,i=new ps,r=new ps,l=new ps,f=new ps,h=new ps){this.planes=[e,i,r,l,f,h]}set(e,i,r,l,f,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(f),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Na){const r=this.planes,l=e.elements,f=l[0],h=l[1],d=l[2],p=l[3],g=l[4],_=l[5],m=l[6],x=l[7],E=l[8],T=l[9],A=l[10],M=l[11],y=l[12],O=l[13],z=l[14],N=l[15];if(r[0].setComponents(p-f,x-g,M-E,N-y).normalize(),r[1].setComponents(p+f,x+g,M+E,N+y).normalize(),r[2].setComponents(p+h,x+_,M+T,N+O).normalize(),r[3].setComponents(p-h,x-_,M-T,N-O).normalize(),r[4].setComponents(p-d,x-m,M-A,N-z).normalize(),i===Na)r[5].setComponents(p+d,x+m,M+A,N+z).normalize();else if(i===Cu)r[5].setComponents(d,m,A,z).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),qs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qs)}intersectsSprite(e){return qs.center.set(0,0,0),qs.radius=.7071067811865476,qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(qs)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(hu.x=l.normal.x>0?e.max.x:e.min.x,hu.y=l.normal.y>0?e.max.y:e.min.y,hu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(hu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jy extends So{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const wu=new et,Du=new et,qv=new tn,xl=new Ou,du=new Lu,Id=new et,Yv=new et;class VT extends Cn{constructor(e=new Ci,i=new jy){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let l=1,f=i.count;l<f;l++)wu.fromBufferAttribute(i,l-1),Du.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=wu.distanceTo(Du);e.setAttribute("lineDistance",new _n(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,f=e.params.Line.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),du.copy(r.boundingSphere),du.applyMatrix4(l),du.radius+=f,e.ray.intersectsSphere(du)===!1)return;qv.copy(l).invert(),xl.copy(e.ray).applyMatrix4(qv);const d=f/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,g=this.isLineSegments?2:1,_=r.index,x=r.attributes.position;if(_!==null){const E=Math.max(0,h.start),T=Math.min(_.count,h.start+h.count);for(let A=E,M=T-1;A<M;A+=g){const y=_.getX(A),O=_.getX(A+1),z=pu(this,e,xl,p,y,O,A);z&&i.push(z)}if(this.isLineLoop){const A=_.getX(T-1),M=_.getX(E),y=pu(this,e,xl,p,A,M,T-1);y&&i.push(y)}}else{const E=Math.max(0,h.start),T=Math.min(x.count,h.start+h.count);for(let A=E,M=T-1;A<M;A+=g){const y=pu(this,e,xl,p,A,A+1,A);y&&i.push(y)}if(this.isLineLoop){const A=pu(this,e,xl,p,T-1,E,T-1);A&&i.push(A)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,h=l.length;f<h;f++){const d=l[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=f}}}}}function pu(o,e,i,r,l,f,h){const d=o.geometry.attributes.position;if(wu.fromBufferAttribute(d,l),Du.fromBufferAttribute(d,f),i.distanceSqToSegment(wu,Du,Id,Yv)>r)return;Id.applyMatrix4(o.matrixWorld);const g=e.ray.origin.distanceTo(Id);if(!(g<e.near||g>e.far))return{distance:g,point:Yv.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}const Wv=new et,Zv=new et;class jT extends VT{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[];for(let l=0,f=i.count;l<f;l+=2)Wv.fromBufferAttribute(i,l),Zv.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+Wv.distanceTo(Zv);e.setAttribute("lineDistance",new _n(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ky extends Gn{constructor(e,i,r,l,f,h,d,p,g){super(e,i,r,l,f,h,d,p,g),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Xy extends Gn{constructor(e,i,r,l,f,h,d,p,g,_=fo){if(_!==fo&&_!==vo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===fo&&(r=tr),r===void 0&&_===vo&&(r=_o),super(null,l,f,h,d,p,_,r,g),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=d!==void 0?d:ki,this.minFilter=p!==void 0?p:ki,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Jp extends Ci{constructor(e=1,i=1,r=1,l=32,f=1,h=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:r,radialSegments:l,heightSegments:f,openEnded:h,thetaStart:d,thetaLength:p};const g=this;l=Math.floor(l),f=Math.floor(f);const _=[],m=[],x=[],E=[];let T=0;const A=[],M=r/2;let y=0;O(),h===!1&&(e>0&&z(!0),i>0&&z(!1)),this.setIndex(_),this.setAttribute("position",new _n(m,3)),this.setAttribute("normal",new _n(x,3)),this.setAttribute("uv",new _n(E,2));function O(){const N=new et,j=new et;let F=0;const P=(i-e)/r;for(let B=0;B<=f;B++){const U=[],C=B/f,H=C*(i-e)+e;for(let it=0;it<=l;it++){const $=it/l,dt=$*p+d,ht=Math.sin(dt),q=Math.cos(dt);j.x=H*ht,j.y=-C*r+M,j.z=H*q,m.push(j.x,j.y,j.z),N.set(ht,P,q).normalize(),x.push(N.x,N.y,N.z),E.push($,1-C),U.push(T++)}A.push(U)}for(let B=0;B<l;B++)for(let U=0;U<f;U++){const C=A[U][B],H=A[U+1][B],it=A[U+1][B+1],$=A[U][B+1];(e>0||U!==0)&&(_.push(C,H,$),F+=3),(i>0||U!==f-1)&&(_.push(H,it,$),F+=3)}g.addGroup(y,F,0),y+=F}function z(N){const j=T,F=new ue,P=new et;let B=0;const U=N===!0?e:i,C=N===!0?1:-1;for(let it=1;it<=l;it++)m.push(0,M*C,0),x.push(0,C,0),E.push(.5,.5),T++;const H=T;for(let it=0;it<=l;it++){const dt=it/l*p+d,ht=Math.cos(dt),q=Math.sin(dt);P.x=U*q,P.y=M*C,P.z=U*ht,m.push(P.x,P.y,P.z),x.push(0,C,0),F.x=ht*.5+.5,F.y=q*.5*C+.5,E.push(F.x,F.y),T++}for(let it=0;it<l;it++){const $=j+it,dt=H+it;N===!0?_.push(dt,dt+1,$):_.push(dt+1,dt,$),B+=3}g.addGroup(y,B,N===!0?1:2),y+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jp(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Cl extends Ci{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const f=e/2,h=i/2,d=Math.floor(r),p=Math.floor(l),g=d+1,_=p+1,m=e/d,x=i/p,E=[],T=[],A=[],M=[];for(let y=0;y<_;y++){const O=y*x-h;for(let z=0;z<g;z++){const N=z*m-f;T.push(N,-O,0),A.push(0,0,1),M.push(z/d),M.push(1-y/p)}}for(let y=0;y<p;y++)for(let O=0;O<d;O++){const z=O+g*y,N=O+g*(y+1),j=O+1+g*(y+1),F=O+1+g*y;E.push(z,N,F),E.push(N,j,F)}this.setIndex(E),this.setAttribute("position",new _n(T,3)),this.setAttribute("normal",new _n(A,3)),this.setAttribute("uv",new _n(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cl(e.width,e.height,e.widthSegments,e.heightSegments)}}class $p extends Ci{constructor(e=.5,i=1,r=32,l=1,f=0,h=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:i,thetaSegments:r,phiSegments:l,thetaStart:f,thetaLength:h},r=Math.max(3,r),l=Math.max(1,l);const d=[],p=[],g=[],_=[];let m=e;const x=(i-e)/l,E=new et,T=new ue;for(let A=0;A<=l;A++){for(let M=0;M<=r;M++){const y=f+M/r*h;E.x=m*Math.cos(y),E.y=m*Math.sin(y),p.push(E.x,E.y,E.z),g.push(0,0,1),T.x=(E.x/i+1)/2,T.y=(E.y/i+1)/2,_.push(T.x,T.y)}m+=x}for(let A=0;A<l;A++){const M=A*(r+1);for(let y=0;y<r;y++){const O=y+M,z=O,N=O+r+1,j=O+r+2,F=O+1;d.push(z,N,F),d.push(N,j,F)}}this.setIndex(d),this.setAttribute("position",new _n(p,3)),this.setAttribute("normal",new _n(g,3)),this.setAttribute("uv",new _n(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $p(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class tm extends Ci{constructor(e=1,i=32,r=16,l=0,f=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:f,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const p=Math.min(h+d,Math.PI);let g=0;const _=[],m=new et,x=new et,E=[],T=[],A=[],M=[];for(let y=0;y<=r;y++){const O=[],z=y/r;let N=0;y===0&&h===0?N=.5/i:y===r&&p===Math.PI&&(N=-.5/i);for(let j=0;j<=i;j++){const F=j/i;m.x=-e*Math.cos(l+F*f)*Math.sin(h+z*d),m.y=e*Math.cos(h+z*d),m.z=e*Math.sin(l+F*f)*Math.sin(h+z*d),T.push(m.x,m.y,m.z),x.copy(m).normalize(),A.push(x.x,x.y,x.z),M.push(F+N,1-z),O.push(g++)}_.push(O)}for(let y=0;y<r;y++)for(let O=0;O<i;O++){const z=_[y][O+1],N=_[y][O],j=_[y+1][O],F=_[y+1][O+1];(y!==0||h>0)&&E.push(z,N,F),(y!==r-1||p<Math.PI)&&E.push(N,j,F)}this.setIndex(E),this.setAttribute("position",new _n(T,3)),this.setAttribute("normal",new _n(A,3)),this.setAttribute("uv",new _n(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tm(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Fd extends So{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ly,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sa,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class kT extends So{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class XT extends So{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Kv={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class qT{constructor(e,i,r){const l=this;let f=!1,h=0,d=0,p;const g=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=r,this.itemStart=function(_){d++,f===!1&&l.onStart!==void 0&&l.onStart(_,h,d),f=!0},this.itemEnd=function(_){h++,l.onProgress!==void 0&&l.onProgress(_,h,d),h===d&&(f=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(_){l.onError!==void 0&&l.onError(_)},this.resolveURL=function(_){return p?p(_):_},this.setURLModifier=function(_){return p=_,this},this.addHandler=function(_,m){return g.push(_,m),this},this.removeHandler=function(_){const m=g.indexOf(_);return m!==-1&&g.splice(m,2),this},this.getHandler=function(_){for(let m=0,x=g.length;m<x;m+=2){const E=g[m],T=g[m+1];if(E.global&&(E.lastIndex=0),E.test(_))return T}return null}}}const YT=new qT;class em{constructor(e){this.manager=e!==void 0?e:YT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,i){const r=this;return new Promise(function(l,f){r.load(e,l,i,f)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}em.DEFAULT_MATERIAL_NAME="__DEFAULT";class WT extends em{constructor(e){super(e)}load(e,i,r,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const f=this,h=Kv.get(e);if(h!==void 0)return f.manager.itemStart(e),setTimeout(function(){i&&i(h),f.manager.itemEnd(e)},0),h;const d=El("img");function p(){_(),Kv.add(e,this),i&&i(this),f.manager.itemEnd(e)}function g(m){_(),l&&l(m),f.manager.itemError(e),f.manager.itemEnd(e)}function _(){d.removeEventListener("load",p,!1),d.removeEventListener("error",g,!1)}return d.addEventListener("load",p,!1),d.addEventListener("error",g,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),f.manager.itemStart(e),d.src=e,d}}class ZT extends em{constructor(e){super(e)}load(e,i,r,l){const f=new Gn,h=new WT(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(e,function(d){f.image=d,f.needsUpdate=!0,i!==void 0&&i(f)},r,l),f}}class nm extends Cn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class KT extends nm{constructor(e,i,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}}const Bd=new tn,Qv=new et,Jv=new et;class QT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qp,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;Qv.setFromMatrixPosition(e.matrixWorld),i.position.copy(Qv),Jv.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(Jv),i.updateMatrixWorld(),Bd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bd),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Bd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class qy extends Gy{constructor(e=-1,i=1,r=1,l=-1,f=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=f,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,f,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let f=r-e,h=r+e,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=g*this.view.offsetX,h=f+g*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(f,h,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class JT extends QT{constructor(){super(new qy(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $T extends nm{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.target=new Cn,this.shadow=new JT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class tb extends nm{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class eb extends Ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}const $v=new tn;class nb{constructor(e,i,r=0,l=1/0){this.ray=new Ou(e,i),this.near=r,this.far=l,this.camera=null,this.layers=new Wp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return $v.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($v),this}intersectObject(e,i=!0,r=[]){return Op(e,this,r,i),r.sort(tx),r}intersectObjects(e,i=!0,r=[]){for(let l=0,f=e.length;l<f;l++)Op(e[l],this,r,i);return r.sort(tx),r}}function tx(o,e){return o.distance-e.distance}function Op(o,e,i,r){let l=!0;if(o.layers.test(e.layers)&&o.raycast(e,i)===!1&&(l=!1),l===!0&&r===!0){const f=o.children;for(let h=0,d=f.length;h<d;h++)Op(f[h],e,i,!0)}}class ex{constructor(e=1,i=0,r=0){this.radius=e,this.phi=i,this.theta=r}set(e,i,r){return this.radius=e,this.phi=i,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ee(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,r){return this.radius=Math.sqrt(e*e+i*i+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Ee(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class ib extends jT{constructor(e=10,i=10,r=4473924,l=8947848){r=new Te(r),l=new Te(l);const f=i/2,h=e/i,d=e/2,p=[],g=[];for(let x=0,E=0,T=-d;x<=i;x++,T+=h){p.push(-d,0,T,d,0,T),p.push(T,0,-d,T,0,d);const A=x===f?r:l;A.toArray(g,E),E+=3,A.toArray(g,E),E+=3,A.toArray(g,E),E+=3,A.toArray(g,E),E+=3}const _=new Ci;_.setAttribute("position",new _n(p,3)),_.setAttribute("color",new _n(g,3));const m=new jy({vertexColors:!0,toneMapped:!1});super(_,m),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class ab extends ir{constructor(e,i=null){super(),this.object=e,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function nx(o,e,i,r){const l=sb(r);switch(i){case Ay:return o*e;case Cy:return o*e;case wy:return o*e*2;case Dy:return o*e/l.components*l.byteLength;case kp:return o*e/l.components*l.byteLength;case Ny:return o*e*2/l.components*l.byteLength;case Xp:return o*e*2/l.components*l.byteLength;case Ry:return o*e*3/l.components*l.byteLength;case ji:return o*e*4/l.components*l.byteLength;case qp:return o*e*4/l.components*l.byteLength;case xu:case yu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Su:case Mu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case lp:case up:return Math.max(o,16)*Math.max(e,8)/4;case op:case cp:return Math.max(o,8)*Math.max(e,8)/2;case fp:case hp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case dp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case pp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case mp:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case gp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case _p:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case vp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case xp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case yp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Sp:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Mp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Ep:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Tp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case bp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Ap:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Rp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Eu:case Cp:case wp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Uy:case Dp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Np:case Up:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function sb(o){switch(o){case La:case Ey:return{byteLength:1,components:1};case Ml:case Ty:case Tl:return{byteLength:2,components:1};case Vp:case jp:return{byteLength:2,components:4};case tr:case Gp:case Da:return{byteLength:4,components:1};case by:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Yy(){let o=null,e=!1,i=null,r=null;function l(f,h){i(f,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(f){i=f},setContext:function(f){o=f}}}function rb(o){const e=new WeakMap;function i(d,p){const g=d.array,_=d.usage,m=g.byteLength,x=o.createBuffer();o.bindBuffer(p,x),o.bufferData(p,g,_),d.onUploadCallback();let E;if(g instanceof Float32Array)E=o.FLOAT;else if(g instanceof Uint16Array)d.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(g instanceof Int16Array)E=o.SHORT;else if(g instanceof Uint32Array)E=o.UNSIGNED_INT;else if(g instanceof Int32Array)E=o.INT;else if(g instanceof Int8Array)E=o.BYTE;else if(g instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:x,type:E,bytesPerElement:g.BYTES_PER_ELEMENT,version:d.version,size:m}}function r(d,p,g){const _=p.array,m=p.updateRanges;if(o.bindBuffer(g,d),m.length===0)o.bufferSubData(g,0,_);else{m.sort((E,T)=>E.start-T.start);let x=0;for(let E=1;E<m.length;E++){const T=m[x],A=m[E];A.start<=T.start+T.count+1?T.count=Math.max(T.count,A.start+A.count-T.start):(++x,m[x]=A)}m.length=x+1;for(let E=0,T=m.length;E<T;E++){const A=m[E];o.bufferSubData(g,A.start*_.BYTES_PER_ELEMENT,_,A.start,A.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function f(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(o.deleteBuffer(p.buffer),e.delete(d))}function h(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const g=e.get(d);if(g===void 0)e.set(d,i(d,p));else if(g.version<d.version){if(g.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(g.buffer,d,p),g.version=d.version}}return{get:l,remove:f,update:h}}var ob=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lb=`#ifdef USE_ALPHAHASH
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
#endif`,cb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ub=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,db=`#ifdef USE_AOMAP
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
#endif`,pb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mb=`#ifdef USE_BATCHING
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
#endif`,gb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_b=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yb=`#ifdef USE_IRIDESCENCE
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
#endif`,Sb=`#ifdef USE_BUMPMAP
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
#endif`,Mb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Eb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ab=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Db=`#define PI 3.141592653589793
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
} // validated`,Nb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ub=`vec3 transformedNormal = objectNormal;
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
#endif`,Lb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ob=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ib="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bb=`#ifdef USE_ENVMAP
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
#endif`,Hb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gb=`#ifdef USE_ENVMAP
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
#endif`,Vb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jb=`#ifdef USE_ENVMAP
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
#endif`,kb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wb=`#ifdef USE_GRADIENTMAP
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
}`,Zb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jb=`uniform bool receiveShadow;
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
#endif`,$b=`#ifdef USE_ENVMAP
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
#endif`,tA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,aA=`PhysicalMaterial material;
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
#endif`,sA=`struct PhysicalMaterial {
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
}`,rA=`
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
#endif`,oA=`#if defined( RE_IndirectDiffuse )
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
#endif`,lA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cA=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uA=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fA=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hA=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gA=`#if defined( USE_POINTS_UV )
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
#endif`,_A=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,SA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,MA=`#ifdef USE_MORPHTARGETS
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
#endif`,EA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,AA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wA=`#ifdef USE_NORMALMAP
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
#endif`,DA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,NA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,UA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,LA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,OA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,PA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,IA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,FA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,BA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,HA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,GA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,VA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,XA=`float getShadowMask() {
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
}`,qA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,YA=`#ifdef USE_SKINNING
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
#endif`,WA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ZA=`#ifdef USE_SKINNING
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
#endif`,KA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,QA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,JA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$A=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,t2=`#ifdef USE_TRANSMISSION
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
#endif`,e2=`#ifdef USE_TRANSMISSION
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
#endif`,n2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const r2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,o2=`uniform sampler2D t2D;
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
}`,l2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,u2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h2=`#include <common>
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
}`,d2=`#if DEPTH_PACKING == 3200
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
}`,p2=`#define DISTANCE
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
}`,m2=`#define DISTANCE
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
}`,g2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v2=`uniform float scale;
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
}`,x2=`uniform vec3 diffuse;
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
}`,y2=`#include <common>
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
}`,S2=`uniform vec3 diffuse;
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
}`,M2=`#define LAMBERT
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
}`,E2=`#define LAMBERT
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
}`,T2=`#define MATCAP
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
}`,b2=`#define MATCAP
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
}`,A2=`#define NORMAL
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
}`,R2=`#define NORMAL
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
}`,C2=`#define PHONG
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
}`,w2=`#define PHONG
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
}`,D2=`#define STANDARD
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
}`,N2=`#define STANDARD
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
}`,U2=`#define TOON
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
}`,L2=`#define TOON
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
}`,O2=`uniform float size;
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
}`,z2=`uniform vec3 diffuse;
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
}`,P2=`#include <common>
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
}`,I2=`uniform vec3 color;
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
}`,F2=`uniform float rotation;
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
}`,B2=`uniform vec3 diffuse;
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
}`,ge={alphahash_fragment:ob,alphahash_pars_fragment:lb,alphamap_fragment:cb,alphamap_pars_fragment:ub,alphatest_fragment:fb,alphatest_pars_fragment:hb,aomap_fragment:db,aomap_pars_fragment:pb,batching_pars_vertex:mb,batching_vertex:gb,begin_vertex:_b,beginnormal_vertex:vb,bsdfs:xb,iridescence_fragment:yb,bumpmap_pars_fragment:Sb,clipping_planes_fragment:Mb,clipping_planes_pars_fragment:Eb,clipping_planes_pars_vertex:Tb,clipping_planes_vertex:bb,color_fragment:Ab,color_pars_fragment:Rb,color_pars_vertex:Cb,color_vertex:wb,common:Db,cube_uv_reflection_fragment:Nb,defaultnormal_vertex:Ub,displacementmap_pars_vertex:Lb,displacementmap_vertex:Ob,emissivemap_fragment:zb,emissivemap_pars_fragment:Pb,colorspace_fragment:Ib,colorspace_pars_fragment:Fb,envmap_fragment:Bb,envmap_common_pars_fragment:Hb,envmap_pars_fragment:Gb,envmap_pars_vertex:Vb,envmap_physical_pars_fragment:$b,envmap_vertex:jb,fog_vertex:kb,fog_pars_vertex:Xb,fog_fragment:qb,fog_pars_fragment:Yb,gradientmap_pars_fragment:Wb,lightmap_pars_fragment:Zb,lights_lambert_fragment:Kb,lights_lambert_pars_fragment:Qb,lights_pars_begin:Jb,lights_toon_fragment:tA,lights_toon_pars_fragment:eA,lights_phong_fragment:nA,lights_phong_pars_fragment:iA,lights_physical_fragment:aA,lights_physical_pars_fragment:sA,lights_fragment_begin:rA,lights_fragment_maps:oA,lights_fragment_end:lA,logdepthbuf_fragment:cA,logdepthbuf_pars_fragment:uA,logdepthbuf_pars_vertex:fA,logdepthbuf_vertex:hA,map_fragment:dA,map_pars_fragment:pA,map_particle_fragment:mA,map_particle_pars_fragment:gA,metalnessmap_fragment:_A,metalnessmap_pars_fragment:vA,morphinstance_vertex:xA,morphcolor_vertex:yA,morphnormal_vertex:SA,morphtarget_pars_vertex:MA,morphtarget_vertex:EA,normal_fragment_begin:TA,normal_fragment_maps:bA,normal_pars_fragment:AA,normal_pars_vertex:RA,normal_vertex:CA,normalmap_pars_fragment:wA,clearcoat_normal_fragment_begin:DA,clearcoat_normal_fragment_maps:NA,clearcoat_pars_fragment:UA,iridescence_pars_fragment:LA,opaque_fragment:OA,packing:zA,premultiplied_alpha_fragment:PA,project_vertex:IA,dithering_fragment:FA,dithering_pars_fragment:BA,roughnessmap_fragment:HA,roughnessmap_pars_fragment:GA,shadowmap_pars_fragment:VA,shadowmap_pars_vertex:jA,shadowmap_vertex:kA,shadowmask_pars_fragment:XA,skinbase_vertex:qA,skinning_pars_vertex:YA,skinning_vertex:WA,skinnormal_vertex:ZA,specularmap_fragment:KA,specularmap_pars_fragment:QA,tonemapping_fragment:JA,tonemapping_pars_fragment:$A,transmission_fragment:t2,transmission_pars_fragment:e2,uv_pars_fragment:n2,uv_pars_vertex:i2,uv_vertex:a2,worldpos_vertex:s2,background_vert:r2,background_frag:o2,backgroundCube_vert:l2,backgroundCube_frag:c2,cube_vert:u2,cube_frag:f2,depth_vert:h2,depth_frag:d2,distanceRGBA_vert:p2,distanceRGBA_frag:m2,equirect_vert:g2,equirect_frag:_2,linedashed_vert:v2,linedashed_frag:x2,meshbasic_vert:y2,meshbasic_frag:S2,meshlambert_vert:M2,meshlambert_frag:E2,meshmatcap_vert:T2,meshmatcap_frag:b2,meshnormal_vert:A2,meshnormal_frag:R2,meshphong_vert:C2,meshphong_frag:w2,meshphysical_vert:D2,meshphysical_frag:N2,meshtoon_vert:U2,meshtoon_frag:L2,points_vert:O2,points_frag:z2,shadow_vert:P2,shadow_frag:I2,sprite_vert:F2,sprite_frag:B2},Bt={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},na={basic:{uniforms:qn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:qn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new Te(0)}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:qn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:qn([Bt.common,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.roughnessmap,Bt.metalnessmap,Bt.fog,Bt.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:qn([Bt.common,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.gradientmap,Bt.fog,Bt.lights,{emissive:{value:new Te(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:qn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:qn([Bt.points,Bt.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:qn([Bt.common,Bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:qn([Bt.common,Bt.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:qn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:qn([Bt.sprite,Bt.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distanceRGBA:{uniforms:qn([Bt.common,Bt.displacementmap,{referencePosition:{value:new et},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distanceRGBA_vert,fragmentShader:ge.distanceRGBA_frag},shadow:{uniforms:qn([Bt.lights,Bt.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};na.physical={uniforms:qn([na.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};const mu={r:0,b:0,g:0},Ys=new sa,H2=new tn;function G2(o,e,i,r,l,f,h){const d=new Te(0);let p=f===!0?0:1,g,_,m=null,x=0,E=null;function T(z){let N=z.isScene===!0?z.background:null;return N&&N.isTexture&&(N=(z.backgroundBlurriness>0?i:e).get(N)),N}function A(z){let N=!1;const j=T(z);j===null?y(d,p):j&&j.isColor&&(y(j,1),N=!0);const F=o.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,h):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||N)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(z,N){const j=T(N);j&&(j.isCubeTexture||j.mapping===Uu)?(_===void 0&&(_=new pi(new Rl(1,1,1),new xs({name:"BackgroundCubeMaterial",uniforms:yo(na.backgroundCube.uniforms),vertexShader:na.backgroundCube.vertexShader,fragmentShader:na.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(F,P,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),Ys.copy(N.backgroundRotation),Ys.x*=-1,Ys.y*=-1,Ys.z*=-1,j.isCubeTexture&&j.isRenderTargetTexture===!1&&(Ys.y*=-1,Ys.z*=-1),_.material.uniforms.envMap.value=j,_.material.uniforms.flipEnvMap.value=j.isCubeTexture&&j.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(H2.makeRotationFromEuler(Ys)),_.material.toneMapped=ze.getTransfer(j.colorSpace)!==Ve,(m!==j||x!==j.version||E!==o.toneMapping)&&(_.material.needsUpdate=!0,m=j,x=j.version,E=o.toneMapping),_.layers.enableAll(),z.unshift(_,_.geometry,_.material,0,0,null)):j&&j.isTexture&&(g===void 0&&(g=new pi(new Cl(2,2),new xs({name:"BackgroundMaterial",uniforms:yo(na.background.uniforms),vertexShader:na.background.vertexShader,fragmentShader:na.background.fragmentShader,side:vs,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(g)),g.material.uniforms.t2D.value=j,g.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,g.material.toneMapped=ze.getTransfer(j.colorSpace)!==Ve,j.matrixAutoUpdate===!0&&j.updateMatrix(),g.material.uniforms.uvTransform.value.copy(j.matrix),(m!==j||x!==j.version||E!==o.toneMapping)&&(g.material.needsUpdate=!0,m=j,x=j.version,E=o.toneMapping),g.layers.enableAll(),z.unshift(g,g.geometry,g.material,0,0,null))}function y(z,N){z.getRGB(mu,Hy(o)),r.buffers.color.setClear(mu.r,mu.g,mu.b,N,h)}function O(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return d},setClearColor:function(z,N=1){d.set(z),p=N,y(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(z){p=z,y(d,p)},render:A,addToRenderList:M,dispose:O}}function V2(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=x(null);let f=l,h=!1;function d(C,H,it,$,dt){let ht=!1;const q=m($,it,H);f!==q&&(f=q,g(f.object)),ht=E(C,$,it,dt),ht&&T(C,$,it,dt),dt!==null&&e.update(dt,o.ELEMENT_ARRAY_BUFFER),(ht||h)&&(h=!1,N(C,H,it,$),dt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(dt).buffer))}function p(){return o.createVertexArray()}function g(C){return o.bindVertexArray(C)}function _(C){return o.deleteVertexArray(C)}function m(C,H,it){const $=it.wireframe===!0;let dt=r[C.id];dt===void 0&&(dt={},r[C.id]=dt);let ht=dt[H.id];ht===void 0&&(ht={},dt[H.id]=ht);let q=ht[$];return q===void 0&&(q=x(p()),ht[$]=q),q}function x(C){const H=[],it=[],$=[];for(let dt=0;dt<i;dt++)H[dt]=0,it[dt]=0,$[dt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:it,attributeDivisors:$,object:C,attributes:{},index:null}}function E(C,H,it,$){const dt=f.attributes,ht=H.attributes;let q=0;const lt=it.getAttributes();for(const X in lt)if(lt[X].location>=0){const yt=dt[X];let wt=ht[X];if(wt===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(wt=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(wt=C.instanceColor)),yt===void 0||yt.attribute!==wt||wt&&yt.data!==wt.data)return!0;q++}return f.attributesNum!==q||f.index!==$}function T(C,H,it,$){const dt={},ht=H.attributes;let q=0;const lt=it.getAttributes();for(const X in lt)if(lt[X].location>=0){let yt=ht[X];yt===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(yt=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(yt=C.instanceColor));const wt={};wt.attribute=yt,yt&&yt.data&&(wt.data=yt.data),dt[X]=wt,q++}f.attributes=dt,f.attributesNum=q,f.index=$}function A(){const C=f.newAttributes;for(let H=0,it=C.length;H<it;H++)C[H]=0}function M(C){y(C,0)}function y(C,H){const it=f.newAttributes,$=f.enabledAttributes,dt=f.attributeDivisors;it[C]=1,$[C]===0&&(o.enableVertexAttribArray(C),$[C]=1),dt[C]!==H&&(o.vertexAttribDivisor(C,H),dt[C]=H)}function O(){const C=f.newAttributes,H=f.enabledAttributes;for(let it=0,$=H.length;it<$;it++)H[it]!==C[it]&&(o.disableVertexAttribArray(it),H[it]=0)}function z(C,H,it,$,dt,ht,q){q===!0?o.vertexAttribIPointer(C,H,it,dt,ht):o.vertexAttribPointer(C,H,it,$,dt,ht)}function N(C,H,it,$){A();const dt=$.attributes,ht=it.getAttributes(),q=H.defaultAttributeValues;for(const lt in ht){const X=ht[lt];if(X.location>=0){let xt=dt[lt];if(xt===void 0&&(lt==="instanceMatrix"&&C.instanceMatrix&&(xt=C.instanceMatrix),lt==="instanceColor"&&C.instanceColor&&(xt=C.instanceColor)),xt!==void 0){const yt=xt.normalized,wt=xt.itemSize,Ft=e.get(xt);if(Ft===void 0)continue;const Wt=Ft.buffer,D=Ft.type,W=Ft.bytesPerElement,ct=D===o.INT||D===o.UNSIGNED_INT||xt.gpuType===Gp;if(xt.isInterleavedBufferAttribute){const ft=xt.data,Mt=ft.stride,Ht=xt.offset;if(ft.isInstancedInterleavedBuffer){for(let Dt=0;Dt<X.locationSize;Dt++)y(X.location+Dt,ft.meshPerAttribute);C.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Dt=0;Dt<X.locationSize;Dt++)M(X.location+Dt);o.bindBuffer(o.ARRAY_BUFFER,Wt);for(let Dt=0;Dt<X.locationSize;Dt++)z(X.location+Dt,wt/X.locationSize,D,yt,Mt*W,(Ht+wt/X.locationSize*Dt)*W,ct)}else{if(xt.isInstancedBufferAttribute){for(let ft=0;ft<X.locationSize;ft++)y(X.location+ft,xt.meshPerAttribute);C.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let ft=0;ft<X.locationSize;ft++)M(X.location+ft);o.bindBuffer(o.ARRAY_BUFFER,Wt);for(let ft=0;ft<X.locationSize;ft++)z(X.location+ft,wt/X.locationSize,D,yt,wt*W,wt/X.locationSize*ft*W,ct)}}else if(q!==void 0){const yt=q[lt];if(yt!==void 0)switch(yt.length){case 2:o.vertexAttrib2fv(X.location,yt);break;case 3:o.vertexAttrib3fv(X.location,yt);break;case 4:o.vertexAttrib4fv(X.location,yt);break;default:o.vertexAttrib1fv(X.location,yt)}}}}O()}function j(){B();for(const C in r){const H=r[C];for(const it in H){const $=H[it];for(const dt in $)_($[dt].object),delete $[dt];delete H[it]}delete r[C]}}function F(C){if(r[C.id]===void 0)return;const H=r[C.id];for(const it in H){const $=H[it];for(const dt in $)_($[dt].object),delete $[dt];delete H[it]}delete r[C.id]}function P(C){for(const H in r){const it=r[H];if(it[C.id]===void 0)continue;const $=it[C.id];for(const dt in $)_($[dt].object),delete $[dt];delete it[C.id]}}function B(){U(),h=!0,f!==l&&(f=l,g(f.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:B,resetDefaultState:U,dispose:j,releaseStatesOfGeometry:F,releaseStatesOfProgram:P,initAttributes:A,enableAttribute:M,disableUnusedAttributes:O}}function j2(o,e,i){let r;function l(g){r=g}function f(g,_){o.drawArrays(r,g,_),i.update(_,r,1)}function h(g,_,m){m!==0&&(o.drawArraysInstanced(r,g,_,m),i.update(_,r,m))}function d(g,_,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,g,0,_,0,m);let E=0;for(let T=0;T<m;T++)E+=_[T];i.update(E,r,1)}function p(g,_,m,x){if(m===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let T=0;T<g.length;T++)h(g[T],_[T],x[T]);else{E.multiDrawArraysInstancedWEBGL(r,g,0,_,0,x,0,m);let T=0;for(let A=0;A<m;A++)T+=_[A]*x[A];i.update(T,r,1)}}this.setMode=l,this.render=f,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function k2(o,e,i,r){let l;function f(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(P){return!(P!==ji&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const B=P===Tl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==La&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Da&&!B)}function p(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=i.precision!==void 0?i.precision:"highp";const _=p(g);_!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",_,"instead."),g=_);const m=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),O=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),z=o.getParameter(o.MAX_VARYING_VECTORS),N=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),j=T>0,F=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:d,precision:g,logarithmicDepthBuffer:m,reverseDepthBuffer:x,maxTextures:E,maxVertexTextures:T,maxTextureSize:A,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:O,maxVaryings:z,maxFragmentUniforms:N,vertexTextures:j,maxSamples:F}}function X2(o){const e=this;let i=null,r=0,l=!1,f=!1;const h=new ps,d=new pe,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(m,x){const E=m.length!==0||x||r!==0||l;return l=x,r=m.length,E},this.beginShadows=function(){f=!0,_(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(m,x){i=_(m,x,0)},this.setState=function(m,x,E){const T=m.clippingPlanes,A=m.clipIntersection,M=m.clipShadows,y=o.get(m);if(!l||T===null||T.length===0||f&&!M)f?_(null):g();else{const O=f?0:r,z=O*4;let N=y.clippingState||null;p.value=N,N=_(T,x,z,E);for(let j=0;j!==z;++j)N[j]=i[j];y.clippingState=N,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=O}};function g(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(m,x,E,T){const A=m!==null?m.length:0;let M=null;if(A!==0){if(M=p.value,T!==!0||M===null){const y=E+A*4,O=x.matrixWorldInverse;d.getNormalMatrix(O),(M===null||M.length<y)&&(M=new Float32Array(y));for(let z=0,N=E;z!==A;++z,N+=4)h.copy(m[z]).applyMatrix4(O,d),h.normal.toArray(M,N),M[N+3]=h.constant}p.value=M,p.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,M}}function q2(o){let e=new WeakMap;function i(h,d){return d===ip?h.mapping=mo:d===ap&&(h.mapping=go),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===ip||d===ap)if(e.has(h)){const p=e.get(h).texture;return i(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const g=new IT(p.height);return g.fromEquirectangularTexture(o,h),e.set(h,g),h.addEventListener("dispose",l),i(g.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function f(){e=new WeakMap}return{get:r,dispose:f}}const lo=4,ix=[.125,.215,.35,.446,.526,.582],Js=20,Hd=new qy,ax=new Te;let Gd=null,Vd=0,jd=0,kd=!1;const Ks=(1+Math.sqrt(5))/2,ro=1/Ks,sx=[new et(-Ks,ro,0),new et(Ks,ro,0),new et(-ro,0,Ks),new et(ro,0,Ks),new et(0,Ks,-ro),new et(0,Ks,ro),new et(-1,1,-1),new et(1,1,-1),new et(-1,1,1),new et(1,1,1)],Y2=new et;class rx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,f={}){const{size:h=256,position:d=Y2}=f;Gd=this._renderer.getRenderTarget(),Vd=this._renderer.getActiveCubeFace(),jd=this._renderer.getActiveMipmapLevel(),kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Gd,Vd,jd),this._renderer.xr.enabled=kd,e.scissorTest=!1,gu(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===mo||e.mapping===go?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gd=this._renderer.getRenderTarget(),Vd=this._renderer.getActiveCubeFace(),jd=this._renderer.getActiveMipmapLevel(),kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:ti,minFilter:ti,generateMipmaps:!1,type:Tl,format:ji,colorSpace:xo,depthBuffer:!1},l=ox(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ox(e,i,r);const{_lodMax:f}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=W2(f)),this._blurMaterial=Z2(f,e,i)}return l}_compileMaterial(e){const i=new pi(this._lodPlanes[0],e);this._renderer.compile(i,Hd)}_sceneToCubeUV(e,i,r,l,f){const p=new Ri(90,1,i,r),g=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],m=this._renderer,x=m.autoClear,E=m.toneMapping;m.getClearColor(ax),m.toneMapping=_s,m.autoClear=!1;const T=new Zp({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1}),A=new pi(new Rl,T);let M=!1;const y=e.background;y?y.isColor&&(T.color.copy(y),e.background=null,M=!0):(T.color.copy(ax),M=!0);for(let O=0;O<6;O++){const z=O%3;z===0?(p.up.set(0,g[O],0),p.position.set(f.x,f.y,f.z),p.lookAt(f.x+_[O],f.y,f.z)):z===1?(p.up.set(0,0,g[O]),p.position.set(f.x,f.y,f.z),p.lookAt(f.x,f.y+_[O],f.z)):(p.up.set(0,g[O],0),p.position.set(f.x,f.y,f.z),p.lookAt(f.x,f.y,f.z+_[O]));const N=this._cubeSize;gu(l,z*N,O>2?N:0,N,N),m.setRenderTarget(l),M&&m.render(A,p),m.render(e,p)}A.geometry.dispose(),A.material.dispose(),m.toneMapping=E,m.autoClear=x,e.background=y}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===mo||e.mapping===go;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=cx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lx());const f=l?this._cubemapMaterial:this._equirectMaterial,h=new pi(this._lodPlanes[0],f),d=f.uniforms;d.envMap.value=e;const p=this._cubeSize;gu(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(h,Hd)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let f=1;f<l;f++){const h=Math.sqrt(this._sigmas[f]*this._sigmas[f]-this._sigmas[f-1]*this._sigmas[f-1]),d=sx[(l-f-1)%sx.length];this._blur(e,f-1,f,h,d)}i.autoClear=r}_blur(e,i,r,l,f){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",f),this._halfBlur(h,e,r,r,l,"longitudinal",f)}_halfBlur(e,i,r,l,f,h,d){const p=this._renderer,g=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,m=new pi(this._lodPlanes[l],g),x=g.uniforms,E=this._sizeLods[r]-1,T=isFinite(f)?Math.PI/(2*E):2*Math.PI/(2*Js-1),A=f/T,M=isFinite(f)?1+Math.floor(_*A):Js;M>Js&&console.warn(`sigmaRadians, ${f}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Js}`);const y=[];let O=0;for(let P=0;P<Js;++P){const B=P/A,U=Math.exp(-B*B/2);y.push(U),P===0?O+=U:P<M&&(O+=2*U)}for(let P=0;P<y.length;P++)y[P]=y[P]/O;x.envMap.value=e.texture,x.samples.value=M,x.weights.value=y,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:z}=this;x.dTheta.value=T,x.mipInt.value=z-r;const N=this._sizeLods[l],j=3*N*(l>z-lo?l-z+lo:0),F=4*(this._cubeSize-N);gu(i,j,F,3*N,2*N),p.setRenderTarget(i),p.render(m,Hd)}}function W2(o){const e=[],i=[],r=[];let l=o;const f=o-lo+1+ix.length;for(let h=0;h<f;h++){const d=Math.pow(2,l);i.push(d);let p=1/d;h>o-lo?p=ix[h-o+lo-1]:h===0&&(p=0),r.push(p);const g=1/(d-2),_=-g,m=1+g,x=[_,_,m,_,m,m,_,_,m,m,_,m],E=6,T=6,A=3,M=2,y=1,O=new Float32Array(A*T*E),z=new Float32Array(M*T*E),N=new Float32Array(y*T*E);for(let F=0;F<E;F++){const P=F%3*2/3-1,B=F>2?0:-1,U=[P,B,0,P+2/3,B,0,P+2/3,B+1,0,P,B,0,P+2/3,B+1,0,P,B+1,0];O.set(U,A*T*F),z.set(x,M*T*F);const C=[F,F,F,F,F,F];N.set(C,y*T*F)}const j=new Ci;j.setAttribute("position",new aa(O,A)),j.setAttribute("uv",new aa(z,M)),j.setAttribute("faceIndex",new aa(N,y)),e.push(j),l>lo&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function ox(o,e,i){const r=new er(o,e,i);return r.texture.mapping=Uu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function gu(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function Z2(o,e,i){const r=new Float32Array(Js),l=new et(0,1,0);return new xs({name:"SphericalGaussianBlur",defines:{n:Js,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:im(),fragmentShader:`

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
		`,blending:gs,depthTest:!1,depthWrite:!1})}function lx(){return new xs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:im(),fragmentShader:`

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
		`,blending:gs,depthTest:!1,depthWrite:!1})}function cx(){return new xs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:im(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gs,depthTest:!1,depthWrite:!1})}function im(){return`

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
	`}function K2(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const p=d.mapping,g=p===ip||p===ap,_=p===mo||p===go;if(g||_){let m=e.get(d);const x=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new rx(o)),m=g?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{const E=d.image;return g&&E&&E.height>0||_&&E&&l(E)?(i===null&&(i=new rx(o)),m=g?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",f),m.texture):null}}}return d}function l(d){let p=0;const g=6;for(let _=0;_<g;_++)d[_]!==void 0&&p++;return p===g}function f(d){const p=d.target;p.removeEventListener("dispose",f);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function Q2(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Zs("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function J2(o,e,i,r){const l={},f=new WeakMap;function h(m){const x=m.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);x.removeEventListener("dispose",h),delete l[x.id];const E=f.get(x);E&&(e.remove(E),f.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(m,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function p(m){const x=m.attributes;for(const E in x)e.update(x[E],o.ARRAY_BUFFER)}function g(m){const x=[],E=m.index,T=m.attributes.position;let A=0;if(E!==null){const O=E.array;A=E.version;for(let z=0,N=O.length;z<N;z+=3){const j=O[z+0],F=O[z+1],P=O[z+2];x.push(j,F,F,P,P,j)}}else if(T!==void 0){const O=T.array;A=T.version;for(let z=0,N=O.length/3-1;z<N;z+=3){const j=z+0,F=z+1,P=z+2;x.push(j,F,F,P,P,j)}}else return;const M=new(zy(x)?By:Fy)(x,1);M.version=A;const y=f.get(m);y&&e.remove(y),f.set(m,M)}function _(m){const x=f.get(m);if(x){const E=m.index;E!==null&&x.version<E.version&&g(m)}else g(m);return f.get(m)}return{get:d,update:p,getWireframeAttribute:_}}function $2(o,e,i){let r;function l(x){r=x}let f,h;function d(x){f=x.type,h=x.bytesPerElement}function p(x,E){o.drawElements(r,E,f,x*h),i.update(E,r,1)}function g(x,E,T){T!==0&&(o.drawElementsInstanced(r,E,f,x*h,T),i.update(E,r,T))}function _(x,E,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,E,0,f,x,0,T);let M=0;for(let y=0;y<T;y++)M+=E[y];i.update(M,r,1)}function m(x,E,T,A){if(T===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let y=0;y<x.length;y++)g(x[y]/h,E[y],A[y]);else{M.multiDrawElementsInstancedWEBGL(r,E,0,f,x,0,A,0,T);let y=0;for(let O=0;O<T;O++)y+=E[O]*A[O];i.update(y,r,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=g,this.renderMultiDraw=_,this.renderMultiDrawInstances=m}function tR(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(f,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(f/3);break;case o.LINES:i.lines+=d*(f/2);break;case o.LINE_STRIP:i.lines+=d*(f-1);break;case o.LINE_LOOP:i.lines+=d*f;break;case o.POINTS:i.points+=d*f;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function eR(o,e,i){const r=new WeakMap,l=new rn;function f(h,d,p){const g=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,m=_!==void 0?_.length:0;let x=r.get(d);if(x===void 0||x.count!==m){let C=function(){B.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var E=C;x!==void 0&&x.texture.dispose();const T=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],O=d.morphAttributes.normal||[],z=d.morphAttributes.color||[];let N=0;T===!0&&(N=1),A===!0&&(N=2),M===!0&&(N=3);let j=d.attributes.position.count*N,F=1;j>e.maxTextureSize&&(F=Math.ceil(j/e.maxTextureSize),j=e.maxTextureSize);const P=new Float32Array(j*F*4*m),B=new Py(P,j,F,m);B.type=Da,B.needsUpdate=!0;const U=N*4;for(let H=0;H<m;H++){const it=y[H],$=O[H],dt=z[H],ht=j*F*4*H;for(let q=0;q<it.count;q++){const lt=q*U;T===!0&&(l.fromBufferAttribute(it,q),P[ht+lt+0]=l.x,P[ht+lt+1]=l.y,P[ht+lt+2]=l.z,P[ht+lt+3]=0),A===!0&&(l.fromBufferAttribute($,q),P[ht+lt+4]=l.x,P[ht+lt+5]=l.y,P[ht+lt+6]=l.z,P[ht+lt+7]=0),M===!0&&(l.fromBufferAttribute(dt,q),P[ht+lt+8]=l.x,P[ht+lt+9]=l.y,P[ht+lt+10]=l.z,P[ht+lt+11]=dt.itemSize===4?l.w:1)}}x={count:m,texture:B,size:new ue(j,F)},r.set(d,x),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let T=0;for(let M=0;M<g.length;M++)T+=g[M];const A=d.morphTargetsRelative?1:1-T;p.getUniforms().setValue(o,"morphTargetBaseInfluence",A),p.getUniforms().setValue(o,"morphTargetInfluences",g)}p.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:f}}function nR(o,e,i,r){let l=new WeakMap;function f(p){const g=r.render.frame,_=p.geometry,m=e.get(p,_);if(l.get(m)!==g&&(e.update(m),l.set(m,g)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==g&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),l.set(p,g))),p.isSkinnedMesh){const x=p.skeleton;l.get(x)!==g&&(x.update(),l.set(x,g))}return m}function h(){l=new WeakMap}function d(p){const g=p.target;g.removeEventListener("dispose",d),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:f,dispose:h}}const Wy=new Gn,ux=new Xy(1,1),Zy=new Py,Ky=new yT,Qy=new Vy,fx=[],hx=[],dx=new Float32Array(16),px=new Float32Array(9),mx=new Float32Array(4);function Mo(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let f=fx[l];if(f===void 0&&(f=new Float32Array(l),fx[l]=f),e!==0){r.toArray(f,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(f,d)}return f}function Sn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function Mn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function zu(o,e){let i=hx[e];i===void 0&&(i=new Int32Array(e),hx[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function iR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function aR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;o.uniform2fv(this.addr,e),Mn(i,e)}}function sR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Sn(i,e))return;o.uniform3fv(this.addr,e),Mn(i,e)}}function rR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;o.uniform4fv(this.addr,e),Mn(i,e)}}function oR(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Sn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),Mn(i,e)}else{if(Sn(i,r))return;mx.set(r),o.uniformMatrix2fv(this.addr,!1,mx),Mn(i,r)}}function lR(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Sn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),Mn(i,e)}else{if(Sn(i,r))return;px.set(r),o.uniformMatrix3fv(this.addr,!1,px),Mn(i,r)}}function cR(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Sn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),Mn(i,e)}else{if(Sn(i,r))return;dx.set(r),o.uniformMatrix4fv(this.addr,!1,dx),Mn(i,r)}}function uR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function fR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;o.uniform2iv(this.addr,e),Mn(i,e)}}function hR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;o.uniform3iv(this.addr,e),Mn(i,e)}}function dR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;o.uniform4iv(this.addr,e),Mn(i,e)}}function pR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function mR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;o.uniform2uiv(this.addr,e),Mn(i,e)}}function gR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;o.uniform3uiv(this.addr,e),Mn(i,e)}}function _R(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;o.uniform4uiv(this.addr,e),Mn(i,e)}}function vR(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let f;this.type===o.SAMPLER_2D_SHADOW?(ux.compareFunction=Oy,f=ux):f=Wy,i.setTexture2D(e||f,l)}function xR(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Ky,l)}function yR(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Qy,l)}function SR(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Zy,l)}function MR(o){switch(o){case 5126:return iR;case 35664:return aR;case 35665:return sR;case 35666:return rR;case 35674:return oR;case 35675:return lR;case 35676:return cR;case 5124:case 35670:return uR;case 35667:case 35671:return fR;case 35668:case 35672:return hR;case 35669:case 35673:return dR;case 5125:return pR;case 36294:return mR;case 36295:return gR;case 36296:return _R;case 35678:case 36198:case 36298:case 36306:case 35682:return vR;case 35679:case 36299:case 36307:return xR;case 35680:case 36300:case 36308:case 36293:return yR;case 36289:case 36303:case 36311:case 36292:return SR}}function ER(o,e){o.uniform1fv(this.addr,e)}function TR(o,e){const i=Mo(e,this.size,2);o.uniform2fv(this.addr,i)}function bR(o,e){const i=Mo(e,this.size,3);o.uniform3fv(this.addr,i)}function AR(o,e){const i=Mo(e,this.size,4);o.uniform4fv(this.addr,i)}function RR(o,e){const i=Mo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function CR(o,e){const i=Mo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function wR(o,e){const i=Mo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function DR(o,e){o.uniform1iv(this.addr,e)}function NR(o,e){o.uniform2iv(this.addr,e)}function UR(o,e){o.uniform3iv(this.addr,e)}function LR(o,e){o.uniform4iv(this.addr,e)}function OR(o,e){o.uniform1uiv(this.addr,e)}function zR(o,e){o.uniform2uiv(this.addr,e)}function PR(o,e){o.uniform3uiv(this.addr,e)}function IR(o,e){o.uniform4uiv(this.addr,e)}function FR(o,e,i){const r=this.cache,l=e.length,f=zu(i,l);Sn(r,f)||(o.uniform1iv(this.addr,f),Mn(r,f));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||Wy,f[h])}function BR(o,e,i){const r=this.cache,l=e.length,f=zu(i,l);Sn(r,f)||(o.uniform1iv(this.addr,f),Mn(r,f));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||Ky,f[h])}function HR(o,e,i){const r=this.cache,l=e.length,f=zu(i,l);Sn(r,f)||(o.uniform1iv(this.addr,f),Mn(r,f));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||Qy,f[h])}function GR(o,e,i){const r=this.cache,l=e.length,f=zu(i,l);Sn(r,f)||(o.uniform1iv(this.addr,f),Mn(r,f));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||Zy,f[h])}function VR(o){switch(o){case 5126:return ER;case 35664:return TR;case 35665:return bR;case 35666:return AR;case 35674:return RR;case 35675:return CR;case 35676:return wR;case 5124:case 35670:return DR;case 35667:case 35671:return NR;case 35668:case 35672:return UR;case 35669:case 35673:return LR;case 5125:return OR;case 36294:return zR;case 36295:return PR;case 36296:return IR;case 35678:case 36198:case 36298:case 36306:case 35682:return FR;case 35679:case 36299:case 36307:return BR;case 35680:case 36300:case 36308:case 36293:return HR;case 36289:case 36303:case 36311:case 36292:return GR}}class jR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=MR(i.type)}}class kR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=VR(i.type)}}class XR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let f=0,h=l.length;f!==h;++f){const d=l[f];d.setValue(e,i[d.id],r)}}}const Xd=/(\w+)(\])?(\[|\.)?/g;function gx(o,e){o.seq.push(e),o.map[e.id]=e}function qR(o,e,i){const r=o.name,l=r.length;for(Xd.lastIndex=0;;){const f=Xd.exec(r),h=Xd.lastIndex;let d=f[1];const p=f[2]==="]",g=f[3];if(p&&(d=d|0),g===void 0||g==="["&&h+2===l){gx(i,g===void 0?new jR(d,o,e):new kR(d,o,e));break}else{let m=i.map[d];m===void 0&&(m=new XR(d),gx(i,m)),i=m}}}class bu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const f=e.getActiveUniform(i,l),h=e.getUniformLocation(i,f.name);qR(f,h,this)}}setValue(e,i,r,l){const f=this.map[i];f!==void 0&&f.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let f=0,h=i.length;f!==h;++f){const d=i[f],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,f=e.length;l!==f;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function _x(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const YR=37297;let WR=0;function ZR(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),f=Math.min(e+6,i.length);for(let h=l;h<f;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const vx=new pe;function KR(o){ze._getMatrix(vx,ze.workingColorSpace,o);const e=`mat3( ${vx.elements.map(i=>i.toFixed(4))} )`;switch(ze.getTransfer(o)){case Ru:return[e,"LinearTransferOETF"];case Ve:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function xx(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(r&&l==="")return"";const f=/ERROR: 0:(\d+)/.exec(l);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+l+`

`+ZR(o.getShaderSource(e),h)}else return l}function QR(o,e){const i=KR(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function JR(o,e){let i;switch(e){case X1:i="Linear";break;case q1:i="Reinhard";break;case Y1:i="Cineon";break;case W1:i="ACESFilmic";break;case K1:i="AgX";break;case Q1:i="Neutral";break;case Z1:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const _u=new et;function $R(){ze.getLuminanceCoefficients(_u);const o=_u.x.toFixed(4),e=_u.y.toFixed(4),i=_u.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tC(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sl).join(`
`)}function eC(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function nC(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const f=o.getActiveAttrib(e,l),h=f.name;let d=1;f.type===o.FLOAT_MAT2&&(d=2),f.type===o.FLOAT_MAT3&&(d=3),f.type===o.FLOAT_MAT4&&(d=4),i[h]={type:f.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Sl(o){return o!==""}function yx(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sx(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const iC=/^[ \t]*#include +<([\w\d./]+)>/gm;function zp(o){return o.replace(iC,sC)}const aC=new Map;function sC(o,e){let i=ge[e];if(i===void 0){const r=aC.get(e);if(r!==void 0)i=ge[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return zp(i)}const rC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mx(o){return o.replace(rC,oC)}function oC(o,e,i,r){let l="";for(let f=parseInt(e);f<parseInt(i);f++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return l}function Ex(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function lC(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===xy?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===yy?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ca&&(e="SHADOWMAP_TYPE_VSM"),e}function cC(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case mo:case go:e="ENVMAP_TYPE_CUBE";break;case Uu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function uC(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case go:e="ENVMAP_MODE_REFRACTION";break}return e}function fC(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Sy:e="ENVMAP_BLENDING_MULTIPLY";break;case j1:e="ENVMAP_BLENDING_MIX";break;case k1:e="ENVMAP_BLENDING_ADD";break}return e}function hC(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function dC(o,e,i,r){const l=o.getContext(),f=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=lC(i),g=cC(i),_=uC(i),m=fC(i),x=hC(i),E=tC(i),T=eC(f),A=l.createProgram();let M,y,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Sl).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Sl).join(`
`),y.length>0&&(y+=`
`)):(M=[Ex(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sl).join(`
`),y=[Ex(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",i.envMap?"#define "+m:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==_s?"#define TONE_MAPPING":"",i.toneMapping!==_s?ge.tonemapping_pars_fragment:"",i.toneMapping!==_s?JR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,QR("linearToOutputTexel",i.outputColorSpace),$R(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Sl).join(`
`)),h=zp(h),h=yx(h,i),h=Sx(h,i),d=zp(d),d=yx(d,i),d=Sx(d,i),h=Mx(h),d=Mx(d),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,M=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",i.glslVersion===Cv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Cv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const z=O+M+h,N=O+y+d,j=_x(l,l.VERTEX_SHADER,z),F=_x(l,l.FRAGMENT_SHADER,N);l.attachShader(A,j),l.attachShader(A,F),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function P(H){if(o.debug.checkShaderErrors){const it=l.getProgramInfoLog(A).trim(),$=l.getShaderInfoLog(j).trim(),dt=l.getShaderInfoLog(F).trim();let ht=!0,q=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(ht=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,A,j,F);else{const lt=xx(l,j,"vertex"),X=xx(l,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+it+`
`+lt+`
`+X)}else it!==""?console.warn("THREE.WebGLProgram: Program Info Log:",it):($===""||dt==="")&&(q=!1);q&&(H.diagnostics={runnable:ht,programLog:it,vertexShader:{log:$,prefix:M},fragmentShader:{log:dt,prefix:y}})}l.deleteShader(j),l.deleteShader(F),B=new bu(l,A),U=nC(l,A)}let B;this.getUniforms=function(){return B===void 0&&P(this),B};let U;this.getAttributes=function(){return U===void 0&&P(this),U};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(A,YR)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=WR++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=j,this.fragmentShader=F,this}let pC=0;class mC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),f=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(f)===!1&&(h.add(f),f.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new gC(e),i.set(e,r)),r}}class gC{constructor(e){this.id=pC++,this.code=e,this.usedTimes=0}}function _C(o,e,i,r,l,f,h){const d=new Wp,p=new mC,g=new Set,_=[],m=l.logarithmicDepthBuffer,x=l.vertexTextures;let E=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(U){return g.add(U),U===0?"uv":`uv${U}`}function M(U,C,H,it,$){const dt=it.fog,ht=$.geometry,q=U.isMeshStandardMaterial?it.environment:null,lt=(U.isMeshStandardMaterial?i:e).get(U.envMap||q),X=lt&&lt.mapping===Uu?lt.image.height:null,xt=T[U.type];U.precision!==null&&(E=l.getMaxPrecision(U.precision),E!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",E,"instead."));const yt=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,wt=yt!==void 0?yt.length:0;let Ft=0;ht.morphAttributes.position!==void 0&&(Ft=1),ht.morphAttributes.normal!==void 0&&(Ft=2),ht.morphAttributes.color!==void 0&&(Ft=3);let Wt,D,W,ct;if(xt){const xe=na[xt];Wt=xe.vertexShader,D=xe.fragmentShader}else Wt=U.vertexShader,D=U.fragmentShader,p.update(U),W=p.getVertexShaderID(U),ct=p.getFragmentShaderID(U);const ft=o.getRenderTarget(),Mt=o.state.buffers.depth.getReversed(),Ht=$.isInstancedMesh===!0,Dt=$.isBatchedMesh===!0,Tt=!!U.map,Gt=!!U.matcap,ae=!!lt,G=!!U.aoMap,on=!!U.lightMap,se=!!U.bumpMap,Jt=!!U.normalMap,Rt=!!U.displacementMap,_e=!!U.emissiveMap,Vt=!!U.metalnessMap,L=!!U.roughnessMap,R=U.anisotropy>0,at=U.clearcoat>0,vt=U.dispersion>0,St=U.iridescence>0,_t=U.sheen>0,Yt=U.transmission>0,It=R&&!!U.anisotropyMap,Pt=at&&!!U.clearcoatMap,me=at&&!!U.clearcoatNormalMap,At=at&&!!U.clearcoatRoughnessMap,kt=St&&!!U.iridescenceMap,Qt=St&&!!U.iridescenceThicknessMap,ee=_t&&!!U.sheenColorMap,jt=_t&&!!U.sheenRoughnessMap,de=!!U.specularMap,ce=!!U.specularColorMap,Le=!!U.specularIntensityMap,k=Yt&&!!U.transmissionMap,Et=Yt&&!!U.thicknessMap,rt=!!U.gradientMap,gt=!!U.alphaMap,Ct=U.alphaTest>0,Lt=!!U.alphaHash,ne=!!U.extensions;let ke=_s;U.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(ke=o.toneMapping);const ln={shaderID:xt,shaderType:U.type,shaderName:U.name,vertexShader:Wt,fragmentShader:D,defines:U.defines,customVertexShaderID:W,customFragmentShaderID:ct,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:E,batching:Dt,batchingColor:Dt&&$._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&$.instanceColor!==null,instancingMorph:Ht&&$.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ft===null?o.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:xo,alphaToCoverage:!!U.alphaToCoverage,map:Tt,matcap:Gt,envMap:ae,envMapMode:ae&&lt.mapping,envMapCubeUVHeight:X,aoMap:G,lightMap:on,bumpMap:se,normalMap:Jt,displacementMap:x&&Rt,emissiveMap:_e,normalMapObjectSpace:Jt&&U.normalMapType===eT,normalMapTangentSpace:Jt&&U.normalMapType===Ly,metalnessMap:Vt,roughnessMap:L,anisotropy:R,anisotropyMap:It,clearcoat:at,clearcoatMap:Pt,clearcoatNormalMap:me,clearcoatRoughnessMap:At,dispersion:vt,iridescence:St,iridescenceMap:kt,iridescenceThicknessMap:Qt,sheen:_t,sheenColorMap:ee,sheenRoughnessMap:jt,specularMap:de,specularColorMap:ce,specularIntensityMap:Le,transmission:Yt,transmissionMap:k,thicknessMap:Et,gradientMap:rt,opaque:U.transparent===!1&&U.blending===uo&&U.alphaToCoverage===!1,alphaMap:gt,alphaTest:Ct,alphaHash:Lt,combine:U.combine,mapUv:Tt&&A(U.map.channel),aoMapUv:G&&A(U.aoMap.channel),lightMapUv:on&&A(U.lightMap.channel),bumpMapUv:se&&A(U.bumpMap.channel),normalMapUv:Jt&&A(U.normalMap.channel),displacementMapUv:Rt&&A(U.displacementMap.channel),emissiveMapUv:_e&&A(U.emissiveMap.channel),metalnessMapUv:Vt&&A(U.metalnessMap.channel),roughnessMapUv:L&&A(U.roughnessMap.channel),anisotropyMapUv:It&&A(U.anisotropyMap.channel),clearcoatMapUv:Pt&&A(U.clearcoatMap.channel),clearcoatNormalMapUv:me&&A(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&A(U.clearcoatRoughnessMap.channel),iridescenceMapUv:kt&&A(U.iridescenceMap.channel),iridescenceThicknessMapUv:Qt&&A(U.iridescenceThicknessMap.channel),sheenColorMapUv:ee&&A(U.sheenColorMap.channel),sheenRoughnessMapUv:jt&&A(U.sheenRoughnessMap.channel),specularMapUv:de&&A(U.specularMap.channel),specularColorMapUv:ce&&A(U.specularColorMap.channel),specularIntensityMapUv:Le&&A(U.specularIntensityMap.channel),transmissionMapUv:k&&A(U.transmissionMap.channel),thicknessMapUv:Et&&A(U.thicknessMap.channel),alphaMapUv:gt&&A(U.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(Jt||R),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!ht.attributes.uv&&(Tt||gt),fog:!!dt,useFog:U.fog===!0,fogExp2:!!dt&&dt.isFogExp2,flatShading:U.flatShading===!0,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:m,reverseDepthBuffer:Mt,skinning:$.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:Ft,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:U.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:ke,decodeVideoTexture:Tt&&U.map.isVideoTexture===!0&&ze.getTransfer(U.map.colorSpace)===Ve,decodeVideoTextureEmissive:_e&&U.emissiveMap.isVideoTexture===!0&&ze.getTransfer(U.emissiveMap.colorSpace)===Ve,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===ia,flipSided:U.side===ei,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:ne&&U.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&U.extensions.multiDraw===!0||Dt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return ln.vertexUv1s=g.has(1),ln.vertexUv2s=g.has(2),ln.vertexUv3s=g.has(3),g.clear(),ln}function y(U){const C=[];if(U.shaderID?C.push(U.shaderID):(C.push(U.customVertexShaderID),C.push(U.customFragmentShaderID)),U.defines!==void 0)for(const H in U.defines)C.push(H),C.push(U.defines[H]);return U.isRawShaderMaterial===!1&&(O(C,U),z(C,U),C.push(o.outputColorSpace)),C.push(U.customProgramCacheKey),C.join()}function O(U,C){U.push(C.precision),U.push(C.outputColorSpace),U.push(C.envMapMode),U.push(C.envMapCubeUVHeight),U.push(C.mapUv),U.push(C.alphaMapUv),U.push(C.lightMapUv),U.push(C.aoMapUv),U.push(C.bumpMapUv),U.push(C.normalMapUv),U.push(C.displacementMapUv),U.push(C.emissiveMapUv),U.push(C.metalnessMapUv),U.push(C.roughnessMapUv),U.push(C.anisotropyMapUv),U.push(C.clearcoatMapUv),U.push(C.clearcoatNormalMapUv),U.push(C.clearcoatRoughnessMapUv),U.push(C.iridescenceMapUv),U.push(C.iridescenceThicknessMapUv),U.push(C.sheenColorMapUv),U.push(C.sheenRoughnessMapUv),U.push(C.specularMapUv),U.push(C.specularColorMapUv),U.push(C.specularIntensityMapUv),U.push(C.transmissionMapUv),U.push(C.thicknessMapUv),U.push(C.combine),U.push(C.fogExp2),U.push(C.sizeAttenuation),U.push(C.morphTargetsCount),U.push(C.morphAttributeCount),U.push(C.numDirLights),U.push(C.numPointLights),U.push(C.numSpotLights),U.push(C.numSpotLightMaps),U.push(C.numHemiLights),U.push(C.numRectAreaLights),U.push(C.numDirLightShadows),U.push(C.numPointLightShadows),U.push(C.numSpotLightShadows),U.push(C.numSpotLightShadowsWithMaps),U.push(C.numLightProbes),U.push(C.shadowMapType),U.push(C.toneMapping),U.push(C.numClippingPlanes),U.push(C.numClipIntersection),U.push(C.depthPacking)}function z(U,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),U.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),U.push(d.mask)}function N(U){const C=T[U.type];let H;if(C){const it=na[C];H=LT.clone(it.uniforms)}else H=U.uniforms;return H}function j(U,C){let H;for(let it=0,$=_.length;it<$;it++){const dt=_[it];if(dt.cacheKey===C){H=dt,++H.usedTimes;break}}return H===void 0&&(H=new dC(o,C,U,f),_.push(H)),H}function F(U){if(--U.usedTimes===0){const C=_.indexOf(U);_[C]=_[_.length-1],_.pop(),U.destroy()}}function P(U){p.remove(U)}function B(){p.dispose()}return{getParameters:M,getProgramCacheKey:y,getUniforms:N,acquireProgram:j,releaseProgram:F,releaseShaderCache:P,programs:_,dispose:B}}function vC(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,p){o.get(h)[d]=p}function f(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:f}}function xC(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Tx(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function bx(){const o=[];let e=0;const i=[],r=[],l=[];function f(){e=0,i.length=0,r.length=0,l.length=0}function h(m,x,E,T,A,M){let y=o[e];return y===void 0?(y={id:m.id,object:m,geometry:x,material:E,groupOrder:T,renderOrder:m.renderOrder,z:A,group:M},o[e]=y):(y.id=m.id,y.object=m,y.geometry=x,y.material=E,y.groupOrder=T,y.renderOrder=m.renderOrder,y.z=A,y.group=M),e++,y}function d(m,x,E,T,A,M){const y=h(m,x,E,T,A,M);E.transmission>0?r.push(y):E.transparent===!0?l.push(y):i.push(y)}function p(m,x,E,T,A,M){const y=h(m,x,E,T,A,M);E.transmission>0?r.unshift(y):E.transparent===!0?l.unshift(y):i.unshift(y)}function g(m,x){i.length>1&&i.sort(m||xC),r.length>1&&r.sort(x||Tx),l.length>1&&l.sort(x||Tx)}function _(){for(let m=e,x=o.length;m<x;m++){const E=o[m];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:r,transparent:l,init:f,push:d,unshift:p,finish:_,sort:g}}function yC(){let o=new WeakMap;function e(r,l){const f=o.get(r);let h;return f===void 0?(h=new bx,o.set(r,[h])):l>=f.length?(h=new bx,f.push(h)):h=f[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function SC(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new et,color:new Te};break;case"SpotLight":i={position:new et,direction:new et,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new et,color:new Te,distance:0,decay:0};break;case"HemisphereLight":i={direction:new et,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":i={color:new Te,position:new et,halfWidth:new et,halfHeight:new et};break}return o[e.id]=i,i}}}function MC(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let EC=0;function TC(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function bC(o){const e=new SC,i=MC(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)r.probe.push(new et);const l=new et,f=new tn,h=new tn;function d(g){let _=0,m=0,x=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let E=0,T=0,A=0,M=0,y=0,O=0,z=0,N=0,j=0,F=0,P=0;g.sort(TC);for(let U=0,C=g.length;U<C;U++){const H=g[U],it=H.color,$=H.intensity,dt=H.distance,ht=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)_+=it.r*$,m+=it.g*$,x+=it.b*$;else if(H.isLightProbe){for(let q=0;q<9;q++)r.probe[q].addScaledVector(H.sh.coefficients[q],$);P++}else if(H.isDirectionalLight){const q=e.get(H);if(q.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const lt=H.shadow,X=i.get(H);X.shadowIntensity=lt.intensity,X.shadowBias=lt.bias,X.shadowNormalBias=lt.normalBias,X.shadowRadius=lt.radius,X.shadowMapSize=lt.mapSize,r.directionalShadow[E]=X,r.directionalShadowMap[E]=ht,r.directionalShadowMatrix[E]=H.shadow.matrix,O++}r.directional[E]=q,E++}else if(H.isSpotLight){const q=e.get(H);q.position.setFromMatrixPosition(H.matrixWorld),q.color.copy(it).multiplyScalar($),q.distance=dt,q.coneCos=Math.cos(H.angle),q.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),q.decay=H.decay,r.spot[A]=q;const lt=H.shadow;if(H.map&&(r.spotLightMap[j]=H.map,j++,lt.updateMatrices(H),H.castShadow&&F++),r.spotLightMatrix[A]=lt.matrix,H.castShadow){const X=i.get(H);X.shadowIntensity=lt.intensity,X.shadowBias=lt.bias,X.shadowNormalBias=lt.normalBias,X.shadowRadius=lt.radius,X.shadowMapSize=lt.mapSize,r.spotShadow[A]=X,r.spotShadowMap[A]=ht,N++}A++}else if(H.isRectAreaLight){const q=e.get(H);q.color.copy(it).multiplyScalar($),q.halfWidth.set(H.width*.5,0,0),q.halfHeight.set(0,H.height*.5,0),r.rectArea[M]=q,M++}else if(H.isPointLight){const q=e.get(H);if(q.color.copy(H.color).multiplyScalar(H.intensity),q.distance=H.distance,q.decay=H.decay,H.castShadow){const lt=H.shadow,X=i.get(H);X.shadowIntensity=lt.intensity,X.shadowBias=lt.bias,X.shadowNormalBias=lt.normalBias,X.shadowRadius=lt.radius,X.shadowMapSize=lt.mapSize,X.shadowCameraNear=lt.camera.near,X.shadowCameraFar=lt.camera.far,r.pointShadow[T]=X,r.pointShadowMap[T]=ht,r.pointShadowMatrix[T]=H.shadow.matrix,z++}r.point[T]=q,T++}else if(H.isHemisphereLight){const q=e.get(H);q.skyColor.copy(H.color).multiplyScalar($),q.groundColor.copy(H.groundColor).multiplyScalar($),r.hemi[y]=q,y++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Bt.LTC_FLOAT_1,r.rectAreaLTC2=Bt.LTC_FLOAT_2):(r.rectAreaLTC1=Bt.LTC_HALF_1,r.rectAreaLTC2=Bt.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=m,r.ambient[2]=x;const B=r.hash;(B.directionalLength!==E||B.pointLength!==T||B.spotLength!==A||B.rectAreaLength!==M||B.hemiLength!==y||B.numDirectionalShadows!==O||B.numPointShadows!==z||B.numSpotShadows!==N||B.numSpotMaps!==j||B.numLightProbes!==P)&&(r.directional.length=E,r.spot.length=A,r.rectArea.length=M,r.point.length=T,r.hemi.length=y,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.pointShadow.length=z,r.pointShadowMap.length=z,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=O,r.pointShadowMatrix.length=z,r.spotLightMatrix.length=N+j-F,r.spotLightMap.length=j,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=P,B.directionalLength=E,B.pointLength=T,B.spotLength=A,B.rectAreaLength=M,B.hemiLength=y,B.numDirectionalShadows=O,B.numPointShadows=z,B.numSpotShadows=N,B.numSpotMaps=j,B.numLightProbes=P,r.version=EC++)}function p(g,_){let m=0,x=0,E=0,T=0,A=0;const M=_.matrixWorldInverse;for(let y=0,O=g.length;y<O;y++){const z=g[y];if(z.isDirectionalLight){const N=r.directional[m];N.direction.setFromMatrixPosition(z.matrixWorld),l.setFromMatrixPosition(z.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(M),m++}else if(z.isSpotLight){const N=r.spot[E];N.position.setFromMatrixPosition(z.matrixWorld),N.position.applyMatrix4(M),N.direction.setFromMatrixPosition(z.matrixWorld),l.setFromMatrixPosition(z.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(M),E++}else if(z.isRectAreaLight){const N=r.rectArea[T];N.position.setFromMatrixPosition(z.matrixWorld),N.position.applyMatrix4(M),h.identity(),f.copy(z.matrixWorld),f.premultiply(M),h.extractRotation(f),N.halfWidth.set(z.width*.5,0,0),N.halfHeight.set(0,z.height*.5,0),N.halfWidth.applyMatrix4(h),N.halfHeight.applyMatrix4(h),T++}else if(z.isPointLight){const N=r.point[x];N.position.setFromMatrixPosition(z.matrixWorld),N.position.applyMatrix4(M),x++}else if(z.isHemisphereLight){const N=r.hemi[A];N.direction.setFromMatrixPosition(z.matrixWorld),N.direction.transformDirection(M),A++}}}return{setup:d,setupView:p,state:r}}function Ax(o){const e=new bC(o),i=[],r=[];function l(_){g.camera=_,i.length=0,r.length=0}function f(_){i.push(_)}function h(_){r.push(_)}function d(){e.setup(i)}function p(_){e.setupView(i,_)}const g={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:g,setupLights:d,setupLightsView:p,pushLight:f,pushShadow:h}}function AC(o){let e=new WeakMap;function i(l,f=0){const h=e.get(l);let d;return h===void 0?(d=new Ax(o),e.set(l,[d])):f>=h.length?(d=new Ax(o),h.push(d)):d=h[f],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const RC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CC=`uniform sampler2D shadow_pass;
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
}`;function wC(o,e,i){let r=new Qp;const l=new ue,f=new ue,h=new rn,d=new kT({depthPacking:tT}),p=new XT,g={},_=i.maxTextureSize,m={[vs]:ei,[ei]:vs,[ia]:ia},x=new xs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:RC,fragmentShader:CC}),E=x.clone();E.defines.HORIZONTAL_PASS=1;const T=new Ci;T.setAttribute("position",new aa(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new pi(T,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xy;let y=this.type;this.render=function(F,P,B){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||F.length===0)return;const U=o.getRenderTarget(),C=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),it=o.state;it.setBlending(gs),it.buffers.color.setClear(1,1,1,1),it.buffers.depth.setTest(!0),it.setScissorTest(!1);const $=y!==Ca&&this.type===Ca,dt=y===Ca&&this.type!==Ca;for(let ht=0,q=F.length;ht<q;ht++){const lt=F[ht],X=lt.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",lt,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;l.copy(X.mapSize);const xt=X.getFrameExtents();if(l.multiply(xt),f.copy(X.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(f.x=Math.floor(_/xt.x),l.x=f.x*xt.x,X.mapSize.x=f.x),l.y>_&&(f.y=Math.floor(_/xt.y),l.y=f.y*xt.y,X.mapSize.y=f.y)),X.map===null||$===!0||dt===!0){const wt=this.type!==Ca?{minFilter:ki,magFilter:ki}:{};X.map!==null&&X.map.dispose(),X.map=new er(l.x,l.y,wt),X.map.texture.name=lt.name+".shadowMap",X.camera.updateProjectionMatrix()}o.setRenderTarget(X.map),o.clear();const yt=X.getViewportCount();for(let wt=0;wt<yt;wt++){const Ft=X.getViewport(wt);h.set(f.x*Ft.x,f.y*Ft.y,f.x*Ft.z,f.y*Ft.w),it.viewport(h),X.updateMatrices(lt,wt),r=X.getFrustum(),N(P,B,X.camera,lt,this.type)}X.isPointLightShadow!==!0&&this.type===Ca&&O(X,B),X.needsUpdate=!1}y=this.type,M.needsUpdate=!1,o.setRenderTarget(U,C,H)};function O(F,P){const B=e.update(A);x.defines.VSM_SAMPLES!==F.blurSamples&&(x.defines.VSM_SAMPLES=F.blurSamples,E.defines.VSM_SAMPLES=F.blurSamples,x.needsUpdate=!0,E.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new er(l.x,l.y)),x.uniforms.shadow_pass.value=F.map.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,o.setRenderTarget(F.mapPass),o.clear(),o.renderBufferDirect(P,null,B,x,A,null),E.uniforms.shadow_pass.value=F.mapPass.texture,E.uniforms.resolution.value=F.mapSize,E.uniforms.radius.value=F.radius,o.setRenderTarget(F.map),o.clear(),o.renderBufferDirect(P,null,B,E,A,null)}function z(F,P,B,U){let C=null;const H=B.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(H!==void 0)C=H;else if(C=B.isPointLight===!0?p:d,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const it=C.uuid,$=P.uuid;let dt=g[it];dt===void 0&&(dt={},g[it]=dt);let ht=dt[$];ht===void 0&&(ht=C.clone(),dt[$]=ht,P.addEventListener("dispose",j)),C=ht}if(C.visible=P.visible,C.wireframe=P.wireframe,U===Ca?C.side=P.shadowSide!==null?P.shadowSide:P.side:C.side=P.shadowSide!==null?P.shadowSide:m[P.side],C.alphaMap=P.alphaMap,C.alphaTest=P.alphaTest,C.map=P.map,C.clipShadows=P.clipShadows,C.clippingPlanes=P.clippingPlanes,C.clipIntersection=P.clipIntersection,C.displacementMap=P.displacementMap,C.displacementScale=P.displacementScale,C.displacementBias=P.displacementBias,C.wireframeLinewidth=P.wireframeLinewidth,C.linewidth=P.linewidth,B.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const it=o.properties.get(C);it.light=B}return C}function N(F,P,B,U,C){if(F.visible===!1)return;if(F.layers.test(P.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&C===Ca)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,F.matrixWorld);const $=e.update(F),dt=F.material;if(Array.isArray(dt)){const ht=$.groups;for(let q=0,lt=ht.length;q<lt;q++){const X=ht[q],xt=dt[X.materialIndex];if(xt&&xt.visible){const yt=z(F,xt,U,C);F.onBeforeShadow(o,F,P,B,$,yt,X),o.renderBufferDirect(B,null,$,yt,F,X),F.onAfterShadow(o,F,P,B,$,yt,X)}}}else if(dt.visible){const ht=z(F,dt,U,C);F.onBeforeShadow(o,F,P,B,$,ht,null),o.renderBufferDirect(B,null,$,ht,F,null),F.onAfterShadow(o,F,P,B,$,ht,null)}}const it=F.children;for(let $=0,dt=it.length;$<dt;$++)N(it[$],P,B,U,C)}function j(F){F.target.removeEventListener("dispose",j);for(const B in g){const U=g[B],C=F.target.uuid;C in U&&(U[C].dispose(),delete U[C])}}}const DC={[Kd]:Qd,[Jd]:ep,[$d]:np,[po]:tp,[Qd]:Kd,[ep]:Jd,[np]:$d,[tp]:po};function NC(o,e){function i(){let k=!1;const Et=new rn;let rt=null;const gt=new rn(0,0,0,0);return{setMask:function(Ct){rt!==Ct&&!k&&(o.colorMask(Ct,Ct,Ct,Ct),rt=Ct)},setLocked:function(Ct){k=Ct},setClear:function(Ct,Lt,ne,ke,ln){ln===!0&&(Ct*=ke,Lt*=ke,ne*=ke),Et.set(Ct,Lt,ne,ke),gt.equals(Et)===!1&&(o.clearColor(Ct,Lt,ne,ke),gt.copy(Et))},reset:function(){k=!1,rt=null,gt.set(-1,0,0,0)}}}function r(){let k=!1,Et=!1,rt=null,gt=null,Ct=null;return{setReversed:function(Lt){if(Et!==Lt){const ne=e.get("EXT_clip_control");Et?ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.ZERO_TO_ONE_EXT):ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.NEGATIVE_ONE_TO_ONE_EXT);const ke=Ct;Ct=null,this.setClear(ke)}Et=Lt},getReversed:function(){return Et},setTest:function(Lt){Lt?ft(o.DEPTH_TEST):Mt(o.DEPTH_TEST)},setMask:function(Lt){rt!==Lt&&!k&&(o.depthMask(Lt),rt=Lt)},setFunc:function(Lt){if(Et&&(Lt=DC[Lt]),gt!==Lt){switch(Lt){case Kd:o.depthFunc(o.NEVER);break;case Qd:o.depthFunc(o.ALWAYS);break;case Jd:o.depthFunc(o.LESS);break;case po:o.depthFunc(o.LEQUAL);break;case $d:o.depthFunc(o.EQUAL);break;case tp:o.depthFunc(o.GEQUAL);break;case ep:o.depthFunc(o.GREATER);break;case np:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}gt=Lt}},setLocked:function(Lt){k=Lt},setClear:function(Lt){Ct!==Lt&&(Et&&(Lt=1-Lt),o.clearDepth(Lt),Ct=Lt)},reset:function(){k=!1,rt=null,gt=null,Ct=null,Et=!1}}}function l(){let k=!1,Et=null,rt=null,gt=null,Ct=null,Lt=null,ne=null,ke=null,ln=null;return{setTest:function(xe){k||(xe?ft(o.STENCIL_TEST):Mt(o.STENCIL_TEST))},setMask:function(xe){Et!==xe&&!k&&(o.stencilMask(xe),Et=xe)},setFunc:function(xe,we,en){(rt!==xe||gt!==we||Ct!==en)&&(o.stencilFunc(xe,we,en),rt=xe,gt=we,Ct=en)},setOp:function(xe,we,en){(Lt!==xe||ne!==we||ke!==en)&&(o.stencilOp(xe,we,en),Lt=xe,ne=we,ke=en)},setLocked:function(xe){k=xe},setClear:function(xe){ln!==xe&&(o.clearStencil(xe),ln=xe)},reset:function(){k=!1,Et=null,rt=null,gt=null,Ct=null,Lt=null,ne=null,ke=null,ln=null}}}const f=new i,h=new r,d=new l,p=new WeakMap,g=new WeakMap;let _={},m={},x=new WeakMap,E=[],T=null,A=!1,M=null,y=null,O=null,z=null,N=null,j=null,F=null,P=new Te(0,0,0),B=0,U=!1,C=null,H=null,it=null,$=null,dt=null;const ht=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,lt=0;const X=o.getParameter(o.VERSION);X.indexOf("WebGL")!==-1?(lt=parseFloat(/^WebGL (\d)/.exec(X)[1]),q=lt>=1):X.indexOf("OpenGL ES")!==-1&&(lt=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),q=lt>=2);let xt=null,yt={};const wt=o.getParameter(o.SCISSOR_BOX),Ft=o.getParameter(o.VIEWPORT),Wt=new rn().fromArray(wt),D=new rn().fromArray(Ft);function W(k,Et,rt,gt){const Ct=new Uint8Array(4),Lt=o.createTexture();o.bindTexture(k,Lt),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ne=0;ne<rt;ne++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Et,0,o.RGBA,1,1,gt,0,o.RGBA,o.UNSIGNED_BYTE,Ct):o.texImage2D(Et+ne,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ct);return Lt}const ct={};ct[o.TEXTURE_2D]=W(o.TEXTURE_2D,o.TEXTURE_2D,1),ct[o.TEXTURE_CUBE_MAP]=W(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[o.TEXTURE_2D_ARRAY]=W(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ct[o.TEXTURE_3D]=W(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ft(o.DEPTH_TEST),h.setFunc(po),se(!1),Jt(Mv),ft(o.CULL_FACE),G(gs);function ft(k){_[k]!==!0&&(o.enable(k),_[k]=!0)}function Mt(k){_[k]!==!1&&(o.disable(k),_[k]=!1)}function Ht(k,Et){return m[k]!==Et?(o.bindFramebuffer(k,Et),m[k]=Et,k===o.DRAW_FRAMEBUFFER&&(m[o.FRAMEBUFFER]=Et),k===o.FRAMEBUFFER&&(m[o.DRAW_FRAMEBUFFER]=Et),!0):!1}function Dt(k,Et){let rt=E,gt=!1;if(k){rt=x.get(Et),rt===void 0&&(rt=[],x.set(Et,rt));const Ct=k.textures;if(rt.length!==Ct.length||rt[0]!==o.COLOR_ATTACHMENT0){for(let Lt=0,ne=Ct.length;Lt<ne;Lt++)rt[Lt]=o.COLOR_ATTACHMENT0+Lt;rt.length=Ct.length,gt=!0}}else rt[0]!==o.BACK&&(rt[0]=o.BACK,gt=!0);gt&&o.drawBuffers(rt)}function Tt(k){return T!==k?(o.useProgram(k),T=k,!0):!1}const Gt={[Qs]:o.FUNC_ADD,[A1]:o.FUNC_SUBTRACT,[R1]:o.FUNC_REVERSE_SUBTRACT};Gt[C1]=o.MIN,Gt[w1]=o.MAX;const ae={[D1]:o.ZERO,[N1]:o.ONE,[U1]:o.SRC_COLOR,[Wd]:o.SRC_ALPHA,[F1]:o.SRC_ALPHA_SATURATE,[P1]:o.DST_COLOR,[O1]:o.DST_ALPHA,[L1]:o.ONE_MINUS_SRC_COLOR,[Zd]:o.ONE_MINUS_SRC_ALPHA,[I1]:o.ONE_MINUS_DST_COLOR,[z1]:o.ONE_MINUS_DST_ALPHA,[B1]:o.CONSTANT_COLOR,[H1]:o.ONE_MINUS_CONSTANT_COLOR,[G1]:o.CONSTANT_ALPHA,[V1]:o.ONE_MINUS_CONSTANT_ALPHA};function G(k,Et,rt,gt,Ct,Lt,ne,ke,ln,xe){if(k===gs){A===!0&&(Mt(o.BLEND),A=!1);return}if(A===!1&&(ft(o.BLEND),A=!0),k!==b1){if(k!==M||xe!==U){if((y!==Qs||N!==Qs)&&(o.blendEquation(o.FUNC_ADD),y=Qs,N=Qs),xe)switch(k){case uo:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ev:o.blendFunc(o.ONE,o.ONE);break;case Tv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case bv:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case uo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ev:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Tv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case bv:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}O=null,z=null,j=null,F=null,P.set(0,0,0),B=0,M=k,U=xe}return}Ct=Ct||Et,Lt=Lt||rt,ne=ne||gt,(Et!==y||Ct!==N)&&(o.blendEquationSeparate(Gt[Et],Gt[Ct]),y=Et,N=Ct),(rt!==O||gt!==z||Lt!==j||ne!==F)&&(o.blendFuncSeparate(ae[rt],ae[gt],ae[Lt],ae[ne]),O=rt,z=gt,j=Lt,F=ne),(ke.equals(P)===!1||ln!==B)&&(o.blendColor(ke.r,ke.g,ke.b,ln),P.copy(ke),B=ln),M=k,U=!1}function on(k,Et){k.side===ia?Mt(o.CULL_FACE):ft(o.CULL_FACE);let rt=k.side===ei;Et&&(rt=!rt),se(rt),k.blending===uo&&k.transparent===!1?G(gs):G(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),f.setMask(k.colorWrite);const gt=k.stencilWrite;d.setTest(gt),gt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),_e(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ft(o.SAMPLE_ALPHA_TO_COVERAGE):Mt(o.SAMPLE_ALPHA_TO_COVERAGE)}function se(k){C!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),C=k)}function Jt(k){k!==E1?(ft(o.CULL_FACE),k!==H&&(k===Mv?o.cullFace(o.BACK):k===T1?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Mt(o.CULL_FACE),H=k}function Rt(k){k!==it&&(q&&o.lineWidth(k),it=k)}function _e(k,Et,rt){k?(ft(o.POLYGON_OFFSET_FILL),($!==Et||dt!==rt)&&(o.polygonOffset(Et,rt),$=Et,dt=rt)):Mt(o.POLYGON_OFFSET_FILL)}function Vt(k){k?ft(o.SCISSOR_TEST):Mt(o.SCISSOR_TEST)}function L(k){k===void 0&&(k=o.TEXTURE0+ht-1),xt!==k&&(o.activeTexture(k),xt=k)}function R(k,Et,rt){rt===void 0&&(xt===null?rt=o.TEXTURE0+ht-1:rt=xt);let gt=yt[rt];gt===void 0&&(gt={type:void 0,texture:void 0},yt[rt]=gt),(gt.type!==k||gt.texture!==Et)&&(xt!==rt&&(o.activeTexture(rt),xt=rt),o.bindTexture(k,Et||ct[k]),gt.type=k,gt.texture=Et)}function at(){const k=yt[xt];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function vt(){try{o.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function St(){try{o.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _t(){try{o.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Yt(){try{o.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function It(){try{o.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pt(){try{o.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function me(){try{o.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function At(){try{o.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function kt(){try{o.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Qt(){try{o.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ee(k){Wt.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),Wt.copy(k))}function jt(k){D.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),D.copy(k))}function de(k,Et){let rt=g.get(Et);rt===void 0&&(rt=new WeakMap,g.set(Et,rt));let gt=rt.get(k);gt===void 0&&(gt=o.getUniformBlockIndex(Et,k.name),rt.set(k,gt))}function ce(k,Et){const gt=g.get(Et).get(k);p.get(Et)!==gt&&(o.uniformBlockBinding(Et,gt,k.__bindingPointIndex),p.set(Et,gt))}function Le(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},xt=null,yt={},m={},x=new WeakMap,E=[],T=null,A=!1,M=null,y=null,O=null,z=null,N=null,j=null,F=null,P=new Te(0,0,0),B=0,U=!1,C=null,H=null,it=null,$=null,dt=null,Wt.set(0,0,o.canvas.width,o.canvas.height),D.set(0,0,o.canvas.width,o.canvas.height),f.reset(),h.reset(),d.reset()}return{buffers:{color:f,depth:h,stencil:d},enable:ft,disable:Mt,bindFramebuffer:Ht,drawBuffers:Dt,useProgram:Tt,setBlending:G,setMaterial:on,setFlipSided:se,setCullFace:Jt,setLineWidth:Rt,setPolygonOffset:_e,setScissorTest:Vt,activeTexture:L,bindTexture:R,unbindTexture:at,compressedTexImage2D:vt,compressedTexImage3D:St,texImage2D:kt,texImage3D:Qt,updateUBOMapping:de,uniformBlockBinding:ce,texStorage2D:me,texStorage3D:At,texSubImage2D:_t,texSubImage3D:Yt,compressedTexSubImage2D:It,compressedTexSubImage3D:Pt,scissor:ee,viewport:jt,reset:Le}}function UC(o,e,i,r,l,f,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new ue,_=new WeakMap;let m;const x=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(L,R){return E?new OffscreenCanvas(L,R):El("canvas")}function A(L,R,at){let vt=1;const St=Vt(L);if((St.width>at||St.height>at)&&(vt=at/Math.max(St.width,St.height)),vt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const _t=Math.floor(vt*St.width),Yt=Math.floor(vt*St.height);m===void 0&&(m=T(_t,Yt));const It=R?T(_t,Yt):m;return It.width=_t,It.height=Yt,It.getContext("2d").drawImage(L,0,0,_t,Yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+_t+"x"+Yt+")."),It}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),L;return L}function M(L){return L.generateMipmaps}function y(L){o.generateMipmap(L)}function O(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function z(L,R,at,vt,St=!1){if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let _t=R;if(R===o.RED&&(at===o.FLOAT&&(_t=o.R32F),at===o.HALF_FLOAT&&(_t=o.R16F),at===o.UNSIGNED_BYTE&&(_t=o.R8)),R===o.RED_INTEGER&&(at===o.UNSIGNED_BYTE&&(_t=o.R8UI),at===o.UNSIGNED_SHORT&&(_t=o.R16UI),at===o.UNSIGNED_INT&&(_t=o.R32UI),at===o.BYTE&&(_t=o.R8I),at===o.SHORT&&(_t=o.R16I),at===o.INT&&(_t=o.R32I)),R===o.RG&&(at===o.FLOAT&&(_t=o.RG32F),at===o.HALF_FLOAT&&(_t=o.RG16F),at===o.UNSIGNED_BYTE&&(_t=o.RG8)),R===o.RG_INTEGER&&(at===o.UNSIGNED_BYTE&&(_t=o.RG8UI),at===o.UNSIGNED_SHORT&&(_t=o.RG16UI),at===o.UNSIGNED_INT&&(_t=o.RG32UI),at===o.BYTE&&(_t=o.RG8I),at===o.SHORT&&(_t=o.RG16I),at===o.INT&&(_t=o.RG32I)),R===o.RGB_INTEGER&&(at===o.UNSIGNED_BYTE&&(_t=o.RGB8UI),at===o.UNSIGNED_SHORT&&(_t=o.RGB16UI),at===o.UNSIGNED_INT&&(_t=o.RGB32UI),at===o.BYTE&&(_t=o.RGB8I),at===o.SHORT&&(_t=o.RGB16I),at===o.INT&&(_t=o.RGB32I)),R===o.RGBA_INTEGER&&(at===o.UNSIGNED_BYTE&&(_t=o.RGBA8UI),at===o.UNSIGNED_SHORT&&(_t=o.RGBA16UI),at===o.UNSIGNED_INT&&(_t=o.RGBA32UI),at===o.BYTE&&(_t=o.RGBA8I),at===o.SHORT&&(_t=o.RGBA16I),at===o.INT&&(_t=o.RGBA32I)),R===o.RGB&&at===o.UNSIGNED_INT_5_9_9_9_REV&&(_t=o.RGB9_E5),R===o.RGBA){const Yt=St?Ru:ze.getTransfer(vt);at===o.FLOAT&&(_t=o.RGBA32F),at===o.HALF_FLOAT&&(_t=o.RGBA16F),at===o.UNSIGNED_BYTE&&(_t=Yt===Ve?o.SRGB8_ALPHA8:o.RGBA8),at===o.UNSIGNED_SHORT_4_4_4_4&&(_t=o.RGBA4),at===o.UNSIGNED_SHORT_5_5_5_1&&(_t=o.RGB5_A1)}return(_t===o.R16F||_t===o.R32F||_t===o.RG16F||_t===o.RG32F||_t===o.RGBA16F||_t===o.RGBA32F)&&e.get("EXT_color_buffer_float"),_t}function N(L,R){let at;return L?R===null||R===tr||R===_o?at=o.DEPTH24_STENCIL8:R===Da?at=o.DEPTH32F_STENCIL8:R===Ml&&(at=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===tr||R===_o?at=o.DEPTH_COMPONENT24:R===Da?at=o.DEPTH_COMPONENT32F:R===Ml&&(at=o.DEPTH_COMPONENT16),at}function j(L,R){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==ki&&L.minFilter!==ti?Math.log2(Math.max(R.width,R.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?R.mipmaps.length:1}function F(L){const R=L.target;R.removeEventListener("dispose",F),B(R),R.isVideoTexture&&_.delete(R)}function P(L){const R=L.target;R.removeEventListener("dispose",P),C(R)}function B(L){const R=r.get(L);if(R.__webglInit===void 0)return;const at=L.source,vt=x.get(at);if(vt){const St=vt[R.__cacheKey];St.usedTimes--,St.usedTimes===0&&U(L),Object.keys(vt).length===0&&x.delete(at)}r.remove(L)}function U(L){const R=r.get(L);o.deleteTexture(R.__webglTexture);const at=L.source,vt=x.get(at);delete vt[R.__cacheKey],h.memory.textures--}function C(L){const R=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let vt=0;vt<6;vt++){if(Array.isArray(R.__webglFramebuffer[vt]))for(let St=0;St<R.__webglFramebuffer[vt].length;St++)o.deleteFramebuffer(R.__webglFramebuffer[vt][St]);else o.deleteFramebuffer(R.__webglFramebuffer[vt]);R.__webglDepthbuffer&&o.deleteRenderbuffer(R.__webglDepthbuffer[vt])}else{if(Array.isArray(R.__webglFramebuffer))for(let vt=0;vt<R.__webglFramebuffer.length;vt++)o.deleteFramebuffer(R.__webglFramebuffer[vt]);else o.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&o.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&o.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let vt=0;vt<R.__webglColorRenderbuffer.length;vt++)R.__webglColorRenderbuffer[vt]&&o.deleteRenderbuffer(R.__webglColorRenderbuffer[vt]);R.__webglDepthRenderbuffer&&o.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const at=L.textures;for(let vt=0,St=at.length;vt<St;vt++){const _t=r.get(at[vt]);_t.__webglTexture&&(o.deleteTexture(_t.__webglTexture),h.memory.textures--),r.remove(at[vt])}r.remove(L)}let H=0;function it(){H=0}function $(){const L=H;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),H+=1,L}function dt(L){const R=[];return R.push(L.wrapS),R.push(L.wrapT),R.push(L.wrapR||0),R.push(L.magFilter),R.push(L.minFilter),R.push(L.anisotropy),R.push(L.internalFormat),R.push(L.format),R.push(L.type),R.push(L.generateMipmaps),R.push(L.premultiplyAlpha),R.push(L.flipY),R.push(L.unpackAlignment),R.push(L.colorSpace),R.join()}function ht(L,R){const at=r.get(L);if(L.isVideoTexture&&Rt(L),L.isRenderTargetTexture===!1&&L.version>0&&at.__version!==L.version){const vt=L.image;if(vt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(vt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{D(at,L,R);return}}i.bindTexture(o.TEXTURE_2D,at.__webglTexture,o.TEXTURE0+R)}function q(L,R){const at=r.get(L);if(L.version>0&&at.__version!==L.version){D(at,L,R);return}i.bindTexture(o.TEXTURE_2D_ARRAY,at.__webglTexture,o.TEXTURE0+R)}function lt(L,R){const at=r.get(L);if(L.version>0&&at.__version!==L.version){D(at,L,R);return}i.bindTexture(o.TEXTURE_3D,at.__webglTexture,o.TEXTURE0+R)}function X(L,R){const at=r.get(L);if(L.version>0&&at.__version!==L.version){W(at,L,R);return}i.bindTexture(o.TEXTURE_CUBE_MAP,at.__webglTexture,o.TEXTURE0+R)}const xt={[sp]:o.REPEAT,[wa]:o.CLAMP_TO_EDGE,[rp]:o.MIRRORED_REPEAT},yt={[ki]:o.NEAREST,[J1]:o.NEAREST_MIPMAP_NEAREST,[Zc]:o.NEAREST_MIPMAP_LINEAR,[ti]:o.LINEAR,[pd]:o.LINEAR_MIPMAP_NEAREST,[$s]:o.LINEAR_MIPMAP_LINEAR},wt={[nT]:o.NEVER,[lT]:o.ALWAYS,[iT]:o.LESS,[Oy]:o.LEQUAL,[aT]:o.EQUAL,[oT]:o.GEQUAL,[sT]:o.GREATER,[rT]:o.NOTEQUAL};function Ft(L,R){if(R.type===Da&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===ti||R.magFilter===pd||R.magFilter===Zc||R.magFilter===$s||R.minFilter===ti||R.minFilter===pd||R.minFilter===Zc||R.minFilter===$s)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,xt[R.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,xt[R.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,xt[R.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,yt[R.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,yt[R.minFilter]),R.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,wt[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===ki||R.minFilter!==Zc&&R.minFilter!==$s||R.type===Da&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||r.get(R).__currentAnisotropy){const at=e.get("EXT_texture_filter_anisotropic");o.texParameterf(L,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,l.getMaxAnisotropy())),r.get(R).__currentAnisotropy=R.anisotropy}}}function Wt(L,R){let at=!1;L.__webglInit===void 0&&(L.__webglInit=!0,R.addEventListener("dispose",F));const vt=R.source;let St=x.get(vt);St===void 0&&(St={},x.set(vt,St));const _t=dt(R);if(_t!==L.__cacheKey){St[_t]===void 0&&(St[_t]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,at=!0),St[_t].usedTimes++;const Yt=St[L.__cacheKey];Yt!==void 0&&(St[L.__cacheKey].usedTimes--,Yt.usedTimes===0&&U(R)),L.__cacheKey=_t,L.__webglTexture=St[_t].texture}return at}function D(L,R,at){let vt=o.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(vt=o.TEXTURE_2D_ARRAY),R.isData3DTexture&&(vt=o.TEXTURE_3D);const St=Wt(L,R),_t=R.source;i.bindTexture(vt,L.__webglTexture,o.TEXTURE0+at);const Yt=r.get(_t);if(_t.version!==Yt.__version||St===!0){i.activeTexture(o.TEXTURE0+at);const It=ze.getPrimaries(ze.workingColorSpace),Pt=R.colorSpace===ms?null:ze.getPrimaries(R.colorSpace),me=R.colorSpace===ms||It===Pt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,R.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,R.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let At=A(R.image,!1,l.maxTextureSize);At=_e(R,At);const kt=f.convert(R.format,R.colorSpace),Qt=f.convert(R.type);let ee=z(R.internalFormat,kt,Qt,R.colorSpace,R.isVideoTexture);Ft(vt,R);let jt;const de=R.mipmaps,ce=R.isVideoTexture!==!0,Le=Yt.__version===void 0||St===!0,k=_t.dataReady,Et=j(R,At);if(R.isDepthTexture)ee=N(R.format===vo,R.type),Le&&(ce?i.texStorage2D(o.TEXTURE_2D,1,ee,At.width,At.height):i.texImage2D(o.TEXTURE_2D,0,ee,At.width,At.height,0,kt,Qt,null));else if(R.isDataTexture)if(de.length>0){ce&&Le&&i.texStorage2D(o.TEXTURE_2D,Et,ee,de[0].width,de[0].height);for(let rt=0,gt=de.length;rt<gt;rt++)jt=de[rt],ce?k&&i.texSubImage2D(o.TEXTURE_2D,rt,0,0,jt.width,jt.height,kt,Qt,jt.data):i.texImage2D(o.TEXTURE_2D,rt,ee,jt.width,jt.height,0,kt,Qt,jt.data);R.generateMipmaps=!1}else ce?(Le&&i.texStorage2D(o.TEXTURE_2D,Et,ee,At.width,At.height),k&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,At.width,At.height,kt,Qt,At.data)):i.texImage2D(o.TEXTURE_2D,0,ee,At.width,At.height,0,kt,Qt,At.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){ce&&Le&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Et,ee,de[0].width,de[0].height,At.depth);for(let rt=0,gt=de.length;rt<gt;rt++)if(jt=de[rt],R.format!==ji)if(kt!==null)if(ce){if(k)if(R.layerUpdates.size>0){const Ct=nx(jt.width,jt.height,R.format,R.type);for(const Lt of R.layerUpdates){const ne=jt.data.subarray(Lt*Ct/jt.data.BYTES_PER_ELEMENT,(Lt+1)*Ct/jt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,rt,0,0,Lt,jt.width,jt.height,1,kt,ne)}R.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,rt,0,0,0,jt.width,jt.height,At.depth,kt,jt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,rt,ee,jt.width,jt.height,At.depth,0,jt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ce?k&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,rt,0,0,0,jt.width,jt.height,At.depth,kt,Qt,jt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,rt,ee,jt.width,jt.height,At.depth,0,kt,Qt,jt.data)}else{ce&&Le&&i.texStorage2D(o.TEXTURE_2D,Et,ee,de[0].width,de[0].height);for(let rt=0,gt=de.length;rt<gt;rt++)jt=de[rt],R.format!==ji?kt!==null?ce?k&&i.compressedTexSubImage2D(o.TEXTURE_2D,rt,0,0,jt.width,jt.height,kt,jt.data):i.compressedTexImage2D(o.TEXTURE_2D,rt,ee,jt.width,jt.height,0,jt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?k&&i.texSubImage2D(o.TEXTURE_2D,rt,0,0,jt.width,jt.height,kt,Qt,jt.data):i.texImage2D(o.TEXTURE_2D,rt,ee,jt.width,jt.height,0,kt,Qt,jt.data)}else if(R.isDataArrayTexture)if(ce){if(Le&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Et,ee,At.width,At.height,At.depth),k)if(R.layerUpdates.size>0){const rt=nx(At.width,At.height,R.format,R.type);for(const gt of R.layerUpdates){const Ct=At.data.subarray(gt*rt/At.data.BYTES_PER_ELEMENT,(gt+1)*rt/At.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,gt,At.width,At.height,1,kt,Qt,Ct)}R.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,kt,Qt,At.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,ee,At.width,At.height,At.depth,0,kt,Qt,At.data);else if(R.isData3DTexture)ce?(Le&&i.texStorage3D(o.TEXTURE_3D,Et,ee,At.width,At.height,At.depth),k&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,kt,Qt,At.data)):i.texImage3D(o.TEXTURE_3D,0,ee,At.width,At.height,At.depth,0,kt,Qt,At.data);else if(R.isFramebufferTexture){if(Le)if(ce)i.texStorage2D(o.TEXTURE_2D,Et,ee,At.width,At.height);else{let rt=At.width,gt=At.height;for(let Ct=0;Ct<Et;Ct++)i.texImage2D(o.TEXTURE_2D,Ct,ee,rt,gt,0,kt,Qt,null),rt>>=1,gt>>=1}}else if(de.length>0){if(ce&&Le){const rt=Vt(de[0]);i.texStorage2D(o.TEXTURE_2D,Et,ee,rt.width,rt.height)}for(let rt=0,gt=de.length;rt<gt;rt++)jt=de[rt],ce?k&&i.texSubImage2D(o.TEXTURE_2D,rt,0,0,kt,Qt,jt):i.texImage2D(o.TEXTURE_2D,rt,ee,kt,Qt,jt);R.generateMipmaps=!1}else if(ce){if(Le){const rt=Vt(At);i.texStorage2D(o.TEXTURE_2D,Et,ee,rt.width,rt.height)}k&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,kt,Qt,At)}else i.texImage2D(o.TEXTURE_2D,0,ee,kt,Qt,At);M(R)&&y(vt),Yt.__version=_t.version,R.onUpdate&&R.onUpdate(R)}L.__version=R.version}function W(L,R,at){if(R.image.length!==6)return;const vt=Wt(L,R),St=R.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+at);const _t=r.get(St);if(St.version!==_t.__version||vt===!0){i.activeTexture(o.TEXTURE0+at);const Yt=ze.getPrimaries(ze.workingColorSpace),It=R.colorSpace===ms?null:ze.getPrimaries(R.colorSpace),Pt=R.colorSpace===ms||Yt===It?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,R.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,R.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);const me=R.isCompressedTexture||R.image[0].isCompressedTexture,At=R.image[0]&&R.image[0].isDataTexture,kt=[];for(let gt=0;gt<6;gt++)!me&&!At?kt[gt]=A(R.image[gt],!0,l.maxCubemapSize):kt[gt]=At?R.image[gt].image:R.image[gt],kt[gt]=_e(R,kt[gt]);const Qt=kt[0],ee=f.convert(R.format,R.colorSpace),jt=f.convert(R.type),de=z(R.internalFormat,ee,jt,R.colorSpace),ce=R.isVideoTexture!==!0,Le=_t.__version===void 0||vt===!0,k=St.dataReady;let Et=j(R,Qt);Ft(o.TEXTURE_CUBE_MAP,R);let rt;if(me){ce&&Le&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Et,de,Qt.width,Qt.height);for(let gt=0;gt<6;gt++){rt=kt[gt].mipmaps;for(let Ct=0;Ct<rt.length;Ct++){const Lt=rt[Ct];R.format!==ji?ee!==null?ce?k&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct,0,0,Lt.width,Lt.height,ee,Lt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct,de,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ce?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct,0,0,Lt.width,Lt.height,ee,jt,Lt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct,de,Lt.width,Lt.height,0,ee,jt,Lt.data)}}}else{if(rt=R.mipmaps,ce&&Le){rt.length>0&&Et++;const gt=Vt(kt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Et,de,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(At){ce?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,kt[gt].width,kt[gt].height,ee,jt,kt[gt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,de,kt[gt].width,kt[gt].height,0,ee,jt,kt[gt].data);for(let Ct=0;Ct<rt.length;Ct++){const ne=rt[Ct].image[gt].image;ce?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct+1,0,0,ne.width,ne.height,ee,jt,ne.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct+1,de,ne.width,ne.height,0,ee,jt,ne.data)}}else{ce?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,ee,jt,kt[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,de,ee,jt,kt[gt]);for(let Ct=0;Ct<rt.length;Ct++){const Lt=rt[Ct];ce?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct+1,0,0,ee,jt,Lt.image[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct+1,de,ee,jt,Lt.image[gt])}}}M(R)&&y(o.TEXTURE_CUBE_MAP),_t.__version=St.version,R.onUpdate&&R.onUpdate(R)}L.__version=R.version}function ct(L,R,at,vt,St,_t){const Yt=f.convert(at.format,at.colorSpace),It=f.convert(at.type),Pt=z(at.internalFormat,Yt,It,at.colorSpace),me=r.get(R),At=r.get(at);if(At.__renderTarget=R,!me.__hasExternalTextures){const kt=Math.max(1,R.width>>_t),Qt=Math.max(1,R.height>>_t);St===o.TEXTURE_3D||St===o.TEXTURE_2D_ARRAY?i.texImage3D(St,_t,Pt,kt,Qt,R.depth,0,Yt,It,null):i.texImage2D(St,_t,Pt,kt,Qt,0,Yt,It,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),Jt(R)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,vt,St,At.__webglTexture,0,se(R)):(St===o.TEXTURE_2D||St>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,vt,St,At.__webglTexture,_t),i.bindFramebuffer(o.FRAMEBUFFER,null)}function ft(L,R,at){if(o.bindRenderbuffer(o.RENDERBUFFER,L),R.depthBuffer){const vt=R.depthTexture,St=vt&&vt.isDepthTexture?vt.type:null,_t=N(R.stencilBuffer,St),Yt=R.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,It=se(R);Jt(R)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,It,_t,R.width,R.height):at?o.renderbufferStorageMultisample(o.RENDERBUFFER,It,_t,R.width,R.height):o.renderbufferStorage(o.RENDERBUFFER,_t,R.width,R.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Yt,o.RENDERBUFFER,L)}else{const vt=R.textures;for(let St=0;St<vt.length;St++){const _t=vt[St],Yt=f.convert(_t.format,_t.colorSpace),It=f.convert(_t.type),Pt=z(_t.internalFormat,Yt,It,_t.colorSpace),me=se(R);at&&Jt(R)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,me,Pt,R.width,R.height):Jt(R)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,me,Pt,R.width,R.height):o.renderbufferStorage(o.RENDERBUFFER,Pt,R.width,R.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Mt(L,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const vt=r.get(R.depthTexture);vt.__renderTarget=R,(!vt.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),ht(R.depthTexture,0);const St=vt.__webglTexture,_t=se(R);if(R.depthTexture.format===fo)Jt(R)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,St,0,_t):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,St,0);else if(R.depthTexture.format===vo)Jt(R)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,St,0,_t):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,St,0);else throw new Error("Unknown depthTexture format")}function Ht(L){const R=r.get(L),at=L.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==L.depthTexture){const vt=L.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),vt){const St=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,vt.removeEventListener("dispose",St)};vt.addEventListener("dispose",St),R.__depthDisposeCallback=St}R.__boundDepthTexture=vt}if(L.depthTexture&&!R.__autoAllocateDepthBuffer){if(at)throw new Error("target.depthTexture not supported in Cube render targets");Mt(R.__webglFramebuffer,L)}else if(at){R.__webglDepthbuffer=[];for(let vt=0;vt<6;vt++)if(i.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer[vt]),R.__webglDepthbuffer[vt]===void 0)R.__webglDepthbuffer[vt]=o.createRenderbuffer(),ft(R.__webglDepthbuffer[vt],L,!1);else{const St=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,_t=R.__webglDepthbuffer[vt];o.bindRenderbuffer(o.RENDERBUFFER,_t),o.framebufferRenderbuffer(o.FRAMEBUFFER,St,o.RENDERBUFFER,_t)}}else if(i.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=o.createRenderbuffer(),ft(R.__webglDepthbuffer,L,!1);else{const vt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,St=R.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,St),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,St)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Dt(L,R,at){const vt=r.get(L);R!==void 0&&ct(vt.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),at!==void 0&&Ht(L)}function Tt(L){const R=L.texture,at=r.get(L),vt=r.get(R);L.addEventListener("dispose",P);const St=L.textures,_t=L.isWebGLCubeRenderTarget===!0,Yt=St.length>1;if(Yt||(vt.__webglTexture===void 0&&(vt.__webglTexture=o.createTexture()),vt.__version=R.version,h.memory.textures++),_t){at.__webglFramebuffer=[];for(let It=0;It<6;It++)if(R.mipmaps&&R.mipmaps.length>0){at.__webglFramebuffer[It]=[];for(let Pt=0;Pt<R.mipmaps.length;Pt++)at.__webglFramebuffer[It][Pt]=o.createFramebuffer()}else at.__webglFramebuffer[It]=o.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){at.__webglFramebuffer=[];for(let It=0;It<R.mipmaps.length;It++)at.__webglFramebuffer[It]=o.createFramebuffer()}else at.__webglFramebuffer=o.createFramebuffer();if(Yt)for(let It=0,Pt=St.length;It<Pt;It++){const me=r.get(St[It]);me.__webglTexture===void 0&&(me.__webglTexture=o.createTexture(),h.memory.textures++)}if(L.samples>0&&Jt(L)===!1){at.__webglMultisampledFramebuffer=o.createFramebuffer(),at.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,at.__webglMultisampledFramebuffer);for(let It=0;It<St.length;It++){const Pt=St[It];at.__webglColorRenderbuffer[It]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,at.__webglColorRenderbuffer[It]);const me=f.convert(Pt.format,Pt.colorSpace),At=f.convert(Pt.type),kt=z(Pt.internalFormat,me,At,Pt.colorSpace,L.isXRRenderTarget===!0),Qt=se(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,Qt,kt,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+It,o.RENDERBUFFER,at.__webglColorRenderbuffer[It])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(at.__webglDepthRenderbuffer=o.createRenderbuffer(),ft(at.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(_t){i.bindTexture(o.TEXTURE_CUBE_MAP,vt.__webglTexture),Ft(o.TEXTURE_CUBE_MAP,R);for(let It=0;It<6;It++)if(R.mipmaps&&R.mipmaps.length>0)for(let Pt=0;Pt<R.mipmaps.length;Pt++)ct(at.__webglFramebuffer[It][Pt],L,R,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+It,Pt);else ct(at.__webglFramebuffer[It],L,R,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+It,0);M(R)&&y(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Yt){for(let It=0,Pt=St.length;It<Pt;It++){const me=St[It],At=r.get(me);i.bindTexture(o.TEXTURE_2D,At.__webglTexture),Ft(o.TEXTURE_2D,me),ct(at.__webglFramebuffer,L,me,o.COLOR_ATTACHMENT0+It,o.TEXTURE_2D,0),M(me)&&y(o.TEXTURE_2D)}i.unbindTexture()}else{let It=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(It=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(It,vt.__webglTexture),Ft(It,R),R.mipmaps&&R.mipmaps.length>0)for(let Pt=0;Pt<R.mipmaps.length;Pt++)ct(at.__webglFramebuffer[Pt],L,R,o.COLOR_ATTACHMENT0,It,Pt);else ct(at.__webglFramebuffer,L,R,o.COLOR_ATTACHMENT0,It,0);M(R)&&y(It),i.unbindTexture()}L.depthBuffer&&Ht(L)}function Gt(L){const R=L.textures;for(let at=0,vt=R.length;at<vt;at++){const St=R[at];if(M(St)){const _t=O(L),Yt=r.get(St).__webglTexture;i.bindTexture(_t,Yt),y(_t),i.unbindTexture()}}}const ae=[],G=[];function on(L){if(L.samples>0){if(Jt(L)===!1){const R=L.textures,at=L.width,vt=L.height;let St=o.COLOR_BUFFER_BIT;const _t=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Yt=r.get(L),It=R.length>1;if(It)for(let Pt=0;Pt<R.length;Pt++)i.bindFramebuffer(o.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Yt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer);for(let Pt=0;Pt<R.length;Pt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(St|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(St|=o.STENCIL_BUFFER_BIT)),It){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Yt.__webglColorRenderbuffer[Pt]);const me=r.get(R[Pt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,me,0)}o.blitFramebuffer(0,0,at,vt,0,0,at,vt,St,o.NEAREST),p===!0&&(ae.length=0,G.length=0,ae.push(o.COLOR_ATTACHMENT0+Pt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ae.push(_t),G.push(_t),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,G)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ae))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),It)for(let Pt=0;Pt<R.length;Pt++){i.bindFramebuffer(o.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.RENDERBUFFER,Yt.__webglColorRenderbuffer[Pt]);const me=r.get(R[Pt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Yt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.TEXTURE_2D,me,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&p){const R=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[R])}}}function se(L){return Math.min(l.maxSamples,L.samples)}function Jt(L){const R=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Rt(L){const R=h.render.frame;_.get(L)!==R&&(_.set(L,R),L.update())}function _e(L,R){const at=L.colorSpace,vt=L.format,St=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||at!==xo&&at!==ms&&(ze.getTransfer(at)===Ve?(vt!==ji||St!==La)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",at)),R}function Vt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(g.width=L.naturalWidth||L.width,g.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(g.width=L.displayWidth,g.height=L.displayHeight):(g.width=L.width,g.height=L.height),g}this.allocateTextureUnit=$,this.resetTextureUnits=it,this.setTexture2D=ht,this.setTexture2DArray=q,this.setTexture3D=lt,this.setTextureCube=X,this.rebindTextures=Dt,this.setupRenderTarget=Tt,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=on,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=Jt}function LC(o,e){function i(r,l=ms){let f;const h=ze.getTransfer(l);if(r===La)return o.UNSIGNED_BYTE;if(r===Vp)return o.UNSIGNED_SHORT_4_4_4_4;if(r===jp)return o.UNSIGNED_SHORT_5_5_5_1;if(r===by)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===Ey)return o.BYTE;if(r===Ty)return o.SHORT;if(r===Ml)return o.UNSIGNED_SHORT;if(r===Gp)return o.INT;if(r===tr)return o.UNSIGNED_INT;if(r===Da)return o.FLOAT;if(r===Tl)return o.HALF_FLOAT;if(r===Ay)return o.ALPHA;if(r===Ry)return o.RGB;if(r===ji)return o.RGBA;if(r===Cy)return o.LUMINANCE;if(r===wy)return o.LUMINANCE_ALPHA;if(r===fo)return o.DEPTH_COMPONENT;if(r===vo)return o.DEPTH_STENCIL;if(r===Dy)return o.RED;if(r===kp)return o.RED_INTEGER;if(r===Ny)return o.RG;if(r===Xp)return o.RG_INTEGER;if(r===qp)return o.RGBA_INTEGER;if(r===xu||r===yu||r===Su||r===Mu)if(h===Ve)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(r===xu)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===yu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Su)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Mu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(r===xu)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===yu)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Su)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Mu)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===op||r===lp||r===cp||r===up)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(r===op)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===lp)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===cp)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===up)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===fp||r===hp||r===dp)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(r===fp||r===hp)return h===Ve?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(r===dp)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===pp||r===mp||r===gp||r===_p||r===vp||r===xp||r===yp||r===Sp||r===Mp||r===Ep||r===Tp||r===bp||r===Ap||r===Rp)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(r===pp)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===mp)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===gp)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===_p)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===vp)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===xp)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===yp)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Sp)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Mp)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ep)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Tp)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===bp)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ap)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Rp)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Eu||r===Cp||r===wp)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(r===Eu)return h===Ve?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Cp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===wp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Uy||r===Dp||r===Np||r===Up)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(r===Eu)return f.COMPRESSED_RED_RGTC1_EXT;if(r===Dp)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Np)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Up)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===_o?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const OC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zC=`
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

}`;class PC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new Gn,f=e.properties.get(l);f.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new xs({vertexShader:OC,fragmentShader:zC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new pi(new Cl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class IC extends ir{constructor(e,i){super();const r=this;let l=null,f=1,h=null,d="local-floor",p=1,g=null,_=null,m=null,x=null,E=null,T=null;const A=new PC,M=i.getContextAttributes();let y=null,O=null;const z=[],N=[],j=new ue;let F=null;const P=new Ri;P.viewport=new rn;const B=new Ri;B.viewport=new rn;const U=[P,B],C=new eb;let H=null,it=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let W=z[D];return W===void 0&&(W=new zd,z[D]=W),W.getTargetRaySpace()},this.getControllerGrip=function(D){let W=z[D];return W===void 0&&(W=new zd,z[D]=W),W.getGripSpace()},this.getHand=function(D){let W=z[D];return W===void 0&&(W=new zd,z[D]=W),W.getHandSpace()};function $(D){const W=N.indexOf(D.inputSource);if(W===-1)return;const ct=z[W];ct!==void 0&&(ct.update(D.inputSource,D.frame,g||h),ct.dispatchEvent({type:D.type,data:D.inputSource}))}function dt(){l.removeEventListener("select",$),l.removeEventListener("selectstart",$),l.removeEventListener("selectend",$),l.removeEventListener("squeeze",$),l.removeEventListener("squeezestart",$),l.removeEventListener("squeezeend",$),l.removeEventListener("end",dt),l.removeEventListener("inputsourceschange",ht);for(let D=0;D<z.length;D++){const W=N[D];W!==null&&(N[D]=null,z[D].disconnect(W))}H=null,it=null,A.reset(),e.setRenderTarget(y),E=null,x=null,m=null,l=null,O=null,Wt.stop(),r.isPresenting=!1,e.setPixelRatio(F),e.setSize(j.width,j.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){f=D,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){d=D,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||h},this.setReferenceSpace=function(D){g=D},this.getBaseLayer=function(){return x!==null?x:E},this.getBinding=function(){return m},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(D){if(l=D,l!==null){if(y=e.getRenderTarget(),l.addEventListener("select",$),l.addEventListener("selectstart",$),l.addEventListener("selectend",$),l.addEventListener("squeeze",$),l.addEventListener("squeezestart",$),l.addEventListener("squeezeend",$),l.addEventListener("end",dt),l.addEventListener("inputsourceschange",ht),M.xrCompatible!==!0&&await i.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(j),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ct=null,ft=null,Mt=null;M.depth&&(Mt=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ct=M.stencil?vo:fo,ft=M.stencil?_o:tr);const Ht={colorFormat:i.RGBA8,depthFormat:Mt,scaleFactor:f};m=new XRWebGLBinding(l,i),x=m.createProjectionLayer(Ht),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),O=new er(x.textureWidth,x.textureHeight,{format:ji,type:La,depthTexture:new Xy(x.textureWidth,x.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const ct={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:f};E=new XRWebGLLayer(l,i,ct),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),O=new er(E.framebufferWidth,E.framebufferHeight,{format:ji,type:La,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(p),g=null,h=await l.requestReferenceSpace(d),Wt.setContext(l),Wt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function ht(D){for(let W=0;W<D.removed.length;W++){const ct=D.removed[W],ft=N.indexOf(ct);ft>=0&&(N[ft]=null,z[ft].disconnect(ct))}for(let W=0;W<D.added.length;W++){const ct=D.added[W];let ft=N.indexOf(ct);if(ft===-1){for(let Ht=0;Ht<z.length;Ht++)if(Ht>=N.length){N.push(ct),ft=Ht;break}else if(N[Ht]===null){N[Ht]=ct,ft=Ht;break}if(ft===-1)break}const Mt=z[ft];Mt&&Mt.connect(ct)}}const q=new et,lt=new et;function X(D,W,ct){q.setFromMatrixPosition(W.matrixWorld),lt.setFromMatrixPosition(ct.matrixWorld);const ft=q.distanceTo(lt),Mt=W.projectionMatrix.elements,Ht=ct.projectionMatrix.elements,Dt=Mt[14]/(Mt[10]-1),Tt=Mt[14]/(Mt[10]+1),Gt=(Mt[9]+1)/Mt[5],ae=(Mt[9]-1)/Mt[5],G=(Mt[8]-1)/Mt[0],on=(Ht[8]+1)/Ht[0],se=Dt*G,Jt=Dt*on,Rt=ft/(-G+on),_e=Rt*-G;if(W.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(_e),D.translateZ(Rt),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert(),Mt[10]===-1)D.projectionMatrix.copy(W.projectionMatrix),D.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{const Vt=Dt+Rt,L=Tt+Rt,R=se-_e,at=Jt+(ft-_e),vt=Gt*Tt/L*Vt,St=ae*Tt/L*Vt;D.projectionMatrix.makePerspective(R,at,vt,St,Vt,L),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}}function xt(D,W){W===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(W.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(l===null)return;let W=D.near,ct=D.far;A.texture!==null&&(A.depthNear>0&&(W=A.depthNear),A.depthFar>0&&(ct=A.depthFar)),C.near=B.near=P.near=W,C.far=B.far=P.far=ct,(H!==C.near||it!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),H=C.near,it=C.far),P.layers.mask=D.layers.mask|2,B.layers.mask=D.layers.mask|4,C.layers.mask=P.layers.mask|B.layers.mask;const ft=D.parent,Mt=C.cameras;xt(C,ft);for(let Ht=0;Ht<Mt.length;Ht++)xt(Mt[Ht],ft);Mt.length===2?X(C,P,B):C.projectionMatrix.copy(P.projectionMatrix),yt(D,C,ft)};function yt(D,W,ct){ct===null?D.matrix.copy(W.matrixWorld):(D.matrix.copy(ct.matrixWorld),D.matrix.invert(),D.matrix.multiply(W.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(W.projectionMatrix),D.projectionMatrixInverse.copy(W.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=Lp*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(x===null&&E===null))return p},this.setFoveation=function(D){p=D,x!==null&&(x.fixedFoveation=D),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=D)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(C)};let wt=null;function Ft(D,W){if(_=W.getViewerPose(g||h),T=W,_!==null){const ct=_.views;E!==null&&(e.setRenderTargetFramebuffer(O,E.framebuffer),e.setRenderTarget(O));let ft=!1;ct.length!==C.cameras.length&&(C.cameras.length=0,ft=!0);for(let Dt=0;Dt<ct.length;Dt++){const Tt=ct[Dt];let Gt=null;if(E!==null)Gt=E.getViewport(Tt);else{const G=m.getViewSubImage(x,Tt);Gt=G.viewport,Dt===0&&(e.setRenderTargetTextures(O,G.colorTexture,x.ignoreDepthValues?void 0:G.depthStencilTexture),e.setRenderTarget(O))}let ae=U[Dt];ae===void 0&&(ae=new Ri,ae.layers.enable(Dt),ae.viewport=new rn,U[Dt]=ae),ae.matrix.fromArray(Tt.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(Tt.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(Gt.x,Gt.y,Gt.width,Gt.height),Dt===0&&(C.matrix.copy(ae.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ft===!0&&C.cameras.push(ae)}const Mt=l.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&m){const Dt=m.getDepthInformation(ct[0]);Dt&&Dt.isValid&&Dt.texture&&A.init(e,Dt,l.renderState)}}for(let ct=0;ct<z.length;ct++){const ft=N[ct],Mt=z[ct];ft!==null&&Mt!==void 0&&Mt.update(ft,W,g||h)}wt&&wt(D,W),W.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:W}),T=null}const Wt=new Yy;Wt.setAnimationLoop(Ft),this.setAnimationLoop=function(D){wt=D},this.dispose=function(){}}}const Ws=new sa,FC=new tn;function BC(o,e){function i(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function r(M,y){y.color.getRGB(M.fogColor.value,Hy(o)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function l(M,y,O,z,N){y.isMeshBasicMaterial||y.isMeshLambertMaterial?f(M,y):y.isMeshToonMaterial?(f(M,y),m(M,y)):y.isMeshPhongMaterial?(f(M,y),_(M,y)):y.isMeshStandardMaterial?(f(M,y),x(M,y),y.isMeshPhysicalMaterial&&E(M,y,N)):y.isMeshMatcapMaterial?(f(M,y),T(M,y)):y.isMeshDepthMaterial?f(M,y):y.isMeshDistanceMaterial?(f(M,y),A(M,y)):y.isMeshNormalMaterial?f(M,y):y.isLineBasicMaterial?(h(M,y),y.isLineDashedMaterial&&d(M,y)):y.isPointsMaterial?p(M,y,O,z):y.isSpriteMaterial?g(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function f(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,i(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===ei&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,i(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===ei&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,i(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,i(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const O=e.get(y),z=O.envMap,N=O.envMapRotation;z&&(M.envMap.value=z,Ws.copy(N),Ws.x*=-1,Ws.y*=-1,Ws.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(Ws.y*=-1,Ws.z*=-1),M.envMapRotation.value.setFromMatrix4(FC.makeRotationFromEuler(Ws)),M.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,M.aoMapTransform))}function h(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform))}function d(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function p(M,y,O,z){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*O,M.scale.value=z*.5,y.map&&(M.map.value=y.map,i(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function g(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function _(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function m(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function x(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function E(M,y,O){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ei&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=O.texture,M.transmissionSamplerSize.value.set(O.width,O.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,M.specularIntensityMapTransform))}function T(M,y){y.matcap&&(M.matcap.value=y.matcap)}function A(M,y){const O=e.get(y).light;M.referencePosition.value.setFromMatrixPosition(O.matrixWorld),M.nearDistance.value=O.shadow.camera.near,M.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function HC(o,e,i,r){let l={},f={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(O,z){const N=z.program;r.uniformBlockBinding(O,N)}function g(O,z){let N=l[O.id];N===void 0&&(T(O),N=_(O),l[O.id]=N,O.addEventListener("dispose",M));const j=z.program;r.updateUBOMapping(O,j);const F=e.render.frame;f[O.id]!==F&&(x(O),f[O.id]=F)}function _(O){const z=m();O.__bindingPointIndex=z;const N=o.createBuffer(),j=O.__size,F=O.usage;return o.bindBuffer(o.UNIFORM_BUFFER,N),o.bufferData(o.UNIFORM_BUFFER,j,F),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,z,N),N}function m(){for(let O=0;O<d;O++)if(h.indexOf(O)===-1)return h.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(O){const z=l[O.id],N=O.uniforms,j=O.__cache;o.bindBuffer(o.UNIFORM_BUFFER,z);for(let F=0,P=N.length;F<P;F++){const B=Array.isArray(N[F])?N[F]:[N[F]];for(let U=0,C=B.length;U<C;U++){const H=B[U];if(E(H,F,U,j)===!0){const it=H.__offset,$=Array.isArray(H.value)?H.value:[H.value];let dt=0;for(let ht=0;ht<$.length;ht++){const q=$[ht],lt=A(q);typeof q=="number"||typeof q=="boolean"?(H.__data[0]=q,o.bufferSubData(o.UNIFORM_BUFFER,it+dt,H.__data)):q.isMatrix3?(H.__data[0]=q.elements[0],H.__data[1]=q.elements[1],H.__data[2]=q.elements[2],H.__data[3]=0,H.__data[4]=q.elements[3],H.__data[5]=q.elements[4],H.__data[6]=q.elements[5],H.__data[7]=0,H.__data[8]=q.elements[6],H.__data[9]=q.elements[7],H.__data[10]=q.elements[8],H.__data[11]=0):(q.toArray(H.__data,dt),dt+=lt.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,it,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(O,z,N,j){const F=O.value,P=z+"_"+N;if(j[P]===void 0)return typeof F=="number"||typeof F=="boolean"?j[P]=F:j[P]=F.clone(),!0;{const B=j[P];if(typeof F=="number"||typeof F=="boolean"){if(B!==F)return j[P]=F,!0}else if(B.equals(F)===!1)return B.copy(F),!0}return!1}function T(O){const z=O.uniforms;let N=0;const j=16;for(let P=0,B=z.length;P<B;P++){const U=Array.isArray(z[P])?z[P]:[z[P]];for(let C=0,H=U.length;C<H;C++){const it=U[C],$=Array.isArray(it.value)?it.value:[it.value];for(let dt=0,ht=$.length;dt<ht;dt++){const q=$[dt],lt=A(q),X=N%j,xt=X%lt.boundary,yt=X+xt;N+=xt,yt!==0&&j-yt<lt.storage&&(N+=j-yt),it.__data=new Float32Array(lt.storage/Float32Array.BYTES_PER_ELEMENT),it.__offset=N,N+=lt.storage}}}const F=N%j;return F>0&&(N+=j-F),O.__size=N,O.__cache={},this}function A(O){const z={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(z.boundary=4,z.storage=4):O.isVector2?(z.boundary=8,z.storage=8):O.isVector3||O.isColor?(z.boundary=16,z.storage=12):O.isVector4?(z.boundary=16,z.storage=16):O.isMatrix3?(z.boundary=48,z.storage=48):O.isMatrix4?(z.boundary=64,z.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),z}function M(O){const z=O.target;z.removeEventListener("dispose",M);const N=h.indexOf(z.__bindingPointIndex);h.splice(N,1),o.deleteBuffer(l[z.id]),delete l[z.id],delete f[z.id]}function y(){for(const O in l)o.deleteBuffer(l[O]);h=[],l={},f={}}return{bind:p,update:g,dispose:y}}class GC{constructor(e={}){const{canvas:i=fT(),context:r=null,depth:l=!0,stencil:f=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:g=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:m=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=h;const T=new Uint32Array(4),A=new Int32Array(4);let M=null,y=null;const O=[],z=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ai,this.toneMapping=_s,this.toneMappingExposure=1;const N=this;let j=!1,F=0,P=0,B=null,U=-1,C=null;const H=new rn,it=new rn;let $=null;const dt=new Te(0);let ht=0,q=i.width,lt=i.height,X=1,xt=null,yt=null;const wt=new rn(0,0,q,lt),Ft=new rn(0,0,q,lt);let Wt=!1;const D=new Qp;let W=!1,ct=!1;this.transmissionResolutionScale=1;const ft=new tn,Mt=new tn,Ht=new et,Dt=new rn,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function ae(){return B===null?X:1}let G=r;function on(w,K){return i.getContext(w,K)}try{const w={alpha:!0,depth:l,stencil:f,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:g,powerPreference:_,failIfMajorPerformanceCaveat:m};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Hp}`),i.addEventListener("webglcontextlost",gt,!1),i.addEventListener("webglcontextrestored",Ct,!1),i.addEventListener("webglcontextcreationerror",Lt,!1),G===null){const K="webgl2";if(G=on(K,w),G===null)throw on(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let se,Jt,Rt,_e,Vt,L,R,at,vt,St,_t,Yt,It,Pt,me,At,kt,Qt,ee,jt,de,ce,Le,k;function Et(){se=new Q2(G),se.init(),ce=new LC(G,se),Jt=new k2(G,se,e,ce),Rt=new NC(G,se),Jt.reverseDepthBuffer&&x&&Rt.buffers.depth.setReversed(!0),_e=new tR(G),Vt=new vC,L=new UC(G,se,Rt,Vt,Jt,ce,_e),R=new q2(N),at=new K2(N),vt=new rb(G),Le=new V2(G,vt),St=new J2(G,vt,_e,Le),_t=new nR(G,St,vt,_e),ee=new eR(G,Jt,L),At=new X2(Vt),Yt=new _C(N,R,at,se,Jt,Le,At),It=new BC(N,Vt),Pt=new yC,me=new AC(se),Qt=new G2(N,R,at,Rt,_t,E,p),kt=new wC(N,_t,Jt),k=new HC(G,_e,Jt,Rt),jt=new j2(G,se,_e),de=new $2(G,se,_e),_e.programs=Yt.programs,N.capabilities=Jt,N.extensions=se,N.properties=Vt,N.renderLists=Pt,N.shadowMap=kt,N.state=Rt,N.info=_e}Et();const rt=new IC(N,G);this.xr=rt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const w=se.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=se.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(w){w!==void 0&&(X=w,this.setSize(q,lt,!1))},this.getSize=function(w){return w.set(q,lt)},this.setSize=function(w,K,ot=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=w,lt=K,i.width=Math.floor(w*X),i.height=Math.floor(K*X),ot===!0&&(i.style.width=w+"px",i.style.height=K+"px"),this.setViewport(0,0,w,K)},this.getDrawingBufferSize=function(w){return w.set(q*X,lt*X).floor()},this.setDrawingBufferSize=function(w,K,ot){q=w,lt=K,X=ot,i.width=Math.floor(w*ot),i.height=Math.floor(K*ot),this.setViewport(0,0,w,K)},this.getCurrentViewport=function(w){return w.copy(H)},this.getViewport=function(w){return w.copy(wt)},this.setViewport=function(w,K,ot,ut){w.isVector4?wt.set(w.x,w.y,w.z,w.w):wt.set(w,K,ot,ut),Rt.viewport(H.copy(wt).multiplyScalar(X).round())},this.getScissor=function(w){return w.copy(Ft)},this.setScissor=function(w,K,ot,ut){w.isVector4?Ft.set(w.x,w.y,w.z,w.w):Ft.set(w,K,ot,ut),Rt.scissor(it.copy(Ft).multiplyScalar(X).round())},this.getScissorTest=function(){return Wt},this.setScissorTest=function(w){Rt.setScissorTest(Wt=w)},this.setOpaqueSort=function(w){xt=w},this.setTransparentSort=function(w){yt=w},this.getClearColor=function(w){return w.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor(...arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha(...arguments)},this.clear=function(w=!0,K=!0,ot=!0){let ut=0;if(w){let J=!1;if(B!==null){const bt=B.texture.format;J=bt===qp||bt===Xp||bt===kp}if(J){const bt=B.texture.type,Ut=bt===La||bt===tr||bt===Ml||bt===_o||bt===Vp||bt===jp,Nt=Qt.getClearColor(),zt=Qt.getClearAlpha(),ie=Nt.r,oe=Nt.g,$t=Nt.b;Ut?(T[0]=ie,T[1]=oe,T[2]=$t,T[3]=zt,G.clearBufferuiv(G.COLOR,0,T)):(A[0]=ie,A[1]=oe,A[2]=$t,A[3]=zt,G.clearBufferiv(G.COLOR,0,A))}else ut|=G.COLOR_BUFFER_BIT}K&&(ut|=G.DEPTH_BUFFER_BIT),ot&&(ut|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(ut)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",gt,!1),i.removeEventListener("webglcontextrestored",Ct,!1),i.removeEventListener("webglcontextcreationerror",Lt,!1),Qt.dispose(),Pt.dispose(),me.dispose(),Vt.dispose(),R.dispose(),at.dispose(),_t.dispose(),Le.dispose(),k.dispose(),Yt.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",cn),rt.removeEventListener("sessionend",ar),wi.stop()};function gt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),j=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),j=!1;const w=_e.autoReset,K=kt.enabled,ot=kt.autoUpdate,ut=kt.needsUpdate,J=kt.type;Et(),_e.autoReset=w,kt.enabled=K,kt.autoUpdate=ot,kt.needsUpdate=ut,kt.type=J}function Lt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ne(w){const K=w.target;K.removeEventListener("dispose",ne),ke(K)}function ke(w){ln(w),Vt.remove(w)}function ln(w){const K=Vt.get(w).programs;K!==void 0&&(K.forEach(function(ot){Yt.releaseProgram(ot)}),w.isShaderMaterial&&Yt.releaseShaderCache(w))}this.renderBufferDirect=function(w,K,ot,ut,J,bt){K===null&&(K=Tt);const Ut=J.isMesh&&J.matrixWorld.determinant()<0,Nt=Eo(w,K,ot,ut,J);Rt.setMaterial(ut,Ut);let zt=ot.index,ie=1;if(ut.wireframe===!0){if(zt=St.getWireframeAttribute(ot),zt===void 0)return;ie=2}const oe=ot.drawRange,$t=ot.attributes.position;let Ce=oe.start*ie,Ue=(oe.start+oe.count)*ie;bt!==null&&(Ce=Math.max(Ce,bt.start*ie),Ue=Math.min(Ue,(bt.start+bt.count)*ie)),zt!==null?(Ce=Math.max(Ce,0),Ue=Math.min(Ue,zt.count)):$t!=null&&(Ce=Math.max(Ce,0),Ue=Math.min(Ue,$t.count));const We=Ue-Ce;if(We<0||We===1/0)return;Le.setup(J,ut,Nt,ot,zt);let Xe,ye=jt;if(zt!==null&&(Xe=vt.get(zt),ye=de,ye.setIndex(Xe)),J.isMesh)ut.wireframe===!0?(Rt.setLineWidth(ut.wireframeLinewidth*ae()),ye.setMode(G.LINES)):ye.setMode(G.TRIANGLES);else if(J.isLine){let Zt=ut.linewidth;Zt===void 0&&(Zt=1),Rt.setLineWidth(Zt*ae()),J.isLineSegments?ye.setMode(G.LINES):J.isLineLoop?ye.setMode(G.LINE_LOOP):ye.setMode(G.LINE_STRIP)}else J.isPoints?ye.setMode(G.POINTS):J.isSprite&&ye.setMode(G.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)Zs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ye.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))ye.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const Zt=J._multiDrawStarts,Je=J._multiDrawCounts,be=J._multiDrawCount,En=zt?vt.get(zt).bytesPerElement:1,Qe=Vt.get(ut).currentProgram.getUniforms();for(let In=0;In<be;In++)Qe.setValue(G,"_gl_DrawID",In),ye.render(Zt[In]/En,Je[In])}else if(J.isInstancedMesh)ye.renderInstances(Ce,We,J.count);else if(ot.isInstancedBufferGeometry){const Zt=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Je=Math.min(ot.instanceCount,Zt);ye.renderInstances(Ce,We,Je)}else ye.render(Ce,We)};function xe(w,K,ot){w.transparent===!0&&w.side===ia&&w.forceSinglePass===!1?(w.side=ei,w.needsUpdate=!0,mi(w,K,ot),w.side=vs,w.needsUpdate=!0,mi(w,K,ot),w.side=ia):mi(w,K,ot)}this.compile=function(w,K,ot=null){ot===null&&(ot=w),y=me.get(ot),y.init(K),z.push(y),ot.traverseVisible(function(J){J.isLight&&J.layers.test(K.layers)&&(y.pushLight(J),J.castShadow&&y.pushShadow(J))}),w!==ot&&w.traverseVisible(function(J){J.isLight&&J.layers.test(K.layers)&&(y.pushLight(J),J.castShadow&&y.pushShadow(J))}),y.setupLights();const ut=new Set;return w.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const bt=J.material;if(bt)if(Array.isArray(bt))for(let Ut=0;Ut<bt.length;Ut++){const Nt=bt[Ut];xe(Nt,ot,J),ut.add(Nt)}else xe(bt,ot,J),ut.add(bt)}),y=z.pop(),ut},this.compileAsync=function(w,K,ot=null){const ut=this.compile(w,K,ot);return new Promise(J=>{function bt(){if(ut.forEach(function(Ut){Vt.get(Ut).currentProgram.isReady()&&ut.delete(Ut)}),ut.size===0){J(w);return}setTimeout(bt,10)}se.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let we=null;function en(w){we&&we(w)}function cn(){wi.stop()}function ar(){wi.start()}const wi=new Yy;wi.setAnimationLoop(en),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(w){we=w,rt.setAnimationLoop(w),w===null?wi.stop():wi.start()},rt.addEventListener("sessionstart",cn),rt.addEventListener("sessionend",ar),this.render=function(w,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(j===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(K),K=rt.getCamera()),w.isScene===!0&&w.onBeforeRender(N,w,K,B),y=me.get(w,z.length),y.init(K),z.push(y),Mt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),D.setFromProjectionMatrix(Mt),ct=this.localClippingEnabled,W=At.init(this.clippingPlanes,ct),M=Pt.get(w,O.length),M.init(),O.push(M),rt.enabled===!0&&rt.isPresenting===!0){const bt=N.xr.getDepthSensingMesh();bt!==null&&Di(bt,K,-1/0,N.sortObjects)}Di(w,K,0,N.sortObjects),M.finish(),N.sortObjects===!0&&M.sort(xt,yt),Gt=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Gt&&Qt.addToRenderList(M,w),this.info.render.frame++,W===!0&&At.beginShadows();const ot=y.state.shadowsArray;kt.render(ot,w,K),W===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset();const ut=M.opaque,J=M.transmissive;if(y.setupLights(),K.isArrayCamera){const bt=K.cameras;if(J.length>0)for(let Ut=0,Nt=bt.length;Ut<Nt;Ut++){const zt=bt[Ut];ra(ut,J,w,zt)}Gt&&Qt.render(w);for(let Ut=0,Nt=bt.length;Ut<Nt;Ut++){const zt=bt[Ut];ni(M,w,zt,zt.viewport)}}else J.length>0&&ra(ut,J,w,K),Gt&&Qt.render(w),ni(M,w,K);B!==null&&P===0&&(L.updateMultisampleRenderTarget(B),L.updateRenderTargetMipmap(B)),w.isScene===!0&&w.onAfterRender(N,w,K),Le.resetDefaultState(),U=-1,C=null,z.pop(),z.length>0?(y=z[z.length-1],W===!0&&At.setGlobalState(N.clippingPlanes,y.state.camera)):y=null,O.pop(),O.length>0?M=O[O.length-1]:M=null};function Di(w,K,ot,ut){if(w.visible===!1)return;if(w.layers.test(K.layers)){if(w.isGroup)ot=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(K);else if(w.isLight)y.pushLight(w),w.castShadow&&y.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||D.intersectsSprite(w)){ut&&Dt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Mt);const Ut=_t.update(w),Nt=w.material;Nt.visible&&M.push(w,Ut,Nt,ot,Dt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||D.intersectsObject(w))){const Ut=_t.update(w),Nt=w.material;if(ut&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Dt.copy(w.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),Dt.copy(Ut.boundingSphere.center)),Dt.applyMatrix4(w.matrixWorld).applyMatrix4(Mt)),Array.isArray(Nt)){const zt=Ut.groups;for(let ie=0,oe=zt.length;ie<oe;ie++){const $t=zt[ie],Ce=Nt[$t.materialIndex];Ce&&Ce.visible&&M.push(w,Ut,Ce,ot,Dt.z,$t)}}else Nt.visible&&M.push(w,Ut,Nt,ot,Dt.z,null)}}const bt=w.children;for(let Ut=0,Nt=bt.length;Ut<Nt;Ut++)Di(bt[Ut],K,ot,ut)}function ni(w,K,ot,ut){const J=w.opaque,bt=w.transmissive,Ut=w.transparent;y.setupLightsView(ot),W===!0&&At.setGlobalState(N.clippingPlanes,ot),ut&&Rt.viewport(H.copy(ut)),J.length>0&&Ni(J,K,ot),bt.length>0&&Ni(bt,K,ot),Ut.length>0&&Ni(Ut,K,ot),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function ra(w,K,ot,ut){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ut.id]===void 0&&(y.state.transmissionRenderTarget[ut.id]=new er(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?Tl:La,minFilter:$s,samples:4,stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ze.workingColorSpace}));const bt=y.state.transmissionRenderTarget[ut.id],Ut=ut.viewport||H;bt.setSize(Ut.z*N.transmissionResolutionScale,Ut.w*N.transmissionResolutionScale);const Nt=N.getRenderTarget();N.setRenderTarget(bt),N.getClearColor(dt),ht=N.getClearAlpha(),ht<1&&N.setClearColor(16777215,.5),N.clear(),Gt&&Qt.render(ot);const zt=N.toneMapping;N.toneMapping=_s;const ie=ut.viewport;if(ut.viewport!==void 0&&(ut.viewport=void 0),y.setupLightsView(ut),W===!0&&At.setGlobalState(N.clippingPlanes,ut),Ni(w,ot,ut),L.updateMultisampleRenderTarget(bt),L.updateRenderTargetMipmap(bt),se.has("WEBGL_multisampled_render_to_texture")===!1){let oe=!1;for(let $t=0,Ce=K.length;$t<Ce;$t++){const Ue=K[$t],We=Ue.object,Xe=Ue.geometry,ye=Ue.material,Zt=Ue.group;if(ye.side===ia&&We.layers.test(ut.layers)){const Je=ye.side;ye.side=ei,ye.needsUpdate=!0,ii(We,ot,ut,Xe,ye,Zt),ye.side=Je,ye.needsUpdate=!0,oe=!0}}oe===!0&&(L.updateMultisampleRenderTarget(bt),L.updateRenderTargetMipmap(bt))}N.setRenderTarget(Nt),N.setClearColor(dt,ht),ie!==void 0&&(ut.viewport=ie),N.toneMapping=zt}function Ni(w,K,ot){const ut=K.isScene===!0?K.overrideMaterial:null;for(let J=0,bt=w.length;J<bt;J++){const Ut=w[J],Nt=Ut.object,zt=Ut.geometry,ie=ut===null?Ut.material:ut,oe=Ut.group;Nt.layers.test(ot.layers)&&ii(Nt,K,ot,zt,ie,oe)}}function ii(w,K,ot,ut,J,bt){w.onBeforeRender(N,K,ot,ut,J,bt),w.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),J.onBeforeRender(N,K,ot,ut,w,bt),J.transparent===!0&&J.side===ia&&J.forceSinglePass===!1?(J.side=ei,J.needsUpdate=!0,N.renderBufferDirect(ot,K,ut,J,w,bt),J.side=vs,J.needsUpdate=!0,N.renderBufferDirect(ot,K,ut,J,w,bt),J.side=ia):N.renderBufferDirect(ot,K,ut,J,w,bt),w.onAfterRender(N,K,ot,ut,J,bt)}function mi(w,K,ot){K.isScene!==!0&&(K=Tt);const ut=Vt.get(w),J=y.state.lights,bt=y.state.shadowsArray,Ut=J.state.version,Nt=Yt.getParameters(w,J.state,bt,K,ot),zt=Yt.getProgramCacheKey(Nt);let ie=ut.programs;ut.environment=w.isMeshStandardMaterial?K.environment:null,ut.fog=K.fog,ut.envMap=(w.isMeshStandardMaterial?at:R).get(w.envMap||ut.environment),ut.envMapRotation=ut.environment!==null&&w.envMap===null?K.environmentRotation:w.envMapRotation,ie===void 0&&(w.addEventListener("dispose",ne),ie=new Map,ut.programs=ie);let oe=ie.get(zt);if(oe!==void 0){if(ut.currentProgram===oe&&ut.lightsStateVersion===Ut)return Oa(w,Nt),oe}else Nt.uniforms=Yt.getUniforms(w),w.onBeforeCompile(Nt,N),oe=Yt.acquireProgram(Nt,zt),ie.set(zt,oe),ut.uniforms=Nt.uniforms;const $t=ut.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&($t.clippingPlanes=At.uniform),Oa(w,Nt),ut.needsLights=ys(w),ut.lightsStateVersion=Ut,ut.needsLights&&($t.ambientLightColor.value=J.state.ambient,$t.lightProbe.value=J.state.probe,$t.directionalLights.value=J.state.directional,$t.directionalLightShadows.value=J.state.directionalShadow,$t.spotLights.value=J.state.spot,$t.spotLightShadows.value=J.state.spotShadow,$t.rectAreaLights.value=J.state.rectArea,$t.ltc_1.value=J.state.rectAreaLTC1,$t.ltc_2.value=J.state.rectAreaLTC2,$t.pointLights.value=J.state.point,$t.pointLightShadows.value=J.state.pointShadow,$t.hemisphereLights.value=J.state.hemi,$t.directionalShadowMap.value=J.state.directionalShadowMap,$t.directionalShadowMatrix.value=J.state.directionalShadowMatrix,$t.spotShadowMap.value=J.state.spotShadowMap,$t.spotLightMatrix.value=J.state.spotLightMatrix,$t.spotLightMap.value=J.state.spotLightMap,$t.pointShadowMap.value=J.state.pointShadowMap,$t.pointShadowMatrix.value=J.state.pointShadowMatrix),ut.currentProgram=oe,ut.uniformsList=null,oe}function Ui(w){if(w.uniformsList===null){const K=w.currentProgram.getUniforms();w.uniformsList=bu.seqWithValue(K.seq,w.uniforms)}return w.uniformsList}function Oa(w,K){const ot=Vt.get(w);ot.outputColorSpace=K.outputColorSpace,ot.batching=K.batching,ot.batchingColor=K.batchingColor,ot.instancing=K.instancing,ot.instancingColor=K.instancingColor,ot.instancingMorph=K.instancingMorph,ot.skinning=K.skinning,ot.morphTargets=K.morphTargets,ot.morphNormals=K.morphNormals,ot.morphColors=K.morphColors,ot.morphTargetsCount=K.morphTargetsCount,ot.numClippingPlanes=K.numClippingPlanes,ot.numIntersection=K.numClipIntersection,ot.vertexAlphas=K.vertexAlphas,ot.vertexTangents=K.vertexTangents,ot.toneMapping=K.toneMapping}function Eo(w,K,ot,ut,J){K.isScene!==!0&&(K=Tt),L.resetTextureUnits();const bt=K.fog,Ut=ut.isMeshStandardMaterial?K.environment:null,Nt=B===null?N.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:xo,zt=(ut.isMeshStandardMaterial?at:R).get(ut.envMap||Ut),ie=ut.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,oe=!!ot.attributes.tangent&&(!!ut.normalMap||ut.anisotropy>0),$t=!!ot.morphAttributes.position,Ce=!!ot.morphAttributes.normal,Ue=!!ot.morphAttributes.color;let We=_s;ut.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(We=N.toneMapping);const Xe=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,ye=Xe!==void 0?Xe.length:0,Zt=Vt.get(ut),Je=y.state.lights;if(W===!0&&(ct===!0||w!==C)){const wn=w===C&&ut.id===U;At.setState(ut,w,wn)}let be=!1;ut.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==Je.state.version||Zt.outputColorSpace!==Nt||J.isBatchedMesh&&Zt.batching===!1||!J.isBatchedMesh&&Zt.batching===!0||J.isBatchedMesh&&Zt.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Zt.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Zt.instancing===!1||!J.isInstancedMesh&&Zt.instancing===!0||J.isSkinnedMesh&&Zt.skinning===!1||!J.isSkinnedMesh&&Zt.skinning===!0||J.isInstancedMesh&&Zt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Zt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Zt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Zt.instancingMorph===!1&&J.morphTexture!==null||Zt.envMap!==zt||ut.fog===!0&&Zt.fog!==bt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==At.numPlanes||Zt.numIntersection!==At.numIntersection)||Zt.vertexAlphas!==ie||Zt.vertexTangents!==oe||Zt.morphTargets!==$t||Zt.morphNormals!==Ce||Zt.morphColors!==Ue||Zt.toneMapping!==We||Zt.morphTargetsCount!==ye)&&(be=!0):(be=!0,Zt.__version=ut.version);let En=Zt.currentProgram;be===!0&&(En=mi(ut,K,J));let Qe=!1,In=!1,za=!1;const qe=En.getUniforms(),fn=Zt.uniforms;if(Rt.useProgram(En.program)&&(Qe=!0,In=!0,za=!0),ut.id!==U&&(U=ut.id,In=!0),Qe||C!==w){Rt.buffers.depth.getReversed()?(ft.copy(w.projectionMatrix),dT(ft),pT(ft),qe.setValue(G,"projectionMatrix",ft)):qe.setValue(G,"projectionMatrix",w.projectionMatrix),qe.setValue(G,"viewMatrix",w.matrixWorldInverse);const Dn=qe.map.cameraPosition;Dn!==void 0&&Dn.setValue(G,Ht.setFromMatrixPosition(w.matrixWorld)),Jt.logarithmicDepthBuffer&&qe.setValue(G,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ut.isMeshPhongMaterial||ut.isMeshToonMaterial||ut.isMeshLambertMaterial||ut.isMeshBasicMaterial||ut.isMeshStandardMaterial||ut.isShaderMaterial)&&qe.setValue(G,"isOrthographic",w.isOrthographicCamera===!0),C!==w&&(C=w,In=!0,za=!0)}if(J.isSkinnedMesh){qe.setOptional(G,J,"bindMatrix"),qe.setOptional(G,J,"bindMatrixInverse");const wn=J.skeleton;wn&&(wn.boneTexture===null&&wn.computeBoneTexture(),qe.setValue(G,"boneTexture",wn.boneTexture,L))}J.isBatchedMesh&&(qe.setOptional(G,J,"batchingTexture"),qe.setValue(G,"batchingTexture",J._matricesTexture,L),qe.setOptional(G,J,"batchingIdTexture"),qe.setValue(G,"batchingIdTexture",J._indirectTexture,L),qe.setOptional(G,J,"batchingColorTexture"),J._colorsTexture!==null&&qe.setValue(G,"batchingColorTexture",J._colorsTexture,L));const vn=ot.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&ee.update(J,ot,En),(In||Zt.receiveShadow!==J.receiveShadow)&&(Zt.receiveShadow=J.receiveShadow,qe.setValue(G,"receiveShadow",J.receiveShadow)),ut.isMeshGouraudMaterial&&ut.envMap!==null&&(fn.envMap.value=zt,fn.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),ut.isMeshStandardMaterial&&ut.envMap===null&&K.environment!==null&&(fn.envMapIntensity.value=K.environmentIntensity),In&&(qe.setValue(G,"toneMappingExposure",N.toneMappingExposure),Zt.needsLights&&sr(fn,za),bt&&ut.fog===!0&&It.refreshFogUniforms(fn,bt),It.refreshMaterialUniforms(fn,ut,X,lt,y.state.transmissionRenderTarget[w.id]),bu.upload(G,Ui(Zt),fn,L)),ut.isShaderMaterial&&ut.uniformsNeedUpdate===!0&&(bu.upload(G,Ui(Zt),fn,L),ut.uniformsNeedUpdate=!1),ut.isSpriteMaterial&&qe.setValue(G,"center",J.center),qe.setValue(G,"modelViewMatrix",J.modelViewMatrix),qe.setValue(G,"normalMatrix",J.normalMatrix),qe.setValue(G,"modelMatrix",J.matrixWorld),ut.isShaderMaterial||ut.isRawShaderMaterial){const wn=ut.uniformsGroups;for(let Dn=0,or=wn.length;Dn<or;Dn++){const la=wn[Dn];k.update(la,En),k.bind(la,En)}}return En}function sr(w,K){w.ambientLightColor.needsUpdate=K,w.lightProbe.needsUpdate=K,w.directionalLights.needsUpdate=K,w.directionalLightShadows.needsUpdate=K,w.pointLights.needsUpdate=K,w.pointLightShadows.needsUpdate=K,w.spotLights.needsUpdate=K,w.spotLightShadows.needsUpdate=K,w.rectAreaLights.needsUpdate=K,w.hemisphereLights.needsUpdate=K}function ys(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(w,K,ot){Vt.get(w.texture).__webglTexture=K,Vt.get(w.depthTexture).__webglTexture=ot;const ut=Vt.get(w);ut.__hasExternalTextures=!0,ut.__autoAllocateDepthBuffer=ot===void 0,ut.__autoAllocateDepthBuffer||se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ut.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,K){const ot=Vt.get(w);ot.__webglFramebuffer=K,ot.__useDefaultFramebuffer=K===void 0};const oa=G.createFramebuffer();this.setRenderTarget=function(w,K=0,ot=0){B=w,F=K,P=ot;let ut=!0,J=null,bt=!1,Ut=!1;if(w){const zt=Vt.get(w);if(zt.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(G.FRAMEBUFFER,null),ut=!1;else if(zt.__webglFramebuffer===void 0)L.setupRenderTarget(w);else if(zt.__hasExternalTextures)L.rebindTextures(w,Vt.get(w.texture).__webglTexture,Vt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const $t=w.depthTexture;if(zt.__boundDepthTexture!==$t){if($t!==null&&Vt.has($t)&&(w.width!==$t.image.width||w.height!==$t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(w)}}const ie=w.texture;(ie.isData3DTexture||ie.isDataArrayTexture||ie.isCompressedArrayTexture)&&(Ut=!0);const oe=Vt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(oe[K])?J=oe[K][ot]:J=oe[K],bt=!0):w.samples>0&&L.useMultisampledRTT(w)===!1?J=Vt.get(w).__webglMultisampledFramebuffer:Array.isArray(oe)?J=oe[ot]:J=oe,H.copy(w.viewport),it.copy(w.scissor),$=w.scissorTest}else H.copy(wt).multiplyScalar(X).floor(),it.copy(Ft).multiplyScalar(X).floor(),$=Wt;if(ot!==0&&(J=oa),Rt.bindFramebuffer(G.FRAMEBUFFER,J)&&ut&&Rt.drawBuffers(w,J),Rt.viewport(H),Rt.scissor(it),Rt.setScissorTest($),bt){const zt=Vt.get(w.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+K,zt.__webglTexture,ot)}else if(Ut){const zt=Vt.get(w.texture),ie=K;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,zt.__webglTexture,ot,ie)}else if(w!==null&&ot!==0){const zt=Vt.get(w.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,zt.__webglTexture,ot)}U=-1},this.readRenderTargetPixels=function(w,K,ot,ut,J,bt,Ut){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=Vt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ut!==void 0&&(Nt=Nt[Ut]),Nt){Rt.bindFramebuffer(G.FRAMEBUFFER,Nt);try{const zt=w.texture,ie=zt.format,oe=zt.type;if(!Jt.textureFormatReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Jt.textureTypeReadable(oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=w.width-ut&&ot>=0&&ot<=w.height-J&&G.readPixels(K,ot,ut,J,ce.convert(ie),ce.convert(oe),bt)}finally{const zt=B!==null?Vt.get(B).__webglFramebuffer:null;Rt.bindFramebuffer(G.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(w,K,ot,ut,J,bt,Ut){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=Vt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ut!==void 0&&(Nt=Nt[Ut]),Nt){const zt=w.texture,ie=zt.format,oe=zt.type;if(!Jt.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Jt.textureTypeReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=w.width-ut&&ot>=0&&ot<=w.height-J){Rt.bindFramebuffer(G.FRAMEBUFFER,Nt);const $t=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,$t),G.bufferData(G.PIXEL_PACK_BUFFER,bt.byteLength,G.STREAM_READ),G.readPixels(K,ot,ut,J,ce.convert(ie),ce.convert(oe),0);const Ce=B!==null?Vt.get(B).__webglFramebuffer:null;Rt.bindFramebuffer(G.FRAMEBUFFER,Ce);const Ue=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await hT(G,Ue,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,$t),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,bt),G.deleteBuffer($t),G.deleteSync(Ue),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,K=null,ot=0){w.isTexture!==!0&&(Zs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,w=arguments[1]);const ut=Math.pow(2,-ot),J=Math.floor(w.image.width*ut),bt=Math.floor(w.image.height*ut),Ut=K!==null?K.x:0,Nt=K!==null?K.y:0;L.setTexture2D(w,0),G.copyTexSubImage2D(G.TEXTURE_2D,ot,0,0,Ut,Nt,J,bt),Rt.unbindTexture()};const rr=G.createFramebuffer(),Ss=G.createFramebuffer();this.copyTextureToTexture=function(w,K,ot=null,ut=null,J=0,bt=null){w.isTexture!==!0&&(Zs("WebGLRenderer: copyTextureToTexture function signature has changed."),ut=arguments[0]||null,w=arguments[1],K=arguments[2],bt=arguments[3]||0,ot=null),bt===null&&(J!==0?(Zs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),bt=J,J=0):bt=0);let Ut,Nt,zt,ie,oe,$t,Ce,Ue,We;const Xe=w.isCompressedTexture?w.mipmaps[bt]:w.image;if(ot!==null)Ut=ot.max.x-ot.min.x,Nt=ot.max.y-ot.min.y,zt=ot.isBox3?ot.max.z-ot.min.z:1,ie=ot.min.x,oe=ot.min.y,$t=ot.isBox3?ot.min.z:0;else{const vn=Math.pow(2,-J);Ut=Math.floor(Xe.width*vn),Nt=Math.floor(Xe.height*vn),w.isDataArrayTexture?zt=Xe.depth:w.isData3DTexture?zt=Math.floor(Xe.depth*vn):zt=1,ie=0,oe=0,$t=0}ut!==null?(Ce=ut.x,Ue=ut.y,We=ut.z):(Ce=0,Ue=0,We=0);const ye=ce.convert(K.format),Zt=ce.convert(K.type);let Je;K.isData3DTexture?(L.setTexture3D(K,0),Je=G.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(L.setTexture2DArray(K,0),Je=G.TEXTURE_2D_ARRAY):(L.setTexture2D(K,0),Je=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,K.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,K.unpackAlignment);const be=G.getParameter(G.UNPACK_ROW_LENGTH),En=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Qe=G.getParameter(G.UNPACK_SKIP_PIXELS),In=G.getParameter(G.UNPACK_SKIP_ROWS),za=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Xe.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Xe.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,ie),G.pixelStorei(G.UNPACK_SKIP_ROWS,oe),G.pixelStorei(G.UNPACK_SKIP_IMAGES,$t);const qe=w.isDataArrayTexture||w.isData3DTexture,fn=K.isDataArrayTexture||K.isData3DTexture;if(w.isDepthTexture){const vn=Vt.get(w),wn=Vt.get(K),Dn=Vt.get(vn.__renderTarget),or=Vt.get(wn.__renderTarget);Rt.bindFramebuffer(G.READ_FRAMEBUFFER,Dn.__webglFramebuffer),Rt.bindFramebuffer(G.DRAW_FRAMEBUFFER,or.__webglFramebuffer);for(let la=0;la<zt;la++)qe&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Vt.get(w).__webglTexture,J,$t+la),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Vt.get(K).__webglTexture,bt,We+la)),G.blitFramebuffer(ie,oe,Ut,Nt,Ce,Ue,Ut,Nt,G.DEPTH_BUFFER_BIT,G.NEAREST);Rt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(J!==0||w.isRenderTargetTexture||Vt.has(w)){const vn=Vt.get(w),wn=Vt.get(K);Rt.bindFramebuffer(G.READ_FRAMEBUFFER,rr),Rt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ss);for(let Dn=0;Dn<zt;Dn++)qe?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,vn.__webglTexture,J,$t+Dn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,vn.__webglTexture,J),fn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,wn.__webglTexture,bt,We+Dn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,wn.__webglTexture,bt),J!==0?G.blitFramebuffer(ie,oe,Ut,Nt,Ce,Ue,Ut,Nt,G.COLOR_BUFFER_BIT,G.NEAREST):fn?G.copyTexSubImage3D(Je,bt,Ce,Ue,We+Dn,ie,oe,Ut,Nt):G.copyTexSubImage2D(Je,bt,Ce,Ue,ie,oe,Ut,Nt);Rt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else fn?w.isDataTexture||w.isData3DTexture?G.texSubImage3D(Je,bt,Ce,Ue,We,Ut,Nt,zt,ye,Zt,Xe.data):K.isCompressedArrayTexture?G.compressedTexSubImage3D(Je,bt,Ce,Ue,We,Ut,Nt,zt,ye,Xe.data):G.texSubImage3D(Je,bt,Ce,Ue,We,Ut,Nt,zt,ye,Zt,Xe):w.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,bt,Ce,Ue,Ut,Nt,ye,Zt,Xe.data):w.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,bt,Ce,Ue,Xe.width,Xe.height,ye,Xe.data):G.texSubImage2D(G.TEXTURE_2D,bt,Ce,Ue,Ut,Nt,ye,Zt,Xe);G.pixelStorei(G.UNPACK_ROW_LENGTH,be),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,En),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Qe),G.pixelStorei(G.UNPACK_SKIP_ROWS,In),G.pixelStorei(G.UNPACK_SKIP_IMAGES,za),bt===0&&K.generateMipmaps&&G.generateMipmap(Je),Rt.unbindTexture()},this.copyTextureToTexture3D=function(w,K,ot=null,ut=null,J=0){return w.isTexture!==!0&&(Zs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ot=arguments[0]||null,ut=arguments[1]||null,w=arguments[2],K=arguments[3],J=arguments[4]||0),Zs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,K,ot,ut,J)},this.initRenderTarget=function(w){Vt.get(w).__webglFramebuffer===void 0&&L.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?L.setTextureCube(w,0):w.isData3DTexture?L.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?L.setTexture2DArray(w,0):L.setTexture2D(w,0),Rt.unbindTexture()},this.resetState=function(){F=0,P=0,B=null,Rt.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Na}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorspace=ze._getDrawingBufferColorSpace(e),i.unpackColorSpace=ze._getUnpackColorSpace()}}const Rx={type:"change"},am={type:"start"},Jy={type:"end"},vu=new Ou,Cx=new ps,VC=Math.cos(70*uT.DEG2RAD),yn=new et,$n=2*Math.PI,je={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},qd=1e-6;class jC extends ab{constructor(e,i=null){super(e,i),this.state=je.NONE,this.enabled=!0,this.target=new et,this.cursor=new et,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:co.ROTATE,MIDDLE:co.DOLLY,RIGHT:co.PAN},this.touches={ONE:oo.ROTATE,TWO:oo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new et,this._lastQuaternion=new nr,this._lastTargetPosition=new et,this._quat=new nr().setFromUnitVectors(e.up,new et(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ex,this._sphericalDelta=new ex,this._scale=1,this._panOffset=new et,this._rotateStart=new ue,this._rotateEnd=new ue,this._rotateDelta=new ue,this._panStart=new ue,this._panEnd=new ue,this._panDelta=new ue,this._dollyStart=new ue,this._dollyEnd=new ue,this._dollyDelta=new ue,this._dollyDirection=new et,this._mouse=new ue,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=XC.bind(this),this._onPointerDown=kC.bind(this),this._onPointerUp=qC.bind(this),this._onContextMenu=$C.bind(this),this._onMouseWheel=ZC.bind(this),this._onKeyDown=KC.bind(this),this._onTouchStart=QC.bind(this),this._onTouchMove=JC.bind(this),this._onMouseDown=YC.bind(this),this._onMouseMove=WC.bind(this),this._interceptControlDown=tw.bind(this),this._interceptControlUp=ew.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Rx),this.update(),this.state=je.NONE}update(e=null){const i=this.object.position;yn.copy(i).sub(this.target),yn.applyQuaternion(this._quat),this._spherical.setFromVector3(yn),this.autoRotate&&this.state===je.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(r)&&isFinite(l)&&(r<-Math.PI?r+=$n:r>Math.PI&&(r-=$n),l<-Math.PI?l+=$n:l>Math.PI&&(l-=$n),r<=l?this._spherical.theta=Math.max(r,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+l)/2?Math.max(r,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let f=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),f=h!=this._spherical.radius}if(yn.setFromSpherical(this._spherical),yn.applyQuaternion(this._quatInverse),i.copy(this.target).add(yn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=yn.length();h=this._clampDistance(d*this._scale);const p=d-h;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),f=!!p}else if(this.object.isOrthographicCamera){const d=new et(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),f=p!==this.object.zoom;const g=new et(this._mouse.x,this._mouse.y,0);g.unproject(this.object),this.object.position.sub(g).add(d),this.object.updateMatrixWorld(),h=yn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(vu.origin.copy(this.object.position),vu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(vu.direction))<VC?this.object.lookAt(this.target):(Cx.setFromNormalAndCoplanarPoint(this.object.up,this.target),vu.intersectPlane(Cx,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),f=!0)}return this._scale=1,this._performCursorZoom=!1,f||this._lastPosition.distanceToSquared(this.object.position)>qd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>qd||this._lastTargetPosition.distanceToSquared(this.target)>qd?(this.dispatchEvent(Rx),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?$n/60*this.autoRotateSpeed*e:$n/60/60*this.autoRotateSpeed}_getZoomScale(e){const i=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,i){yn.setFromMatrixColumn(i,0),yn.multiplyScalar(-e),this._panOffset.add(yn)}_panUp(e,i){this.screenSpacePanning===!0?yn.setFromMatrixColumn(i,1):(yn.setFromMatrixColumn(i,0),yn.crossVectors(this.object.up,yn)),yn.multiplyScalar(e),this._panOffset.add(yn)}_pan(e,i){const r=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;yn.copy(l).sub(this.target);let f=yn.length();f*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*f/r.clientHeight,this.object.matrix),this._panUp(2*i*f/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),l=e-r.left,f=i-r.top,h=r.width,d=r.height;this._mouse.x=l/h*2-1,this._mouse.y=-(f/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft($n*this._rotateDelta.x/i.clientHeight),this._rotateUp($n*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let i=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp($n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-$n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft($n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-$n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._rotateStart.set(r,l)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panStart.set(r,l)}}_handleTouchStartDolly(e){const i=this._getSecondPointerPosition(e),r=e.pageX-i.x,l=e.pageY-i.y,f=Math.sqrt(r*r+l*l);this._dollyStart.set(0,f)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),l=.5*(e.pageX+r.x),f=.5*(e.pageY+r.y);this._rotateEnd.set(l,f)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft($n*this._rotateDelta.x/i.clientHeight),this._rotateUp($n*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panEnd.set(r,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const i=this._getSecondPointerPosition(e),r=e.pageX-i.x,l=e.pageY-i.y,f=Math.sqrt(r*r+l*l);this._dollyEnd.set(0,f),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(e.pageX+i.x)*.5,d=(e.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(e){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId)return!0;return!1}_trackPointer(e){let i=this._pointerPositions[e.pointerId];i===void 0&&(i=new ue,this._pointerPositions[e.pointerId]=i),i.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const i=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(e){const i=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(i){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function kC(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function XC(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function qC(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Jy),this.state=je.NONE;break;case 1:const e=this._pointers[0],i=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:i.x,pageY:i.y});break}}function YC(o){let e;switch(o.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case co.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=je.DOLLY;break;case co.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=je.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=je.ROTATE}break;case co.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=je.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=je.PAN}break;default:this.state=je.NONE}this.state!==je.NONE&&this.dispatchEvent(am)}function WC(o){switch(this.state){case je.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case je.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case je.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function ZC(o){this.enabled===!1||this.enableZoom===!1||this.state!==je.NONE||(o.preventDefault(),this.dispatchEvent(am),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(Jy))}function KC(o){this.enabled!==!1&&this._handleKeyDown(o)}function QC(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case oo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=je.TOUCH_ROTATE;break;case oo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=je.TOUCH_PAN;break;default:this.state=je.NONE}break;case 2:switch(this.touches.TWO){case oo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=je.TOUCH_DOLLY_PAN;break;case oo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=je.TOUCH_DOLLY_ROTATE;break;default:this.state=je.NONE}break;default:this.state=je.NONE}this.state!==je.NONE&&this.dispatchEvent(am)}function JC(o){switch(this._trackPointer(o),this.state){case je.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case je.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case je.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case je.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=je.NONE}}function $C(o){this.enabled!==!1&&o.preventDefault()}function tw(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ew(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function nw({heights:o,rows:e,cols:i,planeSize:r=200,verticalExaggeration:l=1}){const f=new Cl(r,r,i-1,e-1);f.rotateX(-Math.PI/2);const h=f.attributes.position,d=h.count;let p=1/0,g=-1/0;for(let m=0;m<d;m++){const x=o&&m<o.length?o[m]:0;x<p&&(p=x),x>g&&(g=x),h.setY(m,x*l)}f.computeVertexNormals();const _=f.attributes.uv;for(let m=0;m<_.count;m++){const x=m%i,E=Math.floor(m/i),T=x/(i-1),A=1-E/(e-1);_.setXY(m,T,A)}return{geometry:f,minElevation:p===1/0?0:p,maxElevation:g===-1/0?0:g}}function iw(o,e,i,r,l,f="terrain"){const h=document.createElement("canvas");h.width=i,h.height=e;const d=h.getContext("2d"),p=d.createImageData(i,e),g=p.data,_=Math.max(l-r,.001);for(let x=0;x<o.length;x++){const E=o[x],T=Math.max(0,Math.min(1,(E-r)/_));let A=0,M=0,y=0;f==="terrain"?T<.2?(A=50+T*250,M=120+T*400,y=70):T<.5?(A=100+(T-.2)*400,M=200+(T-.2)*100,y=80):T<.8?(A=220+(T-.5)*100,M=200-(T-.5)*200,y=80):(A=240+(T-.8)*75,M=240+(T-.8)*75,y=250):(A=Math.floor(T*255),M=Math.floor((1-Math.abs(T-.5)*2)*255),y=Math.floor((1-T)*255));const O=x*4;g[O]=Math.min(255,Math.max(0,Math.floor(A))),g[O+1]=Math.min(255,Math.max(0,Math.floor(M))),g[O+2]=Math.min(255,Math.max(0,Math.floor(y))),g[O+3]=255}d.putImageData(p,0,0);const m=new ky(h);return m.minFilter=ti,m.magFilter=ti,m}function aw(o,e,i,r=200){const l=document.createElement("canvas");l.width=i,l.height=e;const f=l.getContext("2d"),h=f.createImageData(i,e),d=h.data,p=r/Math.max(1,i-1),g=r/Math.max(1,e-1);for(let m=0;m<e;m++)for(let x=0;x<i;x++){const E=m*i+x,T=Math.max(0,x-1),A=Math.min(i-1,x+1),M=Math.max(0,m-1),y=Math.min(e-1,m+1),O=o[m*i+T],z=o[m*i+A],N=o[M*i+x],j=o[y*i+x],F=(z-O)/Math.max(1e-4,(A-T)*p),P=(j-N)/Math.max(1e-4,(y-M)*g),B=Math.sqrt(F*F+P*P),U=Math.atan(B)*(180/Math.PI);let C=34,H=197,it=94;U<5?(C=34,H=197,it=94):U<15?(C=56,H=189,it=248):U<30?(C=245,H=158,it=11):(C=239,H=68,it=68);const $=E*4;d[$]=C,d[$+1]=H,d[$+2]=it,d[$+3]=255}f.putImageData(h,0,0);const _=new ky(l);return _.minFilter=ti,_.magFilter=ti,_}function sw({dsmData:o=null,textureMode:e="rgb",onTextureModeChange:i=null,cameraMode:r="orbit",onCameraModeChange:l=null,verticalExaggeration:f=1,colorRamp:h="terrain",selectedPoint:d=null,onSelectPoint:p=null,resetViewTrigger:g=0}){var lt;const _=te.useRef(null),m=te.useRef(null),x=te.useRef(null),E=te.useRef(null),T=te.useRef(null),A=te.useRef(null),M=te.useRef(null),y=te.useRef(new nb),O=te.useRef(new ue),z=te.useRef({x:0,y:0}),[N,j]=te.useState("orbit"),[F,P]=te.useState(e),[B,U]=te.useState(null),[C,H]=te.useState(!0),it=r||N,$=e||F,dt=te.useRef({moveForward:!1,moveBackward:!1,moveLeft:!1,moveRight:!1,moveUp:!1,moveDown:!1,speed:40});te.useEffect(()=>{if(o){U(o),H(!1);return}const X="";H(!0),fetch(`${X}/api/terrain/mesh?resolution=128`).then(xt=>{if(!xt.ok)throw new Error("DSM mesh endpoint error");return xt.json()}).then(xt=>{U(xt),H(!1)}).catch(xt=>{console.warn("[DepthWizard] Using local metric DSM tile:",xt);const yt=128,wt=new Float32Array(yt*yt);for(let Ft=0;Ft<yt;Ft++)for(let Wt=0;Wt<yt;Wt++){const D=Ft%24<14&&Wt%24<14,W=2+Math.sin(Ft*.05)*1.5;wt[Ft*yt+Wt]=D?8.5+Ft%5*.8:W}U({rows:yt,cols:yt,min_height:0,max_height:12.84,mean_height:7.85,heights:Array.from(wt),texture_url:`${X}/static/data/sample/sample_gamus_optical.png`}),H(!1)})},[o]),te.useEffect(()=>{const X=_.current;if(!X||!B)return;const xt=X.clientWidth||800,yt=X.clientHeight||520,wt=new BT;wt.background=new Te(658967),wt.fog=new Kp(658967,.002),m.current=wt;const Ft=new Ri(45,xt/yt,.5,3e3);Ft.position.set(0,90,160),E.current=Ft;const Wt=new GC({antialias:!0,powerPreference:"high-performance"});Wt.setSize(xt,yt),Wt.setPixelRatio(Math.min(window.devicePixelRatio,2)),Wt.shadowMap.enabled=!0,Wt.shadowMap.type=yy,x.current=Wt,X.innerHTML="",X.appendChild(Wt.domElement);const D=new jC(Ft,Wt.domElement);D.enableDamping=!0,D.dampingFactor=.06,D.maxPolarAngle=Math.PI/2-.02,D.minDistance=10,D.maxDistance=600,T.current=D;const W=new tb(16777215,.65);wt.add(W);const ct=new $T(16775405,1.4);ct.position.set(120,220,90),ct.castShadow=!0,ct.shadow.mapSize.width=2048,ct.shadow.mapSize.height=2048,wt.add(ct);const ft=new KT(3718648,988970,.45);wt.add(ft);const Mt=200,{geometry:Ht,minElevation:Dt,maxElevation:Tt}=nw({heights:B.heights,rows:B.rows,cols:B.cols,planeSize:Mt,verticalExaggeration:f}),Gt=new ZT;let ae=null;B.texture_url&&(ae=Gt.load(B.texture_url,()=>{Wt.render(wt,Ft)},void 0,Et=>{console.warn("Could not load RGB texture, fallback to color texture:",Et)}),ae.wrapS=wa,ae.wrapT=wa);const G=iw(B.heights,B.rows,B.cols,Dt,Tt,h),on=aw(B.heights,B.rows,B.cols,Mt);let se=G;$==="rgb"&&ae?se=ae:$==="slope"?se=on:$==="colormap"&&(se=G);const Jt=new Fd({map:$==="wireframe"?null:se,wireframe:$==="wireframe",roughness:.85,metalness:.05,flatShading:!1}),Rt=new pi(Ht,Jt);Rt.receiveShadow=!0,Rt.castShadow=!0,wt.add(Rt),A.current=Rt;const _e=new ib(Mt,20,165063,1976635);_e.position.y=-.2,wt.add(_e);const Vt=new yl;Vt.visible=!1;const L=new tm(1.6,16,16),R=new Fd({color:15680580,emissive:16711680,emissiveIntensity:.5,roughness:.3}),at=new pi(L,R);at.position.y=4,Vt.add(at);const vt=new Jp(.2,.2,4,8),St=new Fd({color:16777215}),_t=new pi(vt,St);_t.position.y=2,Vt.add(_t);const Yt=new $p(1.2,1.8,24);Yt.rotateX(-Math.PI/2);const It=new Zp({color:3718648,side:ia}),Pt=new pi(Yt,It);Pt.position.y=.1,Vt.add(Pt),wt.add(Vt),M.current=Vt;let me,At=performance.now();const kt=Et=>{me=requestAnimationFrame(kt);const rt=(Et-At)/1e3;if(At=Et,Vt.visible){const gt=1+.15*Math.sin(Et*.006);Pt.scale.set(gt,1,gt)}if(it==="fly"){const gt=dt.current,Ct=gt.speed*rt,Lt=new et;Ft.getWorldDirection(Lt);const ne=new et().crossVectors(Lt,Ft.up).normalize();gt.moveForward&&Ft.position.addScaledVector(Lt,Ct),gt.moveBackward&&Ft.position.addScaledVector(Lt,-Ct),gt.moveLeft&&Ft.position.addScaledVector(ne,-Ct),gt.moveRight&&Ft.position.addScaledVector(ne,Ct),gt.moveUp&&(Ft.position.y+=Ct),gt.moveDown&&(Ft.position.y=Math.max(1,Ft.position.y-Ct))}else D.update();Wt.render(wt,Ft)};kt(performance.now());const Qt=Wt.domElement,ee=Et=>{z.current={x:Et.clientX,y:Et.clientY}},jt=Et=>{const rt=Math.abs(Et.clientX-z.current.x),gt=Math.abs(Et.clientY-z.current.y);if(rt>4||gt>4)return;const Ct=Qt.getBoundingClientRect();O.current.x=(Et.clientX-Ct.left)/Ct.width*2-1,O.current.y=-((Et.clientY-Ct.top)/Ct.height)*2+1,y.current.setFromCamera(O.current,Ft);const Lt=y.current.intersectObject(Rt);if(Lt.length>0){const ne=Lt[0],ke=ne.point.x,ln=ne.point.z,xe=ne.point.y/Math.max(f,.001),we=B.cols,en=B.rows,cn=B.heights,ar=(ke/Mt+.5)*(we-1),wi=(ln/Mt+.5)*(en-1),Di=Math.max(0,Math.min(we-1,Math.round(ar))),ni=Math.max(0,Math.min(en-1,Math.round(wi))),ra=Mt/(we-1),Ni=Mt/(en-1),ii=Math.max(0,Di-1),mi=Math.min(we-1,Di+1),Ui=Math.max(0,ni-1),Oa=Math.min(en-1,ni+1),Eo=cn[ni*we+ii],sr=cn[ni*we+mi],ys=cn[Ui*we+Di],oa=cn[Oa*we+Di],rr=(sr-Eo)/Math.max(1e-4,(mi-ii)*ra),Ss=(oa-ys)/Math.max(1e-4,(Oa-Ui)*Ni),w=Math.sqrt(rr*rr+Ss*Ss),K=Math.atan(w)*(180/Math.PI),ot=B.min_height??0,ut=Math.max(0,xe-ot);Vt.position.copy(ne.point),Vt.visible=!0,p&&p({height:ut,elevation:xe,slope:K,x:ke,z:ln,row:ni,col:Di})}};Qt.addEventListener("pointerdown",ee),Qt.addEventListener("pointerup",jt);const de=Et=>{const rt=dt.current;switch(Et.code){case"KeyW":rt.moveForward=!0;break;case"KeyS":rt.moveBackward=!0;break;case"KeyA":rt.moveLeft=!0;break;case"KeyD":rt.moveRight=!0;break;case"KeyQ":rt.moveDown=!0;break;case"KeyE":rt.moveUp=!0;break}},ce=Et=>{const rt=dt.current;switch(Et.code){case"KeyW":rt.moveForward=!1;break;case"KeyS":rt.moveBackward=!1;break;case"KeyA":rt.moveLeft=!1;break;case"KeyD":rt.moveRight=!1;break;case"KeyQ":rt.moveDown=!1;break;case"KeyE":rt.moveUp=!1;break}};window.addEventListener("keydown",de),window.addEventListener("keyup",ce);const Le=()=>{if(!X)return;const Et=X.clientWidth,rt=X.clientHeight;Et===0||rt===0||(Ft.aspect=Et/rt,Ft.updateProjectionMatrix(),Wt.setSize(Et,rt))};window.addEventListener("resize",Le);const k=new ResizeObserver(()=>{Le()});return k.observe(X),()=>{cancelAnimationFrame(me),k.disconnect(),window.removeEventListener("resize",Le),window.removeEventListener("keydown",de),window.removeEventListener("keyup",ce),Qt.removeEventListener("pointerdown",ee),Qt.removeEventListener("pointerup",jt),D.dispose(),Ht.dispose(),Jt.dispose(),Wt.dispose(),X.contains(Wt.domElement)&&X.removeChild(Wt.domElement)}},[B,$,f,h,it]),te.useEffect(()=>{M.current&&!d&&(M.current.visible=!1)},[d]),te.useEffect(()=>{E.current&&T.current&&g>0&&(E.current.position.set(0,90,160),T.current.target.set(0,0,0),T.current.update())},[g]);const ht=X=>{P(X),i&&i(X)},q=()=>{const X=it==="orbit"?"fly":"orbit";j(X),l&&l(X)};return S.jsx("div",{className:"terrain-viewer-wrapper",children:S.jsxs("div",{className:"terrain-canvas-box",ref:_,children:[C&&S.jsxs("div",{className:"terrain-loader-overlay",children:[S.jsx("div",{className:"loading-orbit"}),S.jsx("p",{children:"Constructing 3D Metric Terrain Mesh from DSM..."}),S.jsx("span",{children:"Connecting DSM vertices and mapping RGB texture"})]}),S.jsxs("div",{className:"terrain-overlay-hud",children:[S.jsxs("div",{className:"hud-metric-pill",children:[S.jsx("span",{className:"hud-metric-title",children:"HEIGHT"}),S.jsx("span",{className:"hud-metric-number",children:d?`${d.height.toFixed(1)} m`:B?`${(B.max_height-B.min_height).toFixed(1)} m`:"--"})]}),S.jsxs("div",{className:"hud-metric-pill",children:[S.jsx("span",{className:"hud-metric-title",children:"ELEVATION"}),S.jsx("span",{className:"hud-metric-number",children:d?`${d.elevation.toFixed(1)} m`:B?`${(lt=B.mean_height)==null?void 0:lt.toFixed(1)} m`:"--"})]}),S.jsxs("div",{className:"hud-metric-pill",children:[S.jsx("span",{className:"hud-metric-title",children:"SLOPE"}),S.jsx("span",{className:"hud-metric-number",children:d?`${d.slope.toFixed(1)}°`:"--"})]})]}),S.jsxs("div",{className:"terrain-quick-controls",children:[S.jsxs("div",{className:"view-mode-pills",children:[S.jsx("button",{className:`pill-btn ${$==="rgb"?"active":""}`,onClick:()=>ht("rgb"),title:"Drape original high-res optical satellite image",children:"🛰️ Optical RGB"}),S.jsx("button",{className:`pill-btn ${$==="colormap"?"active":""}`,onClick:()=>ht("colormap"),title:"Color-code terrain by metric elevation in meters",children:"🏔️ Elevation Color"}),S.jsx("button",{className:`pill-btn ${$==="slope"?"active":""}`,onClick:()=>ht("slope"),title:"Color-code terrain by surface slope gradient in degrees",children:"📐 Slope Map"}),S.jsx("button",{className:`pill-btn ${$==="wireframe"?"active":""}`,onClick:()=>ht("wireframe"),title:"Show topographic triangulated wireframe mesh",children:"🕸️ Wireframe"})]}),S.jsx("button",{className:`btn-camera-toggle ${it==="fly"?"active":""}`,onClick:q,title:"Toggle between orbital camera and flythrough mode (WASD + QE)",children:it==="fly"?"✈️ Fly Mode (WASD)":"🛰️ Orbit Camera"})]})]})})}function rw({dsmMesh:o=null,textureMode:e="rgb",onTextureModeChange:i=null,cameraMode:r="orbit",onCameraModeChange:l=null,verticalExaggeration:f=1,colorRamp:h="terrain",selectedMeasurement:d=null,onSelectMeasurement:p=null,resetViewTrigger:g=0,onResetView:_=null}){var z;const[m,x]=te.useState(!1),E=te.useRef(null),T=()=>{E.current&&(m?(document.exitFullscreen&&document.exitFullscreen(),x(!1)):(E.current.requestFullscreen&&E.current.requestFullscreen(),x(!0)))},A=d&&d.height!==void 0,M=A?`${d.height.toFixed(1)} m`:o?`${(o.max_height-o.min_height).toFixed(1)} m (span)`:"--",y=A?`${d.elevation.toFixed(1)} m`:o?`${(z=o.mean_height)==null?void 0:z.toFixed(1)} m (mean)`:"--",O=A?`${d.slope.toFixed(1)}°`:"--";return S.jsxs("section",{ref:E,className:`terrain-section-card ${m?"fullscreen-mode":""}`,id:"terrain-section",children:[S.jsxs("div",{className:"terrain-header-toolbar",children:[S.jsxs("div",{className:"toolbar-title-group",children:[S.jsx(Fp,{className:"text-cyan",size:20}),S.jsxs("div",{children:[S.jsx("h3",{className:"terrain-title-text",children:"3D Terrain"}),S.jsxs("span",{className:"terrain-subtitle-text",children:["WebGL Metric Heightfield (",o?`${o.rows}×${o.cols} Grid`:"128×128 Grid",")"]})]})]}),S.jsxs("div",{className:"toolbar-controls-group",children:[S.jsxs("div",{className:"camera-mode-toggle-group",children:[S.jsxs("button",{className:`tool-btn ${r==="orbit"?"active":""}`,onClick:()=>l&&l("orbit"),title:"Orbital inspection camera (Left click drag to rotate, right click to pan, scroll to zoom)",children:[S.jsx(p1,{size:15}),S.jsx("span",{children:"Orbit"})]}),S.jsxs("button",{className:`tool-btn ${r==="fly"?"active":""}`,onClick:()=>l&&l("fly"),title:"First-person drone flythrough mode (WASD keys to fly, Q/E for elevation)",children:[S.jsx(m1,{size:15}),S.jsx("span",{children:"Fly"})]})]}),S.jsxs("button",{className:"tool-btn-neutral",onClick:_,title:"Reset camera view to default orientation",children:[S.jsx(_1,{size:15}),S.jsx("span",{children:"Reset View"})]}),S.jsxs("button",{className:"tool-btn-neutral",onClick:T,title:m?"Exit Fullscreen":"View Fullscreen",children:[m?S.jsx(d1,{size:15}):S.jsx(f1,{size:15}),S.jsx("span",{children:m?"Exit":"Fullscreen"})]})]})]}),S.jsxs("div",{className:"terrain-canvas-wrapper",children:[S.jsx(sw,{dsmData:o,textureMode:e,onTextureModeChange:i,cameraMode:r,onCameraModeChange:l,verticalExaggeration:f,colorRamp:h,selectedPoint:d,onSelectPoint:p,resetViewTrigger:g}),S.jsxs("div",{className:"floating-hud-overlay",children:[S.jsxs("div",{className:"hud-card",children:[S.jsx("span",{className:"hud-label",children:"HEIGHT"}),S.jsx("span",{className:"hud-value font-mono",children:M}),S.jsx("span",{className:"hud-sub",children:"Above Ground"})]}),S.jsxs("div",{className:"hud-card",children:[S.jsx("span",{className:"hud-label",children:"ELEVATION"}),S.jsx("span",{className:"hud-value font-mono",children:y}),S.jsx("span",{className:"hud-sub",children:"Datum Elevation"})]}),S.jsxs("div",{className:"hud-card",children:[S.jsx("span",{className:"hud-label",children:"SLOPE"}),S.jsx("span",{className:"hud-value font-mono",children:O}),S.jsx("span",{className:"hud-sub",children:"Surface Angle"})]})]}),S.jsx("div",{className:"terrain-interaction-hint",children:S.jsx("span",{children:"🖱️ Click anywhere on the 3D surface to sample precise point elevation & slope gradient"})})]})]})}function ow({selectedMeasurement:o=null,onResetMeasurement:e=null,verticalExaggeration:i=1,onVerticalExaggerationChange:r=null,textureMode:l="rgb",onTextureModeChange:f=null,colorRamp:h="terrain",onColorRampChange:d=null,dsmMesh:p=null,onExportDSM:g=null}){var z,N,j;const _=o&&o.elevation!==void 0,m=_?o.height.toFixed(2):p?`${(p.max_height-p.min_height).toFixed(2)} (span)`:"--",x=_?o.elevation.toFixed(2):p?`${(z=p.mean_height)==null?void 0:z.toFixed(2)} (mean)`:"--",E=_?o.slope.toFixed(1):"--",T=_?o.x.toFixed(1):"--",A=_?o.z.toFixed(1):"--",M=_?Math.sqrt(o.x**2+o.z**2).toFixed(1):"--";let y="Normal",O="text-cyan";if(_){const F=o.slope;F<5?(y="Flat (<5°)",O="text-emerald"):F<15?(y="Gentle (5-15°)",O="text-cyan"):F<30?(y="Moderate (15-30°)",O="text-amber"):(y="Steep (>30°)",O="text-rose")}return S.jsxs("aside",{className:"terrain-analysis-sidebar",id:"measurements-section",children:[S.jsxs("div",{className:"panel-title-header",children:[S.jsx("div",{className:"panel-badge-label",children:"TERRAIN ANALYSIS"}),S.jsx("h3",{className:"panel-main-heading",children:"Point Measurements"}),S.jsx("p",{className:"panel-instruction-hint",children:_?S.jsxs("span",{className:"text-emerald",children:["🟢 Active Pin at (",T,"m, ",A,"m)"]}):S.jsx("span",{children:"🖱️ Click terrain to measure"})})]}),S.jsxs("div",{className:"analysis-metrics-stack",children:[S.jsxs("div",{className:"analysis-metric-box",children:[S.jsxs("div",{className:"metric-box-top",children:[S.jsx("span",{className:"metric-box-title",children:"HEIGHT"}),S.jsx("span",{className:"metric-box-subtitle",children:"Above Local Ground"})]}),S.jsxs("div",{className:"metric-box-content",children:[S.jsx("span",{className:"metric-num-lg font-mono",children:m}),S.jsx("span",{className:"metric-unit-text",children:"m"})]}),S.jsx("div",{className:"metric-box-footer",children:S.jsx("span",{children:"Datum: Local Relief Baseline"})})]}),S.jsxs("div",{className:"analysis-metric-box",children:[S.jsxs("div",{className:"metric-box-top",children:[S.jsx("span",{className:"metric-box-title",children:"ELEVATION"}),S.jsx("span",{className:"metric-box-subtitle",children:"Calibrated Metric DSM"})]}),S.jsxs("div",{className:"metric-box-content",children:[S.jsx("span",{className:"metric-num-lg font-mono",children:x}),S.jsx("span",{className:"metric-unit-text",children:"m"})]}),S.jsx("div",{className:"metric-box-footer",children:S.jsxs("span",{children:["Grid Min: ",((N=p==null?void 0:p.min_height)==null?void 0:N.toFixed(1))||0,"m | Max: ",((j=p==null?void 0:p.max_height)==null?void 0:j.toFixed(1))||0,"m"]})})]}),S.jsxs("div",{className:"analysis-metric-box",children:[S.jsxs("div",{className:"metric-box-top",children:[S.jsx("span",{className:"metric-box-title",children:"SLOPE"}),S.jsx("span",{className:`metric-box-subtitle ${O}`,children:_?y:"Local Surface Gradient"})]}),S.jsxs("div",{className:"metric-box-content",children:[S.jsx("span",{className:`metric-num-lg font-mono ${O}`,children:E}),S.jsx("span",{className:"metric-unit-text",children:"deg (°)"})]}),S.jsx("div",{className:"metric-box-footer",children:S.jsx("span",{children:"Gradient: arctan(|∇z|)"})})]}),S.jsxs("div",{className:"analysis-metric-box",children:[S.jsxs("div",{className:"metric-box-top",children:[S.jsx("span",{className:"metric-box-title",children:"DISTANCE"}),S.jsx("span",{className:"metric-box-subtitle",children:"From Center (0, 0)"})]}),S.jsxs("div",{className:"metric-box-content",children:[S.jsx("span",{className:"metric-num-lg font-mono",children:M}),S.jsx("span",{className:"metric-unit-text",children:"m"})]}),S.jsx("div",{className:"metric-box-footer",children:S.jsxs("span",{children:["Coords: (",T,"m, ",A,"m)"]})})]})]}),S.jsxs("div",{className:"panel-controls-group",children:[S.jsxs("div",{className:"control-header-label",children:[S.jsx(Bp,{size:14}),S.jsx("span",{children:"Surface & Exaggeration"})]}),S.jsxs("div",{className:"exaggeration-control-item",children:[S.jsxs("div",{className:"slider-label-row",children:[S.jsx("span",{children:"Vertical Exaggeration:"}),S.jsxs("span",{className:"font-mono text-cyan",children:[i.toFixed(1),"x"]})]}),S.jsx("input",{type:"range",min:"0.5",max:"4.0",step:"0.1",value:i,onChange:F=>r&&r(parseFloat(F.target.value)),className:"custom-range-slider"}),S.jsxs("div",{className:"slider-markers",children:[S.jsx("span",{children:"0.5x"}),S.jsx("span",{children:"1.0x (True)"}),S.jsx("span",{children:"2.5x"}),S.jsx("span",{children:"4.0x"})]})]}),S.jsxs("div",{className:"texture-switcher-row",children:[S.jsx("button",{className:`texture-pill-btn ${l==="rgb"?"active":""}`,onClick:()=>f&&f("rgb"),children:"🛰️ RGB"}),S.jsx("button",{className:`texture-pill-btn ${l==="colormap"?"active":""}`,onClick:()=>f&&f("colormap"),children:"🏔️ Color"}),S.jsx("button",{className:`texture-pill-btn ${l==="slope"?"active":""}`,onClick:()=>f&&f("slope"),children:"📐 Slope"}),S.jsx("button",{className:`texture-pill-btn ${l==="wireframe"?"active":""}`,onClick:()=>f&&f("wireframe"),children:"🕸️ Wire"})]})]}),S.jsxs("div",{className:"panel-action-buttons",children:[_&&e&&S.jsxs("button",{className:"btn-clear-pin",onClick:e,children:[S.jsx(r1,{size:15}),S.jsx("span",{children:"Reset Measurement Marker"})]}),S.jsxs("button",{className:"btn-download-dsm-direct",onClick:g,children:[S.jsx(Zx,{size:15}),S.jsx("span",{children:"Export Metric DSM GeoTIFF"})]})]})]})}function lw({pipelineResult:o=null,dsmMesh:e=null,onExportDSM:i=null}){var A,M;const r=(A=o==null?void 0:o.stages)==null?void 0:A.dsm,l=(M=o==null?void 0:o.stages)==null?void 0:M.metric_calibration,f=r?`${r.minimum_elevation.toFixed(2)} m`:e?`${e.min_height.toFixed(2)} m`:"--",h=r?`${r.maximum_elevation.toFixed(2)} m`:e?`${e.max_height.toFixed(2)} m`:"--",d=r?`${r.mean_elevation.toFixed(2)} m`:e?`${e.mean_height.toFixed(2)} m`:"--",p=r?`${r.raster_dimensions.width} × ${r.raster_dimensions.height} px`:"--",g=r?r.crs:e?"EPSG:3857 (Local Metric)":"--";r&&r.dsm_file;const _=(l==null?void 0:l.rmse_meters)!==void 0?`${l.rmse_meters.toFixed(2)} m`:"--",m=(l==null?void 0:l.mae_meters)!==void 0?`${l.mae_meters.toFixed(2)} m`:"--",x=(l==null?void 0:l.r_squared)!==void 0?`${l.r_squared.toFixed(3)}`:"--",E=(l==null?void 0:l.valid_pixel_percentage)!==void 0?`${l.valid_pixel_percentage.toFixed(1)}%`:"--",T=l!=null&&l.formula?`${l.formula} (a = ${l.scale_factor_a.toFixed(4)}, b = ${l.offset_b.toFixed(2)}m)`:"H = a·D + b";return S.jsxs("section",{className:"dsm-analysis-section",id:"dsm-analysis-section",children:[S.jsxs("div",{className:"section-header-block",children:[S.jsxs("div",{className:"section-title-wrap",children:[S.jsx(n1,{className:"text-cyan",size:22}),S.jsxs("div",{children:[S.jsx("h3",{className:"section-title-text",children:"DSM Analysis & Accuracy Validation"}),S.jsx("p",{className:"section-subtitle-text",children:"Real geospatial surface metrics and physical ground truth validation extracted from the actual calibrated DSM."})]})]}),S.jsxs("button",{className:"btn-dsm-download",onClick:i,children:[S.jsx(Zx,{size:15}),S.jsx("span",{children:"Download GeoTIFF (dsm.tif)"})]})]}),S.jsxs("div",{className:"dsm-cards-container",children:[S.jsxs("div",{className:"dsm-card-box",children:[S.jsxs("div",{className:"dsm-card-title-bar",children:[S.jsx(Ip,{size:18,className:"text-emerald"}),S.jsx("h4",{children:"DSM Statistics"})]}),S.jsxs("div",{className:"dsm-stat-grid",children:[S.jsxs("div",{className:"dsm-stat-item",children:[S.jsx("span",{className:"stat-label",children:"Minimum Elevation"}),S.jsx("span",{className:"stat-value font-mono",children:f}),S.jsx("span",{className:"stat-desc",children:"Base ground datum"})]}),S.jsxs("div",{className:"dsm-stat-item",children:[S.jsx("span",{className:"stat-label",children:"Maximum Elevation"}),S.jsx("span",{className:"stat-value font-mono",children:h}),S.jsx("span",{className:"stat-desc",children:"Highest peak / roofline"})]}),S.jsxs("div",{className:"dsm-stat-item",children:[S.jsx("span",{className:"stat-label",children:"Mean Elevation"}),S.jsx("span",{className:"stat-value font-mono",children:d}),S.jsx("span",{className:"stat-desc",children:"Terrain surface average"})]}),S.jsxs("div",{className:"dsm-stat-item",children:[S.jsx("span",{className:"stat-label",children:"Raster Resolution"}),S.jsx("span",{className:"stat-value font-mono",children:p}),S.jsx("span",{className:"stat-desc",children:"Ground GSD: 0.50 m/px"})]}),S.jsxs("div",{className:"dsm-stat-item full-width",children:[S.jsx("span",{className:"stat-label",children:"Coordinate Reference System"}),S.jsx("span",{className:"stat-value font-mono crs-badge",children:g}),S.jsx("span",{className:"stat-desc",children:"Geospatial projection standard"})]})]})]}),S.jsxs("div",{className:"dsm-card-box",children:[S.jsxs("div",{className:"dsm-card-title-bar",children:[S.jsx(py,{size:18,className:"text-blue"}),S.jsx("h4",{children:"Elevation Validation & Calibration"})]}),S.jsxs("div",{className:"dsm-stat-grid",children:[S.jsxs("div",{className:"dsm-stat-item",children:[S.jsx("span",{className:"stat-label",children:"Root Mean Square Error (RMSE)"}),S.jsx("span",{className:"stat-value font-mono text-cyan",children:_}),S.jsx("span",{className:"stat-desc",children:"Against reference elevation"})]}),S.jsxs("div",{className:"dsm-stat-item",children:[S.jsx("span",{className:"stat-label",children:"Mean Absolute Error (MAE)"}),S.jsx("span",{className:"stat-value font-mono text-emerald",children:m}),S.jsx("span",{className:"stat-desc",children:"Average absolute deviation"})]}),S.jsxs("div",{className:"dsm-stat-item",children:[S.jsx("span",{className:"stat-label",children:"Correlation (R²)"}),S.jsx("span",{className:"stat-value font-mono",children:x}),S.jsx("span",{className:"stat-desc",children:"Linear correlation goodness"})]}),S.jsxs("div",{className:"dsm-stat-item",children:[S.jsx("span",{className:"stat-label",children:"Valid Overlap"}),S.jsx("span",{className:"stat-value font-mono",children:E}),S.jsx("span",{className:"stat-desc",children:"NoData-filtered pixels"})]}),S.jsxs("div",{className:"dsm-stat-item full-width",children:[S.jsx("span",{className:"stat-label",children:"Metric Calibration Formula"}),S.jsx("span",{className:"stat-value font-mono formula-badge",children:T}),S.jsx("span",{className:"stat-desc",children:"Least-squares affine model"})]})]})]})]})]})}function cw({isOpen:o=!1,onClose:e=null,systemStatus:i=null,colorRamp:r="terrain",onColorRampChange:l=null,verticalExaggeration:f=1,onVerticalExaggerationChange:h=null}){var _,m,x,E;if(!o)return null;const d=((_=i==null?void 0:i.environment)==null?void 0:_.device_name)||"CPU",p=((m=i==null?void 0:i.environment)==null?void 0:m.python_version)||"3.12+",g=(x=i==null?void 0:i.model)!=null&&x.weights_ready?"Cached & Ready":"Auto-Downloading";return S.jsx("div",{className:"modal-backdrop-blur",onClick:e,children:S.jsxs("div",{className:"settings-modal-dialog",onClick:T=>T.stopPropagation(),children:[S.jsxs("div",{className:"modal-header-row",children:[S.jsxs("div",{className:"modal-title-wrap",children:[S.jsx(hy,{size:20,className:"text-cyan"}),S.jsx("h3",{className:"modal-heading-text",children:"DepthWizard Settings & Diagnostics"})]}),S.jsx("button",{className:"modal-close-icon-btn",onClick:e,"aria-label":"Close dialog",children:S.jsx(vy,{size:18})})]}),S.jsxs("div",{className:"modal-body-scrollable",children:[S.jsxs("div",{className:"settings-section-card",children:[S.jsxs("h4",{className:"settings-section-title",children:[S.jsx(Yx,{size:16}),S.jsx("span",{children:"Compute & Hardware Diagnostics"})]}),S.jsxs("div",{className:"settings-details-table",children:[S.jsxs("div",{className:"setting-row",children:[S.jsx("span",{className:"setting-key",children:"Active Compute Device"}),S.jsx("span",{className:"setting-val font-mono",children:d})]}),S.jsxs("div",{className:"setting-row",children:[S.jsx("span",{className:"setting-key",children:"PyTorch Acceleration"}),S.jsx("span",{className:"setting-val font-mono",children:(E=i==null?void 0:i.environment)!=null&&E.cuda_available?"CUDA Active":"CPU Optimization (AVX2)"})]}),S.jsxs("div",{className:"setting-row",children:[S.jsx("span",{className:"setting-key",children:"Python Runtime"}),S.jsxs("span",{className:"setting-val font-mono",children:["v",p]})]}),S.jsxs("div",{className:"setting-row",children:[S.jsx("span",{className:"setting-key",children:"Model Weights Status"}),S.jsx("span",{className:"setting-val font-mono",children:g})]})]})]}),S.jsxs("div",{className:"settings-section-card",children:[S.jsxs("h4",{className:"settings-section-title",children:[S.jsx(Bp,{size:16}),S.jsx("span",{children:"Display & Topographic Preferences"})]}),S.jsxs("div",{className:"settings-details-table",children:[S.jsxs("div",{className:"setting-row",children:[S.jsx("span",{className:"setting-key",children:"Elevation Colormap"}),S.jsxs("select",{value:r,onChange:T=>l&&l(T.target.value),className:"settings-dropdown",children:[S.jsx("option",{value:"terrain",children:"Natural Terrain (Hypsometric)"}),S.jsx("option",{value:"viridis",children:"Viridis Spectral"})]})]}),S.jsxs("div",{className:"setting-row",children:[S.jsx("span",{className:"setting-key",children:"Default Vertical Exaggeration"}),S.jsxs("span",{className:"setting-val font-mono",children:[f.toFixed(1),"x"]})]})]})]}),S.jsxs("div",{className:"settings-section-card",children:[S.jsxs("h4",{className:"settings-section-title",children:[S.jsx(u1,{size:16}),S.jsx("span",{children:"API Gateway & Service Health"})]}),S.jsxs("div",{className:"settings-details-table",children:[S.jsxs("div",{className:"setting-row",children:[S.jsx("span",{className:"setting-key",children:"Backend Endpoint"}),S.jsx("span",{className:"setting-val font-mono",children:"http://127.0.0.1:8000"})]}),S.jsxs("div",{className:"setting-row",children:[S.jsx("span",{className:"setting-key",children:"Swagger Documentation"}),S.jsx("a",{href:"http://127.0.0.1:8000/docs",target:"_blank",rel:"noreferrer",className:"setting-link font-mono",children:"/docs ↗"})]}),S.jsxs("div",{className:"setting-row",children:[S.jsx("span",{className:"setting-key",children:"ISRO Problem Statement"}),S.jsx("span",{className:"setting-val font-mono",children:"SIH 2026 #26175"})]})]})]})]}),S.jsx("div",{className:"modal-footer-row",children:S.jsx("button",{className:"btn-modal-done",onClick:e,children:"Done"})})]})})}function uw(){var W;const[o,e]=te.useState("dashboard"),[i,r]=te.useState(!1),[l,f]=te.useState(null),h="",[d,p]=te.useState(null),[g,_]=te.useState("sample_gamus_optical.png"),[m,x]=te.useState("PNG"),[E,T]=te.useState(`${h}/static/data/sample/sample_gamus_optical.png`),[A,M]=te.useState("idle"),[y,O]=te.useState(null),[z,N]=te.useState(null),[j,F]=te.useState(null),[P,B]=te.useState("orbit"),[U,C]=te.useState("rgb"),[H,it]=te.useState(1),[$,dt]=te.useState("terrain"),[ht,q]=te.useState(null),[lt,X]=te.useState(0);te.useEffect(()=>{fetch(`${h}/api/health`).then(ct=>ct.json()).then(ct=>f(ct)).catch(ct=>{console.warn("Backend currently connecting:",ct)}),fetch(`${h}/api/terrain/mesh?resolution=128`).then(ct=>{if(!ct.ok)throw new Error("Could not load default mesh");return ct.json()}).then(ct=>{F(ct)}).catch(ct=>{console.log("Default mesh will be generated upon pipeline run:",ct)})},[]);const xt=ct=>{if(!ct)return;p(ct),_(ct.name);const ft=ct.name.split(".").pop().toUpperCase();if(x(ft==="TIF"||ft==="TIFF"?"GeoTIFF":ft),ct.type.startsWith("image/")){const Mt=URL.createObjectURL(ct);T(Mt)}else T(null)},yt=()=>{p(null),_("sample_gamus_optical.png"),x("PNG"),T(`${h}/static/data/sample/sample_gamus_optical.png`)},wt=async()=>{var ft;M("running"),N(null);const ct=new FormData;d&&ct.append("file",d);try{const Mt=await fetch(`${h}/api/pipeline/run?gsd_m=0.5&mesh_resolution=128`,{method:"POST",body:ct});if(!Mt.ok){const Tt=await Mt.json();throw new Error(Tt.detail||"Pipeline execution failed")}const Ht=await Mt.json();if(O(Ht),M("completed"),(ft=Ht.stages)!=null&&ft.terrain_3d){const Tt=Ht.stages.terrain_3d;F({rows:Tt.rows,cols:Tt.cols,min_height:Tt.min_height,max_height:Tt.max_height,mean_height:Tt.mean_height,heights:Tt.heights,texture_url:`${h}${Tt.texture_url}?t=${Date.now()}`,dsm_vis_url:`${h}${Tt.dsm_vis_url}?t=${Date.now()}`})}const Dt=document.getElementById("upload-section");Dt&&Dt.scrollIntoView({behavior:"smooth",block:"start"})}catch(Mt){console.error("Pipeline error:",Mt),N(Mt.message),M("error")}},Ft=()=>{window.open(`${h}/static/outputs/dsm/dsm.tif`,"_blank")},Wt=ct=>{if(e(ct),ct==="settings"){r(!0);return}const Mt={dashboard:null,upload:"upload-section",da3:"upload-section",terrain:"terrain-section",measurements:"terrain-section","dsm-analysis":"dsm-analysis-section",gamus:"dsm-analysis-section"}[ct];if(Mt){const Ht=document.getElementById(Mt);Ht&&Ht.scrollIntoView({behavior:"smooth",block:"start"})}else window.scrollTo({top:0,behavior:"smooth"})},D=A==="running";return S.jsxs("div",{className:"luminous-app-root",children:[S.jsx(v1,{activeNav:o,onSelectNav:Wt,onOpenSettings:()=>r(!0),onRunDemo:()=>{yt(),wt()},isRunning:D,systemStatus:l}),S.jsx(x1,{onUploadClick:()=>Wt("upload"),onDemoClick:()=>{yt(),wt()},onSelectFeature:Wt,activeFeature:o,isRunning:D}),S.jsxs("main",{className:"luminous-workspace-content",children:[S.jsxs("div",{className:"specs-pill-banner",children:[S.jsxs("div",{className:"spec-item",children:[S.jsx("span",{className:"spec-dot green"}),S.jsx("span",{className:"spec-label",children:"Model:"}),S.jsx("strong",{className:"spec-val",children:"Depth Anything 3 (Small / 34.3M)"})]}),S.jsxs("div",{className:"spec-item",children:[S.jsx(Yx,{size:14,className:"text-slate-500"}),S.jsx("span",{className:"spec-label",children:"Backend Device:"}),S.jsx("strong",{className:"spec-val",children:((W=l==null?void 0:l.environment)==null?void 0:W.device_name)||"Host CPU / PyTorch 2.14"})]}),S.jsxs("div",{className:"spec-item",children:[S.jsx(Nu,{size:14,className:"text-slate-500"}),S.jsx("span",{className:"spec-label",children:"Calibration:"}),S.jsx("strong",{className:"spec-val",children:"Affine Least-Squares (H = a·D + b)"})]}),S.jsxs("div",{className:"spec-item",children:[S.jsx(py,{size:14,className:"text-emerald-500"}),S.jsx("span",{className:"spec-label",children:"ISRO SIH 2026:"}),S.jsx("strong",{className:"spec-val",children:"PS #26175 Verified"})]})]}),S.jsx("div",{className:"workspace-section-container",children:S.jsx(y1,{pipelineResult:y,dsmMesh:j,selectedMeasurement:ht})}),S.jsx("div",{className:"workspace-section-container",children:S.jsx(S1,{pipelineState:A,pipelineResult:y})}),S.jsx("div",{className:"workspace-section-container",id:"upload-section",children:S.jsx(M1,{selectedFile:d,fileName:g,fileFormat:m,filePreviewUrl:E,pipelineState:A,pipelineResult:y,pipelineError:z,onFileSelect:xt,onLoadSample:yt,onRunPipeline:wt})}),S.jsx("div",{className:"workspace-section-container",id:"terrain-section",children:S.jsxs("div",{className:"terrain-workspace-layout-grid",children:[S.jsx("div",{className:"terrain-viewer-col",children:S.jsx(rw,{dsmMesh:j,textureMode:U,onTextureModeChange:C,cameraMode:P,onCameraModeChange:B,verticalExaggeration:H,colorRamp:$,selectedMeasurement:ht,onSelectMeasurement:q,resetViewTrigger:lt,onResetView:()=>X(ct=>ct+1)})}),S.jsx("div",{className:"terrain-sidebar-col",id:"measurements-section",children:S.jsx(ow,{selectedMeasurement:ht,onResetMeasurement:()=>q(null),verticalExaggeration:H,onVerticalExaggerationChange:it,textureMode:U,onTextureModeChange:C,colorRamp:$,onColorRampChange:dt,dsmMesh:j,onExportDSM:Ft})})]})}),S.jsx("div",{className:"workspace-section-container",id:"dsm-analysis-section",children:S.jsx(lw,{pipelineResult:y,dsmMesh:j,onExportDSM:Ft})}),S.jsxs("footer",{className:"luminous-footer",children:[S.jsxs("div",{className:"footer-content-inner",children:[S.jsxs("div",{className:"footer-brand-side",children:[S.jsx("div",{className:"footer-brand-title",children:"DepthWizard"}),S.jsx("p",{className:"footer-desc",children:"Single-View Height Estimation and 3D Flythrough for ISRO SIH 2026 Problem Statement 26175. Powered by Depth Anything 3 foundation geometry model."})]}),S.jsxs("div",{className:"footer-badges-side",children:[S.jsx("span",{className:"footer-chip",children:"Depth Anything 3"}),S.jsx("span",{className:"footer-chip",children:"FastAPI & PyTorch"}),S.jsx("span",{className:"footer-chip",children:"Three.js WebGL"}),S.jsx("span",{className:"footer-chip",children:"GAMUS & GLO-30 Grounded"})]})]}),S.jsxs("div",{className:"footer-bottom-line",children:[S.jsx("span",{children:"© 2026 DepthWizard Research Team. All rights reserved."}),S.jsx("span",{children:"ISRO Smart India Hackathon 2026 | Problem Statement 26175"})]})]})]}),S.jsx(cw,{isOpen:i,onClose:()=>r(!1),systemStatus:l,colorRamp:$,onColorRampChange:dt,verticalExaggeration:H,onVerticalExaggerationChange:it})]})}jE.createRoot(document.getElementById("root")).render(S.jsx(te.StrictMode,{children:S.jsx(uw,{})}));
