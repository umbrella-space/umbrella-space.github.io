var Dm=t=>{throw TypeError(t)};var qu=(t,e,n)=>e.has(t)||Dm("Cannot "+n);var te=(t,e,n)=>(qu(t,e,"read from private field"),n?n.call(t):e.get(t)),ot=(t,e,n)=>e.has(t)?Dm("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),Xe=(t,e,n,i)=>(qu(t,e,"write to private field"),i?i.call(t,n):e.set(t,n),n),Xt=(t,e,n)=>(qu(t,e,"access private method"),n);var Sl=(t,e,n,i)=>({set _(r){Xe(t,e,r,n)},get _(){return te(t,e,i)}});function lE(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const o=Object.getOwnPropertyDescriptor(i,r);o&&Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function b0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var C0={exports:{}},mu={},A0={exports:{}},qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rl=Symbol.for("react.element"),cE=Symbol.for("react.portal"),uE=Symbol.for("react.fragment"),dE=Symbol.for("react.strict_mode"),fE=Symbol.for("react.profiler"),hE=Symbol.for("react.provider"),pE=Symbol.for("react.context"),mE=Symbol.for("react.forward_ref"),gE=Symbol.for("react.suspense"),vE=Symbol.for("react.memo"),_E=Symbol.for("react.lazy"),Nm=Symbol.iterator;function xE(t){return t===null||typeof t!="object"?null:(t=Nm&&t[Nm]||t["@@iterator"],typeof t=="function"?t:null)}var R0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P0=Object.assign,L0={};function Ws(t,e,n){this.props=t,this.context=e,this.refs=L0,this.updater=n||R0}Ws.prototype.isReactComponent={};Ws.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ws.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function D0(){}D0.prototype=Ws.prototype;function op(t,e,n){this.props=t,this.context=e,this.refs=L0,this.updater=n||R0}var sp=op.prototype=new D0;sp.constructor=op;P0(sp,Ws.prototype);sp.isPureReactComponent=!0;var Im=Array.isArray,N0=Object.prototype.hasOwnProperty,ap={current:null},I0={key:!0,ref:!0,__self:!0,__source:!0};function U0(t,e,n){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)N0.call(e,i)&&!I0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:rl,type:t,key:o,ref:s,props:r,_owner:ap.current}}function yE(t,e){return{$$typeof:rl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function lp(t){return typeof t=="object"&&t!==null&&t.$$typeof===rl}function SE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Um=/\/+/g;function Ku(t,e){return typeof t=="object"&&t!==null&&t.key!=null?SE(""+t.key):e.toString(36)}function pc(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case rl:case cE:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+Ku(s,0):i,Im(r)?(n="",t!=null&&(n=t.replace(Um,"$&/")+"/"),pc(r,e,n,"",function(c){return c})):r!=null&&(lp(r)&&(r=yE(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(Um,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",Im(t))for(var a=0;a<t.length;a++){o=t[a];var l=i+Ku(o,a);s+=pc(o,e,n,l,r)}else if(l=xE(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=i+Ku(o,a++),s+=pc(o,e,n,l,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function El(t,e,n){if(t==null)return t;var i=[],r=0;return pc(t,i,"","",function(o){return e.call(n,o,r++)}),i}function EE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var an={current:null},mc={transition:null},ME={ReactCurrentDispatcher:an,ReactCurrentBatchConfig:mc,ReactCurrentOwner:ap};function F0(){throw Error("act(...) is not supported in production builds of React.")}qe.Children={map:El,forEach:function(t,e,n){El(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return El(t,function(){e++}),e},toArray:function(t){return El(t,function(e){return e})||[]},only:function(t){if(!lp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};qe.Component=Ws;qe.Fragment=uE;qe.Profiler=fE;qe.PureComponent=op;qe.StrictMode=dE;qe.Suspense=gE;qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ME;qe.act=F0;qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=P0({},t.props),r=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=ap.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)N0.call(e,l)&&!I0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:rl,type:t.type,key:r,ref:o,props:i,_owner:s}};qe.createContext=function(t){return t={$$typeof:pE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:hE,_context:t},t.Consumer=t};qe.createElement=U0;qe.createFactory=function(t){var e=U0.bind(null,t);return e.type=t,e};qe.createRef=function(){return{current:null}};qe.forwardRef=function(t){return{$$typeof:mE,render:t}};qe.isValidElement=lp;qe.lazy=function(t){return{$$typeof:_E,_payload:{_status:-1,_result:t},_init:EE}};qe.memo=function(t,e){return{$$typeof:vE,type:t,compare:e===void 0?null:e}};qe.startTransition=function(t){var e=mc.transition;mc.transition={};try{t()}finally{mc.transition=e}};qe.unstable_act=F0;qe.useCallback=function(t,e){return an.current.useCallback(t,e)};qe.useContext=function(t){return an.current.useContext(t)};qe.useDebugValue=function(){};qe.useDeferredValue=function(t){return an.current.useDeferredValue(t)};qe.useEffect=function(t,e){return an.current.useEffect(t,e)};qe.useId=function(){return an.current.useId()};qe.useImperativeHandle=function(t,e,n){return an.current.useImperativeHandle(t,e,n)};qe.useInsertionEffect=function(t,e){return an.current.useInsertionEffect(t,e)};qe.useLayoutEffect=function(t,e){return an.current.useLayoutEffect(t,e)};qe.useMemo=function(t,e){return an.current.useMemo(t,e)};qe.useReducer=function(t,e,n){return an.current.useReducer(t,e,n)};qe.useRef=function(t){return an.current.useRef(t)};qe.useState=function(t){return an.current.useState(t)};qe.useSyncExternalStore=function(t,e,n){return an.current.useSyncExternalStore(t,e,n)};qe.useTransition=function(){return an.current.useTransition()};qe.version="18.3.1";A0.exports=qe;var L=A0.exports;const fe=b0(L),wE=lE({__proto__:null,default:fe},[L]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var TE=L,bE=Symbol.for("react.element"),CE=Symbol.for("react.fragment"),AE=Object.prototype.hasOwnProperty,RE=TE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,PE={key:!0,ref:!0,__self:!0,__source:!0};function O0(t,e,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)AE.call(e,i)&&!PE.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:bE,type:t,key:o,ref:s,props:r,_owner:RE.current}}mu.Fragment=CE;mu.jsx=O0;mu.jsxs=O0;C0.exports=mu;var N=C0.exports,k0={exports:{}},Ln={},B0={exports:{}},z0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,G){var Q=P.length;P.push(G);e:for(;0<Q;){var Z=Q-1>>>1,ce=P[Z];if(0<r(ce,G))P[Z]=G,P[Q]=ce,Q=Z;else break e}}function n(P){return P.length===0?null:P[0]}function i(P){if(P.length===0)return null;var G=P[0],Q=P.pop();if(Q!==G){P[0]=Q;e:for(var Z=0,ce=P.length,we=ce>>>1;Z<we;){var q=2*(Z+1)-1,oe=P[q],le=q+1,de=P[le];if(0>r(oe,Q))le<ce&&0>r(de,oe)?(P[Z]=de,P[le]=Q,Z=le):(P[Z]=oe,P[q]=Q,Z=q);else if(le<ce&&0>r(de,Q))P[Z]=de,P[le]=Q,Z=le;else break e}}return G}function r(P,G){var Q=P.sortIndex-G.sortIndex;return Q!==0?Q:P.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],c=[],d=1,f=null,u=3,p=!1,g=!1,v=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(P){for(var G=n(c);G!==null;){if(G.callback===null)i(c);else if(G.startTime<=P)i(c),G.sortIndex=G.expirationTime,e(l,G);else break;G=n(c)}}function y(P){if(v=!1,x(P),!g)if(n(l)!==null)g=!0,H(T);else{var G=n(c);G!==null&&K(y,G.startTime-P)}}function T(P,G){g=!1,v&&(v=!1,h(A),A=-1),p=!0;var Q=u;try{for(x(G),f=n(l);f!==null&&(!(f.expirationTime>G)||P&&!D());){var Z=f.callback;if(typeof Z=="function"){f.callback=null,u=f.priorityLevel;var ce=Z(f.expirationTime<=G);G=t.unstable_now(),typeof ce=="function"?f.callback=ce:f===n(l)&&i(l),x(G)}else i(l);f=n(l)}if(f!==null)var we=!0;else{var q=n(c);q!==null&&K(y,q.startTime-G),we=!1}return we}finally{f=null,u=Q,p=!1}}var C=!1,b=null,A=-1,M=5,S=-1;function D(){return!(t.unstable_now()-S<M)}function k(){if(b!==null){var P=t.unstable_now();S=P;var G=!0;try{G=b(!0,P)}finally{G?z():(C=!1,b=null)}}else C=!1}var z;if(typeof _=="function")z=function(){_(k)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,$=B.port2;B.port1.onmessage=k,z=function(){$.postMessage(null)}}else z=function(){m(k,0)};function H(P){b=P,C||(C=!0,z())}function K(P,G){A=m(function(){P(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,H(T))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(u){case 1:case 2:case 3:var G=3;break;default:G=u}var Q=u;u=G;try{return P()}finally{u=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,G){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var Q=u;u=P;try{return G()}finally{u=Q}},t.unstable_scheduleCallback=function(P,G,Q){var Z=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?Z+Q:Z):Q=Z,P){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=Q+ce,P={id:d++,callback:G,priorityLevel:P,startTime:Q,expirationTime:ce,sortIndex:-1},Q>Z?(P.sortIndex=Q,e(c,P),n(l)===null&&P===n(c)&&(v?(h(A),A=-1):v=!0,K(y,Q-Z))):(P.sortIndex=ce,e(l,P),g||p||(g=!0,H(T))),P},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(P){var G=u;return function(){var Q=u;u=G;try{return P.apply(this,arguments)}finally{u=Q}}}})(z0);B0.exports=z0;var LE=B0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var DE=L,Pn=LE;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var H0=new Set,Pa={};function Ro(t,e){As(t,e),As(t+"Capture",e)}function As(t,e){for(Pa[t]=e,t=0;t<e.length;t++)H0.add(e[t])}var Wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),af=Object.prototype.hasOwnProperty,NE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fm={},Om={};function IE(t){return af.call(Om,t)?!0:af.call(Fm,t)?!1:NE.test(t)?Om[t]=!0:(Fm[t]=!0,!1)}function UE(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function FE(t,e,n,i){if(e===null||typeof e>"u"||UE(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ln(t,e,n,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Wt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Wt[t]=new ln(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Wt[e]=new ln(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Wt[t]=new ln(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Wt[t]=new ln(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Wt[t]=new ln(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Wt[t]=new ln(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Wt[t]=new ln(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Wt[t]=new ln(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Wt[t]=new ln(t,5,!1,t.toLowerCase(),null,!1,!1)});var cp=/[\-:]([a-z])/g;function up(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(cp,up);Wt[e]=new ln(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(cp,up);Wt[e]=new ln(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(cp,up);Wt[e]=new ln(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Wt[t]=new ln(t,1,!1,t.toLowerCase(),null,!1,!1)});Wt.xlinkHref=new ln("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Wt[t]=new ln(t,1,!1,t.toLowerCase(),null,!0,!0)});function dp(t,e,n,i){var r=Wt.hasOwnProperty(e)?Wt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(FE(e,n,r,i)&&(n=null),i||r===null?IE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Zi=DE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ml=Symbol.for("react.element"),qo=Symbol.for("react.portal"),Ko=Symbol.for("react.fragment"),fp=Symbol.for("react.strict_mode"),lf=Symbol.for("react.profiler"),V0=Symbol.for("react.provider"),G0=Symbol.for("react.context"),hp=Symbol.for("react.forward_ref"),cf=Symbol.for("react.suspense"),uf=Symbol.for("react.suspense_list"),pp=Symbol.for("react.memo"),ur=Symbol.for("react.lazy"),W0=Symbol.for("react.offscreen"),km=Symbol.iterator;function ea(t){return t===null||typeof t!="object"?null:(t=km&&t[km]||t["@@iterator"],typeof t=="function"?t:null)}var yt=Object.assign,Qu;function ma(t){if(Qu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Qu=e&&e[1]||""}return`
`+Qu+t}var Zu=!1;function Ju(t,e){if(!t||Zu)return"";Zu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{Zu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ma(t):""}function OE(t){switch(t.tag){case 5:return ma(t.type);case 16:return ma("Lazy");case 13:return ma("Suspense");case 19:return ma("SuspenseList");case 0:case 2:case 15:return t=Ju(t.type,!1),t;case 11:return t=Ju(t.type.render,!1),t;case 1:return t=Ju(t.type,!0),t;default:return""}}function df(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ko:return"Fragment";case qo:return"Portal";case lf:return"Profiler";case fp:return"StrictMode";case cf:return"Suspense";case uf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case G0:return(t.displayName||"Context")+".Consumer";case V0:return(t._context.displayName||"Context")+".Provider";case hp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case pp:return e=t.displayName||null,e!==null?e:df(t.type)||"Memo";case ur:e=t._payload,t=t._init;try{return df(t(e))}catch{}}return null}function kE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return df(e);case 8:return e===fp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ir(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function j0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function BE(t){var e=j0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function wl(t){t._valueTracker||(t._valueTracker=BE(t))}function X0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=j0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Uc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ff(t,e){var n=e.checked;return yt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Bm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ir(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function $0(t,e){e=e.checked,e!=null&&dp(t,"checked",e,!1)}function hf(t,e){$0(t,e);var n=Ir(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?pf(t,e.type,n):e.hasOwnProperty("defaultValue")&&pf(t,e.type,Ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function zm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function pf(t,e,n){(e!=="number"||Uc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ga=Array.isArray;function ls(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ir(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function mf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return yt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Hm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(ga(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ir(n)}}function Y0(t,e){var n=Ir(e.value),i=Ir(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Vm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function q0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?q0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Tl,K0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Tl=Tl||document.createElement("div"),Tl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Tl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function La(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ya={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zE=["Webkit","ms","Moz","O"];Object.keys(ya).forEach(function(t){zE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ya[e]=ya[t]})});function Q0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ya.hasOwnProperty(t)&&ya[t]?(""+e).trim():e+"px"}function Z0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Q0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var HE=yt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vf(t,e){if(e){if(HE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function _f(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xf=null;function mp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var yf=null,cs=null,us=null;function Gm(t){if(t=al(t)){if(typeof yf!="function")throw Error(se(280));var e=t.stateNode;e&&(e=yu(e),yf(t.stateNode,t.type,e))}}function J0(t){cs?us?us.push(t):us=[t]:cs=t}function e_(){if(cs){var t=cs,e=us;if(us=cs=null,Gm(t),e)for(t=0;t<e.length;t++)Gm(e[t])}}function t_(t,e){return t(e)}function n_(){}var ed=!1;function i_(t,e,n){if(ed)return t(e,n);ed=!0;try{return t_(t,e,n)}finally{ed=!1,(cs!==null||us!==null)&&(n_(),e_())}}function Da(t,e){var n=t.stateNode;if(n===null)return null;var i=yu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var Sf=!1;if(Wi)try{var ta={};Object.defineProperty(ta,"passive",{get:function(){Sf=!0}}),window.addEventListener("test",ta,ta),window.removeEventListener("test",ta,ta)}catch{Sf=!1}function VE(t,e,n,i,r,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Sa=!1,Fc=null,Oc=!1,Ef=null,GE={onError:function(t){Sa=!0,Fc=t}};function WE(t,e,n,i,r,o,s,a,l){Sa=!1,Fc=null,VE.apply(GE,arguments)}function jE(t,e,n,i,r,o,s,a,l){if(WE.apply(this,arguments),Sa){if(Sa){var c=Fc;Sa=!1,Fc=null}else throw Error(se(198));Oc||(Oc=!0,Ef=c)}}function Po(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function r_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Wm(t){if(Po(t)!==t)throw Error(se(188))}function XE(t){var e=t.alternate;if(!e){if(e=Po(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return Wm(r),t;if(o===i)return Wm(r),e;o=o.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function o_(t){return t=XE(t),t!==null?s_(t):null}function s_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=s_(t);if(e!==null)return e;t=t.sibling}return null}var a_=Pn.unstable_scheduleCallback,jm=Pn.unstable_cancelCallback,$E=Pn.unstable_shouldYield,YE=Pn.unstable_requestPaint,Tt=Pn.unstable_now,qE=Pn.unstable_getCurrentPriorityLevel,gp=Pn.unstable_ImmediatePriority,l_=Pn.unstable_UserBlockingPriority,kc=Pn.unstable_NormalPriority,KE=Pn.unstable_LowPriority,c_=Pn.unstable_IdlePriority,gu=null,yi=null;function QE(t){if(yi&&typeof yi.onCommitFiberRoot=="function")try{yi.onCommitFiberRoot(gu,t,void 0,(t.current.flags&128)===128)}catch{}}var oi=Math.clz32?Math.clz32:eM,ZE=Math.log,JE=Math.LN2;function eM(t){return t>>>=0,t===0?32:31-(ZE(t)/JE|0)|0}var bl=64,Cl=4194304;function va(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Bc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?i=va(a):(o&=s,o!==0&&(i=va(o)))}else s=n&~r,s!==0?i=va(s):o!==0&&(i=va(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-oi(e),r=1<<n,i|=t[n],e&=~r;return i}function tM(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nM(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-oi(o),a=1<<s,l=r[s];l===-1?(!(a&n)||a&i)&&(r[s]=tM(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Mf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function u_(){var t=bl;return bl<<=1,!(bl&4194240)&&(bl=64),t}function td(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ol(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-oi(e),t[e]=n}function iM(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-oi(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function vp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-oi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var lt=0;function d_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var f_,_p,h_,p_,m_,wf=!1,Al=[],Mr=null,wr=null,Tr=null,Na=new Map,Ia=new Map,fr=[],rM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xm(t,e){switch(t){case"focusin":case"focusout":Mr=null;break;case"dragenter":case"dragleave":wr=null;break;case"mouseover":case"mouseout":Tr=null;break;case"pointerover":case"pointerout":Na.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ia.delete(e.pointerId)}}function na(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=al(e),e!==null&&_p(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function oM(t,e,n,i,r){switch(e){case"focusin":return Mr=na(Mr,t,e,n,i,r),!0;case"dragenter":return wr=na(wr,t,e,n,i,r),!0;case"mouseover":return Tr=na(Tr,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return Na.set(o,na(Na.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,Ia.set(o,na(Ia.get(o)||null,t,e,n,i,r)),!0}return!1}function g_(t){var e=ao(t.target);if(e!==null){var n=Po(e);if(n!==null){if(e=n.tag,e===13){if(e=r_(n),e!==null){t.blockedOn=e,m_(t.priority,function(){h_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function gc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Tf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);xf=i,n.target.dispatchEvent(i),xf=null}else return e=al(n),e!==null&&_p(e),t.blockedOn=n,!1;e.shift()}return!0}function $m(t,e,n){gc(t)&&n.delete(e)}function sM(){wf=!1,Mr!==null&&gc(Mr)&&(Mr=null),wr!==null&&gc(wr)&&(wr=null),Tr!==null&&gc(Tr)&&(Tr=null),Na.forEach($m),Ia.forEach($m)}function ia(t,e){t.blockedOn===e&&(t.blockedOn=null,wf||(wf=!0,Pn.unstable_scheduleCallback(Pn.unstable_NormalPriority,sM)))}function Ua(t){function e(r){return ia(r,t)}if(0<Al.length){ia(Al[0],t);for(var n=1;n<Al.length;n++){var i=Al[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Mr!==null&&ia(Mr,t),wr!==null&&ia(wr,t),Tr!==null&&ia(Tr,t),Na.forEach(e),Ia.forEach(e),n=0;n<fr.length;n++)i=fr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<fr.length&&(n=fr[0],n.blockedOn===null);)g_(n),n.blockedOn===null&&fr.shift()}var ds=Zi.ReactCurrentBatchConfig,zc=!0;function aM(t,e,n,i){var r=lt,o=ds.transition;ds.transition=null;try{lt=1,xp(t,e,n,i)}finally{lt=r,ds.transition=o}}function lM(t,e,n,i){var r=lt,o=ds.transition;ds.transition=null;try{lt=4,xp(t,e,n,i)}finally{lt=r,ds.transition=o}}function xp(t,e,n,i){if(zc){var r=Tf(t,e,n,i);if(r===null)dd(t,e,i,Hc,n),Xm(t,i);else if(oM(r,t,e,n,i))i.stopPropagation();else if(Xm(t,i),e&4&&-1<rM.indexOf(t)){for(;r!==null;){var o=al(r);if(o!==null&&f_(o),o=Tf(t,e,n,i),o===null&&dd(t,e,i,Hc,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else dd(t,e,i,null,n)}}var Hc=null;function Tf(t,e,n,i){if(Hc=null,t=mp(i),t=ao(t),t!==null)if(e=Po(t),e===null)t=null;else if(n=e.tag,n===13){if(t=r_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Hc=t,null}function v_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qE()){case gp:return 1;case l_:return 4;case kc:case KE:return 16;case c_:return 536870912;default:return 16}default:return 16}}var yr=null,yp=null,vc=null;function __(){if(vc)return vc;var t,e=yp,n=e.length,i,r="value"in yr?yr.value:yr.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[o-i];i++);return vc=r.slice(t,1<i?1-i:void 0)}function _c(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Rl(){return!0}function Ym(){return!1}function Dn(t){function e(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Rl:Ym,this.isPropagationStopped=Ym,this}return yt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Rl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Rl)},persist:function(){},isPersistent:Rl}),e}var js={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sp=Dn(js),sl=yt({},js,{view:0,detail:0}),cM=Dn(sl),nd,id,ra,vu=yt({},sl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ep,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ra&&(ra&&t.type==="mousemove"?(nd=t.screenX-ra.screenX,id=t.screenY-ra.screenY):id=nd=0,ra=t),nd)},movementY:function(t){return"movementY"in t?t.movementY:id}}),qm=Dn(vu),uM=yt({},vu,{dataTransfer:0}),dM=Dn(uM),fM=yt({},sl,{relatedTarget:0}),rd=Dn(fM),hM=yt({},js,{animationName:0,elapsedTime:0,pseudoElement:0}),pM=Dn(hM),mM=yt({},js,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),gM=Dn(mM),vM=yt({},js,{data:0}),Km=Dn(vM),_M={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function SM(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=yM[t])?!!e[t]:!1}function Ep(){return SM}var EM=yt({},sl,{key:function(t){if(t.key){var e=_M[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=_c(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?xM[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ep,charCode:function(t){return t.type==="keypress"?_c(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?_c(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),MM=Dn(EM),wM=yt({},vu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qm=Dn(wM),TM=yt({},sl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ep}),bM=Dn(TM),CM=yt({},js,{propertyName:0,elapsedTime:0,pseudoElement:0}),AM=Dn(CM),RM=yt({},vu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),PM=Dn(RM),LM=[9,13,27,32],Mp=Wi&&"CompositionEvent"in window,Ea=null;Wi&&"documentMode"in document&&(Ea=document.documentMode);var DM=Wi&&"TextEvent"in window&&!Ea,x_=Wi&&(!Mp||Ea&&8<Ea&&11>=Ea),Zm=" ",Jm=!1;function y_(t,e){switch(t){case"keyup":return LM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function S_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qo=!1;function NM(t,e){switch(t){case"compositionend":return S_(e);case"keypress":return e.which!==32?null:(Jm=!0,Zm);case"textInput":return t=e.data,t===Zm&&Jm?null:t;default:return null}}function IM(t,e){if(Qo)return t==="compositionend"||!Mp&&y_(t,e)?(t=__(),vc=yp=yr=null,Qo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return x_&&e.locale!=="ko"?null:e.data;default:return null}}var UM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function eg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!UM[t.type]:e==="textarea"}function E_(t,e,n,i){J0(i),e=Vc(e,"onChange"),0<e.length&&(n=new Sp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ma=null,Fa=null;function FM(t){N_(t,0)}function _u(t){var e=es(t);if(X0(e))return t}function OM(t,e){if(t==="change")return e}var M_=!1;if(Wi){var od;if(Wi){var sd="oninput"in document;if(!sd){var tg=document.createElement("div");tg.setAttribute("oninput","return;"),sd=typeof tg.oninput=="function"}od=sd}else od=!1;M_=od&&(!document.documentMode||9<document.documentMode)}function ng(){Ma&&(Ma.detachEvent("onpropertychange",w_),Fa=Ma=null)}function w_(t){if(t.propertyName==="value"&&_u(Fa)){var e=[];E_(e,Fa,t,mp(t)),i_(FM,e)}}function kM(t,e,n){t==="focusin"?(ng(),Ma=e,Fa=n,Ma.attachEvent("onpropertychange",w_)):t==="focusout"&&ng()}function BM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return _u(Fa)}function zM(t,e){if(t==="click")return _u(e)}function HM(t,e){if(t==="input"||t==="change")return _u(e)}function VM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var li=typeof Object.is=="function"?Object.is:VM;function Oa(t,e){if(li(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!af.call(e,r)||!li(t[r],e[r]))return!1}return!0}function ig(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function rg(t,e){var n=ig(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ig(n)}}function T_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?T_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function b_(){for(var t=window,e=Uc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Uc(t.document)}return e}function wp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function GM(t){var e=b_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&T_(n.ownerDocument.documentElement,n)){if(i!==null&&wp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=rg(n,o);var s=rg(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var WM=Wi&&"documentMode"in document&&11>=document.documentMode,Zo=null,bf=null,wa=null,Cf=!1;function og(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Cf||Zo==null||Zo!==Uc(i)||(i=Zo,"selectionStart"in i&&wp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),wa&&Oa(wa,i)||(wa=i,i=Vc(bf,"onSelect"),0<i.length&&(e=new Sp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Zo)))}function Pl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Jo={animationend:Pl("Animation","AnimationEnd"),animationiteration:Pl("Animation","AnimationIteration"),animationstart:Pl("Animation","AnimationStart"),transitionend:Pl("Transition","TransitionEnd")},ad={},C_={};Wi&&(C_=document.createElement("div").style,"AnimationEvent"in window||(delete Jo.animationend.animation,delete Jo.animationiteration.animation,delete Jo.animationstart.animation),"TransitionEvent"in window||delete Jo.transitionend.transition);function xu(t){if(ad[t])return ad[t];if(!Jo[t])return t;var e=Jo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in C_)return ad[t]=e[n];return t}var A_=xu("animationend"),R_=xu("animationiteration"),P_=xu("animationstart"),L_=xu("transitionend"),D_=new Map,sg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vr(t,e){D_.set(t,e),Ro(e,[t])}for(var ld=0;ld<sg.length;ld++){var cd=sg[ld],jM=cd.toLowerCase(),XM=cd[0].toUpperCase()+cd.slice(1);Vr(jM,"on"+XM)}Vr(A_,"onAnimationEnd");Vr(R_,"onAnimationIteration");Vr(P_,"onAnimationStart");Vr("dblclick","onDoubleClick");Vr("focusin","onFocus");Vr("focusout","onBlur");Vr(L_,"onTransitionEnd");As("onMouseEnter",["mouseout","mouseover"]);As("onMouseLeave",["mouseout","mouseover"]);As("onPointerEnter",["pointerout","pointerover"]);As("onPointerLeave",["pointerout","pointerover"]);Ro("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ro("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ro("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ro("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ro("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ro("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _a="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$M=new Set("cancel close invalid load scroll toggle".split(" ").concat(_a));function ag(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,jE(i,e,void 0,t),t.currentTarget=null}function N_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break e;ag(r,a,c),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break e;ag(r,a,c),o=l}}}if(Oc)throw t=Ef,Oc=!1,Ef=null,t}function pt(t,e){var n=e[Df];n===void 0&&(n=e[Df]=new Set);var i=t+"__bubble";n.has(i)||(I_(e,t,2,!1),n.add(i))}function ud(t,e,n){var i=0;e&&(i|=4),I_(n,t,i,e)}var Ll="_reactListening"+Math.random().toString(36).slice(2);function ka(t){if(!t[Ll]){t[Ll]=!0,H0.forEach(function(n){n!=="selectionchange"&&($M.has(n)||ud(n,!1,t),ud(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ll]||(e[Ll]=!0,ud("selectionchange",!1,e))}}function I_(t,e,n,i){switch(v_(e)){case 1:var r=aM;break;case 4:r=lM;break;default:r=xp}n=r.bind(null,e,n,t),r=void 0,!Sf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function dd(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=ao(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}a=a.parentNode}}i=i.return}i_(function(){var c=o,d=mp(n),f=[];e:{var u=D_.get(t);if(u!==void 0){var p=Sp,g=t;switch(t){case"keypress":if(_c(n)===0)break e;case"keydown":case"keyup":p=MM;break;case"focusin":g="focus",p=rd;break;case"focusout":g="blur",p=rd;break;case"beforeblur":case"afterblur":p=rd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=qm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=dM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=bM;break;case A_:case R_:case P_:p=pM;break;case L_:p=AM;break;case"scroll":p=cM;break;case"wheel":p=PM;break;case"copy":case"cut":case"paste":p=gM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Qm}var v=(e&4)!==0,m=!v&&t==="scroll",h=v?u!==null?u+"Capture":null:u;v=[];for(var _=c,x;_!==null;){x=_;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,h!==null&&(y=Da(_,h),y!=null&&v.push(Ba(_,y,x)))),m)break;_=_.return}0<v.length&&(u=new p(u,g,null,n,d),f.push({event:u,listeners:v}))}}if(!(e&7)){e:{if(u=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",u&&n!==xf&&(g=n.relatedTarget||n.fromElement)&&(ao(g)||g[ji]))break e;if((p||u)&&(u=d.window===d?d:(u=d.ownerDocument)?u.defaultView||u.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?ao(g):null,g!==null&&(m=Po(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(v=qm,y="onMouseLeave",h="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(v=Qm,y="onPointerLeave",h="onPointerEnter",_="pointer"),m=p==null?u:es(p),x=g==null?u:es(g),u=new v(y,_+"leave",p,n,d),u.target=m,u.relatedTarget=x,y=null,ao(d)===c&&(v=new v(h,_+"enter",g,n,d),v.target=x,v.relatedTarget=m,y=v),m=y,p&&g)t:{for(v=p,h=g,_=0,x=v;x;x=No(x))_++;for(x=0,y=h;y;y=No(y))x++;for(;0<_-x;)v=No(v),_--;for(;0<x-_;)h=No(h),x--;for(;_--;){if(v===h||h!==null&&v===h.alternate)break t;v=No(v),h=No(h)}v=null}else v=null;p!==null&&lg(f,u,p,v,!1),g!==null&&m!==null&&lg(f,m,g,v,!0)}}e:{if(u=c?es(c):window,p=u.nodeName&&u.nodeName.toLowerCase(),p==="select"||p==="input"&&u.type==="file")var T=OM;else if(eg(u))if(M_)T=HM;else{T=BM;var C=kM}else(p=u.nodeName)&&p.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(T=zM);if(T&&(T=T(t,c))){E_(f,T,n,d);break e}C&&C(t,u,c),t==="focusout"&&(C=u._wrapperState)&&C.controlled&&u.type==="number"&&pf(u,"number",u.value)}switch(C=c?es(c):window,t){case"focusin":(eg(C)||C.contentEditable==="true")&&(Zo=C,bf=c,wa=null);break;case"focusout":wa=bf=Zo=null;break;case"mousedown":Cf=!0;break;case"contextmenu":case"mouseup":case"dragend":Cf=!1,og(f,n,d);break;case"selectionchange":if(WM)break;case"keydown":case"keyup":og(f,n,d)}var b;if(Mp)e:{switch(t){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Qo?y_(t,n)&&(A="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(x_&&n.locale!=="ko"&&(Qo||A!=="onCompositionStart"?A==="onCompositionEnd"&&Qo&&(b=__()):(yr=d,yp="value"in yr?yr.value:yr.textContent,Qo=!0)),C=Vc(c,A),0<C.length&&(A=new Km(A,t,null,n,d),f.push({event:A,listeners:C}),b?A.data=b:(b=S_(n),b!==null&&(A.data=b)))),(b=DM?NM(t,n):IM(t,n))&&(c=Vc(c,"onBeforeInput"),0<c.length&&(d=new Km("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=b))}N_(f,e)})}function Ba(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Vc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=Da(t,n),o!=null&&i.unshift(Ba(t,o,r)),o=Da(t,e),o!=null&&i.push(Ba(t,o,r))),t=t.return}return i}function No(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function lg(t,e,n,i,r){for(var o=e._reactName,s=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Da(n,o),l!=null&&s.unshift(Ba(n,l,a))):r||(l=Da(n,o),l!=null&&s.push(Ba(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var YM=/\r\n?/g,qM=/\u0000|\uFFFD/g;function cg(t){return(typeof t=="string"?t:""+t).replace(YM,`
`).replace(qM,"")}function Dl(t,e,n){if(e=cg(e),cg(t)!==e&&n)throw Error(se(425))}function Gc(){}var Af=null,Rf=null;function Pf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Lf=typeof setTimeout=="function"?setTimeout:void 0,KM=typeof clearTimeout=="function"?clearTimeout:void 0,ug=typeof Promise=="function"?Promise:void 0,QM=typeof queueMicrotask=="function"?queueMicrotask:typeof ug<"u"?function(t){return ug.resolve(null).then(t).catch(ZM)}:Lf;function ZM(t){setTimeout(function(){throw t})}function fd(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ua(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ua(e)}function br(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function dg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Xs=Math.random().toString(36).slice(2),_i="__reactFiber$"+Xs,za="__reactProps$"+Xs,ji="__reactContainer$"+Xs,Df="__reactEvents$"+Xs,JM="__reactListeners$"+Xs,ew="__reactHandles$"+Xs;function ao(t){var e=t[_i];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ji]||n[_i]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=dg(t);t!==null;){if(n=t[_i])return n;t=dg(t)}return e}t=n,n=t.parentNode}return null}function al(t){return t=t[_i]||t[ji],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function es(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function yu(t){return t[za]||null}var Nf=[],ts=-1;function Gr(t){return{current:t}}function mt(t){0>ts||(t.current=Nf[ts],Nf[ts]=null,ts--)}function ft(t,e){ts++,Nf[ts]=t.current,t.current=e}var Ur={},Jt=Gr(Ur),hn=Gr(!1),yo=Ur;function Rs(t,e){var n=t.type.contextTypes;if(!n)return Ur;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function pn(t){return t=t.childContextTypes,t!=null}function Wc(){mt(hn),mt(Jt)}function fg(t,e,n){if(Jt.current!==Ur)throw Error(se(168));ft(Jt,e),ft(hn,n)}function U_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,kE(t)||"Unknown",r));return yt({},n,i)}function jc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ur,yo=Jt.current,ft(Jt,t),ft(hn,hn.current),!0}function hg(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=U_(t,e,yo),i.__reactInternalMemoizedMergedChildContext=t,mt(hn),mt(Jt),ft(Jt,t)):mt(hn),ft(hn,n)}var Ui=null,Su=!1,hd=!1;function F_(t){Ui===null?Ui=[t]:Ui.push(t)}function tw(t){Su=!0,F_(t)}function Wr(){if(!hd&&Ui!==null){hd=!0;var t=0,e=lt;try{var n=Ui;for(lt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ui=null,Su=!1}catch(r){throw Ui!==null&&(Ui=Ui.slice(t+1)),a_(gp,Wr),r}finally{lt=e,hd=!1}}return null}var ns=[],is=0,Xc=null,$c=0,kn=[],Bn=0,So=null,Oi=1,ki="";function to(t,e){ns[is++]=$c,ns[is++]=Xc,Xc=t,$c=e}function O_(t,e,n){kn[Bn++]=Oi,kn[Bn++]=ki,kn[Bn++]=So,So=t;var i=Oi;t=ki;var r=32-oi(i)-1;i&=~(1<<r),n+=1;var o=32-oi(e)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,Oi=1<<32-oi(e)+r|n<<r|i,ki=o+t}else Oi=1<<o|n<<r|i,ki=t}function Tp(t){t.return!==null&&(to(t,1),O_(t,1,0))}function bp(t){for(;t===Xc;)Xc=ns[--is],ns[is]=null,$c=ns[--is],ns[is]=null;for(;t===So;)So=kn[--Bn],kn[Bn]=null,ki=kn[--Bn],kn[Bn]=null,Oi=kn[--Bn],kn[Bn]=null}var An=null,Cn=null,vt=!1,ni=null;function k_(t,e){var n=Hn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function pg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,An=t,Cn=br(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,An=t,Cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=So!==null?{id:Oi,overflow:ki}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Hn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,An=t,Cn=null,!0):!1;default:return!1}}function If(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Uf(t){if(vt){var e=Cn;if(e){var n=e;if(!pg(t,e)){if(If(t))throw Error(se(418));e=br(n.nextSibling);var i=An;e&&pg(t,e)?k_(i,n):(t.flags=t.flags&-4097|2,vt=!1,An=t)}}else{if(If(t))throw Error(se(418));t.flags=t.flags&-4097|2,vt=!1,An=t}}}function mg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;An=t}function Nl(t){if(t!==An)return!1;if(!vt)return mg(t),vt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Pf(t.type,t.memoizedProps)),e&&(e=Cn)){if(If(t))throw B_(),Error(se(418));for(;e;)k_(t,e),e=br(e.nextSibling)}if(mg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Cn=br(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Cn=null}}else Cn=An?br(t.stateNode.nextSibling):null;return!0}function B_(){for(var t=Cn;t;)t=br(t.nextSibling)}function Ps(){Cn=An=null,vt=!1}function Cp(t){ni===null?ni=[t]:ni.push(t)}var nw=Zi.ReactCurrentBatchConfig;function oa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=r.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function Il(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function gg(t){var e=t._init;return e(t._payload)}function z_(t){function e(h,_){if(t){var x=h.deletions;x===null?(h.deletions=[_],h.flags|=16):x.push(_)}}function n(h,_){if(!t)return null;for(;_!==null;)e(h,_),_=_.sibling;return null}function i(h,_){for(h=new Map;_!==null;)_.key!==null?h.set(_.key,_):h.set(_.index,_),_=_.sibling;return h}function r(h,_){return h=Pr(h,_),h.index=0,h.sibling=null,h}function o(h,_,x){return h.index=x,t?(x=h.alternate,x!==null?(x=x.index,x<_?(h.flags|=2,_):x):(h.flags|=2,_)):(h.flags|=1048576,_)}function s(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,_,x,y){return _===null||_.tag!==6?(_=yd(x,h.mode,y),_.return=h,_):(_=r(_,x),_.return=h,_)}function l(h,_,x,y){var T=x.type;return T===Ko?d(h,_,x.props.children,y,x.key):_!==null&&(_.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ur&&gg(T)===_.type)?(y=r(_,x.props),y.ref=oa(h,_,x),y.return=h,y):(y=Tc(x.type,x.key,x.props,null,h.mode,y),y.ref=oa(h,_,x),y.return=h,y)}function c(h,_,x,y){return _===null||_.tag!==4||_.stateNode.containerInfo!==x.containerInfo||_.stateNode.implementation!==x.implementation?(_=Sd(x,h.mode,y),_.return=h,_):(_=r(_,x.children||[]),_.return=h,_)}function d(h,_,x,y,T){return _===null||_.tag!==7?(_=_o(x,h.mode,y,T),_.return=h,_):(_=r(_,x),_.return=h,_)}function f(h,_,x){if(typeof _=="string"&&_!==""||typeof _=="number")return _=yd(""+_,h.mode,x),_.return=h,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ml:return x=Tc(_.type,_.key,_.props,null,h.mode,x),x.ref=oa(h,null,_),x.return=h,x;case qo:return _=Sd(_,h.mode,x),_.return=h,_;case ur:var y=_._init;return f(h,y(_._payload),x)}if(ga(_)||ea(_))return _=_o(_,h.mode,x,null),_.return=h,_;Il(h,_)}return null}function u(h,_,x,y){var T=_!==null?_.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return T!==null?null:a(h,_,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ml:return x.key===T?l(h,_,x,y):null;case qo:return x.key===T?c(h,_,x,y):null;case ur:return T=x._init,u(h,_,T(x._payload),y)}if(ga(x)||ea(x))return T!==null?null:d(h,_,x,y,null);Il(h,x)}return null}function p(h,_,x,y,T){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(x)||null,a(_,h,""+y,T);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ml:return h=h.get(y.key===null?x:y.key)||null,l(_,h,y,T);case qo:return h=h.get(y.key===null?x:y.key)||null,c(_,h,y,T);case ur:var C=y._init;return p(h,_,x,C(y._payload),T)}if(ga(y)||ea(y))return h=h.get(x)||null,d(_,h,y,T,null);Il(_,y)}return null}function g(h,_,x,y){for(var T=null,C=null,b=_,A=_=0,M=null;b!==null&&A<x.length;A++){b.index>A?(M=b,b=null):M=b.sibling;var S=u(h,b,x[A],y);if(S===null){b===null&&(b=M);break}t&&b&&S.alternate===null&&e(h,b),_=o(S,_,A),C===null?T=S:C.sibling=S,C=S,b=M}if(A===x.length)return n(h,b),vt&&to(h,A),T;if(b===null){for(;A<x.length;A++)b=f(h,x[A],y),b!==null&&(_=o(b,_,A),C===null?T=b:C.sibling=b,C=b);return vt&&to(h,A),T}for(b=i(h,b);A<x.length;A++)M=p(b,h,A,x[A],y),M!==null&&(t&&M.alternate!==null&&b.delete(M.key===null?A:M.key),_=o(M,_,A),C===null?T=M:C.sibling=M,C=M);return t&&b.forEach(function(D){return e(h,D)}),vt&&to(h,A),T}function v(h,_,x,y){var T=ea(x);if(typeof T!="function")throw Error(se(150));if(x=T.call(x),x==null)throw Error(se(151));for(var C=T=null,b=_,A=_=0,M=null,S=x.next();b!==null&&!S.done;A++,S=x.next()){b.index>A?(M=b,b=null):M=b.sibling;var D=u(h,b,S.value,y);if(D===null){b===null&&(b=M);break}t&&b&&D.alternate===null&&e(h,b),_=o(D,_,A),C===null?T=D:C.sibling=D,C=D,b=M}if(S.done)return n(h,b),vt&&to(h,A),T;if(b===null){for(;!S.done;A++,S=x.next())S=f(h,S.value,y),S!==null&&(_=o(S,_,A),C===null?T=S:C.sibling=S,C=S);return vt&&to(h,A),T}for(b=i(h,b);!S.done;A++,S=x.next())S=p(b,h,A,S.value,y),S!==null&&(t&&S.alternate!==null&&b.delete(S.key===null?A:S.key),_=o(S,_,A),C===null?T=S:C.sibling=S,C=S);return t&&b.forEach(function(k){return e(h,k)}),vt&&to(h,A),T}function m(h,_,x,y){if(typeof x=="object"&&x!==null&&x.type===Ko&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Ml:e:{for(var T=x.key,C=_;C!==null;){if(C.key===T){if(T=x.type,T===Ko){if(C.tag===7){n(h,C.sibling),_=r(C,x.props.children),_.return=h,h=_;break e}}else if(C.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ur&&gg(T)===C.type){n(h,C.sibling),_=r(C,x.props),_.ref=oa(h,C,x),_.return=h,h=_;break e}n(h,C);break}else e(h,C);C=C.sibling}x.type===Ko?(_=_o(x.props.children,h.mode,y,x.key),_.return=h,h=_):(y=Tc(x.type,x.key,x.props,null,h.mode,y),y.ref=oa(h,_,x),y.return=h,h=y)}return s(h);case qo:e:{for(C=x.key;_!==null;){if(_.key===C)if(_.tag===4&&_.stateNode.containerInfo===x.containerInfo&&_.stateNode.implementation===x.implementation){n(h,_.sibling),_=r(_,x.children||[]),_.return=h,h=_;break e}else{n(h,_);break}else e(h,_);_=_.sibling}_=Sd(x,h.mode,y),_.return=h,h=_}return s(h);case ur:return C=x._init,m(h,_,C(x._payload),y)}if(ga(x))return g(h,_,x,y);if(ea(x))return v(h,_,x,y);Il(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,_!==null&&_.tag===6?(n(h,_.sibling),_=r(_,x),_.return=h,h=_):(n(h,_),_=yd(x,h.mode,y),_.return=h,h=_),s(h)):n(h,_)}return m}var Ls=z_(!0),H_=z_(!1),Yc=Gr(null),qc=null,rs=null,Ap=null;function Rp(){Ap=rs=qc=null}function Pp(t){var e=Yc.current;mt(Yc),t._currentValue=e}function Ff(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function fs(t,e){qc=t,Ap=rs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(fn=!0),t.firstContext=null)}function Wn(t){var e=t._currentValue;if(Ap!==t)if(t={context:t,memoizedValue:e,next:null},rs===null){if(qc===null)throw Error(se(308));rs=t,qc.dependencies={lanes:0,firstContext:t}}else rs=rs.next=t;return e}var lo=null;function Lp(t){lo===null?lo=[t]:lo.push(t)}function V_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Lp(e)):(n.next=r.next,r.next=n),e.interleaved=n,Xi(t,i)}function Xi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var dr=!1;function Dp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function G_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Vi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Cr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,et&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Xi(t,n)}return r=i.interleaved,r===null?(e.next=e,Lp(i)):(e.next=r.next,r.next=e),i.interleaved=e,Xi(t,n)}function xc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,vp(t,n)}}function vg(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Kc(t,e,n,i){var r=t.updateQueue;dr=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(o!==null){var f=r.baseState;s=0,d=c=l=null,a=o;do{var u=a.lane,p=a.eventTime;if((i&u)===u){d!==null&&(d=d.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,v=a;switch(u=e,p=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){f=g.call(p,f,u);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,u=typeof g=="function"?g.call(p,f,u):g,u==null)break e;f=yt({},f,u);break e;case 2:dr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,u=r.effects,u===null?r.effects=[a]:u.push(a))}else p={eventTime:p,lane:u,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=p,l=f):d=d.next=p,s|=u;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;u=a,a=u.next,u.next=null,r.lastBaseUpdate=u,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);Mo|=s,t.lanes=s,t.memoizedState=f}}function _g(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var ll={},Si=Gr(ll),Ha=Gr(ll),Va=Gr(ll);function co(t){if(t===ll)throw Error(se(174));return t}function Np(t,e){switch(ft(Va,e),ft(Ha,t),ft(Si,ll),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:gf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=gf(e,t)}mt(Si),ft(Si,e)}function Ds(){mt(Si),mt(Ha),mt(Va)}function W_(t){co(Va.current);var e=co(Si.current),n=gf(e,t.type);e!==n&&(ft(Ha,t),ft(Si,n))}function Ip(t){Ha.current===t&&(mt(Si),mt(Ha))}var _t=Gr(0);function Qc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var pd=[];function Up(){for(var t=0;t<pd.length;t++)pd[t]._workInProgressVersionPrimary=null;pd.length=0}var yc=Zi.ReactCurrentDispatcher,md=Zi.ReactCurrentBatchConfig,Eo=0,xt=null,Dt=null,kt=null,Zc=!1,Ta=!1,Ga=0,iw=0;function $t(){throw Error(se(321))}function Fp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!li(t[n],e[n]))return!1;return!0}function Op(t,e,n,i,r,o){if(Eo=o,xt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,yc.current=t===null||t.memoizedState===null?aw:lw,t=n(i,r),Ta){o=0;do{if(Ta=!1,Ga=0,25<=o)throw Error(se(301));o+=1,kt=Dt=null,e.updateQueue=null,yc.current=cw,t=n(i,r)}while(Ta)}if(yc.current=Jc,e=Dt!==null&&Dt.next!==null,Eo=0,kt=Dt=xt=null,Zc=!1,e)throw Error(se(300));return t}function kp(){var t=Ga!==0;return Ga=0,t}function hi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?xt.memoizedState=kt=t:kt=kt.next=t,kt}function jn(){if(Dt===null){var t=xt.alternate;t=t!==null?t.memoizedState:null}else t=Dt.next;var e=kt===null?xt.memoizedState:kt.next;if(e!==null)kt=e,Dt=t;else{if(t===null)throw Error(se(310));Dt=t,t={memoizedState:Dt.memoizedState,baseState:Dt.baseState,baseQueue:Dt.baseQueue,queue:Dt.queue,next:null},kt===null?xt.memoizedState=kt=t:kt=kt.next=t}return kt}function Wa(t,e){return typeof e=="function"?e(t):e}function gd(t){var e=jn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=Dt,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,l=null,c=o;do{var d=c.lane;if((Eo&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,s=i):l=l.next=f,xt.lanes|=d,Mo|=d}c=c.next}while(c!==null&&c!==o);l===null?s=i:l.next=a,li(i,e.memoizedState)||(fn=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,xt.lanes|=o,Mo|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function vd(t){var e=jn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=t(o,s.action),s=s.next;while(s!==r);li(o,e.memoizedState)||(fn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function j_(){}function X_(t,e){var n=xt,i=jn(),r=e(),o=!li(i.memoizedState,r);if(o&&(i.memoizedState=r,fn=!0),i=i.queue,Bp(q_.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||kt!==null&&kt.memoizedState.tag&1){if(n.flags|=2048,ja(9,Y_.bind(null,n,i,r,e),void 0,null),Bt===null)throw Error(se(349));Eo&30||$_(n,e,r)}return r}function $_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Y_(t,e,n,i){e.value=n,e.getSnapshot=i,K_(e)&&Q_(t)}function q_(t,e,n){return n(function(){K_(e)&&Q_(t)})}function K_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!li(t,n)}catch{return!0}}function Q_(t){var e=Xi(t,1);e!==null&&si(e,t,1,-1)}function xg(t){var e=hi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wa,lastRenderedState:t},e.queue=t,t=t.dispatch=sw.bind(null,xt,t),[e.memoizedState,t]}function ja(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Z_(){return jn().memoizedState}function Sc(t,e,n,i){var r=hi();xt.flags|=t,r.memoizedState=ja(1|e,n,void 0,i===void 0?null:i)}function Eu(t,e,n,i){var r=jn();i=i===void 0?null:i;var o=void 0;if(Dt!==null){var s=Dt.memoizedState;if(o=s.destroy,i!==null&&Fp(i,s.deps)){r.memoizedState=ja(e,n,o,i);return}}xt.flags|=t,r.memoizedState=ja(1|e,n,o,i)}function yg(t,e){return Sc(8390656,8,t,e)}function Bp(t,e){return Eu(2048,8,t,e)}function J_(t,e){return Eu(4,2,t,e)}function ex(t,e){return Eu(4,4,t,e)}function tx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function nx(t,e,n){return n=n!=null?n.concat([t]):null,Eu(4,4,tx.bind(null,e,t),n)}function zp(){}function ix(t,e){var n=jn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Fp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function rx(t,e){var n=jn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Fp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function ox(t,e,n){return Eo&21?(li(n,e)||(n=u_(),xt.lanes|=n,Mo|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,fn=!0),t.memoizedState=n)}function rw(t,e){var n=lt;lt=n!==0&&4>n?n:4,t(!0);var i=md.transition;md.transition={};try{t(!1),e()}finally{lt=n,md.transition=i}}function sx(){return jn().memoizedState}function ow(t,e,n){var i=Rr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},ax(t))lx(e,n);else if(n=V_(t,e,n,i),n!==null){var r=sn();si(n,t,i,r),cx(n,e,i)}}function sw(t,e,n){var i=Rr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(ax(t))lx(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(r.hasEagerState=!0,r.eagerState=a,li(a,s)){var l=e.interleaved;l===null?(r.next=r,Lp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=V_(t,e,r,i),n!==null&&(r=sn(),si(n,t,i,r),cx(n,e,i))}}function ax(t){var e=t.alternate;return t===xt||e!==null&&e===xt}function lx(t,e){Ta=Zc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function cx(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,vp(t,n)}}var Jc={readContext:Wn,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useInsertionEffect:$t,useLayoutEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useMutableSource:$t,useSyncExternalStore:$t,useId:$t,unstable_isNewReconciler:!1},aw={readContext:Wn,useCallback:function(t,e){return hi().memoizedState=[t,e===void 0?null:e],t},useContext:Wn,useEffect:yg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Sc(4194308,4,tx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Sc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Sc(4,2,t,e)},useMemo:function(t,e){var n=hi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=hi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=ow.bind(null,xt,t),[i.memoizedState,t]},useRef:function(t){var e=hi();return t={current:t},e.memoizedState=t},useState:xg,useDebugValue:zp,useDeferredValue:function(t){return hi().memoizedState=t},useTransition:function(){var t=xg(!1),e=t[0];return t=rw.bind(null,t[1]),hi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=xt,r=hi();if(vt){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),Bt===null)throw Error(se(349));Eo&30||$_(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,yg(q_.bind(null,i,o,t),[t]),i.flags|=2048,ja(9,Y_.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=hi(),e=Bt.identifierPrefix;if(vt){var n=ki,i=Oi;n=(i&~(1<<32-oi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ga++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=iw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},lw={readContext:Wn,useCallback:ix,useContext:Wn,useEffect:Bp,useImperativeHandle:nx,useInsertionEffect:J_,useLayoutEffect:ex,useMemo:rx,useReducer:gd,useRef:Z_,useState:function(){return gd(Wa)},useDebugValue:zp,useDeferredValue:function(t){var e=jn();return ox(e,Dt.memoizedState,t)},useTransition:function(){var t=gd(Wa)[0],e=jn().memoizedState;return[t,e]},useMutableSource:j_,useSyncExternalStore:X_,useId:sx,unstable_isNewReconciler:!1},cw={readContext:Wn,useCallback:ix,useContext:Wn,useEffect:Bp,useImperativeHandle:nx,useInsertionEffect:J_,useLayoutEffect:ex,useMemo:rx,useReducer:vd,useRef:Z_,useState:function(){return vd(Wa)},useDebugValue:zp,useDeferredValue:function(t){var e=jn();return Dt===null?e.memoizedState=t:ox(e,Dt.memoizedState,t)},useTransition:function(){var t=vd(Wa)[0],e=jn().memoizedState;return[t,e]},useMutableSource:j_,useSyncExternalStore:X_,useId:sx,unstable_isNewReconciler:!1};function Zn(t,e){if(t&&t.defaultProps){e=yt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Of(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:yt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Mu={isMounted:function(t){return(t=t._reactInternals)?Po(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=sn(),r=Rr(t),o=Vi(i,r);o.payload=e,n!=null&&(o.callback=n),e=Cr(t,o,r),e!==null&&(si(e,t,r,i),xc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=sn(),r=Rr(t),o=Vi(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Cr(t,o,r),e!==null&&(si(e,t,r,i),xc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=sn(),i=Rr(t),r=Vi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Cr(t,r,i),e!==null&&(si(e,t,i,n),xc(e,t,i))}};function Sg(t,e,n,i,r,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!Oa(n,i)||!Oa(r,o):!0}function ux(t,e,n){var i=!1,r=Ur,o=e.contextType;return typeof o=="object"&&o!==null?o=Wn(o):(r=pn(e)?yo:Jt.current,i=e.contextTypes,o=(i=i!=null)?Rs(t,r):Ur),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Mu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function Eg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Mu.enqueueReplaceState(e,e.state,null)}function kf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Dp(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=Wn(o):(o=pn(e)?yo:Jt.current,r.context=Rs(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Of(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Mu.enqueueReplaceState(r,r.state,null),Kc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ns(t,e){try{var n="",i=e;do n+=OE(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function _d(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Bf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var uw=typeof WeakMap=="function"?WeakMap:Map;function dx(t,e,n){n=Vi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){tu||(tu=!0,qf=i),Bf(t,e)},n}function fx(t,e,n){n=Vi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Bf(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Bf(t,e),typeof i!="function"&&(Ar===null?Ar=new Set([this]):Ar.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Mg(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new uw;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=ww.bind(null,t,e,n),e.then(t,t))}function wg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Tg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Vi(-1,1),e.tag=2,Cr(n,e,1))),n.lanes|=1),t)}var dw=Zi.ReactCurrentOwner,fn=!1;function rn(t,e,n,i){e.child=t===null?H_(e,null,n,i):Ls(e,t.child,n,i)}function bg(t,e,n,i,r){n=n.render;var o=e.ref;return fs(e,r),i=Op(t,e,n,i,o,r),n=kp(),t!==null&&!fn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,$i(t,e,r)):(vt&&n&&Tp(e),e.flags|=1,rn(t,e,i,r),e.child)}function Cg(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!Yp(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,hx(t,e,o,i,r)):(t=Tc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Oa,n(s,i)&&t.ref===e.ref)return $i(t,e,r)}return e.flags|=1,t=Pr(o,i),t.ref=e.ref,t.return=e,e.child=t}function hx(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(Oa(o,i)&&t.ref===e.ref)if(fn=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(fn=!0);else return e.lanes=t.lanes,$i(t,e,r)}return zf(t,e,n,i,r)}function px(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ft(ss,Tn),Tn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ft(ss,Tn),Tn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,ft(ss,Tn),Tn|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,ft(ss,Tn),Tn|=i;return rn(t,e,r,n),e.child}function mx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function zf(t,e,n,i,r){var o=pn(n)?yo:Jt.current;return o=Rs(e,o),fs(e,r),n=Op(t,e,n,i,o,r),i=kp(),t!==null&&!fn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,$i(t,e,r)):(vt&&i&&Tp(e),e.flags|=1,rn(t,e,n,r),e.child)}function Ag(t,e,n,i,r){if(pn(n)){var o=!0;jc(e)}else o=!1;if(fs(e,r),e.stateNode===null)Ec(t,e),ux(e,n,i),kf(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Wn(c):(c=pn(n)?yo:Jt.current,c=Rs(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Eg(e,s,i,c),dr=!1;var u=e.memoizedState;s.state=u,Kc(e,i,s,r),l=e.memoizedState,a!==i||u!==l||hn.current||dr?(typeof d=="function"&&(Of(e,n,d,i),l=e.memoizedState),(a=dr||Sg(e,n,a,i,u,l,c))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=c,i=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,G_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Zn(e.type,a),s.props=c,f=e.pendingProps,u=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Wn(l):(l=pn(n)?yo:Jt.current,l=Rs(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||u!==l)&&Eg(e,s,i,l),dr=!1,u=e.memoizedState,s.state=u,Kc(e,i,s,r);var g=e.memoizedState;a!==f||u!==g||hn.current||dr?(typeof p=="function"&&(Of(e,n,p,i),g=e.memoizedState),(c=dr||Sg(e,n,c,i,u,g,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,g,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,g,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),s.props=i,s.state=g,s.context=l,i=c):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),i=!1)}return Hf(t,e,n,i,o,r)}function Hf(t,e,n,i,r,o){mx(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&hg(e,n,!1),$i(t,e,o);i=e.stateNode,dw.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=Ls(e,t.child,null,o),e.child=Ls(e,null,a,o)):rn(t,e,a,o),e.memoizedState=i.state,r&&hg(e,n,!0),e.child}function gx(t){var e=t.stateNode;e.pendingContext?fg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&fg(t,e.context,!1),Np(t,e.containerInfo)}function Rg(t,e,n,i,r){return Ps(),Cp(r),e.flags|=256,rn(t,e,n,i),e.child}var Vf={dehydrated:null,treeContext:null,retryLane:0};function Gf(t){return{baseLanes:t,cachePool:null,transitions:null}}function vx(t,e,n){var i=e.pendingProps,r=_t.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ft(_t,r&1),t===null)return Uf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,o?(i=e.mode,o=e.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=bu(s,i,0,null),t=_o(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Gf(n),e.memoizedState=Vf,t):Hp(e,s));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return fw(t,e,s,i,a,r,n);if(o){o=i.fallback,s=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Pr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=Pr(a,o):(o=_o(o,s,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,s=t.child.memoizedState,s=s===null?Gf(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=Vf,i}return o=t.child,t=o.sibling,i=Pr(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Hp(t,e){return e=bu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ul(t,e,n,i){return i!==null&&Cp(i),Ls(e,t.child,null,n),t=Hp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function fw(t,e,n,i,r,o,s){if(n)return e.flags&256?(e.flags&=-257,i=_d(Error(se(422))),Ul(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=bu({mode:"visible",children:i.children},r,0,null),o=_o(o,r,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&Ls(e,t.child,null,s),e.child.memoizedState=Gf(s),e.memoizedState=Vf,o);if(!(e.mode&1))return Ul(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(se(419)),i=_d(o,i,void 0),Ul(t,e,s,i)}if(a=(s&t.childLanes)!==0,fn||a){if(i=Bt,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,Xi(t,r),si(i,t,r,-1))}return $p(),i=_d(Error(se(421))),Ul(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Tw.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,Cn=br(r.nextSibling),An=e,vt=!0,ni=null,t!==null&&(kn[Bn++]=Oi,kn[Bn++]=ki,kn[Bn++]=So,Oi=t.id,ki=t.overflow,So=e),e=Hp(e,i.children),e.flags|=4096,e)}function Pg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Ff(t.return,e,n)}function xd(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function _x(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(rn(t,e,i.children,n),i=_t.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Pg(t,n,e);else if(t.tag===19)Pg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ft(_t,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Qc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),xd(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Qc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}xd(e,!0,n,null,o);break;case"together":xd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ec(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function $i(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Mo|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=Pr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Pr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function hw(t,e,n){switch(e.tag){case 3:gx(e),Ps();break;case 5:W_(e);break;case 1:pn(e.type)&&jc(e);break;case 4:Np(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ft(Yc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ft(_t,_t.current&1),e.flags|=128,null):n&e.child.childLanes?vx(t,e,n):(ft(_t,_t.current&1),t=$i(t,e,n),t!==null?t.sibling:null);ft(_t,_t.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return _x(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ft(_t,_t.current),i)break;return null;case 22:case 23:return e.lanes=0,px(t,e,n)}return $i(t,e,n)}var xx,Wf,yx,Sx;xx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wf=function(){};yx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,co(Si.current);var o=null;switch(n){case"input":r=ff(t,r),i=ff(t,i),o=[];break;case"select":r=yt({},r,{value:void 0}),i=yt({},i,{value:void 0}),o=[];break;case"textarea":r=mf(t,r),i=mf(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Gc)}vf(n,i);var s;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Pa.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Pa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&pt("scroll",t),o||a===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(e.updateQueue=c)&&(e.flags|=4)}};Sx=function(t,e,n,i){n!==i&&(e.flags|=4)};function sa(t,e){if(!vt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Yt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function pw(t,e,n){var i=e.pendingProps;switch(bp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(e),null;case 1:return pn(e.type)&&Wc(),Yt(e),null;case 3:return i=e.stateNode,Ds(),mt(hn),mt(Jt),Up(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Nl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ni!==null&&(Zf(ni),ni=null))),Wf(t,e),Yt(e),null;case 5:Ip(e);var r=co(Va.current);if(n=e.type,t!==null&&e.stateNode!=null)yx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return Yt(e),null}if(t=co(Si.current),Nl(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[_i]=e,i[za]=o,t=(e.mode&1)!==0,n){case"dialog":pt("cancel",i),pt("close",i);break;case"iframe":case"object":case"embed":pt("load",i);break;case"video":case"audio":for(r=0;r<_a.length;r++)pt(_a[r],i);break;case"source":pt("error",i);break;case"img":case"image":case"link":pt("error",i),pt("load",i);break;case"details":pt("toggle",i);break;case"input":Bm(i,o),pt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},pt("invalid",i);break;case"textarea":Hm(i,o),pt("invalid",i)}vf(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&Dl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Dl(i.textContent,a,t),r=["children",""+a]):Pa.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&pt("scroll",i)}switch(n){case"input":wl(i),zm(i,o,!0);break;case"textarea":wl(i),Vm(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=Gc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=q0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[_i]=e,t[za]=i,xx(t,e,!1,!1),e.stateNode=t;e:{switch(s=_f(n,i),n){case"dialog":pt("cancel",t),pt("close",t),r=i;break;case"iframe":case"object":case"embed":pt("load",t),r=i;break;case"video":case"audio":for(r=0;r<_a.length;r++)pt(_a[r],t);r=i;break;case"source":pt("error",t),r=i;break;case"img":case"image":case"link":pt("error",t),pt("load",t),r=i;break;case"details":pt("toggle",t),r=i;break;case"input":Bm(t,i),r=ff(t,i),pt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=yt({},i,{value:void 0}),pt("invalid",t);break;case"textarea":Hm(t,i),r=mf(t,i),pt("invalid",t);break;default:r=i}vf(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Z0(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&K0(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&La(t,l):typeof l=="number"&&La(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Pa.hasOwnProperty(o)?l!=null&&o==="onScroll"&&pt("scroll",t):l!=null&&dp(t,o,l,s))}switch(n){case"input":wl(t),zm(t,i,!1);break;case"textarea":wl(t),Vm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ir(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?ls(t,!!i.multiple,o,!1):i.defaultValue!=null&&ls(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Gc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Yt(e),null;case 6:if(t&&e.stateNode!=null)Sx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=co(Va.current),co(Si.current),Nl(e)){if(i=e.stateNode,n=e.memoizedProps,i[_i]=e,(o=i.nodeValue!==n)&&(t=An,t!==null))switch(t.tag){case 3:Dl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Dl(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[_i]=e,e.stateNode=i}return Yt(e),null;case 13:if(mt(_t),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(vt&&Cn!==null&&e.mode&1&&!(e.flags&128))B_(),Ps(),e.flags|=98560,o=!1;else if(o=Nl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(se(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(se(317));o[_i]=e}else Ps(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Yt(e),o=!1}else ni!==null&&(Zf(ni),ni=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||_t.current&1?It===0&&(It=3):$p())),e.updateQueue!==null&&(e.flags|=4),Yt(e),null);case 4:return Ds(),Wf(t,e),t===null&&ka(e.stateNode.containerInfo),Yt(e),null;case 10:return Pp(e.type._context),Yt(e),null;case 17:return pn(e.type)&&Wc(),Yt(e),null;case 19:if(mt(_t),o=e.memoizedState,o===null)return Yt(e),null;if(i=(e.flags&128)!==0,s=o.rendering,s===null)if(i)sa(o,!1);else{if(It!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Qc(t),s!==null){for(e.flags|=128,sa(o,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ft(_t,_t.current&1|2),e.child}t=t.sibling}o.tail!==null&&Tt()>Is&&(e.flags|=128,i=!0,sa(o,!1),e.lanes=4194304)}else{if(!i)if(t=Qc(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),sa(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!vt)return Yt(e),null}else 2*Tt()-o.renderingStartTime>Is&&n!==1073741824&&(e.flags|=128,i=!0,sa(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Tt(),e.sibling=null,n=_t.current,ft(_t,i?n&1|2:n&1),e):(Yt(e),null);case 22:case 23:return Xp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Tn&1073741824&&(Yt(e),e.subtreeFlags&6&&(e.flags|=8192)):Yt(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function mw(t,e){switch(bp(e),e.tag){case 1:return pn(e.type)&&Wc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ds(),mt(hn),mt(Jt),Up(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ip(e),null;case 13:if(mt(_t),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));Ps()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return mt(_t),null;case 4:return Ds(),null;case 10:return Pp(e.type._context),null;case 22:case 23:return Xp(),null;case 24:return null;default:return null}}var Fl=!1,Zt=!1,gw=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function os(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){wt(t,e,i)}else n.current=null}function jf(t,e,n){try{n()}catch(i){wt(t,e,i)}}var Lg=!1;function vw(t,e){if(Af=zc,t=b_(),wp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,d=0,f=t,u=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=s+r),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(p=f.firstChild)!==null;)u=f,f=p;for(;;){if(f===t)break t;if(u===n&&++c===r&&(a=s),u===o&&++d===i&&(l=s),(p=f.nextSibling)!==null)break;f=u,u=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Rf={focusedElem:t,selectionRange:n},zc=!1,Ee=e;Ee!==null;)if(e=Ee,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ee=t;else for(;Ee!==null;){e=Ee;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,m=g.memoizedState,h=e.stateNode,_=h.getSnapshotBeforeUpdate(e.elementType===e.type?v:Zn(e.type,v),m);h.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(y){wt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,Ee=t;break}Ee=e.return}return g=Lg,Lg=!1,g}function ba(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&jf(e,n,o)}r=r.next}while(r!==i)}}function wu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Xf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ex(t){var e=t.alternate;e!==null&&(t.alternate=null,Ex(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[_i],delete e[za],delete e[Df],delete e[JM],delete e[ew])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Mx(t){return t.tag===5||t.tag===3||t.tag===4}function Dg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Mx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function $f(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Gc));else if(i!==4&&(t=t.child,t!==null))for($f(t,e,n),t=t.sibling;t!==null;)$f(t,e,n),t=t.sibling}function Yf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Yf(t,e,n),t=t.sibling;t!==null;)Yf(t,e,n),t=t.sibling}var Vt=null,ti=!1;function er(t,e,n){for(n=n.child;n!==null;)wx(t,e,n),n=n.sibling}function wx(t,e,n){if(yi&&typeof yi.onCommitFiberUnmount=="function")try{yi.onCommitFiberUnmount(gu,n)}catch{}switch(n.tag){case 5:Zt||os(n,e);case 6:var i=Vt,r=ti;Vt=null,er(t,e,n),Vt=i,ti=r,Vt!==null&&(ti?(t=Vt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Vt.removeChild(n.stateNode));break;case 18:Vt!==null&&(ti?(t=Vt,n=n.stateNode,t.nodeType===8?fd(t.parentNode,n):t.nodeType===1&&fd(t,n),Ua(t)):fd(Vt,n.stateNode));break;case 4:i=Vt,r=ti,Vt=n.stateNode.containerInfo,ti=!0,er(t,e,n),Vt=i,ti=r;break;case 0:case 11:case 14:case 15:if(!Zt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&jf(n,e,s),r=r.next}while(r!==i)}er(t,e,n);break;case 1:if(!Zt&&(os(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){wt(n,e,a)}er(t,e,n);break;case 21:er(t,e,n);break;case 22:n.mode&1?(Zt=(i=Zt)||n.memoizedState!==null,er(t,e,n),Zt=i):er(t,e,n);break;default:er(t,e,n)}}function Ng(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new gw),e.forEach(function(i){var r=bw.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Yn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:Vt=a.stateNode,ti=!1;break e;case 3:Vt=a.stateNode.containerInfo,ti=!0;break e;case 4:Vt=a.stateNode.containerInfo,ti=!0;break e}a=a.return}if(Vt===null)throw Error(se(160));wx(o,s,r),Vt=null,ti=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){wt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Tx(e,t),e=e.sibling}function Tx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Yn(e,t),fi(t),i&4){try{ba(3,t,t.return),wu(3,t)}catch(v){wt(t,t.return,v)}try{ba(5,t,t.return)}catch(v){wt(t,t.return,v)}}break;case 1:Yn(e,t),fi(t),i&512&&n!==null&&os(n,n.return);break;case 5:if(Yn(e,t),fi(t),i&512&&n!==null&&os(n,n.return),t.flags&32){var r=t.stateNode;try{La(r,"")}catch(v){wt(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&$0(r,o),_f(a,s);var c=_f(a,o);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d==="style"?Z0(r,f):d==="dangerouslySetInnerHTML"?K0(r,f):d==="children"?La(r,f):dp(r,d,f,c)}switch(a){case"input":hf(r,o);break;case"textarea":Y0(r,o);break;case"select":var u=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?ls(r,!!o.multiple,p,!1):u!==!!o.multiple&&(o.defaultValue!=null?ls(r,!!o.multiple,o.defaultValue,!0):ls(r,!!o.multiple,o.multiple?[]:"",!1))}r[za]=o}catch(v){wt(t,t.return,v)}}break;case 6:if(Yn(e,t),fi(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(v){wt(t,t.return,v)}}break;case 3:if(Yn(e,t),fi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ua(e.containerInfo)}catch(v){wt(t,t.return,v)}break;case 4:Yn(e,t),fi(t);break;case 13:Yn(e,t),fi(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(Wp=Tt())),i&4&&Ng(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Zt=(c=Zt)||d,Yn(e,t),Zt=c):Yn(e,t),fi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(Ee=t,d=t.child;d!==null;){for(f=Ee=d;Ee!==null;){switch(u=Ee,p=u.child,u.tag){case 0:case 11:case 14:case 15:ba(4,u,u.return);break;case 1:os(u,u.return);var g=u.stateNode;if(typeof g.componentWillUnmount=="function"){i=u,n=u.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(v){wt(i,n,v)}}break;case 5:os(u,u.return);break;case 22:if(u.memoizedState!==null){Ug(f);continue}}p!==null?(p.return=u,Ee=p):Ug(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Q0("display",s))}catch(v){wt(t,t.return,v)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(v){wt(t,t.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Yn(e,t),fi(t),i&4&&Ng(t);break;case 21:break;default:Yn(e,t),fi(t)}}function fi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Mx(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(La(r,""),i.flags&=-33);var o=Dg(t);Yf(t,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=Dg(t);$f(t,a,s);break;default:throw Error(se(161))}}catch(l){wt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function _w(t,e,n){Ee=t,bx(t)}function bx(t,e,n){for(var i=(t.mode&1)!==0;Ee!==null;){var r=Ee,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||Fl;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Zt;a=Fl;var c=Zt;if(Fl=s,(Zt=l)&&!c)for(Ee=r;Ee!==null;)s=Ee,l=s.child,s.tag===22&&s.memoizedState!==null?Fg(r):l!==null?(l.return=s,Ee=l):Fg(r);for(;o!==null;)Ee=o,bx(o),o=o.sibling;Ee=r,Fl=a,Zt=c}Ig(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,Ee=o):Ig(t)}}function Ig(t){for(;Ee!==null;){var e=Ee;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Zt||wu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Zt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Zn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&_g(e,o,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}_g(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Ua(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}Zt||e.flags&512&&Xf(e)}catch(u){wt(e,e.return,u)}}if(e===t){Ee=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function Ug(t){for(;Ee!==null;){var e=Ee;if(e===t){Ee=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function Fg(t){for(;Ee!==null;){var e=Ee;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{wu(4,e)}catch(l){wt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){wt(e,r,l)}}var o=e.return;try{Xf(e)}catch(l){wt(e,o,l)}break;case 5:var s=e.return;try{Xf(e)}catch(l){wt(e,s,l)}}}catch(l){wt(e,e.return,l)}if(e===t){Ee=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ee=a;break}Ee=e.return}}var xw=Math.ceil,eu=Zi.ReactCurrentDispatcher,Vp=Zi.ReactCurrentOwner,Vn=Zi.ReactCurrentBatchConfig,et=0,Bt=null,Pt=null,Gt=0,Tn=0,ss=Gr(0),It=0,Xa=null,Mo=0,Tu=0,Gp=0,Ca=null,dn=null,Wp=0,Is=1/0,Ii=null,tu=!1,qf=null,Ar=null,Ol=!1,Sr=null,nu=0,Aa=0,Kf=null,Mc=-1,wc=0;function sn(){return et&6?Tt():Mc!==-1?Mc:Mc=Tt()}function Rr(t){return t.mode&1?et&2&&Gt!==0?Gt&-Gt:nw.transition!==null?(wc===0&&(wc=u_()),wc):(t=lt,t!==0||(t=window.event,t=t===void 0?16:v_(t.type)),t):1}function si(t,e,n,i){if(50<Aa)throw Aa=0,Kf=null,Error(se(185));ol(t,n,i),(!(et&2)||t!==Bt)&&(t===Bt&&(!(et&2)&&(Tu|=n),It===4&&hr(t,Gt)),mn(t,i),n===1&&et===0&&!(e.mode&1)&&(Is=Tt()+500,Su&&Wr()))}function mn(t,e){var n=t.callbackNode;nM(t,e);var i=Bc(t,t===Bt?Gt:0);if(i===0)n!==null&&jm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&jm(n),e===1)t.tag===0?tw(Og.bind(null,t)):F_(Og.bind(null,t)),QM(function(){!(et&6)&&Wr()}),n=null;else{switch(d_(i)){case 1:n=gp;break;case 4:n=l_;break;case 16:n=kc;break;case 536870912:n=c_;break;default:n=kc}n=Ix(n,Cx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Cx(t,e){if(Mc=-1,wc=0,et&6)throw Error(se(327));var n=t.callbackNode;if(hs()&&t.callbackNode!==n)return null;var i=Bc(t,t===Bt?Gt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=iu(t,i);else{e=i;var r=et;et|=2;var o=Rx();(Bt!==t||Gt!==e)&&(Ii=null,Is=Tt()+500,vo(t,e));do try{Ew();break}catch(a){Ax(t,a)}while(!0);Rp(),eu.current=o,et=r,Pt!==null?e=0:(Bt=null,Gt=0,e=It)}if(e!==0){if(e===2&&(r=Mf(t),r!==0&&(i=r,e=Qf(t,r))),e===1)throw n=Xa,vo(t,0),hr(t,i),mn(t,Tt()),n;if(e===6)hr(t,i);else{if(r=t.current.alternate,!(i&30)&&!yw(r)&&(e=iu(t,i),e===2&&(o=Mf(t),o!==0&&(i=o,e=Qf(t,o))),e===1))throw n=Xa,vo(t,0),hr(t,i),mn(t,Tt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:no(t,dn,Ii);break;case 3:if(hr(t,i),(i&130023424)===i&&(e=Wp+500-Tt(),10<e)){if(Bc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){sn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Lf(no.bind(null,t,dn,Ii),e);break}no(t,dn,Ii);break;case 4:if(hr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-oi(i);o=1<<s,s=e[s],s>r&&(r=s),i&=~o}if(i=r,i=Tt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*xw(i/1960))-i,10<i){t.timeoutHandle=Lf(no.bind(null,t,dn,Ii),i);break}no(t,dn,Ii);break;case 5:no(t,dn,Ii);break;default:throw Error(se(329))}}}return mn(t,Tt()),t.callbackNode===n?Cx.bind(null,t):null}function Qf(t,e){var n=Ca;return t.current.memoizedState.isDehydrated&&(vo(t,e).flags|=256),t=iu(t,e),t!==2&&(e=dn,dn=n,e!==null&&Zf(e)),t}function Zf(t){dn===null?dn=t:dn.push.apply(dn,t)}function yw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!li(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function hr(t,e){for(e&=~Gp,e&=~Tu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-oi(e),i=1<<n;t[n]=-1,e&=~i}}function Og(t){if(et&6)throw Error(se(327));hs();var e=Bc(t,0);if(!(e&1))return mn(t,Tt()),null;var n=iu(t,e);if(t.tag!==0&&n===2){var i=Mf(t);i!==0&&(e=i,n=Qf(t,i))}if(n===1)throw n=Xa,vo(t,0),hr(t,e),mn(t,Tt()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,no(t,dn,Ii),mn(t,Tt()),null}function jp(t,e){var n=et;et|=1;try{return t(e)}finally{et=n,et===0&&(Is=Tt()+500,Su&&Wr())}}function wo(t){Sr!==null&&Sr.tag===0&&!(et&6)&&hs();var e=et;et|=1;var n=Vn.transition,i=lt;try{if(Vn.transition=null,lt=1,t)return t()}finally{lt=i,Vn.transition=n,et=e,!(et&6)&&Wr()}}function Xp(){Tn=ss.current,mt(ss)}function vo(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,KM(n)),Pt!==null)for(n=Pt.return;n!==null;){var i=n;switch(bp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Wc();break;case 3:Ds(),mt(hn),mt(Jt),Up();break;case 5:Ip(i);break;case 4:Ds();break;case 13:mt(_t);break;case 19:mt(_t);break;case 10:Pp(i.type._context);break;case 22:case 23:Xp()}n=n.return}if(Bt=t,Pt=t=Pr(t.current,null),Gt=Tn=e,It=0,Xa=null,Gp=Tu=Mo=0,dn=Ca=null,lo!==null){for(e=0;e<lo.length;e++)if(n=lo[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}lo=null}return t}function Ax(t,e){do{var n=Pt;try{if(Rp(),yc.current=Jc,Zc){for(var i=xt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Zc=!1}if(Eo=0,kt=Dt=xt=null,Ta=!1,Ga=0,Vp.current=null,n===null||n.return===null){It=1,Xa=e,Pt=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=Gt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var u=d.alternate;u?(d.updateQueue=u.updateQueue,d.memoizedState=u.memoizedState,d.lanes=u.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=wg(s);if(p!==null){p.flags&=-257,Tg(p,s,a,o,e),p.mode&1&&Mg(o,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var v=new Set;v.add(l),e.updateQueue=v}else g.add(l);break e}else{if(!(e&1)){Mg(o,c,e),$p();break e}l=Error(se(426))}}else if(vt&&a.mode&1){var m=wg(s);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Tg(m,s,a,o,e),Cp(Ns(l,a));break e}}o=l=Ns(l,a),It!==4&&(It=2),Ca===null?Ca=[o]:Ca.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var h=dx(o,l,e);vg(o,h);break e;case 1:a=l;var _=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof _.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Ar===null||!Ar.has(x)))){o.flags|=65536,e&=-e,o.lanes|=e;var y=fx(o,a,e);vg(o,y);break e}}o=o.return}while(o!==null)}Lx(n)}catch(T){e=T,Pt===n&&n!==null&&(Pt=n=n.return);continue}break}while(!0)}function Rx(){var t=eu.current;return eu.current=Jc,t===null?Jc:t}function $p(){(It===0||It===3||It===2)&&(It=4),Bt===null||!(Mo&268435455)&&!(Tu&268435455)||hr(Bt,Gt)}function iu(t,e){var n=et;et|=2;var i=Rx();(Bt!==t||Gt!==e)&&(Ii=null,vo(t,e));do try{Sw();break}catch(r){Ax(t,r)}while(!0);if(Rp(),et=n,eu.current=i,Pt!==null)throw Error(se(261));return Bt=null,Gt=0,It}function Sw(){for(;Pt!==null;)Px(Pt)}function Ew(){for(;Pt!==null&&!$E();)Px(Pt)}function Px(t){var e=Nx(t.alternate,t,Tn);t.memoizedProps=t.pendingProps,e===null?Lx(t):Pt=e,Vp.current=null}function Lx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=mw(n,e),n!==null){n.flags&=32767,Pt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{It=6,Pt=null;return}}else if(n=pw(n,e,Tn),n!==null){Pt=n;return}if(e=e.sibling,e!==null){Pt=e;return}Pt=e=t}while(e!==null);It===0&&(It=5)}function no(t,e,n){var i=lt,r=Vn.transition;try{Vn.transition=null,lt=1,Mw(t,e,n,i)}finally{Vn.transition=r,lt=i}return null}function Mw(t,e,n,i){do hs();while(Sr!==null);if(et&6)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(iM(t,o),t===Bt&&(Pt=Bt=null,Gt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ol||(Ol=!0,Ix(kc,function(){return hs(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Vn.transition,Vn.transition=null;var s=lt;lt=1;var a=et;et|=4,Vp.current=null,vw(t,n),Tx(n,t),GM(Rf),zc=!!Af,Rf=Af=null,t.current=n,_w(n),YE(),et=a,lt=s,Vn.transition=o}else t.current=n;if(Ol&&(Ol=!1,Sr=t,nu=r),o=t.pendingLanes,o===0&&(Ar=null),QE(n.stateNode),mn(t,Tt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(tu)throw tu=!1,t=qf,qf=null,t;return nu&1&&t.tag!==0&&hs(),o=t.pendingLanes,o&1?t===Kf?Aa++:(Aa=0,Kf=t):Aa=0,Wr(),null}function hs(){if(Sr!==null){var t=d_(nu),e=Vn.transition,n=lt;try{if(Vn.transition=null,lt=16>t?16:t,Sr===null)var i=!1;else{if(t=Sr,Sr=null,nu=0,et&6)throw Error(se(331));var r=et;for(et|=4,Ee=t.current;Ee!==null;){var o=Ee,s=o.child;if(Ee.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ee=c;Ee!==null;){var d=Ee;switch(d.tag){case 0:case 11:case 15:ba(8,d,o)}var f=d.child;if(f!==null)f.return=d,Ee=f;else for(;Ee!==null;){d=Ee;var u=d.sibling,p=d.return;if(Ex(d),d===c){Ee=null;break}if(u!==null){u.return=p,Ee=u;break}Ee=p}}}var g=o.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var m=v.sibling;v.sibling=null,v=m}while(v!==null)}}Ee=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,Ee=s;else e:for(;Ee!==null;){if(o=Ee,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ba(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,Ee=h;break e}Ee=o.return}}var _=t.current;for(Ee=_;Ee!==null;){s=Ee;var x=s.child;if(s.subtreeFlags&2064&&x!==null)x.return=s,Ee=x;else e:for(s=_;Ee!==null;){if(a=Ee,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:wu(9,a)}}catch(T){wt(a,a.return,T)}if(a===s){Ee=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Ee=y;break e}Ee=a.return}}if(et=r,Wr(),yi&&typeof yi.onPostCommitFiberRoot=="function")try{yi.onPostCommitFiberRoot(gu,t)}catch{}i=!0}return i}finally{lt=n,Vn.transition=e}}return!1}function kg(t,e,n){e=Ns(n,e),e=dx(t,e,1),t=Cr(t,e,1),e=sn(),t!==null&&(ol(t,1,e),mn(t,e))}function wt(t,e,n){if(t.tag===3)kg(t,t,n);else for(;e!==null;){if(e.tag===3){kg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ar===null||!Ar.has(i))){t=Ns(n,t),t=fx(e,t,1),e=Cr(e,t,1),t=sn(),e!==null&&(ol(e,1,t),mn(e,t));break}}e=e.return}}function ww(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=sn(),t.pingedLanes|=t.suspendedLanes&n,Bt===t&&(Gt&n)===n&&(It===4||It===3&&(Gt&130023424)===Gt&&500>Tt()-Wp?vo(t,0):Gp|=n),mn(t,e)}function Dx(t,e){e===0&&(t.mode&1?(e=Cl,Cl<<=1,!(Cl&130023424)&&(Cl=4194304)):e=1);var n=sn();t=Xi(t,e),t!==null&&(ol(t,e,n),mn(t,n))}function Tw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Dx(t,n)}function bw(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),Dx(t,n)}var Nx;Nx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||hn.current)fn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return fn=!1,hw(t,e,n);fn=!!(t.flags&131072)}else fn=!1,vt&&e.flags&1048576&&O_(e,$c,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ec(t,e),t=e.pendingProps;var r=Rs(e,Jt.current);fs(e,n),r=Op(null,e,i,t,r,n);var o=kp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,pn(i)?(o=!0,jc(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Dp(e),r.updater=Mu,e.stateNode=r,r._reactInternals=e,kf(e,i,t,n),e=Hf(null,e,i,!0,o,n)):(e.tag=0,vt&&o&&Tp(e),rn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ec(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Aw(i),t=Zn(i,t),r){case 0:e=zf(null,e,i,t,n);break e;case 1:e=Ag(null,e,i,t,n);break e;case 11:e=bg(null,e,i,t,n);break e;case 14:e=Cg(null,e,i,Zn(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),zf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),Ag(t,e,i,r,n);case 3:e:{if(gx(e),t===null)throw Error(se(387));i=e.pendingProps,o=e.memoizedState,r=o.element,G_(t,e),Kc(e,i,null,n);var s=e.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=Ns(Error(se(423)),e),e=Rg(t,e,i,n,r);break e}else if(i!==r){r=Ns(Error(se(424)),e),e=Rg(t,e,i,n,r);break e}else for(Cn=br(e.stateNode.containerInfo.firstChild),An=e,vt=!0,ni=null,n=H_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ps(),i===r){e=$i(t,e,n);break e}rn(t,e,i,n)}e=e.child}return e;case 5:return W_(e),t===null&&Uf(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,s=r.children,Pf(i,r)?s=null:o!==null&&Pf(i,o)&&(e.flags|=32),mx(t,e),rn(t,e,s,n),e.child;case 6:return t===null&&Uf(e),null;case 13:return vx(t,e,n);case 4:return Np(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ls(e,null,i,n):rn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),bg(t,e,i,r,n);case 7:return rn(t,e,e.pendingProps,n),e.child;case 8:return rn(t,e,e.pendingProps.children,n),e.child;case 12:return rn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,ft(Yc,i._currentValue),i._currentValue=s,o!==null)if(li(o.value,s)){if(o.children===r.children&&!hn.current){e=$i(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=Vi(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ff(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(se(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Ff(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}rn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,fs(e,n),r=Wn(r),i=i(r),e.flags|=1,rn(t,e,i,n),e.child;case 14:return i=e.type,r=Zn(i,e.pendingProps),r=Zn(i.type,r),Cg(t,e,i,r,n);case 15:return hx(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),Ec(t,e),e.tag=1,pn(i)?(t=!0,jc(e)):t=!1,fs(e,n),ux(e,i,r),kf(e,i,r,n),Hf(null,e,i,!0,t,n);case 19:return _x(t,e,n);case 22:return px(t,e,n)}throw Error(se(156,e.tag))};function Ix(t,e){return a_(t,e)}function Cw(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(t,e,n,i){return new Cw(t,e,n,i)}function Yp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Aw(t){if(typeof t=="function")return Yp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===hp)return 11;if(t===pp)return 14}return 2}function Pr(t,e){var n=t.alternate;return n===null?(n=Hn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Tc(t,e,n,i,r,o){var s=2;if(i=t,typeof t=="function")Yp(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Ko:return _o(n.children,r,o,e);case fp:s=8,r|=8;break;case lf:return t=Hn(12,n,e,r|2),t.elementType=lf,t.lanes=o,t;case cf:return t=Hn(13,n,e,r),t.elementType=cf,t.lanes=o,t;case uf:return t=Hn(19,n,e,r),t.elementType=uf,t.lanes=o,t;case W0:return bu(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case V0:s=10;break e;case G0:s=9;break e;case hp:s=11;break e;case pp:s=14;break e;case ur:s=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=Hn(s,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function _o(t,e,n,i){return t=Hn(7,t,i,e),t.lanes=n,t}function bu(t,e,n,i){return t=Hn(22,t,i,e),t.elementType=W0,t.lanes=n,t.stateNode={isHidden:!1},t}function yd(t,e,n){return t=Hn(6,t,null,e),t.lanes=n,t}function Sd(t,e,n){return e=Hn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Rw(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=td(0),this.expirationTimes=td(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=td(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function qp(t,e,n,i,r,o,s,a,l){return t=new Rw(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Hn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Dp(o),t}function Pw(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qo,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Ux(t){if(!t)return Ur;t=t._reactInternals;e:{if(Po(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(pn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(pn(n))return U_(t,n,e)}return e}function Fx(t,e,n,i,r,o,s,a,l){return t=qp(n,i,!0,t,r,o,s,a,l),t.context=Ux(null),n=t.current,i=sn(),r=Rr(n),o=Vi(i,r),o.callback=e??null,Cr(n,o,r),t.current.lanes=r,ol(t,r,i),mn(t,i),t}function Cu(t,e,n,i){var r=e.current,o=sn(),s=Rr(r);return n=Ux(n),e.context===null?e.context=n:e.pendingContext=n,e=Vi(o,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Cr(r,e,s),t!==null&&(si(t,r,s,o),xc(t,r,s)),s}function ru(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Bg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Kp(t,e){Bg(t,e),(t=t.alternate)&&Bg(t,e)}function Lw(){return null}var Ox=typeof reportError=="function"?reportError:function(t){console.error(t)};function Qp(t){this._internalRoot=t}Au.prototype.render=Qp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));Cu(t,e,null,null)};Au.prototype.unmount=Qp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;wo(function(){Cu(null,t,null,null)}),e[ji]=null}};function Au(t){this._internalRoot=t}Au.prototype.unstable_scheduleHydration=function(t){if(t){var e=p_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<fr.length&&e!==0&&e<fr[n].priority;n++);fr.splice(n,0,t),n===0&&g_(t)}};function Zp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ru(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function zg(){}function Dw(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var c=ru(s);o.call(c)}}var s=Fx(e,i,t,0,null,!1,!1,"",zg);return t._reactRootContainer=s,t[ji]=s.current,ka(t.nodeType===8?t.parentNode:t),wo(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=ru(l);a.call(c)}}var l=qp(t,0,!1,null,null,!1,!1,"",zg);return t._reactRootContainer=l,t[ji]=l.current,ka(t.nodeType===8?t.parentNode:t),wo(function(){Cu(e,l,n,i)}),l}function Pu(t,e,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var l=ru(s);a.call(l)}}Cu(e,s,t,r)}else s=Dw(n,e,t,r,i);return ru(s)}f_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=va(e.pendingLanes);n!==0&&(vp(e,n|1),mn(e,Tt()),!(et&6)&&(Is=Tt()+500,Wr()))}break;case 13:wo(function(){var i=Xi(t,1);if(i!==null){var r=sn();si(i,t,1,r)}}),Kp(t,1)}};_p=function(t){if(t.tag===13){var e=Xi(t,134217728);if(e!==null){var n=sn();si(e,t,134217728,n)}Kp(t,134217728)}};h_=function(t){if(t.tag===13){var e=Rr(t),n=Xi(t,e);if(n!==null){var i=sn();si(n,t,e,i)}Kp(t,e)}};p_=function(){return lt};m_=function(t,e){var n=lt;try{return lt=t,e()}finally{lt=n}};yf=function(t,e,n){switch(e){case"input":if(hf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=yu(i);if(!r)throw Error(se(90));X0(i),hf(i,r)}}}break;case"textarea":Y0(t,n);break;case"select":e=n.value,e!=null&&ls(t,!!n.multiple,e,!1)}};t_=jp;n_=wo;var Nw={usingClientEntryPoint:!1,Events:[al,es,yu,J0,e_,jp]},aa={findFiberByHostInstance:ao,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Iw={bundleType:aa.bundleType,version:aa.version,rendererPackageName:aa.rendererPackageName,rendererConfig:aa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Zi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=o_(t),t===null?null:t.stateNode},findFiberByHostInstance:aa.findFiberByHostInstance||Lw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kl.isDisabled&&kl.supportsFiber)try{gu=kl.inject(Iw),yi=kl}catch{}}Ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nw;Ln.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zp(e))throw Error(se(200));return Pw(t,e,null,n)};Ln.createRoot=function(t,e){if(!Zp(t))throw Error(se(299));var n=!1,i="",r=Ox;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=qp(t,1,!1,null,null,n,!1,i,r),t[ji]=e.current,ka(t.nodeType===8?t.parentNode:t),new Qp(e)};Ln.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=o_(e),t=t===null?null:t.stateNode,t};Ln.flushSync=function(t){return wo(t)};Ln.hydrate=function(t,e,n){if(!Ru(e))throw Error(se(200));return Pu(null,t,e,!0,n)};Ln.hydrateRoot=function(t,e,n){if(!Zp(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=Ox;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=Fx(e,null,t,1,n??null,r,!1,o,s),t[ji]=e.current,ka(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Au(e)};Ln.render=function(t,e,n){if(!Ru(e))throw Error(se(200));return Pu(null,t,e,!1,n)};Ln.unmountComponentAtNode=function(t){if(!Ru(t))throw Error(se(40));return t._reactRootContainer?(wo(function(){Pu(null,null,t,!1,function(){t._reactRootContainer=null,t[ji]=null})}),!0):!1};Ln.unstable_batchedUpdates=jp;Ln.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ru(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return Pu(t,e,n,!1,i)};Ln.version="18.3.1-next-f1338f8080-20240426";function kx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kx)}catch(t){console.error(t)}}kx(),k0.exports=Ln;var cl=k0.exports;const Bx=b0(cl);var zx,Hg=cl;zx=Hg.createRoot,Hg.hydrateRoot;const Uw=1,Fw=1e6;let Ed=0;function Ow(){return Ed=(Ed+1)%Number.MAX_SAFE_INTEGER,Ed.toString()}const Md=new Map,Vg=t=>{if(Md.has(t))return;const e=setTimeout(()=>{Md.delete(t),Ra({type:"REMOVE_TOAST",toastId:t})},Fw);Md.set(t,e)},kw=(t,e)=>{switch(e.type){case"ADD_TOAST":return{...t,toasts:[e.toast,...t.toasts].slice(0,Uw)};case"UPDATE_TOAST":return{...t,toasts:t.toasts.map(n=>n.id===e.toast.id?{...n,...e.toast}:n)};case"DISMISS_TOAST":{const{toastId:n}=e;return n?Vg(n):t.toasts.forEach(i=>{Vg(i.id)}),{...t,toasts:t.toasts.map(i=>i.id===n||n===void 0?{...i,open:!1}:i)}}case"REMOVE_TOAST":return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(n=>n.id!==e.toastId)}}},bc=[];let Cc={toasts:[]};function Ra(t){Cc=kw(Cc,t),bc.forEach(e=>{e(Cc)})}function Bw({...t}){const e=Ow(),n=r=>Ra({type:"UPDATE_TOAST",toast:{...r,id:e}}),i=()=>Ra({type:"DISMISS_TOAST",toastId:e});return Ra({type:"ADD_TOAST",toast:{...t,id:e,open:!0,onOpenChange:r=>{r||i()}}}),{id:e,dismiss:i,update:n}}function zw(){const[t,e]=L.useState(Cc);return L.useEffect(()=>(bc.push(e),()=>{const n=bc.indexOf(e);n>-1&&bc.splice(n,1)}),[t]),{...t,toast:Bw,dismiss:n=>Ra({type:"DISMISS_TOAST",toastId:n})}}function Nt(t,e,{checkForDefaultPrevented:n=!0}={}){return function(r){if(t==null||t(r),n===!1||!r.defaultPrevented)return e==null?void 0:e(r)}}function Hw(t,e){typeof t=="function"?t(e):t!=null&&(t.current=e)}function Hx(...t){return e=>t.forEach(n=>Hw(n,e))}function ci(...t){return L.useCallback(Hx(...t),t)}function Vw(t,e=[]){let n=[];function i(o,s){const a=L.createContext(s),l=n.length;n=[...n,s];function c(f){const{scope:u,children:p,...g}=f,v=(u==null?void 0:u[t][l])||a,m=L.useMemo(()=>g,Object.values(g));return N.jsx(v.Provider,{value:m,children:p})}function d(f,u){const p=(u==null?void 0:u[t][l])||a,g=L.useContext(p);if(g)return g;if(s!==void 0)return s;throw new Error(`\`${f}\` must be used within \`${o}\``)}return c.displayName=o+"Provider",[c,d]}const r=()=>{const o=n.map(s=>L.createContext(s));return function(a){const l=(a==null?void 0:a[t])||o;return L.useMemo(()=>({[`__scope${t}`]:{...a,[t]:l}}),[a,l])}};return r.scopeName=t,[i,Gw(r,...e)]}function Gw(...t){const e=t[0];if(t.length===1)return e;const n=()=>{const i=t.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(o){const s=i.reduce((a,{useScope:l,scopeName:c})=>{const f=l(o)[`__scope${c}`];return{...a,...f}},{});return L.useMemo(()=>({[`__scope${e.scopeName}`]:s}),[s])}};return n.scopeName=e.scopeName,n}var $a=L.forwardRef((t,e)=>{const{children:n,...i}=t,r=L.Children.toArray(n),o=r.find(Ww);if(o){const s=o.props.children,a=r.map(l=>l===o?L.Children.count(s)>1?L.Children.only(null):L.isValidElement(s)?s.props.children:null:l);return N.jsx(Jf,{...i,ref:e,children:L.isValidElement(s)?L.cloneElement(s,void 0,a):null})}return N.jsx(Jf,{...i,ref:e,children:n})});$a.displayName="Slot";var Jf=L.forwardRef((t,e)=>{const{children:n,...i}=t;if(L.isValidElement(n)){const r=Xw(n);return L.cloneElement(n,{...jw(i,n.props),ref:e?Hx(e,r):r})}return L.Children.count(n)>1?L.Children.only(null):null});Jf.displayName="SlotClone";var Vx=({children:t})=>N.jsx(N.Fragment,{children:t});function Ww(t){return L.isValidElement(t)&&t.type===Vx}function jw(t,e){const n={...e};for(const i in e){const r=t[i],o=e[i];/^on[A-Z]/.test(i)?r&&o?n[i]=(...a)=>{o(...a),r(...a)}:r&&(n[i]=r):i==="style"?n[i]={...r,...o}:i==="className"&&(n[i]=[r,o].filter(Boolean).join(" "))}return{...t,...n}}function Xw(t){var i,r;let e=(i=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:i.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(r=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:r.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}function $w(t){const e=t+"CollectionProvider",[n,i]=Vw(e),[r,o]=n(e,{collectionRef:{current:null},itemMap:new Map}),s=p=>{const{scope:g,children:v}=p,m=fe.useRef(null),h=fe.useRef(new Map).current;return N.jsx(r,{scope:g,itemMap:h,collectionRef:m,children:v})};s.displayName=e;const a=t+"CollectionSlot",l=fe.forwardRef((p,g)=>{const{scope:v,children:m}=p,h=o(a,v),_=ci(g,h.collectionRef);return N.jsx($a,{ref:_,children:m})});l.displayName=a;const c=t+"CollectionItemSlot",d="data-radix-collection-item",f=fe.forwardRef((p,g)=>{const{scope:v,children:m,...h}=p,_=fe.useRef(null),x=ci(g,_),y=o(c,v);return fe.useEffect(()=>(y.itemMap.set(_,{ref:_,...h}),()=>void y.itemMap.delete(_))),N.jsx($a,{[d]:"",ref:x,children:m})});f.displayName=c;function u(p){const g=o(t+"CollectionConsumer",p);return fe.useCallback(()=>{const m=g.collectionRef.current;if(!m)return[];const h=Array.from(m.querySelectorAll(`[${d}]`));return Array.from(g.itemMap.values()).sort((y,T)=>h.indexOf(y.ref.current)-h.indexOf(T.ref.current))},[g.collectionRef,g.itemMap])}return[{Provider:s,Slot:l,ItemSlot:f},u,i]}function Gx(t,e=[]){let n=[];function i(o,s){const a=L.createContext(s),l=n.length;n=[...n,s];const c=f=>{var h;const{scope:u,children:p,...g}=f,v=((h=u==null?void 0:u[t])==null?void 0:h[l])||a,m=L.useMemo(()=>g,Object.values(g));return N.jsx(v.Provider,{value:m,children:p})};c.displayName=o+"Provider";function d(f,u){var v;const p=((v=u==null?void 0:u[t])==null?void 0:v[l])||a,g=L.useContext(p);if(g)return g;if(s!==void 0)return s;throw new Error(`\`${f}\` must be used within \`${o}\``)}return[c,d]}const r=()=>{const o=n.map(s=>L.createContext(s));return function(a){const l=(a==null?void 0:a[t])||o;return L.useMemo(()=>({[`__scope${t}`]:{...a,[t]:l}}),[a,l])}};return r.scopeName=t,[i,Yw(r,...e)]}function Yw(...t){const e=t[0];if(t.length===1)return e;const n=()=>{const i=t.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(o){const s=i.reduce((a,{useScope:l,scopeName:c})=>{const f=l(o)[`__scope${c}`];return{...a,...f}},{});return L.useMemo(()=>({[`__scope${e.scopeName}`]:s}),[s])}};return n.scopeName=e.scopeName,n}var qw=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],xn=qw.reduce((t,e)=>{const n=L.forwardRef((i,r)=>{const{asChild:o,...s}=i,a=o?$a:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),N.jsx(a,{...s,ref:r})});return n.displayName=`Primitive.${e}`,{...t,[e]:n}},{});function Wx(t,e){t&&cl.flushSync(()=>t.dispatchEvent(e))}function Ei(t){const e=L.useRef(t);return L.useEffect(()=>{e.current=t}),L.useMemo(()=>(...n)=>{var i;return(i=e.current)==null?void 0:i.call(e,...n)},[])}function Kw(t,e=globalThis==null?void 0:globalThis.document){const n=Ei(t);L.useEffect(()=>{const i=r=>{r.key==="Escape"&&n(r)};return e.addEventListener("keydown",i,{capture:!0}),()=>e.removeEventListener("keydown",i,{capture:!0})},[n,e])}var Qw="DismissableLayer",eh="dismissableLayer.update",Zw="dismissableLayer.pointerDownOutside",Jw="dismissableLayer.focusOutside",Gg,jx=L.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Jp=L.forwardRef((t,e)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:i,onPointerDownOutside:r,onFocusOutside:o,onInteractOutside:s,onDismiss:a,...l}=t,c=L.useContext(jx),[d,f]=L.useState(null),u=(d==null?void 0:d.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,p]=L.useState({}),g=ci(e,b=>f(b)),v=Array.from(c.layers),[m]=[...c.layersWithOutsidePointerEventsDisabled].slice(-1),h=v.indexOf(m),_=d?v.indexOf(d):-1,x=c.layersWithOutsidePointerEventsDisabled.size>0,y=_>=h,T=t1(b=>{const A=b.target,M=[...c.branches].some(S=>S.contains(A));!y||M||(r==null||r(b),s==null||s(b),b.defaultPrevented||a==null||a())},u),C=n1(b=>{const A=b.target;[...c.branches].some(S=>S.contains(A))||(o==null||o(b),s==null||s(b),b.defaultPrevented||a==null||a())},u);return Kw(b=>{_===c.layers.size-1&&(i==null||i(b),!b.defaultPrevented&&a&&(b.preventDefault(),a()))},u),L.useEffect(()=>{if(d)return n&&(c.layersWithOutsidePointerEventsDisabled.size===0&&(Gg=u.body.style.pointerEvents,u.body.style.pointerEvents="none"),c.layersWithOutsidePointerEventsDisabled.add(d)),c.layers.add(d),Wg(),()=>{n&&c.layersWithOutsidePointerEventsDisabled.size===1&&(u.body.style.pointerEvents=Gg)}},[d,u,n,c]),L.useEffect(()=>()=>{d&&(c.layers.delete(d),c.layersWithOutsidePointerEventsDisabled.delete(d),Wg())},[d,c]),L.useEffect(()=>{const b=()=>p({});return document.addEventListener(eh,b),()=>document.removeEventListener(eh,b)},[]),N.jsx(xn.div,{...l,ref:g,style:{pointerEvents:x?y?"auto":"none":void 0,...t.style},onFocusCapture:Nt(t.onFocusCapture,C.onFocusCapture),onBlurCapture:Nt(t.onBlurCapture,C.onBlurCapture),onPointerDownCapture:Nt(t.onPointerDownCapture,T.onPointerDownCapture)})});Jp.displayName=Qw;var e1="DismissableLayerBranch",Xx=L.forwardRef((t,e)=>{const n=L.useContext(jx),i=L.useRef(null),r=ci(e,i);return L.useEffect(()=>{const o=i.current;if(o)return n.branches.add(o),()=>{n.branches.delete(o)}},[n.branches]),N.jsx(xn.div,{...t,ref:r})});Xx.displayName=e1;function t1(t,e=globalThis==null?void 0:globalThis.document){const n=Ei(t),i=L.useRef(!1),r=L.useRef(()=>{});return L.useEffect(()=>{const o=a=>{if(a.target&&!i.current){let l=function(){$x(Zw,n,c,{discrete:!0})};const c={originalEvent:a};a.pointerType==="touch"?(e.removeEventListener("click",r.current),r.current=l,e.addEventListener("click",r.current,{once:!0})):l()}else e.removeEventListener("click",r.current);i.current=!1},s=window.setTimeout(()=>{e.addEventListener("pointerdown",o)},0);return()=>{window.clearTimeout(s),e.removeEventListener("pointerdown",o),e.removeEventListener("click",r.current)}},[e,n]),{onPointerDownCapture:()=>i.current=!0}}function n1(t,e=globalThis==null?void 0:globalThis.document){const n=Ei(t),i=L.useRef(!1);return L.useEffect(()=>{const r=o=>{o.target&&!i.current&&$x(Jw,n,{originalEvent:o},{discrete:!1})};return e.addEventListener("focusin",r),()=>e.removeEventListener("focusin",r)},[e,n]),{onFocusCapture:()=>i.current=!0,onBlurCapture:()=>i.current=!1}}function Wg(){const t=new CustomEvent(eh);document.dispatchEvent(t)}function $x(t,e,n,{discrete:i}){const r=n.originalEvent.target,o=new CustomEvent(t,{bubbles:!1,cancelable:!0,detail:n});e&&r.addEventListener(t,e,{once:!0}),i?Wx(r,o):r.dispatchEvent(o)}var i1=Jp,r1=Xx,To=globalThis!=null&&globalThis.document?L.useLayoutEffect:()=>{},o1="Portal",Yx=L.forwardRef((t,e)=>{var a;const{container:n,...i}=t,[r,o]=L.useState(!1);To(()=>o(!0),[]);const s=n||r&&((a=globalThis==null?void 0:globalThis.document)==null?void 0:a.body);return s?Bx.createPortal(N.jsx(xn.div,{...i,ref:e}),s):null});Yx.displayName=o1;function s1(t,e){return L.useReducer((n,i)=>e[n][i]??n,t)}var em=t=>{const{present:e,children:n}=t,i=a1(e),r=typeof n=="function"?n({present:i.isPresent}):L.Children.only(n),o=ci(i.ref,l1(r));return typeof n=="function"||i.isPresent?L.cloneElement(r,{ref:o}):null};em.displayName="Presence";function a1(t){const[e,n]=L.useState(),i=L.useRef({}),r=L.useRef(t),o=L.useRef("none"),s=t?"mounted":"unmounted",[a,l]=s1(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return L.useEffect(()=>{const c=Bl(i.current);o.current=a==="mounted"?c:"none"},[a]),To(()=>{const c=i.current,d=r.current;if(d!==t){const u=o.current,p=Bl(c);t?l("MOUNT"):p==="none"||(c==null?void 0:c.display)==="none"?l("UNMOUNT"):l(d&&u!==p?"ANIMATION_OUT":"UNMOUNT"),r.current=t}},[t,l]),To(()=>{if(e){let c;const d=e.ownerDocument.defaultView??window,f=p=>{const v=Bl(i.current).includes(p.animationName);if(p.target===e&&v&&(l("ANIMATION_END"),!r.current)){const m=e.style.animationFillMode;e.style.animationFillMode="forwards",c=d.setTimeout(()=>{e.style.animationFillMode==="forwards"&&(e.style.animationFillMode=m)})}},u=p=>{p.target===e&&(o.current=Bl(i.current))};return e.addEventListener("animationstart",u),e.addEventListener("animationcancel",f),e.addEventListener("animationend",f),()=>{d.clearTimeout(c),e.removeEventListener("animationstart",u),e.removeEventListener("animationcancel",f),e.removeEventListener("animationend",f)}}else l("ANIMATION_END")},[e,l]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:L.useCallback(c=>{c&&(i.current=getComputedStyle(c)),n(c)},[])}}function Bl(t){return(t==null?void 0:t.animationName)||"none"}function l1(t){var i,r;let e=(i=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:i.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(r=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:r.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}function c1({prop:t,defaultProp:e,onChange:n=()=>{}}){const[i,r]=u1({defaultProp:e,onChange:n}),o=t!==void 0,s=o?t:i,a=Ei(n),l=L.useCallback(c=>{if(o){const f=typeof c=="function"?c(t):c;f!==t&&a(f)}else r(c)},[o,t,r,a]);return[s,l]}function u1({defaultProp:t,onChange:e}){const n=L.useState(t),[i]=n,r=L.useRef(i),o=Ei(e);return L.useEffect(()=>{r.current!==i&&(o(i),r.current=i)},[i,r,o]),n}var d1="VisuallyHidden",Lu=L.forwardRef((t,e)=>N.jsx(xn.span,{...t,ref:e,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...t.style}}));Lu.displayName=d1;var f1=Lu,tm="ToastProvider",[nm,h1,p1]=$w("Toast"),[qx,f3]=Gx("Toast",[p1]),[m1,Du]=qx(tm),Kx=t=>{const{__scopeToast:e,label:n="Notification",duration:i=5e3,swipeDirection:r="right",swipeThreshold:o=50,children:s}=t,[a,l]=L.useState(null),[c,d]=L.useState(0),f=L.useRef(!1),u=L.useRef(!1);return n.trim()||console.error(`Invalid prop \`label\` supplied to \`${tm}\`. Expected non-empty \`string\`.`),N.jsx(nm.Provider,{scope:e,children:N.jsx(m1,{scope:e,label:n,duration:i,swipeDirection:r,swipeThreshold:o,toastCount:c,viewport:a,onViewportChange:l,onToastAdd:L.useCallback(()=>d(p=>p+1),[]),onToastRemove:L.useCallback(()=>d(p=>p-1),[]),isFocusedToastEscapeKeyDownRef:f,isClosePausedRef:u,children:s})})};Kx.displayName=tm;var Qx="ToastViewport",g1=["F8"],th="toast.viewportPause",nh="toast.viewportResume",Zx=L.forwardRef((t,e)=>{const{__scopeToast:n,hotkey:i=g1,label:r="Notifications ({hotkey})",...o}=t,s=Du(Qx,n),a=h1(n),l=L.useRef(null),c=L.useRef(null),d=L.useRef(null),f=L.useRef(null),u=ci(e,f,s.onViewportChange),p=i.join("+").replace(/Key/g,"").replace(/Digit/g,""),g=s.toastCount>0;L.useEffect(()=>{const m=h=>{var x;i.length!==0&&i.every(y=>h[y]||h.code===y)&&((x=f.current)==null||x.focus())};return document.addEventListener("keydown",m),()=>document.removeEventListener("keydown",m)},[i]),L.useEffect(()=>{const m=l.current,h=f.current;if(g&&m&&h){const _=()=>{if(!s.isClosePausedRef.current){const C=new CustomEvent(th);h.dispatchEvent(C),s.isClosePausedRef.current=!0}},x=()=>{if(s.isClosePausedRef.current){const C=new CustomEvent(nh);h.dispatchEvent(C),s.isClosePausedRef.current=!1}},y=C=>{!m.contains(C.relatedTarget)&&x()},T=()=>{m.contains(document.activeElement)||x()};return m.addEventListener("focusin",_),m.addEventListener("focusout",y),m.addEventListener("pointermove",_),m.addEventListener("pointerleave",T),window.addEventListener("blur",_),window.addEventListener("focus",x),()=>{m.removeEventListener("focusin",_),m.removeEventListener("focusout",y),m.removeEventListener("pointermove",_),m.removeEventListener("pointerleave",T),window.removeEventListener("blur",_),window.removeEventListener("focus",x)}}},[g,s.isClosePausedRef]);const v=L.useCallback(({tabbingDirection:m})=>{const _=a().map(x=>{const y=x.ref.current,T=[y,...R1(y)];return m==="forwards"?T:T.reverse()});return(m==="forwards"?_.reverse():_).flat()},[a]);return L.useEffect(()=>{const m=f.current;if(m){const h=_=>{var T,C,b;const x=_.altKey||_.ctrlKey||_.metaKey;if(_.key==="Tab"&&!x){const A=document.activeElement,M=_.shiftKey;if(_.target===m&&M){(T=c.current)==null||T.focus();return}const k=v({tabbingDirection:M?"backwards":"forwards"}),z=k.findIndex(B=>B===A);wd(k.slice(z+1))?_.preventDefault():M?(C=c.current)==null||C.focus():(b=d.current)==null||b.focus()}};return m.addEventListener("keydown",h),()=>m.removeEventListener("keydown",h)}},[a,v]),N.jsxs(r1,{ref:l,role:"region","aria-label":r.replace("{hotkey}",p),tabIndex:-1,style:{pointerEvents:g?void 0:"none"},children:[g&&N.jsx(ih,{ref:c,onFocusFromOutsideViewport:()=>{const m=v({tabbingDirection:"forwards"});wd(m)}}),N.jsx(nm.Slot,{scope:n,children:N.jsx(xn.ol,{tabIndex:-1,...o,ref:u})}),g&&N.jsx(ih,{ref:d,onFocusFromOutsideViewport:()=>{const m=v({tabbingDirection:"backwards"});wd(m)}})]})});Zx.displayName=Qx;var Jx="ToastFocusProxy",ih=L.forwardRef((t,e)=>{const{__scopeToast:n,onFocusFromOutsideViewport:i,...r}=t,o=Du(Jx,n);return N.jsx(Lu,{"aria-hidden":!0,tabIndex:0,...r,ref:e,style:{position:"fixed"},onFocus:s=>{var c;const a=s.relatedTarget;!((c=o.viewport)!=null&&c.contains(a))&&i()}})});ih.displayName=Jx;var Nu="Toast",v1="toast.swipeStart",_1="toast.swipeMove",x1="toast.swipeCancel",y1="toast.swipeEnd",ey=L.forwardRef((t,e)=>{const{forceMount:n,open:i,defaultOpen:r,onOpenChange:o,...s}=t,[a=!0,l]=c1({prop:i,defaultProp:r,onChange:o});return N.jsx(em,{present:n||a,children:N.jsx(M1,{open:a,...s,ref:e,onClose:()=>l(!1),onPause:Ei(t.onPause),onResume:Ei(t.onResume),onSwipeStart:Nt(t.onSwipeStart,c=>{c.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:Nt(t.onSwipeMove,c=>{const{x:d,y:f}=c.detail.delta;c.currentTarget.setAttribute("data-swipe","move"),c.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${d}px`),c.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${f}px`)}),onSwipeCancel:Nt(t.onSwipeCancel,c=>{c.currentTarget.setAttribute("data-swipe","cancel"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),c.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:Nt(t.onSwipeEnd,c=>{const{x:d,y:f}=c.detail.delta;c.currentTarget.setAttribute("data-swipe","end"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),c.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${d}px`),c.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${f}px`),l(!1)})})})});ey.displayName=Nu;var[S1,E1]=qx(Nu,{onClose(){}}),M1=L.forwardRef((t,e)=>{const{__scopeToast:n,type:i="foreground",duration:r,open:o,onClose:s,onEscapeKeyDown:a,onPause:l,onResume:c,onSwipeStart:d,onSwipeMove:f,onSwipeCancel:u,onSwipeEnd:p,...g}=t,v=Du(Nu,n),[m,h]=L.useState(null),_=ci(e,B=>h(B)),x=L.useRef(null),y=L.useRef(null),T=r||v.duration,C=L.useRef(0),b=L.useRef(T),A=L.useRef(0),{onToastAdd:M,onToastRemove:S}=v,D=Ei(()=>{var $;(m==null?void 0:m.contains(document.activeElement))&&(($=v.viewport)==null||$.focus()),s()}),k=L.useCallback(B=>{!B||B===1/0||(window.clearTimeout(A.current),C.current=new Date().getTime(),A.current=window.setTimeout(D,B))},[D]);L.useEffect(()=>{const B=v.viewport;if(B){const $=()=>{k(b.current),c==null||c()},H=()=>{const K=new Date().getTime()-C.current;b.current=b.current-K,window.clearTimeout(A.current),l==null||l()};return B.addEventListener(th,H),B.addEventListener(nh,$),()=>{B.removeEventListener(th,H),B.removeEventListener(nh,$)}}},[v.viewport,T,l,c,k]),L.useEffect(()=>{o&&!v.isClosePausedRef.current&&k(T)},[o,T,v.isClosePausedRef,k]),L.useEffect(()=>(M(),()=>S()),[M,S]);const z=L.useMemo(()=>m?ay(m):null,[m]);return v.viewport?N.jsxs(N.Fragment,{children:[z&&N.jsx(w1,{__scopeToast:n,role:"status","aria-live":i==="foreground"?"assertive":"polite","aria-atomic":!0,children:z}),N.jsx(S1,{scope:n,onClose:D,children:cl.createPortal(N.jsx(nm.ItemSlot,{scope:n,children:N.jsx(i1,{asChild:!0,onEscapeKeyDown:Nt(a,()=>{v.isFocusedToastEscapeKeyDownRef.current||D(),v.isFocusedToastEscapeKeyDownRef.current=!1}),children:N.jsx(xn.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":o?"open":"closed","data-swipe-direction":v.swipeDirection,...g,ref:_,style:{userSelect:"none",touchAction:"none",...t.style},onKeyDown:Nt(t.onKeyDown,B=>{B.key==="Escape"&&(a==null||a(B.nativeEvent),B.nativeEvent.defaultPrevented||(v.isFocusedToastEscapeKeyDownRef.current=!0,D()))}),onPointerDown:Nt(t.onPointerDown,B=>{B.button===0&&(x.current={x:B.clientX,y:B.clientY})}),onPointerMove:Nt(t.onPointerMove,B=>{if(!x.current)return;const $=B.clientX-x.current.x,H=B.clientY-x.current.y,K=!!y.current,P=["left","right"].includes(v.swipeDirection),G=["left","up"].includes(v.swipeDirection)?Math.min:Math.max,Q=P?G(0,$):0,Z=P?0:G(0,H),ce=B.pointerType==="touch"?10:2,we={x:Q,y:Z},q={originalEvent:B,delta:we};K?(y.current=we,zl(_1,f,q,{discrete:!1})):jg(we,v.swipeDirection,ce)?(y.current=we,zl(v1,d,q,{discrete:!1}),B.target.setPointerCapture(B.pointerId)):(Math.abs($)>ce||Math.abs(H)>ce)&&(x.current=null)}),onPointerUp:Nt(t.onPointerUp,B=>{const $=y.current,H=B.target;if(H.hasPointerCapture(B.pointerId)&&H.releasePointerCapture(B.pointerId),y.current=null,x.current=null,$){const K=B.currentTarget,P={originalEvent:B,delta:$};jg($,v.swipeDirection,v.swipeThreshold)?zl(y1,p,P,{discrete:!0}):zl(x1,u,P,{discrete:!0}),K.addEventListener("click",G=>G.preventDefault(),{once:!0})}})})})}),v.viewport)})]}):null}),w1=t=>{const{__scopeToast:e,children:n,...i}=t,r=Du(Nu,e),[o,s]=L.useState(!1),[a,l]=L.useState(!1);return C1(()=>s(!0)),L.useEffect(()=>{const c=window.setTimeout(()=>l(!0),1e3);return()=>window.clearTimeout(c)},[]),a?null:N.jsx(Yx,{asChild:!0,children:N.jsx(Lu,{...i,children:o&&N.jsxs(N.Fragment,{children:[r.label," ",n]})})})},T1="ToastTitle",ty=L.forwardRef((t,e)=>{const{__scopeToast:n,...i}=t;return N.jsx(xn.div,{...i,ref:e})});ty.displayName=T1;var b1="ToastDescription",ny=L.forwardRef((t,e)=>{const{__scopeToast:n,...i}=t;return N.jsx(xn.div,{...i,ref:e})});ny.displayName=b1;var iy="ToastAction",ry=L.forwardRef((t,e)=>{const{altText:n,...i}=t;return n.trim()?N.jsx(sy,{altText:n,asChild:!0,children:N.jsx(im,{...i,ref:e})}):(console.error(`Invalid prop \`altText\` supplied to \`${iy}\`. Expected non-empty \`string\`.`),null)});ry.displayName=iy;var oy="ToastClose",im=L.forwardRef((t,e)=>{const{__scopeToast:n,...i}=t,r=E1(oy,n);return N.jsx(sy,{asChild:!0,children:N.jsx(xn.button,{type:"button",...i,ref:e,onClick:Nt(t.onClick,r.onClose)})})});im.displayName=oy;var sy=L.forwardRef((t,e)=>{const{__scopeToast:n,altText:i,...r}=t;return N.jsx(xn.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":i||void 0,...r,ref:e})});function ay(t){const e=[];return Array.from(t.childNodes).forEach(i=>{if(i.nodeType===i.TEXT_NODE&&i.textContent&&e.push(i.textContent),A1(i)){const r=i.ariaHidden||i.hidden||i.style.display==="none",o=i.dataset.radixToastAnnounceExclude==="";if(!r)if(o){const s=i.dataset.radixToastAnnounceAlt;s&&e.push(s)}else e.push(...ay(i))}}),e}function zl(t,e,n,{discrete:i}){const r=n.originalEvent.currentTarget,o=new CustomEvent(t,{bubbles:!0,cancelable:!0,detail:n});e&&r.addEventListener(t,e,{once:!0}),i?Wx(r,o):r.dispatchEvent(o)}var jg=(t,e,n=0)=>{const i=Math.abs(t.x),r=Math.abs(t.y),o=i>r;return e==="left"||e==="right"?o&&i>n:!o&&r>n};function C1(t=()=>{}){const e=Ei(t);To(()=>{let n=0,i=0;return n=window.requestAnimationFrame(()=>i=window.requestAnimationFrame(e)),()=>{window.cancelAnimationFrame(n),window.cancelAnimationFrame(i)}},[e])}function A1(t){return t.nodeType===t.ELEMENT_NODE}function R1(t){const e=[],n=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:i=>{const r=i.tagName==="INPUT"&&i.type==="hidden";return i.disabled||i.hidden||r?NodeFilter.FILTER_SKIP:i.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)e.push(n.currentNode);return e}function wd(t){const e=document.activeElement;return t.some(n=>n===e?!0:(n.focus(),document.activeElement!==e))}var P1=Kx,ly=Zx,cy=ey,uy=ty,dy=ny,fy=ry,hy=im;function py(t){var e,n,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t)){var r=t.length;for(e=0;e<r;e++)t[e]&&(n=py(t[e]))&&(i&&(i+=" "),i+=n)}else for(n in t)t[n]&&(i&&(i+=" "),i+=n);return i}function my(){for(var t,e,n=0,i="",r=arguments.length;n<r;n++)(t=arguments[n])&&(e=py(t))&&(i&&(i+=" "),i+=e);return i}const Xg=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,$g=my,gy=(t,e)=>n=>{var i;if((e==null?void 0:e.variants)==null)return $g(t,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:r,defaultVariants:o}=e,s=Object.keys(r).map(c=>{const d=n==null?void 0:n[c],f=o==null?void 0:o[c];if(d===null)return null;const u=Xg(d)||Xg(f);return r[c][u]}),a=n&&Object.entries(n).reduce((c,d)=>{let[f,u]=d;return u===void 0||(c[f]=u),c},{}),l=e==null||(i=e.compoundVariants)===null||i===void 0?void 0:i.reduce((c,d)=>{let{class:f,className:u,...p}=d;return Object.entries(p).every(g=>{let[v,m]=g;return Array.isArray(m)?m.includes({...o,...a}[v]):{...o,...a}[v]===m})?[...c,f,u]:c},[]);return $g(t,s,l,n==null?void 0:n.class,n==null?void 0:n.className)};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),vy=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var D1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=L.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:o,iconNode:s,...a},l)=>L.createElement("svg",{ref:l,...D1,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:vy("lucide",r),...a},[...s.map(([c,d])=>L.createElement(c,d)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ul=(t,e)=>{const n=L.forwardRef(({className:i,...r},o)=>L.createElement(N1,{ref:o,iconNode:e,className:vy(`lucide-${L1(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I1=ul("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=ul("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=ul("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=ul("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=ul("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),rm="-",k1=t=>{const e=z1(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:i}=t;return{getClassGroupId:s=>{const a=s.split(rm);return a[0]===""&&a.length!==1&&a.shift(),xy(a,e)||B1(s)},getConflictingClassGroupIds:(s,a)=>{const l=n[s]||[];return a&&i[s]?[...l,...i[s]]:l}}},xy=(t,e)=>{var s;if(t.length===0)return e.classGroupId;const n=t[0],i=e.nextPart.get(n),r=i?xy(t.slice(1),i):void 0;if(r)return r;if(e.validators.length===0)return;const o=t.join(rm);return(s=e.validators.find(({validator:a})=>a(o)))==null?void 0:s.classGroupId},Yg=/^\[(.+)\]$/,B1=t=>{if(Yg.test(t)){const e=Yg.exec(t)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}},z1=t=>{const{theme:e,prefix:n}=t,i={nextPart:new Map,validators:[]};return V1(Object.entries(t.classGroups),n).forEach(([o,s])=>{rh(s,i,o,e)}),i},rh=(t,e,n,i)=>{t.forEach(r=>{if(typeof r=="string"){const o=r===""?e:qg(e,r);o.classGroupId=n;return}if(typeof r=="function"){if(H1(r)){rh(r(i),e,n,i);return}e.validators.push({validator:r,classGroupId:n});return}Object.entries(r).forEach(([o,s])=>{rh(s,qg(e,o),n,i)})})},qg=(t,e)=>{let n=t;return e.split(rm).forEach(i=>{n.nextPart.has(i)||n.nextPart.set(i,{nextPart:new Map,validators:[]}),n=n.nextPart.get(i)}),n},H1=t=>t.isThemeGetter,V1=(t,e)=>e?t.map(([n,i])=>{const r=i.map(o=>typeof o=="string"?e+o:typeof o=="object"?Object.fromEntries(Object.entries(o).map(([s,a])=>[e+s,a])):o);return[n,r]}):t,G1=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,i=new Map;const r=(o,s)=>{n.set(o,s),e++,e>t&&(e=0,i=n,n=new Map)};return{get(o){let s=n.get(o);if(s!==void 0)return s;if((s=i.get(o))!==void 0)return r(o,s),s},set(o,s){n.has(o)?n.set(o,s):r(o,s)}}},yy="!",W1=t=>{const{separator:e,experimentalParseClassName:n}=t,i=e.length===1,r=e[0],o=e.length,s=a=>{const l=[];let c=0,d=0,f;for(let m=0;m<a.length;m++){let h=a[m];if(c===0){if(h===r&&(i||a.slice(m,m+o)===e)){l.push(a.slice(d,m)),d=m+o;continue}if(h==="/"){f=m;continue}}h==="["?c++:h==="]"&&c--}const u=l.length===0?a:a.substring(d),p=u.startsWith(yy),g=p?u.substring(1):u,v=f&&f>d?f-d:void 0;return{modifiers:l,hasImportantModifier:p,baseClassName:g,maybePostfixModifierPosition:v}};return n?a=>n({className:a,parseClassName:s}):s},j1=t=>{if(t.length<=1)return t;const e=[];let n=[];return t.forEach(i=>{i[0]==="["?(e.push(...n.sort(),i),n=[]):n.push(i)}),e.push(...n.sort()),e},X1=t=>({cache:G1(t.cacheSize),parseClassName:W1(t),...k1(t)}),$1=/\s+/,Y1=(t,e)=>{const{parseClassName:n,getClassGroupId:i,getConflictingClassGroupIds:r}=e,o=[],s=t.trim().split($1);let a="";for(let l=s.length-1;l>=0;l-=1){const c=s[l],{modifiers:d,hasImportantModifier:f,baseClassName:u,maybePostfixModifierPosition:p}=n(c);let g=!!p,v=i(g?u.substring(0,p):u);if(!v){if(!g){a=c+(a.length>0?" "+a:a);continue}if(v=i(u),!v){a=c+(a.length>0?" "+a:a);continue}g=!1}const m=j1(d).join(":"),h=f?m+yy:m,_=h+v;if(o.includes(_))continue;o.push(_);const x=r(v,g);for(let y=0;y<x.length;++y){const T=x[y];o.push(h+T)}a=c+(a.length>0?" "+a:a)}return a};function q1(){let t=0,e,n,i="";for(;t<arguments.length;)(e=arguments[t++])&&(n=Sy(e))&&(i&&(i+=" "),i+=n);return i}const Sy=t=>{if(typeof t=="string")return t;let e,n="";for(let i=0;i<t.length;i++)t[i]&&(e=Sy(t[i]))&&(n&&(n+=" "),n+=e);return n};function K1(t,...e){let n,i,r,o=s;function s(l){const c=e.reduce((d,f)=>f(d),t());return n=X1(c),i=n.cache.get,r=n.cache.set,o=a,a(l)}function a(l){const c=i(l);if(c)return c;const d=Y1(l,n);return r(l,d),d}return function(){return o(q1.apply(null,arguments))}}const ht=t=>{const e=n=>n[t]||[];return e.isThemeGetter=!0,e},Ey=/^\[(?:([a-z-]+):)?(.+)\]$/i,Q1=/^\d+\/\d+$/,Z1=new Set(["px","full","screen"]),J1=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,eT=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,tT=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,nT=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,iT=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,bi=t=>ps(t)||Z1.has(t)||Q1.test(t),tr=t=>$s(t,"length",dT),ps=t=>!!t&&!Number.isNaN(Number(t)),Td=t=>$s(t,"number",ps),la=t=>!!t&&Number.isInteger(Number(t)),rT=t=>t.endsWith("%")&&ps(t.slice(0,-1)),Ge=t=>Ey.test(t),nr=t=>J1.test(t),oT=new Set(["length","size","percentage"]),sT=t=>$s(t,oT,My),aT=t=>$s(t,"position",My),lT=new Set(["image","url"]),cT=t=>$s(t,lT,hT),uT=t=>$s(t,"",fT),ca=()=>!0,$s=(t,e,n)=>{const i=Ey.exec(t);return i?i[1]?typeof e=="string"?i[1]===e:e.has(i[1]):n(i[2]):!1},dT=t=>eT.test(t)&&!tT.test(t),My=()=>!1,fT=t=>nT.test(t),hT=t=>iT.test(t),pT=()=>{const t=ht("colors"),e=ht("spacing"),n=ht("blur"),i=ht("brightness"),r=ht("borderColor"),o=ht("borderRadius"),s=ht("borderSpacing"),a=ht("borderWidth"),l=ht("contrast"),c=ht("grayscale"),d=ht("hueRotate"),f=ht("invert"),u=ht("gap"),p=ht("gradientColorStops"),g=ht("gradientColorStopPositions"),v=ht("inset"),m=ht("margin"),h=ht("opacity"),_=ht("padding"),x=ht("saturate"),y=ht("scale"),T=ht("sepia"),C=ht("skew"),b=ht("space"),A=ht("translate"),M=()=>["auto","contain","none"],S=()=>["auto","hidden","clip","visible","scroll"],D=()=>["auto",Ge,e],k=()=>[Ge,e],z=()=>["",bi,tr],B=()=>["auto",ps,Ge],$=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],H=()=>["solid","dashed","dotted","double","none"],K=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],P=()=>["start","end","center","between","around","evenly","stretch"],G=()=>["","0",Ge],Q=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Z=()=>[ps,Ge];return{cacheSize:500,separator:":",theme:{colors:[ca],spacing:[bi,tr],blur:["none","",nr,Ge],brightness:Z(),borderColor:[t],borderRadius:["none","","full",nr,Ge],borderSpacing:k(),borderWidth:z(),contrast:Z(),grayscale:G(),hueRotate:Z(),invert:G(),gap:k(),gradientColorStops:[t],gradientColorStopPositions:[rT,tr],inset:D(),margin:D(),opacity:Z(),padding:k(),saturate:Z(),scale:Z(),sepia:G(),skew:Z(),space:k(),translate:k()},classGroups:{aspect:[{aspect:["auto","square","video",Ge]}],container:["container"],columns:[{columns:[nr]}],"break-after":[{"break-after":Q()}],"break-before":[{"break-before":Q()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...$(),Ge]}],overflow:[{overflow:S()}],"overflow-x":[{"overflow-x":S()}],"overflow-y":[{"overflow-y":S()}],overscroll:[{overscroll:M()}],"overscroll-x":[{"overscroll-x":M()}],"overscroll-y":[{"overscroll-y":M()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[v]}],"inset-x":[{"inset-x":[v]}],"inset-y":[{"inset-y":[v]}],start:[{start:[v]}],end:[{end:[v]}],top:[{top:[v]}],right:[{right:[v]}],bottom:[{bottom:[v]}],left:[{left:[v]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",la,Ge]}],basis:[{basis:D()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Ge]}],grow:[{grow:G()}],shrink:[{shrink:G()}],order:[{order:["first","last","none",la,Ge]}],"grid-cols":[{"grid-cols":[ca]}],"col-start-end":[{col:["auto",{span:["full",la,Ge]},Ge]}],"col-start":[{"col-start":B()}],"col-end":[{"col-end":B()}],"grid-rows":[{"grid-rows":[ca]}],"row-start-end":[{row:["auto",{span:[la,Ge]},Ge]}],"row-start":[{"row-start":B()}],"row-end":[{"row-end":B()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Ge]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Ge]}],gap:[{gap:[u]}],"gap-x":[{"gap-x":[u]}],"gap-y":[{"gap-y":[u]}],"justify-content":[{justify:["normal",...P()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...P(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...P(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[_]}],px:[{px:[_]}],py:[{py:[_]}],ps:[{ps:[_]}],pe:[{pe:[_]}],pt:[{pt:[_]}],pr:[{pr:[_]}],pb:[{pb:[_]}],pl:[{pl:[_]}],m:[{m:[m]}],mx:[{mx:[m]}],my:[{my:[m]}],ms:[{ms:[m]}],me:[{me:[m]}],mt:[{mt:[m]}],mr:[{mr:[m]}],mb:[{mb:[m]}],ml:[{ml:[m]}],"space-x":[{"space-x":[b]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[b]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",Ge,e]}],"min-w":[{"min-w":[Ge,e,"min","max","fit"]}],"max-w":[{"max-w":[Ge,e,"none","full","min","max","fit","prose",{screen:[nr]},nr]}],h:[{h:[Ge,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[Ge,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[Ge,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[Ge,e,"auto","min","max","fit"]}],"font-size":[{text:["base",nr,tr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Td]}],"font-family":[{font:[ca]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Ge]}],"line-clamp":[{"line-clamp":["none",ps,Td]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",bi,Ge]}],"list-image":[{"list-image":["none",Ge]}],"list-style-type":[{list:["none","disc","decimal",Ge]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[h]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[h]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...H(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",bi,tr]}],"underline-offset":[{"underline-offset":["auto",bi,Ge]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:k()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Ge]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Ge]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[h]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...$(),aT]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",sT]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},cT]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[g]}],"gradient-via-pos":[{via:[g]}],"gradient-to-pos":[{to:[g]}],"gradient-from":[{from:[p]}],"gradient-via":[{via:[p]}],"gradient-to":[{to:[p]}],rounded:[{rounded:[o]}],"rounded-s":[{"rounded-s":[o]}],"rounded-e":[{"rounded-e":[o]}],"rounded-t":[{"rounded-t":[o]}],"rounded-r":[{"rounded-r":[o]}],"rounded-b":[{"rounded-b":[o]}],"rounded-l":[{"rounded-l":[o]}],"rounded-ss":[{"rounded-ss":[o]}],"rounded-se":[{"rounded-se":[o]}],"rounded-ee":[{"rounded-ee":[o]}],"rounded-es":[{"rounded-es":[o]}],"rounded-tl":[{"rounded-tl":[o]}],"rounded-tr":[{"rounded-tr":[o]}],"rounded-br":[{"rounded-br":[o]}],"rounded-bl":[{"rounded-bl":[o]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[h]}],"border-style":[{border:[...H(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[h]}],"divide-style":[{divide:H()}],"border-color":[{border:[r]}],"border-color-x":[{"border-x":[r]}],"border-color-y":[{"border-y":[r]}],"border-color-s":[{"border-s":[r]}],"border-color-e":[{"border-e":[r]}],"border-color-t":[{"border-t":[r]}],"border-color-r":[{"border-r":[r]}],"border-color-b":[{"border-b":[r]}],"border-color-l":[{"border-l":[r]}],"divide-color":[{divide:[r]}],"outline-style":[{outline:["",...H()]}],"outline-offset":[{"outline-offset":[bi,Ge]}],"outline-w":[{outline:[bi,tr]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:z()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[h]}],"ring-offset-w":[{"ring-offset":[bi,tr]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",nr,uT]}],"shadow-color":[{shadow:[ca]}],opacity:[{opacity:[h]}],"mix-blend":[{"mix-blend":[...K(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":K()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[i]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",nr,Ge]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[f]}],saturate:[{saturate:[x]}],sepia:[{sepia:[T]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[i]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[f]}],"backdrop-opacity":[{"backdrop-opacity":[h]}],"backdrop-saturate":[{"backdrop-saturate":[x]}],"backdrop-sepia":[{"backdrop-sepia":[T]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Ge]}],duration:[{duration:Z()}],ease:[{ease:["linear","in","out","in-out",Ge]}],delay:[{delay:Z()}],animate:[{animate:["none","spin","ping","pulse","bounce",Ge]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[y]}],"scale-x":[{"scale-x":[y]}],"scale-y":[{"scale-y":[y]}],rotate:[{rotate:[la,Ge]}],"translate-x":[{"translate-x":[A]}],"translate-y":[{"translate-y":[A]}],"skew-x":[{"skew-x":[C]}],"skew-y":[{"skew-y":[C]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Ge]}],accent:[{accent:["auto",t]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Ge]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":k()}],"scroll-mx":[{"scroll-mx":k()}],"scroll-my":[{"scroll-my":k()}],"scroll-ms":[{"scroll-ms":k()}],"scroll-me":[{"scroll-me":k()}],"scroll-mt":[{"scroll-mt":k()}],"scroll-mr":[{"scroll-mr":k()}],"scroll-mb":[{"scroll-mb":k()}],"scroll-ml":[{"scroll-ml":k()}],"scroll-p":[{"scroll-p":k()}],"scroll-px":[{"scroll-px":k()}],"scroll-py":[{"scroll-py":k()}],"scroll-ps":[{"scroll-ps":k()}],"scroll-pe":[{"scroll-pe":k()}],"scroll-pt":[{"scroll-pt":k()}],"scroll-pr":[{"scroll-pr":k()}],"scroll-pb":[{"scroll-pb":k()}],"scroll-pl":[{"scroll-pl":k()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Ge]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[bi,tr,Td]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},mT=K1(pT);function jr(...t){return mT(my(t))}const gT=P1,wy=L.forwardRef(({className:t,...e},n)=>N.jsx(ly,{ref:n,className:jr("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",t),...e}));wy.displayName=ly.displayName;const vT=gy("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),Ty=L.forwardRef(({className:t,variant:e,...n},i)=>N.jsx(cy,{ref:i,className:jr(vT({variant:e}),t),...n}));Ty.displayName=cy.displayName;const _T=L.forwardRef(({className:t,...e},n)=>N.jsx(fy,{ref:n,className:jr("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",t),...e}));_T.displayName=fy.displayName;const by=L.forwardRef(({className:t,...e},n)=>N.jsx(hy,{ref:n,className:jr("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",t),"toast-close":"",...e,children:N.jsx(O1,{className:"h-4 w-4"})}));by.displayName=hy.displayName;const Cy=L.forwardRef(({className:t,...e},n)=>N.jsx(uy,{ref:n,className:jr("text-sm font-semibold",t),...e}));Cy.displayName=uy.displayName;const Ay=L.forwardRef(({className:t,...e},n)=>N.jsx(dy,{ref:n,className:jr("text-sm opacity-90",t),...e}));Ay.displayName=dy.displayName;function xT(){const{toasts:t}=zw();return N.jsxs(gT,{children:[t.map(function({id:e,title:n,description:i,action:r,...o}){return N.jsxs(Ty,{...o,children:[N.jsxs("div",{className:"grid gap-1",children:[n&&N.jsx(Cy,{children:n}),i&&N.jsx(Ay,{children:i})]}),r,N.jsx(by,{})]},e)}),N.jsx(wy,{})]})}var Kg=["light","dark"],yT="(prefers-color-scheme: dark)",ST=L.createContext(void 0),ET={setTheme:t=>{},themes:[]},MT=()=>{var t;return(t=L.useContext(ST))!=null?t:ET};L.memo(({forcedTheme:t,storageKey:e,attribute:n,enableSystem:i,enableColorScheme:r,defaultTheme:o,value:s,attrs:a,nonce:l})=>{let c=o==="system",d=n==="class"?`var d=document.documentElement,c=d.classList;${`c.remove(${a.map(g=>`'${g}'`).join(",")})`};`:`var d=document.documentElement,n='${n}',s='setAttribute';`,f=r?Kg.includes(o)&&o?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${o}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",u=(g,v=!1,m=!0)=>{let h=s?s[g]:g,_=v?g+"|| ''":`'${h}'`,x="";return r&&m&&!v&&Kg.includes(g)&&(x+=`d.style.colorScheme = '${g}';`),n==="class"?v||h?x+=`c.add(${_})`:x+="null":h&&(x+=`d[s](n,${_})`),x},p=t?`!function(){${d}${u(t)}}()`:i?`!function(){try{${d}var e=localStorage.getItem('${e}');if('system'===e||(!e&&${c})){var t='${yT}',m=window.matchMedia(t);if(m.media!==t||m.matches){${u("dark")}}else{${u("light")}}}else if(e){${s?`var x=${JSON.stringify(s)};`:""}${u(s?"x[e]":"e",!0)}}${c?"":"else{"+u(o,!1,!1)+"}"}${f}}catch(e){}}()`:`!function(){try{${d}var e=localStorage.getItem('${e}');if(e){${s?`var x=${JSON.stringify(s)};`:""}${u(s?"x[e]":"e",!0)}}else{${u(o,!1,!1)};}${f}}catch(t){}}();`;return L.createElement("script",{nonce:l,dangerouslySetInnerHTML:{__html:p}})});var wT=t=>{switch(t){case"success":return CT;case"info":return RT;case"warning":return AT;case"error":return PT;default:return null}},TT=Array(12).fill(0),bT=({visible:t})=>fe.createElement("div",{className:"sonner-loading-wrapper","data-visible":t},fe.createElement("div",{className:"sonner-spinner"},TT.map((e,n)=>fe.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${n}`})))),CT=fe.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},fe.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),AT=fe.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},fe.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),RT=fe.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},fe.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),PT=fe.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},fe.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),LT=()=>{let[t,e]=fe.useState(document.hidden);return fe.useEffect(()=>{let n=()=>{e(document.hidden)};return document.addEventListener("visibilitychange",n),()=>window.removeEventListener("visibilitychange",n)},[]),t},oh=1,DT=class{constructor(){this.subscribe=t=>(this.subscribers.push(t),()=>{let e=this.subscribers.indexOf(t);this.subscribers.splice(e,1)}),this.publish=t=>{this.subscribers.forEach(e=>e(t))},this.addToast=t=>{this.publish(t),this.toasts=[...this.toasts,t]},this.create=t=>{var e;let{message:n,...i}=t,r=typeof(t==null?void 0:t.id)=="number"||((e=t.id)==null?void 0:e.length)>0?t.id:oh++,o=this.toasts.find(a=>a.id===r),s=t.dismissible===void 0?!0:t.dismissible;return o?this.toasts=this.toasts.map(a=>a.id===r?(this.publish({...a,...t,id:r,title:n}),{...a,...t,id:r,dismissible:s,title:n}):a):this.addToast({title:n,...i,dismissible:s,id:r}),r},this.dismiss=t=>(t||this.toasts.forEach(e=>{this.subscribers.forEach(n=>n({id:e.id,dismiss:!0}))}),this.subscribers.forEach(e=>e({id:t,dismiss:!0})),t),this.message=(t,e)=>this.create({...e,message:t}),this.error=(t,e)=>this.create({...e,message:t,type:"error"}),this.success=(t,e)=>this.create({...e,type:"success",message:t}),this.info=(t,e)=>this.create({...e,type:"info",message:t}),this.warning=(t,e)=>this.create({...e,type:"warning",message:t}),this.loading=(t,e)=>this.create({...e,type:"loading",message:t}),this.promise=(t,e)=>{if(!e)return;let n;e.loading!==void 0&&(n=this.create({...e,promise:t,type:"loading",message:e.loading,description:typeof e.description!="function"?e.description:void 0}));let i=t instanceof Promise?t:t(),r=n!==void 0;return i.then(async o=>{if(IT(o)&&!o.ok){r=!1;let s=typeof e.error=="function"?await e.error(`HTTP error! status: ${o.status}`):e.error,a=typeof e.description=="function"?await e.description(`HTTP error! status: ${o.status}`):e.description;this.create({id:n,type:"error",message:s,description:a})}else if(e.success!==void 0){r=!1;let s=typeof e.success=="function"?await e.success(o):e.success,a=typeof e.description=="function"?await e.description(o):e.description;this.create({id:n,type:"success",message:s,description:a})}}).catch(async o=>{if(e.error!==void 0){r=!1;let s=typeof e.error=="function"?await e.error(o):e.error,a=typeof e.description=="function"?await e.description(o):e.description;this.create({id:n,type:"error",message:s,description:a})}}).finally(()=>{var o;r&&(this.dismiss(n),n=void 0),(o=e.finally)==null||o.call(e)}),n},this.custom=(t,e)=>{let n=(e==null?void 0:e.id)||oh++;return this.create({jsx:t(n),id:n,...e}),n},this.subscribers=[],this.toasts=[]}},wn=new DT,NT=(t,e)=>{let n=(e==null?void 0:e.id)||oh++;return wn.addToast({title:t,...e,id:n}),n},IT=t=>t&&typeof t=="object"&&"ok"in t&&typeof t.ok=="boolean"&&"status"in t&&typeof t.status=="number",UT=NT,FT=()=>wn.toasts;Object.assign(UT,{success:wn.success,info:wn.info,warning:wn.warning,error:wn.error,custom:wn.custom,message:wn.message,promise:wn.promise,dismiss:wn.dismiss,loading:wn.loading},{getHistory:FT});function OT(t,{insertAt:e}={}){if(typeof document>"u")return;let n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",e==="top"&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}OT(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function Hl(t){return t.label!==void 0}var kT=3,BT="32px",zT=4e3,HT=356,VT=14,GT=20,WT=200;function jT(...t){return t.filter(Boolean).join(" ")}var XT=t=>{var e,n,i,r,o,s,a,l,c,d;let{invert:f,toast:u,unstyled:p,interacting:g,setHeights:v,visibleToasts:m,heights:h,index:_,toasts:x,expanded:y,removeToast:T,defaultRichColors:C,closeButton:b,style:A,cancelButtonStyle:M,actionButtonStyle:S,className:D="",descriptionClassName:k="",duration:z,position:B,gap:$,loadingIcon:H,expandByDefault:K,classNames:P,icons:G,closeButtonAriaLabel:Q="Close toast",pauseWhenPageIsHidden:Z,cn:ce}=t,[we,q]=fe.useState(!1),[oe,le]=fe.useState(!1),[de,Ae]=fe.useState(!1),[Pe,Ue]=fe.useState(!1),[ct,je]=fe.useState(0),[st,U]=fe.useState(0),zt=fe.useRef(null),ke=fe.useRef(null),Ye=_===0,Re=_+1<=m,Be=u.type,Ce=u.dismissible!==!1,R=u.className||"",E=u.descriptionClassName||"",V=fe.useMemo(()=>h.findIndex(xe=>xe.toastId===u.id)||0,[h,u.id]),ne=fe.useMemo(()=>{var xe;return(xe=u.closeButton)!=null?xe:b},[u.closeButton,b]),ie=fe.useMemo(()=>u.duration||z||zT,[u.duration,z]),ee=fe.useRef(0),Te=fe.useRef(0),pe=fe.useRef(0),_e=fe.useRef(null),[Ke,ue]=B.split("-"),Se=fe.useMemo(()=>h.reduce((xe,I,re)=>re>=V?xe:xe+I.height,0),[h,V]),Le=LT(),Ie=u.invert||f,ye=Be==="loading";Te.current=fe.useMemo(()=>V*$+Se,[V,Se]),fe.useEffect(()=>{q(!0)},[]),fe.useLayoutEffect(()=>{if(!we)return;let xe=ke.current,I=xe.style.height;xe.style.height="auto";let re=xe.getBoundingClientRect().height;xe.style.height=I,U(re),v(Y=>Y.find(J=>J.toastId===u.id)?Y.map(J=>J.toastId===u.id?{...J,height:re}:J):[{toastId:u.id,height:re,position:u.position},...Y])},[we,u.title,u.description,v,u.id]);let ze=fe.useCallback(()=>{le(!0),je(Te.current),v(xe=>xe.filter(I=>I.toastId!==u.id)),setTimeout(()=>{T(u)},WT)},[u,T,v,Te]);fe.useEffect(()=>{if(u.promise&&Be==="loading"||u.duration===1/0||u.type==="loading")return;let xe,I=ie;return y||g||Z&&Le?(()=>{if(pe.current<ee.current){let re=new Date().getTime()-ee.current;I=I-re}pe.current=new Date().getTime()})():I!==1/0&&(ee.current=new Date().getTime(),xe=setTimeout(()=>{var re;(re=u.onAutoClose)==null||re.call(u,u),ze()},I)),()=>clearTimeout(xe)},[y,g,K,u,ie,ze,u.promise,Be,Z,Le]),fe.useEffect(()=>{let xe=ke.current;if(xe){let I=xe.getBoundingClientRect().height;return U(I),v(re=>[{toastId:u.id,height:I,position:u.position},...re]),()=>v(re=>re.filter(Y=>Y.toastId!==u.id))}},[v,u.id]),fe.useEffect(()=>{u.delete&&ze()},[ze,u.delete]);function He(){return G!=null&&G.loading?fe.createElement("div",{className:"sonner-loader","data-visible":Be==="loading"},G.loading):H?fe.createElement("div",{className:"sonner-loader","data-visible":Be==="loading"},H):fe.createElement(bT,{visible:Be==="loading"})}return fe.createElement("li",{"aria-live":u.important?"assertive":"polite","aria-atomic":"true",role:"status",tabIndex:0,ref:ke,className:ce(D,R,P==null?void 0:P.toast,(e=u==null?void 0:u.classNames)==null?void 0:e.toast,P==null?void 0:P.default,P==null?void 0:P[Be],(n=u==null?void 0:u.classNames)==null?void 0:n[Be]),"data-sonner-toast":"","data-rich-colors":(i=u.richColors)!=null?i:C,"data-styled":!(u.jsx||u.unstyled||p),"data-mounted":we,"data-promise":!!u.promise,"data-removed":oe,"data-visible":Re,"data-y-position":Ke,"data-x-position":ue,"data-index":_,"data-front":Ye,"data-swiping":de,"data-dismissible":Ce,"data-type":Be,"data-invert":Ie,"data-swipe-out":Pe,"data-expanded":!!(y||K&&we),style:{"--index":_,"--toasts-before":_,"--z-index":x.length-_,"--offset":`${oe?ct:Te.current}px`,"--initial-height":K?"auto":`${st}px`,...A,...u.style},onPointerDown:xe=>{ye||!Ce||(zt.current=new Date,je(Te.current),xe.target.setPointerCapture(xe.pointerId),xe.target.tagName!=="BUTTON"&&(Ae(!0),_e.current={x:xe.clientX,y:xe.clientY}))},onPointerUp:()=>{var xe,I,re,Y;if(Pe||!Ce)return;_e.current=null;let J=Number(((xe=ke.current)==null?void 0:xe.style.getPropertyValue("--swipe-amount").replace("px",""))||0),me=new Date().getTime()-((I=zt.current)==null?void 0:I.getTime()),ge=Math.abs(J)/me;if(Math.abs(J)>=GT||ge>.11){je(Te.current),(re=u.onDismiss)==null||re.call(u,u),ze(),Ue(!0);return}(Y=ke.current)==null||Y.style.setProperty("--swipe-amount","0px"),Ae(!1)},onPointerMove:xe=>{var I;if(!_e.current||!Ce)return;let re=xe.clientY-_e.current.y,Y=xe.clientX-_e.current.x,J=(Ke==="top"?Math.min:Math.max)(0,re),me=xe.pointerType==="touch"?10:2;Math.abs(J)>me?(I=ke.current)==null||I.style.setProperty("--swipe-amount",`${re}px`):Math.abs(Y)>me&&(_e.current=null)}},ne&&!u.jsx?fe.createElement("button",{"aria-label":Q,"data-disabled":ye,"data-close-button":!0,onClick:ye||!Ce?()=>{}:()=>{var xe;ze(),(xe=u.onDismiss)==null||xe.call(u,u)},className:ce(P==null?void 0:P.closeButton,(r=u==null?void 0:u.classNames)==null?void 0:r.closeButton)},fe.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},fe.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),fe.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))):null,u.jsx||fe.isValidElement(u.title)?u.jsx||u.title:fe.createElement(fe.Fragment,null,Be||u.icon||u.promise?fe.createElement("div",{"data-icon":"",className:ce(P==null?void 0:P.icon,(o=u==null?void 0:u.classNames)==null?void 0:o.icon)},u.promise||u.type==="loading"&&!u.icon?u.icon||He():null,u.type!=="loading"?u.icon||(G==null?void 0:G[Be])||wT(Be):null):null,fe.createElement("div",{"data-content":"",className:ce(P==null?void 0:P.content,(s=u==null?void 0:u.classNames)==null?void 0:s.content)},fe.createElement("div",{"data-title":"",className:ce(P==null?void 0:P.title,(a=u==null?void 0:u.classNames)==null?void 0:a.title)},u.title),u.description?fe.createElement("div",{"data-description":"",className:ce(k,E,P==null?void 0:P.description,(l=u==null?void 0:u.classNames)==null?void 0:l.description)},u.description):null),fe.isValidElement(u.cancel)?u.cancel:u.cancel&&Hl(u.cancel)?fe.createElement("button",{"data-button":!0,"data-cancel":!0,style:u.cancelButtonStyle||M,onClick:xe=>{var I,re;Hl(u.cancel)&&Ce&&((re=(I=u.cancel).onClick)==null||re.call(I,xe),ze())},className:ce(P==null?void 0:P.cancelButton,(c=u==null?void 0:u.classNames)==null?void 0:c.cancelButton)},u.cancel.label):null,fe.isValidElement(u.action)?u.action:u.action&&Hl(u.action)?fe.createElement("button",{"data-button":!0,"data-action":!0,style:u.actionButtonStyle||S,onClick:xe=>{var I,re;Hl(u.action)&&(xe.defaultPrevented||((re=(I=u.action).onClick)==null||re.call(I,xe),ze()))},className:ce(P==null?void 0:P.actionButton,(d=u==null?void 0:u.classNames)==null?void 0:d.actionButton)},u.action.label):null))};function Qg(){if(typeof window>"u"||typeof document>"u")return"ltr";let t=document.documentElement.getAttribute("dir");return t==="auto"||!t?window.getComputedStyle(document.documentElement).direction:t}var $T=t=>{let{invert:e,position:n="bottom-right",hotkey:i=["altKey","KeyT"],expand:r,closeButton:o,className:s,offset:a,theme:l="light",richColors:c,duration:d,style:f,visibleToasts:u=kT,toastOptions:p,dir:g=Qg(),gap:v=VT,loadingIcon:m,icons:h,containerAriaLabel:_="Notifications",pauseWhenPageIsHidden:x,cn:y=jT}=t,[T,C]=fe.useState([]),b=fe.useMemo(()=>Array.from(new Set([n].concat(T.filter(Z=>Z.position).map(Z=>Z.position)))),[T,n]),[A,M]=fe.useState([]),[S,D]=fe.useState(!1),[k,z]=fe.useState(!1),[B,$]=fe.useState(l!=="system"?l:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),H=fe.useRef(null),K=i.join("+").replace(/Key/g,"").replace(/Digit/g,""),P=fe.useRef(null),G=fe.useRef(!1),Q=fe.useCallback(Z=>{var ce;(ce=T.find(we=>we.id===Z.id))!=null&&ce.delete||wn.dismiss(Z.id),C(we=>we.filter(({id:q})=>q!==Z.id))},[T]);return fe.useEffect(()=>wn.subscribe(Z=>{if(Z.dismiss){C(ce=>ce.map(we=>we.id===Z.id?{...we,delete:!0}:we));return}setTimeout(()=>{Bx.flushSync(()=>{C(ce=>{let we=ce.findIndex(q=>q.id===Z.id);return we!==-1?[...ce.slice(0,we),{...ce[we],...Z},...ce.slice(we+1)]:[Z,...ce]})})})}),[]),fe.useEffect(()=>{if(l!=="system"){$(l);return}l==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?$("dark"):$("light")),typeof window<"u"&&window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",({matches:Z})=>{$(Z?"dark":"light")})},[l]),fe.useEffect(()=>{T.length<=1&&D(!1)},[T]),fe.useEffect(()=>{let Z=ce=>{var we,q;i.every(oe=>ce[oe]||ce.code===oe)&&(D(!0),(we=H.current)==null||we.focus()),ce.code==="Escape"&&(document.activeElement===H.current||(q=H.current)!=null&&q.contains(document.activeElement))&&D(!1)};return document.addEventListener("keydown",Z),()=>document.removeEventListener("keydown",Z)},[i]),fe.useEffect(()=>{if(H.current)return()=>{P.current&&(P.current.focus({preventScroll:!0}),P.current=null,G.current=!1)}},[H.current]),T.length?fe.createElement("section",{"aria-label":`${_} ${K}`,tabIndex:-1},b.map((Z,ce)=>{var we;let[q,oe]=Z.split("-");return fe.createElement("ol",{key:Z,dir:g==="auto"?Qg():g,tabIndex:-1,ref:H,className:s,"data-sonner-toaster":!0,"data-theme":B,"data-y-position":q,"data-x-position":oe,style:{"--front-toast-height":`${((we=A[0])==null?void 0:we.height)||0}px`,"--offset":typeof a=="number"?`${a}px`:a||BT,"--width":`${HT}px`,"--gap":`${v}px`,...f},onBlur:le=>{G.current&&!le.currentTarget.contains(le.relatedTarget)&&(G.current=!1,P.current&&(P.current.focus({preventScroll:!0}),P.current=null))},onFocus:le=>{le.target instanceof HTMLElement&&le.target.dataset.dismissible==="false"||G.current||(G.current=!0,P.current=le.relatedTarget)},onMouseEnter:()=>D(!0),onMouseMove:()=>D(!0),onMouseLeave:()=>{k||D(!1)},onPointerDown:le=>{le.target instanceof HTMLElement&&le.target.dataset.dismissible==="false"||z(!0)},onPointerUp:()=>z(!1)},T.filter(le=>!le.position&&ce===0||le.position===Z).map((le,de)=>{var Ae,Pe;return fe.createElement(XT,{key:le.id,icons:h,index:de,toast:le,defaultRichColors:c,duration:(Ae=p==null?void 0:p.duration)!=null?Ae:d,className:p==null?void 0:p.className,descriptionClassName:p==null?void 0:p.descriptionClassName,invert:e,visibleToasts:u,closeButton:(Pe=p==null?void 0:p.closeButton)!=null?Pe:o,interacting:k,position:Z,style:p==null?void 0:p.style,unstyled:p==null?void 0:p.unstyled,classNames:p==null?void 0:p.classNames,cancelButtonStyle:p==null?void 0:p.cancelButtonStyle,actionButtonStyle:p==null?void 0:p.actionButtonStyle,removeToast:Q,toasts:T.filter(Ue=>Ue.position==le.position),heights:A.filter(Ue=>Ue.position==le.position),setHeights:M,expandByDefault:r,gap:v,loadingIcon:m,expanded:S,pauseWhenPageIsHidden:x,cn:y})}))})):null};const YT=({...t})=>{const{theme:e="system"}=MT();return N.jsx($T,{theme:e,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...t})},qT=["top","right","bottom","left"],Fr=Math.min,bn=Math.max,ou=Math.round,Vl=Math.floor,Or=t=>({x:t,y:t}),KT={left:"right",right:"left",bottom:"top",top:"bottom"},QT={start:"end",end:"start"};function sh(t,e,n){return bn(t,Fr(e,n))}function Yi(t,e){return typeof t=="function"?t(e):t}function qi(t){return t.split("-")[0]}function Ys(t){return t.split("-")[1]}function om(t){return t==="x"?"y":"x"}function sm(t){return t==="y"?"height":"width"}function kr(t){return["top","bottom"].includes(qi(t))?"y":"x"}function am(t){return om(kr(t))}function ZT(t,e,n){n===void 0&&(n=!1);const i=Ys(t),r=am(t),o=sm(r);let s=r==="x"?i===(n?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[o]>e.floating[o]&&(s=su(s)),[s,su(s)]}function JT(t){const e=su(t);return[ah(t),e,ah(e)]}function ah(t){return t.replace(/start|end/g,e=>QT[e])}function eb(t,e,n){const i=["left","right"],r=["right","left"],o=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return n?e?r:i:e?i:r;case"left":case"right":return e?o:s;default:return[]}}function tb(t,e,n,i){const r=Ys(t);let o=eb(qi(t),n==="start",i);return r&&(o=o.map(s=>s+"-"+r),e&&(o=o.concat(o.map(ah)))),o}function su(t){return t.replace(/left|right|bottom|top/g,e=>KT[e])}function nb(t){return{top:0,right:0,bottom:0,left:0,...t}}function Ry(t){return typeof t!="number"?nb(t):{top:t,right:t,bottom:t,left:t}}function au(t){const{x:e,y:n,width:i,height:r}=t;return{width:i,height:r,top:n,left:e,right:e+i,bottom:n+r,x:e,y:n}}function Zg(t,e,n){let{reference:i,floating:r}=t;const o=kr(e),s=am(e),a=sm(s),l=qi(e),c=o==="y",d=i.x+i.width/2-r.width/2,f=i.y+i.height/2-r.height/2,u=i[a]/2-r[a]/2;let p;switch(l){case"top":p={x:d,y:i.y-r.height};break;case"bottom":p={x:d,y:i.y+i.height};break;case"right":p={x:i.x+i.width,y:f};break;case"left":p={x:i.x-r.width,y:f};break;default:p={x:i.x,y:i.y}}switch(Ys(e)){case"start":p[s]-=u*(n&&c?-1:1);break;case"end":p[s]+=u*(n&&c?-1:1);break}return p}const ib=async(t,e,n)=>{const{placement:i="bottom",strategy:r="absolute",middleware:o=[],platform:s}=n,a=o.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(e));let c=await s.getElementRects({reference:t,floating:e,strategy:r}),{x:d,y:f}=Zg(c,i,l),u=i,p={},g=0;for(let v=0;v<a.length;v++){const{name:m,fn:h}=a[v],{x:_,y:x,data:y,reset:T}=await h({x:d,y:f,initialPlacement:i,placement:u,strategy:r,middlewareData:p,rects:c,platform:s,elements:{reference:t,floating:e}});d=_??d,f=x??f,p={...p,[m]:{...p[m],...y}},T&&g<=50&&(g++,typeof T=="object"&&(T.placement&&(u=T.placement),T.rects&&(c=T.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:r}):T.rects),{x:d,y:f}=Zg(c,u,l)),v=-1)}return{x:d,y:f,placement:u,strategy:r,middlewareData:p}};async function Ya(t,e){var n;e===void 0&&(e={});const{x:i,y:r,platform:o,rects:s,elements:a,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:f="floating",altBoundary:u=!1,padding:p=0}=Yi(e,t),g=Ry(p),m=a[u?f==="floating"?"reference":"floating":f],h=au(await o.getClippingRect({element:(n=await(o.isElement==null?void 0:o.isElement(m)))==null||n?m:m.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(a.floating)),boundary:c,rootBoundary:d,strategy:l})),_=f==="floating"?{x:i,y:r,width:s.floating.width,height:s.floating.height}:s.reference,x=await(o.getOffsetParent==null?void 0:o.getOffsetParent(a.floating)),y=await(o.isElement==null?void 0:o.isElement(x))?await(o.getScale==null?void 0:o.getScale(x))||{x:1,y:1}:{x:1,y:1},T=au(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:_,offsetParent:x,strategy:l}):_);return{top:(h.top-T.top+g.top)/y.y,bottom:(T.bottom-h.bottom+g.bottom)/y.y,left:(h.left-T.left+g.left)/y.x,right:(T.right-h.right+g.right)/y.x}}const rb=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:i,placement:r,rects:o,platform:s,elements:a,middlewareData:l}=e,{element:c,padding:d=0}=Yi(t,e)||{};if(c==null)return{};const f=Ry(d),u={x:n,y:i},p=am(r),g=sm(p),v=await s.getDimensions(c),m=p==="y",h=m?"top":"left",_=m?"bottom":"right",x=m?"clientHeight":"clientWidth",y=o.reference[g]+o.reference[p]-u[p]-o.floating[g],T=u[p]-o.reference[p],C=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c));let b=C?C[x]:0;(!b||!await(s.isElement==null?void 0:s.isElement(C)))&&(b=a.floating[x]||o.floating[g]);const A=y/2-T/2,M=b/2-v[g]/2-1,S=Fr(f[h],M),D=Fr(f[_],M),k=S,z=b-v[g]-D,B=b/2-v[g]/2+A,$=sh(k,B,z),H=!l.arrow&&Ys(r)!=null&&B!==$&&o.reference[g]/2-(B<k?S:D)-v[g]/2<0,K=H?B<k?B-k:B-z:0;return{[p]:u[p]+K,data:{[p]:$,centerOffset:B-$-K,...H&&{alignmentOffset:K}},reset:H}}}),ob=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,i;const{placement:r,middlewareData:o,rects:s,initialPlacement:a,platform:l,elements:c}=e,{mainAxis:d=!0,crossAxis:f=!0,fallbackPlacements:u,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:v=!0,...m}=Yi(t,e);if((n=o.arrow)!=null&&n.alignmentOffset)return{};const h=qi(r),_=kr(a),x=qi(a)===a,y=await(l.isRTL==null?void 0:l.isRTL(c.floating)),T=u||(x||!v?[su(a)]:JT(a)),C=g!=="none";!u&&C&&T.push(...tb(a,v,g,y));const b=[a,...T],A=await Ya(e,m),M=[];let S=((i=o.flip)==null?void 0:i.overflows)||[];if(d&&M.push(A[h]),f){const B=ZT(r,s,y);M.push(A[B[0]],A[B[1]])}if(S=[...S,{placement:r,overflows:M}],!M.every(B=>B<=0)){var D,k;const B=(((D=o.flip)==null?void 0:D.index)||0)+1,$=b[B];if($)return{data:{index:B,overflows:S},reset:{placement:$}};let H=(k=S.filter(K=>K.overflows[0]<=0).sort((K,P)=>K.overflows[1]-P.overflows[1])[0])==null?void 0:k.placement;if(!H)switch(p){case"bestFit":{var z;const K=(z=S.filter(P=>{if(C){const G=kr(P.placement);return G===_||G==="y"}return!0}).map(P=>[P.placement,P.overflows.filter(G=>G>0).reduce((G,Q)=>G+Q,0)]).sort((P,G)=>P[1]-G[1])[0])==null?void 0:z[0];K&&(H=K);break}case"initialPlacement":H=a;break}if(r!==H)return{reset:{placement:H}}}return{}}}};function Jg(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function ev(t){return qT.some(e=>t[e]>=0)}const sb=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:i="referenceHidden",...r}=Yi(t,e);switch(i){case"referenceHidden":{const o=await Ya(e,{...r,elementContext:"reference"}),s=Jg(o,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:ev(s)}}}case"escaped":{const o=await Ya(e,{...r,altBoundary:!0}),s=Jg(o,n.floating);return{data:{escapedOffsets:s,escaped:ev(s)}}}default:return{}}}}};async function ab(t,e){const{placement:n,platform:i,elements:r}=t,o=await(i.isRTL==null?void 0:i.isRTL(r.floating)),s=qi(n),a=Ys(n),l=kr(n)==="y",c=["left","top"].includes(s)?-1:1,d=o&&l?-1:1,f=Yi(e,t);let{mainAxis:u,crossAxis:p,alignmentAxis:g}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:f.mainAxis||0,crossAxis:f.crossAxis||0,alignmentAxis:f.alignmentAxis};return a&&typeof g=="number"&&(p=a==="end"?g*-1:g),l?{x:p*d,y:u*c}:{x:u*c,y:p*d}}const lb=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,i;const{x:r,y:o,placement:s,middlewareData:a}=e,l=await ab(e,t);return s===((n=a.offset)==null?void 0:n.placement)&&(i=a.arrow)!=null&&i.alignmentOffset?{}:{x:r+l.x,y:o+l.y,data:{...l,placement:s}}}}},cb=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:i,placement:r}=e,{mainAxis:o=!0,crossAxis:s=!1,limiter:a={fn:m=>{let{x:h,y:_}=m;return{x:h,y:_}}},...l}=Yi(t,e),c={x:n,y:i},d=await Ya(e,l),f=kr(qi(r)),u=om(f);let p=c[u],g=c[f];if(o){const m=u==="y"?"top":"left",h=u==="y"?"bottom":"right",_=p+d[m],x=p-d[h];p=sh(_,p,x)}if(s){const m=f==="y"?"top":"left",h=f==="y"?"bottom":"right",_=g+d[m],x=g-d[h];g=sh(_,g,x)}const v=a.fn({...e,[u]:p,[f]:g});return{...v,data:{x:v.x-n,y:v.y-i,enabled:{[u]:o,[f]:s}}}}}},ub=function(t){return t===void 0&&(t={}),{options:t,fn(e){const{x:n,y:i,placement:r,rects:o,middlewareData:s}=e,{offset:a=0,mainAxis:l=!0,crossAxis:c=!0}=Yi(t,e),d={x:n,y:i},f=kr(r),u=om(f);let p=d[u],g=d[f];const v=Yi(a,e),m=typeof v=="number"?{mainAxis:v,crossAxis:0}:{mainAxis:0,crossAxis:0,...v};if(l){const x=u==="y"?"height":"width",y=o.reference[u]-o.floating[x]+m.mainAxis,T=o.reference[u]+o.reference[x]-m.mainAxis;p<y?p=y:p>T&&(p=T)}if(c){var h,_;const x=u==="y"?"width":"height",y=["top","left"].includes(qi(r)),T=o.reference[f]-o.floating[x]+(y&&((h=s.offset)==null?void 0:h[f])||0)+(y?0:m.crossAxis),C=o.reference[f]+o.reference[x]+(y?0:((_=s.offset)==null?void 0:_[f])||0)-(y?m.crossAxis:0);g<T?g=T:g>C&&(g=C)}return{[u]:p,[f]:g}}}},db=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var n,i;const{placement:r,rects:o,platform:s,elements:a}=e,{apply:l=()=>{},...c}=Yi(t,e),d=await Ya(e,c),f=qi(r),u=Ys(r),p=kr(r)==="y",{width:g,height:v}=o.floating;let m,h;f==="top"||f==="bottom"?(m=f,h=u===(await(s.isRTL==null?void 0:s.isRTL(a.floating))?"start":"end")?"left":"right"):(h=f,m=u==="end"?"top":"bottom");const _=v-d.top-d.bottom,x=g-d.left-d.right,y=Fr(v-d[m],_),T=Fr(g-d[h],x),C=!e.middlewareData.shift;let b=y,A=T;if((n=e.middlewareData.shift)!=null&&n.enabled.x&&(A=x),(i=e.middlewareData.shift)!=null&&i.enabled.y&&(b=_),C&&!u){const S=bn(d.left,0),D=bn(d.right,0),k=bn(d.top,0),z=bn(d.bottom,0);p?A=g-2*(S!==0||D!==0?S+D:bn(d.left,d.right)):b=v-2*(k!==0||z!==0?k+z:bn(d.top,d.bottom))}await l({...e,availableWidth:A,availableHeight:b});const M=await s.getDimensions(a.floating);return g!==M.width||v!==M.height?{reset:{rects:!0}}:{}}}};function Iu(){return typeof window<"u"}function qs(t){return Py(t)?(t.nodeName||"").toLowerCase():"#document"}function Rn(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function wi(t){var e;return(e=(Py(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Py(t){return Iu()?t instanceof Node||t instanceof Rn(t).Node:!1}function ui(t){return Iu()?t instanceof Element||t instanceof Rn(t).Element:!1}function Mi(t){return Iu()?t instanceof HTMLElement||t instanceof Rn(t).HTMLElement:!1}function tv(t){return!Iu()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof Rn(t).ShadowRoot}function dl(t){const{overflow:e,overflowX:n,overflowY:i,display:r}=di(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+n)&&!["inline","contents"].includes(r)}function fb(t){return["table","td","th"].includes(qs(t))}function Uu(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function lm(t){const e=cm(),n=ui(t)?di(t):t;return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(n.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(n.contain||"").includes(i))}function hb(t){let e=Br(t);for(;Mi(e)&&!Us(e);){if(lm(e))return e;if(Uu(e))return null;e=Br(e)}return null}function cm(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Us(t){return["html","body","#document"].includes(qs(t))}function di(t){return Rn(t).getComputedStyle(t)}function Fu(t){return ui(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Br(t){if(qs(t)==="html")return t;const e=t.assignedSlot||t.parentNode||tv(t)&&t.host||wi(t);return tv(e)?e.host:e}function Ly(t){const e=Br(t);return Us(e)?t.ownerDocument?t.ownerDocument.body:t.body:Mi(e)&&dl(e)?e:Ly(e)}function qa(t,e,n){var i;e===void 0&&(e=[]),n===void 0&&(n=!0);const r=Ly(t),o=r===((i=t.ownerDocument)==null?void 0:i.body),s=Rn(r);if(o){const a=lh(s);return e.concat(s,s.visualViewport||[],dl(r)?r:[],a&&n?qa(a):[])}return e.concat(r,qa(r,[],n))}function lh(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Dy(t){const e=di(t);let n=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const r=Mi(t),o=r?t.offsetWidth:n,s=r?t.offsetHeight:i,a=ou(n)!==o||ou(i)!==s;return a&&(n=o,i=s),{width:n,height:i,$:a}}function um(t){return ui(t)?t:t.contextElement}function ms(t){const e=um(t);if(!Mi(e))return Or(1);const n=e.getBoundingClientRect(),{width:i,height:r,$:o}=Dy(e);let s=(o?ou(n.width):n.width)/i,a=(o?ou(n.height):n.height)/r;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}const pb=Or(0);function Ny(t){const e=Rn(t);return!cm()||!e.visualViewport?pb:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function mb(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==Rn(t)?!1:e}function bo(t,e,n,i){e===void 0&&(e=!1),n===void 0&&(n=!1);const r=t.getBoundingClientRect(),o=um(t);let s=Or(1);e&&(i?ui(i)&&(s=ms(i)):s=ms(t));const a=mb(o,n,i)?Ny(o):Or(0);let l=(r.left+a.x)/s.x,c=(r.top+a.y)/s.y,d=r.width/s.x,f=r.height/s.y;if(o){const u=Rn(o),p=i&&ui(i)?Rn(i):i;let g=u,v=lh(g);for(;v&&i&&p!==g;){const m=ms(v),h=v.getBoundingClientRect(),_=di(v),x=h.left+(v.clientLeft+parseFloat(_.paddingLeft))*m.x,y=h.top+(v.clientTop+parseFloat(_.paddingTop))*m.y;l*=m.x,c*=m.y,d*=m.x,f*=m.y,l+=x,c+=y,g=Rn(v),v=lh(g)}}return au({width:d,height:f,x:l,y:c})}function gb(t){let{elements:e,rect:n,offsetParent:i,strategy:r}=t;const o=r==="fixed",s=wi(i),a=e?Uu(e.floating):!1;if(i===s||a&&o)return n;let l={scrollLeft:0,scrollTop:0},c=Or(1);const d=Or(0),f=Mi(i);if((f||!f&&!o)&&((qs(i)!=="body"||dl(s))&&(l=Fu(i)),Mi(i))){const u=bo(i);c=ms(i),d.x=u.x+i.clientLeft,d.y=u.y+i.clientTop}return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-l.scrollLeft*c.x+d.x,y:n.y*c.y-l.scrollTop*c.y+d.y}}function vb(t){return Array.from(t.getClientRects())}function ch(t,e){const n=Fu(t).scrollLeft;return e?e.left+n:bo(wi(t)).left+n}function _b(t){const e=wi(t),n=Fu(t),i=t.ownerDocument.body,r=bn(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),o=bn(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let s=-n.scrollLeft+ch(t);const a=-n.scrollTop;return di(i).direction==="rtl"&&(s+=bn(e.clientWidth,i.clientWidth)-r),{width:r,height:o,x:s,y:a}}function xb(t,e){const n=Rn(t),i=wi(t),r=n.visualViewport;let o=i.clientWidth,s=i.clientHeight,a=0,l=0;if(r){o=r.width,s=r.height;const c=cm();(!c||c&&e==="fixed")&&(a=r.offsetLeft,l=r.offsetTop)}return{width:o,height:s,x:a,y:l}}function yb(t,e){const n=bo(t,!0,e==="fixed"),i=n.top+t.clientTop,r=n.left+t.clientLeft,o=Mi(t)?ms(t):Or(1),s=t.clientWidth*o.x,a=t.clientHeight*o.y,l=r*o.x,c=i*o.y;return{width:s,height:a,x:l,y:c}}function nv(t,e,n){let i;if(e==="viewport")i=xb(t,n);else if(e==="document")i=_b(wi(t));else if(ui(e))i=yb(e,n);else{const r=Ny(t);i={...e,x:e.x-r.x,y:e.y-r.y}}return au(i)}function Iy(t,e){const n=Br(t);return n===e||!ui(n)||Us(n)?!1:di(n).position==="fixed"||Iy(n,e)}function Sb(t,e){const n=e.get(t);if(n)return n;let i=qa(t,[],!1).filter(a=>ui(a)&&qs(a)!=="body"),r=null;const o=di(t).position==="fixed";let s=o?Br(t):t;for(;ui(s)&&!Us(s);){const a=di(s),l=lm(s);!l&&a.position==="fixed"&&(r=null),(o?!l&&!r:!l&&a.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||dl(s)&&!l&&Iy(t,s))?i=i.filter(d=>d!==s):r=a,s=Br(s)}return e.set(t,i),i}function Eb(t){let{element:e,boundary:n,rootBoundary:i,strategy:r}=t;const s=[...n==="clippingAncestors"?Uu(e)?[]:Sb(e,this._c):[].concat(n),i],a=s[0],l=s.reduce((c,d)=>{const f=nv(e,d,r);return c.top=bn(f.top,c.top),c.right=Fr(f.right,c.right),c.bottom=Fr(f.bottom,c.bottom),c.left=bn(f.left,c.left),c},nv(e,a,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Mb(t){const{width:e,height:n}=Dy(t);return{width:e,height:n}}function wb(t,e,n){const i=Mi(e),r=wi(e),o=n==="fixed",s=bo(t,!0,o,e);let a={scrollLeft:0,scrollTop:0};const l=Or(0);if(i||!i&&!o)if((qs(e)!=="body"||dl(r))&&(a=Fu(e)),i){const p=bo(e,!0,o,e);l.x=p.x+e.clientLeft,l.y=p.y+e.clientTop}else r&&(l.x=ch(r));let c=0,d=0;if(r&&!i&&!o){const p=r.getBoundingClientRect();d=p.top+a.scrollTop,c=p.left+a.scrollLeft-ch(r,p)}const f=s.left+a.scrollLeft-l.x-c,u=s.top+a.scrollTop-l.y-d;return{x:f,y:u,width:s.width,height:s.height}}function bd(t){return di(t).position==="static"}function iv(t,e){if(!Mi(t)||di(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return wi(t)===n&&(n=n.ownerDocument.body),n}function Uy(t,e){const n=Rn(t);if(Uu(t))return n;if(!Mi(t)){let r=Br(t);for(;r&&!Us(r);){if(ui(r)&&!bd(r))return r;r=Br(r)}return n}let i=iv(t,e);for(;i&&fb(i)&&bd(i);)i=iv(i,e);return i&&Us(i)&&bd(i)&&!lm(i)?n:i||hb(t)||n}const Tb=async function(t){const e=this.getOffsetParent||Uy,n=this.getDimensions,i=await n(t.floating);return{reference:wb(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function bb(t){return di(t).direction==="rtl"}const Cb={convertOffsetParentRelativeRectToViewportRelativeRect:gb,getDocumentElement:wi,getClippingRect:Eb,getOffsetParent:Uy,getElementRects:Tb,getClientRects:vb,getDimensions:Mb,getScale:ms,isElement:ui,isRTL:bb};function Ab(t,e){let n=null,i;const r=wi(t);function o(){var a;clearTimeout(i),(a=n)==null||a.disconnect(),n=null}function s(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),o();const{left:c,top:d,width:f,height:u}=t.getBoundingClientRect();if(a||e(),!f||!u)return;const p=Vl(d),g=Vl(r.clientWidth-(c+f)),v=Vl(r.clientHeight-(d+u)),m=Vl(c),_={rootMargin:-p+"px "+-g+"px "+-v+"px "+-m+"px",threshold:bn(0,Fr(1,l))||1};let x=!0;function y(T){const C=T[0].intersectionRatio;if(C!==l){if(!x)return s();C?s(!1,C):i=setTimeout(()=>{s(!1,1e-7)},1e3)}x=!1}try{n=new IntersectionObserver(y,{..._,root:r.ownerDocument})}catch{n=new IntersectionObserver(y,_)}n.observe(t)}return s(!0),o}function Rb(t,e,n,i){i===void 0&&(i={});const{ancestorScroll:r=!0,ancestorResize:o=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=i,c=um(t),d=r||o?[...c?qa(c):[],...qa(e)]:[];d.forEach(h=>{r&&h.addEventListener("scroll",n,{passive:!0}),o&&h.addEventListener("resize",n)});const f=c&&a?Ab(c,n):null;let u=-1,p=null;s&&(p=new ResizeObserver(h=>{let[_]=h;_&&_.target===c&&p&&(p.unobserve(e),cancelAnimationFrame(u),u=requestAnimationFrame(()=>{var x;(x=p)==null||x.observe(e)})),n()}),c&&!l&&p.observe(c),p.observe(e));let g,v=l?bo(t):null;l&&m();function m(){const h=bo(t);v&&(h.x!==v.x||h.y!==v.y||h.width!==v.width||h.height!==v.height)&&n(),v=h,g=requestAnimationFrame(m)}return n(),()=>{var h;d.forEach(_=>{r&&_.removeEventListener("scroll",n),o&&_.removeEventListener("resize",n)}),f==null||f(),(h=p)==null||h.disconnect(),p=null,l&&cancelAnimationFrame(g)}}const Pb=lb,Lb=cb,Db=ob,Nb=db,Ib=sb,rv=rb,Ub=ub,Fb=(t,e,n)=>{const i=new Map,r={platform:Cb,...n},o={...r.platform,_c:i};return ib(t,e,{...r,platform:o})};var Ac=typeof document<"u"?L.useLayoutEffect:L.useEffect;function lu(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let n,i,r;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(n=t.length,n!==e.length)return!1;for(i=n;i--!==0;)if(!lu(t[i],e[i]))return!1;return!0}if(r=Object.keys(t),n=r.length,n!==Object.keys(e).length)return!1;for(i=n;i--!==0;)if(!{}.hasOwnProperty.call(e,r[i]))return!1;for(i=n;i--!==0;){const o=r[i];if(!(o==="_owner"&&t.$$typeof)&&!lu(t[o],e[o]))return!1}return!0}return t!==t&&e!==e}function Fy(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function ov(t,e){const n=Fy(t);return Math.round(e*n)/n}function Cd(t){const e=L.useRef(t);return Ac(()=>{e.current=t}),e}function Ob(t){t===void 0&&(t={});const{placement:e="bottom",strategy:n="absolute",middleware:i=[],platform:r,elements:{reference:o,floating:s}={},transform:a=!0,whileElementsMounted:l,open:c}=t,[d,f]=L.useState({x:0,y:0,strategy:n,placement:e,middlewareData:{},isPositioned:!1}),[u,p]=L.useState(i);lu(u,i)||p(i);const[g,v]=L.useState(null),[m,h]=L.useState(null),_=L.useCallback(P=>{P!==C.current&&(C.current=P,v(P))},[]),x=L.useCallback(P=>{P!==b.current&&(b.current=P,h(P))},[]),y=o||g,T=s||m,C=L.useRef(null),b=L.useRef(null),A=L.useRef(d),M=l!=null,S=Cd(l),D=Cd(r),k=Cd(c),z=L.useCallback(()=>{if(!C.current||!b.current)return;const P={placement:e,strategy:n,middleware:u};D.current&&(P.platform=D.current),Fb(C.current,b.current,P).then(G=>{const Q={...G,isPositioned:k.current!==!1};B.current&&!lu(A.current,Q)&&(A.current=Q,cl.flushSync(()=>{f(Q)}))})},[u,e,n,D,k]);Ac(()=>{c===!1&&A.current.isPositioned&&(A.current.isPositioned=!1,f(P=>({...P,isPositioned:!1})))},[c]);const B=L.useRef(!1);Ac(()=>(B.current=!0,()=>{B.current=!1}),[]),Ac(()=>{if(y&&(C.current=y),T&&(b.current=T),y&&T){if(S.current)return S.current(y,T,z);z()}},[y,T,z,S,M]);const $=L.useMemo(()=>({reference:C,floating:b,setReference:_,setFloating:x}),[_,x]),H=L.useMemo(()=>({reference:y,floating:T}),[y,T]),K=L.useMemo(()=>{const P={position:n,left:0,top:0};if(!H.floating)return P;const G=ov(H.floating,d.x),Q=ov(H.floating,d.y);return a?{...P,transform:"translate("+G+"px, "+Q+"px)",...Fy(H.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:G,top:Q}},[n,a,H.floating,d.x,d.y]);return L.useMemo(()=>({...d,update:z,refs:$,elements:H,floatingStyles:K}),[d,z,$,H,K])}const kb=t=>{function e(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:t,fn(n){const{element:i,padding:r}=typeof t=="function"?t(n):t;return i&&e(i)?i.current!=null?rv({element:i.current,padding:r}).fn(n):{}:i?rv({element:i,padding:r}).fn(n):{}}}},Bb=(t,e)=>({...Pb(t),options:[t,e]}),zb=(t,e)=>({...Lb(t),options:[t,e]}),Hb=(t,e)=>({...Ub(t),options:[t,e]}),Vb=(t,e)=>({...Db(t),options:[t,e]}),Gb=(t,e)=>({...Nb(t),options:[t,e]}),Wb=(t,e)=>({...Ib(t),options:[t,e]}),jb=(t,e)=>({...kb(t),options:[t,e]});var Xb="Arrow",Oy=L.forwardRef((t,e)=>{const{children:n,width:i=10,height:r=5,...o}=t;return N.jsx(xn.svg,{...o,ref:e,width:i,height:r,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:t.asChild?n:N.jsx("polygon",{points:"0,0 30,0 15,10"})})});Oy.displayName=Xb;var $b=Oy;function Yb(t,e=[]){let n=[];function i(o,s){const a=L.createContext(s),l=n.length;n=[...n,s];function c(f){const{scope:u,children:p,...g}=f,v=(u==null?void 0:u[t][l])||a,m=L.useMemo(()=>g,Object.values(g));return N.jsx(v.Provider,{value:m,children:p})}function d(f,u){const p=(u==null?void 0:u[t][l])||a,g=L.useContext(p);if(g)return g;if(s!==void 0)return s;throw new Error(`\`${f}\` must be used within \`${o}\``)}return c.displayName=o+"Provider",[c,d]}const r=()=>{const o=n.map(s=>L.createContext(s));return function(a){const l=(a==null?void 0:a[t])||o;return L.useMemo(()=>({[`__scope${t}`]:{...a,[t]:l}}),[a,l])}};return r.scopeName=t,[i,qb(r,...e)]}function qb(...t){const e=t[0];if(t.length===1)return e;const n=()=>{const i=t.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(o){const s=i.reduce((a,{useScope:l,scopeName:c})=>{const f=l(o)[`__scope${c}`];return{...a,...f}},{});return L.useMemo(()=>({[`__scope${e.scopeName}`]:s}),[s])}};return n.scopeName=e.scopeName,n}function Kb(t){const[e,n]=L.useState(void 0);return To(()=>{if(t){n({width:t.offsetWidth,height:t.offsetHeight});const i=new ResizeObserver(r=>{if(!Array.isArray(r)||!r.length)return;const o=r[0];let s,a;if("borderBoxSize"in o){const l=o.borderBoxSize,c=Array.isArray(l)?l[0]:l;s=c.inlineSize,a=c.blockSize}else s=t.offsetWidth,a=t.offsetHeight;n({width:s,height:a})});return i.observe(t,{box:"border-box"}),()=>i.unobserve(t)}else n(void 0)},[t]),e}var ky="Popper",[By,zy]=Yb(ky),[h3,Hy]=By(ky),Vy="PopperAnchor",Gy=L.forwardRef((t,e)=>{const{__scopePopper:n,virtualRef:i,...r}=t,o=Hy(Vy,n),s=L.useRef(null),a=ci(e,s);return L.useEffect(()=>{o.onAnchorChange((i==null?void 0:i.current)||s.current)}),i?null:N.jsx(xn.div,{...r,ref:a})});Gy.displayName=Vy;var dm="PopperContent",[Qb,Zb]=By(dm),Wy=L.forwardRef((t,e)=>{var de,Ae,Pe,Ue,ct,je;const{__scopePopper:n,side:i="bottom",sideOffset:r=0,align:o="center",alignOffset:s=0,arrowPadding:a=0,avoidCollisions:l=!0,collisionBoundary:c=[],collisionPadding:d=0,sticky:f="partial",hideWhenDetached:u=!1,updatePositionStrategy:p="optimized",onPlaced:g,...v}=t,m=Hy(dm,n),[h,_]=L.useState(null),x=ci(e,st=>_(st)),[y,T]=L.useState(null),C=Kb(y),b=(C==null?void 0:C.width)??0,A=(C==null?void 0:C.height)??0,M=i+(o!=="center"?"-"+o:""),S=typeof d=="number"?d:{top:0,right:0,bottom:0,left:0,...d},D=Array.isArray(c)?c:[c],k=D.length>0,z={padding:S,boundary:D.filter(eC),altBoundary:k},{refs:B,floatingStyles:$,placement:H,isPositioned:K,middlewareData:P}=Ob({strategy:"fixed",placement:M,whileElementsMounted:(...st)=>Rb(...st,{animationFrame:p==="always"}),elements:{reference:m.anchor},middleware:[Bb({mainAxis:r+A,alignmentAxis:s}),l&&zb({mainAxis:!0,crossAxis:!1,limiter:f==="partial"?Hb():void 0,...z}),l&&Vb({...z}),Gb({...z,apply:({elements:st,rects:U,availableWidth:zt,availableHeight:ke})=>{const{width:Ye,height:Re}=U.reference,Be=st.floating.style;Be.setProperty("--radix-popper-available-width",`${zt}px`),Be.setProperty("--radix-popper-available-height",`${ke}px`),Be.setProperty("--radix-popper-anchor-width",`${Ye}px`),Be.setProperty("--radix-popper-anchor-height",`${Re}px`)}}),y&&jb({element:y,padding:a}),tC({arrowWidth:b,arrowHeight:A}),u&&Wb({strategy:"referenceHidden",...z})]}),[G,Q]=$y(H),Z=Ei(g);To(()=>{K&&(Z==null||Z())},[K,Z]);const ce=(de=P.arrow)==null?void 0:de.x,we=(Ae=P.arrow)==null?void 0:Ae.y,q=((Pe=P.arrow)==null?void 0:Pe.centerOffset)!==0,[oe,le]=L.useState();return To(()=>{h&&le(window.getComputedStyle(h).zIndex)},[h]),N.jsx("div",{ref:B.setFloating,"data-radix-popper-content-wrapper":"",style:{...$,transform:K?$.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:oe,"--radix-popper-transform-origin":[(Ue=P.transformOrigin)==null?void 0:Ue.x,(ct=P.transformOrigin)==null?void 0:ct.y].join(" "),...((je=P.hide)==null?void 0:je.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:t.dir,children:N.jsx(Qb,{scope:n,placedSide:G,onArrowChange:T,arrowX:ce,arrowY:we,shouldHideArrow:q,children:N.jsx(xn.div,{"data-side":G,"data-align":Q,...v,ref:x,style:{...v.style,animation:K?void 0:"none"}})})})});Wy.displayName=dm;var jy="PopperArrow",Jb={top:"bottom",right:"left",bottom:"top",left:"right"},Xy=L.forwardRef(function(e,n){const{__scopePopper:i,...r}=e,o=Zb(jy,i),s=Jb[o.placedSide];return N.jsx("span",{ref:o.onArrowChange,style:{position:"absolute",left:o.arrowX,top:o.arrowY,[s]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[o.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[o.placedSide],visibility:o.shouldHideArrow?"hidden":void 0},children:N.jsx($b,{...r,ref:n,style:{...r.style,display:"block"}})})});Xy.displayName=jy;function eC(t){return t!==null}var tC=t=>({name:"transformOrigin",options:t,fn(e){var m,h,_;const{placement:n,rects:i,middlewareData:r}=e,s=((m=r.arrow)==null?void 0:m.centerOffset)!==0,a=s?0:t.arrowWidth,l=s?0:t.arrowHeight,[c,d]=$y(n),f={start:"0%",center:"50%",end:"100%"}[d],u=(((h=r.arrow)==null?void 0:h.x)??0)+a/2,p=(((_=r.arrow)==null?void 0:_.y)??0)+l/2;let g="",v="";return c==="bottom"?(g=s?f:`${u}px`,v=`${-l}px`):c==="top"?(g=s?f:`${u}px`,v=`${i.floating.height+l}px`):c==="right"?(g=`${-l}px`,v=s?f:`${p}px`):c==="left"&&(g=`${i.floating.width+l}px`,v=s?f:`${p}px`),{data:{x:g,y:v}}}});function $y(t){const[e,n="center"]=t.split("-");return[e,n]}var nC=Gy,iC=Wy,rC=Xy,[Ou,p3]=Gx("Tooltip",[zy]),fm=zy(),Yy="TooltipProvider",oC=700,sv="tooltip.open",[sC,qy]=Ou(Yy),Ky=t=>{const{__scopeTooltip:e,delayDuration:n=oC,skipDelayDuration:i=300,disableHoverableContent:r=!1,children:o}=t,[s,a]=L.useState(!0),l=L.useRef(!1),c=L.useRef(0);return L.useEffect(()=>{const d=c.current;return()=>window.clearTimeout(d)},[]),N.jsx(sC,{scope:e,isOpenDelayed:s,delayDuration:n,onOpen:L.useCallback(()=>{window.clearTimeout(c.current),a(!1)},[]),onClose:L.useCallback(()=>{window.clearTimeout(c.current),c.current=window.setTimeout(()=>a(!0),i)},[i]),isPointerInTransitRef:l,onPointerInTransitChange:L.useCallback(d=>{l.current=d},[]),disableHoverableContent:r,children:o})};Ky.displayName=Yy;var Qy="Tooltip",[m3,ku]=Ou(Qy),uh="TooltipTrigger",aC=L.forwardRef((t,e)=>{const{__scopeTooltip:n,...i}=t,r=ku(uh,n),o=qy(uh,n),s=fm(n),a=L.useRef(null),l=ci(e,a,r.onTriggerChange),c=L.useRef(!1),d=L.useRef(!1),f=L.useCallback(()=>c.current=!1,[]);return L.useEffect(()=>()=>document.removeEventListener("pointerup",f),[f]),N.jsx(nC,{asChild:!0,...s,children:N.jsx(xn.button,{"aria-describedby":r.open?r.contentId:void 0,"data-state":r.stateAttribute,...i,ref:l,onPointerMove:Nt(t.onPointerMove,u=>{u.pointerType!=="touch"&&!d.current&&!o.isPointerInTransitRef.current&&(r.onTriggerEnter(),d.current=!0)}),onPointerLeave:Nt(t.onPointerLeave,()=>{r.onTriggerLeave(),d.current=!1}),onPointerDown:Nt(t.onPointerDown,()=>{c.current=!0,document.addEventListener("pointerup",f,{once:!0})}),onFocus:Nt(t.onFocus,()=>{c.current||r.onOpen()}),onBlur:Nt(t.onBlur,r.onClose),onClick:Nt(t.onClick,r.onClose)})})});aC.displayName=uh;var lC="TooltipPortal",[g3,cC]=Ou(lC,{forceMount:void 0}),Fs="TooltipContent",Zy=L.forwardRef((t,e)=>{const n=cC(Fs,t.__scopeTooltip),{forceMount:i=n.forceMount,side:r="top",...o}=t,s=ku(Fs,t.__scopeTooltip);return N.jsx(em,{present:i||s.open,children:s.disableHoverableContent?N.jsx(Jy,{side:r,...o,ref:e}):N.jsx(uC,{side:r,...o,ref:e})})}),uC=L.forwardRef((t,e)=>{const n=ku(Fs,t.__scopeTooltip),i=qy(Fs,t.__scopeTooltip),r=L.useRef(null),o=ci(e,r),[s,a]=L.useState(null),{trigger:l,onClose:c}=n,d=r.current,{onPointerInTransitChange:f}=i,u=L.useCallback(()=>{a(null),f(!1)},[f]),p=L.useCallback((g,v)=>{const m=g.currentTarget,h={x:g.clientX,y:g.clientY},_=pC(h,m.getBoundingClientRect()),x=mC(h,_),y=gC(v.getBoundingClientRect()),T=_C([...x,...y]);a(T),f(!0)},[f]);return L.useEffect(()=>()=>u(),[u]),L.useEffect(()=>{if(l&&d){const g=m=>p(m,d),v=m=>p(m,l);return l.addEventListener("pointerleave",g),d.addEventListener("pointerleave",v),()=>{l.removeEventListener("pointerleave",g),d.removeEventListener("pointerleave",v)}}},[l,d,p,u]),L.useEffect(()=>{if(s){const g=v=>{const m=v.target,h={x:v.clientX,y:v.clientY},_=(l==null?void 0:l.contains(m))||(d==null?void 0:d.contains(m)),x=!vC(h,s);_?u():x&&(u(),c())};return document.addEventListener("pointermove",g),()=>document.removeEventListener("pointermove",g)}},[l,d,s,c,u]),N.jsx(Jy,{...t,ref:o})}),[dC,fC]=Ou(Qy,{isInside:!1}),Jy=L.forwardRef((t,e)=>{const{__scopeTooltip:n,children:i,"aria-label":r,onEscapeKeyDown:o,onPointerDownOutside:s,...a}=t,l=ku(Fs,n),c=fm(n),{onClose:d}=l;return L.useEffect(()=>(document.addEventListener(sv,d),()=>document.removeEventListener(sv,d)),[d]),L.useEffect(()=>{if(l.trigger){const f=u=>{const p=u.target;p!=null&&p.contains(l.trigger)&&d()};return window.addEventListener("scroll",f,{capture:!0}),()=>window.removeEventListener("scroll",f,{capture:!0})}},[l.trigger,d]),N.jsx(Jp,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:o,onPointerDownOutside:s,onFocusOutside:f=>f.preventDefault(),onDismiss:d,children:N.jsxs(iC,{"data-state":l.stateAttribute,...c,...a,ref:e,style:{...a.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[N.jsx(Vx,{children:i}),N.jsx(dC,{scope:n,isInside:!0,children:N.jsx(f1,{id:l.contentId,role:"tooltip",children:r||i})})]})})});Zy.displayName=Fs;var eS="TooltipArrow",hC=L.forwardRef((t,e)=>{const{__scopeTooltip:n,...i}=t,r=fm(n);return fC(eS,n).isInside?null:N.jsx(rC,{...r,...i,ref:e})});hC.displayName=eS;function pC(t,e){const n=Math.abs(e.top-t.y),i=Math.abs(e.bottom-t.y),r=Math.abs(e.right-t.x),o=Math.abs(e.left-t.x);switch(Math.min(n,i,r,o)){case o:return"left";case r:return"right";case n:return"top";case i:return"bottom";default:throw new Error("unreachable")}}function mC(t,e,n=5){const i=[];switch(e){case"top":i.push({x:t.x-n,y:t.y+n},{x:t.x+n,y:t.y+n});break;case"bottom":i.push({x:t.x-n,y:t.y-n},{x:t.x+n,y:t.y-n});break;case"left":i.push({x:t.x+n,y:t.y-n},{x:t.x+n,y:t.y+n});break;case"right":i.push({x:t.x-n,y:t.y-n},{x:t.x-n,y:t.y+n});break}return i}function gC(t){const{top:e,right:n,bottom:i,left:r}=t;return[{x:r,y:e},{x:n,y:e},{x:n,y:i},{x:r,y:i}]}function vC(t,e){const{x:n,y:i}=t;let r=!1;for(let o=0,s=e.length-1;o<e.length;s=o++){const a=e[o].x,l=e[o].y,c=e[s].x,d=e[s].y;l>i!=d>i&&n<(c-a)*(i-l)/(d-l)+a&&(r=!r)}return r}function _C(t){const e=t.slice();return e.sort((n,i)=>n.x<i.x?-1:n.x>i.x?1:n.y<i.y?-1:n.y>i.y?1:0),xC(e)}function xC(t){if(t.length<=1)return t.slice();const e=[];for(let i=0;i<t.length;i++){const r=t[i];for(;e.length>=2;){const o=e[e.length-1],s=e[e.length-2];if((o.x-s.x)*(r.y-s.y)>=(o.y-s.y)*(r.x-s.x))e.pop();else break}e.push(r)}e.pop();const n=[];for(let i=t.length-1;i>=0;i--){const r=t[i];for(;n.length>=2;){const o=n[n.length-1],s=n[n.length-2];if((o.x-s.x)*(r.y-s.y)>=(o.y-s.y)*(r.x-s.x))n.pop();else break}n.push(r)}return n.pop(),e.length===1&&n.length===1&&e[0].x===n[0].x&&e[0].y===n[0].y?e:e.concat(n)}var yC=Ky,tS=Zy;const SC=yC,EC=L.forwardRef(({className:t,sideOffset:e=4,...n},i)=>N.jsx(tS,{ref:i,sideOffset:e,className:jr("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...n}));EC.displayName=tS.displayName;var Bu=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},zu=typeof window>"u"||"Deno"in globalThis;function Jn(){}function MC(t,e){return typeof t=="function"?t(e):t}function wC(t){return typeof t=="number"&&t>=0&&t!==1/0}function TC(t,e){return Math.max(t+(e||0)-Date.now(),0)}function av(t,e){return typeof t=="function"?t(e):t}function bC(t,e){return typeof t=="function"?t(e):t}function lv(t,e){const{type:n="all",exact:i,fetchStatus:r,predicate:o,queryKey:s,stale:a}=t;if(s){if(i){if(e.queryHash!==hm(s,e.options))return!1}else if(!Qa(e.queryKey,s))return!1}if(n!=="all"){const l=e.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof a=="boolean"&&e.isStale()!==a||r&&r!==e.state.fetchStatus||o&&!o(e))}function cv(t,e){const{exact:n,status:i,predicate:r,mutationKey:o}=t;if(o){if(!e.options.mutationKey)return!1;if(n){if(Ka(e.options.mutationKey)!==Ka(o))return!1}else if(!Qa(e.options.mutationKey,o))return!1}return!(i&&e.state.status!==i||r&&!r(e))}function hm(t,e){return((e==null?void 0:e.queryKeyHashFn)||Ka)(t)}function Ka(t){return JSON.stringify(t,(e,n)=>dh(n)?Object.keys(n).sort().reduce((i,r)=>(i[r]=n[r],i),{}):n)}function Qa(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?!Object.keys(e).some(n=>!Qa(t[n],e[n])):!1}function nS(t,e){if(t===e)return t;const n=uv(t)&&uv(e);if(n||dh(t)&&dh(e)){const i=n?t:Object.keys(t),r=i.length,o=n?e:Object.keys(e),s=o.length,a=n?[]:{};let l=0;for(let c=0;c<s;c++){const d=n?c:o[c];(!n&&i.includes(d)||n)&&t[d]===void 0&&e[d]===void 0?(a[d]=void 0,l++):(a[d]=nS(t[d],e[d]),a[d]===t[d]&&t[d]!==void 0&&l++)}return r===s&&l===r?t:a}return e}function uv(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function dh(t){if(!dv(t))return!1;const e=t.constructor;if(e===void 0)return!0;const n=e.prototype;return!(!dv(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(t)!==Object.prototype)}function dv(t){return Object.prototype.toString.call(t)==="[object Object]"}function CC(t){return new Promise(e=>{setTimeout(e,t)})}function AC(t,e,n){return typeof n.structuralSharing=="function"?n.structuralSharing(t,e):n.structuralSharing!==!1?nS(t,e):e}function RC(t,e,n=0){const i=[...t,e];return n&&i.length>n?i.slice(1):i}function PC(t,e,n=0){const i=[e,...t];return n&&i.length>n?i.slice(0,-1):i}var pm=Symbol();function iS(t,e){return!t.queryFn&&(e!=null&&e.initialPromise)?()=>e.initialPromise:!t.queryFn||t.queryFn===pm?()=>Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)):t.queryFn}var ho,mr,xs,_0,LC=(_0=class extends Bu{constructor(){super();ot(this,ho);ot(this,mr);ot(this,xs);Xe(this,xs,e=>{if(!zu&&window.addEventListener){const n=()=>e();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){te(this,mr)||this.setEventListener(te(this,xs))}onUnsubscribe(){var e;this.hasListeners()||((e=te(this,mr))==null||e.call(this),Xe(this,mr,void 0))}setEventListener(e){var n;Xe(this,xs,e),(n=te(this,mr))==null||n.call(this),Xe(this,mr,e(i=>{typeof i=="boolean"?this.setFocused(i):this.onFocus()}))}setFocused(e){te(this,ho)!==e&&(Xe(this,ho,e),this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(n=>{n(e)})}isFocused(){var e;return typeof te(this,ho)=="boolean"?te(this,ho):((e=globalThis.document)==null?void 0:e.visibilityState)!=="hidden"}},ho=new WeakMap,mr=new WeakMap,xs=new WeakMap,_0),rS=new LC,ys,gr,Ss,x0,DC=(x0=class extends Bu{constructor(){super();ot(this,ys,!0);ot(this,gr);ot(this,Ss);Xe(this,Ss,e=>{if(!zu&&window.addEventListener){const n=()=>e(!0),i=()=>e(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",i,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",i)}}})}onSubscribe(){te(this,gr)||this.setEventListener(te(this,Ss))}onUnsubscribe(){var e;this.hasListeners()||((e=te(this,gr))==null||e.call(this),Xe(this,gr,void 0))}setEventListener(e){var n;Xe(this,Ss,e),(n=te(this,gr))==null||n.call(this),Xe(this,gr,e(this.setOnline.bind(this)))}setOnline(e){te(this,ys)!==e&&(Xe(this,ys,e),this.listeners.forEach(i=>{i(e)}))}isOnline(){return te(this,ys)}},ys=new WeakMap,gr=new WeakMap,Ss=new WeakMap,x0),cu=new DC;function NC(){let t,e;const n=new Promise((r,o)=>{t=r,e=o});n.status="pending",n.catch(()=>{});function i(r){Object.assign(n,r),delete n.resolve,delete n.reject}return n.resolve=r=>{i({status:"fulfilled",value:r}),t(r)},n.reject=r=>{i({status:"rejected",reason:r}),e(r)},n}function IC(t){return Math.min(1e3*2**t,3e4)}function oS(t){return(t??"online")==="online"?cu.isOnline():!0}var sS=class extends Error{constructor(t){super("CancelledError"),this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}};function Ad(t){return t instanceof sS}function aS(t){let e=!1,n=0,i=!1,r;const o=NC(),s=v=>{var m;i||(u(new sS(v)),(m=t.abort)==null||m.call(t))},a=()=>{e=!0},l=()=>{e=!1},c=()=>rS.isFocused()&&(t.networkMode==="always"||cu.isOnline())&&t.canRun(),d=()=>oS(t.networkMode)&&t.canRun(),f=v=>{var m;i||(i=!0,(m=t.onSuccess)==null||m.call(t,v),r==null||r(),o.resolve(v))},u=v=>{var m;i||(i=!0,(m=t.onError)==null||m.call(t,v),r==null||r(),o.reject(v))},p=()=>new Promise(v=>{var m;r=h=>{(i||c())&&v(h)},(m=t.onPause)==null||m.call(t)}).then(()=>{var v;r=void 0,i||(v=t.onContinue)==null||v.call(t)}),g=()=>{if(i)return;let v;const m=n===0?t.initialPromise:void 0;try{v=m??t.fn()}catch(h){v=Promise.reject(h)}Promise.resolve(v).then(f).catch(h=>{var C;if(i)return;const _=t.retry??(zu?0:3),x=t.retryDelay??IC,y=typeof x=="function"?x(n,h):x,T=_===!0||typeof _=="number"&&n<_||typeof _=="function"&&_(n,h);if(e||!T){u(h);return}n++,(C=t.onFail)==null||C.call(t,n,h),CC(y).then(()=>c()?void 0:p()).then(()=>{e?u(h):g()})})};return{promise:o,cancel:s,continue:()=>(r==null||r(),o),cancelRetry:a,continueRetry:l,canStart:d,start:()=>(d()?g():p().then(g),o)}}function UC(){let t=[],e=0,n=a=>{a()},i=a=>{a()},r=a=>setTimeout(a,0);const o=a=>{e?t.push(a):r(()=>{n(a)})},s=()=>{const a=t;t=[],a.length&&r(()=>{i(()=>{a.forEach(l=>{n(l)})})})};return{batch:a=>{let l;e++;try{l=a()}finally{e--,e||s()}return l},batchCalls:a=>(...l)=>{o(()=>{a(...l)})},schedule:o,setNotifyFunction:a=>{n=a},setBatchNotifyFunction:a=>{i=a},setScheduler:a=>{r=a}}}var on=UC(),po,y0,lS=(y0=class{constructor(){ot(this,po)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),wC(this.gcTime)&&Xe(this,po,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(zu?1/0:5*60*1e3))}clearGcTimeout(){te(this,po)&&(clearTimeout(te(this,po)),Xe(this,po,void 0))}},po=new WeakMap,y0),Es,Ms,Fn,Qt,nl,mo,ei,Di,S0,FC=(S0=class extends lS{constructor(e){super();ot(this,ei);ot(this,Es);ot(this,Ms);ot(this,Fn);ot(this,Qt);ot(this,nl);ot(this,mo);Xe(this,mo,!1),Xe(this,nl,e.defaultOptions),this.setOptions(e.options),this.observers=[],Xe(this,Fn,e.cache),this.queryKey=e.queryKey,this.queryHash=e.queryHash,Xe(this,Es,kC(this.options)),this.state=e.state??te(this,Es),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var e;return(e=te(this,Qt))==null?void 0:e.promise}setOptions(e){this.options={...te(this,nl),...e},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&te(this,Fn).remove(this)}setData(e,n){const i=AC(this.state.data,e,this.options);return Xt(this,ei,Di).call(this,{data:i,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),i}setState(e,n){Xt(this,ei,Di).call(this,{type:"setState",state:e,setStateOptions:n})}cancel(e){var i,r;const n=(i=te(this,Qt))==null?void 0:i.promise;return(r=te(this,Qt))==null||r.cancel(e),n?n.then(Jn).catch(Jn):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(te(this,Es))}isActive(){return this.observers.some(e=>bC(e.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===pm||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(e=0){return this.state.isInvalidated||this.state.data===void 0||!TC(this.state.dataUpdatedAt,e)}onFocus(){var n;const e=this.observers.find(i=>i.shouldFetchOnWindowFocus());e==null||e.refetch({cancelRefetch:!1}),(n=te(this,Qt))==null||n.continue()}onOnline(){var n;const e=this.observers.find(i=>i.shouldFetchOnReconnect());e==null||e.refetch({cancelRefetch:!1}),(n=te(this,Qt))==null||n.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),te(this,Fn).notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(n=>n!==e),this.observers.length||(te(this,Qt)&&(te(this,mo)?te(this,Qt).cancel({revert:!0}):te(this,Qt).cancelRetry()),this.scheduleGc()),te(this,Fn).notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||Xt(this,ei,Di).call(this,{type:"invalidate"})}fetch(e,n){var l,c,d;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(te(this,Qt))return te(this,Qt).continueRetry(),te(this,Qt).promise}if(e&&this.setOptions(e),!this.options.queryFn){const f=this.observers.find(u=>u.options.queryFn);f&&this.setOptions(f.options)}const i=new AbortController,r=f=>{Object.defineProperty(f,"signal",{enumerable:!0,get:()=>(Xe(this,mo,!0),i.signal)})},o=()=>{const f=iS(this.options,n),u={queryKey:this.queryKey,meta:this.meta};return r(u),Xe(this,mo,!1),this.options.persister?this.options.persister(f,u,this):f(u)},s={fetchOptions:n,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:o};r(s),(l=this.options.behavior)==null||l.onFetch(s,this),Xe(this,Ms,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((c=s.fetchOptions)==null?void 0:c.meta))&&Xt(this,ei,Di).call(this,{type:"fetch",meta:(d=s.fetchOptions)==null?void 0:d.meta});const a=f=>{var u,p,g,v;Ad(f)&&f.silent||Xt(this,ei,Di).call(this,{type:"error",error:f}),Ad(f)||((p=(u=te(this,Fn).config).onError)==null||p.call(u,f,this),(v=(g=te(this,Fn).config).onSettled)==null||v.call(g,this.state.data,f,this)),this.scheduleGc()};return Xe(this,Qt,aS({initialPromise:n==null?void 0:n.initialPromise,fn:s.fetchFn,abort:i.abort.bind(i),onSuccess:f=>{var u,p,g,v;if(f===void 0){a(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(f)}catch(m){a(m);return}(p=(u=te(this,Fn).config).onSuccess)==null||p.call(u,f,this),(v=(g=te(this,Fn).config).onSettled)==null||v.call(g,f,this.state.error,this),this.scheduleGc()},onError:a,onFail:(f,u)=>{Xt(this,ei,Di).call(this,{type:"failed",failureCount:f,error:u})},onPause:()=>{Xt(this,ei,Di).call(this,{type:"pause"})},onContinue:()=>{Xt(this,ei,Di).call(this,{type:"continue"})},retry:s.options.retry,retryDelay:s.options.retryDelay,networkMode:s.options.networkMode,canRun:()=>!0})),te(this,Qt).start()}},Es=new WeakMap,Ms=new WeakMap,Fn=new WeakMap,Qt=new WeakMap,nl=new WeakMap,mo=new WeakMap,ei=new WeakSet,Di=function(e){const n=i=>{switch(e.type){case"failed":return{...i,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...i,fetchStatus:"paused"};case"continue":return{...i,fetchStatus:"fetching"};case"fetch":return{...i,...OC(i.data,this.options),fetchMeta:e.meta??null};case"success":return{...i,data:e.data,dataUpdateCount:i.dataUpdateCount+1,dataUpdatedAt:e.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const r=e.error;return Ad(r)&&r.revert&&te(this,Ms)?{...te(this,Ms),fetchStatus:"idle"}:{...i,error:r,errorUpdateCount:i.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:i.fetchFailureCount+1,fetchFailureReason:r,fetchStatus:"idle",status:"error"};case"invalidate":return{...i,isInvalidated:!0};case"setState":return{...i,...e.state}}};this.state=n(this.state),on.batch(()=>{this.observers.forEach(i=>{i.onQueryUpdate()}),te(this,Fn).notify({query:this,type:"updated",action:e})})},S0);function OC(t,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:oS(e.networkMode)?"fetching":"paused",...t===void 0&&{error:null,status:"pending"}}}function kC(t){const e=typeof t.initialData=="function"?t.initialData():t.initialData,n=e!==void 0,i=n?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:n?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var pi,E0,BC=(E0=class extends Bu{constructor(e={}){super();ot(this,pi);this.config=e,Xe(this,pi,new Map)}build(e,n,i){const r=n.queryKey,o=n.queryHash??hm(r,n);let s=this.get(o);return s||(s=new FC({cache:this,queryKey:r,queryHash:o,options:e.defaultQueryOptions(n),state:i,defaultOptions:e.getQueryDefaults(r)}),this.add(s)),s}add(e){te(this,pi).has(e.queryHash)||(te(this,pi).set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const n=te(this,pi).get(e.queryHash);n&&(e.destroy(),n===e&&te(this,pi).delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){on.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return te(this,pi).get(e)}getAll(){return[...te(this,pi).values()]}find(e){const n={exact:!0,...e};return this.getAll().find(i=>lv(n,i))}findAll(e={}){const n=this.getAll();return Object.keys(e).length>0?n.filter(i=>lv(e,i)):n}notify(e){on.batch(()=>{this.listeners.forEach(n=>{n(e)})})}onFocus(){on.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){on.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},pi=new WeakMap,E0),mi,nn,go,gi,cr,M0,zC=(M0=class extends lS{constructor(e){super();ot(this,gi);ot(this,mi);ot(this,nn);ot(this,go);this.mutationId=e.mutationId,Xe(this,nn,e.mutationCache),Xe(this,mi,[]),this.state=e.state||HC(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){te(this,mi).includes(e)||(te(this,mi).push(e),this.clearGcTimeout(),te(this,nn).notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){Xe(this,mi,te(this,mi).filter(n=>n!==e)),this.scheduleGc(),te(this,nn).notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){te(this,mi).length||(this.state.status==="pending"?this.scheduleGc():te(this,nn).remove(this))}continue(){var e;return((e=te(this,go))==null?void 0:e.continue())??this.execute(this.state.variables)}async execute(e){var r,o,s,a,l,c,d,f,u,p,g,v,m,h,_,x,y,T,C,b;Xe(this,go,aS({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(new Error("No mutationFn found")),onFail:(A,M)=>{Xt(this,gi,cr).call(this,{type:"failed",failureCount:A,error:M})},onPause:()=>{Xt(this,gi,cr).call(this,{type:"pause"})},onContinue:()=>{Xt(this,gi,cr).call(this,{type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>te(this,nn).canRun(this)}));const n=this.state.status==="pending",i=!te(this,go).canStart();try{if(!n){Xt(this,gi,cr).call(this,{type:"pending",variables:e,isPaused:i}),await((o=(r=te(this,nn).config).onMutate)==null?void 0:o.call(r,e,this));const M=await((a=(s=this.options).onMutate)==null?void 0:a.call(s,e));M!==this.state.context&&Xt(this,gi,cr).call(this,{type:"pending",context:M,variables:e,isPaused:i})}const A=await te(this,go).start();return await((c=(l=te(this,nn).config).onSuccess)==null?void 0:c.call(l,A,e,this.state.context,this)),await((f=(d=this.options).onSuccess)==null?void 0:f.call(d,A,e,this.state.context)),await((p=(u=te(this,nn).config).onSettled)==null?void 0:p.call(u,A,null,this.state.variables,this.state.context,this)),await((v=(g=this.options).onSettled)==null?void 0:v.call(g,A,null,e,this.state.context)),Xt(this,gi,cr).call(this,{type:"success",data:A}),A}catch(A){try{throw await((h=(m=te(this,nn).config).onError)==null?void 0:h.call(m,A,e,this.state.context,this)),await((x=(_=this.options).onError)==null?void 0:x.call(_,A,e,this.state.context)),await((T=(y=te(this,nn).config).onSettled)==null?void 0:T.call(y,void 0,A,this.state.variables,this.state.context,this)),await((b=(C=this.options).onSettled)==null?void 0:b.call(C,void 0,A,e,this.state.context)),A}finally{Xt(this,gi,cr).call(this,{type:"error",error:A})}}finally{te(this,nn).runNext(this)}}},mi=new WeakMap,nn=new WeakMap,go=new WeakMap,gi=new WeakSet,cr=function(e){const n=i=>{switch(e.type){case"failed":return{...i,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...i,isPaused:!0};case"continue":return{...i,isPaused:!1};case"pending":return{...i,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...i,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...i,data:void 0,error:e.error,failureCount:i.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}};this.state=n(this.state),on.batch(()=>{te(this,mi).forEach(i=>{i.onMutationUpdate(e)}),te(this,nn).notify({mutation:this,type:"updated",action:e})})},M0);function HC(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Mn,il,w0,VC=(w0=class extends Bu{constructor(e={}){super();ot(this,Mn);ot(this,il);this.config=e,Xe(this,Mn,new Map),Xe(this,il,Date.now())}build(e,n,i){const r=new zC({mutationCache:this,mutationId:++Sl(this,il)._,options:e.defaultMutationOptions(n),state:i});return this.add(r),r}add(e){const n=Gl(e),i=te(this,Mn).get(n)??[];i.push(e),te(this,Mn).set(n,i),this.notify({type:"added",mutation:e})}remove(e){var i;const n=Gl(e);if(te(this,Mn).has(n)){const r=(i=te(this,Mn).get(n))==null?void 0:i.filter(o=>o!==e);r&&(r.length===0?te(this,Mn).delete(n):te(this,Mn).set(n,r))}this.notify({type:"removed",mutation:e})}canRun(e){var i;const n=(i=te(this,Mn).get(Gl(e)))==null?void 0:i.find(r=>r.state.status==="pending");return!n||n===e}runNext(e){var i;const n=(i=te(this,Mn).get(Gl(e)))==null?void 0:i.find(r=>r!==e&&r.state.isPaused);return(n==null?void 0:n.continue())??Promise.resolve()}clear(){on.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}getAll(){return[...te(this,Mn).values()].flat()}find(e){const n={exact:!0,...e};return this.getAll().find(i=>cv(n,i))}findAll(e={}){return this.getAll().filter(n=>cv(e,n))}notify(e){on.batch(()=>{this.listeners.forEach(n=>{n(e)})})}resumePausedMutations(){const e=this.getAll().filter(n=>n.state.isPaused);return on.batch(()=>Promise.all(e.map(n=>n.continue().catch(Jn))))}},Mn=new WeakMap,il=new WeakMap,w0);function Gl(t){var e;return((e=t.options.scope)==null?void 0:e.id)??String(t.mutationId)}function fv(t){return{onFetch:(e,n)=>{var d,f,u,p,g;const i=e.options,r=(u=(f=(d=e.fetchOptions)==null?void 0:d.meta)==null?void 0:f.fetchMore)==null?void 0:u.direction,o=((p=e.state.data)==null?void 0:p.pages)||[],s=((g=e.state.data)==null?void 0:g.pageParams)||[];let a={pages:[],pageParams:[]},l=0;const c=async()=>{let v=!1;const m=x=>{Object.defineProperty(x,"signal",{enumerable:!0,get:()=>(e.signal.aborted?v=!0:e.signal.addEventListener("abort",()=>{v=!0}),e.signal)})},h=iS(e.options,e.fetchOptions),_=async(x,y,T)=>{if(v)return Promise.reject();if(y==null&&x.pages.length)return Promise.resolve(x);const C={queryKey:e.queryKey,pageParam:y,direction:T?"backward":"forward",meta:e.options.meta};m(C);const b=await h(C),{maxPages:A}=e.options,M=T?PC:RC;return{pages:M(x.pages,b,A),pageParams:M(x.pageParams,y,A)}};if(r&&o.length){const x=r==="backward",y=x?GC:hv,T={pages:o,pageParams:s},C=y(i,T);a=await _(T,C,x)}else{const x=t??o.length;do{const y=l===0?s[0]??i.initialPageParam:hv(i,a);if(l>0&&y==null)break;a=await _(a,y),l++}while(l<x)}return a};e.options.persister?e.fetchFn=()=>{var v,m;return(m=(v=e.options).persister)==null?void 0:m.call(v,c,{queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},n)}:e.fetchFn=c}}}function hv(t,{pages:e,pageParams:n}){const i=e.length-1;return e.length>0?t.getNextPageParam(e[i],e,n[i],n):void 0}function GC(t,{pages:e,pageParams:n}){var i;return e.length>0?(i=t.getPreviousPageParam)==null?void 0:i.call(t,e[0],e,n[0],n):void 0}var Mt,vr,_r,ws,Ts,xr,bs,Cs,T0,WC=(T0=class{constructor(t={}){ot(this,Mt);ot(this,vr);ot(this,_r);ot(this,ws);ot(this,Ts);ot(this,xr);ot(this,bs);ot(this,Cs);Xe(this,Mt,t.queryCache||new BC),Xe(this,vr,t.mutationCache||new VC),Xe(this,_r,t.defaultOptions||{}),Xe(this,ws,new Map),Xe(this,Ts,new Map),Xe(this,xr,0)}mount(){Sl(this,xr)._++,te(this,xr)===1&&(Xe(this,bs,rS.subscribe(async t=>{t&&(await this.resumePausedMutations(),te(this,Mt).onFocus())})),Xe(this,Cs,cu.subscribe(async t=>{t&&(await this.resumePausedMutations(),te(this,Mt).onOnline())})))}unmount(){var t,e;Sl(this,xr)._--,te(this,xr)===0&&((t=te(this,bs))==null||t.call(this),Xe(this,bs,void 0),(e=te(this,Cs))==null||e.call(this),Xe(this,Cs,void 0))}isFetching(t){return te(this,Mt).findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return te(this,vr).findAll({...t,status:"pending"}).length}getQueryData(t){var n;const e=this.defaultQueryOptions({queryKey:t});return(n=te(this,Mt).get(e.queryHash))==null?void 0:n.state.data}ensureQueryData(t){const e=this.getQueryData(t.queryKey);if(e===void 0)return this.fetchQuery(t);{const n=this.defaultQueryOptions(t),i=te(this,Mt).build(this,n);return t.revalidateIfStale&&i.isStaleByTime(av(n.staleTime,i))&&this.prefetchQuery(n),Promise.resolve(e)}}getQueriesData(t){return te(this,Mt).findAll(t).map(({queryKey:e,state:n})=>{const i=n.data;return[e,i]})}setQueryData(t,e,n){const i=this.defaultQueryOptions({queryKey:t}),r=te(this,Mt).get(i.queryHash),o=r==null?void 0:r.state.data,s=MC(e,o);if(s!==void 0)return te(this,Mt).build(this,i).setData(s,{...n,manual:!0})}setQueriesData(t,e,n){return on.batch(()=>te(this,Mt).findAll(t).map(({queryKey:i})=>[i,this.setQueryData(i,e,n)]))}getQueryState(t){var n;const e=this.defaultQueryOptions({queryKey:t});return(n=te(this,Mt).get(e.queryHash))==null?void 0:n.state}removeQueries(t){const e=te(this,Mt);on.batch(()=>{e.findAll(t).forEach(n=>{e.remove(n)})})}resetQueries(t,e){const n=te(this,Mt),i={type:"active",...t};return on.batch(()=>(n.findAll(t).forEach(r=>{r.reset()}),this.refetchQueries(i,e)))}cancelQueries(t={},e={}){const n={revert:!0,...e},i=on.batch(()=>te(this,Mt).findAll(t).map(r=>r.cancel(n)));return Promise.all(i).then(Jn).catch(Jn)}invalidateQueries(t={},e={}){return on.batch(()=>{if(te(this,Mt).findAll(t).forEach(i=>{i.invalidate()}),t.refetchType==="none")return Promise.resolve();const n={...t,type:t.refetchType??t.type??"active"};return this.refetchQueries(n,e)})}refetchQueries(t={},e){const n={...e,cancelRefetch:(e==null?void 0:e.cancelRefetch)??!0},i=on.batch(()=>te(this,Mt).findAll(t).filter(r=>!r.isDisabled()).map(r=>{let o=r.fetch(void 0,n);return n.throwOnError||(o=o.catch(Jn)),r.state.fetchStatus==="paused"?Promise.resolve():o}));return Promise.all(i).then(Jn)}fetchQuery(t){const e=this.defaultQueryOptions(t);e.retry===void 0&&(e.retry=!1);const n=te(this,Mt).build(this,e);return n.isStaleByTime(av(e.staleTime,n))?n.fetch(e):Promise.resolve(n.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(Jn).catch(Jn)}fetchInfiniteQuery(t){return t.behavior=fv(t.pages),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(Jn).catch(Jn)}ensureInfiniteQueryData(t){return t.behavior=fv(t.pages),this.ensureQueryData(t)}resumePausedMutations(){return cu.isOnline()?te(this,vr).resumePausedMutations():Promise.resolve()}getQueryCache(){return te(this,Mt)}getMutationCache(){return te(this,vr)}getDefaultOptions(){return te(this,_r)}setDefaultOptions(t){Xe(this,_r,t)}setQueryDefaults(t,e){te(this,ws).set(Ka(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){const e=[...te(this,ws).values()];let n={};return e.forEach(i=>{Qa(t,i.queryKey)&&(n={...n,...i.defaultOptions})}),n}setMutationDefaults(t,e){te(this,Ts).set(Ka(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){const e=[...te(this,Ts).values()];let n={};return e.forEach(i=>{Qa(t,i.mutationKey)&&(n={...n,...i.defaultOptions})}),n}defaultQueryOptions(t){if(t._defaulted)return t;const e={...te(this,_r).queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=hm(e.queryKey,e)),e.refetchOnReconnect===void 0&&(e.refetchOnReconnect=e.networkMode!=="always"),e.throwOnError===void 0&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e.enabled!==!0&&e.queryFn===pm&&(e.enabled=!1),e}defaultMutationOptions(t){return t!=null&&t._defaulted?t:{...te(this,_r).mutations,...(t==null?void 0:t.mutationKey)&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){te(this,Mt).clear(),te(this,vr).clear()}},Mt=new WeakMap,vr=new WeakMap,_r=new WeakMap,ws=new WeakMap,Ts=new WeakMap,xr=new WeakMap,bs=new WeakMap,Cs=new WeakMap,T0),jC=L.createContext(void 0),XC=({client:t,children:e})=>(L.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]),N.jsx(jC.Provider,{value:t,children:e}));/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Za(){return Za=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Za.apply(this,arguments)}var Er;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Er||(Er={}));const pv="popstate";function $C(t){t===void 0&&(t={});function e(i,r){let{pathname:o,search:s,hash:a}=i.location;return fh("",{pathname:o,search:s,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:uu(r)}return qC(e,n,null,t)}function Lt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function cS(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function YC(){return Math.random().toString(36).substr(2,8)}function mv(t,e){return{usr:t.state,key:t.key,idx:e}}function fh(t,e,n,i){return n===void 0&&(n=null),Za({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ks(e):e,{state:n,key:e&&e.key||i||YC()})}function uu(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Ks(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function qC(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:o=!1}=i,s=r.history,a=Er.Pop,l=null,c=d();c==null&&(c=0,s.replaceState(Za({},s.state,{idx:c}),""));function d(){return(s.state||{idx:null}).idx}function f(){a=Er.Pop;let m=d(),h=m==null?null:m-c;c=m,l&&l({action:a,location:v.location,delta:h})}function u(m,h){a=Er.Push;let _=fh(v.location,m,h);c=d()+1;let x=mv(_,c),y=v.createHref(_);try{s.pushState(x,"",y)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;r.location.assign(y)}o&&l&&l({action:a,location:v.location,delta:1})}function p(m,h){a=Er.Replace;let _=fh(v.location,m,h);c=d();let x=mv(_,c),y=v.createHref(_);s.replaceState(x,"",y),o&&l&&l({action:a,location:v.location,delta:0})}function g(m){let h=r.location.origin!=="null"?r.location.origin:r.location.href,_=typeof m=="string"?m:uu(m);return _=_.replace(/ $/,"%20"),Lt(h,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,h)}let v={get action(){return a},get location(){return t(r,s)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(pv,f),l=m,()=>{r.removeEventListener(pv,f),l=null}},createHref(m){return e(r,m)},createURL:g,encodeLocation(m){let h=g(m);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:u,replace:p,go(m){return s.go(m)}};return v}var gv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(gv||(gv={}));function KC(t,e,n){return n===void 0&&(n="/"),QC(t,e,n,!1)}function QC(t,e,n,i){let r=typeof e=="string"?Ks(e):e,o=mm(r.pathname||"/",n);if(o==null)return null;let s=uS(t);ZC(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let c=cA(o);a=aA(s[l],c,i)}return a}function uS(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(Lt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=Lr([i,l.relativePath]),d=n.concat(l);o.children&&o.children.length>0&&(Lt(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),uS(o.children,e,d,c)),!(o.path==null&&!o.index)&&e.push({path:c,score:oA(c,o.index),routesMeta:d})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))r(o,s);else for(let l of dS(o.path))r(o,s,l)}),e}function dS(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),o=n.replace(/\?$/,"");if(i.length===0)return r?[o,""]:[o];let s=dS(i.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),r&&a.push(...s),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function ZC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:sA(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const JC=/^:[\w-]+$/,eA=3,tA=2,nA=1,iA=10,rA=-2,vv=t=>t==="*";function oA(t,e){let n=t.split("/"),i=n.length;return n.some(vv)&&(i+=rA),e&&(i+=tA),n.filter(r=>!vv(r)).reduce((r,o)=>r+(JC.test(o)?eA:o===""?nA:iA),i)}function sA(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function aA(t,e,n){let{routesMeta:i}=t,r={},o="/",s=[];for(let a=0;a<i.length;++a){let l=i[a],c=a===i.length-1,d=o==="/"?e:e.slice(o.length)||"/",f=_v({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),u=l.route;if(!f&&c&&n&&!i[i.length-1].route.index&&(f=_v({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!f)return null;Object.assign(r,f.params),s.push({params:r,pathname:Lr([o,f.pathname]),pathnameBase:hA(Lr([o,f.pathnameBase])),route:u}),f.pathnameBase!=="/"&&(o=Lr([o,f.pathnameBase]))}return s}function _v(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=lA(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let o=r[0],s=o.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((c,d,f)=>{let{paramName:u,isOptional:p}=d;if(u==="*"){let v=a[f]||"";s=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}const g=a[f];return p&&!g?c[u]=void 0:c[u]=(g||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:s,pattern:t}}function lA(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),cS(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function cA(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return cS(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function mm(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function uA(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?Ks(t):t;return{pathname:n?n.startsWith("/")?n:dA(n,e):e,search:pA(i),hash:mA(r)}}function dA(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Rd(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function fA(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function fS(t,e){let n=fA(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function hS(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=Ks(t):(r=Za({},t),Lt(!r.pathname||!r.pathname.includes("?"),Rd("?","pathname","search",r)),Lt(!r.pathname||!r.pathname.includes("#"),Rd("#","pathname","hash",r)),Lt(!r.search||!r.search.includes("#"),Rd("#","search","hash",r)));let o=t===""||r.pathname==="",s=o?"/":r.pathname,a;if(s==null)a=n;else{let f=e.length-1;if(!i&&s.startsWith("..")){let u=s.split("/");for(;u[0]==="..";)u.shift(),f-=1;r.pathname=u.join("/")}a=f>=0?e[f]:"/"}let l=uA(r,a),c=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const Lr=t=>t.join("/").replace(/\/\/+/g,"/"),hA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),pA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,mA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function gA(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const pS=["post","put","patch","delete"];new Set(pS);const vA=["get",...pS];new Set(vA);/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ja(){return Ja=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ja.apply(this,arguments)}const gm=L.createContext(null),_A=L.createContext(null),Lo=L.createContext(null),Hu=L.createContext(null),Xr=L.createContext({outlet:null,matches:[],isDataRoute:!1}),mS=L.createContext(null);function xA(t,e){let{relative:n}=e===void 0?{}:e;fl()||Lt(!1);let{basename:i,navigator:r}=L.useContext(Lo),{hash:o,pathname:s,search:a}=vS(t,{relative:n}),l=s;return i!=="/"&&(l=s==="/"?i:Lr([i,s])),r.createHref({pathname:l,search:a,hash:o})}function fl(){return L.useContext(Hu)!=null}function Vu(){return fl()||Lt(!1),L.useContext(Hu).location}function gS(t){L.useContext(Lo).static||L.useLayoutEffect(t)}function yA(){let{isDataRoute:t}=L.useContext(Xr);return t?IA():SA()}function SA(){fl()||Lt(!1);let t=L.useContext(gm),{basename:e,future:n,navigator:i}=L.useContext(Lo),{matches:r}=L.useContext(Xr),{pathname:o}=Vu(),s=JSON.stringify(fS(r,n.v7_relativeSplatPath)),a=L.useRef(!1);return gS(()=>{a.current=!0}),L.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){i.go(c);return}let f=hS(c,JSON.parse(s),o,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Lr([e,f.pathname])),(d.replace?i.replace:i.push)(f,d.state,d)},[e,i,s,o,t])}function EA(){let{matches:t}=L.useContext(Xr),e=t[t.length-1];return e?e.params:{}}function vS(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=L.useContext(Lo),{matches:r}=L.useContext(Xr),{pathname:o}=Vu(),s=JSON.stringify(fS(r,i.v7_relativeSplatPath));return L.useMemo(()=>hS(t,JSON.parse(s),o,n==="path"),[t,s,o,n])}function MA(t,e){return wA(t,e)}function wA(t,e,n,i){fl()||Lt(!1);let{navigator:r}=L.useContext(Lo),{matches:o}=L.useContext(Xr),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let c=Vu(),d;if(e){var f;let m=typeof e=="string"?Ks(e):e;l==="/"||(f=m.pathname)!=null&&f.startsWith(l)||Lt(!1),d=m}else d=c;let u=d.pathname||"/",p=u;if(l!=="/"){let m=l.replace(/^\//,"").split("/");p="/"+u.replace(/^\//,"").split("/").slice(m.length).join("/")}let g=KC(t,{pathname:p}),v=RA(g&&g.map(m=>Object.assign({},m,{params:Object.assign({},a,m.params),pathname:Lr([l,r.encodeLocation?r.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?l:Lr([l,r.encodeLocation?r.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),o,n,i);return e&&v?L.createElement(Hu.Provider,{value:{location:Ja({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Er.Pop}},v):v}function TA(){let t=NA(),e=gA(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return L.createElement(L.Fragment,null,L.createElement("h2",null,"Unexpected Application Error!"),L.createElement("h3",{style:{fontStyle:"italic"}},e),n?L.createElement("pre",{style:r},n):null,null)}const bA=L.createElement(TA,null);class CA extends L.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?L.createElement(Xr.Provider,{value:this.props.routeContext},L.createElement(mS.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function AA(t){let{routeContext:e,match:n,children:i}=t,r=L.useContext(gm);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),L.createElement(Xr.Provider,{value:e},i)}function RA(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var o;if(!n)return null;if(n.errors)t=n.matches;else if((o=i)!=null&&o.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let s=t,a=(r=n)==null?void 0:r.errors;if(a!=null){let d=s.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||Lt(!1),s=s.slice(0,Math.min(s.length,d+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let d=0;d<s.length;d++){let f=s[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:u,errors:p}=n,g=f.route.loader&&u[f.route.id]===void 0&&(!p||p[f.route.id]===void 0);if(f.route.lazy||g){l=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((d,f,u)=>{let p,g=!1,v=null,m=null;n&&(p=a&&f.route.id?a[f.route.id]:void 0,v=f.route.errorElement||bA,l&&(c<0&&u===0?(g=!0,m=null):c===u&&(g=!0,m=f.route.hydrateFallbackElement||null)));let h=e.concat(s.slice(0,u+1)),_=()=>{let x;return p?x=v:g?x=m:f.route.Component?x=L.createElement(f.route.Component,null):f.route.element?x=f.route.element:x=d,L.createElement(AA,{match:f,routeContext:{outlet:d,matches:h,isDataRoute:n!=null},children:x})};return n&&(f.route.ErrorBoundary||f.route.errorElement||u===0)?L.createElement(CA,{location:n.location,revalidation:n.revalidation,component:v,error:p,children:_(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):_()},null)}var _S=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(_S||{}),du=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(du||{});function PA(t){let e=L.useContext(gm);return e||Lt(!1),e}function LA(t){let e=L.useContext(_A);return e||Lt(!1),e}function DA(t){let e=L.useContext(Xr);return e||Lt(!1),e}function xS(t){let e=DA(),n=e.matches[e.matches.length-1];return n.route.id||Lt(!1),n.route.id}function NA(){var t;let e=L.useContext(mS),n=LA(du.UseRouteError),i=xS(du.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function IA(){let{router:t}=PA(_S.UseNavigateStable),e=xS(du.UseNavigateStable),n=L.useRef(!1);return gS(()=>{n.current=!0}),L.useCallback(function(r,o){o===void 0&&(o={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,Ja({fromRouteId:e},o)))},[t,e])}function hh(t){Lt(!1)}function UA(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Er.Pop,navigator:o,static:s=!1,future:a}=t;fl()&&Lt(!1);let l=e.replace(/^\/*/,"/"),c=L.useMemo(()=>({basename:l,navigator:o,static:s,future:Ja({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof i=="string"&&(i=Ks(i));let{pathname:d="/",search:f="",hash:u="",state:p=null,key:g="default"}=i,v=L.useMemo(()=>{let m=mm(d,l);return m==null?null:{location:{pathname:m,search:f,hash:u,state:p,key:g},navigationType:r}},[l,d,f,u,p,g,r]);return v==null?null:L.createElement(Lo.Provider,{value:c},L.createElement(Hu.Provider,{children:n,value:v}))}function FA(t){let{children:e,location:n}=t;return MA(ph(e),n)}new Promise(()=>{});function ph(t,e){e===void 0&&(e=[]);let n=[];return L.Children.forEach(t,(i,r)=>{if(!L.isValidElement(i))return;let o=[...e,r];if(i.type===L.Fragment){n.push.apply(n,ph(i.props.children,o));return}i.type!==hh&&Lt(!1),!i.props.index||!i.props.children||Lt(!1);let s={id:i.props.id||o.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(s.children=ph(i.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mh(){return mh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},mh.apply(this,arguments)}function OA(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,o;for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function kA(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function BA(t,e){return t.button===0&&(!e||e==="_self")&&!kA(t)}const zA=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],HA="6";try{window.__reactRouterVersion=HA}catch{}const VA="startTransition",xv=wE[VA];function GA(t){let{basename:e,children:n,future:i,window:r}=t,o=L.useRef();o.current==null&&(o.current=$C({window:r,v5Compat:!0}));let s=o.current,[a,l]=L.useState({action:s.action,location:s.location}),{v7_startTransition:c}=i||{},d=L.useCallback(f=>{c&&xv?xv(()=>l(f)):l(f)},[l,c]);return L.useLayoutEffect(()=>s.listen(d),[s,d]),L.createElement(UA,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:s,future:i})}const WA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",jA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,yS=L.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:o,replace:s,state:a,target:l,to:c,preventScrollReset:d,viewTransition:f}=e,u=OA(e,zA),{basename:p}=L.useContext(Lo),g,v=!1;if(typeof c=="string"&&jA.test(c)&&(g=c,WA))try{let x=new URL(window.location.href),y=c.startsWith("//")?new URL(x.protocol+c):new URL(c),T=mm(y.pathname,p);y.origin===x.origin&&T!=null?c=T+y.search+y.hash:v=!0}catch{}let m=xA(c,{relative:r}),h=XA(c,{replace:s,state:a,target:l,preventScrollReset:d,relative:r,viewTransition:f});function _(x){i&&i(x),x.defaultPrevented||h(x)}return L.createElement("a",mh({},u,{href:g||m,onClick:v||o?i:_,ref:n,target:l}))});var yv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(yv||(yv={}));var Sv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Sv||(Sv={}));function XA(t,e){let{target:n,replace:i,state:r,preventScrollReset:o,relative:s,viewTransition:a}=e===void 0?{}:e,l=yA(),c=Vu(),d=vS(t,{relative:s});return L.useCallback(f=>{if(BA(f,n)){f.preventDefault();let u=i!==void 0?i:uu(c)===uu(d);l(t,{replace:u,state:r,preventScrollReset:o,relative:s,viewTransition:a})}},[c,l,d,i,r,n,t,o,s,a])}const $A=gy("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),el=L.forwardRef(({className:t,variant:e,size:n,asChild:i=!1,...r},o)=>{const s=i?$a:"button";return N.jsx(s,{className:jr($A({variant:e,size:n,className:t})),ref:o,...r})});el.displayName="Button";const YA=()=>N.jsx("div",{className:"card-gradient rounded-xl p-6 md:p-8 animate-fade-in",children:N.jsxs("div",{className:"flex flex-col md:flex-row items-center gap-4",children:[N.jsx("div",{className:"w-28 h-28 rounded-full overflow-hidden",children:N.jsx("img",{src:"/uploads/123.jpg",alt:"Profile",className:"w-full h-full object-cover"})}),N.jsxs("div",{className:"text-center md:text-left flex-1",children:[N.jsx("h1",{className:"font-heading text-3xl font-bold mb-2",children:"Umbrellla777"}),N.jsx("p",{className:"text-xl text-primary mb-3",children:"Developer"}),N.jsxs("div",{className:"text-muted-foreground text-left space-y-3",children:[N.jsx("h2",{className:"text-lg font-semibold text-primary",children:"Навыки:"}),N.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[N.jsxs("div",{className:"md:max-w-[300px]",children:[N.jsx("h3",{className:"font-medium mb-1.5 text-primary/80 border-b border-primary/20 pb-1",children:"Программирование:"}),N.jsx("p",{className:"break-words",children:"C#, JavaScript, Python, Java, Kotlin, TypeScript"})]}),N.jsxs("div",{children:[N.jsx("h3",{className:"font-medium mb-1.5 text-primary/80 border-b border-primary/20 pb-1",children:"Фронтенд:"}),N.jsx("p",{children:"React, HTML, CSS"})]}),N.jsxs("div",{children:[N.jsx("h3",{className:"font-medium mb-1.5 text-primary/80 border-b border-primary/20 pb-1",children:"Геймдев:"}),N.jsx("p",{children:"Unity, Unreal Engine"})]}),N.jsxs("div",{children:[N.jsx("h3",{className:"font-medium mb-1.5 text-primary/80 border-b border-primary/20 pb-1",children:"Разработка ботов и автоматизация:"}),N.jsx("p",{children:"Telegram Userbots, Web Scripts"})]}),N.jsxs("div",{children:[N.jsx("h3",{className:"font-medium mb-1.5 text-primary/80 border-b border-primary/20 pb-1",children:"Разработка сайтов:"}),N.jsx("p",{children:"Web Pages"})]}),N.jsxs("div",{children:[N.jsx("h3",{className:"font-medium mb-1.5 text-primary/80 border-b border-primary/20 pb-1",children:"Встраиваемые системы:"}),N.jsx("p",{children:"Arduino"})]}),N.jsxs("div",{children:[N.jsx("h3",{className:"font-medium mb-1.5 text-primary/80 border-b border-primary/20 pb-1",children:"Операционные системы:"}),N.jsx("p",{children:"Windows, Linux, Android"})]})]})]}),N.jsxs("div",{className:"flex gap-4 justify-center md:justify-start mt-4",children:[N.jsx("a",{href:"https://github.com/umbrellla777",target:"_blank",rel:"noopener noreferrer",children:N.jsx(el,{variant:"outline",size:"icon",children:N.jsx(F1,{className:"w-5 h-5"})})}),N.jsx("a",{href:"https://t.me/umbrella77_dev/1",target:"_blank",rel:"noopener noreferrer",children:N.jsx(el,{variant:"outline",size:"icon",children:N.jsx(_y,{className:"w-5 h-5"})})})]})]})]})}),qA=()=>{const t=[],e=Math.floor(Math.random()*6)+3,n=()=>{const o=[{x:0,y:0},{x:100,y:0},{x:0,y:100},{x:100,y:100}];return o[Math.floor(Math.random()*o.length)]},i=()=>({x:Math.random()*100,y:Math.random()*100}),r=o=>{const s=Math.random()*10-5;switch(o){case"top":case"bottom":return Math.random()*100;case"left":case"right":return Math.max(0,Math.min(100,50+s))}};for(let o=0;o<e;o++){const s=Math.random();let a,l;if(s<.4){const g=n();a=g.x,l=g.y===0?"top":"bottom"}else if(s<.7)l=["top","right","bottom","left"][Math.floor(Math.random()*4)],a=r(l);else{const g=i();a=g.x,l=g.y<50?"top":"bottom"}const c=s<.4?35:s<.7?25:20,d=Math.floor(Math.random()*c)+10,f=Math.floor(Math.random()*360)-180,u=(Math.random()*30+20)/100,p=Math.random()<.3?2:1;if(Math.random()<(s>=.7?.5:.3)){const g=d*(Math.random()*.6+.2),v=f+(Math.random()*60-30);t.push({position:a+(Math.random()*10-5),length:g,rotation:v,side:l,opacity:u*.8,width:1})}t.push({position:a,length:d,rotation:f,side:l,opacity:u,width:p})}return t},KA=({id:t,title:e,description:n,tags:i,isFrozen:r=!1})=>{const o=L.useMemo(()=>qA(),[]);return N.jsx(yS,{to:`/project/${t}`,className:"block",children:N.jsxs("div",{className:`relative card-gradient hover-gradient rounded-xl p-6 transition-all duration-300 h-full flex flex-col
        ${r?"before:absolute before:inset-0 before:bg-[#B3E5FC]/20 before:backdrop-blur-[1px] before:rounded-xl before:pointer-events-none":""}`,children:[r&&N.jsxs(N.Fragment,{children:[N.jsxs("div",{className:"absolute inset-0 rounded-xl pointer-events-none",children:[N.jsx("div",{className:"absolute inset-0 rounded-xl bg-gradient-to-tr from-white/5 via-[#D3E4FD]/10 to-white/5"}),N.jsx("div",{className:"absolute inset-0 rounded-xl opacity-20 mix-blend-overlay bg-[radial-gradient(circle_at_50%_50%,_#ffffff_0%,_transparent_100%)]"}),N.jsxs("div",{className:"absolute inset-0 rounded-xl overflow-hidden",children:[N.jsx("div",{className:"absolute top-0 left-0 w-16 h-16 rounded-br-3xl bg-[radial-gradient(circle_at_0%_0%,_#ffffff_0%,_transparent_70%)] opacity-40"}),N.jsx("div",{className:"absolute top-0 left-0 w-12 h-12 rounded-br-2xl bg-[radial-gradient(circle_at_0%_0%,_#B3E5FC_0%,_transparent_80%)] opacity-30"}),N.jsx("div",{className:"absolute top-0 right-0 w-16 h-16 rounded-bl-3xl bg-[radial-gradient(circle_at_100%_0%,_#ffffff_0%,_transparent_70%)] opacity-40"}),N.jsx("div",{className:"absolute top-0 right-0 w-12 h-12 rounded-bl-2xl bg-[radial-gradient(circle_at_100%_0%,_#B3E5FC_0%,_transparent_80%)] opacity-30"}),N.jsx("div",{className:"absolute bottom-0 left-0 w-16 h-16 rounded-tr-3xl bg-[radial-gradient(circle_at_0%_100%,_#ffffff_0%,_transparent_70%)] opacity-40"}),N.jsx("div",{className:"absolute bottom-0 left-0 w-12 h-12 rounded-tr-2xl bg-[radial-gradient(circle_at_0%_100%,_#B3E5FC_0%,_transparent_80%)] opacity-30"}),N.jsx("div",{className:"absolute bottom-0 right-0 w-16 h-16 rounded-tl-3xl bg-[radial-gradient(circle_at_100%_100%,_#ffffff_0%,_transparent_70%)] opacity-40"}),N.jsx("div",{className:"absolute bottom-0 right-0 w-12 h-12 rounded-tl-2xl bg-[radial-gradient(circle_at_100%_100%,_#B3E5FC_0%,_transparent_80%)] opacity-30"})]}),N.jsxs("div",{className:"absolute inset-0 rounded-xl",children:[N.jsx("div",{className:"absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent"}),N.jsx("div",{className:"absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent"}),N.jsx("div",{className:"absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-white/30 to-transparent"}),N.jsx("div",{className:"absolute inset-y-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-white/30 to-transparent"})]})]}),N.jsx("div",{className:"absolute top-6 -right-1 transform rotate-45 bg-[#B3E5FC] px-4 py-1 shadow-lg z-20",children:N.jsx("span",{className:"text-primary-foreground text-xs font-semibold whitespace-nowrap",children:"заморожен"})}),N.jsx("div",{className:"absolute inset-0 rounded-xl overflow-hidden pointer-events-none",children:o.map((s,a)=>{const l={position:"absolute",width:`${s.width}px`,height:`${s.length}%`,background:`rgba(179, 229, 252, ${s.opacity})`,transform:`rotate(${s.rotation}deg)`};switch(s.side){case"top":l.top="0",l.left=`${s.position}%`;break;case"right":l.right="0",l.top=`${s.position}%`;break;case"bottom":l.bottom="0",l.left=`${s.position}%`;break;case"left":l.left="0",l.top=`${s.position}%`;break}return N.jsx("div",{style:l},a)})})]}),N.jsx("h3",{className:`font-heading text-xl font-semibold mb-3 relative z-10 
          ${r?"text-[#B3E5FC]/70":""}`,children:e}),N.jsx("p",{className:`text-muted-foreground mb-4 flex-grow relative z-10
          ${r?"text-[#B3E5FC]/50":""}`,children:n}),N.jsx("div",{className:"flex flex-wrap gap-2 relative z-10",children:i.map(s=>N.jsx("span",{className:`bg-secondary px-3 py-1 rounded-full text-sm
                ${r?"bg-[#B3E5FC]/10 text-[#B3E5FC]/70":""}`,children:s},s))})]})})},QA=[{id:"1",title:"Игра Bunker",description:"Цифровая адаптация настольной игры о выживании в бункере после апокалипсиса. Решай, кто останется, управляй ресурсами и адаптируйся к новым вызовам!",tags:["C#","Unity","App"],isFrozen:!0},{id:"2",title:"Скоро",description:"...",tags:["","",""]},{id:"3",title:"Скоро",description:"...",tags:["","",""]},{id:"4",title:"Скоро",description:"...",tags:["","",""]},{id:"5",title:"Скоро",description:"...",tags:["","",""]},{id:"6",title:"Скоро",description:"...",tags:["","",""]},{id:"7",title:"Скоро",description:"...",tags:["","",""]},{id:"8",title:"Скоро",description:"...",tags:["","",""]},{id:"9",title:"Скоро",description:"...",tags:["","",""]}],ZA=()=>N.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:QA.map(t=>N.jsx(KA,{...t},t.id))});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vm="172",JA=0,Ev=1,eR=2,SS=1,tR=2,Ni=3,zr=0,gn=1,Fi=2,Dr=0,gs=1,gh=2,Mv=3,wv=4,nR=5,oo=100,iR=101,rR=102,oR=103,sR=104,aR=200,lR=201,cR=202,uR=203,vh=204,_h=205,dR=206,fR=207,hR=208,pR=209,mR=210,gR=211,vR=212,_R=213,xR=214,xh=0,yh=1,Sh=2,Os=3,Eh=4,Mh=5,wh=6,Th=7,ES=0,yR=1,SR=2,Nr=0,ER=1,MR=2,wR=3,TR=4,bR=5,CR=6,AR=7,MS=300,ks=301,Bs=302,bh=303,Ch=304,Gu=306,Ah=1e3,uo=1001,Rh=1002,ai=1003,RR=1004,Wl=1005,xi=1006,Pd=1007,fo=1008,Ki=1009,wS=1010,TS=1011,tl=1012,_m=1013,Co=1014,Bi=1015,hl=1016,xm=1017,ym=1018,zs=1020,bS=35902,CS=1021,AS=1022,ri=1023,RS=1024,PS=1025,vs=1026,Hs=1027,LS=1028,Sm=1029,DS=1030,Em=1031,Mm=1033,Rc=33776,Pc=33777,Lc=33778,Dc=33779,Ph=35840,Lh=35841,Dh=35842,Nh=35843,Ih=36196,Uh=37492,Fh=37496,Oh=37808,kh=37809,Bh=37810,zh=37811,Hh=37812,Vh=37813,Gh=37814,Wh=37815,jh=37816,Xh=37817,$h=37818,Yh=37819,qh=37820,Kh=37821,Nc=36492,Qh=36494,Zh=36495,NS=36283,Jh=36284,ep=36285,tp=36286,PR=3200,LR=3201,DR=0,NR=1,pr="",On="srgb",Vs="srgb-linear",fu="linear",ut="srgb",Io=7680,Tv=519,IR=512,UR=513,FR=514,IS=515,OR=516,kR=517,BR=518,zR=519,bv=35044,Cv="300 es",zi=2e3,hu=2001;class Qs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ld=Math.PI/180,np=180/Math.PI;function pl(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[t&255]+qt[t>>8&255]+qt[t>>16&255]+qt[t>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[n&63|128]+qt[n>>8&255]+"-"+qt[n>>16&255]+qt[n>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function Qe(t,e,n){return Math.max(e,Math.min(n,t))}function HR(t,e){return(t%e+e)%e}function Dd(t,e,n){return(1-n)*t+n*e}function ua(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function un(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class dt{constructor(e=0,n=0){dt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,n,i,r,o,s,a,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,c)}set(e,n,i,r,o,s,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=o,d[5]=l,d[6]=i,d[7]=s,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],c=i[1],d=i[4],f=i[7],u=i[2],p=i[5],g=i[8],v=r[0],m=r[3],h=r[6],_=r[1],x=r[4],y=r[7],T=r[2],C=r[5],b=r[8];return o[0]=s*v+a*_+l*T,o[3]=s*m+a*x+l*C,o[6]=s*h+a*y+l*b,o[1]=c*v+d*_+f*T,o[4]=c*m+d*x+f*C,o[7]=c*h+d*y+f*b,o[2]=u*v+p*_+g*T,o[5]=u*m+p*x+g*C,o[8]=u*h+p*y+g*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*s*d-n*a*c-i*o*d+i*a*l+r*o*c-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=d*s-a*c,u=a*l-d*o,p=c*o-s*l,g=n*f+i*u+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(r*c-d*i)*v,e[2]=(a*i-r*s)*v,e[3]=u*v,e[4]=(d*n-r*l)*v,e[5]=(r*o-a*n)*v,e[6]=p*v,e[7]=(i*l-c*n)*v,e[8]=(s*n-i*o)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),c=Math.sin(o);return this.set(i*l,i*c,-i*(l*s+c*a)+s+e,-r*c,r*l,-r*(-c*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Nd.makeScale(e,n)),this}rotate(e){return this.premultiply(Nd.makeRotation(-e)),this}translate(e,n){return this.premultiply(Nd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Nd=new We;function US(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function pu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function VR(){const t=pu("canvas");return t.style.display="block",t}const Av={};function Yo(t){t in Av||(Av[t]=!0,console.warn(t))}function GR(t,e,n){return new Promise(function(i,r){function o(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(o,n);break;default:i()}}setTimeout(o,n)})}function WR(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function jR(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Rv=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pv=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function XR(){const t={enabled:!0,workingColorSpace:Vs,spaces:{},convert:function(r,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===ut&&(r.r=Gi(r.r),r.g=Gi(r.g),r.b=Gi(r.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===ut&&(r.r=_s(r.r),r.g=_s(r.g),r.b=_s(r.b))),r},fromWorkingColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},toWorkingColorSpace:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===pr?fu:this.spaces[r].transfer},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,s){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Vs]:{primaries:e,whitePoint:i,transfer:fu,toXYZ:Rv,fromXYZ:Pv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:On},outputColorSpaceConfig:{drawingBufferColorSpace:On}},[On]:{primaries:e,whitePoint:i,transfer:ut,toXYZ:Rv,fromXYZ:Pv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:On}}}),t}const nt=XR();function Gi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function _s(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Uo;class $R{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Uo===void 0&&(Uo=pu("canvas")),Uo.width=e.width,Uo.height=e.height;const i=Uo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Uo}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=pu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Gi(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Gi(n[i]/255)*255):n[i]=Gi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let YR=0;class FS{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:YR++}),this.uuid=pl(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Id(r[s].image)):o.push(Id(r[s]))}else o=Id(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function Id(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?$R.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qR=0;class vn extends Qs{constructor(e=vn.DEFAULT_IMAGE,n=vn.DEFAULT_MAPPING,i=uo,r=uo,o=xi,s=fo,a=ri,l=Ki,c=vn.DEFAULT_ANISOTROPY,d=pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qR++}),this.uuid=pl(),this.name="",this.source=new FS(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==MS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ah:e.x=e.x-Math.floor(e.x);break;case uo:e.x=e.x<0?0:1;break;case Rh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ah:e.y=e.y-Math.floor(e.y);break;case uo:e.y=e.y<0?0:1;break;case Rh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=MS;vn.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,n=0,i=0,r=1){bt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,c=l[0],d=l[4],f=l[8],u=l[1],p=l[5],g=l[9],v=l[2],m=l[6],h=l[10];if(Math.abs(d-u)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,y=(p+1)/2,T=(h+1)/2,C=(d+u)/4,b=(f+v)/4,A=(g+m)/4;return x>y&&x>T?x<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(x),r=C/i,o=b/i):y>T?y<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(y),i=C/r,o=A/r):T<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(T),i=b/o,r=A/o),this.set(i,r,o,n),this}let _=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(u-d)*(u-d));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(f-v)/_,this.z=(u-d)/_,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this.z=Qe(this.z,e.z,n.z),this.w=Qe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this.z=Qe(this.z,e,n),this.w=Qe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class KR extends Qs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new bt(0,0,e,n),this.scissorTest=!1,this.viewport=new bt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new vn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const n=Object.assign({},e.texture.image);return this.texture.source=new FS(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ao extends KR{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class OS extends vn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=ai,this.minFilter=ai,this.wrapR=uo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class QR extends vn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=ai,this.minFilter=ai,this.wrapR=uo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ml{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const u=o[s+0],p=o[s+1],g=o[s+2],v=o[s+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f;return}if(a===1){e[n+0]=u,e[n+1]=p,e[n+2]=g,e[n+3]=v;return}if(f!==v||l!==u||c!==p||d!==g){let m=1-a;const h=l*u+c*p+d*g+f*v,_=h>=0?1:-1,x=1-h*h;if(x>Number.EPSILON){const T=Math.sqrt(x),C=Math.atan2(T,h*_);m=Math.sin(m*C)/T,a=Math.sin(a*C)/T}const y=a*_;if(l=l*m+u*y,c=c*m+p*y,d=d*m+g*y,f=f*m+v*y,m===1-a){const T=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=T,c*=T,d*=T,f*=T}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=o[s],u=o[s+1],p=o[s+2],g=o[s+3];return e[n]=a*g+d*f+l*p-c*u,e[n+1]=l*g+d*u+c*f-a*p,e[n+2]=c*g+d*p+a*u-l*f,e[n+3]=d*g-a*f-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),f=a(o/2),u=l(i/2),p=l(r/2),g=l(o/2);switch(s){case"XYZ":this._x=u*d*f+c*p*g,this._y=c*p*f-u*d*g,this._z=c*d*g+u*p*f,this._w=c*d*f-u*p*g;break;case"YXZ":this._x=u*d*f+c*p*g,this._y=c*p*f-u*d*g,this._z=c*d*g-u*p*f,this._w=c*d*f+u*p*g;break;case"ZXY":this._x=u*d*f-c*p*g,this._y=c*p*f+u*d*g,this._z=c*d*g+u*p*f,this._w=c*d*f-u*p*g;break;case"ZYX":this._x=u*d*f-c*p*g,this._y=c*p*f+u*d*g,this._z=c*d*g-u*p*f,this._w=c*d*f+u*p*g;break;case"YZX":this._x=u*d*f+c*p*g,this._y=c*p*f+u*d*g,this._z=c*d*g-u*p*f,this._w=c*d*f-u*p*g;break;case"XZY":this._x=u*d*f-c*p*g,this._y=c*p*f-u*d*g,this._z=c*d*g+u*p*f,this._w=c*d*f+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],c=n[2],d=n[6],f=n[10],u=i+a+f;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(d-l)*p,this._y=(o-c)*p,this._z=(s-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(d-l)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(o+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(o-c)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(s-r)/p,this._x=(o+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+s*a+r*c-o*l,this._y=r*d+s*l+o*a-i*c,this._z=o*d+s*c+i*l-r*a,this._w=s*d-i*a-r*l-o*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*s+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*o+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),f=Math.sin((1-n)*d)/c,u=Math.sin(n*d)/c;return this._w=s*f+this._w*u,this._x=i*f+this._x*u,this._y=r*f+this._y*u,this._z=o*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(n),o*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,n=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Lv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Lv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,c=2*(s*r-a*i),d=2*(a*n-o*r),f=2*(o*i-s*n);return this.x=n+l*c+s*f-a*d,this.y=i+l*d+a*c-o*f,this.z=r+l*f+o*d-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this.z=Qe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this.z=Qe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ud.copy(this).projectOnVector(e),this.sub(Ud)}reflect(e){return this.sub(Ud.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ud=new X,Lv=new ml;class gl{constructor(e=new X(1/0,1/0,1/0),n=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(qn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(qn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=qn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,qn):qn.fromBufferAttribute(o,s),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),jl.copy(i.boundingBox)),jl.applyMatrix4(e.matrixWorld),this.union(jl)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(da),Xl.subVectors(this.max,da),Fo.subVectors(e.a,da),Oo.subVectors(e.b,da),ko.subVectors(e.c,da),ir.subVectors(Oo,Fo),rr.subVectors(ko,Oo),qr.subVectors(Fo,ko);let n=[0,-ir.z,ir.y,0,-rr.z,rr.y,0,-qr.z,qr.y,ir.z,0,-ir.x,rr.z,0,-rr.x,qr.z,0,-qr.x,-ir.y,ir.x,0,-rr.y,rr.x,0,-qr.y,qr.x,0];return!Fd(n,Fo,Oo,ko,Xl)||(n=[1,0,0,0,1,0,0,0,1],!Fd(n,Fo,Oo,ko,Xl))?!1:($l.crossVectors(ir,rr),n=[$l.x,$l.y,$l.z],Fd(n,Fo,Oo,ko,Xl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ci=[new X,new X,new X,new X,new X,new X,new X,new X],qn=new X,jl=new gl,Fo=new X,Oo=new X,ko=new X,ir=new X,rr=new X,qr=new X,da=new X,Xl=new X,$l=new X,Kr=new X;function Fd(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){Kr.fromArray(t,o);const a=r.x*Math.abs(Kr.x)+r.y*Math.abs(Kr.y)+r.z*Math.abs(Kr.z),l=e.dot(Kr),c=n.dot(Kr),d=i.dot(Kr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const ZR=new gl,fa=new X,Od=new X;class Wu{constructor(e=new X,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):ZR.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fa.subVectors(e,this.center);const n=fa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(fa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Od.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fa.copy(e.center).add(Od)),this.expandByPoint(fa.copy(e.center).sub(Od))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ai=new X,kd=new X,Yl=new X,or=new X,Bd=new X,ql=new X,zd=new X;class kS{constructor(e=new X,n=new X(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ai.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,n),Ai.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){kd.copy(e).add(n).multiplyScalar(.5),Yl.copy(n).sub(e).normalize(),or.copy(this.origin).sub(kd);const o=e.distanceTo(n)*.5,s=-this.direction.dot(Yl),a=or.dot(this.direction),l=-or.dot(Yl),c=or.lengthSq(),d=Math.abs(1-s*s);let f,u,p,g;if(d>0)if(f=s*l-a,u=s*a-l,g=o*d,f>=0)if(u>=-g)if(u<=g){const v=1/d;f*=v,u*=v,p=f*(f+s*u+2*a)+u*(s*f+u+2*l)+c}else u=o,f=Math.max(0,-(s*u+a)),p=-f*f+u*(u+2*l)+c;else u=-o,f=Math.max(0,-(s*u+a)),p=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-s*o+a)),u=f>0?-o:Math.min(Math.max(-o,-l),o),p=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-o,-l),o),p=u*(u+2*l)+c):(f=Math.max(0,-(s*o+a)),u=f>0?o:Math.min(Math.max(-o,-l),o),p=-f*f+u*(u+2*l)+c);else u=s>0?-o:o,f=Math.max(0,-(s*u+a)),p=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(kd).addScaledVector(Yl,u),p}intersectSphere(e,n){Ai.subVectors(e.center,this.origin);const i=Ai.dot(this.direction),r=Ai.dot(Ai)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),d>=0?(o=(e.min.y-u.y)*d,s=(e.max.y-u.y)*d):(o=(e.max.y-u.y)*d,s=(e.min.y-u.y)*d),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),f>=0?(a=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(a=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,n,i,r,o){Bd.subVectors(n,e),ql.subVectors(i,e),zd.crossVectors(Bd,ql);let s=this.direction.dot(zd),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;or.subVectors(this.origin,e);const l=a*this.direction.dot(ql.crossVectors(or,ql));if(l<0)return null;const c=a*this.direction.dot(Bd.cross(or));if(c<0||l+c>s)return null;const d=-a*or.dot(zd);return d<0?null:this.at(d/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ct{constructor(e,n,i,r,o,s,a,l,c,d,f,u,p,g,v,m){Ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,c,d,f,u,p,g,v,m)}set(e,n,i,r,o,s,a,l,c,d,f,u,p,g,v,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=o,h[5]=s,h[9]=a,h[13]=l,h[2]=c,h[6]=d,h[10]=f,h[14]=u,h[3]=p,h[7]=g,h[11]=v,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ct().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Bo.setFromMatrixColumn(e,0).length(),o=1/Bo.setFromMatrixColumn(e,1).length(),s=1/Bo.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(o),f=Math.sin(o);if(e.order==="XYZ"){const u=s*d,p=s*f,g=a*d,v=a*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=p+g*c,n[5]=u-v*c,n[9]=-a*l,n[2]=v-u*c,n[6]=g+p*c,n[10]=s*l}else if(e.order==="YXZ"){const u=l*d,p=l*f,g=c*d,v=c*f;n[0]=u+v*a,n[4]=g*a-p,n[8]=s*c,n[1]=s*f,n[5]=s*d,n[9]=-a,n[2]=p*a-g,n[6]=v+u*a,n[10]=s*l}else if(e.order==="ZXY"){const u=l*d,p=l*f,g=c*d,v=c*f;n[0]=u-v*a,n[4]=-s*f,n[8]=g+p*a,n[1]=p+g*a,n[5]=s*d,n[9]=v-u*a,n[2]=-s*c,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const u=s*d,p=s*f,g=a*d,v=a*f;n[0]=l*d,n[4]=g*c-p,n[8]=u*c+v,n[1]=l*f,n[5]=v*c+u,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const u=s*l,p=s*c,g=a*l,v=a*c;n[0]=l*d,n[4]=v-u*f,n[8]=g*f+p,n[1]=f,n[5]=s*d,n[9]=-a*d,n[2]=-c*d,n[6]=p*f+g,n[10]=u-v*f}else if(e.order==="XZY"){const u=s*l,p=s*c,g=a*l,v=a*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=u*f+v,n[5]=s*d,n[9]=p*f-g,n[2]=g*f-p,n[6]=a*d,n[10]=v*f+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(JR,e,eP)}lookAt(e,n,i){const r=this.elements;return Sn.subVectors(e,n),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),sr.crossVectors(i,Sn),sr.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),sr.crossVectors(i,Sn)),sr.normalize(),Kl.crossVectors(Sn,sr),r[0]=sr.x,r[4]=Kl.x,r[8]=Sn.x,r[1]=sr.y,r[5]=Kl.y,r[9]=Sn.y,r[2]=sr.z,r[6]=Kl.z,r[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],c=i[12],d=i[1],f=i[5],u=i[9],p=i[13],g=i[2],v=i[6],m=i[10],h=i[14],_=i[3],x=i[7],y=i[11],T=i[15],C=r[0],b=r[4],A=r[8],M=r[12],S=r[1],D=r[5],k=r[9],z=r[13],B=r[2],$=r[6],H=r[10],K=r[14],P=r[3],G=r[7],Q=r[11],Z=r[15];return o[0]=s*C+a*S+l*B+c*P,o[4]=s*b+a*D+l*$+c*G,o[8]=s*A+a*k+l*H+c*Q,o[12]=s*M+a*z+l*K+c*Z,o[1]=d*C+f*S+u*B+p*P,o[5]=d*b+f*D+u*$+p*G,o[9]=d*A+f*k+u*H+p*Q,o[13]=d*M+f*z+u*K+p*Z,o[2]=g*C+v*S+m*B+h*P,o[6]=g*b+v*D+m*$+h*G,o[10]=g*A+v*k+m*H+h*Q,o[14]=g*M+v*z+m*K+h*Z,o[3]=_*C+x*S+y*B+T*P,o[7]=_*b+x*D+y*$+T*G,o[11]=_*A+x*k+y*H+T*Q,o[15]=_*M+x*z+y*K+T*Z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],c=e[13],d=e[2],f=e[6],u=e[10],p=e[14],g=e[3],v=e[7],m=e[11],h=e[15];return g*(+o*l*f-r*c*f-o*a*u+i*c*u+r*a*p-i*l*p)+v*(+n*l*p-n*c*u+o*s*u-r*s*p+r*c*d-o*l*d)+m*(+n*c*f-n*a*p-o*s*f+i*s*p+o*a*d-i*c*d)+h*(-r*a*d-n*l*f+n*a*u+r*s*f-i*s*u+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=e[9],u=e[10],p=e[11],g=e[12],v=e[13],m=e[14],h=e[15],_=f*m*c-v*u*c+v*l*p-a*m*p-f*l*h+a*u*h,x=g*u*c-d*m*c-g*l*p+s*m*p+d*l*h-s*u*h,y=d*v*c-g*f*c+g*a*p-s*v*p-d*a*h+s*f*h,T=g*f*l-d*v*l-g*a*u+s*v*u+d*a*m-s*f*m,C=n*_+i*x+r*y+o*T;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/C;return e[0]=_*b,e[1]=(v*u*o-f*m*o-v*r*p+i*m*p+f*r*h-i*u*h)*b,e[2]=(a*m*o-v*l*o+v*r*c-i*m*c-a*r*h+i*l*h)*b,e[3]=(f*l*o-a*u*o-f*r*c+i*u*c+a*r*p-i*l*p)*b,e[4]=x*b,e[5]=(d*m*o-g*u*o+g*r*p-n*m*p-d*r*h+n*u*h)*b,e[6]=(g*l*o-s*m*o-g*r*c+n*m*c+s*r*h-n*l*h)*b,e[7]=(s*u*o-d*l*o+d*r*c-n*u*c-s*r*p+n*l*p)*b,e[8]=y*b,e[9]=(g*f*o-d*v*o-g*i*p+n*v*p+d*i*h-n*f*h)*b,e[10]=(s*v*o-g*a*o+g*i*c-n*v*c-s*i*h+n*a*h)*b,e[11]=(d*a*o-s*f*o-d*i*c+n*f*c+s*i*p-n*a*p)*b,e[12]=T*b,e[13]=(d*v*r-g*f*r+g*i*u-n*v*u-d*i*m+n*f*m)*b,e[14]=(g*a*r-s*v*r-g*i*l+n*v*l+s*i*m-n*a*m)*b,e[15]=(s*f*r-d*a*r+d*i*l-n*f*l-s*i*u+n*a*u)*b,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,c=o*s,d=o*a;return this.set(c*s+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*s,0,c*l-r*a,d*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,c=o+o,d=s+s,f=a+a,u=o*c,p=o*d,g=o*f,v=s*d,m=s*f,h=a*f,_=l*c,x=l*d,y=l*f,T=i.x,C=i.y,b=i.z;return r[0]=(1-(v+h))*T,r[1]=(p+y)*T,r[2]=(g-x)*T,r[3]=0,r[4]=(p-y)*C,r[5]=(1-(u+h))*C,r[6]=(m+_)*C,r[7]=0,r[8]=(g+x)*b,r[9]=(m-_)*b,r[10]=(1-(u+v))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=Bo.set(r[0],r[1],r[2]).length();const s=Bo.set(r[4],r[5],r[6]).length(),a=Bo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Kn.copy(this);const c=1/o,d=1/s,f=1/a;return Kn.elements[0]*=c,Kn.elements[1]*=c,Kn.elements[2]*=c,Kn.elements[4]*=d,Kn.elements[5]*=d,Kn.elements[6]*=d,Kn.elements[8]*=f,Kn.elements[9]*=f,Kn.elements[10]*=f,n.setFromRotationMatrix(Kn),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s,a=zi){const l=this.elements,c=2*o/(n-e),d=2*o/(i-r),f=(n+e)/(n-e),u=(i+r)/(i-r);let p,g;if(a===zi)p=-(s+o)/(s-o),g=-2*s*o/(s-o);else if(a===hu)p=-s/(s-o),g=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=zi){const l=this.elements,c=1/(n-e),d=1/(i-r),f=1/(s-o),u=(n+e)*c,p=(i+r)*d;let g,v;if(a===zi)g=(s+o)*f,v=-2*f;else if(a===hu)g=o*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Bo=new X,Kn=new Ct,JR=new X(0,0,0),eP=new X(1,1,1),sr=new X,Kl=new X,Sn=new X,Dv=new Ct,Nv=new ml;class Qi{constructor(e=0,n=0,i=0,r=Qi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],d=r[9],f=r[2],u=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Qe(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Dv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dv,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Nv.setFromEuler(this),this.setFromQuaternion(Nv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qi.DEFAULT_ORDER="XYZ";class BS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tP=0;const Iv=new X,zo=new ml,Ri=new Ct,Ql=new X,ha=new X,nP=new X,iP=new ml,Uv=new X(1,0,0),Fv=new X(0,1,0),Ov=new X(0,0,1),kv={type:"added"},rP={type:"removed"},Ho={type:"childadded",child:null},Hd={type:"childremoved",child:null};class _n extends Qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tP++}),this.uuid=pl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_n.DEFAULT_UP.clone();const e=new X,n=new Qi,i=new ml,r=new X(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ct},normalMatrix:{value:new We}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=_n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new BS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return zo.setFromAxisAngle(e,n),this.quaternion.multiply(zo),this}rotateOnWorldAxis(e,n){return zo.setFromAxisAngle(e,n),this.quaternion.premultiply(zo),this}rotateX(e){return this.rotateOnAxis(Uv,e)}rotateY(e){return this.rotateOnAxis(Fv,e)}rotateZ(e){return this.rotateOnAxis(Ov,e)}translateOnAxis(e,n){return Iv.copy(e).applyQuaternion(this.quaternion),this.position.add(Iv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Uv,e)}translateY(e){return this.translateOnAxis(Fv,e)}translateZ(e){return this.translateOnAxis(Ov,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ql.copy(e):Ql.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(ha,Ql,this.up):Ri.lookAt(Ql,ha,this.up),this.quaternion.setFromRotationMatrix(Ri),r&&(Ri.extractRotation(r.matrixWorld),zo.setFromRotationMatrix(Ri),this.quaternion.premultiply(zo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kv),Ho.child=e,this.dispatchEvent(Ho),Ho.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(rP),Hd.child=e,this.dispatchEvent(Hd),Hd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kv),Ho.child=e,this.dispatchEvent(Ho),Ho.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,e,nP),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,iP,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];o(e.shapes,f)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),d=s(e.images),f=s(e.shapes),u=s(e.skeletons),p=s(e.animations),g=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function s(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}_n.DEFAULT_UP=new X(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qn=new X,Pi=new X,Vd=new X,Li=new X,Vo=new X,Go=new X,Bv=new X,Gd=new X,Wd=new X,jd=new X,Xd=new bt,$d=new bt,Yd=new bt;class ii{constructor(e=new X,n=new X,i=new X){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Qn.subVectors(e,n),r.cross(Qn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){Qn.subVectors(r,n),Pi.subVectors(i,n),Vd.subVectors(e,n);const s=Qn.dot(Qn),a=Qn.dot(Pi),l=Qn.dot(Vd),c=Pi.dot(Pi),d=Pi.dot(Vd),f=s*c-a*a;if(f===0)return o.set(0,0,0),null;const u=1/f,p=(c*l-a*d)*u,g=(s*d-a*l)*u;return o.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,Li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Li.x),l.addScaledVector(s,Li.y),l.addScaledVector(a,Li.z),l)}static getInterpolatedAttribute(e,n,i,r,o,s){return Xd.setScalar(0),$d.setScalar(0),Yd.setScalar(0),Xd.fromBufferAttribute(e,n),$d.fromBufferAttribute(e,i),Yd.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(Xd,o.x),s.addScaledVector($d,o.y),s.addScaledVector(Yd,o.z),s}static isFrontFacing(e,n,i,r){return Qn.subVectors(i,n),Pi.subVectors(e,n),Qn.cross(Pi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),Qn.cross(Pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ii.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,o){return ii.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;Vo.subVectors(r,i),Go.subVectors(o,i),Gd.subVectors(e,i);const l=Vo.dot(Gd),c=Go.dot(Gd);if(l<=0&&c<=0)return n.copy(i);Wd.subVectors(e,r);const d=Vo.dot(Wd),f=Go.dot(Wd);if(d>=0&&f<=d)return n.copy(r);const u=l*f-d*c;if(u<=0&&l>=0&&d<=0)return s=l/(l-d),n.copy(i).addScaledVector(Vo,s);jd.subVectors(e,o);const p=Vo.dot(jd),g=Go.dot(jd);if(g>=0&&p<=g)return n.copy(o);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Go,a);const m=d*g-p*f;if(m<=0&&f-d>=0&&p-g>=0)return Bv.subVectors(o,r),a=(f-d)/(f-d+(p-g)),n.copy(r).addScaledVector(Bv,a);const h=1/(m+v+u);return s=v*h,a=u*h,n.copy(i).addScaledVector(Vo,s).addScaledVector(Go,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const zS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ar={h:0,s:0,l:0},Zl={h:0,s:0,l:0};function qd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=On){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=nt.workingColorSpace){return this.r=e,this.g=n,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=nt.workingColorSpace){if(e=HR(e,1),n=Qe(n,0,1),i=Qe(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=qd(s,o,e+1/3),this.g=qd(s,o,e),this.b=qd(s,o,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,n=On){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=On){const i=zS[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}copyLinearToSRGB(e){return this.r=_s(e.r),this.g=_s(e.g),this.b=_s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=On){return nt.fromWorkingColorSpace(Kt.copy(this),e),Math.round(Qe(Kt.r*255,0,255))*65536+Math.round(Qe(Kt.g*255,0,255))*256+Math.round(Qe(Kt.b*255,0,255))}getHexString(e=On){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=nt.workingColorSpace){nt.fromWorkingColorSpace(Kt.copy(this),n);const i=Kt.r,r=Kt.g,o=Kt.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,c;const d=(a+s)/2;if(a===s)l=0,c=0;else{const f=s-a;switch(c=d<=.5?f/(s+a):f/(2-s-a),s){case i:l=(r-o)/f+(r<o?6:0);break;case r:l=(o-i)/f+2;break;case o:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=nt.workingColorSpace){return nt.fromWorkingColorSpace(Kt.copy(this),n),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=On){nt.fromWorkingColorSpace(Kt.copy(this),e);const n=Kt.r,i=Kt.g,r=Kt.b;return e!==On?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ar),this.setHSL(ar.h+e,ar.s+n,ar.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ar),e.getHSL(Zl);const i=Dd(ar.h,Zl.h,n),r=Dd(ar.s,Zl.s,n),o=Dd(ar.l,Zl.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new Je;Je.NAMES=zS;let oP=0;class vl extends Qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:oP++}),this.uuid=pl(),this.name="",this.type="Material",this.blending=gs,this.side=zr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vh,this.blendDst=_h,this.blendEquation=oo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Io,this.stencilZFail=Io,this.stencilZPass=Io,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==gs&&(i.blending=this.blending),this.side!==zr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==vh&&(i.blendSrc=this.blendSrc),this.blendDst!==_h&&(i.blendDst=this.blendDst),this.blendEquation!==oo&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Os&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Io&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Io&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Io&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class HS extends vl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.combine=ES,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rt=new X,Jl=new dt;class Gn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=bv,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Jl.fromBufferAttribute(this,n),Jl.applyMatrix3(e),this.setXY(n,Jl.x,Jl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyMatrix3(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyMatrix4(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyNormalMatrix(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.transformDirection(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ua(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=un(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ua(n,this.array)),n}setX(e,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ua(n,this.array)),n}setY(e,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ua(n,this.array)),n}setZ(e,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ua(n,this.array)),n}setW(e,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=un(n,this.array),i=un(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=un(n,this.array),i=un(i,this.array),r=un(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=un(n,this.array),i=un(i,this.array),r=un(r,this.array),o=un(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bv&&(e.usage=this.usage),e}}class VS extends Gn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class GS extends Gn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class xo extends Gn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let sP=0;const Un=new Ct,Kd=new _n,Wo=new X,En=new gl,pa=new gl,Ot=new X;class Ji extends Qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sP++}),this.uuid=pl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(US(e)?GS:VS)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new We().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,n,i){return Un.makeTranslation(e,n,i),this.applyMatrix4(Un),this}scale(e,n,i){return Un.makeScale(e,n,i),this.applyMatrix4(Un),this}lookAt(e){return Kd.lookAt(e),Kd.updateMatrix(),this.applyMatrix4(Kd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wo).negate(),this.translate(Wo.x,Wo.y,Wo.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,o=e.length;r<o;r++){const s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new xo(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const o=e[r];n.setXYZ(r,o.x,o.y,o.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];En.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];pa.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(En.min,pa.min),En.expandByPoint(Ot),Ot.addVectors(En.max,pa.max),En.expandByPoint(Ot)):(En.expandByPoint(pa.min),En.expandByPoint(pa.max))}En.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Ot.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Ot));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Ot.fromBufferAttribute(a,c),l&&(Wo.fromBufferAttribute(e,c),Ot.add(Wo)),r=Math.max(r,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gn(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<i.count;A++)a[A]=new X,l[A]=new X;const c=new X,d=new X,f=new X,u=new dt,p=new dt,g=new dt,v=new X,m=new X;function h(A,M,S){c.fromBufferAttribute(i,A),d.fromBufferAttribute(i,M),f.fromBufferAttribute(i,S),u.fromBufferAttribute(o,A),p.fromBufferAttribute(o,M),g.fromBufferAttribute(o,S),d.sub(c),f.sub(c),p.sub(u),g.sub(u);const D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(v.copy(d).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(D),m.copy(f).multiplyScalar(p.x).addScaledVector(d,-g.x).multiplyScalar(D),a[A].add(v),a[M].add(v),a[S].add(v),l[A].add(m),l[M].add(m),l[S].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let A=0,M=_.length;A<M;++A){const S=_[A],D=S.start,k=S.count;for(let z=D,B=D+k;z<B;z+=3)h(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const x=new X,y=new X,T=new X,C=new X;function b(A){T.fromBufferAttribute(r,A),C.copy(T);const M=a[A];x.copy(M),x.sub(T.multiplyScalar(T.dot(M))).normalize(),y.crossVectors(C,M);const D=y.dot(l[A])<0?-1:1;s.setXYZW(A,x.x,x.y,x.z,D)}for(let A=0,M=_.length;A<M;++A){const S=_[A],D=S.start,k=S.count;for(let z=D,B=D+k;z<B;z+=3)b(e.getX(z+0)),b(e.getX(z+1)),b(e.getX(z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Gn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const r=new X,o=new X,s=new X,a=new X,l=new X,c=new X,d=new X,f=new X;if(e)for(let u=0,p=e.count;u<p;u+=3){const g=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(n,g),o.fromBufferAttribute(n,v),s.fromBufferAttribute(n,m),d.subVectors(s,o),f.subVectors(r,o),d.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(d),l.add(d),c.add(d),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=n.count;u<p;u+=3)r.fromBufferAttribute(n,u+0),o.fromBufferAttribute(n,u+1),s.fromBufferAttribute(n,u+2),d.subVectors(s,o),f.subVectors(r,o),d.cross(f),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ot.fromBufferAttribute(e,n),Ot.normalize(),e.setXYZ(n,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,f=a.normalized,u=new c.constructor(l.length*d);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*d;for(let h=0;h<d;h++)u[g++]=c[p++]}return new Gn(u,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ji,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let d=0,f=c.length;d<f;d++){const u=c[d],p=e(u,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,u=c.length;f<u;f++){const p=c[f];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const o=e.morphAttributes;for(const c in o){const d=[],f=o[c];for(let u=0,p=f.length;u<p;u++)d.push(f[u].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,d=s.length;c<d;c++){const f=s[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zv=new Ct,Qr=new kS,ec=new Wu,Hv=new X,tc=new X,nc=new X,ic=new X,Qd=new X,rc=new X,Vv=new X,oc=new X;class Hi extends _n{constructor(e=new Ji,n=new HS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){rc.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const d=a[l],f=o[l];d!==0&&(Qd.fromBufferAttribute(f,e),s?rc.addScaledVector(Qd,d):rc.addScaledVector(Qd.sub(n),d))}n.add(rc)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ec.copy(i.boundingSphere),ec.applyMatrix4(o),Qr.copy(e.ray).recast(e.near),!(ec.containsPoint(Qr.origin)===!1&&(Qr.intersectSphere(ec,Hv)===null||Qr.origin.distanceToSquared(Hv)>(e.far-e.near)**2))&&(zv.copy(o).invert(),Qr.copy(e.ray).applyMatrix4(zv),!(i.boundingBox!==null&&Qr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Qr)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,d=o.attributes.uv1,f=o.attributes.normal,u=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(s))for(let g=0,v=u.length;g<v;g++){const m=u[g],h=s[m.materialIndex],_=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,T=x;y<T;y+=3){const C=a.getX(y),b=a.getX(y+1),A=a.getX(y+2);r=sc(this,h,e,i,c,d,f,C,b,A),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){const _=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);r=sc(this,s,e,i,c,d,f,_,x,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,v=u.length;g<v;g++){const m=u[g],h=s[m.materialIndex],_=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,T=x;y<T;y+=3){const C=y,b=y+1,A=y+2;r=sc(this,h,e,i,c,d,f,C,b,A),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){const _=m,x=m+1,y=m+2;r=sc(this,s,e,i,c,d,f,_,x,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function aP(t,e,n,i,r,o,s,a){let l;if(e.side===gn?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===zr,a),l===null)return null;oc.copy(a),oc.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(oc);return c<n.near||c>n.far?null:{distance:c,point:oc.clone(),object:t}}function sc(t,e,n,i,r,o,s,a,l,c){t.getVertexPosition(a,tc),t.getVertexPosition(l,nc),t.getVertexPosition(c,ic);const d=aP(t,e,n,i,tc,nc,ic,Vv);if(d){const f=new X;ii.getBarycoord(Vv,tc,nc,ic,f),r&&(d.uv=ii.getInterpolatedAttribute(r,a,l,c,f,new dt)),o&&(d.uv1=ii.getInterpolatedAttribute(o,a,l,c,f,new dt)),s&&(d.normal=ii.getInterpolatedAttribute(s,a,l,c,f,new X),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new X,materialIndex:0};ii.getNormal(tc,nc,ic,u.normal),d.face=u,d.barycoord=f}return d}class _l extends Ji{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],c=[],d=[],f=[];let u=0,p=0;g("z","y","x",-1,-1,i,n,e,s,o,0),g("z","y","x",1,-1,i,n,-e,s,o,1),g("x","z","y",1,1,e,i,n,r,s,2),g("x","z","y",1,-1,e,i,-n,r,s,3),g("x","y","z",1,-1,e,n,i,r,o,4),g("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new xo(c,3)),this.setAttribute("normal",new xo(d,3)),this.setAttribute("uv",new xo(f,2));function g(v,m,h,_,x,y,T,C,b,A,M){const S=y/b,D=T/A,k=y/2,z=T/2,B=C/2,$=b+1,H=A+1;let K=0,P=0;const G=new X;for(let Q=0;Q<H;Q++){const Z=Q*D-z;for(let ce=0;ce<$;ce++){const we=ce*S-k;G[v]=we*_,G[m]=Z*x,G[h]=B,c.push(G.x,G.y,G.z),G[v]=0,G[m]=0,G[h]=C>0?1:-1,d.push(G.x,G.y,G.z),f.push(ce/b),f.push(1-Q/A),K+=1}}for(let Q=0;Q<A;Q++)for(let Z=0;Z<b;Z++){const ce=u+Z+$*Q,we=u+Z+$*(Q+1),q=u+(Z+1)+$*(Q+1),oe=u+(Z+1)+$*Q;l.push(ce,we,oe),l.push(we,q,oe),P+=6}a.addGroup(p,P,M),p+=P,u+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _l(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function tn(t){const e={};for(let n=0;n<t.length;n++){const i=Gs(t[n]);for(const r in i)e[r]=i[r]}return e}function lP(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function WS(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const cP={clone:Gs,merge:tn};var uP=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dP=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hr extends vl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uP,this.fragmentShader=dP,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gs(e.uniforms),this.uniformsGroups=lP(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class jS extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=zi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const lr=new X,Gv=new dt,Wv=new dt;class zn extends jS{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=np*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ld*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return np*2*Math.atan(Math.tan(Ld*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(lr.x,lr.y).multiplyScalar(-e/lr.z),lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(lr.x,lr.y).multiplyScalar(-e/lr.z)}getViewSize(e,n){return this.getViewBounds(e,Gv,Wv),n.subVectors(Wv,Gv)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ld*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const jo=-90,Xo=1;class fP extends _n{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new zn(jo,Xo,e,n);r.layers=this.layers,this.add(r);const o=new zn(jo,Xo,e,n);o.layers=this.layers,this.add(o);const s=new zn(jo,Xo,e,n);s.layers=this.layers,this.add(s);const a=new zn(jo,Xo,e,n);a.layers=this.layers,this.add(a);const l=new zn(jo,Xo,e,n);l.layers=this.layers,this.add(l);const c=new zn(jo,Xo,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,l]=n;for(const c of n)this.remove(c);if(e===zi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===hu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,c,d]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,o),e.setRenderTarget(i,1,r),e.render(n,s),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,u,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class XS extends vn{constructor(e,n,i,r,o,s,a,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:ks,super(e,n,i,r,o,s,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hP extends Ao{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new XS(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:xi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new _l(5,5,5),o=new Hr({name:"CubemapFromEquirect",uniforms:Gs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:Dr});o.uniforms.tEquirect.value=n;const s=new Hi(r,o),a=n.minFilter;return n.minFilter===fo&&(n.minFilter=xi),new fP(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}class pP extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qi,this.environmentIntensity=1,this.environmentRotation=new Qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Zd=new X,mP=new X,gP=new We;class io{constructor(e=new X(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Zd.subVectors(i,n).cross(mP.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Zd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||gP.getNormalMatrix(e),r=this.coplanarPoint(Zd).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zr=new Wu,ac=new X;class $S{constructor(e=new io,n=new io,i=new io,r=new io,o=new io,s=new io){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=zi){const i=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],c=r[4],d=r[5],f=r[6],u=r[7],p=r[8],g=r[9],v=r[10],m=r[11],h=r[12],_=r[13],x=r[14],y=r[15];if(i[0].setComponents(l-o,u-c,m-p,y-h).normalize(),i[1].setComponents(l+o,u+c,m+p,y+h).normalize(),i[2].setComponents(l+s,u+d,m+g,y+_).normalize(),i[3].setComponents(l-s,u-d,m-g,y-_).normalize(),i[4].setComponents(l-a,u-f,m-v,y-x).normalize(),n===zi)i[5].setComponents(l+a,u+f,m+v,y+x).normalize();else if(n===hu)i[5].setComponents(a,f,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zr)}intersectsSprite(e){return Zr.center.set(0,0,0),Zr.radius=.7071067811865476,Zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ac.x=r.normal.x>0?e.max.x:e.min.x,ac.y=r.normal.y>0?e.max.y:e.min.y,ac.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ac)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class YS extends vl{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const jv=new Ct,ip=new kS,lc=new Wu,cc=new X;class vP extends _n{constructor(e=new Ji,n=new YS){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),lc.copy(i.boundingSphere),lc.applyMatrix4(r),lc.radius+=o,e.ray.intersectsSphere(lc)===!1)return;jv.copy(r).invert(),ip.copy(e.ray).applyMatrix4(jv);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const u=Math.max(0,s.start),p=Math.min(c.count,s.start+s.count);for(let g=u,v=p;g<v;g++){const m=c.getX(g);cc.fromBufferAttribute(f,m),Xv(cc,m,l,r,e,n,this)}}else{const u=Math.max(0,s.start),p=Math.min(f.count,s.start+s.count);for(let g=u,v=p;g<v;g++)cc.fromBufferAttribute(f,g),Xv(cc,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Xv(t,e,n,i,r,o,s){const a=ip.distanceSqToPoint(t);if(a<n){const l=new X;ip.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class uc extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}}class qS extends vn{constructor(e,n,i,r,o,s,a,l,c,d=vs){if(d!==vs&&d!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===vs&&(i=Co),i===void 0&&d===Hs&&(i=zs),super(null,r,o,s,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:ai,this.minFilter=l!==void 0?l:ai,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class ju extends Ji{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,f=e/a,u=n/l,p=[],g=[],v=[],m=[];for(let h=0;h<d;h++){const _=h*u-s;for(let x=0;x<c;x++){const y=x*f-o;g.push(y,-_,0),v.push(0,0,1),m.push(x/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let _=0;_<a;_++){const x=_+c*h,y=_+c*(h+1),T=_+1+c*(h+1),C=_+1+c*h;p.push(x,y,C),p.push(y,T,C)}this.setIndex(p),this.setAttribute("position",new xo(g,3)),this.setAttribute("normal",new xo(v,3)),this.setAttribute("uv",new xo(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ju(e.width,e.height,e.widthSegments,e.heightSegments)}}class _P extends vl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=PR,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xP extends vl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class yP extends jS{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class SP extends zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}function $v(t,e,n,i){const r=EP(i);switch(n){case CS:return t*e;case RS:return t*e;case PS:return t*e*2;case LS:return t*e/r.components*r.byteLength;case Sm:return t*e/r.components*r.byteLength;case DS:return t*e*2/r.components*r.byteLength;case Em:return t*e*2/r.components*r.byteLength;case AS:return t*e*3/r.components*r.byteLength;case ri:return t*e*4/r.components*r.byteLength;case Mm:return t*e*4/r.components*r.byteLength;case Rc:case Pc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Lc:case Dc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Lh:case Nh:return Math.max(t,16)*Math.max(e,8)/4;case Ph:case Dh:return Math.max(t,8)*Math.max(e,8)/2;case Ih:case Uh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Fh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Oh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case kh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Bh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case zh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Vh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Wh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case jh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Xh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case $h:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Yh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case qh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Kh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Nc:case Qh:case Zh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case NS:case Jh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case ep:case tp:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function EP(t){switch(t){case Ki:case wS:return{byteLength:1,components:1};case tl:case TS:case hl:return{byteLength:2,components:1};case xm:case ym:return{byteLength:2,components:4};case Co:case _m:case Bi:return{byteLength:4,components:1};case bS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vm);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function KS(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function MP(t){const e=new WeakMap;function n(a,l){const c=a.array,d=a.usage,f=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,d),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const d=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,d);else{f.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<f.length;p++){const g=f[u],v=f[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,f[u]=v)}f.length=u+1;for(let p=0,g=f.length;p<g;p++){const v=f[p];t.bufferSubData(c,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:o,update:s}}var wP=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,TP=`#ifdef USE_ALPHAHASH
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
#endif`,bP=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,CP=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,AP=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,RP=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,PP=`#ifdef USE_AOMAP
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
#endif`,LP=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,DP=`#ifdef USE_BATCHING
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
#endif`,NP=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,IP=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,UP=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,FP=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,OP=`#ifdef USE_IRIDESCENCE
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
#endif`,kP=`#ifdef USE_BUMPMAP
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
#endif`,BP=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,HP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,VP=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,GP=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,WP=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jP=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,XP=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$P=`#define PI 3.141592653589793
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
} // validated`,YP=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qP=`vec3 transformedNormal = objectNormal;
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
#endif`,KP=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,QP=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ZP=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,JP=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,e2="gl_FragColor = linearToOutputTexel( gl_FragColor );",t2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,n2=`#ifdef USE_ENVMAP
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
#endif`,i2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,r2=`#ifdef USE_ENVMAP
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
#endif`,o2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,s2=`#ifdef USE_ENVMAP
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
#endif`,a2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,l2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,c2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,u2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,d2=`#ifdef USE_GRADIENTMAP
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
}`,f2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,h2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,p2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,m2=`uniform bool receiveShadow;
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
#endif`,g2=`#ifdef USE_ENVMAP
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
#endif`,v2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,x2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,y2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,S2=`PhysicalMaterial material;
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
#endif`,E2=`struct PhysicalMaterial {
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
}`,M2=`
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
#endif`,w2=`#if defined( RE_IndirectDiffuse )
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
#endif`,T2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,b2=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,C2=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,A2=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R2=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,P2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,L2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,D2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,N2=`#if defined( USE_POINTS_UV )
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
#endif`,I2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,U2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,F2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,O2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,k2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,B2=`#ifdef USE_MORPHTARGETS
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
#endif`,z2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,V2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,G2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,W2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,X2=`#ifdef USE_NORMALMAP
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
#endif`,$2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Y2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,q2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,K2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Q2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Z2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,J2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eL=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tL=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nL=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iL=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rL=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,oL=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sL=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,aL=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lL=`float getShadowMask() {
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
}`,cL=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uL=`#ifdef USE_SKINNING
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
#endif`,dL=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fL=`#ifdef USE_SKINNING
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
#endif`,hL=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pL=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mL=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gL=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vL=`#ifdef USE_TRANSMISSION
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
#endif`,_L=`#ifdef USE_TRANSMISSION
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
#endif`,xL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,SL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,EL=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ML=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wL=`uniform sampler2D t2D;
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
}`,TL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bL=`#ifdef ENVMAP_TYPE_CUBE
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
}`,CL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AL=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RL=`#include <common>
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
}`,PL=`#if DEPTH_PACKING == 3200
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
}`,LL=`#define DISTANCE
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
}`,DL=`#define DISTANCE
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
}`,NL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,IL=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UL=`uniform float scale;
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
}`,FL=`uniform vec3 diffuse;
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
}`,OL=`#include <common>
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
}`,kL=`uniform vec3 diffuse;
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
}`,BL=`#define LAMBERT
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
}`,zL=`#define LAMBERT
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
}`,HL=`#define MATCAP
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
}`,VL=`#define MATCAP
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
}`,GL=`#define NORMAL
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
}`,WL=`#define NORMAL
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
}`,jL=`#define PHONG
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
}`,XL=`#define PHONG
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
}`,$L=`#define STANDARD
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
}`,YL=`#define STANDARD
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
}`,qL=`#define TOON
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
}`,KL=`#define TOON
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
}`,QL=`uniform float size;
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
}`,ZL=`uniform vec3 diffuse;
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
}`,JL=`#include <common>
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
}`,eD=`uniform vec3 color;
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
}`,tD=`uniform float rotation;
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
}`,nD=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:wP,alphahash_pars_fragment:TP,alphamap_fragment:bP,alphamap_pars_fragment:CP,alphatest_fragment:AP,alphatest_pars_fragment:RP,aomap_fragment:PP,aomap_pars_fragment:LP,batching_pars_vertex:DP,batching_vertex:NP,begin_vertex:IP,beginnormal_vertex:UP,bsdfs:FP,iridescence_fragment:OP,bumpmap_pars_fragment:kP,clipping_planes_fragment:BP,clipping_planes_pars_fragment:zP,clipping_planes_pars_vertex:HP,clipping_planes_vertex:VP,color_fragment:GP,color_pars_fragment:WP,color_pars_vertex:jP,color_vertex:XP,common:$P,cube_uv_reflection_fragment:YP,defaultnormal_vertex:qP,displacementmap_pars_vertex:KP,displacementmap_vertex:QP,emissivemap_fragment:ZP,emissivemap_pars_fragment:JP,colorspace_fragment:e2,colorspace_pars_fragment:t2,envmap_fragment:n2,envmap_common_pars_fragment:i2,envmap_pars_fragment:r2,envmap_pars_vertex:o2,envmap_physical_pars_fragment:g2,envmap_vertex:s2,fog_vertex:a2,fog_pars_vertex:l2,fog_fragment:c2,fog_pars_fragment:u2,gradientmap_pars_fragment:d2,lightmap_pars_fragment:f2,lights_lambert_fragment:h2,lights_lambert_pars_fragment:p2,lights_pars_begin:m2,lights_toon_fragment:v2,lights_toon_pars_fragment:_2,lights_phong_fragment:x2,lights_phong_pars_fragment:y2,lights_physical_fragment:S2,lights_physical_pars_fragment:E2,lights_fragment_begin:M2,lights_fragment_maps:w2,lights_fragment_end:T2,logdepthbuf_fragment:b2,logdepthbuf_pars_fragment:C2,logdepthbuf_pars_vertex:A2,logdepthbuf_vertex:R2,map_fragment:P2,map_pars_fragment:L2,map_particle_fragment:D2,map_particle_pars_fragment:N2,metalnessmap_fragment:I2,metalnessmap_pars_fragment:U2,morphinstance_vertex:F2,morphcolor_vertex:O2,morphnormal_vertex:k2,morphtarget_pars_vertex:B2,morphtarget_vertex:z2,normal_fragment_begin:H2,normal_fragment_maps:V2,normal_pars_fragment:G2,normal_pars_vertex:W2,normal_vertex:j2,normalmap_pars_fragment:X2,clearcoat_normal_fragment_begin:$2,clearcoat_normal_fragment_maps:Y2,clearcoat_pars_fragment:q2,iridescence_pars_fragment:K2,opaque_fragment:Q2,packing:Z2,premultiplied_alpha_fragment:J2,project_vertex:eL,dithering_fragment:tL,dithering_pars_fragment:nL,roughnessmap_fragment:iL,roughnessmap_pars_fragment:rL,shadowmap_pars_fragment:oL,shadowmap_pars_vertex:sL,shadowmap_vertex:aL,shadowmask_pars_fragment:lL,skinbase_vertex:cL,skinning_pars_vertex:uL,skinning_vertex:dL,skinnormal_vertex:fL,specularmap_fragment:hL,specularmap_pars_fragment:pL,tonemapping_fragment:mL,tonemapping_pars_fragment:gL,transmission_fragment:vL,transmission_pars_fragment:_L,uv_pars_fragment:xL,uv_pars_vertex:yL,uv_vertex:SL,worldpos_vertex:EL,background_vert:ML,background_frag:wL,backgroundCube_vert:TL,backgroundCube_frag:bL,cube_vert:CL,cube_frag:AL,depth_vert:RL,depth_frag:PL,distanceRGBA_vert:LL,distanceRGBA_frag:DL,equirect_vert:NL,equirect_frag:IL,linedashed_vert:UL,linedashed_frag:FL,meshbasic_vert:OL,meshbasic_frag:kL,meshlambert_vert:BL,meshlambert_frag:zL,meshmatcap_vert:HL,meshmatcap_frag:VL,meshnormal_vert:GL,meshnormal_frag:WL,meshphong_vert:jL,meshphong_frag:XL,meshphysical_vert:$L,meshphysical_frag:YL,meshtoon_vert:qL,meshtoon_frag:KL,points_vert:QL,points_frag:ZL,shadow_vert:JL,shadow_frag:eD,sprite_vert:tD,sprite_frag:nD},he={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},vi={basic:{uniforms:tn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:tn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Je(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:tn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:tn([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:tn([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Je(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:tn([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:tn([he.points,he.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:tn([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:tn([he.common,he.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:tn([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:tn([he.sprite,he.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:tn([he.common,he.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:tn([he.lights,he.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};vi.physical={uniforms:tn([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const dc={r:0,b:0,g:0},Jr=new Qi,iD=new Ct;function rD(t,e,n,i,r,o,s){const a=new Je(0);let l=o===!0?0:1,c,d,f=null,u=0,p=null;function g(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?n:e).get(y)),y}function v(x){let y=!1;const T=g(x);T===null?h(a,l):T&&T.isColor&&(h(T,1),y=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(x,y){const T=g(y);T&&(T.isCubeTexture||T.mapping===Gu)?(d===void 0&&(d=new Hi(new _l(1,1,1),new Hr({name:"BackgroundCubeMaterial",uniforms:Gs(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Jr.copy(y.backgroundRotation),Jr.x*=-1,Jr.y*=-1,Jr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Jr.y*=-1,Jr.z*=-1),d.material.uniforms.envMap.value=T,d.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(iD.makeRotationFromEuler(Jr)),d.material.toneMapped=nt.getTransfer(T.colorSpace)!==ut,(f!==T||u!==T.version||p!==t.toneMapping)&&(d.material.needsUpdate=!0,f=T,u=T.version,p=t.toneMapping),d.layers.enableAll(),x.unshift(d,d.geometry,d.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Hi(new ju(2,2),new Hr({name:"BackgroundMaterial",uniforms:Gs(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:zr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=nt.getTransfer(T.colorSpace)!==ut,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(f!==T||u!==T.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=T,u=T.version,p=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function h(x,y){x.getRGB(dc,WS(t)),i.buffers.color.setClear(dc.r,dc.g,dc.b,y,s)}function _(){d!==void 0&&(d.geometry.dispose(),d.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),l=y,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,h(a,l)},render:v,addToRenderList:m,dispose:_}}function oD(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=u(null);let o=r,s=!1;function a(S,D,k,z,B){let $=!1;const H=f(z,k,D);o!==H&&(o=H,c(o.object)),$=p(S,z,k,B),$&&g(S,z,k,B),B!==null&&e.update(B,t.ELEMENT_ARRAY_BUFFER),($||s)&&(s=!1,y(S,D,k,z),B!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function d(S){return t.deleteVertexArray(S)}function f(S,D,k){const z=k.wireframe===!0;let B=i[S.id];B===void 0&&(B={},i[S.id]=B);let $=B[D.id];$===void 0&&($={},B[D.id]=$);let H=$[z];return H===void 0&&(H=u(l()),$[z]=H),H}function u(S){const D=[],k=[],z=[];for(let B=0;B<n;B++)D[B]=0,k[B]=0,z[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:k,attributeDivisors:z,object:S,attributes:{},index:null}}function p(S,D,k,z){const B=o.attributes,$=D.attributes;let H=0;const K=k.getAttributes();for(const P in K)if(K[P].location>=0){const Q=B[P];let Z=$[P];if(Z===void 0&&(P==="instanceMatrix"&&S.instanceMatrix&&(Z=S.instanceMatrix),P==="instanceColor"&&S.instanceColor&&(Z=S.instanceColor)),Q===void 0||Q.attribute!==Z||Z&&Q.data!==Z.data)return!0;H++}return o.attributesNum!==H||o.index!==z}function g(S,D,k,z){const B={},$=D.attributes;let H=0;const K=k.getAttributes();for(const P in K)if(K[P].location>=0){let Q=$[P];Q===void 0&&(P==="instanceMatrix"&&S.instanceMatrix&&(Q=S.instanceMatrix),P==="instanceColor"&&S.instanceColor&&(Q=S.instanceColor));const Z={};Z.attribute=Q,Q&&Q.data&&(Z.data=Q.data),B[P]=Z,H++}o.attributes=B,o.attributesNum=H,o.index=z}function v(){const S=o.newAttributes;for(let D=0,k=S.length;D<k;D++)S[D]=0}function m(S){h(S,0)}function h(S,D){const k=o.newAttributes,z=o.enabledAttributes,B=o.attributeDivisors;k[S]=1,z[S]===0&&(t.enableVertexAttribArray(S),z[S]=1),B[S]!==D&&(t.vertexAttribDivisor(S,D),B[S]=D)}function _(){const S=o.newAttributes,D=o.enabledAttributes;for(let k=0,z=D.length;k<z;k++)D[k]!==S[k]&&(t.disableVertexAttribArray(k),D[k]=0)}function x(S,D,k,z,B,$,H){H===!0?t.vertexAttribIPointer(S,D,k,B,$):t.vertexAttribPointer(S,D,k,z,B,$)}function y(S,D,k,z){v();const B=z.attributes,$=k.getAttributes(),H=D.defaultAttributeValues;for(const K in $){const P=$[K];if(P.location>=0){let G=B[K];if(G===void 0&&(K==="instanceMatrix"&&S.instanceMatrix&&(G=S.instanceMatrix),K==="instanceColor"&&S.instanceColor&&(G=S.instanceColor)),G!==void 0){const Q=G.normalized,Z=G.itemSize,ce=e.get(G);if(ce===void 0)continue;const we=ce.buffer,q=ce.type,oe=ce.bytesPerElement,le=q===t.INT||q===t.UNSIGNED_INT||G.gpuType===_m;if(G.isInterleavedBufferAttribute){const de=G.data,Ae=de.stride,Pe=G.offset;if(de.isInstancedInterleavedBuffer){for(let Ue=0;Ue<P.locationSize;Ue++)h(P.location+Ue,de.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ue=0;Ue<P.locationSize;Ue++)m(P.location+Ue);t.bindBuffer(t.ARRAY_BUFFER,we);for(let Ue=0;Ue<P.locationSize;Ue++)x(P.location+Ue,Z/P.locationSize,q,Q,Ae*oe,(Pe+Z/P.locationSize*Ue)*oe,le)}else{if(G.isInstancedBufferAttribute){for(let de=0;de<P.locationSize;de++)h(P.location+de,G.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let de=0;de<P.locationSize;de++)m(P.location+de);t.bindBuffer(t.ARRAY_BUFFER,we);for(let de=0;de<P.locationSize;de++)x(P.location+de,Z/P.locationSize,q,Q,Z*oe,Z/P.locationSize*de*oe,le)}}else if(H!==void 0){const Q=H[K];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(P.location,Q);break;case 3:t.vertexAttrib3fv(P.location,Q);break;case 4:t.vertexAttrib4fv(P.location,Q);break;default:t.vertexAttrib1fv(P.location,Q)}}}}_()}function T(){A();for(const S in i){const D=i[S];for(const k in D){const z=D[k];for(const B in z)d(z[B].object),delete z[B];delete D[k]}delete i[S]}}function C(S){if(i[S.id]===void 0)return;const D=i[S.id];for(const k in D){const z=D[k];for(const B in z)d(z[B].object),delete z[B];delete D[k]}delete i[S.id]}function b(S){for(const D in i){const k=i[D];if(k[S.id]===void 0)continue;const z=k[S.id];for(const B in z)d(z[B].object),delete z[B];delete k[S.id]}}function A(){M(),s=!0,o!==r&&(o=r,c(o.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:M,dispose:T,releaseStatesOfGeometry:C,releaseStatesOfProgram:b,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function sD(t,e,n){let i;function r(c){i=c}function o(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function s(c,d,f){f!==0&&(t.drawArraysInstanced(i,c,d,f),n.update(d,i,f))}function a(c,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,f);let p=0;for(let g=0;g<f;g++)p+=d[g];n.update(p,i,1)}function l(c,d,f,u){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)s(c[g],d[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,d,0,u,0,f);let g=0;for(let v=0;v<f;v++)g+=d[v]*u[v];n.update(g,i,1)}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function aD(t,e,n,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(b){return!(b!==ri&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const A=b===hl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Ki&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Bi&&!A)}function l(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=n.logarithmicDepthBuffer===!0,u=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:_,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:T,maxSamples:C}}function lD(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new io,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const p=f.length!==0||u||i!==0||r;return r=u,i=f.length,p},this.beginShadows=function(){o=!0,d(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,u){n=d(f,u,0)},this.setState=function(f,u,p){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,h=t.get(f);if(!r||g===null||g.length===0||o&&!m)o?d(null):c();else{const _=o?0:i,x=_*4;let y=h.clippingState||null;l.value=y,y=d(g,u,x,p);for(let T=0;T!==x;++T)y[T]=n[T];h.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,u,p,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const h=p+v*4,_=u.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<h)&&(m=new Float32Array(h));for(let x=0,y=p;x!==v;++x,y+=4)s.copy(f[x]).applyMatrix4(_,a),s.normal.toArray(m,y),m[y+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function cD(t){let e=new WeakMap;function n(s,a){return a===bh?s.mapping=ks:a===Ch&&(s.mapping=Bs),s}function i(s){if(s&&s.isTexture){const a=s.mapping;if(a===bh||a===Ch)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new hP(l.height);return c.fromEquirectangularTexture(t,s),e.set(s,c),s.addEventListener("dispose",r),n(c.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}const as=4,Yv=[.125,.215,.35,.446,.526,.582],so=20,Jd=new yP,qv=new Je;let ef=null,tf=0,nf=0,rf=!1;const ro=(1+Math.sqrt(5))/2,$o=1/ro,Kv=[new X(-ro,$o,0),new X(ro,$o,0),new X(-$o,0,ro),new X($o,0,ro),new X(0,ro,-$o),new X(0,ro,$o),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)];class Qv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){ef=this._renderer.getRenderTarget(),tf=this._renderer.getActiveCubeFace(),nf=this._renderer.getActiveMipmapLevel(),rf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=e0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ef,tf,nf),this._renderer.xr.enabled=rf,e.scissorTest=!1,fc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ks||e.mapping===Bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ef=this._renderer.getRenderTarget(),tf=this._renderer.getActiveCubeFace(),nf=this._renderer.getActiveMipmapLevel(),rf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:xi,minFilter:xi,generateMipmaps:!1,type:hl,format:ri,colorSpace:Vs,depthBuffer:!1},r=Zv(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zv(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uD(o)),this._blurMaterial=dD(o,e,n)}return r}_compileMaterial(e){const n=new Hi(this._lodPlanes[0],e);this._renderer.compile(n,Jd)}_sceneToCubeUV(e,n,i,r){const a=new zn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,u=d.toneMapping;d.getClearColor(qv),d.toneMapping=Nr,d.autoClear=!1;const p=new HS({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),g=new Hi(new _l,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(qv),v=!0);for(let h=0;h<6;h++){const _=h%3;_===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):_===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const x=this._cubeSize;fc(r,_*x,h>2?x:0,x,x),d.setRenderTarget(r),v&&d.render(g,a),d.render(e,a)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=u,d.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ks||e.mapping===Bs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=e0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jv());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new Hi(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;fc(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,Jd)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Kv[(r-o-1)%Kv.length];this._blur(e,o-1,o,s,a)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new Hi(this._lodPlanes[r],c),u=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*so-1),v=o/g,m=isFinite(o)?1+Math.floor(d*v):so;m>so&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${so}`);const h=[];let _=0;for(let b=0;b<so;++b){const A=b/v,M=Math.exp(-A*A/2);h.push(M),b===0?_+=M:b<m&&(_+=2*M)}for(let b=0;b<h.length;b++)h[b]=h[b]/_;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=s==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:x}=this;u.dTheta.value=g,u.mipInt.value=x-i;const y=this._sizeLods[r],T=3*y*(r>x-as?r-x+as:0),C=4*(this._cubeSize-y);fc(n,T,C,3*y,2*y),l.setRenderTarget(n),l.render(f,Jd)}}function uD(t){const e=[],n=[],i=[];let r=t;const o=t-as+1+Yv.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let l=1/a;s>t-as?l=Yv[s-t+as-1]:s===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,f=1+c,u=[d,d,f,d,f,f,d,d,f,f,d,f],p=6,g=6,v=3,m=2,h=1,_=new Float32Array(v*g*p),x=new Float32Array(m*g*p),y=new Float32Array(h*g*p);for(let C=0;C<p;C++){const b=C%3*2/3-1,A=C>2?0:-1,M=[b,A,0,b+2/3,A,0,b+2/3,A+1,0,b,A,0,b+2/3,A+1,0,b,A+1,0];_.set(M,v*g*C),x.set(u,m*g*C);const S=[C,C,C,C,C,C];y.set(S,h*g*C)}const T=new Ji;T.setAttribute("position",new Gn(_,v)),T.setAttribute("uv",new Gn(x,m)),T.setAttribute("faceIndex",new Gn(y,h)),e.push(T),r>as&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Zv(t,e,n){const i=new Ao(t,e,n);return i.texture.mapping=Gu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fc(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function dD(t,e,n){const i=new Float32Array(so),r=new X(0,1,0);return new Hr({name:"SphericalGaussianBlur",defines:{n:so,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:wm(),fragmentShader:`

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
		`,blending:Dr,depthTest:!1,depthWrite:!1})}function Jv(){return new Hr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wm(),fragmentShader:`

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
		`,blending:Dr,depthTest:!1,depthWrite:!1})}function e0(){return new Hr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dr,depthTest:!1,depthWrite:!1})}function wm(){return`

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
	`}function fD(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===bh||l===Ch,d=l===ks||l===Bs;if(c||d){let f=e.get(a);const u=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return n===null&&(n=new Qv(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||d&&p&&r(p)?(n===null&&(n=new Qv(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",o),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function hD(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Yo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function pD(t,e,n,i){const r={},o=new WeakMap;function s(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",s),delete r[u.id];const p=o.get(u);p&&(e.remove(p),o.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function a(f,u){return r[u.id]===!0||(u.addEventListener("dispose",s),r[u.id]=!0,n.memory.geometries++),u}function l(f){const u=f.attributes;for(const p in u)e.update(u[p],t.ARRAY_BUFFER)}function c(f){const u=[],p=f.index,g=f.attributes.position;let v=0;if(p!==null){const _=p.array;v=p.version;for(let x=0,y=_.length;x<y;x+=3){const T=_[x+0],C=_[x+1],b=_[x+2];u.push(T,C,C,b,b,T)}}else if(g!==void 0){const _=g.array;v=g.version;for(let x=0,y=_.length/3-1;x<y;x+=3){const T=x+0,C=x+1,b=x+2;u.push(T,C,C,b,b,T)}}else return;const m=new(US(u)?GS:VS)(u,1);m.version=v;const h=o.get(f);h&&e.remove(h),o.set(f,m)}function d(f){const u=o.get(f);if(u){const p=f.index;p!==null&&u.version<p.version&&c(f)}else c(f);return o.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function mD(t,e,n){let i;function r(u){i=u}let o,s;function a(u){o=u.type,s=u.bytesPerElement}function l(u,p){t.drawElements(i,p,o,u*s),n.update(p,i,1)}function c(u,p,g){g!==0&&(t.drawElementsInstanced(i,p,o,u*s,g),n.update(p,i,g))}function d(u,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,o,u,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];n.update(m,i,1)}function f(u,p,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<u.length;h++)c(u[h]/s,p[h],v[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,o,u,0,v,0,g);let h=0;for(let _=0;_<g;_++)h+=p[_]*v[_];n.update(h,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function gD(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function vD(t,e,n){const i=new WeakMap,r=new bt;function o(s,a,l){const c=s.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0;let u=i.get(a);if(u===void 0||u.count!==f){let S=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let T=a.attributes.position.count*y,C=1;T>e.maxTextureSize&&(C=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const b=new Float32Array(T*C*4*f),A=new OS(b,T,C,f);A.type=Bi,A.needsUpdate=!0;const M=y*4;for(let D=0;D<f;D++){const k=h[D],z=_[D],B=x[D],$=T*C*4*D;for(let H=0;H<k.count;H++){const K=H*M;g===!0&&(r.fromBufferAttribute(k,H),b[$+K+0]=r.x,b[$+K+1]=r.y,b[$+K+2]=r.z,b[$+K+3]=0),v===!0&&(r.fromBufferAttribute(z,H),b[$+K+4]=r.x,b[$+K+5]=r.y,b[$+K+6]=r.z,b[$+K+7]=0),m===!0&&(r.fromBufferAttribute(B,H),b[$+K+8]=r.x,b[$+K+9]=r.y,b[$+K+10]=r.z,b[$+K+11]=B.itemSize===4?r.w:1)}}u={count:f,texture:A,size:new dt(T,C)},i.set(a,u),a.addEventListener("dispose",S)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:o}}function _D(t,e,n,i){let r=new WeakMap;function o(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;r.get(u)!==c&&(u.update(),r.set(u,c))}return f}function s(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:o,dispose:s}}const QS=new vn,t0=new qS(1,1),ZS=new OS,JS=new QR,eE=new XS,n0=[],i0=[],r0=new Float32Array(16),o0=new Float32Array(9),s0=new Float32Array(4);function Zs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=n0[r];if(o===void 0&&(o=new Float32Array(r),n0[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function Ut(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ft(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Xu(t,e){let n=i0[e];n===void 0&&(n=new Int32Array(e),i0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function xD(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function yD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2fv(this.addr,e),Ft(n,e)}}function SD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ut(n,e))return;t.uniform3fv(this.addr,e),Ft(n,e)}}function ED(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4fv(this.addr,e),Ft(n,e)}}function MD(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ft(n,e)}else{if(Ut(n,i))return;s0.set(i),t.uniformMatrix2fv(this.addr,!1,s0),Ft(n,i)}}function wD(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ft(n,e)}else{if(Ut(n,i))return;o0.set(i),t.uniformMatrix3fv(this.addr,!1,o0),Ft(n,i)}}function TD(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ft(n,e)}else{if(Ut(n,i))return;r0.set(i),t.uniformMatrix4fv(this.addr,!1,r0),Ft(n,i)}}function bD(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function CD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2iv(this.addr,e),Ft(n,e)}}function AD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3iv(this.addr,e),Ft(n,e)}}function RD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4iv(this.addr,e),Ft(n,e)}}function PD(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function LD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2uiv(this.addr,e),Ft(n,e)}}function DD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3uiv(this.addr,e),Ft(n,e)}}function ND(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4uiv(this.addr,e),Ft(n,e)}}function ID(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let o;this.type===t.SAMPLER_2D_SHADOW?(t0.compareFunction=IS,o=t0):o=QS,n.setTexture2D(e||o,r)}function UD(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||JS,r)}function FD(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||eE,r)}function OD(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||ZS,r)}function kD(t){switch(t){case 5126:return xD;case 35664:return yD;case 35665:return SD;case 35666:return ED;case 35674:return MD;case 35675:return wD;case 35676:return TD;case 5124:case 35670:return bD;case 35667:case 35671:return CD;case 35668:case 35672:return AD;case 35669:case 35673:return RD;case 5125:return PD;case 36294:return LD;case 36295:return DD;case 36296:return ND;case 35678:case 36198:case 36298:case 36306:case 35682:return ID;case 35679:case 36299:case 36307:return UD;case 35680:case 36300:case 36308:case 36293:return FD;case 36289:case 36303:case 36311:case 36292:return OD}}function BD(t,e){t.uniform1fv(this.addr,e)}function zD(t,e){const n=Zs(e,this.size,2);t.uniform2fv(this.addr,n)}function HD(t,e){const n=Zs(e,this.size,3);t.uniform3fv(this.addr,n)}function VD(t,e){const n=Zs(e,this.size,4);t.uniform4fv(this.addr,n)}function GD(t,e){const n=Zs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function WD(t,e){const n=Zs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function jD(t,e){const n=Zs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function XD(t,e){t.uniform1iv(this.addr,e)}function $D(t,e){t.uniform2iv(this.addr,e)}function YD(t,e){t.uniform3iv(this.addr,e)}function qD(t,e){t.uniform4iv(this.addr,e)}function KD(t,e){t.uniform1uiv(this.addr,e)}function QD(t,e){t.uniform2uiv(this.addr,e)}function ZD(t,e){t.uniform3uiv(this.addr,e)}function JD(t,e){t.uniform4uiv(this.addr,e)}function eN(t,e,n){const i=this.cache,r=e.length,o=Xu(n,r);Ut(i,o)||(t.uniform1iv(this.addr,o),Ft(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||QS,o[s])}function tN(t,e,n){const i=this.cache,r=e.length,o=Xu(n,r);Ut(i,o)||(t.uniform1iv(this.addr,o),Ft(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||JS,o[s])}function nN(t,e,n){const i=this.cache,r=e.length,o=Xu(n,r);Ut(i,o)||(t.uniform1iv(this.addr,o),Ft(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||eE,o[s])}function iN(t,e,n){const i=this.cache,r=e.length,o=Xu(n,r);Ut(i,o)||(t.uniform1iv(this.addr,o),Ft(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||ZS,o[s])}function rN(t){switch(t){case 5126:return BD;case 35664:return zD;case 35665:return HD;case 35666:return VD;case 35674:return GD;case 35675:return WD;case 35676:return jD;case 5124:case 35670:return XD;case 35667:case 35671:return $D;case 35668:case 35672:return YD;case 35669:case 35673:return qD;case 5125:return KD;case 36294:return QD;case 36295:return ZD;case 36296:return JD;case 35678:case 36198:case 36298:case 36306:case 35682:return eN;case 35679:case 36299:case 36307:return tN;case 35680:case 36300:case 36308:case 36293:return nN;case 36289:case 36303:case 36311:case 36292:return iN}}class oN{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=kD(n.type)}}class sN{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=rN(n.type)}}class aN{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const of=/(\w+)(\])?(\[|\.)?/g;function a0(t,e){t.seq.push(e),t.map[e.id]=e}function lN(t,e,n){const i=t.name,r=i.length;for(of.lastIndex=0;;){const o=of.exec(i),s=of.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){a0(n,c===void 0?new oN(a,t,e):new sN(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new aN(a),a0(n,f)),n=f}}}class Ic{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);lN(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function l0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const cN=37297;let uN=0;function dN(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}const c0=new We;function fN(t){nt._getMatrix(c0,nt.workingColorSpace,t);const e=`mat3( ${c0.elements.map(n=>n.toFixed(4))} )`;switch(nt.getTransfer(t)){case fu:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function u0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+dN(t.getShaderSource(e),s)}else return r}function hN(t,e){const n=fN(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function pN(t,e){let n;switch(e){case ER:n="Linear";break;case MR:n="Reinhard";break;case wR:n="Cineon";break;case TR:n="ACESFilmic";break;case CR:n="AgX";break;case AR:n="Neutral";break;case bR:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const hc=new X;function mN(){nt.getLuminanceCoefficients(hc);const t=hc.x.toFixed(4),e=hc.y.toFixed(4),n=hc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gN(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xa).join(`
`)}function vN(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function _N(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function xa(t){return t!==""}function d0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function f0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xN=/^[ \t]*#include +<([\w\d./]+)>/gm;function rp(t){return t.replace(xN,SN)}const yN=new Map;function SN(t,e){let n=$e[e];if(n===void 0){const i=yN.get(e);if(i!==void 0)n=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return rp(n)}const EN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function h0(t){return t.replace(EN,MN)}function MN(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function p0(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function wN(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===SS?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===tR?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ni&&(e="SHADOWMAP_TYPE_VSM"),e}function TN(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ks:case Bs:e="ENVMAP_TYPE_CUBE";break;case Gu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bN(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Bs:e="ENVMAP_MODE_REFRACTION";break}return e}function CN(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case ES:e="ENVMAP_BLENDING_MULTIPLY";break;case yR:e="ENVMAP_BLENDING_MIX";break;case SR:e="ENVMAP_BLENDING_ADD";break}return e}function AN(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function RN(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=wN(n),c=TN(n),d=bN(n),f=CN(n),u=AN(n),p=gN(n),g=vN(o),v=r.createProgram();let m,h,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(xa).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(xa).join(`
`),h.length>0&&(h+=`
`)):(m=[p0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xa).join(`
`),h=[p0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Nr?"#define TONE_MAPPING":"",n.toneMapping!==Nr?$e.tonemapping_pars_fragment:"",n.toneMapping!==Nr?pN("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,hN("linearToOutputTexel",n.outputColorSpace),mN(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(xa).join(`
`)),s=rp(s),s=d0(s,n),s=f0(s,n),a=rp(a),a=d0(a,n),a=f0(a,n),s=h0(s),a=h0(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===Cv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Cv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const x=_+m+s,y=_+h+a,T=l0(r,r.VERTEX_SHADER,x),C=l0(r,r.FRAGMENT_SHADER,y);r.attachShader(v,T),r.attachShader(v,C),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function b(D){if(t.debug.checkShaderErrors){const k=r.getProgramInfoLog(v).trim(),z=r.getShaderInfoLog(T).trim(),B=r.getShaderInfoLog(C).trim();let $=!0,H=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,T,C);else{const K=u0(r,T,"vertex"),P=u0(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+k+`
`+K+`
`+P)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(z===""||B==="")&&(H=!1);H&&(D.diagnostics={runnable:$,programLog:k,vertexShader:{log:z,prefix:m},fragmentShader:{log:B,prefix:h}})}r.deleteShader(T),r.deleteShader(C),A=new Ic(r,v),M=_N(r,v)}let A;this.getUniforms=function(){return A===void 0&&b(this),A};let M;this.getAttributes=function(){return M===void 0&&b(this),M};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(v,cN)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=uN++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=C,this}let PN=0;class LN{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new DN(e),n.set(e,i)),i}}class DN{constructor(e){this.id=PN++,this.code=e,this.usedTimes=0}}function NN(t,e,n,i,r,o,s){const a=new BS,l=new LN,c=new Set,d=[],f=r.logarithmicDepthBuffer,u=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,S,D,k,z){const B=k.fog,$=z.geometry,H=M.isMeshStandardMaterial?k.environment:null,K=(M.isMeshStandardMaterial?n:e).get(M.envMap||H),P=K&&K.mapping===Gu?K.image.height:null,G=g[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const Q=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Z=Q!==void 0?Q.length:0;let ce=0;$.morphAttributes.position!==void 0&&(ce=1),$.morphAttributes.normal!==void 0&&(ce=2),$.morphAttributes.color!==void 0&&(ce=3);let we,q,oe,le;if(G){const at=vi[G];we=at.vertexShader,q=at.fragmentShader}else we=M.vertexShader,q=M.fragmentShader,l.update(M),oe=l.getVertexShaderID(M),le=l.getFragmentShaderID(M);const de=t.getRenderTarget(),Ae=t.state.buffers.depth.getReversed(),Pe=z.isInstancedMesh===!0,Ue=z.isBatchedMesh===!0,ct=!!M.map,je=!!M.matcap,st=!!K,U=!!M.aoMap,zt=!!M.lightMap,ke=!!M.bumpMap,Ye=!!M.normalMap,Re=!!M.displacementMap,Be=!!M.emissiveMap,Ce=!!M.metalnessMap,R=!!M.roughnessMap,E=M.anisotropy>0,V=M.clearcoat>0,ne=M.dispersion>0,ie=M.iridescence>0,ee=M.sheen>0,Te=M.transmission>0,pe=E&&!!M.anisotropyMap,_e=V&&!!M.clearcoatMap,Ke=V&&!!M.clearcoatNormalMap,ue=V&&!!M.clearcoatRoughnessMap,Se=ie&&!!M.iridescenceMap,Le=ie&&!!M.iridescenceThicknessMap,Ie=ee&&!!M.sheenColorMap,ye=ee&&!!M.sheenRoughnessMap,ze=!!M.specularMap,He=!!M.specularColorMap,xe=!!M.specularIntensityMap,I=Te&&!!M.transmissionMap,re=Te&&!!M.thicknessMap,Y=!!M.gradientMap,J=!!M.alphaMap,me=M.alphaTest>0,ge=!!M.alphaHash,Ve=!!M.extensions;let St=Nr;M.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(St=t.toneMapping);const jt={shaderID:G,shaderType:M.type,shaderName:M.name,vertexShader:we,fragmentShader:q,defines:M.defines,customVertexShaderID:oe,customFragmentShaderID:le,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Ue,batchingColor:Ue&&z._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&z.instanceColor!==null,instancingMorph:Pe&&z.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:de===null?t.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Vs,alphaToCoverage:!!M.alphaToCoverage,map:ct,matcap:je,envMap:st,envMapMode:st&&K.mapping,envMapCubeUVHeight:P,aoMap:U,lightMap:zt,bumpMap:ke,normalMap:Ye,displacementMap:u&&Re,emissiveMap:Be,normalMapObjectSpace:Ye&&M.normalMapType===NR,normalMapTangentSpace:Ye&&M.normalMapType===DR,metalnessMap:Ce,roughnessMap:R,anisotropy:E,anisotropyMap:pe,clearcoat:V,clearcoatMap:_e,clearcoatNormalMap:Ke,clearcoatRoughnessMap:ue,dispersion:ne,iridescence:ie,iridescenceMap:Se,iridescenceThicknessMap:Le,sheen:ee,sheenColorMap:Ie,sheenRoughnessMap:ye,specularMap:ze,specularColorMap:He,specularIntensityMap:xe,transmission:Te,transmissionMap:I,thicknessMap:re,gradientMap:Y,opaque:M.transparent===!1&&M.blending===gs&&M.alphaToCoverage===!1,alphaMap:J,alphaTest:me,alphaHash:ge,combine:M.combine,mapUv:ct&&v(M.map.channel),aoMapUv:U&&v(M.aoMap.channel),lightMapUv:zt&&v(M.lightMap.channel),bumpMapUv:ke&&v(M.bumpMap.channel),normalMapUv:Ye&&v(M.normalMap.channel),displacementMapUv:Re&&v(M.displacementMap.channel),emissiveMapUv:Be&&v(M.emissiveMap.channel),metalnessMapUv:Ce&&v(M.metalnessMap.channel),roughnessMapUv:R&&v(M.roughnessMap.channel),anisotropyMapUv:pe&&v(M.anisotropyMap.channel),clearcoatMapUv:_e&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:Ke&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:ye&&v(M.sheenRoughnessMap.channel),specularMapUv:ze&&v(M.specularMap.channel),specularColorMapUv:He&&v(M.specularColorMap.channel),specularIntensityMapUv:xe&&v(M.specularIntensityMap.channel),transmissionMapUv:I&&v(M.transmissionMap.channel),thicknessMapUv:re&&v(M.thicknessMap.channel),alphaMapUv:J&&v(M.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Ye||E),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!$.attributes.uv&&(ct||J),fog:!!B,useFog:M.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ae,skinning:z.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:ce,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:St,decodeVideoTexture:ct&&M.map.isVideoTexture===!0&&nt.getTransfer(M.map.colorSpace)===ut,decodeVideoTextureEmissive:Be&&M.emissiveMap.isVideoTexture===!0&&nt.getTransfer(M.emissiveMap.colorSpace)===ut,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Fi,flipSided:M.side===gn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ve&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&M.extensions.multiDraw===!0||Ue)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return jt.vertexUv1s=c.has(1),jt.vertexUv2s=c.has(2),jt.vertexUv3s=c.has(3),c.clear(),jt}function h(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)S.push(D),S.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(_(S,M),x(S,M),S.push(t.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function _(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function x(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function y(M){const S=g[M.type];let D;if(S){const k=vi[S];D=cP.clone(k.uniforms)}else D=M.uniforms;return D}function T(M,S){let D;for(let k=0,z=d.length;k<z;k++){const B=d[k];if(B.cacheKey===S){D=B,++D.usedTimes;break}}return D===void 0&&(D=new RN(t,S,M,o),d.push(D)),D}function C(M){if(--M.usedTimes===0){const S=d.indexOf(M);d[S]=d[d.length-1],d.pop(),M.destroy()}}function b(M){l.remove(M)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:y,acquireProgram:T,releaseProgram:C,releaseShaderCache:b,programs:d,dispose:A}}function IN(){let t=new WeakMap;function e(s){return t.has(s)}function n(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function i(s){t.delete(s)}function r(s,a,l){t.get(s)[a]=l}function o(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:o}}function UN(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function m0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function g0(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(f,u,p,g,v,m){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:u,material:p,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},t[e]=h):(h.id=f.id,h.object=f,h.geometry=u,h.material=p,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=v,h.group=m),e++,h}function a(f,u,p,g,v,m){const h=s(f,u,p,g,v,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(f,u,p,g,v,m){const h=s(f,u,p,g,v,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(f,u){n.length>1&&n.sort(f||UN),i.length>1&&i.sort(u||m0),r.length>1&&r.sort(u||m0)}function d(){for(let f=e,u=t.length;f<u;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:d,sort:c}}function FN(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new g0,t.set(i,[s])):r>=o.length?(s=new g0,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function ON(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new X,color:new Je};break;case"SpotLight":n={position:new X,direction:new X,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new X,color:new Je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new X,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":n={color:new Je,position:new X,halfWidth:new X,halfHeight:new X};break}return t[e.id]=n,n}}}function kN(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let BN=0;function zN(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function HN(t){const e=new ON,n=kN(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new X);const r=new X,o=new Ct,s=new Ct;function a(c){let d=0,f=0,u=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,g=0,v=0,m=0,h=0,_=0,x=0,y=0,T=0,C=0,b=0;c.sort(zN);for(let M=0,S=c.length;M<S;M++){const D=c[M],k=D.color,z=D.intensity,B=D.distance,$=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=k.r*z,f+=k.g*z,u+=k.b*z;else if(D.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(D.sh.coefficients[H],z);b++}else if(D.isDirectionalLight){const H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const K=D.shadow,P=n.get(D);P.shadowIntensity=K.intensity,P.shadowBias=K.bias,P.shadowNormalBias=K.normalBias,P.shadowRadius=K.radius,P.shadowMapSize=K.mapSize,i.directionalShadow[p]=P,i.directionalShadowMap[p]=$,i.directionalShadowMatrix[p]=D.shadow.matrix,_++}i.directional[p]=H,p++}else if(D.isSpotLight){const H=e.get(D);H.position.setFromMatrixPosition(D.matrixWorld),H.color.copy(k).multiplyScalar(z),H.distance=B,H.coneCos=Math.cos(D.angle),H.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),H.decay=D.decay,i.spot[v]=H;const K=D.shadow;if(D.map&&(i.spotLightMap[T]=D.map,T++,K.updateMatrices(D),D.castShadow&&C++),i.spotLightMatrix[v]=K.matrix,D.castShadow){const P=n.get(D);P.shadowIntensity=K.intensity,P.shadowBias=K.bias,P.shadowNormalBias=K.normalBias,P.shadowRadius=K.radius,P.shadowMapSize=K.mapSize,i.spotShadow[v]=P,i.spotShadowMap[v]=$,y++}v++}else if(D.isRectAreaLight){const H=e.get(D);H.color.copy(k).multiplyScalar(z),H.halfWidth.set(D.width*.5,0,0),H.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=H,m++}else if(D.isPointLight){const H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),H.distance=D.distance,H.decay=D.decay,D.castShadow){const K=D.shadow,P=n.get(D);P.shadowIntensity=K.intensity,P.shadowBias=K.bias,P.shadowNormalBias=K.normalBias,P.shadowRadius=K.radius,P.shadowMapSize=K.mapSize,P.shadowCameraNear=K.camera.near,P.shadowCameraFar=K.camera.far,i.pointShadow[g]=P,i.pointShadowMap[g]=$,i.pointShadowMatrix[g]=D.shadow.matrix,x++}i.point[g]=H,g++}else if(D.isHemisphereLight){const H=e.get(D);H.skyColor.copy(D.color).multiplyScalar(z),H.groundColor.copy(D.groundColor).multiplyScalar(z),i.hemi[h]=H,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=u;const A=i.hash;(A.directionalLength!==p||A.pointLength!==g||A.spotLength!==v||A.rectAreaLength!==m||A.hemiLength!==h||A.numDirectionalShadows!==_||A.numPointShadows!==x||A.numSpotShadows!==y||A.numSpotMaps!==T||A.numLightProbes!==b)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=y+T-C,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=b,A.directionalLength=p,A.pointLength=g,A.spotLength=v,A.rectAreaLength=m,A.hemiLength=h,A.numDirectionalShadows=_,A.numPointShadows=x,A.numSpotShadows=y,A.numSpotMaps=T,A.numLightProbes=b,i.version=BN++)}function l(c,d){let f=0,u=0,p=0,g=0,v=0;const m=d.matrixWorldInverse;for(let h=0,_=c.length;h<_;h++){const x=c[h];if(x.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(x.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),s.identity(),o.copy(x.matrixWorld),o.premultiply(m),s.extractRotation(o),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(s),y.halfHeight.applyMatrix4(s),g++}else if(x.isPointLight){const y=i.point[u];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),u++}else if(x.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function v0(t){const e=new HN(t),n=[],i=[];function r(d){c.camera=d,n.length=0,i.length=0}function o(d){n.push(d)}function s(d){i.push(d)}function a(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:s}}function VN(t){let e=new WeakMap;function n(r,o=0){const s=e.get(r);let a;return s===void 0?(a=new v0(t),e.set(r,[a])):o>=s.length?(a=new v0(t),s.push(a)):a=s[o],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const GN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WN=`uniform sampler2D shadow_pass;
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
}`;function jN(t,e,n){let i=new $S;const r=new dt,o=new dt,s=new bt,a=new _P({depthPacking:LR}),l=new xP,c={},d=n.maxTextureSize,f={[zr]:gn,[gn]:zr,[Fi]:Fi},u=new Hr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:GN,fragmentShader:WN}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ji;g.setAttribute("position",new Gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Hi(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=SS;let h=this.type;this.render=function(C,b,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const M=t.getRenderTarget(),S=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),k=t.state;k.setBlending(Dr),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const z=h!==Ni&&this.type===Ni,B=h===Ni&&this.type!==Ni;for(let $=0,H=C.length;$<H;$++){const K=C[$],P=K.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;r.copy(P.mapSize);const G=P.getFrameExtents();if(r.multiply(G),o.copy(P.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(o.x=Math.floor(d/G.x),r.x=o.x*G.x,P.mapSize.x=o.x),r.y>d&&(o.y=Math.floor(d/G.y),r.y=o.y*G.y,P.mapSize.y=o.y)),P.map===null||z===!0||B===!0){const Z=this.type!==Ni?{minFilter:ai,magFilter:ai}:{};P.map!==null&&P.map.dispose(),P.map=new Ao(r.x,r.y,Z),P.map.texture.name=K.name+".shadowMap",P.camera.updateProjectionMatrix()}t.setRenderTarget(P.map),t.clear();const Q=P.getViewportCount();for(let Z=0;Z<Q;Z++){const ce=P.getViewport(Z);s.set(o.x*ce.x,o.y*ce.y,o.x*ce.z,o.y*ce.w),k.viewport(s),P.updateMatrices(K,Z),i=P.getFrustum(),y(b,A,P.camera,K,this.type)}P.isPointLightShadow!==!0&&this.type===Ni&&_(P,A),P.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(M,S,D)};function _(C,b){const A=e.update(v);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ao(r.x,r.y)),u.uniforms.shadow_pass.value=C.map.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(b,null,A,u,v,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(b,null,A,p,v,null)}function x(C,b,A,M){let S=null;const D=A.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(D!==void 0)S=D;else if(S=A.isPointLight===!0?l:a,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const k=S.uuid,z=b.uuid;let B=c[k];B===void 0&&(B={},c[k]=B);let $=B[z];$===void 0&&($=S.clone(),B[z]=$,b.addEventListener("dispose",T)),S=$}if(S.visible=b.visible,S.wireframe=b.wireframe,M===Ni?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:f[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,A.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const k=t.properties.get(S);k.light=A}return S}function y(C,b,A,M,S){if(C.visible===!1)return;if(C.layers.test(b.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===Ni)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,C.matrixWorld);const z=e.update(C),B=C.material;if(Array.isArray(B)){const $=z.groups;for(let H=0,K=$.length;H<K;H++){const P=$[H],G=B[P.materialIndex];if(G&&G.visible){const Q=x(C,G,M,S);C.onBeforeShadow(t,C,b,A,z,Q,P),t.renderBufferDirect(A,null,z,Q,C,P),C.onAfterShadow(t,C,b,A,z,Q,P)}}}else if(B.visible){const $=x(C,B,M,S);C.onBeforeShadow(t,C,b,A,z,$,null),t.renderBufferDirect(A,null,z,$,C,null),C.onAfterShadow(t,C,b,A,z,$,null)}}const k=C.children;for(let z=0,B=k.length;z<B;z++)y(k[z],b,A,M,S)}function T(C){C.target.removeEventListener("dispose",T);for(const A in c){const M=c[A],S=C.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const XN={[xh]:yh,[Sh]:wh,[Eh]:Th,[Os]:Mh,[yh]:xh,[wh]:Sh,[Th]:Eh,[Mh]:Os};function $N(t,e){function n(){let I=!1;const re=new bt;let Y=null;const J=new bt(0,0,0,0);return{setMask:function(me){Y!==me&&!I&&(t.colorMask(me,me,me,me),Y=me)},setLocked:function(me){I=me},setClear:function(me,ge,Ve,St,jt){jt===!0&&(me*=St,ge*=St,Ve*=St),re.set(me,ge,Ve,St),J.equals(re)===!1&&(t.clearColor(me,ge,Ve,St),J.copy(re))},reset:function(){I=!1,Y=null,J.set(-1,0,0,0)}}}function i(){let I=!1,re=!1,Y=null,J=null,me=null;return{setReversed:function(ge){if(re!==ge){const Ve=e.get("EXT_clip_control");re?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT);const St=me;me=null,this.setClear(St)}re=ge},getReversed:function(){return re},setTest:function(ge){ge?de(t.DEPTH_TEST):Ae(t.DEPTH_TEST)},setMask:function(ge){Y!==ge&&!I&&(t.depthMask(ge),Y=ge)},setFunc:function(ge){if(re&&(ge=XN[ge]),J!==ge){switch(ge){case xh:t.depthFunc(t.NEVER);break;case yh:t.depthFunc(t.ALWAYS);break;case Sh:t.depthFunc(t.LESS);break;case Os:t.depthFunc(t.LEQUAL);break;case Eh:t.depthFunc(t.EQUAL);break;case Mh:t.depthFunc(t.GEQUAL);break;case wh:t.depthFunc(t.GREATER);break;case Th:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}J=ge}},setLocked:function(ge){I=ge},setClear:function(ge){me!==ge&&(re&&(ge=1-ge),t.clearDepth(ge),me=ge)},reset:function(){I=!1,Y=null,J=null,me=null,re=!1}}}function r(){let I=!1,re=null,Y=null,J=null,me=null,ge=null,Ve=null,St=null,jt=null;return{setTest:function(at){I||(at?de(t.STENCIL_TEST):Ae(t.STENCIL_TEST))},setMask:function(at){re!==at&&!I&&(t.stencilMask(at),re=at)},setFunc:function(at,Xn,Ti){(Y!==at||J!==Xn||me!==Ti)&&(t.stencilFunc(at,Xn,Ti),Y=at,J=Xn,me=Ti)},setOp:function(at,Xn,Ti){(ge!==at||Ve!==Xn||St!==Ti)&&(t.stencilOp(at,Xn,Ti),ge=at,Ve=Xn,St=Ti)},setLocked:function(at){I=at},setClear:function(at){jt!==at&&(t.clearStencil(at),jt=at)},reset:function(){I=!1,re=null,Y=null,J=null,me=null,ge=null,Ve=null,St=null,jt=null}}}const o=new n,s=new i,a=new r,l=new WeakMap,c=new WeakMap;let d={},f={},u=new WeakMap,p=[],g=null,v=!1,m=null,h=null,_=null,x=null,y=null,T=null,C=null,b=new Je(0,0,0),A=0,M=!1,S=null,D=null,k=null,z=null,B=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,K=0;const P=t.getParameter(t.VERSION);P.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(P)[1]),H=K>=1):P.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),H=K>=2);let G=null,Q={};const Z=t.getParameter(t.SCISSOR_BOX),ce=t.getParameter(t.VIEWPORT),we=new bt().fromArray(Z),q=new bt().fromArray(ce);function oe(I,re,Y,J){const me=new Uint8Array(4),ge=t.createTexture();t.bindTexture(I,ge),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ve=0;Ve<Y;Ve++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(re,0,t.RGBA,1,1,J,0,t.RGBA,t.UNSIGNED_BYTE,me):t.texImage2D(re+Ve,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,me);return ge}const le={};le[t.TEXTURE_2D]=oe(t.TEXTURE_2D,t.TEXTURE_2D,1),le[t.TEXTURE_CUBE_MAP]=oe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[t.TEXTURE_2D_ARRAY]=oe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),le[t.TEXTURE_3D]=oe(t.TEXTURE_3D,t.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),de(t.DEPTH_TEST),s.setFunc(Os),ke(!1),Ye(Ev),de(t.CULL_FACE),U(Dr);function de(I){d[I]!==!0&&(t.enable(I),d[I]=!0)}function Ae(I){d[I]!==!1&&(t.disable(I),d[I]=!1)}function Pe(I,re){return f[I]!==re?(t.bindFramebuffer(I,re),f[I]=re,I===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=re),I===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=re),!0):!1}function Ue(I,re){let Y=p,J=!1;if(I){Y=u.get(re),Y===void 0&&(Y=[],u.set(re,Y));const me=I.textures;if(Y.length!==me.length||Y[0]!==t.COLOR_ATTACHMENT0){for(let ge=0,Ve=me.length;ge<Ve;ge++)Y[ge]=t.COLOR_ATTACHMENT0+ge;Y.length=me.length,J=!0}}else Y[0]!==t.BACK&&(Y[0]=t.BACK,J=!0);J&&t.drawBuffers(Y)}function ct(I){return g!==I?(t.useProgram(I),g=I,!0):!1}const je={[oo]:t.FUNC_ADD,[iR]:t.FUNC_SUBTRACT,[rR]:t.FUNC_REVERSE_SUBTRACT};je[oR]=t.MIN,je[sR]=t.MAX;const st={[aR]:t.ZERO,[lR]:t.ONE,[cR]:t.SRC_COLOR,[vh]:t.SRC_ALPHA,[mR]:t.SRC_ALPHA_SATURATE,[hR]:t.DST_COLOR,[dR]:t.DST_ALPHA,[uR]:t.ONE_MINUS_SRC_COLOR,[_h]:t.ONE_MINUS_SRC_ALPHA,[pR]:t.ONE_MINUS_DST_COLOR,[fR]:t.ONE_MINUS_DST_ALPHA,[gR]:t.CONSTANT_COLOR,[vR]:t.ONE_MINUS_CONSTANT_COLOR,[_R]:t.CONSTANT_ALPHA,[xR]:t.ONE_MINUS_CONSTANT_ALPHA};function U(I,re,Y,J,me,ge,Ve,St,jt,at){if(I===Dr){v===!0&&(Ae(t.BLEND),v=!1);return}if(v===!1&&(de(t.BLEND),v=!0),I!==nR){if(I!==m||at!==M){if((h!==oo||y!==oo)&&(t.blendEquation(t.FUNC_ADD),h=oo,y=oo),at)switch(I){case gs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case gh:t.blendFunc(t.ONE,t.ONE);break;case Mv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case wv:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case gs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case gh:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Mv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case wv:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}_=null,x=null,T=null,C=null,b.set(0,0,0),A=0,m=I,M=at}return}me=me||re,ge=ge||Y,Ve=Ve||J,(re!==h||me!==y)&&(t.blendEquationSeparate(je[re],je[me]),h=re,y=me),(Y!==_||J!==x||ge!==T||Ve!==C)&&(t.blendFuncSeparate(st[Y],st[J],st[ge],st[Ve]),_=Y,x=J,T=ge,C=Ve),(St.equals(b)===!1||jt!==A)&&(t.blendColor(St.r,St.g,St.b,jt),b.copy(St),A=jt),m=I,M=!1}function zt(I,re){I.side===Fi?Ae(t.CULL_FACE):de(t.CULL_FACE);let Y=I.side===gn;re&&(Y=!Y),ke(Y),I.blending===gs&&I.transparent===!1?U(Dr):U(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),o.setMask(I.colorWrite);const J=I.stencilWrite;a.setTest(J),J&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Be(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?de(t.SAMPLE_ALPHA_TO_COVERAGE):Ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function ke(I){S!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),S=I)}function Ye(I){I!==JA?(de(t.CULL_FACE),I!==D&&(I===Ev?t.cullFace(t.BACK):I===eR?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ae(t.CULL_FACE),D=I}function Re(I){I!==k&&(H&&t.lineWidth(I),k=I)}function Be(I,re,Y){I?(de(t.POLYGON_OFFSET_FILL),(z!==re||B!==Y)&&(t.polygonOffset(re,Y),z=re,B=Y)):Ae(t.POLYGON_OFFSET_FILL)}function Ce(I){I?de(t.SCISSOR_TEST):Ae(t.SCISSOR_TEST)}function R(I){I===void 0&&(I=t.TEXTURE0+$-1),G!==I&&(t.activeTexture(I),G=I)}function E(I,re,Y){Y===void 0&&(G===null?Y=t.TEXTURE0+$-1:Y=G);let J=Q[Y];J===void 0&&(J={type:void 0,texture:void 0},Q[Y]=J),(J.type!==I||J.texture!==re)&&(G!==Y&&(t.activeTexture(Y),G=Y),t.bindTexture(I,re||le[I]),J.type=I,J.texture=re)}function V(){const I=Q[G];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ne(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Te(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ke(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Le(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ie(I){we.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),we.copy(I))}function ye(I){q.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),q.copy(I))}function ze(I,re){let Y=c.get(re);Y===void 0&&(Y=new WeakMap,c.set(re,Y));let J=Y.get(I);J===void 0&&(J=t.getUniformBlockIndex(re,I.name),Y.set(I,J))}function He(I,re){const J=c.get(re).get(I);l.get(re)!==J&&(t.uniformBlockBinding(re,J,I.__bindingPointIndex),l.set(re,J))}function xe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),s.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},G=null,Q={},f={},u=new WeakMap,p=[],g=null,v=!1,m=null,h=null,_=null,x=null,y=null,T=null,C=null,b=new Je(0,0,0),A=0,M=!1,S=null,D=null,k=null,z=null,B=null,we.set(0,0,t.canvas.width,t.canvas.height),q.set(0,0,t.canvas.width,t.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:de,disable:Ae,bindFramebuffer:Pe,drawBuffers:Ue,useProgram:ct,setBlending:U,setMaterial:zt,setFlipSided:ke,setCullFace:Ye,setLineWidth:Re,setPolygonOffset:Be,setScissorTest:Ce,activeTexture:R,bindTexture:E,unbindTexture:V,compressedTexImage2D:ne,compressedTexImage3D:ie,texImage2D:Se,texImage3D:Le,updateUBOMapping:ze,uniformBlockBinding:He,texStorage2D:Ke,texStorage3D:ue,texSubImage2D:ee,texSubImage3D:Te,compressedTexSubImage2D:pe,compressedTexSubImage3D:_e,scissor:Ie,viewport:ye,reset:xe}}function YN(t,e,n,i,r,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new dt,d=new WeakMap;let f;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,E){return p?new OffscreenCanvas(R,E):pu("canvas")}function v(R,E,V){let ne=1;const ie=Ce(R);if((ie.width>V||ie.height>V)&&(ne=V/Math.max(ie.width,ie.height)),ne<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ee=Math.floor(ne*ie.width),Te=Math.floor(ne*ie.height);f===void 0&&(f=g(ee,Te));const pe=E?g(ee,Te):f;return pe.width=ee,pe.height=Te,pe.getContext("2d").drawImage(R,0,0,ee,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+ee+"x"+Te+")."),pe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),R;return R}function m(R){return R.generateMipmaps}function h(R){t.generateMipmap(R)}function _(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(R,E,V,ne,ie=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ee=E;if(E===t.RED&&(V===t.FLOAT&&(ee=t.R32F),V===t.HALF_FLOAT&&(ee=t.R16F),V===t.UNSIGNED_BYTE&&(ee=t.R8)),E===t.RED_INTEGER&&(V===t.UNSIGNED_BYTE&&(ee=t.R8UI),V===t.UNSIGNED_SHORT&&(ee=t.R16UI),V===t.UNSIGNED_INT&&(ee=t.R32UI),V===t.BYTE&&(ee=t.R8I),V===t.SHORT&&(ee=t.R16I),V===t.INT&&(ee=t.R32I)),E===t.RG&&(V===t.FLOAT&&(ee=t.RG32F),V===t.HALF_FLOAT&&(ee=t.RG16F),V===t.UNSIGNED_BYTE&&(ee=t.RG8)),E===t.RG_INTEGER&&(V===t.UNSIGNED_BYTE&&(ee=t.RG8UI),V===t.UNSIGNED_SHORT&&(ee=t.RG16UI),V===t.UNSIGNED_INT&&(ee=t.RG32UI),V===t.BYTE&&(ee=t.RG8I),V===t.SHORT&&(ee=t.RG16I),V===t.INT&&(ee=t.RG32I)),E===t.RGB_INTEGER&&(V===t.UNSIGNED_BYTE&&(ee=t.RGB8UI),V===t.UNSIGNED_SHORT&&(ee=t.RGB16UI),V===t.UNSIGNED_INT&&(ee=t.RGB32UI),V===t.BYTE&&(ee=t.RGB8I),V===t.SHORT&&(ee=t.RGB16I),V===t.INT&&(ee=t.RGB32I)),E===t.RGBA_INTEGER&&(V===t.UNSIGNED_BYTE&&(ee=t.RGBA8UI),V===t.UNSIGNED_SHORT&&(ee=t.RGBA16UI),V===t.UNSIGNED_INT&&(ee=t.RGBA32UI),V===t.BYTE&&(ee=t.RGBA8I),V===t.SHORT&&(ee=t.RGBA16I),V===t.INT&&(ee=t.RGBA32I)),E===t.RGB&&V===t.UNSIGNED_INT_5_9_9_9_REV&&(ee=t.RGB9_E5),E===t.RGBA){const Te=ie?fu:nt.getTransfer(ne);V===t.FLOAT&&(ee=t.RGBA32F),V===t.HALF_FLOAT&&(ee=t.RGBA16F),V===t.UNSIGNED_BYTE&&(ee=Te===ut?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function y(R,E){let V;return R?E===null||E===Co||E===zs?V=t.DEPTH24_STENCIL8:E===Bi?V=t.DEPTH32F_STENCIL8:E===tl&&(V=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Co||E===zs?V=t.DEPTH_COMPONENT24:E===Bi?V=t.DEPTH_COMPONENT32F:E===tl&&(V=t.DEPTH_COMPONENT16),V}function T(R,E){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==ai&&R.minFilter!==xi?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function C(R){const E=R.target;E.removeEventListener("dispose",C),A(E),E.isVideoTexture&&d.delete(E)}function b(R){const E=R.target;E.removeEventListener("dispose",b),S(E)}function A(R){const E=i.get(R);if(E.__webglInit===void 0)return;const V=R.source,ne=u.get(V);if(ne){const ie=ne[E.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&M(R),Object.keys(ne).length===0&&u.delete(V)}i.remove(R)}function M(R){const E=i.get(R);t.deleteTexture(E.__webglTexture);const V=R.source,ne=u.get(V);delete ne[E.__cacheKey],s.memory.textures--}function S(R){const E=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(E.__webglFramebuffer[ne]))for(let ie=0;ie<E.__webglFramebuffer[ne].length;ie++)t.deleteFramebuffer(E.__webglFramebuffer[ne][ie]);else t.deleteFramebuffer(E.__webglFramebuffer[ne]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[ne])}else{if(Array.isArray(E.__webglFramebuffer))for(let ne=0;ne<E.__webglFramebuffer.length;ne++)t.deleteFramebuffer(E.__webglFramebuffer[ne]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ne=0;ne<E.__webglColorRenderbuffer.length;ne++)E.__webglColorRenderbuffer[ne]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[ne]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const V=R.textures;for(let ne=0,ie=V.length;ne<ie;ne++){const ee=i.get(V[ne]);ee.__webglTexture&&(t.deleteTexture(ee.__webglTexture),s.memory.textures--),i.remove(V[ne])}i.remove(R)}let D=0;function k(){D=0}function z(){const R=D;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),D+=1,R}function B(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function $(R,E){const V=i.get(R);if(R.isVideoTexture&&Re(R),R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){const ne=R.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(V,R,E);return}}n.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+E)}function H(R,E){const V=i.get(R);if(R.version>0&&V.__version!==R.version){q(V,R,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+E)}function K(R,E){const V=i.get(R);if(R.version>0&&V.__version!==R.version){q(V,R,E);return}n.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+E)}function P(R,E){const V=i.get(R);if(R.version>0&&V.__version!==R.version){oe(V,R,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+E)}const G={[Ah]:t.REPEAT,[uo]:t.CLAMP_TO_EDGE,[Rh]:t.MIRRORED_REPEAT},Q={[ai]:t.NEAREST,[RR]:t.NEAREST_MIPMAP_NEAREST,[Wl]:t.NEAREST_MIPMAP_LINEAR,[xi]:t.LINEAR,[Pd]:t.LINEAR_MIPMAP_NEAREST,[fo]:t.LINEAR_MIPMAP_LINEAR},Z={[IR]:t.NEVER,[zR]:t.ALWAYS,[UR]:t.LESS,[IS]:t.LEQUAL,[FR]:t.EQUAL,[BR]:t.GEQUAL,[OR]:t.GREATER,[kR]:t.NOTEQUAL};function ce(R,E){if(E.type===Bi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===xi||E.magFilter===Pd||E.magFilter===Wl||E.magFilter===fo||E.minFilter===xi||E.minFilter===Pd||E.minFilter===Wl||E.minFilter===fo)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,G[E.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,G[E.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,G[E.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Q[E.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Q[E.minFilter]),E.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Z[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ai||E.minFilter!==Wl&&E.minFilter!==fo||E.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function we(R,E){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",C));const ne=E.source;let ie=u.get(ne);ie===void 0&&(ie={},u.set(ne,ie));const ee=B(E);if(ee!==R.__cacheKey){ie[ee]===void 0&&(ie[ee]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,V=!0),ie[ee].usedTimes++;const Te=ie[R.__cacheKey];Te!==void 0&&(ie[R.__cacheKey].usedTimes--,Te.usedTimes===0&&M(E)),R.__cacheKey=ee,R.__webglTexture=ie[ee].texture}return V}function q(R,E,V){let ne=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ne=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ne=t.TEXTURE_3D);const ie=we(R,E),ee=E.source;n.bindTexture(ne,R.__webglTexture,t.TEXTURE0+V);const Te=i.get(ee);if(ee.version!==Te.__version||ie===!0){n.activeTexture(t.TEXTURE0+V);const pe=nt.getPrimaries(nt.workingColorSpace),_e=E.colorSpace===pr?null:nt.getPrimaries(E.colorSpace),Ke=E.colorSpace===pr||pe===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let ue=v(E.image,!1,r.maxTextureSize);ue=Be(E,ue);const Se=o.convert(E.format,E.colorSpace),Le=o.convert(E.type);let Ie=x(E.internalFormat,Se,Le,E.colorSpace,E.isVideoTexture);ce(ne,E);let ye;const ze=E.mipmaps,He=E.isVideoTexture!==!0,xe=Te.__version===void 0||ie===!0,I=ee.dataReady,re=T(E,ue);if(E.isDepthTexture)Ie=y(E.format===Hs,E.type),xe&&(He?n.texStorage2D(t.TEXTURE_2D,1,Ie,ue.width,ue.height):n.texImage2D(t.TEXTURE_2D,0,Ie,ue.width,ue.height,0,Se,Le,null));else if(E.isDataTexture)if(ze.length>0){He&&xe&&n.texStorage2D(t.TEXTURE_2D,re,Ie,ze[0].width,ze[0].height);for(let Y=0,J=ze.length;Y<J;Y++)ye=ze[Y],He?I&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,ye.width,ye.height,Se,Le,ye.data):n.texImage2D(t.TEXTURE_2D,Y,Ie,ye.width,ye.height,0,Se,Le,ye.data);E.generateMipmaps=!1}else He?(xe&&n.texStorage2D(t.TEXTURE_2D,re,Ie,ue.width,ue.height),I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ue.width,ue.height,Se,Le,ue.data)):n.texImage2D(t.TEXTURE_2D,0,Ie,ue.width,ue.height,0,Se,Le,ue.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){He&&xe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,re,Ie,ze[0].width,ze[0].height,ue.depth);for(let Y=0,J=ze.length;Y<J;Y++)if(ye=ze[Y],E.format!==ri)if(Se!==null)if(He){if(I)if(E.layerUpdates.size>0){const me=$v(ye.width,ye.height,E.format,E.type);for(const ge of E.layerUpdates){const Ve=ye.data.subarray(ge*me/ye.data.BYTES_PER_ELEMENT,(ge+1)*me/ye.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,ge,ye.width,ye.height,1,Se,Ve)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,ye.width,ye.height,ue.depth,Se,ye.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Y,Ie,ye.width,ye.height,ue.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,ye.width,ye.height,ue.depth,Se,Le,ye.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Y,Ie,ye.width,ye.height,ue.depth,0,Se,Le,ye.data)}else{He&&xe&&n.texStorage2D(t.TEXTURE_2D,re,Ie,ze[0].width,ze[0].height);for(let Y=0,J=ze.length;Y<J;Y++)ye=ze[Y],E.format!==ri?Se!==null?He?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,Y,0,0,ye.width,ye.height,Se,ye.data):n.compressedTexImage2D(t.TEXTURE_2D,Y,Ie,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?I&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,ye.width,ye.height,Se,Le,ye.data):n.texImage2D(t.TEXTURE_2D,Y,Ie,ye.width,ye.height,0,Se,Le,ye.data)}else if(E.isDataArrayTexture)if(He){if(xe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,re,Ie,ue.width,ue.height,ue.depth),I)if(E.layerUpdates.size>0){const Y=$v(ue.width,ue.height,E.format,E.type);for(const J of E.layerUpdates){const me=ue.data.subarray(J*Y/ue.data.BYTES_PER_ELEMENT,(J+1)*Y/ue.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,J,ue.width,ue.height,1,Se,Le,me)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Se,Le,ue.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ie,ue.width,ue.height,ue.depth,0,Se,Le,ue.data);else if(E.isData3DTexture)He?(xe&&n.texStorage3D(t.TEXTURE_3D,re,Ie,ue.width,ue.height,ue.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Se,Le,ue.data)):n.texImage3D(t.TEXTURE_3D,0,Ie,ue.width,ue.height,ue.depth,0,Se,Le,ue.data);else if(E.isFramebufferTexture){if(xe)if(He)n.texStorage2D(t.TEXTURE_2D,re,Ie,ue.width,ue.height);else{let Y=ue.width,J=ue.height;for(let me=0;me<re;me++)n.texImage2D(t.TEXTURE_2D,me,Ie,Y,J,0,Se,Le,null),Y>>=1,J>>=1}}else if(ze.length>0){if(He&&xe){const Y=Ce(ze[0]);n.texStorage2D(t.TEXTURE_2D,re,Ie,Y.width,Y.height)}for(let Y=0,J=ze.length;Y<J;Y++)ye=ze[Y],He?I&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,Se,Le,ye):n.texImage2D(t.TEXTURE_2D,Y,Ie,Se,Le,ye);E.generateMipmaps=!1}else if(He){if(xe){const Y=Ce(ue);n.texStorage2D(t.TEXTURE_2D,re,Ie,Y.width,Y.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Se,Le,ue)}else n.texImage2D(t.TEXTURE_2D,0,Ie,Se,Le,ue);m(E)&&h(ne),Te.__version=ee.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function oe(R,E,V){if(E.image.length!==6)return;const ne=we(R,E),ie=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+V);const ee=i.get(ie);if(ie.version!==ee.__version||ne===!0){n.activeTexture(t.TEXTURE0+V);const Te=nt.getPrimaries(nt.workingColorSpace),pe=E.colorSpace===pr?null:nt.getPrimaries(E.colorSpace),_e=E.colorSpace===pr||Te===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ke=E.isCompressedTexture||E.image[0].isCompressedTexture,ue=E.image[0]&&E.image[0].isDataTexture,Se=[];for(let J=0;J<6;J++)!Ke&&!ue?Se[J]=v(E.image[J],!0,r.maxCubemapSize):Se[J]=ue?E.image[J].image:E.image[J],Se[J]=Be(E,Se[J]);const Le=Se[0],Ie=o.convert(E.format,E.colorSpace),ye=o.convert(E.type),ze=x(E.internalFormat,Ie,ye,E.colorSpace),He=E.isVideoTexture!==!0,xe=ee.__version===void 0||ne===!0,I=ie.dataReady;let re=T(E,Le);ce(t.TEXTURE_CUBE_MAP,E);let Y;if(Ke){He&&xe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,re,ze,Le.width,Le.height);for(let J=0;J<6;J++){Y=Se[J].mipmaps;for(let me=0;me<Y.length;me++){const ge=Y[me];E.format!==ri?Ie!==null?He?I&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,me,0,0,ge.width,ge.height,Ie,ge.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,me,ze,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,me,0,0,ge.width,ge.height,Ie,ye,ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,me,ze,ge.width,ge.height,0,Ie,ye,ge.data)}}}else{if(Y=E.mipmaps,He&&xe){Y.length>0&&re++;const J=Ce(Se[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,re,ze,J.width,J.height)}for(let J=0;J<6;J++)if(ue){He?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Se[J].width,Se[J].height,Ie,ye,Se[J].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ze,Se[J].width,Se[J].height,0,Ie,ye,Se[J].data);for(let me=0;me<Y.length;me++){const Ve=Y[me].image[J].image;He?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,me+1,0,0,Ve.width,Ve.height,Ie,ye,Ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,me+1,ze,Ve.width,Ve.height,0,Ie,ye,Ve.data)}}else{He?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ie,ye,Se[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ze,Ie,ye,Se[J]);for(let me=0;me<Y.length;me++){const ge=Y[me];He?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,me+1,0,0,Ie,ye,ge.image[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,me+1,ze,Ie,ye,ge.image[J])}}}m(E)&&h(t.TEXTURE_CUBE_MAP),ee.__version=ie.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function le(R,E,V,ne,ie,ee){const Te=o.convert(V.format,V.colorSpace),pe=o.convert(V.type),_e=x(V.internalFormat,Te,pe,V.colorSpace),Ke=i.get(E),ue=i.get(V);if(ue.__renderTarget=E,!Ke.__hasExternalTextures){const Se=Math.max(1,E.width>>ee),Le=Math.max(1,E.height>>ee);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,ee,_e,Se,Le,E.depth,0,Te,pe,null):n.texImage2D(ie,ee,_e,Se,Le,0,Te,pe,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Ye(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,ie,ue.__webglTexture,0,ke(E)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ne,ie,ue.__webglTexture,ee),n.bindFramebuffer(t.FRAMEBUFFER,null)}function de(R,E,V){if(t.bindRenderbuffer(t.RENDERBUFFER,R),E.depthBuffer){const ne=E.depthTexture,ie=ne&&ne.isDepthTexture?ne.type:null,ee=y(E.stencilBuffer,ie),Te=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=ke(E);Ye(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,pe,ee,E.width,E.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,pe,ee,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ee,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Te,t.RENDERBUFFER,R)}else{const ne=E.textures;for(let ie=0;ie<ne.length;ie++){const ee=ne[ie],Te=o.convert(ee.format,ee.colorSpace),pe=o.convert(ee.type),_e=x(ee.internalFormat,Te,pe,ee.colorSpace),Ke=ke(E);V&&Ye(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ke,_e,E.width,E.height):Ye(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ke,_e,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,_e,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ae(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=i.get(E.depthTexture);ne.__renderTarget=E,(!ne.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),$(E.depthTexture,0);const ie=ne.__webglTexture,ee=ke(E);if(E.depthTexture.format===vs)Ye(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0);else if(E.depthTexture.format===Hs)Ye(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Pe(R){const E=i.get(R),V=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const ne=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ne){const ie=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ne.removeEventListener("dispose",ie)};ne.addEventListener("dispose",ie),E.__depthDisposeCallback=ie}E.__boundDepthTexture=ne}if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Ae(E.__webglFramebuffer,R)}else if(V){E.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[ne]),E.__webglDepthbuffer[ne]===void 0)E.__webglDepthbuffer[ne]=t.createRenderbuffer(),de(E.__webglDepthbuffer[ne],R,!1);else{const ie=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ee=E.__webglDepthbuffer[ne];t.bindRenderbuffer(t.RENDERBUFFER,ee),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,ee)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),de(E.__webglDepthbuffer,R,!1);else{const ne=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ie),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,ie)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ue(R,E,V){const ne=i.get(R);E!==void 0&&le(ne.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),V!==void 0&&Pe(R)}function ct(R){const E=R.texture,V=i.get(R),ne=i.get(E);R.addEventListener("dispose",b);const ie=R.textures,ee=R.isWebGLCubeRenderTarget===!0,Te=ie.length>1;if(Te||(ne.__webglTexture===void 0&&(ne.__webglTexture=t.createTexture()),ne.__version=E.version,s.memory.textures++),ee){V.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer[pe]=[];for(let _e=0;_e<E.mipmaps.length;_e++)V.__webglFramebuffer[pe][_e]=t.createFramebuffer()}else V.__webglFramebuffer[pe]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer=[];for(let pe=0;pe<E.mipmaps.length;pe++)V.__webglFramebuffer[pe]=t.createFramebuffer()}else V.__webglFramebuffer=t.createFramebuffer();if(Te)for(let pe=0,_e=ie.length;pe<_e;pe++){const Ke=i.get(ie[pe]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=t.createTexture(),s.memory.textures++)}if(R.samples>0&&Ye(R)===!1){V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let pe=0;pe<ie.length;pe++){const _e=ie[pe];V.__webglColorRenderbuffer[pe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[pe]);const Ke=o.convert(_e.format,_e.colorSpace),ue=o.convert(_e.type),Se=x(_e.internalFormat,Ke,ue,_e.colorSpace,R.isXRRenderTarget===!0),Le=ke(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Le,Se,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,V.__webglColorRenderbuffer[pe])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),de(V.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture),ce(t.TEXTURE_CUBE_MAP,E);for(let pe=0;pe<6;pe++)if(E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)le(V.__webglFramebuffer[pe][_e],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,_e);else le(V.__webglFramebuffer[pe],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(E)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Te){for(let pe=0,_e=ie.length;pe<_e;pe++){const Ke=ie[pe],ue=i.get(Ke);n.bindTexture(t.TEXTURE_2D,ue.__webglTexture),ce(t.TEXTURE_2D,Ke),le(V.__webglFramebuffer,R,Ke,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,0),m(Ke)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let pe=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(pe,ne.__webglTexture),ce(pe,E),E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)le(V.__webglFramebuffer[_e],R,E,t.COLOR_ATTACHMENT0,pe,_e);else le(V.__webglFramebuffer,R,E,t.COLOR_ATTACHMENT0,pe,0);m(E)&&h(pe),n.unbindTexture()}R.depthBuffer&&Pe(R)}function je(R){const E=R.textures;for(let V=0,ne=E.length;V<ne;V++){const ie=E[V];if(m(ie)){const ee=_(R),Te=i.get(ie).__webglTexture;n.bindTexture(ee,Te),h(ee),n.unbindTexture()}}}const st=[],U=[];function zt(R){if(R.samples>0){if(Ye(R)===!1){const E=R.textures,V=R.width,ne=R.height;let ie=t.COLOR_BUFFER_BIT;const ee=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Te=i.get(R),pe=E.length>1;if(pe)for(let _e=0;_e<E.length;_e++)n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let _e=0;_e<E.length;_e++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),pe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Te.__webglColorRenderbuffer[_e]);const Ke=i.get(E[_e]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ke,0)}t.blitFramebuffer(0,0,V,ne,0,0,V,ne,ie,t.NEAREST),l===!0&&(st.length=0,U.length=0,st.push(t.COLOR_ATTACHMENT0+_e),R.depthBuffer&&R.resolveDepthBuffer===!1&&(st.push(ee),U.push(ee),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,U)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,st))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),pe)for(let _e=0;_e<E.length;_e++){n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,Te.__webglColorRenderbuffer[_e]);const Ke=i.get(E[_e]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,Ke,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const E=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function ke(R){return Math.min(r.maxSamples,R.samples)}function Ye(R){const E=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Re(R){const E=s.render.frame;d.get(R)!==E&&(d.set(R,E),R.update())}function Be(R,E){const V=R.colorSpace,ne=R.format,ie=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==Vs&&V!==pr&&(nt.getTransfer(V)===ut?(ne!==ri||ie!==Ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),E}function Ce(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=k,this.setTexture2D=$,this.setTexture2DArray=H,this.setTexture3D=K,this.setTextureCube=P,this.rebindTextures=Ue,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Ye}function qN(t,e){function n(i,r=pr){let o;const s=nt.getTransfer(r);if(i===Ki)return t.UNSIGNED_BYTE;if(i===xm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===ym)return t.UNSIGNED_SHORT_5_5_5_1;if(i===bS)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===wS)return t.BYTE;if(i===TS)return t.SHORT;if(i===tl)return t.UNSIGNED_SHORT;if(i===_m)return t.INT;if(i===Co)return t.UNSIGNED_INT;if(i===Bi)return t.FLOAT;if(i===hl)return t.HALF_FLOAT;if(i===CS)return t.ALPHA;if(i===AS)return t.RGB;if(i===ri)return t.RGBA;if(i===RS)return t.LUMINANCE;if(i===PS)return t.LUMINANCE_ALPHA;if(i===vs)return t.DEPTH_COMPONENT;if(i===Hs)return t.DEPTH_STENCIL;if(i===LS)return t.RED;if(i===Sm)return t.RED_INTEGER;if(i===DS)return t.RG;if(i===Em)return t.RG_INTEGER;if(i===Mm)return t.RGBA_INTEGER;if(i===Rc||i===Pc||i===Lc||i===Dc)if(s===ut)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Rc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Pc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Lc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Dc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Rc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Pc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Lc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Dc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ph||i===Lh||i===Dh||i===Nh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Ph)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Lh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Dh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Nh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ih||i===Uh||i===Fh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Ih||i===Uh)return s===ut?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Fh)return s===ut?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Oh||i===kh||i===Bh||i===zh||i===Hh||i===Vh||i===Gh||i===Wh||i===jh||i===Xh||i===$h||i===Yh||i===qh||i===Kh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Oh)return s===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===kh)return s===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Bh)return s===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===zh)return s===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Hh)return s===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Vh)return s===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Gh)return s===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Wh)return s===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===jh)return s===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Xh)return s===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===$h)return s===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Yh)return s===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===qh)return s===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Kh)return s===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Nc||i===Qh||i===Zh)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===Nc)return s===ut?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Qh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Zh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===NS||i===Jh||i===ep||i===tp)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===Nc)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Jh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ep)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===tp)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===zs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const KN={type:"move"};class sf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new uc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new uc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new uc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),h=this._getHandJoint(c,v);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=d.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(KN)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new uc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const QN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ZN=`
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

}`;class JN{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new vn,o=e.properties.get(r);o.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Hr({vertexShader:QN,fragmentShader:ZN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Hi(new ju(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class e3 extends Qs{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,c=null,d=null,f=null,u=null,p=null,g=null;const v=new JN,m=n.getContextAttributes();let h=null,_=null;const x=[],y=[],T=new dt;let C=null;const b=new zn;b.viewport=new bt;const A=new zn;A.viewport=new bt;const M=[b,A],S=new SP;let D=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let oe=x[q];return oe===void 0&&(oe=new sf,x[q]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(q){let oe=x[q];return oe===void 0&&(oe=new sf,x[q]=oe),oe.getGripSpace()},this.getHand=function(q){let oe=x[q];return oe===void 0&&(oe=new sf,x[q]=oe),oe.getHandSpace()};function z(q){const oe=y.indexOf(q.inputSource);if(oe===-1)return;const le=x[oe];le!==void 0&&(le.update(q.inputSource,q.frame,c||s),le.dispatchEvent({type:q.type,data:q.inputSource}))}function B(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",$);for(let q=0;q<x.length;q++){const oe=y[q];oe!==null&&(y[q]=null,x[q].disconnect(oe))}D=null,k=null,v.reset(),e.setRenderTarget(h),p=null,u=null,f=null,r=null,_=null,we.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",B),r.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(T),r.enabledFeatures!==void 0&&r.enabledFeatures.includes("layers")){let le=null,de=null,Ae=null;m.depth&&(Ae=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,le=m.stencil?Hs:vs,de=m.stencil?zs:Co);const Pe={colorFormat:n.RGBA8,depthFormat:Ae,scaleFactor:o};f=new XRWebGLBinding(r,n),u=f.createProjectionLayer(Pe),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),_=new Ao(u.textureWidth,u.textureHeight,{format:ri,type:Ki,depthTexture:new qS(u.textureWidth,u.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}else{const le={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(r,n,le),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Ao(p.framebufferWidth,p.framebufferHeight,{format:ri,type:Ki,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),we.setContext(r),we.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function $(q){for(let oe=0;oe<q.removed.length;oe++){const le=q.removed[oe],de=y.indexOf(le);de>=0&&(y[de]=null,x[de].disconnect(le))}for(let oe=0;oe<q.added.length;oe++){const le=q.added[oe];let de=y.indexOf(le);if(de===-1){for(let Pe=0;Pe<x.length;Pe++)if(Pe>=y.length){y.push(le),de=Pe;break}else if(y[Pe]===null){y[Pe]=le,de=Pe;break}if(de===-1)break}const Ae=x[de];Ae&&Ae.connect(le)}}const H=new X,K=new X;function P(q,oe,le){H.setFromMatrixPosition(oe.matrixWorld),K.setFromMatrixPosition(le.matrixWorld);const de=H.distanceTo(K),Ae=oe.projectionMatrix.elements,Pe=le.projectionMatrix.elements,Ue=Ae[14]/(Ae[10]-1),ct=Ae[14]/(Ae[10]+1),je=(Ae[9]+1)/Ae[5],st=(Ae[9]-1)/Ae[5],U=(Ae[8]-1)/Ae[0],zt=(Pe[8]+1)/Pe[0],ke=Ue*U,Ye=Ue*zt,Re=de/(-U+zt),Be=Re*-U;if(oe.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Be),q.translateZ(Re),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ae[10]===-1)q.projectionMatrix.copy(oe.projectionMatrix),q.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const Ce=Ue+Re,R=ct+Re,E=ke-Be,V=Ye+(de-Be),ne=je*ct/R*Ce,ie=st*ct/R*Ce;q.projectionMatrix.makePerspective(E,V,ne,ie,Ce,R),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function G(q,oe){oe===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(oe.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let oe=q.near,le=q.far;v.texture!==null&&(v.depthNear>0&&(oe=v.depthNear),v.depthFar>0&&(le=v.depthFar)),S.near=A.near=b.near=oe,S.far=A.far=b.far=le,(D!==S.near||k!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,k=S.far),b.layers.mask=q.layers.mask|2,A.layers.mask=q.layers.mask|4,S.layers.mask=b.layers.mask|A.layers.mask;const de=q.parent,Ae=S.cameras;G(S,de);for(let Pe=0;Pe<Ae.length;Pe++)G(Ae[Pe],de);Ae.length===2?P(S,b,A):S.projectionMatrix.copy(b.projectionMatrix),Q(q,S,de)};function Q(q,oe,le){le===null?q.matrix.copy(oe.matrixWorld):(q.matrix.copy(le.matrixWorld),q.matrix.invert(),q.matrix.multiply(oe.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(oe.projectionMatrix),q.projectionMatrixInverse.copy(oe.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=np*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let Z=null;function ce(q,oe){if(d=oe.getViewerPose(c||s),g=oe,d!==null){const le=d.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let de=!1;le.length!==S.cameras.length&&(S.cameras.length=0,de=!0);for(let Pe=0;Pe<le.length;Pe++){const Ue=le[Pe];let ct=null;if(p!==null)ct=p.getViewport(Ue);else{const st=f.getViewSubImage(u,Ue);ct=st.viewport,Pe===0&&(e.setRenderTargetTextures(_,st.colorTexture,u.ignoreDepthValues?void 0:st.depthStencilTexture),e.setRenderTarget(_))}let je=M[Pe];je===void 0&&(je=new zn,je.layers.enable(Pe),je.viewport=new bt,M[Pe]=je),je.matrix.fromArray(Ue.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(Ue.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(ct.x,ct.y,ct.width,ct.height),Pe===0&&(S.matrix.copy(je.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),de===!0&&S.cameras.push(je)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Pe=f.getDepthInformation(le[0]);Pe&&Pe.isValid&&Pe.texture&&v.init(e,Pe,r.renderState)}}for(let le=0;le<x.length;le++){const de=y[le],Ae=x[le];de!==null&&Ae!==void 0&&Ae.update(de,oe,c||s)}Z&&Z(q,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),g=null}const we=new KS;we.setAnimationLoop(ce),this.setAnimationLoop=function(q){Z=q},this.dispose=function(){}}}const eo=new Qi,t3=new Ct;function n3(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,WS(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,_,x,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?o(m,h):h.isMeshToonMaterial?(o(m,h),f(m,h)):h.isMeshPhongMaterial?(o(m,h),d(m,h)):h.isMeshStandardMaterial?(o(m,h),u(m,h),h.isMeshPhysicalMaterial&&p(m,h,y)):h.isMeshMatcapMaterial?(o(m,h),g(m,h)):h.isMeshDepthMaterial?o(m,h):h.isMeshDistanceMaterial?(o(m,h),v(m,h)):h.isMeshNormalMaterial?o(m,h):h.isLineBasicMaterial?(s(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,_,x):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function o(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===gn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===gn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const _=e.get(h),x=_.envMap,y=_.envMapRotation;x&&(m.envMap.value=x,eo.copy(y),eo.x*=-1,eo.y*=-1,eo.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(eo.y*=-1,eo.z*=-1),m.envMapRotation.value.setFromMatrix4(t3.makeRotationFromEuler(eo)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function s(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,_,x){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*_,m.scale.value=x*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function d(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function u(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,_){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===gn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function v(m,h){const _=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function i3(t,e,n,i){let r={},o={},s=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,x){const y=x.program;i.uniformBlockBinding(_,y)}function c(_,x){let y=r[_.id];y===void 0&&(g(_),y=d(_),r[_.id]=y,_.addEventListener("dispose",m));const T=x.program;i.updateUBOMapping(_,T);const C=e.render.frame;o[_.id]!==C&&(u(_),o[_.id]=C)}function d(_){const x=f();_.__bindingPointIndex=x;const y=t.createBuffer(),T=_.__size,C=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,T,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,y),y}function f(){for(let _=0;_<a;_++)if(s.indexOf(_)===-1)return s.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const x=r[_.id],y=_.uniforms,T=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let C=0,b=y.length;C<b;C++){const A=Array.isArray(y[C])?y[C]:[y[C]];for(let M=0,S=A.length;M<S;M++){const D=A[M];if(p(D,C,M,T)===!0){const k=D.__offset,z=Array.isArray(D.value)?D.value:[D.value];let B=0;for(let $=0;$<z.length;$++){const H=z[$],K=v(H);typeof H=="number"||typeof H=="boolean"?(D.__data[0]=H,t.bufferSubData(t.UNIFORM_BUFFER,k+B,D.__data)):H.isMatrix3?(D.__data[0]=H.elements[0],D.__data[1]=H.elements[1],D.__data[2]=H.elements[2],D.__data[3]=0,D.__data[4]=H.elements[3],D.__data[5]=H.elements[4],D.__data[6]=H.elements[5],D.__data[7]=0,D.__data[8]=H.elements[6],D.__data[9]=H.elements[7],D.__data[10]=H.elements[8],D.__data[11]=0):(H.toArray(D.__data,B),B+=K.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,k,D.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,x,y,T){const C=_.value,b=x+"_"+y;if(T[b]===void 0)return typeof C=="number"||typeof C=="boolean"?T[b]=C:T[b]=C.clone(),!0;{const A=T[b];if(typeof C=="number"||typeof C=="boolean"){if(A!==C)return T[b]=C,!0}else if(A.equals(C)===!1)return A.copy(C),!0}return!1}function g(_){const x=_.uniforms;let y=0;const T=16;for(let b=0,A=x.length;b<A;b++){const M=Array.isArray(x[b])?x[b]:[x[b]];for(let S=0,D=M.length;S<D;S++){const k=M[S],z=Array.isArray(k.value)?k.value:[k.value];for(let B=0,$=z.length;B<$;B++){const H=z[B],K=v(H),P=y%T,G=P%K.boundary,Q=P+G;y+=G,Q!==0&&T-Q<K.storage&&(y+=T-Q),k.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=y,y+=K.storage}}}const C=y%T;return C>0&&(y+=T-C),_.__size=y,_.__cache={},this}function v(_){const x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function m(_){const x=_.target;x.removeEventListener("dispose",m);const y=s.indexOf(x.__bindingPointIndex);s.splice(y,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete o[x.id]}function h(){for(const _ in r)t.deleteBuffer(r[_]);s=[],r={},o={}}return{bind:l,update:c,dispose:h}}class r3{constructor(e={}){const{canvas:n=VR(),context:i=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=s;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,h=null;const _=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=On,this.toneMapping=Nr,this.toneMappingExposure=1;const y=this;let T=!1,C=0,b=0,A=null,M=-1,S=null;const D=new bt,k=new bt;let z=null;const B=new Je(0);let $=0,H=n.width,K=n.height,P=1,G=null,Q=null;const Z=new bt(0,0,H,K),ce=new bt(0,0,H,K);let we=!1;const q=new $S;let oe=!1,le=!1;this.transmissionResolutionScale=1;const de=new Ct,Ae=new Ct,Pe=new X,Ue=new bt,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let je=!1;function st(){return A===null?P:1}let U=i;function zt(w,F){return n.getContext(w,F)}try{const w={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${vm}`),n.addEventListener("webglcontextlost",J,!1),n.addEventListener("webglcontextrestored",me,!1),n.addEventListener("webglcontextcreationerror",ge,!1),U===null){const F="webgl2";if(U=zt(F,w),U===null)throw zt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ke,Ye,Re,Be,Ce,R,E,V,ne,ie,ee,Te,pe,_e,Ke,ue,Se,Le,Ie,ye,ze,He,xe,I;function re(){ke=new hD(U),ke.init(),He=new qN(U,ke),Ye=new aD(U,ke,e,He),Re=new $N(U,ke),Ye.reverseDepthBuffer&&u&&Re.buffers.depth.setReversed(!0),Be=new gD(U),Ce=new IN,R=new YN(U,ke,Re,Ce,Ye,He,Be),E=new cD(y),V=new fD(y),ne=new MP(U),xe=new oD(U,ne),ie=new pD(U,ne,Be,xe),ee=new _D(U,ie,ne,Be),Ie=new vD(U,Ye,R),ue=new lD(Ce),Te=new NN(y,E,V,ke,Ye,xe,ue),pe=new n3(y,Ce),_e=new FN,Ke=new VN(ke),Le=new rD(y,E,V,Re,ee,p,l),Se=new jN(y,ee,Ye),I=new i3(U,Be,Ye,Re),ye=new sD(U,ke,Be),ze=new mD(U,ke,Be),Be.programs=Te.programs,y.capabilities=Ye,y.extensions=ke,y.properties=Ce,y.renderLists=_e,y.shadowMap=Se,y.state=Re,y.info=Be}re();const Y=new e3(y,U);this.xr=Y,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const w=ke.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ke.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return P},this.setPixelRatio=function(w){w!==void 0&&(P=w,this.setSize(H,K,!1))},this.getSize=function(w){return w.set(H,K)},this.setSize=function(w,F,W=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=w,K=F,n.width=Math.floor(w*P),n.height=Math.floor(F*P),W===!0&&(n.style.width=w+"px",n.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(H*P,K*P).floor()},this.setDrawingBufferSize=function(w,F,W){H=w,K=F,P=W,n.width=Math.floor(w*W),n.height=Math.floor(F*W),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(D)},this.getViewport=function(w){return w.copy(Z)},this.setViewport=function(w,F,W,j){w.isVector4?Z.set(w.x,w.y,w.z,w.w):Z.set(w,F,W,j),Re.viewport(D.copy(Z).multiplyScalar(P).round())},this.getScissor=function(w){return w.copy(ce)},this.setScissor=function(w,F,W,j){w.isVector4?ce.set(w.x,w.y,w.z,w.w):ce.set(w,F,W,j),Re.scissor(k.copy(ce).multiplyScalar(P).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(w){Re.setScissorTest(we=w)},this.setOpaqueSort=function(w){G=w},this.setTransparentSort=function(w){Q=w},this.getClearColor=function(w){return w.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor.apply(Le,arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha.apply(Le,arguments)},this.clear=function(w=!0,F=!0,W=!0){let j=0;if(w){let O=!1;if(A!==null){const ae=A.texture.format;O=ae===Mm||ae===Em||ae===Sm}if(O){const ae=A.texture.type,ve=ae===Ki||ae===Co||ae===tl||ae===zs||ae===xm||ae===ym,Me=Le.getClearColor(),be=Le.getClearAlpha(),Fe=Me.r,Oe=Me.g,De=Me.b;ve?(g[0]=Fe,g[1]=Oe,g[2]=De,g[3]=be,U.clearBufferuiv(U.COLOR,0,g)):(v[0]=Fe,v[1]=Oe,v[2]=De,v[3]=be,U.clearBufferiv(U.COLOR,0,v))}else j|=U.COLOR_BUFFER_BIT}F&&(j|=U.DEPTH_BUFFER_BIT),W&&(j|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",J,!1),n.removeEventListener("webglcontextrestored",me,!1),n.removeEventListener("webglcontextcreationerror",ge,!1),Le.dispose(),_e.dispose(),Ke.dispose(),Ce.dispose(),E.dispose(),V.dispose(),ee.dispose(),xe.dispose(),I.dispose(),Te.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Tm),Y.removeEventListener("sessionend",bm),$r.stop()};function J(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const w=Be.autoReset,F=Se.enabled,W=Se.autoUpdate,j=Se.needsUpdate,O=Se.type;re(),Be.autoReset=w,Se.enabled=F,Se.autoUpdate=W,Se.needsUpdate=j,Se.type=O}function ge(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ve(w){const F=w.target;F.removeEventListener("dispose",Ve),St(F)}function St(w){jt(w),Ce.remove(w)}function jt(w){const F=Ce.get(w).programs;F!==void 0&&(F.forEach(function(W){Te.releaseProgram(W)}),w.isShaderMaterial&&Te.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,W,j,O,ae){F===null&&(F=ct);const ve=O.isMesh&&O.matrixWorld.determinant()<0,Me=nE(w,F,W,j,O);Re.setMaterial(j,ve);let be=W.index,Fe=1;if(j.wireframe===!0){if(be=ie.getWireframeAttribute(W),be===void 0)return;Fe=2}const Oe=W.drawRange,De=W.attributes.position;let Ze=Oe.start*Fe,it=(Oe.start+Oe.count)*Fe;ae!==null&&(Ze=Math.max(Ze,ae.start*Fe),it=Math.min(it,(ae.start+ae.count)*Fe)),be!==null?(Ze=Math.max(Ze,0),it=Math.min(it,be.count)):De!=null&&(Ze=Math.max(Ze,0),it=Math.min(it,De.count));const At=it-Ze;if(At<0||At===1/0)return;xe.setup(O,j,Me,W,be);let Et,tt=ye;if(be!==null&&(Et=ne.get(be),tt=ze,tt.setIndex(Et)),O.isMesh)j.wireframe===!0?(Re.setLineWidth(j.wireframeLinewidth*st()),tt.setMode(U.LINES)):tt.setMode(U.TRIANGLES);else if(O.isLine){let Ne=j.linewidth;Ne===void 0&&(Ne=1),Re.setLineWidth(Ne*st()),O.isLineSegments?tt.setMode(U.LINES):O.isLineLoop?tt.setMode(U.LINE_LOOP):tt.setMode(U.LINE_STRIP)}else O.isPoints?tt.setMode(U.POINTS):O.isSprite&&tt.setMode(U.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)tt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(ke.get("WEBGL_multi_draw"))tt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ne=O._multiDrawStarts,Ht=O._multiDrawCounts,rt=O._multiDrawCount,$n=be?ne.get(be).bytesPerElement:1,Do=Ce.get(j).currentProgram.getUniforms();for(let yn=0;yn<rt;yn++)Do.setValue(U,"_gl_DrawID",yn),tt.render(Ne[yn]/$n,Ht[yn])}else if(O.isInstancedMesh)tt.renderInstances(Ze,At,O.count);else if(W.isInstancedBufferGeometry){const Ne=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ht=Math.min(W.instanceCount,Ne);tt.renderInstances(Ze,At,Ht)}else tt.render(Ze,At)};function at(w,F,W){w.transparent===!0&&w.side===Fi&&w.forceSinglePass===!1?(w.side=gn,w.needsUpdate=!0,yl(w,F,W),w.side=zr,w.needsUpdate=!0,yl(w,F,W),w.side=Fi):yl(w,F,W)}this.compile=function(w,F,W=null){W===null&&(W=w),h=Ke.get(W),h.init(F),x.push(h),W.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(h.pushLight(O),O.castShadow&&h.pushShadow(O))}),w!==W&&w.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(h.pushLight(O),O.castShadow&&h.pushShadow(O))}),h.setupLights();const j=new Set;return w.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ae=O.material;if(ae)if(Array.isArray(ae))for(let ve=0;ve<ae.length;ve++){const Me=ae[ve];at(Me,W,O),j.add(Me)}else at(ae,W,O),j.add(ae)}),x.pop(),h=null,j},this.compileAsync=function(w,F,W=null){const j=this.compile(w,F,W);return new Promise(O=>{function ae(){if(j.forEach(function(ve){Ce.get(ve).currentProgram.isReady()&&j.delete(ve)}),j.size===0){O(w);return}setTimeout(ae,10)}ke.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Xn=null;function Ti(w){Xn&&Xn(w)}function Tm(){$r.stop()}function bm(){$r.start()}const $r=new KS;$r.setAnimationLoop(Ti),typeof self<"u"&&$r.setContext(self),this.setAnimationLoop=function(w){Xn=w,Y.setAnimationLoop(w),w===null?$r.stop():$r.start()},Y.addEventListener("sessionstart",Tm),Y.addEventListener("sessionend",bm),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(F),F=Y.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,F,A),h=Ke.get(w,x.length),h.init(F),x.push(h),Ae.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),q.setFromProjectionMatrix(Ae),le=this.localClippingEnabled,oe=ue.init(this.clippingPlanes,le),m=_e.get(w,_.length),m.init(),_.push(m),Y.enabled===!0&&Y.isPresenting===!0){const ae=y.xr.getDepthSensingMesh();ae!==null&&$u(ae,F,-1/0,y.sortObjects)}$u(w,F,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(G,Q),je=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,je&&Le.addToRenderList(m,w),this.info.render.frame++,oe===!0&&ue.beginShadows();const W=h.state.shadowsArray;Se.render(W,w,F),oe===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=m.opaque,O=m.transmissive;if(h.setupLights(),F.isArrayCamera){const ae=F.cameras;if(O.length>0)for(let ve=0,Me=ae.length;ve<Me;ve++){const be=ae[ve];Am(j,O,w,be)}je&&Le.render(w);for(let ve=0,Me=ae.length;ve<Me;ve++){const be=ae[ve];Cm(m,w,be,be.viewport)}}else O.length>0&&Am(j,O,w,F),je&&Le.render(w),Cm(m,w,F);A!==null&&b===0&&(R.updateMultisampleRenderTarget(A),R.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(y,w,F),xe.resetDefaultState(),M=-1,S=null,x.pop(),x.length>0?(h=x[x.length-1],oe===!0&&ue.setGlobalState(y.clippingPlanes,h.state.camera)):h=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function $u(w,F,W,j){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)h.pushLight(w),w.castShadow&&h.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||q.intersectsSprite(w)){j&&Ue.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ae);const ve=ee.update(w),Me=w.material;Me.visible&&m.push(w,ve,Me,W,Ue.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||q.intersectsObject(w))){const ve=ee.update(w),Me=w.material;if(j&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ue.copy(w.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Ue.copy(ve.boundingSphere.center)),Ue.applyMatrix4(w.matrixWorld).applyMatrix4(Ae)),Array.isArray(Me)){const be=ve.groups;for(let Fe=0,Oe=be.length;Fe<Oe;Fe++){const De=be[Fe],Ze=Me[De.materialIndex];Ze&&Ze.visible&&m.push(w,ve,Ze,W,Ue.z,De)}}else Me.visible&&m.push(w,ve,Me,W,Ue.z,null)}}const ae=w.children;for(let ve=0,Me=ae.length;ve<Me;ve++)$u(ae[ve],F,W,j)}function Cm(w,F,W,j){const O=w.opaque,ae=w.transmissive,ve=w.transparent;h.setupLightsView(W),oe===!0&&ue.setGlobalState(y.clippingPlanes,W),j&&Re.viewport(D.copy(j)),O.length>0&&xl(O,F,W),ae.length>0&&xl(ae,F,W),ve.length>0&&xl(ve,F,W),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function Am(w,F,W,j){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[j.id]===void 0&&(h.state.transmissionRenderTarget[j.id]=new Ao(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float")?hl:Ki,minFilter:fo,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const ae=h.state.transmissionRenderTarget[j.id],ve=j.viewport||D;ae.setSize(ve.z*y.transmissionResolutionScale,ve.w*y.transmissionResolutionScale);const Me=y.getRenderTarget();y.setRenderTarget(ae),y.getClearColor(B),$=y.getClearAlpha(),$<1&&y.setClearColor(16777215,.5),y.clear(),je&&Le.render(W);const be=y.toneMapping;y.toneMapping=Nr;const Fe=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),h.setupLightsView(j),oe===!0&&ue.setGlobalState(y.clippingPlanes,j),xl(w,W,j),R.updateMultisampleRenderTarget(ae),R.updateRenderTargetMipmap(ae),ke.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let De=0,Ze=F.length;De<Ze;De++){const it=F[De],At=it.object,Et=it.geometry,tt=it.material,Ne=it.group;if(tt.side===Fi&&At.layers.test(j.layers)){const Ht=tt.side;tt.side=gn,tt.needsUpdate=!0,Rm(At,W,j,Et,tt,Ne),tt.side=Ht,tt.needsUpdate=!0,Oe=!0}}Oe===!0&&(R.updateMultisampleRenderTarget(ae),R.updateRenderTargetMipmap(ae))}y.setRenderTarget(Me),y.setClearColor(B,$),Fe!==void 0&&(j.viewport=Fe),y.toneMapping=be}function xl(w,F,W){const j=F.isScene===!0?F.overrideMaterial:null;for(let O=0,ae=w.length;O<ae;O++){const ve=w[O],Me=ve.object,be=ve.geometry,Fe=j===null?ve.material:j,Oe=ve.group;Me.layers.test(W.layers)&&Rm(Me,F,W,be,Fe,Oe)}}function Rm(w,F,W,j,O,ae){w.onBeforeRender(y,F,W,j,O,ae),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),O.onBeforeRender(y,F,W,j,w,ae),O.transparent===!0&&O.side===Fi&&O.forceSinglePass===!1?(O.side=gn,O.needsUpdate=!0,y.renderBufferDirect(W,F,j,O,w,ae),O.side=zr,O.needsUpdate=!0,y.renderBufferDirect(W,F,j,O,w,ae),O.side=Fi):y.renderBufferDirect(W,F,j,O,w,ae),w.onAfterRender(y,F,W,j,O,ae)}function yl(w,F,W){F.isScene!==!0&&(F=ct);const j=Ce.get(w),O=h.state.lights,ae=h.state.shadowsArray,ve=O.state.version,Me=Te.getParameters(w,O.state,ae,F,W),be=Te.getProgramCacheKey(Me);let Fe=j.programs;j.environment=w.isMeshStandardMaterial?F.environment:null,j.fog=F.fog,j.envMap=(w.isMeshStandardMaterial?V:E).get(w.envMap||j.environment),j.envMapRotation=j.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Fe===void 0&&(w.addEventListener("dispose",Ve),Fe=new Map,j.programs=Fe);let Oe=Fe.get(be);if(Oe!==void 0){if(j.currentProgram===Oe&&j.lightsStateVersion===ve)return Lm(w,Me),Oe}else Me.uniforms=Te.getUniforms(w),w.onBeforeCompile(Me,y),Oe=Te.acquireProgram(Me,be),Fe.set(be,Oe),j.uniforms=Me.uniforms;const De=j.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(De.clippingPlanes=ue.uniform),Lm(w,Me),j.needsLights=rE(w),j.lightsStateVersion=ve,j.needsLights&&(De.ambientLightColor.value=O.state.ambient,De.lightProbe.value=O.state.probe,De.directionalLights.value=O.state.directional,De.directionalLightShadows.value=O.state.directionalShadow,De.spotLights.value=O.state.spot,De.spotLightShadows.value=O.state.spotShadow,De.rectAreaLights.value=O.state.rectArea,De.ltc_1.value=O.state.rectAreaLTC1,De.ltc_2.value=O.state.rectAreaLTC2,De.pointLights.value=O.state.point,De.pointLightShadows.value=O.state.pointShadow,De.hemisphereLights.value=O.state.hemi,De.directionalShadowMap.value=O.state.directionalShadowMap,De.directionalShadowMatrix.value=O.state.directionalShadowMatrix,De.spotShadowMap.value=O.state.spotShadowMap,De.spotLightMatrix.value=O.state.spotLightMatrix,De.spotLightMap.value=O.state.spotLightMap,De.pointShadowMap.value=O.state.pointShadowMap,De.pointShadowMatrix.value=O.state.pointShadowMatrix),j.currentProgram=Oe,j.uniformsList=null,Oe}function Pm(w){if(w.uniformsList===null){const F=w.currentProgram.getUniforms();w.uniformsList=Ic.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function Lm(w,F){const W=Ce.get(w);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function nE(w,F,W,j,O){F.isScene!==!0&&(F=ct),R.resetTextureUnits();const ae=F.fog,ve=j.isMeshStandardMaterial?F.environment:null,Me=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Vs,be=(j.isMeshStandardMaterial?V:E).get(j.envMap||ve),Fe=j.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Oe=!!W.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),De=!!W.morphAttributes.position,Ze=!!W.morphAttributes.normal,it=!!W.morphAttributes.color;let At=Nr;j.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(At=y.toneMapping);const Et=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,tt=Et!==void 0?Et.length:0,Ne=Ce.get(j),Ht=h.state.lights;if(oe===!0&&(le===!0||w!==S)){const en=w===S&&j.id===M;ue.setState(j,w,en)}let rt=!1;j.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==Ht.state.version||Ne.outputColorSpace!==Me||O.isBatchedMesh&&Ne.batching===!1||!O.isBatchedMesh&&Ne.batching===!0||O.isBatchedMesh&&Ne.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ne.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ne.instancing===!1||!O.isInstancedMesh&&Ne.instancing===!0||O.isSkinnedMesh&&Ne.skinning===!1||!O.isSkinnedMesh&&Ne.skinning===!0||O.isInstancedMesh&&Ne.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ne.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ne.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ne.instancingMorph===!1&&O.morphTexture!==null||Ne.envMap!==be||j.fog===!0&&Ne.fog!==ae||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==ue.numPlanes||Ne.numIntersection!==ue.numIntersection)||Ne.vertexAlphas!==Fe||Ne.vertexTangents!==Oe||Ne.morphTargets!==De||Ne.morphNormals!==Ze||Ne.morphColors!==it||Ne.toneMapping!==At||Ne.morphTargetsCount!==tt)&&(rt=!0):(rt=!0,Ne.__version=j.version);let $n=Ne.currentProgram;rt===!0&&($n=yl(j,F,O));let Do=!1,yn=!1,Js=!1;const gt=$n.getUniforms(),Nn=Ne.uniforms;if(Re.useProgram($n.program)&&(Do=!0,yn=!0,Js=!0),j.id!==M&&(M=j.id,yn=!0),Do||S!==w){Re.buffers.depth.getReversed()?(de.copy(w.projectionMatrix),WR(de),jR(de),gt.setValue(U,"projectionMatrix",de)):gt.setValue(U,"projectionMatrix",w.projectionMatrix),gt.setValue(U,"viewMatrix",w.matrixWorldInverse);const cn=gt.map.cameraPosition;cn!==void 0&&cn.setValue(U,Pe.setFromMatrixPosition(w.matrixWorld)),Ye.logarithmicDepthBuffer&&gt.setValue(U,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&gt.setValue(U,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,yn=!0,Js=!0)}if(O.isSkinnedMesh){gt.setOptional(U,O,"bindMatrix"),gt.setOptional(U,O,"bindMatrixInverse");const en=O.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),gt.setValue(U,"boneTexture",en.boneTexture,R))}O.isBatchedMesh&&(gt.setOptional(U,O,"batchingTexture"),gt.setValue(U,"batchingTexture",O._matricesTexture,R),gt.setOptional(U,O,"batchingIdTexture"),gt.setValue(U,"batchingIdTexture",O._indirectTexture,R),gt.setOptional(U,O,"batchingColorTexture"),O._colorsTexture!==null&&gt.setValue(U,"batchingColorTexture",O._colorsTexture,R));const In=W.morphAttributes;if((In.position!==void 0||In.normal!==void 0||In.color!==void 0)&&Ie.update(O,W,$n),(yn||Ne.receiveShadow!==O.receiveShadow)&&(Ne.receiveShadow=O.receiveShadow,gt.setValue(U,"receiveShadow",O.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Nn.envMap.value=be,Nn.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&F.environment!==null&&(Nn.envMapIntensity.value=F.environmentIntensity),yn&&(gt.setValue(U,"toneMappingExposure",y.toneMappingExposure),Ne.needsLights&&iE(Nn,Js),ae&&j.fog===!0&&pe.refreshFogUniforms(Nn,ae),pe.refreshMaterialUniforms(Nn,j,P,K,h.state.transmissionRenderTarget[w.id]),Ic.upload(U,Pm(Ne),Nn,R)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Ic.upload(U,Pm(Ne),Nn,R),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&gt.setValue(U,"center",O.center),gt.setValue(U,"modelViewMatrix",O.modelViewMatrix),gt.setValue(U,"normalMatrix",O.normalMatrix),gt.setValue(U,"modelMatrix",O.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const en=j.uniformsGroups;for(let cn=0,Yu=en.length;cn<Yu;cn++){const Yr=en[cn];I.update(Yr,$n),I.bind(Yr,$n)}}return $n}function iE(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function rE(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,F,W){Ce.get(w.texture).__webglTexture=F,Ce.get(w.depthTexture).__webglTexture=W;const j=Ce.get(w);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=W===void 0,j.__autoAllocateDepthBuffer||ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,F){const W=Ce.get(w);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0};const oE=U.createFramebuffer();this.setRenderTarget=function(w,F=0,W=0){A=w,C=F,b=W;let j=!0,O=null,ae=!1,ve=!1;if(w){const be=Ce.get(w);if(be.__useDefaultFramebuffer!==void 0)Re.bindFramebuffer(U.FRAMEBUFFER,null),j=!1;else if(be.__webglFramebuffer===void 0)R.setupRenderTarget(w);else if(be.__hasExternalTextures)R.rebindTextures(w,Ce.get(w.texture).__webglTexture,Ce.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const De=w.depthTexture;if(be.__boundDepthTexture!==De){if(De!==null&&Ce.has(De)&&(w.width!==De.image.width||w.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(w)}}const Fe=w.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(ve=!0);const Oe=Ce.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Oe[F])?O=Oe[F][W]:O=Oe[F],ae=!0):w.samples>0&&R.useMultisampledRTT(w)===!1?O=Ce.get(w).__webglMultisampledFramebuffer:Array.isArray(Oe)?O=Oe[W]:O=Oe,D.copy(w.viewport),k.copy(w.scissor),z=w.scissorTest}else D.copy(Z).multiplyScalar(P).floor(),k.copy(ce).multiplyScalar(P).floor(),z=we;if(W!==0&&(O=oE),Re.bindFramebuffer(U.FRAMEBUFFER,O)&&j&&Re.drawBuffers(w,O),Re.viewport(D),Re.scissor(k),Re.setScissorTest(z),ae){const be=Ce.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,be.__webglTexture,W)}else if(ve){const be=Ce.get(w.texture),Fe=F;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,be.__webglTexture,W,Fe)}else if(w!==null&&W!==0){const be=Ce.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,be.__webglTexture,W)}M=-1},this.readRenderTargetPixels=function(w,F,W,j,O,ae,ve){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Ce.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ve!==void 0&&(Me=Me[ve]),Me){Re.bindFramebuffer(U.FRAMEBUFFER,Me);try{const be=w.texture,Fe=be.format,Oe=be.type;if(!Ye.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ye.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-j&&W>=0&&W<=w.height-O&&U.readPixels(F,W,j,O,He.convert(Fe),He.convert(Oe),ae)}finally{const be=A!==null?Ce.get(A).__webglFramebuffer:null;Re.bindFramebuffer(U.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(w,F,W,j,O,ae,ve){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Ce.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ve!==void 0&&(Me=Me[ve]),Me){const be=w.texture,Fe=be.format,Oe=be.type;if(!Ye.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ye.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=w.width-j&&W>=0&&W<=w.height-O){Re.bindFramebuffer(U.FRAMEBUFFER,Me);const De=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,De),U.bufferData(U.PIXEL_PACK_BUFFER,ae.byteLength,U.STREAM_READ),U.readPixels(F,W,j,O,He.convert(Fe),He.convert(Oe),0);const Ze=A!==null?Ce.get(A).__webglFramebuffer:null;Re.bindFramebuffer(U.FRAMEBUFFER,Ze);const it=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await GR(U,it,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,De),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ae),U.deleteBuffer(De),U.deleteSync(it),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,F=null,W=0){w.isTexture!==!0&&(Yo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,w=arguments[1]);const j=Math.pow(2,-W),O=Math.floor(w.image.width*j),ae=Math.floor(w.image.height*j),ve=F!==null?F.x:0,Me=F!==null?F.y:0;R.setTexture2D(w,0),U.copyTexSubImage2D(U.TEXTURE_2D,W,0,0,ve,Me,O,ae),Re.unbindTexture()};const sE=U.createFramebuffer(),aE=U.createFramebuffer();this.copyTextureToTexture=function(w,F,W=null,j=null,O=0,ae=null){w.isTexture!==!0&&(Yo("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,w=arguments[1],F=arguments[2],ae=arguments[3]||0,W=null),ae===null&&(O!==0?(Yo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ae=O,O=0):ae=0);let ve,Me,be,Fe,Oe,De,Ze,it,At;const Et=w.isCompressedTexture?w.mipmaps[ae]:w.image;if(W!==null)ve=W.max.x-W.min.x,Me=W.max.y-W.min.y,be=W.isBox3?W.max.z-W.min.z:1,Fe=W.min.x,Oe=W.min.y,De=W.isBox3?W.min.z:0;else{const In=Math.pow(2,-O);ve=Math.floor(Et.width*In),Me=Math.floor(Et.height*In),w.isDataArrayTexture?be=Et.depth:w.isData3DTexture?be=Math.floor(Et.depth*In):be=1,Fe=0,Oe=0,De=0}j!==null?(Ze=j.x,it=j.y,At=j.z):(Ze=0,it=0,At=0);const tt=He.convert(F.format),Ne=He.convert(F.type);let Ht;F.isData3DTexture?(R.setTexture3D(F,0),Ht=U.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(R.setTexture2DArray(F,0),Ht=U.TEXTURE_2D_ARRAY):(R.setTexture2D(F,0),Ht=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);const rt=U.getParameter(U.UNPACK_ROW_LENGTH),$n=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Do=U.getParameter(U.UNPACK_SKIP_PIXELS),yn=U.getParameter(U.UNPACK_SKIP_ROWS),Js=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Et.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Et.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Fe),U.pixelStorei(U.UNPACK_SKIP_ROWS,Oe),U.pixelStorei(U.UNPACK_SKIP_IMAGES,De);const gt=w.isDataArrayTexture||w.isData3DTexture,Nn=F.isDataArrayTexture||F.isData3DTexture;if(w.isDepthTexture){const In=Ce.get(w),en=Ce.get(F),cn=Ce.get(In.__renderTarget),Yu=Ce.get(en.__renderTarget);Re.bindFramebuffer(U.READ_FRAMEBUFFER,cn.__webglFramebuffer),Re.bindFramebuffer(U.DRAW_FRAMEBUFFER,Yu.__webglFramebuffer);for(let Yr=0;Yr<be;Yr++)gt&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ce.get(w).__webglTexture,O,De+Yr),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ce.get(F).__webglTexture,ae,At+Yr)),U.blitFramebuffer(Fe,Oe,ve,Me,Ze,it,ve,Me,U.DEPTH_BUFFER_BIT,U.NEAREST);Re.bindFramebuffer(U.READ_FRAMEBUFFER,null),Re.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(O!==0||w.isRenderTargetTexture||Ce.has(w)){const In=Ce.get(w),en=Ce.get(F);Re.bindFramebuffer(U.READ_FRAMEBUFFER,sE),Re.bindFramebuffer(U.DRAW_FRAMEBUFFER,aE);for(let cn=0;cn<be;cn++)gt?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,In.__webglTexture,O,De+cn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,In.__webglTexture,O),Nn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,en.__webglTexture,ae,At+cn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,en.__webglTexture,ae),O!==0?U.blitFramebuffer(Fe,Oe,ve,Me,Ze,it,ve,Me,U.COLOR_BUFFER_BIT,U.NEAREST):Nn?U.copyTexSubImage3D(Ht,ae,Ze,it,At+cn,Fe,Oe,ve,Me):U.copyTexSubImage2D(Ht,ae,Ze,it,Fe,Oe,ve,Me);Re.bindFramebuffer(U.READ_FRAMEBUFFER,null),Re.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Nn?w.isDataTexture||w.isData3DTexture?U.texSubImage3D(Ht,ae,Ze,it,At,ve,Me,be,tt,Ne,Et.data):F.isCompressedArrayTexture?U.compressedTexSubImage3D(Ht,ae,Ze,it,At,ve,Me,be,tt,Et.data):U.texSubImage3D(Ht,ae,Ze,it,At,ve,Me,be,tt,Ne,Et):w.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ae,Ze,it,ve,Me,tt,Ne,Et.data):w.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ae,Ze,it,Et.width,Et.height,tt,Et.data):U.texSubImage2D(U.TEXTURE_2D,ae,Ze,it,ve,Me,tt,Ne,Et);U.pixelStorei(U.UNPACK_ROW_LENGTH,rt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,$n),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Do),U.pixelStorei(U.UNPACK_SKIP_ROWS,yn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Js),ae===0&&F.generateMipmaps&&U.generateMipmap(Ht),Re.unbindTexture()},this.copyTextureToTexture3D=function(w,F,W=null,j=null,O=0){return w.isTexture!==!0&&(Yo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,j=arguments[1]||null,w=arguments[2],F=arguments[3],O=arguments[4]||0),Yo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,F,W,j,O)},this.initRenderTarget=function(w){Ce.get(w).__webglFramebuffer===void 0&&R.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),Re.unbindTexture()},this.resetState=function(){C=0,b=0,A=null,Re.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=nt._getDrawingBufferColorSpace(e),n.unpackColorSpace=nt._getUnpackColorSpace()}}const tE=()=>{const t=L.useRef(null);return L.useEffect(()=>{if(!t.current)return;const e=new pP,n=new zn(75,window.innerWidth/window.innerHeight,.1,1e3),i=new r3({alpha:!0,antialias:!0}),r=1500,o=200,s=300;i.setSize(window.innerWidth,window.innerHeight),i.setClearColor(0,0),t.current.appendChild(i.domElement);const l=(()=>{const f=new Ji,u=new Float32Array(r*3),p=new Float32Array(r*3),g=new Float32Array(r*3),v=[new Je("#FFFFFF"),new Je("#E5DEFF"),new Je("#FFDEE2"),new Je("#D3E4FD")];for(let _=0;_<r;_++){const x=_*3;u[x]=(Math.random()-.5)*o,u[x+1]=Math.random()*s-s/2,u[x+2]=(Math.random()-.5)*o,p[x]=(Math.random()-.5)*.2,p[x+1]=-.2-Math.random()*.3,p[x+2]=(Math.random()-.5)*.2;const y=v[Math.floor(Math.random()*v.length)];g[x]=y.r,g[x+1]=y.g,g[x+2]=y.b}f.setAttribute("position",new Gn(u,3)),f.setAttribute("color",new Gn(g,3));const m=new YS({size:.8,vertexColors:!0,transparent:!0,opacity:.8,blending:gh}),h=new vP(f,m);return h.userData.velocities=p,h})();e.add(l),n.position.z=100;const c=()=>{requestAnimationFrame(c);const f=l.geometry.attributes.position.array,u=l.userData.velocities;for(let p=0;p<f.length;p+=3)f[p]+=u[p],f[p+1]+=u[p+1],f[p+2]+=u[p+2],u[p]+=(Math.random()-.5)*.01,u[p+2]+=(Math.random()-.5)*.01,u[p]=Math.max(Math.min(u[p],.2),-.2),u[p+2]=Math.max(Math.min(u[p+2],.2),-.2),f[p+1]<-s/2&&(f[p]=(Math.random()-.5)*o,f[p+1]=s/2,f[p+2]=(Math.random()-.5)*o,u[p]=(Math.random()-.5)*.2,u[p+1]=-.2-Math.random()*.3,u[p+2]=(Math.random()-.5)*.2);l.geometry.attributes.position.needsUpdate=!0,i.render(e,n)};c();const d=()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",d),()=>{var f;window.removeEventListener("resize",d),(f=t.current)==null||f.removeChild(i.domElement),l.geometry.dispose(),l.material.dispose()}},[]),N.jsx("div",{ref:t,className:"fixed top-0 left-0 w-full h-full -z-10"})},o3=()=>N.jsxs(N.Fragment,{children:[N.jsx(tE,{}),N.jsxs("div",{className:"min-h-screen container py-12 space-y-12 animate-fade-in relative z-10",children:[N.jsx(YA,{}),N.jsxs("div",{children:[N.jsx("h2",{className:"font-heading text-2xl font-semibold mb-6",children:"Мои проекты"}),N.jsx(ZA,{})]})]})]}),s3={1:{title:"Игра Bunker",description:"Цифровая адаптация настольной игры о выживании в бункере после апокалипсиса. Решай, кто останется, управляй ресурсами и адаптируйся к новым вызовам!",image:"/placeholder.svg",tags:["C#","Unity","App"],longDescription:`
      После глобальной катастрофы группа выживших укрылась в бункере. Однако запасы ограничены, а место есть не для всех. 
      В "Bunker" тебе предстоит принимать сложные решения, анализировать навыки персонажей и выстраивать стратегию, чтобы обеспечить выживание. 
      Доверие, логика и немного удачи помогут сохранить контроль над убежищем.
      Цифровая версия настольной игры переносит ее механику в новый формат, добавляя интерактивность и неожиданные события. 
      Готов ли ты к борьбе за место в бункере?
    `,demoUrl:"",githubUrl:"",isFrozen:!0},2:{title:"Скоро",description:"...",image:"/placeholder.svg",tags:["","",""],longDescription:`

    `,demoUrl:"",githubUrl:"",isFrozen:!1},3:{title:"Скоро",description:"...",image:"/placeholder.svg",tags:["","",""],longDescription:`

    `,demoUrl:"",githubUrl:"",isFrozen:!1},4:{title:"Скоро",description:"...",image:"/placeholder.svg",tags:["","",""],longDescription:`

    `,demoUrl:"",githubUrl:"",isFrozen:!1},5:{title:"Скоро",description:"...",image:"/placeholder.svg",tags:["","",""],longDescription:`

    `,demoUrl:"",githubUrl:"",isFrozen:!1},6:{title:"Скоро",description:"...",image:"/placeholder.svg",tags:["","",""],longDescription:`

    `,demoUrl:"",githubUrl:"",isFrozen:!1},7:{title:"Скоро",description:"...",image:"/placeholder.svg",tags:["","",""],longDescription:`

    `,demoUrl:"",githubUrl:"",isFrozen:!1},8:{title:"Скоро",description:"...",image:"/placeholder.svg",tags:["","",""],longDescription:`

    `,demoUrl:"",githubUrl:"",isFrozen:!1},9:{title:"Скоро",description:"...",image:"/placeholder.svg",tags:["","",""],longDescription:`

    `,demoUrl:"",githubUrl:"",isFrozen:!1}},a3=()=>{const t=[],e=Math.floor(Math.random()*6)+3,n=()=>{const o=[{x:0,y:0},{x:100,y:0},{x:0,y:100},{x:100,y:100}];return o[Math.floor(Math.random()*o.length)]},i=()=>({x:Math.random()*100,y:Math.random()*100}),r=o=>{const s=Math.random()*10-5;switch(o){case"top":case"bottom":return Math.random()*100;case"left":case"right":return Math.max(0,Math.min(100,50+s))}};for(let o=0;o<e;o++){const s=Math.random();let a,l;if(s<.4){const g=n();a=g.x,l=g.y===0?"top":"bottom"}else if(s<.7)l=["top","right","bottom","left"][Math.floor(Math.random()*4)],a=r(l);else{const g=i();a=g.x,l=g.y<50?"top":"bottom"}const c=s<.4?35:s<.7?25:20,d=Math.floor(Math.random()*c)+10,f=Math.floor(Math.random()*360)-180,u=(Math.random()*30+20)/100,p=Math.random()<.3?2:1;if(Math.random()<(s>=.7?.5:.3)){const g=d*(Math.random()*.6+.2),v=f+(Math.random()*60-30);t.push({position:a+(Math.random()*10-5),length:g,rotation:v,side:l,opacity:u*.8,width:1})}t.push({position:a,length:d,rotation:f,side:l,opacity:u,width:p})}return t},l3=()=>{const{id:t}=EA(),e=s3[t],n=L.useMemo(()=>a3(),[]);return e?N.jsxs(N.Fragment,{children:[N.jsx(tE,{}),N.jsxs("div",{className:"min-h-screen container py-12 animate-fade-in",children:[N.jsxs(yS,{to:"/",className:"inline-flex items-center text-primary hover:text-primary/80 mb-8",children:[N.jsx(I1,{className:"mr-2 h-4 w-4"}),"Назад"]}),N.jsxs("div",{className:`card-gradient rounded-xl p-8 mb-8 relative
          ${e.isFrozen?"before:absolute before:inset-0 before:bg-[#B3E5FC]/20 before:backdrop-blur-[1px] before:rounded-xl before:pointer-events-none":""}`,children:[e.isFrozen&&N.jsxs(N.Fragment,{children:[N.jsxs("div",{className:"absolute inset-0 rounded-xl pointer-events-none",children:[N.jsx("div",{className:"absolute inset-0 rounded-xl bg-gradient-to-tr from-white/5 via-[#D3E4FD]/10 to-white/5"}),N.jsx("div",{className:"absolute inset-0 rounded-xl opacity-20 mix-blend-overlay bg-[radial-gradient(circle_at_50%_50%,_#ffffff_0%,_transparent_100%)]"}),N.jsxs("div",{className:"absolute inset-0 rounded-xl overflow-hidden",children:[N.jsx("div",{className:"absolute top-0 left-0 w-16 h-16 rounded-br-3xl bg-[radial-gradient(circle_at_0%_0%,_#ffffff_0%,_transparent_70%)] opacity-40"}),N.jsx("div",{className:"absolute top-0 left-0 w-12 h-12 rounded-br-2xl bg-[radial-gradient(circle_at_0%_0%,_#B3E5FC_0%,_transparent_80%)] opacity-30"}),N.jsx("div",{className:"absolute top-0 right-0 w-16 h-16 rounded-bl-3xl bg-[radial-gradient(circle_at_100%_0%,_#ffffff_0%,_transparent_70%)] opacity-40"}),N.jsx("div",{className:"absolute top-0 right-0 w-12 h-12 rounded-bl-2xl bg-[radial-gradient(circle_at_100%_0%,_#B3E5FC_0%,_transparent_80%)] opacity-30"}),N.jsx("div",{className:"absolute bottom-0 left-0 w-16 h-16 rounded-tr-3xl bg-[radial-gradient(circle_at_0%_100%,_#ffffff_0%,_transparent_70%)] opacity-40"}),N.jsx("div",{className:"absolute bottom-0 left-0 w-12 h-12 rounded-tr-2xl bg-[radial-gradient(circle_at_0%_100%,_#B3E5FC_0%,_transparent_80%)] opacity-30"}),N.jsx("div",{className:"absolute bottom-0 right-0 w-16 h-16 rounded-tl-3xl bg-[radial-gradient(circle_at_100%_100%,_#ffffff_0%,_transparent_70%)] opacity-40"}),N.jsx("div",{className:"absolute bottom-0 right-0 w-12 h-12 rounded-tl-2xl bg-[radial-gradient(circle_at_100%_100%,_#B3E5FC_0%,_transparent_80%)] opacity-30"})]}),N.jsxs("div",{className:"absolute inset-0 rounded-xl",children:[N.jsx("div",{className:"absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent"}),N.jsx("div",{className:"absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent"}),N.jsx("div",{className:"absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-white/30 to-transparent"}),N.jsx("div",{className:"absolute inset-y-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-white/30 to-transparent"})]})]}),N.jsx("div",{className:"absolute inset-0 rounded-xl overflow-hidden pointer-events-none",children:n.map((i,r)=>{const o={position:"absolute",width:`${i.width}px`,height:`${i.length}%`,background:`rgba(179, 229, 252, ${i.opacity})`,transform:`rotate(${i.rotation}deg)`};switch(i.side){case"top":o.top="0",o.left=`${i.position}%`;break;case"right":o.right="0",o.top=`${i.position}%`;break;case"bottom":o.bottom="0",o.left=`${i.position}%`;break;case"left":o.left="0",o.top=`${i.position}%`;break}return N.jsx("div",{style:o},r)})}),N.jsx("div",{className:"absolute top-6 -right-1 transform rotate-45 bg-[#B3E5FC] px-4 py-1 shadow-lg z-20",children:N.jsx("span",{className:"text-primary-foreground text-xs font-semibold whitespace-nowrap",children:"заморожен"})})]}),N.jsx("div",{className:"aspect-video rounded-lg overflow-hidden mb-8 relative z-10",children:N.jsx("img",{src:e.image,alt:e.title,className:"w-full h-full object-cover"})}),N.jsx("h1",{className:`font-heading text-3xl font-bold mb-4 relative z-10 
            ${e.isFrozen?"text-[#B3E5FC]/70":""}`,children:e.title}),N.jsx("div",{className:"flex flex-wrap gap-2 mb-6 relative z-10",children:e.tags.map(i=>N.jsx("span",{className:`bg-secondary px-3 py-1 rounded-full text-sm
                  ${e.isFrozen?"bg-[#B3E5FC]/10 text-[#B3E5FC]/70":""}`,children:i},i))}),N.jsx("p",{className:`text-lg text-muted-foreground mb-8 relative z-10
            ${e.isFrozen?"text-[#B3E5FC]/50":""}`,children:e.description}),N.jsxs("div",{className:"flex gap-4 mb-8 relative z-10",children:[N.jsx(el,{asChild:!0,disabled:!e.demoUrl,children:N.jsxs("a",{href:e.demoUrl,target:"_blank",rel:"noopener noreferrer",children:[N.jsx(_y,{className:"mr-2 h-4 w-4"}),"Telegram channel"]})}),N.jsx(el,{variant:"outline",asChild:!0,disabled:!e.githubUrl,children:N.jsxs("a",{href:e.githubUrl,target:"_blank",rel:"noopener noreferrer",children:[N.jsx(U1,{className:"mr-2 h-4 w-4"}),"Download"]})})]}),N.jsxs("div",{className:`prose prose-invert max-w-none relative z-10
            ${e.isFrozen?"text-[#B3E5FC]/70":""}`,children:[N.jsx("h2",{className:"font-heading text-2xl font-semibold mb-4",children:"О проекте"}),N.jsx("p",{className:"whitespace-pre-line",children:e.longDescription})]})]})]})]}):N.jsx("div",{children:"Project not found"})},c3=new WC,u3=()=>N.jsx(XC,{client:c3,children:N.jsxs(SC,{children:[N.jsx(xT,{}),N.jsx(YT,{}),N.jsx(GA,{children:N.jsxs(FA,{children:[N.jsx(hh,{path:"/",element:N.jsx(o3,{})}),N.jsx(hh,{path:"/project/:id",element:N.jsx(l3,{})})]})})]})});zx(document.getElementById("root")).render(N.jsx(u3,{}));
