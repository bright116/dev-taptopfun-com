/*! For license information please see 885.a737189968f3bbd87ad7.js.LICENSE.txt */
"use strict";(self.webpackChunkcolorapp=self.webpackChunkcolorapp||[]).push([[885],{2885:function(t,e,r){r.r(e),r.d(e,{Finalize:function(){return rt}}),r(8304),r(489),r(1299),r(2419),r(7941),r(2526),r(7327),r(5003),r(4747),r(9337),r(3321),r(1817),r(2165),r(6992),r(8783),r(3948),r(7042),r(1038),r(4916),r(7601),r(8674),r(2443),r(9341),r(3706),r(2703),r(7658),r(9720),r(5827),r(1539),r(3290),r(1703),r(9070);var n,o=r(8844),i=r(4242),a=r(6194),c=r(1014),u=r(8942),s=r(1585),l=r(6710),f=r(5650),d=r(618),h=r(7450),y=r(3379),p=r(9784),v=r(2090),g=r(2289),w=r(6020),m=r(4785),b=r(9747),x=r(3925),O=r(1128),C=r(7493),T=r(7827),S=r(888),A=r(9635),E=r(1754),k=r(4392),j=r(3405),L=r(799),P=r(5496),B=r(2779),D=r(6806),M=r.n(D),G=r(4810);function U(t){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},U(t)}function _(){_=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,o){var i=e&&e.prototype instanceof d?e:d,a=Object.create(i.prototype),c=new S(o||[]);return n(a,"_invoke",{value:x(t,r,c)}),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f={};function d(){}function h(){}function y(){}var p={};u(p,i,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(A([])));g&&g!==e&&r.call(g,i)&&(p=g);var w=y.prototype=d.prototype=Object.create(p);function m(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function o(n,i,a,c){var u=l(t[n],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==U(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function x(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=O(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function O(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function A(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:E}}function E(){return{value:void 0,done:!0}}return h.prototype=y,n(w,"constructor",{value:y,configurable:!0}),n(y,"constructor",{value:h,configurable:!0}),h.displayName=u(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},m(b.prototype),u(b.prototype,a,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new b(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},m(w),u(w,c,"Generator"),u(w,i,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=A,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(T),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:A(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function z(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function H(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){z(i,n,o,a,c,"next",t)}function c(t){z(i,n,o,a,c,"throw",t)}a(void 0)}))}}function R(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=I(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function W(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i=[],a=!0,c=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(t){c=!0,o=t}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}}(t,e)||I(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(t,e){if(t){if("string"==typeof t)return q(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?q(t,e):void 0}}function q(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function F(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function N(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?F(Object(r),!0).forEach((function(e){$(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function Z(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function K(t,e){return K=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},K(t,e)}function V(t,e){if(e&&("object"===U(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return J(t)}function J(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function X(t){return X=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},X(t)}function $(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var Y,Q=10,tt=392;!function(t){t[t.outline=0]="outline",t[t.filters=1]="filters"}(Y||(Y={}));var et=($(n={},Y.outline,4774908),$(n,Y.filters,7987343),n),rt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&K(t,e)}(rt,t);var e,r,n,s,U,z,I,q,F=(I=rt,q=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=X(I);if(q){var r=X(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return V(this,t)});function rt(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,rt),$(J(t=F.call(this)),"returnToDrawing",new i.MZ),$(J(t),"finishedWorkOfArt",new i.MZ),$(J(t),"stage",void 0),$(J(t),"buttonContainer",void 0),$(J(t),"backButton",void 0),$(J(t),"finishButton",void 0),$(J(t),"sharingContainer",void 0),$(J(t),"shareButton",void 0),$(J(t),"downloadButton",void 0),$(J(t),"imageContainer",void 0),$(J(t),"savingMessage",void 0),$(J(t),"overlayColorList",void 0),$(J(t),"filterList",void 0),$(J(t),"filterButtons",[]),$(J(t),"categoryList",void 0),$(J(t),"categoryButtons",[]),$(J(t),"colorButtonTexture",void 0),$(J(t),"toolTip",void 0),$(J(t),"toolTipTween",void 0),$(J(t),"filterListHeight",0),$(J(t),"workOfArt",void 0),$(J(t),"share",void 0),t.stage=new f.A(J(t)),t.stage.anchorTo(d.Uq.Fill),t.stage.layoutController=new h.I(h.J.PreferredSize,h.J.PreferredSize,{minHeight:0,minWidth:0,get preferredHeight(){return A.pixi.stageHeight},get preferredWidth(){return A.pixi.stageWidth}}),t.imageContainer=t.stage.addChild(new v.d),t.buttonContainer=t.stage.addChild(new v.d),t.backButton=t.buttonContainer.addChild(new y.y(p.Mo["ui/back_button"])),t.backButton.released.connect((function(){t.returnToDrawing.emit()})),t.backButton.over.connect((function(e){return t.showTooltip(e.getLocalPosition(t.stage.displayObject),"Back to drawing")})),t.backButton.out.connect((function(){return t.hideTooltip()})),t.finishButton=t.buttonContainer.addChild(new y.y(p.Mo["ui/next_button"])),t.finishButton.released.connect((function(){t.saveDrawing()})),t.finishButton.over.connect((function(e){return t.showTooltip(e.getLocalPosition(t.stage.displayObject),"Save and go to Gallery")})),t.finishButton.out.connect((function(){return t.hideTooltip()})),t.sharingContainer=t.buttonContainer.addChild(new v.d),t.downloadButton=t.sharingContainer.addChild(new y.y(p.Mo["ui/download_button"])),t.downloadButton.released.connect((function(){return t.downloadDrawing()})),t.downloadButton.over.connect((function(e){return t.showTooltip(e.getLocalPosition(t.stage.displayObject),"Download your work of art")})),t.downloadButton.out.connect((function(){return t.hideTooltip()})),t.shareButton=t.sharingContainer.addChild(new y.y(p.Mo["ui/share_button"])),t.shareButton.released.connect((function(){return t.shareDrawing()})),t.shareButton.over.connect((function(e){return t.showTooltip(e.getLocalPosition(t.stage.displayObject),"Share your work of art")})),t.shareButton.out.connect((function(){return t.hideTooltip()})),t.shareButton.visible=!1,t.savingMessage=t.stage.addChild(new C.sm("Saving...",C.H.MiddleCenter,N(N({},L.h),{},{fill:"#000",fontSize:72,stroke:"#FFFFFFBB",strokeThickness:4}))),t.savingMessage.anchorTo(d.Uq.Fill),t.colorButtonTexture=p.Mo["ui/Palette_button"],t.categoryList=t.stage.addChild(new O.X(O.I.Horizontal));var e=W(t.createCategoryButton("Filters",Y.filters),2),r=e[0],n=e[1];t.categoryList.addChild(r),t.categoryButtons.push({button:r,text:n,category:Y.filters});var o=W(t.createCategoryButton("Outline",Y.outline),2),a=o[0],s=o[1];t.categoryList.addChild(a),t.categoryButtons.push({button:a,text:s,category:Y.outline}),t.overlayColorList=t.stage.addChild(new O.X(O.I.Vertical));var m,b=R(P.outlines);try{var x=function(){var e=W(m.value,2)[1],r=t.overlayColorList.addChild(new y.y(t.colorButtonTexture));r.tint=(0,u.qm)(e.color);var n=r.tapped.connect((function(){t.changeOverlayColor(e)}));r.tapOnly=!0;var o="outline_".concat(e.id);if(e.pay&&!(0,B.K)(o)){var i=S.ZP.getRewardedAction();n.enabled=!1;var a=r.addChild(new v.d);a.anchorTo(d.Uq.Fill);var c=new w.I(p.Mo["loading/playADcorner"]);c.anchorTo(d.Uq.TopRight,{x:2,y:2},void 0,!0),a.addChild(c);var s=r.tapped.connect(H(_().mark((function r(){var c,u,l;return _().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return s.disconnect(),c=M().EGAAdType.Undefined,i===S.Us.VideoAd&&(c=M().EGAAdType.RewardedVideo),u=E.Oz,r.prev=4,r.next=7,S.ZP.consumeRewardedAction(i);case 7:l=r.sent,u=l.mediator,D.GameAnalytics.addDesignEvent("Purchase:Outline:".concat(e.color),void 0,{ad:"true"}),D.GameAnalytics.addAdEvent(M().EGAAdAction.Show,c,u,"Purchased outline",{name:e.color}),r.next=17;break;case 13:r.prev=13,r.t0=r.catch(4),D.GameAnalytics.addDesignEvent("Purchase:Outline:".concat(e.color),void 0,{ad:"false"}),r.t0 instanceof S.sN&&D.GameAnalytics.addAdEvent(M().EGAAdAction.FailedShow,c,r.t0.mediator,"Purchased outline",{name:e.color});case 17:return r.prev=17,D.GameAnalytics.addAdEvent(M().EGAAdAction.RewardReceived,c,u,"Purchased outline",{name:e.color}),n.enabled=!0,a.destroy(!0),(0,B.n)(o),t.changeOverlayColor(e),r.finish(17);case 24:case"end":return r.stop()}}),r,null,[[4,13,17,24]])}))))}};for(b.s();!(m=b.n()).done;)x()}catch(t){b.e(t)}finally{b.f()}t.filterList=t.stage.addChild(new O.X(O.I.Horizontal));for(var k=function(){var e=W(U[G],2),r=e[0],n=e[1],o=t.filterList.addChild(new v.d),i=new c.TC;i.beginFill(16777215,1),i.lineStyle(4,11513517,1,1),i.drawRoundedRect(4,4,tt,tt,1);var a=o.addChild(new g.s(i));a.anchorTo(d.Uq.TopCenter,{x:0,y:0},void 0,!0);var u=a.addChild(new y.y(l.xE.WHITE));u.layoutController=new h.I(h.J.PreferredSize,h.J.PreferredSize,u),u.anchorTo(d.Uq.TopLeft,{x:4,y:4});var s=u.tapped.connect((function(){t.changeEffect({name:r})}));u.tapOnly=!0;var f=o.addChild(new C.sm(r,C.H.TopCenter,N(N({},L.h),{},{fontSize:56,stroke:"#FFFFFFBB",strokeThickness:8})));f.anchorTo(d.Uq.TopEdge,{x:0,y:40}),o.preferredWidth=400,o.preferredHeight=400,t.filterListHeight=Math.max(t.filterListHeight,o.preferredHeight),t.filterButtons.push({button:u,text:f,effectName:r});var m="filter_".concat(r);if(n.pay&&!(0,B.K)(m)){var b=S.ZP.getRewardedAction();s.enabled=!1;var x=a.addChild(new v.d);x.anchorTo(d.Uq.Fill);var O=new w.I(p.Mo["loading/playADcorner"]);O.anchorTo(d.Uq.TopRight,{x:0,y:0},void 0,!0),x.addChild(O);var T=u.tapped.connect(H(_().mark((function e(){var n,o,i;return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T.disconnect(),n=M().EGAAdType.Undefined,b===S.Us.VideoAd&&(n=M().EGAAdType.RewardedVideo),o=E.Oz,e.prev=4,e.next=7,S.ZP.consumeRewardedAction(b);case 7:i=e.sent,o=i.mediator,D.GameAnalytics.addDesignEvent("Purchase:Effect:".concat(r),void 0,{ad:"true"}),D.GameAnalytics.addAdEvent(M().EGAAdAction.Show,n,o,"Purchased effect",{name:r}),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(4),D.GameAnalytics.addDesignEvent("Purchase:Effect:".concat(r),void 0,{ad:"false"}),e.t0 instanceof S.sN&&D.GameAnalytics.addAdEvent(M().EGAAdAction.FailedShow,n,e.t0.mediator,"Purchased effect",{name:r});case 17:return e.prev=17,D.GameAnalytics.addAdEvent(M().EGAAdAction.RewardReceived,n,o,"Purchased effect",{name:r}),s.enabled=!0,x.destroy(!0),(0,B.n)(m),t.changeEffect({name:r}),e.finish(17);case 24:case"end":return e.stop()}}),e,null,[[4,13,17,24]])}))))}},G=0,U=Object.entries(j.Z);G<U.length;G++)k();var z=t.stage.addChild(new T.N(p.Mo["ui/tooltip_box"],26,26,35,35));z.pivot={x:0,y:.5},z.visible=!1;var I=z.addChild(new C.sm("",C.H.TopLeft,N(N({},L.h),{},{fill:"#fff",fontSize:42})));return I.anchorTo(d.Uq.TopLeft,{x:20,y:0}),z.layoutController=new h.I(h.J.PreferredSize,h.J.PreferredSize,{minHeight:0,minWidth:0,get preferredHeight(){return I.preferredHeight+10},get preferredWidth(){return I.preferredWidth+z.leftWidth+20}}),t.toolTip=[z,I],t.on("added",(function(){return t.added()})),t.on("removed",(function(){return t.unload()})),A.pixi.orientationChanged.connect((function(){return t.orientationChanged()})),t.orientationChanged(),t.selectCategory(Y.filters),t}return e=rt,r=[{key:"orientationChanged",value:function(){var t,e,r={x:null!==(t=null===k.gS||void 0===k.gS?void 0:k.gS.drawing.width)&&void 0!==t?t:0,y:null!==(e=null===k.gS||void 0===k.gS?void 0:k.gS.drawing.height)&&void 0!==e?e:0},n=u.tq.any?180:0;if(A.pixi.isPortrait()){this.buttonContainer.anchor=(0,d.w1)(d.Uq.TopEdge),this.buttonContainer.offset=(0,d.Gz)(E.Kj+n,E.Kj,E.Kj,0),this.backButton.anchorTo(d.Uq.TopLeft,{x:0,y:0}),this.finishButton.anchorTo(d.Uq.TopRight,{x:0,y:0}),this.sharingContainer.anchorTo(d.Uq.TopEdge,{x:360,y:0}),this.sharingContainer.layoutController=new m.D7(m.Nm.Horizontal,{x:Q,y:0},m.WD.End,m.xM.Start);var o=this.categoryButtons.reduce((function(t,e){var r=e.button;return Math.max(t,r.preferredHeight+20)}),0),i=this.categoryButtons.reduce((function(t,e){return t+e.button.preferredWidth}),0)+Q;this.categoryList.sizeDelta={x:i,y:o},this.categoryList.layoutController=new b.G(Q,d.Uq.TopLeft),this.categoryList.anchorTo(d.Uq.BottomCenter,{x:0,y:this.filterListHeight+10}),this.overlayColorList.anchorTo(d.Uq.BottomEdge,{x:20,y:10},{x:0,y:this.filterListHeight}),this.overlayColorList.direction=O.I.Horizontal,this.overlayColorList.layoutController=new m.D7(m.Nm.Vertical,{x:10,y:10},m.WD.Start),this.filterList.anchorTo(d.Uq.BottomEdge,{x:0,y:10},{x:0,y:this.filterListHeight}),this.filterList.direction=O.I.Horizontal,this.filterList.layoutController=new b.G(Q,d.Uq.TopLeft,{x:10,y:0}),this.imageContainer.anchorTo(d.Uq.Center,void 0,r),this.imageContainer.moveOffset({x:0,y:-200})}else{this.buttonContainer.anchor=(0,d.w1)(d.Uq.LeftEdge),this.buttonContainer.offset=(0,d.Gz)(E.Kj,E.Kj+n,0,E.Kj),this.finishButton.anchorTo(d.Uq.TopLeft,{x:0,y:0}),this.backButton.anchorTo(d.Uq.BottomLeft,{x:0,y:0}),this.sharingContainer.anchorTo(d.Uq.LeftEdge,{x:0,y:320}),this.sharingContainer.layoutController=new m.D7(m.Nm.Vertical,{x:Q,y:0},m.WD.Start,m.xM.Start);var a=this.categoryButtons.reduce((function(t,e){return t+e.button.preferredHeight+10}),0);this.categoryList.sizeDelta={x:500,y:a+10},this.categoryList.layoutController=new x.Z(10,d.Uq.TopEdge),this.categoryList.anchorTo(d.Uq.TopRight,{x:0,y:E.Kj});var c=this.categoryList.sizeDelta.y+E.Kj;this.overlayColorList.anchorTo(d.Uq.RightEdge),this.overlayColorList.offset=(0,d.Gz)(-510,c,10,0),this.overlayColorList.direction=O.I.Vertical,this.overlayColorList.layoutController=new m.D7(m.Nm.Horizontal,void 0,m.WD.End),this.filterList.anchorTo(d.Uq.RightEdge),this.filterList.offset=(0,d.Gz)(-500,c,10,0),this.filterList.direction=O.I.Vertical,this.filterList.layoutController=new x.Z(Q,d.Uq.TopCenter),this.imageContainer.anchorTo(d.Uq.Center,void 0,r),this.imageContainer.moveOffset({x:-200,y:0})}}},{key:"added",value:function(){D.GameAnalytics.addDesignEvent("View:Finalize"),this.savingMessage.visible=!1}},{key:"unload",value:function(){delete this.share,this.shareButton.visible=!1,delete this.workOfArt;var t,e=R(this.imageContainer.removeAllChildren());try{for(e.s();!(t=e.n()).done;)t.value.displayObject.destroy({children:!0,texture:!0,baseTexture:!0})}catch(t){e.e(t)}finally{e.f()}var r,n=R(this.filterButtons);try{for(n.s();!(r=n.n()).done;){var o=r.value.button;o.texture!==l.xE.WHITE&&o.texture.destroy(!0),o.texture=l.xE.WHITE}}catch(t){n.e(t)}finally{n.f()}}},{key:"hideTooltip",value:function(){this.toolTipTween&&(0,a.Od)(this.toolTipTween);var t=W(this.toolTip,1)[0];t.alpha=0,t.visible=!1}},{key:"showTooltip",value:function(t,e){var r=A.pixi.stageWidth,n=W(this.toolTip,2),o=n[0],i=n[1];i.text=e,i.measure(),o.measure(),o.updateLayout(),t.x+=Math.min(0,r-(t.x+o.size.x+20)),o.anchoredPosition=t,this.toolTipTween&&(0,a.Od)(this.toolTipTween),o.alpha=0,this.toolTipTween=new a.kX(o).to({alpha:1},300).onStart((function(){o.visible=!0})).delay(500).start()}},{key:"createCategoryButton",value:function(t,e){var r=this,n=new v.d,o=n.addChild(new T.N(p.Mo["ui/buttonBg"],53,53,53,53));o.tint=0,o.alpha=.25,o.anchorTo(d.Uq.Fill,{x:20,y:0}),o.moveOffset({x:0,y:20});var i=n.addChild(new T.N(p.Mo["ui/buttonBg"],53,53,53,53));i.anchorTo(d.Uq.Fill,{x:20,y:0}),i.tint=et[e];var a=n.addChild(new C.sm(t,C.H.TopCenter,N(N({},L.h),{},{fontSize:64})));return a.anchorTo(d.Uq.Center),n.preferredWidth=a.preferredWidth+240,n.preferredHeight=76,n.displayObject.interactive=!0,n.displayObject.cursor="pointer",n.displayObject.on("pointerup",(function(){r.selectCategory(e)})),[n,a]}},{key:"selectCategory",value:function(t){this.filterList.visible=!1,this.overlayColorList.visible=!1;var e,r=R(this.categoryButtons);try{for(r.s();!(e=r.n()).done;){var n=e.value,o=n.text,i=n.category===t;o.style.fill=i?L.T.selectedColor:L.T.unselectedColor}}catch(t){r.e(t)}finally{r.f()}t===Y.filters?this.filterList.visible=!0:t===Y.outline&&(this.overlayColorList.visible=!0)}},{key:"changeOverlayColor",value:function(t){if(void 0===k.gS)throw new Error("Missing drawing data.");k.gS.postprocess.outlineColor=t.id,this.updatePreview(),this.updateFilterButtons()}},{key:"changeEffect",value:function(t){if(void 0===k.gS)throw new Error("Missing drawing data.");var e=k.gS.postprocess;void 0===t?delete e.effect:e.effect=t,this.updatePreview()}},{key:"loadImage",value:(z=H(_().mark((function t(){var e,r;return _().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0!==k.gS){t.next=2;break}throw new Error("Missing drawing data.");case 2:if(e=k.gS.drawing,this.workOfArt=A.worksOfArt.composeWorkOfArt(k.gS),(r=new c.TC).beginFill(0,.33),r.drawRoundedRect(5,e.height-15,e.width-10,45,5),r.beginFill(16777215,1),r.lineStyle(10,11513517,1,1),r.drawRoundedRect(0,0,e.width,e.height,1),this.imageContainer.addChild(new g.s(r)).addChild(new w.I(this.workOfArt)),this.updateFilterButtons(),this.orientationChanged(),void 0===navigator.share){t.next=19;break}return t.next=17,A.worksOfArt.getShare(this.imageContainer.displayObject);case 17:this.share=t.sent,this.shareButton.visible=void 0===navigator.canShare||navigator.canShare(this.share);case 19:case"end":return t.stop()}}),t,this)}))),function(){return z.apply(this,arguments)})},{key:"updatePreview",value:function(){if(void 0===k.gS)throw new Error("Missing drawing data.");if(void 0===this.workOfArt)throw new Error("Missing drawing data.");A.worksOfArt.composeWorkOfArt(k.gS,this.workOfArt)}},{key:"updateFilterButtons",value:function(){var t,e=R(this.filterButtons);try{for(e.s();!(t=e.n()).done;){var r=t.value,n=r.button,o=r.effectName,i=N({},k.gS);i.postprocess=N(N({},i.postprocess),{},{effect:{name:o}}),n.texture instanceof l.TI?A.worksOfArt.composeWorkOfArt(i,n.texture):n.texture=A.worksOfArt.composeWorkOfArt(i,{x:tt,y:tt})}}catch(t){e.e(t)}finally{e.f()}}},{key:"saveDrawing",value:(U=H(_().mark((function t(){var e,r;return _().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0!==k.gS){t.next=2;break}throw new Error("Missing drawing state.");case 2:if(!this.savingMessage.visible){t.next=4;break}return t.abrupt("return");case 4:return this.savingMessage.visible=!0,t.prev=5,t.next=8,A.worksOfArt.saveWorkOfArt(k.gS,this.workOfArt);case 8:t.next=12;break;case 10:t.prev=10,t.t0=t.catch(5);case 12:void 0!==k.gS&&(r=(0,G.Wk)(k.gS.drawingData),null===(e=u.kN[r])||void 0===e||e.destroy(!0)),this.finishedWorkOfArt.emit(),this.savingMessage.visible=!1;case 15:case"end":return t.stop()}}),t,this,[[5,10]])}))),function(){return U.apply(this,arguments)})},{key:"shareDrawing",value:(s=H(_().mark((function t(){return _().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o.Z.gameplayStop(),t.prev=1,D.GameAnalytics.addDesignEvent("Share:Start:".concat(null===k.gS||void 0===k.gS?void 0:k.gS.drawingData.id)),t.next=5,A.worksOfArt.getShare(this.imageContainer.displayObject);case 5:return this.share=t.sent,t.next=8,navigator.share(this.share);case 8:D.GameAnalytics.addDesignEvent("Share:Complete:".concat(null===k.gS||void 0===k.gS?void 0:k.gS.drawingData.id)),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(1),D.GameAnalytics.addDesignEvent("Share:Fail:".concat(null===k.gS||void 0===k.gS?void 0:k.gS.drawingData.id));case 15:o.Z.gameplayStart();case 16:case"end":return t.stop()}}),t,this,[[1,11]])}))),function(){return s.apply(this,arguments)})},{key:"downloadDrawing",value:(n=H(_().mark((function t(){return _().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A.worksOfArt.download(this.imageContainer.displayObject);case 2:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})}],r&&Z(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),rt}(s.W2)},9747:function(t,e,r){r.d(e,{G:function(){return u}}),r(3299),r(9653),r(9070),r(1703),r(7042),r(1539),r(1038),r(8783),r(4916),r(7601),r(2526),r(1817),r(2165),r(6992),r(3948);var n=r(618);function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var u=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{x:0,y:0};i(this,t),c(this,"spacing",void 0),c(this,"anchorPreset",void 0),c(this,"padding",void 0),this.spacing=e,this.anchorPreset=r,this.padding=n}var e,r;return e=t,(r=[{key:"isDirty",value:function(){return!1}},{key:"setLayout",value:function(t){var e,r=(0,n.w1)(this.anchorPreset),i=t.size,a=(i.x,i.y),c={x:this.padding.x,y:this.padding.y},u=function(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,u=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){u=!0,a=t},f:function(){try{c||null==r.return||r.return()}finally{if(u)throw a}}}}(t.children());try{for(u.s();!(e=u.n()).done;){var s=e.value,l=s.layoutController?s.sizeDelta.x:Math.max(s.preferredWidth,s.minWidth),f=s.layoutController?s.sizeDelta.y:Math.max(s.preferredHeight,s.minHeight);s.offset.min.x=l*r.min.x+c.x,s.offset.min.y=a*r.min.y,s.offset.max.x=l*r.max.x+c.x,s.offset.max.y=a*r.max.y,Math.abs(r.max.x-r.min.x)<=Number.EPSILON&&(s.offset.min.x-=l*r.min.x,s.offset.max.x+=l-l*r.max.x),Math.abs(r.max.y-r.min.y)<=Number.EPSILON&&(s.offset.min.y-=f*r.min.y,s.offset.max.y+=f-f*r.max.y),c.x+=l+this.spacing}}catch(t){u.e(t)}finally{u.f()}}}])&&a(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}()},3925:function(t,e,r){r.d(e,{Z:function(){return u}}),r(3299),r(9653),r(9070),r(1703),r(7042),r(1539),r(1038),r(8783),r(4916),r(7601),r(2526),r(1817),r(2165),r(6992),r(3948);var n=r(618);function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var u=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{x:0,y:0};i(this,t),c(this,"spacing",void 0),c(this,"anchorPreset",void 0),c(this,"padding",void 0),this.spacing=e,this.anchorPreset=r,this.padding=n}var e,r;return e=t,(r=[{key:"isDirty",value:function(){return!1}},{key:"setLayout",value:function(t){var e,r=(0,n.w1)(this.anchorPreset),i=t.size,a=i.x,c=(i.y,{x:this.padding.x,y:this.padding.y}),u=function(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,u=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){u=!0,a=t},f:function(){try{c||null==r.return||r.return()}finally{if(u)throw a}}}}(t.children());try{for(u.s();!(e=u.n()).done;){var s=e.value,l=s.layoutController?s.sizeDelta.x:Math.max(s.preferredWidth,s.minWidth),f=s.layoutController?s.sizeDelta.y:Math.max(s.preferredHeight,s.minHeight);s.offset.min.x=a*r.min.x,s.offset.min.y=f*r.min.y+c.y,s.offset.max.x=a*r.max.x,s.offset.max.y=f*r.max.y+c.y,Math.abs(r.max.x-r.min.x)<=Number.EPSILON&&(s.offset.min.x-=l*r.min.x,s.offset.max.x+=l-l*r.max.x),Math.abs(r.max.y-r.min.y)<=Number.EPSILON&&(s.offset.min.y-=f*r.min.y,s.offset.max.y+=f-f*r.max.y),c.y+=f+this.spacing}}catch(t){u.e(t)}finally{u.f()}}}])&&a(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}()},2289:function(t,e,r){r.d(e,{s:function(){return m}}),r(6992),r(1539),r(8783),r(4129),r(3948),r(1703),r(9070),r(8304),r(489),r(1299),r(2419),r(4819),r(5003),r(2526),r(1817),r(2165);var n=r(618);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function a(){return a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=c(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},a.apply(this,arguments)}function c(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=f(t)););return t}function u(t,e){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},u(t,e)}function s(t,e){if(e&&("object"===o(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return l(t)}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},f(t)}function d(t,e,r){!function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.set(t,r)}function h(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function y(t,e,r){return function(t,e,r){if(e.set)e.set.call(t,r);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=r}}(t,v(t,e,"set"),r),r}function p(t,e){return function(t,e){return e.get?e.get.call(t):e.value}(t,v(t,e,"get"))}function v(t,e,r){if(!e.has(t))throw new TypeError("attempted to "+r+" private field on non-instance");return e.get(t)}var g=new WeakMap,w=new WeakMap,m=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&u(t,e)}(v,t);var e,r,n,o,c=(n=v,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=f(n);if(o){var r=f(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return s(this,t)});function v(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,v),h(l(e=c.call(this,t)),"minWidth",0),h(l(e),"minHeight",0),d(l(e),g,{writable:!0,value:void 0}),d(l(e),w,{writable:!0,value:void 0}),e.offset={min:{x:0,y:0},max:{x:t.width,y:t.height}},e.minWidth=0,e.minHeight=0,e}return e=v,(r=[{key:"updateLayout",value:function(){this.layoutDirty&&(this.displayObject.scale.set(1),this.displayObject.width=this.size.x,this.displayObject.height=this.size.y),a(f(v.prototype),"updateLayout",this).call(this)}},{key:"preferredWidth",get:function(){var t;return null!==(t=p(this,g))&&void 0!==t?t:this.displayObject.width},set:function(t){y(this,g,t)}},{key:"preferredHeight",get:function(){var t;return null!==(t=p(this,w))&&void 0!==t?t:this.displayObject.height},set:function(t){y(this,w,t)}}])&&i(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),v}(n.u1)}}]);