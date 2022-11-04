!function(t, i) {
    "use strict";
    class e {
        constructor() {
            this._lastUpdateFrame = -2147483648, this._updateFrame = -2147483648, this._isTrigger = !1, 
            this.contacts = [];
        }
        _setUpdateFrame(t) {
            this._lastUpdateFrame = this._updateFrame, this._updateFrame = t;
        }
    }
    class s {
        constructor() {
            this._idCounter = 0, this.colliderA = null, this.colliderB = null, this.distance = 0, 
            this.normal = new i.Vector3(), this.positionOnA = new i.Vector3(), this.positionOnB = new i.Vector3(), 
            this._id = ++this._idCounter;
        }
    }
    class o {
        constructor() {
            this.succeeded = !1, this.collider = null, this.point = new i.Vector3(), this.normal = new i.Vector3(), 
            this.hitFraction = 0;
        }
    }
    class l {
        constructor() {
            this._hitResultsPoolIndex = 0, this._hitResultsPool = [], this._contactPonintsPoolIndex = 0, 
            this._contactPointsPool = [], this._collisionsPool = [], this._collisions = {};
        }
        getHitResult() {
            var t = this._hitResultsPool[this._hitResultsPoolIndex++];
            return t || (t = new o(), this._hitResultsPool.push(t)), t;
        }
        recoverAllHitResultsPool() {
            this._hitResultsPoolIndex = 0;
        }
        getContactPoints() {
            var t = this._contactPointsPool[this._contactPonintsPoolIndex++];
            return t || (t = new s(), this._contactPointsPool.push(t)), t;
        }
        recoverAllContactPointsPool() {
            this._contactPonintsPoolIndex = 0;
        }
        getCollision(t, i) {
            var s, o = t.id, l = i.id, n = this._collisions[o];
            return n && (s = n[l]), s || (n || (n = {}, this._collisions[o] = n), (s = 0 === this._collisionsPool.length ? new e() : this._collisionsPool.pop())._colliderA = t, 
            s._colliderB = i, n[l] = s), s;
        }
        recoverCollision(t) {
            var i = t._colliderA.id, e = t._colliderB.id;
            this._collisions[i][e] = null, this._collisionsPool.push(t);
        }
        garbageCollection() {
            for (var t in this._hitResultsPoolIndex = 0, this._hitResultsPool.length = 0, this._contactPonintsPoolIndex = 0, 
            this._contactPointsPool.length = 0, this._collisionsPool.length = 0, this._collisionsPool) {
                var i = this._collisionsPool[t], e = !0;
                for (var s in i) i[s] ? e = !1 : delete i[s];
                e && delete this._collisionsPool[t];
            }
        }
    }
    class n {
        constructor() {
            this._scale = new i.Vector3(1, 1, 1), this._centerMatrix = new i.Matrix4x4(), this._attatched = !1, 
            this._indexInCompound = -1, this._compoundParent = null, this._attatchedCollisionObject = null, 
            this._referenceCount = 0, this._localOffset = new i.Vector3(0, 0, 0), this._localRotation = new i.Quaternion(0, 0, 0, 1), 
            this.needsCustomCollisionCallback = !1;
        }
        static __init__() {
            n._btScale = new CANNON.Vec3(), n._btVector30 = new CANNON.Vec3(), n._btQuaternion0 = new CANNON.Quaternion();
        }
        static _createAffineTransformation(t, i, e) {
            var s = i.x, o = i.y, l = i.z, n = i.w, r = s + s, a = o + o, h = l + l, c = s * r, _ = s * a, d = s * h, p = o * a, u = o * h, C = l * h, m = n * r, y = n * a, O = n * h;
            e[0] = 1 - (p + C), e[1] = _ + O, e[2] = d - y, e[3] = 0, e[4] = _ - O, e[5] = 1 - (c + C), 
            e[6] = u + m, e[7] = 0, e[8] = d + y, e[9] = u - m, e[10] = 1 - (c + p), e[11] = 0, 
            e[12] = t.x, e[13] = t.y, e[14] = t.z, e[15] = 1;
        }
        get type() {
            return this._type;
        }
        get localOffset() {
            return this._localOffset;
        }
        set localOffset(t) {
            t.cloneTo(this._localOffset);
        }
        get localRotation() {
            return this._localRotation;
        }
        set localRotation(t) {
            this._localRotation = t, this._compoundParent && this._compoundParent._updateChildTransform(this);
        }
        _setScale(t) {}
        _addReference() {
            this._referenceCount++;
        }
        _removeReference() {
            this._referenceCount--;
        }
        updateLocalTransformations() {
            if (this._compoundParent) {
                var t = n._tempVector30;
                i.Vector3.multiply(this.localOffset, this._scale, t), n._createAffineTransformation(t, this.localRotation, this._centerMatrix.elements);
            } else n._createAffineTransformation(this.localOffset, this.localRotation, this._centerMatrix.elements);
        }
        cloneTo(t) {
            var i = t;
            this._localOffset.cloneTo(i.localOffset), this._localRotation.cloneTo(i.localRotation), 
            i.localOffset = i.localOffset, i.localRotation = i.localRotation;
        }
        clone() {
            return null;
        }
        destroy() {
            this._btShape && (this._btShape = null);
        }
    }
    n.SHAPEORIENTATION_UPX = 0, n.SHAPEORIENTATION_UPY = 1, n.SHAPEORIENTATION_UPZ = 2, 
    n.SHAPETYPES_BOX = 0, n.SHAPETYPES_SPHERE = 1, n.SHAPETYPES_CYLINDER = 2, n.SHAPETYPES_CAPSULE = 3, 
    n.SHAPETYPES_CONVEXHULL = 4, n.SHAPETYPES_COMPOUND = 5, n.SHAPETYPES_STATICPLANE = 6, 
    n.SHAPETYPES_CONE = 7, n._tempVector30 = new i.Vector3();
    class r extends n {
        constructor(t = 1, i = 1, e = 1) {
            super(), this._sizeX = t, this._sizeY = i, this._sizeZ = e, this._type = n.SHAPETYPES_BOX;
            var s = new CANNON.Vec3(t / 2, i / 2, e / 2);
            this._btShape = new CANNON.Box(s);
        }
        static __init__() {
            r._btSize = new CANNON.Vec3();
        }
        get sizeX() {
            return this._sizeX;
        }
        get sizeY() {
            return this._sizeY;
        }
        get sizeZ() {
            return this._sizeZ;
        }
        _setScale(t) {
            this._scale.setValue(t.x, t.y, t.z), this._btShape.halfExtents.set(this.sizeX / 2 * t.x, this.sizeY / 2 * t.y, this.sizeZ / 2 * t.z), 
            this._btShape.updateConvexPolyhedronRepresentation(), this._btShape.updateBoundingSphereRadius();
        }
        clone() {
            var t = new r(this._sizeX, this._sizeY, this._sizeZ);
            return this.cloneTo(t), t;
        }
    }
    class a extends n {
        constructor(t = .5) {
            super(), this._radius = t, this._type = n.SHAPETYPES_SPHERE, this._btShape = new CANNON.Sphere(t);
        }
        get radius() {
            return this._radius;
        }
        _setScale(t) {
            var i = Math.max(t.x, t.y, t.z);
            this._scale.setValue(i, i, i), this._btShape.radius = i * this.radius, this._btShape.updateBoundingSphereRadius();
        }
        clone() {
            var t = new a(this._radius);
            return this.cloneTo(t), t;
        }
    }
    class h extends i.Component {
        constructor(t, e) {
            super(), this._restitution = 0, this._friction = .5, this._collisionGroup = i.Physics3DUtils.COLLISIONFILTERGROUP_DEFAULTFILTER, 
            this._canCollideWith = i.Physics3DUtils.COLLISIONFILTERGROUP_ALLFILTER, this._colliderShape = null, 
            this._transformFlag = 2147483647, this._controlBySimulation = !1, this._enableProcessCollisions = !0, 
            this._inPhysicUpdateListIndex = -1, this.canScaleShape = !0, this._collisionGroup = t, 
            this._canCollideWith = e, h._physicObjectsMap[this.id] = this;
        }
        static __init__() {
            h._btVector30 = new CANNON.Vec3(0, 0, 0), h._btQuaternion0 = new CANNON.Quaternion(0, 0, 0, 1);
        }
        static _creatShape(t) {
            var i;
            switch (t.type) {
              case "BoxColliderShape":
                var e = t.size;
                i = e ? new r(e[0], e[1], e[2]) : new r();
                break;

              case "SphereColliderShape":
                i = new a(t.radius);
                break;

              default:
                throw "unknown shape type.";
            }
            if (t.center) {
                var s = i.localOffset;
                s.fromArray(t.center), i.localOffset = s;
            }
            return i;
        }
        static physicQuaternionMultiply(t, i, e, s, o, l) {
            var n = o.x, r = o.y, a = o.z, h = o.w, c = i * a - e * r, _ = e * n - t * a, d = t * r - i * n, p = t * n + i * r + e * a;
            l.x = t * h + n * s + c, l.y = i * h + r * s + _, l.z = e * h + a * s + d, l.w = s * h - p;
        }
        get restitution() {
            return this._restitution;
        }
        set restitution(t) {
            this._restitution = t, this._btColliderObject && (this._btColliderObject.material.restitution = t);
        }
        get friction() {
            return this._friction;
        }
        set friction(t) {
            this._friction = t, this._btColliderObject && (this._btColliderObject.material.friction = t);
        }
        get colliderShape() {
            return this._colliderShape;
        }
        set colliderShape(t) {
            var i = this._colliderShape;
            if (i && (i._attatched = !1, i._attatchedCollisionObject = null), this._colliderShape = t, 
            t) {
                if (t._attatched) throw "PhysicsComponent: this shape has attatched to other entity.";
                if (t._attatched = !0, t._attatchedCollisionObject = this, this._btColliderObject) {
                    if (t.type != n.SHAPETYPES_COMPOUND) {
                        this._btColliderObject.shapes.length = 0, this._btColliderObject.shapeOffsets.length = 0, 
                        this._btColliderObject.shapeOrientations.length = 0;
                        var e = t.localOffset, s = t._scale, o = new CANNON.Vec3(e.x * s.x, e.y * s.y, e.z * s.z);
                        this._btColliderObject.addShape(this._colliderShape._btShape, o), this._btColliderObject.updateBoundingRadius();
                    } else t.bindRigidBody(this);
                    var l = this._simulation && this._enabled;
                    l && i && this._removeFromSimulation(), this._onShapeChange(t), l && (this._derivePhysicsTransformation(!0), 
                    this._addToSimulation());
                }
            } else this._simulation && this._enabled && i && this._removeFromSimulation();
        }
        get simulation() {
            return this._simulation;
        }
        get collisionGroup() {
            return this._collisionGroup;
        }
        set collisionGroup(t) {
            this._collisionGroup !== t && (this._collisionGroup = t, this._btColliderObject.collisionFilterGroup = t, 
            this._simulation && this._colliderShape && this._enabled && (this._removeFromSimulation(), 
            this._addToSimulation()));
        }
        get canCollideWith() {
            return this._canCollideWith;
        }
        set canCollideWith(t) {
            this._canCollideWith !== t && (this._canCollideWith = t, this._btColliderObject.collisionFilterMask = t, 
            this._simulation && this._colliderShape && this._enabled && (this._removeFromSimulation(), 
            this._addToSimulation()));
        }
        _parseShape(t) {
            if (1 === t.length) {
                var i = h._creatShape(t[0]);
                this.colliderShape = i;
            }
        }
        _onScaleChange(t) {
            this._colliderShape._setScale(t);
        }
        _onEnable() {
            this._simulation = this.owner._scene._cannonPhysicsSimulation, this._colliderShape && (this._derivePhysicsTransformation(!0), 
            this._addToSimulation());
        }
        _onDisable() {
            this._colliderShape && (this._removeFromSimulation(), -1 !== this._inPhysicUpdateListIndex && this._simulation._physicsUpdateList.remove(this)), 
            this._simulation = null;
        }
        _onDestroy() {
            delete h._physicObjectsMap[this.id], this._btColliderObject = null, this._colliderShape.destroy(), 
            super._onDestroy(), this._btColliderObject = null, this._colliderShape = null, this._simulation = null, 
            this.owner.transform.off(i.Event.TRANSFORM_CHANGED, this, this._onTransformChanged);
        }
        _isValid() {
            return this._simulation && this._colliderShape && this._enabled;
        }
        _parse(t) {
            null != t.collisionGroup && (this.collisionGroup = t.collisionGroup), null != t.canCollideWith && (this.canCollideWith = t.canCollideWith);
        }
        _setTransformFlag(t, i) {
            i ? this._transformFlag |= t : this._transformFlag &= ~t;
        }
        _getTransformFlag(t) {
            return 0 != (this._transformFlag & t);
        }
        _addToSimulation() {}
        _removeFromSimulation() {}
        _derivePhysicsTransformation(t) {
            var i = this._btColliderObject;
            this._innerDerivePhysicsTransformation(i, t);
        }
        _innerDerivePhysicsTransformation(t, e) {
            var s = this.owner._transform;
            if (e || this._getTransformFlag(i.Transform3D.TRANSFORM_WORLDPOSITION)) {
                var o = this._colliderShape.localOffset, l = s.position, n = h._btVector30;
                if (0 !== o.x || 0 !== o.y || 0 !== o.z) {
                    var r = h._tempVector30, a = s.worldMatrix;
                    i.Vector3.transformCoordinate(o, a, r), n.set(r.x, r.y, r.z);
                } else n.set(l.x, l.y, l.z);
                t.position.set(n.x, n.y, n.z), this._setTransformFlag(i.Transform3D.TRANSFORM_WORLDPOSITION, !1);
            }
            if (e || this._getTransformFlag(i.Transform3D.TRANSFORM_WORLDQUATERNION)) {
                var c = this._colliderShape.localRotation, _ = h._btQuaternion0, d = s.rotation;
                if (0 !== c.x || 0 !== c.y || 0 !== c.z || 1 !== c.w) {
                    var p = h._tempQuaternion0;
                    h.physicQuaternionMultiply(d.x, d.y, d.z, d.w, c, p), _.set(p.x, p.y, p.z, p.w);
                } else _.set(d.x, d.y, d.z, d.w);
                t.quaternion.set(_.x, _.y, _.z, _.w), this._setTransformFlag(i.Transform3D.TRANSFORM_WORLDQUATERNION, !1);
            }
            (e || this._getTransformFlag(i.Transform3D.TRANSFORM_WORLDSCALE)) && (this._onScaleChange(s.getWorldLossyScale()), 
            this._setTransformFlag(i.Transform3D.TRANSFORM_WORLDSCALE, !1));
        }
        _updateTransformComponent(t) {
            var e = this._colliderShape, s = e.localOffset, o = e.localRotation, l = this.owner._transform, n = l.position, r = l.rotation, a = t.position, c = t.quaternion, _ = c.x, d = c.y, p = c.z, u = c.w;
            if (0 !== o.x || 0 !== o.y || 0 !== o.z || 1 !== o.w) {
                var C = h._tempQuaternion0;
                o.invert(C), h.physicQuaternionMultiply(_, d, p, u, C, r);
            } else r.x = _, r.y = d, r.z = p, r.w = u;
            if (l.rotation = r, 0 !== s.x || 0 !== s.y || 0 !== s.z) {
                var m = h._tempVector30;
                m.x = s.x, m.y = s.y, m.z = s.z, i.Vector3.transformQuat(m, r, m), n.x = a.x - m.x, 
                n.y = a.y - m.z, n.z = a.z - m.y;
            } else n.x = a.x, n.y = a.y, n.z = a.z;
            l.position = n;
        }
        _onShapeChange(t) {}
        _onAdded() {
            this.enabled = this._enabled, this.restitution = this._restitution, this.friction = this._friction, 
            this.owner.transform.on(i.Event.TRANSFORM_CHANGED, this, this._onTransformChanged);
        }
        _onTransformChanged(t) {
            !h._addUpdateList && this._controlBySimulation || (t &= i.Transform3D.TRANSFORM_WORLDPOSITION | i.Transform3D.TRANSFORM_WORLDQUATERNION | i.Transform3D.TRANSFORM_WORLDSCALE) && (this._transformFlag |= t, 
            this._isValid() && -1 === this._inPhysicUpdateListIndex && this._simulation._physicsUpdateList.add(this));
        }
        _cloneTo(t) {
            var i = t;
            i.restitution = this._restitution, i.friction = this._friction, i.collisionGroup = this._collisionGroup, 
            i.canCollideWith = this._canCollideWith, i.canScaleShape = this.canScaleShape, this._colliderShape && (i.colliderShape = this._colliderShape.clone());
        }
    }
    h.ACTIVATIONSTATE_ACTIVE_TAG = 1, h.ACTIVATIONSTATE_ISLAND_SLEEPING = 2, h.ACTIVATIONSTATE_WANTS_DEACTIVATION = 3, 
    h.ACTIVATIONSTATE_DISABLE_DEACTIVATION = 4, h.ACTIVATIONSTATE_DISABLE_SIMULATION = 5, 
    h.COLLISIONFLAGS_STATIC_OBJECT = 1, h.COLLISIONFLAGS_KINEMATIC_OBJECT = 2, h.COLLISIONFLAGS_NO_CONTACT_RESPONSE = 4, 
    h.COLLISIONFLAGS_CUSTOM_MATERIAL_CALLBACK = 8, h.COLLISIONFLAGS_CHARACTER_OBJECT = 16, 
    h.COLLISIONFLAGS_DISABLE_VISUALIZE_OBJECT = 32, h.COLLISIONFLAGS_DISABLE_SPU_COLLISION_PROCESSING = 64, 
    h._tempVector30 = new i.Vector3(), h._tempQuaternion0 = new i.Quaternion(), h._tempQuaternion1 = new i.Quaternion(), 
    h._tempMatrix4x40 = new i.Matrix4x4(), h._physicObjectsMap = {}, h._addUpdateList = !0;
    class c extends h {
        constructor(t, i) {
            super(t, i), this._isTrigger = !1;
        }
        get isTrigger() {
            return this._isTrigger;
        }
        set isTrigger(t) {
            if (this._isTrigger = t, this._btColliderObject) if (this._btColliderObject.isTrigger = t, 
            t) {
                var i = this._btColliderObject.type;
                this._btColliderObject.collisionResponse = !1, 0 == (i & CANNON.Body.STATIC) && (this._btColliderObject.type |= CANNON.Body.STATIC);
            } else this._btColliderObject.collisionResponse = !0, 0 != (i & CANNON.Body.STATIC) && (this._btColliderObject.type ^= CANNON.Body.STATIC);
        }
        _onAdded() {
            super._onAdded(), this.isTrigger = this._isTrigger;
        }
        _cloneTo(t) {
            super._cloneTo(t), t.isTrigger = this._isTrigger;
        }
    }
    class _ extends c {
        constructor(t = -1, i = -1) {
            super(t, i), this._enableProcessCollisions = !1;
        }
        _addToSimulation() {
            this._simulation._addPhysicsCollider(this);
        }
        _removeFromSimulation() {
            this._simulation._removePhysicsCollider(this);
        }
        _parse(t) {
            null != t.friction && (this.friction = t.friction), null != t.restitution && (this.restitution = t.restitution), 
            null != t.isTrigger && (this.isTrigger = t.isTrigger), super._parse(t), this._parseShape(t.shapes);
        }
        _onAdded() {
            this._btColliderObject = new CANNON.Body(), this._btColliderObject.material = new CANNON.Material(), 
            this._btColliderObject.layaID = this._id, this._btColliderObject.type = CANNON.Body.STATIC, 
            this._btColliderObject.collisionFilterGroup = this._collisionGroup, this._btColliderObject.collisionFilterMask = this._canCollideWith, 
            super._onAdded();
        }
    }
    class d extends i.SingletonList {
        constructor() {
            super();
        }
        add(t) {
            if (-1 !== t._inPhysicUpdateListIndex) throw "PhysicsUpdateList:element has  in  PhysicsUpdateList.";
            this._add(t), t._inPhysicUpdateListIndex = this.length++;
        }
        remove(t) {
            var i = t._inPhysicUpdateListIndex;
            if (this.length--, i !== this.length) {
                var e = this.elements[this.length];
                this.elements[i] = e, e._inPhysicUpdateListIndex = i;
            }
            t._inPhysicUpdateListIndex = -1;
        }
    }
    class p {
        constructor(t, e = 0) {
            this._gravity = new i.Vector3(0, -10, 0), this._btClosestRayResultCallback = new CANNON.RaycastResult(), 
            this._btRayoption = {}, this._collisionsUtils = new l(), this._previousFrameCollisions = [], 
            this._currentFrameCollisions = [], this._physicsUpdateList = new d(), this._updatedRigidbodies = 0, 
            this.maxSubSteps = 1, this.fixedTimeStep = 1 / 60, this.maxSubSteps = t.maxSubSteps, 
            this.fixedTimeStep = t.fixedTimeStep, this._btDiscreteDynamicsWorld = new CANNON.World(), 
            this._btBroadphase = new CANNON.NaiveBroadphase(), this._btDiscreteDynamicsWorld.broadphase = this._btBroadphase, 
            this._btDiscreteDynamicsWorld.defaultContactMaterial.contactEquationRelaxation = t.contactEquationRelaxation, 
            this._btDiscreteDynamicsWorld.defaultContactMaterial.contactEquationStiffness = t.contactEquationStiffness, 
            this.gravity = this._gravity;
        }
        static __init__() {
            p._btTempVector30 = new CANNON.Vec3(0, 0, 0), p._btTempVector31 = new CANNON.Vec3(0, 0, 0);
        }
        static createConstraint() {}
        get continuousCollisionDetection() {
            return !1;
        }
        set continuousCollisionDetection(t) {
            throw "Simulation:Cannon physical engine does not support this feature";
        }
        get gravity() {
            if (!this._btDiscreteDynamicsWorld) throw "Simulation:Cannot perform this action when the physics engine is set to CollisionsOnly";
            return this._gravity;
        }
        set gravity(t) {
            if (!this._btDiscreteDynamicsWorld) throw "Simulation:Cannot perform this action when the physics engine is set to CollisionsOnly";
            this._gravity = t, this._btDiscreteDynamicsWorld.gravity.set(t.x, t.y, t.z);
        }
        get solverIterations() {
            if (!this._btDiscreteDynamicsWorld || !this._btDiscreteDynamicsWorld.solver) throw "Simulation:Cannot perform this action when the physics engine is set to CollisionsOnly";
            return this._iterations;
        }
        set solverIterations(t) {
            if (!this._btDiscreteDynamicsWorld || !this._btDiscreteDynamicsWorld.solver) throw "Simulation:Cannot perform this action when the physics engine is set to CollisionsOnly";
            this._btDiscreteDynamicsWorld.solver.iterations = t, this._iterations = t;
        }
        get speculativeContactRestitution() {
            return !1;
        }
        set speculativeContactRestitution(t) {}
        _simulate(t) {
            this._updatedRigidbodies = 0, this._btDiscreteDynamicsWorld && (this._btDiscreteDynamicsWorld.callBackBody.length = 0, 
            this._btDiscreteDynamicsWorld.allContacts.length = 0, this._btDiscreteDynamicsWorld.step(this.fixedTimeStep, t, this.maxSubSteps));
            for (var i = this._btDiscreteDynamicsWorld.callBackBody, e = 0, s = i.length; e < s; e++) {
                var o = i[e], l = h._physicObjectsMap[o.layaID];
                l._simulation._updatedRigidbodies++, l._updateTransformComponent(l._btColliderObject);
            }
        }
        _destroy() {
            this._btDiscreteDynamicsWorld = null, this._btBroadphase = null;
        }
        _addPhysicsCollider(t) {
            this._btDiscreteDynamicsWorld.addBody(t._btColliderObject);
        }
        _removePhysicsCollider(t) {
            this._btDiscreteDynamicsWorld.removeBody(t._btColliderObject);
        }
        _addRigidBody(t) {
            if (!this._btDiscreteDynamicsWorld) throw "Simulation:Cannot perform this action when the physics engine is set to CollisionsOnly";
            this._btDiscreteDynamicsWorld.addBody(t._btColliderObject);
        }
        _removeRigidBody(t) {
            if (!this._btDiscreteDynamicsWorld) throw "Simulation:Cannot perform this action when the physics engine is set to CollisionsOnly";
            this._btDiscreteDynamicsWorld.removeBody(t._btColliderObject);
        }
        raycastFromTo(t, e, s = null, o = i.Physics3DUtils.COLLISIONFILTERGROUP_ALLFILTER, l = i.Physics3DUtils.COLLISIONFILTERGROUP_ALLFILTER) {
            var n = this._btClosestRayResultCallback;
            n.hasHit = !1;
            var r = this._btRayoption, a = p._btTempVector30, c = p._btTempVector31;
            if (a.set(t.x, t.y, t.z), c.set(e.x, e.y, e.z), r.skipBackfaces = !0, r.collisionFilterMask = l, 
            r.collisionFilterGroup = o, r.result = n, this._btDiscreteDynamicsWorld.raycastClosest(a, c, r, n), 
            n.hasHit) {
                if (s) {
                    s.succeeded = !0, s.collider = h._physicObjectsMap[n.body.layaID];
                    var _ = s.point, d = s.normal, u = n.hitPointWorld, C = n.hitNormalWorld;
                    _.setValue(u.x, u.y, u.z), d.setValue(C.x, C.y, C.z);
                }
                return !0;
            }
            return s.succeeded = !1, !1;
        }
        raycastAllFromTo(t, e, s, o = i.Physics3DUtils.COLLISIONFILTERGROUP_ALLFILTER, l = i.Physics3DUtils.COLLISIONFILTERGROUP_ALLFILTER) {
            var n = this._btRayoption, r = p._btTempVector30, a = p._btTempVector31;
            return r.set(t.x, t.y, t.z), a.set(e.x, e.y, e.z), n.skipBackfaces = !0, n.collisionFilterMask = l, 
            n.collisionFilterGroup = o, s.length = 0, this._btDiscreteDynamicsWorld.raycastAll(r, a, n, function(t) {
                var i = this._collisionsUtils.getHitResult();
                s.push(i), i.succeeded = !0, i.collider = h._physicObjectsMap[t.body.layaID];
                var e = i.point, o = i.normal, l = t.hitPointWorld, n = t.hitNormalWorld;
                e.setValue(l.x, l.y, l.z), o.setValue(n.x, n.y, n.z);
            }), 0 != s.length;
        }
        rayCast(t, e = null, s = 2147483647, o = i.Physics3DUtils.COLLISIONFILTERGROUP_ALLFILTER, l = i.Physics3DUtils.COLLISIONFILTERGROUP_ALLFILTER) {
            var n = t.origin, r = p._tempVector30;
            return i.Vector3.normalize(t.direction, r), i.Vector3.scale(r, s, r), i.Vector3.add(n, r, r), 
            this.raycastFromTo(n, r, e, o, l);
        }
        rayCastAll(t, e, s = 2147483647, o = i.Physics3DUtils.COLLISIONFILTERGROUP_ALLFILTER, l = i.Physics3DUtils.COLLISIONFILTERGROUP_ALLFILTER) {
            var n = t.origin, r = p._tempVector30;
            return i.Vector3.normalize(t.direction, r), i.Vector3.scale(r, s, r), i.Vector3.add(n, r, r), 
            this.raycastAllFromTo(n, r, e, o, l);
        }
        _updatePhysicsTransformFromRender() {
            for (var t = this._physicsUpdateList.elements, i = 0, e = this._physicsUpdateList.length; i < e; i++) {
                var s = t[i];
                s._derivePhysicsTransformation(!1), s._inPhysicUpdateListIndex = -1;
            }
            this._physicsUpdateList.length = 0;
        }
        _updateCollisions() {
            this._collisionsUtils.recoverAllContactPointsPool();
            var t = this._currentFrameCollisions;
            this._currentFrameCollisions = this._previousFrameCollisions, this._currentFrameCollisions.length = 0, 
            this._previousFrameCollisions = t;
            for (var e = i.Stat.loopCount, s = this._btDiscreteDynamicsWorld.allContacts, o = s.length, l = 0; l < o; l++) {
                var n, r = s[l], a = h._physicObjectsMap[r.bi.layaID], c = h._physicObjectsMap[r.bj.layaID], _ = null, d = null;
                if ((a.isTrigger || c.isTrigger) && (a.owner._needProcessTriggers || c.owner._needProcessTriggers)) d = (_ = this._collisionsUtils.getCollision(a, c)).contacts, 
                (n = _._updateFrame !== e) && (_._isTrigger = !0, d.length = 0); else if ((a.owner._needProcessCollisions || c.owner._needProcessCollisions) && (a._enableProcessCollisions || c._enableProcessCollisions)) {
                    var p = this._collisionsUtils.getContactPoints();
                    p.colliderA = a, p.colliderB = c;
                    var u = p.normal, C = p.positionOnA, m = p.positionOnB, y = r.ni, O = r.ri, S = r.rj;
                    u.setValue(y.x, y.y, y.z), C.setValue(O.x, O.y, O.z), m.setValue(S.x, S.y, -S.z), 
                    d = (_ = this._collisionsUtils.getCollision(a, c)).contacts, (n = _._updateFrame !== e) && (_._isTrigger = !1, 
                    d.length = 0), d.push(p);
                }
                _ && n && (this._currentFrameCollisions.push(_), _._setUpdateFrame(e));
            }
        }
        _eventScripts() {
            for (var t = i.Stat.loopCount, e = 0, s = this._currentFrameCollisions.length; e < s; e++) {
                var o = this._currentFrameCollisions[e], l = o._colliderA, n = o._colliderB;
                if (!l.destroyed && !n.destroyed) if (t - o._lastUpdateFrame == 1) {
                    var r = l.owner, a = r._scripts;
                    if (a) if (o._isTrigger) {
                        if (r._needProcessTriggers) for (var h = 0, c = a.length; h < c; h++) a[h].onTriggerStay(n);
                    } else if (r._needProcessCollisions) for (h = 0, c = a.length; h < c; h++) o.other = n, 
                    a[h].onCollisionStay(o);
                    var _ = n.owner, d = _._scripts;
                    if (d) if (o._isTrigger) {
                        if (_._needProcessTriggers) for (h = 0, c = d.length; h < c; h++) d[h].onTriggerStay(l);
                    } else if (_._needProcessCollisions) for (h = 0, c = d.length; h < c; h++) o.other = l, 
                    d[h].onCollisionStay(o);
                } else {
                    if (a = (r = l.owner)._scripts) if (o._isTrigger) {
                        if (r._needProcessTriggers) for (h = 0, c = a.length; h < c; h++) a[h].onTriggerEnter(n);
                    } else if (r._needProcessCollisions) for (h = 0, c = a.length; h < c; h++) o.other = n, 
                    a[h].onCollisionEnter(o);
                    if (d = (_ = n.owner)._scripts) if (o._isTrigger) {
                        if (_._needProcessTriggers) for (h = 0, c = d.length; h < c; h++) d[h].onTriggerEnter(l);
                    } else if (_._needProcessCollisions) for (h = 0, c = d.length; h < c; h++) o.other = l, 
                    d[h].onCollisionEnter(o);
                }
            }
            for (e = 0, s = this._previousFrameCollisions.length; e < s; e++) {
                var p = this._previousFrameCollisions[e], u = p._colliderA, C = p._colliderB;
                if (!u.destroyed && !C.destroyed && t - p._updateFrame == 1) {
                    if (this._collisionsUtils.recoverCollision(p), a = (r = u.owner)._scripts) if (p._isTrigger) {
                        if (r._needProcessTriggers) for (h = 0, c = a.length; h < c; h++) a[h].onTriggerExit(C);
                    } else if (r._needProcessCollisions) for (h = 0, c = a.length; h < c; h++) p.other = C, 
                    a[h].onCollisionExit(p);
                    if (d = (_ = C.owner)._scripts) if (p._isTrigger) {
                        if (_._needProcessTriggers) for (h = 0, c = d.length; h < c; h++) d[h].onTriggerExit(u);
                    } else if (_._needProcessCollisions) for (h = 0, c = d.length; h < c; h++) p.other = u, 
                    d[h].onCollisionExit(p);
                }
            }
        }
        clearForces() {
            if (!this._btDiscreteDynamicsWorld) throw "Cannot perform this action when the physics engine is set to CollisionsOnly";
        }
    }
    p.PHYSICSENGINEFLAGS_NONE = 0, p.PHYSICSENGINEFLAGS_COLLISIONSONLY = 1, p.PHYSICSENGINEFLAGS_SOFTBODYSUPPORT = 2, 
    p.PHYSICSENGINEFLAGS_MULTITHREADED = 4, p.PHYSICSENGINEFLAGS_USEHARDWAREWHENPOSSIBLE = 8, 
    p.SOLVERMODE_RANDMIZE_ORDER = 1, p.SOLVERMODE_FRICTION_SEPARATE = 2, p.SOLVERMODE_USE_WARMSTARTING = 4, 
    p.SOLVERMODE_USE_2_FRICTION_DIRECTIONS = 16, p.SOLVERMODE_ENABLE_FRICTION_DIRECTION_CACHING = 32, 
    p.SOLVERMODE_DISABLE_VELOCITY_DEPENDENT_FRICTION_DIRECTION = 64, p.SOLVERMODE_CACHE_FRIENDLY = 128, 
    p.SOLVERMODE_SIMD = 256, p.SOLVERMODE_INTERLEAVE_CONTACT_AND_FRICTION_CONSTRAINTS = 512, 
    p.SOLVERMODE_ALLOW_ZERO_LENGTH_FRICTION_DIRECTIONS = 1024, p._tempVector30 = new i.Vector3(), 
    p.disableSimulation = !1;
    class u extends _ {
        constructor(t = -1, e = i.Physics3DUtils.COLLISIONFILTERGROUP_ALLFILTER) {
            super(t, e), this._isKinematic = !1, this._mass = 1, this._gravity = new i.Vector3(0, -10, 0), 
            this._angularDamping = 0, this._linearDamping = 0, this._totalTorque = new i.Vector3(0, 0, 0), 
            this._totalForce = new i.Vector3(0, 0, 0), this._linearVelocity = new i.Vector3(), 
            this._angularVelocity = new i.Vector3(), this._controlBySimulation = !0;
        }
        static __init__() {
            u._btTempVector30 = new CANNON.Vec3(), u._btTempVector31 = new CANNON.Vec3();
        }
        get mass() {
            return this._mass;
        }
        set mass(t) {
            t = Math.max(t, 1e-7), this._mass = t, this._isKinematic || this._updateMass(t);
        }
        get isKinematic() {
            return this._isKinematic;
        }
        set isKinematic(t) {
            this._isKinematic = t, this._controlBySimulation = !t;
            var i = !!(this._simulation && this._enabled && this._colliderShape);
            i && this._removeFromSimulation();
            var e = this._btColliderObject, s = e.type;
            t ? (s |= CANNON.Body.KINEMATIC, e.type = s, this._enableProcessCollisions = !1, 
            this._updateMass(0)) : ((s & CANNON.Body.KINEMATIC) > 0 && (s ^= CANNON.Body.KINEMATIC), 
            e.allowSleep = !0, e.type = s, this._enableProcessCollisions = !0, this._updateMass(this._mass)), 
            e.velocity.set(0, 0, 0), e.angularVelocity.set(0, 0, 0), i && this._addToSimulation();
        }
        get linearDamping() {
            return this._linearDamping;
        }
        set linearDamping(t) {
            this._linearDamping = t, this._btColliderObject && (this._btColliderObject.linearDamping = t);
        }
        get angularDamping() {
            return this._angularDamping;
        }
        set angularDamping(t) {
            this._angularDamping = t, this._btColliderObject && (this._btColliderObject.angularDamping = t);
        }
        get totalForce() {
            if (this._btColliderObject) {
                var t = this.btColliderObject.force;
                return this.totalForce.setValue(t.x, t.y, t.z), this._totalForce;
            }
            return null;
        }
        get linearVelocity() {
            if (this._btColliderObject) {
                var t = this.btColliderObject.velocity;
                this._linearVelocity.setValue(t.x, t.y, t.z);
            }
            return this._linearVelocity;
        }
        set linearVelocity(t) {
            if (this._linearVelocity = t, this._btColliderObject) {
                var i = this.btColliderObject.velocity;
                this.isSleeping && this.wakeUp(), i.set(t.x, t.y, t.z), this.btColliderObject.velocity = i;
            }
        }
        get angularVelocity() {
            if (this._btColliderObject) {
                var t = this._btColliderObject.angularVelocity;
                this.angularVelocity.setValue(t.x, t.y, t.z);
            }
            return this._angularVelocity;
        }
        set angularVelocity(t) {
            if (this._angularVelocity = t, this._btColliderObject) {
                var i = this.btColliderObject.angularVelocity;
                this.isSleeping && this.wakeUp(), i.set(t.x, t.y, t.z), this.btColliderObject.velocity = i;
            }
        }
        get totalTorque() {
            if (this._btColliderObject) {
                var t = this._btColliderObject.torque;
                return this._totalTorque.setValue(t.x, t.y, t.z), this._totalTorque;
            }
            return null;
        }
        get isSleeping() {
            return !!this._btColliderObject && this._btColliderObject.sleepState != CANNON.Body.AWAKE;
        }
        get sleepLinearVelocity() {
            return this._btColliderObject.sleepSpeedLimit;
        }
        set sleepLinearVelocity(t) {
            this._btColliderObject.sleepSpeedLimit = t;
        }
        get btColliderObject() {
            return this._btColliderObject;
        }
        _updateMass(t) {
            this._btColliderObject && this._colliderShape && (this._btColliderObject.mass = t, 
            this._btColliderObject.updateMassProperties(), this._btColliderObject.updateSolveMassProperties());
        }
        _onScaleChange(t) {
            super._onScaleChange(t), this._updateMass(this._isKinematic ? 0 : this._mass);
        }
        _derivePhysicsTransformation(t) {
            this._innerDerivePhysicsTransformation(this.btColliderObject, t);
        }
        _onAdded() {
            var t = new CANNON.Body();
            t.material = new CANNON.Material(), t.layaID = this.id, t.collisionFilterGroup = this.collisionGroup, 
            t.collisionFilterMask = this._canCollideWith, this._btColliderObject = t, super._onAdded(), 
            this.mass = this._mass, this.linearDamping = this._linearDamping, this.angularDamping = this._angularDamping, 
            this.isKinematic = this._isKinematic, this.isKinematic ? this._btColliderObject.type = CANNON.Body.KINEMATIC : this._btColliderObject.type = CANNON.Body.DYNAMIC;
        }
        _onShapeChange(t) {
            super._onShapeChange(t), this._isKinematic ? this._updateMass(0) : this._updateMass(this._mass);
        }
        _parse(t) {
            null != t.friction && (this.friction = t.friction), null != t.restitution && (this.restitution = t.restitution), 
            null != t.isTrigger && (this.isTrigger = t.isTrigger), null != t.mass && (this.mass = t.mass), 
            null != t.isKinematic && (this.isKinematic = t.isKinematic), null != t.linearDamping && (this.linearDamping = t.linearDamping), 
            null != t.angularDamping && (this.angularDamping = t.angularDamping), super._parse(t), 
            this._parseShape(t.shapes);
        }
        _onDestroy() {
            super._onDestroy(), this._gravity = null, this._totalTorque = null, this._linearVelocity = null, 
            this._angularVelocity = null;
        }
        _addToSimulation() {
            this._simulation._addRigidBody(this);
        }
        _removeFromSimulation() {
            this._simulation._removeRigidBody(this);
        }
        _cloneTo(t) {
            super._cloneTo(t);
            var i = t;
            i.isKinematic = this._isKinematic, i.mass = this._mass, i.angularDamping = this._angularDamping, 
            i.linearDamping = this._linearDamping, i.linearVelocity = this._linearVelocity, 
            i.angularVelocity = this._angularVelocity;
        }
        applyForce(t, i = null) {
            if (null == this._btColliderObject) throw "Attempted to call a Physics function that is avaliable only when the Entity has been already added to the Scene.";
            var e = u._btTempVector30;
            e.set(t.x, t.y, t.z);
            var s = u._btTempVector31;
            i ? s.set(i.x, i.y, i.z) : s.set(0, 0, 0), this.btColliderObject.applyLocalForce(e, s);
        }
        applyTorque(t) {
            if (null == this._btColliderObject) throw "Attempted to call a Physics function that is avaliable only when the Entity has been already added to the Scene.";
            var i = u._btTempVector30;
            i.set(t.x, t.y, t.z);
            var e = this.btColliderObject.torque;
            e.set(e.x + i.x, e.y + i.y, e.z + i.z), this.btColliderObject.torque = e;
        }
        applyImpulse(t, i = null) {
            if (null == this._btColliderObject) throw "Attempted to call a Physics function that is avaliable only when the Entity has been already added to the Scene.";
            if (null == this._btColliderObject) throw "Attempted to call a Physics function that is avaliable only when the Entity has been already added to the Scene.";
            var e = u._btTempVector30;
            e.set(t.x, t.y, t.z);
            var s = u._btTempVector31;
            i ? s.set(i.x, i.y, i.z) : s.set(0, 0, 0), this.btColliderObject.applyImpulse(e, s);
        }
        wakeUp() {
            this._btColliderObject && this._btColliderObject.wakeUp();
        }
        clearForces() {
            var t = this._btColliderObject;
            if (null == t) throw "Attempted to call a Physics function that is avaliable only when the Entity has been already added to the Scene.";
            t.velocity.set(0, 0, 0), t.velocity = t.velocity, t.angularVelocity.set(0, 0, 0), 
            t.angularVelocity = t.angularVelocity;
        }
    }
    u.TYPE_STATIC = 0, u.TYPE_DYNAMIC = 1, u.TYPE_KINEMATIC = 2, u._BT_DISABLE_WORLD_GRAVITY = 1, 
    u._BT_ENABLE_GYROPSCOPIC_FORCE = 2;
    class C extends n {
        constructor() {
            super(), this._childColliderShapes = [], this._type = n.SHAPETYPES_COMPOUND;
        }
        static __init__() {}
        _clearChildShape(t) {
            t._attatched = !1, t._compoundParent = null, t._indexInCompound = -1;
        }
        _addReference() {
            this._referenceCount++;
        }
        _removeReference() {
            this._referenceCount--;
        }
        addChildShape(t, i = null) {
            if (t._attatched) throw "CompoundColliderShape: this shape has attatched to other entity.";
            t._attatched = !0, t._compoundParent = this, t._indexInCompound = this._childColliderShapes.length, 
            this._childColliderShapes.push(t), t.localOffset = i, this.physicColliderObject && (C._tempCannonQue.set(0, 0, 0, 1), 
            C._tempCannonVec.set(i.x * this._scale.x, i.y * this._scale.y, i.z * this._scale.z), 
            this.physicColliderObject._btColliderObject.addShape(t._btShape, C._tempCannonVec, CANNON.Vec3.ZERO));
        }
        removeChildShape(t) {
            if (t._compoundParent === this) {
                var i = t._indexInCompound;
                this._clearChildShape(t);
                var e = this._childColliderShapes[this._childColliderShapes.length - 1];
                e._indexInCompound = i, this._childColliderShapes[i] = e, this._childColliderShapes.pop(), 
                this.physicColliderObject && this.bindRigidBody(this.physicColliderObject);
            }
        }
        bindRigidBody(t) {
            this.physicColliderObject = t;
            var i, e = t._btColliderObject;
            e.shapes.length = 0, e.shapeOffsets.length = 0, e.shapeOrientations.length = 0;
            for (var s = 0, o = this._childColliderShapes.length; s != o; s++) {
                var l = this._childColliderShapes[s];
                e.shapes.push(l._btShape), i = l.localOffset, e.shapeOffsets.push(new CANNON.Vec3(i.x * this._scale.x, i.y * this._scale.y, i.z * this._scale.z)), 
                e.shapeOrientations.push(C._tempCannonQue);
            }
            e.updateMassProperties(), e.updateBoundingRadius(), e.aabbNeedsUpdate = !0;
        }
        _setScale(t) {
            this._scale.setValue(t.x, t.y, t.z);
            for (var i = this.physicColliderObject._btColliderObject, e = this.getChildShapeCount(), s = i.shapeOffsets, o = 0; o < e; o++) {
                var l = s[o], n = this._childColliderShapes[o];
                n._setScale(t);
                var r = n.localOffset;
                l.set(r.x * t.x, r.y * t.y, r.z * t.z);
            }
            i.updateMassProperties(), i.updateBoundingRadius(), i.aabbNeedsUpdate = !0;
        }
        getChildShapeCount() {
            return this._childColliderShapes.length;
        }
        cloneTo(t) {
            for (var i = t, e = 0, s = this._childColliderShapes.length; e < s; e++) i.addChildShape(this._childColliderShapes[e].clone());
        }
        clone() {
            var t = new C();
            return this.cloneTo(t), t;
        }
        destroy() {
            super.destroy();
            for (var t = 0, i = this._childColliderShapes.length; t < i; t++) {
                var e = this._childColliderShapes[t];
                0 === e._referenceCount && e.destroy();
            }
        }
    }
    C._tempCannonQue = new CANNON.Quaternion(0, 0, 0, 1), C._tempCannonVec = new CANNON.Vec3(0, 0, 0), 
    t.CannonBoxColliderShape = r, t.CannonColliderShape = n, t.CannonCollision = e, 
    t.CannonCollisionTool = l, t.CannonCompoundColliderShape = C, t.CannonContactPoint = s, 
    t.CannonHitResult = o, t.CannonPhysicsCollider = _, t.CannonPhysicsComponent = h, 
    t.CannonPhysicsSettings = class {
        constructor() {
            this.flags = 0, this.maxSubSteps = 3, this.fixedTimeStep = 1 / 60, this.contactEquationRelaxation = 10, 
            this.contactEquationStiffness = 1e6;
        }
    }, t.CannonPhysicsSimulation = p, t.CannonPhysicsTriggerComponent = c, t.CannonPhysicsUpdateList = d, 
    t.CannonRigidbody3D = u, t.CannonSphereColliderShape = a;
}(window.Laya = window.Laya || {}, Laya);