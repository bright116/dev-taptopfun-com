!function(t) {
    var i;
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : ("undefined" != typeof window ? i = window : "undefined" != typeof global ? i = global : "undefined" != typeof self && (i = self), 
    i.Cannon = t());
}(function() {
    return function t(i, e, o) {
        function n(r, a) {
            if (!e[r]) {
                if (!i[r]) {
                    var l = "function" == typeof require && require;
                    if (!a && l) return l(r, !0);
                    if (s) return s(r, !0);
                    throw new Error("Near2y Cannot find module '" + r + "'");
                }
                var h = e[r] = {
                    exports: {}
                };
                i[r][0].call(h.exports, function(t) {
                    var e = i[r][1][t];
                    return n(e || t);
                }, h, h.exports, t, i, e, o);
            }
            return e[r].exports;
        }
        for (var s = "function" == typeof require && require, r = 0; r < o.length; r++) n(o[r]);
        return n;
    }({
        1: [ function(t, i, e) {
            i.exports = {
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
        2: [ function(t, i, e) {
            i.exports = {
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
            function i(t) {
                t = t || {}, this.lowerBound = new n(), t.lowerBound && this.lowerBound.copy(t.lowerBound), 
                this.upperBound = new n(), t.upperBound && this.upperBound.copy(t.upperBound);
            }
            var n = t("../math/Vec3");
            t("../utils/Utils"), e.exports = i;
            var s = new n();
            i.prototype.setFromPoints = function(t, i, e, o) {
                var n = this.lowerBound, r = this.upperBound, a = e;
                n.copy(t[0]), a && a.vmult(n, n), r.copy(n);
                for (var l = 1; l < t.length; l++) {
                    var h = t[l];
                    a && (a.vmult(h, s), h = s), h.x > r.x && (r.x = h.x), h.x < n.x && (n.x = h.x), 
                    h.y > r.y && (r.y = h.y), h.y < n.y && (n.y = h.y), h.z > r.z && (r.z = h.z), h.z < n.z && (n.z = h.z);
                }
                return i && (i.vadd(n, n), i.vadd(r, r)), o && (n.x -= o, n.y -= o, n.z -= o, r.x += o, 
                r.y += o, r.z += o), this;
            }, i.prototype.copy = function(t) {
                return this.lowerBound.copy(t.lowerBound), this.upperBound.copy(t.upperBound), this;
            }, i.prototype.clone = function() {
                return new i().copy(this);
            }, i.prototype.extend = function(t) {
                var i = t.lowerBound.x;
                this.lowerBound.x > i && (this.lowerBound.x = i);
                var e = t.upperBound.x;
                this.upperBound.x < e && (this.upperBound.x = e);
                i = t.lowerBound.y;
                this.lowerBound.y > i && (this.lowerBound.y = i);
                e = t.upperBound.y;
                this.upperBound.y < e && (this.upperBound.y = e);
                i = t.lowerBound.z;
                this.lowerBound.z > i && (this.lowerBound.z = i);
                e = t.upperBound.z;
                this.upperBound.z < e && (this.upperBound.z = e);
            }, i.prototype.overlaps = function(t) {
                var i = this.lowerBound, e = this.upperBound, o = t.lowerBound, n = t.upperBound;
                return (o.x <= e.x && e.x <= n.x || i.x <= n.x && n.x <= e.x) && (o.y <= e.y && e.y <= n.y || i.y <= n.y && n.y <= e.y) && (o.z <= e.z && e.z <= n.z || i.z <= n.z && n.z <= e.z);
            }, i.prototype.contains = function(t) {
                var i = this.lowerBound, e = this.upperBound, o = t.lowerBound, n = t.upperBound;
                return i.x <= o.x && e.x >= n.x && i.y <= o.y && e.y >= n.y && i.z <= o.z && e.z >= n.z;
            }, i.prototype.getCorners = function(t, i, e, o, n, s, r, a) {
                var l = this.lowerBound, h = this.upperBound;
                t.copy(l), i.set(h.x, l.y, l.z), e.set(h.x, h.y, l.z), o.set(l.x, h.y, h.z), n.set(h.x, l.y, l.z), 
                s.set(l.x, h.y, l.z), r.set(l.x, l.y, h.z), a.copy(h);
            };
            var r = [ new n(), new n(), new n(), new n(), new n(), new n(), new n(), new n() ];
            i.prototype.toLocalFrame = function(t, i) {
                var e = r, o = e[0], n = e[1], s = e[2], a = e[3], l = e[4], h = e[5], p = e[6], c = e[7];
                this.getCorners(o, n, s, a, l, h, p, c);
                for (var u = 0; 8 !== u; u++) {
                    var d = e[u];
                    t.pointToLocal(d, d);
                }
                return i.setFromPoints(e);
            }, i.prototype.toWorldFrame = function(t, i) {
                var e = r, o = e[0], n = e[1], s = e[2], a = e[3], l = e[4], h = e[5], p = e[6], c = e[7];
                this.getCorners(o, n, s, a, l, h, p, c);
                for (var u = 0; 8 !== u; u++) {
                    var d = e[u];
                    t.pointToWorld(d, d);
                }
                return i.setFromPoints(e);
            };
        }, {
            "../math/Vec3": 30,
            "../utils/Utils": 53
        } ],
        4: [ function(t, e, o) {
            function i() {
                this.matrix = [];
            }
            e.exports = i, i.prototype.get = function(t, i) {
                if (t = t.index, (i = i.index) > t) {
                    var e = i;
                    i = t, t = e;
                }
                return this.matrix[(t * (t + 1) >> 1) + i - 1];
            }, i.prototype.set = function(t, i, e) {
                if (t = t.index, (i = i.index) > t) {
                    var o = i;
                    i = t, t = o;
                }
                this.matrix[(t * (t + 1) >> 1) + i - 1] = e ? 1 : 0;
            }, i.prototype.reset = function() {
                for (var t = 0, i = this.matrix.length; t !== i; t++) this.matrix[t] = 0;
            }, i.prototype.setNumObjects = function(t) {
                this.matrix.length = t * (t - 1) >> 1;
            };
        }, {} ],
        5: [ function(t, e, o) {
            function i() {
                this.world = null, this.useBoundingBoxes = !1, this.dirty = !0;
            }
            var n = t("../objects/Body"), s = t("../math/Vec3"), r = t("../math/Quaternion");
            t("../shapes/Shape"), t("../shapes/Plane"), e.exports = i, i.prototype.collisionPairs = function(t, i, e) {
                throw new Error("collisionPairs not implemented for this BroadPhase class!");
            };
            var a = n.STATIC | n.KINEMATIC;
            i.prototype.needBroadphaseCollision = function(t, i) {
                return 0 != (t.collisionFilterGroup & i.collisionFilterMask) && 0 != (i.collisionFilterGroup & t.collisionFilterMask) && (0 == (t.type & a) && t.sleepState !== n.SLEEPING || 0 == (i.type & a) && i.sleepState !== n.SLEEPING);
            }, i.prototype.intersectionTest = function(t, i, e, o) {
                this.useBoundingBoxes ? this.doBoundingBoxBroadphase(t, i, e, o) : this.doBoundingSphereBroadphase(t, i, e, o);
            };
            var l = new s();
            new s(), new r(), new s(), i.prototype.doBoundingSphereBroadphase = function(t, i, e, o) {
                var n = l;
                i.position.vsub(t.position, n), Math.pow(t.boundingRadius + i.boundingRadius, 2) > n.norm2() && (e.push(t), 
                o.push(i));
            }, i.prototype.doBoundingBoxBroadphase = function(t, i, e, o) {
                t.aabbNeedsUpdate && t.computeAABB(), i.aabbNeedsUpdate && i.computeAABB(), t.aabb.overlaps(i.aabb) && (e.push(t), 
                o.push(i));
            };
            var h = {
                keys: []
            }, p = [], c = [];
            i.prototype.makePairsUnique = function(t, i) {
                for (var e = h, o = p, n = c, s = t.length, r = 0; r !== s; r++) o[r] = t[r], n[r] = i[r];
                t.length = 0, i.length = 0;
                for (r = 0; r !== s; r++) {
                    var a = o[r].id, l = n[r].id;
                    e[u = l > a ? a + "," + l : l + "," + a] = r, e.keys.push(u);
                }
                for (r = 0; r !== e.keys.length; r++) {
                    var u = e.keys.pop(), d = e[u];
                    t.push(o[d]), i.push(n[d]), delete e[u];
                }
            }, i.prototype.setWorld = function(t) {};
            var u = new s();
            i.boundingSphereCheck = function(t, i) {
                var e = u;
                return t.position.vsub(i.position, e), Math.pow(t.shape.boundingSphereRadius + i.shape.boundingSphereRadius, 2) > e.norm2();
            }, i.prototype.aabbQuery = function(t, i, e) {
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
            function i(t, i, e, o, r) {
                n.apply(this), this.nx = e || 10, this.ny = o || 10, this.nz = r || 10, this.aabbMin = t || new s(100, 100, 100), 
                this.aabbMax = i || new s(-100, -100, -100);
                var a = this.nx * this.ny * this.nz;
                if (0 >= a) throw "GridBroadphase: Each dimension's n must be >0";
                this.bins = [], this.binLengths = [], this.bins.length = a, this.binLengths.length = a;
                for (var l = 0; a > l; l++) this.bins[l] = [], this.binLengths[l] = 0;
            }
            e.exports = i;
            var n = t("./Broadphase"), s = t("../math/Vec3"), r = t("../shapes/Shape");
            i.prototype = new n(), i.prototype.constructor = i;
            var a = new s();
            new s(), i.prototype.collisionPairs = function(t, e, o) {
                function i(t, i, e, o, n, s, r) {
                    var a = (t - x) * B | 0, l = (i - g) * E | 0, h = (e - b) * A | 0, f = I((o - x) * B), m = I((n - g) * E), w = I((s - b) * A);
                    0 > a ? a = 0 : a >= p && (a = p - 1), 0 > l ? l = 0 : l >= c && (l = c - 1), 0 > h ? h = 0 : h >= u && (h = u - 1), 
                    0 > f ? f = 0 : f >= p && (f = p - 1), 0 > m ? m = 0 : m >= c && (m = c - 1), 0 > w ? w = 0 : w >= u && (w = u - 1), 
                    l *= v, h *= y, f *= d, m *= v, w *= y;
                    for (var S = a *= d; f >= S; S += d) for (var C = l; m >= C; C += v) for (var z = h; w >= z; z += y) {
                        var q = S + C + z;
                        F[q][V[q]++] = r;
                    }
                }
                for (var n = t.numObjects(), s = t.bodies, l = this.aabbMax, h = this.aabbMin, p = this.nx, c = this.ny, u = this.nz, d = c * u, v = u, y = 1, f = l.x, m = l.y, w = l.z, x = h.x, g = h.y, b = h.z, B = p / (f - x), E = c / (m - g), A = u / (w - b), S = (f - x) / p, C = (m - g) / c, z = (w - b) / u, q = .5 * Math.sqrt(S * S + C * C + z * z), R = r.types, M = R.SPHERE, P = R.PLANE, F = (R.BOX, 
                R.COMPOUND, R.CONVEXPOLYHEDRON, this.bins), V = this.binLengths, T = this.bins.length, N = 0; N !== T; N++) V[N] = 0;
                var I = Math.ceil;
                for (h = Math.min, l = Math.max, N = 0; N !== n; N++) {
                    var W = (et = s[N]).shape;
                    switch (W.type) {
                      case M:
                        var L = et.position.x, j = et.position.y, O = et.position.z, k = W.radius;
                        i(L - k, j - k, O - k, L + k, j + k, O + k, et);
                        break;

                      case P:
                        W.worldNormalNeedsUpdate && W.computeWorldNormal(et.quaternion);
                        var _ = W.worldNormal, U = x + .5 * S - et.position.x, H = g + .5 * C - et.position.y, D = b + .5 * z - et.position.z, X = a;
                        X.set(U, H, D);
                        for (var G = 0, Y = 0; G !== p; G++, Y += d, X.y = H, X.x += S) for (var Q = 0, Z = 0; Q !== c; Q++, 
                        Z += v, X.z = D, X.y += C) for (var K = 0, J = 0; K !== u; K++, J += y, X.z += z) if (X.dot(_) < q) {
                            var $ = Y + Z + J;
                            F[$][V[$]++] = et;
                        }
                        break;

                      default:
                        et.aabbNeedsUpdate && et.computeAABB(), i(et.aabb.lowerBound.x, et.aabb.lowerBound.y, et.aabb.lowerBound.z, et.aabb.upperBound.x, et.aabb.upperBound.y, et.aabb.upperBound.z, et);
                    }
                }
                for (N = 0; N !== T; N++) {
                    var tt = V[N];
                    if (tt > 1) {
                        var it = F[N];
                        for (G = 0; G !== tt; G++) {
                            var et = it[G];
                            for (Q = 0; Q !== G; Q++) {
                                var ot = it[Q];
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
            function i() {
                n.apply(this);
            }
            e.exports = i;
            var n = t("./Broadphase"), s = t("./AABB");
            i.prototype = new n(), i.prototype.constructor = i, i.prototype.collisionPairs = function(t, i, e) {
                var o, n, s, r, a = t.bodies, l = a.length;
                for (o = 0; o !== l; o++) for (n = 0; n !== o; n++) s = a[o], r = a[n], this.needBroadphaseCollision(s, r) && this.intersectionTest(s, r, i, e);
            }, new s(), i.prototype.aabbQuery = function(t, i, e) {
                e = e || [];
                for (var o = 0; o < t.bodies.length; o++) {
                    var n = t.bodies[o];
                    n.aabbNeedsUpdate && n.computeAABB(), n.aabb.overlaps(i) && e.push(n);
                }
                return e;
            };
        }, {
            "./AABB": 3,
            "./Broadphase": 5
        } ],
        8: [ function(t, e, o) {
            function i() {
                this.matrix = {};
            }
            e.exports = i, i.prototype.get = function(t, i) {
                if (t = t.id, (i = i.id) > t) {
                    var e = i;
                    i = t, t = e;
                }
                return t + "-" + i in this.matrix;
            }, i.prototype.set = function(t, i, e) {
                if (t = t.id, (i = i.id) > t) {
                    var o = i;
                    i = t, t = o;
                }
                e ? this.matrix[t + "-" + i] = !0 : delete this.matrix[t + "-" + i];
            }, i.prototype.reset = function() {
                this.matrix = {};
            }, i.prototype.setNumObjects = function(t) {};
        }, {} ],
        9: [ function(t, e, o) {
            function i(t, e) {
                this.from = t ? t.clone() : new s(), this.to = e ? e.clone() : new s(), this._direction = new s(), 
                this.precision = 1e-4, this.checkCollisionResponse = !0, this.skipBackfaces = !1, 
                this.collisionFilterMask = -1, this.collisionFilterGroup = -1, this.mode = i.ANY, 
                this.result = new l(), this.hasHit = !1, this.callback = function(t) {};
            }
            function n(t, i, e, o) {
                o.vsub(i, T), e.vsub(i, d), t.vsub(i, v);
                var n, s, r = T.dot(T), a = T.dot(d), l = T.dot(v), h = d.dot(d), p = d.dot(v);
                return (n = h * l - a * p) >= 0 && (s = r * p - a * l) >= 0 && r * h - a * a > n + s;
            }
            e.exports = i;
            var s = t("../math/Vec3"), r = t("../math/Quaternion"), a = t("../math/Transform"), l = (t("../shapes/ConvexPolyhedron"), 
            t("../shapes/Box"), t("../collision/RaycastResult")), h = t("../shapes/Shape"), p = t("../collision/AABB");
            i.prototype.constructor = i, i.CLOSEST = 1, i.ANY = 2, i.ALL = 4;
            var c = new p(), u = [];
            i.prototype.intersectWorld = function(t, e) {
                return this.mode = e.mode || i.ANY, this.result = e.result || new l(), this.skipBackfaces = !!e.skipBackfaces, 
                this.collisionFilterMask = void 0 !== e.collisionFilterMask ? e.collisionFilterMask : -1, 
                this.collisionFilterGroup = void 0 !== e.collisionFilterGroup ? e.collisionFilterGroup : -1, 
                e.from && this.from.copy(e.from), e.to && this.to.copy(e.to), this.callback = e.callback || function() {}, 
                this.hasHit = !1, this.result.reset(), this._updateDirection(), this.getAABB(c), 
                u.length = 0, t.broadphase.aabbQuery(t, c, u), this.intersectBodies(u), this.hasHit;
            };
            var d = new s(), v = new s();
            i.pointInTriangle = n;
            var y = new s(), f = new r();
            i.prototype.intersectBody = function(t, i) {
                i && (this.result = i, this._updateDirection());
                var e = this.checkCollisionResponse;
                if ((!e || t.collisionResponse) && 0 != (this.collisionFilterGroup & t.collisionFilterMask) && 0 != (t.collisionFilterGroup & this.collisionFilterMask)) for (var o = y, n = f, s = 0, r = t.shapes.length; r > s; s++) {
                    var a = t.shapes[s];
                    if ((!e || a.collisionResponse) && (t.quaternion.mult(t.shapeOrientations[s], n), 
                    t.quaternion.vmult(t.shapeOffsets[s], o), o.vadd(t.position, o), this.intersectShape(a, n, o, t), 
                    this.result._shouldStop)) break;
                }
            }, i.prototype.intersectBodies = function(t, i) {
                i && (this.result = i, this._updateDirection());
                for (var e = 0, o = t.length; !this.result._shouldStop && o > e; e++) this.intersectBody(t[e]);
            }, i.prototype._updateDirection = function() {
                this.to.vsub(this.from, this._direction), this._direction.normalize();
            }, i.prototype.intersectShape = function(t, i, e, o) {
                if (!(function(t, i, e) {
                    e.vsub(t, T);
                    var o = T.dot(i);
                    return i.mult(o, N), N.vadd(t, N), e.distanceTo(N);
                }(this.from, this._direction, e) > t.boundingSphereRadius)) {
                    var n = this[t.type];
                    n && n.call(this, t, i, e, o);
                }
            };
            var m = (new s(), new s(), new s()), w = new s(), x = new s(), g = new s();
            new s(), new l(), i.prototype.intersectBox = function(t, i, e, o) {
                return this.intersectConvex(t.convexPolyhedronRepresentation, i, e, o);
            }, i.prototype[h.types.BOX] = i.prototype.intersectBox, i.prototype.intersectPlane = function(t, i, e, o) {
                var n = this.from, r = this.to, a = this._direction, l = new s(0, 0, 1);
                i.vmult(l, l);
                var h = new s();
                n.vsub(e, h);
                var p = h.dot(l);
                if (r.vsub(e, h), !(p * h.dot(l) > 0 || n.distanceTo(r) < p)) {
                    var c = l.dot(a);
                    if (!(Math.abs(c) < this.precision)) {
                        var u = new s(), d = new s(), v = new s();
                        n.vsub(e, u);
                        var y = -l.dot(u) / c;
                        a.scale(y, d), n.vadd(d, v), this.reportIntersection(l, v, t, o, -1);
                    }
                }
            }, i.prototype[h.types.PLANE] = i.prototype.intersectPlane, i.prototype.getAABB = function(t) {
                var i = this.to, e = this.from;
                t.lowerBound.x = Math.min(i.x, e.x), t.lowerBound.y = Math.min(i.y, e.y), t.lowerBound.z = Math.min(i.z, e.z), 
                t.upperBound.x = Math.max(i.x, e.x), t.upperBound.y = Math.max(i.y, e.y), t.upperBound.z = Math.max(i.z, e.z);
            };
            var b = {
                faceList: [ 0 ]
            };
            i.prototype.intersectHeightfield = function(t, e, o, n) {
                var r = (t.data, t.elementSize, new s()), l = new i(this.from, this.to);
                a.pointToLocalFrame(o, e, l.from, l.from), a.pointToLocalFrame(o, e, l.to, l.to);
                var h = [], p = null, c = null, u = null, d = null, v = t.getIndexOfPosition(l.from.x, l.from.y, h, !1);
                if (v && (p = h[0], c = h[1], u = h[0], d = h[1]), (v = t.getIndexOfPosition(l.to.x, l.to.y, h, !1)) && ((null === p || h[0] < p) && (p = h[0]), 
                (null === u || h[0] > u) && (u = h[0]), (null === c || h[1] < c) && (c = h[1]), 
                (null === d || h[1] > d) && (d = h[1])), null !== p) {
                    var y = [];
                    t.getRectMinMax(p, c, u, d, y);
                    for (var f = p; u >= f; f++) for (var m = c; d >= m; m++) {
                        if (this.result._shouldStop) return;
                        if (t.getConvexTrianglePillar(f, m, !1), a.pointToWorldFrame(o, e, t.pillarOffset, r), 
                        this.intersectConvex(t.pillarConvex, e, r, n, b), this.result._shouldStop) return;
                        t.getConvexTrianglePillar(f, m, !0), a.pointToWorldFrame(o, e, t.pillarOffset, r), 
                        this.intersectConvex(t.pillarConvex, e, r, n, b);
                    }
                }
            }, i.prototype[h.types.HEIGHTFIELD] = i.prototype.intersectHeightfield;
            var B = new s(), E = new s();
            i.prototype.intersectSphere = function(t, i, e, o) {
                var n = this.from, s = this.to, r = t.radius, a = Math.pow(s.x - n.x, 2) + Math.pow(s.y - n.y, 2) + Math.pow(s.z - n.z, 2), l = 2 * ((s.x - n.x) * (n.x - e.x) + (s.y - n.y) * (n.y - e.y) + (s.z - n.z) * (n.z - e.z)), h = Math.pow(n.x - e.x, 2) + Math.pow(n.y - e.y, 2) + Math.pow(n.z - e.z, 2) - Math.pow(r, 2), p = Math.pow(l, 2) - 4 * a * h, c = B, u = E;
                if (!(0 > p)) if (0 === p) n.lerp(s, p, c), c.vsub(e, u), u.normalize(), this.reportIntersection(u, c, t, o, -1); else {
                    var d = (-l - Math.sqrt(p)) / (2 * a), v = (-l + Math.sqrt(p)) / (2 * a);
                    if (d >= 0 && 1 >= d && (n.lerp(s, d, c), c.vsub(e, u), u.normalize(), this.reportIntersection(u, c, t, o, -1)), 
                    this.result._shouldStop) return;
                    v >= 0 && 1 >= v && (n.lerp(s, v, c), c.vsub(e, u), u.normalize(), this.reportIntersection(u, c, t, o, -1));
                }
            }, i.prototype[h.types.SPHERE] = i.prototype.intersectSphere;
            var A = new s(), S = (new s(), new s(), new s());
            i.prototype.intersectConvex = function(t, i, e, o, s) {
                for (var r = A, a = S, l = s && s.faceList || null, h = t.faces, p = t.vertices, c = t.faceNormals, u = this._direction, d = this.from, v = this.to, y = d.distanceTo(v), f = l ? l.length : h.length, b = this.result, B = 0; !b._shouldStop && f > B; B++) {
                    var E = l ? l[B] : B, C = h[E], z = c[E], q = i, R = e;
                    a.copy(p[C[0]]), q.vmult(a, a), a.vadd(R, a), a.vsub(d, a), q.vmult(z, r);
                    var M = u.dot(r);
                    if (!(Math.abs(M) < this.precision)) {
                        var P = r.dot(a) / M;
                        if (!(0 > P)) {
                            u.mult(P, m), m.vadd(d, m), w.copy(p[C[0]]), q.vmult(w, w), R.vadd(w, w);
                            for (var F = 1; !b._shouldStop && F < C.length - 1; F++) {
                                x.copy(p[C[F]]), g.copy(p[C[F + 1]]), q.vmult(x, x), q.vmult(g, g), R.vadd(x, x), 
                                R.vadd(g, g);
                                var V = m.distanceTo(d);
                                !n(m, w, x, g) && !n(m, x, w, g) || V > y || this.reportIntersection(r, m, t, o, E);
                            }
                        }
                    }
                }
            }, i.prototype[h.types.CONVEXPOLYHEDRON] = i.prototype.intersectConvex;
            var C = new s(), z = new s(), q = new s(), R = new s(), M = new s(), P = new s(), F = (new p(), 
            []), V = new a();
            i.prototype.intersectTrimesh = function(t, i, e, o, s) {
                var r = C, l = F, h = V, p = S, c = z, u = q, d = R, v = P, y = M, f = (s && s.faceList, 
                t.indices), b = (t.vertices, t.faceNormals, this.from), B = this.to, E = this._direction;
                h.position.copy(e), h.quaternion.copy(i), a.vectorToLocalFrame(e, i, E, c), a.pointToLocalFrame(e, i, b, u), 
                a.pointToLocalFrame(e, i, B, d);
                var A = u.distanceSquared(d);
                t.tree.rayQuery(this, h, l);
                for (var T = 0, N = l.length; !this.result._shouldStop && T !== N; T++) {
                    var I = l[T];
                    t.getNormal(I, r), t.getVertex(f[3 * I], w), w.vsub(u, p);
                    var W = c.dot(r), L = r.dot(p) / W;
                    if (!(0 > L)) {
                        c.scale(L, m), m.vadd(u, m), t.getVertex(f[3 * I + 1], x), t.getVertex(f[3 * I + 2], g);
                        var j = m.distanceSquared(u);
                        !n(m, x, w, g) && !n(m, w, x, g) || j > A || (a.vectorToWorldFrame(i, r, y), a.pointToWorldFrame(e, i, m, v), 
                        this.reportIntersection(y, v, t, o, I));
                    }
                }
                l.length = 0;
            }, i.prototype[h.types.TRIMESH] = i.prototype.intersectTrimesh, i.prototype.reportIntersection = function(t, e, o, n, s) {
                var r = this.from, a = this.to, l = r.distanceTo(e), h = this.result;
                if (!(this.skipBackfaces && t.dot(this._direction) > 0)) switch (h.hitFaceIndex = void 0 !== s ? s : -1, 
                this.mode) {
                  case i.ALL:
                    this.hasHit = !0, h.set(r, a, t, e, o, n, l), h.hasHit = !0, this.callback(h);
                    break;

                  case i.CLOSEST:
                    (l < h.distance || !h.hasHit) && (this.hasHit = !0, h.hasHit = !0, h.set(r, a, t, e, o, n, l));
                    break;

                  case i.ANY:
                    this.hasHit = !0, h.hasHit = !0, h.set(r, a, t, e, o, n, l), h._shouldStop = !0;
                }
            };
            var T = new s(), N = new s();
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
            function i() {
                this.rayFromWorld = new n(), this.rayToWorld = new n(), this.hitNormalWorld = new n(), 
                this.hitPointWorld = new n(), this.hasHit = !1, this.shape = null, this.body = null, 
                this.hitFaceIndex = -1, this.distance = -1, this._shouldStop = !1;
            }
            var n = t("../math/Vec3");
            e.exports = i, i.prototype.reset = function() {
                this.rayFromWorld.setZero(), this.rayToWorld.setZero(), this.hitNormalWorld.setZero(), 
                this.hitPointWorld.setZero(), this.hasHit = !1, this.shape = null, this.body = null, 
                this.hitFaceIndex = -1, this.distance = -1, this._shouldStop = !1;
            }, i.prototype.abort = function() {
                this._shouldStop = !0;
            }, i.prototype.set = function(t, i, e, o, n, s, r) {
                this.rayFromWorld.copy(t), this.rayToWorld.copy(i), this.hitNormalWorld.copy(e), 
                this.hitPointWorld.copy(o), this.shape = n, this.body = s, this.distance = r;
            };
        }, {
            "../math/Vec3": 30
        } ],
        11: [ function(t, e, o) {
            function i(t) {
                n.apply(this), this.axisList = [], this.world = null, this.axisIndex = 0;
                var i = this.axisList;
                this._addBodyHandler = function(t) {
                    i.push(t.body);
                }, this._removeBodyHandler = function(t) {
                    var e = i.indexOf(t.body);
                    -1 !== e && i.splice(e, 1);
                }, t && this.setWorld(t);
            }
            var n = (t("../shapes/Shape"), t("../collision/Broadphase"));
            e.exports = i, i.prototype = new n(), i.prototype.setWorld = function(t) {
                this.axisList.length = 0;
                for (var i = 0; i < t.bodies.length; i++) this.axisList.push(t.bodies[i]);
                t.removeEventListener("addBody", this._addBodyHandler), t.removeEventListener("removeBody", this._removeBodyHandler), 
                t.addEventListener("addBody", this._addBodyHandler), t.addEventListener("removeBody", this._removeBodyHandler), 
                this.world = t, this.dirty = !0;
            }, i.insertionSortX = function(t) {
                for (var i = 1, e = t.length; e > i; i++) {
                    for (var o = t[i], n = i - 1; n >= 0 && !(t[n].aabb.lowerBound.x <= o.aabb.lowerBound.x); n--) t[n + 1] = t[n];
                    t[n + 1] = o;
                }
                return t;
            }, i.insertionSortY = function(t) {
                for (var i = 1, e = t.length; e > i; i++) {
                    for (var o = t[i], n = i - 1; n >= 0 && !(t[n].aabb.lowerBound.y <= o.aabb.lowerBound.y); n--) t[n + 1] = t[n];
                    t[n + 1] = o;
                }
                return t;
            }, i.insertionSortZ = function(t) {
                for (var i = 1, e = t.length; e > i; i++) {
                    for (var o = t[i], n = i - 1; n >= 0 && !(t[n].aabb.lowerBound.z <= o.aabb.lowerBound.z); n--) t[n + 1] = t[n];
                    t[n + 1] = o;
                }
                return t;
            }, i.prototype.collisionPairs = function(t, e, o) {
                var n, s, r = this.axisList, a = r.length, l = this.axisIndex;
                for (this.dirty && (this.sortList(), this.dirty = !1), n = 0; n !== a; n++) {
                    var h = r[n];
                    for (s = n + 1; a > s; s++) {
                        var p = r[s];
                        if (this.needBroadphaseCollision(h, p)) {
                            if (!i.checkBounds(h, p, l)) break;
                            this.intersectionTest(h, p, e, o);
                        }
                    }
                }
            }, i.prototype.sortList = function() {
                for (var t = this.axisList, e = this.axisIndex, o = t.length, n = 0; n !== o; n++) {
                    var s = t[n];
                    s.aabbNeedsUpdate && s.computeAABB();
                }
                0 === e ? i.insertionSortX(t) : 1 === e ? i.insertionSortY(t) : 2 === e && i.insertionSortZ(t);
            }, i.checkBounds = function(t, i, e) {
                var o, n;
                return 0 === e ? (o = t.position.x, n = i.position.x) : 1 === e ? (o = t.position.y, 
                n = i.position.y) : 2 === e && (o = t.position.z, n = i.position.z), o + t.boundingRadius > n - i.boundingRadius;
            }, i.prototype.autoDetectAxis = function() {
                for (var t = 0, i = 0, e = 0, o = 0, n = 0, s = 0, r = this.axisList, a = r.length, l = 1 / a, h = 0; h !== a; h++) {
                    var p = r[h], c = p.position.x;
                    t += c, i += c * c;
                    var u = p.position.y;
                    e += u, o += u * u;
                    var d = p.position.z;
                    n += d, s += d * d;
                }
                var v = i - t * t * l, y = o - e * e * l, f = s - n * n * l;
                this.axisIndex = v > y ? v > f ? 0 : 2 : y > f ? 1 : 2;
            }, i.prototype.aabbQuery = function(t, i, e) {
                e = e || [], this.dirty && (this.sortList(), this.dirty = !1);
                var o = this.axisIndex, n = "x";
                1 === o && (n = "y"), 2 === o && (n = "z");
                for (var s = this.axisList, r = (i.lowerBound[n], i.upperBound[n], 0); r < s.length; r++) {
                    var a = s[r];
                    a.aabbNeedsUpdate && a.computeAABB(), a.aabb.overlaps(i) && e.push(a);
                }
                return e;
            };
        }, {
            "../collision/Broadphase": 5,
            "../shapes/Shape": 43
        } ],
        12: [ function(t, e, o) {
            function i(t, i, e) {
                var o = void 0 !== (e = e || {}).maxForce ? e.maxForce : 1e6, l = e.pivotA ? e.pivotA.clone() : new a(), h = e.pivotB ? e.pivotB.clone() : new a();
                this.axisA = e.axisA ? e.axisA.clone() : new a(), this.axisB = e.axisB ? e.axisB.clone() : new a(), 
                n.call(this, t, l, i, h, o), this.collideConnected = !!e.collideConnected, this.angle = void 0 !== e.angle ? e.angle : 0;
                var p = this.coneEquation = new s(t, i, e), c = this.twistEquation = new r(t, i, e);
                this.twistAngle = void 0 !== e.twistAngle ? e.twistAngle : 0, p.maxForce = 0, p.minForce = -o, 
                c.maxForce = 0, c.minForce = -o, this.equations.push(p, c);
            }
            e.exports = i;
            var n = (t("./Constraint"), t("./PointToPointConstraint")), s = t("../equations/ConeEquation"), r = t("../equations/RotationalEquation"), a = (t("../equations/ContactEquation"), 
            t("../math/Vec3"));
            i.prototype = new n(), i.constructor = i, new a(), new a(), i.prototype.update = function() {
                var t = this.bodyA, i = this.bodyB, e = this.coneEquation, o = this.twistEquation;
                n.prototype.update.call(this), t.vectorToWorldFrame(this.axisA, e.axisA), i.vectorToWorldFrame(this.axisB, e.axisB), 
                this.axisA.tangents(o.axisA, o.axisA), t.vectorToWorldFrame(o.axisA, o.axisA), this.axisB.tangents(o.axisB, o.axisB), 
                i.vectorToWorldFrame(o.axisB, o.axisB), e.angle = this.angle, o.maxAngle = this.twistAngle;
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
            function i(t, e, o) {
                o = n.defaults(o, {
                    collideConnected: !0,
                    wakeUpBodies: !0
                }), this.equations = [], this.bodyA = t, this.bodyB = e, this.id = i.idCounter++, 
                this.collideConnected = o.collideConnected, o.wakeUpBodies && (t && t.wakeUp(), 
                e && e.wakeUp());
            }
            e.exports = i;
            var n = t("../utils/Utils");
            i.prototype.update = function() {
                throw new Error("method update() not implmemented in this Constraint subclass!");
            }, i.prototype.enable = function() {
                for (var t = this.equations, i = 0; i < t.length; i++) t[i].enabled = !0;
            }, i.prototype.disable = function() {
                for (var t = this.equations, i = 0; i < t.length; i++) t[i].enabled = !1;
            }, i.idCounter = 0;
        }, {
            "../utils/Utils": 53
        } ],
        14: [ function(t, e, o) {
            function i(t, i, e, o) {
                n.call(this, t, i), void 0 === e && (e = t.position.distanceTo(i.position)), void 0 === o && (o = 1e6), 
                this.distance = e;
                var r = this.distanceEquation = new s(t, i);
                this.equations.push(r), r.minForce = -o, r.maxForce = o;
            }
            e.exports = i;
            var n = t("./Constraint"), s = t("../equations/ContactEquation");
            i.prototype = new n(), i.prototype.update = function() {
                var t = this.bodyA, i = this.bodyB, e = this.distanceEquation, o = .5 * this.distance, n = e.ni;
                i.position.vsub(t.position, n), n.normalize(), n.mult(o, e.ri), n.mult(-o, e.rj);
            };
        }, {
            "../equations/ContactEquation": 19,
            "./Constraint": 13
        } ],
        15: [ function(t, e, o) {
            function i(t, i, e) {
                var o = void 0 !== (e = e || {}).maxForce ? e.maxForce : 1e6, l = e.pivotA ? e.pivotA.clone() : new a(), h = e.pivotB ? e.pivotB.clone() : new a();
                n.call(this, t, l, i, h, o), (this.axisA = e.axisA ? e.axisA.clone() : new a(1, 0, 0)).normalize(), 
                (this.axisB = e.axisB ? e.axisB.clone() : new a(1, 0, 0)).normalize();
                var p = this.rotationalEquation1 = new s(t, i, e), c = this.rotationalEquation2 = new s(t, i, e), u = this.motorEquation = new r(t, i, o);
                u.enabled = !1, this.equations.push(p, c, u);
            }
            e.exports = i;
            var n = (t("./Constraint"), t("./PointToPointConstraint")), s = t("../equations/RotationalEquation"), r = t("../equations/RotationalMotorEquation"), a = (t("../equations/ContactEquation"), 
            t("../math/Vec3"));
            i.prototype = new n(), i.constructor = i, i.prototype.enableMotor = function() {
                this.motorEquation.enabled = !0;
            }, i.prototype.disableMotor = function() {
                this.motorEquation.enabled = !1;
            }, i.prototype.setMotorSpeed = function(t) {
                this.motorEquation.targetVelocity = t;
            }, i.prototype.setMotorMaxForce = function(t) {
                this.motorEquation.maxForce = t, this.motorEquation.minForce = -t;
            };
            var l = new a(), h = new a();
            i.prototype.update = function() {
                var t = this.bodyA, i = this.bodyB, e = this.motorEquation, o = this.rotationalEquation1, s = this.rotationalEquation2, r = l, a = h, p = this.axisA, c = this.axisB;
                n.prototype.update.call(this), t.quaternion.vmult(p, r), i.quaternion.vmult(c, a), 
                r.tangents(o.axisA, s.axisA), o.axisB.copy(a), s.axisB.copy(a), this.motorEquation.enabled && (t.quaternion.vmult(this.axisA, e.axisA), 
                i.quaternion.vmult(this.axisB, e.axisB));
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
            function i(t, i, e) {
                var o = void 0 !== (e = e || {}).maxForce ? e.maxForce : 1e6, a = new r(), l = new r(), h = new r();
                t.position.vadd(i.position, h), h.scale(.5, h), i.pointToLocalFrame(h, l), t.pointToLocalFrame(h, a), 
                n.call(this, t, a, i, l, o);
                var p = this.rotationalEquation1 = new s(t, i, e), c = this.rotationalEquation2 = new s(t, i, e), u = this.rotationalEquation3 = new s(t, i, e);
                this.equations.push(p, c, u);
            }
            e.exports = i;
            var n = (t("./Constraint"), t("./PointToPointConstraint")), s = t("../equations/RotationalEquation"), r = (t("../equations/RotationalMotorEquation"), 
            t("../equations/ContactEquation"), t("../math/Vec3"));
            i.prototype = new n(), i.constructor = i, new r(), new r(), i.prototype.update = function() {
                var t = this.bodyA, i = this.bodyB, e = (this.motorEquation, this.rotationalEquation1), o = this.rotationalEquation2, s = this.rotationalEquation3;
                n.prototype.update.call(this), t.vectorToWorldFrame(r.UNIT_X, e.axisA), i.vectorToWorldFrame(r.UNIT_Y, e.axisB), 
                t.vectorToWorldFrame(r.UNIT_Y, o.axisA), i.vectorToWorldFrame(r.UNIT_Z, o.axisB), 
                t.vectorToWorldFrame(r.UNIT_Z, s.axisA), i.vectorToWorldFrame(r.UNIT_X, s.axisB);
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
            function i(t, i, e, o, a) {
                n.call(this, t, e), a = void 0 !== a ? a : 1e6, this.pivotA = i ? i.clone() : new r(), 
                this.pivotB = o ? o.clone() : new r();
                var l = this.equationX = new s(t, e), h = this.equationY = new s(t, e), p = this.equationZ = new s(t, e);
                this.equations.push(l, h, p), l.minForce = h.minForce = p.minForce = -a, l.maxForce = h.maxForce = p.maxForce = a, 
                l.ni.set(1, 0, 0), h.ni.set(0, 1, 0), p.ni.set(0, 0, 1);
            }
            e.exports = i;
            var n = t("./Constraint"), s = t("../equations/ContactEquation"), r = t("../math/Vec3");
            i.prototype = new n(), i.prototype.update = function() {
                var t = this.bodyA, i = this.bodyB, e = this.equationX, o = this.equationY, n = this.equationZ;
                t.quaternion.vmult(this.pivotA, e.ri), i.quaternion.vmult(this.pivotB, e.rj), o.ri.copy(e.ri), 
                o.rj.copy(e.rj), n.ri.copy(e.ri), n.rj.copy(e.rj);
            };
        }, {
            "../equations/ContactEquation": 19,
            "../math/Vec3": 30,
            "./Constraint": 13
        } ],
        18: [ function(t, e, o) {
            function i(t, i, e) {
                var o = void 0 !== (e = e || {}).maxForce ? e.maxForce : 1e6;
                s.call(this, t, i, -o, o), this.axisA = e.axisA ? e.axisA.clone() : new n(1, 0, 0), 
                this.axisB = e.axisB ? e.axisB.clone() : new n(0, 1, 0), this.angle = void 0 !== e.angle ? e.angle : 0;
            }
            e.exports = i;
            var n = t("../math/Vec3"), s = (t("../math/Mat3"), t("./Equation"));
            i.prototype = new s(), i.prototype.constructor = i;
            var r = new n(), a = new n();
            i.prototype.computeB = function(t) {
                var i = this.a, e = this.b, o = this.axisA, n = this.axisB, s = r, l = a, h = this.jacobianElementA, p = this.jacobianElementB;
                return o.cross(n, s), n.cross(o, l), h.rotational.copy(l), p.rotational.copy(s), 
                -(Math.cos(this.angle) - o.dot(n)) * i - this.computeGW() * e - t * this.computeGiMf();
            };
        }, {
            "../math/Mat3": 27,
            "../math/Vec3": 30,
            "./Equation": 20
        } ],
        19: [ function(t, e, o) {
            function i(t, i, e) {
                e = void 0 !== e ? e : 1e6, n.call(this, t, i, 0, e), this.restitution = 0, this.ri = new s(), 
                this.rj = new s(), this.ni = new s();
            }
            e.exports = i;
            var n = t("./Equation"), s = t("../math/Vec3");
            t("../math/Mat3"), i.prototype = new n(), i.prototype.constructor = i;
            var r = new s(), a = new s(), l = new s();
            i.prototype.computeB = function(t) {
                var i = this.a, e = this.b, o = this.bi, n = this.bj, s = this.ri, h = this.rj, p = r, c = a, u = o.velocity, d = o.angularVelocity, v = (o.force, 
                o.torque, n.velocity), y = n.angularVelocity, f = (n.force, n.torque, l), m = this.jacobianElementA, w = this.jacobianElementB, x = this.ni;
                s.cross(x, p), h.cross(x, c), x.negate(m.spatial), p.negate(m.rotational), w.spatial.copy(x), 
                w.rotational.copy(c), f.copy(n.position), f.vadd(h, f), f.vsub(o.position, f), f.vsub(s, f);
                var g = x.dot(f), b = this.restitution + 1;
                return -g * i - (b * v.dot(x) - b * u.dot(x) + y.dot(c) - d.dot(p)) * e - t * this.computeGiMf();
            };
            var h = new s(), p = new s(), c = new s(), u = new s(), d = new s();
            i.prototype.getImpactVelocityAlongNormal = function() {
                var t = h, i = p, e = c, o = u, n = d;
                return this.bi.position.vadd(this.ri, e), this.bj.position.vadd(this.rj, o), this.bi.getVelocityAtWorldPoint(e, t), 
                this.bj.getVelocityAtWorldPoint(o, i), t.vsub(i, n), this.ni.dot(n);
            };
        }, {
            "../math/Mat3": 27,
            "../math/Vec3": 30,
            "./Equation": 20
        } ],
        20: [ function(t, e, o) {
            function i(t, e, o, s) {
                this.id = i.id++, this.minForce = void 0 === o ? -1e6 : o, this.maxForce = void 0 === s ? 1e6 : s, 
                this.bi = t, this.bj = e, this.a = 0, this.b = 0, this.eps = 0, this.jacobianElementA = new n(), 
                this.jacobianElementB = new n(), this.enabled = !0, this.setSpookParams(1e7, 4, 1 / 60);
            }
            e.exports = i;
            var n = t("../math/JacobianElement"), s = t("../math/Vec3");
            i.prototype.constructor = i, i.id = 0, i.prototype.setSpookParams = function(t, i, e) {
                var o = i, n = t, s = e;
                this.a = 4 / (s * (1 + 4 * o)), this.b = 4 * o / (1 + 4 * o), this.eps = 4 / (s * s * n * (1 + 4 * o));
            }, i.prototype.computeB = function(t, i, e) {
                var o = this.computeGW();
                return -this.computeGq() * t - o * i - this.computeGiMf() * e;
            }, i.prototype.computeGq = function() {
                var t = this.jacobianElementA, i = this.jacobianElementB, e = this.bi, o = this.bj, n = e.position, s = o.position;
                return t.spatial.dot(n) + i.spatial.dot(s);
            };
            var r = new s();
            i.prototype.computeGW = function() {
                var t = this.jacobianElementA, i = this.jacobianElementB, e = this.bi, o = this.bj, n = e.velocity, s = o.velocity, a = e.angularVelocity || r, l = o.angularVelocity || r;
                return t.multiplyVectors(n, a) + i.multiplyVectors(s, l);
            }, i.prototype.computeGWlambda = function() {
                var t = this.jacobianElementA, i = this.jacobianElementB, e = this.bi, o = this.bj, n = e.vlambda, s = o.vlambda, a = e.wlambda || r, l = o.wlambda || r;
                return t.multiplyVectors(n, a) + i.multiplyVectors(s, l);
            };
            var a = new s(), l = new s(), h = new s(), p = new s();
            i.prototype.computeGiMf = function() {
                var t = this.jacobianElementA, i = this.jacobianElementB, e = this.bi, o = this.bj, n = e.force, s = e.torque, r = o.force, c = o.torque, u = e.invMassSolve, d = o.invMassSolve;
                return e.invInertiaWorldSolve ? e.invInertiaWorldSolve.vmult(s, h) : h.set(0, 0, 0), 
                o.invInertiaWorldSolve ? o.invInertiaWorldSolve.vmult(c, p) : p.set(0, 0, 0), n.mult(u, a), 
                r.mult(d, l), t.multiplyVectors(a, h) + i.multiplyVectors(l, p);
            };
            var c = new s();
            i.prototype.computeGiMGt = function() {
                var t = this.jacobianElementA, i = this.jacobianElementB, e = this.bi, o = this.bj, n = e.invMassSolve, s = o.invMassSolve, r = e.invInertiaWorldSolve, a = o.invInertiaWorldSolve, l = n + s;
                return r && (r.vmult(t.rotational, c), l += c.dot(t.rotational)), a && (a.vmult(i.rotational, c), 
                l += c.dot(i.rotational)), l;
            };
            var u = new s();
            new s(), new s(), new s(), new s(), new s(), i.prototype.addToWlambda = function(t) {
                var i = this.jacobianElementA, e = this.jacobianElementB, o = this.bi, n = this.bj, s = u;
                i.spatial.mult(o.invMassSolve * t, s), o.vlambda.vadd(s, o.vlambda), e.spatial.mult(n.invMassSolve * t, s), 
                n.vlambda.vadd(s, n.vlambda), o.invInertiaWorldSolve && (o.invInertiaWorldSolve.vmult(i.rotational, s), 
                s.mult(t, s), o.wlambda.vadd(s, o.wlambda)), n.invInertiaWorldSolve && (n.invInertiaWorldSolve.vmult(e.rotational, s), 
                s.mult(t, s), n.wlambda.vadd(s, n.wlambda));
            }, i.prototype.computeC = function() {
                return this.computeGiMGt() + this.eps;
            };
        }, {
            "../math/JacobianElement": 26,
            "../math/Vec3": 30
        } ],
        21: [ function(t, e, o) {
            function i(t, i, e) {
                n.call(this, t, i, -e, e), this.ri = new s(), this.rj = new s(), this.t = new s();
            }
            e.exports = i;
            var n = t("./Equation"), s = t("../math/Vec3");
            t("../math/Mat3"), i.prototype = new n(), i.prototype.constructor = i;
            var r = new s(), a = new s();
            i.prototype.computeB = function(t) {
                var i = (this.a, this.b), e = (this.bi, this.bj, this.ri), o = this.rj, n = r, s = a, l = this.t;
                e.cross(l, n), o.cross(l, s);
                var h = this.jacobianElementA, p = this.jacobianElementB;
                return l.negate(h.spatial), n.negate(h.rotational), p.spatial.copy(l), p.rotational.copy(s), 
                -this.computeGW() * i - t * this.computeGiMf();
            };
        }, {
            "../math/Mat3": 27,
            "../math/Vec3": 30,
            "./Equation": 20
        } ],
        22: [ function(t, e, o) {
            function i(t, i, e) {
                var o = void 0 !== (e = e || {}).maxForce ? e.maxForce : 1e6;
                s.call(this, t, i, -o, o), this.axisA = e.axisA ? e.axisA.clone() : new n(1, 0, 0), 
                this.axisB = e.axisB ? e.axisB.clone() : new n(0, 1, 0), this.maxAngle = Math.PI / 2;
            }
            e.exports = i;
            var n = t("../math/Vec3"), s = (t("../math/Mat3"), t("./Equation"));
            i.prototype = new s(), i.prototype.constructor = i;
            var r = new n(), a = new n();
            i.prototype.computeB = function(t) {
                var i = this.a, e = this.b, o = this.axisA, n = this.axisB, s = r, l = a, h = this.jacobianElementA, p = this.jacobianElementB;
                return o.cross(n, s), n.cross(o, l), h.rotational.copy(l), p.rotational.copy(s), 
                -(Math.cos(this.maxAngle) - o.dot(n)) * i - this.computeGW() * e - t * this.computeGiMf();
            };
        }, {
            "../math/Mat3": 27,
            "../math/Vec3": 30,
            "./Equation": 20
        } ],
        23: [ function(t, e, o) {
            function i(t, i, e) {
                e = void 0 !== e ? e : 1e6, s.call(this, t, i, -e, e), this.axisA = new n(), this.axisB = new n(), 
                this.targetVelocity = 0;
            }
            e.exports = i;
            var n = t("../math/Vec3"), s = (t("../math/Mat3"), t("./Equation"));
            i.prototype = new s(), i.prototype.constructor = i, i.prototype.computeB = function(t) {
                var i = (this.a, this.b), e = (this.bi, this.bj, this.axisA), o = this.axisB, n = this.jacobianElementA, s = this.jacobianElementB;
                return n.rotational.copy(e), o.negate(s.rotational), -(this.computeGW() - this.targetVelocity) * i - t * this.computeGiMf();
            };
        }, {
            "../math/Mat3": 27,
            "../math/Vec3": 30,
            "./Equation": 20
        } ],
        24: [ function(t, e, o) {
            function i(t, e, o) {
                o = n.defaults(o, {
                    friction: .3,
                    restitution: .3,
                    contactEquationStiffness: 1e7,
                    contactEquationRelaxation: 3,
                    frictionEquationStiffness: 1e7,
                    frictionEquationRelaxation: 3
                }), this.id = i.idCounter++, this.materials = [ t, e ], this.friction = o.friction, 
                this.restitution = o.restitution, this.contactEquationStiffness = o.contactEquationStiffness, 
                this.contactEquationRelaxation = o.contactEquationRelaxation, this.frictionEquationStiffness = o.frictionEquationStiffness, 
                this.frictionEquationRelaxation = o.frictionEquationRelaxation;
            }
            var n = t("../utils/Utils");
            e.exports = i, i.idCounter = 0;
        }, {
            "../utils/Utils": 53
        } ],
        25: [ function(t, e, o) {
            function i(t) {
                var e = "";
                "string" == typeof (t = t || {}) ? (e = t, t = {}) : "object" == typeof t && (e = ""), 
                this.name = e, this.id = i.idCounter++, this.friction = void 0 !== t.friction ? t.friction : -1, 
                this.restitution = void 0 !== t.restitution ? t.restitution : -1;
            }
            e.exports = i, i.idCounter = 0;
        }, {} ],
        26: [ function(t, e, o) {
            function i() {
                this.spatial = new n(), this.rotational = new n();
            }
            e.exports = i;
            var n = t("./Vec3");
            i.prototype.multiplyElement = function(t) {
                return t.spatial.dot(this.spatial) + t.rotational.dot(this.rotational);
            }, i.prototype.multiplyVectors = function(t, i) {
                return t.dot(this.spatial) + i.dot(this.rotational);
            };
        }, {
            "./Vec3": 30
        } ],
        27: [ function(t, e, o) {
            function i(t) {
                this.elements = t || [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
            }
            e.exports = i;
            var n = t("./Vec3");
            i.prototype.identity = function() {
                var t = this.elements;
                t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, 
                t[8] = 1;
            }, i.prototype.setZero = function() {
                var t = this.elements;
                t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 0, t[6] = 0, t[7] = 0, 
                t[8] = 0;
            }, i.prototype.setTrace = function(t) {
                var i = this.elements;
                i[0] = t.x, i[4] = t.y, i[8] = t.z;
            }, i.prototype.getTrace = function(t) {
                t = t || new n();
                var i = this.elements;
                t.x = i[0], t.y = i[4], t.z = i[8];
            }, i.prototype.vmult = function(t, i) {
                i = i || new n();
                var e = this.elements, o = t.x, s = t.y, r = t.z;
                return i.x = e[0] * o + e[1] * s + e[2] * r, i.y = e[3] * o + e[4] * s + e[5] * r, 
                i.z = e[6] * o + e[7] * s + e[8] * r, i;
            }, i.prototype.smult = function(t) {
                for (var i = 0; i < this.elements.length; i++) this.elements[i] *= t;
            }, i.prototype.mmult = function(t, e) {
                for (var o = e || new i(), n = 0; 3 > n; n++) for (var s = 0; 3 > s; s++) {
                    for (var r = 0, a = 0; 3 > a; a++) r += t.elements[n + 3 * a] * this.elements[a + 3 * s];
                    o.elements[n + 3 * s] = r;
                }
                return o;
            }, i.prototype.scale = function(t, e) {
                e = e || new i();
                for (var o = this.elements, n = e.elements, s = 0; 3 !== s; s++) n[3 * s + 0] = t.x * o[3 * s + 0], 
                n[3 * s + 1] = t.y * o[3 * s + 1], n[3 * s + 2] = t.z * o[3 * s + 2];
                return e;
            }, i.prototype.solve = function(t, i) {
                i = i || new n();
                for (var e = [], o = 0; 12 > o; o++) e.push(0);
                var s;
                for (o = 0; 3 > o; o++) for (s = 0; 3 > s; s++) e[o + 4 * s] = this.elements[o + 3 * s];
                e[3] = t.x, e[7] = t.y, e[11] = t.z;
                var r, a, l = 3, h = l;
                do {
                    if (0 === e[(o = h - l) + 4 * o]) for (s = o + 1; h > s; s++) if (0 !== e[o + 4 * s]) {
                        r = 4;
                        do {
                            e[(a = 4 - r) + 4 * o] += e[a + 4 * s];
                        } while (--r);
                        break;
                    }
                    if (0 !== e[o + 4 * o]) for (s = o + 1; h > s; s++) {
                        var p = e[o + 4 * s] / e[o + 4 * o];
                        r = 4;
                        do {
                            e[(a = 4 - r) + 4 * s] = o >= a ? 0 : e[a + 4 * s] - e[a + 4 * o] * p;
                        } while (--r);
                    }
                } while (--l);
                if (i.z = e[11] / e[10], i.y = (e[7] - e[6] * i.z) / e[5], i.x = (e[3] - e[2] * i.z - e[1] * i.y) / e[0], 
                isNaN(i.x) || isNaN(i.y) || isNaN(i.z) || i.x === 1 / 0 || i.y === 1 / 0 || i.z === 1 / 0) throw "Could not solve equation! Got x=[" + i.toString() + "], b=[" + t.toString() + "], A=[" + this.toString() + "]";
                return i;
            }, i.prototype.e = function(t, i, e) {
                return void 0 === e ? this.elements[i + 3 * t] : void (this.elements[i + 3 * t] = e);
            }, i.prototype.copy = function(t) {
                for (var i = 0; i < t.elements.length; i++) this.elements[i] = t.elements[i];
                return this;
            }, i.prototype.toString = function() {
                for (var t = "", i = 0; 9 > i; i++) t += this.elements[i] + ",";
                return t;
            }, i.prototype.reverse = function(t) {
                t = t || new i();
                for (var e = [], o = 0; 18 > o; o++) e.push(0);
                var n;
                for (o = 0; 3 > o; o++) for (n = 0; 3 > n; n++) e[o + 6 * n] = this.elements[o + 3 * n];
                e[3] = 1, e[9] = 0, e[15] = 0, e[4] = 0, e[10] = 1, e[16] = 0, e[5] = 0, e[11] = 0, 
                e[17] = 1;
                var s, r, a = 3, l = a;
                do {
                    if (0 === e[(o = l - a) + 6 * o]) for (n = o + 1; l > n; n++) if (0 !== e[o + 6 * n]) {
                        s = 6;
                        do {
                            e[(r = 6 - s) + 6 * o] += e[r + 6 * n];
                        } while (--s);
                        break;
                    }
                    if (0 !== e[o + 6 * o]) for (n = o + 1; l > n; n++) {
                        var h = e[o + 6 * n] / e[o + 6 * o];
                        s = 6;
                        do {
                            e[(r = 6 - s) + 6 * n] = o >= r ? 0 : e[r + 6 * n] - e[r + 6 * o] * h;
                        } while (--s);
                    }
                } while (--a);
                o = 2;
                do {
                    n = o - 1;
                    do {
                        h = e[o + 6 * n] / e[o + 6 * o];
                        s = 6;
                        do {
                            e[(r = 6 - s) + 6 * n] = e[r + 6 * n] - e[r + 6 * o] * h;
                        } while (--s);
                    } while (n--);
                } while (--o);
                o = 2;
                do {
                    h = 1 / e[o + 6 * o];
                    s = 6;
                    do {
                        e[(r = 6 - s) + 6 * o] = e[r + 6 * o] * h;
                    } while (--s);
                } while (o--);
                o = 2;
                do {
                    n = 2;
                    do {
                        if (r = e[3 + n + 6 * o], isNaN(r) || r === 1 / 0) throw "Could not reverse! A=[" + this.toString() + "]";
                        t.e(o, n, r);
                    } while (n--);
                } while (o--);
                return t;
            }, i.prototype.setRotationFromQuaternion = function(t) {
                var i = t.x, e = t.y, o = t.z, n = t.w, s = i + i, r = e + e, a = o + o, l = i * s, h = i * r, p = i * a, c = e * r, u = e * a, d = o * a, v = n * s, y = n * r, f = n * a, m = this.elements;
                return m[0] = 1 - (c + d), m[1] = h - f, m[2] = p + y, m[3] = h + f, m[4] = 1 - (l + d), 
                m[5] = u - v, m[6] = p - y, m[7] = u + v, m[8] = 1 - (l + c), this;
            }, i.prototype.transpose = function(t) {
                for (var e = (t = t || new i()).elements, o = this.elements, n = 0; 3 !== n; n++) for (var s = 0; 3 !== s; s++) e[3 * n + s] = o[3 * s + n];
                return t;
            };
        }, {
            "./Vec3": 30
        } ],
        28: [ function(t, e, o) {
            function i(t, i, e, o) {
                this.x = void 0 !== t ? t : 0, this.y = void 0 !== i ? i : 0, this.z = void 0 !== e ? e : 0, 
                this.w = void 0 !== o ? o : 1;
            }
            e.exports = i;
            var n = t("./Vec3");
            i.prototype.set = function(t, i, e, o) {
                this.x = t, this.y = i, this.z = e, this.w = o;
            }, i.prototype.toString = function() {
                return this.x + "," + this.y + "," + this.z + "," + this.w;
            }, i.prototype.toArray = function() {
                return [ this.x, this.y, this.z, this.w ];
            }, i.prototype.setFromAxisAngle = function(t, i) {
                var e = Math.sin(.5 * i);
                this.x = t.x * e, this.y = t.y * e, this.z = t.z * e, this.w = Math.cos(.5 * i);
            }, i.prototype.toAxisAngle = function(t) {
                t = t || new n(), this.normalize();
                var i = 2 * Math.acos(this.w), e = Math.sqrt(1 - this.w * this.w);
                return .001 > e ? (t.x = this.x, t.y = this.y, t.z = this.z) : (t.x = this.x / e, 
                t.y = this.y / e, t.z = this.z / e), [ t, i ];
            };
            var s = new n(), r = new n();
            i.prototype.setFromVectors = function(t, i) {
                if (t.isAntiparallelTo(i)) {
                    var e = s, o = r;
                    t.tangents(e, o), this.setFromAxisAngle(e, Math.PI);
                } else {
                    var n = t.cross(i);
                    this.x = n.x, this.y = n.y, this.z = n.z, this.w = Math.sqrt(Math.pow(t.norm(), 2) * Math.pow(i.norm(), 2)) + t.dot(i), 
                    this.normalize();
                }
            };
            var a = new n(), l = new n(), h = new n();
            i.prototype.mult = function(t, e) {
                e = e || new i();
                var o = this.w, n = a, s = l, r = h;
                return n.set(this.x, this.y, this.z), s.set(t.x, t.y, t.z), e.w = o * t.w - n.dot(s), 
                n.cross(s, r), e.x = o * s.x + t.w * n.x + r.x, e.y = o * s.y + t.w * n.y + r.y, 
                e.z = o * s.z + t.w * n.z + r.z, e;
            }, i.prototype.inverse = function(t) {
                var e = this.x, o = this.y, n = this.z, s = this.w;
                t = t || new i(), this.conjugate(t);
                var r = 1 / (e * e + o * o + n * n + s * s);
                return t.x *= r, t.y *= r, t.z *= r, t.w *= r, t;
            }, i.prototype.conjugate = function(t) {
                return (t = t || new i()).x = -this.x, t.y = -this.y, t.z = -this.z, t.w = this.w, 
                t;
            }, i.prototype.normalize = function() {
                var t = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
                0 === t ? (this.x = 0, this.y = 0, this.z = 0, this.w = 0) : (t = 1 / t, this.x *= t, 
                this.y *= t, this.z *= t, this.w *= t);
            }, i.prototype.normalizeFast = function() {
                var t = (3 - (this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)) / 2;
                0 === t ? (this.x = 0, this.y = 0, this.z = 0, this.w = 0) : (this.x *= t, this.y *= t, 
                this.z *= t, this.w *= t);
            }, i.prototype.vmult = function(t, i) {
                i = i || new n();
                var e = t.x, o = t.y, s = t.z, r = this.x, a = this.y, l = this.z, h = this.w, p = h * e + a * s - l * o, c = h * o + l * e - r * s, u = h * s + r * o - a * e, d = -r * e - a * o - l * s;
                return i.x = p * h + d * -r + c * -l - u * -a, i.y = c * h + d * -a + u * -r - p * -l, 
                i.z = u * h + d * -l + p * -a - c * -r, i;
            }, i.prototype.copy = function(t) {
                return this.x = t.x, this.y = t.y, this.z = t.z, this.w = t.w, this;
            }, i.prototype.toEuler = function(t, i) {
                i = i || "YZX";
                var e, o, n, s = this.x, r = this.y, a = this.z, l = this.w;
                switch (i) {
                  case "YZX":
                    var h = s * r + a * l;
                    if (h > .499 && (e = 2 * Math.atan2(s, l), o = Math.PI / 2, n = 0), -.499 > h && (e = -2 * Math.atan2(s, l), 
                    o = -Math.PI / 2, n = 0), isNaN(e)) {
                        var p = s * s, c = r * r, u = a * a;
                        e = Math.atan2(2 * r * l - 2 * s * a, 1 - 2 * c - 2 * u), o = Math.asin(2 * h), 
                        n = Math.atan2(2 * s * l - 2 * r * a, 1 - 2 * p - 2 * u);
                    }
                    break;

                  default:
                    throw new Error("Euler order " + i + " not supported yet.");
                }
                t.y = e, t.z = o, t.x = n;
            }, i.prototype.setFromEuler = function(t, i, e, o) {
                o = o || "XYZ";
                var n = Math.cos(t / 2), s = Math.cos(i / 2), r = Math.cos(e / 2), a = Math.sin(t / 2), l = Math.sin(i / 2), h = Math.sin(e / 2);
                return "XYZ" === o ? (this.x = a * s * r + n * l * h, this.y = n * l * r - a * s * h, 
                this.z = n * s * h + a * l * r, this.w = n * s * r - a * l * h) : "YXZ" === o ? (this.x = a * s * r + n * l * h, 
                this.y = n * l * r - a * s * h, this.z = n * s * h - a * l * r, this.w = n * s * r + a * l * h) : "ZXY" === o ? (this.x = a * s * r - n * l * h, 
                this.y = n * l * r + a * s * h, this.z = n * s * h + a * l * r, this.w = n * s * r - a * l * h) : "ZYX" === o ? (this.x = a * s * r - n * l * h, 
                this.y = n * l * r + a * s * h, this.z = n * s * h - a * l * r, this.w = n * s * r + a * l * h) : "YZX" === o ? (this.x = a * s * r + n * l * h, 
                this.y = n * l * r + a * s * h, this.z = n * s * h - a * l * r, this.w = n * s * r - a * l * h) : "XZY" === o && (this.x = a * s * r - n * l * h, 
                this.y = n * l * r - a * s * h, this.z = n * s * h + a * l * r, this.w = n * s * r + a * l * h), 
                this;
            }, i.prototype.clone = function() {
                return new i(this.x, this.y, this.z, this.w);
            };
        }, {
            "./Vec3": 30
        } ],
        29: [ function(t, e, o) {
            function i(t) {
                t = t || {}, this.position = new n(), t.position && this.position.copy(t.position), 
                this.quaternion = new s(), t.quaternion && this.quaternion.copy(t.quaternion);
            }
            var n = t("./Vec3"), s = t("./Quaternion");
            e.exports = i;
            var r = new s();
            i.pointToLocalFrame = function(t, i, e, o) {
                o = o || new n();
                return e.vsub(t, o), i.conjugate(r), r.vmult(o, o), o;
            }, i.prototype.pointToLocal = function(t, e) {
                return i.pointToLocalFrame(this.position, this.quaternion, t, e);
            }, i.pointToWorldFrame = function(t, i, e, o) {
                o = o || new n();
                return i.vmult(e, o), o.vadd(t, o), o;
            }, i.prototype.pointToWorld = function(t, e) {
                return i.pointToWorldFrame(this.position, this.quaternion, t, e);
            }, i.prototype.vectorToWorldFrame = function(t, i) {
                i = i || new n();
                return this.quaternion.vmult(t, i), i;
            }, i.vectorToWorldFrame = function(t, i, e) {
                return t.vmult(i, e), e;
            }, i.vectorToLocalFrame = function(t, i, e, o) {
                o = o || new n();
                return i.w *= -1, i.vmult(e, o), i.w *= -1, o;
            };
        }, {
            "./Quaternion": 28,
            "./Vec3": 30
        } ],
        30: [ function(t, e, o) {
            function i(t, i, e) {
                this.x = t || 0, this.y = i || 0, this.z = e || 0;
            }
            e.exports = i;
            var n = t("./Mat3");
            i.ZERO = new i(0, 0, 0), i.UNIT_X = new i(1, 0, 0), i.UNIT_Y = new i(0, 1, 0), i.UNIT_Z = new i(0, 0, 1), 
            i.prototype.cross = function(t, e) {
                var o = t.x, n = t.y, s = t.z, r = this.x, a = this.y, l = this.z;
                return (e = e || new i()).x = a * s - l * n, e.y = l * o - r * s, e.z = r * n - a * o, 
                e;
            }, i.prototype.set = function(t, i, e) {
                return this.x = t, this.y = i, this.z = e, this;
            }, i.prototype.setZero = function() {
                this.x = this.y = this.z = 0;
            }, i.prototype.vadd = function(t, e) {
                return e ? (e.x = t.x + this.x, e.y = t.y + this.y, void (e.z = t.z + this.z)) : new i(this.x + t.x, this.y + t.y, this.z + t.z);
            }, i.prototype.vsub = function(t, e) {
                return e ? (e.x = this.x - t.x, e.y = this.y - t.y, void (e.z = this.z - t.z)) : new i(this.x - t.x, this.y - t.y, this.z - t.z);
            }, i.prototype.crossmat = function() {
                return new n([ 0, -this.z, this.y, this.z, 0, -this.x, -this.y, this.x, 0 ]);
            }, i.prototype.normalize = function() {
                var t = this.x, i = this.y, e = this.z, o = Math.sqrt(t * t + i * i + e * e);
                if (o > 0) {
                    var n = 1 / o;
                    this.x *= n, this.y *= n, this.z *= n;
                } else this.x = 0, this.y = 0, this.z = 0;
                return o;
            }, i.prototype.unit = function(t) {
                t = t || new i();
                var e = this.x, o = this.y, n = this.z, s = Math.sqrt(e * e + o * o + n * n);
                return s > 0 ? (s = 1 / s, t.x = e * s, t.y = o * s, t.z = n * s) : (t.x = 1, t.y = 0, 
                t.z = 0), t;
            }, i.prototype.norm = function() {
                var t = this.x, i = this.y, e = this.z;
                return Math.sqrt(t * t + i * i + e * e);
            }, i.prototype.length = i.prototype.norm, i.prototype.norm2 = function() {
                return this.dot(this);
            }, i.prototype.lengthSquared = i.prototype.norm2, i.prototype.distanceTo = function(t) {
                var i = this.x, e = this.y, o = this.z, n = t.x, s = t.y, r = t.z;
                return Math.sqrt((n - i) * (n - i) + (s - e) * (s - e) + (r - o) * (r - o));
            }, i.prototype.distanceSquared = function(t) {
                var i = this.x, e = this.y, o = this.z, n = t.x, s = t.y, r = t.z;
                return (n - i) * (n - i) + (s - e) * (s - e) + (r - o) * (r - o);
            }, i.prototype.mult = function(t, e) {
                e = e || new i();
                var o = this.x, n = this.y, s = this.z;
                return e.x = t * o, e.y = t * n, e.z = t * s, e;
            }, i.prototype.scale = i.prototype.mult, i.prototype.dot = function(t) {
                return this.x * t.x + this.y * t.y + this.z * t.z;
            }, i.prototype.isZero = function() {
                return 0 === this.x && 0 === this.y && 0 === this.z;
            }, i.prototype.negate = function(t) {
                return (t = t || new i()).x = -this.x, t.y = -this.y, t.z = -this.z, t;
            };
            var s = new i(), r = new i();
            i.prototype.tangents = function(t, i) {
                var e = this.norm();
                if (e > 0) {
                    var o = s, n = 1 / e;
                    o.set(this.x * n, this.y * n, this.z * n);
                    var a = r;
                    Math.abs(o.x) < .9 ? (a.set(1, 0, 0), o.cross(a, t)) : (a.set(0, 1, 0), o.cross(a, t)), 
                    o.cross(t, i);
                } else t.set(1, 0, 0), i.set(0, 1, 0);
            }, i.prototype.toString = function() {
                return this.x + "," + this.y + "," + this.z;
            }, i.prototype.toArray = function() {
                return [ this.x, this.y, this.z ];
            }, i.prototype.copy = function(t) {
                return this.x = t.x, this.y = t.y, this.z = t.z, this;
            }, i.prototype.lerp = function(t, i, e) {
                var o = this.x, n = this.y, s = this.z;
                e.x = o + (t.x - o) * i, e.y = n + (t.y - n) * i, e.z = s + (t.z - s) * i;
            }, i.prototype.almostEquals = function(t, i) {
                return void 0 === i && (i = 1e-6), !(Math.abs(this.x - t.x) > i || Math.abs(this.y - t.y) > i || Math.abs(this.z - t.z) > i);
            }, i.prototype.almostZero = function(t) {
                return void 0 === t && (t = 1e-6), !(Math.abs(this.x) > t || Math.abs(this.y) > t || Math.abs(this.z) > t);
            };
            var a = new i();
            i.prototype.isAntiparallelTo = function(t, i) {
                return this.negate(a), a.almostEquals(t, i);
            }, i.prototype.clone = function() {
                return new i(this.x, this.y, this.z);
            };
        }, {
            "./Mat3": 27
        } ],
        31: [ function(t, e, o) {
            function i(t) {
                t = t || {}, n.apply(this), this.id = i.idCounter++, this.world = null, this.preStep = null, 
                this.postStep = null, this.vlambda = new s(), this.collisionFilterGroup = "number" == typeof t.collisionFilterGroup ? t.collisionFilterGroup : 1, 
                this.collisionFilterMask = "number" == typeof t.collisionFilterMask ? t.collisionFilterMask : 1, 
                this.collisionResponse = !0, this.position = new s(), t.position && this.position.copy(t.position), 
                this.previousPosition = new s(), this.initPosition = new s(), this.velocity = new s(), 
                t.velocity && this.velocity.copy(t.velocity), this.initVelocity = new s(), this.force = new s();
                var e = "number" == typeof t.mass ? t.mass : 0;
                this.mass = e, this.invMass = e > 0 ? 1 / e : 0, this.material = t.material || null, 
                this.linearDamping = "number" == typeof t.linearDamping ? t.linearDamping : .01, 
                this.type = 0 >= e ? i.STATIC : i.DYNAMIC, typeof t.type == typeof i.STATIC && (this.type = t.type), 
                this.allowSleep = void 0 === t.allowSleep || t.allowSleep, this.sleepState = 0, 
                this.sleepSpeedLimit = void 0 !== t.sleepSpeedLimit ? t.sleepSpeedLimit : .1, this.sleepTimeLimit = void 0 !== t.sleepTimeLimit ? t.sleepTimeLimit : 1, 
                this.timeLastSleepy = 0, this._wakeUpAfterNarrowphase = !1, this.torque = new s(), 
                this.quaternion = new a(), t.quaternion && this.quaternion.copy(t.quaternion), this.initQuaternion = new a(), 
                this.angularVelocity = new s(), t.angularVelocity && this.angularVelocity.copy(t.angularVelocity), 
                this.initAngularVelocity = new s(), this.interpolatedPosition = new s(), this.interpolatedQuaternion = new a(), 
                this.shapes = [], this.shapeOffsets = [], this.shapeOrientations = [], this.inertia = new s(), 
                this.invInertia = new s(), this.invInertiaWorld = new r(), this.invMassSolve = 0, 
                this.invInertiaSolve = new s(), this.invInertiaWorldSolve = new r(), this.fixedRotation = void 0 !== t.fixedRotation && t.fixedRotation, 
                this.angularDamping = void 0 !== t.angularDamping ? t.angularDamping : .01, this.aabb = new l(), 
                this.aabbNeedsUpdate = !0, this.wlambda = new s(), t.shape && this.addShape(t.shape), 
                this.updateMassProperties();
            }
            e.exports = i;
            var n = t("../utils/EventTarget"), s = (t("../shapes/Shape"), t("../math/Vec3")), r = t("../math/Mat3"), a = t("../math/Quaternion"), l = (t("../material/Material"), 
            t("../collision/AABB")), h = t("../shapes/Box");
            i.prototype = new n(), i.prototype.constructor = i, i.DYNAMIC = 1, i.STATIC = 2, 
            i.KINEMATIC = 4, i.AWAKE = 0, i.SLEEPY = 1, i.SLEEPING = 2, i.idCounter = 0, i.prototype.wakeUp = function() {
                var t = this.sleepState;
                this.sleepState = 0, t === i.SLEEPING && this.dispatchEvent({
                    type: "wakeup"
                });
            }, i.prototype.sleep = function() {
                this.sleepState = i.SLEEPING, this.velocity.set(0, 0, 0), this.angularVelocity.set(0, 0, 0);
            }, i.sleepyEvent = {
                type: "sleepy"
            }, i.sleepEvent = {
                type: "sleep"
            }, i.prototype.sleepTick = function(t) {
                if (this.allowSleep) {
                    var e = this.sleepState, o = this.velocity.norm2() + this.angularVelocity.norm2(), n = Math.pow(this.sleepSpeedLimit, 2);
                    e === i.AWAKE && n > o ? (this.sleepState = i.SLEEPY, this.timeLastSleepy = t, this.dispatchEvent(i.sleepyEvent)) : e === i.SLEEPY && o > n ? this.wakeUp() : e === i.SLEEPY && t - this.timeLastSleepy > this.sleepTimeLimit && (this.sleep(), 
                    this.dispatchEvent(i.sleepEvent));
                }
            }, i.prototype.updateSolveMassProperties = function() {
                this.sleepState === i.SLEEPING || this.type === i.KINEMATIC ? (this.invMassSolve = 0, 
                this.invInertiaSolve.setZero(), this.invInertiaWorldSolve.setZero()) : (this.invMassSolve = this.invMass, 
                this.invInertiaSolve.copy(this.invInertia), this.invInertiaWorldSolve.copy(this.invInertiaWorld));
            }, i.prototype.pointToLocalFrame = function(t, i) {
                i = i || new s();
                return t.vsub(this.position, i), this.quaternion.conjugate().vmult(i, i), i;
            }, i.prototype.vectorToLocalFrame = function(t, i) {
                i = i || new s();
                return this.quaternion.conjugate().vmult(t, i), i;
            }, i.prototype.pointToWorldFrame = function(t, i) {
                i = i || new s();
                return this.quaternion.vmult(t, i), i.vadd(this.position, i), i;
            }, i.prototype.vectorToWorldFrame = function(t, i) {
                i = i || new s();
                return this.quaternion.vmult(t, i), i;
            };
            var p = new s(), c = new a();
            i.prototype.addShape = function(t, i, e) {
                var o = new s(), n = new a();
                return i && o.copy(i), e && n.copy(e), this.shapes.push(t), this.shapeOffsets.push(o), 
                this.shapeOrientations.push(n), this.updateMassProperties(), this.updateBoundingRadius(), 
                this.aabbNeedsUpdate = !0, this;
            }, i.prototype.updateBoundingRadius = function() {
                for (var t = this.shapes, i = this.shapeOffsets, e = t.length, o = 0, n = 0; n !== e; n++) {
                    var s = t[n];
                    s.updateBoundingSphereRadius();
                    var r = i[n].norm(), a = s.boundingSphereRadius;
                    r + a > o && (o = r + a);
                }
                this.boundingRadius = o;
            };
            var u = new l();
            i.prototype.computeAABB = function() {
                for (var t = this.shapes, i = this.shapeOffsets, e = this.shapeOrientations, o = t.length, n = p, s = c, r = this.quaternion, a = this.aabb, l = u, h = 0; h !== o; h++) {
                    var d = t[h];
                    e[h].mult(r, s), s.vmult(i[h], n), n.vadd(this.position, n), d.calculateWorldAABB(n, s, l.lowerBound, l.upperBound), 
                    0 === h ? a.copy(l) : a.extend(l);
                }
                this.aabbNeedsUpdate = !1;
            };
            var d = new r(), v = new r();
            new r(), i.prototype.updateInertiaWorld = function(t) {
                var i = this.invInertia;
                if (i.x !== i.y || i.y !== i.z || t) {
                    var e = d, o = v;
                    e.setRotationFromQuaternion(this.quaternion), e.transpose(o), e.scale(i, e), e.mmult(o, this.invInertiaWorld);
                }
            };
            var y = new s(), f = new s();
            i.prototype.applyForce = function(t, e) {
                if (this.type === i.DYNAMIC) {
                    var o = y;
                    e.vsub(this.position, o);
                    var n = f;
                    o.cross(t, n), this.force.vadd(t, this.force), this.torque.vadd(n, this.torque);
                }
            };
            var m = new s(), w = new s();
            i.prototype.applyLocalForce = function(t, e) {
                if (this.type === i.DYNAMIC) {
                    var o = m, n = w;
                    this.vectorToWorldFrame(t, o), this.pointToWorldFrame(e, n), this.applyForce(o, n);
                }
            };
            var x = new s(), g = new s(), b = new s();
            i.prototype.applyImpulse = function(t, e) {
                if (this.type === i.DYNAMIC) {
                    var o = x;
                    e.vsub(this.position, o);
                    var n = g;
                    n.copy(t), n.mult(this.invMass, n), this.velocity.vadd(n, this.velocity);
                    var s = b;
                    o.cross(t, s), this.invInertiaWorld.vmult(s, s), this.angularVelocity.vadd(s, this.angularVelocity);
                }
            };
            var B = new s(), E = new s();
            i.prototype.applyLocalImpulse = function(t, e) {
                if (this.type === i.DYNAMIC) {
                    var o = B, n = E;
                    this.vectorToWorldFrame(t, o), this.pointToWorldFrame(e, n), this.applyImpulse(o, n);
                }
            };
            var A = new s();
            i.prototype.updateMassProperties = function() {
                var t = A;
                this.invMass = this.mass > 0 ? 1 / this.mass : 0;
                var i = this.inertia, e = this.fixedRotation;
                this.computeAABB(), t.set((this.aabb.upperBound.x - this.aabb.lowerBound.x) / 2, (this.aabb.upperBound.y - this.aabb.lowerBound.y) / 2, (this.aabb.upperBound.z - this.aabb.lowerBound.z) / 2), 
                h.calculateInertia(t, this.mass, i), this.invInertia.set(i.x > 0 && !e ? 1 / i.x : 0, i.y > 0 && !e ? 1 / i.y : 0, i.z > 0 && !e ? 1 / i.z : 0), 
                this.updateInertiaWorld(!0);
            }, i.prototype.getVelocityAtWorldPoint = function(t, i) {
                var e = new s();
                return t.vsub(this.position, e), this.angularVelocity.cross(e, i), this.velocity.vadd(i, i), 
                i;
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
            function i(t) {
                this.chassisBody = t.chassisBody, this.wheelInfos = [], this.sliding = !1, this.world = null, 
                this.indexRightAxis = void 0 !== t.indexRightAxis ? t.indexRightAxis : 1, this.indexForwardAxis = void 0 !== t.indexForwardAxis ? t.indexForwardAxis : 0, 
                this.indexUpAxis = void 0 !== t.indexUpAxis ? t.indexUpAxis : 2;
            }
            function n(t, i, e, o, n) {
                var r = 0, a = e, l = g, h = b, p = B;
                t.getVelocityAtWorldPoint(a, l), i.getVelocityAtWorldPoint(a, h), l.vsub(h, p);
                return (r = -o.dot(p) * (1 / (s(t, e, o) + s(i, e, o)))) > n && (r = n), -n > r && (r = -n), 
                r;
            }
            function s(t, i, e) {
                var o = E, n = A, s = S, r = C;
                return i.vsub(t.position, o), o.cross(e, n), t.invInertiaWorld.vmult(n, r), r.cross(o, s), 
                t.invMass + e.dot(s);
            }
            function r(t, i, e, o, n, s) {
                if (n.norm2() > 1.1) return 0;
                var r = z, a = q, l = R;
                t.getVelocityAtWorldPoint(i, r), e.getVelocityAtWorldPoint(o, a), r.vsub(a, l);
                return -.2 * n.dot(l) * (1 / (t.invMass + e.invMass));
            }
            var a = (t("./Body"), t("../math/Vec3")), l = t("../math/Quaternion"), h = (t("../collision/RaycastResult"), 
            t("../collision/Ray")), p = t("../objects/WheelInfo");
            e.exports = i;
            var c = (new a(), new a(), new a(), new a()), u = new a(), d = new a();
            new h(), i.prototype.addWheel = function(t) {
                var i = new p(t = t || {}), e = this.wheelInfos.length;
                return this.wheelInfos.push(i), e;
            }, i.prototype.setSteeringValue = function(t, i) {
                this.wheelInfos[i].steering = t;
            }, new a(), i.prototype.applyEngineForce = function(t, i) {
                this.wheelInfos[i].engineForce = t;
            }, i.prototype.setBrake = function(t, i) {
                this.wheelInfos[i].brake = t;
            }, i.prototype.addToWorld = function(t) {
                this.constraints, t.add(this.chassisBody);
                var i = this;
                this.preStepCallback = function() {
                    i.updateVehicle(t.dt);
                }, t.addEventListener("preStep", this.preStepCallback), this.world = t;
            }, i.prototype.getVehicleAxisWorld = function(t, i) {
                i.set(0 === t ? 1 : 0, 1 === t ? 1 : 0, 2 === t ? 1 : 0), this.chassisBody.vectorToWorldFrame(i, i);
            }, i.prototype.updateVehicle = function(t) {
                for (var i = this.wheelInfos, e = i.length, o = this.chassisBody, n = 0; e > n; n++) this.updateWheelTransform(n);
                this.currentVehicleSpeedKmHour = 3.6 * o.velocity.norm();
                var s = new a();
                this.getVehicleAxisWorld(this.indexForwardAxis, s), s.dot(o.velocity) < 0 && (this.currentVehicleSpeedKmHour *= -1);
                for (n = 0; e > n; n++) this.castRay(i[n]);
                this.updateSuspension(t);
                var r = new a(), l = new a();
                for (n = 0; e > n; n++) {
                    var h = (d = i[n]).suspensionForce;
                    h > d.maxSuspensionForce && (h = d.maxSuspensionForce), d.raycastResult.hitNormalWorld.scale(h * t, r), 
                    d.raycastResult.hitPointWorld.vsub(o.position, l), o.applyImpulse(r, d.raycastResult.hitPointWorld);
                }
                this.updateFriction(t);
                var p = new a(), c = new a(), u = new a();
                for (n = 0; e > n; n++) {
                    var d = i[n];
                    o.getVelocityAtWorldPoint(d.chassisConnectionPointWorld, u);
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
            }, i.prototype.updateSuspension = function(t) {
                for (var i = this.chassisBody.mass, e = this.wheelInfos, o = e.length, n = 0; o > n; n++) {
                    var s = e[n];
                    if (s.isInContact) {
                        var r, a = s.suspensionRestLength - s.suspensionLength;
                        r = s.suspensionStiffness * a * s.clippedInvContactDotSuspension;
                        var l = s.suspensionRelativeVelocity;
                        r -= (0 > l ? s.dampingCompression : s.dampingRelaxation) * l, s.suspensionForce = r * i, 
                        s.suspensionForce < 0 && (s.suspensionForce = 0);
                    } else s.suspensionForce = 0;
                }
            }, i.prototype.removeFromWorld = function(t) {
                this.constraints, t.remove(this.chassisBody), t.removeEventListener("preStep", this.preStepCallback), 
                this.world = null;
            };
            var v = new a(), y = new a();
            i.prototype.castRay = function(t) {
                var i = v, e = y;
                this.updateWheelTransformWorld(t);
                var o = this.chassisBody, n = -1, s = t.suspensionRestLength + t.radius;
                t.directionWorld.scale(s, i);
                var r = t.chassisConnectionPointWorld;
                r.vadd(i, e);
                var l = t.raycastResult;
                l.reset();
                var h = o.collisionResponse;
                o.collisionResponse = !1, this.world.rayTest(r, e, l), o.collisionResponse = h;
                var p = l.body;
                if (t.raycastResult.groundObject = 0, p) {
                    n = l.distance, t.raycastResult.hitNormalWorld = l.hitNormalWorld, t.isInContact = !0;
                    var c = l.distance;
                    t.suspensionLength = c - t.radius;
                    var u = t.suspensionRestLength - t.maxSuspensionTravel, d = t.suspensionRestLength + t.maxSuspensionTravel;
                    t.suspensionLength < u && (t.suspensionLength = u), t.suspensionLength > d && (t.suspensionLength = d, 
                    t.raycastResult.reset());
                    var f = t.raycastResult.hitNormalWorld.dot(t.directionWorld), m = new a();
                    o.getVelocityAtWorldPoint(t.raycastResult.hitPointWorld, m);
                    var w = t.raycastResult.hitNormalWorld.dot(m);
                    if (f >= -.1) t.suspensionRelativeVelocity = 0, t.clippedInvContactDotSuspension = 10; else {
                        var x = -1 / f;
                        t.suspensionRelativeVelocity = w * x, t.clippedInvContactDotSuspension = x;
                    }
                } else t.suspensionLength = t.suspensionRestLength + 0 * t.maxSuspensionTravel, 
                t.suspensionRelativeVelocity = 0, t.directionWorld.scale(-1, t.raycastResult.hitNormalWorld), 
                t.clippedInvContactDotSuspension = 1;
                return n;
            }, i.prototype.updateWheelTransformWorld = function(t) {
                t.isInContact = !1;
                var i = this.chassisBody;
                i.pointToWorldFrame(t.chassisConnectionPointLocal, t.chassisConnectionPointWorld), 
                i.vectorToWorldFrame(t.directionLocal, t.directionWorld), i.vectorToWorldFrame(t.axleLocal, t.axleWorld);
            }, i.prototype.updateWheelTransform = function(t) {
                var i = c, e = u, o = d, n = this.wheelInfos[t];
                this.updateWheelTransformWorld(n), n.directionLocal.scale(-1, i), e.copy(n.axleLocal), 
                i.cross(e, o), o.normalize(), e.normalize();
                var s = n.steering, r = new l();
                r.setFromAxisAngle(i, s);
                var a = new l();
                a.setFromAxisAngle(e, n.rotation);
                var h = n.worldTransform.quaternion;
                this.chassisBody.quaternion.mult(r, h), h.mult(a, h), h.normalize();
                var p = n.worldTransform.position;
                p.copy(n.directionWorld), p.scale(n.suspensionLength, p), p.vadd(n.chassisConnectionPointWorld, p);
            };
            var f = [ new a(1, 0, 0), new a(0, 1, 0), new a(0, 0, 1) ];
            i.prototype.getWheelTransformWorld = function(t) {
                return this.wheelInfos[t].worldTransform;
            };
            var m = new a(), w = [], x = [];
            i.prototype.updateFriction = function(t) {
                for (var i = m, e = this.wheelInfos, o = e.length, s = this.chassisBody, l = x, h = w, p = 0; o > p; p++) {
                    (v = (z = e[p]).raycastResult.body) && 0, z.sideImpulse = 0, z.forwardImpulse = 0, 
                    l[p] || (l[p] = new a()), h[p] || (h[p] = new a());
                }
                for (p = 0; o > p; p++) {
                    if (v = (z = e[p]).raycastResult.body) {
                        var c = h[p];
                        this.getWheelTransformWorld(p).vectorToWorldFrame(f[this.indexRightAxis], c);
                        var u = z.raycastResult.hitNormalWorld, d = c.dot(u);
                        u.scale(d, i), c.vsub(i, c), c.normalize(), u.cross(c, l[p]), l[p].normalize(), 
                        z.sideImpulse = r(s, z.raycastResult.hitPointWorld, v, z.raycastResult.hitPointWorld, c), 
                        z.sideImpulse *= 1;
                    }
                }
                this.sliding = !1;
                for (p = 0; o > p; p++) {
                    var v = (z = e[p]).raycastResult.body, y = 0;
                    if (z.slipInfo = 1, v) {
                        var g = z.brake ? z.brake : 0;
                        y = n(s, v, z.raycastResult.hitPointWorld, l[p], g);
                        var b = g / (y += z.engineForce * t);
                        z.slipInfo *= b;
                    }
                    if (z.forwardImpulse = 0, z.skidInfo = 1, v) {
                        z.skidInfo = 1;
                        var B = z.suspensionForce * t * z.frictionSlip, E = B * B;
                        z.forwardImpulse = y;
                        var A = .5 * z.forwardImpulse, S = 1 * z.sideImpulse, C = A * A + S * S;
                        if (z.sliding = !1, C > E) {
                            this.sliding = !0, z.sliding = !0;
                            b = B / Math.sqrt(C);
                            z.skidInfo *= b;
                        }
                    }
                }
                if (this.sliding) for (p = 0; o > p; p++) {
                    0 !== (z = e[p]).sideImpulse && z.skidInfo < 1 && (z.forwardImpulse *= z.skidInfo, 
                    z.sideImpulse *= z.skidInfo);
                }
                for (p = 0; o > p; p++) {
                    var z = e[p], q = new a();
                    if (q.copy(z.raycastResult.hitPointWorld), 0 !== z.forwardImpulse) {
                        var R = new a();
                        l[p].scale(z.forwardImpulse, R), s.applyImpulse(R, q);
                    }
                    if (0 !== z.sideImpulse) {
                        v = z.raycastResult.body;
                        var M = new a();
                        M.copy(z.raycastResult.hitPointWorld);
                        var P = new a();
                        h[p].scale(z.sideImpulse, P), s.pointToLocalFrame(q, q), q["xyz"[this.indexUpAxis]] *= z.rollInfluence, 
                        s.pointToWorldFrame(q, q), s.applyImpulse(P, q), P.scale(-1, P), v.applyImpulse(P, M);
                    }
                }
            };
            var g = new a(), b = new a(), B = new a(), E = new a(), A = new a(), S = new a(), C = new a(), z = new a(), q = new a(), R = new a();
        }, {
            "../collision/Ray": 9,
            "../collision/RaycastResult": 10,
            "../math/Quaternion": 28,
            "../math/Vec3": 30,
            "../objects/WheelInfo": 36,
            "./Body": 31
        } ],
        33: [ function(t, e, o) {
            function i(t) {
                if (this.wheelBodies = [], this.coordinateSystem = void 0 === t.coordinateSystem ? new a(1, 2, 3) : t.coordinateSystem.clone(), 
                this.chassisBody = t.chassisBody, !this.chassisBody) {
                    var i = new r(new a(5, 2, .5));
                    this.chassisBody = new n(1, i);
                }
                this.constraints = [], this.wheelAxes = [], this.wheelForces = [];
            }
            var n = t("./Body"), s = t("../shapes/Sphere"), r = t("../shapes/Box"), a = t("../math/Vec3"), l = t("../constraints/HingeConstraint");
            e.exports = i, i.prototype.addWheel = function(t) {
                var i = (t = t || {}).body;
                i || (i = new n(1, new s(1.2))), this.wheelBodies.push(i), this.wheelForces.push(0);
                var e = (new a(), void 0 !== t.position ? t.position.clone() : new a()), o = new a();
                this.chassisBody.pointToWorldFrame(e, o), i.position.set(o.x, o.y, o.z);
                var r = void 0 !== t.axis ? t.axis.clone() : new a(0, 1, 0);
                this.wheelAxes.push(r);
                var h = new l(this.chassisBody, i, {
                    pivotA: e,
                    axisA: r,
                    pivotB: a.ZERO,
                    axisB: r,
                    collideConnected: !1
                });
                return this.constraints.push(h), this.wheelBodies.length - 1;
            }, i.prototype.setSteeringValue = function(t, i) {
                var e = this.wheelAxes[i], o = Math.cos(t), n = Math.sin(t), s = e.x, r = e.y;
                this.constraints[i].axisA.set(o * s - n * r, n * s + o * r, 0);
            }, i.prototype.setMotorSpeed = function(t, i) {
                var e = this.constraints[i];
                e.enableMotor(), e.motorTargetVelocity = t;
            }, i.prototype.disableMotor = function(t) {
                this.constraints[t].disableMotor();
            };
            var h = new a();
            i.prototype.setWheelForce = function(t, i) {
                this.wheelForces[i] = t;
            }, i.prototype.applyWheelForce = function(t, i) {
                var e = this.wheelAxes[i], o = this.wheelBodies[i], n = o.torque;
                e.scale(t, h), o.vectorToWorldFrame(h, h), n.vadd(h, n);
            }, i.prototype.addToWorld = function(t) {
                for (var i = this.constraints, e = this.wheelBodies.concat([ this.chassisBody ]), o = 0; o < e.length; o++) t.add(e[o]);
                for (o = 0; o < i.length; o++) t.addConstraint(i[o]);
                t.addEventListener("preStep", this._update.bind(this));
            }, i.prototype._update = function() {
                for (var t = this.wheelForces, i = 0; i < t.length; i++) this.applyWheelForce(t[i], i);
            }, i.prototype.removeFromWorld = function(t) {
                for (var i = this.constraints, e = this.wheelBodies.concat([ this.chassisBody ]), o = 0; o < e.length; o++) t.remove(e[o]);
                for (o = 0; o < i.length; o++) t.removeConstraint(i[o]);
            };
            var p = new a();
            i.prototype.getWheelSpeed = function(t) {
                var i = this.wheelAxes[t], e = this.wheelBodies[t].angularVelocity;
                return this.chassisBody.vectorToWorldFrame(i, p), e.dot(p);
            };
        }, {
            "../constraints/HingeConstraint": 15,
            "../math/Vec3": 30,
            "../shapes/Box": 37,
            "../shapes/Sphere": 44,
            "./Body": 31
        } ],
        34: [ function(t, e, o) {
            function i() {
                this.particles = [], this.density = 1, this.smoothingRadius = 1, this.speedOfSound = 1, 
                this.viscosity = .01, this.eps = 1e-6, this.pressures = [], this.densities = [], 
                this.neighbors = [];
            }
            e.exports = i;
            var n = (t("../shapes/Shape"), t("../math/Vec3"));
            t("../math/Quaternion"), t("../shapes/Particle"), t("../objects/Body"), t("../material/Material"), 
            i.prototype.add = function(t) {
                this.particles.push(t), this.neighbors.length < this.particles.length && this.neighbors.push([]);
            }, i.prototype.remove = function(t) {
                var i = this.particles.indexOf(t);
                -1 !== i && (this.particles.splice(i, 1), this.neighbors.length > this.particles.length && this.neighbors.pop());
            };
            var s = new n();
            i.prototype.getNeighbors = function(t, i) {
                for (var e = this.particles.length, o = t.id, n = this.smoothingRadius * this.smoothingRadius, r = s, a = 0; a !== e; a++) {
                    var l = this.particles[a];
                    l.position.vsub(t.position, r), o !== l.id && r.norm2() < n && i.push(l);
                }
            };
            var r = new n(), a = new n(), l = new n(), h = new n(), p = new n(), c = new n();
            i.prototype.update = function() {
                for (var t = this.particles.length, i = r, e = this.speedOfSound, o = this.eps, n = 0; n !== t; n++) {
                    var s = this.particles[n];
                    (S = this.neighbors[n]).length = 0, this.getNeighbors(s, S), S.push(this.particles[n]);
                    for (var u = S.length, d = 0, v = 0; v !== u; v++) {
                        s.position.vsub(S[v].position, i);
                        var y = i.norm(), f = this.w(y);
                        d += S[v].mass * f;
                    }
                    this.densities[n] = d, this.pressures[n] = e * e * (this.densities[n] - this.density);
                }
                var m = a, w = l, x = h, g = p, b = c;
                for (n = 0; n !== t; n++) {
                    var B = this.particles[n];
                    m.set(0, 0, 0), w.set(0, 0, 0);
                    var E, A, S;
                    for (u = (S = this.neighbors[n]).length, v = 0; v !== u; v++) {
                        var C = S[v];
                        B.position.vsub(C.position, g);
                        var z = g.norm();
                        E = -C.mass * (this.pressures[n] / (this.densities[n] * this.densities[n] + o) + this.pressures[v] / (this.densities[v] * this.densities[v] + o)), 
                        this.gradw(g, x), x.mult(E, x), m.vadd(x, m), C.velocity.vsub(B.velocity, b), b.mult(1 / (1e-4 + this.densities[n] * this.densities[v]) * this.viscosity * C.mass, b), 
                        A = this.nablaw(z), b.mult(A, b), w.vadd(b, w);
                    }
                    w.mult(B.mass, w), m.mult(B.mass, m), B.force.vadd(w, B.force), B.force.vadd(m, B.force);
                }
            }, i.prototype.w = function(t) {
                var i = this.smoothingRadius;
                return 315 / (64 * Math.PI * Math.pow(i, 9)) * Math.pow(i * i - t * t, 3);
            }, i.prototype.gradw = function(t, i) {
                var e = t.norm(), o = this.smoothingRadius;
                t.mult(945 / (32 * Math.PI * Math.pow(o, 9)) * Math.pow(o * o - e * e, 2), i);
            }, i.prototype.nablaw = function(t) {
                var i = this.smoothingRadius;
                return 945 / (32 * Math.PI * Math.pow(i, 9)) * (i * i - t * t) * (7 * t * t - 3 * i * i);
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
            function i(t, i, e) {
                e = e || {}, this.restLength = "number" == typeof e.restLength ? e.restLength : 1, 
                this.stiffness = e.stiffness || 100, this.damping = e.damping || 1, this.bodyA = t, 
                this.bodyB = i, this.localAnchorA = new n(), this.localAnchorB = new n(), e.localAnchorA && this.localAnchorA.copy(e.localAnchorA), 
                e.localAnchorB && this.localAnchorB.copy(e.localAnchorB), e.worldAnchorA && this.setWorldAnchorA(e.worldAnchorA), 
                e.worldAnchorB && this.setWorldAnchorB(e.worldAnchorB);
            }
            var n = t("../math/Vec3");
            e.exports = i, i.prototype.setWorldAnchorA = function(t) {
                this.bodyA.pointToLocalFrame(t, this.localAnchorA);
            }, i.prototype.setWorldAnchorB = function(t) {
                this.bodyB.pointToLocalFrame(t, this.localAnchorB);
            }, i.prototype.getWorldAnchorA = function(t) {
                this.bodyA.pointToWorldFrame(this.localAnchorA, t);
            }, i.prototype.getWorldAnchorB = function(t) {
                this.bodyB.pointToWorldFrame(this.localAnchorB, t);
            };
            var s = new n(), r = new n(), a = new n(), l = new n(), h = new n(), p = new n(), c = new n(), u = new n(), d = new n(), v = new n(), y = new n();
            i.prototype.applyForce = function() {
                var t = this.stiffness, i = this.damping, e = this.restLength, o = this.bodyA, n = this.bodyB, f = s, m = r, w = a, x = l, g = y, b = h, B = p, E = c, A = u, S = d, C = v;
                this.getWorldAnchorA(b), this.getWorldAnchorB(B), b.vsub(o.position, E), B.vsub(n.position, A), 
                B.vsub(b, f);
                var z = f.norm();
                m.copy(f), m.normalize(), n.velocity.vsub(o.velocity, w), n.angularVelocity.cross(A, g), 
                w.vadd(g, w), o.angularVelocity.cross(E, g), w.vsub(g, w), m.mult(-t * (z - e) - i * w.dot(m), x), 
                o.force.vsub(x, o.force), n.force.vadd(x, n.force), E.cross(x, S), A.cross(x, C), 
                o.torque.vsub(S, o.torque), n.torque.vadd(C, n.torque);
            };
        }, {
            "../math/Vec3": 30
        } ],
        36: [ function(t, e, o) {
            function i(t) {
                t = a.defaults(t, {
                    chassisConnectionPointLocal: new n(),
                    chassisConnectionPointWorld: new n(),
                    directionLocal: new n(),
                    directionWorld: new n(),
                    axleLocal: new n(),
                    axleWorld: new n(),
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
                this.worldTransform = new s(), this.isInContact = !1;
            }
            var n = t("../math/Vec3"), s = t("../math/Transform"), r = t("../collision/RaycastResult"), a = t("../utils/Utils");
            e.exports = i;
            var l = new n(), h = new n();
            l = new n();
            i.prototype.updateWheel = function(t) {
                var i = this.raycastResult;
                if (this.isInContact) {
                    var e = i.hitNormalWorld.dot(i.directionWorld);
                    i.hitPointWorld.vsub(t.position, h), t.getVelocityAtWorldPoint(h, l);
                    var o = i.hitNormalWorld.dot(l);
                    if (e >= -.1) this.suspensionRelativeVelocity = 0, this.clippedInvContactDotSuspension = 10; else {
                        var n = -1 / e;
                        this.suspensionRelativeVelocity = o * n, this.clippedInvContactDotSuspension = n;
                    }
                } else i.suspensionLength = this.suspensionRestLength, this.suspensionRelativeVelocity = 0, 
                i.directionWorld.scale(-1, i.hitNormalWorld), this.clippedInvContactDotSuspension = 1;
            };
        }, {
            "../collision/RaycastResult": 10,
            "../math/Transform": 29,
            "../math/Vec3": 30,
            "../utils/Utils": 53
        } ],
        37: [ function(t, e, o) {
            function i(t) {
                n.call(this), this.type = n.types.BOX, this.halfExtents = t, this.convexPolyhedronRepresentation = null, 
                this.updateConvexPolyhedronRepresentation(), this.updateBoundingSphereRadius();
            }
            e.exports = i;
            var n = t("./Shape"), s = t("../math/Vec3"), r = t("./ConvexPolyhedron");
            i.prototype = new n(), i.prototype.constructor = i, i.prototype.updateConvexPolyhedronRepresentation = function() {
                var t = this.halfExtents.x, i = this.halfExtents.y, e = this.halfExtents.z, o = s, n = [ new o(-t, -i, -e), new o(t, -i, -e), new o(t, i, -e), new o(-t, i, -e), new o(-t, -i, e), new o(t, -i, e), new o(t, i, e), new o(-t, i, e) ], a = (new o(0, 0, 1), 
                new o(0, 1, 0), new o(1, 0, 0), new r(n, [ [ 3, 2, 1, 0 ], [ 4, 5, 6, 7 ], [ 5, 4, 0, 1 ], [ 2, 3, 7, 6 ], [ 0, 4, 7, 3 ], [ 1, 2, 6, 5 ] ]));
                this.convexPolyhedronRepresentation = a, a.material = this.material;
            }, i.prototype.calculateLocalInertia = function(t, e) {
                return e = e || new s(), i.calculateInertia(this.halfExtents, t, e), e;
            }, i.calculateInertia = function(t, i, e) {
                var o = t;
                e.x = 1 / 12 * i * (2 * o.y * 2 * o.y + 2 * o.z * 2 * o.z), e.y = 1 / 12 * i * (2 * o.x * 2 * o.x + 2 * o.z * 2 * o.z), 
                e.z = 1 / 12 * i * (2 * o.y * 2 * o.y + 2 * o.x * 2 * o.x);
            }, i.prototype.getSideNormals = function(t, i) {
                var e = t, o = this.halfExtents;
                if (e[0].set(o.x, 0, 0), e[1].set(0, o.y, 0), e[2].set(0, 0, o.z), e[3].set(-o.x, 0, 0), 
                e[4].set(0, -o.y, 0), e[5].set(0, 0, -o.z), void 0 !== i) for (var n = 0; n !== e.length; n++) i.vmult(e[n], e[n]);
                return e;
            }, i.prototype.volume = function() {
                return 8 * this.halfExtents.x * this.halfExtents.y * this.halfExtents.z;
            }, i.prototype.updateBoundingSphereRadius = function() {
                this.boundingSphereRadius = this.halfExtents.norm();
            };
            var a = new s();
            new s(), i.prototype.forEachWorldCorner = function(t, i, e) {
                for (var o = this.halfExtents, n = [ [ o.x, o.y, o.z ], [ -o.x, o.y, o.z ], [ -o.x, -o.y, o.z ], [ -o.x, -o.y, -o.z ], [ o.x, -o.y, -o.z ], [ o.x, o.y, -o.z ], [ -o.x, o.y, -o.z ], [ o.x, -o.y, o.z ] ], s = 0; s < n.length; s++) a.set(n[s][0], n[s][1], n[s][2]), 
                i.vmult(a, a), t.vadd(a, a), e(a.x, a.y, a.z);
            };
            var l = [ new s(), new s(), new s(), new s(), new s(), new s(), new s(), new s() ];
            i.prototype.calculateWorldAABB = function(t, i, e, o) {
                var n = this.halfExtents;
                l[0].set(n.x, n.y, n.z), l[1].set(-n.x, n.y, n.z), l[2].set(-n.x, -n.y, n.z), l[3].set(-n.x, -n.y, -n.z), 
                l[4].set(n.x, -n.y, -n.z), l[5].set(n.x, n.y, -n.z), l[6].set(-n.x, n.y, -n.z), 
                l[7].set(n.x, -n.y, n.z);
                var s = l[0];
                i.vmult(s, s), t.vadd(s, s), o.copy(s), e.copy(s);
                for (var r = 1; 8 > r; r++) {
                    s = l[r];
                    i.vmult(s, s), t.vadd(s, s);
                    var a = s.x, h = s.y, p = s.z;
                    a > o.x && (o.x = a), h > o.y && (o.y = h), p > o.z && (o.z = p), a < e.x && (e.x = a), 
                    h < e.y && (e.y = h), p < e.z && (e.z = p);
                }
            };
        }, {
            "../math/Vec3": 30,
            "./ConvexPolyhedron": 38,
            "./Shape": 43
        } ],
        38: [ function(t, e, o) {
            function i(t, i, e) {
                n.call(this), this.type = n.types.CONVEXPOLYHEDRON, this.vertices = t || [], this.worldVertices = [], 
                this.worldVerticesNeedsUpdate = !0, this.faces = i || [], this.faceNormals = [], 
                this.computeNormals(), this.worldFaceNormalsNeedsUpdate = !0, this.worldFaceNormals = [], 
                this.uniqueEdges = [], this.uniqueAxes = e ? e.slice() : null, this.computeEdges(), 
                this.updateBoundingSphereRadius();
            }
            e.exports = i;
            var n = t("./Shape"), s = t("../math/Vec3"), r = (t("../math/Quaternion"), t("../math/Transform"));
            i.prototype = new n(), i.prototype.constructor = i;
            var a = new s();
            i.prototype.computeEdges = function() {
                var t = this.faces, i = this.vertices, e = (i.length, this.uniqueEdges);
                e.length = 0;
                for (var o = a, n = 0; n !== t.length; n++) for (var s = t[n], r = s.length, l = 0; l !== r; l++) {
                    var h = (l + 1) % r;
                    i[s[l]].vsub(i[s[h]], o), o.normalize();
                    for (var p = !1, c = 0; c !== e.length; c++) if (e[c].almostEquals(o) || e[c].almostEquals(o)) {
                        p = !0;
                        break;
                    }
                    p || e.push(o.clone());
                }
            }, i.prototype.computeNormals = function() {
                this.faceNormals.length = this.faces.length;
                for (var t = 0; t < this.faces.length; t++) {
                    for (var i = 0; i < this.faces[t].length; i++) if (!this.vertices[this.faces[t][i]]) throw new Error("Vertex " + this.faces[t][i] + " not found!");
                    var e = this.faceNormals[t] || new s();
                    this.getFaceNormal(t, e), e.negate(e), this.faceNormals[t] = e;
                    var o = this.vertices[this.faces[t][0]];
                    if (e.dot(o) < 0) {
                        console.error(".faceNormals[" + t + "] = Vec3(" + e.toString() + ") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");
                        for (i = 0; i < this.faces[t].length; i++) console.warn(".vertices[" + this.faces[t][i] + "] = Vec3(" + this.vertices[this.faces[t][i]].toString() + ")");
                    }
                }
            };
            var l = new s(), h = new s();
            i.computeNormal = function(t, i, e, o) {
                i.vsub(t, h), e.vsub(i, l), l.cross(h, o), o.isZero() || o.normalize();
            }, i.prototype.getFaceNormal = function(t, e) {
                var o = this.faces[t], n = this.vertices[o[0]], s = this.vertices[o[1]], r = this.vertices[o[2]];
                return i.computeNormal(n, s, r, e);
            };
            var p = new s();
            i.prototype.clipAgainstHull = function(t, i, e, o, n, r, a, l, h) {
                for (var c = p, u = -1, d = -Number.MAX_VALUE, v = 0; v < e.faces.length; v++) {
                    c.copy(e.faceNormals[v]), n.vmult(c, c);
                    var y = c.dot(r);
                    y > d && (d = y, u = v);
                }
                for (var f = [], m = e.faces[u], w = m.length, x = 0; w > x; x++) {
                    var g = e.vertices[m[x]], b = new s();
                    b.copy(g), n.vmult(b, b), o.vadd(b, b), f.push(b);
                }
                u >= 0 && this.clipFaceAgainstHull(r, t, i, f, a, l, h);
            };
            var c = new s(), u = new s(), d = new s(), v = new s(), y = new s(), f = new s();
            i.prototype.findSeparatingAxis = function(t, i, e, o, n, s, r, a) {
                var l = c, h = u, p = d, m = v, w = y, x = f, g = Number.MAX_VALUE, b = this;
                if (b.uniqueAxes) for (var B = 0; B !== b.uniqueAxes.length; B++) {
                    if (e.vmult(b.uniqueAxes[B], l), !1 === (C = b.testSepAxis(l, t, i, e, o, n))) return !1;
                    g > C && (g = C, s.copy(l));
                } else {
                    var E = r ? r.length : b.faces.length;
                    for (B = 0; E > B; B++) {
                        var A = r ? r[B] : B;
                        if (l.copy(b.faceNormals[A]), e.vmult(l, l), !1 === (C = b.testSepAxis(l, t, i, e, o, n))) return !1;
                        g > C && (g = C, s.copy(l));
                    }
                }
                if (t.uniqueAxes) for (B = 0; B !== t.uniqueAxes.length; B++) {
                    if (n.vmult(t.uniqueAxes[B], h), 0, !1 === (C = b.testSepAxis(h, t, i, e, o, n))) return !1;
                    g > C && (g = C, s.copy(h));
                } else {
                    var S = a ? a.length : t.faces.length;
                    for (B = 0; S > B; B++) {
                        var C;
                        A = a ? a[B] : B;
                        if (h.copy(t.faceNormals[A]), n.vmult(h, h), 0, !1 === (C = b.testSepAxis(h, t, i, e, o, n))) return !1;
                        g > C && (g = C, s.copy(h));
                    }
                }
                for (var z = 0; z !== b.uniqueEdges.length; z++) {
                    e.vmult(b.uniqueEdges[z], m);
                    for (var q = 0; q !== t.uniqueEdges.length; q++) if (n.vmult(t.uniqueEdges[q], w), 
                    m.cross(w, x), !x.almostZero()) {
                        x.normalize();
                        var R = b.testSepAxis(x, t, i, e, o, n);
                        if (!1 === R) return !1;
                        g > R && (g = R, s.copy(x));
                    }
                }
                return o.vsub(i, p), p.dot(s) > 0 && s.negate(s), !0;
            };
            var m = [], w = [];
            i.prototype.testSepAxis = function(t, e, o, n, s, r) {
                i.project(this, t, o, n, m), i.project(e, t, s, r, w);
                var a = m[0], l = m[1], h = w[0], p = w[1];
                if (p > a || l > h) return !1;
                var c = a - p, u = h - l;
                return u > c ? c : u;
            };
            var x = new s(), g = new s();
            i.prototype.calculateLocalInertia = function(t, i) {
                this.computeLocalAABB(x, g);
                var e = g.x - x.x, o = g.y - x.y, n = g.z - x.z;
                i.x = 1 / 12 * t * (2 * o * 2 * o + 2 * n * 2 * n), i.y = 1 / 12 * t * (2 * e * 2 * e + 2 * n * 2 * n), 
                i.z = 1 / 12 * t * (2 * o * 2 * o + 2 * e * 2 * e);
            }, i.prototype.getPlaneConstantOfFace = function(t) {
                var i = this.faces[t], e = this.faceNormals[t], o = this.vertices[i[0]];
                return -e.dot(o);
            };
            var b = new s(), B = new s(), E = new s(), A = new s(), S = new s(), C = new s(), z = new s(), q = new s();
            i.prototype.clipFaceAgainstHull = function(t, i, e, o, n, s, r) {
                for (var a = b, l = B, h = E, p = A, c = S, u = C, d = z, v = q, y = this, f = o, m = [], w = -1, x = Number.MAX_VALUE, g = 0; g < y.faces.length; g++) {
                    a.copy(y.faceNormals[g]), e.vmult(a, a);
                    var R = a.dot(t);
                    x > R && (x = R, w = g);
                }
                if (!(0 > w)) {
                    var M = y.faces[w];
                    M.connectedFaces = [];
                    for (var P = 0; P < y.faces.length; P++) for (var F = 0; F < y.faces[P].length; F++) -1 !== M.indexOf(y.faces[P][F]) && P !== w && -1 === M.connectedFaces.indexOf(P) && M.connectedFaces.push(P);
                    for (var V = (f.length, M.length), T = 0; V > T; T++) {
                        var N = y.vertices[M[T]], I = y.vertices[M[(T + 1) % V]];
                        N.vsub(I, l), h.copy(l), e.vmult(h, h), i.vadd(h, h), p.copy(this.faceNormals[w]), 
                        e.vmult(p, p), i.vadd(p, p), h.cross(p, c), c.negate(c), u.copy(N), e.vmult(u, u), 
                        i.vadd(u, u);
                        var W = (u.dot(c), M.connectedFaces[T]);
                        d.copy(this.faceNormals[W]);
                        var L = this.getPlaneConstantOfFace(W);
                        v.copy(d), e.vmult(v, v);
                        var j = L - v.dot(i);
                        for (this.clipFaceAgainstPlane(f, m, v, j); f.length; ) f.shift();
                        for (;m.length; ) f.push(m.shift());
                    }
                    d.copy(this.faceNormals[w]);
                    L = this.getPlaneConstantOfFace(w);
                    v.copy(d), e.vmult(v, v);
                    for (j = L - v.dot(i), P = 0; P < f.length; P++) {
                        var O = v.dot(f[P]) + j;
                        if (n >= O && (console.log("clamped: depth=" + O + " to minDist=" + n), O = n), 
                        s >= O) {
                            var k = f[P];
                            if (0 >= O) {
                                var _ = {
                                    point: k,
                                    normal: v,
                                    depth: O
                                };
                                r.push(_);
                            }
                        }
                    }
                }
            }, i.prototype.clipFaceAgainstPlane = function(t, i, e, o) {
                var n, r, a = t.length;
                if (2 > a) return i;
                var l = t[t.length - 1], h = t[0];
                n = e.dot(l) + o;
                for (var p = 0; a > p; p++) {
                    if (h = t[p], r = e.dot(h) + o, 0 > n) if (0 > r) {
                        (c = new s()).copy(h), i.push(c);
                    } else {
                        var c = new s();
                        l.lerp(h, n / (n - r), c), i.push(c);
                    } else if (0 > r) {
                        c = new s();
                        l.lerp(h, n / (n - r), c), i.push(c), i.push(h);
                    }
                    l = h, n = r;
                }
                return i;
            }, i.prototype.computeWorldVertices = function(t, i) {
                for (var e = this.vertices.length; this.worldVertices.length < e; ) this.worldVertices.push(new s());
                for (var o = this.vertices, n = this.worldVertices, r = 0; r !== e; r++) i.vmult(o[r], n[r]), 
                t.vadd(n[r], n[r]);
                this.worldVerticesNeedsUpdate = !1;
            }, new s(), i.prototype.computeLocalAABB = function(t, i) {
                var e = this.vertices.length, o = this.vertices;
                t.set(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), i.set(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
                for (var n = 0; e > n; n++) {
                    var s = o[n];
                    s.x < t.x ? t.x = s.x : s.x > i.x && (i.x = s.x), s.y < t.y ? t.y = s.y : s.y > i.y && (i.y = s.y), 
                    s.z < t.z ? t.z = s.z : s.z > i.z && (i.z = s.z);
                }
            }, i.prototype.computeWorldFaceNormals = function(t) {
                for (var i = this.faceNormals.length; this.worldFaceNormals.length < i; ) this.worldFaceNormals.push(new s());
                for (var e = this.faceNormals, o = this.worldFaceNormals, n = 0; n !== i; n++) t.vmult(e[n], o[n]);
                this.worldFaceNormalsNeedsUpdate = !1;
            }, i.prototype.updateBoundingSphereRadius = function() {
                for (var t = 0, i = this.vertices, e = 0, o = i.length; e !== o; e++) {
                    var n = i[e].norm2();
                    n > t && (t = n);
                }
                this.boundingSphereRadius = Math.sqrt(t);
            };
            var R = new s();
            i.prototype.calculateWorldAABB = function(t, i, e, o) {
                for (var n, s, r, a, l, h, p = this.vertices.length, c = this.vertices, u = 0; p > u; u++) {
                    R.copy(c[u]), i.vmult(R, R), t.vadd(R, R);
                    var d = R;
                    d.x < n || void 0 === n ? n = d.x : (d.x > a || void 0 === a) && (a = d.x), d.y < s || void 0 === s ? s = d.y : (d.y > l || void 0 === l) && (l = d.y), 
                    d.z < r || void 0 === r ? r = d.z : (d.z > h || void 0 === h) && (h = d.z);
                }
                e.set(n, s, r), o.set(a, l, h);
            }, i.prototype.volume = function() {
                return 4 * Math.PI * this.boundingSphereRadius / 3;
            }, i.prototype.getAveragePointLocal = function(t) {
                t = t || new s();
                for (var i = this.vertices.length, e = this.vertices, o = 0; i > o; o++) t.vadd(e[o], t);
                return t.mult(1 / i, t), t;
            }, i.prototype.transformAllPoints = function(t, i) {
                var e = this.vertices.length, o = this.vertices;
                if (i) {
                    for (var n = 0; e > n; n++) {
                        var s = o[n];
                        i.vmult(s, s);
                    }
                    for (n = 0; n < this.faceNormals.length; n++) {
                        s = this.faceNormals[n];
                        i.vmult(s, s);
                    }
                }
                if (t) for (n = 0; e > n; n++) {
                    (s = o[n]).vadd(t, s);
                }
            };
            var M = new s(), P = new s(), F = new s();
            i.prototype.pointIsInside = function(t) {
                var i = this.vertices.length, e = this.vertices, o = this.faces, n = this.faceNormals, s = this.faces.length, r = M;
                this.getAveragePointLocal(r);
                for (var a = 0; s > a; a++) {
                    i = (this.faces[a].length, n[a]);
                    var l = e[o[a][0]], h = P;
                    t.vsub(l, h);
                    var p = i.dot(h), c = F;
                    r.vsub(l, c);
                    var u = i.dot(c);
                    if (0 > p && u > 0 || p > 0 && 0 > u) return !1;
                }
                return -1;
            };
            var V = (new s(), new s()), T = new s();
            i.project = function(t, i, e, o, n) {
                var s = t.vertices.length, a = V, l = 0, h = 0, p = T, c = t.vertices;
                p.setZero(), r.vectorToLocalFrame(e, o, i, a), r.pointToLocalFrame(e, o, p, p);
                var u = p.dot(a);
                h = l = c[0].dot(a);
                for (var d = 1; s > d; d++) {
                    var v = c[d].dot(a);
                    v > l && (l = v), h > v && (h = v);
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
            function i(t, i, e, o) {
                var a = o, l = [], h = [], p = [], c = [], u = [], d = Math.cos, v = Math.sin;
                l.push(new s(i * d(0), i * v(0), .5 * -e)), c.push(0), l.push(new s(t * d(0), t * v(0), .5 * e)), 
                u.push(1);
                for (var y = 0; a > y; y++) {
                    var f = 2 * Math.PI / a * (y + 1), m = 2 * Math.PI / a * (y + .5);
                    a - 1 > y ? (l.push(new s(i * d(f), i * v(f), .5 * -e)), c.push(2 * y + 2), l.push(new s(t * d(f), t * v(f), .5 * e)), 
                    u.push(2 * y + 3), p.push([ 2 * y + 2, 2 * y + 3, 2 * y + 1, 2 * y ])) : p.push([ 0, 1, 2 * y + 1, 2 * y ]), 
                    (a % 2 == 1 || a / 2 > y) && h.push(new s(d(m), v(m), 0));
                }
                p.push(u), h.push(new s(0, 0, 1));
                var w = [];
                for (y = 0; y < c.length; y++) w.push(c[c.length - y - 1]);
                p.push(w), this.type = n.types.CONVEXPOLYHEDRON, r.call(this, l, p, h);
            }
            e.exports = i;
            var n = t("./Shape"), s = t("../math/Vec3"), r = (t("../math/Quaternion"), t("./ConvexPolyhedron"));
            i.prototype = new r();
        }, {
            "../math/Quaternion": 28,
            "../math/Vec3": 30,
            "./ConvexPolyhedron": 38,
            "./Shape": 43
        } ],
        40: [ function(t, e, o) {
            function i(t, i) {
                i = a.defaults(i, {
                    maxValue: null,
                    minValue: null,
                    elementSize: 1
                }), this.data = t, this.maxValue = i.maxValue, this.minValue = i.minValue, this.elementSize = i.elementSize, 
                null === i.minValue && this.updateMinValue(), null === i.maxValue && this.updateMaxValue(), 
                this.cacheEnabled = !0, n.call(this), this.pillarConvex = new s(), this.pillarOffset = new r(), 
                this.type = n.types.HEIGHTFIELD, this.updateBoundingSphereRadius(), this._cachedPillars = {};
            }
            var n = t("./Shape"), s = t("./ConvexPolyhedron"), r = t("../math/Vec3"), a = t("../utils/Utils");
            e.exports = i, i.prototype = new n(), i.prototype.update = function() {
                this._cachedPillars = {};
            }, i.prototype.updateMinValue = function() {
                for (var t = this.data, i = t[0][0], e = 0; e !== t.length; e++) for (var o = 0; o !== t[e].length; o++) {
                    var n = t[e][o];
                    i > n && (i = n);
                }
                this.minValue = i;
            }, i.prototype.updateMaxValue = function() {
                for (var t = this.data, i = t[0][0], e = 0; e !== t.length; e++) for (var o = 0; o !== t[e].length; o++) {
                    var n = t[e][o];
                    n > i && (i = n);
                }
                this.maxValue = i;
            }, i.prototype.setHeightValueAtIndex = function(t, i, e) {
                this.data[t][i] = e, this.clearCachedConvexTrianglePillar(t, i, !1), t > 0 && (this.clearCachedConvexTrianglePillar(t - 1, i, !0), 
                this.clearCachedConvexTrianglePillar(t - 1, i, !1)), i > 0 && (this.clearCachedConvexTrianglePillar(t, i - 1, !0), 
                this.clearCachedConvexTrianglePillar(t, i - 1, !1)), i > 0 && t > 0 && this.clearCachedConvexTrianglePillar(t - 1, i - 1, !0);
            }, i.prototype.getRectMinMax = function(t, i, e, o, n) {
                n = n || [];
                for (var s = this.data, r = this.minValue, a = t; e >= a; a++) for (var l = i; o >= l; l++) {
                    var h = s[a][l];
                    h > r && (r = h);
                }
                n[0] = this.minValue, n[1] = r;
            }, i.prototype.getIndexOfPosition = function(t, i, e, o) {
                var n = this.elementSize, s = this.data, r = Math.floor(t / n), a = Math.floor(i / n);
                return e[0] = r, e[1] = a, o && (0 > r && (r = 0), 0 > a && (a = 0), r >= s.length - 1 && (r = s.length - 1), 
                a >= s[0].length - 1 && (a = s[0].length - 1)), !(0 > r || 0 > a || r >= s.length - 1 || a >= s[0].length - 1);
            }, i.prototype.getHeightAt = function(t, i, e) {
                var o = [];
                this.getIndexOfPosition(t, i, o, e);
                var n = [];
                return this.getRectMinMax(o[0], o[1] + 1, o[0], o[1] + 1, n), (n[0] + n[1]) / 2;
            }, i.prototype.getCacheConvexTrianglePillarKey = function(t, i, e) {
                return t + "_" + i + "_" + (e ? 1 : 0);
            }, i.prototype.getCachedConvexTrianglePillar = function(t, i, e) {
                return this._cachedPillars[this.getCacheConvexTrianglePillarKey(t, i, e)];
            }, i.prototype.setCachedConvexTrianglePillar = function(t, i, e, o, n) {
                this._cachedPillars[this.getCacheConvexTrianglePillarKey(t, i, e)] = {
                    convex: o,
                    offset: n
                };
            }, i.prototype.clearCachedConvexTrianglePillar = function(t, i, e) {
                delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(t, i, e)];
            }, i.prototype.getConvexTrianglePillar = function(t, i, e) {
                var o = this.pillarConvex, n = this.pillarOffset;
                if (this.cacheEnabled) {
                    if (a = this.getCachedConvexTrianglePillar(t, i, e)) return this.pillarConvex = a.convex, 
                    void (this.pillarOffset = a.offset);
                    o = new s(), n = new r(), this.pillarConvex = o, this.pillarOffset = n;
                }
                var a = this.data, l = this.elementSize, h = o.faces;
                o.vertices.length = 6;
                for (var p = 0; 6 > p; p++) o.vertices[p] || (o.vertices[p] = new r());
                h.length = 5;
                for (p = 0; 5 > p; p++) h[p] || (h[p] = []);
                var c = o.vertices, u = (Math.min(a[t][i], a[t + 1][i], a[t][i + 1], a[t + 1][i + 1]) - this.minValue) / 2 + this.minValue;
                e ? (n.set((t + .75) * l, (i + .75) * l, u), c[0].set(.25 * l, .25 * l, a[t + 1][i + 1] - u), 
                c[1].set(-.75 * l, .25 * l, a[t][i + 1] - u), c[2].set(.25 * l, -.75 * l, a[t + 1][i] - u), 
                c[3].set(.25 * l, .25 * l, -u - 1), c[4].set(-.75 * l, .25 * l, -u - 1), c[5].set(.25 * l, -.75 * l, -u - 1), 
                h[0][0] = 0, h[0][1] = 1, h[0][2] = 2, h[1][0] = 5, h[1][1] = 4, h[1][2] = 3, h[2][0] = 2, 
                h[2][1] = 5, h[2][2] = 3, h[2][3] = 0, h[3][0] = 3, h[3][1] = 4, h[3][2] = 1, h[3][3] = 0, 
                h[4][0] = 1, h[4][1] = 4, h[4][2] = 5, h[4][3] = 2) : (n.set((t + .25) * l, (i + .25) * l, u), 
                c[0].set(-.25 * l, -.25 * l, a[t][i] - u), c[1].set(.75 * l, -.25 * l, a[t + 1][i] - u), 
                c[2].set(-.25 * l, .75 * l, a[t][i + 1] - u), c[3].set(-.25 * l, -.25 * l, -u - 1), 
                c[4].set(.75 * l, -.25 * l, -u - 1), c[5].set(-.25 * l, .75 * l, -u - 1), h[0][0] = 0, 
                h[0][1] = 1, h[0][2] = 2, h[1][0] = 5, h[1][1] = 4, h[1][2] = 3, h[2][0] = 0, h[2][1] = 2, 
                h[2][2] = 5, h[2][3] = 3, h[3][0] = 1, h[3][1] = 0, h[3][2] = 3, h[3][3] = 4, h[4][0] = 4, 
                h[4][1] = 5, h[4][2] = 2, h[4][3] = 1), o.computeNormals(), o.computeEdges(), o.updateBoundingSphereRadius(), 
                this.setCachedConvexTrianglePillar(t, i, e, o, n);
            }, i.prototype.calculateLocalInertia = function(t, i) {
                return (i = i || new r()).set(0, 0, 0), i;
            }, i.prototype.volume = function() {
                return Number.MAX_VALUE;
            }, i.prototype.calculateWorldAABB = function(t, i, e, o) {
                e.set(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE), o.set(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
            }, i.prototype.updateBoundingSphereRadius = function() {
                var t = this.data, i = this.elementSize;
                this.boundingSphereRadius = new r(t.length * i, t[0].length * i, Math.max(Math.abs(this.maxValue), Math.abs(this.minValue))).norm();
            };
        }, {
            "../math/Vec3": 30,
            "../utils/Utils": 53,
            "./ConvexPolyhedron": 38,
            "./Shape": 43
        } ],
        41: [ function(t, e, o) {
            function i() {
                n.call(this), this.type = n.types.PARTICLE;
            }
            e.exports = i;
            var n = t("./Shape"), s = t("../math/Vec3");
            i.prototype = new n(), i.prototype.constructor = i, i.prototype.calculateLocalInertia = function(t, i) {
                return (i = i || new s()).set(0, 0, 0), i;
            }, i.prototype.volume = function() {
                return 0;
            }, i.prototype.updateBoundingSphereRadius = function() {
                this.boundingSphereRadius = 0;
            }, i.prototype.calculateWorldAABB = function(t, i, e, o) {
                e.copy(t), o.copy(t);
            };
        }, {
            "../math/Vec3": 30,
            "./Shape": 43
        } ],
        42: [ function(t, e, o) {
            function i() {
                n.call(this), this.type = n.types.PLANE, this.worldNormal = new s(), this.worldNormalNeedsUpdate = !0, 
                this.boundingSphereRadius = Number.MAX_VALUE;
            }
            e.exports = i;
            var n = t("./Shape"), s = t("../math/Vec3");
            i.prototype = new n(), i.prototype.constructor = i, i.prototype.computeWorldNormal = function(t) {
                var i = this.worldNormal;
                i.set(0, 0, 1), t.vmult(i, i), this.worldNormalNeedsUpdate = !1;
            }, i.prototype.calculateLocalInertia = function(t, i) {
                return i || new s();
            }, i.prototype.volume = function() {
                return Number.MAX_VALUE;
            };
            var r = new s();
            i.prototype.calculateWorldAABB = function(t, i, e, o) {
                r.set(0, 0, 1), i.vmult(r, r);
                var n = Number.MAX_VALUE;
                e.set(-n, -n, -n), o.set(n, n, n), 1 === r.x && (o.x = t.x), 1 === r.y && (o.y = t.y), 
                1 === r.z && (o.z = t.z), -1 === r.x && (e.x = t.x), -1 === r.y && (e.y = t.y), 
                -1 === r.z && (e.z = t.z);
            }, i.prototype.updateBoundingSphereRadius = function() {
                this.boundingSphereRadius = Number.MAX_VALUE;
            };
        }, {
            "../math/Vec3": 30,
            "./Shape": 43
        } ],
        43: [ function(t, e, o) {
            function i() {
                this.id = i.idCounter++, this.type = 0, this.boundingSphereRadius = 0, this.collisionResponse = !0, 
                this.material = null;
            }
            e.exports = i;
            var i = t("./Shape");
            t("../math/Vec3"), t("../math/Quaternion"), t("../material/Material"), i.prototype.constructor = i, 
            i.prototype.updateBoundingSphereRadius = function() {
                throw "computeBoundingSphereRadius() not implemented for shape type " + this.type;
            }, i.prototype.volume = function() {
                throw "volume() not implemented for shape type " + this.type;
            }, i.prototype.calculateLocalInertia = function(t, i) {
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
            function i(t) {
                if (n.call(this), this.radius = void 0 !== t ? Number(t) : 1, this.type = n.types.SPHERE, 
                this.radius < 0) throw new Error("The sphere radius cannot be negative.");
                this.updateBoundingSphereRadius();
            }
            e.exports = i;
            var n = t("./Shape"), s = t("../math/Vec3");
            i.prototype = new n(), i.prototype.constructor = i, i.prototype.calculateLocalInertia = function(t, i) {
                i = i || new s();
                var e = 2 * t * this.radius * this.radius / 5;
                return i.x = e, i.y = e, i.z = e, i;
            }, i.prototype.volume = function() {
                return 4 * Math.PI * this.radius / 3;
            }, i.prototype.updateBoundingSphereRadius = function() {
                this.boundingSphereRadius = this.radius;
            }, i.prototype.calculateWorldAABB = function(t, i, e, o) {
                for (var n = this.radius, s = [ "x", "y", "z" ], r = 0; r < s.length; r++) {
                    var a = s[r];
                    e[a] = t[a] - n, o[a] = t[a] + n;
                }
            };
        }, {
            "../math/Vec3": 30,
            "./Shape": 43
        } ],
        45: [ function(t, e, o) {
            function i(t, i) {
                n.call(this), this.type = n.types.TRIMESH, this.vertices = new Float32Array(t), 
                this.indices = new Int16Array(i), this.normals = new Float32Array(i.length), this.aabb = new a(), 
                this.edges = null, this.scale = new s(1, 1, 1), this.tree = new l(), this.updateEdges(), 
                this.updateNormals(), this.updateAABB(), this.updateBoundingSphereRadius(), this.updateTree();
            }
            e.exports = i;
            var n = t("./Shape"), s = t("../math/Vec3"), r = (t("../math/Quaternion"), t("../math/Transform")), a = t("../collision/AABB"), l = t("../utils/Octree");
            i.prototype = new n(), i.prototype.constructor = i;
            var h = new s();
            i.prototype.updateTree = function() {
                var t = this.tree;
                t.reset(), t.aabb.copy(this.aabb);
                var i = this.scale;
                t.aabb.lowerBound.x *= 1 / i.x, t.aabb.lowerBound.y *= 1 / i.y, t.aabb.lowerBound.z *= 1 / i.z, 
                t.aabb.upperBound.x *= 1 / i.x, t.aabb.upperBound.y *= 1 / i.y, t.aabb.upperBound.z *= 1 / i.z;
                for (var e = new a(), o = new s(), n = new s(), r = new s(), l = [ o, n, r ], h = 0; h < this.indices.length / 3; h++) {
                    var p = 3 * h;
                    this._getUnscaledVertex(this.indices[p], o), this._getUnscaledVertex(this.indices[p + 1], n), 
                    this._getUnscaledVertex(this.indices[p + 2], r), e.setFromPoints(l), t.insert(e, h);
                }
                t.removeEmptyNodes();
            };
            var p = new a();
            i.prototype.getTrianglesInAABB = function(t, i) {
                p.copy(t);
                var e = this.scale, o = e.x, n = e.y, s = e.z, r = p.lowerBound, a = p.upperBound;
                return r.x /= o, r.y /= n, r.z /= s, a.x /= o, a.y /= n, a.z /= s, this.tree.aabbQuery(p, i);
            }, i.prototype.setScale = function(t) {
                var i = this.scale.x === this.scale.y === this.scale.z, e = t.x === t.y === t.z;
                i && e || this.updateNormals(), this.scale.copy(t), this.updateAABB(), this.updateBoundingSphereRadius();
            }, i.prototype.updateNormals = function() {
                for (var t = h, e = this.normals, o = 0; o < this.indices.length / 3; o++) {
                    var n = 3 * o, s = this.indices[n], r = this.indices[n + 1], a = this.indices[n + 2];
                    this.getVertex(s, y), this.getVertex(r, f), this.getVertex(a, m), i.computeNormal(f, y, m, t), 
                    e[n] = t.x, e[n + 1] = t.y, e[n + 2] = t.z;
                }
            }, i.prototype.updateEdges = function() {
                for (var t = {}, i = function(i, e) {
                    t[s > n ? n + "_" + s : s + "_" + n] = !0;
                }, e = 0; e < this.indices.length / 3; e++) {
                    var o = 3 * e, n = this.indices[o], s = this.indices[o + 1];
                    this.indices[o + 2];
                    i(), i(), i();
                }
                var r = Object.keys(t);
                this.edges = new Int16Array(2 * r.length);
                for (e = 0; e < r.length; e++) {
                    var a = r[e].split("_");
                    this.edges[2 * e] = parseInt(a[0], 10), this.edges[2 * e + 1] = parseInt(a[1], 10);
                }
            }, i.prototype.getEdgeVertex = function(t, i, e) {
                var o = this.edges[2 * t + (i ? 1 : 0)];
                this.getVertex(o, e);
            };
            var c = new s(), u = new s();
            i.prototype.getEdgeVector = function(t, i) {
                var e = c, o = u;
                this.getEdgeVertex(t, 0, e), this.getEdgeVertex(t, 1, o), o.vsub(e, i);
            };
            var d = new s(), v = new s();
            i.computeNormal = function(t, i, e, o) {
                i.vsub(t, v), e.vsub(i, d), d.cross(v, o), o.isZero() || o.normalize();
            };
            var y = new s(), f = new s(), m = new s();
            i.prototype.getVertex = function(t, i) {
                var e = this.scale;
                return this._getUnscaledVertex(t, i), i.x *= e.x, i.y *= e.y, i.z *= e.z, i;
            }, i.prototype._getUnscaledVertex = function(t, i) {
                var e = 3 * t, o = this.vertices;
                return i.set(o[e], o[e + 1], o[e + 2]);
            }, i.prototype.getWorldVertex = function(t, i, e, o) {
                return this.getVertex(t, o), r.pointToWorldFrame(i, e, o, o), o;
            }, i.prototype.getTriangleVertices = function(t, i, e, o) {
                var n = 3 * t;
                this.getVertex(this.indices[n], i), this.getVertex(this.indices[n + 1], e), this.getVertex(this.indices[n + 2], o);
            }, i.prototype.getNormal = function(t, i) {
                var e = 3 * t;
                return i.set(this.normals[e], this.normals[e + 1], this.normals[e + 2]);
            };
            var w = new a();
            i.prototype.calculateLocalInertia = function(t, i) {
                this.computeLocalAABB(w);
                var e = w.upperBound.x - w.lowerBound.x, o = w.upperBound.y - w.lowerBound.y, n = w.upperBound.z - w.lowerBound.z;
                return i.set(1 / 12 * t * (2 * o * 2 * o + 2 * n * 2 * n), 1 / 12 * t * (2 * e * 2 * e + 2 * n * 2 * n), 1 / 12 * t * (2 * o * 2 * o + 2 * e * 2 * e));
            };
            var x = new s();
            i.prototype.computeLocalAABB = function(t) {
                var i = t.lowerBound, e = t.upperBound, o = this.vertices.length, n = (this.vertices, 
                x);
                this.getVertex(0, n), i.copy(n), e.copy(n);
                for (var s = 0; s !== o; s++) this.getVertex(s, n), n.x < i.x ? i.x = n.x : n.x > e.x && (e.x = n.x), 
                n.y < i.y ? i.y = n.y : n.y > e.y && (e.y = n.y), n.z < i.z ? i.z = n.z : n.z > e.z && (e.z = n.z);
            }, i.prototype.updateAABB = function() {
                this.computeLocalAABB(this.aabb);
            }, i.prototype.updateBoundingSphereRadius = function() {
                for (var t = 0, i = this.vertices, e = new s(), o = 0, n = i.length / 3; o !== n; o++) {
                    this.getVertex(o, e);
                    var r = e.norm2();
                    r > t && (t = r);
                }
                this.boundingSphereRadius = Math.sqrt(t);
            };
            var g = (new s(), new r()), b = new a();
            i.prototype.calculateWorldAABB = function(t, i, e, o) {
                var n = g, s = b;
                n.position = t, n.quaternion = i, this.aabb.toWorldFrame(n, s), e.copy(s.lowerBound), 
                o.copy(s.upperBound);
            }, i.prototype.volume = function() {
                return 4 * Math.PI * this.boundingSphereRadius / 3;
            }, i.createTorus = function(t, e, o, n, s) {
                t = t || 1, e = e || .5, o = o || 8, n = n || 6, s = s || 2 * Math.PI;
                for (var r = [], a = [], l = 0; o >= l; l++) for (var h = 0; n >= h; h++) {
                    var p = h / n * s, c = l / o * Math.PI * 2, u = (t + e * Math.cos(c)) * Math.cos(p), d = (t + e * Math.cos(c)) * Math.sin(p), v = e * Math.sin(c);
                    r.push(u, d, v);
                }
                for (l = 1; o >= l; l++) for (h = 1; n >= h; h++) {
                    var y = (n + 1) * l + h - 1, f = (n + 1) * (l - 1) + h - 1, m = (n + 1) * (l - 1) + h, w = (n + 1) * l + h;
                    a.push(y, f, w), a.push(f, m, w);
                }
                return new i(r, a);
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
            function i() {
                n.call(this), this.iterations = 10, this.tolerance = 1e-7;
            }
            e.exports = i;
            var n = (t("../math/Vec3"), t("../math/Quaternion"), t("./Solver"));
            i.prototype = new n();
            var s = [], r = [], a = [];
            i.prototype.solve = function(t, i) {
                var e, o, n, l, h, p = 0, c = this.iterations, u = this.tolerance * this.tolerance, d = this.equations, v = d.length, y = i.bodies, f = y.length, m = t;
                if (0 !== v) for (var w = 0; w !== f; w++) y[w].updateSolveMassProperties();
                var x = r, g = a, b = s;
                x.length = v, g.length = v, b.length = v;
                for (w = 0; w !== v; w++) {
                    var B = d[w];
                    b[w] = 0, g[w] = B.computeB(m), x[w] = 1 / B.computeC();
                }
                if (0 !== v) {
                    for (w = 0; w !== f; w++) {
                        var E = (C = y[w]).vlambda, A = C.wlambda;
                        E.set(0, 0, 0), A && A.set(0, 0, 0);
                    }
                    for (p = 0; p !== c; p++) {
                        l = 0;
                        for (var S = 0; S !== v; S++) {
                            B = d[S];
                            e = g[S], o = x[S], (h = b[S]) + (n = o * (e - B.computeGWlambda() - B.eps * h)) < B.minForce ? n = B.minForce - h : h + n > B.maxForce && (n = B.maxForce - h), 
                            b[S] += n, l += n > 0 ? n : -n, B.addToWlambda(n);
                        }
                        if (u > l * l) break;
                    }
                    for (w = 0; w !== f; w++) {
                        var C, z = (C = y[w]).velocity, q = C.angularVelocity;
                        z.vadd(C.vlambda, z), q && q.vadd(C.wlambda, q);
                    }
                }
                return p;
            };
        }, {
            "../math/Quaternion": 28,
            "../math/Vec3": 30,
            "./Solver": 47
        } ],
        47: [ function(t, e, o) {
            function i() {
                this.equations = [];
            }
            e.exports = i, i.prototype.solve = function(t, i) {
                return 0;
            }, i.prototype.addEquation = function(t) {
                t.enabled && this.equations.push(t);
            }, i.prototype.removeEquation = function(t) {
                var i = this.equations, e = i.indexOf(t);
                -1 !== e && i.splice(e, 1);
            }, i.prototype.removeAllEquations = function() {
                this.equations.length = 0;
            };
        }, {} ],
        48: [ function(t, e, o) {
            function i(t) {
                for (l.call(this), this.iterations = 10, this.tolerance = 1e-7, this.subsolver = t, 
                this.nodes = [], this.nodePool = []; this.nodePool.length < 128; ) this.nodePool.push(this.createNode());
            }
            function n(t) {
                for (var i = t.length, e = 0; e !== i; e++) {
                    var o = t[e];
                    if (!(o.visited || o.body.type & d)) return o;
                }
                return !1;
            }
            function s(t, i, e, o) {
                for (v.push(t), t.visited = !0, i(t, e, o); v.length; ) for (var s, r = v.pop(); s = n(r.children); ) s.visited = !0, 
                i(s, e, o), v.push(s);
            }
            function r(t, i, e) {
                i.push(t.body);
                for (var o = t.eqs.length, n = 0; n !== o; n++) {
                    var s = t.eqs[n];
                    -1 === e.indexOf(s) && e.push(s);
                }
            }
            function a(t, i) {
                return i.id - t.id;
            }
            e.exports = i;
            var l = (t("../math/Vec3"), t("../math/Quaternion"), t("./Solver")), h = t("../objects/Body");
            i.prototype = new l();
            var p = [], c = [], u = {
                bodies: []
            }, d = h.STATIC, v = [];
            i.prototype.createNode = function() {
                return {
                    body: null,
                    children: [],
                    eqs: [],
                    visited: !1
                };
            }, i.prototype.solve = function(t, i) {
                for (var e = p, o = this.nodePool, l = i.bodies, h = this.equations, d = h.length, v = l.length, y = this.subsolver; o.length < v; ) o.push(this.createNode());
                e.length = v;
                for (var f = 0; v > f; f++) e[f] = o[f];
                for (f = 0; f !== v; f++) {
                    var m = e[f];
                    m.body = l[f], m.children.length = 0, m.eqs.length = 0, m.visited = !1;
                }
                for (var w = 0; w !== d; w++) {
                    var x = h[w], g = (f = l.indexOf(x.bi), l.indexOf(x.bj)), b = e[f], B = e[g];
                    b.children.push(B), b.eqs.push(x), B.children.push(b), B.eqs.push(x);
                }
                var E, A = 0, S = c;
                y.tolerance = this.tolerance, y.iterations = this.iterations;
                for (var C = u; E = n(e); ) {
                    S.length = 0, C.bodies.length = 0, s(E, r, C.bodies, S);
                    var z = S.length;
                    S = S.sort(a);
                    for (f = 0; f !== z; f++) y.addEquation(S[f]);
                    y.solve(t, C), y.removeAllEquations(), A++;
                }
                return A;
            };
        }, {
            "../math/Quaternion": 28,
            "../math/Vec3": 30,
            "../objects/Body": 31,
            "./Solver": 47
        } ],
        49: [ function(t, i, e) {
            var o = function() {};
            i.exports = o, o.prototype = {
                constructor: o,
                addEventListener: function(t, i) {
                    void 0 === this._listeners && (this._listeners = {});
                    var e = this._listeners;
                    return void 0 === e[t] && (e[t] = []), -1 === e[t].indexOf(i) && e[t].push(i), this;
                },
                hasEventListener: function(t, i) {
                    if (void 0 === this._listeners) return !1;
                    var e = this._listeners;
                    return void 0 !== e[t] && -1 !== e[t].indexOf(i);
                },
                removeEventListener: function(t, i) {
                    if (void 0 === this._listeners) return this;
                    var e = this._listeners;
                    if (void 0 === e[t]) return this;
                    var o = e[t].indexOf(i);
                    return -1 !== o && e[t].splice(o, 1), this;
                },
                dispatchEvent: function(t) {
                    if (void 0 === this._listeners) return this;
                    var i = this._listeners[t.type];
                    if (void 0 !== i) {
                        t.target = this;
                        for (var e = 0, o = i.length; o > e; e++) i[e].call(this, t);
                    }
                    return this;
                }
            };
        }, {} ],
        50: [ function(t, e, o) {
            function i(t) {
                t = t || {}, this.root = t.root || null, this.aabb = t.aabb ? t.aabb.clone() : new s(), 
                this.data = [], this.children = [];
            }
            function n(t, e) {
                (e = e || {}).root = null, e.aabb = t, i.call(this, e), this.maxDepth = void 0 !== e.maxDepth ? e.maxDepth : 8;
            }
            var s = t("../collision/AABB"), r = t("../math/Vec3");
            e.exports = n, n.prototype = new i(), i.prototype.reset = function(t, i) {
                this.children.length = this.data.length = 0;
            }, i.prototype.insert = function(t, i, e) {
                var o = this.data;
                if (e = e || 0, !this.aabb.contains(t)) return !1;
                var n = this.children;
                if (e < (this.maxDepth || this.root.maxDepth)) {
                    var s = !1;
                    n.length || (this.subdivide(), s = !0);
                    for (var r = 0; 8 !== r; r++) if (n[r].insert(t, i, e + 1)) return !0;
                    s && (n.length = 0);
                }
                return o.push(i), !0;
            };
            var a = new r();
            i.prototype.subdivide = function() {
                var t = this.aabb, e = t.lowerBound, o = t.upperBound, n = this.children;
                n.push(new i({
                    aabb: new s({
                        lowerBound: new r(0, 0, 0)
                    })
                }), new i({
                    aabb: new s({
                        lowerBound: new r(1, 0, 0)
                    })
                }), new i({
                    aabb: new s({
                        lowerBound: new r(1, 1, 0)
                    })
                }), new i({
                    aabb: new s({
                        lowerBound: new r(1, 1, 1)
                    })
                }), new i({
                    aabb: new s({
                        lowerBound: new r(0, 1, 1)
                    })
                }), new i({
                    aabb: new s({
                        lowerBound: new r(0, 0, 1)
                    })
                }), new i({
                    aabb: new s({
                        lowerBound: new r(1, 0, 1)
                    })
                }), new i({
                    aabb: new s({
                        lowerBound: new r(0, 1, 0)
                    })
                })), o.vsub(e, a), a.scale(.5, a);
                for (var l = this.root || this, h = 0; 8 !== h; h++) {
                    var p = n[h];
                    p.root = l;
                    var c = p.aabb.lowerBound;
                    c.x *= a.x, c.y *= a.y, c.z *= a.z, c.vadd(e, c), c.vadd(a, p.aabb.upperBound);
                }
            }, i.prototype.aabbQuery = function(t, i) {
                for (var e = (this.data, this.children, [ this ]); e.length; ) {
                    var o = e.pop();
                    o.aabb.overlaps(t) && Array.prototype.push.apply(i, o.data), Array.prototype.push.apply(e, o.children);
                }
                return i;
            };
            var l = new s();
            i.prototype.rayQuery = function(t, i, e) {
                return t.getAABB(l), l.toLocalFrame(i, l), this.aabbQuery(l, e), e;
            }, i.prototype.removeEmptyNodes = function() {
                for (var t = [ this ]; t.length; ) {
                    for (var i = t.pop(), e = i.children.length - 1; e >= 0; e--) i.children[e].data.length || i.children.splice(e, 1);
                    Array.prototype.push.apply(t, i.children);
                }
            };
        }, {
            "../collision/AABB": 3,
            "../math/Vec3": 30
        } ],
        51: [ function(t, e, o) {
            function i() {
                this.objects = [], this.type = Object;
            }
            e.exports = i, i.prototype.release = function() {
                for (var t = arguments.length, i = 0; i !== t; i++) this.objects.push(arguments[i]);
            }, i.prototype.get = function() {
                return 0 === this.objects.length ? this.constructObject() : this.objects.pop();
            }, i.prototype.constructObject = function() {
                throw new Error("constructObject() not implemented in this Pool subclass yet!");
            };
        }, {} ],
        52: [ function(t, e, o) {
            function i() {
                this.data = {
                    keys: []
                };
            }
            e.exports = i, i.prototype.get = function(t, i) {
                if (t > i) {
                    var e = i;
                    i = t, t = e;
                }
                return this.data[t + "-" + i];
            }, i.prototype.set = function(t, i, e) {
                if (t > i) {
                    var o = i;
                    i = t, t = o;
                }
                var n = t + "-" + i;
                this.get(t, i) || this.data.keys.push(n), this.data[n] = e;
            }, i.prototype.reset = function() {
                for (var t = this.data, i = t.keys; i.length > 0; ) {
                    delete t[i.pop()];
                }
            };
        }, {} ],
        53: [ function(t, e, o) {
            function i() {}
            e.exports = i, i.defaults = function(t, i) {
                for (var e in t = t || {}, i) e in t || (t[e] = i[e]);
                return t;
            };
        }, {} ],
        54: [ function(t, e, o) {
            function i() {
                s.call(this), this.type = n;
            }
            e.exports = i;
            var n = t("../math/Vec3"), s = t("./Pool");
            i.prototype = new s(), i.prototype.constructObject = function() {
                return new n();
            };
        }, {
            "../math/Vec3": 30,
            "./Pool": 51
        } ],
        55: [ function(t, e, o) {
            function i(t) {
                this.contactPointPool = [], this.frictionEquationPool = [], this.result = [], this.frictionResult = [], 
                this.v3pool = new c(), this.world = t, this.currentContactMaterial = null, this.enableFrictionReduction = !1;
            }
            function n(t, i, e) {
                for (var o = null, n = t.length, s = 0; s !== n; s++) {
                    var r = t[s], a = k;
                    t[(s + 1) % n].vsub(r, a);
                    var l = _;
                    a.cross(i, l);
                    var h = U;
                    e.vsub(r, h);
                    var p = l.dot(h);
                    if (!(null === o || p > 0 && !0 === o || 0 >= p && !1 === o)) return !1;
                    null === o && (o = p > 0);
                }
                return !0;
            }
            e.exports = i;
            var s = t("../collision/AABB"), r = t("../shapes/Shape"), a = t("../collision/Ray"), l = t("../math/Vec3"), h = t("../math/Transform"), p = (t("../shapes/ConvexPolyhedron"), 
            t("../math/Quaternion")), c = (t("../solver/Solver"), t("../utils/Vec3Pool")), u = t("../equations/ContactEquation"), d = t("../equations/FrictionEquation");
            i.prototype.createContactEquation = function(t, i, e, o, n, s) {
                var r;
                this.contactPointPool.length ? ((r = this.contactPointPool.pop()).bi = t, r.bj = i) : r = new u(t, i), 
                r.enabled = t.collisionResponse && i.collisionResponse && e.collisionResponse && o.collisionResponse;
                var a = this.currentContactMaterial;
                r.restitution = a.restitution, r.setSpookParams(a.contactEquationStiffness, a.contactEquationRelaxation, this.world.dt);
                var l = e.material || t.material, h = o.material || i.material;
                return l && h && l.restitution >= 0 && h.restitution >= 0 && (r.restitution = l.restitution * h.restitution), 
                r.si = n || e, r.sj = s || o, r;
            }, i.prototype.createFrictionEquationsFromContact = function(t, i) {
                var e = t.bi, o = t.bj, n = t.si, s = t.sj, r = this.world, a = this.currentContactMaterial, l = a.friction, h = n.material || e.material, p = s.material || o.material;
                if (h && p && h.friction >= 0 && p.friction >= 0 && (l = h.friction * p.friction), 
                l > 0) {
                    var c = l * r.gravity.length(), u = e.invMass + o.invMass;
                    u > 0 && (u = 1 / u);
                    var v = this.frictionEquationPool, y = v.length ? v.pop() : new d(e, o, c * u), f = v.length ? v.pop() : new d(e, o, c * u);
                    return y.bi = f.bi = e, y.bj = f.bj = o, y.minForce = f.minForce = -c * u, y.maxForce = f.maxForce = c * u, 
                    y.ri.copy(t.ri), y.rj.copy(t.rj), f.ri.copy(t.ri), f.rj.copy(t.rj), t.ni.tangents(y.t, f.t), 
                    y.setSpookParams(a.frictionEquationStiffness, a.frictionEquationRelaxation, r.dt), 
                    f.setSpookParams(a.frictionEquationStiffness, a.frictionEquationRelaxation, r.dt), 
                    y.enabled = f.enabled = t.enabled, i.push(y, f), !0;
                }
                return !1;
            };
            var v = new l(), y = new l(), f = new l();
            i.prototype.createFrictionFromAverage = function(t) {
                var i = this.result[this.result.length - 1];
                if (this.createFrictionEquationsFromContact(i, this.frictionResult) && 1 !== t) {
                    var e = this.frictionResult[this.frictionResult.length - 2], o = this.frictionResult[this.frictionResult.length - 1];
                    v.setZero(), y.setZero(), f.setZero();
                    for (var n = i.bi, s = (i.bj, 0); s !== t; s++) (i = this.result[this.result.length - 1 - s]).bodyA !== n ? (v.vadd(i.ni, v), 
                    y.vadd(i.ri, y), f.vadd(i.rj, f)) : (v.vsub(i.ni, v), y.vadd(i.rj, y), f.vadd(i.ri, f));
                    var r = 1 / t;
                    y.scale(r, e.ri), f.scale(r, e.rj), o.ri.copy(e.ri), o.rj.copy(e.rj), v.normalize(), 
                    v.tangents(e.t, o.t);
                }
            };
            var m = new l(), w = new l(), x = new p(), g = new p();
            i.prototype.getContacts = function(t, i, e, o, n, s, r) {
                this.contactPointPool = n, this.frictionEquationPool = r, this.result = o, this.frictionResult = s;
                for (var a = x, l = g, h = m, p = w, c = 0, u = t.length; c !== u; c++) {
                    var d = t[c], v = i[c], y = null;
                    d.material && v.material && (y = e.getContactMaterial(d.material, v.material) || null);
                    for (var f = 0; f < d.shapes.length; f++) {
                        d.quaternion.mult(d.shapeOrientations[f], a), d.quaternion.vmult(d.shapeOffsets[f], h), 
                        h.vadd(d.position, h);
                        for (var b = d.shapes[f], B = 0; B < v.shapes.length; B++) {
                            v.quaternion.mult(v.shapeOrientations[B], l), v.quaternion.vmult(v.shapeOffsets[B], p), 
                            p.vadd(v.position, p);
                            var E = v.shapes[B];
                            if (!(h.distanceTo(p) > b.boundingSphereRadius + E.boundingSphereRadius)) {
                                var A = null;
                                b.material && E.material && (A = e.getContactMaterial(b.material, E.material) || null), 
                                this.currentContactMaterial = A || y || e.defaultContactMaterial;
                                var S = this[b.type | E.type];
                                S && (b.type < E.type ? S.call(this, b, E, h, p, a, l, d, v, b, E) : S.call(this, E, b, p, h, l, a, v, d, b, E));
                            }
                        }
                    }
                }
            }, i.prototype[r.types.BOX | r.types.BOX] = i.prototype.boxBox = function(t, i, e, o, n, s, r, a) {
                t.convexPolyhedronRepresentation.material = t.material, i.convexPolyhedronRepresentation.material = i.material, 
                t.convexPolyhedronRepresentation.collisionResponse = t.collisionResponse, i.convexPolyhedronRepresentation.collisionResponse = i.collisionResponse, 
                this.convexConvex(t.convexPolyhedronRepresentation, i.convexPolyhedronRepresentation, e, o, n, s, r, a, t, i);
            }, i.prototype[r.types.BOX | r.types.CONVEXPOLYHEDRON] = i.prototype.boxConvex = function(t, i, e, o, n, s, r, a) {
                t.convexPolyhedronRepresentation.material = t.material, t.convexPolyhedronRepresentation.collisionResponse = t.collisionResponse, 
                this.convexConvex(t.convexPolyhedronRepresentation, i, e, o, n, s, r, a, t, i);
            }, i.prototype[r.types.BOX | r.types.PARTICLE] = i.prototype.boxParticle = function(t, i, e, o, n, s, r, a) {
                t.convexPolyhedronRepresentation.material = t.material, t.convexPolyhedronRepresentation.collisionResponse = t.collisionResponse, 
                this.convexParticle(t.convexPolyhedronRepresentation, i, e, o, n, s, r, a, t, i);
            }, i.prototype[r.types.SPHERE] = i.prototype.sphereSphere = function(t, i, e, o, n, s, r, a) {
                var l = this.createContactEquation(r, a, t, i);
                o.vsub(e, l.ni), l.ni.normalize(), l.ri.copy(l.ni), l.rj.copy(l.ni), l.ri.mult(t.radius, l.ri), 
                l.rj.mult(-i.radius, l.rj), l.ri.vadd(e, l.ri), l.ri.vsub(r.position, l.ri), l.rj.vadd(o, l.rj), 
                l.rj.vsub(a.position, l.rj), this.result.push(l), this.createFrictionEquationsFromContact(l, this.frictionResult);
            };
            var b = new l(), B = new l(), E = new l();
            i.prototype[r.types.PLANE | r.types.TRIMESH] = i.prototype.planeTrimesh = function(t, i, e, o, n, s, r, a) {
                var p = new l(), c = b;
                c.set(0, 0, 1), n.vmult(c, c);
                for (var u = 0; u < i.vertices.length / 3; u++) {
                    i.getVertex(u, p);
                    var d = new l();
                    d.copy(p), h.pointToWorldFrame(o, s, d, p);
                    var v = B;
                    if (p.vsub(e, v), 0 >= c.dot(v)) {
                        var y = this.createContactEquation(r, a, t, i);
                        y.ni.copy(c);
                        var f = E;
                        c.scale(v.dot(c), f), p.vsub(f, f), y.ri.copy(f), y.ri.vsub(r.position, y.ri), y.rj.copy(p), 
                        y.rj.vsub(a.position, y.rj), this.result.push(y), this.createFrictionEquationsFromContact(y, this.frictionResult);
                    }
                }
            };
            var A = new l(), S = new l(), C = (new l(), new l()), z = new l(), q = new l(), R = new l(), M = new l(), P = new l(), F = new l(), V = new l(), T = new l(), N = new l(), I = new l(), W = new s(), L = [];
            i.prototype[r.types.SPHERE | r.types.TRIMESH] = i.prototype.sphereTrimesh = function(t, i, e, o, n, s, r, l) {
                var p = q, c = R, u = M, d = P, v = F, y = V, f = W, m = z, w = S, x = L;
                h.pointToLocalFrame(o, s, e, v);
                var g = t.radius;
                f.lowerBound.set(v.x - g, v.y - g, v.z - g), f.upperBound.set(v.x + g, v.y + g, v.z + g), 
                i.getTrianglesInAABB(f, x);
                for (var b = C, B = t.radius * t.radius, E = 0; E < x.length; E++) for (var j = 0; 3 > j; j++) if (i.getVertex(i.indices[3 * x[E] + j], b), 
                b.vsub(v, w), w.norm2() <= B) {
                    m.copy(b), h.pointToWorldFrame(o, s, m, b), b.vsub(e, w), (_ = this.createContactEquation(r, l, t, i)).ni.copy(w), 
                    _.ni.normalize(), _.ri.copy(_.ni), _.ri.scale(t.radius, _.ri), _.ri.vadd(e, _.ri), 
                    _.ri.vsub(r.position, _.ri), _.rj.copy(b), _.rj.vsub(l.position, _.rj), this.result.push(_), 
                    this.createFrictionEquationsFromContact(_, this.frictionResult);
                }
                for (E = 0; E < x.length; E++) for (j = 0; 3 > j; j++) {
                    i.getVertex(i.indices[3 * x[E] + j], p), i.getVertex(i.indices[3 * x[E] + (j + 1) % 3], c), 
                    c.vsub(p, u), v.vsub(c, y);
                    var O = y.dot(u);
                    v.vsub(p, y);
                    var k = y.dot(u);
                    if (k > 0 && 0 > O) if (v.vsub(p, y), d.copy(u), d.normalize(), k = y.dot(d), d.scale(k, y), 
                    y.vadd(p, y), (Y = y.distanceTo(v)) < t.radius) {
                        var _ = this.createContactEquation(r, l, t, i);
                        y.vsub(v, _.ni), _.ni.normalize(), _.ni.scale(t.radius, _.ri), h.pointToWorldFrame(o, s, y, y), 
                        y.vsub(l.position, _.rj), h.vectorToWorldFrame(s, _.ni, _.ni), h.vectorToWorldFrame(s, _.ri, _.ri), 
                        this.result.push(_), this.createFrictionEquationsFromContact(_, this.frictionResult);
                    }
                }
                for (var U = T, H = N, D = I, X = A, G = (E = 0, x.length); E !== G; E++) {
                    i.getTriangleVertices(x[E], U, H, D), i.getNormal(x[E], X), v.vsub(U, y);
                    var Y = y.dot(X);
                    if (X.scale(Y, y), v.vsub(y, y), Y = y.distanceTo(v), a.pointInTriangle(y, U, H, D) && Y < t.radius) {
                        _ = this.createContactEquation(r, l, t, i);
                        y.vsub(v, _.ni), _.ni.normalize(), _.ni.scale(t.radius, _.ri), h.pointToWorldFrame(o, s, y, y), 
                        y.vsub(l.position, _.rj), h.vectorToWorldFrame(s, _.ni, _.ni), h.vectorToWorldFrame(s, _.ri, _.ri), 
                        this.result.push(_), this.createFrictionEquationsFromContact(_, this.frictionResult);
                    }
                }
                x.length = 0;
            };
            var j = new l(), O = new l();
            i.prototype[r.types.SPHERE | r.types.PLANE] = i.prototype.spherePlane = function(t, i, e, o, n, s, r, a) {
                var l = this.createContactEquation(r, a, t, i);
                if (l.ni.set(0, 0, 1), s.vmult(l.ni, l.ni), l.ni.negate(l.ni), l.ni.normalize(), 
                l.ni.mult(t.radius, l.ri), e.vsub(o, j), l.ni.mult(l.ni.dot(j), O), j.vsub(O, l.rj), 
                -j.dot(l.ni) <= t.radius) {
                    var h = l.ri, p = l.rj;
                    h.vadd(e, h), h.vsub(r.position, h), p.vadd(o, p), p.vsub(a.position, p), this.result.push(l), 
                    this.createFrictionEquationsFromContact(l, this.frictionResult);
                }
            };
            var k = new l(), _ = new l(), U = new l(), H = new l(), D = new l(), X = new l(), G = new l(), Y = [ new l(), new l(), new l(), new l(), new l(), new l() ], Q = new l(), Z = new l(), K = new l(), J = new l();
            i.prototype[r.types.SPHERE | r.types.BOX] = i.prototype.sphereBox = function(t, i, e, o, n, s, r, a) {
                var l = this.v3pool, h = Y;
                e.vsub(o, H), i.getSideNormals(h, s);
                for (var p = t.radius, c = !1, u = Z, d = K, v = J, y = null, f = 0, m = 0, w = 0, x = null, g = 0, b = h.length; g !== b && !1 === c; g++) {
                    var B = D;
                    B.copy(h[g]);
                    var E = B.norm();
                    B.normalize();
                    var A = H.dot(B);
                    if (E + p > A && A > 0) {
                        var S = X, C = G;
                        S.copy(h[(g + 1) % 3]), C.copy(h[(g + 2) % 3]);
                        var z = S.norm(), q = C.norm();
                        S.normalize(), C.normalize();
                        var R = H.dot(S), M = H.dot(C);
                        if (z > R && R > -z && q > M && M > -q) {
                            var P = Math.abs(A - E - p);
                            (null === x || x > P) && (x = P, m = R, w = M, y = E, u.copy(B), d.copy(S), v.copy(C), 
                            f++);
                        }
                    }
                }
                if (f) {
                    c = !0;
                    var F = this.createContactEquation(r, a, t, i);
                    u.mult(-p, F.ri), F.ni.copy(u), F.ni.negate(F.ni), u.mult(y, u), d.mult(m, d), u.vadd(d, u), 
                    v.mult(w, v), u.vadd(v, F.rj), F.ri.vadd(e, F.ri), F.ri.vsub(r.position, F.ri), 
                    F.rj.vadd(o, F.rj), F.rj.vsub(a.position, F.rj), this.result.push(F), this.createFrictionEquationsFromContact(F, this.frictionResult);
                }
                for (var V = l.get(), T = Q, N = 0; 2 !== N && !c; N++) for (var I = 0; 2 !== I && !c; I++) for (var W = 0; 2 !== W && !c; W++) if (V.set(0, 0, 0), 
                N ? V.vadd(h[0], V) : V.vsub(h[0], V), I ? V.vadd(h[1], V) : V.vsub(h[1], V), W ? V.vadd(h[2], V) : V.vsub(h[2], V), 
                o.vadd(V, T), T.vsub(e, T), T.norm2() < p * p) {
                    c = !0, (F = this.createContactEquation(r, a, t, i)).ri.copy(T), F.ri.normalize(), 
                    F.ni.copy(F.ri), F.ri.mult(p, F.ri), F.rj.copy(V), F.ri.vadd(e, F.ri), F.ri.vsub(r.position, F.ri), 
                    F.rj.vadd(o, F.rj), F.rj.vsub(a.position, F.rj), this.result.push(F), this.createFrictionEquationsFromContact(F, this.frictionResult);
                }
                l.release(V), V = null;
                var L = l.get(), j = l.get(), O = (F = l.get(), l.get()), k = (P = l.get(), h.length);
                for (N = 0; N !== k && !c; N++) for (I = 0; I !== k && !c; I++) if (N % 3 != I % 3) {
                    h[I].cross(h[N], L), L.normalize(), h[N].vadd(h[I], j), F.copy(e), F.vsub(j, F), 
                    F.vsub(o, F);
                    var _ = F.dot(L);
                    L.mult(_, O);
                    for (W = 0; W === N % 3 || W === I % 3; ) W++;
                    P.copy(e), P.vsub(O, P), P.vsub(j, P), P.vsub(o, P);
                    var U = Math.abs(_), $ = P.norm();
                    if (U < h[W].norm() && p > $) {
                        c = !0;
                        var tt = this.createContactEquation(r, a, t, i);
                        j.vadd(O, tt.rj), tt.rj.copy(tt.rj), P.negate(tt.ni), tt.ni.normalize(), tt.ri.copy(tt.rj), 
                        tt.ri.vadd(o, tt.ri), tt.ri.vsub(e, tt.ri), tt.ri.normalize(), tt.ri.mult(p, tt.ri), 
                        tt.ri.vadd(e, tt.ri), tt.ri.vsub(r.position, tt.ri), tt.rj.vadd(o, tt.rj), tt.rj.vsub(a.position, tt.rj), 
                        this.result.push(tt), this.createFrictionEquationsFromContact(tt, this.frictionResult);
                    }
                }
                l.release(L, j, F, O, P);
            };
            var $ = new l(), tt = new l(), it = new l(), et = new l(), ot = new l(), nt = new l(), st = new l(), rt = new l(), at = new l(), lt = new l();
            i.prototype[r.types.SPHERE | r.types.CONVEXPOLYHEDRON] = i.prototype.sphereConvex = function(t, i, e, o, s, r, a, l) {
                var h = this.v3pool;
                e.vsub(o, $);
                for (var p = i.faceNormals, c = i.faces, u = i.vertices, d = t.radius, v = 0; v !== u.length; v++) {
                    var y = u[v], f = ot;
                    r.vmult(y, f), o.vadd(f, f);
                    var m = et;
                    if (f.vsub(e, m), m.norm2() < d * d) return w = !0, (F = this.createContactEquation(a, l, t, i)).ri.copy(m), 
                    F.ri.normalize(), F.ni.copy(F.ri), F.ri.mult(d, F.ri), f.vsub(o, F.rj), F.ri.vadd(e, F.ri), 
                    F.ri.vsub(a.position, F.ri), F.rj.vadd(o, F.rj), F.rj.vsub(l.position, F.rj), this.result.push(F), 
                    void this.createFrictionEquationsFromContact(F, this.frictionResult);
                }
                for (var w = !1, x = (v = 0, c.length); v !== x && !1 === w; v++) {
                    var g = p[v], b = c[v], B = nt;
                    r.vmult(g, B);
                    var E = st;
                    r.vmult(u[b[0]], E), E.vadd(o, E);
                    var A = rt;
                    B.mult(-d, A), e.vadd(A, A);
                    var S = at;
                    A.vsub(E, S);
                    var C = S.dot(B), z = lt;
                    if (e.vsub(E, z), 0 > C && z.dot(B) > 0) {
                        for (var q = [], R = 0, M = b.length; R !== M; R++) {
                            var P = h.get();
                            r.vmult(u[b[R]], P), o.vadd(P, P), q.push(P);
                        }
                        if (n(q, B, e)) {
                            w = !0;
                            var F = this.createContactEquation(a, l, t, i);
                            B.mult(-d, F.ri), B.negate(F.ni);
                            var V = h.get();
                            B.mult(-C, V);
                            var T = h.get();
                            B.mult(-d, T), e.vsub(o, F.rj), F.rj.vadd(T, F.rj), F.rj.vadd(V, F.rj), F.rj.vadd(o, F.rj), 
                            F.rj.vsub(l.position, F.rj), F.ri.vadd(e, F.ri), F.ri.vsub(a.position, F.ri), h.release(V), 
                            h.release(T), this.result.push(F), this.createFrictionEquationsFromContact(F, this.frictionResult);
                            R = 0;
                            for (var N = q.length; R !== N; R++) h.release(q[R]);
                            return;
                        }
                        for (R = 0; R !== b.length; R++) {
                            var I = h.get(), W = h.get();
                            r.vmult(u[b[(R + 1) % b.length]], I), r.vmult(u[b[(R + 2) % b.length]], W), o.vadd(I, I), 
                            o.vadd(W, W);
                            var L = tt;
                            W.vsub(I, L);
                            var j = it;
                            L.unit(j);
                            var O = h.get(), k = h.get();
                            e.vsub(I, k);
                            var _ = k.dot(j);
                            j.mult(_, O), O.vadd(I, O);
                            var U = h.get();
                            if (O.vsub(e, U), _ > 0 && _ * _ < L.norm2() && U.norm2() < d * d) {
                                F = this.createContactEquation(a, l, t, i);
                                O.vsub(o, F.rj), O.vsub(e, F.ni), F.ni.normalize(), F.ni.mult(d, F.ri), F.rj.vadd(o, F.rj), 
                                F.rj.vsub(l.position, F.rj), F.ri.vadd(e, F.ri), F.ri.vsub(a.position, F.ri), this.result.push(F), 
                                this.createFrictionEquationsFromContact(F, this.frictionResult);
                                for (R = 0, N = q.length; R !== N; R++) h.release(q[R]);
                                return h.release(I), h.release(W), h.release(O), h.release(U), void h.release(k);
                            }
                            h.release(I), h.release(W), h.release(O), h.release(U), h.release(k);
                        }
                        for (R = 0, N = q.length; R !== N; R++) h.release(q[R]);
                    }
                }
            }, new l(), new l(), i.prototype[r.types.PLANE | r.types.BOX] = i.prototype.planeBox = function(t, i, e, o, n, s, r, a) {
                i.convexPolyhedronRepresentation.material = i.material, i.convexPolyhedronRepresentation.collisionResponse = i.collisionResponse, 
                this.planeConvex(t, i.convexPolyhedronRepresentation, e, o, n, s, r, a);
            };
            var ht = new l(), pt = new l(), ct = new l(), ut = new l();
            i.prototype[r.types.PLANE | r.types.CONVEXPOLYHEDRON] = i.prototype.planeConvex = function(t, i, e, o, n, s, r, a) {
                var l = ht, h = pt;
                h.set(0, 0, 1), n.vmult(h, h);
                for (var p = 0, c = ct, u = 0; u !== i.vertices.length; u++) {
                    if (l.copy(i.vertices[u]), s.vmult(l, l), o.vadd(l, l), l.vsub(e, c), 0 >= h.dot(c)) {
                        var d = this.createContactEquation(r, a, t, i), v = ut;
                        h.mult(h.dot(c), v), l.vsub(v, v), v.vsub(e, d.ri), d.ni.copy(h), l.vsub(o, d.rj), 
                        d.ri.vadd(e, d.ri), d.ri.vsub(r.position, d.ri), d.rj.vadd(o, d.rj), d.rj.vsub(a.position, d.rj), 
                        this.result.push(d), p++, this.enableFrictionReduction || this.createFrictionEquationsFromContact(d, this.frictionResult);
                    }
                }
                this.enableFrictionReduction && p && this.createFrictionFromAverage(p);
            };
            var dt = new l(), vt = new l();
            i.prototype[r.types.CONVEXPOLYHEDRON] = i.prototype.convexConvex = function(t, i, e, o, n, s, r, a, l, h, p, c) {
                var u = dt;
                if (!(e.distanceTo(o) > t.boundingSphereRadius + i.boundingSphereRadius) && t.findSeparatingAxis(i, e, n, o, s, u, p, c)) {
                    var d = [], v = vt;
                    t.clipAgainstHull(e, n, i, o, s, u, -100, 100, d);
                    for (var y = 0, f = 0; f !== d.length; f++) {
                        var m = this.createContactEquation(r, a, t, i, l, h), w = m.ri, x = m.rj;
                        u.negate(m.ni), d[f].normal.negate(v), v.mult(d[f].depth, v), d[f].point.vadd(v, w), 
                        x.copy(d[f].point), w.vsub(e, w), x.vsub(o, x), w.vadd(e, w), w.vsub(r.position, w), 
                        x.vadd(o, x), x.vsub(a.position, x), this.result.push(m), y++, this.enableFrictionReduction || this.createFrictionEquationsFromContact(m, this.frictionResult);
                    }
                    this.enableFrictionReduction && y && this.createFrictionFromAverage(y);
                }
            };
            var yt = new l(), ft = new l(), mt = new l();
            i.prototype[r.types.PLANE | r.types.PARTICLE] = i.prototype.planeParticle = function(t, i, e, o, n, s, r, a) {
                var l = yt;
                l.set(0, 0, 1), r.quaternion.vmult(l, l);
                var h = ft;
                if (o.vsub(r.position, h), 0 >= l.dot(h)) {
                    var p = this.createContactEquation(a, r, i, t);
                    p.ni.copy(l), p.ni.negate(p.ni), p.ri.set(0, 0, 0);
                    var c = mt;
                    l.mult(l.dot(o), c), o.vsub(c, c), p.rj.copy(c), this.result.push(p), this.createFrictionEquationsFromContact(p, this.frictionResult);
                }
            };
            var wt = new l();
            i.prototype[r.types.PARTICLE | r.types.SPHERE] = i.prototype.sphereParticle = function(t, i, e, o, n, s, r, a) {
                var l = wt;
                if (l.set(0, 0, 1), o.vsub(e, l), l.norm2() <= t.radius * t.radius) {
                    var h = this.createContactEquation(a, r, i, t);
                    l.normalize(), h.rj.copy(l), h.rj.mult(t.radius, h.rj), h.ni.copy(l), h.ni.negate(h.ni), 
                    h.ri.set(0, 0, 0), this.result.push(h), this.createFrictionEquationsFromContact(h, this.frictionResult);
                }
            };
            var xt = new p(), gt = new l(), bt = (new l(), new l()), Bt = new l(), Et = new l();
            i.prototype[r.types.PARTICLE | r.types.CONVEXPOLYHEDRON] = i.prototype.convexParticle = function(t, i, e, o, n, s, r, a) {
                var l = -1, h = bt, p = Et, c = null, u = gt;
                if (u.copy(o), u.vsub(e, u), n.conjugate(xt), xt.vmult(u, u), t.pointIsInside(u)) {
                    t.worldVerticesNeedsUpdate && t.computeWorldVertices(e, n), t.worldFaceNormalsNeedsUpdate && t.computeWorldFaceNormals(n);
                    for (var d = 0, v = t.faces.length; d !== v; d++) {
                        var y = [ t.worldVertices[t.faces[d][0]] ], f = t.worldFaceNormals[d];
                        o.vsub(y[0], Bt);
                        var m = -f.dot(Bt);
                        (null === c || Math.abs(m) < Math.abs(c)) && (c = m, l = d, h.copy(f), 0);
                    }
                    if (-1 !== l) {
                        var w = this.createContactEquation(a, r, i, t);
                        h.mult(c, p), p.vadd(o, p), p.vsub(e, p), w.rj.copy(p), h.negate(w.ni), w.ri.set(0, 0, 0);
                        var x = w.ri, g = w.rj;
                        x.vadd(o, x), x.vsub(a.position, x), g.vadd(e, g), g.vsub(r.position, g), this.result.push(w), 
                        this.createFrictionEquationsFromContact(w, this.frictionResult);
                    } else console.warn("Point found inside convex, but did not find penetrating face!");
                }
            }, i.prototype[r.types.BOX | r.types.HEIGHTFIELD] = i.prototype.boxHeightfield = function(t, i, e, o, n, s, r, a) {
                t.convexPolyhedronRepresentation.material = t.material, t.convexPolyhedronRepresentation.collisionResponse = t.collisionResponse, 
                this.convexHeightfield(t.convexPolyhedronRepresentation, i, e, o, n, s, r, a);
            };
            var At = new l(), St = new l(), Ct = [ 0 ];
            i.prototype[r.types.CONVEXPOLYHEDRON | r.types.HEIGHTFIELD] = i.prototype.convexHeightfield = function(t, i, e, o, n, s, r, a) {
                var l = i.data, p = i.elementSize, c = t.boundingSphereRadius, u = St, d = Ct, v = At;
                h.pointToLocalFrame(o, s, e, v);
                var y = Math.floor((v.x - c) / p) - 1, f = Math.ceil((v.x + c) / p) + 1, m = Math.floor((v.y - c) / p) - 1, w = Math.ceil((v.y + c) / p) + 1;
                if (!(0 > f || 0 > w || y > l.length || m > l[0].length)) {
                    0 > y && (y = 0), 0 > f && (f = 0), 0 > m && (m = 0), 0 > w && (w = 0), y >= l.length && (y = l.length - 1), 
                    f >= l.length && (f = l.length - 1), w >= l[0].length && (w = l[0].length - 1), 
                    m >= l[0].length && (m = l[0].length - 1);
                    var x = [];
                    i.getRectMinMax(y, m, f, w, x);
                    var g = x[0], b = x[1];
                    if (!(v.z - c > b || v.z + c < g)) for (var B = y; f > B; B++) for (var E = m; w > E; E++) i.getConvexTrianglePillar(B, E, !1), 
                    h.pointToWorldFrame(o, s, i.pillarOffset, u), e.distanceTo(u) < i.pillarConvex.boundingSphereRadius + t.boundingSphereRadius && this.convexConvex(t, i.pillarConvex, e, u, n, s, r, a, null, null, d, null), 
                    i.getConvexTrianglePillar(B, E, !0), h.pointToWorldFrame(o, s, i.pillarOffset, u), 
                    e.distanceTo(u) < i.pillarConvex.boundingSphereRadius + t.boundingSphereRadius && this.convexConvex(t, i.pillarConvex, e, u, n, s, r, a, null, null, d, null);
                }
            };
            var zt = new l(), qt = new l();
            i.prototype[r.types.SPHERE | r.types.HEIGHTFIELD] = i.prototype.sphereHeightfield = function(t, i, e, o, n, s, r, a) {
                var l = i.data, p = t.radius, c = i.elementSize, u = qt, d = zt;
                h.pointToLocalFrame(o, s, e, d);
                var v = Math.floor((d.x - p) / c) - 1, y = Math.ceil((d.x + p) / c) + 1, f = Math.floor((d.y - p) / c) - 1, m = Math.ceil((d.y + p) / c) + 1;
                if (!(0 > y || 0 > m || v > l.length || m > l[0].length)) {
                    0 > v && (v = 0), 0 > y && (y = 0), 0 > f && (f = 0), 0 > m && (m = 0), v >= l.length && (v = l.length - 1), 
                    y >= l.length && (y = l.length - 1), m >= l[0].length && (m = l[0].length - 1), 
                    f >= l[0].length && (f = l[0].length - 1);
                    var w = [];
                    i.getRectMinMax(v, f, y, m, w);
                    var x = w[0], g = w[1];
                    if (!(d.z - p > g || d.z + p < x)) for (var b = this.result, B = v; y > B; B++) for (var E = f; m > E; E++) {
                        var A = b.length;
                        if (i.getConvexTrianglePillar(B, E, !1), h.pointToWorldFrame(o, s, i.pillarOffset, u), 
                        e.distanceTo(u) < i.pillarConvex.boundingSphereRadius + t.boundingSphereRadius && this.sphereConvex(t, i.pillarConvex, e, u, n, s, r, a), 
                        i.getConvexTrianglePillar(B, E, !0), h.pointToWorldFrame(o, s, i.pillarOffset, u), 
                        e.distanceTo(u) < i.pillarConvex.boundingSphereRadius + t.boundingSphereRadius && this.sphereConvex(t, i.pillarConvex, e, u, n, s, r, a), 
                        b.length - A > 2) return;
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
            function i() {
                h.apply(this), this.dt = -1, this.allowSleep = !1, this.contacts = [], this.frictionEquations = [], 
                this.quatNormalizeSkip = 0, this.quatNormalizeFast = !1, this.time = 0, this.stepnumber = 0, 
                this.default_dt = 1 / 60, this.nextId = 0, this.gravity = new s(), this.broadphase = new w(), 
                this.bodies = [], this.solver = new a(), this.constraints = [], this.narrowphase = new l(this), 
                this.collisionMatrix = new p(), this.collisionMatrixPrevious = new p(), this.materials = [], 
                this.contactmaterials = [], this.contactMaterialTable = new v(), this.defaultMaterial = new c("default"), 
                this.defaultContactMaterial = new u(this.defaultMaterial, this.defaultMaterial, {
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
            e.exports = i;
            var n = t("../shapes/Shape"), s = t("../math/Vec3"), r = t("../math/Quaternion"), a = t("../solver/GSSolver"), l = (t("../utils/Vec3Pool"), 
            t("../equations/ContactEquation"), t("../equations/FrictionEquation"), t("./Narrowphase")), h = t("../utils/EventTarget"), p = t("../collision/ArrayCollisionMatrix"), c = t("../material/Material"), u = t("../material/ContactMaterial"), d = t("../objects/Body"), v = t("../utils/TupleDictionary"), y = t("../collision/RaycastResult"), f = t("../collision/AABB"), m = t("../collision/Ray"), w = t("../collision/NaiveBroadphase");
            i.prototype = new h();
            var x = (new f(), new m());
            if (i.prototype.getContactMaterial = function(t, i) {
                return this.contactMaterialTable.get(t.id, i.id);
            }, i.prototype.numObjects = function() {
                return this.bodies.length;
            }, i.prototype.collisionMatrixTick = function() {
                var t = this.collisionMatrixPrevious;
                this.collisionMatrixPrevious = this.collisionMatrix, this.collisionMatrix = t, this.collisionMatrix.reset();
            }, i.prototype.add = i.prototype.addBody = function(t) {
                -1 === this.bodies.indexOf(t) && (t.index = this.bodies.length, this.bodies.push(t), 
                t.world = this, t.initPosition.copy(t.position), t.initVelocity.copy(t.velocity), 
                t.timeLastSleepy = this.time, t instanceof d && (t.initAngularVelocity.copy(t.angularVelocity), 
                t.initQuaternion.copy(t.quaternion)), this.collisionMatrix.setNumObjects(this.bodies.length), 
                this.addBodyEvent.body = t, this.dispatchEvent(this.addBodyEvent));
            }, i.prototype.addConstraint = function(t) {
                this.constraints.push(t);
            }, i.prototype.removeConstraint = function(t) {
                var i = this.constraints.indexOf(t);
                -1 !== i && this.constraints.splice(i, 1);
            }, i.prototype.rayTest = function(t, i, e) {
                e instanceof y ? this.raycastClosest(t, i, {
                    skipBackfaces: !0
                }, e) : this.raycastAll(t, i, {
                    skipBackfaces: !0
                }, e);
            }, i.prototype.raycastAll = function(t, i, e, o) {
                return e.mode = m.ALL, e.from = t, e.to = i, e.callback = o, x.intersectWorld(this, e);
            }, i.prototype.raycastAny = function(t, i, e, o) {
                return e.mode = m.ANY, e.from = t, e.to = i, e.result = o, x.intersectWorld(this, e);
            }, i.prototype.raycastClosest = function(t, i, e, o) {
                return e.mode = m.CLOSEST, e.from = t, e.to = i, e.result = o, x.intersectWorld(this, e);
            }, i.prototype.remove = function(t) {
                t.world = null;
                var i = this.bodies.length - 1, e = this.bodies, o = e.indexOf(t);
                if (-1 !== o) {
                    e.splice(o, 1);
                    for (var n = 0; n !== e.length; n++) e[n].index = n;
                    this.collisionMatrix.setNumObjects(i), this.removeBodyEvent.body = t, this.dispatchEvent(this.removeBodyEvent);
                }
            }, i.prototype.removeBody = i.prototype.remove, i.prototype.addMaterial = function(t) {
                this.materials.push(t);
            }, i.prototype.addContactMaterial = function(t) {
                this.contactmaterials.push(t), this.contactMaterialTable.set(t.materials[0].id, t.materials[1].id, t);
            }, "undefined" == typeof performance && (performance = {}), !performance.now) {
                var g = Date.now();
                performance.timing && performance.timing.navigationStart && (g = performance.timing.navigationStart), 
                performance.now = function() {
                    return Date.now() - g;
                };
            }
            var b = new s();
            i.prototype.step = function(t, i, e) {
                if (e = e || 10, 0 === (i = i || 0)) this.internalStep(t), this.time += t; else {
                    var o = Math.floor((this.time + i) / t) - Math.floor(this.time / t);
                    o = Math.min(o, e);
                    for (var n = performance.now(), s = 0; s !== o && (this.internalStep(t), !(performance.now() - n > 1e3 * t)); s++) ;
                    this.time += i;
                    for (var r = this.time % t / t, a = b, l = this.bodies, h = 0; h !== l.length; h++) {
                        var p = l[h];
                        p.type !== d.STATIC && p.sleepState !== d.SLEEPING ? (p.position.vsub(p.previousPosition, a), 
                        a.scale(r, a), p.position.vadd(a, p.interpolatedPosition)) : (p.interpolatedPosition.copy(p.position), 
                        p.interpolatedQuaternion.copy(p.quaternion));
                    }
                }
            };
            var B = {
                type: "postStep"
            }, E = {
                type: "preStep"
            }, A = {
                type: "collide",
                body: null,
                contact: null
            }, S = [], C = [], z = [], q = [], R = (new s(), new s(), new s(), new s(), new s(), 
            new s(), new s(), new s(), new s(), new r(), new r()), M = new r(), P = new s();
            i.prototype.internalStep = function(t) {
                this.dt = t;
                var i, e = this.contacts, o = z, s = q, r = this.numObjects(), a = this.bodies, l = this.solver, h = this.gravity, p = this.doProfiling, c = this.profile, u = d.DYNAMIC, v = this.constraints, y = C, f = (h.norm(), 
                h.x), m = h.y, w = h.z, x = 0;
                for (p && (i = performance.now()), x = 0; x !== r; x++) {
                    if ((O = a[x]).type & u) {
                        var g = O.force, b = O.mass;
                        g.x += b * f, g.y += b * m, g.z += b * w;
                    }
                }
                x = 0;
                for (var F = this.subsystems.length; x !== F; x++) this.subsystems[x].update();
                p && (i = performance.now()), o.length = 0, s.length = 0, this.broadphase.collisionPairs(this, o, s), 
                p && (c.broadphase = performance.now() - i);
                var V = v.length;
                for (x = 0; x !== V; x++) {
                    if (!(_ = v[x]).collideConnected) for (var T = o.length - 1; T >= 0; T -= 1) (_.bodyA === o[T] && _.bodyB === s[T] || _.bodyB === o[T] && _.bodyA === s[T]) && (o.splice(T, 1), 
                    s.splice(T, 1));
                }
                this.collisionMatrixTick(), p && (i = performance.now());
                var N = S, I = e.length;
                for (x = 0; x !== I; x++) N.push(e[x]);
                e.length = 0;
                var W = this.frictionEquations.length;
                for (x = 0; x !== W; x++) y.push(this.frictionEquations[x]);
                this.frictionEquations.length = 0, this.narrowphase.getContacts(o, s, this, e, N, this.frictionEquations, y), 
                p && (c.narrowphase = performance.now() - i), p && (i = performance.now());
                for (x = 0; x < this.frictionEquations.length; x++) l.addEquation(this.frictionEquations[x]);
                for (var L = e.length, j = 0; j !== L; j++) {
                    var O = (_ = e[j]).bi, k = _.bj;
                    _.si, _.sj;
                    (O.material && k.material && this.getContactMaterial(O.material, k.material) || this.defaultContactMaterial).friction;
                    if (O.material && k.material && (O.material.friction >= 0 && k.material.friction >= 0 && O.material.friction * k.material.friction, 
                    O.material.restitution >= 0 && k.material.restitution >= 0 && (_.restitution = O.material.restitution * k.material.restitution)), 
                    l.addEquation(_), O.allowSleep && O.type === d.DYNAMIC && O.sleepState === d.SLEEPING && k.sleepState === d.AWAKE && k.type !== d.STATIC) k.velocity.norm2() + k.angularVelocity.norm2() >= 2 * Math.pow(k.sleepSpeedLimit, 2) && (O._wakeUpAfterNarrowphase = !0);
                    if (k.allowSleep && k.type === d.DYNAMIC && k.sleepState === d.SLEEPING && O.sleepState === d.AWAKE && O.type !== d.STATIC) O.velocity.norm2() + O.angularVelocity.norm2() >= 2 * Math.pow(O.sleepSpeedLimit, 2) && (k._wakeUpAfterNarrowphase = !0);
                    this.collisionMatrix.set(O, k, !0), this.collisionMatrixPrevious.get(O, k) || (A.body = k, 
                    A.contact = _, O.dispatchEvent(A), A.body = O, k.dispatchEvent(A));
                }
                for (p && (c.makeContactConstraints = performance.now() - i, i = performance.now()), 
                x = 0; x !== r; x++) {
                    (O = a[x])._wakeUpAfterNarrowphase && (O.wakeUp(), O._wakeUpAfterNarrowphase = !1);
                }
                V = v.length;
                for (x = 0; x !== V; x++) {
                    var _;
                    (_ = v[x]).update();
                    T = 0;
                    for (var U = _.equations.length; T !== U; T++) {
                        var H = _.equations[T];
                        l.addEquation(H);
                    }
                }
                l.solve(t, this), p && (c.solve = performance.now() - i), l.removeAllEquations();
                var D = Math.pow;
                for (x = 0; x !== r; x++) {
                    if ((O = a[x]).type & u) {
                        var X = D(1 - O.linearDamping, t), G = O.velocity;
                        G.mult(X, G);
                        var Y = O.angularVelocity;
                        if (Y) {
                            var Q = D(1 - O.angularDamping, t);
                            Y.mult(Q, Y);
                        }
                    }
                }
                for (this.dispatchEvent(E), x = 0; x !== r; x++) {
                    (O = a[x]).preStep && O.preStep.call(O);
                }
                p && (i = performance.now());
                var Z = R, K = M, J = this.stepnumber, $ = d.DYNAMIC | d.KINEMATIC, tt = J % (this.quatNormalizeSkip + 1) == 0, it = this.quatNormalizeFast, et = .5 * t;
                for (n.types.PLANE, n.types.CONVEXPOLYHEDRON, x = 0; x !== r; x++) {
                    var ot = a[x], nt = ot.force, st = ot.torque;
                    if (ot.type & $ && ot.sleepState !== d.SLEEPING) {
                        var rt = ot.velocity, at = ot.angularVelocity, lt = ot.position, ht = ot.quaternion, pt = ot.invMass, ct = ot.invInertiaWorld;
                        rt.x += nt.x * pt * t, rt.y += nt.y * pt * t, rt.z += nt.z * pt * t, ot.angularVelocity && (ct.vmult(st, P), 
                        P.mult(t, P), P.vadd(at, at)), lt.x += rt.x * t, lt.y += rt.y * t, lt.z += rt.z * t, 
                        ot.angularVelocity && (Z.set(at.x, at.y, at.z, 0), Z.mult(ht, K), ht.x += et * K.x, 
                        ht.y += et * K.y, ht.z += et * K.z, ht.w += et * K.w, tt && (it ? ht.normalizeFast() : ht.normalize())), 
                        ot.aabb && (ot.aabbNeedsUpdate = !0), ot.updateInertiaWorld && ot.updateInertiaWorld();
                    }
                }
                for (this.clearForces(), this.broadphase.dirty = !0, p && (c.integrate = performance.now() - i), 
                this.time += t, this.stepnumber += 1, this.dispatchEvent(B), x = 0; x !== r; x++) {
                    var ut = (O = a[x]).postStep;
                    ut && ut.call(O);
                }
                if (this.allowSleep) for (x = 0; x !== r; x++) a[x].sleepTick(this.time);
            }, i.prototype.clearForces = function() {
                for (var t = this.bodies, i = t.length, e = 0; e !== i; e++) {
                    var o = t[e];
                    o.force, o.torque, o.force.set(0, 0, 0), o.torque.set(0, 0, 0);
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