(self.webpackChunkcolorapp=self.webpackChunkcolorapp||[]).push([[465],{3780:function(t,e,r){"use strict";r.d(e,{T:function(){return g}}),r(9070),r(8304),r(489),r(1539),r(1299),r(2419),r(1703),r(4819),r(5003),r(2526),r(1817),r(2165),r(6992),r(8783),r(3948);var n=r(1585),i=r(6710),o=r(8033),s=r(6679),u=function(t,e){return u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},u(t,e)},a=function(t){function e(e,r){void 0===r&&(r=!0);var n=t.call(this,e[0]instanceof i.xE?e[0]:e[0].texture)||this;return n._textures=null,n._durations=null,n._autoUpdate=r,n._isConnectedToTicker=!1,n.animationSpeed=1,n.loop=!0,n.updateAnchor=!1,n.onComplete=null,n.onFrameChange=null,n.onLoop=null,n._currentTime=0,n._playing=!1,n._previousFrame=null,n.textures=e,n}return function(t,e){function r(){this.constructor=t}u(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}(e,t),e.prototype.stop=function(){this._playing&&(this._playing=!1,this._autoUpdate&&this._isConnectedToTicker&&(s.vB.shared.remove(this.update,this),this._isConnectedToTicker=!1))},e.prototype.play=function(){this._playing||(this._playing=!0,this._autoUpdate&&!this._isConnectedToTicker&&(s.vB.shared.add(this.update,this,s.uF.HIGH),this._isConnectedToTicker=!0))},e.prototype.gotoAndStop=function(t){this.stop();var e=this.currentFrame;this._currentTime=t,e!==this.currentFrame&&this.updateTexture()},e.prototype.gotoAndPlay=function(t){var e=this.currentFrame;this._currentTime=t,e!==this.currentFrame&&this.updateTexture(),this.play()},e.prototype.update=function(t){if(this._playing){var e=this.animationSpeed*t,r=this.currentFrame;if(null!==this._durations){var n=this._currentTime%1*this._durations[this.currentFrame];for(n+=e/60*1e3;n<0;)this._currentTime--,n+=this._durations[this.currentFrame];var i=Math.sign(this.animationSpeed*t);for(this._currentTime=Math.floor(this._currentTime);n>=this._durations[this.currentFrame];)n-=this._durations[this.currentFrame]*i,this._currentTime+=i;this._currentTime+=n/this._durations[this.currentFrame]}else this._currentTime+=e;this._currentTime<0&&!this.loop?(this.gotoAndStop(0),this.onComplete&&this.onComplete()):this._currentTime>=this._textures.length&&!this.loop?(this.gotoAndStop(this._textures.length-1),this.onComplete&&this.onComplete()):r!==this.currentFrame&&(this.loop&&this.onLoop&&(this.animationSpeed>0&&this.currentFrame<r||this.animationSpeed<0&&this.currentFrame>r)&&this.onLoop(),this.updateTexture())}},e.prototype.updateTexture=function(){var t=this.currentFrame;this._previousFrame!==t&&(this._previousFrame=t,this._texture=this._textures[t],this._textureID=-1,this._textureTrimmedID=-1,this._cachedTint=16777215,this.uvs=this._texture._uvs.uvsFloat32,this.updateAnchor&&this._anchor.copyFrom(this._texture.defaultAnchor),this.onFrameChange&&this.onFrameChange(this.currentFrame))},e.prototype.destroy=function(e){this.stop(),t.prototype.destroy.call(this,e),this.onComplete=null,this.onFrameChange=null,this.onLoop=null},e.fromFrames=function(t){for(var r=[],n=0;n<t.length;++n)r.push(i.xE.from(t[n]));return new e(r)},e.fromImages=function(t){for(var r=[],n=0;n<t.length;++n)r.push(i.xE.from(t[n]));return new e(r)},Object.defineProperty(e.prototype,"totalFrames",{get:function(){return this._textures.length},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"textures",{get:function(){return this._textures},set:function(t){if(t[0]instanceof i.xE)this._textures=t,this._durations=null;else{this._textures=[],this._durations=[];for(var e=0;e<t.length;e++)this._textures.push(t[e].texture),this._durations.push(t[e].time)}this._previousFrame=null,this.gotoAndStop(0),this.updateTexture()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"currentFrame",{get:function(){var t=Math.floor(this._currentTime)%this._textures.length;return t<0&&(t+=this._textures.length),t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"playing",{get:function(){return this._playing},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"autoUpdate",{get:function(){return this._autoUpdate},set:function(t){t!==this._autoUpdate&&(this._autoUpdate=t,!this._autoUpdate&&this._isConnectedToTicker?(s.vB.shared.remove(this.update,this),this._isConnectedToTicker=!1):this._autoUpdate&&!this._isConnectedToTicker&&this._playing&&(s.vB.shared.add(this.update,this),this._isConnectedToTicker=!0))},enumerable:!1,configurable:!0}),e}(o.j);function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=f(t,e);if(n){var i=Object.getOwnPropertyDescriptor(n,e);return i.get?i.get.call(arguments.length<3?t:r):i.value}},p.apply(this,arguments)}function f(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=m(t)););return t}function l(t,e){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},l(t,e)}function d(t,e){if(e&&("object"===h(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return y(t)}function y(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function m(t){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},m(t)}function _(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var g=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&l(t,e)}(u,t);var e,r,i,o,s=(i=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=m(i);if(o){var r=m(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return d(this,t)});function u(t){var e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),_(y(e=s.call(this,new n.W2)),"sprite",void 0),_(y(e),"minWidth",0),_(y(e),"minHeight",0),_(y(e),"_preferredWidth",void 0),_(y(e),"_preferredHeight",void 0),e.sprite=e.displayObject.addChild(new a(t));var r=t[e.sprite.currentFrame];return e.offset={min:{x:0,y:0},max:{x:r.width,y:r.height}},e.minWidth=0,e.minHeight=0,e}return e=u,(r=[{key:"tint",get:function(){return this.sprite.tint},set:function(t){this.sprite.tint=t}},{key:"alpha",get:function(){return this.displayObject.alpha},set:function(t){this.displayObject.alpha=t}},{key:"mask",get:function(){return this.displayObject.mask},set:function(t){this.displayObject.mask=t}},{key:"blendMode",get:function(){return this.sprite.blendMode},set:function(t){this.sprite.blendMode=t}},{key:"texture",get:function(){return this.sprite.texture},set:function(t){this.sprite.texture=t}},{key:"spriteAnchor",get:function(){return this.sprite.anchor},set:function(t){this.sprite.anchor=t}},{key:"animationSpeed",get:function(){return this.sprite.animationSpeed},set:function(t){this.sprite.animationSpeed=t}},{key:"totalFrames",get:function(){return this.sprite.totalFrames}},{key:"play",value:function(){this.sprite.play()}},{key:"updateLayout",value:function(){this.layoutDirty&&(this.sprite.scale.set(1),this.sprite.width=this.size.x,this.sprite.height=this.size.y),p(m(u.prototype),"updateLayout",this).call(this)}},{key:"preferredWidth",get:function(){var t;return null!==(t=this._preferredWidth)&&void 0!==t?t:this.sprite.texture.width},set:function(t){this._preferredWidth=t}},{key:"preferredHeight",get:function(){var t;return null!==(t=this._preferredHeight)&&void 0!==t?t:this.sprite.texture.height},set:function(t){this._preferredHeight=t}}])&&c(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(r(618).u1)},8415:function(t,e,r){"use strict";var n=r(9303),i=r(1340),o=r(4488),s=RangeError;t.exports=function(t){var e=i(o(this)),r="",u=n(t);if(u<0||Infinity==u)throw s("Wrong number of repetitions");for(;u>0;(u>>>=1)&&(e+=e))1&u&&(r+=e);return r}},2481:function(t,e,r){r(2109)({target:"String",proto:!0},{repeat:r(8415)})}}]);