// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).properties=e()}(this,(function(){"use strict";var r=void 0!==Object.getOwnPropertyNames,e=Object,t=e.getOwnPropertyNames;function n(r){return Object.keys(Object(r))}var i=void 0!==Object.keys;var a="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var o=Object.prototype.toString;var c=Object.prototype.hasOwnProperty;var s="function"==typeof Symbol?Symbol:void 0,u="function"==typeof s?s.toStringTag:"";var l,f=a&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return o.call(r);t=r[u],a=u,e=null!=(i=r)&&c.call(i,a);try{r[u]=void 0}catch(e){return o.call(r)}return n=o.call(r),e?r[u]=t:delete r[u],n}:function(r){return o.call(r)};function p(r){return"[object Arguments]"===f(r)}l=function(){return p(arguments)}();var g=l,d=Object.prototype.hasOwnProperty;function h(r,e){return null!=r&&d.call(r,e)}var b="function"==typeof Object.defineProperty?Object.defineProperty:null;var y=Object.defineProperty;function v(r){return"number"==typeof r}function w(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function m(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+w(i):w(i)+r,n&&(r="-"+r)),r}var S=String.prototype.toLowerCase,E=String.prototype.toUpperCase;function j(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!v(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=m(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=m(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===E.call(r.specifier)?E.call(t):S.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function k(r){return"string"==typeof r}var x=Math.abs,I=String.prototype.toLowerCase,O=String.prototype.toUpperCase,T=String.prototype.replace,V=/e\+(\d)$/,_=/e-(\d)$/,A=/^(\d+)$/,F=/^(\d+)e/,$=/\.0$/,P=/\.0*e/,N=/(\..*[^0])0*e/;function C(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!v(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":x(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=T.call(t,N,"$1e"),t=T.call(t,P,"e"),t=T.call(t,$,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=T.call(t,V,"e+0$1"),t=T.call(t,_,"e-0$1"),r.alternate&&(t=T.call(t,A,"$1."),t=T.call(t,F,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===O.call(r.specifier)?O.call(t):I.call(t)}function R(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function Z(r,e,t){var n=e-r.length;return n<0?r:r=t?r+R(n):R(n)+r}var L=String.fromCharCode,W=isNaN,G=Array.isArray;function X(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function B(r){var e,t,n,i,a,o,c,s,u;if(!G(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(k(n=r[s]))o+=n;else{if(e=void 0!==n.precision,!(n=X(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,W(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,W(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=j(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!W(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=W(a)?String(n.arg):L(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=C(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=m(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Z(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var M=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Y(r){var e,t,n,i;for(t=[],i=0,n=M.exec(r);n;)(e=r.slice(i,M.lastIndex-n[0].length)).length&&t.push(e),t.push(U(n)),i=M.lastIndex,n=M.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function z(r){return"string"==typeof r}function H(r){var e,t,n;if(!z(r))throw new TypeError(H("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=Y(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return B.apply(null,t)}var D,q=Object.prototype,J=q.toString,K=q.__defineGetter__,Q=q.__defineSetter__,rr=q.__lookupGetter__,er=q.__lookupSetter__;D=function(){try{return b({},"x",{}),!0}catch(r){return!1}}()?y:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===J.call(r))throw new TypeError(H("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===J.call(t))throw new TypeError(H("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(rr.call(r,e)||er.call(r,e)?(n=r.__proto__,r.__proto__=q,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&K&&K.call(r,e,t.get),o&&Q&&Q.call(r,e,t.set),r};var tr=D;function nr(r,e,t){tr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function ir(r){return"string"==typeof r}var ar="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function or(){return ar&&"symbol"==typeof Symbol.toStringTag}var cr=String.prototype.valueOf;var sr=or();function ur(r){return"object"==typeof r&&(r instanceof String||(sr?function(r){try{return cr.call(r),!0}catch(r){return!1}}(r):"[object String]"===f(r)))}function lr(r){return ir(r)||ur(r)}function fr(r){return"number"==typeof r}nr(lr,"isPrimitive",ir),nr(lr,"isObject",ur);var pr=Number,gr=pr.prototype.toString;var dr=or();function hr(r){return"object"==typeof r&&(r instanceof pr||(dr?function(r){try{return gr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===f(r)))}function br(r){return fr(r)||hr(r)}function yr(r){return r!=r}function vr(r){return fr(r)&&yr(r)}function wr(r){return hr(r)&&yr(r.valueOf())}function mr(r){return vr(r)||wr(r)}nr(br,"isPrimitive",fr),nr(br,"isObject",hr),nr(mr,"isPrimitive",vr),nr(mr,"isObject",wr);var Sr=Number.POSITIVE_INFINITY,Er=pr.NEGATIVE_INFINITY,jr=Math.floor;function kr(r){return jr(r)===r}function xr(r){return r<Sr&&r>Er&&kr(r)}function Ir(r){return fr(r)&&xr(r)}function Or(r){return hr(r)&&xr(r.valueOf())}function Tr(r){return Ir(r)||Or(r)}nr(Tr,"isPrimitive",Ir),nr(Tr,"isObject",Or);var Vr=Object.prototype.propertyIsEnumerable;var _r=!Vr.call("beep","0");function Ar(r,e){var t;return null!=r&&(!(t=Vr.call(r,e))&&_r&&lr(r)?!vr(e=+e)&&Ir(e)&&e>=0&&e<r.length:t)}var Fr=Array.isArray?Array.isArray:function(r){return"[object Array]"===f(r)};var $r=g?p:function(r){return null!==r&&"object"==typeof r&&!Fr(r)&&"number"==typeof r.length&&kr(r.length)&&r.length>=0&&r.length<=4294967295&&h(r,"callee")&&!Ar(r,"callee")},Pr=Array.prototype.slice;function Nr(r){return"number"==typeof r}function Cr(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function Rr(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+Cr(i):Cr(i)+r,n&&(r="-"+r)),r}var Zr=String.prototype.toLowerCase,Lr=String.prototype.toUpperCase;function Wr(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!Nr(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=Rr(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=Rr(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===Lr.call(r.specifier)?Lr.call(t):Zr.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Gr(r){return"string"==typeof r}var Xr=Math.abs,Br=String.prototype.toLowerCase,Mr=String.prototype.toUpperCase,Ur=String.prototype.replace,Yr=/e\+(\d)$/,zr=/e-(\d)$/,Hr=/^(\d+)$/,Dr=/^(\d+)e/,qr=/\.0$/,Jr=/\.0*e/,Kr=/(\..*[^0])0*e/;function Qr(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!Nr(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Xr(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Ur.call(t,Kr,"$1e"),t=Ur.call(t,Jr,"e"),t=Ur.call(t,qr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Ur.call(t,Yr,"e+0$1"),t=Ur.call(t,zr,"e-0$1"),r.alternate&&(t=Ur.call(t,Hr,"$1."),t=Ur.call(t,Dr,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Mr.call(r.specifier)?Mr.call(t):Br.call(t)}function re(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function ee(r,e,t){var n=e-r.length;return n<0?r:r=t?r+re(n):re(n)+r}var te=String.fromCharCode,ne=isNaN,ie=Array.isArray;function ae(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function oe(r){var e,t,n,i,a,o,c,s,u;if(!ie(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(Gr(n=r[s]))o+=n;else{if(e=void 0!==n.precision,!(n=ae(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,ne(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,ne(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=Wr(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!ne(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=ne(a)?String(n.arg):te(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=Qr(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Rr(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=ee(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var ce=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function se(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function ue(r){var e,t,n,i;for(t=[],i=0,n=ce.exec(r);n;)(e=r.slice(i,ce.lastIndex-n[0].length)).length&&t.push(e),t.push(se(n)),i=ce.lastIndex,n=ce.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function le(r){return"string"==typeof r}function fe(r){var e,t,n;if(!le(r))throw new TypeError(fe("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=ue(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return oe.apply(null,t)}function pe(r){return null!==r&&"object"==typeof r}nr(pe,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(fe("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Fr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(pe));var ge=Ar((function(){}),"prototype"),de=!Ar({toString:null},"toString");function he(r,e,t){tr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function be(r){return"number"==typeof r}var ye="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function ve(){return ye&&"symbol"==typeof Symbol.toStringTag}var we=Number,me=we.prototype.toString;var Se=ve();function Ee(r){return"object"==typeof r&&(r instanceof we||(Se?function(r){try{return me.call(r),!0}catch(r){return!1}}(r):"[object Number]"===f(r)))}function je(r){return be(r)||Ee(r)}function ke(r){return r!=r}function xe(r){return be(r)&&ke(r)}function Ie(r){return Ee(r)&&ke(r.valueOf())}function Oe(r){return xe(r)||Ie(r)}he(je,"isPrimitive",be),he(je,"isObject",Ee),he(Oe,"isPrimitive",xe),he(Oe,"isObject",Ie);var Te=Math.floor;function Ve(r){return Te(r)===r}function _e(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Ve(r.length)&&r.length>=0&&r.length<=9007199254740991}function Ae(r){return"string"==typeof r}var Fe=String.prototype.valueOf;var $e=ve();function Pe(r){return"object"==typeof r&&(r instanceof String||($e?function(r){try{return Fe.call(r),!0}catch(r){return!1}}(r):"[object String]"===f(r)))}function Ne(r){return Ae(r)||Pe(r)}he(Ne,"isPrimitive",Ae),he(Ne,"isObject",Pe);var Ce=Number.POSITIVE_INFINITY,Re=we.NEGATIVE_INFINITY;function Ze(r){return r<Ce&&r>Re&&Ve(r)}function Le(r){return be(r)&&Ze(r)}function We(r){return Ee(r)&&Ze(r.valueOf())}function Ge(r){return Le(r)||We(r)}function Xe(r){return"number"==typeof r}function Be(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function Me(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+Be(i):Be(i)+r,n&&(r="-"+r)),r}he(Ge,"isPrimitive",Le),he(Ge,"isObject",We);var Ue=String.prototype.toLowerCase,Ye=String.prototype.toUpperCase;function ze(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!Xe(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=Me(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=Me(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===Ye.call(r.specifier)?Ye.call(t):Ue.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function He(r){return"string"==typeof r}var De=Math.abs,qe=String.prototype.toLowerCase,Je=String.prototype.toUpperCase,Ke=String.prototype.replace,Qe=/e\+(\d)$/,rt=/e-(\d)$/,et=/^(\d+)$/,tt=/^(\d+)e/,nt=/\.0$/,it=/\.0*e/,at=/(\..*[^0])0*e/;function ot(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!Xe(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":De(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Ke.call(t,at,"$1e"),t=Ke.call(t,it,"e"),t=Ke.call(t,nt,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Ke.call(t,Qe,"e+0$1"),t=Ke.call(t,rt,"e-0$1"),r.alternate&&(t=Ke.call(t,et,"$1."),t=Ke.call(t,tt,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Je.call(r.specifier)?Je.call(t):qe.call(t)}function ct(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function st(r,e,t){var n=e-r.length;return n<0?r:r=t?r+ct(n):ct(n)+r}var ut=String.fromCharCode,lt=isNaN,ft=Array.isArray;function pt(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function gt(r){var e,t,n,i,a,o,c,s,u;if(!ft(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(He(n=r[s]))o+=n;else{if(e=void 0!==n.precision,!(n=pt(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,lt(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,lt(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=ze(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!lt(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=lt(a)?String(n.arg):ut(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=ot(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Me(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=st(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var dt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function ht(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function bt(r){var e,t,n,i;for(t=[],i=0,n=dt.exec(r);n;)(e=r.slice(i,dt.lastIndex-n[0].length)).length&&t.push(e),t.push(ht(n)),i=dt.lastIndex,n=dt.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function yt(r){return"string"==typeof r}function vt(r){var e,t,n;if(!yt(r))throw new TypeError(vt("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=bt(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return gt.apply(null,t)}function wt(r,e,t){var n,i;if(!_e(r)&&!Ae(r))throw new TypeError(vt("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!Le(t))throw new TypeError(vt("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(Oe(e)){for(;i<n;i++)if(Oe(r[i]))return i}else for(;i<n;i++)if(r[i]===e)return i;return-1}var mt=/./;function St(r){return"boolean"==typeof r}var Et=Boolean,jt=Boolean.prototype.toString;var kt=or();function xt(r){return"object"==typeof r&&(r instanceof Et||(kt?function(r){try{return jt.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===f(r)))}function It(r){return St(r)||xt(r)}function Ot(){return new Function("return this;")()}nr(It,"isPrimitive",St),nr(It,"isObject",xt);var Tt="object"==typeof self?self:null,Vt="object"==typeof window?window:null,_t="object"==typeof global?global:null,At="object"==typeof globalThis?globalThis:null;var Ft=function(r){if(arguments.length){if(!St(r))throw new TypeError(fe("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Ot()}if(At)return At;if(Tt)return Tt;if(Vt)return Vt;if(_t)return _t;throw new Error("unexpected error. Unable to resolve global object.")}(),$t=Ft.document&&Ft.document.childNodes,Pt=Int8Array;function Nt(){return/^\s*function\s*([^(]*)/i}var Ct=/^\s*function\s*([^(]*)/i;function Rt(r){var e,t,n,i;if(("Object"===(t=f(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Ct.exec(n.toString()))return e[1]}return pe(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}nr(Nt,"REGEXP",Ct);var Zt="function"==typeof mt||"object"==typeof Pt||"function"==typeof $t?function(r){return Rt(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Rt(r).toLowerCase():e};function Lt(r){return r.constructor&&r.constructor.prototype===r}var Wt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Gt="undefined"==typeof window?void 0:window;var Xt=function(){var r;if("undefined"===Zt(Gt))return!1;for(r in Gt)try{-1===wt(Wt,r)&&h(Gt,r)&&null!==Gt[r]&&"object"===Zt(Gt[r])&&Lt(Gt[r])}catch(r){return!0}return!1}(),Bt="undefined"!=typeof window;var Mt,Ut=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Mt=i?function(){return 2!==(n(arguments)||"").length}(1,2)?function(r){return $r(r)?n(Pr.call(r)):n(r)}:n:function(r){var e,t,n,i,a,o,c;if(i=[],$r(r)){for(c=0;c<r.length;c++)i.push(c.toString());return i}if("string"==typeof r){if(r.length>0&&!h(r,"0"))for(c=0;c<r.length;c++)i.push(c.toString())}else{if(!1==(n="function"==typeof r)&&!pe(r))return i;t=ge&&n}for(a in r)t&&"prototype"===a||!h(r,a)||i.push(String(a));if(de)for(e=function(r){if(!1===Bt&&!Xt)return Lt(r);try{return Lt(r)}catch(r){return!1}}(r),c=0;c<Ut.length;c++)o=Ut[c],e&&"constructor"===o||!h(r,o)||i.push(String(o));return i};var Yt=Mt;var zt=r?function(r){return t(e(r))}:function(r){return Yt(e(r))},Ht=void 0!==Object.getOwnPropertySymbols,Dt=e.getOwnPropertySymbols;var qt=Ht?function(r){return Dt(e(r))}:function(){return[]};return function(r){var e,t,n;for(e=zt(r),t=qt(r),n=0;n<t.length;n++)e.push(t[n]);return e}}));
//# sourceMappingURL=index.js.map
