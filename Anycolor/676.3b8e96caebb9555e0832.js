"use strict";(self.webpackChunkcolorapp=self.webpackChunkcolorapp||[]).push([[676],{1754:function(t,e,n){n.d(e,{Hw:function(){return a},Kj:function(){return o},Oz:function(){return u},bB:function(){return r},lJ:function(){return i}});var r=20,o=20,i=.5,a=6,u="free"},2779:function(t,e,n){function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,{K:function(){return s},n:function(){return f}}),n(6992),n(1539),n(189),n(8783),n(3948),n(8862),n(1038),n(7042),n(4916),n(7601),n(2526),n(1817),n(2165),n(1703);var o="purchased_".concat("colorapp"),i=new Set;try{var a,u=sessionStorage.getItem(o),c=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t))){n&&(t=n);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return u=t.done,t},e:function(t){c=!0,a=t},f:function(){try{u||null==n.return||n.return()}finally{if(c)throw a}}}}(u?JSON.parse(u):[]);try{for(c.s();!(a=c.n()).done;){var l=a.value;i.add(l)}}catch(t){c.e(t)}finally{c.f()}}catch(t){i.clear()}function f(t){i.add(t);try{sessionStorage.setItem(o,JSON.stringify(Array.from(i.values())))}catch(t){}}function s(t){return i.has(t)}},7133:function(t,e,n){n.d(e,{v:function(){return h}}),n(2222),n(6649),n(6078),n(2526),n(1817),n(1539),n(1703),n(9653),n(9070),n(8304),n(489),n(1299),n(2419),n(2165),n(6992),n(8783),n(3948);var r=n(9658),o=n(4242),i=n(6177);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,d(r.key),r)}}function l(t,e){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},l(t,e)}function f(t,e){if(e&&("object"===a(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return s(t)}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y(t){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},y(t)}function p(t,e,n){return(e=d(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d(t){var e=function(t,e){if("object"!==a(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e);if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t,"string");return"symbol"===a(e)?e:String(e)}function h(t){return function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&l(t,e)}(b,t);var e,n,a,d,h=(a=b,d=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=y(a);if(d){var n=y(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return f(this,t)});function b(){var t;u(this,b);for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return p(s(t=h.call.apply(h,[this].concat(n))),"pressed",new o.MZ),p(s(t),"released",new o.MZ),p(s(t),"tapped",new o.MZ),p(s(t),"releasedoutside",new o.MZ),p(s(t),"over",new o.MZ),p(s(t),"out",new o.MZ),p(s(t),"lastPos",new r.E9),p(s(t),"tapOnly",!1),t}return e=b,(n=[{key:"downHandler",value:function(t){this.tapOnly||(t.stopPropagation(),this.pressed.emit(t.data)),this.lastPos.copyFrom(t.data.global)}},{key:"upHandler",value:function(t){this.tapOnly||(t.stopPropagation(),this.released.emit(t.data)),(0,i.TE)(this.lastPos,t.data.global)<=5&&this.tapped.emit(t.data)}},{key:"outsideHandler",value:function(t){this.tapOnly||(t.stopPropagation(),this.releasedoutside.emit(t.data))}},{key:"overHandler",value:function(t){this.over.emit(t.data)}},{key:"outHandler",value:function(t){this.out.emit(t.data)}},{key:"interactive",get:function(){return this.displayObject.interactive},set:function(t){this.displayObject.interactive=t,t?(this.displayObject.on("pointerdown",this.downHandler,this),this.displayObject.on("pointerup",this.upHandler,this),this.displayObject.on("pointerupoutside",this.outsideHandler,this),this.displayObject.on("pointercancel",this.outsideHandler,this),this.displayObject.on("pointerover",this.overHandler,this),this.displayObject.on("pointerout",this.outHandler,this)):(this.displayObject.off("pointerdown",this.downHandler,this),this.displayObject.off("pointerup",this.upHandler,this),this.displayObject.off("pointerupoutside",this.outsideHandler,this),this.displayObject.off("pointercancel",this.outsideHandler,this),this.displayObject.off("pointerover",this.overHandler,this),this.displayObject.off("pointerout",this.outHandler,this))}},{key:"cursor",get:function(){return this.displayObject.cursor},set:function(t){this.displayObject.cursor=t}},{key:"interactiveChildren",get:function(){return this.displayObject.interactiveChildren},set:function(t){this.displayObject.interactiveChildren=t}}])&&c(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),b}(t)}},4785:function(t,e,n){n.d(e,{D7:function(){return d},Nm:function(){return r},WD:function(){return o},xM:function(){return i}}),n(1703),n(3299),n(9653),n(7658),n(6649),n(6078),n(2526),n(1817),n(1539),n(9070),n(7042),n(1038),n(8783),n(4916),n(7601),n(2165),n(6992),n(3948);var r,o,i,a=n(6177);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function c(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw i}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,p(r.key),r)}}function y(t,e,n){return(e=p(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t){var e=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e);if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t,"string");return"symbol"===u(e)?e:String(e)}!function(t){t[t.Horizontal=0]="Horizontal",t[t.Vertical=1]="Vertical"}(r||(r={})),function(t){t[t.Start=0]="Start",t[t.End=1]="End",t[t.Center=2]="Center"}(o||(o={})),function(t){t[t.Start=0]="Start",t[t.End=1]="End",t[t.Center=2]="Center",t[t.Stretch=3]="Stretch"}(i||(i={}));var d=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{x:0,y:0},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o.Start,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:i.Start,u=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{x:0,y:0};f(this,t),y(this,"direction",void 0),y(this,"spacing",void 0),y(this,"justify",void 0),y(this,"align",void 0),y(this,"wrap",void 0),y(this,"padding",void 0),this.direction=e,this.spacing=n,this.justify=r,this.align=a,this.wrap=u,this.padding=c}var e,n;return e=t,(n=[{key:"isDirty",value:function(){return!1}},{key:"alignmentToAnchor",value:function(t){if(t===i.Start)return{min:{x:0,y:0},max:{x:0,y:0}};if(t===i.End)return{min:{x:1,y:1},max:{x:1,y:1}};if(t===i.Center)return{min:{x:.5,y:.5},max:{x:.5,y:.5}};if(t===i.Stretch)return{min:{x:0,y:0},max:{x:1,y:1}};throw new Error("Unknown alignment")}},{key:"setLayout",value:function(t){var e=this.alignmentToAnchor(this.align),n=t.size,o=t.size,i=o.x,a=o.y,u={x:this.padding.x,y:this.padding.y},l={x:0,y:0},f=[];if(this.direction===r.Vertical){var s,y=c(t.children());try{for(y.s();!(s=y.n()).done;){var p=s.value,d=p.layoutController?p.sizeDelta.x:Math.max(p.preferredWidth,p.minWidth),h=p.layoutController?p.sizeDelta.y:Math.max(p.preferredHeight,p.minHeight);p.offset.min.x=i*e.min.x+u.x,p.offset.min.y=h*e.min.y+u.y,p.offset.max.x=i*e.max.x+u.x,p.offset.max.y=h*e.max.y+u.y,Math.abs(e.max.x-e.min.x)<=Number.EPSILON&&(p.offset.min.x-=d*e.min.x,p.offset.max.x+=d-d*e.max.x),Math.abs(e.max.y-e.min.y)<=Number.EPSILON&&(p.offset.min.y-=h*e.min.y,p.offset.max.y+=h-h*e.max.y),l.y=n.y-(u.y+h),f.push(p),u.y+=h+this.spacing.y,this.wrap&&u.y+h>n.y&&(this.doJustify(l,f),u.y=0,u.x+=d+this.spacing.x)}}catch(t){y.e(t)}finally{y.f()}}else{var b,m=c(t.children());try{for(m.s();!(b=m.n()).done;){var v=b.value,g=v.layoutController?v.sizeDelta.x:Math.max(v.preferredWidth,v.minWidth),O=v.layoutController?v.sizeDelta.y:Math.max(v.preferredHeight,v.minHeight);v.offset.min.x=g*e.min.x+u.x,v.offset.min.y=a*e.min.y+u.y,v.offset.max.x=g*e.max.x+u.x,v.offset.max.y=a*e.max.y+u.y,Math.abs(e.max.x-e.min.x)<=Number.EPSILON&&(v.offset.min.x-=g*e.min.x,v.offset.max.x+=g-g*e.max.x),Math.abs(e.max.y-e.min.y)<=Number.EPSILON&&(v.offset.min.y-=O*e.min.y,v.offset.max.y+=O-O*e.max.y),l.x=n.x-(u.x+g),f.push(v),u.x+=g+this.spacing.x,this.wrap&&u.x+g>n.x&&(this.doJustify(l,f),u.x=0,u.y+=O+this.spacing.y)}}catch(t){m.e(t)}finally{m.f()}}this.doJustify(l,f)}},{key:"doJustify",value:function(t,e){if(this.justify!==o.Start){this.justify===o.Center&&(0,a.bA)(t,t,.5);var n,r=c(e);try{for(r.s();!(n=r.n()).done;){var i=n.value;(0,a.jo)(i.offset.min,t),(0,a.jo)(i.offset.max,t)}}catch(t){r.e(t)}finally{r.f()}e.length=0}}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()},3379:function(t,e,n){n.d(e,{y:function(){return l}}),n(8304),n(489),n(1539),n(1299),n(2419),n(1703),n(9070),n(6649),n(6078),n(2526),n(1817),n(9653),n(2165),n(6992),n(8783),n(3948);var r=n(7133),o=n(6020);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function a(t,e){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},a(t,e)}function u(t,e){if(e&&("object"===i(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function c(t){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},c(t)}var l=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&a(t,e)}(i,t);var e,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=c(n);if(r){var o=c(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return u(this,t)});function i(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(e=o.call(this,t)).interactive=!0,e.cursor="pointer",e}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}((0,r.v)(o.I))},2090:function(t,e,n){n.d(e,{d:function(){return h}}),n(6649),n(6078),n(2526),n(1817),n(1539),n(1703),n(9653),n(9070),n(8304),n(489),n(1299),n(2419),n(4819),n(5003),n(2165),n(6992),n(8783),n(3948);var r=n(1585);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,d(r.key),r)}}function u(){return u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=c(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},u.apply(this,arguments)}function c(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=y(t)););return t}function l(t,e){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},l(t,e)}function f(t,e){if(e&&("object"===o(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return s(t)}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y(t){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},y(t)}function p(t,e,n){return(e=d(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d(t){var e=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e);if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t,"string");return"symbol"===o(e)?e:String(e)}n(1014);var h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&l(t,e)}(h,t);var e,n,o,c,d=(o=h,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=y(o);if(c){var n=y(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return f(this,t)});function h(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new r.W2;return i(this,h),p(s(t=d.call(this,e)),"debug",void 0),p(s(t),"minWidth",0),p(s(t),"preferredWidth",0),p(s(t),"minHeight",0),p(s(t),"preferredHeight",0),t}return e=h,(n=[{key:"updateLayout",value:function(){this.layoutDirty,u(y(h.prototype),"updateLayout",this).call(this)}},{key:"alpha",get:function(){return this.displayObject.alpha},set:function(t){this.displayObject.alpha=t}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),h}(n(618).u1)},7827:function(t,e,n){n.d(e,{N:function(){return w}}),n(6992),n(1539),n(8783),n(4129),n(3948),n(1703),n(6649),n(6078),n(2526),n(1817),n(9653),n(9070),n(8304),n(489),n(1299),n(2419),n(4819),n(5003),n(2165);var r=n(4688),o=n(618);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,h(r.key),r)}}function u(){return u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=c(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},u.apply(this,arguments)}function c(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=y(t)););return t}function l(t,e){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},l(t,e)}function f(t,e){if(e&&("object"===i(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return s(t)}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y(t){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},y(t)}function p(t,e,n){!function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.set(t,n)}function d(t,e,n){return(e=h(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function h(t){var e=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e);if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t,"string");return"symbol"===i(e)?e:String(e)}function b(t,e,n){return function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}(t,v(t,e,"set"),n),n}function m(t,e){return function(t,e){return e.get?e.get.call(t):e.value}(t,v(t,e,"get"))}function v(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}var g=new WeakMap,O=new WeakMap,w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&l(t,e)}(h,t);var e,n,o,i,c=(o=h,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=y(o);if(i){var n=y(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return f(this,t)});function h(t,e,n,o,i){var a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,h),d(s(a=c.call(this,new r.ZT(t,e,n,o,i))),"minWidth",0),d(s(a),"minHeight",0),p(s(a),g,{writable:!0,value:void 0}),p(s(a),O,{writable:!0,value:void 0}),a.offset={min:{x:0,y:0},max:{x:t.width,y:t.height}},a}return e=h,(n=[{key:"alpha",get:function(){return this.displayObject.alpha},set:function(t){this.displayObject.alpha=t}},{key:"tint",get:function(){return this.displayObject.tint},set:function(t){this.displayObject.tint=t}},{key:"mask",get:function(){return this.displayObject.mask},set:function(t){this.displayObject.mask=t}},{key:"leftWidth",get:function(){return this.displayObject.leftWidth},set:function(t){this.displayObject.leftWidth=t}},{key:"topHeight",get:function(){return this.displayObject.topHeight},set:function(t){this.displayObject.topHeight=t}},{key:"rightWidth",get:function(){return this.displayObject.rightWidth},set:function(t){this.displayObject.rightWidth=t}},{key:"bottomHeight",get:function(){return this.displayObject.bottomHeight},set:function(t){this.displayObject.bottomHeight=t}},{key:"updateLayout",value:function(){this.layoutDirty&&(this.displayObject.scale.set(1),this.displayObject.width=this.size.x,this.displayObject.height=this.size.y),u(y(h.prototype),"updateLayout",this).call(this)}},{key:"preferredWidth",get:function(){var t;return null!==(t=m(this,g))&&void 0!==t?t:this.displayObject.texture.width},set:function(t){b(this,g,t)}},{key:"preferredHeight",get:function(){var t;return null!==(t=m(this,O))&&void 0!==t?t:this.displayObject.texture.height},set:function(t){b(this,O,t)}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),h}(o.u1)},1128:function(t,e,n){n.d(e,{I:function(){return r},X:function(){return j}}),n(6649),n(6078),n(2526),n(1817),n(1539),n(1703),n(9653),n(9070),n(8304),n(489),n(1299),n(2419),n(4819),n(5003),n(2165),n(6992),n(8783),n(3948);var r,o,i=n(6177),a=n(7823),u=n(1585),c=n(1014),l=n(9658),f=n(618);function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function y(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,w(r.key),r)}}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=h(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},d.apply(this,arguments)}function h(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=g(t)););return t}function b(t,e){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},b(t,e)}function m(t,e){if(e&&("object"===s(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return v(t)}function v(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function g(t){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},g(t)}function O(t,e,n){return(e=w(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function w(t){var e=function(t,e){if("object"!==s(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e);if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t,"string");return"symbol"===s(e)?e:String(e)}!function(t){t[t.Both=0]="Both",t[t.Horizontal=1]="Horizontal",t[t.Vertical=2]="Vertical"}(r||(r={})),function(t){t[t.None=0]="None",t[t.Undetermined=1]="Undetermined",t[t.Scroll=2]="Scroll",t[t.Impulse=3]="Impulse"}(o||(o={}));var j=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&b(t,e)}(w,t);var e,n,f,s,h=(f=w,s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=g(f);if(s){var n=g(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return m(this,t)});function w(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.Both,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return y(this,w),O(v(t=h.call(this,new u.W2,new u.W2)),"direction",void 0),O(v(t),"lockIfFits",void 0),O(v(t),"debug",void 0),O(v(t),"mask",void 0),O(v(t),"lastPointer",{pointerId:-1,position:new l.E9,start:new l.E9,timestamp:0}),O(v(t),"velocity",{x:0,y:0}),O(v(t),"dragMode",o.None),O(v(t),"systemTimeUpdate",void 0),O(v(t),"minWidth",0),O(v(t),"preferredWidth",0),O(v(t),"minHeight",0),O(v(t),"preferredHeight",0),t.direction=e,t.lockIfFits=n,t.mask=new c.TC,t.displayObject.addChild(t.mask),t.displayObject.mask=t.mask,t.displayObject.interactive=!0,t.displayObject.on("pointerdown",(function(e){e.data.getLocalPosition(t.displayObject,t.lastPointer.position),t.lastPointer.start.copyFrom(t.lastPointer.position),t.lastPointer.pointerId=e.data.pointerId,t.lastPointer.timestamp=performance.now(),t.dragMode=o.Undetermined})),t.displayObject.on("pointermove",(function(e){if(t.dragMode!==o.None&&e.data.pointerId===t.lastPointer.pointerId){var n=e.data.getLocalPosition(t.displayObject),r=performance.now(),u=r-t.lastPointer.timestamp;(0,i.lu)(t.velocity,n,t.lastPointer.position),u>0?(0,i.TZ)(t.velocity,t.velocity,u):(0,i.TZ)(t.velocity,t.velocity,a.u9.deltaMS),t.lastPointer.position.copyFrom(n),t.lastPointer.timestamp=r,t.dragMode===o.Undetermined&&(0,i.TE)(t.lastPointer.position,t.lastPointer.start)>5&&(t.dragMode=o.Scroll)}})),t.displayObject.on("pointerup",(function(e){return t.pointerUpHandler(e)})),t.displayObject.on("pointerupoutside",(function(e){return t.pointerUpHandler(e)})),t.displayObject.on("pointercancel",(function(e){return t.pointerUpHandler(e)})),t.displayObject.on("wheel",(function(e){var n=a.u9.deltaMS,i=e.data,u=i.deltaX,c=i.deltaY;t.dragMode!==o.Scroll&&(t.dragMode=o.Impulse),t.direction===r.Horizontal?(t.velocity.x-=c*n/1e3,t.velocity.y-=u*n/1e3):t.direction===r.Vertical||t.childTarget.height>t.childTarget.width?(t.velocity.x-=u*n/1e3,t.velocity.y-=c*n/1e3):(t.velocity.x-=c*n/1e3,t.velocity.y-=u*n/1e3)})),t.systemTimeUpdate=function(){return t.tick()},a.u9.add(t.systemTimeUpdate),t}return e=w,n=[{key:"destroy",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];a.u9.remove(this.systemTimeUpdate),d(g(w.prototype),"destroy",this).call(this,t)}},{key:"pointerUpHandler",value:function(t){this.dragMode=o.None}},{key:"tick",value:function(){var t=a.u9.deltaMS;this.dragMode!==o.None&&this.dragMode!==o.Impulse&&performance.now()-this.lastPointer.timestamp>6e3&&(this.dragMode=o.None);var e=this.childTarget.getLocalBounds(),n=this.childTarget.position;if(this.dragMode===o.None){var u=.02;n.y>=0&&(this.velocity.y=(0-n.y)*u),e.bottom>this.size.y&&e.bottom+n.y<this.size.y?this.velocity.y=(this.size.y-e.bottom-n.y)*u:n.y<0&&e.bottom+n.y<this.size.y&&(this.velocity.y=(0-n.y)*u),n.x>=0&&(this.velocity.x=(0-n.x)*u),e.right>this.size.x&&e.right+n.x<this.size.x?this.velocity.x=(this.size.x-e.right-n.x)*u:n.x<0&&e.right+n.x<this.size.x&&(this.velocity.x=(0-n.x)*u)}this.dragMode===o.Impulse&&(this.dragMode=o.None);var c=(0,i.bA)(new l.E9,this.velocity,t);this.direction===r.Vertical?c.x=0:this.direction===r.Horizontal&&(c.y=0),this.lockIfFits&&e.right<this.size.x&&(c.x=0),this.lockIfFits&&e.bottom<this.size.y&&(c.y=0),this.dragMode!==o.Scroll&&this.dragMode!==o.None||(0,i.jo)(this.childTarget.position,c),(0,i.bA)(this.velocity,this.velocity,.9)}},{key:"updateLayout",value:function(){this.layoutDirty&&(this.mask.clear(),this.mask.beginFill(),this.mask.drawRect(-.5,-.5,Math.round(this.size.x)+.5,Math.round(this.size.y)+.5),this.mask.endFill(),this.childTarget.position.set(0)),d(g(w.prototype),"updateLayout",this).call(this)}}],n&&p(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),w}(f.u1)}}]);