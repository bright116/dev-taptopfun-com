var _interopRequireDefault = require("../@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("../@babel/runtime/regenerator"));

var _assertThisInitialized2 = _interopRequireDefault(require("../@babel/runtime/helpers/assertThisInitialized"));

var _classCallCheck2 = _interopRequireDefault(require("../@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("../@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("../@babel/runtime/helpers/get"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("../@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("../@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("../@babel/runtime/helpers/inherits"));

var _typeof2 = _interopRequireDefault(require("../@babel/runtime/helpers/typeof"));

function _createSuper(Derived) {
    return function () {
        var Super = (0, _getPrototypeOf2.default)(Derived), result;
        if (_isNativeReflectConstruct()) {
            var NewTarget = (0, _getPrototypeOf2.default)(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return (0, _possibleConstructorReturn2.default)(this, result);
    };
}

function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function () { }));
        return true;
    } catch (e) {
        return false;
    }
}

(function () {
    "use strict";
    /*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at 
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.
    See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */
    /* global Reflect, Promise */    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) {
                if (b.hasOwnProperty(p)) d[p] = b[p];
            }
        };
        return _extendStatics(d, b);
    };
    function __extends(d, b) {
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var _assign = function __assign() {
        _assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) {
                    if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
            }
            return t;
        };
        return _assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
        }
        if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
        }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof2.default)(Reflect)) === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) {
                if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) {
            decorator(target, key, paramIndex);
        };
    }
    function __metadata(metadataKey, metadataValue) {
        if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof2.default)(Reflect)) === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator["throw"](value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done ? resolve(result.value) : new P(function (resolve) {
                    resolve(result.value);
                }).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = {
            label: 0,
            sent: function sent() {
                if (t[0] & 1) throw t[1];
                return t[1];
            },
            trys: [],
            ops: []
        }, f, y, t, g;
        return g = {
            next: verb(0),
            throw: verb(1),
            return: verb(2)
        }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
            return this;
        }), g;
        function verb(n) {
            return function (v) {
                return step([n, v]);
            };
        }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) {
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y),
                        0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                    if (y = 0, t) op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;

                        case 4:
                            _.label++;
                            return {
                                value: op[1],
                                done: false
                            };

                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;

                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;

                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2]) _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                } catch (e) {
                    op = [6, e];
                    y = 0;
                } finally {
                    f = t = 0;
                }
            }
            if (op[0] & 5) throw op[1];
            return {
                value: op[0] ? op[1] : void 0,
                done: true
            };
        }
    }
    function __exportStar(m, exports) {
        for (var p in m) {
            if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
    }
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function next() {
                if (o && i >= o.length) o = void 0;
                return {
                    value: o && o[i++],
                    done: !o
                };
            }
        };
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
                ar.push(r.value);
            }
        } catch (error) {
            e = {
                error: error
            };
        } finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            } finally {
                if (e) throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++) {
            ar = ar.concat(__read(arguments[i]));
        }
        return ar;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
            return this;
        }, i;
        function verb(n) {
            if (g[n]) i[n] = function (v) {
                return new Promise(function (a, b) {
                    q.push([n, v, a, b]) > 1 || resume(n, v);
                });
            };
        }
        function resume(n, v) {
            try {
                step(g[n](v));
            } catch (e) {
                settle(q[0][3], e);
            }
        }
        function step(r) {
            r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }
        function fulfill(value) {
            resume("next", value);
        }
        function reject(value) {
            resume("throw", value);
        }
        function settle(f, v) {
            if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
        }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) {
            throw e;
        }), verb("return"), i[Symbol.iterator] = function () {
            return this;
        }, i;
        function verb(n, f) {
            i[n] = o[n] ? function (v) {
                return (p = !p) ? {
                    value: __await(o[n](v)),
                    done: n === "return"
                } : f ? f(v) : v;
            } : f;
        }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](),
            i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
                return this;
            }, i);
        function verb(n) {
            i[n] = o[n] && function (v) {
                return new Promise(function (resolve, reject) {
                    v = o[n](v), settle(resolve, reject, v.done, v.value);
                });
            };
        }
        function settle(resolve, reject, d, v) {
            Promise.resolve(v).then(function (v) {
                resolve({
                    value: v,
                    done: d
                });
            }, reject);
        }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", {
                value: raw
            });
        } else {
            cooked.raw = raw;
        }
        return cooked;
    }
    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) {
            if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        }
        result.default = mod;
        return result;
    }
    function __importDefault(mod) {
        return mod && mod.__esModule ? mod : {
            default: mod
        };
    }
    var REG = Laya.ClassUtils.regClass;
    var ui;
    (function (ui) {
        var test;
        (function (test) {
            var MainEntryUI = /* */ function (_Laya$Scene) {
                (0, _inherits2.default)(MainEntryUI, _Laya$Scene);
                var _super = _createSuper(MainEntryUI);
                function MainEntryUI() {
                    (0, _classCallCheck2.default)(this, MainEntryUI);
                    return _super.call(this);
                }
                (0, _createClass2.default)(MainEntryUI, [{
                    key: "createChildren",
                    value: function createChildren() {
                        (0, _get2.default)((0, _getPrototypeOf2.default)(MainEntryUI.prototype), "createChildren", this).call(this);
                        this.loadScene("test/MainEntry");
                    }
                }]);
                return MainEntryUI;
            }(Laya.Scene);
            test.MainEntryUI = MainEntryUI;
            REG("ui.test.MainEntryUI", MainEntryUI);
            var TestSceneUI = /* */ function (_Laya$Scene2) {
                (0, _inherits2.default)(TestSceneUI, _Laya$Scene2);
                var _super2 = _createSuper(TestSceneUI);
                function TestSceneUI() {
                    (0, _classCallCheck2.default)(this, TestSceneUI);
                    return _super2.call(this);
                }
                (0, _createClass2.default)(TestSceneUI, [{
                    key: "createChildren",
                    value: function createChildren() {
                        (0, _get2.default)((0, _getPrototypeOf2.default)(TestSceneUI.prototype), "createChildren", this).call(this);
                        this.loadScene("test/TestScene");
                    }
                }]);
                return TestSceneUI;
            }(Laya.Scene);
            test.TestSceneUI = TestSceneUI;
            REG("ui.test.TestSceneUI", TestSceneUI);
        })(test = ui.test || (ui.test = {}));
    })(ui || (ui = {}));
    var GameUI = /* */ function (_ui$test$TestSceneUI) {
        (0, _inherits2.default)(GameUI, _ui$test$TestSceneUI);
        var _super3 = _createSuper(GameUI);
        function GameUI() {
            var _this;
            (0, _classCallCheck2.default)(this, GameUI);
            _this = _super3.call(this);
            var scene = Laya.stage.addChild(new Laya.Scene3D());
            var camera = scene.addChild(new Laya.Camera(0, .1, 100));
            camera.transform.translate(new Laya.Vector3(0, 3, 3));
            camera.transform.rotate(new Laya.Vector3(-30, 0, 0), true, false);
            var directionLight = scene.addChild(new Laya.DirectionLight());
            directionLight.color = new Laya.Vector3(.6, .6, .6);
            directionLight.transform.worldMatrix.setForward(new Laya.Vector3(1, -1, 0));
            var box = scene.addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createBox(1, 1, 1)));
            box.transform.rotate(new Laya.Vector3(0, 45, 0), false, false);
            var material = new Laya.BlinnPhongMaterial();
            Laya.Texture2D.load("res/layabox.png", Laya.Handler.create(null, function (tex) {
                material.albedoTexture = tex;
            }));
            box.meshRenderer.material = material;
            return _this;
        }
        return GameUI;
    }(ui.test.TestSceneUI);
    var GameConfig = /* */ function () {
        function GameConfig() {
            (0, _classCallCheck2.default)(this, GameConfig);
        }
        (0, _createClass2.default)(GameConfig, null, [{
            key: "init",
            value: function init() {
                var reg = Laya.ClassUtils.regClass;
                reg("script/GameUI.ts", GameUI);
            }
        }]);
        return GameConfig;
    }();
    GameConfig.width = 750;
    GameConfig.height = 1334;
    GameConfig.scaleMode = "exactfit";
    GameConfig.screenMode = "none";
    GameConfig.alignV = "middle";
    GameConfig.alignH = "center";
    GameConfig.startScene = "test/MainEntry.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    GameConfig.init();
    var ps = '#ifdef GL_FRAGMENT_PRECISION_HIGH\r\n\tprecision highp float;\r\n\tprecision highp int;\r\n#else\r\n\tprecision mediump float;\r\n\tprecision mediump int;\r\n#endif\r\n\r\n#include "Lighting.glsl";\r\n#include "Shadow.glsl"\r\n\r\nuniform vec4 u_DiffuseColor;\r\nuniform vec4 u_SpecularColor;\r\nuniform vec4 u_RimColor;\r\nuniform float u_Contrast;\r\nuniform float u_Specular;\r\nuniform float u_SpecularSmooth;\r\nuniform float u_RimPower;\r\n\r\n#if defined(EMISSIONMAP) || defined(FOGMAP)\r\n\tuniform float u_Time;\r\n#endif\r\n\r\n#if defined(COLOR)\r\n\tvarying vec4 v_Color;\r\n#endif\r\n\r\n#ifdef DIFFUSEMAP\r\n    uniform sampler2D u_DiffuseTexture;\r\n#endif\r\n\r\n#ifdef MASKMAP\r\n\tuniform sampler2D u_MaskTexture;\r\n#endif\r\n\r\n#ifdef EMISSIONMAP\r\n    uniform sampler2D u_EmissionTexture;\r\n    uniform float u_EmissionDirectionX;\r\n\tuniform float u_EmissionDirectionY;\r\n    uniform float u_EmissionPower;\r\n    uniform vec4 u_EmissionColor;\r\n#endif\r\n\r\n#if defined(DIFFUSEMAP) || defined(EMISSIONMAP) || defined(FOGMAP) ||((defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT))&&(defined(NORMALMAP)))\r\n\tvarying vec2 v_Texcoord0;\r\n#endif\r\n\r\nvarying vec3 v_Normal;\r\n#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\r\n\tvarying vec3 v_ViewDir; \r\n\r\n\tuniform vec3 u_MaterialSpecular;\r\n\tuniform float u_Shininess;\r\n\r\n\t#ifdef LEGACYSINGLELIGHTING\r\n\t\t#ifdef DIRECTIONLIGHT\r\n\t\t\tuniform DirectionLight u_DirectionLight;\r\n\t\t#endif\r\n\t\t#ifdef POINTLIGHT\r\n\t\t\tuniform PointLight u_PointLight;\r\n\t\t#endif\r\n\t\t#ifdef SPOTLIGHT\r\n\t\t\tuniform SpotLight u_SpotLight;\r\n\t\t#endif\r\n\t#else\r\n\t\tuniform mat4 u_View;\r\n\t\tuniform vec4 u_ProjectionParams;\r\n\t\tuniform vec4 u_Viewport;\r\n\t\tuniform int u_DirationLightCount;\r\n\t\tuniform DirectionLight u_SunLight;\r\n\t\tuniform sampler2D u_LightBuffer;\r\n\t\tuniform sampler2D u_LightClusterBuffer;\r\n\t#endif\r\n#endif\r\n\r\n#ifdef NORMALMAP \r\n\tuniform sampler2D u_NormalTexture;\r\n\tvarying vec3 v_Tangent;\r\n\tvarying vec3 v_Binormal;\r\n#endif\r\n\r\n#ifdef FOGMAP\r\n    uniform sampler2D u_FogTexture;\r\n    uniform float u_FogDirectionX;\r\n    uniform float u_FogDirectionY;\r\n    uniform float u_FogMapScale;\r\n    uniform float u_FogPower;\r\n    uniform vec4 u_FogColor;\r\n    uniform float u_FogStart;\r\n    uniform float u_FogRange;\r\n\tuniform float u_FadeFogNear;\r\n\tuniform float u_FadeFogFar;\r\n\tuniform float u_HeightFogPower;\r\n\tuniform float u_HeightFogStart;\r\n\tuniform float u_HeightFogRange;\r\n#endif\r\n\r\n\r\nvarying vec3 v_PositionWorld;\r\n#include "GlobalIllumination.glsl";//"GlobalIllumination.glsl use uniform should at front of this\r\n\r\nvoid main() {\r\n    vec4 baseColor = u_DiffuseColor;\r\n    #ifdef DIFFUSEMAP\r\n\t\tvec4 difTexColor=texture2D(u_DiffuseTexture, v_Texcoord0);\r\n\t\tbaseColor=baseColor*difTexColor;\r\n\t#endif\r\n\r\n    vec3 normal;//light and SH maybe use normal\r\n\t#if defined(NORMALMAP)\r\n\t\tvec3 normalMapSample = texture2D(u_NormalTexture, v_Texcoord0).rgb;\r\n\t\tnormal = normalize(NormalSampleToWorldSpace(normalMapSample, v_Normal, v_Tangent,v_Binormal));\r\n\t#else\r\n\t\tnormal = normalize(v_Normal);\r\n\t#endif\r\n\r\n    LayaGIInput giInput;\r\n\tvec3 globalDiffuse=layaGIBase(giInput,1.0,normal);\r\n\r\n    vec3 lightDir;\r\n\tvec3 lightColor;\r\n\t#if defined(DIRECTIONLIGHT)\r\n\t\tlightDir = u_SunLight.direction;\r\n\t\tlightColor = u_SunLight.color;\r\n\t#else\r\n\t\tlightDir = normalize(vec3(1.0, 1.0, 1.0));\r\n\t\tlightColor = vec3(1.0, 1.0, 1.0);\r\n\t#endif\r\n\tlightDir = -lightDir;\r\n\r\n    vec3 viewDir;\r\n\t#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\r\n\t\tviewDir = normalize(v_ViewDir);\r\n\t#else\r\n\t\tviewDir = normalize(vec3(1.0, 1.0, 1.0));\r\n\t#endif\r\n\r\n\tvec3 halfDir = normalize(lightDir + viewDir);\r\n\r\n    float ndl = max(0.001, dot(normal, lightDir));\r\n\tfloat ndh = max(0.001, dot(normal, halfDir));\r\n\tfloat ndv = max(0.001, dot(normal, viewDir));\r\n\r\n    float diff = ndl * u_Contrast + (1.0 - u_Contrast);\r\n    float spec = pow(ndh, u_Specular * 128.0);\r\n\tspec = smoothstep(0.5 - u_SpecularSmooth * 0.5, 0.5 + u_SpecularSmooth * 0.5, spec);\r\n\r\n\tvec4 maskCol = vec4(1.0, 1.0, 1.0, 1.0);\r\n\t#ifdef MASKMAP\r\n\t\tmaskCol = texture2D(u_MaskTexture, v_Texcoord0);\r\n\t#endif\r\n\r\n    vec3 specular =  u_SpecularColor.rgb * spec * maskCol.r;\r\n\r\n    float rim = (1.0 - ndv) * ndl;\r\n    vec3 rimColor = u_RimColor.rgb * u_RimPower * rim;\r\n\r\n\tvec3 emission = vec3(0.0, 0.0, 0.0);\r\n\t#ifdef EMISSIONMAP\r\n\t\tvec4 emissionCol = texture2D(u_EmissionTexture, v_Texcoord0);\r\n\t\t#ifdef MASKMAP\r\n\t\t\tvec4 emissionOffsetCol = texture2D(u_MaskTexture, v_Texcoord0 + vec2(u_EmissionDirectionX, u_EmissionDirectionY) * u_Time * 0.05);\r\n\t\t\temission = emissionCol.rgb * u_EmissionPower * emissionOffsetCol.g;\r\n\t\t\temission = mix(emission, emission * u_EmissionColor.rgb,  maskCol.b);\r\n\t\t#else\r\n\t\t\temission = emissionCol.rgb * u_EmissionColor.rgb * u_EmissionPower;\r\n\t\t#endif\r\n\t#endif\r\n\r\n    vec3 finalCol = (baseColor.rgb * lightColor + rimColor) * diff + specular + emission;\r\n\tfinalCol = finalCol + globalDiffuse * baseColor.rgb * lightColor;\r\n\t#if defined(COLOR)\r\n\t\tfinalCol = finalCol * v_Color.rgb;\r\n\t#endif\r\n\r\n\t#ifdef FOGMAP\r\n\t\tfloat fogCoord = 1.0 - (1.0/gl_FragCoord.w-u_FogStart)/u_FogRange;\r\n\r\n\t\tvec2 worldUV = v_PositionWorld.xz / u_FogMapScale;\r\n\t\tvec4 fogHeightColor = texture2D(u_FogTexture, worldUV + vec2(-u_FogDirectionX, u_FogDirectionY) * u_Time * 0.05);\r\n\r\n\t\tfloat fogDis = max(u_HeightFogRange, 0.01) * fogHeightColor.r;\r\n\t\tfloat hFogLerp = (v_PositionWorld.y - u_HeightFogStart) / fogDis;\r\n\t\thFogLerp = mix(fogHeightColor.g * (1.0 - u_HeightFogPower), 1.0, clamp(hFogLerp, 0.0, 1.0));\r\n\r\n\t\tfloat fadeFogDis = max(u_FadeFogFar - u_FadeFogNear, 0.01);\r\n\t\tfloat fadeFogLerp = clamp((1.0/gl_FragCoord.w - u_FadeFogNear) / fadeFogDis, 0.0, 1.0);\r\n\r\n\t\tfogCoord = hFogLerp * (1.0 - fadeFogLerp) + fogCoord * fadeFogLerp;\r\n\r\n\t\tfinalCol = mix(mix(finalCol,  u_FogColor.rgb, u_FogPower), finalCol, clamp(fogCoord, 0.0, 1.0));\r\n\t#endif\r\n\r\n\tgl_FragColor = vec4(finalCol, 1.0);\r\n}';
    var vs = '#include "Lighting.glsl";\r\n#include "Shadow.glsl";\r\n\r\nattribute vec4 a_Position;\r\n\r\n#ifdef GPU_INSTANCE\r\n\tattribute mat4 a_MvpMatrix;\r\n#else\r\n\tuniform mat4 u_MvpMatrix;\r\n#endif\r\n\r\n#if defined(DIFFUSEMAP) || defined(MASKMAP) || defined(EMISSIONMAP) || defined(FOGMAP) ||((defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT))&&(defined(SPECULARMAP)||defined(NORMALMAP)))||(defined(LIGHTMAP)&&defined(UV))\r\n\tattribute vec2 a_Texcoord0;\r\n\tvarying vec2 v_Texcoord0;\r\n#endif\r\n\r\n#ifdef COLOR\r\n\tattribute vec4 a_Color;\r\n\tvarying vec4 v_Color;\r\n#endif\r\n\r\n#ifdef BONE\r\n\tconst int c_MaxBoneCount = 24;\r\n\tattribute vec4 a_BoneIndices;\r\n\tattribute vec4 a_BoneWeights;\r\n\tuniform mat4 u_Bones[c_MaxBoneCount];\r\n#endif\r\n\r\nattribute vec3 a_Normal;\r\nvarying vec3 v_Normal; \r\n\r\n#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\r\n\tuniform vec3 u_CameraPos;\r\n\tvarying vec3 v_ViewDir; \r\n#endif\r\n\r\n#if defined(NORMALMAP)\r\n\tattribute vec4 a_Tangent0;\r\n\tvarying vec3 v_Tangent;\r\n\tvarying vec3 v_Binormal;\r\n#endif\r\n\r\n#ifdef GPU_INSTANCE\r\n\tattribute mat4 a_WorldMat;\r\n#else\r\n\tuniform mat4 u_WorldMat;\r\n#endif\r\n\r\nvarying vec3 v_PositionWorld;\r\n\r\n#ifdef TILINGOFFSET\r\n\tuniform vec4 u_TilingOffset;\r\n#endif\r\n\r\n#ifdef SIMPLEBONE\r\n\t#ifdef GPU_INSTANCE\r\n\t\tattribute vec4 a_SimpleTextureParams;\r\n\t#else\r\n\t\tuniform vec4 u_SimpleAnimatorParams;\r\n\t#endif\r\n\tuniform sampler2D u_SimpleAnimatorTexture;\r\n\r\n\tuniform float u_SimpleAnimatorTextureSize; \r\n#endif\r\n\r\n\r\n#ifdef SIMPLEBONE\r\nmat4 loadMatFromTexture(float FramePos,int boneIndices,float offset)\r\n{\r\n\tvec2 uv;\r\n\tfloat PixelPos = FramePos+float(boneIndices)*4.0;\r\n\tfloat halfOffset = offset * 0.5;\r\n\tfloat uvoffset = PixelPos/u_SimpleAnimatorTextureSize;\r\n\tuv.y = floor(uvoffset)*offset+halfOffset;\r\n\tuv.x = mod(float(PixelPos),u_SimpleAnimatorTextureSize)*offset+halfOffset;\r\n\tvec4 mat0row = texture2D(u_SimpleAnimatorTexture,uv);\r\n\tuv.x+=offset;\r\n\tvec4 mat1row = texture2D(u_SimpleAnimatorTexture,uv);\r\n\tuv.x+=offset;\r\n\tvec4 mat2row = texture2D(u_SimpleAnimatorTexture,uv);\r\n\tuv.x+=offset;\r\n\tvec4 mat3row = texture2D(u_SimpleAnimatorTexture,uv);\r\n\tmat4 m =mat4(mat0row.x,mat0row.y,mat0row.z,mat0row.w,\r\n\t\t\t  mat1row.x,mat1row.y,mat1row.z,mat1row.w,\r\n\t\t\t  mat2row.x,mat2row.y,mat2row.z,mat2row.w,\r\n\t\t\t  mat3row.x,mat3row.y,mat3row.z,mat3row.w);\r\n\treturn m;\r\n}\r\n#endif\r\n\r\nvoid main()\r\n{\r\n\tvec4 position;\r\n\t#ifdef BONE\r\n\t\tmat4 skinTransform;\r\n\t \t#ifdef SIMPLEBONE\r\n\t\t\tfloat currentPixelPos;\r\n\t\t\t#ifdef GPU_INSTANCE\r\n\t\t\t\tcurrentPixelPos = a_SimpleTextureParams.x+a_SimpleTextureParams.y;\r\n\t\t\t#else\r\n\t\t\t\tcurrentPixelPos = u_SimpleAnimatorParams.x+u_SimpleAnimatorParams.y;\r\n\t\t\t#endif\r\n\t\t\tfloat offset = 1.0/u_SimpleAnimatorTextureSize;\r\n\t\t\tskinTransform =  loadMatFromTexture(currentPixelPos,int(a_BoneIndices.x),offset) * a_BoneWeights.x;\r\n\t\t\tskinTransform += loadMatFromTexture(currentPixelPos,int(a_BoneIndices.y),offset) * a_BoneWeights.y;\r\n\t\t\tskinTransform += loadMatFromTexture(currentPixelPos,int(a_BoneIndices.z),offset) * a_BoneWeights.z;\r\n\t\t\tskinTransform += loadMatFromTexture(currentPixelPos,int(a_BoneIndices.w),offset) * a_BoneWeights.w;\r\n\t\t#else\r\n\t\t\tskinTransform =  u_Bones[int(a_BoneIndices.x)] * a_BoneWeights.x;\r\n\t\t\tskinTransform += u_Bones[int(a_BoneIndices.y)] * a_BoneWeights.y;\r\n\t\t\tskinTransform += u_Bones[int(a_BoneIndices.z)] * a_BoneWeights.z;\r\n\t\t\tskinTransform += u_Bones[int(a_BoneIndices.w)] * a_BoneWeights.w;\r\n\t\t#endif\r\n\t\tposition=skinTransform*a_Position;\r\n\t #else\r\n\t\tposition=a_Position;\r\n\t#endif\r\n\r\n\t#ifdef GPU_INSTANCE\r\n\t\tgl_Position = a_MvpMatrix * position;\r\n\t#else\r\n\t\tgl_Position = u_MvpMatrix * position;\r\n\t#endif\r\n\t\r\n\tmat4 worldMat;\r\n\t#ifdef GPU_INSTANCE\r\n\t\tworldMat = a_WorldMat;\r\n\t#else\r\n\t\tworldMat = u_WorldMat;\r\n\t#endif\r\n\r\n\tmat3 worldInvMat;\r\n\t#ifdef BONE\r\n\t\tworldInvMat=INVERSE_MAT(mat3(worldMat*skinTransform));\r\n\t#else\r\n\t\tworldInvMat=INVERSE_MAT(mat3(worldMat));\r\n\t#endif  \r\n\tv_Normal=normalize(a_Normal*worldInvMat);\r\n\t#if defined(NORMALMAP)\r\n\t\tv_Tangent=normalize(a_Tangent0.xyz*worldInvMat);\r\n\t\tv_Binormal=cross(v_Normal,v_Tangent)*a_Tangent0.w;\r\n\t#endif\r\n\r\n\tvec3 positionWS=(worldMat*position).xyz;\r\n\t#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\r\n\t\tv_ViewDir = u_CameraPos-positionWS;\r\n\t#endif\r\n\tv_PositionWorld = positionWS;\r\n\r\n\t#if defined(DIFFUSEMAP) || defined(MASKMAP) || defined(EMISSIONMAP) || defined(FOGMAP) ||((defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT))&&(defined(SPECULARMAP)||defined(NORMALMAP)))\r\n\t\t#ifdef TILINGOFFSET\r\n\t\t\tv_Texcoord0=TransformUV(a_Texcoord0,u_TilingOffset);\r\n\t\t#else\r\n\t\t\tv_Texcoord0=a_Texcoord0;\r\n\t\t#endif\r\n\t#endif\r\n\r\n\t#if defined(COLOR)&&defined(ENABLEVERTEXCOLOR)\r\n\t\tv_Color=a_Color;\r\n\t#endif\r\n\r\n\tgl_Position=remapGLPositionZ(gl_Position);\r\n}';
    var Shader3D = Laya.Shader3D;
    var SubShader = Laya.SubShader;
    var VertexMesh = Laya.VertexMesh;
    var BlinnPhongFogShader = /* */ function () {
        function BlinnPhongFogShader() {
            (0, _classCallCheck2.default)(this, BlinnPhongFogShader);
        }
        (0, _createClass2.default)(BlinnPhongFogShader, null, [{
            key: "init",
            value: function init() {
                var attributeMap = {
                    a_Position: VertexMesh.MESH_POSITION0,
                    a_Color: VertexMesh.MESH_COLOR0,
                    a_Normal: VertexMesh.MESH_NORMAL0,
                    a_Texcoord0: VertexMesh.MESH_TEXTURECOORDINATE0,
                    a_Texcoord1: VertexMesh.MESH_TEXTURECOORDINATE1,
                    a_BoneWeights: VertexMesh.MESH_BLENDWEIGHT0,
                    a_BoneIndices: VertexMesh.MESH_BLENDINDICES0,
                    a_Tangent0: VertexMesh.MESH_TANGENT0,
                    a_MvpMatrix: VertexMesh.MESH_MVPMATRIX_ROW0,
                    a_WorldMat: VertexMesh.MESH_WORLDMATRIX_ROW0
                };
                var uniformMap = {
                    u_Bones: Shader3D.PERIOD_CUSTOM,
                    u_WorldMat: Shader3D.PERIOD_SPRITE,
                    u_MvpMatrix: Shader3D.PERIOD_SPRITE,
                    u_Projection: Shader3D.PERIOD_CAMERA,
                    u_LightmapScaleOffset: Shader3D.PERIOD_SPRITE,
                    u_LightMap: Shader3D.PERIOD_SPRITE,
                    u_LightMapDirection: Shader3D.PERIOD_SPRITE,
                    u_CameraPos: Shader3D.PERIOD_CAMERA,
                    u_Viewport: Shader3D.PERIOD_CAMERA,
                    u_ProjectionParams: Shader3D.PERIOD_CAMERA,
                    u_View: Shader3D.PERIOD_CAMERA,
                    u_ViewProjection: Shader3D.PERIOD_CAMERA,
                    u_ReflectTexture: Shader3D.PERIOD_SCENE,
                    u_ReflectIntensity: Shader3D.PERIOD_SCENE,
                    u_DirationLightCount: Shader3D.PERIOD_SCENE,
                    u_LightBuffer: Shader3D.PERIOD_SCENE,
                    u_LightClusterBuffer: Shader3D.PERIOD_SCENE,
                    u_AmbientColor: Shader3D.PERIOD_SCENE,
                    u_ShadowBias: Shader3D.PERIOD_SCENE,
                    u_ShadowLightDirection: Shader3D.PERIOD_SCENE,
                    u_ShadowMap: Shader3D.PERIOD_SCENE,
                    u_ShadowParams: Shader3D.PERIOD_SCENE,
                    u_ShadowSplitSpheres: Shader3D.PERIOD_SCENE,
                    u_ShadowMatrices: Shader3D.PERIOD_SCENE,
                    u_ShadowMapSize: Shader3D.PERIOD_SCENE,
                    u_Time: Shader3D.PERIOD_SCENE,
                    u_AmbientSHAr: Shader3D.PERIOD_SCENE,
                    u_AmbientSHAg: Shader3D.PERIOD_SCENE,
                    u_AmbientSHAb: Shader3D.PERIOD_SCENE,
                    u_AmbientSHBr: Shader3D.PERIOD_SCENE,
                    u_AmbientSHBg: Shader3D.PERIOD_SCENE,
                    u_AmbientSHBb: Shader3D.PERIOD_SCENE,
                    u_AmbientSHC: Shader3D.PERIOD_SCENE,
                    u_FogColor: Shader3D.PERIOD_SCENE,
                    u_FogRange: Shader3D.PERIOD_SCENE,
                    u_FogStart: Shader3D.PERIOD_SCENE,
                    "u_SunLight.color": Shader3D.PERIOD_SCENE,
                    "u_SunLight.direction": Shader3D.PERIOD_SCENE,
                    "u_PointLight.position": Shader3D.PERIOD_SCENE,
                    "u_PointLight.range": Shader3D.PERIOD_SCENE,
                    "u_PointLight.color": Shader3D.PERIOD_SCENE,
                    "u_SpotLight.position": Shader3D.PERIOD_SCENE,
                    "u_SpotLight.direction": Shader3D.PERIOD_SCENE,
                    "u_SpotLight.range": Shader3D.PERIOD_SCENE,
                    "u_SpotLight.spot": Shader3D.PERIOD_SCENE,
                    "u_SpotLight.color": Shader3D.PERIOD_SCENE,
                    u_DiffuseTexture: Shader3D.PERIOD_MATERIAL,
                    u_DiffuseColor: Shader3D.PERIOD_MATERIAL,
                    u_NormalTexture: Shader3D.PERIOD_MATERIAL,
                    u_SpecularColor: Shader3D.PERIOD_MATERIAL,
                    u_RimColor: Shader3D.PERIOD_MATERIAL,
                    u_Contrast: Shader3D.PERIOD_MATERIAL,
                    u_Specular: Shader3D.PERIOD_MATERIAL,
                    u_SpecularSmooth: Shader3D.PERIOD_MATERIAL,
                    u_RimPower: Shader3D.PERIOD_MATERIAL,
                    u_MaskTexture: Shader3D.PERIOD_MATERIAL,
                    u_EmissionTexture: Shader3D.PERIOD_MATERIAL,
                    u_EmissionDirectionX: Shader3D.PERIOD_MATERIAL,
                    u_EmissionDirectionY: Shader3D.PERIOD_MATERIAL,
                    u_EmissionPower: Shader3D.PERIOD_MATERIAL,
                    u_EmissionColor: Shader3D.PERIOD_MATERIAL,
                    u_FogTexture: Shader3D.PERIOD_MATERIAL,
                    u_FogDirectionX: Shader3D.PERIOD_MATERIAL,
                    u_FogDirectionY: Shader3D.PERIOD_MATERIAL,
                    u_FogMapScale: Shader3D.PERIOD_MATERIAL,
                    u_FogPower: Shader3D.PERIOD_MATERIAL,
                    u_FadeFogNear: Shader3D.PERIOD_MATERIAL,
                    u_FadeFogFar: Shader3D.PERIOD_MATERIAL,
                    u_HeightFogPower: Shader3D.PERIOD_MATERIAL,
                    u_HeightFogStart: Shader3D.PERIOD_MATERIAL,
                    u_HeightFogRange: Shader3D.PERIOD_MATERIAL
                };
                var stateMap = {
                    s_Cull: Shader3D.RENDER_STATE_CULL,
                    s_Blend: Shader3D.RENDER_STATE_BLEND,
                    s_BlendSrc: Shader3D.RENDER_STATE_BLEND_SRC,
                    s_BlendDst: Shader3D.RENDER_STATE_BLEND_DST,
                    s_DepthTest: Shader3D.RENDER_STATE_DEPTH_TEST,
                    s_DepthWrite: Shader3D.RENDER_STATE_DEPTH_WRITE
                };
                var shader = Shader3D.add("BlinnPhongFog", null, null, true);
                var subShader = new SubShader(attributeMap, uniformMap);
                shader.addSubShader(subShader);
                subShader.addShaderPass(vs, ps, stateMap, "Forward");
            }
        }]);
        return BlinnPhongFogShader;
    }();
    var ps$1 = '#ifdef GL_FRAGMENT_PRECISION_HIGH\r\n\tprecision highp float;\r\n\tprecision highp int;\r\n#else\r\n\tprecision mediump float;\r\n\tprecision mediump int;\r\n#endif\r\n\r\n#include "Lighting.glsl";\r\n#include "Shadow.glsl"\r\n\r\nuniform vec4 u_DiffuseColor;\r\nuniform vec4 u_SpecularColor;\r\nuniform vec4 u_RimColor;\r\nuniform float u_Contrast;\r\nuniform float u_Specular;\r\nuniform float u_SpecularSmooth;\r\nuniform float u_RimPower;\r\n\r\n#if defined(EMISSIONMAP) || defined(FOGMAP)\r\n\tuniform float u_Time;\r\n#endif\r\n\r\n#if defined(COLOR)\r\n\tvarying vec4 v_Color;\r\n#endif\r\n\r\n#ifdef DIFFUSEMAP\r\n    uniform sampler2D u_DiffuseTexture;\r\n#endif\r\n\r\n#ifdef MASKMAP\r\n\tuniform sampler2D u_MaskTexture;\r\n#endif\r\n\r\n#ifdef EMISSIONMAP\r\n    uniform sampler2D u_EmissionTexture;\r\n    uniform float u_EmissionDirectionX;\r\n\tuniform float u_EmissionDirectionY;\r\n    uniform float u_EmissionPower;\r\n    uniform vec4 u_EmissionColor;\r\n#endif\r\n\r\n#if defined(DIFFUSEMAP) || defined(EMISSIONMAP) || defined(FOGMAP) ||((defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT))&&(defined(NORMALMAP)))\r\n\tvarying vec2 v_Texcoord0;\r\n#endif\r\n\r\nvarying vec3 v_Normal;\r\n#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\r\n\tvarying vec3 v_ViewDir; \r\n\r\n\tuniform vec3 u_MaterialSpecular;\r\n\tuniform float u_Shininess;\r\n\r\n\t#ifdef LEGACYSINGLELIGHTING\r\n\t\t#ifdef DIRECTIONLIGHT\r\n\t\t\tuniform DirectionLight u_DirectionLight;\r\n\t\t#endif\r\n\t\t#ifdef POINTLIGHT\r\n\t\t\tuniform PointLight u_PointLight;\r\n\t\t#endif\r\n\t\t#ifdef SPOTLIGHT\r\n\t\t\tuniform SpotLight u_SpotLight;\r\n\t\t#endif\r\n\t#else\r\n\t\tuniform mat4 u_View;\r\n\t\tuniform vec4 u_ProjectionParams;\r\n\t\tuniform vec4 u_Viewport;\r\n\t\tuniform int u_DirationLightCount;\r\n\t\tuniform DirectionLight u_SunLight;\r\n\t\tuniform sampler2D u_LightBuffer;\r\n\t\tuniform sampler2D u_LightClusterBuffer;\r\n\t#endif\r\n#endif\r\n\r\n#ifdef NORMALMAP \r\n\tuniform sampler2D u_NormalTexture;\r\n\tvarying vec3 v_Tangent;\r\n\tvarying vec3 v_Binormal;\r\n#endif\r\n\r\nuniform float u_Cutoff;\r\nuniform float u_TillingX;\r\nuniform float u_TillingY;\r\nuniform float u_OffsetX;\r\nuniform float u_OffsetY;\r\n\r\n#ifdef FOGMAP\r\n    uniform sampler2D u_FogTexture;\r\n    uniform float u_FogDirectionX;\r\n    uniform float u_FogDirectionY;\r\n    uniform float u_FogMapScale;\r\n    uniform float u_FogPower;\r\n    uniform vec4 u_FogColor;\r\n    uniform float u_FogStart;\r\n    uniform float u_FogRange;\r\n\tuniform float u_FadeFogNear;\r\n\tuniform float u_FadeFogFar;\r\n\tuniform float u_HeightFogPower;\r\n\tuniform float u_HeightFogStart;\r\n\tuniform float u_HeightFogRange;\r\n#endif\r\n\r\n\r\nvarying vec3 v_PositionWorld;\r\n#include "GlobalIllumination.glsl";//"GlobalIllumination.glsl use uniform should at front of this\r\n\r\nvoid main() {\r\n    vec4 baseColor = u_DiffuseColor;\r\n\tvec2 uv = TransformUV(v_Texcoord0, vec4(u_TillingX, u_TillingY, u_OffsetX, u_OffsetY));\r\n    #ifdef DIFFUSEMAP\r\n\t\tvec4 difTexColor=texture2D(u_DiffuseTexture, uv);\r\n\t\tbaseColor=baseColor*difTexColor;\r\n\t#endif\r\n\r\n    if(baseColor.a < u_Cutoff) \r\n        discard;\r\n\r\n    vec3 normal;//light and SH maybe use normal\r\n\t#if defined(NORMALMAP)\r\n\t\tvec3 normalMapSample = texture2D(u_NormalTexture, uv).rgb;\r\n\t\tnormal = normalize(NormalSampleToWorldSpace(normalMapSample, v_Normal, v_Tangent,v_Binormal));\r\n\t#else\r\n\t\tnormal = normalize(v_Normal);\r\n\t#endif\r\n\r\n    LayaGIInput giInput;\r\n\tvec3 globalDiffuse=layaGIBase(giInput,1.0,normal);\r\n\r\n    vec3 lightDir;\r\n\tvec3 lightColor;\r\n\t#if defined(DIRECTIONLIGHT)\r\n\t\tlightDir = u_SunLight.direction;\r\n\t\tlightColor = u_SunLight.color;\r\n\t#else\r\n\t\tlightDir = normalize(vec3(1.0, 1.0, 1.0));\r\n\t\tlightColor = vec3(1.0, 1.0, 1.0);\r\n\t#endif\r\n\tlightDir = -lightDir;\r\n\r\n    vec3 viewDir;\r\n\t#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\r\n\t\tviewDir = normalize(v_ViewDir);\r\n\t#else\r\n\t\tviewDir = normalize(vec3(1.0, 1.0, 1.0));\r\n\t#endif\r\n\r\n\tvec3 halfDir = normalize(lightDir + viewDir);\r\n\r\n    float ndl = max(0.001, dot(normal, lightDir));\r\n\tfloat ndh = max(0.001, dot(normal, halfDir));\r\n\tfloat ndv = max(0.001, dot(normal, viewDir));\r\n\r\n    float diff = ndl * u_Contrast + (1.0 - u_Contrast);\r\n    float spec = pow(ndh, u_Specular * 128.0);\r\n\tspec = smoothstep(0.5 - u_SpecularSmooth * 0.5, 0.5 + u_SpecularSmooth * 0.5, spec);\r\n\r\n\tvec4 maskCol = vec4(1.0, 1.0, 1.0, 1.0);\r\n\t#ifdef MASKMAP\r\n\t\tmaskCol = texture2D(u_MaskTexture, v_Texcoord0);\r\n\t#endif\r\n\r\n    vec3 specular =  u_SpecularColor.rgb * spec * maskCol.r;\r\n\r\n    float rim = (1.0 - ndv) * ndl;\r\n    vec3 rimColor = u_RimColor.rgb * u_RimPower * rim;\r\n\r\n\tvec3 emission = vec3(0.0, 0.0, 0.0);\r\n\t#ifdef EMISSIONMAP\r\n\t\tvec4 emissionCol = texture2D(u_EmissionTexture, v_Texcoord0);\r\n\t\t#ifdef MASKMAP\r\n\t\t\tvec4 emissionOffsetCol = texture2D(u_MaskTexture, v_Texcoord0 + vec2(u_EmissionDirectionX, u_EmissionDirectionY) * u_Time * 0.05);\r\n\t\t\temission = emissionCol.rgb * u_EmissionPower * emissionOffsetCol.g;\r\n\t\t\temission = mix(emission, emission * u_EmissionColor.rgb,  maskCol.b);\r\n\t\t#else\r\n\t\t\temission = emissionCol.rgb * u_EmissionColor.rgb * u_EmissionPower;\r\n\t\t#endif\r\n\t#endif\r\n\r\n    vec3 finalCol = (baseColor.rgb * lightColor + rimColor) * diff + specular + emission;\r\n\tfinalCol = finalCol + globalDiffuse * baseColor.rgb * lightColor;\r\n\t#if defined(COLOR)\r\n\t\tfinalCol = finalCol * v_Color.rgb;\r\n\t#endif\r\n\r\n\t#ifdef FOGMAP\r\n\t\tfloat fogCoord = 1.0 - (1.0/gl_FragCoord.w-u_FogStart)/u_FogRange;\r\n\r\n\t\tvec2 worldUV = v_PositionWorld.xz / u_FogMapScale;\r\n\t\tvec4 fogHeightColor = texture2D(u_FogTexture, worldUV + vec2(-u_FogDirectionX, u_FogDirectionY) * u_Time * 0.05);\r\n\r\n\t\tfloat fogDis = max(u_HeightFogRange, 0.01) * fogHeightColor.r;\r\n\t\tfloat hFogLerp = (v_PositionWorld.y - u_HeightFogStart) / fogDis;\r\n\t\thFogLerp = mix(fogHeightColor.g * (1.0 - u_HeightFogPower), 1.0, clamp(hFogLerp, 0.0, 1.0));\r\n\r\n\t\tfloat fadeFogDis = max(u_FadeFogFar - u_FadeFogNear, 0.01);\r\n\t\tfloat fadeFogLerp = clamp((1.0/gl_FragCoord.w - u_FadeFogNear) / fadeFogDis, 0.0, 1.0);\r\n\r\n\t\tfogCoord = hFogLerp * (1.0 - fadeFogLerp) + fogCoord * fadeFogLerp;\r\n\r\n\t\tfinalCol = mix(mix(finalCol,  u_FogColor.rgb, u_FogPower), finalCol, clamp(fogCoord, 0.0, 1.0));\r\n\t#endif\r\n\r\n\tgl_FragColor = vec4(finalCol, 1.0);\r\n}';
    var vs$1 = '#include "Lighting.glsl";\r\n#include "Shadow.glsl";\r\n\r\nattribute vec4 a_Position;\r\n\r\n#ifdef GPU_INSTANCE\r\n\tattribute mat4 a_MvpMatrix;\r\n#else\r\n\tuniform mat4 u_MvpMatrix;\r\n#endif\r\n\r\n#if defined(DIFFUSEMAP) || defined(MASKMAP) || defined(EMISSIONMAP) || defined(FOGMAP) ||((defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT))&&(defined(SPECULARMAP)||defined(NORMALMAP)))||(defined(LIGHTMAP)&&defined(UV))\r\n\tattribute vec2 a_Texcoord0;\r\n\tvarying vec2 v_Texcoord0;\r\n#endif\r\n\r\n#ifdef COLOR\r\n\tattribute vec4 a_Color;\r\n\tvarying vec4 v_Color;\r\n#endif\r\n\r\n#ifdef BONE\r\n\tconst int c_MaxBoneCount = 24;\r\n\tattribute vec4 a_BoneIndices;\r\n\tattribute vec4 a_BoneWeights;\r\n\tuniform mat4 u_Bones[c_MaxBoneCount];\r\n#endif\r\n\r\nattribute vec3 a_Normal;\r\nvarying vec3 v_Normal; \r\n\r\n#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\r\n\tuniform vec3 u_CameraPos;\r\n\tvarying vec3 v_ViewDir; \r\n#endif\r\n\r\n#if defined(NORMALMAP)\r\n\tattribute vec4 a_Tangent0;\r\n\tvarying vec3 v_Tangent;\r\n\tvarying vec3 v_Binormal;\r\n#endif\r\n\r\n#ifdef GPU_INSTANCE\r\n\tattribute mat4 a_WorldMat;\r\n#else\r\n\tuniform mat4 u_WorldMat;\r\n#endif\r\n\r\nvarying vec3 v_PositionWorld;\r\n\r\n#ifdef TILINGOFFSET\r\n\tuniform vec4 u_TilingOffset;\r\n#endif\r\n\r\n#ifdef SIMPLEBONE\r\n\t#ifdef GPU_INSTANCE\r\n\t\tattribute vec4 a_SimpleTextureParams;\r\n\t#else\r\n\t\tuniform vec4 u_SimpleAnimatorParams;\r\n\t#endif\r\n\tuniform sampler2D u_SimpleAnimatorTexture;\r\n\r\n\tuniform float u_SimpleAnimatorTextureSize; \r\n#endif\r\n\r\n\r\n#ifdef SIMPLEBONE\r\nmat4 loadMatFromTexture(float FramePos,int boneIndices,float offset)\r\n{\r\n\tvec2 uv;\r\n\tfloat PixelPos = FramePos+float(boneIndices)*4.0;\r\n\tfloat halfOffset = offset * 0.5;\r\n\tfloat uvoffset = PixelPos/u_SimpleAnimatorTextureSize;\r\n\tuv.y = floor(uvoffset)*offset+halfOffset;\r\n\tuv.x = mod(float(PixelPos),u_SimpleAnimatorTextureSize)*offset+halfOffset;\r\n\tvec4 mat0row = texture2D(u_SimpleAnimatorTexture,uv);\r\n\tuv.x+=offset;\r\n\tvec4 mat1row = texture2D(u_SimpleAnimatorTexture,uv);\r\n\tuv.x+=offset;\r\n\tvec4 mat2row = texture2D(u_SimpleAnimatorTexture,uv);\r\n\tuv.x+=offset;\r\n\tvec4 mat3row = texture2D(u_SimpleAnimatorTexture,uv);\r\n\tmat4 m =mat4(mat0row.x,mat0row.y,mat0row.z,mat0row.w,\r\n\t\t\t  mat1row.x,mat1row.y,mat1row.z,mat1row.w,\r\n\t\t\t  mat2row.x,mat2row.y,mat2row.z,mat2row.w,\r\n\t\t\t  mat3row.x,mat3row.y,mat3row.z,mat3row.w);\r\n\treturn m;\r\n}\r\n#endif\r\n\r\nvoid main()\r\n{\r\n\tvec4 position;\r\n\t#ifdef BONE\r\n\t\tmat4 skinTransform;\r\n\t \t#ifdef SIMPLEBONE\r\n\t\t\tfloat currentPixelPos;\r\n\t\t\t#ifdef GPU_INSTANCE\r\n\t\t\t\tcurrentPixelPos = a_SimpleTextureParams.x+a_SimpleTextureParams.y;\r\n\t\t\t#else\r\n\t\t\t\tcurrentPixelPos = u_SimpleAnimatorParams.x+u_SimpleAnimatorParams.y;\r\n\t\t\t#endif\r\n\t\t\tfloat offset = 1.0/u_SimpleAnimatorTextureSize;\r\n\t\t\tskinTransform =  loadMatFromTexture(currentPixelPos,int(a_BoneIndices.x),offset) * a_BoneWeights.x;\r\n\t\t\tskinTransform += loadMatFromTexture(currentPixelPos,int(a_BoneIndices.y),offset) * a_BoneWeights.y;\r\n\t\t\tskinTransform += loadMatFromTexture(currentPixelPos,int(a_BoneIndices.z),offset) * a_BoneWeights.z;\r\n\t\t\tskinTransform += loadMatFromTexture(currentPixelPos,int(a_BoneIndices.w),offset) * a_BoneWeights.w;\r\n\t\t#else\r\n\t\t\tskinTransform =  u_Bones[int(a_BoneIndices.x)] * a_BoneWeights.x;\r\n\t\t\tskinTransform += u_Bones[int(a_BoneIndices.y)] * a_BoneWeights.y;\r\n\t\t\tskinTransform += u_Bones[int(a_BoneIndices.z)] * a_BoneWeights.z;\r\n\t\t\tskinTransform += u_Bones[int(a_BoneIndices.w)] * a_BoneWeights.w;\r\n\t\t#endif\r\n\t\tposition=skinTransform*a_Position;\r\n\t #else\r\n\t\tposition=a_Position;\r\n\t#endif\r\n\r\n\t#ifdef GPU_INSTANCE\r\n\t\tgl_Position = a_MvpMatrix * position;\r\n\t#else\r\n\t\tgl_Position = u_MvpMatrix * position;\r\n\t#endif\r\n\t\r\n\tmat4 worldMat;\r\n\t#ifdef GPU_INSTANCE\r\n\t\tworldMat = a_WorldMat;\r\n\t#else\r\n\t\tworldMat = u_WorldMat;\r\n\t#endif\r\n\r\n\tmat3 worldInvMat;\r\n\t#ifdef BONE\r\n\t\tworldInvMat=INVERSE_MAT(mat3(worldMat*skinTransform));\r\n\t#else\r\n\t\tworldInvMat=INVERSE_MAT(mat3(worldMat));\r\n\t#endif  \r\n\tv_Normal=normalize(a_Normal*worldInvMat);\r\n\t#if defined(NORMALMAP)\r\n\t\tv_Tangent=normalize(a_Tangent0.xyz*worldInvMat);\r\n\t\tv_Binormal=cross(v_Normal,v_Tangent)*a_Tangent0.w;\r\n\t#endif\r\n\r\n\tvec3 positionWS=(worldMat*position).xyz;\r\n\t#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\r\n\t\tv_ViewDir = u_CameraPos-positionWS;\r\n\t#endif\r\n\tv_PositionWorld = positionWS;\r\n\r\n\t#if defined(DIFFUSEMAP) || defined(MASKMAP) || defined(EMISSIONMAP) || defined(FOGMAP) ||((defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT))&&(defined(SPECULARMAP)||defined(NORMALMAP)))\r\n\t\t#ifdef TILINGOFFSET\r\n\t\t\tv_Texcoord0=TransformUV(a_Texcoord0,u_TilingOffset);\r\n\t\t#else\r\n\t\t\tv_Texcoord0=a_Texcoord0;\r\n\t\t#endif\r\n\t#endif\r\n\r\n\t#if defined(COLOR)&&defined(ENABLEVERTEXCOLOR)\r\n\t\tv_Color=a_Color;\r\n\t#endif\r\n\r\n\tgl_Position=remapGLPositionZ(gl_Position);\r\n}';
    var Shader3D$1 = Laya.Shader3D;
    var SubShader$1 = Laya.SubShader;
    var VertexMesh$1 = Laya.VertexMesh;
    var BlinnPhongFogTransShader = /* */ function () {
        function BlinnPhongFogTransShader() {
            (0, _classCallCheck2.default)(this, BlinnPhongFogTransShader);
        }
        (0, _createClass2.default)(BlinnPhongFogTransShader, null, [{
            key: "init",
            value: function init() {
                var attributeMap = {
                    a_Position: VertexMesh$1.MESH_POSITION0,
                    a_Color: VertexMesh$1.MESH_COLOR0,
                    a_Normal: VertexMesh$1.MESH_NORMAL0,
                    a_Texcoord0: VertexMesh$1.MESH_TEXTURECOORDINATE0,
                    a_Texcoord1: VertexMesh$1.MESH_TEXTURECOORDINATE1,
                    a_BoneWeights: VertexMesh$1.MESH_BLENDWEIGHT0,
                    a_BoneIndices: VertexMesh$1.MESH_BLENDINDICES0,
                    a_Tangent0: VertexMesh$1.MESH_TANGENT0,
                    a_MvpMatrix: VertexMesh$1.MESH_MVPMATRIX_ROW0,
                    a_WorldMat: VertexMesh$1.MESH_WORLDMATRIX_ROW0
                };
                var uniformMap = {
                    u_Bones: Shader3D$1.PERIOD_CUSTOM,
                    u_WorldMat: Shader3D$1.PERIOD_SPRITE,
                    u_MvpMatrix: Shader3D$1.PERIOD_SPRITE,
                    u_Projection: Shader3D$1.PERIOD_CAMERA,
                    u_LightmapScaleOffset: Shader3D$1.PERIOD_SPRITE,
                    u_LightMap: Shader3D$1.PERIOD_SPRITE,
                    u_LightMapDirection: Shader3D$1.PERIOD_SPRITE,
                    u_CameraPos: Shader3D$1.PERIOD_CAMERA,
                    u_Viewport: Shader3D$1.PERIOD_CAMERA,
                    u_ProjectionParams: Shader3D$1.PERIOD_CAMERA,
                    u_View: Shader3D$1.PERIOD_CAMERA,
                    u_ViewProjection: Shader3D$1.PERIOD_CAMERA,
                    u_ReflectTexture: Shader3D$1.PERIOD_SCENE,
                    u_ReflectIntensity: Shader3D$1.PERIOD_SCENE,
                    u_DirationLightCount: Shader3D$1.PERIOD_SCENE,
                    u_LightBuffer: Shader3D$1.PERIOD_SCENE,
                    u_LightClusterBuffer: Shader3D$1.PERIOD_SCENE,
                    u_AmbientColor: Shader3D$1.PERIOD_SCENE,
                    u_ShadowBias: Shader3D$1.PERIOD_SCENE,
                    u_ShadowLightDirection: Shader3D$1.PERIOD_SCENE,
                    u_ShadowMap: Shader3D$1.PERIOD_SCENE,
                    u_ShadowParams: Shader3D$1.PERIOD_SCENE,
                    u_ShadowSplitSpheres: Shader3D$1.PERIOD_SCENE,
                    u_ShadowMatrices: Shader3D$1.PERIOD_SCENE,
                    u_ShadowMapSize: Shader3D$1.PERIOD_SCENE,
                    u_Time: Shader3D$1.PERIOD_SCENE,
                    u_AmbientSHAr: Shader3D$1.PERIOD_SCENE,
                    u_AmbientSHAg: Shader3D$1.PERIOD_SCENE,
                    u_AmbientSHAb: Shader3D$1.PERIOD_SCENE,
                    u_AmbientSHBr: Shader3D$1.PERIOD_SCENE,
                    u_AmbientSHBg: Shader3D$1.PERIOD_SCENE,
                    u_AmbientSHBb: Shader3D$1.PERIOD_SCENE,
                    u_AmbientSHC: Shader3D$1.PERIOD_SCENE,
                    u_FogColor: Shader3D$1.PERIOD_SCENE,
                    u_FogRange: Shader3D$1.PERIOD_SCENE,
                    u_FogStart: Shader3D$1.PERIOD_SCENE,
                    "u_SunLight.color": Shader3D$1.PERIOD_SCENE,
                    "u_SunLight.direction": Shader3D$1.PERIOD_SCENE,
                    "u_PointLight.position": Shader3D$1.PERIOD_SCENE,
                    "u_PointLight.range": Shader3D$1.PERIOD_SCENE,
                    "u_PointLight.color": Shader3D$1.PERIOD_SCENE,
                    "u_SpotLight.position": Shader3D$1.PERIOD_SCENE,
                    "u_SpotLight.direction": Shader3D$1.PERIOD_SCENE,
                    "u_SpotLight.range": Shader3D$1.PERIOD_SCENE,
                    "u_SpotLight.spot": Shader3D$1.PERIOD_SCENE,
                    "u_SpotLight.color": Shader3D$1.PERIOD_SCENE,
                    u_DiffuseTexture: Shader3D$1.PERIOD_MATERIAL,
                    u_DiffuseColor: Shader3D$1.PERIOD_MATERIAL,
                    u_Cutoff: Shader3D$1.PERIOD_MATERIAL,
                    u_TillingX: Shader3D$1.PERIOD_MATERIAL,
                    u_TillingY: Shader3D$1.PERIOD_MATERIAL,
                    u_OffsetX: Shader3D$1.PERIOD_MATERIAL,
                    u_OffsetY: Shader3D$1.PERIOD_MATERIAL,
                    u_NormalTexture: Shader3D$1.PERIOD_MATERIAL,
                    u_SpecularColor: Shader3D$1.PERIOD_MATERIAL,
                    u_RimColor: Shader3D$1.PERIOD_MATERIAL,
                    u_Contrast: Shader3D$1.PERIOD_MATERIAL,
                    u_Specular: Shader3D$1.PERIOD_MATERIAL,
                    u_SpecularSmooth: Shader3D$1.PERIOD_MATERIAL,
                    u_RimPower: Shader3D$1.PERIOD_MATERIAL,
                    u_MaskTexture: Shader3D$1.PERIOD_MATERIAL,
                    u_EmissionTexture: Shader3D$1.PERIOD_MATERIAL,
                    u_EmissionDirectionX: Shader3D$1.PERIOD_MATERIAL,
                    u_EmissionDirectionY: Shader3D$1.PERIOD_MATERIAL,
                    u_EmissionPower: Shader3D$1.PERIOD_MATERIAL,
                    u_EmissionColor: Shader3D$1.PERIOD_MATERIAL,
                    u_FogTexture: Shader3D$1.PERIOD_MATERIAL,
                    u_FogDirectionX: Shader3D$1.PERIOD_MATERIAL,
                    u_FogDirectionY: Shader3D$1.PERIOD_MATERIAL,
                    u_FogMapScale: Shader3D$1.PERIOD_MATERIAL,
                    u_FogPower: Shader3D$1.PERIOD_MATERIAL,
                    u_FadeFogNear: Shader3D$1.PERIOD_MATERIAL,
                    u_FadeFogFar: Shader3D$1.PERIOD_MATERIAL,
                    u_HeightFogPower: Shader3D$1.PERIOD_MATERIAL,
                    u_HeightFogStart: Shader3D$1.PERIOD_MATERIAL,
                    u_HeightFogRange: Shader3D$1.PERIOD_MATERIAL
                };
                var stateMap = {
                    s_Cull: Shader3D$1.RENDER_STATE_CULL,
                    s_Blend: Shader3D$1.RENDER_STATE_BLEND,
                    s_BlendSrc: Shader3D$1.RENDER_STATE_BLEND_SRC,
                    s_BlendDst: Shader3D$1.RENDER_STATE_BLEND_DST,
                    s_DepthTest: Shader3D$1.RENDER_STATE_DEPTH_TEST,
                    s_DepthWrite: Shader3D$1.RENDER_STATE_DEPTH_WRITE
                };
                var shader = Shader3D$1.add("BlinnPhongFogTrans", null, null, true);
                var subShader = new SubShader$1(attributeMap, uniformMap);
                shader.addSubShader(subShader);
                subShader.addShaderPass(vs$1, ps$1, stateMap, "Forward");
            }
        }]);
        return BlinnPhongFogTransShader;
    }();
    var BlinnPhongFogMaterial = /* */ function (_Laya$Material) {
        (0, _inherits2.default)(BlinnPhongFogMaterial, _Laya$Material);
        var _super4 = _createSuper(BlinnPhongFogMaterial);
        function BlinnPhongFogMaterial() {
            var _this2;
            (0, _classCallCheck2.default)(this, BlinnPhongFogMaterial);
            _this2 = _super4.call(this);
            _this2.setShaderName("BlinnPhongFog");
            return _this2;
        }
        (0, _createClass2.default)(BlinnPhongFogMaterial, [{
            key: "clone",
            value: function clone() {
                var copyMat = new BlinnPhongFogMaterial();
                copyMat._Color = this._Color;
                copyMat._SpecularColor = this._SpecularColor;
                copyMat._RimColor = this._RimColor;
                copyMat._MainTex = this._MainTex;
                copyMat._NormalTex = this._NormalTex;
                copyMat._MaskTex = this._MaskTex;
                copyMat._EmissionTex = this._EmissionTex;
                copyMat._EmissionDirX = this._EmissionDirX;
                copyMat._EmissionDirY = this._EmissionDirY;
                copyMat._EmissionPower = this._EmissionPower;
                copyMat._EmissionColor = this._EmissionColor;
                copyMat._FogTex = this._FogTex;
                copyMat._FogDirX = this._FogDirX;
                copyMat._FogDirY = this._FogDirY;
                copyMat._FogMapScale = this._FogMapScale;
                copyMat._FogBlend = this._FogBlend;
                copyMat._FogPower = this._FogPower;
                copyMat._HeightFogPower = this._HeightFogPower;
                copyMat._HeightFogStart = this._HeightFogStart;
                copyMat._HeightFogRange = this._HeightFogRange;
                copyMat._Contrast = this._Contrast;
                copyMat._Specular = this._Specular;
                copyMat._SpecSmooth = this._SpecSmooth;
                copyMat._RimPower = this._RimPower;
                return copyMat;
            }
        }, {
            key: "_Color",
            get: function get() {
                return this._shaderValues.getVector(BlinnPhongFogMaterial.DIFFUSECOLOR);
            },
            set: function set(value) {
                this._shaderValues.setVector(BlinnPhongFogMaterial.DIFFUSECOLOR, value);
            }
        }, {
            key: "_SpecularColor",
            get: function get() {
                return this._shaderValues.getVector(BlinnPhongFogMaterial.SPECULARCOLOR);
            },
            set: function set(value) {
                this._shaderValues.setVector(BlinnPhongFogMaterial.SPECULARCOLOR, value);
            }
        }, {
            key: "_RimColor",
            get: function get() {
                return this._shaderValues.getVector(BlinnPhongFogMaterial.RIMCOLOR);
            },
            set: function set(value) {
                this._shaderValues.setVector(BlinnPhongFogMaterial.RIMCOLOR, value);
            }
        }, {
            key: "_MainTex",
            get: function get() {
                return this._shaderValues.getTexture(BlinnPhongFogMaterial.DIFFUSETEXTURE);
            },
            set: function set(value) {
                if (value) this._shaderValues.addDefine(BlinnPhongFogMaterial.SHADERDEFINE_DIFFUSEMAP); else this._shaderValues.removeDefine(BlinnPhongFogMaterial.SHADERDEFINE_DIFFUSEMAP);
                this._shaderValues.setTexture(BlinnPhongFogMaterial.DIFFUSETEXTURE, value);
            }
        }, {
            key: "_NormalTex",
            get: function get() {
                return this._shaderValues.getTexture(BlinnPhongFogMaterial.NORMALTEXTURE);
            },
            set: function set(value) {
                if (value) this._shaderValues.addDefine(BlinnPhongFogMaterial.SHADERDEFINE_NORMALMAP); else this._shaderValues.removeDefine(BlinnPhongFogMaterial.SHADERDEFINE_NORMALMAP);
                this._shaderValues.setTexture(BlinnPhongFogMaterial.NORMALTEXTURE, value);
            }
        }, {
            key: "_MaskTex",
            get: function get() {
                return this._shaderValues.getTexture(BlinnPhongFogMaterial.MASKTEXTURE);
            },
            set: function set(value) {
                if (value) this._shaderValues.addDefine(BlinnPhongFogMaterial.SHADERDEFINE_MASKMAP); else this._shaderValues.removeDefine(BlinnPhongFogMaterial.SHADERDEFINE_MASKMAP);
                this._shaderValues.setTexture(BlinnPhongFogMaterial.MASKTEXTURE, value);
            }
        }, {
            key: "_EmissionTex",
            get: function get() {
                return this._shaderValues.getTexture(BlinnPhongFogMaterial.EMISSIONTEXTURE);
            },
            set: function set(value) {
                if (value) this._shaderValues.addDefine(BlinnPhongFogMaterial.SHADERDEFINE_EMISSIONMAP); else this._shaderValues.removeDefine(BlinnPhongFogMaterial.SHADERDEFINE_EMISSIONMAP);
                this._shaderValues.setTexture(BlinnPhongFogMaterial.EMISSIONTEXTURE, value);
            }
        }, {
            key: "_EmissionDirX",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogMaterial.EMISSIONDIRECTIONX);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogMaterial.EMISSIONDIRECTIONX, value);
            }
        }, {
            key: "_EmissionDirY",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogMaterial.EMISSIONDIRECTIONY);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogMaterial.EMISSIONDIRECTIONY, value);
            }
        }, {
            key: "_EmissionPower",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogMaterial.EMISSIONPOWER);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogMaterial.EMISSIONPOWER, value);
            }
        }, {
            key: "_EmissionColor",
            get: function get() {
                return this._shaderValues.getVector(BlinnPhongFogMaterial.EMISSIONCOLOR);
            },
            set: function set(value) {
                this._shaderValues.setVector(BlinnPhongFogMaterial.EMISSIONCOLOR, value);
            }
        }, {
            key: "_FogTex",
            get: function get() {
                return this._shaderValues.getTexture(BlinnPhongFogMaterial.FOGTEXURE);
            },
            set: function set(value) {
                if (value) this._shaderValues.addDefine(BlinnPhongFogMaterial.SHADERDEFINE_FOGMAP); else this._shaderValues.removeDefine(BlinnPhongFogMaterial.SHADERDEFINE_FOGMAP);
                this._shaderValues.setTexture(BlinnPhongFogMaterial.FOGTEXURE, value);
            }
        }, {
            key: "_FogDirX",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogMaterial.FOGDIRECTIONX);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogMaterial.FOGDIRECTIONX, value);
            }
        }, {
            key: "_FogDirY",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogMaterial.FOGDIRECTIONY);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogMaterial.FOGDIRECTIONY, value);
            }
        }, {
            key: "_FogMapScale",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogMaterial.FOGMAPSCALE);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogMaterial.FOGMAPSCALE, value);
            }
        }, {
            key: "_FadeFogNear",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogMaterial.FADEFOGNEAR);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogMaterial.FADEFOGNEAR, value);
            }
        }, {
            key: "_FadeFogFar",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogMaterial.FADEFOGFAR);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogMaterial.FADEFOGFAR, value);
            }
        }, {
            key: "_FogBlend",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogMaterial.FOGBLEND);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogMaterial.FOGBLEND, value);
            }
        }, {
            key: "_FogPower",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogMaterial.FOGPOWER);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogMaterial.FOGPOWER, value);
            }
        }, {
            key: "_HeightFogPower",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogMaterial.HEIGHTFOGPOWER);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogMaterial.HEIGHTFOGPOWER, value);
            }
        }, {
            key: "_HeightFogStart",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogMaterial.HEIGHTFOGSTART);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogMaterial.HEIGHTFOGSTART, value);
            }
        }, {
            key: "_HeightFogRange",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogMaterial.HEIGHTFOGRANGE);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogMaterial.HEIGHTFOGRANGE, value);
            }
        }, {
            key: "_Contrast",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogMaterial.CONTRAST);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogMaterial.CONTRAST, value);
            }
        }, {
            key: "_Specular",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogMaterial.SPECULAR);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogMaterial.SPECULAR, value);
            }
        }, {
            key: "_SpecSmooth",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogMaterial.SPECUALRSMOOTH);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogMaterial.SPECUALRSMOOTH, value);
            }
        }, {
            key: "_RimPower",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogMaterial.RIMPOWER);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogMaterial.RIMPOWER, value);
            }
        }], [{
            key: "init",
            value: function init() {
                Laya.ClassUtils.regClass("Laya.BlinnPhongFog", BlinnPhongFogMaterial);
            }
        }]);
        return BlinnPhongFogMaterial;
    }(Laya.Material);
    BlinnPhongFogMaterial.DIFFUSETEXTURE = Laya.Shader3D.propertyNameToID("u_DiffuseTexture");
    BlinnPhongFogMaterial.DIFFUSECOLOR = Laya.Shader3D.propertyNameToID("u_DiffuseColor");
    BlinnPhongFogMaterial.NORMALTEXTURE = Laya.Shader3D.propertyNameToID("u_NormalTexture");
    BlinnPhongFogMaterial.SPECULARCOLOR = Laya.Shader3D.propertyNameToID("u_SpecularColor");
    BlinnPhongFogMaterial.RIMCOLOR = Laya.Shader3D.propertyNameToID("u_RimColor");
    BlinnPhongFogMaterial.CONTRAST = Laya.Shader3D.propertyNameToID("u_Contrast");
    BlinnPhongFogMaterial.SPECULAR = Laya.Shader3D.propertyNameToID("u_Specular");
    BlinnPhongFogMaterial.SPECUALRSMOOTH = Laya.Shader3D.propertyNameToID("u_SpecularSmooth");
    BlinnPhongFogMaterial.RIMPOWER = Laya.Shader3D.propertyNameToID("u_RimPower");
    BlinnPhongFogMaterial.MASKTEXTURE = Laya.Shader3D.propertyNameToID("u_MaskTexture");
    BlinnPhongFogMaterial.EMISSIONTEXTURE = Laya.Shader3D.propertyNameToID("u_EmissionTexture");
    BlinnPhongFogMaterial.EMISSIONDIRECTIONX = Laya.Shader3D.propertyNameToID("u_EmissionDirectionX");
    BlinnPhongFogMaterial.EMISSIONDIRECTIONY = Laya.Shader3D.propertyNameToID("u_EmissionDirectionY");
    BlinnPhongFogMaterial.EMISSIONPOWER = Laya.Shader3D.propertyNameToID("u_EmissionPower");
    BlinnPhongFogMaterial.EMISSIONCOLOR = Laya.Shader3D.propertyNameToID("u_EmissionColor");
    BlinnPhongFogMaterial.FOGTEXURE = Laya.Shader3D.propertyNameToID("u_FogTexture");
    BlinnPhongFogMaterial.FOGDIRECTIONX = Laya.Shader3D.propertyNameToID("u_FogDirectionX");
    BlinnPhongFogMaterial.FOGDIRECTIONY = Laya.Shader3D.propertyNameToID("u_FogDirectionY");
    BlinnPhongFogMaterial.FOGMAPSCALE = Laya.Shader3D.propertyNameToID("u_FogMapScale");
    BlinnPhongFogMaterial.FOGBLEND = Laya.Shader3D.propertyNameToID("u_FogBlend");
    BlinnPhongFogMaterial.FOGPOWER = Laya.Shader3D.propertyNameToID("u_FogPower");
    BlinnPhongFogMaterial.FADEFOGNEAR = Laya.Shader3D.propertyNameToID("u_FadeFogNear");
    BlinnPhongFogMaterial.FADEFOGFAR = Laya.Shader3D.propertyNameToID("u_FadeFogFar");
    BlinnPhongFogMaterial.HEIGHTFOGPOWER = Laya.Shader3D.propertyNameToID("u_HeightFogPower");
    BlinnPhongFogMaterial.HEIGHTFOGSTART = Laya.Shader3D.propertyNameToID("u_HeightFogStart");
    BlinnPhongFogMaterial.HEIGHTFOGRANGE = Laya.Shader3D.propertyNameToID("u_HeightFogRange");
    BlinnPhongFogMaterial.SHADERDEFINE_DIFFUSEMAP = Laya.Shader3D.getDefineByName("DIFFUSEMAP");
    BlinnPhongFogMaterial.SHADERDEFINE_NORMALMAP = Laya.Shader3D.getDefineByName("NORMALMAP");
    BlinnPhongFogMaterial.SHADERDEFINE_MASKMAP = Laya.Shader3D.getDefineByName("MASKMAP");
    BlinnPhongFogMaterial.SHADERDEFINE_EMISSIONMAP = Laya.Shader3D.getDefineByName("EMISSIONMAP");
    BlinnPhongFogMaterial.SHADERDEFINE_FOGMAP = Laya.Shader3D.getDefineByName("FOGMAP");
    var BlinnPhongFogTransMaterial = /* */ function (_Laya$Material2) {
        (0, _inherits2.default)(BlinnPhongFogTransMaterial, _Laya$Material2);
        var _super5 = _createSuper(BlinnPhongFogTransMaterial);
        function BlinnPhongFogTransMaterial() {
            var _this3;
            (0, _classCallCheck2.default)(this, BlinnPhongFogTransMaterial);
            _this3 = _super5.call(this);
            _this3.setShaderName("BlinnPhongFogTrans");
            return _this3;
        }
        (0, _createClass2.default)(BlinnPhongFogTransMaterial, [{
            key: "clone",
            value: function clone() {
                var copyMat = new BlinnPhongFogTransMaterial();
                copyMat._Color = this._Color;
                copyMat._Cutoff = this._Cutoff;
                copyMat._SpecularColor = this._SpecularColor;
                copyMat._RimColor = this._RimColor;
                copyMat._MainTex = this._MainTex;
                copyMat._NormalTex = this._NormalTex;
                copyMat._MaskTex = this._MaskTex;
                copyMat._TillingX = this._TillingX;
                copyMat._TillingY = this._TillingY;
                copyMat._OffsetX = this._OffsetX;
                copyMat._OffsetY = this._OffsetY;
                copyMat._EmissionTex = this._EmissionTex;
                copyMat._EmissionDirX = this._EmissionDirX;
                copyMat._EmissionDirY = this._EmissionDirY;
                copyMat._EmissionPower = this._EmissionPower;
                copyMat._EmissionColor = this._EmissionColor;
                copyMat._FogTex = this._FogTex;
                copyMat._FogDirX = this._FogDirX;
                copyMat._FogDirY = this._FogDirY;
                copyMat._FogMapScale = this._FogMapScale;
                copyMat._FogBlend = this._FogBlend;
                copyMat._FogPower = this._FogPower;
                copyMat._HeightFogPower = this._HeightFogPower;
                copyMat._HeightFogStart = this._HeightFogStart;
                copyMat._HeightFogRange = this._HeightFogRange;
                copyMat._Contrast = this._Contrast;
                copyMat._Specular = this._Specular;
                copyMat._SpecSmooth = this._SpecSmooth;
                copyMat._RimPower = this._RimPower;
                return copyMat;
            }
        }, {
            key: "_Cutoff",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogTransMaterial.CUTOFF);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogTransMaterial.CUTOFF, value);
            }
        }, {
            key: "_TillingX",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogTransMaterial.TILLINGX);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogTransMaterial.TILLINGX, value);
            }
        }, {
            key: "_TillingY",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogTransMaterial.TILLINGY);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogTransMaterial.TILLINGY, value);
            }
        }, {
            key: "_OffsetX",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogTransMaterial.OFFSETX);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogTransMaterial.OFFSETX, value);
            }
        }, {
            key: "_OffsetY",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogTransMaterial.OFFSETY);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogTransMaterial.OFFSETY, value);
            }
        }, {
            key: "_Color",
            get: function get() {
                return this._shaderValues.getVector(BlinnPhongFogTransMaterial.DIFFUSECOLOR);
            },
            set: function set(value) {
                this._shaderValues.setVector(BlinnPhongFogTransMaterial.DIFFUSECOLOR, value);
            }
        }, {
            key: "_SpecularColor",
            get: function get() {
                return this._shaderValues.getVector(BlinnPhongFogTransMaterial.SPECULARCOLOR);
            },
            set: function set(value) {
                this._shaderValues.setVector(BlinnPhongFogTransMaterial.SPECULARCOLOR, value);
            }
        }, {
            key: "_RimColor",
            get: function get() {
                return this._shaderValues.getVector(BlinnPhongFogTransMaterial.RIMCOLOR);
            },
            set: function set(value) {
                this._shaderValues.setVector(BlinnPhongFogTransMaterial.RIMCOLOR, value);
            }
        }, {
            key: "_MainTex",
            get: function get() {
                return this._shaderValues.getTexture(BlinnPhongFogTransMaterial.DIFFUSETEXTURE);
            },
            set: function set(value) {
                if (value) this._shaderValues.addDefine(BlinnPhongFogTransMaterial.SHADERDEFINE_DIFFUSEMAP); else this._shaderValues.removeDefine(BlinnPhongFogTransMaterial.SHADERDEFINE_DIFFUSEMAP);
                this._shaderValues.setTexture(BlinnPhongFogTransMaterial.DIFFUSETEXTURE, value);
            }
        }, {
            key: "_NormalTex",
            get: function get() {
                return this._shaderValues.getTexture(BlinnPhongFogTransMaterial.NORMALTEXTURE);
            },
            set: function set(value) {
                if (value) this._shaderValues.addDefine(BlinnPhongFogTransMaterial.SHADERDEFINE_NORMALMAP); else this._shaderValues.removeDefine(BlinnPhongFogTransMaterial.SHADERDEFINE_NORMALMAP);
                this._shaderValues.setTexture(BlinnPhongFogTransMaterial.NORMALTEXTURE, value);
            }
        }, {
            key: "_MaskTex",
            get: function get() {
                return this._shaderValues.getTexture(BlinnPhongFogTransMaterial.MASKTEXTURE);
            },
            set: function set(value) {
                if (value) this._shaderValues.addDefine(BlinnPhongFogTransMaterial.SHADERDEFINE_MASKMAP); else this._shaderValues.removeDefine(BlinnPhongFogTransMaterial.SHADERDEFINE_MASKMAP);
                this._shaderValues.setTexture(BlinnPhongFogTransMaterial.MASKTEXTURE, value);
            }
        }, {
            key: "_EmissionTex",
            get: function get() {
                return this._shaderValues.getTexture(BlinnPhongFogTransMaterial.EMISSIONTEXTURE);
            },
            set: function set(value) {
                if (value) this._shaderValues.addDefine(BlinnPhongFogTransMaterial.SHADERDEFINE_EMISSIONMAP); else this._shaderValues.removeDefine(BlinnPhongFogTransMaterial.SHADERDEFINE_EMISSIONMAP);
                this._shaderValues.setTexture(BlinnPhongFogTransMaterial.EMISSIONTEXTURE, value);
            }
        }, {
            key: "_EmissionDirX",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogTransMaterial.EMISSIONDIRECTIONX);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogTransMaterial.EMISSIONDIRECTIONX, value);
            }
        }, {
            key: "_EmissionDirY",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogTransMaterial.EMISSIONDIRECTIONY);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogTransMaterial.EMISSIONDIRECTIONY, value);
            }
        }, {
            key: "_EmissionPower",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogTransMaterial.EMISSIONPOWER);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogTransMaterial.EMISSIONPOWER, value);
            }
        }, {
            key: "_EmissionColor",
            get: function get() {
                return this._shaderValues.getVector(BlinnPhongFogTransMaterial.EMISSIONCOLOR);
            },
            set: function set(value) {
                this._shaderValues.setVector(BlinnPhongFogTransMaterial.EMISSIONCOLOR, value);
            }
        }, {
            key: "_FogTex",
            get: function get() {
                return this._shaderValues.getTexture(BlinnPhongFogTransMaterial.FOGTEXURE);
            },
            set: function set(value) {
                if (value) this._shaderValues.addDefine(BlinnPhongFogTransMaterial.SHADERDEFINE_FOGMAP); else this._shaderValues.removeDefine(BlinnPhongFogTransMaterial.SHADERDEFINE_FOGMAP);
                this._shaderValues.setTexture(BlinnPhongFogTransMaterial.FOGTEXURE, value);
            }
        }, {
            key: "_FogDirX",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogTransMaterial.FOGDIRECTIONX);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogTransMaterial.FOGDIRECTIONX, value);
            }
        }, {
            key: "_FogDirY",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogTransMaterial.FOGDIRECTIONY);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogTransMaterial.FOGDIRECTIONY, value);
            }
        }, {
            key: "_FogMapScale",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogTransMaterial.FOGMAPSCALE);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogTransMaterial.FOGMAPSCALE, value);
            }
        }, {
            key: "_FadeFogNear",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogTransMaterial.FADEFOGNEAR);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogTransMaterial.FADEFOGNEAR, value);
            }
        }, {
            key: "_FadeFogFar",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogTransMaterial.FADEFOGFAR);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogTransMaterial.FADEFOGFAR, value);
            }
        }, {
            key: "_FogBlend",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogTransMaterial.FOGBLEND);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogTransMaterial.FOGBLEND, value);
            }
        }, {
            key: "_FogPower",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogTransMaterial.FOGPOWER);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogTransMaterial.FOGPOWER, value);
            }
        }, {
            key: "_HeightFogPower",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogTransMaterial.HEIGHTFOGPOWER);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogTransMaterial.HEIGHTFOGPOWER, value);
            }
        }, {
            key: "_HeightFogStart",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogTransMaterial.HEIGHTFOGSTART);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogTransMaterial.HEIGHTFOGSTART, value);
            }
        }, {
            key: "_HeightFogRange",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogTransMaterial.HEIGHTFOGRANGE);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogTransMaterial.HEIGHTFOGRANGE, value);
            }
        }, {
            key: "_Contrast",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogTransMaterial.CONTRAST);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogTransMaterial.CONTRAST, value);
            }
        }, {
            key: "_Specular",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogTransMaterial.SPECULAR);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogTransMaterial.SPECULAR, value);
            }
        }, {
            key: "_SpecSmooth",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogTransMaterial.SPECUALRSMOOTH);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogTransMaterial.SPECUALRSMOOTH, value);
            }
        }, {
            key: "_RimPower",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogTransMaterial.RIMPOWER);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogTransMaterial.RIMPOWER, value);
            }
        }], [{
            key: "init",
            value: function init() {
                Laya.ClassUtils.regClass("Laya.BlinnPhongFogTrans", BlinnPhongFogTransMaterial);
            }
        }]);
        return BlinnPhongFogTransMaterial;
    }(Laya.Material);
    BlinnPhongFogTransMaterial.DIFFUSETEXTURE = Laya.Shader3D.propertyNameToID("u_DiffuseTexture");
    BlinnPhongFogTransMaterial.DIFFUSECOLOR = Laya.Shader3D.propertyNameToID("u_DiffuseColor");
    BlinnPhongFogTransMaterial.CUTOFF = Laya.Shader3D.propertyNameToID("u_Cutoff");
    BlinnPhongFogTransMaterial.TILLINGX = Laya.Shader3D.propertyNameToID("u_TillingX");
    BlinnPhongFogTransMaterial.TILLINGY = Laya.Shader3D.propertyNameToID("u_TillingY");
    BlinnPhongFogTransMaterial.OFFSETX = Laya.Shader3D.propertyNameToID("u_OffsetX");
    BlinnPhongFogTransMaterial.OFFSETY = Laya.Shader3D.propertyNameToID("u_OffsetY");
    BlinnPhongFogTransMaterial.NORMALTEXTURE = Laya.Shader3D.propertyNameToID("u_NormalTexture");
    BlinnPhongFogTransMaterial.SPECULARCOLOR = Laya.Shader3D.propertyNameToID("u_SpecularColor");
    BlinnPhongFogTransMaterial.RIMCOLOR = Laya.Shader3D.propertyNameToID("u_RimColor");
    BlinnPhongFogTransMaterial.CONTRAST = Laya.Shader3D.propertyNameToID("u_Contrast");
    BlinnPhongFogTransMaterial.SPECULAR = Laya.Shader3D.propertyNameToID("u_Specular");
    BlinnPhongFogTransMaterial.SPECUALRSMOOTH = Laya.Shader3D.propertyNameToID("u_SpecularSmooth");
    BlinnPhongFogTransMaterial.RIMPOWER = Laya.Shader3D.propertyNameToID("u_RimPower");
    BlinnPhongFogTransMaterial.MASKTEXTURE = Laya.Shader3D.propertyNameToID("u_MaskTexture");
    BlinnPhongFogTransMaterial.EMISSIONTEXTURE = Laya.Shader3D.propertyNameToID("u_EmissionTexture");
    BlinnPhongFogTransMaterial.EMISSIONDIRECTIONX = Laya.Shader3D.propertyNameToID("u_EmissionDirectionX");
    BlinnPhongFogTransMaterial.EMISSIONDIRECTIONY = Laya.Shader3D.propertyNameToID("u_EmissionDirectionY");
    BlinnPhongFogTransMaterial.EMISSIONPOWER = Laya.Shader3D.propertyNameToID("u_EmissionPower");
    BlinnPhongFogTransMaterial.EMISSIONCOLOR = Laya.Shader3D.propertyNameToID("u_EmissionColor");
    BlinnPhongFogTransMaterial.FOGTEXURE = Laya.Shader3D.propertyNameToID("u_FogTexture");
    BlinnPhongFogTransMaterial.FOGDIRECTIONX = Laya.Shader3D.propertyNameToID("u_FogDirectionX");
    BlinnPhongFogTransMaterial.FOGDIRECTIONY = Laya.Shader3D.propertyNameToID("u_FogDirectionY");
    BlinnPhongFogTransMaterial.FOGMAPSCALE = Laya.Shader3D.propertyNameToID("u_FogMapScale");
    BlinnPhongFogTransMaterial.FOGBLEND = Laya.Shader3D.propertyNameToID("u_FogBlend");
    BlinnPhongFogTransMaterial.FOGPOWER = Laya.Shader3D.propertyNameToID("u_FogPower");
    BlinnPhongFogTransMaterial.FADEFOGNEAR = Laya.Shader3D.propertyNameToID("u_FadeFogNear");
    BlinnPhongFogTransMaterial.FADEFOGFAR = Laya.Shader3D.propertyNameToID("u_FadeFogFar");
    BlinnPhongFogTransMaterial.HEIGHTFOGPOWER = Laya.Shader3D.propertyNameToID("u_HeightFogPower");
    BlinnPhongFogTransMaterial.HEIGHTFOGSTART = Laya.Shader3D.propertyNameToID("u_HeightFogStart");
    BlinnPhongFogTransMaterial.HEIGHTFOGRANGE = Laya.Shader3D.propertyNameToID("u_HeightFogRange");
    BlinnPhongFogTransMaterial.SHADERDEFINE_DIFFUSEMAP = Laya.Shader3D.getDefineByName("DIFFUSEMAP");
    BlinnPhongFogTransMaterial.SHADERDEFINE_NORMALMAP = Laya.Shader3D.getDefineByName("NORMALMAP");
    BlinnPhongFogTransMaterial.SHADERDEFINE_MASKMAP = Laya.Shader3D.getDefineByName("MASKMAP");
    BlinnPhongFogTransMaterial.SHADERDEFINE_EMISSIONMAP = Laya.Shader3D.getDefineByName("EMISSIONMAP");
    BlinnPhongFogTransMaterial.SHADERDEFINE_FOGMAP = Laya.Shader3D.getDefineByName("FOGMAP");
    var fgui_Home = /* */ function (_fgui$GComponent) {
        (0, _inherits2.default)(fgui_Home, _fgui$GComponent);
        var _super6 = _createSuper(fgui_Home);
        function fgui_Home() {
            (0, _classCallCheck2.default)(this, fgui_Home);
            return _super6.apply(this, arguments);
        }
        (0, _createClass2.default)(fgui_Home, [{
            key: "onConstruct",
            value: function onConstruct() {
                this.start = this.getChild("start");
                this.shop = this.getChild("shop");
                this.coin = this.getChild("coin");
                this.level = this.getChild("level");
                this.t0 = this.getTransition("t0");
            }
        }], [{
            key: "createInstance",
            value: function createInstance() {
                return fgui.UIPackage.createObject("main", "Home");
            }
        }]);
        return fgui_Home;
    }(fgui.GComponent);
    fgui_Home.URL = "ui://hrj8309qo942q";
    var CameraCtl = /* */ function (_Laya$Script3D) {
        (0, _inherits2.default)(CameraCtl, _Laya$Script3D);
        var _super7 = _createSuper(CameraCtl);
        function CameraCtl() {
            (0, _classCallCheck2.default)(this, CameraCtl);
            return _super7.apply(this, arguments);
        }
        (0, _createClass2.default)(CameraCtl, [{
            key: "init",
            value: function init(target) {
                this.target = target;
                this.node = this.owner;
                this.distanceV3 = new Laya.Vector3(this.node.transform.position.x - this.target.transform.position.x, this.node.transform.position.y - this.target.transform.position.y, this.node.transform.position.z - this.target.transform.position.z);
                this.camera = this.node.getChildAt(0);
                this.cameraAnim = this.node.getChildAt(0).getComponent(Laya.Animator);
                this.setIdle();
            }
        }, {
            key: "closeView",
            value: function closeView() {
                this.camera.active = false;
            }
        }, {
            key: "openView",
            value: function openView() {
                this.camera.active = true;
            }
        }, {
            key: "onEnable",
            value: function onEnable() { }
        }, {
            key: "onLateUpdate",
            value: function onLateUpdate() {
                if (!this.node) return;
                this.node.transform.position = new Laya.Vector3(this.target.transform.position.x + this.distanceV3.x, this.target.transform.position.y + this.distanceV3.y, this.target.transform.position.z + this.distanceV3.z);
            }
        }, {
            key: "setIdle",
            value: function setIdle() {
                this.cameraAnim.play("idle");
            }
        }, {
            key: "steGoWin",
            value: function steGoWin() {
                this.cameraAnim.play("finish");
            }
        }, {
            key: "setWin",
            value: function setWin() {
                this.cameraAnim.play("end");
            }
        }]);
        return CameraCtl;
    }(Laya.Script3D);
    var Tool = /* */ function () {
        function Tool() {
            (0, _classCallCheck2.default)(this, Tool);
        }
        (0, _createClass2.default)(Tool, null, [{
            key: "searchJsonObject",
            value: function searchJsonObject(objectKey, objectVuale) {
                var json = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
                for (var index = 0; index < json.length; index++) {
                    var obj = json[index];
                    if (obj[objectKey] == objectVuale) {
                        return obj;
                    }
                }
                return null;
            }
        }, {
            key: "searchJsonALLObject",
            value: function searchJsonALLObject(objectKey, objectVuale) {
                var json = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
                var ret = [];
                for (var index = 0; index < json.length; index++) {
                    var element = json[index];
                    if (element[objectKey] == objectVuale) {
                        ret.push(element);
                    }
                }
                return ret;
            }
        }, {
            key: "ExChangeStrToStr",
            value: function ExChangeStrToStr(mainStr, targetStr, exStr) {
                if (mainStr.indexOf(targetStr) != -1) {
                    var newMessage = mainStr.replace(targetStr, exStr);
                    return newMessage;
                }
                return mainStr;
            }
        }, {
            key: "CloneJsonObj",
            value: function CloneJsonObj(jsonObj) {
                var newClone = {};
                for (var key in jsonObj) {
                    newClone[key] = jsonObj[key];
                }
                return newClone;
            }
        }, {
            key: "GetIntRandom",
            value: function GetIntRandom(maxNum) {
                var minNum = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                return minNum + parseInt((maxNum * Math.random()).toString());
            }
        }, {
            key: "GetFloatToInt",
            value: function GetFloatToInt(float) {
                return parseInt(float.toString());
            }
        }, {
            key: "GetHourTimeString",
            value: function GetHourTimeString(time) {
                var minute = parseInt((time / 60).toString());
                var second = parseInt((time % 60).toString());
                var minuteStr = (minute < 10 ? "0" : "") + minute.toString();
                var secondStr = (second < 10 ? "0" : "") + second.toString();
                return minuteStr + ":" + secondStr;
            }
        }, {
            key: "TwoPointTheta",
            value: function TwoPointTheta(originPoint, endPoint) {
                var angle = Math.atan2(endPoint.y - originPoint.y, endPoint.x - originPoint.x);
                var theta = 180 / Math.PI * angle;
                return theta;
            }
        }, {
            key: "GetNumAbbreviationOfGold",
            value: function GetNumAbbreviationOfGold(num) {
                if (num < 1e3) return num.toString();
                var reK = Tool.GetFloatToInt(num / 1e3).toString();
                var reN = "0";
                if (num % 1e3 != 0) {
                    reN = (num % 1e3).toString()[0];
                }
                return reK + "." + reN + "k";
            }
        }, {
            key: "shotShake",
            value: function shotShake() { }
        }]);
        return Tool;
    }();
    var AudioManager = /* */ function (_Laya$Script) {
        (0, _inherits2.default)(AudioManager, _Laya$Script);
        var _super8 = _createSuper(AudioManager);
        function AudioManager() {
            (0, _classCallCheck2.default)(this, AudioManager);
            return _super8.apply(this, arguments);
        }
        (0, _createClass2.default)(AudioManager, null, [{
            key: "playShotClip",
            value: function playShotClip(clip) {
                var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
                var clipName = ResLoaderManager.soundCfg[clip];
                Laya.SoundManager.playSound(clipName, num);
            }
        }, {
            key: "playBgm",
            value: function playBgm(clip) {
                var clipName = ResLoaderManager.soundCfg[clip];
                Laya.SoundManager.playMusic(clipName, 99);
            }
        }]);
        return AudioManager;
    }(Laya.Script);
    var roleAnimCtr = /* */ function (_Laya$Script3D2) {
        (0, _inherits2.default)(roleAnimCtr, _Laya$Script3D2);
        var _super9 = _createSuper(roleAnimCtr);
        function roleAnimCtr() {
            var _this4;
            (0, _classCallCheck2.default)(this, roleAnimCtr);
            _this4 = _super9.apply(this, arguments);
            _this4.animadirection = 0;
            _this4.animaClip = "";
            _this4.animschedule = 0;
            _this4.canContrl = false;
            _this4.useMoveContrl = false;
            _this4.animMinimumPointDistance = 0;
            _this4.clipCd = true;
            return _this4;
        }
        (0, _createClass2.default)(roleAnimCtr, [{
            key: "onEnable",
            value: function onEnable() {
                var node = this.owner;
                this.animator = node.getComponent(Laya.Animator);
                this.dizziness = node.getChildByName("Dummy001").getChildByName("Bip001").getChildByName("Bip001 Pelvis").getChildByName("Bip001 Spine").getChildByName("Bip001 Spine1").getChildByName("Bip001 Neck").getChildByName("Hit_Bip");
                this.dizziness.active = false;
                this.dizzinessHit = node.parent.getChildByName("dizzy");
                this.dizzinessHit.active = false;
            }
        }, {
            key: "onUpdate",
            value: function onUpdate() {
                if (this.useMoveContrl) this.setAnimSchedule();
            }
        }, {
            key: "setTargetAnim",
            value: function setTargetAnim(AnimClipId) {
                var animData = Tool.searchJsonObject("AnimId", AnimClipId, ResLoaderManager.animCfg);
                this.animaClip = animData.AnimClipName;
                this.animMinimumPointDistance = animData.MinimumPointDistance;
            }
        }, {
            key: "setAnimSchedule",
            value: function setAnimSchedule() {
                this.animator.speed = .01;
                if (this.canContrl) {
                    this.animschedule += this.animadirection * ResLoaderManager.gameBaseCfg.animPlaySpeed;
                } else {
                    this.animschedule += -.04;
                }
                if (Math.abs(this.animadirection) > 45) {
                    if (this.clipCd) {
                        AudioManager.playShotClip("chanageMotion");
                        this.clipCd = false;
                        Laya.timer.once(300, this, function () {
                            this.clipCd = true;
                        });
                    }
                }
                if (this.animschedule > .99) this.animschedule = .99;
                if (this.animschedule < .01) this.animschedule = .01;
                this.animator.crossFade(this.animaClip, 0, 0, this.animschedule);
            }
        }, {
            key: "playOnPlaneIdie",
            value: function playOnPlaneIdie() {
                this.animator.play("idle");
            }
        }, {
            key: "playDizziness",
            value: function playDizziness() {
                this.dizziness.active = true;
                this.dizzinessHit.active = true;
                Laya.timer.once(1500, this, function () {
                    this.dizziness.active = false;
                    this.dizzinessHit.active = false;
                });
            }
        }, {
            key: "playIdie",
            value: function playIdie() {
                this.canContrl = false;
                Laya.timer.once(1e3, this, function () {
                    this.setTargetAnim(GameManager.instance().wall_NodeData.AnimData);
                    this.canContrl = true;
                    this.useMoveContrl = true;
                });
                if (GameManager.instance().wall_target_index == 1) {
                    this.animator.play("up");
                }
            }
        }, {
            key: "playGoWIn",
            value: function playGoWIn() {
                this.useMoveContrl = false;
                this.animator.speed = 1;
                this.animschedule = 0;
                this.animator.play("dance3");
            }
        }, {
            key: "playWin",
            value: function playWin() {
                this.animator.speed = 1;
                this.useMoveContrl = false;
                this.animator.play("down");
                this.animschedule = 0;
                Laya.timer.once(1e3, this, function () {
                    this.animator.play("end");
                });
            }
        }, {
            key: "playDie",
            value: function playDie() {
                this.animator.speed = 1;
                this.useMoveContrl = false;
                this.animator.play("die");
                this.animschedule = 0;
            }
        }]);
        return roleAnimCtr;
    }(Laya.Script3D);
    var pillarCtrl = /* */ function (_Laya$Script3D3) {
        (0, _inherits2.default)(pillarCtrl, _Laya$Script3D3);
        var _super10 = _createSuper(pillarCtrl);
        function pillarCtrl() {
            var _this5;
            (0, _classCallCheck2.default)(this, pillarCtrl);
            _this5 = _super10.apply(this, arguments);
            _this5.roleHeigth = 0;
            _this5.roleContrlState = false;
            _this5.mouse_position_moveY = 0;
            _this5.mouse_position_oldY = 0;
            _this5.mouseMoveState = false;
            return _this5;
        }
        (0, _createClass2.default)(pillarCtrl, [{
            key: "onEnable",
            value: function onEnable() {
                Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
                Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseUp);
                Laya.stage.on(Laya.Event.MOUSE_OUT, this, this.onMouseOut);
                this.node = this.owner;
                this.movePoint = this.node.getChildByName("movePoint");
                this.roleAnimCtrl = this.movePoint.getChildAt(0).addComponent(roleAnimCtr);
            }
        }, {
            key: "onMouseDown",
            value: function onMouseDown() {
                this.mouse_position_moveY = 0;
                this.mouse_position_oldY = Laya.MouseManager.instance.mouseY;
                this.mouseMoveState = true;
            }
        }, {
            key: "onMouseUp",
            value: function onMouseUp() {
                this.mouse_position_moveY = 0;
                this.mouseMoveState = false;
            }
        }, {
            key: "onMouseOut",
            value: function onMouseOut() {
                this.mouse_position_moveY = 0;
                this.mouseMoveState = false;
            }
        }, {
            key: "onUpdate",
            value: function onUpdate() {
                if (!this.roleContrlState) return;
                this.roleAnimCtrl.animadirection = 0;
                if (this.mouseMoveState) {
                    this.mouse_position_moveY = this.mouse_position_oldY - Laya.MouseManager.instance.mouseY;
                    this.mouse_position_oldY = Laya.MouseManager.instance.mouseY;
                }
                if (this.mouse_position_moveY != 0) {
                    if (this.mouse_position_moveY < 0 && this.movePoint.transform.localPositionY <
                        ResLoaderManager.gameBaseCfg.minHeight) {
                        return;
                    }
                    if (this.mouse_position_moveY > 0 && this.movePoint.transform.localPositionY >
                        ResLoaderManager.gameBaseCfg.maxHeight) {
                        return;
                    }
                    var directionRight = false;
                    if (this.movePoint.transform.localPositionY + this.roleAnimCtrl.animMinimumPointDistance <
                        GameManager.instance().wall_NodeData.movePointPos) {
                        directionRight = this.mouse_position_moveY > 0;
                    }
                    if (this.movePoint.transform.localPositionY + this.roleAnimCtrl.animMinimumPointDistance >
                        GameManager.instance().wall_NodeData.movePointPos) {
                        directionRight = this.mouse_position_moveY < 0;
                    }
                    this.roleAnimCtrl.animadirection = (directionRight ? 1 : -1) * Math.abs(this.mouse_position_moveY);
                    this.movePoint.transform.localPositionY += this.mouse_position_moveY * ResLoaderManager.gameBaseCfg.movePointSpeed;
                }
                this.roleHeigth = this.movePoint.transform.position.y;
            }
        }, {
            key: "rollNextMotion",
            value: function rollNextMotion() {
                this.roleAnimCtrl.playIdie();
                Laya.Tween.to(this.movePoint.transform, {
                    localRotationEulerY: 360
                }, 500, null, Laya.Handler.create(this, function () {
                    this.movePoint.transform.localRotationEulerY = 0;
                }), null, true);
            }
        }, {
            key: "overturn",
            value: function overturn() {
                var nextEulerY = 180;
                if (this.movePoint.transform.localRotationEulerY >= 0) {
                    nextEulerY = -180;
                }
                Laya.Tween.to(this.movePoint.transform, {
                    localRotationEulerY: nextEulerY
                }, 200, null, Laya.Handler.create(this, function () { }), null, true);
            }
        }, {
            key: "setWinRolefallPlane",
            value: function setWinRolefallPlane() {
                var movePoint = this.node.getChildByName("movePoint");
                Laya.Tween.to(movePoint.transform, {
                    localPositionY: 0,
                    localRotationEulerY: 180
                }, 500, null, null, null, true);
                this.roleContrlState = false;
                this.roleAnimCtrl.playWin();
            }
        }, {
            key: "setLoseRolefallPlane",
            value: function setLoseRolefallPlane() {
                Laya.Tween.to(this.movePoint.transform, {
                    localPositionY: 0
                }, 500, null, null, null, true);
                this.roleContrlState = false;
                this.roleAnimCtrl.playDie();
            }
        }]);
        return pillarCtrl;
    }(Laya.Script3D);
    var doorCtrl = /* */ function (_Laya$Script3D4) {
        (0, _inherits2.default)(doorCtrl, _Laya$Script3D4);
        var _super11 = _createSuper(doorCtrl);
        function doorCtrl() {
            var _this6;
            (0, _classCallCheck2.default)(this, doorCtrl);
            _this6 = _super11.apply(this, arguments);
            _this6.doorIndex = 0;
            _this6.heigth = .5;
            _this6.triggerDistance = .1;
            _this6.onTriggerOver = false;
            _this6.weiColor = new Laya.Vector4(1, 1, 1, 1);
            _this6.redColor = new Laya.Vector4(1, .019, 0, 1);
            _this6.greeColor = new Laya.Vector4(.39, .9, .3, 1);
            _this6.moveOff = false;
            _this6.moveOn = false;
            return _this6;
        }
        (0, _createClass2.default)(doorCtrl, [{
            key: "init",
            value: function init() {
                this.node = this.owner;
                this.createWall();
                Laya.stage.on(GameManager.GET_NEXT_DOOR_TARGET, this, this.setMyselfTarget);
            }
        }, {
            key: "createWall",
            value: function createWall() {
                this.heigth = this.NodeData.movePointPos + ResLoaderManager.gameBaseCfg.baseModeHeight;
                var wallFacets = this.node.getChildByName("mod_plan");
                this.wallPlaneMateral = wallFacets.meshRenderer.material;
                this.wallPlaneMateral._OffsetY = this.NodeData.offsetY;
                var wallFacetsClone = this.node.getChildByName("mod_plan2");
                var cloneMater = wallFacetsClone.meshRenderer.material;
                cloneMater._OffsetY = this.NodeData.offsetY;
                var animaName = Tool.searchJsonObject("AnimId", this.NodeData.AnimData, ResLoaderManager.animCfg).AnimClipName;
                Laya.loader.load("artRes/wall/" + animaName + ".png", Laya.Handler.create(this, function (e) {
                    this.wallPlaneMateral._MainTex = e;
                    cloneMater._MainTex = e;
                }));
                for (var index = 1; index < 5; index++) {
                    var element = wallFacetsClone.clone();
                    this.node.addChild(element);
                    element.transform.localPositionX = wallFacets.transform.localPositionX;
                    element.transform.localPositionY = wallFacets.transform.localPositionY;
                    element.transform.localPositionZ = wallFacets.transform.localPositionZ + index * .1;
                }
                wallFacetsClone.active = false;
                this.onTriggerOver = true;
            }
        }, {
            key: "onUpdate",
            value: function onUpdate() {
                if (!GameManager.instance().moveing) return;
                if (this.moveOff) {
                    var wallFacets = this.node.getChildByName("facets");
                    var cloneMater = wallFacets.meshRenderer.material;
                    cloneMater.tilingOffsetW -= .01;
                    wallFacets.meshRenderer.material = cloneMater;
                }
                if (this.moveOn) {
                    var _wallFacets = this.node.getChildByName("facets");
                    var _cloneMater = _wallFacets.meshRenderer.material;
                    _cloneMater.tilingOffsetW += .01;
                    _wallFacets.meshRenderer.material = _cloneMater;
                }
                if (!this.onTriggerOver) {
                    if (this.node.transform.position.z - GameManager.instance().pillar.transform.position.z < this.triggerDistance) {
                        this.onThisTriggerEnter();
                    }
                    var vuale = 1 - Math.abs(this.heigth - GameManager.instance().pillarCtrl.roleHeigth);
                    if (vuale < 0) vuale = 0;
                    if (vuale > 1) vuale = 1;
                    vuale = vuale * GameManager.instance().pillarCtrl.roleAnimCtrl.animschedule;
                    this.updateColor(vuale);
                }
            }
        }, {
            key: "updateColor",
            value: function updateColor(vaule) {//改变颜色
                if (!this.wallPlaneMateral) return;
                var x = this.greeColor.x - this.redColor.x;
                var y = this.greeColor.y - this.redColor.y;
                var z = this.greeColor.z - this.redColor.z;
                var w = this.greeColor.w - this.redColor.w;
                GameManager.instance().greeMateral._Color = new Laya.Vector4(this.redColor.x + x * vaule,
                    this.redColor.y + y * vaule, this.redColor.z + z * vaule, 1);
            }
        }, {
            key: "onThisTriggerEnter",
            value: function onThisTriggerEnter() {
                if (Math.abs(this.heigth - GameManager.instance().pillarCtrl.roleHeigth) <
                    ResLoaderManager.gameBaseCfg.wallHitDistance) {
                    console.log("正常通过");
                    GameManager.instance().passWall();
                    this.onTriggerOver = true;
                    this.clear();
                } else {
                    console.log("没有通过");
                    GameManager.instance().hitWall();
                    Laya.timer.once(100, this, function () {
                        if (GameManager.instance().moveing) this.onTriggerOver = false;
                    });
                }
            }
        }, {
            key: "clear",
            value: function clear() {
                if (this.node.destroyed) return;
                if (GameManager.instance().throughEf) {
                    var ef = GameManager.instance().throughEf.clone();
                    GameManager.instance().mainScene3d.addChild(ef);
                    ef.transform.position = this.node.transform.position;
                }
                this.node.active = false;
                Laya.timer.once(3e3, this, function () {
                    Laya.stage.off(GameManager.GET_NEXT_DOOR_TARGET, this, this.setMyselfTarget);
                    this.node.destroy();
                    this.destroy();
                });
            }
        }, {
            key: "setMyselfTarget",
            value: function setMyselfTarget() {
                if (GameManager.instance().wall_target_index != this.doorIndex) return;
                var animData = Tool.searchJsonObject("AnimId", this.NodeData.AnimData, ResLoaderManager.animCfg);
                var animaClip = animData.AnimClipName;
                GameManager.instance().gree.getComponent(Laya.Animator).crossFade(animaClip, 0, 0, .99);
                GameManager.instance().gree.transform.position = this.node.transform.position;
                GameManager.instance().gree.transform.localPositionY = this.NodeData.movePointPos +
                    ResLoaderManager.gameBaseCfg.baseModeHeight;
                GameManager.instance().greeMateral._Color = this.weiColor;
                this.onTriggerOver = false;
                GameManager.instance().wall_NodeData.movePointPos = this.NodeData.movePointPos +
                    ResLoaderManager.gameBaseCfg.baseModeHeight;
                GameManager.instance().wall_NodeData.AnimData = this.NodeData.AnimData;
            }
        }]);
        return doorCtrl;
    }(Laya.Script3D);
    var coinCtrl = /* */ function (_Laya$Script3D5) {
        (0, _inherits2.default)(coinCtrl, _Laya$Script3D5);
        var _super12 = _createSuper(coinCtrl);
        function coinCtrl() {
            var _this7;
            (0, _classCallCheck2.default)(this, coinCtrl);
            _this7 = _super12.apply(this, arguments);
            _this7.doorIndex = 0;
            _this7.heigth = .5;
            _this7.triggerDistance = 2;
            _this7.rollDistance = .5;
            _this7.onTriggerOver = false;
            _this7.rollOver = false;
            return _this7;
        }
        (0, _createClass2.default)(coinCtrl, [{
            key: "init",
            value: function init() {
                this.node = this.owner;
                this.onTriggerOver = false;
                this.rollOver = false;
                this.node.active = true;
                this.heigth = this.node.transform.position.y;
            }
        }, {
            key: "onUpdate",
            value: function onUpdate() {
                var distance = Math.abs(this.node.transform.position.z - GameManager.instance().pillar.transform.position.z);
                if (!this.rollOver) {
                    if (distance < 2) {
                        GameManager.instance().rollRole();
                        this.rollOver = true;
                    }
                    return;
                }
                if (!this.onTriggerOver) {
                    if (distance < .5) {
                        this.onTriggerOver = true;
                        this.onThisTriggerEnter();
                    }
                }
            }
        }, {
            key: "onThisTriggerEnter",
            value: function onThisTriggerEnter() {
                if (Math.abs(this.heigth - 5 - GameManager.instance().pillarCtrl.roleHeigth) < 1) {
                    this.onTriggerOver = true;
                    GameManager.instance().levelAddGold += 1;
                    var v3out = new Laya.Vector4(0, 0, 0, 0);
                    var oldPos = this.node.transform.position;
                    GameManager.instance().cameraCtrl.camera.viewport.project(oldPos, GameManager.instance().cameraCtrl.camera.projectionViewMatrix, v3out);
                    Laya.stage.event(GameManager.GAME_PAGE_SET_ADDCOIN, v3out);
                    this.clear();
                    AudioManager.playShotClip("heart");
                } else { }
            }
        }, {
            key: "clear",
            value: function clear() {
                this.node.active = false;
            }
        }]);
        return coinCtrl;
    }(Laya.Script3D);
    var fgui_Shop = /* */ function (_fgui$GComponent2) {
        (0, _inherits2.default)(fgui_Shop, _fgui$GComponent2);
        var _super13 = _createSuper(fgui_Shop);
        function fgui_Shop() {
            (0, _classCallCheck2.default)(this, fgui_Shop);
            return _super13.apply(this, arguments);
        }
        (0, _createClass2.default)(fgui_Shop, [{
            key: "onConstruct",
            value: function onConstruct() {
                this.c1 = this.getController("c1");
                this.tab = this.getChild("tab");
                this.shopList = this.getChild("shopList");
                this.close = this.getChild("close");
                this.coin = this.getChild("coin");
                this.tipsLevel = this.getChild("tipsLevel");
                this.tipsG = this.getChild("tipsG");
            }
        }], [{
            key: "createInstance",
            value: function createInstance() {
                return fgui.UIPackage.createObject("main", "Shop");
            }
        }]);
        return fgui_Shop;
    }(fgui.GComponent);
    fgui_Shop.URL = "ui://hrj8309qjputw38";
    var shopPage = /* */ function (_zs$fgui$base) {
        (0, _inherits2.default)(shopPage, _zs$fgui$base);
        var _super14 = _createSuper(shopPage);
        function shopPage() {
            var _this8;
            (0, _classCallCheck2.default)(this, shopPage);
            _this8 = _super14.apply(this, arguments);
            _this8.shopType = 0;
            _this8.closeEquipRoleShopData = null;
            _this8.closeEquipPillarShopData = null;
            _this8.wantBuyIteam = null;
            return _this8;
        }
        (0, _createClass2.default)(shopPage, [{
            key: "check",
            value: function check(component) {
                return component instanceof fgui_Shop;
            }
        }, {
            key: "init",
            value: function init() {
                Laya.stage.on(GameManager.SHOP_PAGE_SHOW, this, this.shopShow);
                var view = this.view;
                view.close.onClick(this, this.closeShop);
                view.tab.getChildAt(0).onClick(this, function () {
                    this.showListData(0);
                    this.setShopIteamClickEvent();
                });
                view.tab.getChildAt(1).onClick(this, function () {
                    this.showListData(1);
                    this.setShopIteamClickEvent();
                });
                let img = new Laya.Image();
                img.skin = "fgui/coin_300.png";
                img.x = 700;
                img.y = 1000;
                this.view.displayObject.addChild(img);
                img.on(Laya.Event.CLICK, this, this.videoReward)
                window.view = this.view;
            }
        }, {
            key: "videoReward",
            value: function videoReward() {
                platform.getInstance().showReward(() => {
                    GameManager.instance().addGold(GameManager.instance().myGold() + 300);
                    var view = this.view;
                    view.coin.text = GameManager.instance().myGold().toString();
                    Laya.stage.event(GameManager.HOME_PAGE_UPDATE)
                })
            }
        }, {
            key: "updateRoleTextrue",
            value: function updateRoleTextrue() { }
        }, {
            key: "shopShow",
            value: function shopShow() {
                var view = this.view;
                view.tab.getChildAt(0).asButton.selected = true;
                view.coin.text = GameManager.instance().myGold().toString();
                var useRoleSkinID = Laya.LocalStorage.getItem("useRoleSkinID");
                if (useRoleSkinID) {
                    this.closeEquipRoleShopData = Tool.searchJsonObject("skinId", parseInt(useRoleSkinID), ResLoaderManager.shopCfg);
                } else {
                    this.closeEquipRoleShopData = Tool.searchJsonObject("skinId", 1, ResLoaderManager.shopCfg);
                }
                var usePillarSkinID = Laya.LocalStorage.getItem("usePillarSkinID");
                if (usePillarSkinID) {
                    this.closeEquipPillarShopData = Tool.searchJsonObject("skinId", parseInt(usePillarSkinID), ResLoaderManager.shopCfg);
                } else {
                    this.closeEquipPillarShopData = Tool.searchJsonObject("skinId", 7, ResLoaderManager.shopCfg);
                }
                this.showListData(0);
                this.setShopIteamClickEvent();
                this.view.tipsG.visible = false;
            }
        }, {
            key: "showListData",
            value: function showListData() {
                var shopType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                this.shopType = shopType;
                if (this.shopType == 0) {
                    skinShop.showRoleShopScene();
                } else {
                    skinShop.showPillarShopScene();
                }
                var shops = Tool.searchJsonALLObject("skinType", shopType, ResLoaderManager.shopCfg);
                var shopList = this.view.shopList;
                for (var index = 0; index < shops.length; index++) {
                    var data = shops[index];
                    var shop_item = shopList.getChildAt(index);
                    this.setShopIteam(shop_item, data, shopType);
                }
            }
        }, {
            key: "setShopIteam",
            value: function setShopIteam(shop_item, data, shopType) {
                if (shopType == 0) {
                    shop_item.shopIcon.asLoader.url = "ui://main/" + "clothes" + data.skinId.toString();
                } else if (shopType == 1) {
                    shop_item.shopIcon.asLoader.url = "ui://main/" + "pole" + (data.skinId - 6).toString();
                }
                shop_item.name = data.skinId.toString();
            }
        }, {
            key: "setShopIteamClickEvent",
            value: function setShopIteamClickEvent() {
                var _this9 = this;
                shopPage.nowShopDataGroup = [0, 0, 0, 0, 0, 0];
                var shopList = this.view.shopList;
                var _loop = function _loop(index) {
                    var shop_item = shopList.getChildAt(index);
                    var shopData = Tool.searchJsonObject("skinId", parseInt(shop_item.name), ResLoaderManager.shopCfg);
                    shop_item.shop_btn.getChild("n1").asImage.visible = false;
                    shop_item.shop_btn.getChild("n0").asImage.visible = false;
                    if (shopData.lockType == 1) {
                        shop_item.shop_btn.getChild("n0").asImage.visible = true;
                        shop_item.shop_btn.getChild("goldNum").asTextField.text = shopData.LockNum.toString();
                    } else {
                        shop_item.shop_btn.getChild("n1").asImage.visible = true;
                    }
                    var state = _this9.getIteamState(shopData);
                    shop_item.shop_btn.visible = state == 0;
                    shop_item.panel_lock.visible = state == 2;
                    shopPage.nowShopDataGroup[index] = shopData;
                    if (!shopPage.hasOnclickEvent) {
                        shop_item.shop_btn.asButton.onClick(_this9, function () {
                            var myShopData = shopPage.nowShopDataGroup[index];
                            this.buyIteam(myShopData, myShopData.lockType == 0);
                        });
                        shop_item.iconG.onClick(_this9, function () {
                            var myShopData = shopPage.nowShopDataGroup[index];
                            this.selectIteam(myShopData);
                        });
                    }
                };
                for (var index = 0; index < 6; index++) {
                    _loop(index);
                }
                shopPage.hasOnclickEvent = true;
            }
        }, {
            key: "getIteamState",
            value: function getIteamState(shopData) {
                var state = 0;
                // if (shopData.Level > GameManager.instance().myselfLevel()) {
                //     state = 2;
                // }
                var unlock = Laya.LocalStorage.getItem("shop" + shopData.skinId.toString());
                if (unlock == "true") {
                    state = 1;
                }
                return state;
            }
        }, {
            key: "buyIteam",
            value: function buyIteam(shopData) {
                var _this10 = this;
                var useVideo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                this.wantBuyIteam = shopData;
                if (useVideo) {
                    platform.getInstance().showReward(() => {
                        _this10.unlockIteam(_this10.wantBuyIteam);
                    })
                } else {
                    if (GameManager.instance().myGold() >= this.wantBuyIteam.LockNum) {
                        this.unlockIteam(this.wantBuyIteam);
                        GameManager.instance().addGold(GameManager.instance().myGold() - this.wantBuyIteam.LockNum);
                        var view = this.view;
                        view.tab.getChildAt(0).asButton.selected = true;
                        view.coin.text = GameManager.instance().myGold().toString();
                        Laya.stage.event(GameManager.HOME_PAGE_UPDATE)
                    } else {
                        this.view.tipsG.visible = true;
                        Laya.timer.once(1500, this, function () {
                            this.view.tipsG.visible = false;
                        });
                        this.view.tipsLevel.text = "Coins Are Not Enough!";
                    }
                }
            }
        }, {
            key: "unlockIteam",
            value: function unlockIteam(shopData) {
                skinShop.unlockIteam(shopData);
                this.setShopIteamClickEvent();
            }
        }, {
            key: "selectIteam",
            value: function selectIteam(shopData) {
                if (shopData.skinType == 0) {
                    console.log("选中了角色商品数据", shopData);
                    skinShop.setRoleSkinEquiping(shopData);
                    if (skinShop.getIteamState(shopData) == 1) {
                        this.closeEquipRoleShopData = shopData;
                    } else if (skinShop.getIteamState(shopData) == 2) {
                        // console.log("选中的商品等级不够");
                        // this.view.tipsG.visible = true;
                        // Laya.timer.once(1500, this, function () {
                        //     this.view.tipsG.visible = false;
                        // });
                        // this.view.tipsLevel.text = "unlock by level " + shopData.Level.toString();
                    }
                } else {
                    console.log("选中了滑杆商品数据", shopData);
                    skinShop.setPillarSkinEquiping(shopData);
                    if (skinShop.getIteamState(shopData) == 1) {
                        this.closeEquipPillarShopData = shopData;
                    }
                }
            }
        }, {
            key: "closeShop",
            value: function closeShop() {
                zs.core.workflow.childNext("HOME");
                skinShop.setRoleSkinEquiping(this.closeEquipRoleShopData);
                skinShop.setPillarSkinEquiping(this.closeEquipPillarShopData);
                Laya.LocalStorage.setItem("useRoleSkinID", this.closeEquipRoleShopData.skinId.toString());
                Laya.LocalStorage.setItem("usePillarSkinID", this.closeEquipPillarShopData.skinId.toString());
                GameManager.instance().openMainScene();
                skinShop.shopWindow.hide();
                GameLogic.homeWindow.show();
            }
        }, {
            key: "dispose",
            value: function dispose() {
                (0, _get2.default)((0, _getPrototypeOf2.default)(shopPage.prototype), "dispose", this).call(this);
                this.view.visible = false;
            }
        }], [{
            key: "make",
            value: function make() {
                return fgui_Shop.createInstance();
            }
        }, {
            key: "type",
            value: function type() {
                return fgui_Shop;
            }
        }]);
        return shopPage;
    }(zs.fgui.base);
    shopPage.nowShopDataGroup = [];
    shopPage.hasOnclickEvent = false;
    var skinShop = /* */ function (_Laya$Script2) {
        (0, _inherits2.default)(skinShop, _Laya$Script2);
        var _super15 = _createSuper(skinShop);
        function skinShop() {
            (0, _classCallCheck2.default)(this, skinShop);
            return _super15.apply(this, arguments);
        }
        (0, _createClass2.default)(skinShop, null, [{
            key: "init",
            value: function init() {
                var closeEquipRoleShopData;
                var closeEquipPillarShopData;
                var useRoleSkinID = Laya.LocalStorage.getItem("useRoleSkinID");
                if (useRoleSkinID) {
                    closeEquipRoleShopData = Tool.searchJsonObject("skinId", parseInt(useRoleSkinID), ResLoaderManager.shopCfg);
                } else {
                    closeEquipRoleShopData = Tool.searchJsonObject("skinId", 1, ResLoaderManager.shopCfg);
                    skinShop.unlockIteam(closeEquipRoleShopData);
                }
                var usePillarSkinID = Laya.LocalStorage.getItem("usePillarSkinID");
                if (usePillarSkinID) {
                    closeEquipPillarShopData = Tool.searchJsonObject("skinId", parseInt(usePillarSkinID), ResLoaderManager.shopCfg);
                } else {
                    closeEquipPillarShopData = Tool.searchJsonObject("skinId", 7, ResLoaderManager.shopCfg);
                    skinShop.unlockIteam(closeEquipPillarShopData);
                }
                skinShop.setRoleSkinEquiping(closeEquipRoleShopData);
                skinShop.setPillarSkinEquiping(closeEquipPillarShopData);
            }
        }, {
            key: "openShop",
            value: function openShop() {
                if (this.shopWindow) {
                    this.shopWindow.show();
                } else {
                    this.shopWindow = zs.fgui.window.create().attach(shopPage).scaleFit(zs.configs.gameCfg.designWidth,
                        zs.configs.gameCfg.designHeight).fit().update(shopPage, function (unit) { }).show();
                }
                zs.core.workflow.childNext("SHOP");
                Laya.stage.event(GameManager.SHOP_PAGE_SHOW);
            }
        }, {
            key: "showRoleShopScene",
            value: function showRoleShopScene() {
                GameManager.instance().closeMainScene();
                GameManager.instance().shop_scene.active = true;
                GameManager.instance().shop_scene.getChildByName("role").active = true;
                GameManager.instance().shop_scene.getChildByName("mod_steel tube").active = false;
            }
        }, {
            key: "showPillarShopScene",
            value: function showPillarShopScene() {
                GameManager.instance().closeMainScene();
                GameManager.instance().shop_scene.active = true;
                GameManager.instance().shop_scene.getChildByName("role").active = false;
                GameManager.instance().shop_scene.getChildByName("mod_steel tube").active = true;
            }
        }, {
            key: "getIteamState",
            value: function getIteamState(shopData) {
                var state = 0;
                if (shopData.Level > GameManager.instance().myselfLevel()) {
                    state = 2;
                }
                var unlock = Laya.LocalStorage.getItem("shop" + shopData.skinId.toString());
                if (unlock == "true") {
                    state = 1;
                }
                return state;
            }
        }, {
            key: "unlockIteam",
            value: function unlockIteam(shopData) {
                Laya.LocalStorage.setItem("shop" + shopData.skinId.toString(), "true");
            }
        }, {
            key: "setRoleSkinEquiping",
            value: function setRoleSkinEquiping(shopData) {
                var path = "artRes/skin/tex_role_" + shopData.skinId.toString() + ".png";
                Laya.loader.load(path, Laya.Handler.create(this, function (e) {
                    GameManager.instance().roleMateral.albedoTexture = e;
                }));
            }
        }, {
            key: "setPillarSkinEquiping",
            value: function setPillarSkinEquiping(shopData) {
                var path = "artRes/pillar/tex_" + shopData.skinId.toString() + ".png";
                Laya.loader.load(path, Laya.Handler.create(this, function (e) {
                    GameManager.instance().pillarMateria._MainTex = e;
                }));
            }
        }]);
        return skinShop;
    }(Laya.Script);
    skinShop.nowRoleSkin = 1;
    skinShop.nowPillarSkin = 5;
    var GameManager = /* */ function (_Laya$Script3) {
        (0, _inherits2.default)(GameManager, _Laya$Script3);
        var _super16 = _createSuper(GameManager);
        function GameManager() {
            var _this11;
            (0, _classCallCheck2.default)(this, GameManager);
            _this11 = _super16.apply(this, arguments);
            _this11.moveing = false;
            _this11.backMoveSpeed = 1;
            _this11.rushPassSpeed = 1;
            _this11.endPassSpeed = 1;
            _this11.cionsCtrls = [];
            _this11.doorCtrls = [];
            _this11.needLoadWallNum = 0;
            _this11.maxWallNum = 0;
            _this11.gameOver = false;
            _this11.overState = 0;
            _this11.residueChance = 3;
            _this11.levelAddGold = 0;
            _this11.wall_target_index = 0;
            _this11.wall_NodeData = new wall_NodeData();
            _this11.levelReady = false;
            return _this11;
        }
        (0, _createClass2.default)(GameManager, [{
            key: "onEnable",
            value: function onEnable() {
                if (!GameManager.gameManager) {
                    GameManager.gameManager = this;
                }
            }
        }, {
            key: "init",
            value: function init(mainScene3d) {
                this.mainScene3d = mainScene3d;
                this.pillar = this.mainScene3d.getChildByName("pillar");
                this.pillarCtrl = this.pillar.addComponent(pillarCtrl);
                var Camera = this.mainScene3d.getChildByName("CameraHander");
                this.cameraCtrl = Camera.getComponent(CameraCtl);
                if (!this.cameraCtrl) {
                    this.cameraCtrl = Camera.addComponent(CameraCtl);
                    this.cameraCtrl.init(this.pillar);
                }
                this.pillarMateria = this.pillar.getChildByName("mod_steel tube").meshRenderer.sharedMaterial;
                this.roleModle = this.pillar.getChildByName("movePoint").getChildByName("role");
                this.roleMateral = this.roleModle.getChildByName("mod_role").skinnedMeshRenderer.sharedMaterial;
                this.roleModle.active = false;
                Laya.timer.once(1e3, this, function () {
                    this.roleModle.active = true;
                    skinShop.init();
                });
                this.gree = GameManager.instance().mainScene3d.getChildByName("gree");
                this.greeMateral = this.gree.getChildByName("mod_role").skinnedMeshRenderer.sharedMaterial;
                this.end_scene = GameManager.instance().mainScene3d.getChildByName("mod_stage");
                this.egg_scene = GameManager.instance().mainScene3d.getChildByName("egg_scene");
                this.shop_scene = GameManager.instance().mainScene3d.getChildByName("shop_scene");
                Laya.Sprite3D.load("3dres/Conventional/through.lh", Laya.Handler.create(this, function (ef) {
                    GameManager.instance().throughEf = ef;
                }));
                this.end_scene.transform.localPositionZ = -150;
                this.egg_scene.active = false;
                this.shop_scene.active = false;
                AudioManager.playBgm("bgm");
            }
        }, {
            key: "loadLevel",
            value: function loadLevel(levelIndex) {
                if (levelIndex > ResLoaderManager.gameBaseCfg.maxLevel) {
                    levelIndex = Tool.GetIntRandom(ResLoaderManager.gameBaseCfg.maxLevel, 1);
                }
                var levelData = Tool.searchJsonALLObject("Level", levelIndex, ResLoaderManager.levelCfg);
                console.log("关卡数据..........................", levelData);
                this.needLoadWallNum = levelData.length;
                this.maxWallNum = levelData.length;
                if (this.cionsCtrls.length <= 0) {
                    var coinsObj = this.mainScene3d.getChildByName("mod_stage").getChildByName("Coins");
                    for (var jndex = 0; jndex < coinsObj.numChildren; jndex++) {
                        var element = coinsObj.getChildAt(jndex);
                        var _coinCtrl = element.addComponent(coinCtrl);
                        _coinCtrl.init();
                        this.cionsCtrls.push(_coinCtrl);
                    }
                } else {
                    for (var xndex = 0; xndex < this.cionsCtrls.length; xndex++) {
                        var _element = this.cionsCtrls[xndex];
                        _element.init();
                    }
                }
                for (var index = 0; index < levelData.length; index++) {
                    var NodeData = levelData[index];
                    this.createWall(index, NodeData);
                }
                var maxDistance = this.maxWallNum * ResLoaderManager.gameBaseCfg.wallDistance + 5;
                this.mainScene3d.getChildByName("static").getChildByName("mod_road_1").transform.localScaleZ = maxDistance * 2 / 15;
                this.levelReady = true;
            }
        }, {
            key: "clearLevel",
            value: function clearLevel() {
                for (var index = 0; index < this.doorCtrls.length; index++) {
                    var element = this.doorCtrls[index];
                    element.clear();
                }
                zs.scene.inst.current.getChildByName("pillar").transform.localPositionZ = 0;
                this.cameraCtrl.setIdle();
                this.pillarCtrl.roleAnimCtrl.playOnPlaneIdie();
            }
        }, {
            key: "startLevel",
            value: function startLevel() {
                this.moveing = true;
                this.wall_target_index = 0;
                this.residueChance = 3;
                this.levelAddGold = 0;
                this.rushPassSpeed = 1;
                this.endPassSpeed = 1;
                this.gameOver = false;
                this.levelReady = false;
                this.pillarCtrl.roleContrlState = true;
                Laya.timer.once(10, this, function () {
                    Laya.stage.event(GameManager.GAME_PAGE_SET_RESIDUCHANCE, this.residueChance);
                    Laya.stage.event(GameManager.GAME_PAGE_CREATE_SLIDER_ICON, this.maxWallNum);
                    Laya.stage.event(GameManager.GAME_PAGE_CLEAR_DATA);
                });
                Laya.timer.once(5e3, this, function () {
                    Laya.stage.event(GameManager.GAME_PAGE_HIDE_FINGER);
                });
                this.nextTargetWall();
            }
        }, {
            key: "nextTargetWall",
            value: function nextTargetWall() {
                Laya.stage.event(GameManager.GET_NEXT_DOOR_TARGET);
                this.wall_target_index++;
                this.pillarCtrl.rollNextMotion();
            }
        }, {
            key: "createWall",
            value: function createWall(index, NodeData) {
                Laya.Sprite3D.load("3dres/Conventional/door.lh", Laya.Handler.create(this, function (e) {
                    var mode = e;
                    var cloneMode = mode.clone();
                    zs.scene.inst.current.addChildren(cloneMode);
                    cloneMode.transform.position = new Laya.Vector3(cloneMode.transform.position.x, cloneMode.transform.position.y, (index + 1) * ResLoaderManager.gameBaseCfg.wallDistance);
                    var _doorCtrl = cloneMode.addComponent(doorCtrl);
                    _doorCtrl.doorIndex = index;
                    _doorCtrl.NodeData = NodeData;
                    _doorCtrl.init();
                    this.doorCtrls.push(_doorCtrl);
                }));
            }
        }, {
            key: "onUpdate",
            value: function onUpdate() {
                if (this.moveing) {
                    this.pillarMove();
                }
            }
        }, {
            key: "pillarMove",
            value: function pillarMove() {
                var maxDistance = this.maxWallNum * ResLoaderManager.gameBaseCfg.wallDistance + ResLoaderManager.gameBaseCfg.endPointDistance;
                this.end_scene.transform.localPositionZ = maxDistance;
                this.pillar.transform.localPositionZ += Laya.timer.delta / 1e3 * 6 * this.backMoveSpeed * this.rushPassSpeed * this.endPassSpeed;
                if (this.pillar.transform.localPositionZ >= maxDistance) this.showWin();
                Laya.stage.event(GameManager.GAME_PAGE_UPDATE_SLIDER, this.pillar.transform.localPositionZ / maxDistance);
            }
        }, {
            key: "rollRole",
            value: function rollRole() {
                this.pillarCtrl.overturn();
            }
        }, {
            key: "passWall",
            value: function passWall() {
                this.needLoadWallNum -= 1;
                this.rushPassSpeed = 1;
                this.pillarCtrl.roleContrlState = true;
                GameManager.instance().gree.transform.localPositionY = -100;
                Laya.stage.event(GameManager.GAME_PAGE_SET_SLIDER_ICON, this.wall_target_index - 1);
                if (this.needLoadWallNum <= 0 && !this.gameOver) {
                    this.cameraCtrl.steGoWin();
                    this.pillarCtrl.roleAnimCtrl.playGoWIn();
                    this.endPassSpeed = ResLoaderManager.gameBaseCfg.endPassSpeed;
                    Laya.timer.once(500, this, function () {
                        AudioManager.playShotClip("end");
                        Laya.stage.event(GameManager.GAME_PAGE_SHOW_END);
                    });
                } else {
                    this.nextTargetWall();
                }
                AudioManager.playShotClip("through");
                Laya.stage.event(GameManager.GAME_PAGE_SET_TIPTEXT_SHOW);
            }
        }, {
            key: "hitWall",
            value: function hitWall() {
                this.residueChance -= 1;
                Laya.stage.event(GameManager.GAME_PAGE_SET_RESIDUCHANCE, this.residueChance);
                if (this.residueChance <= 0) {
                    AudioManager.playShotClip("die");
                    this.showLose();
                } else {
                    this.backMoveSpeed = ResLoaderManager.gameBaseCfg.movePointBackMoveSpeed;
                    Laya.timer.once(1e3, this, function () {
                        GameManager.instance().backMoveSpeed = 1;
                    });
                    this.pillarCtrl.roleAnimCtrl.playDizziness();
                }
                AudioManager.playShotClip("hit");
            }
        }, {
            key: "closeMainScene",
            value: function closeMainScene() {
                this.cameraCtrl.closeView();
            }
        }, {
            key: "openMainScene",
            value: function openMainScene() {
                this.cameraCtrl.openView();
                this.egg_scene.active = false;
                this.shop_scene.active = false;
            }
        }, {
            key: "showWin",
            value: function showWin() {
                this.overState = 1;
                this.pillarCtrl.setWinRolefallPlane();
                this.moveing = false;
                this.cameraCtrl.setWin();
                AudioManager.playShotClip("end2");
                var ef_finish = this.mainScene3d.getChildByName("mod_stage").getChildByName("ef").getChildByName("ef_finish");
                ef_finish.active = false;
                ef_finish.active = true;
                Laya.timer.once(4e3, this, this.levelWin);
            }
        }, {
            key: "levelWin",
            value: function levelWin() {
                this.gameOver = true;
                zs.core.workflow.next();
                this.addMyselfLevel(this.myselfLevel() + 1);
            }
        }, {
            key: "showLose",
            value: function showLose() {
                this.overState = 0;
                this.pillarCtrl.setLoseRolefallPlane();
                this.moveing = false;
                Laya.timer.once(3e3, this, this.levelLose);
            }
        }, {
            key: "levelLose",
            value: function levelLose() {
                this.gameOver = true;
                zs.core.workflow.next();
            }
        }, {
            key: "myGold",
            value: function myGold() {
                var gold = 0;
                var oldLevel = Laya.LocalStorage.getItem("myselfGold");
                if (oldLevel) {
                    gold = parseInt(oldLevel);
                }
                return gold;
            }
        }, {
            key: "addGold",
            value: function addGold(gold) {
                Laya.LocalStorage.setItem("myselfGold", gold.toString());
            }
        }, {
            key: "myselfLevel",
            value: function myselfLevel() {
                var level = 0;
                var oldLevel = Laya.LocalStorage.getItem("myselfLevel");
                if (oldLevel) {
                    level = parseInt(oldLevel);
                }
                return level;
            }
        }, {
            key: "addMyselfLevel",
            value: function addMyselfLevel() {
                var level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
                Laya.LocalStorage.setItem("myselfLevel", level.toString());
            }
        }], [{
            key: "instance",
            value: function instance() {
                if (this.gameManager) {
                    return this.gameManager;
                }
            }
        }]);
        return GameManager;
    }(Laya.Script);
    GameManager.REWORD_PAGE_SHOW = "REWORD_PAGE_SHOW";
    GameManager.SHOP_PAGE_SHOW = "SHOP_PAGE_SHOW";
    GameManager.GET_NEXT_DOOR_TARGET = "GET_NEXT_DOOR_TARGET";
    GameManager.GAME_PAGE_SET_TIPTEXT_SHOW = "GAME_PAGE_SET_TIPTEXT_SHOW";
    GameManager.GAME_PAGE_SET_RESIDUCHANCE = "GAME_PAGE_SET_RESIDUCHANCE";
    GameManager.GAME_PAGE_SET_SLIDER_ICON = "GAME_PAGE_SET_SLIDER_ICON";
    GameManager.GAME_PAGE_CREATE_SLIDER_ICON = "GAME_PAGE_CREATE_SLIDER_ICON";
    GameManager.GAME_PAGE_HIDE_FINGER = "GAME_PAGE_HIDE_FINGER";
    GameManager.GAME_PAGE_SET_ADDCOIN = "GAME_PAGE_SET_ADDCOIN";
    GameManager.GAME_PAGE_CLEAR_DATA = "GAME_PAGE_CLEAR_DATA";
    GameManager.GAME_PAGE_SHOW_END = "GAME_PAGE_SHOW_END";
    GameManager.GAME_PAGE_UPDATE_SLIDER = "GAME_PAGE_UPDATE_SLIDER";
    GameManager.WIN_PAGE_SET_GOLD = "WIN_PAGE_SET_GOLD";
    GameManager.HOME_PAGE_UPDATE = "HOME_PAGE_UPDATE";
    var wall_NodeData = function wall_NodeData() {
        (0, _classCallCheck2.default)(this, wall_NodeData);
    };
    var homePage = /* */ function (_zs$fgui$base2) {
        (0, _inherits2.default)(homePage, _zs$fgui$base2);
        var _super17 = _createSuper(homePage);
        function homePage() {
            (0, _classCallCheck2.default)(this, homePage);
            return _super17.apply(this, arguments);
        }
        (0, _createClass2.default)(homePage, [{
            key: "check",
            value: function check(component) {
                return component instanceof fgui_Home;
            }
        }, {
            key: "init",
            value: function init() {
                var view = this.view;
                view.start.onClick(this, function () {
                    zs.core.workflow.next();
                });
                this.view.level.asTextField.x = 600;
                this.view.level.asTextField.align = "left"
                this.view.level.asTextField.width = 550;
                view.shop.onClick(this, this.openShop);
                Laya.stage.on(GameManager.HOME_PAGE_UPDATE, this, this.updateMsg);
                this.updateMsg();
            }
        }, {
            key: "openShop",
            value: function openShop() {
                skinShop.openShop();
                GameLogic.homeWindow.hide();
            }
        }, {
            key: "updateMsg",
            value: function updateMsg() {
                this.view.coin.asTextField.text = GameManager.instance().myGold().toString();
                this.view.level.asTextField.text = "" + (GameManager.instance().myselfLevel() + 1).toString();
            }
        }, {
            key: "dispose",
            value: function dispose() {
                Laya.stage.off(GameManager.HOME_PAGE_UPDATE, this, this.updateMsg);
                (0, _get2.default)((0, _getPrototypeOf2.default)(homePage.prototype), "dispose", this).call(this);
                this.view.visible = false;
            }
        }], [{
            key: "make",
            value: function make() {
                return fgui_Home.createInstance();
            }
        }, {
            key: "type",
            value: function type() {
                return fgui_Home;
            }
        }]);
        return homePage;
    }(zs.fgui.base);
    var GameNode = function GameNode() {
        (0, _classCallCheck2.default)(this, GameNode);
    };
    GameNode.player = null;
    GameNode.basic = null;
    var ProductKey = function ProductKey() {
        (0, _classCallCheck2.default)(this, ProductKey);
    };
    ProductKey.zs_version = 1;
    ProductKey.zs_switch = 0;
    ProductKey.zs_start_game_video_switch = 0;
    ProductKey.zs_banner_vertical_enable = 0;
    ProductKey.zs_jump_switch = 0;
    ProductKey.zs_full_screen1_jump = 0;
    ProductKey.zs_full_screen2_jump = 0;
    ProductKey.zs_finish_jump = 0;
    ProductKey.zs_history_list_jump = 0;
    ProductKey.zs_auto_full_screen_jump_switch = 0;
    ProductKey.zs_auto_jump_switch = 0;
    ProductKey.zs_friends_playing_switch = 0;
    ProductKey.zs_reminder_switch = 0;
    ProductKey.zs_false_news_switch = 0;
    ProductKey.zs_slide_jump_switch = 0;
    ProductKey.zs_share_title = "这个是分享标题";
    ProductKey.zs_share_img = "这个是分享图片地址";
    ProductKey.zs_banner_adunit = "";
    ProductKey.zs_banner_adunit2 = "";
    ProductKey.zs_banner_adunit3 = "";
    ProductKey.zs_video_adunit = "";
    ProductKey.zs_full_screen_adunit = "";
    ProductKey.zs_gridAd_id = "";
    ProductKey.zs_click_award_num = "0";
    ProductKey.zs_ready_click_num = "0";
    ProductKey.zs_click_award_since = 0;
    ProductKey.zs_button_delay_time = 0;
    ProductKey.zs_scene_value = "1005|1006|1011|1012|1013|1014|1017|1019|1020|1023|1024|1025|1030|1031|1032|1036|1042|1047|1048|1049|1053|1102|1129";
    ProductKey.zs_revive_way = "";
    ProductKey.zs_revive_num = 0;
    ProductKey.zs_system = "";
    ProductKey.zs_city = "上海市|广州市|深圳市|成都市|北京市";
    ProductKey.zs_time = "";
    ProductKey.zs_banner_banner_time = 1e3;
    ProductKey.zs_full_screen_banner_time = 3;
    ProductKey.zs_banner_refresh_time = 3e4;
    ProductKey.zs_game_start_jump_switch = 0;
    ProductKey.zs_full_screen_button_switch = 0;
    ProductKey.zs_game_banner_show_switch = 1;
    var FGUI_full_1_content = /* */ function (_fgui$GComponent3) {
        (0, _inherits2.default)(FGUI_full_1_content, _fgui$GComponent3);
        var _super18 = _createSuper(FGUI_full_1_content);
        function FGUI_full_1_content() {
            (0, _classCallCheck2.default)(this, FGUI_full_1_content);
            return _super18.apply(this, arguments);
        }
        (0, _createClass2.default)(FGUI_full_1_content, [{
            key: "onConstruct",
            value: function onConstruct() {
                this.backdrop_list = this.getChild("backdrop_list");
                this.list_1 = this.getChild("list_1");
                this.list_2 = this.getChild("list_2");
                this.list_3 = this.getChild("list_3");
                this.title_1 = this.getChild("title_1");
                this.title_2 = this.getChild("title_2");
                this.title_3 = this.getChild("title_3");
            }
        }], [{
            key: "createInstance",
            value: function createInstance() {
                return fgui.UIPackage.createObject("export", "full_1_content");
            }
        }]);
        return FGUI_full_1_content;
    }(fgui.GComponent);
    FGUI_full_1_content.URL = "ui://pt2mjy81coym6c";
    var FGUI_item_1 = /* */ function (_fgui$GComponent4) {
        (0, _inherits2.default)(FGUI_item_1, _fgui$GComponent4);
        var _super19 = _createSuper(FGUI_item_1);
        function FGUI_item_1() {
            (0, _classCallCheck2.default)(this, FGUI_item_1);
            return _super19.apply(this, arguments);
        }
        (0, _createClass2.default)(FGUI_item_1, [{
            key: "onConstruct",
            value: function onConstruct() {
                this.ditu1 = this.getController("ditu1");
                this.bottomlighting = this.getChild("bottomlighting");
                this.highlight = this.getChild("highlight");
                this.bottom = this.getChild("bottom");
                this.picture = this.getChild("picture");
                this.title = this.getChild("title");
                this.desc = this.getChild("desc");
            }
        }], [{
            key: "createInstance",
            value: function createInstance() {
                return fgui.UIPackage.createObject("export", "item_1");
            }
        }]);
        return FGUI_item_1;
    }(fgui.GComponent);
    FGUI_item_1.URL = "ui://pt2mjy81coym71";
    var FGUI_item_3 = /* */ function (_fgui$GComponent5) {
        (0, _inherits2.default)(FGUI_item_3, _fgui$GComponent5);
        var _super20 = _createSuper(FGUI_item_3);
        function FGUI_item_3() {
            (0, _classCallCheck2.default)(this, FGUI_item_3);
            return _super20.apply(this, arguments);
        }
        (0, _createClass2.default)(FGUI_item_3, [{
            key: "onConstruct",
            value: function onConstruct() {
                this.picture = this.getChild("picture");
                this.title = this.getChild("title");
            }
        }], [{
            key: "createInstance",
            value: function createInstance() {
                return fgui.UIPackage.createObject("export", "item_3");
            }
        }]);
        return FGUI_item_3;
    }(fgui.GComponent);
    FGUI_item_3.URL = "ui://pt2mjy81coym78";
    var FGUI_item_2 = /* */ function (_fgui$GComponent6) {
        (0, _inherits2.default)(FGUI_item_2, _fgui$GComponent6);
        var _super21 = _createSuper(FGUI_item_2);
        function FGUI_item_2() {
            (0, _classCallCheck2.default)(this, FGUI_item_2);
            return _super21.apply(this, arguments);
        }
        (0, _createClass2.default)(FGUI_item_2, [{
            key: "onConstruct",
            value: function onConstruct() {
                this.background = this.getChild("background");
                this.picture = this.getChild("picture");
                this.title = this.getChild("title");
                this.shakeRight = this.getTransition("shakeRight");
                this.shakeLeft = this.getTransition("shakeLeft");
                this.t2 = this.getTransition("t2");
            }
        }], [{
            key: "createInstance",
            value: function createInstance() {
                return fgui.UIPackage.createObject("export", "item_2");
            }
        }]);
        return FGUI_item_2;
    }(fgui.GComponent);
    FGUI_item_2.URL = "ui://pt2mjy81coym7c";
    var FGUI_full_2 = /* */ function (_fgui$GComponent7) {
        (0, _inherits2.default)(FGUI_full_2, _fgui$GComponent7);
        var _super22 = _createSuper(FGUI_full_2);
        function FGUI_full_2() {
            (0, _classCallCheck2.default)(this, FGUI_full_2);
            return _super22.apply(this, arguments);
        }
        (0, _createClass2.default)(FGUI_full_2, [{
            key: "onConstruct",
            value: function onConstruct() {
                this.background = this.getChild("background");
                this.background_list = this.getChild("background_list");
                this.img_hot = this.getChild("img_hot");
                this.rank1 = this.getChild("rank1");
                this.rank2 = this.getChild("rank2");
                this.rank3 = this.getChild("rank3");
                this.rankList = this.getChild("rankList");
                this.btn_continue = this.getChild("btn_continue");
            }
        }], [{
            key: "createInstance",
            value: function createInstance() {
                return fgui.UIPackage.createObject("export", "full_2");
            }
        }]);
        return FGUI_full_2;
    }(fgui.GComponent);
    FGUI_full_2.URL = "ui://pt2mjy81dbce5u";
    var FGUI_item_4 = /* */ function (_fgui$GComponent8) {
        (0, _inherits2.default)(FGUI_item_4, _fgui$GComponent8);
        var _super23 = _createSuper(FGUI_item_4);
        function FGUI_item_4() {
            (0, _classCallCheck2.default)(this, FGUI_item_4);
            return _super23.apply(this, arguments);
        }
        (0, _createClass2.default)(FGUI_item_4, [{
            key: "onConstruct",
            value: function onConstruct() {
                this.viewCtrl = this.getController("viewCtrl");
                this.imgRankBg = this.getChild("imgRankBg");
                this.picture = this.getChild("picture");
                this.title = this.getChild("title");
                this.desc = this.getChild("desc");
                this.imgRank = this.getChild("imgRank");
            }
        }], [{
            key: "createInstance",
            value: function createInstance() {
                return fgui.UIPackage.createObject("export", "item_4");
            }
        }]);
        return FGUI_item_4;
    }(fgui.GComponent);
    FGUI_item_4.URL = "ui://pt2mjy81dbce5z";
    var FGUI_icon_4 = /* */ function (_fgui$GLabel) {
        (0, _inherits2.default)(FGUI_icon_4, _fgui$GLabel);
        var _super24 = _createSuper(FGUI_icon_4);
        function FGUI_icon_4() {
            (0, _classCallCheck2.default)(this, FGUI_icon_4);
            return _super24.apply(this, arguments);
        }
        (0, _createClass2.default)(FGUI_icon_4, [{
            key: "onConstruct",
            value: function onConstruct() {
                this.c1 = this.getController("c1");
            }
        }], [{
            key: "createInstance",
            value: function createInstance() {
                return fgui.UIPackage.createObject("export", "icon_4");
            }
        }]);
        return FGUI_icon_4;
    }(fgui.GLabel);
    FGUI_icon_4.URL = "ui://pt2mjy81dbce60";
    var FGUI_item_5 = /* */ function (_fgui$GComponent9) {
        (0, _inherits2.default)(FGUI_item_5, _fgui$GComponent9);
        var _super25 = _createSuper(FGUI_item_5);
        function FGUI_item_5() {
            (0, _classCallCheck2.default)(this, FGUI_item_5);
            return _super25.apply(this, arguments);
        }
        (0, _createClass2.default)(FGUI_item_5, [{
            key: "onConstruct",
            value: function onConstruct() {
                this.rank = this.getChild("rank");
                this.desc = this.getChild("desc");
                this.title = this.getChild("title");
                this.btn_play = this.getChild("btn_play");
                this.picture = this.getChild("picture");
            }
        }], [{
            key: "createInstance",
            value: function createInstance() {
                return fgui.UIPackage.createObject("export", "item_5");
            }
        }]);
        return FGUI_item_5;
    }(fgui.GComponent);
    FGUI_item_5.URL = "ui://pt2mjy81dbce61";
    var FGUI_common_egg = /* */ function (_fgui$GComponent10) {
        (0, _inherits2.default)(FGUI_common_egg, _fgui$GComponent10);
        var _super26 = _createSuper(FGUI_common_egg);
        function FGUI_common_egg() {
            (0, _classCallCheck2.default)(this, FGUI_common_egg);
            return _super26.apply(this, arguments);
        }
        (0, _createClass2.default)(FGUI_common_egg, [{
            key: "onConstruct",
            value: function onConstruct() {
                this.bar = this.getChild("bar");
                this.btn_click = this.getChild("btn_click");
            }
        }], [{
            key: "createInstance",
            value: function createInstance() {
                return fgui.UIPackage.createObject("export", "common_egg");
            }
        }]);
        return FGUI_common_egg;
    }(fgui.GComponent);
    FGUI_common_egg.URL = "ui://pt2mjy81i71b7v";
    var FGUI_challenge = /* */ function (_fgui$GComponent11) {
        (0, _inherits2.default)(FGUI_challenge, _fgui$GComponent11);
        var _super27 = _createSuper(FGUI_challenge);
        function FGUI_challenge() {
            (0, _classCallCheck2.default)(this, FGUI_challenge);
            return _super27.apply(this, arguments);
        }
        (0, _createClass2.default)(FGUI_challenge, [{
            key: "onConstruct",
            value: function onConstruct() {
                this.picture1 = this.getChild("picture1");
                this.picture2 = this.getChild("picture2");
                this.lblName = this.getChild("lblName");
                this.lblDesc = this.getChild("lblDesc");
                this.lblGame = this.getChild("lblGame");
                this.btnNo = this.getChild("btnNo");
                this.btnYes = this.getChild("btnYes");
            }
        }], [{
            key: "createInstance",
            value: function createInstance() {
                return fgui.UIPackage.createObject("export", "challenge");
            }
        }]);
        return FGUI_challenge;
    }(fgui.GComponent);
    FGUI_challenge.URL = "ui://pt2mjy81i71b81";
    var FGUI_btn_egg = /* */ function (_fgui$GButton) {
        (0, _inherits2.default)(FGUI_btn_egg, _fgui$GButton);
        var _super28 = _createSuper(FGUI_btn_egg);
        function FGUI_btn_egg() {
            (0, _classCallCheck2.default)(this, FGUI_btn_egg);
            return _super28.apply(this, arguments);
        }
        (0, _createClass2.default)(FGUI_btn_egg, [{
            key: "onConstruct",
            value: function onConstruct() {
                this.btnExit = this.getChild("btnExit");
            }
        }], [{
            key: "createInstance",
            value: function createInstance() {
                return fgui.UIPackage.createObject("export", "btn_egg");
            }
        }]);
        return FGUI_btn_egg;
    }(fgui.GButton);
    FGUI_btn_egg.URL = "ui://pt2mjy81i71b8b";
    var FGUI_fake_msg = /* */ function (_fgui$GButton2) {
        (0, _inherits2.default)(FGUI_fake_msg, _fgui$GButton2);
        var _super29 = _createSuper(FGUI_fake_msg);
        function FGUI_fake_msg() {
            (0, _classCallCheck2.default)(this, FGUI_fake_msg);
            return _super29.apply(this, arguments);
        }
        (0, _createClass2.default)(FGUI_fake_msg, [{
            key: "onConstruct",
            value: function onConstruct() {
                this.pivotX = 0;
                this.pivotY = 0;
                this.desc = this.getChild("desc");
            }
        }], [{
            key: "createInstance",
            value: function createInstance() {
                return fgui.UIPackage.createObject("export", "fake_msg");
            }
        }]);
        return FGUI_fake_msg;
    }(fgui.GButton);
    FGUI_fake_msg.URL = "ui://pt2mjy81i71b8e";
    var FGUI_friend_challenge = /* */ function (_fgui$GComponent12) {
        (0, _inherits2.default)(FGUI_friend_challenge, _fgui$GComponent12);
        var _super30 = _createSuper(FGUI_friend_challenge);
        function FGUI_friend_challenge() {
            (0, _classCallCheck2.default)(this, FGUI_friend_challenge);
            return _super30.apply(this, arguments);
        }
        (0, _createClass2.default)(FGUI_friend_challenge, [{
            key: "onConstruct",
            value: function onConstruct() {
                this.challenge = this.getChild("challenge");
            }
        }], [{
            key: "createInstance",
            value: function createInstance() {
                return fgui.UIPackage.createObject("export", "friend_challenge");
            }
        }]);
        return FGUI_friend_challenge;
    }(fgui.GComponent);
    FGUI_friend_challenge.URL = "ui://pt2mjy81i71b8f";
    var FGUI_knock_export = /* */ function (_fgui$GComponent13) {
        (0, _inherits2.default)(FGUI_knock_export, _fgui$GComponent13);
        var _super31 = _createSuper(FGUI_knock_export);
        function FGUI_knock_export() {
            (0, _classCallCheck2.default)(this, FGUI_knock_export);
            return _super31.apply(this, arguments);
        }
        (0, _createClass2.default)(FGUI_knock_export, [{
            key: "onConstruct",
            value: function onConstruct() {
                this.adList = this.getChild("adList");
                this.knock = this.getChild("knock");
            }
        }], [{
            key: "createInstance",
            value: function createInstance() {
                return fgui.UIPackage.createObject("export", "knock_export");
            }
        }]);
        return FGUI_knock_export;
    }(fgui.GComponent);
    FGUI_knock_export.URL = "ui://pt2mjy81i71b8i";
    var FGUI_donhua = /* */ function (_fgui$GComponent14) {
        (0, _inherits2.default)(FGUI_donhua, _fgui$GComponent14);
        var _super32 = _createSuper(FGUI_donhua);
        function FGUI_donhua() {
            (0, _classCallCheck2.default)(this, FGUI_donhua);
            return _super32.apply(this, arguments);
        }
        (0, _createClass2.default)(FGUI_donhua, [{
            key: "onConstruct",
            value: function onConstruct() {
                this.aniKnock = this.getTransition("aniKnock");
            }
        }], [{
            key: "createInstance",
            value: function createInstance() {
                return fgui.UIPackage.createObject("export", "donhua");
            }
        }]);
        return FGUI_donhua;
    }(fgui.GComponent);
    FGUI_donhua.URL = "ui://pt2mjy81i71b8p";
    var FGUI_fake_exit = /* */ function (_fgui$GButton3) {
        (0, _inherits2.default)(FGUI_fake_exit, _fgui$GButton3);
        var _super33 = _createSuper(FGUI_fake_exit);
        function FGUI_fake_exit() {
            (0, _classCallCheck2.default)(this, FGUI_fake_exit);
            return _super33.apply(this, arguments);
        }
        (0, _createClass2.default)(FGUI_fake_exit, [{
            key: "onConstruct",
            value: function onConstruct() {
                this.btnExit = this.getChild("btnExit");
            }
        }], [{
            key: "createInstance",
            value: function createInstance() {
                return fgui.UIPackage.createObject("export", "fake_exit");
            }
        }]);
        return FGUI_fake_exit;
    }(fgui.GButton);
    FGUI_fake_exit.URL = "ui://pt2mjy81i71b8s";
    var FGUI_common_msg = /* */ function (_fgui$GComponent15) {
        (0, _inherits2.default)(FGUI_common_msg, _fgui$GComponent15);
        var _super34 = _createSuper(FGUI_common_msg);
        function FGUI_common_msg() {
            (0, _classCallCheck2.default)(this, FGUI_common_msg);
            return _super34.apply(this, arguments);
        }
        (0, _createClass2.default)(FGUI_common_msg, [{
            key: "onConstruct",
            value: function onConstruct() {
                this.c1 = this.getController("c1");
                this.btnComfire = this.getChild("btnComfire");
                this.lblTitle = this.getChild("lblTitle");
                this.lblContent = this.getChild("lblContent");
                this.btnCancel = this.getChild("btnCancel");
            }
        }], [{
            key: "createInstance",
            value: function createInstance() {
                return fgui.UIPackage.createObject("export", "common_msg");
            }
        }]);
        return FGUI_common_msg;
    }(fgui.GComponent);
    FGUI_common_msg.URL = "ui://pt2mjy81la808w";
    var FGUI_btnComfire = /* */ function (_fgui$GButton4) {
        (0, _inherits2.default)(FGUI_btnComfire, _fgui$GButton4);
        var _super35 = _createSuper(FGUI_btnComfire);
        function FGUI_btnComfire() {
            (0, _classCallCheck2.default)(this, FGUI_btnComfire);
            return _super35.apply(this, arguments);
        }
        (0, _createClass2.default)(FGUI_btnComfire, [{
            key: "onConstruct",
            value: function onConstruct() {
                this.lblComfire = this.getChild("lblComfire");
            }
        }], [{
            key: "createInstance",
            value: function createInstance() {
                return fgui.UIPackage.createObject("export", "btnComfire");
            }
        }]);
        return FGUI_btnComfire;
    }(fgui.GButton);
    FGUI_btnComfire.URL = "ui://pt2mjy81la808z";
    var FGUI_btnCancel = /* */ function (_fgui$GButton5) {
        (0, _inherits2.default)(FGUI_btnCancel, _fgui$GButton5);
        var _super36 = _createSuper(FGUI_btnCancel);
        function FGUI_btnCancel() {
            (0, _classCallCheck2.default)(this, FGUI_btnCancel);
            return _super36.apply(this, arguments);
        }
        (0, _createClass2.default)(FGUI_btnCancel, [{
            key: "onConstruct",
            value: function onConstruct() {
                this.lblCancel = this.getChild("lblCancel");
            }
        }], [{
            key: "createInstance",
            value: function createInstance() {
                return fgui.UIPackage.createObject("export", "btnCancel");
            }
        }]);
        return FGUI_btnCancel;
    }(fgui.GButton);
    FGUI_btnCancel.URL = "ui://pt2mjy81la8092";
    var FGUI_full_1 = /* */ function (_fgui$GComponent16) {
        (0, _inherits2.default)(FGUI_full_1, _fgui$GComponent16);
        var _super37 = _createSuper(FGUI_full_1);
        function FGUI_full_1() {
            (0, _classCallCheck2.default)(this, FGUI_full_1);
            return _super37.apply(this, arguments);
        }
        (0, _createClass2.default)(FGUI_full_1, [{
            key: "onConstruct",
            value: function onConstruct() {
                this.background = this.getChild("background");
                this.list = this.getChild("list");
                this.btn_continue = this.getChild("btn_continue");
            }
        }], [{
            key: "createInstance",
            value: function createInstance() {
                return fgui.UIPackage.createObject("export", "full_1");
            }
        }]);
        return FGUI_full_1;
    }(fgui.GComponent);
    FGUI_full_1.URL = "ui://pt2mjy81nbyx8v";
    var FGUI_item_7 = /* */ function (_fgui$GComponent17) {
        (0, _inherits2.default)(FGUI_item_7, _fgui$GComponent17);
        var _super38 = _createSuper(FGUI_item_7);
        function FGUI_item_7() {
            (0, _classCallCheck2.default)(this, FGUI_item_7);
            return _super38.apply(this, arguments);
        }
        (0, _createClass2.default)(FGUI_item_7, [{
            key: "onConstruct",
            value: function onConstruct() {
                this.background = this.getChild("background");
                this.picture = this.getChild("picture");
                this.shakeRight = this.getTransition("shakeRight");
                this.shakeLeft = this.getTransition("shakeLeft");
                this.t2 = this.getTransition("t2");
            }
        }], [{
            key: "createInstance",
            value: function createInstance() {
                return fgui.UIPackage.createObject("export", "item_7");
            }
        }]);
        return FGUI_item_7;
    }(fgui.GComponent);
    FGUI_item_7.URL = "ui://pt2mjy81qgjp8w";
    var FGUI_Side = /* */ function (_fgui$GComponent18) {
        (0, _inherits2.default)(FGUI_Side, _fgui$GComponent18);
        var _super39 = _createSuper(FGUI_Side);
        function FGUI_Side() {
            (0, _classCallCheck2.default)(this, FGUI_Side);
            return _super39.apply(this, arguments);
        }
        (0, _createClass2.default)(FGUI_Side, [{
            key: "onConstruct",
            value: function onConstruct() {
                this.viewCtrl = this.getController("viewCtrl");
                this.content = this.getChild("content");
            }
        }], [{
            key: "createInstance",
            value: function createInstance() {
                return fgui.UIPackage.createObject("export", "Side");
            }
        }]);
        return FGUI_Side;
    }(fgui.GComponent);
    FGUI_Side.URL = "ui://pt2mjy81rx1c67";
    var FGUI_btn_left_pop = /* */ function (_fgui$GButton6) {
        (0, _inherits2.default)(FGUI_btn_left_pop, _fgui$GButton6);
        var _super40 = _createSuper(FGUI_btn_left_pop);
        function FGUI_btn_left_pop() {
            (0, _classCallCheck2.default)(this, FGUI_btn_left_pop);
            return _super40.apply(this, arguments);
        }
        (0, _createClass2.default)(FGUI_btn_left_pop, [{
            key: "onConstruct",
            value: function onConstruct() {
                this.c1 = this.getController("c1");
            }
        }], [{
            key: "createInstance",
            value: function createInstance() {
                return fgui.UIPackage.createObject("export", "btn_left_pop");
            }
        }]);
        return FGUI_btn_left_pop;
    }(fgui.GButton);
    FGUI_btn_left_pop.URL = "ui://pt2mjy81rx1c68";
    var FGUI_hot_game = /* */ function (_fgui$GComponent19) {
        (0, _inherits2.default)(FGUI_hot_game, _fgui$GComponent19);
        var _super41 = _createSuper(FGUI_hot_game);
        function FGUI_hot_game() {
            (0, _classCallCheck2.default)(this, FGUI_hot_game);
            return _super41.apply(this, arguments);
        }
        (0, _createClass2.default)(FGUI_hot_game, [{
            key: "onConstruct",
            value: function onConstruct() {
                this.adList = this.getChild("adList");
                this.btnPop = this.getChild("btnPop");
            }
        }], [{
            key: "createInstance",
            value: function createInstance() {
                return fgui.UIPackage.createObject("export", "hot_game");
            }
        }]);
        return FGUI_hot_game;
    }(fgui.GComponent);
    FGUI_hot_game.URL = "ui://pt2mjy81rx1c69";
    var FGUI_item_6 = /* */ function (_fgui$GComponent20) {
        (0, _inherits2.default)(FGUI_item_6, _fgui$GComponent20);
        var _super42 = _createSuper(FGUI_item_6);
        function FGUI_item_6() {
            (0, _classCallCheck2.default)(this, FGUI_item_6);
            return _super42.apply(this, arguments);
        }
        (0, _createClass2.default)(FGUI_item_6, [{
            key: "onConstruct",
            value: function onConstruct() {
                this.title = this.getChild("title");
                this.picture = this.getChild("picture");
            }
        }], [{
            key: "createInstance",
            value: function createInstance() {
                return fgui.UIPackage.createObject("export", "item_6");
            }
        }]);
        return FGUI_item_6;
    }(fgui.GComponent);
    FGUI_item_6.URL = "ui://pt2mjy81rx1c6a";
    var exportBinder = /* */ function () {
        function exportBinder() {
            (0, _classCallCheck2.default)(this, exportBinder);
        }
        (0, _createClass2.default)(exportBinder, null, [{
            key: "bindAll",
            value: function bindAll() {
                fgui.UIObjectFactory.setExtension(FGUI_full_1_content.URL, FGUI_full_1_content);
                fgui.UIObjectFactory.setExtension(FGUI_item_1.URL, FGUI_item_1);
                fgui.UIObjectFactory.setExtension(FGUI_item_3.URL, FGUI_item_3);
                fgui.UIObjectFactory.setExtension(FGUI_item_2.URL, FGUI_item_2);
                fgui.UIObjectFactory.setExtension(FGUI_full_2.URL, FGUI_full_2);
                fgui.UIObjectFactory.setExtension(FGUI_item_4.URL, FGUI_item_4);
                fgui.UIObjectFactory.setExtension(FGUI_icon_4.URL, FGUI_icon_4);
                fgui.UIObjectFactory.setExtension(FGUI_item_5.URL, FGUI_item_5);
                fgui.UIObjectFactory.setExtension(FGUI_common_egg.URL, FGUI_common_egg);
                fgui.UIObjectFactory.setExtension(FGUI_challenge.URL, FGUI_challenge);
                fgui.UIObjectFactory.setExtension(FGUI_btn_egg.URL, FGUI_btn_egg);
                fgui.UIObjectFactory.setExtension(FGUI_fake_msg.URL, FGUI_fake_msg);
                fgui.UIObjectFactory.setExtension(FGUI_friend_challenge.URL, FGUI_friend_challenge);
                fgui.UIObjectFactory.setExtension(FGUI_knock_export.URL, FGUI_knock_export);
                fgui.UIObjectFactory.setExtension(FGUI_donhua.URL, FGUI_donhua);
                fgui.UIObjectFactory.setExtension(FGUI_fake_exit.URL, FGUI_fake_exit);
                fgui.UIObjectFactory.setExtension(FGUI_common_msg.URL, FGUI_common_msg);
                fgui.UIObjectFactory.setExtension(FGUI_btnComfire.URL, FGUI_btnComfire);
                fgui.UIObjectFactory.setExtension(FGUI_btnCancel.URL, FGUI_btnCancel);
                fgui.UIObjectFactory.setExtension(FGUI_full_1.URL, FGUI_full_1);
                fgui.UIObjectFactory.setExtension(FGUI_item_7.URL, FGUI_item_7);
                fgui.UIObjectFactory.setExtension(FGUI_Side.URL, FGUI_Side);
                fgui.UIObjectFactory.setExtension(FGUI_btn_left_pop.URL, FGUI_btn_left_pop);
                fgui.UIObjectFactory.setExtension(FGUI_hot_game.URL, FGUI_hot_game);
                fgui.UIObjectFactory.setExtension(FGUI_item_6.URL, FGUI_item_6);
            }
        }]);
        return exportBinder;
    }();
    var exporter_full_1 = /* */ function (_zs$exporter$full) {
        (0, _inherits2.default)(exporter_full_1, _zs$exporter$full);
        var _super43 = _createSuper(exporter_full_1);
        function exporter_full_1(component) {
            var _this12;
            (0, _classCallCheck2.default)(this, exporter_full_1);
            _this12 = _super43.call(this, component);
            _this12.maxList_1 = 3;
            _this12.maxList_2 = 4;
            if (component && component instanceof FGUI_full_1) {
                var full_1_content = component.list.getChildAt(0);
                _this12.list_1 = full_1_content.getChild("list_1");
                _this12.list_2 = full_1_content.getChild("list_2");
                _this12.list_3 = full_1_content.getChild("list_3");
                _this12.full_1_content = full_1_content;
                _this12.list_1.itemRenderer = Laya.Handler.create((0, _assertThisInitialized2.default)(_this12), _this12.onItem1Renderer, null, false);
                _this12.list_2.itemRenderer = Laya.Handler.create((0, _assertThisInitialized2.default)(_this12), _this12.onItem2Renderer, null, false);
                _this12.list_3.itemRenderer = Laya.Handler.create((0, _assertThisInitialized2.default)(_this12), _this12.onItem3Renderer, null, false);
                _this12.list_1.on(fairygui.Events.CLICK_ITEM, (0, _assertThisInitialized2.default)(_this12), _this12.onClickItem1);
                _this12.list_2.on(fairygui.Events.CLICK_ITEM, (0, _assertThisInitialized2.default)(_this12), _this12.onClickItem2);
                _this12.list_3.on(fairygui.Events.CLICK_ITEM, (0, _assertThisInitialized2.default)(_this12), _this12.onClickItem3);
                component.list.on(fairygui.Events.DRAG_START, (0, _assertThisInitialized2.default)(_this12), _this12.scrollStart);
                component.list.on(fairygui.Events.DRAG_END, (0, _assertThisInitialized2.default)(_this12), _this12.scrollJumpExport);
                component.list.on(Laya.Event.MOUSE_DOWN, (0, _assertThisInitialized2.default)(_this12), _this12.onDragStateBegin);
                component.list.on(Laya.Event.MOUSE_MOVE, (0, _assertThisInitialized2.default)(_this12), _this12.onDragStateChanged);
                component.btn_continue.onClick((0, _assertThisInitialized2.default)(_this12), _this12.onClickContinue);
                _this12.maxList_1 = _this12.list_1.numItems;
                _this12.maxList_2 = _this12.list_2.numItems;
            }
            return _this12;
        }
        (0, _createClass2.default)(exporter_full_1, [{
            key: "init",
            value: function init() {
                (0, _get2.default)((0, _getPrototypeOf2.default)(exporter_full_1.prototype), "init", this).call(this);
                this.viewName = "FULL_1";
                zs.platform.sync.hideBanner();
            }
        }, {
            key: "dispose",
            value: function dispose() {
                (0, _get2.default)((0, _getPrototypeOf2.default)(exporter_full_1.prototype), "dispose", this).call(this);
                var view = this.view;
                Laya.Tween.clearAll(view.btn_continue);
                clearTimeout(this.delayTimer1);
                clearTimeout(this.delayTimer2);
                zs.platform.sync.hideBanner();
            }
        }, {
            key: "setData_1",
            value: function setData_1(datas) {
                this._datas_1 = datas.filter(function (element) {
                    return true;
                });
                this._datas_1.sort(function (a, b) {
                    return Math.random() > .5 ? -1 : 1;
                });
                return this;
            }
        }, {
            key: "setData_2",
            value: function setData_2(datas) {
                this._datas_2 = datas.filter(function (element) {
                    return true;
                });
                this._datas_2.sort(function (a, b) {
                    return Math.random() > .5 ? -1 : 1;
                });
                return this;
            }
        }, {
            key: "setData_3",
            value: function setData_3(datas) {
                this._datas_3 = datas.filter(function (element) {
                    return true;
                });
                this._datas_3.sort(function (a, b) {
                    return Math.random() > .5 ? -1 : 1;
                });
                return this;
            }
        }, {
            key: "setMistaken",
            value: function setMistaken() {
                var moveY = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;
                this.mistakenMoveY = moveY;
                this.view.btn_continue.y += this.mistakenMoveY;
                return this;
            }
        }, {
            key: "onClickContinue",
            value: function onClickContinue() {
                var fullSwitch = ProductKey.zs_full_screen_button_switch;
                var delayTime = ProductKey.zs_button_delay_time;
                var view = this.view;
                if (fullSwitch && !this.bClickContinue) {
                    view.btn_continue.touchable = false;
                    this.bClickContinue = true;
                    var moveY = view.btn_continue.y - this.mistakenMoveY;
                    Laya.Tween.to(view.btn_continue, {
                        y: moveY
                    }, 800, null, Laya.Handler.create(this, function () {
                        view.btn_continue.touchable = true;
                    }), Number(delayTime));
                    if (window.zs["wx"] && window.zs["wx"].banner) {
                        var checkInit = !zs.platform.sync.hasBanner();
                        var bannerTime = checkInit ? 0 : Number(delayTime) / 2;
                        Laya.timer.once(bannerTime, this, function () {
                            zs.platform.sync.updateBanner({
                                isWait: false,
                                checkInit: checkInit
                            });
                        });
                    }
                    return;
                }
                this._clickContinue && this._clickContinue.run();
            }
        }, {
            key: "apply",
            value: function apply() {
                var _this13 = this;
                var view = this.view;
                if (view) {
                    this.list_1.numItems = 0;
                    this.list_2.numItems = 0;
                    this.list_3.numItems = 0;
                    zs.exporter.dataMgr.load().then(function (result) {
                        _this13.setData_1(result.promotion);
                        _this13.setData_2(result.promotion);
                        _this13.setData_3(result.promotion);
                        _this13.list_1.numItems = Math.min(_this13._datas_1 ? _this13._datas_1.length : 0, _this13.maxList_1);
                        _this13.list_2.numItems = _this13._datas_2 ? _this13._datas_2.length : 0;
                        _this13.list_3.numItems = _this13._datas_3 ? _this13._datas_3.length : 0;
                        _this13.setContentHeight();
                        _this13.enterJumpExport();
                        _this13.setMistaken(exporter_full_1.mistakenOffset);
                        _this13._dragRecoverTime = exporter_full_1.dragRecoverTime;
                        _this13._autoScrollSpeed = exporter_full_1.autoScrollSpeed;
                        Laya.timer.clearAll(_this13);
                        Laya.timer.once(exporter_full_1.autoScrollingDelay, _this13, function () {
                            Laya.timer.frameLoop(1, _this13, _this13.onAutoScroll);
                            _this13._isAutoScrolling = true;
                        });
                    });
                }
                return this;
            }
        }, {
            key: "setContentHeight",
            value: function setContentHeight() {
                var numItems = this._datas_3 ? this._datas_3.length : 0;
                var cows = Math.ceil(numItems / 4);
                var itemHeight = exporter_full_1.contentHeight;
                var height = cows * itemHeight + (cows - 1) * this.list_3.lineGap;
                var addHeight = height - this.list_3.height;
                if (addHeight > 0) {
                    this.full_1_content.height += addHeight;
                }
            }
        }, {
            key: "onItem1Renderer",
            value: function onItem1Renderer(index, item) {
                if (this._datas_1 == null || this._datas_1.length <= index) {
                    item.picture.icon = "";
                    item.title.text = "";
                    if (item.desc) {
                        item.desc.text = "";
                    }
                    item.data = null;
                } else {
                    var data = this._datas_1[index];
                    item.picture.icon = data.app_icon;
                    item.title.text = data.app_title;
                    if (data.app_desc && item.desc) {
                        item.desc.text = data.app_desc;
                    } else if (item.desc) {
                        item.desc.text = "";
                    }
                    item.data = data;
                }
            }
        }, {
            key: "onItem2Renderer",
            value: function onItem2Renderer(index, item) {
                if (this._datas_2 == null || this._datas_2.length <= index) {
                    item.picture.icon = "";
                    item.title.text = "";
                    if (item.desc) {
                        item.desc.text = "";
                    }
                    item.data = null;
                } else {
                    var data = this._datas_2[index];
                    item.picture.icon = data.app_icon;
                    item.title.text = data.app_title;
                    if (data.app_desc && item.desc) {
                        item.desc.text = data.app_desc;
                    } else if (item.desc) {
                        item.desc.text = "";
                    }
                    item.data = data;
                }
            }
        }, {
            key: "onItem3Renderer",
            value: function onItem3Renderer(index, item) {
                if (this._datas_3 == null || this._datas_3.length <= index) {
                    item.picture.icon = "";
                    item.title.text = "";
                    if (item.desc) {
                        item.desc.text = "";
                    }
                    item.data = null;
                } else {
                    var data = this._datas_3[index];
                    item.picture.icon = data.app_icon;
                    item.title.text = data.app_title;
                    if (data.app_desc && item.desc) {
                        item.desc.text = data.app_desc;
                    } else if (item.desc) {
                        item.desc.text = "";
                    }
                    item.data = data;
                }
            }
        }, {
            key: "refreshSingleItem",
            value: function refreshSingleItem(index, id, datas) {
                var newIdx = Math.floor(Math.random() * datas.length);
                if (datas.length > 1 && newIdx == index) {
                    return this.refreshSingleItem(index, id, datas);
                }
                var newData = datas[newIdx];
                var oldData = datas[index];
                if (newData) {
                    datas[index] = newData;
                    datas[newIdx] = oldData;
                    switch (id) {
                        case 1:
                            this.list_1.numItems = Math.min(this._datas_1 ? this._datas_1.length : 0, this.maxList_1);
                            break;

                        case 2:
                            this.list_2.numItems = this._datas_2 ? this._datas_2.length : 0;
                            break;

                        case 3:
                            this.list_3.numItems = this._datas_3 ? this._datas_3.length : 0;
                            break;
                    }
                }
            }
        }, {
            key: "onClickItem",
            value: function onClickItem(item, evt, id) {
                var _this14 = this;
                if (this._clickHandler) {
                    this._clickHandler.runWith(item);
                } else {
                    zs.exporter.utils.navigateToMiniProgram(item.data).then(function () {
                        var datas;
                        switch (id) {
                            case 1:
                                datas = _this14._datas_1;
                                break;

                            case 2:
                                datas = _this14._datas_2;
                                break;

                            case 3:
                                datas = _this14._datas_3;
                                break;
                        }
                        var index = datas.indexOf(item.data);
                        _this14.refreshSingleItem(index, id, datas);
                    });
                }
            }
        }, {
            key: "onClickItem1",
            value: function onClickItem1(item, evt) {
                this.onClickItem(item, evt, 1);
            }
        }, {
            key: "onClickItem2",
            value: function onClickItem2(item, evt) {
                this.onClickItem(item, evt, 2);
            }
        }, {
            key: "onClickItem3",
            value: function onClickItem3(item, evt) {
                this.onClickItem(item, evt, 3);
            }
        }, {
            key: "scrollStart",
            value: function scrollStart() {
                this.touchX = Laya.stage.mouseX;
                this.touchY = Laya.stage.mouseY;
            }
        }, {
            key: "scrollJumpExport",
            value: function scrollJumpExport() {
                if (zs.exporter.utils.checkScroll(this.touchX, this.touchY, exporter_full_1.checkScrollDistance)) {
                    var bScrollJump = ProductKey.zs_slide_jump_switch;
                    console.log("滑动跳转开关", bScrollJump);
                    if (bScrollJump) {
                        this.randomJumpExport();
                    }
                }
            }
        }, {
            key: "randomJumpExport",
            value: function randomJumpExport() {
                var data = this._datas_3[Math.floor(Math.random() * this._datas_3.length)];
                zs.exporter.utils.navigateToMiniProgram(data);
            }
        }, {
            key: "onDragStateBegin",
            value: function onDragStateBegin() {
                this._readyDrag = true;
            }
        }, {
            key: "onDragStateChanged",
            value: function onDragStateChanged() {
                if (this._readyDrag && this._dragRecoverTime > 0) {
                    this._isAutoScrolling = false;
                    this._dragStopCount = 0;
                }
                if (this._readyDrag) {
                    this._readyDrag = false;
                }
            }
        }, {
            key: "onAutoScroll",
            value: function onAutoScroll() {
                var view = this.view;
                if (this._isAutoScrolling) {
                    var scrollDis = this._autoScrollSpeed * Laya.timer.delta * .001 * (this._autoScrollForward ? 1 : -1);
                    var scrollPane = view.list.scrollPane;
                    scrollPane.setPosY(scrollDis + view.list.scrollPane.posY);
                    if (scrollPane.percY >= 1) {
                        this._autoScrollForward = false;
                    } else if (scrollPane.percY <= 0) {
                        this._autoScrollForward = true;
                    }
                    scrollDis = this._autoScrollSpeed * Laya.timer.delta * .001 * (this._autoScrollForward2 ? 1 : -1);
                    var scrollPane2 = this.list_2.scrollPane;
                    scrollPane2.setPosX(scrollDis + scrollPane2.posX);
                    if (scrollPane2.percX >= 1) {
                        this._autoScrollForward2 = false;
                    } else if (scrollPane2.percX <= 0) {
                        this._autoScrollForward2 = true;
                    }
                } else {
                    this._dragStopCount += Laya.timer.delta * .001;
                    if (this._dragStopCount > this._dragRecoverTime) {
                        this._dragStopCount = 0;
                        this._isAutoScrolling = true;
                    }
                }
            }
        }]);
        return exporter_full_1;
    }(zs.exporter.full);
    exporter_full_1.typeDefine = FGUI_full_1;
    exporter_full_1.updateBannerDelay = 500;
    exporter_full_1.mistakenOffset = 300;
    exporter_full_1.autoScrollingDelay = 3e3;
    exporter_full_1.contentHeight = 313;
    exporter_full_1.dragRecoverTime = 3;
    exporter_full_1.checkScrollDistance = 30;
    exporter_full_1.autoScrollSpeed = 50;
    var exporter_full_2 = /* */ function (_zs$exporter$full2) {
        (0, _inherits2.default)(exporter_full_2, _zs$exporter$full2);
        var _super44 = _createSuper(exporter_full_2);
        function exporter_full_2(component) {
            var _this15;
            (0, _classCallCheck2.default)(this, exporter_full_2);
            _this15 = _super44.call(this, component);
            if (component && component instanceof FGUI_full_2) {
                component.rank1.onClick((0, _assertThisInitialized2.default)(_this15), _this15.onClickItem, [component.rank1]);
                component.rank3.onClick((0, _assertThisInitialized2.default)(_this15), _this15.onClickItem, [component.rank3]);
                component.rank3.onClick((0, _assertThisInitialized2.default)(_this15), _this15.onClickItem, [component.rank3]);
                component.btn_continue.onClick((0, _assertThisInitialized2.default)(_this15), _this15.onClickContinue);
                component.rankList.itemRenderer = Laya.Handler.create((0, _assertThisInitialized2.default)(_this15), _this15.onItemRenderer, null, false);
                component.rankList.on(fairygui.Events.CLICK_ITEM, (0, _assertThisInitialized2.default)(_this15), _this15.onClickItem);
                component.rankList.on(fairygui.Events.DRAG_START, (0, _assertThisInitialized2.default)(_this15), _this15.scrollStart);
                component.rankList.on(fairygui.Events.DRAG_END, (0, _assertThisInitialized2.default)(_this15), _this15.scrollJumpExport);
                component.rankList.on(Laya.Event.MOUSE_DOWN, (0, _assertThisInitialized2.default)(_this15), _this15.onDragStateBegin);
                component.rankList.on(Laya.Event.MOUSE_MOVE, (0, _assertThisInitialized2.default)(_this15), _this15.onDragStateChanged);
            }
            return _this15;
        }
        (0, _createClass2.default)(exporter_full_2, [{
            key: "init",
            value: function init() {
                (0, _get2.default)((0, _getPrototypeOf2.default)(exporter_full_2.prototype), "init", this).call(this);
                this.viewName = "FULL_2";
                zs.platform.sync.hideBanner();
            }
        }, {
            key: "dispose",
            value: function dispose() {
                (0, _get2.default)((0, _getPrototypeOf2.default)(exporter_full_2.prototype), "dispose", this).call(this);
                var view = this.view;
                Laya.Tween.clearAll(view.btn_continue);
                zs.platform.sync.hideBanner();
            }
        }, {
            key: "setItemByData",
            value: function setItemByData(item, data, rank) {
                item.picture.icon = data.app_icon;
                item.title.text = data.app_title;
                if (rank && rank > 0 && item.desc) {
                    item.desc.text = "".concat(this.rankPlayNums[rank - 1], "万人在玩");
                } else if (item.desc) {
                    item.desc.text = "";
                }
                if (item.viewCtrl && rank && rank > 0) {
                    item.viewCtrl.setSelectedIndex(rank - 1);
                }
                item.data = data;
                return this;
            }
        }, {
            key: "onItemRenderer",
            value: function onItemRenderer(index, item) {
                if (this.rankData == null || this.rankData.length <= index) {
                    item.picture.icon = "";
                    item.title.text = "";
                    if (item.desc) {
                        item.desc.text = "";
                    }
                    item.data = null;
                } else {
                    var rank = index + 3;
                    var data = this.rankData[this.rankIndies[rank]];
                    item.picture.icon = data.app_icon;
                    item.title.text = data.app_title;
                    if (rank >= 0 && item.desc) {
                        item.desc.text = "".concat(this.rankPlayNums[rank], "万人在玩");
                    } else if (item.desc) {
                        item.desc.text = "";
                    }
                    if (rank && item.rank) {
                        item.rank.text = (rank + 1).toString();
                    } else if (item.rank) {
                        item.rank.text = "";
                    }
                    item.data = data;
                }
            }
        }, {
            key: "setMistaken",
            value: function setMistaken() {
                var moveY = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;
                this.mistakenMoveY = moveY;
                this.view.btn_continue.y += this.mistakenMoveY;
                return this;
            }
        }, {
            key: "onClickContinue",
            value: function onClickContinue() {
                var fullSwitch = ProductKey.zs_full_screen_button_switch;
                var delayTime = ProductKey.zs_button_delay_time;
                var view = this.view;
                if (fullSwitch && !this.bClickContinue) {
                    view.btn_continue.touchable = false;
                    this.bClickContinue = true;
                    var moveY = view.btn_continue.y - this.mistakenMoveY;
                    Laya.Tween.to(view.btn_continue, {
                        y: moveY
                    }, 800, null, Laya.Handler.create(this, function () {
                        view.btn_continue.touchable = true;
                    }), Number(delayTime));
                    if (window.zs["wx"] && window.zs["wx"].banner) {
                        var checkInit = !zs.platform.sync.hasBanner();
                        var bannerTime = checkInit ? 0 : Number(delayTime) / 2;
                        Laya.timer.once(bannerTime, this, function () {
                            zs.platform.sync.updateBanner({
                                isWait: false,
                                checkInit: checkInit
                            });
                        });
                    }
                    return;
                }
                this._clickContinue && this._clickContinue.run();
            }
        }, {
            key: "apply",
            value: function apply() {
                var _this16 = this;
                var view = this.view;
                if (view) {
                    view.rankList.numItems = 0;
                    zs.exporter.dataMgr.load().then(function (result) {
                        var data = result.promotion || [];
                        _this16.rankIndies = zs.utils.pickNumbers(0, result.promotion.length - 1, result.promotion.length);
                        _this16.rankPlayNums = [];
                        for (var i = 0; i < result.promotion.length; i++) {
                            _this16.rankPlayNums.push((Math.floor(Math.random() * exporter_full_2.fakePlayerMax) + exporter_full_2.fakePlayerMin) / 10);
                        }
                        _this16.rankPlayNums.sort(function (a, b) {
                            return b - a;
                        });
                        if (data.length >= 3) {
                            _this16.setItemByData(view.rank1, data[_this16.rankIndies[0]], 1);
                            _this16.setItemByData(view.rank2, data[_this16.rankIndies[1]], 2);
                            _this16.setItemByData(view.rank3, data[_this16.rankIndies[2]], 3);
                        }
                        _this16.rankData = data;
                        view.rankList.numItems = _this16.rankData ? Math.max(_this16.rankData.length - 3, 0) : 0;
                        _this16.enterJumpExport();
                        _this16.setMistaken(exporter_full_2.mistakenOffset);
                        _this16._dragRecoverTime = exporter_full_2.dragRecoverTime;
                        _this16._autoScrollSpeed = exporter_full_2.autoScrollSpeed;
                        Laya.timer.clearAll(_this16);
                        Laya.timer.once(exporter_full_2.autoScrollingDelay, _this16, function () {
                            Laya.timer.frameLoop(1, _this16, _this16.onAutoScroll);
                            _this16._isAutoScrolling = true;
                        });
                    });
                }
                return this;
            }
        }, {
            key: "onClickItem",
            value: function onClickItem(item, evt) {
                if (this._clickHandler) {
                    this._clickHandler.runWith(item);
                } else {
                    zs.exporter.utils.navigateToMiniProgram(item.data);
                }
            }
        }, {
            key: "scrollStart",
            value: function scrollStart() {
                this.touchX = Laya.stage.mouseX;
                this.touchY = Laya.stage.mouseY;
            }
        }, {
            key: "scrollJumpExport",
            value: function scrollJumpExport(event) {
                if (zs.exporter.utils.checkScroll(this.touchX, this.touchY, exporter_full_2.checkScrollDistance)) {
                    if (ProductKey.zs_slide_jump_switch) {
                        this.randomJumpExport();
                    }
                }
            }
        }, {
            key: "randomJumpExport",
            value: function randomJumpExport() {
                if (!this.rankData) return;
                var data = this.rankData[Math.floor(Math.random() * this.rankData.length)];
                zs.exporter.utils.navigateToMiniProgram(data);
            }
        }, {
            key: "onDragStateBegin",
            value: function onDragStateBegin() {
                this._readyDrag = true;
            }
        }, {
            key: "onDragStateChanged",
            value: function onDragStateChanged() {
                if (this._readyDrag && this._dragRecoverTime > 0) {
                    this._isAutoScrolling = false;
                    this._dragStopCount = 0;
                }
                if (this._readyDrag) {
                    this._readyDrag = false;
                }
            }
        }, {
            key: "onAutoScroll",
            value: function onAutoScroll() {
                var view = this.view;
                if (view && view.rankList) {
                    if (this._isAutoScrolling) {
                        var scrollDis = this._autoScrollSpeed * Laya.timer.delta * .001 * (this._autoScrollForward ? 1 : -1);
                        var scrollPane = view.rankList.scrollPane;
                        scrollPane.setPosY(scrollDis + view.rankList.scrollPane.posY);
                        if (scrollPane.percY >= 1) {
                            this._autoScrollForward = false;
                        } else if (scrollPane.percY <= 0) {
                            this._autoScrollForward = true;
                        }
                    } else {
                        this._dragStopCount += Laya.timer.delta * .001;
                        if (this._dragStopCount > this._dragRecoverTime) {
                            this._dragStopCount = 0;
                            this._isAutoScrolling = true;
                        }
                    }
                }
            }
        }]);
        return exporter_full_2;
    }(zs.exporter.full);
    exporter_full_2.typeDefine = FGUI_full_2;
    exporter_full_2.mistakenOffset = 300;
    exporter_full_2.buttonOffsetTime = 1500;
    exporter_full_2.dragRecoverTime = 3;
    exporter_full_2.autoScrollSpeed = 50;
    exporter_full_2.autoScrollingDelay = 3e3;
    exporter_full_2.checkScrollDistance = 30;
    exporter_full_2.fakePlayerMin = 8;
    exporter_full_2.fakePlayerMax = 680;
    var exporter_knock = /* */ function (_zs$fgui$baseGeneric) {
        (0, _inherits2.default)(exporter_knock, _zs$fgui$baseGeneric);
        var _super45 = _createSuper(exporter_knock);
        function exporter_knock(component) {
            var _this17;
            (0, _classCallCheck2.default)(this, exporter_knock);
            _this17 = _super45.call(this, component);
            if (component && component instanceof FGUI_knock_export) {
                _this17.listAd = component.adList;
                _this17.nodeHammer = component.knock;
                _this17.aniHammer = _this17.nodeHammer.aniKnock;
                _this17.nodeHammer.visible = false;
                component.adList.itemRenderer = Laya.Handler.create((0, _assertThisInitialized2.default)(_this17), _this17.onItemRender, null, false);
                component.adList.on(fgui.Events.CLICK_ITEM, (0, _assertThisInitialized2.default)(_this17), _this17.onClickItem);
            }
            return _this17;
        }
        (0, _createClass2.default)(exporter_knock, [{
            key: "dispose",
            value: function dispose() {
                (0, _get2.default)((0, _getPrototypeOf2.default)(exporter_knock.prototype), "dispose", this).call(this);
                this.stopKnock();
            }
        }, {
            key: "apply",
            value: function apply() {
                var _this18 = this;
                zs.exporter.dataMgr.load().then(function (result) {
                    if (!_this18.disposed) {
                        _this18.adData = result.promotion;
                        _this18.updateUI();
                        _this18.startKnock();
                    }
                });
                return this;
            }
        }, {
            key: "onItemRender",
            value: function onItemRender(index, item) {
                var data = this.adShowArr[index];
                item.icon = data.app_icon;
            }
        }, {
            key: "onClickItem",
            value: function onClickItem(item) {
                var index = this.listAd.getChildIndex(item);
                zs.exporter.utils.navigateToMiniProgram(this.adShowArr[index]);
            }
        }, {
            key: "updateUI",
            value: function updateUI() {
                this.adData.sort(function (a, b) {
                    return Math.random() > .5 ? -1 : 1;
                });
                this.adShowArr = [];
                var numItems = Math.min(6, this.adData.length);
                for (var index = 0; index < numItems; index++) {
                    this.adShowArr.push(this.adData[index]);
                }
                this.listAd.numItems = this.adShowArr.length;
            }
        }, {
            key: "startKnock",
            value: function startKnock() {
                this.stopKnock();
                var enterDelay = 1e3;
                Laya.timer.once(enterDelay, this, this.knockExportIcon, null, false);
            }
        }, {
            key: "stopKnock",
            value: function stopKnock() {
                Laya.timer.clearAll(this);
                for (var index = 0; index < this.listAd.numItems; index++) {
                    var element = this.listAd.getChildAt(index);
                    Laya.Tween.clearAll(element);
                }
            }
        }, {
            key: "knockExportIcon",
            value: function knockExportIcon() {
                if (this.listAd.numItems <= 0) {
                    return;
                }
                var hammerTime = 5e3;
                var idx = Math.floor(Math.random() * this.listAd.numItems);
                this.knockIndex = idx;
                var cell = this.listAd.getChildAt(idx);
                this.nodeHammer.removeFromParent();
                var globalPoint;
                cell.touchable = false;
                globalPoint = Laya.Point.create().setTo(cell.width / 2, cell.height / 2);
                globalPoint = cell.localToGlobal(globalPoint.x, globalPoint.y);
                var targetPoint = this.view.globalToLocal(globalPoint.x - this.nodeHammer.width * this.view.scaleX / 2, globalPoint.y - this.nodeHammer.height * this.view.scaleY / 2);
                this.nodeHammer.setXY(targetPoint.x, targetPoint.y);
                this.view.addChild(this.nodeHammer);
                this.nodeHammer.visible = true;
                this.aniHammer.play(Laya.Handler.create(this, this.onBrokenComplete), 1);
                Laya.timer.once(hammerTime, this, this.knockExportIcon, null, true);
            }
        }, {
            key: "onBrokenComplete",
            value: function onBrokenComplete() {
                this.nodeHammer.visible = false;
                var cell = this.listAd.getChildAt(this.knockIndex);
                this.playScaleEff(cell);
            }
        }, {
            key: "playScaleEff",
            value: function playScaleEff(cell) {
                var _this19 = this;
                var scaleTime = 500;
                Laya.Tween.to(cell, {
                    scaleX: 0,
                    scaleY: 0
                }, scaleTime, Laya.Ease.bounceIn, Laya.Handler.create(this, function () {
                    _this19.refreshSingleItem(_this19.knockIndex);
                    Laya.Tween.to(cell, {
                        scaleX: 1,
                        scaleY: 1
                    }, scaleTime, Laya.Ease.bounceIn, Laya.Handler.create(_this19, function () {
                        cell.touchable = true;
                    }));
                }));
            }
        }, {
            key: "refreshSingleItem",
            value: function refreshSingleItem(index) {
                var _this20 = this;
                var filterArr = this.adData.filter(function (x) {
                    return !_this20.adShowArr.some(function (datas) {
                        return x.app_icon === datas.app_icon;
                    });
                });
                var randomIdx = Math.floor(Math.random() * filterArr.length);
                var data = filterArr[randomIdx];
                this.adShowArr[index] = data;
                var item = this.listAd.getChildAt(index);
                this.onItemRender(index, item);
            }
        }]);
        return exporter_knock;
    }(zs.fgui.baseGeneric);
    exporter_knock.typeDefine = FGUI_knock_export;
    var exporter_side = /* */ function (_zs$fgui$baseGeneric2) {
        (0, _inherits2.default)(exporter_side, _zs$fgui$baseGeneric2);
        var _super46 = _createSuper(exporter_side);
        function exporter_side(component) {
            var _this21;
            (0, _classCallCheck2.default)(this, exporter_side);
            _this21 = _super46.call(this, component);
            if (component && component instanceof FGUI_Side) {
                _this21.content = component.content;
                _this21.adList = component.content.getChild("adList");
                _this21.btnPopCtrl = component.content.btnPop.c1;
                component.content.getChild("btnPop").onClick((0, _assertThisInitialized2.default)(_this21), _this21.onBtnPopClick);
                _this21.adList.itemRenderer = Laya.Handler.create((0, _assertThisInitialized2.default)(_this21), _this21.onAdListRender, null, false);
                _this21.adList.on(fgui.Events.CLICK_ITEM, (0, _assertThisInitialized2.default)(_this21), _this21.onAdListItemClick);
            }
            return _this21;
        }
        (0, _createClass2.default)(exporter_side, [{
            key: "dispose",
            value: function dispose() {
                (0, _get2.default)((0, _getPrototypeOf2.default)(exporter_side.prototype), "dispose", this).call(this);
                Laya.Tween.clearAll(this.content);
                clearTimeout(this.delayHandler);
            }
        }, {
            key: "onBtnPopClick",
            value: function onBtnPopClick() {
                this.bHide = !this.bHide;
                this.updatePos();
            }
        }, {
            key: "updatePos",
            value: function updatePos() {
                var dt = 300;
                this.btnPopCtrl.selectedIndex = this.bHide ? 0 : 1;
                Laya.Tween.to(this.content, {
                    x: this.bHide ? -600 : 0
                }, dt);
            }
        }, {
            key: "updateUI",
            value: function updateUI() {
                this.adList.numItems = Math.min(9, this.adData.length);
            }
        }, {
            key: "onAdListRender",
            value: function onAdListRender(index, item) {
                var data = this.adData[index];
                if (!data) return;
                item.title.text = data.app_title;
                item.picture.icon = data.app_icon;
            }
        }, {
            key: "refreshSingleItem",
            value: function refreshSingleItem(index) {
                var newIdx = Math.floor(Math.random() * this.adData.length);
                if (this.adData.length > 1 && newIdx == index) {
                    return this.refreshSingleItem(index);
                }
                var newData = this.adData[newIdx];
                var oldData = this.adData[index];
                if (newData) {
                    this.adData[index] = newData;
                    this.adData[newIdx] = oldData;
                    this.updateUI();
                }
            }
        }, {
            key: "onAdListItemClick",
            value: function onAdListItemClick(item) {
                var _this22 = this;
                var index = this.adList.getChildIndex(item);
                zs.exporter.utils.navigateToMiniProgram(this.adData[index]).then(function () {
                    _this22.refreshSingleItem(index);
                });
            }
        }, {
            key: "apply",
            value: function apply() {
                var _this23 = this;
                if (this.view) {
                    this.adList.numItems = 0;
                    this.bHide = true;
                    zs.exporter.dataMgr.load().then(function (result) {
                        if (!_this23.disposed) {
                            _this23.adData = result.promotion;
                            _this23.updateUI();
                        }
                    });
                    this.delayHandler = setTimeout(function () {
                        _this23.bHide = false;
                        _this23.updatePos();
                    }, 500);
                }
                return this;
            }
        }]);
        return exporter_side;
    }(zs.fgui.baseGeneric);
    exporter_side.typeDefine = FGUI_Side;
    var exporter_fake_msg = /* */ function (_zs$fgui$baseGeneric3) {
        (0, _inherits2.default)(exporter_fake_msg, _zs$fgui$baseGeneric3);
        var _super47 = _createSuper(exporter_fake_msg);
        function exporter_fake_msg(component) {
            var _this24;
            (0, _classCallCheck2.default)(this, exporter_fake_msg);
            _this24 = _super47.call(this, component);
            if (component && component instanceof FGUI_fake_msg) {
                _this24.desc = component.desc;
                component.onClick((0, _assertThisInitialized2.default)(_this24), _this24.onMsgClick);
            }
            return _this24;
        }
        (0, _createClass2.default)(exporter_fake_msg, [{
            key: "dispose",
            value: function dispose() {
                (0, _get2.default)((0, _getPrototypeOf2.default)(exporter_fake_msg.prototype), "dispose", this).call(this);
                Laya.Tween.clearAll(this.view);
            }
        }, {
            key: "setTitle",
            value: function setTitle(title) {
                if (title) {
                    this.view.title = title;
                } else {
                    this.view.title = "";
                }
                return this;
            }
        }, {
            key: "setDesc",
            value: function setDesc(desc) {
                if (desc && this.desc) {
                    this.desc.text = desc;
                } else {
                    this.desc.text = "";
                }
                return this;
            }
        }, {
            key: "apply",
            value: function apply() {
                var _this25 = this;
                this.tweenHide();
                zs.exporter.dataMgr.load().then(function (result) {
                    var adDatas = result.promotion;
                    _this25.adData = adDatas[Math.floor(Math.random() * adDatas.length)];
                    var desc = _this25.adData && _this25.adData.app_title || "游戏";
                    var nameList = exporter_fake_msg.nickList || [];
                    var showName;
                    if (nameList.length > 0) {
                        showName = nameList[Math.floor(Math.random() * nameList.length)];
                    } else {
                        showName = "神秘人";
                    }
                    desc = "邀请您一起玩 ".concat(desc);
                    _this25.setTitle(showName).setDesc(desc).tweenShow();
                });
                return this;
            }
        }, {
            key: "tweenShow",
            value: function tweenShow() {
                exporter_fake_msg.soundShow && Laya.SoundManager.playSound(exporter_fake_msg.soundShow, 1);
                Laya.Tween.clearAll(this.view);
                var y = this.view.height;
                this.view.y = -y;
                Laya.Tween.to(this.view, {
                    y: 0
                }, 200);
                return this;
            }
        }, {
            key: "tweenHide",
            value: function tweenHide() {
                Laya.Tween.clearAll(this.view);
                var y = this.view.height;
                Laya.Tween.to(this.view, {
                    y: -y
                }, 200);
                return this;
            }
        }, {
            key: "setCancelCallback",
            value: function setCancelCallback(callback) {
                this.callback = callback;
                return this;
            }
        }, {
            key: "onMsgClick",
            value: function onMsgClick() {
                var _this26 = this;
                this.tweenHide();
                zs.platform.async.navigateToOther({
                    appInfo: this.adData
                }).then(function () {
                    zs.exporter.dataMgr.collectExport(_this26.adData.app_id);
                }).catch(function () {
                    _this26.callback && _this26.callback.run();
                });
            }
        }]);
        return exporter_fake_msg;
    }(zs.fgui.baseGeneric);
    exporter_fake_msg.typeDefine = FGUI_fake_msg;
    var exporter_fake_exit = /* */ function (_zs$fgui$base3) {
        (0, _inherits2.default)(exporter_fake_exit, _zs$fgui$base3);
        var _super48 = _createSuper(exporter_fake_exit);
        function exporter_fake_exit(component) {
            var _this27;
            (0, _classCallCheck2.default)(this, exporter_fake_exit);
            _this27 = _super48.call(this, component);
            component.onClick((0, _assertThisInitialized2.default)(_this27), _this27.onBtnExitClick);
            return _this27;
        }
        (0, _createClass2.default)(exporter_fake_exit, [{
            key: "apply",
            value: function apply() {
                return this;
            }
        }, {
            key: "setClickHandler",
            value: function setClickHandler(callback) {
                this.callback = callback;
            }
        }, {
            key: "onBtnExitClick",
            value: function onBtnExitClick() {
                this.callback && this.callback.run();
            }
        }]);
        return exporter_fake_exit;
    }(zs.fgui.base);
    exporter_fake_exit.typeDefine = FGUI_fake_exit;
    var exporter_friend_challenge = /* */ function (_zs$fgui$baseGeneric4) {
        (0, _inherits2.default)(exporter_friend_challenge, _zs$fgui$baseGeneric4);
        var _super49 = _createSuper(exporter_friend_challenge);
        function exporter_friend_challenge(component) {
            var _this28;
            (0, _classCallCheck2.default)(this, exporter_friend_challenge);
            _this28 = _super49.call(this, component);
            if (component && component instanceof FGUI_friend_challenge) {
                component.challenge.btnNo.onClick((0, _assertThisInitialized2.default)(_this28), _this28.onBtnNoClick);
                component.challenge.btnYes.onClick((0, _assertThisInitialized2.default)(_this28), _this28.onBtnYesClick);
            }
            return _this28;
        }
        (0, _createClass2.default)(exporter_friend_challenge, [{
            key: "init",
            value: function init() {
                (0, _get2.default)((0, _getPrototypeOf2.default)(exporter_friend_challenge.prototype), "init", this).call(this);
                zs.platform.sync.hideBanner();
            }
        }, {
            key: "setGameName",
            value: function setGameName(gameName) {
                if (gameName && this.view.challenge.lblGame) {
                    this.view.challenge.lblGame.text = gameName;
                } else if (this.view.challenge.lblGame) {
                    this.view.challenge.lblGame.text = "";
                }
                return this;
            }
        }, {
            key: "setPlayerName",
            value: function setPlayerName(playerName) {
                if (playerName && this.view.challenge.lblName) {
                    this.view.challenge.lblName.text = playerName;
                } else if (this.view.challenge.lblName) {
                    this.view.challenge.lblName.text = "";
                }
                return this;
            }
        }, {
            key: "setDesc",
            value: function setDesc(desc) {
                if (desc && this.view.challenge.lblDesc) {
                    this.view.challenge.lblDesc.text = desc;
                } else if (this.view.challenge.lblDesc) {
                    this.view.challenge.lblDesc.text = "";
                }
                return this;
            }
        }, {
            key: "setGameIcon",
            value: function setGameIcon(url) {
                if (url && this.view.challenge.picture1) {
                    this.view.challenge.picture1.icon = url;
                } else if (this.view.challenge.picture1) { }
                return this;
            }
        }, {
            key: "apply",
            value: function apply() {
                var _this29 = this;
                zs.exporter.dataMgr.load().then(function (result) {
                    var adDatas = result.promotion;
                    _this29.adData = adDatas[Math.floor(Math.random() * adDatas.length)];
                    var gameName = _this29.adData && _this29.adData.app_title || "游戏";
                    var gameIcon = _this29.adData && _this29.adData.app_icon;
                    var nameList = exporter_friend_challenge.nickList || [];
                    var showName;
                    if (nameList.length > 0) {
                        showName = nameList[Math.floor(Math.random() * nameList.length)];
                    } else {
                        showName = "神秘人";
                    }
                    var desc = "好友“".concat(showName, "”向您发起挑战：");
                    _this29.setPlayerName(showName).setGameName(gameName).setGameIcon(gameIcon).setDesc(desc);
                });
                return this;
            }
        }, {
            key: "setCloseCallback",
            value: function setCloseCallback(callback) {
                this.callback = callback;
                return this;
            }
        }, {
            key: "onBtnNoClick",
            value: function onBtnNoClick() {
                this.callback && this.callback.run();
            }
        }, {
            key: "onBtnYesClick",
            value: function onBtnYesClick() {
                var _this30 = this;
                zs.platform.async.navigateToOther({
                    appInfo: this.adData
                }).then(function () {
                    zs.exporter.dataMgr.collectExport(_this30.adData.app_id);
                });
                this.callback && this.callback.run();
            }
        }]);
        return exporter_friend_challenge;
    }(zs.fgui.baseGeneric);
    exporter_friend_challenge.typeDefine = FGUI_friend_challenge;
    var ad_egg = /* */ function (_zs$fgui$base4) {
        (0, _inherits2.default)(ad_egg, _zs$fgui$base4);
        var _super50 = _createSuper(ad_egg);
        function ad_egg(component) {
            var _this31;
            (0, _classCallCheck2.default)(this, ad_egg);
            _this31 = _super50.call(this, component);
            if (component && component instanceof FGUI_common_egg) {
                _this31.progressBar = component.bar;
                _this31.btnKnock = component.btn_click;
                _this31.btnKnock.onClick((0, _assertThisInitialized2.default)(_this31), _this31.onBtnClick);
                zs.core.addAppShow(Laya.Handler.create((0, _assertThisInitialized2.default)(_this31), _this31.onAppShow, null, false));
                zs.core.addAppHide(Laya.Handler.create((0, _assertThisInitialized2.default)(_this31), _this31.onAppHide, null, false));
            }
            return _this31;
        }
        (0, _createClass2.default)(ad_egg, [{
            key: "init",
            value: function init() {
                (0, _get2.default)((0, _getPrototypeOf2.default)(ad_egg.prototype), "init", this).call(this);
                this.viewName = "EGG";
            }
        }, {
            key: "dispose",
            value: function dispose() {
                this.removeEvent();
                (0, _get2.default)((0, _getPrototypeOf2.default)(ad_egg.prototype), "dispose", this).call(this);
            }
        }, {
            key: "setCloseCallback",
            value: function setCloseCallback(callback) {
                this.callback = callback;
                return this;
            }
        }, {
            key: "apply",
            value: function apply() {
                this.progress = 0;
                this.isOpenAd = false;
                this.isGetAward = false;
                this.showBannerRange = this.random(Number(ad_egg.repair_click_num[0]) * 100, Number(ad_egg.repair_click_num[1]) * 100) * .01;
                Laya.timer.loop(ad_egg.cutBackInterval, this, this.cutBack);
                return this;
            }
        }, {
            key: "random",
            value: function random(min, max) {
                return Math.random() * (max - min) + min << 0;
            }
        }, {
            key: "removeEvent",
            value: function removeEvent() {
                Laya.timer.clear(this, this.cutBack);
                zs.core.removeAppShow(Laya.Handler.create(this, this.onAppShow));
                zs.core.removeAppHide(Laya.Handler.create(this, this.onAppHide));
                this.btnKnock.offClick(this, this.onBtnClick);
            }
        }, {
            key: "onAppShow",
            value: function onAppShow() {
                if (!this.isOpenAd) return;
                this.onFinish();
            }
        }, {
            key: "onAppHide",
            value: function onAppHide() {
                if (!this.isOpenAd) return;
                this.btnKnock.offClick(this, this.onBtnClick);
                this.isOpenAd = true;
                Laya.timer.clear(this, this.cutBack);
            }
        }, {
            key: "onBtnClick",
            value: function onBtnClick() {
                if (this.progress + ad_egg.click_add_percent <= 1) {
                    var checkInit = !zs.platform.sync.hasBanner();
                    if (checkInit) {
                        zs.platform.sync.updateBanner({
                            isWait: true,
                            checkInit: true
                        });
                    }
                    this.updateRepairPorgress(this.progress + ad_egg.click_add_percent);
                    if (this.progress >= this.showBannerRange && !this.isOpenAd && window.zs["wx"] && window.zs["wx"].banner) {
                        this.isOpenAd = true;
                        zs.platform.sync.showBanner();
                        Laya.timer.once(800, this, function () {
                            Laya.Tween.to(this.btn_click, {
                                y: this.btn_click.y - 240
                            }, 500);
                        });
                    }
                } else {
                    this.updateRepairPorgress(this.progress + ad_egg.click_add_percent);
                    Laya.timer.clear(this, this.cutBack);
                    this.onFinish();
                }
            }
        }, {
            key: "onFinish",
            value: function onFinish() {
                if (this.isGetAward) return;
                var appId = zs.core.appId;
                var open_award_num = Laya.LocalStorage.getItem(appId + "open_award_num") || 0;
                Laya.LocalStorage.setItem(appId + "open_award_num", (Number(open_award_num) + 1).toString());
                this.isGetAward = true;
                Laya.timer.once(ad_egg.awardDelay, this, function () {
                    Laya.stage.event("EGG_GET_AWARD");
                    console.log("派发获得砸金蛋奖励消息");
                });
                Laya.timer.once(Math.max(ad_egg.closeDelay, ad_egg.awardDelay + 40), this, this.onClose);
            }
        }, {
            key: "updateRepairPorgress",
            value: function updateRepairPorgress(val) {
                this.progress = Math.min(1, Math.max(0, val));
                this.progressBar.value = this.progress * 100;
            }
        }, {
            key: "cutBack",
            value: function cutBack() {
                this.progress -= ad_egg.zs_click_award_back;
                this.updateRepairPorgress(this.progress);
            }
        }, {
            key: "onClose",
            value: function onClose() {
                console.log("====================关闭金蛋==================");
                this.callback && this.callback.run();
            }
        }]);
        return ad_egg;
    }(zs.fgui.base);
    ad_egg.typeDefine = FGUI_common_egg;
    ad_egg.bannerOffsetDelay = 1e3;
    ad_egg.awardDelay = 1e3;
    ad_egg.closeDelay = 1e3;
    ad_egg.click_add_percent = .14;
    ad_egg.zs_click_award_back = .01;
    ad_egg.repair_click_num = [.3, .7];
    ad_egg.cutBackInterval = 20;
    var workflow = /* */ function (_zs$workflow) {
        (0, _inherits2.default)(workflow, _zs$workflow);
        var _super51 = _createSuper(workflow);
        function workflow() {
            var _this32;
            (0, _classCallCheck2.default)(this, workflow);
            _this32 = _super51.apply(this, arguments);
            _this32.exporterPack = "export/export";
            _this32.bannerIgnoreList = ["START_FULL_1", "START_FULL_2", "OVER_FULL_1", "OVER_FULL_2"];
            return _this32;
        }
        (0, _createClass2.default)(workflow, [{
            key: "registe",
            value: function registe() {
                var _this33 = this;
                exportBinder.bindAll();
                zs.fgui.configs.registeBase(workflow.exporterSide, exporter_side);
                zs.fgui.configs.registeBase(workflow.exporterKnock, exporter_knock);
                zs.fgui.configs.registeItem(workflow.exportItem1, FGUI_item_1);
                zs.fgui.configs.registeItem(workflow.exportItem2, FGUI_item_2);
                zs.fgui.configs.registeItem(workflow.exportItem3, FGUI_item_3);
                zs.fgui.configs.registeItem(workflow.exportItem4, FGUI_item_4);
                zs.fgui.configs.registeItem(workflow.exportItem5, FGUI_item_5);
                zs.fgui.configs.registeItem(workflow.exportItem6, FGUI_item_6);
                zs.fgui.configs.registeItem(workflow.exportItem7, FGUI_item_7);
                exporter_fake_msg.soundShow = "sound/wechat.mp3";
                zs.exporter.utils.navigateErrorHandler = Laya.Handler.create(this, function () {
                    _this33.showFull1(false);
                }, null, false);
                zs.configs.load("fake_msg_nick", "config/nickname.json").then(function (res) {
                    exporter_fake_msg.nickList = res;
                    exporter_friend_challenge.nickList = res;
                });
                this.fsm = new zs.fsm().registe(workflow.GAME_START, workflow.START_FULL_1, 0, false, this, this.onStartFull1).registe(workflow.START_FULL_1, workflow.START_FULL_2, 0, false, this, this.onStartFull2).registe(workflow.START_FULL_2, workflow.GAME_HOME).registe(workflow.GAME_HOME, workflow.GAME_PREPARE, 0, false, this, this.onGamePrepare).registe(workflow.GAME_PREPARE, workflow.EXPORT_COMMON_EGG, 0, false, this, this.onCommonEgg).registe(workflow.EXPORT_COMMON_EGG, workflow.GAME_PLAY, 0, false, this, this.onGamePlay).registe(workflow.GAME_PLAY, workflow.OVER_FULL_1, 0, false, this, this.onOverFull1).registe(workflow.OVER_FULL_1, workflow.GAME_SETTLE, 0, false, this, this.onGameSettle).registe(workflow.GAME_SETTLE, workflow.OVER_FULL_2, 0, false, this, this.onOverFull2).registe(workflow.OVER_FULL_2, workflow.GAME_END).registe(workflow.GAME_END, workflow.GAME_HOME).setDefault(workflow.GAME_START, true);
            }
        }, {
            key: "onStartFull1",
            value: function onStartFull1(complete) {
                complete.run();
                console.log("开局全屏1", ProductKey.zs_jump_switch, ProductKey.zs_full_screen2_jump, ProductKey.zs_auto_full_screen_jump_switch);
                var bOpenFull = ProductKey.zs_full_screen2_jump && ProductKey.zs_auto_full_screen_jump_switch;
                if (bOpenFull) {
                    this.showFull2(true);
                } else {
                    zs.core.workflow.next();
                }
            }
        }, {
            key: "onStartFull2",
            value: function onStartFull2(complete) {
                complete.run();
                console.log("开局全屏2", ProductKey.zs_jump_switch, ProductKey.zs_full_screen1_jump, ProductKey.zs_auto_full_screen_jump_switch);
                var bOpenFull = ProductKey.zs_full_screen1_jump && ProductKey.zs_auto_full_screen_jump_switch;
                if (bOpenFull) {
                    this.showFull1(true);
                } else {
                    zs.core.workflow.next();
                }
            }
        }, {
            key: "onGamePrepare",
            value: function onGamePrepare(complete) {
                complete.run();
                var bVideo = ProductKey.zs_start_game_video_switch;
                console.log("开局视频", bVideo);
                if (bVideo) {
                    platform.getInstance().showReward(() => {
                        zs.core.workflow.next();
                    })
                } else {
                    zs.core.workflow.next();
                }
            }
        }, {
            key: "isNumber",
            value: function isNumber(val) {
                var regPos = /^\d+(\.\d+)?$/;
                var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/;
                if (regPos.test(val) || regNeg.test(val)) {
                    return true;
                } else {
                    return false;
                }
            }
        }, {
            key: "checkEgg",
            value: function checkEgg(bCommon) {
                return __awaiter(this, void 0, void 0, /* */ _regenerator.default.mark(function _callee2() {
                    var _this34 = this;
                    return _regenerator.default.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    return _context2.abrupt("return", new Promise(function (resolve, reject) {
                                        return __awaiter(_this34, void 0, void 0, /* */ _regenerator.default.mark(function _callee() {
                                            var curGameCount, zs_ready_click_num, zs_click_award_num, zs_click_award_since, isNew, appId, gameNum, clicknum, num, openNum, index;
                                            return _regenerator.default.wrap(function _callee$(_context) {
                                                while (1) {
                                                    switch (_context.prev = _context.next) {
                                                        case 0:
                                                            curGameCount = 1;
                                                            _context.next = 3;
                                                            return zs.network.download("LevelInfo").then(function (res) {
                                                                curGameCount = res;
                                                            });

                                                        case 3:
                                                            console.log("--------------", curGameCount);
                                                            zs_ready_click_num = ProductKey.zs_ready_click_num;
                                                            zs_click_award_num = ProductKey.zs_click_award_num;
                                                            zs_click_award_since = ProductKey.zs_click_award_since;
                                                            isNew = false;
                                                            appId = zs.core.appId;
                                                            if (!(isNew && zs_click_award_since && zs_click_award_since > 0)) {
                                                                _context.next = 14;
                                                                break;
                                                            }
                                                            gameNum = Laya.LocalStorage.getItem(appId + "day_game_num");
                                                            console.debug("当前局数" + gameNum, zs_click_award_since + "局后开启砸金蛋");
                                                            if (!(!gameNum || Number(gameNum) < zs_click_award_since)) {
                                                                _context.next = 14;
                                                                break;
                                                            }
                                                            return _context.abrupt("return", reject());

                                                        case 14:
                                                            clicknum = bCommon ? zs_ready_click_num : zs_click_award_num;
                                                            if (clicknum == null || clicknum.trim() == "") {
                                                                clicknum = "0";
                                                            }
                                                            num = JSON.parse(clicknum);
                                                            if (!this.isNumber(num)) {
                                                                _context.next = 24;
                                                                break;
                                                            }
                                                            openNum = bCommon ? Laya.LocalStorage.getItem(appId + "open_ready_num") : !bCommon ? Laya.LocalStorage.getItem(appId + "open_award_num") : 0;
                                                            console.log("bCommon" + bCommon, "限制:" + num, "已:" + openNum);
                                                            if (!(num == -1)) {
                                                                _context.next = 22;
                                                                break;
                                                            }
                                                            return _context.abrupt("return", resolve(null));

                                                        case 22:
                                                            if (!(Number(num) > Number(openNum))) {
                                                                _context.next = 24;
                                                                break;
                                                            }
                                                            return _context.abrupt("return", resolve(null));

                                                        case 24:
                                                            console.log("限制:" + num);
                                                            if (!(Array.isArray(num) && num.length > 0)) {
                                                                _context.next = 31;
                                                                break;
                                                            }
                                                            if (!(num.length == 1 && num[0] == -1)) {
                                                                _context.next = 28;
                                                                break;
                                                            }
                                                            return _context.abrupt("return", resolve(null));

                                                        case 28:
                                                            index = num.indexOf(curGameCount);
                                                            if (!(index != -1)) {
                                                                _context.next = 31;
                                                                break;
                                                            }
                                                            return _context.abrupt("return", resolve(null));

                                                        case 31:
                                                            return _context.abrupt("return", reject());

                                                        case 32:
                                                        case "end":
                                                            return _context.stop();
                                                    }
                                                }
                                            }, _callee, this);
                                        }));
                                    }));

                                case 1:
                                case "end":
                                    return _context2.stop();
                            }
                        }
                    }, _callee2);
                }));
            }
        }, {
            key: "onCommonEgg",
            value: function onCommonEgg(complete) {
                return __awaiter(this, void 0, void 0, /* */ _regenerator.default.mark(function _callee3() {
                    var bEgg;
                    return _regenerator.default.wrap(function _callee3$(_context3) {
                        while (1) {
                            switch (_context3.prev = _context3.next) {
                                case 0:
                                    complete.run();
                                    _context3.next = 3;
                                    return this.checkEgg(true).then(function () {
                                        bEgg = true;
                                    }).catch(function () {
                                        bEgg = false;
                                    });

                                case 3:
                                    console.log("通用砸金蛋", bEgg);
                                    if (bEgg) {
                                        this.commonEgg();
                                    } else {
                                        zs.core.workflow.next();
                                    }

                                case 5:
                                case "end":
                                    return _context3.stop();
                            }
                        }
                    }, _callee3, this);
                }));
            }
        }, {
            key: "onGameEgg",
            value: function onGameEgg(complete) {
                return __awaiter(this, void 0, void 0, /* */ _regenerator.default.mark(function _callee4() {
                    var bEgg;
                    return _regenerator.default.wrap(function _callee4$(_context4) {
                        while (1) {
                            switch (_context4.prev = _context4.next) {
                                case 0:
                                    complete.run();
                                    _context4.next = 3;
                                    return this.checkEgg(false).then(function () {
                                        bEgg = true;
                                    }).catch(function () {
                                        bEgg = false;
                                    });

                                case 3:
                                    console.log("游戏砸金蛋", bEgg);
                                    if (bEgg) {
                                        this.gameEgg();
                                    } else {
                                        zs.core.workflow.next();
                                    }

                                case 5:
                                case "end":
                                    return _context4.stop();
                            }
                        }
                    }, _callee4, this);
                }));
            }
        }, {
            key: "onGamePlay",
            value: function onGamePlay(complete) {
                complete.run();
                var bFakeExit = ProductKey.zs_history_list_jump;
                console.log("假退出开关", ProductKey.zs_history_list_jump);
                if (bFakeExit) {
                    this.fakeExit();
                }
            }
        }, {
            key: "onOverFull1",
            value: function onOverFull1(complete) {
                complete.run();
                this.hideFakeExit();
                console.log("结束全屏1", ProductKey.zs_full_screen1_jump);
                var bOpenFull = ProductKey.zs_full_screen1_jump;
                if (bOpenFull) {
                    this.showFull1(true);
                } else {
                    zs.core.workflow.next();
                }
            }
        }, {
            key: "onGameSettle",
            value: function onGameSettle(complete) {
                complete.run();
                var bFakeExit = ProductKey.zs_history_list_jump;
                console.log("假退出开关", ProductKey.zs_history_list_jump);
                if (bFakeExit) {
                    this.fakeExit();
                }
                console.log("微信假消息", ProductKey.zs_jump_switch, ProductKey.zs_false_news_switch);
                if (ProductKey.zs_false_news_switch) {
                    this.fakeMsg();
                }
            }
        }, {
            key: "onOverFull2",
            value: function onOverFull2(complete) {
                complete.run();
                this.hideFakeExit();
                console.log("结束全屏2", ProductKey.zs_jump_switch, ProductKey.zs_full_screen2_jump);
                var bOpenFull = ProductKey.zs_full_screen2_jump;
                if (bOpenFull) {
                    this.showFull2(true);
                } else {
                    zs.core.workflow.next();
                }
                this.hideFakeMsg();
            }
        }, {
            key: "hideWindowFull",
            value: function hideWindowFull() {
                this.windowFull && this.windowFull.dispose();
                this.windowFull = null;
            }
        }, {
            key: "showFull1",
            value: function showFull1(auto) {
                var _this35 = this;
                if (this.windowFull) {
                    zs.log.debug("全屏已经打开了，不能再开了");
                    return;
                }
                if (this.windowFull) {
                    this.windowFull.update(zs.exporter.full, function (unit) {
                        unit.enterJumpExport().setMistaken();
                    }).show();
                } else {
                    this.windowFull = zs.fgui.window.create().attach(exporter_full_1).scaleFit(zs.configs.gameCfg.designWidth, zs.configs.gameCfg.designHeight).fit().block(true).update(zs.exporter.full, function (unit) {
                        unit.setClickContinue(Laya.Handler.create(_this35, function () {
                            _this35.hideWindowFull();
                            if (auto) {
                                _this35.fsm.runNext();
                            }
                        }, null, false)).apply();
                    }).show();
                }
                return this.windowFull;
            }
        }, {
            key: "showFull2",
            value: function showFull2(auto) {
                var _this36 = this;
                if (this.windowFull) {
                    zs.log.debug("全屏已经打开了，不能再开了");
                    return;
                }
                if (this.windowFull) {
                    this.windowFull.update(zs.exporter.full, function (unit) {
                        unit.enterJumpExport().setMistaken();
                    }).show();
                } else {
                    this.windowFull = zs.fgui.window.create().attach(exporter_full_2).scaleFit(zs.configs.gameCfg.designWidth, zs.configs.gameCfg.designHeight).fit().block(true).update(zs.exporter.full, function (unit) {
                        unit.setClickContinue(Laya.Handler.create(_this36, function () {
                            _this36.hideWindowFull();
                            if (auto) {
                                _this36.fsm.runNext();
                            }
                        }, null, false)).apply();
                    }).show();
                }
                return this.windowFull;
            }
        }, {
            key: "commonEgg",
            value: function commonEgg() {
                var _this37 = this;
                if (this._commonEgg) {
                    this._commonEgg.view.visible = true;
                    this._commonEgg.setCloseCallback(Laya.Handler.create(this, function () {
                        console.log("关闭砸金蛋");
                        _this37.hideCommonEgg();
                        _this37.fsm.runNext();
                        var appId = zs.core.appId;
                        var num = Laya.LocalStorage.getItem("".concat(appId, "open_ready_num"));
                        num || (num = "0");
                        Laya.LocalStorage.setItem("".concat(appId, "open_ready_num"), "".concat(Number(num) + 1));
                    })).apply();
                    this.windowExport.setBase(this._commonEgg);
                } else {
                    this.windowExport.attach(ad_egg).scaleFit(zs.configs.gameCfg.designWidth, zs.configs.gameCfg.designHeight).fit().block(true).update(ad_egg, function (unit) {
                        _this37._commonEgg = unit;
                        unit.setCloseCallback(Laya.Handler.create(_this37, function () {
                            console.log("关闭砸金蛋");
                            _this37.hideCommonEgg();
                            _this37.fsm.runNext();
                        })).apply();
                    });
                }
                return this.windowExport.front();
            }
        }, {
            key: "hideCommonEgg",
            value: function hideCommonEgg() {
                this._commonEgg && this.windowExport.detach(this._commonEgg);
                this._commonEgg = null;
            }
        }, {
            key: "gameEgg",
            value: function gameEgg() {
                var _this38 = this;
                if (this._gameEgg) {
                    this._gameEgg.view.visible = true;
                    this._gameEgg.setCloseCallback(Laya.Handler.create(this, function () {
                        console.log("关闭砸金蛋");
                        _this38.hideGameEgg();
                        _this38.fsm.runNext();
                    })).apply();
                    this.windowExport.setBase(this._gameEgg);
                } else {
                    this.windowExport.attach(ad_egg).scaleFit(zs.configs.gameCfg.designWidth, zs.configs.gameCfg.designHeight).block(true).fit().update(ad_egg, function (unit) {
                        _this38._gameEgg = unit;
                        unit.setCloseCallback(Laya.Handler.create(_this38, function () {
                            console.log("关闭砸金蛋");
                            _this38.hideGameEgg();
                            _this38.fsm.runNext();
                            var appId = zs.core.appId;
                            var num = Laya.LocalStorage.getItem("".concat(appId, "open_award_num"));
                            num || (num = "0");
                            Laya.LocalStorage.setItem("".concat(appId, "open_award_num"), "".concat(Number(num) + 1));
                        })).apply();
                    });
                }
                return this.windowExport.front();
            }
        }, {
            key: "hideGameEgg",
            value: function hideGameEgg() {
                this._gameEgg && this.windowExport.detach(this._gameEgg);
                this._gameEgg = null;
            }
        }, {
            key: "fakeMsg",
            value: function fakeMsg() {
                var _this39 = this;
                if (this._fakeMsg) {
                    this._fakeMsg.view.visible = true;
                    this._fakeMsg.apply();
                    this.windowExport.setBase(this._fakeMsg).front();
                } else {
                    this.windowExport.attach(exporter_fake_msg).scaleFit(zs.configs.gameCfg.designWidth, zs.configs.gameCfg.designHeight).update(exporter_fake_msg, function (unit) {
                        _this39._fakeMsg = unit;
                        unit.setCancelCallback(Laya.Handler.create(_this39, function () {
                            if (ProductKey.zs_reminder_switch) {
                                _this39.challengeExport();
                            }
                        })).apply();
                    }).align(zs.fgui.AlignType.Top).front();
                }
                return this.windowExport;
            }
        }, {
            key: "hideFakeMsg",
            value: function hideFakeMsg() {
                this._fakeMsg && this.windowExport.detach(this._fakeMsg);
                this._fakeMsg = null;
            }
        }, {
            key: "challengeExport",
            value: function challengeExport() {
                var _this40 = this;
                if (this._challengeExport) {
                    this._challengeExport.view.visible = true;
                    this._challengeExport.apply();
                    this.windowExport.setBase(this._challengeExport).front();
                } else {
                    this.windowExport.attach(exporter_friend_challenge).scaleFit(zs.configs.gameCfg.designWidth, zs.configs.gameCfg.designHeight).fit().block(true).update(exporter_friend_challenge, function (unit) {
                        _this40._challengeExport = unit;
                        unit.setCloseCallback(Laya.Handler.create(_this40, function () {
                            _this40.hideChallenge();
                        })).apply();
                    }).show().front();
                }
                return this.windowExport;
            }
        }, {
            key: "hideChallenge",
            value: function hideChallenge() {
                this._challengeExport && this.windowExport.detach(this._challengeExport);
                this._challengeExport = null;
            }
        }, {
            key: "fakeExit",
            value: function fakeExit() {
                var _this41 = this;
                if (this._fakeExit) {
                    this._fakeExit.view.visible = true;
                    this.windowExport.setBase(this._fakeExit).front();
                } else {
                    this.windowExport.attach(exporter_fake_exit).update(exporter_fake_exit, function (unit) {
                        _this41._fakeExit = unit;
                        unit.setClickHandler(Laya.Handler.create(_this41, function () {
                            _this41.showFull1(false);
                        }, null, false));
                    }).align(zs.fgui.AlignType.TopLeft, 10, 50).scale(1.5, 1.5).front();
                }
                return this.windowExport;
            }
        }, {
            key: "hideFakeExit",
            value: function hideFakeExit() {
                this._fakeExit && this.windowExport.detach(this._fakeExit);
                this._fakeExit = null;
            }
        }, {
            key: "windowExport",
            get: function get() {
                if (this._windowExport == null) {
                    this._windowExport = zs.fgui.window.create().fit().show();
                }
                return this._windowExport;
            }
        }]);
        return workflow;
    }(zs.workflow);
    workflow.GAME_START = "GAME_START";
    workflow.START_FULL_1 = "START_FULL_1";
    workflow.START_FULL_2 = "START_FULL_2";
    workflow.GAME_HOME = "GAME_HOME";
    workflow.GAME_PREPARE = "GAME_PREPARE";
    workflow.EXPORT_COMMON_EGG = "EXPORT_COMMON_EGG";
    workflow.GAME_PLAY = "GAME_PLAY";
    workflow.EXPORT_GAME_EGG = "EXPORT_GAME_EGG";
    workflow.OVER_FULL_1 = "OVER_FULL_1";
    workflow.GAME_SETTLE = "GAME_SETTLE";
    workflow.OVER_FULL_2 = "OVER_FULL_2";
    workflow.GAME_END = "GAME_END";
    workflow.exporterSide = "export_side";
    workflow.exporterKnock = "export_knock";
    workflow.exportItem1 = "export_item_1";
    workflow.exportItem2 = "export_item_2";
    workflow.exportItem3 = "export_item_3";
    workflow.exportItem4 = "export_item_4";
    workflow.exportItem5 = "export_item_5";
    workflow.exportItem6 = "export_item_6";
    workflow.exportItem7 = "export_item_7";
    var fgui_Egg = /* */ function (_fgui$GComponent21) {
        (0, _inherits2.default)(fgui_Egg, _fgui$GComponent21);
        var _super52 = _createSuper(fgui_Egg);
        function fgui_Egg() {
            (0, _classCallCheck2.default)(this, fgui_Egg);
            return _super52.apply(this, arguments);
        }
        (0, _createClass2.default)(fgui_Egg, [{
            key: "onConstruct",
            value: function onConstruct() {
                this.btn_crash = this.getChild("btn_crash");
                this.slider = this.getChild("slider");
            }
        }], [{
            key: "createInstance",
            value: function createInstance() {
                return fgui.UIPackage.createObject("main", "Egg");
            }
        }]);
        return fgui_Egg;
    }(fgui.GComponent);
    fgui_Egg.URL = "ui://hrj8309q10fsw2d";
    var fgui_shop_btn = /* */ function (_fgui$GButton7) {
        (0, _inherits2.default)(fgui_shop_btn, _fgui$GButton7);
        var _super53 = _createSuper(fgui_shop_btn);
        function fgui_shop_btn() {
            (0, _classCallCheck2.default)(this, fgui_shop_btn);
            return _super53.apply(this, arguments);
        }
        (0, _createClass2.default)(fgui_shop_btn, [{
            key: "onConstruct",
            value: function onConstruct() {
                this.goldNum = this.getChild("goldNum");
            }
        }], [{
            key: "createInstance",
            value: function createInstance() {
                return fgui.UIPackage.createObject("main", "shop_btn");
            }
        }]);
        return fgui_shop_btn;
    }(fgui.GButton);
    fgui_shop_btn.URL = "ui://hrj8309qjldkw3l";
    var fgui_shop_item = /* */ function (_fgui$GComponent22) {
        (0, _inherits2.default)(fgui_shop_item, _fgui$GComponent22);
        var _super54 = _createSuper(fgui_shop_item);
        function fgui_shop_item() {
            (0, _classCallCheck2.default)(this, fgui_shop_item);
            return _super54.apply(this, arguments);
        }
        (0, _createClass2.default)(fgui_shop_item, [{
            key: "onConstruct",
            value: function onConstruct() {
                this.shop_btn = this.getChild("shop_btn");
                this.shopIcon = this.getChild("shopIcon");
                this.panel_lock = this.getChild("panel_lock");
                this.iconG = this.getChild("iconG");
            }
        }], [{
            key: "createInstance",
            value: function createInstance() {
                return fgui.UIPackage.createObject("main", "shop_item");
            }
        }]);
        return fgui_shop_item;
    }(fgui.GComponent);
    fgui_shop_item.URL = "ui://hrj8309qjputw3c";
    var fgui_position = /* */ function (_fgui$GComponent23) {
        (0, _inherits2.default)(fgui_position, _fgui$GComponent23);
        var _super55 = _createSuper(fgui_position);
        function fgui_position() {
            (0, _classCallCheck2.default)(this, fgui_position);
            return _super55.apply(this, arguments);
        }
        (0, _createClass2.default)(fgui_position, [{
            key: "onConstruct",
            value: function onConstruct() {
                this.c1 = this.getController("c1");
            }
        }], [{
            key: "createInstance",
            value: function createInstance() {
                return fgui.UIPackage.createObject("main", "position");
            }
        }]);
        return fgui_position;
    }(fgui.GComponent);
    fgui_position.URL = "ui://hrj8309qo5wh23";
    var fgui_Result = /* */ function (_fgui$GComponent24) {
        (0, _inherits2.default)(fgui_Result, _fgui$GComponent24);
        var _super56 = _createSuper(fgui_Result);
        function fgui_Result() {
            (0, _classCallCheck2.default)(this, fgui_Result);
            return _super56.apply(this, arguments);
        }
        (0, _createClass2.default)(fgui_Result, [{
            key: "onConstruct",
            value: function onConstruct() {
                this.c1 = this.getController("c1");
                this.bg = this.getChild("bg");
                this.star1 = this.getChild("star1");
                this.star2 = this.getChild("star2");
                this.star3 = this.getChild("star3");
                this.light1_spot1 = this.getChild("light1_spot1");
                this.light1_spot2 = this.getChild("light1_spot2");
                this.light1_spot3 = this.getChild("light1_spot3");
                this.light1_spot4 = this.getChild("light1_spot4");
                this.middle = this.getChild("middle");
                this.title = this.getChild("title");
                this.continue = this.getChild("continue");
                this.coin = this.getChild("coin");
                this.coin_box = this.getChild("coin_box");
                this.ani_star3 = this.getTransition("ani_star3");
                this.ani_circulation = this.getTransition("ani_circulation");
                this.ani_star2 = this.getTransition("ani_star2");
                this.ani_star1 = this.getTransition("ani_star1");
            }
        }], [{
            key: "createInstance",
            value: function createInstance() {
                return fgui.UIPackage.createObject("main", "Result");
            }
        }]);
        return fgui_Result;
    }(fgui.GComponent);
    fgui_Result.URL = "ui://hrj8309qo94213";
    var fgui_star = /* */ function (_fgui$GComponent25) {
        (0, _inherits2.default)(fgui_star, _fgui$GComponent25);
        var _super57 = _createSuper(fgui_star);
        function fgui_star() {
            (0, _classCallCheck2.default)(this, fgui_star);
            return _super57.apply(this, arguments);
        }
        (0, _createClass2.default)(fgui_star, [{
            key: "onConstruct",
            value: function onConstruct() {
                this.c1 = this.getController("c1");
            }
        }], [{
            key: "createInstance",
            value: function createInstance() {
                return fgui.UIPackage.createObject("main", "star");
            }
        }]);
        return fgui_star;
    }(fgui.GComponent);
    fgui_star.URL = "ui://hrj8309qo94215";
    var fgui_Game = /* */ function (_fgui$GComponent26) {
        (0, _inherits2.default)(fgui_Game, _fgui$GComponent26);
        var _super58 = _createSuper(fgui_Game);
        function fgui_Game() {
            (0, _classCallCheck2.default)(this, fgui_Game);
            return _super58.apply(this, arguments);
        }
        (0, _createClass2.default)(fgui_Game, [{
            key: "onConstruct",
            value: function onConstruct() {
                this.hand = this.getChild("hand");
                this.slider = this.getChild("slider");
                this.lief1 = this.getChild("lief1");
                this.lief2 = this.getChild("lief2");
                this.lief3 = this.getChild("lief3");
                this.life = this.getChild("life");
                this.good1 = this.getChild("good1");
                this.good2 = this.getChild("good2");
                this.good3 = this.getChild("good3");
                this.addheart = this.getChild("addheart");
                this.heart = this.getChild("heart");
                this.addCoin = this.getChild("addCoin");
                this.endHeartG = this.getChild("endHeartG");
                this.hand_2 = this.getTransition("hand");
                this.ani_1 = this.getTransition("ani_1");
                this.ani_2 = this.getTransition("ani_2");
                this.ani_3 = this.getTransition("ani_3");
            }
        }], [{
            key: "createInstance",
            value: function createInstance() {
                return fgui.UIPackage.createObject("main", "Game");
            }
        }]);
        return fgui_Game;
    }(fgui.GComponent);
    fgui_Game.URL = "ui://hrj8309qo942z";
    var fgui_light1_spot = /* */ function (_fgui$GComponent27) {
        (0, _inherits2.default)(fgui_light1_spot, _fgui$GComponent27);
        var _super59 = _createSuper(fgui_light1_spot);
        function fgui_light1_spot() {
            (0, _classCallCheck2.default)(this, fgui_light1_spot);
            return _super59.apply(this, arguments);
        }
        (0, _createClass2.default)(fgui_light1_spot, [{
            key: "onConstruct",
            value: function onConstruct() {
                this.light1_spot1 = this.getChild("light1_spot1");
                this.light1_spot2 = this.getChild("light1_spot2");
                this.light1_spot3 = this.getChild("light1_spot3");
                this.light2_spot1 = this.getChild("light2_spot1");
                this.light2_spot2 = this.getChild("light2_spot2");
                this.light1_spot_ani = this.getTransition("light1_spot_ani");
            }
        }], [{
            key: "createInstance",
            value: function createInstance() {
                return fgui.UIPackage.createObject("main", "light1_spot");
            }
        }]);
        return fgui_light1_spot;
    }(fgui.GComponent);
    fgui_light1_spot.URL = "ui://hrj8309qry611x";
    var fgui_spot = /* */ function (_fgui$GComponent28) {
        (0, _inherits2.default)(fgui_spot, _fgui$GComponent28);
        var _super60 = _createSuper(fgui_spot);
        function fgui_spot() {
            (0, _classCallCheck2.default)(this, fgui_spot);
            return _super60.apply(this, arguments);
        }
        (0, _createClass2.default)(fgui_spot, [{
            key: "onConstruct",
            value: function onConstruct() {
                this.light1_spot1 = this.getChild("light1_spot1");
                this.light1_spot2 = this.getChild("light1_spot2");
                this.light1_spot3 = this.getChild("light1_spot3");
                this.light2_spot1 = this.getChild("light2_spot1");
                this.light2_spot2 = this.getChild("light2_spot2");
            }
        }], [{
            key: "createInstance",
            value: function createInstance() {
                return fgui.UIPackage.createObject("main", "spot");
            }
        }]);
        return fgui_spot;
    }(fgui.GComponent);
    fgui_spot.URL = "ui://hrj8309qry611y";
    var fgui_spot1 = /* */ function (_fgui$GComponent29) {
        (0, _inherits2.default)(fgui_spot1, _fgui$GComponent29);
        var _super61 = _createSuper(fgui_spot1);
        function fgui_spot1() {
            (0, _classCallCheck2.default)(this, fgui_spot1);
            return _super61.apply(this, arguments);
        }
        (0, _createClass2.default)(fgui_spot1, [{
            key: "onConstruct",
            value: function onConstruct() {
                this.light1_spot1 = this.getChild("light1_spot1");
                this.light1_spot2 = this.getChild("light1_spot2");
                this.light1_spot3 = this.getChild("light1_spot3");
                this.light1_spot4 = this.getChild("light1_spot4");
                this.light1_spot5 = this.getChild("light1_spot5");
                this.light1_spot6 = this.getChild("light1_spot6");
                this.light2_spot1 = this.getChild("light2_spot1");
                this.light2_spot2 = this.getChild("light2_spot2");
                this.light2_spot3 = this.getChild("light2_spot3");
                this.light2_spot4 = this.getChild("light2_spot4");
                this.light2_spot5 = this.getChild("light2_spot5");
                this.light2_spot6 = this.getChild("light2_spot6");
                this.light2_spot7 = this.getChild("light2_spot7");
                this.light2_spot8 = this.getChild("light2_spot8");
                this.light4_spot_ani = this.getTransition("light4_spot_ani");
            }
        }], [{
            key: "createInstance",
            value: function createInstance() {
                return fgui.UIPackage.createObject("main", "spot1");
            }
        }]);
        return fgui_spot1;
    }(fgui.GComponent);
    fgui_spot1.URL = "ui://hrj8309qry6120";
    var fgui_btn_next = /* */ function (_fgui$GComponent30) {
        (0, _inherits2.default)(fgui_btn_next, _fgui$GComponent30);
        var _super62 = _createSuper(fgui_btn_next);
        function fgui_btn_next() {
            (0, _classCallCheck2.default)(this, fgui_btn_next);
            return _super62.apply(this, arguments);
        }
        (0, _createClass2.default)(fgui_btn_next, [{
            key: "onConstruct",
            value: function onConstruct() {
                this.btn = this.getChild("btn");
            }
        }], [{
            key: "createInstance",
            value: function createInstance() {
                return fgui.UIPackage.createObject("main", "btn_next");
            }
        }]);
        return fgui_btn_next;
    }(fgui.GComponent);
    fgui_btn_next.URL = "ui://hrj8309qsnq619";
    var fgui_Reword = /* */ function (_fgui$GComponent31) {
        (0, _inherits2.default)(fgui_Reword, _fgui$GComponent31);
        var _super63 = _createSuper(fgui_Reword);
        function fgui_Reword() {
            (0, _classCallCheck2.default)(this, fgui_Reword);
            return _super63.apply(this, arguments);
        }
        (0, _createClass2.default)(fgui_Reword, [{
            key: "onConstruct",
            value: function onConstruct() {
                this.bg = this.getChild("bg");
                this.clothes = this.getChild("clothes");
                this.btn_video = this.getChild("btn_video");
                this.slider = this.getChild("slider");
                this.btn_close = this.getChild("btn_close");
                this.btn_ok = this.getChild("btn_ok");
                this.coin = this.getChild("coin");
            }
        }], [{
            key: "createInstance",
            value: function createInstance() {
                return fgui.UIPackage.createObject("main", "Reword");
            }
        }]);
        return fgui_Reword;
    }(fgui.GComponent);
    fgui_Reword.URL = "ui://hrj8309que6xw43";
    var mainBinder = /* */ function () {
        function mainBinder() {
            (0, _classCallCheck2.default)(this, mainBinder);
        }
        (0, _createClass2.default)(mainBinder, null, [{
            key: "bindAll",
            value: function bindAll() {
                fgui.UIObjectFactory.setExtension(fgui_Egg.URL, fgui_Egg);
                fgui.UIObjectFactory.setExtension(fgui_shop_btn.URL, fgui_shop_btn);
                fgui.UIObjectFactory.setExtension(fgui_Shop.URL, fgui_Shop);
                fgui.UIObjectFactory.setExtension(fgui_shop_item.URL, fgui_shop_item);
                fgui.UIObjectFactory.setExtension(fgui_position.URL, fgui_position);
                fgui.UIObjectFactory.setExtension(fgui_Result.URL, fgui_Result);
                fgui.UIObjectFactory.setExtension(fgui_star.URL, fgui_star);
                fgui.UIObjectFactory.setExtension(fgui_Home.URL, fgui_Home);
                fgui.UIObjectFactory.setExtension(fgui_Game.URL, fgui_Game);
                fgui.UIObjectFactory.setExtension(fgui_light1_spot.URL, fgui_light1_spot);
                fgui.UIObjectFactory.setExtension(fgui_spot.URL, fgui_spot);
                fgui.UIObjectFactory.setExtension(fgui_spot1.URL, fgui_spot1);
                fgui.UIObjectFactory.setExtension(fgui_btn_next.URL, fgui_btn_next);
                fgui.UIObjectFactory.setExtension(fgui_Reword.URL, fgui_Reword);
            }
        }]);
        return mainBinder;
    }();
    var rewordPage = /* */ function (_zs$fgui$base5) {
        (0, _inherits2.default)(rewordPage, _zs$fgui$base5);
        var _super64 = _createSuper(rewordPage);
        function rewordPage() {
            (0, _classCallCheck2.default)(this, rewordPage);
            return _super64.apply(this, arguments);
        }
        (0, _createClass2.default)(rewordPage, [{
            key: "check",
            value: function check(component) {
                return component instanceof fgui_Reword;
            }
        }, {
            key: "init",
            value: function init() {
                var view = this.view;
                Laya.stage.on(GameManager.REWORD_PAGE_SHOW, this, this.show);
                view.btn_close.onClick(this, this.close);
                view.btn_ok.onClick(this, this.close);
                view.btn_video.onClick(this, function () {
                    var _this42 = this;
                    platform.getInstance().showReward(() => {
                        Laya.LocalStorage.setItem("shop" + _this42.shopData.skinId.toString(), "true");
                        view.btn_video.visible = false;
                    })
                });
            }
        }, {
            key: "show",
            value: function show() {
                this.close();
                return;
                var view = this.view;
                this.shopData = null;
                for (var index = 0; index < ResLoaderManager.shopCfg.length; index++) {
                    var element = ResLoaderManager.shopCfg[index];
                    var state = skinShop.getIteamState(element);
                    if (state == 2) {
                        console.log("当前展示装备等级未达到");
                        this.shopData = element;
                        break;
                    } else if (state == 0) {
                        console.log("当前展示装备等级已达到，但尚未解锁");
                        this.shopData = element;
                        break;
                    }
                }
                if (!this.shopData) {
                    this.close();
                    return;
                }
                if (this.shopData.skinType == 1) {
                    this.close();
                    return;
                }
                view.clothes.url = "ui://main/" + "clothes" + this.shopData.skinId.toString();
                var fenzi = GameManager.instance().myselfLevel();
                var fenmu = this.shopData.Level;
                view.coin.text = fenzi.toString() + "/" + fenmu.toString();
                if (fenzi >= fenmu) {
                    fenzi = fenmu;
                    view.btn_ok.visible = false;
                    view.btn_close.visible = false;
                    Laya.timer.once(3e3, this, function () {
                        view.btn_close.visible = true;
                    });
                } else {
                    view.btn_close.visible = false;
                    view.btn_ok.visible = true;
                }
                view.slider.value = 0;
                var setValue = fenzi / fenmu * 100;
                Laya.Tween.to(view.slider, {
                    value: setValue
                }, 1e3, Laya.Ease.quartInOut);
            }
        }, {
            key: "close",
            value: function close() {
                GameLogic.rewordWindow.hide();
                zs.core.workflow.next();
            }
        }, {
            key: "dispose",
            value: function dispose() {
                (0, _get2.default)((0, _getPrototypeOf2.default)(rewordPage.prototype), "dispose", this).call(this);
                this.view.visible = false;
            }
        }], [{
            key: "make",
            value: function make() {
                return fgui_Reword.createInstance();
            }
        }, {
            key: "type",
            value: function type() {
                return fgui_Reword;
            }
        }]);
        return rewordPage;
    }(zs.fgui.base);
    var winPage = /* */ function (_zs$fgui$base6) {//胜利
        (0, _inherits2.default)(winPage, _zs$fgui$base6);
        var _super65 = _createSuper(winPage);
        function winPage() {
            (0, _classCallCheck2.default)(this, winPage);
            return _super65.apply(this, arguments);

            // window.view.getChildAt(0) 半透明黑背
            // window.view.getChildAt(1) 三个星星的紫色背景
            // window.view.getChildAt(2) 三个星星的旋转背景
            // window.view.getChildAt(3) 三个星星的丝带背景
            // window.view.getChildAt(4) 失败三个星星的中间
            // window.view.getChildAt(5) 失败三个星星的左边
            // window.view.getChildAt(6) 失败三个星星的右边
            // window.view.getChildAt(7) 成功三个星星的左边
            // window.view.getChildAt(8) 成功三个星星的中间
            // window.view.getChildAt(9) 成功三个星星的右边

            // window.view.getChildAt(14) 星星那一块
            // window.view.getChildAt(15) 上面标志
            // window.view.getChildAt(16) 下面continue
            // window.view.getChildAt(19) 金币那一块

        }
        (0, _createClass2.default)(winPage, [{
            key: "check",
            value: function check(component) {
                return component instanceof fgui_Result;
            }
        }, {
            key: "init",
            value: function init() {
                var view = this.view;
                view.continue.onClick(this, function () {
                    if (GameLogic.rewordWindow) {
                        GameLogic.rewordWindow.show();
                    } else {
                        GameLogic.rewordWindow = zs.fgui.window.create().attach(rewordPage).scaleFit(zs.configs.gameCfg.designWidth,
                            zs.configs.gameCfg.designHeight).fit().update(rewordPage, function (unit) { }).show();
                    }
                    Laya.stage.event(GameManager.REWORD_PAGE_SHOW);
                    GameLogic.winWindow.hide();
                });
                Laya.stage.on("PLAY_WIN_ANIM", this, this.playWinAnim);
                Laya.stage.on(GameManager.WIN_PAGE_SET_GOLD, this, this.setGetGold);
                this.view.getChildAt(15).y = 100;
                this.view.getChildAt(14).y = -20;
                this.view.getChildAt(16).y = 1600;
                this.view.getChildAt(19).y = 1200;
                class Item extends Laya.Box {
                    constructor() {
                        super();
                        this.img = new Laya.Image();
                        this.img.name = "thumb";
                        this.img.size(400, 300);
                        this.addChild(this.img);
                    }

                    setImg(src) {
                        this.img.skin = src;
                    }
                }

                let list = new Laya.List();
                Laya.stage.addChild(list);
                list.itemRender = Item;
                list.zOrder = 100000000000000
                list.repeatX = 2;
                list.y = 530;
                list.centerX = 0;
                list.repeatY = 2;
                list.size(800, 600);
                list.selectEnable = true;
                this.view.displayObject.addChild(list);
                platform.getInstance().initList(list);

                let img = new Laya.Image();
                img.skin = "fgui/coin3.png";
                img.centerX = 0;
                img.y = 1350;
                this.view.displayObject.addChild(img);
                img.on(Laya.Event.CLICK, this, this.videoReward)
            }
        }, {
            key: "videoReward",
            value: function videoReward() {
                platform.getInstance().showReward(() => {
                    GameManager.instance().addGold(GameManager.instance().myGold() + GameManager.instance().levelAddGold * 2);
                    if (GameLogic.rewordWindow) {
                        GameLogic.rewordWindow.show();
                    } else {
                        GameLogic.rewordWindow = zs.fgui.window.create().attach(rewordPage).scaleFit(zs.configs.gameCfg.designWidth,
                            zs.configs.gameCfg.designHeight).fit().update(rewordPage, function (unit) { }).show();
                    }
                    Laya.stage.event(GameManager.REWORD_PAGE_SHOW);
                    GameLogic.winWindow.hide();
                })
            }
        }, {
            key: "setGetGold",
            value: function setGetGold() {
                GameManager.instance().levelAddGold += GameManager.instance().residueChance * 10;
                GameManager.instance().addGold(GameManager.instance().myGold() + GameManager.instance().levelAddGold);
                this.view.coin.asTextField.text = GameManager.instance().levelAddGold.toString();
            }
        }, {
            key: "playWinAnim",
            value: function playWinAnim() {
                // var starNum = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
                // if (starNum < 1) starNum = 1;
                // if (starNum > 3) starNum = 3;
                // var animID = "ani_star" + starNum.toString();
                // this.view.getTransition(animID).play();
                // this.playWinAudio(starNum);
            }
        }, {
            key: "playWinAudio",
            value: function playWinAudio(num) {
                // AudioManager.playShotClip("star");
                // num -= 1;
                // if (num <= 0) return;
                // Laya.timer.once(300, this, function () {
                //     this.playWinAudio(num);
                // });
            }
        }, {
            key: "dispose",
            value: function dispose() {
                Laya.stage.off(GameManager.WIN_PAGE_SET_GOLD, this, this.setGetGold);
                (0, _get2.default)((0, _getPrototypeOf2.default)(winPage.prototype), "dispose", this).call(this);
                this.view.visible = false;
            }
        }], [{
            key: "make",
            value: function make() {
                return fgui_Result.createInstance();
            }
        }, {
            key: "type",
            value: function type() {
                return fgui_Result;
            }
        }]);
        return winPage;
    }(zs.fgui.base);
    var gamePage = /* */ function (_zs$fgui$base7) {
        (0, _inherits2.default)(gamePage, _zs$fgui$base7);
        var _super66 = _createSuper(gamePage);
        function gamePage() {
            var _this43;
            (0, _classCallCheck2.default)(this, gamePage);
            _this43 = _super66.apply(this, arguments);
            _this43.slidersIcons = [];
            _this43.tipRandom = 1;
            return _this43;
        }
        (0, _createClass2.default)(gamePage, [{
            key: "check",
            value: function check(component) {
                return component instanceof fgui_Game;
            }
        }, {
            key: "init",
            value: function init() {
                Laya.stage.on(GameManager.GAME_PAGE_SET_RESIDUCHANCE, this, this.setResidueChance);
                Laya.stage.on(GameManager.GAME_PAGE_UPDATE_SLIDER, this, this.setSliderVuale);
                Laya.stage.on(GameManager.GAME_PAGE_SET_SLIDER_ICON, this, this.setSliderIconSwitch);
                Laya.stage.on(GameManager.GAME_PAGE_CREATE_SLIDER_ICON, this, this.createSliderIcon);
                Laya.stage.on(GameManager.GAME_PAGE_SET_TIPTEXT_SHOW, this, this.setShowTextTip);
                Laya.stage.on(GameManager.GAME_PAGE_HIDE_FINGER, this, this.hideHand);
                Laya.stage.on(GameManager.GAME_PAGE_SET_ADDCOIN, this, this.setAddCion);
                Laya.stage.on(GameManager.GAME_PAGE_CLEAR_DATA, this, this.clearData);
                Laya.stage.on(GameManager.GAME_PAGE_SHOW_END, this, this.showEnd);
                this.view.getChild("good1").visible = false;
                this.view.getChild("good2").visible = false;
                this.view.getChild("good3").visible = false;
            }
        }, {
            key: "clearData",
            value: function clearData() {
                this.view.endHeartG.visible = false;
            }
        }, {
            key: "showEnd",
            value: function showEnd() {
                this.view.endHeartG.visible = true;
                this.view.addCoin.asTextField.text = GameManager.instance().levelAddGold.toString();
            }
        }, {
            key: "createSliderIcon",
            value: function createSliderIcon(num) {
                console.log("创建icon", num);
                for (var jndex = 0; jndex < this.slidersIcons.length; jndex++) {
                    var element = this.slidersIcons[jndex];
                    element.dispose();
                }
                this.slidersIcons = [];
                var slider = this.view.slider.asSlider;
                var distance = GameManager.instance().maxWallNum * ResLoaderManager.gameBaseCfg.wallDistance;
                var width = slider.width * (distance / (distance + ResLoaderManager.gameBaseCfg.endPointDistance)) / num;
                for (var index = 0; index < num; index++) {
                    var position = fgui.UIPackage.createObject("main", "position");
                    this.view.addChild(position.asCom);
                    position.y = slider.y;
                    position.x = width * (index + 1);
                    this.slidersIcons.push(position);
                }
                this.view.getChild("hand").visible = true;
            }
        }, {
            key: "setSliderIconSwitch",
            value: function setSliderIconSwitch(index) {
                var position = this.slidersIcons[index];
                position.getChild("n8").visible = false;
                position.asCom.getController("c1").setSelectedIndex(1);
            }
        }, {
            key: "setShowTextTip",
            value: function setShowTextTip() {
                this.tipRandom = Tool.GetIntRandom(1, 3);
                this.view.getChild("good" + this.tipRandom.toString()).visible = true;
                this.view.getTransition("ani_" + this.tipRandom.toString()).play();
                Laya.timer.once(1500, this, function () {
                    this.view.getChild("good" + this.tipRandom.toString()).visible = false;
                });
            }
        }, {
            key: "setAddCion",
            value: function setAddCion(v3out) {
                this.view.addCoin.asTextField.text = GameManager.instance().levelAddGold.toString();
                var addheart = this.view.addheart;
                addheart.x = v3out.x / this.view.scaleX;
                addheart.y = v3out.y / this.view.scaleY;
                var baseheart = this.view.heart;
                Laya.Tween.to(addheart, {
                    x: baseheart.x,
                    y: baseheart.y
                }, 500, null, Laya.Handler.create(this, function () {
                    addheart.x = -1e3;
                }));
            }
        }, {
            key: "setSliderVuale",
            value: function setSliderVuale(value) {
                this.view.slider.value = value * 100;
            }
        }, {
            key: "hideHand",
            value: function hideHand() {
                this.view.getChild("hand").visible = false;
            }
        }, {
            key: "setResidueChance",
            value: function setResidueChance() {
                var chance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
                for (var jndex = 0; jndex < 3; jndex++) {
                    this.view.getChild("lief" + (jndex + 1).toString()).asImage.visible = false;
                }
                for (var index = 0; index < chance; index++) {
                    this.view.getChild("lief" + (index + 1).toString()).asImage.visible = true;
                }
            }
        }, {
            key: "dispose",
            value: function dispose() {
                Laya.stage.off(GameManager.GAME_PAGE_UPDATE_SLIDER, this, this.setSliderVuale);
                Laya.stage.off(GameManager.GAME_PAGE_SET_RESIDUCHANCE, this, this.setResidueChance);
                Laya.stage.off(GameManager.GAME_PAGE_SET_SLIDER_ICON, this, this.setSliderIconSwitch);
                Laya.stage.off(GameManager.GAME_PAGE_CREATE_SLIDER_ICON, this, this.createSliderIcon);
                Laya.stage.off(GameManager.GAME_PAGE_SET_TIPTEXT_SHOW, this, this.setShowTextTip);
                Laya.stage.off(GameManager.GAME_PAGE_HIDE_FINGER, this, this.hideHand);
                Laya.stage.off(GameManager.GAME_PAGE_SET_ADDCOIN, this, this.setAddCion);
                (0, _get2.default)((0, _getPrototypeOf2.default)(gamePage.prototype), "dispose", this).call(this);
                this.view.visible = false;
            }
        }], [{
            key: "make",
            value: function make() {
                return fgui_Game.createInstance();
            }
        }, {
            key: "type",
            value: function type() {
                return fgui_Game;
            }
        }]);
        return gamePage;
    }(zs.fgui.base);
    var GameLogic = /* */ function (_Laya$Script4) {
        (0, _inherits2.default)(GameLogic, _Laya$Script4);
        var _super67 = _createSuper(GameLogic);
        function GameLogic() {
            var _this44;
            (0, _classCallCheck2.default)(this, GameLogic);
            _this44 = _super67.call(this);
            _this44.init();
            return _this44;
        }
        (0, _createClass2.default)(GameLogic, [{
            key: "init",
            value: function init() {
                return __awaiter(this, void 0, void 0, /* */ _regenerator.default.mark(function _callee6() {
                    var _this45 = this;
                    return _regenerator.default.wrap(function _callee6$(_context6) {
                        while (1) {
                            switch (_context6.prev = _context6.next) {
                                case 0:
                                    Laya.stage.addComponent(GameManager);
                                    this.workflow = new workflow();
                                    zs.core.workflow = this.workflow;
                                    zs.core.onFGUIBind = Laya.Handler.create(this, function () {
                                        mainBinder.bindAll();
                                    });
                                    zs.core.onPrepare = Laya.Handler.create(this, function () {
                                        return __awaiter(_this45, void 0, void 0, /* */ _regenerator.default.mark(function _callee5() {
                                            return _regenerator.default.wrap(function _callee5$(_context5) {
                                                while (1) {
                                                    switch (_context5.prev = _context5.next) {
                                                        case 0:
                                                            zs.scene.nodesDef = GameNode;
                                                            zs.scene.inst.load("3dres/Conventional/game-ground.ls", true).then(function () {
                                                                zs.core.readyFinish();
                                                                GameManager.instance().init(zs.scene.inst.current);
                                                                GameManager.instance().openMainScene();
                                                                // zs.network.config(false, null, "gameconfig").then(function (e) {
                                                                //     GameLogic.setBaseConfigChanageToConfig(e.gameconfig, ResLoaderManager.gameBaseCfg, "config_enname");
                                                                // });
                                                                // zs.network.config(false, null, "levelData").then(function (e) {
                                                                //     ResLoaderManager.levelCfg = GameLogic.setConfigChanageToConfig(e.levelData);
                                                                // });
                                                                // zs.network.config(false, null, "danceData").then(function (e) {
                                                                //     ResLoaderManager.animCfg = GameLogic.setConfigChanageToConfig(e.danceData);
                                                                // });
                                                            });

                                                        case 2:
                                                        case "end":
                                                            return _context5.stop();
                                                    }
                                                }
                                            }, _callee5);
                                        }));
                                    });
                                    zs.core.onWorkflow(workflow.GAME_START, Laya.Handler.create(this, function () { }));
                                    zs.core.onWorkflow(workflow.GAME_PREPARE, Laya.Handler.create(this, function () {
                                        console.log("1.准备开始游戏");
                                        if (!GameManager.instance().levelReady) {
                                            GameManager.instance().loadLevel(GameManager.instance().myselfLevel() + 1);
                                        }
                                    }));
                                    zs.core.onWorkflow(workflow.GAME_PLAY, Laya.Handler.create(this, function () {
                                        console.log("2.游戏页面");
                                        platform.getInstance().showInterstitial(() => {
                                            GameManager.instance().startLevel();
                                            if (GameLogic.homeWindow) GameLogic.homeWindow.hide();
                                            if (GameLogic.gameWindow) {
                                                GameLogic.gameWindow.show();
                                            } else {
                                                GameLogic.gameWindow = zs.fgui.window.create().attach(gamePage).scaleFit(zs.configs.gameCfg.designWidth, zs.configs.gameCfg.designHeight).fit().update(gamePage, function (unit) { }).show();
                                            }
                                        })
                                    }));
                                    zs.core.onWorkflow(workflow.GAME_END, Laya.Handler.create(this, function () {
                                        zs.core.workflow.next();
                                    }));
                                    zs.core.onWorkflow(workflow.GAME_SETTLE, Laya.Handler.create(this, function () {
                                        console.log("3.结算页面");
                                        if (GameManager.instance().overState == 1) {
                                            if (GameLogic.gameWindow) GameLogic.gameWindow.hide();
                                            if (GameLogic.winWindow) {
                                                GameLogic.winWindow.show();
                                            } else {
                                                GameLogic.winWindow = zs.fgui.window.create().attach(winPage).scaleFit(zs.configs.gameCfg.designWidth, zs.configs.gameCfg.designHeight).fit().update(winPage, function (unit) { }).show();
                                            }
                                            Laya.stage.event("PLAY_WIN_ANIM", GameManager.instance().residueChance);
                                            Laya.stage.event(GameManager.WIN_PAGE_SET_GOLD);
                                        } else {
                                            zs.core.workflow.next();
                                        }
                                    }));
                                    zs.core.workflow.setFSM(workflow.GAME_HOME, new zs.fsm().registe("HOME", "SHOP").registe("SHOP", "HOME").setDefault("HOME"));
                                    zs.core.onWorkflow(workflow.GAME_HOME + ".SHOP", Laya.Handler.create(this, function () {
                                        console.log("打开商店.....");
                                    }));
                                    zs.core.onWorkflow(workflow.GAME_HOME + ".HOME", Laya.Handler.create(this, function () {
                                        console.log("回到主界面.....");
                                    }));
                                    zs.core.onWorkflow(workflow.GAME_HOME, Laya.Handler.create(this, function () {
                                        console.log("1.主页面");
                                        GameManager.instance().clearLevel();
                                        if (!GameManager.instance().levelReady) GameManager.instance().loadLevel(GameManager.instance().myselfLevel() + 1);
                                        if (GameLogic.gameWindow) GameLogic.gameWindow.hide();
                                        if (GameLogic.winWindow) GameLogic.winWindow.hide();
                                        if (GameLogic.homeWindow) {
                                            GameLogic.homeWindow.show();
                                            Laya.stage.event(GameManager.HOME_PAGE_UPDATE);
                                            GameManager.instance().openMainScene();
                                        } else {
                                            GameLogic.homeWindow = zs.fgui.window.create().attach(homePage).scaleFit(zs.configs.gameCfg.designWidth, zs.configs.gameCfg.designHeight).fit().update(homePage, function (unit) { }).show();
                                        }
                                    }));
                                    zs.core.init(ProductKey);

                                case 15:
                                case "end":
                                    return _context6.stop();
                            }
                        }
                    }, _callee6, this);
                }));
            }
        }], [{
            key: "setBaseConfigChanageToConfig",
            value: function setBaseConfigChanageToConfig(fromCfg, getCfg, keyName) {
                for (var key in getCfg) {
                    var iteam = Tool.searchJsonObject(keyName, key, fromCfg);
                    if (iteam) {
                        if (Number(iteam.config_item) + "" !== NaN + "") {
                            getCfg[key] = Number(iteam.config_item);
                        } else {
                            getCfg[key] = iteam.config_item;
                        }
                    }
                }
            }
        }, {
            key: "setConfigChanageToConfig",
            value: function setConfigChanageToConfig(fromCfg) {
                var newCfgG = [];
                for (var index = 0; index < fromCfg.length; index++) {
                    var oldIteam = fromCfg[index];
                    var newIteam = {};
                    for (var key in oldIteam) {
                        var vuale = oldIteam[key];
                        if (Number(vuale) + "" !== NaN + "") {
                            newIteam[key] = Number(vuale);
                        } else {
                            newIteam[key] = vuale;
                        }
                    }
                    newCfgG.push(newIteam);
                }
                return newCfgG;
            }
        }]);
        return GameLogic;
    }(Laya.Script);
    var fgui_loading = /* */ function (_fgui$GComponent32) {
        (0, _inherits2.default)(fgui_loading, _fgui$GComponent32);
        var _super68 = _createSuper(fgui_loading);
        function fgui_loading() {
            (0, _classCallCheck2.default)(this, fgui_loading);
            return _super68.apply(this, arguments);
        }
        (0, _createClass2.default)(fgui_loading, [{
            key: "onConstruct",
            value: function onConstruct() {
                this.loadingbar = this.getChild("loadingbar");
            }
        }], [{
            key: "createInstance",
            value: function createInstance() {
                return fgui.UIPackage.createObject("entry", "loading");
            }
        }]);
        return fgui_loading;
    }(fgui.GComponent);
    fgui_loading.URL = "ui://yea564exyicp0";
    var entryBinder = /* */ function () {
        function entryBinder() {
            (0, _classCallCheck2.default)(this, entryBinder);
        }
        (0, _createClass2.default)(entryBinder, null, [{
            key: "bindAll",
            value: function bindAll() {
                fgui.UIObjectFactory.setExtension(fgui_loading.URL, fgui_loading);
            }
        }]);
        return entryBinder;
    }();
    var Loading = /* */ function (_zs$ui$Loading) {
        (0, _inherits2.default)(Loading, _zs$ui$Loading);
        var _super69 = _createSuper(Loading);
        function Loading() {
            (0, _classCallCheck2.default)(this, Loading);
            return _super69.apply(this, arguments);
        }
        (0, _createClass2.default)(Loading, [{
            key: "updateProgress",
            value: function updateProgress(value) {
                var loadingView = this.view;
                if (loadingView) {
                    loadingView.loadingbar.value = value;
                }
            }
        }], [{
            key: "preload",
            value: function preload() {
                return new Promise(function (resolve, reject) {
                    zs.resource.load("fgui/sub_fgui/entry", zs.ResourceType.FGUIPack).then(function () {
                        entryBinder.bindAll();
                        resolve();
                    });
                });
            }
        }, {
            key: "make",
            value: function make() {
                var vew = fgui_loading.createInstance();
                var scl = Laya.stage.width / 1080;
                vew.setScale(scl, scl);
                return vew;
            }
        }]);
        return Loading;
    }(zs.ui.Loading);
    var ResLoaderManager = /* */ function (_Laya$Script5) {
        (0, _inherits2.default)(ResLoaderManager, _Laya$Script5);
        var _super70 = _createSuper(ResLoaderManager);
        function ResLoaderManager() {
            (0, _classCallCheck2.default)(this, ResLoaderManager);
            return _super70.apply(this, arguments);
        }
        (0, _createClass2.default)(ResLoaderManager, [{
            key: "onEnable",
            value: function onEnable() {
                var mustLoadRes = ["config/animCfg.json", "config/levelCfg.json", "config/gameBaseCfg.json", "config/soundCfg.json", "config/shopCfg.json"];
                Laya.loader.load(mustLoadRes, Laya.Handler.create(this, ResLoaderManager.init), Laya.Handler.create(this, function (vuale) { }));
            }
        }], [{
            key: "init",
            value: function init() {
                ResLoaderManager.animCfg = Laya.loader.getRes("config/animCfg.json");
                ResLoaderManager.levelCfg = Laya.loader.getRes("config/levelCfg.json");
                ResLoaderManager.gameBaseCfg = Laya.loader.getRes("config/gameBaseCfg.json");
                ResLoaderManager.soundCfg = Laya.loader.getRes("config/soundCfg.json");
                ResLoaderManager.shopCfg = Laya.loader.getRes("config/shopCfg.json");
                zs.core.loadingPage = Loading;
                Laya.stage.addComponent(GameLogic);
            }
        }]);
        return ResLoaderManager;
    }(Laya.Script);
    var Shader3D$2 = Laya.Shader3D;
    var BlinnPhongFogBlendMaterial = /* */ function (_Laya$Material3) {
        (0, _inherits2.default)(BlinnPhongFogBlendMaterial, _Laya$Material3);
        var _super71 = _createSuper(BlinnPhongFogBlendMaterial);
        function BlinnPhongFogBlendMaterial() {
            var _this46;
            (0, _classCallCheck2.default)(this, BlinnPhongFogBlendMaterial);
            _this46 = _super71.call(this);
            _this46.setShaderName("BlinnPhongFogBlend");
            console.log("BlinnPhongFogBlend");
            _this46.alphaTest = false;
            _this46._depthWrite = true;
            _this46._blend = Laya.RenderState.BLEND_ENABLE_ALL;
            _this46._blendSrc = Laya.RenderState.BLENDPARAM_SRC_ALPHA;
            _this46._blendDst = Laya.RenderState.BLENDPARAM_ONE_MINUS_SRC_ALPHA;
            _this46._depthTest = Laya.RenderState.DEPTHTEST_LESS;
            return _this46;
        }
        (0, _createClass2.default)(BlinnPhongFogBlendMaterial, [{
            key: "clone",
            value: function clone() {
                var copyMat = new BlinnPhongFogBlendMaterial();
                copyMat._Color = this._Color;
                copyMat._Cull = this._Cull;
                copyMat._SpecularColor = this._SpecularColor;
                copyMat._RimColor = this._RimColor;
                copyMat._MainTex = this._MainTex;
                copyMat._NormalTex = this._NormalTex;
                copyMat._MaskTex = this._MaskTex;
                copyMat._TillingX = this._TillingX;
                copyMat._TillingY = this._TillingY;
                copyMat._OffsetX = this._OffsetX;
                copyMat._OffsetY = this._OffsetY;
                copyMat._EmissionTex = this._EmissionTex;
                copyMat._EmissionDirX = this._EmissionDirX;
                copyMat._EmissionDirY = this._EmissionDirY;
                copyMat._EmissionPower = this._EmissionPower;
                copyMat._EmissionColor = this._EmissionColor;
                copyMat._AlphaStart = this._AlphaStart;
                copyMat._AlphaRange = this._AlphaRange;
                copyMat._FogTex = this._FogTex;
                copyMat._FogDirX = this._FogDirX;
                copyMat._FogDirY = this._FogDirY;
                copyMat._FogMapScale = this._FogMapScale;
                copyMat._FogPower = this._FogPower;
                copyMat._FadeFogColor = this._FadeFogColor;
                copyMat._FadeHeightFogColor = this._FadeHeightFogColor;
                copyMat._FadeFogNear = this._FadeFogNear;
                copyMat._FadeFogFar = this._FadeFogFar;
                copyMat._HeightFogPower = this._HeightFogPower;
                copyMat._HeightFogStart = this._HeightFogStart;
                copyMat._HeightFogRange = this._HeightFogRange;
                copyMat._Contrast = this._Contrast;
                copyMat._Specular = this._Specular;
                copyMat._SpecSmooth = this._SpecSmooth;
                copyMat._RimPower = this._RimPower;
                return copyMat;
            }
        }, {
            key: "_depthWrite",
            get: function get() {
                return this._shaderValues.getBool(BlinnPhongFogBlendMaterial.DEPTH_WRITE);
            },
            set: function set(value) {
                this._shaderValues.setBool(BlinnPhongFogBlendMaterial.DEPTH_WRITE, value);
            }
        }, {
            key: "_blend",
            get: function get() {
                return this._shaderValues.getInt(BlinnPhongFogBlendMaterial.BLEND);
            },
            set: function set(value) {
                this._shaderValues.setInt(BlinnPhongFogBlendMaterial.BLEND, value);
            }
        }, {
            key: "_blendSrc",
            get: function get() {
                return this._shaderValues.getInt(BlinnPhongFogBlendMaterial.BLEND_SRC);
            },
            set: function set(value) {
                this._shaderValues.setInt(BlinnPhongFogBlendMaterial.BLEND_SRC, value);
            }
        }, {
            key: "_blendDst",
            get: function get() {
                return this._shaderValues.getInt(BlinnPhongFogBlendMaterial.BLEND_DST);
            },
            set: function set(value) {
                this._shaderValues.setInt(BlinnPhongFogBlendMaterial.BLEND_DST, value);
            }
        }, {
            key: "_depthTest",
            get: function get() {
                return this._shaderValues.getInt(BlinnPhongFogBlendMaterial.DEPTH_TEST);
            },
            set: function set(value) {
                this._shaderValues.setInt(BlinnPhongFogBlendMaterial.DEPTH_TEST, value);
            }
        }, {
            key: "_Cull",
            get: function get() {
                return this._shaderValues.getInt(BlinnPhongFogBlendMaterial.CULL);
            },
            set: function set(value) {
                var mode = 0;
                if (value < 1) {
                    mode = 0;
                } else if (value < 2) {
                    mode = 1;
                } else {
                    mode = 2;
                }
                this._shaderValues.setInt(BlinnPhongFogBlendMaterial.CULL, mode);
            }
        }, {
            key: "_TillingX",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogBlendMaterial.TILLINGX);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogBlendMaterial.TILLINGX, value);
            }
        }, {
            key: "_TillingY",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogBlendMaterial.TILLINGY);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogBlendMaterial.TILLINGY, value);
            }
        }, {
            key: "_OffsetX",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogBlendMaterial.OFFSETX);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogBlendMaterial.OFFSETX, value);
            }
        }, {
            key: "_OffsetY",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogBlendMaterial.OFFSETY);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogBlendMaterial.OFFSETY, value);
            }
        }, {
            key: "_Color",
            get: function get() {
                return this._shaderValues.getVector(BlinnPhongFogBlendMaterial.DIFFUSECOLOR);
            },
            set: function set(value) {
                this._shaderValues.setVector(BlinnPhongFogBlendMaterial.DIFFUSECOLOR, value);
            }
        }, {
            key: "_SpecularColor",
            get: function get() {
                return this._shaderValues.getVector(BlinnPhongFogBlendMaterial.SPECULARCOLOR);
            },
            set: function set(value) {
                this._shaderValues.setVector(BlinnPhongFogBlendMaterial.SPECULARCOLOR, value);
            }
        }, {
            key: "_RimColor",
            get: function get() {
                return this._shaderValues.getVector(BlinnPhongFogBlendMaterial.RIMCOLOR);
            },
            set: function set(value) {
                this._shaderValues.setVector(BlinnPhongFogBlendMaterial.RIMCOLOR, value);
            }
        }, {
            key: "_MainTex",
            get: function get() {
                return this._shaderValues.getTexture(BlinnPhongFogBlendMaterial.DIFFUSETEXTURE);
            },
            set: function set(value) {
                if (value) this._shaderValues.addDefine(BlinnPhongFogBlendMaterial.SHADERDEFINE_DIFFUSEMAP); else this._shaderValues.removeDefine(BlinnPhongFogBlendMaterial.SHADERDEFINE_DIFFUSEMAP);
                this._shaderValues.setTexture(BlinnPhongFogBlendMaterial.DIFFUSETEXTURE, value);
            }
        }, {
            key: "_NormalTex",
            get: function get() {
                return this._shaderValues.getTexture(BlinnPhongFogBlendMaterial.NORMALTEXTURE);
            },
            set: function set(value) {
                if (value) this._shaderValues.addDefine(BlinnPhongFogBlendMaterial.SHADERDEFINE_NORMALMAP); else this._shaderValues.removeDefine(BlinnPhongFogBlendMaterial.SHADERDEFINE_NORMALMAP);
                this._shaderValues.setTexture(BlinnPhongFogBlendMaterial.NORMALTEXTURE, value);
            }
        }, {
            key: "_MaskTex",
            get: function get() {
                return this._shaderValues.getTexture(BlinnPhongFogBlendMaterial.MASKTEXTURE);
            },
            set: function set(value) {
                if (value) this._shaderValues.addDefine(BlinnPhongFogBlendMaterial.SHADERDEFINE_MASKMAP); else this._shaderValues.removeDefine(BlinnPhongFogBlendMaterial.SHADERDEFINE_MASKMAP);
                this._shaderValues.setTexture(BlinnPhongFogBlendMaterial.MASKTEXTURE, value);
            }
        }, {
            key: "_EmissionTex",
            get: function get() {
                return this._shaderValues.getTexture(BlinnPhongFogBlendMaterial.EMISSIONTEXTURE);
            },
            set: function set(value) {
                if (value) this._shaderValues.addDefine(BlinnPhongFogBlendMaterial.SHADERDEFINE_EMISSIONMAP); else this._shaderValues.removeDefine(BlinnPhongFogBlendMaterial.SHADERDEFINE_EMISSIONMAP);
                this._shaderValues.setTexture(BlinnPhongFogBlendMaterial.EMISSIONTEXTURE, value);
            }
        }, {
            key: "_EmissionDirX",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogBlendMaterial.EMISSIONDIRECTIONX);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogBlendMaterial.EMISSIONDIRECTIONX, value);
            }
        }, {
            key: "_EmissionDirY",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogBlendMaterial.EMISSIONDIRECTIONY);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogBlendMaterial.EMISSIONDIRECTIONY, value);
            }
        }, {
            key: "_EmissionPower",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogBlendMaterial.EMISSIONPOWER);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogBlendMaterial.EMISSIONPOWER, value);
            }
        }, {
            key: "_EmissionColor",
            get: function get() {
                return this._shaderValues.getVector(BlinnPhongFogBlendMaterial.EMISSIONCOLOR);
            },
            set: function set(value) {
                this._shaderValues.setVector(BlinnPhongFogBlendMaterial.EMISSIONCOLOR, value);
            }
        }, {
            key: "_AlphaStart",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogBlendMaterial.ALPHASTART);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogBlendMaterial.ALPHASTART, value);
            }
        }, {
            key: "_AlphaRange",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogBlendMaterial.ALPHARANGE);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogBlendMaterial.ALPHARANGE, value);
            }
        }, {
            key: "_FogTex",
            get: function get() {
                return this._shaderValues.getTexture(BlinnPhongFogBlendMaterial.FOGTEXURE);
            },
            set: function set(value) {
                if (value) this._shaderValues.addDefine(BlinnPhongFogBlendMaterial.SHADERDEFINE_FOGMAP); else this._shaderValues.removeDefine(BlinnPhongFogBlendMaterial.SHADERDEFINE_FOGMAP);
                this._shaderValues.setTexture(BlinnPhongFogBlendMaterial.FOGTEXURE, value);
            }
        }, {
            key: "_FogDirX",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogBlendMaterial.FOGDIRECTIONX);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogBlendMaterial.FOGDIRECTIONX, value);
            }
        }, {
            key: "_FogDirY",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogBlendMaterial.FOGDIRECTIONY);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogBlendMaterial.FOGDIRECTIONY, value);
            }
        }, {
            key: "_FogMapScale",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogBlendMaterial.FOGMAPSCALE);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogBlendMaterial.FOGMAPSCALE, value);
            }
        }, {
            key: "_FadeFogColor",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogBlendMaterial.FADEFOGCOLOR);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogBlendMaterial.FADEFOGCOLOR, value);
            }
        }, {
            key: "_FadeHeightFogColor",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogBlendMaterial.FADEHEIGHTFOGCOLOR);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogBlendMaterial.FADEHEIGHTFOGCOLOR, value);
            }
        }, {
            key: "_FadeFogNear",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogBlendMaterial.FADEFOGNEAR);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogBlendMaterial.FADEFOGNEAR, value);
            }
        }, {
            key: "_FadeFogFar",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogBlendMaterial.FADEFOGFAR);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogBlendMaterial.FADEFOGFAR, value);
            }
        }, {
            key: "_FogPower",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogBlendMaterial.FOGPOWER);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogBlendMaterial.FOGPOWER, value);
            }
        }, {
            key: "_HeightFogPower",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogBlendMaterial.HEIGHTFOGPOWER);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogBlendMaterial.HEIGHTFOGPOWER, value);
            }
        }, {
            key: "_HeightFogStart",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogBlendMaterial.HEIGHTFOGSTART);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogBlendMaterial.HEIGHTFOGSTART, value);
            }
        }, {
            key: "_HeightFogRange",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogBlendMaterial.HEIGHTFOGRANGE);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogBlendMaterial.HEIGHTFOGRANGE, value);
            }
        }, {
            key: "_Contrast",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogBlendMaterial.CONTRAST);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogBlendMaterial.CONTRAST, value);
            }
        }, {
            key: "_Specular",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogBlendMaterial.SPECULAR);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogBlendMaterial.SPECULAR, value);
            }
        }, {
            key: "_SpecSmooth",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogBlendMaterial.SPECUALRSMOOTH);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogBlendMaterial.SPECUALRSMOOTH, value);
            }
        }, {
            key: "_RimPower",
            get: function get() {
                return this._shaderValues.getNumber(BlinnPhongFogBlendMaterial.RIMPOWER);
            },
            set: function set(value) {
                this._shaderValues.setNumber(BlinnPhongFogBlendMaterial.RIMPOWER, value);
            }
        }], [{
            key: "init",
            value: function init() {
                Laya.ClassUtils.regClass("Laya.BlinnPhongFogBlend", BlinnPhongFogBlendMaterial);
            }
        }]);
        return BlinnPhongFogBlendMaterial;
    }(Laya.Material);
    BlinnPhongFogBlendMaterial.DIFFUSETEXTURE = Laya.Shader3D.propertyNameToID("u_DiffuseTexture");
    BlinnPhongFogBlendMaterial.DIFFUSECOLOR = Laya.Shader3D.propertyNameToID("u_DiffuseColor");
    BlinnPhongFogBlendMaterial.TILLINGX = Laya.Shader3D.propertyNameToID("u_TillingX");
    BlinnPhongFogBlendMaterial.TILLINGY = Laya.Shader3D.propertyNameToID("u_TillingY");
    BlinnPhongFogBlendMaterial.OFFSETX = Laya.Shader3D.propertyNameToID("u_OffsetX");
    BlinnPhongFogBlendMaterial.OFFSETY = Laya.Shader3D.propertyNameToID("u_OffsetY");
    BlinnPhongFogBlendMaterial.NORMALTEXTURE = Laya.Shader3D.propertyNameToID("u_NormalTexture");
    BlinnPhongFogBlendMaterial.SPECULARCOLOR = Laya.Shader3D.propertyNameToID("u_SpecularColor");
    BlinnPhongFogBlendMaterial.RIMCOLOR = Laya.Shader3D.propertyNameToID("u_RimColor");
    BlinnPhongFogBlendMaterial.CONTRAST = Laya.Shader3D.propertyNameToID("u_Contrast");
    BlinnPhongFogBlendMaterial.SPECULAR = Laya.Shader3D.propertyNameToID("u_Specular");
    BlinnPhongFogBlendMaterial.SPECUALRSMOOTH = Laya.Shader3D.propertyNameToID("u_SpecularSmooth");
    BlinnPhongFogBlendMaterial.RIMPOWER = Laya.Shader3D.propertyNameToID("u_RimPower");
    BlinnPhongFogBlendMaterial.MASKTEXTURE = Laya.Shader3D.propertyNameToID("u_MaskTexture");
    BlinnPhongFogBlendMaterial.EMISSIONTEXTURE = Laya.Shader3D.propertyNameToID("u_EmissionTexture");
    BlinnPhongFogBlendMaterial.EMISSIONDIRECTIONX = Laya.Shader3D.propertyNameToID("u_EmissionDirectionX");
    BlinnPhongFogBlendMaterial.EMISSIONDIRECTIONY = Laya.Shader3D.propertyNameToID("u_EmissionDirectionY");
    BlinnPhongFogBlendMaterial.EMISSIONPOWER = Laya.Shader3D.propertyNameToID("u_EmissionPower");
    BlinnPhongFogBlendMaterial.EMISSIONCOLOR = Laya.Shader3D.propertyNameToID("u_EmissionColor");
    BlinnPhongFogBlendMaterial.ALPHASTART = Laya.Shader3D.propertyNameToID("u_AlphaStart");
    BlinnPhongFogBlendMaterial.ALPHARANGE = Laya.Shader3D.propertyNameToID("u_AlphaRange");
    BlinnPhongFogBlendMaterial.FOGTEXURE = Laya.Shader3D.propertyNameToID("u_FogTexture");
    BlinnPhongFogBlendMaterial.FOGDIRECTIONX = Laya.Shader3D.propertyNameToID("u_FogDirectionX");
    BlinnPhongFogBlendMaterial.FOGDIRECTIONY = Laya.Shader3D.propertyNameToID("u_FogDirectionY");
    BlinnPhongFogBlendMaterial.FOGMAPSCALE = Laya.Shader3D.propertyNameToID("u_FogMapScale");
    BlinnPhongFogBlendMaterial.FOGPOWER = Laya.Shader3D.propertyNameToID("u_FogPower");
    BlinnPhongFogBlendMaterial.FADEFOGCOLOR = Laya.Shader3D.propertyNameToID("u_FadeFogColor");
    BlinnPhongFogBlendMaterial.FADEHEIGHTFOGCOLOR = Laya.Shader3D.propertyNameToID("u_FadeHeightFogColor");
    BlinnPhongFogBlendMaterial.FADEFOGNEAR = Laya.Shader3D.propertyNameToID("u_FadeFogNear");
    BlinnPhongFogBlendMaterial.FADEFOGFAR = Laya.Shader3D.propertyNameToID("u_FadeFogFar");
    BlinnPhongFogBlendMaterial.HEIGHTFOGPOWER = Laya.Shader3D.propertyNameToID("u_HeightFogPower");
    BlinnPhongFogBlendMaterial.HEIGHTFOGSTART = Laya.Shader3D.propertyNameToID("u_HeightFogStart");
    BlinnPhongFogBlendMaterial.HEIGHTFOGRANGE = Laya.Shader3D.propertyNameToID("u_HeightFogRange");
    BlinnPhongFogBlendMaterial.CULL = Shader3D$2.propertyNameToID("s_Cull");
    BlinnPhongFogBlendMaterial.BLEND = Shader3D$2.propertyNameToID("s_Blend");
    BlinnPhongFogBlendMaterial.BLEND_SRC = Shader3D$2.propertyNameToID("s_BlendSrc");
    BlinnPhongFogBlendMaterial.BLEND_DST = Shader3D$2.propertyNameToID("s_BlendDst");
    BlinnPhongFogBlendMaterial.DEPTH_TEST = Shader3D$2.propertyNameToID("s_DepthTest");
    BlinnPhongFogBlendMaterial.DEPTH_WRITE = Shader3D$2.propertyNameToID("s_DepthWrite");
    BlinnPhongFogBlendMaterial.SHADERDEFINE_DIFFUSEMAP = Laya.Shader3D.getDefineByName("DIFFUSEMAP");
    BlinnPhongFogBlendMaterial.SHADERDEFINE_NORMALMAP = Laya.Shader3D.getDefineByName("NORMALMAP");
    BlinnPhongFogBlendMaterial.SHADERDEFINE_MASKMAP = Laya.Shader3D.getDefineByName("MASKMAP");
    BlinnPhongFogBlendMaterial.SHADERDEFINE_EMISSIONMAP = Laya.Shader3D.getDefineByName("EMISSIONMAP");
    BlinnPhongFogBlendMaterial.SHADERDEFINE_FOGMAP = Laya.Shader3D.getDefineByName("FOGMAP");
    var ps$2 = '#ifdef GL_FRAGMENT_PRECISION_HIGH\r\n\tprecision highp float;\r\n\tprecision highp int;\r\n#else\r\n\tprecision mediump float;\r\n\tprecision mediump int;\r\n#endif\r\n\r\n#include "Lighting.glsl";\r\n#include "Shadow.glsl"\r\n\r\nuniform vec4 u_DiffuseColor;\r\nuniform vec4 u_SpecularColor;\r\nuniform vec4 u_RimColor;\r\nuniform float u_Contrast;\r\nuniform float u_Specular;\r\nuniform float u_SpecularSmooth;\r\nuniform float u_RimPower;\r\n\r\n#if defined(EMISSIONMAP) || defined(FOGMAP)\r\n\tuniform float u_Time;\r\n#endif\r\n\r\n#if defined(COLOR)\r\n\tvarying vec4 v_Color;\r\n#endif\r\n\r\n#ifdef DIFFUSEMAP\r\n    uniform sampler2D u_DiffuseTexture;\r\n#endif\r\n\r\n#ifdef MASKMAP\r\n\tuniform sampler2D u_MaskTexture;\r\n#endif\r\n\r\n#ifdef EMISSIONMAP\r\n    uniform sampler2D u_EmissionTexture;\r\n    uniform float u_EmissionDirectionX;\r\n\tuniform float u_EmissionDirectionY;\r\n    uniform float u_EmissionPower;\r\n    uniform vec4 u_EmissionColor;\r\n#endif\r\n\r\n#if defined(DIFFUSEMAP) || defined(EMISSIONMAP) || defined(FOGMAP) ||((defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT))&&(defined(NORMALMAP)))\r\n\tvarying vec2 v_Texcoord0;\r\n#endif\r\n\r\nvarying vec3 v_Normal;\r\nvarying vec3 v_ViewDir; \r\n#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\r\n\r\n\tuniform vec3 u_MaterialSpecular;\r\n\tuniform float u_Shininess;\r\n\r\n\t#ifdef LEGACYSINGLELIGHTING\r\n\t\t#ifdef DIRECTIONLIGHT\r\n\t\t\tuniform DirectionLight u_DirectionLight;\r\n\t\t#endif\r\n\t\t#ifdef POINTLIGHT\r\n\t\t\tuniform PointLight u_PointLight;\r\n\t\t#endif\r\n\t\t#ifdef SPOTLIGHT\r\n\t\t\tuniform SpotLight u_SpotLight;\r\n\t\t#endif\r\n\t#else\r\n\t\tuniform mat4 u_View;\r\n\t\tuniform vec4 u_ProjectionParams;\r\n\t\tuniform vec4 u_Viewport;\r\n\t\tuniform int u_DirationLightCount;\r\n\t\tuniform DirectionLight u_SunLight;\r\n\t\tuniform sampler2D u_LightBuffer;\r\n\t\tuniform sampler2D u_LightClusterBuffer;\r\n\t#endif\r\n#endif\r\n\r\n#ifdef NORMALMAP \r\n\tuniform sampler2D u_NormalTexture;\r\n\tvarying vec3 v_Tangent;\r\n\tvarying vec3 v_Binormal;\r\n#endif\r\n\r\nuniform float u_Cutoff;\r\nuniform float u_TillingX;\r\nuniform float u_TillingY;\r\nuniform float u_OffsetX;\r\nuniform float u_OffsetY;\r\nuniform float u_AlphaStart;\r\nuniform float u_AlphaRange;\r\n\r\n#ifdef FOGMAP\r\n    uniform sampler2D u_FogTexture;\r\n    uniform float u_FogDirectionX;\r\n    uniform float u_FogDirectionY;\r\n    uniform float u_FogMapScale;\r\n    uniform float u_FogPower;\r\n    uniform vec4 u_FogColor;\r\n    uniform float u_FogStart;\r\n    uniform float u_FogRange;\r\n\tuniform vec4 u_FadeFogColor;\r\n\tuniform vec4 u_FadeHeightFogColor;\r\n\tuniform float u_FadeFogNear;\r\n\tuniform float u_FadeFogFar;\r\n\tuniform float u_HeightFogPower;\r\n\tuniform float u_HeightFogStart;\r\n\tuniform float u_HeightFogRange;\r\n#endif\r\n\r\n\r\nvarying vec3 v_PositionWorld;\r\n#include "GlobalIllumination.glsl";//"GlobalIllumination.glsl use uniform should at front of this\r\n\r\nvoid main() {\r\n    vec4 baseColor = u_DiffuseColor;\r\n\tvec2 uv = TransformUV(v_Texcoord0, vec4(u_TillingX, u_TillingY, u_OffsetX, u_OffsetY));\r\n    #ifdef DIFFUSEMAP\r\n\t\tvec4 difTexColor=texture2D(u_DiffuseTexture, uv);\r\n\t\tbaseColor=baseColor*difTexColor;\r\n\t#endif\r\n\r\n    vec3 normal;//light and SH maybe use normal\r\n\t#if defined(NORMALMAP)\r\n\t\tvec3 normalMapSample = texture2D(u_NormalTexture, uv).rgb;\r\n\t\tnormal = normalize(NormalSampleToWorldSpace(normalMapSample, v_Normal, v_Tangent,v_Binormal));\r\n\t#else\r\n\t\tnormal = normalize(v_Normal);\r\n\t#endif\r\n\r\n    LayaGIInput giInput;\r\n\tvec3 globalDiffuse=layaGIBase(giInput,1.0,normal);\r\n\r\n    vec3 lightDir;\r\n\tvec3 lightColor;\r\n\t#if defined(DIRECTIONLIGHT)\r\n\t\tlightDir = u_SunLight.direction;\r\n\t\tlightColor = u_SunLight.color;\r\n\t#else\r\n\t\tlightDir = normalize(vec3(1.0, 1.0, 1.0));\r\n\t\tlightColor = vec3(1.0, 1.0, 1.0);\r\n\t#endif\r\n\tlightDir = -lightDir;\r\n\r\n    vec3 viewDir;\r\n\t#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\r\n\t\tviewDir = normalize(v_ViewDir);\r\n\t#else\r\n\t\tviewDir = normalize(vec3(1.0, 1.0, 1.0));\r\n\t#endif\r\n\tfloat viewDistance = length(v_ViewDir);\r\n\tfloat alphaLerp = 1.0 - clamp((viewDistance - u_AlphaStart) / u_AlphaRange, 0.0, 1.0);\r\n\r\n\tvec3 halfDir = normalize(lightDir + viewDir);\r\n\r\n    float ndl = max(0.001, dot(normal, lightDir));\r\n\tfloat ndh = max(0.001, dot(normal, halfDir));\r\n\tfloat ndv = max(0.001, dot(normal, viewDir));\r\n\r\n    float diff = ndl * u_Contrast + (1.0 - u_Contrast);\r\n    float spec = pow(ndh, u_Specular * 128.0);\r\n\tspec = smoothstep(0.5 - u_SpecularSmooth * 0.5, 0.5 + u_SpecularSmooth * 0.5, spec);\r\n\r\n\tvec4 maskCol = vec4(1.0, 1.0, 1.0, 1.0);\r\n\t#ifdef MASKMAP\r\n\t\tmaskCol = texture2D(u_MaskTexture, v_Texcoord0);\r\n\t#endif\r\n\r\n    vec3 specular =  u_SpecularColor.rgb * spec * maskCol.r;\r\n\r\n    float rim = (1.0 - ndv) * ndl;\r\n    vec3 rimColor = u_RimColor.rgb * u_RimPower * rim;\r\n\r\n\tvec3 emission = vec3(0.0, 0.0, 0.0);\r\n\t#ifdef EMISSIONMAP\r\n\t\tvec4 emissionCol = texture2D(u_EmissionTexture, v_Texcoord0);\r\n\t\t#ifdef MASKMAP\r\n\t\t\tvec4 emissionOffsetCol = texture2D(u_MaskTexture, v_Texcoord0 + vec2(u_EmissionDirectionX, u_EmissionDirectionY) * u_Time * 0.05);\r\n\t\t\temission = emissionCol.rgb * u_EmissionPower * emissionOffsetCol.g;\r\n\t\t\temission = mix(emission, emission * u_EmissionColor.rgb,  maskCol.b);\r\n\t\t#else\r\n\t\t\temission = emissionCol.rgb * u_EmissionColor.rgb * u_EmissionPower;\r\n\t\t#endif\r\n\t#endif\r\n\r\n    vec3 finalCol = (baseColor.rgb * lightColor + rimColor) * diff + specular + emission;\r\n\tfinalCol = finalCol + globalDiffuse * baseColor.rgb * lightColor;\r\n\t#if defined(COLOR)\r\n\t\tfinalCol = finalCol * v_Color.rgb;\r\n\t#endif\r\n\r\n\t#ifdef FOGMAP\r\n\t\tfloat fogCoord = 1.0 - (1.0/gl_FragCoord.w-u_FogStart)/u_FogRange;\r\n\r\n\t\tvec2 worldUV = v_PositionWorld.xz / u_FogMapScale;\r\n\t\tvec4 fogHeightColor = texture2D(u_FogTexture, worldUV + vec2(-u_FogDirectionX, u_FogDirectionY) * u_Time * 0.05);\r\n\r\n\t\tfloat fogDis = max(u_HeightFogRange, 0.01) * fogHeightColor.r;\r\n\t\tfloat hFogLerp = (v_PositionWorld.y - u_HeightFogStart) / fogDis;\r\n\t\thFogLerp = mix(fogHeightColor.g * (1.0 - u_HeightFogPower), 1.0, clamp(hFogLerp, 0.0, 1.0));\r\n\r\n\t\tfloat fadeFogDis = max(u_FadeFogFar - u_FadeFogNear, 0.01);\r\n\t\tfloat fadeFogLerp = clamp((1.0/gl_FragCoord.w - u_FadeFogNear) / fadeFogDis, 0.0, 1.0);\r\n\r\n\t\tvec4 fogColor = mix(u_FogColor, u_FadeHeightFogColor, clamp(fogCoord, 0.0, 1.0));\r\n\t\tfogCoord = hFogLerp * (1.0 - fadeFogLerp) + fogCoord * fadeFogLerp;\r\n\t\tfogColor = mix(fogColor, u_FadeFogColor, clamp(fogCoord, 0.0, 1.0));\r\n\r\n\t\tfinalCol = mix(mix(finalCol,  fogColor.rgb, u_FogPower), finalCol, clamp(fogCoord, 0.0, 1.0));\r\n\t#endif\r\n\r\n\tgl_FragColor = vec4(finalCol, baseColor.a * alphaLerp);\r\n}';
    var vs$2 = '#include "Lighting.glsl";\r\n#include "Shadow.glsl";\r\n\r\nattribute vec4 a_Position;\r\n\r\n#ifdef GPU_INSTANCE\r\n\tattribute mat4 a_MvpMatrix;\r\n#else\r\n\tuniform mat4 u_MvpMatrix;\r\n#endif\r\n\r\n#if defined(DIFFUSEMAP) || defined(MASKMAP) || defined(EMISSIONMAP) || defined(FOGMAP) ||((defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT))&&(defined(SPECULARMAP)||defined(NORMALMAP)))||(defined(LIGHTMAP)&&defined(UV))\r\n\tattribute vec2 a_Texcoord0;\r\n\tvarying vec2 v_Texcoord0;\r\n#endif\r\n\r\n#ifdef COLOR\r\n\tattribute vec4 a_Color;\r\n\tvarying vec4 v_Color;\r\n#endif\r\n\r\n#ifdef BONE\r\n\tconst int c_MaxBoneCount = 24;\r\n\tattribute vec4 a_BoneIndices;\r\n\tattribute vec4 a_BoneWeights;\r\n\tuniform mat4 u_Bones[c_MaxBoneCount];\r\n#endif\r\n\r\nattribute vec3 a_Normal;\r\nvarying vec3 v_Normal; \r\n\r\nuniform vec3 u_CameraPos;\r\nvarying vec3 v_ViewDir; \r\n\r\n#if defined(NORMALMAP)\r\n\tattribute vec4 a_Tangent0;\r\n\tvarying vec3 v_Tangent;\r\n\tvarying vec3 v_Binormal;\r\n#endif\r\n\r\n#ifdef GPU_INSTANCE\r\n\tattribute mat4 a_WorldMat;\r\n#else\r\n\tuniform mat4 u_WorldMat;\r\n#endif\r\n\r\nvarying vec3 v_PositionWorld;\r\n\r\n#ifdef TILINGOFFSET\r\n\tuniform vec4 u_TilingOffset;\r\n#endif\r\n\r\n#ifdef SIMPLEBONE\r\n\t#ifdef GPU_INSTANCE\r\n\t\tattribute vec4 a_SimpleTextureParams;\r\n\t#else\r\n\t\tuniform vec4 u_SimpleAnimatorParams;\r\n\t#endif\r\n\tuniform sampler2D u_SimpleAnimatorTexture;\r\n\r\n\tuniform float u_SimpleAnimatorTextureSize; \r\n#endif\r\n\r\n\r\n#ifdef SIMPLEBONE\r\nmat4 loadMatFromTexture(float FramePos,int boneIndices,float offset)\r\n{\r\n\tvec2 uv;\r\n\tfloat PixelPos = FramePos+float(boneIndices)*4.0;\r\n\tfloat halfOffset = offset * 0.5;\r\n\tfloat uvoffset = PixelPos/u_SimpleAnimatorTextureSize;\r\n\tuv.y = floor(uvoffset)*offset+halfOffset;\r\n\tuv.x = mod(float(PixelPos),u_SimpleAnimatorTextureSize)*offset+halfOffset;\r\n\tvec4 mat0row = texture2D(u_SimpleAnimatorTexture,uv);\r\n\tuv.x+=offset;\r\n\tvec4 mat1row = texture2D(u_SimpleAnimatorTexture,uv);\r\n\tuv.x+=offset;\r\n\tvec4 mat2row = texture2D(u_SimpleAnimatorTexture,uv);\r\n\tuv.x+=offset;\r\n\tvec4 mat3row = texture2D(u_SimpleAnimatorTexture,uv);\r\n\tmat4 m =mat4(mat0row.x,mat0row.y,mat0row.z,mat0row.w,\r\n\t\t\t  mat1row.x,mat1row.y,mat1row.z,mat1row.w,\r\n\t\t\t  mat2row.x,mat2row.y,mat2row.z,mat2row.w,\r\n\t\t\t  mat3row.x,mat3row.y,mat3row.z,mat3row.w);\r\n\treturn m;\r\n}\r\n#endif\r\n\r\nvoid main()\r\n{\r\n\tvec4 position;\r\n\t#ifdef BONE\r\n\t\tmat4 skinTransform;\r\n\t \t#ifdef SIMPLEBONE\r\n\t\t\tfloat currentPixelPos;\r\n\t\t\t#ifdef GPU_INSTANCE\r\n\t\t\t\tcurrentPixelPos = a_SimpleTextureParams.x+a_SimpleTextureParams.y;\r\n\t\t\t#else\r\n\t\t\t\tcurrentPixelPos = u_SimpleAnimatorParams.x+u_SimpleAnimatorParams.y;\r\n\t\t\t#endif\r\n\t\t\tfloat offset = 1.0/u_SimpleAnimatorTextureSize;\r\n\t\t\tskinTransform =  loadMatFromTexture(currentPixelPos,int(a_BoneIndices.x),offset) * a_BoneWeights.x;\r\n\t\t\tskinTransform += loadMatFromTexture(currentPixelPos,int(a_BoneIndices.y),offset) * a_BoneWeights.y;\r\n\t\t\tskinTransform += loadMatFromTexture(currentPixelPos,int(a_BoneIndices.z),offset) * a_BoneWeights.z;\r\n\t\t\tskinTransform += loadMatFromTexture(currentPixelPos,int(a_BoneIndices.w),offset) * a_BoneWeights.w;\r\n\t\t#else\r\n\t\t\tskinTransform =  u_Bones[int(a_BoneIndices.x)] * a_BoneWeights.x;\r\n\t\t\tskinTransform += u_Bones[int(a_BoneIndices.y)] * a_BoneWeights.y;\r\n\t\t\tskinTransform += u_Bones[int(a_BoneIndices.z)] * a_BoneWeights.z;\r\n\t\t\tskinTransform += u_Bones[int(a_BoneIndices.w)] * a_BoneWeights.w;\r\n\t\t#endif\r\n\t\tposition=skinTransform*a_Position;\r\n\t #else\r\n\t\tposition=a_Position;\r\n\t#endif\r\n\r\n\t#ifdef GPU_INSTANCE\r\n\t\tgl_Position = a_MvpMatrix * position;\r\n\t#else\r\n\t\tgl_Position = u_MvpMatrix * position;\r\n\t#endif\r\n\t\r\n\tmat4 worldMat;\r\n\t#ifdef GPU_INSTANCE\r\n\t\tworldMat = a_WorldMat;\r\n\t#else\r\n\t\tworldMat = u_WorldMat;\r\n\t#endif\r\n\r\n\tmat3 worldInvMat;\r\n\t#ifdef BONE\r\n\t\tworldInvMat=INVERSE_MAT(mat3(worldMat*skinTransform));\r\n\t#else\r\n\t\tworldInvMat=INVERSE_MAT(mat3(worldMat));\r\n\t#endif  \r\n\tv_Normal=normalize(a_Normal*worldInvMat);\r\n\t#if defined(NORMALMAP)\r\n\t\tv_Tangent=normalize(a_Tangent0.xyz*worldInvMat);\r\n\t\tv_Binormal=cross(v_Normal,v_Tangent)*a_Tangent0.w;\r\n\t#endif\r\n\r\n\tvec3 positionWS=(worldMat*position).xyz;\r\n\tv_ViewDir = u_CameraPos-positionWS;\r\n\tv_PositionWorld = positionWS;\r\n\r\n\t#if defined(DIFFUSEMAP) || defined(MASKMAP) || defined(EMISSIONMAP) || defined(FOGMAP) ||((defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT))&&(defined(SPECULARMAP)||defined(NORMALMAP)))\r\n\t\t#ifdef TILINGOFFSET\r\n\t\t\tv_Texcoord0=TransformUV(a_Texcoord0,u_TilingOffset);\r\n\t\t#else\r\n\t\t\tv_Texcoord0=a_Texcoord0;\r\n\t\t#endif\r\n\t#endif\r\n\r\n\t#if defined(COLOR)&&defined(ENABLEVERTEXCOLOR)\r\n\t\tv_Color=a_Color;\r\n\t#endif\r\n\r\n\tgl_Position=remapGLPositionZ(gl_Position);\r\n}';
    var Shader3D$3 = Laya.Shader3D;
    var SubShader$2 = Laya.SubShader;
    var VertexMesh$2 = Laya.VertexMesh;
    var BlinnPhongFogBlendShader = /* */ function () {
        function BlinnPhongFogBlendShader() {
            (0, _classCallCheck2.default)(this, BlinnPhongFogBlendShader);
        }
        (0, _createClass2.default)(BlinnPhongFogBlendShader, null, [{
            key: "init",
            value: function init() {
                var attributeMap = {
                    a_Position: VertexMesh$2.MESH_POSITION0,
                    a_Color: VertexMesh$2.MESH_COLOR0,
                    a_Normal: VertexMesh$2.MESH_NORMAL0,
                    a_Texcoord0: VertexMesh$2.MESH_TEXTURECOORDINATE0,
                    a_Texcoord1: VertexMesh$2.MESH_TEXTURECOORDINATE1,
                    a_BoneWeights: VertexMesh$2.MESH_BLENDWEIGHT0,
                    a_BoneIndices: VertexMesh$2.MESH_BLENDINDICES0,
                    a_Tangent0: VertexMesh$2.MESH_TANGENT0,
                    a_MvpMatrix: VertexMesh$2.MESH_MVPMATRIX_ROW0,
                    a_WorldMat: VertexMesh$2.MESH_WORLDMATRIX_ROW0
                };
                var uniformMap = {
                    u_Bones: Shader3D$3.PERIOD_CUSTOM,
                    u_WorldMat: Shader3D$3.PERIOD_SPRITE,
                    u_MvpMatrix: Shader3D$3.PERIOD_SPRITE,
                    u_Projection: Shader3D$3.PERIOD_CAMERA,
                    u_LightmapScaleOffset: Shader3D$3.PERIOD_SPRITE,
                    u_LightMap: Shader3D$3.PERIOD_SPRITE,
                    u_LightMapDirection: Shader3D$3.PERIOD_SPRITE,
                    u_CameraPos: Shader3D$3.PERIOD_CAMERA,
                    u_Viewport: Shader3D$3.PERIOD_CAMERA,
                    u_ProjectionParams: Shader3D$3.PERIOD_CAMERA,
                    u_View: Shader3D$3.PERIOD_CAMERA,
                    u_ViewProjection: Shader3D$3.PERIOD_CAMERA,
                    u_ReflectTexture: Shader3D$3.PERIOD_SCENE,
                    u_ReflectIntensity: Shader3D$3.PERIOD_SCENE,
                    u_DirationLightCount: Shader3D$3.PERIOD_SCENE,
                    u_LightBuffer: Shader3D$3.PERIOD_SCENE,
                    u_LightClusterBuffer: Shader3D$3.PERIOD_SCENE,
                    u_AmbientColor: Shader3D$3.PERIOD_SCENE,
                    u_ShadowBias: Shader3D$3.PERIOD_SCENE,
                    u_ShadowLightDirection: Shader3D$3.PERIOD_SCENE,
                    u_ShadowMap: Shader3D$3.PERIOD_SCENE,
                    u_ShadowParams: Shader3D$3.PERIOD_SCENE,
                    u_ShadowSplitSpheres: Shader3D$3.PERIOD_SCENE,
                    u_ShadowMatrices: Shader3D$3.PERIOD_SCENE,
                    u_ShadowMapSize: Shader3D$3.PERIOD_SCENE,
                    u_Time: Shader3D$3.PERIOD_SCENE,
                    u_AmbientSHAr: Shader3D$3.PERIOD_SCENE,
                    u_AmbientSHAg: Shader3D$3.PERIOD_SCENE,
                    u_AmbientSHAb: Shader3D$3.PERIOD_SCENE,
                    u_AmbientSHBr: Shader3D$3.PERIOD_SCENE,
                    u_AmbientSHBg: Shader3D$3.PERIOD_SCENE,
                    u_AmbientSHBb: Shader3D$3.PERIOD_SCENE,
                    u_AmbientSHC: Shader3D$3.PERIOD_SCENE,
                    u_FogColor: Shader3D$3.PERIOD_SCENE,
                    u_FogRange: Shader3D$3.PERIOD_SCENE,
                    u_FogStart: Shader3D$3.PERIOD_SCENE,
                    "u_SunLight.color": Shader3D$3.PERIOD_SCENE,
                    "u_SunLight.direction": Shader3D$3.PERIOD_SCENE,
                    "u_PointLight.position": Shader3D$3.PERIOD_SCENE,
                    "u_PointLight.range": Shader3D$3.PERIOD_SCENE,
                    "u_PointLight.color": Shader3D$3.PERIOD_SCENE,
                    "u_SpotLight.position": Shader3D$3.PERIOD_SCENE,
                    "u_SpotLight.direction": Shader3D$3.PERIOD_SCENE,
                    "u_SpotLight.range": Shader3D$3.PERIOD_SCENE,
                    "u_SpotLight.spot": Shader3D$3.PERIOD_SCENE,
                    "u_SpotLight.color": Shader3D$3.PERIOD_SCENE,
                    u_DiffuseTexture: Shader3D$3.PERIOD_MATERIAL,
                    u_DiffuseColor: Shader3D$3.PERIOD_MATERIAL,
                    u_TillingX: Shader3D$3.PERIOD_MATERIAL,
                    u_TillingY: Shader3D$3.PERIOD_MATERIAL,
                    u_OffsetX: Shader3D$3.PERIOD_MATERIAL,
                    u_OffsetY: Shader3D$3.PERIOD_MATERIAL,
                    u_NormalTexture: Shader3D$3.PERIOD_MATERIAL,
                    u_SpecularColor: Shader3D$3.PERIOD_MATERIAL,
                    u_RimColor: Shader3D$3.PERIOD_MATERIAL,
                    u_Contrast: Shader3D$3.PERIOD_MATERIAL,
                    u_Specular: Shader3D$3.PERIOD_MATERIAL,
                    u_SpecularSmooth: Shader3D$3.PERIOD_MATERIAL,
                    u_RimPower: Shader3D$3.PERIOD_MATERIAL,
                    u_MaskTexture: Shader3D$3.PERIOD_MATERIAL,
                    u_EmissionTexture: Shader3D$3.PERIOD_MATERIAL,
                    u_EmissionDirectionX: Shader3D$3.PERIOD_MATERIAL,
                    u_EmissionDirectionY: Shader3D$3.PERIOD_MATERIAL,
                    u_EmissionPower: Shader3D$3.PERIOD_MATERIAL,
                    u_EmissionColor: Shader3D$3.PERIOD_MATERIAL,
                    u_AlphaStart: Shader3D$3.PERIOD_MATERIAL,
                    u_AlphaRange: Shader3D$3.PERIOD_MATERIAL,
                    u_FogTexture: Shader3D$3.PERIOD_MATERIAL,
                    u_FogDirectionX: Shader3D$3.PERIOD_MATERIAL,
                    u_FogDirectionY: Shader3D$3.PERIOD_MATERIAL,
                    u_FogMapScale: Shader3D$3.PERIOD_MATERIAL,
                    u_FogPower: Shader3D$3.PERIOD_MATERIAL,
                    u_FadeFogColor: Shader3D$3.PERIOD_MATERIAL,
                    u_FadeHeightFogColor: Shader3D$3.PERIOD_MATERIAL,
                    u_FadeFogNear: Shader3D$3.PERIOD_MATERIAL,
                    u_FadeFogFar: Shader3D$3.PERIOD_MATERIAL,
                    u_HeightFogPower: Shader3D$3.PERIOD_MATERIAL,
                    u_HeightFogStart: Shader3D$3.PERIOD_MATERIAL,
                    u_HeightFogRange: Shader3D$3.PERIOD_MATERIAL
                };
                var stateMap = {
                    s_Cull: Shader3D$3.RENDER_STATE_CULL,
                    s_Blend: Shader3D$3.RENDER_STATE_BLEND,
                    s_BlendSrc: Shader3D$3.RENDER_STATE_BLEND_SRC,
                    s_BlendDst: Shader3D$3.RENDER_STATE_BLEND_DST,
                    s_DepthTest: Shader3D$3.RENDER_STATE_DEPTH_TEST,
                    s_DepthWrite: Shader3D$3.RENDER_STATE_DEPTH_WRITE
                };
                var shader = Shader3D$3.add("BlinnPhongFogBlend", null, null, true);
                var subShader = new SubShader$2(attributeMap, uniformMap);
                shader.addSubShader(subShader);
                subShader.addShaderPass(vs$2, ps$2, stateMap, "Forward");
            }
        }]);
        return BlinnPhongFogBlendShader;
    }();
    var Shader3D$4 = Laya.Shader3D;
    var ColorCutoutMaterial = /* */ function (_Laya$Material4) {
        (0, _inherits2.default)(ColorCutoutMaterial, _Laya$Material4);
        var _super72 = _createSuper(ColorCutoutMaterial);
        function ColorCutoutMaterial() {
            var _this47;
            (0, _classCallCheck2.default)(this, ColorCutoutMaterial);
            _this47 = _super72.call(this);
            _this47.setShaderName("ColorCutout");
            return _this47;
        }
        (0, _createClass2.default)(ColorCutoutMaterial, [{
            key: "clone",
            value: function clone() {
                var copyMat = new ColorCutoutMaterial();
                copyMat._Color = this._Color;
                copyMat._Cutoff = this._Cutoff;
                copyMat._Cull = this._Cull;
                copyMat._MainTex = this._MainTex;
                copyMat._TillingX = this._TillingX;
                copyMat._TillingY = this._TillingY;
                copyMat._OffsetX = this._OffsetX;
                copyMat._OffsetY = this._OffsetY;
                copyMat._FogTex = this._FogTex;
                copyMat._FogDirX = this._FogDirX;
                copyMat._FogDirY = this._FogDirY;
                copyMat._FogMapScale = this._FogMapScale;
                copyMat._FogPower = this._FogPower;
                copyMat._FadeFogColor = this._FadeFogColor;
                copyMat._FadeHeightFogColor = this._FadeHeightFogColor;
                copyMat._FadeFogNear = this._FadeFogNear;
                copyMat._FadeFogFar = this._FadeFogFar;
                copyMat._HeightFogPower = this._HeightFogPower;
                copyMat._HeightFogStart = this._HeightFogStart;
                copyMat._HeightFogRange = this._HeightFogRange;
                return copyMat;
            }
        }, {
            key: "_Cull",
            get: function get() {
                return this._shaderValues.getInt(ColorCutoutMaterial.CULL);
            },
            set: function set(value) {
                var mode = 0;
                if (value < 1) {
                    mode = 0;
                } else if (value < 2) {
                    mode = 1;
                } else {
                    mode = 2;
                }
                this._shaderValues.setInt(ColorCutoutMaterial.CULL, mode);
            }
        }, {
            key: "_Cutoff",
            get: function get() {
                return this._shaderValues.getNumber(ColorCutoutMaterial.CUTOFF);
            },
            set: function set(value) {
                this._shaderValues.setNumber(ColorCutoutMaterial.CUTOFF, value);
            }
        }, {
            key: "_TillingX",
            get: function get() {
                return this._shaderValues.getNumber(ColorCutoutMaterial.TILLINGX);
            },
            set: function set(value) {
                this._shaderValues.setNumber(ColorCutoutMaterial.TILLINGX, value);
            }
        }, {
            key: "_TillingY",
            get: function get() {
                return this._shaderValues.getNumber(ColorCutoutMaterial.TILLINGY);
            },
            set: function set(value) {
                this._shaderValues.setNumber(ColorCutoutMaterial.TILLINGY, value);
            }
        }, {
            key: "_OffsetX",
            get: function get() {
                return this._shaderValues.getNumber(ColorCutoutMaterial.OFFSETX);
            },
            set: function set(value) {
                this._shaderValues.setNumber(ColorCutoutMaterial.OFFSETX, value);
            }
        }, {
            key: "_OffsetY",
            get: function get() {
                return this._shaderValues.getNumber(ColorCutoutMaterial.OFFSETY);
            },
            set: function set(value) {
                this._shaderValues.setNumber(ColorCutoutMaterial.OFFSETY, value);
            }
        }, {
            key: "_Color",
            get: function get() {
                return this._shaderValues.getVector(ColorCutoutMaterial.DIFFUSECOLOR);
            },
            set: function set(value) {
                this._shaderValues.setVector(ColorCutoutMaterial.DIFFUSECOLOR, value);
            }
        }, {
            key: "_MainTex",
            get: function get() {
                return this._shaderValues.getTexture(ColorCutoutMaterial.DIFFUSETEXTURE);
            },
            set: function set(value) {
                if (value) this._shaderValues.addDefine(ColorCutoutMaterial.SHADERDEFINE_DIFFUSEMAP); else this._shaderValues.removeDefine(ColorCutoutMaterial.SHADERDEFINE_DIFFUSEMAP);
                this._shaderValues.setTexture(ColorCutoutMaterial.DIFFUSETEXTURE, value);
            }
        }, {
            key: "_FogTex",
            get: function get() {
                return this._shaderValues.getTexture(ColorCutoutMaterial.FOGTEXURE);
            },
            set: function set(value) {
                if (value) this._shaderValues.addDefine(ColorCutoutMaterial.SHADERDEFINE_FOGMAP); else this._shaderValues.removeDefine(ColorCutoutMaterial.SHADERDEFINE_FOGMAP);
                this._shaderValues.setTexture(ColorCutoutMaterial.FOGTEXURE, value);
            }
        }, {
            key: "_FogDirX",
            get: function get() {
                return this._shaderValues.getNumber(ColorCutoutMaterial.FOGDIRECTIONX);
            },
            set: function set(value) {
                this._shaderValues.setNumber(ColorCutoutMaterial.FOGDIRECTIONX, value);
            }
        }, {
            key: "_FogDirY",
            get: function get() {
                return this._shaderValues.getNumber(ColorCutoutMaterial.FOGDIRECTIONY);
            },
            set: function set(value) {
                this._shaderValues.setNumber(ColorCutoutMaterial.FOGDIRECTIONY, value);
            }
        }, {
            key: "_FogMapScale",
            get: function get() {
                return this._shaderValues.getNumber(ColorCutoutMaterial.FOGMAPSCALE);
            },
            set: function set(value) {
                this._shaderValues.setNumber(ColorCutoutMaterial.FOGMAPSCALE, value);
            }
        }, {
            key: "_FadeFogColor",
            get: function get() {
                return this._shaderValues.getNumber(ColorCutoutMaterial.FADEFOGCOLOR);
            },
            set: function set(value) {
                this._shaderValues.setNumber(ColorCutoutMaterial.FADEFOGCOLOR, value);
            }
        }, {
            key: "_FadeHeightFogColor",
            get: function get() {
                return this._shaderValues.getNumber(ColorCutoutMaterial.FADEHEIGHTFOGCOLOR);
            },
            set: function set(value) {
                this._shaderValues.setNumber(ColorCutoutMaterial.FADEHEIGHTFOGCOLOR, value);
            }
        }, {
            key: "_FadeFogNear",
            get: function get() {
                return this._shaderValues.getNumber(ColorCutoutMaterial.FADEFOGNEAR);
            },
            set: function set(value) {
                this._shaderValues.setNumber(ColorCutoutMaterial.FADEFOGNEAR, value);
            }
        }, {
            key: "_FadeFogFar",
            get: function get() {
                return this._shaderValues.getNumber(ColorCutoutMaterial.FADEFOGFAR);
            },
            set: function set(value) {
                this._shaderValues.setNumber(ColorCutoutMaterial.FADEFOGFAR, value);
            }
        }, {
            key: "_FogPower",
            get: function get() {
                return this._shaderValues.getNumber(ColorCutoutMaterial.FOGPOWER);
            },
            set: function set(value) {
                this._shaderValues.setNumber(ColorCutoutMaterial.FOGPOWER, value);
            }
        }, {
            key: "_HeightFogPower",
            get: function get() {
                return this._shaderValues.getNumber(ColorCutoutMaterial.HEIGHTFOGPOWER);
            },
            set: function set(value) {
                this._shaderValues.setNumber(ColorCutoutMaterial.HEIGHTFOGPOWER, value);
            }
        }, {
            key: "_HeightFogStart",
            get: function get() {
                return this._shaderValues.getNumber(ColorCutoutMaterial.HEIGHTFOGSTART);
            },
            set: function set(value) {
                this._shaderValues.setNumber(ColorCutoutMaterial.HEIGHTFOGSTART, value);
            }
        }, {
            key: "_HeightFogRange",
            get: function get() {
                return this._shaderValues.getNumber(ColorCutoutMaterial.HEIGHTFOGRANGE);
            },
            set: function set(value) {
                this._shaderValues.setNumber(ColorCutoutMaterial.HEIGHTFOGRANGE, value);
            }
        }], [{
            key: "init",
            value: function init() {
                Laya.ClassUtils.regClass("Laya.ColorCutout", ColorCutoutMaterial);
            }
        }]);
        return ColorCutoutMaterial;
    }(Laya.Material);
    ColorCutoutMaterial.DIFFUSETEXTURE = Laya.Shader3D.propertyNameToID("u_DiffuseTexture");
    ColorCutoutMaterial.DIFFUSECOLOR = Laya.Shader3D.propertyNameToID("u_DiffuseColor");
    ColorCutoutMaterial.CUTOFF = Laya.Shader3D.propertyNameToID("u_Cutoff");
    ColorCutoutMaterial.TILLINGX = Laya.Shader3D.propertyNameToID("u_TillingX");
    ColorCutoutMaterial.TILLINGY = Laya.Shader3D.propertyNameToID("u_TillingY");
    ColorCutoutMaterial.OFFSETX = Laya.Shader3D.propertyNameToID("u_OffsetX");
    ColorCutoutMaterial.OFFSETY = Laya.Shader3D.propertyNameToID("u_OffsetY");
    ColorCutoutMaterial.FOGTEXURE = Laya.Shader3D.propertyNameToID("u_FogTexture");
    ColorCutoutMaterial.FOGDIRECTIONX = Laya.Shader3D.propertyNameToID("u_FogDirectionX");
    ColorCutoutMaterial.FOGDIRECTIONY = Laya.Shader3D.propertyNameToID("u_FogDirectionY");
    ColorCutoutMaterial.FOGMAPSCALE = Laya.Shader3D.propertyNameToID("u_FogMapScale");
    ColorCutoutMaterial.FOGPOWER = Laya.Shader3D.propertyNameToID("u_FogPower");
    ColorCutoutMaterial.FADEFOGCOLOR = Laya.Shader3D.propertyNameToID("u_FadeFogColor");
    ColorCutoutMaterial.FADEHEIGHTFOGCOLOR = Laya.Shader3D.propertyNameToID("u_FadeHeightFogColor");
    ColorCutoutMaterial.FADEFOGNEAR = Laya.Shader3D.propertyNameToID("u_FadeFogNear");
    ColorCutoutMaterial.FADEFOGFAR = Laya.Shader3D.propertyNameToID("u_FadeFogFar");
    ColorCutoutMaterial.HEIGHTFOGPOWER = Laya.Shader3D.propertyNameToID("u_HeightFogPower");
    ColorCutoutMaterial.HEIGHTFOGSTART = Laya.Shader3D.propertyNameToID("u_HeightFogStart");
    ColorCutoutMaterial.HEIGHTFOGRANGE = Laya.Shader3D.propertyNameToID("u_HeightFogRange");
    ColorCutoutMaterial.CULL = Shader3D$4.propertyNameToID("s_Cull");
    ColorCutoutMaterial.SHADERDEFINE_DIFFUSEMAP = Laya.Shader3D.getDefineByName("DIFFUSEMAP");
    ColorCutoutMaterial.SHADERDEFINE_NORMALMAP = Laya.Shader3D.getDefineByName("NORMALMAP");
    ColorCutoutMaterial.SHADERDEFINE_MASKMAP = Laya.Shader3D.getDefineByName("MASKMAP");
    ColorCutoutMaterial.SHADERDEFINE_EMISSIONMAP = Laya.Shader3D.getDefineByName("EMISSIONMAP");
    ColorCutoutMaterial.SHADERDEFINE_FOGMAP = Laya.Shader3D.getDefineByName("FOGMAP");
    var Shader3D$5 = Laya.Shader3D;
    var SubShader$3 = Laya.SubShader;
    var VertexMesh$3 = Laya.VertexMesh;
    var ColorCutoutShader = /* */ function () {
        function ColorCutoutShader() {
            (0, _classCallCheck2.default)(this, ColorCutoutShader);
        }
        (0, _createClass2.default)(ColorCutoutShader, null, [{
            key: "init",
            value: function init() {
                var attributeMap = {
                    a_Position: VertexMesh$3.MESH_POSITION0,
                    a_Color: VertexMesh$3.MESH_COLOR0,
                    a_Normal: VertexMesh$3.MESH_NORMAL0,
                    a_Texcoord0: VertexMesh$3.MESH_TEXTURECOORDINATE0,
                    a_Texcoord1: VertexMesh$3.MESH_TEXTURECOORDINATE1,
                    a_BoneWeights: VertexMesh$3.MESH_BLENDWEIGHT0,
                    a_BoneIndices: VertexMesh$3.MESH_BLENDINDICES0,
                    a_Tangent0: VertexMesh$3.MESH_TANGENT0,
                    a_MvpMatrix: VertexMesh$3.MESH_MVPMATRIX_ROW0,
                    a_WorldMat: VertexMesh$3.MESH_WORLDMATRIX_ROW0
                };
                var uniformMap = {
                    u_Bones: Shader3D$5.PERIOD_CUSTOM,
                    u_WorldMat: Shader3D$5.PERIOD_SPRITE,
                    u_MvpMatrix: Shader3D$5.PERIOD_SPRITE,
                    u_Projection: Shader3D$5.PERIOD_CAMERA,
                    u_LightmapScaleOffset: Shader3D$5.PERIOD_SPRITE,
                    u_LightMap: Shader3D$5.PERIOD_SPRITE,
                    u_LightMapDirection: Shader3D$5.PERIOD_SPRITE,
                    u_CameraPos: Shader3D$5.PERIOD_CAMERA,
                    u_Viewport: Shader3D$5.PERIOD_CAMERA,
                    u_ProjectionParams: Shader3D$5.PERIOD_CAMERA,
                    u_View: Shader3D$5.PERIOD_CAMERA,
                    u_ViewProjection: Shader3D$5.PERIOD_CAMERA,
                    u_ReflectTexture: Shader3D$5.PERIOD_SCENE,
                    u_ReflectIntensity: Shader3D$5.PERIOD_SCENE,
                    u_DirationLightCount: Shader3D$5.PERIOD_SCENE,
                    u_LightBuffer: Shader3D$5.PERIOD_SCENE,
                    u_LightClusterBuffer: Shader3D$5.PERIOD_SCENE,
                    u_AmbientColor: Shader3D$5.PERIOD_SCENE,
                    u_ShadowBias: Shader3D$5.PERIOD_SCENE,
                    u_ShadowLightDirection: Shader3D$5.PERIOD_SCENE,
                    u_ShadowMap: Shader3D$5.PERIOD_SCENE,
                    u_ShadowParams: Shader3D$5.PERIOD_SCENE,
                    u_ShadowSplitSpheres: Shader3D$5.PERIOD_SCENE,
                    u_ShadowMatrices: Shader3D$5.PERIOD_SCENE,
                    u_ShadowMapSize: Shader3D$5.PERIOD_SCENE,
                    u_Time: Shader3D$5.PERIOD_SCENE,
                    u_AmbientSHAr: Shader3D$5.PERIOD_SCENE,
                    u_AmbientSHAg: Shader3D$5.PERIOD_SCENE,
                    u_AmbientSHAb: Shader3D$5.PERIOD_SCENE,
                    u_AmbientSHBr: Shader3D$5.PERIOD_SCENE,
                    u_AmbientSHBg: Shader3D$5.PERIOD_SCENE,
                    u_AmbientSHBb: Shader3D$5.PERIOD_SCENE,
                    u_AmbientSHC: Shader3D$5.PERIOD_SCENE,
                    u_FogColor: Shader3D$5.PERIOD_SCENE,
                    u_FogRange: Shader3D$5.PERIOD_SCENE,
                    u_FogStart: Shader3D$5.PERIOD_SCENE,
                    "u_SunLight.color": Shader3D$5.PERIOD_SCENE,
                    "u_SunLight.direction": Shader3D$5.PERIOD_SCENE,
                    "u_PointLight.position": Shader3D$5.PERIOD_SCENE,
                    "u_PointLight.range": Shader3D$5.PERIOD_SCENE,
                    "u_PointLight.color": Shader3D$5.PERIOD_SCENE,
                    "u_SpotLight.position": Shader3D$5.PERIOD_SCENE,
                    "u_SpotLight.direction": Shader3D$5.PERIOD_SCENE,
                    "u_SpotLight.range": Shader3D$5.PERIOD_SCENE,
                    "u_SpotLight.spot": Shader3D$5.PERIOD_SCENE,
                    "u_SpotLight.color": Shader3D$5.PERIOD_SCENE,
                    u_DiffuseTexture: Shader3D$5.PERIOD_MATERIAL,
                    u_DiffuseColor: Shader3D$5.PERIOD_MATERIAL,
                    u_Cutoff: Shader3D$5.PERIOD_MATERIAL,
                    u_TillingX: Shader3D$5.PERIOD_MATERIAL,
                    u_TillingY: Shader3D$5.PERIOD_MATERIAL,
                    u_OffsetX: Shader3D$5.PERIOD_MATERIAL,
                    u_OffsetY: Shader3D$5.PERIOD_MATERIAL,
                    u_FogTexture: Shader3D$5.PERIOD_MATERIAL,
                    u_FogDirectionX: Shader3D$5.PERIOD_MATERIAL,
                    u_FogDirectionY: Shader3D$5.PERIOD_MATERIAL,
                    u_FogMapScale: Shader3D$5.PERIOD_MATERIAL,
                    u_FogPower: Shader3D$5.PERIOD_MATERIAL,
                    u_FadeFogColor: Shader3D$5.PERIOD_MATERIAL,
                    u_FadeHeightFogColor: Shader3D$5.PERIOD_MATERIAL,
                    u_FadeFogNear: Shader3D$5.PERIOD_MATERIAL,
                    u_FadeFogFar: Shader3D$5.PERIOD_MATERIAL,
                    u_HeightFogPower: Shader3D$5.PERIOD_MATERIAL,
                    u_HeightFogStart: Shader3D$5.PERIOD_MATERIAL,
                    u_HeightFogRange: Shader3D$5.PERIOD_MATERIAL
                };
                var stateMap = {
                    s_Cull: Shader3D$5.RENDER_STATE_CULL,
                    s_Blend: Shader3D$5.RENDER_STATE_BLEND,
                    s_BlendSrc: Shader3D$5.RENDER_STATE_BLEND_SRC,
                    s_BlendDst: Shader3D$5.RENDER_STATE_BLEND_DST,
                    s_DepthTest: Shader3D$5.RENDER_STATE_DEPTH_TEST,
                    s_DepthWrite: Shader3D$5.RENDER_STATE_DEPTH_WRITE
                };
                var shader = Shader3D$5.add("ColorCutout", null, null, true);
                var subShader = new SubShader$3(attributeMap, uniformMap);
                shader.addSubShader(subShader);
                subShader.addShaderPass(vs$1, ps$1, stateMap, "Forward");
            }
        }]);
        return ColorCutoutShader;
    }();
    var Main = /* */ function () {
        function Main() {
            (0, _classCallCheck2.default)(this, Main);
            if (window["Laya3D"]) Laya3D.init(GameConfig.width, GameConfig.height); else Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
            Laya.stage.scaleMode = GameConfig.scaleMode;
            Laya.stage.screenMode = GameConfig.screenMode;
            Laya.stage.alignV = GameConfig.alignV;
            Laya.stage.alignH = GameConfig.alignH;
            Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
            platform.getInstance().createLogo();
            window.yad.bottom = 0;
            Laya.Text.langPacks = {
                "正在加载中...": "Loading..."
            }
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        (0, _createClass2.default)(Main, [{
            key: "onVersionLoaded",
            value: function onVersionLoaded() {
                Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
            }
        }, {
            key: "onConfigLoaded",
            value: function onConfigLoaded() {
                return __awaiter(this, void 0, void 0, /* */ _regenerator.default.mark(function _callee7() {
                    return _regenerator.default.wrap(function _callee7$(_context7) {
                        while (1) {
                            switch (_context7.prev = _context7.next) {
                                case 0:
                                    BlinnPhongFogShader.init();
                                    BlinnPhongFogMaterial.init();
                                    BlinnPhongFogTransShader.init();
                                    BlinnPhongFogTransMaterial.init();
                                    BlinnPhongFogBlendShader.init();
                                    BlinnPhongFogBlendMaterial.init();
                                    ColorCutoutMaterial.init();
                                    ColorCutoutShader.init();
                                    Laya.stage.addComponent(ResLoaderManager);

                                case 9:
                                case "end":
                                    return _context7.stop();
                            }
                        }
                    }, _callee7);
                }));
            }
        }]);
        return Main;
    }();
    new Main();
})();