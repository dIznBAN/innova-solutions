(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function r(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=r(l);fetch(l.href,c)}})();function sE(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ch={exports:{}},yo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mv;function oE(){if(mv)return yo;mv=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:e,type:s,key:f,ref:l!==void 0?l:null,props:c}}return yo.Fragment=t,yo.jsx=r,yo.jsxs=r,yo}var pv;function lE(){return pv||(pv=1,ch.exports=oE()),ch.exports}var d=lE(),uh={exports:{}},me={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gv;function cE(){if(gv)return me;gv=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),x=Symbol.iterator;function w(A){return A===null||typeof A!="object"?null:(A=x&&A[x]||A["@@iterator"],typeof A=="function"?A:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,O={};function N(A,q,k){this.props=A,this.context=q,this.refs=O,this.updater=k||C}N.prototype.isReactComponent={},N.prototype.setState=function(A,q){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,q,"setState")},N.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function _(){}_.prototype=N.prototype;function U(A,q,k){this.props=A,this.context=q,this.refs=O,this.updater=k||C}var z=U.prototype=new _;z.constructor=U,R(z,N.prototype),z.isPureReactComponent=!0;var Q=Array.isArray,G={H:null,A:null,T:null,S:null,V:null},Y=Object.prototype.hasOwnProperty;function H(A,q,k,W,ee,oe){return k=oe.ref,{$$typeof:e,type:A,key:q,ref:k!==void 0?k:null,props:oe}}function X(A,q){return H(A.type,q,void 0,void 0,void 0,A.props)}function ne(A){return typeof A=="object"&&A!==null&&A.$$typeof===e}function re(A){var q={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(k){return q[k]})}var ye=/\/+/g;function be(A,q){return typeof A=="object"&&A!==null&&A.key!=null?re(""+A.key):q.toString(36)}function pe(){}function ve(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(pe,pe):(A.status="pending",A.then(function(q){A.status==="pending"&&(A.status="fulfilled",A.value=q)},function(q){A.status==="pending"&&(A.status="rejected",A.reason=q)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function Ce(A,q,k,W,ee){var oe=typeof A;(oe==="undefined"||oe==="boolean")&&(A=null);var le=!1;if(A===null)le=!0;else switch(oe){case"bigint":case"string":case"number":le=!0;break;case"object":switch(A.$$typeof){case e:case t:le=!0;break;case y:return le=A._init,Ce(le(A._payload),q,k,W,ee)}}if(le)return ee=ee(A),le=W===""?"."+be(A,0):W,Q(ee)?(k="",le!=null&&(k=le.replace(ye,"$&/")+"/"),Ce(ee,q,k,"",function(gt){return gt})):ee!=null&&(ne(ee)&&(ee=X(ee,k+(ee.key==null||A&&A.key===ee.key?"":(""+ee.key).replace(ye,"$&/")+"/")+le)),q.push(ee)),1;le=0;var st=W===""?".":W+":";if(Q(A))for(var De=0;De<A.length;De++)W=A[De],oe=st+be(W,De),le+=Ce(W,q,k,oe,ee);else if(De=w(A),typeof De=="function")for(A=De.call(A),De=0;!(W=A.next()).done;)W=W.value,oe=st+be(W,De++),le+=Ce(W,q,k,oe,ee);else if(oe==="object"){if(typeof A.then=="function")return Ce(ve(A),q,k,W,ee);throw q=String(A),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return le}function F(A,q,k){if(A==null)return A;var W=[],ee=0;return Ce(A,W,"","",function(oe){return q.call(k,oe,ee++)}),W}function M(A){if(A._status===-1){var q=A._result;q=q(),q.then(function(k){(A._status===0||A._status===-1)&&(A._status=1,A._result=k)},function(k){(A._status===0||A._status===-1)&&(A._status=2,A._result=k)}),A._status===-1&&(A._status=0,A._result=q)}if(A._status===1)return A._result.default;throw A._result}var P=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)};function te(){}return me.Children={map:F,forEach:function(A,q,k){F(A,function(){q.apply(this,arguments)},k)},count:function(A){var q=0;return F(A,function(){q++}),q},toArray:function(A){return F(A,function(q){return q})||[]},only:function(A){if(!ne(A))throw Error("React.Children.only expected to receive a single React element child.");return A}},me.Component=N,me.Fragment=r,me.Profiler=l,me.PureComponent=U,me.StrictMode=s,me.Suspense=m,me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,me.__COMPILER_RUNTIME={__proto__:null,c:function(A){return G.H.useMemoCache(A)}},me.cache=function(A){return function(){return A.apply(null,arguments)}},me.cloneElement=function(A,q,k){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var W=R({},A.props),ee=A.key,oe=void 0;if(q!=null)for(le in q.ref!==void 0&&(oe=void 0),q.key!==void 0&&(ee=""+q.key),q)!Y.call(q,le)||le==="key"||le==="__self"||le==="__source"||le==="ref"&&q.ref===void 0||(W[le]=q[le]);var le=arguments.length-2;if(le===1)W.children=k;else if(1<le){for(var st=Array(le),De=0;De<le;De++)st[De]=arguments[De+2];W.children=st}return H(A.type,ee,void 0,void 0,oe,W)},me.createContext=function(A){return A={$$typeof:f,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:c,_context:A},A},me.createElement=function(A,q,k){var W,ee={},oe=null;if(q!=null)for(W in q.key!==void 0&&(oe=""+q.key),q)Y.call(q,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(ee[W]=q[W]);var le=arguments.length-2;if(le===1)ee.children=k;else if(1<le){for(var st=Array(le),De=0;De<le;De++)st[De]=arguments[De+2];ee.children=st}if(A&&A.defaultProps)for(W in le=A.defaultProps,le)ee[W]===void 0&&(ee[W]=le[W]);return H(A,oe,void 0,void 0,null,ee)},me.createRef=function(){return{current:null}},me.forwardRef=function(A){return{$$typeof:p,render:A}},me.isValidElement=ne,me.lazy=function(A){return{$$typeof:y,_payload:{_status:-1,_result:A},_init:M}},me.memo=function(A,q){return{$$typeof:g,type:A,compare:q===void 0?null:q}},me.startTransition=function(A){var q=G.T,k={};G.T=k;try{var W=A(),ee=G.S;ee!==null&&ee(k,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(te,P)}catch(oe){P(oe)}finally{G.T=q}},me.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},me.use=function(A){return G.H.use(A)},me.useActionState=function(A,q,k){return G.H.useActionState(A,q,k)},me.useCallback=function(A,q){return G.H.useCallback(A,q)},me.useContext=function(A){return G.H.useContext(A)},me.useDebugValue=function(){},me.useDeferredValue=function(A,q){return G.H.useDeferredValue(A,q)},me.useEffect=function(A,q,k){var W=G.H;if(typeof k=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return W.useEffect(A,q)},me.useId=function(){return G.H.useId()},me.useImperativeHandle=function(A,q,k){return G.H.useImperativeHandle(A,q,k)},me.useInsertionEffect=function(A,q){return G.H.useInsertionEffect(A,q)},me.useLayoutEffect=function(A,q){return G.H.useLayoutEffect(A,q)},me.useMemo=function(A,q){return G.H.useMemo(A,q)},me.useOptimistic=function(A,q){return G.H.useOptimistic(A,q)},me.useReducer=function(A,q,k){return G.H.useReducer(A,q,k)},me.useRef=function(A){return G.H.useRef(A)},me.useState=function(A){return G.H.useState(A)},me.useSyncExternalStore=function(A,q,k){return G.H.useSyncExternalStore(A,q,k)},me.useTransition=function(){return G.H.useTransition()},me.version="19.1.1",me}var yv;function lp(){return yv||(yv=1,uh.exports=cE()),uh.exports}var T=lp();const wt=sE(T);var dh={exports:{}},vo={},fh={exports:{}},hh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vv;function uE(){return vv||(vv=1,function(e){function t(F,M){var P=F.length;F.push(M);e:for(;0<P;){var te=P-1>>>1,A=F[te];if(0<l(A,M))F[te]=M,F[P]=A,P=te;else break e}}function r(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var M=F[0],P=F.pop();if(P!==M){F[0]=P;e:for(var te=0,A=F.length,q=A>>>1;te<q;){var k=2*(te+1)-1,W=F[k],ee=k+1,oe=F[ee];if(0>l(W,P))ee<A&&0>l(oe,W)?(F[te]=oe,F[ee]=P,te=ee):(F[te]=W,F[k]=P,te=k);else if(ee<A&&0>l(oe,P))F[te]=oe,F[ee]=P,te=ee;else break e}}return M}function l(F,M){var P=F.sortIndex-M.sortIndex;return P!==0?P:F.id-M.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;e.unstable_now=function(){return c.now()}}else{var f=Date,p=f.now();e.unstable_now=function(){return f.now()-p}}var m=[],g=[],y=1,x=null,w=3,C=!1,R=!1,O=!1,N=!1,_=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function Q(F){for(var M=r(g);M!==null;){if(M.callback===null)s(g);else if(M.startTime<=F)s(g),M.sortIndex=M.expirationTime,t(m,M);else break;M=r(g)}}function G(F){if(O=!1,Q(F),!R)if(r(m)!==null)R=!0,Y||(Y=!0,be());else{var M=r(g);M!==null&&Ce(G,M.startTime-F)}}var Y=!1,H=-1,X=5,ne=-1;function re(){return N?!0:!(e.unstable_now()-ne<X)}function ye(){if(N=!1,Y){var F=e.unstable_now();ne=F;var M=!0;try{e:{R=!1,O&&(O=!1,U(H),H=-1),C=!0;var P=w;try{t:{for(Q(F),x=r(m);x!==null&&!(x.expirationTime>F&&re());){var te=x.callback;if(typeof te=="function"){x.callback=null,w=x.priorityLevel;var A=te(x.expirationTime<=F);if(F=e.unstable_now(),typeof A=="function"){x.callback=A,Q(F),M=!0;break t}x===r(m)&&s(m),Q(F)}else s(m);x=r(m)}if(x!==null)M=!0;else{var q=r(g);q!==null&&Ce(G,q.startTime-F),M=!1}}break e}finally{x=null,w=P,C=!1}M=void 0}}finally{M?be():Y=!1}}}var be;if(typeof z=="function")be=function(){z(ye)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,ve=pe.port2;pe.port1.onmessage=ye,be=function(){ve.postMessage(null)}}else be=function(){_(ye,0)};function Ce(F,M){H=_(function(){F(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(F){F.callback=null},e.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<F?Math.floor(1e3/F):5},e.unstable_getCurrentPriorityLevel=function(){return w},e.unstable_next=function(F){switch(w){case 1:case 2:case 3:var M=3;break;default:M=w}var P=w;w=M;try{return F()}finally{w=P}},e.unstable_requestPaint=function(){N=!0},e.unstable_runWithPriority=function(F,M){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var P=w;w=F;try{return M()}finally{w=P}},e.unstable_scheduleCallback=function(F,M,P){var te=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?te+P:te):P=te,F){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=P+A,F={id:y++,callback:M,priorityLevel:F,startTime:P,expirationTime:A,sortIndex:-1},P>te?(F.sortIndex=P,t(g,F),r(m)===null&&F===r(g)&&(O?(U(H),H=-1):O=!0,Ce(G,P-te))):(F.sortIndex=A,t(m,F),R||C||(R=!0,Y||(Y=!0,be()))),F},e.unstable_shouldYield=re,e.unstable_wrapCallback=function(F){var M=w;return function(){var P=w;w=M;try{return F.apply(this,arguments)}finally{w=P}}}}(hh)),hh}var xv;function dE(){return xv||(xv=1,fh.exports=uE()),fh.exports}var mh={exports:{}},xt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bv;function fE(){if(bv)return xt;bv=1;var e=lp();function t(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var s={d:{f:r,r:function(){throw Error(t(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,g,y){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:g,implementation:y}}var f=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return xt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,xt.createPortal=function(m,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(t(299));return c(m,g,null,y)},xt.flushSync=function(m){var g=f.T,y=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=g,s.p=y,s.d.f()}},xt.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(m,g))},xt.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},xt.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var y=g.as,x=p(y,g.crossOrigin),w=typeof g.integrity=="string"?g.integrity:void 0,C=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?s.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:x,integrity:w,fetchPriority:C}):y==="script"&&s.d.X(m,{crossOrigin:x,integrity:w,fetchPriority:C,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},xt.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=p(g.as,g.crossOrigin);s.d.M(m,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(m)},xt.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,x=p(y,g.crossOrigin);s.d.L(m,y,{crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},xt.preloadModule=function(m,g){if(typeof m=="string")if(g){var y=p(g.as,g.crossOrigin);s.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(m)},xt.requestFormReset=function(m){s.d.r(m)},xt.unstable_batchedUpdates=function(m,g){return m(g)},xt.useFormState=function(m,g,y){return f.H.useFormState(m,g,y)},xt.useFormStatus=function(){return f.H.useHostTransitionStatus()},xt.version="19.1.1",xt}var wv;function hE(){if(wv)return mh.exports;wv=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),mh.exports=fE(),mh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sv;function mE(){if(Sv)return vo;Sv=1;var e=dE(),t=lp(),r=hE();function s(n){var i="https://react.dev/errors/"+n;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function c(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function f(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function p(n){if(c(n)!==n)throw Error(s(188))}function m(n){var i=n.alternate;if(!i){if(i=c(n),i===null)throw Error(s(188));return i!==n?null:n}for(var a=n,o=i;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return p(u),n;if(h===o)return p(u),i;h=h.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=h;else{for(var v=!1,E=u.child;E;){if(E===a){v=!0,a=u,o=h;break}if(E===o){v=!0,o=u,a=h;break}E=E.sibling}if(!v){for(E=h.child;E;){if(E===a){v=!0,a=h,o=u;break}if(E===o){v=!0,o=h,a=u;break}E=E.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?n:i}function g(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n;for(n=n.child;n!==null;){if(i=g(n),i!==null)return i;n=n.sibling}return null}var y=Object.assign,x=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),U=Symbol.for("react.consumer"),z=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),Y=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),ne=Symbol.for("react.activity"),re=Symbol.for("react.memo_cache_sentinel"),ye=Symbol.iterator;function be(n){return n===null||typeof n!="object"?null:(n=ye&&n[ye]||n["@@iterator"],typeof n=="function"?n:null)}var pe=Symbol.for("react.client.reference");function ve(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===pe?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case R:return"Fragment";case N:return"Profiler";case O:return"StrictMode";case G:return"Suspense";case Y:return"SuspenseList";case ne:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case C:return"Portal";case z:return(n.displayName||"Context")+".Provider";case U:return(n._context.displayName||"Context")+".Consumer";case Q:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case H:return i=n.displayName||null,i!==null?i:ve(n.type)||"Memo";case X:i=n._payload,n=n._init;try{return ve(n(i))}catch{}}return null}var Ce=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,M=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},te=[],A=-1;function q(n){return{current:n}}function k(n){0>A||(n.current=te[A],te[A]=null,A--)}function W(n,i){A++,te[A]=n.current,n.current=i}var ee=q(null),oe=q(null),le=q(null),st=q(null);function De(n,i){switch(W(le,i),W(oe,n),W(ee,null),i.nodeType){case 9:case 11:n=(n=i.documentElement)&&(n=n.namespaceURI)?Vy(n):0;break;default:if(n=i.tagName,i=i.namespaceURI)i=Vy(i),n=Hy(i,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}k(ee),W(ee,n)}function gt(){k(ee),k(oe),k(le)}function gr(n){n.memoizedState!==null&&W(st,n);var i=ee.current,a=Hy(i,n.type);i!==a&&(W(oe,n),W(ee,a))}function Fn(n){oe.current===n&&(k(ee),k(oe)),st.current===n&&(k(st),fo._currentValue=P)}var Zt=Object.prototype.hasOwnProperty,Xu=e.unstable_scheduleCallback,Zu=e.unstable_cancelCallback,I6=e.unstable_shouldYield,$6=e.unstable_requestPaint,jn=e.unstable_now,U6=e.unstable_getCurrentPriorityLevel,Sg=e.unstable_ImmediatePriority,Eg=e.unstable_UserBlockingPriority,ul=e.unstable_NormalPriority,B6=e.unstable_LowPriority,Tg=e.unstable_IdlePriority,V6=e.log,H6=e.unstable_setDisableYieldValue,xs=null,It=null;function _i(n){if(typeof V6=="function"&&H6(n),It&&typeof It.setStrictMode=="function")try{It.setStrictMode(xs,n)}catch{}}var $t=Math.clz32?Math.clz32:G6,F6=Math.log,q6=Math.LN2;function G6(n){return n>>>=0,n===0?32:31-(F6(n)/q6|0)|0}var dl=256,fl=4194304;function yr(n){var i=n&42;if(i!==0)return i;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function hl(n,i,a){var o=n.pendingLanes;if(o===0)return 0;var u=0,h=n.suspendedLanes,v=n.pingedLanes;n=n.warmLanes;var E=o&134217727;return E!==0?(o=E&~h,o!==0?u=yr(o):(v&=E,v!==0?u=yr(v):a||(a=E&~n,a!==0&&(u=yr(a))))):(E=o&~h,E!==0?u=yr(E):v!==0?u=yr(v):a||(a=o&~n,a!==0&&(u=yr(a)))),u===0?0:i!==0&&i!==u&&(i&h)===0&&(h=u&-u,a=i&-i,h>=a||h===32&&(a&4194048)!==0)?i:u}function bs(n,i){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&i)===0}function Y6(n,i){switch(n){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cg(){var n=dl;return dl<<=1,(dl&4194048)===0&&(dl=256),n}function Ag(){var n=fl;return fl<<=1,(fl&62914560)===0&&(fl=4194304),n}function Qu(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function ws(n,i){n.pendingLanes|=i,i!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function K6(n,i,a,o,u,h){var v=n.pendingLanes;n.pendingLanes=a,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=a,n.entangledLanes&=a,n.errorRecoveryDisabledLanes&=a,n.shellSuspendCounter=0;var E=n.entanglements,j=n.expirationTimes,$=n.hiddenUpdates;for(a=v&~a;0<a;){var K=31-$t(a),J=1<<K;E[K]=0,j[K]=-1;var B=$[K];if(B!==null)for($[K]=null,K=0;K<B.length;K++){var V=B[K];V!==null&&(V.lane&=-536870913)}a&=~J}o!==0&&_g(n,o,0),h!==0&&u===0&&n.tag!==0&&(n.suspendedLanes|=h&~(v&~i))}function _g(n,i,a){n.pendingLanes|=i,n.suspendedLanes&=~i;var o=31-$t(i);n.entangledLanes|=i,n.entanglements[o]=n.entanglements[o]|1073741824|a&4194090}function jg(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var o=31-$t(a),u=1<<o;u&i|n[o]&i&&(n[o]|=i),a&=~u}}function Wu(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Ju(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Rg(){var n=M.p;return n!==0?n:(n=window.event,n===void 0?32:lv(n.type))}function X6(n,i){var a=M.p;try{return M.p=n,i()}finally{M.p=a}}var ji=Math.random().toString(36).slice(2),yt="__reactFiber$"+ji,Rt="__reactProps$"+ji,Jr="__reactContainer$"+ji,ed="__reactEvents$"+ji,Z6="__reactListeners$"+ji,Q6="__reactHandles$"+ji,Dg="__reactResources$"+ji,Ss="__reactMarker$"+ji;function td(n){delete n[yt],delete n[Rt],delete n[ed],delete n[Z6],delete n[Q6]}function ea(n){var i=n[yt];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Jr]||a[yt]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Yy(n);n!==null;){if(a=n[yt])return a;n=Yy(n)}return i}n=a,a=n.parentNode}return null}function ta(n){if(n=n[yt]||n[Jr]){var i=n.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return n}return null}function Es(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n.stateNode;throw Error(s(33))}function na(n){var i=n[Dg];return i||(i=n[Dg]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function ot(n){n[Ss]=!0}var Mg=new Set,kg={};function vr(n,i){ia(n,i),ia(n+"Capture",i)}function ia(n,i){for(kg[n]=i,n=0;n<i.length;n++)Mg.add(i[n])}var W6=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Og={},Ng={};function J6(n){return Zt.call(Ng,n)?!0:Zt.call(Og,n)?!1:W6.test(n)?Ng[n]=!0:(Og[n]=!0,!1)}function ml(n,i,a){if(J6(i))if(a===null)n.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":n.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){n.removeAttribute(i);return}}n.setAttribute(i,""+a)}}function pl(n,i,a){if(a===null)n.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(i);return}n.setAttribute(i,""+a)}}function qn(n,i,a,o){if(o===null)n.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttributeNS(i,a,""+o)}}var nd,Lg;function ra(n){if(nd===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);nd=i&&i[1]||"",Lg=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+nd+n+Lg}var id=!1;function rd(n,i){if(!n||id)return"";id=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var J=function(){throw Error()};if(Object.defineProperty(J.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(J,[])}catch(V){var B=V}Reflect.construct(n,[],J)}else{try{J.call()}catch(V){B=V}n.call(J.prototype)}}else{try{throw Error()}catch(V){B=V}(J=n())&&typeof J.catch=="function"&&J.catch(function(){})}}catch(V){if(V&&B&&typeof V.stack=="string")return[V.stack,B.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),v=h[0],E=h[1];if(v&&E){var j=v.split(`
`),$=E.split(`
`);for(u=o=0;o<j.length&&!j[o].includes("DetermineComponentFrameRoot");)o++;for(;u<$.length&&!$[u].includes("DetermineComponentFrameRoot");)u++;if(o===j.length||u===$.length)for(o=j.length-1,u=$.length-1;1<=o&&0<=u&&j[o]!==$[u];)u--;for(;1<=o&&0<=u;o--,u--)if(j[o]!==$[u]){if(o!==1||u!==1)do if(o--,u--,0>u||j[o]!==$[u]){var K=`
`+j[o].replace(" at new "," at ");return n.displayName&&K.includes("<anonymous>")&&(K=K.replace("<anonymous>",n.displayName)),K}while(1<=o&&0<=u);break}}}finally{id=!1,Error.prepareStackTrace=a}return(a=n?n.displayName||n.name:"")?ra(a):""}function eS(n){switch(n.tag){case 26:case 27:case 5:return ra(n.type);case 16:return ra("Lazy");case 13:return ra("Suspense");case 19:return ra("SuspenseList");case 0:case 15:return rd(n.type,!1);case 11:return rd(n.type.render,!1);case 1:return rd(n.type,!0);case 31:return ra("Activity");default:return""}}function zg(n){try{var i="";do i+=eS(n),n=n.return;while(n);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Qt(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Pg(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function tS(n){var i=Pg(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),o=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,h=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return u.call(this)},set:function(v){o=""+v,h.call(this,v)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(v){o=""+v},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function gl(n){n._valueTracker||(n._valueTracker=tS(n))}function Ig(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),o="";return n&&(o=Pg(n)?n.checked?"true":"false":n.value),n=o,n!==a?(i.setValue(n),!0):!1}function yl(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var nS=/[\n"\\]/g;function Wt(n){return n.replace(nS,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function ad(n,i,a,o,u,h,v,E){n.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?n.type=v:n.removeAttribute("type"),i!=null?v==="number"?(i===0&&n.value===""||n.value!=i)&&(n.value=""+Qt(i)):n.value!==""+Qt(i)&&(n.value=""+Qt(i)):v!=="submit"&&v!=="reset"||n.removeAttribute("value"),i!=null?sd(n,v,Qt(i)):a!=null?sd(n,v,Qt(a)):o!=null&&n.removeAttribute("value"),u==null&&h!=null&&(n.defaultChecked=!!h),u!=null&&(n.checked=u&&typeof u!="function"&&typeof u!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?n.name=""+Qt(E):n.removeAttribute("name")}function $g(n,i,a,o,u,h,v,E){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(n.type=h),i!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||i!=null))return;a=a!=null?""+Qt(a):"",i=i!=null?""+Qt(i):a,E||i===n.value||(n.value=i),n.defaultValue=i}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,n.checked=E?n.checked:!!o,n.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(n.name=v)}function sd(n,i,a){i==="number"&&yl(n.ownerDocument)===n||n.defaultValue===""+a||(n.defaultValue=""+a)}function aa(n,i,a,o){if(n=n.options,i){i={};for(var u=0;u<a.length;u++)i["$"+a[u]]=!0;for(a=0;a<n.length;a++)u=i.hasOwnProperty("$"+n[a].value),n[a].selected!==u&&(n[a].selected=u),u&&o&&(n[a].defaultSelected=!0)}else{for(a=""+Qt(a),i=null,u=0;u<n.length;u++){if(n[u].value===a){n[u].selected=!0,o&&(n[u].defaultSelected=!0);return}i!==null||n[u].disabled||(i=n[u])}i!==null&&(i.selected=!0)}}function Ug(n,i,a){if(i!=null&&(i=""+Qt(i),i!==n.value&&(n.value=i),a==null)){n.defaultValue!==i&&(n.defaultValue=i);return}n.defaultValue=a!=null?""+Qt(a):""}function Bg(n,i,a,o){if(i==null){if(o!=null){if(a!=null)throw Error(s(92));if(Ce(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),i=a}a=Qt(i),n.defaultValue=a,o=n.textContent,o===a&&o!==""&&o!==null&&(n.value=o)}function sa(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var iS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Vg(n,i,a){var o=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?n.setProperty(i,""):i==="float"?n.cssFloat="":n[i]="":o?n.setProperty(i,a):typeof a!="number"||a===0||iS.has(i)?i==="float"?n.cssFloat=a:n[i]=(""+a).trim():n[i]=a+"px"}function Hg(n,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(n=n.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?n.setProperty(o,""):o==="float"?n.cssFloat="":n[o]="");for(var u in i)o=i[u],i.hasOwnProperty(u)&&a[u]!==o&&Vg(n,u,o)}else for(var h in i)i.hasOwnProperty(h)&&Vg(n,h,i[h])}function od(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),aS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function vl(n){return aS.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var ld=null;function cd(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var oa=null,la=null;function Fg(n){var i=ta(n);if(i&&(n=i.stateNode)){var a=n[Rt]||null;e:switch(n=i.stateNode,i.type){case"input":if(ad(n,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Wt(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var o=a[i];if(o!==n&&o.form===n.form){var u=o[Rt]||null;if(!u)throw Error(s(90));ad(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(i=0;i<a.length;i++)o=a[i],o.form===n.form&&Ig(o)}break e;case"textarea":Ug(n,a.value,a.defaultValue);break e;case"select":i=a.value,i!=null&&aa(n,!!a.multiple,i,!1)}}}var ud=!1;function qg(n,i,a){if(ud)return n(i,a);ud=!0;try{var o=n(i);return o}finally{if(ud=!1,(oa!==null||la!==null)&&(ic(),oa&&(i=oa,n=la,la=oa=null,Fg(i),n)))for(i=0;i<n.length;i++)Fg(n[i])}}function Ts(n,i){var a=n.stateNode;if(a===null)return null;var o=a[Rt]||null;if(o===null)return null;a=o[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(n=n.type,o=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!o;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var Gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),dd=!1;if(Gn)try{var Cs={};Object.defineProperty(Cs,"passive",{get:function(){dd=!0}}),window.addEventListener("test",Cs,Cs),window.removeEventListener("test",Cs,Cs)}catch{dd=!1}var Ri=null,fd=null,xl=null;function Gg(){if(xl)return xl;var n,i=fd,a=i.length,o,u="value"in Ri?Ri.value:Ri.textContent,h=u.length;for(n=0;n<a&&i[n]===u[n];n++);var v=a-n;for(o=1;o<=v&&i[a-o]===u[h-o];o++);return xl=u.slice(n,1<o?1-o:void 0)}function bl(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function wl(){return!0}function Yg(){return!1}function Dt(n){function i(a,o,u,h,v){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=v,this.currentTarget=null;for(var E in n)n.hasOwnProperty(E)&&(a=n[E],this[E]=a?a(h):h[E]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?wl:Yg,this.isPropagationStopped=Yg,this}return y(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=wl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=wl)},persist:function(){},isPersistent:wl}),i}var xr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sl=Dt(xr),As=y({},xr,{view:0,detail:0}),sS=Dt(As),hd,md,_s,El=y({},As,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gd,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==_s&&(_s&&n.type==="mousemove"?(hd=n.screenX-_s.screenX,md=n.screenY-_s.screenY):md=hd=0,_s=n),hd)},movementY:function(n){return"movementY"in n?n.movementY:md}}),Kg=Dt(El),oS=y({},El,{dataTransfer:0}),lS=Dt(oS),cS=y({},As,{relatedTarget:0}),pd=Dt(cS),uS=y({},xr,{animationName:0,elapsedTime:0,pseudoElement:0}),dS=Dt(uS),fS=y({},xr,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),hS=Dt(fS),mS=y({},xr,{data:0}),Xg=Dt(mS),pS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vS(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=yS[n])?!!i[n]:!1}function gd(){return vS}var xS=y({},As,{key:function(n){if(n.key){var i=pS[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=bl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?gS[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gd,charCode:function(n){return n.type==="keypress"?bl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?bl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),bS=Dt(xS),wS=y({},El,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zg=Dt(wS),SS=y({},As,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gd}),ES=Dt(SS),TS=y({},xr,{propertyName:0,elapsedTime:0,pseudoElement:0}),CS=Dt(TS),AS=y({},El,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),_S=Dt(AS),jS=y({},xr,{newState:0,oldState:0}),RS=Dt(jS),DS=[9,13,27,32],yd=Gn&&"CompositionEvent"in window,js=null;Gn&&"documentMode"in document&&(js=document.documentMode);var MS=Gn&&"TextEvent"in window&&!js,Qg=Gn&&(!yd||js&&8<js&&11>=js),Wg=" ",Jg=!1;function e0(n,i){switch(n){case"keyup":return DS.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function t0(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ca=!1;function kS(n,i){switch(n){case"compositionend":return t0(i);case"keypress":return i.which!==32?null:(Jg=!0,Wg);case"textInput":return n=i.data,n===Wg&&Jg?null:n;default:return null}}function OS(n,i){if(ca)return n==="compositionend"||!yd&&e0(n,i)?(n=Gg(),xl=fd=Ri=null,ca=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Qg&&i.locale!=="ko"?null:i.data;default:return null}}var NS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function n0(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!NS[n.type]:i==="textarea"}function i0(n,i,a,o){oa?la?la.push(o):la=[o]:oa=o,i=cc(i,"onChange"),0<i.length&&(a=new Sl("onChange","change",null,a,o),n.push({event:a,listeners:i}))}var Rs=null,Ds=null;function LS(n){Py(n,0)}function Tl(n){var i=Es(n);if(Ig(i))return n}function r0(n,i){if(n==="change")return i}var a0=!1;if(Gn){var vd;if(Gn){var xd="oninput"in document;if(!xd){var s0=document.createElement("div");s0.setAttribute("oninput","return;"),xd=typeof s0.oninput=="function"}vd=xd}else vd=!1;a0=vd&&(!document.documentMode||9<document.documentMode)}function o0(){Rs&&(Rs.detachEvent("onpropertychange",l0),Ds=Rs=null)}function l0(n){if(n.propertyName==="value"&&Tl(Ds)){var i=[];i0(i,Ds,n,cd(n)),qg(LS,i)}}function zS(n,i,a){n==="focusin"?(o0(),Rs=i,Ds=a,Rs.attachEvent("onpropertychange",l0)):n==="focusout"&&o0()}function PS(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Tl(Ds)}function IS(n,i){if(n==="click")return Tl(i)}function $S(n,i){if(n==="input"||n==="change")return Tl(i)}function US(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Ut=typeof Object.is=="function"?Object.is:US;function Ms(n,i){if(Ut(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),o=Object.keys(i);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Zt.call(i,u)||!Ut(n[u],i[u]))return!1}return!0}function c0(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function u0(n,i){var a=c0(n);n=0;for(var o;a;){if(a.nodeType===3){if(o=n+a.textContent.length,n<=i&&o>=i)return{node:a,offset:i-n};n=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=c0(a)}}function d0(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?d0(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function f0(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var i=yl(n.document);i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=yl(n.document)}return i}function bd(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}var BS=Gn&&"documentMode"in document&&11>=document.documentMode,ua=null,wd=null,ks=null,Sd=!1;function h0(n,i,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Sd||ua==null||ua!==yl(o)||(o=ua,"selectionStart"in o&&bd(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ks&&Ms(ks,o)||(ks=o,o=cc(wd,"onSelect"),0<o.length&&(i=new Sl("onSelect","select",null,i,a),n.push({event:i,listeners:o}),i.target=ua)))}function br(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var da={animationend:br("Animation","AnimationEnd"),animationiteration:br("Animation","AnimationIteration"),animationstart:br("Animation","AnimationStart"),transitionrun:br("Transition","TransitionRun"),transitionstart:br("Transition","TransitionStart"),transitioncancel:br("Transition","TransitionCancel"),transitionend:br("Transition","TransitionEnd")},Ed={},m0={};Gn&&(m0=document.createElement("div").style,"AnimationEvent"in window||(delete da.animationend.animation,delete da.animationiteration.animation,delete da.animationstart.animation),"TransitionEvent"in window||delete da.transitionend.transition);function wr(n){if(Ed[n])return Ed[n];if(!da[n])return n;var i=da[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in m0)return Ed[n]=i[a];return n}var p0=wr("animationend"),g0=wr("animationiteration"),y0=wr("animationstart"),VS=wr("transitionrun"),HS=wr("transitionstart"),FS=wr("transitioncancel"),v0=wr("transitionend"),x0=new Map,Td="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Td.push("scrollEnd");function pn(n,i){x0.set(n,i),vr(i,[n])}var b0=new WeakMap;function Jt(n,i){if(typeof n=="object"&&n!==null){var a=b0.get(n);return a!==void 0?a:(i={value:n,source:i,stack:zg(i)},b0.set(n,i),i)}return{value:n,source:i,stack:zg(i)}}var en=[],fa=0,Cd=0;function Cl(){for(var n=fa,i=Cd=fa=0;i<n;){var a=en[i];en[i++]=null;var o=en[i];en[i++]=null;var u=en[i];en[i++]=null;var h=en[i];if(en[i++]=null,o!==null&&u!==null){var v=o.pending;v===null?u.next=u:(u.next=v.next,v.next=u),o.pending=u}h!==0&&w0(a,u,h)}}function Al(n,i,a,o){en[fa++]=n,en[fa++]=i,en[fa++]=a,en[fa++]=o,Cd|=o,n.lanes|=o,n=n.alternate,n!==null&&(n.lanes|=o)}function Ad(n,i,a,o){return Al(n,i,a,o),_l(n)}function ha(n,i){return Al(n,null,null,i),_l(n)}function w0(n,i,a){n.lanes|=a;var o=n.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=n.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(n=h.stateNode,n===null||n._visibility&1||(u=!0)),n=h,h=h.return;return n.tag===3?(h=n.stateNode,u&&i!==null&&(u=31-$t(a),n=h.hiddenUpdates,o=n[u],o===null?n[u]=[i]:o.push(i),i.lane=a|536870912),h):null}function _l(n){if(50<io)throw io=0,Of=null,Error(s(185));for(var i=n.return;i!==null;)n=i,i=n.return;return n.tag===3?n.stateNode:null}var ma={};function qS(n,i,a,o){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bt(n,i,a,o){return new qS(n,i,a,o)}function _d(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Yn(n,i){var a=n.alternate;return a===null?(a=Bt(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&65011712,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a.refCleanup=n.refCleanup,a}function S0(n,i){n.flags&=65011714;var a=n.alternate;return a===null?(n.childLanes=0,n.lanes=i,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=a.childLanes,n.lanes=a.lanes,n.child=a.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=a.memoizedProps,n.memoizedState=a.memoizedState,n.updateQueue=a.updateQueue,n.type=a.type,i=a.dependencies,n.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),n}function jl(n,i,a,o,u,h){var v=0;if(o=n,typeof n=="function")_d(n)&&(v=1);else if(typeof n=="string")v=Y3(n,a,ee.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case ne:return n=Bt(31,a,i,u),n.elementType=ne,n.lanes=h,n;case R:return Sr(a.children,u,h,i);case O:v=8,u|=24;break;case N:return n=Bt(12,a,i,u|2),n.elementType=N,n.lanes=h,n;case G:return n=Bt(13,a,i,u),n.elementType=G,n.lanes=h,n;case Y:return n=Bt(19,a,i,u),n.elementType=Y,n.lanes=h,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case _:case z:v=10;break e;case U:v=9;break e;case Q:v=11;break e;case H:v=14;break e;case X:v=16,o=null;break e}v=29,a=Error(s(130,n===null?"null":typeof n,"")),o=null}return i=Bt(v,a,i,u),i.elementType=n,i.type=o,i.lanes=h,i}function Sr(n,i,a,o){return n=Bt(7,n,o,i),n.lanes=a,n}function jd(n,i,a){return n=Bt(6,n,null,i),n.lanes=a,n}function Rd(n,i,a){return i=Bt(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}var pa=[],ga=0,Rl=null,Dl=0,tn=[],nn=0,Er=null,Kn=1,Xn="";function Tr(n,i){pa[ga++]=Dl,pa[ga++]=Rl,Rl=n,Dl=i}function E0(n,i,a){tn[nn++]=Kn,tn[nn++]=Xn,tn[nn++]=Er,Er=n;var o=Kn;n=Xn;var u=32-$t(o)-1;o&=~(1<<u),a+=1;var h=32-$t(i)+u;if(30<h){var v=u-u%5;h=(o&(1<<v)-1).toString(32),o>>=v,u-=v,Kn=1<<32-$t(i)+u|a<<u|o,Xn=h+n}else Kn=1<<h|a<<u|o,Xn=n}function Dd(n){n.return!==null&&(Tr(n,1),E0(n,1,0))}function Md(n){for(;n===Rl;)Rl=pa[--ga],pa[ga]=null,Dl=pa[--ga],pa[ga]=null;for(;n===Er;)Er=tn[--nn],tn[nn]=null,Xn=tn[--nn],tn[nn]=null,Kn=tn[--nn],tn[nn]=null}var Ct=null,Ye=null,Re=!1,Cr=null,Rn=!1,kd=Error(s(519));function Ar(n){var i=Error(s(418,""));throw Ls(Jt(i,n)),kd}function T0(n){var i=n.stateNode,a=n.type,o=n.memoizedProps;switch(i[yt]=n,i[Rt]=o,a){case"dialog":Te("cancel",i),Te("close",i);break;case"iframe":case"object":case"embed":Te("load",i);break;case"video":case"audio":for(a=0;a<ao.length;a++)Te(ao[a],i);break;case"source":Te("error",i);break;case"img":case"image":case"link":Te("error",i),Te("load",i);break;case"details":Te("toggle",i);break;case"input":Te("invalid",i),$g(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),gl(i);break;case"select":Te("invalid",i);break;case"textarea":Te("invalid",i),Bg(i,o.value,o.defaultValue,o.children),gl(i)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||o.suppressHydrationWarning===!0||By(i.textContent,a)?(o.popover!=null&&(Te("beforetoggle",i),Te("toggle",i)),o.onScroll!=null&&Te("scroll",i),o.onScrollEnd!=null&&Te("scrollend",i),o.onClick!=null&&(i.onclick=uc),i=!0):i=!1,i||Ar(n)}function C0(n){for(Ct=n.return;Ct;)switch(Ct.tag){case 5:case 13:Rn=!1;return;case 27:case 3:Rn=!0;return;default:Ct=Ct.return}}function Os(n){if(n!==Ct)return!1;if(!Re)return C0(n),Re=!0,!1;var i=n.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=n.type,a=!(a!=="form"&&a!=="button")||Xf(n.type,n.memoizedProps)),a=!a),a&&Ye&&Ar(n),C0(n),i===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8)if(a=n.data,a==="/$"){if(i===0){Ye=yn(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;n=n.nextSibling}Ye=null}}else i===27?(i=Ye,qi(n.type)?(n=Jf,Jf=null,Ye=n):Ye=i):Ye=Ct?yn(n.stateNode.nextSibling):null;return!0}function Ns(){Ye=Ct=null,Re=!1}function A0(){var n=Cr;return n!==null&&(Ot===null?Ot=n:Ot.push.apply(Ot,n),Cr=null),n}function Ls(n){Cr===null?Cr=[n]:Cr.push(n)}var Od=q(null),_r=null,Zn=null;function Di(n,i,a){W(Od,i._currentValue),i._currentValue=a}function Qn(n){n._currentValue=Od.current,k(Od)}function Nd(n,i,a){for(;n!==null;){var o=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),n===a)break;n=n.return}}function Ld(n,i,a,o){var u=n.child;for(u!==null&&(u.return=n);u!==null;){var h=u.dependencies;if(h!==null){var v=u.child;h=h.firstContext;e:for(;h!==null;){var E=h;h=u;for(var j=0;j<i.length;j++)if(E.context===i[j]){h.lanes|=a,E=h.alternate,E!==null&&(E.lanes|=a),Nd(h.return,a,n),o||(v=null);break e}h=E.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(s(341));v.lanes|=a,h=v.alternate,h!==null&&(h.lanes|=a),Nd(v,a,n),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===n){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function zs(n,i,a,o){n=null;for(var u=i,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var E=u.type;Ut(u.pendingProps.value,v.value)||(n!==null?n.push(E):n=[E])}}else if(u===st.current){if(v=u.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(n!==null?n.push(fo):n=[fo])}u=u.return}n!==null&&Ld(i,n,a,o),i.flags|=262144}function Ml(n){for(n=n.firstContext;n!==null;){if(!Ut(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function jr(n){_r=n,Zn=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function vt(n){return _0(_r,n)}function kl(n,i){return _r===null&&jr(n),_0(n,i)}function _0(n,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},Zn===null){if(n===null)throw Error(s(308));Zn=i,n.dependencies={lanes:0,firstContext:i},n.flags|=524288}else Zn=Zn.next=i;return a}var GS=typeof AbortController<"u"?AbortController:function(){var n=[],i=this.signal={aborted:!1,addEventListener:function(a,o){n.push(o)}};this.abort=function(){i.aborted=!0,n.forEach(function(a){return a()})}},YS=e.unstable_scheduleCallback,KS=e.unstable_NormalPriority,it={$$typeof:z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function zd(){return{controller:new GS,data:new Map,refCount:0}}function Ps(n){n.refCount--,n.refCount===0&&YS(KS,function(){n.controller.abort()})}var Is=null,Pd=0,ya=0,va=null;function XS(n,i){if(Is===null){var a=Is=[];Pd=0,ya=Uf(),va={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Pd++,i.then(j0,j0),i}function j0(){if(--Pd===0&&Is!==null){va!==null&&(va.status="fulfilled");var n=Is;Is=null,ya=0,va=null;for(var i=0;i<n.length;i++)(0,n[i])()}}function ZS(n,i){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return n.then(function(){o.status="fulfilled",o.value=i;for(var u=0;u<a.length;u++)(0,a[u])(i)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var R0=F.S;F.S=function(n,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&XS(n,i),R0!==null&&R0(n,i)};var Rr=q(null);function Id(){var n=Rr.current;return n!==null?n:$e.pooledCache}function Ol(n,i){i===null?W(Rr,Rr.current):W(Rr,i.pool)}function D0(){var n=Id();return n===null?null:{parent:it._currentValue,pool:n}}var $s=Error(s(460)),M0=Error(s(474)),Nl=Error(s(542)),$d={then:function(){}};function k0(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Ll(){}function O0(n,i,a){switch(a=n[a],a===void 0?n.push(i):a!==i&&(i.then(Ll,Ll),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,L0(n),n;default:if(typeof i.status=="string")i.then(Ll,Ll);else{if(n=$e,n!==null&&100<n.shellSuspendCounter)throw Error(s(482));n=i,n.status="pending",n.then(function(o){if(i.status==="pending"){var u=i;u.status="fulfilled",u.value=o}},function(o){if(i.status==="pending"){var u=i;u.status="rejected",u.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,L0(n),n}throw Us=i,$s}}var Us=null;function N0(){if(Us===null)throw Error(s(459));var n=Us;return Us=null,n}function L0(n){if(n===$s||n===Nl)throw Error(s(483))}var Mi=!1;function Ud(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bd(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function ki(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Oi(n,i,a){var o=n.updateQueue;if(o===null)return null;if(o=o.shared,(ke&2)!==0){var u=o.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),o.pending=i,i=_l(n),w0(n,null,a),i}return Al(n,o,i,a),_l(n)}function Bs(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var o=i.lanes;o&=n.pendingLanes,a|=o,i.lanes=a,jg(n,a)}}function Vd(n,i){var a=n.updateQueue,o=n.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=v:h=h.next=v,a=a.next}while(a!==null);h===null?u=h=i:h=h.next=i}else u=h=i;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}var Hd=!1;function Vs(){if(Hd){var n=va;if(n!==null)throw n}}function Hs(n,i,a,o){Hd=!1;var u=n.updateQueue;Mi=!1;var h=u.firstBaseUpdate,v=u.lastBaseUpdate,E=u.shared.pending;if(E!==null){u.shared.pending=null;var j=E,$=j.next;j.next=null,v===null?h=$:v.next=$,v=j;var K=n.alternate;K!==null&&(K=K.updateQueue,E=K.lastBaseUpdate,E!==v&&(E===null?K.firstBaseUpdate=$:E.next=$,K.lastBaseUpdate=j))}if(h!==null){var J=u.baseState;v=0,K=$=j=null,E=h;do{var B=E.lane&-536870913,V=B!==E.lane;if(V?(Ae&B)===B:(o&B)===B){B!==0&&B===ya&&(Hd=!0),K!==null&&(K=K.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});e:{var de=n,se=E;B=i;var ze=a;switch(se.tag){case 1:if(de=se.payload,typeof de=="function"){J=de.call(ze,J,B);break e}J=de;break e;case 3:de.flags=de.flags&-65537|128;case 0:if(de=se.payload,B=typeof de=="function"?de.call(ze,J,B):de,B==null)break e;J=y({},J,B);break e;case 2:Mi=!0}}B=E.callback,B!==null&&(n.flags|=64,V&&(n.flags|=8192),V=u.callbacks,V===null?u.callbacks=[B]:V.push(B))}else V={lane:B,tag:E.tag,payload:E.payload,callback:E.callback,next:null},K===null?($=K=V,j=J):K=K.next=V,v|=B;if(E=E.next,E===null){if(E=u.shared.pending,E===null)break;V=E,E=V.next,V.next=null,u.lastBaseUpdate=V,u.shared.pending=null}}while(!0);K===null&&(j=J),u.baseState=j,u.firstBaseUpdate=$,u.lastBaseUpdate=K,h===null&&(u.shared.lanes=0),Bi|=v,n.lanes=v,n.memoizedState=J}}function z0(n,i){if(typeof n!="function")throw Error(s(191,n));n.call(i)}function P0(n,i){var a=n.callbacks;if(a!==null)for(n.callbacks=null,n=0;n<a.length;n++)z0(a[n],i)}var xa=q(null),zl=q(0);function I0(n,i){n=ri,W(zl,n),W(xa,i),ri=n|i.baseLanes}function Fd(){W(zl,ri),W(xa,xa.current)}function qd(){ri=zl.current,k(xa),k(zl)}var Ni=0,xe=null,Ne=null,Je=null,Pl=!1,ba=!1,Dr=!1,Il=0,Fs=0,wa=null,QS=0;function Ze(){throw Error(s(321))}function Gd(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Ut(n[a],i[a]))return!1;return!0}function Yd(n,i,a,o,u,h){return Ni=h,xe=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,F.H=n===null||n.memoizedState===null?w1:S1,Dr=!1,h=a(o,u),Dr=!1,ba&&(h=U0(i,a,o,u)),$0(n),h}function $0(n){F.H=Fl;var i=Ne!==null&&Ne.next!==null;if(Ni=0,Je=Ne=xe=null,Pl=!1,Fs=0,wa=null,i)throw Error(s(300));n===null||lt||(n=n.dependencies,n!==null&&Ml(n)&&(lt=!0))}function U0(n,i,a,o){xe=n;var u=0;do{if(ba&&(wa=null),Fs=0,ba=!1,25<=u)throw Error(s(301));if(u+=1,Je=Ne=null,n.updateQueue!=null){var h=n.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}F.H=r3,h=i(a,o)}while(ba);return h}function WS(){var n=F.H,i=n.useState()[0];return i=typeof i.then=="function"?qs(i):i,n=n.useState()[0],(Ne!==null?Ne.memoizedState:null)!==n&&(xe.flags|=1024),i}function Kd(){var n=Il!==0;return Il=0,n}function Xd(n,i,a){i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~a}function Zd(n){if(Pl){for(n=n.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Pl=!1}Ni=0,Je=Ne=xe=null,ba=!1,Fs=Il=0,wa=null}function Mt(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?xe.memoizedState=Je=n:Je=Je.next=n,Je}function et(){if(Ne===null){var n=xe.alternate;n=n!==null?n.memoizedState:null}else n=Ne.next;var i=Je===null?xe.memoizedState:Je.next;if(i!==null)Je=i,Ne=n;else{if(n===null)throw xe.alternate===null?Error(s(467)):Error(s(310));Ne=n,n={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Je===null?xe.memoizedState=Je=n:Je=Je.next=n}return Je}function Qd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function qs(n){var i=Fs;return Fs+=1,wa===null&&(wa=[]),n=O0(wa,n,i),i=xe,(Je===null?i.memoizedState:Je.next)===null&&(i=i.alternate,F.H=i===null||i.memoizedState===null?w1:S1),n}function $l(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return qs(n);if(n.$$typeof===z)return vt(n)}throw Error(s(438,String(n)))}function Wd(n){var i=null,a=xe.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var o=xe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(u){return u.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=Qd(),xe.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(n),o=0;o<n;o++)a[o]=re;return i.index++,a}function Wn(n,i){return typeof i=="function"?i(n):i}function Ul(n){var i=et();return Jd(i,Ne,n)}function Jd(n,i,a){var o=n.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=n.baseQueue,h=o.pending;if(h!==null){if(u!==null){var v=u.next;u.next=h.next,h.next=v}i.baseQueue=u=h,o.pending=null}if(h=n.baseState,u===null)n.memoizedState=h;else{i=u.next;var E=v=null,j=null,$=i,K=!1;do{var J=$.lane&-536870913;if(J!==$.lane?(Ae&J)===J:(Ni&J)===J){var B=$.revertLane;if(B===0)j!==null&&(j=j.next={lane:0,revertLane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),J===ya&&(K=!0);else if((Ni&B)===B){$=$.next,B===ya&&(K=!0);continue}else J={lane:0,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},j===null?(E=j=J,v=h):j=j.next=J,xe.lanes|=B,Bi|=B;J=$.action,Dr&&a(h,J),h=$.hasEagerState?$.eagerState:a(h,J)}else B={lane:J,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},j===null?(E=j=B,v=h):j=j.next=B,xe.lanes|=J,Bi|=J;$=$.next}while($!==null&&$!==i);if(j===null?v=h:j.next=E,!Ut(h,n.memoizedState)&&(lt=!0,K&&(a=va,a!==null)))throw a;n.memoizedState=h,n.baseState=v,n.baseQueue=j,o.lastRenderedState=h}return u===null&&(o.lanes=0),[n.memoizedState,o.dispatch]}function ef(n){var i=et(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=n;var o=a.dispatch,u=a.pending,h=i.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do h=n(h,v.action),v=v.next;while(v!==u);Ut(h,i.memoizedState)||(lt=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),a.lastRenderedState=h}return[h,o]}function B0(n,i,a){var o=xe,u=et(),h=Re;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=i();var v=!Ut((Ne||u).memoizedState,a);v&&(u.memoizedState=a,lt=!0),u=u.queue;var E=F0.bind(null,o,u,n);if(Gs(2048,8,E,[n]),u.getSnapshot!==i||v||Je!==null&&Je.memoizedState.tag&1){if(o.flags|=2048,Sa(9,Bl(),H0.bind(null,o,u,a,i),null),$e===null)throw Error(s(349));h||(Ni&124)!==0||V0(o,i,a)}return a}function V0(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=xe.updateQueue,i===null?(i=Qd(),xe.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function H0(n,i,a,o){i.value=a,i.getSnapshot=o,q0(i)&&G0(n)}function F0(n,i,a){return a(function(){q0(i)&&G0(n)})}function q0(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Ut(n,a)}catch{return!0}}function G0(n){var i=ha(n,2);i!==null&&Gt(i,n,2)}function tf(n){var i=Mt();if(typeof n=="function"){var a=n;if(n=a(),Dr){_i(!0);try{a()}finally{_i(!1)}}}return i.memoizedState=i.baseState=n,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wn,lastRenderedState:n},i}function Y0(n,i,a,o){return n.baseState=a,Jd(n,Ne,typeof o=="function"?o:Wn)}function JS(n,i,a,o,u){if(Hl(n))throw Error(s(485));if(n=i.action,n!==null){var h={payload:u,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){h.listeners.push(v)}};F.T!==null?a(!0):h.isTransition=!1,o(h),a=i.pending,a===null?(h.next=i.pending=h,K0(i,h)):(h.next=a.next,i.pending=a.next=h)}}function K0(n,i){var a=i.action,o=i.payload,u=n.state;if(i.isTransition){var h=F.T,v={};F.T=v;try{var E=a(u,o),j=F.S;j!==null&&j(v,E),X0(n,i,E)}catch($){nf(n,i,$)}finally{F.T=h}}else try{h=a(u,o),X0(n,i,h)}catch($){nf(n,i,$)}}function X0(n,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Z0(n,i,o)},function(o){return nf(n,i,o)}):Z0(n,i,a)}function Z0(n,i,a){i.status="fulfilled",i.value=a,Q0(i),n.state=a,i=n.pending,i!==null&&(a=i.next,a===i?n.pending=null:(a=a.next,i.next=a,K0(n,a)))}function nf(n,i,a){var o=n.pending;if(n.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=a,Q0(i),i=i.next;while(i!==o)}n.action=null}function Q0(n){n=n.listeners;for(var i=0;i<n.length;i++)(0,n[i])()}function W0(n,i){return i}function J0(n,i){if(Re){var a=$e.formState;if(a!==null){e:{var o=xe;if(Re){if(Ye){t:{for(var u=Ye,h=Rn;u.nodeType!==8;){if(!h){u=null;break t}if(u=yn(u.nextSibling),u===null){u=null;break t}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){Ye=yn(u.nextSibling),o=u.data==="F!";break e}}Ar(o)}o=!1}o&&(i=a[0])}}return a=Mt(),a.memoizedState=a.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:W0,lastRenderedState:i},a.queue=o,a=v1.bind(null,xe,o),o.dispatch=a,o=tf(!1),h=lf.bind(null,xe,!1,o.queue),o=Mt(),u={state:i,dispatch:null,action:n,pending:null},o.queue=u,a=JS.bind(null,xe,u,h,a),u.dispatch=a,o.memoizedState=n,[i,a,!1]}function e1(n){var i=et();return t1(i,Ne,n)}function t1(n,i,a){if(i=Jd(n,i,W0)[0],n=Ul(Wn)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=qs(i)}catch(v){throw v===$s?Nl:v}else o=i;i=et();var u=i.queue,h=u.dispatch;return a!==i.memoizedState&&(xe.flags|=2048,Sa(9,Bl(),e3.bind(null,u,a),null)),[o,h,n]}function e3(n,i){n.action=i}function n1(n){var i=et(),a=Ne;if(a!==null)return t1(i,a,n);et(),i=i.memoizedState,a=et();var o=a.queue.dispatch;return a.memoizedState=n,[i,o,!1]}function Sa(n,i,a,o){return n={tag:n,create:a,deps:o,inst:i,next:null},i=xe.updateQueue,i===null&&(i=Qd(),xe.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=n.next=n:(o=a.next,a.next=n,n.next=o,i.lastEffect=n),n}function Bl(){return{destroy:void 0,resource:void 0}}function i1(){return et().memoizedState}function Vl(n,i,a,o){var u=Mt();o=o===void 0?null:o,xe.flags|=n,u.memoizedState=Sa(1|i,Bl(),a,o)}function Gs(n,i,a,o){var u=et();o=o===void 0?null:o;var h=u.memoizedState.inst;Ne!==null&&o!==null&&Gd(o,Ne.memoizedState.deps)?u.memoizedState=Sa(i,h,a,o):(xe.flags|=n,u.memoizedState=Sa(1|i,h,a,o))}function r1(n,i){Vl(8390656,8,n,i)}function a1(n,i){Gs(2048,8,n,i)}function s1(n,i){return Gs(4,2,n,i)}function o1(n,i){return Gs(4,4,n,i)}function l1(n,i){if(typeof i=="function"){n=n();var a=i(n);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function c1(n,i,a){a=a!=null?a.concat([n]):null,Gs(4,4,l1.bind(null,i,n),a)}function rf(){}function u1(n,i){var a=et();i=i===void 0?null:i;var o=a.memoizedState;return i!==null&&Gd(i,o[1])?o[0]:(a.memoizedState=[n,i],n)}function d1(n,i){var a=et();i=i===void 0?null:i;var o=a.memoizedState;if(i!==null&&Gd(i,o[1]))return o[0];if(o=n(),Dr){_i(!0);try{n()}finally{_i(!1)}}return a.memoizedState=[o,i],o}function af(n,i,a){return a===void 0||(Ni&1073741824)!==0?n.memoizedState=i:(n.memoizedState=a,n=my(),xe.lanes|=n,Bi|=n,a)}function f1(n,i,a,o){return Ut(a,i)?a:xa.current!==null?(n=af(n,a,o),Ut(n,i)||(lt=!0),n):(Ni&42)===0?(lt=!0,n.memoizedState=a):(n=my(),xe.lanes|=n,Bi|=n,i)}function h1(n,i,a,o,u){var h=M.p;M.p=h!==0&&8>h?h:8;var v=F.T,E={};F.T=E,lf(n,!1,i,a);try{var j=u(),$=F.S;if($!==null&&$(E,j),j!==null&&typeof j=="object"&&typeof j.then=="function"){var K=ZS(j,o);Ys(n,i,K,qt(n))}else Ys(n,i,o,qt(n))}catch(J){Ys(n,i,{then:function(){},status:"rejected",reason:J},qt())}finally{M.p=h,F.T=v}}function t3(){}function sf(n,i,a,o){if(n.tag!==5)throw Error(s(476));var u=m1(n).queue;h1(n,u,i,P,a===null?t3:function(){return p1(n),a(o)})}function m1(n){var i=n.memoizedState;if(i!==null)return i;i={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wn,lastRenderedState:P},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wn,lastRenderedState:a},next:null},n.memoizedState=i,n=n.alternate,n!==null&&(n.memoizedState=i),i}function p1(n){var i=m1(n).next.queue;Ys(n,i,{},qt())}function of(){return vt(fo)}function g1(){return et().memoizedState}function y1(){return et().memoizedState}function n3(n){for(var i=n.return;i!==null;){switch(i.tag){case 24:case 3:var a=qt();n=ki(a);var o=Oi(i,n,a);o!==null&&(Gt(o,i,a),Bs(o,i,a)),i={cache:zd()},n.payload=i;return}i=i.return}}function i3(n,i,a){var o=qt();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Hl(n)?x1(i,a):(a=Ad(n,i,a,o),a!==null&&(Gt(a,n,o),b1(a,i,o)))}function v1(n,i,a){var o=qt();Ys(n,i,a,o)}function Ys(n,i,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Hl(n))x1(i,u);else{var h=n.alternate;if(n.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var v=i.lastRenderedState,E=h(v,a);if(u.hasEagerState=!0,u.eagerState=E,Ut(E,v))return Al(n,i,u,0),$e===null&&Cl(),!1}catch{}finally{}if(a=Ad(n,i,u,o),a!==null)return Gt(a,n,o),b1(a,i,o),!0}return!1}function lf(n,i,a,o){if(o={lane:2,revertLane:Uf(),action:o,hasEagerState:!1,eagerState:null,next:null},Hl(n)){if(i)throw Error(s(479))}else i=Ad(n,a,o,2),i!==null&&Gt(i,n,2)}function Hl(n){var i=n.alternate;return n===xe||i!==null&&i===xe}function x1(n,i){ba=Pl=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function b1(n,i,a){if((a&4194048)!==0){var o=i.lanes;o&=n.pendingLanes,a|=o,i.lanes=a,jg(n,a)}}var Fl={readContext:vt,use:$l,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useLayoutEffect:Ze,useInsertionEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useSyncExternalStore:Ze,useId:Ze,useHostTransitionStatus:Ze,useFormState:Ze,useActionState:Ze,useOptimistic:Ze,useMemoCache:Ze,useCacheRefresh:Ze},w1={readContext:vt,use:$l,useCallback:function(n,i){return Mt().memoizedState=[n,i===void 0?null:i],n},useContext:vt,useEffect:r1,useImperativeHandle:function(n,i,a){a=a!=null?a.concat([n]):null,Vl(4194308,4,l1.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Vl(4194308,4,n,i)},useInsertionEffect:function(n,i){Vl(4,2,n,i)},useMemo:function(n,i){var a=Mt();i=i===void 0?null:i;var o=n();if(Dr){_i(!0);try{n()}finally{_i(!1)}}return a.memoizedState=[o,i],o},useReducer:function(n,i,a){var o=Mt();if(a!==void 0){var u=a(i);if(Dr){_i(!0);try{a(i)}finally{_i(!1)}}}else u=i;return o.memoizedState=o.baseState=u,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:u},o.queue=n,n=n.dispatch=i3.bind(null,xe,n),[o.memoizedState,n]},useRef:function(n){var i=Mt();return n={current:n},i.memoizedState=n},useState:function(n){n=tf(n);var i=n.queue,a=v1.bind(null,xe,i);return i.dispatch=a,[n.memoizedState,a]},useDebugValue:rf,useDeferredValue:function(n,i){var a=Mt();return af(a,n,i)},useTransition:function(){var n=tf(!1);return n=h1.bind(null,xe,n.queue,!0,!1),Mt().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,i,a){var o=xe,u=Mt();if(Re){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),$e===null)throw Error(s(349));(Ae&124)!==0||V0(o,i,a)}u.memoizedState=a;var h={value:a,getSnapshot:i};return u.queue=h,r1(F0.bind(null,o,h,n),[n]),o.flags|=2048,Sa(9,Bl(),H0.bind(null,o,h,a,i),null),a},useId:function(){var n=Mt(),i=$e.identifierPrefix;if(Re){var a=Xn,o=Kn;a=(o&~(1<<32-$t(o)-1)).toString(32)+a,i="«"+i+"R"+a,a=Il++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=QS++,i="«"+i+"r"+a.toString(32)+"»";return n.memoizedState=i},useHostTransitionStatus:of,useFormState:J0,useActionState:J0,useOptimistic:function(n){var i=Mt();i.memoizedState=i.baseState=n;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=lf.bind(null,xe,!0,a),a.dispatch=i,[n,i]},useMemoCache:Wd,useCacheRefresh:function(){return Mt().memoizedState=n3.bind(null,xe)}},S1={readContext:vt,use:$l,useCallback:u1,useContext:vt,useEffect:a1,useImperativeHandle:c1,useInsertionEffect:s1,useLayoutEffect:o1,useMemo:d1,useReducer:Ul,useRef:i1,useState:function(){return Ul(Wn)},useDebugValue:rf,useDeferredValue:function(n,i){var a=et();return f1(a,Ne.memoizedState,n,i)},useTransition:function(){var n=Ul(Wn)[0],i=et().memoizedState;return[typeof n=="boolean"?n:qs(n),i]},useSyncExternalStore:B0,useId:g1,useHostTransitionStatus:of,useFormState:e1,useActionState:e1,useOptimistic:function(n,i){var a=et();return Y0(a,Ne,n,i)},useMemoCache:Wd,useCacheRefresh:y1},r3={readContext:vt,use:$l,useCallback:u1,useContext:vt,useEffect:a1,useImperativeHandle:c1,useInsertionEffect:s1,useLayoutEffect:o1,useMemo:d1,useReducer:ef,useRef:i1,useState:function(){return ef(Wn)},useDebugValue:rf,useDeferredValue:function(n,i){var a=et();return Ne===null?af(a,n,i):f1(a,Ne.memoizedState,n,i)},useTransition:function(){var n=ef(Wn)[0],i=et().memoizedState;return[typeof n=="boolean"?n:qs(n),i]},useSyncExternalStore:B0,useId:g1,useHostTransitionStatus:of,useFormState:n1,useActionState:n1,useOptimistic:function(n,i){var a=et();return Ne!==null?Y0(a,Ne,n,i):(a.baseState=n,[n,a.queue.dispatch])},useMemoCache:Wd,useCacheRefresh:y1},Ea=null,Ks=0;function ql(n){var i=Ks;return Ks+=1,Ea===null&&(Ea=[]),O0(Ea,n,i)}function Xs(n,i){i=i.props.ref,n.ref=i!==void 0?i:null}function Gl(n,i){throw i.$$typeof===x?Error(s(525)):(n=Object.prototype.toString.call(i),Error(s(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n)))}function E1(n){var i=n._init;return i(n._payload)}function T1(n){function i(L,D){if(n){var I=L.deletions;I===null?(L.deletions=[D],L.flags|=16):I.push(D)}}function a(L,D){if(!n)return null;for(;D!==null;)i(L,D),D=D.sibling;return null}function o(L){for(var D=new Map;L!==null;)L.key!==null?D.set(L.key,L):D.set(L.index,L),L=L.sibling;return D}function u(L,D){return L=Yn(L,D),L.index=0,L.sibling=null,L}function h(L,D,I){return L.index=I,n?(I=L.alternate,I!==null?(I=I.index,I<D?(L.flags|=67108866,D):I):(L.flags|=67108866,D)):(L.flags|=1048576,D)}function v(L){return n&&L.alternate===null&&(L.flags|=67108866),L}function E(L,D,I,Z){return D===null||D.tag!==6?(D=jd(I,L.mode,Z),D.return=L,D):(D=u(D,I),D.return=L,D)}function j(L,D,I,Z){var ie=I.type;return ie===R?K(L,D,I.props.children,Z,I.key):D!==null&&(D.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===X&&E1(ie)===D.type)?(D=u(D,I.props),Xs(D,I),D.return=L,D):(D=jl(I.type,I.key,I.props,null,L.mode,Z),Xs(D,I),D.return=L,D)}function $(L,D,I,Z){return D===null||D.tag!==4||D.stateNode.containerInfo!==I.containerInfo||D.stateNode.implementation!==I.implementation?(D=Rd(I,L.mode,Z),D.return=L,D):(D=u(D,I.children||[]),D.return=L,D)}function K(L,D,I,Z,ie){return D===null||D.tag!==7?(D=Sr(I,L.mode,Z,ie),D.return=L,D):(D=u(D,I),D.return=L,D)}function J(L,D,I){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return D=jd(""+D,L.mode,I),D.return=L,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case w:return I=jl(D.type,D.key,D.props,null,L.mode,I),Xs(I,D),I.return=L,I;case C:return D=Rd(D,L.mode,I),D.return=L,D;case X:var Z=D._init;return D=Z(D._payload),J(L,D,I)}if(Ce(D)||be(D))return D=Sr(D,L.mode,I,null),D.return=L,D;if(typeof D.then=="function")return J(L,ql(D),I);if(D.$$typeof===z)return J(L,kl(L,D),I);Gl(L,D)}return null}function B(L,D,I,Z){var ie=D!==null?D.key:null;if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return ie!==null?null:E(L,D,""+I,Z);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case w:return I.key===ie?j(L,D,I,Z):null;case C:return I.key===ie?$(L,D,I,Z):null;case X:return ie=I._init,I=ie(I._payload),B(L,D,I,Z)}if(Ce(I)||be(I))return ie!==null?null:K(L,D,I,Z,null);if(typeof I.then=="function")return B(L,D,ql(I),Z);if(I.$$typeof===z)return B(L,D,kl(L,I),Z);Gl(L,I)}return null}function V(L,D,I,Z,ie){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return L=L.get(I)||null,E(D,L,""+Z,ie);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case w:return L=L.get(Z.key===null?I:Z.key)||null,j(D,L,Z,ie);case C:return L=L.get(Z.key===null?I:Z.key)||null,$(D,L,Z,ie);case X:var we=Z._init;return Z=we(Z._payload),V(L,D,I,Z,ie)}if(Ce(Z)||be(Z))return L=L.get(I)||null,K(D,L,Z,ie,null);if(typeof Z.then=="function")return V(L,D,I,ql(Z),ie);if(Z.$$typeof===z)return V(L,D,I,kl(D,Z),ie);Gl(D,Z)}return null}function de(L,D,I,Z){for(var ie=null,we=null,ae=D,ce=D=0,ut=null;ae!==null&&ce<I.length;ce++){ae.index>ce?(ut=ae,ae=null):ut=ae.sibling;var je=B(L,ae,I[ce],Z);if(je===null){ae===null&&(ae=ut);break}n&&ae&&je.alternate===null&&i(L,ae),D=h(je,D,ce),we===null?ie=je:we.sibling=je,we=je,ae=ut}if(ce===I.length)return a(L,ae),Re&&Tr(L,ce),ie;if(ae===null){for(;ce<I.length;ce++)ae=J(L,I[ce],Z),ae!==null&&(D=h(ae,D,ce),we===null?ie=ae:we.sibling=ae,we=ae);return Re&&Tr(L,ce),ie}for(ae=o(ae);ce<I.length;ce++)ut=V(ae,L,ce,I[ce],Z),ut!==null&&(n&&ut.alternate!==null&&ae.delete(ut.key===null?ce:ut.key),D=h(ut,D,ce),we===null?ie=ut:we.sibling=ut,we=ut);return n&&ae.forEach(function(Zi){return i(L,Zi)}),Re&&Tr(L,ce),ie}function se(L,D,I,Z){if(I==null)throw Error(s(151));for(var ie=null,we=null,ae=D,ce=D=0,ut=null,je=I.next();ae!==null&&!je.done;ce++,je=I.next()){ae.index>ce?(ut=ae,ae=null):ut=ae.sibling;var Zi=B(L,ae,je.value,Z);if(Zi===null){ae===null&&(ae=ut);break}n&&ae&&Zi.alternate===null&&i(L,ae),D=h(Zi,D,ce),we===null?ie=Zi:we.sibling=Zi,we=Zi,ae=ut}if(je.done)return a(L,ae),Re&&Tr(L,ce),ie;if(ae===null){for(;!je.done;ce++,je=I.next())je=J(L,je.value,Z),je!==null&&(D=h(je,D,ce),we===null?ie=je:we.sibling=je,we=je);return Re&&Tr(L,ce),ie}for(ae=o(ae);!je.done;ce++,je=I.next())je=V(ae,L,ce,je.value,Z),je!==null&&(n&&je.alternate!==null&&ae.delete(je.key===null?ce:je.key),D=h(je,D,ce),we===null?ie=je:we.sibling=je,we=je);return n&&ae.forEach(function(aE){return i(L,aE)}),Re&&Tr(L,ce),ie}function ze(L,D,I,Z){if(typeof I=="object"&&I!==null&&I.type===R&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case w:e:{for(var ie=I.key;D!==null;){if(D.key===ie){if(ie=I.type,ie===R){if(D.tag===7){a(L,D.sibling),Z=u(D,I.props.children),Z.return=L,L=Z;break e}}else if(D.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===X&&E1(ie)===D.type){a(L,D.sibling),Z=u(D,I.props),Xs(Z,I),Z.return=L,L=Z;break e}a(L,D);break}else i(L,D);D=D.sibling}I.type===R?(Z=Sr(I.props.children,L.mode,Z,I.key),Z.return=L,L=Z):(Z=jl(I.type,I.key,I.props,null,L.mode,Z),Xs(Z,I),Z.return=L,L=Z)}return v(L);case C:e:{for(ie=I.key;D!==null;){if(D.key===ie)if(D.tag===4&&D.stateNode.containerInfo===I.containerInfo&&D.stateNode.implementation===I.implementation){a(L,D.sibling),Z=u(D,I.children||[]),Z.return=L,L=Z;break e}else{a(L,D);break}else i(L,D);D=D.sibling}Z=Rd(I,L.mode,Z),Z.return=L,L=Z}return v(L);case X:return ie=I._init,I=ie(I._payload),ze(L,D,I,Z)}if(Ce(I))return de(L,D,I,Z);if(be(I)){if(ie=be(I),typeof ie!="function")throw Error(s(150));return I=ie.call(I),se(L,D,I,Z)}if(typeof I.then=="function")return ze(L,D,ql(I),Z);if(I.$$typeof===z)return ze(L,D,kl(L,I),Z);Gl(L,I)}return typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint"?(I=""+I,D!==null&&D.tag===6?(a(L,D.sibling),Z=u(D,I),Z.return=L,L=Z):(a(L,D),Z=jd(I,L.mode,Z),Z.return=L,L=Z),v(L)):a(L,D)}return function(L,D,I,Z){try{Ks=0;var ie=ze(L,D,I,Z);return Ea=null,ie}catch(ae){if(ae===$s||ae===Nl)throw ae;var we=Bt(29,ae,null,L.mode);return we.lanes=Z,we.return=L,we}finally{}}}var Ta=T1(!0),C1=T1(!1),rn=q(null),Dn=null;function Li(n){var i=n.alternate;W(rt,rt.current&1),W(rn,n),Dn===null&&(i===null||xa.current!==null||i.memoizedState!==null)&&(Dn=n)}function A1(n){if(n.tag===22){if(W(rt,rt.current),W(rn,n),Dn===null){var i=n.alternate;i!==null&&i.memoizedState!==null&&(Dn=n)}}else zi()}function zi(){W(rt,rt.current),W(rn,rn.current)}function Jn(n){k(rn),Dn===n&&(Dn=null),k(rt)}var rt=q(0);function Yl(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Wf(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function cf(n,i,a,o){i=n.memoizedState,a=a(o,i),a=a==null?i:y({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var uf={enqueueSetState:function(n,i,a){n=n._reactInternals;var o=qt(),u=ki(o);u.payload=i,a!=null&&(u.callback=a),i=Oi(n,u,o),i!==null&&(Gt(i,n,o),Bs(i,n,o))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var o=qt(),u=ki(o);u.tag=1,u.payload=i,a!=null&&(u.callback=a),i=Oi(n,u,o),i!==null&&(Gt(i,n,o),Bs(i,n,o))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=qt(),o=ki(a);o.tag=2,i!=null&&(o.callback=i),i=Oi(n,o,a),i!==null&&(Gt(i,n,a),Bs(i,n,a))}};function _1(n,i,a,o,u,h,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(o,h,v):i.prototype&&i.prototype.isPureReactComponent?!Ms(a,o)||!Ms(u,h):!0}function j1(n,i,a,o){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,o),i.state!==n&&uf.enqueueReplaceState(i,i.state,null)}function Mr(n,i){var a=i;if("ref"in i){a={};for(var o in i)o!=="ref"&&(a[o]=i[o])}if(n=n.defaultProps){a===i&&(a=y({},a));for(var u in n)a[u]===void 0&&(a[u]=n[u])}return a}var Kl=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function R1(n){Kl(n)}function D1(n){console.error(n)}function M1(n){Kl(n)}function Xl(n,i){try{var a=n.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function k1(n,i,a){try{var o=n.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function df(n,i,a){return a=ki(a),a.tag=3,a.payload={element:null},a.callback=function(){Xl(n,i)},a}function O1(n){return n=ki(n),n.tag=3,n}function N1(n,i,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;n.payload=function(){return u(h)},n.callback=function(){k1(i,a,o)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(n.callback=function(){k1(i,a,o),typeof u!="function"&&(Vi===null?Vi=new Set([this]):Vi.add(this));var E=o.stack;this.componentDidCatch(o.value,{componentStack:E!==null?E:""})})}function a3(n,i,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=a.alternate,i!==null&&zs(i,a,u,!0),a=rn.current,a!==null){switch(a.tag){case 13:return Dn===null?Lf():a.alternate===null&&Ke===0&&(Ke=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===$d?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([o]):i.add(o),Pf(n,o,u)),!1;case 22:return a.flags|=65536,o===$d?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([o]):a.add(o)),Pf(n,o,u)),!1}throw Error(s(435,a.tag))}return Pf(n,o,u),Lf(),!1}if(Re)return i=rn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=u,o!==kd&&(n=Error(s(422),{cause:o}),Ls(Jt(n,a)))):(o!==kd&&(i=Error(s(423),{cause:o}),Ls(Jt(i,a))),n=n.current.alternate,n.flags|=65536,u&=-u,n.lanes|=u,o=Jt(o,a),u=df(n.stateNode,o,u),Vd(n,u),Ke!==4&&(Ke=2)),!1;var h=Error(s(520),{cause:o});if(h=Jt(h,a),no===null?no=[h]:no.push(h),Ke!==4&&(Ke=2),i===null)return!0;o=Jt(o,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,n=u&-u,a.lanes|=n,n=df(a.stateNode,o,n),Vd(a,n),!1;case 1:if(i=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Vi===null||!Vi.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=O1(u),N1(u,n,a,o),Vd(a,u),!1}a=a.return}while(a!==null);return!1}var L1=Error(s(461)),lt=!1;function ft(n,i,a,o){i.child=n===null?C1(i,null,a,o):Ta(i,n.child,a,o)}function z1(n,i,a,o,u){a=a.render;var h=i.ref;if("ref"in o){var v={};for(var E in o)E!=="ref"&&(v[E]=o[E])}else v=o;return jr(i),o=Yd(n,i,a,v,h,u),E=Kd(),n!==null&&!lt?(Xd(n,i,u),ei(n,i,u)):(Re&&E&&Dd(i),i.flags|=1,ft(n,i,o,u),i.child)}function P1(n,i,a,o,u){if(n===null){var h=a.type;return typeof h=="function"&&!_d(h)&&h.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=h,I1(n,i,h,o,u)):(n=jl(a.type,null,o,i,i.mode,u),n.ref=i.ref,n.return=i,i.child=n)}if(h=n.child,!xf(n,u)){var v=h.memoizedProps;if(a=a.compare,a=a!==null?a:Ms,a(v,o)&&n.ref===i.ref)return ei(n,i,u)}return i.flags|=1,n=Yn(h,o),n.ref=i.ref,n.return=i,i.child=n}function I1(n,i,a,o,u){if(n!==null){var h=n.memoizedProps;if(Ms(h,o)&&n.ref===i.ref)if(lt=!1,i.pendingProps=o=h,xf(n,u))(n.flags&131072)!==0&&(lt=!0);else return i.lanes=n.lanes,ei(n,i,u)}return ff(n,i,a,o,u)}function $1(n,i,a){var o=i.pendingProps,u=o.children,h=n!==null?n.memoizedState:null;if(o.mode==="hidden"){if((i.flags&128)!==0){if(o=h!==null?h.baseLanes|a:a,n!==null){for(u=i.child=n.child,h=0;u!==null;)h=h|u.lanes|u.childLanes,u=u.sibling;i.childLanes=h&~o}else i.childLanes=0,i.child=null;return U1(n,i,o,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},n!==null&&Ol(i,h!==null?h.cachePool:null),h!==null?I0(i,h):Fd(),A1(i);else return i.lanes=i.childLanes=536870912,U1(n,i,h!==null?h.baseLanes|a:a,a)}else h!==null?(Ol(i,h.cachePool),I0(i,h),zi(),i.memoizedState=null):(n!==null&&Ol(i,null),Fd(),zi());return ft(n,i,u,a),i.child}function U1(n,i,a,o){var u=Id();return u=u===null?null:{parent:it._currentValue,pool:u},i.memoizedState={baseLanes:a,cachePool:u},n!==null&&Ol(i,null),Fd(),A1(i),n!==null&&zs(n,i,o,!0),null}function Zl(n,i){var a=i.ref;if(a===null)n!==null&&n.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(n===null||n.ref!==a)&&(i.flags|=4194816)}}function ff(n,i,a,o,u){return jr(i),a=Yd(n,i,a,o,void 0,u),o=Kd(),n!==null&&!lt?(Xd(n,i,u),ei(n,i,u)):(Re&&o&&Dd(i),i.flags|=1,ft(n,i,a,u),i.child)}function B1(n,i,a,o,u,h){return jr(i),i.updateQueue=null,a=U0(i,o,a,u),$0(n),o=Kd(),n!==null&&!lt?(Xd(n,i,h),ei(n,i,h)):(Re&&o&&Dd(i),i.flags|=1,ft(n,i,a,h),i.child)}function V1(n,i,a,o,u){if(jr(i),i.stateNode===null){var h=ma,v=a.contextType;typeof v=="object"&&v!==null&&(h=vt(v)),h=new a(o,h),i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=uf,i.stateNode=h,h._reactInternals=i,h=i.stateNode,h.props=o,h.state=i.memoizedState,h.refs={},Ud(i),v=a.contextType,h.context=typeof v=="object"&&v!==null?vt(v):ma,h.state=i.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(cf(i,a,v,o),h.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(v=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),v!==h.state&&uf.enqueueReplaceState(h,h.state,null),Hs(i,o,h,u),Vs(),h.state=i.memoizedState),typeof h.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(n===null){h=i.stateNode;var E=i.memoizedProps,j=Mr(a,E);h.props=j;var $=h.context,K=a.contextType;v=ma,typeof K=="object"&&K!==null&&(v=vt(K));var J=a.getDerivedStateFromProps;K=typeof J=="function"||typeof h.getSnapshotBeforeUpdate=="function",E=i.pendingProps!==E,K||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(E||$!==v)&&j1(i,h,o,v),Mi=!1;var B=i.memoizedState;h.state=B,Hs(i,o,h,u),Vs(),$=i.memoizedState,E||B!==$||Mi?(typeof J=="function"&&(cf(i,a,J,o),$=i.memoizedState),(j=Mi||_1(i,a,j,o,B,$,v))?(K||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(i.flags|=4194308)):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=$),h.props=o,h.state=$,h.context=v,o=j):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{h=i.stateNode,Bd(n,i),v=i.memoizedProps,K=Mr(a,v),h.props=K,J=i.pendingProps,B=h.context,$=a.contextType,j=ma,typeof $=="object"&&$!==null&&(j=vt($)),E=a.getDerivedStateFromProps,($=typeof E=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(v!==J||B!==j)&&j1(i,h,o,j),Mi=!1,B=i.memoizedState,h.state=B,Hs(i,o,h,u),Vs();var V=i.memoizedState;v!==J||B!==V||Mi||n!==null&&n.dependencies!==null&&Ml(n.dependencies)?(typeof E=="function"&&(cf(i,a,E,o),V=i.memoizedState),(K=Mi||_1(i,a,K,o,B,V,j)||n!==null&&n.dependencies!==null&&Ml(n.dependencies))?($||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,V,j),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,V,j)),typeof h.componentDidUpdate=="function"&&(i.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof h.componentDidUpdate!="function"||v===n.memoizedProps&&B===n.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||v===n.memoizedProps&&B===n.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=V),h.props=o,h.state=V,h.context=j,o=K):(typeof h.componentDidUpdate!="function"||v===n.memoizedProps&&B===n.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||v===n.memoizedProps&&B===n.memoizedState||(i.flags|=1024),o=!1)}return h=o,Zl(n,i),o=(i.flags&128)!==0,h||o?(h=i.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),i.flags|=1,n!==null&&o?(i.child=Ta(i,n.child,null,u),i.child=Ta(i,null,a,u)):ft(n,i,a,u),i.memoizedState=h.state,n=i.child):n=ei(n,i,u),n}function H1(n,i,a,o){return Ns(),i.flags|=256,ft(n,i,a,o),i.child}var hf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function mf(n){return{baseLanes:n,cachePool:D0()}}function pf(n,i,a){return n=n!==null?n.childLanes&~a:0,i&&(n|=an),n}function F1(n,i,a){var o=i.pendingProps,u=!1,h=(i.flags&128)!==0,v;if((v=h)||(v=n!==null&&n.memoizedState===null?!1:(rt.current&2)!==0),v&&(u=!0,i.flags&=-129),v=(i.flags&32)!==0,i.flags&=-33,n===null){if(Re){if(u?Li(i):zi(),Re){var E=Ye,j;if(j=E){e:{for(j=E,E=Rn;j.nodeType!==8;){if(!E){E=null;break e}if(j=yn(j.nextSibling),j===null){E=null;break e}}E=j}E!==null?(i.memoizedState={dehydrated:E,treeContext:Er!==null?{id:Kn,overflow:Xn}:null,retryLane:536870912,hydrationErrors:null},j=Bt(18,null,null,0),j.stateNode=E,j.return=i,i.child=j,Ct=i,Ye=null,j=!0):j=!1}j||Ar(i)}if(E=i.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return Wf(E)?i.lanes=32:i.lanes=536870912,null;Jn(i)}return E=o.children,o=o.fallback,u?(zi(),u=i.mode,E=Ql({mode:"hidden",children:E},u),o=Sr(o,u,a,null),E.return=i,o.return=i,E.sibling=o,i.child=E,u=i.child,u.memoizedState=mf(a),u.childLanes=pf(n,v,a),i.memoizedState=hf,o):(Li(i),gf(i,E))}if(j=n.memoizedState,j!==null&&(E=j.dehydrated,E!==null)){if(h)i.flags&256?(Li(i),i.flags&=-257,i=yf(n,i,a)):i.memoizedState!==null?(zi(),i.child=n.child,i.flags|=128,i=null):(zi(),u=o.fallback,E=i.mode,o=Ql({mode:"visible",children:o.children},E),u=Sr(u,E,a,null),u.flags|=2,o.return=i,u.return=i,o.sibling=u,i.child=o,Ta(i,n.child,null,a),o=i.child,o.memoizedState=mf(a),o.childLanes=pf(n,v,a),i.memoizedState=hf,i=u);else if(Li(i),Wf(E)){if(v=E.nextSibling&&E.nextSibling.dataset,v)var $=v.dgst;v=$,o=Error(s(419)),o.stack="",o.digest=v,Ls({value:o,source:null,stack:null}),i=yf(n,i,a)}else if(lt||zs(n,i,a,!1),v=(a&n.childLanes)!==0,lt||v){if(v=$e,v!==null&&(o=a&-a,o=(o&42)!==0?1:Wu(o),o=(o&(v.suspendedLanes|a))!==0?0:o,o!==0&&o!==j.retryLane))throw j.retryLane=o,ha(n,o),Gt(v,n,o),L1;E.data==="$?"||Lf(),i=yf(n,i,a)}else E.data==="$?"?(i.flags|=192,i.child=n.child,i=null):(n=j.treeContext,Ye=yn(E.nextSibling),Ct=i,Re=!0,Cr=null,Rn=!1,n!==null&&(tn[nn++]=Kn,tn[nn++]=Xn,tn[nn++]=Er,Kn=n.id,Xn=n.overflow,Er=i),i=gf(i,o.children),i.flags|=4096);return i}return u?(zi(),u=o.fallback,E=i.mode,j=n.child,$=j.sibling,o=Yn(j,{mode:"hidden",children:o.children}),o.subtreeFlags=j.subtreeFlags&65011712,$!==null?u=Yn($,u):(u=Sr(u,E,a,null),u.flags|=2),u.return=i,o.return=i,o.sibling=u,i.child=o,o=u,u=i.child,E=n.child.memoizedState,E===null?E=mf(a):(j=E.cachePool,j!==null?($=it._currentValue,j=j.parent!==$?{parent:$,pool:$}:j):j=D0(),E={baseLanes:E.baseLanes|a,cachePool:j}),u.memoizedState=E,u.childLanes=pf(n,v,a),i.memoizedState=hf,o):(Li(i),a=n.child,n=a.sibling,a=Yn(a,{mode:"visible",children:o.children}),a.return=i,a.sibling=null,n!==null&&(v=i.deletions,v===null?(i.deletions=[n],i.flags|=16):v.push(n)),i.child=a,i.memoizedState=null,a)}function gf(n,i){return i=Ql({mode:"visible",children:i},n.mode),i.return=n,n.child=i}function Ql(n,i){return n=Bt(22,n,null,i),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function yf(n,i,a){return Ta(i,n.child,null,a),n=gf(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function q1(n,i,a){n.lanes|=i;var o=n.alternate;o!==null&&(o.lanes|=i),Nd(n.return,i,a)}function vf(n,i,a,o,u){var h=n.memoizedState;h===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=o,h.tail=a,h.tailMode=u)}function G1(n,i,a){var o=i.pendingProps,u=o.revealOrder,h=o.tail;if(ft(n,i,o.children,a),o=rt.current,(o&2)!==0)o=o&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&q1(n,a,i);else if(n.tag===19)q1(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}o&=1}switch(W(rt,o),u){case"forwards":for(a=i.child,u=null;a!==null;)n=a.alternate,n!==null&&Yl(n)===null&&(u=a),a=a.sibling;a=u,a===null?(u=i.child,i.child=null):(u=a.sibling,a.sibling=null),vf(i,!1,u,a,h);break;case"backwards":for(a=null,u=i.child,i.child=null;u!==null;){if(n=u.alternate,n!==null&&Yl(n)===null){i.child=u;break}n=u.sibling,u.sibling=a,a=u,u=n}vf(i,!0,a,null,h);break;case"together":vf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ei(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Bi|=i.lanes,(a&i.childLanes)===0)if(n!==null){if(zs(n,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(n!==null&&i.child!==n.child)throw Error(s(153));if(i.child!==null){for(n=i.child,a=Yn(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Yn(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function xf(n,i){return(n.lanes&i)!==0?!0:(n=n.dependencies,!!(n!==null&&Ml(n)))}function s3(n,i,a){switch(i.tag){case 3:De(i,i.stateNode.containerInfo),Di(i,it,n.memoizedState.cache),Ns();break;case 27:case 5:gr(i);break;case 4:De(i,i.stateNode.containerInfo);break;case 10:Di(i,i.type,i.memoizedProps.value);break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(Li(i),i.flags|=128,null):(a&i.child.childLanes)!==0?F1(n,i,a):(Li(i),n=ei(n,i,a),n!==null?n.sibling:null);Li(i);break;case 19:var u=(n.flags&128)!==0;if(o=(a&i.childLanes)!==0,o||(zs(n,i,a,!1),o=(a&i.childLanes)!==0),u){if(o)return G1(n,i,a);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),W(rt,rt.current),o)break;return null;case 22:case 23:return i.lanes=0,$1(n,i,a);case 24:Di(i,it,n.memoizedState.cache)}return ei(n,i,a)}function Y1(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps)lt=!0;else{if(!xf(n,a)&&(i.flags&128)===0)return lt=!1,s3(n,i,a);lt=(n.flags&131072)!==0}else lt=!1,Re&&(i.flags&1048576)!==0&&E0(i,Dl,i.index);switch(i.lanes=0,i.tag){case 16:e:{n=i.pendingProps;var o=i.elementType,u=o._init;if(o=u(o._payload),i.type=o,typeof o=="function")_d(o)?(n=Mr(o,n),i.tag=1,i=V1(null,i,o,n,a)):(i.tag=0,i=ff(null,i,o,n,a));else{if(o!=null){if(u=o.$$typeof,u===Q){i.tag=11,i=z1(null,i,o,n,a);break e}else if(u===H){i.tag=14,i=P1(null,i,o,n,a);break e}}throw i=ve(o)||o,Error(s(306,i,""))}}return i;case 0:return ff(n,i,i.type,i.pendingProps,a);case 1:return o=i.type,u=Mr(o,i.pendingProps),V1(n,i,o,u,a);case 3:e:{if(De(i,i.stateNode.containerInfo),n===null)throw Error(s(387));o=i.pendingProps;var h=i.memoizedState;u=h.element,Bd(n,i),Hs(i,o,null,a);var v=i.memoizedState;if(o=v.cache,Di(i,it,o),o!==h.cache&&Ld(i,[it],a,!0),Vs(),o=v.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:v.cache},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){i=H1(n,i,o,a);break e}else if(o!==u){u=Jt(Error(s(424)),i),Ls(u),i=H1(n,i,o,a);break e}else{switch(n=i.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(Ye=yn(n.firstChild),Ct=i,Re=!0,Cr=null,Rn=!0,a=C1(i,null,o,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ns(),o===u){i=ei(n,i,a);break e}ft(n,i,o,a)}i=i.child}return i;case 26:return Zl(n,i),n===null?(a=Qy(i.type,null,i.pendingProps,null))?i.memoizedState=a:Re||(a=i.type,n=i.pendingProps,o=dc(le.current).createElement(a),o[yt]=i,o[Rt]=n,mt(o,a,n),ot(o),i.stateNode=o):i.memoizedState=Qy(i.type,n.memoizedProps,i.pendingProps,n.memoizedState),null;case 27:return gr(i),n===null&&Re&&(o=i.stateNode=Ky(i.type,i.pendingProps,le.current),Ct=i,Rn=!0,u=Ye,qi(i.type)?(Jf=u,Ye=yn(o.firstChild)):Ye=u),ft(n,i,i.pendingProps.children,a),Zl(n,i),n===null&&(i.flags|=4194304),i.child;case 5:return n===null&&Re&&((u=o=Ye)&&(o=N3(o,i.type,i.pendingProps,Rn),o!==null?(i.stateNode=o,Ct=i,Ye=yn(o.firstChild),Rn=!1,u=!0):u=!1),u||Ar(i)),gr(i),u=i.type,h=i.pendingProps,v=n!==null?n.memoizedProps:null,o=h.children,Xf(u,h)?o=null:v!==null&&Xf(u,v)&&(i.flags|=32),i.memoizedState!==null&&(u=Yd(n,i,WS,null,null,a),fo._currentValue=u),Zl(n,i),ft(n,i,o,a),i.child;case 6:return n===null&&Re&&((n=a=Ye)&&(a=L3(a,i.pendingProps,Rn),a!==null?(i.stateNode=a,Ct=i,Ye=null,n=!0):n=!1),n||Ar(i)),null;case 13:return F1(n,i,a);case 4:return De(i,i.stateNode.containerInfo),o=i.pendingProps,n===null?i.child=Ta(i,null,o,a):ft(n,i,o,a),i.child;case 11:return z1(n,i,i.type,i.pendingProps,a);case 7:return ft(n,i,i.pendingProps,a),i.child;case 8:return ft(n,i,i.pendingProps.children,a),i.child;case 12:return ft(n,i,i.pendingProps.children,a),i.child;case 10:return o=i.pendingProps,Di(i,i.type,o.value),ft(n,i,o.children,a),i.child;case 9:return u=i.type._context,o=i.pendingProps.children,jr(i),u=vt(u),o=o(u),i.flags|=1,ft(n,i,o,a),i.child;case 14:return P1(n,i,i.type,i.pendingProps,a);case 15:return I1(n,i,i.type,i.pendingProps,a);case 19:return G1(n,i,a);case 31:return o=i.pendingProps,a=i.mode,o={mode:o.mode,children:o.children},n===null?(a=Ql(o,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=Yn(n.child,o),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return $1(n,i,a);case 24:return jr(i),o=vt(it),n===null?(u=Id(),u===null&&(u=$e,h=zd(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),i.memoizedState={parent:o,cache:u},Ud(i),Di(i,it,u)):((n.lanes&a)!==0&&(Bd(n,i),Hs(i,null,null,a),Vs()),u=n.memoizedState,h=i.memoizedState,u.parent!==o?(u={parent:o,cache:o},i.memoizedState=u,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=u),Di(i,it,o)):(o=h.cache,Di(i,it,o),o!==u.cache&&Ld(i,[it],a,!0))),ft(n,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function ti(n){n.flags|=4}function K1(n,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!nv(i)){if(i=rn.current,i!==null&&((Ae&4194048)===Ae?Dn!==null:(Ae&62914560)!==Ae&&(Ae&536870912)===0||i!==Dn))throw Us=$d,M0;n.flags|=8192}}function Wl(n,i){i!==null&&(n.flags|=4),n.flags&16384&&(i=n.tag!==22?Ag():536870912,n.lanes|=i,ja|=i)}function Zs(n,i){if(!Re)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:o.sibling=null}}function Fe(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,o=0;if(i)for(var u=n.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=n,u=u.sibling;else for(u=n.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=n,u=u.sibling;return n.subtreeFlags|=o,n.childLanes=a,i}function o3(n,i,a){var o=i.pendingProps;switch(Md(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fe(i),null;case 1:return Fe(i),null;case 3:return a=i.stateNode,o=null,n!==null&&(o=n.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),Qn(it),gt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(n===null||n.child===null)&&(Os(i)?ti(i):n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,A0())),Fe(i),null;case 26:return a=i.memoizedState,n===null?(ti(i),a!==null?(Fe(i),K1(i,a)):(Fe(i),i.flags&=-16777217)):a?a!==n.memoizedState?(ti(i),Fe(i),K1(i,a)):(Fe(i),i.flags&=-16777217):(n.memoizedProps!==o&&ti(i),Fe(i),i.flags&=-16777217),null;case 27:Fn(i),a=le.current;var u=i.type;if(n!==null&&i.stateNode!=null)n.memoizedProps!==o&&ti(i);else{if(!o){if(i.stateNode===null)throw Error(s(166));return Fe(i),null}n=ee.current,Os(i)?T0(i):(n=Ky(u,o,a),i.stateNode=n,ti(i))}return Fe(i),null;case 5:if(Fn(i),a=i.type,n!==null&&i.stateNode!=null)n.memoizedProps!==o&&ti(i);else{if(!o){if(i.stateNode===null)throw Error(s(166));return Fe(i),null}if(n=ee.current,Os(i))T0(i);else{switch(u=dc(le.current),n){case 1:n=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:n=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":n=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":n=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":n=u.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?n.multiple=!0:o.size&&(n.size=o.size);break;default:n=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}n[yt]=i,n[Rt]=o;e:for(u=i.child;u!==null;){if(u.tag===5||u.tag===6)n.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===i)break e;for(;u.sibling===null;){if(u.return===null||u.return===i)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}i.stateNode=n;e:switch(mt(n,a,o),a){case"button":case"input":case"select":case"textarea":n=!!o.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&ti(i)}}return Fe(i),i.flags&=-16777217,null;case 6:if(n&&i.stateNode!=null)n.memoizedProps!==o&&ti(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(s(166));if(n=le.current,Os(i)){if(n=i.stateNode,a=i.memoizedProps,o=null,u=Ct,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}n[yt]=i,n=!!(n.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||By(n.nodeValue,a)),n||Ar(i)}else n=dc(n).createTextNode(o),n[yt]=i,i.stateNode=n}return Fe(i),null;case 13:if(o=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(u=Os(i),o!==null&&o.dehydrated!==null){if(n===null){if(!u)throw Error(s(318));if(u=i.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[yt]=i}else Ns(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Fe(i),u=!1}else u=A0(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=u),u=!0;if(!u)return i.flags&256?(Jn(i),i):(Jn(i),null)}if(Jn(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=o!==null,n=n!==null&&n.memoizedState!==null,a){o=i.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var h=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)}return a!==n&&a&&(i.child.flags|=8192),Wl(i,i.updateQueue),Fe(i),null;case 4:return gt(),n===null&&Ff(i.stateNode.containerInfo),Fe(i),null;case 10:return Qn(i.type),Fe(i),null;case 19:if(k(rt),u=i.memoizedState,u===null)return Fe(i),null;if(o=(i.flags&128)!==0,h=u.rendering,h===null)if(o)Zs(u,!1);else{if(Ke!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(h=Yl(n),h!==null){for(i.flags|=128,Zs(u,!1),n=h.updateQueue,i.updateQueue=n,Wl(i,n),i.subtreeFlags=0,n=a,a=i.child;a!==null;)S0(a,n),a=a.sibling;return W(rt,rt.current&1|2),i.child}n=n.sibling}u.tail!==null&&jn()>tc&&(i.flags|=128,o=!0,Zs(u,!1),i.lanes=4194304)}else{if(!o)if(n=Yl(h),n!==null){if(i.flags|=128,o=!0,n=n.updateQueue,i.updateQueue=n,Wl(i,n),Zs(u,!0),u.tail===null&&u.tailMode==="hidden"&&!h.alternate&&!Re)return Fe(i),null}else 2*jn()-u.renderingStartTime>tc&&a!==536870912&&(i.flags|=128,o=!0,Zs(u,!1),i.lanes=4194304);u.isBackwards?(h.sibling=i.child,i.child=h):(n=u.last,n!==null?n.sibling=h:i.child=h,u.last=h)}return u.tail!==null?(i=u.tail,u.rendering=i,u.tail=i.sibling,u.renderingStartTime=jn(),i.sibling=null,n=rt.current,W(rt,o?n&1|2:n&1),i):(Fe(i),null);case 22:case 23:return Jn(i),qd(),o=i.memoizedState!==null,n!==null?n.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(a&536870912)!==0&&(i.flags&128)===0&&(Fe(i),i.subtreeFlags&6&&(i.flags|=8192)):Fe(i),a=i.updateQueue,a!==null&&Wl(i,a.retryQueue),a=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==a&&(i.flags|=2048),n!==null&&k(Rr),null;case 24:return a=null,n!==null&&(a=n.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),Qn(it),Fe(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function l3(n,i){switch(Md(i),i.tag){case 1:return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Qn(it),gt(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 26:case 27:case 5:return Fn(i),null;case 13:if(Jn(i),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(s(340));Ns()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return k(rt),null;case 4:return gt(),null;case 10:return Qn(i.type),null;case 22:case 23:return Jn(i),qd(),n!==null&&k(Rr),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 24:return Qn(it),null;case 25:return null;default:return null}}function X1(n,i){switch(Md(i),i.tag){case 3:Qn(it),gt();break;case 26:case 27:case 5:Fn(i);break;case 4:gt();break;case 13:Jn(i);break;case 19:k(rt);break;case 10:Qn(i.type);break;case 22:case 23:Jn(i),qd(),n!==null&&k(Rr);break;case 24:Qn(it)}}function Qs(n,i){try{var a=i.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&n)===n){o=void 0;var h=a.create,v=a.inst;o=h(),v.destroy=o}a=a.next}while(a!==u)}}catch(E){Pe(i,i.return,E)}}function Pi(n,i,a){try{var o=i.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&n)===n){var v=o.inst,E=v.destroy;if(E!==void 0){v.destroy=void 0,u=i;var j=a,$=E;try{$()}catch(K){Pe(u,j,K)}}}o=o.next}while(o!==h)}}catch(K){Pe(i,i.return,K)}}function Z1(n){var i=n.updateQueue;if(i!==null){var a=n.stateNode;try{P0(i,a)}catch(o){Pe(n,n.return,o)}}}function Q1(n,i,a){a.props=Mr(n.type,n.memoizedProps),a.state=n.memoizedState;try{a.componentWillUnmount()}catch(o){Pe(n,i,o)}}function Ws(n,i){try{var a=n.ref;if(a!==null){switch(n.tag){case 26:case 27:case 5:var o=n.stateNode;break;case 30:o=n.stateNode;break;default:o=n.stateNode}typeof a=="function"?n.refCleanup=a(o):a.current=o}}catch(u){Pe(n,i,u)}}function Mn(n,i){var a=n.ref,o=n.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Pe(n,i,u)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Pe(n,i,u)}else a.current=null}function W1(n){var i=n.type,a=n.memoizedProps,o=n.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Pe(n,n.return,u)}}function bf(n,i,a){try{var o=n.stateNode;R3(o,n.type,a,i),o[Rt]=i}catch(u){Pe(n,n.return,u)}}function J1(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&qi(n.type)||n.tag===4}function wf(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||J1(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&qi(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Sf(n,i,a){var o=n.tag;if(o===5||o===6)n=n.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(n,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(n),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=uc));else if(o!==4&&(o===27&&qi(n.type)&&(a=n.stateNode,i=null),n=n.child,n!==null))for(Sf(n,i,a),n=n.sibling;n!==null;)Sf(n,i,a),n=n.sibling}function Jl(n,i,a){var o=n.tag;if(o===5||o===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(o!==4&&(o===27&&qi(n.type)&&(a=n.stateNode),n=n.child,n!==null))for(Jl(n,i,a),n=n.sibling;n!==null;)Jl(n,i,a),n=n.sibling}function ey(n){var i=n.stateNode,a=n.memoizedProps;try{for(var o=n.type,u=i.attributes;u.length;)i.removeAttributeNode(u[0]);mt(i,o,a),i[yt]=n,i[Rt]=a}catch(h){Pe(n,n.return,h)}}var ni=!1,Qe=!1,Ef=!1,ty=typeof WeakSet=="function"?WeakSet:Set,ct=null;function c3(n,i){if(n=n.containerInfo,Yf=yc,n=f0(n),bd(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var v=0,E=-1,j=-1,$=0,K=0,J=n,B=null;t:for(;;){for(var V;J!==a||u!==0&&J.nodeType!==3||(E=v+u),J!==h||o!==0&&J.nodeType!==3||(j=v+o),J.nodeType===3&&(v+=J.nodeValue.length),(V=J.firstChild)!==null;)B=J,J=V;for(;;){if(J===n)break t;if(B===a&&++$===u&&(E=v),B===h&&++K===o&&(j=v),(V=J.nextSibling)!==null)break;J=B,B=J.parentNode}J=V}a=E===-1||j===-1?null:{start:E,end:j}}else a=null}a=a||{start:0,end:0}}else a=null;for(Kf={focusedElem:n,selectionRange:a},yc=!1,ct=i;ct!==null;)if(i=ct,n=i.child,(i.subtreeFlags&1024)!==0&&n!==null)n.return=i,ct=n;else for(;ct!==null;){switch(i=ct,h=i.alternate,n=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&h!==null){n=void 0,a=i,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var de=Mr(a.type,u,a.elementType===a.type);n=o.getSnapshotBeforeUpdate(de,h),o.__reactInternalSnapshotBeforeUpdate=n}catch(se){Pe(a,a.return,se)}}break;case 3:if((n&1024)!==0){if(n=i.stateNode.containerInfo,a=n.nodeType,a===9)Qf(n);else if(a===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Qf(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(s(163))}if(n=i.sibling,n!==null){n.return=i.return,ct=n;break}ct=i.return}}function ny(n,i,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ii(n,a),o&4&&Qs(5,a);break;case 1:if(Ii(n,a),o&4)if(n=a.stateNode,i===null)try{n.componentDidMount()}catch(v){Pe(a,a.return,v)}else{var u=Mr(a.type,i.memoizedProps);i=i.memoizedState;try{n.componentDidUpdate(u,i,n.__reactInternalSnapshotBeforeUpdate)}catch(v){Pe(a,a.return,v)}}o&64&&Z1(a),o&512&&Ws(a,a.return);break;case 3:if(Ii(n,a),o&64&&(n=a.updateQueue,n!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{P0(n,i)}catch(v){Pe(a,a.return,v)}}break;case 27:i===null&&o&4&&ey(a);case 26:case 5:Ii(n,a),i===null&&o&4&&W1(a),o&512&&Ws(a,a.return);break;case 12:Ii(n,a);break;case 13:Ii(n,a),o&4&&ay(n,a),o&64&&(n=a.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(a=v3.bind(null,a),z3(n,a))));break;case 22:if(o=a.memoizedState!==null||ni,!o){i=i!==null&&i.memoizedState!==null||Qe,u=ni;var h=Qe;ni=o,(Qe=i)&&!h?$i(n,a,(a.subtreeFlags&8772)!==0):Ii(n,a),ni=u,Qe=h}break;case 30:break;default:Ii(n,a)}}function iy(n){var i=n.alternate;i!==null&&(n.alternate=null,iy(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&td(i)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var Be=null,kt=!1;function ii(n,i,a){for(a=a.child;a!==null;)ry(n,i,a),a=a.sibling}function ry(n,i,a){if(It&&typeof It.onCommitFiberUnmount=="function")try{It.onCommitFiberUnmount(xs,a)}catch{}switch(a.tag){case 26:Qe||Mn(a,i),ii(n,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Qe||Mn(a,i);var o=Be,u=kt;qi(a.type)&&(Be=a.stateNode,kt=!1),ii(n,i,a),oo(a.stateNode),Be=o,kt=u;break;case 5:Qe||Mn(a,i);case 6:if(o=Be,u=kt,Be=null,ii(n,i,a),Be=o,kt=u,Be!==null)if(kt)try{(Be.nodeType===9?Be.body:Be.nodeName==="HTML"?Be.ownerDocument.body:Be).removeChild(a.stateNode)}catch(h){Pe(a,i,h)}else try{Be.removeChild(a.stateNode)}catch(h){Pe(a,i,h)}break;case 18:Be!==null&&(kt?(n=Be,Gy(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,a.stateNode),go(n)):Gy(Be,a.stateNode));break;case 4:o=Be,u=kt,Be=a.stateNode.containerInfo,kt=!0,ii(n,i,a),Be=o,kt=u;break;case 0:case 11:case 14:case 15:Qe||Pi(2,a,i),Qe||Pi(4,a,i),ii(n,i,a);break;case 1:Qe||(Mn(a,i),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Q1(a,i,o)),ii(n,i,a);break;case 21:ii(n,i,a);break;case 22:Qe=(o=Qe)||a.memoizedState!==null,ii(n,i,a),Qe=o;break;default:ii(n,i,a)}}function ay(n,i){if(i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{go(n)}catch(a){Pe(i,i.return,a)}}function u3(n){switch(n.tag){case 13:case 19:var i=n.stateNode;return i===null&&(i=n.stateNode=new ty),i;case 22:return n=n.stateNode,i=n._retryCache,i===null&&(i=n._retryCache=new ty),i;default:throw Error(s(435,n.tag))}}function Tf(n,i){var a=u3(n);i.forEach(function(o){var u=x3.bind(null,n,o);a.has(o)||(a.add(o),o.then(u,u))})}function Vt(n,i){var a=i.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=n,v=i,E=v;e:for(;E!==null;){switch(E.tag){case 27:if(qi(E.type)){Be=E.stateNode,kt=!1;break e}break;case 5:Be=E.stateNode,kt=!1;break e;case 3:case 4:Be=E.stateNode.containerInfo,kt=!0;break e}E=E.return}if(Be===null)throw Error(s(160));ry(h,v,u),Be=null,kt=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)sy(i,n),i=i.sibling}var gn=null;function sy(n,i){var a=n.alternate,o=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Vt(i,n),Ht(n),o&4&&(Pi(3,n,n.return),Qs(3,n),Pi(5,n,n.return));break;case 1:Vt(i,n),Ht(n),o&512&&(Qe||a===null||Mn(a,a.return)),o&64&&ni&&(n=n.updateQueue,n!==null&&(o=n.callbacks,o!==null&&(a=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=gn;if(Vt(i,n),Ht(n),o&512&&(Qe||a===null||Mn(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=n.memoizedState,a===null)if(o===null)if(n.stateNode===null){e:{o=n.type,a=n.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[Ss]||h[yt]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),mt(h,o,a),h[yt]=n,ot(h),o=h;break e;case"link":var v=ev("link","href",u).get(o+(a.href||""));if(v){for(var E=0;E<v.length;E++)if(h=v[E],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(E,1);break t}}h=u.createElement(o),mt(h,o,a),u.head.appendChild(h);break;case"meta":if(v=ev("meta","content",u).get(o+(a.content||""))){for(E=0;E<v.length;E++)if(h=v[E],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(E,1);break t}}h=u.createElement(o),mt(h,o,a),u.head.appendChild(h);break;default:throw Error(s(468,o))}h[yt]=n,ot(h),o=h}n.stateNode=o}else tv(u,n.type,n.stateNode);else n.stateNode=Jy(u,o,n.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?tv(u,n.type,n.stateNode):Jy(u,o,n.memoizedProps)):o===null&&n.stateNode!==null&&bf(n,n.memoizedProps,a.memoizedProps)}break;case 27:Vt(i,n),Ht(n),o&512&&(Qe||a===null||Mn(a,a.return)),a!==null&&o&4&&bf(n,n.memoizedProps,a.memoizedProps);break;case 5:if(Vt(i,n),Ht(n),o&512&&(Qe||a===null||Mn(a,a.return)),n.flags&32){u=n.stateNode;try{sa(u,"")}catch(V){Pe(n,n.return,V)}}o&4&&n.stateNode!=null&&(u=n.memoizedProps,bf(n,u,a!==null?a.memoizedProps:u)),o&1024&&(Ef=!0);break;case 6:if(Vt(i,n),Ht(n),o&4){if(n.stateNode===null)throw Error(s(162));o=n.memoizedProps,a=n.stateNode;try{a.nodeValue=o}catch(V){Pe(n,n.return,V)}}break;case 3:if(mc=null,u=gn,gn=fc(i.containerInfo),Vt(i,n),gn=u,Ht(n),o&4&&a!==null&&a.memoizedState.isDehydrated)try{go(i.containerInfo)}catch(V){Pe(n,n.return,V)}Ef&&(Ef=!1,oy(n));break;case 4:o=gn,gn=fc(n.stateNode.containerInfo),Vt(i,n),Ht(n),gn=o;break;case 12:Vt(i,n),Ht(n);break;case 13:Vt(i,n),Ht(n),n.child.flags&8192&&n.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Df=jn()),o&4&&(o=n.updateQueue,o!==null&&(n.updateQueue=null,Tf(n,o)));break;case 22:u=n.memoizedState!==null;var j=a!==null&&a.memoizedState!==null,$=ni,K=Qe;if(ni=$||u,Qe=K||j,Vt(i,n),Qe=K,ni=$,Ht(n),o&8192)e:for(i=n.stateNode,i._visibility=u?i._visibility&-2:i._visibility|1,u&&(a===null||j||ni||Qe||kr(n)),a=null,i=n;;){if(i.tag===5||i.tag===26){if(a===null){j=a=i;try{if(h=j.stateNode,u)v=h.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{E=j.stateNode;var J=j.memoizedProps.style,B=J!=null&&J.hasOwnProperty("display")?J.display:null;E.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch(V){Pe(j,j.return,V)}}}else if(i.tag===6){if(a===null){j=i;try{j.stateNode.nodeValue=u?"":j.memoizedProps}catch(V){Pe(j,j.return,V)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===n)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break e;for(;i.sibling===null;){if(i.return===null||i.return===n)break e;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=n.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Tf(n,a))));break;case 19:Vt(i,n),Ht(n),o&4&&(o=n.updateQueue,o!==null&&(n.updateQueue=null,Tf(n,o)));break;case 30:break;case 21:break;default:Vt(i,n),Ht(n)}}function Ht(n){var i=n.flags;if(i&2){try{for(var a,o=n.return;o!==null;){if(J1(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,h=wf(n);Jl(n,h,u);break;case 5:var v=a.stateNode;a.flags&32&&(sa(v,""),a.flags&=-33);var E=wf(n);Jl(n,E,v);break;case 3:case 4:var j=a.stateNode.containerInfo,$=wf(n);Sf(n,$,j);break;default:throw Error(s(161))}}catch(K){Pe(n,n.return,K)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function oy(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var i=n;oy(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),n=n.sibling}}function Ii(n,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)ny(n,i.alternate,i),i=i.sibling}function kr(n){for(n=n.child;n!==null;){var i=n;switch(i.tag){case 0:case 11:case 14:case 15:Pi(4,i,i.return),kr(i);break;case 1:Mn(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&Q1(i,i.return,a),kr(i);break;case 27:oo(i.stateNode);case 26:case 5:Mn(i,i.return),kr(i);break;case 22:i.memoizedState===null&&kr(i);break;case 30:kr(i);break;default:kr(i)}n=n.sibling}}function $i(n,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,u=n,h=i,v=h.flags;switch(h.tag){case 0:case 11:case 15:$i(u,h,a),Qs(4,h);break;case 1:if($i(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch($){Pe(o,o.return,$)}if(o=h,u=o.updateQueue,u!==null){var E=o.stateNode;try{var j=u.shared.hiddenCallbacks;if(j!==null)for(u.shared.hiddenCallbacks=null,u=0;u<j.length;u++)z0(j[u],E)}catch($){Pe(o,o.return,$)}}a&&v&64&&Z1(h),Ws(h,h.return);break;case 27:ey(h);case 26:case 5:$i(u,h,a),a&&o===null&&v&4&&W1(h),Ws(h,h.return);break;case 12:$i(u,h,a);break;case 13:$i(u,h,a),a&&v&4&&ay(u,h);break;case 22:h.memoizedState===null&&$i(u,h,a),Ws(h,h.return);break;case 30:break;default:$i(u,h,a)}i=i.sibling}}function Cf(n,i){var a=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),n=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(n=i.memoizedState.cachePool.pool),n!==a&&(n!=null&&n.refCount++,a!=null&&Ps(a))}function Af(n,i){n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&Ps(n))}function kn(n,i,a,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)ly(n,i,a,o),i=i.sibling}function ly(n,i,a,o){var u=i.flags;switch(i.tag){case 0:case 11:case 15:kn(n,i,a,o),u&2048&&Qs(9,i);break;case 1:kn(n,i,a,o);break;case 3:kn(n,i,a,o),u&2048&&(n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&Ps(n)));break;case 12:if(u&2048){kn(n,i,a,o),n=i.stateNode;try{var h=i.memoizedProps,v=h.id,E=h.onPostCommit;typeof E=="function"&&E(v,i.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(j){Pe(i,i.return,j)}}else kn(n,i,a,o);break;case 13:kn(n,i,a,o);break;case 23:break;case 22:h=i.stateNode,v=i.alternate,i.memoizedState!==null?h._visibility&2?kn(n,i,a,o):Js(n,i):h._visibility&2?kn(n,i,a,o):(h._visibility|=2,Ca(n,i,a,o,(i.subtreeFlags&10256)!==0)),u&2048&&Cf(v,i);break;case 24:kn(n,i,a,o),u&2048&&Af(i.alternate,i);break;default:kn(n,i,a,o)}}function Ca(n,i,a,o,u){for(u=u&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var h=n,v=i,E=a,j=o,$=v.flags;switch(v.tag){case 0:case 11:case 15:Ca(h,v,E,j,u),Qs(8,v);break;case 23:break;case 22:var K=v.stateNode;v.memoizedState!==null?K._visibility&2?Ca(h,v,E,j,u):Js(h,v):(K._visibility|=2,Ca(h,v,E,j,u)),u&&$&2048&&Cf(v.alternate,v);break;case 24:Ca(h,v,E,j,u),u&&$&2048&&Af(v.alternate,v);break;default:Ca(h,v,E,j,u)}i=i.sibling}}function Js(n,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=n,o=i,u=o.flags;switch(o.tag){case 22:Js(a,o),u&2048&&Cf(o.alternate,o);break;case 24:Js(a,o),u&2048&&Af(o.alternate,o);break;default:Js(a,o)}i=i.sibling}}var eo=8192;function Aa(n){if(n.subtreeFlags&eo)for(n=n.child;n!==null;)cy(n),n=n.sibling}function cy(n){switch(n.tag){case 26:Aa(n),n.flags&eo&&n.memoizedState!==null&&X3(gn,n.memoizedState,n.memoizedProps);break;case 5:Aa(n);break;case 3:case 4:var i=gn;gn=fc(n.stateNode.containerInfo),Aa(n),gn=i;break;case 22:n.memoizedState===null&&(i=n.alternate,i!==null&&i.memoizedState!==null?(i=eo,eo=16777216,Aa(n),eo=i):Aa(n));break;default:Aa(n)}}function uy(n){var i=n.alternate;if(i!==null&&(n=i.child,n!==null)){i.child=null;do i=n.sibling,n.sibling=null,n=i;while(n!==null)}}function to(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var o=i[a];ct=o,fy(o,n)}uy(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)dy(n),n=n.sibling}function dy(n){switch(n.tag){case 0:case 11:case 15:to(n),n.flags&2048&&Pi(9,n,n.return);break;case 3:to(n);break;case 12:to(n);break;case 22:var i=n.stateNode;n.memoizedState!==null&&i._visibility&2&&(n.return===null||n.return.tag!==13)?(i._visibility&=-3,ec(n)):to(n);break;default:to(n)}}function ec(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var o=i[a];ct=o,fy(o,n)}uy(n)}for(n=n.child;n!==null;){switch(i=n,i.tag){case 0:case 11:case 15:Pi(8,i,i.return),ec(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,ec(i));break;default:ec(i)}n=n.sibling}}function fy(n,i){for(;ct!==null;){var a=ct;switch(a.tag){case 0:case 11:case 15:Pi(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Ps(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,ct=o;else e:for(a=n;ct!==null;){o=ct;var u=o.sibling,h=o.return;if(iy(o),o===a){ct=null;break e}if(u!==null){u.return=h,ct=u;break e}ct=h}}}var d3={getCacheForType:function(n){var i=vt(it),a=i.data.get(n);return a===void 0&&(a=n(),i.data.set(n,a)),a}},f3=typeof WeakMap=="function"?WeakMap:Map,ke=0,$e=null,Ee=null,Ae=0,Oe=0,Ft=null,Ui=!1,_a=!1,_f=!1,ri=0,Ke=0,Bi=0,Or=0,jf=0,an=0,ja=0,no=null,Ot=null,Rf=!1,Df=0,tc=1/0,nc=null,Vi=null,ht=0,Hi=null,Ra=null,Da=0,Mf=0,kf=null,hy=null,io=0,Of=null;function qt(){if((ke&2)!==0&&Ae!==0)return Ae&-Ae;if(F.T!==null){var n=ya;return n!==0?n:Uf()}return Rg()}function my(){an===0&&(an=(Ae&536870912)===0||Re?Cg():536870912);var n=rn.current;return n!==null&&(n.flags|=32),an}function Gt(n,i,a){(n===$e&&(Oe===2||Oe===9)||n.cancelPendingCommit!==null)&&(Ma(n,0),Fi(n,Ae,an,!1)),ws(n,a),((ke&2)===0||n!==$e)&&(n===$e&&((ke&2)===0&&(Or|=a),Ke===4&&Fi(n,Ae,an,!1)),On(n))}function py(n,i,a){if((ke&6)!==0)throw Error(s(327));var o=!a&&(i&124)===0&&(i&n.expiredLanes)===0||bs(n,i),u=o?p3(n,i):zf(n,i,!0),h=o;do{if(u===0){_a&&!o&&Fi(n,i,0,!1);break}else{if(a=n.current.alternate,h&&!h3(a)){u=zf(n,i,!1),h=!1;continue}if(u===2){if(h=i,n.errorRecoveryDisabledLanes&h)var v=0;else v=n.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){i=v;e:{var E=n;u=no;var j=E.current.memoizedState.isDehydrated;if(j&&(Ma(E,v).flags|=256),v=zf(E,v,!1),v!==2){if(_f&&!j){E.errorRecoveryDisabledLanes|=h,Or|=h,u=4;break e}h=Ot,Ot=u,h!==null&&(Ot===null?Ot=h:Ot.push.apply(Ot,h))}u=v}if(h=!1,u!==2)continue}}if(u===1){Ma(n,0),Fi(n,i,0,!0);break}e:{switch(o=n,h=u,h){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:Fi(o,i,an,!Ui);break e;case 2:Ot=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(u=Df+300-jn(),10<u)){if(Fi(o,i,an,!Ui),hl(o,0,!0)!==0)break e;o.timeoutHandle=Fy(gy.bind(null,o,a,Ot,nc,Rf,i,an,Or,ja,Ui,h,2,-0,0),u);break e}gy(o,a,Ot,nc,Rf,i,an,Or,ja,Ui,h,0,-0,0)}}break}while(!0);On(n)}function gy(n,i,a,o,u,h,v,E,j,$,K,J,B,V){if(n.timeoutHandle=-1,J=i.subtreeFlags,(J&8192||(J&16785408)===16785408)&&(uo={stylesheets:null,count:0,unsuspend:K3},cy(i),J=Z3(),J!==null)){n.cancelPendingCommit=J(Ey.bind(null,n,i,h,a,o,u,v,E,j,K,1,B,V)),Fi(n,h,v,!$);return}Ey(n,i,h,a,o,u,v,E,j)}function h3(n){for(var i=n;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!Ut(h(),u))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Fi(n,i,a,o){i&=~jf,i&=~Or,n.suspendedLanes|=i,n.pingedLanes&=~i,o&&(n.warmLanes|=i),o=n.expirationTimes;for(var u=i;0<u;){var h=31-$t(u),v=1<<h;o[h]=-1,u&=~v}a!==0&&_g(n,a,i)}function ic(){return(ke&6)===0?(ro(0),!1):!0}function Nf(){if(Ee!==null){if(Oe===0)var n=Ee.return;else n=Ee,Zn=_r=null,Zd(n),Ea=null,Ks=0,n=Ee;for(;n!==null;)X1(n.alternate,n),n=n.return;Ee=null}}function Ma(n,i){var a=n.timeoutHandle;a!==-1&&(n.timeoutHandle=-1,M3(a)),a=n.cancelPendingCommit,a!==null&&(n.cancelPendingCommit=null,a()),Nf(),$e=n,Ee=a=Yn(n.current,null),Ae=i,Oe=0,Ft=null,Ui=!1,_a=bs(n,i),_f=!1,ja=an=jf=Or=Bi=Ke=0,Ot=no=null,Rf=!1,(i&8)!==0&&(i|=i&32);var o=n.entangledLanes;if(o!==0)for(n=n.entanglements,o&=i;0<o;){var u=31-$t(o),h=1<<u;i|=n[u],o&=~h}return ri=i,Cl(),a}function yy(n,i){xe=null,F.H=Fl,i===$s||i===Nl?(i=N0(),Oe=3):i===M0?(i=N0(),Oe=4):Oe=i===L1?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Ft=i,Ee===null&&(Ke=1,Xl(n,Jt(i,n.current)))}function vy(){var n=F.H;return F.H=Fl,n===null?Fl:n}function xy(){var n=F.A;return F.A=d3,n}function Lf(){Ke=4,Ui||(Ae&4194048)!==Ae&&rn.current!==null||(_a=!0),(Bi&134217727)===0&&(Or&134217727)===0||$e===null||Fi($e,Ae,an,!1)}function zf(n,i,a){var o=ke;ke|=2;var u=vy(),h=xy();($e!==n||Ae!==i)&&(nc=null,Ma(n,i)),i=!1;var v=Ke;e:do try{if(Oe!==0&&Ee!==null){var E=Ee,j=Ft;switch(Oe){case 8:Nf(),v=6;break e;case 3:case 2:case 9:case 6:rn.current===null&&(i=!0);var $=Oe;if(Oe=0,Ft=null,ka(n,E,j,$),a&&_a){v=0;break e}break;default:$=Oe,Oe=0,Ft=null,ka(n,E,j,$)}}m3(),v=Ke;break}catch(K){yy(n,K)}while(!0);return i&&n.shellSuspendCounter++,Zn=_r=null,ke=o,F.H=u,F.A=h,Ee===null&&($e=null,Ae=0,Cl()),v}function m3(){for(;Ee!==null;)by(Ee)}function p3(n,i){var a=ke;ke|=2;var o=vy(),u=xy();$e!==n||Ae!==i?(nc=null,tc=jn()+500,Ma(n,i)):_a=bs(n,i);e:do try{if(Oe!==0&&Ee!==null){i=Ee;var h=Ft;t:switch(Oe){case 1:Oe=0,Ft=null,ka(n,i,h,1);break;case 2:case 9:if(k0(h)){Oe=0,Ft=null,wy(i);break}i=function(){Oe!==2&&Oe!==9||$e!==n||(Oe=7),On(n)},h.then(i,i);break e;case 3:Oe=7;break e;case 4:Oe=5;break e;case 7:k0(h)?(Oe=0,Ft=null,wy(i)):(Oe=0,Ft=null,ka(n,i,h,7));break;case 5:var v=null;switch(Ee.tag){case 26:v=Ee.memoizedState;case 5:case 27:var E=Ee;if(!v||nv(v)){Oe=0,Ft=null;var j=E.sibling;if(j!==null)Ee=j;else{var $=E.return;$!==null?(Ee=$,rc($)):Ee=null}break t}}Oe=0,Ft=null,ka(n,i,h,5);break;case 6:Oe=0,Ft=null,ka(n,i,h,6);break;case 8:Nf(),Ke=6;break e;default:throw Error(s(462))}}g3();break}catch(K){yy(n,K)}while(!0);return Zn=_r=null,F.H=o,F.A=u,ke=a,Ee!==null?0:($e=null,Ae=0,Cl(),Ke)}function g3(){for(;Ee!==null&&!I6();)by(Ee)}function by(n){var i=Y1(n.alternate,n,ri);n.memoizedProps=n.pendingProps,i===null?rc(n):Ee=i}function wy(n){var i=n,a=i.alternate;switch(i.tag){case 15:case 0:i=B1(a,i,i.pendingProps,i.type,void 0,Ae);break;case 11:i=B1(a,i,i.pendingProps,i.type.render,i.ref,Ae);break;case 5:Zd(i);default:X1(a,i),i=Ee=S0(i,ri),i=Y1(a,i,ri)}n.memoizedProps=n.pendingProps,i===null?rc(n):Ee=i}function ka(n,i,a,o){Zn=_r=null,Zd(i),Ea=null,Ks=0;var u=i.return;try{if(a3(n,u,i,a,Ae)){Ke=1,Xl(n,Jt(a,n.current)),Ee=null;return}}catch(h){if(u!==null)throw Ee=u,h;Ke=1,Xl(n,Jt(a,n.current)),Ee=null;return}i.flags&32768?(Re||o===1?n=!0:_a||(Ae&536870912)!==0?n=!1:(Ui=n=!0,(o===2||o===9||o===3||o===6)&&(o=rn.current,o!==null&&o.tag===13&&(o.flags|=16384))),Sy(i,n)):rc(i)}function rc(n){var i=n;do{if((i.flags&32768)!==0){Sy(i,Ui);return}n=i.return;var a=o3(i.alternate,i,ri);if(a!==null){Ee=a;return}if(i=i.sibling,i!==null){Ee=i;return}Ee=i=n}while(i!==null);Ke===0&&(Ke=5)}function Sy(n,i){do{var a=l3(n.alternate,n);if(a!==null){a.flags&=32767,Ee=a;return}if(a=n.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(n=n.sibling,n!==null)){Ee=n;return}Ee=n=a}while(n!==null);Ke=6,Ee=null}function Ey(n,i,a,o,u,h,v,E,j){n.cancelPendingCommit=null;do ac();while(ht!==0);if((ke&6)!==0)throw Error(s(327));if(i!==null){if(i===n.current)throw Error(s(177));if(h=i.lanes|i.childLanes,h|=Cd,K6(n,a,h,v,E,j),n===$e&&(Ee=$e=null,Ae=0),Ra=i,Hi=n,Da=a,Mf=h,kf=u,hy=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,b3(ul,function(){return jy(),null})):(n.callbackNode=null,n.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=F.T,F.T=null,u=M.p,M.p=2,v=ke,ke|=4;try{c3(n,i,a)}finally{ke=v,M.p=u,F.T=o}}ht=1,Ty(),Cy(),Ay()}}function Ty(){if(ht===1){ht=0;var n=Hi,i=Ra,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var o=M.p;M.p=2;var u=ke;ke|=4;try{sy(i,n);var h=Kf,v=f0(n.containerInfo),E=h.focusedElem,j=h.selectionRange;if(v!==E&&E&&E.ownerDocument&&d0(E.ownerDocument.documentElement,E)){if(j!==null&&bd(E)){var $=j.start,K=j.end;if(K===void 0&&(K=$),"selectionStart"in E)E.selectionStart=$,E.selectionEnd=Math.min(K,E.value.length);else{var J=E.ownerDocument||document,B=J&&J.defaultView||window;if(B.getSelection){var V=B.getSelection(),de=E.textContent.length,se=Math.min(j.start,de),ze=j.end===void 0?se:Math.min(j.end,de);!V.extend&&se>ze&&(v=ze,ze=se,se=v);var L=u0(E,se),D=u0(E,ze);if(L&&D&&(V.rangeCount!==1||V.anchorNode!==L.node||V.anchorOffset!==L.offset||V.focusNode!==D.node||V.focusOffset!==D.offset)){var I=J.createRange();I.setStart(L.node,L.offset),V.removeAllRanges(),se>ze?(V.addRange(I),V.extend(D.node,D.offset)):(I.setEnd(D.node,D.offset),V.addRange(I))}}}}for(J=[],V=E;V=V.parentNode;)V.nodeType===1&&J.push({element:V,left:V.scrollLeft,top:V.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<J.length;E++){var Z=J[E];Z.element.scrollLeft=Z.left,Z.element.scrollTop=Z.top}}yc=!!Yf,Kf=Yf=null}finally{ke=u,M.p=o,F.T=a}}n.current=i,ht=2}}function Cy(){if(ht===2){ht=0;var n=Hi,i=Ra,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var o=M.p;M.p=2;var u=ke;ke|=4;try{ny(n,i.alternate,i)}finally{ke=u,M.p=o,F.T=a}}ht=3}}function Ay(){if(ht===4||ht===3){ht=0,$6();var n=Hi,i=Ra,a=Da,o=hy;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?ht=5:(ht=0,Ra=Hi=null,_y(n,n.pendingLanes));var u=n.pendingLanes;if(u===0&&(Vi=null),Ju(a),i=i.stateNode,It&&typeof It.onCommitFiberRoot=="function")try{It.onCommitFiberRoot(xs,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=F.T,u=M.p,M.p=2,F.T=null;try{for(var h=n.onRecoverableError,v=0;v<o.length;v++){var E=o[v];h(E.value,{componentStack:E.stack})}}finally{F.T=i,M.p=u}}(Da&3)!==0&&ac(),On(n),u=n.pendingLanes,(a&4194090)!==0&&(u&42)!==0?n===Of?io++:(io=0,Of=n):io=0,ro(0)}}function _y(n,i){(n.pooledCacheLanes&=i)===0&&(i=n.pooledCache,i!=null&&(n.pooledCache=null,Ps(i)))}function ac(n){return Ty(),Cy(),Ay(),jy()}function jy(){if(ht!==5)return!1;var n=Hi,i=Mf;Mf=0;var a=Ju(Da),o=F.T,u=M.p;try{M.p=32>a?32:a,F.T=null,a=kf,kf=null;var h=Hi,v=Da;if(ht=0,Ra=Hi=null,Da=0,(ke&6)!==0)throw Error(s(331));var E=ke;if(ke|=4,dy(h.current),ly(h,h.current,v,a),ke=E,ro(0,!1),It&&typeof It.onPostCommitFiberRoot=="function")try{It.onPostCommitFiberRoot(xs,h)}catch{}return!0}finally{M.p=u,F.T=o,_y(n,i)}}function Ry(n,i,a){i=Jt(a,i),i=df(n.stateNode,i,2),n=Oi(n,i,2),n!==null&&(ws(n,2),On(n))}function Pe(n,i,a){if(n.tag===3)Ry(n,n,a);else for(;i!==null;){if(i.tag===3){Ry(i,n,a);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Vi===null||!Vi.has(o))){n=Jt(a,n),a=O1(2),o=Oi(i,a,2),o!==null&&(N1(a,o,i,n),ws(o,2),On(o));break}}i=i.return}}function Pf(n,i,a){var o=n.pingCache;if(o===null){o=n.pingCache=new f3;var u=new Set;o.set(i,u)}else u=o.get(i),u===void 0&&(u=new Set,o.set(i,u));u.has(a)||(_f=!0,u.add(a),n=y3.bind(null,n,i,a),i.then(n,n))}function y3(n,i,a){var o=n.pingCache;o!==null&&o.delete(i),n.pingedLanes|=n.suspendedLanes&a,n.warmLanes&=~a,$e===n&&(Ae&a)===a&&(Ke===4||Ke===3&&(Ae&62914560)===Ae&&300>jn()-Df?(ke&2)===0&&Ma(n,0):jf|=a,ja===Ae&&(ja=0)),On(n)}function Dy(n,i){i===0&&(i=Ag()),n=ha(n,i),n!==null&&(ws(n,i),On(n))}function v3(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Dy(n,a)}function x3(n,i){var a=0;switch(n.tag){case 13:var o=n.stateNode,u=n.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=n.stateNode;break;case 22:o=n.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(i),Dy(n,a)}function b3(n,i){return Xu(n,i)}var sc=null,Oa=null,If=!1,oc=!1,$f=!1,Nr=0;function On(n){n!==Oa&&n.next===null&&(Oa===null?sc=Oa=n:Oa=Oa.next=n),oc=!0,If||(If=!0,S3())}function ro(n,i){if(!$f&&oc){$f=!0;do for(var a=!1,o=sc;o!==null;){if(n!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var v=o.suspendedLanes,E=o.pingedLanes;h=(1<<31-$t(42|n)+1)-1,h&=u&~(v&~E),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,Ny(o,h))}else h=Ae,h=hl(o,o===$e?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||bs(o,h)||(a=!0,Ny(o,h));o=o.next}while(a);$f=!1}}function w3(){My()}function My(){oc=If=!1;var n=0;Nr!==0&&(D3()&&(n=Nr),Nr=0);for(var i=jn(),a=null,o=sc;o!==null;){var u=o.next,h=ky(o,i);h===0?(o.next=null,a===null?sc=u:a.next=u,u===null&&(Oa=a)):(a=o,(n!==0||(h&3)!==0)&&(oc=!0)),o=u}ro(n)}function ky(n,i){for(var a=n.suspendedLanes,o=n.pingedLanes,u=n.expirationTimes,h=n.pendingLanes&-62914561;0<h;){var v=31-$t(h),E=1<<v,j=u[v];j===-1?((E&a)===0||(E&o)!==0)&&(u[v]=Y6(E,i)):j<=i&&(n.expiredLanes|=E),h&=~E}if(i=$e,a=Ae,a=hl(n,n===i?a:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),o=n.callbackNode,a===0||n===i&&(Oe===2||Oe===9)||n.cancelPendingCommit!==null)return o!==null&&o!==null&&Zu(o),n.callbackNode=null,n.callbackPriority=0;if((a&3)===0||bs(n,a)){if(i=a&-a,i===n.callbackPriority)return i;switch(o!==null&&Zu(o),Ju(a)){case 2:case 8:a=Eg;break;case 32:a=ul;break;case 268435456:a=Tg;break;default:a=ul}return o=Oy.bind(null,n),a=Xu(a,o),n.callbackPriority=i,n.callbackNode=a,i}return o!==null&&o!==null&&Zu(o),n.callbackPriority=2,n.callbackNode=null,2}function Oy(n,i){if(ht!==0&&ht!==5)return n.callbackNode=null,n.callbackPriority=0,null;var a=n.callbackNode;if(ac()&&n.callbackNode!==a)return null;var o=Ae;return o=hl(n,n===$e?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),o===0?null:(py(n,o,i),ky(n,jn()),n.callbackNode!=null&&n.callbackNode===a?Oy.bind(null,n):null)}function Ny(n,i){if(ac())return null;py(n,i,!0)}function S3(){k3(function(){(ke&6)!==0?Xu(Sg,w3):My()})}function Uf(){return Nr===0&&(Nr=Cg()),Nr}function Ly(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:vl(""+n)}function zy(n,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,n.id&&a.setAttribute("form",n.id),i.parentNode.insertBefore(a,i),n=new FormData(n),a.parentNode.removeChild(a),n}function E3(n,i,a,o,u){if(i==="submit"&&a&&a.stateNode===u){var h=Ly((u[Rt]||null).action),v=o.submitter;v&&(i=(i=v[Rt]||null)?Ly(i.formAction):v.getAttribute("formAction"),i!==null&&(h=i,v=null));var E=new Sl("action","action",null,o,u);n.push({event:E,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Nr!==0){var j=v?zy(u,v):new FormData(u);sf(a,{pending:!0,data:j,method:u.method,action:h},null,j)}}else typeof h=="function"&&(E.preventDefault(),j=v?zy(u,v):new FormData(u),sf(a,{pending:!0,data:j,method:u.method,action:h},h,j))},currentTarget:u}]})}}for(var Bf=0;Bf<Td.length;Bf++){var Vf=Td[Bf],T3=Vf.toLowerCase(),C3=Vf[0].toUpperCase()+Vf.slice(1);pn(T3,"on"+C3)}pn(p0,"onAnimationEnd"),pn(g0,"onAnimationIteration"),pn(y0,"onAnimationStart"),pn("dblclick","onDoubleClick"),pn("focusin","onFocus"),pn("focusout","onBlur"),pn(VS,"onTransitionRun"),pn(HS,"onTransitionStart"),pn(FS,"onTransitionCancel"),pn(v0,"onTransitionEnd"),ia("onMouseEnter",["mouseout","mouseover"]),ia("onMouseLeave",["mouseout","mouseover"]),ia("onPointerEnter",["pointerout","pointerover"]),ia("onPointerLeave",["pointerout","pointerover"]),vr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),vr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),vr("onBeforeInput",["compositionend","keypress","textInput","paste"]),vr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),vr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),vr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),A3=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ao));function Py(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var o=n[a],u=o.event;o=o.listeners;e:{var h=void 0;if(i)for(var v=o.length-1;0<=v;v--){var E=o[v],j=E.instance,$=E.currentTarget;if(E=E.listener,j!==h&&u.isPropagationStopped())break e;h=E,u.currentTarget=$;try{h(u)}catch(K){Kl(K)}u.currentTarget=null,h=j}else for(v=0;v<o.length;v++){if(E=o[v],j=E.instance,$=E.currentTarget,E=E.listener,j!==h&&u.isPropagationStopped())break e;h=E,u.currentTarget=$;try{h(u)}catch(K){Kl(K)}u.currentTarget=null,h=j}}}}function Te(n,i){var a=i[ed];a===void 0&&(a=i[ed]=new Set);var o=n+"__bubble";a.has(o)||(Iy(i,n,2,!1),a.add(o))}function Hf(n,i,a){var o=0;i&&(o|=4),Iy(a,n,o,i)}var lc="_reactListening"+Math.random().toString(36).slice(2);function Ff(n){if(!n[lc]){n[lc]=!0,Mg.forEach(function(a){a!=="selectionchange"&&(A3.has(a)||Hf(a,!1,n),Hf(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[lc]||(i[lc]=!0,Hf("selectionchange",!1,i))}}function Iy(n,i,a,o){switch(lv(i)){case 2:var u=J3;break;case 8:u=eE;break;default:u=rh}a=u.bind(null,i,a,n),u=void 0,!dd||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),o?u!==void 0?n.addEventListener(i,a,{capture:!0,passive:u}):n.addEventListener(i,a,!0):u!==void 0?n.addEventListener(i,a,{passive:u}):n.addEventListener(i,a,!1)}function qf(n,i,a,o,u){var h=o;if((i&1)===0&&(i&2)===0&&o!==null)e:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var E=o.stateNode.containerInfo;if(E===u)break;if(v===4)for(v=o.return;v!==null;){var j=v.tag;if((j===3||j===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;E!==null;){if(v=ea(E),v===null)return;if(j=v.tag,j===5||j===6||j===26||j===27){o=h=v;continue e}E=E.parentNode}}o=o.return}qg(function(){var $=h,K=cd(a),J=[];e:{var B=x0.get(n);if(B!==void 0){var V=Sl,de=n;switch(n){case"keypress":if(bl(a)===0)break e;case"keydown":case"keyup":V=bS;break;case"focusin":de="focus",V=pd;break;case"focusout":de="blur",V=pd;break;case"beforeblur":case"afterblur":V=pd;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":V=Kg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":V=lS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":V=ES;break;case p0:case g0:case y0:V=dS;break;case v0:V=CS;break;case"scroll":case"scrollend":V=sS;break;case"wheel":V=_S;break;case"copy":case"cut":case"paste":V=hS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":V=Zg;break;case"toggle":case"beforetoggle":V=RS}var se=(i&4)!==0,ze=!se&&(n==="scroll"||n==="scrollend"),L=se?B!==null?B+"Capture":null:B;se=[];for(var D=$,I;D!==null;){var Z=D;if(I=Z.stateNode,Z=Z.tag,Z!==5&&Z!==26&&Z!==27||I===null||L===null||(Z=Ts(D,L),Z!=null&&se.push(so(D,Z,I))),ze)break;D=D.return}0<se.length&&(B=new V(B,de,null,a,K),J.push({event:B,listeners:se}))}}if((i&7)===0){e:{if(B=n==="mouseover"||n==="pointerover",V=n==="mouseout"||n==="pointerout",B&&a!==ld&&(de=a.relatedTarget||a.fromElement)&&(ea(de)||de[Jr]))break e;if((V||B)&&(B=K.window===K?K:(B=K.ownerDocument)?B.defaultView||B.parentWindow:window,V?(de=a.relatedTarget||a.toElement,V=$,de=de?ea(de):null,de!==null&&(ze=c(de),se=de.tag,de!==ze||se!==5&&se!==27&&se!==6)&&(de=null)):(V=null,de=$),V!==de)){if(se=Kg,Z="onMouseLeave",L="onMouseEnter",D="mouse",(n==="pointerout"||n==="pointerover")&&(se=Zg,Z="onPointerLeave",L="onPointerEnter",D="pointer"),ze=V==null?B:Es(V),I=de==null?B:Es(de),B=new se(Z,D+"leave",V,a,K),B.target=ze,B.relatedTarget=I,Z=null,ea(K)===$&&(se=new se(L,D+"enter",de,a,K),se.target=I,se.relatedTarget=ze,Z=se),ze=Z,V&&de)t:{for(se=V,L=de,D=0,I=se;I;I=Na(I))D++;for(I=0,Z=L;Z;Z=Na(Z))I++;for(;0<D-I;)se=Na(se),D--;for(;0<I-D;)L=Na(L),I--;for(;D--;){if(se===L||L!==null&&se===L.alternate)break t;se=Na(se),L=Na(L)}se=null}else se=null;V!==null&&$y(J,B,V,se,!1),de!==null&&ze!==null&&$y(J,ze,de,se,!0)}}e:{if(B=$?Es($):window,V=B.nodeName&&B.nodeName.toLowerCase(),V==="select"||V==="input"&&B.type==="file")var ie=r0;else if(n0(B))if(a0)ie=$S;else{ie=PS;var we=zS}else V=B.nodeName,!V||V.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?$&&od($.elementType)&&(ie=r0):ie=IS;if(ie&&(ie=ie(n,$))){i0(J,ie,a,K);break e}we&&we(n,B,$),n==="focusout"&&$&&B.type==="number"&&$.memoizedProps.value!=null&&sd(B,"number",B.value)}switch(we=$?Es($):window,n){case"focusin":(n0(we)||we.contentEditable==="true")&&(ua=we,wd=$,ks=null);break;case"focusout":ks=wd=ua=null;break;case"mousedown":Sd=!0;break;case"contextmenu":case"mouseup":case"dragend":Sd=!1,h0(J,a,K);break;case"selectionchange":if(BS)break;case"keydown":case"keyup":h0(J,a,K)}var ae;if(yd)e:{switch(n){case"compositionstart":var ce="onCompositionStart";break e;case"compositionend":ce="onCompositionEnd";break e;case"compositionupdate":ce="onCompositionUpdate";break e}ce=void 0}else ca?e0(n,a)&&(ce="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ce="onCompositionStart");ce&&(Qg&&a.locale!=="ko"&&(ca||ce!=="onCompositionStart"?ce==="onCompositionEnd"&&ca&&(ae=Gg()):(Ri=K,fd="value"in Ri?Ri.value:Ri.textContent,ca=!0)),we=cc($,ce),0<we.length&&(ce=new Xg(ce,n,null,a,K),J.push({event:ce,listeners:we}),ae?ce.data=ae:(ae=t0(a),ae!==null&&(ce.data=ae)))),(ae=MS?kS(n,a):OS(n,a))&&(ce=cc($,"onBeforeInput"),0<ce.length&&(we=new Xg("onBeforeInput","beforeinput",null,a,K),J.push({event:we,listeners:ce}),we.data=ae)),E3(J,n,$,a,K)}Py(J,i)})}function so(n,i,a){return{instance:n,listener:i,currentTarget:a}}function cc(n,i){for(var a=i+"Capture",o=[];n!==null;){var u=n,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=Ts(n,a),u!=null&&o.unshift(so(n,u,h)),u=Ts(n,i),u!=null&&o.push(so(n,u,h))),n.tag===3)return o;n=n.return}return[]}function Na(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function $y(n,i,a,o,u){for(var h=i._reactName,v=[];a!==null&&a!==o;){var E=a,j=E.alternate,$=E.stateNode;if(E=E.tag,j!==null&&j===o)break;E!==5&&E!==26&&E!==27||$===null||(j=$,u?($=Ts(a,h),$!=null&&v.unshift(so(a,$,j))):u||($=Ts(a,h),$!=null&&v.push(so(a,$,j)))),a=a.return}v.length!==0&&n.push({event:i,listeners:v})}var _3=/\r\n?/g,j3=/\u0000|\uFFFD/g;function Uy(n){return(typeof n=="string"?n:""+n).replace(_3,`
`).replace(j3,"")}function By(n,i){return i=Uy(i),Uy(n)===i}function uc(){}function Le(n,i,a,o,u,h){switch(a){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||sa(n,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&sa(n,""+o);break;case"className":pl(n,"class",o);break;case"tabIndex":pl(n,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":pl(n,a,o);break;case"style":Hg(n,o,h);break;case"data":if(i!=="object"){pl(n,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||a!=="href")){n.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){n.removeAttribute(a);break}o=vl(""+o),n.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){n.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(i!=="input"&&Le(n,i,"name",u.name,u,null),Le(n,i,"formEncType",u.formEncType,u,null),Le(n,i,"formMethod",u.formMethod,u,null),Le(n,i,"formTarget",u.formTarget,u,null)):(Le(n,i,"encType",u.encType,u,null),Le(n,i,"method",u.method,u,null),Le(n,i,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){n.removeAttribute(a);break}o=vl(""+o),n.setAttribute(a,o);break;case"onClick":o!=null&&(n.onclick=uc);break;case"onScroll":o!=null&&Te("scroll",n);break;case"onScrollEnd":o!=null&&Te("scrollend",n);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));n.innerHTML=a}}break;case"multiple":n.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":n.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){n.removeAttribute("xlink:href");break}a=vl(""+o),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?n.setAttribute(a,""+o):n.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?n.setAttribute(a,""):n.removeAttribute(a);break;case"capture":case"download":o===!0?n.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?n.setAttribute(a,o):n.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?n.setAttribute(a,o):n.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?n.removeAttribute(a):n.setAttribute(a,o);break;case"popover":Te("beforetoggle",n),Te("toggle",n),ml(n,"popover",o);break;case"xlinkActuate":qn(n,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":qn(n,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":qn(n,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":qn(n,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":qn(n,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":qn(n,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":qn(n,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":qn(n,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":qn(n,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ml(n,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=rS.get(a)||a,ml(n,a,o))}}function Gf(n,i,a,o,u,h){switch(a){case"style":Hg(n,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));n.innerHTML=a}}break;case"children":typeof o=="string"?sa(n,o):(typeof o=="number"||typeof o=="bigint")&&sa(n,""+o);break;case"onScroll":o!=null&&Te("scroll",n);break;case"onScrollEnd":o!=null&&Te("scrollend",n);break;case"onClick":o!=null&&(n.onclick=uc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!kg.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),i=a.slice(2,u?a.length-7:void 0),h=n[Rt]||null,h=h!=null?h[a]:null,typeof h=="function"&&n.removeEventListener(i,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in n?n[a]=null:n.hasAttribute(a)&&n.removeAttribute(a)),n.addEventListener(i,o,u);break e}a in n?n[a]=o:o===!0?n.setAttribute(a,""):ml(n,a,o)}}}function mt(n,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Te("error",n),Te("load",n);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var v=a[h];if(v!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Le(n,i,h,v,a,null)}}u&&Le(n,i,"srcSet",a.srcSet,a,null),o&&Le(n,i,"src",a.src,a,null);return;case"input":Te("invalid",n);var E=h=v=u=null,j=null,$=null;for(o in a)if(a.hasOwnProperty(o)){var K=a[o];if(K!=null)switch(o){case"name":u=K;break;case"type":v=K;break;case"checked":j=K;break;case"defaultChecked":$=K;break;case"value":h=K;break;case"defaultValue":E=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(s(137,i));break;default:Le(n,i,o,K,a,null)}}$g(n,h,E,j,$,v,u,!1),gl(n);return;case"select":Te("invalid",n),o=v=h=null;for(u in a)if(a.hasOwnProperty(u)&&(E=a[u],E!=null))switch(u){case"value":h=E;break;case"defaultValue":v=E;break;case"multiple":o=E;default:Le(n,i,u,E,a,null)}i=h,a=v,n.multiple=!!o,i!=null?aa(n,!!o,i,!1):a!=null&&aa(n,!!o,a,!0);return;case"textarea":Te("invalid",n),h=u=o=null;for(v in a)if(a.hasOwnProperty(v)&&(E=a[v],E!=null))switch(v){case"value":o=E;break;case"defaultValue":u=E;break;case"children":h=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:Le(n,i,v,E,a,null)}Bg(n,o,u,h),gl(n);return;case"option":for(j in a)if(a.hasOwnProperty(j)&&(o=a[j],o!=null))switch(j){case"selected":n.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Le(n,i,j,o,a,null)}return;case"dialog":Te("beforetoggle",n),Te("toggle",n),Te("cancel",n),Te("close",n);break;case"iframe":case"object":Te("load",n);break;case"video":case"audio":for(o=0;o<ao.length;o++)Te(ao[o],n);break;case"image":Te("error",n),Te("load",n);break;case"details":Te("toggle",n);break;case"embed":case"source":case"link":Te("error",n),Te("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(o=a[$],o!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Le(n,i,$,o,a,null)}return;default:if(od(i)){for(K in a)a.hasOwnProperty(K)&&(o=a[K],o!==void 0&&Gf(n,i,K,o,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(o=a[E],o!=null&&Le(n,i,E,o,a,null))}function R3(n,i,a,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,v=null,E=null,j=null,$=null,K=null;for(V in a){var J=a[V];if(a.hasOwnProperty(V)&&J!=null)switch(V){case"checked":break;case"value":break;case"defaultValue":j=J;default:o.hasOwnProperty(V)||Le(n,i,V,null,o,J)}}for(var B in o){var V=o[B];if(J=a[B],o.hasOwnProperty(B)&&(V!=null||J!=null))switch(B){case"type":h=V;break;case"name":u=V;break;case"checked":$=V;break;case"defaultChecked":K=V;break;case"value":v=V;break;case"defaultValue":E=V;break;case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(s(137,i));break;default:V!==J&&Le(n,i,B,V,o,J)}}ad(n,v,E,j,$,K,h,u);return;case"select":V=v=E=B=null;for(h in a)if(j=a[h],a.hasOwnProperty(h)&&j!=null)switch(h){case"value":break;case"multiple":V=j;default:o.hasOwnProperty(h)||Le(n,i,h,null,o,j)}for(u in o)if(h=o[u],j=a[u],o.hasOwnProperty(u)&&(h!=null||j!=null))switch(u){case"value":B=h;break;case"defaultValue":E=h;break;case"multiple":v=h;default:h!==j&&Le(n,i,u,h,o,j)}i=E,a=v,o=V,B!=null?aa(n,!!a,B,!1):!!o!=!!a&&(i!=null?aa(n,!!a,i,!0):aa(n,!!a,a?[]:"",!1));return;case"textarea":V=B=null;for(E in a)if(u=a[E],a.hasOwnProperty(E)&&u!=null&&!o.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Le(n,i,E,null,o,u)}for(v in o)if(u=o[v],h=a[v],o.hasOwnProperty(v)&&(u!=null||h!=null))switch(v){case"value":B=u;break;case"defaultValue":V=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==h&&Le(n,i,v,u,o,h)}Ug(n,B,V);return;case"option":for(var de in a)if(B=a[de],a.hasOwnProperty(de)&&B!=null&&!o.hasOwnProperty(de))switch(de){case"selected":n.selected=!1;break;default:Le(n,i,de,null,o,B)}for(j in o)if(B=o[j],V=a[j],o.hasOwnProperty(j)&&B!==V&&(B!=null||V!=null))switch(j){case"selected":n.selected=B&&typeof B!="function"&&typeof B!="symbol";break;default:Le(n,i,j,B,o,V)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var se in a)B=a[se],a.hasOwnProperty(se)&&B!=null&&!o.hasOwnProperty(se)&&Le(n,i,se,null,o,B);for($ in o)if(B=o[$],V=a[$],o.hasOwnProperty($)&&B!==V&&(B!=null||V!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(s(137,i));break;default:Le(n,i,$,B,o,V)}return;default:if(od(i)){for(var ze in a)B=a[ze],a.hasOwnProperty(ze)&&B!==void 0&&!o.hasOwnProperty(ze)&&Gf(n,i,ze,void 0,o,B);for(K in o)B=o[K],V=a[K],!o.hasOwnProperty(K)||B===V||B===void 0&&V===void 0||Gf(n,i,K,B,o,V);return}}for(var L in a)B=a[L],a.hasOwnProperty(L)&&B!=null&&!o.hasOwnProperty(L)&&Le(n,i,L,null,o,B);for(J in o)B=o[J],V=a[J],!o.hasOwnProperty(J)||B===V||B==null&&V==null||Le(n,i,J,B,o,V)}var Yf=null,Kf=null;function dc(n){return n.nodeType===9?n:n.ownerDocument}function Vy(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Hy(n,i){if(n===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&i==="foreignObject"?0:n}function Xf(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Zf=null;function D3(){var n=window.event;return n&&n.type==="popstate"?n===Zf?!1:(Zf=n,!0):(Zf=null,!1)}var Fy=typeof setTimeout=="function"?setTimeout:void 0,M3=typeof clearTimeout=="function"?clearTimeout:void 0,qy=typeof Promise=="function"?Promise:void 0,k3=typeof queueMicrotask=="function"?queueMicrotask:typeof qy<"u"?function(n){return qy.resolve(null).then(n).catch(O3)}:Fy;function O3(n){setTimeout(function(){throw n})}function qi(n){return n==="head"}function Gy(n,i){var a=i,o=0,u=0;do{var h=a.nextSibling;if(n.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(0<o&&8>o){a=o;var v=n.ownerDocument;if(a&1&&oo(v.documentElement),a&2&&oo(v.body),a&4)for(a=v.head,oo(a),v=a.firstChild;v;){var E=v.nextSibling,j=v.nodeName;v[Ss]||j==="SCRIPT"||j==="STYLE"||j==="LINK"&&v.rel.toLowerCase()==="stylesheet"||a.removeChild(v),v=E}}if(u===0){n.removeChild(h),go(i);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=h}while(a);go(i)}function Qf(n){var i=n.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Qf(a),td(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}n.removeChild(a)}}function N3(n,i,a,o){for(;n.nodeType===1;){var u=a;if(n.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(o){if(!n[Ss])switch(i){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(h=n.getAttribute("rel"),h==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(h!==u.rel||n.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||n.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||n.getAttribute("title")!==(u.title==null?null:u.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(h=n.getAttribute("src"),(h!==(u.src==null?null:u.src)||n.getAttribute("type")!==(u.type==null?null:u.type)||n.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(i==="input"&&n.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&n.getAttribute("name")===h)return n}else return n;if(n=yn(n.nextSibling),n===null)break}return null}function L3(n,i,a){if(i==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!a||(n=yn(n.nextSibling),n===null))return null;return n}function Wf(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function z3(n,i){var a=n.ownerDocument;if(n.data!=="$?"||a.readyState==="complete")i();else{var o=function(){i(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),n._reactRetry=o}}function yn(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return n}var Jf=null;function Yy(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}function Ky(n,i,a){switch(i=dc(a),n){case"html":if(n=i.documentElement,!n)throw Error(s(452));return n;case"head":if(n=i.head,!n)throw Error(s(453));return n;case"body":if(n=i.body,!n)throw Error(s(454));return n;default:throw Error(s(451))}}function oo(n){for(var i=n.attributes;i.length;)n.removeAttributeNode(i[0]);td(n)}var sn=new Map,Xy=new Set;function fc(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var ai=M.d;M.d={f:P3,r:I3,D:$3,C:U3,L:B3,m:V3,X:F3,S:H3,M:q3};function P3(){var n=ai.f(),i=ic();return n||i}function I3(n){var i=ta(n);i!==null&&i.tag===5&&i.type==="form"?p1(i):ai.r(n)}var La=typeof document>"u"?null:document;function Zy(n,i,a){var o=La;if(o&&typeof i=="string"&&i){var u=Wt(i);u='link[rel="'+n+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Xy.has(u)||(Xy.add(u),n={rel:n,crossOrigin:a,href:i},o.querySelector(u)===null&&(i=o.createElement("link"),mt(i,"link",n),ot(i),o.head.appendChild(i)))}}function $3(n){ai.D(n),Zy("dns-prefetch",n,null)}function U3(n,i){ai.C(n,i),Zy("preconnect",n,i)}function B3(n,i,a){ai.L(n,i,a);var o=La;if(o&&n&&i){var u='link[rel="preload"][as="'+Wt(i)+'"]';i==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Wt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Wt(a.imageSizes)+'"]')):u+='[href="'+Wt(n)+'"]';var h=u;switch(i){case"style":h=za(n);break;case"script":h=Pa(n)}sn.has(h)||(n=y({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:n,as:i},a),sn.set(h,n),o.querySelector(u)!==null||i==="style"&&o.querySelector(lo(h))||i==="script"&&o.querySelector(co(h))||(i=o.createElement("link"),mt(i,"link",n),ot(i),o.head.appendChild(i)))}}function V3(n,i){ai.m(n,i);var a=La;if(a&&n){var o=i&&typeof i.as=="string"?i.as:"script",u='link[rel="modulepreload"][as="'+Wt(o)+'"][href="'+Wt(n)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Pa(n)}if(!sn.has(h)&&(n=y({rel:"modulepreload",href:n},i),sn.set(h,n),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(co(h)))return}o=a.createElement("link"),mt(o,"link",n),ot(o),a.head.appendChild(o)}}}function H3(n,i,a){ai.S(n,i,a);var o=La;if(o&&n){var u=na(o).hoistableStyles,h=za(n);i=i||"default";var v=u.get(h);if(!v){var E={loading:0,preload:null};if(v=o.querySelector(lo(h)))E.loading=5;else{n=y({rel:"stylesheet",href:n,"data-precedence":i},a),(a=sn.get(h))&&eh(n,a);var j=v=o.createElement("link");ot(j),mt(j,"link",n),j._p=new Promise(function($,K){j.onload=$,j.onerror=K}),j.addEventListener("load",function(){E.loading|=1}),j.addEventListener("error",function(){E.loading|=2}),E.loading|=4,hc(v,i,o)}v={type:"stylesheet",instance:v,count:1,state:E},u.set(h,v)}}}function F3(n,i){ai.X(n,i);var a=La;if(a&&n){var o=na(a).hoistableScripts,u=Pa(n),h=o.get(u);h||(h=a.querySelector(co(u)),h||(n=y({src:n,async:!0},i),(i=sn.get(u))&&th(n,i),h=a.createElement("script"),ot(h),mt(h,"link",n),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function q3(n,i){ai.M(n,i);var a=La;if(a&&n){var o=na(a).hoistableScripts,u=Pa(n),h=o.get(u);h||(h=a.querySelector(co(u)),h||(n=y({src:n,async:!0,type:"module"},i),(i=sn.get(u))&&th(n,i),h=a.createElement("script"),ot(h),mt(h,"link",n),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function Qy(n,i,a,o){var u=(u=le.current)?fc(u):null;if(!u)throw Error(s(446));switch(n){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=za(a.href),a=na(u).hoistableStyles,o=a.get(i),o||(o={type:"style",instance:null,count:0,state:null},a.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){n=za(a.href);var h=na(u).hoistableStyles,v=h.get(n);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(n,v),(h=u.querySelector(lo(n)))&&!h._p&&(v.instance=h,v.state.loading=5),sn.has(n)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},sn.set(n,a),h||G3(u,n,a,v.state))),i&&o===null)throw Error(s(528,""));return v}if(i&&o!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Pa(a),a=na(u).hoistableScripts,o=a.get(i),o||(o={type:"script",instance:null,count:0,state:null},a.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,n))}}function za(n){return'href="'+Wt(n)+'"'}function lo(n){return'link[rel="stylesheet"]['+n+"]"}function Wy(n){return y({},n,{"data-precedence":n.precedence,precedence:null})}function G3(n,i,a,o){n.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=n.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),mt(i,"link",a),ot(i),n.head.appendChild(i))}function Pa(n){return'[src="'+Wt(n)+'"]'}function co(n){return"script[async]"+n}function Jy(n,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var o=n.querySelector('style[data-href~="'+Wt(a.href)+'"]');if(o)return i.instance=o,ot(o),o;var u=y({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(n.ownerDocument||n).createElement("style"),ot(o),mt(o,"style",u),hc(o,a.precedence,n),i.instance=o;case"stylesheet":u=za(a.href);var h=n.querySelector(lo(u));if(h)return i.state.loading|=4,i.instance=h,ot(h),h;o=Wy(a),(u=sn.get(u))&&eh(o,u),h=(n.ownerDocument||n).createElement("link"),ot(h);var v=h;return v._p=new Promise(function(E,j){v.onload=E,v.onerror=j}),mt(h,"link",o),i.state.loading|=4,hc(h,a.precedence,n),i.instance=h;case"script":return h=Pa(a.src),(u=n.querySelector(co(h)))?(i.instance=u,ot(u),u):(o=a,(u=sn.get(h))&&(o=y({},a),th(o,u)),n=n.ownerDocument||n,u=n.createElement("script"),ot(u),mt(u,"link",o),n.head.appendChild(u),i.instance=u);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,hc(o,a.precedence,n));return i.instance}function hc(n,i,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,v=0;v<o.length;v++){var E=o[v];if(E.dataset.precedence===i)h=E;else if(h!==u)break}h?h.parentNode.insertBefore(n,h.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(n,i.firstChild))}function eh(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.title==null&&(n.title=i.title)}function th(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.integrity==null&&(n.integrity=i.integrity)}var mc=null;function ev(n,i,a){if(mc===null){var o=new Map,u=mc=new Map;u.set(a,o)}else u=mc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(n))return o;for(o.set(n,null),a=a.getElementsByTagName(n),u=0;u<a.length;u++){var h=a[u];if(!(h[Ss]||h[yt]||n==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var v=h.getAttribute(i)||"";v=n+v;var E=o.get(v);E?E.push(h):o.set(v,[h])}}return o}function tv(n,i,a){n=n.ownerDocument||n,n.head.insertBefore(a,i==="title"?n.querySelector("head > title"):null)}function Y3(n,i,a){if(a===1||i.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return n=i.disabled,typeof i.precedence=="string"&&n==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function nv(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var uo=null;function K3(){}function X3(n,i,a){if(uo===null)throw Error(s(475));var o=uo;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var u=za(a.href),h=n.querySelector(lo(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(o.count++,o=pc.bind(o),n.then(o,o)),i.state.loading|=4,i.instance=h,ot(h);return}h=n.ownerDocument||n,a=Wy(a),(u=sn.get(u))&&eh(a,u),h=h.createElement("link"),ot(h);var v=h;v._p=new Promise(function(E,j){v.onload=E,v.onerror=j}),mt(h,"link",a),i.instance=h}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(i,n),(n=i.state.preload)&&(i.state.loading&3)===0&&(o.count++,i=pc.bind(o),n.addEventListener("load",i),n.addEventListener("error",i))}}function Z3(){if(uo===null)throw Error(s(475));var n=uo;return n.stylesheets&&n.count===0&&nh(n,n.stylesheets),0<n.count?function(i){var a=setTimeout(function(){if(n.stylesheets&&nh(n,n.stylesheets),n.unsuspend){var o=n.unsuspend;n.unsuspend=null,o()}},6e4);return n.unsuspend=i,function(){n.unsuspend=null,clearTimeout(a)}}:null}function pc(){if(this.count--,this.count===0){if(this.stylesheets)nh(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var gc=null;function nh(n,i){n.stylesheets=null,n.unsuspend!==null&&(n.count++,gc=new Map,i.forEach(Q3,n),gc=null,pc.call(n))}function Q3(n,i){if(!(i.state.loading&4)){var a=gc.get(n);if(a)var o=a.get(null);else{a=new Map,gc.set(n,a);for(var u=n.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var v=u[h];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),o=v)}o&&a.set(null,o)}u=i.instance,v=u.getAttribute("data-precedence"),h=a.get(v)||o,h===o&&a.set(null,u),a.set(v,u),this.count++,o=pc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(u,n.firstChild)),i.state.loading|=4}}var fo={$$typeof:z,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function W3(n,i,a,o,u,h,v,E){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qu(0),this.hiddenUpdates=Qu(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function iv(n,i,a,o,u,h,v,E,j,$,K,J){return n=new W3(n,i,a,v,E,j,$,J),i=1,h===!0&&(i|=24),h=Bt(3,null,null,i),n.current=h,h.stateNode=n,i=zd(),i.refCount++,n.pooledCache=i,i.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:i},Ud(h),n}function rv(n){return n?(n=ma,n):ma}function av(n,i,a,o,u,h){u=rv(u),o.context===null?o.context=u:o.pendingContext=u,o=ki(i),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=Oi(n,o,i),a!==null&&(Gt(a,n,i),Bs(a,n,i))}function sv(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function ih(n,i){sv(n,i),(n=n.alternate)&&sv(n,i)}function ov(n){if(n.tag===13){var i=ha(n,67108864);i!==null&&Gt(i,n,67108864),ih(n,67108864)}}var yc=!0;function J3(n,i,a,o){var u=F.T;F.T=null;var h=M.p;try{M.p=2,rh(n,i,a,o)}finally{M.p=h,F.T=u}}function eE(n,i,a,o){var u=F.T;F.T=null;var h=M.p;try{M.p=8,rh(n,i,a,o)}finally{M.p=h,F.T=u}}function rh(n,i,a,o){if(yc){var u=ah(o);if(u===null)qf(n,i,o,vc,a),cv(n,o);else if(nE(u,n,i,a,o))o.stopPropagation();else if(cv(n,o),i&4&&-1<tE.indexOf(n)){for(;u!==null;){var h=ta(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var v=yr(h.pendingLanes);if(v!==0){var E=h;for(E.pendingLanes|=2,E.entangledLanes|=2;v;){var j=1<<31-$t(v);E.entanglements[1]|=j,v&=~j}On(h),(ke&6)===0&&(tc=jn()+500,ro(0))}}break;case 13:E=ha(h,2),E!==null&&Gt(E,h,2),ic(),ih(h,2)}if(h=ah(o),h===null&&qf(n,i,o,vc,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else qf(n,i,o,null,a)}}function ah(n){return n=cd(n),sh(n)}var vc=null;function sh(n){if(vc=null,n=ea(n),n!==null){var i=c(n);if(i===null)n=null;else{var a=i.tag;if(a===13){if(n=f(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null)}}return vc=n,null}function lv(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(U6()){case Sg:return 2;case Eg:return 8;case ul:case B6:return 32;case Tg:return 268435456;default:return 32}default:return 32}}var oh=!1,Gi=null,Yi=null,Ki=null,ho=new Map,mo=new Map,Xi=[],tE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function cv(n,i){switch(n){case"focusin":case"focusout":Gi=null;break;case"dragenter":case"dragleave":Yi=null;break;case"mouseover":case"mouseout":Ki=null;break;case"pointerover":case"pointerout":ho.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":mo.delete(i.pointerId)}}function po(n,i,a,o,u,h){return n===null||n.nativeEvent!==h?(n={blockedOn:i,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},i!==null&&(i=ta(i),i!==null&&ov(i)),n):(n.eventSystemFlags|=o,i=n.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),n)}function nE(n,i,a,o,u){switch(i){case"focusin":return Gi=po(Gi,n,i,a,o,u),!0;case"dragenter":return Yi=po(Yi,n,i,a,o,u),!0;case"mouseover":return Ki=po(Ki,n,i,a,o,u),!0;case"pointerover":var h=u.pointerId;return ho.set(h,po(ho.get(h)||null,n,i,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,mo.set(h,po(mo.get(h)||null,n,i,a,o,u)),!0}return!1}function uv(n){var i=ea(n.target);if(i!==null){var a=c(i);if(a!==null){if(i=a.tag,i===13){if(i=f(a),i!==null){n.blockedOn=i,X6(n.priority,function(){if(a.tag===13){var o=qt();o=Wu(o);var u=ha(a,o);u!==null&&Gt(u,a,o),ih(a,o)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function xc(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=ah(n.nativeEvent);if(a===null){a=n.nativeEvent;var o=new a.constructor(a.type,a);ld=o,a.target.dispatchEvent(o),ld=null}else return i=ta(a),i!==null&&ov(i),n.blockedOn=a,!1;i.shift()}return!0}function dv(n,i,a){xc(n)&&a.delete(i)}function iE(){oh=!1,Gi!==null&&xc(Gi)&&(Gi=null),Yi!==null&&xc(Yi)&&(Yi=null),Ki!==null&&xc(Ki)&&(Ki=null),ho.forEach(dv),mo.forEach(dv)}function bc(n,i){n.blockedOn===i&&(n.blockedOn=null,oh||(oh=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,iE)))}var wc=null;function fv(n){wc!==n&&(wc=n,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){wc===n&&(wc=null);for(var i=0;i<n.length;i+=3){var a=n[i],o=n[i+1],u=n[i+2];if(typeof o!="function"){if(sh(o||a)===null)continue;break}var h=ta(a);h!==null&&(n.splice(i,3),i-=3,sf(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function go(n){function i(j){return bc(j,n)}Gi!==null&&bc(Gi,n),Yi!==null&&bc(Yi,n),Ki!==null&&bc(Ki,n),ho.forEach(i),mo.forEach(i);for(var a=0;a<Xi.length;a++){var o=Xi[a];o.blockedOn===n&&(o.blockedOn=null)}for(;0<Xi.length&&(a=Xi[0],a.blockedOn===null);)uv(a),a.blockedOn===null&&Xi.shift();if(a=(n.ownerDocument||n).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],v=u[Rt]||null;if(typeof h=="function")v||fv(a);else if(v){var E=null;if(h&&h.hasAttribute("formAction")){if(u=h,v=h[Rt]||null)E=v.formAction;else if(sh(u)!==null)continue}else E=v.action;typeof E=="function"?a[o+1]=E:(a.splice(o,3),o-=3),fv(a)}}}function lh(n){this._internalRoot=n}Sc.prototype.render=lh.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,o=qt();av(a,o,n,i,null,null)},Sc.prototype.unmount=lh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;av(n.current,2,null,n,null,null),ic(),i[Jr]=null}};function Sc(n){this._internalRoot=n}Sc.prototype.unstable_scheduleHydration=function(n){if(n){var i=Rg();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Xi.length&&i!==0&&i<Xi[a].priority;a++);Xi.splice(a,0,n),a===0&&uv(n)}};var hv=t.version;if(hv!=="19.1.1")throw Error(s(527,hv,"19.1.1"));M.findDOMNode=function(n){var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(s(188)):(n=Object.keys(n).join(","),Error(s(268,n)));return n=m(i),n=n!==null?g(n):null,n=n===null?null:n.stateNode,n};var rE={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ec=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ec.isDisabled&&Ec.supportsFiber)try{xs=Ec.inject(rE),It=Ec}catch{}}return vo.createRoot=function(n,i){if(!l(n))throw Error(s(299));var a=!1,o="",u=R1,h=D1,v=M1,E=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(h=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(E=i.unstable_transitionCallbacks)),i=iv(n,1,!1,null,null,a,o,u,h,v,E,null),n[Jr]=i.current,Ff(n),new lh(i)},vo.hydrateRoot=function(n,i,a){if(!l(n))throw Error(s(299));var o=!1,u="",h=R1,v=D1,E=M1,j=null,$=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(j=a.unstable_transitionCallbacks),a.formState!==void 0&&($=a.formState)),i=iv(n,1,!0,i,a??null,o,u,h,v,E,j,$),i.context=rv(null),a=i.current,o=qt(),o=Wu(o),u=ki(o),u.callback=null,Oi(a,u,o),a=o,i.current.lanes=a,ws(i,a),On(i),n[Jr]=i.current,Ff(n),new Sc(i)},vo.version="19.1.1",vo}var Ev;function pE(){if(Ev)return dh.exports;Ev=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),dh.exports=mE(),dh.exports}var gE=pE();let yE={data:""},vE=e=>{if(typeof window=="object"){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||yE},xE=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,bE=/\/\*[^]*?\*\/|  +/g,Tv=/\n+/g,nr=(e,t)=>{let r="",s="",l="";for(let c in e){let f=e[c];c[0]=="@"?c[1]=="i"?r=c+" "+f+";":s+=c[1]=="f"?nr(f,c):c+"{"+nr(f,c[1]=="k"?"":t)+"}":typeof f=="object"?s+=nr(f,t?t.replace(/([^,])+/g,p=>c.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,m=>/&/.test(m)?m.replace(/&/g,p):p?p+" "+m:m)):c):f!=null&&(c=/^--/.test(c)?c:c.replace(/[A-Z]/g,"-$&").toLowerCase(),l+=nr.p?nr.p(c,f):c+":"+f+";")}return r+(t&&l?t+"{"+l+"}":l)+s},si={},Vb=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+Vb(e[r]);return t}return e},wE=(e,t,r,s,l)=>{let c=Vb(e),f=si[c]||(si[c]=(m=>{let g=0,y=11;for(;g<m.length;)y=101*y+m.charCodeAt(g++)>>>0;return"go"+y})(c));if(!si[f]){let m=c!==e?e:(g=>{let y,x,w=[{}];for(;y=xE.exec(g.replace(bE,""));)y[4]?w.shift():y[3]?(x=y[3].replace(Tv," ").trim(),w.unshift(w[0][x]=w[0][x]||{})):w[0][y[1]]=y[2].replace(Tv," ").trim();return w[0]})(e);si[f]=nr(l?{["@keyframes "+f]:m}:m,r?"":"."+f)}let p=r&&si.g?si.g:null;return r&&(si.g=si[f]),((m,g,y,x)=>{x?g.data=g.data.replace(x,m):g.data.indexOf(m)===-1&&(g.data=y?m+g.data:g.data+m)})(si[f],t,s,p),f},SE=(e,t,r)=>e.reduce((s,l,c)=>{let f=t[c];if(f&&f.call){let p=f(r),m=p&&p.props&&p.props.className||/^go/.test(p)&&p;f=m?"."+m:p&&typeof p=="object"?p.props?"":nr(p,""):p===!1?"":p}return s+l+(f??"")},"");function Mu(e){let t=this||{},r=e.call?e(t.p):e;return wE(r.unshift?r.raw?SE(r,[].slice.call(arguments,1),t.p):r.reduce((s,l)=>Object.assign(s,l&&l.call?l(t.p):l),{}):r,vE(t.target),t.g,t.o,t.k)}let Hb,ym,vm;Mu.bind({g:1});let gi=Mu.bind({k:1});function EE(e,t,r,s){nr.p=t,Hb=e,ym=r,vm=s}function hr(e,t){let r=this||{};return function(){let s=arguments;function l(c,f){let p=Object.assign({},c),m=p.className||l.className;r.p=Object.assign({theme:ym&&ym()},p),r.o=/ *go\d+/.test(m),p.className=Mu.apply(r,s)+(m?" "+m:"");let g=e;return e[0]&&(g=p.as||e,delete p.as),vm&&g[0]&&vm(p),Hb(g,p)}return l}}var TE=e=>typeof e=="function",iu=(e,t)=>TE(e)?e(t):e,CE=(()=>{let e=0;return()=>(++e).toString()})(),Fb=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),AE=20,cp="default",qb=(e,t)=>{let{toastLimit:r}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(f=>f.id===t.toast.id?{...f,...t.toast}:f)};case 2:let{toast:s}=t;return qb(e,{type:e.toasts.find(f=>f.id===s.id)?1:0,toast:s});case 3:let{toastId:l}=t;return{...e,toasts:e.toasts.map(f=>f.id===l||l===void 0?{...f,dismissed:!0,visible:!1}:f)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(f=>f.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let c=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(f=>({...f,pauseDuration:f.pauseDuration+c}))}}},Bc=[],Gb={toasts:[],pausedAt:void 0,settings:{toastLimit:AE}},In={},Yb=(e,t=cp)=>{In[t]=qb(In[t]||Gb,e),Bc.forEach(([r,s])=>{r===t&&s(In[t])})},Kb=e=>Object.keys(In).forEach(t=>Yb(e,t)),_E=e=>Object.keys(In).find(t=>In[t].toasts.some(r=>r.id===e)),ku=(e=cp)=>t=>{Yb(t,e)},jE={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},RE=(e={},t=cp)=>{let[r,s]=T.useState(In[t]||Gb),l=T.useRef(In[t]);T.useEffect(()=>(l.current!==In[t]&&s(In[t]),Bc.push([t,s]),()=>{let f=Bc.findIndex(([p])=>p===t);f>-1&&Bc.splice(f,1)}),[t]);let c=r.toasts.map(f=>{var p,m,g;return{...e,...e[f.type],...f,removeDelay:f.removeDelay||((p=e[f.type])==null?void 0:p.removeDelay)||e?.removeDelay,duration:f.duration||((m=e[f.type])==null?void 0:m.duration)||e?.duration||jE[f.type],style:{...e.style,...(g=e[f.type])==null?void 0:g.style,...f.style}}});return{...r,toasts:c}},DE=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:r?.id||CE()}),Ko=e=>(t,r)=>{let s=DE(t,e,r);return ku(s.toasterId||_E(s.id))({type:2,toast:s}),s.id},at=(e,t)=>Ko("blank")(e,t);at.error=Ko("error");at.success=Ko("success");at.loading=Ko("loading");at.custom=Ko("custom");at.dismiss=(e,t)=>{let r={type:3,toastId:e};t?ku(t)(r):Kb(r)};at.dismissAll=e=>at.dismiss(void 0,e);at.remove=(e,t)=>{let r={type:4,toastId:e};t?ku(t)(r):Kb(r)};at.removeAll=e=>at.remove(void 0,e);at.promise=(e,t,r)=>{let s=at.loading(t.loading,{...r,...r?.loading});return typeof e=="function"&&(e=e()),e.then(l=>{let c=t.success?iu(t.success,l):void 0;return c?at.success(c,{id:s,...r,...r?.success}):at.dismiss(s),l}).catch(l=>{let c=t.error?iu(t.error,l):void 0;c?at.error(c,{id:s,...r,...r?.error}):at.dismiss(s)}),e};var ME=1e3,kE=(e,t="default")=>{let{toasts:r,pausedAt:s}=RE(e,t),l=T.useRef(new Map).current,c=T.useCallback((x,w=ME)=>{if(l.has(x))return;let C=setTimeout(()=>{l.delete(x),f({type:4,toastId:x})},w);l.set(x,C)},[]);T.useEffect(()=>{if(s)return;let x=Date.now(),w=r.map(C=>{if(C.duration===1/0)return;let R=(C.duration||0)+C.pauseDuration-(x-C.createdAt);if(R<0){C.visible&&at.dismiss(C.id);return}return setTimeout(()=>at.dismiss(C.id,t),R)});return()=>{w.forEach(C=>C&&clearTimeout(C))}},[r,s,t]);let f=T.useCallback(ku(t),[t]),p=T.useCallback(()=>{f({type:5,time:Date.now()})},[f]),m=T.useCallback((x,w)=>{f({type:1,toast:{id:x,height:w}})},[f]),g=T.useCallback(()=>{s&&f({type:6,time:Date.now()})},[s,f]),y=T.useCallback((x,w)=>{let{reverseOrder:C=!1,gutter:R=8,defaultPosition:O}=w||{},N=r.filter(z=>(z.position||O)===(x.position||O)&&z.height),_=N.findIndex(z=>z.id===x.id),U=N.filter((z,Q)=>Q<_&&z.visible).length;return N.filter(z=>z.visible).slice(...C?[U+1]:[0,U]).reduce((z,Q)=>z+(Q.height||0)+R,0)},[r]);return T.useEffect(()=>{r.forEach(x=>{if(x.dismissed)c(x.id,x.removeDelay);else{let w=l.get(x.id);w&&(clearTimeout(w),l.delete(x.id))}})},[r,c]),{toasts:r,handlers:{updateHeight:m,startPause:p,endPause:g,calculateOffset:y}}},OE=gi`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,NE=gi`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,LE=gi`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,zE=hr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${OE} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${NE} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${LE} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,PE=gi`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,IE=hr("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${PE} 1s linear infinite;
`,$E=gi`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,UE=gi`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,BE=hr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${$E} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${UE} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,VE=hr("div")`
  position: absolute;
`,HE=hr("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,FE=gi`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,qE=hr("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${FE} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,GE=({toast:e})=>{let{icon:t,type:r,iconTheme:s}=e;return t!==void 0?typeof t=="string"?T.createElement(qE,null,t):t:r==="blank"?null:T.createElement(HE,null,T.createElement(IE,{...s}),r!=="loading"&&T.createElement(VE,null,r==="error"?T.createElement(zE,{...s}):T.createElement(BE,{...s})))},YE=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,KE=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,XE="0%{opacity:0;} 100%{opacity:1;}",ZE="0%{opacity:1;} 100%{opacity:0;}",QE=hr("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,WE=hr("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,JE=(e,t)=>{let r=e.includes("top")?1:-1,[s,l]=Fb()?[XE,ZE]:[YE(r),KE(r)];return{animation:t?`${gi(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${gi(l)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},eT=T.memo(({toast:e,position:t,style:r,children:s})=>{let l=e.height?JE(e.position||t||"top-center",e.visible):{opacity:0},c=T.createElement(GE,{toast:e}),f=T.createElement(WE,{...e.ariaProps},iu(e.message,e));return T.createElement(QE,{className:e.className,style:{...l,...r,...e.style}},typeof s=="function"?s({icon:c,message:f}):T.createElement(T.Fragment,null,c,f))});EE(T.createElement);var tT=({id:e,className:t,style:r,onHeightUpdate:s,children:l})=>{let c=T.useCallback(f=>{if(f){let p=()=>{let m=f.getBoundingClientRect().height;s(e,m)};p(),new MutationObserver(p).observe(f,{subtree:!0,childList:!0,characterData:!0})}},[e,s]);return T.createElement("div",{ref:c,className:t,style:r},l)},nT=(e,t)=>{let r=e.includes("top"),s=r?{top:0}:{bottom:0},l=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Fb()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...s,...l}},iT=Mu`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Tc=16,up=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:s,children:l,toasterId:c,containerStyle:f,containerClassName:p})=>{let{toasts:m,handlers:g}=kE(r,c);return T.createElement("div",{"data-rht-toaster":c||"",style:{position:"fixed",zIndex:9999,top:Tc,left:Tc,right:Tc,bottom:Tc,pointerEvents:"none",...f},className:p,onMouseEnter:g.startPause,onMouseLeave:g.endPause},m.map(y=>{let x=y.position||t,w=g.calculateOffset(y,{reverseOrder:e,gutter:s,defaultPosition:t}),C=nT(x,w);return T.createElement(tT,{id:y.id,key:y.id,onHeightUpdate:g.updateHeight,className:y.visible?iT:"",style:C},y.type==="custom"?iu(y.message,y):l?l(y):T.createElement(eT,{toast:y,position:x}))}))},qe=at;/**
 * react-router v7.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Cv="popstate";function rT(e={}){function t(s,l){let{pathname:c,search:f,hash:p}=s.location;return xm("",{pathname:c,search:f,hash:p},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function r(s,l){return typeof l=="string"?l:zo(l)}return sT(t,r,null,e)}function He(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function En(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function aT(){return Math.random().toString(36).substring(2,10)}function Av(e,t){return{usr:e.state,key:e.key,idx:t}}function xm(e,t,r=null,s){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?ds(t):t,state:r,key:t&&t.key||s||aT()}}function zo({pathname:e="/",search:t="",hash:r=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ds(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substring(r),e=e.substring(0,r));let s=e.indexOf("?");s>=0&&(t.search=e.substring(s),e=e.substring(0,s)),e&&(t.pathname=e)}return t}function sT(e,t,r,s={}){let{window:l=document.defaultView,v5Compat:c=!1}=s,f=l.history,p="POP",m=null,g=y();g==null&&(g=0,f.replaceState({...f.state,idx:g},""));function y(){return(f.state||{idx:null}).idx}function x(){p="POP";let N=y(),_=N==null?null:N-g;g=N,m&&m({action:p,location:O.location,delta:_})}function w(N,_){p="PUSH";let U=xm(O.location,N,_);g=y()+1;let z=Av(U,g),Q=O.createHref(U);try{f.pushState(z,"",Q)}catch(G){if(G instanceof DOMException&&G.name==="DataCloneError")throw G;l.location.assign(Q)}c&&m&&m({action:p,location:O.location,delta:1})}function C(N,_){p="REPLACE";let U=xm(O.location,N,_);g=y();let z=Av(U,g),Q=O.createHref(U);f.replaceState(z,"",Q),c&&m&&m({action:p,location:O.location,delta:0})}function R(N){return oT(N)}let O={get action(){return p},get location(){return e(l,f)},listen(N){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(Cv,x),m=N,()=>{l.removeEventListener(Cv,x),m=null}},createHref(N){return t(l,N)},createURL:R,encodeLocation(N){let _=R(N);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:w,replace:C,go(N){return f.go(N)}};return O}function oT(e,t=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),He(r,"No window.location.(origin|href) available to create URL");let s=typeof e=="string"?e:zo(e);return s=s.replace(/ $/,"%20"),!t&&s.startsWith("//")&&(s=r+s),new URL(s,r)}function Xb(e,t,r="/"){return lT(e,t,r,!1)}function lT(e,t,r,s){let l=typeof t=="string"?ds(t):t,c=yi(l.pathname||"/",r);if(c==null)return null;let f=Zb(e);cT(f);let p=null;for(let m=0;p==null&&m<f.length;++m){let g=bT(c);p=vT(f[m],g,s)}return p}function Zb(e,t=[],r=[],s=""){let l=(c,f,p)=>{let m={relativePath:p===void 0?c.path||"":p,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};m.relativePath.startsWith("/")&&(He(m.relativePath.startsWith(s),`Absolute route path "${m.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(s.length));let g=mi([s,m.relativePath]),y=r.concat(m);c.children&&c.children.length>0&&(He(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),Zb(c.children,t,y,g)),!(c.path==null&&!c.index)&&t.push({path:g,score:gT(g,c.index),routesMeta:y})};return e.forEach((c,f)=>{if(c.path===""||!c.path?.includes("?"))l(c,f);else for(let p of Qb(c.path))l(c,f,p)}),t}function Qb(e){let t=e.split("/");if(t.length===0)return[];let[r,...s]=t,l=r.endsWith("?"),c=r.replace(/\?$/,"");if(s.length===0)return l?[c,""]:[c];let f=Qb(s.join("/")),p=[];return p.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&p.push(...f),p.map(m=>e.startsWith("/")&&m===""?"/":m)}function cT(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:yT(t.routesMeta.map(s=>s.childrenIndex),r.routesMeta.map(s=>s.childrenIndex)))}var uT=/^:[\w-]+$/,dT=3,fT=2,hT=1,mT=10,pT=-2,_v=e=>e==="*";function gT(e,t){let r=e.split("/"),s=r.length;return r.some(_v)&&(s+=pT),t&&(s+=fT),r.filter(l=>!_v(l)).reduce((l,c)=>l+(uT.test(c)?dT:c===""?hT:mT),s)}function yT(e,t){return e.length===t.length&&e.slice(0,-1).every((s,l)=>s===t[l])?e[e.length-1]-t[t.length-1]:0}function vT(e,t,r=!1){let{routesMeta:s}=e,l={},c="/",f=[];for(let p=0;p<s.length;++p){let m=s[p],g=p===s.length-1,y=c==="/"?t:t.slice(c.length)||"/",x=ru({path:m.relativePath,caseSensitive:m.caseSensitive,end:g},y),w=m.route;if(!x&&g&&r&&!s[s.length-1].route.index&&(x=ru({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},y)),!x)return null;Object.assign(l,x.params),f.push({params:l,pathname:mi([c,x.pathname]),pathnameBase:TT(mi([c,x.pathnameBase])),route:w}),x.pathnameBase!=="/"&&(c=mi([c,x.pathnameBase]))}return f}function ru(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,s]=xT(e.path,e.caseSensitive,e.end),l=t.match(r);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),p=l.slice(1);return{params:s.reduce((g,{paramName:y,isOptional:x},w)=>{if(y==="*"){let R=p[w]||"";f=c.slice(0,c.length-R.length).replace(/(.)\/+$/,"$1")}const C=p[w];return x&&!C?g[y]=void 0:g[y]=(C||"").replace(/%2F/g,"/"),g},{}),pathname:c,pathnameBase:f,pattern:e}}function xT(e,t=!1,r=!0){En(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let s=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,p,m)=>(s.push({paramName:p,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(s.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),s]}function bT(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return En(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function yi(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,s=e.charAt(r);return s&&s!=="/"?null:e.slice(r)||"/"}function wT(e,t="/"){let{pathname:r,search:s="",hash:l=""}=typeof e=="string"?ds(e):e;return{pathname:r?r.startsWith("/")?r:ST(r,t):t,search:CT(s),hash:AT(l)}}function ST(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?r.length>1&&r.pop():l!=="."&&r.push(l)}),r.length>1?r.join("/"):"/"}function ph(e,t,r,s){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function ET(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function dp(e){let t=ET(e);return t.map((r,s)=>s===t.length-1?r.pathname:r.pathnameBase)}function fp(e,t,r,s=!1){let l;typeof e=="string"?l=ds(e):(l={...e},He(!l.pathname||!l.pathname.includes("?"),ph("?","pathname","search",l)),He(!l.pathname||!l.pathname.includes("#"),ph("#","pathname","hash",l)),He(!l.search||!l.search.includes("#"),ph("#","search","hash",l)));let c=e===""||l.pathname==="",f=c?"/":l.pathname,p;if(f==null)p=r;else{let x=t.length-1;if(!s&&f.startsWith("..")){let w=f.split("/");for(;w[0]==="..";)w.shift(),x-=1;l.pathname=w.join("/")}p=x>=0?t[x]:"/"}let m=wT(l,p),g=f&&f!=="/"&&f.endsWith("/"),y=(c||f===".")&&r.endsWith("/");return!m.pathname.endsWith("/")&&(g||y)&&(m.pathname+="/"),m}var mi=e=>e.join("/").replace(/\/\/+/g,"/"),TT=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),CT=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,AT=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function _T(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var Wb=["POST","PUT","PATCH","DELETE"];new Set(Wb);var jT=["GET",...Wb];new Set(jT);var fs=T.createContext(null);fs.displayName="DataRouter";var Ou=T.createContext(null);Ou.displayName="DataRouterState";T.createContext(!1);var Jb=T.createContext({isTransitioning:!1});Jb.displayName="ViewTransition";var RT=T.createContext(new Map);RT.displayName="Fetchers";var DT=T.createContext(null);DT.displayName="Await";var Tn=T.createContext(null);Tn.displayName="Navigation";var Xo=T.createContext(null);Xo.displayName="Location";var Cn=T.createContext({outlet:null,matches:[],isDataRoute:!1});Cn.displayName="Route";var hp=T.createContext(null);hp.displayName="RouteError";function MT(e,{relative:t}={}){He(hs(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:s}=T.useContext(Tn),{hash:l,pathname:c,search:f}=Zo(e,{relative:t}),p=c;return r!=="/"&&(p=c==="/"?r:mi([r,c])),s.createHref({pathname:p,search:f,hash:l})}function hs(){return T.useContext(Xo)!=null}function An(){return He(hs(),"useLocation() may be used only in the context of a <Router> component."),T.useContext(Xo).location}var e5="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function t5(e){T.useContext(Tn).static||T.useLayoutEffect(e)}function Si(){let{isDataRoute:e}=T.useContext(Cn);return e?qT():kT()}function kT(){He(hs(),"useNavigate() may be used only in the context of a <Router> component.");let e=T.useContext(fs),{basename:t,navigator:r}=T.useContext(Tn),{matches:s}=T.useContext(Cn),{pathname:l}=An(),c=JSON.stringify(dp(s)),f=T.useRef(!1);return t5(()=>{f.current=!0}),T.useCallback((m,g={})=>{if(En(f.current,e5),!f.current)return;if(typeof m=="number"){r.go(m);return}let y=fp(m,JSON.parse(c),l,g.relative==="path");e==null&&t!=="/"&&(y.pathname=y.pathname==="/"?t:mi([t,y.pathname])),(g.replace?r.replace:r.push)(y,g.state,g)},[t,r,c,l,e])}T.createContext(null);function OT(){let{matches:e}=T.useContext(Cn),t=e[e.length-1];return t?t.params:{}}function Zo(e,{relative:t}={}){let{matches:r}=T.useContext(Cn),{pathname:s}=An(),l=JSON.stringify(dp(r));return T.useMemo(()=>fp(e,JSON.parse(l),s,t==="path"),[e,l,s,t])}function NT(e,t){return n5(e,t)}function n5(e,t,r,s){He(hs(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=T.useContext(Tn),{matches:c}=T.useContext(Cn),f=c[c.length-1],p=f?f.params:{},m=f?f.pathname:"/",g=f?f.pathnameBase:"/",y=f&&f.route;{let _=y&&y.path||"";i5(m,!y||_.endsWith("*")||_.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${_}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${_}"> to <Route path="${_==="/"?"*":`${_}/*`}">.`)}let x=An(),w;if(t){let _=typeof t=="string"?ds(t):t;He(g==="/"||_.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${_.pathname}" was given in the \`location\` prop.`),w=_}else w=x;let C=w.pathname||"/",R=C;if(g!=="/"){let _=g.replace(/^\//,"").split("/");R="/"+C.replace(/^\//,"").split("/").slice(_.length).join("/")}let O=Xb(e,{pathname:R});En(y||O!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),En(O==null||O[O.length-1].route.element!==void 0||O[O.length-1].route.Component!==void 0||O[O.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let N=$T(O&&O.map(_=>Object.assign({},_,{params:Object.assign({},p,_.params),pathname:mi([g,l.encodeLocation?l.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?g:mi([g,l.encodeLocation?l.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),c,r,s);return t&&N?T.createElement(Xo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...w},navigationType:"POP"}},N):N}function LT(){let e=FT(),t=_T(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},c={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",e),f=T.createElement(T.Fragment,null,T.createElement("p",null,"💿 Hey developer 👋"),T.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",T.createElement("code",{style:c},"ErrorBoundary")," or"," ",T.createElement("code",{style:c},"errorElement")," prop on your route.")),T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},t),r?T.createElement("pre",{style:l},r):null,f)}var zT=T.createElement(LT,null),PT=class extends T.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?T.createElement(Cn.Provider,{value:this.props.routeContext},T.createElement(hp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function IT({routeContext:e,match:t,children:r}){let s=T.useContext(fs);return s&&s.static&&s.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=t.route.id),T.createElement(Cn.Provider,{value:e},r)}function $T(e,t=[],r=null,s=null){if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let l=e,c=r?.errors;if(c!=null){let m=l.findIndex(g=>g.route.id&&c?.[g.route.id]!==void 0);He(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,m+1))}let f=!1,p=-1;if(r)for(let m=0;m<l.length;m++){let g=l[m];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(p=m),g.route.id){let{loaderData:y,errors:x}=r,w=g.route.loader&&!y.hasOwnProperty(g.route.id)&&(!x||x[g.route.id]===void 0);if(g.route.lazy||w){f=!0,p>=0?l=l.slice(0,p+1):l=[l[0]];break}}}return l.reduceRight((m,g,y)=>{let x,w=!1,C=null,R=null;r&&(x=c&&g.route.id?c[g.route.id]:void 0,C=g.route.errorElement||zT,f&&(p<0&&y===0?(i5("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,R=null):p===y&&(w=!0,R=g.route.hydrateFallbackElement||null)));let O=t.concat(l.slice(0,y+1)),N=()=>{let _;return x?_=C:w?_=R:g.route.Component?_=T.createElement(g.route.Component,null):g.route.element?_=g.route.element:_=m,T.createElement(IT,{match:g,routeContext:{outlet:m,matches:O,isDataRoute:r!=null},children:_})};return r&&(g.route.ErrorBoundary||g.route.errorElement||y===0)?T.createElement(PT,{location:r.location,revalidation:r.revalidation,component:C,error:x,children:N(),routeContext:{outlet:null,matches:O,isDataRoute:!0}}):N()},null)}function mp(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function UT(e){let t=T.useContext(fs);return He(t,mp(e)),t}function BT(e){let t=T.useContext(Ou);return He(t,mp(e)),t}function VT(e){let t=T.useContext(Cn);return He(t,mp(e)),t}function pp(e){let t=VT(e),r=t.matches[t.matches.length-1];return He(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function HT(){return pp("useRouteId")}function FT(){let e=T.useContext(hp),t=BT("useRouteError"),r=pp("useRouteError");return e!==void 0?e:t.errors?.[r]}function qT(){let{router:e}=UT("useNavigate"),t=pp("useNavigate"),r=T.useRef(!1);return t5(()=>{r.current=!0}),T.useCallback(async(l,c={})=>{En(r.current,e5),r.current&&(typeof l=="number"?e.navigate(l):await e.navigate(l,{fromRouteId:t,...c}))},[e,t])}var jv={};function i5(e,t,r){!t&&!jv[e]&&(jv[e]=!0,En(!1,r))}T.memo(GT);function GT({routes:e,future:t,state:r}){return n5(e,void 0,r,t)}function bm({to:e,replace:t,state:r,relative:s}){He(hs(),"<Navigate> may be used only in the context of a <Router> component.");let{static:l}=T.useContext(Tn);En(!l,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:c}=T.useContext(Cn),{pathname:f}=An(),p=Si(),m=fp(e,dp(c),f,s==="path"),g=JSON.stringify(m);return T.useEffect(()=>{p(JSON.parse(g),{replace:t,state:r,relative:s})},[p,g,s,t,r]),null}function bt(e){He(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function YT({basename:e="/",children:t=null,location:r,navigationType:s="POP",navigator:l,static:c=!1}){He(!hs(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=e.replace(/^\/*/,"/"),p=T.useMemo(()=>({basename:f,navigator:l,static:c,future:{}}),[f,l,c]);typeof r=="string"&&(r=ds(r));let{pathname:m="/",search:g="",hash:y="",state:x=null,key:w="default"}=r,C=T.useMemo(()=>{let R=yi(m,f);return R==null?null:{location:{pathname:R,search:g,hash:y,state:x,key:w},navigationType:s}},[f,m,g,y,x,w,s]);return En(C!=null,`<Router basename="${f}"> is not able to match the URL "${m}${g}${y}" because it does not start with the basename, so the <Router> won't render anything.`),C==null?null:T.createElement(Tn.Provider,{value:p},T.createElement(Xo.Provider,{children:t,value:C}))}function KT({children:e,location:t}){return NT(wm(e),t)}function wm(e,t=[]){let r=[];return T.Children.forEach(e,(s,l)=>{if(!T.isValidElement(s))return;let c=[...t,l];if(s.type===T.Fragment){r.push.apply(r,wm(s.props.children,c));return}He(s.type===bt,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),He(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=wm(s.props.children,c)),r.push(f)}),r}var Vc="get",Hc="application/x-www-form-urlencoded";function Nu(e){return e!=null&&typeof e.tagName=="string"}function XT(e){return Nu(e)&&e.tagName.toLowerCase()==="button"}function ZT(e){return Nu(e)&&e.tagName.toLowerCase()==="form"}function QT(e){return Nu(e)&&e.tagName.toLowerCase()==="input"}function WT(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function JT(e,t){return e.button===0&&(!t||t==="_self")&&!WT(e)}var Cc=null;function e8(){if(Cc===null)try{new FormData(document.createElement("form"),0),Cc=!1}catch{Cc=!0}return Cc}var t8=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function gh(e){return e!=null&&!t8.has(e)?(En(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Hc}"`),null):e}function n8(e,t){let r,s,l,c,f;if(ZT(e)){let p=e.getAttribute("action");s=p?yi(p,t):null,r=e.getAttribute("method")||Vc,l=gh(e.getAttribute("enctype"))||Hc,c=new FormData(e)}else if(XT(e)||QT(e)&&(e.type==="submit"||e.type==="image")){let p=e.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=e.getAttribute("formaction")||p.getAttribute("action");if(s=m?yi(m,t):null,r=e.getAttribute("formmethod")||p.getAttribute("method")||Vc,l=gh(e.getAttribute("formenctype"))||gh(p.getAttribute("enctype"))||Hc,c=new FormData(p,e),!e8()){let{name:g,type:y,value:x}=e;if(y==="image"){let w=g?`${g}.`:"";c.append(`${w}x`,"0"),c.append(`${w}y`,"0")}else g&&c.append(g,x)}}else{if(Nu(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=Vc,s=null,l=Hc,f=e}return c&&l==="text/plain"&&(f=c,c=void 0),{action:s,method:r.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function gp(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function i8(e,t,r){let s=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return s.pathname==="/"?s.pathname=`_root.${r}`:t&&yi(s.pathname,t)==="/"?s.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${r}`,s}async function r8(e,t){if(e.id in t)return t[e.id];try{let r=await import(e.module);return t[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function a8(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function s8(e,t,r){let s=await Promise.all(e.map(async l=>{let c=t.routes[l.route.id];if(c){let f=await r8(c,r);return f.links?f.links():[]}return[]}));return u8(s.flat(1).filter(a8).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function Rv(e,t,r,s,l,c){let f=(m,g)=>r[g]?m.route.id!==r[g].route.id:!0,p=(m,g)=>r[g].pathname!==m.pathname||r[g].route.path?.endsWith("*")&&r[g].params["*"]!==m.params["*"];return c==="assets"?t.filter((m,g)=>f(m,g)||p(m,g)):c==="data"?t.filter((m,g)=>{let y=s.routes[m.route.id];if(!y||!y.hasLoader)return!1;if(f(m,g)||p(m,g))return!0;if(m.route.shouldRevalidate){let x=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:r[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function o8(e,t,{includeHydrateFallback:r}={}){return l8(e.map(s=>{let l=t.routes[s.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),r&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function l8(e){return[...new Set(e)]}function c8(e){let t={},r=Object.keys(e).sort();for(let s of r)t[s]=e[s];return t}function u8(e,t){let r=new Set;return new Set(t),e.reduce((s,l)=>{let c=JSON.stringify(c8(l));return r.has(c)||(r.add(c),s.push({key:c,link:l})),s},[])}function r5(){let e=T.useContext(fs);return gp(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function d8(){let e=T.useContext(Ou);return gp(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var yp=T.createContext(void 0);yp.displayName="FrameworkContext";function a5(){let e=T.useContext(yp);return gp(e,"You must render this element inside a <HydratedRouter> element"),e}function f8(e,t){let r=T.useContext(yp),[s,l]=T.useState(!1),[c,f]=T.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:g,onMouseLeave:y,onTouchStart:x}=t,w=T.useRef(null);T.useEffect(()=>{if(e==="render"&&f(!0),e==="viewport"){let O=_=>{_.forEach(U=>{f(U.isIntersecting)})},N=new IntersectionObserver(O,{threshold:.5});return w.current&&N.observe(w.current),()=>{N.disconnect()}}},[e]),T.useEffect(()=>{if(s){let O=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(O)}}},[s]);let C=()=>{l(!0)},R=()=>{l(!1),f(!1)};return r?e!=="intent"?[c,w,{}]:[c,w,{onFocus:xo(p,C),onBlur:xo(m,R),onMouseEnter:xo(g,C),onMouseLeave:xo(y,R),onTouchStart:xo(x,C)}]:[!1,w,{}]}function xo(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function h8({page:e,...t}){let{router:r}=r5(),s=T.useMemo(()=>Xb(r.routes,e,r.basename),[r.routes,e,r.basename]);return s?T.createElement(p8,{page:e,matches:s,...t}):null}function m8(e){let{manifest:t,routeModules:r}=a5(),[s,l]=T.useState([]);return T.useEffect(()=>{let c=!1;return s8(e,t,r).then(f=>{c||l(f)}),()=>{c=!0}},[e,t,r]),s}function p8({page:e,matches:t,...r}){let s=An(),{manifest:l,routeModules:c}=a5(),{basename:f}=r5(),{loaderData:p,matches:m}=d8(),g=T.useMemo(()=>Rv(e,t,m,l,s,"data"),[e,t,m,l,s]),y=T.useMemo(()=>Rv(e,t,m,l,s,"assets"),[e,t,m,l,s]),x=T.useMemo(()=>{if(e===s.pathname+s.search+s.hash)return[];let R=new Set,O=!1;if(t.forEach(_=>{let U=l.routes[_.route.id];!U||!U.hasLoader||(!g.some(z=>z.route.id===_.route.id)&&_.route.id in p&&c[_.route.id]?.shouldRevalidate||U.hasClientLoader?O=!0:R.add(_.route.id))}),R.size===0)return[];let N=i8(e,f,"data");return O&&R.size>0&&N.searchParams.set("_routes",t.filter(_=>R.has(_.route.id)).map(_=>_.route.id).join(",")),[N.pathname+N.search]},[f,p,s,l,g,t,e,c]),w=T.useMemo(()=>o8(y,l),[y,l]),C=m8(y);return T.createElement(T.Fragment,null,x.map(R=>T.createElement("link",{key:R,rel:"prefetch",as:"fetch",href:R,...r})),w.map(R=>T.createElement("link",{key:R,rel:"modulepreload",href:R,...r})),C.map(({key:R,link:O})=>T.createElement("link",{key:R,...O})))}function g8(...e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var s5=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{s5&&(window.__reactRouterVersion="7.7.1")}catch{}function y8({basename:e,children:t,window:r}){let s=T.useRef();s.current==null&&(s.current=rT({window:r,v5Compat:!0}));let l=s.current,[c,f]=T.useState({action:l.action,location:l.location}),p=T.useCallback(m=>{T.startTransition(()=>f(m))},[f]);return T.useLayoutEffect(()=>l.listen(p),[l,p]),T.createElement(YT,{basename:e,children:t,location:c.location,navigationType:c.action,navigator:l})}var o5=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Kt=T.forwardRef(function({onClick:t,discover:r="render",prefetch:s="none",relative:l,reloadDocument:c,replace:f,state:p,target:m,to:g,preventScrollReset:y,viewTransition:x,...w},C){let{basename:R}=T.useContext(Tn),O=typeof g=="string"&&o5.test(g),N,_=!1;if(typeof g=="string"&&O&&(N=g,s5))try{let ne=new URL(window.location.href),re=g.startsWith("//")?new URL(ne.protocol+g):new URL(g),ye=yi(re.pathname,R);re.origin===ne.origin&&ye!=null?g=ye+re.search+re.hash:_=!0}catch{En(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let U=MT(g,{relative:l}),[z,Q,G]=f8(s,w),Y=w8(g,{replace:f,state:p,target:m,preventScrollReset:y,relative:l,viewTransition:x});function H(ne){t&&t(ne),ne.defaultPrevented||Y(ne)}let X=T.createElement("a",{...w,...G,href:N||U,onClick:_||c?t:H,ref:g8(C,Q),target:m,"data-discover":!O&&r==="render"?"true":void 0});return z&&!O?T.createElement(T.Fragment,null,X,T.createElement(h8,{page:U})):X});Kt.displayName="Link";var v8=T.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:s="",end:l=!1,style:c,to:f,viewTransition:p,children:m,...g},y){let x=Zo(f,{relative:g.relative}),w=An(),C=T.useContext(Ou),{navigator:R,basename:O}=T.useContext(Tn),N=C!=null&&A8(x)&&p===!0,_=R.encodeLocation?R.encodeLocation(x).pathname:x.pathname,U=w.pathname,z=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;r||(U=U.toLowerCase(),z=z?z.toLowerCase():null,_=_.toLowerCase()),z&&O&&(z=yi(z,O)||z);const Q=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let G=U===_||!l&&U.startsWith(_)&&U.charAt(Q)==="/",Y=z!=null&&(z===_||!l&&z.startsWith(_)&&z.charAt(_.length)==="/"),H={isActive:G,isPending:Y,isTransitioning:N},X=G?t:void 0,ne;typeof s=="function"?ne=s(H):ne=[s,G?"active":null,Y?"pending":null,N?"transitioning":null].filter(Boolean).join(" ");let re=typeof c=="function"?c(H):c;return T.createElement(Kt,{...g,"aria-current":X,className:ne,ref:y,style:re,to:f,viewTransition:p},typeof m=="function"?m(H):m)});v8.displayName="NavLink";var x8=T.forwardRef(({discover:e="render",fetcherKey:t,navigate:r,reloadDocument:s,replace:l,state:c,method:f=Vc,action:p,onSubmit:m,relative:g,preventScrollReset:y,viewTransition:x,...w},C)=>{let R=T8(),O=C8(p,{relative:g}),N=f.toLowerCase()==="get"?"get":"post",_=typeof p=="string"&&o5.test(p),U=z=>{if(m&&m(z),z.defaultPrevented)return;z.preventDefault();let Q=z.nativeEvent.submitter,G=Q?.getAttribute("formmethod")||f;R(Q||z.currentTarget,{fetcherKey:t,method:G,navigate:r,replace:l,state:c,relative:g,preventScrollReset:y,viewTransition:x})};return T.createElement("form",{ref:C,method:N,action:O,onSubmit:s?m:U,...w,"data-discover":!_&&e==="render"?"true":void 0})});x8.displayName="Form";function b8(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function l5(e){let t=T.useContext(fs);return He(t,b8(e)),t}function w8(e,{target:t,replace:r,state:s,preventScrollReset:l,relative:c,viewTransition:f}={}){let p=Si(),m=An(),g=Zo(e,{relative:c});return T.useCallback(y=>{if(JT(y,t)){y.preventDefault();let x=r!==void 0?r:zo(m)===zo(g);p(e,{replace:x,state:s,preventScrollReset:l,relative:c,viewTransition:f})}},[m,p,g,r,s,t,e,l,c,f])}var S8=0,E8=()=>`__${String(++S8)}__`;function T8(){let{router:e}=l5("useSubmit"),{basename:t}=T.useContext(Tn),r=HT();return T.useCallback(async(s,l={})=>{let{action:c,method:f,encType:p,formData:m,body:g}=n8(s,t);if(l.navigate===!1){let y=l.fetcherKey||E8();await e.fetch(y,r,l.action||c,{preventScrollReset:l.preventScrollReset,formData:m,body:g,formMethod:l.method||f,formEncType:l.encType||p,flushSync:l.flushSync})}else await e.navigate(l.action||c,{preventScrollReset:l.preventScrollReset,formData:m,body:g,formMethod:l.method||f,formEncType:l.encType||p,replace:l.replace,state:l.state,fromRouteId:r,flushSync:l.flushSync,viewTransition:l.viewTransition})},[e,t,r])}function C8(e,{relative:t}={}){let{basename:r}=T.useContext(Tn),s=T.useContext(Cn);He(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),c={...Zo(e||".",{relative:t})},f=An();if(e==null){c.search=f.search;let p=new URLSearchParams(c.search),m=p.getAll("index");if(m.some(y=>y==="")){p.delete("index"),m.filter(x=>x).forEach(x=>p.append("index",x));let y=p.toString();c.search=y?`?${y}`:""}}return(!e||e===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(c.pathname=c.pathname==="/"?r:mi([r,c.pathname])),zo(c)}function A8(e,{relative:t}={}){let r=T.useContext(Jb);He(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=l5("useViewTransitionState"),l=Zo(e,{relative:t});if(!r.isTransitioning)return!1;let c=yi(r.currentLocation.pathname,s)||r.currentLocation.pathname,f=yi(r.nextLocation.pathname,s)||r.nextLocation.pathname;return ru(l.pathname,f)!=null||ru(l.pathname,c)!=null}const vp=T.createContext({});function xp(e){const t=T.useRef(null);return t.current===null&&(t.current=e()),t.current}const bp=typeof window<"u",c5=bp?T.useLayoutEffect:T.useEffect,Lu=T.createContext(null);function wp(e,t){e.indexOf(t)===-1&&e.push(t)}function Sp(e,t){const r=e.indexOf(t);r>-1&&e.splice(r,1)}const vi=(e,t,r)=>r>t?t:r<e?e:r;let Ep=()=>{};const xi={},u5=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function d5(e){return typeof e=="object"&&e!==null}const f5=e=>/^0[^.\s]+$/u.test(e);function Tp(e){let t;return()=>(t===void 0&&(t=e()),t)}const fn=e=>e,_8=(e,t)=>r=>t(e(r)),Qo=(...e)=>e.reduce(_8),Po=(e,t,r)=>{const s=t-e;return s===0?1:(r-e)/s};class Cp{constructor(){this.subscriptions=[]}add(t){return wp(this.subscriptions,t),()=>Sp(this.subscriptions,t)}notify(t,r,s){const l=this.subscriptions.length;if(l)if(l===1)this.subscriptions[0](t,r,s);else for(let c=0;c<l;c++){const f=this.subscriptions[c];f&&f(t,r,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const $n=e=>e*1e3,dn=e=>e/1e3;function h5(e,t){return t?e*(1e3/t):0}const m5=(e,t,r)=>(((1-3*r+3*t)*e+(3*r-6*t))*e+3*t)*e,j8=1e-7,R8=12;function D8(e,t,r,s,l){let c,f,p=0;do f=t+(r-t)/2,c=m5(f,s,l)-e,c>0?r=f:t=f;while(Math.abs(c)>j8&&++p<R8);return f}function Wo(e,t,r,s){if(e===t&&r===s)return fn;const l=c=>D8(c,0,1,e,r);return c=>c===0||c===1?c:m5(l(c),t,s)}const p5=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,g5=e=>t=>1-e(1-t),y5=Wo(.33,1.53,.69,.99),Ap=g5(y5),v5=p5(Ap),x5=e=>(e*=2)<1?.5*Ap(e):.5*(2-Math.pow(2,-10*(e-1))),_p=e=>1-Math.sin(Math.acos(e)),b5=g5(_p),w5=p5(_p),M8=Wo(.42,0,1,1),k8=Wo(0,0,.58,1),S5=Wo(.42,0,.58,1),O8=e=>Array.isArray(e)&&typeof e[0]!="number",E5=e=>Array.isArray(e)&&typeof e[0]=="number",N8={linear:fn,easeIn:M8,easeInOut:S5,easeOut:k8,circIn:_p,circInOut:w5,circOut:b5,backIn:Ap,backInOut:v5,backOut:y5,anticipate:x5},L8=e=>typeof e=="string",Dv=e=>{if(E5(e)){Ep(e.length===4);const[t,r,s,l]=e;return Wo(t,r,s,l)}else if(L8(e))return N8[e];return e},Ac=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function z8(e,t){let r=new Set,s=new Set,l=!1,c=!1;const f=new WeakSet;let p={delta:0,timestamp:0,isProcessing:!1};function m(y){f.has(y)&&(g.schedule(y),e()),y(p)}const g={schedule:(y,x=!1,w=!1)=>{const R=w&&l?r:s;return x&&f.add(y),R.has(y)||R.add(y),y},cancel:y=>{s.delete(y),f.delete(y)},process:y=>{if(p=y,l){c=!0;return}l=!0,[r,s]=[s,r],r.forEach(m),r.clear(),l=!1,c&&(c=!1,g.process(y))}};return g}const P8=40;function T5(e,t){let r=!1,s=!0;const l={delta:0,timestamp:0,isProcessing:!1},c=()=>r=!0,f=Ac.reduce((z,Q)=>(z[Q]=z8(c),z),{}),{setup:p,read:m,resolveKeyframes:g,preUpdate:y,update:x,preRender:w,render:C,postRender:R}=f,O=()=>{const z=xi.useManualTiming?l.timestamp:performance.now();r=!1,xi.useManualTiming||(l.delta=s?1e3/60:Math.max(Math.min(z-l.timestamp,P8),1)),l.timestamp=z,l.isProcessing=!0,p.process(l),m.process(l),g.process(l),y.process(l),x.process(l),w.process(l),C.process(l),R.process(l),l.isProcessing=!1,r&&t&&(s=!1,e(O))},N=()=>{r=!0,s=!0,l.isProcessing||e(O)};return{schedule:Ac.reduce((z,Q)=>{const G=f[Q];return z[Q]=(Y,H=!1,X=!1)=>(r||N(),G.schedule(Y,H,X)),z},{}),cancel:z=>{for(let Q=0;Q<Ac.length;Q++)f[Ac[Q]].cancel(z)},state:l,steps:f}}const{schedule:Ve,cancel:dr,state:pt,steps:yh}=T5(typeof requestAnimationFrame<"u"?requestAnimationFrame:fn,!0);let Fc;function I8(){Fc=void 0}const Pt={now:()=>(Fc===void 0&&Pt.set(pt.isProcessing||xi.useManualTiming?pt.timestamp:performance.now()),Fc),set:e=>{Fc=e,queueMicrotask(I8)}},C5=e=>t=>typeof t=="string"&&t.startsWith(e),jp=C5("--"),$8=C5("var(--"),Rp=e=>$8(e)?U8.test(e.split("/*")[0].trim()):!1,U8=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,ms={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Io={...ms,transform:e=>vi(0,1,e)},_c={...ms,default:1},_o=e=>Math.round(e*1e5)/1e5,Dp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function B8(e){return e==null}const V8=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Mp=(e,t)=>r=>!!(typeof r=="string"&&V8.test(r)&&r.startsWith(e)||t&&!B8(r)&&Object.prototype.hasOwnProperty.call(r,t)),A5=(e,t,r)=>s=>{if(typeof s!="string")return s;const[l,c,f,p]=s.match(Dp);return{[e]:parseFloat(l),[t]:parseFloat(c),[r]:parseFloat(f),alpha:p!==void 0?parseFloat(p):1}},H8=e=>vi(0,255,e),vh={...ms,transform:e=>Math.round(H8(e))},Ur={test:Mp("rgb","red"),parse:A5("red","green","blue"),transform:({red:e,green:t,blue:r,alpha:s=1})=>"rgba("+vh.transform(e)+", "+vh.transform(t)+", "+vh.transform(r)+", "+_o(Io.transform(s))+")"};function F8(e){let t="",r="",s="",l="";return e.length>5?(t=e.substring(1,3),r=e.substring(3,5),s=e.substring(5,7),l=e.substring(7,9)):(t=e.substring(1,2),r=e.substring(2,3),s=e.substring(3,4),l=e.substring(4,5),t+=t,r+=r,s+=s,l+=l),{red:parseInt(t,16),green:parseInt(r,16),blue:parseInt(s,16),alpha:l?parseInt(l,16)/255:1}}const Sm={test:Mp("#"),parse:F8,transform:Ur.transform},Jo=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),er=Jo("deg"),Un=Jo("%"),fe=Jo("px"),q8=Jo("vh"),G8=Jo("vw"),Mv={...Un,parse:e=>Un.parse(e)/100,transform:e=>Un.transform(e*100)},qa={test:Mp("hsl","hue"),parse:A5("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:r,alpha:s=1})=>"hsla("+Math.round(e)+", "+Un.transform(_o(t))+", "+Un.transform(_o(r))+", "+_o(Io.transform(s))+")"},tt={test:e=>Ur.test(e)||Sm.test(e)||qa.test(e),parse:e=>Ur.test(e)?Ur.parse(e):qa.test(e)?qa.parse(e):Sm.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Ur.transform(e):qa.transform(e),getAnimatableNone:e=>{const t=tt.parse(e);return t.alpha=0,tt.transform(t)}},Y8=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function K8(e){return isNaN(e)&&typeof e=="string"&&(e.match(Dp)?.length||0)+(e.match(Y8)?.length||0)>0}const _5="number",j5="color",X8="var",Z8="var(",kv="${}",Q8=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function $o(e){const t=e.toString(),r=[],s={color:[],number:[],var:[]},l=[];let c=0;const p=t.replace(Q8,m=>(tt.test(m)?(s.color.push(c),l.push(j5),r.push(tt.parse(m))):m.startsWith(Z8)?(s.var.push(c),l.push(X8),r.push(m)):(s.number.push(c),l.push(_5),r.push(parseFloat(m))),++c,kv)).split(kv);return{values:r,split:p,indexes:s,types:l}}function R5(e){return $o(e).values}function D5(e){const{split:t,types:r}=$o(e),s=t.length;return l=>{let c="";for(let f=0;f<s;f++)if(c+=t[f],l[f]!==void 0){const p=r[f];p===_5?c+=_o(l[f]):p===j5?c+=tt.transform(l[f]):c+=l[f]}return c}}const W8=e=>typeof e=="number"?0:tt.test(e)?tt.getAnimatableNone(e):e;function J8(e){const t=R5(e);return D5(e)(t.map(W8))}const fr={test:K8,parse:R5,createTransformer:D5,getAnimatableNone:J8};function xh(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+(t-e)*6*r:r<1/2?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function eC({hue:e,saturation:t,lightness:r,alpha:s}){e/=360,t/=100,r/=100;let l=0,c=0,f=0;if(!t)l=c=f=r;else{const p=r<.5?r*(1+t):r+t-r*t,m=2*r-p;l=xh(m,p,e+1/3),c=xh(m,p,e),f=xh(m,p,e-1/3)}return{red:Math.round(l*255),green:Math.round(c*255),blue:Math.round(f*255),alpha:s}}function au(e,t){return r=>r>0?t:e}const Ge=(e,t,r)=>e+(t-e)*r,bh=(e,t,r)=>{const s=e*e,l=r*(t*t-s)+s;return l<0?0:Math.sqrt(l)},tC=[Sm,Ur,qa],nC=e=>tC.find(t=>t.test(e));function Ov(e){const t=nC(e);if(!t)return!1;let r=t.parse(e);return t===qa&&(r=eC(r)),r}const Nv=(e,t)=>{const r=Ov(e),s=Ov(t);if(!r||!s)return au(e,t);const l={...r};return c=>(l.red=bh(r.red,s.red,c),l.green=bh(r.green,s.green,c),l.blue=bh(r.blue,s.blue,c),l.alpha=Ge(r.alpha,s.alpha,c),Ur.transform(l))},Em=new Set(["none","hidden"]);function iC(e,t){return Em.has(e)?r=>r<=0?e:t:r=>r>=1?t:e}function rC(e,t){return r=>Ge(e,t,r)}function kp(e){return typeof e=="number"?rC:typeof e=="string"?Rp(e)?au:tt.test(e)?Nv:oC:Array.isArray(e)?M5:typeof e=="object"?tt.test(e)?Nv:aC:au}function M5(e,t){const r=[...e],s=r.length,l=e.map((c,f)=>kp(c)(c,t[f]));return c=>{for(let f=0;f<s;f++)r[f]=l[f](c);return r}}function aC(e,t){const r={...e,...t},s={};for(const l in r)e[l]!==void 0&&t[l]!==void 0&&(s[l]=kp(e[l])(e[l],t[l]));return l=>{for(const c in s)r[c]=s[c](l);return r}}function sC(e,t){const r=[],s={color:0,var:0,number:0};for(let l=0;l<t.values.length;l++){const c=t.types[l],f=e.indexes[c][s[c]],p=e.values[f]??0;r[l]=p,s[c]++}return r}const oC=(e,t)=>{const r=fr.createTransformer(t),s=$o(e),l=$o(t);return s.indexes.var.length===l.indexes.var.length&&s.indexes.color.length===l.indexes.color.length&&s.indexes.number.length>=l.indexes.number.length?Em.has(e)&&!l.values.length||Em.has(t)&&!s.values.length?iC(e,t):Qo(M5(sC(s,l),l.values),r):au(e,t)};function k5(e,t,r){return typeof e=="number"&&typeof t=="number"&&typeof r=="number"?Ge(e,t,r):kp(e)(e,t)}const lC=e=>{const t=({timestamp:r})=>e(r);return{start:(r=!0)=>Ve.update(t,r),stop:()=>dr(t),now:()=>pt.isProcessing?pt.timestamp:Pt.now()}},O5=(e,t,r=10)=>{let s="";const l=Math.max(Math.round(t/r),2);for(let c=0;c<l;c++)s+=Math.round(e(c/(l-1))*1e4)/1e4+", ";return`linear(${s.substring(0,s.length-2)})`},su=2e4;function Op(e){let t=0;const r=50;let s=e.next(t);for(;!s.done&&t<su;)t+=r,s=e.next(t);return t>=su?1/0:t}function cC(e,t=100,r){const s=r({...e,keyframes:[0,t]}),l=Math.min(Op(s),su);return{type:"keyframes",ease:c=>s.next(l*c).value/t,duration:dn(l)}}const uC=5;function N5(e,t,r){const s=Math.max(t-uC,0);return h5(r-e(s),t-s)}const Xe={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},wh=.001;function dC({duration:e=Xe.duration,bounce:t=Xe.bounce,velocity:r=Xe.velocity,mass:s=Xe.mass}){let l,c,f=1-t;f=vi(Xe.minDamping,Xe.maxDamping,f),e=vi(Xe.minDuration,Xe.maxDuration,dn(e)),f<1?(l=g=>{const y=g*f,x=y*e,w=y-r,C=Tm(g,f),R=Math.exp(-x);return wh-w/C*R},c=g=>{const x=g*f*e,w=x*r+r,C=Math.pow(f,2)*Math.pow(g,2)*e,R=Math.exp(-x),O=Tm(Math.pow(g,2),f);return(-l(g)+wh>0?-1:1)*((w-C)*R)/O}):(l=g=>{const y=Math.exp(-g*e),x=(g-r)*e+1;return-wh+y*x},c=g=>{const y=Math.exp(-g*e),x=(r-g)*(e*e);return y*x});const p=5/e,m=hC(l,c,p);if(e=$n(e),isNaN(m))return{stiffness:Xe.stiffness,damping:Xe.damping,duration:e};{const g=Math.pow(m,2)*s;return{stiffness:g,damping:f*2*Math.sqrt(s*g),duration:e}}}const fC=12;function hC(e,t,r){let s=r;for(let l=1;l<fC;l++)s=s-e(s)/t(s);return s}function Tm(e,t){return e*Math.sqrt(1-t*t)}const mC=["duration","bounce"],pC=["stiffness","damping","mass"];function Lv(e,t){return t.some(r=>e[r]!==void 0)}function gC(e){let t={velocity:Xe.velocity,stiffness:Xe.stiffness,damping:Xe.damping,mass:Xe.mass,isResolvedFromDuration:!1,...e};if(!Lv(e,pC)&&Lv(e,mC))if(e.visualDuration){const r=e.visualDuration,s=2*Math.PI/(r*1.2),l=s*s,c=2*vi(.05,1,1-(e.bounce||0))*Math.sqrt(l);t={...t,mass:Xe.mass,stiffness:l,damping:c}}else{const r=dC(e);t={...t,...r,mass:Xe.mass},t.isResolvedFromDuration=!0}return t}function ou(e=Xe.visualDuration,t=Xe.bounce){const r=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:s,restDelta:l}=r;const c=r.keyframes[0],f=r.keyframes[r.keyframes.length-1],p={done:!1,value:c},{stiffness:m,damping:g,mass:y,duration:x,velocity:w,isResolvedFromDuration:C}=gC({...r,velocity:-dn(r.velocity||0)}),R=w||0,O=g/(2*Math.sqrt(m*y)),N=f-c,_=dn(Math.sqrt(m/y)),U=Math.abs(N)<5;s||(s=U?Xe.restSpeed.granular:Xe.restSpeed.default),l||(l=U?Xe.restDelta.granular:Xe.restDelta.default);let z;if(O<1){const G=Tm(_,O);z=Y=>{const H=Math.exp(-O*_*Y);return f-H*((R+O*_*N)/G*Math.sin(G*Y)+N*Math.cos(G*Y))}}else if(O===1)z=G=>f-Math.exp(-_*G)*(N+(R+_*N)*G);else{const G=_*Math.sqrt(O*O-1);z=Y=>{const H=Math.exp(-O*_*Y),X=Math.min(G*Y,300);return f-H*((R+O*_*N)*Math.sinh(X)+G*N*Math.cosh(X))/G}}const Q={calculatedDuration:C&&x||null,next:G=>{const Y=z(G);if(C)p.done=G>=x;else{let H=G===0?R:0;O<1&&(H=G===0?$n(R):N5(z,G,Y));const X=Math.abs(H)<=s,ne=Math.abs(f-Y)<=l;p.done=X&&ne}return p.value=p.done?f:Y,p},toString:()=>{const G=Math.min(Op(Q),su),Y=O5(H=>Q.next(G*H).value,G,30);return G+"ms "+Y},toTransition:()=>{}};return Q}ou.applyToOptions=e=>{const t=cC(e,100,ou);return e.ease=t.ease,e.duration=$n(t.duration),e.type="keyframes",e};function Cm({keyframes:e,velocity:t=0,power:r=.8,timeConstant:s=325,bounceDamping:l=10,bounceStiffness:c=500,modifyTarget:f,min:p,max:m,restDelta:g=.5,restSpeed:y}){const x=e[0],w={done:!1,value:x},C=X=>p!==void 0&&X<p||m!==void 0&&X>m,R=X=>p===void 0?m:m===void 0||Math.abs(p-X)<Math.abs(m-X)?p:m;let O=r*t;const N=x+O,_=f===void 0?N:f(N);_!==N&&(O=_-x);const U=X=>-O*Math.exp(-X/s),z=X=>_+U(X),Q=X=>{const ne=U(X),re=z(X);w.done=Math.abs(ne)<=g,w.value=w.done?_:re};let G,Y;const H=X=>{C(w.value)&&(G=X,Y=ou({keyframes:[w.value,R(w.value)],velocity:N5(z,X,w.value),damping:l,stiffness:c,restDelta:g,restSpeed:y}))};return H(0),{calculatedDuration:null,next:X=>{let ne=!1;return!Y&&G===void 0&&(ne=!0,Q(X),H(X)),G!==void 0&&X>=G?Y.next(X-G):(!ne&&Q(X),w)}}}function yC(e,t,r){const s=[],l=r||xi.mix||k5,c=e.length-1;for(let f=0;f<c;f++){let p=l(e[f],e[f+1]);if(t){const m=Array.isArray(t)?t[f]||fn:t;p=Qo(m,p)}s.push(p)}return s}function vC(e,t,{clamp:r=!0,ease:s,mixer:l}={}){const c=e.length;if(Ep(c===t.length),c===1)return()=>t[0];if(c===2&&t[0]===t[1])return()=>t[1];const f=e[0]===e[1];e[0]>e[c-1]&&(e=[...e].reverse(),t=[...t].reverse());const p=yC(t,s,l),m=p.length,g=y=>{if(f&&y<e[0])return t[0];let x=0;if(m>1)for(;x<e.length-2&&!(y<e[x+1]);x++);const w=Po(e[x],e[x+1],y);return p[x](w)};return r?y=>g(vi(e[0],e[c-1],y)):g}function xC(e,t){const r=e[e.length-1];for(let s=1;s<=t;s++){const l=Po(0,t,s);e.push(Ge(r,1,l))}}function bC(e){const t=[0];return xC(t,e.length-1),t}function wC(e,t){return e.map(r=>r*t)}function SC(e,t){return e.map(()=>t||S5).splice(0,e.length-1)}function jo({duration:e=300,keyframes:t,times:r,ease:s="easeInOut"}){const l=O8(s)?s.map(Dv):Dv(s),c={done:!1,value:t[0]},f=wC(r&&r.length===t.length?r:bC(t),e),p=vC(f,t,{ease:Array.isArray(l)?l:SC(t,l)});return{calculatedDuration:e,next:m=>(c.value=p(m),c.done=m>=e,c)}}const EC=e=>e!==null;function Np(e,{repeat:t,repeatType:r="loop"},s,l=1){const c=e.filter(EC),p=l<0||t&&r!=="loop"&&t%2===1?0:c.length-1;return!p||s===void 0?c[p]:s}const TC={decay:Cm,inertia:Cm,tween:jo,keyframes:jo,spring:ou};function L5(e){typeof e.type=="string"&&(e.type=TC[e.type])}class Lp{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,r){return this.finished.then(t,r)}}const CC=e=>e/100;class zp extends Lp{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:r}=this.options;r&&r.updatedAt!==Pt.now()&&this.tick(Pt.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;L5(t);const{type:r=jo,repeat:s=0,repeatDelay:l=0,repeatType:c,velocity:f=0}=t;let{keyframes:p}=t;const m=r||jo;m!==jo&&typeof p[0]!="number"&&(this.mixKeyframes=Qo(CC,k5(p[0],p[1])),p=[0,100]);const g=m({...t,keyframes:p});c==="mirror"&&(this.mirroredGenerator=m({...t,keyframes:[...p].reverse(),velocity:-f})),g.calculatedDuration===null&&(g.calculatedDuration=Op(g));const{calculatedDuration:y}=g;this.calculatedDuration=y,this.resolvedDuration=y+l,this.totalDuration=this.resolvedDuration*(s+1)-l,this.generator=g}updateTime(t){const r=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=r}tick(t,r=!1){const{generator:s,totalDuration:l,mixKeyframes:c,mirroredGenerator:f,resolvedDuration:p,calculatedDuration:m}=this;if(this.startTime===null)return s.next(0);const{delay:g=0,keyframes:y,repeat:x,repeatType:w,repeatDelay:C,type:R,onUpdate:O,finalKeyframe:N}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-l/this.speed,this.startTime)),r?this.currentTime=t:this.updateTime(t);const _=this.currentTime-g*(this.playbackSpeed>=0?1:-1),U=this.playbackSpeed>=0?_<0:_>l;this.currentTime=Math.max(_,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=l);let z=this.currentTime,Q=s;if(x){const X=Math.min(this.currentTime,l)/p;let ne=Math.floor(X),re=X%1;!re&&X>=1&&(re=1),re===1&&ne--,ne=Math.min(ne,x+1),!!(ne%2)&&(w==="reverse"?(re=1-re,C&&(re-=C/p)):w==="mirror"&&(Q=f)),z=vi(0,1,re)*p}const G=U?{done:!1,value:y[0]}:Q.next(z);c&&(G.value=c(G.value));let{done:Y}=G;!U&&m!==null&&(Y=this.playbackSpeed>=0?this.currentTime>=l:this.currentTime<=0);const H=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&Y);return H&&R!==Cm&&(G.value=Np(y,this.options,N,this.speed)),O&&O(G.value),H&&this.finish(),G}then(t,r){return this.finished.then(t,r)}get duration(){return dn(this.calculatedDuration)}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+dn(t)}get time(){return dn(this.currentTime)}set time(t){t=$n(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(t){this.updateTime(Pt.now());const r=this.playbackSpeed!==t;this.playbackSpeed=t,r&&(this.time=dn(this.currentTime))}play(){if(this.isStopped)return;const{driver:t=lC,startTime:r}=this.options;this.driver||(this.driver=t(l=>this.tick(l))),this.options.onPlay?.();const s=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=s):this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime||(this.startTime=r??s),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Pt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),t.observe(this)}}function AC(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}const Br=e=>e*180/Math.PI,Am=e=>{const t=Br(Math.atan2(e[1],e[0]));return _m(t)},_C={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Am,rotateZ:Am,skewX:e=>Br(Math.atan(e[1])),skewY:e=>Br(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},_m=e=>(e=e%360,e<0&&(e+=360),e),zv=Am,Pv=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Iv=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),jC={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Pv,scaleY:Iv,scale:e=>(Pv(e)+Iv(e))/2,rotateX:e=>_m(Br(Math.atan2(e[6],e[5]))),rotateY:e=>_m(Br(Math.atan2(-e[2],e[0]))),rotateZ:zv,rotate:zv,skewX:e=>Br(Math.atan(e[4])),skewY:e=>Br(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function jm(e){return e.includes("scale")?1:0}function Rm(e,t){if(!e||e==="none")return jm(t);const r=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let s,l;if(r)s=jC,l=r;else{const p=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);s=_C,l=p}if(!l)return jm(t);const c=s[t],f=l[1].split(",").map(DC);return typeof c=="function"?c(f):f[c]}const RC=(e,t)=>{const{transform:r="none"}=getComputedStyle(e);return Rm(r,t)};function DC(e){return parseFloat(e.trim())}const ps=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],gs=new Set(ps),$v=e=>e===ms||e===fe,MC=new Set(["x","y","z"]),kC=ps.filter(e=>!MC.has(e));function OC(e){const t=[];return kC.forEach(r=>{const s=e.getValue(r);s!==void 0&&(t.push([r,s.get()]),s.set(r.startsWith("scale")?1:0))}),t}const Fr={width:({x:e},{paddingLeft:t="0",paddingRight:r="0"})=>e.max-e.min-parseFloat(t)-parseFloat(r),height:({y:e},{paddingTop:t="0",paddingBottom:r="0"})=>e.max-e.min-parseFloat(t)-parseFloat(r),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>Rm(t,"x"),y:(e,{transform:t})=>Rm(t,"y")};Fr.translateX=Fr.x;Fr.translateY=Fr.y;const qr=new Set;let Dm=!1,Mm=!1,km=!1;function z5(){if(Mm){const e=Array.from(qr).filter(s=>s.needsMeasurement),t=new Set(e.map(s=>s.element)),r=new Map;t.forEach(s=>{const l=OC(s);l.length&&(r.set(s,l),s.render())}),e.forEach(s=>s.measureInitialState()),t.forEach(s=>{s.render();const l=r.get(s);l&&l.forEach(([c,f])=>{s.getValue(c)?.set(f)})}),e.forEach(s=>s.measureEndState()),e.forEach(s=>{s.suspendedScrollY!==void 0&&window.scrollTo(0,s.suspendedScrollY)})}Mm=!1,Dm=!1,qr.forEach(e=>e.complete(km)),qr.clear()}function P5(){qr.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Mm=!0)})}function NC(){km=!0,P5(),z5(),km=!1}class Pp{constructor(t,r,s,l,c,f=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=r,this.name=s,this.motionValue=l,this.element=c,this.isAsync=f}scheduleResolve(){this.state="scheduled",this.isAsync?(qr.add(this),Dm||(Dm=!0,Ve.read(P5),Ve.resolveKeyframes(z5))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:r,element:s,motionValue:l}=this;if(t[0]===null){const c=l?.get(),f=t[t.length-1];if(c!==void 0)t[0]=c;else if(s&&r){const p=s.readValue(r,f);p!=null&&(t[0]=p)}t[0]===void 0&&(t[0]=f),l&&c===void 0&&l.set(t[0])}AC(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),qr.delete(this)}cancel(){this.state==="scheduled"&&(qr.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const LC=e=>e.startsWith("--");function zC(e,t,r){LC(t)?e.style.setProperty(t,r):e.style[t]=r}const PC=Tp(()=>window.ScrollTimeline!==void 0),IC={};function $C(e,t){const r=Tp(e);return()=>IC[t]??r()}const I5=$C(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Eo=([e,t,r,s])=>`cubic-bezier(${e}, ${t}, ${r}, ${s})`,Uv={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Eo([0,.65,.55,1]),circOut:Eo([.55,0,1,.45]),backIn:Eo([.31,.01,.66,-.59]),backOut:Eo([.33,1.53,.69,.99])};function $5(e,t){if(e)return typeof e=="function"?I5()?O5(e,t):"ease-out":E5(e)?Eo(e):Array.isArray(e)?e.map(r=>$5(r,t)||Uv.easeOut):Uv[e]}function UC(e,t,r,{delay:s=0,duration:l=300,repeat:c=0,repeatType:f="loop",ease:p="easeOut",times:m}={},g=void 0){const y={[t]:r};m&&(y.offset=m);const x=$5(p,l);Array.isArray(x)&&(y.easing=x);const w={delay:s,duration:l,easing:Array.isArray(x)?"linear":x,fill:"both",iterations:c+1,direction:f==="reverse"?"alternate":"normal"};return g&&(w.pseudoElement=g),e.animate(y,w)}function U5(e){return typeof e=="function"&&"applyToOptions"in e}function BC({type:e,...t}){return U5(e)&&I5()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class VC extends Lp{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,!t)return;const{element:r,name:s,keyframes:l,pseudoElement:c,allowFlatten:f=!1,finalKeyframe:p,onComplete:m}=t;this.isPseudoElement=!!c,this.allowFlatten=f,this.options=t,Ep(typeof t.type!="string");const g=BC(t);this.animation=UC(r,s,l,g,c),g.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!c){const y=Np(l,this.options,p,this.speed);this.updateMotionValue?this.updateMotionValue(y):zC(r,s,y),this.animation.cancel()}m?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const t=this.animation.effect?.getComputedTiming?.().duration||0;return dn(Number(t))}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+dn(t)}get time(){return dn(Number(this.animation.currentTime)||0)}set time(t){this.finishedTime=null,this.animation.currentTime=$n(t)}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(t){this.animation.startTime=t}attachTimeline({timeline:t,observe:r}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,t&&PC()?(this.animation.timeline=t,fn):r(this)}}const B5={anticipate:x5,backInOut:v5,circInOut:w5};function HC(e){return e in B5}function FC(e){typeof e.ease=="string"&&HC(e.ease)&&(e.ease=B5[e.ease])}const Bv=10;class qC extends VC{constructor(t){FC(t),L5(t),super(t),t.startTime&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:r,onUpdate:s,onComplete:l,element:c,...f}=this.options;if(!r)return;if(t!==void 0){r.set(t);return}const p=new zp({...f,autoplay:!1}),m=$n(this.finishedTime??this.time);r.setWithVelocity(p.sample(m-Bv).value,p.sample(m).value,Bv),p.stop()}}const Vv=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(fr.test(e)||e==="0")&&!e.startsWith("url("));function GC(e){const t=e[0];if(e.length===1)return!0;for(let r=0;r<e.length;r++)if(e[r]!==t)return!0}function YC(e,t,r,s){const l=e[0];if(l===null)return!1;if(t==="display"||t==="visibility")return!0;const c=e[e.length-1],f=Vv(l,t),p=Vv(c,t);return!f||!p?!1:GC(e)||(r==="spring"||U5(r))&&s}function Om(e){e.duration=0,e.type="keyframes"}const KC=new Set(["opacity","clipPath","filter","transform"]),XC=Tp(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function ZC(e){const{motionValue:t,name:r,repeatDelay:s,repeatType:l,damping:c,type:f}=e;if(!(t?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:m,transformTemplate:g}=t.owner.getProps();return XC()&&r&&KC.has(r)&&(r!=="transform"||!g)&&!m&&!s&&l!=="mirror"&&c!==0&&f!=="inertia"}const QC=40;class WC extends Lp{constructor({autoplay:t=!0,delay:r=0,type:s="keyframes",repeat:l=0,repeatDelay:c=0,repeatType:f="loop",keyframes:p,name:m,motionValue:g,element:y,...x}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=Pt.now();const w={autoplay:t,delay:r,type:s,repeat:l,repeatDelay:c,repeatType:f,name:m,motionValue:g,element:y,...x},C=y?.KeyframeResolver||Pp;this.keyframeResolver=new C(p,(R,O,N)=>this.onKeyframesResolved(R,O,w,!N),m,g,y),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(t,r,s,l){this.keyframeResolver=void 0;const{name:c,type:f,velocity:p,delay:m,isHandoff:g,onUpdate:y}=s;this.resolvedAt=Pt.now(),YC(t,c,f,p)||((xi.instantAnimations||!m)&&y?.(Np(t,s,r)),t[0]=t[t.length-1],Om(s),s.repeat=0);const w={startTime:l?this.resolvedAt?this.resolvedAt-this.createdAt>QC?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:r,...s,keyframes:t},C=!g&&ZC(w)?new qC({...w,element:w.motionValue.owner.current}):new zp(w);C.finished.then(()=>this.notifyFinished()).catch(fn),this.pendingTimeline&&(this.stopTimeline=C.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=C}get finished(){return this._animation?this.animation.finished:this._finished}then(t,r){return this.finished.finally(t).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),NC()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const JC=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function eA(e){const t=JC.exec(e);if(!t)return[,];const[,r,s,l]=t;return[`--${r??s}`,l]}function V5(e,t,r=1){const[s,l]=eA(e);if(!s)return;const c=window.getComputedStyle(t).getPropertyValue(s);if(c){const f=c.trim();return u5(f)?parseFloat(f):f}return Rp(l)?V5(l,t,r+1):l}function Ip(e,t){return e?.[t]??e?.default??e}const H5=new Set(["width","height","top","left","right","bottom",...ps]),tA={test:e=>e==="auto",parse:e=>e},F5=e=>t=>t.test(e),q5=[ms,fe,Un,er,G8,q8,tA],Hv=e=>q5.find(F5(e));function nA(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||f5(e):!0}const iA=new Set(["brightness","contrast","saturate","opacity"]);function rA(e){const[t,r]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[s]=r.match(Dp)||[];if(!s)return e;const l=r.replace(s,"");let c=iA.has(t)?1:0;return s!==r&&(c*=100),t+"("+c+l+")"}const aA=/\b([a-z-]*)\(.*?\)/gu,Nm={...fr,getAnimatableNone:e=>{const t=e.match(aA);return t?t.map(rA).join(" "):e}},Fv={...ms,transform:Math.round},sA={rotate:er,rotateX:er,rotateY:er,rotateZ:er,scale:_c,scaleX:_c,scaleY:_c,scaleZ:_c,skew:er,skewX:er,skewY:er,distance:fe,translateX:fe,translateY:fe,translateZ:fe,x:fe,y:fe,z:fe,perspective:fe,transformPerspective:fe,opacity:Io,originX:Mv,originY:Mv,originZ:fe},$p={borderWidth:fe,borderTopWidth:fe,borderRightWidth:fe,borderBottomWidth:fe,borderLeftWidth:fe,borderRadius:fe,radius:fe,borderTopLeftRadius:fe,borderTopRightRadius:fe,borderBottomRightRadius:fe,borderBottomLeftRadius:fe,width:fe,maxWidth:fe,height:fe,maxHeight:fe,top:fe,right:fe,bottom:fe,left:fe,padding:fe,paddingTop:fe,paddingRight:fe,paddingBottom:fe,paddingLeft:fe,margin:fe,marginTop:fe,marginRight:fe,marginBottom:fe,marginLeft:fe,backgroundPositionX:fe,backgroundPositionY:fe,...sA,zIndex:Fv,fillOpacity:Io,strokeOpacity:Io,numOctaves:Fv},oA={...$p,color:tt,backgroundColor:tt,outlineColor:tt,fill:tt,stroke:tt,borderColor:tt,borderTopColor:tt,borderRightColor:tt,borderBottomColor:tt,borderLeftColor:tt,filter:Nm,WebkitFilter:Nm},G5=e=>oA[e];function Y5(e,t){let r=G5(e);return r!==Nm&&(r=fr),r.getAnimatableNone?r.getAnimatableNone(t):void 0}const lA=new Set(["auto","none","0"]);function cA(e,t,r){let s=0,l;for(;s<e.length&&!l;){const c=e[s];typeof c=="string"&&!lA.has(c)&&$o(c).values.length&&(l=e[s]),s++}if(l&&r)for(const c of t)e[c]=Y5(r,l)}class uA extends Pp{constructor(t,r,s,l,c){super(t,r,s,l,c,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:r,name:s}=this;if(!r||!r.current)return;super.readKeyframes();for(let m=0;m<t.length;m++){let g=t[m];if(typeof g=="string"&&(g=g.trim(),Rp(g))){const y=V5(g,r.current);y!==void 0&&(t[m]=y),m===t.length-1&&(this.finalKeyframe=g)}}if(this.resolveNoneKeyframes(),!H5.has(s)||t.length!==2)return;const[l,c]=t,f=Hv(l),p=Hv(c);if(f!==p)if($v(f)&&$v(p))for(let m=0;m<t.length;m++){const g=t[m];typeof g=="string"&&(t[m]=parseFloat(g))}else Fr[s]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:r}=this,s=[];for(let l=0;l<t.length;l++)(t[l]===null||nA(t[l]))&&s.push(l);s.length&&cA(t,s,r)}measureInitialState(){const{element:t,unresolvedKeyframes:r,name:s}=this;if(!t||!t.current)return;s==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Fr[s](t.measureViewportBox(),window.getComputedStyle(t.current)),r[0]=this.measuredOrigin;const l=r[r.length-1];l!==void 0&&t.getValue(s,l).jump(l,!1)}measureEndState(){const{element:t,name:r,unresolvedKeyframes:s}=this;if(!t||!t.current)return;const l=t.getValue(r);l&&l.jump(this.measuredOrigin,!1);const c=s.length-1,f=s[c];s[c]=Fr[r](t.measureViewportBox(),window.getComputedStyle(t.current)),f!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=f),this.removedTransforms?.length&&this.removedTransforms.forEach(([p,m])=>{t.getValue(p).set(m)}),this.resolveNoneKeyframes()}}function dA(e,t,r){if(e instanceof EventTarget)return[e];if(typeof e=="string"){let s=document;const l=r?.[e]??s.querySelectorAll(e);return l?Array.from(l):[]}return Array.from(e)}const K5=(e,t)=>t&&typeof e=="number"?t.transform(e):e;function X5(e){return d5(e)&&"offsetHeight"in e}const qv=30,fA=e=>!isNaN(parseFloat(e));class hA{constructor(t,r={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=s=>{const l=Pt.now();if(this.updatedAt!==l&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(s),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const c of this.dependents)c.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=r.owner}setCurrent(t){this.current=t,this.updatedAt=Pt.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=fA(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,r){this.events[t]||(this.events[t]=new Cp);const s=this.events[t].add(r);return t==="change"?()=>{s(),Ve.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,r){this.passiveEffect=t,this.stopPassiveEffect=r}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,r,s){this.set(r),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-s}jump(t,r=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,r&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=Pt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>qv)return 0;const r=Math.min(this.updatedAt-this.prevUpdatedAt,qv);return h5(parseFloat(this.current)-parseFloat(this.prevFrameValue),r)}start(t){return this.stop(),new Promise(r=>{this.hasAnimated=!0,this.animation=t(r),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ts(e,t){return new hA(e,t)}const{schedule:Up}=T5(queueMicrotask,!1),vn={x:!1,y:!1};function Z5(){return vn.x||vn.y}function mA(e){return e==="x"||e==="y"?vn[e]?null:(vn[e]=!0,()=>{vn[e]=!1}):vn.x||vn.y?null:(vn.x=vn.y=!0,()=>{vn.x=vn.y=!1})}function Q5(e,t){const r=dA(e),s=new AbortController,l={passive:!0,...t,signal:s.signal};return[r,l,()=>s.abort()]}function Gv(e){return!(e.pointerType==="touch"||Z5())}function pA(e,t,r={}){const[s,l,c]=Q5(e,r),f=p=>{if(!Gv(p))return;const{target:m}=p,g=t(m,p);if(typeof g!="function"||!m)return;const y=x=>{Gv(x)&&(g(x),m.removeEventListener("pointerleave",y))};m.addEventListener("pointerleave",y,l)};return s.forEach(p=>{p.addEventListener("pointerenter",f,l)}),c}const W5=(e,t)=>t?e===t?!0:W5(e,t.parentElement):!1,Bp=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,gA=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function yA(e){return gA.has(e.tagName)||e.tabIndex!==-1}const qc=new WeakSet;function Yv(e){return t=>{t.key==="Enter"&&e(t)}}function Sh(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const vA=(e,t)=>{const r=e.currentTarget;if(!r)return;const s=Yv(()=>{if(qc.has(r))return;Sh(r,"down");const l=Yv(()=>{Sh(r,"up")}),c=()=>Sh(r,"cancel");r.addEventListener("keyup",l,t),r.addEventListener("blur",c,t)});r.addEventListener("keydown",s,t),r.addEventListener("blur",()=>r.removeEventListener("keydown",s),t)};function Kv(e){return Bp(e)&&!Z5()}function xA(e,t,r={}){const[s,l,c]=Q5(e,r),f=p=>{const m=p.currentTarget;if(!Kv(p))return;qc.add(m);const g=t(m,p),y=(C,R)=>{window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",w),qc.has(m)&&qc.delete(m),Kv(C)&&typeof g=="function"&&g(C,{success:R})},x=C=>{y(C,m===window||m===document||r.useGlobalTarget||W5(m,C.target))},w=C=>{y(C,!1)};window.addEventListener("pointerup",x,l),window.addEventListener("pointercancel",w,l)};return s.forEach(p=>{(r.useGlobalTarget?window:p).addEventListener("pointerdown",f,l),X5(p)&&(p.addEventListener("focus",g=>vA(g,l)),!yA(p)&&!p.hasAttribute("tabindex")&&(p.tabIndex=0))}),c}function J5(e){return d5(e)&&"ownerSVGElement"in e}function bA(e){return J5(e)&&e.tagName==="svg"}const St=e=>!!(e&&e.getVelocity),wA=[...q5,tt,fr],SA=e=>wA.find(F5(e)),Vp=T.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function Xv(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function EA(...e){return t=>{let r=!1;const s=e.map(l=>{const c=Xv(l,t);return!r&&typeof c=="function"&&(r=!0),c});if(r)return()=>{for(let l=0;l<s.length;l++){const c=s[l];typeof c=="function"?c():Xv(e[l],null)}}}}function TA(...e){return T.useCallback(EA(...e),e)}class CA extends T.Component{getSnapshotBeforeUpdate(t){const r=this.props.childRef.current;if(r&&t.isPresent&&!this.props.isPresent){const s=r.offsetParent,l=X5(s)&&s.offsetWidth||0,c=this.props.sizeRef.current;c.height=r.offsetHeight||0,c.width=r.offsetWidth||0,c.top=r.offsetTop,c.left=r.offsetLeft,c.right=l-c.width-c.left}return null}componentDidUpdate(){}render(){return this.props.children}}function AA({children:e,isPresent:t,anchorX:r,root:s}){const l=T.useId(),c=T.useRef(null),f=T.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:p}=T.useContext(Vp),m=TA(c,e?.ref);return T.useInsertionEffect(()=>{const{width:g,height:y,top:x,left:w,right:C}=f.current;if(t||!c.current||!g||!y)return;const R=r==="left"?`left: ${w}`:`right: ${C}`;c.current.dataset.motionPopId=l;const O=document.createElement("style");p&&(O.nonce=p);const N=s??document.head;return N.appendChild(O),O.sheet&&O.sheet.insertRule(`
          [data-motion-pop-id="${l}"] {
            position: absolute !important;
            width: ${g}px !important;
            height: ${y}px !important;
            ${R}px !important;
            top: ${x}px !important;
          }
        `),()=>{N.contains(O)&&N.removeChild(O)}},[t]),d.jsx(CA,{isPresent:t,childRef:c,sizeRef:f,children:T.cloneElement(e,{ref:m})})}const _A=({children:e,initial:t,isPresent:r,onExitComplete:s,custom:l,presenceAffectsLayout:c,mode:f,anchorX:p,root:m})=>{const g=xp(jA),y=T.useId();let x=!0,w=T.useMemo(()=>(x=!1,{id:y,initial:t,isPresent:r,custom:l,onExitComplete:C=>{g.set(C,!0);for(const R of g.values())if(!R)return;s&&s()},register:C=>(g.set(C,!1),()=>g.delete(C))}),[r,g,s]);return c&&x&&(w={...w}),T.useMemo(()=>{g.forEach((C,R)=>g.set(R,!1))},[r]),T.useEffect(()=>{!r&&!g.size&&s&&s()},[r]),f==="popLayout"&&(e=d.jsx(AA,{isPresent:r,anchorX:p,root:m,children:e})),d.jsx(Lu.Provider,{value:w,children:e})};function jA(){return new Map}function ew(e=!0){const t=T.useContext(Lu);if(t===null)return[!0,null];const{isPresent:r,onExitComplete:s,register:l}=t,c=T.useId();T.useEffect(()=>{if(e)return l(c)},[e]);const f=T.useCallback(()=>e&&s&&s(c),[c,s,e]);return!r&&s?[!1,f]:[!0]}const jc=e=>e.key||"";function Zv(e){const t=[];return T.Children.forEach(e,r=>{T.isValidElement(r)&&t.push(r)}),t}const Qv=({children:e,custom:t,initial:r=!0,onExitComplete:s,presenceAffectsLayout:l=!0,mode:c="sync",propagate:f=!1,anchorX:p="left",root:m})=>{const[g,y]=ew(f),x=T.useMemo(()=>Zv(e),[e]),w=f&&!g?[]:x.map(jc),C=T.useRef(!0),R=T.useRef(x),O=xp(()=>new Map),[N,_]=T.useState(x),[U,z]=T.useState(x);c5(()=>{C.current=!1,R.current=x;for(let Y=0;Y<U.length;Y++){const H=jc(U[Y]);w.includes(H)?O.delete(H):O.get(H)!==!0&&O.set(H,!1)}},[U,w.length,w.join("-")]);const Q=[];if(x!==N){let Y=[...x];for(let H=0;H<U.length;H++){const X=U[H],ne=jc(X);w.includes(ne)||(Y.splice(H,0,X),Q.push(X))}return c==="wait"&&Q.length&&(Y=Q),z(Zv(Y)),_(x),null}const{forceRender:G}=T.useContext(vp);return d.jsx(d.Fragment,{children:U.map(Y=>{const H=jc(Y),X=f&&!g?!1:x===U||w.includes(H),ne=()=>{if(O.has(H))O.set(H,!0);else return;let re=!0;O.forEach(ye=>{ye||(re=!1)}),re&&(G?.(),z(R.current),f&&y?.(),s&&s())};return d.jsx(_A,{isPresent:X,initial:!C.current||r?void 0:!1,custom:t,presenceAffectsLayout:l,mode:c,root:m,onExitComplete:X?void 0:ne,anchorX:p,children:Y},H)})})},tw=T.createContext({strict:!1}),Wv={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ns={};for(const e in Wv)ns[e]={isEnabled:t=>Wv[e].some(r=>!!t[r])};function RA(e){for(const t in e)ns[t]={...ns[t],...e[t]}}const DA=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function lu(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||DA.has(e)}let nw=e=>!lu(e);function MA(e){typeof e=="function"&&(nw=t=>t.startsWith("on")?!lu(t):e(t))}try{MA(require("@emotion/is-prop-valid").default)}catch{}function kA(e,t,r){const s={};for(const l in e)l==="values"&&typeof e.values=="object"||(nw(l)||r===!0&&lu(l)||!t&&!lu(l)||e.draggable&&l.startsWith("onDrag"))&&(s[l]=e[l]);return s}const zu=T.createContext({});function Pu(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function Uo(e){return typeof e=="string"||Array.isArray(e)}const Hp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Fp=["initial",...Hp];function Iu(e){return Pu(e.animate)||Fp.some(t=>Uo(e[t]))}function iw(e){return!!(Iu(e)||e.variants)}function OA(e,t){if(Iu(e)){const{initial:r,animate:s}=e;return{initial:r===!1||Uo(r)?r:void 0,animate:Uo(s)?s:void 0}}return e.inherit!==!1?t:{}}function NA(e){const{initial:t,animate:r}=OA(e,T.useContext(zu));return T.useMemo(()=>({initial:t,animate:r}),[Jv(t),Jv(r)])}function Jv(e){return Array.isArray(e)?e.join(" "):e}const Bo={};function LA(e){for(const t in e)Bo[t]=e[t],jp(t)&&(Bo[t].isCSSVariable=!0)}function rw(e,{layout:t,layoutId:r}){return gs.has(e)||e.startsWith("origin")||(t||r!==void 0)&&(!!Bo[e]||e==="opacity")}const zA={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},PA=ps.length;function IA(e,t,r){let s="",l=!0;for(let c=0;c<PA;c++){const f=ps[c],p=e[f];if(p===void 0)continue;let m=!0;if(typeof p=="number"?m=p===(f.startsWith("scale")?1:0):m=parseFloat(p)===0,!m||r){const g=K5(p,$p[f]);if(!m){l=!1;const y=zA[f]||f;s+=`${y}(${g}) `}r&&(t[f]=g)}}return s=s.trim(),r?s=r(t,l?"":s):l&&(s="none"),s}function qp(e,t,r){const{style:s,vars:l,transformOrigin:c}=e;let f=!1,p=!1;for(const m in t){const g=t[m];if(gs.has(m)){f=!0;continue}else if(jp(m)){l[m]=g;continue}else{const y=K5(g,$p[m]);m.startsWith("origin")?(p=!0,c[m]=y):s[m]=y}}if(t.transform||(f||r?s.transform=IA(t,e.transform,r):s.transform&&(s.transform="none")),p){const{originX:m="50%",originY:g="50%",originZ:y=0}=c;s.transformOrigin=`${m} ${g} ${y}`}}const Gp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function aw(e,t,r){for(const s in t)!St(t[s])&&!rw(s,r)&&(e[s]=t[s])}function $A({transformTemplate:e},t){return T.useMemo(()=>{const r=Gp();return qp(r,t,e),Object.assign({},r.vars,r.style)},[t])}function UA(e,t){const r=e.style||{},s={};return aw(s,r,e),Object.assign(s,$A(e,t)),s}function BA(e,t){const r={},s=UA(e,t);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=s,r}const VA={offset:"stroke-dashoffset",array:"stroke-dasharray"},HA={offset:"strokeDashoffset",array:"strokeDasharray"};function FA(e,t,r=1,s=0,l=!0){e.pathLength=1;const c=l?VA:HA;e[c.offset]=fe.transform(-s);const f=fe.transform(t),p=fe.transform(r);e[c.array]=`${f} ${p}`}function sw(e,{attrX:t,attrY:r,attrScale:s,pathLength:l,pathSpacing:c=1,pathOffset:f=0,...p},m,g,y){if(qp(e,p,g),m){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:x,style:w}=e;x.transform&&(w.transform=x.transform,delete x.transform),(w.transform||x.transformOrigin)&&(w.transformOrigin=x.transformOrigin??"50% 50%",delete x.transformOrigin),w.transform&&(w.transformBox=y?.transformBox??"fill-box",delete x.transformBox),t!==void 0&&(x.x=t),r!==void 0&&(x.y=r),s!==void 0&&(x.scale=s),l!==void 0&&FA(x,l,c,f,!1)}const ow=()=>({...Gp(),attrs:{}}),lw=e=>typeof e=="string"&&e.toLowerCase()==="svg";function qA(e,t,r,s){const l=T.useMemo(()=>{const c=ow();return sw(c,t,lw(s),e.transformTemplate,e.style),{...c.attrs,style:{...c.style}}},[t]);if(e.style){const c={};aw(c,e.style,e),l.style={...c,...l.style}}return l}const GA=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Yp(e){return typeof e!="string"||e.includes("-")?!1:!!(GA.indexOf(e)>-1||/[A-Z]/u.test(e))}function YA(e,t,r,{latestValues:s},l,c=!1){const p=(Yp(e)?qA:BA)(t,s,l,e),m=kA(t,typeof e=="string",c),g=e!==T.Fragment?{...m,...p,ref:r}:{},{children:y}=t,x=T.useMemo(()=>St(y)?y.get():y,[y]);return T.createElement(e,{...g,children:x})}function e2(e){const t=[{},{}];return e?.values.forEach((r,s)=>{t[0][s]=r.get(),t[1][s]=r.getVelocity()}),t}function Kp(e,t,r,s){if(typeof t=="function"){const[l,c]=e2(s);t=t(r!==void 0?r:e.custom,l,c)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[l,c]=e2(s);t=t(r!==void 0?r:e.custom,l,c)}return t}function Gc(e){return St(e)?e.get():e}function KA({scrapeMotionValuesFromProps:e,createRenderState:t},r,s,l){return{latestValues:XA(r,s,l,e),renderState:t()}}function XA(e,t,r,s){const l={},c=s(e,{});for(const w in c)l[w]=Gc(c[w]);let{initial:f,animate:p}=e;const m=Iu(e),g=iw(e);t&&g&&!m&&e.inherit!==!1&&(f===void 0&&(f=t.initial),p===void 0&&(p=t.animate));let y=r?r.initial===!1:!1;y=y||f===!1;const x=y?p:f;if(x&&typeof x!="boolean"&&!Pu(x)){const w=Array.isArray(x)?x:[x];for(let C=0;C<w.length;C++){const R=Kp(e,w[C]);if(R){const{transitionEnd:O,transition:N,..._}=R;for(const U in _){let z=_[U];if(Array.isArray(z)){const Q=y?z.length-1:0;z=z[Q]}z!==null&&(l[U]=z)}for(const U in O)l[U]=O[U]}}}return l}const cw=e=>(t,r)=>{const s=T.useContext(zu),l=T.useContext(Lu),c=()=>KA(e,t,s,l);return r?c():xp(c)};function Xp(e,t,r){const{style:s}=e,l={};for(const c in s)(St(s[c])||t.style&&St(t.style[c])||rw(c,e)||r?.getValue(c)?.liveStyle!==void 0)&&(l[c]=s[c]);return l}const ZA=cw({scrapeMotionValuesFromProps:Xp,createRenderState:Gp});function uw(e,t,r){const s=Xp(e,t,r);for(const l in e)if(St(e[l])||St(t[l])){const c=ps.indexOf(l)!==-1?"attr"+l.charAt(0).toUpperCase()+l.substring(1):l;s[c]=e[l]}return s}const QA=cw({scrapeMotionValuesFromProps:uw,createRenderState:ow}),WA=Symbol.for("motionComponentSymbol");function Ga(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function JA(e,t,r){return T.useCallback(s=>{s&&e.onMount&&e.onMount(s),t&&(s?t.mount(s):t.unmount()),r&&(typeof r=="function"?r(s):Ga(r)&&(r.current=s))},[t])}const Zp=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),e_="framerAppearId",dw="data-"+Zp(e_),fw=T.createContext({});function t_(e,t,r,s,l){const{visualElement:c}=T.useContext(zu),f=T.useContext(tw),p=T.useContext(Lu),m=T.useContext(Vp).reducedMotion,g=T.useRef(null);s=s||f.renderer,!g.current&&s&&(g.current=s(e,{visualState:t,parent:c,props:r,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:m}));const y=g.current,x=T.useContext(fw);y&&!y.projection&&l&&(y.type==="html"||y.type==="svg")&&n_(g.current,r,l,x);const w=T.useRef(!1);T.useInsertionEffect(()=>{y&&w.current&&y.update(r,p)});const C=r[dw],R=T.useRef(!!C&&!window.MotionHandoffIsComplete?.(C)&&window.MotionHasOptimisedAnimation?.(C));return c5(()=>{y&&(w.current=!0,window.MotionIsMounted=!0,y.updateFeatures(),y.scheduleRenderMicrotask(),R.current&&y.animationState&&y.animationState.animateChanges())}),T.useEffect(()=>{y&&(!R.current&&y.animationState&&y.animationState.animateChanges(),R.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(C)}),R.current=!1),y.enteringChildren=void 0)}),y}function n_(e,t,r,s){const{layoutId:l,layout:c,drag:f,dragConstraints:p,layoutScroll:m,layoutRoot:g,layoutCrossfade:y}=t;e.projection=new r(e.latestValues,t["data-framer-portal-id"]?void 0:hw(e.parent)),e.projection.setOptions({layoutId:l,layout:c,alwaysMeasureLayout:!!f||p&&Ga(p),visualElement:e,animationType:typeof c=="string"?c:"both",initialPromotionConfig:s,crossfade:y,layoutScroll:m,layoutRoot:g})}function hw(e){if(e)return e.options.allowProjection!==!1?e.projection:hw(e.parent)}function Eh(e,{forwardMotionProps:t=!1}={},r,s){r&&RA(r);const l=Yp(e)?QA:ZA;function c(p,m){let g;const y={...T.useContext(Vp),...p,layoutId:i_(p)},{isStatic:x}=y,w=NA(p),C=l(p,x);if(!x&&bp){r_();const R=a_(y);g=R.MeasureLayout,w.visualElement=t_(e,C,y,s,R.ProjectionNode)}return d.jsxs(zu.Provider,{value:w,children:[g&&w.visualElement?d.jsx(g,{visualElement:w.visualElement,...y}):null,YA(e,p,JA(C,w.visualElement,m),C,x,t)]})}c.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const f=T.forwardRef(c);return f[WA]=e,f}function i_({layoutId:e}){const t=T.useContext(vp).id;return t&&e!==void 0?t+"-"+e:e}function r_(e,t){T.useContext(tw).strict}function a_(e){const{drag:t,layout:r}=ns;if(!t&&!r)return{};const s={...t,...r};return{MeasureLayout:t?.isEnabled(e)||r?.isEnabled(e)?s.MeasureLayout:void 0,ProjectionNode:s.ProjectionNode}}function s_(e,t){if(typeof Proxy>"u")return Eh;const r=new Map,s=(c,f)=>Eh(c,f,e,t),l=(c,f)=>s(c,f);return new Proxy(l,{get:(c,f)=>f==="create"?s:(r.has(f)||r.set(f,Eh(f,void 0,e,t)),r.get(f))})}function mw({top:e,left:t,right:r,bottom:s}){return{x:{min:t,max:r},y:{min:e,max:s}}}function o_({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function l_(e,t){if(!t)return e;const r=t({x:e.left,y:e.top}),s=t({x:e.right,y:e.bottom});return{top:r.y,left:r.x,bottom:s.y,right:s.x}}function Th(e){return e===void 0||e===1}function Lm({scale:e,scaleX:t,scaleY:r}){return!Th(e)||!Th(t)||!Th(r)}function Ir(e){return Lm(e)||pw(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function pw(e){return t2(e.x)||t2(e.y)}function t2(e){return e&&e!=="0%"}function cu(e,t,r){const s=e-r,l=t*s;return r+l}function n2(e,t,r,s,l){return l!==void 0&&(e=cu(e,l,s)),cu(e,r,s)+t}function zm(e,t=0,r=1,s,l){e.min=n2(e.min,t,r,s,l),e.max=n2(e.max,t,r,s,l)}function gw(e,{x:t,y:r}){zm(e.x,t.translate,t.scale,t.originPoint),zm(e.y,r.translate,r.scale,r.originPoint)}const i2=.999999999999,r2=1.0000000000001;function c_(e,t,r,s=!1){const l=r.length;if(!l)return;t.x=t.y=1;let c,f;for(let p=0;p<l;p++){c=r[p],f=c.projectionDelta;const{visualElement:m}=c.options;m&&m.props.style&&m.props.style.display==="contents"||(s&&c.options.layoutScroll&&c.scroll&&c!==c.root&&Ka(e,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),f&&(t.x*=f.x.scale,t.y*=f.y.scale,gw(e,f)),s&&Ir(c.latestValues)&&Ka(e,c.latestValues))}t.x<r2&&t.x>i2&&(t.x=1),t.y<r2&&t.y>i2&&(t.y=1)}function Ya(e,t){e.min=e.min+t,e.max=e.max+t}function a2(e,t,r,s,l=.5){const c=Ge(e.min,e.max,l);zm(e,t,r,c,s)}function Ka(e,t){a2(e.x,t.x,t.scaleX,t.scale,t.originX),a2(e.y,t.y,t.scaleY,t.scale,t.originY)}function yw(e,t){return mw(l_(e.getBoundingClientRect(),t))}function u_(e,t,r){const s=yw(e,r),{scroll:l}=t;return l&&(Ya(s.x,l.offset.x),Ya(s.y,l.offset.y)),s}const s2=()=>({translate:0,scale:1,origin:0,originPoint:0}),Xa=()=>({x:s2(),y:s2()}),o2=()=>({min:0,max:0}),We=()=>({x:o2(),y:o2()}),Pm={current:null},vw={current:!1};function d_(){if(vw.current=!0,!!bp)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Pm.current=e.matches;e.addEventListener("change",t),t()}else Pm.current=!1}const f_=new WeakMap;function h_(e,t,r){for(const s in t){const l=t[s],c=r[s];if(St(l))e.addValue(s,l);else if(St(c))e.addValue(s,ts(l,{owner:e}));else if(c!==l)if(e.hasValue(s)){const f=e.getValue(s);f.liveStyle===!0?f.jump(l):f.hasAnimated||f.set(l)}else{const f=e.getStaticValue(s);e.addValue(s,ts(f!==void 0?f:l,{owner:e}))}}for(const s in r)t[s]===void 0&&e.removeValue(s);return t}const l2=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class m_{scrapeMotionValuesFromProps(t,r,s){return{}}constructor({parent:t,props:r,presenceContext:s,reducedMotionConfig:l,blockInitialAnimation:c,visualState:f},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Pp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const w=Pt.now();this.renderScheduledAt<w&&(this.renderScheduledAt=w,Ve.render(this.render,!1,!0))};const{latestValues:m,renderState:g}=f;this.latestValues=m,this.baseTarget={...m},this.initialValues=r.initial?{...m}:{},this.renderState=g,this.parent=t,this.props=r,this.presenceContext=s,this.depth=t?t.depth+1:0,this.reducedMotionConfig=l,this.options=p,this.blockInitialAnimation=!!c,this.isControllingVariants=Iu(r),this.isVariantNode=iw(r),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:y,...x}=this.scrapeMotionValuesFromProps(r,{},this);for(const w in x){const C=x[w];m[w]!==void 0&&St(C)&&C.set(m[w])}}mount(t){this.current=t,f_.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,s)=>this.bindToMotionValue(s,r)),vw.current||d_(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Pm.current,this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),dr(this.notifyUpdate),dr(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const r=this.features[t];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,r){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const s=gs.has(t);s&&this.onBindTransform&&this.onBindTransform();const l=r.on("change",f=>{this.latestValues[t]=f,this.props.onUpdate&&Ve.preRender(this.notifyUpdate),s&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let c;window.MotionCheckAppearSync&&(c=window.MotionCheckAppearSync(this,t,r)),this.valueSubscriptions.set(t,()=>{l(),c&&c(),r.owner&&r.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in ns){const r=ns[t];if(!r)continue;const{isEnabled:s,Feature:l}=r;if(!this.features[t]&&l&&s(this.props)&&(this.features[t]=new l(this)),this.features[t]){const c=this.features[t];c.isMounted?c.update():(c.mount(),c.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):We()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,r){this.latestValues[t]=r}update(t,r){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=r;for(let s=0;s<l2.length;s++){const l=l2[s];this.propEventSubscriptions[l]&&(this.propEventSubscriptions[l](),delete this.propEventSubscriptions[l]);const c="on"+l,f=t[c];f&&(this.propEventSubscriptions[l]=this.on(l,f))}this.prevMotionValues=h_(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const r=this.getClosestVariantNode();if(r)return r.variantChildren&&r.variantChildren.add(t),()=>r.variantChildren.delete(t)}addValue(t,r){const s=this.values.get(t);r!==s&&(s&&this.removeValue(t),this.bindToMotionValue(t,r),this.values.set(t,r),this.latestValues[t]=r.get())}removeValue(t){this.values.delete(t);const r=this.valueSubscriptions.get(t);r&&(r(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,r){if(this.props.values&&this.props.values[t])return this.props.values[t];let s=this.values.get(t);return s===void 0&&r!==void 0&&(s=ts(r===null?void 0:r,{owner:this}),this.addValue(t,s)),s}readValue(t,r){let s=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return s!=null&&(typeof s=="string"&&(u5(s)||f5(s))?s=parseFloat(s):!SA(s)&&fr.test(r)&&(s=Y5(t,r)),this.setBaseTarget(t,St(s)?s.get():s)),St(s)?s.get():s}setBaseTarget(t,r){this.baseTarget[t]=r}getBaseTarget(t){const{initial:r}=this.props;let s;if(typeof r=="string"||typeof r=="object"){const c=Kp(this.props,r,this.presenceContext?.custom);c&&(s=c[t])}if(r&&s!==void 0)return s;const l=this.getBaseTargetFromProps(this.props,t);return l!==void 0&&!St(l)?l:this.initialValues[t]!==void 0&&s===void 0?void 0:this.baseTarget[t]}on(t,r){return this.events[t]||(this.events[t]=new Cp),this.events[t].add(r)}notify(t,...r){this.events[t]&&this.events[t].notify(...r)}scheduleRenderMicrotask(){Up.render(this.render)}}class xw extends m_{constructor(){super(...arguments),this.KeyframeResolver=uA}sortInstanceNodePosition(t,r){return t.compareDocumentPosition(r)&2?1:-1}getBaseTargetFromProps(t,r){return t.style?t.style[r]:void 0}removeValueFromRenderState(t,{vars:r,style:s}){delete r[t],delete s[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;St(t)&&(this.childSubscription=t.on("change",r=>{this.current&&(this.current.textContent=`${r}`)}))}}function bw(e,{style:t,vars:r},s,l){const c=e.style;let f;for(f in t)c[f]=t[f];l?.applyProjectionStyles(c,s);for(f in r)c.setProperty(f,r[f])}function p_(e){return window.getComputedStyle(e)}class g_ extends xw{constructor(){super(...arguments),this.type="html",this.renderInstance=bw}readValueFromInstance(t,r){if(gs.has(r))return this.projection?.isProjecting?jm(r):RC(t,r);{const s=p_(t),l=(jp(r)?s.getPropertyValue(r):s[r])||0;return typeof l=="string"?l.trim():l}}measureInstanceViewportBox(t,{transformPagePoint:r}){return yw(t,r)}build(t,r,s){qp(t,r,s.transformTemplate)}scrapeMotionValuesFromProps(t,r,s){return Xp(t,r,s)}}const ww=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function y_(e,t,r,s){bw(e,t,void 0,s);for(const l in t.attrs)e.setAttribute(ww.has(l)?l:Zp(l),t.attrs[l])}class v_ extends xw{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=We}getBaseTargetFromProps(t,r){return t[r]}readValueFromInstance(t,r){if(gs.has(r)){const s=G5(r);return s&&s.default||0}return r=ww.has(r)?r:Zp(r),t.getAttribute(r)}scrapeMotionValuesFromProps(t,r,s){return uw(t,r,s)}build(t,r,s){sw(t,r,this.isSVGTag,s.transformTemplate,s.style)}renderInstance(t,r,s,l){y_(t,r,s,l)}mount(t){this.isSVGTag=lw(t.tagName),super.mount(t)}}const x_=(e,t)=>Yp(e)?new v_(t):new g_(t,{allowProjection:e!==T.Fragment});function Qa(e,t,r){const s=e.getProps();return Kp(s,t,r!==void 0?r:s.custom,e)}const Im=e=>Array.isArray(e);function b_(e,t,r){e.hasValue(t)?e.getValue(t).set(r):e.addValue(t,ts(r))}function w_(e){return Im(e)?e[e.length-1]||0:e}function S_(e,t){const r=Qa(e,t);let{transitionEnd:s={},transition:l={},...c}=r||{};c={...c,...s};for(const f in c){const p=w_(c[f]);b_(e,f,p)}}function E_(e){return!!(St(e)&&e.add)}function $m(e,t){const r=e.getValue("willChange");if(E_(r))return r.add(t);if(!r&&xi.WillChange){const s=new xi.WillChange("auto");e.addValue("willChange",s),s.add(t)}}function Sw(e){return e.props[dw]}const T_=e=>e!==null;function C_(e,{repeat:t,repeatType:r="loop"},s){const l=e.filter(T_),c=t&&r!=="loop"&&t%2===1?0:l.length-1;return l[c]}const A_={type:"spring",stiffness:500,damping:25,restSpeed:10},__=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),j_={type:"keyframes",duration:.8},R_={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},D_=(e,{keyframes:t})=>t.length>2?j_:gs.has(e)?e.startsWith("scale")?__(t[1]):A_:R_;function M_({when:e,delay:t,delayChildren:r,staggerChildren:s,staggerDirection:l,repeat:c,repeatType:f,repeatDelay:p,from:m,elapsed:g,...y}){return!!Object.keys(y).length}const Qp=(e,t,r,s={},l,c)=>f=>{const p=Ip(s,e)||{},m=p.delay||s.delay||0;let{elapsed:g=0}=s;g=g-$n(m);const y={keyframes:Array.isArray(r)?r:[null,r],ease:"easeOut",velocity:t.getVelocity(),...p,delay:-g,onUpdate:w=>{t.set(w),p.onUpdate&&p.onUpdate(w)},onComplete:()=>{f(),p.onComplete&&p.onComplete()},name:e,motionValue:t,element:c?void 0:l};M_(p)||Object.assign(y,D_(e,y)),y.duration&&(y.duration=$n(y.duration)),y.repeatDelay&&(y.repeatDelay=$n(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let x=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(Om(y),y.delay===0&&(x=!0)),(xi.instantAnimations||xi.skipAnimations)&&(x=!0,Om(y),y.delay=0),y.allowFlatten=!p.type&&!p.ease,x&&!c&&t.get()!==void 0){const w=C_(y.keyframes,p);if(w!==void 0){Ve.update(()=>{y.onUpdate(w),y.onComplete()});return}}return p.isSync?new zp(y):new WC(y)};function k_({protectedKeys:e,needsAnimating:t},r){const s=e.hasOwnProperty(r)&&t[r]!==!0;return t[r]=!1,s}function Ew(e,t,{delay:r=0,transitionOverride:s,type:l}={}){let{transition:c=e.getDefaultTransition(),transitionEnd:f,...p}=t;s&&(c=s);const m=[],g=l&&e.animationState&&e.animationState.getState()[l];for(const y in p){const x=e.getValue(y,e.latestValues[y]??null),w=p[y];if(w===void 0||g&&k_(g,y))continue;const C={delay:r,...Ip(c||{},y)},R=x.get();if(R!==void 0&&!x.isAnimating&&!Array.isArray(w)&&w===R&&!C.velocity)continue;let O=!1;if(window.MotionHandoffAnimation){const _=Sw(e);if(_){const U=window.MotionHandoffAnimation(_,y,Ve);U!==null&&(C.startTime=U,O=!0)}}$m(e,y),x.start(Qp(y,x,w,e.shouldReduceMotion&&H5.has(y)?{type:!1}:C,e,O));const N=x.animation;N&&m.push(N)}return f&&Promise.all(m).then(()=>{Ve.update(()=>{f&&S_(e,f)})}),m}function Tw(e,t,r,s=0,l=1){const c=Array.from(e).sort((g,y)=>g.sortNodePosition(y)).indexOf(t),f=e.size,p=(f-1)*s;return typeof r=="function"?r(c,f):l===1?c*s:p-c*s}function Um(e,t,r={}){const s=Qa(e,t,r.type==="exit"?e.presenceContext?.custom:void 0);let{transition:l=e.getDefaultTransition()||{}}=s||{};r.transitionOverride&&(l=r.transitionOverride);const c=s?()=>Promise.all(Ew(e,s,r)):()=>Promise.resolve(),f=e.variantChildren&&e.variantChildren.size?(m=0)=>{const{delayChildren:g=0,staggerChildren:y,staggerDirection:x}=l;return O_(e,t,m,g,y,x,r)}:()=>Promise.resolve(),{when:p}=l;if(p){const[m,g]=p==="beforeChildren"?[c,f]:[f,c];return m().then(()=>g())}else return Promise.all([c(),f(r.delay)])}function O_(e,t,r=0,s=0,l=0,c=1,f){const p=[];for(const m of e.variantChildren)m.notify("AnimationStart",t),p.push(Um(m,t,{...f,delay:r+(typeof s=="function"?0:s)+Tw(e.variantChildren,m,s,l,c)}).then(()=>m.notify("AnimationComplete",t)));return Promise.all(p)}function N_(e,t,r={}){e.notify("AnimationStart",t);let s;if(Array.isArray(t)){const l=t.map(c=>Um(e,c,r));s=Promise.all(l)}else if(typeof t=="string")s=Um(e,t,r);else{const l=typeof t=="function"?Qa(e,t,r.custom):t;s=Promise.all(Ew(e,l,r))}return s.then(()=>{e.notify("AnimationComplete",t)})}function Cw(e,t){if(!Array.isArray(t))return!1;const r=t.length;if(r!==e.length)return!1;for(let s=0;s<r;s++)if(t[s]!==e[s])return!1;return!0}const L_=Fp.length;function Aw(e){if(!e)return;if(!e.isControllingVariants){const r=e.parent?Aw(e.parent)||{}:{};return e.props.initial!==void 0&&(r.initial=e.props.initial),r}const t={};for(let r=0;r<L_;r++){const s=Fp[r],l=e.props[s];(Uo(l)||l===!1)&&(t[s]=l)}return t}const z_=[...Hp].reverse(),P_=Hp.length;function I_(e){return t=>Promise.all(t.map(({animation:r,options:s})=>N_(e,r,s)))}function $_(e){let t=I_(e),r=c2(),s=!0;const l=m=>(g,y)=>{const x=Qa(e,y,m==="exit"?e.presenceContext?.custom:void 0);if(x){const{transition:w,transitionEnd:C,...R}=x;g={...g,...R,...C}}return g};function c(m){t=m(e)}function f(m){const{props:g}=e,y=Aw(e.parent)||{},x=[],w=new Set;let C={},R=1/0;for(let N=0;N<P_;N++){const _=z_[N],U=r[_],z=g[_]!==void 0?g[_]:y[_],Q=Uo(z),G=_===m?U.isActive:null;G===!1&&(R=N);let Y=z===y[_]&&z!==g[_]&&Q;if(Y&&s&&e.manuallyAnimateOnMount&&(Y=!1),U.protectedKeys={...C},!U.isActive&&G===null||!z&&!U.prevProp||Pu(z)||typeof z=="boolean")continue;const H=U_(U.prevProp,z);let X=H||_===m&&U.isActive&&!Y&&Q||N>R&&Q,ne=!1;const re=Array.isArray(z)?z:[z];let ye=re.reduce(l(_),{});G===!1&&(ye={});const{prevResolvedValues:be={}}=U,pe={...be,...ye},ve=M=>{X=!0,w.has(M)&&(ne=!0,w.delete(M)),U.needsAnimating[M]=!0;const P=e.getValue(M);P&&(P.liveStyle=!1)};for(const M in pe){const P=ye[M],te=be[M];if(C.hasOwnProperty(M))continue;let A=!1;Im(P)&&Im(te)?A=!Cw(P,te):A=P!==te,A?P!=null?ve(M):w.add(M):P!==void 0&&w.has(M)?ve(M):U.protectedKeys[M]=!0}U.prevProp=z,U.prevResolvedValues=ye,U.isActive&&(C={...C,...ye}),s&&e.blockInitialAnimation&&(X=!1);const Ce=Y&&H;X&&(!Ce||ne)&&x.push(...re.map(M=>{const P={type:_};if(typeof M=="string"&&s&&!Ce&&e.manuallyAnimateOnMount&&e.parent){const{parent:te}=e,A=Qa(te,M);if(te.enteringChildren&&A){const{delayChildren:q}=A.transition||{};P.delay=Tw(te.enteringChildren,e,q)}}return{animation:M,options:P}}))}if(w.size){const N={};if(typeof g.initial!="boolean"){const _=Qa(e,Array.isArray(g.initial)?g.initial[0]:g.initial);_&&_.transition&&(N.transition=_.transition)}w.forEach(_=>{const U=e.getBaseTarget(_),z=e.getValue(_);z&&(z.liveStyle=!0),N[_]=U??null}),x.push({animation:N})}let O=!!x.length;return s&&(g.initial===!1||g.initial===g.animate)&&!e.manuallyAnimateOnMount&&(O=!1),s=!1,O?t(x):Promise.resolve()}function p(m,g){if(r[m].isActive===g)return Promise.resolve();e.variantChildren?.forEach(x=>x.animationState?.setActive(m,g)),r[m].isActive=g;const y=f(m);for(const x in r)r[x].protectedKeys={};return y}return{animateChanges:f,setActive:p,setAnimateFunction:c,getState:()=>r,reset:()=>{r=c2()}}}function U_(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!Cw(t,e):!1}function Lr(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function c2(){return{animate:Lr(!0),whileInView:Lr(),whileHover:Lr(),whileTap:Lr(),whileDrag:Lr(),whileFocus:Lr(),exit:Lr()}}class mr{constructor(t){this.isMounted=!1,this.node=t}update(){}}class B_ extends mr{constructor(t){super(t),t.animationState||(t.animationState=$_(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Pu(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:r}=this.node.prevProps||{};t!==r&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let V_=0;class H_ extends mr{constructor(){super(...arguments),this.id=V_++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:r}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===s)return;const l=this.node.animationState.setActive("exit",!t);r&&!t&&l.then(()=>{r(this.id)})}mount(){const{register:t,onExitComplete:r}=this.node.presenceContext||{};r&&r(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const F_={animation:{Feature:B_},exit:{Feature:H_}};function Vo(e,t,r,s={passive:!0}){return e.addEventListener(t,r,s),()=>e.removeEventListener(t,r)}function el(e){return{point:{x:e.pageX,y:e.pageY}}}const q_=e=>t=>Bp(t)&&e(t,el(t));function Ro(e,t,r,s){return Vo(e,t,q_(r),s)}const _w=1e-4,G_=1-_w,Y_=1+_w,jw=.01,K_=0-jw,X_=0+jw;function At(e){return e.max-e.min}function Z_(e,t,r){return Math.abs(e-t)<=r}function u2(e,t,r,s=.5){e.origin=s,e.originPoint=Ge(t.min,t.max,e.origin),e.scale=At(r)/At(t),e.translate=Ge(r.min,r.max,e.origin)-e.originPoint,(e.scale>=G_&&e.scale<=Y_||isNaN(e.scale))&&(e.scale=1),(e.translate>=K_&&e.translate<=X_||isNaN(e.translate))&&(e.translate=0)}function Do(e,t,r,s){u2(e.x,t.x,r.x,s?s.originX:void 0),u2(e.y,t.y,r.y,s?s.originY:void 0)}function d2(e,t,r){e.min=r.min+t.min,e.max=e.min+At(t)}function Q_(e,t,r){d2(e.x,t.x,r.x),d2(e.y,t.y,r.y)}function f2(e,t,r){e.min=t.min-r.min,e.max=e.min+At(t)}function Mo(e,t,r){f2(e.x,t.x,r.x),f2(e.y,t.y,r.y)}function un(e){return[e("x"),e("y")]}const Rw=({current:e})=>e?e.ownerDocument.defaultView:null,h2=(e,t)=>Math.abs(e-t);function W_(e,t){const r=h2(e.x,t.x),s=h2(e.y,t.y);return Math.sqrt(r**2+s**2)}class Dw{constructor(t,r,{transformPagePoint:s,contextWindow:l=window,dragSnapToOrigin:c=!1,distanceThreshold:f=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const w=Ah(this.lastMoveEventInfo,this.history),C=this.startEvent!==null,R=W_(w.offset,{x:0,y:0})>=this.distanceThreshold;if(!C&&!R)return;const{point:O}=w,{timestamp:N}=pt;this.history.push({...O,timestamp:N});const{onStart:_,onMove:U}=this.handlers;C||(_&&_(this.lastMoveEvent,w),this.startEvent=this.lastMoveEvent),U&&U(this.lastMoveEvent,w)},this.handlePointerMove=(w,C)=>{this.lastMoveEvent=w,this.lastMoveEventInfo=Ch(C,this.transformPagePoint),Ve.update(this.updatePoint,!0)},this.handlePointerUp=(w,C)=>{this.end();const{onEnd:R,onSessionEnd:O,resumeAnimation:N}=this.handlers;if(this.dragSnapToOrigin&&N&&N(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const _=Ah(w.type==="pointercancel"?this.lastMoveEventInfo:Ch(C,this.transformPagePoint),this.history);this.startEvent&&R&&R(w,_),O&&O(w,_)},!Bp(t))return;this.dragSnapToOrigin=c,this.handlers=r,this.transformPagePoint=s,this.distanceThreshold=f,this.contextWindow=l||window;const p=el(t),m=Ch(p,this.transformPagePoint),{point:g}=m,{timestamp:y}=pt;this.history=[{...g,timestamp:y}];const{onSessionStart:x}=r;x&&x(t,Ah(m,this.history)),this.removeListeners=Qo(Ro(this.contextWindow,"pointermove",this.handlePointerMove),Ro(this.contextWindow,"pointerup",this.handlePointerUp),Ro(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),dr(this.updatePoint)}}function Ch(e,t){return t?{point:t(e.point)}:e}function m2(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Ah({point:e},t){return{point:e,delta:m2(e,Mw(t)),offset:m2(e,J_(t)),velocity:ej(t,.1)}}function J_(e){return e[0]}function Mw(e){return e[e.length-1]}function ej(e,t){if(e.length<2)return{x:0,y:0};let r=e.length-1,s=null;const l=Mw(e);for(;r>=0&&(s=e[r],!(l.timestamp-s.timestamp>$n(t)));)r--;if(!s)return{x:0,y:0};const c=dn(l.timestamp-s.timestamp);if(c===0)return{x:0,y:0};const f={x:(l.x-s.x)/c,y:(l.y-s.y)/c};return f.x===1/0&&(f.x=0),f.y===1/0&&(f.y=0),f}function tj(e,{min:t,max:r},s){return t!==void 0&&e<t?e=s?Ge(t,e,s.min):Math.max(e,t):r!==void 0&&e>r&&(e=s?Ge(r,e,s.max):Math.min(e,r)),e}function p2(e,t,r){return{min:t!==void 0?e.min+t:void 0,max:r!==void 0?e.max+r-(e.max-e.min):void 0}}function nj(e,{top:t,left:r,bottom:s,right:l}){return{x:p2(e.x,r,l),y:p2(e.y,t,s)}}function g2(e,t){let r=t.min-e.min,s=t.max-e.max;return t.max-t.min<e.max-e.min&&([r,s]=[s,r]),{min:r,max:s}}function ij(e,t){return{x:g2(e.x,t.x),y:g2(e.y,t.y)}}function rj(e,t){let r=.5;const s=At(e),l=At(t);return l>s?r=Po(t.min,t.max-s,e.min):s>l&&(r=Po(e.min,e.max-l,t.min)),vi(0,1,r)}function aj(e,t){const r={};return t.min!==void 0&&(r.min=t.min-e.min),t.max!==void 0&&(r.max=t.max-e.min),r}const Bm=.35;function sj(e=Bm){return e===!1?e=0:e===!0&&(e=Bm),{x:y2(e,"left","right"),y:y2(e,"top","bottom")}}function y2(e,t,r){return{min:v2(e,t),max:v2(e,r)}}function v2(e,t){return typeof e=="number"?e:e[t]||0}const oj=new WeakMap;class lj{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=We(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:r=!1,distanceThreshold:s}={}){const{presenceContext:l}=this.visualElement;if(l&&l.isPresent===!1)return;const c=x=>{const{dragSnapToOrigin:w}=this.getProps();w?this.pauseAnimation():this.stopAnimation(),r&&this.snapToCursor(el(x).point)},f=(x,w)=>{const{drag:C,dragPropagation:R,onDragStart:O}=this.getProps();if(C&&!R&&(this.openDragLock&&this.openDragLock(),this.openDragLock=mA(C),!this.openDragLock))return;this.latestPointerEvent=x,this.latestPanInfo=w,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),un(_=>{let U=this.getAxisMotionValue(_).get()||0;if(Un.test(U)){const{projection:z}=this.visualElement;if(z&&z.layout){const Q=z.layout.layoutBox[_];Q&&(U=At(Q)*(parseFloat(U)/100))}}this.originPoint[_]=U}),O&&Ve.postRender(()=>O(x,w)),$m(this.visualElement,"transform");const{animationState:N}=this.visualElement;N&&N.setActive("whileDrag",!0)},p=(x,w)=>{this.latestPointerEvent=x,this.latestPanInfo=w;const{dragPropagation:C,dragDirectionLock:R,onDirectionLock:O,onDrag:N}=this.getProps();if(!C&&!this.openDragLock)return;const{offset:_}=w;if(R&&this.currentDirection===null){this.currentDirection=cj(_),this.currentDirection!==null&&O&&O(this.currentDirection);return}this.updateAxis("x",w.point,_),this.updateAxis("y",w.point,_),this.visualElement.render(),N&&N(x,w)},m=(x,w)=>{this.latestPointerEvent=x,this.latestPanInfo=w,this.stop(x,w),this.latestPointerEvent=null,this.latestPanInfo=null},g=()=>un(x=>this.getAnimationState(x)==="paused"&&this.getAxisMotionValue(x).animation?.play()),{dragSnapToOrigin:y}=this.getProps();this.panSession=new Dw(t,{onSessionStart:c,onStart:f,onMove:p,onSessionEnd:m,resumeAnimation:g},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:y,distanceThreshold:s,contextWindow:Rw(this.visualElement)})}stop(t,r){const s=t||this.latestPointerEvent,l=r||this.latestPanInfo,c=this.isDragging;if(this.cancel(),!c||!l||!s)return;const{velocity:f}=l;this.startAnimation(f);const{onDragEnd:p}=this.getProps();p&&Ve.postRender(()=>p(s,l))}cancel(){this.isDragging=!1;const{projection:t,animationState:r}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:s}=this.getProps();!s&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),r&&r.setActive("whileDrag",!1)}updateAxis(t,r,s){const{drag:l}=this.getProps();if(!s||!Rc(t,l,this.currentDirection))return;const c=this.getAxisMotionValue(t);let f=this.originPoint[t]+s[t];this.constraints&&this.constraints[t]&&(f=tj(f,this.constraints[t],this.elastic[t])),c.set(f)}resolveConstraints(){const{dragConstraints:t,dragElastic:r}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,l=this.constraints;t&&Ga(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&s?this.constraints=nj(s.layoutBox,t):this.constraints=!1,this.elastic=sj(r),l!==this.constraints&&s&&this.constraints&&!this.hasMutatedConstraints&&un(c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=aj(s.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:r}=this.getProps();if(!t||!Ga(t))return!1;const s=t.current,{projection:l}=this.visualElement;if(!l||!l.layout)return!1;const c=u_(s,l.root,this.visualElement.getTransformPagePoint());let f=ij(l.layout.layoutBox,c);if(r){const p=r(o_(f));this.hasMutatedConstraints=!!p,p&&(f=mw(p))}return f}startAnimation(t){const{drag:r,dragMomentum:s,dragElastic:l,dragTransition:c,dragSnapToOrigin:f,onDragTransitionEnd:p}=this.getProps(),m=this.constraints||{},g=un(y=>{if(!Rc(y,r,this.currentDirection))return;let x=m&&m[y]||{};f&&(x={min:0,max:0});const w=l?200:1e6,C=l?40:1e7,R={type:"inertia",velocity:s?t[y]:0,bounceStiffness:w,bounceDamping:C,timeConstant:750,restDelta:1,restSpeed:10,...c,...x};return this.startAxisValueAnimation(y,R)});return Promise.all(g).then(p)}startAxisValueAnimation(t,r){const s=this.getAxisMotionValue(t);return $m(this.visualElement,t),s.start(Qp(t,s,0,r,this.visualElement,!1))}stopAnimation(){un(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){un(t=>this.getAxisMotionValue(t).animation?.pause())}getAnimationState(t){return this.getAxisMotionValue(t).animation?.state}getAxisMotionValue(t){const r=`_drag${t.toUpperCase()}`,s=this.visualElement.getProps(),l=s[r];return l||this.visualElement.getValue(t,(s.initial?s.initial[t]:void 0)||0)}snapToCursor(t){un(r=>{const{drag:s}=this.getProps();if(!Rc(r,s,this.currentDirection))return;const{projection:l}=this.visualElement,c=this.getAxisMotionValue(r);if(l&&l.layout){const{min:f,max:p}=l.layout.layoutBox[r];c.set(t[r]-Ge(f,p,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:r}=this.getProps(),{projection:s}=this.visualElement;if(!Ga(r)||!s||!this.constraints)return;this.stopAnimation();const l={x:0,y:0};un(f=>{const p=this.getAxisMotionValue(f);if(p&&this.constraints!==!1){const m=p.get();l[f]=rj({min:m,max:m},this.constraints[f])}});const{transformTemplate:c}=this.visualElement.getProps();this.visualElement.current.style.transform=c?c({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.resolveConstraints(),un(f=>{if(!Rc(f,t,null))return;const p=this.getAxisMotionValue(f),{min:m,max:g}=this.constraints[f];p.set(Ge(m,g,l[f]))})}addListeners(){if(!this.visualElement.current)return;oj.set(this.visualElement,this);const t=this.visualElement.current,r=Ro(t,"pointerdown",m=>{const{drag:g,dragListener:y=!0}=this.getProps();g&&y&&this.start(m)}),s=()=>{const{dragConstraints:m}=this.getProps();Ga(m)&&m.current&&(this.constraints=this.resolveRefConstraints())},{projection:l}=this.visualElement,c=l.addEventListener("measure",s);l&&!l.layout&&(l.root&&l.root.updateScroll(),l.updateLayout()),Ve.read(s);const f=Vo(window,"resize",()=>this.scalePositionWithinConstraints()),p=l.addEventListener("didUpdate",({delta:m,hasLayoutChanged:g})=>{this.isDragging&&g&&(un(y=>{const x=this.getAxisMotionValue(y);x&&(this.originPoint[y]+=m[y].translate,x.set(x.get()+m[y].translate))}),this.visualElement.render())});return()=>{f(),r(),c(),p&&p()}}getProps(){const t=this.visualElement.getProps(),{drag:r=!1,dragDirectionLock:s=!1,dragPropagation:l=!1,dragConstraints:c=!1,dragElastic:f=Bm,dragMomentum:p=!0}=t;return{...t,drag:r,dragDirectionLock:s,dragPropagation:l,dragConstraints:c,dragElastic:f,dragMomentum:p}}}function Rc(e,t,r){return(t===!0||t===e)&&(r===null||r===e)}function cj(e,t=10){let r=null;return Math.abs(e.y)>t?r="y":Math.abs(e.x)>t&&(r="x"),r}class uj extends mr{constructor(t){super(t),this.removeGroupControls=fn,this.removeListeners=fn,this.controls=new lj(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||fn}unmount(){this.removeGroupControls(),this.removeListeners()}}const x2=e=>(t,r)=>{e&&Ve.postRender(()=>e(t,r))};class dj extends mr{constructor(){super(...arguments),this.removePointerDownListener=fn}onPointerDown(t){this.session=new Dw(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Rw(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:r,onPan:s,onPanEnd:l}=this.node.getProps();return{onSessionStart:x2(t),onStart:x2(r),onMove:s,onEnd:(c,f)=>{delete this.session,l&&Ve.postRender(()=>l(c,f))}}}mount(){this.removePointerDownListener=Ro(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Yc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function b2(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const bo={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(fe.test(e))e=parseFloat(e);else return e;const r=b2(e,t.target.x),s=b2(e,t.target.y);return`${r}% ${s}%`}},fj={correct:(e,{treeScale:t,projectionDelta:r})=>{const s=e,l=fr.parse(e);if(l.length>5)return s;const c=fr.createTransformer(e),f=typeof l[0]!="number"?1:0,p=r.x.scale*t.x,m=r.y.scale*t.y;l[0+f]/=p,l[1+f]/=m;const g=Ge(p,m,.5);return typeof l[2+f]=="number"&&(l[2+f]/=g),typeof l[3+f]=="number"&&(l[3+f]/=g),c(l)}};let _h=!1;class hj extends T.Component{componentDidMount(){const{visualElement:t,layoutGroup:r,switchLayoutGroup:s,layoutId:l}=this.props,{projection:c}=t;LA(mj),c&&(r.group&&r.group.add(c),s&&s.register&&l&&s.register(c),_h&&c.root.didUpdate(),c.addEventListener("animationComplete",()=>{this.safeToRemove()}),c.setOptions({...c.options,onExitComplete:()=>this.safeToRemove()})),Yc.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:r,visualElement:s,drag:l,isPresent:c}=this.props,{projection:f}=s;return f&&(f.isPresent=c,_h=!0,l||t.layoutDependency!==r||r===void 0||t.isPresent!==c?f.willUpdate():this.safeToRemove(),t.isPresent!==c&&(c?f.promote():f.relegate()||Ve.postRender(()=>{const p=f.getStack();(!p||!p.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Up.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:r,switchLayoutGroup:s}=this.props,{projection:l}=t;_h=!0,l&&(l.scheduleCheckAfterUnmount(),r&&r.group&&r.group.remove(l),s&&s.deregister&&s.deregister(l))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function kw(e){const[t,r]=ew(),s=T.useContext(vp);return d.jsx(hj,{...e,layoutGroup:s,switchLayoutGroup:T.useContext(fw),isPresent:t,safeToRemove:r})}const mj={borderRadius:{...bo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:bo,borderTopRightRadius:bo,borderBottomLeftRadius:bo,borderBottomRightRadius:bo,boxShadow:fj};function pj(e,t,r){const s=St(e)?e:ts(e);return s.start(Qp("",s,t,r)),s.animation}const gj=(e,t)=>e.depth-t.depth;class yj{constructor(){this.children=[],this.isDirty=!1}add(t){wp(this.children,t),this.isDirty=!0}remove(t){Sp(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(gj),this.isDirty=!1,this.children.forEach(t)}}function vj(e,t){const r=Pt.now(),s=({timestamp:l})=>{const c=l-r;c>=t&&(dr(s),e(c-t))};return Ve.setup(s,!0),()=>dr(s)}const Ow=["TopLeft","TopRight","BottomLeft","BottomRight"],xj=Ow.length,w2=e=>typeof e=="string"?parseFloat(e):e,S2=e=>typeof e=="number"||fe.test(e);function bj(e,t,r,s,l,c){l?(e.opacity=Ge(0,r.opacity??1,wj(s)),e.opacityExit=Ge(t.opacity??1,0,Sj(s))):c&&(e.opacity=Ge(t.opacity??1,r.opacity??1,s));for(let f=0;f<xj;f++){const p=`border${Ow[f]}Radius`;let m=E2(t,p),g=E2(r,p);if(m===void 0&&g===void 0)continue;m||(m=0),g||(g=0),m===0||g===0||S2(m)===S2(g)?(e[p]=Math.max(Ge(w2(m),w2(g),s),0),(Un.test(g)||Un.test(m))&&(e[p]+="%")):e[p]=g}(t.rotate||r.rotate)&&(e.rotate=Ge(t.rotate||0,r.rotate||0,s))}function E2(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const wj=Nw(0,.5,b5),Sj=Nw(.5,.95,fn);function Nw(e,t,r){return s=>s<e?0:s>t?1:r(Po(e,t,s))}function T2(e,t){e.min=t.min,e.max=t.max}function on(e,t){T2(e.x,t.x),T2(e.y,t.y)}function C2(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function A2(e,t,r,s,l){return e-=t,e=cu(e,1/r,s),l!==void 0&&(e=cu(e,1/l,s)),e}function Ej(e,t=0,r=1,s=.5,l,c=e,f=e){if(Un.test(t)&&(t=parseFloat(t),t=Ge(f.min,f.max,t/100)-f.min),typeof t!="number")return;let p=Ge(c.min,c.max,s);e===c&&(p-=t),e.min=A2(e.min,t,r,p,l),e.max=A2(e.max,t,r,p,l)}function _2(e,t,[r,s,l],c,f){Ej(e,t[r],t[s],t[l],t.scale,c,f)}const Tj=["x","scaleX","originX"],Cj=["y","scaleY","originY"];function j2(e,t,r,s){_2(e.x,t,Tj,r?r.x:void 0,s?s.x:void 0),_2(e.y,t,Cj,r?r.y:void 0,s?s.y:void 0)}function R2(e){return e.translate===0&&e.scale===1}function Lw(e){return R2(e.x)&&R2(e.y)}function D2(e,t){return e.min===t.min&&e.max===t.max}function Aj(e,t){return D2(e.x,t.x)&&D2(e.y,t.y)}function M2(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function zw(e,t){return M2(e.x,t.x)&&M2(e.y,t.y)}function k2(e){return At(e.x)/At(e.y)}function O2(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class _j{constructor(){this.members=[]}add(t){wp(this.members,t),t.scheduleRender()}remove(t){if(Sp(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const r=this.members[this.members.length-1];r&&this.promote(r)}}relegate(t){const r=this.members.findIndex(l=>t===l);if(r===0)return!1;let s;for(let l=r;l>=0;l--){const c=this.members[l];if(c.isPresent!==!1){s=c;break}}return s?(this.promote(s),!0):!1}promote(t,r){const s=this.lead;if(t!==s&&(this.prevLead=s,this.lead=t,t.show(),s)){s.instance&&s.scheduleRender(),t.scheduleRender(),t.resumeFrom=s,r&&(t.resumeFrom.preserveOpacity=!0),s.snapshot&&(t.snapshot=s.snapshot,t.snapshot.latestValues=s.animationValues||s.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:l}=t.options;l===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:r,resumingFrom:s}=t;r.onExitComplete&&r.onExitComplete(),s&&s.options.onExitComplete&&s.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function jj(e,t,r){let s="";const l=e.x.translate/t.x,c=e.y.translate/t.y,f=r?.z||0;if((l||c||f)&&(s=`translate3d(${l}px, ${c}px, ${f}px) `),(t.x!==1||t.y!==1)&&(s+=`scale(${1/t.x}, ${1/t.y}) `),r){const{transformPerspective:g,rotate:y,rotateX:x,rotateY:w,skewX:C,skewY:R}=r;g&&(s=`perspective(${g}px) ${s}`),y&&(s+=`rotate(${y}deg) `),x&&(s+=`rotateX(${x}deg) `),w&&(s+=`rotateY(${w}deg) `),C&&(s+=`skewX(${C}deg) `),R&&(s+=`skewY(${R}deg) `)}const p=e.x.scale*t.x,m=e.y.scale*t.y;return(p!==1||m!==1)&&(s+=`scale(${p}, ${m})`),s||"none"}const jh=["","X","Y","Z"],Rj=1e3;let Dj=0;function Rh(e,t,r,s){const{latestValues:l}=t;l[e]&&(r[e]=l[e],t.setStaticValue(e,0),s&&(s[e]=0))}function Pw(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const r=Sw(t);if(window.MotionHasOptimisedAnimation(r,"transform")){const{layout:l,layoutId:c}=e.options;window.MotionCancelOptimisedAnimation(r,"transform",Ve,!(l||c))}const{parent:s}=e;s&&!s.hasCheckedOptimisedAppear&&Pw(s)}function Iw({attachResizeListener:e,defaultParent:t,measureScroll:r,checkIsScrollRoot:s,resetTransform:l}){return class{constructor(f={},p=t?.()){this.id=Dj++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(Oj),this.nodes.forEach(Pj),this.nodes.forEach(Ij),this.nodes.forEach(Nj)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=f,this.root=p?p.root||p:this,this.path=p?[...p.path,p]:[],this.parent=p,this.depth=p?p.depth+1:0;for(let m=0;m<this.path.length;m++)this.path[m].shouldResetTransform=!0;this.root===this&&(this.nodes=new yj)}addEventListener(f,p){return this.eventHandlers.has(f)||this.eventHandlers.set(f,new Cp),this.eventHandlers.get(f).add(p)}notifyListeners(f,...p){const m=this.eventHandlers.get(f);m&&m.notify(...p)}hasListeners(f){return this.eventHandlers.has(f)}mount(f){if(this.instance)return;this.isSVG=J5(f)&&!bA(f),this.instance=f;const{layoutId:p,layout:m,visualElement:g}=this.options;if(g&&!g.current&&g.mount(f),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(m||p)&&(this.isLayoutDirty=!0),e){let y,x=0;const w=()=>this.root.updateBlockedByResize=!1;Ve.read(()=>{x=window.innerWidth}),e(f,()=>{const C=window.innerWidth;C!==x&&(x=C,this.root.updateBlockedByResize=!0,y&&y(),y=vj(w,250),Yc.hasAnimatedSinceResize&&(Yc.hasAnimatedSinceResize=!1,this.nodes.forEach(z2)))})}p&&this.root.registerSharedNode(p,this),this.options.animate!==!1&&g&&(p||m)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:x,hasRelativeLayoutChanged:w,layout:C})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const R=this.options.transition||g.getDefaultTransition()||Hj,{onLayoutAnimationStart:O,onLayoutAnimationComplete:N}=g.getProps(),_=!this.targetLayout||!zw(this.targetLayout,C),U=!x&&w;if(this.options.layoutRoot||this.resumeFrom||U||x&&(_||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const z={...Ip(R,"layout"),onPlay:O,onComplete:N};(g.shouldReduceMotion||this.options.layoutRoot)&&(z.delay=0,z.type=!1),this.startAnimation(z),this.setAnimationOrigin(y,U)}else x||z2(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=C})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const f=this.getStack();f&&f.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),dr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach($j),this.animationId++)}getTransformTemplate(){const{visualElement:f}=this.options;return f&&f.getProps().transformTemplate}willUpdate(f=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Pw(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const x=this.path[y];x.shouldResetTransform=!0,x.updateScroll("snapshot"),x.options.layoutRoot&&x.willUpdate(!1)}const{layoutId:p,layout:m}=this.options;if(p===void 0&&!m)return;const g=this.getTransformTemplate();this.prevTransformTemplateValue=g?g(this.latestValues,""):void 0,this.updateSnapshot(),f&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(N2);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(L2);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(zj),this.nodes.forEach(Mj),this.nodes.forEach(kj)):this.nodes.forEach(L2),this.clearAllSnapshots();const p=Pt.now();pt.delta=vi(0,1e3/60,p-pt.timestamp),pt.timestamp=p,pt.isProcessing=!0,yh.update.process(pt),yh.preRender.process(pt),yh.render.process(pt),pt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Up.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Lj),this.sharedNodes.forEach(Uj)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ve.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ve.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!At(this.snapshot.measuredBox.x)&&!At(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let m=0;m<this.path.length;m++)this.path[m].updateScroll();const f=this.layout;this.layout=this.measure(!1),this.layoutCorrected=We(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:p}=this.options;p&&p.notify("LayoutMeasure",this.layout.layoutBox,f?f.layoutBox:void 0)}updateScroll(f="measure"){let p=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===f&&(p=!1),p&&this.instance){const m=s(this.instance);this.scroll={animationId:this.root.animationId,phase:f,isRoot:m,offset:r(this.instance),wasRoot:this.scroll?this.scroll.isRoot:m}}}resetTransform(){if(!l)return;const f=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,p=this.projectionDelta&&!Lw(this.projectionDelta),m=this.getTransformTemplate(),g=m?m(this.latestValues,""):void 0,y=g!==this.prevTransformTemplateValue;f&&this.instance&&(p||Ir(this.latestValues)||y)&&(l(this.instance,g),this.shouldResetTransform=!1,this.scheduleRender())}measure(f=!0){const p=this.measurePageBox();let m=this.removeElementScroll(p);return f&&(m=this.removeTransform(m)),Fj(m),{animationId:this.root.animationId,measuredBox:p,layoutBox:m,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:f}=this.options;if(!f)return We();const p=f.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(qj))){const{scroll:g}=this.root;g&&(Ya(p.x,g.offset.x),Ya(p.y,g.offset.y))}return p}removeElementScroll(f){const p=We();if(on(p,f),this.scroll?.wasRoot)return p;for(let m=0;m<this.path.length;m++){const g=this.path[m],{scroll:y,options:x}=g;g!==this.root&&y&&x.layoutScroll&&(y.wasRoot&&on(p,f),Ya(p.x,y.offset.x),Ya(p.y,y.offset.y))}return p}applyTransform(f,p=!1){const m=We();on(m,f);for(let g=0;g<this.path.length;g++){const y=this.path[g];!p&&y.options.layoutScroll&&y.scroll&&y!==y.root&&Ka(m,{x:-y.scroll.offset.x,y:-y.scroll.offset.y}),Ir(y.latestValues)&&Ka(m,y.latestValues)}return Ir(this.latestValues)&&Ka(m,this.latestValues),m}removeTransform(f){const p=We();on(p,f);for(let m=0;m<this.path.length;m++){const g=this.path[m];if(!g.instance||!Ir(g.latestValues))continue;Lm(g.latestValues)&&g.updateSnapshot();const y=We(),x=g.measurePageBox();on(y,x),j2(p,g.latestValues,g.snapshot?g.snapshot.layoutBox:void 0,y)}return Ir(this.latestValues)&&j2(p,this.latestValues),p}setTargetDelta(f){this.targetDelta=f,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(f){this.options={...this.options,...f,crossfade:f.crossfade!==void 0?f.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==pt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(f=!1){const p=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=p.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=p.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=p.isSharedProjectionDirty);const m=!!this.resumingFrom||this!==p;if(!(f||m&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:x}=this.options;if(!(!this.layout||!(y||x))){if(this.resolvedRelativeTargetAt=pt.timestamp,!this.targetDelta&&!this.relativeTarget){const w=this.getClosestProjectingParent();w&&w.layout&&this.animationProgress!==1?(this.relativeParent=w,this.forceRelativeParentToResolveTarget(),this.relativeTarget=We(),this.relativeTargetOrigin=We(),Mo(this.relativeTargetOrigin,this.layout.layoutBox,w.layout.layoutBox),on(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=We(),this.targetWithTransforms=We()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Q_(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):on(this.target,this.layout.layoutBox),gw(this.target,this.targetDelta)):on(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const w=this.getClosestProjectingParent();w&&!!w.resumingFrom==!!this.resumingFrom&&!w.options.layoutScroll&&w.target&&this.animationProgress!==1?(this.relativeParent=w,this.forceRelativeParentToResolveTarget(),this.relativeTarget=We(),this.relativeTargetOrigin=We(),Mo(this.relativeTargetOrigin,this.target,w.target),on(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||Lm(this.parent.latestValues)||pw(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){const f=this.getLead(),p=!!this.resumingFrom||this!==f;let m=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(m=!1),p&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(m=!1),this.resolvedRelativeTargetAt===pt.timestamp&&(m=!1),m)return;const{layout:g,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||y))return;on(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,w=this.treeScale.y;c_(this.layoutCorrected,this.treeScale,this.path,p),f.layout&&!f.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(f.target=f.layout.layoutBox,f.targetWithTransforms=We());const{target:C}=f;if(!C){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(C2(this.prevProjectionDelta.x,this.projectionDelta.x),C2(this.prevProjectionDelta.y,this.projectionDelta.y)),Do(this.projectionDelta,this.layoutCorrected,C,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==w||!O2(this.projectionDelta.x,this.prevProjectionDelta.x)||!O2(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",C))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(f=!0){if(this.options.visualElement?.scheduleRender(),f){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Xa(),this.projectionDelta=Xa(),this.projectionDeltaWithTransform=Xa()}setAnimationOrigin(f,p=!1){const m=this.snapshot,g=m?m.latestValues:{},y={...this.latestValues},x=Xa();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!p;const w=We(),C=m?m.source:void 0,R=this.layout?this.layout.source:void 0,O=C!==R,N=this.getStack(),_=!N||N.members.length<=1,U=!!(O&&!_&&this.options.crossfade===!0&&!this.path.some(Vj));this.animationProgress=0;let z;this.mixTargetDelta=Q=>{const G=Q/1e3;P2(x.x,f.x,G),P2(x.y,f.y,G),this.setTargetDelta(x),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Mo(w,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Bj(this.relativeTarget,this.relativeTargetOrigin,w,G),z&&Aj(this.relativeTarget,z)&&(this.isProjectionDirty=!1),z||(z=We()),on(z,this.relativeTarget)),O&&(this.animationValues=y,bj(y,g,this.latestValues,G,U,_)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=G},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(f){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(dr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ve.update(()=>{Yc.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=ts(0)),this.currentAnimation=pj(this.motionValue,[0,1e3],{...f,velocity:0,isSync:!0,onUpdate:p=>{this.mixTargetDelta(p),f.onUpdate&&f.onUpdate(p)},onStop:()=>{},onComplete:()=>{f.onComplete&&f.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const f=this.getStack();f&&f.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Rj),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const f=this.getLead();let{targetWithTransforms:p,target:m,layout:g,latestValues:y}=f;if(!(!p||!m||!g)){if(this!==f&&this.layout&&g&&$w(this.options.animationType,this.layout.layoutBox,g.layoutBox)){m=this.target||We();const x=At(this.layout.layoutBox.x);m.x.min=f.target.x.min,m.x.max=m.x.min+x;const w=At(this.layout.layoutBox.y);m.y.min=f.target.y.min,m.y.max=m.y.min+w}on(p,m),Ka(p,y),Do(this.projectionDeltaWithTransform,this.layoutCorrected,p,y)}}registerSharedNode(f,p){this.sharedNodes.has(f)||this.sharedNodes.set(f,new _j),this.sharedNodes.get(f).add(p);const g=p.options.initialPromotionConfig;p.promote({transition:g?g.transition:void 0,preserveFollowOpacity:g&&g.shouldPreserveFollowOpacity?g.shouldPreserveFollowOpacity(p):void 0})}isLead(){const f=this.getStack();return f?f.lead===this:!0}getLead(){const{layoutId:f}=this.options;return f?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:f}=this.options;return f?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:f}=this.options;if(f)return this.root.sharedNodes.get(f)}promote({needsReset:f,transition:p,preserveFollowOpacity:m}={}){const g=this.getStack();g&&g.promote(this,m),f&&(this.projectionDelta=void 0,this.needsReset=!0),p&&this.setOptions({transition:p})}relegate(){const f=this.getStack();return f?f.relegate(this):!1}resetSkewAndRotation(){const{visualElement:f}=this.options;if(!f)return;let p=!1;const{latestValues:m}=f;if((m.z||m.rotate||m.rotateX||m.rotateY||m.rotateZ||m.skewX||m.skewY)&&(p=!0),!p)return;const g={};m.z&&Rh("z",f,g,this.animationValues);for(let y=0;y<jh.length;y++)Rh(`rotate${jh[y]}`,f,g,this.animationValues),Rh(`skew${jh[y]}`,f,g,this.animationValues);f.render();for(const y in g)f.setStaticValue(y,g[y]),this.animationValues&&(this.animationValues[y]=g[y]);f.scheduleRender()}applyProjectionStyles(f,p){if(!this.instance||this.isSVG)return;if(!this.isVisible){f.visibility="hidden";return}const m=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,f.visibility="",f.opacity="",f.pointerEvents=Gc(p?.pointerEvents)||"",f.transform=m?m(this.latestValues,""):"none";return}const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){this.options.layoutId&&(f.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,f.pointerEvents=Gc(p?.pointerEvents)||""),this.hasProjected&&!Ir(this.latestValues)&&(f.transform=m?m({},""):"none",this.hasProjected=!1);return}f.visibility="";const y=g.animationValues||g.latestValues;this.applyTransformsToTarget();let x=jj(this.projectionDeltaWithTransform,this.treeScale,y);m&&(x=m(y,x)),f.transform=x;const{x:w,y:C}=this.projectionDelta;f.transformOrigin=`${w.origin*100}% ${C.origin*100}% 0`,g.animationValues?f.opacity=g===this?y.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:y.opacityExit:f.opacity=g===this?y.opacity!==void 0?y.opacity:"":y.opacityExit!==void 0?y.opacityExit:0;for(const R in Bo){if(y[R]===void 0)continue;const{correct:O,applyTo:N,isCSSVariable:_}=Bo[R],U=x==="none"?y[R]:O(y[R],g);if(N){const z=N.length;for(let Q=0;Q<z;Q++)f[N[Q]]=U}else _?this.options.visualElement.renderState.vars[R]=U:f[R]=U}this.options.layoutId&&(f.pointerEvents=g===this?Gc(p?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(f=>f.currentAnimation?.stop()),this.root.nodes.forEach(N2),this.root.sharedNodes.clear()}}}function Mj(e){e.updateLayout()}function kj(e){const t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:s}=e.layout,{animationType:l}=e.options,c=t.source!==e.layout.source;l==="size"?un(y=>{const x=c?t.measuredBox[y]:t.layoutBox[y],w=At(x);x.min=r[y].min,x.max=x.min+w}):$w(l,t.layoutBox,r)&&un(y=>{const x=c?t.measuredBox[y]:t.layoutBox[y],w=At(r[y]);x.max=x.min+w,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[y].max=e.relativeTarget[y].min+w)});const f=Xa();Do(f,r,t.layoutBox);const p=Xa();c?Do(p,e.applyTransform(s,!0),t.measuredBox):Do(p,r,t.layoutBox);const m=!Lw(f);let g=!1;if(!e.resumeFrom){const y=e.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:x,layout:w}=y;if(x&&w){const C=We();Mo(C,t.layoutBox,x.layoutBox);const R=We();Mo(R,r,w.layoutBox),zw(C,R)||(g=!0),y.options.layoutRoot&&(e.relativeTarget=R,e.relativeTargetOrigin=C,e.relativeParent=y)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:t,delta:p,layoutDelta:f,hasLayoutChanged:m,hasRelativeLayoutChanged:g})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function Oj(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function Nj(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Lj(e){e.clearSnapshot()}function N2(e){e.clearMeasurements()}function L2(e){e.isLayoutDirty=!1}function zj(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function z2(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function Pj(e){e.resolveTargetDelta()}function Ij(e){e.calcProjection()}function $j(e){e.resetSkewAndRotation()}function Uj(e){e.removeLeadSnapshot()}function P2(e,t,r){e.translate=Ge(t.translate,0,r),e.scale=Ge(t.scale,1,r),e.origin=t.origin,e.originPoint=t.originPoint}function I2(e,t,r,s){e.min=Ge(t.min,r.min,s),e.max=Ge(t.max,r.max,s)}function Bj(e,t,r,s){I2(e.x,t.x,r.x,s),I2(e.y,t.y,r.y,s)}function Vj(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const Hj={duration:.45,ease:[.4,0,.1,1]},$2=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),U2=$2("applewebkit/")&&!$2("chrome/")?Math.round:fn;function B2(e){e.min=U2(e.min),e.max=U2(e.max)}function Fj(e){B2(e.x),B2(e.y)}function $w(e,t,r){return e==="position"||e==="preserve-aspect"&&!Z_(k2(t),k2(r),.2)}function qj(e){return e!==e.root&&e.scroll?.wasRoot}const Gj=Iw({attachResizeListener:(e,t)=>Vo(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Dh={current:void 0},Uw=Iw({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Dh.current){const e=new Gj({});e.mount(window),e.setOptions({layoutScroll:!0}),Dh.current=e}return Dh.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),Yj={pan:{Feature:dj},drag:{Feature:uj,ProjectionNode:Uw,MeasureLayout:kw}};function V2(e,t,r){const{props:s}=e;e.animationState&&s.whileHover&&e.animationState.setActive("whileHover",r==="Start");const l="onHover"+r,c=s[l];c&&Ve.postRender(()=>c(t,el(t)))}class Kj extends mr{mount(){const{current:t}=this.node;t&&(this.unmount=pA(t,(r,s)=>(V2(this.node,s,"Start"),l=>V2(this.node,l,"End"))))}unmount(){}}class Xj extends mr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Qo(Vo(this.node.current,"focus",()=>this.onFocus()),Vo(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function H2(e,t,r){const{props:s}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&s.whileTap&&e.animationState.setActive("whileTap",r==="Start");const l="onTap"+(r==="End"?"":r),c=s[l];c&&Ve.postRender(()=>c(t,el(t)))}class Zj extends mr{mount(){const{current:t}=this.node;t&&(this.unmount=xA(t,(r,s)=>(H2(this.node,s,"Start"),(l,{success:c})=>H2(this.node,l,c?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Vm=new WeakMap,Mh=new WeakMap,Qj=e=>{const t=Vm.get(e.target);t&&t(e)},Wj=e=>{e.forEach(Qj)};function Jj({root:e,...t}){const r=e||document;Mh.has(r)||Mh.set(r,{});const s=Mh.get(r),l=JSON.stringify(t);return s[l]||(s[l]=new IntersectionObserver(Wj,{root:e,...t})),s[l]}function eR(e,t,r){const s=Jj(t);return Vm.set(e,r),s.observe(e),()=>{Vm.delete(e),s.unobserve(e)}}const tR={some:0,all:1};class nR extends mr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:r,margin:s,amount:l="some",once:c}=t,f={root:r?r.current:void 0,rootMargin:s,threshold:typeof l=="number"?l:tR[l]},p=m=>{const{isIntersecting:g}=m;if(this.isInView===g||(this.isInView=g,c&&!g&&this.hasEnteredView))return;g&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",g);const{onViewportEnter:y,onViewportLeave:x}=this.node.getProps(),w=g?y:x;w&&w(m)};return eR(this.node.current,f,p)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:r}=this.node;["amount","margin","root"].some(iR(t,r))&&this.startObserver()}unmount(){}}function iR({viewport:e={}},{viewport:t={}}={}){return r=>e[r]!==t[r]}const rR={inView:{Feature:nR},tap:{Feature:Zj},focus:{Feature:Xj},hover:{Feature:Kj}},aR={layout:{ProjectionNode:Uw,MeasureLayout:kw}},sR={...F_,...rR,...Yj,...aR},he=s_(sR,x_);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oR=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),lR=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,r,s)=>s?s.toUpperCase():r.toLowerCase()),F2=e=>{const t=lR(e);return t.charAt(0).toUpperCase()+t.slice(1)},Bw=(...e)=>e.filter((t,r,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===r).join(" ").trim(),cR=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var uR={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dR=T.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:f,...p},m)=>T.createElement("svg",{ref:m,...uR,width:t,height:t,stroke:e,strokeWidth:s?Number(r)*24/Number(t):r,className:Bw("lucide",l),...!c&&!cR(p)&&{"aria-hidden":"true"},...p},[...f.map(([g,y])=>T.createElement(g,y)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tt=(e,t)=>{const r=T.forwardRef(({className:s,...l},c)=>T.createElement(dR,{ref:c,iconNode:t,className:Bw(`lucide-${oR(F2(e))}`,`lucide-${e}`,s),...l}));return r.displayName=F2(e),r};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fR=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],hR=Tt("calendar",fR);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mR=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],pR=Tt("camera",mR);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gR=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],yR=Tt("clock",gR);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vR=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],xR=Tt("eye",vR);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bR=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],wR=Tt("file-text",bR);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SR=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],ER=Tt("info",SR);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TR=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],CR=Tt("mail",TR);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AR=[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],_R=Tt("pen-line",AR);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jR=[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]],RR=Tt("percent",jR);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DR=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],MR=Tt("phone",DR);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kR=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],OR=Tt("save",kR);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NR=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],LR=Tt("shield",NR);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zR=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],PR=Tt("sparkles",zR);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IR=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],q2=Tt("trash-2",IR);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $R=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],G2=Tt("triangle-alert",$R);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UR=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],kh=Tt("x",UR);var Et=function(){return Et=Object.assign||function(t){for(var r,s=1,l=arguments.length;s<l;s++){r=arguments[s];for(var c in r)Object.prototype.hasOwnProperty.call(r,c)&&(t[c]=r[c])}return t},Et.apply(this,arguments)};function is(e,t,r){if(r||arguments.length===2)for(var s=0,l=t.length,c;s<l;s++)(c||!(s in t))&&(c||(c=Array.prototype.slice.call(t,0,s)),c[s]=t[s]);return e.concat(c||Array.prototype.slice.call(t))}var Ue="-ms-",ko="-moz-",Me="-webkit-",Vw="comm",$u="rule",Wp="decl",BR="@import",Hw="@keyframes",VR="@layer",Fw=Math.abs,Jp=String.fromCharCode,Hm=Object.assign;function HR(e,t){return dt(e,0)^45?(((t<<2^dt(e,0))<<2^dt(e,1))<<2^dt(e,2))<<2^dt(e,3):0}function qw(e){return e.trim()}function ui(e,t){return(e=t.exec(e))?e[0]:e}function ge(e,t,r){return e.replace(t,r)}function Kc(e,t,r){return e.indexOf(t,r)}function dt(e,t){return e.charCodeAt(t)|0}function rs(e,t,r){return e.slice(t,r)}function Pn(e){return e.length}function Gw(e){return e.length}function To(e,t){return t.push(e),e}function FR(e,t){return e.map(t).join("")}function Y2(e,t){return e.filter(function(r){return!ui(r,t)})}var Uu=1,as=1,Yw=0,hn=0,nt=0,ys="";function Bu(e,t,r,s,l,c,f,p){return{value:e,root:t,parent:r,type:s,props:l,children:c,line:Uu,column:as,length:f,return:"",siblings:p}}function tr(e,t){return Hm(Bu("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Ia(e){for(;e.root;)e=tr(e.root,{children:[e]});To(e,e.siblings)}function qR(){return nt}function GR(){return nt=hn>0?dt(ys,--hn):0,as--,nt===10&&(as=1,Uu--),nt}function wn(){return nt=hn<Yw?dt(ys,hn++):0,as++,nt===10&&(as=1,Uu++),nt}function Gr(){return dt(ys,hn)}function Xc(){return hn}function Vu(e,t){return rs(ys,e,t)}function Fm(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function YR(e){return Uu=as=1,Yw=Pn(ys=e),hn=0,[]}function KR(e){return ys="",e}function Oh(e){return qw(Vu(hn-1,qm(e===91?e+2:e===40?e+1:e)))}function XR(e){for(;(nt=Gr())&&nt<33;)wn();return Fm(e)>2||Fm(nt)>3?"":" "}function ZR(e,t){for(;--t&&wn()&&!(nt<48||nt>102||nt>57&&nt<65||nt>70&&nt<97););return Vu(e,Xc()+(t<6&&Gr()==32&&wn()==32))}function qm(e){for(;wn();)switch(nt){case e:return hn;case 34:case 39:e!==34&&e!==39&&qm(nt);break;case 40:e===41&&qm(e);break;case 92:wn();break}return hn}function QR(e,t){for(;wn()&&e+nt!==57;)if(e+nt===84&&Gr()===47)break;return"/*"+Vu(t,hn-1)+"*"+Jp(e===47?e:wn())}function WR(e){for(;!Fm(Gr());)wn();return Vu(e,hn)}function JR(e){return KR(Zc("",null,null,null,[""],e=YR(e),0,[0],e))}function Zc(e,t,r,s,l,c,f,p,m){for(var g=0,y=0,x=f,w=0,C=0,R=0,O=1,N=1,_=1,U=0,z="",Q=l,G=c,Y=s,H=z;N;)switch(R=U,U=wn()){case 40:if(R!=108&&dt(H,x-1)==58){Kc(H+=ge(Oh(U),"&","&\f"),"&\f",Fw(g?p[g-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:H+=Oh(U);break;case 9:case 10:case 13:case 32:H+=XR(R);break;case 92:H+=ZR(Xc()-1,7);continue;case 47:switch(Gr()){case 42:case 47:To(e7(QR(wn(),Xc()),t,r,m),m);break;default:H+="/"}break;case 123*O:p[g++]=Pn(H)*_;case 125*O:case 59:case 0:switch(U){case 0:case 125:N=0;case 59+y:_==-1&&(H=ge(H,/\f/g,"")),C>0&&Pn(H)-x&&To(C>32?X2(H+";",s,r,x-1,m):X2(ge(H," ","")+";",s,r,x-2,m),m);break;case 59:H+=";";default:if(To(Y=K2(H,t,r,g,y,l,p,z,Q=[],G=[],x,c),c),U===123)if(y===0)Zc(H,t,Y,Y,Q,c,x,p,G);else switch(w===99&&dt(H,3)===110?100:w){case 100:case 108:case 109:case 115:Zc(e,Y,Y,s&&To(K2(e,Y,Y,0,0,l,p,z,l,Q=[],x,G),G),l,G,x,p,s?Q:G);break;default:Zc(H,Y,Y,Y,[""],G,0,p,G)}}g=y=C=0,O=_=1,z=H="",x=f;break;case 58:x=1+Pn(H),C=R;default:if(O<1){if(U==123)--O;else if(U==125&&O++==0&&GR()==125)continue}switch(H+=Jp(U),U*O){case 38:_=y>0?1:(H+="\f",-1);break;case 44:p[g++]=(Pn(H)-1)*_,_=1;break;case 64:Gr()===45&&(H+=Oh(wn())),w=Gr(),y=x=Pn(z=H+=WR(Xc())),U++;break;case 45:R===45&&Pn(H)==2&&(O=0)}}return c}function K2(e,t,r,s,l,c,f,p,m,g,y,x){for(var w=l-1,C=l===0?c:[""],R=Gw(C),O=0,N=0,_=0;O<s;++O)for(var U=0,z=rs(e,w+1,w=Fw(N=f[O])),Q=e;U<R;++U)(Q=qw(N>0?C[U]+" "+z:ge(z,/&\f/g,C[U])))&&(m[_++]=Q);return Bu(e,t,r,l===0?$u:p,m,g,y,x)}function e7(e,t,r,s){return Bu(e,t,r,Vw,Jp(qR()),rs(e,2,-2),0,s)}function X2(e,t,r,s,l){return Bu(e,t,r,Wp,rs(e,0,s),rs(e,s+1,-1),s,l)}function Kw(e,t,r){switch(HR(e,t)){case 5103:return Me+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Me+e+e;case 4789:return ko+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Me+e+ko+e+Ue+e+e;case 5936:switch(dt(e,t+11)){case 114:return Me+e+Ue+ge(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Me+e+Ue+ge(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Me+e+Ue+ge(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Me+e+Ue+e+e;case 6165:return Me+e+Ue+"flex-"+e+e;case 5187:return Me+e+ge(e,/(\w+).+(:[^]+)/,Me+"box-$1$2"+Ue+"flex-$1$2")+e;case 5443:return Me+e+Ue+"flex-item-"+ge(e,/flex-|-self/g,"")+(ui(e,/flex-|baseline/)?"":Ue+"grid-row-"+ge(e,/flex-|-self/g,""))+e;case 4675:return Me+e+Ue+"flex-line-pack"+ge(e,/align-content|flex-|-self/g,"")+e;case 5548:return Me+e+Ue+ge(e,"shrink","negative")+e;case 5292:return Me+e+Ue+ge(e,"basis","preferred-size")+e;case 6060:return Me+"box-"+ge(e,"-grow","")+Me+e+Ue+ge(e,"grow","positive")+e;case 4554:return Me+ge(e,/([^-])(transform)/g,"$1"+Me+"$2")+e;case 6187:return ge(ge(ge(e,/(zoom-|grab)/,Me+"$1"),/(image-set)/,Me+"$1"),e,"")+e;case 5495:case 3959:return ge(e,/(image-set\([^]*)/,Me+"$1$`$1");case 4968:return ge(ge(e,/(.+:)(flex-)?(.*)/,Me+"box-pack:$3"+Ue+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Me+e+e;case 4200:if(!ui(e,/flex-|baseline/))return Ue+"grid-column-align"+rs(e,t)+e;break;case 2592:case 3360:return Ue+ge(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(s,l){return t=l,ui(s.props,/grid-\w+-end/)})?~Kc(e+(r=r[t].value),"span",0)?e:Ue+ge(e,"-start","")+e+Ue+"grid-row-span:"+(~Kc(r,"span",0)?ui(r,/\d+/):+ui(r,/\d+/)-+ui(e,/\d+/))+";":Ue+ge(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(s){return ui(s.props,/grid-\w+-start/)})?e:Ue+ge(ge(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ge(e,/(.+)-inline(.+)/,Me+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Pn(e)-1-t>6)switch(dt(e,t+1)){case 109:if(dt(e,t+4)!==45)break;case 102:return ge(e,/(.+:)(.+)-([^]+)/,"$1"+Me+"$2-$3$1"+ko+(dt(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Kc(e,"stretch",0)?Kw(ge(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return ge(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,l,c,f,p,m,g){return Ue+l+":"+c+g+(f?Ue+l+"-span:"+(p?m:+m-+c)+g:"")+e});case 4949:if(dt(e,t+6)===121)return ge(e,":",":"+Me)+e;break;case 6444:switch(dt(e,dt(e,14)===45?18:11)){case 120:return ge(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Me+(dt(e,14)===45?"inline-":"")+"box$3$1"+Me+"$2$3$1"+Ue+"$2box$3")+e;case 100:return ge(e,":",":"+Ue)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ge(e,"scroll-","scroll-snap-")+e}return e}function uu(e,t){for(var r="",s=0;s<e.length;s++)r+=t(e[s],s,e,t)||"";return r}function t7(e,t,r,s){switch(e.type){case VR:if(e.children.length)break;case BR:case Wp:return e.return=e.return||e.value;case Vw:return"";case Hw:return e.return=e.value+"{"+uu(e.children,s)+"}";case $u:if(!Pn(e.value=e.props.join(",")))return""}return Pn(r=uu(e.children,s))?e.return=e.value+"{"+r+"}":""}function n7(e){var t=Gw(e);return function(r,s,l,c){for(var f="",p=0;p<t;p++)f+=e[p](r,s,l,c)||"";return f}}function i7(e){return function(t){t.root||(t=t.return)&&e(t)}}function r7(e,t,r,s){if(e.length>-1&&!e.return)switch(e.type){case Wp:e.return=Kw(e.value,e.length,r);return;case Hw:return uu([tr(e,{value:ge(e.value,"@","@"+Me)})],s);case $u:if(e.length)return FR(r=e.props,function(l){switch(ui(l,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ia(tr(e,{props:[ge(l,/:(read-\w+)/,":"+ko+"$1")]})),Ia(tr(e,{props:[l]})),Hm(e,{props:Y2(r,s)});break;case"::placeholder":Ia(tr(e,{props:[ge(l,/:(plac\w+)/,":"+Me+"input-$1")]})),Ia(tr(e,{props:[ge(l,/:(plac\w+)/,":"+ko+"$1")]})),Ia(tr(e,{props:[ge(l,/:(plac\w+)/,Ue+"input-$1")]})),Ia(tr(e,{props:[l]})),Hm(e,{props:Y2(r,s)});break}return""})}}var a7={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Yt={},ss=typeof process<"u"&&Yt!==void 0&&(Yt.REACT_APP_SC_ATTR||Yt.SC_ATTR)||"data-styled",Xw="active",Zw="data-styled-version",Hu="6.1.19",eg=`/*!sc*/
`,du=typeof window<"u"&&typeof document<"u",s7=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Yt!==void 0&&Yt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Yt.REACT_APP_SC_DISABLE_SPEEDY!==""?Yt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Yt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Yt!==void 0&&Yt.SC_DISABLE_SPEEDY!==void 0&&Yt.SC_DISABLE_SPEEDY!==""&&Yt.SC_DISABLE_SPEEDY!=="false"&&Yt.SC_DISABLE_SPEEDY),o7={},Fu=Object.freeze([]),os=Object.freeze({});function Qw(e,t,r){return r===void 0&&(r=os),e.theme!==r.theme&&e.theme||t||r.theme}var Ww=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),l7=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,c7=/(^-|-$)/g;function Z2(e){return e.replace(l7,"-").replace(c7,"")}var u7=/(a)(d)/gi,Dc=52,Q2=function(e){return String.fromCharCode(e+(e>25?39:97))};function Gm(e){var t,r="";for(t=Math.abs(e);t>Dc;t=t/Dc|0)r=Q2(t%Dc)+r;return(Q2(t%Dc)+r).replace(u7,"$1-$2")}var Nh,Jw=5381,Za=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},e4=function(e){return Za(Jw,e)};function tg(e){return Gm(e4(e)>>>0)}function d7(e){return e.displayName||e.name||"Component"}function Lh(e){return typeof e=="string"&&!0}var t4=typeof Symbol=="function"&&Symbol.for,n4=t4?Symbol.for("react.memo"):60115,f7=t4?Symbol.for("react.forward_ref"):60112,h7={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},m7={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i4={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},p7=((Nh={})[f7]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Nh[n4]=i4,Nh);function W2(e){return("type"in(t=e)&&t.type.$$typeof)===n4?i4:"$$typeof"in e?p7[e.$$typeof]:h7;var t}var g7=Object.defineProperty,y7=Object.getOwnPropertyNames,J2=Object.getOwnPropertySymbols,v7=Object.getOwnPropertyDescriptor,x7=Object.getPrototypeOf,ex=Object.prototype;function r4(e,t,r){if(typeof t!="string"){if(ex){var s=x7(t);s&&s!==ex&&r4(e,s,r)}var l=y7(t);J2&&(l=l.concat(J2(t)));for(var c=W2(e),f=W2(t),p=0;p<l.length;++p){var m=l[p];if(!(m in m7||r&&r[m]||f&&m in f||c&&m in c)){var g=v7(t,m);try{g7(e,m,g)}catch{}}}}return e}function ls(e){return typeof e=="function"}function ng(e){return typeof e=="object"&&"styledComponentId"in e}function Vr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function fu(e,t){if(e.length===0)return"";for(var r=e[0],s=1;s<e.length;s++)r+=e[s];return r}function Ho(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ym(e,t,r){if(r===void 0&&(r=!1),!r&&!Ho(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var s=0;s<t.length;s++)e[s]=Ym(e[s],t[s]);else if(Ho(t))for(var s in t)e[s]=Ym(e[s],t[s]);return e}function ig(e,t){Object.defineProperty(e,"toString",{value:t})}function tl(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var b7=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,s=0;s<t;s++)r+=this.groupSizes[s];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var s=this.groupSizes,l=s.length,c=l;t>=c;)if((c<<=1)<0)throw tl(16,"".concat(t));this.groupSizes=new Uint32Array(c),this.groupSizes.set(s),this.length=c;for(var f=l;f<c;f++)this.groupSizes[f]=0}for(var p=this.indexOfGroup(t+1),m=(f=0,r.length);f<m;f++)this.tag.insertRule(p,r[f])&&(this.groupSizes[t]++,p++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],s=this.indexOfGroup(t),l=s+r;this.groupSizes[t]=0;for(var c=s;c<l;c++)this.tag.deleteRule(s)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var s=this.groupSizes[t],l=this.indexOfGroup(t),c=l+s,f=l;f<c;f++)r+="".concat(this.tag.getRule(f)).concat(eg);return r},e}(),Qc=new Map,hu=new Map,Wc=1,Mc=function(e){if(Qc.has(e))return Qc.get(e);for(;hu.has(Wc);)Wc++;var t=Wc++;return Qc.set(e,t),hu.set(t,e),t},w7=function(e,t){Wc=t+1,Qc.set(e,t),hu.set(t,e)},S7="style[".concat(ss,"][").concat(Zw,'="').concat(Hu,'"]'),E7=new RegExp("^".concat(ss,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),T7=function(e,t,r){for(var s,l=r.split(","),c=0,f=l.length;c<f;c++)(s=l[c])&&e.registerName(t,s)},C7=function(e,t){for(var r,s=((r=t.textContent)!==null&&r!==void 0?r:"").split(eg),l=[],c=0,f=s.length;c<f;c++){var p=s[c].trim();if(p){var m=p.match(E7);if(m){var g=0|parseInt(m[1],10),y=m[2];g!==0&&(w7(y,g),T7(e,y,m[3]),e.getTag().insertRules(g,l)),l.length=0}else l.push(p)}}},tx=function(e){for(var t=document.querySelectorAll(S7),r=0,s=t.length;r<s;r++){var l=t[r];l&&l.getAttribute(ss)!==Xw&&(C7(e,l),l.parentNode&&l.parentNode.removeChild(l))}};function A7(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var a4=function(e){var t=document.head,r=e||t,s=document.createElement("style"),l=function(p){var m=Array.from(p.querySelectorAll("style[".concat(ss,"]")));return m[m.length-1]}(r),c=l!==void 0?l.nextSibling:null;s.setAttribute(ss,Xw),s.setAttribute(Zw,Hu);var f=A7();return f&&s.setAttribute("nonce",f),r.insertBefore(s,c),s},_7=function(){function e(t){this.element=a4(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var s=document.styleSheets,l=0,c=s.length;l<c;l++){var f=s[l];if(f.ownerNode===r)return f}throw tl(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),j7=function(){function e(t){this.element=a4(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var s=document.createTextNode(r);return this.element.insertBefore(s,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),R7=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),nx=du,D7={isServer:!du,useCSSOMInjection:!s7},mu=function(){function e(t,r,s){t===void 0&&(t=os),r===void 0&&(r={});var l=this;this.options=Et(Et({},D7),t),this.gs=r,this.names=new Map(s),this.server=!!t.isServer,!this.server&&du&&nx&&(nx=!1,tx(this)),ig(this,function(){return function(c){for(var f=c.getTag(),p=f.length,m="",g=function(x){var w=function(_){return hu.get(_)}(x);if(w===void 0)return"continue";var C=c.names.get(w),R=f.getGroup(x);if(C===void 0||!C.size||R.length===0)return"continue";var O="".concat(ss,".g").concat(x,'[id="').concat(w,'"]'),N="";C!==void 0&&C.forEach(function(_){_.length>0&&(N+="".concat(_,","))}),m+="".concat(R).concat(O,'{content:"').concat(N,'"}').concat(eg)},y=0;y<p;y++)g(y);return m}(l)})}return e.registerId=function(t){return Mc(t)},e.prototype.rehydrate=function(){!this.server&&du&&tx(this)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(Et(Et({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var s=r.useCSSOMInjection,l=r.target;return r.isServer?new R7(l):s?new _7(l):new j7(l)}(this.options),new b7(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(Mc(t),this.names.has(t))this.names.get(t).add(r);else{var s=new Set;s.add(r),this.names.set(t,s)}},e.prototype.insertRules=function(t,r,s){this.registerName(t,r),this.getTag().insertRules(Mc(t),s)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Mc(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),M7=/&/g,k7=/^\s*\/\/.*$/gm;function s4(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(s){return"".concat(t," ").concat(s)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=s4(r.children,t)),r})}function O7(e){var t,r,s,l=os,c=l.options,f=c===void 0?os:c,p=l.plugins,m=p===void 0?Fu:p,g=function(w,C,R){return R.startsWith(r)&&R.endsWith(r)&&R.replaceAll(r,"").length>0?".".concat(t):w},y=m.slice();y.push(function(w){w.type===$u&&w.value.includes("&")&&(w.props[0]=w.props[0].replace(M7,r).replace(s,g))}),f.prefix&&y.push(r7),y.push(t7);var x=function(w,C,R,O){C===void 0&&(C=""),R===void 0&&(R=""),O===void 0&&(O="&"),t=O,r=C,s=new RegExp("\\".concat(r,"\\b"),"g");var N=w.replace(k7,""),_=JR(R||C?"".concat(R," ").concat(C," { ").concat(N," }"):N);f.namespace&&(_=s4(_,f.namespace));var U=[];return uu(_,n7(y.concat(i7(function(z){return U.push(z)})))),U};return x.hash=m.length?m.reduce(function(w,C){return C.name||tl(15),Za(w,C.name)},Jw).toString():"",x}var N7=new mu,Km=O7(),o4=wt.createContext({shouldForwardProp:void 0,styleSheet:N7,stylis:Km});o4.Consumer;wt.createContext(void 0);function Xm(){return T.useContext(o4)}var l4=function(){function e(t,r){var s=this;this.inject=function(l,c){c===void 0&&(c=Km);var f=s.name+c.hash;l.hasNameForId(s.id,f)||l.insertRules(s.id,f,c(s.rules,f,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,ig(this,function(){throw tl(12,String(s.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Km),this.name+t.hash},e}(),L7=function(e){return e>="A"&&e<="Z"};function ix(e){for(var t="",r=0;r<e.length;r++){var s=e[r];if(r===1&&s==="-"&&e[0]==="-")return e;L7(s)?t+="-"+s.toLowerCase():t+=s}return t.startsWith("ms-")?"-"+t:t}var c4=function(e){return e==null||e===!1||e===""},u4=function(e){var t,r,s=[];for(var l in e){var c=e[l];e.hasOwnProperty(l)&&!c4(c)&&(Array.isArray(c)&&c.isCss||ls(c)?s.push("".concat(ix(l),":"),c,";"):Ho(c)?s.push.apply(s,is(is(["".concat(l," {")],u4(c),!1),["}"],!1)):s.push("".concat(ix(l),": ").concat((t=l,(r=c)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in a7||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return s};function sr(e,t,r,s){if(c4(e))return[];if(ng(e))return[".".concat(e.styledComponentId)];if(ls(e)){if(!ls(c=e)||c.prototype&&c.prototype.isReactComponent||!t)return[e];var l=e(t);return sr(l,t,r,s)}var c;return e instanceof l4?r?(e.inject(r,s),[e.getName(s)]):[e]:Ho(e)?u4(e):Array.isArray(e)?Array.prototype.concat.apply(Fu,e.map(function(f){return sr(f,t,r,s)})):[e.toString()]}function d4(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(ls(r)&&!ng(r))return!1}return!0}var z7=e4(Hu),P7=function(){function e(t,r,s){this.rules=t,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&d4(t),this.componentId=r,this.baseHash=Za(z7,r),this.baseStyle=s,mu.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,s){var l=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))l=Vr(l,this.staticRulesId);else{var c=fu(sr(this.rules,t,r,s)),f=Gm(Za(this.baseHash,c)>>>0);if(!r.hasNameForId(this.componentId,f)){var p=s(c,".".concat(f),void 0,this.componentId);r.insertRules(this.componentId,f,p)}l=Vr(l,f),this.staticRulesId=f}else{for(var m=Za(this.baseHash,s.hash),g="",y=0;y<this.rules.length;y++){var x=this.rules[y];if(typeof x=="string")g+=x;else if(x){var w=fu(sr(x,t,r,s));m=Za(m,w+y),g+=w}}if(g){var C=Gm(m>>>0);r.hasNameForId(this.componentId,C)||r.insertRules(this.componentId,C,s(g,".".concat(C),void 0,this.componentId)),l=Vr(l,C)}}return l},e}(),rg=wt.createContext(void 0);rg.Consumer;var zh={};function I7(e,t,r){var s=ng(e),l=e,c=!Lh(e),f=t.attrs,p=f===void 0?Fu:f,m=t.componentId,g=m===void 0?function(Q,G){var Y=typeof Q!="string"?"sc":Z2(Q);zh[Y]=(zh[Y]||0)+1;var H="".concat(Y,"-").concat(tg(Hu+Y+zh[Y]));return G?"".concat(G,"-").concat(H):H}(t.displayName,t.parentComponentId):m,y=t.displayName,x=y===void 0?function(Q){return Lh(Q)?"styled.".concat(Q):"Styled(".concat(d7(Q),")")}(e):y,w=t.displayName&&t.componentId?"".concat(Z2(t.displayName),"-").concat(t.componentId):t.componentId||g,C=s&&l.attrs?l.attrs.concat(p).filter(Boolean):p,R=t.shouldForwardProp;if(s&&l.shouldForwardProp){var O=l.shouldForwardProp;if(t.shouldForwardProp){var N=t.shouldForwardProp;R=function(Q,G){return O(Q,G)&&N(Q,G)}}else R=O}var _=new P7(r,w,s?l.componentStyle:void 0);function U(Q,G){return function(Y,H,X){var ne=Y.attrs,re=Y.componentStyle,ye=Y.defaultProps,be=Y.foldedComponentIds,pe=Y.styledComponentId,ve=Y.target,Ce=wt.useContext(rg),F=Xm(),M=Y.shouldForwardProp||F.shouldForwardProp,P=Qw(H,Ce,ye)||os,te=function(oe,le,st){for(var De,gt=Et(Et({},le),{className:void 0,theme:st}),gr=0;gr<oe.length;gr+=1){var Fn=ls(De=oe[gr])?De(gt):De;for(var Zt in Fn)gt[Zt]=Zt==="className"?Vr(gt[Zt],Fn[Zt]):Zt==="style"?Et(Et({},gt[Zt]),Fn[Zt]):Fn[Zt]}return le.className&&(gt.className=Vr(gt.className,le.className)),gt}(ne,H,P),A=te.as||ve,q={};for(var k in te)te[k]===void 0||k[0]==="$"||k==="as"||k==="theme"&&te.theme===P||(k==="forwardedAs"?q.as=te.forwardedAs:M&&!M(k,A)||(q[k]=te[k]));var W=function(oe,le){var st=Xm(),De=oe.generateAndInjectStyles(le,st.styleSheet,st.stylis);return De}(re,te),ee=Vr(be,pe);return W&&(ee+=" "+W),te.className&&(ee+=" "+te.className),q[Lh(A)&&!Ww.has(A)?"class":"className"]=ee,X&&(q.ref=X),T.createElement(A,q)}(z,Q,G)}U.displayName=x;var z=wt.forwardRef(U);return z.attrs=C,z.componentStyle=_,z.displayName=x,z.shouldForwardProp=R,z.foldedComponentIds=s?Vr(l.foldedComponentIds,l.styledComponentId):"",z.styledComponentId=w,z.target=s?l.target:e,Object.defineProperty(z,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(Q){this._foldedDefaultProps=s?function(G){for(var Y=[],H=1;H<arguments.length;H++)Y[H-1]=arguments[H];for(var X=0,ne=Y;X<ne.length;X++)Ym(G,ne[X],!0);return G}({},l.defaultProps,Q):Q}}),ig(z,function(){return".".concat(z.styledComponentId)}),c&&r4(z,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),z}function rx(e,t){for(var r=[e[0]],s=0,l=t.length;s<l;s+=1)r.push(t[s],e[s+1]);return r}var ax=function(e){return Object.assign(e,{isCss:!0})};function ag(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(ls(e)||Ho(e))return ax(sr(rx(Fu,is([e],t,!0))));var s=e;return t.length===0&&s.length===1&&typeof s[0]=="string"?sr(s):ax(sr(rx(s,t)))}function Zm(e,t,r){if(r===void 0&&(r=os),!t)throw tl(1,t);var s=function(l){for(var c=[],f=1;f<arguments.length;f++)c[f-1]=arguments[f];return e(t,r,ag.apply(void 0,is([l],c,!1)))};return s.attrs=function(l){return Zm(e,t,Et(Et({},r),{attrs:Array.prototype.concat(r.attrs,l).filter(Boolean)}))},s.withConfig=function(l){return Zm(e,t,Et(Et({},r),l))},s}var f4=function(e){return Zm(I7,e)},S=f4;Ww.forEach(function(e){S[e]=f4(e)});var $7=function(){function e(t,r){this.rules=t,this.componentId=r,this.isStatic=d4(t),mu.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,r,s,l){var c=l(fu(sr(this.rules,r,s,l)),""),f=this.componentId+t;s.insertRules(f,f,c)},e.prototype.removeStyles=function(t,r){r.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,r,s,l){t>2&&mu.registerId(this.componentId+t),this.removeStyles(t,s),this.createStyles(t,r,s,l)},e}();function U7(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var s=ag.apply(void 0,is([e],t,!1)),l="sc-global-".concat(tg(JSON.stringify(s))),c=new $7(s,l),f=function(m){var g=Xm(),y=wt.useContext(rg),x=wt.useRef(g.styleSheet.allocateGSInstance(l)).current;return g.styleSheet.server&&p(x,m,g.styleSheet,y,g.stylis),wt.useLayoutEffect(function(){if(!g.styleSheet.server)return p(x,m,g.styleSheet,y,g.stylis),function(){return c.removeStyles(x,g.styleSheet)}},[x,m,g.styleSheet,y,g.stylis]),null};function p(m,g,y,x,w){if(c.isStatic)c.renderStyles(m,o7,y,w);else{var C=Et(Et({},g),{theme:Qw(g,x,f.defaultProps)});c.renderStyles(m,C,y,w)}}return wt.memo(f)}function qu(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var s=fu(ag.apply(void 0,is([e],t,!1))),l=tg(s);return new l4(l,s)}const b={colors:{primary:"#A67168",primaryLight:"#CDA09B",primaryDark:"#8B5A50",secondary:"#F4E8E6",white:"#FFFFFF",lightGray:"#F5F5F5",gray:"#757575",success:"#A67168",text:"#1A1A1A"},fonts:{primary:"'Poppins', sans-serif",secondary:"'Playfair Display', serif"},breakpoints:{mobile:"768px",tablet:"1024px"}},sg=S.div`
  background: #FFFFFF;
  border-radius: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 280px;
  height: 360px;
  border: 1px solid rgba(205, 160, 155, 0.1);
  cursor: pointer;
  
  &:hover {
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
    border-color: rgba(205, 160, 155, 0.2);
  }
`,B7=S.div`
  position: relative;
  width: 100%;
  height: 180px;
  overflow: hidden;
`,V7=S.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease;
  
  ${sg}:hover & {
    transform: scale(1.05);
  }
`,H7=S.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, ${b.colors.primaryLight} 0%, ${b.colors.primary} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${b.fonts.secondary};
  font-size: 3.5rem;
  font-weight: 700;
  color: white;
  letter-spacing: -1px;
  transition: transform 0.3s ease;

  ${sg}:hover & {
    transform: scale(1.05);
  }
`,F7=S.div`
  position: absolute;
  top: 12px;
  right: 12px;
  background: #CDA09B;
  color: white;
  padding: 0.5rem 0.75rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  box-shadow: 0 4px 12px rgba(205, 160, 155, 0.4);
  font-family: 'Poppins', sans-serif;
`,q7=S.h3`
  font-family: 'Poppins', sans-serif;
  color: #1A1A1A;
  margin: 0;
  padding: 1.5rem 1.5rem 0.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  text-align: center;
  line-height: 1.3;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`,G7=S.div`
  background: linear-gradient(135deg, #CDA09B, #B8918C);
  color: white;
  text-align: center;
  padding: 0.75rem;
  font-weight: 700;
  font-size: 1.2rem;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 0.5px;
`,Y7=S.button`
  width: 100%;
  background: #F7E8E2;
  color: #CDA09B;
  border: none;
  padding: 1rem;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.95rem;

  &:hover {
    background: #CDA09B;
    color: white;
  }
  
  svg {
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: scale(1.1);
  }
`,K7=({storeName:e,discount:t,image:r,index:s,onViewCoupon:l})=>d.jsxs(sg,{as:he.div,whileHover:{y:-8,transition:{duration:.3,ease:"easeOut"}},whileTap:{scale:.98},children:[d.jsxs(B7,{children:[r?.trim()?d.jsx(V7,{src:r,alt:e}):d.jsx(H7,{children:e?.charAt(0).toUpperCase()}),d.jsxs(F7,{as:he.div,initial:{scale:0,rotate:-180},animate:{scale:1,rotate:0},transition:{delay:s*.1+.5,duration:.5,type:"spring",stiffness:200},children:[d.jsx(RR,{size:14}),t]})]}),d.jsx(q7,{children:e}),d.jsxs(G7,{children:[t,"% OFF"]}),d.jsxs(Y7,{as:he.button,whileHover:{scale:1.02,boxShadow:"0 6px 20px rgba(205, 160, 155, 0.3)"},whileTap:{scale:.98},onClick:l,children:[d.jsx(xR,{size:16}),"Ver Cupom"]})]}),X7=()=>{};var sx={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h4=function(e){const t=[];let r=0;for(let s=0;s<e.length;s++){let l=e.charCodeAt(s);l<128?t[r++]=l:l<2048?(t[r++]=l>>6|192,t[r++]=l&63|128):(l&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(e.charCodeAt(++s)&1023),t[r++]=l>>18|240,t[r++]=l>>12&63|128,t[r++]=l>>6&63|128,t[r++]=l&63|128):(t[r++]=l>>12|224,t[r++]=l>>6&63|128,t[r++]=l&63|128)}return t},Z7=function(e){const t=[];let r=0,s=0;for(;r<e.length;){const l=e[r++];if(l<128)t[s++]=String.fromCharCode(l);else if(l>191&&l<224){const c=e[r++];t[s++]=String.fromCharCode((l&31)<<6|c&63)}else if(l>239&&l<365){const c=e[r++],f=e[r++],p=e[r++],m=((l&7)<<18|(c&63)<<12|(f&63)<<6|p&63)-65536;t[s++]=String.fromCharCode(55296+(m>>10)),t[s++]=String.fromCharCode(56320+(m&1023))}else{const c=e[r++],f=e[r++];t[s++]=String.fromCharCode((l&15)<<12|(c&63)<<6|f&63)}}return t.join("")},m4={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<e.length;l+=3){const c=e[l],f=l+1<e.length,p=f?e[l+1]:0,m=l+2<e.length,g=m?e[l+2]:0,y=c>>2,x=(c&3)<<4|p>>4;let w=(p&15)<<2|g>>6,C=g&63;m||(C=64,f||(w=64)),s.push(r[y],r[x],r[w],r[C])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(h4(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Z7(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const r=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<e.length;){const c=r[e.charAt(l++)],p=l<e.length?r[e.charAt(l)]:0;++l;const g=l<e.length?r[e.charAt(l)]:64;++l;const x=l<e.length?r[e.charAt(l)]:64;if(++l,c==null||p==null||g==null||x==null)throw new Q7;const w=c<<2|p>>4;if(s.push(w),g!==64){const C=p<<4&240|g>>2;if(s.push(C),x!==64){const R=g<<6&192|x;s.push(R)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Q7 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const W7=function(e){const t=h4(e);return m4.encodeByteArray(t,!0)},pu=function(e){return W7(e).replace(/\./g,"")},p4=function(e){try{return m4.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J7(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eD=()=>J7().__FIREBASE_DEFAULTS__,tD=()=>{if(typeof process>"u"||typeof sx>"u")return;const e=sx.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},nD=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&p4(e[1]);return t&&JSON.parse(t)},og=()=>{try{return X7()||eD()||tD()||nD()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},g4=e=>og()?.emulatorHosts?.[e],iD=e=>{const t=g4(e);if(!t)return;const r=t.lastIndexOf(":");if(r<=0||r+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(r+1),10);return t[0]==="["?[t.substring(1,r-1),s]:[t.substring(0,r),s]},y4=()=>og()?.config,v4=e=>og()?.[`_${e}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,r)=>{this.resolve=t,this.reject=r})}wrapCallback(t){return(r,s)=>{r?this.reject(r):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(r):t(r,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function x4(e){return(await fetch(e,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aD(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const r={alg:"none",type:"JWT"},s=t||"demo-project",l=e.iat||0,c=e.sub||e.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f={iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}},...e};return[pu(JSON.stringify(r)),pu(JSON.stringify(f)),""].join(".")}const Oo={};function sD(){const e={prod:[],emulator:[]};for(const t of Object.keys(Oo))Oo[t]?e.emulator.push(t):e.prod.push(t);return e}function oD(e){let t=document.getElementById(e),r=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),r=!0),{created:r,element:t}}let ox=!1;function b4(e,t){if(typeof window>"u"||typeof document>"u"||!nl(window.location.host)||Oo[e]===t||Oo[e]||ox)return;Oo[e]=t;function r(w){return`__firebase__banner__${w}`}const s="__firebase__banner",c=sD().prod.length>0;function f(){const w=document.getElementById(s);w&&w.remove()}function p(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function m(w,C){w.setAttribute("width","24"),w.setAttribute("id",C),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function g(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{ox=!0,f()},w}function y(w,C){w.setAttribute("id",C),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function x(){const w=oD(s),C=r("text"),R=document.getElementById(C)||document.createElement("span"),O=r("learnmore"),N=document.getElementById(O)||document.createElement("a"),_=r("preprendIcon"),U=document.getElementById(_)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const z=w.element;p(z),y(N,O);const Q=g();m(U,_),z.append(U,R,N,Q),document.body.appendChild(z)}c?(R.innerText="Preview backend disconnected.",U.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(U.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",C)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",x):x()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lD(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_t())}function cD(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function uD(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function dD(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fD(){const e=_t();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function hD(){try{return typeof indexedDB=="object"}catch{return!1}}function mD(){return new Promise((e,t)=>{try{let r=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),r||self.indexedDB.deleteDatabase(s),e(!0)},l.onupgradeneeded=()=>{r=!1},l.onerror=()=>{t(l.error?.message||"")}}catch(r){t(r)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pD="FirebaseError";class Ei extends Error{constructor(t,r,s){super(r),this.code=t,this.customData=s,this.name=pD,Object.setPrototypeOf(this,Ei.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,il.prototype.create)}}class il{constructor(t,r,s){this.service=t,this.serviceName=r,this.errors=s}create(t,...r){const s=r[0]||{},l=`${this.service}/${t}`,c=this.errors[t],f=c?gD(c,s):"Error",p=`${this.serviceName}: ${f} (${l}).`;return new Ei(l,p,s)}}function gD(e,t){return e.replace(yD,(r,s)=>{const l=t[s];return l!=null?String(l):`<${s}?>`})}const yD=/\{\$([^}]+)}/g;function vD(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function cs(e,t){if(e===t)return!0;const r=Object.keys(e),s=Object.keys(t);for(const l of r){if(!s.includes(l))return!1;const c=e[l],f=t[l];if(lx(c)&&lx(f)){if(!cs(c,f))return!1}else if(c!==f)return!1}for(const l of s)if(!r.includes(l))return!1;return!0}function lx(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(e){const t=[];for(const[r,s]of Object.entries(e))Array.isArray(s)?s.forEach(l=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(l))}):t.push(encodeURIComponent(r)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function Co(e){const t={};return e.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[l,c]=s.split("=");t[decodeURIComponent(l)]=decodeURIComponent(c)}}),t}function Ao(e){const t=e.indexOf("?");if(!t)return"";const r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}function xD(e,t){const r=new bD(e,t);return r.subscribe.bind(r)}class bD{constructor(t,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(r=>{r.next(t)})}error(t){this.forEachObserver(r=>{r.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,r,s){let l;if(t===void 0&&r===void 0&&s===void 0)throw new Error("Missing Observer.");wD(t,["next","error","complete"])?l=t:l={next:t,error:r,complete:s},l.next===void 0&&(l.next=Ph),l.error===void 0&&(l.error=Ph),l.complete===void 0&&(l.complete=Ph);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),c}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,t)}sendOne(t,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{r(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wD(e,t){if(typeof e!="object"||e===null)return!1;for(const r of t)if(r in e&&typeof e[r]=="function")return!0;return!1}function Ph(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(e){return e&&e._delegate?e._delegate:e}class Yr{constructor(t,r,s){this.name=t,this.instanceFactory=r,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SD{constructor(t,r){this.name=t,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const r=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(r)){const s=new rD;if(this.instancesDeferred.set(r,s),this.isInitialized(r)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:r});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(t){const r=this.normalizeInstanceIdentifier(t?.identifier),s=t?.optional??!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(l){if(s)return null;throw l}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(TD(t))try{this.getOrInitializeService({instanceIdentifier:$r})}catch{}for(const[r,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);try{const c=this.getOrInitializeService({instanceIdentifier:l});s.resolve(c)}catch{}}}}clearInstance(t=$r){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...t.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=$r){return this.instances.has(t)}getOptions(t=$r){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:r={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:r});for(const[c,f]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(c);s===p&&f.resolve(l)}return l}onInit(t,r){const s=this.normalizeInstanceIdentifier(r),l=this.onInitCallbacks.get(s)??new Set;l.add(t),this.onInitCallbacks.set(s,l);const c=this.instances.get(s);return c&&t(c,s),()=>{l.delete(t)}}invokeOnInitCallbacks(t,r){const s=this.onInitCallbacks.get(r);if(s)for(const l of s)try{l(t,r)}catch{}}getOrInitializeService({instanceIdentifier:t,options:r={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:ED(t),options:r}),this.instances.set(t,s),this.instancesOptions.set(t,r),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=$r){return this.component?this.component.multipleInstances?t:$r:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ED(e){return e===$r?void 0:e}function TD(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CD{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const r=this.getProvider(t.name);if(r.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);r.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const r=new SD(t,this);return this.providers.set(t,r),r}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(Ie||(Ie={}));const AD={debug:Ie.DEBUG,verbose:Ie.VERBOSE,info:Ie.INFO,warn:Ie.WARN,error:Ie.ERROR,silent:Ie.SILENT},_D=Ie.INFO,jD={[Ie.DEBUG]:"log",[Ie.VERBOSE]:"log",[Ie.INFO]:"info",[Ie.WARN]:"warn",[Ie.ERROR]:"error"},RD=(e,t,...r)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),l=jD[t];if(l)console[l](`[${s}]  ${e.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class w4{constructor(t){this.name=t,this._logLevel=_D,this._logHandler=RD,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Ie))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?AD[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Ie.DEBUG,...t),this._logHandler(this,Ie.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Ie.VERBOSE,...t),this._logHandler(this,Ie.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Ie.INFO,...t),this._logHandler(this,Ie.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Ie.WARN,...t),this._logHandler(this,Ie.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Ie.ERROR,...t),this._logHandler(this,Ie.ERROR,...t)}}const DD=(e,t)=>t.some(r=>e instanceof r);let cx,ux;function MD(){return cx||(cx=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kD(){return ux||(ux=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const S4=new WeakMap,Qm=new WeakMap,E4=new WeakMap,Ih=new WeakMap,lg=new WeakMap;function OD(e){const t=new Promise((r,s)=>{const l=()=>{e.removeEventListener("success",c),e.removeEventListener("error",f)},c=()=>{r(or(e.result)),l()},f=()=>{s(e.error),l()};e.addEventListener("success",c),e.addEventListener("error",f)});return t.then(r=>{r instanceof IDBCursor&&S4.set(r,e)}).catch(()=>{}),lg.set(t,e),t}function ND(e){if(Qm.has(e))return;const t=new Promise((r,s)=>{const l=()=>{e.removeEventListener("complete",c),e.removeEventListener("error",f),e.removeEventListener("abort",f)},c=()=>{r(),l()},f=()=>{s(e.error||new DOMException("AbortError","AbortError")),l()};e.addEventListener("complete",c),e.addEventListener("error",f),e.addEventListener("abort",f)});Qm.set(e,t)}let Wm={get(e,t,r){if(e instanceof IDBTransaction){if(t==="done")return Qm.get(e);if(t==="objectStoreNames")return e.objectStoreNames||E4.get(e);if(t==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return or(e[t])},set(e,t,r){return e[t]=r,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function LD(e){Wm=e(Wm)}function zD(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...r){const s=e.call($h(this),t,...r);return E4.set(s,t.sort?t.sort():[t]),or(s)}:kD().includes(e)?function(...t){return e.apply($h(this),t),or(S4.get(this))}:function(...t){return or(e.apply($h(this),t))}}function PD(e){return typeof e=="function"?zD(e):(e instanceof IDBTransaction&&ND(e),DD(e,MD())?new Proxy(e,Wm):e)}function or(e){if(e instanceof IDBRequest)return OD(e);if(Ih.has(e))return Ih.get(e);const t=PD(e);return t!==e&&(Ih.set(e,t),lg.set(t,e)),t}const $h=e=>lg.get(e);function ID(e,t,{blocked:r,upgrade:s,blocking:l,terminated:c}={}){const f=indexedDB.open(e,t),p=or(f);return s&&f.addEventListener("upgradeneeded",m=>{s(or(f.result),m.oldVersion,m.newVersion,or(f.transaction),m)}),r&&f.addEventListener("blocked",m=>r(m.oldVersion,m.newVersion,m)),p.then(m=>{c&&m.addEventListener("close",()=>c()),l&&m.addEventListener("versionchange",g=>l(g.oldVersion,g.newVersion,g))}).catch(()=>{}),p}const $D=["get","getKey","getAll","getAllKeys","count"],UD=["put","add","delete","clear"],Uh=new Map;function dx(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Uh.get(t))return Uh.get(t);const r=t.replace(/FromIndex$/,""),s=t!==r,l=UD.includes(r);if(!(r in(s?IDBIndex:IDBObjectStore).prototype)||!(l||$D.includes(r)))return;const c=async function(f,...p){const m=this.transaction(f,l?"readwrite":"readonly");let g=m.store;return s&&(g=g.index(p.shift())),(await Promise.all([g[r](...p),l&&m.done]))[0]};return Uh.set(t,c),c}LD(e=>({...e,get:(t,r,s)=>dx(t,r)||e.get(t,r,s),has:(t,r)=>!!dx(t,r)||e.has(t,r)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BD{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(VD(r)){const s=r.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(r=>r).join(" ")}}function VD(e){return e.getComponent()?.type==="VERSION"}const Jm="@firebase/app",fx="0.14.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi=new w4("@firebase/app"),HD="@firebase/app-compat",FD="@firebase/analytics-compat",qD="@firebase/analytics",GD="@firebase/app-check-compat",YD="@firebase/app-check",KD="@firebase/auth",XD="@firebase/auth-compat",ZD="@firebase/database",QD="@firebase/data-connect",WD="@firebase/database-compat",JD="@firebase/functions",e9="@firebase/functions-compat",t9="@firebase/installations",n9="@firebase/installations-compat",i9="@firebase/messaging",r9="@firebase/messaging-compat",a9="@firebase/performance",s9="@firebase/performance-compat",o9="@firebase/remote-config",l9="@firebase/remote-config-compat",c9="@firebase/storage",u9="@firebase/storage-compat",d9="@firebase/firestore",f9="@firebase/ai",h9="@firebase/firestore-compat",m9="firebase",p9="12.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep="[DEFAULT]",g9={[Jm]:"fire-core",[HD]:"fire-core-compat",[qD]:"fire-analytics",[FD]:"fire-analytics-compat",[YD]:"fire-app-check",[GD]:"fire-app-check-compat",[KD]:"fire-auth",[XD]:"fire-auth-compat",[ZD]:"fire-rtdb",[QD]:"fire-data-connect",[WD]:"fire-rtdb-compat",[JD]:"fire-fn",[e9]:"fire-fn-compat",[t9]:"fire-iid",[n9]:"fire-iid-compat",[i9]:"fire-fcm",[r9]:"fire-fcm-compat",[a9]:"fire-perf",[s9]:"fire-perf-compat",[o9]:"fire-rc",[l9]:"fire-rc-compat",[c9]:"fire-gcs",[u9]:"fire-gcs-compat",[d9]:"fire-fst",[h9]:"fire-fst-compat",[f9]:"fire-vertex","fire-js":"fire-js",[m9]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu=new Map,y9=new Map,tp=new Map;function hx(e,t){try{e.container.addComponent(t)}catch(r){bi.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}function us(e){const t=e.name;if(tp.has(t))return bi.debug(`There were multiple attempts to register component ${t}.`),!1;tp.set(t,e);for(const r of gu.values())hx(r,e);for(const r of y9.values())hx(r,e);return!0}function cg(e,t){const r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}function Xt(e){return e==null?!1:e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v9={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},lr=new il("app","Firebase",v9);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x9{constructor(t,r,s){this._isDeleted=!1,this._options={...t},this._config={...r},this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Yr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw lr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=p9;function T4(e,t={}){let r=e;typeof t!="object"&&(t={name:t});const s={name:ep,automaticDataCollectionEnabled:!0,...t},l=s.name;if(typeof l!="string"||!l)throw lr.create("bad-app-name",{appName:String(l)});if(r||(r=y4()),!r)throw lr.create("no-options");const c=gu.get(l);if(c){if(cs(r,c.options)&&cs(s,c.config))return c;throw lr.create("duplicate-app",{appName:l})}const f=new CD(l);for(const m of tp.values())f.addComponent(m);const p=new x9(r,s,f);return gu.set(l,p),p}function C4(e=ep){const t=gu.get(e);if(!t&&e===ep&&y4())return T4();if(!t)throw lr.create("no-app",{appName:e});return t}function cr(e,t,r){let s=g9[e]??e;r&&(s+=`-${r}`);const l=s.match(/\s|\//),c=t.match(/\s|\//);if(l||c){const f=[`Unable to register library "${s}" with version "${t}":`];l&&f.push(`library name "${s}" contains illegal characters (whitespace or "/")`),l&&c&&f.push("and"),c&&f.push(`version name "${t}" contains illegal characters (whitespace or "/")`),bi.warn(f.join(" "));return}us(new Yr(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b9="firebase-heartbeat-database",w9=1,Fo="firebase-heartbeat-store";let Bh=null;function A4(){return Bh||(Bh=ID(b9,w9,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Fo)}catch(r){console.warn(r)}}}}).catch(e=>{throw lr.create("idb-open",{originalErrorMessage:e.message})})),Bh}async function S9(e){try{const r=(await A4()).transaction(Fo),s=await r.objectStore(Fo).get(_4(e));return await r.done,s}catch(t){if(t instanceof Ei)bi.warn(t.message);else{const r=lr.create("idb-get",{originalErrorMessage:t?.message});bi.warn(r.message)}}}async function mx(e,t){try{const s=(await A4()).transaction(Fo,"readwrite");await s.objectStore(Fo).put(t,_4(e)),await s.done}catch(r){if(r instanceof Ei)bi.warn(r.message);else{const s=lr.create("idb-set",{originalErrorMessage:r?.message});bi.warn(s.message)}}}function _4(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E9=1024,T9=30;class C9{constructor(t){this.container=t,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new _9(r),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=px();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(l=>l.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats.length>T9){const l=j9(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){bi.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=px(),{heartbeatsToSend:r,unsentEntries:s}=A9(this._heartbeatsCache.heartbeats),l=pu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return bi.warn(t),""}}}function px(){return new Date().toISOString().substring(0,10)}function A9(e,t=E9){const r=[];let s=e.slice();for(const l of e){const c=r.find(f=>f.agent===l.agent);if(c){if(c.dates.push(l.date),gx(r)>t){c.dates.pop();break}}else if(r.push({agent:l.agent,dates:[l.date]}),gx(r)>t){r.pop();break}s=s.slice(1)}return{heartbeatsToSend:r,unsentEntries:s}}class _9{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hD()?mD().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const r=await S9(this.app);return r?.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const s=await this.read();return mx(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const s=await this.read();return mx(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function gx(e){return pu(JSON.stringify({version:2,heartbeats:e})).length}function j9(e){if(e.length===0)return-1;let t=0,r=e[0].date;for(let s=1;s<e.length;s++)e[s].date<r&&(r=e[s].date,t=s);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R9(e){us(new Yr("platform-logger",t=>new BD(t),"PRIVATE")),us(new Yr("heartbeat",t=>new C9(t),"PRIVATE")),cr(Jm,fx,e),cr(Jm,fx,"esm2020"),cr("fire-js","")}R9("");var D9="firebase",M9="12.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */cr(D9,M9,"app");function j4(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const k9=j4,R4=new il("auth","Firebase",j4());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yu=new w4("@firebase/auth");function O9(e,...t){yu.logLevel<=Ie.WARN&&yu.warn(`Auth (${vs}): ${e}`,...t)}function Jc(e,...t){yu.logLevel<=Ie.ERROR&&yu.error(`Auth (${vs}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(e,...t){throw dg(e,...t)}function Sn(e,...t){return dg(e,...t)}function ug(e,t,r){const s={...k9(),[t]:r};return new il("auth","Firebase",s).create(t,{appName:e.name})}function pi(e){return ug(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function N9(e,t,r){const s=r;if(!(t instanceof s))throw s.name!==t.constructor.name&&mn(e,"argument-error"),ug(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function dg(e,...t){if(typeof e!="string"){const r=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=e.name),e._errorFactory.create(r,...s)}return R4.create(e,...t)}function ue(e,t,...r){if(!e)throw dg(t,...r)}function fi(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Jc(t),new Error(t)}function wi(e,t){e||fi(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function np(){return typeof self<"u"&&self.location?.href||""}function L9(){return yx()==="http:"||yx()==="https:"}function yx(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z9(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(L9()||uD()||"connection"in navigator)?navigator.onLine:!0}function P9(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(t,r){this.shortDelay=t,this.longDelay=r,wi(r>t,"Short delay should be less than long delay!"),this.isMobile=lD()||dD()}get(){return z9()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fg(e,t){wi(e.emulator,"Emulator should always be set here");const{url:r}=e.emulator;return t?`${r}${t.startsWith("/")?t.slice(1):t}`:r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D4{static initialize(t,r,s){this.fetchImpl=t,r&&(this.headersImpl=r),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;fi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;fi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;fi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I9={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $9=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],U9=new al(3e4,6e4);function Ti(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function _n(e,t,r,s,l={}){return M4(e,l,async()=>{let c={},f={};s&&(t==="GET"?f=s:c={body:JSON.stringify(s)});const p=rl({key:e.config.apiKey,...f}).slice(1),m=await e._getAdditionalHeaders();m["Content-Type"]="application/json",e.languageCode&&(m["X-Firebase-Locale"]=e.languageCode);const g={method:t,headers:m,...c};return cD()||(g.referrerPolicy="no-referrer"),e.emulatorConfig&&nl(e.emulatorConfig.host)&&(g.credentials="include"),D4.fetch()(await k4(e,e.config.apiHost,r,p),g)})}async function M4(e,t,r){e._canInitEmulator=!1;const s={...I9,...t};try{const l=new V9(e),c=await Promise.race([r(),l.promise]);l.clearNetworkTimeout();const f=await c.json();if("needConfirmation"in f)throw kc(e,"account-exists-with-different-credential",f);if(c.ok&&!("errorMessage"in f))return f;{const p=c.ok?f.errorMessage:f.error.message,[m,g]=p.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw kc(e,"credential-already-in-use",f);if(m==="EMAIL_EXISTS")throw kc(e,"email-already-in-use",f);if(m==="USER_DISABLED")throw kc(e,"user-disabled",f);const y=s[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw ug(e,y,g);mn(e,y)}}catch(l){if(l instanceof Ei)throw l;mn(e,"network-request-failed",{message:String(l)})}}async function sl(e,t,r,s,l={}){const c=await _n(e,t,r,s,l);return"mfaPendingCredential"in c&&mn(e,"multi-factor-auth-required",{_serverResponse:c}),c}async function k4(e,t,r,s){const l=`${t}${r}?${s}`,c=e,f=c.config.emulator?fg(e.config,l):`${e.config.apiScheme}://${l}`;return $9.includes(r)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(f).toString():f}function B9(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class V9{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((r,s)=>{this.timer=setTimeout(()=>s(Sn(this.auth,"network-request-failed")),U9.get())})}}function kc(e,t,r){const s={appName:e.name};r.email&&(s.email=r.email),r.phoneNumber&&(s.phoneNumber=r.phoneNumber);const l=Sn(e,t,s);return l.customData._tokenResponse=r,l}function vx(e){return e!==void 0&&e.enterprise!==void 0}class H9{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const r of this.recaptchaEnforcementState)if(r.provider&&r.provider===t)return B9(r.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function F9(e,t){return _n(e,"GET","/v2/recaptchaConfig",Ti(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q9(e,t){return _n(e,"POST","/v1/accounts:delete",t)}async function vu(e,t){return _n(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function G9(e,t=!1){const r=jt(e),s=await r.getIdToken(t),l=hg(s);ue(l&&l.exp&&l.auth_time&&l.iat,r.auth,"internal-error");const c=typeof l.firebase=="object"?l.firebase:void 0,f=c?.sign_in_provider;return{claims:l,token:s,authTime:No(Vh(l.auth_time)),issuedAtTime:No(Vh(l.iat)),expirationTime:No(Vh(l.exp)),signInProvider:f||null,signInSecondFactor:c?.sign_in_second_factor||null}}function Vh(e){return Number(e)*1e3}function hg(e){const[t,r,s]=e.split(".");if(t===void 0||r===void 0||s===void 0)return Jc("JWT malformed, contained fewer than 3 sections"),null;try{const l=p4(r);return l?JSON.parse(l):(Jc("Failed to decode base64 JWT payload"),null)}catch(l){return Jc("Caught error parsing JWT payload as JSON",l?.toString()),null}}function xx(e){const t=hg(e);return ue(t,"internal-error"),ue(typeof t.exp<"u","internal-error"),ue(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kr(e,t,r=!1){if(r)return t;try{return await t}catch(s){throw s instanceof Ei&&Y9(s)&&e.auth.currentUser===e&&await e.auth.signOut(),s}}function Y9({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K9{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const r=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(t,r){this.createdAt=t,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=No(this.lastLoginAt),this.creationTime=No(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xu(e){const t=e.auth,r=await e.getIdToken(),s=await Kr(e,vu(t,{idToken:r}));ue(s?.users.length,t,"internal-error");const l=s.users[0];e._notifyReloadListener(l);const c=l.providerUserInfo?.length?O4(l.providerUserInfo):[],f=Z9(e.providerData,c),p=e.isAnonymous,m=!(e.email&&l.passwordHash)&&!f?.length,g=p?m:!1,y={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new ip(l.createdAt,l.lastLoginAt),isAnonymous:g};Object.assign(e,y)}async function X9(e){const t=jt(e);await xu(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Z9(e,t){return[...e.filter(s=>!t.some(l=>l.providerId===s.providerId)),...t]}function O4(e){return e.map(({providerId:t,...r})=>({providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q9(e,t){const r=await M4(e,{},async()=>{const s=rl({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:l,apiKey:c}=e.config,f=await k4(e,l,"/v1/token",`key=${c}`),p=await e._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:p,body:s};return e.emulatorConfig&&nl(e.emulatorConfig.host)&&(m.credentials="include"),D4.fetch()(f,m)});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}async function W9(e,t){return _n(e,"POST","/v2/accounts:revokeToken",Ti(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){ue(t.idToken,"internal-error"),ue(typeof t.idToken<"u","internal-error"),ue(typeof t.refreshToken<"u","internal-error");const r="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):xx(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,r)}updateFromIdToken(t){ue(t.length!==0,"internal-error");const r=xx(t);this.updateTokensAndExpiration(t,null,r)}async getToken(t,r=!1){return!r&&this.accessToken&&!this.isExpired?this.accessToken:(ue(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,r){const{accessToken:s,refreshToken:l,expiresIn:c}=await Q9(t,r);this.updateTokensAndExpiration(s,l,Number(c))}updateTokensAndExpiration(t,r,s){this.refreshToken=r||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,r){const{refreshToken:s,accessToken:l,expirationTime:c}=r,f=new Wa;return s&&(ue(typeof s=="string","internal-error",{appName:t}),f.refreshToken=s),l&&(ue(typeof l=="string","internal-error",{appName:t}),f.accessToken=l),c&&(ue(typeof c=="number","internal-error",{appName:t}),f.expirationTime=c),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Wa,this.toJSON())}_performRefresh(){return fi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(e,t){ue(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class xn{constructor({uid:t,auth:r,stsTokenManager:s,...l}){this.providerId="firebase",this.proactiveRefresh=new K9(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new ip(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(t){const r=await Kr(this,this.stsTokenManager.getToken(this.auth,t));return ue(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(t){return G9(this,t)}reload(){return X9(this)}_assign(t){this!==t&&(ue(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(r=>({...r})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const r=new xn({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return r.metadata._copy(this.metadata),r}_onReload(t){ue(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,r=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),r&&await xu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xt(this.auth.app))return Promise.reject(pi(this.auth));const t=await this.getIdToken();return await Kr(this,q9(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,r){const s=r.displayName??void 0,l=r.email??void 0,c=r.phoneNumber??void 0,f=r.photoURL??void 0,p=r.tenantId??void 0,m=r._redirectEventId??void 0,g=r.createdAt??void 0,y=r.lastLoginAt??void 0,{uid:x,emailVerified:w,isAnonymous:C,providerData:R,stsTokenManager:O}=r;ue(x&&O,t,"internal-error");const N=Wa.fromJSON(this.name,O);ue(typeof x=="string",t,"internal-error"),Qi(s,t.name),Qi(l,t.name),ue(typeof w=="boolean",t,"internal-error"),ue(typeof C=="boolean",t,"internal-error"),Qi(c,t.name),Qi(f,t.name),Qi(p,t.name),Qi(m,t.name),Qi(g,t.name),Qi(y,t.name);const _=new xn({uid:x,auth:t,email:l,emailVerified:w,displayName:s,isAnonymous:C,photoURL:f,phoneNumber:c,tenantId:p,stsTokenManager:N,createdAt:g,lastLoginAt:y});return R&&Array.isArray(R)&&(_.providerData=R.map(U=>({...U}))),m&&(_._redirectEventId=m),_}static async _fromIdTokenResponse(t,r,s=!1){const l=new Wa;l.updateFromServerResponse(r);const c=new xn({uid:r.localId,auth:t,stsTokenManager:l,isAnonymous:s});return await xu(c),c}static async _fromGetAccountInfoResponse(t,r,s){const l=r.users[0];ue(l.localId!==void 0,"internal-error");const c=l.providerUserInfo!==void 0?O4(l.providerUserInfo):[],f=!(l.email&&l.passwordHash)&&!c?.length,p=new Wa;p.updateFromIdToken(s);const m=new xn({uid:l.localId,auth:t,stsTokenManager:p,isAnonymous:f}),g={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:c,metadata:new ip(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!c?.length};return Object.assign(m,g),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bx=new Map;function hi(e){wi(e instanceof Function,"Expected a class definition");let t=bx.get(e);return t?(wi(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,bx.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N4{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,r){this.storage[t]=r}async _get(t){const r=this.storage[t];return r===void 0?null:r}async _remove(t){delete this.storage[t]}_addListener(t,r){}_removeListener(t,r){}}N4.type="NONE";const wx=N4;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(e,t,r){return`firebase:${e}:${t}:${r}`}class Ja{constructor(t,r,s){this.persistence=t,this.auth=r,this.userKey=s;const{config:l,name:c}=this.auth;this.fullUserKey=eu(this.userKey,l.apiKey,c),this.fullPersistenceKey=eu("persistence",l.apiKey,c),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const r=await vu(this.auth,{idToken:t}).catch(()=>{});return r?xn._fromGetAccountInfoResponse(this.auth,r,t):null}return xn._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,r,s="authUser"){if(!r.length)return new Ja(hi(wx),t,s);const l=(await Promise.all(r.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let c=l[0]||hi(wx);const f=eu(s,t.config.apiKey,t.name);let p=null;for(const g of r)try{const y=await g._get(f);if(y){let x;if(typeof y=="string"){const w=await vu(t,{idToken:y}).catch(()=>{});if(!w)break;x=await xn._fromGetAccountInfoResponse(t,w,y)}else x=xn._fromJSON(t,y);g!==c&&(p=x),c=g;break}}catch{}const m=l.filter(g=>g._shouldAllowMigration);return!c._shouldAllowMigration||!m.length?new Ja(c,t,s):(c=m[0],p&&await c._set(f,p.toJSON()),await Promise.all(r.map(async g=>{if(g!==c)try{await g._remove(f)}catch{}})),new Ja(c,t,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sx(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(I4(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(L4(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(U4(t))return"Blackberry";if(B4(t))return"Webos";if(z4(t))return"Safari";if((t.includes("chrome/")||P4(t))&&!t.includes("edge/"))return"Chrome";if($4(t))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=e.match(r);if(s?.length===2)return s[1]}return"Other"}function L4(e=_t()){return/firefox\//i.test(e)}function z4(e=_t()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function P4(e=_t()){return/crios\//i.test(e)}function I4(e=_t()){return/iemobile/i.test(e)}function $4(e=_t()){return/android/i.test(e)}function U4(e=_t()){return/blackberry/i.test(e)}function B4(e=_t()){return/webos/i.test(e)}function mg(e=_t()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function J9(e=_t()){return mg(e)&&!!window.navigator?.standalone}function eM(){return fD()&&document.documentMode===10}function V4(e=_t()){return mg(e)||$4(e)||B4(e)||U4(e)||/windows phone/i.test(e)||I4(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H4(e,t=[]){let r;switch(e){case"Browser":r=Sx(_t());break;case"Worker":r=`${Sx(_t())}-${e}`;break;default:r=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${r}/JsCore/${vs}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tM{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,r){const s=c=>new Promise((f,p)=>{try{const m=t(c);f(m)}catch(m){p(m)}});s.onAbort=r,this.queue.push(s);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const r=[];try{for(const s of this.queue)await s(t),s.onAbort&&r.push(s.onAbort)}catch(s){r.reverse();for(const l of r)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nM(e,t={}){return _n(e,"GET","/v2/passwordPolicy",Ti(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iM=6;class rM{constructor(t){const r=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=r.minPasswordLength??iM,r.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=r.maxPasswordLength),r.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=r.containsLowercaseCharacter),r.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=r.containsUppercaseCharacter),r.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=r.containsNumericCharacter),r.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=r.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=t.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const r={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,r),this.validatePasswordCharacterOptions(t,r),r.isValid&&(r.isValid=r.meetsMinPasswordLength??!0),r.isValid&&(r.isValid=r.meetsMaxPasswordLength??!0),r.isValid&&(r.isValid=r.containsLowercaseLetter??!0),r.isValid&&(r.isValid=r.containsUppercaseLetter??!0),r.isValid&&(r.isValid=r.containsNumericCharacter??!0),r.isValid&&(r.isValid=r.containsNonAlphanumericCharacter??!0),r}validatePasswordLengthOptions(t,r){const s=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;s&&(r.meetsMinPasswordLength=t.length>=s),l&&(r.meetsMaxPasswordLength=t.length<=l)}validatePasswordCharacterOptions(t,r){this.updatePasswordCharacterOptionsStatuses(r,!1,!1,!1,!1);let s;for(let l=0;l<t.length;l++)s=t.charAt(l),this.updatePasswordCharacterOptionsStatuses(r,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,r,s,l,c){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=r)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aM{constructor(t,r,s,l){this.app=t,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ex(this),this.idTokenSubscription=new Ex(this),this.beforeStateQueue=new tM(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=R4,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(t,r){return r&&(this._popupRedirectResolver=hi(r)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Ja.create(this,t),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(r),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const r=await vu(this,{idToken:t}),s=await xn._fromGetAccountInfoResponse(this,r,t);await this.directlySetCurrentUser(s)}catch(r){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",r),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){if(Xt(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(f,f))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,l=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=this.redirectUser?._redirectEventId,f=s?._redirectEventId,p=await this.tryRedirectSignIn(t);(!c||c===f)&&p?.user&&(s=p.user,l=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(s)}catch(c){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ue(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(t){try{await xu(t)}catch(r){if(r?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=P9()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Xt(this.app))return Promise.reject(pi(this));const r=t?jt(t):null;return r&&ue(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(t,r=!1){if(!this._deleted)return t&&ue(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),r||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Xt(this.app)?Promise.reject(pi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Xt(this.app)?Promise.reject(pi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(hi(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const r=this._getPasswordPolicyInternal();return r.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):r.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await nM(this),r=new rM(t);this.tenantId===null?this._projectPasswordPolicy=r:this._tenantPasswordPolicies[this.tenantId]=r}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new il("auth","Firebase",t())}onAuthStateChanged(t,r,s){return this.registerStateListener(this.authStateSubscription,t,r,s)}beforeAuthStateChanged(t,r){return this.beforeStateQueue.pushCallback(t,r)}onIdTokenChanged(t,r,s){return this.registerStateListener(this.idTokenSubscription,t,r,s)}authStateReady(){return new Promise((t,r)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},r)}})}async revokeAccessToken(t){if(this.currentUser){const r=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:r};this.tenantId!=null&&(s.tenantId=this.tenantId),await W9(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(t,r){const s=await this.getOrInitRedirectPersistenceManager(r);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const r=t&&hi(t)||this._popupRedirectResolver;ue(r,this,"argument-error"),this.redirectPersistenceManager=await Ja.create(this,[hi(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===t?this._currentUser:this.redirectUser?._redirectEventId===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=this.currentUser?.uid??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,r,s,l){if(this._deleted)return()=>{};const c=typeof r=="function"?r:r.next.bind(r);let f=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(ue(p,this,"internal-error"),p.then(()=>{f||c(this.currentUser)}),typeof r=="function"){const m=t.addObserver(r,s,l);return()=>{f=!0,m()}}else{const m=t.addObserver(r);return()=>{f=!0,m()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return ue(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=H4(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){if(Xt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return t?.error&&O9(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Ci(e){return jt(e)}class Ex{constructor(t){this.auth=t,this.observer=null,this.addObserver=xD(r=>this.observer=r)}get next(){return ue(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function sM(e){Gu=e}function F4(e){return Gu.loadJS(e)}function oM(){return Gu.recaptchaEnterpriseScript}function lM(){return Gu.gapiScript}function cM(e){return`__${e}${Math.floor(Math.random()*1e6)}`}class uM{constructor(){this.enterprise=new dM}ready(t){t()}execute(t,r){return Promise.resolve("token")}render(t,r){return""}}class dM{ready(t){t()}execute(t,r){return Promise.resolve("token")}render(t,r){return""}}const fM="recaptcha-enterprise",q4="NO_RECAPTCHA";class hM{constructor(t){this.type=fM,this.auth=Ci(t)}async verify(t="verify",r=!1){async function s(c){if(!r){if(c.tenantId==null&&c._agentRecaptchaConfig!=null)return c._agentRecaptchaConfig.siteKey;if(c.tenantId!=null&&c._tenantRecaptchaConfigs[c.tenantId]!==void 0)return c._tenantRecaptchaConfigs[c.tenantId].siteKey}return new Promise(async(f,p)=>{F9(c,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const g=new H9(m);return c.tenantId==null?c._agentRecaptchaConfig=g:c._tenantRecaptchaConfigs[c.tenantId]=g,f(g.siteKey)}}).catch(m=>{p(m)})})}function l(c,f,p){const m=window.grecaptcha;vx(m)?m.enterprise.ready(()=>{m.enterprise.execute(c,{action:t}).then(g=>{f(g)}).catch(()=>{f(q4)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new uM().execute("siteKey",{action:"verify"}):new Promise((c,f)=>{s(this.auth).then(p=>{if(!r&&vx(window.grecaptcha))l(p,c,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let m=oM();m.length!==0&&(m+=p),F4(m).then(()=>{l(p,c,f)}).catch(g=>{f(g)})}}).catch(p=>{f(p)})})}}async function Tx(e,t,r,s=!1,l=!1){const c=new hM(e);let f;if(l)f=q4;else try{f=await c.verify(r)}catch{f=await c.verify(r,!0)}const p={...t};if(r==="mfaSmsEnrollment"||r==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const m=p.phoneEnrollmentInfo.phoneNumber,g=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:g,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const m=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return s?Object.assign(p,{captchaResp:f}):Object.assign(p,{captchaResponse:f}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function bu(e,t,r,s,l){if(e._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await Tx(e,t,r,r==="getOobCode");return s(e,c)}else return s(e,t).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${r} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await Tx(e,t,r,r==="getOobCode");return s(e,f)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mM(e,t){const r=cg(e,"auth");if(r.isInitialized()){const l=r.getImmediate(),c=r.getOptions();if(cs(c,t??{}))return l;mn(l,"already-initialized")}return r.initialize({options:t})}function pM(e,t){const r=t?.persistence||[],s=(Array.isArray(r)?r:[r]).map(hi);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(s,t?.popupRedirectResolver)}function gM(e,t,r){const s=Ci(e);ue(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const l=!1,c=G4(t),{host:f,port:p}=yM(t),m=p===null?"":`:${p}`,g={url:`${c}//${f}${m}/`},y=Object.freeze({host:f,port:p,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!s._canInitEmulator){ue(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ue(cs(g,s.config.emulator)&&cs(y,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=y,s.settings.appVerificationDisabledForTesting=!0,nl(f)?(x4(`${c}//${f}${m}`),b4("Auth",!0)):vM()}function G4(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function yM(e){const t=G4(e),r=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!r)return{host:"",port:null};const s=r[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const c=l[1];return{host:c,port:Cx(s.substr(c.length+1))}}else{const[c,f]=s.split(":");return{host:c,port:Cx(f)}}}function Cx(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function vM(){function e(){const t=document.createElement("p"),r=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",r.position="fixed",r.width="100%",r.backgroundColor="#ffffff",r.border=".1em solid #000000",r.color="#b50000",r.bottom="0px",r.left="0px",r.margin="0px",r.zIndex="10000",r.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(t,r){this.providerId=t,this.signInMethod=r}toJSON(){return fi("not implemented")}_getIdTokenResponse(t){return fi("not implemented")}_linkToIdToken(t,r){return fi("not implemented")}_getReauthenticationResolver(t){return fi("not implemented")}}async function xM(e,t){return _n(e,"POST","/v1/accounts:update",t)}async function bM(e,t){return _n(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wM(e,t){return sl(e,"POST","/v1/accounts:signInWithPassword",Ti(e,t))}async function Y4(e,t){return _n(e,"POST","/v1/accounts:sendOobCode",Ti(e,t))}async function SM(e,t){return Y4(e,t)}async function EM(e,t){return Y4(e,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TM(e,t){return sl(e,"POST","/v1/accounts:signInWithEmailLink",Ti(e,t))}async function CM(e,t){return sl(e,"POST","/v1/accounts:signInWithEmailLink",Ti(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo extends pg{constructor(t,r,s,l=null){super("password",s),this._email=t,this._password=r,this._tenantId=l}static _fromEmailAndPassword(t,r){return new qo(t,r,"password")}static _fromEmailAndCode(t,r,s=null){return new qo(t,r,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const r=typeof t=="string"?JSON.parse(t):t;if(r?.email&&r?.password){if(r.signInMethod==="password")return this._fromEmailAndPassword(r.email,r.password);if(r.signInMethod==="emailLink")return this._fromEmailAndCode(r.email,r.password,r.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bu(t,r,"signInWithPassword",wM);case"emailLink":return TM(t,{email:this._email,oobCode:this._password});default:mn(t,"internal-error")}}async _linkToIdToken(t,r){switch(this.signInMethod){case"password":const s={idToken:r,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bu(t,s,"signUpPassword",bM);case"emailLink":return CM(t,{idToken:r,email:this._email,oobCode:this._password});default:mn(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function es(e,t){return sl(e,"POST","/v1/accounts:signInWithIdp",Ti(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AM="http://localhost";class Xr extends pg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const r=new Xr(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(r.idToken=t.idToken),t.accessToken&&(r.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(r.nonce=t.nonce),t.pendingToken&&(r.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(r.accessToken=t.oauthToken,r.secret=t.oauthTokenSecret):mn("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const r=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:l,...c}=r;if(!s||!l)return null;const f=new Xr(s,l);return f.idToken=c.idToken||void 0,f.accessToken=c.accessToken||void 0,f.secret=c.secret,f.nonce=c.nonce,f.pendingToken=c.pendingToken||null,f}_getIdTokenResponse(t){const r=this.buildRequest();return es(t,r)}_linkToIdToken(t,r){const s=this.buildRequest();return s.idToken=r,es(t,s)}_getReauthenticationResolver(t){const r=this.buildRequest();return r.autoCreate=!1,es(t,r)}buildRequest(){const t={requestUri:AM,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),t.postBody=rl(r)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _M(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function jM(e){const t=Co(Ao(e)).link,r=t?Co(Ao(t)).deep_link_id:null,s=Co(Ao(e)).deep_link_id;return(s?Co(Ao(s)).link:null)||s||r||t||e}class gg{constructor(t){const r=Co(Ao(t)),s=r.apiKey??null,l=r.oobCode??null,c=_M(r.mode??null);ue(s&&l&&c,"argument-error"),this.apiKey=s,this.operation=c,this.code=l,this.continueUrl=r.continueUrl??null,this.languageCode=r.lang??null,this.tenantId=r.tenantId??null}static parseLink(t){const r=jM(t);try{return new gg(r)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(){this.providerId=Wr.PROVIDER_ID}static credential(t,r){return qo._fromEmailAndPassword(t,r)}static credentialWithLink(t,r){const s=gg.parseLink(r);return ue(s,"argument-error"),qo._fromEmailAndCode(t,s.code,s.tenantId)}}Wr.PROVIDER_ID="password";Wr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Wr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol extends yg{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends ol{constructor(){super("facebook.com")}static credential(t){return Xr._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ir.credentialFromTaggedObject(t)}static credentialFromError(t){return ir.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ir.credential(t.oauthAccessToken)}catch{return null}}}ir.FACEBOOK_SIGN_IN_METHOD="facebook.com";ir.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di extends ol{constructor(){super("google.com"),this.addScope("profile")}static credential(t,r){return Xr._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:r})}static credentialFromResult(t){return di.credentialFromTaggedObject(t)}static credentialFromError(t){return di.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:r,oauthAccessToken:s}=t;if(!r&&!s)return null;try{return di.credential(r,s)}catch{return null}}}di.GOOGLE_SIGN_IN_METHOD="google.com";di.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends ol{constructor(){super("github.com")}static credential(t){return Xr._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return rr.credentialFromTaggedObject(t)}static credentialFromError(t){return rr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return rr.credential(t.oauthAccessToken)}catch{return null}}}rr.GITHUB_SIGN_IN_METHOD="github.com";rr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends ol{constructor(){super("twitter.com")}static credential(t,r){return Xr._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:r})}static credentialFromResult(t){return ar.credentialFromTaggedObject(t)}static credentialFromError(t){return ar.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:r,oauthTokenSecret:s}=t;if(!r||!s)return null;try{return ar.credential(r,s)}catch{return null}}}ar.TWITTER_SIGN_IN_METHOD="twitter.com";ar.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RM(e,t){return sl(e,"POST","/v1/accounts:signUp",Ti(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,r,s,l=!1){const c=await xn._fromIdTokenResponse(t,s,l),f=Ax(s);return new Zr({user:c,providerId:f,_tokenResponse:s,operationType:r})}static async _forOperation(t,r,s){await t._updateTokensIfNecessary(s,!0);const l=Ax(s);return new Zr({user:t,providerId:l,_tokenResponse:s,operationType:r})}}function Ax(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu extends Ei{constructor(t,r,s,l){super(r.code,r.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,wu.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:r.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,r,s,l){return new wu(t,r,s,l)}}function K4(e,t,r,s){return(t==="reauthenticate"?r._getReauthenticationResolver(e):r._getIdTokenResponse(e)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?wu._fromErrorAndOperation(e,c,t,s):c})}async function DM(e,t,r=!1){const s=await Kr(e,t._linkToIdToken(e.auth,await e.getIdToken()),r);return Zr._forOperation(e,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X4(e,t,r=!1){const{auth:s}=e;if(Xt(s.app))return Promise.reject(pi(s));const l="reauthenticate";try{const c=await Kr(e,K4(s,l,t,e),r);ue(c.idToken,s,"internal-error");const f=hg(c.idToken);ue(f,s,"internal-error");const{sub:p}=f;return ue(e.uid===p,s,"user-mismatch"),Zr._forOperation(e,l,c)}catch(c){throw c?.code==="auth/user-not-found"&&mn(s,"user-mismatch"),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z4(e,t,r=!1){if(Xt(e.app))return Promise.reject(pi(e));const s="signIn",l=await K4(e,s,t),c=await Zr._fromIdTokenResponse(e,s,l);return r||await e._updateCurrentUser(c.user),c}async function MM(e,t){return Z4(Ci(e),t)}async function kM(e,t){return X4(jt(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q4(e){const t=Ci(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function OM(e,t,r){const s=Ci(e);await bu(s,{requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"},"getOobCode",EM)}async function NM(e,t,r){if(Xt(e.app))return Promise.reject(pi(e));const s=Ci(e),f=await bu(s,{returnSecureToken:!0,email:t,password:r,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",RM).catch(m=>{throw m.code==="auth/password-does-not-meet-requirements"&&Q4(e),m}),p=await Zr._fromIdTokenResponse(s,"signIn",f);return await s._updateCurrentUser(p.user),p}function LM(e,t,r){return Xt(e.app)?Promise.reject(pi(e)):MM(jt(e),Wr.credential(t,r)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Q4(e),s})}async function zM(e,t){const r=jt(e),l={requestType:"VERIFY_EMAIL",idToken:await e.getIdToken()},{email:c}=await SM(r.auth,l);c!==e.email&&await e.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PM(e,t){return _n(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W4(e,{displayName:t,photoURL:r}){if(t===void 0&&r===void 0)return;const s=jt(e),c={idToken:await s.getIdToken(),displayName:t,photoUrl:r,returnSecureToken:!0},f=await Kr(s,PM(s.auth,c));s.displayName=f.displayName||null,s.photoURL=f.photoUrl||null;const p=s.providerData.find(({providerId:m})=>m==="password");p&&(p.displayName=s.displayName,p.photoURL=s.photoURL),await s._updateTokensIfNecessary(f)}function IM(e,t){return $M(jt(e),null,t)}async function $M(e,t,r){const{auth:s}=e,c={idToken:await e.getIdToken(),returnSecureToken:!0};r&&(c.password=r);const f=await Kr(e,xM(s,c));await e._updateTokensIfNecessary(f,!0)}function UM(e,t,r,s){return jt(e).onIdTokenChanged(t,r,s)}function BM(e,t,r){return jt(e).beforeAuthStateChanged(t,r)}function VM(e,t,r,s){return jt(e).onAuthStateChanged(t,r,s)}function HM(e){return jt(e).signOut()}async function FM(e){return jt(e).delete()}const Su="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J4{constructor(t,r){this.storageRetriever=t,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(Su,"1"),this.storage.removeItem(Su),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,r){return this.storage.setItem(t,JSON.stringify(r)),Promise.resolve()}_get(t){const r=this.storage.getItem(t);return Promise.resolve(r?JSON.parse(r):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qM=1e3,GM=10;class e6 extends J4{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,r)=>this.onStorageEvent(t,r),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=V4(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const r of Object.keys(this.listeners)){const s=this.storage.getItem(r),l=this.localCache[r];s!==l&&t(r,l,s)}}onStorageEvent(t,r=!1){if(!t.key){this.forAllChangedKeys((f,p,m)=>{this.notifyListeners(f,m)});return}const s=t.key;r?this.detachListener():this.stopPolling();const l=()=>{const f=this.storage.getItem(s);!r&&this.localCache[s]===f||this.notifyListeners(s,f)},c=this.storage.getItem(s);eM()&&c!==t.newValue&&t.newValue!==t.oldValue?setTimeout(l,GM):l()}notifyListeners(t,r){this.localCache[t]=r;const s=this.listeners[t];if(s)for(const l of Array.from(s))l(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,r,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:r,newValue:s}),!0)})},qM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(r)}_removeListener(t,r){this.listeners[t]&&(this.listeners[t].delete(r),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,r){await super._set(t,r),this.localCache[t]=JSON.stringify(r)}async _get(t){const r=await super._get(t);return this.localCache[t]=JSON.stringify(r),r}async _remove(t){await super._remove(t),delete this.localCache[t]}}e6.type="LOCAL";const YM=e6;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t6 extends J4{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,r){}_removeListener(t,r){}}t6.type="SESSION";const n6=t6;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KM(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(r){return{fulfilled:!1,reason:r}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const r=this.receivers.find(l=>l.isListeningto(t));if(r)return r;const s=new Yu(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const r=t,{eventId:s,eventType:l,data:c}=r.data,f=this.handlersMap[l];if(!f?.size)return;r.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const p=Array.from(f).map(async g=>g(r.origin,c)),m=await KM(p);r.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:m})}_subscribe(t,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(r)}_unsubscribe(t,r){this.handlersMap[t]&&r&&this.handlersMap[t].delete(r),(!r||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Yu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vg(e="",t=10){let r="";for(let s=0;s<t;s++)r+=Math.floor(Math.random()*10);return e+r}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XM{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,r,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let c,f;return new Promise((p,m)=>{const g=vg("",20);l.port1.start();const y=setTimeout(()=>{m(new Error("unsupported_event"))},s);f={messageChannel:l,onMessage(x){const w=x;if(w.data.eventId===g)switch(w.data.status){case"ack":clearTimeout(y),c=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),p(w.data.response);break;default:clearTimeout(y),clearTimeout(c),m(new Error("invalid_response"));break}}},this.handlers.add(f),l.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:t,eventId:g,data:r},[l.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(){return window}function ZM(e){Bn().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i6(){return typeof Bn().WorkerGlobalScope<"u"&&typeof Bn().importScripts=="function"}async function QM(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function WM(){return navigator?.serviceWorker?.controller||null}function JM(){return i6()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r6="firebaseLocalStorageDb",ek=1,Eu="firebaseLocalStorage",a6="fbase_key";class ll{constructor(t){this.request=t}toPromise(){return new Promise((t,r)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function Ku(e,t){return e.transaction([Eu],t?"readwrite":"readonly").objectStore(Eu)}function tk(){const e=indexedDB.deleteDatabase(r6);return new ll(e).toPromise()}function rp(){const e=indexedDB.open(r6,ek);return new Promise((t,r)=>{e.addEventListener("error",()=>{r(e.error)}),e.addEventListener("upgradeneeded",()=>{const s=e.result;try{s.createObjectStore(Eu,{keyPath:a6})}catch(l){r(l)}}),e.addEventListener("success",async()=>{const s=e.result;s.objectStoreNames.contains(Eu)?t(s):(s.close(),await tk(),t(await rp()))})})}async function _x(e,t,r){const s=Ku(e,!0).put({[a6]:t,value:r});return new ll(s).toPromise()}async function nk(e,t){const r=Ku(e,!1).get(t),s=await new ll(r).toPromise();return s===void 0?null:s.value}function jx(e,t){const r=Ku(e,!0).delete(t);return new ll(r).toPromise()}const ik=800,rk=3;class s6{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await rp(),this.db)}async _withRetries(t){let r=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(r++>rk)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return i6()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Yu._getInstance(JM()),this.receiver._subscribe("keyChanged",async(t,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(t,r)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await QM(),!this.activeServiceWorker)return;this.sender=new XM(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&t[0]?.fulfilled&&t[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||WM()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await rp();return await _x(t,Su,"1"),await jx(t,Su),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,r){return this._withPendingWrite(async()=>(await this._withRetries(s=>_x(s,t,r)),this.localCache[t]=r,this.notifyServiceWorker(t)))}async _get(t){const r=await this._withRetries(s=>nk(s,t));return this.localCache[t]=r,r}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(r=>jx(r,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(l=>{const c=Ku(l,!1).getAll();return new ll(c).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const r=[],s=new Set;if(t.length!==0)for(const{fbase_key:l,value:c}of t)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(c)&&(this.notifyListeners(l,c),r.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),r.push(l));return r}notifyListeners(t,r){this.localCache[t]=r;const s=this.listeners[t];if(s)for(const l of Array.from(s))l(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ik)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,r){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(r)}_removeListener(t,r){this.listeners[t]&&(this.listeners[t].delete(r),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}s6.type="LOCAL";const ak=s6;new al(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o6(e,t){return t?hi(t):(ue(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg extends pg{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return es(t,this._buildIdpRequest())}_linkToIdToken(t,r){return es(t,this._buildIdpRequest(r))}_getReauthenticationResolver(t){return es(t,this._buildIdpRequest())}_buildIdpRequest(t){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(r.idToken=t),r}}function sk(e){return Z4(e.auth,new xg(e),e.bypassAuthState)}function ok(e){const{auth:t,user:r}=e;return ue(r,t,"internal-error"),X4(r,new xg(e),e.bypassAuthState)}async function lk(e){const{auth:t,user:r}=e;return ue(r,t,"internal-error"),DM(r,new xg(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l6{constructor(t,r,s,l,c=!1){this.auth=t,this.resolver=s,this.user=l,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(t,r)=>{this.pendingPromise={resolve:t,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:r,sessionId:s,postBody:l,tenantId:c,error:f,type:p}=t;if(f){this.reject(f);return}const m={auth:this.auth,requestUri:r,sessionId:s,tenantId:c||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(m))}catch(g){this.reject(g)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return sk;case"linkViaPopup":case"linkViaRedirect":return lk;case"reauthViaPopup":case"reauthViaRedirect":return ok;default:mn(this.auth,"internal-error")}}resolve(t){wi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){wi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ck=new al(2e3,1e4);async function uk(e,t,r){if(Xt(e.app))return Promise.reject(Sn(e,"operation-not-supported-in-this-environment"));const s=Ci(e);N9(e,t,yg);const l=o6(s,r);return new Hr(s,"signInViaPopup",t,l).executeNotNull()}class Hr extends l6{constructor(t,r,s,l,c){super(t,r,l,c),this.provider=s,this.authWindow=null,this.pollId=null,Hr.currentPopupAction&&Hr.currentPopupAction.cancel(),Hr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return ue(t,this.auth,"internal-error"),t}async onExecution(){wi(this.filter.length===1,"Popup operations only handle one event");const t=vg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject(Sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hr.currentPopupAction=null}pollUserCancellation(){const t=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Sn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,ck.get())};t()}}Hr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dk="pendingRedirect",tu=new Map;class fk extends l6{constructor(t,r,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,s),this.eventId=null}async execute(){let t=tu.get(this.auth._key());if(!t){try{const s=await hk(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(r){t=()=>Promise.reject(r)}tu.set(this.auth._key(),t)}return this.bypassAuthState||tu.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const r=await this.auth._redirectUserForId(t.eventId);if(r)return this.user=r,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hk(e,t){const r=gk(t),s=pk(e);if(!await s._isAvailable())return!1;const l=await s._get(r)==="true";return await s._remove(r),l}function mk(e,t){tu.set(e._key(),t)}function pk(e){return hi(e._redirectPersistence)}function gk(e){return eu(dk,e.config.apiKey,e.name)}async function yk(e,t,r=!1){if(Xt(e.app))return Promise.reject(pi(e));const s=Ci(e),l=o6(s,t),f=await new fk(s,l,r).execute();return f&&!r&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,t)),f}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk=600*1e3;class xk{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let r=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(r=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!bk(t)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=t,r=!0)),r}sendToConsumer(t,r){if(t.error&&!c6(t)){const s=t.error.code?.split("auth/")[1]||"internal-error";r.onError(Sn(this.auth,s))}else r.onAuthEvent(t)}isEventForConsumer(t,r){const s=r.eventId===null||!!t.eventId&&t.eventId===r.eventId;return r.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=vk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Rx(t))}saveEventToCache(t){this.cachedEventUids.add(Rx(t)),this.lastProcessedEventTime=Date.now()}}function Rx(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function c6({type:e,error:t}){return e==="unknown"&&t?.code==="auth/no-auth-event"}function bk(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return c6(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wk(e,t={}){return _n(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ek=/^https?/;async function Tk(e){if(e.config.emulator)return;const{authorizedDomains:t}=await wk(e);for(const r of t)try{if(Ck(r))return}catch{}mn(e,"unauthorized-domain")}function Ck(e){const t=np(),{protocol:r,hostname:s}=new URL(t);if(e.startsWith("chrome-extension://")){const f=new URL(e);return f.hostname===""&&s===""?r==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):r==="chrome-extension:"&&f.hostname===s}if(!Ek.test(r))return!1;if(Sk.test(e))return s===e;const l=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ak=new al(3e4,6e4);function Dx(){const e=Bn().___jsl;if(e?.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let r=0;r<e.CP.length;r++)e.CP[r]=null}}function _k(e){return new Promise((t,r)=>{function s(){Dx(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Dx(),r(Sn(e,"network-request-failed"))},timeout:Ak.get()})}if(Bn().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else if(Bn().gapi?.load)s();else{const l=cM("iframefcb");return Bn()[l]=()=>{gapi.load?s():r(Sn(e,"network-request-failed"))},F4(`${lM()}?onload=${l}`).catch(c=>r(c))}}).catch(t=>{throw nu=null,t})}let nu=null;function jk(e){return nu=nu||_k(e),nu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk=new al(5e3,15e3),Dk="__/auth/iframe",Mk="emulator/auth/iframe",kk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ok=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Nk(e){const t=e.config;ue(t.authDomain,e,"auth-domain-config-required");const r=t.emulator?fg(t,Mk):`https://${e.config.authDomain}/${Dk}`,s={apiKey:t.apiKey,appName:e.name,v:vs},l=Ok.get(e.config.apiHost);l&&(s.eid=l);const c=e._getFrameworks();return c.length&&(s.fw=c.join(",")),`${r}?${rl(s).slice(1)}`}async function Lk(e){const t=await jk(e),r=Bn().gapi;return ue(r,e,"internal-error"),t.open({where:document.body,url:Nk(e),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kk,dontclear:!0},s=>new Promise(async(l,c)=>{await s.restyle({setHideOnLeave:!1});const f=Sn(e,"network-request-failed"),p=Bn().setTimeout(()=>{c(f)},Rk.get());function m(){Bn().clearTimeout(p),l(s)}s.ping(m).then(m,()=>{c(f)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Pk=500,Ik=600,$k="_blank",Uk="http://localhost";class Mx{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Bk(e,t,r,s=Pk,l=Ik){const c=Math.max((window.screen.availHeight-l)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let p="";const m={...zk,width:s.toString(),height:l.toString(),top:c,left:f},g=_t().toLowerCase();r&&(p=P4(g)?$k:r),L4(g)&&(t=t||Uk,m.scrollbars="yes");const y=Object.entries(m).reduce((w,[C,R])=>`${w}${C}=${R},`,"");if(J9(g)&&p!=="_self")return Vk(t||"",p),new Mx(null);const x=window.open(t||"",p,y);ue(x,e,"popup-blocked");try{x.focus()}catch{}return new Mx(x)}function Vk(e,t){const r=document.createElement("a");r.href=e,r.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hk="__/auth/handler",Fk="emulator/auth/handler",qk=encodeURIComponent("fac");async function kx(e,t,r,s,l,c){ue(e.config.authDomain,e,"auth-domain-config-required"),ue(e.config.apiKey,e,"invalid-api-key");const f={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:s,v:vs,eventId:l};if(t instanceof yg){t.setDefaultLanguage(e.languageCode),f.providerId=t.providerId||"",vD(t.getCustomParameters())||(f.customParameters=JSON.stringify(t.getCustomParameters()));for(const[y,x]of Object.entries({}))f[y]=x}if(t instanceof ol){const y=t.getScopes().filter(x=>x!=="");y.length>0&&(f.scopes=y.join(","))}e.tenantId&&(f.tid=e.tenantId);const p=f;for(const y of Object.keys(p))p[y]===void 0&&delete p[y];const m=await e._getAppCheckToken(),g=m?`#${qk}=${encodeURIComponent(m)}`:"";return`${Gk(e)}?${rl(p).slice(1)}${g}`}function Gk({config:e}){return e.emulator?fg(e,Fk):`https://${e.authDomain}/${Hk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hh="webStorageSupport";class Yk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=n6,this._completeRedirectFn=yk,this._overrideRedirectResult=mk}async _openPopup(t,r,s,l){wi(this.eventManagers[t._key()]?.manager,"_initialize() not called before _openPopup()");const c=await kx(t,r,s,np(),l);return Bk(t,c,vg())}async _openRedirect(t,r,s,l){await this._originValidation(t);const c=await kx(t,r,s,np(),l);return ZM(c),new Promise(()=>{})}_initialize(t){const r=t._key();if(this.eventManagers[r]){const{manager:l,promise:c}=this.eventManagers[r];return l?Promise.resolve(l):(wi(c,"If manager is not set, promise should be"),c)}const s=this.initAndGetManager(t);return this.eventManagers[r]={promise:s},s.catch(()=>{delete this.eventManagers[r]}),s}async initAndGetManager(t){const r=await Lk(t),s=new xk(t);return r.register("authEvent",l=>(ue(l?.authEvent,t,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=r,s}_isIframeWebStorageSupported(t,r){this.iframes[t._key()].send(Hh,{type:Hh},l=>{const c=l?.[0]?.[Hh];c!==void 0&&r(!!c),mn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const r=t._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=Tk(t)),this.originValidationPromises[r]}get _shouldInitProactively(){return V4()||z4()||mg()}}const Kk=Yk;var Ox="@firebase/auth",Nx="1.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const r=this.auth.onIdTokenChanged(s=>{t(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,r),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const r=this.internalListeners.get(t);r&&(this.internalListeners.delete(t),r(),this.updateProactiveRefresh())}assertAuthConfigured(){ue(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zk(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Qk(e){us(new Yr("auth",(t,{options:r})=>{const s=t.getProvider("app").getImmediate(),l=t.getProvider("heartbeat"),c=t.getProvider("app-check-internal"),{apiKey:f,authDomain:p}=s.options;ue(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const m={apiKey:f,authDomain:p,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:H4(e)},g=new aM(s,l,c,m);return pM(g,r),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,r,s)=>{t.getProvider("auth-internal").initialize()})),us(new Yr("auth-internal",t=>{const r=Ci(t.getProvider("auth").getImmediate());return(s=>new Xk(s))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),cr(Ox,Nx,Zk(e)),cr(Ox,Nx,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wk=300,Jk=v4("authIdTokenMaxAge")||Wk;let Lx=null;const eO=e=>async t=>{const r=t&&await t.getIdTokenResult(),s=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(s&&s>Jk)return;const l=r?.token;Lx!==l&&(Lx=l,await fetch(e,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function tO(e=C4()){const t=cg(e,"auth");if(t.isInitialized())return t.getImmediate();const r=mM(e,{popupRedirectResolver:Kk,persistence:[ak,YM,n6]}),s=v4("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(s,location.origin);if(location.origin===c.origin){const f=eO(c.toString());BM(r,f,()=>f(r.currentUser)),UM(r,p=>f(p))}}const l=g4("auth");return l&&gM(r,`http://${l}`),r}function nO(){return document.getElementsByTagName("head")?.[0]??document}sM({loadJS(e){return new Promise((t,r)=>{const s=document.createElement("script");s.setAttribute("src",e),s.onload=t,s.onerror=l=>{const c=Sn("internal-error");c.customData=l,r(c)},s.type="text/javascript",s.charset="UTF-8",nO().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Qk("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u6="firebasestorage.googleapis.com",iO="storageBucket",rO=120*1e3,aO=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends Ei{constructor(t,r,s=0){super(Fh(t),`Firebase Storage: ${r} (${Fh(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Hn.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Fh(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Vn;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Vn||(Vn={}));function Fh(e){return"storage/"+e}function sO(){const e="An unknown error occurred, please check the error payload for server response.";return new Hn(Vn.UNKNOWN,e)}function oO(){return new Hn(Vn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function lO(){return new Hn(Vn.CANCELED,"User canceled the upload/download.")}function cO(e){return new Hn(Vn.INVALID_URL,"Invalid URL '"+e+"'.")}function uO(e){return new Hn(Vn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function zx(e){return new Hn(Vn.INVALID_ARGUMENT,e)}function d6(){return new Hn(Vn.APP_DELETED,"The Firebase app was deleted.")}function dO(e){return new Hn(Vn.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(t,r){this.bucket=t,this.path_=r}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,r){let s;try{s=bn.makeFromUrl(t,r)}catch{return new bn(t,"")}if(s.path==="")return s;throw uO(t)}static makeFromUrl(t,r){let s=null;const l="([A-Za-z0-9.\\-_]+)";function c(Q){Q.path.charAt(Q.path.length-1)==="/"&&(Q.path_=Q.path_.slice(0,-1))}const f="(/(.*))?$",p=new RegExp("^gs://"+l+f,"i"),m={bucket:1,path:3};function g(Q){Q.path_=decodeURIComponent(Q.path)}const y="v[A-Za-z0-9_]+",x=r.replace(/[.]/g,"\\."),w="(/([^?#]*).*)?$",C=new RegExp(`^https?://${x}/${y}/b/${l}/o${w}`,"i"),R={bucket:1,path:3},O=r===u6?"(?:storage.googleapis.com|storage.cloud.google.com)":r,N="([^?#]*)",_=new RegExp(`^https?://${O}/${l}/${N}`,"i"),z=[{regex:p,indices:m,postModify:c},{regex:C,indices:R,postModify:g},{regex:_,indices:{bucket:1,path:2},postModify:g}];for(let Q=0;Q<z.length;Q++){const G=z[Q],Y=G.regex.exec(t);if(Y){const H=Y[G.indices.bucket];let X=Y[G.indices.path];X||(X=""),s=new bn(H,X),G.postModify(s);break}}if(s==null)throw cO(t);return s}}class fO{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hO(e,t,r){let s=1,l=null,c=null,f=!1,p=0;function m(){return p===2}let g=!1;function y(...N){g||(g=!0,t.apply(null,N))}function x(N){l=setTimeout(()=>{l=null,e(C,m())},N)}function w(){c&&clearTimeout(c)}function C(N,..._){if(g){w();return}if(N){w(),y.call(null,N,..._);return}if(m()||f){w(),y.call(null,N,..._);return}s<64&&(s*=2);let z;p===1?(p=2,z=0):z=(s+Math.random())*1e3,x(z)}let R=!1;function O(N){R||(R=!0,w(),!g&&(l!==null?(N||(p=2),clearTimeout(l),x(0)):N||(p=1)))}return x(0),c=setTimeout(()=>{f=!0,O(!0)},r),O}function mO(e){e(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pO(e){return e!==void 0}function Px(e,t,r,s){if(s<t)throw zx(`Invalid value for '${e}'. Expected ${t} or greater.`);if(s>r)throw zx(`Invalid value for '${e}'. Expected ${r} or less.`)}function gO(e){const t=encodeURIComponent;let r="?";for(const s in e)if(e.hasOwnProperty(s)){const l=t(s)+"="+t(e[s]);r=r+l+"&"}return r=r.slice(0,-1),r}var Tu;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(Tu||(Tu={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yO(e,t){const r=e>=500&&e<600,l=[408,429].indexOf(e)!==-1,c=t.indexOf(e)!==-1;return r||l||c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO{constructor(t,r,s,l,c,f,p,m,g,y,x,w=!0,C=!1){this.url_=t,this.method_=r,this.headers_=s,this.body_=l,this.successCodes_=c,this.additionalRetryCodes_=f,this.callback_=p,this.errorCallback_=m,this.timeout_=g,this.progressCallback_=y,this.connectionFactory_=x,this.retry=w,this.isUsingEmulator=C,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((R,O)=>{this.resolve_=R,this.reject_=O,this.start_()})}start_(){const t=(s,l)=>{if(l){s(!1,new Oc(!1,null,!0));return}const c=this.connectionFactory_();this.pendingConnection_=c;const f=p=>{const m=p.loaded,g=p.lengthComputable?p.total:-1;this.progressCallback_!==null&&this.progressCallback_(m,g)};this.progressCallback_!==null&&c.addUploadProgressListener(f),c.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&c.removeUploadProgressListener(f),this.pendingConnection_=null;const p=c.getErrorCode()===Tu.NO_ERROR,m=c.getStatus();if(!p||yO(m,this.additionalRetryCodes_)&&this.retry){const y=c.getErrorCode()===Tu.ABORT;s(!1,new Oc(!1,null,y));return}const g=this.successCodes_.indexOf(m)!==-1;s(!0,new Oc(g,c))})},r=(s,l)=>{const c=this.resolve_,f=this.reject_,p=l.connection;if(l.wasSuccessCode)try{const m=this.callback_(p,p.getResponse());pO(m)?c(m):c()}catch(m){f(m)}else if(p!==null){const m=sO();m.serverResponse=p.getErrorText(),this.errorCallback_?f(this.errorCallback_(p,m)):f(m)}else if(l.canceled){const m=this.appDelete_?d6():lO();f(m)}else{const m=oO();f(m)}};this.canceled_?r(!1,new Oc(!1,null,!0)):this.backoffId_=hO(t,r,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&mO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Oc{constructor(t,r,s){this.wasSuccessCode=t,this.connection=r,this.canceled=!!s}}function xO(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function bO(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function wO(e,t){t&&(e["X-Firebase-GMPID"]=t)}function SO(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function EO(e,t,r,s,l,c,f=!0,p=!1){const m=gO(e.urlParams),g=e.url+m,y=Object.assign({},e.headers);return wO(y,t),xO(y,r),bO(y,c),SO(y,s),new vO(g,e.method,y,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,l,f,p)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TO(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function CO(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(t,r){this._service=t,r instanceof bn?this._location=r:this._location=bn.makeFromUrl(r,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,r){return new Cu(t,r)}get root(){const t=new bn(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return CO(this._location.path)}get storage(){return this._service}get parent(){const t=TO(this._location.path);if(t===null)return null;const r=new bn(this._location.bucket,t);return new Cu(this._service,r)}_throwIfRoot(t){if(this._location.path==="")throw dO(t)}}function Ix(e,t){const r=t?.[iO];return r==null?null:bn.makeFromBucketSpec(r,e)}function AO(e,t,r,s={}){e.host=`${t}:${r}`;const l=nl(t);l&&(x4(`https://${e.host}/b`),b4("Storage",!0)),e._isUsingEmulator=!0,e._protocol=l?"https":"http";const{mockUserToken:c}=s;c&&(e._overrideAuthToken=typeof c=="string"?c:aD(c,e.app.options.projectId))}class _O{constructor(t,r,s,l,c,f=!1){this.app=t,this._authProvider=r,this._appCheckProvider=s,this._url=l,this._firebaseVersion=c,this._isUsingEmulator=f,this._bucket=null,this._host=u6,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=rO,this._maxUploadRetryTime=aO,this._requests=new Set,l!=null?this._bucket=bn.makeFromBucketSpec(l,this._host):this._bucket=Ix(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=bn.makeFromBucketSpec(this._url,t):this._bucket=Ix(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Px("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Px("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const r=await t.getToken();if(r!==null)return r.accessToken}return null}async _getAppCheckToken(){if(Xt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Cu(this,t)}_makeRequest(t,r,s,l,c=!0){if(this._deleted)return new fO(d6());{const f=EO(t,this._appId,s,l,r,this._firebaseVersion,c,this._isUsingEmulator);return this._requests.add(f),f.getPromise().then(()=>this._requests.delete(f),()=>this._requests.delete(f)),f}}async makeRequestWithTokens(t,r){const[s,l]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,r,s,l).getPromise()}}const $x="@firebase/storage",Ux="0.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f6="storage";function jO(e=C4(),t){e=jt(e);const s=cg(e,f6).getImmediate({identifier:t}),l=iD("storage");return l&&RO(s,...l),s}function RO(e,t,r,s={}){AO(e,t,r,s)}function DO(e,{instanceIdentifier:t}){const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return new _O(r,s,l,t,vs)}function MO(){us(new Yr(f6,DO,"PUBLIC").setMultipleInstances(!0)),cr($x,Ux,""),cr($x,Ux,"esm2020")}MO();const kO=new di,OO={apiKey:"AIzaSyAuskCSIa07S3Vdyf8djuVsBq75Um3zJQU",authDomain:"innova-solutions-4db3f.firebaseapp.com",projectId:"innova-solutions-4db3f",storageBucket:"innova-solutions-4db3f.firebasestorage.app",messagingSenderId:"971553657529",appId:"1:971553657529:web:7fbd4b9257faf55612c168"},h6=T4(OO),zt=tO(h6);jO(h6);const NO="http://localhost:8080/api";class LO{async request(t,r={}){const s=`${NO}${t}`,l={"Content-Type":"application/json",...r.headers};if(zt.currentUser&&!l.Authorization){const m=await zt.currentUser.getIdToken();l.Authorization=`Bearer ${m}`}const c=await fetch(s,{...r,headers:l}),f=await c.text(),p=f?JSON.parse(f):{};if(!c.ok)throw new Error(p.message||"Erro na requisição");return p}async createUser(t,r,s,l){return this.request("/users",{method:"POST",body:JSON.stringify({firebaseUid:t,name:r,email:s,profilePicture:l||null})})}async createUserWithToken(t,r,s,l,c){return this.request("/users",{method:"POST",headers:{Authorization:`Bearer ${t}`},body:JSON.stringify({firebaseUid:r,name:s,email:l,profilePicture:c||null})})}async getUserByFirebaseUid(t){return this.request(`/users/firebase/${t}`)}async getAllUsers(){return this.request("/users")}async getUserById(t){return this.request(`/users/${t}`)}async updateUser(t,r){return this.request(`/users/${t}`,{method:"PUT",body:JSON.stringify(r)})}async updateUserRole(t,r){return this.request(`/users/${t}/role`,{method:"PATCH",body:JSON.stringify({role:r})})}async deleteUser(t){return this.request(`/users/${t}`,{method:"DELETE"})}async registerPartner(t){return this.request("/stores/register",{method:"POST",body:JSON.stringify(t)})}async getAllCoupons(){return this.request("/coupons")}async getAllStores(){return this.request("/stores")}async getMyStores(){return this.request("/stores/minhas-lojas")}async getMyStore(){return this.request("/stores/minha-loja")}async updateStore(t,r){return this.request(`/stores/${t}`,{method:"PUT",body:JSON.stringify(r)})}async getCouponsByStore(t){return this.request(`/coupons/store/${t}`)}async createCoupon(t){return this.request("/coupons",{method:"POST",body:JSON.stringify(t)})}async updateCoupon(t,r){return this.request(`/coupons/${t}`,{method:"PUT",body:JSON.stringify(r)})}async deleteCoupon(t){return this.request(`/coupons/${t}`,{method:"DELETE"})}async getMyCoupons(){return this.request("/user-coupons")}async saveUserCoupon(t){return this.request(`/user-coupons/${t}`,{method:"POST"})}async removeUserCoupon(t){return this.request(`/user-coupons/${t}`,{method:"DELETE"})}async getStoreById(t){return this.request(`/stores/${t}`)}async updateStoreStatus(t,r,s=null){return this.request(`/stores/${t}/status`,{method:"PATCH",body:JSON.stringify({status:r,rejectionReason:s})})}async deleteStore(t){return this.request(`/stores/${t}`,{method:"DELETE"})}}const _e=new LO,m6=T.createContext(),zO=({children:e})=>{const[t,r]=T.useState(null),[s,l]=T.useState(null),[c,f]=T.useState(null),[p,m]=T.useState([]),[g,y]=T.useState(!0);T.useEffect(()=>VM(zt,async C=>{if(r(C),C){const R=await _e.getUserByFirebaseUid(C.uid).catch(()=>null);l(R);const O=await _e.getMyStore().catch(()=>null);f(O);const N=await _e.getMyStores().catch(()=>[]);m(Array.isArray(N)?N:[])}else l(null),f(null),m([]);y(!1)}),[]);const x=()=>HM(zt);return d.jsx(m6.Provider,{value:{user:t,dbUser:s,setDbUser:l,userStore:c,setUserStore:f,userStores:p,setUserStores:m,logout:x,loading:g,isAuthenticated:!!t},children:e})},Ai=()=>{const e=T.useContext(m6);if(!e)throw new Error("useAuth deve ser usado dentro de AuthProvider");return e},PO=S.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
`,IO=S.div`
  background: ${b.colors.white};
  border-radius: 20px;
  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  animation: slideIn 0.3s ease;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,$O=S.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 2rem;
  color: ${b.colors.gray};
  cursor: pointer;
  z-index: 1;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;

  &:hover {
    background: ${b.colors.lightGray};
    color: ${b.colors.text};
  }
`,UO=S.div`
  text-align: center;
  padding: 2rem;
  border-bottom: 1px solid ${b.colors.lightGray};
`,BO=S.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 4px solid ${b.colors.secondary};
`,VO=S.h2`
  font-family: ${b.fonts.secondary};
  color: ${b.colors.text};
  margin-bottom: 1rem;
  font-size: 1.5rem;
`,HO=S.div`
  background: linear-gradient(135deg, ${b.colors.primary} 0%, ${b.colors.primaryLight} 100%);
  color: ${b.colors.white};
  padding: 0.75rem 2rem;
  border-radius: 25px;
  font-weight: 700;
  font-size: 1.2rem;
  display: inline-block;
`,FO=S.div`
  padding: 2rem;
`,Nc=S.div`
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`,Lc=S.h3`
  color: ${b.colors.primary};
  font-family: ${b.fonts.secondary};
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid ${b.colors.secondary};
  padding-bottom: 0.5rem;
`,qO=S.p`
  color: ${b.colors.text};
  line-height: 1.6;
  margin: 0;
`,Bx=S.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,Wi=S.li`
  color: ${b.colors.text};
  padding: 0.5rem 0;
  position: relative;
  padding-left: 1.5rem;

  &:before {
    content: '✓';
    position: absolute;
    left: 0;
    color: ${b.colors.primary};
    font-weight: bold;
  }
`,GO=S.div`
  padding: 2rem;
  border-top: 1px solid ${b.colors.lightGray};
  text-align: center;
`,YO=S.button`
  background: linear-gradient(135deg, ${b.colors.primary} 0%, ${b.colors.primaryLight} 100%);
  color: ${b.colors.white};
  border: none;
  padding: 1rem 3rem;
  border-radius: 25px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(205, 160, 155, 0.3);
  }
`,KO=S.div`
  padding: 0 2rem 1.5rem;
`,XO=S.h3`
  color: ${b.colors.primary};
  font-family: ${b.fonts.secondary};
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid ${b.colors.secondary};
  padding-bottom: 0.5rem;
`,ZO=S.div`
  display: flex;
  gap: 0.75rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  cursor: grab;
  user-select: none;

  &:active { cursor: grabbing; }

  &::-webkit-scrollbar { height: 4px; }
  &::-webkit-scrollbar-thumb {
    background: ${b.colors.primaryLight};
    border-radius: 4px;
  }
`,QO=S.div`
  flex-shrink: 0;
  width: 110px;
  height: 110px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 2px solid ${b.colors.secondary};
    border-radius: 10px;
    transition: border-color 0.2s;
  }

  &:hover img { border-color: ${b.colors.primary}; }
`,WO=S.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.88);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  cursor: zoom-out;
`,JO=S.img`
  max-width: 90vw;
  max-height: 90vh;
  border-radius: 12px;
  object-fit: contain;
  box-shadow: 0 8px 40px rgba(0,0,0,0.5);
`,p6=({coupon:e,isOpen:t,onClose:r})=>{if(!t||!e)return null;const s=Si(),{isAuthenticated:l}=Ai(),[c,f]=T.useState(null),p=T.useRef(null),m=T.useRef(!1),g=T.useRef(0),y=T.useRef(0),x=_=>{m.current=!0,g.current=_.pageX-p.current.offsetLeft,y.current=p.current.scrollLeft},w=_=>{if(!m.current)return;_.preventDefault();const U=_.pageX-p.current.offsetLeft;p.current.scrollLeft=y.current-(U-g.current)},C=()=>{m.current=!1},R=_=>{m.current||f(_)},O=async()=>{if(!l){s("/login");return}try{await _e.saveUserCoupon(e.id)}catch{}s("/meus-cupons")},N=e.catalogImages||[];return d.jsxs(d.Fragment,{children:[d.jsx(PO,{onClick:r,children:d.jsxs(IO,{onClick:_=>_.stopPropagation(),children:[d.jsx($O,{onClick:r,children:"×"}),d.jsxs(UO,{children:[e.storeImage?d.jsx(BO,{src:e.storeImage,alt:e.storeName}):d.jsx("div",{style:{width:"100%",height:"160px",background:"linear-gradient(135deg, #CDA09B, #A67168)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"4rem",fontWeight:700,color:"white",fontFamily:"'Playfair Display', serif"},children:e.storeName?.charAt(0).toUpperCase()}),d.jsx(VO,{children:e.storeName}),d.jsxs(HO,{children:[e.discount,"% OFF"]})]}),d.jsxs(FO,{children:[e.title&&d.jsx(Nc,{children:d.jsx(Lc,{children:e.title})}),N.length>0&&d.jsxs(KO,{style:{padding:"0 0 1.5rem"},children:[d.jsx(XO,{children:"Catálogo de Produtos"}),d.jsx(ZO,{ref:p,onMouseDown:x,onMouseMove:w,onMouseUp:C,onMouseLeave:C,children:N.map((_,U)=>d.jsx(QO,{onClick:()=>R(_),children:d.jsx("img",{src:_,alt:`produto ${U+1}`,draggable:!1})},U))})]}),d.jsxs(Nc,{children:[d.jsx(Lc,{children:"Descrição da Oferta"}),d.jsx(qO,{children:e.description||`Aproveite ${e.discount}% de desconto em toda a loja ${e.storeName}.`})]}),d.jsxs(Nc,{children:[d.jsx(Lc,{children:"Como Usar"}),d.jsxs(Bx,{children:[d.jsx(Wi,{children:'Clique em "Aproveitar Oferta" para ser redirecionado'}),d.jsx(Wi,{children:"Adicione os produtos desejados ao carrinho"}),d.jsx(Wi,{children:"O desconto será aplicado automaticamente"}),d.jsx(Wi,{children:"Finalize sua compra normalmente"})]})]}),d.jsxs(Nc,{children:[d.jsx(Lc,{children:"Termos e Condições"}),d.jsxs(Bx,{children:[d.jsxs(Wi,{children:["Oferta válida até ",e.validUntil]}),d.jsx(Wi,{children:"Não cumulativo com outras promoções"}),d.jsx(Wi,{children:"Válido apenas para compras online"}),d.jsx(Wi,{children:"Sujeito à disponibilidade de estoque"})]})]})]}),d.jsx(GO,{children:d.jsx(YO,{onClick:O,children:"Aproveitar Oferta"})})]})}),c&&d.jsx(WO,{onClick:()=>f(null),children:d.jsx(JO,{src:c,alt:"produto ampliado"})})]})},eN=S.section`
  padding: 5rem 2rem;
  background: #FAFAFA;
  
  @media (max-width: ${b.breakpoints.mobile}) {
    padding: 3rem 1rem;
  }
`,tN=S.h2`
  font-family: 'Poppins', sans-serif;
  text-align: center;
  color: #1A1A1A;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #CDA09B, #E6BDB6);
    border-radius: 2px;
  }
  
  @media (max-width: ${b.breakpoints.mobile}) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`,nN=S.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  justify-items: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,iN={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.2}}},rN={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}},aN=()=>{const[e,t]=T.useState([]),[r,s]=T.useState(null),[l,c]=T.useState(!1);return T.useEffect(()=>{(async()=>{try{const[p,m]=await Promise.all([_e.request("/coupons"),_e.getAllStores()]),g={};m.forEach(x=>{g[x.id]=x});const y=p.filter(x=>g[x.store_id]?.status==="Aprovada"&&new Date(x.valid_until)>=new Date).sort((x,w)=>w.discount-x.discount||new Date(x.valid_until)-new Date(w.valid_until)).slice(0,4).map(x=>{const w=g[x.store_id]||{};return{id:x.id,storeName:w.name||"Loja",discount:x.discount,image:w.image_url?.trim()||null,storeImage:w.image_url?.trim()||null,catalogImages:x.catalog_images||[],website:w.website_url||"#",description:x.description||"",title:x.title||"",validUntil:new Date(x.valid_until).toLocaleDateString("pt-BR")}});t(y)}catch(p){console.error("Erro ao carregar cupons:",p)}})()},[]),d.jsxs(eN,{children:[d.jsx(tN,{as:he.h2,initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:"Melhores Cupons"}),d.jsx(nN,{as:he.div,variants:iN,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-100px"},children:e.map((f,p)=>d.jsx(he.div,{variants:rN,children:d.jsx(K7,{storeName:f.storeName,discount:f.discount,image:f.image,index:p,onViewCoupon:()=>{s(f),c(!0)}})},f.id))}),d.jsx(p6,{coupon:r,isOpen:l,onClose:()=>{c(!1),s(null)}})]})},sN=qu`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
`;qu`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;const oN=S.div`
  min-height: 100vh;
  background: #FAFAFA;
  scroll-behavior: smooth;
`,lN=S.section`
  background: linear-gradient(135deg, #A67168 0%, #CDA09B 100%);
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  padding: 4rem 2rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`,cN=S.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
`,uN=S.div`
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  animation: ${sN} 6s ease-in-out infinite;
  
  &:nth-child(odd) {
    background: rgba(255, 255, 255, 0.4);
    width: 6px;
    height: 6px;
  }
  
  &:nth-child(3n) {
    background: rgba(255, 255, 255, 0.3);
    width: 3px;
    height: 3px;
  }
`,dN=S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 2;
  max-width: 900px;
`,fN=S.h1`
  font-family: 'Poppins', sans-serif;
  color: #FFFFFF;
  font-size: 4rem;
  margin-bottom: 1.5rem;
  font-weight: 800;
  line-height: 1.2;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(0, 0, 0, 0.2);
  letter-spacing: -0.5px;

  @media (max-width: ${b.breakpoints.mobile}) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`,hN=S.p`
  color: rgba(255, 255, 255, 0.95);
  font-size: 1.4rem;
  margin-bottom: 3rem;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  line-height: 1.6;
  max-width: 600px;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  
  @media (max-width: ${b.breakpoints.mobile}) {
    font-size: 1.15rem;
    margin-bottom: 2rem;
  }
`,mN=S.a`
  background: #FFFFFF;
  color: #8B5A50;
  text-decoration: none;
  padding: 1.2rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  border: 2px solid transparent;
  
  &:hover {
    background: #F8F8F8;
    color: #6B4540;
    transform: translateY(-2px);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  svg {
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: rotate(12deg) scale(1.1);
  }
  
  @media (max-width: ${b.breakpoints.mobile}) {
    padding: 1rem 2rem;
    font-size: 1rem;
  }
`;function pN(){const e=Si(),t=Array.from({length:20},(r,s)=>s);return d.jsxs(oN,{children:[d.jsxs(lN,{children:[d.jsx(cN,{children:t.map(r=>d.jsx(uN,{as:he.div,initial:{opacity:0,y:100,x:Math.random()*100-50},animate:{opacity:[0,1,0],y:-100,x:Math.random()*200-100},transition:{duration:Math.random()*3+2,repeat:1/0,delay:Math.random()*2},style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*2}s`}},r))}),d.jsxs(dN,{as:he.div,initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,ease:"easeOut"},children:[d.jsx(fN,{as:he.h1,initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},children:"Encontre cupons exclusivos para suas semijoias favoritas!"}),d.jsx(hN,{as:he.p,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.4},children:"Promoções diárias das melhores lojas do segmento"}),d.jsxs(mN,{as:he.button,onClick:()=>e("/cupons"),initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.6,delay:.6},whileHover:{scale:1.05,boxShadow:"0 10px 30px rgba(205, 160, 155, 0.4)"},whileTap:{scale:.95},children:[d.jsx(PR,{size:20}),"Ver Todos os Cupons"]})]})]}),d.jsx(he.div,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:.8},children:d.jsx(aN,{})})]})}var g6={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Vx=wt.createContext&&wt.createContext(g6),gN=["attr","size","title"];function yN(e,t){if(e==null)return{};var r=vN(e,t),s,l;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(l=0;l<c.length;l++)s=c[l],!(t.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}function vN(e,t){if(e==null)return{};var r={};for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){if(t.indexOf(s)>=0)continue;r[s]=e[s]}return r}function Au(){return Au=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},Au.apply(this,arguments)}function Hx(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,s)}return r}function _u(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Hx(Object(r),!0).forEach(function(s){xN(e,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Hx(Object(r)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(r,s))})}return e}function xN(e,t,r){return t=bN(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function bN(e){var t=wN(e,"string");return typeof t=="symbol"?t:t+""}function wN(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var s=r.call(e,t);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function y6(e){return e&&e.map((t,r)=>wt.createElement(t.tag,_u({key:r},t.attr),y6(t.child)))}function Se(e){return t=>wt.createElement(SN,Au({attr:_u({},e.attr)},t),y6(e.child))}function SN(e){var t=r=>{var{attr:s,size:l,title:c}=e,f=yN(e,gN),p=l||r.size||"1em",m;return r.className&&(m=r.className),e.className&&(m=(m?m+" ":"")+e.className),wt.createElement("svg",Au({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,s,f,{className:m,style:_u(_u({color:e.color||r.color},r.style),e.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),c&&wt.createElement("title",null,c),e.children)};return Vx!==void 0?wt.createElement(Vx.Consumer,null,r=>t(r)):t(g6)}function v6(e){return Se({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(e)}function Fx(e){return Se({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"},child:[]}]})(e)}function cl(e){return Se({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"},child:[]}]})(e)}function Go(e){return Se({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"},child:[]}]})(e)}function EN(e){return Se({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(e)}function ap(e){return Se({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(e)}function TN(e){return Se({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(e)}function qx(e){return Se({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(e)}function Gx(e){return Se({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"},child:[]}]})(e)}function pr(e){return Se({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(e)}function x6(e){return Se({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},child:[]}]})(e)}function Yx(e){return Se({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"},child:[]}]})(e)}function Kx(e){return Se({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"},child:[]}]})(e)}function b6(e){return Se({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"},child:[]}]})(e)}function CN(e){return Se({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z"},child:[]}]})(e)}function bg(e){return Se({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"},child:[]}]})(e)}function w6(e){return Se({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z"},child:[]}]})(e)}function AN(e){return Se({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M528 32H48C21.5 32 0 53.5 0 80v16h576V80c0-26.5-21.5-48-48-48zM0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V128H0v304zm352-232c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zm0 64c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zm0 64c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zM176 192c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zM67.1 396.2C75.5 370.5 99.6 352 128 352h8.2c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h8.2c28.4 0 52.5 18.5 60.9 44.2 3.2 9.9-5.2 19.8-15.6 19.8H82.7c-10.4 0-18.8-10-15.6-19.8z"},child:[]}]})(e)}function _N(e){return Se({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z"},child:[]}]})(e)}function Xx(e){return Se({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"},child:[]}]})(e)}function jN(e){return Se({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"},child:[]}]})(e)}function RN(e){return Se({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M112 224c61.9 0 112-50.1 112-112S173.9 0 112 0 0 50.1 0 112s50.1 112 112 112zm0-160c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zm224 224c-61.9 0-112 50.1-112 112s50.1 112 112 112 112-50.1 112-112-50.1-112-112-112zm0 160c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zM392.3.2l31.6-.1c19.4-.1 30.9 21.8 19.7 37.8L77.4 501.6a23.95 23.95 0 0 1-19.6 10.2l-33.4.1c-19.5 0-30.9-21.9-19.7-37.8l368-463.7C377.2 4 384.5.2 392.3.2z"},child:[]}]})(e)}function S6(e){return Se({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"},child:[]}]})(e)}function ju(e){return Se({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"},child:[]}]})(e)}function DN(e){return Se({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 224h192V32H0v192zM64 96h64v64H64V96zm192-64v192h192V32H256zm128 128h-64V96h64v64zM0 480h192V288H0v192zm64-128h64v64H64v-64zm352-64h32v128h-96v-32h-32v96h-64V288h96v32h64v-32zm0 160h32v32h-32v-32zm-64 0h32v32h-32v-32z"},child:[]}]})(e)}function MN(e){return Se({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"},child:[]}]})(e)}function Zx(e){return Se({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"},child:[]}]})(e)}function E6(e){return Se({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(e)}function wg(e){return Se({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"},child:[]}]})(e)}function kN(e){return Se({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"},child:[]}]})(e)}function Yo(e){return Se({attr:{viewBox:"0 0 616 512"},child:[{tag:"path",attr:{d:"M602 118.6L537.1 15C531.3 5.7 521 0 510 0H106C95 0 84.7 5.7 78.9 15L14 118.6c-33.5 53.5-3.8 127.9 58.8 136.4 4.5.6 9.1.9 13.7.9 29.6 0 55.8-13 73.8-33.1 18 20.1 44.3 33.1 73.8 33.1 29.6 0 55.8-13 73.8-33.1 18 20.1 44.3 33.1 73.8 33.1 29.6 0 55.8-13 73.8-33.1 18.1 20.1 44.3 33.1 73.8 33.1 4.7 0 9.2-.3 13.7-.9 62.8-8.4 92.6-82.8 59-136.4zM529.5 288c-10 0-19.9-1.5-29.5-3.8V384H116v-99.8c-9.6 2.2-19.5 3.8-29.5 3.8-6 0-12.1-.4-18-1.2-5.6-.8-11.1-2.1-16.4-3.6V480c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V283.2c-5.4 1.6-10.8 2.9-16.4 3.6-6.1.8-12.1 1.2-18.2 1.2z"},child:[]}]})(e)}function ON(e){return Se({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M0 252.118V48C0 21.49 21.49 0 48 0h204.118a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.745 18.745-49.137 18.745-67.882 0L14.059 286.059A48 48 0 0 1 0 252.118zM112 64c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z"},child:[]}]})(e)}function Qr(e){return Se({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M128 160h320v192H128V160zm400 96c0 26.51 21.49 48 48 48v96c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48v-96c26.51 0 48-21.49 48-48s-21.49-48-48-48v-96c0-26.51 21.49-48 48-48h480c26.51 0 48 21.49 48 48v96c-26.51 0-48 21.49-48 48zm-48-104c0-13.255-10.745-24-24-24H120c-13.255 0-24 10.745-24 24v208c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24V152z"},child:[]}]})(e)}function ur(e){return Se({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(e)}function Lo(e){return Se({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"},child:[]}]})(e)}function T6(e){return Se({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M622.3 271.1l-115.2-45c-4.1-1.6-12.6-3.7-22.2 0l-115.2 45c-10.7 4.2-17.7 14-17.7 24.9 0 111.6 68.7 188.8 132.9 213.9 9.6 3.7 18 1.6 22.2 0C558.4 489.9 640 420.5 640 296c0-10.9-7-20.7-17.7-24.9zM496 462.4V273.3l95.5 37.3c-5.6 87.1-60.9 135.4-95.5 151.8zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm96 40c0-2.5.8-4.8 1.1-7.2-2.5-.1-4.9-.8-7.5-.8h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c6.8 0 13.3-1.5 19.2-4-54-42.9-99.2-116.7-99.2-212z"},child:[]}]})(e)}function Ru(e){return Se({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(e)}function C6(e){return Se({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"},child:[]}]})(e)}const NN=S.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    ${b.colors.primary} 0%,
    ${b.colors.primaryLight} 100%
  );
  padding: 2rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(202,199,182,0.3)"/><circle cx="80" cy="40" r="1.5" fill="rgba(255,255,255,0.3)"/><circle cx="40" cy="80" r="1" fill="rgba(202,199,182,0.2)"/></svg>');
  }
`,LN=S.div`
  background: ${b.colors.white};
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 450px;
  overflow: hidden;
  position: relative;
  z-index: 1;
`,zN=S.div`
  display: flex;
  background: ${b.colors.lightGray};
`,Qx=S.button`
  flex: 1;
  padding: 1.5rem;
  border: none;
  background: ${e=>e.$active?b.colors.white:"transparent"};
  color: ${e=>e.$active?b.colors.primary:b.colors.gray};
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  ${e=>e.$active&&`
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: ${b.colors.primary};
    }
  `}

  &:hover {
    color: ${b.colors.primary};
  }
`,PN=S.div`
  padding: 2.5rem;
`,IN=S.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,zc=S.div`
  position: relative;
  display: flex;
  flex-direction: column;
`,Pc=S.div`
  position: absolute;
  left: 1rem;
  top: 1rem;
  color: ${b.colors.gray};
  z-index: 1;
  pointer-events: none;
`,Ic=S.input`
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  border: 2px solid
    ${e=>e.error?"#e74c3c":b.colors.lightGray};
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: ${b.colors.white};

  &:focus {
    outline: none;
    border-color: ${b.colors.primary};
    box-shadow: 0 0 0 3px rgba(205, 160, 155, 0.1);
  }

  &::placeholder {
    color: ${b.colors.gray};
  }
`,Wx=S.button`
  position: absolute;
  right: 1rem;
  top: 1rem;
  background: none;
  border: none;
  color: ${b.colors.gray};
  cursor: pointer;
  padding: 0.5rem;
  transition: color 0.3s;
  z-index: 2;
  type: button;

  &:hover {
    color: ${b.colors.primary};
  }
`,Jx=S.button`
  background: linear-gradient(
    135deg,
    ${b.colors.primary} 0%,
    ${b.colors.primaryLight} 100%
  );
  color: ${b.colors.white};
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(205, 160, 155, 0.3);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`,$N=S.a`
  text-align: center;
  color: ${b.colors.primary};
  text-decoration: none;
  font-weight: 500;
  margin-top: 1rem;
  transition: color 0.3s;

  &:hover {
    color: ${b.colors.primaryLight};
    text-decoration: underline;
  }
`,$a=S.span`
  color: #e74c3c;
  font-size: 0.875rem;
  margin-top: 0.5rem;
  display: block;
`,UN=S.div`
  background: linear-gradient(135deg, ${b.colors.success} 0%, #66bb6a 100%);
  color: ${b.colors.white};
  padding: 1rem;
  border-radius: 12px;
  text-align: center;
  font-weight: 500;
  margin-bottom: 1.5rem;
  animation: slideIn 0.3s ease;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,BN=S.div`
  position: fixed;
  top: 1rem;
  left: 2rem;
  z-index: 1001;
  background: ${b.colors.white};
  border-radius: 15px;
  padding: 0 1rem;

  @media (max-width: ${b.breakpoints.mobile}) {
    left: 1rem;
  }
`,VN=S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`,HN=S.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${e=>e.$hasImage?"transparent":b.colors.lightGray};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${b.colors.gray};
  font-size: 2rem;
  overflow: hidden;
  border: 3px solid ${b.colors.lightGray};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,FN=S.label`
  background: ${b.colors.primary};
  color: ${b.colors.white};
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${b.colors.primaryLight};
    transform: translateY(-1px);
  }

  input {
    display: none;
  }

  svg {
    font-size: 0.9rem;
  }
`,qN=S.header`
  position: fixed;
  top: 0;
  width: 100%;
  background: ${b.colors.white};
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  z-index: 1000;

  @media (max-width: ${b.breakpoints.mobile}) {
    padding: 1rem;
    justify-content: space-between;
  }
`,A6=S.h1`
  font-family: ${b.fonts.secondary};
  color: ${b.colors.primary};
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s;
  flex-shrink: 0;

  &:hover {
    color: ${b.colors.primaryLight};
  }
`,GN=S.div`
  flex: 1;
  display: flex;
  justify-content: center;
  
  @media (max-width: ${b.breakpoints.mobile}) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    flex: none;
  }
`,YN=S.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: ${b.breakpoints.mobile}) {
    gap: 1rem;
  }
`,KN=S.div`
  flex-shrink: 0;
  
  @media (max-width: ${b.breakpoints.mobile}) {
    position: relative;
    z-index: 1;
  }
`,$c=S.a`
  color: #1A1A1A;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  position: relative;

  &:hover {
    color: #8B5A50;
    background: rgba(166, 113, 104, 0.1);
  }

  &.active {
    color: #8B5A50;
    background: rgba(166, 113, 104, 0.15);
  }
`,eb=()=>{const e=An(),t=Si(),{user:r}=Ai(),[s,l]=T.useState("login"),[c,f]=T.useState(!1);T.useEffect(()=>{e.pathname==="/registro"?l("register"):l("login")},[e.pathname]);const[p,m]=T.useState(!1),[g,y]=T.useState(!1),[x,w]=T.useState({name:"",email:"",password:"",confirmPassword:"",profilePicture:""}),[C,R]=T.useState({}),[O,N]=T.useState(""),_=H=>{const{name:X,value:ne}=H.target;w(re=>({...re,[X]:ne})),C[X]&&R(re=>({...re,[X]:""}))},U=H=>{const X=H.target.files[0];if(X){if(X.size>5*1024*1024){R(re=>({...re,photo:"Imagem muito grande. Máximo 5MB"}));return}const ne=URL.createObjectURL(X);w(re=>({...re,profilePicture:ne,profilePictureFile:X})),R(re=>({...re,photo:""}))}},z=async H=>{const X=await new Promise((be,pe)=>{const ve=new FileReader;ve.onloadend=()=>be(ve.result.split(",")[1]),ve.onerror=pe,ve.readAsDataURL(H)}),ne=new URLSearchParams;ne.append("key","06e7312be7cd16b207344fba43e96449"),ne.append("image",X);const ye=await(await fetch("https://api.imgbb.com/1/upload",{method:"POST",body:ne})).json();if(!ye.success)throw new Error("Falha ao fazer upload da imagem");return ye.data.url},Q=()=>{const H={};if(x.email?/\S+@\S+\.\S+/.test(x.email)||(H.email="E-mail inválido"):H.email="E-mail é obrigatório",!x.password)H.password="Senha é obrigatória";else if(s==="register"){const X=[];x.password.length<8&&X.push("8 caracteres"),/[A-Z]/.test(x.password)||X.push("1 maiúscula"),/[a-z]/.test(x.password)||X.push("1 minúscula"),/\d/.test(x.password)||X.push("1 número"),/[!@#$%^&*(),.?":{}|<>]/.test(x.password)||X.push("1 caractere especial"),X.length>0&&(H.password=`Faltando: ${X.join(", ")}`)}return s==="register"&&(x.name||(H.name="Nome é obrigatório"),x.confirmPassword?x.password!==x.confirmPassword&&(H.confirmPassword="Senhas não coincidem"):H.confirmPassword="Confirme sua senha"),H},G=async()=>{try{const H=await uk(zt,kO),{uid:X,displayName:ne,email:re,photoURL:ye}=H.user;await _e.getUserByFirebaseUid(X).catch(()=>null)||await _e.createUser(X,ne||"Usuário",re,ye),t("/")}catch{R({general:"Erro ao entrar com Google. Tente novamente."})}},Y=async H=>{H.preventDefault();const X=Q();if(Object.keys(X).length>0){R(X);return}f(!0),R({}),N("");try{if(s==="login"){if(!(await LM(zt,x.email,x.password)).user.emailVerified){await zt.signOut(),R({general:"Confirme seu e-mail antes de entrar. Verifique sua caixa de entrada."});return}N("Login realizado com sucesso!"),setTimeout(()=>t("/"),1500)}else{const{user:ne}=await NM(zt,x.email,x.password);let re=null;x.profilePictureFile&&(re=await z(x.profilePictureFile)),await W4(ne,{displayName:x.name,photoURL:re});const ye=await ne.getIdToken();await _e.createUserWithToken(ye,ne.uid,x.name,x.email,re).catch(be=>{if(!be.message?.includes("já cadastrado"))throw be}),await zM(ne),await zt.signOut(),N("Conta criada! Verifique seu e-mail para confirmar antes de entrar."),setTimeout(()=>{l("login"),w({name:"",email:"",password:"",confirmPassword:"",profilePicture:"",profilePictureFile:null}),N("")},3e3)}}catch(ne){R({general:{"auth/user-not-found":"Usuário não encontrado","auth/wrong-password":"Senha incorreta","auth/email-already-in-use":"E-mail já cadastrado","auth/invalid-credential":"E-mail ou senha incorretos","auth/too-many-requests":"Muitas tentativas. Tente novamente mais tarde"}[ne.code]||ne.message})}finally{f(!1)}};return d.jsxs(NN,{children:[d.jsx(BN,{children:d.jsx(A6,{as:Kt,to:"/",children:"Innova Solutions"})}),d.jsxs(LN,{children:[d.jsxs(zN,{children:[d.jsx(Qx,{$active:s==="login",onClick:()=>l("login"),children:"Entrar"}),d.jsx(Qx,{$active:s==="register",onClick:()=>l("register"),children:"Criar Conta"})]}),d.jsxs(PN,{children:[O&&d.jsx(UN,{children:O}),C.general&&d.jsx($a,{children:C.general}),d.jsxs(IN,{onSubmit:Y,children:[s==="register"&&d.jsxs(d.Fragment,{children:[d.jsxs(VN,{children:[d.jsx(HN,{$hasImage:!!x.profilePicture,children:x.profilePicture?d.jsx("img",{src:x.profilePicture,alt:"Preview"}):d.jsx(Ru,{})}),d.jsxs(FN,{children:[d.jsx(Go,{}),"Adicionar Foto (Opcional)",d.jsx("input",{type:"file",accept:"image/*",onChange:U})]}),C.photo&&d.jsx($a,{children:C.photo})]}),d.jsxs(zc,{children:[d.jsx(Pc,{children:d.jsx(Ru,{})}),d.jsx(Ic,{type:"text",name:"name",placeholder:"Nome completo",value:x.name,onChange:_,error:C.name}),C.name&&d.jsx($a,{children:C.name})]})]}),d.jsxs(zc,{children:[d.jsx(Pc,{children:d.jsx(pr,{})}),d.jsx(Ic,{type:"email",name:"email",placeholder:"E-mail",value:x.email,onChange:_,error:C.email}),C.email&&d.jsx($a,{children:C.email})]}),d.jsxs(zc,{children:[d.jsx(Pc,{children:d.jsx(Xx,{})}),d.jsx(Ic,{type:p?"text":"password",name:"password",placeholder:"Senha",value:x.password,onChange:_,error:C.password}),d.jsx(Wx,{type:"button",onClick:()=>m(!p),children:p?d.jsx(Yx,{}):d.jsx(Kx,{})}),C.password&&d.jsx($a,{children:C.password})]}),s==="register"&&d.jsxs(zc,{children:[d.jsx(Pc,{children:d.jsx(Xx,{})}),d.jsx(Ic,{type:g?"text":"password",name:"confirmPassword",placeholder:"Confirmar senha",value:x.confirmPassword,onChange:_,error:C.confirmPassword}),d.jsx(Wx,{type:"button",onClick:()=>y(!g),children:g?d.jsx(Yx,{}):d.jsx(Kx,{})}),C.confirmPassword&&d.jsx($a,{children:C.confirmPassword})]}),d.jsx(Jx,{type:"submit",disabled:c,children:c?"Carregando...":s==="login"?"Entrar":"Criar Conta"}),s==="login"&&d.jsx($N,{as:Kt,to:"/esqueceu-senha",children:"Esqueceu a senha?"}),d.jsx("div",{style:{textAlign:"center",margin:"0.5rem 0",color:"#999",fontSize:"0.85rem"},children:"ou"}),d.jsxs(Jx,{type:"button",onClick:G,style:{background:"#fff",color:"#444",border:"1px solid #ddd",display:"flex",alignItems:"center",justifyContent:"center",gap:"0.5rem"},children:[d.jsx("img",{src:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",width:"18",alt:"Google"}),"Continuar com Google"]})]})]})]})]})},XN=S.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, ${b.colors.primary} 0%, ${b.colors.primaryLight} 100%);
  padding: 2rem;
`,ZN=S.div`
  background: ${b.colors.white};
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 400px;
  padding: 2.5rem;
  position: relative;
`,QN=S.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${b.colors.primary};
  text-decoration: none;
  font-weight: 500;
  margin-bottom: 2rem;
  transition: color 0.3s;

  &:hover {
    color: ${b.colors.primaryLight};
  }
`,WN=S.h1`
  font-family: ${b.fonts.secondary};
  color: ${b.colors.text};
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
`,JN=S.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,eL=S.div`
  position: relative;
`,tL=S.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${b.colors.gray};
  z-index: 1;
`,nL=S.input`
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  border: 2px solid ${b.colors.lightGray};
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${b.colors.primary};
    box-shadow: 0 0 0 3px rgba(205, 160, 155, 0.1);
  }
`,iL=S.button`
  background: linear-gradient(135deg, ${b.colors.primary} 0%, ${b.colors.primaryLight} 100%);
  color: ${b.colors.white};
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(205, 160, 155, 0.3);
  }
`,rL=S.div`
  background: linear-gradient(135deg, ${b.colors.success} 0%, #66BB6A 100%);
  color: ${b.colors.white};
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  font-weight: 500;
  animation: slideIn 0.3s ease;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,aL=()=>{const[e,t]=T.useState(""),[r,s]=T.useState(!1),l=async c=>{c.preventDefault(),e&&(await OM(zt,e),s(!0))};return d.jsx(XN,{children:d.jsxs(ZN,{children:[d.jsxs(QN,{as:Kt,to:"/login",children:[d.jsx(v6,{})," Voltar ao Login"]}),d.jsx(WN,{children:"Recuperar Senha"}),r?d.jsx(rL,{children:"Instruções de recuperação foram enviadas para seu e-mail!"}):d.jsxs(JN,{onSubmit:l,children:[d.jsx("p",{style:{textAlign:"center",color:"#666",marginBottom:"2rem"},children:"Digite seu e-mail para receber as instruções de recuperação"}),d.jsxs(eL,{children:[d.jsx(tL,{children:d.jsx(pr,{})}),d.jsx(nL,{type:"email",placeholder:"Seu e-mail",value:e,onChange:c=>t(c.target.value),required:!0})]}),d.jsx(iL,{type:"submit",children:"Enviar Instruções"})]})]})})},sL=S.div`
  padding: 8rem 2rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
  min-height: 100vh;
  
  @media (max-width: ${b.breakpoints.mobile}) {
    padding: 6rem 1rem 2rem;
  }
`,oL=S.div`
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    font-family: ${b.fonts.secondary};
    color: ${b.colors.text};
    font-size: 3rem;
    margin-bottom: 1rem;

    @media (max-width: ${b.breakpoints.mobile}) {
      font-size: 2.2rem;
    }
  }

  p {
    color: ${b.colors.gray};
    font-size: 1.2rem;
  }
`,lL=S.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  position: relative;

  @media (max-width: ${b.breakpoints.mobile}) {
    flex-direction: column;
  }
`,cL=S.div`
  position: absolute;
  left: 1rem;
  color: ${b.colors.gray};
  z-index: 1;
`,uL=S.input`
  flex: 1;
  padding: 1rem 1rem 1rem 3rem;
  border: 2px solid ${b.colors.lightGray};
  border-radius: 25px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${b.colors.primary};
    box-shadow: 0 0 0 3px rgba(205, 160, 155, 0.1);
  }

  &::placeholder {
    color: ${b.colors.gray};
  }

  @media (max-width: ${b.breakpoints.mobile}) {
    width: 100%;
  }
`,dL=S.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${b.colors.primary};
  color: ${b.colors.white};
  border: none;
  padding: 1rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${b.colors.primaryLight};
    transform: translateY(-2px);
  }

  @media (max-width: ${b.breakpoints.mobile}) {
    width: 100%;
    justify-content: center;
  }
`,fL=S.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`,hL=S.div`
  background: ${b.colors.white};
  border: 2px solid ${b.colors.lightGray};
  border-radius: 15px;
  margin-bottom: 2rem;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
  position: relative;
  z-index: 1000;
  animation: slideDown 0.3s ease;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,mL=S.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  padding: 2rem;
  padding-bottom: 1rem;

  @media (max-width: ${b.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,pL=S.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,gL=S.h4`
  color: ${b.colors.text};
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-family: ${b.fonts.secondary};
`,tb=S.button`
  background: ${e=>e.active?b.colors.primary:"transparent"};
  color: ${e=>e.active?b.colors.white:b.colors.text};
  border: 2px solid ${e=>e.active?b.colors.primary:b.colors.lightGray};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;

  &:hover {
    border-color: ${b.colors.primary};
    color: ${e=>e.active?b.colors.white:b.colors.primary};
  }
`,yL=S.div`
  grid-column: 1 / -1;
  display: flex;
  gap: 1rem;
  justify-content: center;
  padding-top: 1rem;
  border-top: 1px solid ${b.colors.lightGray};
  margin-top: 1rem;

  @media (max-width: ${b.breakpoints.mobile}) {
    flex-direction: column;
  }
`,vL=S.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  color: ${b.colors.gray};
  border: 2px solid ${b.colors.lightGray};
  padding: 1rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;

  &:hover {
    color: #e74c3c;
    border-color: #e74c3c;
    transform: translateY(-1px);
  }
`,xL=S.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, ${b.colors.primary} 0%, ${b.colors.primaryLight} 100%);
  color: ${b.colors.white};
  border: none;
  padding: 1rem 2rem;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(205, 160, 155, 0.3);
  }
`,bL=S.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: ${b.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  @media (max-width: ${b.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,_6=S.div`
  background: ${b.colors.white};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.15);
  }
`,wL=S.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${_6}:hover & {
    transform: scale(1.05);
  }
`,SL=S.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.5rem;
`,EL=S.h3`
  font-family: ${b.fonts.secondary};
  color: ${b.colors.text};
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
`,TL=S.div`
  background: linear-gradient(135deg, ${b.colors.primary} 0%, ${b.colors.primaryLight} 100%);
  color: ${b.colors.white};
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  display: inline-block;
`,CL=S.button`
  width: 100%;
  background: linear-gradient(135deg, ${b.colors.primary} 0%, ${b.colors.primaryLight} 100%);
  color: ${b.colors.white};
  border: none;
  padding: 1rem;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: auto;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(205, 160, 155, 0.3);
  }
`,nb=S.div`
  text-align: center;
  padding: 4rem 2rem;
  color: ${b.colors.gray};

  h3 {
    color: ${b.colors.text};
    margin-bottom: 1rem;
    font-family: ${b.fonts.secondary};
  }
`,AL=(e,t)=>{const r={};return t.forEach(s=>{r[s.id]=s}),e.filter(s=>{const l=r[s.store_id];return l&&l.status==="Aprovada"&&new Date(s.valid_until)>=new Date}).map(s=>{const l=r[s.store_id];return{id:s.id,storeName:l.name,discount:s.discount,image:l.image_url?.trim()||null,storeImage:l.image_url?.trim()||null,catalogImages:s.catalog_images||[],website:l.website_url||"#",description:s.description||"",title:s.title||"",validUntil:new Date(s.valid_until).toLocaleDateString("pt-BR")}})},_L=()=>{const[e,t]=T.useState(""),[r,s]=T.useState(!1),[l,c]=T.useState(null),[f,p]=T.useState(!1),[m,g]=T.useState({sortBy:""}),[y,x]=T.useState({sortBy:""}),[w,C]=T.useState([]),[R,O]=T.useState([]),[N,_]=T.useState(!0);T.useEffect(()=>{(async()=>{try{const[H,X]=await Promise.all([_e.request("/coupons"),_e.getAllStores()]),ne=AL(H,X);C(ne),O(ne)}catch(H){console.error("Erro ao carregar cupons:",H)}finally{_(!1)}})()},[]);const U=()=>{let Y=w.filter(H=>H.storeName.toLowerCase().includes(e.toLowerCase())||H.title.toLowerCase().includes(e.toLowerCase()));m.sortBy==="highest-discount"&&Y.sort((H,X)=>X.discount-H.discount),m.sortBy==="lowest-discount"&&Y.sort((H,X)=>H.discount-X.discount),O(Y)};T.useEffect(()=>{U()},[e,m,w]);const z=(Y,H)=>{x(X=>({...X,[Y]:X[Y]===H?"":H}))},Q=()=>{g(y),s(!1)},G=()=>{const Y={sortBy:""};g(Y),x(Y),t(""),s(!1)};return d.jsxs(sL,{children:[d.jsxs(oL,{children:[d.jsx("h1",{children:"Cupons de Desconto"}),d.jsx("p",{children:"Encontre as melhores ofertas em semijoias das lojas parceiras"})]}),d.jsxs(lL,{children:[d.jsx(cL,{children:d.jsx(E6,{})}),d.jsx(uL,{type:"text",placeholder:"Buscar por nome da loja ou cupom...",value:e,onChange:Y=>t(Y.target.value)}),d.jsxs(dL,{onClick:()=>{x(m),s(!0)},children:[d.jsx(CN,{})," Filtros"]})]}),r&&d.jsxs(d.Fragment,{children:[d.jsx(fL,{onClick:()=>s(!1)}),d.jsx(hL,{children:d.jsxs(mL,{children:[d.jsxs(pL,{children:[d.jsx(gL,{children:"Ordenar por:"}),d.jsx(tb,{active:y.sortBy==="highest-discount",onClick:()=>z("sortBy","highest-discount"),children:"Maior desconto"}),d.jsx(tb,{active:y.sortBy==="lowest-discount",onClick:()=>z("sortBy","lowest-discount"),children:"Menor desconto"})]}),d.jsxs(yL,{children:[d.jsxs(vL,{onClick:G,children:[d.jsx(ur,{})," Limpar"]}),d.jsxs(xL,{onClick:Q,children:[d.jsx(ap,{})," Aplicar Filtros"]})]})]})})]}),N?d.jsx(nb,{children:d.jsx("h3",{children:"Carregando cupons..."})}):R.length>0?d.jsx(bL,{children:R.map(Y=>d.jsxs(_6,{children:[Y.image?d.jsx(wL,{src:Y.image,alt:Y.storeName}):d.jsx("div",{style:{width:"100%",height:"180px",flexShrink:0,background:"linear-gradient(135deg, #CDA09B, #A67168)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"3.5rem",fontWeight:700,color:"white",fontFamily:"'Playfair Display', serif"},children:Y.storeName?.charAt(0).toUpperCase()}),d.jsxs(SL,{children:[d.jsx(EL,{children:Y.storeName}),Y.title&&d.jsx("p",{style:{color:"#6B6B6B",fontSize:"0.9rem",margin:0},children:Y.title}),d.jsxs(TL,{children:[Y.discount,"% OFF"]}),d.jsx(CL,{onClick:()=>{c(Y),p(!0)},children:"Ver Detalhes"})]})]},Y.id))}):d.jsxs(nb,{children:[d.jsx("h3",{children:"Nenhum cupom encontrado"}),d.jsx("p",{children:"Tente ajustar os filtros ou buscar por outro termo"})]}),d.jsx(p6,{coupon:l,isOpen:f,onClose:()=>{p(!1),c(null)}})]})},jL=S.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 8rem 2rem 2rem;
  
  @media (max-width: 768px) {
    padding: 6rem 1rem 2rem;
  }
`,RL=S.div`
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    color: #2c3e50;
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: #7f8c8d;
    font-size: 1.1rem;
  }
`,DL=S.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
`,ML=S.div`
  background: white;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  }
`,kL=S.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`,OL=S.div`
  padding: 1.5rem;
`,NL=S.h3`
  color: #2c3e50;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
`,LL=S.div`
  background: linear-gradient(135deg, #e74c3c, #c0392b);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-weight: bold;
  font-size: 1.1rem;
  display: inline-block;
  margin-bottom: 1rem;
`,zL=S.p`
  color: #7f8c8d;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`,PL=S.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${e=>e.$expired?"#e74c3c":"#f39c12"};
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  font-weight: ${e=>e.$expired?"bold":"normal"};
`,IL=S.div`
  display: flex;
  gap: 0.5rem;
`,$L=S.button`
  flex: 1;
  background: ${e=>e.$expired?"linear-gradient(135deg, #95a5a6, #7f8c8d)":"linear-gradient(135deg, #27ae60, #2ecc71)"};
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-weight: bold;
  cursor: ${e=>e.$expired?"not-allowed":"pointer"};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  opacity: ${e=>e.$expired?"0.6":"1"};

  &:hover {
    background: ${e=>e.$expired?"linear-gradient(135deg, #95a5a6, #7f8c8d)":"linear-gradient(135deg, #229954, #27ae60)"};
    transform: ${e=>e.$expired?"none":"translateY(-2px)"};
  }
`,UL=S.button`
  background: linear-gradient(135deg, #e74c3c, #c0392b);
  color: white;
  border: none;
  padding: 0.8rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 45px;

  &:hover {
    background: linear-gradient(135deg, #c0392b, #a93226);
    transform: translateY(-2px);
  }
`,ib=S.div`
  text-align: center;
  padding: 4rem 2rem;
`,BL=S.div`
  font-size: 4rem;
  color: #bdc3c7;
  margin-bottom: 1rem;
`,rb=S.p`
  color: #7f8c8d;
  font-size: 1.2rem;
`,VL=()=>{const[e,t]=T.useState([]),[r,s]=T.useState({}),[l,c]=T.useState(!0);T.useEffect(()=>{(async()=>{try{const[g,y]=await Promise.all([_e.getMyCoupons(),_e.getAllStores()]),x={};y.forEach(w=>{x[w.id]=w}),s(x),t(g.filter(w=>x[w.store_id]?.status==="Aprovada"))}catch(g){console.error("Erro ao carregar meus cupons:",g)}finally{c(!1)}})()},[]);const f=m=>{const g=r[m.store_id];window.open(g?.website_url||"#","_blank")},p=async m=>{if(confirm("Tem certeza que deseja remover este cupom?"))try{await _e.removeUserCoupon(m),t(g=>g.filter(y=>y.id!==m))}catch(g){console.error("Erro ao remover cupom:",g)}};return d.jsxs(jL,{children:[d.jsxs(RL,{children:[d.jsx("h1",{children:"Meus Cupons"}),d.jsx("p",{children:"Seus cupons salvos estão aqui"})]}),l?d.jsx(ib,{children:d.jsx(rb,{children:"Carregando..."})}):e.length>0?d.jsx(DL,{children:e.map(m=>{const g=r[m.store_id]||{},y=m.image_url?.trim()||g.image_url?.trim()||null,x=new Date(m.valid_until).toLocaleDateString("pt-BR");return d.jsxs(ML,{children:[y?d.jsx(kL,{src:y,alt:g.name}):d.jsx("div",{style:{width:"100%",height:"200px",background:"linear-gradient(135deg, #CDA09B, #A67168)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"3.5rem",fontWeight:700,color:"white",fontFamily:"'Playfair Display', serif"},children:g.name?.charAt(0).toUpperCase()}),d.jsxs(OL,{children:[d.jsx(NL,{children:g.name||"Loja"}),d.jsxs(LL,{children:[m.discount,"% OFF"]}),m.description&&d.jsx(zL,{children:m.description}),d.jsx(PL,{$expired:new Date(m.valid_until)<new Date,children:new Date(m.valid_until)<new Date?d.jsxs(d.Fragment,{children:[d.jsx(qx,{})," Expirado em ",x]}):d.jsxs(d.Fragment,{children:[d.jsx(qx,{})," Válido até ",x]})}),d.jsxs(IL,{children:[d.jsxs($L,{onClick:()=>f(m),disabled:new Date(m.valid_until)<new Date,$expired:new Date(m.valid_until)<new Date,children:[d.jsx(DN,{})," ",new Date(m.valid_until)<new Date?"Cupom Expirado":"Usar Cupom"]}),d.jsx(UL,{onClick:()=>p(m.id),children:d.jsx(Lo,{})})]})]})]},m.id)})}):d.jsxs(ib,{children:[d.jsx(BL,{children:d.jsx(Qr,{})}),d.jsx(rb,{children:"Você ainda não possui cupons salvos"})]})]})},HL=S.div`
  min-height: 100vh;
  background: #FAFAFA;
  display: flex;
  align-items: stretch;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`,FL=S.aside`
  width: 380px;
  flex-shrink: 0;
  background: linear-gradient(160deg, ${b.colors.primaryDark} 0%, ${b.colors.primary} 55%, ${b.colors.primaryLight} 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 3rem;
  position: sticky;
  top: 0;
  height: 100vh;

  @media (max-width: 900px) {
    width: 100%;
    height: auto;
    position: static;
    padding: 3rem 2rem 2.5rem;
  }
`,qL=S.div`
  font-family: ${b.fonts.secondary};
  font-size: 1.6rem;
  font-weight: 700;
  color: white;
  margin-bottom: 3rem;
  letter-spacing: 0.02em;

  span {
    display: block;
    font-family: ${b.fonts.primary};
    font-size: 0.8rem;
    font-weight: 400;
    opacity: 0.75;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-top: 0.2rem;
  }
`,GL=S.h2`
  font-family: ${b.fonts.secondary};
  font-size: 2rem;
  color: white;
  line-height: 1.3;
  margin-bottom: 1rem;
`,YL=S.p`
  color: rgba(255,255,255,0.75);
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 2.5rem;
`,KL=S.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,XL=S.li`
  display: flex;
  align-items: center;
  gap: 0.85rem;
  color: rgba(255,255,255,0.9);
  font-size: 0.9rem;
  font-weight: 500;
`,ZL=S.div`
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: rgba(255,255,255,0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.95rem;
  flex-shrink: 0;
`,QL=S.main`
  flex: 1;
  padding: 5rem 4rem 4rem;
  overflow-y: auto;

  @media (max-width: 1100px) {
    padding: 4rem 2.5rem 3rem;
  }

  @media (max-width: 900px) {
    padding: 2.5rem 1.5rem 3rem;
  }
`,WL=S.div`
  margin-bottom: 2.5rem;
`,JL=S.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: ${b.colors.gray};
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 2rem;
  transition: color 0.2s;

  &:hover {
    color: ${b.colors.primary};
  }
`,ez=S.h1`
  font-family: ${b.fonts.secondary};
  color: ${b.colors.text};
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 0.4rem;
`,tz=S.p`
  color: ${b.colors.gray};
  font-size: 0.95rem;
  margin: 0;
`,nz=S.div`
  display: flex;
  align-items: center;
  gap: 0;
  margin-bottom: 2.5rem;
`,qh=S.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex: 1;
`,Gh=S.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 700;
  flex-shrink: 0;
  background: ${e=>e.active?b.colors.primary:e.done?b.colors.secondary:"#E0E0E0"};
  color: ${e=>e.active?"white":e.done?b.colors.primary:"#9E9E9E"};
  border: 2px solid ${e=>e.active?b.colors.primary:e.done?b.colors.primaryLight:"#E0E0E0"};
  transition: all 0.3s;
`,Yh=S.span`
  font-size: 0.8rem;
  font-weight: 600;
  color: ${e=>e.active?b.colors.primary:"#9E9E9E"};
  white-space: nowrap;

  @media (max-width: 600px) {
    display: none;
  }
`,ab=S.div`
  flex: 1;
  height: 2px;
  background: ${e=>e.done?b.colors.primaryLight:"#E0E0E0"};
  margin: 0 0.5rem;
  transition: background 0.3s;
`,iz=S.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,sb=S.div`
  background: ${b.colors.white};
  border-radius: 16px;
  padding: 1.75rem 2rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  border: 1px solid rgba(205, 160, 155, 0.15);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`,ob=S.h3`
  font-family: ${b.fonts.secondary};
  color: ${b.colors.text};
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0 0 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;

  svg {
    color: ${b.colors.primary};
    font-size: 1rem;
  }
`,lb=S.div`
  height: 1px;
  background: ${b.colors.secondary};
  margin: 0 0 0.25rem;
`,Kh=S.div`
  display: grid;
  grid-template-columns: ${e=>e.cols===2?"1fr 1fr":"1fr"};
  gap: 1rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,ln=S.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`,cn=S.label`
  font-size: 0.8rem;
  font-weight: 600;
  color: ${b.colors.gray};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,oi=S.div`
  position: relative;
  display: flex;
  align-items: center;
`,li=S.div`
  position: absolute;
  left: 0.9rem;
  color: ${e=>e.error?"#C62828":b.colors.primaryLight};
  font-size: 0.95rem;
  pointer-events: none;
  z-index: 1;
`,ci=S.input`
  width: 100%;
  padding: 0.8rem 1rem 0.8rem ${e=>e.hasIcon?"2.6rem":"1rem"};
  border: 2px solid ${e=>e.error?"#FFCDD2":b.colors.lightGray};
  border-radius: 10px;
  font-size: 0.95rem;
  font-family: ${b.fonts.primary};
  background: ${e=>e.error?"#FFF8F8":"#FAFAFA"};
  color: ${b.colors.text};
  transition: all 0.2s;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${e=>e.error?"#E53935":b.colors.primary};
    background: white;
    box-shadow: 0 0 0 3px ${e=>e.error?"rgba(229,57,53,0.08)":"rgba(166,113,104,0.1)"};
  }

  &::placeholder {
    color: #BDBDBD;
  }
`,rz=S.textarea`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 2px solid ${b.colors.lightGray};
  border-radius: 10px;
  font-size: 0.95rem;
  font-family: ${b.fonts.primary};
  background: #FAFAFA;
  color: ${b.colors.text};
  resize: vertical;
  min-height: 90px;
  transition: all 0.2s;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${b.colors.primary};
    background: white;
    box-shadow: 0 0 0 3px rgba(166,113,104,0.1);
  }

  &::placeholder {
    color: #BDBDBD;
  }
`,Nn=S.span`
  color: #C62828;
  font-size: 0.78rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`,cb=S.button`
  background: linear-gradient(135deg, ${b.colors.primaryDark} 0%, ${b.colors.primary} 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 700;
  font-family: ${b.fonts.primary};
  cursor: pointer;
  transition: all 0.25s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  letter-spacing: 0.02em;
  box-shadow: 0 4px 15px rgba(166,113,104,0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(166,113,104,0.4);
  }

  &:active {
    transform: translateY(0);
  }
`,az=S.div`
  background: ${b.colors.white};
  border-radius: 20px;
  padding: 4rem 3rem;
  text-align: center;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  border: 1px solid rgba(205, 160, 155, 0.15);
  max-width: 480px;
  margin: 0 auto;
`,sz=S.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: ${b.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 2rem;
  color: ${b.colors.primary};
`,oz=S.h2`
  font-family: ${b.fonts.secondary};
  color: ${b.colors.text};
  font-size: 1.75rem;
  margin-bottom: 0.75rem;
`,lz=S.p`
  color: ${b.colors.gray};
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 2rem;
`,cz=S.div`
  border: 2px dashed ${b.colors.primaryLight};
  border-radius: 12px;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  background: ${b.colors.secondary};
  cursor: pointer;
  transition: all 0.2s;

  svg {
    font-size: 2rem;
    color: ${b.colors.primaryLight};
  }

  &:hover {
    border-color: ${b.colors.primary};
    background: #EDD8D5;
  }
`,ub=S.label`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${b.colors.primary};
  color: white;
  padding: 0.55rem 1.25rem;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${b.colors.primaryDark};
  }

  input {
    display: none;
  }
`,db=S.span`
  font-size: 0.78rem;
  color: ${b.colors.gray};
`,uz=S.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid ${b.colors.primaryLight};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: ${b.colors.secondary};
`,dz=S.img`
  width: 100%;
  max-height: 180px;
  object-fit: contain;
  border-radius: 8px;
`,fz=S.button`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: #FFEBEE;
  color: #C62828;
  border: none;
  padding: 0.4rem 1rem;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #C62828;
    color: white;
  }
`,hz=[{icon:d.jsx(w6,{}),text:"Alcance milhares de clientes qualificados"},{icon:d.jsx(Qr,{}),text:"Gerencie seus cupons com facilidade"}],mz=()=>{const{user:e}=Ai(),[t,r]=T.useState({companyName:"",cnpj:"",ownerName:"",email:"",phone:"",website:"",couponTitle:"",discount:"",validUntil:"",description:""}),[s,l]=T.useState({}),[c,f]=T.useState(!1),[p,m]=T.useState(!1),[g,y]=T.useState(""),[x,w]=T.useState(null),[C,R]=T.useState(""),[O,N]=T.useState(!1),[_,U]=T.useState([]),[z,Q]=T.useState([]),G=M=>{const P=M.replace(/\D/g,"");return P.length<=2?`(${P}`:P.length<=6?`(${P.slice(0,2)}) ${P.slice(2)}`:P.length<=10?`(${P.slice(0,2)}) ${P.slice(2,6)}-${P.slice(6)}`:`(${P.slice(0,2)}) ${P.slice(2,7)}-${P.slice(7,11)}`},Y=M=>{const P=M.replace(/\D/g,"");return P.length<=2?P:P.length<=5?`${P.slice(0,2)}.${P.slice(2)}`:P.length<=8?`${P.slice(0,2)}.${P.slice(2,5)}.${P.slice(5)}`:P.length<=12?`${P.slice(0,2)}.${P.slice(2,5)}.${P.slice(5,8)}/${P.slice(8)}`:`${P.slice(0,2)}.${P.slice(2,5)}.${P.slice(5,8)}/${P.slice(8,12)}-${P.slice(12,14)}`},H=M=>{const{name:P,value:te}=M.target,A=P==="phone"?G(te):P==="cnpj"?Y(te):te;r(q=>({...q,[P]:A})),s[P]&&l(q=>({...q,[P]:""}))},X=()=>{const M={};return t.companyName.trim()||(M.companyName="Nome da empresa é obrigatório"),t.cnpj.trim()?t.cnpj.replace(/\D/g,"").length!==14&&(M.cnpj="CNPJ deve ter 14 dígitos"):M.cnpj="CNPJ é obrigatório",t.ownerName.trim()||(M.ownerName="Nome do responsável é obrigatório"),t.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t.email)||(M.email="E-mail inválido"):M.email="E-mail é obrigatório",t.phone.trim()?t.phone.replace(/\D/g,"").length<10&&(M.phone="Telefone inválido"):M.phone="Telefone é obrigatório",t.couponTitle.trim()||(M.couponTitle="Título do cupom é obrigatório"),t.discount?(t.discount<1||t.discount>100)&&(M.discount="Entre 1% e 100%"):M.discount="Desconto é obrigatório",t.validUntil?new Date(t.validUntil)<=new Date&&(M.validUntil="A data deve ser futura"):M.validUntil="Data de validade é obrigatória",z.length<4&&(M.catalog="Adicione pelo menos 4 fotos no catálogo"),l(M),Object.keys(M).length===0},ne=M=>{const P=M.target.files[0];if(P){if(P.size>5*1024*1024){y("Imagem muito grande. Máximo 5MB.");return}w(P),R(URL.createObjectURL(P))}},re=()=>{w(null),R("")},ye=M=>{const P=Array.from(M.target.files),te=12-z.length;if(P.length===0)return;const A=P.slice(0,te).filter(k=>k.size<=5*1024*1024),q=A.map(k=>URL.createObjectURL(k));U(k=>[...k,...A]),Q(k=>[...k,...q])},be=M=>{U(P=>P.filter((te,A)=>A!==M)),Q(P=>P.filter((te,A)=>A!==M))},pe=async M=>{const P=await new Promise((k,W)=>{const ee=new FileReader;ee.onloadend=()=>k(ee.result.split(",")[1]),ee.onerror=W,ee.readAsDataURL(M)}),te=new URLSearchParams;te.append("key","06e7312be7cd16b207344fba43e96449"),te.append("image",P);const q=await(await fetch("https://api.imgbb.com/1/upload",{method:"POST",body:te})).json();if(!q.success)throw new Error("Falha ao fazer upload da imagem");return q.data.url},ve=async M=>{if(M.preventDefault(),!!X()){m(!0),y("");try{let P="";x&&(N(!0),P=await pe(x),N(!1)),N(!0);const te=await Promise.all(_.map(A=>pe(A)));N(!1),await _e.registerPartner({...t,imageUrl:P,catalogImages:te,firebaseUid:e?.uid}),f(!0)}catch(P){N(!1),y(P.message||"Erro ao enviar cadastro. Tente novamente.")}finally{m(!1)}}},Ce=t.companyName&&t.cnpj&&t.ownerName&&t.email&&t.phone,F=c?3:Ce?2:1;return d.jsxs(HL,{children:[d.jsxs(FL,{children:[d.jsxs(qL,{children:["Innova Solutions",d.jsx("span",{children:"Portal de Parceiros"})]}),d.jsx(GL,{children:"Faça parte da nossa rede de parceiros"}),d.jsx(YL,{children:"Conecte sua marca a milhares de clientes apaixonados por joias e acessórios."}),d.jsx(KL,{children:hz.map((M,P)=>d.jsxs(XL,{children:[d.jsx(ZL,{children:M.icon}),M.text]},P))})]}),d.jsxs(QL,{children:[d.jsxs(WL,{children:[d.jsxs(JL,{href:"/",children:[d.jsx(v6,{})," Voltar ao início"]}),d.jsx(ez,{children:"Cadastro de Parceiro"}),d.jsx(tz,{children:"Preencha os dados abaixo para solicitar sua parceria"})]}),d.jsxs(nz,{children:[d.jsxs(qh,{children:[d.jsx(Gh,{active:F===1,done:F>1,children:"1"}),d.jsx(Yh,{active:F===1,children:"Empresa"})]}),d.jsx(ab,{done:F>1}),d.jsxs(qh,{children:[d.jsx(Gh,{active:F===2,done:F>2,children:"2"}),d.jsx(Yh,{active:F===2,children:"Cupom"})]}),d.jsx(ab,{done:F>2}),d.jsxs(qh,{children:[d.jsx(Gh,{active:F===3,done:F>3,children:"3"}),d.jsx(Yh,{active:F===3,children:"Concluído"})]})]}),c?d.jsxs(az,{children:[d.jsx(sz,{children:d.jsx(EN,{})}),d.jsx(oz,{children:"Cadastro enviado!"}),d.jsx(lz,{children:"Recebemos sua solicitação de parceria. Nossa equipe irá analisar e entrar em contato em até 2 dias úteis."}),d.jsx(cb,{as:"a",href:"/",style:{textDecoration:"none",display:"inline-flex"},children:"Voltar ao início"})]}):d.jsxs(iz,{onSubmit:ve,children:[d.jsxs(sb,{children:[d.jsxs(ob,{children:[d.jsx(Fx,{})," Dados da Empresa"]}),d.jsx(lb,{}),d.jsxs(Kh,{cols:2,children:[d.jsxs(ln,{children:[d.jsx(cn,{children:"Nome da empresa *"}),d.jsxs(oi,{children:[d.jsx(li,{error:s.companyName,children:d.jsx(Fx,{})}),d.jsx(ci,{hasIcon:!0,name:"companyName",placeholder:"Ex: Bella Acessórios",value:t.companyName,onChange:H,error:s.companyName})]}),s.companyName&&d.jsx(Nn,{children:s.companyName})]}),d.jsxs(ln,{children:[d.jsx(cn,{children:"CNPJ *"}),d.jsxs(oi,{children:[d.jsx(li,{error:s.cnpj,children:d.jsx(AN,{})}),d.jsx(ci,{hasIcon:!0,name:"cnpj",placeholder:"00.000.000/0000-00",value:t.cnpj,onChange:H,error:s.cnpj,maxLength:"18"})]}),s.cnpj&&d.jsx(Nn,{children:s.cnpj})]})]}),d.jsxs(ln,{children:[d.jsx(cn,{children:"Nome do responsável *"}),d.jsxs(oi,{children:[d.jsx(li,{error:s.ownerName,children:d.jsx(Ru,{})}),d.jsx(ci,{hasIcon:!0,name:"ownerName",placeholder:"Nome completo",value:t.ownerName,onChange:H,error:s.ownerName})]}),s.ownerName&&d.jsx(Nn,{children:s.ownerName})]}),d.jsxs(Kh,{cols:2,children:[d.jsxs(ln,{children:[d.jsx(cn,{children:"E-mail corporativo *"}),d.jsxs(oi,{children:[d.jsx(li,{error:s.email,children:d.jsx(pr,{})}),d.jsx(ci,{hasIcon:!0,type:"email",name:"email",placeholder:"contato@empresa.com",value:t.email,onChange:H,error:s.email})]}),s.email&&d.jsx(Nn,{children:s.email})]}),d.jsxs(ln,{children:[d.jsx(cn,{children:"Telefone *"}),d.jsxs(oi,{children:[d.jsx(li,{error:s.phone,children:d.jsx(S6,{})}),d.jsx(ci,{hasIcon:!0,type:"tel",name:"phone",placeholder:"(00) 00000-0000",value:t.phone,onChange:H,error:s.phone,maxLength:"15"})]}),s.phone&&d.jsx(Nn,{children:s.phone})]})]}),d.jsxs(ln,{children:[d.jsx(cn,{children:"Logo / Imagem da empresa"}),C?d.jsxs(uz,{children:[d.jsx(dz,{src:C,alt:"Preview"}),d.jsxs(fz,{type:"button",onClick:re,children:[d.jsx(ur,{})," Remover"]})]}):d.jsxs(cz,{children:[d.jsx(_N,{}),d.jsxs(ub,{children:[d.jsx(Go,{})," Escolher imagem",d.jsx("input",{type:"file",accept:"image/*",onChange:ne})]}),d.jsx(db,{children:"PNG, JPG ou WEBP — máx. 5MB"})]})]}),d.jsxs(ln,{children:[d.jsx(cn,{children:"Website"}),d.jsxs(oi,{children:[d.jsx(li,{children:d.jsx(bg,{})}),d.jsx(ci,{hasIcon:!0,type:"url",name:"website",placeholder:"https://www.suaempresa.com.br (opcional)",value:t.website,onChange:H})]})]})]}),d.jsxs(sb,{children:[d.jsxs(ob,{children:[d.jsx(Qr,{})," Primeiro Cupom"]}),d.jsx(lb,{}),d.jsxs(ln,{children:[d.jsx(cn,{children:"Título do cupom *"}),d.jsxs(oi,{children:[d.jsx(li,{error:s.couponTitle,children:d.jsx(ON,{})}),d.jsx(ci,{hasIcon:!0,name:"couponTitle",placeholder:"Ex: 20% OFF em toda a coleção",value:t.couponTitle,onChange:H,error:s.couponTitle})]}),s.couponTitle&&d.jsx(Nn,{children:s.couponTitle})]}),d.jsxs(Kh,{cols:2,children:[d.jsxs(ln,{children:[d.jsx(cn,{children:"Desconto (%) *"}),d.jsxs(oi,{children:[d.jsx(li,{error:s.discount,children:d.jsx(RN,{})}),d.jsx(ci,{hasIcon:!0,type:"number",name:"discount",placeholder:"Ex: 20",min:"1",max:"100",value:t.discount,onChange:H,error:s.discount})]}),s.discount&&d.jsx(Nn,{children:s.discount})]}),d.jsxs(ln,{children:[d.jsx(cn,{children:"Válido até *"}),d.jsxs(oi,{children:[d.jsx(li,{error:s.validUntil,children:d.jsx(cl,{})}),d.jsx(ci,{hasIcon:!0,type:"date",name:"validUntil",value:t.validUntil,onChange:H,error:s.validUntil,min:new Date().toISOString().split("T")[0]})]}),s.validUntil&&d.jsx(Nn,{children:s.validUntil})]})]}),d.jsxs(ln,{children:[d.jsx(cn,{children:"Descrição"}),d.jsx(rz,{name:"description",placeholder:"Descreva os detalhes do cupom, condições de uso, produtos incluídos... (opcional)",rows:"3",value:t.description,onChange:H})]}),d.jsxs(ln,{children:[d.jsxs(cn,{children:["Catálogo do Cupom (",z.length,"/12) *"]}),d.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem"},children:[z.map((M,P)=>d.jsxs("div",{style:{position:"relative",width:72,height:72},children:[d.jsx("img",{src:M,alt:`foto ${P+1}`,style:{width:72,height:72,objectFit:"cover",borderRadius:8,border:"2px solid #CDA09B"}}),d.jsx("button",{type:"button",onClick:()=>be(P),style:{position:"absolute",top:-6,right:-6,background:"#C62828",color:"white",border:"none",borderRadius:"50%",width:20,height:20,cursor:"pointer",fontSize:12,display:"flex",alignItems:"center",justifyContent:"center"},children:d.jsx(ur,{})})]},P)),z.length<12&&d.jsxs(ub,{style:{width:72,height:72,flexDirection:"column",gap:"0.2rem",fontSize:"0.7rem",borderRadius:8},children:[d.jsx(Go,{}),"Adicionar",d.jsx("input",{type:"file",accept:"image/*",multiple:!0,onChange:ye})]})]}),s.catalog&&d.jsx(Nn,{children:s.catalog}),d.jsx(db,{children:"Mínimo 4, máximo 12 fotos. PNG, JPG ou WEBP — máx. 5MB cada"})]})]}),d.jsxs(cb,{type:"submit",disabled:p,children:[d.jsx(jN,{}),O?"Enviando imagem...":p?"Enviando...":"Enviar solicitação de parceria"]}),g&&d.jsx(Nn,{style:{justifyContent:"center",marginTop:"0.5rem"},children:g})]})]})]})},pz=S.div`
  padding: 6rem 2rem 3rem;
  max-width: 1400px;
  margin: 0 auto;
  min-height: 100vh;
  background: #FAFAFA;
`,gz=S.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
  gap: 1rem;
`,yz=S.h1`
  font-family: ${b.fonts.secondary};
  color: ${b.colors.text};
  font-size: 2rem;
  margin: 0;
  font-weight: 700;
`,vz=S.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.25rem;
  margin-bottom: 2.5rem;
`,Xh=S.div`
  background: ${b.colors.white};
  border-radius: 16px;
  padding: 1.5rem 2rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  display: flex;
  align-items: center;
  gap: 1.25rem;
  border: 1px solid rgba(205, 160, 155, 0.15);
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  }
`,Zh=S.div`
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: ${b.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${b.colors.primary};
  font-size: 1.4rem;
  flex-shrink: 0;
`,Qh=S.div`
  display: flex;
  flex-direction: column;
`,Wh=S.div`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${b.colors.text};
  line-height: 1;
  margin-bottom: 0.25rem;
`,Jh=S.div`
  color: ${b.colors.gray};
  font-size: 0.85rem;
  font-weight: 500;
`,xz=S.div`
  display: flex;
  background: ${b.colors.white};
  border-radius: 12px;
  padding: 0.375rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  border: 1px solid rgba(205, 160, 155, 0.15);
  gap: 0.25rem;
`,em=S.button`
  flex: 1;
  padding: 0.75rem 1.5rem;
  border: none;
  background: ${e=>e.$active?b.colors.primary:"transparent"};
  color: ${e=>e.$active?b.colors.white:b.colors.gray};
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: ${e=>e.$active?b.colors.white:b.colors.primary};
    background: ${e=>e.$active?b.colors.primary:b.colors.secondary};
  }
`,bz=S.div`
  background: ${b.colors.white};
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  border: 1px solid rgba(205, 160, 155, 0.15);
`,wz=S.div`
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`,Sz=S.input`
  width: 100%;
  max-width: 360px;
  padding: 0.75rem 1rem;
  border: 2px solid ${b.colors.lightGray};
  border-radius: 10px;
  font-size: 0.9rem;
  background: #FAFAFA;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: ${b.colors.primaryLight};
    background: white;
    box-shadow: 0 0 0 3px rgba(205, 160, 155, 0.1);
  }

  &::placeholder {
    color: #BDBDBD;
  }
`,tm=S.div`
  width: 100%;
  overflow-x: auto;
  border-radius: 12px;
  border: 1px solid ${b.colors.lightGray};
`,nm=S.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;
`,im=S.thead`
  background: ${b.colors.secondary};
`,Nt=S.th`
  padding: 1rem 1.25rem;
  text-align: left;
  font-size: 0.8rem;
  font-weight: 700;
  color: ${b.colors.primary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;

  &:last-child {
    text-align: center;
  }
`,rm=S.tbody``,am=S.tr`
  border-bottom: 1px solid ${b.colors.lightGray};
  transition: background 0.15s;

  &:hover {
    background: #FAFAFA;
  }

  &:last-child {
    border-bottom: none;
  }
`,Lt=S.td`
  padding: 1rem 1.25rem;
  font-size: 0.9rem;
  color: ${b.colors.text};
  vertical-align: middle;

  &:last-child {
    text-align: center;
  }
`,fb=S.span`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.78rem;
  font-weight: 600;

  ${e=>e.$variant==="active"&&`
    background: #E8F5E9;
    color: #2E7D32;
  `}
  ${e=>e.$variant==="pending"&&`
    background: #EEEEEE;
    color: #616161;
    border: 1px solid #BDBDBD;
    text-transform: capitalize;
  `}
  ${e=>e.$variant==="inactive"&&`
    background: #FAFAFA;
    color: #757575;
    border: 1px solid #E0E0E0;
  `}
  ${e=>e.$variant==="admin"&&`
    background: ${b.colors.secondary};
    color: ${b.colors.primary};
  `}
  ${e=>e.$variant==="user"&&`
    background: #F5F5F5;
    color: #757575;
  `}
`,sm=S.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`,Ji=S.button`
  padding: 0.4rem 0.9rem;
  border: none;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  white-space: nowrap;

  ${e=>e.$approve&&`
    background: ${b.colors.secondary};
    color: ${b.colors.primary};
    &:hover { background: ${b.colors.primaryLight}; color: white; transform: translateY(-1px); }
  `}

  ${e=>e.$reject&&`
    background: #FFEBEE;
    color: #C62828;
    &:hover { background: #C62828; color: white; transform: translateY(-1px); }
  `}

  ${e=>e.$neutral&&`
    background: #F5F5F5;
    color: #424242;
    &:hover { background: #E0E0E0; transform: translateY(-1px); }
  `}
`,om=S.div`
  text-align: center;
  padding: 3rem;
  color: ${b.colors.gray};
  font-size: 0.95rem;
`,lm=S.div`
  text-align: center;
  padding: 3rem;
  color: ${b.colors.gray};
  font-size: 0.95rem;
`,Ez=S.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${b.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.85rem;
  color: ${b.colors.primary};
  flex-shrink: 0;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,hb=S.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,Tz=S.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`,Cz=S.div`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  width: 100%;
  max-width: 440px;
  box-shadow: 0 25px 50px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`,Az=S.h3`
  font-family: ${b.fonts.secondary};
  font-size: 1.25rem;
  color: ${b.colors.text};
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.6rem;

  svg {
    color: #C62828;
  }
`,_z=S.p`
  color: ${b.colors.gray};
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.6;
`,jz=S.textarea`
  width: 100%;
  padding: 0.85rem 1rem;
  border: 2px solid ${b.colors.lightGray};
  border-radius: 10px;
  font-size: 0.9rem;
  font-family: ${b.fonts.primary};
  resize: vertical;
  min-height: 100px;
  transition: all 0.2s;
  box-sizing: border-box;
  color: ${b.colors.text};

  &:focus {
    outline: none;
    border-color: #E53935;
    box-shadow: 0 0 0 3px rgba(229,57,53,0.08);
  }

  &::placeholder { color: #BDBDBD; }
`,Rz=S.div`
  display: flex;
  gap: 0.75rem;
  justify-content: flex-end;
`,Dz=S.button`
  padding: 0.6rem 1.25rem;
  border: 2px solid ${b.colors.lightGray};
  border-radius: 8px;
  background: transparent;
  color: ${b.colors.gray};
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover { border-color: ${b.colors.gray}; color: ${b.colors.text}; }
`,Mz=S.button`
  padding: 0.6rem 1.25rem;
  border: none;
  border-radius: 8px;
  background: #C62828;
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover { background: #B71C1C; transform: translateY(-1px); }
  &:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
`,kz=S.div`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: ${b.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.85rem;
  color: ${b.colors.primary};
  flex-shrink: 0;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,Oz=e=>e==="Aprovada"?"active":e==="Pendente"?"pending":"inactive",Nz=e=>e==="Aprovada"?"Aprovada":e==="Pendente"?"Pendente":e==="Rejeitada"?"Rejeitada":e,Lz=()=>{const[e,t]=T.useState("users"),[r,s]=T.useState(""),[l,c]=T.useState([]),[f,p]=T.useState([]),[m,g]=T.useState([]),[y,x]=T.useState([]),[w,C]=T.useState([]),[R,O]=T.useState([]),[N,_]=T.useState(!1),[U,z]=T.useState(!1),[Q,G]=T.useState(!1),[Y,H]=T.useState(null),[X,ne]=T.useState(""),[re,ye]=T.useState(!1);T.useEffect(()=>{be(),ve(),pe()},[]);const be=async()=>{try{z(!0);const k=await _e.getAllUsers();c(k),p(k)}catch(k){console.error("Erro ao carregar usuários:",k)}finally{z(!1)}},pe=async()=>{try{_(!0);const k=await _e.getAllCoupons();C(k),O(k)}catch(k){console.error("Erro ao carregar cupons:",k)}finally{_(!1)}},ve=async()=>{try{G(!0);const k=await _e.getAllStores();g(k),x(k)}catch(k){console.error("Erro ao carregar parceiros:",k)}finally{G(!1)}},Ce=async k=>{try{const W=await _e.updateStoreStatus(k,"Aprovada"),ee=m.map(oe=>oe.id===k?W:oe);g(ee),x(ee)}catch(W){alert(W.message||"Erro ao aprovar parceiro")}},F=k=>{H(k),ne("")},M=async()=>{if(X.trim()){ye(!0);try{const k=await _e.updateStoreStatus(Y.id,"Rejeitada",X),W=m.map(ee=>ee.id===Y.id?k:ee);g(W),x(W),H(null)}catch(k){alert(k.message||"Erro ao recusar parceiro")}finally{ye(!1)}}},P=async k=>{if(window.confirm("Tem certeza? Isso irá excluir a loja e TODOS os cupons dela permanentemente."))try{await _e.deleteStore(k);const W=m.filter(ee=>ee.id!==k);g(W),x(W)}catch(W){alert(W.message||"Erro ao excluir loja")}},te=async k=>{if(window.confirm("Tem certeza que deseja excluir este usuário?"))try{await _e.deleteUser(k);const W=l.filter(ee=>ee.id!==k);c(W),p(W)}catch{alert("Erro ao excluir usuário")}},A=async k=>{const W=k.role==="ADMIN"?"USER":"ADMIN";try{await _e.updateUserRole(k.id,W);const ee=l.map(oe=>oe.id===k.id?{...oe,role:W}:oe);c(ee),p(ee)}catch{alert("Erro ao atualizar cargo")}},q=k=>{s(k);const W=k.toLowerCase();x(m.filter(ee=>ee.name?.toLowerCase().includes(W)||ee.email?.toLowerCase().includes(W))),O(w.filter(ee=>ee.title?.toLowerCase().includes(W)||String(ee.store_id).includes(W))),p(l.filter(ee=>ee.name?.toLowerCase().includes(W)||ee.email?.toLowerCase().includes(W)))};return d.jsxs(d.Fragment,{children:[d.jsxs(pz,{children:[d.jsx(gz,{children:d.jsx(yz,{children:"Painel Administrativo"})}),d.jsxs(vz,{children:[d.jsxs(Xh,{children:[d.jsx(Zh,{children:d.jsx(Yo,{})}),d.jsxs(Qh,{children:[d.jsx(Wh,{children:m.filter(k=>k.status==="Aprovada").length||"—"}),d.jsx(Jh,{children:"Parceiros Ativos"})]})]}),d.jsxs(Xh,{children:[d.jsx(Zh,{children:d.jsx(Qr,{})}),d.jsxs(Qh,{children:[d.jsx(Wh,{children:w.length||"—"}),d.jsx(Jh,{children:"Cupons Ativos"})]})]}),d.jsxs(Xh,{children:[d.jsx(Zh,{children:d.jsx(C6,{})}),d.jsxs(Qh,{children:[d.jsx(Wh,{children:l.length||"—"}),d.jsx(Jh,{children:"Usuários"})]})]})]}),d.jsxs(xz,{children:[d.jsx(em,{$active:e==="users",onClick:()=>t("users"),children:"Usuários"}),d.jsx(em,{$active:e==="partners",onClick:()=>t("partners"),children:"Parceiros"}),d.jsx(em,{$active:e==="coupons",onClick:()=>t("coupons"),children:"Cupons"})]}),d.jsxs(bz,{children:[d.jsx(wz,{children:d.jsx(Sz,{type:"text",placeholder:"Buscar...",value:r,onChange:k=>q(k.target.value)})}),e==="users"&&d.jsx(tm,{children:d.jsxs(nm,{children:[d.jsx(im,{children:d.jsxs("tr",{children:[d.jsx(Nt,{children:"Usuário"}),d.jsx(Nt,{children:"Email"}),d.jsx(Nt,{children:"Cargo"}),d.jsx(Nt,{children:"Ações"})]})}),d.jsx(rm,{children:U?d.jsx("tr",{children:d.jsx("td",{colSpan:"4",children:d.jsx(lm,{children:"Carregando usuários..."})})}):f.length===0?d.jsx("tr",{children:d.jsx("td",{colSpan:"4",children:d.jsx(om,{children:"Nenhum usuário encontrado"})})}):f.map(k=>d.jsxs(am,{children:[d.jsx(Lt,{children:d.jsxs(hb,{children:[d.jsx(Ez,{children:k.profilePicture?d.jsx("img",{src:k.profilePicture,alt:k.name}):k.name?.charAt(0).toUpperCase()}),k.name]})}),d.jsx(Lt,{children:k.email}),d.jsx(Lt,{children:d.jsx(fb,{$variant:k.role==="ADMIN"?"admin":"user",children:k.role==="ADMIN"?d.jsxs(d.Fragment,{children:[d.jsx(wg,{style:{marginRight:"4px"}})," Admin"]}):"Usuário"})}),d.jsx(Lt,{children:d.jsxs(sm,{children:[d.jsxs(Ji,{$neutral:!0,onClick:()=>A(k),children:[d.jsx(T6,{}),k.role==="ADMIN"?"Remover Admin":"Tornar Admin"]}),d.jsxs(Ji,{$reject:!0,onClick:()=>te(k.id),children:[d.jsx(Lo,{})," Excluir"]})]})})]},k.id))})]})}),e==="partners"&&d.jsx(tm,{children:d.jsxs(nm,{children:[d.jsx(im,{children:d.jsxs("tr",{children:[d.jsx(Nt,{children:"Nome"}),d.jsx(Nt,{children:"Email"}),d.jsx(Nt,{children:"Status"}),d.jsx(Nt,{children:"Responsável"}),d.jsx(Nt,{children:"Ações"})]})}),d.jsx(rm,{children:Q?d.jsx("tr",{children:d.jsx("td",{colSpan:"5",children:d.jsx(lm,{children:"Carregando parceiros..."})})}):y.length===0?d.jsx("tr",{children:d.jsx("td",{colSpan:"5",children:d.jsx(om,{children:"Nenhum parceiro encontrado"})})}):y.map(k=>d.jsxs(am,{children:[d.jsx(Lt,{children:d.jsxs(hb,{children:[d.jsx(kz,{children:k.image_url?d.jsx("img",{src:k.image_url,alt:k.name}):k.name?.charAt(0).toUpperCase()}),k.name]})}),d.jsx(Lt,{children:k.email||"—"}),d.jsx(Lt,{children:d.jsx(fb,{$variant:Oz(k.status),children:Nz(k.status)})}),d.jsx(Lt,{children:k.owner_name||"—"}),d.jsx(Lt,{children:d.jsxs(sm,{children:[k.status?.toLowerCase()==="pendente"&&d.jsxs(d.Fragment,{children:[d.jsxs(Ji,{$approve:!0,onClick:()=>Ce(k.id),children:[d.jsx(ap,{})," Aprovar"]}),d.jsxs(Ji,{$reject:!0,onClick:()=>F(k),children:[d.jsx(ur,{})," Recusar"]})]}),k.status?.toLowerCase()==="aprovada"&&d.jsxs(Ji,{$reject:!0,onClick:()=>F(k),children:[d.jsx(ur,{})," Desativar"]}),k.status?.toLowerCase()==="rejeitada"&&d.jsxs(Ji,{$approve:!0,onClick:()=>Ce(k.id),children:[d.jsx(ap,{})," Reativar"]}),d.jsxs(Ji,{$reject:!0,onClick:()=>P(k.id),children:[d.jsx(Lo,{})," Excluir"]})]})})]},k.id))})]})}),e==="coupons"&&d.jsx(tm,{children:d.jsxs(nm,{children:[d.jsx(im,{children:d.jsxs("tr",{children:[d.jsx(Nt,{children:"Título"}),d.jsx(Nt,{children:"Loja"}),d.jsx(Nt,{children:"Desconto"}),d.jsx(Nt,{children:"Válido até"}),d.jsx(Nt,{children:"Ações"})]})}),d.jsx(rm,{children:N?d.jsx("tr",{children:d.jsx("td",{colSpan:"5",children:d.jsx(lm,{children:"Carregando cupons..."})})}):R.length===0?d.jsx("tr",{children:d.jsx("td",{colSpan:"5",children:d.jsx(om,{children:"Nenhum cupom encontrado"})})}):R.map(k=>d.jsxs(am,{children:[d.jsx(Lt,{children:k.title}),d.jsx(Lt,{children:m.find(W=>W.id===k.store_id)?.name||`Loja #${k.store_id}`}),d.jsx(Lt,{children:d.jsxs("strong",{children:[k.discount,"%"]})}),d.jsx(Lt,{children:k.valid_until?new Date(k.valid_until).toLocaleDateString("pt-BR"):"—"}),d.jsx(Lt,{children:d.jsx(sm,{children:d.jsxs(Ji,{$reject:!0,onClick:()=>{window.confirm("Excluir este cupom?")&&_e.deleteCoupon(k.id).then(()=>{const W=w.filter(ee=>ee.id!==k.id);C(W),O(W)}).catch(()=>alert("Erro ao excluir cupom"))},children:[d.jsx(Lo,{})," Excluir"]})})})]},k.id))})]})})]})]}),Y&&d.jsx(Tz,{onClick:()=>H(null),children:d.jsxs(Cz,{onClick:k=>k.stopPropagation(),children:[d.jsxs(Az,{children:[d.jsx(x6,{})," Recusar parceiro"]}),d.jsxs(_z,{children:["Informe o motivo da recusa de ",d.jsx("strong",{children:Y.name}),". Este motivo ficará registrado."]}),d.jsx(jz,{placeholder:"Ex: Documentação incompleta, CNPJ inválido...",value:X,onChange:k=>ne(k.target.value),autoFocus:!0}),d.jsxs(Rz,{children:[d.jsx(Dz,{onClick:()=>H(null),children:"Cancelar"}),d.jsx(Mz,{onClick:M,disabled:!X.trim()||re,children:re?"Recusando...":"Confirmar recusa"})]})]})})]})},mb=S.div`
  padding: 6rem 1rem 2rem;
  min-height: 100vh;
  background: #FAFAFA;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;

  @media (min-width: 768px) {
    padding: 6rem 2rem 2rem;
  }
`,pb=S.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,gb=S(he.div)`
  background: #FFFFFF;
  border-radius: 1.5rem;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  border: 1px solid rgba(205, 160, 155, 0.1);

  @media (min-width: 768px) {
    padding: 3rem;
  }
`,yb=S.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 2.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(205, 160, 155, 0.15);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1.5rem;
  }
`,zz=S.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: ${e=>e.$hasImage?"transparent":"linear-gradient(135deg, #CDA09B 0%, #B8918C 100%)"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2.5rem;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  flex-shrink: 0;
  box-shadow: 0 8px 25px rgba(205, 160, 155, 0.3);
  border: 4px solid #FFFFFF;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
    font-size: 2rem;
  }
`,Pz=S.div`
  flex: 1;
  min-width: 0;

  h1 {
    margin: 0 0 0.5rem 0;
    color: #1A1A1A;
    font-size: 2rem;
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
    line-height: 1.2;
  }

  .email {
    margin: 0 0 1rem 0;
    color: #6B6B6B;
    font-size: 1.1rem;
    font-weight: 500;
  }
`,Iz=S.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,vb=S.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #6B6B6B;
  font-size: 0.9rem;

  svg {
    width: 16px;
    height: 16px;
    color: #CDA09B;
  }
`,$z=S(he.button)`
  background: #CDA09B;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(205, 160, 155, 0.3);

  &:hover {
    background: #B8918C;
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(205, 160, 155, 0.4);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,Uz=S(he.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,cm=S.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,xb=S.label`
  font-weight: 600;
  color: #1A1A1A;
  font-size: 0.9rem;
  font-family: 'Poppins', sans-serif;
`,um=S.input`
  padding: 1rem;
  border: 2px solid #E5E7EB;
  border-radius: 0.75rem;
  font-size: 1rem;
  background: #FAFAFA;
  transition: all 0.2s ease;
  font-family: 'Inter', sans-serif;

  &:focus {
    outline: none;
    border-color: #CDA09B;
    background: #FFFFFF;
    box-shadow: 0 0 0 3px rgba(205, 160, 155, 0.1);
  }

  &::placeholder {
    color: #9CA3AF;
  }
`,bb=S.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,Bz=S(he.button)`
  background: #CDA09B;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
  flex: 1;

  &:hover:not(:disabled) {
    background: #B8918C;
    transform: translateY(-1px);
  }

  &:disabled {
    background: #9CA3AF;
    cursor: not-allowed;
    transform: none;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,wb=S(he.button)`
  background: transparent;
  color: #6B6B6B;
  border: 2px solid #E5E7EB;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
  flex: 1;

  &:hover {
    border-color: #CDA09B;
    color: #CDA09B;
    transform: translateY(-1px);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,Vz=S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,Hz=S.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: ${e=>e.$hasImage?"transparent":"linear-gradient(135deg, #CDA09B 0%, #B8918C 100%)"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
  font-weight: 700;
  overflow: hidden;
  border: 4px solid #E5E7EB;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,Fz=S.div`
  display: flex;
  gap: 0.5rem;
`,qz=S.label`
  background: #CDA09B;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;

  &:hover {
    background: #B8918C;
  }

  input {
    display: none;
  }

  svg {
    width: 14px;
    height: 14px;
  }
`,Gz=S.button`
  background: #FF4C4C;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;

  &:hover {
    background: #E53E3E;
  }

  svg {
    width: 14px;
    height: 14px;
  }
`,Yz=S.div`
  .skeleton {
    background: linear-gradient(90deg, #F0F0F0 25%, #E0E0E0 50%, #F0F0F0 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
  }

  @keyframes loading {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }

  .skeleton-avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  .skeleton-text {
    height: 20px;
    border-radius: 4px;
    margin-bottom: 8px;
  }

  .skeleton-title {
    height: 32px;
    width: 200px;
    border-radius: 4px;
    margin-bottom: 8px;
  }
`,Kz=S(he.div)`
  background: #FFF0F0;
  border: 2px solid rgba(255, 76, 76, 0.2);
  border-radius: 1.5rem;
  padding: 2rem;

  .danger-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;

    svg {
      width: 24px;
      height: 24px;
      color: #FF4C4C;
    }

    h3 {
      color: #FF4C4C;
      margin: 0;
      font-size: 1.25rem;
      font-weight: 700;
      font-family: 'Poppins', sans-serif;
    }
  }

  p {
    color: #6B6B6B;
    margin-bottom: 1.5rem;
    font-size: 0.95rem;
    line-height: 1.5;
  }
`,Sb=S(he.button)`
  background: #FF4C4C;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;

  &:hover {
    background: #E53E3E;
    transform: translateY(-1px);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,Xz=S(he.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`,Zz=S(he.div)`
  background: white;
  padding: 2rem;
  border-radius: 1.5rem;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

  .modal-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;

    svg {
      width: 24px;
      height: 24px;
      color: #FF4C4C;
    }

    h3 {
      color: #FF4C4C;
      margin: 0;
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
    }
  }

  p {
    margin-bottom: 1.5rem;
    color: #6B6B6B;
    line-height: 1.5;
  }
`,Qz=()=>{const{user:e,dbUser:t,setDbUser:r,logout:s}=Ai(),l=Si(),[c,f]=T.useState(!1),[p,m]=T.useState(!1),[g,y]=T.useState(!1),[x,w]=T.useState(""),[C,R]=T.useState(!1),[O,N]=T.useState(!0),[_,U]=T.useState({name:"",passwordHash:"",profilePicture:""});T.useEffect(()=>{e&&(U({name:e.displayName||"",passwordHash:"",profilePicture:e.photoURL||""}),N(!1))},[e]);const z=pe=>{const{name:ve,value:Ce}=pe.target;U(F=>({...F,[ve]:Ce}))},Q=()=>{f(!0)},G=()=>{f(!1),U({name:e.displayName||"",passwordHash:"",profilePicture:e.photoURL||"",profilePictureFile:null})},Y=pe=>{const ve=pe.target.files[0];if(ve){if(ve.size>5*1024*1024){qe.error("Imagem muito grande. Máximo 5MB");return}const Ce=URL.createObjectURL(ve);U(F=>({...F,profilePicture:Ce,profilePictureFile:ve}))}},H=async pe=>{const ve=await new Promise((P,te)=>{const A=new FileReader;A.onloadend=()=>P(A.result.split(",")[1]),A.onerror=te,A.readAsDataURL(pe)}),Ce=new URLSearchParams;Ce.append("key","06e7312be7cd16b207344fba43e96449"),Ce.append("image",ve);const M=await(await fetch("https://api.imgbb.com/1/upload",{method:"POST",body:Ce})).json();if(!M.success)throw new Error("Falha ao fazer upload da imagem");return M.data.url},X=()=>{U(pe=>({...pe,profilePicture:"",profilePictureFile:null}))},ne=async pe=>{pe.preventDefault(),m(!0);try{let ve=_.profilePicture||null;_.profilePictureFile&&(ve=await H(_.profilePictureFile)),await W4(zt.currentUser,{displayName:_.name,photoURL:ve}),_.passwordHash.trim()&&await IM(zt.currentUser,_.passwordHash),t?.id&&await _e.updateUser(t.id,{name:_.name,email:e.email,profilePicture:ve||null}),f(!1),qe.success("Perfil atualizado com sucesso!")}catch(ve){ve.code==="auth/requires-recent-login"?qe.error("Por segurança, faça login novamente antes de alterar email ou senha."):qe.error(ve.message||"Erro ao atualizar perfil")}finally{m(!1)}},re=async()=>{if(!x.trim()){qe.error("Digite sua senha para confirmar");return}R(!0);try{const pe=Wr.credential(e.email,x);await kM(zt.currentUser,pe),t?.id&&await _e.deleteUser(t.id),await FM(zt.currentUser),qe.success("Conta excluída com sucesso"),l("/")}catch(pe){pe.code==="auth/wrong-password"||pe.code==="auth/invalid-credential"?qe.error("Senha incorreta"):qe.error(pe.message||"Erro ao excluir conta"),y(!1),w("")}finally{R(!1)}},ye=()=>{y(!0)},be=()=>{y(!1),w("")};return O||!e?d.jsx(mb,{children:d.jsx(pb,{children:d.jsx(gb,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:d.jsx(Yz,{children:d.jsxs(yb,{children:[d.jsx("div",{className:"skeleton skeleton-avatar"}),d.jsxs("div",{style:{flex:1},children:[d.jsx("div",{className:"skeleton skeleton-title"}),d.jsx("div",{className:"skeleton skeleton-text",style:{width:"60%"}}),d.jsx("div",{className:"skeleton skeleton-text",style:{width:"40%"}})]})]})})})})}):d.jsxs(mb,{children:[d.jsx(up,{position:"top-right",toastOptions:{duration:4e3,style:{background:"#FFFFFF",color:"#1A1A1A",border:"1px solid rgba(205, 160, 155, 0.2)",borderRadius:"12px",fontFamily:"Inter, sans-serif"},success:{iconTheme:{primary:"#CDA09B",secondary:"#FFFFFF"}}}}),d.jsxs(pb,{children:[d.jsxs(gb,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[d.jsxs(yb,{children:[d.jsx(zz,{$hasImage:!!e.photoURL,children:e.photoURL?d.jsx("img",{src:e.photoURL,alt:e.displayName}):e.displayName?.charAt(0).toUpperCase()||"U"}),d.jsxs(Pz,{children:[d.jsx("h1",{children:e.displayName}),d.jsx("p",{className:"email",children:e.email}),d.jsxs(Iz,{children:[d.jsxs(vb,{children:[d.jsx(hR,{}),d.jsxs("span",{children:["Membro desde ",e.metadata?.creationTime?new Date(e.metadata.creationTime).toLocaleDateString("pt-BR"):"-"]})]}),d.jsxs(vb,{children:[d.jsx(yR,{}),d.jsxs("span",{children:["Último acesso: ",e.metadata?.lastSignInTime?new Date(e.metadata.lastSignInTime).toLocaleDateString("pt-BR"):"-"]})]})]})]}),!c&&d.jsxs($z,{onClick:Q,whileHover:{scale:1.02},whileTap:{scale:.98},children:[d.jsx(_R,{}),"Editar Perfil"]})]}),d.jsx(Qv,{mode:"wait",children:c?d.jsxs(Uz,{onSubmit:ne,initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.3},children:[d.jsxs(Vz,{children:[d.jsx(Hz,{$hasImage:!!_.profilePicture,children:_.profilePicture?d.jsx("img",{src:_.profilePicture,alt:"Preview"}):_.name?.charAt(0).toUpperCase()||"U"}),d.jsxs(Fz,{children:[d.jsxs(qz,{children:[d.jsx(pR,{}),"Alterar Foto",d.jsx("input",{type:"file",accept:"image/*",onChange:Y})]}),_.profilePicture&&d.jsxs(Gz,{type:"button",onClick:X,children:[d.jsx(kh,{}),"Remover"]})]})]}),d.jsxs(cm,{children:[d.jsx(xb,{htmlFor:"name",children:"Nome"}),d.jsx(um,{type:"text",id:"name",name:"name",value:_.name,onChange:z,required:!0})]}),d.jsxs(cm,{children:[d.jsx(xb,{htmlFor:"passwordHash",children:"Nova Senha (opcional)"}),d.jsx(um,{type:"password",id:"passwordHash",name:"passwordHash",value:_.passwordHash,onChange:z,placeholder:"Deixe em branco para manter a senha atual"})]}),d.jsxs(bb,{children:[d.jsxs(Bz,{type:"submit",disabled:p,whileHover:{scale:1.02},whileTap:{scale:.98},children:[d.jsx(OR,{}),p?"Salvando...":"Salvar"]}),d.jsxs(wb,{type:"button",onClick:G,whileHover:{scale:1.02},whileTap:{scale:.98},children:[d.jsx(kh,{}),"Cancelar"]})]})]},"edit-form"):null})]}),!c&&d.jsxs(Kz,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:[d.jsxs("div",{className:"danger-header",children:[d.jsx(G2,{}),d.jsx("h3",{children:"Excluir conta permanentemente"})]}),d.jsx("p",{children:"Esta ação não pode ser desfeita. Todos os seus dados serão permanentemente excluídos."}),d.jsxs(Sb,{onClick:ye,whileHover:{scale:1.02},whileTap:{scale:.98},children:[d.jsx(q2,{}),"Excluir Conta"]})]})]}),d.jsx(Qv,{children:g&&d.jsx(Xz,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},children:d.jsxs(Zz,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},transition:{duration:.2},children:[d.jsxs("div",{className:"modal-header",children:[d.jsx(G2,{}),d.jsx("h3",{children:"Confirmar Exclusão da Conta"})]}),d.jsx("p",{children:"Digite sua senha para confirmar a exclusão permanente da sua conta:"}),d.jsx(cm,{children:d.jsx(um,{type:"password",placeholder:"Digite sua senha",value:x,onChange:pe=>w(pe.target.value),onKeyPress:pe=>pe.key==="Enter"&&re()})}),d.jsxs(bb,{children:[d.jsxs(Sb,{onClick:re,disabled:C,whileHover:{scale:1.02},whileTap:{scale:.98},children:[d.jsx(q2,{}),C?"Excluindo...":"Confirmar Exclusão"]}),d.jsxs(wb,{onClick:be,whileHover:{scale:1.02},whileTap:{scale:.98},children:[d.jsx(kh,{}),"Cancelar"]})]})]})})})]})},Wz=S.div`
  padding: 6rem 1.5rem 3rem;
  min-height: 100vh;
  background: #FAFAFA;
  font-family: ${b.fonts.primary};

  @media (min-width: 768px) {
    padding: 6rem 2rem 3rem;
  }
`,Jz=S.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,eP=S.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
`,tP=S.h1`
  font-family: ${b.fonts.secondary};
  font-size: 2rem;
  color: ${b.colors.text};
  margin: 0;
  font-weight: 700;

  span {
    color: ${b.colors.primaryLight};
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,nP=S.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;

  ${e=>e.$status==="Aprovada"&&`
    background: #E8F5E9;
    color: #2E7D32;
  `}
  ${e=>e.$status==="Pendente"&&`
    background: #EEEEEE;
    color: #616161;
    border: 1px solid #BDBDBD;
  `}
  ${e=>e.$status==="Rejeitada"&&`
    background: #FFEBEE;
    color: #C62828;
  `}

  &::before {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: currentColor;
  }
`,Eb=S.div`
  background: #FFFFFF;
  border-radius: 1.5rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  border: 1px solid rgba(205, 160, 155, 0.12);
  overflow: hidden;
`,Tb=S.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid rgba(205, 160, 155, 0.12);
  flex-wrap: wrap;
  gap: 1rem;
`,Cb=S.h2`
  font-family: ${b.fonts.secondary};
  font-size: 1.2rem;
  color: ${b.colors.text};
  margin: 0;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.6rem;

  svg {
    color: ${b.colors.primaryLight};
    font-size: 1.1rem;
  }
`,Ab=S.div`
  padding: 2rem;
`,iP=S.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`,rP=S.div`
  position: relative;
  flex-shrink: 0;
`,aP=S.div`
  width: 100px;
  height: 100px;
  border-radius: 1.25rem;
  background: ${e=>e.$hasImage?"transparent":`linear-gradient(135deg, ${b.colors.primaryLight}, ${b.colors.primary})`};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  font-family: ${b.fonts.secondary};
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(166, 113, 104, 0.25);
  border: 3px solid white;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 600px) {
    width: 80px;
    height: 80px;
    font-size: 2rem;
  }
`,sP=S.div`
  flex: 1;
  min-width: 0;

  h2 {
    font-family: ${b.fonts.secondary};
    font-size: 1.6rem;
    color: ${b.colors.text};
    margin: 0 0 0.4rem;
    font-weight: 700;
  }

  p {
    color: ${b.colors.gray};
    font-size: 0.9rem;
    margin: 0 0 0.75rem;
  }
`,oP=S.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 0.5rem;
`,dm=S.span`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.82rem;
  color: ${b.colors.gray};

  svg {
    color: ${b.colors.primaryLight};
    font-size: 0.85rem;
  }
`,_b=S.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`,fm=S.div`
  display: grid;
  grid-template-columns: ${e=>e.$cols===2?"1fr 1fr":"1fr"};
  gap: 1.25rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,Ln=S.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`,zn=S.label`
  font-size: 0.85rem;
  font-weight: 600;
  color: ${b.colors.text};
`,zr=S.input`
  padding: 0.85rem 1rem;
  border: 2px solid #E5E7EB;
  border-radius: 0.75rem;
  font-size: 0.95rem;
  font-family: ${b.fonts.primary};
  background: #FAFAFA;
  color: ${b.colors.text};
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: ${b.colors.primaryLight};
    background: white;
    box-shadow: 0 0 0 3px rgba(205, 160, 155, 0.12);
  }

  &::placeholder { color: #9CA3AF; }
  &:disabled { opacity: 0.6; cursor: not-allowed; }
`,lP=S.textarea`
  padding: 0.85rem 1rem;
  border: 2px solid #E5E7EB;
  border-radius: 0.75rem;
  font-size: 0.95rem;
  font-family: ${b.fonts.primary};
  background: #FAFAFA;
  color: ${b.colors.text};
  resize: vertical;
  min-height: 90px;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: ${b.colors.primaryLight};
    background: white;
    box-shadow: 0 0 0 3px rgba(205, 160, 155, 0.12);
  }

  &::placeholder { color: #9CA3AF; }
`,cP=S.div`
  border: 2px dashed ${e=>e.$hasImage?b.colors.primaryLight:"#E5E7EB"};
  border-radius: 0.75rem;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  background: ${e=>e.$hasImage?"rgba(205,160,155,0.04)":"#FAFAFA"};
  transition: all 0.2s;
  flex-wrap: wrap;
`,uP=S.div`
  width: 72px;
  height: 72px;
  border-radius: 0.75rem;
  overflow: hidden;
  flex-shrink: 0;
  background: ${b.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: ${b.colors.primary};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,dP=S.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,jb=S.label`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1rem;
  background: ${b.colors.secondary};
  color: ${b.colors.primary};
  border-radius: 0.5rem;
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover { background: ${b.colors.primaryLight}; color: white; }

  input { display: none; }
`,Rb=S.span`
  font-size: 0.75rem;
  color: ${b.colors.gray};
`,Db=S.div`
  display: flex;
  gap: 0.75rem;
  justify-content: flex-end;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,Uc=S.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 1.75rem;
  background: ${b.colors.primary};
  color: white;
  border: none;
  border-radius: 0.75rem;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: ${b.fonts.primary};
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 4px 12px rgba(166, 113, 104, 0.3);

  &:hover:not(:disabled) {
    background: ${b.colors.primaryDark};
    transform: translateY(-1px);
    box-shadow: 0 6px 18px rgba(166, 113, 104, 0.4);
  }

  &:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }

  @media (max-width: 480px) { justify-content: center; }
`,hm=S.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 1.75rem;
  background: transparent;
  color: ${b.colors.gray};
  border: 2px solid #E5E7EB;
  border-radius: 0.75rem;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: ${b.fonts.primary};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: ${b.colors.primaryLight};
    color: ${b.colors.primary};
    transform: translateY(-1px);
  }

  @media (max-width: 480px) { justify-content: center; }
`;S.button`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 0.9rem;
  background: #FFEBEE;
  color: #C62828;
  border: none;
  border-radius: 0.6rem;
  font-size: 0.8rem;
  font-weight: 600;
  font-family: ${b.fonts.primary};
  cursor: pointer;
  transition: all 0.2s;

  &:hover { background: #C62828; color: white; }
`;const fP=S.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.25rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,hP=S.div`
  border: 1.5px solid rgba(205, 160, 155, 0.2);
  border-radius: 1rem;
  padding: 1.25rem;
  background: white;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: box-shadow 0.2s, transform 0.2s;

  &:hover {
    box-shadow: 0 6px 20px rgba(166, 113, 104, 0.12);
    transform: translateY(-2px);
  }
`,mP=S.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.5rem;
`,pP=S.div`
  background: linear-gradient(135deg, ${b.colors.primaryLight}, ${b.colors.primary});
  color: white;
  font-size: 1.4rem;
  font-weight: 700;
  font-family: ${b.fonts.secondary};
  padding: 0.5rem 0.9rem;
  border-radius: 0.75rem;
  line-height: 1;
  white-space: nowrap;
`,gP=S.div`
  display: flex;
  gap: 0.4rem;
`,yP=S.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 0.5rem;
  border: none;
  background: ${b.colors.secondary};
  color: ${b.colors.primary};
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.85rem;

  &:hover { background: ${b.colors.primaryLight}; color: white; }
`,vP=S.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 0.5rem;
  border: none;
  background: #FFEBEE;
  color: #C62828;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.85rem;

  &:hover { background: #C62828; color: white; }
`,xP=S.h3`
  font-size: 0.95rem;
  font-weight: 600;
  color: ${b.colors.text};
  margin: 0;
  line-height: 1.3;
`,bP=S.p`
  font-size: 0.82rem;
  color: ${b.colors.gray};
  margin: 0;
  line-height: 1.5;
`,wP=S.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.78rem;
  color: ${b.colors.gray};
  margin-top: auto;

  svg { color: ${b.colors.primaryLight}; }
`,Mb=S.div`
  text-align: center;
  padding: 3rem 1rem;
  color: ${b.colors.gray};

  svg {
    font-size: 3rem;
    color: ${b.colors.secondary};
    margin-bottom: 1rem;
  }

  h3 {
    font-family: ${b.fonts.secondary};
    color: ${b.colors.text};
    margin: 0 0 0.5rem;
  }

  p {
    font-size: 0.9rem;
    margin: 0 0 1.5rem;
  }
`,SP=S.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`,EP=S.div`
  background: white;
  border-radius: 1.5rem;
  padding: 2rem;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 25px 50px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  max-height: 90vh;
  overflow-y: auto;
`,TP=S.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-family: ${b.fonts.secondary};
    font-size: 1.2rem;
    color: ${b.colors.text};
    margin: 0;
  }
`,CP=S.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  background: ${b.colors.lightGray};
  color: ${b.colors.gray};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  font-size: 0.9rem;

  &:hover { background: #E0E0E0; color: ${b.colors.text}; }
`,AP=S.div`
  background: linear-gradient(135deg, #FFF8E1, #FFF3CD);
  border: 1.5px solid #FFD54F;
  border-radius: 1rem;
  padding: 1.25rem 1.5rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  svg {
    color: #F57F17;
    font-size: 1.3rem;
    flex-shrink: 0;
    margin-top: 2px;
  }

  div {
    h4 {
      margin: 0 0 0.25rem;
      color: #E65100;
      font-size: 0.95rem;
      font-weight: 700;
    }
    p {
      margin: 0;
      color: #795548;
      font-size: 0.85rem;
      line-height: 1.5;
    }
  }
`,_P={name:"",email:"",phone:"",website_url:"",image_url:"",imageFile:null},kb={title:"",discount:"",description:"",valid_until:"",catalogFiles:[],catalogPreviews:[],catalogUrls:[]},Ob=async e=>{const t=await new Promise((c,f)=>{const p=new FileReader;p.onloadend=()=>c(p.result.split(",")[1]),p.onerror=f,p.readAsDataURL(e)}),r=new URLSearchParams;r.append("key","06e7312be7cd16b207344fba43e96449"),r.append("image",t);const l=await(await fetch("https://api.imgbb.com/1/upload",{method:"POST",body:r})).json();if(!l.success)throw new Error("Falha ao fazer upload da imagem");return l.data.url},jP=()=>{const{userStores:e,setUserStores:t}=Ai(),{id:r}=OT(),s=Si(),l=e?.find(M=>String(M.id)===String(r))||null,[c,f]=T.useState(!1),[p,m]=T.useState(_P),[g,y]=T.useState(!1),[x,w]=T.useState([]),[C,R]=T.useState(!0),[O,N]=T.useState(null),[_,U]=T.useState(kb),[z,Q]=T.useState(!1);T.useEffect(()=>{if(!l){s("/");return}m({name:l.name||"",email:l.email||"",phone:l.phone||"",website_url:l.website_url||"",image_url:l.image_url||"",imageFile:null}),G()},[l]);const G=async()=>{try{R(!0);const M=await _e.getCouponsByStore(l.id);w(M)}catch{qe.error("Erro ao carregar cupons")}finally{R(!1)}},Y=M=>{const{name:P,value:te}=M.target;m(A=>({...A,[P]:te}))},H=M=>{const P=M.target.files[0];if(P){if(P.size>5*1024*1024){qe.error("Imagem muito grande. Máximo 5MB");return}m(te=>({...te,imageFile:P,image_url:URL.createObjectURL(P)}))}},X=async M=>{M.preventDefault(),y(!0);try{let P=p.image_url;p.imageFile&&(P=await Ob(p.imageFile));const te=await _e.updateStore(l.id,{name:p.name,email:p.email,phone:p.phone,website_url:p.website_url,image_url:P,status:l.status});t(A=>A.map(q=>q.id===l.id?te:q)),f(!1),qe.success("Loja atualizada com sucesso!")}catch{qe.error("Erro ao atualizar loja")}finally{y(!1)}},ne=()=>{f(!1),m({name:l.name||"",email:l.email||"",phone:l.phone||"",website_url:l.website_url||"",image_url:l.image_url||"",imageFile:null})},re=()=>{U(kb),N("new")},ye=M=>{const P=M.catalog_images||[];U({title:M.title||"",discount:M.discount||"",description:M.description||"",valid_until:M.valid_until?M.valid_until.split("T")[0]:"",catalogFiles:[],catalogPreviews:P,catalogUrls:P}),N(M)},be=M=>{const{name:P,value:te}=M.target;U(A=>({...A,[P]:te}))},pe=M=>{const P=Array.from(M.target.files),A=12-_.catalogPreviews.length;if(P.length===0)return;const q=P.slice(0,A);q.forEach(ee=>{ee.size>5*1024*1024&&qe.error(`${ee.name} é grande demais. Máximo 5MB`)});const k=q.filter(ee=>ee.size<=5*1024*1024),W=k.map(ee=>URL.createObjectURL(ee));U(ee=>({...ee,catalogFiles:[...ee.catalogFiles,...k],catalogPreviews:[...ee.catalogPreviews,...W]}))},ve=M=>{U(P=>{const te=M<P.catalogUrls.length,A=te?P.catalogUrls.filter((ee,oe)=>oe!==M):P.catalogUrls,q=P.catalogPreviews.filter((ee,oe)=>oe!==M),k=M-P.catalogUrls.length,W=te?P.catalogFiles:P.catalogFiles.filter((ee,oe)=>oe!==k);return{...P,catalogUrls:A,catalogPreviews:q,catalogFiles:W}})},Ce=async M=>{if(M.preventDefault(),!_.title.trim()){qe.error("Título é obrigatório");return}if(!_.discount||_.discount<=0){qe.error("Desconto inválido");return}if(!_.valid_until){qe.error("Data de validade é obrigatória");return}if(_.catalogPreviews.length<4){qe.error("Adicione pelo menos 4 fotos no catálogo");return}Q(!0);try{const P=await Promise.all(_.catalogFiles.map(q=>Ob(q))),te=[..._.catalogUrls,...P],A={store_id:l.id,title:_.title,discount:parseFloat(_.discount),description:_.description,catalog_images:te,valid_from:new Date().toISOString(),valid_until:_.valid_until+"T23:59:59"};if(O==="new"){const q=await _e.createCoupon(A);w(k=>[q,...k]),qe.success("Cupom criado com sucesso!")}else{const q=await _e.updateCoupon(O.id,A);w(k=>k.map(W=>W.id===O.id?q:W)),qe.success("Cupom atualizado com sucesso!")}N(null)}catch{qe.error("Erro ao salvar cupom")}finally{Q(!1)}},F=async M=>{if(window.confirm("Tem certeza que deseja excluir este cupom?"))try{await _e.deleteCoupon(M),w(P=>P.filter(te=>te.id!==M)),qe.success("Cupom excluído")}catch{qe.error("Erro ao excluir cupom")}};return l?d.jsxs(Wz,{children:[d.jsx(up,{position:"top-right",toastOptions:{style:{background:"#fff",color:"#1A1A1A",border:"1px solid rgba(205,160,155,0.2)",borderRadius:"12px"},success:{iconTheme:{primary:"#A67168",secondary:"#fff"}}}}),d.jsxs(Jz,{children:[d.jsxs(eP,{children:[d.jsxs(tP,{children:["Minha ",d.jsx("span",{children:"Loja"})]}),d.jsx(nP,{$status:l.status,children:l.status})]}),l.status==="Pendente"&&d.jsxs(AP,{children:[d.jsx(x6,{}),d.jsxs("div",{children:[d.jsx("h4",{children:"Cadastro em análise"}),d.jsx("p",{children:"Sua loja está sendo analisada pela nossa equipe. Em breve você receberá uma resposta. Enquanto isso, você já pode editar as informações e gerenciar seus cupons."})]})]}),d.jsxs(Eb,{children:[d.jsxs(Tb,{children:[d.jsxs(Cb,{children:[d.jsx(Yo,{})," Informações da Loja"]}),!c&&d.jsxs(hm,{onClick:()=>f(!0),children:[d.jsx(Gx,{})," Editar"]})]}),d.jsx(Ab,{children:c?d.jsxs(_b,{onSubmit:X,children:[d.jsxs(Ln,{children:[d.jsx(zn,{children:"Logo da loja"}),d.jsxs(cP,{$hasImage:!!p.image_url,children:[d.jsx(uP,{children:p.image_url?d.jsx("img",{src:p.image_url,alt:"preview"}):d.jsx(Yo,{})}),d.jsxs(dP,{children:[d.jsxs(jb,{children:[d.jsx(Go,{})," Alterar imagem",d.jsx("input",{type:"file",accept:"image/*",onChange:H})]}),d.jsx(Rb,{children:"PNG, JPG ou WEBP — máx. 5MB"})]})]})]}),d.jsxs(fm,{$cols:2,children:[d.jsxs(Ln,{children:[d.jsx(zn,{children:"Nome da loja *"}),d.jsx(zr,{name:"name",value:p.name,onChange:Y,required:!0})]}),d.jsxs(Ln,{children:[d.jsx(zn,{children:"E-mail"}),d.jsx(zr,{type:"email",name:"email",value:p.email,onChange:Y})]})]}),d.jsxs(fm,{$cols:2,children:[d.jsxs(Ln,{children:[d.jsx(zn,{children:"Telefone"}),d.jsx(zr,{name:"phone",value:p.phone,onChange:Y})]}),d.jsxs(Ln,{children:[d.jsx(zn,{children:"Website"}),d.jsx(zr,{type:"url",name:"website_url",value:p.website_url,onChange:Y,placeholder:"https://"})]})]}),d.jsxs(Db,{children:[d.jsxs(hm,{type:"button",onClick:ne,children:[d.jsx(ur,{})," Cancelar"]}),d.jsxs(Uc,{type:"submit",disabled:g,children:[d.jsx(Zx,{})," ",g?"Salvando...":"Salvar alterações"]})]})]}):d.jsxs(iP,{children:[d.jsx(rP,{children:d.jsx(aP,{$hasImage:!!l.image_url,children:l.image_url?d.jsx("img",{src:l.image_url,alt:l.name}):l.name?.charAt(0).toUpperCase()})}),d.jsxs(sP,{children:[d.jsx("h2",{children:l.name}),d.jsxs(oP,{children:[l.email&&d.jsxs(dm,{children:[d.jsx(pr,{}),l.email]}),l.phone&&d.jsxs(dm,{children:[d.jsx(S6,{}),l.phone]}),l.website_url&&d.jsxs(dm,{children:[d.jsx(bg,{}),d.jsx("a",{href:l.website_url,target:"_blank",rel:"noreferrer",style:{color:"inherit"},children:l.website_url.replace(/^https?:\/\//,"")})]})]})]})]})})]}),d.jsxs(Eb,{children:[d.jsxs(Tb,{children:[d.jsxs(Cb,{children:[d.jsx(Qr,{})," Cupons da Loja"]}),d.jsxs(Uc,{onClick:re,children:[d.jsx(ju,{})," Novo Cupom"]})]}),d.jsx(Ab,{children:C?d.jsx(Mb,{children:d.jsx("p",{children:"Carregando cupons..."})}):x.length===0?d.jsxs(Mb,{children:[d.jsx(Qr,{}),d.jsx("h3",{children:"Nenhum cupom cadastrado"}),d.jsx("p",{children:"Crie seu primeiro cupom para atrair clientes."}),d.jsxs(Uc,{onClick:re,children:[d.jsx(ju,{})," Criar cupom"]})]}):d.jsx(fP,{children:x.map(M=>d.jsxs(hP,{children:[d.jsxs(mP,{children:[d.jsxs(pP,{children:[M.discount,"% OFF"]}),d.jsxs(gP,{children:[d.jsx(yP,{onClick:()=>ye(M),title:"Editar",children:d.jsx(Gx,{})}),d.jsx(vP,{onClick:()=>F(M.id),title:"Excluir",children:d.jsx(Lo,{})})]})]}),d.jsx(xP,{children:M.title}),M.description&&d.jsx(bP,{children:M.description}),d.jsxs(wP,{children:[d.jsx(cl,{}),"Válido até ",new Date(M.valid_until).toLocaleDateString("pt-BR")]})]},M.id))})})]})]}),O!==null&&d.jsx(SP,{onClick:()=>N(null),children:d.jsxs(EP,{onClick:M=>M.stopPropagation(),children:[d.jsxs(TP,{children:[d.jsx("h3",{children:O==="new"?"Novo Cupom":"Editar Cupom"}),d.jsx(CP,{onClick:()=>N(null),children:d.jsx(ur,{})})]}),d.jsxs(_b,{onSubmit:Ce,children:[d.jsxs(Ln,{children:[d.jsx(zn,{children:"Título do cupom *"}),d.jsx(zr,{name:"title",placeholder:"Ex: 20% OFF em toda a coleção",value:_.title,onChange:be,required:!0})]}),d.jsxs(fm,{$cols:2,children:[d.jsxs(Ln,{children:[d.jsx(zn,{children:"Desconto (%) *"}),d.jsx(zr,{type:"number",name:"discount",placeholder:"Ex: 20",min:"1",max:"100",value:_.discount,onChange:be,required:!0})]}),d.jsxs(Ln,{children:[d.jsx(zn,{children:"Válido até *"}),d.jsx(zr,{type:"date",name:"valid_until",value:_.valid_until,onChange:be,required:!0,min:new Date().toISOString().split("T")[0]})]})]}),d.jsxs(Ln,{children:[d.jsx(zn,{children:"Descrição"}),d.jsx(lP,{name:"description",placeholder:"Detalhes, condições de uso...",value:_.description,onChange:be,rows:3})]}),d.jsxs(Ln,{children:[d.jsxs(zn,{children:["Catálogo de Produtos (",_.catalogPreviews.length,"/12) *"]}),d.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem",marginBottom:"0.75rem"},children:[_.catalogPreviews.map((M,P)=>d.jsxs("div",{style:{position:"relative",width:72,height:72},children:[d.jsx("img",{src:M,alt:`foto ${P+1}`,style:{width:72,height:72,objectFit:"cover",borderRadius:8,border:"2px solid #CDA09B"}}),d.jsx("button",{type:"button",onClick:()=>ve(P),style:{position:"absolute",top:-6,right:-6,background:"#C62828",color:"white",border:"none",borderRadius:"50%",width:20,height:20,cursor:"pointer",fontSize:12,display:"flex",alignItems:"center",justifyContent:"center"},children:"×"})]},P)),_.catalogPreviews.length<12&&d.jsxs(jb,{style:{width:72,height:72,flexDirection:"column",gap:"0.2rem",fontSize:"0.7rem",borderRadius:8,border:"2px dashed #CDA09B",background:"#FDF5F4"},children:[d.jsx(Go,{}),"Adicionar",d.jsx("input",{type:"file",accept:"image/*",multiple:!0,onChange:pe})]})]}),d.jsx(Rb,{children:"Mínimo 4, máximo 12 fotos. PNG, JPG ou WEBP — máx. 5MB cada"})]}),d.jsxs(Db,{children:[d.jsxs(hm,{type:"button",onClick:()=>N(null),children:[d.jsx(ur,{})," Cancelar"]}),d.jsxs(Uc,{type:"submit",disabled:z,children:[d.jsx(Zx,{})," ",z?"Salvando...":"Salvar"]})]})]})]})})]}):null},RP=S.div`
  padding: 6rem 1.5rem 3rem;
  min-height: 100vh;
  background: #FAFAFA;
  font-family: ${b.fonts.primary};

  @media (min-width: 768px) {
    padding: 6rem 2rem 3rem;
  }
`,DP=S.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,MP=S.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
`,kP=S.h1`
  font-family: ${b.fonts.secondary};
  font-size: 2rem;
  color: ${b.colors.text};
  margin: 0;
  font-weight: 700;

  span { color: ${b.colors.primaryLight}; }

  @media (max-width: 768px) { font-size: 1.5rem; }
`,Nb=S.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: ${b.colors.primary};
  color: white;
  border: none;
  border-radius: 0.75rem;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: ${b.fonts.primary};
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 4px 12px rgba(166, 113, 104, 0.3);

  &:hover {
    background: ${b.colors.primaryDark};
    transform: translateY(-1px);
    box-shadow: 0 6px 18px rgba(166, 113, 104, 0.4);
  }
`,OP=S.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,j6=S.button`
  background: white;
  border: 1.5px solid rgba(205, 160, 155, 0.2);
  border-radius: 1.25rem;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;
  width: 100%;
  box-shadow: 0 2px 10px rgba(0,0,0,0.04);

  &:hover {
    border-color: ${b.colors.primaryLight};
    box-shadow: 0 6px 20px rgba(166, 113, 104, 0.12);
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    padding: 1.25rem;
  }
`,NP=S.div`
  width: 64px;
  height: 64px;
  border-radius: 1rem;
  background: ${e=>e.$hasImage?"transparent":`linear-gradient(135deg, ${b.colors.primaryLight}, ${b.colors.primary})`};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  font-family: ${b.fonts.secondary};
  overflow: hidden;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(166, 113, 104, 0.2);

  img { width: 100%; height: 100%; object-fit: cover; }

  @media (max-width: 480px) { width: 52px; height: 52px; font-size: 1.2rem; }
`,LP=S.div`
  flex: 1;
  min-width: 0;
`,zP=S.h3`
  font-family: ${b.fonts.secondary};
  font-size: 1.1rem;
  color: ${b.colors.text};
  margin: 0 0 0.35rem;
  font-weight: 700;
`,PP=S.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`,Lb=S.span`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.8rem;
  color: ${b.colors.gray};

  svg { color: ${b.colors.primaryLight}; font-size: 0.75rem; }
`,IP=S.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  margin-top: 0.5rem;

  ${e=>e.$status==="Aprovada"&&"background: #E8F5E9; color: #2E7D32;"}
  ${e=>e.$status==="Pendente"&&"background: #EEEEEE; color: #616161; border: 1px solid #BDBDBD;"}
  ${e=>e.$status==="Rejeitada"&&"background: #FFEBEE; color: #C62828;"}

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: currentColor;
  }
`,$P=S.div`
  color: ${b.colors.primaryLight};
  font-size: 1rem;
  flex-shrink: 0;
  transition: transform 0.2s;

  ${j6}:hover & { transform: translateX(4px); }
`,UP=S.div`
  background: white;
  border-radius: 1.5rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  border: 1px solid rgba(205, 160, 155, 0.12);
  padding: 4rem 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`,BP=S.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${b.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: ${b.colors.primaryLight};
  margin-bottom: 0.5rem;
`,VP=S.h3`
  font-family: ${b.fonts.secondary};
  font-size: 1.4rem;
  color: ${b.colors.text};
  margin: 0;
`,HP=S.p`
  color: ${b.colors.gray};
  font-size: 0.95rem;
  margin: 0;
  max-width: 360px;
  line-height: 1.6;
`,FP=()=>{const{userStores:e}=Ai(),t=Si();return d.jsx(RP,{children:d.jsxs(DP,{children:[d.jsxs(MP,{children:[d.jsxs(kP,{children:["Minhas ",d.jsx("span",{children:"Lojas"})]}),d.jsxs(Nb,{onClick:()=>t("/cadastro-parceiro"),children:[d.jsx(ju,{})," Cadastrar nova loja"]})]}),e?.length>0?d.jsx(OP,{children:e.map(r=>d.jsxs(j6,{onClick:()=>t(`/minha-loja/${r.id}`),children:[d.jsx(NP,{$hasImage:!!r.image_url,children:r.image_url?d.jsx("img",{src:r.image_url,alt:r.name}):r.name?.charAt(0).toUpperCase()}),d.jsxs(LP,{children:[d.jsx(zP,{children:r.name}),d.jsxs(PP,{children:[r.email&&d.jsxs(Lb,{children:[d.jsx(pr,{}),r.email]}),r.website_url&&d.jsxs(Lb,{children:[d.jsx(bg,{}),r.website_url.replace(/^https?:\/\//,"")]})]}),d.jsx(IP,{$status:r.status,children:r.status})]}),d.jsx($P,{children:d.jsx(TN,{})})]},r.id))}):d.jsxs(UP,{children:[d.jsx(BP,{children:d.jsx(Yo,{})}),d.jsx(VP,{children:"Nenhuma loja cadastrada"}),d.jsx(HP,{children:"Você ainda não possui nenhuma loja cadastrada. Cadastre sua primeira loja e comece a oferecer cupons para seus clientes."}),d.jsxs(Nb,{onClick:()=>t("/cadastro-parceiro"),children:[d.jsx(ju,{})," Cadastrar minha loja"]})]})]})})},qP=qu`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`,R6=S.div`
  min-height: 100vh;
  background: #FAFAFA;
  font-family: ${b.fonts.primary};
`,D6=S.div`
  background: linear-gradient(135deg, ${b.colors.primary} 0%, ${b.colors.primaryLight} 60%, #e8c5c0 100%);
  padding: 7rem 2rem 5rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 20% 80%, rgba(255,255,255,0.08) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 50%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 60px;
    background: #FAFAFA;
    clip-path: ellipse(55% 100% at 50% 100%);
  }
`,M6=S.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.25);
  color: white;
  padding: 0.4rem 1.1rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
`,k6=S.h1`
  font-family: ${b.fonts.secondary};
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  color: white;
  font-weight: 700;
  margin: 0 0 1rem;
  line-height: 1.15;
  text-shadow: 0 2px 20px rgba(0,0,0,0.15);
`,O6=S.p`
  color: rgba(255,255,255,0.88);
  font-size: 1.05rem;
  max-width: 520px;
  margin: 0 auto;
  line-height: 1.7;
`,N6=S.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
  flex-wrap: wrap;
`,Du=S.span`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: rgba(255,255,255,0.75);
  font-size: 0.82rem;
  svg { font-size: 0.9rem; }
`,L6=S.div`
  max-width: 860px;
  margin: 0 auto;
  padding: 3rem 1.5rem 5rem;
  animation: ${qP} 0.6s ease both;
  animation-delay: 0.2s;
`,GP=S.nav`
  background: white;
  border-radius: 1.25rem;
  padding: 1.75rem 2rem;
  margin-bottom: 2.5rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  border: 1px solid rgba(205,160,155,0.15);
`,YP=S.h3`
  font-family: ${b.fonts.secondary};
  font-size: 1rem;
  color: ${b.colors.text};
  margin: 0 0 1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 4px;
    height: 18px;
    background: linear-gradient(180deg, ${b.colors.primaryLight}, ${b.colors.primary});
    border-radius: 2px;
    display: inline-block;
  }
`,KP=S.ol`
  margin: 0;
  padding: 0 0 0 1.25rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 0.35rem 1.5rem;
`,XP=S.li`
  a {
    color: ${b.colors.gray};
    text-decoration: none;
    font-size: 0.875rem;
    transition: color 0.2s;
    line-height: 1.8;
    &:hover { color: ${b.colors.primary}; }
  }
`,Ua=S.section`
  background: white;
  border-radius: 1.25rem;
  padding: 2rem 2.25rem;
  margin-bottom: 1.25rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  border: 1px solid rgba(205,160,155,0.12);
  transition: box-shadow 0.2s, border-color 0.2s;

  &:hover {
    box-shadow: 0 6px 24px rgba(166,113,104,0.1);
    border-color: rgba(205,160,155,0.25);
  }

  @media (max-width: 600px) { padding: 1.5rem; }
`,Ba=S.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
`,Va=S.div`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: linear-gradient(135deg, ${b.colors.secondary}, #f0d8d5);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 700;
  color: ${b.colors.primary};
  flex-shrink: 0;
  font-family: ${b.fonts.secondary};
`,Ha=S.h2`
  font-family: ${b.fonts.secondary};
  font-size: 1.15rem;
  color: ${b.colors.text};
  margin: 0;
  font-weight: 700;
  line-height: 1.3;
  padding-top: 0.35rem;
`,Fa=S.p`
  color: #555;
  font-size: 0.95rem;
  line-height: 1.8;
  margin: 0;
`,sp=S.div`
  background: linear-gradient(135deg, ${b.colors.secondary}80, #fdf0ee);
  border-left: 3px solid ${b.colors.primaryLight};
  border-radius: 0 0.75rem 0.75rem 0;
  padding: 1rem 1.25rem;
  margin-top: 1rem;
  font-size: 0.88rem;
  color: ${b.colors.primaryDark};
  line-height: 1.7;
`,z6=S.div`
  text-align: center;
  padding: 2.5rem 1.5rem;
  background: white;
  border-radius: 1.25rem;
  border: 1px solid rgba(205,160,155,0.15);
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);

  p {
    color: ${b.colors.gray};
    font-size: 0.875rem;
    margin: 0 0 0.5rem;
    line-height: 1.6;
  }

  a {
    color: ${b.colors.primary};
    font-weight: 600;
    text-decoration: none;
    &:hover { text-decoration: underline; }
  }
`,ZP=S.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1.25rem;
  margin-bottom: 2.5rem;
`,QP=S.div`
  background: white;
  border-radius: 1.25rem;
  padding: 1.75rem 1.25rem;
  text-align: center;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  border: 1px solid rgba(205,160,155,0.12);
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 6px 24px rgba(166,113,104,0.1);
    border-color: rgba(205,160,155,0.25);
    transform: translateY(-3px);
  }
`,WP=S.div`
  font-family: ${b.fonts.secondary};
  font-size: 2.2rem;
  font-weight: 700;
  color: ${b.colors.primary};
  line-height: 1;
  margin-bottom: 0.4rem;
`,JP=S.div`
  font-size: 0.82rem;
  color: ${b.colors.gray};
  font-weight: 500;
`,eI=S.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.25rem;
  margin-top: 1rem;
`,tI=S.div`
  background: linear-gradient(135deg, ${b.colors.secondary}60, #fdf0ee);
  border-radius: 1rem;
  padding: 1.5rem;
  border: 1px solid rgba(205,160,155,0.2);
`,nI=S.div`
  font-size: 1.75rem;
  margin-bottom: 0.75rem;
`,iI=S.h4`
  font-family: ${b.fonts.secondary};
  font-size: 1rem;
  color: ${b.colors.text};
  margin: 0 0 0.4rem;
  font-weight: 700;
`,rI=S.p`
  font-size: 0.85rem;
  color: #666;
  margin: 0;
  line-height: 1.6;
`,aI=S.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.25rem;
  margin-top: 1rem;
`,sI=S.div`
  background: white;
  border-radius: 1rem;
  padding: 1.5rem 1rem;
  text-align: center;
  border: 1px solid rgba(205,160,155,0.15);
  box-shadow: 0 2px 10px rgba(0,0,0,0.04);
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 6px 20px rgba(166,113,104,0.12);
    transform: translateY(-3px);
  }
`,oI=S.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${b.colors.primaryLight}, ${b.colors.primary});
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${b.fonts.secondary};
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin: 0 auto 0.75rem;
`,lI=S.h4`
  font-family: ${b.fonts.secondary};
  font-size: 0.95rem;
  color: ${b.colors.text};
  margin: 0 0 0.25rem;
  font-weight: 700;
`,cI=S.p`
  font-size: 0.78rem;
  color: ${b.colors.gray};
  margin: 0;
`,mm=[{id:"introducao",title:"Introdução",text:"A Innova Solutions valoriza e respeita a privacidade de seus usuários. Esta Política de Privacidade descreve como coletamos, utilizamos, armazenamos e protegemos suas informações pessoais ao utilizar nossa plataforma, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).",highlight:"Ao utilizar nossa plataforma, você concorda com as práticas descritas nesta política."},{id:"coleta",title:"Dados que Coletamos",text:"Coletamos informações que você nos fornece diretamente ao criar uma conta (nome, e-mail, foto de perfil), ao cadastrar uma loja parceira (dados empresariais, CNPJ, telefone) e ao interagir com cupons. Também coletamos automaticamente dados de uso, como páginas visitadas, cliques e informações do dispositivo.",highlight:"Nunca coletamos dados de pagamento ou informações financeiras sensíveis diretamente em nossa plataforma."},{id:"uso",title:"Como Usamos seus Dados",text:"Utilizamos suas informações para: fornecer e melhorar nossos serviços; personalizar sua experiência na plataforma; enviar comunicações relevantes sobre cupons e promoções; processar cadastros de parceiros; garantir a segurança da plataforma; e cumprir obrigações legais."},{id:"compartilhamento",title:"Compartilhamento de Dados",text:"Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins comerciais. Podemos compartilhar dados com prestadores de serviços essenciais (como Firebase/Google para autenticação) que atuam em nosso nome e estão sujeitos a obrigações de confidencialidade.",highlight:"Seus dados nunca são vendidos a anunciantes ou terceiros para fins de marketing."},{id:"armazenamento",title:"Armazenamento e Segurança",text:"Seus dados são armazenados em servidores seguros com criptografia em trânsito (HTTPS) e em repouso. Utilizamos o Firebase Authentication para gerenciar credenciais de acesso, garantindo que senhas nunca sejam armazenadas em texto simples em nossos sistemas."},{id:"cookies",title:"Cookies e Tecnologias Similares",text:"Utilizamos cookies e tecnologias similares para manter sua sessão ativa, lembrar suas preferências e analisar o uso da plataforma. Você pode configurar seu navegador para recusar cookies, mas isso pode afetar algumas funcionalidades do serviço."},{id:"direitos",title:"Seus Direitos (LGPD)",text:"Conforme a LGPD, você tem direito a: confirmar a existência de tratamento dos seus dados; acessar seus dados; corrigir dados incompletos ou desatualizados; solicitar a anonimização, bloqueio ou eliminação de dados desnecessários; revogar o consentimento a qualquer momento; e solicitar a portabilidade dos dados.",highlight:"Para exercer qualquer um desses direitos, entre em contato conosco pelo e-mail privacidade@innovasolutions.com.br"},{id:"retencao",title:"Retenção de Dados",text:"Mantemos seus dados pelo tempo necessário para fornecer nossos serviços ou conforme exigido por lei. Ao excluir sua conta, seus dados pessoais são removidos de nossos sistemas em até 30 dias, exceto quando a retenção for obrigatória por legislação aplicável."},{id:"menores",title:"Menores de Idade",text:"Nossa plataforma não é direcionada a menores de 18 anos. Não coletamos intencionalmente dados de menores. Caso identifiquemos que coletamos dados de um menor sem consentimento parental, tomaremos medidas para remover essas informações imediatamente."},{id:"alteracoes",title:"Alterações nesta Política",text:"Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre mudanças significativas por e-mail ou através de aviso na plataforma. Recomendamos revisar esta política regularmente."},{id:"contato",title:"Contato e DPO",text:"Para dúvidas, solicitações ou exercício dos seus direitos relacionados à privacidade de dados, entre em contato com nosso encarregado de proteção de dados (DPO).",highlight:"📧 privacidade@innovasolutions.com.br"}],uI={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.07,delayChildren:.1}}},dI={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5,ease:"easeOut"}}},fI=()=>d.jsxs(R6,{children:[d.jsx(D6,{children:d.jsxs(he.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.7},children:[d.jsxs(M6,{children:[d.jsx(wg,{})," Privacidade & LGPD"]}),d.jsx(k6,{children:"Política de Privacidade"}),d.jsx(O6,{children:"Transparência total sobre como coletamos, usamos e protegemos seus dados pessoais."}),d.jsxs(N6,{children:[d.jsxs(Du,{children:[d.jsx(cl,{})," Última atualização: Janeiro de 2025"]}),d.jsxs(Du,{children:[d.jsx(b6,{})," ",mm.length," seções"]})]})]})}),d.jsxs(L6,{children:[d.jsx(he.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:d.jsxs(GP,{children:[d.jsx(YP,{children:"Índice"}),d.jsx(KP,{children:mm.map((e,t)=>d.jsx(XP,{children:d.jsxs("a",{href:`#${e.id}`,children:[t+1,". ",e.title]})},e.id))})]})}),d.jsx(he.div,{variants:uI,initial:"hidden",animate:"visible",children:mm.map((e,t)=>d.jsx(he.div,{variants:dI,children:d.jsxs(Ua,{id:e.id,children:[d.jsxs(Ba,{children:[d.jsx(Va,{children:t+1}),d.jsx(Ha,{children:e.title})]}),d.jsx(Fa,{children:e.text}),e.highlight&&d.jsx(sp,{children:e.highlight})]})},e.id))}),d.jsx(he.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.8},children:d.jsxs(z6,{children:[d.jsx("p",{children:"Dúvidas sobre privacidade? Fale com nosso DPO."}),d.jsx("p",{children:d.jsxs("a",{href:"mailto:privacidade@innovasolutions.com.br",children:[d.jsx(pr,{style:{marginRight:"6px",verticalAlign:"middle"}}),"privacidade@innovasolutions.com.br"]})}),d.jsx("p",{style:{marginTop:"1rem",fontSize:"0.8rem",opacity:.6},children:"© 2025 Innova Solutions. Todos os direitos reservados."})]})})]})]}),hI=[{icon:"💎",title:"Qualidade",text:"Curadoria rigorosa de parceiros para garantir as melhores ofertas do segmento."},{icon:"🔒",title:"Segurança",text:"Seus dados protegidos com as melhores práticas de segurança e conformidade com a LGPD."},{icon:"🤝",title:"Parceria",text:"Construímos relações duradouras com lojas e consumidores baseadas em confiança."},{icon:"✨",title:"Inovação",text:"Tecnologia moderna para conectar você às melhores oportunidades de desconto."}],mI=[{name:"João e Victor",role:"Fundador & Dev",initial:"J"},{name:"Equipe Innova",role:"Desenvolvimento",initial:"E"}],pI={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.1}}},wo={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5,ease:"easeOut"}}},gI=()=>{const[e,t]=T.useState([{number:"—",label:"Lojas Parceiras"},{number:"100%",label:"Gratuito para usuários"},{number:"2025",label:"Ano de fundação"},{number:"—",label:"Cupons disponíveis"}]);return T.useEffect(()=>{(async()=>{try{const[s,l]=await Promise.all([_e.getAllStores(),_e.getAllCoupons()]),c=s.filter(m=>m.status==="Aprovada"),f=new Set(c.map(m=>m.id)),p=l.filter(m=>f.has(m.store_id)&&new Date(m.valid_until)>=new Date);t(m=>m.map(g=>g.label==="Lojas Parceiras"?{...g,number:String(c.length)}:g.label==="Cupons disponíveis"?{...g,number:String(p.length)}:g))}catch(s){console.error("Erro ao carregar stats:",s)}})()},[]),d.jsxs(R6,{children:[d.jsx(D6,{children:d.jsxs(he.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.7},children:[d.jsxs(M6,{children:[d.jsx(C6,{})," Nossa História"]}),d.jsx(k6,{children:"Sobre a Innova Solutions"}),d.jsx(O6,{children:"Conectando consumidores às melhores ofertas de semijoias e acessórios do Brasil."}),d.jsxs(N6,{children:[d.jsxs(Du,{children:[d.jsx(cl,{})," Fundada em 2025"]}),d.jsxs(Du,{children:[d.jsx(w6,{})," Parceiros em todo o Brasil"]})]})]})}),d.jsxs(L6,{children:[d.jsx(he.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:d.jsx(ZP,{children:e.map((r,s)=>d.jsx(he.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2+s*.08},children:d.jsxs(QP,{children:[d.jsx(WP,{children:r.number}),d.jsx(JP,{children:r.label})]})},s))})}),d.jsxs(he.div,{variants:pI,initial:"hidden",animate:"visible",children:[d.jsx(he.div,{variants:wo,children:d.jsxs(Ua,{id:"missao",children:[d.jsxs(Ba,{children:[d.jsx(Va,{children:"🎯"}),d.jsx(Ha,{children:"Nossa Missão"})]}),d.jsx(Fa,{children:"A Innova Solutions nasceu com um propósito claro: democratizar o acesso a cupons de desconto de qualidade no segmento de semijoias e acessórios. Acreditamos que toda pessoa merece encontrar peças bonitas com o melhor custo-benefício, e que toda loja merece uma vitrine digital eficiente para alcançar novos clientes."}),d.jsx(sp,{children:"Nossa plataforma é 100% gratuita para consumidores e oferece ferramentas poderosas para lojas parceiras gerenciarem seus cupons e alcançarem mais clientes."})]})}),d.jsx(he.div,{variants:wo,children:d.jsxs(Ua,{id:"historia",children:[d.jsxs(Ba,{children:[d.jsx(Va,{children:"📖"}),d.jsx(Ha,{children:"Nossa História"})]}),d.jsx(Fa,{children:"Fundada em 2025 como projeto de TCC do Instituto Técnico de Barueri (ITB), a Innova Solutions surgiu da identificação de uma lacuna no mercado: a falta de uma plataforma centralizada e especializada em cupons para o nicho de semijoias e acessórios. O que começou como um projeto acadêmico rapidamente evoluiu para uma solução real, conectando lojas e consumidores de forma simples e eficiente."})]})}),d.jsx(he.div,{variants:wo,children:d.jsxs(Ua,{id:"valores",children:[d.jsxs(Ba,{children:[d.jsx(Va,{children:"💡"}),d.jsx(Ha,{children:"Nossos Valores"})]}),d.jsx(Fa,{children:"Tudo o que fazemos é guiado por princípios que colocam pessoas em primeiro lugar."}),d.jsx(eI,{children:hI.map((r,s)=>d.jsxs(tI,{children:[d.jsx(nI,{children:r.icon}),d.jsx(iI,{children:r.title}),d.jsx(rI,{children:r.text})]},s))})]})}),d.jsx(he.div,{variants:wo,children:d.jsxs(Ua,{id:"parceiros",children:[d.jsxs(Ba,{children:[d.jsx(Va,{children:d.jsx(MN,{style:{fontSize:"0.9rem"}})}),d.jsx(Ha,{children:"Para Lojas Parceiras"})]}),d.jsx(Fa,{children:"Se você tem uma loja de semijoias ou acessórios e quer alcançar mais clientes, a Innova Solutions é o lugar certo. Cadastre sua loja, crie cupons atrativos e apareça para milhares de consumidores que buscam as melhores ofertas do segmento."}),d.jsx(sp,{children:"O cadastro é simples e gratuito. Nossa equipe analisa cada solicitação para garantir a qualidade da plataforma para todos os usuários."})]})}),d.jsx(he.div,{variants:wo,children:d.jsxs(Ua,{id:"equipe",children:[d.jsxs(Ba,{children:[d.jsx(Va,{children:"👥"}),d.jsx(Ha,{children:"Nossa Equipe"})]}),d.jsx(Fa,{children:"Somos um time apaixonado por tecnologia e inovação, comprometido em entregar a melhor experiência para usuários e parceiros."}),d.jsx(aI,{children:mI.map((r,s)=>d.jsxs(sI,{children:[d.jsx(oI,{children:r.initial}),d.jsx(lI,{children:r.name}),d.jsx(cI,{children:r.role})]},s))})]})})]}),d.jsx(he.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.8},children:d.jsxs(z6,{children:[d.jsx("p",{children:"Quer saber mais ou se tornar um parceiro?"}),d.jsx("p",{children:d.jsxs("a",{href:"mailto:contato@innovasolutions.com.br",children:[d.jsx(pr,{style:{marginRight:"6px",verticalAlign:"middle"}}),"contato@innovasolutions.com.br"]})}),d.jsx("p",{style:{marginTop:"1rem",fontSize:"0.8rem",opacity:.6},children:"© 2025 Innova Solutions. Todos os direitos reservados."})]})})]})]})},yI=S.div`
  padding: 8rem 2rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
  min-height: 100vh;

  @media (max-width: ${b.breakpoints.mobile}) {
    padding: 6rem 1rem 2rem;
  }
`,vI=S.div`
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    font-family: ${b.fonts.secondary};
    color: ${b.colors.text};
    font-size: 3rem;
    margin-bottom: 1rem;

    @media (max-width: ${b.breakpoints.mobile}) {
      font-size: 2.2rem;
    }
  }

  p {
    color: ${b.colors.gray};
    font-size: 1.2rem;
  }
`,xI=S.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  position: relative;

  @media (max-width: ${b.breakpoints.mobile}) {
    flex-direction: column;
  }
`,bI=S.div`
  position: absolute;
  left: 1rem;
  color: ${b.colors.gray};
  z-index: 1;
`,wI=S.input`
  flex: 1;
  padding: 1rem 1rem 1rem 3rem;
  border: 2px solid ${b.colors.lightGray};
  border-radius: 25px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${b.colors.primary};
    box-shadow: 0 0 0 3px rgba(205, 160, 155, 0.1);
  }

  &::placeholder {
    color: ${b.colors.gray};
  }

  @media (max-width: ${b.breakpoints.mobile}) {
    width: 100%;
  }
`,SI=S.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${b.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: ${b.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,P6=S.div`
  background: ${b.colors.white};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.15);
  }
`,EI=S.div`
  width: 100%;
  height: 180px;
  overflow: hidden;
  flex-shrink: 0;
`,TI=S.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${P6}:hover & {
    transform: scale(1.05);
  }
`,CI=S.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #CDA09B, #A67168);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: 700;
  color: white;
  font-family: ${b.fonts.secondary};
`,AI=S.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.5rem;
`,_I=S.h3`
  font-family: ${b.fonts.secondary};
  color: ${b.colors.text};
  font-size: 1.3rem;
  font-weight: 600;
`,jI=S.p`
  color: ${b.colors.gray};
  font-size: 0.95rem;
  line-height: 1.5;
  flex: 1;
`,RI=S.a`
  display: block;
  width: 100%;
  background: linear-gradient(135deg, ${b.colors.primary} 0%, ${b.colors.primaryLight} 100%);
  color: ${b.colors.white};
  border: none;
  padding: 1rem;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  text-decoration: none;
  margin-top: auto;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(205, 160, 155, 0.3);
  }
`,zb=S.div`
  text-align: center;
  padding: 4rem 2rem;
  color: ${b.colors.gray};

  h3 {
    color: ${b.colors.text};
    margin-bottom: 1rem;
    font-family: ${b.fonts.secondary};
  }
`,DI=()=>{const[e,t]=T.useState([]),[r,s]=T.useState([]),[l,c]=T.useState(""),[f,p]=T.useState(!0);return T.useEffect(()=>{_e.getAllStores().then(m=>{const g=m.filter(y=>y.status==="Aprovada");t(g),s(g)}).catch(m=>console.error("Erro ao carregar lojas:",m)).finally(()=>p(!1))},[]),T.useEffect(()=>{const m=l.toLowerCase();s(e.filter(g=>g.name?.toLowerCase().includes(m)||g.description?.toLowerCase().includes(m)))},[l,e]),d.jsxs(yI,{children:[d.jsxs(vI,{children:[d.jsx("h1",{children:"Lojas Parceiras"}),d.jsx("p",{children:"Conheça todas as lojas cadastradas na plataforma"})]}),d.jsxs(xI,{children:[d.jsx(bI,{children:d.jsx(E6,{})}),d.jsx(wI,{type:"text",placeholder:"Buscar por nome da loja...",value:l,onChange:m=>c(m.target.value)})]}),f?d.jsx(zb,{children:d.jsx("h3",{children:"Carregando lojas..."})}):r.length>0?d.jsx(SI,{children:r.map(m=>d.jsxs(P6,{children:[d.jsx(EI,{children:m.image_url?d.jsx(TI,{src:m.image_url,alt:m.name}):d.jsx(CI,{children:m.name?.charAt(0).toUpperCase()})}),d.jsxs(AI,{children:[d.jsx(_I,{children:m.name}),m.description&&d.jsx(jI,{children:m.description}),m.website_url&&d.jsx(RI,{href:m.website_url,target:"_blank",rel:"noopener noreferrer",children:"Visitar Loja"})]})]},m.id))}):d.jsxs(zb,{children:[d.jsx("h3",{children:"Nenhuma loja encontrada"}),d.jsx("p",{children:"Tente buscar por outro termo"})]})]})},MI=qu`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`,kI=S.div`
  min-height: 100vh;
  background: #FAFAFA;
  font-family: ${b.fonts.primary};
`,OI=S.div`
  background: linear-gradient(135deg, ${b.colors.primary} 0%, ${b.colors.primaryLight} 60%, #e8c5c0 100%);
  padding: 7rem 2rem 5rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 20% 80%, rgba(255,255,255,0.08) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 50%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 60px;
    background: #FAFAFA;
    clip-path: ellipse(55% 100% at 50% 100%);
  }
`,NI=S.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.25);
  color: white;
  padding: 0.4rem 1.1rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
`,LI=S.h1`
  font-family: ${b.fonts.secondary};
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  color: white;
  font-weight: 700;
  margin: 0 0 1rem;
  line-height: 1.15;
  text-shadow: 0 2px 20px rgba(0,0,0,0.15);
`,zI=S.p`
  color: rgba(255,255,255,0.88);
  font-size: 1.05rem;
  max-width: 520px;
  margin: 0 auto;
  line-height: 1.7;
`,PI=S.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
  flex-wrap: wrap;
`,Pb=S.span`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: rgba(255,255,255,0.75);
  font-size: 0.82rem;

  svg { font-size: 0.9rem; }
`,II=S.div`
  max-width: 860px;
  margin: 0 auto;
  padding: 3rem 1.5rem 5rem;
  animation: ${MI} 0.6s ease both;
  animation-delay: 0.2s;
`,$I=S.nav`
  background: white;
  border-radius: 1.25rem;
  padding: 1.75rem 2rem;
  margin-bottom: 2.5rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  border: 1px solid rgba(205,160,155,0.15);
`,UI=S.h3`
  font-family: ${b.fonts.secondary};
  font-size: 1rem;
  color: ${b.colors.text};
  margin: 0 0 1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 4px;
    height: 18px;
    background: linear-gradient(180deg, ${b.colors.primaryLight}, ${b.colors.primary});
    border-radius: 2px;
    display: inline-block;
  }
`,BI=S.ol`
  margin: 0;
  padding: 0 0 0 1.25rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 0.35rem 1.5rem;
`,VI=S.li`
  a {
    color: ${b.colors.gray};
    text-decoration: none;
    font-size: 0.875rem;
    transition: color 0.2s;
    line-height: 1.8;

    &:hover { color: ${b.colors.primary}; }
  }
`,HI=S.section`
  background: white;
  border-radius: 1.25rem;
  padding: 2rem 2.25rem;
  margin-bottom: 1.25rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  border: 1px solid rgba(205,160,155,0.12);
  transition: box-shadow 0.2s, border-color 0.2s;

  &:hover {
    box-shadow: 0 6px 24px rgba(166,113,104,0.1);
    border-color: rgba(205,160,155,0.25);
  }

  @media (max-width: 600px) {
    padding: 1.5rem;
  }
`,FI=S.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
`,qI=S.div`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: linear-gradient(135deg, ${b.colors.secondary}, #f0d8d5);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 700;
  color: ${b.colors.primary};
  flex-shrink: 0;
  font-family: ${b.fonts.secondary};
`,GI=S.h2`
  font-family: ${b.fonts.secondary};
  font-size: 1.15rem;
  color: ${b.colors.text};
  margin: 0;
  font-weight: 700;
  line-height: 1.3;
  padding-top: 0.35rem;
`,YI=S.p`
  color: #555;
  font-size: 0.95rem;
  line-height: 1.8;
  margin: 0;
`,KI=S.div`
  background: linear-gradient(135deg, ${b.colors.secondary}80, #fdf0ee);
  border-left: 3px solid ${b.colors.primaryLight};
  border-radius: 0 0.75rem 0.75rem 0;
  padding: 1rem 1.25rem;
  margin-top: 1rem;
  font-size: 0.88rem;
  color: ${b.colors.primaryDark};
  line-height: 1.7;
`,XI=S.div`
  text-align: center;
  padding: 2.5rem 1.5rem;
  background: white;
  border-radius: 1.25rem;
  border: 1px solid rgba(205,160,155,0.15);
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);

  p {
    color: ${b.colors.gray};
    font-size: 0.875rem;
    margin: 0 0 0.5rem;
    line-height: 1.6;
  }

  a {
    color: ${b.colors.primary};
    font-weight: 600;
    text-decoration: none;

    &:hover { text-decoration: underline; }
  }
`,pm=[{id:"aceitacao",title:"Aceitação dos Termos",text:"Ao acessar e utilizar a plataforma Innova Solutions, você declara ter lido, compreendido e concordado integralmente com estes Termos de Uso. Caso não concorde com qualquer disposição aqui prevista, solicitamos que não utilize nossos serviços.",highlight:"O uso contínuo da plataforma após alterações nos termos implica na aceitação automática das novas condições."},{id:"uso",title:"Uso da Plataforma",text:"A Innova Solutions é uma plataforma dedicada a conectar consumidores com cupons de desconto de lojas parceiras do segmento de semijoias e acessórios. Você se compromete a utilizar o serviço exclusivamente para fins lícitos, éticos e em conformidade com a legislação brasileira vigente.",highlight:"É vedado o uso da plataforma para fins fraudulentos, spam, ou qualquer atividade que prejudique outros usuários ou parceiros."},{id:"cadastro",title:"Cadastro e Conta",text:"Para acessar recursos completos da plataforma, é necessário criar uma conta fornecendo informações verdadeiras, precisas e atualizadas. Você é o único responsável pela confidencialidade de suas credenciais de acesso e por todas as atividades realizadas em sua conta.",highlight:"Em caso de suspeita de acesso não autorizado, notifique-nos imediatamente através dos nossos canais de suporte."},{id:"cupons",title:"Cupons e Descontos",text:"Os cupons disponibilizados na plataforma estão sujeitos à disponibilidade, validade e condições específicas estabelecidas por cada loja parceira. A Innova Solutions atua como intermediária e não se responsabiliza por alterações, cancelamentos ou indisponibilidade de cupons por parte dos parceiros."},{id:"parceiros",title:"Cadastro de Parceiros",text:"Empresas interessadas em se tornar parceiras devem submeter solicitação através do formulário de cadastro. A aprovação está sujeita à análise da equipe Innova Solutions, que se reserva o direito de aceitar ou recusar candidaturas sem necessidade de justificativa.",highlight:"Parceiros aprovados devem manter suas informações e cupons atualizados, sendo responsáveis pela veracidade dos dados cadastrados."},{id:"propriedade",title:"Propriedade Intelectual",text:"Todo o conteúdo presente na plataforma — incluindo textos, imagens, logotipos, design e código-fonte — é protegido por direitos autorais e pertence à Innova Solutions ou a seus respectivos parceiros. É proibida a reprodução, distribuição ou uso comercial sem autorização prévia e expressa."},{id:"privacidade",title:"Privacidade e Dados",text:"A coleta e o tratamento de dados pessoais são realizados em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018). Utilizamos seus dados exclusivamente para melhorar sua experiência na plataforma e para comunicações relacionadas ao serviço.",highlight:"Você pode solicitar a exclusão dos seus dados a qualquer momento através das configurações da sua conta ou pelo nosso suporte."},{id:"responsabilidade",title:"Limitação de Responsabilidade",text:"A Innova Solutions não se responsabiliza por danos diretos, indiretos, incidentais ou consequenciais decorrentes do uso ou da impossibilidade de uso da plataforma, incluindo falhas técnicas, interrupções de serviço ou ações de terceiros."},{id:"alteracoes",title:"Alterações nos Termos",text:"Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. As alterações entram em vigor imediatamente após sua publicação na plataforma. Recomendamos a revisão periódica deste documento para manter-se atualizado."},{id:"contato",title:"Contato",text:"Para dúvidas, sugestões ou solicitações relacionadas a estes Termos de Uso, entre em contato com nossa equipe.",highlight:"📧 contato@innovasolutions.com.br"}],ZI={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.07,delayChildren:.1}}},QI={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5,ease:"easeOut"}}},WI=()=>d.jsxs(kI,{children:[d.jsx(OI,{children:d.jsxs(he.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.7},children:[d.jsxs(NI,{children:[d.jsx(wg,{})," Documento Legal"]}),d.jsx(LI,{children:"Termos de Uso"}),d.jsx(zI,{children:"Leia com atenção as condições que regem o uso da plataforma Innova Solutions."}),d.jsxs(PI,{children:[d.jsxs(Pb,{children:[d.jsx(cl,{})," Última atualização: Maio de 2026"]}),d.jsxs(Pb,{children:[d.jsx(b6,{})," ",pm.length," seções"]})]})]})}),d.jsxs(II,{children:[d.jsx(he.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:d.jsxs($I,{children:[d.jsx(UI,{children:"Índice"}),d.jsx(BI,{children:pm.map((e,t)=>d.jsx(VI,{children:d.jsxs("a",{href:`#${e.id}`,children:[t+1,". ",e.title]})},e.id))})]})}),d.jsx(he.div,{variants:ZI,initial:"hidden",animate:"visible",children:pm.map((e,t)=>d.jsx(he.div,{variants:QI,children:d.jsxs(HI,{id:e.id,children:[d.jsxs(FI,{children:[d.jsx(qI,{children:t+1}),d.jsx(GI,{children:e.title})]}),d.jsx(YI,{children:e.text}),e.highlight&&d.jsx(KI,{children:e.highlight})]})},e.id))}),d.jsx(he.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.8},children:d.jsxs(XI,{children:[d.jsx("p",{children:"Dúvidas sobre nossos termos? Entre em contato."}),d.jsx("p",{children:d.jsxs("a",{href:"mailto:contato@innovasolutions.com.br",children:[d.jsx(pr,{style:{marginRight:"6px",verticalAlign:"middle"}}),"contato@innovasolutions.com.br"]})}),d.jsx("p",{style:{marginTop:"1rem",fontSize:"0.8rem",opacity:.6},children:"© 2026 Innova Solutions. Todos os direitos reservados."})]})})]})]}),JI=e=>{const t=T.useRef();return T.useEffect(()=>{const r=s=>{t.current&&!t.current.contains(s.target)&&e()};return document.addEventListener("mousedown",r),()=>document.removeEventListener("mousedown",r)},[e]),t},e$=S.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
`,t$=S.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  
  @media (max-width: ${b.breakpoints.mobile}) {
    display: none;
  }
`,n$=S.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${b.colors.text};
  line-height: 1.2;
`,i$=S.span`
  font-size: 0.75rem;
  color: green;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 4px;
  
  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: green;
    animation: pulse 2s ease-in-out infinite;
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`,r$=S.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${e=>e.$hasImage?"transparent":b.colors.primary};
  color: ${b.colors.white};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 2px 8px rgba(205, 160, 155, 0.3);
  overflow: hidden;
  padding: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    background: ${e=>e.$hasImage?"transparent":b.colors.primaryLight};
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(205, 160, 155, 0.4);
  }

  svg {
    font-size: 16px;
  }
`,Ib=S.div`
  position: absolute;
  top: 50px;
  right: 0;
  background: ${b.colors.white};
  border-radius: 8px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  min-width: 150px;
  z-index: 1001;
  overflow: hidden;
  border: 1px solid ${b.colors.lightGray};
`,Pr=S.button`
  width: 100%;
  padding: 12px 16px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  color: ${b.colors.text};
  font-weight: 500;
  transition: background 0.2s;

  &:hover {
    background: ${b.colors.lightGray};
    color: ${b.colors.primary};
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${b.colors.lightGray};
  }
`,a$=()=>{const[e,t]=T.useState(!1),{isAuthenticated:r,user:s,dbUser:l,userStores:c,logout:f}=Ai(),p=Si(),m=JI(()=>t(!1)),g=()=>{t(!1),p("/login")},y=()=>{t(!1),p("/registro")},x=()=>{f(),t(!1),qe.success("Conta desconectada com sucesso!"),p("/")};return d.jsxs(e$,{ref:m,children:[r&&d.jsxs(t$,{children:[d.jsx(n$,{children:s?.displayName}),d.jsx(i$,{children:"Conectado"})]}),d.jsx(r$,{onClick:()=>t(!e),title:r?s?.displayName:"Menu do usuário",$hasImage:!!s?.photoURL,children:r&&s?.photoURL?d.jsx("img",{src:s.photoURL,alt:s.displayName}):d.jsx(Ru,{})}),e&&!r&&d.jsxs(Ib,{children:[d.jsx(Pr,{onClick:g,children:"Entrar"}),d.jsx(Pr,{onClick:y,children:"Criar conta"})]}),e&&r&&d.jsxs(Ib,{children:[l?.role==="ADMIN"&&d.jsxs(Pr,{onClick:()=>{t(!1),p("/admin")},children:[d.jsx(T6,{style:{marginRight:"8px"}}),"Painel Administrativo"]}),d.jsx(Pr,{onClick:()=>{t(!1),p("/perfil")},children:"Meu Perfil"}),c?.length>0&&d.jsxs(Pr,{onClick:()=>{t(!1),p("/minhas-lojas")},children:[d.jsx(Yo,{style:{marginRight:"8px"}}),"Minhas Lojas"]}),d.jsxs(Pr,{onClick:()=>{t(!1),p("/meus-cupons")},children:[d.jsx(Qr,{style:{marginRight:"8px"}}),"Meus Cupons"]}),d.jsxs(Pr,{onClick:x,children:[d.jsx(kN,{style:{marginRight:"8px"}}),"Sair"]})]})]})},s$=()=>{const e=An();return d.jsxs(qN,{children:[d.jsx(A6,{as:Kt,to:"/",children:"Innova Solutions"}),d.jsx(GN,{children:d.jsxs(YN,{children:[d.jsx($c,{as:Kt,to:"/",className:e.pathname==="/"?"active":"",children:"Início"}),d.jsx($c,{as:Kt,to:"/cupons",className:e.pathname==="/cupons"?"active":"",children:"Cupons"}),d.jsx($c,{as:Kt,to:"/lojas",className:e.pathname==="/lojas"?"active":"",children:"Lojas"}),d.jsx($c,{as:Kt,to:"/cadastro-parceiro",className:e.pathname==="/cadastro-parceiro"?"active":"",children:"Seja Parceiro"})]})}),d.jsx(KN,{children:d.jsx(a$,{})})]})},o$=S.footer`
  background: #CDA09B;
  color: white;
  padding: 3rem 0 1.5rem;
  margin-top: auto;
`,l$=S.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: ${b.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`,c$=S.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 2rem;
  
  @media (max-width: ${b.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`,$b=S.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Ub=S.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 30px;
    height: 2px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 1px;
    
    @media (max-width: ${b.breakpoints.mobile}) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`,op=S.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  padding: 0.5rem 0;
  
  &:hover {
    color: white;
    transform: translateX(5px);
  }
  
  @media (max-width: ${b.breakpoints.mobile}) {
    justify-content: center;
  }
`,Bb=S.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  transition: all 0.3s ease;
  
  ${op}:hover & {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
  }
`,gm=S.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  padding: 0.25rem 0;
  
  &:hover {
    color: white;
    transform: translateX(5px);
  }
  
  svg {
    opacity: 0.7;
    transition: opacity 0.3s ease;
  }
  
  &:hover svg {
    opacity: 1;
  }
  
  @media (max-width: ${b.breakpoints.mobile}) {
    justify-content: center;
  }
`,u$=S.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin: 2rem 0 1.5rem;
`,d$=S.p`
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  margin: 0;
  padding: 1rem 0;
`,f$=()=>{const e={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.6,staggerChildren:.1}}},t={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.4}}};return d.jsx(o$,{as:he.footer,variants:e,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:d.jsxs(l$,{children:[d.jsxs(c$,{children:[d.jsxs($b,{as:he.div,variants:t,children:[d.jsx(Ub,{children:"Contato"}),d.jsxs(op,{href:"tel:+5511999999999",children:[d.jsx(Bb,{children:d.jsx(MR,{size:16})}),"(11) 99999-9999"]}),d.jsxs(op,{href:"mailto:contato@innovasolutions.com",children:[d.jsx(Bb,{children:d.jsx(CR,{size:16})}),"contato@innovasolutions.com"]})]}),d.jsxs($b,{as:he.div,variants:t,children:[d.jsx(Ub,{children:"Links Úteis"}),d.jsxs(gm,{as:Kt,to:"/termos-de-uso",children:[d.jsx(wR,{size:14}),"Termos de Uso"]}),d.jsxs(gm,{as:Kt,to:"/politica-de-privacidade",children:[d.jsx(LR,{size:14}),"Política de Privacidade"]}),d.jsxs(gm,{as:Kt,to:"/sobre",children:[d.jsx(ER,{size:14}),"Sobre Nós"]})]})]}),d.jsx(u$,{as:he.div,variants:t}),d.jsx(d$,{as:he.p,variants:t,children:"© 2026 Innova Solutions - Todos os direitos reservados"})]})})},So=({children:e})=>{const{isAuthenticated:t,loading:r}=Ai();return r?d.jsx("div",{children:"Carregando..."}):t?e:d.jsx(bm,{to:"/login",replace:!0})},h$=({children:e})=>{const{isAuthenticated:t,dbUser:r,loading:s}=Ai();return s?d.jsx("div",{children:"Carregando..."}):t?!r||r.role!=="ADMIN"?d.jsx(bm,{to:"/",replace:!0}):e:d.jsx(bm,{to:"/login",replace:!0})},m$=S.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,p$=({children:e})=>{const t=An(),r=["/login","/registro","/esqueceu-senha","/cadastro-parceiro"].includes(t.pathname);return T.useEffect(()=>{window.scrollTo(0,0)},[t.pathname]),d.jsxs(m$,{children:[!r&&d.jsx(s$,{}),e,!r&&d.jsx(f$,{})]})},g$=()=>d.jsx(y8,{children:d.jsx(p$,{children:d.jsxs(KT,{children:[d.jsx(bt,{path:"/",element:d.jsx(pN,{})}),d.jsx(bt,{path:"/cupons",element:d.jsx(_L,{})}),d.jsx(bt,{path:"/meus-cupons",element:d.jsx(So,{children:d.jsx(VL,{})})}),d.jsx(bt,{path:"/login",element:d.jsx(eb,{})}),d.jsx(bt,{path:"/registro",element:d.jsx(eb,{})}),d.jsx(bt,{path:"/esqueceu-senha",element:d.jsx(aL,{})}),d.jsx(bt,{path:"/perfil",element:d.jsx(So,{children:d.jsx(Qz,{})})}),d.jsx(bt,{path:"/cadastro-parceiro",element:d.jsx(So,{children:d.jsx(mz,{})})}),d.jsx(bt,{path:"/admin",element:d.jsx(h$,{children:d.jsx(Lz,{})})}),d.jsx(bt,{path:"/lojas",element:d.jsx(DI,{})}),d.jsx(bt,{path:"/termos-de-uso",element:d.jsx(WI,{})}),d.jsx(bt,{path:"/politica-de-privacidade",element:d.jsx(fI,{})}),d.jsx(bt,{path:"/sobre",element:d.jsx(gI,{})}),d.jsx(bt,{path:"/minhas-lojas",element:d.jsx(So,{children:d.jsx(FP,{})})}),d.jsx(bt,{path:"/minha-loja/:id",element:d.jsx(So,{children:d.jsx(jP,{})})})]})})}),y$=U7`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Playfair+Display:wght@400;700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${b.fonts.primary};
    background-color: ${b.colors.white};
    color: ${b.colors.text};
    line-height: 1.6;
  }

  html {
    scroll-behavior: smooth;
  }
`;gE.createRoot(document.getElementById("root")).render(d.jsxs(T.StrictMode,{children:[d.jsx(y$,{}),d.jsx(up,{position:"top-right"}),d.jsx(zO,{children:d.jsx(g$,{})})]}));
