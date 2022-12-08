/*! For license information please see 967.8695be7e638fc3364342.js.LICENSE.txt */
"use strict";(self.webpackChunkcolorapp=self.webpackChunkcolorapp||[]).push([[967],{5496:function(t,e,r){r.r(e),r.d(e,{assetDesignHeight:function(){return y},assetDesignWidth:function(){return v},default:function(){return b},outlines:function(){return p},palettes:function(){return d}}),r(5827),r(1539),r(6992),r(1532),r(8783),r(3948);var n=r(9784),o=(r(8674),r(1703),r(2222),r(9070),r(2526),r(1817),r(2165),r(2443),r(9341),r(3706),r(2703),r(489),r(7658),r(4747),r(8304),r(7042),r(5933)),i=r.n(o);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function c(){c=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",f=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function s(t,e,r,o){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),c=new P(o||[]);return n(a,"_invoke",{value:L(t,r,c)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var d={};function p(){}function v(){}function y(){}var m={};l(m,i,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(k([])));b&&b!==e&&r.call(b,i)&&(m=b);var w=y.prototype=p.prototype=Object.create(m);function x(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function o(n,i,c,f){var u=h(t[n],t,i);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==a(s)&&r.call(s,"__await")?e.resolve(s.__await).then((function(t){o("next",t,c,f)}),(function(t){o("throw",t,c,f)})):e.resolve(s).then((function(t){l.value=t,c(l)}),(function(t){return o("throw",t,c,f)}))}f(u.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function L(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=O(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var f=h(t,e,r);if("normal"===f.type){if(n=r.done?"completed":"suspendedYield",f.arg===d)continue;return{value:f.arg,done:r.done}}"throw"===f.type&&(n="completed",r.method="throw",r.arg=f.arg)}}}function O(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var n=h(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,d;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function k(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return v.prototype=y,n(w,"constructor",{value:y,configurable:!0}),n(y,"constructor",{value:v,configurable:!0}),v.displayName=l(y,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(E.prototype),l(E.prototype,f,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new E(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),l(w,u,"Generator"),l(w,i,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=k,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),f=r.call(i,"finallyLoc");if(c&&f){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}function f(t,e,r,n,o,i,a){try{var c=t[i](a),f=c.value}catch(t){return void r(t)}c.done?e(f):Promise.resolve(f).then(n,o)}var u,l={alpha:r.p+"6dfeb42afe3bf26cf5e9.png",color:r.p+"f236de39f26b07c882ba.jpg"},s=JSON.parse('[{"id":2147483647,"name":"Free"},{"id":16,"name":"Essential","colors":["381774","6c40b9","044f9b","00c4c3","00da6c","ffdb15","ff9600","ffcf91","c68d3c","ff2924","ffffff"]},{"id":0,"name":"Basic","colors":["c16561","000000","fb3333","ff47a2","fee297","dd66ff","72c8ff","2682ff","63fccf","38b44f","a7a7a7"]},{"id":1,"name":"Pastel","colors":["fe797a","e697b3","f25c3b","df56fc","f9efbb","8577e0","48dbfc","79e08f","bbdc59","909c84","fffcd1"]},{"id":2,"name":"Skin","colors":["fec5bb","fcd5ce","fae1dd","f8edeb","ffe5d9","ffd7ba","fec89a","e6ccb2","ddb892","b08968","7f5539"]},{"id":3,"name":"Neon","colors":["ffa19c","ff2788","ff0000","ff00ea","fffc00","c600ff","00fff0","86ffa0","deff00","00ff00","ffffe8"]},{"id":4,"name":"Dark","colors":["853c39","000000","b51818","9d3895","ffba00","660084","00219e","036475","657111","004d00","53534d"]},{"id":5,"name":"70s","colors":["001219","005f73","0a9396","94d2bd","e9d8a6","ee9b00","ca6702","bb3e03","ae2012","9b2226","861D21"],"pay":true},{"id":7,"name":"Pink","colors":["fadde1","ffc4d6","ffa6c1","ff87ab","ff5d8f","ff97b7","ffacc5","ffcad4","f4acb7","FF0A54","FF477E"]},{"id":8,"name":"Red","colors":["360815","590d22","800f2f","a4133c","c9184a","ff4d6d","ff758f","ff8fa3","ffb3c1","ffccd5","fff0f3"]},{"id":9,"name":"Orange","colors":["E04000","ff4800","ff5400","ff6000","ff6d00","ff7900","ff8500","ff9100","ff9e00","ffaa00","ffb600"]},{"id":10,"name":"Yellow","colors":["ff7b00","ff8800","ff9500","ffa200","ffaa00","ffb700","ffc300","ffd000","ffdd00","ffea00","F5E000"]},{"id":11,"name":"Brown","colors":["ffedd8","f3d5b5","e7bc91","d4a276","bc8a5f","a47148","8b5e34","6f4518","603808","583101","3D2201"]},{"id":6,"name":"Swamp","colors":["582f0e","7f4f24","936639","a68a64","b6ad90","c2c5aa","a4ac86","656d4a","414833","333d29","293121"],"pay":true},{"id":12,"name":"Green","colors":["002913","004b23","006400","007200","008000","38b000","70e000","9ef01a","ccff33","D6FF5C","E0FF85"]},{"id":13,"name":"Blue","colors":["e3f2fd","bbdefb","90caf9","64b5f6","42a5f5","2196f3","1e88e5","1976d2","1565c0","0d47a1","093371"]},{"id":14,"name":"Violet","colors":["757bc8","8187dc","8e94f2","9fa0ff","ada7ff","bbadff","cbb2fe","dab6fc","ddbdfc","e0c3fc","EBD8FD"]},{"id":15,"name":"Grey","colors":["f8f9fa","e9ecef","dee2e6","ced4da","B9C2CA","adb5bd","6c757d","495057","343a40","212529","1B1F22"]}]'),h=JSON.parse('[{"id":0,"color":"000000"},{"id":1,"color":"3d0000","pay":true},{"id":2,"color":"e07800"},{"id":3,"color":"f5cc00"},{"id":4,"color":"353d00"},{"id":5,"color":"0d1400","pay":true},{"id":6,"color":"00b86b"},{"id":7,"color":"00393d"},{"id":8,"color":"200066"},{"id":9,"color":"69008f"},{"id":10,"color":"ffffff"},{"id":11,"color":"214e1b"},{"id":12,"color":"8b9403"},{"id":13,"color":"7c1b08","pay":true},{"id":14,"color":"0d264f"},{"id":15,"color":"124aa7"},{"id":16,"color":"501482"},{"id":17,"color":"821481"},{"id":18,"color":"b31948"},{"id":19,"color":"5c5053"},{"id":20,"color":"505c51","pay":true},{"id":21,"color":"636a6f"},{"id":22,"color":"5e544f"}]'),d=s.reduce((function(t,e){return t.set(e.id,e)}),new Map),p=h.reduce((function(t,e){return t.set(e.id,e)}),new Map),v=1920,y=1080,m=[{name:"loading",image:l,spritesheet:{frames:{"loading/Aniway_logo":{frame:{x:2,y:2,w:525,h:610}},"loading/anycolor_logo":{frame:{x:529,y:484,w:708,h:109}},"loading/blob":{frame:{x:1239,y:484,w:69,h:70}},"loading/Loading_wave":{frame:{x:529,y:2,w:1079,h:480}},"loading/playADcorner":{frame:{x:1310,y:484,w:66,h:66}}},meta:{image:"loading.spritesheet.png",size:{w:1610,h:614},scale:"1"}}}],g=[(u=["Poppins"],function(){var t,e=(t=c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.increaseAssetCount(u.length),!u.length){t.next=3;break}return t.abrupt("return",new Promise((function(t,r){i().load({custom:{families:u},timeout:15e3,active:t,inactive:function(){return r(new Error("WebFontLoader failed."))},fontactive:function(t,r){return e.advanceProgress()},fontinactive:function(t,e){}})})));case 3:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){f(i,n,o,a,c,"next",t)}function c(t){f(i,n,o,a,c,"throw",t)}a(void 0)}))});return function(t){return e.apply(this,arguments)}}()),(0,n.ZP)(m)],b=g},9602:function(t,e,r){function n(t,e,r){return Math.max(e,Math.min(r,t))}function o(t){return new Promise((function(e,r){var n=new Image;n.crossOrigin="Anonymous",n.decoding="sync",n.onload=function(){return e(n)},n.onerror=function(t){return r(t)},n.src=t}))}function i(t,e){var r=document.createElement("canvas");r.width=Math.max(e.width,t.width),r.height=Math.max(e.height,t.height);var n=r.getContext("2d");if(!n)throw new Error("2D Context not available.");return n.imageSmoothingEnabled=!1,n.drawImage(e,0,0),n.globalCompositeOperation="destination-in",n.drawImage(t,0,0),r}function a(t){for(var e=0,r=0,n=0,o=0;o<t.length;++o){var i=t[o];e+=Math.pow(16711680&i,2),r+=Math.pow(65280&i,2),n+=Math.pow(255&i,2)}var a=t.length;return 16711680&Math.sqrt(e/a)|65280&Math.sqrt(r/a)|255&Math.sqrt(n/a)}r.d(e,{pi:function(){return i},po:function(){return o},q7:function(){return a},uZ:function(){return n}}),r(3689),r(5827),r(1539),r(1249),r(3290),r(2222),r(2772),r(561),r(8674),r(1703),r(7042),r(7658),r(6992),r(1532),r(8783),r(3948),r(2526),r(1817),r(2165),r(1038),r(4916),r(7601),Math.PI,Math.PI},9784:function(t,e,r){r.d(e,{sF:function(){return m},ZP:function(){return g},Mo:function(){return y}}),r(7658),r(1539),r(8674),r(7941),r(9601),r(6992),r(8783),r(3948),r(9714),r(1703),r(4916),r(9720),r(2707),r(7042),r(1038),r(7601),r(2526),r(1817),r(2165),r(9070),r(2443),r(9341),r(3706),r(2703),r(489),r(4747),r(8304);var n=r(6710),o=r(550),i=r(2126),a=r(9602),c={};function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function u(){u=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function s(t,e,r,o){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),c=new P(o||[]);return n(a,"_invoke",{value:L(t,r,c)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var d={};function p(){}function v(){}function y(){}var m={};l(m,i,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(k([])));b&&b!==e&&r.call(b,i)&&(m=b);var w=y.prototype=p.prototype=Object.create(m);function x(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function o(n,i,a,c){var u=h(t[n],t,i);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==f(s)&&r.call(s,"__await")?e.resolve(s.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(s).then((function(t){l.value=t,a(l)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function L(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=O(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var f=h(t,e,r);if("normal"===f.type){if(n=r.done?"completed":"suspendedYield",f.arg===d)continue;return{value:f.arg,done:r.done}}"throw"===f.type&&(n="completed",r.method="throw",r.arg=f.arg)}}}function O(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var n=h(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,d;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function k(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return v.prototype=y,n(w,"constructor",{value:y,configurable:!0}),n(y,"constructor",{value:v,configurable:!0}),v.displayName=l(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(E.prototype),l(E.prototype,a,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new E(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),l(w,c,"Generator"),l(w,i,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=k,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),f=r.call(i,"finallyLoc");if(c&&f){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}function l(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i=[],a=!0,c=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(t){c=!0,o=t}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}}(t,e)||h(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=h(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function h(t,e){if(t){if("string"==typeof t)return d(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(t,e):void 0}}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function p(t,e,r,n,o,i,a){try{var c=t[i](a),f=c.value}catch(t){return void r(t)}c.done?e(f):Promise.resolve(f).then(n,o)}function v(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){p(i,n,o,a,c,"next",t)}function c(t){p(i,n,o,a,c,"throw",t)}a(void 0)}))}}var y={},m={},g=function(t){return function(){var e=v(u().mark((function e(r){var f,h,d,p,m,g,O,S,j;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f=[],h=[],d=s(t);try{for(m=function(){var t,e=p.value;if(L(e))f.push({name:null!==(t=e.name)&&void 0!==t?t:e.url.toString(),url:e.url.toString(),crossOrigin:!0});else if(e.image)if(r.increaseAssetCount(),"string"==typeof e.spritesheet&&f.push({url:e.spritesheet,crossOrigin:!0}),x(e))h.push((0,a.po)(e.image).then((function(t){return n.xE.fromLoader(t,e.image,e.name,e.options)})).then((function(t){var n=c[e.name]={texture:t};return y[e.name]=n.texture,r.advanceProgress(),n})));else if(E(e)){var o=e.image,i=function(){var t=v(u().mark((function t(){var i,f,s,h,d,p;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([(0,a.po)(o.alpha),(0,a.po)(o.color)]);case 2:i=t.sent,f=l(i,2),s=f[0],h=f[1],d=(0,a.pi)(s,h),p=c[e.name]={texture:n.xE.from(d,e.options)},y[e.name]=p.texture,d.remove(),r.advanceProgress();case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();h.push(i())}},d.s();!(p=d.n()).done;)m()}catch(t){d.e(t)}finally{d.f()}return h.push(new Promise((function(t,e){if(!f.length)return t();var n=(new o.aN).add(f).pre((function(t,e){r.increaseAssetCount(),null==e||e()})).use((function(t,e){if(t.type===o.kC.TYPE.IMAGE&&void 0!==t.texture&&(y[t.name]=t.texture),t.type===o.kC.TYPE.JSON&&void 0!==t.spritesheet){var r=t.spritesheet;0===Object.keys(r.animations).length&&b(r.textures,r.animations),Object.assign(y,r.textures),w(r.animations)}null==e||e()})).load((function(t,e){Object.assign(c,e)}));n.onProgress.add((function(){return r.advanceProgress()})),n.onComplete.once((function(){return t()})),n.onError.once((function(t){return e(t)}))}))),e.next=7,Promise.all(h);case 7:g=[],O=s(t),e.prev=9,j=function(){var t=S.value;if(L(t))return"continue";var e=t.spritesheet;void 0!==e&&(r.increaseAssetCount(),g.push(new Promise((function(n,o){var a,f=L(t)?c[null!==(a=t.name)&&void 0!==a?a:t.url.toString()]:c[t.name];if(void 0===f.texture)return o(new Error("No texture for spritesheet found."));var u="string"==typeof e?c[e].url:"",l="string"==typeof e?c[e].data:e,s=new i.c(f.texture.baseTexture,l,u);s.parse((function(){0===Object.keys(s.animations).length&&b(s.textures,s.animations),Object.assign(y,s.textures),w(s.animations),r.advanceProgress(),n()}))}))))},O.s();case 12:if((S=O.n()).done){e.next=18;break}if("continue"!==j()){e.next=16;break}return e.abrupt("continue",16);case 16:e.next=12;break;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(9),O.e(e.t0);case 23:return e.prev=23,O.f(),e.finish(23);case 26:return e.next=28,Promise.all(g);case 28:case"end":return e.stop()}}),e,null,[[9,20,23,26]])})));return function(t){return e.apply(this,arguments)}}()};function b(t,e){for(var r=0,n=Object.keys(t);r<n.length;r++){var o,i=n[r],a=l(null!==(o=/(.+?)[ _]*\d+$/.exec(i))&&void 0!==o?o:[void 0,void 0],2)[1];if(void 0!==a){var c=t[i];a in e?e[a].push(c):e[a]=[c]}}}function w(t){for(var e=0,r=Object.entries(t);e<r.length;e++){var n,o=l(r[e],2),i=o[0],a=o[1];i in m?((n=m[i]).push.apply(n,function(t){if(Array.isArray(t))return d(t)}(c=a)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(c)||h(c)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),m[i].sort()):m[i]=a}var c}function x(t){return"string"==typeof t.image}function E(t){return"object"===f(t.image)}function L(t){return void 0!==t.url}}}]);