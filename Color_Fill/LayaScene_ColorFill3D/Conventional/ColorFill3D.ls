{
    "version": "LAYASCENE3D:01",
    "data": {
        "type": "Scene3D",
        "props": {
            "name": "ColorFill3D",
            "ambientColor": [
                0.212,
                0.227,
                0.259
            ],
            "lightmaps": [],
            "enableFog": false,
            "fogStart": 0,
            "fogRange": 300,
            "fogColor": [
                0.5,
                0.5,
                0.5
            ]
        },
        "child": [
            {
                "type": "Camera",
                "props": {
                    "name": "Main Camera",
                    "active": true,
                    "isStatic": false,
                    "layer": 0,
                    "position": [
                        0,
                        20,
                        -3
                    ],
                    "rotation": [
                        0,
                        0.7372774,
                        0.6755902,
                        0
                    ],
                    "scale": [
                        1,
                        1,
                        1
                    ],
                    "clearFlag": 1,
                    "orthographic": false,
                    "fieldOfView": 70,
                    "nearPlane": 0.3,
                    "farPlane": 1000,
                    "viewport": [
                        0,
                        0,
                        1,
                        1
                    ],
                    "clearColor": [
                        1,
                        1,
                        1,
                        0
                    ]
                },
                "components": [],
                "child": []
            },
            {
                "type": "DirectionLight",
                "props": {
                    "name": "Directional Light",
                    "active": true,
                    "isStatic": false,
                    "layer": 0,
                    "position": [
                        0,
                        14.35,
                        18.68
                    ],
                    "rotation": [
                        -0.5214581,
                        0.4024343,
                        0.5814179,
                        0.4775787
                    ],
                    "scale": [
                        1,
                        1,
                        1
                    ],
                    "intensity": 4,
                    "lightmapBakedType": 0,
                    "color": [
                        1,
                        1,
                        1
                    ]
                },
                "components": [],
                "child": []
            },
            {
                "type": "MeshSprite3D",
                "props": {
                    "name": "box001",
                    "active": true,
                    "isStatic": true,
                    "layer": 0,
                    "position": [
                        0,
                        0,
                        0
                    ],
                    "rotation": [
                        0,
                        0,
                        0,
                        -1
                    ],
                    "scale": [
                        1,
                        0.7,
                        1
                    ],
                    "meshPath": "Assets/model/box001-Box001.lm",
                    "enableRender": true,
                    "materials": [
                        {
                            "path": "Assets/model/Box001Mat.lmat"
                        }
                    ]
                },
                "components": [],
                "child": []
            },
            {
                "type": "MeshSprite3D",
                "props": {
                    "name": "box002",
                    "active": true,
                    "isStatic": false,
                    "layer": 0,
                    "position": [
                        1.367,
                        0,
                        0
                    ],
                    "rotation": [
                        0,
                        0,
                        0,
                        -1
                    ],
                    "scale": [
                        1,
                        2,
                        1
                    ],
                    "meshPath": "Assets/model/box0022-Box002.lm",
                    "enableRender": true,
                    "materials": [
                        {
                            "path": "Assets/model/Box002Mat.lmat"
                        }
                    ]
                },
                "components": [
                    {
                        "type": "PhysicsCollider",
                        "restitution": 0,
                        "friction": 0.5,
                        "rollingFriction": 0,
                        "shapes": [
                            {
                                "type": "BoxColliderShape",
                                "center": [
                                    0,
                                    0,
                                    0
                                ],
                                "size": [
                                    1,
                                    0.6,
                                    1
                                ]
                            }
                        ],
                        "isTrigger": false
                    }
                ],
                "child": [
                    {
                        "type": "MeshSprite3D",
                        "props": {
                            "name": "box002_1",
                            "active": false,
                            "isStatic": false,
                            "layer": 0,
                            "position": [
                                0,
                                0,
                                0
                            ],
                            "rotation": [
                                0,
                                0,
                                0,
                                -1
                            ],
                            "scale": [
                                1,
                                1,
                                1
                            ],
                            "meshPath": "Assets/model/box002_1-box002_1.lm",
                            "enableRender": true,
                            "materials": [
                                {
                                    "path": "Assets/mat/shopMat/pic0.lmat"
                                }
                            ]
                        },
                        "components": [],
                        "child": []
                    }
                ]
            },
            {
                "type": "MeshSprite3D",
                "props": {
                    "name": "box003",
                    "active": true,
                    "isStatic": true,
                    "layer": 0,
                    "position": [
                        0,
                        0,
                        0
                    ],
                    "rotation": [
                        0,
                        0,
                        0,
                        -1
                    ],
                    "scale": [
                        1.2,
                        1.3,
                        0.5
                    ],
                    "meshPath": "Assets/model/box001-Box001.lm",
                    "enableRender": true,
                    "materials": [
                        {
                            "path": "Assets/model/box003Mat.lmat"
                        }
                    ]
                },
                "components": [],
                "child": []
            },
            {
                "type": "MeshSprite3D",
                "props": {
                    "name": "box004",
                    "active": true,
                    "isStatic": false,
                    "layer": 0,
                    "position": [
                        0,
                        -0.5,
                        2
                    ],
                    "rotation": [
                        0,
                        0,
                        0,
                        -1
                    ],
                    "scale": [
                        1,
                        2,
                        1
                    ],
                    "meshPath": "Assets/model/box0022-Box002.lm",
                    "enableRender": true,
                    "materials": [
                        {
                            "path": "Assets/model/box004Mat.lmat"
                        }
                    ]
                },
                "components": [
                    {
                        "type": "PhysicsCollider",
                        "restitution": 0,
                        "friction": 0.5,
                        "rollingFriction": 0,
                        "shapes": [
                            {
                                "type": "BoxColliderShape",
                                "center": [
                                    0,
                                    0,
                                    0
                                ],
                                "size": [
                                    1,
                                    2,
                                    1
                                ]
                            }
                        ],
                        "isTrigger": false
                    }
                ],
                "child": [
                    {
                        "type": "MeshSprite3D",
                        "props": {
                            "name": "box002_1",
                            "active": false,
                            "isStatic": false,
                            "layer": 0,
                            "position": [
                                0,
                                0,
                                0
                            ],
                            "rotation": [
                                0,
                                0,
                                0,
                                -1
                            ],
                            "scale": [
                                1,
                                1,
                                1
                            ],
                            "meshPath": "Assets/model/box002_1-box002_1.lm",
                            "enableRender": true,
                            "materials": [
                                {
                                    "path": "Assets/mat/shopMat/pic0.lmat"
                                }
                            ]
                        },
                        "components": [],
                        "child": []
                    }
                ]
            },
            {
                "type": "MeshSprite3D",
                "props": {
                    "name": "player",
                    "active": true,
                    "isStatic": false,
                    "layer": 0,
                    "position": [
                        -1,
                        0,
                        0
                    ],
                    "rotation": [
                        0,
                        0,
                        0,
                        -1
                    ],
                    "scale": [
                        1,
                        1,
                        1
                    ],
                    "meshPath": "Assets/model/box001-Box001.lm",
                    "enableRender": true,
                    "materials": [
                        {
                            "path": "Assets/model/playermat.lmat"
                        }
                    ]
                },
                "components": [
                    {
                        "type": "Rigidbody3D",
                        "mass": 1,
                        "isKinematic": true,
                        "restitution": 0,
                        "friction": 0.5,
                        "rollingFriction": 0,
                        "linearDamping": 0,
                        "angularDamping": 0,
                        "overrideGravity": true,
                        "gravity": [
                            0,
                            0,
                            0
                        ],
                        "shapes": [
                            {
                                "type": "SphereColliderShape",
                                "center": [
                                    0,
                                    0.3,
                                    0
                                ],
                                "radius": 0.3
                            }
                        ],
                        "isTrigger": true
                    }
                ],
                "child": []
            },
            {
                "type": "ShuriKenParticle3D",
                "props": {
                    "name": "disappear",
                    "active": true,
                    "isStatic": false,
                    "layer": 0,
                    "position": [
                        -2,
                        0.6,
                        0
                    ],
                    "rotation": [
                        0.5,
                        0.5,
                        0.5,
                        -0.5
                    ],
                    "scale": [
                        0.5,
                        0.5,
                        0.5
                    ],
                    "isPerformanceMode": true,
                    "duration": 0.5,
                    "looping": false,
                    "prewarm": false,
                    "startDelayType": 0,
                    "startDelay": 0,
                    "startDelayMin": 0,
                    "startDelayMax": 0,
                    "startLifetimeType": 2,
                    "startLifetimeConstant": 0.4,
                    "startLifetimeConstantMin": 0.6,
                    "startLifetimeConstantMax": 0.4,
                    "startLifetimeGradient": {
                        "startLifetimes": []
                    },
                    "startLifetimeGradientMin": {
                        "startLifetimes": []
                    },
                    "startLifetimeGradientMax": {
                        "startLifetimes": []
                    },
                    "startSpeedType": 2,
                    "startSpeedConstant": 10,
                    "startSpeedConstantMin": 7,
                    "startSpeedConstantMax": 10,
                    "threeDStartSize": false,
                    "startSizeType": 2,
                    "startSizeConstant": 0.8,
                    "startSizeConstantMin": 0.6,
                    "startSizeConstantMax": 0.8,
                    "startSizeConstantSeparate": [
                        0.8,
                        1,
                        1
                    ],
                    "startSizeConstantMinSeparate": [
                        0.6,
                        1,
                        1
                    ],
                    "startSizeConstantMaxSeparate": [
                        0.8,
                        1,
                        1
                    ],
                    "threeDStartRotation": false,
                    "startRotationType": 2,
                    "startRotationConstant": 360,
                    "startRotationConstantMin": 0,
                    "startRotationConstantMax": 360,
                    "startRotationConstantSeparate": [
                        0,
                        0,
                        -360
                    ],
                    "startRotationConstantMinSeparate": [
                        0,
                        0,
                        0
                    ],
                    "startRotationConstantMaxSeparate": [
                        0,
                        0,
                        -360
                    ],
                    "randomizeRotationDirection": 0,
                    "startColorType": 0,
                    "startColorConstant": [
                        1,
                        1,
                        1,
                        1
                    ],
                    "startColorConstantMin": [
                        0,
                        0,
                        0,
                        0
                    ],
                    "startColorConstantMax": [
                        1,
                        1,
                        1,
                        1
                    ],
                    "gravity": [
                        0,
                        -9.81,
                        0
                    ],
                    "gravityModifier": 1,
                    "simulationSpace": 0,
                    "scaleMode": 1,
                    "playOnAwake": true,
                    "maxParticles": 1000,
                    "autoRandomSeed": true,
                    "randomSeed": 4283393000,
                    "emission": {
                        "enable": true,
                        "emissionRate": 0,
                        "emissionRateTip": "Time",
                        "bursts": [
                            {
                                "time": 0,
                                "min": 6,
                                "max": 10
                            }
                        ]
                    },
                    "shape": {
                        "enable": true,
                        "shapeType": 2,
                        "sphereRadius": 0.3,
                        "sphereEmitFromShell": false,
                        "sphereRandomDirection": 0,
                        "hemiSphereRadius": 0.3,
                        "hemiSphereEmitFromShell": false,
                        "hemiSphereRandomDirection": 0,
                        "coneAngle": 40,
                        "coneRadius": 0.3,
                        "coneLength": 5,
                        "coneEmitType": 0,
                        "coneRandomDirection": 0,
                        "boxX": 1,
                        "boxY": 1,
                        "boxZ": 1,
                        "boxRandomDirection": 0,
                        "circleRadius": 0.3,
                        "circleArc": 360,
                        "circleEmitFromEdge": false,
                        "circleRandomDirection": 0
                    },
                    "colorOverLifetime": {
                        "enable": true,
                        "color": {
                            "type": 1,
                            "constant": [
                                0,
                                0,
                                0,
                                0
                            ],
                            "gradient": {
                                "alphas": [
                                    {
                                        "key": 0,
                                        "value": 0
                                    },
                                    {
                                        "key": 0.05294881,
                                        "value": 1
                                    },
                                    {
                                        "key": 0.9353017,
                                        "value": 1
                                    },
                                    {
                                        "key": 1,
                                        "value": 0
                                    }
                                ],
                                "rgbs": [
                                    {
                                        "key": 0,
                                        "value": [
                                            1,
                                            1,
                                            1
                                        ]
                                    },
                                    {
                                        "key": 1,
                                        "value": [
                                            1,
                                            1,
                                            1
                                        ]
                                    }
                                ]
                            },
                            "constantMin": [
                                0,
                                0,
                                0,
                                0
                            ],
                            "constantMax": [
                                0,
                                0,
                                0,
                                0
                            ],
                            "gradientMax": {
                                "alphas": [
                                    {
                                        "key": 0,
                                        "value": 0
                                    },
                                    {
                                        "key": 0.05294881,
                                        "value": 1
                                    },
                                    {
                                        "key": 0.9353017,
                                        "value": 1
                                    },
                                    {
                                        "key": 1,
                                        "value": 0
                                    }
                                ],
                                "rgbs": [
                                    {
                                        "key": 0,
                                        "value": [
                                            1,
                                            1,
                                            1
                                        ]
                                    },
                                    {
                                        "key": 1,
                                        "value": [
                                            1,
                                            1,
                                            1
                                        ]
                                    }
                                ]
                            }
                        }
                    },
                    "sizeOverLifetime": {
                        "enable": true,
                        "size": {
                            "type": 0,
                            "separateAxes": false,
                            "gradient": {
                                "sizes": [
                                    {
                                        "key": 0,
                                        "value": 0
                                    },
                                    {
                                        "key": 0.1454751,
                                        "value": 0.9337253
                                    },
                                    {
                                        "key": 1,
                                        "value": 0.898304
                                    }
                                ]
                            },
                            "gradientX": {
                                "sizes": [
                                    {
                                        "key": 0,
                                        "value": 0
                                    },
                                    {
                                        "key": 0.1454751,
                                        "value": 0.9337253
                                    },
                                    {
                                        "key": 1,
                                        "value": 0.898304
                                    }
                                ]
                            },
                            "gradientY": {
                                "sizes": [
                                    {
                                        "key": 0,
                                        "value": 0
                                    },
                                    {
                                        "key": 1,
                                        "value": 1
                                    }
                                ]
                            },
                            "gradientZ": {
                                "sizes": [
                                    {
                                        "key": 0,
                                        "value": 0
                                    },
                                    {
                                        "key": 1,
                                        "value": 1
                                    }
                                ]
                            },
                            "constantMin": 0,
                            "constantMax": 0,
                            "constantMinSeparate": [
                                0,
                                0,
                                0
                            ],
                            "constantMaxSeparate": [
                                0,
                                0,
                                0
                            ],
                            "gradientMin": {
                                "sizes": []
                            },
                            "gradientMax": {
                                "sizes": [
                                    {
                                        "key": 0,
                                        "value": 0
                                    },
                                    {
                                        "key": 0.1454751,
                                        "value": 0.9337253
                                    },
                                    {
                                        "key": 1,
                                        "value": 0.898304
                                    }
                                ]
                            },
                            "gradientXMin": {
                                "sizes": []
                            },
                            "gradientXMax": {
                                "sizes": [
                                    {
                                        "key": 0,
                                        "value": 0
                                    },
                                    {
                                        "key": 0.1454751,
                                        "value": 0.9337253
                                    },
                                    {
                                        "key": 1,
                                        "value": 0.898304
                                    }
                                ]
                            },
                            "gradientYMin": {
                                "sizes": []
                            },
                            "gradientYMax": {
                                "sizes": [
                                    {
                                        "key": 0,
                                        "value": 0
                                    },
                                    {
                                        "key": 1,
                                        "value": 1
                                    }
                                ]
                            },
                            "gradientZMin": {
                                "sizes": []
                            },
                            "gradientZMax": {
                                "sizes": [
                                    {
                                        "key": 0,
                                        "value": 0
                                    },
                                    {
                                        "key": 1,
                                        "value": 1
                                    }
                                ]
                            }
                        }
                    },
                    "rotationOverLifetime": {
                        "enable": true,
                        "angularVelocity": {
                            "type": 2,
                            "separateAxes": false,
                            "constant": 120,
                            "constantMin": 0,
                            "constantMax": 120,
                            "constantSeparate": [
                                0,
                                0,
                                -120
                            ],
                            "constantMinSeparate": [
                                0,
                                0,
                                0
                            ],
                            "constantMaxSeparate": [
                                0,
                                0,
                                120
                            ],
                            "gradient": {
                                "angularVelocitys": []
                            },
                            "gradientX": {
                                "angularVelocitys": []
                            },
                            "gradientY": {
                                "angularVelocitys": []
                            },
                            "gradientZ": {
                                "angularVelocitys": []
                            },
                            "gradientMin": {
                                "angularVelocitys": []
                            },
                            "gradientMax": {
                                "angularVelocitys": []
                            },
                            "gradientXMin": {
                                "angularVelocitys": []
                            },
                            "gradientXMax": {
                                "angularVelocitys": []
                            },
                            "gradientYMin": {
                                "angularVelocitys": []
                            },
                            "gradientYMax": {
                                "angularVelocitys": []
                            },
                            "gradientZMin": {
                                "angularVelocitys": []
                            },
                            "gradientZMax": {
                                "angularVelocitys": []
                            }
                        }
                    },
                    "renderMode": 0,
                    "stretchedBillboardCameraSpeedScale": 0,
                    "stretchedBillboardSpeedScale": 0,
                    "stretchedBillboardLengthScale": 2,
                    "sortingFudge": 0,
                    "material": {
                        "type": "Laya.ShurikenParticleMaterial",
                        "path": "Assets/Newcube_mtl.lmat"
                    }
                },
                "components": [],
                "child": []
            },
            {
                "type": "MeshSprite3D",
                "props": {
                    "name": "enemy",
                    "active": true,
                    "isStatic": false,
                    "layer": 0,
                    "position": [
                        -2,
                        0.4,
                        -1
                    ],
                    "rotation": [
                        0,
                        0,
                        0,
                        -1
                    ],
                    "scale": [
                        1,
                        1.6,
                        1
                    ],
                    "meshPath": "Assets/model/box0022-Box002.lm",
                    "enableRender": true,
                    "materials": [
                        {
                            "path": "Assets/model/enemy.lmat"
                        }
                    ]
                },
                "components": [],
                "child": []
            },
            {
                "type": "Sprite3D",
                "props": {
                    "name": "diamond",
                    "active": true,
                    "isStatic": false,
                    "layer": 0,
                    "position": [
                        0,
                        0.2,
                        1
                    ],
                    "rotation": [
                        0,
                        0,
                        0,
                        -1
                    ],
                    "scale": [
                        0.8,
                        0.8,
                        0.8
                    ]
                },
                "components": [],
                "child": [
                    {
                        "type": "ShuriKenParticle3D",
                        "props": {
                            "name": "Particle System",
                            "active": true,
                            "isStatic": false,
                            "layer": 0,
                            "position": [
                                -0.07300001,
                                0.721,
                                0.521
                            ],
                            "rotation": [
                                0.7071068,
                                0,
                                0,
                                -0.7071068
                            ],
                            "scale": [
                                0.8,
                                0.8000005,
                                0.8000005
                            ],
                            "isPerformanceMode": true,
                            "duration": 0.4,
                            "looping": true,
                            "prewarm": false,
                            "startDelayType": 0,
                            "startDelay": 0,
                            "startDelayMin": 0,
                            "startDelayMax": 0,
                            "startLifetimeType": 0,
                            "startLifetimeConstant": 0.3,
                            "startLifetimeConstantMin": 0,
                            "startLifetimeConstantMax": 0.3,
                            "startLifetimeGradient": {
                                "startLifetimes": []
                            },
                            "startLifetimeGradientMin": {
                                "startLifetimes": []
                            },
                            "startLifetimeGradientMax": {
                                "startLifetimes": []
                            },
                            "startSpeedType": 0,
                            "startSpeedConstant": 0.7,
                            "startSpeedConstantMin": 0,
                            "startSpeedConstantMax": 0.7,
                            "threeDStartSize": false,
                            "startSizeType": 2,
                            "startSizeConstant": 0.3,
                            "startSizeConstantMin": 0.1,
                            "startSizeConstantMax": 0.3,
                            "startSizeConstantSeparate": [
                                0.3,
                                1,
                                1
                            ],
                            "startSizeConstantMinSeparate": [
                                0.1,
                                1,
                                1
                            ],
                            "startSizeConstantMaxSeparate": [
                                0.3,
                                1,
                                1
                            ],
                            "threeDStartRotation": false,
                            "startRotationType": 0,
                            "startRotationConstant": 20,
                            "startRotationConstantMin": 0,
                            "startRotationConstantMax": 20,
                            "startRotationConstantSeparate": [
                                20,
                                0,
                                -20
                            ],
                            "startRotationConstantMinSeparate": [
                                0,
                                0,
                                0
                            ],
                            "startRotationConstantMaxSeparate": [
                                20,
                                0,
                                -20
                            ],
                            "randomizeRotationDirection": 57.29578,
                            "startColorType": 0,
                            "startColorConstant": [
                                1,
                                1,
                                1,
                                1
                            ],
                            "startColorConstantMin": [
                                0,
                                0,
                                0,
                                0
                            ],
                            "startColorConstantMax": [
                                1,
                                1,
                                1,
                                1
                            ],
                            "gravity": [
                                0,
                                -9.81,
                                0
                            ],
                            "gravityModifier": 0,
                            "simulationSpace": 1,
                            "scaleMode": 1,
                            "playOnAwake": true,
                            "maxParticles": 100,
                            "autoRandomSeed": true,
                            "randomSeed": 747470700,
                            "emission": {
                                "enable": true,
                                "emissionRate": 10,
                                "emissionRateTip": "Time",
                                "bursts": [
                                    {
                                        "time": 0,
                                        "min": 3,
                                        "max": 8
                                    }
                                ]
                            },
                            "shape": {
                                "enable": true,
                                "shapeType": 2,
                                "sphereRadius": 0.7,
                                "sphereEmitFromShell": false,
                                "sphereRandomDirection": 0,
                                "hemiSphereRadius": 0.7,
                                "hemiSphereEmitFromShell": false,
                                "hemiSphereRandomDirection": 0,
                                "coneAngle": 25,
                                "coneRadius": 0.7,
                                "coneLength": 5,
                                "coneEmitType": 0,
                                "coneRandomDirection": 0,
                                "boxX": 1,
                                "boxY": 1,
                                "boxZ": 1,
                                "boxRandomDirection": 0,
                                "circleRadius": 0.7,
                                "circleArc": 360,
                                "circleEmitFromEdge": false,
                                "circleRandomDirection": 0
                            },
                            "renderMode": 0,
                            "stretchedBillboardCameraSpeedScale": 0,
                            "stretchedBillboardSpeedScale": 0,
                            "stretchedBillboardLengthScale": 2,
                            "sortingFudge": 0,
                            "material": {
                                "type": "Laya.ShurikenParticleMaterial",
                                "path": "Assets/demo/Materials/star.lmat"
                            }
                        },
                        "components": [],
                        "child": []
                    },
                    {
                        "type": "Sprite3D",
                        "props": {
                            "name": "diamonds",
                            "active": true,
                            "isStatic": false,
                            "layer": 0,
                            "position": [
                                0,
                                0,
                                0
                            ],
                            "rotation": [
                                0,
                                0,
                                0,
                                -1
                            ],
                            "scale": [
                                1,
                                1,
                                1
                            ]
                        },
                        "components": [],
                        "child": [
                            {
                                "type": "MeshSprite3D",
                                "props": {
                                    "name": "diamonds",
                                    "active": true,
                                    "isStatic": false,
                                    "layer": 0,
                                    "position": [
                                        0,
                                        0,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        1,
                                        1,
                                        1
                                    ],
                                    "meshPath": "Assets/Diamond__ZBr-Diamond__ZBr_0.lm",
                                    "enableRender": true,
                                    "materials": [
                                        {
                                            "path": "Assets/Materials/Diamond__ZBr_0Mat.lmat"
                                        }
                                    ]
                                },
                                "components": [],
                                "child": []
                            }
                        ]
                    }
                ]
            },
            {
                "type": "Sprite3D",
                "props": {
                    "name": "3",
                    "active": true,
                    "isStatic": false,
                    "layer": 0,
                    "position": [
                        0,
                        0,
                        0
                    ],
                    "rotation": [
                        0,
                        0,
                        0,
                        -1
                    ],
                    "scale": [
                        1,
                        1,
                        1
                    ]
                },
                "components": [],
                "child": []
            },
            {
                "type": "Sprite3D",
                "props": {
                    "name": "4",
                    "active": true,
                    "isStatic": false,
                    "layer": 0,
                    "position": [
                        0,
                        0,
                        0
                    ],
                    "rotation": [
                        0,
                        0,
                        0,
                        -1
                    ],
                    "scale": [
                        1,
                        1,
                        1
                    ]
                },
                "components": [],
                "child": []
            },
            {
                "type": "Sprite3D",
                "props": {
                    "name": "5",
                    "active": true,
                    "isStatic": false,
                    "layer": 0,
                    "position": [
                        0,
                        0,
                        0
                    ],
                    "rotation": [
                        0,
                        0,
                        0,
                        -1
                    ],
                    "scale": [
                        1,
                        1,
                        1
                    ]
                },
                "components": [],
                "child": []
            },
            {
                "type": "Sprite3D",
                "props": {
                    "name": "6",
                    "active": true,
                    "isStatic": false,
                    "layer": 0,
                    "position": [
                        0,
                        0,
                        0
                    ],
                    "rotation": [
                        0,
                        0,
                        0,
                        -1
                    ],
                    "scale": [
                        1,
                        1,
                        1
                    ]
                },
                "components": [],
                "child": []
            },
            {
                "type": "Sprite3D",
                "props": {
                    "name": "7",
                    "active": true,
                    "isStatic": false,
                    "layer": 0,
                    "position": [
                        0,
                        0,
                        0
                    ],
                    "rotation": [
                        0,
                        0,
                        0,
                        -1
                    ],
                    "scale": [
                        1,
                        1,
                        1
                    ]
                },
                "components": [],
                "child": []
            },
            {
                "type": "Sprite3D",
                "props": {
                    "name": "8",
                    "active": true,
                    "isStatic": false,
                    "layer": 0,
                    "position": [
                        0,
                        0,
                        0
                    ],
                    "rotation": [
                        0,
                        0,
                        0,
                        -1
                    ],
                    "scale": [
                        1,
                        1,
                        1
                    ]
                },
                "components": [],
                "child": []
            },
            {
                "type": "Sprite3D",
                "props": {
                    "name": "9",
                    "active": true,
                    "isStatic": false,
                    "layer": 0,
                    "position": [
                        0,
                        0,
                        0
                    ],
                    "rotation": [
                        0,
                        0,
                        0,
                        -1
                    ],
                    "scale": [
                        1,
                        1,
                        1
                    ]
                },
                "components": [],
                "child": []
            },
            {
                "type": "Sprite3D",
                "props": {
                    "name": "10",
                    "active": true,
                    "isStatic": false,
                    "layer": 0,
                    "position": [
                        0,
                        0,
                        0
                    ],
                    "rotation": [
                        0,
                        0,
                        0,
                        -1
                    ],
                    "scale": [
                        1,
                        1,
                        1
                    ]
                },
                "components": [],
                "child": []
            },
            {
                "type": "Sprite3D",
                "props": {
                    "name": "11",
                    "active": true,
                    "isStatic": false,
                    "layer": 0,
                    "position": [
                        0,
                        0,
                        0
                    ],
                    "rotation": [
                        0,
                        0,
                        0,
                        -1
                    ],
                    "scale": [
                        1,
                        1,
                        1
                    ]
                },
                "components": [],
                "child": []
            },
            {
                "type": "Sprite3D",
                "props": {
                    "name": "12",
                    "active": true,
                    "isStatic": false,
                    "layer": 0,
                    "position": [
                        0,
                        0,
                        0
                    ],
                    "rotation": [
                        0,
                        0,
                        0,
                        -1
                    ],
                    "scale": [
                        1,
                        1,
                        1
                    ]
                },
                "components": [],
                "child": []
            },
            {
                "type": "Sprite3D",
                "props": {
                    "name": "13",
                    "active": true,
                    "isStatic": false,
                    "layer": 0,
                    "position": [
                        0,
                        0,
                        0
                    ],
                    "rotation": [
                        0,
                        0,
                        0,
                        -1
                    ],
                    "scale": [
                        1,
                        1,
                        1
                    ]
                },
                "components": [],
                "child": []
            },
            {
                "type": "Sprite3D",
                "props": {
                    "name": "14",
                    "active": true,
                    "isStatic": false,
                    "layer": 0,
                    "position": [
                        0,
                        0,
                        0
                    ],
                    "rotation": [
                        0,
                        0,
                        0,
                        -1
                    ],
                    "scale": [
                        1,
                        1,
                        1
                    ]
                },
                "components": [],
                "child": []
            },
            {
                "type": "Sprite3D",
                "props": {
                    "name": "15",
                    "active": true,
                    "isStatic": false,
                    "layer": 0,
                    "position": [
                        0,
                        0,
                        0
                    ],
                    "rotation": [
                        0,
                        0,
                        0,
                        -1
                    ],
                    "scale": [
                        1,
                        1,
                        1
                    ]
                },
                "components": [],
                "child": []
            },
            {
                "type": "MeshSprite3D",
                "props": {
                    "name": "light",
                    "active": false,
                    "isStatic": false,
                    "layer": 0,
                    "position": [
                        30,
                        1.5,
                        -30
                    ],
                    "rotation": [
                        0,
                        -0.258819,
                        0,
                        -0.9659259
                    ],
                    "scale": [
                        1,
                        1,
                        50
                    ],
                    "meshPath": "Assets/model/box002_1-box002_1.lm",
                    "enableRender": true,
                    "materials": [
                        {
                            "path": "Assets/model/light.lmat"
                        }
                    ]
                },
                "components": [],
                "child": []
            },
            {
                "type": "ShuriKenParticle3D",
                "props": {
                    "name": "lihua_P",
                    "active": true,
                    "isStatic": false,
                    "layer": 0,
                    "position": [
                        0,
                        -5,
                        0
                    ],
                    "rotation": [
                        0.7071068,
                        0,
                        0,
                        -0.7071068
                    ],
                    "scale": [
                        1,
                        1,
                        1
                    ],
                    "isPerformanceMode": true,
                    "duration": 1,
                    "looping": false,
                    "prewarm": false,
                    "startDelayType": 0,
                    "startDelay": 0,
                    "startDelayMin": 0,
                    "startDelayMax": 0,
                    "startLifetimeType": 2,
                    "startLifetimeConstant": 6,
                    "startLifetimeConstantMin": 5,
                    "startLifetimeConstantMax": 6,
                    "startLifetimeGradient": {
                        "startLifetimes": []
                    },
                    "startLifetimeGradientMin": {
                        "startLifetimes": []
                    },
                    "startLifetimeGradientMax": {
                        "startLifetimes": []
                    },
                    "startSpeedType": 2,
                    "startSpeedConstant": 30,
                    "startSpeedConstantMin": 50,
                    "startSpeedConstantMax": 30,
                    "threeDStartSize": false,
                    "startSizeType": 2,
                    "startSizeConstant": 0.4,
                    "startSizeConstantMin": 0.3,
                    "startSizeConstantMax": 0.4,
                    "startSizeConstantSeparate": [
                        0.4,
                        1,
                        1
                    ],
                    "startSizeConstantMinSeparate": [
                        0.3,
                        1,
                        1
                    ],
                    "startSizeConstantMaxSeparate": [
                        0.4,
                        1,
                        1
                    ],
                    "threeDStartRotation": false,
                    "startRotationType": 2,
                    "startRotationConstant": 89.99999,
                    "startRotationConstantMin": -89.99999,
                    "startRotationConstantMax": 89.99999,
                    "startRotationConstantSeparate": [
                        0,
                        0,
                        -89.99999
                    ],
                    "startRotationConstantMinSeparate": [
                        0,
                        0,
                        89.99999
                    ],
                    "startRotationConstantMaxSeparate": [
                        0,
                        0,
                        -89.99999
                    ],
                    "randomizeRotationDirection": 0,
                    "startColorType": 2,
                    "startColorConstant": [
                        1,
                        0,
                        0,
                        1
                    ],
                    "startColorConstantMin": [
                        1,
                        0.7241379,
                        0,
                        1
                    ],
                    "startColorConstantMax": [
                        1,
                        0,
                        0,
                        1
                    ],
                    "gravity": [
                        0,
                        -9.81,
                        0
                    ],
                    "gravityModifier": 5,
                    "simulationSpace": 1,
                    "scaleMode": 1,
                    "playOnAwake": false,
                    "maxParticles": 1000,
                    "autoRandomSeed": true,
                    "randomSeed": 2553864000,
                    "emission": {
                        "enable": true,
                        "emissionRate": 0,
                        "emissionRateTip": "Time",
                        "bursts": [
                            {
                                "time": 0,
                                "min": 250,
                                "max": 250
                            }
                        ]
                    },
                    "shape": {
                        "enable": true,
                        "shapeType": 2,
                        "sphereRadius": 1,
                        "sphereEmitFromShell": false,
                        "sphereRandomDirection": 0,
                        "hemiSphereRadius": 1,
                        "hemiSphereEmitFromShell": false,
                        "hemiSphereRandomDirection": 0,
                        "coneAngle": 10,
                        "coneRadius": 1,
                        "coneLength": 5,
                        "coneEmitType": 0,
                        "coneRandomDirection": 0,
                        "boxX": 1,
                        "boxY": 1,
                        "boxZ": 1,
                        "boxRandomDirection": 0,
                        "circleRadius": 1,
                        "circleArc": 360,
                        "circleEmitFromEdge": false,
                        "circleRandomDirection": 0
                    },
                    "colorOverLifetime": {
                        "enable": true,
                        "color": {
                            "type": 1,
                            "constant": [
                                0,
                                0,
                                0,
                                0
                            ],
                            "gradient": {
                                "alphas": [
                                    {
                                        "key": 0,
                                        "value": 0
                                    },
                                    {
                                        "key": 0.06176852,
                                        "value": 1
                                    },
                                    {
                                        "key": 0.720592,
                                        "value": 1
                                    },
                                    {
                                        "key": 1,
                                        "value": 0
                                    }
                                ],
                                "rgbs": [
                                    {
                                        "key": 0,
                                        "value": [
                                            1,
                                            1,
                                            1
                                        ]
                                    },
                                    {
                                        "key": 1,
                                        "value": [
                                            1,
                                            1,
                                            1
                                        ]
                                    }
                                ]
                            },
                            "constantMin": [
                                0,
                                0,
                                0,
                                0
                            ],
                            "constantMax": [
                                0,
                                0,
                                0,
                                0
                            ],
                            "gradientMax": {
                                "alphas": [
                                    {
                                        "key": 0,
                                        "value": 0
                                    },
                                    {
                                        "key": 0.06176852,
                                        "value": 1
                                    },
                                    {
                                        "key": 0.720592,
                                        "value": 1
                                    },
                                    {
                                        "key": 1,
                                        "value": 0
                                    }
                                ],
                                "rgbs": [
                                    {
                                        "key": 0,
                                        "value": [
                                            1,
                                            1,
                                            1
                                        ]
                                    },
                                    {
                                        "key": 1,
                                        "value": [
                                            1,
                                            1,
                                            1
                                        ]
                                    }
                                ]
                            }
                        }
                    },
                    "rotationOverLifetime": {
                        "enable": true,
                        "angularVelocity": {
                            "type": 2,
                            "separateAxes": false,
                            "constant": 180,
                            "constantMin": -180,
                            "constantMax": 180,
                            "constantSeparate": [
                                0,
                                0,
                                -180
                            ],
                            "constantMinSeparate": [
                                0,
                                0,
                                -180
                            ],
                            "constantMaxSeparate": [
                                0,
                                0,
                                180
                            ],
                            "gradient": {
                                "angularVelocitys": []
                            },
                            "gradientX": {
                                "angularVelocitys": []
                            },
                            "gradientY": {
                                "angularVelocitys": []
                            },
                            "gradientZ": {
                                "angularVelocitys": []
                            },
                            "gradientMin": {
                                "angularVelocitys": []
                            },
                            "gradientMax": {
                                "angularVelocitys": []
                            },
                            "gradientXMin": {
                                "angularVelocitys": []
                            },
                            "gradientXMax": {
                                "angularVelocitys": []
                            },
                            "gradientYMin": {
                                "angularVelocitys": []
                            },
                            "gradientYMax": {
                                "angularVelocitys": []
                            },
                            "gradientZMin": {
                                "angularVelocitys": []
                            },
                            "gradientZMax": {
                                "angularVelocitys": []
                            }
                        }
                    },
                    "renderMode": 0,
                    "stretchedBillboardCameraSpeedScale": 0,
                    "stretchedBillboardSpeedScale": 0,
                    "stretchedBillboardLengthScale": 2,
                    "sortingFudge": 0,
                    "material": {
                        "type": "Laya.ShurikenParticleMaterial",
                        "path": "Assets/vfx/lihua_mtl.lmat"
                    }
                },
                "components": [],
                "child": []
            }
        ]
    }
}