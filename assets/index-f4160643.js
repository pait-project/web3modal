(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var am=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Hc(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function R2(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var N2={exports:{}},Rf={},M2={exports:{}},Ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vc=Symbol.for("react.element"),i8=Symbol.for("react.portal"),o8=Symbol.for("react.fragment"),s8=Symbol.for("react.strict_mode"),a8=Symbol.for("react.profiler"),l8=Symbol.for("react.provider"),c8=Symbol.for("react.context"),u8=Symbol.for("react.forward_ref"),d8=Symbol.for("react.suspense"),f8=Symbol.for("react.memo"),h8=Symbol.for("react.lazy"),_w=Symbol.iterator;function p8(t){return t===null||typeof t!="object"?null:(t=_w&&t[_w]||t["@@iterator"],typeof t=="function"?t:null)}var U2={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L2=Object.assign,B2={};function Ia(t,e,n){this.props=t,this.context=e,this.refs=B2,this.updater=n||U2}Ia.prototype.isReactComponent={};Ia.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ia.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function j2(){}j2.prototype=Ia.prototype;function lm(t,e,n){this.props=t,this.context=e,this.refs=B2,this.updater=n||U2}var cm=lm.prototype=new j2;cm.constructor=lm;L2(cm,Ia.prototype);cm.isPureReactComponent=!0;var Cw=Array.isArray,F2=Object.prototype.hasOwnProperty,um={current:null},W2={key:!0,ref:!0,__self:!0,__source:!0};function z2(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)F2.call(e,r)&&!W2.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Vc,type:t,key:o,ref:s,props:i,_owner:um.current}}function m8(t,e){return{$$typeof:Vc,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function dm(t){return typeof t=="object"&&t!==null&&t.$$typeof===Vc}function g8(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Sw=/\/+/g;function Jh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?g8(""+t.key):e.toString(36)}function Ju(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Vc:case i8:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+Jh(s,0):r,Cw(i)?(n="",t!=null&&(n=t.replace(Sw,"$&/")+"/"),Ju(i,e,n,"",function(c){return c})):i!=null&&(dm(i)&&(i=m8(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Sw,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",Cw(t))for(var a=0;a<t.length;a++){o=t[a];var l=r+Jh(o,a);s+=Ju(o,e,n,l,i)}else if(l=p8(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=r+Jh(o,a++),s+=Ju(o,e,n,l,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function _u(t,e,n){if(t==null)return t;var r=[],i=0;return Ju(t,r,"","",function(o){return e.call(n,o,i++)}),r}function w8(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var on={current:null},ed={transition:null},y8={ReactCurrentDispatcher:on,ReactCurrentBatchConfig:ed,ReactCurrentOwner:um};function H2(){throw Error("act(...) is not supported in production builds of React.")}Ne.Children={map:_u,forEach:function(t,e,n){_u(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return _u(t,function(){e++}),e},toArray:function(t){return _u(t,function(e){return e})||[]},only:function(t){if(!dm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ne.Component=Ia;Ne.Fragment=o8;Ne.Profiler=a8;Ne.PureComponent=lm;Ne.StrictMode=s8;Ne.Suspense=d8;Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=y8;Ne.act=H2;Ne.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=L2({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=um.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)F2.call(e,l)&&!W2.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Vc,type:t.type,key:i,ref:o,props:r,_owner:s}};Ne.createContext=function(t){return t={$$typeof:c8,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:l8,_context:t},t.Consumer=t};Ne.createElement=z2;Ne.createFactory=function(t){var e=z2.bind(null,t);return e.type=t,e};Ne.createRef=function(){return{current:null}};Ne.forwardRef=function(t){return{$$typeof:u8,render:t}};Ne.isValidElement=dm;Ne.lazy=function(t){return{$$typeof:h8,_payload:{_status:-1,_result:t},_init:w8}};Ne.memo=function(t,e){return{$$typeof:f8,type:t,compare:e===void 0?null:e}};Ne.startTransition=function(t){var e=ed.transition;ed.transition={};try{t()}finally{ed.transition=e}};Ne.unstable_act=H2;Ne.useCallback=function(t,e){return on.current.useCallback(t,e)};Ne.useContext=function(t){return on.current.useContext(t)};Ne.useDebugValue=function(){};Ne.useDeferredValue=function(t){return on.current.useDeferredValue(t)};Ne.useEffect=function(t,e){return on.current.useEffect(t,e)};Ne.useId=function(){return on.current.useId()};Ne.useImperativeHandle=function(t,e,n){return on.current.useImperativeHandle(t,e,n)};Ne.useInsertionEffect=function(t,e){return on.current.useInsertionEffect(t,e)};Ne.useLayoutEffect=function(t,e){return on.current.useLayoutEffect(t,e)};Ne.useMemo=function(t,e){return on.current.useMemo(t,e)};Ne.useReducer=function(t,e,n){return on.current.useReducer(t,e,n)};Ne.useRef=function(t){return on.current.useRef(t)};Ne.useState=function(t){return on.current.useState(t)};Ne.useSyncExternalStore=function(t,e,n){return on.current.useSyncExternalStore(t,e,n)};Ne.useTransition=function(){return on.current.useTransition()};Ne.version="18.3.1";M2.exports=Ne;var At=M2.exports;const v8=Hc(At);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b8=At,x8=Symbol.for("react.element"),E8=Symbol.for("react.fragment"),_8=Object.prototype.hasOwnProperty,C8=b8.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,S8={key:!0,ref:!0,__self:!0,__source:!0};function V2(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)_8.call(e,r)&&!S8.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:x8,type:t,key:o,ref:s,props:i,_owner:C8.current}}Rf.Fragment=E8;Rf.jsx=V2;Rf.jsxs=V2;N2.exports=Rf;var Gr=N2.exports,sp={},q2={exports:{}},kn={},Z2={exports:{}},G2={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(k,W){var z=k.length;k.push(W);e:for(;0<z;){var G=z-1>>>1,J=k[G];if(0<i(J,W))k[G]=W,k[z]=J,z=G;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var W=k[0],z=k.pop();if(z!==W){k[0]=z;e:for(var G=0,J=k.length,Y=J>>>1;G<Y;){var oe=2*(G+1)-1,fe=k[oe],pe=oe+1,ye=k[pe];if(0>i(fe,z))pe<J&&0>i(ye,fe)?(k[G]=ye,k[pe]=z,G=pe):(k[G]=fe,k[oe]=z,G=oe);else if(pe<J&&0>i(ye,z))k[G]=ye,k[pe]=z,G=pe;else break e}}return W}function i(k,W){var z=k.sortIndex-W.sortIndex;return z!==0?z:k.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],c=[],u=1,d=null,p=3,w=!1,y=!1,E=!1,C=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(k){for(var W=n(c);W!==null;){if(W.callback===null)r(c);else if(W.startTime<=k)r(c),W.sortIndex=W.expirationTime,e(l,W);else break;W=n(c)}}function x(k){if(E=!1,v(k),!y)if(n(l)!==null)y=!0,B(_);else{var W=n(c);W!==null&&j(x,W.startTime-k)}}function _(k,W){y=!1,E&&(E=!1,b(A),A=-1),w=!0;var z=p;try{for(v(W),d=n(l);d!==null&&(!(d.expirationTime>W)||k&&!M());){var G=d.callback;if(typeof G=="function"){d.callback=null,p=d.priorityLevel;var J=G(d.expirationTime<=W);W=t.unstable_now(),typeof J=="function"?d.callback=J:d===n(l)&&r(l),v(W)}else r(l);d=n(l)}if(d!==null)var Y=!0;else{var oe=n(c);oe!==null&&j(x,oe.startTime-W),Y=!1}return Y}finally{d=null,p=z,w=!1}}var S=!1,f=null,A=-1,R=5,D=-1;function M(){return!(t.unstable_now()-D<R)}function ee(){if(f!==null){var k=t.unstable_now();D=k;var W=!0;try{W=f(!0,k)}finally{W?ne():(S=!1,f=null)}}else S=!1}var ne;if(typeof m=="function")ne=function(){m(ee)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,F=H.port2;H.port1.onmessage=ee,ne=function(){F.postMessage(null)}}else ne=function(){C(ee,0)};function B(k){f=k,S||(S=!0,ne())}function j(k,W){A=C(function(){k(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_continueExecution=function(){y||w||(y=!0,B(_))},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<k?Math.floor(1e3/k):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(k){switch(p){case 1:case 2:case 3:var W=3;break;default:W=p}var z=p;p=W;try{return k()}finally{p=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(k,W){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var z=p;p=k;try{return W()}finally{p=z}},t.unstable_scheduleCallback=function(k,W,z){var G=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?G+z:G):z=G,k){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=z+J,k={id:u++,callback:W,priorityLevel:k,startTime:z,expirationTime:J,sortIndex:-1},z>G?(k.sortIndex=z,e(c,k),n(l)===null&&k===n(c)&&(E?(b(A),A=-1):E=!0,j(x,z-G))):(k.sortIndex=J,e(l,k),y||w||(y=!0,B(_))),k},t.unstable_shouldYield=M,t.unstable_wrapCallback=function(k){var W=p;return function(){var z=p;p=W;try{return k.apply(this,arguments)}finally{p=z}}}})(G2);Z2.exports=G2;var T8=Z2.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A8=At,On=T8;function q(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var K2=new Set,Ol={};function os(t,e){Ys(t,e),Ys(t+"Capture",e)}function Ys(t,e){for(Ol[t]=e,t=0;t<e.length;t++)K2.add(e[t])}var ni=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ap=Object.prototype.hasOwnProperty,P8=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Tw={},Aw={};function I8(t){return ap.call(Aw,t)?!0:ap.call(Tw,t)?!1:P8.test(t)?Aw[t]=!0:(Tw[t]=!0,!1)}function $8(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function O8(t,e,n,r){if(e===null||typeof e>"u"||$8(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function sn(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Lt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Lt[t]=new sn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Lt[e]=new sn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Lt[t]=new sn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Lt[t]=new sn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Lt[t]=new sn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Lt[t]=new sn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Lt[t]=new sn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Lt[t]=new sn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Lt[t]=new sn(t,5,!1,t.toLowerCase(),null,!1,!1)});var fm=/[\-:]([a-z])/g;function hm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(fm,hm);Lt[e]=new sn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(fm,hm);Lt[e]=new sn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(fm,hm);Lt[e]=new sn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Lt[t]=new sn(t,1,!1,t.toLowerCase(),null,!1,!1)});Lt.xlinkHref=new sn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Lt[t]=new sn(t,1,!1,t.toLowerCase(),null,!0,!0)});function pm(t,e,n,r){var i=Lt.hasOwnProperty(e)?Lt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(O8(e,n,i,r)&&(n=null),r||i===null?I8(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var pi=A8.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Cu=Symbol.for("react.element"),Cs=Symbol.for("react.portal"),Ss=Symbol.for("react.fragment"),mm=Symbol.for("react.strict_mode"),lp=Symbol.for("react.profiler"),Y2=Symbol.for("react.provider"),Q2=Symbol.for("react.context"),gm=Symbol.for("react.forward_ref"),cp=Symbol.for("react.suspense"),up=Symbol.for("react.suspense_list"),wm=Symbol.for("react.memo"),_i=Symbol.for("react.lazy"),X2=Symbol.for("react.offscreen"),Pw=Symbol.iterator;function qa(t){return t===null||typeof t!="object"?null:(t=Pw&&t[Pw]||t["@@iterator"],typeof t=="function"?t:null)}var lt=Object.assign,e0;function al(t){if(e0===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);e0=e&&e[1]||""}return`
`+e0+t}var t0=!1;function n0(t,e){if(!t||t0)return"";t0=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{t0=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?al(t):""}function D8(t){switch(t.tag){case 5:return al(t.type);case 16:return al("Lazy");case 13:return al("Suspense");case 19:return al("SuspenseList");case 0:case 2:case 15:return t=n0(t.type,!1),t;case 11:return t=n0(t.type.render,!1),t;case 1:return t=n0(t.type,!0),t;default:return""}}function dp(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ss:return"Fragment";case Cs:return"Portal";case lp:return"Profiler";case mm:return"StrictMode";case cp:return"Suspense";case up:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Q2:return(t.displayName||"Context")+".Consumer";case Y2:return(t._context.displayName||"Context")+".Provider";case gm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case wm:return e=t.displayName||null,e!==null?e:dp(t.type)||"Memo";case _i:e=t._payload,t=t._init;try{return dp(t(e))}catch{}}return null}function k8(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return dp(e);case 8:return e===mm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Gi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function J2(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function R8(t){var e=J2(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Su(t){t._valueTracker||(t._valueTracker=R8(t))}function e3(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=J2(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function yd(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function fp(t,e){var n=e.checked;return lt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Iw(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Gi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function t3(t,e){e=e.checked,e!=null&&pm(t,"checked",e,!1)}function hp(t,e){t3(t,e);var n=Gi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?pp(t,e.type,n):e.hasOwnProperty("defaultValue")&&pp(t,e.type,Gi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function $w(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function pp(t,e,n){(e!=="number"||yd(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ll=Array.isArray;function Ls(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Gi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function mp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(q(91));return lt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ow(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(q(92));if(ll(n)){if(1<n.length)throw Error(q(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Gi(n)}}function n3(t,e){var n=Gi(e.value),r=Gi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Dw(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function r3(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?r3(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Tu,i3=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Tu=Tu||document.createElement("div"),Tu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Tu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Dl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ml={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},N8=["Webkit","ms","Moz","O"];Object.keys(ml).forEach(function(t){N8.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ml[e]=ml[t]})});function o3(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ml.hasOwnProperty(t)&&ml[t]?(""+e).trim():e+"px"}function s3(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=o3(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var M8=lt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wp(t,e){if(e){if(M8[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(q(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(q(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(q(61))}if(e.style!=null&&typeof e.style!="object")throw Error(q(62))}}function yp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vp=null;function ym(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var bp=null,Bs=null,js=null;function kw(t){if(t=Gc(t)){if(typeof bp!="function")throw Error(q(280));var e=t.stateNode;e&&(e=Bf(e),bp(t.stateNode,t.type,e))}}function a3(t){Bs?js?js.push(t):js=[t]:Bs=t}function l3(){if(Bs){var t=Bs,e=js;if(js=Bs=null,kw(t),e)for(t=0;t<e.length;t++)kw(e[t])}}function c3(t,e){return t(e)}function u3(){}var r0=!1;function d3(t,e,n){if(r0)return t(e,n);r0=!0;try{return c3(t,e,n)}finally{r0=!1,(Bs!==null||js!==null)&&(u3(),l3())}}function kl(t,e){var n=t.stateNode;if(n===null)return null;var r=Bf(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(q(231,e,typeof n));return n}var xp=!1;if(ni)try{var Za={};Object.defineProperty(Za,"passive",{get:function(){xp=!0}}),window.addEventListener("test",Za,Za),window.removeEventListener("test",Za,Za)}catch{xp=!1}function U8(t,e,n,r,i,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var gl=!1,vd=null,bd=!1,Ep=null,L8={onError:function(t){gl=!0,vd=t}};function B8(t,e,n,r,i,o,s,a,l){gl=!1,vd=null,U8.apply(L8,arguments)}function j8(t,e,n,r,i,o,s,a,l){if(B8.apply(this,arguments),gl){if(gl){var c=vd;gl=!1,vd=null}else throw Error(q(198));bd||(bd=!0,Ep=c)}}function ss(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function f3(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Rw(t){if(ss(t)!==t)throw Error(q(188))}function F8(t){var e=t.alternate;if(!e){if(e=ss(t),e===null)throw Error(q(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Rw(i),t;if(o===r)return Rw(i),e;o=o.sibling}throw Error(q(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(q(189))}}if(n.alternate!==r)throw Error(q(190))}if(n.tag!==3)throw Error(q(188));return n.stateNode.current===n?t:e}function h3(t){return t=F8(t),t!==null?p3(t):null}function p3(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=p3(t);if(e!==null)return e;t=t.sibling}return null}var m3=On.unstable_scheduleCallback,Nw=On.unstable_cancelCallback,W8=On.unstable_shouldYield,z8=On.unstable_requestPaint,gt=On.unstable_now,H8=On.unstable_getCurrentPriorityLevel,vm=On.unstable_ImmediatePriority,g3=On.unstable_UserBlockingPriority,xd=On.unstable_NormalPriority,V8=On.unstable_LowPriority,w3=On.unstable_IdlePriority,Nf=null,$r=null;function q8(t){if($r&&typeof $r.onCommitFiberRoot=="function")try{$r.onCommitFiberRoot(Nf,t,void 0,(t.current.flags&128)===128)}catch{}}var ar=Math.clz32?Math.clz32:K8,Z8=Math.log,G8=Math.LN2;function K8(t){return t>>>=0,t===0?32:31-(Z8(t)/G8|0)|0}var Au=64,Pu=4194304;function cl(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ed(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=cl(a):(o&=s,o!==0&&(r=cl(o)))}else s=n&~i,s!==0?r=cl(s):o!==0&&(r=cl(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-ar(e),i=1<<n,r|=t[n],e&=~i;return r}function Y8(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Q8(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-ar(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=Y8(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function _p(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function y3(){var t=Au;return Au<<=1,!(Au&4194240)&&(Au=64),t}function i0(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function qc(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ar(e),t[e]=n}function X8(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-ar(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function bm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-ar(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ze=0;function v3(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var b3,xm,x3,E3,_3,Cp=!1,Iu=[],Mi=null,Ui=null,Li=null,Rl=new Map,Nl=new Map,Pi=[],J8="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mw(t,e){switch(t){case"focusin":case"focusout":Mi=null;break;case"dragenter":case"dragleave":Ui=null;break;case"mouseover":case"mouseout":Li=null;break;case"pointerover":case"pointerout":Rl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nl.delete(e.pointerId)}}function Ga(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=Gc(e),e!==null&&xm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function ex(t,e,n,r,i){switch(e){case"focusin":return Mi=Ga(Mi,t,e,n,r,i),!0;case"dragenter":return Ui=Ga(Ui,t,e,n,r,i),!0;case"mouseover":return Li=Ga(Li,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return Rl.set(o,Ga(Rl.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Nl.set(o,Ga(Nl.get(o)||null,t,e,n,r,i)),!0}return!1}function C3(t){var e=To(t.target);if(e!==null){var n=ss(e);if(n!==null){if(e=n.tag,e===13){if(e=f3(n),e!==null){t.blockedOn=e,_3(t.priority,function(){x3(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function td(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Sp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);vp=r,n.target.dispatchEvent(r),vp=null}else return e=Gc(n),e!==null&&xm(e),t.blockedOn=n,!1;e.shift()}return!0}function Uw(t,e,n){td(t)&&n.delete(e)}function tx(){Cp=!1,Mi!==null&&td(Mi)&&(Mi=null),Ui!==null&&td(Ui)&&(Ui=null),Li!==null&&td(Li)&&(Li=null),Rl.forEach(Uw),Nl.forEach(Uw)}function Ka(t,e){t.blockedOn===e&&(t.blockedOn=null,Cp||(Cp=!0,On.unstable_scheduleCallback(On.unstable_NormalPriority,tx)))}function Ml(t){function e(i){return Ka(i,t)}if(0<Iu.length){Ka(Iu[0],t);for(var n=1;n<Iu.length;n++){var r=Iu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Mi!==null&&Ka(Mi,t),Ui!==null&&Ka(Ui,t),Li!==null&&Ka(Li,t),Rl.forEach(e),Nl.forEach(e),n=0;n<Pi.length;n++)r=Pi[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Pi.length&&(n=Pi[0],n.blockedOn===null);)C3(n),n.blockedOn===null&&Pi.shift()}var Fs=pi.ReactCurrentBatchConfig,_d=!0;function nx(t,e,n,r){var i=ze,o=Fs.transition;Fs.transition=null;try{ze=1,Em(t,e,n,r)}finally{ze=i,Fs.transition=o}}function rx(t,e,n,r){var i=ze,o=Fs.transition;Fs.transition=null;try{ze=4,Em(t,e,n,r)}finally{ze=i,Fs.transition=o}}function Em(t,e,n,r){if(_d){var i=Sp(t,e,n,r);if(i===null)p0(t,e,r,Cd,n),Mw(t,r);else if(ex(i,t,e,n,r))r.stopPropagation();else if(Mw(t,r),e&4&&-1<J8.indexOf(t)){for(;i!==null;){var o=Gc(i);if(o!==null&&b3(o),o=Sp(t,e,n,r),o===null&&p0(t,e,r,Cd,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else p0(t,e,r,null,n)}}var Cd=null;function Sp(t,e,n,r){if(Cd=null,t=ym(r),t=To(t),t!==null)if(e=ss(t),e===null)t=null;else if(n=e.tag,n===13){if(t=f3(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Cd=t,null}function S3(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(H8()){case vm:return 1;case g3:return 4;case xd:case V8:return 16;case w3:return 536870912;default:return 16}default:return 16}}var ki=null,_m=null,nd=null;function T3(){if(nd)return nd;var t,e=_m,n=e.length,r,i="value"in ki?ki.value:ki.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return nd=i.slice(t,1<r?1-r:void 0)}function rd(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function $u(){return!0}function Lw(){return!1}function Rn(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?$u:Lw,this.isPropagationStopped=Lw,this}return lt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$u)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$u)},persist:function(){},isPersistent:$u}),e}var $a={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cm=Rn($a),Zc=lt({},$a,{view:0,detail:0}),ix=Rn(Zc),o0,s0,Ya,Mf=lt({},Zc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ya&&(Ya&&t.type==="mousemove"?(o0=t.screenX-Ya.screenX,s0=t.screenY-Ya.screenY):s0=o0=0,Ya=t),o0)},movementY:function(t){return"movementY"in t?t.movementY:s0}}),Bw=Rn(Mf),ox=lt({},Mf,{dataTransfer:0}),sx=Rn(ox),ax=lt({},Zc,{relatedTarget:0}),a0=Rn(ax),lx=lt({},$a,{animationName:0,elapsedTime:0,pseudoElement:0}),cx=Rn(lx),ux=lt({},$a,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),dx=Rn(ux),fx=lt({},$a,{data:0}),jw=Rn(fx),hx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},px={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=mx[t])?!!e[t]:!1}function Sm(){return gx}var wx=lt({},Zc,{key:function(t){if(t.key){var e=hx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=rd(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?px[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sm,charCode:function(t){return t.type==="keypress"?rd(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?rd(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),yx=Rn(wx),vx=lt({},Mf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fw=Rn(vx),bx=lt({},Zc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sm}),xx=Rn(bx),Ex=lt({},$a,{propertyName:0,elapsedTime:0,pseudoElement:0}),_x=Rn(Ex),Cx=lt({},Mf,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Sx=Rn(Cx),Tx=[9,13,27,32],Tm=ni&&"CompositionEvent"in window,wl=null;ni&&"documentMode"in document&&(wl=document.documentMode);var Ax=ni&&"TextEvent"in window&&!wl,A3=ni&&(!Tm||wl&&8<wl&&11>=wl),Ww=String.fromCharCode(32),zw=!1;function P3(t,e){switch(t){case"keyup":return Tx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function I3(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ts=!1;function Px(t,e){switch(t){case"compositionend":return I3(e);case"keypress":return e.which!==32?null:(zw=!0,Ww);case"textInput":return t=e.data,t===Ww&&zw?null:t;default:return null}}function Ix(t,e){if(Ts)return t==="compositionend"||!Tm&&P3(t,e)?(t=T3(),nd=_m=ki=null,Ts=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return A3&&e.locale!=="ko"?null:e.data;default:return null}}var $x={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hw(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!$x[t.type]:e==="textarea"}function $3(t,e,n,r){a3(r),e=Sd(e,"onChange"),0<e.length&&(n=new Cm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var yl=null,Ul=null;function Ox(t){F3(t,0)}function Uf(t){var e=Is(t);if(e3(e))return t}function Dx(t,e){if(t==="change")return e}var O3=!1;if(ni){var l0;if(ni){var c0="oninput"in document;if(!c0){var Vw=document.createElement("div");Vw.setAttribute("oninput","return;"),c0=typeof Vw.oninput=="function"}l0=c0}else l0=!1;O3=l0&&(!document.documentMode||9<document.documentMode)}function qw(){yl&&(yl.detachEvent("onpropertychange",D3),Ul=yl=null)}function D3(t){if(t.propertyName==="value"&&Uf(Ul)){var e=[];$3(e,Ul,t,ym(t)),d3(Ox,e)}}function kx(t,e,n){t==="focusin"?(qw(),yl=e,Ul=n,yl.attachEvent("onpropertychange",D3)):t==="focusout"&&qw()}function Rx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Uf(Ul)}function Nx(t,e){if(t==="click")return Uf(e)}function Mx(t,e){if(t==="input"||t==="change")return Uf(e)}function Ux(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var fr=typeof Object.is=="function"?Object.is:Ux;function Ll(t,e){if(fr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ap.call(e,i)||!fr(t[i],e[i]))return!1}return!0}function Zw(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Gw(t,e){var n=Zw(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zw(n)}}function k3(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?k3(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function R3(){for(var t=window,e=yd();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=yd(t.document)}return e}function Am(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Lx(t){var e=R3(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&k3(n.ownerDocument.documentElement,n)){if(r!==null&&Am(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=Gw(n,o);var s=Gw(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Bx=ni&&"documentMode"in document&&11>=document.documentMode,As=null,Tp=null,vl=null,Ap=!1;function Kw(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ap||As==null||As!==yd(r)||(r=As,"selectionStart"in r&&Am(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),vl&&Ll(vl,r)||(vl=r,r=Sd(Tp,"onSelect"),0<r.length&&(e=new Cm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=As)))}function Ou(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ps={animationend:Ou("Animation","AnimationEnd"),animationiteration:Ou("Animation","AnimationIteration"),animationstart:Ou("Animation","AnimationStart"),transitionend:Ou("Transition","TransitionEnd")},u0={},N3={};ni&&(N3=document.createElement("div").style,"AnimationEvent"in window||(delete Ps.animationend.animation,delete Ps.animationiteration.animation,delete Ps.animationstart.animation),"TransitionEvent"in window||delete Ps.transitionend.transition);function Lf(t){if(u0[t])return u0[t];if(!Ps[t])return t;var e=Ps[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in N3)return u0[t]=e[n];return t}var M3=Lf("animationend"),U3=Lf("animationiteration"),L3=Lf("animationstart"),B3=Lf("transitionend"),j3=new Map,Yw="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ro(t,e){j3.set(t,e),os(e,[t])}for(var d0=0;d0<Yw.length;d0++){var f0=Yw[d0],jx=f0.toLowerCase(),Fx=f0[0].toUpperCase()+f0.slice(1);ro(jx,"on"+Fx)}ro(M3,"onAnimationEnd");ro(U3,"onAnimationIteration");ro(L3,"onAnimationStart");ro("dblclick","onDoubleClick");ro("focusin","onFocus");ro("focusout","onBlur");ro(B3,"onTransitionEnd");Ys("onMouseEnter",["mouseout","mouseover"]);Ys("onMouseLeave",["mouseout","mouseover"]);Ys("onPointerEnter",["pointerout","pointerover"]);Ys("onPointerLeave",["pointerout","pointerover"]);os("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));os("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));os("onBeforeInput",["compositionend","keypress","textInput","paste"]);os("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));os("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));os("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ul="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wx=new Set("cancel close invalid load scroll toggle".split(" ").concat(ul));function Qw(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,j8(r,e,void 0,t),t.currentTarget=null}function F3(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Qw(i,a,c),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Qw(i,a,c),o=l}}}if(bd)throw t=Ep,bd=!1,Ep=null,t}function Je(t,e){var n=e[Dp];n===void 0&&(n=e[Dp]=new Set);var r=t+"__bubble";n.has(r)||(W3(e,t,2,!1),n.add(r))}function h0(t,e,n){var r=0;e&&(r|=4),W3(n,t,r,e)}var Du="_reactListening"+Math.random().toString(36).slice(2);function Bl(t){if(!t[Du]){t[Du]=!0,K2.forEach(function(n){n!=="selectionchange"&&(Wx.has(n)||h0(n,!1,t),h0(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Du]||(e[Du]=!0,h0("selectionchange",!1,e))}}function W3(t,e,n,r){switch(S3(e)){case 1:var i=nx;break;case 4:i=rx;break;default:i=Em}n=i.bind(null,e,n,t),i=void 0,!xp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function p0(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=To(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}d3(function(){var c=o,u=ym(n),d=[];e:{var p=j3.get(t);if(p!==void 0){var w=Cm,y=t;switch(t){case"keypress":if(rd(n)===0)break e;case"keydown":case"keyup":w=yx;break;case"focusin":y="focus",w=a0;break;case"focusout":y="blur",w=a0;break;case"beforeblur":case"afterblur":w=a0;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Bw;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=sx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=xx;break;case M3:case U3:case L3:w=cx;break;case B3:w=_x;break;case"scroll":w=ix;break;case"wheel":w=Sx;break;case"copy":case"cut":case"paste":w=dx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Fw}var E=(e&4)!==0,C=!E&&t==="scroll",b=E?p!==null?p+"Capture":null:p;E=[];for(var m=c,v;m!==null;){v=m;var x=v.stateNode;if(v.tag===5&&x!==null&&(v=x,b!==null&&(x=kl(m,b),x!=null&&E.push(jl(m,x,v)))),C)break;m=m.return}0<E.length&&(p=new w(p,y,null,n,u),d.push({event:p,listeners:E}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",p&&n!==vp&&(y=n.relatedTarget||n.fromElement)&&(To(y)||y[ri]))break e;if((w||p)&&(p=u.window===u?u:(p=u.ownerDocument)?p.defaultView||p.parentWindow:window,w?(y=n.relatedTarget||n.toElement,w=c,y=y?To(y):null,y!==null&&(C=ss(y),y!==C||y.tag!==5&&y.tag!==6)&&(y=null)):(w=null,y=c),w!==y)){if(E=Bw,x="onMouseLeave",b="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(E=Fw,x="onPointerLeave",b="onPointerEnter",m="pointer"),C=w==null?p:Is(w),v=y==null?p:Is(y),p=new E(x,m+"leave",w,n,u),p.target=C,p.relatedTarget=v,x=null,To(u)===c&&(E=new E(b,m+"enter",y,n,u),E.target=v,E.relatedTarget=C,x=E),C=x,w&&y)t:{for(E=w,b=y,m=0,v=E;v;v=ps(v))m++;for(v=0,x=b;x;x=ps(x))v++;for(;0<m-v;)E=ps(E),m--;for(;0<v-m;)b=ps(b),v--;for(;m--;){if(E===b||b!==null&&E===b.alternate)break t;E=ps(E),b=ps(b)}E=null}else E=null;w!==null&&Xw(d,p,w,E,!1),y!==null&&C!==null&&Xw(d,C,y,E,!0)}}e:{if(p=c?Is(c):window,w=p.nodeName&&p.nodeName.toLowerCase(),w==="select"||w==="input"&&p.type==="file")var _=Dx;else if(Hw(p))if(O3)_=Mx;else{_=Rx;var S=kx}else(w=p.nodeName)&&w.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(_=Nx);if(_&&(_=_(t,c))){$3(d,_,n,u);break e}S&&S(t,p,c),t==="focusout"&&(S=p._wrapperState)&&S.controlled&&p.type==="number"&&pp(p,"number",p.value)}switch(S=c?Is(c):window,t){case"focusin":(Hw(S)||S.contentEditable==="true")&&(As=S,Tp=c,vl=null);break;case"focusout":vl=Tp=As=null;break;case"mousedown":Ap=!0;break;case"contextmenu":case"mouseup":case"dragend":Ap=!1,Kw(d,n,u);break;case"selectionchange":if(Bx)break;case"keydown":case"keyup":Kw(d,n,u)}var f;if(Tm)e:{switch(t){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Ts?P3(t,n)&&(A="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(A3&&n.locale!=="ko"&&(Ts||A!=="onCompositionStart"?A==="onCompositionEnd"&&Ts&&(f=T3()):(ki=u,_m="value"in ki?ki.value:ki.textContent,Ts=!0)),S=Sd(c,A),0<S.length&&(A=new jw(A,t,null,n,u),d.push({event:A,listeners:S}),f?A.data=f:(f=I3(n),f!==null&&(A.data=f)))),(f=Ax?Px(t,n):Ix(t,n))&&(c=Sd(c,"onBeforeInput"),0<c.length&&(u=new jw("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=f))}F3(d,e)})}function jl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Sd(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=kl(t,n),o!=null&&r.unshift(jl(t,o,i)),o=kl(t,e),o!=null&&r.push(jl(t,o,i))),t=t.return}return r}function ps(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Xw(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=kl(n,o),l!=null&&s.unshift(jl(n,l,a))):i||(l=kl(n,o),l!=null&&s.push(jl(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var zx=/\r\n?/g,Hx=/\u0000|\uFFFD/g;function Jw(t){return(typeof t=="string"?t:""+t).replace(zx,`
`).replace(Hx,"")}function ku(t,e,n){if(e=Jw(e),Jw(t)!==e&&n)throw Error(q(425))}function Td(){}var Pp=null,Ip=null;function $p(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Op=typeof setTimeout=="function"?setTimeout:void 0,Vx=typeof clearTimeout=="function"?clearTimeout:void 0,ey=typeof Promise=="function"?Promise:void 0,qx=typeof queueMicrotask=="function"?queueMicrotask:typeof ey<"u"?function(t){return ey.resolve(null).then(t).catch(Zx)}:Op;function Zx(t){setTimeout(function(){throw t})}function m0(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ml(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ml(e)}function Bi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ty(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Oa=Math.random().toString(36).slice(2),Pr="__reactFiber$"+Oa,Fl="__reactProps$"+Oa,ri="__reactContainer$"+Oa,Dp="__reactEvents$"+Oa,Gx="__reactListeners$"+Oa,Kx="__reactHandles$"+Oa;function To(t){var e=t[Pr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ri]||n[Pr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ty(t);t!==null;){if(n=t[Pr])return n;t=ty(t)}return e}t=n,n=t.parentNode}return null}function Gc(t){return t=t[Pr]||t[ri],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Is(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(q(33))}function Bf(t){return t[Fl]||null}var kp=[],$s=-1;function io(t){return{current:t}}function et(t){0>$s||(t.current=kp[$s],kp[$s]=null,$s--)}function Qe(t,e){$s++,kp[$s]=t.current,t.current=e}var Ki={},qt=io(Ki),hn=io(!1),Uo=Ki;function Qs(t,e){var n=t.type.contextTypes;if(!n)return Ki;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function pn(t){return t=t.childContextTypes,t!=null}function Ad(){et(hn),et(qt)}function ny(t,e,n){if(qt.current!==Ki)throw Error(q(168));Qe(qt,e),Qe(hn,n)}function z3(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(q(108,k8(t)||"Unknown",i));return lt({},n,r)}function Pd(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ki,Uo=qt.current,Qe(qt,t),Qe(hn,hn.current),!0}function ry(t,e,n){var r=t.stateNode;if(!r)throw Error(q(169));n?(t=z3(t,e,Uo),r.__reactInternalMemoizedMergedChildContext=t,et(hn),et(qt),Qe(qt,t)):et(hn),Qe(hn,n)}var Kr=null,jf=!1,g0=!1;function H3(t){Kr===null?Kr=[t]:Kr.push(t)}function Yx(t){jf=!0,H3(t)}function oo(){if(!g0&&Kr!==null){g0=!0;var t=0,e=ze;try{var n=Kr;for(ze=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Kr=null,jf=!1}catch(i){throw Kr!==null&&(Kr=Kr.slice(t+1)),m3(vm,oo),i}finally{ze=e,g0=!1}}return null}var Os=[],Ds=0,Id=null,$d=0,Ln=[],Bn=0,Lo=null,Yr=1,Qr="";function Co(t,e){Os[Ds++]=$d,Os[Ds++]=Id,Id=t,$d=e}function V3(t,e,n){Ln[Bn++]=Yr,Ln[Bn++]=Qr,Ln[Bn++]=Lo,Lo=t;var r=Yr;t=Qr;var i=32-ar(r)-1;r&=~(1<<i),n+=1;var o=32-ar(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Yr=1<<32-ar(e)+i|n<<i|r,Qr=o+t}else Yr=1<<o|n<<i|r,Qr=t}function Pm(t){t.return!==null&&(Co(t,1),V3(t,1,0))}function Im(t){for(;t===Id;)Id=Os[--Ds],Os[Ds]=null,$d=Os[--Ds],Os[Ds]=null;for(;t===Lo;)Lo=Ln[--Bn],Ln[Bn]=null,Qr=Ln[--Bn],Ln[Bn]=null,Yr=Ln[--Bn],Ln[Bn]=null}var $n=null,Pn=null,nt=!1,ir=null;function q3(t,e){var n=jn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function iy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,$n=t,Pn=Bi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,$n=t,Pn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Lo!==null?{id:Yr,overflow:Qr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=jn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,$n=t,Pn=null,!0):!1;default:return!1}}function Rp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Np(t){if(nt){var e=Pn;if(e){var n=e;if(!iy(t,e)){if(Rp(t))throw Error(q(418));e=Bi(n.nextSibling);var r=$n;e&&iy(t,e)?q3(r,n):(t.flags=t.flags&-4097|2,nt=!1,$n=t)}}else{if(Rp(t))throw Error(q(418));t.flags=t.flags&-4097|2,nt=!1,$n=t}}}function oy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;$n=t}function Ru(t){if(t!==$n)return!1;if(!nt)return oy(t),nt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!$p(t.type,t.memoizedProps)),e&&(e=Pn)){if(Rp(t))throw Z3(),Error(q(418));for(;e;)q3(t,e),e=Bi(e.nextSibling)}if(oy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(q(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Pn=Bi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Pn=null}}else Pn=$n?Bi(t.stateNode.nextSibling):null;return!0}function Z3(){for(var t=Pn;t;)t=Bi(t.nextSibling)}function Xs(){Pn=$n=null,nt=!1}function $m(t){ir===null?ir=[t]:ir.push(t)}var Qx=pi.ReactCurrentBatchConfig;function Qa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(q(309));var r=n.stateNode}if(!r)throw Error(q(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(q(284));if(!n._owner)throw Error(q(290,t))}return t}function Nu(t,e){throw t=Object.prototype.toString.call(e),Error(q(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function sy(t){var e=t._init;return e(t._payload)}function G3(t){function e(b,m){if(t){var v=b.deletions;v===null?(b.deletions=[m],b.flags|=16):v.push(m)}}function n(b,m){if(!t)return null;for(;m!==null;)e(b,m),m=m.sibling;return null}function r(b,m){for(b=new Map;m!==null;)m.key!==null?b.set(m.key,m):b.set(m.index,m),m=m.sibling;return b}function i(b,m){return b=zi(b,m),b.index=0,b.sibling=null,b}function o(b,m,v){return b.index=v,t?(v=b.alternate,v!==null?(v=v.index,v<m?(b.flags|=2,m):v):(b.flags|=2,m)):(b.flags|=1048576,m)}function s(b){return t&&b.alternate===null&&(b.flags|=2),b}function a(b,m,v,x){return m===null||m.tag!==6?(m=_0(v,b.mode,x),m.return=b,m):(m=i(m,v),m.return=b,m)}function l(b,m,v,x){var _=v.type;return _===Ss?u(b,m,v.props.children,x,v.key):m!==null&&(m.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===_i&&sy(_)===m.type)?(x=i(m,v.props),x.ref=Qa(b,m,v),x.return=b,x):(x=ud(v.type,v.key,v.props,null,b.mode,x),x.ref=Qa(b,m,v),x.return=b,x)}function c(b,m,v,x){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=C0(v,b.mode,x),m.return=b,m):(m=i(m,v.children||[]),m.return=b,m)}function u(b,m,v,x,_){return m===null||m.tag!==7?(m=ko(v,b.mode,x,_),m.return=b,m):(m=i(m,v),m.return=b,m)}function d(b,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=_0(""+m,b.mode,v),m.return=b,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Cu:return v=ud(m.type,m.key,m.props,null,b.mode,v),v.ref=Qa(b,null,m),v.return=b,v;case Cs:return m=C0(m,b.mode,v),m.return=b,m;case _i:var x=m._init;return d(b,x(m._payload),v)}if(ll(m)||qa(m))return m=ko(m,b.mode,v,null),m.return=b,m;Nu(b,m)}return null}function p(b,m,v,x){var _=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return _!==null?null:a(b,m,""+v,x);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Cu:return v.key===_?l(b,m,v,x):null;case Cs:return v.key===_?c(b,m,v,x):null;case _i:return _=v._init,p(b,m,_(v._payload),x)}if(ll(v)||qa(v))return _!==null?null:u(b,m,v,x,null);Nu(b,v)}return null}function w(b,m,v,x,_){if(typeof x=="string"&&x!==""||typeof x=="number")return b=b.get(v)||null,a(m,b,""+x,_);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Cu:return b=b.get(x.key===null?v:x.key)||null,l(m,b,x,_);case Cs:return b=b.get(x.key===null?v:x.key)||null,c(m,b,x,_);case _i:var S=x._init;return w(b,m,v,S(x._payload),_)}if(ll(x)||qa(x))return b=b.get(v)||null,u(m,b,x,_,null);Nu(m,x)}return null}function y(b,m,v,x){for(var _=null,S=null,f=m,A=m=0,R=null;f!==null&&A<v.length;A++){f.index>A?(R=f,f=null):R=f.sibling;var D=p(b,f,v[A],x);if(D===null){f===null&&(f=R);break}t&&f&&D.alternate===null&&e(b,f),m=o(D,m,A),S===null?_=D:S.sibling=D,S=D,f=R}if(A===v.length)return n(b,f),nt&&Co(b,A),_;if(f===null){for(;A<v.length;A++)f=d(b,v[A],x),f!==null&&(m=o(f,m,A),S===null?_=f:S.sibling=f,S=f);return nt&&Co(b,A),_}for(f=r(b,f);A<v.length;A++)R=w(f,b,A,v[A],x),R!==null&&(t&&R.alternate!==null&&f.delete(R.key===null?A:R.key),m=o(R,m,A),S===null?_=R:S.sibling=R,S=R);return t&&f.forEach(function(M){return e(b,M)}),nt&&Co(b,A),_}function E(b,m,v,x){var _=qa(v);if(typeof _!="function")throw Error(q(150));if(v=_.call(v),v==null)throw Error(q(151));for(var S=_=null,f=m,A=m=0,R=null,D=v.next();f!==null&&!D.done;A++,D=v.next()){f.index>A?(R=f,f=null):R=f.sibling;var M=p(b,f,D.value,x);if(M===null){f===null&&(f=R);break}t&&f&&M.alternate===null&&e(b,f),m=o(M,m,A),S===null?_=M:S.sibling=M,S=M,f=R}if(D.done)return n(b,f),nt&&Co(b,A),_;if(f===null){for(;!D.done;A++,D=v.next())D=d(b,D.value,x),D!==null&&(m=o(D,m,A),S===null?_=D:S.sibling=D,S=D);return nt&&Co(b,A),_}for(f=r(b,f);!D.done;A++,D=v.next())D=w(f,b,A,D.value,x),D!==null&&(t&&D.alternate!==null&&f.delete(D.key===null?A:D.key),m=o(D,m,A),S===null?_=D:S.sibling=D,S=D);return t&&f.forEach(function(ee){return e(b,ee)}),nt&&Co(b,A),_}function C(b,m,v,x){if(typeof v=="object"&&v!==null&&v.type===Ss&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Cu:e:{for(var _=v.key,S=m;S!==null;){if(S.key===_){if(_=v.type,_===Ss){if(S.tag===7){n(b,S.sibling),m=i(S,v.props.children),m.return=b,b=m;break e}}else if(S.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===_i&&sy(_)===S.type){n(b,S.sibling),m=i(S,v.props),m.ref=Qa(b,S,v),m.return=b,b=m;break e}n(b,S);break}else e(b,S);S=S.sibling}v.type===Ss?(m=ko(v.props.children,b.mode,x,v.key),m.return=b,b=m):(x=ud(v.type,v.key,v.props,null,b.mode,x),x.ref=Qa(b,m,v),x.return=b,b=x)}return s(b);case Cs:e:{for(S=v.key;m!==null;){if(m.key===S)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(b,m.sibling),m=i(m,v.children||[]),m.return=b,b=m;break e}else{n(b,m);break}else e(b,m);m=m.sibling}m=C0(v,b.mode,x),m.return=b,b=m}return s(b);case _i:return S=v._init,C(b,m,S(v._payload),x)}if(ll(v))return y(b,m,v,x);if(qa(v))return E(b,m,v,x);Nu(b,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(b,m.sibling),m=i(m,v),m.return=b,b=m):(n(b,m),m=_0(v,b.mode,x),m.return=b,b=m),s(b)):n(b,m)}return C}var Js=G3(!0),K3=G3(!1),Od=io(null),Dd=null,ks=null,Om=null;function Dm(){Om=ks=Dd=null}function km(t){var e=Od.current;et(Od),t._currentValue=e}function Mp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ws(t,e){Dd=t,Om=ks=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(dn=!0),t.firstContext=null)}function Hn(t){var e=t._currentValue;if(Om!==t)if(t={context:t,memoizedValue:e,next:null},ks===null){if(Dd===null)throw Error(q(308));ks=t,Dd.dependencies={lanes:0,firstContext:t}}else ks=ks.next=t;return e}var Ao=null;function Rm(t){Ao===null?Ao=[t]:Ao.push(t)}function Y3(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Rm(e)):(n.next=i.next,i.next=n),e.interleaved=n,ii(t,r)}function ii(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ci=!1;function Nm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Q3(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Jr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ji(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Be&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,ii(t,n)}return i=r.interleaved,i===null?(e.next=e,Rm(r)):(e.next=i.next,i.next=e),r.interleaved=e,ii(t,n)}function id(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,bm(t,n)}}function ay(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function kd(t,e,n,r){var i=t.updateQueue;Ci=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==s&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(o!==null){var d=i.baseState;s=0,u=c=l=null,a=o;do{var p=a.lane,w=a.eventTime;if((r&p)===p){u!==null&&(u=u.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,E=a;switch(p=e,w=n,E.tag){case 1:if(y=E.payload,typeof y=="function"){d=y.call(w,d,p);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=E.payload,p=typeof y=="function"?y.call(w,d,p):y,p==null)break e;d=lt({},d,p);break e;case 2:Ci=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else w={eventTime:w,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=w,l=d):u=u.next=w,s|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(u===null&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);jo|=s,t.lanes=s,t.memoizedState=d}}function ly(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(q(191,i));i.call(r)}}}var Kc={},Or=io(Kc),Wl=io(Kc),zl=io(Kc);function Po(t){if(t===Kc)throw Error(q(174));return t}function Mm(t,e){switch(Qe(zl,e),Qe(Wl,t),Qe(Or,Kc),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:gp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=gp(e,t)}et(Or),Qe(Or,e)}function ea(){et(Or),et(Wl),et(zl)}function X3(t){Po(zl.current);var e=Po(Or.current),n=gp(e,t.type);e!==n&&(Qe(Wl,t),Qe(Or,n))}function Um(t){Wl.current===t&&(et(Or),et(Wl))}var ot=io(0);function Rd(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var w0=[];function Lm(){for(var t=0;t<w0.length;t++)w0[t]._workInProgressVersionPrimary=null;w0.length=0}var od=pi.ReactCurrentDispatcher,y0=pi.ReactCurrentBatchConfig,Bo=0,at=null,St=null,kt=null,Nd=!1,bl=!1,Hl=0,Xx=0;function jt(){throw Error(q(321))}function Bm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!fr(t[n],e[n]))return!1;return!0}function jm(t,e,n,r,i,o){if(Bo=o,at=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,od.current=t===null||t.memoizedState===null?nE:rE,t=n(r,i),bl){o=0;do{if(bl=!1,Hl=0,25<=o)throw Error(q(301));o+=1,kt=St=null,e.updateQueue=null,od.current=iE,t=n(r,i)}while(bl)}if(od.current=Md,e=St!==null&&St.next!==null,Bo=0,kt=St=at=null,Nd=!1,e)throw Error(q(300));return t}function Fm(){var t=Hl!==0;return Hl=0,t}function Ar(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?at.memoizedState=kt=t:kt=kt.next=t,kt}function Vn(){if(St===null){var t=at.alternate;t=t!==null?t.memoizedState:null}else t=St.next;var e=kt===null?at.memoizedState:kt.next;if(e!==null)kt=e,St=t;else{if(t===null)throw Error(q(310));St=t,t={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},kt===null?at.memoizedState=kt=t:kt=kt.next=t}return kt}function Vl(t,e){return typeof e=="function"?e(t):e}function v0(t){var e=Vn(),n=e.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=t;var r=St,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,c=o;do{var u=c.lane;if((Bo&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,s=r):l=l.next=d,at.lanes|=u,jo|=u}c=c.next}while(c!==null&&c!==o);l===null?s=r:l.next=a,fr(r,e.memoizedState)||(dn=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,at.lanes|=o,jo|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function b0(t){var e=Vn(),n=e.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);fr(o,e.memoizedState)||(dn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function J3(){}function eb(t,e){var n=at,r=Vn(),i=e(),o=!fr(r.memoizedState,i);if(o&&(r.memoizedState=i,dn=!0),r=r.queue,Wm(rb.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||kt!==null&&kt.memoizedState.tag&1){if(n.flags|=2048,ql(9,nb.bind(null,n,r,i,e),void 0,null),Rt===null)throw Error(q(349));Bo&30||tb(n,e,i)}return i}function tb(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=at.updateQueue,e===null?(e={lastEffect:null,stores:null},at.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function nb(t,e,n,r){e.value=n,e.getSnapshot=r,ib(e)&&ob(t)}function rb(t,e,n){return n(function(){ib(e)&&ob(t)})}function ib(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!fr(t,n)}catch{return!0}}function ob(t){var e=ii(t,1);e!==null&&lr(e,t,1,-1)}function cy(t){var e=Ar();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vl,lastRenderedState:t},e.queue=t,t=t.dispatch=tE.bind(null,at,t),[e.memoizedState,t]}function ql(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=at.updateQueue,e===null?(e={lastEffect:null,stores:null},at.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function sb(){return Vn().memoizedState}function sd(t,e,n,r){var i=Ar();at.flags|=t,i.memoizedState=ql(1|e,n,void 0,r===void 0?null:r)}function Ff(t,e,n,r){var i=Vn();r=r===void 0?null:r;var o=void 0;if(St!==null){var s=St.memoizedState;if(o=s.destroy,r!==null&&Bm(r,s.deps)){i.memoizedState=ql(e,n,o,r);return}}at.flags|=t,i.memoizedState=ql(1|e,n,o,r)}function uy(t,e){return sd(8390656,8,t,e)}function Wm(t,e){return Ff(2048,8,t,e)}function ab(t,e){return Ff(4,2,t,e)}function lb(t,e){return Ff(4,4,t,e)}function cb(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ub(t,e,n){return n=n!=null?n.concat([t]):null,Ff(4,4,cb.bind(null,e,t),n)}function zm(){}function db(t,e){var n=Vn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Bm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function fb(t,e){var n=Vn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Bm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function hb(t,e,n){return Bo&21?(fr(n,e)||(n=y3(),at.lanes|=n,jo|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,dn=!0),t.memoizedState=n)}function Jx(t,e){var n=ze;ze=n!==0&&4>n?n:4,t(!0);var r=y0.transition;y0.transition={};try{t(!1),e()}finally{ze=n,y0.transition=r}}function pb(){return Vn().memoizedState}function eE(t,e,n){var r=Wi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},mb(t))gb(e,n);else if(n=Y3(t,e,n,r),n!==null){var i=Jt();lr(n,t,r,i),wb(n,e,r)}}function tE(t,e,n){var r=Wi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(mb(t))gb(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,fr(a,s)){var l=e.interleaved;l===null?(i.next=i,Rm(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Y3(t,e,i,r),n!==null&&(i=Jt(),lr(n,t,r,i),wb(n,e,r))}}function mb(t){var e=t.alternate;return t===at||e!==null&&e===at}function gb(t,e){bl=Nd=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function wb(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,bm(t,n)}}var Md={readContext:Hn,useCallback:jt,useContext:jt,useEffect:jt,useImperativeHandle:jt,useInsertionEffect:jt,useLayoutEffect:jt,useMemo:jt,useReducer:jt,useRef:jt,useState:jt,useDebugValue:jt,useDeferredValue:jt,useTransition:jt,useMutableSource:jt,useSyncExternalStore:jt,useId:jt,unstable_isNewReconciler:!1},nE={readContext:Hn,useCallback:function(t,e){return Ar().memoizedState=[t,e===void 0?null:e],t},useContext:Hn,useEffect:uy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,sd(4194308,4,cb.bind(null,e,t),n)},useLayoutEffect:function(t,e){return sd(4194308,4,t,e)},useInsertionEffect:function(t,e){return sd(4,2,t,e)},useMemo:function(t,e){var n=Ar();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Ar();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=eE.bind(null,at,t),[r.memoizedState,t]},useRef:function(t){var e=Ar();return t={current:t},e.memoizedState=t},useState:cy,useDebugValue:zm,useDeferredValue:function(t){return Ar().memoizedState=t},useTransition:function(){var t=cy(!1),e=t[0];return t=Jx.bind(null,t[1]),Ar().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=at,i=Ar();if(nt){if(n===void 0)throw Error(q(407));n=n()}else{if(n=e(),Rt===null)throw Error(q(349));Bo&30||tb(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,uy(rb.bind(null,r,o,t),[t]),r.flags|=2048,ql(9,nb.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=Ar(),e=Rt.identifierPrefix;if(nt){var n=Qr,r=Yr;n=(r&~(1<<32-ar(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Hl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Xx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},rE={readContext:Hn,useCallback:db,useContext:Hn,useEffect:Wm,useImperativeHandle:ub,useInsertionEffect:ab,useLayoutEffect:lb,useMemo:fb,useReducer:v0,useRef:sb,useState:function(){return v0(Vl)},useDebugValue:zm,useDeferredValue:function(t){var e=Vn();return hb(e,St.memoizedState,t)},useTransition:function(){var t=v0(Vl)[0],e=Vn().memoizedState;return[t,e]},useMutableSource:J3,useSyncExternalStore:eb,useId:pb,unstable_isNewReconciler:!1},iE={readContext:Hn,useCallback:db,useContext:Hn,useEffect:Wm,useImperativeHandle:ub,useInsertionEffect:ab,useLayoutEffect:lb,useMemo:fb,useReducer:b0,useRef:sb,useState:function(){return b0(Vl)},useDebugValue:zm,useDeferredValue:function(t){var e=Vn();return St===null?e.memoizedState=t:hb(e,St.memoizedState,t)},useTransition:function(){var t=b0(Vl)[0],e=Vn().memoizedState;return[t,e]},useMutableSource:J3,useSyncExternalStore:eb,useId:pb,unstable_isNewReconciler:!1};function tr(t,e){if(t&&t.defaultProps){e=lt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Up(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:lt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Wf={isMounted:function(t){return(t=t._reactInternals)?ss(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Jt(),i=Wi(t),o=Jr(r,i);o.payload=e,n!=null&&(o.callback=n),e=ji(t,o,i),e!==null&&(lr(e,t,i,r),id(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Jt(),i=Wi(t),o=Jr(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=ji(t,o,i),e!==null&&(lr(e,t,i,r),id(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Jt(),r=Wi(t),i=Jr(n,r);i.tag=2,e!=null&&(i.callback=e),e=ji(t,i,r),e!==null&&(lr(e,t,r,n),id(e,t,r))}};function dy(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!Ll(n,r)||!Ll(i,o):!0}function yb(t,e,n){var r=!1,i=Ki,o=e.contextType;return typeof o=="object"&&o!==null?o=Hn(o):(i=pn(e)?Uo:qt.current,r=e.contextTypes,o=(r=r!=null)?Qs(t,i):Ki),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Wf,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function fy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Wf.enqueueReplaceState(e,e.state,null)}function Lp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Nm(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=Hn(o):(o=pn(e)?Uo:qt.current,i.context=Qs(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Up(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Wf.enqueueReplaceState(i,i.state,null),kd(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ta(t,e){try{var n="",r=e;do n+=D8(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function x0(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Bp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var oE=typeof WeakMap=="function"?WeakMap:Map;function vb(t,e,n){n=Jr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ld||(Ld=!0,Kp=r),Bp(t,e)},n}function bb(t,e,n){n=Jr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Bp(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Bp(t,e),typeof r!="function"&&(Fi===null?Fi=new Set([this]):Fi.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function hy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new oE;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=vE.bind(null,t,e,n),e.then(t,t))}function py(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function my(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Jr(-1,1),e.tag=2,ji(n,e,1))),n.lanes|=1),t)}var sE=pi.ReactCurrentOwner,dn=!1;function Kt(t,e,n,r){e.child=t===null?K3(e,null,n,r):Js(e,t.child,n,r)}function gy(t,e,n,r,i){n=n.render;var o=e.ref;return Ws(e,i),r=jm(t,e,n,r,o,i),n=Fm(),t!==null&&!dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,oi(t,e,i)):(nt&&n&&Pm(e),e.flags|=1,Kt(t,e,r,i),e.child)}function wy(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!Qm(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,xb(t,e,o,r,i)):(t=ud(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ll,n(s,r)&&t.ref===e.ref)return oi(t,e,i)}return e.flags|=1,t=zi(o,r),t.ref=e.ref,t.return=e,e.child=t}function xb(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(Ll(o,r)&&t.ref===e.ref)if(dn=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(dn=!0);else return e.lanes=t.lanes,oi(t,e,i)}return jp(t,e,n,r,i)}function Eb(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Qe(Ns,Tn),Tn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Qe(Ns,Tn),Tn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Qe(Ns,Tn),Tn|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,Qe(Ns,Tn),Tn|=r;return Kt(t,e,i,n),e.child}function _b(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function jp(t,e,n,r,i){var o=pn(n)?Uo:qt.current;return o=Qs(e,o),Ws(e,i),n=jm(t,e,n,r,o,i),r=Fm(),t!==null&&!dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,oi(t,e,i)):(nt&&r&&Pm(e),e.flags|=1,Kt(t,e,n,i),e.child)}function yy(t,e,n,r,i){if(pn(n)){var o=!0;Pd(e)}else o=!1;if(Ws(e,i),e.stateNode===null)ad(t,e),yb(e,n,r),Lp(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Hn(c):(c=pn(n)?Uo:qt.current,c=Qs(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==c)&&fy(e,s,r,c),Ci=!1;var p=e.memoizedState;s.state=p,kd(e,r,s,i),l=e.memoizedState,a!==r||p!==l||hn.current||Ci?(typeof u=="function"&&(Up(e,n,u,r),l=e.memoizedState),(a=Ci||dy(e,n,a,r,p,l,c))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),s.props=r,s.state=l,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,Q3(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:tr(e.type,a),s.props=c,d=e.pendingProps,p=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Hn(l):(l=pn(n)?Uo:qt.current,l=Qs(e,l));var w=n.getDerivedStateFromProps;(u=typeof w=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||p!==l)&&fy(e,s,r,l),Ci=!1,p=e.memoizedState,s.state=p,kd(e,r,s,i);var y=e.memoizedState;a!==d||p!==y||hn.current||Ci?(typeof w=="function"&&(Up(e,n,w,r),y=e.memoizedState),(c=Ci||dy(e,n,c,r,p,y,l)||!1)?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),s.props=r,s.state=y,s.context=l,r=c):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return Fp(t,e,n,r,o,i)}function Fp(t,e,n,r,i,o){_b(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&ry(e,n,!1),oi(t,e,o);r=e.stateNode,sE.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=Js(e,t.child,null,o),e.child=Js(e,null,a,o)):Kt(t,e,a,o),e.memoizedState=r.state,i&&ry(e,n,!0),e.child}function Cb(t){var e=t.stateNode;e.pendingContext?ny(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ny(t,e.context,!1),Mm(t,e.containerInfo)}function vy(t,e,n,r,i){return Xs(),$m(i),e.flags|=256,Kt(t,e,n,r),e.child}var Wp={dehydrated:null,treeContext:null,retryLane:0};function zp(t){return{baseLanes:t,cachePool:null,transitions:null}}function Sb(t,e,n){var r=e.pendingProps,i=ot.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Qe(ot,i&1),t===null)return Np(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Vf(s,r,0,null),t=ko(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=zp(n),e.memoizedState=Wp,t):Hm(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return aE(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=zi(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=zi(a,o):(o=ko(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?zp(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=Wp,r}return o=t.child,t=o.sibling,r=zi(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Hm(t,e){return e=Vf({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Mu(t,e,n,r){return r!==null&&$m(r),Js(e,t.child,null,n),t=Hm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function aE(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=x0(Error(q(422))),Mu(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=Vf({mode:"visible",children:r.children},i,0,null),o=ko(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&Js(e,t.child,null,s),e.child.memoizedState=zp(s),e.memoizedState=Wp,o);if(!(e.mode&1))return Mu(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(q(419)),r=x0(o,r,void 0),Mu(t,e,s,r)}if(a=(s&t.childLanes)!==0,dn||a){if(r=Rt,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,ii(t,i),lr(r,t,i,-1))}return Ym(),r=x0(Error(q(421))),Mu(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=bE.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,Pn=Bi(i.nextSibling),$n=e,nt=!0,ir=null,t!==null&&(Ln[Bn++]=Yr,Ln[Bn++]=Qr,Ln[Bn++]=Lo,Yr=t.id,Qr=t.overflow,Lo=e),e=Hm(e,r.children),e.flags|=4096,e)}function by(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Mp(t.return,e,n)}function E0(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Tb(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(Kt(t,e,r.children,n),r=ot.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&by(t,n,e);else if(t.tag===19)by(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Qe(ot,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Rd(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),E0(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Rd(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}E0(e,!0,n,null,o);break;case"together":E0(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ad(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function oi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),jo|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(q(153));if(e.child!==null){for(t=e.child,n=zi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=zi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function lE(t,e,n){switch(e.tag){case 3:Cb(e),Xs();break;case 5:X3(e);break;case 1:pn(e.type)&&Pd(e);break;case 4:Mm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Qe(Od,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Qe(ot,ot.current&1),e.flags|=128,null):n&e.child.childLanes?Sb(t,e,n):(Qe(ot,ot.current&1),t=oi(t,e,n),t!==null?t.sibling:null);Qe(ot,ot.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Tb(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Qe(ot,ot.current),r)break;return null;case 22:case 23:return e.lanes=0,Eb(t,e,n)}return oi(t,e,n)}var Ab,Hp,Pb,Ib;Ab=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Hp=function(){};Pb=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Po(Or.current);var o=null;switch(n){case"input":i=fp(t,i),r=fp(t,r),o=[];break;case"select":i=lt({},i,{value:void 0}),r=lt({},r,{value:void 0}),o=[];break;case"textarea":i=mp(t,i),r=mp(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Td)}wp(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ol.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ol.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Je("scroll",t),o||a===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(e.updateQueue=c)&&(e.flags|=4)}};Ib=function(t,e,n,r){n!==r&&(e.flags|=4)};function Xa(t,e){if(!nt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function cE(t,e,n){var r=e.pendingProps;switch(Im(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(e),null;case 1:return pn(e.type)&&Ad(),Ft(e),null;case 3:return r=e.stateNode,ea(),et(hn),et(qt),Lm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ru(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ir!==null&&(Xp(ir),ir=null))),Hp(t,e),Ft(e),null;case 5:Um(e);var i=Po(zl.current);if(n=e.type,t!==null&&e.stateNode!=null)Pb(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(q(166));return Ft(e),null}if(t=Po(Or.current),Ru(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[Pr]=e,r[Fl]=o,t=(e.mode&1)!==0,n){case"dialog":Je("cancel",r),Je("close",r);break;case"iframe":case"object":case"embed":Je("load",r);break;case"video":case"audio":for(i=0;i<ul.length;i++)Je(ul[i],r);break;case"source":Je("error",r);break;case"img":case"image":case"link":Je("error",r),Je("load",r);break;case"details":Je("toggle",r);break;case"input":Iw(r,o),Je("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Je("invalid",r);break;case"textarea":Ow(r,o),Je("invalid",r)}wp(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&ku(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&ku(r.textContent,a,t),i=["children",""+a]):Ol.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Je("scroll",r)}switch(n){case"input":Su(r),$w(r,o,!0);break;case"textarea":Su(r),Dw(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Td)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=r3(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[Pr]=e,t[Fl]=r,Ab(t,e,!1,!1),e.stateNode=t;e:{switch(s=yp(n,r),n){case"dialog":Je("cancel",t),Je("close",t),i=r;break;case"iframe":case"object":case"embed":Je("load",t),i=r;break;case"video":case"audio":for(i=0;i<ul.length;i++)Je(ul[i],t);i=r;break;case"source":Je("error",t),i=r;break;case"img":case"image":case"link":Je("error",t),Je("load",t),i=r;break;case"details":Je("toggle",t),i=r;break;case"input":Iw(t,r),i=fp(t,r),Je("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=lt({},r,{value:void 0}),Je("invalid",t);break;case"textarea":Ow(t,r),i=mp(t,r),Je("invalid",t);break;default:i=r}wp(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?s3(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&i3(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Dl(t,l):typeof l=="number"&&Dl(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ol.hasOwnProperty(o)?l!=null&&o==="onScroll"&&Je("scroll",t):l!=null&&pm(t,o,l,s))}switch(n){case"input":Su(t),$w(t,r,!1);break;case"textarea":Su(t),Dw(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Gi(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?Ls(t,!!r.multiple,o,!1):r.defaultValue!=null&&Ls(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Td)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ft(e),null;case 6:if(t&&e.stateNode!=null)Ib(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(q(166));if(n=Po(zl.current),Po(Or.current),Ru(e)){if(r=e.stateNode,n=e.memoizedProps,r[Pr]=e,(o=r.nodeValue!==n)&&(t=$n,t!==null))switch(t.tag){case 3:ku(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ku(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Pr]=e,e.stateNode=r}return Ft(e),null;case 13:if(et(ot),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(nt&&Pn!==null&&e.mode&1&&!(e.flags&128))Z3(),Xs(),e.flags|=98560,o=!1;else if(o=Ru(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(q(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(q(317));o[Pr]=e}else Xs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ft(e),o=!1}else ir!==null&&(Xp(ir),ir=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ot.current&1?Tt===0&&(Tt=3):Ym())),e.updateQueue!==null&&(e.flags|=4),Ft(e),null);case 4:return ea(),Hp(t,e),t===null&&Bl(e.stateNode.containerInfo),Ft(e),null;case 10:return km(e.type._context),Ft(e),null;case 17:return pn(e.type)&&Ad(),Ft(e),null;case 19:if(et(ot),o=e.memoizedState,o===null)return Ft(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)Xa(o,!1);else{if(Tt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Rd(t),s!==null){for(e.flags|=128,Xa(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Qe(ot,ot.current&1|2),e.child}t=t.sibling}o.tail!==null&&gt()>na&&(e.flags|=128,r=!0,Xa(o,!1),e.lanes=4194304)}else{if(!r)if(t=Rd(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Xa(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!nt)return Ft(e),null}else 2*gt()-o.renderingStartTime>na&&n!==1073741824&&(e.flags|=128,r=!0,Xa(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=gt(),e.sibling=null,n=ot.current,Qe(ot,r?n&1|2:n&1),e):(Ft(e),null);case 22:case 23:return Km(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Tn&1073741824&&(Ft(e),e.subtreeFlags&6&&(e.flags|=8192)):Ft(e),null;case 24:return null;case 25:return null}throw Error(q(156,e.tag))}function uE(t,e){switch(Im(e),e.tag){case 1:return pn(e.type)&&Ad(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ea(),et(hn),et(qt),Lm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Um(e),null;case 13:if(et(ot),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(q(340));Xs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return et(ot),null;case 4:return ea(),null;case 10:return km(e.type._context),null;case 22:case 23:return Km(),null;case 24:return null;default:return null}}var Uu=!1,Vt=!1,dE=typeof WeakSet=="function"?WeakSet:Set,ae=null;function Rs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){dt(t,e,r)}else n.current=null}function Vp(t,e,n){try{n()}catch(r){dt(t,e,r)}}var xy=!1;function fE(t,e){if(Pp=_d,t=R3(),Am(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,u=0,d=t,p=null;t:for(;;){for(var w;d!==n||i!==0&&d.nodeType!==3||(a=s+i),d!==o||r!==0&&d.nodeType!==3||(l=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(w=d.firstChild)!==null;)p=d,d=w;for(;;){if(d===t)break t;if(p===n&&++c===i&&(a=s),p===o&&++u===r&&(l=s),(w=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=w}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ip={focusedElem:t,selectionRange:n},_d=!1,ae=e;ae!==null;)if(e=ae,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ae=t;else for(;ae!==null;){e=ae;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var E=y.memoizedProps,C=y.memoizedState,b=e.stateNode,m=b.getSnapshotBeforeUpdate(e.elementType===e.type?E:tr(e.type,E),C);b.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(q(163))}}catch(x){dt(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,ae=t;break}ae=e.return}return y=xy,xy=!1,y}function xl(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&Vp(e,n,o)}i=i.next}while(i!==r)}}function zf(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function qp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function $b(t){var e=t.alternate;e!==null&&(t.alternate=null,$b(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Pr],delete e[Fl],delete e[Dp],delete e[Gx],delete e[Kx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ob(t){return t.tag===5||t.tag===3||t.tag===4}function Ey(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ob(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Td));else if(r!==4&&(t=t.child,t!==null))for(Zp(t,e,n),t=t.sibling;t!==null;)Zp(t,e,n),t=t.sibling}function Gp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Gp(t,e,n),t=t.sibling;t!==null;)Gp(t,e,n),t=t.sibling}var Nt=null,rr=!1;function xi(t,e,n){for(n=n.child;n!==null;)Db(t,e,n),n=n.sibling}function Db(t,e,n){if($r&&typeof $r.onCommitFiberUnmount=="function")try{$r.onCommitFiberUnmount(Nf,n)}catch{}switch(n.tag){case 5:Vt||Rs(n,e);case 6:var r=Nt,i=rr;Nt=null,xi(t,e,n),Nt=r,rr=i,Nt!==null&&(rr?(t=Nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Nt.removeChild(n.stateNode));break;case 18:Nt!==null&&(rr?(t=Nt,n=n.stateNode,t.nodeType===8?m0(t.parentNode,n):t.nodeType===1&&m0(t,n),Ml(t)):m0(Nt,n.stateNode));break;case 4:r=Nt,i=rr,Nt=n.stateNode.containerInfo,rr=!0,xi(t,e,n),Nt=r,rr=i;break;case 0:case 11:case 14:case 15:if(!Vt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Vp(n,e,s),i=i.next}while(i!==r)}xi(t,e,n);break;case 1:if(!Vt&&(Rs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){dt(n,e,a)}xi(t,e,n);break;case 21:xi(t,e,n);break;case 22:n.mode&1?(Vt=(r=Vt)||n.memoizedState!==null,xi(t,e,n),Vt=r):xi(t,e,n);break;default:xi(t,e,n)}}function _y(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new dE),e.forEach(function(r){var i=xE.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Xn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:Nt=a.stateNode,rr=!1;break e;case 3:Nt=a.stateNode.containerInfo,rr=!0;break e;case 4:Nt=a.stateNode.containerInfo,rr=!0;break e}a=a.return}if(Nt===null)throw Error(q(160));Db(o,s,i),Nt=null,rr=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){dt(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)kb(e,t),e=e.sibling}function kb(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Xn(e,t),_r(t),r&4){try{xl(3,t,t.return),zf(3,t)}catch(E){dt(t,t.return,E)}try{xl(5,t,t.return)}catch(E){dt(t,t.return,E)}}break;case 1:Xn(e,t),_r(t),r&512&&n!==null&&Rs(n,n.return);break;case 5:if(Xn(e,t),_r(t),r&512&&n!==null&&Rs(n,n.return),t.flags&32){var i=t.stateNode;try{Dl(i,"")}catch(E){dt(t,t.return,E)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&t3(i,o),yp(a,s);var c=yp(a,o);for(s=0;s<l.length;s+=2){var u=l[s],d=l[s+1];u==="style"?s3(i,d):u==="dangerouslySetInnerHTML"?i3(i,d):u==="children"?Dl(i,d):pm(i,u,d,c)}switch(a){case"input":hp(i,o);break;case"textarea":n3(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?Ls(i,!!o.multiple,w,!1):p!==!!o.multiple&&(o.defaultValue!=null?Ls(i,!!o.multiple,o.defaultValue,!0):Ls(i,!!o.multiple,o.multiple?[]:"",!1))}i[Fl]=o}catch(E){dt(t,t.return,E)}}break;case 6:if(Xn(e,t),_r(t),r&4){if(t.stateNode===null)throw Error(q(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(E){dt(t,t.return,E)}}break;case 3:if(Xn(e,t),_r(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ml(e.containerInfo)}catch(E){dt(t,t.return,E)}break;case 4:Xn(e,t),_r(t);break;case 13:Xn(e,t),_r(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Zm=gt())),r&4&&_y(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Vt=(c=Vt)||u,Xn(e,t),Vt=c):Xn(e,t),_r(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(ae=t,u=t.child;u!==null;){for(d=ae=u;ae!==null;){switch(p=ae,w=p.child,p.tag){case 0:case 11:case 14:case 15:xl(4,p,p.return);break;case 1:Rs(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(E){dt(r,n,E)}}break;case 5:Rs(p,p.return);break;case 22:if(p.memoizedState!==null){Sy(d);continue}}w!==null?(w.return=p,ae=w):Sy(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{i=d.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=o3("display",s))}catch(E){dt(t,t.return,E)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(E){dt(t,t.return,E)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Xn(e,t),_r(t),r&4&&_y(t);break;case 21:break;default:Xn(e,t),_r(t)}}function _r(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ob(n)){var r=n;break e}n=n.return}throw Error(q(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Dl(i,""),r.flags&=-33);var o=Ey(t);Gp(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Ey(t);Zp(t,a,s);break;default:throw Error(q(161))}}catch(l){dt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function hE(t,e,n){ae=t,Rb(t)}function Rb(t,e,n){for(var r=(t.mode&1)!==0;ae!==null;){var i=ae,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Uu;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Vt;a=Uu;var c=Vt;if(Uu=s,(Vt=l)&&!c)for(ae=i;ae!==null;)s=ae,l=s.child,s.tag===22&&s.memoizedState!==null?Ty(i):l!==null?(l.return=s,ae=l):Ty(i);for(;o!==null;)ae=o,Rb(o),o=o.sibling;ae=i,Uu=a,Vt=c}Cy(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,ae=o):Cy(t)}}function Cy(t){for(;ae!==null;){var e=ae;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Vt||zf(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Vt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:tr(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&ly(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ly(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Ml(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(q(163))}Vt||e.flags&512&&qp(e)}catch(p){dt(e,e.return,p)}}if(e===t){ae=null;break}if(n=e.sibling,n!==null){n.return=e.return,ae=n;break}ae=e.return}}function Sy(t){for(;ae!==null;){var e=ae;if(e===t){ae=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ae=n;break}ae=e.return}}function Ty(t){for(;ae!==null;){var e=ae;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{zf(4,e)}catch(l){dt(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){dt(e,i,l)}}var o=e.return;try{qp(e)}catch(l){dt(e,o,l)}break;case 5:var s=e.return;try{qp(e)}catch(l){dt(e,s,l)}}}catch(l){dt(e,e.return,l)}if(e===t){ae=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ae=a;break}ae=e.return}}var pE=Math.ceil,Ud=pi.ReactCurrentDispatcher,Vm=pi.ReactCurrentOwner,Fn=pi.ReactCurrentBatchConfig,Be=0,Rt=null,Et=null,Mt=0,Tn=0,Ns=io(0),Tt=0,Zl=null,jo=0,Hf=0,qm=0,El=null,un=null,Zm=0,na=1/0,qr=null,Ld=!1,Kp=null,Fi=null,Lu=!1,Ri=null,Bd=0,_l=0,Yp=null,ld=-1,cd=0;function Jt(){return Be&6?gt():ld!==-1?ld:ld=gt()}function Wi(t){return t.mode&1?Be&2&&Mt!==0?Mt&-Mt:Qx.transition!==null?(cd===0&&(cd=y3()),cd):(t=ze,t!==0||(t=window.event,t=t===void 0?16:S3(t.type)),t):1}function lr(t,e,n,r){if(50<_l)throw _l=0,Yp=null,Error(q(185));qc(t,n,r),(!(Be&2)||t!==Rt)&&(t===Rt&&(!(Be&2)&&(Hf|=n),Tt===4&&Ii(t,Mt)),mn(t,r),n===1&&Be===0&&!(e.mode&1)&&(na=gt()+500,jf&&oo()))}function mn(t,e){var n=t.callbackNode;Q8(t,e);var r=Ed(t,t===Rt?Mt:0);if(r===0)n!==null&&Nw(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Nw(n),e===1)t.tag===0?Yx(Ay.bind(null,t)):H3(Ay.bind(null,t)),qx(function(){!(Be&6)&&oo()}),n=null;else{switch(v3(r)){case 1:n=vm;break;case 4:n=g3;break;case 16:n=xd;break;case 536870912:n=w3;break;default:n=xd}n=Wb(n,Nb.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Nb(t,e){if(ld=-1,cd=0,Be&6)throw Error(q(327));var n=t.callbackNode;if(zs()&&t.callbackNode!==n)return null;var r=Ed(t,t===Rt?Mt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=jd(t,r);else{e=r;var i=Be;Be|=2;var o=Ub();(Rt!==t||Mt!==e)&&(qr=null,na=gt()+500,Do(t,e));do try{wE();break}catch(a){Mb(t,a)}while(1);Dm(),Ud.current=o,Be=i,Et!==null?e=0:(Rt=null,Mt=0,e=Tt)}if(e!==0){if(e===2&&(i=_p(t),i!==0&&(r=i,e=Qp(t,i))),e===1)throw n=Zl,Do(t,0),Ii(t,r),mn(t,gt()),n;if(e===6)Ii(t,r);else{if(i=t.current.alternate,!(r&30)&&!mE(i)&&(e=jd(t,r),e===2&&(o=_p(t),o!==0&&(r=o,e=Qp(t,o))),e===1))throw n=Zl,Do(t,0),Ii(t,r),mn(t,gt()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(q(345));case 2:So(t,un,qr);break;case 3:if(Ii(t,r),(r&130023424)===r&&(e=Zm+500-gt(),10<e)){if(Ed(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Jt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Op(So.bind(null,t,un,qr),e);break}So(t,un,qr);break;case 4:if(Ii(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-ar(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=gt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*pE(r/1960))-r,10<r){t.timeoutHandle=Op(So.bind(null,t,un,qr),r);break}So(t,un,qr);break;case 5:So(t,un,qr);break;default:throw Error(q(329))}}}return mn(t,gt()),t.callbackNode===n?Nb.bind(null,t):null}function Qp(t,e){var n=El;return t.current.memoizedState.isDehydrated&&(Do(t,e).flags|=256),t=jd(t,e),t!==2&&(e=un,un=n,e!==null&&Xp(e)),t}function Xp(t){un===null?un=t:un.push.apply(un,t)}function mE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!fr(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ii(t,e){for(e&=~qm,e&=~Hf,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ar(e),r=1<<n;t[n]=-1,e&=~r}}function Ay(t){if(Be&6)throw Error(q(327));zs();var e=Ed(t,0);if(!(e&1))return mn(t,gt()),null;var n=jd(t,e);if(t.tag!==0&&n===2){var r=_p(t);r!==0&&(e=r,n=Qp(t,r))}if(n===1)throw n=Zl,Do(t,0),Ii(t,e),mn(t,gt()),n;if(n===6)throw Error(q(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,So(t,un,qr),mn(t,gt()),null}function Gm(t,e){var n=Be;Be|=1;try{return t(e)}finally{Be=n,Be===0&&(na=gt()+500,jf&&oo())}}function Fo(t){Ri!==null&&Ri.tag===0&&!(Be&6)&&zs();var e=Be;Be|=1;var n=Fn.transition,r=ze;try{if(Fn.transition=null,ze=1,t)return t()}finally{ze=r,Fn.transition=n,Be=e,!(Be&6)&&oo()}}function Km(){Tn=Ns.current,et(Ns)}function Do(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Vx(n)),Et!==null)for(n=Et.return;n!==null;){var r=n;switch(Im(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ad();break;case 3:ea(),et(hn),et(qt),Lm();break;case 5:Um(r);break;case 4:ea();break;case 13:et(ot);break;case 19:et(ot);break;case 10:km(r.type._context);break;case 22:case 23:Km()}n=n.return}if(Rt=t,Et=t=zi(t.current,null),Mt=Tn=e,Tt=0,Zl=null,qm=Hf=jo=0,un=El=null,Ao!==null){for(e=0;e<Ao.length;e++)if(n=Ao[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Ao=null}return t}function Mb(t,e){do{var n=Et;try{if(Dm(),od.current=Md,Nd){for(var r=at.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Nd=!1}if(Bo=0,kt=St=at=null,bl=!1,Hl=0,Vm.current=null,n===null||n.return===null){Tt=1,Zl=e,Et=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=Mt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var p=u.alternate;p?(u.updateQueue=p.updateQueue,u.memoizedState=p.memoizedState,u.lanes=p.lanes):(u.updateQueue=null,u.memoizedState=null)}var w=py(s);if(w!==null){w.flags&=-257,my(w,s,a,o,e),w.mode&1&&hy(o,c,e),e=w,l=c;var y=e.updateQueue;if(y===null){var E=new Set;E.add(l),e.updateQueue=E}else y.add(l);break e}else{if(!(e&1)){hy(o,c,e),Ym();break e}l=Error(q(426))}}else if(nt&&a.mode&1){var C=py(s);if(C!==null){!(C.flags&65536)&&(C.flags|=256),my(C,s,a,o,e),$m(ta(l,a));break e}}o=l=ta(l,a),Tt!==4&&(Tt=2),El===null?El=[o]:El.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var b=vb(o,l,e);ay(o,b);break e;case 1:a=l;var m=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Fi===null||!Fi.has(v)))){o.flags|=65536,e&=-e,o.lanes|=e;var x=bb(o,a,e);ay(o,x);break e}}o=o.return}while(o!==null)}Bb(n)}catch(_){e=_,Et===n&&n!==null&&(Et=n=n.return);continue}break}while(1)}function Ub(){var t=Ud.current;return Ud.current=Md,t===null?Md:t}function Ym(){(Tt===0||Tt===3||Tt===2)&&(Tt=4),Rt===null||!(jo&268435455)&&!(Hf&268435455)||Ii(Rt,Mt)}function jd(t,e){var n=Be;Be|=2;var r=Ub();(Rt!==t||Mt!==e)&&(qr=null,Do(t,e));do try{gE();break}catch(i){Mb(t,i)}while(1);if(Dm(),Be=n,Ud.current=r,Et!==null)throw Error(q(261));return Rt=null,Mt=0,Tt}function gE(){for(;Et!==null;)Lb(Et)}function wE(){for(;Et!==null&&!W8();)Lb(Et)}function Lb(t){var e=Fb(t.alternate,t,Tn);t.memoizedProps=t.pendingProps,e===null?Bb(t):Et=e,Vm.current=null}function Bb(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=uE(n,e),n!==null){n.flags&=32767,Et=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Tt=6,Et=null;return}}else if(n=cE(n,e,Tn),n!==null){Et=n;return}if(e=e.sibling,e!==null){Et=e;return}Et=e=t}while(e!==null);Tt===0&&(Tt=5)}function So(t,e,n){var r=ze,i=Fn.transition;try{Fn.transition=null,ze=1,yE(t,e,n,r)}finally{Fn.transition=i,ze=r}return null}function yE(t,e,n,r){do zs();while(Ri!==null);if(Be&6)throw Error(q(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(q(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(X8(t,o),t===Rt&&(Et=Rt=null,Mt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Lu||(Lu=!0,Wb(xd,function(){return zs(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Fn.transition,Fn.transition=null;var s=ze;ze=1;var a=Be;Be|=4,Vm.current=null,fE(t,n),kb(n,t),Lx(Ip),_d=!!Pp,Ip=Pp=null,t.current=n,hE(n),z8(),Be=a,ze=s,Fn.transition=o}else t.current=n;if(Lu&&(Lu=!1,Ri=t,Bd=i),o=t.pendingLanes,o===0&&(Fi=null),q8(n.stateNode),mn(t,gt()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ld)throw Ld=!1,t=Kp,Kp=null,t;return Bd&1&&t.tag!==0&&zs(),o=t.pendingLanes,o&1?t===Yp?_l++:(_l=0,Yp=t):_l=0,oo(),null}function zs(){if(Ri!==null){var t=v3(Bd),e=Fn.transition,n=ze;try{if(Fn.transition=null,ze=16>t?16:t,Ri===null)var r=!1;else{if(t=Ri,Ri=null,Bd=0,Be&6)throw Error(q(331));var i=Be;for(Be|=4,ae=t.current;ae!==null;){var o=ae,s=o.child;if(ae.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ae=c;ae!==null;){var u=ae;switch(u.tag){case 0:case 11:case 15:xl(8,u,o)}var d=u.child;if(d!==null)d.return=u,ae=d;else for(;ae!==null;){u=ae;var p=u.sibling,w=u.return;if($b(u),u===c){ae=null;break}if(p!==null){p.return=w,ae=p;break}ae=w}}}var y=o.alternate;if(y!==null){var E=y.child;if(E!==null){y.child=null;do{var C=E.sibling;E.sibling=null,E=C}while(E!==null)}}ae=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,ae=s;else e:for(;ae!==null;){if(o=ae,o.flags&2048)switch(o.tag){case 0:case 11:case 15:xl(9,o,o.return)}var b=o.sibling;if(b!==null){b.return=o.return,ae=b;break e}ae=o.return}}var m=t.current;for(ae=m;ae!==null;){s=ae;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,ae=v;else e:for(s=m;ae!==null;){if(a=ae,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:zf(9,a)}}catch(_){dt(a,a.return,_)}if(a===s){ae=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,ae=x;break e}ae=a.return}}if(Be=i,oo(),$r&&typeof $r.onPostCommitFiberRoot=="function")try{$r.onPostCommitFiberRoot(Nf,t)}catch{}r=!0}return r}finally{ze=n,Fn.transition=e}}return!1}function Py(t,e,n){e=ta(n,e),e=vb(t,e,1),t=ji(t,e,1),e=Jt(),t!==null&&(qc(t,1,e),mn(t,e))}function dt(t,e,n){if(t.tag===3)Py(t,t,n);else for(;e!==null;){if(e.tag===3){Py(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Fi===null||!Fi.has(r))){t=ta(n,t),t=bb(e,t,1),e=ji(e,t,1),t=Jt(),e!==null&&(qc(e,1,t),mn(e,t));break}}e=e.return}}function vE(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Jt(),t.pingedLanes|=t.suspendedLanes&n,Rt===t&&(Mt&n)===n&&(Tt===4||Tt===3&&(Mt&130023424)===Mt&&500>gt()-Zm?Do(t,0):qm|=n),mn(t,e)}function jb(t,e){e===0&&(t.mode&1?(e=Pu,Pu<<=1,!(Pu&130023424)&&(Pu=4194304)):e=1);var n=Jt();t=ii(t,e),t!==null&&(qc(t,e,n),mn(t,n))}function bE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),jb(t,n)}function xE(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(q(314))}r!==null&&r.delete(e),jb(t,n)}var Fb;Fb=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||hn.current)dn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return dn=!1,lE(t,e,n);dn=!!(t.flags&131072)}else dn=!1,nt&&e.flags&1048576&&V3(e,$d,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ad(t,e),t=e.pendingProps;var i=Qs(e,qt.current);Ws(e,n),i=jm(null,e,r,t,i,n);var o=Fm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,pn(r)?(o=!0,Pd(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Nm(e),i.updater=Wf,e.stateNode=i,i._reactInternals=e,Lp(e,r,t,n),e=Fp(null,e,r,!0,o,n)):(e.tag=0,nt&&o&&Pm(e),Kt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ad(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=_E(r),t=tr(r,t),i){case 0:e=jp(null,e,r,t,n);break e;case 1:e=yy(null,e,r,t,n);break e;case 11:e=gy(null,e,r,t,n);break e;case 14:e=wy(null,e,r,tr(r.type,t),n);break e}throw Error(q(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tr(r,i),jp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tr(r,i),yy(t,e,r,i,n);case 3:e:{if(Cb(e),t===null)throw Error(q(387));r=e.pendingProps,o=e.memoizedState,i=o.element,Q3(t,e),kd(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=ta(Error(q(423)),e),e=vy(t,e,r,n,i);break e}else if(r!==i){i=ta(Error(q(424)),e),e=vy(t,e,r,n,i);break e}else for(Pn=Bi(e.stateNode.containerInfo.firstChild),$n=e,nt=!0,ir=null,n=K3(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Xs(),r===i){e=oi(t,e,n);break e}Kt(t,e,r,n)}e=e.child}return e;case 5:return X3(e),t===null&&Np(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,$p(r,i)?s=null:o!==null&&$p(r,o)&&(e.flags|=32),_b(t,e),Kt(t,e,s,n),e.child;case 6:return t===null&&Np(e),null;case 13:return Sb(t,e,n);case 4:return Mm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Js(e,null,r,n):Kt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tr(r,i),gy(t,e,r,i,n);case 7:return Kt(t,e,e.pendingProps,n),e.child;case 8:return Kt(t,e,e.pendingProps.children,n),e.child;case 12:return Kt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,Qe(Od,r._currentValue),r._currentValue=s,o!==null)if(fr(o.value,s)){if(o.children===i.children&&!hn.current){e=oi(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Jr(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Mp(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(q(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Mp(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Kt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ws(e,n),i=Hn(i),r=r(i),e.flags|=1,Kt(t,e,r,n),e.child;case 14:return r=e.type,i=tr(r,e.pendingProps),i=tr(r.type,i),wy(t,e,r,i,n);case 15:return xb(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tr(r,i),ad(t,e),e.tag=1,pn(r)?(t=!0,Pd(e)):t=!1,Ws(e,n),yb(e,r,i),Lp(e,r,i,n),Fp(null,e,r,!0,t,n);case 19:return Tb(t,e,n);case 22:return Eb(t,e,n)}throw Error(q(156,e.tag))};function Wb(t,e){return m3(t,e)}function EE(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,e,n,r){return new EE(t,e,n,r)}function Qm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _E(t){if(typeof t=="function")return Qm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===gm)return 11;if(t===wm)return 14}return 2}function zi(t,e){var n=t.alternate;return n===null?(n=jn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ud(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")Qm(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Ss:return ko(n.children,i,o,e);case mm:s=8,i|=8;break;case lp:return t=jn(12,n,e,i|2),t.elementType=lp,t.lanes=o,t;case cp:return t=jn(13,n,e,i),t.elementType=cp,t.lanes=o,t;case up:return t=jn(19,n,e,i),t.elementType=up,t.lanes=o,t;case X2:return Vf(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Y2:s=10;break e;case Q2:s=9;break e;case gm:s=11;break e;case wm:s=14;break e;case _i:s=16,r=null;break e}throw Error(q(130,t==null?t:typeof t,""))}return e=jn(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function ko(t,e,n,r){return t=jn(7,t,r,e),t.lanes=n,t}function Vf(t,e,n,r){return t=jn(22,t,r,e),t.elementType=X2,t.lanes=n,t.stateNode={isHidden:!1},t}function _0(t,e,n){return t=jn(6,t,null,e),t.lanes=n,t}function C0(t,e,n){return e=jn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function CE(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=i0(0),this.expirationTimes=i0(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=i0(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Xm(t,e,n,r,i,o,s,a,l){return t=new CE(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=jn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nm(o),t}function SE(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Cs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function zb(t){if(!t)return Ki;t=t._reactInternals;e:{if(ss(t)!==t||t.tag!==1)throw Error(q(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(pn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(q(171))}if(t.tag===1){var n=t.type;if(pn(n))return z3(t,n,e)}return e}function Hb(t,e,n,r,i,o,s,a,l){return t=Xm(n,r,!0,t,i,o,s,a,l),t.context=zb(null),n=t.current,r=Jt(),i=Wi(n),o=Jr(r,i),o.callback=e??null,ji(n,o,i),t.current.lanes=i,qc(t,i,r),mn(t,r),t}function qf(t,e,n,r){var i=e.current,o=Jt(),s=Wi(i);return n=zb(n),e.context===null?e.context=n:e.pendingContext=n,e=Jr(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ji(i,e,s),t!==null&&(lr(t,i,s,o),id(t,i,s)),s}function Fd(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Iy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Jm(t,e){Iy(t,e),(t=t.alternate)&&Iy(t,e)}function TE(){return null}var Vb=typeof reportError=="function"?reportError:function(t){console.error(t)};function eg(t){this._internalRoot=t}Zf.prototype.render=eg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(q(409));qf(t,e,null,null)};Zf.prototype.unmount=eg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Fo(function(){qf(null,t,null,null)}),e[ri]=null}};function Zf(t){this._internalRoot=t}Zf.prototype.unstable_scheduleHydration=function(t){if(t){var e=E3();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Pi.length&&e!==0&&e<Pi[n].priority;n++);Pi.splice(n,0,t),n===0&&C3(t)}};function tg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Gf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function $y(){}function AE(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Fd(s);o.call(c)}}var s=Hb(e,r,t,0,null,!1,!1,"",$y);return t._reactRootContainer=s,t[ri]=s.current,Bl(t.nodeType===8?t.parentNode:t),Fo(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Fd(l);a.call(c)}}var l=Xm(t,0,!1,null,null,!1,!1,"",$y);return t._reactRootContainer=l,t[ri]=l.current,Bl(t.nodeType===8?t.parentNode:t),Fo(function(){qf(e,l,n,r)}),l}function Kf(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Fd(s);a.call(l)}}qf(e,s,t,i)}else s=AE(n,e,t,i,r);return Fd(s)}b3=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=cl(e.pendingLanes);n!==0&&(bm(e,n|1),mn(e,gt()),!(Be&6)&&(na=gt()+500,oo()))}break;case 13:Fo(function(){var r=ii(t,1);if(r!==null){var i=Jt();lr(r,t,1,i)}}),Jm(t,1)}};xm=function(t){if(t.tag===13){var e=ii(t,134217728);if(e!==null){var n=Jt();lr(e,t,134217728,n)}Jm(t,134217728)}};x3=function(t){if(t.tag===13){var e=Wi(t),n=ii(t,e);if(n!==null){var r=Jt();lr(n,t,e,r)}Jm(t,e)}};E3=function(){return ze};_3=function(t,e){var n=ze;try{return ze=t,e()}finally{ze=n}};bp=function(t,e,n){switch(e){case"input":if(hp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Bf(r);if(!i)throw Error(q(90));e3(r),hp(r,i)}}}break;case"textarea":n3(t,n);break;case"select":e=n.value,e!=null&&Ls(t,!!n.multiple,e,!1)}};c3=Gm;u3=Fo;var PE={usingClientEntryPoint:!1,Events:[Gc,Is,Bf,a3,l3,Gm]},Ja={findFiberByHostInstance:To,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},IE={bundleType:Ja.bundleType,version:Ja.version,rendererPackageName:Ja.rendererPackageName,rendererConfig:Ja.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=h3(t),t===null?null:t.stateNode},findFiberByHostInstance:Ja.findFiberByHostInstance||TE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bu.isDisabled&&Bu.supportsFiber)try{Nf=Bu.inject(IE),$r=Bu}catch{}}kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=PE;kn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!tg(e))throw Error(q(200));return SE(t,e,null,n)};kn.createRoot=function(t,e){if(!tg(t))throw Error(q(299));var n=!1,r="",i=Vb;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Xm(t,1,!1,null,null,n,!1,r,i),t[ri]=e.current,Bl(t.nodeType===8?t.parentNode:t),new eg(e)};kn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(q(188)):(t=Object.keys(t).join(","),Error(q(268,t)));return t=h3(e),t=t===null?null:t.stateNode,t};kn.flushSync=function(t){return Fo(t)};kn.hydrate=function(t,e,n){if(!Gf(e))throw Error(q(200));return Kf(null,t,e,!0,n)};kn.hydrateRoot=function(t,e,n){if(!tg(t))throw Error(q(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Vb;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=Hb(e,null,t,1,n??null,i,!1,o,s),t[ri]=e.current,Bl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Zf(e)};kn.render=function(t,e,n){if(!Gf(e))throw Error(q(200));return Kf(null,t,e,!1,n)};kn.unmountComponentAtNode=function(t){if(!Gf(t))throw Error(q(40));return t._reactRootContainer?(Fo(function(){Kf(null,null,t,!1,function(){t._reactRootContainer=null,t[ri]=null})}),!0):!1};kn.unstable_batchedUpdates=Gm;kn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Gf(n))throw Error(q(200));if(t==null||t._reactInternals===void 0)throw Error(q(38));return Kf(t,e,n,!1,r)};kn.version="18.3.1-next-f1338f8080-20240426";function qb(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qb)}catch(t){console.error(t)}}qb(),q2.exports=kn;var $E=q2.exports,Oy=$E;sp.createRoot=Oy.createRoot,sp.hydrateRoot=Oy.hydrateRoot;let An;function OE(t){t&&(An=t)}function DE(){if(!An)throw new Error('Please call "createWeb3Modal" before using "useWeb3Modal" hook');async function t(n){await(An==null?void 0:An.open(n))}async function e(){await(An==null?void 0:An.close())}return{open:t,close:e}}function kE(){if(!An)throw new Error('Please call "createWeb3Modal" before using "useWeb3ModalState" hook');const[t,e]=At.useState(An.getEvent());return At.useEffect(()=>{const n=An==null?void 0:An.subscribeEvents(r=>{e({...r})});return()=>{n==null||n()}},[]),t}function Yf(t,e={}){const{fees:n=t.fees,formatters:r=t.formatters,serializers:i=t.serializers}=e;return{...t,fees:n,formatters:r,serializers:i}}const RE=Yf({id:42161,name:"Arbitrum One",network:"arbitrum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://arb-mainnet.g.alchemy.com/v2"],webSocket:["wss://arb-mainnet.g.alchemy.com/v2"]},infura:{http:["https://arbitrum-mainnet.infura.io/v3"],webSocket:["wss://arbitrum-mainnet.infura.io/ws/v3"]},default:{http:["https://arb1.arbitrum.io/rpc"]},public:{http:["https://arb1.arbitrum.io/rpc"]}},blockExplorers:{etherscan:{name:"Arbiscan",url:"https://arbiscan.io"},default:{name:"Arbiscan",url:"https://arbiscan.io"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:7654707}}}),NE="1.21.3",ME=t=>t,Qf=t=>t,UE=()=>`viem@${NE}`;class V extends Error{constructor(e,n={}){var o;super(),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ViemError"}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:UE()});const r=n.cause instanceof V?n.cause.details:(o=n.cause)!=null&&o.message?n.cause.message:n.details,i=n.cause instanceof V&&n.cause.docsPath||n.docsPath;this.message=[e||"An error occurred.","",...n.metaMessages?[...n.metaMessages,""]:[],...i?[`Docs: https://viem.sh${i}.html${n.docsSlug?`#${n.docsSlug}`:""}`]:[],...r?[`Details: ${r}`]:[],`Version: ${this.version}`].join(`
`),n.cause&&(this.cause=n.cause),this.details=r,this.docsPath=i,this.metaMessages=n.metaMessages,this.shortMessage=e}walk(e){return Zb(this,e)}}function Zb(t,e){return e!=null&&e(t)?t:t&&typeof t=="object"&&"cause"in t?Zb(t.cause,e):e?null:t}class LE extends V{constructor({max:e,min:n,signed:r,size:i,value:o}){super(`Number "${o}" is not in safe ${i?`${i*8}-bit ${r?"signed":"unsigned"} `:""}integer range ${e?`(${n} to ${e})`:`(above ${n})`}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntegerOutOfRangeError"})}}class BE extends V{constructor(e){super(`Hex value "${e}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidHexBooleanError"})}}class jE extends V{constructor({givenSize:e,maxSize:n}){super(`Size cannot exceed ${n} bytes. Given size: ${e} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeOverflowError"})}}function Dr(t,{strict:e=!0}={}){return!t||typeof t!="string"?!1:e?/^0x[0-9a-fA-F]*$/.test(t):t.startsWith("0x")}function Pt(t){return Dr(t,{strict:!1})?Math.ceil((t.length-2)/2):t.length}function cr(t,{dir:e="left"}={}){let n=typeof t=="string"?t.replace("0x",""):t,r=0;for(let i=0;i<n.length-1&&n[e==="left"?i:n.length-i-1].toString()==="0";i++)r++;return n=e==="left"?n.slice(r):n.slice(0,n.length-r),typeof t=="string"?(n.length===1&&e==="right"&&(n=`${n}0`),`0x${n.length%2===1?`0${n}`:n}`):n}class Gb extends V{constructor({offset:e,position:n,size:r}){super(`Slice ${n==="start"?"starting":"ending"} at offset "${e}" is out-of-bounds (size: ${r}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SliceOffsetOutOfBoundsError"})}}class Kb extends V{constructor({size:e,targetSize:n,type:r}){super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (${e}) exceeds padding size (${n}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeExceedsPaddingSizeError"})}}function Da(t,{dir:e,size:n=32}={}){return typeof t=="string"?Hi(t,{dir:e,size:n}):FE(t,{dir:e,size:n})}function Hi(t,{dir:e,size:n=32}={}){if(n===null)return t;const r=t.replace("0x","");if(r.length>n*2)throw new Kb({size:Math.ceil(r.length/2),targetSize:n,type:"hex"});return`0x${r[e==="right"?"padEnd":"padStart"](n*2,"0")}`}function FE(t,{dir:e,size:n=32}={}){if(n===null)return t;if(t.length>n)throw new Kb({size:t.length,targetSize:n,type:"bytes"});const r=new Uint8Array(n);for(let i=0;i<n;i++){const o=e==="right";r[o?i:n-i-1]=t[o?i:t.length-i-1]}return r}const WE=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function Ae(t,e={}){return typeof t=="number"||typeof t=="bigint"?Se(t,e):typeof t=="string"?ng(t,e):typeof t=="boolean"?Yb(t,e):ra(t,e)}function Yb(t,e={}){const n=`0x${Number(t)}`;return typeof e.size=="number"?(so(n,{size:e.size}),Da(n,{size:e.size})):n}function ra(t,e={}){let n="";for(let i=0;i<t.length;i++)n+=WE[t[i]];const r=`0x${n}`;return typeof e.size=="number"?(so(r,{size:e.size}),Da(r,{dir:"right",size:e.size})):r}function Se(t,e={}){const{signed:n,size:r}=e,i=BigInt(t);let o;r?n?o=(1n<<BigInt(r)*8n-1n)-1n:o=2n**(BigInt(r)*8n)-1n:typeof t=="number"&&(o=BigInt(Number.MAX_SAFE_INTEGER));const s=typeof o=="bigint"&&n?-o-1n:0;if(o&&i>o||i<s){const l=typeof t=="bigint"?"n":"";throw new LE({max:o?`${o}${l}`:void 0,min:`${s}${l}`,signed:n,size:r,value:`${t}${l}`})}const a=`0x${(n&&i<0?(1n<<BigInt(r*8))+BigInt(i):i).toString(16)}`;return r?Da(a,{size:r}):a}const zE=new TextEncoder;function ng(t,e={}){const n=zE.encode(t);return ra(n,e)}const HE=new TextEncoder;function Yi(t,e={}){return typeof t=="number"||typeof t=="bigint"?qE(t,e):typeof t=="boolean"?VE(t,e):Dr(t)?Yc(t,e):ei(t,e)}function VE(t,e={}){const n=new Uint8Array(1);return n[0]=Number(t),typeof e.size=="number"?(so(n,{size:e.size}),Da(n,{size:e.size})):n}const zr={zero:48,nine:57,A:65,F:70,a:97,f:102};function Dy(t){if(t>=zr.zero&&t<=zr.nine)return t-zr.zero;if(t>=zr.A&&t<=zr.F)return t-(zr.A-10);if(t>=zr.a&&t<=zr.f)return t-(zr.a-10)}function Yc(t,e={}){let n=t;e.size&&(so(n,{size:e.size}),n=Da(n,{dir:"right",size:e.size}));let r=n.slice(2);r.length%2&&(r=`0${r}`);const i=r.length/2,o=new Uint8Array(i);for(let s=0,a=0;s<i;s++){const l=Dy(r.charCodeAt(a++)),c=Dy(r.charCodeAt(a++));if(l===void 0||c===void 0)throw new V(`Invalid byte sequence ("${r[a-2]}${r[a-1]}" in "${r}").`);o[s]=l*16+c}return o}function qE(t,e){const n=Se(t,e);return Yc(n)}function ei(t,e={}){const n=HE.encode(t);return typeof e.size=="number"?(so(n,{size:e.size}),Da(n,{dir:"right",size:e.size})):n}function so(t,{size:e}){if(Pt(t)>e)throw new jE({givenSize:Pt(t),maxSize:e})}function Ht(t,e={}){const{signed:n}=e;e.size&&so(t,{size:e.size});const r=BigInt(t);if(!n)return r;const i=(t.length-2)/2,o=(1n<<BigInt(i)*8n-1n)-1n;return r<=o?r:r-BigInt(`0x${"f".padStart(i*2,"f")}`)-1n}function ZE(t,e={}){let n=t;if(e.size&&(so(n,{size:e.size}),n=cr(n)),cr(n)==="0x00")return!1;if(cr(n)==="0x01")return!0;throw new BE(n)}function Ut(t,e={}){return Number(Ht(t,e))}function Qb(t,e={}){let n=Yc(t);return e.size&&(so(n,{size:e.size}),n=cr(n,{dir:"right"})),new TextDecoder().decode(n)}function Xf(t,e){return({exclude:n,format:r})=>({exclude:n,format:i=>{const o=e(i);if(n)for(const s of n)delete o[s];return{...o,...r(i)}},type:t})}const Xb={"0x0":"legacy","0x1":"eip2930","0x2":"eip1559"};function rg(t){const e={...t,blockHash:t.blockHash?t.blockHash:null,blockNumber:t.blockNumber?BigInt(t.blockNumber):null,chainId:t.chainId?Ut(t.chainId):void 0,gas:t.gas?BigInt(t.gas):void 0,gasPrice:t.gasPrice?BigInt(t.gasPrice):void 0,maxFeePerGas:t.maxFeePerGas?BigInt(t.maxFeePerGas):void 0,maxPriorityFeePerGas:t.maxPriorityFeePerGas?BigInt(t.maxPriorityFeePerGas):void 0,nonce:t.nonce?Ut(t.nonce):void 0,to:t.to?t.to:null,transactionIndex:t.transactionIndex?Number(t.transactionIndex):null,type:t.type?Xb[t.type]:void 0,typeHex:t.type?t.type:void 0,value:t.value?BigInt(t.value):void 0,v:t.v?BigInt(t.v):void 0};return e.yParity=(()=>{if(t.yParity)return Number(t.yParity);if(typeof e.v=="bigint"){if(e.v===0n||e.v===27n)return 0;if(e.v===1n||e.v===28n)return 1;if(e.v>=35n)return e.v%2n===0n?1:0}})(),e.type==="legacy"&&(delete e.accessList,delete e.maxFeePerGas,delete e.maxPriorityFeePerGas,delete e.yParity),e.type==="eip2930"&&(delete e.maxFeePerGas,delete e.maxPriorityFeePerGas),e}const GE=Xf("transaction",rg);function ig(t){var n;const e=(n=t.transactions)==null?void 0:n.map(r=>typeof r=="string"?r:rg(r));return{...t,baseFeePerGas:t.baseFeePerGas?BigInt(t.baseFeePerGas):null,difficulty:t.difficulty?BigInt(t.difficulty):void 0,gasLimit:t.gasLimit?BigInt(t.gasLimit):void 0,gasUsed:t.gasUsed?BigInt(t.gasUsed):void 0,hash:t.hash?t.hash:null,logsBloom:t.logsBloom?t.logsBloom:null,nonce:t.nonce?t.nonce:null,number:t.number?BigInt(t.number):null,size:t.size?BigInt(t.size):void 0,timestamp:t.timestamp?BigInt(t.timestamp):void 0,transactions:e,totalDifficulty:t.totalDifficulty?BigInt(t.totalDifficulty):null}}const KE=Xf("block",ig);function qn(t,{args:e,eventName:n}={}){return{...t,blockHash:t.blockHash?t.blockHash:null,blockNumber:t.blockNumber?BigInt(t.blockNumber):null,logIndex:t.logIndex?Number(t.logIndex):null,transactionHash:t.transactionHash?t.transactionHash:null,transactionIndex:t.transactionIndex?Number(t.transactionIndex):null,...n?{args:e,eventName:n}:{}}}const YE={"0x0":"reverted","0x1":"success"};function Jb(t){return{...t,blockNumber:t.blockNumber?BigInt(t.blockNumber):null,contractAddress:t.contractAddress?t.contractAddress:null,cumulativeGasUsed:t.cumulativeGasUsed?BigInt(t.cumulativeGasUsed):null,effectiveGasPrice:t.effectiveGasPrice?BigInt(t.effectiveGasPrice):null,gasUsed:t.gasUsed?BigInt(t.gasUsed):null,logs:t.logs?t.logs.map(e=>qn(e)):null,to:t.to?t.to:null,transactionIndex:t.transactionIndex?Ut(t.transactionIndex):null,status:t.status?YE[t.status]:null,type:t.type?Xb[t.type]||t.type:null}}const QE=Xf("transactionReceipt",Jb),XE={legacy:"0x0",eip2930:"0x1",eip1559:"0x2"};function Qc(t){return{...t,gas:typeof t.gas<"u"?Se(t.gas):void 0,gasPrice:typeof t.gasPrice<"u"?Se(t.gasPrice):void 0,maxFeePerGas:typeof t.maxFeePerGas<"u"?Se(t.maxFeePerGas):void 0,maxPriorityFeePerGas:typeof t.maxPriorityFeePerGas<"u"?Se(t.maxPriorityFeePerGas):void 0,nonce:typeof t.nonce<"u"?Se(t.nonce):void 0,type:typeof t.type<"u"?XE[t.type]:void 0,value:typeof t.value<"u"?Se(t.value):void 0}}const JE=Xf("transactionRequest",Qc);class Wn extends V{constructor({address:e}){super(`Address "${e}" is invalid.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAddressError"})}}class Jp extends V{constructor({blockNumber:e,chain:n,contract:r}){super(`Chain "${n.name}" does not support contract "${r.name}".`,{metaMessages:["This could be due to any of the following:",...e&&r.blockCreated&&r.blockCreated>e?[`- The contract "${r.name}" was not deployed until block ${r.blockCreated} (current block ${e}).`]:[`- The chain does not have the contract "${r.name}" configured.`]]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDoesNotSupportContract"})}}class e_ extends V{constructor({chain:e,currentChainId:n}){super(`The current chain of the wallet (id: ${n}) does not match the target chain for the transaction (id: ${e.id} – ${e.name}).`,{metaMessages:[`Current Chain ID:  ${n}`,`Expected Chain ID: ${e.id} – ${e.name}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainMismatchError"})}}class t_ extends V{constructor(){super(["No chain was provided to the request.","Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotFoundError"})}}class e5 extends V{constructor(){super("No chain was provided to the Client."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ClientChainNotConfiguredError"})}}class Jf extends V{constructor({chainId:e}){super(`Chain ID "${e}" is invalid.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidChainIdError"})}}const n_={gwei:9,wei:18},r_={ether:-9,wei:9},i_={ether:-18,gwei:-9};function Wd(t,e){let n=t.toString();const r=n.startsWith("-");r&&(n=n.slice(1)),n=n.padStart(e,"0");let[i,o]=[n.slice(0,n.length-e),n.slice(n.length-e)];return o=o.replace(/(0+)$/,""),`${r?"-":""}${i||"0"}${o?`.${o}`:""}`}function gn(t,e="wei"){return Wd(t,r_[e])}class Ms extends V{constructor({cause:e,message:n}={}){var i;const r=(i=n==null?void 0:n.replace("execution reverted: ",""))==null?void 0:i.replace("execution reverted","");super(`Execution reverted ${r?`with reason: ${r}`:"for an unknown reason"}.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ExecutionRevertedError"})}}Object.defineProperty(Ms,"code",{enumerable:!0,configurable:!0,writable:!0,value:3});Object.defineProperty(Ms,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});class Wo extends V{constructor({cause:e,maxFeePerGas:n}={}){super(`The fee cap (\`maxFeePerGas\`${n?` = ${gn(n)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooHigh"})}}Object.defineProperty(Wo,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});class e1 extends V{constructor({cause:e,maxFeePerGas:n}={}){super(`The fee cap (\`maxFeePerGas\`${n?` = ${gn(n)}`:""} gwei) cannot be lower than the block base fee.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooLow"})}}Object.defineProperty(e1,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});class t1 extends V{constructor({cause:e,nonce:n}={}){super(`Nonce provided for the transaction ${n?`(${n}) `:""}is higher than the next one expected.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooHighError"})}}Object.defineProperty(t1,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});class n1 extends V{constructor({cause:e,nonce:n}={}){super([`Nonce provided for the transaction ${n?`(${n}) `:""}is lower than the current nonce of the account.`,"Try increasing the nonce or find the latest nonce with `getTransactionCount`."].join(`
`),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooLowError"})}}Object.defineProperty(n1,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});class r1 extends V{constructor({cause:e,nonce:n}={}){super(`Nonce provided for the transaction ${n?`(${n}) `:""}exceeds the maximum allowed nonce.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceMaxValueError"})}}Object.defineProperty(r1,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});class i1 extends V{constructor({cause:e}={}){super(["The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."].join(`
`),{cause:e,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InsufficientFundsError"})}}Object.defineProperty(i1,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds/});class o1 extends V{constructor({cause:e,gas:n}={}){super(`The amount of gas ${n?`(${n}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooHighError"})}}Object.defineProperty(o1,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});class s1 extends V{constructor({cause:e,gas:n}={}){super(`The amount of gas ${n?`(${n}) `:""}provided for the transaction is too low.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooLowError"})}}Object.defineProperty(s1,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});class a1 extends V{constructor({cause:e}){super("The transaction type is not supported for this chain.",{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionTypeNotSupportedError"})}}Object.defineProperty(a1,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});class Gl extends V{constructor({cause:e,maxPriorityFeePerGas:n,maxFeePerGas:r}={}){super([`The provided tip (\`maxPriorityFeePerGas\`${n?` = ${gn(n)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${r?` = ${gn(r)} gwei`:""}).`].join(`
`),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TipAboveFeeCapError"})}}Object.defineProperty(Gl,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});class eh extends V{constructor({cause:e}){super(`An error occurred while executing: ${e==null?void 0:e.shortMessage}`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownNodeError"})}}const o_=/^0x[a-fA-F0-9]{40}$/;function en(t){return o_.test(t)}function si(t){return typeof t[0]=="string"?ka(t):s_(t)}function s_(t){let e=0;for(const i of t)e+=i.length;const n=new Uint8Array(e);let r=0;for(const i of t)n.set(i,r),r+=i.length;return n}function ka(t){return`0x${t.reduce((e,n)=>e+n.replace("0x",""),"")}`}function a_(t,e){const n=t.exec(e);return n==null?void 0:n.groups}const ky=/^tuple(?<array>(\[(\d*)\])*)$/;function l1(t){let e=t.type;if(ky.test(t.type)&&"components"in t){e="(";const n=t.components.length;for(let i=0;i<n;i++){const o=t.components[i];e+=l1(o),i<n-1&&(e+=", ")}const r=a_(ky,t.type);return e+=`)${(r==null?void 0:r.array)??""}`,l1({...t,type:e})}return"indexed"in t&&t.indexed&&(e=`${e} indexed`),t.name?`${e} ${t.name}`:e}function el(t){let e="";const n=t.length;for(let r=0;r<n;r++){const i=t[r];e+=l1(i),r!==n-1&&(e+=", ")}return e}function l_(t){return t.type==="function"?`function ${t.name}(${el(t.inputs)})${t.stateMutability&&t.stateMutability!=="nonpayable"?` ${t.stateMutability}`:""}${t.outputs.length?` returns (${el(t.outputs)})`:""}`:t.type==="event"?`event ${t.name}(${el(t.inputs)})`:t.type==="error"?`error ${t.name}(${el(t.inputs)})`:t.type==="constructor"?`constructor(${el(t.inputs)})${t.stateMutability==="payable"?" payable":""}`:t.type==="fallback"?"fallback()":"receive() external payable"}function ge(t,e,n){return r=>{var i;return((i=t[e.name||n])==null?void 0:i.call(t,r))??e(t,r)}}function ai(t,{includeName:e=!1}={}){if(t.type!=="function"&&t.type!=="event"&&t.type!=="error")throw new E_(t.type);return`${t.name}(${th(t.inputs,{includeName:e})})`}function th(t,{includeName:e=!1}={}){return t?t.map(n=>c_(n,{includeName:e})).join(e?", ":","):""}function c_(t,{includeName:e}){return t.type.startsWith("tuple")?`(${th(t.components,{includeName:e})})${t.type.slice(5)}`:t.type+(e&&t.name?` ${t.name}`:"")}class u_ extends V{constructor({docsPath:e}){super(["A constructor was not found on the ABI.","Make sure you are using the correct ABI and that the constructor exists on it."].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorNotFoundError"})}}class Ry extends V{constructor({docsPath:e}){super(["Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.","Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists."].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorParamsNotFoundError"})}}class og extends V{constructor({data:e,params:n,size:r}){super([`Data size of ${r} bytes is too small for given parameters.`].join(`
`),{metaMessages:[`Params: (${th(n,{includeName:!0})})`,`Data:   ${e} (${r} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingDataSizeTooSmallError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e,this.params=n,this.size=r}}class nh extends V{constructor(){super('Cannot decode zero data ("0x") with ABI parameters.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingZeroDataError"})}}class d_ extends V{constructor({expectedLength:e,givenLength:n,type:r}){super([`ABI encoding array length mismatch for type ${r}.`,`Expected length: ${e}`,`Given length: ${n}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingArrayLengthMismatchError"})}}class f_ extends V{constructor({expectedSize:e,value:n}){super(`Size of bytes "${n}" (bytes${Pt(n)}) does not match expected size (bytes${e}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingBytesSizeMismatchError"})}}class h_ extends V{constructor({expectedLength:e,givenLength:n}){super(["ABI encoding params/values length mismatch.",`Expected length (params): ${e}`,`Given length (values): ${n}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingLengthMismatchError"})}}class t5 extends V{constructor(e,{docsPath:n}){super([`Encoded error signature "${e}" not found on ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiErrorSignatureNotFoundError"}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.signature=e}}class p_ extends V{constructor({docsPath:e}){super("Cannot extract event signature from empty topics.",{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureEmptyTopicsError"})}}class m_ extends V{constructor(e,{docsPath:n}){super([`Encoded event signature "${e}" not found on ABI.`,"Make sure you are using the correct ABI and that the event exists on it.",`You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureNotFoundError"})}}class Ny extends V{constructor(e,{docsPath:n}={}){super([`Event ${e?`"${e}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the event exists on it."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventNotFoundError"})}}class zd extends V{constructor(e,{docsPath:n}={}){super([`Function ${e?`"${e}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the function exists on it."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionNotFoundError"})}}class g_ extends V{constructor(e,{docsPath:n}){super([`Function "${e}" does not contain any \`outputs\` on ABI.`,"Cannot decode function result without knowing what the parameter types are.","Make sure you are using the correct ABI and that the function exists on it."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionOutputsNotFoundError"})}}class w_ extends V{constructor(e,n){super("Found ambiguous types in overloaded ABI items.",{metaMessages:[`\`${e.type}\` in \`${ai(e.abiItem)}\`, and`,`\`${n.type}\` in \`${ai(n.abiItem)}\``,"","These types encode differently and cannot be distinguished at runtime.","Remove one of the ambiguous items in the ABI."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiItemAmbiguityError"})}}class y_ extends V{constructor({expectedSize:e,givenSize:n}){super(`Expected bytes${e}, got bytes${n}.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BytesSizeMismatchError"})}}class zo extends V{constructor({abiItem:e,data:n,params:r,size:i}){super([`Data size of ${i} bytes is too small for non-indexed event parameters.`].join(`
`),{metaMessages:[`Params: (${th(r,{includeName:!0})})`,`Data:   ${n} (${i} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogDataMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=e,this.data=n,this.params=r,this.size=i}}class Ra extends V{constructor({abiItem:e,param:n}){super([`Expected a topic for indexed event parameter${n.name?` "${n.name}"`:""} on event "${ai(e,{includeName:!0})}".`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogTopicsMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=e}}class v_ extends V{constructor(e,{docsPath:n}){super([`Type "${e}" is not a valid encoding type.`,"Please provide a valid ABI type."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiEncodingType"})}}class b_ extends V{constructor(e,{docsPath:n}){super([`Type "${e}" is not a valid decoding type.`,"Please provide a valid ABI type."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiDecodingType"})}}class x_ extends V{constructor(e){super([`Value "${e}" is not a valid array.`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidArrayError"})}}class E_ extends V{constructor(e){super([`"${e}" is not a valid definition type.`,'Valid types: "function", "event", "error"'].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidDefinitionTypeError"})}}class __ extends V{constructor(e){super(`Filter type "${e}" is not supported.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FilterTypeNotSupportedError"})}}function C_(t){let e=!0,n="",r=0,i="",o=!1;for(let s=0;s<t.length;s++){const a=t[s];if(["(",")",","].includes(a)&&(e=!0),a==="("&&r++,a===")"&&r--,!!e){if(r===0){if(a===" "&&["event","function",""].includes(i))i="";else if(i+=a,a===")"){o=!0;break}continue}if(a===" "){t[s-1]!==","&&n!==","&&n!==",("&&(n="",e=!1);continue}i+=a,n+=a}}if(!o)throw new V("Unable to normalize signature.");return i}const n5=t=>{const e=(()=>typeof t=="string"?t:l_(t))();return C_(e)},S_=t=>n5(t);function My(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}function r5(t,...e){if(!(t instanceof Uint8Array))throw new Error("Expected Uint8Array");if(e.length>0&&!e.includes(t.length))throw new Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`)}function Uy(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function T_(t,e){r5(t);const n=e.outputLen;if(t.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const ju=BigInt(2**32-1),Ly=BigInt(32);function A_(t,e=!1){return e?{h:Number(t&ju),l:Number(t>>Ly&ju)}:{h:Number(t>>Ly&ju)|0,l:Number(t&ju)|0}}function P_(t,e=!1){let n=new Uint32Array(t.length),r=new Uint32Array(t.length);for(let i=0;i<t.length;i++){const{h:o,l:s}=A_(t[i],e);[n[i],r[i]]=[o,s]}return[n,r]}const I_=(t,e,n)=>t<<n|e>>>32-n,$_=(t,e,n)=>e<<n|t>>>32-n,O_=(t,e,n)=>e<<n-32|t>>>64-n,D_=(t,e,n)=>t<<n-32|e>>>64-n;/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const k_=t=>t instanceof Uint8Array,R_=t=>new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4)),N_=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!N_)throw new Error("Non little-endian hardware is not supported");function M_(t){if(typeof t!="string")throw new Error(`utf8ToBytes expected string, got ${typeof t}`);return new Uint8Array(new TextEncoder().encode(t))}function i5(t){if(typeof t=="string"&&(t=M_(t)),!k_(t))throw new Error(`expected Uint8Array, got ${typeof t}`);return t}class U_{clone(){return this._cloneInto()}}function L_(t){const e=r=>t().update(i5(r)).digest(),n=t();return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=()=>t(),e}const[o5,s5,a5]=[[],[],[]],B_=BigInt(0),tl=BigInt(1),j_=BigInt(2),F_=BigInt(7),W_=BigInt(256),z_=BigInt(113);for(let t=0,e=tl,n=1,r=0;t<24;t++){[n,r]=[r,(2*n+3*r)%5],o5.push(2*(5*r+n)),s5.push((t+1)*(t+2)/2%64);let i=B_;for(let o=0;o<7;o++)e=(e<<tl^(e>>F_)*z_)%W_,e&j_&&(i^=tl<<(tl<<BigInt(o))-tl);a5.push(i)}const[H_,V_]=P_(a5,!0),By=(t,e,n)=>n>32?O_(t,e,n):I_(t,e,n),jy=(t,e,n)=>n>32?D_(t,e,n):$_(t,e,n);function q_(t,e=24){const n=new Uint32Array(10);for(let r=24-e;r<24;r++){for(let s=0;s<10;s++)n[s]=t[s]^t[s+10]^t[s+20]^t[s+30]^t[s+40];for(let s=0;s<10;s+=2){const a=(s+8)%10,l=(s+2)%10,c=n[l],u=n[l+1],d=By(c,u,1)^n[a],p=jy(c,u,1)^n[a+1];for(let w=0;w<50;w+=10)t[s+w]^=d,t[s+w+1]^=p}let i=t[2],o=t[3];for(let s=0;s<24;s++){const a=s5[s],l=By(i,o,a),c=jy(i,o,a),u=o5[s];i=t[u],o=t[u+1],t[u]=l,t[u+1]=c}for(let s=0;s<50;s+=10){for(let a=0;a<10;a++)n[a]=t[s+a];for(let a=0;a<10;a++)t[s+a]^=~n[(a+2)%10]&n[(a+4)%10]}t[0]^=H_[r],t[1]^=V_[r]}n.fill(0)}class sg extends U_{constructor(e,n,r,i=!1,o=24){if(super(),this.blockLen=e,this.suffix=n,this.outputLen=r,this.enableXOF=i,this.rounds=o,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,My(r),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=R_(this.state)}keccak(){q_(this.state32,this.rounds),this.posOut=0,this.pos=0}update(e){Uy(this);const{blockLen:n,state:r}=this;e=i5(e);const i=e.length;for(let o=0;o<i;){const s=Math.min(n-this.pos,i-o);for(let a=0;a<s;a++)r[this.pos++]^=e[o++];this.pos===n&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:e,suffix:n,pos:r,blockLen:i}=this;e[r]^=n,n&128&&r===i-1&&this.keccak(),e[i-1]^=128,this.keccak()}writeInto(e){Uy(this,!1),r5(e),this.finish();const n=this.state,{blockLen:r}=this;for(let i=0,o=e.length;i<o;){this.posOut>=r&&this.keccak();const s=Math.min(r-this.posOut,o-i);e.set(n.subarray(this.posOut,this.posOut+s),i),this.posOut+=s,i+=s}return e}xofInto(e){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return My(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(T_(e,this),this.finished)throw new Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){const{blockLen:n,suffix:r,outputLen:i,rounds:o,enableXOF:s}=this;return e||(e=new sg(n,r,i,s,o)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=o,e.suffix=r,e.outputLen=i,e.enableXOF=s,e.destroyed=this.destroyed,e}}const Z_=(t,e,n)=>L_(()=>new sg(e,t,n)),G_=Z_(1,136,256/8);function Qt(t,e){const n=e||"hex",r=G_(Dr(t,{strict:!1})?Yi(t):t);return n==="bytes"?r:Ae(r)}const K_=t=>Qt(Yi(t)),ag=t=>K_(S_(t));function _t(t,e,n,{strict:r}={}){return Dr(t,{strict:!1})?Q_(t,e,n,{strict:r}):Y_(t,e,n,{strict:r})}function l5(t,e){if(typeof e=="number"&&e>0&&e>Pt(t)-1)throw new Gb({offset:e,position:"start",size:Pt(t)})}function c5(t,e,n){if(typeof e=="number"&&typeof n=="number"&&Pt(t)!==n-e)throw new Gb({offset:n,position:"end",size:Pt(t)})}function Y_(t,e,n,{strict:r}={}){l5(t,e);const i=t.slice(e,n);return r&&c5(i,e,n),i}function Q_(t,e,n,{strict:r}={}){l5(t,e);const i=`0x${t.replace("0x","").slice((e??0)*2,(n??t.length)*2)}`;return r&&c5(i,e,n),i}function Xc(t,e){if(t.length!==e.length)throw new h_({expectedLength:t.length,givenLength:e.length});const n=X_({params:t,values:e}),r=cg(n);return r.length===0?"0x":r}function X_({params:t,values:e}){const n=[];for(let r=0;r<t.length;r++)n.push(lg({param:t[r],value:e[r]}));return n}function lg({param:t,value:e}){const n=rh(t.type);if(n){const[r,i]=n;return eC(e,{length:r,param:{...t,type:i}})}if(t.type==="tuple")return oC(e,{param:t});if(t.type==="address")return J_(e);if(t.type==="bool")return nC(e);if(t.type.startsWith("uint")||t.type.startsWith("int")){const r=t.type.startsWith("int");return rC(e,{signed:r})}if(t.type.startsWith("bytes"))return tC(e,{param:t});if(t.type==="string")return iC(e);throw new v_(t.type,{docsPath:"/docs/contract/encodeAbiParameters"})}function cg(t){let e=0;for(let o=0;o<t.length;o++){const{dynamic:s,encoded:a}=t[o];s?e+=32:e+=Pt(a)}const n=[],r=[];let i=0;for(let o=0;o<t.length;o++){const{dynamic:s,encoded:a}=t[o];s?(n.push(Se(e+i,{size:32})),r.push(a),i+=Pt(a)):n.push(a)}return si([...n,...r])}function J_(t){if(!en(t))throw new Wn({address:t});return{dynamic:!1,encoded:Hi(t.toLowerCase())}}function eC(t,{length:e,param:n}){const r=e===null;if(!Array.isArray(t))throw new x_(t);if(!r&&t.length!==e)throw new d_({expectedLength:e,givenLength:t.length,type:`${n.type}[${e}]`});let i=!1;const o=[];for(let s=0;s<t.length;s++){const a=lg({param:n,value:t[s]});a.dynamic&&(i=!0),o.push(a)}if(r||i){const s=cg(o);if(r){const a=Se(o.length,{size:32});return{dynamic:!0,encoded:o.length>0?si([a,s]):a}}if(i)return{dynamic:!0,encoded:s}}return{dynamic:!1,encoded:si(o.map(({encoded:s})=>s))}}function tC(t,{param:e}){const[,n]=e.type.split("bytes"),r=Pt(t);if(!n){let i=t;return r%32!==0&&(i=Hi(i,{dir:"right",size:Math.ceil((t.length-2)/2/32)*32})),{dynamic:!0,encoded:si([Hi(Se(r,{size:32})),i])}}if(r!==parseInt(n))throw new f_({expectedSize:parseInt(n),value:t});return{dynamic:!1,encoded:Hi(t,{dir:"right"})}}function nC(t){return{dynamic:!1,encoded:Hi(Yb(t))}}function rC(t,{signed:e}){return{dynamic:!1,encoded:Se(t,{size:32,signed:e})}}function iC(t){const e=ng(t),n=Math.ceil(Pt(e)/32),r=[];for(let i=0;i<n;i++)r.push(Hi(_t(e,i*32,(i+1)*32),{dir:"right"}));return{dynamic:!0,encoded:si([Hi(Se(Pt(e),{size:32})),...r])}}function oC(t,{param:e}){let n=!1;const r=[];for(let i=0;i<e.components.length;i++){const o=e.components[i],s=Array.isArray(t)?i:o.name,a=lg({param:o,value:t[s]});r.push(a),a.dynamic&&(n=!0)}return{dynamic:n,encoded:n?cg(r):si(r.map(({encoded:i})=>i))}}function rh(t){const e=t.match(/^(.*)\[(\d+)?\]$/);return e?[e[2]?Number(e[2]):null,e[1]]:void 0}const sC=t=>Qt(Yi(t)),ug=t=>_t(sC(n5(t)),0,4);function Jc({abi:t,args:e=[],name:n}){const r=Dr(n,{strict:!1}),i=t.filter(s=>r?s.type==="function"?ug(s)===n:s.type==="event"?ag(s)===n:!1:"name"in s&&s.name===n);if(i.length===0)return;if(i.length===1)return i[0];let o;for(const s of i){if(!("inputs"in s))continue;if(!e||e.length===0){if(!s.inputs||s.inputs.length===0)return s;continue}if(!s.inputs||s.inputs.length===0||s.inputs.length!==e.length)continue;if(e.every((l,c)=>{const u="inputs"in s&&s.inputs[c];return u?c1(l,u):!1})){if(o&&"inputs"in o&&o.inputs){const l=u5(s.inputs,o.inputs,e);if(l)throw new w_({abiItem:s,type:l[0]},{abiItem:o,type:l[1]})}o=s}}return o||i[0]}function c1(t,e){const n=typeof t,r=e.type;switch(r){case"address":return en(t);case"bool":return n==="boolean";case"function":return n==="string";case"string":return n==="string";default:return r==="tuple"&&"components"in e?Object.values(e.components).every((i,o)=>c1(Object.values(t)[o],i)):/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(r)?n==="number"||n==="bigint":/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(r)?n==="string"||t instanceof Uint8Array:/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(r)?Array.isArray(t)&&t.every(i=>c1(i,{...e,type:r.replace(/(\[[0-9]{0,}\])$/,"")})):!1}}function u5(t,e,n){for(const r in t){const i=t[r],o=e[r];if(i.type==="tuple"&&o.type==="tuple"&&"components"in i&&"components"in o)return u5(i.components,o.components,n[r]);const s=[i.type,o.type];if((()=>s.includes("address")&&s.includes("bytes20")?!0:s.includes("address")&&s.includes("string")||s.includes("address")&&s.includes("bytes")?en(n[r]):!1)())return s}}function eu({abi:t,eventName:e,args:n}){var a;let r=t[0];if(e&&(r=Jc({abi:t,args:n,name:e}),!r))throw new Ny(e,{docsPath:"/docs/contract/encodeEventTopics"});if(r.type!=="event")throw new Ny(void 0,{docsPath:"/docs/contract/encodeEventTopics"});const i=ai(r),o=ag(i);let s=[];if(n&&"inputs"in r){const l=(a=r.inputs)==null?void 0:a.filter(u=>"indexed"in u&&u.indexed),c=Array.isArray(n)?n:Object.values(n).length>0?(l==null?void 0:l.map(u=>n[u.name]))??[]:[];c.length>0&&(s=(l==null?void 0:l.map((u,d)=>Array.isArray(c[d])?c[d].map((p,w)=>Fy({param:u,value:c[d][w]})):c[d]?Fy({param:u,value:c[d]}):null))??[])}return[o,...s]}function Fy({param:t,value:e}){if(t.type==="string"||t.type==="bytes")return Qt(Yi(e));if(t.type==="tuple"||t.type.match(/^(.*)\[(\d+)?\]$/))throw new __(t.type);return Xc([t],[e])}function ih(t,{method:e}){var r,i;const n={};return t.transport.type==="fallback"&&((i=(r=t.transport).onResponse)==null||i.call(r,({method:o,response:s,status:a,transport:l})=>{a==="success"&&e===o&&(n[s]=l.request)})),o=>n[o]||t.request}async function d5(t,{address:e,abi:n,args:r,eventName:i,fromBlock:o,strict:s,toBlock:a}){const l=ih(t,{method:"eth_newFilter"}),c=i?eu({abi:n,args:r,eventName:i}):void 0,u=await t.request({method:"eth_newFilter",params:[{address:e,fromBlock:typeof o=="bigint"?Se(o):o,toBlock:typeof a=="bigint"?Se(a):a,topics:c}]});return{abi:n,args:r,eventName:i,id:u,request:l(u),strict:s,type:"event"}}function Kn(t){return typeof t=="string"?{address:t,type:"json-rpc"}:t}function ao({abi:t,args:e,functionName:n}){let r=t[0];if(n&&(r=Jc({abi:t,args:e,name:n}),!r))throw new zd(n,{docsPath:"/docs/contract/encodeFunctionData"});if(r.type!=="function")throw new zd(void 0,{docsPath:"/docs/contract/encodeFunctionData"});const i=ai(r),o=ug(i),s="inputs"in r&&r.inputs?Xc(r.inputs,e??[]):void 0;return ka([o,s??"0x"])}const f5={1:"An `assert` condition failed.",17:"Arithmic operation resulted in underflow or overflow.",18:"Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",33:"Attempted to convert to an invalid type.",34:"Attempted to access a storage byte array that is incorrectly encoded.",49:"Performed `.pop()` on an empty array",50:"Array index is out of bounds.",65:"Allocated too much memory or created an array which is too large.",81:"Attempted to call a zero-initialized variable of internal function type."},aC={inputs:[{name:"message",type:"string"}],name:"Error",type:"error"},lC={inputs:[{name:"reason",type:"uint256"}],name:"Panic",type:"error"};function dg(t,e){const n=e?`${e}${t.toLowerCase()}`:t.substring(2).toLowerCase(),r=Qt(ei(n),"bytes"),i=(e?n.substring(`${e}0x`.length):n).split("");for(let o=0;o<40;o+=2)r[o>>1]>>4>=8&&i[o]&&(i[o]=i[o].toUpperCase()),(r[o>>1]&15)>=8&&i[o+1]&&(i[o+1]=i[o+1].toUpperCase());return`0x${i.join("")}`}function zn(t,e){if(!en(t))throw new Wn({address:t});return dg(t,e)}function oh(t,e){if(e==="0x"&&t.length>0)throw new nh;if(Pt(e)&&Pt(e)<32)throw new og({data:e,params:t,size:Pt(e)});return cC({data:e,params:t})}function cC({data:t,params:e}){const n=[];let r=0;for(let i=0;i<e.length;i++){if(r>=Pt(t))throw new og({data:t,params:e,size:Pt(t)});const o=e[i],{consumed:s,value:a}=Hs({data:t,param:o,position:r});n.push(a),r+=s}return n}function Hs({data:t,param:e,position:n}){const r=rh(e.type);if(r){const[o,s]=r;return dC(t,{length:o,param:{...e,type:s},position:n})}if(e.type==="tuple")return gC(t,{param:e,position:n});if(e.type==="string")return mC(t,{position:n});if(e.type.startsWith("bytes"))return hC(t,{param:e,position:n});const i=_t(t,n,n+32,{strict:!0});if(e.type.startsWith("uint")||e.type.startsWith("int"))return pC(i,{param:e});if(e.type==="address")return uC(i);if(e.type==="bool")return fC(i);throw new b_(e.type,{docsPath:"/docs/contract/decodeAbiParameters"})}function uC(t){return{consumed:32,value:dg(_t(t,-20))}}function dC(t,{param:e,length:n,position:r}){if(!n){const s=Ut(_t(t,r,r+32,{strict:!0})),a=Ut(_t(t,s,s+32,{strict:!0}));let l=0;const c=[];for(let u=0;u<a;++u){const d=Hs({data:_t(t,s+32),param:e,position:l});l+=d.consumed,c.push(d.value)}return{value:c,consumed:32}}if(Hd(e)){const s=rh(e.type),a=!(s!=null&&s[0]);let l=0;const c=[];for(let u=0;u<n;++u){const d=Ut(_t(t,r,r+32,{strict:!0})),p=Hs({data:_t(t,d),param:e,position:a?l:u*32});l+=p.consumed,c.push(p.value)}return{value:c,consumed:32}}let i=0;const o=[];for(let s=0;s<n;++s){const a=Hs({data:t,param:e,position:r+i});i+=a.consumed,o.push(a.value)}return{value:o,consumed:i}}function fC(t){return{consumed:32,value:ZE(t)}}function hC(t,{param:e,position:n}){const[r,i]=e.type.split("bytes");if(!i){const s=Ut(_t(t,n,n+32,{strict:!0})),a=Ut(_t(t,s,s+32,{strict:!0}));return a===0?{consumed:32,value:"0x"}:{consumed:32,value:_t(t,s+32,s+32+a,{strict:!0})}}return{consumed:32,value:_t(t,n,n+parseInt(i),{strict:!0})}}function pC(t,{param:e}){const n=e.type.startsWith("int");return{consumed:32,value:parseInt(e.type.split("int")[1]||"256")>48?Ht(t,{signed:n}):Ut(t,{signed:n})}}function mC(t,{position:e}){const n=Ut(_t(t,e,e+32,{strict:!0})),r=Ut(_t(t,n,n+32,{strict:!0}));return r===0?{consumed:32,value:""}:{consumed:32,value:Qb(cr(_t(t,n+32,n+32+r,{strict:!0})))}}function gC(t,{param:e,position:n}){const r=e.components.length===0||e.components.some(({name:s})=>!s),i=r?[]:{};let o=0;if(Hd(e)){const s=Ut(_t(t,n,n+32,{strict:!0}));for(let a=0;a<e.components.length;++a){const l=e.components[a],c=Hs({data:_t(t,s),param:l,position:o});o+=c.consumed,i[r?a:l==null?void 0:l.name]=c.value}return{consumed:32,value:i}}for(let s=0;s<e.components.length;++s){const a=e.components[s],l=Hs({data:t,param:a,position:n+o});o+=l.consumed,i[r?s:a==null?void 0:a.name]=l.value}return{consumed:o,value:i}}function Hd(t){var r;const{type:e}=t;if(e==="string"||e==="bytes"||e.endsWith("[]"))return!0;if(e==="tuple")return(r=t.components)==null?void 0:r.some(Hd);const n=rh(t.type);return!!(n&&Hd({...t,type:n[1]}))}function wC({abi:t,data:e}){const n=_t(e,0,4);if(n==="0x")throw new nh;const i=[...t||[],aC,lC].find(o=>o.type==="error"&&n===ug(ai(o)));if(!i)throw new t5(n,{docsPath:"/docs/contract/decodeErrorResult"});return{abiItem:i,args:"inputs"in i&&i.inputs&&i.inputs.length>0?oh(i.inputs,_t(e,4)):void 0,errorName:i.name}}const tn=(t,e,n)=>JSON.stringify(t,(r,i)=>{const o=typeof i=="bigint"?i.toString():i;return typeof e=="function"?e(r,o):o},n);function h5({abiItem:t,args:e,includeFunctionName:n=!0,includeName:r=!1}){if("name"in t&&"inputs"in t&&t.inputs)return`${n?t.name:""}(${t.inputs.map((i,o)=>`${r&&i.name?`${i.name}: `:""}${typeof e[o]=="object"?tn(e[o]):e[o]}`).join(", ")})`}function fg(t,e="wei"){return Wd(t,n_[e])}function tu(t){const e=Object.entries(t).map(([r,i])=>i===void 0||i===!1?null:[r,i]).filter(Boolean),n=e.reduce((r,[i])=>Math.max(r,i.length),0);return e.map(([r,i])=>`  ${`${r}:`.padEnd(n+1)}  ${i}`).join(`
`)}class yC extends V{constructor(){super(["Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.","Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeConflictError"})}}class vC extends V{constructor({v:e}){super(`Invalid \`v\` value "${e}". Expected 27 or 28.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidLegacyVError"})}}class bC extends V{constructor({transaction:e}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",tu(e),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- a Legacy Transaction with `gasPrice`"]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidSerializableTransactionError"})}}class xC extends V{constructor({storageKey:e}){super(`Size for storage key "${e}" is invalid. Expected 32 bytes. Got ${Math.floor((e.length-2)/2)} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidStorageKeySizeError"})}}class EC extends V{constructor(e,{account:n,docsPath:r,chain:i,data:o,gas:s,gasPrice:a,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:d,value:p}){var y;const w=tu({chain:i&&`${i==null?void 0:i.name} (id: ${i==null?void 0:i.id})`,from:n==null?void 0:n.address,to:d,value:typeof p<"u"&&`${fg(p)} ${((y=i==null?void 0:i.nativeCurrency)==null?void 0:y.symbol)||"ETH"}`,data:o,gas:s,gasPrice:typeof a<"u"&&`${gn(a)} gwei`,maxFeePerGas:typeof l<"u"&&`${gn(l)} gwei`,maxPriorityFeePerGas:typeof c<"u"&&`${gn(c)} gwei`,nonce:u});super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Request Arguments:",w].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionExecutionError"}),this.cause=e}}class p5 extends V{constructor({blockHash:e,blockNumber:n,blockTag:r,hash:i,index:o}){let s="Transaction";r&&o!==void 0&&(s=`Transaction at block time "${r}" at index "${o}"`),e&&o!==void 0&&(s=`Transaction at block hash "${e}" at index "${o}"`),n&&o!==void 0&&(s=`Transaction at block number "${n}" at index "${o}"`),i&&(s=`Transaction with hash "${i}"`),super(`${s} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionNotFoundError"})}}class m5 extends V{constructor({hash:e}){super(`Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionReceiptNotFoundError"})}}class _C extends V{constructor({hash:e}){super(`Timed out while waiting for transaction with hash "${e}" to be confirmed.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WaitForTransactionReceiptTimeoutError"})}}class g5 extends V{constructor(e,{account:n,docsPath:r,chain:i,data:o,gas:s,gasPrice:a,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:d,value:p}){var E;const w=n?Kn(n):void 0,y=tu({from:w==null?void 0:w.address,to:d,value:typeof p<"u"&&`${fg(p)} ${((E=i==null?void 0:i.nativeCurrency)==null?void 0:E.symbol)||"ETH"}`,data:o,gas:s,gasPrice:typeof a<"u"&&`${gn(a)} gwei`,maxFeePerGas:typeof l<"u"&&`${gn(l)} gwei`,maxPriorityFeePerGas:typeof c<"u"&&`${gn(c)} gwei`,nonce:u});super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Raw Call Arguments:",y].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"CallExecutionError"}),this.cause=e}}class hg extends V{constructor(e,{abi:n,args:r,contractAddress:i,docsPath:o,functionName:s,sender:a}){const l=Jc({abi:n,args:r,name:s}),c=l?h5({abiItem:l,args:r,includeFunctionName:!1,includeName:!1}):void 0,u=l?ai(l,{includeName:!0}):void 0,d=tu({address:i&&ME(i),function:u,args:c&&c!=="()"&&`${[...Array((s==null?void 0:s.length)??0).keys()].map(()=>" ").join("")}${c}`,sender:a});super(e.shortMessage||`An unknown error occurred while executing the contract function "${s}".`,{cause:e,docsPath:o,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Contract Call:",d].filter(Boolean)}),Object.defineProperty(this,"abi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"args",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"contractAddress",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"formattedArgs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"functionName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sender",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionExecutionError"}),this.abi=n,this.args=r,this.cause=e,this.contractAddress=i,this.functionName=s,this.sender=a}}class u1 extends V{constructor({abi:e,data:n,functionName:r,message:i}){let o,s,a,l;if(n&&n!=="0x")try{s=wC({abi:e,data:n});const{abiItem:u,errorName:d,args:p}=s;if(d==="Error")l=p[0];else if(d==="Panic"){const[w]=p;l=f5[w]}else{const w=u?ai(u,{includeName:!0}):void 0,y=u&&p?h5({abiItem:u,args:p,includeFunctionName:!1,includeName:!1}):void 0;a=[w?`Error: ${w}`:"",y&&y!=="()"?`       ${[...Array((d==null?void 0:d.length)??0).keys()].map(()=>" ").join("")}${y}`:""]}}catch(u){o=u}else i&&(l=i);let c;o instanceof t5&&(c=o.signature,a=[`Unable to decode signature "${c}" as it was not found on the provided ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${c}.`]),super(l&&l!=="execution reverted"||c?[`The contract function "${r}" reverted with the following ${c?"signature":"reason"}:`,l||c].join(`
`):`The contract function "${r}" reverted.`,{cause:o,metaMessages:a}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionRevertedError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"reason",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=s,this.reason=l,this.signature=c}}class CC extends V{constructor({functionName:e}){super(`The contract function "${e}" returned no data ("0x").`,{metaMessages:["This could be due to any of the following:",`  - The contract does not have the function "${e}",`,"  - The parameters passed to the contract function may be invalid, or","  - The address is not a contract."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionZeroDataError"})}}class pg extends V{constructor({data:e,message:n}){super(n||""),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RawContractError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e}}class Cl extends V{constructor({body:e,details:n,headers:r,status:i,url:o}){super("HTTP request failed.",{details:n,metaMessages:[i&&`Status: ${i}`,`URL: ${Qf(o)}`,e&&`Request body: ${tn(e)}`].filter(Boolean)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=e,this.headers=r,this.status=i,this.url=o}}class SC extends V{constructor({body:e,details:n,url:r}){super("WebSocket request failed.",{details:n,metaMessages:[`URL: ${Qf(r)}`,`Request body: ${tn(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WebSocketRequestError"})}}class mg extends V{constructor({body:e,error:n,url:r}){super("RPC Request failed.",{cause:n,details:n.message,metaMessages:[`URL: ${Qf(r)}`,`Request body: ${tn(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=n.code}}class d1 extends V{constructor({body:e,url:n}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${Qf(n)}`,`Request body: ${tn(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TimeoutError"})}}const TC=-1;class vn extends V{constructor(e,{code:n,docsPath:r,metaMessages:i,shortMessage:o}){super(o,{cause:e,docsPath:r,metaMessages:i||(e==null?void 0:e.metaMessages)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=e.name,this.code=e instanceof mg?e.code:n??TC}}class Na extends vn{constructor(e,n){super(e,n),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderRpcError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=n.data}}class Kl extends vn{constructor(e){super(e,{code:Kl.code,shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ParseRpcError"})}}Object.defineProperty(Kl,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});class Yl extends vn{constructor(e){super(e,{code:Yl.code,shortMessage:"JSON is not a valid request object."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRequestRpcError"})}}Object.defineProperty(Yl,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});class Ql extends vn{constructor(e){super(e,{code:Ql.code,shortMessage:"The method does not exist / is not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotFoundRpcError"})}}Object.defineProperty(Ql,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});class Xl extends vn{constructor(e){super(e,{code:Xl.code,shortMessage:["Invalid parameters were provided to the RPC method.","Double check you have provided the correct parameters."].join(`
`)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParamsRpcError"})}}Object.defineProperty(Xl,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});class ia extends vn{constructor(e){super(e,{code:ia.code,shortMessage:"An internal error was received."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InternalRpcError"})}}Object.defineProperty(ia,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});class Ho extends vn{constructor(e){super(e,{code:Ho.code,shortMessage:["Missing or invalid parameters.","Double check you have provided the correct parameters."].join(`
`)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidInputRpcError"})}}Object.defineProperty(Ho,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});class Jl extends vn{constructor(e){super(e,{code:Jl.code,shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}}Object.defineProperty(Jl,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});class oa extends vn{constructor(e){super(e,{code:oa.code,shortMessage:"Requested resource not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceUnavailableRpcError"})}}Object.defineProperty(oa,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});class ec extends vn{constructor(e){super(e,{code:ec.code,shortMessage:"Transaction creation failed."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionRejectedRpcError"})}}Object.defineProperty(ec,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});class tc extends vn{constructor(e){super(e,{code:tc.code,shortMessage:"Method is not implemented."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotSupportedRpcError"})}}Object.defineProperty(tc,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});class nc extends vn{constructor(e){super(e,{code:nc.code,shortMessage:"Request exceeds defined limit."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"LimitExceededRpcError"})}}Object.defineProperty(nc,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});class rc extends vn{constructor(e){super(e,{code:rc.code,shortMessage:"Version of JSON-RPC protocol is not supported."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonRpcVersionUnsupportedError"})}}Object.defineProperty(rc,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});class fn extends Na{constructor(e){super(e,{code:fn.code,shortMessage:"User rejected the request."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UserRejectedRequestError"})}}Object.defineProperty(fn,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});class ic extends Na{constructor(e){super(e,{code:ic.code,shortMessage:"The requested method and/or account has not been authorized by the user."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnauthorizedProviderError"})}}Object.defineProperty(ic,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});class oc extends Na{constructor(e){super(e,{code:oc.code,shortMessage:"The Provider does not support the requested method."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnsupportedProviderMethodError"})}}Object.defineProperty(oc,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});class sc extends Na{constructor(e){super(e,{code:sc.code,shortMessage:"The Provider is disconnected from all chains."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderDisconnectedError"})}}Object.defineProperty(sc,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});class ac extends Na{constructor(e){super(e,{code:ac.code,shortMessage:"The Provider is not connected to the requested chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDisconnectedError"})}}Object.defineProperty(ac,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});class hr extends Na{constructor(e){super(e,{code:hr.code,shortMessage:"An error occurred when attempting to switch chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainError"})}}Object.defineProperty(hr,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});class AC extends vn{constructor(e){super(e,{shortMessage:"An unknown RPC error occurred."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownRpcError"})}}const PC=3;function lc(t,{abi:e,address:n,args:r,docsPath:i,functionName:o,sender:s}){const{code:a,data:l,message:c,shortMessage:u}=t instanceof pg?t:t instanceof V?t.walk(p=>"data"in p)||t.walk():{},d=(()=>t instanceof nh?new CC({functionName:o}):[PC,ia.code].includes(a)&&(l||c||u)?new u1({abi:e,data:typeof l=="object"?l.data:l,functionName:o,message:u??c}):t)();return new hg(d,{abi:e,args:r,contractAddress:n,docsPath:i,functionName:o,sender:s})}class Ma extends V{constructor({docsPath:e}={}){super(["Could not find an Account to execute with this Action.","Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient."].join(`
`),{docsPath:e,docsSlug:"account"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountNotFoundError"})}}class IC extends V{constructor(e,{account:n,docsPath:r,chain:i,data:o,gas:s,gasPrice:a,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:d,value:p}){var y;const w=tu({from:n==null?void 0:n.address,to:d,value:typeof p<"u"&&`${fg(p)} ${((y=i==null?void 0:i.nativeCurrency)==null?void 0:y.symbol)||"ETH"}`,data:o,gas:s,gasPrice:typeof a<"u"&&`${gn(a)} gwei`,maxFeePerGas:typeof l<"u"&&`${gn(l)} gwei`,maxPriorityFeePerGas:typeof c<"u"&&`${gn(c)} gwei`,nonce:u});super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Estimate Gas Arguments:",w].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EstimateGasExecutionError"}),this.cause=e}}function gg(t,e){const n=(t.details||"").toLowerCase(),r=t.walk(i=>i.code===Ms.code);return r instanceof V?new Ms({cause:t,message:r.details}):Ms.nodeMessage.test(n)?new Ms({cause:t,message:t.details}):Wo.nodeMessage.test(n)?new Wo({cause:t,maxFeePerGas:e==null?void 0:e.maxFeePerGas}):e1.nodeMessage.test(n)?new e1({cause:t,maxFeePerGas:e==null?void 0:e.maxFeePerGas}):t1.nodeMessage.test(n)?new t1({cause:t,nonce:e==null?void 0:e.nonce}):n1.nodeMessage.test(n)?new n1({cause:t,nonce:e==null?void 0:e.nonce}):r1.nodeMessage.test(n)?new r1({cause:t,nonce:e==null?void 0:e.nonce}):i1.nodeMessage.test(n)?new i1({cause:t}):o1.nodeMessage.test(n)?new o1({cause:t,gas:e==null?void 0:e.gas}):s1.nodeMessage.test(n)?new s1({cause:t,gas:e==null?void 0:e.gas}):a1.nodeMessage.test(n)?new a1({cause:t}):Gl.nodeMessage.test(n)?new Gl({cause:t,maxFeePerGas:e==null?void 0:e.maxFeePerGas,maxPriorityFeePerGas:e==null?void 0:e.maxPriorityFeePerGas}):new eh({cause:t})}function $C(t,{docsPath:e,...n}){const r=(()=>{const i=gg(t,n);return i instanceof eh?t:i})();return new IC(r,{docsPath:e,...n})}function wg(t,{format:e}){if(!e)return{};const n={};function r(o){const s=Object.keys(o);for(const a of s)a in t&&(n[a]=t[a]),o[a]&&typeof o[a]=="object"&&!Array.isArray(o[a])&&r(o[a])}const i=e(t||{});return r(i),n}function nu(t){const{account:e,gasPrice:n,maxFeePerGas:r,maxPriorityFeePerGas:i,to:o}=t,s=e?Kn(e):void 0;if(s&&!en(s.address))throw new Wn({address:s.address});if(o&&!en(o))throw new Wn({address:o});if(typeof n<"u"&&(typeof r<"u"||typeof i<"u"))throw new yC;if(r&&r>2n**256n-1n)throw new Wo({maxFeePerGas:r});if(i&&r&&i>r)throw new Gl({maxFeePerGas:r,maxPriorityFeePerGas:i})}class OC extends V{constructor(){super("`baseFeeMultiplier` must be greater than 1."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseFeeScalarError"})}}class yg extends V{constructor(){super("Chain does not support EIP-1559 fees."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Eip1559FeesNotSupportedError"})}}class DC extends V{constructor({maxPriorityFeePerGas:e}){super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${gn(e)} gwei).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MaxFeePerGasTooLowError"})}}class w5 extends V{constructor({blockHash:e,blockNumber:n}){let r="Block";e&&(r=`Block at hash "${e}"`),n&&(r=`Block at number "${n}"`),super(`${r} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BlockNotFoundError"})}}async function Qi(t,{blockHash:e,blockNumber:n,blockTag:r,includeTransactions:i}={}){var u,d,p;const o=r??"latest",s=i??!1,a=n!==void 0?Se(n):void 0;let l=null;if(e?l=await t.request({method:"eth_getBlockByHash",params:[e,s]}):l=await t.request({method:"eth_getBlockByNumber",params:[a||o,s]}),!l)throw new w5({blockHash:e,blockNumber:n});return(((p=(d=(u=t.chain)==null?void 0:u.formatters)==null?void 0:d.block)==null?void 0:p.format)||ig)(l)}async function vg(t){const e=await t.request({method:"eth_gasPrice"});return BigInt(e)}async function kC(t,e){return y5(t,e)}async function y5(t,e){var o,s,a;const{block:n,chain:r=t.chain,request:i}=e||{};if(typeof((o=r==null?void 0:r.fees)==null?void 0:o.defaultPriorityFee)=="function"){const l=n||await ge(t,Qi,"getBlock")({});return r.fees.defaultPriorityFee({block:l,client:t,request:i})}if(typeof((s=r==null?void 0:r.fees)==null?void 0:s.defaultPriorityFee)<"u")return(a=r==null?void 0:r.fees)==null?void 0:a.defaultPriorityFee;try{const l=await t.request({method:"eth_maxPriorityFeePerGas"});return Ht(l)}catch{const[l,c]=await Promise.all([n?Promise.resolve(n):ge(t,Qi,"getBlock")({}),ge(t,vg,"getGasPrice")({})]);if(typeof l.baseFeePerGas!="bigint")throw new yg;const u=c-l.baseFeePerGas;return u<0n?0n:u}}async function RC(t,e){return f1(t,e)}async function f1(t,e){var p,w;const{block:n,chain:r=t.chain,request:i,type:o="eip1559"}=e||{},s=await(async()=>{var y,E;return typeof((y=r==null?void 0:r.fees)==null?void 0:y.baseFeeMultiplier)=="function"?r.fees.baseFeeMultiplier({block:n,client:t,request:i}):((E=r==null?void 0:r.fees)==null?void 0:E.baseFeeMultiplier)??1.2})();if(s<1)throw new OC;const l=10**(((p=s.toString().split(".")[1])==null?void 0:p.length)??0),c=y=>y*BigInt(Math.ceil(s*l))/BigInt(l),u=n||await ge(t,Qi,"getBlock")({});if(typeof((w=r==null?void 0:r.fees)==null?void 0:w.estimateFeesPerGas)=="function")return r.fees.estimateFeesPerGas({block:n,client:t,multiply:c,request:i,type:o});if(o==="eip1559"){if(typeof u.baseFeePerGas!="bigint")throw new yg;const y=i!=null&&i.maxPriorityFeePerGas?i.maxPriorityFeePerGas:await y5(t,{block:u,chain:r,request:i}),E=c(u.baseFeePerGas);return{maxFeePerGas:(i==null?void 0:i.maxFeePerGas)??E+y,maxPriorityFeePerGas:y}}return{gasPrice:(i==null?void 0:i.gasPrice)??c(await ge(t,vg,"getGasPrice")({}))}}async function v5(t,{address:e,blockTag:n="latest",blockNumber:r}){const i=await t.request({method:"eth_getTransactionCount",params:[e,r?Se(r):n]});return Ut(i)}function b5(t){if(t.type)return t.type;if(typeof t.maxFeePerGas<"u"||typeof t.maxPriorityFeePerGas<"u")return"eip1559";if(typeof t.gasPrice<"u")return typeof t.accessList<"u"?"eip2930":"legacy";throw new bC({transaction:t})}async function sh(t,e){const{account:n=t.account,chain:r,gas:i,nonce:o,type:s}=e;if(!n)throw new Ma;const a=Kn(n),l=await ge(t,Qi,"getBlock")({blockTag:"latest"}),c={...e,from:a.address};if(typeof o>"u"&&(c.nonce=await ge(t,v5,"getTransactionCount")({address:a.address,blockTag:"pending"})),typeof s>"u")try{c.type=b5(c)}catch{c.type=typeof l.baseFeePerGas=="bigint"?"eip1559":"legacy"}if(c.type==="eip1559"){const{maxFeePerGas:u,maxPriorityFeePerGas:d}=await f1(t,{block:l,chain:r,request:c});if(typeof e.maxPriorityFeePerGas>"u"&&e.maxFeePerGas&&e.maxFeePerGas<d)throw new DC({maxPriorityFeePerGas:d});c.maxPriorityFeePerGas=d,c.maxFeePerGas=u}else{if(typeof e.maxFeePerGas<"u"||typeof e.maxPriorityFeePerGas<"u")throw new yg;const{gasPrice:u}=await f1(t,{block:l,chain:r,request:c,type:"legacy"});c.gasPrice=u}return typeof i>"u"&&(c.gas=await ge(t,bg,"estimateGas")({...c,account:{address:a.address,type:"json-rpc"}})),nu(c),c}async function bg(t,e){var i,o,s;const n=e.account??t.account;if(!n)throw new Ma({docsPath:"/docs/actions/public/estimateGas"});const r=Kn(n);try{const{accessList:a,blockNumber:l,blockTag:c,data:u,gas:d,gasPrice:p,maxFeePerGas:w,maxPriorityFeePerGas:y,nonce:E,to:C,value:b,...m}=r.type==="local"?await sh(t,e):e,x=(l?Se(l):void 0)||c;nu(e);const _=(s=(o=(i=t.chain)==null?void 0:i.formatters)==null?void 0:o.transactionRequest)==null?void 0:s.format,f=(_||Qc)({...wg(m,{format:_}),from:r.address,accessList:a,data:u,gas:d,gasPrice:p,maxFeePerGas:w,maxPriorityFeePerGas:y,nonce:E,to:C,value:b}),A=await t.request({method:"eth_estimateGas",params:x?[f,x]:[f]});return BigInt(A)}catch(a){throw $C(a,{...e,account:r,chain:t.chain})}}async function NC(t,{abi:e,address:n,args:r,functionName:i,...o}){const s=ao({abi:e,args:r,functionName:i});try{return await ge(t,bg,"estimateGas")({data:s,to:n,...o})}catch(a){const l=o.account?Kn(o.account):void 0;throw lc(a,{abi:e,address:n,args:r,docsPath:"/docs/contract/estimateContractGas",functionName:i,sender:l==null?void 0:l.address})}}const Wy="/docs/contract/decodeEventLog";function ru({abi:t,data:e,strict:n,topics:r}){const i=n??!0,[o,...s]=r;if(!o)throw new p_({docsPath:Wy});const a=t.find(y=>y.type==="event"&&o===ag(ai(y)));if(!(a&&"name"in a)||a.type!=="event")throw new m_(o,{docsPath:Wy});const{name:l,inputs:c}=a,u=c==null?void 0:c.some(y=>!("name"in y&&y.name));let d=u?[]:{};const p=c.filter(y=>"indexed"in y&&y.indexed);for(let y=0;y<p.length;y++){const E=p[y],C=s[y];if(!C)throw new Ra({abiItem:a,param:E});d[E.name||y]=MC({param:E,value:C})}const w=c.filter(y=>!("indexed"in y&&y.indexed));if(w.length>0){if(e&&e!=="0x")try{const y=oh(w,e);if(y)if(u)d=[...d,...y];else for(let E=0;E<w.length;E++)d[w[E].name]=y[E]}catch(y){if(i)throw y instanceof og?new zo({abiItem:a,data:y.data,params:y.params,size:y.size}):y}else if(i)throw new zo({abiItem:a,data:"0x",params:w,size:0})}return{eventName:l,args:Object.values(d).length>0?d:void 0}}function MC({param:t,value:e}){return t.type==="string"||t.type==="bytes"||t.type==="tuple"||t.type.match(/^(.*)\[(\d+)?\]$/)?e:(oh([t],e)||[])[0]}async function xg(t,{address:e,blockHash:n,fromBlock:r,toBlock:i,event:o,events:s,args:a,strict:l}={}){const c=l??!1,u=s??(o?[o]:void 0);let d=[];u&&(d=[u.flatMap(w=>eu({abi:[w],eventName:w.name,args:a}))],o&&(d=d[0]));let p;return n?p=await t.request({method:"eth_getLogs",params:[{address:e,topics:d,blockHash:n}]}):p=await t.request({method:"eth_getLogs",params:[{address:e,topics:d,fromBlock:typeof r=="bigint"?Se(r):r,toBlock:typeof i=="bigint"?Se(i):i}]}),p.map(w=>{var y;try{const{eventName:E,args:C}=u?ru({abi:u,data:w.data,topics:w.topics,strict:c}):{eventName:void 0,args:void 0};return qn(w,{args:C,eventName:E})}catch(E){let C,b;if(E instanceof zo||E instanceof Ra){if(c)return;C=E.abiItem.name,b=(y=E.abiItem.inputs)==null?void 0:y.some(m=>!("name"in m&&m.name))}return qn(w,{args:b?[]:{},eventName:C})}}).filter(Boolean)}async function x5(t,{abi:e,address:n,args:r,blockHash:i,eventName:o,fromBlock:s,toBlock:a,strict:l}){const c=o?Jc({abi:e,name:o}):void 0,u=c?void 0:e.filter(d=>d.type==="event");return ge(t,xg,"getLogs")({address:n,args:r,blockHash:i,event:c,events:u,fromBlock:s,toBlock:a,strict:l})}const S0="/docs/contract/decodeFunctionResult";function Ua({abi:t,args:e,functionName:n,data:r}){let i=t[0];if(n&&(i=Jc({abi:t,args:e,name:n}),!i))throw new zd(n,{docsPath:S0});if(i.type!=="function")throw new zd(void 0,{docsPath:S0});if(!i.outputs)throw new g_(i.name,{docsPath:S0});const o=oh(i.outputs,r);if(o&&o.length>1)return o;if(o&&o.length===1)return o[0]}const UC="modulepreload",LC=function(t){return"/"+t},zy={},sa=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=LC(o),o in zy)return;zy[o]=!0;const s=o.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(!!r)for(let u=i.length-1;u>=0;u--){const d=i[u];if(d.href===o&&(!s||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${a}`))return;const c=document.createElement("link");if(c.rel=s?"stylesheet":UC,s||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),s)return new Promise((u,d)=>{c.addEventListener("load",u),c.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e()).catch(o=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o})},h1=[{inputs:[{components:[{name:"target",type:"address"},{name:"allowFailure",type:"bool"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate3",outputs:[{components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}],name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"}],E5=[{inputs:[],name:"ResolverNotFound",type:"error"},{inputs:[],name:"ResolverWildcardNotSupported",type:"error"}],_5=[...E5,{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]}],BC=[...E5,{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]}],Hy=[{name:"text",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"key",type:"string"}],outputs:[{name:"",type:"string"}]}],Vy=[{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"}],outputs:[{name:"",type:"address"}]},{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"coinType",type:"uint256"}],outputs:[{name:"",type:"bytes"}]}],jC=[{inputs:[{internalType:"address",name:"_signer",type:"address"},{internalType:"bytes32",name:"_hash",type:"bytes32"},{internalType:"bytes",name:"_signature",type:"bytes"}],stateMutability:"nonpayable",type:"constructor"}],FC="0x82ad56cb";function La({blockNumber:t,chain:e,contract:n}){var i;const r=(i=e==null?void 0:e.contracts)==null?void 0:i[n];if(!r)throw new Jp({chain:e,contract:{name:n}});if(t&&r.blockCreated&&r.blockCreated>t)throw new Jp({blockNumber:t,chain:e,contract:{name:n,blockCreated:r.blockCreated}});return r.address}function WC(t,{docsPath:e,...n}){const r=(()=>{const i=gg(t,n);return i instanceof eh?t:i})();return new g5(r,{docsPath:e,...n})}const T0=new Map;function Eg({fn:t,id:e,shouldSplitBatch:n,wait:r=0,sort:i}){const o=async()=>{const u=l();s();const d=u.map(({args:p})=>p);d.length!==0&&t(d).then(p=>{var w;i&&Array.isArray(p)&&p.sort(i);for(let y=0;y<u.length;y++){const{pendingPromise:E}=u[y];(w=E.resolve)==null||w.call(E,[p[y],p])}}).catch(p=>{var w;for(let y=0;y<u.length;y++){const{pendingPromise:E}=u[y];(w=E.reject)==null||w.call(E,p)}})},s=()=>T0.delete(e),a=()=>l().map(({args:u})=>u),l=()=>T0.get(e)||[],c=u=>T0.set(e,[...l(),u]);return{flush:s,async schedule(u){const d={},p=new Promise((E,C)=>{d.resolve=E,d.reject=C});return(n==null?void 0:n([...a(),u]))&&o(),l().length>0?(c({args:u,pendingPromise:d}),p):(c({args:u,pendingPromise:d}),setTimeout(o,r),p)}}}async function ah(t,e){var b,m,v,x;const{account:n=t.account,batch:r=!!((b=t.batch)!=null&&b.multicall),blockNumber:i,blockTag:o="latest",accessList:s,data:a,gas:l,gasPrice:c,maxFeePerGas:u,maxPriorityFeePerGas:d,nonce:p,to:w,value:y,...E}=e,C=n?Kn(n):void 0;try{nu(e);const S=(i?Se(i):void 0)||o,f=(x=(v=(m=t.chain)==null?void 0:m.formatters)==null?void 0:v.transactionRequest)==null?void 0:x.format,R=(f||Qc)({...wg(E,{format:f}),from:C==null?void 0:C.address,accessList:s,data:a,gas:l,gasPrice:c,maxFeePerGas:u,maxPriorityFeePerGas:d,nonce:p,to:w,value:y});if(r&&zC({request:R}))try{return await HC(t,{...R,blockNumber:i,blockTag:o})}catch(M){if(!(M instanceof e5)&&!(M instanceof Jp))throw M}const D=await t.request({method:"eth_call",params:S?[R,S]:[R]});return D==="0x"?{data:void 0}:{data:D}}catch(_){const S=VC(_),{offchainLookup:f,offchainLookupSignature:A}=await sa(()=>import("./ccip-5a146898.js"),[]);if((S==null?void 0:S.slice(0,10))===A&&w)return{data:await f(t,{data:S,to:w})};throw WC(_,{...e,account:C,chain:t.chain})}}function zC({request:t}){const{data:e,to:n,...r}=t;return!(!e||e.startsWith(FC)||!n||Object.values(r).filter(i=>typeof i<"u").length>0)}async function HC(t,e){var E;const{batchSize:n=1024,wait:r=0}=typeof((E=t.batch)==null?void 0:E.multicall)=="object"?t.batch.multicall:{},{blockNumber:i,blockTag:o="latest",data:s,multicallAddress:a,to:l}=e;let c=a;if(!c){if(!t.chain)throw new e5;c=La({blockNumber:i,chain:t.chain,contract:"multicall3"})}const d=(i?Se(i):void 0)||o,{schedule:p}=Eg({id:`${t.uid}.${d}`,wait:r,shouldSplitBatch(C){return C.reduce((m,{data:v})=>m+(v.length-2),0)>n*2},fn:async C=>{const b=C.map(x=>({allowFailure:!0,callData:x.data,target:x.to})),m=ao({abi:h1,args:[b],functionName:"aggregate3"}),v=await t.request({method:"eth_call",params:[{data:m,to:c},d]});return Ua({abi:h1,args:[b],functionName:"aggregate3",data:v||"0x"})}}),[{returnData:w,success:y}]=await p({data:s,to:l});if(!y)throw new pg({data:w});return w==="0x"?{data:void 0}:{data:w}}function VC(t){if(!(t instanceof V))return;const e=t.walk();return typeof e.data=="object"?e.data.data:e.data}async function Xi(t,{abi:e,address:n,args:r,functionName:i,...o}){const s=ao({abi:e,args:r,functionName:i});try{const{data:a}=await ge(t,ah,"call")({data:s,to:n,...o});return Ua({abi:e,args:r,functionName:i,data:a||"0x"})}catch(a){throw lc(a,{abi:e,address:n,args:r,docsPath:"/docs/contract/readContract",functionName:i})}}async function qC(t,{abi:e,address:n,args:r,dataSuffix:i,functionName:o,...s}){const a=s.account?Kn(s.account):void 0,l=ao({abi:e,args:r,functionName:o});try{const{data:c}=await ge(t,ah,"call")({batch:!1,data:`${l}${i?i.replace("0x",""):""}`,to:n,...s});return{result:Ua({abi:e,args:r,functionName:o,data:c||"0x"}),request:{abi:e,address:n,args:r,dataSuffix:i,functionName:o,...s}}}catch(c){throw lc(c,{abi:e,address:n,args:r,docsPath:"/docs/contract/simulateContract",functionName:o,sender:a==null?void 0:a.address})}}const A0=new Map,qy=new Map;let ZC=0;function Ba(t,e,n){const r=++ZC,i=()=>A0.get(t)||[],o=()=>{const u=i();A0.set(t,u.filter(d=>d.id!==r))},s=()=>{const u=qy.get(t);i().length===1&&u&&u(),o()},a=i();if(A0.set(t,[...a,{id:r,fns:e}]),a&&a.length>0)return s;const l={};for(const u in e)l[u]=(...d)=>{var w,y;const p=i();if(p.length!==0)for(const E of p)(y=(w=E.fns)[u])==null||y.call(w,...d)};const c=n(l);return typeof c=="function"&&qy.set(t,c),s}async function Vd(t){return new Promise(e=>setTimeout(e,t))}function iu(t,{emitOnBegin:e,initialWaitTime:n,interval:r}){let i=!0;const o=()=>i=!1;return(async()=>{let a;e&&(a=await t({unpoll:o}));const l=await(n==null?void 0:n(a))??r;await Vd(l);const c=async()=>{i&&(await t({unpoll:o}),await Vd(r),c())};c()})(),o}const GC=new Map,KC=new Map;function YC(t){const e=(i,o)=>({clear:()=>o.delete(i),get:()=>o.get(i),set:s=>o.set(i,s)}),n=e(t,GC),r=e(t,KC);return{clear:()=>{n.clear(),r.clear()},promise:n,response:r}}async function QC(t,{cacheKey:e,cacheTime:n=1/0}){const r=YC(e),i=r.response.get();if(i&&n>0&&new Date().getTime()-i.created.getTime()<n)return i.data;let o=r.promise.get();o||(o=t(),r.promise.set(o));try{const s=await o;return r.response.set({created:new Date,data:s}),s}finally{r.promise.clear()}}const XC=t=>`blockNumber.${t}`;async function ou(t,{cacheTime:e=t.cacheTime,maxAge:n}={}){const r=await QC(()=>t.request({method:"eth_blockNumber"}),{cacheKey:XC(t.uid),cacheTime:n??e});return BigInt(r)}async function lh(t,{filter:e}){const n="strict"in e&&e.strict;return(await e.request({method:"eth_getFilterChanges",params:[e.id]})).map(i=>{var o;if(typeof i=="string")return i;try{const{eventName:s,args:a}="abi"in e&&e.abi?ru({abi:e.abi,data:i.data,topics:i.topics,strict:n}):{eventName:void 0,args:void 0};return qn(i,{args:a,eventName:s})}catch(s){let a,l;if(s instanceof zo||s instanceof Ra){if("strict"in e&&e.strict)return;a=s.abiItem.name,l=(o=s.abiItem.inputs)==null?void 0:o.some(c=>!("name"in c&&c.name))}return qn(i,{args:l?[]:{},eventName:a})}}).filter(Boolean)}async function ch(t,{filter:e}){return e.request({method:"eth_uninstallFilter",params:[e.id]})}function JC(t,{abi:e,address:n,args:r,batch:i=!0,eventName:o,onError:s,onLogs:a,poll:l,pollingInterval:c=t.pollingInterval,strict:u}){return(typeof l<"u"?l:t.transport.type!=="webSocket")?(()=>{const y=tn(["watchContractEvent",n,r,i,t.uid,o,c]),E=u??!1;return Ba(y,{onLogs:a,onError:s},C=>{let b,m,v=!1;const x=iu(async()=>{var _;if(!v){try{m=await ge(t,d5,"createContractEventFilter")({abi:e,address:n,args:r,eventName:o,strict:E})}catch{}v=!0;return}try{let S;if(m)S=await ge(t,lh,"getFilterChanges")({filter:m});else{const f=await ge(t,ou,"getBlockNumber")({});b&&b!==f?S=await ge(t,x5,"getContractEvents")({abi:e,address:n,args:r,eventName:o,fromBlock:b+1n,toBlock:f,strict:E}):S=[],b=f}if(S.length===0)return;if(i)C.onLogs(S);else for(const f of S)C.onLogs([f])}catch(S){m&&S instanceof Ho&&(v=!1),(_=C.onError)==null||_.call(C,S)}},{emitOnBegin:!0,interval:c});return async()=>{m&&await ge(t,ch,"uninstallFilter")({filter:m}),x()}})})():(()=>{let y=!0,E=()=>y=!1;return(async()=>{try{const C=o?eu({abi:e,eventName:o,args:r}):[],{unsubscribe:b}=await t.transport.subscribe({params:["logs",{address:n,topics:C}],onData(m){var x;if(!y)return;const v=m.result;try{const{eventName:_,args:S}=ru({abi:e,data:v.data,topics:v.topics,strict:u}),f=qn(v,{args:S,eventName:_});a([f])}catch(_){let S,f;if(_ instanceof zo||_ instanceof Ra){if(u)return;S=_.abiItem.name,f=(x=_.abiItem.inputs)==null?void 0:x.some(R=>!("name"in R&&R.name))}const A=qn(v,{args:f?[]:{},eventName:S});a([A])}},onError(m){s==null||s(m)}});E=b,y||E()}catch(C){s==null||s(C)}})(),E})()}function C5({chain:t,currentChainId:e}){if(!t)throw new t_;if(e!==t.id)throw new e_({chain:t,currentChainId:e})}function e7(t,{docsPath:e,...n}){const r=(()=>{const i=gg(t,n);return i instanceof eh?t:i})();return new EC(r,{docsPath:e,...n})}async function cc(t){const e=await t.request({method:"eth_chainId"});return Ut(e)}async function _g(t,{serializedTransaction:e}){return t.request({method:"eth_sendRawTransaction",params:[e]})}async function Cg(t,e){var E,C,b,m;const{account:n=t.account,chain:r=t.chain,accessList:i,data:o,gas:s,gasPrice:a,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:d,value:p,...w}=e;if(!n)throw new Ma({docsPath:"/docs/actions/wallet/sendTransaction"});const y=Kn(n);try{nu(e);let v;if(r!==null&&(v=await ge(t,cc,"getChainId")({}),C5({currentChainId:v,chain:r})),y.type==="local"){const f=await ge(t,sh,"prepareTransactionRequest")({account:y,accessList:i,chain:r,data:o,gas:s,gasPrice:a,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:d,value:p,...w});v||(v=await ge(t,cc,"getChainId")({}));const A=(E=r==null?void 0:r.serializers)==null?void 0:E.transaction,R=await y.signTransaction({...f,chainId:v},{serializer:A});return await ge(t,_g,"sendRawTransaction")({serializedTransaction:R})}const x=(m=(b=(C=t.chain)==null?void 0:C.formatters)==null?void 0:b.transactionRequest)==null?void 0:m.format,S=(x||Qc)({...wg(w,{format:x}),accessList:i,data:o,from:y.address,gas:s,gasPrice:a,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:d,value:p});return await t.request({method:"eth_sendTransaction",params:[S]})}catch(v){throw e7(v,{...e,account:y,chain:e.chain||void 0})}}async function t7(t,{abi:e,address:n,args:r,dataSuffix:i,functionName:o,...s}){const a=ao({abi:e,args:r,functionName:o});return await ge(t,Cg,"sendTransaction")({data:`${a}${i?i.replace("0x",""):""}`,to:n,...s})}async function n7(t,{chain:e}){const{id:n,name:r,nativeCurrency:i,rpcUrls:o,blockExplorers:s}=e;await t.request({method:"wallet_addEthereumChain",params:[{chainId:Se(n),chainName:r,nativeCurrency:i,rpcUrls:o.default.http,blockExplorerUrls:s?Object.values(s).map(({url:a})=>a):void 0}]})}const p1=256;let Fu=p1,Wu;function r7(t=11){if(!Wu||Fu+t>p1*2){Wu="",Fu=0;for(let e=0;e<p1;e++)Wu+=(256+Math.random()*256|0).toString(16).substring(1)}return Wu.substring(Fu,Fu+++t)}function S5(t){const{batch:e,cacheTime:n=t.pollingInterval??4e3,key:r="base",name:i="Base Client",pollingInterval:o=4e3,type:s="base"}=t,a=t.chain,l=t.account?Kn(t.account):void 0,{config:c,request:u,value:d}=t.transport({chain:a,pollingInterval:o}),p={...c,...d},w={account:l,batch:e,cacheTime:n,chain:a,key:r,name:i,pollingInterval:o,request:u,transport:p,type:s,uid:r7()};function y(E){return C=>{const b=C(E);for(const v in w)delete b[v];const m={...E,...b};return Object.assign(m,{extend:y(m)})}}return Object.assign(w,{extend:y(w)})}function m1(t,{delay:e=100,retryCount:n=2,shouldRetry:r=()=>!0}={}){return new Promise((i,o)=>{const s=async({count:a=0}={})=>{const l=async({error:c})=>{const u=typeof e=="function"?e({count:a,error:c}):e;u&&await Vd(u),s({count:a+1})};try{const c=await t();i(c)}catch(c){if(a<n&&await r({count:a,error:c}))return l({error:c});o(c)}};s()})}const T5=t=>"code"in t?t.code!==-1&&t.code!==-32004&&t.code!==-32005&&t.code!==-32042&&t.code!==-32603:t instanceof Cl&&t.status?t.status!==403&&t.status!==408&&t.status!==413&&t.status!==429&&t.status!==500&&t.status!==502&&t.status!==503&&t.status!==504:!1;function i7(t,{retryDelay:e=150,retryCount:n=3}={}){return async r=>m1(async()=>{try{return await t(r)}catch(i){const o=i;switch(o.code){case Kl.code:throw new Kl(o);case Yl.code:throw new Yl(o);case Ql.code:throw new Ql(o);case Xl.code:throw new Xl(o);case ia.code:throw new ia(o);case Ho.code:throw new Ho(o);case Jl.code:throw new Jl(o);case oa.code:throw new oa(o);case ec.code:throw new ec(o);case tc.code:throw new tc(o);case nc.code:throw new nc(o);case rc.code:throw new rc(o);case fn.code:throw new fn(o);case ic.code:throw new ic(o);case oc.code:throw new oc(o);case sc.code:throw new sc(o);case ac.code:throw new ac(o);case hr.code:throw new hr(o);case 5e3:throw new fn(o);default:throw i instanceof V?i:new AC(o)}}},{delay:({count:i,error:o})=>{var s;if(o&&o instanceof Cl){const a=(s=o==null?void 0:o.headers)==null?void 0:s.get("Retry-After");if(a!=null&&a.match(/\d/))return parseInt(a)*1e3}return~~(1<<i)*e},retryCount:n,shouldRetry:({error:i})=>!T5(i)})}function uh({key:t,name:e,request:n,retryCount:r=3,retryDelay:i=150,timeout:o,type:s},a){return{config:{key:t,name:e,request:n,retryCount:r,retryDelay:i,timeout:o,type:s},request:i7(n,{retryCount:r,retryDelay:i}),value:a}}function dh(t,e={}){const{key:n="custom",name:r="Custom Provider",retryDelay:i}=e;return({retryCount:o})=>uh({key:n,name:r,request:t.request.bind(t),retryCount:e.retryCount??o,retryDelay:i,type:"custom"})}function Zy(t,e={}){const{key:n="fallback",name:r="Fallback",rank:i=!1,retryCount:o,retryDelay:s}=e;return({chain:a,pollingInterval:l=4e3,timeout:c})=>{let u=t,d=()=>{};const p=uh({key:n,name:r,async request({method:w,params:y}){const E=async(C=0)=>{const b=u[C]({chain:a,retryCount:0,timeout:c});try{const m=await b.request({method:w,params:y});return d({method:w,params:y,response:m,transport:b,status:"success"}),m}catch(m){if(d({error:m,method:w,params:y,transport:b,status:"error"}),T5(m)||C===u.length-1)throw m;return E(C+1)}};return E()},retryCount:o,retryDelay:s,type:"fallback"},{onResponse:w=>d=w,transports:u.map(w=>w({chain:a,retryCount:0}))});if(i){const w=typeof i=="object"?i:{};o7({chain:a,interval:w.interval??l,onTransports:y=>u=y,sampleCount:w.sampleCount,timeout:w.timeout,transports:u,weights:w.weights})}return p}}function o7({chain:t,interval:e=4e3,onTransports:n,sampleCount:r=10,timeout:i=1e3,transports:o,weights:s={}}){const{stability:a=.7,latency:l=.3}=s,c=[],u=async()=>{const d=await Promise.all(o.map(async y=>{const E=y({chain:t,retryCount:0,timeout:i}),C=Date.now();let b,m;try{await E.request({method:"net_listening"}),m=1}catch{m=0}finally{b=Date.now()}return{latency:b-C,success:m}}));c.push(d),c.length>r&&c.shift();const p=Math.max(...c.map(y=>Math.max(...y.map(({latency:E})=>E)))),w=o.map((y,E)=>{const C=c.map(_=>_[E].latency),m=1-C.reduce((_,S)=>_+S,0)/C.length/p,v=c.map(_=>_[E].success),x=v.reduce((_,S)=>_+S,0)/v.length;return x===0?[0,E]:[l*m+a*x,E]}).sort((y,E)=>E[0]-y[0]);n(w.map(([,y])=>o[y])),await Vd(e),u()};u()}class A5 extends V{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro"})}}function s7(){if(typeof WebSocket<"u")return WebSocket;if(typeof global.WebSocket<"u")return global.WebSocket;if(typeof window.WebSocket<"u")return window.WebSocket;if(typeof self.WebSocket<"u")return self.WebSocket;throw new Error("`WebSocket` is not supported in this environment")}const Gy=s7();function P5(t,{errorInstance:e=new Error("timed out"),timeout:n,signal:r}){return new Promise((i,o)=>{(async()=>{let s;try{const a=new AbortController;n>0&&(s=setTimeout(()=>{r?a.abort():o(e)},n)),i(await t({signal:a==null?void 0:a.signal}))}catch(a){a.name==="AbortError"&&o(e),o(a)}finally{clearTimeout(s)}})()})}let g1=0;async function a7(t,{body:e,fetchOptions:n={},timeout:r=1e4}){var a;const{headers:i,method:o,signal:s}=n;try{const l=await P5(async({signal:u})=>await fetch(t,{...n,body:Array.isArray(e)?tn(e.map(p=>({jsonrpc:"2.0",id:p.id??g1++,...p}))):tn({jsonrpc:"2.0",id:e.id??g1++,...e}),headers:{...i,"Content-Type":"application/json"},method:o||"POST",signal:s||(r>0?u:void 0)}),{errorInstance:new d1({body:e,url:t}),timeout:r,signal:!0});let c;if((a=l.headers.get("Content-Type"))!=null&&a.startsWith("application/json")?c=await l.json():c=await l.text(),!l.ok)throw new Cl({body:e,details:tn(c.error)||l.statusText,headers:l.headers,status:l.status,url:t});return c}catch(l){throw l instanceof Cl||l instanceof d1?l:new Cl({body:e,details:l.message,url:t})}}const P0=new Map;async function I0(t){let e=P0.get(t);if(e)return e;const{schedule:n}=Eg({id:t,fn:async()=>{const o=new Gy(t),s=new Map,a=new Map,l=({data:u})=>{const d=JSON.parse(u),p=d.method==="eth_subscription",w=p?d.params.subscription:d.id,y=p?a:s,E=y.get(w);E&&E({data:u}),p||y.delete(w)},c=()=>{P0.delete(t),o.removeEventListener("close",c),o.removeEventListener("message",l)};return o.addEventListener("close",c),o.addEventListener("message",l),o.readyState===Gy.CONNECTING&&await new Promise((u,d)=>{o&&(o.onopen=u,o.onerror=d)}),e=Object.assign(o,{requests:s,subscriptions:a}),P0.set(t,e),[e]}}),[r,[i]]=await n();return i}function l7(t,{body:e,onResponse:n}){if(t.readyState===t.CLOSED||t.readyState===t.CLOSING)throw new SC({body:e,url:t.url,details:"Socket is closed."});const r=g1++,i=({data:o})=>{var a;const s=JSON.parse(o);typeof s.id=="number"&&r!==s.id||(n==null||n(s),e.method==="eth_subscribe"&&typeof s.result=="string"&&t.subscriptions.set(s.result,i),e.method==="eth_unsubscribe"&&t.subscriptions.delete((a=e.params)==null?void 0:a[0]))};return t.requests.set(r,i),t.send(JSON.stringify({jsonrpc:"2.0",...e,id:r})),t}async function c7(t,{body:e,timeout:n=1e4}){return P5(()=>new Promise(r=>Vs.webSocket(t,{body:e,onResponse:r})),{errorInstance:new d1({body:e,url:t.url}),timeout:n})}const Vs={http:a7,webSocket:l7,webSocketAsync:c7};function u7(t,e={}){const{batch:n,fetchOptions:r,key:i="http",name:o="HTTP JSON-RPC",retryDelay:s}=e;return({chain:a,retryCount:l,timeout:c})=>{const{batchSize:u=1e3,wait:d=0}=typeof n=="object"?n:{},p=e.retryCount??l,w=c??e.timeout??1e4,y=t||(a==null?void 0:a.rpcUrls.default.http[0]);if(!y)throw new A5;return uh({key:i,name:o,async request({method:E,params:C}){const b={method:E,params:C},{schedule:m}=Eg({id:`${t}`,wait:d,shouldSplitBatch(S){return S.length>u},fn:S=>Vs.http(y,{body:S,fetchOptions:r,timeout:w}),sort:(S,f)=>S.id-f.id}),v=async S=>n?m(S):[await Vs.http(y,{body:S,fetchOptions:r,timeout:w})],[{error:x,result:_}]=await v(b);if(x)throw new mg({body:b,error:x,url:y});return _},retryCount:p,retryDelay:s,timeout:w,type:"http"},{fetchOptions:r,url:t})}}function Sg(t,e){var r,i,o;if(!(t instanceof V))return!1;const n=t.walk(s=>s instanceof u1);return n instanceof u1?!!(((r=n.data)==null?void 0:r.errorName)==="ResolverNotFound"||((i=n.data)==null?void 0:i.errorName)==="ResolverWildcardNotSupported"||(o=n.reason)!=null&&o.includes("Wildcard on non-extended resolvers is not supported")||e==="reverse"&&n.reason===f5[50]):!1}function I5(t){if(t.length!==66||t.indexOf("[")!==0||t.indexOf("]")!==65)return null;const e=`0x${t.slice(1,65)}`;return Dr(e)?e:null}function dd(t){let e=new Uint8Array(32).fill(0);if(!t)return ra(e);const n=t.split(".");for(let r=n.length-1;r>=0;r-=1){const i=I5(n[r]),o=i?Yi(i):Qt(ei(n[r]),"bytes");e=Qt(si([e,o]),"bytes")}return ra(e)}function d7(t){return`[${t.slice(2)}]`}function f7(t){const e=new Uint8Array(32).fill(0);return t?I5(t)||Qt(ei(t)):ra(e)}function fh(t){const e=t.replace(/^\.|\.$/gm,"");if(e.length===0)return new Uint8Array(1);const n=new Uint8Array(ei(e).byteLength+2);let r=0;const i=e.split(".");for(let o=0;o<i.length;o++){let s=ei(i[o]);s.byteLength>255&&(s=ei(d7(f7(i[o])))),n[r]=s.length,n.set(s,r+1),r+=s.length+1}return n.byteLength!==r+1?n.slice(0,r+1):n}async function h7(t,{blockNumber:e,blockTag:n,coinType:r,name:i,universalResolverAddress:o}){let s=o;if(!s){if(!t.chain)throw new Error("client chain not configured. universalResolverAddress is required.");s=La({blockNumber:e,chain:t.chain,contract:"ensUniversalResolver"})}try{const a=ao({abi:Vy,functionName:"addr",...r!=null?{args:[dd(i),BigInt(r)]}:{args:[dd(i)]}}),l=await ge(t,Xi,"readContract")({address:s,abi:_5,functionName:"resolve",args:[Ae(fh(i)),a],blockNumber:e,blockTag:n});if(l[0]==="0x")return null;const c=Ua({abi:Vy,args:r!=null?[dd(i),BigInt(r)]:void 0,functionName:"addr",data:l[0]});return c==="0x"||cr(c)==="0x00"?null:c}catch(a){if(Sg(a,"resolve"))return null;throw a}}class p7 extends V{constructor({data:e}){super("Unable to extract image from metadata. The metadata may be malformed or invalid.",{metaMessages:["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.","",`Provided data: ${JSON.stringify(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidMetadataError"})}}class nl extends V{constructor({reason:e}){super(`ENS NFT avatar URI is invalid. ${e}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidNftUriError"})}}class Tg extends V{constructor({uri:e}){super(`Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUriResolutionError"})}}class m7 extends V{constructor({namespace:e}){super(`ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUnsupportedNamespaceError"})}}const g7=/(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,w7=/^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,y7=/^data:([a-zA-Z\-/+]*);base64,([^"].*)/,v7=/^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;async function b7(t){try{const e=await fetch(t,{method:"HEAD"});if(e.status===200){const n=e.headers.get("content-type");return n==null?void 0:n.startsWith("image/")}return!1}catch(e){return typeof e=="object"&&typeof e.response<"u"||!globalThis.hasOwnProperty("Image")?!1:new Promise(n=>{const r=new Image;r.onload=()=>{n(!0)},r.onerror=()=>{n(!1)},r.src=t})}}function Ky(t,e){return t?t.endsWith("/")?t.slice(0,-1):t:e}function $5({uri:t,gatewayUrls:e}){const n=y7.test(t);if(n)return{uri:t,isOnChain:!0,isEncoded:n};const r=Ky(e==null?void 0:e.ipfs,"https://ipfs.io"),i=Ky(e==null?void 0:e.arweave,"https://arweave.net"),o=t.match(g7),{protocol:s,subpath:a,target:l,subtarget:c=""}=(o==null?void 0:o.groups)||{},u=s==="ipns:/"||a==="ipns/",d=s==="ipfs:/"||a==="ipfs/"||w7.test(t);if(t.startsWith("http")&&!u&&!d){let w=t;return e!=null&&e.arweave&&(w=t.replace(/https:\/\/arweave.net/g,e==null?void 0:e.arweave)),{uri:w,isOnChain:!1,isEncoded:!1}}if((u||d)&&l)return{uri:`${r}/${u?"ipns":"ipfs"}/${l}${c}`,isOnChain:!1,isEncoded:!1};if(s==="ar:/"&&l)return{uri:`${i}/${l}${c||""}`,isOnChain:!1,isEncoded:!1};let p=t.replace(v7,"");if(p.startsWith("<svg")&&(p=`data:image/svg+xml;base64,${btoa(p)}`),p.startsWith("data:")||p.startsWith("{"))return{uri:p,isOnChain:!0,isEncoded:!1};throw new Tg({uri:t})}function O5(t){if(typeof t!="object"||!("image"in t)&&!("image_url"in t)&&!("image_data"in t))throw new p7({data:t});return t.image||t.image_url||t.image_data}async function x7({gatewayUrls:t,uri:e}){try{const n=await fetch(e).then(i=>i.json());return await Ag({gatewayUrls:t,uri:O5(n)})}catch{throw new Tg({uri:e})}}async function Ag({gatewayUrls:t,uri:e}){const{uri:n,isOnChain:r}=$5({uri:e,gatewayUrls:t});if(r||await b7(n))return n;throw new Tg({uri:e})}function E7(t){let e=t;e.startsWith("did:nft:")&&(e=e.replace("did:nft:","").replace(/_/g,"/"));const[n,r,i]=e.split("/"),[o,s]=n.split(":"),[a,l]=r.split(":");if(!o||o.toLowerCase()!=="eip155")throw new nl({reason:"Only EIP-155 supported"});if(!s)throw new nl({reason:"Chain ID not found"});if(!l)throw new nl({reason:"Contract address not found"});if(!i)throw new nl({reason:"Token ID not found"});if(!a)throw new nl({reason:"ERC namespace not found"});return{chainID:parseInt(s),namespace:a.toLowerCase(),contractAddress:l,tokenID:i}}async function _7(t,{nft:e}){if(e.namespace==="erc721")return Xi(t,{address:e.contractAddress,abi:[{name:"tokenURI",type:"function",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"tokenURI",args:[BigInt(e.tokenID)]});if(e.namespace==="erc1155")return Xi(t,{address:e.contractAddress,abi:[{name:"uri",type:"function",stateMutability:"view",inputs:[{name:"_id",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"uri",args:[BigInt(e.tokenID)]});throw new m7({namespace:e.namespace})}async function C7(t,{gatewayUrls:e,record:n}){return/eip155:/i.test(n)?S7(t,{gatewayUrls:e,record:n}):Ag({uri:n,gatewayUrls:e})}async function S7(t,{gatewayUrls:e,record:n}){const r=E7(n),i=await _7(t,{nft:r}),{uri:o,isOnChain:s,isEncoded:a}=$5({uri:i,gatewayUrls:e});if(s&&(o.includes("data:application/json;base64,")||o.startsWith("{"))){const c=a?atob(o.replace("data:application/json;base64,","")):o,u=JSON.parse(c);return Ag({uri:O5(u),gatewayUrls:e})}let l=r.tokenID;return r.namespace==="erc1155"&&(l=l.replace("0x","").padStart(64,"0")),x7({gatewayUrls:e,uri:o.replace(/(?:0x)?{id}/,l)})}async function D5(t,{blockNumber:e,blockTag:n,name:r,key:i,universalResolverAddress:o}){let s=o;if(!s){if(!t.chain)throw new Error("client chain not configured. universalResolverAddress is required.");s=La({blockNumber:e,chain:t.chain,contract:"ensUniversalResolver"})}try{const a=await ge(t,Xi,"readContract")({address:s,abi:_5,functionName:"resolve",args:[Ae(fh(r)),ao({abi:Hy,functionName:"text",args:[dd(r),i]})],blockNumber:e,blockTag:n});if(a[0]==="0x")return null;const l=Ua({abi:Hy,functionName:"text",data:a[0]});return l===""?null:l}catch(a){if(Sg(a,"resolve"))return null;throw a}}async function T7(t,{blockNumber:e,blockTag:n,gatewayUrls:r,name:i,universalResolverAddress:o}){const s=await ge(t,D5,"getEnsText")({blockNumber:e,blockTag:n,key:"avatar",name:i,universalResolverAddress:o});if(!s)return null;try{return await C7(t,{record:s,gatewayUrls:r})}catch{return null}}async function A7(t,{address:e,blockNumber:n,blockTag:r,universalResolverAddress:i}){let o=i;if(!o){if(!t.chain)throw new Error("client chain not configured. universalResolverAddress is required.");o=La({blockNumber:n,chain:t.chain,contract:"ensUniversalResolver"})}const s=`${e.toLowerCase().substring(2)}.addr.reverse`;try{const[a,l]=await ge(t,Xi,"readContract")({address:o,abi:BC,functionName:"reverse",args:[Ae(fh(s))],blockNumber:n,blockTag:r});return e.toLowerCase()!==l.toLowerCase()?null:a}catch(a){if(Sg(a,"reverse"))return null;throw a}}async function P7(t,{blockNumber:e,blockTag:n,name:r,universalResolverAddress:i}){let o=i;if(!o){if(!t.chain)throw new Error("client chain not configured. universalResolverAddress is required.");o=La({blockNumber:e,chain:t.chain,contract:"ensUniversalResolver"})}const[s]=await ge(t,Xi,"readContract")({address:o,abi:[{inputs:[{type:"bytes"}],name:"findResolver",outputs:[{type:"address"},{type:"bytes32"}],stateMutability:"view",type:"function"}],functionName:"findResolver",args:[Ae(fh(r))],blockNumber:e,blockTag:n});return s}async function I7(t){const e=ih(t,{method:"eth_newBlockFilter"}),n=await t.request({method:"eth_newBlockFilter"});return{id:n,request:e(n),type:"block"}}async function k5(t,{address:e,args:n,event:r,events:i,fromBlock:o,strict:s,toBlock:a}={}){const l=i??(r?[r]:void 0),c=ih(t,{method:"eth_newFilter"});let u=[];l&&(u=[l.flatMap(p=>eu({abi:[p],eventName:p.name,args:n}))],r&&(u=u[0]));const d=await t.request({method:"eth_newFilter",params:[{address:e,fromBlock:typeof o=="bigint"?Se(o):o,toBlock:typeof a=="bigint"?Se(a):a,...u.length?{topics:u}:{}}]});return{abi:l,args:n,eventName:r?r.name:void 0,fromBlock:o,id:d,request:c(d),strict:s,toBlock:a,type:"event"}}async function R5(t){const e=ih(t,{method:"eth_newPendingTransactionFilter"}),n=await t.request({method:"eth_newPendingTransactionFilter"});return{id:n,request:e(n),type:"transaction"}}async function $7(t,{address:e,blockNumber:n,blockTag:r="latest"}){const i=n?Se(n):void 0,o=await t.request({method:"eth_getBalance",params:[e,i||r]});return BigInt(o)}async function O7(t,{blockHash:e,blockNumber:n,blockTag:r="latest"}={}){const i=n!==void 0?Se(n):void 0;let o;return e?o=await t.request({method:"eth_getBlockTransactionCountByHash",params:[e]}):o=await t.request({method:"eth_getBlockTransactionCountByNumber",params:[i||r]}),Ut(o)}async function D7(t,{address:e,blockNumber:n,blockTag:r="latest"}){const i=n!==void 0?Se(n):void 0,o=await t.request({method:"eth_getCode",params:[e,i||r]});if(o!=="0x")return o}function k7(t){var e;return{baseFeePerGas:t.baseFeePerGas.map(n=>BigInt(n)),gasUsedRatio:t.gasUsedRatio,oldestBlock:BigInt(t.oldestBlock),reward:(e=t.reward)==null?void 0:e.map(n=>n.map(r=>BigInt(r)))}}async function R7(t,{blockCount:e,blockNumber:n,blockTag:r="latest",rewardPercentiles:i}){const o=n?Se(n):void 0,s=await t.request({method:"eth_feeHistory",params:[Se(e),o||r,i]});return k7(s)}async function N7(t,{filter:e}){const n=e.strict??!1;return(await e.request({method:"eth_getFilterLogs",params:[e.id]})).map(i=>{var o;try{const{eventName:s,args:a}="abi"in e&&e.abi?ru({abi:e.abi,data:i.data,topics:i.topics,strict:n}):{eventName:void 0,args:void 0};return qn(i,{args:a,eventName:s})}catch(s){let a,l;if(s instanceof zo||s instanceof Ra){if("strict"in e&&e.strict)return;a=s.abiItem.name,l=(o=s.abiItem.inputs)==null?void 0:o.some(c=>!("name"in c&&c.name))}return qn(i,{args:l?[]:{},eventName:a})}}).filter(Boolean)}const M7=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,U7=/^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;function L7({domain:t,message:e,primaryType:n,types:r}){const i=typeof t>"u"?{}:t,o={EIP712Domain:j5({domain:i}),...r};B5({domain:i,message:e,primaryType:n,types:o});const s=["0x1901"];return i&&s.push(B7({domain:i,types:o})),n!=="EIP712Domain"&&s.push(N5({data:e,primaryType:n,types:o})),Qt(si(s))}function B7({domain:t,types:e}){return N5({data:t,primaryType:"EIP712Domain",types:e})}function N5({data:t,primaryType:e,types:n}){const r=M5({data:t,primaryType:e,types:n});return Qt(r)}function M5({data:t,primaryType:e,types:n}){const r=[{type:"bytes32"}],i=[j7({primaryType:e,types:n})];for(const o of n[e]){const[s,a]=L5({types:n,name:o.name,type:o.type,value:t[o.name]});r.push(s),i.push(a)}return Xc(r,i)}function j7({primaryType:t,types:e}){const n=Ae(F7({primaryType:t,types:e}));return Qt(n)}function F7({primaryType:t,types:e}){let n="";const r=U5({primaryType:t,types:e});r.delete(t);const i=[t,...Array.from(r).sort()];for(const o of i)n+=`${o}(${e[o].map(({name:s,type:a})=>`${a} ${s}`).join(",")})`;return n}function U5({primaryType:t,types:e},n=new Set){const r=t.match(/^\w*/u),i=r==null?void 0:r[0];if(n.has(i)||e[i]===void 0)return n;n.add(i);for(const o of e[i])U5({primaryType:o.type,types:e},n);return n}function L5({types:t,name:e,type:n,value:r}){if(t[n]!==void 0)return[{type:"bytes32"},Qt(M5({data:r,primaryType:n,types:t}))];if(n==="bytes")return r=`0x${(r.length%2?"0":"")+r.slice(2)}`,[{type:"bytes32"},Qt(r)];if(n==="string")return[{type:"bytes32"},Qt(Ae(r))];if(n.lastIndexOf("]")===n.length-1){const i=n.slice(0,n.lastIndexOf("[")),o=r.map(s=>L5({name:e,type:i,types:t,value:s}));return[{type:"bytes32"},Qt(Xc(o.map(([s])=>s),o.map(([,s])=>s)))]}return[{type:n},r]}function B5({domain:t,message:e,primaryType:n,types:r}){const i=r,o=(s,a)=>{for(const l of s){const{name:c,type:u}=l,d=u,p=a[c],w=d.match(U7);if(w&&(typeof p=="number"||typeof p=="bigint")){const[C,b,m]=w;Se(p,{signed:b==="int",size:parseInt(m)/8})}if(d==="address"&&typeof p=="string"&&!en(p))throw new Wn({address:p});const y=d.match(M7);if(y){const[C,b]=y;if(b&&Pt(p)!==parseInt(b))throw new y_({expectedSize:parseInt(b),givenSize:Pt(p)})}const E=i[d];E&&o(E,p)}};if(i.EIP712Domain&&t&&o(i.EIP712Domain,t),n!=="EIP712Domain"){const s=i[n];o(s,e)}}function j5({domain:t}){return[typeof(t==null?void 0:t.name)=="string"&&{name:"name",type:"string"},(t==null?void 0:t.version)&&{name:"version",type:"string"},typeof(t==null?void 0:t.chainId)=="number"&&{name:"chainId",type:"uint256"},(t==null?void 0:t.verifyingContract)&&{name:"verifyingContract",type:"address"},(t==null?void 0:t.salt)&&{name:"salt",type:"bytes32"}].filter(Boolean)}const $0="/docs/contract/encodeDeployData";function F5({abi:t,args:e,bytecode:n}){if(!e||e.length===0)return n;const r=t.find(o=>"type"in o&&o.type==="constructor");if(!r)throw new u_({docsPath:$0});if(!("inputs"in r))throw new Ry({docsPath:$0});if(!r.inputs||r.inputs.length===0)throw new Ry({docsPath:$0});const i=Xc(r.inputs,e);return ka([n,i])}class Yy extends V{constructor({offset:e}){super(`Offset \`${e}\` cannot be negative.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NegativeOffsetError"})}}class W7 extends V{constructor({length:e,position:n}){super(`Position \`${n}\` is out of bounds (\`0 < position < ${e}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"PositionOutOfBoundsError"})}}const z7={bytes:new Uint8Array,dataView:new DataView(new ArrayBuffer(0)),position:0,assertPosition(t){if(t<0||t>this.bytes.length-1)throw new W7({length:this.bytes.length,position:t})},decrementPosition(t){if(t<0)throw new Yy({offset:t});const e=this.position-t;this.assertPosition(e),this.position=e},incrementPosition(t){if(t<0)throw new Yy({offset:t});const e=this.position+t;this.assertPosition(e),this.position=e},inspectByte(t){const e=t??this.position;return this.assertPosition(e),this.bytes[e]},inspectBytes(t,e){const n=e??this.position;return this.assertPosition(n+t-1),this.bytes.subarray(n,n+t)},inspectUint8(t){const e=t??this.position;return this.assertPosition(e),this.bytes[e]},inspectUint16(t){const e=t??this.position;return this.assertPosition(e+1),this.dataView.getUint16(e)},inspectUint24(t){const e=t??this.position;return this.assertPosition(e+2),(this.dataView.getUint16(e)<<8)+this.dataView.getUint8(e+2)},inspectUint32(t){const e=t??this.position;return this.assertPosition(e+3),this.dataView.getUint32(e)},pushByte(t){this.assertPosition(this.position),this.bytes[this.position]=t,this.position++},pushBytes(t){this.assertPosition(this.position+t.length-1),this.bytes.set(t,this.position),this.position+=t.length},pushUint8(t){this.assertPosition(this.position),this.bytes[this.position]=t,this.position++},pushUint16(t){this.assertPosition(this.position+1),this.dataView.setUint16(this.position,t),this.position+=2},pushUint24(t){this.assertPosition(this.position+2),this.dataView.setUint16(this.position,t>>8),this.dataView.setUint8(this.position+2,t&255),this.position+=3},pushUint32(t){this.assertPosition(this.position+3),this.dataView.setUint32(this.position,t),this.position+=4},readByte(){const t=this.inspectByte();return this.position++,t},readBytes(t){const e=this.inspectBytes(t);return this.position+=t,e},readUint8(){const t=this.inspectUint8();return this.position+=1,t},readUint16(){const t=this.inspectUint16();return this.position+=2,t},readUint24(){const t=this.inspectUint24();return this.position+=3,t},readUint32(){const t=this.inspectUint32();return this.position+=4,t},setPosition(t){this.assertPosition(t),this.position=t}};function H7(t){const e=Object.create(z7);return e.bytes=t,e.dataView=new DataView(t.buffer,t.byteOffset,t.byteLength),e}const V7=`Ethereum Signed Message:
`;function q7(t,e){const n=(()=>typeof t=="string"?ei(t):t.raw instanceof Uint8Array?t.raw:Yi(t.raw))(),r=ei(`${V7}${n.length}`);return Qt(si([r,n]),e)}function Z7(t){const{chainId:e,maxPriorityFeePerGas:n,gasPrice:r,maxFeePerGas:i,to:o}=t;if(e<=0)throw new Jf({chainId:e});if(o&&!en(o))throw new Wn({address:o});if(r)throw new V("`gasPrice` is not a valid EIP-1559 Transaction attribute.");if(i&&i>2n**256n-1n)throw new Wo({maxFeePerGas:i});if(n&&i&&n>i)throw new Gl({maxFeePerGas:i,maxPriorityFeePerGas:n})}function G7(t){const{chainId:e,maxPriorityFeePerGas:n,gasPrice:r,maxFeePerGas:i,to:o}=t;if(e<=0)throw new Jf({chainId:e});if(o&&!en(o))throw new Wn({address:o});if(n||i)throw new V("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.");if(r&&r>2n**256n-1n)throw new Wo({maxFeePerGas:r})}function K7(t){const{chainId:e,maxPriorityFeePerGas:n,gasPrice:r,maxFeePerGas:i,to:o,accessList:s}=t;if(o&&!en(o))throw new Wn({address:o});if(typeof e<"u"&&e<=0)throw new Jf({chainId:e});if(n||i)throw new V("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.");if(r&&r>2n**256n-1n)throw new Wo({maxFeePerGas:r});if(s)throw new V("`accessList` is not a valid Legacy Transaction attribute.")}function W5(t){if(!t||t.length===0)return[];const e=[];for(let n=0;n<t.length;n++){const{address:r,storageKeys:i}=t[n];for(let o=0;o<i.length;o++)if(i[o].length-2!==64)throw new xC({storageKey:i[o]});if(!en(r))throw new Wn({address:r});e.push([r,i])}return e}function Y7(t,e){const n=b5(t);return n==="eip1559"?Q7(t,e):n==="eip2930"?X7(t,e):J7(t,e)}function Q7(t,e){const{chainId:n,gas:r,nonce:i,to:o,value:s,maxFeePerGas:a,maxPriorityFeePerGas:l,accessList:c,data:u}=t;Z7(t);const d=W5(c),p=[Ae(n),i?Ae(i):"0x",l?Ae(l):"0x",a?Ae(a):"0x",r?Ae(r):"0x",o??"0x",s?Ae(s):"0x",u??"0x",d];if(e){const w=(()=>e.v===0n?"0x":e.v===1n?Ae(1):e.v===27n?"0x":Ae(1))();p.push(w,cr(e.r),cr(e.s))}return ka(["0x02",ph(p)])}function X7(t,e){const{chainId:n,gas:r,data:i,nonce:o,to:s,value:a,accessList:l,gasPrice:c}=t;G7(t);const u=W5(l),d=[Ae(n),o?Ae(o):"0x",c?Ae(c):"0x",r?Ae(r):"0x",s??"0x",a?Ae(a):"0x",i??"0x",u];if(e){const p=(()=>e.v===0n?"0x":e.v===1n?Ae(1):e.v===27n?"0x":Ae(1))();d.push(p,cr(e.r),cr(e.s))}return ka(["0x01",ph(d)])}function J7(t,e){const{chainId:n=0,gas:r,data:i,nonce:o,to:s,value:a,gasPrice:l}=t;K7(t);let c=[o?Ae(o):"0x",l?Ae(l):"0x",r?Ae(r):"0x",s??"0x",a?Ae(a):"0x",i??"0x"];if(e){const u=(()=>{if(n>0)return BigInt(n*2)+BigInt(35n+e.v-27n);if(e.v>=35n)return(e.v-35n)/2n>0?e.v:27n+(e.v===35n?0n:1n);const d=27n+(e.v===27n?0n:1n);if(e.v!==d)throw new vC({v:e.v});return d})();c=[...c,Ae(u),e.r,e.s]}else n>0&&(c=[...c,Ae(n),"0x","0x"]);return ph(c)}function e9(t){return t.map(e=>({...e,value:BigInt(e.value)}))}function t9(t){return{...t,balance:t.balance?BigInt(t.balance):void 0,nonce:t.nonce?Ut(t.nonce):void 0,storageProof:t.storageProof?e9(t.storageProof):void 0}}async function n9(t,{address:e,blockNumber:n,blockTag:r,storageKeys:i}){const o=r??"latest",s=n!==void 0?Se(n):void 0,a=await t.request({method:"eth_getProof",params:[e,i,s||o]});return t9(a)}async function r9(t,{address:e,blockNumber:n,blockTag:r="latest",slot:i}){const o=n!==void 0?Se(n):void 0;return await t.request({method:"eth_getStorageAt",params:[e,i,o||r]})}async function Pg(t,{blockHash:e,blockNumber:n,blockTag:r,hash:i,index:o}){var u,d,p;const s=r||"latest",a=n!==void 0?Se(n):void 0;let l=null;if(i?l=await t.request({method:"eth_getTransactionByHash",params:[i]}):e?l=await t.request({method:"eth_getTransactionByBlockHashAndIndex",params:[e,Se(o)]}):(a||s)&&(l=await t.request({method:"eth_getTransactionByBlockNumberAndIndex",params:[a||s,Se(o)]})),!l)throw new p5({blockHash:e,blockNumber:n,blockTag:s,hash:i,index:o});return(((p=(d=(u=t.chain)==null?void 0:u.formatters)==null?void 0:d.transaction)==null?void 0:p.format)||rg)(l)}async function i9(t,{hash:e,transactionReceipt:n}){const[r,i]=await Promise.all([ge(t,ou,"getBlockNumber")({}),e?ge(t,Pg,"getBlockNumber")({hash:e}):void 0]),o=(n==null?void 0:n.blockNumber)||(i==null?void 0:i.blockNumber);return o?r-o+1n:0n}async function w1(t,{hash:e}){var i,o,s;const n=await t.request({method:"eth_getTransactionReceipt",params:[e]});if(!n)throw new m5({hash:e});return(((s=(o=(i=t.chain)==null?void 0:i.formatters)==null?void 0:o.transactionReceipt)==null?void 0:s.format)||Jb)(n)}async function o9(t,e){var E;const{allowFailure:n=!0,batchSize:r,blockNumber:i,blockTag:o,contracts:s,multicallAddress:a}=e,l=r??(typeof((E=t.batch)==null?void 0:E.multicall)=="object"&&t.batch.multicall.batchSize||1024);let c=a;if(!c){if(!t.chain)throw new Error("client chain not configured. multicallAddress is required.");c=La({blockNumber:i,chain:t.chain,contract:"multicall3"})}const u=[[]];let d=0,p=0;for(let C=0;C<s.length;C++){const{abi:b,address:m,args:v,functionName:x}=s[C];try{const _=ao({abi:b,args:v,functionName:x});p+=(_.length-2)/2,l>0&&p>l&&u[d].length>0&&(d++,p=(_.length-2)/2,u[d]=[]),u[d]=[...u[d],{allowFailure:!0,callData:_,target:m}]}catch(_){const S=lc(_,{abi:b,address:m,args:v,docsPath:"/docs/contract/multicall",functionName:x});if(!n)throw S;u[d]=[...u[d],{allowFailure:!0,callData:"0x",target:m}]}}const w=await Promise.allSettled(u.map(C=>ge(t,Xi,"readContract")({abi:h1,address:c,args:[C],blockNumber:i,blockTag:o,functionName:"aggregate3"}))),y=[];for(let C=0;C<w.length;C++){const b=w[C];if(b.status==="rejected"){if(!n)throw b.reason;for(let v=0;v<u[C].length;v++)y.push({status:"failure",error:b.reason,result:void 0});continue}const m=b.value;for(let v=0;v<m.length;v++){const{returnData:x,success:_}=m[v],{callData:S}=u[C][v],{abi:f,address:A,functionName:R,args:D}=s[y.length];try{if(S==="0x")throw new nh;if(!_)throw new pg({data:x});const M=Ua({abi:f,args:D,data:x,functionName:R});y.push(n?{result:M,status:"success"}:M)}catch(M){const ee=lc(M,{abi:f,address:A,args:D,docsPath:"/docs/contract/multicall",functionName:R});if(!n)throw ee;y.push({error:ee,result:void 0,status:"failure"})}}}if(y.length!==s.length)throw new V("multicall results mismatch");return y}const s9="0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572";/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */BigInt(0);BigInt(1);BigInt(2);function a9(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function l9(t,e){const n=Dr(t)?Yi(t):t,r=Dr(e)?Yi(e):e;return a9(n,r)}async function z5(t,{address:e,hash:n,signature:r,...i}){const o=Dr(r)?r:Ae(r);try{const{data:s}=await ge(t,ah,"call")({data:F5({abi:jC,args:[e,n,o],bytecode:s9}),...i});return l9(s??"0x0","0x1")}catch(s){if(s instanceof g5)return!1;throw s}}async function c9(t,{address:e,message:n,signature:r,...i}){const o=q7(n);return z5(t,{address:e,hash:o,signature:r,...i})}async function u9(t,{address:e,signature:n,message:r,primaryType:i,types:o,domain:s,...a}){const l=L7({message:r,primaryType:i,types:o,domain:s});return z5(t,{address:e,hash:l,signature:n,...a})}function H5(t,{emitOnBegin:e=!1,emitMissed:n=!1,onBlockNumber:r,onError:i,poll:o,pollingInterval:s=t.pollingInterval}){const a=typeof o<"u"?o:t.transport.type!=="webSocket";let l;return a?(()=>{const d=tn(["watchBlockNumber",t.uid,e,n,s]);return Ba(d,{onBlockNumber:r,onError:i},p=>iu(async()=>{var w;try{const y=await ge(t,ou,"getBlockNumber")({cacheTime:0});if(l){if(y===l)return;if(y-l>1&&n)for(let E=l+1n;E<y;E++)p.onBlockNumber(E,l),l=E}(!l||y>l)&&(p.onBlockNumber(y,l),l=y)}catch(y){(w=p.onError)==null||w.call(p,y)}},{emitOnBegin:e,interval:s}))})():(()=>{let d=!0,p=()=>d=!1;return(async()=>{try{const{unsubscribe:w}=await t.transport.subscribe({params:["newHeads"],onData(y){var C;if(!d)return;const E=Ht((C=y.result)==null?void 0:C.number);r(E,l),l=E},onError(y){i==null||i(y)}});p=w,d||p()}catch(w){i==null||i(w)}})(),p})()}async function d9(t,{confirmations:e=1,hash:n,onReplaced:r,pollingInterval:i=t.pollingInterval,timeout:o}){const s=tn(["waitForTransactionReceipt",t.uid,n]);let a,l,c,u=!1;return new Promise((d,p)=>{o&&setTimeout(()=>p(new _C({hash:n})),o);const w=Ba(s,{onReplaced:r,resolve:d,reject:p},y=>{const E=ge(t,H5,"watchBlockNumber")({emitMissed:!0,emitOnBegin:!0,poll:!0,pollingInterval:i,async onBlockNumber(C){if(u)return;let b=C;const m=v=>{E(),v(),w()};try{if(c){if(e>1&&(!c.blockNumber||b-c.blockNumber+1n<e))return;m(()=>y.resolve(c));return}if(a||(u=!0,await m1(async()=>{a=await ge(t,Pg,"getTransaction")({hash:n}),a.blockNumber&&(b=a.blockNumber)},{delay:({count:v})=>~~(1<<v)*200,retryCount:6}),u=!1),c=await ge(t,w1,"getTransactionReceipt")({hash:n}),e>1&&(!c.blockNumber||b-c.blockNumber+1n<e))return;m(()=>y.resolve(c))}catch(v){if(a&&(v instanceof p5||v instanceof m5))try{l=a,u=!0;const x=await m1(()=>ge(t,Qi,"getBlock")({blockNumber:b,includeTransactions:!0}),{delay:({count:f})=>~~(1<<f)*200,retryCount:6,shouldRetry:({error:f})=>f instanceof w5});u=!1;const _=x.transactions.find(({from:f,nonce:A})=>f===l.from&&A===l.nonce);if(!_||(c=await ge(t,w1,"getTransactionReceipt")({hash:_.hash}),e>1&&(!c.blockNumber||b-c.blockNumber+1n<e)))return;let S="replaced";_.to===l.to&&_.value===l.value?S="repriced":_.from===_.to&&_.value===0n&&(S="cancelled"),m(()=>{var f;(f=y.onReplaced)==null||f.call(y,{reason:S,replacedTransaction:l,transaction:_,transactionReceipt:c}),y.resolve(c)})}catch(x){m(()=>y.reject(x))}else m(()=>y.reject(v))}}})})})}function f9(t,{blockTag:e="latest",emitMissed:n=!1,emitOnBegin:r=!1,onBlock:i,onError:o,includeTransactions:s,poll:a,pollingInterval:l=t.pollingInterval}){const c=typeof a<"u"?a:t.transport.type!=="webSocket",u=s??!1;let d;return c?(()=>{const y=tn(["watchBlocks",t.uid,n,r,u,l]);return Ba(y,{onBlock:i,onError:o},E=>iu(async()=>{var C;try{const b=await ge(t,Qi,"getBlock")({blockTag:e,includeTransactions:u});if(b.number&&(d!=null&&d.number)){if(b.number===d.number)return;if(b.number-d.number>1&&n)for(let m=(d==null?void 0:d.number)+1n;m<b.number;m++){const v=await ge(t,Qi,"getBlock")({blockNumber:m,includeTransactions:u});E.onBlock(v,d),d=v}}(!(d!=null&&d.number)||e==="pending"&&!(b!=null&&b.number)||b.number&&b.number>d.number)&&(E.onBlock(b,d),d=b)}catch(b){(C=E.onError)==null||C.call(E,b)}},{emitOnBegin:r,interval:l}))})():(()=>{let y=!0,E=()=>y=!1;return(async()=>{try{const{unsubscribe:C}=await t.transport.subscribe({params:["newHeads"],onData(b){var x,_,S;if(!y)return;const v=(((S=(_=(x=t.chain)==null?void 0:x.formatters)==null?void 0:_.block)==null?void 0:S.format)||ig)(b.result);i(v,d),d=v},onError(b){o==null||o(b)}});E=C,y||E()}catch(C){o==null||o(C)}})(),E})()}function h9(t,{address:e,args:n,batch:r=!0,event:i,events:o,onError:s,onLogs:a,poll:l,pollingInterval:c=t.pollingInterval,strict:u}){const d=typeof l<"u"?l:t.transport.type!=="webSocket",p=u??!1;return d?(()=>{const E=tn(["watchEvent",e,n,r,t.uid,i,c]);return Ba(E,{onLogs:a,onError:s},C=>{let b,m,v=!1;const x=iu(async()=>{var _;if(!v){try{m=await ge(t,k5,"createEventFilter")({address:e,args:n,event:i,events:o,strict:p})}catch{}v=!0;return}try{let S;if(m)S=await ge(t,lh,"getFilterChanges")({filter:m});else{const f=await ge(t,ou,"getBlockNumber")({});b&&b!==f?S=await ge(t,xg,"getLogs")({address:e,args:n,event:i,events:o,fromBlock:b+1n,toBlock:f}):S=[],b=f}if(S.length===0)return;if(r)C.onLogs(S);else for(const f of S)C.onLogs([f])}catch(S){m&&S instanceof Ho&&(v=!1),(_=C.onError)==null||_.call(C,S)}},{emitOnBegin:!0,interval:c});return async()=>{m&&await ge(t,ch,"uninstallFilter")({filter:m}),x()}})})():(()=>{let E=!0,C=()=>E=!1;return(async()=>{try{const b=o??(i?[i]:void 0);let m=[];b&&(m=[b.flatMap(x=>eu({abi:[x],eventName:x.name,args:n}))],i&&(m=m[0]));const{unsubscribe:v}=await t.transport.subscribe({params:["logs",{address:e,topics:m}],onData(x){var S;if(!E)return;const _=x.result;try{const{eventName:f,args:A}=ru({abi:b,data:_.data,topics:_.topics,strict:p}),R=qn(_,{args:A,eventName:f});a([R])}catch(f){let A,R;if(f instanceof zo||f instanceof Ra){if(u)return;A=f.abiItem.name,R=(S=f.abiItem.inputs)==null?void 0:S.some(M=>!("name"in M&&M.name))}const D=qn(_,{args:R?[]:{},eventName:A});a([D])}},onError(x){s==null||s(x)}});C=v,E||C()}catch(b){s==null||s(b)}})(),C})()}function p9(t,{batch:e=!0,onError:n,onTransactions:r,poll:i,pollingInterval:o=t.pollingInterval}){return(typeof i<"u"?i:t.transport.type!=="webSocket")?(()=>{const c=tn(["watchPendingTransactions",t.uid,e,o]);return Ba(c,{onTransactions:r,onError:n},u=>{let d;const p=iu(async()=>{var w;try{if(!d)try{d=await ge(t,R5,"createPendingTransactionFilter")({});return}catch(E){throw p(),E}const y=await ge(t,lh,"getFilterChanges")({filter:d});if(y.length===0)return;if(e)u.onTransactions(y);else for(const E of y)u.onTransactions([E])}catch(y){(w=u.onError)==null||w.call(u,y)}},{emitOnBegin:!0,interval:o});return async()=>{d&&await ge(t,ch,"uninstallFilter")({filter:d}),p()}})})():(()=>{let c=!0,u=()=>c=!1;return(async()=>{try{const{unsubscribe:d}=await t.transport.subscribe({params:["newPendingTransactions"],onData(p){if(!c)return;const w=p.result;r([w])},onError(p){n==null||n(p)}});u=d,c||u()}catch(d){n==null||n(d)}})(),u})()}function m9(t){return{call:e=>ah(t,e),createBlockFilter:()=>I7(t),createContractEventFilter:e=>d5(t,e),createEventFilter:e=>k5(t,e),createPendingTransactionFilter:()=>R5(t),estimateContractGas:e=>NC(t,e),estimateGas:e=>bg(t,e),getBalance:e=>$7(t,e),getBlock:e=>Qi(t,e),getBlockNumber:e=>ou(t,e),getBlockTransactionCount:e=>O7(t,e),getBytecode:e=>D7(t,e),getChainId:()=>cc(t),getContractEvents:e=>x5(t,e),getEnsAddress:e=>h7(t,e),getEnsAvatar:e=>T7(t,e),getEnsName:e=>A7(t,e),getEnsResolver:e=>P7(t,e),getEnsText:e=>D5(t,e),getFeeHistory:e=>R7(t,e),estimateFeesPerGas:e=>RC(t,e),getFilterChanges:e=>lh(t,e),getFilterLogs:e=>N7(t,e),getGasPrice:()=>vg(t),getLogs:e=>xg(t,e),getProof:e=>n9(t,e),estimateMaxPriorityFeePerGas:e=>kC(t,e),getStorageAt:e=>r9(t,e),getTransaction:e=>Pg(t,e),getTransactionConfirmations:e=>i9(t,e),getTransactionCount:e=>v5(t,e),getTransactionReceipt:e=>w1(t,e),multicall:e=>o9(t,e),prepareTransactionRequest:e=>sh(t,e),readContract:e=>Xi(t,e),sendRawTransaction:e=>_g(t,e),simulateContract:e=>qC(t,e),verifyMessage:e=>c9(t,e),verifyTypedData:e=>u9(t,e),uninstallFilter:e=>ch(t,e),waitForTransactionReceipt:e=>d9(t,e),watchBlocks:e=>f9(t,e),watchBlockNumber:e=>H5(t,e),watchContractEvent:e=>JC(t,e),watchEvent:e=>h9(t,e),watchPendingTransactions:e=>p9(t,e)}}function Qy(t){const{key:e="public",name:n="Public Client"}=t;return S5({...t,key:e,name:n,type:"publicClient"}).extend(m9)}function g9(t,{abi:e,args:n,bytecode:r,...i}){const o=F5({abi:e,args:n,bytecode:r});return Cg(t,{...i,data:o})}async function w9(t){var n;return((n=t.account)==null?void 0:n.type)==="local"?[t.account.address]:(await t.request({method:"eth_accounts"})).map(r=>dg(r))}async function y9(t){return await t.request({method:"wallet_getPermissions"})}async function v9(t){return(await t.request({method:"eth_requestAccounts"})).map(n=>zn(n))}async function b9(t,e){return t.request({method:"wallet_requestPermissions",params:[e]})}async function x9(t,{account:e=t.account,message:n}){if(!e)throw new Ma({docsPath:"/docs/actions/wallet/signMessage"});const r=Kn(e);if(r.type==="local")return r.signMessage({message:n});const i=(()=>typeof n=="string"?ng(n):n.raw instanceof Uint8Array?Ae(n.raw):n.raw)();return t.request({method:"personal_sign",params:[i,r.address]})}async function E9(t,e){var c,u,d,p;const{account:n=t.account,chain:r=t.chain,...i}=e;if(!n)throw new Ma({docsPath:"/docs/actions/wallet/signTransaction"});const o=Kn(n);nu({account:o,...e});const s=await ge(t,cc,"getChainId")({});r!==null&&C5({currentChainId:s,chain:r});const a=(r==null?void 0:r.formatters)||((c=t.chain)==null?void 0:c.formatters),l=((u=a==null?void 0:a.transactionRequest)==null?void 0:u.format)||Qc;return o.type==="local"?o.signTransaction({...i,chainId:s},{serializer:(p=(d=t.chain)==null?void 0:d.serializers)==null?void 0:p.transaction}):await t.request({method:"eth_signTransaction",params:[{...l(i),chainId:Se(s),from:o.address}]})}async function _9(t,{account:e=t.account,domain:n,message:r,primaryType:i,types:o}){if(!e)throw new Ma({docsPath:"/docs/actions/wallet/signTypedData"});const s=Kn(e),a={EIP712Domain:j5({domain:n}),...o};if(B5({domain:n,message:r,primaryType:i,types:a}),s.type==="local")return s.signTypedData({domain:n,primaryType:i,types:a,message:r});const l=tn({domain:n??{},primaryType:i,types:a,message:r},(c,u)=>Dr(u)?u.toLowerCase():u);return t.request({method:"eth_signTypedData_v4",params:[s.address,l]})}async function C9(t,{id:e}){await t.request({method:"wallet_switchEthereumChain",params:[{chainId:Se(e)}]})}async function S9(t,e){return await t.request({method:"wallet_watchAsset",params:e})}function T9(t){return{addChain:e=>n7(t,e),deployContract:e=>g9(t,e),getAddresses:()=>w9(t),getChainId:()=>cc(t),getPermissions:()=>y9(t),prepareTransactionRequest:e=>sh(t,e),requestAddresses:()=>v9(t),requestPermissions:e=>b9(t,e),sendRawTransaction:e=>_g(t,e),sendTransaction:e=>Cg(t,e),signMessage:e=>x9(t,e),signTransaction:e=>E9(t,e),signTypedData:e=>_9(t,e),switchChain:e=>C9(t,e),watchAsset:e=>S9(t,e),writeContract:e=>t7(t,e)}}function hh(t){const{key:e="wallet",name:n="Wallet Client",transport:r}=t;return S5({...t,key:e,name:n,transport:o=>r({...o,retryCount:0}),type:"walletClient"}).extend(T9)}function A9(t,e={}){const{key:n="webSocket",name:r="WebSocket JSON-RPC",retryDelay:i}=e;return({chain:o,retryCount:s,timeout:a})=>{var d;const l=e.retryCount??s,c=a??e.timeout??1e4,u=t||((d=o==null?void 0:o.rpcUrls.default.webSocket)==null?void 0:d[0]);if(!u)throw new A5;return uh({key:n,name:r,async request({method:p,params:w}){const y={method:p,params:w},E=await I0(u),{error:C,result:b}=await Vs.webSocketAsync(E,{body:y,timeout:c});if(C)throw new mg({body:y,error:C,url:u});return b},retryCount:l,retryDelay:i,timeout:c,type:"webSocket"},{getSocket(){return I0(u)},async subscribe({params:p,onData:w,onError:y}){const E=await I0(u),{result:C}=await new Promise((b,m)=>Vs.webSocket(E,{body:{method:"eth_subscribe",params:p},onResponse(v){if(v.error){m(v.error),y==null||y(v.error);return}if(typeof v.id=="number"){b(v);return}v.method==="eth_subscription"&&w(v.params)}}));return{subscriptionId:C,async unsubscribe(){return new Promise(b=>Vs.webSocket(E,{body:{method:"eth_unsubscribe",params:[C]},onResponse:b}))}}}})}}function ph(t,e="hex"){const n=V5(t),r=H7(new Uint8Array(n.length));return n.encode(r),e==="hex"?ra(r.bytes):r.bytes}function V5(t){return Array.isArray(t)?P9(t.map(e=>V5(e))):I9(t)}function P9(t){const e=t.reduce((i,o)=>i+o.length,0),n=q5(e);return{length:(()=>e<=55?1+e:1+n+e)(),encode(i){e<=55?i.pushByte(192+e):(i.pushByte(192+55+n),n===1?i.pushUint8(e):n===2?i.pushUint16(e):n===3?i.pushUint24(e):i.pushUint32(e));for(const{encode:o}of t)o(i)}}}function I9(t){const e=typeof t=="string"?Yc(t):t,n=q5(e.length);return{length:(()=>e.length===1&&e[0]<128?1:e.length<=55?1+e.length:1+n+e.length)(),encode(i){e.length===1&&e[0]<128?i.pushBytes(e):e.length<=55?(i.pushByte(128+e.length),i.pushBytes(e)):(i.pushByte(128+55+n),n===1?i.pushUint8(e.length):n===2?i.pushUint16(e.length):n===3?i.pushUint24(e.length):i.pushUint32(e.length),i.pushBytes(e))}}}function q5(t){if(t<2**8)return 1;if(t<2**16)return 2;if(t<2**24)return 3;if(t<2**32)return 4;throw new V("Length is too large.")}const $9=Yf({id:5,network:"goerli",name:"Goerli",nativeCurrency:{name:"Goerli Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-goerli.g.alchemy.com/v2"],webSocket:["wss://eth-goerli.g.alchemy.com/v2"]},infura:{http:["https://goerli.infura.io/v3"],webSocket:["wss://goerli.infura.io/ws/v3"]},default:{http:["https://rpc.ankr.com/eth_goerli"]},public:{http:["https://rpc.ankr.com/eth_goerli"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://goerli.etherscan.io"},default:{name:"Etherscan",url:"https://goerli.etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0x56522D00C410a43BFfDF00a9A569489297385790",blockCreated:8765204},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:6507670}},testnet:!0}),Ig=Yf({id:1,network:"homestead",name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-mainnet.g.alchemy.com/v2"],webSocket:["wss://eth-mainnet.g.alchemy.com/v2"]},infura:{http:["https://mainnet.infura.io/v3"],webSocket:["wss://mainnet.infura.io/ws/v3"]},default:{http:["https://cloudflare-eth.com"]},public:{http:["https://cloudflare-eth.com"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://etherscan.io"},default:{name:"Etherscan",url:"https://etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62",blockCreated:16966585},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}}),Z5={block:KE({format(t){var n;const e=(n=t.transactions)==null?void 0:n.map(r=>{if(typeof r=="string")return r;const i=Z5.transaction.format(r);return i.typeHex==="0x71"?i.type="eip712":i.typeHex==="0xff"&&(i.type="priority"),i});return{l1BatchNumber:t.l1BatchNumber?Ht(t.l1BatchNumber):null,l1BatchTimestamp:t.l1BatchTimestamp?Ht(t.l1BatchTimestamp):null,transactions:e}}}),transaction:GE({format(t){const e={};return t.type==="0x71"?e.type="eip712":t.type==="0xff"&&(e.type="priority"),{...e,l1BatchNumber:t.l1BatchNumber?Ht(t.l1BatchNumber):null,l1BatchTxIndex:t.l1BatchTxIndex?Ht(t.l1BatchTxIndex):null}}}),transactionReceipt:QE({format(t){return{l1BatchNumber:t.l1BatchNumber?Ht(t.l1BatchNumber):null,l1BatchTxIndex:t.l1BatchTxIndex?Ht(t.l1BatchTxIndex):null,logs:t.logs.map(e=>({...qn(e),l1BatchNumber:e.l1BatchNumber?Ht(e.l1BatchNumber):null,transactionLogIndex:Ut(e.transactionLogIndex),logType:e.logType})),l2ToL1Logs:t.l2ToL1Logs.map(e=>({blockNumber:Ht(e.blockHash),blockHash:e.blockHash,l1BatchNumber:Ht(e.l1BatchNumber),transactionIndex:Ht(e.transactionIndex),shardId:Ht(e.shardId),isService:e.isService,sender:e.sender,key:e.key,value:e.value,transactionHash:e.transactionHash,logIndex:Ht(e.logIndex)}))}}}),transactionRequest:JE({exclude:["customSignature","factoryDeps","gasPerPubdata","paymaster","paymasterInput"],format(t){return t.gasPerPubdata||t.paymaster&&t.paymasterInput||t.factoryDeps||t.customSignature?{eip712Meta:{...t.gasPerPubdata?{gasPerPubdata:Ae(t.gasPerPubdata)}:{},...t.paymaster&&t.paymasterInput?{paymasterParams:{paymaster:t.paymaster,paymasterInput:Array.from(Yc(t.paymasterInput))}}:{},...t.factoryDeps?{factoryDeps:t.factoryDeps}:{},...t.customSignature?{customSignature:t.customSignature}:{}},type:t.type==="eip712"?"0x71":"0xff"}:{}}})},O9=(t,e)=>R9(t)?k9(t):Y7(t,e),D9={transaction:O9};function k9(t){const{chainId:e,gas:n,nonce:r,to:i,from:o,value:s,maxFeePerGas:a,maxPriorityFeePerGas:l,customSignature:c,factoryDeps:u,paymaster:d,paymasterInput:p,gasPerPubdata:w,data:y}=t;N9(t);const E=[r?Ae(r):"0x",l?Ae(l):"0x",a?Ae(a):"0x",n?Ae(n):"0x",i??"0x",s?Ae(s):"0x",y??"0x",Ae(e),Ae(""),Ae(""),Ae(e),o??"0x",w?Ae(w):"0x",u??[],c??"0x",d&&p?[d,p]:[]];return ka(["0x71",ph(E)])}function R9(t){return"customSignature"in t||"paymaster"in t||"paymasterInput"in t||"gasPerPubdata"in t||"factoryDeps"in t}function N9(t){const{chainId:e,to:n,from:r,paymaster:i,paymasterInput:o}=t;if(e<=0)throw new Jf({chainId:e});if(n&&!en(n))throw new Wn({address:n});if(r&&!en(r))throw new Wn({address:r});if(i&&!en(i))throw new Wn({address:i});if(i&&!o)throw new V("`paymasterInput` must be provided when `paymaster` is defined");if(!i&&o)throw new V("`paymaster` must be provided when `paymasterInput` is defined")}const M9=Yf({id:280,name:"zkSync Era Testnet",network:"zksync-era-testnet",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://testnet.era.zksync.dev"],webSocket:["wss://testnet.era.zksync.dev/ws"]},public:{http:["https://testnet.era.zksync.dev"],webSocket:["wss://testnet.era.zksync.dev/ws"]}},blockExplorers:{default:{name:"zkExplorer",url:"https://goerli.explorer.zksync.io"}},contracts:{multicall3:{address:"0xF9cda624FBC7e059355ce98a31693d299FACd963"}},testnet:!0},{serializers:D9,formatters:Z5});var G5=class extends Error{constructor({chainId:t,connectorId:e}){super(`Chain "${t}" not configured for connector "${e}".`),this.name="ChainNotConfiguredForConnectorError"}},Si=class extends Error{constructor(){super(...arguments),this.name="ConnectorNotFoundError",this.message="Connector not found"}};function qd(t){return typeof t=="string"?Number.parseInt(t,t.trim().substring(0,2)==="0x"?16:10):typeof t=="bigint"?Number(t):t}var K5={exports:{}};(function(t){var e=Object.prototype.hasOwnProperty,n="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(n=!1));function i(l,c,u){this.fn=l,this.context=c,this.once=u||!1}function o(l,c,u,d,p){if(typeof u!="function")throw new TypeError("The listener must be a function");var w=new i(u,d||l,p),y=n?n+c:c;return l._events[y]?l._events[y].fn?l._events[y]=[l._events[y],w]:l._events[y].push(w):(l._events[y]=w,l._eventsCount++),l}function s(l,c){--l._eventsCount===0?l._events=new r:delete l._events[c]}function a(){this._events=new r,this._eventsCount=0}a.prototype.eventNames=function(){var c=[],u,d;if(this._eventsCount===0)return c;for(d in u=this._events)e.call(u,d)&&c.push(n?d.slice(1):d);return Object.getOwnPropertySymbols?c.concat(Object.getOwnPropertySymbols(u)):c},a.prototype.listeners=function(c){var u=n?n+c:c,d=this._events[u];if(!d)return[];if(d.fn)return[d.fn];for(var p=0,w=d.length,y=new Array(w);p<w;p++)y[p]=d[p].fn;return y},a.prototype.listenerCount=function(c){var u=n?n+c:c,d=this._events[u];return d?d.fn?1:d.length:0},a.prototype.emit=function(c,u,d,p,w,y){var E=n?n+c:c;if(!this._events[E])return!1;var C=this._events[E],b=arguments.length,m,v;if(C.fn){switch(C.once&&this.removeListener(c,C.fn,void 0,!0),b){case 1:return C.fn.call(C.context),!0;case 2:return C.fn.call(C.context,u),!0;case 3:return C.fn.call(C.context,u,d),!0;case 4:return C.fn.call(C.context,u,d,p),!0;case 5:return C.fn.call(C.context,u,d,p,w),!0;case 6:return C.fn.call(C.context,u,d,p,w,y),!0}for(v=1,m=new Array(b-1);v<b;v++)m[v-1]=arguments[v];C.fn.apply(C.context,m)}else{var x=C.length,_;for(v=0;v<x;v++)switch(C[v].once&&this.removeListener(c,C[v].fn,void 0,!0),b){case 1:C[v].fn.call(C[v].context);break;case 2:C[v].fn.call(C[v].context,u);break;case 3:C[v].fn.call(C[v].context,u,d);break;case 4:C[v].fn.call(C[v].context,u,d,p);break;default:if(!m)for(_=1,m=new Array(b-1);_<b;_++)m[_-1]=arguments[_];C[v].fn.apply(C[v].context,m)}}return!0},a.prototype.on=function(c,u,d){return o(this,c,u,d,!1)},a.prototype.once=function(c,u,d){return o(this,c,u,d,!0)},a.prototype.removeListener=function(c,u,d,p){var w=n?n+c:c;if(!this._events[w])return this;if(!u)return s(this,w),this;var y=this._events[w];if(y.fn)y.fn===u&&(!p||y.once)&&(!d||y.context===d)&&s(this,w);else{for(var E=0,C=[],b=y.length;E<b;E++)(y[E].fn!==u||p&&!y[E].once||d&&y[E].context!==d)&&C.push(y[E]);C.length?this._events[w]=C.length===1?C[0]:C:s(this,w)}return this},a.prototype.removeAllListeners=function(c){var u;return c?(u=n?n+c:c,this._events[u]&&s(this,u)):(this._events=new r,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=n,a.EventEmitter=a,t.exports=a})(K5);var U9=K5.exports;const L9=Hc(U9);var $g=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)},He=(t,e,n)=>($g(t,e,"read from private field"),n?n.call(t):e.get(t)),ln=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},uc=(t,e,n,r)=>($g(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n),Dt=(t,e,n)=>($g(t,e,"access private method"),n),mh=class extends L9{constructor({chains:t=[Ig,$9],options:e}){super(),this.chains=t,this.options=e}getBlockExplorerUrls(t){const{default:e,...n}=t.blockExplorers??{};if(e)return[e.url,...Object.values(n).map(r=>r.url)]}isChainUnsupported(t){return!this.chains.some(e=>e.id===t)}setStorage(t){this.storage=t}};function B9(t){var n;if(!t)return"Injected";const e=r=>{if(r.isApexWallet)return"Apex Wallet";if(r.isAvalanche)return"Core Wallet";if(r.isBackpack)return"Backpack";if(r.isBifrost)return"Bifrost Wallet";if(r.isBitKeep)return"BitKeep";if(r.isBitski)return"Bitski";if(r.isBlockWallet)return"BlockWallet";if(r.isBraveWallet)return"Brave Wallet";if(r.isCoin98)return"Coin98 Wallet";if(r.isCoinbaseWallet)return"Coinbase Wallet";if(r.isDawn)return"Dawn Wallet";if(r.isDefiant)return"Defiant";if(r.isDesig)return"Desig Wallet";if(r.isEnkrypt)return"Enkrypt";if(r.isExodus)return"Exodus";if(r.isFordefi)return"Fordefi";if(r.isFrame)return"Frame";if(r.isFrontier)return"Frontier Wallet";if(r.isGamestop)return"GameStop Wallet";if(r.isHaqqWallet)return"HAQQ Wallet";if(r.isHyperPay)return"HyperPay Wallet";if(r.isImToken)return"ImToken";if(r.isHaloWallet)return"Halo Wallet";if(r.isKuCoinWallet)return"KuCoin Wallet";if(r.isMathWallet)return"MathWallet";if(r.isNovaWallet)return"Nova Wallet";if(r.isOkxWallet||r.isOKExWallet)return"OKX Wallet";if(r.isOktoWallet)return"Okto Wallet";if(r.isOneInchIOSWallet||r.isOneInchAndroidWallet)return"1inch Wallet";if(r.isOneKey)return"OneKey Wallet";if(r.isOpera)return"Opera";if(r.isPhantom)return"Phantom";if(r.isPortal)return"Ripio Portal";if(r.isRabby)return"Rabby Wallet";if(r.isRainbow)return"Rainbow";if(r.isSafePal)return"SafePal Wallet";if(r.isStatus)return"Status";if(r.isSubWallet)return"SubWallet";if(r.isTalisman)return"Talisman";if(r.isTally)return"Taho";if(r.isTokenPocket)return"TokenPocket";if(r.isTokenary)return"Tokenary";if(r.isTrust||r.isTrustWallet)return"Trust Wallet";if(r.isTTWallet)return"TTWallet";if(r.isXDEFI)return"XDEFI Wallet";if(r.isZeal)return"Zeal";if(r.isZerion)return"Zerion";if(r.isMetaMask)return"MetaMask"};if((n=t.providers)!=null&&n.length){const r=new Set;let i=1;for(const s of t.providers){let a=e(s);a||(a=`Unknown Wallet #${i}`,i+=1),r.add(a)}const o=[...r];return o.length?o:o[0]??"Injected"}return e(t)??"Injected"}var fd,Og=class extends mh{constructor({chains:t,options:e}={}){const n={shimDisconnect:!0,getProvider(){if(typeof window>"u")return;const i=window.ethereum;return i!=null&&i.providers&&i.providers.length>0?i.providers[0]:i},...e};super({chains:t,options:n}),this.id="injected",ln(this,fd,void 0),this.shimDisconnectKey=`${this.id}.shimDisconnect`,this.onAccountsChanged=i=>{i.length===0?this.emit("disconnect"):this.emit("change",{account:zn(i[0])})},this.onChainChanged=i=>{const o=qd(i),s=this.isChainUnsupported(o);this.emit("change",{chain:{id:o,unsupported:s}})},this.onDisconnect=async i=>{var o;i.code===1013&&await this.getProvider()&&await this.getAccount()||(this.emit("disconnect"),this.options.shimDisconnect&&((o=this.storage)==null||o.removeItem(this.shimDisconnectKey)))};const r=n.getProvider();if(typeof n.name=="string")this.name=n.name;else if(r){const i=B9(r);n.name?this.name=n.name(i):typeof i=="string"?this.name=i:this.name=i[0]}else this.name="Injected";this.ready=!!r}async connect({chainId:t}={}){var e;try{const n=await this.getProvider();if(!n)throw new Si;n.on&&(n.on("accountsChanged",this.onAccountsChanged),n.on("chainChanged",this.onChainChanged),n.on("disconnect",this.onDisconnect)),this.emit("message",{type:"connecting"});const r=await n.request({method:"eth_requestAccounts"}),i=zn(r[0]);let o=await this.getChainId(),s=this.isChainUnsupported(o);return t&&o!==t&&(o=(await this.switchChain(t)).id,s=this.isChainUnsupported(o)),this.options.shimDisconnect&&((e=this.storage)==null||e.setItem(this.shimDisconnectKey,!0)),{account:i,chain:{id:o,unsupported:s}}}catch(n){throw this.isUserRejectedRequestError(n)?new fn(n):n.code===-32002?new oa(n):n}}async disconnect(){var e;const t=await this.getProvider();t!=null&&t.removeListener&&(t.removeListener("accountsChanged",this.onAccountsChanged),t.removeListener("chainChanged",this.onChainChanged),t.removeListener("disconnect",this.onDisconnect),this.options.shimDisconnect&&((e=this.storage)==null||e.removeItem(this.shimDisconnectKey)))}async getAccount(){const t=await this.getProvider();if(!t)throw new Si;const e=await t.request({method:"eth_accounts"});return zn(e[0])}async getChainId(){const t=await this.getProvider();if(!t)throw new Si;return t.request({method:"eth_chainId"}).then(qd)}async getProvider(){const t=this.options.getProvider();return t&&uc(this,fd,t),He(this,fd)}async getWalletClient({chainId:t}={}){const[e,n]=await Promise.all([this.getProvider(),this.getAccount()]),r=this.chains.find(i=>i.id===t);if(!e)throw new Error("provider is required.");return hh({account:n,chain:r,transport:dh(e)})}async isAuthorized(){var t;try{if(this.options.shimDisconnect&&!((t=this.storage)!=null&&t.getItem(this.shimDisconnectKey)))return!1;if(!await this.getProvider())throw new Si;return!!await this.getAccount()}catch{return!1}}async switchChain(t){var r,i,o;const e=await this.getProvider();if(!e)throw new Si;const n=Se(t);try{return await Promise.all([e.request({method:"wallet_switchEthereumChain",params:[{chainId:n}]}),new Promise(s=>this.on("change",({chain:a})=>{(a==null?void 0:a.id)===t&&s()}))]),this.chains.find(s=>s.id===t)??{id:t,name:`Chain ${n}`,network:`${n}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(s){const a=this.chains.find(l=>l.id===t);if(!a)throw new G5({chainId:t,connectorId:this.id});if(s.code===4902||((i=(r=s==null?void 0:s.data)==null?void 0:r.originalError)==null?void 0:i.code)===4902)try{if(await e.request({method:"wallet_addEthereumChain",params:[{chainId:n,chainName:a.name,nativeCurrency:a.nativeCurrency,rpcUrls:[((o=a.rpcUrls.public)==null?void 0:o.http[0])??""],blockExplorerUrls:this.getBlockExplorerUrls(a)}]}),await this.getChainId()!==t)throw new fn(new Error("User rejected switch after adding network."));return a}catch(l){throw new fn(l)}throw this.isUserRejectedRequestError(s)?new fn(s):new hr(s)}}async watchAsset({address:t,decimals:e=18,image:n,symbol:r}){const i=await this.getProvider();if(!i)throw new Si;return i.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:t,decimals:e,image:n,symbol:r}}})}isUserRejectedRequestError(t){return t.code===4001}};fd=new WeakMap;var Dg=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)},O0=(t,e,n)=>(Dg(t,e,"read from private field"),n?n.call(t):e.get(t)),D0=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},zu=(t,e,n,r)=>(Dg(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n),j9=(t,e,n)=>(Dg(t,e,"access private method"),n);const F9=t=>(e,n,r)=>{const i=r.subscribe;return r.subscribe=(s,a,l)=>{let c=s;if(a){const u=(l==null?void 0:l.equalityFn)||Object.is;let d=s(r.getState());c=p=>{const w=s(p);if(!u(d,w)){const y=d;a(d=w,y)}},l!=null&&l.fireImmediately&&a(d,d)}return i(c)},t(e,n,r)},W9=F9;function z9(t,e){let n;try{n=t()}catch{return}return{getItem:i=>{var o;const s=l=>l===null?null:JSON.parse(l,e==null?void 0:e.reviver),a=(o=n.getItem(i))!=null?o:null;return a instanceof Promise?a.then(s):s(a)},setItem:(i,o)=>n.setItem(i,JSON.stringify(o,e==null?void 0:e.replacer)),removeItem:i=>n.removeItem(i)}}const dc=t=>e=>{try{const n=t(e);return n instanceof Promise?n:{then(r){return dc(r)(n)},catch(r){return this}}}catch(n){return{then(r){return this},catch(r){return dc(r)(n)}}}},H9=(t,e)=>(n,r,i)=>{let o={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:C=>C,version:0,merge:(C,b)=>({...b,...C}),...e},s=!1;const a=new Set,l=new Set;let c;try{c=o.getStorage()}catch{}if(!c)return t((...C)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),n(...C)},r,i);const u=dc(o.serialize),d=()=>{const C=o.partialize({...r()});let b;const m=u({state:C,version:o.version}).then(v=>c.setItem(o.name,v)).catch(v=>{b=v});if(b)throw b;return m},p=i.setState;i.setState=(C,b)=>{p(C,b),d()};const w=t((...C)=>{n(...C),d()},r,i);let y;const E=()=>{var C;if(!c)return;s=!1,a.forEach(m=>m(r()));const b=((C=o.onRehydrateStorage)==null?void 0:C.call(o,r()))||void 0;return dc(c.getItem.bind(c))(o.name).then(m=>{if(m)return o.deserialize(m)}).then(m=>{if(m)if(typeof m.version=="number"&&m.version!==o.version){if(o.migrate)return o.migrate(m.state,m.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return m.state}).then(m=>{var v;return y=o.merge(m,(v=r())!=null?v:w),n(y,!0),d()}).then(()=>{b==null||b(y,void 0),s=!0,l.forEach(m=>m(y))}).catch(m=>{b==null||b(void 0,m)})};return i.persist={setOptions:C=>{o={...o,...C},C.getStorage&&(c=C.getStorage())},clearStorage:()=>{c==null||c.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>E(),hasHydrated:()=>s,onHydrate:C=>(a.add(C),()=>{a.delete(C)}),onFinishHydration:C=>(l.add(C),()=>{l.delete(C)})},E(),y||w},V9=(t,e)=>(n,r,i)=>{let o={storage:z9(()=>localStorage),partialize:E=>E,version:0,merge:(E,C)=>({...C,...E}),...e},s=!1;const a=new Set,l=new Set;let c=o.storage;if(!c)return t((...E)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),n(...E)},r,i);const u=()=>{const E=o.partialize({...r()});return c.setItem(o.name,{state:E,version:o.version})},d=i.setState;i.setState=(E,C)=>{d(E,C),u()};const p=t((...E)=>{n(...E),u()},r,i);i.getInitialState=()=>p;let w;const y=()=>{var E,C;if(!c)return;s=!1,a.forEach(m=>{var v;return m((v=r())!=null?v:p)});const b=((C=o.onRehydrateStorage)==null?void 0:C.call(o,(E=r())!=null?E:p))||void 0;return dc(c.getItem.bind(c))(o.name).then(m=>{if(m)if(typeof m.version=="number"&&m.version!==o.version){if(o.migrate)return o.migrate(m.state,m.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return m.state}).then(m=>{var v;return w=o.merge(m,(v=r())!=null?v:p),n(w,!0),u()}).then(()=>{b==null||b(w,void 0),w=r(),s=!0,l.forEach(m=>m(w))}).catch(m=>{b==null||b(void 0,m)})};return i.persist={setOptions:E=>{o={...o,...E},E.storage&&(c=E.storage)},clearStorage:()=>{c==null||c.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>y(),hasHydrated:()=>s,onHydrate:E=>(a.add(E),()=>{a.delete(E)}),onFinishHydration:E=>(l.add(E),()=>{l.delete(E)})},o.skipHydration||y(),w||p},q9=(t,e)=>"getStorage"in e||"serialize"in e||"deserialize"in e?H9(t,e):V9(t,e),Z9=q9,Xy=t=>{let e;const n=new Set,r=(u,d)=>{const p=typeof u=="function"?u(e):u;if(!Object.is(p,e)){const w=e;e=d??(typeof p!="object"||p===null)?p:Object.assign({},e,p),n.forEach(y=>y(e,w))}},i=()=>e,l={setState:r,getState:i,getInitialState:()=>c,subscribe:u=>(n.add(u),()=>n.delete(u)),destroy:()=>{n.clear()}},c=e=t(r,i,l);return l},G9=t=>t?Xy(t):Xy;function Y5(t,e){if(Object.is(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;if(t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(const[r,i]of t)if(!Object.is(i,e.get(r)))return!1;return!0}if(t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(const r of t)if(!e.has(r))return!1;return!0}const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!1;for(const r of n)if(!Object.prototype.hasOwnProperty.call(e,r)||!Object.is(t[r],e[r]))return!1;return!0}function K9(t,e,{batch:n={multicall:{wait:32}},pollingInterval:r=4e3,rank:i,retryCount:o,retryDelay:s,stallTimeout:a}={}){if(!t.length)throw new Error("must have at least one chain");let l=[];const c={},u={};for(const d of t){let p=!1;for(const w of e){const y=w(d);y&&(p=!0,l.some(({id:E})=>E===d.id)||(l=[...l,y.chain]),c[d.id]=[...c[d.id]||[],...y.rpcUrls.http],y.rpcUrls.webSocket&&(u[d.id]=[...u[d.id]||[],...y.rpcUrls.webSocket]))}if(!p)throw new Error([`Could not find valid provider configuration for chain "${d.name}".
`,"You may need to add `jsonRpcProvider` to `configureChains` with the chain's RPC URLs.","Read more: https://wagmi.sh/core/providers/jsonRpc"].join(`
`))}return{chains:l,publicClient:({chainId:d})=>{const p=l.find(E=>E.id===d)??t[0],w=c[p.id];if(!w||!w[0])throw new Error(`No providers configured for chain "${p.id}"`);const y=Qy({batch:n,chain:p,transport:Zy(w.map(E=>u7(E,{timeout:a})),{rank:i,retryCount:o,retryDelay:s}),pollingInterval:r});return Object.assign(y,{chains:l})},webSocketPublicClient:({chainId:d})=>{const p=l.find(E=>E.id===d)??t[0],w=u[p.id];if(!w||!w[0])return;const y=Qy({batch:n,chain:p,transport:Zy(w.map(E=>A9(E,{timeout:a})),{rank:i,retryCount:o,retryDelay:s}),pollingInterval:r});return Object.assign(y,{chains:l})}}}var Y9=class extends Error{constructor({chainId:t,connectorId:e}){super(`Chain "${t}" not configured${e?` for connector "${e}"`:""}.`),this.name="ChainNotConfigured"}},Q9=class extends Error{constructor(){super(...arguments),this.name="ConnectorAlreadyConnectedError",this.message="Connector already connected"}},X9=class extends Error{constructor(){super(...arguments),this.name="ConfigChainsNotFound",this.message="No chains were found on the wagmi config. Some functions that require a chain may not work."}},J9=class extends Error{constructor({connector:t}){super(`"${t.name}" does not support programmatic chain switching.`),this.name="SwitchChainNotSupportedError"}},y1=(t,{find:e,replace:n})=>t&&e(t)?n(t):typeof t!="object"?t:Array.isArray(t)?t.map(r=>y1(r,{find:e,replace:n})):t instanceof Object?Object.entries(t).reduce((r,[i,o])=>({...r,[i]:y1(o,{find:e,replace:n})}),{}):t;function eS(t){const e=JSON.parse(t);return y1(e,{find:r=>typeof r=="string"&&r.startsWith("#bigint."),replace:r=>BigInt(r.replace("#bigint.",""))})}function Jy(t){return typeof t=="number"?t:t==="wei"?0:Math.abs(i_[t])}function ev(t,e){return t.slice(0,e).join(".")||"."}function tv(t,e){const{length:n}=t;for(let r=0;r<n;++r)if(t[r]===e)return r+1;return 0}function tS(t,e){const n=typeof t=="function",r=typeof e=="function",i=[],o=[];return function(a,l){if(typeof l=="object")if(i.length){const c=tv(i,this);c===0?i[i.length]=this:(i.splice(c),o.splice(c)),o[o.length]=a;const u=tv(i,l);if(u!==0)return r?e.call(this,a,l,ev(o,u)):`[ref=${ev(o,u)}]`}else i[0]=l,o[0]=a;return n?t.call(this,a,l):l}}function nS(t,e,n,r){return JSON.stringify(t,tS((i,o)=>{const s=typeof o=="bigint"?`#bigint.${o.toString()}`:o;return(e==null?void 0:e(i,s))||s},r),n??void 0)}var Q5={getItem:t=>"",setItem:(t,e)=>null,removeItem:t=>null};function X5({deserialize:t=eS,key:e="wagmi",serialize:n=nS,storage:r}){return{...r,getItem:(i,o=null)=>{const s=r.getItem(`${e}.${i}`);try{return s?t(s):o}catch(a){return console.warn(a),o}},setItem:(i,o)=>{if(o===null)r.removeItem(`${e}.${i}`);else try{r.setItem(`${e}.${i}`,n(o))}catch(s){console.error(s)}},removeItem:i=>r.removeItem(`${e}.${i}`)}}var nv="store",vs,dl,v1,J5,rS=class{constructor({autoConnect:t=!1,connectors:e=[new Og],publicClient:n,storage:r=X5({storage:typeof window<"u"?window.localStorage:Q5}),logger:i={warn:console.warn},webSocketPublicClient:o}){var c,u;D0(this,v1),this.publicClients=new Map,this.webSocketPublicClients=new Map,D0(this,vs,void 0),D0(this,dl,void 0),this.args={autoConnect:t,connectors:e,logger:i,publicClient:n,storage:r,webSocketPublicClient:o};let s="disconnected",a;if(t)try{const d=r.getItem(nv),p=(c=d==null?void 0:d.state)==null?void 0:c.data;s=p!=null&&p.account?"reconnecting":"connecting",a=(u=p==null?void 0:p.chain)==null?void 0:u.id}catch{}const l=typeof e=="function"?e():e;l.forEach(d=>d.setStorage(r)),this.store=G9(W9(Z9(()=>({connectors:l,publicClient:this.getPublicClient({chainId:a}),status:s,webSocketPublicClient:this.getWebSocketPublicClient({chainId:a})}),{name:nv,storage:r,partialize:d=>{var p,w;return{...t&&{data:{account:(p=d==null?void 0:d.data)==null?void 0:p.account,chain:(w=d==null?void 0:d.data)==null?void 0:w.chain}},chains:d==null?void 0:d.chains}},version:2}))),this.storage=r,zu(this,dl,r==null?void 0:r.getItem("wallet")),j9(this,v1,J5).call(this),t&&typeof window<"u"&&setTimeout(async()=>await this.autoConnect(),0)}get chains(){return this.store.getState().chains}get connectors(){return this.store.getState().connectors}get connector(){return this.store.getState().connector}get data(){return this.store.getState().data}get error(){return this.store.getState().error}get lastUsedChainId(){var t,e;return(e=(t=this.data)==null?void 0:t.chain)==null?void 0:e.id}get publicClient(){return this.store.getState().publicClient}get status(){return this.store.getState().status}get subscribe(){return this.store.subscribe}get webSocketPublicClient(){return this.store.getState().webSocketPublicClient}setState(t){const e=typeof t=="function"?t(this.store.getState()):t;this.store.setState(e,!0)}clearState(){this.setState(t=>({...t,chains:void 0,connector:void 0,data:void 0,error:void 0,status:"disconnected"}))}async destroy(){var t,e;this.connector&&await((e=(t=this.connector).disconnect)==null?void 0:e.call(t)),zu(this,vs,!1),this.clearState(),this.store.destroy()}async autoConnect(){if(O0(this,vs))return;zu(this,vs,!0),this.setState(n=>{var r;return{...n,status:(r=n.data)!=null&&r.account?"reconnecting":"connecting"}});const t=O0(this,dl)?[...this.connectors].sort(n=>n.id===O0(this,dl)?-1:1):this.connectors;let e=!1;for(const n of t){if(!n.ready||!n.isAuthorized||!await n.isAuthorized())continue;const i=await n.connect();this.setState(o=>({...o,connector:n,chains:n==null?void 0:n.chains,data:i,status:"connected"})),e=!0;break}return e||this.setState(n=>({...n,data:void 0,status:"disconnected"})),zu(this,vs,!1),this.data}setConnectors(t){this.args={...this.args,connectors:t};const e=typeof t=="function"?t():t;e.forEach(n=>n.setStorage(this.args.storage)),this.setState(n=>({...n,connectors:e}))}getPublicClient({chainId:t}={}){let e=this.publicClients.get(-1);if(e&&(e==null?void 0:e.chain.id)===t||(e=this.publicClients.get(t??-1),e))return e;const{publicClient:n}=this.args;return e=typeof n=="function"?n({chainId:t}):n,this.publicClients.set(t??-1,e),e}setPublicClient(t){var n,r;const e=(r=(n=this.data)==null?void 0:n.chain)==null?void 0:r.id;this.args={...this.args,publicClient:t},this.publicClients.clear(),this.setState(i=>({...i,publicClient:this.getPublicClient({chainId:e})}))}getWebSocketPublicClient({chainId:t}={}){let e=this.webSocketPublicClients.get(-1);if(e&&(e==null?void 0:e.chain.id)===t||(e=this.webSocketPublicClients.get(t??-1),e))return e;const{webSocketPublicClient:n}=this.args;return e=typeof n=="function"?n({chainId:t}):n,e&&this.webSocketPublicClients.set(t??-1,e),e}setWebSocketPublicClient(t){var n,r;const e=(r=(n=this.data)==null?void 0:n.chain)==null?void 0:r.id;this.args={...this.args,webSocketPublicClient:t},this.webSocketPublicClients.clear(),this.setState(i=>({...i,webSocketPublicClient:this.getWebSocketPublicClient({chainId:e})}))}setLastUsedConnector(t=null){var e;(e=this.storage)==null||e.setItem("wallet",t)}};vs=new WeakMap;dl=new WeakMap;v1=new WeakSet;J5=function(){const t=a=>{this.setState(l=>({...l,data:{...l.data,...a}}))},e=()=>{this.clearState()},n=a=>{this.setState(l=>({...l,error:a}))};this.store.subscribe(({connector:a})=>a,(a,l)=>{var c,u,d,p,w,y;(c=l==null?void 0:l.off)==null||c.call(l,"change",t),(u=l==null?void 0:l.off)==null||u.call(l,"disconnect",e),(d=l==null?void 0:l.off)==null||d.call(l,"error",n),a&&((p=a.on)==null||p.call(a,"change",t),(w=a.on)==null||w.call(a,"disconnect",e),(y=a.on)==null||y.call(a,"error",n))});const{publicClient:r,webSocketPublicClient:i}=this.args;(typeof r=="function"||typeof i=="function")&&this.store.subscribe(({data:a})=>{var l;return(l=a==null?void 0:a.chain)==null?void 0:l.id},a=>{this.setState(l=>({...l,publicClient:this.getPublicClient({chainId:a}),webSocketPublicClient:this.getWebSocketPublicClient({chainId:a})}))})};var b1;function iS(t){const e=new rS(t);return b1=e,e}function jr(){if(!b1)throw new Error("No wagmi config found. Ensure you have set up a config: https://wagmi.sh/react/config");return b1}async function rv({chainId:t,connector:e}){const n=jr(),r=n.connector;if(r&&e.id===r.id)throw new Q9;try{n.setState(o=>({...o,status:"connecting"}));const i=await e.connect({chainId:t});return n.setLastUsedConnector(e.id),n.setState(o=>({...o,connector:e,chains:e==null?void 0:e.chains,data:i,status:"connected"})),n.storage.setItem("connected",!0),{...i,connector:e}}catch(i){throw n.setState(o=>({...o,status:o.connector?"connected":"disconnected"})),i}}async function oS(){const t=jr();t.connector&&await t.connector.disconnect(),t.clearState(),t.storage.removeItem("connected")}var sS=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}],aS=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}];function ja({chainId:t}={}){const e=jr();return t&&e.getPublicClient({chainId:t})||e.publicClient}async function lS({chainId:t}={}){var r,i;return await((i=(r=jr().connector)==null?void 0:r.getWalletClient)==null?void 0:i.call(r,{chainId:t}))||null}async function cS({chainId:t,contracts:e,blockNumber:n,blockTag:r,...i}){const o=ja({chainId:t});if(!o.chains)throw new X9;if(t&&o.chain.id!==t)throw new Y9({chainId:t});return o.multicall({allowFailure:i.allowFailure??!0,blockNumber:n,blockTag:r,contracts:e})}async function uS({address:t,account:e,chainId:n,abi:r,args:i,functionName:o,blockNumber:s,blockTag:a}){return ja({chainId:n}).readContract({abi:r,address:t,account:e,functionName:o,args:i,blockNumber:s,blockTag:a})}async function dS({contracts:t,blockNumber:e,blockTag:n,...r}){const{allowFailure:i=!0}=r;try{const o=ja(),s=t.reduce((u,d,p)=>{const w=d.chainId??o.chain.id;return{...u,[w]:[...u[w]||[],{contract:d,index:p}]}},{}),a=()=>Object.entries(s).map(([u,d])=>cS({allowFailure:i,chainId:parseInt(u),contracts:d.map(({contract:p})=>p),blockNumber:e,blockTag:n})),l=(await Promise.all(a())).flat(),c=Object.values(s).flatMap(u=>u.map(({index:d})=>d));return l.reduce((u,d,p)=>(u&&(u[c[p]]=d),u),[])}catch(o){if(o instanceof hg)throw o;const s=()=>t.map(a=>uS({...a,blockNumber:e,blockTag:n}));return i?(await Promise.allSettled(s())).map(a=>a.status==="fulfilled"?{result:a.value,status:"success"}:{error:a.reason,result:void 0,status:"failure"}):await Promise.all(s())}}async function fS({address:t,chainId:e,formatUnits:n,token:r}){const i=jr(),o=ja({chainId:e});if(r){const c=async({abi:u})=>{const d={abi:u,address:r,chainId:e},[p,w,y]=await dS({allowFailure:!1,contracts:[{...d,functionName:"balanceOf",args:[t]},{...d,functionName:"decimals"},{...d,functionName:"symbol"}]});return{decimals:w,formatted:Wd(p??"0",Jy(n??w)),symbol:y,value:p}};try{return await c({abi:sS})}catch(u){if(u instanceof hg){const{symbol:d,...p}=await c({abi:aS});return{symbol:Qb(cr(d,{dir:"right"})),...p}}throw u}}const s=[...i.publicClient.chains||[],...i.chains??[]],a=await o.getBalance({address:t}),l=s.find(c=>c.id===o.chain.id);return{decimals:(l==null?void 0:l.nativeCurrency.decimals)??18,formatted:Wd(a??"0",Jy(n??18)),symbol:(l==null?void 0:l.nativeCurrency.symbol)??"ETH",value:a}}function x1(){const{data:t,connector:e,status:n}=jr();switch(n){case"connected":return{address:t==null?void 0:t.account,connector:e,isConnected:!0,isConnecting:!1,isDisconnected:!1,isReconnecting:!1,status:n};case"reconnecting":return{address:t==null?void 0:t.account,connector:e,isConnected:!!(t!=null&&t.account),isConnecting:!1,isDisconnected:!1,isReconnecting:!0,status:n};case"connecting":return{address:t==null?void 0:t.account,connector:e,isConnected:!1,isConnecting:!0,isDisconnected:!1,isReconnecting:!1,status:n};case"disconnected":return{address:void 0,connector:void 0,isConnected:!1,isConnecting:!1,isDisconnected:!0,isReconnecting:!1,status:n}}}function E1(){var i,o,s,a;const t=jr(),e=(o=(i=t.data)==null?void 0:i.chain)==null?void 0:o.id,n=t.chains??[],r=[...((s=t.publicClient)==null?void 0:s.chains)||[],...n].find(l=>l.id===e)??{id:e,name:`Chain ${e}`,network:`${e}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}};return{chain:e?{...r,...(a=t.data)==null?void 0:a.chain,id:e}:void 0,chains:n}}async function hS(t){const e=await lS();if(!e)throw new Si;return await e.signMessage({message:t.message})}async function pS({chainId:t}){const{connector:e}=jr();if(!e)throw new Si;if(!e.switchChain)throw new J9({connector:e});return e.switchChain(t)}function mS(t,{selector:e=n=>n}={}){const n=jr(),r=()=>t(x1());return n.subscribe(({data:o,connector:s,status:a})=>e({address:o==null?void 0:o.account,connector:s,status:a}),r,{equalityFn:Y5})}function gS(t,{selector:e=n=>n}={}){const n=jr(),r=()=>t(E1());return n.subscribe(({data:o,chains:s})=>{var a;return e({chainId:(a=o==null?void 0:o.chain)==null?void 0:a.id,chains:s})},r,{equalityFn:Y5})}async function wS({name:t,chainId:e}){const{normalize:n}=await sa(()=>import("./index-07993508.js"),[]);return await ja({chainId:e}).getEnsAvatar({name:n(t)})}async function yS({address:t,chainId:e}){return ja({chainId:e}).getEnsName({address:zn(t)})}const vS=Symbol(),iv=Object.getPrototypeOf,_1=new WeakMap,bS=t=>t&&(_1.has(t)?_1.get(t):iv(t)===Object.prototype||iv(t)===Array.prototype),xS=t=>bS(t)&&t[vS]||null,ov=(t,e=!0)=>{_1.set(t,e)},k0=t=>typeof t=="object"&&t!==null,Ti=new WeakMap,fl=new WeakSet,ES=(t=Object.is,e=(c,u)=>new Proxy(c,u),n=c=>k0(c)&&!fl.has(c)&&(Array.isArray(c)||!(Symbol.iterator in c))&&!(c instanceof WeakMap)&&!(c instanceof WeakSet)&&!(c instanceof Error)&&!(c instanceof Number)&&!(c instanceof Date)&&!(c instanceof String)&&!(c instanceof RegExp)&&!(c instanceof ArrayBuffer),r=c=>{switch(c.status){case"fulfilled":return c.value;case"rejected":throw c.reason;default:throw c}},i=new WeakMap,o=(c,u,d=r)=>{const p=i.get(c);if((p==null?void 0:p[0])===u)return p[1];const w=Array.isArray(c)?[]:Object.create(Object.getPrototypeOf(c));return ov(w,!0),i.set(c,[u,w]),Reflect.ownKeys(c).forEach(y=>{if(Object.getOwnPropertyDescriptor(w,y))return;const E=Reflect.get(c,y),C={value:E,enumerable:!0,configurable:!0};if(fl.has(E))ov(E,!1);else if(E instanceof Promise)delete C.value,C.get=()=>d(E);else if(Ti.has(E)){const[b,m]=Ti.get(E);C.value=o(b,m(),d)}Object.defineProperty(w,y,C)}),Object.preventExtensions(w)},s=new WeakMap,a=[1,1],l=c=>{if(!k0(c))throw new Error("object required");const u=s.get(c);if(u)return u;let d=a[0];const p=new Set,w=(R,D=++a[0])=>{d!==D&&(d=D,p.forEach(M=>M(R,D)))};let y=a[1];const E=(R=++a[1])=>(y!==R&&!p.size&&(y=R,b.forEach(([D])=>{const M=D[1](R);M>d&&(d=M)})),d),C=R=>(D,M)=>{const ee=[...D];ee[1]=[R,...ee[1]],w(ee,M)},b=new Map,m=(R,D)=>{if(p.size){const M=D[3](C(R));b.set(R,[D,M])}else b.set(R,[D])},v=R=>{var D;const M=b.get(R);M&&(b.delete(R),(D=M[1])==null||D.call(M))},x=R=>(p.add(R),p.size===1&&b.forEach(([M,ee],ne)=>{const H=M[3](C(ne));b.set(ne,[M,H])}),()=>{p.delete(R),p.size===0&&b.forEach(([M,ee],ne)=>{ee&&(ee(),b.set(ne,[M]))})}),_=Array.isArray(c)?[]:Object.create(Object.getPrototypeOf(c)),f=e(_,{deleteProperty(R,D){const M=Reflect.get(R,D);v(D);const ee=Reflect.deleteProperty(R,D);return ee&&w(["delete",[D],M]),ee},set(R,D,M,ee){const ne=Reflect.has(R,D),H=Reflect.get(R,D,ee);if(ne&&(t(H,M)||s.has(M)&&t(H,s.get(M))))return!0;v(D),k0(M)&&(M=xS(M)||M);let F=M;if(M instanceof Promise)M.then(B=>{M.status="fulfilled",M.value=B,w(["resolve",[D],B])}).catch(B=>{M.status="rejected",M.reason=B,w(["reject",[D],B])});else{!Ti.has(M)&&n(M)&&(F=l(M));const B=!fl.has(F)&&Ti.get(F);B&&m(D,B)}return Reflect.set(R,D,F,ee),w(["set",[D],M,H]),!0}});s.set(c,f);const A=[_,E,o,x];return Ti.set(f,A),Reflect.ownKeys(c).forEach(R=>{const D=Object.getOwnPropertyDescriptor(c,R);"value"in D&&(f[R]=c[R],delete D.value,delete D.writable),Object.defineProperty(_,R,D)}),f})=>[l,Ti,fl,t,e,n,r,i,o,s,a],[_S]=ES();function an(t={}){return _S(t)}function mi(t,e,n){const r=Ti.get(t);let i;const o=[],s=r[3];let a=!1;const c=s(u=>{if(o.push(u),n){e(o.splice(0));return}i||(i=Promise.resolve().then(()=>{i=void 0,a&&e(o.splice(0))}))});return a=!0,()=>{a=!1,c()}}function e4(t,e){const n=Ti.get(t),[r,i,o]=n;return o(r,i(),e)}function fc(t){return fl.add(t),t}function vr(t,e,n,r){let i=t[e];return mi(t,()=>{const o=t[e];Object.is(i,o)||n(i=o)},r)}var t4={exports:{}},n4={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aa=At;function CS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var SS=typeof Object.is=="function"?Object.is:CS,TS=aa.useState,AS=aa.useEffect,PS=aa.useLayoutEffect,IS=aa.useDebugValue;function $S(t,e){var n=e(),r=TS({inst:{value:n,getSnapshot:e}}),i=r[0].inst,o=r[1];return PS(function(){i.value=n,i.getSnapshot=e,R0(i)&&o({inst:i})},[t,n,e]),AS(function(){return R0(i)&&o({inst:i}),t(function(){R0(i)&&o({inst:i})})},[t]),IS(n),n}function R0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!SS(t,n)}catch{return!0}}function OS(t,e){return e()}var DS=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?OS:$S;n4.useSyncExternalStore=aa.useSyncExternalStore!==void 0?aa.useSyncExternalStore:DS;t4.exports=n4;var kS=t4.exports;const N0="https://secure.web3modal.com",Xr={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,SECURE_SITE:N0,SECURE_SITE_DASHBOARD:`${N0}/dashboard`,SECURE_SITE_FAVICON:`${N0}/images/favicon.png`,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],CONNECTOR_RDNS_MAP:{coinbaseWallet:"com.coinbase.wallet"}},de={isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){const t=window.navigator.userAgent.toLowerCase();return de.isMobile()&&t.includes("android")},isIos(){const t=window.navigator.userAgent.toLowerCase();return de.isMobile()&&(t.includes("iphone")||t.includes("ipad"))},isClient(){return typeof window<"u"},isPairingExpired(t){return t?t-Date.now()<=Xr.TEN_SEC_MS:!0},isAllowedRetry(t){return Date.now()-t>=Xr.ONE_SEC_MS},copyToClopboard(t){navigator.clipboard.writeText(t)},getPairingExpiry(){return Date.now()+Xr.FOUR_MINUTES_MS},getPlainAddress(t){return t.split(":")[2]},async wait(t){return new Promise(e=>{setTimeout(e,t)})},debounce(t,e=500){let n;return(...r)=>{function i(){t(...r)}n&&clearTimeout(n),n=setTimeout(i,e)}},isHttpUrl(t){return t.startsWith("http://")||t.startsWith("https://")},formatNativeUrl(t,e){if(de.isHttpUrl(t))return this.formatUniversalUrl(t,e);let n=t;n.includes("://")||(n=t.replaceAll("/","").replaceAll(":",""),n=`${n}://`),n.endsWith("/")||(n=`${n}/`);const r=encodeURIComponent(e);return{redirect:`${n}wc?uri=${r}`,href:n}},formatUniversalUrl(t,e){if(!de.isHttpUrl(t))return this.formatNativeUrl(t,e);let n=t;n.endsWith("/")||(n=`${n}/`);const r=encodeURIComponent(e);return{redirect:`${n}wc?uri=${r}`,href:n}},openHref(t,e){window.open(t,e,"noreferrer noopener")},async preloadImage(t){const e=new Promise((n,r)=>{const i=new Image;i.onload=n,i.onerror=r,i.crossOrigin="anonymous",i.src=t});return Promise.race([e,de.wait(2e3)])},formatBalance(t,e){var r;let n;if(t==="0")n="0.000";else if(typeof t=="string"){const i=Number(t);i&&(n=(r=i.toString().match(/^-?\d+(?:\.\d{0,3})?/u))==null?void 0:r[0])}return n?`${n} ${e}`:`0.000 ${e}`},isRestrictedRegion(){try{const{timeZone:t}=new Intl.DateTimeFormat().resolvedOptions(),e=t.toUpperCase();return Xr.RESTRICTED_TIMEZONES.includes(e)}catch{return!1}},getApiUrl(){return de.isRestrictedRegion()?"https://api.web3modal.org":"https://api.web3modal.com"},getBlockchainApiUrl(){return de.isRestrictedRegion()?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"},getAnalyticsUrl(){return de.isRestrictedRegion()?"https://pulse.walletconnect.org":"https://pulse.walletconnect.com"},getUUID(){return crypto!=null&&crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,t=>{const e=Math.random()*16|0;return(t==="x"?e:e&3|8).toString(16)})},parseError(t){var e,n;return typeof t=="string"?t:typeof((n=(e=t==null?void 0:t.issues)==null?void 0:e[0])==null?void 0:n.message)=="string"?t.issues[0].message:t instanceof Error?t.message:"Unknown error"}},bt=an({isConnected:!1}),je={state:bt,subscribe(t){return mi(bt,()=>t(bt))},subscribeKey(t,e){return vr(bt,t,e)},setIsConnected(t){bt.isConnected=t},setCaipAddress(t){bt.caipAddress=t,bt.address=t?de.getPlainAddress(t):void 0},setBalance(t,e){bt.balance=t,bt.balanceSymbol=e},setProfileName(t){bt.profileName=t},setProfileImage(t){bt.profileImage=t},setAddressExplorerUrl(t){bt.addressExplorerUrl=t},resetAccount(){bt.isConnected=!1,bt.caipAddress=void 0,bt.address=void 0,bt.balance=void 0,bt.balanceSymbol=void 0,bt.profileName=void 0,bt.profileImage=void 0,bt.addressExplorerUrl=void 0}};class kg{constructor({baseUrl:e}){this.baseUrl=e}async get({headers:e,...n}){const r=this.createUrl(n);return(await fetch(r,{method:"GET",headers:e})).json()}async getBlob({headers:e,...n}){const r=this.createUrl(n);return(await fetch(r,{method:"GET",headers:e})).blob()}async post({body:e,headers:n,...r}){const i=this.createUrl(r);return(await fetch(i,{method:"POST",headers:n,body:e?JSON.stringify(e):void 0})).json()}async put({body:e,headers:n,...r}){const i=this.createUrl(r);return(await fetch(i,{method:"PUT",headers:n,body:e?JSON.stringify(e):void 0})).json()}async delete({body:e,headers:n,...r}){const i=this.createUrl(r);return(await fetch(i,{method:"DELETE",headers:n,body:e?JSON.stringify(e):void 0})).json()}createUrl({path:e,params:n}){const r=new URL(e,this.baseUrl);return n&&Object.entries(n).forEach(([i,o])=>{o&&r.searchParams.append(i,o)}),r}}const M0="WALLETCONNECT_DEEPLINK_CHOICE",sv="@w3m/recent",av="@w3m/connected_wallet_image_url",lv="@w3m/connected_connector",Xt={setWalletConnectDeepLink({href:t,name:e}){try{localStorage.setItem(M0,JSON.stringify({href:t,name:e}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{const t=localStorage.getItem(M0);if(t)return JSON.parse(t)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(M0)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(t){try{const e=Xt.getRecentWallets();e.find(r=>r.id===t.id)||(e.unshift(t),e.length>2&&e.pop(),localStorage.setItem(sv,JSON.stringify(e)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{const t=localStorage.getItem(sv);return t?JSON.parse(t):[]}catch{console.info("Unable to get Web3Modal recent")}return[]},setConnectedWalletImageUrl(t){try{localStorage.setItem(av,t)}catch{console.info("Unable to set Connected Wallet Image Url")}},getConnectedWalletImageUrl(){try{return localStorage.getItem(av)}catch{console.info("Unable to set Connected Wallet Image Url")}},setConnectedConnector(t){try{localStorage.setItem(lv,t)}catch{console.info("Unable to set Connected Connector")}},getConnectedConnector(){try{return localStorage.getItem(lv)}catch{console.info("Unable to get Connected Connector")}}},Ei=an({walletImages:{},networkImages:{},connectorImages:{},tokenImages:{}}),qs={state:Ei,subscribeNetworkImages(t){return mi(Ei.networkImages,()=>t(Ei.networkImages))},subscribeKey(t,e){return vr(Ei,t,e)},setWalletImage(t,e){Ei.walletImages[t]=e},setNetworkImage(t,e){Ei.networkImages[t]=e},setConnectorImage(t,e){Ei.connectorImages[t]=e},setTokenImage(t,e){Ei.tokenImages[t]=e}},En=an({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined"}),We={state:En,subscribeKey(t,e){return vr(En,t,e)},setProjectId(t){En.projectId=t},setIncludeWalletIds(t){En.includeWalletIds=t},setExcludeWalletIds(t){En.excludeWalletIds=t},setFeaturedWalletIds(t){En.featuredWalletIds=t},setTokens(t){En.tokens=t},setTermsConditionsUrl(t){En.termsConditionsUrl=t},setPrivacyPolicyUrl(t){En.privacyPolicyUrl=t},setCustomWallets(t){En.customWallets=t},setEnableAnalytics(t){En.enableAnalytics=t},setSdkVersion(t){En.sdkVersion=t},setMetadata(t){En.metadata=t}},wo=an({connectors:[]}),Ge={state:wo,subscribeKey(t,e){return vr(wo,t,e)},setConnectors(t){wo.connectors=t.map(e=>fc(e))},addConnector(t){var e,n;if(wo.connectors.push(fc(t)),t.id==="w3mEmail"){const r=t,i=e4(We.state);(n=(e=r==null?void 0:r.provider)==null?void 0:e.syncDappData)==null||n.call(e,{metadata:i.metadata,sdkVersion:i.sdkVersion,projectId:i.projectId})}},getEmailConnector(){return wo.connectors.find(t=>t.type==="EMAIL")},getAnnouncedConnectorRdns(){return wo.connectors.filter(t=>t.type==="ANNOUNCED").map(t=>{var e;return(e=t.info)==null?void 0:e.rdns})},getConnectors(){return wo.connectors}},rl=an({open:!1,selectedNetworkId:void 0}),la={state:rl,subscribe(t){return mi(rl,()=>t(rl))},set(t){Object.assign(rl,{...rl,...t})}},Wt=an({supportsAllNetworks:!0,isDefaultCaipNetwork:!1}),ht={state:Wt,subscribeKey(t,e){return vr(Wt,t,e)},_getClient(){if(!Wt._client)throw new Error("NetworkController client not set");return Wt._client},setClient(t){Wt._client=fc(t)},setCaipNetwork(t){Wt.caipNetwork=t,la.set({selectedNetworkId:t==null?void 0:t.id})},setDefaultCaipNetwork(t){Wt.caipNetwork=t,la.set({selectedNetworkId:t==null?void 0:t.id}),Wt.isDefaultCaipNetwork=!0},setRequestedCaipNetworks(t){Wt.requestedCaipNetworks=t},async getApprovedCaipNetworksData(){const t=await this._getClient().getApprovedCaipNetworksData();Wt.supportsAllNetworks=t.supportsAllNetworks,Wt.approvedCaipNetworkIds=t.approvedCaipNetworkIds},async switchActiveNetwork(t){await this._getClient().switchCaipNetwork(t),Wt.caipNetwork=t},resetNetwork(){Wt.isDefaultCaipNetwork||(Wt.caipNetwork=void 0),Wt.approvedCaipNetworkIds=void 0,Wt.supportsAllNetworks=!0}},RS=de.getApiUrl(),Cr=new kg({baseUrl:RS}),NS="40",cv="4",Gt=an({page:1,count:0,featured:[],recommended:[],wallets:[],search:[]}),Re={state:Gt,subscribeKey(t,e){return vr(Gt,t,e)},_getApiHeaders(){const{projectId:t,sdkType:e,sdkVersion:n}=We.state;return{"x-project-id":t,"x-sdk-type":e,"x-sdk-version":n}},async _fetchWalletImage(t){const e=`${Cr.baseUrl}/getWalletImage/${t}`,n=await Cr.getBlob({path:e,headers:Re._getApiHeaders()});qs.setWalletImage(t,URL.createObjectURL(n))},async _fetchNetworkImage(t){const e=`${Cr.baseUrl}/public/getAssetImage/${t}`,n=await Cr.getBlob({path:e,headers:Re._getApiHeaders()});qs.setNetworkImage(t,URL.createObjectURL(n))},async _fetchConnectorImage(t){const e=`${Cr.baseUrl}/public/getAssetImage/${t}`,n=await Cr.getBlob({path:e,headers:Re._getApiHeaders()});qs.setConnectorImage(t,URL.createObjectURL(n))},async fetchNetworkImages(){const{requestedCaipNetworks:t}=ht.state,e=t==null?void 0:t.map(({imageId:n})=>n).filter(Boolean);e&&await Promise.allSettled(e.map(n=>Re._fetchNetworkImage(n)))},async fetchConnectorImages(){const{connectors:t}=Ge.state,e=t.map(({imageId:n})=>n).filter(Boolean);await Promise.allSettled(e.map(n=>Re._fetchConnectorImage(n)))},async fetchFeaturedWallets(){const{featuredWalletIds:t}=We.state;if(t!=null&&t.length){const{data:e}=await Cr.get({path:"/getWallets",headers:Re._getApiHeaders(),params:{page:"1",entries:t!=null&&t.length?String(t.length):cv,include:t==null?void 0:t.join(",")}});e.sort((r,i)=>t.indexOf(r.id)-t.indexOf(i.id));const n=e.map(r=>r.image_id).filter(Boolean);await Promise.allSettled(n.map(r=>Re._fetchWalletImage(r))),Gt.featured=e}},async fetchRecommendedWallets(){const{includeWalletIds:t,excludeWalletIds:e,featuredWalletIds:n}=We.state,r=[...e??[],...n??[]].filter(Boolean),{data:i,count:o}=await Cr.get({path:"/getWallets",headers:Re._getApiHeaders(),params:{page:"1",entries:cv,include:t==null?void 0:t.join(","),exclude:r==null?void 0:r.join(",")}}),s=Xt.getRecentWallets(),a=i.map(c=>c.image_id).filter(Boolean),l=s.map(c=>c.image_id).filter(Boolean);await Promise.allSettled([...a,...l].map(c=>Re._fetchWalletImage(c))),Gt.recommended=i,Gt.count=o??0},async fetchWallets({page:t}){const{includeWalletIds:e,excludeWalletIds:n,featuredWalletIds:r}=We.state,i=[...Gt.recommended.map(({id:l})=>l),...n??[],...r??[]].filter(Boolean),{data:o,count:s}=await Cr.get({path:"/getWallets",headers:Re._getApiHeaders(),params:{page:String(t),entries:NS,include:e==null?void 0:e.join(","),exclude:i.join(",")}}),a=o.map(l=>l.image_id).filter(Boolean);await Promise.allSettled([...a.map(l=>Re._fetchWalletImage(l)),de.wait(300)]),Gt.wallets=[...Gt.wallets,...o],Gt.count=s>Gt.count?s:Gt.count,Gt.page=t},async searchWallet({search:t}){const{includeWalletIds:e,excludeWalletIds:n}=We.state;Gt.search=[];const{data:r}=await Cr.get({path:"/getWallets",headers:Re._getApiHeaders(),params:{page:"1",entries:"100",search:t,include:e==null?void 0:e.join(","),exclude:n==null?void 0:n.join(",")}}),i=r.map(o=>o.image_id).filter(Boolean);await Promise.allSettled([...i.map(o=>Re._fetchWalletImage(o)),de.wait(300)]),Gt.search=r},prefetch(){Gt.prefetchPromise=Promise.race([Promise.allSettled([Re.fetchFeaturedWallets(),Re.fetchRecommendedWallets(),Re.fetchNetworkImages(),Re.fetchConnectorImages()]),de.wait(3e3)])}},MS=de.getAnalyticsUrl(),US=new kg({baseUrl:MS}),LS=["MODAL_CREATED"],ms=an({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),xe={state:ms,subscribe(t){return mi(ms,()=>t(ms))},_getApiHeaders(){const{projectId:t,sdkType:e,sdkVersion:n}=We.state;return{"x-project-id":t,"x-sdk-type":e,"x-sdk-version":n}},async _sendAnalyticsEvent(t){try{if(LS.includes(t.data.event)||typeof window>"u")return;await US.post({path:"/e",headers:xe._getApiHeaders(),body:{eventId:de.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:t.timestamp,props:t.data}})}catch{}},sendEvent(t){ms.timestamp=Date.now(),ms.data=t,We.state.enableAnalytics&&xe._sendAnalyticsEvent(ms)}},rt=an({view:"Connect",history:["Connect"]}),ce={state:rt,subscribeKey(t,e){return vr(rt,t,e)},push(t,e){t!==rt.view&&(rt.view=t,rt.history.push(t),rt.data=e)},reset(t){rt.view=t,rt.history=[t]},replace(t,e){rt.history.length>1&&rt.history.at(-1)!==t&&(rt.view=t,rt.history[rt.history.length-1]=t,rt.data=e)},goBack(){if(rt.history.length>1){rt.history.pop();const[t]=rt.history.slice(-1);t&&(rt.view=t)}},goBackToIndex(t){if(rt.history.length>1){rt.history=rt.history.slice(0,t+1);const[e]=rt.history.slice(-1);e&&(rt.view=e)}}},yo=an({loading:!1,open:!1}),Ke={state:yo,subscribe(t){return mi(yo,()=>t(yo))},subscribeKey(t,e){return vr(yo,t,e)},async open(t){await Re.state.prefetchPromise,t!=null&&t.view?ce.reset(t.view):je.state.isConnected?ce.reset("Account"):ce.reset("Connect"),yo.open=!0,la.set({open:!0}),xe.sendEvent({type:"track",event:"MODAL_OPEN"})},close(){yo.open=!1,la.set({open:!1}),xe.sendEvent({type:"track",event:"MODAL_CLOSE"})},setLoading(t){yo.loading=t}},BS=de.getBlockchainApiUrl(),uv=new kg({baseUrl:BS}),r4={fetchIdentity({caipChainId:t,address:e}){return uv.get({path:`/v1/identity/${e}`,params:{chainId:t,projectId:We.state.projectId}})},fetchTransactions({account:t,projectId:e,cursor:n}){const r=n?{cursor:n}:{};return uv.get({path:`/v1/account/${t}/history?projectId=${e}`,params:r})}},Hr=an({message:"",variant:"success",open:!1}),pt={state:Hr,subscribeKey(t,e){return vr(Hr,t,e)},showSuccess(t){Hr.message=t,Hr.variant="success",Hr.open=!0},showError(t){const e=de.parseError(t);Hr.message=e,Hr.variant="error",Hr.open=!0},hide(){Hr.open=!1}},xt=an({transactions:[],transactionsByYear:{},loading:!1,empty:!1,next:void 0}),Jn={state:xt,subscribe(t){return mi(xt,()=>t(xt))},async fetchTransactions(t){const{projectId:e}=We.state;if(!e||!t)throw new Error("Transactions can't be fetched without a projectId and an accountAddress");xt.loading=!0;try{const n=await r4.fetchTransactions({account:t,projectId:e,cursor:xt.next}),r=this.filterSpamTransactions(n.data),i=[...xt.transactions,...r];xt.loading=!1,xt.transactions=i,xt.transactionsByYear=this.groupTransactionsByYear(xt.transactionsByYear,r),xt.empty=i.length===0,xt.next=n.next?n.next:void 0}catch{xe.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:t,projectId:e,cursor:xt.next}}),pt.showError("Failed to fetch transactions"),xt.loading=!1,xt.empty=!0}},groupTransactionsByYear(t={},e=[]){const n=t;return e.forEach(r=>{var o;const i=new Date(r.metadata.minedAt).getFullYear();n[i]||(n[i]=[]),(o=n[i])==null||o.push(r)}),n},filterSpamTransactions(t){return t.filter(e=>!e.transfers.every(r=>{var i;return((i=r.nft_info)==null?void 0:i.flags.is_spam)===!0}))},resetTransactions(){xt.transactions=[],xt.transactionsByYear={},xt.loading=!1,xt.empty=!1,xt.next=void 0}},Ot=an({wcError:!1,buffering:!1}),Ue={state:Ot,subscribeKey(t,e){return vr(Ot,t,e)},_getClient(){if(!Ot._client)throw new Error("ConnectionController client not set");return Ot._client},setClient(t){Ot._client=fc(t)},connectWalletConnect(){Ot.wcPromise=this._getClient().connectWalletConnect(t=>{Ot.wcUri=t,Ot.wcPairingExpiry=de.getPairingExpiry()})},async connectExternal(t){var e,n;await((n=(e=this._getClient()).connectExternal)==null?void 0:n.call(e,t)),Xt.setConnectedConnector(t.type)},async signMessage(t){return this._getClient().signMessage(t)},checkInstalled(t){var e,n;return(n=(e=this._getClient()).checkInstalled)==null?void 0:n.call(e,t)},resetWcConnection(){Ot.wcUri=void 0,Ot.wcPairingExpiry=void 0,Ot.wcPromise=void 0,Ot.wcLinking=void 0,Ot.recentWallet=void 0,Jn.resetTransactions(),Xt.deleteWalletConnectDeepLink()},setWcLinking(t){Ot.wcLinking=t},setWcError(t){Ot.wcError=t,Ot.buffering=!1},setRecentWallet(t){Ot.recentWallet=t},setBuffering(t){Ot.buffering=t},async disconnect(){await this._getClient().disconnect(),this.resetWcConnection()}},_n=an({status:"uninitialized",isSiweEnabled:!1}),wt={state:_n,subscribeKey(t,e){return vr(_n,t,e)},subscribe(t){return mi(_n,()=>t(_n))},_getClient(){if(!_n._client)throw new Error("SIWEController client not set");return _n._client},async getNonce(){const e=await this._getClient().getNonce();return this.setNonce(e),e},async getSession(){const e=await this._getClient().getSession();return e&&(this.setSession(e),this.setStatus("success")),e},createMessage(t){const n=this._getClient().createMessage(t);return this.setMessage(n),n},async verifyMessage(t){return await this._getClient().verifyMessage(t)},async signIn(){return await this._getClient().signIn()},async signOut(){var e;const t=this._getClient();await t.signOut(),this.setStatus("ready"),(e=t.onSignOut)==null||e.call(t)},onSignIn(t){var n;const e=this._getClient();(n=e.onSignIn)==null||n.call(e,t)},onSignOut(){var e;const t=this._getClient();(e=t.onSignOut)==null||e.call(t)},setSIWEClient(t){_n._client=fc(t),_n.status="ready",_n.isSiweEnabled=t.options.enabled},setNonce(t){_n.nonce=t},setStatus(t){_n.status=t},setMessage(t){_n.message=t},setSession(t){_n.session=t}},vo=an({themeMode:"dark",themeVariables:{}}),cn={state:vo,subscribe(t){return mi(vo,()=>t(vo))},setThemeMode(t){vo.themeMode=t},setThemeVariables(t){vo.themeVariables={...vo.themeVariables,...t}},getSnapshot(){return e4(vo)}},ft={getWalletImage(t){if(t!=null&&t.image_url)return t==null?void 0:t.image_url;if(t!=null&&t.image_id)return qs.state.walletImages[t.image_id]},getNetworkImage(t){if(t!=null&&t.imageUrl)return t==null?void 0:t.imageUrl;if(t!=null&&t.imageId)return qs.state.networkImages[t.imageId]},getConnectorImage(t){if(t!=null&&t.imageUrl)return t.imageUrl;if(t!=null&&t.imageId)return qs.state.connectorImages[t.imageId]}},i4={goBackOrCloseModal(){ce.state.history.length>1?ce.goBack():Ke.close()},navigateAfterNetworkSwitch(){const{history:t}=ce.state,e=t.findIndex(n=>n==="Networks");e>=1?ce.goBackToIndex(e-1):Ke.close()}};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hd=globalThis,Rg=hd.ShadowRoot&&(hd.ShadyCSS===void 0||hd.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ng=Symbol(),dv=new WeakMap;let o4=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==Ng)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(Rg&&e===void 0){const r=n!==void 0&&n.length===1;r&&(e=dv.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&dv.set(n,e))}return e}toString(){return this.cssText}};const Tr=t=>new o4(typeof t=="string"?t:t+"",void 0,Ng),X=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((r,i,o)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new o4(n,t,Ng)},jS=(t,e)=>{if(Rg)t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of e){const r=document.createElement("style"),i=hd.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,t.appendChild(r)}},fv=Rg?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const r of e.cssRules)n+=r.cssText;return Tr(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:FS,defineProperty:WS,getOwnPropertyDescriptor:zS,getOwnPropertyNames:HS,getOwnPropertySymbols:VS,getPrototypeOf:qS}=Object,Vi=globalThis,hv=Vi.trustedTypes,ZS=hv?hv.emptyScript:"",U0=Vi.reactiveElementPolyfillSupport,Sl=(t,e)=>t,Zd={toAttribute(t,e){switch(e){case Boolean:t=t?ZS:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},Mg=(t,e)=>!FS(t,e),pv={attribute:!0,type:String,converter:Zd,reflect:!1,hasChanged:Mg};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Vi.litPropertyMetadata??(Vi.litPropertyMetadata=new WeakMap);let bs=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,n=pv){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(e,n),!n.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(e,r,n);i!==void 0&&WS(this.prototype,e,i)}}static getPropertyDescriptor(e,n,r){const{get:i,set:o}=zS(this.prototype,e)??{get(){return this[n]},set(s){this[n]=s}};return{get(){return i==null?void 0:i.call(this)},set(s){const a=i==null?void 0:i.call(this);o.call(this,s),this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??pv}static _$Ei(){if(this.hasOwnProperty(Sl("elementProperties")))return;const e=qS(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Sl("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Sl("properties"))){const n=this.properties,r=[...HS(n),...VS(n)];for(const i of r)this.createProperty(i,n[i])}const e=this[Symbol.metadata];if(e!==null){const n=litPropertyMetadata.get(e);if(n!==void 0)for(const[r,i]of n)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const i=this._$Eu(n,r);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const i of r)n.unshift(fv(i))}else e!==void 0&&n.push(fv(e));return n}static _$Eu(e,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(n=>n(this))}addController(e){var n;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)==null||n.call(e))}removeController(e){var n;(n=this._$EO)==null||n.delete(e)}_$E_(){const e=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return jS(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(n=>{var r;return(r=n.hostConnected)==null?void 0:r.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(n=>{var r;return(r=n.hostDisconnected)==null?void 0:r.call(n)})}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$EC(e,n){var o;const r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(i!==void 0&&r.reflect===!0){const s=(((o=r.converter)==null?void 0:o.toAttribute)!==void 0?r.converter:Zd).toAttribute(n,r.type);this._$Em=e,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(e,n){var o;const r=this.constructor,i=r._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const s=r.getPropertyOptions(i),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((o=s.converter)==null?void 0:o.fromAttribute)!==void 0?s.converter:Zd;this._$Em=i,this[i]=a.fromAttribute(n,s.type),this._$Em=null}}requestUpdate(e,n,r){if(e!==void 0){if(r??(r=this.constructor.getPropertyOptions(e)),!(r.hasChanged??Mg)(this[e],n))return;this.P(e,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,n,r){this._$AL.has(e)||this._$AL.set(e,n),r.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,s]of i)s.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],s)}let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),(r=this._$EO)==null||r.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(n)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(n)}willUpdate(e){}_$AE(e){var n;(n=this._$EO)==null||n.forEach(r=>{var i;return(i=r.hostUpdated)==null?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EC(n,this[n]))),this._$EU()}updated(e){}firstUpdated(e){}};bs.elementStyles=[],bs.shadowRootOptions={mode:"open"},bs[Sl("elementProperties")]=new Map,bs[Sl("finalized")]=new Map,U0==null||U0({ReactiveElement:bs}),(Vi.reactiveElementVersions??(Vi.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tl=globalThis,Gd=Tl.trustedTypes,mv=Gd?Gd.createPolicy("lit-html",{createHTML:t=>t}):void 0,s4="$lit$",$i=`lit$${Math.random().toFixed(9).slice(2)}$`,a4="?"+$i,GS=`<${a4}>`,Vo=document,hc=()=>Vo.createComment(""),pc=t=>t===null||typeof t!="object"&&typeof t!="function",l4=Array.isArray,KS=t=>l4(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",L0=`[ 	
\f\r]`,il=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,gv=/-->/g,wv=/>/g,bo=RegExp(`>|${L0}(?:([^\\s"'>=/]+)(${L0}*=${L0}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),yv=/'/g,vv=/"/g,c4=/^(?:script|style|textarea|title)$/i,u4=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),I=u4(1),te=u4(2),qo=Symbol.for("lit-noChange"),yt=Symbol.for("lit-nothing"),bv=new WeakMap,Io=Vo.createTreeWalker(Vo,129);function d4(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return mv!==void 0?mv.createHTML(e):e}const YS=(t,e)=>{const n=t.length-1,r=[];let i,o=e===2?"<svg>":"",s=il;for(let a=0;a<n;a++){const l=t[a];let c,u,d=-1,p=0;for(;p<l.length&&(s.lastIndex=p,u=s.exec(l),u!==null);)p=s.lastIndex,s===il?u[1]==="!--"?s=gv:u[1]!==void 0?s=wv:u[2]!==void 0?(c4.test(u[2])&&(i=RegExp("</"+u[2],"g")),s=bo):u[3]!==void 0&&(s=bo):s===bo?u[0]===">"?(s=i??il,d=-1):u[1]===void 0?d=-2:(d=s.lastIndex-u[2].length,c=u[1],s=u[3]===void 0?bo:u[3]==='"'?vv:yv):s===vv||s===yv?s=bo:s===gv||s===wv?s=il:(s=bo,i=void 0);const w=s===bo&&t[a+1].startsWith("/>")?" ":"";o+=s===il?l+GS:d>=0?(r.push(c),l.slice(0,d)+s4+l.slice(d)+$i+w):l+$i+(d===-2?a:w)}return[d4(t,o+(t[n]||"<?>")+(e===2?"</svg>":"")),r]};let C1=class f4{constructor({strings:e,_$litType$:n},r){let i;this.parts=[];let o=0,s=0;const a=e.length-1,l=this.parts,[c,u]=YS(e,n);if(this.el=f4.createElement(c,r),Io.currentNode=this.el.content,n===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=Io.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const d of i.getAttributeNames())if(d.endsWith(s4)){const p=u[s++],w=i.getAttribute(d).split($i),y=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:y[2],strings:w,ctor:y[1]==="."?XS:y[1]==="?"?JS:y[1]==="@"?eT:gh}),i.removeAttribute(d)}else d.startsWith($i)&&(l.push({type:6,index:o}),i.removeAttribute(d));if(c4.test(i.tagName)){const d=i.textContent.split($i),p=d.length-1;if(p>0){i.textContent=Gd?Gd.emptyScript:"";for(let w=0;w<p;w++)i.append(d[w],hc()),Io.nextNode(),l.push({type:2,index:++o});i.append(d[p],hc())}}}else if(i.nodeType===8)if(i.data===a4)l.push({type:2,index:o});else{let d=-1;for(;(d=i.data.indexOf($i,d+1))!==-1;)l.push({type:7,index:o}),d+=$i.length-1}o++}}static createElement(e,n){const r=Vo.createElement("template");return r.innerHTML=e,r}};function ca(t,e,n=t,r){var s,a;if(e===qo)return e;let i=r!==void 0?(s=n._$Co)==null?void 0:s[r]:n._$Cl;const o=pc(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),o===void 0?i=void 0:(i=new o(t),i._$AT(t,n,r)),r!==void 0?(n._$Co??(n._$Co=[]))[r]=i:n._$Cl=i),i!==void 0&&(e=ca(t,i._$AS(t,e.values),i,r)),e}let QS=class{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:n},parts:r}=this._$AD,i=((e==null?void 0:e.creationScope)??Vo).importNode(n,!0);Io.currentNode=i;let o=Io.nextNode(),s=0,a=0,l=r[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new su(o,o.nextSibling,this,e):l.type===1?c=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(c=new tT(o,this,e)),this._$AV.push(c),l=r[++a]}s!==(l==null?void 0:l.index)&&(o=Io.nextNode(),s++)}return Io.currentNode=Vo,i}p(e){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}};class su{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,n,r,i){this.type=2,this._$AH=yt,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=ca(this,e,n),pc(e)?e===yt||e==null||e===""?(this._$AH!==yt&&this._$AR(),this._$AH=yt):e!==this._$AH&&e!==qo&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):KS(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==yt&&pc(this._$AH)?this._$AA.nextSibling.data=e:this.T(Vo.createTextNode(e)),this._$AH=e}$(e){var o;const{values:n,_$litType$:r}=e,i=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=C1.createElement(d4(r.h,r.h[0]),this.options)),r);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(n);else{const s=new QS(i,this),a=s.u(this.options);s.p(n),this.T(a),this._$AH=s}}_$AC(e){let n=bv.get(e.strings);return n===void 0&&bv.set(e.strings,n=new C1(e)),n}k(e){l4(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const o of e)i===n.length?n.push(r=new su(this.S(hc()),this.S(hc()),this,this.options)):r=n[i],r._$AI(o),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,n){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,n);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var n;this._$AM===void 0&&(this._$Cv=e,(n=this._$AP)==null||n.call(this,e))}}class gh{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,r,i,o){this.type=1,this._$AH=yt,this._$AN=void 0,this.element=e,this.name=n,this._$AM=i,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=yt}_$AI(e,n=this,r,i){const o=this.strings;let s=!1;if(o===void 0)e=ca(this,e,n,0),s=!pc(e)||e!==this._$AH&&e!==qo,s&&(this._$AH=e);else{const a=e;let l,c;for(e=o[0],l=0;l<o.length-1;l++)c=ca(this,a[r+l],n,l),c===qo&&(c=this._$AH[l]),s||(s=!pc(c)||c!==this._$AH[l]),c===yt?e=yt:e!==yt&&(e+=(c??"")+o[l+1]),this._$AH[l]=c}s&&!i&&this.j(e)}j(e){e===yt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}let XS=class extends gh{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===yt?void 0:e}},JS=class extends gh{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==yt)}};class eT extends gh{constructor(e,n,r,i,o){super(e,n,r,i,o),this.type=5}_$AI(e,n=this){if((e=ca(this,e,n,0)??yt)===qo)return;const r=this._$AH,i=e===yt&&r!==yt||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==yt&&(r===yt||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,e):this._$AH.handleEvent(e)}}let tT=class{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){ca(this,e)}};const B0=Tl.litHtmlPolyfillSupport;B0==null||B0(C1,su),(Tl.litHtmlVersions??(Tl.litHtmlVersions=[])).push("3.1.3");const nT=(t,e,n)=>{const r=(n==null?void 0:n.renderBefore)??e;let i=r._$litPart$;if(i===void 0){const o=(n==null?void 0:n.renderBefore)??null;r._$litPart$=i=new su(e.insertBefore(hc(),o),o,void 0,n??{})}return i._$AI(t),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let K=class extends bs{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const e=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=e.firstChild),e}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=nT(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return qo}};var D2;K._$litElement$=!0,K.finalized=!0,(D2=globalThis.litElementHydrateSupport)==null||D2.call(globalThis,{LitElement:K});const j0=globalThis.litElementPolyfillSupport;j0==null||j0({LitElement:K});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.5");let Al,qi,Zi;function rT(t,e){Al=document.createElement("style"),qi=document.createElement("style"),Zi=document.createElement("style"),Al.textContent=Zs(t).core.cssText,qi.textContent=Zs(t).dark.cssText,Zi.textContent=Zs(t).light.cssText,document.head.appendChild(Al),document.head.appendChild(qi),document.head.appendChild(Zi),h4(e)}function h4(t){qi&&Zi&&(t==="light"?(qi.removeAttribute("media"),Zi.media="enabled"):(Zi.removeAttribute("media"),qi.media="enabled"))}function iT(t){Al&&qi&&Zi&&(Al.textContent=Zs(t).core.cssText,qi.textContent=Zs(t).dark.cssText,Zi.textContent=Zs(t).light.cssText)}function Zs(t){return{core:X`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      :root {
        --w3m-color-mix-strength: ${Tr(t!=null&&t["--w3m-color-mix-strength"]?`${t["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${Tr((t==null?void 0:t["--w3m-font-family"])||"Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${Tr((t==null?void 0:t["--w3m-font-size-master"])||"10px")};
        --w3m-border-radius-master: ${Tr((t==null?void 0:t["--w3m-border-radius-master"])||"4px")};
        --w3m-z-index: ${Tr((t==null?void 0:t["--w3m-z-index"])||100)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-blue-100: var(--wui-color-blue-base-100);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-accent-glass-090: var(--wui-accent-glass-base-090);
        --wui-accent-glass-080: var(--wui-accent-glass-base-080);
        --wui-accent-glass-020: var(--wui-accent-glass-base-020);
        --wui-accent-glass-015: var(--wui-accent-glass-base-015);
        --wui-accent-glass-010: var(--wui-accent-glass-base-010);
        --wui-accent-glass-005: var(--wui-accent-glass-base-005);
        --wui-accent-glass-002: var(--wui-accent-glass-base-002);

        --wui-color-fg-100: var(--wui-color-fg-base-100);
        --wui-color-fg-125: var(--wui-color-fg-base-125);
        --wui-color-fg-150: var(--wui-color-fg-base-150);
        --wui-color-fg-175: var(--wui-color-fg-base-175);
        --wui-color-fg-200: var(--wui-color-fg-base-200);
        --wui-color-fg-225: var(--wui-color-fg-base-225);
        --wui-color-fg-250: var(--wui-color-fg-base-250);
        --wui-color-fg-275: var(--wui-color-fg-base-275);
        --wui-color-fg-300: var(--wui-color-fg-base-300);

        --wui-color-bg-100: var(--wui-color-bg-base-100);
        --wui-color-bg-125: var(--wui-color-bg-base-125);
        --wui-color-bg-150: var(--wui-color-bg-base-150);
        --wui-color-bg-175: var(--wui-color-bg-base-175);
        --wui-color-bg-200: var(--wui-color-bg-base-200);
        --wui-color-bg-225: var(--wui-color-bg-base-225);
        --wui-color-bg-250: var(--wui-color-bg-base-250);
        --wui-color-bg-275: var(--wui-color-bg-base-275);
        --wui-color-bg-300: var(--wui-color-bg-base-300);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-base-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-box-shadow-blue: rgba(71, 161, 255, 0.16);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 16%, transparent);

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            var(--w3m-default)
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            var(--w3m-default)
          );

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );

          --wui-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-base-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );
        }
      }
    `,light:X`
      :root {
        --w3m-color-mix: ${Tr((t==null?void 0:t["--w3m-color-mix"])||"#fff")};
        --w3m-accent: ${Tr((t==null?void 0:t["--w3m-accent"])||"#47a1ff")};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: #191a1a;

        --wui-color-blue-base-100: #47a1ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #59aaff;
        --wui-color-accent-base-080: #6cb4ff;

        --wui-accent-glass-base-090: rgba(71, 161, 255, 0.9);
        --wui-accent-glass-base-080: rgba(71, 161, 255, 0.8);
        --wui-accent-glass-base-020: rgba(71, 161, 255, 0.2);
        --wui-accent-glass-base-015: rgba(71, 161, 255, 0.15);
        --wui-accent-glass-base-010: rgba(71, 161, 255, 0.1);
        --wui-accent-glass-base-005: rgba(71, 161, 255, 0.05);
        --wui-accent-glass-base-002: rgba(71, 161, 255, 0.02);

        --wui-color-fg-base-100: #e4e7e7;
        --wui-color-fg-base-125: #d0d5d5;
        --wui-color-fg-base-150: #a8b1b1;
        --wui-color-fg-base-175: #a8b0b0;
        --wui-color-fg-base-200: #949e9e;
        --wui-color-fg-base-225: #868f8f;
        --wui-color-fg-base-250: #788080;
        --wui-color-fg-base-275: #788181;
        --wui-color-fg-base-300: #6e7777;

        --wui-color-bg-base-100: #141414;
        --wui-color-bg-base-125: #191a1a;
        --wui-color-bg-base-150: #1e1f1f;
        --wui-color-bg-base-175: #222525;
        --wui-color-bg-base-200: #272a2a;
        --wui-color-bg-base-225: #2c3030;
        --wui-color-bg-base-250: #313535;
        --wui-color-bg-base-275: #363b3b;
        --wui-color-bg-base-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: var(--wui-success-glass-015);
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-base-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-gray-glass-080: rgba(255, 255, 255, 0.8);
      }
    `,dark:X`
      :root {
        --w3m-color-mix: ${Tr((t==null?void 0:t["--w3m-color-mix"])||"#000")};
        --w3m-accent: ${Tr((t==null?void 0:t["--w3m-accent"])||"#3396ff")};
        --w3m-default: #000;

        --wui-color-modal-bg-base: #fff;

        --wui-color-blue-base-100: #3396ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #2d7dd2;
        --wui-color-accent-base-080: #2978cc;

        --wui-accent-glass-base-090: rgba(51, 150, 255, 0.9);
        --wui-accent-glass-base-080: rgba(51, 150, 255, 0.8);
        --wui-accent-glass-base-020: rgba(51, 150, 255, 0.2);
        --wui-accent-glass-base-015: rgba(51, 150, 255, 0.15);
        --wui-accent-glass-base-010: rgba(51, 150, 255, 0.1);
        --wui-accent-glass-base-005: rgba(51, 150, 255, 0.05);
        --wui-accent-glass-base-002: rgba(51, 150, 255, 0.02);

        --wui-color-fg-base-100: #141414;
        --wui-color-fg-base-125: #2d3131;
        --wui-color-fg-base-150: #474d4d;
        --wui-color-fg-base-175: #636d6d;
        --wui-color-fg-base-200: #798686;
        --wui-color-fg-base-225: #828f8f;
        --wui-color-fg-base-250: #8b9797;
        --wui-color-fg-base-275: #95a0a0;
        --wui-color-fg-base-300: #9ea9a9;

        --wui-color-bg-base-100: #ffffff;
        --wui-color-bg-base-125: #f5fafa;
        --wui-color-bg-base-150: #f3f8f8;
        --wui-color-bg-base-175: #eef4f4;
        --wui-color-bg-base-200: #eaf1f1;
        --wui-color-bg-base-225: #e5eded;
        --wui-color-bg-base-250: #e1e9e9;
        --wui-color-bg-base-275: #dce7e7;
        --wui-color-bg-base-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-base-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-gray-glass-080: rgba(0, 0, 0, 0.8);
      }
    `}}const we=X`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,ct=X`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    outline: none;
    border: 1px solid transparent;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-005);
    }

    button:active:enabled {
      transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
      background-color: var(--wui-gray-glass-010);
    }

    button[data-variant='fill']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='accentBg']:hover:enabled {
      background: var(--wui-accent-glass-015);
    }

    button[data-variant='accentBg']:active:enabled {
      background: var(--wui-accent-glass-020);
    }
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='shade']:disabled,
  button[data-variant='accent']:disabled,
  button[data-variant='accentBg']:disabled {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-gray-glass-015);
    filter: grayscale(1);
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  button:focus-visible,
  a:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='fill']:disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='fill']:disabled > wui-icon {
    color: var(--wui-gray-glass-015);
  }

  button[data-variant='shade'] {
    color: var(--wui-color-fg-200);
  }

  button[data-variant='accent'],
  button[data-variant='accentBg'] {
    color: var(--wui-color-accent-100);
  }

  button[data-variant='accentBg'] {
    background: var(--wui-accent-glass-010);
    border: 1px solid var(--wui-accent-glass-010);
  }

  button[data-variant='fullWidth'] {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    height: 56px;
    border: none;
    background-color: var(--wui-gray-glass-002);
    color: var(--wui-color-fg-200);
    gap: var(--wui-spacing-xs);
  }

  button:active:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='fill']:active:enabled {
    background-color: var(--wui-color-accent-080);
    border: 1px solid var(--wui-gray-glass-010);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,Ug=X`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function oT(t,e){const{kind:n,elements:r}=e;return{kind:n,elements:r,finisher(i){customElements.get(t)||customElements.define(t,i)}}}function sT(t,e){return customElements.get(t)||customElements.define(t,e),e}function Z(t){return function(n){return typeof n=="function"?sT(t,n):oT(t,n)}}const aT=X`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`;var lT=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let S1=class extends K{render(){return I`<slot></slot>`}};S1.styles=[we,aT];S1=lT([Z("wui-card")],S1);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cT={attribute:!0,type:String,converter:Zd,reflect:!1,hasChanged:Mg},uT=(t=cT,e,n)=>{const{kind:r,metadata:i}=n;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(n.name,t),r==="accessor"){const{name:s}=n;return{set(a){const l=e.get.call(this);e.set.call(this,a),this.requestUpdate(s,l,t)},init(a){return a!==void 0&&this.P(s,void 0,t),a}}}if(r==="setter"){const{name:s}=n;return function(a){const l=this[s];e.call(this,a),this.requestUpdate(s,l,t)}}throw Error("Unsupported decorator location: "+r)};function $(t){return(e,n)=>typeof n=="object"?uT(t,e,n):((r,i,o)=>{const s=i.hasOwnProperty(o);return i.constructor.createProperty(o,s?{...r,wrapped:!0}:r),s?Object.getOwnPropertyDescriptor(i,o):void 0})(t,e,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ie(t){return $({...t,state:!0,attribute:!1})}const dT=X`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`,fT=te`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,hT=te`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,pT=te`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,mT=te`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,gT=te`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,wT=te`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,yT=te`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,vT=te`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,bT=te`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.04 2.65c.47.3.6.91.3 1.38l-5.78 9a1 1 0 0 1-1.61.1L1.73 9.27A1 1 0 1 1 3.27 8L5.6 10.8l5.05-7.85a1 1 0 0 1 1.38-.3Z"
    clip-rule="evenodd"
  />
</svg>`,xT=te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,ET=te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,_T=te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,CT=te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,ST=te`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,TT=te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,AT=te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,PT=te`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,IT=te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,$T=te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.5 0h1.67c.68 0 1.26 0 1.73.04.5.05.97.14 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73V6.5c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.43.03-.95.03-1.57.03 0 .62 0 1.14-.04 1.57-.04.5-.14.97-.4 1.42-.29.52-.72.95-1.24 1.24-.44.26-.92.35-1.41.4-.48.04-1.05.04-1.74.04H4.83c-.68 0-1.26 0-1.73-.04-.5-.05-.97-.14-1.42-.4-.52-.3-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.42A20.9 20.9 0 0 1 0 11.17V9.5c0-.69 0-1.26.04-1.74.05-.5.14-.97.4-1.41.3-.52.72-.95 1.24-1.25.45-.25.92-.35 1.42-.4.43-.03.95-.03 1.57-.03 0-.62 0-1.14.04-1.57.04-.5.14-.97.4-1.42.29-.52.72-.95 1.24-1.24.44-.26.92-.35 1.41-.4A20.9 20.9 0 0 1 9.5 0ZM4.67 6.67c-.63 0-1.06 0-1.4.03-.35.03-.5.09-.6.14-.2.12-.38.3-.5.5-.05.1-.1.24-.14.6C2 8.32 2 8.8 2 9.54v1.59c0 .73 0 1.22.03 1.6.04.35.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h1.58c.74 0 1.22 0 1.6-.03.36-.04.5-.1.6-.15.2-.11.38-.29.5-.5.05-.09.1-.24.14-.6.03-.33.03-.76.03-1.39-.6 0-1.13 0-1.57-.04-.5-.04-.97-.14-1.41-.4-.52-.29-.95-.72-1.25-1.24a3.39 3.39 0 0 1-.4-1.41c-.03-.44-.03-.96-.03-1.57Zm3.27-4.64c-.36.04-.5.1-.6.15-.2.11-.38.29-.5.5-.05.09-.1.24-.14.6-.03.37-.03.86-.03 1.6v1.58c0 .74 0 1.22.03 1.6.03.36.09.5.14.6.12.2.3.38.5.5.1.05.24.1.6.14.38.03.86.03 1.6.03h1.59c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6V4.87c0-.73 0-1.22-.03-1.6a1.46 1.46 0 0 0-.15-.6c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.14-.37-.03-.86-.03-1.6-.03H9.55c-.74 0-1.22 0-1.6.03Z"
    clip-rule="evenodd"
  />
</svg>`,OT=te` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,DT=te`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,kT=te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,RT=te`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,NT=te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,MT=te`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,UT=te`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,LT=te`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,BT=te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,jT=te`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,FT=te`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#fff" fill-opacity=".05" />
      <g clip-path="url(#c)">
        <path
          fill="#4285F4"
          d="M20 17.7v4.65h6.46a5.53 5.53 0 0 1-2.41 3.61l3.9 3.02c2.26-2.09 3.57-5.17 3.57-8.82 0-.85-.08-1.67-.22-2.46H20Z"
        />
        <path
          fill="#34A853"
          d="m13.27 22.17-.87.67-3.11 2.42A12 12 0 0 0 20 31.9c3.24 0 5.96-1.07 7.94-2.9l-3.9-3.03A7.15 7.15 0 0 1 20 27.12a7.16 7.16 0 0 1-6.72-4.94v-.01Z"
        />
        <path
          fill="#FBBC05"
          d="M9.29 14.5a11.85 11.85 0 0 0 0 10.76l3.99-3.1a7.19 7.19 0 0 1 0-4.55l-4-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M20 12.66c1.77 0 3.34.61 4.6 1.8l3.43-3.44A11.51 11.51 0 0 0 20 7.89c-4.7 0-8.74 2.69-10.71 6.62l3.99 3.1A7.16 7.16 0 0 1 20 12.66Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,WT=te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,zT=te`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,HT=te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,VT=te`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,qT=te`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,ZT=te`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,GT=te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,KT=te` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,YT=te`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,QT=te`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,XT=te`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,JT=te`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,eA=te`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`,tA=te`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,nA=te`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg> `,rA=te`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,iA=te`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1D9BF0" />
      <path
        fill="#fff"
        d="M30 13.81c-.74.33-1.53.55-2.36.65.85-.51 1.5-1.32 1.8-2.27-.79.47-1.66.8-2.6 1a4.1 4.1 0 0 0-7 3.73c-3.4-.17-6.42-1.8-8.45-4.28a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.86-.5a4.1 4.1 0 0 0 3.3 4.07c-.58.15-1.21.19-1.86.07a4.1 4.1 0 0 0 3.83 2.85A8.25 8.25 0 0 1 10 26.3a11.62 11.62 0 0 0 6.29 1.84c7.62 0 11.92-6.44 11.66-12.2.8-.59 1.5-1.3 2.05-2.13Z"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,oA=te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,sA=te`<svg fill="none" viewBox="0 0 28 28">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M18.1 4.76c-.42-.73-1.33-1.01-2.09-.66l-1.42.66c-.37.18-.8.18-1.18 0l-1.4-.65a1.63 1.63 0 0 0-2.1.66l-.84 1.45c-.2.34-.53.59-.92.67l-1.7.35c-.83.17-1.39.94-1.3 1.78l.19 1.56c.04.39-.08.78-.33 1.07l-1.12 1.3c-.52.6-.52 1.5 0 2.11L5 16.38c.25.3.37.68.33 1.06l-.18 1.57c-.1.83.46 1.6 1.28 1.78l1.7.35c.4.08.73.32.93.66l.84 1.43a1.63 1.63 0 0 0 2.09.66l1.41-.66c.37-.17.8-.17 1.18 0l1.43.67c.76.35 1.66.07 2.08-.65l.86-1.45c.2-.34.54-.58.92-.66l1.68-.35A1.63 1.63 0 0 0 22.84 19l-.18-1.57a1.4 1.4 0 0 1 .33-1.06l1.12-1.32c.52-.6.52-1.5 0-2.11l-1.12-1.3a1.4 1.4 0 0 1-.33-1.07l.18-1.57c.1-.83-.46-1.6-1.28-1.77l-1.68-.35a1.4 1.4 0 0 1-.92-.66l-.86-1.47Zm-3.27-3.2a4.43 4.43 0 0 1 5.69 1.78l.54.93 1.07.22a4.43 4.43 0 0 1 3.5 4.84l-.11.96.7.83a4.43 4.43 0 0 1 .02 5.76l-.72.85.1.96a4.43 4.43 0 0 1-3.5 4.84l-1.06.22-.54.92a4.43 4.43 0 0 1-5.68 1.77l-.84-.4-.82.39a4.43 4.43 0 0 1-5.7-1.79l-.51-.89-1.09-.22a4.43 4.43 0 0 1-3.5-4.84l.1-.96-.72-.85a4.43 4.43 0 0 1 .01-5.76l.71-.83-.1-.95a4.43 4.43 0 0 1 3.5-4.84l1.08-.23.53-.9a4.43 4.43 0 0 1 5.7-1.8l.81.38.83-.39ZM18.2 9.4c.65.42.84 1.28.42 1.93l-4.4 6.87a1.4 1.4 0 0 1-2.26.14L9.5 15.39a1.4 1.4 0 0 1 2.15-1.8l1.23 1.48 3.38-5.26a1.4 1.4 0 0 1 1.93-.42Z"
    clip-rule="evenodd"
  />
</svg>`,aA=te`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="m4.1 12.43-.45-.78-.93-.2a1.65 1.65 0 0 1-1.31-1.8l.1-.86-.61-.71a1.65 1.65 0 0 1 0-2.16l.6-.7-.09-.85c-.1-.86.47-1.64 1.3-1.81l.94-.2.45-.78A1.65 1.65 0 0 1 6.23.9l.77.36.78-.36c.77-.36 1.69-.07 2.12.66l.47.8.91.2c.84.17 1.4.95 1.31 1.8l-.1.86.6.7c.54.62.54 1.54.01 2.16l-.6.71.09.86c.1.85-.47 1.63-1.3 1.8l-.92.2-.47.79a1.65 1.65 0 0 1-2.12.66L7 12.74l-.77.36c-.78.35-1.7.07-2.13-.67Zm5.74-6.9a1 1 0 1 0-1.68-1.07L6.32 7.3l-.55-.66a1 1 0 0 0-1.54 1.28l1.43 1.71a1 1 0 0 0 1.61-.1l2.57-4Z"
    clip-rule="evenodd"
  />
</svg>`,lA=te`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,cA=te`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,uA=te`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,dA=te`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`,fA=te`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.687 0.557043C11.1462 0.671832 11.4254 1.13706 11.3106 1.59615C11.2044 2.02082 11.0975 2.51184 10.9822 3.04102C10.7176 4.25623 10.4091 5.6727 9.96482 6.94907C10.1435 7.58939 10.3065 8.16905 10.4935 8.68429C10.6447 9.10072 10.7858 9.39487 10.9179 9.58289C11.0055 9.70747 11.0597 9.74443 11.0748 9.75277C11.096 9.75724 11.1075 9.75764 11.1531 9.71916C11.2342 9.65067 11.3386 9.50891 11.4426 9.28357C11.5416 9.06892 11.614 8.8366 11.662 8.6497C11.6854 8.55831 11.7019 8.48242 11.7122 8.43111C11.7174 8.40555 11.7209 8.38638 11.723 8.37476L11.725 8.36363C11.8 7.89659 12.2395 7.57864 12.7068 7.65342C13.1742 7.72822 13.4925 8.16766 13.4177 8.63494C13.4153 8.64924 13.42 8.62063 13.4177 8.63494L13.4175 8.63596L13.4173 8.63721L13.4168 8.64037L13.4153 8.64924L13.4105 8.67692C13.4064 8.69961 13.4006 8.73069 13.3929 8.76891C13.3776 8.84516 13.3545 8.95091 13.3224 9.07586C13.2593 9.32166 13.1564 9.66085 12.9992 10.0015C12.8469 10.3315 12.6139 10.7288 12.2595 11.0282C11.8757 11.3523 11.35 11.5553 10.7293 11.4312C10.1645 11.3183 9.77597 10.939 9.51527 10.5681C9.2535 10.1957 9.05129 9.7349 8.88212 9.26898C8.87877 9.25975 8.87542 9.25049 8.87208 9.2412C8.03954 10.4941 6.83375 11.4479 5.03926 11.4479C3.48049 11.4479 2.31021 10.7159 1.56788 9.63945C0.846767 8.5938 0.544023 7.25403 0.573206 5.9702C0.60242 4.68505 0.966023 3.36073 1.69055 2.33272C2.42915 1.28475 3.5614 0.531453 5.03927 0.531453C6.44937 0.531453 7.4408 1.29593 8.1276 2.27567C8.48261 2.7821 8.77248 3.36668 9.0177 3.97383C9.1059 3.59106 9.18901 3.20908 9.27086 2.83294C9.39492 2.26277 9.51606 1.70605 9.64752 1.18046C9.76235 0.721369 10.2277 0.442254 10.687 0.557043ZM8.16354 6.87693C8.08689 6.60534 8.01003 6.33741 7.93241 6.08076C7.59522 4.96581 7.22132 3.969 6.72371 3.25914C6.24674 2.57873 5.72135 2.24516 5.03927 2.24516C4.21565 2.24516 3.56947 2.6422 3.09195 3.31975C2.60035 4.01725 2.31013 4.99361 2.28705 6.00913C2.26393 7.02599 2.51041 7.9869 2.97927 8.66676C3.42691 9.31586 4.08734 9.73417 5.03926 9.73417C6.48097 9.73417 7.4216 8.72164 8.14437 6.9249C8.15079 6.90893 8.15718 6.89294 8.16354 6.87693Z" fill="#47A1FF"/>
</svg>`;var wh=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const hA={allWallets:fT,alpha:fA,appStore:hT,chromeStore:ST,apple:pT,arrowBottom:mT,arrowLeft:gT,arrowRight:wT,arrowTop:yT,browser:vT,checkmark:bT,chevronBottom:xT,chevronLeft:ET,chevronRight:_T,chevronTop:CT,clock:TT,close:AT,compass:IT,coinPlaceholder:PT,copy:$T,cursor:OT,desktop:DT,disconnect:kT,discord:RT,etherscan:NT,extension:MT,externalLink:UT,facebook:LT,filters:BT,github:jT,google:FT,helpCircle:WT,infoCircle:zT,mail:HT,mobile:VT,networkPlaceholder:qT,nftPlaceholder:ZT,off:GT,playStore:KT,qrCode:YT,refresh:QT,search:XT,swapHorizontal:JT,swapHorizontalBold:eA,swapVertical:tA,telegram:nA,twitch:rA,twitter:iA,twitterIcon:oA,verify:sA,verifyFilled:aA,wallet:cA,walletConnect:uA,walletPlaceholder:lA,warningCircle:dA};let ua=class extends K{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
    `,I`${hA[this.name]}`}};ua.styles=[we,Ug,dT];wh([$()],ua.prototype,"size",void 0);wh([$()],ua.prototype,"name",void 0);wh([$()],ua.prototype,"color",void 0);ua=wh([Z("wui-icon")],ua);const pA=X`
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var Lg=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let mc=class extends K{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image"}render(){return I`<img src=${this.src} alt=${this.alt} />`}};mc.styles=[we,Ug,pA];Lg([$()],mc.prototype,"src",void 0);Lg([$()],mc.prototype,"alt",void 0);mc=Lg([Z("wui-image")],mc);const mA=X`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var gA=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let T1=class extends K{render(){return I`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};T1.styles=[we,mA];T1=gA([Z("wui-loading-hexagon")],T1);const wA=X`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var Bg=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let gc=class extends K{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: var(--wui-color-${this.color});`,this.dataset.size=this.size,I`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};gc.styles=[we,wA];Bg([$()],gc.prototype,"color",void 0);Bg([$()],gc.prototype,"size",void 0);gc=Bg([Z("wui-loading-spinner")],gc);const yA=X`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var p4=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Kd=class extends K{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,r=36-e,i=116+r,o=245+r,s=360+r*1.75;return I`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${i} ${o}"
          stroke-dashoffset=${s}
        />
      </svg>
    `}};Kd.styles=[we,yA];p4([$({type:Number})],Kd.prototype,"radius",void 0);Kd=p4([Z("wui-loading-thumbnail")],Kd);const vA=X`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var yh=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let da=class extends K{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};
    `,I`<slot></slot>`}};da.styles=[vA];yh([$()],da.prototype,"width",void 0);yh([$()],da.prototype,"height",void 0);yh([$()],da.prototype,"borderRadius",void 0);da=yh([Z("wui-shimmer")],da);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const m4={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},g4=t=>(...e)=>({_$litDirective$:t,values:e});let w4=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bA=g4(class extends w4{constructor(t){var e;if(super(t),t.type!==m4.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var r,i;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!((r=this.nt)!=null&&r.has(o))&&this.st.add(o);return this.render(e)}const n=t.element.classList;for(const o of this.st)o in e||(n.remove(o),this.st.delete(o));for(const o in e){const s=!!e[o];s===this.st.has(o)||(i=this.nt)!=null&&i.has(o)||(s?(n.add(o),this.st.add(o)):(n.remove(o),this.st.delete(o)))}return qo}}),xA=X`
  :host {
    display: flex !important;
  }

  slot {
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-small-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }
`;var vh=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let fa=class extends K{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left"}render(){const e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,I`<slot class=${bA(e)}></slot>`}};fa.styles=[we,xA];vh([$()],fa.prototype,"variant",void 0);vh([$()],fa.prototype,"color",void 0);vh([$()],fa.prototype,"align",void 0);fa=vh([Z("wui-text")],fa);const EA=te`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,_A=te`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,CA=te`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,SA=te`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,TA=te`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,AA=te`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,PA=te`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,IA=te`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,$A=te`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,OA=te`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,DA=te`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,kA=te`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,RA=te`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,NA=X`
  :host {
    display: block;
    width: 55px;
    height: 55px;
  }
`;var y4=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const MA={browser:EA,dao:_A,defi:CA,defiAlt:SA,eth:TA,layers:AA,lock:PA,login:IA,network:$A,nft:OA,noun:DA,profile:kA,system:RA};let Yd=class extends K{constructor(){super(...arguments),this.name="browser"}render(){return I`${MA[this.name]}`}};Yd.styles=[we,NA];y4([$()],Yd.prototype,"name",void 0);Yd=y4([Z("wui-visual")],Yd);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ce=t=>t??yt,Ze={getSpacingStyles(t,e){if(Array.isArray(t))return t[e]?`var(--wui-spacing-${t[e]})`:void 0;if(typeof t=="string")return`var(--wui-spacing-${t})`},getFormattedDate(t){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t)},getHostName(t){return new URL(t).hostname},getTruncateString({string:t,charsStart:e,charsEnd:n,truncate:r}){return t.length<=e+n?t:r==="end"?`${t.substring(0,e)}...`:r==="start"?`...${t.substring(t.length-n)}`:`${t.substring(0,Math.floor(e))}...${t.substring(t.length-Math.floor(n))}`},generateAvatarColors(t){const n=t.toLowerCase().replace(/^0x/iu,"").substring(0,6),r=this.hexToRgb(n),i=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),s=100-3*Number(i==null?void 0:i.replace("px","")),a=`${s}% ${s}% at 65% 40%`,l=[];for(let c=0;c<5;c+=1){const u=this.tintColor(r,.15*c);l.push(`rgb(${u[0]}, ${u[1]}, ${u[2]})`)}return`
    --local-color-1: ${l[0]};
    --local-color-2: ${l[1]};
    --local-color-3: ${l[2]};
    --local-color-4: ${l[3]};
    --local-color-5: ${l[4]};
    --local-radial-circle: ${a}
   `},hexToRgb(t){const e=parseInt(t,16),n=e>>16&255,r=e>>8&255,i=e&255;return[n,r,i]},tintColor(t,e){const[n,r,i]=t,o=Math.round(n+(255-n)*e),s=Math.round(r+(255-r)*e),a=Math.round(i+(255-i)*e);return[o,s,a]},isNumber(t){return{number:/^[0-9]+$/u}.number.test(t)},getColorTheme(t){return t||(typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark")}},UA=X`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var Nn=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let nn=class extends K{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&Ze.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&Ze.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&Ze.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&Ze.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&Ze.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&Ze.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&Ze.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&Ze.getSpacingStyles(this.margin,3)};
    `,I`<slot></slot>`}};nn.styles=[we,UA];Nn([$()],nn.prototype,"flexDirection",void 0);Nn([$()],nn.prototype,"flexWrap",void 0);Nn([$()],nn.prototype,"flexBasis",void 0);Nn([$()],nn.prototype,"flexGrow",void 0);Nn([$()],nn.prototype,"flexShrink",void 0);Nn([$()],nn.prototype,"alignItems",void 0);Nn([$()],nn.prototype,"justifyContent",void 0);Nn([$()],nn.prototype,"columnGap",void 0);Nn([$()],nn.prototype,"rowGap",void 0);Nn([$()],nn.prototype,"gap",void 0);Nn([$()],nn.prototype,"padding",void 0);Nn([$()],nn.prototype,"margin",void 0);nn=Nn([Z("wui-flex")],nn);const LA=X`
  :host {
    display: block;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var bh=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let ha=class extends K{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0}render(){return I`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",I`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const e=Ze.generateAvatarColors(this.address);return this.style.cssText=e,null}return this.dataset.variant="default",null}};ha.styles=[we,LA];bh([$()],ha.prototype,"imageSrc",void 0);bh([$()],ha.prototype,"alt",void 0);bh([$()],ha.prototype,"address",void 0);ha=bh([Z("wui-avatar")],ha);const BA=X`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-gray-glass-020);
    border-radius: var(--local-border-radius);
    box-shadow: 0 0 0 1px var(--local-border);
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var gi=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let pr=class extends K{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const e=this.iconSize||this.size,n=this.size==="lg",r=this.size==="xl",i=n?"12%":"16%",o=n?"xxs":r?"s":"3xl",s=this.background==="gray",a=this.background==="opaque",l=this.backgroundColor==="accent-100"&&a||this.backgroundColor==="success-100"&&a||this.backgroundColor==="error-100"&&a||this.backgroundColor==="inverse-100"&&a;let c=`var(--wui-color-${this.backgroundColor})`;return l?c=`var(--wui-icon-box-bg-${this.backgroundColor})`:s&&(c=`var(--wui-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${c};
       --local-bg-mix: ${l||s?"100%":i};
       --local-border-radius: var(--wui-border-radius-${o});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor==="wui-color-bg-125"?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,I` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};pr.styles=[we,ct,BA];gi([$()],pr.prototype,"size",void 0);gi([$()],pr.prototype,"backgroundColor",void 0);gi([$()],pr.prototype,"iconColor",void 0);gi([$()],pr.prototype,"iconSize",void 0);gi([$()],pr.prototype,"background",void 0);gi([$({type:Boolean})],pr.prototype,"border",void 0);gi([$()],pr.prototype,"borderColor",void 0);gi([$()],pr.prototype,"icon",void 0);pr=gi([Z("wui-icon-box")],pr);const jA=X`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var wi=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let mr=class extends K{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.disabled=!1,this.isProfileName=!1,this.address="",this.charsStart=4,this.charsEnd=6}render(){return I`
      <button
        ?disabled=${this.disabled}
        class=${Ce(this.balance?void 0:"local-no-balance")}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${Ze.getTruncateString({string:this.address,charsStart:this.isProfileName?18:this.charsStart,charsEnd:this.isProfileName?0:this.charsEnd,truncate:this.isProfileName?"end":"middle"})}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.balance){const e=this.networkSrc?I`<wui-image src=${this.networkSrc}></wui-image>`:I`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return I`
        ${e}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance} </wui-text>
      `}return null}};mr.styles=[we,ct,jA];wi([$()],mr.prototype,"networkSrc",void 0);wi([$()],mr.prototype,"avatarSrc",void 0);wi([$()],mr.prototype,"balance",void 0);wi([$({type:Boolean})],mr.prototype,"disabled",void 0);wi([$({type:Boolean})],mr.prototype,"isProfileName",void 0);wi([$()],mr.prototype,"address",void 0);wi([$()],mr.prototype,"charsStart",void 0);wi([$()],mr.prototype,"charsEnd",void 0);mr=wi([Z("wui-account-button")],mr);const FA=X`
  :host {
    position: relative;
    background-color: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-base-150, #1e1f1f);
    padding: 1px;
  }
`;var as=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let li=class extends K{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let e="xxs";return this.size==="lg"?e="m":this.size==="md"?e="xs":e="xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${e});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),I`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?I`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?I`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:I`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};li.styles=[we,FA];as([$()],li.prototype,"size",void 0);as([$()],li.prototype,"name",void 0);as([$()],li.prototype,"imageSrc",void 0);as([$()],li.prototype,"walletIcon",void 0);as([$({type:Boolean})],li.prototype,"installed",void 0);as([$()],li.prototype,"badgeSize",void 0);li=as([Z("wui-wallet-image")],li);const WA=X`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;var v4=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const F0=4;let Qd=class extends K{constructor(){super(...arguments),this.walletImages=[]}render(){const e=this.walletImages.length<F0;return I`${this.walletImages.slice(0,F0).map(({src:n,walletName:r})=>I`
            <wui-wallet-image
              size="inherit"
              imageSrc=${n}
              name=${Ce(r)}
            ></wui-wallet-image>
          `)}
      ${e?[...Array(F0-this.walletImages.length)].map(()=>I` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};Qd.styles=[we,WA];v4([$({type:Array})],Qd.prototype,"walletImages",void 0);Qd=v4([Z("wui-all-wallets-image")],Qd);const zA=X`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    width: var(--local-width);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-010);
  }

  button[data-size='sm'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-s);
  }

  button[data-size='sm'][data-icon-left='true'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-s) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  button[data-size='sm'][data-icon-right='true'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-xs) var(--wui-spacing-xxs)
      var(--wui-spacing-s);
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'][data-icon-left='true'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transition: all 200ms ease-in-out;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var lo=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let kr=class extends K{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="fill",this.hasIconLeft=!1,this.hasIconRight=!1}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};`;const e=this.size==="md"?"paragraph-600":"small-600";return I`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled||this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){return this.loading?I`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:I``}};kr.styles=[we,ct,zA];lo([$()],kr.prototype,"size",void 0);lo([$({type:Boolean})],kr.prototype,"disabled",void 0);lo([$({type:Boolean})],kr.prototype,"fullWidth",void 0);lo([$({type:Boolean})],kr.prototype,"loading",void 0);lo([$()],kr.prototype,"variant",void 0);lo([$({type:Boolean})],kr.prototype,"hasIconLeft",void 0);lo([$({type:Boolean})],kr.prototype,"hasIconRight",void 0);kr=lo([Z("wui-button")],kr);const b4=te`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,HA=X`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-gray-glass-010);
    stroke-width: 1px;
  }
`;var x4=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Xd=class extends K{constructor(){super(...arguments),this.type="wallet"}render(){return I`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?I` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${b4}`:I`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};Xd.styles=[we,ct,HA];x4([$()],Xd.prototype,"type",void 0);Xd=x4([Z("wui-card-select-loader")],Xd);const VA=te`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,qA=X`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
    transition: stroke var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var au=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Zo=class extends K{constructor(){super(...arguments),this.size="md",this.name="uknown",this.selected=!1}render(){const e=this.size==="lg";return this.style.cssText=`
      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-gray-glass-010)"};
      --local-path: ${e?"var(--wui-path-network-lg)":"var(--wui-path-network)"};
      --local-width: ${e?"86px":"48px"};
      --local-height: ${e?"96px":"54px"};
      --local-icon-size: ${e?"42px":"24px"};
    `,I`${this.templateVisual()} ${e?VA:b4}`}templateVisual(){return this.imageSrc?I`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:I`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};Zo.styles=[we,qA];au([$()],Zo.prototype,"size",void 0);au([$()],Zo.prototype,"name",void 0);au([$()],Zo.prototype,"imageSrc",void 0);au([$({type:Boolean})],Zo.prototype,"selected",void 0);Zo=au([Z("wui-network-image")],Zo);const ZA=X`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: var(--wui-icon-box-size-xl);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-accent-glass-010);
  }
`;var ls=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let ci=class extends K{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1,this.installed=!1}render(){return I`
      <button data-selected=${Ce(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return this.type==="network"?I`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${Ce(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:I`
      <wui-wallet-image
        size="md"
        imageSrc=${Ce(this.imageSrc)}
        name=${this.name}
        .installed=${this.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}};ci.styles=[we,ct,ZA];ls([$()],ci.prototype,"name",void 0);ls([$()],ci.prototype,"type",void 0);ls([$()],ci.prototype,"imageSrc",void 0);ls([$({type:Boolean})],ci.prototype,"disabled",void 0);ls([$({type:Boolean})],ci.prototype,"selected",void 0);ls([$({type:Boolean})],ci.prototype,"installed",void 0);ci=ls([Z("wui-card-select")],ci);const GA=X`
  a {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'],
  a[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-success-glass-010);
    background-color: var(--wui-success-glass-010);
    color: var(--wui-color-success-100);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent'],
  a[data-variant='success'],
  a[data-variant='shadeSmall'] {
    padding: 7px var(--wui-spacing-s) 7px 10px;
  }

  a[data-variant='transparent']:has(wui-text:first-child),
  a[data-variant='success']:has(wui-text:first-child),
  a[data-variant='shadeSmall']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image,
  a[data-variant='success'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon,
  a[data-variant='success'] > wui-icon,
  a[data-variant='shadeSmall'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible,
  a[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  a[data-variant='success']:focus-visible {
    background-color: var(--wui-success-glass-015);
  }

  a.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover,
    a[data-variant='shadeSmall']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }

    a[data-variant='success']:hover {
      background-color: var(--wui-success-glass-015);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active,
  a[data-variant='shadeSmall']:active {
    background-color: var(--wui-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }

  a[data-variant='success']:active {
    background-color: var(--wui-success-glass-020);
  }
`;var cs=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let ui=class extends K{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href="",this.text=void 0}render(){const n=this.variant==="success"||this.variant==="transparent"||this.variant==="shadeSmall"?"small-600":"paragraph-600";return I`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${n} color="inherit">
          ${this.title?this.title:Ze.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?I`<wui-image src=${this.imageSrc}></wui-image>`:null}};ui.styles=[we,ct,GA];cs([$()],ui.prototype,"variant",void 0);cs([$()],ui.prototype,"imageSrc",void 0);cs([$({type:Boolean})],ui.prototype,"disabled",void 0);cs([$()],ui.prototype,"icon",void 0);cs([$()],ui.prototype,"href",void 0);cs([$()],ui.prototype,"text",void 0);ui=cs([Z("wui-chip")],ui);const KA=X`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  @media (max-width: 500px) {
    button[data-size='md'] {
      height: 32px;
      padding: 5px 12px;
    }

    button[data-size='md'] > wui-text > slot {
      font-size: 14px !important;
    }
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var jg=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let wc=class extends K{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){const e=this.size==="md"?"paragraph-600":"small-600";return I`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?I`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};wc.styles=[we,ct,KA];jg([$()],wc.prototype,"size",void 0);jg([$({type:Boolean})],wc.prototype,"loading",void 0);wc=jg([Z("wui-connect-button")],wc);const YA=X`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var xh=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let pa=class extends K{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return I`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-button size="sm" variant="accent">
          ${this.buttonLabel}
          <wui-icon size="xs" color="inherit" slot="iconRight" name="chevronRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};pa.styles=[we,ct,YA];xh([$({type:Boolean})],pa.prototype,"disabled",void 0);xh([$()],pa.prototype,"label",void 0);xh([$()],pa.prototype,"buttonLabel",void 0);pa=xh([Z("wui-cta-button")],pa);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const QA=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pl=(t,e)=>{var r;const n=t._$AN;if(n===void 0)return!1;for(const i of n)(r=i._$AO)==null||r.call(i,e,!1),Pl(i,e);return!0},Jd=t=>{let e,n;do{if((e=t._$AM)===void 0)break;n=e._$AN,n.delete(t),t=e}while((n==null?void 0:n.size)===0)},E4=t=>{for(let e;e=t._$AM;t=e){let n=e._$AN;if(n===void 0)e._$AN=n=new Set;else if(n.has(t))break;n.add(t),eP(e)}};function XA(t){this._$AN!==void 0?(Jd(this),this._$AM=t,E4(this)):this._$AM=t}function JA(t,e=!1,n=0){const r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(e)if(Array.isArray(r))for(let o=n;o<r.length;o++)Pl(r[o],!1),Jd(r[o]);else r!=null&&(Pl(r,!1),Jd(r));else Pl(this,t)}const eP=t=>{t.type==m4.CHILD&&(t._$AP??(t._$AP=JA),t._$AQ??(t._$AQ=XA))};class tP extends w4{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,n,r){super._$AT(e,n,r),E4(this),this.isConnected=e._$AU}_$AO(e,n=!0){var r,i;e!==this.isConnected&&(this.isConnected=e,e?(r=this.reconnected)==null||r.call(this):(i=this.disconnected)==null||i.call(this)),n&&(Pl(this,e),Jd(this))}setValue(e){if(QA(this._$Ct))this._$Ct._$AI(e,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=e,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Eh=()=>new nP;let nP=class{};const W0=new WeakMap,_h=g4(class extends tP{render(t){return yt}update(t,[e]){var r;const n=e!==this.Y;return n&&this.Y!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.Y=e,this.ht=(r=t.options)==null?void 0:r.host,this.rt(this.ct=t.element)),yt}rt(t){if(typeof this.Y=="function"){const e=this.ht??globalThis;let n=W0.get(e);n===void 0&&(n=new WeakMap,W0.set(e,n)),n.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),n.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){var t,e;return typeof this.Y=="function"?(t=W0.get(this.ht??globalThis))==null?void 0:t.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),rP=X`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    font-size: var(--wui-font-size-paragraph);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px 40px;
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all var(--wui-ease-in-power-2) var(--wui-duration-md);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var co=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Rr=class extends K{constructor(){super(...arguments),this.inputElementRef=Eh(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text"}render(){const e=`wui-size-${this.size}`;return I` ${this.templateIcon()}
      <input
        ${_h(this.inputElementRef)}
        class=${e}
        type=${this.type}
        enterkeyhint=${Ce(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        value=${Ce(this.value)}
      />
      <slot></slot>`}templateIcon(){return this.icon?I`<wui-icon
        data-input=${this.size}
        size="sm"
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){var e;this.dispatchEvent(new CustomEvent("inputChange",{detail:(e=this.inputElementRef.value)==null?void 0:e.value,bubbles:!0,composed:!0}))}};Rr.styles=[we,ct,rP];co([$()],Rr.prototype,"size",void 0);co([$()],Rr.prototype,"icon",void 0);co([$({type:Boolean})],Rr.prototype,"disabled",void 0);co([$()],Rr.prototype,"placeholder",void 0);co([$()],Rr.prototype,"type",void 0);co([$()],Rr.prototype,"keyHint",void 0);co([$()],Rr.prototype,"value",void 0);Rr=co([Z("wui-input-text")],Rr);const iP=X`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var Ch=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let ma=class extends K{constructor(){super(...arguments),this.disabled=!1}render(){return I`
      <wui-input-text
        placeholder="Email"
        icon="mail"
        size="md"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?I`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};ma.styles=[we,iP];Ch([$()],ma.prototype,"errorMessage",void 0);Ch([$({type:Boolean})],ma.prototype,"disabled",void 0);Ch([$()],ma.prototype,"value",void 0);ma=Ch([Z("wui-email-input")],ma);const oP=X`
  button {
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-fg-100);
    padding: var(--wui-spacing-2xs);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var lu=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Go=class extends K{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){return I`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};Go.styles=[we,ct,Ug,oP];lu([$()],Go.prototype,"size",void 0);lu([$({type:Boolean})],Go.prototype,"disabled",void 0);lu([$()],Go.prototype,"icon",void 0);lu([$()],Go.prototype,"iconColor",void 0);Go=lu([Z("wui-icon-link")],Go);const sP=X`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  button:active:enabled {
    background-color: var(--wui-color-fg-225);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }
  }
`;var _4=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let ef=class extends K{constructor(){super(...arguments),this.icon="copy"}render(){return I`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};ef.styles=[we,ct,sP];_4([$()],ef.prototype,"icon",void 0);ef=_4([Z("wui-input-element")],ef);const aP=X`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-005);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }
  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }
`;var Fg=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let yc=class extends K{constructor(){super(...arguments),this.disabled=!1,this.value=""}render(){return I`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
      value=${this.value}
    /> `}};yc.styles=[we,ct,aP];Fg([$({type:Boolean})],yc.prototype,"disabled",void 0);Fg([$({type:String})],yc.prototype,"value",void 0);yc=Fg([Z("wui-input-numeric")],yc);const lP=X`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-gray-glass-015);
  }
`;var Wg=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let vc=class extends K{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return I`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};vc.styles=[we,ct,lP];Wg([$({type:Boolean})],vc.prototype,"disabled",void 0);Wg([$()],vc.prototype,"color",void 0);vc=Wg([Z("wui-link")],vc);const cP=X`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button[data-loading='true'] > wui-icon {
    transition: opacity 200ms ease-in-out;
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var Fr=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Zn=class extends K{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return I`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${Ce(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if(this.variant==="image"&&this.imageSrc)return I`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if(this.iconVariant==="square"&&this.icon&&this.variant==="icon")return I`<wui-icon name=${this.icon}></wui-icon>`;if(this.variant==="icon"&&this.icon&&this.iconVariant){const e=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",n=this.iconVariant==="square-blue"?"mdl":"md",r=this.iconSize?this.iconSize:n;return I`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${r}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${n}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?I`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:I``}chevronTemplate(){return this.chevron?I`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};Zn.styles=[we,ct,cP];Fr([$()],Zn.prototype,"icon",void 0);Fr([$()],Zn.prototype,"iconSize",void 0);Fr([$()],Zn.prototype,"variant",void 0);Fr([$()],Zn.prototype,"iconVariant",void 0);Fr([$({type:Boolean})],Zn.prototype,"disabled",void 0);Fr([$()],Zn.prototype,"imageSrc",void 0);Fr([$()],Zn.prototype,"alt",void 0);Fr([$({type:Boolean})],Zn.prototype,"chevron",void 0);Fr([$({type:Boolean})],Zn.prototype,"loading",void 0);Zn=Fr([Z("wui-list-item")],Zn);var A1;(function(t){t.approve="approved",t.bought="bought",t.borrow="borrowed",t.burn="burnt",t.cancel="canceled",t.claim="claimed",t.deploy="deployed",t.deposit="deposited",t.execute="executed",t.mint="minted",t.receive="received",t.repay="repaid",t.send="sent",t.sell="sold",t.stake="staked",t.trade="swapped",t.unstake="unstaked",t.withdraw="withdrawn"})(A1||(A1={}));const uP=X`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
    z-index: -1;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`;var us=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let di=class extends K{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[e,n]=this.images,r=(e==null?void 0:e.type)==="NFT",i=n!=null&&n.url?n.type==="NFT":r,o=r?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)",s=i?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)";return this.style.cssText=`
    --local-left-border-radius: ${o};
    --local-right-border-radius: ${s};
    `,I`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[e,n]=this.images,r=e==null?void 0:e.type;return this.images.length===2&&(e!=null&&e.url||n!=null&&n.url)?I`<div class="swap-images-container">
        ${e!=null&&e.url?I`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
        ${n!=null&&n.url?I`<wui-image src=${n.url} alt="Transaction image"></wui-image>`:null}
      </div>`:e!=null&&e.url?I`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:r==="NFT"?I`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:I`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let e="accent-100",n;return n=this.getIcon(),this.status&&(e=this.getStatusColor()),n?I`
      <wui-icon-box
        size="xxs"
        iconColor=${e}
        backgroundColor=${e}
        background="opaque"
        icon=${n}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():this.type==="trade"?"swapHorizontalBold":this.type==="approve"?"checkmark":this.type==="cancel"?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};di.styles=[uP];us([$()],di.prototype,"type",void 0);us([$()],di.prototype,"status",void 0);us([$()],di.prototype,"direction",void 0);us([$({type:Boolean})],di.prototype,"onlyDirectionIcon",void 0);us([$({type:Array})],di.prototype,"images",void 0);us([$({type:Object})],di.prototype,"secondImage",void 0);di=us([Z("wui-transaction-visual")],di);const dP=X`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var uo=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Nr=class extends K{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[]}render(){return I`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${Ce(this.direction)}
          type=${this.type}
          onlyDirectionIcon=${Ce(this.onlyDirectionIcon)}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${A1[this.type]}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){var n;const e=(n=this.descriptions)==null?void 0:n[0];return e?I`
          <wui-text variant="small-500" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}templateSecondDescription(){var n;const e=(n=this.descriptions)==null?void 0:n[1];return e?I`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}};Nr.styles=[we,dP];uo([$()],Nr.prototype,"type",void 0);uo([$({type:Array})],Nr.prototype,"descriptions",void 0);uo([$()],Nr.prototype,"date",void 0);uo([$({type:Boolean})],Nr.prototype,"onlyDirectionIcon",void 0);uo([$()],Nr.prototype,"status",void 0);uo([$()],Nr.prototype,"direction",void 0);uo([$({type:Array})],Nr.prototype,"images",void 0);Nr=uo([Z("wui-transaction-list-item")],Nr);const fP=X`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;var hP=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let P1=class extends K{render(){return I`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};P1.styles=[we,fP];P1=hP([Z("wui-transaction-list-item-loader")],P1);const pP=X`
  :host {
    display: block;
    padding: 3.5px 5px !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }
`;var C4=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let tf=class extends K{constructor(){super(...arguments),this.variant="main"}render(){return this.dataset.variant=this.variant,I`
      <wui-text data-variant=${this.variant} variant="micro-700" color="inherit">
        <slot></slot>
      </wui-text>
    `}};tf.styles=[we,pP];C4([$()],tf.prototype,"variant",void 0);tf=C4([Z("wui-tag")],tf);const mP=X`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var br=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Dn=class extends K{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.installed=!1,this.disabled=!1,this.showAllWallets=!1}render(){return I`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?I` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?I` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?I`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?I`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.tagLabel&&this.tagVariant?I`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?I`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};Dn.styles=[we,ct,mP];br([$({type:Array})],Dn.prototype,"walletImages",void 0);br([$()],Dn.prototype,"imageSrc",void 0);br([$()],Dn.prototype,"name",void 0);br([$()],Dn.prototype,"tagLabel",void 0);br([$()],Dn.prototype,"tagVariant",void 0);br([$()],Dn.prototype,"icon",void 0);br([$()],Dn.prototype,"walletIcon",void 0);br([$({type:Boolean})],Dn.prototype,"installed",void 0);br([$({type:Boolean})],Dn.prototype,"disabled",void 0);br([$({type:Boolean})],Dn.prototype,"showAllWallets",void 0);Dn=br([Z("wui-list-wallet")],Dn);const gP=X`
  :host {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-010);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var S4=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let nf=class extends K{constructor(){super(...arguments),this.logo="google"}render(){return I`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};nf.styles=[we,gP];S4([$()],nf.prototype,"logo",void 0);nf=S4([Z("wui-logo")],nf);const wP=X`
  :host {
    display: block;
  }

  button {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var zg=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let bc=class extends K{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return I`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};bc.styles=[we,ct,wP];zg([$()],bc.prototype,"logo",void 0);zg([$({type:Boolean})],bc.prototype,"disabled",void 0);bc=zg([Z("wui-logo-select")],bc);const yP=X`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }
`;var Hg=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let xc=class extends K{constructor(){super(...arguments),this.imageSrc=void 0,this.disabled=!1}render(){return I`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.imageSrc?I`<wui-image src=${this.imageSrc}></wui-image>`:I`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};xc.styles=[we,ct,yP];Hg([$()],xc.prototype,"imageSrc",void 0);Hg([$({type:Boolean})],xc.prototype,"disabled",void 0);xc=Hg([Z("wui-network-button")],xc);const vP=X`
  :host {
    position: relative;
    display: block;
  }
`;var Sh=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let ga=class extends K{constructor(){super(...arguments),this.length=6,this.otp="",this.values=Array.from({length:this.length}).map(()=>""),this.numerics=[],this.shouldInputBeEnabled=e=>this.values.slice(0,e).every(r=>r!==""),this.handleKeyDown=(e,n)=>{const r=e.target,i=this.getInputElement(r),o=["ArrowLeft","ArrowRight","Shift","Delete"];if(!i)return;o.includes(e.key)&&e.preventDefault();const s=i.selectionStart;switch(e.key){case"ArrowLeft":s&&i.setSelectionRange(s+1,s+1),this.focusInputField("prev",n);break;case"ArrowRight":this.focusInputField("next",n);break;case"Shift":this.focusInputField("next",n);break;case"Delete":i.value===""?this.focusInputField("prev",n):this.updateInput(i,n,"");break;case"Backspace":i.value===""?this.focusInputField("prev",n):this.updateInput(i,n,"");break}},this.focusInputField=(e,n)=>{if(e==="next"){const r=n+1;if(!this.shouldInputBeEnabled(r))return;const i=this.numerics[r<this.length?r:n],o=i?this.getInputElement(i):void 0;o&&(o.disabled=!1,o.focus())}if(e==="prev"){const r=n-1,i=this.numerics[r>-1?r:n],o=i?this.getInputElement(i):void 0;o&&o.focus()}}}firstUpdated(){var n,r;this.otp&&(this.values=this.otp.split(""));const e=(n=this.shadowRoot)==null?void 0:n.querySelectorAll("wui-input-numeric");e&&(this.numerics=Array.from(e)),(r=this.numerics[0])==null||r.focus()}render(){return I`
      <wui-flex gap="xxs" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map((e,n)=>I`
            <wui-input-numeric
              @input=${r=>this.handleInput(r,n)}
              @keydown=${r=>this.handleKeyDown(r,n)}
              .disabled=${!this.shouldInputBeEnabled(n)}
              .value=${this.values[n]||""}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}updateInput(e,n,r){const i=this.numerics[n],o=e||(i?this.getInputElement(i):void 0);o&&(o.value=r,this.values=this.values.map((s,a)=>a===n?r:s))}handleInput(e,n){const r=e.target,i=this.getInputElement(r);if(i){const o=i.value;e.inputType==="insertFromPaste"?this.handlePaste(i,o,n):Ze.isNumber(o)&&e.data?(this.updateInput(i,n,e.data),this.focusInputField("next",n)):this.updateInput(i,n,"")}this.dispatchInputChangeEvent()}handlePaste(e,n,r){const i=n[0];if(i&&Ze.isNumber(i)){this.updateInput(e,r,i);const s=n.substring(1);if(r+1<this.length&&s.length){const a=this.numerics[r+1],l=a?this.getInputElement(a):void 0;l&&this.handlePaste(l,s,r+1)}else this.focusInputField("next",r)}else this.updateInput(e,r,"")}getInputElement(e){var n;return(n=e.shadowRoot)!=null&&n.querySelector("input")?e.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){const e=this.values.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:e,bubbles:!0,composed:!0}))}};ga.styles=[we,vP];Sh([$({type:Number})],ga.prototype,"length",void 0);Sh([$({type:String})],ga.prototype,"otp",void 0);Sh([ie()],ga.prototype,"values",void 0);ga=Sh([Z("wui-otp")],ga);var cu={},bP=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},T4={},Mn={};let Vg;const xP=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];Mn.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return e*4+17};Mn.getSymbolTotalCodewords=function(e){return xP[e]};Mn.getBCHDigit=function(t){let e=0;for(;t!==0;)e++,t>>>=1;return e};Mn.setToSJISFunction=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');Vg=e};Mn.isKanjiModeEnabled=function(){return typeof Vg<"u"};Mn.toSJIS=function(e){return Vg(e)};var Th={};(function(t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2};function e(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+n)}}t.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},t.from=function(r,i){if(t.isValid(r))return r;try{return e(r)}catch{return i}}})(Th);function A4(){this.buffer=[],this.length=0}A4.prototype={get:function(t){const e=Math.floor(t/8);return(this.buffer[e]>>>7-t%8&1)===1},put:function(t,e){for(let n=0;n<e;n++)this.putBit((t>>>e-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var EP=A4;function uu(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}uu.prototype.set=function(t,e,n,r){const i=t*this.size+e;this.data[i]=n,r&&(this.reservedBit[i]=!0)};uu.prototype.get=function(t,e){return this.data[t*this.size+e]};uu.prototype.xor=function(t,e,n){this.data[t*this.size+e]^=n};uu.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};var _P=uu,P4={};(function(t){const e=Mn.getSymbolSize;t.getRowColCoords=function(r){if(r===1)return[];const i=Math.floor(r/7)+2,o=e(r),s=o===145?26:Math.ceil((o-13)/(2*i-2))*2,a=[o-7];for(let l=1;l<i-1;l++)a[l]=a[l-1]-s;return a.push(6),a.reverse()},t.getPositions=function(r){const i=[],o=t.getRowColCoords(r),s=o.length;for(let a=0;a<s;a++)for(let l=0;l<s;l++)a===0&&l===0||a===0&&l===s-1||a===s-1&&l===0||i.push([o[a],o[l]]);return i}})(P4);var I4={};const CP=Mn.getSymbolSize,xv=7;I4.getPositions=function(e){const n=CP(e);return[[0,0],[n-xv,0],[0,n-xv]]};var $4={};(function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};t.isValid=function(i){return i!=null&&i!==""&&!isNaN(i)&&i>=0&&i<=7},t.from=function(i){return t.isValid(i)?parseInt(i,10):void 0},t.getPenaltyN1=function(i){const o=i.size;let s=0,a=0,l=0,c=null,u=null;for(let d=0;d<o;d++){a=l=0,c=u=null;for(let p=0;p<o;p++){let w=i.get(d,p);w===c?a++:(a>=5&&(s+=e.N1+(a-5)),c=w,a=1),w=i.get(p,d),w===u?l++:(l>=5&&(s+=e.N1+(l-5)),u=w,l=1)}a>=5&&(s+=e.N1+(a-5)),l>=5&&(s+=e.N1+(l-5))}return s},t.getPenaltyN2=function(i){const o=i.size;let s=0;for(let a=0;a<o-1;a++)for(let l=0;l<o-1;l++){const c=i.get(a,l)+i.get(a,l+1)+i.get(a+1,l)+i.get(a+1,l+1);(c===4||c===0)&&s++}return s*e.N2},t.getPenaltyN3=function(i){const o=i.size;let s=0,a=0,l=0;for(let c=0;c<o;c++){a=l=0;for(let u=0;u<o;u++)a=a<<1&2047|i.get(c,u),u>=10&&(a===1488||a===93)&&s++,l=l<<1&2047|i.get(u,c),u>=10&&(l===1488||l===93)&&s++}return s*e.N3},t.getPenaltyN4=function(i){let o=0;const s=i.data.length;for(let l=0;l<s;l++)o+=i.data[l];return Math.abs(Math.ceil(o*100/s/5)-10)*e.N4};function n(r,i,o){switch(r){case t.Patterns.PATTERN000:return(i+o)%2===0;case t.Patterns.PATTERN001:return i%2===0;case t.Patterns.PATTERN010:return o%3===0;case t.Patterns.PATTERN011:return(i+o)%3===0;case t.Patterns.PATTERN100:return(Math.floor(i/2)+Math.floor(o/3))%2===0;case t.Patterns.PATTERN101:return i*o%2+i*o%3===0;case t.Patterns.PATTERN110:return(i*o%2+i*o%3)%2===0;case t.Patterns.PATTERN111:return(i*o%3+(i+o)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}t.applyMask=function(i,o){const s=o.size;for(let a=0;a<s;a++)for(let l=0;l<s;l++)o.isReserved(l,a)||o.xor(l,a,n(i,l,a))},t.getBestMask=function(i,o){const s=Object.keys(t.Patterns).length;let a=0,l=1/0;for(let c=0;c<s;c++){o(c),t.applyMask(c,i);const u=t.getPenaltyN1(i)+t.getPenaltyN2(i)+t.getPenaltyN3(i)+t.getPenaltyN4(i);t.applyMask(c,i),u<l&&(l=u,a=c)}return a}})($4);var Ah={};const Ni=Th,Hu=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],Vu=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];Ah.getBlocksCount=function(e,n){switch(n){case Ni.L:return Hu[(e-1)*4+0];case Ni.M:return Hu[(e-1)*4+1];case Ni.Q:return Hu[(e-1)*4+2];case Ni.H:return Hu[(e-1)*4+3];default:return}};Ah.getTotalCodewordsCount=function(e,n){switch(n){case Ni.L:return Vu[(e-1)*4+0];case Ni.M:return Vu[(e-1)*4+1];case Ni.Q:return Vu[(e-1)*4+2];case Ni.H:return Vu[(e-1)*4+3];default:return}};var O4={},Ph={};const Il=new Uint8Array(512),rf=new Uint8Array(256);(function(){let e=1;for(let n=0;n<255;n++)Il[n]=e,rf[e]=n,e<<=1,e&256&&(e^=285);for(let n=255;n<512;n++)Il[n]=Il[n-255]})();Ph.log=function(e){if(e<1)throw new Error("log("+e+")");return rf[e]};Ph.exp=function(e){return Il[e]};Ph.mul=function(e,n){return e===0||n===0?0:Il[rf[e]+rf[n]]};(function(t){const e=Ph;t.mul=function(r,i){const o=new Uint8Array(r.length+i.length-1);for(let s=0;s<r.length;s++)for(let a=0;a<i.length;a++)o[s+a]^=e.mul(r[s],i[a]);return o},t.mod=function(r,i){let o=new Uint8Array(r);for(;o.length-i.length>=0;){const s=o[0];for(let l=0;l<i.length;l++)o[l]^=e.mul(i[l],s);let a=0;for(;a<o.length&&o[a]===0;)a++;o=o.slice(a)}return o},t.generateECPolynomial=function(r){let i=new Uint8Array([1]);for(let o=0;o<r;o++)i=t.mul(i,new Uint8Array([1,e.exp(o)]));return i}})(O4);const D4=O4;function qg(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}qg.prototype.initialize=function(e){this.degree=e,this.genPoly=D4.generateECPolynomial(this.degree)};qg.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const n=new Uint8Array(e.length+this.degree);n.set(e);const r=D4.mod(n,this.genPoly),i=this.degree-r.length;if(i>0){const o=new Uint8Array(this.degree);return o.set(r,i),o}return r};var SP=qg,k4={},fo={},Zg={};Zg.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40};var Wr={};const R4="[0-9]+",TP="[A-Z $%*+\\-./:]+";let Ec="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";Ec=Ec.replace(/u/g,"\\u");const AP="(?:(?![A-Z0-9 $%*+\\-./:]|"+Ec+`)(?:.|[\r
]))+`;Wr.KANJI=new RegExp(Ec,"g");Wr.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");Wr.BYTE=new RegExp(AP,"g");Wr.NUMERIC=new RegExp(R4,"g");Wr.ALPHANUMERIC=new RegExp(TP,"g");const PP=new RegExp("^"+Ec+"$"),IP=new RegExp("^"+R4+"$"),$P=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");Wr.testKanji=function(e){return PP.test(e)};Wr.testNumeric=function(e){return IP.test(e)};Wr.testAlphanumeric=function(e){return $P.test(e)};(function(t){const e=Zg,n=Wr;t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(o,s){if(!o.ccBits)throw new Error("Invalid mode: "+o);if(!e.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?o.ccBits[0]:s<27?o.ccBits[1]:o.ccBits[2]},t.getBestModeForData=function(o){return n.testNumeric(o)?t.NUMERIC:n.testAlphanumeric(o)?t.ALPHANUMERIC:n.testKanji(o)?t.KANJI:t.BYTE},t.toString=function(o){if(o&&o.id)return o.id;throw new Error("Invalid mode")},t.isValid=function(o){return o&&o.bit&&o.ccBits};function r(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+i)}}t.from=function(o,s){if(t.isValid(o))return o;try{return r(o)}catch{return s}}})(fo);(function(t){const e=Mn,n=Ah,r=Th,i=fo,o=Zg,s=7973,a=e.getBCHDigit(s);function l(p,w,y){for(let E=1;E<=40;E++)if(w<=t.getCapacity(E,y,p))return E}function c(p,w){return i.getCharCountIndicator(p,w)+4}function u(p,w){let y=0;return p.forEach(function(E){const C=c(E.mode,w);y+=C+E.getBitsLength()}),y}function d(p,w){for(let y=1;y<=40;y++)if(u(p,y)<=t.getCapacity(y,w,i.MIXED))return y}t.from=function(w,y){return o.isValid(w)?parseInt(w,10):y},t.getCapacity=function(w,y,E){if(!o.isValid(w))throw new Error("Invalid QR Code version");typeof E>"u"&&(E=i.BYTE);const C=e.getSymbolTotalCodewords(w),b=n.getTotalCodewordsCount(w,y),m=(C-b)*8;if(E===i.MIXED)return m;const v=m-c(E,w);switch(E){case i.NUMERIC:return Math.floor(v/10*3);case i.ALPHANUMERIC:return Math.floor(v/11*2);case i.KANJI:return Math.floor(v/13);case i.BYTE:default:return Math.floor(v/8)}},t.getBestVersionForData=function(w,y){let E;const C=r.from(y,r.M);if(Array.isArray(w)){if(w.length>1)return d(w,C);if(w.length===0)return 1;E=w[0]}else E=w;return l(E.mode,E.getLength(),C)},t.getEncodedBits=function(w){if(!o.isValid(w)||w<7)throw new Error("Invalid QR Code version");let y=w<<12;for(;e.getBCHDigit(y)-a>=0;)y^=s<<e.getBCHDigit(y)-a;return w<<12|y}})(k4);var N4={};const I1=Mn,M4=1335,OP=21522,Ev=I1.getBCHDigit(M4);N4.getEncodedBits=function(e,n){const r=e.bit<<3|n;let i=r<<10;for(;I1.getBCHDigit(i)-Ev>=0;)i^=M4<<I1.getBCHDigit(i)-Ev;return(r<<10|i)^OP};var U4={};const DP=fo;function wa(t){this.mode=DP.NUMERIC,this.data=t.toString()}wa.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)};wa.prototype.getLength=function(){return this.data.length};wa.prototype.getBitsLength=function(){return wa.getBitsLength(this.data.length)};wa.prototype.write=function(e){let n,r,i;for(n=0;n+3<=this.data.length;n+=3)r=this.data.substr(n,3),i=parseInt(r,10),e.put(i,10);const o=this.data.length-n;o>0&&(r=this.data.substr(n),i=parseInt(r,10),e.put(i,o*3+1))};var kP=wa;const RP=fo,z0=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function ya(t){this.mode=RP.ALPHANUMERIC,this.data=t}ya.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)};ya.prototype.getLength=function(){return this.data.length};ya.prototype.getBitsLength=function(){return ya.getBitsLength(this.data.length)};ya.prototype.write=function(e){let n;for(n=0;n+2<=this.data.length;n+=2){let r=z0.indexOf(this.data[n])*45;r+=z0.indexOf(this.data[n+1]),e.put(r,11)}this.data.length%2&&e.put(z0.indexOf(this.data[n]),6)};var NP=ya,MP=function(e){for(var n=[],r=e.length,i=0;i<r;i++){var o=e.charCodeAt(i);if(o>=55296&&o<=56319&&r>i+1){var s=e.charCodeAt(i+1);s>=56320&&s<=57343&&(o=(o-55296)*1024+s-56320+65536,i+=1)}if(o<128){n.push(o);continue}if(o<2048){n.push(o>>6|192),n.push(o&63|128);continue}if(o<55296||o>=57344&&o<65536){n.push(o>>12|224),n.push(o>>6&63|128),n.push(o&63|128);continue}if(o>=65536&&o<=1114111){n.push(o>>18|240),n.push(o>>12&63|128),n.push(o>>6&63|128),n.push(o&63|128);continue}n.push(239,191,189)}return new Uint8Array(n).buffer};const UP=MP,LP=fo;function va(t){this.mode=LP.BYTE,typeof t=="string"&&(t=UP(t)),this.data=new Uint8Array(t)}va.getBitsLength=function(e){return e*8};va.prototype.getLength=function(){return this.data.length};va.prototype.getBitsLength=function(){return va.getBitsLength(this.data.length)};va.prototype.write=function(t){for(let e=0,n=this.data.length;e<n;e++)t.put(this.data[e],8)};var BP=va;const jP=fo,FP=Mn;function ba(t){this.mode=jP.KANJI,this.data=t}ba.getBitsLength=function(e){return e*13};ba.prototype.getLength=function(){return this.data.length};ba.prototype.getBitsLength=function(){return ba.getBitsLength(this.data.length)};ba.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let n=FP.toSJIS(this.data[e]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw new Error("Invalid SJIS character: "+this.data[e]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),t.put(n,13)}};var WP=ba,L4={exports:{}};(function(t){var e={single_source_shortest_paths:function(n,r,i){var o={},s={};s[r]=0;var a=e.PriorityQueue.make();a.push(r,0);for(var l,c,u,d,p,w,y,E,C;!a.empty();){l=a.pop(),c=l.value,d=l.cost,p=n[c]||{};for(u in p)p.hasOwnProperty(u)&&(w=p[u],y=d+w,E=s[u],C=typeof s[u]>"u",(C||E>y)&&(s[u]=y,a.push(u,y),o[u]=c))}if(typeof i<"u"&&typeof s[i]>"u"){var b=["Could not find a path from ",r," to ",i,"."].join("");throw new Error(b)}return o},extract_shortest_path_from_predecessor_list:function(n,r){for(var i=[],o=r;o;)i.push(o),n[o],o=n[o];return i.reverse(),i},find_path:function(n,r,i){var o=e.single_source_shortest_paths(n,r,i);return e.extract_shortest_path_from_predecessor_list(o,i)},PriorityQueue:{make:function(n){var r=e.PriorityQueue,i={},o;n=n||{};for(o in r)r.hasOwnProperty(o)&&(i[o]=r[o]);return i.queue=[],i.sorter=n.sorter||r.default_sorter,i},default_sorter:function(n,r){return n.cost-r.cost},push:function(n,r){var i={value:n,cost:r};this.queue.push(i),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};t.exports=e})(L4);var zP=L4.exports;(function(t){const e=fo,n=kP,r=NP,i=BP,o=WP,s=Wr,a=Mn,l=zP;function c(b){return unescape(encodeURIComponent(b)).length}function u(b,m,v){const x=[];let _;for(;(_=b.exec(v))!==null;)x.push({data:_[0],index:_.index,mode:m,length:_[0].length});return x}function d(b){const m=u(s.NUMERIC,e.NUMERIC,b),v=u(s.ALPHANUMERIC,e.ALPHANUMERIC,b);let x,_;return a.isKanjiModeEnabled()?(x=u(s.BYTE,e.BYTE,b),_=u(s.KANJI,e.KANJI,b)):(x=u(s.BYTE_KANJI,e.BYTE,b),_=[]),m.concat(v,x,_).sort(function(f,A){return f.index-A.index}).map(function(f){return{data:f.data,mode:f.mode,length:f.length}})}function p(b,m){switch(m){case e.NUMERIC:return n.getBitsLength(b);case e.ALPHANUMERIC:return r.getBitsLength(b);case e.KANJI:return o.getBitsLength(b);case e.BYTE:return i.getBitsLength(b)}}function w(b){return b.reduce(function(m,v){const x=m.length-1>=0?m[m.length-1]:null;return x&&x.mode===v.mode?(m[m.length-1].data+=v.data,m):(m.push(v),m)},[])}function y(b){const m=[];for(let v=0;v<b.length;v++){const x=b[v];switch(x.mode){case e.NUMERIC:m.push([x,{data:x.data,mode:e.ALPHANUMERIC,length:x.length},{data:x.data,mode:e.BYTE,length:x.length}]);break;case e.ALPHANUMERIC:m.push([x,{data:x.data,mode:e.BYTE,length:x.length}]);break;case e.KANJI:m.push([x,{data:x.data,mode:e.BYTE,length:c(x.data)}]);break;case e.BYTE:m.push([{data:x.data,mode:e.BYTE,length:c(x.data)}])}}return m}function E(b,m){const v={},x={start:{}};let _=["start"];for(let S=0;S<b.length;S++){const f=b[S],A=[];for(let R=0;R<f.length;R++){const D=f[R],M=""+S+R;A.push(M),v[M]={node:D,lastCount:0},x[M]={};for(let ee=0;ee<_.length;ee++){const ne=_[ee];v[ne]&&v[ne].node.mode===D.mode?(x[ne][M]=p(v[ne].lastCount+D.length,D.mode)-p(v[ne].lastCount,D.mode),v[ne].lastCount+=D.length):(v[ne]&&(v[ne].lastCount=D.length),x[ne][M]=p(D.length,D.mode)+4+e.getCharCountIndicator(D.mode,m))}}_=A}for(let S=0;S<_.length;S++)x[_[S]].end=0;return{map:x,table:v}}function C(b,m){let v;const x=e.getBestModeForData(b);if(v=e.from(m,x),v!==e.BYTE&&v.bit<x.bit)throw new Error('"'+b+'" cannot be encoded with mode '+e.toString(v)+`.
 Suggested mode is: `+e.toString(x));switch(v===e.KANJI&&!a.isKanjiModeEnabled()&&(v=e.BYTE),v){case e.NUMERIC:return new n(b);case e.ALPHANUMERIC:return new r(b);case e.KANJI:return new o(b);case e.BYTE:return new i(b)}}t.fromArray=function(m){return m.reduce(function(v,x){return typeof x=="string"?v.push(C(x,null)):x.data&&v.push(C(x.data,x.mode)),v},[])},t.fromString=function(m,v){const x=d(m,a.isKanjiModeEnabled()),_=y(x),S=E(_,v),f=l.find_path(S.map,"start","end"),A=[];for(let R=1;R<f.length-1;R++)A.push(S.table[f[R]].node);return t.fromArray(w(A))},t.rawSplit=function(m){return t.fromArray(d(m,a.isKanjiModeEnabled()))}})(U4);const Ih=Mn,H0=Th,HP=EP,VP=_P,qP=P4,ZP=I4,$1=$4,O1=Ah,GP=SP,of=k4,KP=N4,YP=fo,V0=U4;function QP(t,e){const n=t.size,r=ZP.getPositions(e);for(let i=0;i<r.length;i++){const o=r[i][0],s=r[i][1];for(let a=-1;a<=7;a++)if(!(o+a<=-1||n<=o+a))for(let l=-1;l<=7;l++)s+l<=-1||n<=s+l||(a>=0&&a<=6&&(l===0||l===6)||l>=0&&l<=6&&(a===0||a===6)||a>=2&&a<=4&&l>=2&&l<=4?t.set(o+a,s+l,!0,!0):t.set(o+a,s+l,!1,!0))}}function XP(t){const e=t.size;for(let n=8;n<e-8;n++){const r=n%2===0;t.set(n,6,r,!0),t.set(6,n,r,!0)}}function JP(t,e){const n=qP.getPositions(e);for(let r=0;r<n.length;r++){const i=n[r][0],o=n[r][1];for(let s=-2;s<=2;s++)for(let a=-2;a<=2;a++)s===-2||s===2||a===-2||a===2||s===0&&a===0?t.set(i+s,o+a,!0,!0):t.set(i+s,o+a,!1,!0)}}function eI(t,e){const n=t.size,r=of.getEncodedBits(e);let i,o,s;for(let a=0;a<18;a++)i=Math.floor(a/3),o=a%3+n-8-3,s=(r>>a&1)===1,t.set(i,o,s,!0),t.set(o,i,s,!0)}function q0(t,e,n){const r=t.size,i=KP.getEncodedBits(e,n);let o,s;for(o=0;o<15;o++)s=(i>>o&1)===1,o<6?t.set(o,8,s,!0):o<8?t.set(o+1,8,s,!0):t.set(r-15+o,8,s,!0),o<8?t.set(8,r-o-1,s,!0):o<9?t.set(8,15-o-1+1,s,!0):t.set(8,15-o-1,s,!0);t.set(r-8,8,1,!0)}function tI(t,e){const n=t.size;let r=-1,i=n-1,o=7,s=0;for(let a=n-1;a>0;a-=2)for(a===6&&a--;;){for(let l=0;l<2;l++)if(!t.isReserved(i,a-l)){let c=!1;s<e.length&&(c=(e[s]>>>o&1)===1),t.set(i,a-l,c),o--,o===-1&&(s++,o=7)}if(i+=r,i<0||n<=i){i-=r,r=-r;break}}}function nI(t,e,n){const r=new HP;n.forEach(function(l){r.put(l.mode.bit,4),r.put(l.getLength(),YP.getCharCountIndicator(l.mode,t)),l.write(r)});const i=Ih.getSymbolTotalCodewords(t),o=O1.getTotalCodewordsCount(t,e),s=(i-o)*8;for(r.getLengthInBits()+4<=s&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);const a=(s-r.getLengthInBits())/8;for(let l=0;l<a;l++)r.put(l%2?17:236,8);return rI(r,t,e)}function rI(t,e,n){const r=Ih.getSymbolTotalCodewords(e),i=O1.getTotalCodewordsCount(e,n),o=r-i,s=O1.getBlocksCount(e,n),a=r%s,l=s-a,c=Math.floor(r/s),u=Math.floor(o/s),d=u+1,p=c-u,w=new GP(p);let y=0;const E=new Array(s),C=new Array(s);let b=0;const m=new Uint8Array(t.buffer);for(let f=0;f<s;f++){const A=f<l?u:d;E[f]=m.slice(y,y+A),C[f]=w.encode(E[f]),y+=A,b=Math.max(b,A)}const v=new Uint8Array(r);let x=0,_,S;for(_=0;_<b;_++)for(S=0;S<s;S++)_<E[S].length&&(v[x++]=E[S][_]);for(_=0;_<p;_++)for(S=0;S<s;S++)v[x++]=C[S][_];return v}function iI(t,e,n,r){let i;if(Array.isArray(t))i=V0.fromArray(t);else if(typeof t=="string"){let c=e;if(!c){const u=V0.rawSplit(t);c=of.getBestVersionForData(u,n)}i=V0.fromString(t,c||40)}else throw new Error("Invalid data");const o=of.getBestVersionForData(i,n);if(!o)throw new Error("The amount of data is too big to be stored in a QR Code");if(!e)e=o;else if(e<o)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+o+`.
`);const s=nI(e,n,i),a=Ih.getSymbolSize(e),l=new VP(a);return QP(l,e),XP(l),JP(l,e),q0(l,n,0),e>=7&&eI(l,e),tI(l,s),isNaN(r)&&(r=$1.getBestMask(l,q0.bind(null,l,n))),$1.applyMask(r,l),q0(l,n,r),{modules:l,version:e,errorCorrectionLevel:n,maskPattern:r,segments:i}}T4.create=function(e,n){if(typeof e>"u"||e==="")throw new Error("No input text");let r=H0.M,i,o;return typeof n<"u"&&(r=H0.from(n.errorCorrectionLevel,H0.M),i=of.from(n.version),o=$1.from(n.maskPattern),n.toSJISFunc&&Ih.setToSJISFunction(n.toSJISFunc)),iI(e,i,r,o)};var B4={},Gg={};(function(t){function e(n){if(typeof n=="number"&&(n=n.toString()),typeof n!="string")throw new Error("Color should be defined as hex string");let r=n.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+n);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(o){return[o,o]}))),r.length===6&&r.push("F","F");const i=parseInt(r.join(""),16);return{r:i>>24&255,g:i>>16&255,b:i>>8&255,a:i&255,hex:"#"+r.slice(0,6).join("")}}t.getOptions=function(r){r||(r={}),r.color||(r.color={});const i=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,o=r.width&&r.width>=21?r.width:void 0,s=r.scale||4;return{width:o,scale:o?4:s,margin:i,color:{dark:e(r.color.dark||"#000000ff"),light:e(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},t.getScale=function(r,i){return i.width&&i.width>=r+i.margin*2?i.width/(r+i.margin*2):i.scale},t.getImageWidth=function(r,i){const o=t.getScale(r,i);return Math.floor((r+i.margin*2)*o)},t.qrToImageData=function(r,i,o){const s=i.modules.size,a=i.modules.data,l=t.getScale(s,o),c=Math.floor((s+o.margin*2)*l),u=o.margin*l,d=[o.color.light,o.color.dark];for(let p=0;p<c;p++)for(let w=0;w<c;w++){let y=(p*c+w)*4,E=o.color.light;if(p>=u&&w>=u&&p<c-u&&w<c-u){const C=Math.floor((p-u)/l),b=Math.floor((w-u)/l);E=d[a[C*s+b]?1:0]}r[y++]=E.r,r[y++]=E.g,r[y++]=E.b,r[y]=E.a}}})(Gg);(function(t){const e=Gg;function n(i,o,s){i.clearRect(0,0,o.width,o.height),o.style||(o.style={}),o.height=s,o.width=s,o.style.height=s+"px",o.style.width=s+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}t.render=function(o,s,a){let l=a,c=s;typeof l>"u"&&(!s||!s.getContext)&&(l=s,s=void 0),s||(c=r()),l=e.getOptions(l);const u=e.getImageWidth(o.modules.size,l),d=c.getContext("2d"),p=d.createImageData(u,u);return e.qrToImageData(p.data,o,l),n(d,c,u),d.putImageData(p,0,0),c},t.renderToDataURL=function(o,s,a){let l=a;typeof l>"u"&&(!s||!s.getContext)&&(l=s,s=void 0),l||(l={});const c=t.render(o,s,l),u=l.type||"image/png",d=l.rendererOpts||{};return c.toDataURL(u,d.quality)}})(B4);var j4={};const oI=Gg;function _v(t,e){const n=t.a/255,r=e+'="'+t.hex+'"';return n<1?r+" "+e+'-opacity="'+n.toFixed(2).slice(1)+'"':r}function Z0(t,e,n){let r=t+e;return typeof n<"u"&&(r+=" "+n),r}function sI(t,e,n){let r="",i=0,o=!1,s=0;for(let a=0;a<t.length;a++){const l=Math.floor(a%e),c=Math.floor(a/e);!l&&!o&&(o=!0),t[a]?(s++,a>0&&l>0&&t[a-1]||(r+=o?Z0("M",l+n,.5+c+n):Z0("m",i,0),i=0,o=!1),l+1<e&&t[a+1]||(r+=Z0("h",s),s=0)):i++}return r}j4.render=function(e,n,r){const i=oI.getOptions(n),o=e.modules.size,s=e.modules.data,a=o+i.margin*2,l=i.color.light.a?"<path "+_v(i.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",c="<path "+_v(i.color.dark,"stroke")+' d="'+sI(s,o,i.margin)+'"/>',u='viewBox="0 0 '+a+" "+a+'"',p='<svg xmlns="http://www.w3.org/2000/svg" '+(i.width?'width="'+i.width+'" height="'+i.width+'" ':"")+u+' shape-rendering="crispEdges">'+l+c+`</svg>
`;return typeof r=="function"&&r(null,p),p};const aI=bP,D1=T4,F4=B4,lI=j4;function Kg(t,e,n,r,i){const o=[].slice.call(arguments,1),s=o.length,a=typeof o[s-1]=="function";if(!a&&!aI())throw new Error("Callback required as last argument");if(a){if(s<2)throw new Error("Too few arguments provided");s===2?(i=n,n=e,e=r=void 0):s===3&&(e.getContext&&typeof i>"u"?(i=r,r=void 0):(i=r,r=n,n=e,e=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(n=e,e=r=void 0):s===2&&!e.getContext&&(r=n,n=e,e=void 0),new Promise(function(l,c){try{const u=D1.create(n,r);l(t(u,e,r))}catch(u){c(u)}})}try{const l=D1.create(n,r);i(null,t(l,e,r))}catch(l){i(l)}}cu.create=D1.create;cu.toCanvas=Kg.bind(null,F4.render);cu.toDataURL=Kg.bind(null,F4.renderToDataURL);cu.toString=Kg.bind(null,function(t,e,n){return lI.render(t,n)});const cI=.1,Cv=2.5,Vr=7;function G0(t,e,n){return t===e?!1:(t-e<0?e-t:t-e)<=n+cI}function uI(t,e){const n=Array.prototype.slice.call(cu.create(t,{errorCorrectionLevel:e}).modules.data,0),r=Math.sqrt(n.length);return n.reduce((i,o,s)=>(s%r===0?i.push([o]):i[i.length-1].push(o))&&i,[])}const dI={generate(t,e,n){const r="#141414",i="transparent",s=[],a=uI(t,"Q"),l=e/a.length,c=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];c.forEach(({x:E,y:C})=>{const b=(a.length-Vr)*l*E,m=(a.length-Vr)*l*C,v=.45;for(let x=0;x<c.length;x+=1){const _=l*(Vr-x*2);s.push(te`
            <rect
              fill=${x===2?r:i}
              width=${x===0?_-5:_}
              rx= ${x===0?(_-5)*v:_*v}
              ry= ${x===0?(_-5)*v:_*v}
              stroke=${r}
              stroke-width=${x===0?5:0}
              height=${x===0?_-5:_}
              x= ${x===0?m+l*x+5/2:m+l*x}
              y= ${x===0?b+l*x+5/2:b+l*x}
            />
          `)}});const u=Math.floor((n+25)/l),d=a.length/2-u/2,p=a.length/2+u/2-1,w=[];a.forEach((E,C)=>{E.forEach((b,m)=>{if(a[C][m]&&!(C<Vr&&m<Vr||C>a.length-(Vr+1)&&m<Vr||C<Vr&&m>a.length-(Vr+1))&&!(C>d&&C<p&&m>d&&m<p)){const v=C*l+l/2,x=m*l+l/2;w.push([v,x])}})});const y={};return w.forEach(([E,C])=>{var b;y[E]?(b=y[E])==null||b.push(C):y[E]=[C]}),Object.entries(y).map(([E,C])=>{const b=C.filter(m=>C.every(v=>!G0(m,v,l)));return[Number(E),b]}).forEach(([E,C])=>{C.forEach(b=>{s.push(te`<circle cx=${E} cy=${b} fill=${r} r=${l/Cv} />`)})}),Object.entries(y).filter(([E,C])=>C.length>1).map(([E,C])=>{const b=C.filter(m=>C.some(v=>G0(m,v,l)));return[Number(E),b]}).map(([E,C])=>{C.sort((m,v)=>m<v?-1:1);const b=[];for(const m of C){const v=b.find(x=>x.some(_=>G0(m,_,l)));v?v.push(m):b.push([m])}return[E,b.map(m=>[m[0],m[m.length-1]])]}).forEach(([E,C])=>{C.forEach(([b,m])=>{s.push(te`
              <line
                x1=${E}
                x2=${E}
                y1=${b}
                y2=${m}
                stroke=${r}
                stroke-width=${l/(Cv/2)}
                stroke-linecap="round"
              />
            `)})}),s}},fI=X`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var Fa=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Ji=class extends K{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0}render(){return this.dataset.theme=this.theme,this.style.cssText=`--local-size: ${this.size}px`,I`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const e=this.theme==="light"?this.size:this.size-32;return te`
      <svg height=${e} width=${e}>
        ${dI.generate(this.uri,e,e/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?I`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:I`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};Ji.styles=[we,fI];Fa([$()],Ji.prototype,"uri",void 0);Fa([$({type:Number})],Ji.prototype,"size",void 0);Fa([$()],Ji.prototype,"theme",void 0);Fa([$()],Ji.prototype,"imageSrc",void 0);Fa([$()],Ji.prototype,"alt",void 0);Ji=Fa([Z("wui-qr-code")],Ji);const hI=X`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var pI=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let k1=class extends K{constructor(){super(...arguments),this.inputComponentRef=Eh()}render(){return I`
      <wui-input-text
        ${_h(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const e=this.inputComponentRef.value,n=e==null?void 0:e.inputElementRef.value;n&&(n.value="",n.focus(),n.dispatchEvent(new Event("input")))}};k1.styles=[we,hI];k1=pI([Z("wui-search-bar")],k1);const mI=X`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }
`;var du=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Ko=class extends K{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message=""}render(){return I`
      <wui-icon-box
        size="sm"
        iconSize="xs"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
        background="opaque"
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};Ko.styles=[we,mI];du([$()],Ko.prototype,"backgroundColor",void 0);du([$()],Ko.prototype,"iconColor",void 0);du([$()],Ko.prototype,"icon",void 0);du([$()],Ko.prototype,"message",void 0);Ko=du([Z("wui-snackbar")],Ko);const gI=X`
  :host {
    display: inline-flex;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  button {
    width: var(--local-tab-width);
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var ho=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Mr=class extends K{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.activeTab=0,this.localTabWidth="100px",this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((e,n)=>{const r=n===this.activeTab;return I`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(n)}
          data-active=${r}
        >
          <wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,n){const r=this.buttons[this.activeTab],i=this.buttons[e],o=r==null?void 0:r.querySelector("wui-text"),s=i==null?void 0:i.querySelector("wui-text"),a=i==null?void 0:i.getBoundingClientRect(),l=s==null?void 0:s.getBoundingClientRect();r&&o&&!n&&e!==this.activeTab&&(o.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),r.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),i&&a&&l&&s&&(e!==this.activeTab||n)&&(this.localTabWidth=`${Math.round(a.width+l.width)+6}px`,i.animate([{width:`${a.width+l.width}px`}],{duration:n?0:500,fill:"forwards",easing:"ease"}),s.animate([{opacity:1}],{duration:n?0:125,delay:n?0:200,fill:"forwards",easing:"ease"}))}};Mr.styles=[we,ct,gI];ho([$({type:Array})],Mr.prototype,"tabs",void 0);ho([$()],Mr.prototype,"onTabChange",void 0);ho([$({type:Array})],Mr.prototype,"buttons",void 0);ho([$({type:Boolean})],Mr.prototype,"disabled",void 0);ho([ie()],Mr.prototype,"activeTab",void 0);ho([ie()],Mr.prototype,"localTabWidth",void 0);ho([ie()],Mr.prototype,"isDense",void 0);Mr=ho([Z("wui-tabs")],Mr);const wI=X`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    background-color: var(--wui-color-fg-100);
    color: var(--wui-color-bg-100);
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var Yg=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let _c=class extends K{constructor(){super(...arguments),this.placement="top",this.message=""}render(){return I`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name="cursor"
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};_c.styles=[we,ct,wI];Yg([$()],_c.prototype,"placement",void 0);Yg([$()],_c.prototype,"message",void 0);_c=Yg([Z("wui-tooltip")],_c);const yI=X`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var $h=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let xa=class extends K{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"};`,I`${this.templateVisual()}`}templateVisual(){return this.imageSrc?I`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:I`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};xa.styles=[we,yI];$h([$()],xa.prototype,"imageSrc",void 0);$h([$()],xa.prototype,"alt",void 0);$h([$({type:Boolean})],xa.prototype,"borderRadiusFull",void 0);xa=$h([Z("wui-visual-thumbnail")],xa);const vI=X`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-accent-glass-015);
  }

  button:hover {
    background-color: var(--wui-accent-glass-010) !important;
  }

  button:active {
    background-color: var(--wui-accent-glass-020) !important;
  }
`;var Oh=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Ea=class extends K{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return I`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `}};Ea.styles=[we,ct,vI];Oh([$()],Ea.prototype,"label",void 0);Oh([$()],Ea.prototype,"description",void 0);Oh([$()],Ea.prototype,"icon",void 0);Ea=Oh([Z("wui-notice-card")],Ea);const bI=X`
  button {
    height: auto;
    position: relative;
    flex-direction: column;
    gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  .overflowedContent {
    width: 100%;
    overflow: hidden;
  }

  .overflowedContent[data-active='false']:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, var(--wui-color-bg-200), transparent);
    border-bottom-left-radius: var(--wui-border-radius-xs);
    border-bottom-right-radius: var(--wui-border-radius-xs);
  }

  .heightContent {
    max-height: 100px;
  }

  pre {
    text-align: left;
    white-space: pre-wrap;
    height: auto;
    overflow-x: auto;
    overflow-wrap: anywhere;
  }
`;var Qg=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const K0=100;let Cc=class extends K{constructor(){super(...arguments),this.textTitle="",this.overflowedContent="",this.toggled=!1,this.enableAccordion=!1,this.scrollElement=void 0,this.scrollHeightElement=0}firstUpdated(){setTimeout(()=>{var n;const e=(n=this.shadowRoot)==null?void 0:n.querySelector(".heightContent");if(e){this.scrollElement=e;const r=e==null?void 0:e.scrollHeight;r&&r>K0&&(this.enableAccordion=!0,this.scrollHeightElement=r,this.requestUpdate())}},0)}render(){return I`
      <button ontouchstart @click=${()=>this.onClick()}>
        <wui-flex justifyContent="space-between" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-100">${this.textTitle}</wui-text>
          ${this.chevronTemplate()}
        </wui-flex>
        <div
          data-active=${this.enableAccordion?!!this.toggled:!0}
          class="overflowedContent"
        >
          <div class="heightContent">
            <wui-text variant="paragraph-400" color="fg-200">
              <pre>${this.overflowedContent}</pre>
            </wui-text>
          </div>
        </div>
      </button>
    `}onClick(){var n;const e=(n=this.shadowRoot)==null?void 0:n.querySelector("wui-icon");this.enableAccordion&&(this.toggled=!this.toggled,this.requestUpdate(),this.scrollElement&&this.scrollElement.animate([{maxHeight:this.toggled?`${K0}px`:`${this.scrollHeightElement}px`},{maxHeight:this.toggled?`${this.scrollHeightElement}px`:`${K0}px`}],{duration:300,fill:"forwards",easing:"ease"}),e&&e.animate([{transform:this.toggled?"rotate(0deg)":"rotate(180deg)"},{transform:this.toggled?"rotate(180deg)":"rotate(0deg)"}],{duration:300,fill:"forwards",easing:"ease"}))}chevronTemplate(){return this.enableAccordion?I` <wui-icon color="fg-100" size="sm" name="chevronBottom"></wui-icon>`:null}};Cc.styles=[we,ct,bI];Qg([$()],Cc.prototype,"textTitle",void 0);Qg([$()],Cc.prototype,"overflowedContent",void 0);Cc=Qg([Z("wui-list-accordion")],Cc);const xI=X`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var Dh=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let _a=class extends K{constructor(){super(...arguments),this.imageSrc=void 0,this.textTitle="",this.textValue=void 0}render(){return I`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color=${this.textValue?"fg-200":"fg-100"}>
          ${this.textTitle}
        </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `}templateContent(){return this.imageSrc?I`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`:this.textValue?I` <wui-text variant="paragraph-400" color="fg-100"> ${this.textValue} </wui-text>`:I`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};_a.styles=[we,ct,xI];Dh([$()],_a.prototype,"imageSrc",void 0);Dh([$()],_a.prototype,"textTitle",void 0);Dh([$()],_a.prototype,"textValue",void 0);_a=Dh([Z("wui-list-content")],_a);const EI=X`
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--wui-spacing-l);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var fu=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Yo=class extends K{constructor(){super(...arguments),this.amount="",this.networkCurreny="",this.networkImageUrl="",this.receiverAddress=""}render(){return I`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">Sending</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">
            ${this.amount} ${this.networkCurreny}
          </wui-text>
          ${this.templateNetworkVisual()}
        </wui-flex>
      </wui-flex>
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">To</wui-text>
        <wui-chip
          icon="externalLink"
          variant="shadeSmall"
          href=${this.receiverAddress}
          title=${this.receiverAddress}
        ></wui-chip>
      </wui-flex>
    `}templateNetworkVisual(){return this.networkImageUrl?I`<wui-image src=${this.networkImageUrl} alt="Network Image"></wui-image>`:I`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};Yo.styles=[we,ct,EI];fu([$()],Yo.prototype,"amount",void 0);fu([$()],Yo.prototype,"networkCurreny",void 0);fu([$()],Yo.prototype,"networkImageUrl",void 0);fu([$()],Yo.prototype,"receiverAddress",void 0);Yo=fu([Z("wui-list-wallet-transaction")],Yo);const _I=X`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var Yn=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let yn=class extends K{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&Ze.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&Ze.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&Ze.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&Ze.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&Ze.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&Ze.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&Ze.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&Ze.getSpacingStyles(this.margin,3)};
    `,I`<slot></slot>`}};yn.styles=[we,_I];Yn([$()],yn.prototype,"gridTemplateRows",void 0);Yn([$()],yn.prototype,"gridTemplateColumns",void 0);Yn([$()],yn.prototype,"justifyItems",void 0);Yn([$()],yn.prototype,"alignItems",void 0);Yn([$()],yn.prototype,"justifyContent",void 0);Yn([$()],yn.prototype,"alignContent",void 0);Yn([$()],yn.prototype,"columnGap",void 0);Yn([$()],yn.prototype,"rowGap",void 0);Yn([$()],yn.prototype,"gap",void 0);Yn([$()],yn.prototype,"padding",void 0);Yn([$()],yn.prototype,"margin",void 0);yn=Yn([Z("wui-grid")],yn);const CI=X`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
  }
`;var W4=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let sf=class extends K{constructor(){super(...arguments),this.text=""}render(){return I`${this.template()}`}template(){return this.text?I`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};sf.styles=[we,CI];W4([$()],sf.prototype,"text",void 0);sf=W4([Z("wui-separator")],sf);var z4={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(am,function(){var n=1e3,r=6e4,i=36e5,o="millisecond",s="second",a="minute",l="hour",c="day",u="week",d="month",p="quarter",w="year",y="date",E="Invalid Date",C=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,b=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(H){var F=["th","st","nd","rd"],B=H%100;return"["+H+(F[(B-20)%10]||F[B]||F[0])+"]"}},v=function(H,F,B){var j=String(H);return!j||j.length>=F?H:""+Array(F+1-j.length).join(B)+H},x={s:v,z:function(H){var F=-H.utcOffset(),B=Math.abs(F),j=Math.floor(B/60),k=B%60;return(F<=0?"+":"-")+v(j,2,"0")+":"+v(k,2,"0")},m:function H(F,B){if(F.date()<B.date())return-H(B,F);var j=12*(B.year()-F.year())+(B.month()-F.month()),k=F.clone().add(j,d),W=B-k<0,z=F.clone().add(j+(W?-1:1),d);return+(-(j+(B-k)/(W?k-z:z-k))||0)},a:function(H){return H<0?Math.ceil(H)||0:Math.floor(H)},p:function(H){return{M:d,y:w,w:u,d:c,D:y,h:l,m:a,s,ms:o,Q:p}[H]||String(H||"").toLowerCase().replace(/s$/,"")},u:function(H){return H===void 0}},_="en",S={};S[_]=m;var f="$isDayjsObject",A=function(H){return H instanceof ee||!(!H||!H[f])},R=function H(F,B,j){var k;if(!F)return _;if(typeof F=="string"){var W=F.toLowerCase();S[W]&&(k=W),B&&(S[W]=B,k=W);var z=F.split("-");if(!k&&z.length>1)return H(z[0])}else{var G=F.name;S[G]=F,k=G}return!j&&k&&(_=k),k||!j&&_},D=function(H,F){if(A(H))return H.clone();var B=typeof F=="object"?F:{};return B.date=H,B.args=arguments,new ee(B)},M=x;M.l=R,M.i=A,M.w=function(H,F){return D(H,{locale:F.$L,utc:F.$u,x:F.$x,$offset:F.$offset})};var ee=function(){function H(B){this.$L=R(B.locale,null,!0),this.parse(B),this.$x=this.$x||B.x||{},this[f]=!0}var F=H.prototype;return F.parse=function(B){this.$d=function(j){var k=j.date,W=j.utc;if(k===null)return new Date(NaN);if(M.u(k))return new Date;if(k instanceof Date)return new Date(k);if(typeof k=="string"&&!/Z$/i.test(k)){var z=k.match(C);if(z){var G=z[2]-1||0,J=(z[7]||"0").substring(0,3);return W?new Date(Date.UTC(z[1],G,z[3]||1,z[4]||0,z[5]||0,z[6]||0,J)):new Date(z[1],G,z[3]||1,z[4]||0,z[5]||0,z[6]||0,J)}}return new Date(k)}(B),this.init()},F.init=function(){var B=this.$d;this.$y=B.getFullYear(),this.$M=B.getMonth(),this.$D=B.getDate(),this.$W=B.getDay(),this.$H=B.getHours(),this.$m=B.getMinutes(),this.$s=B.getSeconds(),this.$ms=B.getMilliseconds()},F.$utils=function(){return M},F.isValid=function(){return this.$d.toString()!==E},F.isSame=function(B,j){var k=D(B);return this.startOf(j)<=k&&k<=this.endOf(j)},F.isAfter=function(B,j){return D(B)<this.startOf(j)},F.isBefore=function(B,j){return this.endOf(j)<D(B)},F.$g=function(B,j,k){return M.u(B)?this[j]:this.set(k,B)},F.unix=function(){return Math.floor(this.valueOf()/1e3)},F.valueOf=function(){return this.$d.getTime()},F.startOf=function(B,j){var k=this,W=!!M.u(j)||j,z=M.p(B),G=function(Ie,ve){var ke=M.w(k.$u?Date.UTC(k.$y,ve,Ie):new Date(k.$y,ve,Ie),k);return W?ke:ke.endOf(c)},J=function(Ie,ve){return M.w(k.toDate()[Ie].apply(k.toDate("s"),(W?[0,0,0,0]:[23,59,59,999]).slice(ve)),k)},Y=this.$W,oe=this.$M,fe=this.$D,pe="set"+(this.$u?"UTC":"");switch(z){case w:return W?G(1,0):G(31,11);case d:return W?G(1,oe):G(0,oe+1);case u:var ye=this.$locale().weekStart||0,_e=(Y<ye?Y+7:Y)-ye;return G(W?fe-_e:fe+(6-_e),oe);case c:case y:return J(pe+"Hours",0);case l:return J(pe+"Minutes",1);case a:return J(pe+"Seconds",2);case s:return J(pe+"Milliseconds",3);default:return this.clone()}},F.endOf=function(B){return this.startOf(B,!1)},F.$set=function(B,j){var k,W=M.p(B),z="set"+(this.$u?"UTC":""),G=(k={},k[c]=z+"Date",k[y]=z+"Date",k[d]=z+"Month",k[w]=z+"FullYear",k[l]=z+"Hours",k[a]=z+"Minutes",k[s]=z+"Seconds",k[o]=z+"Milliseconds",k)[W],J=W===c?this.$D+(j-this.$W):j;if(W===d||W===w){var Y=this.clone().set(y,1);Y.$d[G](J),Y.init(),this.$d=Y.set(y,Math.min(this.$D,Y.daysInMonth())).$d}else G&&this.$d[G](J);return this.init(),this},F.set=function(B,j){return this.clone().$set(B,j)},F.get=function(B){return this[M.p(B)]()},F.add=function(B,j){var k,W=this;B=Number(B);var z=M.p(j),G=function(oe){var fe=D(W);return M.w(fe.date(fe.date()+Math.round(oe*B)),W)};if(z===d)return this.set(d,this.$M+B);if(z===w)return this.set(w,this.$y+B);if(z===c)return G(1);if(z===u)return G(7);var J=(k={},k[a]=r,k[l]=i,k[s]=n,k)[z]||1,Y=this.$d.getTime()+B*J;return M.w(Y,this)},F.subtract=function(B,j){return this.add(-1*B,j)},F.format=function(B){var j=this,k=this.$locale();if(!this.isValid())return k.invalidDate||E;var W=B||"YYYY-MM-DDTHH:mm:ssZ",z=M.z(this),G=this.$H,J=this.$m,Y=this.$M,oe=k.weekdays,fe=k.months,pe=k.meridiem,ye=function(ve,ke,Le,Me){return ve&&(ve[ke]||ve(j,W))||Le[ke].slice(0,Me)},_e=function(ve){return M.s(G%12||12,ve,"0")},Ie=pe||function(ve,ke,Le){var Me=ve<12?"AM":"PM";return Le?Me.toLowerCase():Me};return W.replace(b,function(ve,ke){return ke||function(Le){switch(Le){case"YY":return String(j.$y).slice(-2);case"YYYY":return M.s(j.$y,4,"0");case"M":return Y+1;case"MM":return M.s(Y+1,2,"0");case"MMM":return ye(k.monthsShort,Y,fe,3);case"MMMM":return ye(fe,Y);case"D":return j.$D;case"DD":return M.s(j.$D,2,"0");case"d":return String(j.$W);case"dd":return ye(k.weekdaysMin,j.$W,oe,2);case"ddd":return ye(k.weekdaysShort,j.$W,oe,3);case"dddd":return oe[j.$W];case"H":return String(G);case"HH":return M.s(G,2,"0");case"h":return _e(1);case"hh":return _e(2);case"a":return Ie(G,J,!0);case"A":return Ie(G,J,!1);case"m":return String(J);case"mm":return M.s(J,2,"0");case"s":return String(j.$s);case"ss":return M.s(j.$s,2,"0");case"SSS":return M.s(j.$ms,3,"0");case"Z":return z}return null}(ve)||z.replace(":","")})},F.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},F.diff=function(B,j,k){var W,z=this,G=M.p(j),J=D(B),Y=(J.utcOffset()-this.utcOffset())*r,oe=this-J,fe=function(){return M.m(z,J)};switch(G){case w:W=fe()/12;break;case d:W=fe();break;case p:W=fe()/3;break;case u:W=(oe-Y)/6048e5;break;case c:W=(oe-Y)/864e5;break;case l:W=oe/i;break;case a:W=oe/r;break;case s:W=oe/n;break;default:W=oe}return k?W:M.a(W)},F.daysInMonth=function(){return this.endOf(d).$D},F.$locale=function(){return S[this.$L]},F.locale=function(B,j){if(!B)return this.$L;var k=this.clone(),W=R(B,j,!0);return W&&(k.$L=W),k},F.clone=function(){return M.w(this.$d,this)},F.toDate=function(){return new Date(this.valueOf())},F.toJSON=function(){return this.isValid()?this.toISOString():null},F.toISOString=function(){return this.$d.toISOString()},F.toString=function(){return this.$d.toUTCString()},H}(),ne=ee.prototype;return D.prototype=ne,[["$ms",o],["$s",s],["$m",a],["$H",l],["$W",c],["$M",d],["$y",w],["$D",y]].forEach(function(H){ne[H[1]]=function(F){return this.$g(F,H[0],H[1])}}),D.extend=function(H,F){return H.$i||(H(F,ee,D),H.$i=!0),D},D.locale=R,D.isDayjs=A,D.unix=function(H){return D(1e3*H)},D.en=S[_],D.Ls=S,D.p={},D})})(z4);var SI=z4.exports;const Sc=Hc(SI);var H4={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(am,function(){return function(n,r,i){i.updateLocale=function(o,s){var a=i.Ls[o];if(a)return(s?Object.keys(s):[]).forEach(function(l){a[l]=s[l]}),a}}})})(H4);var TI=H4.exports;const AI=Hc(TI);var V4={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(am,function(){return function(n,r,i){n=n||{};var o=r.prototype,s={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function a(c,u,d,p){return o.fromToBase(c,u,d,p)}i.en.relativeTime=s,o.fromToBase=function(c,u,d,p,w){for(var y,E,C,b=d.$locale().relativeTime||s,m=n.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],v=m.length,x=0;x<v;x+=1){var _=m[x];_.d&&(y=p?i(c).diff(d,_.d,!0):d.diff(c,_.d,!0));var S=(n.rounding||Math.round)(Math.abs(y));if(C=y>0,S<=_.r||!_.r){S<=1&&x>0&&(_=m[x-1]);var f=b[_.l];w&&(S=w(""+S)),E=typeof f=="string"?f.replace("%d",S):f(S,u,_.l,C);break}}if(u)return E;var A=C?b.future:b.past;return typeof A=="function"?A(E):A.replace("%s",E)},o.to=function(c,u){return a(c,u,this,!0)},o.from=function(c,u){return a(c,u,this)};var l=function(c){return c.$u?i.utc():i()};o.toNow=function(c){return this.to(l(this),c)},o.fromNow=function(c){return this.from(l(this),c)}}})})(V4);var PI=V4.exports;const II=Hc(PI);Sc.extend(II);Sc.extend(AI);Sc.updateLocale("en",{relativeTime:{future:"in %s",past:"%s ago",s:"%s sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}});const q4={getYear(t=new Date().toISOString()){return Sc(t).year()},getRelativeDateFromNow(t){return Sc(t).fromNow(!0)}},$I=3,OI=["receive","deposit","borrow","claim"],DI=["withdraw","repay","burn"],Us={getTransactionGroupTitle(t){const e=q4.getYear();return t===e?"This Year":t},getTransactionImages(t){const[e,n]=t,r=!!e&&(t==null?void 0:t.every(s=>!!s.nft_info)),i=(t==null?void 0:t.length)>1;return(t==null?void 0:t.length)===2&&!r?[this.getTransactionImage(e),this.getTransactionImage(n)]:i?t.map(s=>this.getTransactionImage(s)):[this.getTransactionImage(e)]},getTransactionImage(t){return{type:Us.getTransactionTransferTokenType(t),url:Us.getTransactionImageURL(t)}},getTransactionImageURL(t){var i,o,s,a,l;let e=null;const n=!!(t!=null&&t.nft_info),r=!!(t!=null&&t.fungible_info);return t&&n?e=(s=(o=(i=t==null?void 0:t.nft_info)==null?void 0:i.content)==null?void 0:o.preview)==null?void 0:s.url:t&&r&&(e=(l=(a=t==null?void 0:t.fungible_info)==null?void 0:a.icon)==null?void 0:l.url),e},getTransactionTransferTokenType(t){return t!=null&&t.fungible_info?"FUNGIBLE":t!=null&&t.nft_info?"NFT":null},getTransactionDescriptions(t){var d,p,w;const e=(d=t.metadata)==null?void 0:d.operationType,n=t.transfers,r=((p=t.transfers)==null?void 0:p.length)>0,i=((w=t.transfers)==null?void 0:w.length)>1,o=r&&(n==null?void 0:n.every(y=>!!y.fungible_info)),[s,a]=n;let l=this.getTransferDescription(s),c=this.getTransferDescription(a);if(!r)return(e==="send"||e==="receive")&&o?(l=Ze.getTruncateString({string:t.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),c=Ze.getTruncateString({string:t.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"}),[l,c]):[t.metadata.status];if(i)return n.map(y=>this.getTransferDescription(y));let u="";return OI.includes(e)?u="+":DI.includes(e)&&(u="-"),l=u.concat(l),[l]},getTransferDescription(t){var n;let e="";return t&&(t!=null&&t.nft_info?e=((n=t==null?void 0:t.nft_info)==null?void 0:n.name)||"-":t!=null&&t.fungible_info&&(e=this.getFungibleTransferDescription(t)||"-")),e},getFungibleTransferDescription(t){var r;return t?[this.getQuantityFixedValue(t==null?void 0:t.quantity.numeric),(r=t==null?void 0:t.fungible_info)==null?void 0:r.symbol].join(" ").trim():null},getQuantityFixedValue(t){return t?parseFloat(t).toFixed($I):null}};var xr=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Gn=class extends K{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.address=je.state.address,this.balanceVal=je.state.balance,this.balanceSymbol=je.state.balanceSymbol,this.profileName=je.state.profileName,this.profileImage=je.state.profileImage,this.network=ht.state.caipNetwork,this.unsubscribe.push(je.subscribe(e=>{e.isConnected?(this.address=e.address,this.balanceVal=e.balance,this.profileName=e.profileName,this.profileImage=e.profileImage,this.balanceSymbol=e.balanceSymbol):(this.address="",this.balanceVal="",this.profileName="",this.profileImage="",this.balanceSymbol="")}),ht.subscribeKey("caipNetwork",e=>this.network=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=ft.getNetworkImage(this.network),n=this.balance==="show";return I`
      <wui-account-button
        .disabled=${!!this.disabled}
        address=${Ce(this.profileName??this.address)}
        ?isProfileName=${!!this.profileName}
        networkSrc=${Ce(e)}
        avatarSrc=${Ce(this.profileImage)}
        balance=${n?de.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
        data-testid="account-button"
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
      >
      </wui-account-button>
    `}onClick(){Ke.open()}};xr([$({type:Boolean})],Gn.prototype,"disabled",void 0);xr([$()],Gn.prototype,"balance",void 0);xr([$()],Gn.prototype,"charsStart",void 0);xr([$()],Gn.prototype,"charsEnd",void 0);xr([ie()],Gn.prototype,"address",void 0);xr([ie()],Gn.prototype,"balanceVal",void 0);xr([ie()],Gn.prototype,"balanceSymbol",void 0);xr([ie()],Gn.prototype,"profileName",void 0);xr([ie()],Gn.prototype,"profileImage",void 0);xr([ie()],Gn.prototype,"network",void 0);Gn=xr([Z("w3m-account-button")],Gn);const kI=X`
  :host {
    display: block;
    width: max-content;
  }
`;var yi=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let gr=class extends K{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.isAccount=je.state.isConnected,this.unsubscribe.push(je.subscribeKey("isConnected",e=>{this.isAccount=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.isAccount?I`
          <w3m-account-button
            .disabled=${!!this.disabled}
            balance=${Ce(this.balance)}
            .charsStart=${Ce(this.charsStart)}
            .charsEnd=${Ce(this.charsEnd)}
          >
          </w3m-account-button>
        `:I`
          <w3m-connect-button
            size=${Ce(this.size)}
            label=${Ce(this.label)}
            loadingLabel=${Ce(this.loadingLabel)}
          ></w3m-connect-button>
        `}};gr.styles=kI;yi([$({type:Boolean})],gr.prototype,"disabled",void 0);yi([$()],gr.prototype,"balance",void 0);yi([$()],gr.prototype,"size",void 0);yi([$()],gr.prototype,"label",void 0);yi([$()],gr.prototype,"loadingLabel",void 0);yi([$()],gr.prototype,"charsStart",void 0);yi([$()],gr.prototype,"charsEnd",void 0);yi([ie()],gr.prototype,"isAccount",void 0);gr=yi([Z("w3m-button")],gr);var Wa=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Qo=class extends K{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=Ke.state.open,this.loading=Ke.state.loading,this.unsubscribe.push(Ke.subscribe(e=>{this.open=e.open,this.loading=e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.loading||this.open;return I`
      <wui-connect-button
        size=${Ce(this.size)}
        .loading=${e}
        @click=${this.onClick.bind(this)}
        data-testid="connect-button"
      >
        ${e?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?Ke.close():this.loading||Ke.open()}};Wa([$()],Qo.prototype,"size",void 0);Wa([$()],Qo.prototype,"label",void 0);Wa([$()],Qo.prototype,"loadingLabel",void 0);Wa([ie()],Qo.prototype,"open",void 0);Wa([ie()],Qo.prototype,"loading",void 0);Qo=Wa([Z("w3m-connect-button")],Qo);const RI=X`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: 360px;
    width: 100%;
    position: relative;
    animation-delay: 0.3s;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`;var kh=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const Sv="scroll-lock";let Xo=class extends K{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=Ke.state.open,this.caipAddress=je.state.address,this.isSiweEnabled=wt.state.isSiweEnabled,this.initializeTheming(),Re.prefetch(),this.unsubscribe.push(Ke.subscribeKey("open",e=>e?this.onOpen():this.onClose()),wt.subscribeKey("isSiweEnabled",e=>{this.isSiweEnabled=e}),je.subscribe(e=>this.onNewAccountState(e))),xe.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.open?I`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
        `:null}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){this.isSiweEnabled&&wt.state.status!=="success"&&await Ue.disconnect(),Ke.close()}initializeTheming(){const{themeVariables:e,themeMode:n}=cn.state,r=Ze.getColorTheme(n);rT(e,r)}async onClose(){this.onScrollUnlock(),await this.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,pt.hide(),this.open=!1,this.onRemoveKeyboardListener()}async onOpen(){this.onScrollLock(),this.open=!0,await this.animate([{opacity:0},{opacity:1}],{duration:200,easing:"ease",fill:"forwards",delay:300}).finished,this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=Sv,e.textContent=`
      html, body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${Sv}"]`);e&&e.remove()}onAddKeyboardListener(){var n;this.abortController=new AbortController;const e=(n=this.shadowRoot)==null?void 0:n.querySelector("wui-card");e==null||e.focus(),window.addEventListener("keydown",r=>{if(r.key==="Escape")this.handleClose();else if(r.key==="Tab"){const{tagName:i}=r.target;i&&!i.includes("W3M-")&&!i.includes("WUI-")&&(e==null||e.focus())}},this.abortController)}onRemoveKeyboardListener(){var e;(e=this.abortController)==null||e.abort(),this.abortController=void 0}async onNewAccountState(e){const{isConnected:n,caipAddress:r}=e;if(this.isSiweEnabled){n&&!this.caipAddress&&(this.caipAddress=r),n&&r&&this.caipAddress!==r&&(await wt.signOut(),this.onSiweNavigation(),this.caipAddress=r);try{const i=await wt.getSession();i&&!n?await wt.signOut():n&&!i&&this.onSiweNavigation()}catch{n&&this.onSiweNavigation()}}}onSiweNavigation(){this.open?ce.push("ConnectingSiwe"):Ke.open({view:"ConnectingSiwe"})}};Xo.styles=RI;kh([ie()],Xo.prototype,"open",void 0);kh([ie()],Xo.prototype,"caipAddress",void 0);kh([ie()],Xo.prototype,"isSiweEnabled",void 0);Xo=kh([Z("w3m-modal")],Xo);const NI=Object.freeze(Object.defineProperty({__proto__:null,get W3mModal(){return Xo}},Symbol.toStringTag,{value:"Module"})),MI=X`
  :host {
    display: block;
    width: max-content;
  }
`;var hu=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Jo=class extends K{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=ht.state.caipNetwork,this.connected=je.state.isConnected,this.loading=Ke.state.loading,this.unsubscribe.push(ht.subscribeKey("caipNetwork",e=>this.network=e),je.subscribeKey("isConnected",e=>this.connected=e),Ke.subscribeKey("loading",e=>this.loading=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var e;return I`
      <wui-network-button
        .disabled=${!!(this.disabled||this.loading)}
        imageSrc=${Ce(ft.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${((e=this.network)==null?void 0:e.name)??(this.connected?"Unknown Network":"Select Network")}
      </wui-network-button>
    `}onClick(){this.loading||Ke.open({view:"Networks"})}};Jo.styles=MI;hu([$({type:Boolean})],Jo.prototype,"disabled",void 0);hu([ie()],Jo.prototype,"network",void 0);hu([ie()],Jo.prototype,"connected",void 0);hu([ie()],Jo.prototype,"loading",void 0);Jo=hu([Z("w3m-network-button")],Jo);const UI=X`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`;var Z4=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let af=class extends K{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=ce.state.view,this.unsubscribe.push(ce.subscribeKey("view",e=>this.onViewChange(e)))}firstUpdated(){this.resizeObserver=new ResizeObserver(async([e])=>{const n=`${e==null?void 0:e.contentRect.height}px`;this.prevHeight!=="0px"&&(await this.animate([{height:this.prevHeight},{height:n}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.style.height="auto"),this.prevHeight=n}),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){var e;(e=this.resizeObserver)==null||e.unobserve(this.getWrapper()),this.unsubscribe.forEach(n=>n())}render(){return I`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"Connect":return I`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return I`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return I`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return I`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"AllWallets":return I`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"Networks":return I`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return I`<w3m-network-switch-view></w3m-network-switch-view>`;case"Account":return I`<w3m-account-view></w3m-account-view>`;case"WhatIsAWallet":return I`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return I`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"GetWallet":return I`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Downloads":return I`<w3m-downloads-view></w3m-downloads-view>`;case"EmailVerifyOtp":return I`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return I`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"ApproveTransaction":return I`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"Transactions":return I`<w3m-transactions-view></w3m-transactions-view>`;case"UpgradeEmailWallet":return I`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return I`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailWalletWaiting":return I`<w3m-update-email-wallet-waiting-view></w3m-update-email-wallet-waiting-view>`;default:return I`<w3m-connect-view></w3m-connect-view>`}}async onViewChange(e){const{history:n}=ce.state;let r=-10,i=10;n.length<this.prevHistoryLength&&(r=10,i=-10),this.prevHistoryLength=n.length,await this.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:`translateX(${r}px)`}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.view=e,await this.animate([{opacity:0,transform:`translateX(${i}px)`},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished}getWrapper(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("div")}};af.styles=UI;Z4([ie()],af.prototype,"view",void 0);af=Z4([Z("w3m-router")],af);const LI=X`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }
`;var po=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Ur=class extends K{constructor(){super(),this.usubscribe=[],this.address=je.state.address,this.profileImage=je.state.profileImage,this.profileName=je.state.profileName,this.balance=je.state.balance,this.balanceSymbol=je.state.balanceSymbol,this.network=ht.state.caipNetwork,this.disconecting=!1,this.usubscribe.push(je.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.balance=e.balance,this.balanceSymbol=e.balanceSymbol):Ke.close()}),ht.subscribeKey("caipNetwork",e=>{e!=null&&e.id&&(this.network=e)}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){var n;if(!this.address)throw new Error("w3m-account-view: No account provided");const e=ft.getNetworkImage(this.network);return I`
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","m","s"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${Ce(this.profileImage===null?void 0:this.profileImage)}
        ></wui-avatar>

        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100">
              ${this.profileName?Ze.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):Ze.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-flex gap="s" flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-200">
              ${de.formatBalance(this.balance,this.balanceSymbol)}
            </wui-text>

            ${this.explorerBtnTemplate()}
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        ${this.emailCardTemplate()} ${this.emailBtnTemplate()}

        <wui-list-item
          .variant=${e?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${Ce(e)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
          data-testid="w3m-account-select-network"
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${((n=this.network)==null?void 0:n.name)??"Unknown"}
          </wui-text>
        </wui-list-item>
        <wui-list-item
          iconVariant="blue"
          icon="swapHorizontalBold"
          iconSize="sm"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}emailCardTemplate(){const e=Xt.getConnectedConnector(),n=Ge.getEmailConnector(),{origin:r}=location;return!n||e!=="EMAIL"||r.includes(Xr.SECURE_SITE)?null:I`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a non-custodial wallet"
        icon="wallet"
      ></wui-notice-card>
    `}emailBtnTemplate(){const e=Xt.getConnectedConnector(),n=Ge.getEmailConnector();if(!n||e!=="EMAIL")return null;const r=n.provider.getEmail()??"";return I`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="mail"
        iconSize="sm"
        ?chevron=${!0}
        @click=${()=>this.onGoToUpdateEmail(r)}
      >
        <wui-text variant="paragraph-500" color="fg-100">${r}</wui-text>
      </wui-list-item>
    `}explorerBtnTemplate(){const{addressExplorerUrl:e}=je.state;return e?I`
      <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}isAllowedNetworkSwitch(){const{requestedCaipNetworks:e}=ht.state,n=e?e.length>1:!1,r=e==null?void 0:e.find(({id:i})=>{var o;return i===((o=this.network)==null?void 0:o.id)});return n||!r}onCopyAddress(){try{this.address&&(de.copyToClopboard(this.address),pt.showSuccess("Address copied"))}catch{pt.showError("Failed to copy")}}onNetworks(){this.isAllowedNetworkSwitch()&&ce.push("Networks")}onTransactions(){xe.sendEvent({type:"track",event:"CLICK_TRANSACTIONS"}),ce.push("Transactions")}async onDisconnect(){try{this.disconecting=!0,await Ue.disconnect(),xe.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),Ke.close()}catch{xe.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),pt.showError("Failed to disconnect")}finally{this.disconecting=!1}}onExplorer(){const{addressExplorerUrl:e}=je.state;e&&de.openHref(e,"_blank")}onGoToUpgradeView(){xe.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),ce.push("UpgradeEmailWallet")}onGoToUpdateEmail(e){ce.push("UpdateEmailWallet",{email:e})}};Ur.styles=LI;po([ie()],Ur.prototype,"address",void 0);po([ie()],Ur.prototype,"profileImage",void 0);po([ie()],Ur.prototype,"profileName",void 0);po([ie()],Ur.prototype,"balance",void 0);po([ie()],Ur.prototype,"balanceSymbol",void 0);po([ie()],Ur.prototype,"network",void 0);po([ie()],Ur.prototype,"disconecting",void 0);Ur=po([Z("w3m-account-view")],Ur);var G4=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let R1=class extends K{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=de.debounce(e=>{this.search=e})}render(){const e=this.search.length>=2;return I`
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e?I`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:I`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}qrButtonTemplate(){return de.isMobile()?I`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){ce.push("ConnectingWalletConnect")}};G4([ie()],R1.prototype,"search",void 0);R1=G4([Z("w3m-all-wallets-view")],R1);const BI=X`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var K4=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let lf=class extends K{constructor(){super(),this.unsubscribe=[],this.connectors=Ge.state.connectors,this.unsubscribe.push(Ge.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return I`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        <w3m-email-login-widget></w3m-email-login-widget>

        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()}
        ${this.announcedTemplate()} ${this.injectedTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.connectorsTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletConnectConnectorTemplate(){if(de.isMobile())return null;const e=this.connectors.find(n=>n.type==="WALLET_CONNECT");return e?I`
      <wui-list-wallet
        imageSrc=${Ce(ft.getConnectorImage(e))}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `:null}customTemplate(){const{customWallets:e}=We.state;return e!=null&&e.length?this.filterOutDuplicateWallets(e).map(r=>I`
        <wui-list-wallet
          imageSrc=${Ce(ft.getWalletImage(r))}
          name=${r.name??"Unknown"}
          @click=${()=>this.onConnectWallet(r)}
        >
        </wui-list-wallet>
      `):null}featuredTemplate(){if(!this.connectors.find(i=>i.type==="WALLET_CONNECT"))return null;const{featured:n}=Re.state;return n.length?this.filterOutDuplicateWallets(n).map(i=>I`
        <wui-list-wallet
          imageSrc=${Ce(ft.getWalletImage(i))}
          name=${i.name??"Unknown"}
          @click=${()=>this.onConnectWallet(i)}
        >
        </wui-list-wallet>
      `):null}recentTemplate(){return Xt.getRecentWallets().map(n=>I`
        <wui-list-wallet
          imageSrc=${Ce(ft.getWalletImage(n))}
          name=${n.name??"Unknown"}
          @click=${()=>this.onConnectWallet(n)}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `)}announcedTemplate(){return this.connectors.map(e=>e.type!=="ANNOUNCED"?null:I`
        <wui-list-wallet
          imageSrc=${Ce(ft.getConnectorImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
          tagVariant="success"
          .installed=${!0}
        >
        </wui-list-wallet>
      `)}injectedTemplate(){const e=this.connectors.find(n=>n.type==="ANNOUNCED");return this.connectors.map(n=>n.type!=="INJECTED"||!Ue.checkInstalled()?null:I`
        <wui-list-wallet
          imageSrc=${Ce(ft.getConnectorImage(n))}
          .installed=${!!e}
          name=${n.name??"Unknown"}
          @click=${()=>this.onConnector(n)}
        >
        </wui-list-wallet>
      `)}connectorsTemplate(){const e=Ge.getAnnouncedConnectorRdns();return this.connectors.map(n=>["WALLET_CONNECT","INJECTED","ANNOUNCED","EMAIL"].includes(n.type)||e.includes(Xr.CONNECTOR_RDNS_MAP[n.id])?null:I`
        <wui-list-wallet
          imageSrc=${Ce(ft.getConnectorImage(n))}
          name=${n.name??"Unknown"}
          @click=${()=>this.onConnector(n)}
        >
        </wui-list-wallet>
      `)}allWalletsTemplate(){if(!this.connectors.find(a=>a.type==="WALLET_CONNECT"))return null;const n=Re.state.count,r=Re.state.featured.length,i=n+r,o=i<10?i:Math.floor(i/10)*10,s=o<i?`${o}+`:`${o}`;return I`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${s}
        tagVariant="shade"
        data-testid="all-wallets"
      ></wui-list-wallet>
    `}recommendedTemplate(){if(!this.connectors.find(d=>d.type==="WALLET_CONNECT"))return null;const{recommended:n}=Re.state,{customWallets:r,featuredWalletIds:i}=We.state,{connectors:o}=Ge.state,s=Xt.getRecentWallets(),a=o.filter(d=>d.type==="ANNOUNCED");if(i||r||!n.length)return null;const l=a.length+s.length,c=Math.max(0,2-l);return this.filterOutDuplicateWallets(n).slice(0,c).map(d=>I`
        <wui-list-wallet
          imageSrc=${Ce(ft.getWalletImage(d))}
          name=${(d==null?void 0:d.name)??"Unknown"}
          @click=${()=>this.onConnectWallet(d)}
        >
        </wui-list-wallet>
      `)}onConnector(e){e.type==="WALLET_CONNECT"?de.isMobile()?ce.push("AllWallets"):ce.push("ConnectingWalletConnect"):ce.push("ConnectingExternal",{connector:e})}filterOutDuplicateWallets(e){const{connectors:n}=Ge.state,i=Xt.getRecentWallets().map(a=>a.id),o=n.map(a=>{var l;return(l=a.info)==null?void 0:l.rdns}).filter(Boolean);return e.filter(a=>!i.includes(a.id)&&!o.includes(a.rdns??void 0))}onAllWallets(){xe.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),ce.push("AllWallets")}onConnectWallet(e){ce.push("ConnectingWalletConnect",{wallet:e})}};lf.styles=BI;K4([ie()],lf.prototype,"connectors",void 0);lf=K4([Z("w3m-connect-view")],lf);const jI=X`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var ds=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};class bn extends K{constructor(){var e,n,r,i;super(),this.wallet=(e=ce.state.data)==null?void 0:e.wallet,this.connector=(n=ce.state.data)==null?void 0:n.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=ft.getWalletImage(this.wallet)??ft.getConnectorImage(this.connector),this.name=((r=this.wallet)==null?void 0:r.name)??((i=this.connector)==null?void 0:i.name)??"Wallet",this.isRetrying=!1,this.uri=Ue.state.wcUri,this.error=Ue.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(Ue.subscribeKey("wcUri",o=>{var s;this.uri=o,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,(s=this.onConnect)==null||s.call(this))}),Ue.subscribeKey("wcError",o=>this.error=o),Ue.subscribeKey("buffering",o=>this.buffering=o))}firstUpdated(){var e;(e=this.onAutoConnect)==null||e.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearTimeout(this.timeout)}render(){var r;(r=this.onRender)==null||r.call(this),this.onShowRetry();const e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let n=`Continue in ${this.name}`;return this.buffering&&(n="Connecting..."),this.error&&(n="Connection declined"),I`
      <wui-flex
        data-error=${Ce(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${Ce(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${n}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?I`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){var e;if(this.error&&!this.showRetry){this.showRetry=!0;const n=(e=this.shadowRoot)==null?void 0:e.querySelector("wui-button");n==null||n.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){var e,n;this.buffering||(Ue.setWcError(!1),this.onRetry?(this.isRetrying=!0,(e=this.onRetry)==null||e.call(this)):(n=this.onConnect)==null||n.call(this))}loaderTemplate(){const e=cn.state.themeVariables["--w3m-border-radius-master"],n=e?parseInt(e.replace("px",""),10):4;return I`<wui-loading-thumbnail radius=${n*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(de.copyToClopboard(this.uri),pt.showSuccess("Link copied"))}catch{pt.showError("Failed to copy")}}}bn.styles=jI;ds([ie()],bn.prototype,"uri",void 0);ds([ie()],bn.prototype,"error",void 0);ds([ie()],bn.prototype,"ready",void 0);ds([ie()],bn.prototype,"showRetry",void 0);ds([ie()],bn.prototype,"buffering",void 0);ds([$({type:Boolean})],bn.prototype,"isMobile",void 0);ds([$()],bn.prototype,"onRetry",void 0);var FI=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const WI={INJECTED:"browser",ANNOUNCED:"browser"};let Tv=class extends bn{constructor(){if(super(),!this.connector)throw new Error("w3m-connecting-view: No connector provided");xe.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:WI[this.connector.type]??"external"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.imageUrl&&Xt.setConnectedWalletImageUrl(this.connector.imageUrl),await Ue.connectExternal(this.connector),wt.state.isSiweEnabled?ce.push("ConnectingSiwe"):Ke.close(),xe.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"external"}}))}catch(e){xe.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(e==null?void 0:e.message)??"Unknown"}}),this.error=!0}}};Tv=FI([Z("w3m-connecting-external-view")],Tv);var Y4=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let N1=class extends K{constructor(){var e;super(...arguments),this.dappName=(e=We.state.metadata)==null?void 0:e.name,this.isSigning=!1}render(){return I`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="md"
          ?fullwidth=${!0}
          variant="shade"
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          Cancel
        </wui-button>
        <wui-button
          size="md"
          ?fullwidth=${!0}
          variant="fill"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}async onSign(){this.isSigning=!0,xe.sendEvent({event:"CLICK_SIGN_SIWE_MESSAGE",type:"track"});try{wt.setStatus("loading");const e=await wt.signIn();return wt.setStatus("success"),xe.sendEvent({event:"SIWE_AUTH_SUCCESS",type:"track"}),e}catch{return pt.showError("Signature declined"),wt.setStatus("error"),xe.sendEvent({event:"SIWE_AUTH_ERROR",type:"track"})}finally{this.isSigning=!1}}async onCancel(){const{isConnected:e}=je.state;e?(await Ue.disconnect(),Ke.close()):ce.push("Connect"),xe.sendEvent({event:"CLICK_CANCEL_SIWE",type:"track"})}};Y4([ie()],N1.prototype,"isSigning",void 0);N1=Y4([Z("w3m-connecting-siwe-view")],N1);var Xg=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let cf=class extends K{constructor(){var e;super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=(e=ce.state.data)==null?void 0:e.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),Xr.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),I`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):I`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(e=!1){try{const{wcPairingExpiry:n}=Ue.state;if(e||de.isPairingExpired(n)){if(Ue.connectWalletConnect(),this.wallet){const r=ft.getWalletImage(this.wallet);r&&Xt.setConnectedWalletImageUrl(r)}else{const i=Ge.state.connectors.find(s=>s.type==="WALLET_CONNECT"),o=ft.getConnectorImage(i);o&&Xt.setConnectedWalletImageUrl(o)}await Ue.state.wcPromise,this.finalizeConnection(),wt.state.isSiweEnabled?ce.push("ConnectingSiwe"):Ke.close()}}catch(n){xe.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(n==null?void 0:n.message)??"Unknown"}}),Ue.setWcError(!0),de.isAllowedRetry(this.lastRetry)&&(pt.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}finalizeConnection(){const{wcLinking:e,recentWallet:n}=Ue.state;e&&Xt.setWalletConnectDeepLink(e),n&&Xt.setWeb3ModalRecent(n),xe.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:e?"mobile":"qrcode"}})}determinePlatforms(){if(!this.wallet)throw new Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;const{mobile_link:e,desktop_link:n,webapp_link:r,injected:i,rdns:o}=this.wallet,s=i==null?void 0:i.map(({injected_id:y})=>y).filter(Boolean),a=o?[o]:s??[],l=a.length,c=e,u=r,d=Ue.checkInstalled(a),p=l&&d,w=n&&!de.isMobile();p&&this.platforms.push("browser"),c&&this.platforms.push(de.isMobile()?"mobile":"qrcode"),u&&this.platforms.push("web"),w&&this.platforms.push("desktop"),!p&&l&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return I`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return I`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return I`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return I`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return I`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return I`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?I`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){var r;const n=(r=this.shadowRoot)==null?void 0:r.querySelector("div");n&&(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};Xg([ie()],cf.prototype,"platform",void 0);Xg([ie()],cf.prototype,"platforms",void 0);cf=Xg([Z("w3m-connecting-wc-view")],cf);var zI=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Av=class extends K{constructor(){var e;super(...arguments),this.wallet=(e=ce.state.data)==null?void 0:e.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return I`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){var e;return(e=this.wallet)!=null&&e.chrome_store?I`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){var e;return(e=this.wallet)!=null&&e.app_store?I`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){var e;return(e=this.wallet)!=null&&e.play_store?I`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){var e;return(e=this.wallet)!=null&&e.homepage?I`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){var e;(e=this.wallet)!=null&&e.chrome_store&&de.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){var e;(e=this.wallet)!=null&&e.app_store&&de.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;(e=this.wallet)!=null&&e.play_store&&de.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;(e=this.wallet)!=null&&e.homepage&&de.openHref(this.wallet.homepage,"_blank")}};Av=zI([Z("w3m-downloads-view")],Av);var HI=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const VI="https://walletconnect.com/explorer";let Pv=class extends K{render(){return I`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{de.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:e,featured:n}=Re.state,{customWallets:r}=We.state;return[...n,...r??[],...e].slice(0,4).map(o=>I`
        <wui-list-wallet
          name=${o.name??"Unknown"}
          tagVariant="main"
          imageSrc=${Ce(ft.getWalletImage(o))}
          @click=${()=>{de.openHref(o.homepage??VI,"_blank")}}
        ></wui-list-wallet>
      `)}};Pv=HI([Z("w3m-get-wallet-view")],Pv);const qI=X`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var Jg=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Tc=class extends K{constructor(){var e;super(),this.network=(e=ce.state.data)==null?void 0:e.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const e=this.error?"Switch declined":"Approve in wallet",n=this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet";return I`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${Ce(ft.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:I`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${n}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="fill"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}onShowRetry(){var e;if(this.error&&!this.showRetry){this.showRetry=!0;const n=(e=this.shadowRoot)==null?void 0:e.querySelector("wui-button");n==null||n.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){try{this.error=!1,this.network&&(await ht.switchActiveNetwork(this.network),wt.state.isSiweEnabled||i4.navigateAfterNetworkSwitch())}catch{this.error=!0}}};Tc.styles=qI;Jg([ie()],Tc.prototype,"showRetry",void 0);Jg([ie()],Tc.prototype,"error",void 0);Tc=Jg([Z("w3m-network-switch-view")],Tc);const ZI=X`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`;var Q4=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let uf=class extends K{constructor(){super(),this.unsubscribe=[],this.caipNetwork=ht.state.caipNetwork,this.unsubscribe.push(ht.subscribeKey("caipNetwork",e=>this.caipNetwork=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return I`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}onNetworkHelp(){xe.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),ce.push("WhatIsANetwork")}networksTemplate(){const{approvedCaipNetworkIds:e,requestedCaipNetworks:n,supportsAllNetworks:r}=ht.state,i=e,o=n,s={};return o&&i&&(i.forEach((a,l)=>{s[a]=l}),o.sort((a,l)=>{const c=s[a.id],u=s[l.id];return c!==void 0&&u!==void 0?c-u:c!==void 0?-1:u!==void 0?1:0})),o==null?void 0:o.map(a=>{var l;return I`
        <wui-card-select
          .selected=${((l=this.caipNetwork)==null?void 0:l.id)===a.id}
          imageSrc=${Ce(ft.getNetworkImage(a))}
          type="network"
          name=${a.name??a.id}
          @click=${()=>this.onSwitchNetwork(a)}
          .disabled=${!r&&!(i!=null&&i.includes(a.id))}
          data-testid=${`w3m-network-switch-${a.name??a.id}`}
        ></wui-card-select>
      `})}async onSwitchNetwork(e){const{isConnected:n}=je.state,{approvedCaipNetworkIds:r,supportsAllNetworks:i,caipNetwork:o}=ht.state,{data:s}=ce.state;n&&(o==null?void 0:o.id)!==e.id?r!=null&&r.includes(e.id)?(await ht.switchActiveNetwork(e),i4.navigateAfterNetworkSwitch()):i&&ce.push("SwitchNetwork",{...s,network:e}):n||(ht.setCaipNetwork(e),ce.push("Connect"))}};uf.styles=ZI;Q4([ie()],uf.prototype,"caipNetwork",void 0);uf=Q4([Z("w3m-networks-view")],uf);const GI=X`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }
`;var fs=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const qu="last-transaction",KI=7;let fi=class extends K{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.address=je.state.address,this.transactions=Jn.state.transactions,this.transactionsByYear=Jn.state.transactionsByYear,this.loading=Jn.state.loading,this.empty=Jn.state.empty,this.next=Jn.state.next,this.unsubscribe.push(je.subscribe(e=>{e.isConnected&&this.address!==e.address&&(this.address=e.address,Jn.resetTransactions(),Jn.fetchTransactions(e.address))}),Jn.subscribe(e=>{this.transactions=e.transactions,this.transactionsByYear=e.transactionsByYear,this.loading=e.loading,this.empty=e.empty,this.next=e.next}))}firstUpdated(){this.transactions.length===0&&Jn.fetchTransactions(this.address),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return I`
      <wui-flex flexDirection="column" padding="s" gap="s">
        ${this.empty?null:this.templateTransactionsByYear()}
        ${this.loading?this.templateLoading():null}
        ${!this.loading&&this.empty?this.templateEmpty():null}
      </wui-flex>
    `}templateTransactionsByYear(){const e=Object.keys(this.transactionsByYear).sort().reverse();return e.map((n,r)=>{const i=r===e.length-1,o=parseInt(n,10),s=Us.getTransactionGroupTitle(o),a=this.transactionsByYear[o];return a?I`
        <wui-flex flexDirection="column" gap="s">
          <wui-flex
            alignItems="center"
            flexDirection="row"
            .padding=${["xs","s","s","s"]}
          >
            <wui-text variant="paragraph-500" color="fg-200">${s}</wui-text>
          </wui-flex>
          <wui-flex flexDirection="column" gap="xs">
            ${this.templateTransactions(a,i)}
          </wui-flex>
        </wui-flex>
      `:null})}templateRenderTransaction(e,n){const{date:r,descriptions:i,direction:o,isAllNFT:s,images:a,status:l,transfers:c,type:u}=this.getTransactionListItemProps(e),d=(c==null?void 0:c.length)>1;return(c==null?void 0:c.length)===2&&!s?I`
        <wui-transaction-list-item
          date=${r}
          .direction=${o}
          id=${n&&this.next?qu:""}
          status=${l}
          type=${u}
          .images=${a}
          .descriptions=${i}
        ></wui-transaction-list-item>
      `:d?c.map((w,y)=>{const E=Us.getTransferDescription(w),C=n&&y===c.length-1;return I` <wui-transaction-list-item
          date=${r}
          direction=${w.direction}
          id=${C&&this.next?qu:""}
          status=${l}
          type=${u}
          .onlyDirectionIcon=${!0}
          .images=${[a==null?void 0:a[y]]}
          .descriptions=${[E]}
        ></wui-transaction-list-item>`}):I`
      <wui-transaction-list-item
        date=${r}
        .direction=${o}
        id=${n&&this.next?qu:""}
        status=${l}
        type=${u}
        .images=${a}
        .descriptions=${i}
      ></wui-transaction-list-item>
    `}templateTransactions(e,n){return e.map((r,i)=>{const o=n&&i===e.length-1;return I`${this.templateRenderTransaction(r,o)}`})}templateEmpty(){return I`
      <wui-flex
        flexGrow="1"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-icon-box
          backgroundColor="glass-005"
          background="gray"
          iconColor="fg-200"
          icon="wallet"
          size="lg"
          ?border=${!0}
          borderColor="wui-color-bg-125"
        ></wui-icon-box>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >No Transactions yet</wui-text
          >
          <wui-text align="center" variant="small-500" color="fg-200"
            >Start trading on dApps <br />
            to grow your wallet!</wui-text
          >
        </wui-flex>
      </wui-flex>
    `}templateLoading(){return Array(KI).fill(I` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e)}createPaginationObserver(){const{projectId:e}=We.state;this.paginationObserver=new IntersectionObserver(([n])=>{n!=null&&n.isIntersecting&&!this.loading&&(Jn.fetchTransactions(this.address),xe.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:this.address,projectId:e,cursor:this.next}}))},{}),this.setPaginationObserver()}setPaginationObserver(){var n,r,i;(n=this.paginationObserver)==null||n.disconnect();const e=(r=this.shadowRoot)==null?void 0:r.querySelector(`#${qu}`);e&&((i=this.paginationObserver)==null||i.observe(e))}getTransactionListItemProps(e){var l,c,u,d,p;const n=q4.getRelativeDateFromNow((l=e==null?void 0:e.metadata)==null?void 0:l.minedAt),r=Us.getTransactionDescriptions(e),i=e==null?void 0:e.transfers,o=(c=e==null?void 0:e.transfers)==null?void 0:c[0],s=!!o&&((u=e==null?void 0:e.transfers)==null?void 0:u.every(w=>!!w.nft_info)),a=Us.getTransactionImages(i);return{date:n,direction:o==null?void 0:o.direction,descriptions:r,isAllNFT:s,images:a,status:(d=e.metadata)==null?void 0:d.status,transfers:i,type:(p=e.metadata)==null?void 0:p.operationType}}};fi.styles=GI;fs([ie()],fi.prototype,"address",void 0);fs([ie()],fi.prototype,"transactions",void 0);fs([ie()],fi.prototype,"transactionsByYear",void 0);fs([ie()],fi.prototype,"loading",void 0);fs([ie()],fi.prototype,"empty",void 0);fs([ie()],fi.prototype,"next",void 0);fi=fs([Z("w3m-transactions-view")],fi);var YI=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const QI=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let Iv=class extends K{render(){return I`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${QI}></w3m-help-widget>
        <wui-button
          variant="fill"
          size="sm"
          @click=${()=>{de.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};Iv=YI([Z("w3m-what-is-a-network-view")],Iv);var XI=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const JI=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let $v=class extends K{render(){return I`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${JI}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){xe.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),ce.push("GetWallet")}};$v=XI([Z("w3m-what-is-a-wallet-view")],$v);const e$=X`
  wui-loading-spinner {
    margin: 9px auto;
  }
`,le={SECURE_SITE_SDK:"https://secure.web3modal.com/sdk",APP_EVENT_KEY:"@w3m-app/",FRAME_EVENT_KEY:"@w3m-frame/",RPC_METHOD_KEY:"RPC_",STORAGE_KEY:"@w3m-storage/",SESSION_TOKEN_KEY:"SESSION_TOKEN_KEY",EMAIL_LOGIN_USED_KEY:"EMAIL_LOGIN_USED_KEY",LAST_USED_CHAIN_KEY:"LAST_USED_CHAIN_KEY",LAST_EMAIL_LOGIN_TIME:"LAST_EMAIL_LOGIN_TIME",EMAIL:"EMAIL",APP_SWITCH_NETWORK:"@w3m-app/SWITCH_NETWORK",APP_CONNECT_EMAIL:"@w3m-app/CONNECT_EMAIL",APP_CONNECT_DEVICE:"@w3m-app/CONNECT_DEVICE",APP_CONNECT_OTP:"@w3m-app/CONNECT_OTP",APP_GET_USER:"@w3m-app/GET_USER",APP_SIGN_OUT:"@w3m-app/SIGN_OUT",APP_IS_CONNECTED:"@w3m-app/IS_CONNECTED",APP_GET_CHAIN_ID:"@w3m-app/GET_CHAIN_ID",APP_RPC_REQUEST:"@w3m-app/RPC_REQUEST",APP_UPDATE_EMAIL:"@w3m-app/UPDATE_EMAIL",APP_AWAIT_UPDATE_EMAIL:"@w3m-app/AWAIT_UPDATE_EMAIL",APP_SYNC_THEME:"@w3m-app/SYNC_THEME",APP_SYNC_DAPP_DATA:"@w3m-app/SYNC_DAPP_DATA",FRAME_SWITCH_NETWORK_ERROR:"@w3m-frame/SWITCH_NETWORK_ERROR",FRAME_SWITCH_NETWORK_SUCCESS:"@w3m-frame/SWITCH_NETWORK_SUCCESS",FRAME_CONNECT_EMAIL_ERROR:"@w3m-frame/CONNECT_EMAIL_ERROR",FRAME_CONNECT_EMAIL_SUCCESS:"@w3m-frame/CONNECT_EMAIL_SUCCESS",FRAME_CONNECT_DEVICE_ERROR:"@w3m-frame/CONNECT_DEVICE_ERROR",FRAME_CONNECT_DEVICE_SUCCESS:"@w3m-frame/CONNECT_DEVICE_SUCCESS",FRAME_CONNECT_OTP_SUCCESS:"@w3m-frame/CONNECT_OTP_SUCCESS",FRAME_CONNECT_OTP_ERROR:"@w3m-frame/CONNECT_OTP_ERROR",FRAME_GET_USER_SUCCESS:"@w3m-frame/GET_USER_SUCCESS",FRAME_GET_USER_ERROR:"@w3m-frame/GET_USER_ERROR",FRAME_SIGN_OUT_SUCCESS:"@w3m-frame/SIGN_OUT_SUCCESS",FRAME_SIGN_OUT_ERROR:"@w3m-frame/SIGN_OUT_ERROR",FRAME_IS_CONNECTED_SUCCESS:"@w3m-frame/IS_CONNECTED_SUCCESS",FRAME_IS_CONNECTED_ERROR:"@w3m-frame/IS_CONNECTED_ERROR",FRAME_GET_CHAIN_ID_SUCCESS:"@w3m-frame/GET_CHAIN_ID_SUCCESS",FRAME_GET_CHAIN_ID_ERROR:"@w3m-frame/GET_CHAIN_ID_ERROR",FRAME_RPC_REQUEST_SUCCESS:"@w3m-frame/RPC_REQUEST_SUCCESS",FRAME_RPC_REQUEST_ERROR:"@w3m-frame/RPC_REQUEST_ERROR",FRAME_SESSION_UPDATE:"@w3m-frame/SESSION_UPDATE",FRAME_UPDATE_EMAIL_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SUCCESS",FRAME_UPDATE_EMAIL_ERROR:"@w3m-frame/UPDATE_EMAIL_ERROR",FRAME_AWAIT_UPDATE_EMAIL_SUCCESS:"@w3m-frame/AWAIT_UPDATE_EMAIL_SUCCESS",FRAME_AWAIT_UPDATE_EMAIL_ERROR:"@w3m-frame/AWAIT_UPDATE_EMAIL_ERROR",FRAME_SYNC_THEME_SUCCESS:"@w3m-frame/SYNC_THEME_SUCCESS",FRAME_SYNC_THEME_ERROR:"@w3m-frame/SYNC_THEME_ERROR",FRAME_SYNC_DAPP_DATA_SUCCESS:"@w3m-frame/SYNC_DAPP_DATA_SUCCESS",FRAME_SYNC_DAPP_DATA_ERROR:"@w3m-frame/SYNC_DAPP_DATA_ERROR"},t$={SAFE_RPC_METHODS:["eth_blockNumber","eth_estimateGas","eth_getTransactionByHash"],GET_CHAIN_ID:"eth_chainId"};var Fe;(function(t){t.assertEqual=i=>i;function e(i){}t.assertIs=e;function n(i){throw new Error}t.assertNever=n,t.arrayToEnum=i=>{const o={};for(const s of i)o[s]=s;return o},t.getValidEnumValues=i=>{const o=t.objectKeys(i).filter(a=>typeof i[i[a]]!="number"),s={};for(const a of o)s[a]=i[a];return t.objectValues(s)},t.objectValues=i=>t.objectKeys(i).map(function(o){return i[o]}),t.objectKeys=typeof Object.keys=="function"?i=>Object.keys(i):i=>{const o=[];for(const s in i)Object.prototype.hasOwnProperty.call(i,s)&&o.push(s);return o},t.find=(i,o)=>{for(const s of i)if(o(s))return s},t.isInteger=typeof Number.isInteger=="function"?i=>Number.isInteger(i):i=>typeof i=="number"&&isFinite(i)&&Math.floor(i)===i;function r(i,o=" | "){return i.map(s=>typeof s=="string"?`'${s}'`:s).join(o)}t.joinValues=r,t.jsonStringifyReplacer=(i,o)=>typeof o=="bigint"?o.toString():o})(Fe||(Fe={}));var M1;(function(t){t.mergeShapes=(e,n)=>({...e,...n})})(M1||(M1={}));const re=Fe.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Oi=t=>{switch(typeof t){case"undefined":return re.undefined;case"string":return re.string;case"number":return isNaN(t)?re.nan:re.number;case"boolean":return re.boolean;case"function":return re.function;case"bigint":return re.bigint;case"symbol":return re.symbol;case"object":return Array.isArray(t)?re.array:t===null?re.null:t.then&&typeof t.then=="function"&&t.catch&&typeof t.catch=="function"?re.promise:typeof Map<"u"&&t instanceof Map?re.map:typeof Set<"u"&&t instanceof Set?re.set:typeof Date<"u"&&t instanceof Date?re.date:re.object;default:return re.unknown}},Q=Fe.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),n$=t=>JSON.stringify(t,null,2).replace(/"([^"]+)":/g,"$1:");class ur extends Error{constructor(e){super(),this.issues=[],this.addIssue=r=>{this.issues=[...this.issues,r]},this.addIssues=(r=[])=>{this.issues=[...this.issues,...r]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){const n=e||function(o){return o.message},r={_errors:[]},i=o=>{for(const s of o.issues)if(s.code==="invalid_union")s.unionErrors.map(i);else if(s.code==="invalid_return_type")i(s.returnTypeError);else if(s.code==="invalid_arguments")i(s.argumentsError);else if(s.path.length===0)r._errors.push(n(s));else{let a=r,l=0;for(;l<s.path.length;){const c=s.path[l];l===s.path.length-1?(a[c]=a[c]||{_errors:[]},a[c]._errors.push(n(s))):a[c]=a[c]||{_errors:[]},a=a[c],l++}}};return i(this),r}toString(){return this.message}get message(){return JSON.stringify(this.issues,Fe.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=n=>n.message){const n={},r=[];for(const i of this.issues)i.path.length>0?(n[i.path[0]]=n[i.path[0]]||[],n[i.path[0]].push(e(i))):r.push(e(i));return{formErrors:r,fieldErrors:n}}get formErrors(){return this.flatten()}}ur.create=t=>new ur(t);const Ac=(t,e)=>{let n;switch(t.code){case Q.invalid_type:t.received===re.undefined?n="Required":n=`Expected ${t.expected}, received ${t.received}`;break;case Q.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(t.expected,Fe.jsonStringifyReplacer)}`;break;case Q.unrecognized_keys:n=`Unrecognized key(s) in object: ${Fe.joinValues(t.keys,", ")}`;break;case Q.invalid_union:n="Invalid input";break;case Q.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${Fe.joinValues(t.options)}`;break;case Q.invalid_enum_value:n=`Invalid enum value. Expected ${Fe.joinValues(t.options)}, received '${t.received}'`;break;case Q.invalid_arguments:n="Invalid function arguments";break;case Q.invalid_return_type:n="Invalid function return type";break;case Q.invalid_date:n="Invalid date";break;case Q.invalid_string:typeof t.validation=="object"?"includes"in t.validation?(n=`Invalid input: must include "${t.validation.includes}"`,typeof t.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${t.validation.position}`)):"startsWith"in t.validation?n=`Invalid input: must start with "${t.validation.startsWith}"`:"endsWith"in t.validation?n=`Invalid input: must end with "${t.validation.endsWith}"`:Fe.assertNever(t.validation):t.validation!=="regex"?n=`Invalid ${t.validation}`:n="Invalid";break;case Q.too_small:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at least":"more than"} ${t.minimum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at least":"over"} ${t.minimum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${t.minimum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(t.minimum))}`:n="Invalid input";break;case Q.too_big:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at most":"less than"} ${t.maximum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at most":"under"} ${t.maximum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="bigint"?n=`BigInt must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly":t.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(t.maximum))}`:n="Invalid input";break;case Q.custom:n="Invalid input";break;case Q.invalid_intersection_types:n="Intersection results could not be merged";break;case Q.not_multiple_of:n=`Number must be a multiple of ${t.multipleOf}`;break;case Q.not_finite:n="Number must be finite";break;default:n=e.defaultError,Fe.assertNever(t)}return{message:n}};let X4=Ac;function r$(t){X4=t}function df(){return X4}const ff=t=>{const{data:e,path:n,errorMaps:r,issueData:i}=t,o=[...n,...i.path||[]],s={...i,path:o};let a="";const l=r.filter(c=>!!c).slice().reverse();for(const c of l)a=c(s,{data:e,defaultError:a}).message;return{...i,path:o,message:i.message||a}},i$=[];function se(t,e){const n=ff({issueData:e,data:t.data,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,df(),Ac].filter(r=>!!r)});t.common.issues.push(n)}class Zt{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,n){const r=[];for(const i of n){if(i.status==="aborted")return Ee;i.status==="dirty"&&e.dirty(),r.push(i.value)}return{status:e.value,value:r}}static async mergeObjectAsync(e,n){const r=[];for(const i of n)r.push({key:await i.key,value:await i.value});return Zt.mergeObjectSync(e,r)}static mergeObjectSync(e,n){const r={};for(const i of n){const{key:o,value:s}=i;if(o.status==="aborted"||s.status==="aborted")return Ee;o.status==="dirty"&&e.dirty(),s.status==="dirty"&&e.dirty(),o.value!=="__proto__"&&(typeof s.value<"u"||i.alwaysSet)&&(r[o.value]=s.value)}return{status:e.value,value:r}}}const Ee=Object.freeze({status:"aborted"}),J4=t=>({status:"dirty",value:t}),rn=t=>({status:"valid",value:t}),U1=t=>t.status==="aborted",L1=t=>t.status==="dirty",Pc=t=>t.status==="valid",hf=t=>typeof Promise<"u"&&t instanceof Promise;var he;(function(t){t.errToObj=e=>typeof e=="string"?{message:e}:e||{},t.toString=e=>typeof e=="string"?e:e==null?void 0:e.message})(he||(he={}));class Lr{constructor(e,n,r,i){this._cachedPath=[],this.parent=e,this.data=n,this._path=r,this._key=i}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const Ov=(t,e)=>{if(Pc(e))return{success:!0,data:e.value};if(!t.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const n=new ur(t.common.issues);return this._error=n,this._error}}};function Te(t){if(!t)return{};const{errorMap:e,invalid_type_error:n,required_error:r,description:i}=t;if(e&&(n||r))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:i}:{errorMap:(s,a)=>s.code!=="invalid_type"?{message:a.defaultError}:typeof a.data>"u"?{message:r??a.defaultError}:{message:n??a.defaultError},description:i}}class Oe{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return Oi(e.data)}_getOrReturnCtx(e,n){return n||{common:e.parent.common,data:e.data,parsedType:Oi(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new Zt,ctx:{common:e.parent.common,data:e.data,parsedType:Oi(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const n=this._parse(e);if(hf(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(e){const n=this._parse(e);return Promise.resolve(n)}parse(e,n){const r=this.safeParse(e,n);if(r.success)return r.data;throw r.error}safeParse(e,n){var r;const i={common:{issues:[],async:(r=n==null?void 0:n.async)!==null&&r!==void 0?r:!1,contextualErrorMap:n==null?void 0:n.errorMap},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Oi(e)},o=this._parseSync({data:e,path:i.path,parent:i});return Ov(i,o)}async parseAsync(e,n){const r=await this.safeParseAsync(e,n);if(r.success)return r.data;throw r.error}async safeParseAsync(e,n){const r={common:{issues:[],contextualErrorMap:n==null?void 0:n.errorMap,async:!0},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Oi(e)},i=this._parse({data:e,path:r.path,parent:r}),o=await(hf(i)?i:Promise.resolve(i));return Ov(r,o)}refine(e,n){const r=i=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(i):n;return this._refinement((i,o)=>{const s=e(i),a=()=>o.addIssue({code:Q.custom,...r(i)});return typeof Promise<"u"&&s instanceof Promise?s.then(l=>l?!0:(a(),!1)):s?!0:(a(),!1)})}refinement(e,n){return this._refinement((r,i)=>e(r)?!0:(i.addIssue(typeof n=="function"?n(r,i):n),!1))}_refinement(e){return new wr({schema:this,typeName:me.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return ti.create(this,this._def)}nullable(){return ns.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return dr.create(this,this._def)}promise(){return Sa.create(this,this._def)}or(e){return Dc.create([this,e],this._def)}and(e){return kc.create(this,e,this._def)}transform(e){return new wr({...Te(this._def),schema:this,typeName:me.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const n=typeof e=="function"?e:()=>e;return new Lc({...Te(this._def),innerType:this,defaultValue:n,typeName:me.ZodDefault})}brand(){return new t6({typeName:me.ZodBranded,type:this,...Te(this._def)})}catch(e){const n=typeof e=="function"?e:()=>e;return new wf({...Te(this._def),innerType:this,catchValue:n,typeName:me.ZodCatch})}describe(e){const n=this.constructor;return new n({...this._def,description:e})}pipe(e){return pu.create(this,e)}readonly(){return vf.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const o$=/^c[^\s-]{8,}$/i,s$=/^[a-z][a-z0-9]*$/,a$=/^[0-9A-HJKMNP-TV-Z]{26}$/,l$=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,c$=/^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,u$="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let Y0;const d$=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,f$=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,h$=t=>t.precision?t.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`):t.precision===0?t.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):t.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function p$(t,e){return!!((e==="v4"||!e)&&d$.test(t)||(e==="v6"||!e)&&f$.test(t))}class or extends Oe{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==re.string){const o=this._getOrReturnCtx(e);return se(o,{code:Q.invalid_type,expected:re.string,received:o.parsedType}),Ee}const r=new Zt;let i;for(const o of this._def.checks)if(o.kind==="min")e.data.length<o.value&&(i=this._getOrReturnCtx(e,i),se(i,{code:Q.too_small,minimum:o.value,type:"string",inclusive:!0,exact:!1,message:o.message}),r.dirty());else if(o.kind==="max")e.data.length>o.value&&(i=this._getOrReturnCtx(e,i),se(i,{code:Q.too_big,maximum:o.value,type:"string",inclusive:!0,exact:!1,message:o.message}),r.dirty());else if(o.kind==="length"){const s=e.data.length>o.value,a=e.data.length<o.value;(s||a)&&(i=this._getOrReturnCtx(e,i),s?se(i,{code:Q.too_big,maximum:o.value,type:"string",inclusive:!0,exact:!0,message:o.message}):a&&se(i,{code:Q.too_small,minimum:o.value,type:"string",inclusive:!0,exact:!0,message:o.message}),r.dirty())}else if(o.kind==="email")c$.test(e.data)||(i=this._getOrReturnCtx(e,i),se(i,{validation:"email",code:Q.invalid_string,message:o.message}),r.dirty());else if(o.kind==="emoji")Y0||(Y0=new RegExp(u$,"u")),Y0.test(e.data)||(i=this._getOrReturnCtx(e,i),se(i,{validation:"emoji",code:Q.invalid_string,message:o.message}),r.dirty());else if(o.kind==="uuid")l$.test(e.data)||(i=this._getOrReturnCtx(e,i),se(i,{validation:"uuid",code:Q.invalid_string,message:o.message}),r.dirty());else if(o.kind==="cuid")o$.test(e.data)||(i=this._getOrReturnCtx(e,i),se(i,{validation:"cuid",code:Q.invalid_string,message:o.message}),r.dirty());else if(o.kind==="cuid2")s$.test(e.data)||(i=this._getOrReturnCtx(e,i),se(i,{validation:"cuid2",code:Q.invalid_string,message:o.message}),r.dirty());else if(o.kind==="ulid")a$.test(e.data)||(i=this._getOrReturnCtx(e,i),se(i,{validation:"ulid",code:Q.invalid_string,message:o.message}),r.dirty());else if(o.kind==="url")try{new URL(e.data)}catch{i=this._getOrReturnCtx(e,i),se(i,{validation:"url",code:Q.invalid_string,message:o.message}),r.dirty()}else o.kind==="regex"?(o.regex.lastIndex=0,o.regex.test(e.data)||(i=this._getOrReturnCtx(e,i),se(i,{validation:"regex",code:Q.invalid_string,message:o.message}),r.dirty())):o.kind==="trim"?e.data=e.data.trim():o.kind==="includes"?e.data.includes(o.value,o.position)||(i=this._getOrReturnCtx(e,i),se(i,{code:Q.invalid_string,validation:{includes:o.value,position:o.position},message:o.message}),r.dirty()):o.kind==="toLowerCase"?e.data=e.data.toLowerCase():o.kind==="toUpperCase"?e.data=e.data.toUpperCase():o.kind==="startsWith"?e.data.startsWith(o.value)||(i=this._getOrReturnCtx(e,i),se(i,{code:Q.invalid_string,validation:{startsWith:o.value},message:o.message}),r.dirty()):o.kind==="endsWith"?e.data.endsWith(o.value)||(i=this._getOrReturnCtx(e,i),se(i,{code:Q.invalid_string,validation:{endsWith:o.value},message:o.message}),r.dirty()):o.kind==="datetime"?h$(o).test(e.data)||(i=this._getOrReturnCtx(e,i),se(i,{code:Q.invalid_string,validation:"datetime",message:o.message}),r.dirty()):o.kind==="ip"?p$(e.data,o.version)||(i=this._getOrReturnCtx(e,i),se(i,{validation:"ip",code:Q.invalid_string,message:o.message}),r.dirty()):Fe.assertNever(o);return{status:r.value,value:e.data}}_regex(e,n,r){return this.refinement(i=>e.test(i),{validation:n,code:Q.invalid_string,...he.errToObj(r)})}_addCheck(e){return new or({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...he.errToObj(e)})}url(e){return this._addCheck({kind:"url",...he.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...he.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...he.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...he.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...he.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...he.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...he.errToObj(e)})}datetime(e){var n;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,offset:(n=e==null?void 0:e.offset)!==null&&n!==void 0?n:!1,...he.errToObj(e==null?void 0:e.message)})}regex(e,n){return this._addCheck({kind:"regex",regex:e,...he.errToObj(n)})}includes(e,n){return this._addCheck({kind:"includes",value:e,position:n==null?void 0:n.position,...he.errToObj(n==null?void 0:n.message)})}startsWith(e,n){return this._addCheck({kind:"startsWith",value:e,...he.errToObj(n)})}endsWith(e,n){return this._addCheck({kind:"endsWith",value:e,...he.errToObj(n)})}min(e,n){return this._addCheck({kind:"min",value:e,...he.errToObj(n)})}max(e,n){return this._addCheck({kind:"max",value:e,...he.errToObj(n)})}length(e,n){return this._addCheck({kind:"length",value:e,...he.errToObj(n)})}nonempty(e){return this.min(1,he.errToObj(e))}trim(){return new or({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new or({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new or({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get minLength(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxLength(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}}or.create=t=>{var e;return new or({checks:[],typeName:me.ZodString,coerce:(e=t==null?void 0:t.coerce)!==null&&e!==void 0?e:!1,...Te(t)})};function m$(t,e){const n=(t.toString().split(".")[1]||"").length,r=(e.toString().split(".")[1]||"").length,i=n>r?n:r,o=parseInt(t.toFixed(i).replace(".","")),s=parseInt(e.toFixed(i).replace(".",""));return o%s/Math.pow(10,i)}class eo extends Oe{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==re.number){const o=this._getOrReturnCtx(e);return se(o,{code:Q.invalid_type,expected:re.number,received:o.parsedType}),Ee}let r;const i=new Zt;for(const o of this._def.checks)o.kind==="int"?Fe.isInteger(e.data)||(r=this._getOrReturnCtx(e,r),se(r,{code:Q.invalid_type,expected:"integer",received:"float",message:o.message}),i.dirty()):o.kind==="min"?(o.inclusive?e.data<o.value:e.data<=o.value)&&(r=this._getOrReturnCtx(e,r),se(r,{code:Q.too_small,minimum:o.value,type:"number",inclusive:o.inclusive,exact:!1,message:o.message}),i.dirty()):o.kind==="max"?(o.inclusive?e.data>o.value:e.data>=o.value)&&(r=this._getOrReturnCtx(e,r),se(r,{code:Q.too_big,maximum:o.value,type:"number",inclusive:o.inclusive,exact:!1,message:o.message}),i.dirty()):o.kind==="multipleOf"?m$(e.data,o.value)!==0&&(r=this._getOrReturnCtx(e,r),se(r,{code:Q.not_multiple_of,multipleOf:o.value,message:o.message}),i.dirty()):o.kind==="finite"?Number.isFinite(e.data)||(r=this._getOrReturnCtx(e,r),se(r,{code:Q.not_finite,message:o.message}),i.dirty()):Fe.assertNever(o);return{status:i.value,value:e.data}}gte(e,n){return this.setLimit("min",e,!0,he.toString(n))}gt(e,n){return this.setLimit("min",e,!1,he.toString(n))}lte(e,n){return this.setLimit("max",e,!0,he.toString(n))}lt(e,n){return this.setLimit("max",e,!1,he.toString(n))}setLimit(e,n,r,i){return new eo({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:r,message:he.toString(i)}]})}_addCheck(e){return new eo({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:he.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:he.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:he.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:he.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:he.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:he.toString(n)})}finite(e){return this._addCheck({kind:"finite",message:he.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:he.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:he.toString(e)})}get minValue(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&Fe.isInteger(e.value))}get isFinite(){let e=null,n=null;for(const r of this._def.checks){if(r.kind==="finite"||r.kind==="int"||r.kind==="multipleOf")return!0;r.kind==="min"?(n===null||r.value>n)&&(n=r.value):r.kind==="max"&&(e===null||r.value<e)&&(e=r.value)}return Number.isFinite(n)&&Number.isFinite(e)}}eo.create=t=>new eo({checks:[],typeName:me.ZodNumber,coerce:(t==null?void 0:t.coerce)||!1,...Te(t)});class to extends Oe{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==re.bigint){const o=this._getOrReturnCtx(e);return se(o,{code:Q.invalid_type,expected:re.bigint,received:o.parsedType}),Ee}let r;const i=new Zt;for(const o of this._def.checks)o.kind==="min"?(o.inclusive?e.data<o.value:e.data<=o.value)&&(r=this._getOrReturnCtx(e,r),se(r,{code:Q.too_small,type:"bigint",minimum:o.value,inclusive:o.inclusive,message:o.message}),i.dirty()):o.kind==="max"?(o.inclusive?e.data>o.value:e.data>=o.value)&&(r=this._getOrReturnCtx(e,r),se(r,{code:Q.too_big,type:"bigint",maximum:o.value,inclusive:o.inclusive,message:o.message}),i.dirty()):o.kind==="multipleOf"?e.data%o.value!==BigInt(0)&&(r=this._getOrReturnCtx(e,r),se(r,{code:Q.not_multiple_of,multipleOf:o.value,message:o.message}),i.dirty()):Fe.assertNever(o);return{status:i.value,value:e.data}}gte(e,n){return this.setLimit("min",e,!0,he.toString(n))}gt(e,n){return this.setLimit("min",e,!1,he.toString(n))}lte(e,n){return this.setLimit("max",e,!0,he.toString(n))}lt(e,n){return this.setLimit("max",e,!1,he.toString(n))}setLimit(e,n,r,i){return new to({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:r,message:he.toString(i)}]})}_addCheck(e){return new to({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:he.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:he.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:he.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:he.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:he.toString(n)})}get minValue(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}}to.create=t=>{var e;return new to({checks:[],typeName:me.ZodBigInt,coerce:(e=t==null?void 0:t.coerce)!==null&&e!==void 0?e:!1,...Te(t)})};class Ic extends Oe{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==re.boolean){const r=this._getOrReturnCtx(e);return se(r,{code:Q.invalid_type,expected:re.boolean,received:r.parsedType}),Ee}return rn(e.data)}}Ic.create=t=>new Ic({typeName:me.ZodBoolean,coerce:(t==null?void 0:t.coerce)||!1,...Te(t)});class es extends Oe{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==re.date){const o=this._getOrReturnCtx(e);return se(o,{code:Q.invalid_type,expected:re.date,received:o.parsedType}),Ee}if(isNaN(e.data.getTime())){const o=this._getOrReturnCtx(e);return se(o,{code:Q.invalid_date}),Ee}const r=new Zt;let i;for(const o of this._def.checks)o.kind==="min"?e.data.getTime()<o.value&&(i=this._getOrReturnCtx(e,i),se(i,{code:Q.too_small,message:o.message,inclusive:!0,exact:!1,minimum:o.value,type:"date"}),r.dirty()):o.kind==="max"?e.data.getTime()>o.value&&(i=this._getOrReturnCtx(e,i),se(i,{code:Q.too_big,message:o.message,inclusive:!0,exact:!1,maximum:o.value,type:"date"}),r.dirty()):Fe.assertNever(o);return{status:r.value,value:new Date(e.data.getTime())}}_addCheck(e){return new es({...this._def,checks:[...this._def.checks,e]})}min(e,n){return this._addCheck({kind:"min",value:e.getTime(),message:he.toString(n)})}max(e,n){return this._addCheck({kind:"max",value:e.getTime(),message:he.toString(n)})}get minDate(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e!=null?new Date(e):null}}es.create=t=>new es({checks:[],coerce:(t==null?void 0:t.coerce)||!1,typeName:me.ZodDate,...Te(t)});class pf extends Oe{_parse(e){if(this._getType(e)!==re.symbol){const r=this._getOrReturnCtx(e);return se(r,{code:Q.invalid_type,expected:re.symbol,received:r.parsedType}),Ee}return rn(e.data)}}pf.create=t=>new pf({typeName:me.ZodSymbol,...Te(t)});class $c extends Oe{_parse(e){if(this._getType(e)!==re.undefined){const r=this._getOrReturnCtx(e);return se(r,{code:Q.invalid_type,expected:re.undefined,received:r.parsedType}),Ee}return rn(e.data)}}$c.create=t=>new $c({typeName:me.ZodUndefined,...Te(t)});class Oc extends Oe{_parse(e){if(this._getType(e)!==re.null){const r=this._getOrReturnCtx(e);return se(r,{code:Q.invalid_type,expected:re.null,received:r.parsedType}),Ee}return rn(e.data)}}Oc.create=t=>new Oc({typeName:me.ZodNull,...Te(t)});class Ca extends Oe{constructor(){super(...arguments),this._any=!0}_parse(e){return rn(e.data)}}Ca.create=t=>new Ca({typeName:me.ZodAny,...Te(t)});class Ro extends Oe{constructor(){super(...arguments),this._unknown=!0}_parse(e){return rn(e.data)}}Ro.create=t=>new Ro({typeName:me.ZodUnknown,...Te(t)});class hi extends Oe{_parse(e){const n=this._getOrReturnCtx(e);return se(n,{code:Q.invalid_type,expected:re.never,received:n.parsedType}),Ee}}hi.create=t=>new hi({typeName:me.ZodNever,...Te(t)});class mf extends Oe{_parse(e){if(this._getType(e)!==re.undefined){const r=this._getOrReturnCtx(e);return se(r,{code:Q.invalid_type,expected:re.void,received:r.parsedType}),Ee}return rn(e.data)}}mf.create=t=>new mf({typeName:me.ZodVoid,...Te(t)});class dr extends Oe{_parse(e){const{ctx:n,status:r}=this._processInputParams(e),i=this._def;if(n.parsedType!==re.array)return se(n,{code:Q.invalid_type,expected:re.array,received:n.parsedType}),Ee;if(i.exactLength!==null){const s=n.data.length>i.exactLength.value,a=n.data.length<i.exactLength.value;(s||a)&&(se(n,{code:s?Q.too_big:Q.too_small,minimum:a?i.exactLength.value:void 0,maximum:s?i.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:i.exactLength.message}),r.dirty())}if(i.minLength!==null&&n.data.length<i.minLength.value&&(se(n,{code:Q.too_small,minimum:i.minLength.value,type:"array",inclusive:!0,exact:!1,message:i.minLength.message}),r.dirty()),i.maxLength!==null&&n.data.length>i.maxLength.value&&(se(n,{code:Q.too_big,maximum:i.maxLength.value,type:"array",inclusive:!0,exact:!1,message:i.maxLength.message}),r.dirty()),n.common.async)return Promise.all([...n.data].map((s,a)=>i.type._parseAsync(new Lr(n,s,n.path,a)))).then(s=>Zt.mergeArray(r,s));const o=[...n.data].map((s,a)=>i.type._parseSync(new Lr(n,s,n.path,a)));return Zt.mergeArray(r,o)}get element(){return this._def.type}min(e,n){return new dr({...this._def,minLength:{value:e,message:he.toString(n)}})}max(e,n){return new dr({...this._def,maxLength:{value:e,message:he.toString(n)}})}length(e,n){return new dr({...this._def,exactLength:{value:e,message:he.toString(n)}})}nonempty(e){return this.min(1,e)}}dr.create=(t,e)=>new dr({type:t,minLength:null,maxLength:null,exactLength:null,typeName:me.ZodArray,...Te(e)});function xs(t){if(t instanceof it){const e={};for(const n in t.shape){const r=t.shape[n];e[n]=ti.create(xs(r))}return new it({...t._def,shape:()=>e})}else return t instanceof dr?new dr({...t._def,type:xs(t.element)}):t instanceof ti?ti.create(xs(t.unwrap())):t instanceof ns?ns.create(xs(t.unwrap())):t instanceof Br?Br.create(t.items.map(e=>xs(e))):t}class it extends Oe{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),n=Fe.objectKeys(e);return this._cached={shape:e,keys:n}}_parse(e){if(this._getType(e)!==re.object){const c=this._getOrReturnCtx(e);return se(c,{code:Q.invalid_type,expected:re.object,received:c.parsedType}),Ee}const{status:r,ctx:i}=this._processInputParams(e),{shape:o,keys:s}=this._getCached(),a=[];if(!(this._def.catchall instanceof hi&&this._def.unknownKeys==="strip"))for(const c in i.data)s.includes(c)||a.push(c);const l=[];for(const c of s){const u=o[c],d=i.data[c];l.push({key:{status:"valid",value:c},value:u._parse(new Lr(i,d,i.path,c)),alwaysSet:c in i.data})}if(this._def.catchall instanceof hi){const c=this._def.unknownKeys;if(c==="passthrough")for(const u of a)l.push({key:{status:"valid",value:u},value:{status:"valid",value:i.data[u]}});else if(c==="strict")a.length>0&&(se(i,{code:Q.unrecognized_keys,keys:a}),r.dirty());else if(c!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const c=this._def.catchall;for(const u of a){const d=i.data[u];l.push({key:{status:"valid",value:u},value:c._parse(new Lr(i,d,i.path,u)),alwaysSet:u in i.data})}}return i.common.async?Promise.resolve().then(async()=>{const c=[];for(const u of l){const d=await u.key;c.push({key:d,value:await u.value,alwaysSet:u.alwaysSet})}return c}).then(c=>Zt.mergeObjectSync(r,c)):Zt.mergeObjectSync(r,l)}get shape(){return this._def.shape()}strict(e){return he.errToObj,new it({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(n,r)=>{var i,o,s,a;const l=(s=(o=(i=this._def).errorMap)===null||o===void 0?void 0:o.call(i,n,r).message)!==null&&s!==void 0?s:r.defaultError;return n.code==="unrecognized_keys"?{message:(a=he.errToObj(e).message)!==null&&a!==void 0?a:l}:{message:l}}}:{}})}strip(){return new it({...this._def,unknownKeys:"strip"})}passthrough(){return new it({...this._def,unknownKeys:"passthrough"})}extend(e){return new it({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new it({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:me.ZodObject})}setKey(e,n){return this.augment({[e]:n})}catchall(e){return new it({...this._def,catchall:e})}pick(e){const n={};return Fe.objectKeys(e).forEach(r=>{e[r]&&this.shape[r]&&(n[r]=this.shape[r])}),new it({...this._def,shape:()=>n})}omit(e){const n={};return Fe.objectKeys(this.shape).forEach(r=>{e[r]||(n[r]=this.shape[r])}),new it({...this._def,shape:()=>n})}deepPartial(){return xs(this)}partial(e){const n={};return Fe.objectKeys(this.shape).forEach(r=>{const i=this.shape[r];e&&!e[r]?n[r]=i:n[r]=i.optional()}),new it({...this._def,shape:()=>n})}required(e){const n={};return Fe.objectKeys(this.shape).forEach(r=>{if(e&&!e[r])n[r]=this.shape[r];else{let o=this.shape[r];for(;o instanceof ti;)o=o._def.innerType;n[r]=o}}),new it({...this._def,shape:()=>n})}keyof(){return e6(Fe.objectKeys(this.shape))}}it.create=(t,e)=>new it({shape:()=>t,unknownKeys:"strip",catchall:hi.create(),typeName:me.ZodObject,...Te(e)});it.strictCreate=(t,e)=>new it({shape:()=>t,unknownKeys:"strict",catchall:hi.create(),typeName:me.ZodObject,...Te(e)});it.lazycreate=(t,e)=>new it({shape:t,unknownKeys:"strip",catchall:hi.create(),typeName:me.ZodObject,...Te(e)});class Dc extends Oe{_parse(e){const{ctx:n}=this._processInputParams(e),r=this._def.options;function i(o){for(const a of o)if(a.result.status==="valid")return a.result;for(const a of o)if(a.result.status==="dirty")return n.common.issues.push(...a.ctx.common.issues),a.result;const s=o.map(a=>new ur(a.ctx.common.issues));return se(n,{code:Q.invalid_union,unionErrors:s}),Ee}if(n.common.async)return Promise.all(r.map(async o=>{const s={...n,common:{...n.common,issues:[]},parent:null};return{result:await o._parseAsync({data:n.data,path:n.path,parent:s}),ctx:s}})).then(i);{let o;const s=[];for(const l of r){const c={...n,common:{...n.common,issues:[]},parent:null},u=l._parseSync({data:n.data,path:n.path,parent:c});if(u.status==="valid")return u;u.status==="dirty"&&!o&&(o={result:u,ctx:c}),c.common.issues.length&&s.push(c.common.issues)}if(o)return n.common.issues.push(...o.ctx.common.issues),o.result;const a=s.map(l=>new ur(l));return se(n,{code:Q.invalid_union,unionErrors:a}),Ee}}get options(){return this._def.options}}Dc.create=(t,e)=>new Dc({options:t,typeName:me.ZodUnion,...Te(e)});const pd=t=>t instanceof Nc?pd(t.schema):t instanceof wr?pd(t.innerType()):t instanceof Mc?[t.value]:t instanceof no?t.options:t instanceof Uc?Object.keys(t.enum):t instanceof Lc?pd(t._def.innerType):t instanceof $c?[void 0]:t instanceof Oc?[null]:null;class Rh extends Oe{_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==re.object)return se(n,{code:Q.invalid_type,expected:re.object,received:n.parsedType}),Ee;const r=this.discriminator,i=n.data[r],o=this.optionsMap.get(i);return o?n.common.async?o._parseAsync({data:n.data,path:n.path,parent:n}):o._parseSync({data:n.data,path:n.path,parent:n}):(se(n,{code:Q.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),Ee)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,n,r){const i=new Map;for(const o of n){const s=pd(o.shape[e]);if(!s)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const a of s){if(i.has(a))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(a)}`);i.set(a,o)}}return new Rh({typeName:me.ZodDiscriminatedUnion,discriminator:e,options:n,optionsMap:i,...Te(r)})}}function B1(t,e){const n=Oi(t),r=Oi(e);if(t===e)return{valid:!0,data:t};if(n===re.object&&r===re.object){const i=Fe.objectKeys(e),o=Fe.objectKeys(t).filter(a=>i.indexOf(a)!==-1),s={...t,...e};for(const a of o){const l=B1(t[a],e[a]);if(!l.valid)return{valid:!1};s[a]=l.data}return{valid:!0,data:s}}else if(n===re.array&&r===re.array){if(t.length!==e.length)return{valid:!1};const i=[];for(let o=0;o<t.length;o++){const s=t[o],a=e[o],l=B1(s,a);if(!l.valid)return{valid:!1};i.push(l.data)}return{valid:!0,data:i}}else return n===re.date&&r===re.date&&+t==+e?{valid:!0,data:t}:{valid:!1}}class kc extends Oe{_parse(e){const{status:n,ctx:r}=this._processInputParams(e),i=(o,s)=>{if(U1(o)||U1(s))return Ee;const a=B1(o.value,s.value);return a.valid?((L1(o)||L1(s))&&n.dirty(),{status:n.value,value:a.data}):(se(r,{code:Q.invalid_intersection_types}),Ee)};return r.common.async?Promise.all([this._def.left._parseAsync({data:r.data,path:r.path,parent:r}),this._def.right._parseAsync({data:r.data,path:r.path,parent:r})]).then(([o,s])=>i(o,s)):i(this._def.left._parseSync({data:r.data,path:r.path,parent:r}),this._def.right._parseSync({data:r.data,path:r.path,parent:r}))}}kc.create=(t,e,n)=>new kc({left:t,right:e,typeName:me.ZodIntersection,...Te(n)});class Br extends Oe{_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==re.array)return se(r,{code:Q.invalid_type,expected:re.array,received:r.parsedType}),Ee;if(r.data.length<this._def.items.length)return se(r,{code:Q.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),Ee;!this._def.rest&&r.data.length>this._def.items.length&&(se(r,{code:Q.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const o=[...r.data].map((s,a)=>{const l=this._def.items[a]||this._def.rest;return l?l._parse(new Lr(r,s,r.path,a)):null}).filter(s=>!!s);return r.common.async?Promise.all(o).then(s=>Zt.mergeArray(n,s)):Zt.mergeArray(n,o)}get items(){return this._def.items}rest(e){return new Br({...this._def,rest:e})}}Br.create=(t,e)=>{if(!Array.isArray(t))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Br({items:t,typeName:me.ZodTuple,rest:null,...Te(e)})};class Rc extends Oe{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==re.object)return se(r,{code:Q.invalid_type,expected:re.object,received:r.parsedType}),Ee;const i=[],o=this._def.keyType,s=this._def.valueType;for(const a in r.data)i.push({key:o._parse(new Lr(r,a,r.path,a)),value:s._parse(new Lr(r,r.data[a],r.path,a))});return r.common.async?Zt.mergeObjectAsync(n,i):Zt.mergeObjectSync(n,i)}get element(){return this._def.valueType}static create(e,n,r){return n instanceof Oe?new Rc({keyType:e,valueType:n,typeName:me.ZodRecord,...Te(r)}):new Rc({keyType:or.create(),valueType:e,typeName:me.ZodRecord,...Te(n)})}}class gf extends Oe{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==re.map)return se(r,{code:Q.invalid_type,expected:re.map,received:r.parsedType}),Ee;const i=this._def.keyType,o=this._def.valueType,s=[...r.data.entries()].map(([a,l],c)=>({key:i._parse(new Lr(r,a,r.path,[c,"key"])),value:o._parse(new Lr(r,l,r.path,[c,"value"]))}));if(r.common.async){const a=new Map;return Promise.resolve().then(async()=>{for(const l of s){const c=await l.key,u=await l.value;if(c.status==="aborted"||u.status==="aborted")return Ee;(c.status==="dirty"||u.status==="dirty")&&n.dirty(),a.set(c.value,u.value)}return{status:n.value,value:a}})}else{const a=new Map;for(const l of s){const c=l.key,u=l.value;if(c.status==="aborted"||u.status==="aborted")return Ee;(c.status==="dirty"||u.status==="dirty")&&n.dirty(),a.set(c.value,u.value)}return{status:n.value,value:a}}}}gf.create=(t,e,n)=>new gf({valueType:e,keyType:t,typeName:me.ZodMap,...Te(n)});class ts extends Oe{_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==re.set)return se(r,{code:Q.invalid_type,expected:re.set,received:r.parsedType}),Ee;const i=this._def;i.minSize!==null&&r.data.size<i.minSize.value&&(se(r,{code:Q.too_small,minimum:i.minSize.value,type:"set",inclusive:!0,exact:!1,message:i.minSize.message}),n.dirty()),i.maxSize!==null&&r.data.size>i.maxSize.value&&(se(r,{code:Q.too_big,maximum:i.maxSize.value,type:"set",inclusive:!0,exact:!1,message:i.maxSize.message}),n.dirty());const o=this._def.valueType;function s(l){const c=new Set;for(const u of l){if(u.status==="aborted")return Ee;u.status==="dirty"&&n.dirty(),c.add(u.value)}return{status:n.value,value:c}}const a=[...r.data.values()].map((l,c)=>o._parse(new Lr(r,l,r.path,c)));return r.common.async?Promise.all(a).then(l=>s(l)):s(a)}min(e,n){return new ts({...this._def,minSize:{value:e,message:he.toString(n)}})}max(e,n){return new ts({...this._def,maxSize:{value:e,message:he.toString(n)}})}size(e,n){return this.min(e,n).max(e,n)}nonempty(e){return this.min(1,e)}}ts.create=(t,e)=>new ts({valueType:t,minSize:null,maxSize:null,typeName:me.ZodSet,...Te(e)});class Gs extends Oe{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==re.function)return se(n,{code:Q.invalid_type,expected:re.function,received:n.parsedType}),Ee;function r(a,l){return ff({data:a,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,df(),Ac].filter(c=>!!c),issueData:{code:Q.invalid_arguments,argumentsError:l}})}function i(a,l){return ff({data:a,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,df(),Ac].filter(c=>!!c),issueData:{code:Q.invalid_return_type,returnTypeError:l}})}const o={errorMap:n.common.contextualErrorMap},s=n.data;if(this._def.returns instanceof Sa){const a=this;return rn(async function(...l){const c=new ur([]),u=await a._def.args.parseAsync(l,o).catch(w=>{throw c.addIssue(r(l,w)),c}),d=await Reflect.apply(s,this,u);return await a._def.returns._def.type.parseAsync(d,o).catch(w=>{throw c.addIssue(i(d,w)),c})})}else{const a=this;return rn(function(...l){const c=a._def.args.safeParse(l,o);if(!c.success)throw new ur([r(l,c.error)]);const u=Reflect.apply(s,this,c.data),d=a._def.returns.safeParse(u,o);if(!d.success)throw new ur([i(u,d.error)]);return d.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new Gs({...this._def,args:Br.create(e).rest(Ro.create())})}returns(e){return new Gs({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,n,r){return new Gs({args:e||Br.create([]).rest(Ro.create()),returns:n||Ro.create(),typeName:me.ZodFunction,...Te(r)})}}class Nc extends Oe{get schema(){return this._def.getter()}_parse(e){const{ctx:n}=this._processInputParams(e);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}}Nc.create=(t,e)=>new Nc({getter:t,typeName:me.ZodLazy,...Te(e)});class Mc extends Oe{_parse(e){if(e.data!==this._def.value){const n=this._getOrReturnCtx(e);return se(n,{received:n.data,code:Q.invalid_literal,expected:this._def.value}),Ee}return{status:"valid",value:e.data}}get value(){return this._def.value}}Mc.create=(t,e)=>new Mc({value:t,typeName:me.ZodLiteral,...Te(e)});function e6(t,e){return new no({values:t,typeName:me.ZodEnum,...Te(e)})}class no extends Oe{_parse(e){if(typeof e.data!="string"){const n=this._getOrReturnCtx(e),r=this._def.values;return se(n,{expected:Fe.joinValues(r),received:n.parsedType,code:Q.invalid_type}),Ee}if(this._def.values.indexOf(e.data)===-1){const n=this._getOrReturnCtx(e),r=this._def.values;return se(n,{received:n.data,code:Q.invalid_enum_value,options:r}),Ee}return rn(e.data)}get options(){return this._def.values}get enum(){const e={};for(const n of this._def.values)e[n]=n;return e}get Values(){const e={};for(const n of this._def.values)e[n]=n;return e}get Enum(){const e={};for(const n of this._def.values)e[n]=n;return e}extract(e){return no.create(e)}exclude(e){return no.create(this.options.filter(n=>!e.includes(n)))}}no.create=e6;class Uc extends Oe{_parse(e){const n=Fe.getValidEnumValues(this._def.values),r=this._getOrReturnCtx(e);if(r.parsedType!==re.string&&r.parsedType!==re.number){const i=Fe.objectValues(n);return se(r,{expected:Fe.joinValues(i),received:r.parsedType,code:Q.invalid_type}),Ee}if(n.indexOf(e.data)===-1){const i=Fe.objectValues(n);return se(r,{received:r.data,code:Q.invalid_enum_value,options:i}),Ee}return rn(e.data)}get enum(){return this._def.values}}Uc.create=(t,e)=>new Uc({values:t,typeName:me.ZodNativeEnum,...Te(e)});class Sa extends Oe{unwrap(){return this._def.type}_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==re.promise&&n.common.async===!1)return se(n,{code:Q.invalid_type,expected:re.promise,received:n.parsedType}),Ee;const r=n.parsedType===re.promise?n.data:Promise.resolve(n.data);return rn(r.then(i=>this._def.type.parseAsync(i,{path:n.path,errorMap:n.common.contextualErrorMap})))}}Sa.create=(t,e)=>new Sa({type:t,typeName:me.ZodPromise,...Te(e)});class wr extends Oe{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===me.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:n,ctx:r}=this._processInputParams(e),i=this._def.effect||null,o={addIssue:s=>{se(r,s),s.fatal?n.abort():n.dirty()},get path(){return r.path}};if(o.addIssue=o.addIssue.bind(o),i.type==="preprocess"){const s=i.transform(r.data,o);return r.common.issues.length?{status:"dirty",value:r.data}:r.common.async?Promise.resolve(s).then(a=>this._def.schema._parseAsync({data:a,path:r.path,parent:r})):this._def.schema._parseSync({data:s,path:r.path,parent:r})}if(i.type==="refinement"){const s=a=>{const l=i.refinement(a,o);if(r.common.async)return Promise.resolve(l);if(l instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return a};if(r.common.async===!1){const a=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});return a.status==="aborted"?Ee:(a.status==="dirty"&&n.dirty(),s(a.value),{status:n.value,value:a.value})}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(a=>a.status==="aborted"?Ee:(a.status==="dirty"&&n.dirty(),s(a.value).then(()=>({status:n.value,value:a.value}))))}if(i.type==="transform")if(r.common.async===!1){const s=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});if(!Pc(s))return s;const a=i.transform(s.value,o);if(a instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:a}}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(s=>Pc(s)?Promise.resolve(i.transform(s.value,o)).then(a=>({status:n.value,value:a})):s);Fe.assertNever(i)}}wr.create=(t,e,n)=>new wr({schema:t,typeName:me.ZodEffects,effect:e,...Te(n)});wr.createWithPreprocess=(t,e,n)=>new wr({schema:e,effect:{type:"preprocess",transform:t},typeName:me.ZodEffects,...Te(n)});class ti extends Oe{_parse(e){return this._getType(e)===re.undefined?rn(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}ti.create=(t,e)=>new ti({innerType:t,typeName:me.ZodOptional,...Te(e)});class ns extends Oe{_parse(e){return this._getType(e)===re.null?rn(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}ns.create=(t,e)=>new ns({innerType:t,typeName:me.ZodNullable,...Te(e)});class Lc extends Oe{_parse(e){const{ctx:n}=this._processInputParams(e);let r=n.data;return n.parsedType===re.undefined&&(r=this._def.defaultValue()),this._def.innerType._parse({data:r,path:n.path,parent:n})}removeDefault(){return this._def.innerType}}Lc.create=(t,e)=>new Lc({innerType:t,typeName:me.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...Te(e)});class wf extends Oe{_parse(e){const{ctx:n}=this._processInputParams(e),r={...n,common:{...n.common,issues:[]}},i=this._def.innerType._parse({data:r.data,path:r.path,parent:{...r}});return hf(i)?i.then(o=>({status:"valid",value:o.status==="valid"?o.value:this._def.catchValue({get error(){return new ur(r.common.issues)},input:r.data})})):{status:"valid",value:i.status==="valid"?i.value:this._def.catchValue({get error(){return new ur(r.common.issues)},input:r.data})}}removeCatch(){return this._def.innerType}}wf.create=(t,e)=>new wf({innerType:t,typeName:me.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...Te(e)});class yf extends Oe{_parse(e){if(this._getType(e)!==re.nan){const r=this._getOrReturnCtx(e);return se(r,{code:Q.invalid_type,expected:re.nan,received:r.parsedType}),Ee}return{status:"valid",value:e.data}}}yf.create=t=>new yf({typeName:me.ZodNaN,...Te(t)});const g$=Symbol("zod_brand");class t6 extends Oe{_parse(e){const{ctx:n}=this._processInputParams(e),r=n.data;return this._def.type._parse({data:r,path:n.path,parent:n})}unwrap(){return this._def.type}}class pu extends Oe{_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.common.async)return(async()=>{const o=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return o.status==="aborted"?Ee:o.status==="dirty"?(n.dirty(),J4(o.value)):this._def.out._parseAsync({data:o.value,path:r.path,parent:r})})();{const i=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return i.status==="aborted"?Ee:i.status==="dirty"?(n.dirty(),{status:"dirty",value:i.value}):this._def.out._parseSync({data:i.value,path:r.path,parent:r})}}static create(e,n){return new pu({in:e,out:n,typeName:me.ZodPipeline})}}class vf extends Oe{_parse(e){const n=this._def.innerType._parse(e);return Pc(n)&&(n.value=Object.freeze(n.value)),n}}vf.create=(t,e)=>new vf({innerType:t,typeName:me.ZodReadonly,...Te(e)});const n6=(t,e={},n)=>t?Ca.create().superRefine((r,i)=>{var o,s;if(!t(r)){const a=typeof e=="function"?e(r):typeof e=="string"?{message:e}:e,l=(s=(o=a.fatal)!==null&&o!==void 0?o:n)!==null&&s!==void 0?s:!0,c=typeof a=="string"?{message:a}:a;i.addIssue({code:"custom",...c,fatal:l})}}):Ca.create(),w$={object:it.lazycreate};var me;(function(t){t.ZodString="ZodString",t.ZodNumber="ZodNumber",t.ZodNaN="ZodNaN",t.ZodBigInt="ZodBigInt",t.ZodBoolean="ZodBoolean",t.ZodDate="ZodDate",t.ZodSymbol="ZodSymbol",t.ZodUndefined="ZodUndefined",t.ZodNull="ZodNull",t.ZodAny="ZodAny",t.ZodUnknown="ZodUnknown",t.ZodNever="ZodNever",t.ZodVoid="ZodVoid",t.ZodArray="ZodArray",t.ZodObject="ZodObject",t.ZodUnion="ZodUnion",t.ZodDiscriminatedUnion="ZodDiscriminatedUnion",t.ZodIntersection="ZodIntersection",t.ZodTuple="ZodTuple",t.ZodRecord="ZodRecord",t.ZodMap="ZodMap",t.ZodSet="ZodSet",t.ZodFunction="ZodFunction",t.ZodLazy="ZodLazy",t.ZodLiteral="ZodLiteral",t.ZodEnum="ZodEnum",t.ZodEffects="ZodEffects",t.ZodNativeEnum="ZodNativeEnum",t.ZodOptional="ZodOptional",t.ZodNullable="ZodNullable",t.ZodDefault="ZodDefault",t.ZodCatch="ZodCatch",t.ZodPromise="ZodPromise",t.ZodBranded="ZodBranded",t.ZodPipeline="ZodPipeline",t.ZodReadonly="ZodReadonly"})(me||(me={}));const y$=(t,e={message:`Input not instance of ${t.name}`})=>n6(n=>n instanceof t,e),r6=or.create,i6=eo.create,v$=yf.create,b$=to.create,o6=Ic.create,x$=es.create,E$=pf.create,_$=$c.create,C$=Oc.create,S$=Ca.create,T$=Ro.create,A$=hi.create,P$=mf.create,I$=dr.create,$$=it.create,O$=it.strictCreate,D$=Dc.create,k$=Rh.create,R$=kc.create,N$=Br.create,M$=Rc.create,U$=gf.create,L$=ts.create,B$=Gs.create,j$=Nc.create,F$=Mc.create,W$=no.create,z$=Uc.create,H$=Sa.create,Dv=wr.create,V$=ti.create,q$=ns.create,Z$=wr.createWithPreprocess,G$=pu.create,K$=()=>r6().optional(),Y$=()=>i6().optional(),Q$=()=>o6().optional(),X$={string:t=>or.create({...t,coerce:!0}),number:t=>eo.create({...t,coerce:!0}),boolean:t=>Ic.create({...t,coerce:!0}),bigint:t=>to.create({...t,coerce:!0}),date:t=>es.create({...t,coerce:!0})},J$=Ee;var U=Object.freeze({__proto__:null,defaultErrorMap:Ac,setErrorMap:r$,getErrorMap:df,makeIssue:ff,EMPTY_PATH:i$,addIssueToContext:se,ParseStatus:Zt,INVALID:Ee,DIRTY:J4,OK:rn,isAborted:U1,isDirty:L1,isValid:Pc,isAsync:hf,get util(){return Fe},get objectUtil(){return M1},ZodParsedType:re,getParsedType:Oi,ZodType:Oe,ZodString:or,ZodNumber:eo,ZodBigInt:to,ZodBoolean:Ic,ZodDate:es,ZodSymbol:pf,ZodUndefined:$c,ZodNull:Oc,ZodAny:Ca,ZodUnknown:Ro,ZodNever:hi,ZodVoid:mf,ZodArray:dr,ZodObject:it,ZodUnion:Dc,ZodDiscriminatedUnion:Rh,ZodIntersection:kc,ZodTuple:Br,ZodRecord:Rc,ZodMap:gf,ZodSet:ts,ZodFunction:Gs,ZodLazy:Nc,ZodLiteral:Mc,ZodEnum:no,ZodNativeEnum:Uc,ZodPromise:Sa,ZodEffects:wr,ZodTransformer:wr,ZodOptional:ti,ZodNullable:ns,ZodDefault:Lc,ZodCatch:wf,ZodNaN:yf,BRAND:g$,ZodBranded:t6,ZodPipeline:pu,ZodReadonly:vf,custom:n6,Schema:Oe,ZodSchema:Oe,late:w$,get ZodFirstPartyTypeKind(){return me},coerce:X$,any:S$,array:I$,bigint:b$,boolean:o6,date:x$,discriminatedUnion:k$,effect:Dv,enum:W$,function:B$,instanceof:y$,intersection:R$,lazy:j$,literal:F$,map:U$,nan:v$,nativeEnum:z$,never:A$,null:C$,nullable:q$,number:i6,object:$$,oboolean:Q$,onumber:Y$,optional:V$,ostring:K$,pipeline:G$,preprocess:Z$,promise:H$,record:M$,set:L$,strictObject:O$,string:r6,symbol:E$,transformer:Dv,tuple:N$,undefined:_$,union:D$,unknown:T$,void:P$,NEVER:J$,ZodIssueCode:Q,quotelessJson:n$,ZodError:ur});const Cn=U.object({message:U.string()});function $e(t){return U.literal(le[t])}U.object({accessList:U.array(U.string()),blockHash:U.string().nullable(),blockNumber:U.string().nullable(),chainId:U.string(),from:U.string(),gas:U.string(),hash:U.string(),input:U.string().nullable(),maxFeePerGas:U.string(),maxPriorityFeePerGas:U.string(),nonce:U.string(),r:U.string(),s:U.string(),to:U.string(),transactionIndex:U.string().nullable(),type:U.string(),v:U.string(),value:U.string()});const eO=U.object({chainId:U.number()}),tO=U.object({email:U.string().email()}),nO=U.object({otp:U.string()}),rO=U.object({chainId:U.optional(U.number())}),iO=U.object({email:U.string().email()}),oO=U.object({themeMode:U.optional(U.enum(["light","dark"])),themeVariables:U.optional(U.record(U.string(),U.string().or(U.number())))}),sO=U.object({metadata:U.object({name:U.string(),description:U.string(),url:U.string(),icons:U.array(U.string())}).optional(),sdkVersion:U.string(),projectId:U.string()}),aO=U.object({action:U.enum(["VERIFY_DEVICE","VERIFY_OTP"])}),lO=U.object({email:U.string().email(),address:U.string(),chainId:U.number()}),cO=U.object({isConnected:U.boolean()}),uO=U.object({chainId:U.number()}),dO=U.object({chainId:U.number()}),fO=U.object({email:U.string().email()}),hO=U.any(),pO=U.object({method:U.literal("personal_sign"),params:U.array(U.any())}),mO=U.object({method:U.literal("eth_sendTransaction"),params:U.array(U.any())}),gO=U.object({method:U.literal("eth_accounts")}),wO=U.object({method:U.literal("eth_getBalance"),params:U.array(U.any())}),yO=U.object({method:U.literal("eth_estimateGas"),params:U.array(U.any())}),vO=U.object({method:U.literal("eth_gasPrice")}),bO=U.object({method:U.literal("eth_signTypedData_v4"),params:U.array(U.any())}),xO=U.object({method:U.literal("eth_getTransactionByHash"),params:U.array(U.any())}),EO=U.object({method:U.literal("eth_blockNumber")}),_O=U.object({method:U.literal("eth_chainId")}),kv=U.object({token:U.string()}),Zu={appEvent:U.object({type:$e("APP_SWITCH_NETWORK"),payload:eO}).or(U.object({type:$e("APP_CONNECT_EMAIL"),payload:tO})).or(U.object({type:$e("APP_CONNECT_DEVICE")})).or(U.object({type:$e("APP_CONNECT_OTP"),payload:nO})).or(U.object({type:$e("APP_GET_USER"),payload:U.optional(rO)})).or(U.object({type:$e("APP_SIGN_OUT")})).or(U.object({type:$e("APP_IS_CONNECTED"),payload:U.optional(kv)})).or(U.object({type:$e("APP_GET_CHAIN_ID")})).or(U.object({type:$e("APP_RPC_REQUEST"),payload:pO.or(mO).or(gO).or(wO).or(yO).or(vO).or(bO).or(EO).or(_O).or(xO)})).or(U.object({type:$e("APP_UPDATE_EMAIL"),payload:iO})).or(U.object({type:$e("APP_AWAIT_UPDATE_EMAIL")})).or(U.object({type:$e("APP_SYNC_THEME"),payload:oO})).or(U.object({type:$e("APP_SYNC_DAPP_DATA"),payload:sO})),frameEvent:U.object({type:$e("FRAME_SWITCH_NETWORK_ERROR"),payload:Cn}).or(U.object({type:$e("FRAME_SWITCH_NETWORK_SUCCESS"),payload:dO})).or(U.object({type:$e("FRAME_CONNECT_EMAIL_ERROR"),payload:Cn})).or(U.object({type:$e("FRAME_CONNECT_EMAIL_SUCCESS"),payload:aO})).or(U.object({type:$e("FRAME_CONNECT_OTP_ERROR"),payload:Cn})).or(U.object({type:$e("FRAME_CONNECT_OTP_SUCCESS")})).or(U.object({type:$e("FRAME_CONNECT_DEVICE_ERROR"),payload:Cn})).or(U.object({type:$e("FRAME_CONNECT_DEVICE_SUCCESS")})).or(U.object({type:$e("FRAME_GET_USER_ERROR"),payload:Cn})).or(U.object({type:$e("FRAME_GET_USER_SUCCESS"),payload:lO})).or(U.object({type:$e("FRAME_SIGN_OUT_ERROR"),payload:Cn})).or(U.object({type:$e("FRAME_SIGN_OUT_SUCCESS")})).or(U.object({type:$e("FRAME_IS_CONNECTED_ERROR"),payload:Cn})).or(U.object({type:$e("FRAME_IS_CONNECTED_SUCCESS"),payload:cO})).or(U.object({type:$e("FRAME_GET_CHAIN_ID_ERROR"),payload:Cn})).or(U.object({type:$e("FRAME_GET_CHAIN_ID_SUCCESS"),payload:uO})).or(U.object({type:$e("FRAME_RPC_REQUEST_ERROR"),payload:Cn})).or(U.object({type:$e("FRAME_RPC_REQUEST_SUCCESS"),payload:hO})).or(U.object({type:$e("FRAME_SESSION_UPDATE"),payload:kv})).or(U.object({type:$e("FRAME_UPDATE_EMAIL_ERROR"),payload:Cn})).or(U.object({type:$e("FRAME_UPDATE_EMAIL_SUCCESS")})).or(U.object({type:$e("FRAME_AWAIT_UPDATE_EMAIL_ERROR"),payload:Cn})).or(U.object({type:$e("FRAME_AWAIT_UPDATE_EMAIL_SUCCESS"),payload:fO})).or(U.object({type:$e("FRAME_SYNC_THEME_ERROR"),payload:Cn})).or(U.object({type:$e("FRAME_SYNC_THEME_SUCCESS")})).or(U.object({type:$e("FRAME_SYNC_DAPP_DATA_ERROR"),payload:Cn})).or(U.object({type:$e("FRAME_SYNC_DAPP_DATA_SUCCESS")}))},Sn={set(t,e){localStorage.setItem(`${le.STORAGE_KEY}${t}`,e)},get(t){return localStorage.getItem(`${le.STORAGE_KEY}${t}`)},delete(t){localStorage.removeItem(`${le.STORAGE_KEY}${t}`)}},CO=["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],Gu=30*1e3,Ks={getBlockchainApiUrl(){try{const{timeZone:t}=new Intl.DateTimeFormat().resolvedOptions(),e=t.toUpperCase();return CO.includes(e)?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"}catch{return!1}},checkIfAllowedToTriggerEmail(){const t=Sn.get(le.LAST_EMAIL_LOGIN_TIME);if(t){const e=Date.now()-Number(t);if(e<Gu){const n=Math.ceil((Gu-e)/1e3);throw new Error(`Please try again after ${n} seconds`)}}},getTimeToNextEmailLogin(){const t=Sn.get(le.LAST_EMAIL_LOGIN_TIME);if(t){const e=Date.now()-Number(t);if(e<Gu)return Math.ceil((Gu-e)/1e3)}return 0}};class SO{constructor(e,n=!1){if(this.iframe=null,this.rpcUrl=Ks.getBlockchainApiUrl(),this.events={onFrameEvent:r=>{window.addEventListener("message",({data:i})=>{var s;if(!((s=i.type)!=null&&s.includes(le.FRAME_EVENT_KEY)))return;const o=Zu.frameEvent.parse(i);r(o)})},onAppEvent:r=>{window.addEventListener("message",({data:i})=>{var s;if(!((s=i.type)!=null&&s.includes(le.APP_EVENT_KEY)))return;const o=Zu.appEvent.parse(i);r(o)})},postAppEvent:r=>{var i;if(!((i=this.iframe)!=null&&i.contentWindow))throw new Error("W3mFrame: iframe is not set");Zu.appEvent.parse(r),window.postMessage(r),this.iframe.contentWindow.postMessage(r,"*")},postFrameEvent:r=>{if(!parent)throw new Error("W3mFrame: parent is not set");Zu.frameEvent.parse(r),parent.postMessage(r,"*")}},this.projectId=e,this.frameLoadPromise=new Promise((r,i)=>{this.frameLoadPromiseResolver={resolve:r,reject:i}}),n){this.frameLoadPromise=new Promise((i,o)=>{this.frameLoadPromiseResolver={resolve:i,reject:o}});const r=document.createElement("iframe");r.id="w3m-iframe",r.src=`${le.SECURE_SITE_SDK}?projectId=${e}`,r.style.position="fixed",r.style.zIndex="999999",r.style.display="none",r.style.opacity="0",r.style.borderRadius="clamp(0px, var(--wui-border-radius-l), 44px)",document.body.appendChild(r),this.iframe=r,this.iframe.onload=()=>{var i;(i=this.frameLoadPromiseResolver)==null||i.resolve(void 0)},this.iframe.onerror=()=>{var i;(i=this.frameLoadPromiseResolver)==null||i.reject("Unable to load email login dependency")}}}get networks(){const e=[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,324,280,100,8453,84531,7777777,999].map(n=>({[n]:{rpcUrl:`${this.rpcUrl}/v1/?chainId=eip155:${n}&projectId=${this.projectId}`,chainId:n}}));return Object.assign({},...e)}}class TO{constructor(e){this.connectEmailResolver=void 0,this.connectDeviceResolver=void 0,this.connectOtpResolver=void 0,this.connectResolver=void 0,this.disconnectResolver=void 0,this.isConnectedResolver=void 0,this.getChainIdResolver=void 0,this.switchChainResolver=void 0,this.rpcRequestResolver=void 0,this.updateEmailResolver=void 0,this.awaitUpdateEmailResolver=void 0,this.syncThemeResolver=void 0,this.syncDappDataResolver=void 0,this.w3mFrame=new SO(e,!0),this.w3mFrame.events.onFrameEvent(n=>{switch(console.log("💻 received",n),n.type){case le.FRAME_CONNECT_EMAIL_SUCCESS:return this.onConnectEmailSuccess(n);case le.FRAME_CONNECT_EMAIL_ERROR:return this.onConnectEmailError(n);case le.FRAME_CONNECT_DEVICE_SUCCESS:return this.onConnectDeviceSuccess();case le.FRAME_CONNECT_DEVICE_ERROR:return this.onConnectDeviceError(n);case le.FRAME_CONNECT_OTP_SUCCESS:return this.onConnectOtpSuccess();case le.FRAME_CONNECT_OTP_ERROR:return this.onConnectOtpError(n);case le.FRAME_GET_USER_SUCCESS:return this.onConnectSuccess(n);case le.FRAME_GET_USER_ERROR:return this.onConnectError(n);case le.FRAME_IS_CONNECTED_SUCCESS:return this.onIsConnectedSuccess(n);case le.FRAME_IS_CONNECTED_ERROR:return this.onIsConnectedError(n);case le.FRAME_GET_CHAIN_ID_SUCCESS:return this.onGetChainIdSuccess(n);case le.FRAME_GET_CHAIN_ID_ERROR:return this.onGetChainIdError(n);case le.FRAME_SIGN_OUT_SUCCESS:return this.onSignOutSuccess();case le.FRAME_SIGN_OUT_ERROR:return this.onSignOutError(n);case le.FRAME_SWITCH_NETWORK_SUCCESS:return this.onSwitchChainSuccess(n);case le.FRAME_SWITCH_NETWORK_ERROR:return this.onSwitchChainError(n);case le.FRAME_RPC_REQUEST_SUCCESS:return this.onRpcRequestSuccess(n);case le.FRAME_RPC_REQUEST_ERROR:return this.onRpcRequestError(n);case le.FRAME_SESSION_UPDATE:return this.onSessionUpdate(n);case le.FRAME_UPDATE_EMAIL_SUCCESS:return this.onUpdateEmailSuccess();case le.FRAME_UPDATE_EMAIL_ERROR:return this.onUpdateEmailError(n);case le.FRAME_AWAIT_UPDATE_EMAIL_SUCCESS:return this.onAwaitUpdateEmailSuccess(n);case le.FRAME_AWAIT_UPDATE_EMAIL_ERROR:return this.onAwaitUpdateEmailError(n);case le.FRAME_SYNC_THEME_SUCCESS:return this.onSyncThemeSuccess();case le.FRAME_SYNC_THEME_ERROR:return this.onSyncThemeError(n);case le.FRAME_SYNC_DAPP_DATA_SUCCESS:return this.onSyncDappDataSuccess();case le.FRAME_SYNC_DAPP_DATA_ERROR:return this.onSyncDappDataError(n);default:return null}})}getLoginEmailUsed(){return!!Sn.get(le.EMAIL_LOGIN_USED_KEY)}getEmail(){return Sn.get(le.EMAIL)}async connectEmail(e){return await this.w3mFrame.frameLoadPromise,Ks.checkIfAllowedToTriggerEmail(),this.w3mFrame.events.postAppEvent({type:le.APP_CONNECT_EMAIL,payload:e}),new Promise((n,r)=>{this.connectEmailResolver={resolve:n,reject:r}})}async connectDevice(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:le.APP_CONNECT_DEVICE}),new Promise((e,n)=>{this.connectDeviceResolver={resolve:e,reject:n}})}async connectOtp(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:le.APP_CONNECT_OTP,payload:e}),new Promise((n,r)=>{this.connectOtpResolver={resolve:n,reject:r}})}async isConnected(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:le.APP_IS_CONNECTED,payload:void 0}),new Promise((e,n)=>{this.isConnectedResolver={resolve:e,reject:n}})}async getChainId(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:le.APP_GET_CHAIN_ID}),new Promise((e,n)=>{this.getChainIdResolver={resolve:e,reject:n}})}async updateEmail(e){return await this.w3mFrame.frameLoadPromise,Ks.checkIfAllowedToTriggerEmail(),this.w3mFrame.events.postAppEvent({type:le.APP_UPDATE_EMAIL,payload:e}),new Promise((n,r)=>{this.updateEmailResolver={resolve:n,reject:r}})}async awaitUpdateEmail(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:le.APP_AWAIT_UPDATE_EMAIL}),new Promise((e,n)=>{this.awaitUpdateEmailResolver={resolve:e,reject:n}})}async syncTheme(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:le.APP_SYNC_THEME,payload:e}),new Promise((n,r)=>{this.syncThemeResolver={resolve:n,reject:r}})}async syncDappData(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:le.APP_SYNC_DAPP_DATA,payload:e}),new Promise((n,r)=>{this.syncDappDataResolver={resolve:n,reject:r}})}async connect(e){const n=(e==null?void 0:e.chainId)??this.getLastUsedChainId()??1;return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:le.APP_GET_USER,payload:{chainId:n}}),new Promise((r,i)=>{this.connectResolver={resolve:r,reject:i}})}async switchNetwork(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:le.APP_SWITCH_NETWORK,payload:{chainId:e}}),new Promise((n,r)=>{this.switchChainResolver={resolve:n,reject:r}})}async disconnect(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:le.APP_SIGN_OUT}),new Promise((e,n)=>{this.disconnectResolver={resolve:e,reject:n}})}async request(e){return await this.w3mFrame.frameLoadPromise,t$.GET_CHAIN_ID===e.method?this.getLastUsedChainId():(this.w3mFrame.events.postAppEvent({type:le.APP_RPC_REQUEST,payload:e}),new Promise((n,r)=>{this.rpcRequestResolver={resolve:n,reject:r}}))}onRpcRequest(e){this.w3mFrame.events.onAppEvent(n=>{n.type.includes(le.RPC_METHOD_KEY)&&e(n)})}onRpcResponse(e){this.w3mFrame.events.onFrameEvent(n=>{n.type.includes(le.RPC_METHOD_KEY)&&e(n)})}onIsConnected(e){this.w3mFrame.events.onFrameEvent(n=>{n.type===le.FRAME_GET_USER_SUCCESS&&e()})}onConnectEmailSuccess(e){var n;(n=this.connectEmailResolver)==null||n.resolve(e.payload),this.setNewLastEmailLoginTime()}onConnectEmailError(e){var n;(n=this.connectEmailResolver)==null||n.reject(e.payload.message)}onConnectDeviceSuccess(){var e;(e=this.connectDeviceResolver)==null||e.resolve(void 0)}onConnectDeviceError(e){var n;(n=this.connectDeviceResolver)==null||n.reject(e.payload.message)}onConnectOtpSuccess(){var e;(e=this.connectOtpResolver)==null||e.resolve(void 0)}onConnectOtpError(e){var n;(n=this.connectOtpResolver)==null||n.reject(e.payload.message)}onConnectSuccess(e){var n;this.setEmailLoginSuccess(e.payload.email),this.setLastUsedChainId(e.payload.chainId),(n=this.connectResolver)==null||n.resolve(e.payload)}onConnectError(e){var n;(n=this.connectResolver)==null||n.reject(e.payload.message)}onIsConnectedSuccess(e){var n;e.payload.isConnected||this.deleteEmailLoginCache(),(n=this.isConnectedResolver)==null||n.resolve(e.payload)}onIsConnectedError(e){var n;(n=this.isConnectedResolver)==null||n.reject(e.payload.message)}onGetChainIdSuccess(e){var n;this.setLastUsedChainId(e.payload.chainId),(n=this.getChainIdResolver)==null||n.resolve(e.payload)}onGetChainIdError(e){var n;(n=this.getChainIdResolver)==null||n.reject(e.payload.message)}onSignOutSuccess(){var e;(e=this.disconnectResolver)==null||e.resolve(void 0),this.deleteEmailLoginCache()}onSignOutError(e){var n;(n=this.disconnectResolver)==null||n.reject(e.payload.message)}onSwitchChainSuccess(e){var n;this.setLastUsedChainId(e.payload.chainId),(n=this.switchChainResolver)==null||n.resolve(e.payload)}onSwitchChainError(e){var n;(n=this.switchChainResolver)==null||n.reject(e.payload.message)}onRpcRequestSuccess(e){var n;(n=this.rpcRequestResolver)==null||n.resolve(e.payload)}onRpcRequestError(e){var n;(n=this.rpcRequestResolver)==null||n.reject(e.payload.message)}onSessionUpdate(e){}onUpdateEmailSuccess(){var e;(e=this.updateEmailResolver)==null||e.resolve(void 0),this.setNewLastEmailLoginTime()}onUpdateEmailError(e){var n;(n=this.updateEmailResolver)==null||n.reject(e.payload.message)}onAwaitUpdateEmailSuccess(e){var n;this.setEmailLoginSuccess(e.payload.email),(n=this.awaitUpdateEmailResolver)==null||n.resolve(e.payload)}onAwaitUpdateEmailError(e){var n;(n=this.awaitUpdateEmailResolver)==null||n.reject(e.payload.message)}onSyncThemeSuccess(){var e;(e=this.syncThemeResolver)==null||e.resolve(void 0)}onSyncThemeError(e){var n;(n=this.syncThemeResolver)==null||n.reject(e.payload.message)}onSyncDappDataSuccess(){var e;(e=this.syncDappDataResolver)==null||e.resolve(void 0)}onSyncDappDataError(e){var n;(n=this.syncDappDataResolver)==null||n.reject(e.payload.message)}setNewLastEmailLoginTime(){Sn.set(le.LAST_EMAIL_LOGIN_TIME,Date.now().toString())}setEmailLoginSuccess(e){Sn.set(le.EMAIL,e),Sn.set(le.EMAIL_LOGIN_USED_KEY,"true"),Sn.delete(le.LAST_EMAIL_LOGIN_TIME)}deleteEmailLoginCache(){Sn.delete(le.EMAIL_LOGIN_USED_KEY),Sn.delete(le.EMAIL),Sn.delete(le.LAST_USED_CHAIN_KEY)}setLastUsedChainId(e){Sn.set(le.LAST_USED_CHAIN_KEY,`${e}`)}getLastUsedChainId(){return Number(Sn.get(le.LAST_USED_CHAIN_KEY))}}var Nh=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const AO=6;let Ta=class extends K{constructor(){var e;super(...arguments),this.email=(e=ce.state.data)==null?void 0:e.email,this.emailConnector=Ge.getEmailConnector(),this.loading=!1,this.timeoutTimeLeft=Ks.getTimeToNextEmailLogin(),this.error="",this.otp=""}firstUpdated(){this.startOTPTimeout()}disconnectedCallback(){clearTimeout(this.OTPTimeout)}render(){if(!this.email)throw new Error("w3m-email-verify-otp-view: No email provided");const e=!!this.timeoutTimeLeft;return I`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["l","0","l","0"]}
        gap="l"
      >
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100"> Enter the code we sent to </wui-text>
          <wui-text variant="paragraph-500" color="fg-100">${this.email}</wui-text>
        </wui-flex>

        <wui-text variant="small-400" color="fg-200">The code expires in 20 minutes</wui-text>

        ${this.loading?I`<wui-loading-spinner size="xl" color="accent-100"></wui-loading-spinner>`:I` <wui-flex flexDirection="column" alignItems="center" gap="xs">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
                .otp=${this.otp}
              ></wui-otp>
              ${this.error?I`<wui-text variant="small-400" color="error-100"
                    >${this.error}. Try Again</wui-text
                  >`:null}
            </wui-flex>`}

        <wui-flex alignItems="center">
          <wui-text variant="small-400" color="fg-200">Didn't receive it?</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${e}>
            Resend ${e?`in ${this.timeoutTimeLeft}s`:"Code"}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}startOTPTimeout(){this.timeoutTimeLeft=Ks.getTimeToNextEmailLogin(),this.OTPTimeout=setInterval(()=>{this.timeoutTimeLeft>0?this.timeoutTimeLeft=Ks.getTimeToNextEmailLogin():clearInterval(this.OTPTimeout)},1e3)}async onOtpInputChange(e){try{this.loading||(this.otp=e.detail,this.emailConnector&&this.otp.length===AO&&(this.loading=!0,await this.emailConnector.provider.connectOtp({otp:this.otp}),xe.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),await Ue.connectExternal(this.emailConnector),Ke.close(),xe.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"email"}})))}catch(n){xe.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),this.error=de.parseError(n),this.loading=!1}}async onResendCode(){try{if(!this.loading&&!this.timeoutTimeLeft){this.error="",this.otp="";const e=Ge.getEmailConnector();if(!e||!this.email)throw new Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await e.provider.connectEmail({email:this.email}),xe.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),this.startOTPTimeout(),pt.showSuccess("Code email resent")}}catch(e){pt.showError(e)}finally{this.loading=!1}}};Ta.styles=e$;Nh([ie()],Ta.prototype,"loading",void 0);Nh([ie()],Ta.prototype,"timeoutTimeLeft",void 0);Nh([ie()],Ta.prototype,"error",void 0);Ta=Nh([Z("w3m-email-verify-otp-view")],Ta);const PO=X`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`;var s6=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let bf=class extends K{constructor(){var e;super(),this.email=(e=ce.state.data)==null?void 0:e.email,this.emailConnector=Ge.getEmailConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw new Error("w3m-email-verify-device-view: No email provided");if(!this.emailConnector)throw new Error("w3m-email-verify-device-view: No email connector provided");return I`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl","s","xxl","s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="verify"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            The code expires in 20 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForDeviceApproval(){this.emailConnector&&(await this.emailConnector.provider.connectDevice(),xe.sendEvent({type:"track",event:"DEVICE_REGISTERED_FOR_EMAIL"}),xe.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),ce.replace("EmailVerifyOtp",{email:this.email}))}async onResendCode(){try{if(!this.loading){if(!this.emailConnector||!this.email)throw new Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await this.emailConnector.provider.connectEmail({email:this.email}),pt.showSuccess("Code email resent")}}catch(e){pt.showError(e)}finally{this.loading=!1}}};bf.styles=PO;s6([ie()],bf.prototype,"loading",void 0);bf=s6([Z("w3m-email-verify-device-view")],bf);const IO=X`
  div {
    width: 100%;
    height: 400px;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`;var a6=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let xf=class extends K{constructor(){super(),this.bodyObserver=void 0,this.unsubscribe=[],this.iframe=document.getElementById("w3m-iframe"),this.ready=!1,this.unsubscribe.push(Ke.subscribeKey("open",e=>{e||this.onHideIframe()}))}disconnectedCallback(){var e;this.unsubscribe.forEach(n=>n()),(e=this.bodyObserver)==null||e.unobserve(window.document.body)}firstUpdated(){this.iframe.style.display="block";const n=this.renderRoot.querySelector("div");this.bodyObserver=new ResizeObserver(()=>{const i=(n==null?void 0:n.getBoundingClientRect())??{left:0,top:0,width:0,height:0};this.iframe.style.width=`${i.width}px`,this.iframe.style.height=`${i.height-10}px`,this.iframe.style.left=`${i.left}px`,this.iframe.style.top=`${i.top+10/2}px`,this.ready=!0}),this.bodyObserver.observe(window.document.body)}render(){return this.ready&&this.onShowIframe(),I`<div data-ready=${this.ready}></div>`}onShowIframe(){const e=window.innerWidth<=430;this.iframe.animate([{opacity:0,transform:e?"translateY(50px)":"scale(.95)"},{opacity:1,transform:e?"translateY(0)":"scale(1)"}],{duration:200,easing:"ease",fill:"forwards",delay:300})}async onHideIframe(){await this.iframe.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,this.iframe.style.display="none"}};xf.styles=IO;a6([ie()],xf.prototype,"ready",void 0);xf=a6([Z("w3m-approve-transaction-view")],xf);var $O=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Rv=class extends K{render(){return I`
      <wui-flex flexDirection="column" alignItems="center" gap="xl" padding="xl">
        <wui-text variant="paragraph-400" color="fg-100">Follow the instructions on</wui-text>
        <wui-chip
          icon="externalLink"
          variant="fill"
          href=${Xr.SECURE_SITE_DASHBOARD}
          imageSrc=${Xr.SECURE_SITE_FAVICON}
        >
        </wui-chip>
        <wui-text variant="small-400" color="fg-200">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};Rv=$O([Z("w3m-upgrade-wallet-view")],Rv);const OO=X`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`;var ew=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Bc=class extends K{constructor(){var e;super(...arguments),this.formRef=Eh(),this.initialValue=((e=ce.state.data)==null?void 0:e.email)??"",this.email="",this.loading=!1}firstUpdated(){var e;(e=this.formRef.value)==null||e.addEventListener("keydown",n=>{n.key==="Enter"&&this.onSubmitEmail(n)})}render(){const e=!this.loading&&this.email.length>3&&this.email!==this.initialValue;return I`
      <wui-flex flexDirection="column" padding="m" gap="m">
        <form ${_h(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialValue}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>

        <wui-flex gap="s">
          <wui-button size="md" variant="shade" fullWidth @click=${ce.goBack}>
            Cancel
          </wui-button>

          <wui-button
            size="md"
            variant="fill"
            fullWidth
            @click=${this.onSubmitEmail.bind(this)}
            .disabled=${!e}
            .loading=${this.loading}
          >
            Save
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}onEmailInputChange(e){this.email=e.detail}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();const n=Ge.getEmailConnector();if(!n)throw new Error("w3m-update-email-wallet: Email connector not found");await n.provider.updateEmail({email:this.email}),xe.sendEvent({type:"track",event:"EMAIL_EDIT"}),ce.replace("UpdateEmailWalletWaiting",{email:this.email})}catch(n){pt.showError(n),this.loading=!1}}};Bc.styles=OO;ew([ie()],Bc.prototype,"email",void 0);ew([ie()],Bc.prototype,"loading",void 0);Bc=ew([Z("w3m-update-email-wallet-view")],Bc);const DO=X`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`;var l6=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Ef=class extends K{constructor(){var e;super(),this.email=(e=ce.state.data)==null?void 0:e.email,this.emailConnector=Ge.getEmailConnector(),this.loading=!1,this.listenForEmailUpdateApproval()}render(){if(!this.email)throw new Error("w3m-update-email-wallet-waiting-view: No email provided");if(!this.emailConnector)throw new Error("w3m-update-email-wallet-waiting-view: No email connector provided");return I`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl","s","xxl","s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="mail"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve verification link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100">${this.email}</wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            You will receive an approval request on your former mail to confirm the new one
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForEmailUpdateApproval(){this.emailConnector&&(await this.emailConnector.provider.awaitUpdateEmail(),ce.replace("Account"),pt.showSuccess("Email updated"))}async onResendCode(){try{if(!this.loading){if(!this.emailConnector||!this.email)throw new Error("w3m-update-email-wallet-waiting-view: Unable to resend email");this.loading=!0,await this.emailConnector.provider.updateEmail({email:this.email}),this.listenForEmailUpdateApproval(),pt.showSuccess("Code email resent")}}catch(e){pt.showError(e)}finally{this.loading=!1}}};Ef.styles=DO;l6([ie()],Ef.prototype,"loading",void 0);Ef=l6([Z("w3m-update-email-wallet-waiting-view")],Ef);const kO=X`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;function c6(t){const{connectors:e}=Ge.state,n=e.filter(o=>o.type==="ANNOUNCED").reduce((o,s)=>{var a;return(a=s.info)!=null&&a.rdns&&(o[s.info.rdns]=!0),o},{});return t.map(o=>({...o,installed:!!o.rdns&&!!n[o.rdns??""]})).sort((o,s)=>Number(s.installed)-Number(o.installed))}var mu=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const Nv="local-paginator";let rs=class extends K{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!Re.state.wallets.length,this.wallets=Re.state.wallets,this.recommended=Re.state.recommended,this.featured=Re.state.featured,this.unsubscribe.push(Re.subscribeKey("wallets",e=>this.wallets=e),Re.subscribeKey("recommended",e=>this.recommended=e),Re.subscribeKey("featured",e=>this.featured=e))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var e;this.unsubscribe.forEach(n=>n()),(e=this.paginationObserver)==null||e.disconnect()}render(){return I`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){var n;const e=(n=this.shadowRoot)==null?void 0:n.querySelector("wui-grid");this.initial&&e&&(await Re.fetchWallets({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,n){return[...Array(e)].map(()=>I`
        <wui-card-select-loader type="wallet" id=${Ce(n)}></wui-card-select-loader>
      `)}walletsTemplate(){const e=[...this.featured,...this.recommended,...this.wallets];return c6(e).map(r=>I`
        <wui-card-select
          imageSrc=${Ce(ft.getWalletImage(r))}
          type="wallet"
          name=${r.name}
          @click=${()=>this.onConnectWallet(r)}
          .installed=${r.installed}
        ></wui-card-select>
      `)}paginationLoaderTemplate(){const{wallets:e,recommended:n,featured:r,count:i}=Re.state,o=window.innerWidth<352?3:4,s=e.length+n.length;let l=Math.ceil(s/o)*o-s+o;return l-=e.length?r.length%o:0,i===0&&r.length>0?null:i===0||[...r,...e,...n].length<i?this.shimmerTemplate(l,Nv):null}createPaginationObserver(){var n;const e=(n=this.shadowRoot)==null?void 0:n.querySelector(`#${Nv}`);e&&(this.paginationObserver=new IntersectionObserver(([r])=>{if(r!=null&&r.isIntersecting&&!this.initial){const{page:i,count:o,wallets:s}=Re.state;s.length<o&&Re.fetchWallets({page:i+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){const{connectors:n}=Ge.state,r=n.find(({explorerId:i})=>i===e.id);r?ce.push("ConnectingExternal",{connector:r}):ce.push("ConnectingWalletConnect",{wallet:e})}};rs.styles=kO;mu([ie()],rs.prototype,"initial",void 0);mu([ie()],rs.prototype,"wallets",void 0);mu([ie()],rs.prototype,"recommended",void 0);mu([ie()],rs.prototype,"featured",void 0);rs=mu([Z("w3m-all-wallets-list")],rs);const RO=X`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`;var tw=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let jc=class extends K{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?I`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query!==this.prevQuery&&(this.prevQuery=this.query,this.loading=!0,await Re.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){const{search:e}=Re.state,n=c6(e);return e.length?I`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${n.map(r=>I`
            <wui-card-select
              imageSrc=${Ce(ft.getWalletImage(r))}
              type="wallet"
              name=${r.name}
              @click=${()=>this.onConnectWallet(r)}
              .installed=${r.installed}
            ></wui-card-select>
          `)}
      </wui-grid>
    `:I`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(e){const{connectors:n}=Ge.state,r=n.find(({explorerId:i})=>i===e.id);r?ce.push("ConnectingExternal",{connector:r}):ce.push("ConnectingWalletConnect",{wallet:e})}};jc.styles=RO;tw([ie()],jc.prototype,"loading",void 0);tw([$()],jc.prototype,"query",void 0);jc=tw([Z("w3m-all-wallets-search")],jc);var Mh=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Fc=class extends K{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(Ue.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.generateTabs();return I`
      <wui-flex justifyContent="center" .padding=${["l","0","0","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map(n=>n==="browser"?{label:"Browser",icon:"extension",platform:"browser"}:n==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:n==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:n==="web"?{label:"Webapp",icon:"browser",platform:"web"}:n==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(({platform:n})=>n),e}onTabChange(e){var r;const n=this.platformTabs[e];n&&((r=this.onSelectPlatfrom)==null||r.call(this,n))}};Mh([$({type:Array})],Fc.prototype,"platforms",void 0);Mh([$()],Fc.prototype,"onSelectPlatfrom",void 0);Mh([ie()],Fc.prototype,"buffering",void 0);Fc=Mh([Z("w3m-connecting-header")],Fc);var NO=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Mv=class extends bn{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),xe.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;const{connectors:e}=Ge.state,n=e.find(i=>{var o,s;return i.type==="ANNOUNCED"&&((o=i.info)==null?void 0:o.rdns)===((s=this.wallet)==null?void 0:s.rdns)}),r=e.find(i=>i.type==="INJECTED");n?await Ue.connectExternal(n):r&&await Ue.connectExternal(r),Ke.close(),xe.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser"}})}catch(e){xe.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(e==null?void 0:e.message)??"Unknown"}}),this.error=!0}}};Mv=NO([Z("w3m-connecting-wc-browser")],Mv);var MO=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Uv=class extends bn{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),xe.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.timeout=setTimeout(()=>{var e;(e=this.onConnect)==null||e.call(this)},200))}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:n,name:r}=this.wallet,{redirect:i,href:o}=de.formatNativeUrl(n,this.uri);Ue.setWcLinking({name:r,href:o}),Ue.setRecentWallet(this.wallet),de.openHref(i,"_blank")}catch{this.error=!0}}};Uv=MO([Z("w3m-connecting-wc-desktop")],Uv);var UO=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Lv=class extends bn{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),xe.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){var e;!this.ready&&this.uri&&(this.ready=!0,(e=this.onConnect)==null||e.call(this))}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:n,name:r}=this.wallet,{redirect:i,href:o}=de.formatNativeUrl(n,this.uri);Ue.setWcLinking({name:r,href:o}),Ue.setRecentWallet(this.wallet),de.openHref(i,"_self")}catch{this.error=!0}}onBuffering(){const e=de.isIos();(document==null?void 0:document.visibilityState)==="visible"&&!this.error&&e&&(Ue.setBuffering(!0),setTimeout(()=>{Ue.setBuffering(!1)},5e3))}};Lv=UO([Z("w3m-connecting-wc-mobile")],Lv);const LO=X`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;var BO=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let j1=class extends bn{constructor(){var e;super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),xe.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:((e=this.wallet)==null?void 0:e.name)??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),I`
      <wui-flex padding="xl" flexDirection="column" gap="xl" alignItems="center">
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40,n=this.wallet?this.wallet.name:void 0;return Ue.setWcLinking(void 0),Ue.setRecentWallet(this.wallet),I` <wui-qr-code
      size=${e}
      theme=${cn.state.themeMode}
      uri=${this.uri}
      imageSrc=${Ce(ft.getWalletImage(this.wallet))}
      alt=${Ce(n)}
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return I`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};j1.styles=LO;j1=BO([Z("w3m-connecting-wc-qrcode")],j1);const jO=X`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;var FO=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let F1=class extends K{constructor(){var e;super(...arguments),this.dappImageUrl=(e=We.state.metadata)==null?void 0:e.icons,this.walletImageUrl=Xt.getConnectedWalletImageUrl()}firstUpdated(){var n;const e=(n=this.shadowRoot)==null?void 0:n.querySelectorAll("wui-visual-thumbnail");e!=null&&e[0]&&this.createAnimation(e[0],"translate(18px)"),e!=null&&e[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){var e;return I`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${(e=this.dappImageUrl)==null?void 0:e[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,n){e.animate([{transform:"translateX(0px)"},{transform:n}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};F1.styles=jO;F1=FO([Z("w3m-connecting-siwe")],F1);var WO=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Bv=class extends K{constructor(){var e;if(super(),this.wallet=(e=ce.state.data)==null?void 0:e.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");xe.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return I`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${Ce(ft.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};Bv=WO([Z("w3m-connecting-wc-unsupported")],Bv);var zO=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let jv=class extends bn{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",xe.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:n,name:r}=this.wallet,{redirect:i,href:o}=de.formatUniversalUrl(n,this.uri);Ue.setWcLinking({name:r,href:o}),Ue.setRecentWallet(this.wallet),de.openHref(i,"_blank")}catch{this.error=!0}}};jv=zO([Z("w3m-connecting-wc-web")],jv);const HO=X`
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`;var Uh=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};function Fv(){var s,a,l,c,u,d,p;const t=(a=(s=ce.state.data)==null?void 0:s.connector)==null?void 0:a.name,e=(c=(l=ce.state.data)==null?void 0:l.wallet)==null?void 0:c.name,n=(d=(u=ce.state.data)==null?void 0:u.network)==null?void 0:d.name,r=e??t,i=Ge.getConnectors();return{Connect:`Connect ${i.length===1&&((p=i[0])==null?void 0:p.id)==="w3m-email"?"Email":""} Wallet`,Account:void 0,ConnectingExternal:r??"Connect Wallet",ConnectingWalletConnect:r??"WalletConnect",ConnectingSiwe:"Sign In",Networks:"Choose Network",SwitchNetwork:n??"Switch Network",AllWallets:"All Wallets",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",GetWallet:"Get a wallet",Downloads:r?`Get ${r}`:"Downloads",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",ApproveTransaction:"Approve Transaction",Transactions:"Activity",UpgradeEmailWallet:"Upgrade your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailWalletWaiting:"Approve Email"}}let Aa=class extends K{constructor(){super(),this.unsubscribe=[],this.heading=Fv()[ce.state.view],this.buffering=!1,this.showBack=!1,this.unsubscribe.push(ce.subscribeKey("view",e=>{this.onViewChange(e),this.onHistoryChange()}),Ue.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){return I`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${this.onClose.bind(this)}
          data-testid="w3m-header-close"
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `}onWalletHelp(){xe.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),ce.push("WhatIsAWallet")}async onClose(){wt.state.isSiweEnabled&&wt.state.status!=="success"&&await Ue.disconnect(),Ke.close()}titleTemplate(){return I`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`}dynamicButtonTemplate(){const{view:e}=ce.state,n=e==="Connect",r=e==="ApproveTransaction";return this.showBack&&!r?I`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:I`<wui-icon-link
      data-hidden=${!n}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}separatorTemplate(){return this.heading?I`<wui-separator></wui-separator>`:null}getPadding(){return this.heading?["l","2l","l","2l"]:["l","2l","0","2l"]}async onViewChange(e){var r;const n=(r=this.shadowRoot)==null?void 0:r.querySelector("wui-text");if(n){const i=Fv()[e];await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.heading=i,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}async onHistoryChange(){var r;const{history:e}=ce.state,n=(r=this.shadowRoot)==null?void 0:r.querySelector("#dynamic");e.length>1&&!this.showBack&&n?(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&n&&(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){ce.state.view==="ConnectingSiwe"?ce.push("Connect"):ce.goBack()}};Aa.styles=[HO];Uh([ie()],Aa.prototype,"heading",void 0);Uh([ie()],Aa.prototype,"buffering",void 0);Uh([ie()],Aa.prototype,"showBack",void 0);Aa=Uh([Z("w3m-header")],Aa);var u6=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let W1=class extends K{constructor(){super(...arguments),this.data=[]}render(){return I`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(e=>I`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map(n=>I`<wui-visual name=${n}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};u6([$({type:Array})],W1.prototype,"data",void 0);W1=u6([Z("w3m-help-widget")],W1);const VO=X`
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`;var qO=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let z1=class extends K{render(){const{termsConditionsUrl:e,privacyPolicyUrl:n}=We.state;return!e&&!n?null:I`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-400" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:n}=We.state;return e&&n?"and":""}termsTemplate(){const{termsConditionsUrl:e}=We.state;return e?I`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:e}=We.state;return e?I`<a href=${e}>Privacy Policy</a>`:null}};z1.styles=[VO];z1=qO([Z("w3m-legal-footer")],z1);const ZO=X`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var d6=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let _f=class extends K{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:e,app_store:n,play_store:r,chrome_store:i,homepage:o}=this.wallet,s=de.isMobile(),a=de.isIos(),l=de.isAndroid(),c=[n,r,o,i].filter(Boolean).length>1,u=Ze.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return c&&!s?I`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${()=>ce.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!c&&o?I`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:n&&a?I`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:r&&l?I`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){var e;(e=this.wallet)!=null&&e.app_store&&de.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;(e=this.wallet)!=null&&e.play_store&&de.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;(e=this.wallet)!=null&&e.homepage&&de.openHref(this.wallet.homepage,"_blank")}};_f.styles=[ZO];d6([$({type:Object})],_f.prototype,"wallet",void 0);_f=d6([Z("w3m-mobile-download-links")],_f);const GO=X`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var f6=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const KO={success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let Cf=class extends K{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=pt.state.open,this.unsubscribe.push(pt.subscribeKey("open",e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){const{message:e,variant:n}=pt.state,r=KO[n];return I`
      <wui-snackbar
        message=${e}
        backgroundColor=${r.backgroundColor}
        iconColor=${r.iconColor}
        icon=${r.icon}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout(()=>pt.hide(),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};Cf.styles=GO;f6([ie()],Cf.prototype,"open",void 0);Cf=f6([Z("w3m-snackbar")],Cf);const YO=X`
  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 21px;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }

  .alphaBanner {
    padding: 10px 12px 10px 10px;
    border-radius: var(--wui-border-radius-s);
    background: var(--wui-accent-glass-010);
    margin-bottom: var(--wui-spacing-s);
  }
`;var gu=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let is=class extends K{constructor(){super(),this.unsubscribe=[],this.formRef=Eh(),this.connectors=Ge.state.connectors,this.email="",this.loading=!1,this.error="",this.unsubscribe.push(Ge.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){var e;(e=this.formRef.value)==null||e.addEventListener("keydown",n=>{n.key==="Enter"&&this.onSubmitEmail(n)})}render(){const e=this.connectors.length>1;return this.connectors.find(r=>r.type==="EMAIL")?I`
      ${this.alphaWarningTemplate()}
      <form ${_h(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          .errorMessage=${this.error}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>

      ${e?I`<wui-separator text="or"></wui-separator>`:null}
    `:null}alphaWarningTemplate(){return I`
          <wui-flex class="alphaBanner" gap="xs" alignItems="center" justifyContent="center">
            <wui-icon-box
              size="sm"
              icon="alpha"
              iconColor="accent-100"
              background="opaque"
              backgroundColor="accent-100"
            ></wui-icon-box>
            <wui-text variant="small-400" color="accent-100">
              This is an alpha version to test before launch
            </wui-text>
          </wui-flex>
        `}submitButtonTemplate(){return!this.loading&&this.email.length>3?I`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?I`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}onEmailInputChange(e){this.email=e.detail,this.error=""}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();const n=Ge.getEmailConnector();if(!n)throw new Error("w3m-email-login-widget: Email connector not found");const{action:r}=await n.provider.connectEmail({email:this.email});xe.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),r==="VERIFY_OTP"?(xe.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),ce.push("EmailVerifyOtp",{email:this.email})):r==="VERIFY_DEVICE"&&ce.push("EmailVerifyDevice",{email:this.email})}catch(n){const r=de.parseError(n);r!=null&&r.includes("Invalid email")?this.error="Invalid email. Try again.":pt.showError(n)}finally{this.loading=!1}}onFocusEvent(){xe.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};is.styles=YO;gu([ie()],is.prototype,"connectors",void 0);gu([ie()],is.prototype,"email",void 0);gu([ie()],is.prototype,"loading",void 0);gu([ie()],is.prototype,"error",void 0);is=gu([Z("w3m-email-login-widget")],is);let Wv=!1;class QO{constructor(e){this.initPromise=void 0,this.setIsConnected=n=>{je.setIsConnected(n)},this.setCaipAddress=n=>{je.setCaipAddress(n)},this.setBalance=(n,r)=>{je.setBalance(n,r)},this.setProfileName=n=>{je.setProfileName(n)},this.setProfileImage=n=>{je.setProfileImage(n)},this.resetAccount=()=>{je.resetAccount()},this.setCaipNetwork=n=>{ht.setCaipNetwork(n)},this.getCaipNetwork=()=>ht.state.caipNetwork,this.setRequestedCaipNetworks=n=>{ht.setRequestedCaipNetworks(n)},this.getApprovedCaipNetworksData=()=>ht.getApprovedCaipNetworksData(),this.resetNetwork=()=>{ht.resetNetwork()},this.setConnectors=n=>{Ge.setConnectors(n)},this.addConnector=n=>{Ge.addConnector(n)},this.getConnectors=()=>Ge.getConnectors(),this.resetWcConnection=()=>{Ue.resetWcConnection()},this.fetchIdentity=n=>r4.fetchIdentity(n),this.setAddressExplorerUrl=n=>{je.setAddressExplorerUrl(n)},this.setSIWENonce=n=>{wt.setNonce(n)},this.setSIWESession=n=>{wt.setSession(n)},this.setSIWEStatus=n=>{wt.setStatus(n)},this.setSIWEMessage=n=>{wt.setMessage(n)},this.initControllers(e),this.initOrContinue()}async open(e){await this.initOrContinue(),Ke.open(e)}async close(){await this.initOrContinue(),Ke.close()}setLoading(e){Ke.setLoading(e)}getThemeMode(){return cn.state.themeMode}getThemeVariables(){return cn.state.themeVariables}setThemeMode(e){cn.setThemeMode(e),h4(cn.state.themeMode);try{const n=Ge.getEmailConnector();n&&n.provider.syncTheme({themeMode:cn.getSnapshot().themeMode})}catch{console.info("Unable to sync theme to email connector")}}setThemeVariables(e){cn.setThemeVariables(e),iT(cn.state.themeVariables);try{const n=Ge.getEmailConnector();n&&n.provider.syncTheme({themeVariables:cn.getSnapshot().themeVariables})}catch{console.info("Unable to sync theme to email connector")}}subscribeTheme(e){return cn.subscribe(e)}getState(){return{...la.state}}subscribeState(e){return la.subscribe(e)}getEvent(){return{...xe.state}}subscribeEvents(e){return xe.subscribe(e)}subscribeSIWEState(e){return wt.subscribe(e)}initControllers(e){if(ht.setClient(e.networkControllerClient),ht.setDefaultCaipNetwork(e.defaultChain),We.setProjectId(e.projectId),We.setIncludeWalletIds(e.includeWalletIds),We.setExcludeWalletIds(e.excludeWalletIds),We.setFeaturedWalletIds(e.featuredWalletIds),We.setTokens(e.tokens),We.setTermsConditionsUrl(e.termsConditionsUrl),We.setPrivacyPolicyUrl(e.privacyPolicyUrl),We.setCustomWallets(e.customWallets),We.setEnableAnalytics(e.enableAnalytics),We.setSdkVersion(e._sdkVersion),Ue.setClient(e.connectionControllerClient),e.siweControllerClient){const n=e.siweControllerClient;wt.setSIWEClient(n)}e.metadata&&We.setMetadata(e.metadata),e.themeMode&&cn.setThemeMode(e.themeMode),e.themeVariables&&cn.setThemeVariables(e.themeVariables)}async initOrContinue(){return!this.initPromise&&!Wv&&de.isClient()&&(Wv=!0,this.initPromise=new Promise(async e=>{await Promise.all([sa(()=>import("./index-10d86c79.js"),[]),sa(()=>Promise.resolve().then(()=>NI),void 0)]);const n=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",n),e()})),this.initPromise}}const be={WALLET_CONNECT_CONNECTOR_ID:"walletConnect",INJECTED_CONNECTOR_ID:"injected",COINBASE_CONNECTOR_ID:"coinbaseWallet",SAFE_CONNECTOR_ID:"safe",LEDGER_CONNECTOR_ID:"ledger",EIP6963_CONNECTOR_ID:"eip6963",EMAIL_CONNECTOR_ID:"w3mEmail",EIP155:"eip155",ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",VERSION:"3.5.7"},Zr={ConnectorExplorerIds:{[be.COINBASE_CONNECTOR_ID]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[be.SAFE_CONNECTOR_ID]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[be.LEDGER_CONNECTOR_ID]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},EIP155NetworkImageIds:{1:"692ed6ba-e569-459a-556a-776476829e00",42161:"600a9a04-c1b9-42ca-6785-9b4b6ff85200",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100"},ConnectorImageIds:{[be.COINBASE_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[be.SAFE_CONNECTOR_ID]:"461db637-8616-43ce-035a-d89b8a1d5800",[be.LEDGER_CONNECTOR_ID]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[be.WALLET_CONNECT_CONNECTOR_ID]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[be.INJECTED_CONNECTOR_ID]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[be.INJECTED_CONNECTOR_ID]:"Browser Wallet",[be.WALLET_CONNECT_CONNECTOR_ID]:"WalletConnect",[be.COINBASE_CONNECTOR_ID]:"Coinbase",[be.LEDGER_CONNECTOR_ID]:"Ledger",[be.SAFE_CONNECTOR_ID]:"Safe"},ConnectorTypesMap:{[be.INJECTED_CONNECTOR_ID]:"INJECTED",[be.WALLET_CONNECT_CONNECTOR_ID]:"WALLET_CONNECT",[be.EIP6963_CONNECTOR_ID]:"ANNOUNCED",[be.EMAIL_CONNECTOR_ID]:"EMAIL"},WalletConnectRpcChainIds:[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280]},gs={caipNetworkIdToNumber(t){return t?Number(t.split(":")[1]):void 0},getCaipTokens(t){if(!t)return;const e={};return Object.entries(t).forEach(([n,r])=>{e[`${be.EIP155}:${n}`]=r}),e}};function XO(t){if(t)return{id:`${be.EIP155}:${t.id}`,name:t.name,imageId:Zr.EIP155NetworkImageIds[t.id]}}const JO="wagmi.wallet";class eD extends QO{constructor(e){const{wagmiConfig:n,siweConfig:r,chains:i,defaultChain:o,tokens:s,_sdkVersion:a,...l}=e;if(!n)throw new Error("web3modal:constructor - wagmiConfig is undefined");if(!l.projectId)throw new Error("web3modal:constructor - projectId is undefined");const c={switchCaipNetwork:async d=>{const p=gs.caipNetworkIdToNumber(d==null?void 0:d.id);p&&await pS({chainId:p})},async getApprovedCaipNetworksData(){var p,w,y,E;const d=localStorage.getItem(JO);if(d!=null&&d.includes(be.EMAIL_CONNECTOR_ID))return{supportsAllNetworks:!1,approvedCaipNetworkIds:Zr.WalletConnectRpcChainIds.map(C=>`${be.EIP155}:${C}`)};if(d!=null&&d.includes(be.WALLET_CONNECT_CONNECTOR_ID)){const C=n.connectors.find(_=>_.id===be.WALLET_CONNECT_CONNECTOR_ID);if(!C)throw new Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");const m=(w=(p=(await C.getProvider()).signer)==null?void 0:p.session)==null?void 0:w.namespaces,v=(y=m==null?void 0:m[be.EIP155])==null?void 0:y.methods,x=(E=m==null?void 0:m[be.EIP155])==null?void 0:E.chains;return{supportsAllNetworks:v==null?void 0:v.includes(be.ADD_CHAIN_METHOD),approvedCaipNetworkIds:x}}return{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0}}},u={connectWalletConnect:async d=>{var y;const p=n.connectors.find(E=>E.id===be.WALLET_CONNECT_CONNECTOR_ID);if(!p)throw new Error("connectionControllerClient:getWalletConnectUri - connector is undefined");p.on("message",E=>{E.type==="display_uri"&&(d(E.data),p.removeAllListeners())});const w=gs.caipNetworkIdToNumber((y=this.getCaipNetwork())==null?void 0:y.id);await rv({connector:p,chainId:w})},connectExternal:async({id:d,provider:p,info:w})=>{var C,b;const y=n.connectors.find(m=>m.id===d);if(!y)throw new Error("connectionControllerClient:connectExternal - connector is undefined");p&&w&&y.id===be.EIP6963_CONNECTOR_ID&&((C=y.setEip6963Wallet)==null||C.call(y,{provider:p,info:w}));const E=gs.caipNetworkIdToNumber((b=this.getCaipNetwork())==null?void 0:b.id);await rv({connector:y,chainId:E})},checkInstalled:d=>{const p=this.getConnectors().filter(y=>y.type==="ANNOUNCED"),w=this.getConnectors().find(y=>y.type==="INJECTED");return d?p.length&&d.some(E=>p.some(C=>{var b;return((b=C.info)==null?void 0:b.rdns)===E}))?!0:w&&window!=null&&window.ethereum?d.some(y=>{var E;return!!((E=window.ethereum)!=null&&E[String(y)])}):!1:!!window.ethereum},disconnect:async()=>{var d;await oS(),(d=r==null?void 0:r.options)!=null&&d.signOutOnDisconnect&&await r.signOut()},signMessage:async d=>hS({message:d})};super({networkControllerClient:c,connectionControllerClient:u,siweControllerClient:r,defaultChain:XO(o),tokens:gs.getCaipTokens(s),_sdkVersion:a??`html-wagmi-${be.VERSION}`,...l}),this.hasSyncedConnectedAccount=!1,this.options=void 0,this.options=e,this.syncRequestedNetworks(i),this.syncConnectors(n),this.syncEmailConnector(n),this.listenEIP6963Connector(n),this.listenEmailConnector(n),mS(()=>this.syncAccount()),gS(()=>this.syncNetwork())}getState(){const e=super.getState();return{...e,selectedNetworkId:gs.caipNetworkIdToNumber(e.selectedNetworkId)}}subscribeState(e){return super.subscribeState(n=>e({...n,selectedNetworkId:gs.caipNetworkIdToNumber(n.selectedNetworkId)}))}syncRequestedNetworks(e){const n=e==null?void 0:e.map(r=>{var i,o;return{id:`${be.EIP155}:${r.id}`,name:r.name,imageId:Zr.EIP155NetworkImageIds[r.id],imageUrl:(o=(i=this.options)==null?void 0:i.chainImages)==null?void 0:o[r.id]}});this.setRequestedCaipNetworks(n??[])}async syncAccount(){const{address:e,isConnected:n}=x1(),{chain:r}=E1();if(this.resetAccount(),n&&e&&r){const i=`${be.EIP155}:${r.id}:${e}`;this.setIsConnected(n),this.setCaipAddress(i),await Promise.all([this.syncProfile(e,r),this.syncBalance(e,r),this.getApprovedCaipNetworksData()]),this.hasSyncedConnectedAccount=!0}else!n&&this.hasSyncedConnectedAccount&&(this.resetWcConnection(),this.resetNetwork())}async syncNetwork(){var i,o,s,a;const{address:e,isConnected:n}=x1(),{chain:r}=E1();if(r){const l=String(r.id),c=`${be.EIP155}:${l}`;if(this.setCaipNetwork({id:c,name:r.name,imageId:Zr.EIP155NetworkImageIds[r.id],imageUrl:(o=(i=this.options)==null?void 0:i.chainImages)==null?void 0:o[r.id]}),n&&e){const u=`${be.EIP155}:${r.id}:${e}`;if(this.setCaipAddress(u),(a=(s=r.blockExplorers)==null?void 0:s.default)!=null&&a.url){const d=`${r.blockExplorers.default.url}/address/${e}`;this.setAddressExplorerUrl(d)}else this.setAddressExplorerUrl(void 0);this.hasSyncedConnectedAccount&&(await this.syncProfile(e,r),await this.syncBalance(e,r))}}}async syncProfile(e,n){if(n.id!==Ig.id){this.setProfileName(null),this.setProfileImage(null);return}try{const{name:r,avatar:i}=await this.fetchIdentity({caipChainId:`${be.EIP155}:${n.id}`,address:e});this.setProfileName(r),this.setProfileImage(i)}catch{const r=await yS({address:e,chainId:n.id});if(r){this.setProfileName(r);const i=await wS({name:r,chainId:n.id});i&&this.setProfileImage(i)}}}async syncBalance(e,n){var i,o,s;const r=await fS({address:e,chainId:n.id,token:(s=(o=(i=this.options)==null?void 0:i.tokens)==null?void 0:o[n.id])==null?void 0:s.address});this.setBalance(r.formatted,r.symbol)}syncConnectors(e){const n=[];e.connectors.forEach(({id:r,name:i})=>{var o,s;[be.EIP6963_CONNECTOR_ID,be.EMAIL_CONNECTOR_ID].includes(r)||n.push({id:r,explorerId:Zr.ConnectorExplorerIds[r],imageId:Zr.ConnectorImageIds[r],imageUrl:(s=(o=this.options)==null?void 0:o.connectorImages)==null?void 0:s[r],name:Zr.ConnectorNamesMap[r]??i,type:Zr.ConnectorTypesMap[r]??"EXTERNAL"})}),this.setConnectors(n)}async syncEmailConnector(e){const n=e.connectors.find(({id:r})=>r==="w3mEmail");if(n){const r=await n.getProvider();this.addConnector({id:be.EMAIL_CONNECTOR_ID,type:"EMAIL",name:"Email",provider:r})}}eip6963EventHandler(e,n){var r,i;if(n.detail){const{info:o,provider:s}=n.detail;this.getConnectors().find(c=>c.name===o.name)||(this.addConnector({id:be.EIP6963_CONNECTOR_ID,type:"ANNOUNCED",imageUrl:o.icon??((i=(r=this.options)==null?void 0:r.connectorImages)==null?void 0:i[be.EIP6963_CONNECTOR_ID]),name:o.name,provider:s,info:o}),e.isAuthorized({info:o,provider:s}))}}listenEIP6963Connector(e){const n=e.connectors.find(r=>r.id===be.EIP6963_CONNECTOR_ID);if(typeof window<"u"&&n){const r=this.eip6963EventHandler.bind(this,n);window.addEventListener(be.EIP6963_ANNOUNCE_EVENT,r),window.dispatchEvent(new Event(be.EIP6963_REQUEST_EVENT))}}async listenEmailConnector(e){const n=e.connectors.find(r=>r.id===be.EMAIL_CONNECTOR_ID);if(typeof window<"u"&&n){super.setLoading(!0);const r=await n.getProvider(),i=r.getLoginEmailUsed();super.setLoading(i),r.onRpcRequest(()=>{super.open({view:"ApproveTransaction"})}),r.onRpcResponse(()=>{super.close()}),r.onIsConnected(()=>{super.setLoading(!1)})}}}var Ku=globalThis&&globalThis.__classPrivateFieldSet||function(t,e,n,r,i){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?t!==e||!i:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?i.call(t,n):i?i.value=n:e.set(t,n),n},xo=globalThis&&globalThis.__classPrivateFieldGet||function(t,e,n,r){if(n==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!r:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?r:n==="a"?r.call(t):r?r.value:e.get(t)},md,er;const Yu="connectedRdns";class tD extends Og{constructor(e){super({chains:e.chains,options:{shimDisconnect:!0}}),this.id="eip6963",this.name="EIP6963",md.set(this,void 0),er.set(this,void 0),this.onAccountsChanged=n=>{var r;n.length===0?((r=this.storage)==null||r.removeItem(Yu),this.emit("disconnect")):n[0]&&this.emit("change",{account:zn(n[0])})},Ku(this,md,this.options.getProvider(),"f")}async connect(e){var r;const n=await super.connect(e);return xo(this,er,"f")&&((r=this.storage)==null||r.setItem(Yu,xo(this,er,"f").info.rdns)),n}async disconnect(){var e;await super.disconnect(),(e=this.storage)==null||e.removeItem(Yu),Ku(this,er,void 0,"f")}async isAuthorized(e){var r;const n=(r=this.storage)==null?void 0:r.getItem(Yu);if(n){if(xo(this,er,"f")&&n===xo(this,er,"f").info.rdns&&(await xo(this,er,"f").provider.request({method:"eth_accounts"})).length)return!0;e&&Ku(this,er,e,"f")}return super.isAuthorized()}async getProvider(){var e;return Promise.resolve(((e=xo(this,er,"f"))==null?void 0:e.provider)??xo(this,md,"f"))}setEip6963Wallet(e){Ku(this,er,e,"f")}}md=new WeakMap,er=new WeakMap;var h6={},Lh={};Lh.byteLength=iD;Lh.toByteArray=sD;Lh.fromByteArray=cD;var Ir=[],Un=[],nD=typeof Uint8Array<"u"?Uint8Array:Array,Q0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var ws=0,rD=Q0.length;ws<rD;++ws)Ir[ws]=Q0[ws],Un[Q0.charCodeAt(ws)]=ws;Un["-".charCodeAt(0)]=62;Un["_".charCodeAt(0)]=63;function p6(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=t.indexOf("=");n===-1&&(n=e);var r=n===e?0:4-n%4;return[n,r]}function iD(t){var e=p6(t),n=e[0],r=e[1];return(n+r)*3/4-r}function oD(t,e,n){return(e+n)*3/4-n}function sD(t){var e,n=p6(t),r=n[0],i=n[1],o=new nD(oD(t,r,i)),s=0,a=i>0?r-4:r,l;for(l=0;l<a;l+=4)e=Un[t.charCodeAt(l)]<<18|Un[t.charCodeAt(l+1)]<<12|Un[t.charCodeAt(l+2)]<<6|Un[t.charCodeAt(l+3)],o[s++]=e>>16&255,o[s++]=e>>8&255,o[s++]=e&255;return i===2&&(e=Un[t.charCodeAt(l)]<<2|Un[t.charCodeAt(l+1)]>>4,o[s++]=e&255),i===1&&(e=Un[t.charCodeAt(l)]<<10|Un[t.charCodeAt(l+1)]<<4|Un[t.charCodeAt(l+2)]>>2,o[s++]=e>>8&255,o[s++]=e&255),o}function aD(t){return Ir[t>>18&63]+Ir[t>>12&63]+Ir[t>>6&63]+Ir[t&63]}function lD(t,e,n){for(var r,i=[],o=e;o<n;o+=3)r=(t[o]<<16&16711680)+(t[o+1]<<8&65280)+(t[o+2]&255),i.push(aD(r));return i.join("")}function cD(t){for(var e,n=t.length,r=n%3,i=[],o=16383,s=0,a=n-r;s<a;s+=o)i.push(lD(t,s,s+o>a?a:s+o));return r===1?(e=t[n-1],i.push(Ir[e>>2]+Ir[e<<4&63]+"==")):r===2&&(e=(t[n-2]<<8)+t[n-1],i.push(Ir[e>>10]+Ir[e>>4&63]+Ir[e<<2&63]+"=")),i.join("")}var nw={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */nw.read=function(t,e,n,r,i){var o,s,a=i*8-r-1,l=(1<<a)-1,c=l>>1,u=-7,d=n?i-1:0,p=n?-1:1,w=t[e+d];for(d+=p,o=w&(1<<-u)-1,w>>=-u,u+=a;u>0;o=o*256+t[e+d],d+=p,u-=8);for(s=o&(1<<-u)-1,o>>=-u,u+=r;u>0;s=s*256+t[e+d],d+=p,u-=8);if(o===0)o=1-c;else{if(o===l)return s?NaN:(w?-1:1)*(1/0);s=s+Math.pow(2,r),o=o-c}return(w?-1:1)*s*Math.pow(2,o-r)};nw.write=function(t,e,n,r,i,o){var s,a,l,c=o*8-i-1,u=(1<<c)-1,d=u>>1,p=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,w=r?0:o-1,y=r?1:-1,E=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,s=u):(s=Math.floor(Math.log(e)/Math.LN2),e*(l=Math.pow(2,-s))<1&&(s--,l*=2),s+d>=1?e+=p/l:e+=p*Math.pow(2,1-d),e*l>=2&&(s++,l/=2),s+d>=u?(a=0,s=u):s+d>=1?(a=(e*l-1)*Math.pow(2,i),s=s+d):(a=e*Math.pow(2,d-1)*Math.pow(2,i),s=0));i>=8;t[n+w]=a&255,w+=y,a/=256,i-=8);for(s=s<<i|a,c+=i;c>0;t[n+w]=s&255,w+=y,s/=256,c-=8);t[n+w-y]|=E*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(t){const e=Lh,n=nw,r=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;t.Buffer=a,t.SlowBuffer=m,t.INSPECT_MAX_BYTES=50;const i=2147483647;t.kMaxLength=i,a.TYPED_ARRAY_SUPPORT=o(),!a.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function o(){try{const T=new Uint8Array(1),h={foo:function(){return 42}};return Object.setPrototypeOf(h,Uint8Array.prototype),Object.setPrototypeOf(T,h),T.foo()===42}catch{return!1}}Object.defineProperty(a.prototype,"parent",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.buffer}}),Object.defineProperty(a.prototype,"offset",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.byteOffset}});function s(T){if(T>i)throw new RangeError('The value "'+T+'" is invalid for option "size"');const h=new Uint8Array(T);return Object.setPrototypeOf(h,a.prototype),h}function a(T,h,g){if(typeof T=="number"){if(typeof h=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return d(T)}return l(T,h,g)}a.poolSize=8192;function l(T,h,g){if(typeof T=="string")return p(T,h);if(ArrayBuffer.isView(T))return y(T);if(T==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof T);if(Ve(T,ArrayBuffer)||T&&Ve(T.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(Ve(T,SharedArrayBuffer)||T&&Ve(T.buffer,SharedArrayBuffer)))return E(T,h,g);if(typeof T=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const P=T.valueOf&&T.valueOf();if(P!=null&&P!==T)return a.from(P,h,g);const O=C(T);if(O)return O;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof T[Symbol.toPrimitive]=="function")return a.from(T[Symbol.toPrimitive]("string"),h,g);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof T)}a.from=function(T,h,g){return l(T,h,g)},Object.setPrototypeOf(a.prototype,Uint8Array.prototype),Object.setPrototypeOf(a,Uint8Array);function c(T){if(typeof T!="number")throw new TypeError('"size" argument must be of type number');if(T<0)throw new RangeError('The value "'+T+'" is invalid for option "size"')}function u(T,h,g){return c(T),T<=0?s(T):h!==void 0?typeof g=="string"?s(T).fill(h,g):s(T).fill(h):s(T)}a.alloc=function(T,h,g){return u(T,h,g)};function d(T){return c(T),s(T<0?0:b(T)|0)}a.allocUnsafe=function(T){return d(T)},a.allocUnsafeSlow=function(T){return d(T)};function p(T,h){if((typeof h!="string"||h==="")&&(h="utf8"),!a.isEncoding(h))throw new TypeError("Unknown encoding: "+h);const g=v(T,h)|0;let P=s(g);const O=P.write(T,h);return O!==g&&(P=P.slice(0,O)),P}function w(T){const h=T.length<0?0:b(T.length)|0,g=s(h);for(let P=0;P<h;P+=1)g[P]=T[P]&255;return g}function y(T){if(Ve(T,Uint8Array)){const h=new Uint8Array(T);return E(h.buffer,h.byteOffset,h.byteLength)}return w(T)}function E(T,h,g){if(h<0||T.byteLength<h)throw new RangeError('"offset" is outside of buffer bounds');if(T.byteLength<h+(g||0))throw new RangeError('"length" is outside of buffer bounds');let P;return h===void 0&&g===void 0?P=new Uint8Array(T):g===void 0?P=new Uint8Array(T,h):P=new Uint8Array(T,h,g),Object.setPrototypeOf(P,a.prototype),P}function C(T){if(a.isBuffer(T)){const h=b(T.length)|0,g=s(h);return g.length===0||T.copy(g,0,0,h),g}if(T.length!==void 0)return typeof T.length!="number"||vt(T.length)?s(0):w(T);if(T.type==="Buffer"&&Array.isArray(T.data))return w(T.data)}function b(T){if(T>=i)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+i.toString(16)+" bytes");return T|0}function m(T){return+T!=T&&(T=0),a.alloc(+T)}a.isBuffer=function(h){return h!=null&&h._isBuffer===!0&&h!==a.prototype},a.compare=function(h,g){if(Ve(h,Uint8Array)&&(h=a.from(h,h.offset,h.byteLength)),Ve(g,Uint8Array)&&(g=a.from(g,g.offset,g.byteLength)),!a.isBuffer(h)||!a.isBuffer(g))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(h===g)return 0;let P=h.length,O=g.length;for(let N=0,L=Math.min(P,O);N<L;++N)if(h[N]!==g[N]){P=h[N],O=g[N];break}return P<O?-1:O<P?1:0},a.isEncoding=function(h){switch(String(h).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(h,g){if(!Array.isArray(h))throw new TypeError('"list" argument must be an Array of Buffers');if(h.length===0)return a.alloc(0);let P;if(g===void 0)for(g=0,P=0;P<h.length;++P)g+=h[P].length;const O=a.allocUnsafe(g);let N=0;for(P=0;P<h.length;++P){let L=h[P];if(Ve(L,Uint8Array))N+L.length>O.length?(a.isBuffer(L)||(L=a.from(L)),L.copy(O,N)):Uint8Array.prototype.set.call(O,L,N);else if(a.isBuffer(L))L.copy(O,N);else throw new TypeError('"list" argument must be an Array of Buffers');N+=L.length}return O};function v(T,h){if(a.isBuffer(T))return T.length;if(ArrayBuffer.isView(T)||Ve(T,ArrayBuffer))return T.byteLength;if(typeof T!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof T);const g=T.length,P=arguments.length>2&&arguments[2]===!0;if(!P&&g===0)return 0;let O=!1;for(;;)switch(h){case"ascii":case"latin1":case"binary":return g;case"utf8":case"utf-8":return bi(T).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return g*2;case"hex":return g>>>1;case"base64":return Ct(T).length;default:if(O)return P?-1:bi(T).length;h=(""+h).toLowerCase(),O=!0}}a.byteLength=v;function x(T,h,g){let P=!1;if((h===void 0||h<0)&&(h=0),h>this.length||((g===void 0||g>this.length)&&(g=this.length),g<=0)||(g>>>=0,h>>>=0,g<=h))return"";for(T||(T="utf8");;)switch(T){case"hex":return W(this,h,g);case"utf8":case"utf-8":return H(this,h,g);case"ascii":return j(this,h,g);case"latin1":case"binary":return k(this,h,g);case"base64":return ne(this,h,g);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return z(this,h,g);default:if(P)throw new TypeError("Unknown encoding: "+T);T=(T+"").toLowerCase(),P=!0}}a.prototype._isBuffer=!0;function _(T,h,g){const P=T[h];T[h]=T[g],T[g]=P}a.prototype.swap16=function(){const h=this.length;if(h%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let g=0;g<h;g+=2)_(this,g,g+1);return this},a.prototype.swap32=function(){const h=this.length;if(h%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let g=0;g<h;g+=4)_(this,g,g+3),_(this,g+1,g+2);return this},a.prototype.swap64=function(){const h=this.length;if(h%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let g=0;g<h;g+=8)_(this,g,g+7),_(this,g+1,g+6),_(this,g+2,g+5),_(this,g+3,g+4);return this},a.prototype.toString=function(){const h=this.length;return h===0?"":arguments.length===0?H(this,0,h):x.apply(this,arguments)},a.prototype.toLocaleString=a.prototype.toString,a.prototype.equals=function(h){if(!a.isBuffer(h))throw new TypeError("Argument must be a Buffer");return this===h?!0:a.compare(this,h)===0},a.prototype.inspect=function(){let h="";const g=t.INSPECT_MAX_BYTES;return h=this.toString("hex",0,g).replace(/(.{2})/g,"$1 ").trim(),this.length>g&&(h+=" ... "),"<Buffer "+h+">"},r&&(a.prototype[r]=a.prototype.inspect),a.prototype.compare=function(h,g,P,O,N){if(Ve(h,Uint8Array)&&(h=a.from(h,h.offset,h.byteLength)),!a.isBuffer(h))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof h);if(g===void 0&&(g=0),P===void 0&&(P=h?h.length:0),O===void 0&&(O=0),N===void 0&&(N=this.length),g<0||P>h.length||O<0||N>this.length)throw new RangeError("out of range index");if(O>=N&&g>=P)return 0;if(O>=N)return-1;if(g>=P)return 1;if(g>>>=0,P>>>=0,O>>>=0,N>>>=0,this===h)return 0;let L=N-O,ue=P-g;const De=Math.min(L,ue),tt=this.slice(O,N),ut=h.slice(g,P);for(let qe=0;qe<De;++qe)if(tt[qe]!==ut[qe]){L=tt[qe],ue=ut[qe];break}return L<ue?-1:ue<L?1:0};function S(T,h,g,P,O){if(T.length===0)return-1;if(typeof g=="string"?(P=g,g=0):g>2147483647?g=2147483647:g<-2147483648&&(g=-2147483648),g=+g,vt(g)&&(g=O?0:T.length-1),g<0&&(g=T.length+g),g>=T.length){if(O)return-1;g=T.length-1}else if(g<0)if(O)g=0;else return-1;if(typeof h=="string"&&(h=a.from(h,P)),a.isBuffer(h))return h.length===0?-1:f(T,h,g,P,O);if(typeof h=="number")return h=h&255,typeof Uint8Array.prototype.indexOf=="function"?O?Uint8Array.prototype.indexOf.call(T,h,g):Uint8Array.prototype.lastIndexOf.call(T,h,g):f(T,[h],g,P,O);throw new TypeError("val must be string, number or Buffer")}function f(T,h,g,P,O){let N=1,L=T.length,ue=h.length;if(P!==void 0&&(P=String(P).toLowerCase(),P==="ucs2"||P==="ucs-2"||P==="utf16le"||P==="utf-16le")){if(T.length<2||h.length<2)return-1;N=2,L/=2,ue/=2,g/=2}function De(ut,qe){return N===1?ut[qe]:ut.readUInt16BE(qe*N)}let tt;if(O){let ut=-1;for(tt=g;tt<L;tt++)if(De(T,tt)===De(h,ut===-1?0:tt-ut)){if(ut===-1&&(ut=tt),tt-ut+1===ue)return ut*N}else ut!==-1&&(tt-=tt-ut),ut=-1}else for(g+ue>L&&(g=L-ue),tt=g;tt>=0;tt--){let ut=!0;for(let qe=0;qe<ue;qe++)if(De(T,tt+qe)!==De(h,qe)){ut=!1;break}if(ut)return tt}return-1}a.prototype.includes=function(h,g,P){return this.indexOf(h,g,P)!==-1},a.prototype.indexOf=function(h,g,P){return S(this,h,g,P,!0)},a.prototype.lastIndexOf=function(h,g,P){return S(this,h,g,P,!1)};function A(T,h,g,P){g=Number(g)||0;const O=T.length-g;P?(P=Number(P),P>O&&(P=O)):P=O;const N=h.length;P>N/2&&(P=N/2);let L;for(L=0;L<P;++L){const ue=parseInt(h.substr(L*2,2),16);if(vt(ue))return L;T[g+L]=ue}return L}function R(T,h,g,P){return mt(bi(h,T.length-g),T,g,P)}function D(T,h,g,P){return mt(Va(h),T,g,P)}function M(T,h,g,P){return mt(Ct(h),T,g,P)}function ee(T,h,g,P){return mt(Eu(h,T.length-g),T,g,P)}a.prototype.write=function(h,g,P,O){if(g===void 0)O="utf8",P=this.length,g=0;else if(P===void 0&&typeof g=="string")O=g,P=this.length,g=0;else if(isFinite(g))g=g>>>0,isFinite(P)?(P=P>>>0,O===void 0&&(O="utf8")):(O=P,P=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const N=this.length-g;if((P===void 0||P>N)&&(P=N),h.length>0&&(P<0||g<0)||g>this.length)throw new RangeError("Attempt to write outside buffer bounds");O||(O="utf8");let L=!1;for(;;)switch(O){case"hex":return A(this,h,g,P);case"utf8":case"utf-8":return R(this,h,g,P);case"ascii":case"latin1":case"binary":return D(this,h,g,P);case"base64":return M(this,h,g,P);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ee(this,h,g,P);default:if(L)throw new TypeError("Unknown encoding: "+O);O=(""+O).toLowerCase(),L=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function ne(T,h,g){return h===0&&g===T.length?e.fromByteArray(T):e.fromByteArray(T.slice(h,g))}function H(T,h,g){g=Math.min(T.length,g);const P=[];let O=h;for(;O<g;){const N=T[O];let L=null,ue=N>239?4:N>223?3:N>191?2:1;if(O+ue<=g){let De,tt,ut,qe;switch(ue){case 1:N<128&&(L=N);break;case 2:De=T[O+1],(De&192)===128&&(qe=(N&31)<<6|De&63,qe>127&&(L=qe));break;case 3:De=T[O+1],tt=T[O+2],(De&192)===128&&(tt&192)===128&&(qe=(N&15)<<12|(De&63)<<6|tt&63,qe>2047&&(qe<55296||qe>57343)&&(L=qe));break;case 4:De=T[O+1],tt=T[O+2],ut=T[O+3],(De&192)===128&&(tt&192)===128&&(ut&192)===128&&(qe=(N&15)<<18|(De&63)<<12|(tt&63)<<6|ut&63,qe>65535&&qe<1114112&&(L=qe))}}L===null?(L=65533,ue=1):L>65535&&(L-=65536,P.push(L>>>10&1023|55296),L=56320|L&1023),P.push(L),O+=ue}return B(P)}const F=4096;function B(T){const h=T.length;if(h<=F)return String.fromCharCode.apply(String,T);let g="",P=0;for(;P<h;)g+=String.fromCharCode.apply(String,T.slice(P,P+=F));return g}function j(T,h,g){let P="";g=Math.min(T.length,g);for(let O=h;O<g;++O)P+=String.fromCharCode(T[O]&127);return P}function k(T,h,g){let P="";g=Math.min(T.length,g);for(let O=h;O<g;++O)P+=String.fromCharCode(T[O]);return P}function W(T,h,g){const P=T.length;(!h||h<0)&&(h=0),(!g||g<0||g>P)&&(g=P);let O="";for(let N=h;N<g;++N)O+=It[T[N]];return O}function z(T,h,g){const P=T.slice(h,g);let O="";for(let N=0;N<P.length-1;N+=2)O+=String.fromCharCode(P[N]+P[N+1]*256);return O}a.prototype.slice=function(h,g){const P=this.length;h=~~h,g=g===void 0?P:~~g,h<0?(h+=P,h<0&&(h=0)):h>P&&(h=P),g<0?(g+=P,g<0&&(g=0)):g>P&&(g=P),g<h&&(g=h);const O=this.subarray(h,g);return Object.setPrototypeOf(O,a.prototype),O};function G(T,h,g){if(T%1!==0||T<0)throw new RangeError("offset is not uint");if(T+h>g)throw new RangeError("Trying to access beyond buffer length")}a.prototype.readUintLE=a.prototype.readUIntLE=function(h,g,P){h=h>>>0,g=g>>>0,P||G(h,g,this.length);let O=this[h],N=1,L=0;for(;++L<g&&(N*=256);)O+=this[h+L]*N;return O},a.prototype.readUintBE=a.prototype.readUIntBE=function(h,g,P){h=h>>>0,g=g>>>0,P||G(h,g,this.length);let O=this[h+--g],N=1;for(;g>0&&(N*=256);)O+=this[h+--g]*N;return O},a.prototype.readUint8=a.prototype.readUInt8=function(h,g){return h=h>>>0,g||G(h,1,this.length),this[h]},a.prototype.readUint16LE=a.prototype.readUInt16LE=function(h,g){return h=h>>>0,g||G(h,2,this.length),this[h]|this[h+1]<<8},a.prototype.readUint16BE=a.prototype.readUInt16BE=function(h,g){return h=h>>>0,g||G(h,2,this.length),this[h]<<8|this[h+1]},a.prototype.readUint32LE=a.prototype.readUInt32LE=function(h,g){return h=h>>>0,g||G(h,4,this.length),(this[h]|this[h+1]<<8|this[h+2]<<16)+this[h+3]*16777216},a.prototype.readUint32BE=a.prototype.readUInt32BE=function(h,g){return h=h>>>0,g||G(h,4,this.length),this[h]*16777216+(this[h+1]<<16|this[h+2]<<8|this[h+3])},a.prototype.readBigUInt64LE=Xe(function(h){h=h>>>0,Me(h,"offset");const g=this[h],P=this[h+7];(g===void 0||P===void 0)&&xn(h,this.length-8);const O=g+this[++h]*2**8+this[++h]*2**16+this[++h]*2**24,N=this[++h]+this[++h]*2**8+this[++h]*2**16+P*2**24;return BigInt(O)+(BigInt(N)<<BigInt(32))}),a.prototype.readBigUInt64BE=Xe(function(h){h=h>>>0,Me(h,"offset");const g=this[h],P=this[h+7];(g===void 0||P===void 0)&&xn(h,this.length-8);const O=g*2**24+this[++h]*2**16+this[++h]*2**8+this[++h],N=this[++h]*2**24+this[++h]*2**16+this[++h]*2**8+P;return(BigInt(O)<<BigInt(32))+BigInt(N)}),a.prototype.readIntLE=function(h,g,P){h=h>>>0,g=g>>>0,P||G(h,g,this.length);let O=this[h],N=1,L=0;for(;++L<g&&(N*=256);)O+=this[h+L]*N;return N*=128,O>=N&&(O-=Math.pow(2,8*g)),O},a.prototype.readIntBE=function(h,g,P){h=h>>>0,g=g>>>0,P||G(h,g,this.length);let O=g,N=1,L=this[h+--O];for(;O>0&&(N*=256);)L+=this[h+--O]*N;return N*=128,L>=N&&(L-=Math.pow(2,8*g)),L},a.prototype.readInt8=function(h,g){return h=h>>>0,g||G(h,1,this.length),this[h]&128?(255-this[h]+1)*-1:this[h]},a.prototype.readInt16LE=function(h,g){h=h>>>0,g||G(h,2,this.length);const P=this[h]|this[h+1]<<8;return P&32768?P|4294901760:P},a.prototype.readInt16BE=function(h,g){h=h>>>0,g||G(h,2,this.length);const P=this[h+1]|this[h]<<8;return P&32768?P|4294901760:P},a.prototype.readInt32LE=function(h,g){return h=h>>>0,g||G(h,4,this.length),this[h]|this[h+1]<<8|this[h+2]<<16|this[h+3]<<24},a.prototype.readInt32BE=function(h,g){return h=h>>>0,g||G(h,4,this.length),this[h]<<24|this[h+1]<<16|this[h+2]<<8|this[h+3]},a.prototype.readBigInt64LE=Xe(function(h){h=h>>>0,Me(h,"offset");const g=this[h],P=this[h+7];(g===void 0||P===void 0)&&xn(h,this.length-8);const O=this[h+4]+this[h+5]*2**8+this[h+6]*2**16+(P<<24);return(BigInt(O)<<BigInt(32))+BigInt(g+this[++h]*2**8+this[++h]*2**16+this[++h]*2**24)}),a.prototype.readBigInt64BE=Xe(function(h){h=h>>>0,Me(h,"offset");const g=this[h],P=this[h+7];(g===void 0||P===void 0)&&xn(h,this.length-8);const O=(g<<24)+this[++h]*2**16+this[++h]*2**8+this[++h];return(BigInt(O)<<BigInt(32))+BigInt(this[++h]*2**24+this[++h]*2**16+this[++h]*2**8+P)}),a.prototype.readFloatLE=function(h,g){return h=h>>>0,g||G(h,4,this.length),n.read(this,h,!0,23,4)},a.prototype.readFloatBE=function(h,g){return h=h>>>0,g||G(h,4,this.length),n.read(this,h,!1,23,4)},a.prototype.readDoubleLE=function(h,g){return h=h>>>0,g||G(h,8,this.length),n.read(this,h,!0,52,8)},a.prototype.readDoubleBE=function(h,g){return h=h>>>0,g||G(h,8,this.length),n.read(this,h,!1,52,8)};function J(T,h,g,P,O,N){if(!a.isBuffer(T))throw new TypeError('"buffer" argument must be a Buffer instance');if(h>O||h<N)throw new RangeError('"value" argument is out of bounds');if(g+P>T.length)throw new RangeError("Index out of range")}a.prototype.writeUintLE=a.prototype.writeUIntLE=function(h,g,P,O){if(h=+h,g=g>>>0,P=P>>>0,!O){const ue=Math.pow(2,8*P)-1;J(this,h,g,P,ue,0)}let N=1,L=0;for(this[g]=h&255;++L<P&&(N*=256);)this[g+L]=h/N&255;return g+P},a.prototype.writeUintBE=a.prototype.writeUIntBE=function(h,g,P,O){if(h=+h,g=g>>>0,P=P>>>0,!O){const ue=Math.pow(2,8*P)-1;J(this,h,g,P,ue,0)}let N=P-1,L=1;for(this[g+N]=h&255;--N>=0&&(L*=256);)this[g+N]=h/L&255;return g+P},a.prototype.writeUint8=a.prototype.writeUInt8=function(h,g,P){return h=+h,g=g>>>0,P||J(this,h,g,1,255,0),this[g]=h&255,g+1},a.prototype.writeUint16LE=a.prototype.writeUInt16LE=function(h,g,P){return h=+h,g=g>>>0,P||J(this,h,g,2,65535,0),this[g]=h&255,this[g+1]=h>>>8,g+2},a.prototype.writeUint16BE=a.prototype.writeUInt16BE=function(h,g,P){return h=+h,g=g>>>0,P||J(this,h,g,2,65535,0),this[g]=h>>>8,this[g+1]=h&255,g+2},a.prototype.writeUint32LE=a.prototype.writeUInt32LE=function(h,g,P){return h=+h,g=g>>>0,P||J(this,h,g,4,4294967295,0),this[g+3]=h>>>24,this[g+2]=h>>>16,this[g+1]=h>>>8,this[g]=h&255,g+4},a.prototype.writeUint32BE=a.prototype.writeUInt32BE=function(h,g,P){return h=+h,g=g>>>0,P||J(this,h,g,4,4294967295,0),this[g]=h>>>24,this[g+1]=h>>>16,this[g+2]=h>>>8,this[g+3]=h&255,g+4};function Y(T,h,g,P,O){Le(h,P,O,T,g,7);let N=Number(h&BigInt(4294967295));T[g++]=N,N=N>>8,T[g++]=N,N=N>>8,T[g++]=N,N=N>>8,T[g++]=N;let L=Number(h>>BigInt(32)&BigInt(4294967295));return T[g++]=L,L=L>>8,T[g++]=L,L=L>>8,T[g++]=L,L=L>>8,T[g++]=L,g}function oe(T,h,g,P,O){Le(h,P,O,T,g,7);let N=Number(h&BigInt(4294967295));T[g+7]=N,N=N>>8,T[g+6]=N,N=N>>8,T[g+5]=N,N=N>>8,T[g+4]=N;let L=Number(h>>BigInt(32)&BigInt(4294967295));return T[g+3]=L,L=L>>8,T[g+2]=L,L=L>>8,T[g+1]=L,L=L>>8,T[g]=L,g+8}a.prototype.writeBigUInt64LE=Xe(function(h,g=0){return Y(this,h,g,BigInt(0),BigInt("0xffffffffffffffff"))}),a.prototype.writeBigUInt64BE=Xe(function(h,g=0){return oe(this,h,g,BigInt(0),BigInt("0xffffffffffffffff"))}),a.prototype.writeIntLE=function(h,g,P,O){if(h=+h,g=g>>>0,!O){const De=Math.pow(2,8*P-1);J(this,h,g,P,De-1,-De)}let N=0,L=1,ue=0;for(this[g]=h&255;++N<P&&(L*=256);)h<0&&ue===0&&this[g+N-1]!==0&&(ue=1),this[g+N]=(h/L>>0)-ue&255;return g+P},a.prototype.writeIntBE=function(h,g,P,O){if(h=+h,g=g>>>0,!O){const De=Math.pow(2,8*P-1);J(this,h,g,P,De-1,-De)}let N=P-1,L=1,ue=0;for(this[g+N]=h&255;--N>=0&&(L*=256);)h<0&&ue===0&&this[g+N+1]!==0&&(ue=1),this[g+N]=(h/L>>0)-ue&255;return g+P},a.prototype.writeInt8=function(h,g,P){return h=+h,g=g>>>0,P||J(this,h,g,1,127,-128),h<0&&(h=255+h+1),this[g]=h&255,g+1},a.prototype.writeInt16LE=function(h,g,P){return h=+h,g=g>>>0,P||J(this,h,g,2,32767,-32768),this[g]=h&255,this[g+1]=h>>>8,g+2},a.prototype.writeInt16BE=function(h,g,P){return h=+h,g=g>>>0,P||J(this,h,g,2,32767,-32768),this[g]=h>>>8,this[g+1]=h&255,g+2},a.prototype.writeInt32LE=function(h,g,P){return h=+h,g=g>>>0,P||J(this,h,g,4,2147483647,-2147483648),this[g]=h&255,this[g+1]=h>>>8,this[g+2]=h>>>16,this[g+3]=h>>>24,g+4},a.prototype.writeInt32BE=function(h,g,P){return h=+h,g=g>>>0,P||J(this,h,g,4,2147483647,-2147483648),h<0&&(h=4294967295+h+1),this[g]=h>>>24,this[g+1]=h>>>16,this[g+2]=h>>>8,this[g+3]=h&255,g+4},a.prototype.writeBigInt64LE=Xe(function(h,g=0){return Y(this,h,g,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),a.prototype.writeBigInt64BE=Xe(function(h,g=0){return oe(this,h,g,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function fe(T,h,g,P,O,N){if(g+P>T.length)throw new RangeError("Index out of range");if(g<0)throw new RangeError("Index out of range")}function pe(T,h,g,P,O){return h=+h,g=g>>>0,O||fe(T,h,g,4),n.write(T,h,g,P,23,4),g+4}a.prototype.writeFloatLE=function(h,g,P){return pe(this,h,g,!0,P)},a.prototype.writeFloatBE=function(h,g,P){return pe(this,h,g,!1,P)};function ye(T,h,g,P,O){return h=+h,g=g>>>0,O||fe(T,h,g,8),n.write(T,h,g,P,52,8),g+8}a.prototype.writeDoubleLE=function(h,g,P){return ye(this,h,g,!0,P)},a.prototype.writeDoubleBE=function(h,g,P){return ye(this,h,g,!1,P)},a.prototype.copy=function(h,g,P,O){if(!a.isBuffer(h))throw new TypeError("argument should be a Buffer");if(P||(P=0),!O&&O!==0&&(O=this.length),g>=h.length&&(g=h.length),g||(g=0),O>0&&O<P&&(O=P),O===P||h.length===0||this.length===0)return 0;if(g<0)throw new RangeError("targetStart out of bounds");if(P<0||P>=this.length)throw new RangeError("Index out of range");if(O<0)throw new RangeError("sourceEnd out of bounds");O>this.length&&(O=this.length),h.length-g<O-P&&(O=h.length-g+P);const N=O-P;return this===h&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(g,P,O):Uint8Array.prototype.set.call(h,this.subarray(P,O),g),N},a.prototype.fill=function(h,g,P,O){if(typeof h=="string"){if(typeof g=="string"?(O=g,g=0,P=this.length):typeof P=="string"&&(O=P,P=this.length),O!==void 0&&typeof O!="string")throw new TypeError("encoding must be a string");if(typeof O=="string"&&!a.isEncoding(O))throw new TypeError("Unknown encoding: "+O);if(h.length===1){const L=h.charCodeAt(0);(O==="utf8"&&L<128||O==="latin1")&&(h=L)}}else typeof h=="number"?h=h&255:typeof h=="boolean"&&(h=Number(h));if(g<0||this.length<g||this.length<P)throw new RangeError("Out of range index");if(P<=g)return this;g=g>>>0,P=P===void 0?this.length:P>>>0,h||(h=0);let N;if(typeof h=="number")for(N=g;N<P;++N)this[N]=h;else{const L=a.isBuffer(h)?h:a.from(h,O),ue=L.length;if(ue===0)throw new TypeError('The value "'+h+'" is invalid for argument "value"');for(N=0;N<P-g;++N)this[N+g]=L[N%ue]}return this};const _e={};function Ie(T,h,g){_e[T]=class extends g{constructor(){super(),Object.defineProperty(this,"message",{value:h.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${T}]`,this.stack,delete this.name}get code(){return T}set code(O){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:O,writable:!0})}toString(){return`${this.name} [${T}]: ${this.message}`}}}Ie("ERR_BUFFER_OUT_OF_BOUNDS",function(T){return T?`${T} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),Ie("ERR_INVALID_ARG_TYPE",function(T,h){return`The "${T}" argument must be of type number. Received type ${typeof h}`},TypeError),Ie("ERR_OUT_OF_RANGE",function(T,h,g){let P=`The value of "${T}" is out of range.`,O=g;return Number.isInteger(g)&&Math.abs(g)>2**32?O=ve(String(g)):typeof g=="bigint"&&(O=String(g),(g>BigInt(2)**BigInt(32)||g<-(BigInt(2)**BigInt(32)))&&(O=ve(O)),O+="n"),P+=` It must be ${h}. Received ${O}`,P},RangeError);function ve(T){let h="",g=T.length;const P=T[0]==="-"?1:0;for(;g>=P+4;g-=3)h=`_${T.slice(g-3,g)}${h}`;return`${T.slice(0,g)}${h}`}function ke(T,h,g){Me(h,"offset"),(T[h]===void 0||T[h+g]===void 0)&&xn(h,T.length-(g+1))}function Le(T,h,g,P,O,N){if(T>g||T<h){const L=typeof h=="bigint"?"n":"";let ue;throw N>3?h===0||h===BigInt(0)?ue=`>= 0${L} and < 2${L} ** ${(N+1)*8}${L}`:ue=`>= -(2${L} ** ${(N+1)*8-1}${L}) and < 2 ** ${(N+1)*8-1}${L}`:ue=`>= ${h}${L} and <= ${g}${L}`,new _e.ERR_OUT_OF_RANGE("value",ue,T)}ke(P,O,N)}function Me(T,h){if(typeof T!="number")throw new _e.ERR_INVALID_ARG_TYPE(h,"number",T)}function xn(T,h,g){throw Math.floor(T)!==T?(Me(T,g),new _e.ERR_OUT_OF_RANGE(g||"offset","an integer",T)):h<0?new _e.ERR_BUFFER_OUT_OF_BOUNDS:new _e.ERR_OUT_OF_RANGE(g||"offset",`>= ${g?1:0} and <= ${h}`,T)}const vi=/[^+/0-9A-Za-z-_]/g;function go(T){if(T=T.split("=")[0],T=T.trim().replace(vi,""),T.length<2)return"";for(;T.length%4!==0;)T=T+"=";return T}function bi(T,h){h=h||1/0;let g;const P=T.length;let O=null;const N=[];for(let L=0;L<P;++L){if(g=T.charCodeAt(L),g>55295&&g<57344){if(!O){if(g>56319){(h-=3)>-1&&N.push(239,191,189);continue}else if(L+1===P){(h-=3)>-1&&N.push(239,191,189);continue}O=g;continue}if(g<56320){(h-=3)>-1&&N.push(239,191,189),O=g;continue}g=(O-55296<<10|g-56320)+65536}else O&&(h-=3)>-1&&N.push(239,191,189);if(O=null,g<128){if((h-=1)<0)break;N.push(g)}else if(g<2048){if((h-=2)<0)break;N.push(g>>6|192,g&63|128)}else if(g<65536){if((h-=3)<0)break;N.push(g>>12|224,g>>6&63|128,g&63|128)}else if(g<1114112){if((h-=4)<0)break;N.push(g>>18|240,g>>12&63|128,g>>6&63|128,g&63|128)}else throw new Error("Invalid code point")}return N}function Va(T){const h=[];for(let g=0;g<T.length;++g)h.push(T.charCodeAt(g)&255);return h}function Eu(T,h){let g,P,O;const N=[];for(let L=0;L<T.length&&!((h-=2)<0);++L)g=T.charCodeAt(L),P=g>>8,O=g%256,N.push(O),N.push(P);return N}function Ct(T){return e.toByteArray(go(T))}function mt(T,h,g,P){let O;for(O=0;O<P&&!(O+g>=h.length||O>=T.length);++O)h[O+g]=T[O];return O}function Ve(T,h){return T instanceof h||T!=null&&T.constructor!=null&&T.constructor.name!=null&&T.constructor.name===h.name}function vt(T){return T!==T}const It=function(){const T="0123456789abcdef",h=new Array(256);for(let g=0;g<16;++g){const P=g*16;for(let O=0;O<16;++O)h[P+O]=T[g]+T[O]}return h}();function Xe(T){return typeof BigInt>"u"?$t:T}function $t(){throw new Error("BigInt not supported")}})(h6);var k2;typeof window<"u"&&(window.Buffer||(window.Buffer=h6.Buffer),window.global||(window.global=window),window.process||(window.process={}),(k2=window.process)!=null&&k2.env||(window.process={env:{}}));function uD({storage:t,key:e="REACT_QUERY_OFFLINE_CACHE",throttleTime:n=1e3,serialize:r=JSON.stringify,deserialize:i=JSON.parse,retry:o}){if(t){const s=a=>{try{t.setItem(e,r(a));return}catch(l){return l}};return{persistClient:dD(a=>{let l=a,c=s(l),u=0;for(;c&&l;)u++,l=o==null?void 0:o({persistedClient:l,error:c,errorCount:u}),l&&(c=s(l))},n),restoreClient:()=>{const a=t.getItem(e);if(a)return i(a)},removeClient:()=>{t.removeItem(e)}}}return{persistClient:zv,restoreClient:()=>{},removeClient:zv}}function dD(t,e=100){let n=null,r;return function(...i){r=i,n===null&&(n=setTimeout(()=>{t(...r),n=null},e))}}function zv(){}class Bh{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){const n={listener:e};return this.listeners.add(n),this.onSubscribe(),()=>{this.listeners.delete(n),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}}const rw=typeof window>"u"||"Deno"in window;function nr(){}function fD(t,e){return typeof t=="function"?t(e):t}function hD(t){return typeof t=="number"&&t>=0&&t!==1/0}function pD(t,e){return Math.max(t+(e||0)-Date.now(),0)}function Qu(t,e,n){return jh(t)?typeof e=="function"?{...n,queryKey:t,queryFn:e}:{...e,queryKey:t}:t}function Ai(t,e,n){return jh(t)?[{...e,queryKey:t},n]:[t||{},e]}function Hv(t,e){const{type:n="all",exact:r,fetchStatus:i,predicate:o,queryKey:s,stale:a}=t;if(jh(s)){if(r){if(e.queryHash!==iw(s,e.options))return!1}else if(!Sf(e.queryKey,s))return!1}if(n!=="all"){const l=e.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof a=="boolean"&&e.isStale()!==a||typeof i<"u"&&i!==e.state.fetchStatus||o&&!o(e))}function Vv(t,e){const{exact:n,fetching:r,predicate:i,mutationKey:o}=t;if(jh(o)){if(!e.options.mutationKey)return!1;if(n){if($o(e.options.mutationKey)!==$o(o))return!1}else if(!Sf(e.options.mutationKey,o))return!1}return!(typeof r=="boolean"&&e.state.status==="loading"!==r||i&&!i(e))}function iw(t,e){return((e==null?void 0:e.queryKeyHashFn)||$o)(t)}function $o(t){return JSON.stringify(t,(e,n)=>H1(n)?Object.keys(n).sort().reduce((r,i)=>(r[i]=n[i],r),{}):n)}function Sf(t,e){return m6(t,e)}function m6(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?!Object.keys(e).some(n=>!m6(t[n],e[n])):!1}function g6(t,e){if(t===e)return t;const n=qv(t)&&qv(e);if(n||H1(t)&&H1(e)){const r=n?t.length:Object.keys(t).length,i=n?e:Object.keys(e),o=i.length,s=n?[]:{};let a=0;for(let l=0;l<o;l++){const c=n?l:i[l];s[c]=g6(t[c],e[c]),s[c]===t[c]&&a++}return r===o&&a===r?t:s}return e}function qv(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function H1(t){if(!Zv(t))return!1;const e=t.constructor;if(typeof e>"u")return!0;const n=e.prototype;return!(!Zv(n)||!n.hasOwnProperty("isPrototypeOf"))}function Zv(t){return Object.prototype.toString.call(t)==="[object Object]"}function jh(t){return Array.isArray(t)}function w6(t){return new Promise(e=>{setTimeout(e,t)})}function Gv(t){w6(0).then(t)}function mD(){if(typeof AbortController=="function")return new AbortController}function gD(t,e,n){return n.isDataEqual!=null&&n.isDataEqual(t,e)?t:typeof n.structuralSharing=="function"?n.structuralSharing(t,e):n.structuralSharing!==!1?g6(t,e):e}class wD extends Bh{constructor(){super(),this.setup=e=>{if(!rw&&window.addEventListener){const n=()=>e();return window.addEventListener("visibilitychange",n,!1),window.addEventListener("focus",n,!1),()=>{window.removeEventListener("visibilitychange",n),window.removeEventListener("focus",n)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var e;(e=this.cleanup)==null||e.call(this),this.cleanup=void 0}}setEventListener(e){var n;this.setup=e,(n=this.cleanup)==null||n.call(this),this.cleanup=e(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()})}setFocused(e){this.focused!==e&&(this.focused=e,this.onFocus())}onFocus(){this.listeners.forEach(({listener:e})=>{e()})}isFocused(){return typeof this.focused=="boolean"?this.focused:typeof document>"u"?!0:[void 0,"visible","prerender"].includes(document.visibilityState)}}const V1=new wD,Kv=["online","offline"];class yD extends Bh{constructor(){super(),this.setup=e=>{if(!rw&&window.addEventListener){const n=()=>e();return Kv.forEach(r=>{window.addEventListener(r,n,!1)}),()=>{Kv.forEach(r=>{window.removeEventListener(r,n)})}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var e;(e=this.cleanup)==null||e.call(this),this.cleanup=void 0}}setEventListener(e){var n;this.setup=e,(n=this.cleanup)==null||n.call(this),this.cleanup=e(r=>{typeof r=="boolean"?this.setOnline(r):this.onOnline()})}setOnline(e){this.online!==e&&(this.online=e,this.onOnline())}onOnline(){this.listeners.forEach(({listener:e})=>{e()})}isOnline(){return typeof this.online=="boolean"?this.online:typeof navigator>"u"||typeof navigator.onLine>"u"?!0:navigator.onLine}}const Tf=new yD;function vD(t){return Math.min(1e3*2**t,3e4)}function ow(t){return(t??"online")==="online"?Tf.isOnline():!0}class y6{constructor(e){this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}}function X0(t){return t instanceof y6}function v6(t){let e=!1,n=0,r=!1,i,o,s;const a=new Promise((C,b)=>{o=C,s=b}),l=C=>{r||(w(new y6(C)),t.abort==null||t.abort())},c=()=>{e=!0},u=()=>{e=!1},d=()=>!V1.isFocused()||t.networkMode!=="always"&&!Tf.isOnline(),p=C=>{r||(r=!0,t.onSuccess==null||t.onSuccess(C),i==null||i(),o(C))},w=C=>{r||(r=!0,t.onError==null||t.onError(C),i==null||i(),s(C))},y=()=>new Promise(C=>{i=b=>{const m=r||!d();return m&&C(b),m},t.onPause==null||t.onPause()}).then(()=>{i=void 0,r||t.onContinue==null||t.onContinue()}),E=()=>{if(r)return;let C;try{C=t.fn()}catch(b){C=Promise.reject(b)}Promise.resolve(C).then(p).catch(b=>{var m,v;if(r)return;const x=(m=t.retry)!=null?m:3,_=(v=t.retryDelay)!=null?v:vD,S=typeof _=="function"?_(n,b):_,f=x===!0||typeof x=="number"&&n<x||typeof x=="function"&&x(n,b);if(e||!f){w(b);return}n++,t.onFail==null||t.onFail(n,b),w6(S).then(()=>{if(d())return y()}).then(()=>{e?w(b):E()})})};return ow(t.networkMode)?E():y().then(E),{promise:a,cancel:l,continue:()=>(i==null?void 0:i())?a:Promise.resolve(),cancelRetry:c,continueRetry:u}}const sw=console;function bD(){let t=[],e=0,n=u=>{u()},r=u=>{u()};const i=u=>{let d;e++;try{d=u()}finally{e--,e||a()}return d},o=u=>{e?t.push(u):Gv(()=>{n(u)})},s=u=>(...d)=>{o(()=>{u(...d)})},a=()=>{const u=t;t=[],u.length&&Gv(()=>{r(()=>{u.forEach(d=>{n(d)})})})};return{batch:i,batchCalls:s,schedule:o,setNotifyFunction:u=>{n=u},setBatchNotifyFunction:u=>{r=u}}}const Yt=bD();class b6{destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),hD(this.cacheTime)&&(this.gcTimeout=setTimeout(()=>{this.optionalRemove()},this.cacheTime))}updateCacheTime(e){this.cacheTime=Math.max(this.cacheTime||0,e??(rw?1/0:5*60*1e3))}clearGcTimeout(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)}}class xD extends b6{constructor(e){super(),this.abortSignalConsumed=!1,this.defaultOptions=e.defaultOptions,this.setOptions(e.options),this.observers=[],this.cache=e.cache,this.logger=e.logger||sw,this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.initialState=e.state||ED(this.options),this.state=this.initialState,this.scheduleGc()}get meta(){return this.options.meta}setOptions(e){this.options={...this.defaultOptions,...e},this.updateCacheTime(this.options.cacheTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&this.cache.remove(this)}setData(e,n){const r=gD(this.state.data,e,this.options);return this.dispatch({data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(e,n){this.dispatch({type:"setState",state:e,setStateOptions:n})}cancel(e){var n;const r=this.promise;return(n=this.retryer)==null||n.cancel(e),r?r.then(nr).catch(nr):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.initialState)}isActive(){return this.observers.some(e=>e.options.enabled!==!1)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(e=>e.getCurrentResult().isStale)}isStaleByTime(e=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!pD(this.state.dataUpdatedAt,e)}onFocus(){var e;const n=this.observers.find(r=>r.shouldFetchOnWindowFocus());n&&n.refetch({cancelRefetch:!1}),(e=this.retryer)==null||e.continue()}onOnline(){var e;const n=this.observers.find(r=>r.shouldFetchOnReconnect());n&&n.refetch({cancelRefetch:!1}),(e=this.retryer)==null||e.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(n=>n!==e),this.observers.length||(this.retryer&&(this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.scheduleGc()),this.cache.notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.dispatch({type:"invalidate"})}fetch(e,n){var r,i;if(this.state.fetchStatus!=="idle"){if(this.state.dataUpdatedAt&&n!=null&&n.cancelRefetch)this.cancel({silent:!0});else if(this.promise){var o;return(o=this.retryer)==null||o.continueRetry(),this.promise}}if(e&&this.setOptions(e),!this.options.queryFn){const w=this.observers.find(y=>y.options.queryFn);w&&this.setOptions(w.options)}const s=mD(),a={queryKey:this.queryKey,pageParam:void 0,meta:this.meta},l=w=>{Object.defineProperty(w,"signal",{enumerable:!0,get:()=>{if(s)return this.abortSignalConsumed=!0,s.signal}})};l(a);const c=()=>this.options.queryFn?(this.abortSignalConsumed=!1,this.options.queryFn(a)):Promise.reject("Missing queryFn for queryKey '"+this.options.queryHash+"'"),u={fetchOptions:n,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:c};if(l(u),(r=this.options.behavior)==null||r.onFetch(u),this.revertState=this.state,this.state.fetchStatus==="idle"||this.state.fetchMeta!==((i=u.fetchOptions)==null?void 0:i.meta)){var d;this.dispatch({type:"fetch",meta:(d=u.fetchOptions)==null?void 0:d.meta})}const p=w=>{if(X0(w)&&w.silent||this.dispatch({type:"error",error:w}),!X0(w)){var y,E,C,b;(y=(E=this.cache.config).onError)==null||y.call(E,w,this),(C=(b=this.cache.config).onSettled)==null||C.call(b,this.state.data,w,this)}this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.retryer=v6({fn:u.fetchFn,abort:s==null?void 0:s.abort.bind(s),onSuccess:w=>{var y,E,C,b;if(typeof w>"u"){p(new Error(this.queryHash+" data is undefined"));return}this.setData(w),(y=(E=this.cache.config).onSuccess)==null||y.call(E,w,this),(C=(b=this.cache.config).onSettled)==null||C.call(b,w,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:p,onFail:(w,y)=>{this.dispatch({type:"failed",failureCount:w,error:y})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:u.options.retry,retryDelay:u.options.retryDelay,networkMode:u.options.networkMode}),this.promise=this.retryer.promise,this.promise}dispatch(e){const n=r=>{var i,o;switch(e.type){case"failed":return{...r,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:(i=e.meta)!=null?i:null,fetchStatus:ow(this.options.networkMode)?"fetching":"paused",...!r.dataUpdatedAt&&{error:null,status:"loading"}};case"success":return{...r,data:e.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:(o=e.dataUpdatedAt)!=null?o:Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const s=e.error;return X0(s)&&s.revert&&this.revertState?{...this.revertState,fetchStatus:"idle"}:{...r,error:s,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:s,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...e.state}}};this.state=n(this.state),Yt.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate(e)}),this.cache.notify({query:this,type:"updated",action:e})})}}function ED(t){const e=typeof t.initialData=="function"?t.initialData():t.initialData,n=typeof e<"u",r=n?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"loading",fetchStatus:"idle"}}class _D extends Bh{constructor(e){super(),this.config=e||{},this.queries=[],this.queriesMap={}}build(e,n,r){var i;const o=n.queryKey,s=(i=n.queryHash)!=null?i:iw(o,n);let a=this.get(s);return a||(a=new xD({cache:this,logger:e.getLogger(),queryKey:o,queryHash:s,options:e.defaultQueryOptions(n),state:r,defaultOptions:e.getQueryDefaults(o)}),this.add(a)),a}add(e){this.queriesMap[e.queryHash]||(this.queriesMap[e.queryHash]=e,this.queries.push(e),this.notify({type:"added",query:e}))}remove(e){const n=this.queriesMap[e.queryHash];n&&(e.destroy(),this.queries=this.queries.filter(r=>r!==e),n===e&&delete this.queriesMap[e.queryHash],this.notify({type:"removed",query:e}))}clear(){Yt.batch(()=>{this.queries.forEach(e=>{this.remove(e)})})}get(e){return this.queriesMap[e]}getAll(){return this.queries}find(e,n){const[r]=Ai(e,n);return typeof r.exact>"u"&&(r.exact=!0),this.queries.find(i=>Hv(r,i))}findAll(e,n){const[r]=Ai(e,n);return Object.keys(r).length>0?this.queries.filter(i=>Hv(r,i)):this.queries}notify(e){Yt.batch(()=>{this.listeners.forEach(({listener:n})=>{n(e)})})}onFocus(){Yt.batch(()=>{this.queries.forEach(e=>{e.onFocus()})})}onOnline(){Yt.batch(()=>{this.queries.forEach(e=>{e.onOnline()})})}}class CD extends b6{constructor(e){super(),this.defaultOptions=e.defaultOptions,this.mutationId=e.mutationId,this.mutationCache=e.mutationCache,this.logger=e.logger||sw,this.observers=[],this.state=e.state||SD(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options={...this.defaultOptions,...e},this.updateCacheTime(this.options.cacheTime)}get meta(){return this.options.meta}setState(e){this.dispatch({type:"setState",state:e})}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.mutationCache.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.observers=this.observers.filter(n=>n!==e),this.scheduleGc(),this.mutationCache.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.observers.length||(this.state.status==="loading"?this.scheduleGc():this.mutationCache.remove(this))}continue(){var e,n;return(e=(n=this.retryer)==null?void 0:n.continue())!=null?e:this.execute()}async execute(){const e=()=>{var f;return this.retryer=v6({fn:()=>this.options.mutationFn?this.options.mutationFn(this.state.variables):Promise.reject("No mutationFn found"),onFail:(A,R)=>{this.dispatch({type:"failed",failureCount:A,error:R})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:(f=this.options.retry)!=null?f:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.retryer.promise},n=this.state.status==="loading";try{var r,i,o,s,a,l,c,u;if(!n){var d,p,w,y;this.dispatch({type:"loading",variables:this.options.variables}),await((d=(p=this.mutationCache.config).onMutate)==null?void 0:d.call(p,this.state.variables,this));const A=await((w=(y=this.options).onMutate)==null?void 0:w.call(y,this.state.variables));A!==this.state.context&&this.dispatch({type:"loading",context:A,variables:this.state.variables})}const f=await e();return await((r=(i=this.mutationCache.config).onSuccess)==null?void 0:r.call(i,f,this.state.variables,this.state.context,this)),await((o=(s=this.options).onSuccess)==null?void 0:o.call(s,f,this.state.variables,this.state.context)),await((a=(l=this.mutationCache.config).onSettled)==null?void 0:a.call(l,f,null,this.state.variables,this.state.context,this)),await((c=(u=this.options).onSettled)==null?void 0:c.call(u,f,null,this.state.variables,this.state.context)),this.dispatch({type:"success",data:f}),f}catch(f){try{var E,C,b,m,v,x,_,S;throw await((E=(C=this.mutationCache.config).onError)==null?void 0:E.call(C,f,this.state.variables,this.state.context,this)),await((b=(m=this.options).onError)==null?void 0:b.call(m,f,this.state.variables,this.state.context)),await((v=(x=this.mutationCache.config).onSettled)==null?void 0:v.call(x,void 0,f,this.state.variables,this.state.context,this)),await((_=(S=this.options).onSettled)==null?void 0:_.call(S,void 0,f,this.state.variables,this.state.context)),f}finally{this.dispatch({type:"error",error:f})}}}dispatch(e){const n=r=>{switch(e.type){case"failed":return{...r,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"loading":return{...r,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!ow(this.options.networkMode),status:"loading",variables:e.variables};case"success":return{...r,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:e.error,failureCount:r.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"};case"setState":return{...r,...e.state}}};this.state=n(this.state),Yt.batch(()=>{this.observers.forEach(r=>{r.onMutationUpdate(e)}),this.mutationCache.notify({mutation:this,type:"updated",action:e})})}}function SD(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0}}class TD extends Bh{constructor(e){super(),this.config=e||{},this.mutations=[],this.mutationId=0}build(e,n,r){const i=new CD({mutationCache:this,logger:e.getLogger(),mutationId:++this.mutationId,options:e.defaultMutationOptions(n),state:r,defaultOptions:n.mutationKey?e.getMutationDefaults(n.mutationKey):void 0});return this.add(i),i}add(e){this.mutations.push(e),this.notify({type:"added",mutation:e})}remove(e){this.mutations=this.mutations.filter(n=>n!==e),this.notify({type:"removed",mutation:e})}clear(){Yt.batch(()=>{this.mutations.forEach(e=>{this.remove(e)})})}getAll(){return this.mutations}find(e){return typeof e.exact>"u"&&(e.exact=!0),this.mutations.find(n=>Vv(e,n))}findAll(e){return this.mutations.filter(n=>Vv(e,n))}notify(e){Yt.batch(()=>{this.listeners.forEach(({listener:n})=>{n(e)})})}resumePausedMutations(){var e;return this.resuming=((e=this.resuming)!=null?e:Promise.resolve()).then(()=>{const n=this.mutations.filter(r=>r.state.isPaused);return Yt.batch(()=>n.reduce((r,i)=>r.then(()=>i.continue().catch(nr)),Promise.resolve()))}).then(()=>{this.resuming=void 0}),this.resuming}}function AD(){return{onFetch:t=>{t.fetchFn=()=>{var e,n,r,i,o,s;const a=(e=t.fetchOptions)==null||(n=e.meta)==null?void 0:n.refetchPage,l=(r=t.fetchOptions)==null||(i=r.meta)==null?void 0:i.fetchMore,c=l==null?void 0:l.pageParam,u=(l==null?void 0:l.direction)==="forward",d=(l==null?void 0:l.direction)==="backward",p=((o=t.state.data)==null?void 0:o.pages)||[],w=((s=t.state.data)==null?void 0:s.pageParams)||[];let y=w,E=!1;const C=S=>{Object.defineProperty(S,"signal",{enumerable:!0,get:()=>{var f;if((f=t.signal)!=null&&f.aborted)E=!0;else{var A;(A=t.signal)==null||A.addEventListener("abort",()=>{E=!0})}return t.signal}})},b=t.options.queryFn||(()=>Promise.reject("Missing queryFn for queryKey '"+t.options.queryHash+"'")),m=(S,f,A,R)=>(y=R?[f,...y]:[...y,f],R?[A,...S]:[...S,A]),v=(S,f,A,R)=>{if(E)return Promise.reject("Cancelled");if(typeof A>"u"&&!f&&S.length)return Promise.resolve(S);const D={queryKey:t.queryKey,pageParam:A,meta:t.options.meta};C(D);const M=b(D);return Promise.resolve(M).then(ne=>m(S,A,ne,R))};let x;if(!p.length)x=v([]);else if(u){const S=typeof c<"u",f=S?c:Yv(t.options,p);x=v(p,S,f)}else if(d){const S=typeof c<"u",f=S?c:PD(t.options,p);x=v(p,S,f,!0)}else{y=[];const S=typeof t.options.getNextPageParam>"u";x=(a&&p[0]?a(p[0],0,p):!0)?v([],S,w[0]):Promise.resolve(m([],w[0],p[0]));for(let A=1;A<p.length;A++)x=x.then(R=>{if(a&&p[A]?a(p[A],A,p):!0){const M=S?w[A]:Yv(t.options,R);return v(R,S,M)}return Promise.resolve(m(R,w[A],p[A]))})}return x.then(S=>({pages:S,pageParams:y}))}}}}function Yv(t,e){return t.getNextPageParam==null?void 0:t.getNextPageParam(e[e.length-1],e)}function PD(t,e){return t.getPreviousPageParam==null?void 0:t.getPreviousPageParam(e[0],e)}class ID{constructor(e={}){this.queryCache=e.queryCache||new _D,this.mutationCache=e.mutationCache||new TD,this.logger=e.logger||sw,this.defaultOptions=e.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[],this.mountCount=0}mount(){this.mountCount++,this.mountCount===1&&(this.unsubscribeFocus=V1.subscribe(()=>{V1.isFocused()&&(this.resumePausedMutations(),this.queryCache.onFocus())}),this.unsubscribeOnline=Tf.subscribe(()=>{Tf.isOnline()&&(this.resumePausedMutations(),this.queryCache.onOnline())}))}unmount(){var e,n;this.mountCount--,this.mountCount===0&&((e=this.unsubscribeFocus)==null||e.call(this),this.unsubscribeFocus=void 0,(n=this.unsubscribeOnline)==null||n.call(this),this.unsubscribeOnline=void 0)}isFetching(e,n){const[r]=Ai(e,n);return r.fetchStatus="fetching",this.queryCache.findAll(r).length}isMutating(e){return this.mutationCache.findAll({...e,fetching:!0}).length}getQueryData(e,n){var r;return(r=this.queryCache.find(e,n))==null?void 0:r.state.data}ensureQueryData(e,n,r){const i=Qu(e,n,r),o=this.getQueryData(i.queryKey);return o?Promise.resolve(o):this.fetchQuery(i)}getQueriesData(e){return this.getQueryCache().findAll(e).map(({queryKey:n,state:r})=>{const i=r.data;return[n,i]})}setQueryData(e,n,r){const i=this.queryCache.find(e),o=i==null?void 0:i.state.data,s=fD(n,o);if(typeof s>"u")return;const a=Qu(e),l=this.defaultQueryOptions(a);return this.queryCache.build(this,l).setData(s,{...r,manual:!0})}setQueriesData(e,n,r){return Yt.batch(()=>this.getQueryCache().findAll(e).map(({queryKey:i})=>[i,this.setQueryData(i,n,r)]))}getQueryState(e,n){var r;return(r=this.queryCache.find(e,n))==null?void 0:r.state}removeQueries(e,n){const[r]=Ai(e,n),i=this.queryCache;Yt.batch(()=>{i.findAll(r).forEach(o=>{i.remove(o)})})}resetQueries(e,n,r){const[i,o]=Ai(e,n,r),s=this.queryCache,a={type:"active",...i};return Yt.batch(()=>(s.findAll(i).forEach(l=>{l.reset()}),this.refetchQueries(a,o)))}cancelQueries(e,n,r){const[i,o={}]=Ai(e,n,r);typeof o.revert>"u"&&(o.revert=!0);const s=Yt.batch(()=>this.queryCache.findAll(i).map(a=>a.cancel(o)));return Promise.all(s).then(nr).catch(nr)}invalidateQueries(e,n,r){const[i,o]=Ai(e,n,r);return Yt.batch(()=>{var s,a;if(this.queryCache.findAll(i).forEach(c=>{c.invalidate()}),i.refetchType==="none")return Promise.resolve();const l={...i,type:(s=(a=i.refetchType)!=null?a:i.type)!=null?s:"active"};return this.refetchQueries(l,o)})}refetchQueries(e,n,r){const[i,o]=Ai(e,n,r),s=Yt.batch(()=>this.queryCache.findAll(i).filter(l=>!l.isDisabled()).map(l=>{var c;return l.fetch(void 0,{...o,cancelRefetch:(c=o==null?void 0:o.cancelRefetch)!=null?c:!0,meta:{refetchPage:i.refetchPage}})}));let a=Promise.all(s).then(nr);return o!=null&&o.throwOnError||(a=a.catch(nr)),a}fetchQuery(e,n,r){const i=Qu(e,n,r),o=this.defaultQueryOptions(i);typeof o.retry>"u"&&(o.retry=!1);const s=this.queryCache.build(this,o);return s.isStaleByTime(o.staleTime)?s.fetch(o):Promise.resolve(s.state.data)}prefetchQuery(e,n,r){return this.fetchQuery(e,n,r).then(nr).catch(nr)}fetchInfiniteQuery(e,n,r){const i=Qu(e,n,r);return i.behavior=AD(),this.fetchQuery(i)}prefetchInfiniteQuery(e,n,r){return this.fetchInfiniteQuery(e,n,r).then(nr).catch(nr)}resumePausedMutations(){return this.mutationCache.resumePausedMutations()}getQueryCache(){return this.queryCache}getMutationCache(){return this.mutationCache}getLogger(){return this.logger}getDefaultOptions(){return this.defaultOptions}setDefaultOptions(e){this.defaultOptions=e}setQueryDefaults(e,n){const r=this.queryDefaults.find(i=>$o(e)===$o(i.queryKey));r?r.defaultOptions=n:this.queryDefaults.push({queryKey:e,defaultOptions:n})}getQueryDefaults(e){if(!e)return;const n=this.queryDefaults.find(r=>Sf(e,r.queryKey));return n==null?void 0:n.defaultOptions}setMutationDefaults(e,n){const r=this.mutationDefaults.find(i=>$o(e)===$o(i.mutationKey));r?r.defaultOptions=n:this.mutationDefaults.push({mutationKey:e,defaultOptions:n})}getMutationDefaults(e){if(!e)return;const n=this.mutationDefaults.find(r=>Sf(e,r.mutationKey));return n==null?void 0:n.defaultOptions}defaultQueryOptions(e){if(e!=null&&e._defaulted)return e;const n={...this.defaultOptions.queries,...this.getQueryDefaults(e==null?void 0:e.queryKey),...e,_defaulted:!0};return!n.queryHash&&n.queryKey&&(n.queryHash=iw(n.queryKey,n)),typeof n.refetchOnReconnect>"u"&&(n.refetchOnReconnect=n.networkMode!=="always"),typeof n.useErrorBoundary>"u"&&(n.useErrorBoundary=!!n.suspense),n}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...this.defaultOptions.mutations,...this.getMutationDefaults(e==null?void 0:e.mutationKey),...e,_defaulted:!0}}clear(){this.queryCache.clear(),this.mutationCache.clear()}}function $D(t){return{mutationKey:t.options.mutationKey,state:t.state}}function OD(t){return{state:t.state,queryKey:t.queryKey,queryHash:t.queryHash}}function DD(t){return t.state.isPaused}function kD(t){return t.state.status==="success"}function RD(t,e={}){const n=[],r=[];if(e.dehydrateMutations!==!1){const i=e.shouldDehydrateMutation||DD;t.getMutationCache().getAll().forEach(o=>{i(o)&&n.push($D(o))})}if(e.dehydrateQueries!==!1){const i=e.shouldDehydrateQuery||kD;t.getQueryCache().getAll().forEach(o=>{i(o)&&r.push(OD(o))})}return{mutations:n,queries:r}}function ND(t,e,n){if(typeof e!="object"||e===null)return;const r=t.getMutationCache(),i=t.getQueryCache(),o=e.mutations||[],s=e.queries||[];o.forEach(a=>{var l;r.build(t,{...n==null||(l=n.defaultOptions)==null?void 0:l.mutations,mutationKey:a.mutationKey},a.state)}),s.forEach(({queryKey:a,state:l,queryHash:c})=>{var u;const d=i.get(c);if(d){if(d.state.dataUpdatedAt<l.dataUpdatedAt){const{fetchStatus:p,...w}=l;d.setState(w)}return}i.build(t,{...n==null||(u=n.defaultOptions)==null?void 0:u.queries,queryKey:a,queryHash:c},{...l,fetchStatus:"idle"})})}const Qv=At.createContext(void 0),MD=At.createContext(!1);function UD(t,e){return t||(e&&typeof window<"u"?(window.ReactQueryClientContext||(window.ReactQueryClientContext=Qv),window.ReactQueryClientContext):Qv)}const LD=({client:t,children:e,context:n,contextSharing:r=!1})=>{At.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]);const i=UD(n,r);return At.createElement(MD.Provider,{value:!n&&r},At.createElement(i.Provider,{value:t},e))},BD=["added","removed","updated"];function Xv(t){return BD.includes(t)}async function jD({queryClient:t,persister:e,maxAge:n=1e3*60*60*24,buster:r="",hydrateOptions:i}){try{const o=await e.restoreClient();if(o)if(o.timestamp){const s=Date.now()-o.timestamp>n,a=o.buster!==r;s||a?e.removeClient():ND(t,o.clientState,i)}else e.removeClient()}catch{e.removeClient()}}async function Jv({queryClient:t,persister:e,buster:n="",dehydrateOptions:r}){const i={buster:n,timestamp:Date.now(),clientState:RD(t,r)};await e.persistClient(i)}function FD(t){const e=t.queryClient.getQueryCache().subscribe(r=>{Xv(r.type)&&Jv(t)}),n=t.queryClient.getMutationCache().subscribe(r=>{Xv(r.type)&&Jv(t)});return()=>{e(),n()}}function WD(t){let e=!1,n;const r=()=>{e=!0,n==null||n()},i=jD(t).then(()=>{e||(n=FD(t))});return[r,i]}var zD={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fh=At,HD=kS;function VD(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var qD=typeof Object.is=="function"?Object.is:VD,ZD=HD.useSyncExternalStore,GD=Fh.useRef,KD=Fh.useEffect,YD=Fh.useMemo,QD=Fh.useDebugValue;zD.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var o=GD(null);if(o.current===null){var s={hasValue:!1,value:null};o.current=s}else s=o.current;o=YD(function(){function l(w){if(!c){if(c=!0,u=w,w=r(w),i!==void 0&&s.hasValue){var y=s.value;if(i(y,w))return d=y}return d=w}if(y=d,qD(u,w))return y;var E=r(w);return i!==void 0&&i(y,E)?y:(u=w,d=E)}var c=!1,u,d,p=n===void 0?null:n;return[function(){return l(e())},p===null?void 0:function(){return l(p())}]},[e,n,r,i]);var a=ZD(t,o[0],o[1]);return KD(function(){s.hasValue=!0,s.value=a},[a]),QD(a),a};function XD({queryClient:t=new ID({defaultOptions:{queries:{cacheTime:1e3*60*60*24,networkMode:"offlineFirst",refetchOnWindowFocus:!1,retry:0},mutations:{networkMode:"offlineFirst"}}}),storage:e=X5({storage:typeof window<"u"&&window.localStorage?window.localStorage:Q5}),persister:n=typeof window<"u"?uD({key:"cache",storage:e,serialize:i=>i,deserialize:i=>i}):void 0,...r}){const i=iS({...r,storage:e});return n&&WD({queryClient:t,persister:n,dehydrateOptions:{shouldDehydrateQuery:o=>o.cacheTime!==0&&o.queryKey[0].persist!==!1}}),Object.assign(i,{queryClient:t})}var JD=At.createContext(void 0),ek=At.createContext(void 0);function tk({children:t,config:e}){return At.createElement(JD.Provider,{children:At.createElement(LD,{children:t,client:e.queryClient,context:ek}),value:e})}var hl,Es,nk=class extends mh{constructor({chains:t,options:e}){super({chains:t,options:{reloadOnDisconnect:!1,...e}}),this.id="coinbaseWallet",this.name="Coinbase Wallet",this.ready=!0,ln(this,hl,void 0),ln(this,Es,void 0),this.onAccountsChanged=n=>{n.length===0?this.emit("disconnect"):this.emit("change",{account:zn(n[0])})},this.onChainChanged=n=>{const r=qd(n),i=this.isChainUnsupported(r);this.emit("change",{chain:{id:r,unsupported:i}})},this.onDisconnect=()=>{this.emit("disconnect")}}async connect({chainId:t}={}){try{const e=await this.getProvider();e.on("accountsChanged",this.onAccountsChanged),e.on("chainChanged",this.onChainChanged),e.on("disconnect",this.onDisconnect),this.emit("message",{type:"connecting"});const n=await e.enable(),r=zn(n[0]);let i=await this.getChainId(),o=this.isChainUnsupported(i);return t&&i!==t&&(i=(await this.switchChain(t)).id,o=this.isChainUnsupported(i)),{account:r,chain:{id:i,unsupported:o}}}catch(e){throw/(user closed modal|accounts received is empty)/i.test(e.message)?new fn(e):e}}async disconnect(){if(!He(this,Es))return;const t=await this.getProvider();t.removeListener("accountsChanged",this.onAccountsChanged),t.removeListener("chainChanged",this.onChainChanged),t.removeListener("disconnect",this.onDisconnect),t.disconnect(),t.close()}async getAccount(){const e=await(await this.getProvider()).request({method:"eth_accounts"});return zn(e[0])}async getChainId(){const t=await this.getProvider();return qd(t.chainId)}async getProvider(){var t;if(!He(this,Es)){let e=(await sa(()=>import("./index-961a7796.js").then(s=>s.i),["assets/index-961a7796.js","assets/events-797e3442.js"])).default;typeof e!="function"&&typeof e.default=="function"&&(e=e.default),uc(this,hl,new e(this.options));const n=(t=He(this,hl).walletExtension)==null?void 0:t.getChainId(),r=this.chains.find(s=>this.options.chainId?s.id===this.options.chainId:s.id===n)||this.chains[0],i=this.options.chainId||(r==null?void 0:r.id),o=this.options.jsonRpcUrl||(r==null?void 0:r.rpcUrls.default.http[0]);uc(this,Es,He(this,hl).makeWeb3Provider(o,i))}return He(this,Es)}async getWalletClient({chainId:t}={}){const[e,n]=await Promise.all([this.getProvider(),this.getAccount()]),r=this.chains.find(i=>i.id===t);if(!e)throw new Error("provider is required.");return hh({account:n,chain:r,transport:dh(e)})}async isAuthorized(){try{return!!await this.getAccount()}catch{return!1}}async switchChain(t){var r;const e=await this.getProvider(),n=Se(t);try{return await e.request({method:"wallet_switchEthereumChain",params:[{chainId:n}]}),this.chains.find(i=>i.id===t)??{id:t,name:`Chain ${n}`,network:`${n}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(i){const o=this.chains.find(s=>s.id===t);if(!o)throw new G5({chainId:t,connectorId:this.id});if(i.code===4902)try{return await e.request({method:"wallet_addEthereumChain",params:[{chainId:n,chainName:o.name,nativeCurrency:o.nativeCurrency,rpcUrls:[((r=o.rpcUrls.public)==null?void 0:r.http[0])??""],blockExplorerUrls:this.getBlockExplorerUrls(o)}]}),o}catch(s){throw new fn(s)}throw new hr(i)}}async watchAsset({address:t,decimals:e=18,image:n,symbol:r}){return(await this.getProvider()).request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:t,decimals:e,image:n,symbol:r}}})}};hl=new WeakMap;Es=new WeakMap;var aw={},Wh={},Pe={},x6={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});function e(a,l){var c=a>>>16&65535,u=a&65535,d=l>>>16&65535,p=l&65535;return u*p+(c*p+u*d<<16>>>0)|0}t.mul=Math.imul||e;function n(a,l){return a+l|0}t.add=n;function r(a,l){return a-l|0}t.sub=r;function i(a,l){return a<<l|a>>>32-l}t.rotl=i;function o(a,l){return a<<32-l|a>>>l}t.rotr=o;function s(a){return typeof a=="number"&&isFinite(a)&&Math.floor(a)===a}t.isInteger=Number.isInteger||s,t.MAX_SAFE_INTEGER=9007199254740991,t.isSafeInteger=function(a){return t.isInteger(a)&&a>=-t.MAX_SAFE_INTEGER&&a<=t.MAX_SAFE_INTEGER}})(x6);Object.defineProperty(Pe,"__esModule",{value:!0});var E6=x6;function rk(t,e){return e===void 0&&(e=0),(t[e+0]<<8|t[e+1])<<16>>16}Pe.readInt16BE=rk;function ik(t,e){return e===void 0&&(e=0),(t[e+0]<<8|t[e+1])>>>0}Pe.readUint16BE=ik;function ok(t,e){return e===void 0&&(e=0),(t[e+1]<<8|t[e])<<16>>16}Pe.readInt16LE=ok;function sk(t,e){return e===void 0&&(e=0),(t[e+1]<<8|t[e])>>>0}Pe.readUint16LE=sk;function _6(t,e,n){return e===void 0&&(e=new Uint8Array(2)),n===void 0&&(n=0),e[n+0]=t>>>8,e[n+1]=t>>>0,e}Pe.writeUint16BE=_6;Pe.writeInt16BE=_6;function C6(t,e,n){return e===void 0&&(e=new Uint8Array(2)),n===void 0&&(n=0),e[n+0]=t>>>0,e[n+1]=t>>>8,e}Pe.writeUint16LE=C6;Pe.writeInt16LE=C6;function q1(t,e){return e===void 0&&(e=0),t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3]}Pe.readInt32BE=q1;function Z1(t,e){return e===void 0&&(e=0),(t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3])>>>0}Pe.readUint32BE=Z1;function G1(t,e){return e===void 0&&(e=0),t[e+3]<<24|t[e+2]<<16|t[e+1]<<8|t[e]}Pe.readInt32LE=G1;function K1(t,e){return e===void 0&&(e=0),(t[e+3]<<24|t[e+2]<<16|t[e+1]<<8|t[e])>>>0}Pe.readUint32LE=K1;function Af(t,e,n){return e===void 0&&(e=new Uint8Array(4)),n===void 0&&(n=0),e[n+0]=t>>>24,e[n+1]=t>>>16,e[n+2]=t>>>8,e[n+3]=t>>>0,e}Pe.writeUint32BE=Af;Pe.writeInt32BE=Af;function Pf(t,e,n){return e===void 0&&(e=new Uint8Array(4)),n===void 0&&(n=0),e[n+0]=t>>>0,e[n+1]=t>>>8,e[n+2]=t>>>16,e[n+3]=t>>>24,e}Pe.writeUint32LE=Pf;Pe.writeInt32LE=Pf;function ak(t,e){e===void 0&&(e=0);var n=q1(t,e),r=q1(t,e+4);return n*4294967296+r-(r>>31)*4294967296}Pe.readInt64BE=ak;function lk(t,e){e===void 0&&(e=0);var n=Z1(t,e),r=Z1(t,e+4);return n*4294967296+r}Pe.readUint64BE=lk;function ck(t,e){e===void 0&&(e=0);var n=G1(t,e),r=G1(t,e+4);return r*4294967296+n-(n>>31)*4294967296}Pe.readInt64LE=ck;function uk(t,e){e===void 0&&(e=0);var n=K1(t,e),r=K1(t,e+4);return r*4294967296+n}Pe.readUint64LE=uk;function S6(t,e,n){return e===void 0&&(e=new Uint8Array(8)),n===void 0&&(n=0),Af(t/4294967296>>>0,e,n),Af(t>>>0,e,n+4),e}Pe.writeUint64BE=S6;Pe.writeInt64BE=S6;function T6(t,e,n){return e===void 0&&(e=new Uint8Array(8)),n===void 0&&(n=0),Pf(t>>>0,e,n),Pf(t/4294967296>>>0,e,n+4),e}Pe.writeUint64LE=T6;Pe.writeInt64LE=T6;function dk(t,e,n){if(n===void 0&&(n=0),t%8!==0)throw new Error("readUintBE supports only bitLengths divisible by 8");if(t/8>e.length-n)throw new Error("readUintBE: array is too short for the given bitLength");for(var r=0,i=1,o=t/8+n-1;o>=n;o--)r+=e[o]*i,i*=256;return r}Pe.readUintBE=dk;function fk(t,e,n){if(n===void 0&&(n=0),t%8!==0)throw new Error("readUintLE supports only bitLengths divisible by 8");if(t/8>e.length-n)throw new Error("readUintLE: array is too short for the given bitLength");for(var r=0,i=1,o=n;o<n+t/8;o++)r+=e[o]*i,i*=256;return r}Pe.readUintLE=fk;function hk(t,e,n,r){if(n===void 0&&(n=new Uint8Array(t/8)),r===void 0&&(r=0),t%8!==0)throw new Error("writeUintBE supports only bitLengths divisible by 8");if(!E6.isSafeInteger(e))throw new Error("writeUintBE value must be an integer");for(var i=1,o=t/8+r-1;o>=r;o--)n[o]=e/i&255,i*=256;return n}Pe.writeUintBE=hk;function pk(t,e,n,r){if(n===void 0&&(n=new Uint8Array(t/8)),r===void 0&&(r=0),t%8!==0)throw new Error("writeUintLE supports only bitLengths divisible by 8");if(!E6.isSafeInteger(e))throw new Error("writeUintLE value must be an integer");for(var i=1,o=r;o<r+t/8;o++)n[o]=e/i&255,i*=256;return n}Pe.writeUintLE=pk;function mk(t,e){e===void 0&&(e=0);var n=new DataView(t.buffer,t.byteOffset,t.byteLength);return n.getFloat32(e)}Pe.readFloat32BE=mk;function gk(t,e){e===void 0&&(e=0);var n=new DataView(t.buffer,t.byteOffset,t.byteLength);return n.getFloat32(e,!0)}Pe.readFloat32LE=gk;function wk(t,e){e===void 0&&(e=0);var n=new DataView(t.buffer,t.byteOffset,t.byteLength);return n.getFloat64(e)}Pe.readFloat64BE=wk;function yk(t,e){e===void 0&&(e=0);var n=new DataView(t.buffer,t.byteOffset,t.byteLength);return n.getFloat64(e,!0)}Pe.readFloat64LE=yk;function vk(t,e,n){e===void 0&&(e=new Uint8Array(4)),n===void 0&&(n=0);var r=new DataView(e.buffer,e.byteOffset,e.byteLength);return r.setFloat32(n,t),e}Pe.writeFloat32BE=vk;function bk(t,e,n){e===void 0&&(e=new Uint8Array(4)),n===void 0&&(n=0);var r=new DataView(e.buffer,e.byteOffset,e.byteLength);return r.setFloat32(n,t,!0),e}Pe.writeFloat32LE=bk;function xk(t,e,n){e===void 0&&(e=new Uint8Array(8)),n===void 0&&(n=0);var r=new DataView(e.buffer,e.byteOffset,e.byteLength);return r.setFloat64(n,t),e}Pe.writeFloat64BE=xk;function Ek(t,e,n){e===void 0&&(e=new Uint8Array(8)),n===void 0&&(n=0);var r=new DataView(e.buffer,e.byteOffset,e.byteLength);return r.setFloat64(n,t,!0),e}Pe.writeFloat64LE=Ek;var Er={};Object.defineProperty(Er,"__esModule",{value:!0});function _k(t){for(var e=0;e<t.length;e++)t[e]=0;return t}Er.wipe=_k;Object.defineProperty(Wh,"__esModule",{value:!0});var zt=Pe,Y1=Er,Ck=20;function Sk(t,e,n){for(var r=1634760805,i=857760878,o=2036477234,s=1797285236,a=n[3]<<24|n[2]<<16|n[1]<<8|n[0],l=n[7]<<24|n[6]<<16|n[5]<<8|n[4],c=n[11]<<24|n[10]<<16|n[9]<<8|n[8],u=n[15]<<24|n[14]<<16|n[13]<<8|n[12],d=n[19]<<24|n[18]<<16|n[17]<<8|n[16],p=n[23]<<24|n[22]<<16|n[21]<<8|n[20],w=n[27]<<24|n[26]<<16|n[25]<<8|n[24],y=n[31]<<24|n[30]<<16|n[29]<<8|n[28],E=e[3]<<24|e[2]<<16|e[1]<<8|e[0],C=e[7]<<24|e[6]<<16|e[5]<<8|e[4],b=e[11]<<24|e[10]<<16|e[9]<<8|e[8],m=e[15]<<24|e[14]<<16|e[13]<<8|e[12],v=r,x=i,_=o,S=s,f=a,A=l,R=c,D=u,M=d,ee=p,ne=w,H=y,F=E,B=C,j=b,k=m,W=0;W<Ck;W+=2)v=v+f|0,F^=v,F=F>>>32-16|F<<16,M=M+F|0,f^=M,f=f>>>32-12|f<<12,x=x+A|0,B^=x,B=B>>>32-16|B<<16,ee=ee+B|0,A^=ee,A=A>>>32-12|A<<12,_=_+R|0,j^=_,j=j>>>32-16|j<<16,ne=ne+j|0,R^=ne,R=R>>>32-12|R<<12,S=S+D|0,k^=S,k=k>>>32-16|k<<16,H=H+k|0,D^=H,D=D>>>32-12|D<<12,_=_+R|0,j^=_,j=j>>>32-8|j<<8,ne=ne+j|0,R^=ne,R=R>>>32-7|R<<7,S=S+D|0,k^=S,k=k>>>32-8|k<<8,H=H+k|0,D^=H,D=D>>>32-7|D<<7,x=x+A|0,B^=x,B=B>>>32-8|B<<8,ee=ee+B|0,A^=ee,A=A>>>32-7|A<<7,v=v+f|0,F^=v,F=F>>>32-8|F<<8,M=M+F|0,f^=M,f=f>>>32-7|f<<7,v=v+A|0,k^=v,k=k>>>32-16|k<<16,ne=ne+k|0,A^=ne,A=A>>>32-12|A<<12,x=x+R|0,F^=x,F=F>>>32-16|F<<16,H=H+F|0,R^=H,R=R>>>32-12|R<<12,_=_+D|0,B^=_,B=B>>>32-16|B<<16,M=M+B|0,D^=M,D=D>>>32-12|D<<12,S=S+f|0,j^=S,j=j>>>32-16|j<<16,ee=ee+j|0,f^=ee,f=f>>>32-12|f<<12,_=_+D|0,B^=_,B=B>>>32-8|B<<8,M=M+B|0,D^=M,D=D>>>32-7|D<<7,S=S+f|0,j^=S,j=j>>>32-8|j<<8,ee=ee+j|0,f^=ee,f=f>>>32-7|f<<7,x=x+R|0,F^=x,F=F>>>32-8|F<<8,H=H+F|0,R^=H,R=R>>>32-7|R<<7,v=v+A|0,k^=v,k=k>>>32-8|k<<8,ne=ne+k|0,A^=ne,A=A>>>32-7|A<<7;zt.writeUint32LE(v+r|0,t,0),zt.writeUint32LE(x+i|0,t,4),zt.writeUint32LE(_+o|0,t,8),zt.writeUint32LE(S+s|0,t,12),zt.writeUint32LE(f+a|0,t,16),zt.writeUint32LE(A+l|0,t,20),zt.writeUint32LE(R+c|0,t,24),zt.writeUint32LE(D+u|0,t,28),zt.writeUint32LE(M+d|0,t,32),zt.writeUint32LE(ee+p|0,t,36),zt.writeUint32LE(ne+w|0,t,40),zt.writeUint32LE(H+y|0,t,44),zt.writeUint32LE(F+E|0,t,48),zt.writeUint32LE(B+C|0,t,52),zt.writeUint32LE(j+b|0,t,56),zt.writeUint32LE(k+m|0,t,60)}function A6(t,e,n,r,i){if(i===void 0&&(i=0),t.length!==32)throw new Error("ChaCha: key size must be 32 bytes");if(r.length<n.length)throw new Error("ChaCha: destination is shorter than source");var o,s;if(i===0){if(e.length!==8&&e.length!==12)throw new Error("ChaCha nonce must be 8 or 12 bytes");o=new Uint8Array(16),s=o.length-e.length,o.set(e,s)}else{if(e.length!==16)throw new Error("ChaCha nonce with counter must be 16 bytes");o=e,s=i}for(var a=new Uint8Array(64),l=0;l<n.length;l+=64){Sk(a,o,t);for(var c=l;c<l+64&&c<n.length;c++)r[c]=n[c]^a[c-l];Ak(o,0,s)}return Y1.wipe(a),i===0&&Y1.wipe(o),r}Wh.streamXOR=A6;function Tk(t,e,n,r){return r===void 0&&(r=0),Y1.wipe(n),A6(t,e,n,n,r)}Wh.stream=Tk;function Ak(t,e,n){for(var r=1;n--;)r=r+(t[e]&255)|0,t[e]=r&255,r>>>=8,e++;if(r>0)throw new Error("ChaCha: counter overflow")}var P6={},mo={};Object.defineProperty(mo,"__esModule",{value:!0});function Pk(t,e,n){return~(t-1)&e|t-1&n}mo.select=Pk;function Ik(t,e){return(t|0)-(e|0)-1>>>31&1}mo.lessOrEqual=Ik;function I6(t,e){if(t.length!==e.length)return 0;for(var n=0,r=0;r<t.length;r++)n|=t[r]^e[r];return 1&n-1>>>8}mo.compare=I6;function $k(t,e){return t.length===0||e.length===0?!1:I6(t,e)!==0}mo.equal=$k;(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e=mo,n=Er;t.DIGEST_LENGTH=16;var r=function(){function s(a){this.digestLength=t.DIGEST_LENGTH,this._buffer=new Uint8Array(16),this._r=new Uint16Array(10),this._h=new Uint16Array(10),this._pad=new Uint16Array(8),this._leftover=0,this._fin=0,this._finished=!1;var l=a[0]|a[1]<<8;this._r[0]=l&8191;var c=a[2]|a[3]<<8;this._r[1]=(l>>>13|c<<3)&8191;var u=a[4]|a[5]<<8;this._r[2]=(c>>>10|u<<6)&7939;var d=a[6]|a[7]<<8;this._r[3]=(u>>>7|d<<9)&8191;var p=a[8]|a[9]<<8;this._r[4]=(d>>>4|p<<12)&255,this._r[5]=p>>>1&8190;var w=a[10]|a[11]<<8;this._r[6]=(p>>>14|w<<2)&8191;var y=a[12]|a[13]<<8;this._r[7]=(w>>>11|y<<5)&8065;var E=a[14]|a[15]<<8;this._r[8]=(y>>>8|E<<8)&8191,this._r[9]=E>>>5&127,this._pad[0]=a[16]|a[17]<<8,this._pad[1]=a[18]|a[19]<<8,this._pad[2]=a[20]|a[21]<<8,this._pad[3]=a[22]|a[23]<<8,this._pad[4]=a[24]|a[25]<<8,this._pad[5]=a[26]|a[27]<<8,this._pad[6]=a[28]|a[29]<<8,this._pad[7]=a[30]|a[31]<<8}return s.prototype._blocks=function(a,l,c){for(var u=this._fin?0:2048,d=this._h[0],p=this._h[1],w=this._h[2],y=this._h[3],E=this._h[4],C=this._h[5],b=this._h[6],m=this._h[7],v=this._h[8],x=this._h[9],_=this._r[0],S=this._r[1],f=this._r[2],A=this._r[3],R=this._r[4],D=this._r[5],M=this._r[6],ee=this._r[7],ne=this._r[8],H=this._r[9];c>=16;){var F=a[l+0]|a[l+1]<<8;d+=F&8191;var B=a[l+2]|a[l+3]<<8;p+=(F>>>13|B<<3)&8191;var j=a[l+4]|a[l+5]<<8;w+=(B>>>10|j<<6)&8191;var k=a[l+6]|a[l+7]<<8;y+=(j>>>7|k<<9)&8191;var W=a[l+8]|a[l+9]<<8;E+=(k>>>4|W<<12)&8191,C+=W>>>1&8191;var z=a[l+10]|a[l+11]<<8;b+=(W>>>14|z<<2)&8191;var G=a[l+12]|a[l+13]<<8;m+=(z>>>11|G<<5)&8191;var J=a[l+14]|a[l+15]<<8;v+=(G>>>8|J<<8)&8191,x+=J>>>5|u;var Y=0,oe=Y;oe+=d*_,oe+=p*(5*H),oe+=w*(5*ne),oe+=y*(5*ee),oe+=E*(5*M),Y=oe>>>13,oe&=8191,oe+=C*(5*D),oe+=b*(5*R),oe+=m*(5*A),oe+=v*(5*f),oe+=x*(5*S),Y+=oe>>>13,oe&=8191;var fe=Y;fe+=d*S,fe+=p*_,fe+=w*(5*H),fe+=y*(5*ne),fe+=E*(5*ee),Y=fe>>>13,fe&=8191,fe+=C*(5*M),fe+=b*(5*D),fe+=m*(5*R),fe+=v*(5*A),fe+=x*(5*f),Y+=fe>>>13,fe&=8191;var pe=Y;pe+=d*f,pe+=p*S,pe+=w*_,pe+=y*(5*H),pe+=E*(5*ne),Y=pe>>>13,pe&=8191,pe+=C*(5*ee),pe+=b*(5*M),pe+=m*(5*D),pe+=v*(5*R),pe+=x*(5*A),Y+=pe>>>13,pe&=8191;var ye=Y;ye+=d*A,ye+=p*f,ye+=w*S,ye+=y*_,ye+=E*(5*H),Y=ye>>>13,ye&=8191,ye+=C*(5*ne),ye+=b*(5*ee),ye+=m*(5*M),ye+=v*(5*D),ye+=x*(5*R),Y+=ye>>>13,ye&=8191;var _e=Y;_e+=d*R,_e+=p*A,_e+=w*f,_e+=y*S,_e+=E*_,Y=_e>>>13,_e&=8191,_e+=C*(5*H),_e+=b*(5*ne),_e+=m*(5*ee),_e+=v*(5*M),_e+=x*(5*D),Y+=_e>>>13,_e&=8191;var Ie=Y;Ie+=d*D,Ie+=p*R,Ie+=w*A,Ie+=y*f,Ie+=E*S,Y=Ie>>>13,Ie&=8191,Ie+=C*_,Ie+=b*(5*H),Ie+=m*(5*ne),Ie+=v*(5*ee),Ie+=x*(5*M),Y+=Ie>>>13,Ie&=8191;var ve=Y;ve+=d*M,ve+=p*D,ve+=w*R,ve+=y*A,ve+=E*f,Y=ve>>>13,ve&=8191,ve+=C*S,ve+=b*_,ve+=m*(5*H),ve+=v*(5*ne),ve+=x*(5*ee),Y+=ve>>>13,ve&=8191;var ke=Y;ke+=d*ee,ke+=p*M,ke+=w*D,ke+=y*R,ke+=E*A,Y=ke>>>13,ke&=8191,ke+=C*f,ke+=b*S,ke+=m*_,ke+=v*(5*H),ke+=x*(5*ne),Y+=ke>>>13,ke&=8191;var Le=Y;Le+=d*ne,Le+=p*ee,Le+=w*M,Le+=y*D,Le+=E*R,Y=Le>>>13,Le&=8191,Le+=C*A,Le+=b*f,Le+=m*S,Le+=v*_,Le+=x*(5*H),Y+=Le>>>13,Le&=8191;var Me=Y;Me+=d*H,Me+=p*ne,Me+=w*ee,Me+=y*M,Me+=E*D,Y=Me>>>13,Me&=8191,Me+=C*R,Me+=b*A,Me+=m*f,Me+=v*S,Me+=x*_,Y+=Me>>>13,Me&=8191,Y=(Y<<2)+Y|0,Y=Y+oe|0,oe=Y&8191,Y=Y>>>13,fe+=Y,d=oe,p=fe,w=pe,y=ye,E=_e,C=Ie,b=ve,m=ke,v=Le,x=Me,l+=16,c-=16}this._h[0]=d,this._h[1]=p,this._h[2]=w,this._h[3]=y,this._h[4]=E,this._h[5]=C,this._h[6]=b,this._h[7]=m,this._h[8]=v,this._h[9]=x},s.prototype.finish=function(a,l){l===void 0&&(l=0);var c=new Uint16Array(10),u,d,p,w;if(this._leftover){for(w=this._leftover,this._buffer[w++]=1;w<16;w++)this._buffer[w]=0;this._fin=1,this._blocks(this._buffer,0,16)}for(u=this._h[1]>>>13,this._h[1]&=8191,w=2;w<10;w++)this._h[w]+=u,u=this._h[w]>>>13,this._h[w]&=8191;for(this._h[0]+=u*5,u=this._h[0]>>>13,this._h[0]&=8191,this._h[1]+=u,u=this._h[1]>>>13,this._h[1]&=8191,this._h[2]+=u,c[0]=this._h[0]+5,u=c[0]>>>13,c[0]&=8191,w=1;w<10;w++)c[w]=this._h[w]+u,u=c[w]>>>13,c[w]&=8191;for(c[9]-=8192,d=(u^1)-1,w=0;w<10;w++)c[w]&=d;for(d=~d,w=0;w<10;w++)this._h[w]=this._h[w]&d|c[w];for(this._h[0]=(this._h[0]|this._h[1]<<13)&65535,this._h[1]=(this._h[1]>>>3|this._h[2]<<10)&65535,this._h[2]=(this._h[2]>>>6|this._h[3]<<7)&65535,this._h[3]=(this._h[3]>>>9|this._h[4]<<4)&65535,this._h[4]=(this._h[4]>>>12|this._h[5]<<1|this._h[6]<<14)&65535,this._h[5]=(this._h[6]>>>2|this._h[7]<<11)&65535,this._h[6]=(this._h[7]>>>5|this._h[8]<<8)&65535,this._h[7]=(this._h[8]>>>8|this._h[9]<<5)&65535,p=this._h[0]+this._pad[0],this._h[0]=p&65535,w=1;w<8;w++)p=(this._h[w]+this._pad[w]|0)+(p>>>16)|0,this._h[w]=p&65535;return a[l+0]=this._h[0]>>>0,a[l+1]=this._h[0]>>>8,a[l+2]=this._h[1]>>>0,a[l+3]=this._h[1]>>>8,a[l+4]=this._h[2]>>>0,a[l+5]=this._h[2]>>>8,a[l+6]=this._h[3]>>>0,a[l+7]=this._h[3]>>>8,a[l+8]=this._h[4]>>>0,a[l+9]=this._h[4]>>>8,a[l+10]=this._h[5]>>>0,a[l+11]=this._h[5]>>>8,a[l+12]=this._h[6]>>>0,a[l+13]=this._h[6]>>>8,a[l+14]=this._h[7]>>>0,a[l+15]=this._h[7]>>>8,this._finished=!0,this},s.prototype.update=function(a){var l=0,c=a.length,u;if(this._leftover){u=16-this._leftover,u>c&&(u=c);for(var d=0;d<u;d++)this._buffer[this._leftover+d]=a[l+d];if(c-=u,l+=u,this._leftover+=u,this._leftover<16)return this;this._blocks(this._buffer,0,16),this._leftover=0}if(c>=16&&(u=c-c%16,this._blocks(a,l,u),l+=u,c-=u),c){for(var d=0;d<c;d++)this._buffer[this._leftover+d]=a[l+d];this._leftover+=c}return this},s.prototype.digest=function(){if(this._finished)throw new Error("Poly1305 was finished");var a=new Uint8Array(16);return this.finish(a),a},s.prototype.clean=function(){return n.wipe(this._buffer),n.wipe(this._r),n.wipe(this._h),n.wipe(this._pad),this._leftover=0,this._fin=0,this._finished=!0,this},s}();t.Poly1305=r;function i(s,a){var l=new r(s);l.update(a);var c=l.digest();return l.clean(),c}t.oneTimeAuth=i;function o(s,a){return s.length!==t.DIGEST_LENGTH||a.length!==t.DIGEST_LENGTH?!1:e.equal(s,a)}t.equal=o})(P6);(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e=Wh,n=P6,r=Er,i=Pe,o=mo;t.KEY_LENGTH=32,t.NONCE_LENGTH=12,t.TAG_LENGTH=16;var s=new Uint8Array(16),a=function(){function l(c){if(this.nonceLength=t.NONCE_LENGTH,this.tagLength=t.TAG_LENGTH,c.length!==t.KEY_LENGTH)throw new Error("ChaCha20Poly1305 needs 32-byte key");this._key=new Uint8Array(c)}return l.prototype.seal=function(c,u,d,p){if(c.length>16)throw new Error("ChaCha20Poly1305: incorrect nonce length");var w=new Uint8Array(16);w.set(c,w.length-c.length);var y=new Uint8Array(32);e.stream(this._key,w,y,4);var E=u.length+this.tagLength,C;if(p){if(p.length!==E)throw new Error("ChaCha20Poly1305: incorrect destination length");C=p}else C=new Uint8Array(E);return e.streamXOR(this._key,w,u,C,4),this._authenticate(C.subarray(C.length-this.tagLength,C.length),y,C.subarray(0,C.length-this.tagLength),d),r.wipe(w),C},l.prototype.open=function(c,u,d,p){if(c.length>16)throw new Error("ChaCha20Poly1305: incorrect nonce length");if(u.length<this.tagLength)return null;var w=new Uint8Array(16);w.set(c,w.length-c.length);var y=new Uint8Array(32);e.stream(this._key,w,y,4);var E=new Uint8Array(this.tagLength);if(this._authenticate(E,y,u.subarray(0,u.length-this.tagLength),d),!o.equal(E,u.subarray(u.length-this.tagLength,u.length)))return null;var C=u.length-this.tagLength,b;if(p){if(p.length!==C)throw new Error("ChaCha20Poly1305: incorrect destination length");b=p}else b=new Uint8Array(C);return e.streamXOR(this._key,w,u.subarray(0,u.length-this.tagLength),b,4),r.wipe(w),b},l.prototype.clean=function(){return r.wipe(this._key),this},l.prototype._authenticate=function(c,u,d,p){var w=new n.Poly1305(u);p&&(w.update(p),p.length%16>0&&w.update(s.subarray(p.length%16))),w.update(d),d.length%16>0&&w.update(s.subarray(d.length%16));var y=new Uint8Array(8);p&&i.writeUint64LE(p.length,y),w.update(y),i.writeUint64LE(d.length,y),w.update(y);for(var E=w.digest(),C=0;C<E.length;C++)c[C]=E[C];w.clean(),r.wipe(E),r.wipe(y)},l}();t.ChaCha20Poly1305=a})(aw);var $6={},wu={},lw={};Object.defineProperty(lw,"__esModule",{value:!0});function Ok(t){return typeof t.saveState<"u"&&typeof t.restoreState<"u"&&typeof t.cleanSavedState<"u"}lw.isSerializableHash=Ok;Object.defineProperty(wu,"__esModule",{value:!0});var Sr=lw,Dk=mo,kk=Er,O6=function(){function t(e,n){this._finished=!1,this._inner=new e,this._outer=new e,this.blockSize=this._outer.blockSize,this.digestLength=this._outer.digestLength;var r=new Uint8Array(this.blockSize);n.length>this.blockSize?this._inner.update(n).finish(r).clean():r.set(n);for(var i=0;i<r.length;i++)r[i]^=54;this._inner.update(r);for(var i=0;i<r.length;i++)r[i]^=106;this._outer.update(r),Sr.isSerializableHash(this._inner)&&Sr.isSerializableHash(this._outer)&&(this._innerKeyedState=this._inner.saveState(),this._outerKeyedState=this._outer.saveState()),kk.wipe(r)}return t.prototype.reset=function(){if(!Sr.isSerializableHash(this._inner)||!Sr.isSerializableHash(this._outer))throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");return this._inner.restoreState(this._innerKeyedState),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},t.prototype.clean=function(){Sr.isSerializableHash(this._inner)&&this._inner.cleanSavedState(this._innerKeyedState),Sr.isSerializableHash(this._outer)&&this._outer.cleanSavedState(this._outerKeyedState),this._inner.clean(),this._outer.clean()},t.prototype.update=function(e){return this._inner.update(e),this},t.prototype.finish=function(e){return this._finished?(this._outer.finish(e),this):(this._inner.finish(e),this._outer.update(e.subarray(0,this.digestLength)).finish(e),this._finished=!0,this)},t.prototype.digest=function(){var e=new Uint8Array(this.digestLength);return this.finish(e),e},t.prototype.saveState=function(){if(!Sr.isSerializableHash(this._inner))throw new Error("hmac: can't saveState() because hash doesn't implement it");return this._inner.saveState()},t.prototype.restoreState=function(e){if(!Sr.isSerializableHash(this._inner)||!Sr.isSerializableHash(this._outer))throw new Error("hmac: can't restoreState() because hash doesn't implement it");return this._inner.restoreState(e),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},t.prototype.cleanSavedState=function(e){if(!Sr.isSerializableHash(this._inner))throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");this._inner.cleanSavedState(e)},t}();wu.HMAC=O6;function Rk(t,e,n){var r=new O6(t,e);r.update(n);var i=r.digest();return r.clean(),i}wu.hmac=Rk;wu.equal=Dk.equal;Object.defineProperty($6,"__esModule",{value:!0});var e2=wu,t2=Er,Nk=function(){function t(e,n,r,i){r===void 0&&(r=new Uint8Array(0)),this._counter=new Uint8Array(1),this._hash=e,this._info=i;var o=e2.hmac(this._hash,r,n);this._hmac=new e2.HMAC(e,o),this._buffer=new Uint8Array(this._hmac.digestLength),this._bufpos=this._buffer.length}return t.prototype._fillBuffer=function(){this._counter[0]++;var e=this._counter[0];if(e===0)throw new Error("hkdf: cannot expand more");this._hmac.reset(),e>1&&this._hmac.update(this._buffer),this._info&&this._hmac.update(this._info),this._hmac.update(this._counter),this._hmac.finish(this._buffer),this._bufpos=0},t.prototype.expand=function(e){for(var n=new Uint8Array(e),r=0;r<n.length;r++)this._bufpos===this._buffer.length&&this._fillBuffer(),n[r]=this._buffer[this._bufpos++];return n},t.prototype.clean=function(){this._hmac.clean(),t2.wipe(this._buffer),t2.wipe(this._counter),this._bufpos=0},t}(),Mk=$6.HKDF=Nk,zh={},Hh={},Vh={};Object.defineProperty(Vh,"__esModule",{value:!0});Vh.BrowserRandomSource=void 0;const n2=65536;class Uk{constructor(){this.isAvailable=!1,this.isInstantiated=!1;const e=typeof self<"u"?self.crypto||self.msCrypto:null;e&&e.getRandomValues!==void 0&&(this._crypto=e,this.isAvailable=!0,this.isInstantiated=!0)}randomBytes(e){if(!this.isAvailable||!this._crypto)throw new Error("Browser random byte generator is not available.");const n=new Uint8Array(e);for(let r=0;r<n.length;r+=n2)this._crypto.getRandomValues(n.subarray(r,r+Math.min(n.length-r,n2)));return n}}Vh.BrowserRandomSource=Uk;function Lk(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var qh={};const Bk={},jk=Object.freeze(Object.defineProperty({__proto__:null,default:Bk},Symbol.toStringTag,{value:"Module"})),Fk=R2(jk);Object.defineProperty(qh,"__esModule",{value:!0});qh.NodeRandomSource=void 0;const Wk=Er;class zk{constructor(){if(this.isAvailable=!1,this.isInstantiated=!1,typeof Lk<"u"){const e=Fk;e&&e.randomBytes&&(this._crypto=e,this.isAvailable=!0,this.isInstantiated=!0)}}randomBytes(e){if(!this.isAvailable||!this._crypto)throw new Error("Node.js random byte generator is not available.");let n=this._crypto.randomBytes(e);if(n.length!==e)throw new Error("NodeRandomSource: got fewer bytes than requested");const r=new Uint8Array(e);for(let i=0;i<r.length;i++)r[i]=n[i];return(0,Wk.wipe)(n),r}}qh.NodeRandomSource=zk;Object.defineProperty(Hh,"__esModule",{value:!0});Hh.SystemRandomSource=void 0;const Hk=Vh,Vk=qh;class qk{constructor(){if(this.isAvailable=!1,this.name="",this._source=new Hk.BrowserRandomSource,this._source.isAvailable){this.isAvailable=!0,this.name="Browser";return}if(this._source=new Vk.NodeRandomSource,this._source.isAvailable){this.isAvailable=!0,this.name="Node";return}}randomBytes(e){if(!this.isAvailable)throw new Error("System random byte generator is not available.");return this._source.randomBytes(e)}}Hh.SystemRandomSource=qk;(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.randomStringForEntropy=t.randomString=t.randomUint32=t.randomBytes=t.defaultRandomSource=void 0;const e=Hh,n=Pe,r=Er;t.defaultRandomSource=new e.SystemRandomSource;function i(c,u=t.defaultRandomSource){return u.randomBytes(c)}t.randomBytes=i;function o(c=t.defaultRandomSource){const u=i(4,c),d=(0,n.readUint32LE)(u);return(0,r.wipe)(u),d}t.randomUint32=o;const s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";function a(c,u=s,d=t.defaultRandomSource){if(u.length<2)throw new Error("randomString charset is too short");if(u.length>256)throw new Error("randomString charset is too long");let p="";const w=u.length,y=256-256%w;for(;c>0;){const E=i(Math.ceil(c*256/y),d);for(let C=0;C<E.length&&c>0;C++){const b=E[C];b<y&&(p+=u.charAt(b%w),c--)}(0,r.wipe)(E)}return p}t.randomString=a;function l(c,u=s,d=t.defaultRandomSource){const p=Math.ceil(c/(Math.log(u.length)/Math.LN2));return a(p,u,d)}t.randomStringForEntropy=l})(zh);var Zh={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e=Pe,n=Er;t.DIGEST_LENGTH=32,t.BLOCK_SIZE=64;var r=function(){function a(){this.digestLength=t.DIGEST_LENGTH,this.blockSize=t.BLOCK_SIZE,this._state=new Int32Array(8),this._temp=new Int32Array(64),this._buffer=new Uint8Array(128),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this.reset()}return a.prototype._initState=function(){this._state[0]=1779033703,this._state[1]=3144134277,this._state[2]=1013904242,this._state[3]=2773480762,this._state[4]=1359893119,this._state[5]=2600822924,this._state[6]=528734635,this._state[7]=1541459225},a.prototype.reset=function(){return this._initState(),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this},a.prototype.clean=function(){n.wipe(this._buffer),n.wipe(this._temp),this.reset()},a.prototype.update=function(l,c){if(c===void 0&&(c=l.length),this._finished)throw new Error("SHA256: can't update because hash was finished.");var u=0;if(this._bytesHashed+=c,this._bufferLength>0){for(;this._bufferLength<this.blockSize&&c>0;)this._buffer[this._bufferLength++]=l[u++],c--;this._bufferLength===this.blockSize&&(o(this._temp,this._state,this._buffer,0,this.blockSize),this._bufferLength=0)}for(c>=this.blockSize&&(u=o(this._temp,this._state,l,u,c),c%=this.blockSize);c>0;)this._buffer[this._bufferLength++]=l[u++],c--;return this},a.prototype.finish=function(l){if(!this._finished){var c=this._bytesHashed,u=this._bufferLength,d=c/536870912|0,p=c<<3,w=c%64<56?64:128;this._buffer[u]=128;for(var y=u+1;y<w-8;y++)this._buffer[y]=0;e.writeUint32BE(d,this._buffer,w-8),e.writeUint32BE(p,this._buffer,w-4),o(this._temp,this._state,this._buffer,0,w),this._finished=!0}for(var y=0;y<this.digestLength/4;y++)e.writeUint32BE(this._state[y],l,y*4);return this},a.prototype.digest=function(){var l=new Uint8Array(this.digestLength);return this.finish(l),l},a.prototype.saveState=function(){if(this._finished)throw new Error("SHA256: cannot save finished state");return{state:new Int32Array(this._state),buffer:this._bufferLength>0?new Uint8Array(this._buffer):void 0,bufferLength:this._bufferLength,bytesHashed:this._bytesHashed}},a.prototype.restoreState=function(l){return this._state.set(l.state),this._bufferLength=l.bufferLength,l.buffer&&this._buffer.set(l.buffer),this._bytesHashed=l.bytesHashed,this._finished=!1,this},a.prototype.cleanSavedState=function(l){n.wipe(l.state),l.buffer&&n.wipe(l.buffer),l.bufferLength=0,l.bytesHashed=0},a}();t.SHA256=r;var i=new Int32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);function o(a,l,c,u,d){for(;d>=64;){for(var p=l[0],w=l[1],y=l[2],E=l[3],C=l[4],b=l[5],m=l[6],v=l[7],x=0;x<16;x++){var _=u+x*4;a[x]=e.readUint32BE(c,_)}for(var x=16;x<64;x++){var S=a[x-2],f=(S>>>17|S<<32-17)^(S>>>19|S<<32-19)^S>>>10;S=a[x-15];var A=(S>>>7|S<<32-7)^(S>>>18|S<<32-18)^S>>>3;a[x]=(f+a[x-7]|0)+(A+a[x-16]|0)}for(var x=0;x<64;x++){var f=(((C>>>6|C<<26)^(C>>>11|C<<21)^(C>>>25|C<<7))+(C&b^~C&m)|0)+(v+(i[x]+a[x]|0)|0)|0,A=((p>>>2|p<<32-2)^(p>>>13|p<<32-13)^(p>>>22|p<<32-22))+(p&w^p&y^w&y)|0;v=m,m=b,b=C,C=E+f|0,E=y,y=w,w=p,p=f+A|0}l[0]+=p,l[1]+=w,l[2]+=y,l[3]+=E,l[4]+=C,l[5]+=b,l[6]+=m,l[7]+=v,u+=64,d-=64}return u}function s(a){var l=new r;l.update(a);var c=l.digest();return l.clean(),c}t.hash=s})(Zh);var cw={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.sharedKey=t.generateKeyPair=t.generateKeyPairFromSeed=t.scalarMultBase=t.scalarMult=t.SHARED_KEY_LENGTH=t.SECRET_KEY_LENGTH=t.PUBLIC_KEY_LENGTH=void 0;const e=zh,n=Er;t.PUBLIC_KEY_LENGTH=32,t.SECRET_KEY_LENGTH=32,t.SHARED_KEY_LENGTH=32;function r(x){const _=new Float64Array(16);if(x)for(let S=0;S<x.length;S++)_[S]=x[S];return _}const i=new Uint8Array(32);i[0]=9;const o=r([56129,1]);function s(x){let _=1;for(let S=0;S<16;S++){let f=x[S]+_+65535;_=Math.floor(f/65536),x[S]=f-_*65536}x[0]+=_-1+37*(_-1)}function a(x,_,S){const f=~(S-1);for(let A=0;A<16;A++){const R=f&(x[A]^_[A]);x[A]^=R,_[A]^=R}}function l(x,_){const S=r(),f=r();for(let A=0;A<16;A++)f[A]=_[A];s(f),s(f),s(f);for(let A=0;A<2;A++){S[0]=f[0]-65517;for(let D=1;D<15;D++)S[D]=f[D]-65535-(S[D-1]>>16&1),S[D-1]&=65535;S[15]=f[15]-32767-(S[14]>>16&1);const R=S[15]>>16&1;S[14]&=65535,a(f,S,1-R)}for(let A=0;A<16;A++)x[2*A]=f[A]&255,x[2*A+1]=f[A]>>8}function c(x,_){for(let S=0;S<16;S++)x[S]=_[2*S]+(_[2*S+1]<<8);x[15]&=32767}function u(x,_,S){for(let f=0;f<16;f++)x[f]=_[f]+S[f]}function d(x,_,S){for(let f=0;f<16;f++)x[f]=_[f]-S[f]}function p(x,_,S){let f,A,R=0,D=0,M=0,ee=0,ne=0,H=0,F=0,B=0,j=0,k=0,W=0,z=0,G=0,J=0,Y=0,oe=0,fe=0,pe=0,ye=0,_e=0,Ie=0,ve=0,ke=0,Le=0,Me=0,xn=0,vi=0,go=0,bi=0,Va=0,Eu=0,Ct=S[0],mt=S[1],Ve=S[2],vt=S[3],It=S[4],Xe=S[5],$t=S[6],T=S[7],h=S[8],g=S[9],P=S[10],O=S[11],N=S[12],L=S[13],ue=S[14],De=S[15];f=_[0],R+=f*Ct,D+=f*mt,M+=f*Ve,ee+=f*vt,ne+=f*It,H+=f*Xe,F+=f*$t,B+=f*T,j+=f*h,k+=f*g,W+=f*P,z+=f*O,G+=f*N,J+=f*L,Y+=f*ue,oe+=f*De,f=_[1],D+=f*Ct,M+=f*mt,ee+=f*Ve,ne+=f*vt,H+=f*It,F+=f*Xe,B+=f*$t,j+=f*T,k+=f*h,W+=f*g,z+=f*P,G+=f*O,J+=f*N,Y+=f*L,oe+=f*ue,fe+=f*De,f=_[2],M+=f*Ct,ee+=f*mt,ne+=f*Ve,H+=f*vt,F+=f*It,B+=f*Xe,j+=f*$t,k+=f*T,W+=f*h,z+=f*g,G+=f*P,J+=f*O,Y+=f*N,oe+=f*L,fe+=f*ue,pe+=f*De,f=_[3],ee+=f*Ct,ne+=f*mt,H+=f*Ve,F+=f*vt,B+=f*It,j+=f*Xe,k+=f*$t,W+=f*T,z+=f*h,G+=f*g,J+=f*P,Y+=f*O,oe+=f*N,fe+=f*L,pe+=f*ue,ye+=f*De,f=_[4],ne+=f*Ct,H+=f*mt,F+=f*Ve,B+=f*vt,j+=f*It,k+=f*Xe,W+=f*$t,z+=f*T,G+=f*h,J+=f*g,Y+=f*P,oe+=f*O,fe+=f*N,pe+=f*L,ye+=f*ue,_e+=f*De,f=_[5],H+=f*Ct,F+=f*mt,B+=f*Ve,j+=f*vt,k+=f*It,W+=f*Xe,z+=f*$t,G+=f*T,J+=f*h,Y+=f*g,oe+=f*P,fe+=f*O,pe+=f*N,ye+=f*L,_e+=f*ue,Ie+=f*De,f=_[6],F+=f*Ct,B+=f*mt,j+=f*Ve,k+=f*vt,W+=f*It,z+=f*Xe,G+=f*$t,J+=f*T,Y+=f*h,oe+=f*g,fe+=f*P,pe+=f*O,ye+=f*N,_e+=f*L,Ie+=f*ue,ve+=f*De,f=_[7],B+=f*Ct,j+=f*mt,k+=f*Ve,W+=f*vt,z+=f*It,G+=f*Xe,J+=f*$t,Y+=f*T,oe+=f*h,fe+=f*g,pe+=f*P,ye+=f*O,_e+=f*N,Ie+=f*L,ve+=f*ue,ke+=f*De,f=_[8],j+=f*Ct,k+=f*mt,W+=f*Ve,z+=f*vt,G+=f*It,J+=f*Xe,Y+=f*$t,oe+=f*T,fe+=f*h,pe+=f*g,ye+=f*P,_e+=f*O,Ie+=f*N,ve+=f*L,ke+=f*ue,Le+=f*De,f=_[9],k+=f*Ct,W+=f*mt,z+=f*Ve,G+=f*vt,J+=f*It,Y+=f*Xe,oe+=f*$t,fe+=f*T,pe+=f*h,ye+=f*g,_e+=f*P,Ie+=f*O,ve+=f*N,ke+=f*L,Le+=f*ue,Me+=f*De,f=_[10],W+=f*Ct,z+=f*mt,G+=f*Ve,J+=f*vt,Y+=f*It,oe+=f*Xe,fe+=f*$t,pe+=f*T,ye+=f*h,_e+=f*g,Ie+=f*P,ve+=f*O,ke+=f*N,Le+=f*L,Me+=f*ue,xn+=f*De,f=_[11],z+=f*Ct,G+=f*mt,J+=f*Ve,Y+=f*vt,oe+=f*It,fe+=f*Xe,pe+=f*$t,ye+=f*T,_e+=f*h,Ie+=f*g,ve+=f*P,ke+=f*O,Le+=f*N,Me+=f*L,xn+=f*ue,vi+=f*De,f=_[12],G+=f*Ct,J+=f*mt,Y+=f*Ve,oe+=f*vt,fe+=f*It,pe+=f*Xe,ye+=f*$t,_e+=f*T,Ie+=f*h,ve+=f*g,ke+=f*P,Le+=f*O,Me+=f*N,xn+=f*L,vi+=f*ue,go+=f*De,f=_[13],J+=f*Ct,Y+=f*mt,oe+=f*Ve,fe+=f*vt,pe+=f*It,ye+=f*Xe,_e+=f*$t,Ie+=f*T,ve+=f*h,ke+=f*g,Le+=f*P,Me+=f*O,xn+=f*N,vi+=f*L,go+=f*ue,bi+=f*De,f=_[14],Y+=f*Ct,oe+=f*mt,fe+=f*Ve,pe+=f*vt,ye+=f*It,_e+=f*Xe,Ie+=f*$t,ve+=f*T,ke+=f*h,Le+=f*g,Me+=f*P,xn+=f*O,vi+=f*N,go+=f*L,bi+=f*ue,Va+=f*De,f=_[15],oe+=f*Ct,fe+=f*mt,pe+=f*Ve,ye+=f*vt,_e+=f*It,Ie+=f*Xe,ve+=f*$t,ke+=f*T,Le+=f*h,Me+=f*g,xn+=f*P,vi+=f*O,go+=f*N,bi+=f*L,Va+=f*ue,Eu+=f*De,R+=38*fe,D+=38*pe,M+=38*ye,ee+=38*_e,ne+=38*Ie,H+=38*ve,F+=38*ke,B+=38*Le,j+=38*Me,k+=38*xn,W+=38*vi,z+=38*go,G+=38*bi,J+=38*Va,Y+=38*Eu,A=1,f=R+A+65535,A=Math.floor(f/65536),R=f-A*65536,f=D+A+65535,A=Math.floor(f/65536),D=f-A*65536,f=M+A+65535,A=Math.floor(f/65536),M=f-A*65536,f=ee+A+65535,A=Math.floor(f/65536),ee=f-A*65536,f=ne+A+65535,A=Math.floor(f/65536),ne=f-A*65536,f=H+A+65535,A=Math.floor(f/65536),H=f-A*65536,f=F+A+65535,A=Math.floor(f/65536),F=f-A*65536,f=B+A+65535,A=Math.floor(f/65536),B=f-A*65536,f=j+A+65535,A=Math.floor(f/65536),j=f-A*65536,f=k+A+65535,A=Math.floor(f/65536),k=f-A*65536,f=W+A+65535,A=Math.floor(f/65536),W=f-A*65536,f=z+A+65535,A=Math.floor(f/65536),z=f-A*65536,f=G+A+65535,A=Math.floor(f/65536),G=f-A*65536,f=J+A+65535,A=Math.floor(f/65536),J=f-A*65536,f=Y+A+65535,A=Math.floor(f/65536),Y=f-A*65536,f=oe+A+65535,A=Math.floor(f/65536),oe=f-A*65536,R+=A-1+37*(A-1),A=1,f=R+A+65535,A=Math.floor(f/65536),R=f-A*65536,f=D+A+65535,A=Math.floor(f/65536),D=f-A*65536,f=M+A+65535,A=Math.floor(f/65536),M=f-A*65536,f=ee+A+65535,A=Math.floor(f/65536),ee=f-A*65536,f=ne+A+65535,A=Math.floor(f/65536),ne=f-A*65536,f=H+A+65535,A=Math.floor(f/65536),H=f-A*65536,f=F+A+65535,A=Math.floor(f/65536),F=f-A*65536,f=B+A+65535,A=Math.floor(f/65536),B=f-A*65536,f=j+A+65535,A=Math.floor(f/65536),j=f-A*65536,f=k+A+65535,A=Math.floor(f/65536),k=f-A*65536,f=W+A+65535,A=Math.floor(f/65536),W=f-A*65536,f=z+A+65535,A=Math.floor(f/65536),z=f-A*65536,f=G+A+65535,A=Math.floor(f/65536),G=f-A*65536,f=J+A+65535,A=Math.floor(f/65536),J=f-A*65536,f=Y+A+65535,A=Math.floor(f/65536),Y=f-A*65536,f=oe+A+65535,A=Math.floor(f/65536),oe=f-A*65536,R+=A-1+37*(A-1),x[0]=R,x[1]=D,x[2]=M,x[3]=ee,x[4]=ne,x[5]=H,x[6]=F,x[7]=B,x[8]=j,x[9]=k,x[10]=W,x[11]=z,x[12]=G,x[13]=J,x[14]=Y,x[15]=oe}function w(x,_){p(x,_,_)}function y(x,_){const S=r();for(let f=0;f<16;f++)S[f]=_[f];for(let f=253;f>=0;f--)w(S,S),f!==2&&f!==4&&p(S,S,_);for(let f=0;f<16;f++)x[f]=S[f]}function E(x,_){const S=new Uint8Array(32),f=new Float64Array(80),A=r(),R=r(),D=r(),M=r(),ee=r(),ne=r();for(let j=0;j<31;j++)S[j]=x[j];S[31]=x[31]&127|64,S[0]&=248,c(f,_);for(let j=0;j<16;j++)R[j]=f[j];A[0]=M[0]=1;for(let j=254;j>=0;--j){const k=S[j>>>3]>>>(j&7)&1;a(A,R,k),a(D,M,k),u(ee,A,D),d(A,A,D),u(D,R,M),d(R,R,M),w(M,ee),w(ne,A),p(A,D,A),p(D,R,ee),u(ee,A,D),d(A,A,D),w(R,A),d(D,M,ne),p(A,D,o),u(A,A,M),p(D,D,A),p(A,M,ne),p(M,R,f),w(R,ee),a(A,R,k),a(D,M,k)}for(let j=0;j<16;j++)f[j+16]=A[j],f[j+32]=D[j],f[j+48]=R[j],f[j+64]=M[j];const H=f.subarray(32),F=f.subarray(16);y(H,H),p(F,F,H);const B=new Uint8Array(32);return l(B,F),B}t.scalarMult=E;function C(x){return E(x,i)}t.scalarMultBase=C;function b(x){if(x.length!==t.SECRET_KEY_LENGTH)throw new Error(`x25519: seed must be ${t.SECRET_KEY_LENGTH} bytes`);const _=new Uint8Array(x);return{publicKey:C(_),secretKey:_}}t.generateKeyPairFromSeed=b;function m(x){const _=(0,e.randomBytes)(32,x),S=b(_);return(0,n.wipe)(_),S}t.generateKeyPair=m;function v(x,_,S=!1){if(x.length!==t.PUBLIC_KEY_LENGTH)throw new Error("X25519: incorrect secret key length");if(_.length!==t.PUBLIC_KEY_LENGTH)throw new Error("X25519: incorrect public key length");const f=E(x,_);if(S){let A=0;for(let R=0;R<f.length;R++)A|=f[R];if(A===0)throw new Error("X25519: invalid shared key")}return f}t.sharedKey=v})(cw);function uw(t){return globalThis.Buffer!=null?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):t}function D6(t=0){return globalThis.Buffer!=null&&globalThis.Buffer.allocUnsafe!=null?uw(globalThis.Buffer.allocUnsafe(t)):new Uint8Array(t)}function r2(t,e){e||(e=t.reduce((i,o)=>i+o.length,0));const n=D6(e);let r=0;for(const i of t)n.set(i,r),r+=i.length;return uw(n)}function Zk(t,e){if(t.length>=255)throw new TypeError("Alphabet too long");for(var n=new Uint8Array(256),r=0;r<n.length;r++)n[r]=255;for(var i=0;i<t.length;i++){var o=t.charAt(i),s=o.charCodeAt(0);if(n[s]!==255)throw new TypeError(o+" is ambiguous");n[s]=i}var a=t.length,l=t.charAt(0),c=Math.log(a)/Math.log(256),u=Math.log(256)/Math.log(a);function d(y){if(y instanceof Uint8Array||(ArrayBuffer.isView(y)?y=new Uint8Array(y.buffer,y.byteOffset,y.byteLength):Array.isArray(y)&&(y=Uint8Array.from(y))),!(y instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(y.length===0)return"";for(var E=0,C=0,b=0,m=y.length;b!==m&&y[b]===0;)b++,E++;for(var v=(m-b)*u+1>>>0,x=new Uint8Array(v);b!==m;){for(var _=y[b],S=0,f=v-1;(_!==0||S<C)&&f!==-1;f--,S++)_+=256*x[f]>>>0,x[f]=_%a>>>0,_=_/a>>>0;if(_!==0)throw new Error("Non-zero carry");C=S,b++}for(var A=v-C;A!==v&&x[A]===0;)A++;for(var R=l.repeat(E);A<v;++A)R+=t.charAt(x[A]);return R}function p(y){if(typeof y!="string")throw new TypeError("Expected String");if(y.length===0)return new Uint8Array;var E=0;if(y[E]!==" "){for(var C=0,b=0;y[E]===l;)C++,E++;for(var m=(y.length-E)*c+1>>>0,v=new Uint8Array(m);y[E];){var x=n[y.charCodeAt(E)];if(x===255)return;for(var _=0,S=m-1;(x!==0||_<b)&&S!==-1;S--,_++)x+=a*v[S]>>>0,v[S]=x%256>>>0,x=x/256>>>0;if(x!==0)throw new Error("Non-zero carry");b=_,E++}if(y[E]!==" "){for(var f=m-b;f!==m&&v[f]===0;)f++;for(var A=new Uint8Array(C+(m-f)),R=C;f!==m;)A[R++]=v[f++];return A}}}function w(y){var E=p(y);if(E)return E;throw new Error(`Non-${e} character`)}return{encode:d,decodeUnsafe:p,decode:w}}var Gk=Zk,Kk=Gk;const Yk=t=>{if(t instanceof Uint8Array&&t.constructor.name==="Uint8Array")return t;if(t instanceof ArrayBuffer)return new Uint8Array(t);if(ArrayBuffer.isView(t))return new Uint8Array(t.buffer,t.byteOffset,t.byteLength);throw new Error("Unknown type, must be binary type")},Qk=t=>new TextEncoder().encode(t),Xk=t=>new TextDecoder().decode(t);class Jk{constructor(e,n,r){this.name=e,this.prefix=n,this.baseEncode=r}encode(e){if(e instanceof Uint8Array)return`${this.prefix}${this.baseEncode(e)}`;throw Error("Unknown type, must be binary type")}}class eR{constructor(e,n,r){if(this.name=e,this.prefix=n,n.codePointAt(0)===void 0)throw new Error("Invalid prefix character");this.prefixCodePoint=n.codePointAt(0),this.baseDecode=r}decode(e){if(typeof e=="string"){if(e.codePointAt(0)!==this.prefixCodePoint)throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);return this.baseDecode(e.slice(this.prefix.length))}else throw Error("Can only multibase decode strings")}or(e){return k6(this,e)}}class tR{constructor(e){this.decoders=e}or(e){return k6(this,e)}decode(e){const n=e[0],r=this.decoders[n];if(r)return r.decode(e);throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}}const k6=(t,e)=>new tR({...t.decoders||{[t.prefix]:t},...e.decoders||{[e.prefix]:e}});class nR{constructor(e,n,r,i){this.name=e,this.prefix=n,this.baseEncode=r,this.baseDecode=i,this.encoder=new Jk(e,n,r),this.decoder=new eR(e,n,i)}encode(e){return this.encoder.encode(e)}decode(e){return this.decoder.decode(e)}}const Gh=({name:t,prefix:e,encode:n,decode:r})=>new nR(t,e,n,r),yu=({prefix:t,name:e,alphabet:n})=>{const{encode:r,decode:i}=Kk(n,e);return Gh({prefix:t,name:e,encode:r,decode:o=>Yk(i(o))})},rR=(t,e,n,r)=>{const i={};for(let u=0;u<e.length;++u)i[e[u]]=u;let o=t.length;for(;t[o-1]==="=";)--o;const s=new Uint8Array(o*n/8|0);let a=0,l=0,c=0;for(let u=0;u<o;++u){const d=i[t[u]];if(d===void 0)throw new SyntaxError(`Non-${r} character`);l=l<<n|d,a+=n,a>=8&&(a-=8,s[c++]=255&l>>a)}if(a>=n||255&l<<8-a)throw new SyntaxError("Unexpected end of data");return s},iR=(t,e,n)=>{const r=e[e.length-1]==="=",i=(1<<n)-1;let o="",s=0,a=0;for(let l=0;l<t.length;++l)for(a=a<<8|t[l],s+=8;s>n;)s-=n,o+=e[i&a>>s];if(s&&(o+=e[i&a<<n-s]),r)for(;o.length*n&7;)o+="=";return o},Bt=({name:t,prefix:e,bitsPerChar:n,alphabet:r})=>Gh({prefix:e,name:t,encode(i){return iR(i,r,n)},decode(i){return rR(i,r,n,t)}}),oR=Gh({prefix:"\0",name:"identity",encode:t=>Xk(t),decode:t=>Qk(t)}),sR=Object.freeze(Object.defineProperty({__proto__:null,identity:oR},Symbol.toStringTag,{value:"Module"})),aR=Bt({prefix:"0",name:"base2",alphabet:"01",bitsPerChar:1}),lR=Object.freeze(Object.defineProperty({__proto__:null,base2:aR},Symbol.toStringTag,{value:"Module"})),cR=Bt({prefix:"7",name:"base8",alphabet:"01234567",bitsPerChar:3}),uR=Object.freeze(Object.defineProperty({__proto__:null,base8:cR},Symbol.toStringTag,{value:"Module"})),dR=yu({prefix:"9",name:"base10",alphabet:"0123456789"}),fR=Object.freeze(Object.defineProperty({__proto__:null,base10:dR},Symbol.toStringTag,{value:"Module"})),hR=Bt({prefix:"f",name:"base16",alphabet:"0123456789abcdef",bitsPerChar:4}),pR=Bt({prefix:"F",name:"base16upper",alphabet:"0123456789ABCDEF",bitsPerChar:4}),mR=Object.freeze(Object.defineProperty({__proto__:null,base16:hR,base16upper:pR},Symbol.toStringTag,{value:"Module"})),gR=Bt({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}),wR=Bt({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),yR=Bt({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),vR=Bt({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),bR=Bt({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),xR=Bt({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),ER=Bt({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),_R=Bt({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),CR=Bt({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5}),SR=Object.freeze(Object.defineProperty({__proto__:null,base32:gR,base32hex:bR,base32hexpad:ER,base32hexpadupper:_R,base32hexupper:xR,base32pad:yR,base32padupper:vR,base32upper:wR,base32z:CR},Symbol.toStringTag,{value:"Module"})),TR=yu({prefix:"k",name:"base36",alphabet:"0123456789abcdefghijklmnopqrstuvwxyz"}),AR=yu({prefix:"K",name:"base36upper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"}),PR=Object.freeze(Object.defineProperty({__proto__:null,base36:TR,base36upper:AR},Symbol.toStringTag,{value:"Module"})),IR=yu({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),$R=yu({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"}),OR=Object.freeze(Object.defineProperty({__proto__:null,base58btc:IR,base58flickr:$R},Symbol.toStringTag,{value:"Module"})),DR=Bt({prefix:"m",name:"base64",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bitsPerChar:6}),kR=Bt({prefix:"M",name:"base64pad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bitsPerChar:6}),RR=Bt({prefix:"u",name:"base64url",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bitsPerChar:6}),NR=Bt({prefix:"U",name:"base64urlpad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",bitsPerChar:6}),MR=Object.freeze(Object.defineProperty({__proto__:null,base64:DR,base64pad:kR,base64url:RR,base64urlpad:NR},Symbol.toStringTag,{value:"Module"})),R6=Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"),UR=R6.reduce((t,e,n)=>(t[n]=e,t),[]),LR=R6.reduce((t,e,n)=>(t[e.codePointAt(0)]=n,t),[]);function BR(t){return t.reduce((e,n)=>(e+=UR[n],e),"")}function jR(t){const e=[];for(const n of t){const r=LR[n.codePointAt(0)];if(r===void 0)throw new Error(`Non-base256emoji character: ${n}`);e.push(r)}return new Uint8Array(e)}const FR=Gh({prefix:"🚀",name:"base256emoji",encode:BR,decode:jR}),WR=Object.freeze(Object.defineProperty({__proto__:null,base256emoji:FR},Symbol.toStringTag,{value:"Module"}));new TextEncoder;new TextDecoder;const i2={...sR,...lR,...uR,...fR,...mR,...SR,...PR,...OR,...MR,...WR};function N6(t,e,n,r){return{name:t,prefix:e,encoder:{name:t,prefix:e,encode:n},decoder:{decode:r}}}const o2=N6("utf8","u",t=>"u"+new TextDecoder("utf8").decode(t),t=>new TextEncoder().encode(t.substring(1))),J0=N6("ascii","a",t=>{let e="a";for(let n=0;n<t.length;n++)e+=String.fromCharCode(t[n]);return e},t=>{t=t.substring(1);const e=D6(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}),M6={utf8:o2,"utf-8":o2,hex:i2.base16,latin1:J0,ascii:J0,binary:J0,...i2};function sr(t,e="utf8"){const n=M6[e];if(!n)throw new Error(`Unsupported encoding "${e}"`);return(e==="utf8"||e==="utf-8")&&globalThis.Buffer!=null&&globalThis.Buffer.from!=null?uw(globalThis.Buffer.from(t,"utf-8")):n.decoder.decode(`${n.prefix}${t}`)}function yr(t,e="utf8"){const n=M6[e];if(!n)throw new Error(`Unsupported encoding "${e}"`);return(e==="utf8"||e==="utf-8")&&globalThis.Buffer!=null&&globalThis.Buffer.from!=null?globalThis.Buffer.from(t.buffer,t.byteOffset,t.byteLength).toString("utf8"):n.encoder.encode(t).substring(1)}var s2=globalThis&&globalThis.__spreadArray||function(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,o;r<i;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))},zR=function(){function t(e,n,r){this.name=e,this.version=n,this.os=r,this.type="browser"}return t}(),HR=function(){function t(e){this.version=e,this.type="node",this.name="node",this.os=process.platform}return t}(),VR=function(){function t(e,n,r,i){this.name=e,this.version=n,this.os=r,this.bot=i,this.type="bot-device"}return t}(),qR=function(){function t(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null}return t}(),ZR=function(){function t(){this.type="react-native",this.name="react-native",this.version=null,this.os=null}return t}(),GR=/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,KR=/(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,a2=3,YR=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["pie",/^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],["pie",/^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],["netfront",/^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FB[AS]V\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["curl",/^curl\/([0-9\.]+)$/],["searchbot",GR]],l2=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Windows CE",/Windows CE|WinCE|Microsoft Pocket Internet Explorer/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function QR(t){return t?c2(t):typeof document>"u"&&typeof navigator<"u"&&navigator.product==="ReactNative"?new ZR:typeof navigator<"u"?c2(navigator.userAgent):eN()}function XR(t){return t!==""&&YR.reduce(function(e,n){var r=n[0],i=n[1];if(e)return e;var o=i.exec(t);return!!o&&[r,o]},!1)}function c2(t){var e=XR(t);if(!e)return null;var n=e[0],r=e[1];if(n==="searchbot")return new qR;var i=r[1]&&r[1].split(".").join("_").split("_").slice(0,3);i?i.length<a2&&(i=s2(s2([],i,!0),tN(a2-i.length),!0)):i=[];var o=i.join("."),s=JR(t),a=KR.exec(t);return a&&a[1]?new VR(n,o,s,a[1]):new zR(n,o,s)}function JR(t){for(var e=0,n=l2.length;e<n;e++){var r=l2[e],i=r[0],o=r[1],s=o.exec(t);if(s)return i}return null}function eN(){var t=typeof process<"u"&&process.version;return t?new HR(process.version.slice(1)):null}function tN(t){for(var e=[],n=0;n<t;n++)e.push("0");return e}var No={};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Q1=function(t,e){return Q1=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)r.hasOwnProperty(i)&&(n[i]=r[i])},Q1(t,e)};function nN(t,e){Q1(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}var X1=function(){return X1=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},X1.apply(this,arguments)};function rN(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function iN(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o}function oN(t,e){return function(n,r){e(n,r,t)}}function sN(t,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,e)}function aN(t,e,n,r){function i(o){return o instanceof n?o:new n(function(s){s(o)})}return new(n||(n=Promise))(function(o,s){function a(u){try{c(r.next(u))}catch(d){s(d)}}function l(u){try{c(r.throw(u))}catch(d){s(d)}}function c(u){u.done?o(u.value):i(u.value).then(a,l)}c((r=r.apply(t,e||[])).next())})}function lN(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(c){return function(u){return l([c,u])}}function l(c){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(o=c[0]&2?i.return:c[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,c[1])).done)return o;switch(i=0,o&&(c=[c[0]&2,o.value]),c[0]){case 0:case 1:o=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,i=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!o||c[1]>o[0]&&c[1]<o[3])){n.label=c[1];break}if(c[0]===6&&n.label<o[1]){n.label=o[1],o=c;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(c);break}o[2]&&n.ops.pop(),n.trys.pop();continue}c=e.call(t,n)}catch(u){c=[6,u],i=0}finally{r=o=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function cN(t,e,n,r){r===void 0&&(r=n),t[r]=e[n]}function uN(t,e){for(var n in t)n!=="default"&&!e.hasOwnProperty(n)&&(e[n]=t[n])}function J1(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function U6(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),i,o=[],s;try{for(;(e===void 0||e-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(a){s={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(s)throw s.error}}return o}function dN(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(U6(arguments[e]));return t}function fN(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;for(var r=Array(t),i=0,e=0;e<n;e++)for(var o=arguments[e],s=0,a=o.length;s<a;s++,i++)r[i]=o[s];return r}function Wc(t){return this instanceof Wc?(this.v=t,this):new Wc(t)}function hN(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(t,e||[]),i,o=[];return i={},s("next"),s("throw"),s("return"),i[Symbol.asyncIterator]=function(){return this},i;function s(p){r[p]&&(i[p]=function(w){return new Promise(function(y,E){o.push([p,w,y,E])>1||a(p,w)})})}function a(p,w){try{l(r[p](w))}catch(y){d(o[0][3],y)}}function l(p){p.value instanceof Wc?Promise.resolve(p.value.v).then(c,u):d(o[0][2],p)}function c(p){a("next",p)}function u(p){a("throw",p)}function d(p,w){p(w),o.shift(),o.length&&a(o[0][0],o[0][1])}}function pN(t){var e,n;return e={},r("next"),r("throw",function(i){throw i}),r("return"),e[Symbol.iterator]=function(){return this},e;function r(i,o){e[i]=t[i]?function(s){return(n=!n)?{value:Wc(t[i](s)),done:i==="return"}:o?o(s):s}:o}}function mN(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator],n;return e?e.call(t):(t=typeof J1=="function"?J1(t):t[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(o){n[o]=t[o]&&function(s){return new Promise(function(a,l){s=t[o](s),i(a,l,s.done,s.value)})}}function i(o,s,a,l){Promise.resolve(l).then(function(c){o({value:c,done:a})},s)}}function gN(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}function wN(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function yN(t){return t&&t.__esModule?t:{default:t}}function vN(t,e){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return e.get(t)}function bN(t,e,n){if(!e.has(t))throw new TypeError("attempted to set private field on non-instance");return e.set(t,n),n}const xN=Object.freeze(Object.defineProperty({__proto__:null,get __assign(){return X1},__asyncDelegator:pN,__asyncGenerator:hN,__asyncValues:mN,__await:Wc,__awaiter:aN,__classPrivateFieldGet:vN,__classPrivateFieldSet:bN,__createBinding:cN,__decorate:iN,__exportStar:uN,__extends:nN,__generator:lN,__importDefault:yN,__importStar:wN,__makeTemplateObject:gN,__metadata:sN,__param:oN,__read:U6,__rest:rN,__spread:dN,__spreadArrays:fN,__values:J1},Symbol.toStringTag,{value:"Module"})),Kh=R2(xN);var ep={},ol={},u2;function EN(){if(u2)return ol;u2=1,Object.defineProperty(ol,"__esModule",{value:!0}),ol.delay=void 0;function t(e){return new Promise(n=>{setTimeout(()=>{n(!0)},e)})}return ol.delay=t,ol}var Eo={},tp={},_o={},d2;function _N(){return d2||(d2=1,Object.defineProperty(_o,"__esModule",{value:!0}),_o.ONE_THOUSAND=_o.ONE_HUNDRED=void 0,_o.ONE_HUNDRED=100,_o.ONE_THOUSAND=1e3),_o}var np={},f2;function CN(){return f2||(f2=1,function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.ONE_YEAR=t.FOUR_WEEKS=t.THREE_WEEKS=t.TWO_WEEKS=t.ONE_WEEK=t.THIRTY_DAYS=t.SEVEN_DAYS=t.FIVE_DAYS=t.THREE_DAYS=t.ONE_DAY=t.TWENTY_FOUR_HOURS=t.TWELVE_HOURS=t.SIX_HOURS=t.THREE_HOURS=t.ONE_HOUR=t.SIXTY_MINUTES=t.THIRTY_MINUTES=t.TEN_MINUTES=t.FIVE_MINUTES=t.ONE_MINUTE=t.SIXTY_SECONDS=t.THIRTY_SECONDS=t.TEN_SECONDS=t.FIVE_SECONDS=t.ONE_SECOND=void 0,t.ONE_SECOND=1,t.FIVE_SECONDS=5,t.TEN_SECONDS=10,t.THIRTY_SECONDS=30,t.SIXTY_SECONDS=60,t.ONE_MINUTE=t.SIXTY_SECONDS,t.FIVE_MINUTES=t.ONE_MINUTE*5,t.TEN_MINUTES=t.ONE_MINUTE*10,t.THIRTY_MINUTES=t.ONE_MINUTE*30,t.SIXTY_MINUTES=t.ONE_MINUTE*60,t.ONE_HOUR=t.SIXTY_MINUTES,t.THREE_HOURS=t.ONE_HOUR*3,t.SIX_HOURS=t.ONE_HOUR*6,t.TWELVE_HOURS=t.ONE_HOUR*12,t.TWENTY_FOUR_HOURS=t.ONE_HOUR*24,t.ONE_DAY=t.TWENTY_FOUR_HOURS,t.THREE_DAYS=t.ONE_DAY*3,t.FIVE_DAYS=t.ONE_DAY*5,t.SEVEN_DAYS=t.ONE_DAY*7,t.THIRTY_DAYS=t.ONE_DAY*30,t.ONE_WEEK=t.SEVEN_DAYS,t.TWO_WEEKS=t.ONE_WEEK*2,t.THREE_WEEKS=t.ONE_WEEK*3,t.FOUR_WEEKS=t.ONE_WEEK*4,t.ONE_YEAR=t.ONE_DAY*365}(np)),np}var h2;function L6(){return h2||(h2=1,function(t){Object.defineProperty(t,"__esModule",{value:!0});const e=Kh;e.__exportStar(_N(),t),e.__exportStar(CN(),t)}(tp)),tp}var p2;function SN(){if(p2)return Eo;p2=1,Object.defineProperty(Eo,"__esModule",{value:!0}),Eo.fromMiliseconds=Eo.toMiliseconds=void 0;const t=L6();function e(r){return r*t.ONE_THOUSAND}Eo.toMiliseconds=e;function n(r){return Math.floor(r/t.ONE_THOUSAND)}return Eo.fromMiliseconds=n,Eo}var m2;function TN(){return m2||(m2=1,function(t){Object.defineProperty(t,"__esModule",{value:!0});const e=Kh;e.__exportStar(EN(),t),e.__exportStar(SN(),t)}(ep)),ep}var ys={},g2;function AN(){if(g2)return ys;g2=1,Object.defineProperty(ys,"__esModule",{value:!0}),ys.Watch=void 0;class t{constructor(){this.timestamps=new Map}start(n){if(this.timestamps.has(n))throw new Error(`Watch already started for label: ${n}`);this.timestamps.set(n,{started:Date.now()})}stop(n){const r=this.get(n);if(typeof r.elapsed<"u")throw new Error(`Watch already stopped for label: ${n}`);const i=Date.now()-r.started;this.timestamps.set(n,{started:r.started,elapsed:i})}get(n){const r=this.timestamps.get(n);if(typeof r>"u")throw new Error(`No timestamp found for label: ${n}`);return r}elapsed(n){const r=this.get(n);return r.elapsed||Date.now()-r.started}}return ys.Watch=t,ys.default=t,ys}var rp={},sl={},w2;function PN(){if(w2)return sl;w2=1,Object.defineProperty(sl,"__esModule",{value:!0}),sl.IWatch=void 0;class t{}return sl.IWatch=t,sl}var y2;function IN(){return y2||(y2=1,function(t){Object.defineProperty(t,"__esModule",{value:!0}),Kh.__exportStar(PN(),t)}(rp)),rp}(function(t){Object.defineProperty(t,"__esModule",{value:!0});const e=Kh;e.__exportStar(TN(),t),e.__exportStar(AN(),t),e.__exportStar(IN(),t),e.__exportStar(L6(),t)})(No);var Ye={};Object.defineProperty(Ye,"__esModule",{value:!0});Ye.getLocalStorage=Ye.getLocalStorageOrThrow=Ye.getCrypto=Ye.getCryptoOrThrow=B6=Ye.getLocation=Ye.getLocationOrThrow=fw=Ye.getNavigator=Ye.getNavigatorOrThrow=dw=Ye.getDocument=Ye.getDocumentOrThrow=Ye.getFromWindowOrThrow=Ye.getFromWindow=void 0;function hs(t){let e;return typeof window<"u"&&typeof window[t]<"u"&&(e=window[t]),e}Ye.getFromWindow=hs;function za(t){const e=hs(t);if(!e)throw new Error(`${t} is not defined in Window`);return e}Ye.getFromWindowOrThrow=za;function $N(){return za("document")}Ye.getDocumentOrThrow=$N;function ON(){return hs("document")}var dw=Ye.getDocument=ON;function DN(){return za("navigator")}Ye.getNavigatorOrThrow=DN;function kN(){return hs("navigator")}var fw=Ye.getNavigator=kN;function RN(){return za("location")}Ye.getLocationOrThrow=RN;function NN(){return hs("location")}var B6=Ye.getLocation=NN;function MN(){return za("crypto")}Ye.getCryptoOrThrow=MN;function UN(){return hs("crypto")}Ye.getCrypto=UN;function LN(){return za("localStorage")}Ye.getLocalStorageOrThrow=LN;function BN(){return hs("localStorage")}Ye.getLocalStorage=BN;var hw={};Object.defineProperty(hw,"__esModule",{value:!0});var j6=hw.getWindowMetadata=void 0;const v2=Ye;function jN(){let t,e;try{t=v2.getDocumentOrThrow(),e=v2.getLocationOrThrow()}catch{return null}function n(){const d=t.getElementsByTagName("link"),p=[];for(let w=0;w<d.length;w++){const y=d[w],E=y.getAttribute("rel");if(E&&E.toLowerCase().indexOf("icon")>-1){const C=y.getAttribute("href");if(C)if(C.toLowerCase().indexOf("https:")===-1&&C.toLowerCase().indexOf("http:")===-1&&C.indexOf("//")!==0){let b=e.protocol+"//"+e.host;if(C.indexOf("/")===0)b+=C;else{const m=e.pathname.split("/");m.pop();const v=m.join("/");b+=v+"/"+C}p.push(b)}else if(C.indexOf("//")===0){const b=e.protocol+C;p.push(b)}else p.push(C)}}return p}function r(...d){const p=t.getElementsByTagName("meta");for(let w=0;w<p.length;w++){const y=p[w],E=["itemprop","property","name"].map(C=>y.getAttribute(C)).filter(C=>C?d.includes(C):!1);if(E.length&&E){const C=y.getAttribute("content");if(C)return C}}return""}function i(){let d=r("name","og:site_name","og:title","twitter:title");return d||(d=t.title),d}function o(){return r("description","og:description","twitter:description","keywords")}const s=i(),a=o(),l=e.origin,c=n();return{description:a,url:l,icons:c,name:s}}j6=hw.getWindowMetadata=jN;var zc={},FN=t=>encodeURIComponent(t).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`),F6="%[a-f0-9]{2}",b2=new RegExp("("+F6+")|([^%]+?)","gi"),x2=new RegExp("("+F6+")+","gi");function em(t,e){try{return[decodeURIComponent(t.join(""))]}catch{}if(t.length===1)return t;e=e||1;var n=t.slice(0,e),r=t.slice(e);return Array.prototype.concat.call([],em(n),em(r))}function WN(t){try{return decodeURIComponent(t)}catch{for(var e=t.match(b2)||[],n=1;n<e.length;n++)t=em(e,n).join(""),e=t.match(b2)||[];return t}}function zN(t){for(var e={"%FE%FF":"��","%FF%FE":"��"},n=x2.exec(t);n;){try{e[n[0]]=decodeURIComponent(n[0])}catch{var r=WN(n[0]);r!==n[0]&&(e[n[0]]=r)}n=x2.exec(t)}e["%C2"]="�";for(var i=Object.keys(e),o=0;o<i.length;o++){var s=i[o];t=t.replace(new RegExp(s,"g"),e[s])}return t}var HN=function(t){if(typeof t!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch{return zN(t)}},VN=(t,e)=>{if(!(typeof t=="string"&&typeof e=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(e==="")return[t];const n=t.indexOf(e);return n===-1?[t]:[t.slice(0,n),t.slice(n+e.length)]},qN=function(t,e){for(var n={},r=Object.keys(t),i=Array.isArray(e),o=0;o<r.length;o++){var s=r[o],a=t[s];(i?e.indexOf(s)!==-1:e(s,a,t))&&(n[s]=a)}return n};(function(t){const e=FN,n=HN,r=VN,i=qN,o=m=>m==null,s=Symbol("encodeFragmentIdentifier");function a(m){switch(m.arrayFormat){case"index":return v=>(x,_)=>{const S=x.length;return _===void 0||m.skipNull&&_===null||m.skipEmptyString&&_===""?x:_===null?[...x,[u(v,m),"[",S,"]"].join("")]:[...x,[u(v,m),"[",u(S,m),"]=",u(_,m)].join("")]};case"bracket":return v=>(x,_)=>_===void 0||m.skipNull&&_===null||m.skipEmptyString&&_===""?x:_===null?[...x,[u(v,m),"[]"].join("")]:[...x,[u(v,m),"[]=",u(_,m)].join("")];case"colon-list-separator":return v=>(x,_)=>_===void 0||m.skipNull&&_===null||m.skipEmptyString&&_===""?x:_===null?[...x,[u(v,m),":list="].join("")]:[...x,[u(v,m),":list=",u(_,m)].join("")];case"comma":case"separator":case"bracket-separator":{const v=m.arrayFormat==="bracket-separator"?"[]=":"=";return x=>(_,S)=>S===void 0||m.skipNull&&S===null||m.skipEmptyString&&S===""?_:(S=S===null?"":S,_.length===0?[[u(x,m),v,u(S,m)].join("")]:[[_,u(S,m)].join(m.arrayFormatSeparator)])}default:return v=>(x,_)=>_===void 0||m.skipNull&&_===null||m.skipEmptyString&&_===""?x:_===null?[...x,u(v,m)]:[...x,[u(v,m),"=",u(_,m)].join("")]}}function l(m){let v;switch(m.arrayFormat){case"index":return(x,_,S)=>{if(v=/\[(\d*)\]$/.exec(x),x=x.replace(/\[\d*\]$/,""),!v){S[x]=_;return}S[x]===void 0&&(S[x]={}),S[x][v[1]]=_};case"bracket":return(x,_,S)=>{if(v=/(\[\])$/.exec(x),x=x.replace(/\[\]$/,""),!v){S[x]=_;return}if(S[x]===void 0){S[x]=[_];return}S[x]=[].concat(S[x],_)};case"colon-list-separator":return(x,_,S)=>{if(v=/(:list)$/.exec(x),x=x.replace(/:list$/,""),!v){S[x]=_;return}if(S[x]===void 0){S[x]=[_];return}S[x]=[].concat(S[x],_)};case"comma":case"separator":return(x,_,S)=>{const f=typeof _=="string"&&_.includes(m.arrayFormatSeparator),A=typeof _=="string"&&!f&&d(_,m).includes(m.arrayFormatSeparator);_=A?d(_,m):_;const R=f||A?_.split(m.arrayFormatSeparator).map(D=>d(D,m)):_===null?_:d(_,m);S[x]=R};case"bracket-separator":return(x,_,S)=>{const f=/(\[\])$/.test(x);if(x=x.replace(/\[\]$/,""),!f){S[x]=_&&d(_,m);return}const A=_===null?[]:_.split(m.arrayFormatSeparator).map(R=>d(R,m));if(S[x]===void 0){S[x]=A;return}S[x]=[].concat(S[x],A)};default:return(x,_,S)=>{if(S[x]===void 0){S[x]=_;return}S[x]=[].concat(S[x],_)}}}function c(m){if(typeof m!="string"||m.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function u(m,v){return v.encode?v.strict?e(m):encodeURIComponent(m):m}function d(m,v){return v.decode?n(m):m}function p(m){return Array.isArray(m)?m.sort():typeof m=="object"?p(Object.keys(m)).sort((v,x)=>Number(v)-Number(x)).map(v=>m[v]):m}function w(m){const v=m.indexOf("#");return v!==-1&&(m=m.slice(0,v)),m}function y(m){let v="";const x=m.indexOf("#");return x!==-1&&(v=m.slice(x)),v}function E(m){m=w(m);const v=m.indexOf("?");return v===-1?"":m.slice(v+1)}function C(m,v){return v.parseNumbers&&!Number.isNaN(Number(m))&&typeof m=="string"&&m.trim()!==""?m=Number(m):v.parseBooleans&&m!==null&&(m.toLowerCase()==="true"||m.toLowerCase()==="false")&&(m=m.toLowerCase()==="true"),m}function b(m,v){v=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},v),c(v.arrayFormatSeparator);const x=l(v),_=Object.create(null);if(typeof m!="string"||(m=m.trim().replace(/^[?#&]/,""),!m))return _;for(const S of m.split("&")){if(S==="")continue;let[f,A]=r(v.decode?S.replace(/\+/g," "):S,"=");A=A===void 0?null:["comma","separator","bracket-separator"].includes(v.arrayFormat)?A:d(A,v),x(d(f,v),A,_)}for(const S of Object.keys(_)){const f=_[S];if(typeof f=="object"&&f!==null)for(const A of Object.keys(f))f[A]=C(f[A],v);else _[S]=C(f,v)}return v.sort===!1?_:(v.sort===!0?Object.keys(_).sort():Object.keys(_).sort(v.sort)).reduce((S,f)=>{const A=_[f];return A&&typeof A=="object"&&!Array.isArray(A)?S[f]=p(A):S[f]=A,S},Object.create(null))}t.extract=E,t.parse=b,t.stringify=(m,v)=>{if(!m)return"";v=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},v),c(v.arrayFormatSeparator);const x=A=>v.skipNull&&o(m[A])||v.skipEmptyString&&m[A]==="",_=a(v),S={};for(const A of Object.keys(m))x(A)||(S[A]=m[A]);const f=Object.keys(S);return v.sort!==!1&&f.sort(v.sort),f.map(A=>{const R=m[A];return R===void 0?"":R===null?u(A,v):Array.isArray(R)?R.length===0&&v.arrayFormat==="bracket-separator"?u(A,v)+"[]":R.reduce(_(A),[]).join("&"):u(A,v)+"="+u(R,v)}).filter(A=>A.length>0).join("&")},t.parseUrl=(m,v)=>{v=Object.assign({decode:!0},v);const[x,_]=r(m,"#");return Object.assign({url:x.split("?")[0]||"",query:b(E(m),v)},v&&v.parseFragmentIdentifier&&_?{fragmentIdentifier:d(_,v)}:{})},t.stringifyUrl=(m,v)=>{v=Object.assign({encode:!0,strict:!0,[s]:!0},v);const x=w(m.url).split("?")[0]||"",_=t.extract(m.url),S=t.parse(_,{sort:!1}),f=Object.assign(S,m.query);let A=t.stringify(f,v);A&&(A=`?${A}`);let R=y(m.url);return m.fragmentIdentifier&&(R=`#${v[s]?u(m.fragmentIdentifier,v):m.fragmentIdentifier}`),`${x}${A}${R}`},t.pick=(m,v,x)=>{x=Object.assign({parseFragmentIdentifier:!0,[s]:!1},x);const{url:_,query:S,fragmentIdentifier:f}=t.parseUrl(m,x);return t.stringifyUrl({url:_,query:i(S,v),fragmentIdentifier:f},x)},t.exclude=(m,v,x)=>{const _=Array.isArray(v)?S=>!v.includes(S):(S,f)=>!v(S,f);return t.pick(m,_,x)}})(zc);const ZN={waku:{publish:"waku_publish",batchPublish:"waku_batchPublish",subscribe:"waku_subscribe",batchSubscribe:"waku_batchSubscribe",subscription:"waku_subscription",unsubscribe:"waku_unsubscribe",batchUnsubscribe:"waku_batchUnsubscribe",batchFetchMessages:"waku_batchFetchMessages"},irn:{publish:"irn_publish",batchPublish:"irn_batchPublish",subscribe:"irn_subscribe",batchSubscribe:"irn_batchSubscribe",subscription:"irn_subscription",unsubscribe:"irn_unsubscribe",batchUnsubscribe:"irn_batchUnsubscribe",batchFetchMessages:"irn_batchFetchMessages"},iridium:{publish:"iridium_publish",batchPublish:"iridium_batchPublish",subscribe:"iridium_subscribe",batchSubscribe:"iridium_batchSubscribe",subscription:"iridium_subscription",unsubscribe:"iridium_unsubscribe",batchUnsubscribe:"iridium_batchUnsubscribe",batchFetchMessages:"iridium_batchFetchMessages"}},GN=":";function qL(t){const[e,n]=t.split(GN);return{namespace:e,reference:n}}function ZL(t,e=[]){const n=[];return Object.keys(t).forEach(r=>{if(e.length&&!e.includes(r))return;const i=t[r];n.push(...i.accounts)}),n}function W6(t,e){return t.includes(":")?[t]:e.chains||[]}const z6="base10",wn="base16",tm="base64pad",pw="utf8",H6=0,vu=1,KN=0,E2=1,nm=12,mw=32;function GL(){const t=cw.generateKeyPair();return{privateKey:yr(t.secretKey,wn),publicKey:yr(t.publicKey,wn)}}function KL(){const t=zh.randomBytes(mw);return yr(t,wn)}function YL(t,e){const n=cw.sharedKey(sr(t,wn),sr(e,wn),!0),r=new Mk(Zh.SHA256,n).expand(mw);return yr(r,wn)}function QL(t){const e=Zh.hash(sr(t,wn));return yr(e,wn)}function XL(t){const e=Zh.hash(sr(t,pw));return yr(e,wn)}function YN(t){return sr(`${t}`,z6)}function Yh(t){return Number(yr(t,z6))}function JL(t){const e=YN(typeof t.type<"u"?t.type:H6);if(Yh(e)===vu&&typeof t.senderPublicKey>"u")throw new Error("Missing sender public key for type 1 envelope");const n=typeof t.senderPublicKey<"u"?sr(t.senderPublicKey,wn):void 0,r=typeof t.iv<"u"?sr(t.iv,wn):zh.randomBytes(nm),i=new aw.ChaCha20Poly1305(sr(t.symKey,wn)).seal(r,sr(t.message,pw));return QN({type:e,sealed:i,iv:r,senderPublicKey:n})}function eB(t){const e=new aw.ChaCha20Poly1305(sr(t.symKey,wn)),{sealed:n,iv:r}=V6(t.encoded),i=e.open(r,n);if(i===null)throw new Error("Failed to decrypt");return yr(i,pw)}function QN(t){if(Yh(t.type)===vu){if(typeof t.senderPublicKey>"u")throw new Error("Missing sender public key for type 1 envelope");return yr(r2([t.type,t.senderPublicKey,t.iv,t.sealed]),tm)}return yr(r2([t.type,t.iv,t.sealed]),tm)}function V6(t){const e=sr(t,tm),n=e.slice(KN,E2),r=E2;if(Yh(n)===vu){const a=r+mw,l=a+nm,c=e.slice(r,a),u=e.slice(a,l),d=e.slice(l);return{type:n,sealed:d,iv:u,senderPublicKey:c}}const i=r+nm,o=e.slice(r,i),s=e.slice(i);return{type:n,sealed:s,iv:o}}function tB(t,e){const n=V6(t);return XN({type:Yh(n.type),senderPublicKey:typeof n.senderPublicKey<"u"?yr(n.senderPublicKey,wn):void 0,receiverPublicKey:e==null?void 0:e.receiverPublicKey})}function XN(t){const e=(t==null?void 0:t.type)||H6;if(e===vu){if(typeof(t==null?void 0:t.senderPublicKey)>"u")throw new Error("missing sender public key");if(typeof(t==null?void 0:t.receiverPublicKey)>"u")throw new Error("missing receiver public key")}return{type:e,senderPublicKey:t==null?void 0:t.senderPublicKey,receiverPublicKey:t==null?void 0:t.receiverPublicKey}}function nB(t){return t.type===vu&&typeof t.senderPublicKey=="string"&&typeof t.receiverPublicKey=="string"}var JN=Object.defineProperty,_2=Object.getOwnPropertySymbols,eM=Object.prototype.hasOwnProperty,tM=Object.prototype.propertyIsEnumerable,C2=(t,e,n)=>e in t?JN(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,S2=(t,e)=>{for(var n in e||(e={}))eM.call(e,n)&&C2(t,n,e[n]);if(_2)for(var n of _2(e))tM.call(e,n)&&C2(t,n,e[n]);return t};const nM="ReactNative",In={reactNative:"react-native",node:"node",browser:"browser",unknown:"unknown"},rM="js";function q6(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"}function bu(){return!dw()&&!!fw()&&navigator.product===nM}function Qh(){return!q6()&&!!fw()&&!!dw()}function xu(){return bu()?In.reactNative:q6()?In.node:Qh()?In.browser:In.unknown}function rB(){var t;try{return bu()&&typeof global<"u"&&typeof(global==null?void 0:global.Application)<"u"?(t=global.Application)==null?void 0:t.applicationId:void 0}catch{return}}function iM(t,e){let n=zc.parse(t);return n=S2(S2({},n),e),t=zc.stringify(n),t}function iB(){return j6()||{name:"",description:"",url:"",icons:[""]}}function oM(){if(xu()===In.reactNative&&typeof global<"u"&&typeof(global==null?void 0:global.Platform)<"u"){const{OS:n,Version:r}=global.Platform;return[n,r].join("-")}const t=QR();if(t===null)return"unknown";const e=t.os?t.os.replace(" ","").toLowerCase():"unknown";return t.type==="browser"?[e,t.name,t.version].join("-"):[e,t.version].join("-")}function sM(){var t;const e=xu();return e===In.browser?[e,((t=B6())==null?void 0:t.host)||"unknown"].join(":"):e}function aM(t,e,n){const r=oM(),i=sM();return[[t,e].join("-"),[rM,n].join("-"),r,i].join("/")}function oB({protocol:t,version:e,relayUrl:n,sdkVersion:r,auth:i,projectId:o,useOnCloseEvent:s,bundleId:a}){const l=n.split("?"),c=aM(t,e,r),u={auth:i,ua:c,projectId:o,useOnCloseEvent:s||void 0,origin:a||void 0},d=iM(l[1]||"",u);return l[0]+"?"+d}function Oo(t,e){return t.filter(n=>e.includes(n)).length===t.length}function sB(t){return Object.fromEntries(t.entries())}function aB(t){return new Map(Object.entries(t))}function lB(t=No.FIVE_MINUTES,e){const n=No.toMiliseconds(t||No.FIVE_MINUTES);let r,i,o;return{resolve:s=>{o&&r&&(clearTimeout(o),r(s))},reject:s=>{o&&i&&(clearTimeout(o),i(s))},done:()=>new Promise((s,a)=>{o=setTimeout(()=>{a(new Error(e))},n),r=s,i=a})}}function cB(t,e,n){return new Promise(async(r,i)=>{const o=setTimeout(()=>i(new Error(n)),e);try{const s=await t;r(s)}catch(s){i(s)}clearTimeout(o)})}function Z6(t,e){if(typeof e=="string"&&e.startsWith(`${t}:`))return e;if(t.toLowerCase()==="topic"){if(typeof e!="string")throw new Error('Value must be "string" for expirer target type: topic');return`topic:${e}`}else if(t.toLowerCase()==="id"){if(typeof e!="number")throw new Error('Value must be "number" for expirer target type: id');return`id:${e}`}throw new Error(`Unknown expirer target type: ${t}`)}function uB(t){return Z6("topic",t)}function dB(t){return Z6("id",t)}function fB(t){const[e,n]=t.split(":"),r={id:void 0,topic:void 0};if(e==="topic"&&typeof n=="string")r.topic=n;else if(e==="id"&&Number.isInteger(Number(n)))r.id=Number(n);else throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${n}`);return r}function hB(t,e){return No.fromMiliseconds((e||Date.now())+No.toMiliseconds(t))}function pB(t){return Date.now()>=No.toMiliseconds(t)}function mB(t,e){return`${t}${e?`:${e}`:""}`}function ip(t=[],e=[]){return[...new Set([...t,...e])]}async function gB({id:t,topic:e,wcDeepLink:n}){try{if(!n)return;const r=typeof n=="string"?JSON.parse(n):n;let i=r==null?void 0:r.href;if(typeof i!="string")return;i.endsWith("/")&&(i=i.slice(0,-1));const o=`${i}/wc?requestId=${t}&sessionTopic=${e}`,s=xu();s===In.browser?o.startsWith("https://")?window.open(o,"_blank","noreferrer noopener"):window.open(o,"_self","noreferrer noopener"):s===In.reactNative&&typeof(global==null?void 0:global.Linking)<"u"&&await global.Linking.openURL(o)}catch(r){console.error(r)}}async function wB(t,e){try{return await t.getItem(e)||(Qh()?localStorage.getItem(e):void 0)}catch(n){console.error(n)}}const lM="irn";function yB(t){return(t==null?void 0:t.relay)||{protocol:lM}}function vB(t){const e=ZN[t];if(typeof e>"u")throw new Error(`Relay Protocol not supported: ${t}`);return e}var cM=Object.defineProperty,T2=Object.getOwnPropertySymbols,uM=Object.prototype.hasOwnProperty,dM=Object.prototype.propertyIsEnumerable,A2=(t,e,n)=>e in t?cM(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,fM=(t,e)=>{for(var n in e||(e={}))uM.call(e,n)&&A2(t,n,e[n]);if(T2)for(var n of T2(e))dM.call(e,n)&&A2(t,n,e[n]);return t};function hM(t,e="-"){const n={},r="relay"+e;return Object.keys(t).forEach(i=>{if(i.startsWith(r)){const o=i.replace(r,""),s=t[i];n[o]=s}}),n}function bB(t){t=t.includes("wc://")?t.replace("wc://",""):t,t=t.includes("wc:")?t.replace("wc:",""):t;const e=t.indexOf(":"),n=t.indexOf("?")!==-1?t.indexOf("?"):void 0,r=t.substring(0,e),i=t.substring(e+1,n).split("@"),o=typeof n<"u"?t.substring(n):"",s=zc.parse(o);return{protocol:r,topic:pM(i[0]),version:parseInt(i[1],10),symKey:s.symKey,relay:hM(s)}}function pM(t){return t.startsWith("//")?t.substring(2):t}function mM(t,e="-"){const n="relay",r={};return Object.keys(t).forEach(i=>{const o=n+e+i;t[i]&&(r[o]=t[i])}),r}function xB(t){return`${t.protocol}:${t.topic}@${t.version}?`+zc.stringify(fM({symKey:t.symKey},mM(t.relay)))}var gM=Object.defineProperty,wM=Object.defineProperties,yM=Object.getOwnPropertyDescriptors,P2=Object.getOwnPropertySymbols,vM=Object.prototype.hasOwnProperty,bM=Object.prototype.propertyIsEnumerable,I2=(t,e,n)=>e in t?gM(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,xM=(t,e)=>{for(var n in e||(e={}))vM.call(e,n)&&I2(t,n,e[n]);if(P2)for(var n of P2(e))bM.call(e,n)&&I2(t,n,e[n]);return t},EM=(t,e)=>wM(t,yM(e));function Ha(t){const e=[];return t.forEach(n=>{const[r,i]=n.split(":");e.push(`${r}:${i}`)}),e}function _M(t){const e=[];return Object.values(t).forEach(n=>{e.push(...Ha(n.accounts))}),e}function CM(t,e){const n=[];return Object.values(t).forEach(r=>{Ha(r.accounts).includes(e)&&n.push(...r.methods)}),n}function SM(t,e){const n=[];return Object.values(t).forEach(r=>{Ha(r.accounts).includes(e)&&n.push(...r.events)}),n}function EB(t,e){const n=NM(t,e);if(n)throw new Error(n.message);const r={};for(const[i,o]of Object.entries(t))r[i]={methods:o.methods,events:o.events,chains:o.accounts.map(s=>`${s.split(":")[0]}:${s.split(":")[1]}`)};return r}function G6(t){return t.includes(":")}function TM(t){return G6(t)?t.split(":")[0]:t}function K6(t){var e,n,r;const i={};if(!gw(t))return i;for(const[o,s]of Object.entries(t)){const a=G6(o)?[o]:s.chains,l=s.methods||[],c=s.events||[],u=TM(o);i[u]=EM(xM({},i[u]),{chains:ip(a,(e=i[u])==null?void 0:e.chains),methods:ip(l,(n=i[u])==null?void 0:n.methods),events:ip(c,(r=i[u])==null?void 0:r.events)})}return i}const AM={INVALID_METHOD:{message:"Invalid method.",code:1001},INVALID_EVENT:{message:"Invalid event.",code:1002},INVALID_UPDATE_REQUEST:{message:"Invalid update request.",code:1003},INVALID_EXTEND_REQUEST:{message:"Invalid extend request.",code:1004},INVALID_SESSION_SETTLE_REQUEST:{message:"Invalid session settle request.",code:1005},UNAUTHORIZED_METHOD:{message:"Unauthorized method.",code:3001},UNAUTHORIZED_EVENT:{message:"Unauthorized event.",code:3002},UNAUTHORIZED_UPDATE_REQUEST:{message:"Unauthorized update request.",code:3003},UNAUTHORIZED_EXTEND_REQUEST:{message:"Unauthorized extend request.",code:3004},USER_REJECTED:{message:"User rejected.",code:5e3},USER_REJECTED_CHAINS:{message:"User rejected chains.",code:5001},USER_REJECTED_METHODS:{message:"User rejected methods.",code:5002},USER_REJECTED_EVENTS:{message:"User rejected events.",code:5003},UNSUPPORTED_CHAINS:{message:"Unsupported chains.",code:5100},UNSUPPORTED_METHODS:{message:"Unsupported methods.",code:5101},UNSUPPORTED_EVENTS:{message:"Unsupported events.",code:5102},UNSUPPORTED_ACCOUNTS:{message:"Unsupported accounts.",code:5103},UNSUPPORTED_NAMESPACE_KEY:{message:"Unsupported namespace key.",code:5104},USER_DISCONNECTED:{message:"User disconnected.",code:6e3},SESSION_SETTLEMENT_FAILED:{message:"Session settlement failed.",code:7e3},WC_METHOD_UNSUPPORTED:{message:"Unsupported wc_ method.",code:10001}},PM={NOT_INITIALIZED:{message:"Not initialized.",code:1},NO_MATCHING_KEY:{message:"No matching key.",code:2},RESTORE_WILL_OVERRIDE:{message:"Restore will override.",code:3},RESUBSCRIBED:{message:"Resubscribed.",code:4},MISSING_OR_INVALID:{message:"Missing or invalid.",code:5},EXPIRED:{message:"Expired.",code:6},UNKNOWN_TYPE:{message:"Unknown type.",code:7},MISMATCHED_TOPIC:{message:"Mismatched topic.",code:8},NON_CONFORMING_NAMESPACES:{message:"Non conforming namespaces.",code:9}};function Di(t,e){const{message:n,code:r}=PM[t];return{message:e?`${n} ${e}`:n,code:r}}function Pa(t,e){const{message:n,code:r}=AM[t];return{message:e?`${n} ${e}`:n,code:r}}function Xh(t,e){return Array.isArray(t)?typeof e<"u"&&t.length?t.every(e):!0:!1}function gw(t){return Object.getPrototypeOf(t)===Object.prototype&&Object.keys(t).length}function Mo(t){return typeof t>"u"}function Qn(t,e){return e&&Mo(t)?!0:typeof t=="string"&&!!t.trim().length}function ww(t,e){return e&&Mo(t)?!0:typeof t=="number"&&!isNaN(t)}function _B(t,e){const{requiredNamespaces:n}=e,r=Object.keys(t.namespaces),i=Object.keys(n);let o=!0;return Oo(i,r)?(r.forEach(s=>{const{accounts:a,methods:l,events:c}=t.namespaces[s],u=Ha(a),d=n[s];(!Oo(W6(s,d),u)||!Oo(d.methods,l)||!Oo(d.events,c))&&(o=!1)}),o):!1}function If(t){return Qn(t,!1)&&t.includes(":")?t.split(":").length===2:!1}function IM(t){if(Qn(t,!1)&&t.includes(":")){const e=t.split(":");if(e.length===3){const n=e[0]+":"+e[1];return!!e[2]&&If(n)}}return!1}function CB(t){if(Qn(t,!1))try{return typeof new URL(t)<"u"}catch{return!1}return!1}function SB(t){var e;return(e=t==null?void 0:t.proposer)==null?void 0:e.publicKey}function TB(t){return t==null?void 0:t.topic}function AB(t,e){let n=null;return Qn(t==null?void 0:t.publicKey,!1)||(n=Di("MISSING_OR_INVALID",`${e} controller public key should be a string`)),n}function $2(t){let e=!0;return Xh(t)?t.length&&(e=t.every(n=>Qn(n,!1))):e=!1,e}function $M(t,e,n){let r=null;return Xh(e)&&e.length?e.forEach(i=>{r||If(i)||(r=Pa("UNSUPPORTED_CHAINS",`${n}, chain ${i} should be a string and conform to "namespace:chainId" format`))}):If(t)||(r=Pa("UNSUPPORTED_CHAINS",`${n}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)),r}function OM(t,e,n){let r=null;return Object.entries(t).forEach(([i,o])=>{if(r)return;const s=$M(i,W6(i,o),`${e} ${n}`);s&&(r=s)}),r}function DM(t,e){let n=null;return Xh(t)?t.forEach(r=>{n||IM(r)||(n=Pa("UNSUPPORTED_ACCOUNTS",`${e}, account ${r} should be a string and conform to "namespace:chainId:address" format`))}):n=Pa("UNSUPPORTED_ACCOUNTS",`${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`),n}function kM(t,e){let n=null;return Object.values(t).forEach(r=>{if(n)return;const i=DM(r==null?void 0:r.accounts,`${e} namespace`);i&&(n=i)}),n}function RM(t,e){let n=null;return $2(t==null?void 0:t.methods)?$2(t==null?void 0:t.events)||(n=Pa("UNSUPPORTED_EVENTS",`${e}, events should be an array of strings or empty array for no events`)):n=Pa("UNSUPPORTED_METHODS",`${e}, methods should be an array of strings or empty array for no methods`),n}function Y6(t,e){let n=null;return Object.values(t).forEach(r=>{if(n)return;const i=RM(r,`${e}, namespace`);i&&(n=i)}),n}function PB(t,e,n){let r=null;if(t&&gw(t)){const i=Y6(t,e);i&&(r=i);const o=OM(t,e,n);o&&(r=o)}else r=Di("MISSING_OR_INVALID",`${e}, ${n} should be an object with data`);return r}function NM(t,e){let n=null;if(t&&gw(t)){const r=Y6(t,e);r&&(n=r);const i=kM(t,e);i&&(n=i)}else n=Di("MISSING_OR_INVALID",`${e}, namespaces should be an object with data`);return n}function MM(t){return Qn(t.protocol,!0)}function IB(t,e){let n=!1;return e&&!t?n=!0:t&&Xh(t)&&t.length&&t.forEach(r=>{n=MM(r)}),n}function $B(t){return typeof t=="number"}function OB(t){return typeof t<"u"&&typeof t!==null}function DB(t){return!(!t||typeof t!="object"||!t.code||!ww(t.code,!1)||!t.message||!Qn(t.message,!1))}function kB(t){return!(Mo(t)||!Qn(t.method,!1))}function RB(t){return!(Mo(t)||Mo(t.result)&&Mo(t.error)||!ww(t.id,!1)||!Qn(t.jsonrpc,!1))}function NB(t){return!(Mo(t)||!Qn(t.name,!1))}function MB(t,e){return!(!If(e)||!_M(t).includes(e))}function UB(t,e,n){return Qn(n,!1)?CM(t,e).includes(n):!1}function LB(t,e,n){return Qn(n,!1)?SM(t,e).includes(n):!1}function BB(t,e,n){let r=null;const i=UM(t),o=LM(e),s=Object.keys(i),a=Object.keys(o),l=O2(Object.keys(t)),c=O2(Object.keys(e)),u=l.filter(d=>!c.includes(d));return u.length&&(r=Di("NON_CONFORMING_NAMESPACES",`${n} namespaces keys don't satisfy requiredNamespaces.
      Required: ${u.toString()}
      Received: ${Object.keys(e).toString()}`)),Oo(s,a)||(r=Di("NON_CONFORMING_NAMESPACES",`${n} namespaces chains don't satisfy required namespaces.
      Required: ${s.toString()}
      Approved: ${a.toString()}`)),Object.keys(e).forEach(d=>{if(!d.includes(":")||r)return;const p=Ha(e[d].accounts);p.includes(d)||(r=Di("NON_CONFORMING_NAMESPACES",`${n} namespaces accounts don't satisfy namespace accounts for ${d}
        Required: ${d}
        Approved: ${p.toString()}`))}),s.forEach(d=>{r||(Oo(i[d].methods,o[d].methods)?Oo(i[d].events,o[d].events)||(r=Di("NON_CONFORMING_NAMESPACES",`${n} namespaces events don't satisfy namespace events for ${d}`)):r=Di("NON_CONFORMING_NAMESPACES",`${n} namespaces methods don't satisfy namespace methods for ${d}`))}),r}function UM(t){const e={};return Object.keys(t).forEach(n=>{var r;n.includes(":")?e[n]=t[n]:(r=t[n].chains)==null||r.forEach(i=>{e[i]={methods:t[n].methods,events:t[n].events}})}),e}function O2(t){return[...new Set(t.map(e=>e.includes(":")?e.split(":")[0]:e))]}function LM(t){const e={};return Object.keys(t).forEach(n=>{if(n.includes(":"))e[n]=t[n];else{const r=Ha(t[n].accounts);r==null||r.forEach(i=>{e[i]={accounts:t[n].accounts.filter(o=>o.includes(`${i}:`)),methods:t[n].methods,events:t[n].events}})}}),e}function jB(t,e){return ww(t,!1)&&t<=e.max&&t>=e.min}function FB(){const t=xu();return new Promise(e=>{switch(t){case In.browser:e(BM());break;case In.reactNative:e(jM());break;case In.node:e(FM());break;default:e(!0)}})}function BM(){return Qh()&&(navigator==null?void 0:navigator.onLine)}async function jM(){if(bu()&&typeof global<"u"&&global!=null&&global.NetInfo){const t=await(global==null?void 0:global.NetInfo.fetch());return t==null?void 0:t.isConnected}return!0}function FM(){return!0}function WB(t){switch(xu()){case In.browser:WM(t);break;case In.reactNative:zM(t);break}}function WM(t){!bu()&&Qh()&&(window.addEventListener("online",()=>t(!0)),window.addEventListener("offline",()=>t(!1)))}function zM(t){bu()&&typeof global<"u"&&global!=null&&global.NetInfo&&(global==null||global.NetInfo.addEventListener(e=>t(e==null?void 0:e.isConnected)))}const op={};class zB{static get(e){return op[e]}static set(e,n){op[e]=n}static delete(e){delete op[e]}}var Q6="eip155",HM="store",X6="requestedChains",rm="wallet_addEthereumChain",st,$l,gd,im,yw,J6,wd,om,sm,e8,$f,vw,_s,pl,Of,bw,Df,xw,kf,Ew,VM=class extends mh{constructor(t){super({...t,options:{isNewChainsStale:!0,...t.options}}),ln(this,gd),ln(this,yw),ln(this,wd),ln(this,sm),ln(this,$f),ln(this,_s),ln(this,Of),ln(this,Df),ln(this,kf),this.id="walletConnect",this.name="WalletConnect",this.ready=!0,ln(this,st,void 0),ln(this,$l,void 0),this.onAccountsChanged=e=>{e.length===0?this.emit("disconnect"):this.emit("change",{account:zn(e[0])})},this.onChainChanged=e=>{const n=Number(e),r=this.isChainUnsupported(n);this.emit("change",{chain:{id:n,unsupported:r}})},this.onDisconnect=()=>{Dt(this,_s,pl).call(this,[]),this.emit("disconnect")},this.onDisplayUri=e=>{this.emit("message",{type:"display_uri",data:e})},this.onConnect=()=>{this.emit("connect",{})},Dt(this,gd,im).call(this)}async connect({chainId:t,pairingTopic:e}={}){var n,r,i,o,s;try{let a=t;if(!a){const y=(n=this.storage)==null?void 0:n.getItem(HM),E=(o=(i=(r=y==null?void 0:y.state)==null?void 0:r.data)==null?void 0:i.chain)==null?void 0:o.id;E&&!this.isChainUnsupported(E)?a=E:a=(s=this.chains[0])==null?void 0:s.id}if(!a)throw new Error("No chains found on connector.");const l=await this.getProvider();Dt(this,sm,e8).call(this);const c=Dt(this,wd,om).call(this);if(l.session&&c&&await l.disconnect(),!l.session||c){const y=this.chains.filter(E=>E.id!==a).map(E=>E.id);this.emit("message",{type:"connecting"}),await l.connect({pairingTopic:e,optionalChains:[a,...y]}),Dt(this,_s,pl).call(this,this.chains.map(({id:E})=>E))}const u=await l.enable(),d=zn(u[0]),p=await this.getChainId(),w=this.isChainUnsupported(p);return{account:d,chain:{id:p,unsupported:w}}}catch(a){throw/user rejected/i.test(a==null?void 0:a.message)?new fn(a):a}}async disconnect(){const t=await this.getProvider();try{await t.disconnect()}catch(e){if(!/No matching key/i.test(e.message))throw e}finally{Dt(this,$f,vw).call(this),Dt(this,_s,pl).call(this,[])}}async getAccount(){const{accounts:t}=await this.getProvider();return zn(t[0])}async getChainId(){const{chainId:t}=await this.getProvider();return t}async getProvider({chainId:t}={}){return He(this,st)||await Dt(this,gd,im).call(this),t&&await this.switchChain(t),He(this,st)}async getWalletClient({chainId:t}={}){const[e,n]=await Promise.all([this.getProvider({chainId:t}),this.getAccount()]),r=this.chains.find(i=>i.id===t);if(!e)throw new Error("provider is required.");return hh({account:n,chain:r,transport:dh(e)})}async isAuthorized(){try{const[t,e]=await Promise.all([this.getAccount(),this.getProvider()]),n=Dt(this,wd,om).call(this);if(!t)return!1;if(n&&e.session){try{await e.disconnect()}catch{}return!1}return!0}catch{return!1}}async switchChain(t){var n,r;const e=this.chains.find(i=>i.id===t);if(!e)throw new hr(new Error("chain not found on connector."));try{const i=await this.getProvider(),o=Dt(this,Df,xw).call(this),s=Dt(this,kf,Ew).call(this);if(!o.includes(t)&&s.includes(rm)){await i.request({method:rm,params:[{chainId:Se(e.id),blockExplorerUrls:[(r=(n=e.blockExplorers)==null?void 0:n.default)==null?void 0:r.url],chainName:e.name,nativeCurrency:e.nativeCurrency,rpcUrls:[...e.rpcUrls.default.http]}]});const l=Dt(this,Of,bw).call(this);l.push(t),Dt(this,_s,pl).call(this,l)}return await i.request({method:"wallet_switchEthereumChain",params:[{chainId:Se(t)}]}),e}catch(i){const o=typeof i=="string"?i:i==null?void 0:i.message;throw/user rejected request/i.test(o)?new fn(i):new hr(i)}}};st=new WeakMap;$l=new WeakMap;gd=new WeakSet;im=async function(){return!He(this,$l)&&typeof window<"u"&&uc(this,$l,Dt(this,yw,J6).call(this)),He(this,$l)};yw=new WeakSet;J6=async function(){const{EthereumProvider:t}=await sa(()=>import("./index.es-913bca81.js"),["assets/index.es-913bca81.js","assets/events-797e3442.js"]),e=this.chains.map(({id:n})=>n);if(e.length){const{projectId:n,showQrModal:r=!0,qrModalOptions:i,metadata:o,relayUrl:s}=this.options;uc(this,st,await t.init({showQrModal:r,qrModalOptions:i,projectId:n,optionalChains:e,rpcMap:Object.fromEntries(this.chains.map(a=>[a.id,a.rpcUrls.default.http[0]])),metadata:o,relayUrl:s}))}};wd=new WeakSet;om=function(){if(Dt(this,kf,Ew).call(this).includes(rm)||!this.options.isNewChainsStale)return!1;const e=Dt(this,Of,bw).call(this),n=this.chains.map(({id:i})=>i),r=Dt(this,Df,xw).call(this);return r.length&&!r.some(i=>n.includes(i))?!1:!n.every(i=>e.includes(i))};sm=new WeakSet;e8=function(){He(this,st)&&(Dt(this,$f,vw).call(this),He(this,st).on("accountsChanged",this.onAccountsChanged),He(this,st).on("chainChanged",this.onChainChanged),He(this,st).on("disconnect",this.onDisconnect),He(this,st).on("session_delete",this.onDisconnect),He(this,st).on("display_uri",this.onDisplayUri),He(this,st).on("connect",this.onConnect))};$f=new WeakSet;vw=function(){He(this,st)&&(He(this,st).removeListener("accountsChanged",this.onAccountsChanged),He(this,st).removeListener("chainChanged",this.onChainChanged),He(this,st).removeListener("disconnect",this.onDisconnect),He(this,st).removeListener("session_delete",this.onDisconnect),He(this,st).removeListener("display_uri",this.onDisplayUri),He(this,st).removeListener("connect",this.onConnect))};_s=new WeakSet;pl=function(t){var e;(e=this.storage)==null||e.setItem(X6,t)};Of=new WeakSet;bw=function(){var t;return((t=this.storage)==null?void 0:t.getItem(X6))??[]};Df=new WeakSet;xw=function(){var r,i,o;if(!He(this,st))return[];const t=(r=He(this,st).session)==null?void 0:r.namespaces;return t?((o=(i=K6(t)[Q6])==null?void 0:i.chains)==null?void 0:o.map(s=>parseInt(s.split(":")[1]||"")))??[]:[]};kf=new WeakSet;Ew=function(){var r,i;if(!He(this,st))return[];const t=(r=He(this,st).session)==null?void 0:r.namespaces;return t?((i=K6(t)[Q6])==null?void 0:i.methods)??[]:[]};function qM(){return function(t){return t.rpcUrls.public.http[0]?{chain:t,rpcUrls:t.rpcUrls.public}:null}}class ZM extends mh{constructor(e){super(e),this.id="w3mEmail",this.name="Web3Modal Email",this.ready=!0,this.provider={},typeof window<"u"&&(this.provider=new TO(e.options.projectId))}async getProvider(){return Promise.resolve(this.provider)}async connect(e={}){const{address:n,chainId:r}=await this.provider.connect({chainId:e.chainId});return{account:n,chain:{id:r,unsupported:this.isChainUnsupported(1)}}}async switchChain(e){try{const n=this.chains.find(i=>i.id===e);if(!n)throw new hr(new Error("chain not found on connector."));await this.provider.switchNetwork(e);const r=this.isChainUnsupported(e);return this.emit("change",{chain:{id:e,unsupported:r}}),n}catch(n){throw n instanceof Error?new hr(n):n}}async disconnect(){await this.provider.disconnect()}async getAccount(){const{address:e}=await this.provider.connect();return e}async getChainId(){const{chainId:e}=await this.provider.getChainId();return e}async getWalletClient(){const{address:e,chainId:n}=await this.provider.connect();return Promise.resolve(hh({account:e,chain:{id:n},transport:dh(this.provider)}))}async isAuthorized(){const{isConnected:e}=await this.provider.isConnected();return e}onAccountsChanged(){}onChainChanged(){}onDisconnect(){}}const GM=de.getBlockchainApiUrl();function KM({projectId:t}){return function(n){if(!Zr.WalletConnectRpcChainIds.includes(n.id))return null;const r=`${GM}/v1/?chainId=${be.EIP155}:${n.id}&projectId=${t}`;return{chain:{...n,rpcUrls:{...n.rpcUrls,default:{http:[r]}}},rpcUrls:{http:[r]}}}}function YM({projectId:t,chains:e,metadata:n,enableInjected:r,enableCoinbase:i,enableEIP6963:o,enableEmail:s,enableWalletConnect:a}){const{publicClient:l}=K9(e,[KM({projectId:t}),qM()]),c=[];return a!==!1&&c.push(new VM({chains:e,options:{projectId:t,showQrModal:!1,metadata:n}})),r!==!1&&c.push(new Og({chains:e,options:{shimDisconnect:!0}})),o!==!1&&c.push(new tD({chains:e})),i!==!1&&c.push(new nk({chains:e,options:{appName:(n==null?void 0:n.name)??"Unknown"}})),s===!0&&c.push(new ZM({chains:e,options:{projectId:t}})),XD({autoConnect:!0,connectors:c,publicClient:l})}let Xu;function QM(t){return Xu||(Xu=new eD({...t,_sdkVersion:`react-wagmi-${be.VERSION}`}),OE(Xu)),Xu}function XM(){const[t,e]=At.useState(!1),{open:n}=DE(),r=new Event("CONNECT_SUCCESS"),i=kE();At.useEffect(()=>{console.log(i.data.event),i.data.event==="CONNECT_SUCCESS"&&(document.dispatchEvent(r),e(!0))},[i,e]);const o=At.useCallback(()=>n({view:"Connect"}),[n]);return Gr.jsx(Gr.Fragment,{children:Gr.jsx("div",{className:`common-white-btn form-1_content_form-block_form_btn-connect ${t&&"connected"}`,onClick:o,children:t?Gr.jsxs(Gr.Fragment,{children:[Gr.jsx("img",{src:"https://uploads-ssl.webflow.com/6645e7046629ba71066f47ff/66582458354559d9565f31bc_Vector.svg",className:"form-1_content_form-block_form_btn-connect_img"})," connected"]}):"Connect Wallet"})})}const t8="5b9d2a7e594a65f3d634489802d445c9",n8=[Ig,RE,M9],r8=YM({projectId:t8,chains:n8,metadata:{name:"pait"}});QM({chains:n8,projectId:t8,wagmiConfig:r8});sp.createRoot(document.getElementById("root")).render(Gr.jsx(v8.StrictMode,{children:Gr.jsx(tk,{config:r8,children:Gr.jsx(XM,{})})}));export{nn as $,Rr as A,vc as B,Zn as C,Nr as D,P1 as E,Dn as F,bc as G,nf as H,xc as I,Zo as J,ga as K,Ji as L,k1 as M,Ko as N,Mr as O,tf as P,_c as Q,di as R,xa as S,Us as T,Ze as U,li as V,S1 as W,Ea as X,Cc as Y,_a as Z,Yo as _,iT as a,pB as a$,yn as a0,sf as a1,h7 as a2,T7 as a3,A7 as a4,P7 as a5,D5 as a6,f7 as a7,dd as a8,Hc as a9,SB as aA,TB as aB,Di as aC,GL as aD,KL as aE,YL as aF,QL as aG,XN as aH,nB as aI,JL as aJ,tB as aK,eB as aL,V6 as aM,Yh as aN,wn as aO,rB as aP,cB as aQ,FB as aR,oB as aS,WB as aT,vu as aU,hB as aV,xB as aW,bB as aX,lB as aY,mB as aZ,Pa as a_,an as aa,mi as ab,e4 as ac,sa as ad,V as ae,Qf as af,tn as ag,en as ah,Wn as ai,wC as aj,ah as ak,si as al,Xc as am,Cl as an,Dr as ao,cu as ap,R2 as aq,No as ar,Pe as as,Er as at,zh as au,sr as av,yr as aw,r2 as ax,am as ay,Mo as az,ua as b,OB as b0,CB as b1,Qn as b2,fB as b3,uB as b4,dB as b5,bu as b6,Qh as b7,q6 as b8,sB as b9,$B as bA,TM as bB,G6 as bC,ip as bD,qL as bE,ZL as bF,Fk as bG,h6 as bH,aB as ba,XL as bb,yB as bc,vB as bd,Xh as be,iB as bf,gw as bg,EB as bh,wB as bi,gB as bj,_B as bk,zB as bl,IB as bm,PB as bn,NM as bo,BB as bp,DB as bq,MM as br,AB as bs,MB as bt,kB as bu,UB as bv,jB as bw,RB as bx,NB as by,LB as bz,Z as c,mc as d,T1 as e,gc as f,Kd as g,da as h,rT as i,fa as j,Yd as k,mr as l,Qd as m,ha as n,kr as o,Xd as p,ci as q,ui as r,h4 as s,wc as t,pa as u,ma as v,pr as w,Go as x,ef as y,yc as z};
