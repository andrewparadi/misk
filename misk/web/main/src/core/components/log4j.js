!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("frint-store"),require("react"),require("lodash/zipObject"),require("lodash/tail"),require("rxjs/operators/map"),require("rxjs/BehaviorSubject"),require("frint"),require("frint-react"));else if("function"==typeof define&&define.amd)define(["frint-store","react","lodash/zipObject","lodash/tail","rxjs/operators/map","rxjs/BehaviorSubject","frint","frint-react"],t);else{var n="object"==typeof exports?t(require("frint-store"),require("react"),require("lodash/zipObject"),require("lodash/tail"),require("rxjs/operators/map"),require("rxjs/BehaviorSubject"),require("frint"),require("frint-react")):t(e.FrintStore,e.React,e._.zipObject,e._.tail,e.Rx.operators,e.Rx,e.Frint,e.FrintReact);for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(window,function(e,t,n,r,o,i,a,u){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=36)}([function(e,t,n){"use strict";t.__esModule=!0;t.addLeadingSlash=function(e){return"/"===e.charAt(0)?e:"/"+e},t.stripLeadingSlash=function(e){return"/"===e.charAt(0)?e.substr(1):e};var r=t.hasBasename=function(e,t){return new RegExp("^"+t+"(\\/|\\?|#|$)","i").test(e)};t.stripBasename=function(e,t){return r(e,t)?e.substr(t.length):e},t.stripTrailingSlash=function(e){return"/"===e.charAt(e.length-1)?e.slice(0,-1):e},t.parsePath=function(e){var t=e||"/",n="",r="",o=t.indexOf("#");-1!==o&&(r=t.substr(o),t=t.substr(0,o));var i=t.indexOf("?");return-1!==i&&(n=t.substr(i),t=t.substr(0,i)),{pathname:t,search:"?"===n?"":n,hash:"#"===r?"":r}},t.createPath=function(e){var t=e.pathname,n=e.search,r=e.hash,o=t||"/";return n&&"?"!==n&&(o+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}},function(e,t,n){"use strict";e.exports=function(){}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.CHANGE="COLOR_CHANGE"}(t.COLOR||(t.COLOR={})),function(e){e.GREEN="#5cb85c",e.RED="#d9534f",e.DEFAULT="#5cb85c"}(t.COLORS||(t.COLORS={}))},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},function(e,t,n){var r=n(5);e.exports=d,e.exports.parse=i,e.exports.compile=function(e,t){return u(i(e,t))},e.exports.tokensToFunction=u,e.exports.tokensToRegExp=p;var o=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function i(e,t){for(var n,r=[],i=0,a=0,u="",l=t&&t.delimiter||"/";null!=(n=o.exec(e));){var f=n[0],p=n[1],d=n.index;if(u+=e.slice(a,d),a=d+f.length,p)u+=p[1];else{var h=e[a],v=n[2],y=n[3],g=n[4],m=n[5],b=n[6],_=n[7];u&&(r.push(u),u="");var w=null!=v&&null!=h&&h!==v,O="+"===b||"*"===b,x="?"===b||"*"===b,E=n[2]||l,j=g||m;r.push({name:y||i++,prefix:v||"",delimiter:E,optional:x,repeat:O,partial:w,asterisk:!!_,pattern:j?c(j):_?".*":"[^"+s(E)+"]+?"})}}return a<e.length&&(u+=e.substr(a)),u&&r.push(u),r}function a(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function u(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,o){for(var i="",u=n||{},s=(o||{}).pretty?a:encodeURIComponent,c=0;c<e.length;c++){var l=e[c];if("string"!=typeof l){var f,p=u[l.name];if(null==p){if(l.optional){l.partial&&(i+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be defined')}if(r(p)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var d=0;d<p.length;d++){if(f=s(p[d]),!t[c].test(f))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+JSON.stringify(f)+"`");i+=(0===d?l.prefix:l.delimiter)+f}}else{if(f=l.asterisk?encodeURI(p).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}):s(p),!t[c].test(f))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+f+'"');i+=l.prefix+f}}else i+=l}return i}}function s(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function c(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function l(e,t){return e.keys=t,e}function f(e){return e.sensitive?"":"i"}function p(e,t,n){r(t)||(n=t||n,t=[]);for(var o=(n=n||{}).strict,i=!1!==n.end,a="",u=0;u<e.length;u++){var c=e[u];if("string"==typeof c)a+=s(c);else{var p=s(c.prefix),d="(?:"+c.pattern+")";t.push(c),c.repeat&&(d+="(?:"+p+d+")*"),a+=d=c.optional?c.partial?p+"("+d+")?":"(?:"+p+"("+d+"))?":p+"("+d+")"}}var h=s(n.delimiter||"/"),v=a.slice(-h.length)===h;return o||(a=(v?a.slice(0,-h.length):a)+"(?:"+h+"(?=$))?"),a+=i?"$":o&&v?"":"(?="+h+"|$)",l(new RegExp("^"+a,f(n)),t)}function d(e,t,n){return r(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return l(e,t)}(e,t):r(e)?function(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(d(e[o],t,n).source);return l(new RegExp("(?:"+r.join("|")+")",f(n)),t)}(e,t,n):function(e,t,n){return p(i(e,n),t,n)}(e,t,n)}},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!e)return{url:t.location.pathname,isExact:!1,params:{}};var a=[],u=(0,i.default)(e,a,{end:n.exact||!1}).exec(t.location.pathname);if(!Array.isArray(u))return null;var s=u[0],c=(0,r.default)(u),l=a.map(function(e){return e.name}),f=s===t.location.pathname;if(n.exact&&!f)return null;var p=(0,o.default)(l,c);return{url:s,isExact:f,params:p}};var r=a(n(8)),o=a(n(7)),i=a(n(6));function a(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},function(e,t){e.exports=o},function(e,t){e.exports=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.default=function(e){return function(){function t(){var n=this,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);this.options=r({},{enableCache:!0,cacheLimit:1e4},o),this._history=e(o),this._history$=new a.BehaviorSubject({length:this._history.length,location:this._history.location,action:this._history.action}),this._listener=this._history.listen(function(e,t){n._history$.next({length:n._history.length,location:e,action:t})}),this._cache={},this._cacheCount=0}return o(t,[{key:"getHistory$",value:function(){return this._history$}},{key:"getHistory",value:function(){return this._history}},{key:"getLocation$",value:function(){return this.getHistory$().pipe((0,u.map)(function(e){return e.location}))}},{key:"getLocation",value:function(){return this.getHistory().location}},{key:"getMatch$",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.getHistory$().pipe((0,u.map)(function(r){return t.getMatch(e,r,n)}))}},{key:"getMatch",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=r({exact:!1},n),i=e+"|"+t.location.pathname+"|"+o.exact;if(this.options.enableCache&&this._cache[i])return this._cache[i];var a=(0,c.default)(e,t,o);return this.options.enableCache&&this._cacheCount<this.options.cacheLimit&&(this._cache[i]=a,this._cacheCount+=1),a}},{key:"destroy",value:function(){this._listener(),this._history$.complete()}},{key:"go",value:function(e){return this._history.go(e)}},{key:"push",value:function(e,t){return this._history.push(e,t)}},{key:"replace",value:function(e,t){return this._history.replace(e,t)}},{key:"goBack",value:function(){return this._history.goBack()}},{key:"goForward",value:function(){return this._history.goForward()}}]),t}()};var i,a=n(11),u=n(10),s=n(9),c=(i=s)&&i.__esModule?i:{default:i};e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;t.canUseDOM=!("undefined"==typeof window||!window.document||!window.document.createElement),t.addEventListener=function(e,t,n){return e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,n)},t.removeEventListener=function(e,t,n){return e.removeEventListener?e.removeEventListener(t,n,!1):e.detachEvent("on"+t,n)},t.getConfirmation=function(e,t){return t(window.confirm(e))},t.supportsHistory=function(){var e=window.navigator.userAgent;return(-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone"))&&(window.history&&"pushState"in window.history)},t.supportsPopStateOnHashChange=function(){return-1===window.navigator.userAgent.indexOf("Trident")},t.supportsGoWithoutReloadUsingHash=function(){return-1===window.navigator.userAgent.indexOf("Firefox")},t.isExtraneousPopstateEvent=function(e){return void 0===e.state&&-1===navigator.userAgent.indexOf("CriOS")}},function(e,t,n){"use strict";t.__esModule=!0;var r,o=n(1),i=(r=o)&&r.__esModule?r:{default:r};t.default=function(){var e=null,t=[];return{setPrompt:function(t){return(0,i.default)(null==e,"A history supports only one prompt at a time"),e=t,function(){e===t&&(e=null)}},confirmTransitionTo:function(t,n,r,o){if(null!=e){var a="function"==typeof e?e(t,n):e;"string"==typeof a?"function"==typeof r?r(a,o):((0,i.default)(!1,"A history needs a getUserConfirmation function in order to use a prompt message"),o(!0)):o(!1!==a)}else o(!0)},appendListener:function(e){var n=!0,r=function(){n&&e.apply(void 0,arguments)};return t.push(r),function(){n=!1,t=t.filter(function(e){return e!==r})}},notifyListeners:function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];t.forEach(function(e){return e.apply(void 0,n)})}}}},function(e,t,n){"use strict";n.r(t);var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function e(t,n){if(t===n)return!0;if(null==t||null==n)return!1;if(Array.isArray(t))return Array.isArray(n)&&t.length===n.length&&t.every(function(t,r){return e(t,n[r])});var o=void 0===t?"undefined":r(t);if(o!==(void 0===n?"undefined":r(n)))return!1;if("object"===o){var i=t.valueOf(),a=n.valueOf();if(i!==t||a!==n)return e(i,a);var u=Object.keys(t),s=Object.keys(n);return u.length===s.length&&u.every(function(r){return e(t[r],n[r])})}return!1}},function(e,t,n){"use strict";function r(e){return"/"===e.charAt(0)}function o(e,t){for(var n=t,r=n+1,o=e.length;r<o;n+=1,r+=1)e[n]=e[r];e.pop()}n.r(t),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=e&&e.split("/")||[],i=t&&t.split("/")||[],a=e&&r(e),u=t&&r(t),s=a||u;if(e&&r(e)?i=n:n.length&&(i.pop(),i=i.concat(n)),!i.length)return"/";var c=void 0;if(i.length){var l=i[i.length-1];c="."===l||".."===l||""===l}else c=!1;for(var f=0,p=i.length;p>=0;p--){var d=i[p];"."===d?o(i,p):".."===d?(o(i,p),f++):f&&(o(i,p),f--)}if(!s)for(;f--;f)i.unshift("..");!s||""===i[0]||i[0]&&r(i[0])||i.unshift("");var h=i.join("/");return c&&"/"!==h.substr(-1)&&(h+="/"),h}},function(e,t,n){"use strict";t.__esModule=!0,t.locationsAreEqual=t.createLocation=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=u(n(16)),i=u(n(15)),a=n(0);function u(e){return e&&e.__esModule?e:{default:e}}t.createLocation=function(e,t,n,i){var u=void 0;"string"==typeof e?(u=(0,a.parsePath)(e)).state=t:(void 0===(u=r({},e)).pathname&&(u.pathname=""),u.search?"?"!==u.search.charAt(0)&&(u.search="?"+u.search):u.search="",u.hash?"#"!==u.hash.charAt(0)&&(u.hash="#"+u.hash):u.hash="",void 0!==t&&void 0===u.state&&(u.state=t));try{u.pathname=decodeURI(u.pathname)}catch(e){throw e instanceof URIError?new URIError('Pathname "'+u.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):e}return n&&(u.key=n),i?u.pathname?"/"!==u.pathname.charAt(0)&&(u.pathname=(0,o.default)(u.pathname,i.pathname)):u.pathname=i.pathname:u.pathname||(u.pathname="/"),u},t.locationsAreEqual=function(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash===t.hash&&e.key===t.key&&(0,i.default)(e.state,t.state)}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o,i,a,u){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,i,a,u],l=0;(s=new Error(t.replace(/%s/g,function(){return c[l++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}}},function(e,t,n){"use strict";t.__esModule=!0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=f(n(1)),a=f(n(18)),u=n(17),s=n(0),c=f(n(14)),l=n(13);function f(e){return e&&e.__esModule?e:{default:e}}var p=function(){try{return window.history.state||{}}catch(e){return{}}};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,a.default)(l.canUseDOM,"Browser history needs a DOM");var t=window.history,n=(0,l.supportsHistory)(),f=!(0,l.supportsPopStateOnHashChange)(),d=e.forceRefresh,h=void 0!==d&&d,v=e.getUserConfirmation,y=void 0===v?l.getConfirmation:v,g=e.keyLength,m=void 0===g?6:g,b=e.basename?(0,s.stripTrailingSlash)((0,s.addLeadingSlash)(e.basename)):"",_=function(e){var t=e||{},n=t.key,r=t.state,o=window.location,a=o.pathname+o.search+o.hash;return(0,i.default)(!b||(0,s.hasBasename)(a,b),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+a+'" to begin with "'+b+'".'),b&&(a=(0,s.stripBasename)(a,b)),(0,u.createLocation)(a,r,n)},w=function(){return Math.random().toString(36).substr(2,m)},O=(0,c.default)(),x=function(e){o(H,e),H.length=t.length,O.notifyListeners(H.location,H.action)},E=function(e){(0,l.isExtraneousPopstateEvent)(e)||S(_(e.state))},j=function(){S(_(p()))},C=!1,S=function(e){C?(C=!1,x()):O.confirmTransitionTo(e,"POP",y,function(t){t?x({action:"POP",location:e}):L(e)})},L=function(e){var t=H.location,n=A.indexOf(t.key);-1===n&&(n=0);var r=A.indexOf(e.key);-1===r&&(r=0);var o=n-r;o&&(C=!0,P(o))},k=_(p()),A=[k.key],R=function(e){return b+(0,s.createPath)(e)},P=function(e){t.go(e)},M=0,T=function(e){1===(M+=e)?((0,l.addEventListener)(window,"popstate",E),f&&(0,l.addEventListener)(window,"hashchange",j)):0===M&&((0,l.removeEventListener)(window,"popstate",E),f&&(0,l.removeEventListener)(window,"hashchange",j))},$=!1,H={length:t.length,action:"POP",location:k,createHref:R,push:function(e,o){(0,i.default)(!("object"===(void 0===e?"undefined":r(e))&&void 0!==e.state&&void 0!==o),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");var a=(0,u.createLocation)(e,o,w(),H.location);O.confirmTransitionTo(a,"PUSH",y,function(e){if(e){var r=R(a),o=a.key,u=a.state;if(n)if(t.pushState({key:o,state:u},null,r),h)window.location.href=r;else{var s=A.indexOf(H.location.key),c=A.slice(0,-1===s?0:s+1);c.push(a.key),A=c,x({action:"PUSH",location:a})}else(0,i.default)(void 0===u,"Browser history cannot push state in browsers that do not support HTML5 history"),window.location.href=r}})},replace:function(e,o){(0,i.default)(!("object"===(void 0===e?"undefined":r(e))&&void 0!==e.state&&void 0!==o),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");var a=(0,u.createLocation)(e,o,w(),H.location);O.confirmTransitionTo(a,"REPLACE",y,function(e){if(e){var r=R(a),o=a.key,u=a.state;if(n)if(t.replaceState({key:o,state:u},null,r),h)window.location.replace(r);else{var s=A.indexOf(H.location.key);-1!==s&&(A[s]=a.key),x({action:"REPLACE",location:a})}else(0,i.default)(void 0===u,"Browser history cannot replace state in browsers that do not support HTML5 history"),window.location.replace(r)}})},go:P,goBack:function(){return P(-1)},goForward:function(){return P(1)},block:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=O.setPrompt(e);return $||(T(1),$=!0),function(){return $&&($=!1,T(-1)),t()}},listen:function(e){var t=O.appendListener(e);return T(1),function(){T(-1),t()}}};return H}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(19)),o=i(n(12));function i(e){return e&&e.__esModule?e:{default:e}}t.default=(0,o.default)(r.default),e.exports=t.default},function(e,t,n){e.exports=n(20)},function(e,t){e.exports=a},,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(2),o={value:r.COLORS.DEFAULT};t.default=function(e=o,t){switch(t.type){case r.COLOR.CHANGE:return Object.assign({},{value:t.color});default:return e}}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(3),i=r(n(29));t.default=o.combineReducers({color:i.default})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(2);t.changeColor=(e=>({type:r.COLOR.CHANGE,color:e}))},function(e,t){e.exports=u},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n(4)),i=n(32),a=n(31),u=n(2);t.default=i.observe(function(e){const t=e.get("store");return i.streamProps().setDispatch({changeColor:a.changeColor},t).set(t.getState$(),e=>({color:e.color.value})).set(e.getAppOnceAvailable$("ThreadsApp"),e=>e.get("store").getState$(),e=>({counter:e.counter.value})).get$()})(class extends o.default.Component{render(){const e={color:this.props.color,backgroundColor:this.props.color};return o.default.createElement("div",null,o.default.createElement("h5",null,"App: Log4j"),o.default.createElement("p",null,"Color value in ",o.default.createElement("strong",null,"Log4j"),": ",o.default.createElement("code",{style:e},this.props.color)),o.default.createElement("div",null,o.default.createElement("button",{className:"button",style:{backgroundColor:u.COLORS.GREEN,color:"#fff"},onClick:()=>this.props.changeColor(u.COLORS.GREEN)},"Green"),o.default.createElement("button",{className:"button",style:{backgroundColor:u.COLORS.RED,color:"#fff"},onClick:()=>this.props.changeColor(u.COLORS.RED)},"Red")),o.default.createElement("p",null,"Counter value from ",o.default.createElement("strong",null,"Threads"),": ",o.default.createElement("code",null,this.props.counter)))}})},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n(33));t.RootContainer=o.default},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(22),i=n(3),a=n(21),u=n(34),s=r(n(30)),c=n(2);t.default=o.createApp({name:"Log4jApp",providers:[{name:"component",useValue:u.RootContainer},{name:"store",useFactory:function({app:e}){return new(i.createStore({initialState:{color:{value:c.COLORS.DEFAULT}},reducer:s.default}))},deps:["app"]},{name:"router",useFactory:function(){return new a},cascade:!0}]})},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n(35));(window.app=window.app||[]).push([o.default,{regions:["main"]}])}])});
//# sourceMappingURL=log4j.js.map