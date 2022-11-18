!function () {
    var _interopRequireDefault = require("../babel/runtime/helpers/interopRequireDefault");

    var _typeof2 = _interopRequireDefault(require("../babel/runtime/helpers/typeof"));

    !function (t) {
        var e;
        "object" == (typeof exports === "undefined" ? "undefined" : (0, _typeof2.default)(exports)) && "undefined" != typeof module ? module.exports = t() : ("undefined" != typeof window ? e = window : "undefined" != typeof global ? e = global : "undefined" != typeof self && (e = self),
            e.CANNON = t());
    }(function () {
        return function e(t, o, i) {
            function s(r, a) {
                if (!o[r]) {
                    if (!t[r]) {
                        var h = "function" == typeof require && require;
                        if (!a && h) return h(r, !0);
                        if (n) return n(r, !0);
                        throw new Error("Cannot find module '" + r + "'");
                    }
                    var l = o[r] = {
                        exports: {}
                    };
                    t[r][0].call(l.exports, function (e) {
                        var o = t[r][1][e];
                        return s(o || e);
                    }, l, l.exports, e, t, o, i);
                }
                return o[r].exports;
            }
            for (var n = "function" == typeof require && require, r = 0; r < i.length; r++) {
                s(i[r]);
            }
            return s;
        }({
            1: [function (t, e, o) {
                e.exports = {
                    name: "cannon",
                    version: "0.6.2",
                    description: "A lightweight 3D physics engine written in JavaScript.",
                    homepage: "https://github.com/schteppe/cannon.js",
                    author: "Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",
                    keywords: ["cannon.js", "cannon", "physics", "engine", "3d"],
                    main: "./src/Cannon.js",
                    engines: {
                        node: "*"
                    },
                    repository: {
                        type: "git",
                        url: "https://github.com/schteppe/cannon.js.git"
                    },
                    bugs: {
                        url: "https://github.com/schteppe/cannon.js/issues"
                    },
                    licenses: [{
                        type: "MIT"
                    }],
                    devDependencies: {
                        browserify: "*",
                        grunt: "~0.4.0",
                        "grunt-browserify": "^2.1.4",
                        "grunt-contrib-concat": "~0.1.3",
                        "grunt-contrib-jshint": "~0.1.1",
                        "grunt-contrib-nodeunit": "^0.4.1",
                        "grunt-contrib-uglify": "^0.5.1",
                        "grunt-contrib-yuidoc": "^0.5.2",
                        jshint: "latest",
                        nodeunit: "^0.11.3",
                        "uglify-js": "latest"
                    },
                    dependencies: {}
                };
            }, {}],
            2: [function (t, e, o) {
                e.exports = {
                    version: t("../package.json").version,
                    AABB: t("./collision/AABB"),
                    ArrayCollisionMatrix: t("./collision/ArrayCollisionMatrix"),
                    Body: t("./objects/Body"),
                    Box: t("./shapes/Box"),
                    Broadphase: t("./collision/Broadphase"),
                    Constraint: t("./constraints/Constraint"),
                    ContactEquation: t("./equations/ContactEquation"),
                    Narrowphase: t("./world/Narrowphase"),
                    ConeTwistConstraint: t("./constraints/ConeTwistConstraint"),
                    ContactMaterial: t("./material/ContactMaterial"),
                    ConvexPolyhedron: t("./shapes/ConvexPolyhedron"),
                    Cylinder: t("./shapes/Cylinder"),
                    DistanceConstraint: t("./constraints/DistanceConstraint"),
                    Equation: t("./equations/Equation"),
                    EventTarget: t("./utils/EventTarget"),
                    FrictionEquation: t("./equations/FrictionEquation"),
                    GSSolver: t("./solver/GSSolver"),
                    GridBroadphase: t("./collision/GridBroadphase"),
                    Heightfield: t("./shapes/Heightfield"),
                    HingeConstraint: t("./constraints/HingeConstraint"),
                    LockConstraint: t("./constraints/LockConstraint"),
                    Mat3: t("./math/Mat3"),
                    Material: t("./material/Material"),
                    NaiveBroadphase: t("./collision/NaiveBroadphase"),
                    ObjectCollisionMatrix: t("./collision/ObjectCollisionMatrix"),
                    Pool: t("./utils/Pool"),
                    Particle: t("./shapes/Particle"),
                    Plane: t("./shapes/Plane"),
                    PointToPointConstraint: t("./constraints/PointToPointConstraint"),
                    Quaternion: t("./math/Quaternion"),
                    Ray: t("./collision/Ray"),
                    RaycastVehicle: t("./objects/RaycastVehicle"),
                    RaycastResult: t("./collision/RaycastResult"),
                    RigidVehicle: t("./objects/RigidVehicle"),
                    RotationalEquation: t("./equations/RotationalEquation"),
                    RotationalMotorEquation: t("./equations/RotationalMotorEquation"),
                    SAPBroadphase: t("./collision/SAPBroadphase"),
                    SPHSystem: t("./objects/SPHSystem"),
                    Shape: t("./shapes/Shape"),
                    Solver: t("./solver/Solver"),
                    Sphere: t("./shapes/Sphere"),
                    SplitSolver: t("./solver/SplitSolver"),
                    Spring: t("./objects/Spring"),
                    Transform: t("./math/Transform"),
                    Trimesh: t("./shapes/Trimesh"),
                    Vec3: t("./math/Vec3"),
                    Vec3Pool: t("./utils/Vec3Pool"),
                    World: t("./world/World")
                };
            }, {
                "../package.json": 1,
                "./collision/AABB": 3,
                "./collision/ArrayCollisionMatrix": 4,
                "./collision/Broadphase": 5,
                "./collision/GridBroadphase": 6,
                "./collision/NaiveBroadphase": 7,
                "./collision/ObjectCollisionMatrix": 8,
                "./collision/Ray": 10,
                "./collision/RaycastResult": 11,
                "./collision/SAPBroadphase": 12,
                "./constraints/ConeTwistConstraint": 13,
                "./constraints/Constraint": 14,
                "./constraints/DistanceConstraint": 15,
                "./constraints/HingeConstraint": 16,
                "./constraints/LockConstraint": 17,
                "./constraints/PointToPointConstraint": 18,
                "./equations/ContactEquation": 20,
                "./equations/Equation": 21,
                "./equations/FrictionEquation": 22,
                "./equations/RotationalEquation": 23,
                "./equations/RotationalMotorEquation": 24,
                "./material/ContactMaterial": 25,
                "./material/Material": 26,
                "./math/Mat3": 28,
                "./math/Quaternion": 29,
                "./math/Transform": 30,
                "./math/Vec3": 31,
                "./objects/Body": 32,
                "./objects/RaycastVehicle": 33,
                "./objects/RigidVehicle": 34,
                "./objects/SPHSystem": 35,
                "./objects/Spring": 36,
                "./shapes/Box": 38,
                "./shapes/ConvexPolyhedron": 39,
                "./shapes/Cylinder": 40,
                "./shapes/Heightfield": 41,
                "./shapes/Particle": 42,
                "./shapes/Plane": 43,
                "./shapes/Shape": 44,
                "./shapes/Sphere": 45,
                "./shapes/Trimesh": 46,
                "./solver/GSSolver": 47,
                "./solver/Solver": 48,
                "./solver/SplitSolver": 49,
                "./utils/EventTarget": 50,
                "./utils/Pool": 52,
                "./utils/Vec3Pool": 55,
                "./world/Narrowphase": 56,
                "./world/World": 57
            }],
            3: [function (t, e, o) {
                var i = t("../math/Vec3");
                t("../utils/Utils");
                function AABB(t) {
                    t = t || {}, this.lowerBound = new i(), t.lowerBound && this.lowerBound.copy(t.lowerBound),
                        this.upperBound = new i(), t.upperBound && this.upperBound.copy(t.upperBound);
                }
                e.exports = AABB;
                var n = new i();
                AABB.prototype.setFromPoints = function (t, e, o, i) {
                    var r = this.lowerBound, s = this.upperBound, a = o;
                    r.copy(t[0]), a && a.vmult(r, r), s.copy(r);
                    for (var h = 1; h < t.length; h++) {
                        var l = t[h];
                        a && (a.vmult(l, n), l = n), l.x > s.x && (s.x = l.x), l.x < r.x && (r.x = l.x),
                            l.y > s.y && (s.y = l.y), l.y < r.y && (r.y = l.y), l.z > s.z && (s.z = l.z), l.z < r.z && (r.z = l.z);
                    }
                    return e && (e.vadd(r, r), e.vadd(s, s)), i && (r.x -= i, r.y -= i, r.z -= i, s.x += i,
                        s.y += i, s.z += i), this;
                }, AABB.prototype.copy = function (t) {
                    return this.lowerBound.copy(t.lowerBound), this.upperBound.copy(t.upperBound), this;
                }, AABB.prototype.clone = function () {
                    return new AABB().copy(this);
                }, AABB.prototype.extend = function (t) {
                    this.lowerBound.x = Math.min(this.lowerBound.x, t.lowerBound.x), this.upperBound.x = Math.max(this.upperBound.x, t.upperBound.x),
                        this.lowerBound.y = Math.min(this.lowerBound.y, t.lowerBound.y), this.upperBound.y = Math.max(this.upperBound.y, t.upperBound.y),
                        this.lowerBound.z = Math.min(this.lowerBound.z, t.lowerBound.z), this.upperBound.z = Math.max(this.upperBound.z, t.upperBound.z);
                }, AABB.prototype.overlaps = function (t) {
                    var e = this.lowerBound, o = this.upperBound, i = t.lowerBound, n = t.upperBound, r = i.x <= o.x && o.x <= n.x || e.x <= n.x && n.x <= o.x, s = i.y <= o.y && o.y <= n.y || e.y <= n.y && n.y <= o.y, a = i.z <= o.z && o.z <= n.z || e.z <= n.z && n.z <= o.z;
                    return r && s && a;
                }, AABB.prototype.volume = function () {
                    var t = this.lowerBound, e = this.upperBound;
                    return (e.x - t.x) * (e.y - t.y) * (e.z - t.z);
                }, AABB.prototype.contains = function (t) {
                    var e = this.lowerBound, o = this.upperBound, i = t.lowerBound, n = t.upperBound;
                    return e.x <= i.x && o.x >= n.x && e.y <= i.y && o.y >= n.y && e.z <= i.z && o.z >= n.z;
                }, AABB.prototype.getCorners = function (t, e, o, i, n, r, s, a) {
                    var h = this.lowerBound, l = this.upperBound;
                    t.copy(h), e.set(l.x, h.y, h.z), o.set(l.x, l.y, h.z), i.set(h.x, l.y, l.z), n.set(l.x, h.y, h.z),
                        r.set(h.x, l.y, h.z), s.set(h.x, h.y, l.z), a.copy(l);
                };
                var r = [new i(), new i(), new i(), new i(), new i(), new i(), new i(), new i()];
                AABB.prototype.toLocalFrame = function (t, e) {
                    var o = r, i = o[0], n = o[1], s = o[2], a = o[3], h = o[4], l = o[5], p = o[6], c = o[7];
                    this.getCorners(i, n, s, a, h, l, p, c);
                    for (var u = 0; 8 !== u; u++) {
                        var d = o[u];
                        t.pointToLocal(d, d);
                    }
                    return e.setFromPoints(o);
                }, AABB.prototype.toWorldFrame = function (t, e) {
                    var o = r, i = o[0], n = o[1], s = o[2], a = o[3], h = o[4], l = o[5], p = o[6], c = o[7];
                    this.getCorners(i, n, s, a, h, l, p, c);
                    for (var u = 0; 8 !== u; u++) {
                        var d = o[u];
                        t.pointToWorld(d, d);
                    }
                    return e.setFromPoints(o);
                }, AABB.prototype.overlapsRay = function (t) {
                    var e = 1 / t._direction.x, o = 1 / t._direction.y, i = 1 / t._direction.z, n = (this.lowerBound.x - t.from.x) * e, r = (this.upperBound.x - t.from.x) * e, s = (this.lowerBound.y - t.from.y) * o, a = (this.upperBound.y - t.from.y) * o, h = (this.lowerBound.z - t.from.z) * i, l = (this.upperBound.z - t.from.z) * i, p = Math.max(Math.max(Math.min(n, r), Math.min(s, a)), Math.min(h, l)), c = Math.min(Math.min(Math.max(n, r), Math.max(s, a)), Math.max(h, l));
                    return !(c < 0) && !(p > c);
                };
            }, {
                "../math/Vec3": 31,
                "../utils/Utils": 54
            }],
            4: [function (t, e, o) {
                function ArrayCollisionMatrix() {
                    this.matrix = [];
                }
                e.exports = ArrayCollisionMatrix, ArrayCollisionMatrix.prototype.get = function (t, e) {
                    if (t = t.index, (e = e.index) > t) {
                        var o = e;
                        e = t, t = o;
                    }
                    return this.matrix[(t * (t + 1) >> 1) + e - 1];
                }, ArrayCollisionMatrix.prototype.set = function (t, e, o) {
                    if (t = t.index, (e = e.index) > t) {
                        var i = e;
                        e = t, t = i;
                    }
                    this.matrix[(t * (t + 1) >> 1) + e - 1] = o ? 1 : 0;
                }, ArrayCollisionMatrix.prototype.reset = function () {
                    for (var t = 0, e = this.matrix.length; t !== e; t++) {
                        this.matrix[t] = 0;
                    }
                }, ArrayCollisionMatrix.prototype.setNumObjects = function (t) {
                    this.matrix.length = t * (t - 1) >> 1;
                };
            }, {}],
            5: [function (t, e, o) {
                var i = t("../objects/Body"), n = t("../math/Vec3"), r = t("../math/Quaternion");
                t("../shapes/Shape"), t("../shapes/Plane");
                function Broadphase() {
                    this.world = null, this.useBoundingBoxes = !1, this.dirty = !0;
                }
                e.exports = Broadphase, Broadphase.prototype.collisionPairs = function (t, e, o) {
                    throw new Error("collisionPairs not implemented for this BroadPhase class!");
                }, Broadphase.prototype.needBroadphaseCollision = function (t, e) {
                    return 0 != (t.collisionFilterGroup & e.collisionFilterMask) && 0 != (e.collisionFilterGroup & t.collisionFilterMask) && (0 == (t.type & i.STATIC) && t.sleepState !== i.SLEEPING || 0 == (e.type & i.STATIC) && e.sleepState !== i.SLEEPING);
                }, Broadphase.prototype.intersectionTest = function (t, e, o, i) {
                    this.useBoundingBoxes ? this.doBoundingBoxBroadphase(t, e, o, i) : this.doBoundingSphereBroadphase(t, e, o, i);
                };
                var s = new n();
                new n(), new r(), new n();
                Broadphase.prototype.doBoundingSphereBroadphase = function (t, e, o, i) {
                    var n = s;
                    e.position.vsub(t.position, n);
                    var r = Math.pow(t.boundingRadius + e.boundingRadius, 2);
                    n.norm2() < r && (o.push(t), i.push(e));
                }, Broadphase.prototype.doBoundingBoxBroadphase = function (t, e, o, i) {
                    t.aabbNeedsUpdate && t.computeAABB(), e.aabbNeedsUpdate && e.computeAABB(), t.aabb.overlaps(e.aabb) && (o.push(t),
                        i.push(e));
                };
                var a = {
                    keys: []
                }, h = [], l = [];
                Broadphase.prototype.makePairsUnique = function (t, e) {
                    for (var o = a, i = h, n = l, r = t.length, s = 0; s !== r; s++) {
                        i[s] = t[s], n[s] = e[s];
                    }
                    t.length = 0, e.length = 0;
                    for (s = 0; s !== r; s++) {
                        var p = i[s].id, c = n[s].id;
                        o[u = p < c ? p + "," + c : c + "," + p] = s, o.keys.push(u);
                    }
                    for (s = 0; s !== o.keys.length; s++) {
                        var u = o.keys.pop(), d = o[u];
                        t.push(i[d]), e.push(n[d]), delete o[u];
                    }
                }, Broadphase.prototype.setWorld = function (t) { };
                var p = new n();
                Broadphase.boundingSphereCheck = function (t, e) {
                    var o = p;
                    return t.position.vsub(e.position, o), Math.pow(t.shape.boundingSphereRadius + e.shape.boundingSphereRadius, 2) > o.norm2();
                }, Broadphase.prototype.aabbQuery = function (t, e, o) {
                    return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),
                        [];
                };
            }, {
                "../math/Quaternion": 29,
                "../math/Vec3": 31,
                "../objects/Body": 32,
                "../shapes/Plane": 43,
                "../shapes/Shape": 44
            }],
            6: [function (t, e, o) {
                e.exports = GridBroadphase;
                var i = t("./Broadphase"), n = t("../math/Vec3"), r = t("../shapes/Shape");
                function GridBroadphase(t, e, o, r, s) {
                    i.apply(this), this.nx = o || 10, this.ny = r || 10, this.nz = s || 10, this.aabbMin = t || new n(100, 100, 100),
                        this.aabbMax = e || new n(-100, -100, -100);
                    var a = this.nx * this.ny * this.nz;
                    if (a <= 0) throw "GridBroadphase: Each dimension's n must be >0";
                    this.bins = [], this.binLengths = [], this.bins.length = a, this.binLengths.length = a;
                    for (var h = 0; h < a; h++) {
                        this.bins[h] = [], this.binLengths[h] = 0;
                    }
                }
                GridBroadphase.prototype = new i(), GridBroadphase.prototype.constructor = GridBroadphase;
                var s = new n();
                new n();
                GridBroadphase.prototype.collisionPairs = function (t, e, o) {
                    for (var i = t.numObjects(), n = t.bodies, a = this.aabbMax, h = this.aabbMin, l = this.nx, p = this.ny, c = this.nz, u = p * c, d = c, v = 1, y = a.x, f = a.y, m = a.z, w = h.x, x = h.y, g = h.z, b = l / (y - w), B = p / (f - x), A = c / (m - g), S = (y - w) / l, E = (f - x) / p, C = (m - g) / c, M = .5 * Math.sqrt(S * S + E * E + C * C), R = r.types, P = R.SPHERE, q = R.PLANE, z = (R.BOX,
                        R.COMPOUND, R.CONVEXPOLYHEDRON, this.bins), V = this.binLengths, T = this.bins.length, F = 0; F !== T; F++) {
                        V[F] = 0;
                    }
                    var N = Math.ceil;
                    h = Math.min, a = Math.max;
                    function addBoxToBins(t, e, o, i, n, r, s) {
                        var a = (t - w) * b | 0, h = (e - x) * B | 0, y = (o - g) * A | 0, f = N((i - w) * b), m = N((n - x) * B), S = N((r - g) * A);
                        a < 0 ? a = 0 : a >= l && (a = l - 1), h < 0 ? h = 0 : h >= p && (h = p - 1), y < 0 ? y = 0 : y >= c && (y = c - 1),
                            f < 0 ? f = 0 : f >= l && (f = l - 1), m < 0 ? m = 0 : m >= p && (m = p - 1), S < 0 ? S = 0 : S >= c && (S = c - 1),
                            h *= d, y *= v, f *= u, m *= d, S *= v;
                        for (var E = a *= u; E <= f; E += u) {
                            for (var C = h; C <= m; C += d) {
                                for (var M = y; M <= S; M += v) {
                                    var R = E + C + M;
                                    z[R][V[R]++] = s;
                                }
                            }
                        }
                    }
                    for (F = 0; F !== i; F++) {
                        var I = (et = n[F]).shape;
                        switch (I.type) {
                            case P:
                                var W = et.position.x, L = et.position.y, j = et.position.z, O = I.radius;
                                addBoxToBins(W - O, L - O, j - O, W + O, L + O, j + O, et);
                                break;

                            case q:
                                I.worldNormalNeedsUpdate && I.computeWorldNormal(et.quaternion);
                                var k = I.worldNormal, H = w + .5 * S - et.position.x, _ = x + .5 * E - et.position.y, U = g + .5 * C - et.position.z, D = s;
                                D.set(H, _, U);
                                for (var Q = 0, G = 0; Q !== l; Q++, G += u, D.y = _, D.x += S) {
                                    for (var X = 0, Y = 0; X !== p; X++, Y += d, D.z = U, D.y += E) {
                                        for (var K = 0, Z = 0; K !== c; K++, Z += v, D.z += C) {
                                            if (D.dot(k) < M) {
                                                var J = G + Y + Z;
                                                z[J][V[J]++] = et;
                                            }
                                        }
                                    }
                                }
                                break;

                            default:
                                et.aabbNeedsUpdate && et.computeAABB(), addBoxToBins(et.aabb.lowerBound.x, et.aabb.lowerBound.y, et.aabb.lowerBound.z, et.aabb.upperBound.x, et.aabb.upperBound.y, et.aabb.upperBound.z, et);
                        }
                    }
                    for (F = 0; F !== T; F++) {
                        var $ = V[F];
                        if ($ > 1) {
                            var tt = z[F];
                            for (Q = 0; Q !== $; Q++) {
                                var et = tt[Q];
                                for (X = 0; X !== Q; X++) {
                                    var ot = tt[X];
                                    this.needBroadphaseCollision(et, ot) && this.intersectionTest(et, ot, e, o);
                                }
                            }
                        }
                    }
                    this.makePairsUnique(e, o);
                };
            }, {
                "../math/Vec3": 31,
                "../shapes/Shape": 44,
                "./Broadphase": 5
            }],
            7: [function (t, e, o) {
                e.exports = NaiveBroadphase;
                var i = t("./Broadphase"), n = t("./AABB");
                function NaiveBroadphase() {
                    i.apply(this);
                }
                NaiveBroadphase.prototype = new i(), NaiveBroadphase.prototype.constructor = NaiveBroadphase,
                    NaiveBroadphase.prototype.collisionPairs = function (t, e, o) {
                        var i, n, r, s, a = t.bodies, h = a.length;
                        for (i = 0; i !== h; i++) {
                            for (n = 0; n !== i; n++) {
                                r = a[i], s = a[n], this.needBroadphaseCollision(r, s) && this.intersectionTest(r, s, e, o);
                            }
                        }
                    };
                new n();
                NaiveBroadphase.prototype.aabbQuery = function (t, e, o) {
                    o = o || [];
                    for (var i = 0; i < t.bodies.length; i++) {
                        var n = t.bodies[i];
                        n.aabbNeedsUpdate && n.computeAABB(), n.aabb.overlaps(e) && o.push(n);
                    }
                    return o;
                };
            }, {
                "./AABB": 3,
                "./Broadphase": 5
            }],
            8: [function (t, e, o) {
                function ObjectCollisionMatrix() {
                    this.matrix = {};
                }
                e.exports = ObjectCollisionMatrix, ObjectCollisionMatrix.prototype.get = function (t, e) {
                    if (t = t.id, (e = e.id) > t) {
                        var o = e;
                        e = t, t = o;
                    }
                    return t + "-" + e in this.matrix;
                }, ObjectCollisionMatrix.prototype.set = function (t, e, o) {
                    if (t = t.id, (e = e.id) > t) {
                        var i = e;
                        e = t, t = i;
                    }
                    o ? this.matrix[t + "-" + e] = !0 : delete this.matrix[t + "-" + e];
                }, ObjectCollisionMatrix.prototype.reset = function () {
                    this.matrix = {};
                }, ObjectCollisionMatrix.prototype.setNumObjects = function (t) { };
            }, {}],
            9: [function (t, e, o) {
                function OverlapKeeper() {
                    this.current = [], this.previous = [];
                }
                function unpackAndPush(t, e) {
                    t.push((4294901760 & e) >> 16, 65535 & e);
                }
                e.exports = OverlapKeeper, OverlapKeeper.prototype.getKey = function (t, e) {
                    if (e < t) {
                        var o = e;
                        e = t, t = o;
                    }
                    return t << 16 | e;
                }, OverlapKeeper.prototype.set = function (t, e) {
                    for (var o = this.getKey(t, e), i = this.current, n = 0; o > i[n];) {
                        n++;
                    }
                    if (o !== i[n]) {
                        for (e = i.length - 1; e >= n; e--) {
                            i[e + 1] = i[e];
                        }
                        i[n] = o;
                    }
                }, OverlapKeeper.prototype.tick = function () {
                    var t = this.current;
                    this.current = this.previous, this.previous = t, this.current.length = 0;
                }, OverlapKeeper.prototype.getDiff = function (t, e) {
                    for (var o = this.current, i = this.previous, n = o.length, r = i.length, s = 0, a = 0; a < n; a++) {
                        for (var h = o[a]; h > i[s];) {
                            s++;
                        }
                        h === i[s] || unpackAndPush(t, h);
                    }
                    s = 0;
                    for (a = 0; a < r; a++) {
                        for (var l = i[a]; l > o[s];) {
                            s++;
                        }
                        o[s] === l || unpackAndPush(e, l);
                    }
                };
            }, {}],
            10: [function (t, e, o) {
                e.exports = Ray;
                var i = t("../math/Vec3"), n = t("../math/Quaternion"), r = t("../math/Transform"), s = (t("../shapes/ConvexPolyhedron"),
                    t("../shapes/Box"), t("../collision/RaycastResult")), a = t("../shapes/Shape"), h = t("../collision/AABB");
                function Ray(t, e) {
                    this.from = t ? t.clone() : new i(), this.to = e ? e.clone() : new i(), this._direction = new i(),
                        this.precision = 1e-4, this.checkCollisionResponse = !0, this.skipBackfaces = !1,
                        this.collisionFilterMask = -1, this.collisionFilterGroup = -1, this.mode = Ray.ANY,
                        this.result = new s(), this.hasHit = !1, this.callback = function (t) { };
                }
                Ray.prototype.constructor = Ray, Ray.CLOSEST = 1, Ray.ANY = 2, Ray.ALL = 4;
                var l = new h(), p = [];
                Ray.prototype.intersectWorld = function (t, e) {
                    return this.mode = e.mode || Ray.ANY, this.result = e.result || new s(), this.skipBackfaces = !!e.skipBackfaces,
                        this.collisionFilterMask = void 0 !== e.collisionFilterMask ? e.collisionFilterMask : -1,
                        this.collisionFilterGroup = void 0 !== e.collisionFilterGroup ? e.collisionFilterGroup : -1,
                        e.from && this.from.copy(e.from), e.to && this.to.copy(e.to), this.callback = e.callback || function () { },
                        this.hasHit = !1, this.result.reset(), this._updateDirection(), this.getAABB(l),
                        p.length = 0, t.broadphase.aabbQuery(t, l, p), this.intersectBodies(p), this.hasHit;
                };
                var c = new i(), u = new i();
                function pointInTriangle(t, e, o, i) {
                    i.vsub(e, N), o.vsub(e, c), t.vsub(e, u);
                    var n, r, s = N.dot(N), a = N.dot(c), h = N.dot(u), l = c.dot(c), p = c.dot(u);
                    return (n = l * h - a * p) >= 0 && (r = s * p - a * h) >= 0 && n + r < s * l - a * a;
                }
                Ray.pointInTriangle = pointInTriangle;
                var d = new i(), v = new n();
                Ray.prototype.intersectBody = function (t, e) {
                    e && (this.result = e, this._updateDirection());
                    var o = this.checkCollisionResponse;
                    if ((!o || t.collisionResponse) && 0 != (this.collisionFilterGroup & t.collisionFilterMask) && 0 != (t.collisionFilterGroup & this.collisionFilterMask)) for (var i = d, n = v, r = 0, s = t.shapes.length; r < s; r++) {
                        var a = t.shapes[r];
                        if ((!o || a.collisionResponse) && (t.quaternion.mult(t.shapeOrientations[r], n),
                            t.quaternion.vmult(t.shapeOffsets[r], i), i.vadd(t.position, i), this.intersectShape(a, n, i, t),
                            this.result._shouldStop)) break;
                    }
                }, Ray.prototype.intersectBodies = function (t, e) {
                    e && (this.result = e, this._updateDirection());
                    for (var o = 0, i = t.length; !this.result._shouldStop && o < i; o++) {
                        this.intersectBody(t[o]);
                    }
                }, Ray.prototype._updateDirection = function () {
                    this.to.vsub(this.from, this._direction), this._direction.normalize();
                }, Ray.prototype.intersectShape = function (t, e, o, i) {
                    if (!(function (t, e, o) {
                        o.vsub(t, N);
                        var i = N.dot(e);
                        return e.mult(i, I), I.vadd(t, I), o.distanceTo(I);
                    }(this.from, this._direction, o) > t.boundingSphereRadius)) {
                        var n = this[t.type];
                        n && n.call(this, t, e, o, i, t);
                    }
                };
                new i(), new i();
                var y = new i(), f = new i(), m = new i(), w = new i();
                new i(), new s();
                Ray.prototype.intersectBox = function (t, e, o, i, n) {
                    return this.intersectConvex(t.convexPolyhedronRepresentation, e, o, i, n);
                }, Ray.prototype[a.types.BOX] = Ray.prototype.intersectBox, Ray.prototype.intersectPlane = function (t, e, o, n, r) {
                    var s = this.from, a = this.to, h = this._direction, l = new i(0, 0, 1);
                    e.vmult(l, l);
                    var p = new i();
                    s.vsub(o, p);
                    var c = p.dot(l);
                    if (a.vsub(o, p), !(c * p.dot(l) > 0 || s.distanceTo(a) < c)) {
                        var u = l.dot(h);
                        if (!(Math.abs(u) < this.precision)) {
                            var d = new i(), v = new i(), y = new i();
                            s.vsub(o, d);
                            var f = -l.dot(d) / u;
                            h.scale(f, v), s.vadd(v, y), this.reportIntersection(l, y, r, n, -1);
                        }
                    }
                }, Ray.prototype[a.types.PLANE] = Ray.prototype.intersectPlane, Ray.prototype.getAABB = function (t) {
                    var e = this.to, o = this.from;
                    t.lowerBound.x = Math.min(e.x, o.x), t.lowerBound.y = Math.min(e.y, o.y), t.lowerBound.z = Math.min(e.z, o.z),
                        t.upperBound.x = Math.max(e.x, o.x), t.upperBound.y = Math.max(e.y, o.y), t.upperBound.z = Math.max(e.z, o.z);
                };
                var x = {
                    faceList: [0]
                }, g = new i(), b = new Ray(), B = [];
                Ray.prototype.intersectHeightfield = function (t, e, o, i, n) {
                    t.data, t.elementSize;
                    var s = b;
                    s.from.copy(this.from), s.to.copy(this.to), r.pointToLocalFrame(o, e, s.from, s.from),
                        r.pointToLocalFrame(o, e, s.to, s.to), s._updateDirection();
                    var a, l, p, c, u = B;
                    a = l = 0, p = c = t.data.length - 1;
                    var d = new h();
                    s.getAABB(d), t.getIndexOfPosition(d.lowerBound.x, d.lowerBound.y, u, !0), a = Math.max(a, u[0]),
                        l = Math.max(l, u[1]), t.getIndexOfPosition(d.upperBound.x, d.upperBound.y, u, !0),
                        p = Math.min(p, u[0] + 1), c = Math.min(c, u[1] + 1);
                    for (var v = a; v < p; v++) {
                        for (var y = l; y < c; y++) {
                            if (this.result._shouldStop) return;
                            if (t.getAabbAtIndex(v, y, d), d.overlapsRay(s)) {
                                if (t.getConvexTrianglePillar(v, y, !1), r.pointToWorldFrame(o, e, t.pillarOffset, g),
                                    this.intersectConvex(t.pillarConvex, e, g, i, n, x), this.result._shouldStop) return;
                                t.getConvexTrianglePillar(v, y, !0), r.pointToWorldFrame(o, e, t.pillarOffset, g),
                                    this.intersectConvex(t.pillarConvex, e, g, i, n, x);
                            }
                        }
                    }
                }, Ray.prototype[a.types.HEIGHTFIELD] = Ray.prototype.intersectHeightfield;
                var A = new i(), S = new i();
                Ray.prototype.intersectSphere = function (t, e, o, i, n) {
                    var r = this.from, s = this.to, a = t.radius, h = Math.pow(s.x - r.x, 2) + Math.pow(s.y - r.y, 2) + Math.pow(s.z - r.z, 2), l = 2 * ((s.x - r.x) * (r.x - o.x) + (s.y - r.y) * (r.y - o.y) + (s.z - r.z) * (r.z - o.z)), p = Math.pow(r.x - o.x, 2) + Math.pow(r.y - o.y, 2) + Math.pow(r.z - o.z, 2) - Math.pow(a, 2), c = Math.pow(l, 2) - 4 * h * p, u = A, d = S;
                    if (!(c < 0)) if (0 === c) r.lerp(s, c, u), u.vsub(o, d), d.normalize(), this.reportIntersection(d, u, n, i, -1); else {
                        var v = (-l - Math.sqrt(c)) / (2 * h), y = (-l + Math.sqrt(c)) / (2 * h);
                        if (v >= 0 && v <= 1 && (r.lerp(s, v, u), u.vsub(o, d), d.normalize(), this.reportIntersection(d, u, n, i, -1)),
                            this.result._shouldStop) return;
                        y >= 0 && y <= 1 && (r.lerp(s, y, u), u.vsub(o, d), d.normalize(), this.reportIntersection(d, u, n, i, -1));
                    }
                }, Ray.prototype[a.types.SPHERE] = Ray.prototype.intersectSphere;
                var E = new i(), C = (new i(), new i(), new i());
                Ray.prototype.intersectConvex = function (t, e, o, i, n, r) {
                    for (var s = E, a = C, h = r && r.faceList || null, l = t.faces, p = t.vertices, c = t.faceNormals, u = this._direction, d = this.from, v = this.to, x = d.distanceTo(v), g = h ? h.length : l.length, b = this.result, B = 0; !b._shouldStop && B < g; B++) {
                        var A = h ? h[B] : B, S = l[A], M = c[A], R = e, P = o;
                        a.copy(p[S[0]]), R.vmult(a, a), a.vadd(P, a), a.vsub(d, a), R.vmult(M, s);
                        var q = u.dot(s);
                        if (!(Math.abs(q) < this.precision)) {
                            var z = s.dot(a) / q;
                            if (!(z < 0)) {
                                u.mult(z, y), y.vadd(d, y), f.copy(p[S[0]]), R.vmult(f, f), P.vadd(f, f);
                                for (var V = 1; !b._shouldStop && V < S.length - 1; V++) {
                                    m.copy(p[S[V]]), w.copy(p[S[V + 1]]), R.vmult(m, m), R.vmult(w, w), P.vadd(m, m),
                                        P.vadd(w, w);
                                    var T = y.distanceTo(d);
                                    !pointInTriangle(y, f, m, w) && !pointInTriangle(y, m, f, w) || T > x || this.reportIntersection(s, y, n, i, A);
                                }
                            }
                        }
                    }
                }, Ray.prototype[a.types.CONVEXPOLYHEDRON] = Ray.prototype.intersectConvex;
                var M = new i(), R = new i(), P = new i(), q = new i(), z = new i(), V = new i(), T = (new h(),
                    []), F = new r();
                Ray.prototype.intersectTrimesh = function (t, e, o, i, n, s) {
                    var a = M, h = T, l = F, p = C, c = R, u = P, d = q, v = V, x = z, g = (s && s.faceList,
                        t.indices), b = (t.vertices, t.faceNormals, this.from), B = this.to, A = this._direction;
                    l.position.copy(o), l.quaternion.copy(e), r.vectorToLocalFrame(o, e, A, c), r.pointToLocalFrame(o, e, b, u),
                        r.pointToLocalFrame(o, e, B, d), d.x *= t.scale.x, d.y *= t.scale.y, d.z *= t.scale.z,
                        u.x *= t.scale.x, u.y *= t.scale.y, u.z *= t.scale.z, d.vsub(u, c), c.normalize();
                    var S = u.distanceSquared(d);
                    t.tree.rayQuery(this, l, h);
                    for (var E = 0, N = h.length; !this.result._shouldStop && E !== N; E++) {
                        var I = h[E];
                        t.getNormal(I, a), t.getVertex(g[3 * I], f), f.vsub(u, p);
                        var W = c.dot(a), L = a.dot(p) / W;
                        if (!(L < 0)) {
                            c.scale(L, y), y.vadd(u, y), t.getVertex(g[3 * I + 1], m), t.getVertex(g[3 * I + 2], w);
                            var j = y.distanceSquared(u);
                            !pointInTriangle(y, m, f, w) && !pointInTriangle(y, f, m, w) || j > S || (r.vectorToWorldFrame(e, a, x),
                                r.pointToWorldFrame(o, e, y, v), this.reportIntersection(x, v, n, i, I));
                        }
                    }
                    h.length = 0;
                }, Ray.prototype[a.types.TRIMESH] = Ray.prototype.intersectTrimesh, Ray.prototype.reportIntersection = function (t, e, o, i, n) {
                    var r = this.from, s = this.to, a = r.distanceTo(e), h = this.result;
                    if (!(this.skipBackfaces && t.dot(this._direction) > 0)) switch (h.hitFaceIndex = void 0 !== n ? n : -1,
                        this.mode) {
                            case Ray.ALL:
                                this.hasHit = !0, h.set(r, s, t, e, o, i, a), h.hasHit = !0, this.callback(h);
                                break;

                            case Ray.CLOSEST:
                                (a < h.distance || !h.hasHit) && (this.hasHit = !0, h.hasHit = !0, h.set(r, s, t, e, o, i, a));
                                break;

                            case Ray.ANY:
                                this.hasHit = !0, h.hasHit = !0, h.set(r, s, t, e, o, i, a), h._shouldStop = !0;
                        }
                };
                var N = new i(), I = new i();
            }, {
                "../collision/AABB": 3,
                "../collision/RaycastResult": 11,
                "../math/Quaternion": 29,
                "../math/Transform": 30,
                "../math/Vec3": 31,
                "../shapes/Box": 38,
                "../shapes/ConvexPolyhedron": 39,
                "../shapes/Shape": 44
            }],
            11: [function (t, e, o) {
                var i = t("../math/Vec3");
                function RaycastResult() {
                    this.rayFromWorld = new i(), this.rayToWorld = new i(), this.hitNormalWorld = new i(),
                        this.hitPointWorld = new i(), this.hasHit = !1, this.shape = null, this.body = null,
                        this.hitFaceIndex = -1, this.distance = -1, this._shouldStop = !1;
                }
                e.exports = RaycastResult, RaycastResult.prototype.reset = function () {
                    this.rayFromWorld.setZero(), this.rayToWorld.setZero(), this.hitNormalWorld.setZero(),
                        this.hitPointWorld.setZero(), this.hasHit = !1, this.shape = null, this.body = null,
                        this.hitFaceIndex = -1, this.distance = -1, this._shouldStop = !1;
                }, RaycastResult.prototype.abort = function () {
                    this._shouldStop = !0;
                }, RaycastResult.prototype.set = function (t, e, o, i, n, r, s) {
                    this.rayFromWorld.copy(t), this.rayToWorld.copy(e), this.hitNormalWorld.copy(o),
                        this.hitPointWorld.copy(i), this.shape = n, this.body = r, this.distance = s;
                };
            }, {
                "../math/Vec3": 31
            }],
            12: [function (t, e, o) {
                t("../shapes/Shape");
                var i = t("../collision/Broadphase");
                function SAPBroadphase(t) {
                    i.apply(this), this.axisList = [], this.world = null, this.axisIndex = 0;
                    var e = this.axisList;
                    this._addBodyHandler = function (t) {
                        e.push(t.body);
                    }, this._removeBodyHandler = function (t) {
                        var o = e.indexOf(t.body);
                        -1 !== o && e.splice(o, 1);
                    }, t && this.setWorld(t);
                }
                e.exports = SAPBroadphase, SAPBroadphase.prototype = new i(), SAPBroadphase.prototype.setWorld = function (t) {
                    this.axisList.length = 0;
                    for (var e = 0; e < t.bodies.length; e++) {
                        this.axisList.push(t.bodies[e]);
                    }
                    t.removeEventListener("addBody", this._addBodyHandler), t.removeEventListener("removeBody", this._removeBodyHandler),
                        t.addEventListener("addBody", this._addBodyHandler), t.addEventListener("removeBody", this._removeBodyHandler),
                        this.world = t, this.dirty = !0;
                }, SAPBroadphase.insertionSortX = function (t) {
                    for (var e = 1, o = t.length; e < o; e++) {
                        for (var i = t[e], n = e - 1; n >= 0 && !(t[n].aabb.lowerBound.x <= i.aabb.lowerBound.x); n--) {
                            t[n + 1] = t[n];
                        }
                        t[n + 1] = i;
                    }
                    return t;
                }, SAPBroadphase.insertionSortY = function (t) {
                    for (var e = 1, o = t.length; e < o; e++) {
                        for (var i = t[e], n = e - 1; n >= 0 && !(t[n].aabb.lowerBound.y <= i.aabb.lowerBound.y); n--) {
                            t[n + 1] = t[n];
                        }
                        t[n + 1] = i;
                    }
                    return t;
                }, SAPBroadphase.insertionSortZ = function (t) {
                    for (var e = 1, o = t.length; e < o; e++) {
                        for (var i = t[e], n = e - 1; n >= 0 && !(t[n].aabb.lowerBound.z <= i.aabb.lowerBound.z); n--) {
                            t[n + 1] = t[n];
                        }
                        t[n + 1] = i;
                    }
                    return t;
                }, SAPBroadphase.prototype.collisionPairs = function (t, e, o) {
                    var i, n, r = this.axisList, s = r.length, a = this.axisIndex;
                    for (this.dirty && (this.sortList(), this.dirty = !1), i = 0; i !== s; i++) {
                        var h = r[i];
                        for (n = i + 1; n < s; n++) {
                            var l = r[n];
                            if (this.needBroadphaseCollision(h, l)) {
                                if (!SAPBroadphase.checkBounds(h, l, a)) break;
                                this.intersectionTest(h, l, e, o);
                            }
                        }
                    }
                }, SAPBroadphase.prototype.sortList = function () {
                    for (var t = this.axisList, e = this.axisIndex, o = t.length, i = 0; i !== o; i++) {
                        var n = t[i];
                        n.aabbNeedsUpdate && n.computeAABB();
                    }
                    0 === e ? SAPBroadphase.insertionSortX(t) : 1 === e ? SAPBroadphase.insertionSortY(t) : 2 === e && SAPBroadphase.insertionSortZ(t);
                }, SAPBroadphase.checkBounds = function (t, e, o) {
                    var i, n;
                    0 === o ? (i = t.position.x, n = e.position.x) : 1 === o ? (i = t.position.y, n = e.position.y) : 2 === o && (i = t.position.z,
                        n = e.position.z);
                    var r = t.boundingRadius, s = e.boundingRadius;
                    return n - s < i + r;
                }, SAPBroadphase.prototype.autoDetectAxis = function () {
                    for (var t = 0, e = 0, o = 0, i = 0, n = 0, r = 0, s = this.axisList, a = s.length, h = 1 / a, l = 0; l !== a; l++) {
                        var p = s[l], c = p.position.x;
                        t += c, e += c * c;
                        var u = p.position.y;
                        o += u, i += u * u;
                        var d = p.position.z;
                        n += d, r += d * d;
                    }
                    var v = e - t * t * h, y = i - o * o * h, f = r - n * n * h;
                    this.axisIndex = v > y ? v > f ? 0 : 2 : y > f ? 1 : 2;
                }, SAPBroadphase.prototype.aabbQuery = function (t, e, o) {
                    o = o || [], this.dirty && (this.sortList(), this.dirty = !1);
                    var i = this.axisIndex, n = "x";
                    1 === i && (n = "y"), 2 === i && (n = "z");
                    for (var r = this.axisList, s = (e.lowerBound[n], e.upperBound[n], 0); s < r.length; s++) {
                        var a = r[s];
                        a.aabbNeedsUpdate && a.computeAABB(), a.aabb.overlaps(e) && o.push(a);
                    }
                    return o;
                };
            }, {
                "../collision/Broadphase": 5,
                "../shapes/Shape": 44
            }],
            13: [function (t, e, o) {
                e.exports = ConeTwistConstraint;
                t("./Constraint");
                var i = t("./PointToPointConstraint"), n = t("../equations/ConeEquation"), r = t("../equations/RotationalEquation"), s = (t("../equations/ContactEquation"),
                    t("../math/Vec3"));
                function ConeTwistConstraint(t, e, o) {
                    var a = void 0 !== (o = o || {}).maxForce ? o.maxForce : 1e6, h = o.pivotA ? o.pivotA.clone() : new s(), l = o.pivotB ? o.pivotB.clone() : new s();
                    this.axisA = o.axisA ? o.axisA.clone() : new s(), this.axisB = o.axisB ? o.axisB.clone() : new s(),
                        i.call(this, t, h, e, l, a), this.collideConnected = !!o.collideConnected, this.angle = void 0 !== o.angle ? o.angle : 0;
                    var p = this.coneEquation = new n(t, e, o), c = this.twistEquation = new r(t, e, o);
                    this.twistAngle = void 0 !== o.twistAngle ? o.twistAngle : 0, p.maxForce = 0, p.minForce = -a,
                        c.maxForce = 0, c.minForce = -a, this.equations.push(p, c);
                }
                ConeTwistConstraint.prototype = new i(), ConeTwistConstraint.constructor = ConeTwistConstraint;
                new s(), new s();
                ConeTwistConstraint.prototype.update = function () {
                    var t = this.bodyA, e = this.bodyB, o = this.coneEquation, n = this.twistEquation;
                    i.prototype.update.call(this), t.vectorToWorldFrame(this.axisA, o.axisA), e.vectorToWorldFrame(this.axisB, o.axisB),
                        this.axisA.tangents(n.axisA, n.axisA), t.vectorToWorldFrame(n.axisA, n.axisA), this.axisB.tangents(n.axisB, n.axisB),
                        e.vectorToWorldFrame(n.axisB, n.axisB), o.angle = this.angle, n.maxAngle = this.twistAngle;
                };
            }, {
                "../equations/ConeEquation": 19,
                "../equations/ContactEquation": 20,
                "../equations/RotationalEquation": 23,
                "../math/Vec3": 31,
                "./Constraint": 14,
                "./PointToPointConstraint": 18
            }],
            14: [function (t, e, o) {
                e.exports = Constraint;
                var i = t("../utils/Utils");
                function Constraint(t, e, o) {
                    o = i.defaults(o, {
                        collideConnected: !0,
                        wakeUpBodies: !0
                    }), this.equations = [], this.bodyA = t, this.bodyB = e, this.id = Constraint.idCounter++,
                        this.collideConnected = o.collideConnected, o.wakeUpBodies && (t && t.wakeUp(),
                            e && e.wakeUp());
                }
                Constraint.prototype.update = function () {
                    throw new Error("method update() not implmemented in this Constraint subclass!");
                }, Constraint.prototype.enable = function () {
                    for (var t = this.equations, e = 0; e < t.length; e++) {
                        t[e].enabled = !0;
                    }
                }, Constraint.prototype.disable = function () {
                    for (var t = this.equations, e = 0; e < t.length; e++) {
                        t[e].enabled = !1;
                    }
                }, Constraint.idCounter = 0;
            }, {
                "../utils/Utils": 54
            }],
            15: [function (t, e, o) {
                e.exports = DistanceConstraint;
                var i = t("./Constraint"), n = t("../equations/ContactEquation");
                function DistanceConstraint(t, e, o, r) {
                    i.call(this, t, e), void 0 === o && (o = t.position.distanceTo(e.position)), void 0 === r && (r = 1e6),
                        this.distance = o;
                    var s = this.distanceEquation = new n(t, e);
                    this.equations.push(s), s.minForce = -r, s.maxForce = r;
                }
                DistanceConstraint.prototype = new i(), DistanceConstraint.prototype.update = function () {
                    var t = this.bodyA, e = this.bodyB, o = this.distanceEquation, i = .5 * this.distance, n = o.ni;
                    e.position.vsub(t.position, n), n.normalize(), n.mult(i, o.ri), n.mult(-i, o.rj);
                };
            }, {
                "../equations/ContactEquation": 20,
                "./Constraint": 14
            }],
            16: [function (t, e, o) {
                e.exports = HingeConstraint;
                t("./Constraint");
                var i = t("./PointToPointConstraint"), n = t("../equations/RotationalEquation"), r = t("../equations/RotationalMotorEquation"), s = (t("../equations/ContactEquation"),
                    t("../math/Vec3"));
                function HingeConstraint(t, e, o) {
                    var a = void 0 !== (o = o || {}).maxForce ? o.maxForce : 1e6, h = o.pivotA ? o.pivotA.clone() : new s(), l = o.pivotB ? o.pivotB.clone() : new s();
                    i.call(this, t, h, e, l, a), (this.axisA = o.axisA ? o.axisA.clone() : new s(1, 0, 0)).normalize(),
                        (this.axisB = o.axisB ? o.axisB.clone() : new s(1, 0, 0)).normalize();
                    var p = this.rotationalEquation1 = new n(t, e, o), c = this.rotationalEquation2 = new n(t, e, o), u = this.motorEquation = new r(t, e, a);
                    u.enabled = !1, this.equations.push(p, c, u);
                }
                HingeConstraint.prototype = new i(), HingeConstraint.constructor = HingeConstraint,
                    HingeConstraint.prototype.enableMotor = function () {
                        this.motorEquation.enabled = !0;
                    }, HingeConstraint.prototype.disableMotor = function () {
                        this.motorEquation.enabled = !1;
                    }, HingeConstraint.prototype.setMotorSpeed = function (t) {
                        this.motorEquation.targetVelocity = t;
                    }, HingeConstraint.prototype.setMotorMaxForce = function (t) {
                        this.motorEquation.maxForce = t, this.motorEquation.minForce = -t;
                    };
                var a = new s(), h = new s();
                HingeConstraint.prototype.update = function () {
                    var t = this.bodyA, e = this.bodyB, o = this.motorEquation, n = this.rotationalEquation1, r = this.rotationalEquation2, s = a, l = h, p = this.axisA, c = this.axisB;
                    i.prototype.update.call(this), t.quaternion.vmult(p, s), e.quaternion.vmult(c, l),
                        s.tangents(n.axisA, r.axisA), n.axisB.copy(l), r.axisB.copy(l), this.motorEquation.enabled && (t.quaternion.vmult(this.axisA, o.axisA),
                            e.quaternion.vmult(this.axisB, o.axisB));
                };
            }, {
                "../equations/ContactEquation": 20,
                "../equations/RotationalEquation": 23,
                "../equations/RotationalMotorEquation": 24,
                "../math/Vec3": 31,
                "./Constraint": 14,
                "./PointToPointConstraint": 18
            }],
            17: [function (t, e, o) {
                e.exports = LockConstraint;
                t("./Constraint");
                var i = t("./PointToPointConstraint"), n = t("../equations/RotationalEquation"), r = (t("../equations/RotationalMotorEquation"),
                    t("../equations/ContactEquation"), t("../math/Vec3"));
                function LockConstraint(t, e, o) {
                    var s = void 0 !== (o = o || {}).maxForce ? o.maxForce : 1e6, a = new r(), h = new r(), l = new r();
                    t.position.vadd(e.position, l), l.scale(.5, l), e.pointToLocalFrame(l, h), t.pointToLocalFrame(l, a),
                        i.call(this, t, a, e, h, s), this.xA = t.vectorToLocalFrame(r.UNIT_X), this.xB = e.vectorToLocalFrame(r.UNIT_X),
                        this.yA = t.vectorToLocalFrame(r.UNIT_Y), this.yB = e.vectorToLocalFrame(r.UNIT_Y),
                        this.zA = t.vectorToLocalFrame(r.UNIT_Z), this.zB = e.vectorToLocalFrame(r.UNIT_Z);
                    var p = this.rotationalEquation1 = new n(t, e, o), c = this.rotationalEquation2 = new n(t, e, o), u = this.rotationalEquation3 = new n(t, e, o);
                    this.equations.push(p, c, u);
                }
                LockConstraint.prototype = new i(), LockConstraint.constructor = LockConstraint;
                new r(), new r();
                LockConstraint.prototype.update = function () {
                    var t = this.bodyA, e = this.bodyB, o = (this.motorEquation, this.rotationalEquation1), n = this.rotationalEquation2, r = this.rotationalEquation3;
                    i.prototype.update.call(this), t.vectorToWorldFrame(this.xA, o.axisA), e.vectorToWorldFrame(this.yB, o.axisB),
                        t.vectorToWorldFrame(this.yA, n.axisA), e.vectorToWorldFrame(this.zB, n.axisB),
                        t.vectorToWorldFrame(this.zA, r.axisA), e.vectorToWorldFrame(this.xB, r.axisB);
                };
            }, {
                "../equations/ContactEquation": 20,
                "../equations/RotationalEquation": 23,
                "../equations/RotationalMotorEquation": 24,
                "../math/Vec3": 31,
                "./Constraint": 14,
                "./PointToPointConstraint": 18
            }],
            18: [function (t, e, o) {
                e.exports = PointToPointConstraint;
                var i = t("./Constraint"), n = t("../equations/ContactEquation"), r = t("../math/Vec3");
                function PointToPointConstraint(t, e, o, s, a) {
                    i.call(this, t, o), a = void 0 !== a ? a : 1e6, this.pivotA = e ? e.clone() : new r(),
                        this.pivotB = s ? s.clone() : new r();
                    var h = this.equationX = new n(t, o), l = this.equationY = new n(t, o), p = this.equationZ = new n(t, o);
                    this.equations.push(h, l, p), h.minForce = l.minForce = p.minForce = -a, h.maxForce = l.maxForce = p.maxForce = a,
                        h.ni.set(1, 0, 0), l.ni.set(0, 1, 0), p.ni.set(0, 0, 1);
                }
                PointToPointConstraint.prototype = new i(), PointToPointConstraint.prototype.update = function () {
                    var t = this.bodyA, e = this.bodyB, o = this.equationX, i = this.equationY, n = this.equationZ;
                    t.quaternion.vmult(this.pivotA, o.ri), e.quaternion.vmult(this.pivotB, o.rj), i.ri.copy(o.ri),
                        i.rj.copy(o.rj), n.ri.copy(o.ri), n.rj.copy(o.rj);
                };
            }, {
                "../equations/ContactEquation": 20,
                "../math/Vec3": 31,
                "./Constraint": 14
            }],
            19: [function (t, e, o) {
                e.exports = ConeEquation;
                var i = t("../math/Vec3"), n = (t("../math/Mat3"), t("./Equation"));
                function ConeEquation(t, e, o) {
                    var r = void 0 !== (o = o || {}).maxForce ? o.maxForce : 1e6;
                    n.call(this, t, e, -r, r), this.axisA = o.axisA ? o.axisA.clone() : new i(1, 0, 0),
                        this.axisB = o.axisB ? o.axisB.clone() : new i(0, 1, 0), this.angle = void 0 !== o.angle ? o.angle : 0;
                }
                ConeEquation.prototype = new n(), ConeEquation.prototype.constructor = ConeEquation;
                var r = new i(), s = new i();
                ConeEquation.prototype.computeB = function (t) {
                    var e = this.a, o = this.b, i = this.axisA, n = this.axisB, a = r, h = s, l = this.jacobianElementA, p = this.jacobianElementB;
                    return i.cross(n, a), n.cross(i, h), l.rotational.copy(h), p.rotational.copy(a),
                        -(Math.cos(this.angle) - i.dot(n)) * e - this.computeGW() * o - t * this.computeGiMf();
                };
            }, {
                "../math/Mat3": 28,
                "../math/Vec3": 31,
                "./Equation": 21
            }],
            20: [function (t, e, o) {
                e.exports = ContactEquation;
                var i = t("./Equation"), n = t("../math/Vec3");
                t("../math/Mat3");
                function ContactEquation(t, e, o) {
                    o = void 0 !== o ? o : 1e6, i.call(this, t, e, 0, o), this.restitution = 0, this.ri = new n(),
                        this.rj = new n(), this.ni = new n();
                }
                ContactEquation.prototype = new i(), ContactEquation.prototype.constructor = ContactEquation;
                var r = new n(), s = new n(), a = new n();
                ContactEquation.prototype.computeB = function (t) {
                    var e = this.a, o = this.b, i = this.bi, n = this.bj, h = this.ri, l = this.rj, p = r, c = s, u = i.velocity, d = i.angularVelocity, v = (i.force,
                        i.torque, n.velocity), y = n.angularVelocity, f = (n.force, n.torque, a), m = this.jacobianElementA, w = this.jacobianElementB, x = this.ni;
                    h.cross(x, p), l.cross(x, c), x.negate(m.spatial), p.negate(m.rotational), w.spatial.copy(x),
                        w.rotational.copy(c), f.copy(n.position), f.vadd(l, f), f.vsub(i.position, f), f.vsub(h, f);
                    var g = x.dot(f), b = this.restitution + 1;
                    return -g * e - (b * v.dot(x) - b * u.dot(x) + y.dot(c) - d.dot(p)) * o - t * this.computeGiMf();
                };
                var h = new n(), l = new n(), p = new n(), c = new n(), u = new n();
                ContactEquation.prototype.getImpactVelocityAlongNormal = function () {
                    var t = h, e = l, o = p, i = c, n = u;
                    return this.bi.position.vadd(this.ri, o), this.bj.position.vadd(this.rj, i), this.bi.getVelocityAtWorldPoint(o, t),
                        this.bj.getVelocityAtWorldPoint(i, e), t.vsub(e, n), this.ni.dot(n);
                };
            }, {
                "../math/Mat3": 28,
                "../math/Vec3": 31,
                "./Equation": 21
            }],
            21: [function (t, e, o) {
                e.exports = Equation;
                var i = t("../math/JacobianElement"), n = t("../math/Vec3");
                function Equation(t, e, o, n) {
                    this.id = Equation.id++, this.minForce = void 0 === o ? -1e6 : o, this.maxForce = void 0 === n ? 1e6 : n,
                        this.bi = t, this.bj = e, this.a = 0, this.b = 0, this.eps = 0, this.jacobianElementA = new i(),
                        this.jacobianElementB = new i(), this.enabled = !0, this.multiplier = 0, this.setSpookParams(1e7, 4, 1 / 60);
                }
                Equation.prototype.constructor = Equation, Equation.id = 0, Equation.prototype.setSpookParams = function (t, e, o) {
                    var i = e, n = t, r = o;
                    this.a = 4 / (r * (1 + 4 * i)), this.b = 4 * i / (1 + 4 * i), this.eps = 4 / (r * r * n * (1 + 4 * i));
                }, Equation.prototype.computeB = function (t, e, o) {
                    var i = this.computeGW();
                    return -this.computeGq() * t - i * e - this.computeGiMf() * o;
                }, Equation.prototype.computeGq = function () {
                    var t = this.jacobianElementA, e = this.jacobianElementB, o = this.bi, i = this.bj, n = o.position, r = i.position;
                    return t.spatial.dot(n) + e.spatial.dot(r);
                };
                new n();
                Equation.prototype.computeGW = function () {
                    var t = this.jacobianElementA, e = this.jacobianElementB, o = this.bi, i = this.bj, n = o.velocity, r = i.velocity, s = o.angularVelocity, a = i.angularVelocity;
                    return t.multiplyVectors(n, s) + e.multiplyVectors(r, a);
                }, Equation.prototype.computeGWlambda = function () {
                    var t = this.jacobianElementA, e = this.jacobianElementB, o = this.bi, i = this.bj, n = o.vlambda, r = i.vlambda, s = o.wlambda, a = i.wlambda;
                    return t.multiplyVectors(n, s) + e.multiplyVectors(r, a);
                };
                var r = new n(), s = new n(), a = new n(), h = new n();
                Equation.prototype.computeGiMf = function () {
                    var t = this.jacobianElementA, e = this.jacobianElementB, o = this.bi, i = this.bj, n = o.force, l = o.torque, p = i.force, c = i.torque, u = o.invMassSolve, d = i.invMassSolve;
                    return n.scale(u, r), p.scale(d, s), o.invInertiaWorldSolve.vmult(l, a), i.invInertiaWorldSolve.vmult(c, h),
                        t.multiplyVectors(r, a) + e.multiplyVectors(s, h);
                };
                var l = new n();
                Equation.prototype.computeGiMGt = function () {
                    var t = this.jacobianElementA, e = this.jacobianElementB, o = this.bi, i = this.bj, n = o.invMassSolve, r = i.invMassSolve, s = o.invInertiaWorldSolve, a = i.invInertiaWorldSolve, h = n + r;
                    return s.vmult(t.rotational, l), h += l.dot(t.rotational), a.vmult(e.rotational, l),
                        h += l.dot(e.rotational);
                };
                var p = new n();
                new n(), new n(), new n(), new n(), new n();
                Equation.prototype.addToWlambda = function (t) {
                    var e = this.jacobianElementA, o = this.jacobianElementB, i = this.bi, n = this.bj, r = p;
                    i.vlambda.addScaledVector(i.invMassSolve * t, e.spatial, i.vlambda), n.vlambda.addScaledVector(n.invMassSolve * t, o.spatial, n.vlambda),
                        i.invInertiaWorldSolve.vmult(e.rotational, r), i.wlambda.addScaledVector(t, r, i.wlambda),
                        n.invInertiaWorldSolve.vmult(o.rotational, r), n.wlambda.addScaledVector(t, r, n.wlambda);
                }, Equation.prototype.computeC = function () {
                    return this.computeGiMGt() + this.eps;
                };
            }, {
                "../math/JacobianElement": 27,
                "../math/Vec3": 31
            }],
            22: [function (t, e, o) {
                e.exports = FrictionEquation;
                var i = t("./Equation"), n = t("../math/Vec3");
                t("../math/Mat3");
                function FrictionEquation(t, e, o) {
                    i.call(this, t, e, -o, o), this.ri = new n(), this.rj = new n(), this.t = new n();
                }
                FrictionEquation.prototype = new i(), FrictionEquation.prototype.constructor = FrictionEquation;
                var r = new n(), s = new n();
                FrictionEquation.prototype.computeB = function (t) {
                    this.a;
                    var e = this.b, o = (this.bi, this.bj, this.ri), i = this.rj, n = r, a = s, h = this.t;
                    o.cross(h, n), i.cross(h, a);
                    var l = this.jacobianElementA, p = this.jacobianElementB;
                    return h.negate(l.spatial), n.negate(l.rotational), p.spatial.copy(h), p.rotational.copy(a),
                        -this.computeGW() * e - t * this.computeGiMf();
                };
            }, {
                "../math/Mat3": 28,
                "../math/Vec3": 31,
                "./Equation": 21
            }],
            23: [function (t, e, o) {
                e.exports = RotationalEquation;
                var i = t("../math/Vec3"), n = (t("../math/Mat3"), t("./Equation"));
                function RotationalEquation(t, e, o) {
                    var r = void 0 !== (o = o || {}).maxForce ? o.maxForce : 1e6;
                    n.call(this, t, e, -r, r), this.axisA = o.axisA ? o.axisA.clone() : new i(1, 0, 0),
                        this.axisB = o.axisB ? o.axisB.clone() : new i(0, 1, 0), this.maxAngle = Math.PI / 2;
                }
                RotationalEquation.prototype = new n(), RotationalEquation.prototype.constructor = RotationalEquation;
                var r = new i(), s = new i();
                RotationalEquation.prototype.computeB = function (t) {
                    var e = this.a, o = this.b, i = this.axisA, n = this.axisB, a = r, h = s, l = this.jacobianElementA, p = this.jacobianElementB;
                    return i.cross(n, a), n.cross(i, h), l.rotational.copy(h), p.rotational.copy(a),
                        -(Math.cos(this.maxAngle) - i.dot(n)) * e - this.computeGW() * o - t * this.computeGiMf();
                };
            }, {
                "../math/Mat3": 28,
                "../math/Vec3": 31,
                "./Equation": 21
            }],
            24: [function (t, e, o) {
                e.exports = RotationalMotorEquation;
                var i = t("../math/Vec3"), n = (t("../math/Mat3"), t("./Equation"));
                function RotationalMotorEquation(t, e, o) {
                    o = void 0 !== o ? o : 1e6, n.call(this, t, e, -o, o), this.axisA = new i(), this.axisB = new i(),
                        this.targetVelocity = 0;
                }
                RotationalMotorEquation.prototype = new n(), RotationalMotorEquation.prototype.constructor = RotationalMotorEquation,
                    RotationalMotorEquation.prototype.computeB = function (t) {
                        this.a;
                        var e = this.b, o = (this.bi, this.bj, this.axisA), i = this.axisB, n = this.jacobianElementA, r = this.jacobianElementB;
                        return n.rotational.copy(o), i.negate(r.rotational), -(this.computeGW() - this.targetVelocity) * e - t * this.computeGiMf();
                    };
            }, {
                "../math/Mat3": 28,
                "../math/Vec3": 31,
                "./Equation": 21
            }],
            25: [function (t, e, o) {
                var i = t("../utils/Utils");
                function ContactMaterial(t, e, o) {
                    o = i.defaults(o, {
                        friction: .3,
                        restitution: .3,
                        contactEquationStiffness: 1e7,
                        contactEquationRelaxation: 3,
                        frictionEquationStiffness: 1e7,
                        frictionEquationRelaxation: 3
                    }), this.id = ContactMaterial.idCounter++, this.materials = [t, e], this.friction = o.friction,
                        this.restitution = o.restitution, this.contactEquationStiffness = o.contactEquationStiffness,
                        this.contactEquationRelaxation = o.contactEquationRelaxation, this.frictionEquationStiffness = o.frictionEquationStiffness,
                        this.frictionEquationRelaxation = o.frictionEquationRelaxation;
                }
                e.exports = ContactMaterial, ContactMaterial.idCounter = 0;
            }, {
                "../utils/Utils": 54
            }],
            26: [function (t, e, o) {
                function Material(t) {
                    var e = "";
                    "string" == typeof (t = t || {}) ? (e = t, t = {}) : "object" == (0, _typeof2.default)(t) && (e = ""),
                        this.name = e, this.id = Material.idCounter++, this.friction = void 0 !== t.friction ? t.friction : -1,
                        this.restitution = void 0 !== t.restitution ? t.restitution : -1;
                }
                e.exports = Material, Material.idCounter = 0;
            }, {}],
            27: [function (t, e, o) {
                e.exports = JacobianElement;
                var i = t("./Vec3");
                function JacobianElement() {
                    this.spatial = new i(), this.rotational = new i();
                }
                JacobianElement.prototype.multiplyElement = function (t) {
                    return t.spatial.dot(this.spatial) + t.rotational.dot(this.rotational);
                }, JacobianElement.prototype.multiplyVectors = function (t, e) {
                    return t.dot(this.spatial) + e.dot(this.rotational);
                };
            }, {
                "./Vec3": 31
            }],
            28: [function (t, e, o) {
                e.exports = Mat3;
                var i = t("./Vec3");
                function Mat3(t) {
                    this.elements = t || [0, 0, 0, 0, 0, 0, 0, 0, 0];
                }
                Mat3.prototype.identity = function () {
                    var t = this.elements;
                    t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0,
                        t[8] = 1;
                }, Mat3.prototype.setZero = function () {
                    var t = this.elements;
                    t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 0, t[6] = 0, t[7] = 0,
                        t[8] = 0;
                }, Mat3.prototype.setTrace = function (t) {
                    var e = this.elements;
                    e[0] = t.x, e[4] = t.y, e[8] = t.z;
                }, Mat3.prototype.getTrace = function (t) {
                    t = t || new i();
                    var e = this.elements;
                    t.x = e[0], t.y = e[4], t.z = e[8];
                }, Mat3.prototype.vmult = function (t, e) {
                    e = e || new i();
                    var o = this.elements, n = t.x, r = t.y, s = t.z;
                    return e.x = o[0] * n + o[1] * r + o[2] * s, e.y = o[3] * n + o[4] * r + o[5] * s,
                        e.z = o[6] * n + o[7] * r + o[8] * s, e;
                }, Mat3.prototype.smult = function (t) {
                    for (var e = 0; e < this.elements.length; e++) {
                        this.elements[e] *= t;
                    }
                }, Mat3.prototype.mmult = function (t, e) {
                    for (var o = e || new Mat3(), i = 0; i < 3; i++) {
                        for (var n = 0; n < 3; n++) {
                            for (var r = 0, s = 0; s < 3; s++) {
                                r += t.elements[i + 3 * s] * this.elements[s + 3 * n];
                            }
                            o.elements[i + 3 * n] = r;
                        }
                    }
                    return o;
                }, Mat3.prototype.scale = function (t, e) {
                    e = e || new Mat3();
                    for (var o = this.elements, i = e.elements, n = 0; 3 !== n; n++) {
                        i[3 * n + 0] = t.x * o[3 * n + 0], i[3 * n + 1] = t.y * o[3 * n + 1], i[3 * n + 2] = t.z * o[3 * n + 2];
                    }
                    return e;
                }, Mat3.prototype.solve = function (t, e) {
                    e = e || new i();
                    for (var o, n = [], r = 0; r < 12; r++) {
                        n.push(0);
                    }
                    for (r = 0; r < 3; r++) {
                        for (o = 0; o < 3; o++) {
                            n[r + 4 * o] = this.elements[r + 3 * o];
                        }
                    }
                    n[3] = t.x, n[7] = t.y, n[11] = t.z;
                    var s, a, h = 3, l = h;
                    do {
                        if (0 === n[(r = l - h) + 4 * r]) for (o = r + 1; o < l; o++) {
                            if (0 !== n[r + 4 * o]) {
                                s = 4;
                                do {
                                    n[(a = 4 - s) + 4 * r] += n[a + 4 * o];
                                } while (--s);
                                break;
                            }
                        }
                        if (0 !== n[r + 4 * r]) for (o = r + 1; o < l; o++) {
                            var p = n[r + 4 * o] / n[r + 4 * r];
                            s = 4;
                            do {
                                n[(a = 4 - s) + 4 * o] = a <= r ? 0 : n[a + 4 * o] - n[a + 4 * r] * p;
                            } while (--s);
                        }
                    } while (--h);
                    if (e.z = n[11] / n[10], e.y = (n[7] - n[6] * e.z) / n[5], e.x = (n[3] - n[2] * e.z - n[1] * e.y) / n[0],
                        isNaN(e.x) || isNaN(e.y) || isNaN(e.z) || e.x === 1 / 0 || e.y === 1 / 0 || e.z === 1 / 0) throw "Could not solve equation! Got x=[" + e.toString() + "], b=[" + t.toString() + "], A=[" + this.toString() + "]";
                    return e;
                }, Mat3.prototype.e = function (t, e, o) {
                    if (void 0 === o) return this.elements[e + 3 * t];
                    this.elements[e + 3 * t] = o;
                }, Mat3.prototype.copy = function (t) {
                    for (var e = 0; e < t.elements.length; e++) {
                        this.elements[e] = t.elements[e];
                    }
                    return this;
                }, Mat3.prototype.toString = function () {
                    for (var t = "", e = 0; e < 9; e++) {
                        t += this.elements[e] + ",";
                    }
                    return t;
                }, Mat3.prototype.reverse = function (t) {
                    t = t || new Mat3();
                    for (var e, o = [], i = 0; i < 18; i++) {
                        o.push(0);
                    }
                    for (i = 0; i < 3; i++) {
                        for (e = 0; e < 3; e++) {
                            o[i + 6 * e] = this.elements[i + 3 * e];
                        }
                    }
                    o[3] = 1, o[9] = 0, o[15] = 0, o[4] = 0, o[10] = 1, o[16] = 0, o[5] = 0, o[11] = 0,
                        o[17] = 1;
                    var n, r, s = 3, a = s;
                    do {
                        if (0 === o[(i = a - s) + 6 * i]) for (e = i + 1; e < a; e++) {
                            if (0 !== o[i + 6 * e]) {
                                n = 6;
                                do {
                                    o[(r = 6 - n) + 6 * i] += o[r + 6 * e];
                                } while (--n);
                                break;
                            }
                        }
                        if (0 !== o[i + 6 * i]) for (e = i + 1; e < a; e++) {
                            var h = o[i + 6 * e] / o[i + 6 * i];
                            n = 6;
                            do {
                                o[(r = 6 - n) + 6 * e] = r <= i ? 0 : o[r + 6 * e] - o[r + 6 * i] * h;
                            } while (--n);
                        }
                    } while (--s);
                    i = 2;
                    do {
                        e = i - 1;
                        do {
                            h = o[i + 6 * e] / o[i + 6 * i];
                            n = 6;
                            do {
                                o[(r = 6 - n) + 6 * e] = o[r + 6 * e] - o[r + 6 * i] * h;
                            } while (--n);
                        } while (e--);
                    } while (--i);
                    i = 2;
                    do {
                        h = 1 / o[i + 6 * i];
                        n = 6;
                        do {
                            o[(r = 6 - n) + 6 * i] = o[r + 6 * i] * h;
                        } while (--n);
                    } while (i--);
                    i = 2;
                    do {
                        e = 2;
                        do {
                            if (r = o[3 + e + 6 * i], isNaN(r) || r === 1 / 0) throw "Could not reverse! A=[" + this.toString() + "]";
                            t.e(i, e, r);
                        } while (e--);
                    } while (i--);
                    return t;
                }, Mat3.prototype.setRotationFromQuaternion = function (t) {
                    var e = t.x, o = t.y, i = t.z, n = t.w, r = e + e, s = o + o, a = i + i, h = e * r, l = e * s, p = e * a, c = o * s, u = o * a, d = i * a, v = n * r, y = n * s, f = n * a, m = this.elements;
                    return m[0] = 1 - (c + d), m[1] = l - f, m[2] = p + y, m[3] = l + f, m[4] = 1 - (h + d),
                        m[5] = u - v, m[6] = p - y, m[7] = u + v, m[8] = 1 - (h + c), this;
                }, Mat3.prototype.transpose = function (t) {
                    for (var e = (t = t || new Mat3()).elements, o = this.elements, i = 0; 3 !== i; i++) {
                        for (var n = 0; 3 !== n; n++) {
                            e[3 * i + n] = o[3 * n + i];
                        }
                    }
                    return t;
                };
            }, {
                "./Vec3": 31
            }],
            29: [function (t, e, o) {
                e.exports = Quaternion;
                var i = t("./Vec3");
                function Quaternion(t, e, o, i) {
                    this.x = void 0 !== t ? t : 0, this.y = void 0 !== e ? e : 0, this.z = void 0 !== o ? o : 0,
                        this.w = void 0 !== i ? i : 1;
                }
                Quaternion.prototype.set = function (t, e, o, i) {
                    return this.x = t, this.y = e, this.z = o, this.w = i, this;
                }, Quaternion.prototype.toString = function () {
                    return this.x + "," + this.y + "," + this.z + "," + this.w;
                }, Quaternion.prototype.toArray = function () {
                    return [this.x, this.y, this.z, this.w];
                }, Quaternion.prototype.setFromAxisAngle = function (t, e) {
                    var o = Math.sin(.5 * e);
                    return this.x = t.x * o, this.y = t.y * o, this.z = t.z * o, this.w = Math.cos(.5 * e),
                        this;
                }, Quaternion.prototype.toAxisAngle = function (t) {
                    t = t || new i(), this.normalize();
                    var e = 2 * Math.acos(this.w), o = Math.sqrt(1 - this.w * this.w);
                    return o < .001 ? (t.x = this.x, t.y = this.y, t.z = this.z) : (t.x = this.x / o,
                        t.y = this.y / o, t.z = this.z / o), [t, e];
                };
                var n = new i(), r = new i();
                Quaternion.prototype.setFromVectors = function (t, e) {
                    if (t.isAntiparallelTo(e)) {
                        var o = n, i = r;
                        t.tangents(o, i), this.setFromAxisAngle(o, Math.PI);
                    } else {
                        var s = t.cross(e);
                        this.x = s.x, this.y = s.y, this.z = s.z, this.w = Math.sqrt(Math.pow(t.norm(), 2) * Math.pow(e.norm(), 2)) + t.dot(e),
                            this.normalize();
                    }
                    return this;
                };
                new i(), new i(), new i();
                Quaternion.prototype.mult = function (t, e) {
                    e = e || new Quaternion();
                    var o = this.x, i = this.y, n = this.z, r = this.w, s = t.x, a = t.y, h = t.z, l = t.w;
                    return e.x = o * l + r * s + i * h - n * a, e.y = i * l + r * a + n * s - o * h,
                        e.z = n * l + r * h + o * a - i * s, e.w = r * l - o * s - i * a - n * h, e;
                }, Quaternion.prototype.inverse = function (t) {
                    var e = this.x, o = this.y, i = this.z, n = this.w;
                    t = t || new Quaternion(), this.conjugate(t);
                    var r = 1 / (e * e + o * o + i * i + n * n);
                    return t.x *= r, t.y *= r, t.z *= r, t.w *= r, t;
                }, Quaternion.prototype.conjugate = function (t) {
                    return (t = t || new Quaternion()).x = -this.x, t.y = -this.y, t.z = -this.z, t.w = this.w,
                        t;
                }, Quaternion.prototype.normalize = function () {
                    var t = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
                    return 0 === t ? (this.x = 0, this.y = 0, this.z = 0, this.w = 0) : (t = 1 / t,
                        this.x *= t, this.y *= t, this.z *= t, this.w *= t), this;
                }, Quaternion.prototype.normalizeFast = function () {
                    var t = (3 - (this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)) / 2;
                    return 0 === t ? (this.x = 0, this.y = 0, this.z = 0, this.w = 0) : (this.x *= t,
                        this.y *= t, this.z *= t, this.w *= t), this;
                }, Quaternion.prototype.vmult = function (t, e) {
                    e = e || new i();
                    var o = t.x, n = t.y, r = t.z, s = this.x, a = this.y, h = this.z, l = this.w, p = l * o + a * r - h * n, c = l * n + h * o - s * r, u = l * r + s * n - a * o, d = -s * o - a * n - h * r;
                    return e.x = p * l + d * -s + c * -h - u * -a, e.y = c * l + d * -a + u * -s - p * -h,
                        e.z = u * l + d * -h + p * -a - c * -s, e;
                }, Quaternion.prototype.copy = function (t) {
                    return this.x = t.x, this.y = t.y, this.z = t.z, this.w = t.w, this;
                }, Quaternion.prototype.toEuler = function (t, e) {
                    var o, i, n;
                    e = e || "YZX";
                    var r = this.x, s = this.y, a = this.z, h = this.w;
                    switch (e) {
                        case "YZX":
                            var l = r * s + a * h;
                            if (l > .499 && (o = 2 * Math.atan2(r, h), i = Math.PI / 2, n = 0), l < -.499 && (o = -2 * Math.atan2(r, h),
                                i = -Math.PI / 2, n = 0), isNaN(o)) {
                                var p = r * r, c = s * s, u = a * a;
                                o = Math.atan2(2 * s * h - 2 * r * a, 1 - 2 * c - 2 * u), i = Math.asin(2 * l),
                                    n = Math.atan2(2 * r * h - 2 * s * a, 1 - 2 * p - 2 * u);
                            }
                            break;

                        default:
                            throw new Error("Euler order " + e + " not supported yet.");
                    }
                    t.y = o, t.z = i, t.x = n;
                }, Quaternion.prototype.setFromEuler = function (t, e, o, i) {
                    i = i || "XYZ";
                    var n = Math.cos(t / 2), r = Math.cos(e / 2), s = Math.cos(o / 2), a = Math.sin(t / 2), h = Math.sin(e / 2), l = Math.sin(o / 2);
                    return "XYZ" === i ? (this.x = a * r * s + n * h * l, this.y = n * h * s - a * r * l,
                        this.z = n * r * l + a * h * s, this.w = n * r * s - a * h * l) : "YXZ" === i ? (this.x = a * r * s + n * h * l,
                            this.y = n * h * s - a * r * l, this.z = n * r * l - a * h * s, this.w = n * r * s + a * h * l) : "ZXY" === i ? (this.x = a * r * s - n * h * l,
                                this.y = n * h * s + a * r * l, this.z = n * r * l + a * h * s, this.w = n * r * s - a * h * l) : "ZYX" === i ? (this.x = a * r * s - n * h * l,
                                    this.y = n * h * s + a * r * l, this.z = n * r * l - a * h * s, this.w = n * r * s + a * h * l) : "YZX" === i ? (this.x = a * r * s + n * h * l,
                                        this.y = n * h * s + a * r * l, this.z = n * r * l - a * h * s, this.w = n * r * s - a * h * l) : "XZY" === i && (this.x = a * r * s - n * h * l,
                                            this.y = n * h * s - a * r * l, this.z = n * r * l + a * h * s, this.w = n * r * s + a * h * l),
                        this;
                }, Quaternion.prototype.clone = function () {
                    return new Quaternion(this.x, this.y, this.z, this.w);
                }, Quaternion.prototype.slerp = function (t, e, o) {
                    o = o || new Quaternion();
                    var i, n, r, s, a, h = this.x, l = this.y, p = this.z, c = this.w, u = t.x, d = t.y, v = t.z, y = t.w;
                    return (n = h * u + l * d + p * v + c * y) < 0 && (n = -n, u = -u, d = -d, v = -v,
                        y = -y), 1 - n > 1e-6 ? (i = Math.acos(n), r = Math.sin(i), s = Math.sin((1 - e) * i) / r,
                            a = Math.sin(e * i) / r) : (s = 1 - e, a = e), o.x = s * h + a * u, o.y = s * l + a * d,
                        o.z = s * p + a * v, o.w = s * c + a * y, o;
                }, Quaternion.prototype.integrate = function (t, e, o, i) {
                    i = i || new Quaternion();
                    var n = t.x * o.x, r = t.y * o.y, s = t.z * o.z, a = this.x, h = this.y, l = this.z, p = this.w, c = .5 * e;
                    return i.x += c * (n * p + r * l - s * h), i.y += c * (r * p + s * a - n * l), i.z += c * (s * p + n * h - r * a),
                        i.w += c * (-n * a - r * h - s * l), i;
                };
            }, {
                "./Vec3": 31
            }],
            30: [function (t, e, o) {
                var i = t("./Vec3"), n = t("./Quaternion");
                function Transform(t) {
                    t = t || {}, this.position = new i(), t.position && this.position.copy(t.position),
                        this.quaternion = new n(), t.quaternion && this.quaternion.copy(t.quaternion);
                }
                e.exports = Transform;
                var r = new n();
                Transform.pointToLocalFrame = function (t, e, o, n) {
                    n = n || new i();
                    return o.vsub(t, n), e.conjugate(r), r.vmult(n, n), n;
                }, Transform.prototype.pointToLocal = function (t, e) {
                    return Transform.pointToLocalFrame(this.position, this.quaternion, t, e);
                }, Transform.pointToWorldFrame = function (t, e, o, n) {
                    n = n || new i();
                    return e.vmult(o, n), n.vadd(t, n), n;
                }, Transform.prototype.pointToWorld = function (t, e) {
                    return Transform.pointToWorldFrame(this.position, this.quaternion, t, e);
                }, Transform.prototype.vectorToWorldFrame = function (t, e) {
                    e = e || new i();
                    return this.quaternion.vmult(t, e), e;
                }, Transform.vectorToWorldFrame = function (t, e, o) {
                    return t.vmult(e, o), o;
                }, Transform.vectorToLocalFrame = function (t, e, o, n) {
                    n = n || new i();
                    return e.w *= -1, e.vmult(o, n), e.w *= -1, n;
                };
            }, {
                "./Quaternion": 29,
                "./Vec3": 31
            }],
            31: [function (t, e, o) {
                e.exports = Vec3;
                var i = t("./Mat3");
                function Vec3(t, e, o) {
                    this.x = t || 0, this.y = e || 0, this.z = o || 0;
                }
                Vec3.ZERO = new Vec3(0, 0, 0), Vec3.UNIT_X = new Vec3(1, 0, 0), Vec3.UNIT_Y = new Vec3(0, 1, 0),
                    Vec3.UNIT_Z = new Vec3(0, 0, 1), Vec3.prototype.cross = function (t, e) {
                        var o = t.x, i = t.y, n = t.z, r = this.x, s = this.y, a = this.z;
                        return (e = e || new Vec3()).x = s * n - a * i, e.y = a * o - r * n, e.z = r * i - s * o,
                            e;
                    }, Vec3.prototype.set = function (t, e, o) {
                        return this.x = t, this.y = e, this.z = o, this;
                    }, Vec3.prototype.setZero = function () {
                        this.x = this.y = this.z = 0;
                    }, Vec3.prototype.vadd = function (t, e) {
                        if (!e) return new Vec3(this.x + t.x, this.y + t.y, this.z + t.z);
                        e.x = t.x + this.x, e.y = t.y + this.y, e.z = t.z + this.z;
                    }, Vec3.prototype.vsub = function (t, e) {
                        if (!e) return new Vec3(this.x - t.x, this.y - t.y, this.z - t.z);
                        e.x = this.x - t.x, e.y = this.y - t.y, e.z = this.z - t.z;
                    }, Vec3.prototype.crossmat = function () {
                        return new i([0, -this.z, this.y, this.z, 0, -this.x, -this.y, this.x, 0]);
                    }, Vec3.prototype.normalize = function () {
                        var t = this.x, e = this.y, o = this.z, i = Math.sqrt(t * t + e * e + o * o);
                        if (i > 0) {
                            var n = 1 / i;
                            this.x *= n, this.y *= n, this.z *= n;
                        } else this.x = 0, this.y = 0, this.z = 0;
                        return i;
                    }, Vec3.prototype.unit = function (t) {
                        t = t || new Vec3();
                        var e = this.x, o = this.y, i = this.z, n = Math.sqrt(e * e + o * o + i * i);
                        return n > 0 ? (n = 1 / n, t.x = e * n, t.y = o * n, t.z = i * n) : (t.x = 1, t.y = 0,
                            t.z = 0), t;
                    }, Vec3.prototype.norm = function () {
                        var t = this.x, e = this.y, o = this.z;
                        return Math.sqrt(t * t + e * e + o * o);
                    }, Vec3.prototype.length = Vec3.prototype.norm, Vec3.prototype.norm2 = function () {
                        return this.dot(this);
                    }, Vec3.prototype.lengthSquared = Vec3.prototype.norm2, Vec3.prototype.distanceTo = function (t) {
                        var e = this.x, o = this.y, i = this.z, n = t.x, r = t.y, s = t.z;
                        return Math.sqrt((n - e) * (n - e) + (r - o) * (r - o) + (s - i) * (s - i));
                    }, Vec3.prototype.distanceSquared = function (t) {
                        var e = this.x, o = this.y, i = this.z, n = t.x, r = t.y, s = t.z;
                        return (n - e) * (n - e) + (r - o) * (r - o) + (s - i) * (s - i);
                    }, Vec3.prototype.mult = function (t, e) {
                        e = e || new Vec3();
                        var o = this.x, i = this.y, n = this.z;
                        return e.x = t * o, e.y = t * i, e.z = t * n, e;
                    }, Vec3.prototype.vmul = function (t, e) {
                        return (e = e || new Vec3()).x = t.x * this.x, e.y = t.y * this.y, e.z = t.z * this.z,
                            e;
                    }, Vec3.prototype.scale = Vec3.prototype.mult, Vec3.prototype.addScaledVector = function (t, e, o) {
                        return (o = o || new Vec3()).x = this.x + t * e.x, o.y = this.y + t * e.y, o.z = this.z + t * e.z,
                            o;
                    }, Vec3.prototype.dot = function (t) {
                        return this.x * t.x + this.y * t.y + this.z * t.z;
                    }, Vec3.prototype.isZero = function () {
                        return 0 === this.x && 0 === this.y && 0 === this.z;
                    }, Vec3.prototype.negate = function (t) {
                        return (t = t || new Vec3()).x = -this.x, t.y = -this.y, t.z = -this.z, t;
                    };
                var n = new Vec3(), r = new Vec3();
                Vec3.prototype.tangents = function (t, e) {
                    var o = this.norm();
                    if (o > 0) {
                        var i = n, s = 1 / o;
                        i.set(this.x * s, this.y * s, this.z * s);
                        var a = r;
                        Math.abs(i.x) < .9 ? (a.set(1, 0, 0), i.cross(a, t)) : (a.set(0, 1, 0), i.cross(a, t)),
                            i.cross(t, e);
                    } else t.set(1, 0, 0), e.set(0, 1, 0);
                }, Vec3.prototype.toString = function () {
                    return this.x + "," + this.y + "," + this.z;
                }, Vec3.prototype.toArray = function () {
                    return [this.x, this.y, this.z];
                }, Vec3.prototype.copy = function (t) {
                    return this.x = t.x, this.y = t.y, this.z = t.z, this;
                }, Vec3.prototype.lerp = function (t, e, o) {
                    var i = this.x, n = this.y, r = this.z;
                    o.x = i + (t.x - i) * e, o.y = n + (t.y - n) * e, o.z = r + (t.z - r) * e;
                }, Vec3.prototype.almostEquals = function (t, e) {
                    return void 0 === e && (e = 1e-6), !(Math.abs(this.x - t.x) > e || Math.abs(this.y - t.y) > e || Math.abs(this.z - t.z) > e);
                }, Vec3.prototype.almostZero = function (t) {
                    return void 0 === t && (t = 1e-6), !(Math.abs(this.x) > t || Math.abs(this.y) > t || Math.abs(this.z) > t);
                };
                var s = new Vec3();
                Vec3.prototype.isAntiparallelTo = function (t, e) {
                    return this.negate(s), s.almostEquals(t, e);
                }, Vec3.prototype.clone = function () {
                    return new Vec3(this.x, this.y, this.z);
                };
            }, {
                "./Mat3": 28
            }],
            32: [function (t, e, o) {
                e.exports = Body;
                var i = t("../utils/EventTarget"), n = (t("../shapes/Shape"), t("../math/Vec3")), r = t("../math/Mat3"), s = t("../math/Quaternion"), a = (t("../material/Material"),
                    t("../collision/AABB")), h = t("../shapes/Box");
                function Body(t) {
                    t = t || {}, i.apply(this), this.id = Body.idCounter++, this.world = null, this.preStep = null,
                        this.postStep = null, this.vlambda = new n(), this.collisionFilterGroup = "number" == typeof t.collisionFilterGroup ? t.collisionFilterGroup : 1,
                        this.collisionFilterMask = "number" == typeof t.collisionFilterMask ? t.collisionFilterMask : -1,
                        this.collisionResponse = !0, this.position = new n(), this.previousPosition = new n(),
                        this.interpolatedPosition = new n(), this.initPosition = new n(), t.position && (this.position.copy(t.position),
                            this.previousPosition.copy(t.position), this.interpolatedPosition.copy(t.position),
                            this.initPosition.copy(t.position)), this.velocity = new n(), t.velocity && this.velocity.copy(t.velocity),
                        this.initVelocity = new n(), this.force = new n();
                    var e = "number" == typeof t.mass ? t.mass : 0;
                    this.mass = e, this.invMass = e > 0 ? 1 / e : 0, this.material = t.material || null,
                        this.linearDamping = "number" == typeof t.linearDamping ? t.linearDamping : .01,
                        this.type = e <= 0 ? Body.STATIC : Body.DYNAMIC, (0, _typeof2.default)(t.type) == (0,
                            _typeof2.default)(Body.STATIC) && (this.type = t.type), this.allowSleep = void 0 === t.allowSleep || t.allowSleep,
                        this.sleepState = 0, this.sleepSpeedLimit = void 0 !== t.sleepSpeedLimit ? t.sleepSpeedLimit : .1,
                        this.sleepTimeLimit = void 0 !== t.sleepTimeLimit ? t.sleepTimeLimit : 1, this.timeLastSleepy = 0,
                        this._wakeUpAfterNarrowphase = !1, this.torque = new n(), this.quaternion = new s(),
                        this.initQuaternion = new s(), this.previousQuaternion = new s(), this.interpolatedQuaternion = new s(),
                        t.quaternion && (this.quaternion.copy(t.quaternion), this.initQuaternion.copy(t.quaternion),
                            this.previousQuaternion.copy(t.quaternion), this.interpolatedQuaternion.copy(t.quaternion)),
                        this.angularVelocity = new n(), t.angularVelocity && this.angularVelocity.copy(t.angularVelocity),
                        this.initAngularVelocity = new n(), this.shapes = [], this.shapeOffsets = [], this.shapeOrientations = [],
                        this.inertia = new n(), this.invInertia = new n(), this.invInertiaWorld = new r(),
                        this.invMassSolve = 0, this.invInertiaSolve = new n(), this.invInertiaWorldSolve = new r(),
                        this.fixedRotation = void 0 !== t.fixedRotation && t.fixedRotation, this.angularDamping = void 0 !== t.angularDamping ? t.angularDamping : .01,
                        this.linearFactor = new n(1, 1, 1), t.linearFactor && this.linearFactor.copy(t.linearFactor),
                        this.angularFactor = new n(1, 1, 1), t.angularFactor && this.angularFactor.copy(t.angularFactor),
                        this.aabb = new a(), this.aabbNeedsUpdate = !0, this.boundingRadius = 0, this.wlambda = new n(),
                        t.shape && this.addShape(t.shape), this.updateMassProperties();
                }
                Body.prototype = new i(), Body.prototype.constructor = Body, Body.COLLIDE_EVENT_NAME = "collide",
                    Body.DYNAMIC = 1, Body.STATIC = 2, Body.KINEMATIC = 4, Body.AWAKE = 0, Body.SLEEPY = 1,
                    Body.SLEEPING = 2, Body.idCounter = 0, Body.wakeupEvent = {
                        type: "wakeup"
                    }, Body.prototype.wakeUp = function () {
                        var t = this.sleepState;
                        this.sleepState = 0, this._wakeUpAfterNarrowphase = !1, t === Body.SLEEPING && this.dispatchEvent(Body.wakeupEvent);
                    }, Body.prototype.sleep = function () {
                        this.sleepState = Body.SLEEPING, this.velocity.set(0, 0, 0), this.angularVelocity.set(0, 0, 0),
                            this._wakeUpAfterNarrowphase = !1;
                    }, Body.sleepyEvent = {
                        type: "sleepy"
                    }, Body.sleepEvent = {
                        type: "sleep"
                    }, Body.prototype.sleepTick = function (t) {
                        if (this.allowSleep) {
                            var e = this.sleepState, o = this.velocity.norm2() + this.angularVelocity.norm2(), i = Math.pow(this.sleepSpeedLimit, 2);
                            e === Body.AWAKE && o < i ? (this.sleepState = Body.SLEEPY, this.timeLastSleepy = t,
                                this.dispatchEvent(Body.sleepyEvent)) : e === Body.SLEEPY && o > i ? this.wakeUp() : e === Body.SLEEPY && t - this.timeLastSleepy > this.sleepTimeLimit && (this.sleep(),
                                    this.dispatchEvent(Body.sleepEvent));
                        }
                    }, Body.prototype.updateSolveMassProperties = function () {
                        this.sleepState === Body.SLEEPING || this.type === Body.KINEMATIC ? (this.invMassSolve = 0,
                            this.invInertiaSolve.setZero(), this.invInertiaWorldSolve.setZero()) : (this.invMassSolve = this.invMass,
                                this.invInertiaSolve.copy(this.invInertia), this.invInertiaWorldSolve.copy(this.invInertiaWorld));
                    }, Body.prototype.pointToLocalFrame = function (t, e) {
                        e = e || new n();
                        return t.vsub(this.position, e), this.quaternion.conjugate().vmult(e, e), e;
                    }, Body.prototype.vectorToLocalFrame = function (t, e) {
                        e = e || new n();
                        return this.quaternion.conjugate().vmult(t, e), e;
                    }, Body.prototype.pointToWorldFrame = function (t, e) {
                        e = e || new n();
                        return this.quaternion.vmult(t, e), e.vadd(this.position, e), e;
                    }, Body.prototype.vectorToWorldFrame = function (t, e) {
                        e = e || new n();
                        return this.quaternion.vmult(t, e), e;
                    };
                var l = new n(), p = new s();
                Body.prototype.addShape = function (t, e, o) {
                    var i = new n(), r = new s();
                    return e && i.copy(e), o && r.copy(o), this.shapes.push(t), this.shapeOffsets.push(i),
                        this.shapeOrientations.push(r), this.updateMassProperties(), this.updateBoundingRadius(),
                        this.aabbNeedsUpdate = !0, t.body = this, this;
                }, Body.prototype.updateBoundingRadius = function () {
                    for (var t = this.shapes, e = this.shapeOffsets, o = t.length, i = 0, n = 0; n !== o; n++) {
                        var r = t[n];
                        r.updateBoundingSphereRadius();
                        var s = e[n].norm(), a = r.boundingSphereRadius;
                        s + a > i && (i = s + a);
                    }
                    this.boundingRadius = i;
                };
                var c = new a();
                Body.prototype.computeAABB = function () {
                    for (var t = this.shapes, e = this.shapeOffsets, o = this.shapeOrientations, i = t.length, n = l, r = p, s = this.quaternion, a = this.aabb, h = c, u = 0; u !== i; u++) {
                        var d = t[u];
                        s.vmult(e[u], n), n.vadd(this.position, n), o[u].mult(s, r), d.calculateWorldAABB(n, r, h.lowerBound, h.upperBound),
                            0 === u ? a.copy(h) : a.extend(h);
                    }
                    this.aabbNeedsUpdate = !1;
                };
                var u = new r(), d = new r();
                new r();
                Body.prototype.updateInertiaWorld = function (t) {
                    var e = this.invInertia;
                    if (e.x !== e.y || e.y !== e.z || t) {
                        var o = u, i = d;
                        o.setRotationFromQuaternion(this.quaternion), o.transpose(i), o.scale(e, o), o.mmult(i, this.invInertiaWorld);
                    } else;
                };
                new n();
                var v = new n();
                Body.prototype.applyForce = function (t, e) {
                    if (this.type === Body.DYNAMIC) {
                        var o = v;
                        e.cross(t, o), this.force.vadd(t, this.force), this.torque.vadd(o, this.torque);
                    }
                };
                var y = new n(), f = new n();
                Body.prototype.applyLocalForce = function (t, e) {
                    if (this.type === Body.DYNAMIC) {
                        var o = y, i = f;
                        this.vectorToWorldFrame(t, o), this.vectorToWorldFrame(e, i), this.applyForce(o, i);
                    }
                };
                new n();
                var m = new n(), w = new n();
                Body.prototype.applyImpulse = function (t, e) {
                    if (this.type === Body.DYNAMIC) {
                        var o = e, i = m;
                        i.copy(t), i.mult(this.invMass, i), this.velocity.vadd(i, this.velocity);
                        var n = w;
                        o.cross(t, n), this.invInertiaWorld.vmult(n, n), this.angularVelocity.vadd(n, this.angularVelocity);
                    }
                };
                var x = new n(), g = new n();
                Body.prototype.applyLocalImpulse = function (t, e) {
                    if (this.type === Body.DYNAMIC) {
                        var o = x, i = g;
                        this.vectorToWorldFrame(t, o), this.vectorToWorldFrame(e, i), this.applyImpulse(o, i);
                    }
                };
                var b = new n();
                Body.prototype.updateMassProperties = function () {
                    var t = b;
                    this.invMass = this.mass > 0 ? 1 / this.mass : 0;
                    var e = this.inertia, o = this.fixedRotation;
                    this.computeAABB(), t.set((this.aabb.upperBound.x - this.aabb.lowerBound.x) / 2, (this.aabb.upperBound.y - this.aabb.lowerBound.y) / 2, (this.aabb.upperBound.z - this.aabb.lowerBound.z) / 2),
                        h.calculateInertia(t, this.mass, e), this.invInertia.set(e.x > 0 && !o ? 1 / e.x : 0, e.y > 0 && !o ? 1 / e.y : 0, e.z > 0 && !o ? 1 / e.z : 0),
                        this.updateInertiaWorld(!0);
                }, Body.prototype.getVelocityAtWorldPoint = function (t, e) {
                    var o = new n();
                    return t.vsub(this.position, o), this.angularVelocity.cross(o, e), this.velocity.vadd(e, e),
                        e;
                };
                new n(), new n(), new s(), new s();
                Body.prototype.integrate = function (t, e, o) {
                    if (this.previousPosition.copy(this.position), this.previousQuaternion.copy(this.quaternion),
                        (this.type === Body.DYNAMIC || this.type === Body.KINEMATIC) && this.sleepState !== Body.SLEEPING) {
                        var i = this.velocity, n = this.angularVelocity, r = this.position, s = this.force, a = this.torque, h = this.quaternion, l = this.invMass, p = this.invInertiaWorld, c = this.linearFactor, u = l * t;
                        i.x += s.x * u * c.x, i.y += s.y * u * c.y, i.z += s.z * u * c.z;
                        var d = p.elements, v = this.angularFactor, y = a.x * v.x, f = a.y * v.y, m = a.z * v.z;
                        n.x += t * (d[0] * y + d[1] * f + d[2] * m), n.y += t * (d[3] * y + d[4] * f + d[5] * m),
                            n.z += t * (d[6] * y + d[7] * f + d[8] * m), r.x += i.x * t, r.y += i.y * t, r.z += i.z * t,
                            h.integrate(this.angularVelocity, t, this.angularFactor, h), e && (o ? h.normalizeFast() : h.normalize()),
                            this.aabbNeedsUpdate = !0, this.updateInertiaWorld();
                    }
                };
            }, {
                "../collision/AABB": 3,
                "../material/Material": 26,
                "../math/Mat3": 28,
                "../math/Quaternion": 29,
                "../math/Vec3": 31,
                "../shapes/Box": 38,
                "../shapes/Shape": 44,
                "../utils/EventTarget": 50
            }],
            33: [function (t, e, o) {
                t("./Body");
                var i = t("../math/Vec3"), n = t("../math/Quaternion"), r = (t("../collision/RaycastResult"),
                    t("../collision/Ray")), s = t("../objects/WheelInfo");
                function RaycastVehicle(t) {
                    this.chassisBody = t.chassisBody, this.wheelInfos = [], this.sliding = !1, this.world = null,
                        this.indexRightAxis = void 0 !== t.indexRightAxis ? t.indexRightAxis : 1, this.indexForwardAxis = void 0 !== t.indexForwardAxis ? t.indexForwardAxis : 0,
                        this.indexUpAxis = void 0 !== t.indexUpAxis ? t.indexUpAxis : 2;
                }
                e.exports = RaycastVehicle;
                new i(), new i(), new i();
                var a = new i(), h = new i(), l = new i();
                new r();
                RaycastVehicle.prototype.addWheel = function (t) {
                    var e = new s(t = t || {}), o = this.wheelInfos.length;
                    return this.wheelInfos.push(e), o;
                }, RaycastVehicle.prototype.setSteeringValue = function (t, e) {
                    this.wheelInfos[e].steering = t;
                };
                new i();
                RaycastVehicle.prototype.applyEngineForce = function (t, e) {
                    this.wheelInfos[e].engineForce = t;
                }, RaycastVehicle.prototype.setBrake = function (t, e) {
                    this.wheelInfos[e].brake = t;
                }, RaycastVehicle.prototype.addToWorld = function (t) {
                    this.constraints;
                    t.addBody(this.chassisBody);
                    var e = this;
                    this.preStepCallback = function () {
                        e.updateVehicle(t.dt);
                    }, t.addEventListener("preStep", this.preStepCallback), this.world = t;
                }, RaycastVehicle.prototype.getVehicleAxisWorld = function (t, e) {
                    e.set(0 === t ? 1 : 0, 1 === t ? 1 : 0, 2 === t ? 1 : 0), this.chassisBody.vectorToWorldFrame(e, e);
                }, RaycastVehicle.prototype.updateVehicle = function (t) {
                    for (var e = this.wheelInfos, o = e.length, n = this.chassisBody, r = 0; r < o; r++) {
                        this.updateWheelTransform(r);
                    }
                    this.currentVehicleSpeedKmHour = 3.6 * n.velocity.norm();
                    var s = new i();
                    this.getVehicleAxisWorld(this.indexForwardAxis, s), s.dot(n.velocity) < 0 && (this.currentVehicleSpeedKmHour *= -1);
                    for (r = 0; r < o; r++) {
                        this.castRay(e[r]);
                    }
                    this.updateSuspension(t);
                    var a = new i(), h = new i();
                    for (r = 0; r < o; r++) {
                        var l = (d = e[r]).suspensionForce;
                        l > d.maxSuspensionForce && (l = d.maxSuspensionForce), d.raycastResult.hitNormalWorld.scale(l * t, a),
                            d.raycastResult.hitPointWorld.vsub(n.position, h), n.applyImpulse(a, h);
                    }
                    this.updateFriction(t);
                    var p = new i(), c = new i(), u = new i();
                    for (r = 0; r < o; r++) {
                        var d = e[r];
                        n.getVelocityAtWorldPoint(d.chassisConnectionPointWorld, u);
                        var v = 1;
                        switch (this.indexUpAxis) {
                            case 1:
                                v = -1;
                        }
                        if (d.isInContact) {
                            this.getVehicleAxisWorld(this.indexForwardAxis, c);
                            var y = c.dot(d.raycastResult.hitNormalWorld);
                            d.raycastResult.hitNormalWorld.scale(y, p), c.vsub(p, c);
                            var f = c.dot(u);
                            d.deltaRotation = v * f * t / d.radius;
                        }
                        !d.sliding && d.isInContact || 0 === d.engineForce || !d.useCustomSlidingRotationalSpeed || (d.deltaRotation = (d.engineForce > 0 ? 1 : -1) * d.customSlidingRotationalSpeed * t),
                            Math.abs(d.brake) > Math.abs(d.engineForce) && (d.deltaRotation = 0), d.rotation += d.deltaRotation,
                            d.deltaRotation *= .99;
                    }
                }, RaycastVehicle.prototype.updateSuspension = function (t) {
                    for (var e = this.chassisBody.mass, o = this.wheelInfos, i = o.length, n = 0; n < i; n++) {
                        var r = o[n];
                        if (r.isInContact) {
                            var s, a = r.suspensionRestLength - r.suspensionLength;
                            s = r.suspensionStiffness * a * r.clippedInvContactDotSuspension;
                            var h = r.suspensionRelativeVelocity;
                            s -= (h < 0 ? r.dampingCompression : r.dampingRelaxation) * h, r.suspensionForce = s * e,
                                r.suspensionForce < 0 && (r.suspensionForce = 0);
                        } else r.suspensionForce = 0;
                    }
                }, RaycastVehicle.prototype.removeFromWorld = function (t) {
                    this.constraints;
                    t.remove(this.chassisBody), t.removeEventListener("preStep", this.preStepCallback),
                        this.world = null;
                };
                var p = new i(), c = new i();
                RaycastVehicle.prototype.castRay = function (t) {
                    var e = p, o = c;
                    this.updateWheelTransformWorld(t);
                    var n = this.chassisBody, r = -1, s = t.suspensionRestLength + t.radius;
                    t.directionWorld.scale(s, e);
                    var a = t.chassisConnectionPointWorld;
                    a.vadd(e, o);
                    var h = t.raycastResult;
                    h.reset();
                    var l = n.collisionResponse;
                    n.collisionResponse = !1, this.world.rayTest(a, o, h), n.collisionResponse = l;
                    var u = h.body;
                    if (t.raycastResult.groundObject = 0, u) {
                        r = h.distance, t.raycastResult.hitNormalWorld = h.hitNormalWorld, t.isInContact = !0;
                        var d = h.distance;
                        t.suspensionLength = d - t.radius;
                        var v = t.suspensionRestLength - t.maxSuspensionTravel, y = t.suspensionRestLength + t.maxSuspensionTravel;
                        t.suspensionLength < v && (t.suspensionLength = v), t.suspensionLength > y && (t.suspensionLength = y,
                            t.raycastResult.reset());
                        var f = t.raycastResult.hitNormalWorld.dot(t.directionWorld), m = new i();
                        n.getVelocityAtWorldPoint(t.raycastResult.hitPointWorld, m);
                        var w = t.raycastResult.hitNormalWorld.dot(m);
                        if (f >= -.1) t.suspensionRelativeVelocity = 0, t.clippedInvContactDotSuspension = 10; else {
                            var x = -1 / f;
                            t.suspensionRelativeVelocity = w * x, t.clippedInvContactDotSuspension = x;
                        }
                    } else t.suspensionLength = t.suspensionRestLength + 0 * t.maxSuspensionTravel,
                        t.suspensionRelativeVelocity = 0, t.directionWorld.scale(-1, t.raycastResult.hitNormalWorld),
                        t.clippedInvContactDotSuspension = 1;
                    return r;
                }, RaycastVehicle.prototype.updateWheelTransformWorld = function (t) {
                    t.isInContact = !1;
                    var e = this.chassisBody;
                    e.pointToWorldFrame(t.chassisConnectionPointLocal, t.chassisConnectionPointWorld),
                        e.vectorToWorldFrame(t.directionLocal, t.directionWorld), e.vectorToWorldFrame(t.axleLocal, t.axleWorld);
                }, RaycastVehicle.prototype.updateWheelTransform = function (t) {
                    var e = a, o = h, i = l, r = this.wheelInfos[t];
                    this.updateWheelTransformWorld(r), r.directionLocal.scale(-1, e), o.copy(r.axleLocal),
                        e.cross(o, i), i.normalize(), o.normalize();
                    var s = r.steering, p = new n();
                    p.setFromAxisAngle(e, s);
                    var c = new n();
                    c.setFromAxisAngle(o, r.rotation);
                    var u = r.worldTransform.quaternion;
                    this.chassisBody.quaternion.mult(p, u), u.mult(c, u), u.normalize();
                    var d = r.worldTransform.position;
                    d.copy(r.directionWorld), d.scale(r.suspensionLength, d), d.vadd(r.chassisConnectionPointWorld, d);
                };
                var u = [new i(1, 0, 0), new i(0, 1, 0), new i(0, 0, 1)];
                RaycastVehicle.prototype.getWheelTransformWorld = function (t) {
                    return this.wheelInfos[t].worldTransform;
                };
                var d = new i(), v = [], y = [];
                RaycastVehicle.prototype.updateFriction = function (t) {
                    for (var e = d, o = this.wheelInfos, n = o.length, r = this.chassisBody, s = y, a = v, h = 0; h < n; h++) {
                        (f = (E = o[h]).raycastResult.body) && 0, E.sideImpulse = 0, E.forwardImpulse = 0,
                            s[h] || (s[h] = new i()), a[h] || (a[h] = new i());
                    }
                    for (h = 0; h < n; h++) {
                        if (f = (E = o[h]).raycastResult.body) {
                            var l = a[h];
                            this.getWheelTransformWorld(h).vectorToWorldFrame(u[this.indexRightAxis], l);
                            var p = E.raycastResult.hitNormalWorld, c = l.dot(p);
                            p.scale(c, e), l.vsub(e, l), l.normalize(), p.cross(l, s[h]), s[h].normalize(),
                                E.sideImpulse = resolveSingleBilateral(r, E.raycastResult.hitPointWorld, f, E.raycastResult.hitPointWorld, l),
                                E.sideImpulse *= 1;
                        }
                    }
                    this.sliding = !1;
                    for (h = 0; h < n; h++) {
                        var f = (E = o[h]).raycastResult.body, m = 0;
                        if (E.slipInfo = 1, f) {
                            var w = E.brake ? E.brake : 0;
                            m = calcRollingFriction(r, f, E.raycastResult.hitPointWorld, s[h], w);
                            var x = w / (m += E.engineForce * t);
                            E.slipInfo *= x;
                        }
                        if (E.forwardImpulse = 0, E.skidInfo = 1, f) {
                            E.skidInfo = 1;
                            var g = E.suspensionForce * t * E.frictionSlip, b = g * g;
                            E.forwardImpulse = m;
                            var B = .5 * E.forwardImpulse, A = 1 * E.sideImpulse, S = B * B + A * A;
                            if (E.sliding = !1, S > b) {
                                this.sliding = !0, E.sliding = !0;
                                x = g / Math.sqrt(S);
                                E.skidInfo *= x;
                            }
                        }
                    }
                    if (this.sliding) for (h = 0; h < n; h++) {
                        0 !== (E = o[h]).sideImpulse && E.skidInfo < 1 && (E.forwardImpulse *= E.skidInfo,
                            E.sideImpulse *= E.skidInfo);
                    }
                    for (h = 0; h < n; h++) {
                        var E = o[h], C = new i();
                        if (E.raycastResult.hitPointWorld.vsub(r.position, C), 0 !== E.forwardImpulse) {
                            var M = new i();
                            s[h].scale(E.forwardImpulse, M), r.applyImpulse(M, C);
                        }
                        if (0 !== E.sideImpulse) {
                            f = E.raycastResult.body;
                            var R = new i();
                            E.raycastResult.hitPointWorld.vsub(f.position, R);
                            var P = new i();
                            a[h].scale(E.sideImpulse, P), r.vectorToLocalFrame(C, C), C["xyz"[this.indexUpAxis]] *= E.rollInfluence,
                                r.vectorToWorldFrame(C, C), r.applyImpulse(P, C), P.scale(-1, P), f.applyImpulse(P, R);
                        }
                    }
                };
                var f = new i(), m = new i(), w = new i();
                function calcRollingFriction(t, e, o, i, n) {
                    var r = 0, s = o, a = f, h = m, l = w;
                    t.getVelocityAtWorldPoint(s, a), e.getVelocityAtWorldPoint(s, h), a.vsub(h, l);
                    return n < (r = -i.dot(l) * (1 / (computeImpulseDenominator(t, o, i) + computeImpulseDenominator(e, o, i)))) && (r = n),
                        r < -n && (r = -n), r;
                }
                var x = new i(), g = new i(), b = new i(), B = new i();
                function computeImpulseDenominator(t, e, o) {
                    var i = x, n = g, r = b, s = B;
                    return e.vsub(t.position, i), i.cross(o, n), t.invInertiaWorld.vmult(n, s), s.cross(i, r),
                        t.invMass + o.dot(r);
                }
                var A = new i(), S = new i(), E = new i();
                function resolveSingleBilateral(t, e, o, i, n, r) {
                    if (n.norm2() > 1.1) return 0;
                    var s = A, a = S, h = E;
                    t.getVelocityAtWorldPoint(e, s), o.getVelocityAtWorldPoint(i, a), s.vsub(a, h);
                    return -.2 * n.dot(h) * (1 / (t.invMass + o.invMass));
                }
            }, {
                "../collision/Ray": 10,
                "../collision/RaycastResult": 11,
                "../math/Quaternion": 29,
                "../math/Vec3": 31,
                "../objects/WheelInfo": 37,
                "./Body": 32
            }],
            34: [function (t, e, o) {
                var i = t("./Body"), n = t("../shapes/Sphere"), r = t("../shapes/Box"), s = t("../math/Vec3"), a = t("../constraints/HingeConstraint");
                function RigidVehicle(t) {
                    if (this.wheelBodies = [], this.coordinateSystem = void 0 === t.coordinateSystem ? new s(1, 2, 3) : t.coordinateSystem.clone(),
                        this.chassisBody = t.chassisBody, !this.chassisBody) {
                        var e = new r(new s(5, 2, .5));
                        this.chassisBody = new i(1, e);
                    }
                    this.constraints = [], this.wheelAxes = [], this.wheelForces = [];
                }
                e.exports = RigidVehicle, RigidVehicle.prototype.addWheel = function (t) {
                    var e = (t = t || {}).body;
                    e || (e = new i(1, new n(1.2))), this.wheelBodies.push(e), this.wheelForces.push(0);
                    new s();
                    var o = void 0 !== t.position ? t.position.clone() : new s(), r = new s();
                    this.chassisBody.pointToWorldFrame(o, r), e.position.set(r.x, r.y, r.z);
                    var h = void 0 !== t.axis ? t.axis.clone() : new s(0, 1, 0);
                    this.wheelAxes.push(h);
                    var l = new a(this.chassisBody, e, {
                        pivotA: o,
                        axisA: h,
                        pivotB: s.ZERO,
                        axisB: h,
                        collideConnected: !1
                    });
                    return this.constraints.push(l), this.wheelBodies.length - 1;
                }, RigidVehicle.prototype.setSteeringValue = function (t, e) {
                    var o = this.wheelAxes[e], i = Math.cos(t), n = Math.sin(t), r = o.x, s = o.y;
                    this.constraints[e].axisA.set(i * r - n * s, n * r + i * s, 0);
                }, RigidVehicle.prototype.setMotorSpeed = function (t, e) {
                    var o = this.constraints[e];
                    o.enableMotor(), o.motorTargetVelocity = t;
                }, RigidVehicle.prototype.disableMotor = function (t) {
                    this.constraints[t].disableMotor();
                };
                var h = new s();
                RigidVehicle.prototype.setWheelForce = function (t, e) {
                    this.wheelForces[e] = t;
                }, RigidVehicle.prototype.applyWheelForce = function (t, e) {
                    var o = this.wheelAxes[e], i = this.wheelBodies[e], n = i.torque;
                    o.scale(t, h), i.vectorToWorldFrame(h, h), n.vadd(h, n);
                }, RigidVehicle.prototype.addToWorld = function (t) {
                    for (var e = this.constraints, o = this.wheelBodies.concat([this.chassisBody]), i = 0; i < o.length; i++) {
                        t.addBody(o[i]);
                    }
                    for (i = 0; i < e.length; i++) {
                        t.addConstraint(e[i]);
                    }
                    t.addEventListener("preStep", this._update.bind(this));
                }, RigidVehicle.prototype._update = function () {
                    for (var t = this.wheelForces, e = 0; e < t.length; e++) {
                        this.applyWheelForce(t[e], e);
                    }
                }, RigidVehicle.prototype.removeFromWorld = function (t) {
                    for (var e = this.constraints, o = this.wheelBodies.concat([this.chassisBody]), i = 0; i < o.length; i++) {
                        t.remove(o[i]);
                    }
                    for (i = 0; i < e.length; i++) {
                        t.removeConstraint(e[i]);
                    }
                };
                var l = new s();
                RigidVehicle.prototype.getWheelSpeed = function (t) {
                    var e = this.wheelAxes[t], o = this.wheelBodies[t].angularVelocity;
                    return this.chassisBody.vectorToWorldFrame(e, l), o.dot(l);
                };
            }, {
                "../constraints/HingeConstraint": 16,
                "../math/Vec3": 31,
                "../shapes/Box": 38,
                "../shapes/Sphere": 45,
                "./Body": 32
            }],
            35: [function (t, e, o) {
                e.exports = SPHSystem;
                t("../shapes/Shape");
                var i = t("../math/Vec3");
                t("../math/Quaternion"), t("../shapes/Particle"), t("../objects/Body"), t("../material/Material");
                function SPHSystem() {
                    this.particles = [], this.density = 1, this.smoothingRadius = 1, this.speedOfSound = 1,
                        this.viscosity = .01, this.eps = 1e-6, this.pressures = [], this.densities = [],
                        this.neighbors = [];
                }
                SPHSystem.prototype.add = function (t) {
                    this.particles.push(t), this.neighbors.length < this.particles.length && this.neighbors.push([]);
                }, SPHSystem.prototype.remove = function (t) {
                    var e = this.particles.indexOf(t);
                    -1 !== e && (this.particles.splice(e, 1), this.neighbors.length > this.particles.length && this.neighbors.pop());
                };
                var n = new i();
                SPHSystem.prototype.getNeighbors = function (t, e) {
                    for (var o = this.particles.length, i = t.id, r = this.smoothingRadius * this.smoothingRadius, s = n, a = 0; a !== o; a++) {
                        var h = this.particles[a];
                        h.position.vsub(t.position, s), i !== h.id && s.norm2() < r && e.push(h);
                    }
                };
                var r = new i(), s = new i(), a = new i(), h = new i(), l = new i(), p = new i();
                SPHSystem.prototype.update = function () {
                    for (var t = this.particles.length, e = r, o = this.speedOfSound, i = this.eps, n = 0; n !== t; n++) {
                        var c = this.particles[n];
                        (E = this.neighbors[n]).length = 0, this.getNeighbors(c, E), E.push(this.particles[n]);
                        for (var u = E.length, d = 0, v = 0; v !== u; v++) {
                            c.position.vsub(E[v].position, e);
                            var y = e.norm(), f = this.w(y);
                            d += E[v].mass * f;
                        }
                        this.densities[n] = d, this.pressures[n] = o * o * (this.densities[n] - this.density);
                    }
                    var m = s, w = a, x = h, g = l, b = p;
                    for (n = 0; n !== t; n++) {
                        var B, A, S = this.particles[n];
                        m.set(0, 0, 0), w.set(0, 0, 0);
                        var E;
                        for (u = (E = this.neighbors[n]).length, v = 0; v !== u; v++) {
                            var C = E[v];
                            S.position.vsub(C.position, g);
                            var M = g.norm();
                            B = -C.mass * (this.pressures[n] / (this.densities[n] * this.densities[n] + i) + this.pressures[v] / (this.densities[v] * this.densities[v] + i)),
                                this.gradw(g, x), x.mult(B, x), m.vadd(x, m), C.velocity.vsub(S.velocity, b), b.mult(1 / (1e-4 + this.densities[n] * this.densities[v]) * this.viscosity * C.mass, b),
                                A = this.nablaw(M), b.mult(A, b), w.vadd(b, w);
                        }
                        w.mult(S.mass, w), m.mult(S.mass, m), S.force.vadd(w, S.force), S.force.vadd(m, S.force);
                    }
                }, SPHSystem.prototype.w = function (t) {
                    var e = this.smoothingRadius;
                    return 315 / (64 * Math.PI * Math.pow(e, 9)) * Math.pow(e * e - t * t, 3);
                }, SPHSystem.prototype.gradw = function (t, e) {
                    var o = t.norm(), i = this.smoothingRadius;
                    t.mult(945 / (32 * Math.PI * Math.pow(i, 9)) * Math.pow(i * i - o * o, 2), e);
                }, SPHSystem.prototype.nablaw = function (t) {
                    var e = this.smoothingRadius;
                    return 945 / (32 * Math.PI * Math.pow(e, 9)) * (e * e - t * t) * (7 * t * t - 3 * e * e);
                };
            }, {
                "../material/Material": 26,
                "../math/Quaternion": 29,
                "../math/Vec3": 31,
                "../objects/Body": 32,
                "../shapes/Particle": 42,
                "../shapes/Shape": 44
            }],
            36: [function (t, e, o) {
                var i = t("../math/Vec3");
                function Spring(t, e, o) {
                    o = o || {}, this.restLength = "number" == typeof o.restLength ? o.restLength : 1,
                        this.stiffness = o.stiffness || 100, this.damping = o.damping || 1, this.bodyA = t,
                        this.bodyB = e, this.localAnchorA = new i(), this.localAnchorB = new i(), o.localAnchorA && this.localAnchorA.copy(o.localAnchorA),
                        o.localAnchorB && this.localAnchorB.copy(o.localAnchorB), o.worldAnchorA && this.setWorldAnchorA(o.worldAnchorA),
                        o.worldAnchorB && this.setWorldAnchorB(o.worldAnchorB);
                }
                e.exports = Spring, Spring.prototype.setWorldAnchorA = function (t) {
                    this.bodyA.pointToLocalFrame(t, this.localAnchorA);
                }, Spring.prototype.setWorldAnchorB = function (t) {
                    this.bodyB.pointToLocalFrame(t, this.localAnchorB);
                }, Spring.prototype.getWorldAnchorA = function (t) {
                    this.bodyA.pointToWorldFrame(this.localAnchorA, t);
                }, Spring.prototype.getWorldAnchorB = function (t) {
                    this.bodyB.pointToWorldFrame(this.localAnchorB, t);
                };
                var n = new i(), r = new i(), s = new i(), a = new i(), h = new i(), l = new i(), p = new i(), c = new i(), u = new i(), d = new i(), v = new i();
                Spring.prototype.applyForce = function () {
                    var t = this.stiffness, e = this.damping, o = this.restLength, i = this.bodyA, y = this.bodyB, f = n, m = r, w = s, x = a, g = v, b = h, B = l, A = p, S = c, E = u, C = d;
                    this.getWorldAnchorA(b), this.getWorldAnchorB(B), b.vsub(i.position, A), B.vsub(y.position, S),
                        B.vsub(b, f);
                    var M = f.norm();
                    m.copy(f), m.normalize(), y.velocity.vsub(i.velocity, w), y.angularVelocity.cross(S, g),
                        w.vadd(g, w), i.angularVelocity.cross(A, g), w.vsub(g, w), m.mult(-t * (M - o) - e * w.dot(m), x),
                        i.force.vsub(x, i.force), y.force.vadd(x, y.force), A.cross(x, E), S.cross(x, C),
                        i.torque.vsub(E, i.torque), y.torque.vadd(C, y.torque);
                };
            }, {
                "../math/Vec3": 31
            }],
            37: [function (t, e, o) {
                var i = t("../math/Vec3"), n = t("../math/Transform"), r = t("../collision/RaycastResult"), s = t("../utils/Utils");
                function WheelInfo(t) {
                    t = s.defaults(t, {
                        chassisConnectionPointLocal: new i(),
                        chassisConnectionPointWorld: new i(),
                        directionLocal: new i(),
                        directionWorld: new i(),
                        axleLocal: new i(),
                        axleWorld: new i(),
                        suspensionRestLength: 1,
                        suspensionMaxLength: 2,
                        radius: 1,
                        suspensionStiffness: 100,
                        dampingCompression: 10,
                        dampingRelaxation: 10,
                        frictionSlip: 1e4,
                        steering: 0,
                        rotation: 0,
                        deltaRotation: 0,
                        rollInfluence: .01,
                        maxSuspensionForce: Number.MAX_VALUE,
                        isFrontWheel: !0,
                        clippedInvContactDotSuspension: 1,
                        suspensionRelativeVelocity: 0,
                        suspensionForce: 0,
                        skidInfo: 0,
                        suspensionLength: 0,
                        maxSuspensionTravel: 1,
                        useCustomSlidingRotationalSpeed: !1,
                        customSlidingRotationalSpeed: -.1
                    }), this.maxSuspensionTravel = t.maxSuspensionTravel, this.customSlidingRotationalSpeed = t.customSlidingRotationalSpeed,
                        this.useCustomSlidingRotationalSpeed = t.useCustomSlidingRotationalSpeed, this.sliding = !1,
                        this.chassisConnectionPointLocal = t.chassisConnectionPointLocal.clone(), this.chassisConnectionPointWorld = t.chassisConnectionPointWorld.clone(),
                        this.directionLocal = t.directionLocal.clone(), this.directionWorld = t.directionWorld.clone(),
                        this.axleLocal = t.axleLocal.clone(), this.axleWorld = t.axleWorld.clone(), this.suspensionRestLength = t.suspensionRestLength,
                        this.suspensionMaxLength = t.suspensionMaxLength, this.radius = t.radius, this.suspensionStiffness = t.suspensionStiffness,
                        this.dampingCompression = t.dampingCompression, this.dampingRelaxation = t.dampingRelaxation,
                        this.frictionSlip = t.frictionSlip, this.steering = 0, this.rotation = 0, this.deltaRotation = 0,
                        this.rollInfluence = t.rollInfluence, this.maxSuspensionForce = t.maxSuspensionForce,
                        this.engineForce = 0, this.brake = 0, this.isFrontWheel = t.isFrontWheel, this.clippedInvContactDotSuspension = 1,
                        this.suspensionRelativeVelocity = 0, this.suspensionForce = 0, this.skidInfo = 0,
                        this.suspensionLength = 0, this.sideImpulse = 0, this.forwardImpulse = 0, this.raycastResult = new r(),
                        this.worldTransform = new n(), this.isInContact = !1;
                }
                e.exports = WheelInfo;
                var a = new i(), h = new i();
                a = new i();
                WheelInfo.prototype.updateWheel = function (t) {
                    var e = this.raycastResult;
                    if (this.isInContact) {
                        var o = e.hitNormalWorld.dot(e.directionWorld);
                        e.hitPointWorld.vsub(t.position, h), t.getVelocityAtWorldPoint(h, a);
                        var i = e.hitNormalWorld.dot(a);
                        if (o >= -.1) this.suspensionRelativeVelocity = 0, this.clippedInvContactDotSuspension = 10; else {
                            var n = -1 / o;
                            this.suspensionRelativeVelocity = i * n, this.clippedInvContactDotSuspension = n;
                        }
                    } else e.suspensionLength = this.suspensionRestLength, this.suspensionRelativeVelocity = 0,
                        e.directionWorld.scale(-1, e.hitNormalWorld), this.clippedInvContactDotSuspension = 1;
                };
            }, {
                "../collision/RaycastResult": 11,
                "../math/Transform": 30,
                "../math/Vec3": 31,
                "../utils/Utils": 54
            }],
            38: [function (t, e, o) {
                e.exports = Box;
                var i = t("./Shape"), n = t("../math/Vec3"), r = t("./ConvexPolyhedron");
                function Box(t) {
                    i.call(this, {
                        type: i.types.BOX
                    }), this.halfExtents = t, this.convexPolyhedronRepresentation = null, this.updateConvexPolyhedronRepresentation(),
                        this.updateBoundingSphereRadius();
                }
                Box.prototype = new i(), Box.prototype.constructor = Box, Box.prototype.updateConvexPolyhedronRepresentation = function () {
                    var t = this.halfExtents.x, e = this.halfExtents.y, o = this.halfExtents.z, i = n, s = [new i(-t, -e, -o), new i(t, -e, -o), new i(t, e, -o), new i(-t, e, -o), new i(-t, -e, o), new i(t, -e, o), new i(t, e, o), new i(-t, e, o)], a = (new i(0, 0, 1),
                        new i(0, 1, 0), new i(1, 0, 0), new r(s, [[3, 2, 1, 0], [4, 5, 6, 7], [5, 4, 0, 1], [2, 3, 7, 6], [0, 4, 7, 3], [1, 2, 6, 5]]));
                    this.convexPolyhedronRepresentation = a, a.material = this.material;
                }, Box.prototype.calculateLocalInertia = function (t, e) {
                    return e = e || new n(), Box.calculateInertia(this.halfExtents, t, e), e;
                }, Box.calculateInertia = function (t, e, o) {
                    var i = t;
                    o.x = 1 / 12 * e * (2 * i.y * 2 * i.y + 2 * i.z * 2 * i.z), o.y = 1 / 12 * e * (2 * i.x * 2 * i.x + 2 * i.z * 2 * i.z),
                        o.z = 1 / 12 * e * (2 * i.y * 2 * i.y + 2 * i.x * 2 * i.x);
                }, Box.prototype.getSideNormals = function (t, e) {
                    var o = t, i = this.halfExtents;
                    if (o[0].set(i.x, 0, 0), o[1].set(0, i.y, 0), o[2].set(0, 0, i.z), o[3].set(-i.x, 0, 0),
                        o[4].set(0, -i.y, 0), o[5].set(0, 0, -i.z), void 0 !== e) for (var n = 0; n !== o.length; n++) {
                            e.vmult(o[n], o[n]);
                        }
                    return o;
                }, Box.prototype.volume = function () {
                    return 8 * this.halfExtents.x * this.halfExtents.y * this.halfExtents.z;
                }, Box.prototype.updateBoundingSphereRadius = function () {
                    this.boundingSphereRadius = this.halfExtents.norm();
                };
                var s = new n();
                new n();
                Box.prototype.forEachWorldCorner = function (t, e, o) {
                    for (var i = this.halfExtents, n = [[i.x, i.y, i.z], [-i.x, i.y, i.z], [-i.x, -i.y, i.z], [-i.x, -i.y, -i.z], [i.x, -i.y, -i.z], [i.x, i.y, -i.z], [-i.x, i.y, -i.z], [i.x, -i.y, i.z]], r = 0; r < n.length; r++) {
                        s.set(n[r][0], n[r][1], n[r][2]), e.vmult(s, s), t.vadd(s, s), o(s.x, s.y, s.z);
                    }
                };
                var a = [new n(), new n(), new n(), new n(), new n(), new n(), new n(), new n()];
                Box.prototype.calculateWorldAABB = function (t, e, o, i) {
                    var n = this.halfExtents;
                    a[0].set(n.x, n.y, n.z), a[1].set(-n.x, n.y, n.z), a[2].set(-n.x, -n.y, n.z), a[3].set(-n.x, -n.y, -n.z),
                        a[4].set(n.x, -n.y, -n.z), a[5].set(n.x, n.y, -n.z), a[6].set(-n.x, n.y, -n.z),
                        a[7].set(n.x, -n.y, n.z);
                    var r = a[0];
                    e.vmult(r, r), t.vadd(r, r), i.copy(r), o.copy(r);
                    for (var s = 1; s < 8; s++) {
                        r = a[s];
                        e.vmult(r, r), t.vadd(r, r);
                        var h = r.x, l = r.y, p = r.z;
                        h > i.x && (i.x = h), l > i.y && (i.y = l), p > i.z && (i.z = p), h < o.x && (o.x = h),
                            l < o.y && (o.y = l), p < o.z && (o.z = p);
                    }
                };
            }, {
                "../math/Vec3": 31,
                "./ConvexPolyhedron": 39,
                "./Shape": 44
            }],
            39: [function (t, e, o) {
                e.exports = ConvexPolyhedron;
                var i = t("./Shape"), n = t("../math/Vec3"), r = (t("../math/Quaternion"), t("../math/Transform"));
                function ConvexPolyhedron(t, e, o) {
                    i.call(this, {
                        type: i.types.CONVEXPOLYHEDRON
                    }), this.vertices = t || [], this.worldVertices = [], this.worldVerticesNeedsUpdate = !0,
                        this.faces = e || [], this.faceNormals = [], this.computeNormals(), this.worldFaceNormalsNeedsUpdate = !0,
                        this.worldFaceNormals = [], this.uniqueEdges = [], this.uniqueAxes = o ? o.slice() : null,
                        this.computeEdges(), this.updateBoundingSphereRadius();
                }
                ConvexPolyhedron.prototype = new i(), ConvexPolyhedron.prototype.constructor = ConvexPolyhedron;
                var s = new n();
                ConvexPolyhedron.prototype.computeEdges = function () {
                    var t = this.faces, e = this.vertices, o = (e.length, this.uniqueEdges);
                    o.length = 0;
                    for (var i = s, n = 0; n !== t.length; n++) {
                        for (var r = t[n], a = r.length, h = 0; h !== a; h++) {
                            var l = (h + 1) % a;
                            e[r[h]].vsub(e[r[l]], i), i.normalize();
                            for (var p = !1, c = 0; c !== o.length; c++) {
                                if (o[c].almostEquals(i) || o[c].almostEquals(i)) {
                                    p = !0;
                                    break;
                                }
                            }
                            p || o.push(i.clone());
                        }
                    }
                }, ConvexPolyhedron.prototype.computeNormals = function () {
                    this.faceNormals.length = this.faces.length;
                    for (var t = 0; t < this.faces.length; t++) {
                        for (var e = 0; e < this.faces[t].length; e++) {
                            if (!this.vertices[this.faces[t][e]]) throw new Error("Vertex " + this.faces[t][e] + " not found!");
                        }
                        var o = this.faceNormals[t] || new n();
                        this.getFaceNormal(t, o), o.negate(o), this.faceNormals[t] = o;
                        var i = this.vertices[this.faces[t][0]];
                        if (o.dot(i) < 0) {
                            console.error(".faceNormals[" + t + "] = Vec3(" + o.toString() + ") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");
                            for (e = 0; e < this.faces[t].length; e++) {
                                console.warn(".vertices[" + this.faces[t][e] + "] = Vec3(" + this.vertices[this.faces[t][e]].toString() + ")");
                            }
                        }
                    }
                };
                var a = new n(), h = new n();
                ConvexPolyhedron.computeNormal = function (t, e, o, i) {
                    e.vsub(t, h), o.vsub(e, a), a.cross(h, i), i.isZero() || i.normalize();
                }, ConvexPolyhedron.prototype.getFaceNormal = function (t, e) {
                    var o = this.faces[t], i = this.vertices[o[0]], n = this.vertices[o[1]], r = this.vertices[o[2]];
                    return ConvexPolyhedron.computeNormal(i, n, r, e);
                };
                var l = new n();
                ConvexPolyhedron.prototype.clipAgainstHull = function (t, e, o, i, r, s, a, h, p) {
                    for (var c = l, u = -1, d = -Number.MAX_VALUE, v = 0; v < o.faces.length; v++) {
                        c.copy(o.faceNormals[v]), r.vmult(c, c);
                        var y = c.dot(s);
                        y > d && (d = y, u = v);
                    }
                    for (var f = [], m = o.faces[u], w = m.length, x = 0; x < w; x++) {
                        var g = o.vertices[m[x]], b = new n();
                        b.copy(g), r.vmult(b, b), i.vadd(b, b), f.push(b);
                    }
                    u >= 0 && this.clipFaceAgainstHull(s, t, e, f, a, h, p);
                };
                var p = new n(), c = new n(), u = new n(), d = new n(), v = new n(), y = new n();
                ConvexPolyhedron.prototype.findSeparatingAxis = function (t, e, o, i, n, r, s, a) {
                    var h = p, l = c, f = u, m = d, w = v, x = y, g = Number.MAX_VALUE;
                    if (this.uniqueAxes) for (B = 0; B !== this.uniqueAxes.length; B++) {
                        if (o.vmult(this.uniqueAxes[B], h), !1 === (E = this.testSepAxis(h, t, e, o, i, n))) return !1;
                        E < g && (g = E, r.copy(h));
                    } else for (var b = s ? s.length : this.faces.length, B = 0; B < b; B++) {
                        var A = s ? s[B] : B;
                        if (h.copy(this.faceNormals[A]), o.vmult(h, h), !1 === (E = this.testSepAxis(h, t, e, o, i, n))) return !1;
                        E < g && (g = E, r.copy(h));
                    }
                    if (t.uniqueAxes) for (B = 0; B !== t.uniqueAxes.length; B++) {
                        if (n.vmult(t.uniqueAxes[B], l), 0, !1 === (E = this.testSepAxis(l, t, e, o, i, n))) return !1;
                        E < g && (g = E, r.copy(l));
                    } else for (var S = a ? a.length : t.faces.length, B = 0; B < S; B++) {
                        var E;
                        A = a ? a[B] : B;
                        if (l.copy(t.faceNormals[A]), n.vmult(l, l), 0, !1 === (E = this.testSepAxis(l, t, e, o, i, n))) return !1;
                        E < g && (g = E, r.copy(l));
                    }
                    for (var C = 0; C !== this.uniqueEdges.length; C++) {
                        o.vmult(this.uniqueEdges[C], m);
                        for (var M = 0; M !== t.uniqueEdges.length; M++) {
                            if (n.vmult(t.uniqueEdges[M], w), m.cross(w, x), !x.almostZero()) {
                                x.normalize();
                                var R = this.testSepAxis(x, t, e, o, i, n);
                                if (!1 === R) return !1;
                                R < g && (g = R, r.copy(x));
                            }
                        }
                    }
                    return i.vsub(e, f), f.dot(r) > 0 && r.negate(r), !0;
                };
                var f = [], m = [];
                ConvexPolyhedron.prototype.testSepAxis = function (t, e, o, i, n, r) {
                    ConvexPolyhedron.project(this, t, o, i, f), ConvexPolyhedron.project(e, t, n, r, m);
                    var s = f[0], a = f[1], h = m[0], l = m[1];
                    if (s < l || h < a) return !1;
                    var p = s - l, c = h - a;
                    return p < c ? p : c;
                };
                var w = new n(), x = new n();
                ConvexPolyhedron.prototype.calculateLocalInertia = function (t, e) {
                    this.computeLocalAABB(w, x);
                    var o = x.x - w.x, i = x.y - w.y, n = x.z - w.z;
                    e.x = 1 / 12 * t * (2 * i * 2 * i + 2 * n * 2 * n), e.y = 1 / 12 * t * (2 * o * 2 * o + 2 * n * 2 * n),
                        e.z = 1 / 12 * t * (2 * i * 2 * i + 2 * o * 2 * o);
                }, ConvexPolyhedron.prototype.getPlaneConstantOfFace = function (t) {
                    var e = this.faces[t], o = this.faceNormals[t], i = this.vertices[e[0]];
                    return -o.dot(i);
                };
                var g = new n(), b = new n(), B = new n(), A = new n(), S = new n(), E = new n(), C = new n(), M = new n();
                ConvexPolyhedron.prototype.clipFaceAgainstHull = function (t, e, o, i, n, r, s) {
                    for (var a = g, h = b, l = B, p = A, c = S, u = E, d = C, v = M, y = i, f = [], m = -1, w = Number.MAX_VALUE, x = 0; x < this.faces.length; x++) {
                        a.copy(this.faceNormals[x]), o.vmult(a, a);
                        var R = a.dot(t);
                        R < w && (w = R, m = x);
                    }
                    if (!(m < 0)) {
                        var P = this.faces[m];
                        P.connectedFaces = [];
                        for (var q = 0; q < this.faces.length; q++) {
                            for (var z = 0; z < this.faces[q].length; z++) {
                                -1 !== P.indexOf(this.faces[q][z]) && q !== m && -1 === P.connectedFaces.indexOf(q) && P.connectedFaces.push(q);
                            }
                        }
                        y.length;
                        for (var V = P.length, T = 0; T < V; T++) {
                            var F = this.vertices[P[T]], N = this.vertices[P[(T + 1) % V]];
                            F.vsub(N, h), l.copy(h), o.vmult(l, l), e.vadd(l, l), p.copy(this.faceNormals[m]),
                                o.vmult(p, p), e.vadd(p, p), l.cross(p, c), c.negate(c), u.copy(F), o.vmult(u, u),
                                e.vadd(u, u);
                            u.dot(c);
                            var I = P.connectedFaces[T];
                            d.copy(this.faceNormals[I]);
                            var W = this.getPlaneConstantOfFace(I);
                            v.copy(d), o.vmult(v, v);
                            var L = W - v.dot(e);
                            for (this.clipFaceAgainstPlane(y, f, v, L); y.length;) {
                                y.shift();
                            }
                            for (; f.length;) {
                                y.push(f.shift());
                            }
                        }
                        d.copy(this.faceNormals[m]);
                        W = this.getPlaneConstantOfFace(m);
                        v.copy(d), o.vmult(v, v);
                        for (L = W - v.dot(e), q = 0; q < y.length; q++) {
                            var j = v.dot(y[q]) + L;
                            if (j <= n && (console.log("clamped: depth=" + j + " to minDist=" + n), j = n),
                                j <= r) {
                                var O = y[q];
                                if (j <= 0) {
                                    var k = {
                                        point: O,
                                        normal: v,
                                        depth: j
                                    };
                                    s.push(k);
                                }
                            }
                        }
                    }
                }, ConvexPolyhedron.prototype.clipFaceAgainstPlane = function (t, e, o, i) {
                    var r, s, a = t.length;
                    if (a < 2) return e;
                    var h = t[t.length - 1], l = t[0];
                    r = o.dot(h) + i;
                    for (var p = 0; p < a; p++) {
                        if (l = t[p], s = o.dot(l) + i, r < 0) {
                            if (s < 0) {
                                (c = new n()).copy(l), e.push(c);
                            } else {
                                var c = new n();
                                h.lerp(l, r / (r - s), c), e.push(c);
                            }
                        } else if (s < 0) {
                            c = new n();
                            h.lerp(l, r / (r - s), c), e.push(c), e.push(l);
                        }
                        h = l, r = s;
                    }
                    return e;
                }, ConvexPolyhedron.prototype.computeWorldVertices = function (t, e) {
                    for (var o = this.vertices.length; this.worldVertices.length < o;) {
                        this.worldVertices.push(new n());
                    }
                    for (var i = this.vertices, r = this.worldVertices, s = 0; s !== o; s++) {
                        e.vmult(i[s], r[s]), t.vadd(r[s], r[s]);
                    }
                    this.worldVerticesNeedsUpdate = !1;
                };
                new n();
                ConvexPolyhedron.prototype.computeLocalAABB = function (t, e) {
                    var o = this.vertices.length, i = this.vertices;
                    t.set(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), e.set(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
                    for (var n = 0; n < o; n++) {
                        var r = i[n];
                        r.x < t.x ? t.x = r.x : r.x > e.x && (e.x = r.x), r.y < t.y ? t.y = r.y : r.y > e.y && (e.y = r.y),
                            r.z < t.z ? t.z = r.z : r.z > e.z && (e.z = r.z);
                    }
                }, ConvexPolyhedron.prototype.computeWorldFaceNormals = function (t) {
                    for (var e = this.faceNormals.length; this.worldFaceNormals.length < e;) {
                        this.worldFaceNormals.push(new n());
                    }
                    for (var o = this.faceNormals, i = this.worldFaceNormals, r = 0; r !== e; r++) {
                        t.vmult(o[r], i[r]);
                    }
                    this.worldFaceNormalsNeedsUpdate = !1;
                }, ConvexPolyhedron.prototype.updateBoundingSphereRadius = function () {
                    for (var t = 0, e = this.vertices, o = 0, i = e.length; o !== i; o++) {
                        var n = e[o].norm2();
                        n > t && (t = n);
                    }
                    this.boundingSphereRadius = Math.sqrt(t);
                };
                var R = new n();
                ConvexPolyhedron.prototype.calculateWorldAABB = function (t, e, o, i) {
                    for (var n, r, s, a, h, l, p = this.vertices.length, c = this.vertices, u = 0; u < p; u++) {
                        R.copy(c[u]), e.vmult(R, R), t.vadd(R, R);
                        var d = R;
                        d.x < n || void 0 === n ? n = d.x : (d.x > a || void 0 === a) && (a = d.x), d.y < r || void 0 === r ? r = d.y : (d.y > h || void 0 === h) && (h = d.y),
                            d.z < s || void 0 === s ? s = d.z : (d.z > l || void 0 === l) && (l = d.z);
                    }
                    o.set(n, r, s), i.set(a, h, l);
                }, ConvexPolyhedron.prototype.volume = function () {
                    return 4 * Math.PI * this.boundingSphereRadius / 3;
                }, ConvexPolyhedron.prototype.getAveragePointLocal = function (t) {
                    t = t || new n();
                    for (var e = this.vertices.length, o = this.vertices, i = 0; i < e; i++) {
                        t.vadd(o[i], t);
                    }
                    return t.mult(1 / e, t), t;
                }, ConvexPolyhedron.prototype.transformAllPoints = function (t, e) {
                    var o = this.vertices.length, i = this.vertices;
                    if (e) {
                        for (var n = 0; n < o; n++) {
                            var r = i[n];
                            e.vmult(r, r);
                        }
                        for (n = 0; n < this.faceNormals.length; n++) {
                            r = this.faceNormals[n];
                            e.vmult(r, r);
                        }
                    }
                    if (t) for (n = 0; n < o; n++) {
                        (r = i[n]).vadd(t, r);
                    }
                };
                var P = new n(), q = new n(), z = new n();
                ConvexPolyhedron.prototype.pointIsInside = function (t) {
                    var e = this.vertices.length, o = this.vertices, i = this.faces, n = this.faceNormals, r = this.faces.length, s = P;
                    this.getAveragePointLocal(s);
                    for (var a = 0; a < r; a++) {
                        this.faces[a].length, e = n[a];
                        var h = o[i[a][0]], l = q;
                        t.vsub(h, l);
                        var p = e.dot(l), c = z;
                        s.vsub(h, c);
                        var u = e.dot(c);
                        if (p < 0 && u > 0 || p > 0 && u < 0) return !1;
                    }
                    return -1;
                };
                new n();
                var V = new n(), T = new n();
                ConvexPolyhedron.project = function (t, e, o, i, n) {
                    var s = t.vertices.length, a = V, h = 0, l = 0, p = T, c = t.vertices;
                    p.setZero(), r.vectorToLocalFrame(o, i, e, a), r.pointToLocalFrame(o, i, p, p);
                    var u = p.dot(a);
                    l = h = c[0].dot(a);
                    for (var d = 1; d < s; d++) {
                        var v = c[d].dot(a);
                        v > h && (h = v), v < l && (l = v);
                    }
                    if ((l -= u) > (h -= u)) {
                        var y = l;
                        l = h, h = y;
                    }
                    n[0] = h, n[1] = l;
                };
            }, {
                "../math/Quaternion": 29,
                "../math/Transform": 30,
                "../math/Vec3": 31,
                "./Shape": 44
            }],
            40: [function (t, e, o) {
                e.exports = Cylinder;
                t("./Shape");
                var i = t("../math/Vec3"), n = (t("../math/Quaternion"), t("./ConvexPolyhedron"));
                function Cylinder(t, e, o, r) {
                    var s = r, a = [], h = [], l = [], p = [], c = [], u = Math.cos, d = Math.sin;
                    a.push(new i(e * u(0), e * d(0), .5 * -o)), p.push(0), a.push(new i(t * u(0), t * d(0), .5 * o)),
                        c.push(1);
                    for (var v = 0; v < s; v++) {
                        var y = 2 * Math.PI / s * (v + 1), f = 2 * Math.PI / s * (v + .5);
                        v < s - 1 ? (a.push(new i(e * u(y), e * d(y), .5 * -o)), p.push(2 * v + 2), a.push(new i(t * u(y), t * d(y), .5 * o)),
                            c.push(2 * v + 3), l.push([2 * v + 2, 2 * v + 3, 2 * v + 1, 2 * v])) : l.push([0, 1, 2 * v + 1, 2 * v]),
                            (s % 2 == 1 || v < s / 2) && h.push(new i(u(f), d(f), 0));
                    }
                    l.push(c), h.push(new i(0, 0, 1));
                    var m = [];
                    for (v = 0; v < p.length; v++) {
                        m.push(p[p.length - v - 1]);
                    }
                    l.push(m), n.call(this, a, l, h);
                }
                Cylinder.prototype = new n();
            }, {
                "../math/Quaternion": 29,
                "../math/Vec3": 31,
                "./ConvexPolyhedron": 39,
                "./Shape": 44
            }],
            41: [function (t, e, o) {
                var i = t("./Shape"), n = t("./ConvexPolyhedron"), r = t("../math/Vec3"), s = t("../utils/Utils");
                function Heightfield(t, e) {
                    e = s.defaults(e, {
                        maxValue: null,
                        minValue: null,
                        elementSize: 1
                    }), this.data = t, this.maxValue = e.maxValue, this.minValue = e.minValue, this.elementSize = e.elementSize,
                        null === e.minValue && this.updateMinValue(), null === e.maxValue && this.updateMaxValue(),
                        this.cacheEnabled = !0, i.call(this, {
                            type: i.types.HEIGHTFIELD
                        }), this.pillarConvex = new n(), this.pillarOffset = new r(), this.updateBoundingSphereRadius(),
                        this._cachedPillars = {};
                }
                e.exports = Heightfield, Heightfield.prototype = new i(), Heightfield.prototype.update = function () {
                    this._cachedPillars = {};
                }, Heightfield.prototype.updateMinValue = function () {
                    for (var t = this.data, e = t[0][0], o = 0; o !== t.length; o++) {
                        for (var i = 0; i !== t[o].length; i++) {
                            var n = t[o][i];
                            n < e && (e = n);
                        }
                    }
                    this.minValue = e;
                }, Heightfield.prototype.updateMaxValue = function () {
                    for (var t = this.data, e = t[0][0], o = 0; o !== t.length; o++) {
                        for (var i = 0; i !== t[o].length; i++) {
                            var n = t[o][i];
                            n > e && (e = n);
                        }
                    }
                    this.maxValue = e;
                }, Heightfield.prototype.setHeightValueAtIndex = function (t, e, o) {
                    this.data[t][e] = o, this.clearCachedConvexTrianglePillar(t, e, !1), t > 0 && (this.clearCachedConvexTrianglePillar(t - 1, e, !0),
                        this.clearCachedConvexTrianglePillar(t - 1, e, !1)), e > 0 && (this.clearCachedConvexTrianglePillar(t, e - 1, !0),
                            this.clearCachedConvexTrianglePillar(t, e - 1, !1)), e > 0 && t > 0 && this.clearCachedConvexTrianglePillar(t - 1, e - 1, !0);
                }, Heightfield.prototype.getRectMinMax = function (t, e, o, i, n) {
                    n = n || [];
                    for (var r = this.data, s = this.minValue, a = t; a <= o; a++) {
                        for (var h = e; h <= i; h++) {
                            var l = r[a][h];
                            l > s && (s = l);
                        }
                    }
                    n[0] = this.minValue, n[1] = s;
                }, Heightfield.prototype.getIndexOfPosition = function (t, e, o, i) {
                    var n = this.elementSize, r = this.data, s = Math.floor(t / n), a = Math.floor(e / n);
                    return o[0] = s, o[1] = a, i && (s < 0 && (s = 0), a < 0 && (a = 0), s >= r.length - 1 && (s = r.length - 1),
                        a >= r[0].length - 1 && (a = r[0].length - 1)), !(s < 0 || a < 0 || s >= r.length - 1 || a >= r[0].length - 1);
                };
                var a = [], h = new r(), l = new r(), p = new r(), c = new r();
                Heightfield.prototype.getTriangleAt = function (t, e, o, i, n, r) {
                    var s = a;
                    this.getIndexOfPosition(t, e, s, o);
                    var h = s[0], l = s[1], p = this.data;
                    o && (h = Math.min(p.length - 2, Math.max(0, h)), l = Math.min(p[0].length - 2, Math.max(0, l)));
                    var c = this.elementSize, u = Math.pow(t / c - h, 2) + Math.pow(e / c - l, 2) > Math.pow(t / c - (h + 1), 2) + Math.pow(e / c - (l + 1), 2);
                    return this.getTriangle(h, l, u, i, n, r), u;
                };
                var u = new r(), d = new r(), v = new r(), y = new r(), f = new r();
                Heightfield.prototype.getNormalAt = function (t, e, o, i) {
                    var n = u, r = d, s = v, a = y, h = f;
                    this.getTriangleAt(t, e, o, n, r, s), r.vsub(n, a), s.vsub(n, h), a.cross(h, i),
                        i.normalize();
                }, Heightfield.prototype.getAabbAtIndex = function (t, e, o) {
                    var i = this.data, n = this.elementSize;
                    o.lowerBound.set(t * n, e * n, i[t][e]), o.upperBound.set((t + 1) * n, (e + 1) * n, i[t + 1][e + 1]);
                }, Heightfield.prototype.getHeightAt = function (t, e, o) {
                    var i = this.data, n = l, r = p, s = c, u = a;
                    this.getIndexOfPosition(t, e, u, o);
                    var d = u[0], v = u[1];
                    o && (d = Math.min(i.length - 2, Math.max(0, d)), v = Math.min(i[0].length - 2, Math.max(0, v)));
                    var y = this.getTriangleAt(t, e, o, n, r, s);
                    !function (t, e, o, i, n, r, s, a, h) {
                        h.x = ((r - a) * (t - s) + (s - n) * (e - a)) / ((r - a) * (o - s) + (s - n) * (i - a)),
                            h.y = ((a - i) * (t - s) + (o - s) * (e - a)) / ((r - a) * (o - s) + (s - n) * (i - a)),
                            h.z = 1 - h.x - h.y;
                    }(t, e, n.x, n.y, r.x, r.y, s.x, s.y, h);
                    var f = h;
                    return y ? i[d + 1][v + 1] * f.x + i[d][v + 1] * f.y + i[d + 1][v] * f.z : i[d][v] * f.x + i[d + 1][v] * f.y + i[d][v + 1] * f.z;
                }, Heightfield.prototype.getCacheConvexTrianglePillarKey = function (t, e, o) {
                    return t + "_" + e + "_" + (o ? 1 : 0);
                }, Heightfield.prototype.getCachedConvexTrianglePillar = function (t, e, o) {
                    return this._cachedPillars[this.getCacheConvexTrianglePillarKey(t, e, o)];
                }, Heightfield.prototype.setCachedConvexTrianglePillar = function (t, e, o, i, n) {
                    this._cachedPillars[this.getCacheConvexTrianglePillarKey(t, e, o)] = {
                        convex: i,
                        offset: n
                    };
                }, Heightfield.prototype.clearCachedConvexTrianglePillar = function (t, e, o) {
                    delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(t, e, o)];
                }, Heightfield.prototype.getTriangle = function (t, e, o, i, n, r) {
                    var s = this.data, a = this.elementSize;
                    o ? (i.set((t + 1) * a, (e + 1) * a, s[t + 1][e + 1]), n.set(t * a, (e + 1) * a, s[t][e + 1]),
                        r.set((t + 1) * a, e * a, s[t + 1][e])) : (i.set(t * a, e * a, s[t][e]), n.set((t + 1) * a, e * a, s[t + 1][e]),
                            r.set(t * a, (e + 1) * a, s[t][e + 1]));
                }, Heightfield.prototype.getConvexTrianglePillar = function (t, e, o) {
                    var i = this.pillarConvex, s = this.pillarOffset;
                    if (this.cacheEnabled) {
                        if (a = this.getCachedConvexTrianglePillar(t, e, o)) return this.pillarConvex = a.convex,
                            void (this.pillarOffset = a.offset);
                        i = new n(), s = new r(), this.pillarConvex = i, this.pillarOffset = s;
                    }
                    var a = this.data, h = this.elementSize, l = i.faces;
                    i.vertices.length = 6;
                    for (var p = 0; p < 6; p++) {
                        i.vertices[p] || (i.vertices[p] = new r());
                    }
                    l.length = 5;
                    for (p = 0; p < 5; p++) {
                        l[p] || (l[p] = []);
                    }
                    var c = i.vertices, u = (Math.min(a[t][e], a[t + 1][e], a[t][e + 1], a[t + 1][e + 1]) - this.minValue) / 2 + this.minValue;
                    o ? (s.set((t + .75) * h, (e + .75) * h, u), c[0].set(.25 * h, .25 * h, a[t + 1][e + 1] - u),
                        c[1].set(-.75 * h, .25 * h, a[t][e + 1] - u), c[2].set(.25 * h, -.75 * h, a[t + 1][e] - u),
                        c[3].set(.25 * h, .25 * h, -u - 1), c[4].set(-.75 * h, .25 * h, -u - 1), c[5].set(.25 * h, -.75 * h, -u - 1),
                        l[0][0] = 0, l[0][1] = 1, l[0][2] = 2, l[1][0] = 5, l[1][1] = 4, l[1][2] = 3, l[2][0] = 2,
                        l[2][1] = 5, l[2][2] = 3, l[2][3] = 0, l[3][0] = 3, l[3][1] = 4, l[3][2] = 1, l[3][3] = 0,
                        l[4][0] = 1, l[4][1] = 4, l[4][2] = 5, l[4][3] = 2) : (s.set((t + .25) * h, (e + .25) * h, u),
                            c[0].set(-.25 * h, -.25 * h, a[t][e] - u), c[1].set(.75 * h, -.25 * h, a[t + 1][e] - u),
                            c[2].set(-.25 * h, .75 * h, a[t][e + 1] - u), c[3].set(-.25 * h, -.25 * h, -u - 1),
                            c[4].set(.75 * h, -.25 * h, -u - 1), c[5].set(-.25 * h, .75 * h, -u - 1), l[0][0] = 0,
                            l[0][1] = 1, l[0][2] = 2, l[1][0] = 5, l[1][1] = 4, l[1][2] = 3, l[2][0] = 0, l[2][1] = 2,
                            l[2][2] = 5, l[2][3] = 3, l[3][0] = 1, l[3][1] = 0, l[3][2] = 3, l[3][3] = 4, l[4][0] = 4,
                            l[4][1] = 5, l[4][2] = 2, l[4][3] = 1), i.computeNormals(), i.computeEdges(), i.updateBoundingSphereRadius(),
                        this.setCachedConvexTrianglePillar(t, e, o, i, s);
                }, Heightfield.prototype.calculateLocalInertia = function (t, e) {
                    return (e = e || new r()).set(0, 0, 0), e;
                }, Heightfield.prototype.volume = function () {
                    return Number.MAX_VALUE;
                }, Heightfield.prototype.calculateWorldAABB = function (t, e, o, i) {
                    o.set(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE), i.set(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
                }, Heightfield.prototype.updateBoundingSphereRadius = function () {
                    var t = this.data, e = this.elementSize;
                    this.boundingSphereRadius = new r(t.length * e, t[0].length * e, Math.max(Math.abs(this.maxValue), Math.abs(this.minValue))).norm();
                }, Heightfield.prototype.setHeightsFromImage = function (t, e) {
                    var o = document.createElement("canvas");
                    o.width = t.width, o.height = t.height;
                    var i = o.getContext("2d");
                    i.drawImage(t, 0, 0);
                    var n = i.getImageData(0, 0, t.width, t.height), r = this.data;
                    r.length = 0, this.elementSize = Math.abs(e.x) / n.width;
                    for (var s = 0; s < n.height; s++) {
                        for (var a = [], h = 0; h < n.width; h++) {
                            var l = (n.data[4 * (s * n.height + h)] + n.data[4 * (s * n.height + h) + 1] + n.data[4 * (s * n.height + h) + 2]) / 4 / 255 * e.z;
                            e.x < 0 ? a.push(l) : a.unshift(l);
                        }
                        e.y < 0 ? r.unshift(a) : r.push(a);
                    }
                    this.updateMaxValue(), this.updateMinValue(), this.update();
                };
            }, {
                "../math/Vec3": 31,
                "../utils/Utils": 54,
                "./ConvexPolyhedron": 39,
                "./Shape": 44
            }],
            42: [function (t, e, o) {
                e.exports = Particle;
                var i = t("./Shape"), n = t("../math/Vec3");
                function Particle() {
                    i.call(this, {
                        type: i.types.PARTICLE
                    });
                }
                Particle.prototype = new i(), Particle.prototype.constructor = Particle, Particle.prototype.calculateLocalInertia = function (t, e) {
                    return (e = e || new n()).set(0, 0, 0), e;
                }, Particle.prototype.volume = function () {
                    return 0;
                }, Particle.prototype.updateBoundingSphereRadius = function () {
                    this.boundingSphereRadius = 0;
                }, Particle.prototype.calculateWorldAABB = function (t, e, o, i) {
                    o.copy(t), i.copy(t);
                };
            }, {
                "../math/Vec3": 31,
                "./Shape": 44
            }],
            43: [function (t, e, o) {
                e.exports = Plane;
                var i = t("./Shape"), n = t("../math/Vec3");
                function Plane() {
                    i.call(this, {
                        type: i.types.PLANE
                    }), this.worldNormal = new n(), this.worldNormalNeedsUpdate = !0, this.boundingSphereRadius = Number.MAX_VALUE;
                }
                Plane.prototype = new i(), Plane.prototype.constructor = Plane, Plane.prototype.computeWorldNormal = function (t) {
                    var e = this.worldNormal;
                    e.set(0, 0, 1), t.vmult(e, e), this.worldNormalNeedsUpdate = !1;
                }, Plane.prototype.calculateLocalInertia = function (t, e) {
                    return e = e || new n();
                }, Plane.prototype.volume = function () {
                    return Number.MAX_VALUE;
                };
                var r = new n();
                Plane.prototype.calculateWorldAABB = function (t, e, o, i) {
                    r.set(0, 0, 1), e.vmult(r, r);
                    var n = Number.MAX_VALUE;
                    o.set(-n, -n, -n), i.set(n, n, n), 1 === r.x && (i.x = t.x), 1 === r.y && (i.y = t.y),
                        1 === r.z && (i.z = t.z), -1 === r.x && (o.x = t.x), -1 === r.y && (o.y = t.y),
                        -1 === r.z && (o.z = t.z);
                }, Plane.prototype.updateBoundingSphereRadius = function () {
                    this.boundingSphereRadius = Number.MAX_VALUE;
                };
            }, {
                "../math/Vec3": 31,
                "./Shape": 44
            }],
            44: [function (t, e, o) {
                e.exports = i;
                var i = t("./Shape");
                t("../math/Vec3"), t("../math/Quaternion"), t("../material/Material");
                function i(t) {
                    t = t || {}, this.id = i.idCounter++, this.type = t.type || 0, this.boundingSphereRadius = 0,
                        this.collisionResponse = !t.collisionResponse || t.collisionResponse, this.collisionFilterGroup = void 0 !== t.collisionFilterGroup ? t.collisionFilterGroup : 1,
                        this.collisionFilterMask = void 0 !== t.collisionFilterMask ? t.collisionFilterMask : -1,
                        this.material = t.material ? t.material : null, this.body = null;
                }
                i.prototype.constructor = i, i.prototype.updateBoundingSphereRadius = function () {
                    throw "computeBoundingSphereRadius() not implemented for shape type " + this.type;
                }, i.prototype.volume = function () {
                    throw "volume() not implemented for shape type " + this.type;
                }, i.prototype.calculateLocalInertia = function (t, e) {
                    throw "calculateLocalInertia() not implemented for shape type " + this.type;
                }, i.idCounter = 0, i.types = {
                    SPHERE: 1,
                    PLANE: 2,
                    BOX: 4,
                    COMPOUND: 8,
                    CONVEXPOLYHEDRON: 16,
                    HEIGHTFIELD: 32,
                    PARTICLE: 64,
                    CYLINDER: 128,
                    TRIMESH: 256
                };
            }, {
                "../material/Material": 26,
                "../math/Quaternion": 29,
                "../math/Vec3": 31,
                "./Shape": 44
            }],
            45: [function (t, e, o) {
                e.exports = Sphere;
                var i = t("./Shape"), n = t("../math/Vec3");
                function Sphere(t) {
                    if (i.call(this, {
                        type: i.types.SPHERE
                    }), this.radius = void 0 !== t ? t : 1, this.radius < 0) throw new Error("The sphere radius cannot be negative.");
                    this.updateBoundingSphereRadius();
                }
                Sphere.prototype = new i(), Sphere.prototype.constructor = Sphere, Sphere.prototype.calculateLocalInertia = function (t, e) {
                    e = e || new n();
                    var o = 2 * t * this.radius * this.radius / 5;
                    return e.x = o, e.y = o, e.z = o, e;
                }, Sphere.prototype.volume = function () {
                    return 4 * Math.PI * this.radius / 3;
                }, Sphere.prototype.updateBoundingSphereRadius = function () {
                    this.boundingSphereRadius = this.radius;
                }, Sphere.prototype.calculateWorldAABB = function (t, e, o, i) {
                    for (var n = this.radius, r = ["x", "y", "z"], s = 0; s < r.length; s++) {
                        var a = r[s];
                        o[a] = t[a] - n, i[a] = t[a] + n;
                    }
                };
            }, {
                "../math/Vec3": 31,
                "./Shape": 44
            }],
            46: [function (t, e, o) {
                e.exports = Trimesh;
                var i = t("./Shape"), n = t("../math/Vec3"), r = (t("../math/Quaternion"), t("../math/Transform")), s = t("../collision/AABB"), a = t("../utils/Octree");
                function Trimesh(t, e) {
                    i.call(this, {
                        type: i.types.TRIMESH
                    }), this.vertices = new Float32Array(t), this.indices = new Int16Array(e), this.normals = new Float32Array(e.length),
                        this.aabb = new s(), this.edges = null, this.scale = new n(1, 1, 1), this.tree = new a(),
                        this.updateEdges(), this.updateNormals(), this.updateAABB(), this.updateBoundingSphereRadius(),
                        this.updateTree();
                }
                Trimesh.prototype = new i(), Trimesh.prototype.constructor = Trimesh;
                var h = new n();
                Trimesh.prototype.updateTree = function () {
                    var t = this.tree;
                    t.reset(), t.aabb.copy(this.aabb);
                    var e = this.scale;
                    t.aabb.lowerBound.x *= 1 / e.x, t.aabb.lowerBound.y *= 1 / e.y, t.aabb.lowerBound.z *= 1 / e.z,
                        t.aabb.upperBound.x *= 1 / e.x, t.aabb.upperBound.y *= 1 / e.y, t.aabb.upperBound.z *= 1 / e.z;
                    for (var o = new s(), i = new n(), r = new n(), a = new n(), h = [i, r, a], l = 0; l < this.indices.length / 3; l++) {
                        var p = 3 * l;
                        this._getUnscaledVertex(this.indices[p], i), this._getUnscaledVertex(this.indices[p + 1], r),
                            this._getUnscaledVertex(this.indices[p + 2], a), o.setFromPoints(h), t.insert(o, l);
                    }
                    t.removeEmptyNodes();
                };
                var l = new s();
                Trimesh.prototype.getTrianglesInAABB = function (t, e) {
                    l.copy(t);
                    var o = this.scale, i = o.x, n = o.y, r = o.z, s = l.lowerBound, a = l.upperBound;
                    return s.x /= i, s.y /= n, s.z /= r, a.x /= i, a.y /= n, a.z /= r, this.tree.aabbQuery(l, e);
                }, Trimesh.prototype.setScale = function (t) {
                    var e = this.scale.x === this.scale.y === this.scale.z, o = t.x === t.y === t.z;
                    e && o || this.updateNormals(), this.scale.copy(t), this.updateAABB(), this.updateBoundingSphereRadius();
                }, Trimesh.prototype.updateNormals = function () {
                    for (var t = h, e = this.normals, o = 0; o < this.indices.length / 3; o++) {
                        var i = 3 * o, n = this.indices[i], r = this.indices[i + 1], s = this.indices[i + 2];
                        this.getVertex(n, v), this.getVertex(r, y), this.getVertex(s, f), Trimesh.computeNormal(y, v, f, t),
                            e[i] = t.x, e[i + 1] = t.y, e[i + 2] = t.z;
                    }
                }, Trimesh.prototype.updateEdges = function () {
                    for (var t = {}, e = function e(_e, o) {
                        t[n < r ? n + "_" + r : r + "_" + n] = !0;
                    }, o = 0; o < this.indices.length / 3; o++) {
                        var i = 3 * o, n = this.indices[i], r = this.indices[i + 1];
                        this.indices[i + 2];
                        e(), e(), e();
                    }
                    var s = Object.keys(t);
                    this.edges = new Int16Array(2 * s.length);
                    for (o = 0; o < s.length; o++) {
                        var a = s[o].split("_");
                        this.edges[2 * o] = parseInt(a[0], 10), this.edges[2 * o + 1] = parseInt(a[1], 10);
                    }
                }, Trimesh.prototype.getEdgeVertex = function (t, e, o) {
                    var i = this.edges[2 * t + (e ? 1 : 0)];
                    this.getVertex(i, o);
                };
                var p = new n(), c = new n();
                Trimesh.prototype.getEdgeVector = function (t, e) {
                    var o = p, i = c;
                    this.getEdgeVertex(t, 0, o), this.getEdgeVertex(t, 1, i), i.vsub(o, e);
                };
                var u = new n(), d = new n();
                Trimesh.computeNormal = function (t, e, o, i) {
                    e.vsub(t, d), o.vsub(e, u), u.cross(d, i), i.isZero() || i.normalize();
                };
                var v = new n(), y = new n(), f = new n();
                Trimesh.prototype.getVertex = function (t, e) {
                    var o = this.scale;
                    return this._getUnscaledVertex(t, e), e.x *= o.x, e.y *= o.y, e.z *= o.z, e;
                }, Trimesh.prototype._getUnscaledVertex = function (t, e) {
                    var o = 3 * t, i = this.vertices;
                    return e.set(i[o], i[o + 1], i[o + 2]);
                }, Trimesh.prototype.getWorldVertex = function (t, e, o, i) {
                    return this.getVertex(t, i), r.pointToWorldFrame(e, o, i, i), i;
                }, Trimesh.prototype.getTriangleVertices = function (t, e, o, i) {
                    var n = 3 * t;
                    this.getVertex(this.indices[n], e), this.getVertex(this.indices[n + 1], o), this.getVertex(this.indices[n + 2], i);
                }, Trimesh.prototype.getNormal = function (t, e) {
                    var o = 3 * t;
                    return e.set(this.normals[o], this.normals[o + 1], this.normals[o + 2]);
                };
                var m = new s();
                Trimesh.prototype.calculateLocalInertia = function (t, e) {
                    this.computeLocalAABB(m);
                    var o = m.upperBound.x - m.lowerBound.x, i = m.upperBound.y - m.lowerBound.y, n = m.upperBound.z - m.lowerBound.z;
                    return e.set(1 / 12 * t * (2 * i * 2 * i + 2 * n * 2 * n), 1 / 12 * t * (2 * o * 2 * o + 2 * n * 2 * n), 1 / 12 * t * (2 * i * 2 * i + 2 * o * 2 * o));
                };
                var w = new n();
                Trimesh.prototype.computeLocalAABB = function (t) {
                    var e = t.lowerBound, o = t.upperBound, i = this.vertices.length, n = (this.vertices,
                        w);
                    this.getVertex(0, n), e.copy(n), o.copy(n);
                    for (var r = 0; r !== i; r++) {
                        this.getVertex(r, n), n.x < e.x ? e.x = n.x : n.x > o.x && (o.x = n.x), n.y < e.y ? e.y = n.y : n.y > o.y && (o.y = n.y),
                            n.z < e.z ? e.z = n.z : n.z > o.z && (o.z = n.z);
                    }
                }, Trimesh.prototype.updateAABB = function () {
                    this.computeLocalAABB(this.aabb);
                }, Trimesh.prototype.updateBoundingSphereRadius = function () {
                    for (var t = 0, e = this.vertices, o = new n(), i = 0, r = e.length / 3; i !== r; i++) {
                        this.getVertex(i, o);
                        var s = o.norm2();
                        s > t && (t = s);
                    }
                    this.boundingSphereRadius = Math.sqrt(t);
                };
                new n();
                var x = new r(), g = new s();
                Trimesh.prototype.calculateWorldAABB = function (t, e, o, i) {
                    var n = x, r = g;
                    n.position = t, n.quaternion = e, this.aabb.toWorldFrame(n, r), o.copy(r.lowerBound),
                        i.copy(r.upperBound);
                }, Trimesh.prototype.volume = function () {
                    return 4 * Math.PI * this.boundingSphereRadius / 3;
                }, Trimesh.createTorus = function (t, e, o, i, n) {
                    t = t || 1, e = e || .5, o = o || 8, i = i || 6, n = n || 2 * Math.PI;
                    for (var r = [], s = [], a = 0; a <= o; a++) {
                        for (var h = 0; h <= i; h++) {
                            var l = h / i * n, p = a / o * Math.PI * 2, c = (t + e * Math.cos(p)) * Math.cos(l), u = (t + e * Math.cos(p)) * Math.sin(l), d = e * Math.sin(p);
                            r.push(c, u, d);
                        }
                    }
                    for (a = 1; a <= o; a++) {
                        for (h = 1; h <= i; h++) {
                            var v = (i + 1) * a + h - 1, y = (i + 1) * (a - 1) + h - 1, f = (i + 1) * (a - 1) + h, m = (i + 1) * a + h;
                            s.push(v, y, m), s.push(y, f, m);
                        }
                    }
                    return new Trimesh(r, s);
                };
            }, {
                "../collision/AABB": 3,
                "../math/Quaternion": 29,
                "../math/Transform": 30,
                "../math/Vec3": 31,
                "../utils/Octree": 51,
                "./Shape": 44
            }],
            47: [function (t, e, o) {
                e.exports = GSSolver;
                t("../math/Vec3"), t("../math/Quaternion");
                var i = t("./Solver");
                function GSSolver() {
                    i.call(this), this.iterations = 10, this.tolerance = 1e-7;
                }
                GSSolver.prototype = new i();
                var n = [], r = [], s = [];
                GSSolver.prototype.solve = function (t, e) {
                    var o, i, a, h, l, p = 0, c = this.iterations, u = this.tolerance * this.tolerance, d = this.equations, v = d.length, y = e.bodies, f = y.length, m = t;
                    if (0 !== v) for (var w = 0; w !== f; w++) {
                        y[w].updateSolveMassProperties();
                    }
                    var x = r, g = s, b = n;
                    x.length = v, g.length = v, b.length = v;
                    for (w = 0; w !== v; w++) {
                        var B = d[w];
                        b[w] = 0, g[w] = B.computeB(m), x[w] = 1 / B.computeC();
                    }
                    if (0 !== v) {
                        for (w = 0; w !== f; w++) {
                            var A = (C = y[w]).vlambda, S = C.wlambda;
                            A.set(0, 0, 0), S.set(0, 0, 0);
                        }
                        for (p = 0; p !== c; p++) {
                            h = 0;
                            for (var E = 0; E !== v; E++) {
                                B = d[E];
                                o = g[E], i = x[E], (l = b[E]) + (a = i * (o - B.computeGWlambda() - B.eps * l)) < B.minForce ? a = B.minForce - l : l + a > B.maxForce && (a = B.maxForce - l),
                                    b[E] += a, h += a > 0 ? a : -a, B.addToWlambda(a);
                            }
                            if (h * h < u) break;
                        }
                        for (w = 0; w !== f; w++) {
                            var C, M = (C = y[w]).velocity, R = C.angularVelocity;
                            C.vlambda.vmul(C.linearFactor, C.vlambda), M.vadd(C.vlambda, M), C.wlambda.vmul(C.angularFactor, C.wlambda),
                                R.vadd(C.wlambda, R);
                        }
                        for (var P = d.length, q = 1 / m; P--;) {
                            d[P].multiplier = b[P] * q;
                        }
                    }
                    return p;
                };
            }, {
                "../math/Quaternion": 29,
                "../math/Vec3": 31,
                "./Solver": 48
            }],
            48: [function (t, e, o) {
                function Solver() {
                    this.equations = [];
                }
                e.exports = Solver, Solver.prototype.solve = function (t, e) {
                    return 0;
                }, Solver.prototype.addEquation = function (t) {
                    t.enabled && this.equations.push(t);
                }, Solver.prototype.removeEquation = function (t) {
                    var e = this.equations, o = e.indexOf(t);
                    -1 !== o && e.splice(o, 1);
                }, Solver.prototype.removeAllEquations = function () {
                    this.equations.length = 0;
                };
            }, {}],
            49: [function (t, e, o) {
                e.exports = SplitSolver;
                t("../math/Vec3"), t("../math/Quaternion");
                var i = t("./Solver"), n = t("../objects/Body");
                function SplitSolver(t) {
                    for (i.call(this), this.iterations = 10, this.tolerance = 1e-7, this.subsolver = t,
                        this.nodes = [], this.nodePool = []; this.nodePool.length < 128;) {
                        this.nodePool.push(this.createNode());
                    }
                }
                SplitSolver.prototype = new i();
                var r = [], s = [], a = {
                    bodies: []
                }, h = n.STATIC;
                function getUnvisitedNode(t) {
                    for (var e = t.length, o = 0; o !== e; o++) {
                        var i = t[o];
                        if (!(i.visited || i.body.type & h)) return i;
                    }
                    return !1;
                }
                var l = [];
                function bfs(t, e, o, i) {
                    for (l.push(t), t.visited = !0, e(t, o, i); l.length;) {
                        for (var n, r = l.pop(); n = getUnvisitedNode(r.children);) {
                            n.visited = !0, e(n, o, i), l.push(n);
                        }
                    }
                }
                function visitFunc(t, e, o) {
                    e.push(t.body);
                    for (var i = t.eqs.length, n = 0; n !== i; n++) {
                        var r = t.eqs[n];
                        -1 === o.indexOf(r) && o.push(r);
                    }
                }
                function sortById(t, e) {
                    return e.id - t.id;
                }
                SplitSolver.prototype.createNode = function () {
                    return {
                        body: null,
                        children: [],
                        eqs: [],
                        visited: !1
                    };
                }, SplitSolver.prototype.solve = function (t, e) {
                    for (var o = r, i = this.nodePool, n = e.bodies, h = this.equations, l = h.length, p = n.length, c = this.subsolver; i.length < p;) {
                        i.push(this.createNode());
                    }
                    o.length = p;
                    for (var u = 0; u < p; u++) {
                        o[u] = i[u];
                    }
                    for (u = 0; u !== p; u++) {
                        var d = o[u];
                        d.body = n[u], d.children.length = 0, d.eqs.length = 0, d.visited = !1;
                    }
                    for (var v = 0; v !== l; v++) {
                        var y = h[v], f = (u = n.indexOf(y.bi), n.indexOf(y.bj)), m = o[u], w = o[f];
                        m.children.push(w), m.eqs.push(y), w.children.push(m), w.eqs.push(y);
                    }
                    var x, g = 0, b = s;
                    c.tolerance = this.tolerance, c.iterations = this.iterations;
                    for (var B = a; x = getUnvisitedNode(o);) {
                        b.length = 0, B.bodies.length = 0, bfs(x, visitFunc, B.bodies, b);
                        var A = b.length;
                        b = b.sort(sortById);
                        for (u = 0; u !== A; u++) {
                            c.addEquation(b[u]);
                        }
                        c.solve(t, B);
                        c.removeAllEquations(), g++;
                    }
                    return g;
                };
            }, {
                "../math/Quaternion": 29,
                "../math/Vec3": 31,
                "../objects/Body": 32,
                "./Solver": 48
            }],
            50: [function (t, e, o) {
                var i = function i() { };
                e.exports = i, i.prototype = {
                    constructor: i,
                    addEventListener: function addEventListener(t, e) {
                        void 0 === this._listeners && (this._listeners = {});
                        var o = this._listeners;
                        return void 0 === o[t] && (o[t] = []), -1 === o[t].indexOf(e) && o[t].push(e), this;
                    },
                    hasEventListener: function hasEventListener(t, e) {
                        if (void 0 === this._listeners) return !1;
                        var o = this._listeners;
                        return void 0 !== o[t] && -1 !== o[t].indexOf(e);
                    },
                    hasAnyEventListener: function hasAnyEventListener(t) {
                        return void 0 !== this._listeners && void 0 !== this._listeners[t];
                    },
                    removeEventListener: function removeEventListener(t, e) {
                        if (void 0 === this._listeners) return this;
                        var o = this._listeners;
                        if (void 0 === o[t]) return this;
                        var i = o[t].indexOf(e);
                        return -1 !== i && o[t].splice(i, 1), this;
                    },
                    dispatchEvent: function dispatchEvent(t) {
                        if (void 0 === this._listeners) return this;
                        var e = this._listeners[t.type];
                        if (void 0 !== e) {
                            t.target = this;
                            for (var o = 0, i = e.length; o < i; o++) {
                                e[o].call(this, t);
                            }
                        }
                        return this;
                    }
                };
            }, {}],
            51: [function (t, e, o) {
                var i = t("../collision/AABB"), n = t("../math/Vec3");
                function OctreeNode(t) {
                    t = t || {}, this.root = t.root || null, this.aabb = t.aabb ? t.aabb.clone() : new i(),
                        this.data = [], this.children = [];
                }
                function Octree(t, e) {
                    (e = e || {}).root = null, e.aabb = t, OctreeNode.call(this, e), this.maxDepth = void 0 !== e.maxDepth ? e.maxDepth : 8;
                }
                e.exports = Octree, Octree.prototype = new OctreeNode(), OctreeNode.prototype.reset = function (t, e) {
                    this.children.length = this.data.length = 0;
                }, OctreeNode.prototype.insert = function (t, e, o) {
                    var i = this.data;
                    if (o = o || 0, !this.aabb.contains(t)) return !1;
                    var n = this.children;
                    if (o < (this.maxDepth || this.root.maxDepth)) {
                        var r = !1;
                        n.length || (this.subdivide(), r = !0);
                        for (var s = 0; 8 !== s; s++) {
                            if (n[s].insert(t, e, o + 1)) return !0;
                        }
                        r && (n.length = 0);
                    }
                    return i.push(e), !0;
                };
                var r = new n();
                OctreeNode.prototype.subdivide = function () {
                    var t = this.aabb, e = t.lowerBound, o = t.upperBound, s = this.children;
                    s.push(new OctreeNode({
                        aabb: new i({
                            lowerBound: new n(0, 0, 0)
                        })
                    }), new OctreeNode({
                        aabb: new i({
                            lowerBound: new n(1, 0, 0)
                        })
                    }), new OctreeNode({
                        aabb: new i({
                            lowerBound: new n(1, 1, 0)
                        })
                    }), new OctreeNode({
                        aabb: new i({
                            lowerBound: new n(1, 1, 1)
                        })
                    }), new OctreeNode({
                        aabb: new i({
                            lowerBound: new n(0, 1, 1)
                        })
                    }), new OctreeNode({
                        aabb: new i({
                            lowerBound: new n(0, 0, 1)
                        })
                    }), new OctreeNode({
                        aabb: new i({
                            lowerBound: new n(1, 0, 1)
                        })
                    }), new OctreeNode({
                        aabb: new i({
                            lowerBound: new n(0, 1, 0)
                        })
                    })), o.vsub(e, r), r.scale(.5, r);
                    for (var a = this.root || this, h = 0; 8 !== h; h++) {
                        var l = s[h];
                        l.root = a;
                        var p = l.aabb.lowerBound;
                        p.x *= r.x, p.y *= r.y, p.z *= r.z, p.vadd(e, p), p.vadd(r, l.aabb.upperBound);
                    }
                }, OctreeNode.prototype.aabbQuery = function (t, e) {
                    this.data, this.children;
                    for (var o = [this]; o.length;) {
                        var i = o.pop();
                        i.aabb.overlaps(t) && Array.prototype.push.apply(e, i.data), Array.prototype.push.apply(o, i.children);
                    }
                    return e;
                };
                var s = new i();
                OctreeNode.prototype.rayQuery = function (t, e, o) {
                    return t.getAABB(s), s.toLocalFrame(e, s), this.aabbQuery(s, o), o;
                }, OctreeNode.prototype.removeEmptyNodes = function () {
                    for (var t = [this]; t.length;) {
                        for (var e = t.pop(), o = e.children.length - 1; o >= 0; o--) {
                            e.children[o].data.length || e.children.splice(o, 1);
                        }
                        Array.prototype.push.apply(t, e.children);
                    }
                };
            }, {
                "../collision/AABB": 3,
                "../math/Vec3": 31
            }],
            52: [function (t, e, o) {
                function Pool() {
                    this.objects = [], this.type = Object;
                }
                e.exports = Pool, Pool.prototype.release = function () {
                    for (var t = arguments.length, e = 0; e !== t; e++) {
                        this.objects.push(arguments[e]);
                    }
                    return this;
                }, Pool.prototype.get = function () {
                    return 0 === this.objects.length ? this.constructObject() : this.objects.pop();
                }, Pool.prototype.constructObject = function () {
                    throw new Error("constructObject() not implemented in this Pool subclass yet!");
                }, Pool.prototype.resize = function (t) {
                    for (var e = this.objects; e.length > t;) {
                        e.pop();
                    }
                    for (; e.length < t;) {
                        e.push(this.constructObject());
                    }
                    return this;
                };
            }, {}],
            53: [function (t, e, o) {
                function TupleDictionary() {
                    this.data = {
                        keys: []
                    };
                }
                e.exports = TupleDictionary, TupleDictionary.prototype.get = function (t, e) {
                    if (t > e) {
                        var o = e;
                        e = t, t = o;
                    }
                    return this.data[t + "-" + e];
                }, TupleDictionary.prototype.set = function (t, e, o) {
                    if (t > e) {
                        var i = e;
                        e = t, t = i;
                    }
                    var n = t + "-" + e;
                    this.get(t, e) || this.data.keys.push(n), this.data[n] = o;
                }, TupleDictionary.prototype.reset = function () {
                    for (var t = this.data, e = t.keys; e.length > 0;) {
                        delete t[e.pop()];
                    }
                };
            }, {}],
            54: [function (t, e, o) {
                function Utils() { }
                e.exports = Utils, Utils.defaults = function (t, e) {
                    for (var o in t = t || {}, e) {
                        o in t || (t[o] = e[o]);
                    }
                    return t;
                };
            }, {}],
            55: [function (t, e, o) {
                e.exports = Vec3Pool;
                var i = t("../math/Vec3"), n = t("./Pool");
                function Vec3Pool() {
                    n.call(this), this.type = i;
                }
                Vec3Pool.prototype = new n(), Vec3Pool.prototype.constructObject = function () {
                    return new i();
                };
            }, {
                "../math/Vec3": 31,
                "./Pool": 52
            }],
            56: [function (t, e, o) {
                e.exports = Narrowphase;
                var i = t("../collision/AABB"), n = t("../objects/Body"), r = t("../shapes/Shape"), s = t("../collision/Ray"), a = t("../math/Vec3"), h = t("../math/Transform"), l = (t("../shapes/ConvexPolyhedron"),
                    t("../math/Quaternion")), p = (t("../solver/Solver"), t("../utils/Vec3Pool")), c = t("../equations/ContactEquation"), u = t("../equations/FrictionEquation");
                function Narrowphase(t) {
                    this.contactPointPool = [], this.frictionEquationPool = [], this.result = [], this.frictionResult = [],
                        this.v3pool = new p(), this.world = t, this.currentContactMaterial = null, this.enableFrictionReduction = !1;
                }
                Narrowphase.prototype.createContactEquation = function (t, e, o, i, n, r) {
                    var s;
                    this.contactPointPool.length ? ((s = this.contactPointPool.pop()).bi = t, s.bj = e) : s = new c(t, e),
                        s.enabled = t.collisionResponse && e.collisionResponse && o.collisionResponse && i.collisionResponse;
                    var a = this.currentContactMaterial;
                    s.restitution = a.restitution, s.setSpookParams(a.contactEquationStiffness, a.contactEquationRelaxation, this.world.dt);
                    var h = o.material || t.material, l = i.material || e.material;
                    return h && l && h.restitution >= 0 && l.restitution >= 0 && (s.restitution = h.restitution * l.restitution),
                        s.si = n || o, s.sj = r || i, s;
                }, Narrowphase.prototype.createFrictionEquationsFromContact = function (t, e) {
                    var o = t.bi, i = t.bj, n = t.si, r = t.sj, s = this.world, a = this.currentContactMaterial, h = a.friction, l = n.material || o.material, p = r.material || i.material;
                    if (l && p && l.friction >= 0 && p.friction >= 0 && (h = l.friction * p.friction),
                        h > 0) {
                        var c = h * s.gravity.length(), d = o.invMass + i.invMass;
                        d > 0 && (d = 1 / d);
                        var v = this.frictionEquationPool, y = v.length ? v.pop() : new u(o, i, c * d), f = v.length ? v.pop() : new u(o, i, c * d);
                        return y.bi = f.bi = o, y.bj = f.bj = i, y.minForce = f.minForce = -c * d, y.maxForce = f.maxForce = c * d,
                            y.ri.copy(t.ri), y.rj.copy(t.rj), f.ri.copy(t.ri), f.rj.copy(t.rj), t.ni.tangents(y.t, f.t),
                            y.setSpookParams(a.frictionEquationStiffness, a.frictionEquationRelaxation, s.dt),
                            f.setSpookParams(a.frictionEquationStiffness, a.frictionEquationRelaxation, s.dt),
                            y.enabled = f.enabled = t.enabled, e.push(y, f), !0;
                    }
                    return !1;
                };
                var d = new a(), v = new a(), y = new a();
                Narrowphase.prototype.createFrictionFromAverage = function (t) {
                    var e = this.result[this.result.length - 1];
                    if (this.createFrictionEquationsFromContact(e, this.frictionResult) && 1 !== t) {
                        var o = this.frictionResult[this.frictionResult.length - 2], i = this.frictionResult[this.frictionResult.length - 1];
                        d.setZero(), v.setZero(), y.setZero();
                        for (var n = e.bi, r = (e.bj, 0); r !== t; r++) {
                            (e = this.result[this.result.length - 1 - r]).bodyA !== n ? (d.vadd(e.ni, d), v.vadd(e.ri, v),
                                y.vadd(e.rj, y)) : (d.vsub(e.ni, d), v.vadd(e.rj, v), y.vadd(e.ri, y));
                        }
                        var s = 1 / t;
                        v.scale(s, o.ri), y.scale(s, o.rj), i.ri.copy(o.ri), i.rj.copy(o.rj), d.normalize(),
                            d.tangents(o.t, i.t);
                    }
                };
                var f = new a(), m = new a(), w = new l(), x = new l();
                Narrowphase.prototype.getContacts = function (t, e, o, i, r, s, a) {
                    this.contactPointPool = r, this.frictionEquationPool = a, this.result = i, this.frictionResult = s;
                    for (var h = w, l = x, p = f, c = m, u = 0, d = t.length; u !== d; u++) {
                        var v = t[u], y = e[u], g = null;
                        v.material && y.material && (g = o.getContactMaterial(v.material, y.material) || null);
                        for (var b = v.type & n.KINEMATIC && y.type & n.STATIC || v.type & n.STATIC && y.type & n.KINEMATIC || v.type & n.KINEMATIC && y.type & n.KINEMATIC, B = 0; B < v.shapes.length; B++) {
                            v.quaternion.mult(v.shapeOrientations[B], h), v.quaternion.vmult(v.shapeOffsets[B], p),
                                p.vadd(v.position, p);
                            for (var A = v.shapes[B], S = 0; S < y.shapes.length; S++) {
                                y.quaternion.mult(y.shapeOrientations[S], l), y.quaternion.vmult(y.shapeOffsets[S], c),
                                    c.vadd(y.position, c);
                                var E = y.shapes[S];
                                if (A.collisionFilterMask & E.collisionFilterGroup && E.collisionFilterMask & A.collisionFilterGroup && !(p.distanceTo(c) > A.boundingSphereRadius + E.boundingSphereRadius)) {
                                    var C = null;
                                    A.material && E.material && (C = o.getContactMaterial(A.material, E.material) || null),
                                        this.currentContactMaterial = C || g || o.defaultContactMaterial;
                                    var M = this[A.type | E.type];
                                    if (M) {
                                        (A.type < E.type ? M.call(this, A, E, p, c, h, l, v, y, A, E, b) : M.call(this, E, A, c, p, l, h, y, v, A, E, b)) && b && (o.shapeOverlapKeeper.set(A.id, E.id),
                                            o.bodyOverlapKeeper.set(v.id, y.id));
                                    }
                                }
                            }
                        }
                    }
                };
                Narrowphase.prototype[r.types.BOX | r.types.BOX] = Narrowphase.prototype.boxBox = function (t, e, o, i, n, r, s, a, h, l, p) {
                    return t.convexPolyhedronRepresentation.material = t.material, e.convexPolyhedronRepresentation.material = e.material,
                        t.convexPolyhedronRepresentation.collisionResponse = t.collisionResponse, e.convexPolyhedronRepresentation.collisionResponse = e.collisionResponse,
                        this.convexConvex(t.convexPolyhedronRepresentation, e.convexPolyhedronRepresentation, o, i, n, r, s, a, t, e, p);
                }, Narrowphase.prototype[r.types.BOX | r.types.CONVEXPOLYHEDRON] = Narrowphase.prototype.boxConvex = function (t, e, o, i, n, r, s, a, h, l, p) {
                    return t.convexPolyhedronRepresentation.material = t.material, t.convexPolyhedronRepresentation.collisionResponse = t.collisionResponse,
                        this.convexConvex(t.convexPolyhedronRepresentation, e, o, i, n, r, s, a, t, e, p);
                }, Narrowphase.prototype[r.types.BOX | r.types.PARTICLE] = Narrowphase.prototype.boxParticle = function (t, e, o, i, n, r, s, a, h, l, p) {
                    return t.convexPolyhedronRepresentation.material = t.material, t.convexPolyhedronRepresentation.collisionResponse = t.collisionResponse,
                        this.convexParticle(t.convexPolyhedronRepresentation, e, o, i, n, r, s, a, t, e, p);
                }, Narrowphase.prototype[r.types.SPHERE] = Narrowphase.prototype.sphereSphere = function (t, e, o, i, n, r, s, a, h, l, p) {
                    if (p) return o.distanceSquared(i) < Math.pow(t.radius + e.radius, 2);
                    var c = this.createContactEquation(s, a, t, e, h, l);
                    i.vsub(o, c.ni), c.ni.normalize(), c.ri.copy(c.ni), c.rj.copy(c.ni), c.ri.mult(t.radius, c.ri),
                        c.rj.mult(-e.radius, c.rj), c.ri.vadd(o, c.ri), c.ri.vsub(s.position, c.ri), c.rj.vadd(i, c.rj),
                        c.rj.vsub(a.position, c.rj), this.result.push(c), this.createFrictionEquationsFromContact(c, this.frictionResult);
                };
                var g = new a(), b = new a(), B = new a();
                Narrowphase.prototype[r.types.PLANE | r.types.TRIMESH] = Narrowphase.prototype.planeTrimesh = function (t, e, o, i, n, r, s, l, p, c, u) {
                    var d = new a(), v = g;
                    v.set(0, 0, 1), n.vmult(v, v);
                    for (var y = 0; y < e.vertices.length / 3; y++) {
                        e.getVertex(y, d);
                        var f = new a();
                        f.copy(d), h.pointToWorldFrame(i, r, f, d);
                        var m = b;
                        if (d.vsub(o, m), v.dot(m) <= 0) {
                            if (u) return !0;
                            var w = this.createContactEquation(s, l, t, e, p, c);
                            w.ni.copy(v);
                            var x = B;
                            v.scale(m.dot(v), x), d.vsub(x, x), w.ri.copy(x), w.ri.vsub(s.position, w.ri), w.rj.copy(d),
                                w.rj.vsub(l.position, w.rj), this.result.push(w), this.createFrictionEquationsFromContact(w, this.frictionResult);
                        }
                    }
                };
                var A = new a(), S = new a(), E = (new a(), new a()), C = new a(), M = new a(), R = new a(), P = new a(), q = new a(), z = new a(), V = new a(), T = new a(), F = new a(), N = new a(), I = new i(), W = [];
                Narrowphase.prototype[r.types.SPHERE | r.types.TRIMESH] = Narrowphase.prototype.sphereTrimesh = function (t, e, o, i, n, r, a, l, p, c, u) {
                    var d = M, v = R, y = P, f = q, m = z, w = V, x = I, g = C, b = S, B = W;
                    h.pointToLocalFrame(i, r, o, m);
                    var L = t.radius;
                    x.lowerBound.set(m.x - L, m.y - L, m.z - L), x.upperBound.set(m.x + L, m.y + L, m.z + L),
                        e.getTrianglesInAABB(x, B);
                    for (var j = E, O = t.radius * t.radius, k = 0; k < B.length; k++) {
                        for (var H = 0; H < 3; H++) {
                            if (e.getVertex(e.indices[3 * B[k] + H], j), j.vsub(m, b), b.norm2() <= O) {
                                if (g.copy(j), h.pointToWorldFrame(i, r, g, j), j.vsub(o, b), u) return !0;
                                (D = this.createContactEquation(a, l, t, e, p, c)).ni.copy(b), D.ni.normalize(),
                                    D.ri.copy(D.ni), D.ri.scale(t.radius, D.ri), D.ri.vadd(o, D.ri), D.ri.vsub(a.position, D.ri),
                                    D.rj.copy(j), D.rj.vsub(l.position, D.rj), this.result.push(D), this.createFrictionEquationsFromContact(D, this.frictionResult);
                            }
                        }
                    }
                    for (k = 0; k < B.length; k++) {
                        for (H = 0; H < 3; H++) {
                            e.getVertex(e.indices[3 * B[k] + H], d), e.getVertex(e.indices[3 * B[k] + (H + 1) % 3], v),
                                v.vsub(d, y), m.vsub(v, w);
                            var _ = w.dot(y);
                            m.vsub(d, w);
                            var U = w.dot(y);
                            if (U > 0 && _ < 0) if (m.vsub(d, w), f.copy(y), f.normalize(), U = w.dot(f), f.scale(U, w),
                                w.vadd(d, w), (Z = w.distanceTo(m)) < t.radius) {
                                if (u) return !0;
                                var D = this.createContactEquation(a, l, t, e, p, c);
                                w.vsub(m, D.ni), D.ni.normalize(), D.ni.scale(t.radius, D.ri), h.pointToWorldFrame(i, r, w, w),
                                    w.vsub(l.position, D.rj), h.vectorToWorldFrame(r, D.ni, D.ni), h.vectorToWorldFrame(r, D.ri, D.ri),
                                    this.result.push(D), this.createFrictionEquationsFromContact(D, this.frictionResult);
                            }
                        }
                    }
                    for (var Q = T, G = F, X = N, Y = A, K = (k = 0, B.length); k !== K; k++) {
                        e.getTriangleVertices(B[k], Q, G, X), e.getNormal(B[k], Y), m.vsub(Q, w);
                        var Z = w.dot(Y);
                        if (Y.scale(Z, w), m.vsub(w, w), Z = w.distanceTo(m), s.pointInTriangle(w, Q, G, X) && Z < t.radius) {
                            if (u) return !0;
                            D = this.createContactEquation(a, l, t, e, p, c);
                            w.vsub(m, D.ni), D.ni.normalize(), D.ni.scale(t.radius, D.ri), h.pointToWorldFrame(i, r, w, w),
                                w.vsub(l.position, D.rj), h.vectorToWorldFrame(r, D.ni, D.ni), h.vectorToWorldFrame(r, D.ri, D.ri),
                                this.result.push(D), this.createFrictionEquationsFromContact(D, this.frictionResult);
                        }
                    }
                    B.length = 0;
                };
                var L = new a(), j = new a();
                Narrowphase.prototype[r.types.SPHERE | r.types.PLANE] = Narrowphase.prototype.spherePlane = function (t, e, o, i, n, r, s, a, h, l, p) {
                    var c = this.createContactEquation(s, a, t, e, h, l);
                    if (c.ni.set(0, 0, 1), r.vmult(c.ni, c.ni), c.ni.negate(c.ni), c.ni.normalize(),
                        c.ni.mult(t.radius, c.ri), o.vsub(i, L), c.ni.mult(c.ni.dot(L), j), L.vsub(j, c.rj),
                        -L.dot(c.ni) <= t.radius) {
                        if (p) return !0;
                        var u = c.ri, d = c.rj;
                        u.vadd(o, u), u.vsub(s.position, u), d.vadd(i, d), d.vsub(a.position, d), this.result.push(c),
                            this.createFrictionEquationsFromContact(c, this.frictionResult);
                    }
                };
                var O = new a(), k = new a(), H = new a();
                function pointInPolygon(t, e, o) {
                    for (var i = null, n = t.length, r = 0; r !== n; r++) {
                        var s = t[r], a = O;
                        t[(r + 1) % n].vsub(s, a);
                        var h = k;
                        a.cross(e, h);
                        var l = H;
                        o.vsub(s, l);
                        var p = h.dot(l);
                        if (!(null === i || p > 0 && !0 === i || p <= 0 && !1 === i)) return !1;
                        null === i && (i = p > 0);
                    }
                    return !0;
                }
                var _ = new a(), U = new a(), D = new a(), Q = new a(), G = [new a(), new a(), new a(), new a(), new a(), new a()], X = new a(), Y = new a(), K = new a(), Z = new a();
                Narrowphase.prototype[r.types.SPHERE | r.types.BOX] = Narrowphase.prototype.sphereBox = function (t, e, o, i, n, r, s, a, h, l, p) {
                    var c = this.v3pool, u = G;
                    o.vsub(i, _), e.getSideNormals(u, r);
                    for (var d = t.radius, v = !1, y = Y, f = K, m = Z, w = null, x = 0, g = 0, b = 0, B = null, A = 0, S = u.length; A !== S && !1 === v; A++) {
                        var E = U;
                        E.copy(u[A]);
                        var C = E.norm();
                        E.normalize();
                        var M = _.dot(E);
                        if (M < C + d && M > 0) {
                            var R = D, P = Q;
                            R.copy(u[(A + 1) % 3]), P.copy(u[(A + 2) % 3]);
                            var q = R.norm(), z = P.norm();
                            R.normalize(), P.normalize();
                            var V = _.dot(R), T = _.dot(P);
                            if (V < q && V > -q && T < z && T > -z) {
                                var F = Math.abs(M - C - d);
                                if ((null === B || F < B) && (B = F, g = V, b = T, w = C, y.copy(E), f.copy(R),
                                    m.copy(P), x++, p)) return !0;
                            }
                        }
                    }
                    if (x) {
                        v = !0;
                        var N = this.createContactEquation(s, a, t, e, h, l);
                        y.mult(-d, N.ri), N.ni.copy(y), N.ni.negate(N.ni), y.mult(w, y), f.mult(g, f), y.vadd(f, y),
                            m.mult(b, m), y.vadd(m, N.rj), N.ri.vadd(o, N.ri), N.ri.vsub(s.position, N.ri),
                            N.rj.vadd(i, N.rj), N.rj.vsub(a.position, N.rj), this.result.push(N), this.createFrictionEquationsFromContact(N, this.frictionResult);
                    }
                    for (var I = c.get(), W = X, L = 0; 2 !== L && !v; L++) {
                        for (var j = 0; 2 !== j && !v; j++) {
                            for (var O = 0; 2 !== O && !v; O++) {
                                if (I.set(0, 0, 0), L ? I.vadd(u[0], I) : I.vsub(u[0], I), j ? I.vadd(u[1], I) : I.vsub(u[1], I),
                                    O ? I.vadd(u[2], I) : I.vsub(u[2], I), i.vadd(I, W), W.vsub(o, W), W.norm2() < d * d) {
                                    if (p) return !0;
                                    v = !0, (N = this.createContactEquation(s, a, t, e, h, l)).ri.copy(W), N.ri.normalize(),
                                        N.ni.copy(N.ri), N.ri.mult(d, N.ri), N.rj.copy(I), N.ri.vadd(o, N.ri), N.ri.vsub(s.position, N.ri),
                                        N.rj.vadd(i, N.rj), N.rj.vsub(a.position, N.rj), this.result.push(N), this.createFrictionEquationsFromContact(N, this.frictionResult);
                                }
                            }
                        }
                    }
                    c.release(I), I = null;
                    var k = c.get(), H = c.get(), J = (N = c.get(), c.get()), $ = (F = c.get(), u.length);
                    for (L = 0; L !== $ && !v; L++) {
                        for (j = 0; j !== $ && !v; j++) {
                            if (L % 3 != j % 3) {
                                u[j].cross(u[L], k), k.normalize(), u[L].vadd(u[j], H), N.copy(o), N.vsub(H, N),
                                    N.vsub(i, N);
                                var tt = N.dot(k);
                                k.mult(tt, J);
                                for (O = 0; O === L % 3 || O === j % 3;) {
                                    O++;
                                }
                                F.copy(o), F.vsub(J, F), F.vsub(H, F), F.vsub(i, F);
                                var et = Math.abs(tt), ot = F.norm();
                                if (et < u[O].norm() && ot < d) {
                                    if (p) return !0;
                                    v = !0;
                                    var it = this.createContactEquation(s, a, t, e, h, l);
                                    H.vadd(J, it.rj), it.rj.copy(it.rj), F.negate(it.ni), it.ni.normalize(), it.ri.copy(it.rj),
                                        it.ri.vadd(i, it.ri), it.ri.vsub(o, it.ri), it.ri.normalize(), it.ri.mult(d, it.ri),
                                        it.ri.vadd(o, it.ri), it.ri.vsub(s.position, it.ri), it.rj.vadd(i, it.rj), it.rj.vsub(a.position, it.rj),
                                        this.result.push(it), this.createFrictionEquationsFromContact(it, this.frictionResult);
                                }
                            }
                        }
                    }
                    c.release(k, H, N, J, F);
                };
                var J = new a(), $ = new a(), tt = new a(), et = new a(), ot = new a(), it = new a(), nt = new a(), rt = new a(), st = new a(), at = new a();
                Narrowphase.prototype[r.types.SPHERE | r.types.CONVEXPOLYHEDRON] = Narrowphase.prototype.sphereConvex = function (t, e, o, i, n, r, s, a, h, l, p) {
                    var c = this.v3pool;
                    o.vsub(i, J);
                    for (var u = e.faceNormals, d = e.faces, v = e.vertices, y = t.radius, f = 0; f !== v.length; f++) {
                        var m = v[f], w = ot;
                        r.vmult(m, w), i.vadd(w, w);
                        var x = et;
                        if (w.vsub(o, x), x.norm2() < y * y) return !!p || (g = !0, (F = this.createContactEquation(s, a, t, e, h, l)).ri.copy(x),
                            F.ri.normalize(), F.ni.copy(F.ri), F.ri.mult(y, F.ri), w.vsub(i, F.rj), F.ri.vadd(o, F.ri),
                            F.ri.vsub(s.position, F.ri), F.rj.vadd(i, F.rj), F.rj.vsub(a.position, F.rj), this.result.push(F),
                            void this.createFrictionEquationsFromContact(F, this.frictionResult));
                    }
                    for (var g = !1, b = (f = 0, d.length); f !== b && !1 === g; f++) {
                        var B = u[f], A = d[f], S = it;
                        r.vmult(B, S);
                        var E = nt;
                        r.vmult(v[A[0]], E), E.vadd(i, E);
                        var C = rt;
                        S.mult(-y, C), o.vadd(C, C);
                        var M = st;
                        C.vsub(E, M);
                        var R = M.dot(S), P = at;
                        if (o.vsub(E, P), R < 0 && P.dot(S) > 0) {
                            for (var q = [], z = 0, V = A.length; z !== V; z++) {
                                var T = c.get();
                                r.vmult(v[A[z]], T), i.vadd(T, T), q.push(T);
                            }
                            if (pointInPolygon(q, S, o)) {
                                if (p) return !0;
                                g = !0;
                                var F = this.createContactEquation(s, a, t, e, h, l);
                                S.mult(-y, F.ri), S.negate(F.ni);
                                var N = c.get();
                                S.mult(-R, N);
                                var I = c.get();
                                S.mult(-y, I), o.vsub(i, F.rj), F.rj.vadd(I, F.rj), F.rj.vadd(N, F.rj), F.rj.vadd(i, F.rj),
                                    F.rj.vsub(a.position, F.rj), F.ri.vadd(o, F.ri), F.ri.vsub(s.position, F.ri), c.release(N),
                                    c.release(I), this.result.push(F), this.createFrictionEquationsFromContact(F, this.frictionResult);
                                z = 0;
                                for (var W = q.length; z !== W; z++) {
                                    c.release(q[z]);
                                }
                                return;
                            }
                            for (z = 0; z !== A.length; z++) {
                                var L = c.get(), j = c.get();
                                r.vmult(v[A[(z + 1) % A.length]], L), r.vmult(v[A[(z + 2) % A.length]], j), i.vadd(L, L),
                                    i.vadd(j, j);
                                var O = $;
                                j.vsub(L, O);
                                var k = tt;
                                O.unit(k);
                                var H = c.get(), _ = c.get();
                                o.vsub(L, _);
                                var U = _.dot(k);
                                k.mult(U, H), H.vadd(L, H);
                                var D = c.get();
                                if (H.vsub(o, D), U > 0 && U * U < O.norm2() && D.norm2() < y * y) {
                                    if (p) return !0;
                                    F = this.createContactEquation(s, a, t, e, h, l);
                                    H.vsub(i, F.rj), H.vsub(o, F.ni), F.ni.normalize(), F.ni.mult(y, F.ri), F.rj.vadd(i, F.rj),
                                        F.rj.vsub(a.position, F.rj), F.ri.vadd(o, F.ri), F.ri.vsub(s.position, F.ri), this.result.push(F),
                                        this.createFrictionEquationsFromContact(F, this.frictionResult);
                                    for (z = 0, W = q.length; z !== W; z++) {
                                        c.release(q[z]);
                                    }
                                    return c.release(L), c.release(j), c.release(H), c.release(D), void c.release(_);
                                }
                                c.release(L), c.release(j), c.release(H), c.release(D), c.release(_);
                            }
                            for (z = 0, W = q.length; z !== W; z++) {
                                c.release(q[z]);
                            }
                        }
                    }
                };
                new a(), new a();
                Narrowphase.prototype[r.types.PLANE | r.types.BOX] = Narrowphase.prototype.planeBox = function (t, e, o, i, n, r, s, a, h, l, p) {
                    return e.convexPolyhedronRepresentation.material = e.material, e.convexPolyhedronRepresentation.collisionResponse = e.collisionResponse,
                        e.convexPolyhedronRepresentation.id = e.id, this.planeConvex(t, e.convexPolyhedronRepresentation, o, i, n, r, s, a, t, e, p);
                };
                var ht = new a(), lt = new a(), pt = new a(), ct = new a();
                Narrowphase.prototype[r.types.PLANE | r.types.CONVEXPOLYHEDRON] = Narrowphase.prototype.planeConvex = function (t, e, o, i, n, r, s, a, h, l, p) {
                    var c = ht, u = lt;
                    u.set(0, 0, 1), n.vmult(u, u);
                    for (var d = 0, v = pt, y = 0; y !== e.vertices.length; y++) {
                        if (c.copy(e.vertices[y]), r.vmult(c, c), i.vadd(c, c), c.vsub(o, v), u.dot(v) <= 0) {
                            if (p) return !0;
                            var f = this.createContactEquation(s, a, t, e, h, l), m = ct;
                            u.mult(u.dot(v), m), c.vsub(m, m), m.vsub(o, f.ri), f.ni.copy(u), c.vsub(i, f.rj),
                                f.ri.vadd(o, f.ri), f.ri.vsub(s.position, f.ri), f.rj.vadd(i, f.rj), f.rj.vsub(a.position, f.rj),
                                this.result.push(f), d++, this.enableFrictionReduction || this.createFrictionEquationsFromContact(f, this.frictionResult);
                        }
                    }
                    this.enableFrictionReduction && d && this.createFrictionFromAverage(d);
                };
                var ut = new a(), dt = new a();
                Narrowphase.prototype[r.types.CONVEXPOLYHEDRON] = Narrowphase.prototype.convexConvex = function (t, e, o, i, n, r, s, a, h, l, p, c, u) {
                    var d = ut;
                    if (!(o.distanceTo(i) > t.boundingSphereRadius + e.boundingSphereRadius) && t.findSeparatingAxis(e, o, n, i, r, d, c, u)) {
                        var v = [], y = dt;
                        t.clipAgainstHull(o, n, e, i, r, d, -100, 100, v);
                        for (var f = 0, m = 0; m !== v.length; m++) {
                            if (p) return !0;
                            var w = this.createContactEquation(s, a, t, e, h, l), x = w.ri, g = w.rj;
                            d.negate(w.ni), v[m].normal.negate(y), y.mult(v[m].depth, y), v[m].point.vadd(y, x),
                                g.copy(v[m].point), x.vsub(o, x), g.vsub(i, g), x.vadd(o, x), x.vsub(s.position, x),
                                g.vadd(i, g), g.vsub(a.position, g), this.result.push(w), f++, this.enableFrictionReduction || this.createFrictionEquationsFromContact(w, this.frictionResult);
                        }
                        this.enableFrictionReduction && f && this.createFrictionFromAverage(f);
                    }
                };
                var vt = new a(), yt = new a(), ft = new a();
                Narrowphase.prototype[r.types.PLANE | r.types.PARTICLE] = Narrowphase.prototype.planeParticle = function (t, e, o, i, n, r, s, a, h, l, p) {
                    var c = vt;
                    c.set(0, 0, 1), s.quaternion.vmult(c, c);
                    var u = yt;
                    if (i.vsub(s.position, u), c.dot(u) <= 0) {
                        if (p) return !0;
                        var d = this.createContactEquation(a, s, e, t, h, l);
                        d.ni.copy(c), d.ni.negate(d.ni), d.ri.set(0, 0, 0);
                        var v = ft;
                        c.mult(c.dot(i), v), i.vsub(v, v), d.rj.copy(v), this.result.push(d), this.createFrictionEquationsFromContact(d, this.frictionResult);
                    }
                };
                var mt = new a();
                Narrowphase.prototype[r.types.PARTICLE | r.types.SPHERE] = Narrowphase.prototype.sphereParticle = function (t, e, o, i, n, r, s, a, h, l, p) {
                    var c = mt;
                    if (c.set(0, 0, 1), i.vsub(o, c), c.norm2() <= t.radius * t.radius) {
                        if (p) return !0;
                        var u = this.createContactEquation(a, s, e, t, h, l);
                        c.normalize(), u.rj.copy(c), u.rj.mult(t.radius, u.rj), u.ni.copy(c), u.ni.negate(u.ni),
                            u.ri.set(0, 0, 0), this.result.push(u), this.createFrictionEquationsFromContact(u, this.frictionResult);
                    }
                };
                var wt = new l(), xt = new a(), gt = (new a(), new a()), bt = new a(), Bt = new a();
                Narrowphase.prototype[r.types.PARTICLE | r.types.CONVEXPOLYHEDRON] = Narrowphase.prototype.convexParticle = function (t, e, o, i, n, r, s, a, h, l, p) {
                    var c = -1, u = gt, d = Bt, v = null, y = xt;
                    if (y.copy(i), y.vsub(o, y), n.conjugate(wt), wt.vmult(y, y), t.pointIsInside(y)) {
                        t.worldVerticesNeedsUpdate && t.computeWorldVertices(o, n), t.worldFaceNormalsNeedsUpdate && t.computeWorldFaceNormals(n);
                        for (var f = 0, m = t.faces.length; f !== m; f++) {
                            var w = [t.worldVertices[t.faces[f][0]]], x = t.worldFaceNormals[f];
                            i.vsub(w[0], bt);
                            var g = -x.dot(bt);
                            if (null === v || Math.abs(g) < Math.abs(v)) {
                                if (p) return !0;
                                v = g, c = f, u.copy(x), 0;
                            }
                        }
                        if (-1 !== c) {
                            var b = this.createContactEquation(a, s, e, t, h, l);
                            u.mult(v, d), d.vadd(i, d), d.vsub(o, d), b.rj.copy(d), u.negate(b.ni), b.ri.set(0, 0, 0);
                            var B = b.ri, A = b.rj;
                            B.vadd(i, B), B.vsub(a.position, B), A.vadd(o, A), A.vsub(s.position, A), this.result.push(b),
                                this.createFrictionEquationsFromContact(b, this.frictionResult);
                        } else console.warn("Point found inside convex, but did not find penetrating face!");
                    }
                }, Narrowphase.prototype[r.types.BOX | r.types.HEIGHTFIELD] = Narrowphase.prototype.boxHeightfield = function (t, e, o, i, n, r, s, a, h, l, p) {
                    return t.convexPolyhedronRepresentation.material = t.material, t.convexPolyhedronRepresentation.collisionResponse = t.collisionResponse,
                        this.convexHeightfield(t.convexPolyhedronRepresentation, e, o, i, n, r, s, a, t, e, p);
                };
                var At = new a(), St = new a(), Et = [0];
                Narrowphase.prototype[r.types.CONVEXPOLYHEDRON | r.types.HEIGHTFIELD] = Narrowphase.prototype.convexHeightfield = function (t, e, o, i, n, r, s, a, l, p, c) {
                    var u = e.data, d = e.elementSize, v = t.boundingSphereRadius, y = St, f = Et, m = At;
                    h.pointToLocalFrame(i, r, o, m);
                    var w = Math.floor((m.x - v) / d) - 1, x = Math.ceil((m.x + v) / d) + 1, g = Math.floor((m.y - v) / d) - 1, b = Math.ceil((m.y + v) / d) + 1;
                    if (!(x < 0 || b < 0 || w > u.length || g > u[0].length)) {
                        w < 0 && (w = 0), x < 0 && (x = 0), g < 0 && (g = 0), b < 0 && (b = 0), w >= u.length && (w = u.length - 1),
                            x >= u.length && (x = u.length - 1), b >= u[0].length && (b = u[0].length - 1),
                            g >= u[0].length && (g = u[0].length - 1);
                        var B = [];
                        e.getRectMinMax(w, g, x, b, B);
                        var A = B[0], S = B[1];
                        if (!(m.z - v > S || m.z + v < A)) for (var E = w; E < x; E++) {
                            for (var C = g; C < b; C++) {
                                var M = !1;
                                if (e.getConvexTrianglePillar(E, C, !1), h.pointToWorldFrame(i, r, e.pillarOffset, y),
                                    o.distanceTo(y) < e.pillarConvex.boundingSphereRadius + t.boundingSphereRadius && (M = this.convexConvex(t, e.pillarConvex, o, y, n, r, s, a, null, null, c, f, null)),
                                    c && M) return !0;
                                if (e.getConvexTrianglePillar(E, C, !0), h.pointToWorldFrame(i, r, e.pillarOffset, y),
                                    o.distanceTo(y) < e.pillarConvex.boundingSphereRadius + t.boundingSphereRadius && (M = this.convexConvex(t, e.pillarConvex, o, y, n, r, s, a, null, null, c, f, null)),
                                    c && M) return !0;
                            }
                        }
                    }
                };
                var Ct = new a(), Mt = new a();
                Narrowphase.prototype[r.types.SPHERE | r.types.HEIGHTFIELD] = Narrowphase.prototype.sphereHeightfield = function (t, e, o, i, n, r, s, a, l, p, c) {
                    var u = e.data, d = t.radius, v = e.elementSize, y = Mt, f = Ct;
                    h.pointToLocalFrame(i, r, o, f);
                    var m = Math.floor((f.x - d) / v) - 1, w = Math.ceil((f.x + d) / v) + 1, x = Math.floor((f.y - d) / v) - 1, g = Math.ceil((f.y + d) / v) + 1;
                    if (!(w < 0 || g < 0 || m > u.length || g > u[0].length)) {
                        m < 0 && (m = 0), w < 0 && (w = 0), x < 0 && (x = 0), g < 0 && (g = 0), m >= u.length && (m = u.length - 1),
                            w >= u.length && (w = u.length - 1), g >= u[0].length && (g = u[0].length - 1),
                            x >= u[0].length && (x = u[0].length - 1);
                        var b = [];
                        e.getRectMinMax(m, x, w, g, b);
                        var B = b[0], A = b[1];
                        if (!(f.z - d > A || f.z + d < B)) for (var S = this.result, E = m; E < w; E++) {
                            for (var C = x; C < g; C++) {
                                var M = S.length, R = !1;
                                if (e.getConvexTrianglePillar(E, C, !1), h.pointToWorldFrame(i, r, e.pillarOffset, y),
                                    o.distanceTo(y) < e.pillarConvex.boundingSphereRadius + t.boundingSphereRadius && (R = this.sphereConvex(t, e.pillarConvex, o, y, n, r, s, a, t, e, c)),
                                    c && R) return !0;
                                if (e.getConvexTrianglePillar(E, C, !0), h.pointToWorldFrame(i, r, e.pillarOffset, y),
                                    o.distanceTo(y) < e.pillarConvex.boundingSphereRadius + t.boundingSphereRadius && (R = this.sphereConvex(t, e.pillarConvex, o, y, n, r, s, a, t, e, c)),
                                    c && R) return !0;
                                if (S.length - M > 2) return;
                            }
                        }
                    }
                };
            }, {
                "../collision/AABB": 3,
                "../collision/Ray": 10,
                "../equations/ContactEquation": 20,
                "../equations/FrictionEquation": 22,
                "../math/Quaternion": 29,
                "../math/Transform": 30,
                "../math/Vec3": 31,
                "../objects/Body": 32,
                "../shapes/ConvexPolyhedron": 39,
                "../shapes/Shape": 44,
                "../solver/Solver": 48,
                "../utils/Vec3Pool": 55
            }],
            57: [function (t, e, o) {
                e.exports = World;
                t("../shapes/Shape");
                var i = t("../math/Vec3"), n = t("../math/Quaternion"), r = t("../solver/GSSolver"), s = (t("../equations/ContactEquation"),
                    t("../equations/FrictionEquation"), t("./Narrowphase")), a = t("../utils/EventTarget"), h = t("../collision/ArrayCollisionMatrix"), l = t("../collision/OverlapKeeper"), p = t("../material/Material"), c = t("../material/ContactMaterial"), u = t("../objects/Body"), d = t("../utils/TupleDictionary"), v = t("../collision/RaycastResult"), y = t("../collision/AABB"), f = t("../collision/Ray"), m = t("../collision/NaiveBroadphase");
                function World(t) {
                    t = t || {}, a.apply(this), this.dt = -1, this.allowSleep = !!t.allowSleep, this.contacts = [],
                        this.frictionEquations = [], this.quatNormalizeSkip = void 0 !== t.quatNormalizeSkip ? t.quatNormalizeSkip : 0,
                        this.quatNormalizeFast = void 0 !== t.quatNormalizeFast && t.quatNormalizeFast,
                        this.time = 0, this.stepnumber = 0, this.default_dt = 1 / 60, this.nextId = 0, this.gravity = new i(),
                        t.gravity && this.gravity.copy(t.gravity), this.broadphase = void 0 !== t.broadphase ? t.broadphase : new m(),
                        this.bodies = [], this.solver = void 0 !== t.solver ? t.solver : new r(), this.constraints = [],
                        this.narrowphase = new s(this), this.collisionMatrix = new h(), this.collisionMatrixPrevious = new h(),
                        this.bodyOverlapKeeper = new l(), this.shapeOverlapKeeper = new l(), this.materials = [],
                        this.contactmaterials = [], this.contactMaterialTable = new d(), this.defaultMaterial = new p("default"),
                        this.defaultContactMaterial = new c(this.defaultMaterial, this.defaultMaterial, {
                            friction: .3,
                            restitution: 0
                        }), this.doProfiling = !1, this.profile = {
                            solve: 0,
                            makeContactConstraints: 0,
                            broadphase: 0,
                            integrate: 0,
                            narrowphase: 0
                        }, this.accumulator = 0, this.subsystems = [], this.addBodyEvent = {
                            type: "addBody",
                            body: null
                        }, this.removeBodyEvent = {
                            type: "removeBody",
                            body: null
                        }, this.idToBodyMap = {}, this.broadphase.setWorld(this);
                }
                World.prototype = new a();
                new y();
                var w = new f();
                if (World.prototype.getContactMaterial = function (t, e) {
                    return this.contactMaterialTable.get(t.id, e.id);
                }, World.prototype.numObjects = function () {
                    return this.bodies.length;
                }, World.prototype.collisionMatrixTick = function () {
                    var t = this.collisionMatrixPrevious;
                    this.collisionMatrixPrevious = this.collisionMatrix, this.collisionMatrix = t, this.collisionMatrix.reset(),
                        this.bodyOverlapKeeper.tick(), this.shapeOverlapKeeper.tick();
                }, World.prototype.add = World.prototype.addBody = function (t) {
                    -1 === this.bodies.indexOf(t) && (t.index = this.bodies.length, this.bodies.push(t),
                        t.world = this, t.initPosition.copy(t.position), t.initVelocity.copy(t.velocity),
                        t.timeLastSleepy = this.time, t instanceof u && (t.initAngularVelocity.copy(t.angularVelocity),
                            t.initQuaternion.copy(t.quaternion)), this.collisionMatrix.setNumObjects(this.bodies.length),
                        this.addBodyEvent.body = t, this.idToBodyMap[t.id] = t, this.dispatchEvent(this.addBodyEvent));
                }, World.prototype.addConstraint = function (t) {
                    this.constraints.push(t);
                }, World.prototype.removeConstraint = function (t) {
                    var e = this.constraints.indexOf(t);
                    -1 !== e && this.constraints.splice(e, 1);
                }, World.prototype.rayTest = function (t, e, o) {
                    o instanceof v ? this.raycastClosest(t, e, {
                        skipBackfaces: !0
                    }, o) : this.raycastAll(t, e, {
                        skipBackfaces: !0
                    }, o);
                }, World.prototype.raycastAll = function (t, e, o, i) {
                    return o.mode = f.ALL, o.from = t, o.to = e, o.callback = i, w.intersectWorld(this, o);
                }, World.prototype.raycastAny = function (t, e, o, i) {
                    return o.mode = f.ANY, o.from = t, o.to = e, o.result = i, w.intersectWorld(this, o);
                }, World.prototype.raycastClosest = function (t, e, o, i) {
                    return o.mode = f.CLOSEST, o.from = t, o.to = e, o.result = i, w.intersectWorld(this, o);
                }, World.prototype.remove = function (t) {
                    t.world = null;
                    var e = this.bodies.length - 1, o = this.bodies, i = o.indexOf(t);
                    if (-1 !== i) {
                        o.splice(i, 1);
                        for (var n = 0; n !== o.length; n++) {
                            o[n].index = n;
                        }
                        this.collisionMatrix.setNumObjects(e), this.removeBodyEvent.body = t, delete this.idToBodyMap[t.id],
                            this.dispatchEvent(this.removeBodyEvent);
                    }
                }, World.prototype.removeBody = World.prototype.remove, World.prototype.getBodyById = function (t) {
                    return this.idToBodyMap[t];
                }, World.prototype.getShapeById = function (t) {
                    for (var e = this.bodies, o = 0, i = e.length; o < i; o++) {
                        for (var n = e[o].shapes, r = 0, s = n.length; r < s; r++) {
                            var a = n[r];
                            if (a.id === t) return a;
                        }
                    }
                }, World.prototype.addMaterial = function (t) {
                    this.materials.push(t);
                }, World.prototype.addContactMaterial = function (t) {
                    this.contactmaterials.push(t), this.contactMaterialTable.set(t.materials[0].id, t.materials[1].id, t);
                }, "undefined" == typeof performance && (performance = {}), !performance.now) {
                    var x = Date.now();
                    performance.timing && performance.timing.navigationStart && (x = performance.timing.navigationStart),
                        performance.now = function () {
                            return Date.now() - x;
                        };
                }
                new i();
                World.prototype.step = function (t, e, o) {
                    if (o = o || 10, 0 === (e = e || 0)) this.internalStep(t), this.time += t; else {
                        this.accumulator += e;
                        for (var i = 0; this.accumulator >= t && i < o;) {
                            this.internalStep(t), this.accumulator -= t, i++;
                        }
                        for (var n = this.accumulator % t / t, r = 0; r !== this.bodies.length; r++) {
                            var s = this.bodies[r];
                            s.previousPosition.lerp(s.position, n, s.interpolatedPosition), s.previousQuaternion.slerp(s.quaternion, n, s.interpolatedQuaternion),
                                s.previousQuaternion.normalize();
                        }
                        this.time += e;
                    }
                };
                var g, b, B, A, S, E, C = {
                    type: "postStep"
                }, M = {
                    type: "preStep"
                }, R = {
                    type: u.COLLIDE_EVENT_NAME,
                    body: null,
                    contact: null
                }, P = [], q = [], z = [], V = [];
                new i(), new i(), new i(), new i(), new i(), new i(), new i(), new i(), new i(),
                    new n(), new n(), new n(), new i();
                World.prototype.internalStep = function (t) {
                    this.dt = t;
                    var e, o = this.contacts, i = z, n = V, r = this.numObjects(), s = this.bodies, a = this.solver, h = this.gravity, l = this.doProfiling, p = this.profile, c = u.DYNAMIC, d = this.constraints, v = q, y = (h.norm(),
                        h.x), f = h.y, m = h.z, w = 0;
                    for (l && (e = performance.now()), w = 0; w !== r; w++) {
                        if ((I = s[w]).type === c) {
                            var x = I.force, g = I.mass;
                            x.x += g * y, x.y += g * f, x.z += g * m;
                        }
                    }
                    w = 0;
                    for (var b = this.subsystems.length; w !== b; w++) {
                        this.subsystems[w].update();
                    }
                    l && (e = performance.now()), i.length = 0, n.length = 0, this.broadphase.collisionPairs(this, i, n),
                        l && (p.broadphase = performance.now() - e);
                    var B = d.length;
                    for (w = 0; w !== B; w++) {
                        if (!(O = d[w]).collideConnected) for (var A = i.length - 1; A >= 0; A -= 1) {
                            (O.bodyA === i[A] && O.bodyB === n[A] || O.bodyB === i[A] && O.bodyA === n[A]) && (i.splice(A, 1),
                                n.splice(A, 1));
                        }
                    }
                    this.collisionMatrixTick(), l && (e = performance.now());
                    var S = P, E = o.length;
                    for (w = 0; w !== E; w++) {
                        S.push(o[w]);
                    }
                    o.length = 0;
                    var T = this.frictionEquations.length;
                    for (w = 0; w !== T; w++) {
                        v.push(this.frictionEquations[w]);
                    }
                    this.frictionEquations.length = 0, this.narrowphase.getContacts(i, n, this, o, S, this.frictionEquations, v),
                        l && (p.narrowphase = performance.now() - e), l && (e = performance.now());
                    for (w = 0; w < this.frictionEquations.length; w++) {
                        a.addEquation(this.frictionEquations[w]);
                    }
                    for (var F = o.length, N = 0; N !== F; N++) {
                        var I = (O = o[N]).bi, W = O.bj, L = O.si, j = O.sj;
                        (I.material && W.material && this.getContactMaterial(I.material, W.material) || this.defaultContactMaterial).friction;
                        if (I.material && W.material && (I.material.friction >= 0 && W.material.friction >= 0 && I.material.friction * W.material.friction,
                            I.material.restitution >= 0 && W.material.restitution >= 0 && (O.restitution = I.material.restitution * W.material.restitution)),
                            a.addEquation(O), I.allowSleep && I.type === u.DYNAMIC && I.sleepState === u.SLEEPING && W.sleepState === u.AWAKE && W.type !== u.STATIC) W.velocity.norm2() + W.angularVelocity.norm2() >= 2 * Math.pow(W.sleepSpeedLimit, 2) && (I._wakeUpAfterNarrowphase = !0);
                        if (W.allowSleep && W.type === u.DYNAMIC && W.sleepState === u.SLEEPING && I.sleepState === u.AWAKE && I.type !== u.STATIC) I.velocity.norm2() + I.angularVelocity.norm2() >= 2 * Math.pow(I.sleepSpeedLimit, 2) && (W._wakeUpAfterNarrowphase = !0);
                        this.collisionMatrix.set(I, W, !0), this.collisionMatrixPrevious.get(I, W) || (R.body = W,
                            R.contact = O, I.dispatchEvent(R), R.body = I, W.dispatchEvent(R)), this.bodyOverlapKeeper.set(I.id, W.id),
                            this.shapeOverlapKeeper.set(L.id, j.id);
                    }
                    for (this.emitContactEvents(), l && (p.makeContactConstraints = performance.now() - e,
                        e = performance.now()), w = 0; w !== r; w++) {
                        (I = s[w])._wakeUpAfterNarrowphase && (I.wakeUp(), I._wakeUpAfterNarrowphase = !1);
                    }
                    B = d.length;
                    for (w = 0; w !== B; w++) {
                        var O;
                        (O = d[w]).update();
                        A = 0;
                        for (var k = O.equations.length; A !== k; A++) {
                            var H = O.equations[A];
                            a.addEquation(H);
                        }
                    }
                    a.solve(t, this), l && (p.solve = performance.now() - e), a.removeAllEquations();
                    var _ = Math.pow;
                    for (w = 0; w !== r; w++) {
                        if ((I = s[w]).type & c) {
                            var U = _(1 - I.linearDamping, t), D = I.velocity;
                            D.mult(U, D);
                            var Q = I.angularVelocity;
                            if (Q) {
                                var G = _(1 - I.angularDamping, t);
                                Q.mult(G, Q);
                            }
                        }
                    }
                    for (this.dispatchEvent(M), w = 0; w !== r; w++) {
                        (I = s[w]).preStep && I.preStep.call(I);
                    }
                    l && (e = performance.now());
                    var X = this.stepnumber % (this.quatNormalizeSkip + 1) == 0, Y = this.quatNormalizeFast;
                    for (w = 0; w !== r; w++) {
                        s[w].integrate(t, X, Y);
                    }
                    for (this.clearForces(), this.broadphase.dirty = !0, l && (p.integrate = performance.now() - e),
                        this.time += t, this.stepnumber += 1, this.dispatchEvent(C), w = 0; w !== r; w++) {
                        var K = (I = s[w]).postStep;
                        K && K.call(I);
                    }
                    if (this.allowSleep) for (w = 0; w !== r; w++) {
                        s[w].sleepTick(this.time);
                    }
                }, World.prototype.emitContactEvents = (g = [], b = [], B = {
                    type: "beginContact",
                    bodyA: null,
                    bodyB: null
                }, A = {
                    type: "endContact",
                    bodyA: null,
                    bodyB: null
                }, S = {
                    type: "beginShapeContact",
                    bodyA: null,
                    bodyB: null,
                    shapeA: null,
                    shapeB: null
                }, E = {
                    type: "endShapeContact",
                    bodyA: null,
                    bodyB: null,
                    shapeA: null,
                    shapeB: null
                }, function () {
                    var t = this.hasAnyEventListener("beginContact"), e = this.hasAnyEventListener("endContact");
                    if ((t || e) && this.bodyOverlapKeeper.getDiff(g, b), t) {
                        for (var o = 0, i = g.length; o < i; o += 2) {
                            B.bodyA = this.getBodyById(g[o]), B.bodyB = this.getBodyById(g[o + 1]), this.dispatchEvent(B);
                        }
                        B.bodyA = B.bodyB = null;
                    }
                    if (e) {
                        for (o = 0, i = b.length; o < i; o += 2) {
                            A.bodyA = this.getBodyById(b[o]), A.bodyB = this.getBodyById(b[o + 1]), this.dispatchEvent(A);
                        }
                        A.bodyA = A.bodyB = null;
                    }
                    g.length = b.length = 0;
                    var n = this.hasAnyEventListener("beginShapeContact"), r = this.hasAnyEventListener("endShapeContact");
                    if ((n || r) && this.shapeOverlapKeeper.getDiff(g, b), n) {
                        for (o = 0, i = g.length; o < i; o += 2) {
                            var s = this.getShapeById(g[o]), a = this.getShapeById(g[o + 1]);
                            S.shapeA = s, S.shapeB = a, S.bodyA = s.body, S.bodyB = a.body, this.dispatchEvent(S);
                        }
                        S.bodyA = S.bodyB = S.shapeA = S.shapeB = null;
                    }
                    if (r) {
                        for (o = 0, i = b.length; o < i; o += 2) {
                            s = this.getShapeById(b[o]), a = this.getShapeById(b[o + 1]), E.shapeA = s, E.shapeB = a,
                                E.bodyA = s.body, E.bodyB = a.body, this.dispatchEvent(E);
                        }
                        E.bodyA = E.bodyB = E.shapeA = E.shapeB = null;
                    }
                }), World.prototype.clearForces = function () {
                    for (var t = this.bodies, e = t.length, o = 0; o !== e; o++) {
                        var i = t[o];
                        i.force, i.torque;
                        i.force.set(0, 0, 0), i.torque.set(0, 0, 0);
                    }
                };
            }, {
                "../collision/AABB": 3,
                "../collision/ArrayCollisionMatrix": 4,
                "../collision/NaiveBroadphase": 7,
                "../collision/OverlapKeeper": 9,
                "../collision/Ray": 10,
                "../collision/RaycastResult": 11,
                "../equations/ContactEquation": 20,
                "../equations/FrictionEquation": 22,
                "../material/ContactMaterial": 25,
                "../material/Material": 26,
                "../math/Quaternion": 29,
                "../math/Vec3": 31,
                "../objects/Body": 32,
                "../shapes/Shape": 44,
                "../solver/GSSolver": 47,
                "../utils/EventTarget": 50,
                "../utils/TupleDictionary": 53,
                "./Narrowphase": 56
            }]
        }, {}, [2])(2);
    });
}()
