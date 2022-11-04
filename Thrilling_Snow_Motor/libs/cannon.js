!function(t) {
    var e;
    "undefined" != typeof window ? e = window : "undefined" != typeof global ? e = global : "undefined" != typeof self && (e = self), 
    e.CANNON = t();
}(function() {
    return function e(t, o, i) {
        function s(r, a) {
            if (!o[r]) {
                if (!t[r]) {
                    var l = "function" == typeof require && require;
                    if (!a && l) return l(r, !0);
                    if (n) return n(r, !0);
                    throw new Error("Cannot find module '" + r + "'");
                }
                var h = o[r] = {
                    exports: {}
                };
                t[r][0].call(h.exports, function(e) {
                    var o = t[r][1][e];
                    return s(o || e);
                }, h, h.exports, e, t, o, i);
            }
            return o[r].exports;
        }
        for (var n = "function" == typeof require && require, r = 0; r < i.length; r++) s(i[r]);
        return s;
    }({
        1: [ function(t, e, o) {
            e.exports = {
                name: "cannon",
                version: "0.6.2",
                description: "A lightweight 3D physics engine written in JavaScript.",
                homepage: "https://github.com/schteppe/cannon.js",
                author: "Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",
                keywords: [ "cannon.js", "cannon", "physics", "engine", "3d" ],
                main: "./build/cannon.js",
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
                licenses: [ {
                    type: "MIT"
                } ],
                devDependencies: {
                    jshint: "latest",
                    "uglify-js": "latest",
                    nodeunit: "^0.9.0",
                    grunt: "~0.4.0",
                    "grunt-contrib-jshint": "~0.1.1",
                    "grunt-contrib-nodeunit": "^0.4.1",
                    "grunt-contrib-concat": "~0.1.3",
                    "grunt-contrib-uglify": "^0.5.1",
                    "grunt-browserify": "^2.1.4",
                    "grunt-contrib-yuidoc": "^0.5.2",
                    browserify: "*"
                },
                dependencies: {}
            };
        }, {} ],
        2: [ function(t, e, o) {
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
            "./collision/Ray": 9,
            "./collision/RaycastResult": 10,
            "./collision/SAPBroadphase": 11,
            "./constraints/ConeTwistConstraint": 12,
            "./constraints/Constraint": 13,
            "./constraints/DistanceConstraint": 14,
            "./constraints/HingeConstraint": 15,
            "./constraints/LockConstraint": 16,
            "./constraints/PointToPointConstraint": 17,
            "./equations/ContactEquation": 19,
            "./equations/Equation": 20,
            "./equations/FrictionEquation": 21,
            "./equations/RotationalEquation": 22,
            "./equations/RotationalMotorEquation": 23,
            "./material/ContactMaterial": 24,
            "./material/Material": 25,
            "./math/Mat3": 27,
            "./math/Quaternion": 28,
            "./math/Vec3": 30,
            "./objects/Body": 31,
            "./objects/RaycastVehicle": 32,
            "./objects/RigidVehicle": 33,
            "./objects/SPHSystem": 34,
            "./objects/Spring": 35,
            "./shapes/Box": 37,
            "./shapes/ConvexPolyhedron": 38,
            "./shapes/Cylinder": 39,
            "./shapes/Heightfield": 40,
            "./shapes/Particle": 41,
            "./shapes/Plane": 42,
            "./shapes/Shape": 43,
            "./shapes/Sphere": 44,
            "./shapes/Trimesh": 45,
            "./solver/GSSolver": 46,
            "./solver/Solver": 47,
            "./solver/SplitSolver": 48,
            "./utils/EventTarget": 49,
            "./utils/Pool": 51,
            "./utils/Vec3Pool": 54,
            "./world/Narrowphase": 55,
            "./world/World": 56
        } ],
        3: [ function(t, e, o) {
            var i = t("../math/Vec3");
            t("../utils/Utils");
            function AABB(t) {
                t = t || {}, this.lowerBound = new i(), t.lowerBound && this.lowerBound.copy(t.lowerBound), 
                this.upperBound = new i(), t.upperBound && this.upperBound.copy(t.upperBound);
            }
            e.exports = AABB;
            var n = new i();
            AABB.prototype.setFromPoints = function(t, e, o, i) {
                var r = this.lowerBound, s = this.upperBound, a = o;
                r.copy(t[0]), a && a.vmult(r, r), s.copy(r);
                for (var l = 1; l < t.length; l++) {
                    var h = t[l];
                    a && (a.vmult(h, n), h = n), h.x > s.x && (s.x = h.x), h.x < r.x && (r.x = h.x), 
                    h.y > s.y && (s.y = h.y), h.y < r.y && (r.y = h.y), h.z > s.z && (s.z = h.z), h.z < r.z && (r.z = h.z);
                }
                return e && (e.vadd(r, r), e.vadd(s, s)), i && (r.x -= i, r.y -= i, r.z -= i, s.x += i, 
                s.y += i, s.z += i), this;
            }, AABB.prototype.copy = function(t) {
                return this.lowerBound.copy(t.lowerBound), this.upperBound.copy(t.upperBound), this;
            }, AABB.prototype.clone = function() {
                return new AABB().copy(this);
            }, AABB.prototype.extend = function(t) {
                var e = t.lowerBound.x;
                this.lowerBound.x > e && (this.lowerBound.x = e);
                var o = t.upperBound.x;
                this.upperBound.x < o && (this.upperBound.x = o);
                e = t.lowerBound.y;
                this.lowerBound.y > e && (this.lowerBound.y = e);
                o = t.upperBound.y;
                this.upperBound.y < o && (this.upperBound.y = o);
                e = t.lowerBound.z;
                this.lowerBound.z > e && (this.lowerBound.z = e);
                o = t.upperBound.z;
                this.upperBound.z < o && (this.upperBound.z = o);
            }, AABB.prototype.overlaps = function(t) {
                var e = this.lowerBound, o = this.upperBound, i = t.lowerBound, n = t.upperBound;
                return (i.x <= o.x && o.x <= n.x || e.x <= n.x && n.x <= o.x) && (i.y <= o.y && o.y <= n.y || e.y <= n.y && n.y <= o.y) && (i.z <= o.z && o.z <= n.z || e.z <= n.z && n.z <= o.z);
            }, AABB.prototype.contains = function(t) {
                var e = this.lowerBound, o = this.upperBound, i = t.lowerBound, n = t.upperBound;
                return e.x <= i.x && o.x >= n.x && e.y <= i.y && o.y >= n.y && e.z <= i.z && o.z >= n.z;
            }, AABB.prototype.getCorners = function(t, e, o, i, n, r, s, a) {
                var l = this.lowerBound, h = this.upperBound;
                t.copy(l), e.set(h.x, l.y, l.z), o.set(h.x, h.y, l.z), i.set(l.x, h.y, h.z), n.set(h.x, l.y, l.z), 
                r.set(l.x, h.y, l.z), s.set(l.x, l.y, h.z), a.copy(h);
            };
            var r = [ new i(), new i(), new i(), new i(), new i(), new i(), new i(), new i() ];
            AABB.prototype.toLocalFrame = function(t, e) {
                var o = r, i = o[0], n = o[1], s = o[2], a = o[3], l = o[4], h = o[5], c = o[6], p = o[7];
                this.getCorners(i, n, s, a, l, h, c, p);
                for (var u = 0; 8 !== u; u++) {
                    var d = o[u];
                    t.pointToLocal(d, d);
                }
                return e.setFromPoints(o);
            }, AABB.prototype.toWorldFrame = function(t, e) {
                var o = r, i = o[0], n = o[1], s = o[2], a = o[3], l = o[4], h = o[5], c = o[6], p = o[7];
                this.getCorners(i, n, s, a, l, h, c, p);
                for (var u = 0; 8 !== u; u++) {
                    var d = o[u];
                    t.pointToWorld(d, d);
                }
                return e.setFromPoints(o);
            };
        }, {
            "../math/Vec3": 30,
            "../utils/Utils": 53
        } ],
        4: [ function(t, e, o) {
            function ArrayCollisionMatrix() {
                this.matrix = [];
            }
            e.exports = ArrayCollisionMatrix, ArrayCollisionMatrix.prototype.get = function(t, e) {
                if (t = t.index, (e = e.index) > t) {
                    var o = e;
                    e = t, t = o;
                }
                return this.matrix[(t * (t + 1) >> 1) + e - 1];
            }, ArrayCollisionMatrix.prototype.set = function(t, e, o) {
                if (t = t.index, (e = e.index) > t) {
                    var i = e;
                    e = t, t = i;
                }
                this.matrix[(t * (t + 1) >> 1) + e - 1] = o ? 1 : 0;
            }, ArrayCollisionMatrix.prototype.reset = function() {
                for (var t = 0, e = this.matrix.length; t !== e; t++) this.matrix[t] = 0;
            }, ArrayCollisionMatrix.prototype.setNumObjects = function(t) {
                this.matrix.length = t * (t - 1) >> 1;
            };
        }, {} ],
        5: [ function(t, e, o) {
            var i = t("../objects/Body"), n = t("../math/Vec3"), r = t("../math/Quaternion");
            t("../shapes/Shape"), t("../shapes/Plane");
            function Broadphase() {
                this.world = null, this.useBoundingBoxes = !1, this.dirty = !0;
            }
            e.exports = Broadphase, Broadphase.prototype.collisionPairs = function(t, e, o) {
                throw new Error("collisionPairs not implemented for this BroadPhase class!");
            };
            i.STATIC, i.KINEMATIC;
            Broadphase.prototype.needBroadphaseCollision = function(t, e) {
                return 0 != (t.collisionFilterGroup & e.collisionFilterMask) && 0 != (e.collisionFilterGroup & t.collisionFilterMask) && (0 == (t.type & i.STATIC) && t.sleepState !== i.SLEEPING || 0 == (e.type & i.STATIC) && e.sleepState !== i.SLEEPING);
            }, Broadphase.prototype.intersectionTest = function(t, e, o, i) {
                this.useBoundingBoxes ? this.doBoundingBoxBroadphase(t, e, o, i) : this.doBoundingSphereBroadphase(t, e, o, i);
            };
            var s = new n();
            new n(), new r(), new n();
            Broadphase.prototype.doBoundingSphereBroadphase = function(t, e, o, i) {
                var n = s;
                e.position.vsub(t.position, n);
                var r = Math.pow(t.boundingRadius + e.boundingRadius, 2);
                n.norm2() < r && (o.push(t), i.push(e));
            }, Broadphase.prototype.doBoundingBoxBroadphase = function(t, e, o, i) {
                t.aabbNeedsUpdate && t.computeAABB(), e.aabbNeedsUpdate && e.computeAABB(), t.aabb.overlaps(e.aabb) && (o.push(t), 
                i.push(e));
            };
            var a = {
                keys: []
            }, l = [], h = [];
            Broadphase.prototype.makePairsUnique = function(t, e) {
                for (var o = a, i = l, n = h, r = t.length, s = 0; s !== r; s++) i[s] = t[s], n[s] = e[s];
                t.length = 0, e.length = 0;
                for (s = 0; s !== r; s++) {
                    var c = i[s].id, p = n[s].id;
                    o[u = c < p ? c + "," + p : p + "," + c] = s, o.keys.push(u);
                }
                for (s = 0; s !== o.keys.length; s++) {
                    var u = o.keys.pop(), d = o[u];
                    t.push(i[d]), e.push(n[d]), delete o[u];
                }
            }, Broadphase.prototype.setWorld = function(t) {};
            var c = new n();
            Broadphase.boundingSphereCheck = function(t, e) {
                var o = c;
                return t.position.vsub(e.position, o), Math.pow(t.shape.boundingSphereRadius + e.shape.boundingSphereRadius, 2) > o.norm2();
            }, Broadphase.prototype.aabbQuery = function(t, e, o) {
                return console.warn(".aabbQuery is not implemented in this Broadphase subclass."), 
                [];
            };
        }, {
            "../math/Quaternion": 28,
            "../math/Vec3": 30,
            "../objects/Body": 31,
            "../shapes/Plane": 42,
            "../shapes/Shape": 43
        } ],
        6: [ function(t, e, o) {
            e.exports = GridBroadphase;
            var i = t("./Broadphase"), n = t("../math/Vec3"), r = t("../shapes/Shape");
            function GridBroadphase(t, e, o, r, s) {
                i.apply(this), this.nx = o || 10, this.ny = r || 10, this.nz = s || 10, this.aabbMin = t || new n(100, 100, 100), 
                this.aabbMax = e || new n(-100, -100, -100);
                var a = this.nx * this.ny * this.nz;
                if (a <= 0) throw "GridBroadphase: Each dimension's n must be >0";
                this.bins = [], this.binLengths = [], this.bins.length = a, this.binLengths.length = a;
                for (var l = 0; l < a; l++) this.bins[l] = [], this.binLengths[l] = 0;
            }
            GridBroadphase.prototype = new i(), GridBroadphase.prototype.constructor = GridBroadphase;
            var s = new n();
            new n();
            GridBroadphase.prototype.collisionPairs = function(t, e, o) {
                for (var i = t.numObjects(), n = t.bodies, a = this.aabbMax, l = this.aabbMin, h = this.nx, c = this.ny, p = this.nz, u = c * p, d = p, v = 1, y = a.x, f = a.y, m = a.z, w = l.x, x = l.y, g = l.z, b = h / (y - w), B = c / (f - x), S = p / (m - g), E = (y - w) / h, C = (f - x) / c, A = (m - g) / p, R = .5 * Math.sqrt(E * E + C * C + A * A), P = r.types, M = P.SPHERE, q = P.PLANE, V = (P.BOX, 
                P.COMPOUND, P.CONVEXPOLYHEDRON, this.bins), z = this.binLengths, T = this.bins.length, N = 0; N !== T; N++) z[N] = 0;
                var F = Math.ceil;
                l = Math.min, a = Math.max;
                function addBoxToBins(t, e, o, i, n, r, s) {
                    var a = (t - w) * b | 0, l = (e - x) * B | 0, y = (o - g) * S | 0, f = F((i - w) * b), m = F((n - x) * B), E = F((r - g) * S);
                    a < 0 ? a = 0 : a >= h && (a = h - 1), l < 0 ? l = 0 : l >= c && (l = c - 1), y < 0 ? y = 0 : y >= p && (y = p - 1), 
                    f < 0 ? f = 0 : f >= h && (f = h - 1), m < 0 ? m = 0 : m >= c && (m = c - 1), E < 0 ? E = 0 : E >= p && (E = p - 1), 
                    l *= d, y *= v, f *= u, m *= d, E *= v;
                    for (var C = a *= u; C <= f; C += u) for (var A = l; A <= m; A += d) for (var R = y; R <= E; R += v) {
                        var P = C + A + R;
                        V[P][z[P]++] = s;
                    }
                }
                for (N = 0; N !== i; N++) {
                    var I = (et = n[N]).shape;
                    switch (I.type) {
                      case M:
                        var W = et.position.x, L = et.position.y, j = et.position.z, O = I.radius;
                        addBoxToBins(W - O, L - O, j - O, W + O, L + O, j + O, et);
                        break;

                      case q:
                        I.worldNormalNeedsUpdate && I.computeWorldNormal(et.quaternion);
                        var H = I.worldNormal, k = w + .5 * E - et.position.x, _ = x + .5 * C - et.position.y, U = g + .5 * A - et.position.z, D = s;
                        D.set(k, _, U);
                        for (var Q = 0, G = 0; Q !== h; Q++, G += u, D.y = _, D.x += E) for (var X = 0, Y = 0; X !== c; X++, 
                        Y += d, D.z = U, D.y += C) for (var Z = 0, K = 0; Z !== p; Z++, K += v, D.z += A) if (D.dot(H) < R) {
                            var J = G + Y + K;
                            V[J][z[J]++] = et;
                        }
                        break;

                      default:
                        et.aabbNeedsUpdate && et.computeAABB(), addBoxToBins(et.aabb.lowerBound.x, et.aabb.lowerBound.y, et.aabb.lowerBound.z, et.aabb.upperBound.x, et.aabb.upperBound.y, et.aabb.upperBound.z, et);
                    }
                }
                for (N = 0; N !== T; N++) {
                    var $ = z[N];
                    if ($ > 1) {
                        var tt = V[N];
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
            "../math/Vec3": 30,
            "../shapes/Shape": 43,
            "./Broadphase": 5
        } ],
        7: [ function(t, e, o) {
            e.exports = NaiveBroadphase;
            var i = t("./Broadphase"), n = t("./AABB");
            function NaiveBroadphase() {
                i.apply(this);
            }
            NaiveBroadphase.prototype = new i(), NaiveBroadphase.prototype.constructor = NaiveBroadphase, 
            NaiveBroadphase.prototype.collisionPairs = function(t, e, o) {
                var i, n, r, s, a = t.bodies, l = a.length;
                for (i = 0; i !== l; i++) for (n = 0; n !== i; n++) r = a[i], s = a[n], this.needBroadphaseCollision(r, s) && this.intersectionTest(r, s, e, o);
            };
            new n();
            NaiveBroadphase.prototype.aabbQuery = function(t, e, o) {
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
        } ],
        8: [ function(t, e, o) {
            function ObjectCollisionMatrix() {
                this.matrix = {};
            }
            e.exports = ObjectCollisionMatrix, ObjectCollisionMatrix.prototype.get = function(t, e) {
                if (t = t.id, (e = e.id) > t) {
                    var o = e;
                    e = t, t = o;
                }
                return t + "-" + e in this.matrix;
            }, ObjectCollisionMatrix.prototype.set = function(t, e, o) {
                if (t = t.id, (e = e.id) > t) {
                    var i = e;
                    e = t, t = i;
                }
                o ? this.matrix[t + "-" + e] = !0 : delete this.matrix[t + "-" + e];
            }, ObjectCollisionMatrix.prototype.reset = function() {
                this.matrix = {};
            }, ObjectCollisionMatrix.prototype.setNumObjects = function(t) {};
        }, {} ],
        9: [ function(t, e, o) {
            e.exports = Ray;
            var i = t("../math/Vec3"), n = t("../math/Quaternion"), r = t("../math/Transform"), s = (t("../shapes/ConvexPolyhedron"), 
            t("../shapes/Box"), t("../collision/RaycastResult")), a = t("../shapes/Shape"), l = t("../collision/AABB");
            function Ray(t, e) {
                this.from = t ? t.clone() : new i(), this.to = e ? e.clone() : new i(), this._direction = new i(), 
                this.precision = 1e-4, this.checkCollisionResponse = !0, this.skipBackfaces = !1, 
                this.collisionFilterMask = -1, this.collisionFilterGroup = -1, this.mode = Ray.ANY, 
                this.result = new s(), this.hasHit = !1, this.callback = function(t) {};
            }
            Ray.prototype.constructor = Ray, Ray.CLOSEST = 1, Ray.ANY = 2, Ray.ALL = 4;
            var h = new l(), c = [];
            Ray.prototype.intersectWorld = function(t, e) {
                return this.mode = e.mode || Ray.ANY, this.result = e.result || new s(), this.skipBackfaces = !!e.skipBackfaces, 
                this.collisionFilterMask = void 0 !== e.collisionFilterMask ? e.collisionFilterMask : -1, 
                this.collisionFilterGroup = void 0 !== e.collisionFilterGroup ? e.collisionFilterGroup : -1, 
                e.from && this.from.copy(e.from), e.to && this.to.copy(e.to), this.callback = e.callback || function() {}, 
                this.hasHit = !1, this.result.reset(), this._updateDirection(), this.getAABB(h), 
                c.length = 0, t.broadphase.aabbQuery(t, h, c), this.intersectBodies(c), this.hasHit;
            };
            var p = new i(), u = new i();
            function pointInTriangle(t, e, o, i) {
                i.vsub(e, z), o.vsub(e, p), t.vsub(e, u);
                var n, r, s = z.dot(z), a = z.dot(p), l = z.dot(u), h = p.dot(p), c = p.dot(u);
                return (n = h * l - a * c) >= 0 && (r = s * c - a * l) >= 0 && n + r < s * h - a * a;
            }
            Ray.pointInTriangle = pointInTriangle;
            var d = new i(), v = new n();
            Ray.prototype.intersectBody = function(t, e) {
                e && (this.result = e, this._updateDirection());
                var o = this.checkCollisionResponse;
                if ((!o || t.collisionResponse) && 0 != (this.collisionFilterGroup & t.collisionFilterMask) && 0 != (t.collisionFilterGroup & this.collisionFilterMask)) for (var i = d, n = v, r = 0, s = t.shapes.length; r < s; r++) {
                    var a = t.shapes[r];
                    if ((!o || a.collisionResponse) && (t.quaternion.mult(t.shapeOrientations[r], n), 
                    t.quaternion.vmult(t.shapeOffsets[r], i), i.vadd(t.position, i), this.intersectShape(a, n, i, t), 
                    this.result._shouldStop)) break;
                }
            }, Ray.prototype.intersectBodies = function(t, e) {
                e && (this.result = e, this._updateDirection());
                for (var o = 0, i = t.length; !this.result._shouldStop && o < i; o++) this.intersectBody(t[o]);
            }, Ray.prototype._updateDirection = function() {
                this.to.vsub(this.from, this._direction), this._direction.normalize();
            }, Ray.prototype.intersectShape = function(t, e, o, i) {
                if (!(function(t, e, o) {
                    o.vsub(t, z);
                    var i = z.dot(e);
                    return e.mult(i, T), T.vadd(t, T), o.distanceTo(T);
                }(this.from, this._direction, o) > t.boundingSphereRadius)) {
                    var n = this[t.type];
                    n && n.call(this, t, e, o, i);
                }
            };
            new i(), new i();
            var y = new i(), f = new i(), m = new i(), w = new i();
            new i(), new s();
            Ray.prototype.intersectBox = function(t, e, o, i) {
                return this.intersectConvex(t.convexPolyhedronRepresentation, e, o, i);
            }, Ray.prototype[a.types.BOX] = Ray.prototype.intersectBox, Ray.prototype.intersectPlane = function(t, e, o, n) {
                var r = this.from, s = this.to, a = this._direction, l = new i(0, 0, 1);
                e.vmult(l, l);
                var h = new i();
                r.vsub(o, h);
                var c = h.dot(l);
                if (s.vsub(o, h), !(c * h.dot(l) > 0 || r.distanceTo(s) < c)) {
                    var p = l.dot(a);
                    if (!(Math.abs(p) < this.precision)) {
                        var u = new i(), d = new i(), v = new i();
                        r.vsub(o, u);
                        var y = -l.dot(u) / p;
                        a.scale(y, d), r.vadd(d, v), this.reportIntersection(l, v, t, n, -1);
                    }
                }
            }, Ray.prototype[a.types.PLANE] = Ray.prototype.intersectPlane, Ray.prototype.getAABB = function(t) {
                var e = this.to, o = this.from;
                t.lowerBound.x = Math.min(e.x, o.x), t.lowerBound.y = Math.min(e.y, o.y), t.lowerBound.z = Math.min(e.z, o.z), 
                t.upperBound.x = Math.max(e.x, o.x), t.upperBound.y = Math.max(e.y, o.y), t.upperBound.z = Math.max(e.z, o.z);
            };
            var x = {
                faceList: [ 0 ]
            };
            Ray.prototype.intersectHeightfield = function(t, e, o, n) {
                t.data, t.elementSize;
                var s = new i(), a = new Ray(this.from, this.to);
                r.pointToLocalFrame(o, e, a.from, a.from), r.pointToLocalFrame(o, e, a.to, a.to);
                var l = [], h = null, c = null, p = null, u = null, d = t.getIndexOfPosition(a.from.x, a.from.y, l, !1);
                if (d && (h = l[0], c = l[1], p = l[0], u = l[1]), (d = t.getIndexOfPosition(a.to.x, a.to.y, l, !1)) && ((null === h || l[0] < h) && (h = l[0]), 
                (null === p || l[0] > p) && (p = l[0]), (null === c || l[1] < c) && (c = l[1]), 
                (null === u || l[1] > u) && (u = l[1])), null !== h) {
                    var v = [];
                    t.getRectMinMax(h, c, p, u, v);
                    for (var y = h; y <= p; y++) for (var f = c; f <= u; f++) {
                        if (this.result._shouldStop) return;
                        if (t.getConvexTrianglePillar(y, f, !1), r.pointToWorldFrame(o, e, t.pillarOffset, s), 
                        this.intersectConvex(t.pillarConvex, e, s, n, x), this.result._shouldStop) return;
                        t.getConvexTrianglePillar(y, f, !0), r.pointToWorldFrame(o, e, t.pillarOffset, s), 
                        this.intersectConvex(t.pillarConvex, e, s, n, x);
                    }
                }
            }, Ray.prototype[a.types.HEIGHTFIELD] = Ray.prototype.intersectHeightfield;
            var g = new i(), b = new i();
            Ray.prototype.intersectSphere = function(t, e, o, i) {
                var n = this.from, r = this.to, s = t.radius, a = Math.pow(r.x - n.x, 2) + Math.pow(r.y - n.y, 2) + Math.pow(r.z - n.z, 2), l = 2 * ((r.x - n.x) * (n.x - o.x) + (r.y - n.y) * (n.y - o.y) + (r.z - n.z) * (n.z - o.z)), h = Math.pow(n.x - o.x, 2) + Math.pow(n.y - o.y, 2) + Math.pow(n.z - o.z, 2) - Math.pow(s, 2), c = Math.pow(l, 2) - 4 * a * h, p = g, u = b;
                if (!(c < 0)) if (0 === c) n.lerp(r, c, p), p.vsub(o, u), u.normalize(), this.reportIntersection(u, p, t, i, -1); else {
                    var d = (-l - Math.sqrt(c)) / (2 * a), v = (-l + Math.sqrt(c)) / (2 * a);
                    if (d >= 0 && d <= 1 && (n.lerp(r, d, p), p.vsub(o, u), u.normalize(), this.reportIntersection(u, p, t, i, -1)), 
                    this.result._shouldStop) return;
                    v >= 0 && v <= 1 && (n.lerp(r, v, p), p.vsub(o, u), u.normalize(), this.reportIntersection(u, p, t, i, -1));
                }
            }, Ray.prototype[a.types.SPHERE] = Ray.prototype.intersectSphere;
            var B = new i(), S = (new i(), new i(), new i());
            Ray.prototype.intersectConvex = function(t, e, o, i, n) {
                for (var r = B, s = S, a = n && n.faceList || null, l = t.faces, h = t.vertices, c = t.faceNormals, p = this._direction, u = this.from, d = this.to, v = u.distanceTo(d), x = a ? a.length : l.length, g = this.result, b = 0; !g._shouldStop && b < x; b++) {
                    var E = a ? a[b] : b, C = l[E], A = c[E], R = e, P = o;
                    s.copy(h[C[0]]), R.vmult(s, s), s.vadd(P, s), s.vsub(u, s), R.vmult(A, r);
                    var M = p.dot(r);
                    if (!(Math.abs(M) < this.precision)) {
                        var q = r.dot(s) / M;
                        if (!(q < 0)) {
                            p.mult(q, y), y.vadd(u, y), f.copy(h[C[0]]), R.vmult(f, f), P.vadd(f, f);
                            for (var V = 1; !g._shouldStop && V < C.length - 1; V++) {
                                m.copy(h[C[V]]), w.copy(h[C[V + 1]]), R.vmult(m, m), R.vmult(w, w), P.vadd(m, m), 
                                P.vadd(w, w);
                                var z = y.distanceTo(u);
                                !pointInTriangle(y, f, m, w) && !pointInTriangle(y, m, f, w) || z > v || this.reportIntersection(r, y, t, i, E);
                            }
                        }
                    }
                }
            }, Ray.prototype[a.types.CONVEXPOLYHEDRON] = Ray.prototype.intersectConvex;
            var E = new i(), C = new i(), A = new i(), R = new i(), P = new i(), M = new i(), q = (new l(), 
            []), V = new r();
            Ray.prototype.intersectTrimesh = function(t, e, o, i, n) {
                var s = E, a = q, l = V, h = S, c = C, p = A, u = R, d = M, v = P, x = (n && n.faceList, 
                t.indices), g = (t.vertices, t.faceNormals, this.from), b = this.to, B = this._direction;
                l.position.copy(o), l.quaternion.copy(e), r.vectorToLocalFrame(o, e, B, c), r.pointToLocalFrame(o, e, g, p), 
                r.pointToLocalFrame(o, e, b, u);
                var z = p.distanceSquared(u);
                t.tree.rayQuery(this, l, a);
                for (var T = 0, N = a.length; !this.result._shouldStop && T !== N; T++) {
                    var F = a[T];
                    t.getNormal(F, s), t.getVertex(x[3 * F], f), f.vsub(p, h);
                    var I = c.dot(s), W = s.dot(h) / I;
                    if (!(W < 0)) {
                        c.scale(W, y), y.vadd(p, y), t.getVertex(x[3 * F + 1], m), t.getVertex(x[3 * F + 2], w);
                        var L = y.distanceSquared(p);
                        !pointInTriangle(y, m, f, w) && !pointInTriangle(y, f, m, w) || L > z || (r.vectorToWorldFrame(e, s, v), 
                        r.pointToWorldFrame(o, e, y, d), this.reportIntersection(v, d, t, i, F));
                    }
                }
                a.length = 0;
            }, Ray.prototype[a.types.TRIMESH] = Ray.prototype.intersectTrimesh, Ray.prototype.reportIntersection = function(t, e, o, i, n) {
                var r = this.from, s = this.to, a = r.distanceTo(e), l = this.result;
                if (!(this.skipBackfaces && t.dot(this._direction) > 0)) switch (l.hitFaceIndex = void 0 !== n ? n : -1, 
                this.mode) {
                  case Ray.ALL:
                    this.hasHit = !0, l.set(r, s, t, e, o, i, a), l.hasHit = !0, this.callback(l);
                    break;

                  case Ray.CLOSEST:
                    (a < l.distance || !l.hasHit) && (this.hasHit = !0, l.hasHit = !0, l.set(r, s, t, e, o, i, a));
                    break;

                  case Ray.ANY:
                    this.hasHit = !0, l.hasHit = !0, l.set(r, s, t, e, o, i, a), l._shouldStop = !0;
                }
            };
            var z = new i(), T = new i();
        }, {
            "../collision/AABB": 3,
            "../collision/RaycastResult": 10,
            "../math/Quaternion": 28,
            "../math/Transform": 29,
            "../math/Vec3": 30,
            "../shapes/Box": 37,
            "../shapes/ConvexPolyhedron": 38,
            "../shapes/Shape": 43
        } ],
        10: [ function(t, e, o) {
            var i = t("../math/Vec3");
            function RaycastResult() {
                this.rayFromWorld = new i(), this.rayToWorld = new i(), this.hitNormalWorld = new i(), 
                this.hitPointWorld = new i(), this.hasHit = !1, this.shape = null, this.body = null, 
                this.hitFaceIndex = -1, this.distance = -1, this._shouldStop = !1;
            }
            e.exports = RaycastResult, RaycastResult.prototype.reset = function() {
                this.rayFromWorld.setZero(), this.rayToWorld.setZero(), this.hitNormalWorld.setZero(), 
                this.hitPointWorld.setZero(), this.hasHit = !1, this.shape = null, this.body = null, 
                this.hitFaceIndex = -1, this.distance = -1, this._shouldStop = !1;
            }, RaycastResult.prototype.abort = function() {
                this._shouldStop = !0;
            }, RaycastResult.prototype.set = function(t, e, o, i, n, r, s) {
                this.rayFromWorld.copy(t), this.rayToWorld.copy(e), this.hitNormalWorld.copy(o), 
                this.hitPointWorld.copy(i), this.shape = n, this.body = r, this.distance = s;
            };
        }, {
            "../math/Vec3": 30
        } ],
        11: [ function(t, e, o) {
            t("../shapes/Shape");
            var i = t("../collision/Broadphase");
            function SAPBroadphase(t) {
                i.apply(this), this.axisList = [], this.world = null, this.axisIndex = 0;
                var e = this.axisList;
                this._addBodyHandler = function(t) {
                    e.push(t.body);
                }, this._removeBodyHandler = function(t) {
                    var o = e.indexOf(t.body);
                    -1 !== o && e.splice(o, 1);
                }, t && this.setWorld(t);
            }
            e.exports = SAPBroadphase, SAPBroadphase.prototype = new i(), SAPBroadphase.prototype.setWorld = function(t) {
                this.axisList.length = 0;
                for (var e = 0; e < t.bodies.length; e++) this.axisList.push(t.bodies[e]);
                t.removeEventListener("addBody", this._addBodyHandler), t.removeEventListener("removeBody", this._removeBodyHandler), 
                t.addEventListener("addBody", this._addBodyHandler), t.addEventListener("removeBody", this._removeBodyHandler), 
                this.world = t, this.dirty = !0;
            }, SAPBroadphase.insertionSortX = function(t) {
                for (var e = 1, o = t.length; e < o; e++) {
                    for (var i = t[e], n = e - 1; n >= 0 && !(t[n].aabb.lowerBound.x <= i.aabb.lowerBound.x); n--) t[n + 1] = t[n];
                    t[n + 1] = i;
                }
                return t;
            }, SAPBroadphase.insertionSortY = function(t) {
                for (var e = 1, o = t.length; e < o; e++) {
                    for (var i = t[e], n = e - 1; n >= 0 && !(t[n].aabb.lowerBound.y <= i.aabb.lowerBound.y); n--) t[n + 1] = t[n];
                    t[n + 1] = i;
                }
                return t;
            }, SAPBroadphase.insertionSortZ = function(t) {
                for (var e = 1, o = t.length; e < o; e++) {
                    for (var i = t[e], n = e - 1; n >= 0 && !(t[n].aabb.lowerBound.z <= i.aabb.lowerBound.z); n--) t[n + 1] = t[n];
                    t[n + 1] = i;
                }
                return t;
            }, SAPBroadphase.prototype.collisionPairs = function(t, e, o) {
                var i, n, r = this.axisList, s = r.length, a = this.axisIndex;
                for (this.dirty && (this.sortList(), this.dirty = !1), i = 0; i !== s; i++) {
                    var l = r[i];
                    for (n = i + 1; n < s; n++) {
                        var h = r[n];
                        if (this.needBroadphaseCollision(l, h)) {
                            if (!SAPBroadphase.checkBounds(l, h, a)) break;
                            this.intersectionTest(l, h, e, o);
                        }
                    }
                }
            }, SAPBroadphase.prototype.sortList = function() {
                for (var t = this.axisList, e = this.axisIndex, o = t.length, i = 0; i !== o; i++) {
                    var n = t[i];
                    n.aabbNeedsUpdate && n.computeAABB();
                }
                0 === e ? SAPBroadphase.insertionSortX(t) : 1 === e ? SAPBroadphase.insertionSortY(t) : 2 === e && SAPBroadphase.insertionSortZ(t);
            }, SAPBroadphase.checkBounds = function(t, e, o) {
                var i, n;
                0 === o ? (i = t.position.x, n = e.position.x) : 1 === o ? (i = t.position.y, n = e.position.y) : 2 === o && (i = t.position.z, 
                n = e.position.z);
                var r = t.boundingRadius, s = e.boundingRadius;
                return n - s < i + r;
            }, SAPBroadphase.prototype.autoDetectAxis = function() {
                for (var t = 0, e = 0, o = 0, i = 0, n = 0, r = 0, s = this.axisList, a = s.length, l = 1 / a, h = 0; h !== a; h++) {
                    var c = s[h], p = c.position.x;
                    t += p, e += p * p;
                    var u = c.position.y;
                    o += u, i += u * u;
                    var d = c.position.z;
                    n += d, r += d * d;
                }
                var v = e - t * t * l, y = i - o * o * l, f = r - n * n * l;
                this.axisIndex = v > y ? v > f ? 0 : 2 : y > f ? 1 : 2;
            }, SAPBroadphase.prototype.aabbQuery = function(t, e, o) {
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
            "../shapes/Shape": 43
        } ],
        12: [ function(t, e, o) {
            e.exports = ConeTwistConstraint;
            t("./Constraint");
            var i = t("./PointToPointConstraint"), n = t("../equations/ConeEquation"), r = t("../equations/RotationalEquation"), s = (t("../equations/ContactEquation"), 
            t("../math/Vec3"));
            function ConeTwistConstraint(t, e, o) {
                var a = void 0 !== (o = o || {}).maxForce ? o.maxForce : 1e6, l = o.pivotA ? o.pivotA.clone() : new s(), h = o.pivotB ? o.pivotB.clone() : new s();
                this.axisA = o.axisA ? o.axisA.clone() : new s(), this.axisB = o.axisB ? o.axisB.clone() : new s(), 
                i.call(this, t, l, e, h, a), this.collideConnected = !!o.collideConnected, this.angle = void 0 !== o.angle ? o.angle : 0;
                var c = this.coneEquation = new n(t, e, o), p = this.twistEquation = new r(t, e, o);
                this.twistAngle = void 0 !== o.twistAngle ? o.twistAngle : 0, c.maxForce = 0, c.minForce = -a, 
                p.maxForce = 0, p.minForce = -a, this.equations.push(c, p);
            }
            ConeTwistConstraint.prototype = new i(), ConeTwistConstraint.constructor = ConeTwistConstraint;
            new s(), new s();
            ConeTwistConstraint.prototype.update = function() {
                var t = this.bodyA, e = this.bodyB, o = this.coneEquation, n = this.twistEquation;
                i.prototype.update.call(this), t.vectorToWorldFrame(this.axisA, o.axisA), e.vectorToWorldFrame(this.axisB, o.axisB), 
                this.axisA.tangents(n.axisA, n.axisA), t.vectorToWorldFrame(n.axisA, n.axisA), this.axisB.tangents(n.axisB, n.axisB), 
                e.vectorToWorldFrame(n.axisB, n.axisB), o.angle = this.angle, n.maxAngle = this.twistAngle;
            };
        }, {
            "../equations/ConeEquation": 18,
            "../equations/ContactEquation": 19,
            "../equations/RotationalEquation": 22,
            "../math/Vec3": 30,
            "./Constraint": 13,
            "./PointToPointConstraint": 17
        } ],
        13: [ function(t, e, o) {
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
            Constraint.prototype.update = function() {
                throw new Error("method update() not implmemented in this Constraint subclass!");
            }, Constraint.prototype.enable = function() {
                for (var t = this.equations, e = 0; e < t.length; e++) t[e].enabled = !0;
            }, Constraint.prototype.disable = function() {
                for (var t = this.equations, e = 0; e < t.length; e++) t[e].enabled = !1;
            }, Constraint.idCounter = 0;
        }, {
            "../utils/Utils": 53
        } ],
        14: [ function(t, e, o) {
            e.exports = DistanceConstraint;
            var i = t("./Constraint"), n = t("../equations/ContactEquation");
            function DistanceConstraint(t, e, o, r) {
                i.call(this, t, e), void 0 === o && (o = t.position.distanceTo(e.position)), void 0 === r && (r = 1e6), 
                this.distance = o;
                var s = this.distanceEquation = new n(t, e);
                this.equations.push(s), s.minForce = -r, s.maxForce = r;
            }
            DistanceConstraint.prototype = new i(), DistanceConstraint.prototype.update = function() {
                var t = this.bodyA, e = this.bodyB, o = this.distanceEquation, i = .5 * this.distance, n = o.ni;
                e.position.vsub(t.position, n), n.normalize(), n.mult(i, o.ri), n.mult(-i, o.rj);
            };
        }, {
            "../equations/ContactEquation": 19,
            "./Constraint": 13
        } ],
        15: [ function(t, e, o) {
            e.exports = HingeConstraint;
            t("./Constraint");
            var i = t("./PointToPointConstraint"), n = t("../equations/RotationalEquation"), r = t("../equations/RotationalMotorEquation"), s = (t("../equations/ContactEquation"), 
            t("../math/Vec3"));
            function HingeConstraint(t, e, o) {
                var a = void 0 !== (o = o || {}).maxForce ? o.maxForce : 1e6, l = o.pivotA ? o.pivotA.clone() : new s(), h = o.pivotB ? o.pivotB.clone() : new s();
                i.call(this, t, l, e, h, a), (this.axisA = o.axisA ? o.axisA.clone() : new s(1, 0, 0)).normalize(), 
                (this.axisB = o.axisB ? o.axisB.clone() : new s(1, 0, 0)).normalize();
                var c = this.rotationalEquation1 = new n(t, e, o), p = this.rotationalEquation2 = new n(t, e, o), u = this.motorEquation = new r(t, e, a);
                u.enabled = !1, this.equations.push(c, p, u);
            }
            HingeConstraint.prototype = new i(), HingeConstraint.constructor = HingeConstraint, 
            HingeConstraint.prototype.enableMotor = function() {
                this.motorEquation.enabled = !0;
            }, HingeConstraint.prototype.disableMotor = function() {
                this.motorEquation.enabled = !1;
            }, HingeConstraint.prototype.setMotorSpeed = function(t) {
                this.motorEquation.targetVelocity = t;
            }, HingeConstraint.prototype.setMotorMaxForce = function(t) {
                this.motorEquation.maxForce = t, this.motorEquation.minForce = -t;
            };
            var a = new s(), l = new s();
            HingeConstraint.prototype.update = function() {
                var t = this.bodyA, e = this.bodyB, o = this.motorEquation, n = this.rotationalEquation1, r = this.rotationalEquation2, s = a, h = l, c = this.axisA, p = this.axisB;
                i.prototype.update.call(this), t.quaternion.vmult(c, s), e.quaternion.vmult(p, h), 
                s.tangents(n.axisA, r.axisA), n.axisB.copy(h), r.axisB.copy(h), this.motorEquation.enabled && (t.quaternion.vmult(this.axisA, o.axisA), 
                e.quaternion.vmult(this.axisB, o.axisB));
            };
        }, {
            "../equations/ContactEquation": 19,
            "../equations/RotationalEquation": 22,
            "../equations/RotationalMotorEquation": 23,
            "../math/Vec3": 30,
            "./Constraint": 13,
            "./PointToPointConstraint": 17
        } ],
        16: [ function(t, e, o) {
            e.exports = LockConstraint;
            t("./Constraint");
            var i = t("./PointToPointConstraint"), n = t("../equations/RotationalEquation"), r = (t("../equations/RotationalMotorEquation"), 
            t("../equations/ContactEquation"), t("../math/Vec3"));
            function LockConstraint(t, e, o) {
                var s = void 0 !== (o = o || {}).maxForce ? o.maxForce : 1e6, a = new r(), l = new r(), h = new r();
                t.position.vadd(e.position, h), h.scale(.5, h), e.pointToLocalFrame(h, l), t.pointToLocalFrame(h, a), 
                i.call(this, t, a, e, l, s);
                var c = this.rotationalEquation1 = new n(t, e, o), p = this.rotationalEquation2 = new n(t, e, o), u = this.rotationalEquation3 = new n(t, e, o);
                this.equations.push(c, p, u);
            }
            LockConstraint.prototype = new i(), LockConstraint.constructor = LockConstraint;
            new r(), new r();
            LockConstraint.prototype.update = function() {
                var t = this.bodyA, e = this.bodyB, o = (this.motorEquation, this.rotationalEquation1), n = this.rotationalEquation2, s = this.rotationalEquation3;
                i.prototype.update.call(this), t.vectorToWorldFrame(r.UNIT_X, o.axisA), e.vectorToWorldFrame(r.UNIT_Y, o.axisB), 
                t.vectorToWorldFrame(r.UNIT_Y, n.axisA), e.vectorToWorldFrame(r.UNIT_Z, n.axisB), 
                t.vectorToWorldFrame(r.UNIT_Z, s.axisA), e.vectorToWorldFrame(r.UNIT_X, s.axisB);
            };
        }, {
            "../equations/ContactEquation": 19,
            "../equations/RotationalEquation": 22,
            "../equations/RotationalMotorEquation": 23,
            "../math/Vec3": 30,
            "./Constraint": 13,
            "./PointToPointConstraint": 17
        } ],
        17: [ function(t, e, o) {
            e.exports = PointToPointConstraint;
            var i = t("./Constraint"), n = t("../equations/ContactEquation"), r = t("../math/Vec3");
            function PointToPointConstraint(t, e, o, s, a) {
                i.call(this, t, o), a = void 0 !== a ? a : 1e6, this.pivotA = e ? e.clone() : new r(), 
                this.pivotB = s ? s.clone() : new r();
                var l = this.equationX = new n(t, o), h = this.equationY = new n(t, o), c = this.equationZ = new n(t, o);
                this.equations.push(l, h, c), l.minForce = h.minForce = c.minForce = -a, l.maxForce = h.maxForce = c.maxForce = a, 
                l.ni.set(1, 0, 0), h.ni.set(0, 1, 0), c.ni.set(0, 0, 1);
            }
            PointToPointConstraint.prototype = new i(), PointToPointConstraint.prototype.update = function() {
                var t = this.bodyA, e = this.bodyB, o = this.equationX, i = this.equationY, n = this.equationZ;
                t.quaternion.vmult(this.pivotA, o.ri), e.quaternion.vmult(this.pivotB, o.rj), i.ri.copy(o.ri), 
                i.rj.copy(o.rj), n.ri.copy(o.ri), n.rj.copy(o.rj);
            };
        }, {
            "../equations/ContactEquation": 19,
            "../math/Vec3": 30,
            "./Constraint": 13
        } ],
        18: [ function(t, e, o) {
            e.exports = ConeEquation;
            var i = t("../math/Vec3"), n = (t("../math/Mat3"), t("./Equation"));
            function ConeEquation(t, e, o) {
                var r = void 0 !== (o = o || {}).maxForce ? o.maxForce : 1e6;
                n.call(this, t, e, -r, r), this.axisA = o.axisA ? o.axisA.clone() : new i(1, 0, 0), 
                this.axisB = o.axisB ? o.axisB.clone() : new i(0, 1, 0), this.angle = void 0 !== o.angle ? o.angle : 0;
            }
            ConeEquation.prototype = new n(), ConeEquation.prototype.constructor = ConeEquation;
            var r = new i(), s = new i();
            ConeEquation.prototype.computeB = function(t) {
                var e = this.a, o = this.b, i = this.axisA, n = this.axisB, a = r, l = s, h = this.jacobianElementA, c = this.jacobianElementB;
                return i.cross(n, a), n.cross(i, l), h.rotational.copy(l), c.rotational.copy(a), 
                -(Math.cos(this.angle) - i.dot(n)) * e - this.computeGW() * o - t * this.computeGiMf();
            };
        }, {
            "../math/Mat3": 27,
            "../math/Vec3": 30,
            "./Equation": 20
        } ],
        19: [ function(t, e, o) {
            e.exports = ContactEquation;
            var i = t("./Equation"), n = t("../math/Vec3");
            t("../math/Mat3");
            function ContactEquation(t, e, o) {
                o = void 0 !== o ? o : 1e6, i.call(this, t, e, 0, o), this.restitution = 0, this.ri = new n(), 
                this.rj = new n(), this.ni = new n();
            }
            ContactEquation.prototype = new i(), ContactEquation.prototype.constructor = ContactEquation;
            var r = new n(), s = new n(), a = new n();
            ContactEquation.prototype.computeB = function(t) {
                var e = this.a, o = this.b, i = this.bi, n = this.bj, l = this.ri, h = this.rj, c = r, p = s, u = i.velocity, d = i.angularVelocity, v = (i.force, 
                i.torque, n.velocity), y = n.angularVelocity, f = (n.force, n.torque, a), m = this.jacobianElementA, w = this.jacobianElementB, x = this.ni;
                l.cross(x, c), h.cross(x, p), x.negate(m.spatial), c.negate(m.rotational), w.spatial.copy(x), 
                w.rotational.copy(p), f.copy(n.position), f.vadd(h, f), f.vsub(i.position, f), f.vsub(l, f);
                var g = x.dot(f), b = this.restitution + 1;
                return -g * e - (b * v.dot(x) - b * u.dot(x) + y.dot(p) - d.dot(c)) * o - t * this.computeGiMf();
            };
            var l = new n(), h = new n(), c = new n(), p = new n(), u = new n();
            ContactEquation.prototype.getImpactVelocityAlongNormal = function() {
                var t = l, e = h, o = c, i = p, n = u;
                return this.bi.position.vadd(this.ri, o), this.bj.position.vadd(this.rj, i), this.bi.getVelocityAtWorldPoint(o, t), 
                this.bj.getVelocityAtWorldPoint(i, e), t.vsub(e, n), this.ni.dot(n);
            };
        }, {
            "../math/Mat3": 27,
            "../math/Vec3": 30,
            "./Equation": 20
        } ],
        20: [ function(t, e, o) {
            e.exports = Equation;
            var i = t("../math/JacobianElement"), n = t("../math/Vec3");
            function Equation(t, e, o, n) {
                this.id = Equation.id++, this.minForce = void 0 === o ? -1e6 : o, this.maxForce = void 0 === n ? 1e6 : n, 
                this.bi = t, this.bj = e, this.a = 0, this.b = 0, this.eps = 0, this.jacobianElementA = new i(), 
                this.jacobianElementB = new i(), this.enabled = !0, this.setSpookParams(1e7, 4, 1 / 60);
            }
            Equation.prototype.constructor = Equation, Equation.id = 0, Equation.prototype.setSpookParams = function(t, e, o) {
                var i = e, n = t, r = o;
                this.a = 4 / (r * (1 + 4 * i)), this.b = 4 * i / (1 + 4 * i), this.eps = 4 / (r * r * n * (1 + 4 * i));
            }, Equation.prototype.computeB = function(t, e, o) {
                var i = this.computeGW();
                return -this.computeGq() * t - i * e - this.computeGiMf() * o;
            }, Equation.prototype.computeGq = function() {
                var t = this.jacobianElementA, e = this.jacobianElementB, o = this.bi, i = this.bj, n = o.position, r = i.position;
                return t.spatial.dot(n) + e.spatial.dot(r);
            };
            var r = new n();
            Equation.prototype.computeGW = function() {
                var t = this.jacobianElementA, e = this.jacobianElementB, o = this.bi, i = this.bj, n = o.velocity, s = i.velocity, a = o.angularVelocity || r, l = i.angularVelocity || r;
                return t.multiplyVectors(n, a) + e.multiplyVectors(s, l);
            }, Equation.prototype.computeGWlambda = function() {
                var t = this.jacobianElementA, e = this.jacobianElementB, o = this.bi, i = this.bj, n = o.vlambda, s = i.vlambda, a = o.wlambda || r, l = i.wlambda || r;
                return t.multiplyVectors(n, a) + e.multiplyVectors(s, l);
            };
            var s = new n(), a = new n(), l = new n(), h = new n();
            Equation.prototype.computeGiMf = function() {
                var t = this.jacobianElementA, e = this.jacobianElementB, o = this.bi, i = this.bj, n = o.force, r = o.torque, c = i.force, p = i.torque, u = o.invMassSolve, d = i.invMassSolve;
                return o.invInertiaWorldSolve ? o.invInertiaWorldSolve.vmult(r, l) : l.set(0, 0, 0), 
                i.invInertiaWorldSolve ? i.invInertiaWorldSolve.vmult(p, h) : h.set(0, 0, 0), n.mult(u, s), 
                c.mult(d, a), t.multiplyVectors(s, l) + e.multiplyVectors(a, h);
            };
            var c = new n();
            Equation.prototype.computeGiMGt = function() {
                var t = this.jacobianElementA, e = this.jacobianElementB, o = this.bi, i = this.bj, n = o.invMassSolve, r = i.invMassSolve, s = o.invInertiaWorldSolve, a = i.invInertiaWorldSolve, l = n + r;
                return s && (s.vmult(t.rotational, c), l += c.dot(t.rotational)), a && (a.vmult(e.rotational, c), 
                l += c.dot(e.rotational)), l;
            };
            var p = new n();
            new n(), new n(), new n(), new n(), new n();
            Equation.prototype.addToWlambda = function(t) {
                var e = this.jacobianElementA, o = this.jacobianElementB, i = this.bi, n = this.bj, r = p;
                e.spatial.mult(i.invMassSolve * t, r), i.vlambda.vadd(r, i.vlambda), o.spatial.mult(n.invMassSolve * t, r), 
                n.vlambda.vadd(r, n.vlambda), i.invInertiaWorldSolve && (i.invInertiaWorldSolve.vmult(e.rotational, r), 
                r.mult(t, r), i.wlambda.vadd(r, i.wlambda)), n.invInertiaWorldSolve && (n.invInertiaWorldSolve.vmult(o.rotational, r), 
                r.mult(t, r), n.wlambda.vadd(r, n.wlambda));
            }, Equation.prototype.computeC = function() {
                return this.computeGiMGt() + this.eps;
            };
        }, {
            "../math/JacobianElement": 26,
            "../math/Vec3": 30
        } ],
        21: [ function(t, e, o) {
            e.exports = FrictionEquation;
            var i = t("./Equation"), n = t("../math/Vec3");
            t("../math/Mat3");
            function FrictionEquation(t, e, o) {
                i.call(this, t, e, -o, o), this.ri = new n(), this.rj = new n(), this.t = new n();
            }
            FrictionEquation.prototype = new i(), FrictionEquation.prototype.constructor = FrictionEquation;
            var r = new n(), s = new n();
            FrictionEquation.prototype.computeB = function(t) {
                this.a;
                var e = this.b, o = (this.bi, this.bj, this.ri), i = this.rj, n = r, a = s, l = this.t;
                o.cross(l, n), i.cross(l, a);
                var h = this.jacobianElementA, c = this.jacobianElementB;
                return l.negate(h.spatial), n.negate(h.rotational), c.spatial.copy(l), c.rotational.copy(a), 
                -this.computeGW() * e - t * this.computeGiMf();
            };
        }, {
            "../math/Mat3": 27,
            "../math/Vec3": 30,
            "./Equation": 20
        } ],
        22: [ function(t, e, o) {
            e.exports = RotationalEquation;
            var i = t("../math/Vec3"), n = (t("../math/Mat3"), t("./Equation"));
            function RotationalEquation(t, e, o) {
                var r = void 0 !== (o = o || {}).maxForce ? o.maxForce : 1e6;
                n.call(this, t, e, -r, r), this.axisA = o.axisA ? o.axisA.clone() : new i(1, 0, 0), 
                this.axisB = o.axisB ? o.axisB.clone() : new i(0, 1, 0), this.maxAngle = Math.PI / 2;
            }
            RotationalEquation.prototype = new n(), RotationalEquation.prototype.constructor = RotationalEquation;
            var r = new i(), s = new i();
            RotationalEquation.prototype.computeB = function(t) {
                var e = this.a, o = this.b, i = this.axisA, n = this.axisB, a = r, l = s, h = this.jacobianElementA, c = this.jacobianElementB;
                return i.cross(n, a), n.cross(i, l), h.rotational.copy(l), c.rotational.copy(a), 
                -(Math.cos(this.maxAngle) - i.dot(n)) * e - this.computeGW() * o - t * this.computeGiMf();
            };
        }, {
            "../math/Mat3": 27,
            "../math/Vec3": 30,
            "./Equation": 20
        } ],
        23: [ function(t, e, o) {
            e.exports = RotationalMotorEquation;
            var i = t("../math/Vec3"), n = (t("../math/Mat3"), t("./Equation"));
            function RotationalMotorEquation(t, e, o) {
                o = void 0 !== o ? o : 1e6, n.call(this, t, e, -o, o), this.axisA = new i(), this.axisB = new i(), 
                this.targetVelocity = 0;
            }
            RotationalMotorEquation.prototype = new n(), RotationalMotorEquation.prototype.constructor = RotationalMotorEquation, 
            RotationalMotorEquation.prototype.computeB = function(t) {
                this.a;
                var e = this.b, o = (this.bi, this.bj, this.axisA), i = this.axisB, n = this.jacobianElementA, r = this.jacobianElementB;
                return n.rotational.copy(o), i.negate(r.rotational), -(this.computeGW() - this.targetVelocity) * e - t * this.computeGiMf();
            };
        }, {
            "../math/Mat3": 27,
            "../math/Vec3": 30,
            "./Equation": 20
        } ],
        24: [ function(t, e, o) {
            var i = t("../utils/Utils");
            function ContactMaterial(t, e, o) {
                o = i.defaults(o, {
                    friction: .3,
                    restitution: .3,
                    contactEquationStiffness: 1e7,
                    contactEquationRelaxation: 3,
                    frictionEquationStiffness: 1e7,
                    frictionEquationRelaxation: 3
                }), this.id = ContactMaterial.idCounter++, this.materials = [ t, e ], this.friction = o.friction, 
                this.restitution = o.restitution, this.contactEquationStiffness = o.contactEquationStiffness, 
                this.contactEquationRelaxation = o.contactEquationRelaxation, this.frictionEquationStiffness = o.frictionEquationStiffness, 
                this.frictionEquationRelaxation = o.frictionEquationRelaxation;
            }
            e.exports = ContactMaterial, ContactMaterial.idCounter = 0;
        }, {
            "../utils/Utils": 53
        } ],
        25: [ function(t, e, o) {
            function Material(t) {
                var e = "";
                "string" == typeof (t = t || {}) ? (e = t, t = {}) : "object" == typeof t && (e = ""), 
                this.name = e, this.id = Material.idCounter++, this.friction = void 0 !== t.friction ? t.friction : -1, 
                this.restitution = void 0 !== t.restitution ? t.restitution : -1;
            }
            e.exports = Material, Material.idCounter = 0;
        }, {} ],
        26: [ function(t, e, o) {
            e.exports = JacobianElement;
            var i = t("./Vec3");
            function JacobianElement() {
                this.spatial = new i(), this.rotational = new i();
            }
            JacobianElement.prototype.multiplyElement = function(t) {
                return t.spatial.dot(this.spatial) + t.rotational.dot(this.rotational);
            }, JacobianElement.prototype.multiplyVectors = function(t, e) {
                return t.dot(this.spatial) + e.dot(this.rotational);
            };
        }, {
            "./Vec3": 30
        } ],
        27: [ function(t, e, o) {
            e.exports = Mat3;
            var i = t("./Vec3");
            function Mat3(t) {
                this.elements = t || [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
            }
            Mat3.prototype.identity = function() {
                var t = this.elements;
                t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, 
                t[8] = 1;
            }, Mat3.prototype.setZero = function() {
                var t = this.elements;
                t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 0, t[6] = 0, t[7] = 0, 
                t[8] = 0;
            }, Mat3.prototype.setTrace = function(t) {
                var e = this.elements;
                e[0] = t.x, e[4] = t.y, e[8] = t.z;
            }, Mat3.prototype.getTrace = function(t) {
                t = t || new i();
                var e = this.elements;
                t.x = e[0], t.y = e[4], t.z = e[8];
            }, Mat3.prototype.vmult = function(t, e) {
                e = e || new i();
                var o = this.elements, n = t.x, r = t.y, s = t.z;
                return e.x = o[0] * n + o[1] * r + o[2] * s, e.y = o[3] * n + o[4] * r + o[5] * s, 
                e.z = o[6] * n + o[7] * r + o[8] * s, e;
            }, Mat3.prototype.smult = function(t) {
                for (var e = 0; e < this.elements.length; e++) this.elements[e] *= t;
            }, Mat3.prototype.mmult = function(t, e) {
                for (var o = e || new Mat3(), i = 0; i < 3; i++) for (var n = 0; n < 3; n++) {
                    for (var r = 0, s = 0; s < 3; s++) r += t.elements[i + 3 * s] * this.elements[s + 3 * n];
                    o.elements[i + 3 * n] = r;
                }
                return o;
            }, Mat3.prototype.scale = function(t, e) {
                e = e || new Mat3();
                for (var o = this.elements, i = e.elements, n = 0; 3 !== n; n++) i[3 * n + 0] = t.x * o[3 * n + 0], 
                i[3 * n + 1] = t.y * o[3 * n + 1], i[3 * n + 2] = t.z * o[3 * n + 2];
                return e;
            }, Mat3.prototype.solve = function(t, e) {
                e = e || new i();
                for (var o, n = [], r = 0; r < 12; r++) n.push(0);
                for (r = 0; r < 3; r++) for (o = 0; o < 3; o++) n[r + 4 * o] = this.elements[r + 3 * o];
                n[3] = t.x, n[7] = t.y, n[11] = t.z;
                var s, a, l = 3, h = l;
                do {
                    if (0 === n[(r = h - l) + 4 * r]) for (o = r + 1; o < h; o++) if (0 !== n[r + 4 * o]) {
                        s = 4;
                        do {
                            n[(a = 4 - s) + 4 * r] += n[a + 4 * o];
                        } while (--s);
                        break;
                    }
                    if (0 !== n[r + 4 * r]) for (o = r + 1; o < h; o++) {
                        var c = n[r + 4 * o] / n[r + 4 * r];
                        s = 4;
                        do {
                            n[(a = 4 - s) + 4 * o] = a <= r ? 0 : n[a + 4 * o] - n[a + 4 * r] * c;
                        } while (--s);
                    }
                } while (--l);
                if (e.z = n[11] / n[10], e.y = (n[7] - n[6] * e.z) / n[5], e.x = (n[3] - n[2] * e.z - n[1] * e.y) / n[0], 
                isNaN(e.x) || isNaN(e.y) || isNaN(e.z) || e.x === 1 / 0 || e.y === 1 / 0 || e.z === 1 / 0) throw "Could not solve equation! Got x=[" + e.toString() + "], b=[" + t.toString() + "], A=[" + this.toString() + "]";
                return e;
            }, Mat3.prototype.e = function(t, e, o) {
                if (void 0 === o) return this.elements[e + 3 * t];
                this.elements[e + 3 * t] = o;
            }, Mat3.prototype.copy = function(t) {
                for (var e = 0; e < t.elements.length; e++) this.elements[e] = t.elements[e];
                return this;
            }, Mat3.prototype.toString = function() {
                for (var t = "", e = 0; e < 9; e++) t += this.elements[e] + ",";
                return t;
            }, Mat3.prototype.reverse = function(t) {
                t = t || new Mat3();
                for (var e, o = [], i = 0; i < 18; i++) o.push(0);
                for (i = 0; i < 3; i++) for (e = 0; e < 3; e++) o[i + 6 * e] = this.elements[i + 3 * e];
                o[3] = 1, o[9] = 0, o[15] = 0, o[4] = 0, o[10] = 1, o[16] = 0, o[5] = 0, o[11] = 0, 
                o[17] = 1;
                var n, r, s = 3, a = s;
                do {
                    if (0 === o[(i = a - s) + 6 * i]) for (e = i + 1; e < a; e++) if (0 !== o[i + 6 * e]) {
                        n = 6;
                        do {
                            o[(r = 6 - n) + 6 * i] += o[r + 6 * e];
                        } while (--n);
                        break;
                    }
                    if (0 !== o[i + 6 * i]) for (e = i + 1; e < a; e++) {
                        var l = o[i + 6 * e] / o[i + 6 * i];
                        n = 6;
                        do {
                            o[(r = 6 - n) + 6 * e] = r <= i ? 0 : o[r + 6 * e] - o[r + 6 * i] * l;
                        } while (--n);
                    }
                } while (--s);
                i = 2;
                do {
                    e = i - 1;
                    do {
                        l = o[i + 6 * e] / o[i + 6 * i];
                        n = 6;
                        do {
                            o[(r = 6 - n) + 6 * e] = o[r + 6 * e] - o[r + 6 * i] * l;
                        } while (--n);
                    } while (e--);
                } while (--i);
                i = 2;
                do {
                    l = 1 / o[i + 6 * i];
                    n = 6;
                    do {
                        o[(r = 6 - n) + 6 * i] = o[r + 6 * i] * l;
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
            }, Mat3.prototype.setRotationFromQuaternion = function(t) {
                var e = t.x, o = t.y, i = t.z, n = t.w, r = e + e, s = o + o, a = i + i, l = e * r, h = e * s, c = e * a, p = o * s, u = o * a, d = i * a, v = n * r, y = n * s, f = n * a, m = this.elements;
                return m[0] = 1 - (p + d), m[1] = h - f, m[2] = c + y, m[3] = h + f, m[4] = 1 - (l + d), 
                m[5] = u - v, m[6] = c - y, m[7] = u + v, m[8] = 1 - (l + p), this;
            }, Mat3.prototype.transpose = function(t) {
                for (var e = (t = t || new Mat3()).elements, o = this.elements, i = 0; 3 !== i; i++) for (var n = 0; 3 !== n; n++) e[3 * i + n] = o[3 * n + i];
                return t;
            };
        }, {
            "./Vec3": 30
        } ],
        28: [ function(t, e, o) {
            e.exports = Quaternion;
            var i = t("./Vec3");
            function Quaternion(t, e, o, i) {
                this.x = void 0 !== t ? t : 0, this.y = void 0 !== e ? e : 0, this.z = void 0 !== o ? o : 0, 
                this.w = void 0 !== i ? i : 1;
            }
            Quaternion.prototype.set = function(t, e, o, i) {
                this.x = t, this.y = e, this.z = o, this.w = i;
            }, Quaternion.prototype.toString = function() {
                return this.x + "," + this.y + "," + this.z + "," + this.w;
            }, Quaternion.prototype.toArray = function() {
                return [ this.x, this.y, this.z, this.w ];
            }, Quaternion.prototype.setFromAxisAngle = function(t, e) {
                var o = Math.sin(.5 * e);
                this.x = t.x * o, this.y = t.y * o, this.z = t.z * o, this.w = Math.cos(.5 * e);
            }, Quaternion.prototype.toAxisAngle = function(t) {
                t = t || new i(), this.normalize();
                var e = 2 * Math.acos(this.w), o = Math.sqrt(1 - this.w * this.w);
                return o < .001 ? (t.x = this.x, t.y = this.y, t.z = this.z) : (t.x = this.x / o, 
                t.y = this.y / o, t.z = this.z / o), [ t, e ];
            };
            var n = new i(), r = new i();
            Quaternion.prototype.setFromVectors = function(t, e) {
                if (t.isAntiparallelTo(e)) {
                    var o = n, i = r;
                    t.tangents(o, i), this.setFromAxisAngle(o, Math.PI);
                } else {
                    var s = t.cross(e);
                    this.x = s.x, this.y = s.y, this.z = s.z, this.w = Math.sqrt(Math.pow(t.norm(), 2) * Math.pow(e.norm(), 2)) + t.dot(e), 
                    this.normalize();
                }
            };
            var s = new i(), a = new i(), l = new i();
            Quaternion.prototype.mult = function(t, e) {
                e = e || new Quaternion();
                var o = this.w, i = s, n = a, r = l;
                return i.set(this.x, this.y, this.z), n.set(t.x, t.y, t.z), e.w = o * t.w - i.dot(n), 
                i.cross(n, r), e.x = o * n.x + t.w * i.x + r.x, e.y = o * n.y + t.w * i.y + r.y, 
                e.z = o * n.z + t.w * i.z + r.z, e;
            }, Quaternion.prototype.inverse = function(t) {
                var e = this.x, o = this.y, i = this.z, n = this.w;
                t = t || new Quaternion(), this.conjugate(t);
                var r = 1 / (e * e + o * o + i * i + n * n);
                return t.x *= r, t.y *= r, t.z *= r, t.w *= r, t;
            }, Quaternion.prototype.conjugate = function(t) {
                return (t = t || new Quaternion()).x = -this.x, t.y = -this.y, t.z = -this.z, t.w = this.w, 
                t;
            }, Quaternion.prototype.normalize = function() {
                var t = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
                0 === t ? (this.x = 0, this.y = 0, this.z = 0, this.w = 0) : (t = 1 / t, this.x *= t, 
                this.y *= t, this.z *= t, this.w *= t);
            }, Quaternion.prototype.normalizeFast = function() {
                var t = (3 - (this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)) / 2;
                0 === t ? (this.x = 0, this.y = 0, this.z = 0, this.w = 0) : (this.x *= t, this.y *= t, 
                this.z *= t, this.w *= t);
            }, Quaternion.prototype.vmult = function(t, e) {
                e = e || new i();
                var o = t.x, n = t.y, r = t.z, s = this.x, a = this.y, l = this.z, h = this.w, c = h * o + a * r - l * n, p = h * n + l * o - s * r, u = h * r + s * n - a * o, d = -s * o - a * n - l * r;
                return e.x = c * h + d * -s + p * -l - u * -a, e.y = p * h + d * -a + u * -s - c * -l, 
                e.z = u * h + d * -l + c * -a - p * -s, e;
            }, Quaternion.prototype.copy = function(t) {
                return this.x = t.x, this.y = t.y, this.z = t.z, this.w = t.w, this;
            }, Quaternion.prototype.toEuler = function(t, e) {
                var o, i, n;
                e = e || "YZX";
                var r = this.x, s = this.y, a = this.z, l = this.w;
                switch (e) {
                  case "YZX":
                    var h = r * s + a * l;
                    if (h > .499 && (o = 2 * Math.atan2(r, l), i = Math.PI / 2, n = 0), h < -.499 && (o = -2 * Math.atan2(r, l), 
                    i = -Math.PI / 2, n = 0), isNaN(o)) {
                        var c = r * r, p = s * s, u = a * a;
                        o = Math.atan2(2 * s * l - 2 * r * a, 1 - 2 * p - 2 * u), i = Math.asin(2 * h), 
                        n = Math.atan2(2 * r * l - 2 * s * a, 1 - 2 * c - 2 * u);
                    }
                    break;

                  default:
                    throw new Error("Euler order " + e + " not supported yet.");
                }
                t.y = o, t.z = i, t.x = n;
            }, Quaternion.prototype.setFromEuler = function(t, e, o, i) {
                i = i || "XYZ";
                var n = Math.cos(t / 2), r = Math.cos(e / 2), s = Math.cos(o / 2), a = Math.sin(t / 2), l = Math.sin(e / 2), h = Math.sin(o / 2);
                return "XYZ" === i ? (this.x = a * r * s + n * l * h, this.y = n * l * s - a * r * h, 
                this.z = n * r * h + a * l * s, this.w = n * r * s - a * l * h) : "YXZ" === i ? (this.x = a * r * s + n * l * h, 
                this.y = n * l * s - a * r * h, this.z = n * r * h - a * l * s, this.w = n * r * s + a * l * h) : "ZXY" === i ? (this.x = a * r * s - n * l * h, 
                this.y = n * l * s + a * r * h, this.z = n * r * h + a * l * s, this.w = n * r * s - a * l * h) : "ZYX" === i ? (this.x = a * r * s - n * l * h, 
                this.y = n * l * s + a * r * h, this.z = n * r * h - a * l * s, this.w = n * r * s + a * l * h) : "YZX" === i ? (this.x = a * r * s + n * l * h, 
                this.y = n * l * s + a * r * h, this.z = n * r * h - a * l * s, this.w = n * r * s - a * l * h) : "XZY" === i && (this.x = a * r * s - n * l * h, 
                this.y = n * l * s - a * r * h, this.z = n * r * h + a * l * s, this.w = n * r * s + a * l * h), 
                this;
            }, Quaternion.prototype.clone = function() {
                return new Quaternion(this.x, this.y, this.z, this.w);
            };
        }, {
            "./Vec3": 30
        } ],
        29: [ function(t, e, o) {
            var i = t("./Vec3"), n = t("./Quaternion");
            function Transform(t) {
                t = t || {}, this.position = new i(), t.position && this.position.copy(t.position), 
                this.quaternion = new n(), t.quaternion && this.quaternion.copy(t.quaternion);
            }
            e.exports = Transform;
            var r = new n();
            Transform.pointToLocalFrame = function(t, e, o, n) {
                n = n || new i();
                return o.vsub(t, n), e.conjugate(r), r.vmult(n, n), n;
            }, Transform.prototype.pointToLocal = function(t, e) {
                return Transform.pointToLocalFrame(this.position, this.quaternion, t, e);
            }, Transform.pointToWorldFrame = function(t, e, o, n) {
                n = n || new i();
                return e.vmult(o, n), n.vadd(t, n), n;
            }, Transform.prototype.pointToWorld = function(t, e) {
                return Transform.pointToWorldFrame(this.position, this.quaternion, t, e);
            }, Transform.prototype.vectorToWorldFrame = function(t, e) {
                e = e || new i();
                return this.quaternion.vmult(t, e), e;
            }, Transform.vectorToWorldFrame = function(t, e, o) {
                return t.vmult(e, o), o;
            }, Transform.vectorToLocalFrame = function(t, e, o, n) {
                n = n || new i();
                return e.w *= -1, e.vmult(o, n), e.w *= -1, n;
            };
        }, {
            "./Quaternion": 28,
            "./Vec3": 30
        } ],
        30: [ function(t, e, o) {
            e.exports = Vec3;
            var i = t("./Mat3");
            function Vec3(t, e, o) {
                this.x = t || 0, this.y = e || 0, this.z = o || 0;
            }
            Vec3.ZERO = new Vec3(0, 0, 0), Vec3.UNIT_X = new Vec3(1, 0, 0), Vec3.UNIT_Y = new Vec3(0, 1, 0), 
            Vec3.UNIT_Z = new Vec3(0, 0, 1), Vec3.prototype.cross = function(t, e) {
                var o = t.x, i = t.y, n = t.z, r = this.x, s = this.y, a = this.z;
                return (e = e || new Vec3()).x = s * n - a * i, e.y = a * o - r * n, e.z = r * i - s * o, 
                e;
            }, Vec3.prototype.set = function(t, e, o) {
                return this.x = t, this.y = e, this.z = o, this;
            }, Vec3.prototype.setZero = function() {
                this.x = this.y = this.z = 0;
            }, Vec3.prototype.vadd = function(t, e) {
                if (!e) return new Vec3(this.x + t.x, this.y + t.y, this.z + t.z);
                e.x = t.x + this.x, e.y = t.y + this.y, e.z = t.z + this.z;
            }, Vec3.prototype.vsub = function(t, e) {
                if (!e) return new Vec3(this.x - t.x, this.y - t.y, this.z - t.z);
                e.x = this.x - t.x, e.y = this.y - t.y, e.z = this.z - t.z;
            }, Vec3.prototype.crossmat = function() {
                return new i([ 0, -this.z, this.y, this.z, 0, -this.x, -this.y, this.x, 0 ]);
            }, Vec3.prototype.normalize = function() {
                var t = this.x, e = this.y, o = this.z, i = Math.sqrt(t * t + e * e + o * o);
                if (i > 0) {
                    var n = 1 / i;
                    this.x *= n, this.y *= n, this.z *= n;
                } else this.x = 0, this.y = 0, this.z = 0;
                return i;
            }, Vec3.prototype.unit = function(t) {
                t = t || new Vec3();
                var e = this.x, o = this.y, i = this.z, n = Math.sqrt(e * e + o * o + i * i);
                return n > 0 ? (n = 1 / n, t.x = e * n, t.y = o * n, t.z = i * n) : (t.x = 1, t.y = 0, 
                t.z = 0), t;
            }, Vec3.prototype.norm = function() {
                var t = this.x, e = this.y, o = this.z;
                return Math.sqrt(t * t + e * e + o * o);
            }, Vec3.prototype.length = Vec3.prototype.norm, Vec3.prototype.norm2 = function() {
                return this.dot(this);
            }, Vec3.prototype.lengthSquared = Vec3.prototype.norm2, Vec3.prototype.distanceTo = function(t) {
                var e = this.x, o = this.y, i = this.z, n = t.x, r = t.y, s = t.z;
                return Math.sqrt((n - e) * (n - e) + (r - o) * (r - o) + (s - i) * (s - i));
            }, Vec3.prototype.distanceSquared = function(t) {
                var e = this.x, o = this.y, i = this.z, n = t.x, r = t.y, s = t.z;
                return (n - e) * (n - e) + (r - o) * (r - o) + (s - i) * (s - i);
            }, Vec3.prototype.mult = function(t, e) {
                e = e || new Vec3();
                var o = this.x, i = this.y, n = this.z;
                return e.x = t * o, e.y = t * i, e.z = t * n, e;
            }, Vec3.prototype.scale = Vec3.prototype.mult, Vec3.prototype.dot = function(t) {
                return this.x * t.x + this.y * t.y + this.z * t.z;
            }, Vec3.prototype.isZero = function() {
                return 0 === this.x && 0 === this.y && 0 === this.z;
            }, Vec3.prototype.negate = function(t) {
                return (t = t || new Vec3()).x = -this.x, t.y = -this.y, t.z = -this.z, t;
            };
            var n = new Vec3(), r = new Vec3();
            Vec3.prototype.tangents = function(t, e) {
                var o = this.norm();
                if (o > 0) {
                    var i = n, s = 1 / o;
                    i.set(this.x * s, this.y * s, this.z * s);
                    var a = r;
                    Math.abs(i.x) < .9 ? (a.set(1, 0, 0), i.cross(a, t)) : (a.set(0, 1, 0), i.cross(a, t)), 
                    i.cross(t, e);
                } else t.set(1, 0, 0), e.set(0, 1, 0);
            }, Vec3.prototype.toString = function() {
                return this.x + "," + this.y + "," + this.z;
            }, Vec3.prototype.toArray = function() {
                return [ this.x, this.y, this.z ];
            }, Vec3.prototype.copy = function(t) {
                return this.x = t.x, this.y = t.y, this.z = t.z, this;
            }, Vec3.prototype.lerp = function(t, e, o) {
                var i = this.x, n = this.y, r = this.z;
                o.x = i + (t.x - i) * e, o.y = n + (t.y - n) * e, o.z = r + (t.z - r) * e;
            }, Vec3.prototype.almostEquals = function(t, e) {
                return void 0 === e && (e = 1e-6), !(Math.abs(this.x - t.x) > e || Math.abs(this.y - t.y) > e || Math.abs(this.z - t.z) > e);
            }, Vec3.prototype.almostZero = function(t) {
                return void 0 === t && (t = 1e-6), !(Math.abs(this.x) > t || Math.abs(this.y) > t || Math.abs(this.z) > t);
            };
            var s = new Vec3();
            Vec3.prototype.isAntiparallelTo = function(t, e) {
                return this.negate(s), s.almostEquals(t, e);
            }, Vec3.prototype.clone = function() {
                return new Vec3(this.x, this.y, this.z);
            };
        }, {
            "./Mat3": 27
        } ],
        31: [ function(t, e, o) {
            e.exports = Body;
            var i = t("../utils/EventTarget"), n = (t("../shapes/Shape"), t("../math/Vec3")), r = t("../math/Mat3"), s = t("../math/Quaternion"), a = (t("../material/Material"), 
            t("../collision/AABB")), l = t("../shapes/Box");
            function Body(t) {
                t = t || {}, i.apply(this), this.id = Body.idCounter++, this.layaID, this.isTrigger = !1, 
                this.world = null, this.preStep = null, this.postStep = null, this.vlambda = new n(), 
                this.collisionFilterGroup = "number" == typeof t.collisionFilterGroup ? t.collisionFilterGroup : 1, 
                this.collisionFilterMask = "number" == typeof t.collisionFilterMask ? t.collisionFilterMask : 1, 
                this.collisionResponse = !0, this.position = new n(), t.position && this.position.copy(t.position), 
                this.previousPosition = new n(), this.initPosition = new n(), this.velocity = new n(), 
                t.velocity && this.velocity.copy(t.velocity), this.initVelocity = new n(), this.force = new n();
                var e = "number" == typeof t.mass ? t.mass : 0;
                this.mass = e, this.invMass = e > 0 ? 1 / e : 0, this.material = t.material || null, 
                this.linearDamping = "number" == typeof t.linearDamping ? t.linearDamping : .01, 
                this.type = e <= 0 ? Body.STATIC : Body.DYNAMIC, typeof t.type == typeof Body.STATIC && (this.type = t.type), 
                this.allowSleep = void 0 === t.allowSleep || t.allowSleep, this.sleepState = 0, 
                this.sleepSpeedLimit = void 0 !== t.sleepSpeedLimit ? t.sleepSpeedLimit : .1, this.sleepTimeLimit = void 0 !== t.sleepTimeLimit ? t.sleepTimeLimit : 1, 
                this.timeLastSleepy = 0, this._wakeUpAfterNarrowphase = !1, this.torque = new n(), 
                this.quaternion = new s(), t.quaternion && this.quaternion.copy(t.quaternion), this.initQuaternion = new s(), 
                this.angularVelocity = new n(), t.angularVelocity && this.angularVelocity.copy(t.angularVelocity), 
                this.initAngularVelocity = new n(), this.interpolatedPosition = new n(), this.interpolatedQuaternion = new s(), 
                this.shapes = [], this.shapeOffsets = [], this.shapeOrientations = [], this.inertia = new n(), 
                this.invInertia = new n(), this.invInertiaWorld = new r(), this.invMassSolve = 0, 
                this.invInertiaSolve = new n(), this.invInertiaWorldSolve = new r(), this.fixedRotation = void 0 !== t.fixedRotation && t.fixedRotation, 
                this.angularDamping = void 0 !== t.angularDamping ? t.angularDamping : .01, this.aabb = new a(), 
                this.aabbNeedsUpdate = !0, this.wlambda = new n(), t.shape && this.addShape(t.shape), 
                this.updateMassProperties();
            }
            Body.prototype = new i(), Body.prototype.constructor = Body, Body.DYNAMIC = 1, Body.STATIC = 2, 
            Body.KINEMATIC = 4, Body.AWAKE = 0, Body.SLEEPY = 1, Body.SLEEPING = 2, Body.idCounter = 0, 
            Body.prototype.wakeUp = function() {
                var t = this.sleepState;
                this.sleepState = 0, t === Body.SLEEPING && this.dispatchEvent({
                    type: "wakeup"
                });
            }, Body.prototype.sleep = function() {
                this.sleepState = Body.SLEEPING, this.velocity.set(0, 0, 0), this.angularVelocity.set(0, 0, 0);
            }, Body.sleepyEvent = {
                type: "sleepy"
            }, Body.sleepEvent = {
                type: "sleep"
            }, Body.prototype.sleepTick = function(t) {
                if (this.allowSleep) {
                    var e = this.sleepState, o = this.velocity.norm2() + this.angularVelocity.norm2(), i = Math.pow(this.sleepSpeedLimit, 2);
                    e === Body.AWAKE && o < i ? (this.sleepState = Body.SLEEPY, this.timeLastSleepy = t, 
                    this.dispatchEvent(Body.sleepyEvent)) : e === Body.SLEEPY && o > i ? this.wakeUp() : e === Body.SLEEPY && t - this.timeLastSleepy > this.sleepTimeLimit && (this.sleep(), 
                    this.dispatchEvent(Body.sleepEvent));
                }
            }, Body.prototype.updateSolveMassProperties = function() {
                this.sleepState === Body.SLEEPING || this.type === Body.KINEMATIC ? (this.invMassSolve = 0, 
                this.invInertiaSolve.setZero(), this.invInertiaWorldSolve.setZero()) : (this.invMassSolve = this.invMass, 
                this.invInertiaSolve.copy(this.invInertia), this.invInertiaWorldSolve.copy(this.invInertiaWorld));
            }, Body.prototype.pointToLocalFrame = function(t, e) {
                e = e || new n();
                return t.vsub(this.position, e), this.quaternion.conjugate().vmult(e, e), e;
            }, Body.prototype.vectorToLocalFrame = function(t, e) {
                e = e || new n();
                return this.quaternion.conjugate().vmult(t, e), e;
            }, Body.prototype.pointToWorldFrame = function(t, e) {
                e = e || new n();
                return this.quaternion.vmult(t, e), e.vadd(this.position, e), e;
            }, Body.prototype.vectorToWorldFrame = function(t, e) {
                e = e || new n();
                return this.quaternion.vmult(t, e), e;
            };
            var h = new n(), c = new s();
            Body.prototype.addShape = function(t, e, o) {
                var i = new n(), r = new s();
                return e && i.copy(e), o && r.copy(o), this.shapes.push(t), this.shapeOffsets.push(i), 
                this.shapeOrientations.push(r), this.updateMassProperties(), this.updateBoundingRadius(), 
                this.aabbNeedsUpdate = !0, this;
            }, Body.prototype.updateBoundingRadius = function() {
                for (var t = this.shapes, e = this.shapeOffsets, o = t.length, i = 0, n = 0; n !== o; n++) {
                    var r = t[n];
                    r.updateBoundingSphereRadius();
                    var s = e[n].norm(), a = r.boundingSphereRadius;
                    s + a > i && (i = s + a);
                }
                this.boundingRadius = i;
            };
            var p = new a();
            Body.prototype.computeAABB = function() {
                for (var t = this.shapes, e = this.shapeOffsets, o = this.shapeOrientations, i = t.length, n = h, r = c, s = this.quaternion, a = this.aabb, l = p, u = 0; u !== i; u++) {
                    var d = t[u];
                    o[u].mult(s, r), r.vmult(e[u], n), n.vadd(this.position, n), d.calculateWorldAABB(n, r, l.lowerBound, l.upperBound), 
                    0 === u ? a.copy(l) : a.extend(l);
                }
                this.aabbNeedsUpdate = !1;
            };
            var u = new r(), d = new r();
            new r();
            Body.prototype.updateInertiaWorld = function(t) {
                var e = this.invInertia;
                if (e.x !== e.y || e.y !== e.z || t) {
                    var o = u, i = d;
                    o.setRotationFromQuaternion(this.quaternion), o.transpose(i), o.scale(e, o), o.mmult(i, this.invInertiaWorld);
                } else ;
            };
            var v = new n(), y = new n();
            Body.prototype.applyForce = function(t, e) {
                if (this.type === Body.DYNAMIC) {
                    var o = v;
                    e.vsub(this.position, o);
                    var i = y;
                    o.cross(t, i), this.force.vadd(t, this.force), this.torque.vadd(i, this.torque);
                }
            };
            var f = new n(), m = new n();
            Body.prototype.applyLocalForce = function(t, e) {
                if (this.type === Body.DYNAMIC) {
                    var o = f, i = m;
                    this.vectorToWorldFrame(t, o), this.pointToWorldFrame(e, i), this.applyForce(o, i);
                }
            };
            var w = new n(), x = new n(), g = new n();
            Body.prototype.applyImpulse = function(t, e) {
                if (this.type === Body.DYNAMIC) {
                    var o = w;
                    e.vsub(this.position, o);
                    var i = x;
                    i.copy(t), i.mult(this.invMass, i), this.velocity.vadd(i, this.velocity);
                    var n = g;
                    o.cross(t, n), this.invInertiaWorld.vmult(n, n), this.angularVelocity.vadd(n, this.angularVelocity);
                }
            };
            var b = new n(), B = new n();
            Body.prototype.applyLocalImpulse = function(t, e) {
                if (this.type === Body.DYNAMIC) {
                    var o = b, i = B;
                    this.vectorToWorldFrame(t, o), this.pointToWorldFrame(e, i), this.applyImpulse(o, i);
                }
            };
            var S = new n();
            Body.prototype.updateMassProperties = function() {
                var t = S;
                this.invMass = this.mass > 0 ? 1 / this.mass : 0;
                var e = this.inertia, o = this.fixedRotation;
                this.computeAABB(), t.set((this.aabb.upperBound.x - this.aabb.lowerBound.x) / 2, (this.aabb.upperBound.y - this.aabb.lowerBound.y) / 2, (this.aabb.upperBound.z - this.aabb.lowerBound.z) / 2), 
                l.calculateInertia(t, this.mass, e), this.invInertia.set(e.x > 0 && !o ? 1 / e.x : 0, e.y > 0 && !o ? 1 / e.y : 0, e.z > 0 && !o ? 1 / e.z : 0), 
                this.updateInertiaWorld(!0);
            }, Body.prototype.getVelocityAtWorldPoint = function(t, e) {
                var o = new n();
                return t.vsub(this.position, o), this.angularVelocity.cross(o, e), this.velocity.vadd(e, e), 
                e;
            };
        }, {
            "../collision/AABB": 3,
            "../material/Material": 25,
            "../math/Mat3": 27,
            "../math/Quaternion": 28,
            "../math/Vec3": 30,
            "../shapes/Box": 37,
            "../shapes/Shape": 43,
            "../utils/EventTarget": 49
        } ],
        32: [ function(t, e, o) {
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
            var a = new i(), l = new i(), h = new i();
            new r();
            RaycastVehicle.prototype.addWheel = function(t) {
                var e = new s(t = t || {}), o = this.wheelInfos.length;
                return this.wheelInfos.push(e), o;
            }, RaycastVehicle.prototype.setSteeringValue = function(t, e) {
                this.wheelInfos[e].steering = t;
            };
            new i();
            RaycastVehicle.prototype.applyEngineForce = function(t, e) {
                this.wheelInfos[e].engineForce = t;
            }, RaycastVehicle.prototype.setBrake = function(t, e) {
                this.wheelInfos[e].brake = t;
            }, RaycastVehicle.prototype.addToWorld = function(t) {
                this.constraints;
                t.add(this.chassisBody);
                var e = this;
                this.preStepCallback = function() {
                    e.updateVehicle(t.dt);
                }, t.addEventListener("preStep", this.preStepCallback), this.world = t;
            }, RaycastVehicle.prototype.getVehicleAxisWorld = function(t, e) {
                e.set(0 === t ? 1 : 0, 1 === t ? 1 : 0, 2 === t ? 1 : 0), this.chassisBody.vectorToWorldFrame(e, e);
            }, RaycastVehicle.prototype.updateVehicle = function(t) {
                for (var e = this.wheelInfos, o = e.length, n = this.chassisBody, r = 0; r < o; r++) this.updateWheelTransform(r);
                this.currentVehicleSpeedKmHour = 3.6 * n.velocity.norm();
                var s = new i();
                this.getVehicleAxisWorld(this.indexForwardAxis, s), s.dot(n.velocity) < 0 && (this.currentVehicleSpeedKmHour *= -1);
                for (r = 0; r < o; r++) this.castRay(e[r]);
                this.updateSuspension(t);
                var a = new i(), l = new i();
                for (r = 0; r < o; r++) {
                    var h = (d = e[r]).suspensionForce;
                    h > d.maxSuspensionForce && (h = d.maxSuspensionForce), d.raycastResult.hitNormalWorld.scale(h * t, a), 
                    d.raycastResult.hitPointWorld.vsub(n.position, l), n.applyImpulse(a, d.raycastResult.hitPointWorld);
                }
                this.updateFriction(t);
                var c = new i(), p = new i(), u = new i();
                for (r = 0; r < o; r++) {
                    var d = e[r];
                    n.getVelocityAtWorldPoint(d.chassisConnectionPointWorld, u);
                    var v = 1;
                    switch (this.indexUpAxis) {
                      case 1:
                        v = -1;
                    }
                    if (d.isInContact) {
                        this.getVehicleAxisWorld(this.indexForwardAxis, p);
                        var y = p.dot(d.raycastResult.hitNormalWorld);
                        d.raycastResult.hitNormalWorld.scale(y, c), p.vsub(c, p);
                        var f = p.dot(u);
                        d.deltaRotation = v * f * t / d.radius;
                    }
                    !d.sliding && d.isInContact || 0 === d.engineForce || !d.useCustomSlidingRotationalSpeed || (d.deltaRotation = (d.engineForce > 0 ? 1 : -1) * d.customSlidingRotationalSpeed * t), 
                    Math.abs(d.brake) > Math.abs(d.engineForce) && (d.deltaRotation = 0), d.rotation += d.deltaRotation, 
                    d.deltaRotation *= .99;
                }
            }, RaycastVehicle.prototype.updateSuspension = function(t) {
                for (var e = this.chassisBody.mass, o = this.wheelInfos, i = o.length, n = 0; n < i; n++) {
                    var r = o[n];
                    if (r.isInContact) {
                        var s, a = r.suspensionRestLength - r.suspensionLength;
                        s = r.suspensionStiffness * a * r.clippedInvContactDotSuspension;
                        var l = r.suspensionRelativeVelocity;
                        s -= (l < 0 ? r.dampingCompression : r.dampingRelaxation) * l, r.suspensionForce = s * e, 
                        r.suspensionForce < 0 && (r.suspensionForce = 0);
                    } else r.suspensionForce = 0;
                }
            }, RaycastVehicle.prototype.removeFromWorld = function(t) {
                this.constraints;
                t.remove(this.chassisBody), t.removeEventListener("preStep", this.preStepCallback), 
                this.world = null;
            };
            var c = new i(), p = new i();
            RaycastVehicle.prototype.castRay = function(t) {
                var e = c, o = p;
                this.updateWheelTransformWorld(t);
                var n = this.chassisBody, r = -1, s = t.suspensionRestLength + t.radius;
                t.directionWorld.scale(s, e);
                var a = t.chassisConnectionPointWorld;
                a.vadd(e, o);
                var l = t.raycastResult;
                l.reset();
                var h = n.collisionResponse;
                n.collisionResponse = !1, this.world.rayTest(a, o, l), n.collisionResponse = h;
                var u = l.body;
                if (t.raycastResult.groundObject = 0, u) {
                    r = l.distance, t.raycastResult.hitNormalWorld = l.hitNormalWorld, t.isInContact = !0;
                    var d = l.distance;
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
            }, RaycastVehicle.prototype.updateWheelTransformWorld = function(t) {
                t.isInContact = !1;
                var e = this.chassisBody;
                e.pointToWorldFrame(t.chassisConnectionPointLocal, t.chassisConnectionPointWorld), 
                e.vectorToWorldFrame(t.directionLocal, t.directionWorld), e.vectorToWorldFrame(t.axleLocal, t.axleWorld);
            }, RaycastVehicle.prototype.updateWheelTransform = function(t) {
                var e = a, o = l, i = h, r = this.wheelInfos[t];
                this.updateWheelTransformWorld(r), r.directionLocal.scale(-1, e), o.copy(r.axleLocal), 
                e.cross(o, i), i.normalize(), o.normalize();
                var s = r.steering, c = new n();
                c.setFromAxisAngle(e, s);
                var p = new n();
                p.setFromAxisAngle(o, r.rotation);
                var u = r.worldTransform.quaternion;
                this.chassisBody.quaternion.mult(c, u), u.mult(p, u), u.normalize();
                var d = r.worldTransform.position;
                d.copy(r.directionWorld), d.scale(r.suspensionLength, d), d.vadd(r.chassisConnectionPointWorld, d);
            };
            var u = [ new i(1, 0, 0), new i(0, 1, 0), new i(0, 0, 1) ];
            RaycastVehicle.prototype.getWheelTransformWorld = function(t) {
                return this.wheelInfos[t].worldTransform;
            };
            var d = new i(), v = [], y = [];
            RaycastVehicle.prototype.updateFriction = function(t) {
                for (var e = d, o = this.wheelInfos, n = o.length, r = this.chassisBody, s = y, a = v, l = 0; l < n; l++) {
                    (f = (C = o[l]).raycastResult.body) && 0, C.sideImpulse = 0, C.forwardImpulse = 0, 
                    s[l] || (s[l] = new i()), a[l] || (a[l] = new i());
                }
                for (l = 0; l < n; l++) {
                    if (f = (C = o[l]).raycastResult.body) {
                        var h = a[l];
                        this.getWheelTransformWorld(l).vectorToWorldFrame(u[this.indexRightAxis], h);
                        var c = C.raycastResult.hitNormalWorld, p = h.dot(c);
                        c.scale(p, e), h.vsub(e, h), h.normalize(), c.cross(h, s[l]), s[l].normalize(), 
                        C.sideImpulse = resolveSingleBilateral(r, C.raycastResult.hitPointWorld, f, C.raycastResult.hitPointWorld, h), 
                        C.sideImpulse *= 1;
                    }
                }
                this.sliding = !1;
                for (l = 0; l < n; l++) {
                    var f = (C = o[l]).raycastResult.body, m = 0;
                    if (C.slipInfo = 1, f) {
                        var w = C.brake ? C.brake : 0;
                        m = calcRollingFriction(r, f, C.raycastResult.hitPointWorld, s[l], w);
                        var x = w / (m += C.engineForce * t);
                        C.slipInfo *= x;
                    }
                    if (C.forwardImpulse = 0, C.skidInfo = 1, f) {
                        C.skidInfo = 1;
                        var g = C.suspensionForce * t * C.frictionSlip, b = g * g;
                        C.forwardImpulse = m;
                        var B = .5 * C.forwardImpulse, S = 1 * C.sideImpulse, E = B * B + S * S;
                        if (C.sliding = !1, E > b) {
                            this.sliding = !0, C.sliding = !0;
                            x = g / Math.sqrt(E);
                            C.skidInfo *= x;
                        }
                    }
                }
                if (this.sliding) for (l = 0; l < n; l++) {
                    0 !== (C = o[l]).sideImpulse && C.skidInfo < 1 && (C.forwardImpulse *= C.skidInfo, 
                    C.sideImpulse *= C.skidInfo);
                }
                for (l = 0; l < n; l++) {
                    var C = o[l], A = new i();
                    if (A.copy(C.raycastResult.hitPointWorld), 0 !== C.forwardImpulse) {
                        var R = new i();
                        s[l].scale(C.forwardImpulse, R), r.applyImpulse(R, A);
                    }
                    if (0 !== C.sideImpulse) {
                        f = C.raycastResult.body;
                        var P = new i();
                        P.copy(C.raycastResult.hitPointWorld);
                        var M = new i();
                        a[l].scale(C.sideImpulse, M), r.pointToLocalFrame(A, A), A["xyz"[this.indexUpAxis]] *= C.rollInfluence, 
                        r.pointToWorldFrame(A, A), r.applyImpulse(M, A), M.scale(-1, M), f.applyImpulse(M, P);
                    }
                }
            };
            var f = new i(), m = new i(), w = new i();
            function calcRollingFriction(t, e, o, i, n) {
                var r = 0, s = o, a = f, l = m, h = w;
                t.getVelocityAtWorldPoint(s, a), e.getVelocityAtWorldPoint(s, l), a.vsub(l, h);
                return n < (r = -i.dot(h) * (1 / (computeImpulseDenominator(t, o, i) + computeImpulseDenominator(e, o, i)))) && (r = n), 
                r < -n && (r = -n), r;
            }
            var x = new i(), g = new i(), b = new i(), B = new i();
            function computeImpulseDenominator(t, e, o) {
                var i = x, n = g, r = b, s = B;
                return e.vsub(t.position, i), i.cross(o, n), t.invInertiaWorld.vmult(n, s), s.cross(i, r), 
                t.invMass + o.dot(r);
            }
            var S = new i(), E = new i(), C = new i();
            function resolveSingleBilateral(t, e, o, i, n, r) {
                if (n.norm2() > 1.1) return 0;
                var s = S, a = E, l = C;
                t.getVelocityAtWorldPoint(e, s), o.getVelocityAtWorldPoint(i, a), s.vsub(a, l);
                return -.2 * n.dot(l) * (1 / (t.invMass + o.invMass));
            }
        }, {
            "../collision/Ray": 9,
            "../collision/RaycastResult": 10,
            "../math/Quaternion": 28,
            "../math/Vec3": 30,
            "../objects/WheelInfo": 36,
            "./Body": 31
        } ],
        33: [ function(t, e, o) {
            var i = t("./Body"), n = t("../shapes/Sphere"), r = t("../shapes/Box"), s = t("../math/Vec3"), a = t("../constraints/HingeConstraint");
            function RigidVehicle(t) {
                if (this.wheelBodies = [], this.coordinateSystem = void 0 === t.coordinateSystem ? new s(1, 2, 3) : t.coordinateSystem.clone(), 
                this.chassisBody = t.chassisBody, !this.chassisBody) {
                    var e = new r(new s(5, 2, .5));
                    this.chassisBody = new i(1, e);
                }
                this.constraints = [], this.wheelAxes = [], this.wheelForces = [];
            }
            e.exports = RigidVehicle, RigidVehicle.prototype.addWheel = function(t) {
                var e = (t = t || {}).body;
                e || (e = new i(1, new n(1.2))), this.wheelBodies.push(e), this.wheelForces.push(0);
                new s();
                var o = void 0 !== t.position ? t.position.clone() : new s(), r = new s();
                this.chassisBody.pointToWorldFrame(o, r), e.position.set(r.x, r.y, r.z);
                var l = void 0 !== t.axis ? t.axis.clone() : new s(0, 1, 0);
                this.wheelAxes.push(l);
                var h = new a(this.chassisBody, e, {
                    pivotA: o,
                    axisA: l,
                    pivotB: s.ZERO,
                    axisB: l,
                    collideConnected: !1
                });
                return this.constraints.push(h), this.wheelBodies.length - 1;
            }, RigidVehicle.prototype.setSteeringValue = function(t, e) {
                var o = this.wheelAxes[e], i = Math.cos(t), n = Math.sin(t), r = o.x, s = o.y;
                this.constraints[e].axisA.set(i * r - n * s, n * r + i * s, 0);
            }, RigidVehicle.prototype.setMotorSpeed = function(t, e) {
                var o = this.constraints[e];
                o.enableMotor(), o.motorTargetVelocity = t;
            }, RigidVehicle.prototype.disableMotor = function(t) {
                this.constraints[t].disableMotor();
            };
            var l = new s();
            RigidVehicle.prototype.setWheelForce = function(t, e) {
                this.wheelForces[e] = t;
            }, RigidVehicle.prototype.applyWheelForce = function(t, e) {
                var o = this.wheelAxes[e], i = this.wheelBodies[e], n = i.torque;
                o.scale(t, l), i.vectorToWorldFrame(l, l), n.vadd(l, n);
            }, RigidVehicle.prototype.addToWorld = function(t) {
                for (var e = this.constraints, o = this.wheelBodies.concat([ this.chassisBody ]), i = 0; i < o.length; i++) t.add(o[i]);
                for (i = 0; i < e.length; i++) t.addConstraint(e[i]);
                t.addEventListener("preStep", this._update.bind(this));
            }, RigidVehicle.prototype._update = function() {
                for (var t = this.wheelForces, e = 0; e < t.length; e++) this.applyWheelForce(t[e], e);
            }, RigidVehicle.prototype.removeFromWorld = function(t) {
                for (var e = this.constraints, o = this.wheelBodies.concat([ this.chassisBody ]), i = 0; i < o.length; i++) t.remove(o[i]);
                for (i = 0; i < e.length; i++) t.removeConstraint(e[i]);
            };
            var h = new s();
            RigidVehicle.prototype.getWheelSpeed = function(t) {
                var e = this.wheelAxes[t], o = this.wheelBodies[t].angularVelocity;
                return this.chassisBody.vectorToWorldFrame(e, h), o.dot(h);
            };
        }, {
            "../constraints/HingeConstraint": 15,
            "../math/Vec3": 30,
            "../shapes/Box": 37,
            "../shapes/Sphere": 44,
            "./Body": 31
        } ],
        34: [ function(t, e, o) {
            e.exports = SPHSystem;
            t("../shapes/Shape");
            var i = t("../math/Vec3");
            t("../math/Quaternion"), t("../shapes/Particle"), t("../objects/Body"), t("../material/Material");
            function SPHSystem() {
                this.particles = [], this.density = 1, this.smoothingRadius = 1, this.speedOfSound = 1, 
                this.viscosity = .01, this.eps = 1e-6, this.pressures = [], this.densities = [], 
                this.neighbors = [];
            }
            SPHSystem.prototype.add = function(t) {
                this.particles.push(t), this.neighbors.length < this.particles.length && this.neighbors.push([]);
            }, SPHSystem.prototype.remove = function(t) {
                var e = this.particles.indexOf(t);
                -1 !== e && (this.particles.splice(e, 1), this.neighbors.length > this.particles.length && this.neighbors.pop());
            };
            var n = new i();
            SPHSystem.prototype.getNeighbors = function(t, e) {
                for (var o = this.particles.length, i = t.id, r = this.smoothingRadius * this.smoothingRadius, s = n, a = 0; a !== o; a++) {
                    var l = this.particles[a];
                    l.position.vsub(t.position, s), i !== l.id && s.norm2() < r && e.push(l);
                }
            };
            var r = new i(), s = new i(), a = new i(), l = new i(), h = new i(), c = new i();
            SPHSystem.prototype.update = function() {
                for (var t = this.particles.length, e = r, o = this.speedOfSound, i = this.eps, n = 0; n !== t; n++) {
                    var p = this.particles[n];
                    (C = this.neighbors[n]).length = 0, this.getNeighbors(p, C), C.push(this.particles[n]);
                    for (var u = C.length, d = 0, v = 0; v !== u; v++) {
                        p.position.vsub(C[v].position, e);
                        var y = e.norm(), f = this.w(y);
                        d += C[v].mass * f;
                    }
                    this.densities[n] = d, this.pressures[n] = o * o * (this.densities[n] - this.density);
                }
                var m = s, w = a, x = l, g = h, b = c;
                for (n = 0; n !== t; n++) {
                    var B, S, E = this.particles[n];
                    m.set(0, 0, 0), w.set(0, 0, 0);
                    var C;
                    for (u = (C = this.neighbors[n]).length, v = 0; v !== u; v++) {
                        var A = C[v];
                        E.position.vsub(A.position, g);
                        var R = g.norm();
                        B = -A.mass * (this.pressures[n] / (this.densities[n] * this.densities[n] + i) + this.pressures[v] / (this.densities[v] * this.densities[v] + i)), 
                        this.gradw(g, x), x.mult(B, x), m.vadd(x, m), A.velocity.vsub(E.velocity, b), b.mult(1 / (1e-4 + this.densities[n] * this.densities[v]) * this.viscosity * A.mass, b), 
                        S = this.nablaw(R), b.mult(S, b), w.vadd(b, w);
                    }
                    w.mult(E.mass, w), m.mult(E.mass, m), E.force.vadd(w, E.force), E.force.vadd(m, E.force);
                }
            }, SPHSystem.prototype.w = function(t) {
                var e = this.smoothingRadius;
                return 315 / (64 * Math.PI * Math.pow(e, 9)) * Math.pow(e * e - t * t, 3);
            }, SPHSystem.prototype.gradw = function(t, e) {
                var o = t.norm(), i = this.smoothingRadius;
                t.mult(945 / (32 * Math.PI * Math.pow(i, 9)) * Math.pow(i * i - o * o, 2), e);
            }, SPHSystem.prototype.nablaw = function(t) {
                var e = this.smoothingRadius;
                return 945 / (32 * Math.PI * Math.pow(e, 9)) * (e * e - t * t) * (7 * t * t - 3 * e * e);
            };
        }, {
            "../material/Material": 25,
            "../math/Quaternion": 28,
            "../math/Vec3": 30,
            "../objects/Body": 31,
            "../shapes/Particle": 41,
            "../shapes/Shape": 43
        } ],
        35: [ function(t, e, o) {
            var i = t("../math/Vec3");
            function Spring(t, e, o) {
                o = o || {}, this.restLength = "number" == typeof o.restLength ? o.restLength : 1, 
                this.stiffness = o.stiffness || 100, this.damping = o.damping || 1, this.bodyA = t, 
                this.bodyB = e, this.localAnchorA = new i(), this.localAnchorB = new i(), o.localAnchorA && this.localAnchorA.copy(o.localAnchorA), 
                o.localAnchorB && this.localAnchorB.copy(o.localAnchorB), o.worldAnchorA && this.setWorldAnchorA(o.worldAnchorA), 
                o.worldAnchorB && this.setWorldAnchorB(o.worldAnchorB);
            }
            e.exports = Spring, Spring.prototype.setWorldAnchorA = function(t) {
                this.bodyA.pointToLocalFrame(t, this.localAnchorA);
            }, Spring.prototype.setWorldAnchorB = function(t) {
                this.bodyB.pointToLocalFrame(t, this.localAnchorB);
            }, Spring.prototype.getWorldAnchorA = function(t) {
                this.bodyA.pointToWorldFrame(this.localAnchorA, t);
            }, Spring.prototype.getWorldAnchorB = function(t) {
                this.bodyB.pointToWorldFrame(this.localAnchorB, t);
            };
            var n = new i(), r = new i(), s = new i(), a = new i(), l = new i(), h = new i(), c = new i(), p = new i(), u = new i(), d = new i(), v = new i();
            Spring.prototype.applyForce = function() {
                var t = this.stiffness, e = this.damping, o = this.restLength, i = this.bodyA, y = this.bodyB, f = n, m = r, w = s, x = a, g = v, b = l, B = h, S = c, E = p, C = u, A = d;
                this.getWorldAnchorA(b), this.getWorldAnchorB(B), b.vsub(i.position, S), B.vsub(y.position, E), 
                B.vsub(b, f);
                var R = f.norm();
                m.copy(f), m.normalize(), y.velocity.vsub(i.velocity, w), y.angularVelocity.cross(E, g), 
                w.vadd(g, w), i.angularVelocity.cross(S, g), w.vsub(g, w), m.mult(-t * (R - o) - e * w.dot(m), x), 
                i.force.vsub(x, i.force), y.force.vadd(x, y.force), S.cross(x, C), E.cross(x, A), 
                i.torque.vsub(C, i.torque), y.torque.vadd(A, y.torque);
            };
        }, {
            "../math/Vec3": 30
        } ],
        36: [ function(t, e, o) {
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
            var a = new i(), l = new i();
            a = new i();
            WheelInfo.prototype.updateWheel = function(t) {
                var e = this.raycastResult;
                if (this.isInContact) {
                    var o = e.hitNormalWorld.dot(e.directionWorld);
                    e.hitPointWorld.vsub(t.position, l), t.getVelocityAtWorldPoint(l, a);
                    var i = e.hitNormalWorld.dot(a);
                    if (o >= -.1) this.suspensionRelativeVelocity = 0, this.clippedInvContactDotSuspension = 10; else {
                        var n = -1 / o;
                        this.suspensionRelativeVelocity = i * n, this.clippedInvContactDotSuspension = n;
                    }
                } else e.suspensionLength = this.suspensionRestLength, this.suspensionRelativeVelocity = 0, 
                e.directionWorld.scale(-1, e.hitNormalWorld), this.clippedInvContactDotSuspension = 1;
            };
        }, {
            "../collision/RaycastResult": 10,
            "../math/Transform": 29,
            "../math/Vec3": 30,
            "../utils/Utils": 53
        } ],
        37: [ function(t, e, o) {
            e.exports = Box;
            var i = t("./Shape"), n = t("../math/Vec3"), r = t("./ConvexPolyhedron");
            function Box(t) {
                i.call(this), this.type = i.types.BOX, this.halfExtents = t, this.convexPolyhedronRepresentation = null, 
                this.updateConvexPolyhedronRepresentation(), this.updateBoundingSphereRadius();
            }
            Box.prototype = new i(), Box.prototype.constructor = Box, Box.prototype.updateConvexPolyhedronRepresentation = function() {
                var t = this.halfExtents.x, e = this.halfExtents.y, o = this.halfExtents.z, i = n, s = [ new i(-t, -e, -o), new i(t, -e, -o), new i(t, e, -o), new i(-t, e, -o), new i(-t, -e, o), new i(t, -e, o), new i(t, e, o), new i(-t, e, o) ], a = (new i(0, 0, 1), 
                new i(0, 1, 0), new i(1, 0, 0), new r(s, [ [ 3, 2, 1, 0 ], [ 4, 5, 6, 7 ], [ 5, 4, 0, 1 ], [ 2, 3, 7, 6 ], [ 0, 4, 7, 3 ], [ 1, 2, 6, 5 ] ]));
                this.convexPolyhedronRepresentation = a, a.material = this.material;
            }, Box.prototype.calculateLocalInertia = function(t, e) {
                return e = e || new n(), Box.calculateInertia(this.halfExtents, t, e), e;
            }, Box.calculateInertia = function(t, e, o) {
                var i = t;
                o.x = 1 / 12 * e * (2 * i.y * 2 * i.y + 2 * i.z * 2 * i.z), o.y = 1 / 12 * e * (2 * i.x * 2 * i.x + 2 * i.z * 2 * i.z), 
                o.z = 1 / 12 * e * (2 * i.y * 2 * i.y + 2 * i.x * 2 * i.x);
            }, Box.prototype.getSideNormals = function(t, e) {
                var o = t, i = this.halfExtents;
                if (o[0].set(i.x, 0, 0), o[1].set(0, i.y, 0), o[2].set(0, 0, i.z), o[3].set(-i.x, 0, 0), 
                o[4].set(0, -i.y, 0), o[5].set(0, 0, -i.z), void 0 !== e) for (var n = 0; n !== o.length; n++) e.vmult(o[n], o[n]);
                return o;
            }, Box.prototype.volume = function() {
                return 8 * this.halfExtents.x * this.halfExtents.y * this.halfExtents.z;
            }, Box.prototype.updateBoundingSphereRadius = function() {
                this.boundingSphereRadius = this.halfExtents.norm();
            };
            var s = new n();
            new n();
            Box.prototype.forEachWorldCorner = function(t, e, o) {
                for (var i = this.halfExtents, n = [ [ i.x, i.y, i.z ], [ -i.x, i.y, i.z ], [ -i.x, -i.y, i.z ], [ -i.x, -i.y, -i.z ], [ i.x, -i.y, -i.z ], [ i.x, i.y, -i.z ], [ -i.x, i.y, -i.z ], [ i.x, -i.y, i.z ] ], r = 0; r < n.length; r++) s.set(n[r][0], n[r][1], n[r][2]), 
                e.vmult(s, s), t.vadd(s, s), o(s.x, s.y, s.z);
            };
            var a = [ new n(), new n(), new n(), new n(), new n(), new n(), new n(), new n() ];
            Box.prototype.calculateWorldAABB = function(t, e, o, i) {
                var n = this.halfExtents;
                a[0].set(n.x, n.y, n.z), a[1].set(-n.x, n.y, n.z), a[2].set(-n.x, -n.y, n.z), a[3].set(-n.x, -n.y, -n.z), 
                a[4].set(n.x, -n.y, -n.z), a[5].set(n.x, n.y, -n.z), a[6].set(-n.x, n.y, -n.z), 
                a[7].set(n.x, -n.y, n.z);
                var r = a[0];
                e.vmult(r, r), t.vadd(r, r), i.copy(r), o.copy(r);
                for (var s = 1; s < 8; s++) {
                    r = a[s];
                    e.vmult(r, r), t.vadd(r, r);
                    var l = r.x, h = r.y, c = r.z;
                    l > i.x && (i.x = l), h > i.y && (i.y = h), c > i.z && (i.z = c), l < o.x && (o.x = l), 
                    h < o.y && (o.y = h), c < o.z && (o.z = c);
                }
            };
        }, {
            "../math/Vec3": 30,
            "./ConvexPolyhedron": 38,
            "./Shape": 43
        } ],
        38: [ function(t, e, o) {
            e.exports = ConvexPolyhedron;
            var i = t("./Shape"), n = t("../math/Vec3"), r = (t("../math/Quaternion"), t("../math/Transform"));
            function ConvexPolyhedron(t, e, o) {
                i.call(this), this.type = i.types.CONVEXPOLYHEDRON, this.vertices = t || [], this.worldVertices = [], 
                this.worldVerticesNeedsUpdate = !0, this.faces = e || [], this.faceNormals = [], 
                this.computeNormals(), this.worldFaceNormalsNeedsUpdate = !0, this.worldFaceNormals = [], 
                this.uniqueEdges = [], this.uniqueAxes = o ? o.slice() : null, this.computeEdges(), 
                this.updateBoundingSphereRadius();
            }
            ConvexPolyhedron.prototype = new i(), ConvexPolyhedron.prototype.constructor = ConvexPolyhedron;
            var s = new n();
            ConvexPolyhedron.prototype.computeEdges = function() {
                var t = this.faces, e = this.vertices, o = (e.length, this.uniqueEdges);
                o.length = 0;
                for (var i = s, n = 0; n !== t.length; n++) for (var r = t[n], a = r.length, l = 0; l !== a; l++) {
                    var h = (l + 1) % a;
                    e[r[l]].vsub(e[r[h]], i), i.normalize();
                    for (var c = !1, p = 0; p !== o.length; p++) if (o[p].almostEquals(i) || o[p].almostEquals(i)) {
                        c = !0;
                        break;
                    }
                    c || o.push(i.clone());
                }
            }, ConvexPolyhedron.prototype.computeNormals = function() {
                this.faceNormals.length = this.faces.length;
                for (var t = 0; t < this.faces.length; t++) {
                    for (var e = 0; e < this.faces[t].length; e++) if (!this.vertices[this.faces[t][e]]) throw new Error("Vertex " + this.faces[t][e] + " not found!");
                    var o = this.faceNormals[t] || new n();
                    this.getFaceNormal(t, o), o.negate(o), this.faceNormals[t] = o;
                    var i = this.vertices[this.faces[t][0]];
                    if (o.dot(i) < 0) {
                        console.error(".faceNormals[" + t + "] = Vec3(" + o.toString() + ") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");
                        for (e = 0; e < this.faces[t].length; e++) console.warn(".vertices[" + this.faces[t][e] + "] = Vec3(" + this.vertices[this.faces[t][e]].toString() + ")");
                    }
                }
            };
            var a = new n(), l = new n();
            ConvexPolyhedron.computeNormal = function(t, e, o, i) {
                e.vsub(t, l), o.vsub(e, a), a.cross(l, i), i.isZero() || i.normalize();
            }, ConvexPolyhedron.prototype.getFaceNormal = function(t, e) {
                var o = this.faces[t], i = this.vertices[o[0]], n = this.vertices[o[1]], r = this.vertices[o[2]];
                return ConvexPolyhedron.computeNormal(i, n, r, e);
            };
            var h = new n();
            ConvexPolyhedron.prototype.clipAgainstHull = function(t, e, o, i, r, s, a, l, c) {
                for (var p = h, u = -1, d = -Number.MAX_VALUE, v = 0; v < o.faces.length; v++) {
                    p.copy(o.faceNormals[v]), r.vmult(p, p);
                    var y = p.dot(s);
                    y > d && (d = y, u = v);
                }
                for (var f = [], m = o.faces[u], w = m.length, x = 0; x < w; x++) {
                    var g = o.vertices[m[x]], b = new n();
                    b.copy(g), r.vmult(b, b), i.vadd(b, b), f.push(b);
                }
                u >= 0 && this.clipFaceAgainstHull(s, t, e, f, a, l, c);
            };
            var c = new n(), p = new n(), u = new n(), d = new n(), v = new n(), y = new n();
            ConvexPolyhedron.prototype.findSeparatingAxis = function(t, e, o, i, n, r, s, a) {
                var l = c, h = p, f = u, m = d, w = v, x = y, g = Number.MAX_VALUE;
                if (this.uniqueAxes) for (B = 0; B !== this.uniqueAxes.length; B++) {
                    if (o.vmult(this.uniqueAxes[B], l), !1 === (C = this.testSepAxis(l, t, e, o, i, n))) return !1;
                    C < g && (g = C, r.copy(l));
                } else for (var b = s ? s.length : this.faces.length, B = 0; B < b; B++) {
                    var S = s ? s[B] : B;
                    if (l.copy(this.faceNormals[S]), o.vmult(l, l), !1 === (C = this.testSepAxis(l, t, e, o, i, n))) return !1;
                    C < g && (g = C, r.copy(l));
                }
                if (t.uniqueAxes) for (B = 0; B !== t.uniqueAxes.length; B++) {
                    if (n.vmult(t.uniqueAxes[B], h), 0, !1 === (C = this.testSepAxis(h, t, e, o, i, n))) return !1;
                    C < g && (g = C, r.copy(h));
                } else for (var E = a ? a.length : t.faces.length, B = 0; B < E; B++) {
                    var C;
                    S = a ? a[B] : B;
                    if (h.copy(t.faceNormals[S]), n.vmult(h, h), 0, !1 === (C = this.testSepAxis(h, t, e, o, i, n))) return !1;
                    C < g && (g = C, r.copy(h));
                }
                for (var A = 0; A !== this.uniqueEdges.length; A++) {
                    o.vmult(this.uniqueEdges[A], m);
                    for (var R = 0; R !== t.uniqueEdges.length; R++) if (n.vmult(t.uniqueEdges[R], w), 
                    m.cross(w, x), !x.almostZero()) {
                        x.normalize();
                        var P = this.testSepAxis(x, t, e, o, i, n);
                        if (!1 === P) return !1;
                        P < g && (g = P, r.copy(x));
                    }
                }
                return i.vsub(e, f), f.dot(r) > 0 && r.negate(r), !0;
            };
            var f = [], m = [];
            ConvexPolyhedron.prototype.testSepAxis = function(t, e, o, i, n, r) {
                ConvexPolyhedron.project(this, t, o, i, f), ConvexPolyhedron.project(e, t, n, r, m);
                var s = f[0], a = f[1], l = m[0], h = m[1];
                if (s < h || l < a) return !1;
                var c = s - h, p = l - a;
                return c < p ? c : p;
            };
            var w = new n(), x = new n();
            ConvexPolyhedron.prototype.calculateLocalInertia = function(t, e) {
                this.computeLocalAABB(w, x);
                var o = x.x - w.x, i = x.y - w.y, n = x.z - w.z;
                e.x = 1 / 12 * t * (2 * i * 2 * i + 2 * n * 2 * n), e.y = 1 / 12 * t * (2 * o * 2 * o + 2 * n * 2 * n), 
                e.z = 1 / 12 * t * (2 * i * 2 * i + 2 * o * 2 * o);
            }, ConvexPolyhedron.prototype.getPlaneConstantOfFace = function(t) {
                var e = this.faces[t], o = this.faceNormals[t], i = this.vertices[e[0]];
                return -o.dot(i);
            };
            var g = new n(), b = new n(), B = new n(), S = new n(), E = new n(), C = new n(), A = new n(), R = new n();
            ConvexPolyhedron.prototype.clipFaceAgainstHull = function(t, e, o, i, n, r, s) {
                for (var a = g, l = b, h = B, c = S, p = E, u = C, d = A, v = R, y = i, f = [], m = -1, w = Number.MAX_VALUE, x = 0; x < this.faces.length; x++) {
                    a.copy(this.faceNormals[x]), o.vmult(a, a);
                    var P = a.dot(t);
                    P < w && (w = P, m = x);
                }
                if (!(m < 0)) {
                    var M = this.faces[m];
                    M.connectedFaces = [];
                    for (var q = 0; q < this.faces.length; q++) for (var V = 0; V < this.faces[q].length; V++) -1 !== M.indexOf(this.faces[q][V]) && q !== m && -1 === M.connectedFaces.indexOf(q) && M.connectedFaces.push(q);
                    y.length;
                    for (var z = M.length, T = 0; T < z; T++) {
                        var N = this.vertices[M[T]], F = this.vertices[M[(T + 1) % z]];
                        N.vsub(F, l), h.copy(l), o.vmult(h, h), e.vadd(h, h), c.copy(this.faceNormals[m]), 
                        o.vmult(c, c), e.vadd(c, c), h.cross(c, p), p.negate(p), u.copy(N), o.vmult(u, u), 
                        e.vadd(u, u);
                        u.dot(p);
                        var I = M.connectedFaces[T];
                        d.copy(this.faceNormals[I]);
                        var W = this.getPlaneConstantOfFace(I);
                        v.copy(d), o.vmult(v, v);
                        var L = W - v.dot(e);
                        for (this.clipFaceAgainstPlane(y, f, v, L); y.length; ) y.shift();
                        for (;f.length; ) y.push(f.shift());
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
                                var H = {
                                    point: O,
                                    normal: v,
                                    depth: j
                                };
                                s.push(H);
                            }
                        }
                    }
                }
            }, ConvexPolyhedron.prototype.clipFaceAgainstPlane = function(t, e, o, i) {
                var r, s, a = t.length;
                if (a < 2) return e;
                var l = t[t.length - 1], h = t[0];
                r = o.dot(l) + i;
                for (var c = 0; c < a; c++) {
                    if (h = t[c], s = o.dot(h) + i, r < 0) if (s < 0) {
                        (p = new n()).copy(h), e.push(p);
                    } else {
                        var p = new n();
                        l.lerp(h, r / (r - s), p), e.push(p);
                    } else if (s < 0) {
                        p = new n();
                        l.lerp(h, r / (r - s), p), e.push(p), e.push(h);
                    }
                    l = h, r = s;
                }
                return e;
            }, ConvexPolyhedron.prototype.computeWorldVertices = function(t, e) {
                for (var o = this.vertices.length; this.worldVertices.length < o; ) this.worldVertices.push(new n());
                for (var i = this.vertices, r = this.worldVertices, s = 0; s !== o; s++) e.vmult(i[s], r[s]), 
                t.vadd(r[s], r[s]);
                this.worldVerticesNeedsUpdate = !1;
            };
            new n();
            ConvexPolyhedron.prototype.computeLocalAABB = function(t, e) {
                var o = this.vertices.length, i = this.vertices;
                t.set(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), e.set(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
                for (var n = 0; n < o; n++) {
                    var r = i[n];
                    r.x < t.x ? t.x = r.x : r.x > e.x && (e.x = r.x), r.y < t.y ? t.y = r.y : r.y > e.y && (e.y = r.y), 
                    r.z < t.z ? t.z = r.z : r.z > e.z && (e.z = r.z);
                }
            }, ConvexPolyhedron.prototype.computeWorldFaceNormals = function(t) {
                for (var e = this.faceNormals.length; this.worldFaceNormals.length < e; ) this.worldFaceNormals.push(new n());
                for (var o = this.faceNormals, i = this.worldFaceNormals, r = 0; r !== e; r++) t.vmult(o[r], i[r]);
                this.worldFaceNormalsNeedsUpdate = !1;
            }, ConvexPolyhedron.prototype.updateBoundingSphereRadius = function() {
                for (var t = 0, e = this.vertices, o = 0, i = e.length; o !== i; o++) {
                    var n = e[o].norm2();
                    n > t && (t = n);
                }
                this.boundingSphereRadius = Math.sqrt(t);
            };
            var P = new n();
            ConvexPolyhedron.prototype.calculateWorldAABB = function(t, e, o, i) {
                for (var n, r, s, a, l, h, c = this.vertices.length, p = this.vertices, u = 0; u < c; u++) {
                    P.copy(p[u]), e.vmult(P, P), t.vadd(P, P);
                    var d = P;
                    d.x < n || void 0 === n ? n = d.x : (d.x > a || void 0 === a) && (a = d.x), d.y < r || void 0 === r ? r = d.y : (d.y > l || void 0 === l) && (l = d.y), 
                    d.z < s || void 0 === s ? s = d.z : (d.z > h || void 0 === h) && (h = d.z);
                }
                o.set(n, r, s), i.set(a, l, h);
            }, ConvexPolyhedron.prototype.volume = function() {
                return 4 * Math.PI * this.boundingSphereRadius / 3;
            }, ConvexPolyhedron.prototype.getAveragePointLocal = function(t) {
                t = t || new n();
                for (var e = this.vertices.length, o = this.vertices, i = 0; i < e; i++) t.vadd(o[i], t);
                return t.mult(1 / e, t), t;
            }, ConvexPolyhedron.prototype.transformAllPoints = function(t, e) {
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
            var M = new n(), q = new n(), V = new n();
            ConvexPolyhedron.prototype.pointIsInside = function(t) {
                var e = this.vertices.length, o = this.vertices, i = this.faces, n = this.faceNormals, r = this.faces.length, s = M;
                this.getAveragePointLocal(s);
                for (var a = 0; a < r; a++) {
                    this.faces[a].length, e = n[a];
                    var l = o[i[a][0]], h = q;
                    t.vsub(l, h);
                    var c = e.dot(h), p = V;
                    s.vsub(l, p);
                    var u = e.dot(p);
                    if (c < 0 && u > 0 || c > 0 && u < 0) return !1;
                }
                return -1;
            };
            new n();
            var z = new n(), T = new n();
            ConvexPolyhedron.project = function(t, e, o, i, n) {
                var s = t.vertices.length, a = z, l = 0, h = 0, c = T, p = t.vertices;
                c.setZero(), r.vectorToLocalFrame(o, i, e, a), r.pointToLocalFrame(o, i, c, c);
                var u = c.dot(a);
                h = l = p[0].dot(a);
                for (var d = 1; d < s; d++) {
                    var v = p[d].dot(a);
                    v > l && (l = v), v < h && (h = v);
                }
                if ((h -= u) > (l -= u)) {
                    var y = h;
                    h = l, l = y;
                }
                n[0] = l, n[1] = h;
            };
        }, {
            "../math/Quaternion": 28,
            "../math/Transform": 29,
            "../math/Vec3": 30,
            "./Shape": 43
        } ],
        39: [ function(t, e, o) {
            e.exports = Cylinder;
            var i = t("./Shape"), n = t("../math/Vec3"), r = (t("../math/Quaternion"), t("./ConvexPolyhedron"));
            function Cylinder(t, e, o, s) {
                var a = s, l = [], h = [], c = [], p = [], u = [], d = Math.cos, v = Math.sin;
                l.push(new n(e * d(0), e * v(0), .5 * -o)), p.push(0), l.push(new n(t * d(0), t * v(0), .5 * o)), 
                u.push(1);
                for (var y = 0; y < a; y++) {
                    var f = 2 * Math.PI / a * (y + 1), m = 2 * Math.PI / a * (y + .5);
                    y < a - 1 ? (l.push(new n(e * d(f), e * v(f), .5 * -o)), p.push(2 * y + 2), l.push(new n(t * d(f), t * v(f), .5 * o)), 
                    u.push(2 * y + 3), c.push([ 2 * y + 2, 2 * y + 3, 2 * y + 1, 2 * y ])) : c.push([ 0, 1, 2 * y + 1, 2 * y ]), 
                    (a % 2 == 1 || y < a / 2) && h.push(new n(d(m), v(m), 0));
                }
                c.push(u), h.push(new n(0, 0, 1));
                var w = [];
                for (y = 0; y < p.length; y++) w.push(p[p.length - y - 1]);
                c.push(w), this.type = i.types.CONVEXPOLYHEDRON, r.call(this, l, c, h);
            }
            Cylinder.prototype = new r();
        }, {
            "../math/Quaternion": 28,
            "../math/Vec3": 30,
            "./ConvexPolyhedron": 38,
            "./Shape": 43
        } ],
        40: [ function(t, e, o) {
            var i = t("./Shape"), n = t("./ConvexPolyhedron"), r = t("../math/Vec3"), s = t("../utils/Utils");
            function Heightfield(t, e) {
                e = s.defaults(e, {
                    maxValue: null,
                    minValue: null,
                    elementSize: 1
                }), this.data = t, this.maxValue = e.maxValue, this.minValue = e.minValue, this.elementSize = e.elementSize, 
                null === e.minValue && this.updateMinValue(), null === e.maxValue && this.updateMaxValue(), 
                this.cacheEnabled = !0, i.call(this), this.pillarConvex = new n(), this.pillarOffset = new r(), 
                this.type = i.types.HEIGHTFIELD, this.updateBoundingSphereRadius(), this._cachedPillars = {};
            }
            e.exports = Heightfield, Heightfield.prototype = new i(), Heightfield.prototype.update = function() {
                this._cachedPillars = {};
            }, Heightfield.prototype.updateMinValue = function() {
                for (var t = this.data, e = t[0][0], o = 0; o !== t.length; o++) for (var i = 0; i !== t[o].length; i++) {
                    var n = t[o][i];
                    n < e && (e = n);
                }
                this.minValue = e;
            }, Heightfield.prototype.updateMaxValue = function() {
                for (var t = this.data, e = t[0][0], o = 0; o !== t.length; o++) for (var i = 0; i !== t[o].length; i++) {
                    var n = t[o][i];
                    n > e && (e = n);
                }
                this.maxValue = e;
            }, Heightfield.prototype.setHeightValueAtIndex = function(t, e, o) {
                this.data[t][e] = o, this.clearCachedConvexTrianglePillar(t, e, !1), t > 0 && (this.clearCachedConvexTrianglePillar(t - 1, e, !0), 
                this.clearCachedConvexTrianglePillar(t - 1, e, !1)), e > 0 && (this.clearCachedConvexTrianglePillar(t, e - 1, !0), 
                this.clearCachedConvexTrianglePillar(t, e - 1, !1)), e > 0 && t > 0 && this.clearCachedConvexTrianglePillar(t - 1, e - 1, !0);
            }, Heightfield.prototype.getRectMinMax = function(t, e, o, i, n) {
                n = n || [];
                for (var r = this.data, s = this.minValue, a = t; a <= o; a++) for (var l = e; l <= i; l++) {
                    var h = r[a][l];
                    h > s && (s = h);
                }
                n[0] = this.minValue, n[1] = s;
            }, Heightfield.prototype.getIndexOfPosition = function(t, e, o, i) {
                var n = this.elementSize, r = this.data, s = Math.floor(t / n), a = Math.floor(e / n);
                return o[0] = s, o[1] = a, i && (s < 0 && (s = 0), a < 0 && (a = 0), s >= r.length - 1 && (s = r.length - 1), 
                a >= r[0].length - 1 && (a = r[0].length - 1)), !(s < 0 || a < 0 || s >= r.length - 1 || a >= r[0].length - 1);
            }, Heightfield.prototype.getHeightAt = function(t, e, o) {
                var i = [];
                this.getIndexOfPosition(t, e, i, o);
                var n = [];
                return this.getRectMinMax(i[0], i[1] + 1, i[0], i[1] + 1, n), (n[0] + n[1]) / 2;
            }, Heightfield.prototype.getCacheConvexTrianglePillarKey = function(t, e, o) {
                return t + "_" + e + "_" + (o ? 1 : 0);
            }, Heightfield.prototype.getCachedConvexTrianglePillar = function(t, e, o) {
                return this._cachedPillars[this.getCacheConvexTrianglePillarKey(t, e, o)];
            }, Heightfield.prototype.setCachedConvexTrianglePillar = function(t, e, o, i, n) {
                this._cachedPillars[this.getCacheConvexTrianglePillarKey(t, e, o)] = {
                    convex: i,
                    offset: n
                };
            }, Heightfield.prototype.clearCachedConvexTrianglePillar = function(t, e, o) {
                delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(t, e, o)];
            }, Heightfield.prototype.getConvexTrianglePillar = function(t, e, o) {
                var i = this.pillarConvex, s = this.pillarOffset;
                if (this.cacheEnabled) {
                    if (a = this.getCachedConvexTrianglePillar(t, e, o)) return this.pillarConvex = a.convex, 
                    void (this.pillarOffset = a.offset);
                    i = new n(), s = new r(), this.pillarConvex = i, this.pillarOffset = s;
                }
                var a = this.data, l = this.elementSize, h = i.faces;
                i.vertices.length = 6;
                for (var c = 0; c < 6; c++) i.vertices[c] || (i.vertices[c] = new r());
                h.length = 5;
                for (c = 0; c < 5; c++) h[c] || (h[c] = []);
                var p = i.vertices, u = (Math.min(a[t][e], a[t + 1][e], a[t][e + 1], a[t + 1][e + 1]) - this.minValue) / 2 + this.minValue;
                o ? (s.set((t + .75) * l, (e + .75) * l, u), p[0].set(.25 * l, .25 * l, a[t + 1][e + 1] - u), 
                p[1].set(-.75 * l, .25 * l, a[t][e + 1] - u), p[2].set(.25 * l, -.75 * l, a[t + 1][e] - u), 
                p[3].set(.25 * l, .25 * l, -u - 1), p[4].set(-.75 * l, .25 * l, -u - 1), p[5].set(.25 * l, -.75 * l, -u - 1), 
                h[0][0] = 0, h[0][1] = 1, h[0][2] = 2, h[1][0] = 5, h[1][1] = 4, h[1][2] = 3, h[2][0] = 2, 
                h[2][1] = 5, h[2][2] = 3, h[2][3] = 0, h[3][0] = 3, h[3][1] = 4, h[3][2] = 1, h[3][3] = 0, 
                h[4][0] = 1, h[4][1] = 4, h[4][2] = 5, h[4][3] = 2) : (s.set((t + .25) * l, (e + .25) * l, u), 
                p[0].set(-.25 * l, -.25 * l, a[t][e] - u), p[1].set(.75 * l, -.25 * l, a[t + 1][e] - u), 
                p[2].set(-.25 * l, .75 * l, a[t][e + 1] - u), p[3].set(-.25 * l, -.25 * l, -u - 1), 
                p[4].set(.75 * l, -.25 * l, -u - 1), p[5].set(-.25 * l, .75 * l, -u - 1), h[0][0] = 0, 
                h[0][1] = 1, h[0][2] = 2, h[1][0] = 5, h[1][1] = 4, h[1][2] = 3, h[2][0] = 0, h[2][1] = 2, 
                h[2][2] = 5, h[2][3] = 3, h[3][0] = 1, h[3][1] = 0, h[3][2] = 3, h[3][3] = 4, h[4][0] = 4, 
                h[4][1] = 5, h[4][2] = 2, h[4][3] = 1), i.computeNormals(), i.computeEdges(), i.updateBoundingSphereRadius(), 
                this.setCachedConvexTrianglePillar(t, e, o, i, s);
            }, Heightfield.prototype.calculateLocalInertia = function(t, e) {
                return (e = e || new r()).set(0, 0, 0), e;
            }, Heightfield.prototype.volume = function() {
                return Number.MAX_VALUE;
            }, Heightfield.prototype.calculateWorldAABB = function(t, e, o, i) {
                o.set(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE), i.set(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
            }, Heightfield.prototype.updateBoundingSphereRadius = function() {
                var t = this.data, e = this.elementSize;
                this.boundingSphereRadius = new r(t.length * e, t[0].length * e, Math.max(Math.abs(this.maxValue), Math.abs(this.minValue))).norm();
            };
        }, {
            "../math/Vec3": 30,
            "../utils/Utils": 53,
            "./ConvexPolyhedron": 38,
            "./Shape": 43
        } ],
        41: [ function(t, e, o) {
            e.exports = Particle;
            var i = t("./Shape"), n = t("../math/Vec3");
            function Particle() {
                i.call(this), this.type = i.types.PARTICLE;
            }
            Particle.prototype = new i(), Particle.prototype.constructor = Particle, Particle.prototype.calculateLocalInertia = function(t, e) {
                return (e = e || new n()).set(0, 0, 0), e;
            }, Particle.prototype.volume = function() {
                return 0;
            }, Particle.prototype.updateBoundingSphereRadius = function() {
                this.boundingSphereRadius = 0;
            }, Particle.prototype.calculateWorldAABB = function(t, e, o, i) {
                o.copy(t), i.copy(t);
            };
        }, {
            "../math/Vec3": 30,
            "./Shape": 43
        } ],
        42: [ function(t, e, o) {
            e.exports = Plane;
            var i = t("./Shape"), n = t("../math/Vec3");
            function Plane() {
                i.call(this), this.type = i.types.PLANE, this.worldNormal = new n(), this.worldNormalNeedsUpdate = !0, 
                this.boundingSphereRadius = Number.MAX_VALUE;
            }
            Plane.prototype = new i(), Plane.prototype.constructor = Plane, Plane.prototype.computeWorldNormal = function(t) {
                var e = this.worldNormal;
                e.set(0, 0, 1), t.vmult(e, e), this.worldNormalNeedsUpdate = !1;
            }, Plane.prototype.calculateLocalInertia = function(t, e) {
                return e = e || new n();
            }, Plane.prototype.volume = function() {
                return Number.MAX_VALUE;
            };
            var r = new n();
            Plane.prototype.calculateWorldAABB = function(t, e, o, i) {
                r.set(0, 0, 1), e.vmult(r, r);
                var n = Number.MAX_VALUE;
                o.set(-n, -n, -n), i.set(n, n, n), 1 === r.x && (i.x = t.x), 1 === r.y && (i.y = t.y), 
                1 === r.z && (i.z = t.z), -1 === r.x && (o.x = t.x), -1 === r.y && (o.y = t.y), 
                -1 === r.z && (o.z = t.z);
            }, Plane.prototype.updateBoundingSphereRadius = function() {
                this.boundingSphereRadius = Number.MAX_VALUE;
            };
        }, {
            "../math/Vec3": 30,
            "./Shape": 43
        } ],
        43: [ function(t, e, o) {
            e.exports = i;
            var i = t("./Shape");
            t("../math/Vec3"), t("../math/Quaternion"), t("../material/Material");
            function i() {
                this.id = i.idCounter++, this.type = 0, this.boundingSphereRadius = 0, this.collisionResponse = !0, 
                this.material = null;
            }
            i.prototype.constructor = i, i.prototype.updateBoundingSphereRadius = function() {
                throw "computeBoundingSphereRadius() not implemented for shape type " + this.type;
            }, i.prototype.volume = function() {
                throw "volume() not implemented for shape type " + this.type;
            }, i.prototype.calculateLocalInertia = function(t, e) {
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
            "../material/Material": 25,
            "../math/Quaternion": 28,
            "../math/Vec3": 30,
            "./Shape": 43
        } ],
        44: [ function(t, e, o) {
            e.exports = Sphere;
            var i = t("./Shape"), n = t("../math/Vec3");
            function Sphere(t) {
                if (i.call(this), this.radius = void 0 !== t ? Number(t) : 1, this.type = i.types.SPHERE, 
                this.radius < 0) throw new Error("The sphere radius cannot be negative.");
                this.updateBoundingSphereRadius();
            }
            Sphere.prototype = new i(), Sphere.prototype.constructor = Sphere, Sphere.prototype.calculateLocalInertia = function(t, e) {
                e = e || new n();
                var o = 2 * t * this.radius * this.radius / 5;
                return e.x = o, e.y = o, e.z = o, e;
            }, Sphere.prototype.volume = function() {
                return 4 * Math.PI * this.radius / 3;
            }, Sphere.prototype.updateBoundingSphereRadius = function() {
                this.boundingSphereRadius = this.radius;
            }, Sphere.prototype.calculateWorldAABB = function(t, e, o, i) {
                for (var n = this.radius, r = [ "x", "y", "z" ], s = 0; s < r.length; s++) {
                    var a = r[s];
                    o[a] = t[a] - n, i[a] = t[a] + n;
                }
            };
        }, {
            "../math/Vec3": 30,
            "./Shape": 43
        } ],
        45: [ function(t, e, o) {
            e.exports = Trimesh;
            var i = t("./Shape"), n = t("../math/Vec3"), r = (t("../math/Quaternion"), t("../math/Transform")), s = t("../collision/AABB"), a = t("../utils/Octree");
            function Trimesh(t, e) {
                i.call(this), this.type = i.types.TRIMESH, this.vertices = new Float32Array(t), 
                this.indices = new Int16Array(e), this.normals = new Float32Array(e.length), this.aabb = new s(), 
                this.edges = null, this.scale = new n(1, 1, 1), this.tree = new a(), this.updateEdges(), 
                this.updateNormals(), this.updateAABB(), this.updateBoundingSphereRadius(), this.updateTree();
            }
            Trimesh.prototype = new i(), Trimesh.prototype.constructor = Trimesh;
            var l = new n();
            Trimesh.prototype.updateTree = function() {
                var t = this.tree;
                t.reset(), t.aabb.copy(this.aabb);
                var e = this.scale;
                t.aabb.lowerBound.x *= 1 / e.x, t.aabb.lowerBound.y *= 1 / e.y, t.aabb.lowerBound.z *= 1 / e.z, 
                t.aabb.upperBound.x *= 1 / e.x, t.aabb.upperBound.y *= 1 / e.y, t.aabb.upperBound.z *= 1 / e.z;
                for (var o = new s(), i = new n(), r = new n(), a = new n(), l = [ i, r, a ], h = 0; h < this.indices.length / 3; h++) {
                    var c = 3 * h;
                    this._getUnscaledVertex(this.indices[c], i), this._getUnscaledVertex(this.indices[c + 1], r), 
                    this._getUnscaledVertex(this.indices[c + 2], a), o.setFromPoints(l), t.insert(o, h);
                }
                t.removeEmptyNodes();
            };
            var h = new s();
            Trimesh.prototype.getTrianglesInAABB = function(t, e) {
                h.copy(t);
                var o = this.scale, i = o.x, n = o.y, r = o.z, s = h.lowerBound, a = h.upperBound;
                return s.x /= i, s.y /= n, s.z /= r, a.x /= i, a.y /= n, a.z /= r, this.tree.aabbQuery(h, e);
            }, Trimesh.prototype.setScale = function(t) {
                var e = this.scale.x === this.scale.y === this.scale.z, o = t.x === t.y === t.z;
                e && o || this.updateNormals(), this.scale.copy(t), this.updateAABB(), this.updateBoundingSphereRadius();
            }, Trimesh.prototype.updateNormals = function() {
                for (var t = l, e = this.normals, o = 0; o < this.indices.length / 3; o++) {
                    var i = 3 * o, n = this.indices[i], r = this.indices[i + 1], s = this.indices[i + 2];
                    this.getVertex(n, v), this.getVertex(r, y), this.getVertex(s, f), Trimesh.computeNormal(y, v, f, t), 
                    e[i] = t.x, e[i + 1] = t.y, e[i + 2] = t.z;
                }
            }, Trimesh.prototype.updateEdges = function() {
                for (var t = {}, e = function(e, o) {
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
            }, Trimesh.prototype.getEdgeVertex = function(t, e, o) {
                var i = this.edges[2 * t + (e ? 1 : 0)];
                this.getVertex(i, o);
            };
            var c = new n(), p = new n();
            Trimesh.prototype.getEdgeVector = function(t, e) {
                var o = c, i = p;
                this.getEdgeVertex(t, 0, o), this.getEdgeVertex(t, 1, i), i.vsub(o, e);
            };
            var u = new n(), d = new n();
            Trimesh.computeNormal = function(t, e, o, i) {
                e.vsub(t, d), o.vsub(e, u), u.cross(d, i), i.isZero() || i.normalize();
            };
            var v = new n(), y = new n(), f = new n();
            Trimesh.prototype.getVertex = function(t, e) {
                var o = this.scale;
                return this._getUnscaledVertex(t, e), e.x *= o.x, e.y *= o.y, e.z *= o.z, e;
            }, Trimesh.prototype._getUnscaledVertex = function(t, e) {
                var o = 3 * t, i = this.vertices;
                return e.set(i[o], i[o + 1], i[o + 2]);
            }, Trimesh.prototype.getWorldVertex = function(t, e, o, i) {
                return this.getVertex(t, i), r.pointToWorldFrame(e, o, i, i), i;
            }, Trimesh.prototype.getTriangleVertices = function(t, e, o, i) {
                var n = 3 * t;
                this.getVertex(this.indices[n], e), this.getVertex(this.indices[n + 1], o), this.getVertex(this.indices[n + 2], i);
            }, Trimesh.prototype.getNormal = function(t, e) {
                var o = 3 * t;
                return e.set(this.normals[o], this.normals[o + 1], this.normals[o + 2]);
            };
            var m = new s();
            Trimesh.prototype.calculateLocalInertia = function(t, e) {
                this.computeLocalAABB(m);
                var o = m.upperBound.x - m.lowerBound.x, i = m.upperBound.y - m.lowerBound.y, n = m.upperBound.z - m.lowerBound.z;
                return e.set(1 / 12 * t * (2 * i * 2 * i + 2 * n * 2 * n), 1 / 12 * t * (2 * o * 2 * o + 2 * n * 2 * n), 1 / 12 * t * (2 * i * 2 * i + 2 * o * 2 * o));
            };
            var w = new n();
            Trimesh.prototype.computeLocalAABB = function(t) {
                var e = t.lowerBound, o = t.upperBound, i = this.vertices.length, n = (this.vertices, 
                w);
                this.getVertex(0, n), e.copy(n), o.copy(n);
                for (var r = 0; r !== i; r++) this.getVertex(r, n), n.x < e.x ? e.x = n.x : n.x > o.x && (o.x = n.x), 
                n.y < e.y ? e.y = n.y : n.y > o.y && (o.y = n.y), n.z < e.z ? e.z = n.z : n.z > o.z && (o.z = n.z);
            }, Trimesh.prototype.updateAABB = function() {
                this.computeLocalAABB(this.aabb);
            }, Trimesh.prototype.updateBoundingSphereRadius = function() {
                for (var t = 0, e = this.vertices, o = new n(), i = 0, r = e.length / 3; i !== r; i++) {
                    this.getVertex(i, o);
                    var s = o.norm2();
                    s > t && (t = s);
                }
                this.boundingSphereRadius = Math.sqrt(t);
            };
            new n();
            var x = new r(), g = new s();
            Trimesh.prototype.calculateWorldAABB = function(t, e, o, i) {
                var n = x, r = g;
                n.position = t, n.quaternion = e, this.aabb.toWorldFrame(n, r), o.copy(r.lowerBound), 
                i.copy(r.upperBound);
            }, Trimesh.prototype.volume = function() {
                return 4 * Math.PI * this.boundingSphereRadius / 3;
            }, Trimesh.createTorus = function(t, e, o, i, n) {
                t = t || 1, e = e || .5, o = o || 8, i = i || 6, n = n || 2 * Math.PI;
                for (var r = [], s = [], a = 0; a <= o; a++) for (var l = 0; l <= i; l++) {
                    var h = l / i * n, c = a / o * Math.PI * 2, p = (t + e * Math.cos(c)) * Math.cos(h), u = (t + e * Math.cos(c)) * Math.sin(h), d = e * Math.sin(c);
                    r.push(p, u, d);
                }
                for (a = 1; a <= o; a++) for (l = 1; l <= i; l++) {
                    var v = (i + 1) * a + l - 1, y = (i + 1) * (a - 1) + l - 1, f = (i + 1) * (a - 1) + l, m = (i + 1) * a + l;
                    s.push(v, y, m), s.push(y, f, m);
                }
                return new Trimesh(r, s);
            };
        }, {
            "../collision/AABB": 3,
            "../math/Quaternion": 28,
            "../math/Transform": 29,
            "../math/Vec3": 30,
            "../utils/Octree": 50,
            "./Shape": 43
        } ],
        46: [ function(t, e, o) {
            e.exports = GSSolver;
            t("../math/Vec3"), t("../math/Quaternion");
            var i = t("./Solver");
            function GSSolver() {
                i.call(this), this.iterations = 10, this.tolerance = 1e-7;
            }
            GSSolver.prototype = new i();
            var n = [], r = [], s = [];
            GSSolver.prototype.solve = function(t, e) {
                var o, i, a, l, h, c = 0, p = this.iterations, u = this.tolerance * this.tolerance, d = this.equations, v = d.length, y = e.bodies, f = y.length, m = t;
                if (0 !== v) for (var w = 0; w !== f; w++) y[w].updateSolveMassProperties();
                var x = r, g = s, b = n;
                x.length = v, g.length = v, b.length = v;
                for (w = 0; w !== v; w++) {
                    var B = d[w];
                    b[w] = 0, g[w] = B.computeB(m), x[w] = 1 / B.computeC();
                }
                if (0 !== v) {
                    for (w = 0; w !== f; w++) {
                        var S = (A = y[w]).vlambda, E = A.wlambda;
                        S.set(0, 0, 0), E && E.set(0, 0, 0);
                    }
                    for (c = 0; c !== p; c++) {
                        l = 0;
                        for (var C = 0; C !== v; C++) {
                            B = d[C];
                            o = g[C], i = x[C], (h = b[C]) + (a = i * (o - B.computeGWlambda() - B.eps * h)) < B.minForce ? a = B.minForce - h : h + a > B.maxForce && (a = B.maxForce - h), 
                            b[C] += a, l += a > 0 ? a : -a, B.addToWlambda(a);
                        }
                        if (l * l < u) break;
                    }
                    for (w = 0; w !== f; w++) {
                        var A, R = (A = y[w]).velocity, P = A.angularVelocity;
                        R.vadd(A.vlambda, R), P && P.vadd(A.wlambda, P);
                    }
                }
                return c;
            };
        }, {
            "../math/Quaternion": 28,
            "../math/Vec3": 30,
            "./Solver": 47
        } ],
        47: [ function(t, e, o) {
            function Solver() {
                this.equations = [];
            }
            e.exports = Solver, Solver.prototype.solve = function(t, e) {
                return 0;
            }, Solver.prototype.addEquation = function(t) {
                t.enabled && this.equations.push(t);
            }, Solver.prototype.removeEquation = function(t) {
                var e = this.equations, o = e.indexOf(t);
                -1 !== o && e.splice(o, 1);
            }, Solver.prototype.removeAllEquations = function() {
                this.equations.length = 0;
            };
        }, {} ],
        48: [ function(t, e, o) {
            e.exports = SplitSolver;
            t("../math/Vec3"), t("../math/Quaternion");
            var i = t("./Solver"), n = t("../objects/Body");
            function SplitSolver(t) {
                for (i.call(this), this.iterations = 10, this.tolerance = 1e-7, this.subsolver = t, 
                this.nodes = [], this.nodePool = []; this.nodePool.length < 128; ) this.nodePool.push(this.createNode());
            }
            SplitSolver.prototype = new i();
            var r = [], s = [], a = {
                bodies: []
            }, l = n.STATIC;
            function getUnvisitedNode(t) {
                for (var e = t.length, o = 0; o !== e; o++) {
                    var i = t[o];
                    if (!(i.visited || i.body.type & l)) return i;
                }
                return !1;
            }
            var h = [];
            function bfs(t, e, o, i) {
                for (h.push(t), t.visited = !0, e(t, o, i); h.length; ) for (var n, r = h.pop(); n = getUnvisitedNode(r.children); ) n.visited = !0, 
                e(n, o, i), h.push(n);
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
            SplitSolver.prototype.createNode = function() {
                return {
                    body: null,
                    children: [],
                    eqs: [],
                    visited: !1
                };
            }, SplitSolver.prototype.solve = function(t, e) {
                for (var o = r, i = this.nodePool, n = e.bodies, l = this.equations, h = l.length, c = n.length, p = this.subsolver; i.length < c; ) i.push(this.createNode());
                o.length = c;
                for (var u = 0; u < c; u++) o[u] = i[u];
                for (u = 0; u !== c; u++) {
                    var d = o[u];
                    d.body = n[u], d.children.length = 0, d.eqs.length = 0, d.visited = !1;
                }
                for (var v = 0; v !== h; v++) {
                    var y = l[v], f = (u = n.indexOf(y.bi), n.indexOf(y.bj)), m = o[u], w = o[f];
                    m.children.push(w), m.eqs.push(y), w.children.push(m), w.eqs.push(y);
                }
                var x, g = 0, b = s;
                p.tolerance = this.tolerance, p.iterations = this.iterations;
                for (var B = a; x = getUnvisitedNode(o); ) {
                    b.length = 0, B.bodies.length = 0, bfs(x, visitFunc, B.bodies, b);
                    var S = b.length;
                    b = b.sort(sortById);
                    for (u = 0; u !== S; u++) p.addEquation(b[u]);
                    p.solve(t, B);
                    p.removeAllEquations(), g++;
                }
                return g;
            };
        }, {
            "../math/Quaternion": 28,
            "../math/Vec3": 30,
            "../objects/Body": 31,
            "./Solver": 47
        } ],
        49: [ function(t, e, o) {
            var i = function() {};
            e.exports = i, i.prototype = {
                constructor: i,
                addEventListener: function(t, e) {
                    void 0 === this._listeners && (this._listeners = {});
                    var o = this._listeners;
                    return void 0 === o[t] && (o[t] = []), -1 === o[t].indexOf(e) && o[t].push(e), this;
                },
                hasEventListener: function(t, e) {
                    if (void 0 === this._listeners) return !1;
                    var o = this._listeners;
                    return void 0 !== o[t] && -1 !== o[t].indexOf(e);
                },
                removeEventListener: function(t, e) {
                    if (void 0 === this._listeners) return this;
                    var o = this._listeners;
                    if (void 0 === o[t]) return this;
                    var i = o[t].indexOf(e);
                    return -1 !== i && o[t].splice(i, 1), this;
                },
                dispatchEvent: function(t) {
                    if (void 0 === this._listeners) return this;
                    var e = this._listeners[t.type];
                    if (void 0 !== e) {
                        t.target = this;
                        for (var o = 0, i = e.length; o < i; o++) e[o].call(this, t);
                    }
                    return this;
                }
            };
        }, {} ],
        50: [ function(t, e, o) {
            var i = t("../collision/AABB"), n = t("../math/Vec3");
            function OctreeNode(t) {
                t = t || {}, this.root = t.root || null, this.aabb = t.aabb ? t.aabb.clone() : new i(), 
                this.data = [], this.children = [];
            }
            function Octree(t, e) {
                (e = e || {}).root = null, e.aabb = t, OctreeNode.call(this, e), this.maxDepth = void 0 !== e.maxDepth ? e.maxDepth : 8;
            }
            e.exports = Octree, Octree.prototype = new OctreeNode(), OctreeNode.prototype.reset = function(t, e) {
                this.children.length = this.data.length = 0;
            }, OctreeNode.prototype.insert = function(t, e, o) {
                var i = this.data;
                if (o = o || 0, !this.aabb.contains(t)) return !1;
                var n = this.children;
                if (o < (this.maxDepth || this.root.maxDepth)) {
                    var r = !1;
                    n.length || (this.subdivide(), r = !0);
                    for (var s = 0; 8 !== s; s++) if (n[s].insert(t, e, o + 1)) return !0;
                    r && (n.length = 0);
                }
                return i.push(e), !0;
            };
            var r = new n();
            OctreeNode.prototype.subdivide = function() {
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
                for (var a = this.root || this, l = 0; 8 !== l; l++) {
                    var h = s[l];
                    h.root = a;
                    var c = h.aabb.lowerBound;
                    c.x *= r.x, c.y *= r.y, c.z *= r.z, c.vadd(e, c), c.vadd(r, h.aabb.upperBound);
                }
            }, OctreeNode.prototype.aabbQuery = function(t, e) {
                this.data, this.children;
                for (var o = [ this ]; o.length; ) {
                    var i = o.pop();
                    i.aabb.overlaps(t) && Array.prototype.push.apply(e, i.data), Array.prototype.push.apply(o, i.children);
                }
                return e;
            };
            var s = new i();
            OctreeNode.prototype.rayQuery = function(t, e, o) {
                return t.getAABB(s), s.toLocalFrame(e, s), this.aabbQuery(s, o), o;
            }, OctreeNode.prototype.removeEmptyNodes = function() {
                for (var t = [ this ]; t.length; ) {
                    for (var e = t.pop(), o = e.children.length - 1; o >= 0; o--) e.children[o].data.length || e.children.splice(o, 1);
                    Array.prototype.push.apply(t, e.children);
                }
            };
        }, {
            "../collision/AABB": 3,
            "../math/Vec3": 30
        } ],
        51: [ function(t, e, o) {
            function Pool() {
                this.objects = [], this.type = Object;
            }
            e.exports = Pool, Pool.prototype.release = function() {
                for (var t = arguments.length, e = 0; e !== t; e++) this.objects.push(arguments[e]);
            }, Pool.prototype.get = function() {
                return 0 === this.objects.length ? this.constructObject() : this.objects.pop();
            }, Pool.prototype.constructObject = function() {
                throw new Error("constructObject() not implemented in this Pool subclass yet!");
            };
        }, {} ],
        52: [ function(t, e, o) {
            function TupleDictionary() {
                this.data = {
                    keys: []
                };
            }
            e.exports = TupleDictionary, TupleDictionary.prototype.get = function(t, e) {
                if (t > e) {
                    var o = e;
                    e = t, t = o;
                }
                return this.data[t + "-" + e];
            }, TupleDictionary.prototype.set = function(t, e, o) {
                if (t > e) {
                    var i = e;
                    e = t, t = i;
                }
                var n = t + "-" + e;
                this.get(t, e) || this.data.keys.push(n), this.data[n] = o;
            }, TupleDictionary.prototype.reset = function() {
                for (var t = this.data, e = t.keys; e.length > 0; ) {
                    delete t[e.pop()];
                }
            };
        }, {} ],
        53: [ function(t, e, o) {
            function Utils() {}
            e.exports = Utils, Utils.defaults = function(t, e) {
                for (var o in t = t || {}, e) o in t || (t[o] = e[o]);
                return t;
            };
        }, {} ],
        54: [ function(t, e, o) {
            e.exports = Vec3Pool;
            var i = t("../math/Vec3"), n = t("./Pool");
            function Vec3Pool() {
                n.call(this), this.type = i;
            }
            Vec3Pool.prototype = new n(), Vec3Pool.prototype.constructObject = function() {
                return new i();
            };
        }, {
            "../math/Vec3": 30,
            "./Pool": 51
        } ],
        55: [ function(t, e, o) {
            e.exports = Narrowphase;
            var i = t("../collision/AABB"), n = t("../shapes/Shape"), r = t("../collision/Ray"), s = t("../math/Vec3"), a = t("../math/Transform"), l = (t("../shapes/ConvexPolyhedron"), 
            t("../math/Quaternion")), h = (t("../solver/Solver"), t("../utils/Vec3Pool")), c = t("../equations/ContactEquation"), p = t("../equations/FrictionEquation");
            function Narrowphase(t) {
                this.contactPointPool = [], this.frictionEquationPool = [], this.result = [], this.frictionResult = [], 
                this.v3pool = new h(), this.world = t, this.currentContactMaterial = null, this.enableFrictionReduction = !1;
            }
            Narrowphase.prototype.createContactEquation = function(t, e, o, i, n, r) {
                var s;
                this.contactPointPool.length ? ((s = this.contactPointPool.pop()).bi = t, s.bj = e) : s = new c(t, e), 
                s.enabled = t.collisionResponse && e.collisionResponse && o.collisionResponse && i.collisionResponse;
                var a = this.currentContactMaterial;
                s.restitution = a.restitution, s.setSpookParams(a.contactEquationStiffness, a.contactEquationRelaxation, this.world.dt);
                var l = o.material || t.material, h = i.material || e.material;
                return l && h && l.restitution >= 0 && h.restitution >= 0 && (s.restitution = l.restitution * h.restitution), 
                s.si = n || o, s.sj = r || i, s;
            }, Narrowphase.prototype.createFrictionEquationsFromContact = function(t, e) {
                var o = t.bi, i = t.bj, n = t.si, r = t.sj, s = this.world, a = this.currentContactMaterial, l = a.friction, h = n.material || o.material, c = r.material || i.material;
                if (h && c && h.friction >= 0 && c.friction >= 0 && (l = h.friction * c.friction), 
                l > 0) {
                    var u = l * s.gravity.length(), d = o.invMass + i.invMass;
                    d > 0 && (d = 1 / d);
                    var v = this.frictionEquationPool, y = v.length ? v.pop() : new p(o, i, u * d), f = v.length ? v.pop() : new p(o, i, u * d);
                    return y.bi = f.bi = o, y.bj = f.bj = i, y.minForce = f.minForce = -u * d, y.maxForce = f.maxForce = u * d, 
                    y.ri.copy(t.ri), y.rj.copy(t.rj), f.ri.copy(t.ri), f.rj.copy(t.rj), t.ni.tangents(y.t, f.t), 
                    y.setSpookParams(a.frictionEquationStiffness, a.frictionEquationRelaxation, s.dt), 
                    f.setSpookParams(a.frictionEquationStiffness, a.frictionEquationRelaxation, s.dt), 
                    y.enabled = f.enabled = t.enabled, e.push(y, f), !0;
                }
                return !1;
            };
            var u = new s(), d = new s(), v = new s();
            Narrowphase.prototype.createFrictionFromAverage = function(t) {
                var e = this.result[this.result.length - 1];
                if (this.createFrictionEquationsFromContact(e, this.frictionResult) && 1 !== t) {
                    var o = this.frictionResult[this.frictionResult.length - 2], i = this.frictionResult[this.frictionResult.length - 1];
                    u.setZero(), d.setZero(), v.setZero();
                    for (var n = e.bi, r = (e.bj, 0); r !== t; r++) (e = this.result[this.result.length - 1 - r]).bodyA !== n ? (u.vadd(e.ni, u), 
                    d.vadd(e.ri, d), v.vadd(e.rj, v)) : (u.vsub(e.ni, u), d.vadd(e.rj, d), v.vadd(e.ri, v));
                    var s = 1 / t;
                    d.scale(s, o.ri), v.scale(s, o.rj), i.ri.copy(o.ri), i.rj.copy(o.rj), u.normalize(), 
                    u.tangents(o.t, i.t);
                }
            };
            var y = new s(), f = new s(), m = new l(), w = new l();
            Narrowphase.prototype.getContacts = function(t, e, o, i, n, r, s) {
                this.contactPointPool = n, this.frictionEquationPool = s, this.result = i, this.frictionResult = r;
                for (var a = m, l = w, h = y, c = f, p = 0, u = t.length; p !== u; p++) {
                    var d = t[p], v = e[p], x = !1;
                    d.material && v.material && (x = !0);
                    for (var g = 0; g < d.shapes.length; g++) {
                        d.quaternion.mult(d.shapeOrientations[g], a), d.quaternion.vmult(d.shapeOffsets[g], h), 
                        h.vadd(d.position, h);
                        for (var b = d.shapes[g], B = 0; B < v.shapes.length; B++) {
                            v.quaternion.mult(v.shapeOrientations[B], l), v.quaternion.vmult(v.shapeOffsets[B], c), 
                            c.vadd(v.position, c);
                            var S = v.shapes[B];
                            if (!(h.distanceTo(c) > b.boundingSphereRadius + S.boundingSphereRadius)) {
                                b.material && S.material && (o.getContactMaterial(b.material, S.material) || null), 
                                x ? (this.currentContactMaterial = o.defaultContactMaterial2, this.currentContactMaterial.materials[0] = d.material, 
                                this.currentContactMaterial.materials[1] = v.material, this.currentContactMaterial.friction = d.material.friction + v.material.friction, 
                                this.currentContactMaterial.restitution = d.material.restitution * v.material.restitution) : this.currentContactMaterial = o.defaultContactMaterial2, 
                                this.currentContactMaterial = o.defaultContactMaterial2;
                                var E = this[b.type | S.type];
                                E && (b.type < S.type ? E.call(this, b, S, h, c, a, l, d, v, b, S) : E.call(this, S, b, c, h, l, a, v, d, b, S));
                            }
                        }
                    }
                }
            };
            Narrowphase.prototype[n.types.BOX | n.types.BOX] = Narrowphase.prototype.boxBox = function(t, e, o, i, n, r, s, a) {
                t.convexPolyhedronRepresentation.material = t.material, e.convexPolyhedronRepresentation.material = e.material, 
                t.convexPolyhedronRepresentation.collisionResponse = t.collisionResponse, e.convexPolyhedronRepresentation.collisionResponse = e.collisionResponse, 
                this.convexConvex(t.convexPolyhedronRepresentation, e.convexPolyhedronRepresentation, o, i, n, r, s, a, t, e);
            }, Narrowphase.prototype[n.types.BOX | n.types.CONVEXPOLYHEDRON] = Narrowphase.prototype.boxConvex = function(t, e, o, i, n, r, s, a) {
                t.convexPolyhedronRepresentation.material = t.material, t.convexPolyhedronRepresentation.collisionResponse = t.collisionResponse, 
                this.convexConvex(t.convexPolyhedronRepresentation, e, o, i, n, r, s, a, t, e);
            }, Narrowphase.prototype[n.types.BOX | n.types.PARTICLE] = Narrowphase.prototype.boxParticle = function(t, e, o, i, n, r, s, a) {
                t.convexPolyhedronRepresentation.material = t.material, t.convexPolyhedronRepresentation.collisionResponse = t.collisionResponse, 
                this.convexParticle(t.convexPolyhedronRepresentation, e, o, i, n, r, s, a, t, e);
            }, Narrowphase.prototype[n.types.SPHERE] = Narrowphase.prototype.sphereSphere = function(t, e, o, i, n, r, s, a) {
                var l = this.createContactEquation(s, a, t, e);
                i.vsub(o, l.ni), l.ni.normalize(), l.ri.copy(l.ni), l.rj.copy(l.ni), l.ri.mult(t.radius, l.ri), 
                l.rj.mult(-e.radius, l.rj), l.ri.vadd(o, l.ri), l.ri.vsub(s.position, l.ri), l.rj.vadd(i, l.rj), 
                l.rj.vsub(a.position, l.rj), this.result.push(l), this.createFrictionEquationsFromContact(l, this.frictionResult);
            };
            var x = new s(), g = new s(), b = new s();
            Narrowphase.prototype[n.types.PLANE | n.types.TRIMESH] = Narrowphase.prototype.planeTrimesh = function(t, e, o, i, n, r, l, h) {
                var c = new s(), p = x;
                p.set(0, 0, 1), n.vmult(p, p);
                for (var u = 0; u < e.vertices.length / 3; u++) {
                    e.getVertex(u, c);
                    var d = new s();
                    d.copy(c), a.pointToWorldFrame(i, r, d, c);
                    var v = g;
                    if (c.vsub(o, v), p.dot(v) <= 0) {
                        var y = this.createContactEquation(l, h, t, e);
                        y.ni.copy(p);
                        var f = b;
                        p.scale(v.dot(p), f), c.vsub(f, f), y.ri.copy(f), y.ri.vsub(l.position, y.ri), y.rj.copy(c), 
                        y.rj.vsub(h.position, y.rj), this.result.push(y), this.createFrictionEquationsFromContact(y, this.frictionResult);
                    }
                }
            };
            var B = new s(), S = new s(), E = (new s(), new s()), C = new s(), A = new s(), R = new s(), P = new s(), M = new s(), q = new s(), V = new s(), z = new s(), T = new s(), N = new s(), F = new i(), I = [];
            Narrowphase.prototype[n.types.SPHERE | n.types.TRIMESH] = Narrowphase.prototype.sphereTrimesh = function(t, e, o, i, n, s, l, h) {
                var c = A, p = R, u = P, d = M, v = q, y = V, f = F, m = C, w = S, x = I;
                a.pointToLocalFrame(i, s, o, v);
                var g = t.radius;
                f.lowerBound.set(v.x - g, v.y - g, v.z - g), f.upperBound.set(v.x + g, v.y + g, v.z + g), 
                e.getTrianglesInAABB(f, x);
                for (var b = E, W = t.radius * t.radius, L = 0; L < x.length; L++) for (var j = 0; j < 3; j++) {
                    if (e.getVertex(e.indices[3 * x[L] + j], b), b.vsub(v, w), w.norm2() <= W) m.copy(b), 
                    a.pointToWorldFrame(i, s, m, b), b.vsub(o, w), (k = this.createContactEquation(l, h, t, e)).ni.copy(w), 
                    k.ni.normalize(), k.ri.copy(k.ni), k.ri.scale(t.radius, k.ri), k.ri.vadd(o, k.ri), 
                    k.ri.vsub(l.position, k.ri), k.rj.copy(b), k.rj.vsub(h.position, k.rj), this.result.push(k), 
                    this.createFrictionEquationsFromContact(k, this.frictionResult);
                }
                for (L = 0; L < x.length; L++) for (j = 0; j < 3; j++) {
                    e.getVertex(e.indices[3 * x[L] + j], c), e.getVertex(e.indices[3 * x[L] + (j + 1) % 3], p), 
                    p.vsub(c, u), v.vsub(p, y);
                    var O = y.dot(u);
                    v.vsub(c, y);
                    var H = y.dot(u);
                    if (H > 0 && O < 0) if (v.vsub(c, y), d.copy(u), d.normalize(), H = y.dot(d), d.scale(H, y), 
                    y.vadd(c, y), (X = y.distanceTo(v)) < t.radius) {
                        var k = this.createContactEquation(l, h, t, e);
                        y.vsub(v, k.ni), k.ni.normalize(), k.ni.scale(t.radius, k.ri), a.pointToWorldFrame(i, s, y, y), 
                        y.vsub(h.position, k.rj), a.vectorToWorldFrame(s, k.ni, k.ni), a.vectorToWorldFrame(s, k.ri, k.ri), 
                        this.result.push(k), this.createFrictionEquationsFromContact(k, this.frictionResult);
                    }
                }
                for (var _ = z, U = T, D = N, Q = B, G = (L = 0, x.length); L !== G; L++) {
                    e.getTriangleVertices(x[L], _, U, D), e.getNormal(x[L], Q), v.vsub(_, y);
                    var X = y.dot(Q);
                    if (Q.scale(X, y), v.vsub(y, y), X = y.distanceTo(v), r.pointInTriangle(y, _, U, D) && X < t.radius) {
                        k = this.createContactEquation(l, h, t, e);
                        y.vsub(v, k.ni), k.ni.normalize(), k.ni.scale(t.radius, k.ri), a.pointToWorldFrame(i, s, y, y), 
                        y.vsub(h.position, k.rj), a.vectorToWorldFrame(s, k.ni, k.ni), a.vectorToWorldFrame(s, k.ri, k.ri), 
                        this.result.push(k), this.createFrictionEquationsFromContact(k, this.frictionResult);
                    }
                }
                x.length = 0;
            };
            var W = new s(), L = new s();
            Narrowphase.prototype[n.types.SPHERE | n.types.PLANE] = Narrowphase.prototype.spherePlane = function(t, e, o, i, n, r, s, a) {
                var l = this.createContactEquation(s, a, t, e);
                if (l.ni.set(0, 0, 1), r.vmult(l.ni, l.ni), l.ni.negate(l.ni), l.ni.normalize(), 
                l.ni.mult(t.radius, l.ri), o.vsub(i, W), l.ni.mult(l.ni.dot(W), L), W.vsub(L, l.rj), 
                -W.dot(l.ni) <= t.radius) {
                    var h = l.ri, c = l.rj;
                    h.vadd(o, h), h.vsub(s.position, h), c.vadd(i, c), c.vsub(a.position, c), this.result.push(l), 
                    this.createFrictionEquationsFromContact(l, this.frictionResult);
                }
            };
            var j = new s(), O = new s(), H = new s();
            function pointInPolygon(t, e, o) {
                for (var i = null, n = t.length, r = 0; r !== n; r++) {
                    var s = t[r], a = j;
                    t[(r + 1) % n].vsub(s, a);
                    var l = O;
                    a.cross(e, l);
                    var h = H;
                    o.vsub(s, h);
                    var c = l.dot(h);
                    if (!(null === i || c > 0 && !0 === i || c <= 0 && !1 === i)) return !1;
                    null === i && (i = c > 0);
                }
                return !0;
            }
            var k = new s(), _ = new s(), U = new s(), D = new s(), Q = [ new s(), new s(), new s(), new s(), new s(), new s() ], G = new s(), X = new s(), Y = new s(), Z = new s();
            Narrowphase.prototype[n.types.SPHERE | n.types.BOX] = Narrowphase.prototype.sphereBox = function(t, e, o, i, n, r, s, a) {
                var l = this.v3pool, h = Q;
                o.vsub(i, k), e.getSideNormals(h, r);
                for (var c = t.radius, p = !1, u = X, d = Y, v = Z, y = null, f = 0, m = 0, w = 0, x = null, g = 0, b = h.length; g !== b && !1 === p; g++) {
                    var B = _;
                    B.copy(h[g]);
                    var S = B.norm();
                    B.normalize();
                    var E = k.dot(B);
                    if (E < S + c && E > 0) {
                        var C = U, A = D;
                        C.copy(h[(g + 1) % 3]), A.copy(h[(g + 2) % 3]);
                        var R = C.norm(), P = A.norm();
                        C.normalize(), A.normalize();
                        var M = k.dot(C), q = k.dot(A);
                        if (M < R && M > -R && q < P && q > -P) {
                            var V = Math.abs(E - S - c);
                            (null === x || V < x) && (x = V, m = M, w = q, y = S, u.copy(B), d.copy(C), v.copy(A), 
                            f++);
                        }
                    }
                }
                if (f) {
                    p = !0;
                    var z = this.createContactEquation(s, a, t, e);
                    u.mult(-c, z.ri), z.ni.copy(u), z.ni.negate(z.ni), u.mult(y, u), d.mult(m, d), u.vadd(d, u), 
                    v.mult(w, v), u.vadd(v, z.rj), z.ri.vadd(o, z.ri), z.ri.vsub(s.position, z.ri), 
                    z.rj.vadd(i, z.rj), z.rj.vsub(a.position, z.rj), this.result.push(z), this.createFrictionEquationsFromContact(z, this.frictionResult);
                }
                for (var T = l.get(), N = G, F = 0; 2 !== F && !p; F++) for (var I = 0; 2 !== I && !p; I++) for (var W = 0; 2 !== W && !p; W++) {
                    if (T.set(0, 0, 0), F ? T.vadd(h[0], T) : T.vsub(h[0], T), I ? T.vadd(h[1], T) : T.vsub(h[1], T), 
                    W ? T.vadd(h[2], T) : T.vsub(h[2], T), i.vadd(T, N), N.vsub(o, N), N.norm2() < c * c) p = !0, 
                    (z = this.createContactEquation(s, a, t, e)).ri.copy(N), z.ri.normalize(), z.ni.copy(z.ri), 
                    z.ri.mult(c, z.ri), z.rj.copy(T), z.ri.vadd(o, z.ri), z.ri.vsub(s.position, z.ri), 
                    z.rj.vadd(i, z.rj), z.rj.vsub(a.position, z.rj), this.result.push(z), this.createFrictionEquationsFromContact(z, this.frictionResult);
                }
                l.release(T), T = null;
                var L = l.get(), j = l.get(), O = (z = l.get(), l.get()), H = (V = l.get(), h.length);
                for (F = 0; F !== H && !p; F++) for (I = 0; I !== H && !p; I++) if (F % 3 != I % 3) {
                    h[I].cross(h[F], L), L.normalize(), h[F].vadd(h[I], j), z.copy(o), z.vsub(j, z), 
                    z.vsub(i, z);
                    var K = z.dot(L);
                    L.mult(K, O);
                    for (W = 0; W === F % 3 || W === I % 3; ) W++;
                    V.copy(o), V.vsub(O, V), V.vsub(j, V), V.vsub(i, V);
                    var J = Math.abs(K), $ = V.norm();
                    if (J < h[W].norm() && $ < c) {
                        p = !0;
                        var tt = this.createContactEquation(s, a, t, e);
                        j.vadd(O, tt.rj), tt.rj.copy(tt.rj), V.negate(tt.ni), tt.ni.normalize(), tt.ri.copy(tt.rj), 
                        tt.ri.vadd(i, tt.ri), tt.ri.vsub(o, tt.ri), tt.ri.normalize(), tt.ri.mult(c, tt.ri), 
                        tt.ri.vadd(o, tt.ri), tt.ri.vsub(s.position, tt.ri), tt.rj.vadd(i, tt.rj), tt.rj.vsub(a.position, tt.rj), 
                        this.result.push(tt), this.createFrictionEquationsFromContact(tt, this.frictionResult);
                    }
                }
                l.release(L, j, z, O, V);
            };
            var K = new s(), J = new s(), $ = new s(), tt = new s(), et = new s(), ot = new s(), it = new s(), nt = new s(), rt = new s(), st = new s();
            Narrowphase.prototype[n.types.SPHERE | n.types.CONVEXPOLYHEDRON] = Narrowphase.prototype.sphereConvex = function(t, e, o, i, n, r, s, a) {
                var l = this.v3pool;
                o.vsub(i, K);
                for (var h = e.faceNormals, c = e.faces, p = e.vertices, u = t.radius, d = 0; d !== p.length; d++) {
                    var v = p[d], y = et;
                    r.vmult(v, y), i.vadd(y, y);
                    var f = tt;
                    if (y.vsub(o, f), f.norm2() < u * u) return m = !0, (V = this.createContactEquation(s, a, t, e)).ri.copy(f), 
                    V.ri.normalize(), V.ni.copy(V.ri), V.ri.mult(u, V.ri), y.vsub(i, V.rj), V.ri.vadd(o, V.ri), 
                    V.ri.vsub(s.position, V.ri), V.rj.vadd(i, V.rj), V.rj.vsub(a.position, V.rj), this.result.push(V), 
                    void this.createFrictionEquationsFromContact(V, this.frictionResult);
                }
                for (var m = !1, w = (d = 0, c.length); d !== w && !1 === m; d++) {
                    var x = h[d], g = c[d], b = ot;
                    r.vmult(x, b);
                    var B = it;
                    r.vmult(p[g[0]], B), B.vadd(i, B);
                    var S = nt;
                    b.mult(-u, S), o.vadd(S, S);
                    var E = rt;
                    S.vsub(B, E);
                    var C = E.dot(b), A = st;
                    if (o.vsub(B, A), C < 0 && A.dot(b) > 0) {
                        for (var R = [], P = 0, M = g.length; P !== M; P++) {
                            var q = l.get();
                            r.vmult(p[g[P]], q), i.vadd(q, q), R.push(q);
                        }
                        if (pointInPolygon(R, b, o)) {
                            m = !0;
                            var V = this.createContactEquation(s, a, t, e);
                            b.mult(-u, V.ri), b.negate(V.ni);
                            var z = l.get();
                            b.mult(-C, z);
                            var T = l.get();
                            b.mult(-u, T), o.vsub(i, V.rj), V.rj.vadd(T, V.rj), V.rj.vadd(z, V.rj), V.rj.vadd(i, V.rj), 
                            V.rj.vsub(a.position, V.rj), V.ri.vadd(o, V.ri), V.ri.vsub(s.position, V.ri), l.release(z), 
                            l.release(T), this.result.push(V), this.createFrictionEquationsFromContact(V, this.frictionResult);
                            P = 0;
                            for (var N = R.length; P !== N; P++) l.release(R[P]);
                            return;
                        }
                        for (P = 0; P !== g.length; P++) {
                            var F = l.get(), I = l.get();
                            r.vmult(p[g[(P + 1) % g.length]], F), r.vmult(p[g[(P + 2) % g.length]], I), i.vadd(F, F), 
                            i.vadd(I, I);
                            var W = J;
                            I.vsub(F, W);
                            var L = $;
                            W.unit(L);
                            var j = l.get(), O = l.get();
                            o.vsub(F, O);
                            var H = O.dot(L);
                            L.mult(H, j), j.vadd(F, j);
                            var k = l.get();
                            if (j.vsub(o, k), H > 0 && H * H < W.norm2() && k.norm2() < u * u) {
                                V = this.createContactEquation(s, a, t, e);
                                j.vsub(i, V.rj), j.vsub(o, V.ni), V.ni.normalize(), V.ni.mult(u, V.ri), V.rj.vadd(i, V.rj), 
                                V.rj.vsub(a.position, V.rj), V.ri.vadd(o, V.ri), V.ri.vsub(s.position, V.ri), this.result.push(V), 
                                this.createFrictionEquationsFromContact(V, this.frictionResult);
                                for (P = 0, N = R.length; P !== N; P++) l.release(R[P]);
                                return l.release(F), l.release(I), l.release(j), l.release(k), void l.release(O);
                            }
                            l.release(F), l.release(I), l.release(j), l.release(k), l.release(O);
                        }
                        for (P = 0, N = R.length; P !== N; P++) l.release(R[P]);
                    }
                }
            };
            new s(), new s();
            Narrowphase.prototype[n.types.PLANE | n.types.BOX] = Narrowphase.prototype.planeBox = function(t, e, o, i, n, r, s, a) {
                e.convexPolyhedronRepresentation.material = e.material, e.convexPolyhedronRepresentation.collisionResponse = e.collisionResponse, 
                this.planeConvex(t, e.convexPolyhedronRepresentation, o, i, n, r, s, a);
            };
            var at = new s(), lt = new s(), ht = new s(), ct = new s();
            Narrowphase.prototype[n.types.PLANE | n.types.CONVEXPOLYHEDRON] = Narrowphase.prototype.planeConvex = function(t, e, o, i, n, r, s, a) {
                var l = at, h = lt;
                h.set(0, 0, 1), n.vmult(h, h);
                for (var c = 0, p = ht, u = 0; u !== e.vertices.length; u++) {
                    if (l.copy(e.vertices[u]), r.vmult(l, l), i.vadd(l, l), l.vsub(o, p), h.dot(p) <= 0) {
                        var d = this.createContactEquation(s, a, t, e), v = ct;
                        h.mult(h.dot(p), v), l.vsub(v, v), v.vsub(o, d.ri), d.ni.copy(h), l.vsub(i, d.rj), 
                        d.ri.vadd(o, d.ri), d.ri.vsub(s.position, d.ri), d.rj.vadd(i, d.rj), d.rj.vsub(a.position, d.rj), 
                        this.result.push(d), c++, this.enableFrictionReduction || this.createFrictionEquationsFromContact(d, this.frictionResult);
                    }
                }
                this.enableFrictionReduction && c && this.createFrictionFromAverage(c);
            };
            var pt = new s(), ut = new s();
            Narrowphase.prototype[n.types.CONVEXPOLYHEDRON] = Narrowphase.prototype.convexConvex = function(t, e, o, i, n, r, s, a, l, h, c, p) {
                var u = pt;
                if (!(o.distanceTo(i) > t.boundingSphereRadius + e.boundingSphereRadius) && t.findSeparatingAxis(e, o, n, i, r, u, c, p)) {
                    var d = [], v = ut;
                    t.clipAgainstHull(o, n, e, i, r, u, -100, 100, d);
                    for (var y = 0, f = 0; f !== d.length; f++) {
                        var m = this.createContactEquation(s, a, t, e, l, h), w = m.ri, x = m.rj;
                        u.negate(m.ni), d[f].normal.negate(v), v.mult(d[f].depth, v), d[f].point.vadd(v, w), 
                        x.copy(d[f].point), w.vsub(o, w), x.vsub(i, x), w.vadd(o, w), w.vsub(s.position, w), 
                        x.vadd(i, x), x.vsub(a.position, x), this.result.push(m), y++, this.enableFrictionReduction || this.createFrictionEquationsFromContact(m, this.frictionResult);
                    }
                    this.enableFrictionReduction && y && this.createFrictionFromAverage(y);
                }
            };
            var dt = new s(), vt = new s(), yt = new s();
            Narrowphase.prototype[n.types.PLANE | n.types.PARTICLE] = Narrowphase.prototype.planeParticle = function(t, e, o, i, n, r, s, a) {
                var l = dt;
                l.set(0, 0, 1), s.quaternion.vmult(l, l);
                var h = vt;
                if (i.vsub(s.position, h), l.dot(h) <= 0) {
                    var c = this.createContactEquation(a, s, e, t);
                    c.ni.copy(l), c.ni.negate(c.ni), c.ri.set(0, 0, 0);
                    var p = yt;
                    l.mult(l.dot(i), p), i.vsub(p, p), c.rj.copy(p), this.result.push(c), this.createFrictionEquationsFromContact(c, this.frictionResult);
                }
            };
            var ft = new s();
            Narrowphase.prototype[n.types.PARTICLE | n.types.SPHERE] = Narrowphase.prototype.sphereParticle = function(t, e, o, i, n, r, s, a) {
                var l = ft;
                if (l.set(0, 0, 1), i.vsub(o, l), l.norm2() <= t.radius * t.radius) {
                    var h = this.createContactEquation(a, s, e, t);
                    l.normalize(), h.rj.copy(l), h.rj.mult(t.radius, h.rj), h.ni.copy(l), h.ni.negate(h.ni), 
                    h.ri.set(0, 0, 0), this.result.push(h), this.createFrictionEquationsFromContact(h, this.frictionResult);
                }
            };
            var mt = new l(), wt = new s(), xt = (new s(), new s()), gt = new s(), bt = new s();
            Narrowphase.prototype[n.types.PARTICLE | n.types.CONVEXPOLYHEDRON] = Narrowphase.prototype.convexParticle = function(t, e, o, i, n, r, s, a) {
                var l = -1, h = xt, c = bt, p = null, u = wt;
                if (u.copy(i), u.vsub(o, u), n.conjugate(mt), mt.vmult(u, u), t.pointIsInside(u)) {
                    t.worldVerticesNeedsUpdate && t.computeWorldVertices(o, n), t.worldFaceNormalsNeedsUpdate && t.computeWorldFaceNormals(n);
                    for (var d = 0, v = t.faces.length; d !== v; d++) {
                        var y = [ t.worldVertices[t.faces[d][0]] ], f = t.worldFaceNormals[d];
                        i.vsub(y[0], gt);
                        var m = -f.dot(gt);
                        (null === p || Math.abs(m) < Math.abs(p)) && (p = m, l = d, h.copy(f), 0);
                    }
                    if (-1 !== l) {
                        var w = this.createContactEquation(a, s, e, t);
                        h.mult(p, c), c.vadd(i, c), c.vsub(o, c), w.rj.copy(c), h.negate(w.ni), w.ri.set(0, 0, 0);
                        var x = w.ri, g = w.rj;
                        x.vadd(i, x), x.vsub(a.position, x), g.vadd(o, g), g.vsub(s.position, g), this.result.push(w), 
                        this.createFrictionEquationsFromContact(w, this.frictionResult);
                    } else console.warn("Point found inside convex, but did not find penetrating face!");
                }
            }, Narrowphase.prototype[n.types.BOX | n.types.HEIGHTFIELD] = Narrowphase.prototype.boxHeightfield = function(t, e, o, i, n, r, s, a) {
                t.convexPolyhedronRepresentation.material = t.material, t.convexPolyhedronRepresentation.collisionResponse = t.collisionResponse, 
                this.convexHeightfield(t.convexPolyhedronRepresentation, e, o, i, n, r, s, a);
            };
            var Bt = new s(), St = new s(), Et = [ 0 ];
            Narrowphase.prototype[n.types.CONVEXPOLYHEDRON | n.types.HEIGHTFIELD] = Narrowphase.prototype.convexHeightfield = function(t, e, o, i, n, r, s, l) {
                var h = e.data, c = e.elementSize, p = t.boundingSphereRadius, u = St, d = Et, v = Bt;
                a.pointToLocalFrame(i, r, o, v);
                var y = Math.floor((v.x - p) / c) - 1, f = Math.ceil((v.x + p) / c) + 1, m = Math.floor((v.y - p) / c) - 1, w = Math.ceil((v.y + p) / c) + 1;
                if (!(f < 0 || w < 0 || y > h.length || m > h[0].length)) {
                    y < 0 && (y = 0), f < 0 && (f = 0), m < 0 && (m = 0), w < 0 && (w = 0), y >= h.length && (y = h.length - 1), 
                    f >= h.length && (f = h.length - 1), w >= h[0].length && (w = h[0].length - 1), 
                    m >= h[0].length && (m = h[0].length - 1);
                    var x = [];
                    e.getRectMinMax(y, m, f, w, x);
                    var g = x[0], b = x[1];
                    if (!(v.z - p > b || v.z + p < g)) for (var B = y; B < f; B++) for (var S = m; S < w; S++) e.getConvexTrianglePillar(B, S, !1), 
                    a.pointToWorldFrame(i, r, e.pillarOffset, u), o.distanceTo(u) < e.pillarConvex.boundingSphereRadius + t.boundingSphereRadius && this.convexConvex(t, e.pillarConvex, o, u, n, r, s, l, null, null, d, null), 
                    e.getConvexTrianglePillar(B, S, !0), a.pointToWorldFrame(i, r, e.pillarOffset, u), 
                    o.distanceTo(u) < e.pillarConvex.boundingSphereRadius + t.boundingSphereRadius && this.convexConvex(t, e.pillarConvex, o, u, n, r, s, l, null, null, d, null);
                }
            };
            var Ct = new s(), At = new s();
            Narrowphase.prototype[n.types.SPHERE | n.types.HEIGHTFIELD] = Narrowphase.prototype.sphereHeightfield = function(t, e, o, i, n, r, s, l) {
                var h = e.data, c = t.radius, p = e.elementSize, u = At, d = Ct;
                a.pointToLocalFrame(i, r, o, d);
                var v = Math.floor((d.x - c) / p) - 1, y = Math.ceil((d.x + c) / p) + 1, f = Math.floor((d.y - c) / p) - 1, m = Math.ceil((d.y + c) / p) + 1;
                if (!(y < 0 || m < 0 || v > h.length || m > h[0].length)) {
                    v < 0 && (v = 0), y < 0 && (y = 0), f < 0 && (f = 0), m < 0 && (m = 0), v >= h.length && (v = h.length - 1), 
                    y >= h.length && (y = h.length - 1), m >= h[0].length && (m = h[0].length - 1), 
                    f >= h[0].length && (f = h[0].length - 1);
                    var w = [];
                    e.getRectMinMax(v, f, y, m, w);
                    var x = w[0], g = w[1];
                    if (!(d.z - c > g || d.z + c < x)) for (var b = this.result, B = v; B < y; B++) for (var S = f; S < m; S++) {
                        var E = b.length;
                        if (e.getConvexTrianglePillar(B, S, !1), a.pointToWorldFrame(i, r, e.pillarOffset, u), 
                        o.distanceTo(u) < e.pillarConvex.boundingSphereRadius + t.boundingSphereRadius && this.sphereConvex(t, e.pillarConvex, o, u, n, r, s, l), 
                        e.getConvexTrianglePillar(B, S, !0), a.pointToWorldFrame(i, r, e.pillarOffset, u), 
                        o.distanceTo(u) < e.pillarConvex.boundingSphereRadius + t.boundingSphereRadius && this.sphereConvex(t, e.pillarConvex, o, u, n, r, s, l), 
                        b.length - E > 2) return;
                    }
                }
            };
        }, {
            "../collision/AABB": 3,
            "../collision/Ray": 9,
            "../equations/ContactEquation": 19,
            "../equations/FrictionEquation": 21,
            "../math/Quaternion": 28,
            "../math/Transform": 29,
            "../math/Vec3": 30,
            "../shapes/ConvexPolyhedron": 38,
            "../shapes/Shape": 43,
            "../solver/Solver": 47,
            "../utils/Vec3Pool": 54
        } ],
        56: [ function(t, e, o) {
            e.exports = World;
            var i = t("../shapes/Shape"), n = t("../math/Vec3"), r = t("../math/Quaternion"), s = t("../solver/GSSolver"), a = (t("../utils/Vec3Pool"), 
            t("../equations/ContactEquation"), t("../equations/FrictionEquation"), t("./Narrowphase")), l = t("../utils/EventTarget"), h = t("../collision/ArrayCollisionMatrix"), c = t("../material/Material"), p = t("../material/ContactMaterial"), u = t("../objects/Body"), d = t("../utils/TupleDictionary"), v = t("../collision/RaycastResult"), y = t("../collision/AABB"), f = t("../collision/Ray"), m = t("../collision/NaiveBroadphase");
            function World() {
                l.apply(this), this.dt = -1, this.allowSleep = !1, this.contacts = [], this.allContacts = [], 
                this.frictionEquations = [], this.quatNormalizeSkip = 0, this.quatNormalizeFast = !1, 
                this.time = 0, this.stepnumber = 0, this.default_dt = 1 / 60, this.nextId = 0, this.gravity = new n(), 
                this.broadphase = new m(), this.bodies = [], this.callBackBody = [], this.solver = new s(), 
                this.constraints = [], this.narrowphase = new a(this), this.collisionMatrix = new h(), 
                this.collisionMatrixPrevious = new h(), this.materials = [], this.contactmaterials = [], 
                this.contactMaterialTable = new d(), this.defaultMaterial = new c("default"), this.defaultContactMaterial = new p(this.defaultMaterial, this.defaultMaterial, {
                    friction: .3,
                    restitution: 0
                }), this.defaultContactMaterial2 = new p(this.defaultMaterial, this.defaultMaterial, {
                    friction: .3,
                    restitution: 0
                }), this.doProfiling = !1, this.profile = {
                    solve: 0,
                    makeContactConstraints: 0,
                    broadphase: 0,
                    integrate: 0,
                    narrowphase: 0
                }, this.subsystems = [], this.addBodyEvent = {
                    type: "addBody",
                    body: null
                }, this.removeBodyEvent = {
                    type: "removeBody",
                    body: null
                };
            }
            World.prototype = new l();
            new y();
            var w = new f();
            if (World.prototype.getContactMaterial = function(t, e) {
                return this.contactMaterialTable.get(t.id, e.id);
            }, World.prototype.numObjects = function() {
                return this.bodies.length;
            }, World.prototype.collisionMatrixTick = function() {
                var t = this.collisionMatrixPrevious;
                this.collisionMatrixPrevious = this.collisionMatrix, this.collisionMatrix = t, this.collisionMatrix.reset();
            }, World.prototype.add = World.prototype.addBody = function(t) {
                -1 === this.bodies.indexOf(t) && (t.index = this.bodies.length, this.bodies.push(t), 
                t.world = this, t.initPosition.copy(t.position), t.initVelocity.copy(t.velocity), 
                t.timeLastSleepy = this.time, t instanceof u && (t.initAngularVelocity.copy(t.angularVelocity), 
                t.initQuaternion.copy(t.quaternion)), this.collisionMatrix.setNumObjects(this.bodies.length), 
                this.addBodyEvent.body = t, this.dispatchEvent(this.addBodyEvent));
            }, World.prototype.addConstraint = function(t) {
                this.constraints.push(t);
            }, World.prototype.removeConstraint = function(t) {
                var e = this.constraints.indexOf(t);
                -1 !== e && this.constraints.splice(e, 1);
            }, World.prototype.rayTest = function(t, e, o) {
                o instanceof v ? this.raycastClosest(t, e, {
                    skipBackfaces: !0
                }, o) : this.raycastAll(t, e, {
                    skipBackfaces: !0
                }, o);
            }, World.prototype.raycastAll = function(t, e, o, i) {
                return o.mode = f.ALL, o.from = t, o.to = e, o.callback = i, w.intersectWorld(this, o);
            }, World.prototype.raycastAny = function(t, e, o, i) {
                return o.mode = f.ANY, o.from = t, o.to = e, o.result = i, w.intersectWorld(this, o);
            }, World.prototype.raycastClosest = function(t, e, o, i) {
                return o.mode = f.CLOSEST, o.from = t, o.to = e, o.result = i, w.intersectWorld(this, o);
            }, World.prototype.remove = function(t) {
                t.world = null;
                var e = this.bodies.length - 1, o = this.bodies, i = o.indexOf(t);
                if (-1 !== i) {
                    o.splice(i, 1);
                    for (var n = 0; n !== o.length; n++) o[n].index = n;
                    this.collisionMatrix.setNumObjects(e), this.removeBodyEvent.body = t, this.dispatchEvent(this.removeBodyEvent);
                }
            }, World.prototype.removeBody = World.prototype.remove, World.prototype.addMaterial = function(t) {
                this.materials.push(t);
            }, World.prototype.addContactMaterial = function(t) {
                this.contactmaterials.push(t), this.contactMaterialTable.set(t.materials[0].id, t.materials[1].id, t);
            }, "undefined" == typeof performance && (performance = {}), !performance.now) {
                var x = Date.now();
                performance.timing && performance.timing.navigationStart && (x = performance.timing.navigationStart), 
                performance.now = function() {
                    return Date.now() - x;
                };
            }
            var g = new n();
            World.prototype.step = function(t, e, o) {
                if (o = o || 10, 0 === (e = e || 0)) this.internalStep(t), this.time += t; else {
                    var i = Math.floor((this.time + e) / t) - Math.floor(this.time / t);
                    i = Math.min(i, o);
                    for (var n = performance.now(), r = 0; r !== i && (this.internalStep(t), !(performance.now() - n > 1e3 * t)); r++) ;
                    this.time += e;
                    for (var s = this.time % t / t, a = g, l = this.bodies, h = 0; h !== l.length; h++) {
                        var c = l[h];
                        c.type !== u.STATIC && c.sleepState !== u.SLEEPING ? (c.position.vsub(c.previousPosition, a), 
                        a.scale(s, a), c.position.vadd(a, c.interpolatedPosition)) : (c.interpolatedPosition.copy(c.position), 
                        c.interpolatedQuaternion.copy(c.quaternion));
                    }
                }
            };
            var b = {
                type: "postStep"
            }, B = {
                type: "preStep"
            }, S = {
                type: "collide",
                body: null,
                contact: null
            }, E = [], C = [], A = [], R = [], P = (new n(), new n(), new n(), new n(), new n(), 
            new n(), new n(), new n(), new n(), new r(), new r()), M = new r(), q = new n();
            World.prototype.internalStep = function(t) {
                this.dt = t;
                var e, o = this.contacts, n = this.allContacts, r = A, s = R, a = this.numObjects(), l = this.bodies, h = this.solver, c = this.gravity, p = this.doProfiling, d = this.profile, v = u.DYNAMIC, y = this.constraints, f = C, m = (c.norm(), 
                c.x), w = c.y, x = c.z, g = 0;
                for (p && (e = performance.now()), g = 0; g !== a; g++) {
                    if ((U = l[g]).type & v) {
                        var V = U.force, z = U.mass;
                        V.x += z * m, V.y += z * w, V.z += z * x;
                    }
                }
                g = 0;
                for (var T = this.subsystems.length; g !== T; g++) this.subsystems[g].update();
                p && (e = performance.now()), r.length = 0, s.length = 0, this.broadphase.collisionPairs(this, r, s), 
                p && (d.broadphase = performance.now() - e);
                var N = y.length;
                for (g = 0; g !== N; g++) {
                    if (!(Q = y[g]).collideConnected) for (var F = r.length - 1; F >= 0; F -= 1) (Q.bodyA === r[F] && Q.bodyB === s[F] || Q.bodyB === r[F] && Q.bodyA === s[F]) && (r.splice(F, 1), 
                    s.splice(F, 1));
                }
                this.collisionMatrixTick(), p && (e = performance.now());
                var I = E, W = n.length;
                for (g = 0; g !== W; g++) I.push(n[g]);
                o.length = 0, n.length = 0;
                var L = this.frictionEquations.length;
                for (g = 0; g !== L; g++) f.push(this.frictionEquations[g]);
                this.frictionEquations.length = 0, this.narrowphase.getContacts(r, s, this, n, I, this.frictionEquations, f);
                for (var j = n.length, O = 0; O != j; O++) {
                    var H = n[O];
                    H.bi.isTrigger || H.bj.isTrigger || o.push(H);
                }
                p && (d.narrowphase = performance.now() - e), p && (e = performance.now());
                for (g = 0; g < this.frictionEquations.length; g++) h.addEquation(this.frictionEquations[g]);
                for (var k = o.length, _ = 0; _ !== k; _++) {
                    var U = (Q = o[_]).bi, D = Q.bj;
                    Q.si, Q.sj, (U.material && D.material && this.getContactMaterial(U.material, D.material) || this.defaultContactMaterial).friction;
                    if (U.material && D.material && (U.material.friction >= 0 && D.material.friction >= 0 && U.material.friction * D.material.friction, 
                    U.material.restitution >= 0 && D.material.restitution >= 0 && (Q.restitution = U.material.restitution * D.material.restitution)), 
                    h.addEquation(Q), U.allowSleep && U.type === u.DYNAMIC && U.sleepState === u.SLEEPING && D.sleepState === u.AWAKE && D.type !== u.STATIC) D.velocity.norm2() + D.angularVelocity.norm2() >= 2 * Math.pow(D.sleepSpeedLimit, 2) && (U._wakeUpAfterNarrowphase = !0);
                    if (D.allowSleep && D.type === u.DYNAMIC && D.sleepState === u.SLEEPING && U.sleepState === u.AWAKE && U.type !== u.STATIC) U.velocity.norm2() + U.angularVelocity.norm2() >= 2 * Math.pow(U.sleepSpeedLimit, 2) && (D._wakeUpAfterNarrowphase = !0);
                    this.collisionMatrix.set(U, D, !0), this.collisionMatrixPrevious.get(U, D) || (S.body = D, 
                    S.contact = Q, U.dispatchEvent(S), S.body = U, D.dispatchEvent(S));
                }
                for (p && (d.makeContactConstraints = performance.now() - e, e = performance.now()), 
                g = 0; g !== a; g++) {
                    (U = l[g])._wakeUpAfterNarrowphase && (U.wakeUp(), U._wakeUpAfterNarrowphase = !1);
                }
                N = y.length;
                for (g = 0; g !== N; g++) {
                    var Q;
                    (Q = y[g]).update();
                    F = 0;
                    for (var G = Q.equations.length; F !== G; F++) {
                        var X = Q.equations[F];
                        h.addEquation(X);
                    }
                }
                h.solve(t, this), p && (d.solve = performance.now() - e), h.removeAllEquations();
                var Y = Math.pow;
                for (g = 0; g !== a; g++) {
                    if ((U = l[g]).type & v) {
                        var Z = Y(1 - U.linearDamping, t), K = U.velocity;
                        K.mult(Z, K);
                        var J = U.angularVelocity;
                        if (J) {
                            var $ = Y(1 - U.angularDamping, t);
                            J.mult($, J);
                        }
                    }
                }
                for (this.dispatchEvent(B), g = 0; g !== a; g++) {
                    (U = l[g]).preStep && U.preStep.call(U);
                }
                p && (e = performance.now());
                var tt = P, et = M, ot = this.stepnumber, it = u.DYNAMIC | u.KINEMATIC, nt = ot % (this.quatNormalizeSkip + 1) == 0, rt = this.quatNormalizeFast, st = .5 * t;
                i.types.PLANE, i.types.CONVEXPOLYHEDRON;
                for (this.callBackBody.length = 0, g = 0; g !== a; g++) {
                    var at = l[g], lt = at.force, ht = at.torque;
                    if (at.type & it && at.sleepState !== u.SLEEPING) {
                        var ct = at.velocity, pt = at.angularVelocity, ut = at.position, dt = at.quaternion, vt = at.invMass, yt = at.invInertiaWorld;
                        ct.x += lt.x * vt * t, ct.y += lt.y * vt * t, ct.z += lt.z * vt * t, at.angularVelocity && (yt.vmult(ht, q), 
                        q.mult(t, q), q.vadd(pt, pt)), ut.x += ct.x * t, ut.y += ct.y * t, ut.z += ct.z * t, 
                        at.angularVelocity && (tt.set(pt.x, pt.y, pt.z, 0), tt.mult(dt, et), dt.x += st * et.x, 
                        dt.y += st * et.y, dt.z += st * et.z, dt.w += st * et.w, nt && (rt ? dt.normalizeFast() : dt.normalize())), 
                        this.callBackBody.push(at), at.aabb && (at.aabbNeedsUpdate = !0), at.updateInertiaWorld && at.updateInertiaWorld();
                    }
                }
                for (this.clearForces(), this.broadphase.dirty = !0, p && (d.integrate = performance.now() - e), 
                this.time += t, this.stepnumber += 1, this.dispatchEvent(b), g = 0; g !== a; g++) {
                    var ft = (U = l[g]).postStep;
                    ft && ft.call(U);
                }
                if (this.allowSleep) for (g = 0; g !== a; g++) l[g].sleepTick(this.time);
            }, World.prototype.clearForces = function() {
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
            "../collision/Ray": 9,
            "../collision/RaycastResult": 10,
            "../equations/ContactEquation": 19,
            "../equations/FrictionEquation": 21,
            "../material/ContactMaterial": 24,
            "../material/Material": 25,
            "../math/Quaternion": 28,
            "../math/Vec3": 30,
            "../objects/Body": 31,
            "../shapes/Shape": 43,
            "../solver/GSSolver": 46,
            "../utils/EventTarget": 49,
            "../utils/TupleDictionary": 52,
            "../utils/Vec3Pool": 54,
            "./Narrowphase": 55
        } ]
    }, {}, [ 2 ])(2);
});