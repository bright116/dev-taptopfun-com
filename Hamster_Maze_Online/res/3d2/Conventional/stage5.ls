{
    "version": "LAYASCENE3D:02",
    "data": {
        "type": "Scene3D",
        "props": {
            "name": "stage5",
            "ambientColor": [
                1,
                1,
                1
            ],
            "ambientMode": 0,
            "ambientSphericalHarmonicsIntensity": 1,
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
                "instanceID": 0,
                "props": {
                    "name": "Main Camera",
                    "active": true,
                    "isStatic": false,
                    "layer": 0,
                    "position": [
                        -4.5,
                        1,
                        -18
                    ],
                    "rotation": [
                        0,
                        0.9961947,
                        0,
                        -0.08715578
                    ],
                    "scale": [
                        1,
                        1,
                        1
                    ],
                    "clearFlag": 0,
                    "orthographic": false,
                    "orthographicVerticalSize": 10,
                    "fieldOfView": 60,
                    "enableHDR": false,
                    "nearPlane": 0.3,
                    "farPlane": 50,
                    "viewport": [
                        0,
                        0,
                        1,
                        1
                    ],
                    "clearColor": [
                        0.1921569,
                        0.3019608,
                        0.4745098,
                        0
                    ]
                },
                "components": [],
                "child": []
            },
            {
                "type": "DirectionLight",
                "instanceID": 1,
                "props": {
                    "name": "Directional Light",
                    "active": true,
                    "isStatic": false,
                    "layer": 0,
                    "position": [
                        0,
                        3,
                        0
                    ],
                    "rotation": [
                        -0.003747123,
                        0.8543852,
                        0.4114328,
                        -0.3173876
                    ],
                    "scale": [
                        1,
                        1,
                        1
                    ],
                    "intensity": 1,
                    "lightmapBakedType": 0,
                    "color": [
                        1,
                        0.9568627,
                        0.8392157
                    ]
                },
                "components": [],
                "child": []
            },
            {
                "type": "Sprite3D",
                "instanceID": 2,
                "props": {
                    "name": "CUSTOM",
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
                        "type": "Sprite3D",
                        "instanceID": 3,
                        "props": {
                            "name": "gravity-0.35",
                            "active": true,
                            "isStatic": false,
                            "layer": 0,
                            "position": [
                                -6.61,
                                1.03,
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
                                            2,
                                            2,
                                            2
                                        ]
                                    }
                                ],
                                "isTrigger": true
                            }
                        ],
                        "child": []
                    },
                    {
                        "type": "Sprite3D",
                        "instanceID": 4,
                        "props": {
                            "name": "gravity-1",
                            "active": true,
                            "isStatic": false,
                            "layer": 0,
                            "position": [
                                -18.34,
                                12.8,
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
                                            2,
                                            2,
                                            2
                                        ]
                                    }
                                ],
                                "isTrigger": true
                            }
                        ],
                        "child": []
                    },
                    {
                        "type": "MeshSprite3D",
                        "instanceID": 5,
                        "props": {
                            "name": "tiling-1-1",
                            "active": true,
                            "isStatic": false,
                            "layer": 0,
                            "position": [
                                -50,
                                50,
                                1.5
                            ],
                            "rotation": [
                                0.7071068,
                                0,
                                0,
                                -0.7071068
                            ],
                            "scale": [
                                50,
                                50.00003,
                                50.00003
                            ],
                            "meshPath": "../../3d/Conventional/Library/unity default resources-Plane.lm",
                            "enableRender": true,
                            "receiveShadows": true,
                            "castShadow": true,
                            "materials": [
                                {
                                    "path": "../../3d/Conventional/Assets/tietu_new/Materials/Arial  bo 2.lmat"
                                }
                            ]
                        },
                        "components": [],
                        "child": []
                    },
                    {
                        "type": "Sprite3D",
                        "instanceID": 6,
                        "props": {
                            "name": "customCamera",
                            "active": true,
                            "isStatic": false,
                            "layer": 0,
                            "position": [
                                -174.3,
                                -14.48,
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
                                            0.08624649,
                                            0,
                                            0
                                        ],
                                        "size": [
                                            3.630531,
                                            1,
                                            1
                                        ]
                                    }
                                ],
                                "isTrigger": true
                            }
                        ],
                        "child": [
                            {
                                "type": "Sprite3D",
                                "instanceID": 7,
                                "props": {
                                    "name": "CUSTOM_DATA",
                                    "active": true,
                                    "isStatic": false,
                                    "layer": 0,
                                    "position": [
                                        0,
                                        6,
                                        -15
                                    ],
                                    "rotation": [
                                        0.1736483,
                                        0,
                                        0,
                                        -0.9848078
                                    ],
                                    "scale": [
                                        1,
                                        1,
                                        1
                                    ]
                                },
                                "components": [],
                                "child": []
                            }
                        ]
                    },
                    {
                        "type": "Sprite3D",
                        "instanceID": 8,
                        "props": {
                            "name": "timestep-30",
                            "active": true,
                            "isStatic": false,
                            "layer": 0,
                            "position": [
                                -3.26,
                                0.68,
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
                                            1,
                                            1
                                        ]
                                    }
                                ],
                                "isTrigger": true
                            }
                        ],
                        "child": []
                    },
                    {
                        "type": "Sprite3D",
                        "instanceID": 9,
                        "props": {
                            "name": "timestep-60",
                            "active": true,
                            "isStatic": false,
                            "layer": 0,
                            "position": [
                                -28.62,
                                10.69,
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
                                            1,
                                            1
                                        ]
                                    }
                                ],
                                "isTrigger": true
                            }
                        ],
                        "child": []
                    },
                    {
                        "type": "Sprite3D",
                        "instanceID": 10,
                        "props": {
                            "name": "timestep-30",
                            "active": true,
                            "isStatic": false,
                            "layer": 0,
                            "position": [
                                -43.55,
                                10.7,
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
                                            1,
                                            1
                                        ]
                                    }
                                ],
                                "isTrigger": true
                            }
                        ],
                        "child": []
                    },
                    {
                        "type": "Sprite3D",
                        "instanceID": 11,
                        "props": {
                            "name": "hide-Step1",
                            "active": true,
                            "isStatic": false,
                            "layer": 0,
                            "position": [
                                -108.9,
                                2.7,
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
                                            1,
                                            1
                                        ]
                                    }
                                ],
                                "isTrigger": true
                            }
                        ],
                        "child": []
                    },
                    {
                        "type": "Sprite3D",
                        "instanceID": 12,
                        "props": {
                            "name": "show-Step2",
                            "active": true,
                            "isStatic": false,
                            "layer": 0,
                            "position": [
                                -19.12,
                                12.33,
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
                                            1,
                                            1
                                        ]
                                    }
                                ],
                                "isTrigger": true
                            }
                        ],
                        "child": []
                    },
                    {
                        "type": "Sprite3D",
                        "instanceID": 13,
                        "props": {
                            "name": "hide-Step2",
                            "active": true,
                            "isStatic": false,
                            "layer": 0,
                            "position": [
                                -174.2,
                                -15.17,
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
                                            1,
                                            1
                                        ]
                                    }
                                ],
                                "isTrigger": true
                            }
                        ],
                        "child": []
                    },
                    {
                        "type": "Sprite3D",
                        "instanceID": 14,
                        "props": {
                            "name": "show-Step3",
                            "active": true,
                            "isStatic": false,
                            "layer": 0,
                            "position": [
                                -3.29,
                                0.44,
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
                                            1,
                                            1
                                        ]
                                    }
                                ],
                                "isTrigger": true
                            }
                        ],
                        "child": []
                    },
                    {
                        "type": "Sprite3D",
                        "instanceID": 15,
                        "props": {
                            "name": "hide-Step3",
                            "active": true,
                            "isStatic": false,
                            "layer": 0,
                            "position": [
                                -42.11,
                                10.51,
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
                                            1,
                                            1
                                        ]
                                    }
                                ],
                                "isTrigger": true
                            }
                        ],
                        "child": []
                    },
                    {
                        "type": "Sprite3D",
                        "instanceID": 16,
                        "props": {
                            "name": "show-Step4",
                            "active": true,
                            "isStatic": false,
                            "layer": 0,
                            "position": [
                                -14.71,
                                12.52,
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
                                            1,
                                            1
                                        ]
                                    }
                                ],
                                "isTrigger": true
                            }
                        ],
                        "child": []
                    },
                    {
                        "type": "Sprite3D",
                        "instanceID": 17,
                        "props": {
                            "name": "show-Step5",
                            "active": true,
                            "isStatic": false,
                            "layer": 0,
                            "position": [
                                -51.11,
                                9.78,
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
                                            1,
                                            1
                                        ]
                                    }
                                ],
                                "isTrigger": true
                            }
                        ],
                        "child": []
                    },
                    {
                        "type": "Sprite3D",
                        "instanceID": 18,
                        "props": {
                            "name": "timestep-60",
                            "active": true,
                            "isStatic": false,
                            "layer": 0,
                            "position": [
                                -61.33,
                                8.99,
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
                                            1,
                                            1
                                        ]
                                    }
                                ],
                                "isTrigger": true
                            }
                        ],
                        "child": []
                    },
                    {
                        "type": "Sprite3D",
                        "instanceID": 19,
                        "props": {
                            "name": "timestep-30",
                            "active": true,
                            "isStatic": false,
                            "layer": 0,
                            "position": [
                                -76.78,
                                8.54,
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
                                            1,
                                            1
                                        ]
                                    }
                                ],
                                "isTrigger": true
                            }
                        ],
                        "child": []
                    },
                    {
                        "type": "Sprite3D",
                        "instanceID": 20,
                        "props": {
                            "name": "hide-Step4",
                            "active": true,
                            "isStatic": false,
                            "layer": 0,
                            "position": [
                                -49.47,
                                9.85,
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
                                            1,
                                            1
                                        ]
                                    }
                                ],
                                "isTrigger": true
                            }
                        ],
                        "child": []
                    },
                    {
                        "type": "Sprite3D",
                        "instanceID": 21,
                        "props": {
                            "name": "hide-Step5",
                            "active": true,
                            "isStatic": false,
                            "layer": 0,
                            "position": [
                                -82.72,
                                7.75,
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
                                            1,
                                            1
                                        ]
                                    }
                                ],
                                "isTrigger": true
                            }
                        ],
                        "child": []
                    },
                    {
                        "type": "Sprite3D",
                        "instanceID": 22,
                        "props": {
                            "name": "show-Step6",
                            "active": true,
                            "isStatic": false,
                            "layer": 0,
                            "position": [
                                -84.14,
                                7.89,
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
                                            1,
                                            1
                                        ]
                                    }
                                ],
                                "isTrigger": true
                            }
                        ],
                        "child": []
                    },
                    {
                        "type": "Sprite3D",
                        "instanceID": 23,
                        "props": {
                            "name": "hide-Step6",
                            "active": true,
                            "isStatic": false,
                            "layer": 0,
                            "position": [
                                -116.3,
                                2,
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
                                            1,
                                            1
                                        ]
                                    }
                                ],
                                "isTrigger": true
                            }
                        ],
                        "child": []
                    },
                    {
                        "type": "Sprite3D",
                        "instanceID": 24,
                        "props": {
                            "name": "show-Step7",
                            "active": true,
                            "isStatic": false,
                            "layer": 0,
                            "position": [
                                -119.08,
                                0.9,
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
                                            1,
                                            1
                                        ]
                                    }
                                ],
                                "isTrigger": true
                            }
                        ],
                        "child": []
                    },
                    {
                        "type": "Sprite3D",
                        "instanceID": 25,
                        "props": {
                            "name": "hide-Step7",
                            "active": true,
                            "isStatic": false,
                            "layer": 0,
                            "position": [
                                -152.15,
                                -5.1,
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
                                            1,
                                            1
                                        ]
                                    }
                                ],
                                "isTrigger": true
                            }
                        ],
                        "child": []
                    },
                    {
                        "type": "Sprite3D",
                        "instanceID": 26,
                        "props": {
                            "name": "show-Step8",
                            "active": true,
                            "isStatic": false,
                            "layer": 0,
                            "position": [
                                -154.1,
                                -6.1,
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
                                            1,
                                            1
                                        ]
                                    }
                                ],
                                "isTrigger": true
                            }
                        ],
                        "child": []
                    }
                ]
            },
            {
                "type": "Sprite3D",
                "instanceID": 27,
                "props": {
                    "name": "STATIC",
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
                        1,
                        1
                    ]
                },
                "components": [],
                "child": [
                    {
                        "type": "MeshSprite3D",
                        "instanceID": 28,
                        "props": {
                            "name": "mupai_5",
                            "active": true,
                            "isStatic": true,
                            "layer": 0,
                            "position": [
                                -3.26,
                                4.49,
                                1.42
                            ],
                            "rotation": [
                                0,
                                0.7071068,
                                -0.7071068,
                                0
                            ],
                            "scale": [
                                0.15,
                                0.15,
                                0.15
                            ],
                            "meshPath": "../../3d/Conventional/Library/unity default resources-Plane.lm",
                            "enableRender": true,
                            "receiveShadows": true,
                            "castShadow": false,
                            "materials": [
                                {
                                    "path": "../../3d/Conventional/Assets/tietu_new/Materials/shuzi_5.lmat"
                                }
                            ]
                        },
                        "components": [],
                        "child": []
                    },
                    {
                        "type": "Sprite3D",
                        "instanceID": 29,
                        "props": {
                            "name": "diban",
                            "active": true,
                            "isStatic": true,
                            "layer": 0,
                            "position": [
                                -1.43,
                                -3.74,
                                -0.9
                            ],
                            "rotation": [
                                0,
                                0,
                                0,
                                -1
                            ],
                            "scale": [
                                10.1,
                                2,
                                5
                            ]
                        },
                        "components": [],
                        "child": [
                            {
                                "type": "MeshSprite3D",
                                "instanceID": 30,
                                "props": {
                                    "name": "Box807_0",
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
                                        1,
                                        1
                                    ],
                                    "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_0.lm",
                                    "enableRender": true,
                                    "receiveShadows": true,
                                    "castShadow": true,
                                    "materials": [
                                        {
                                            "path": "../../3d/Conventional/Assets/tietu_new/Materials/diban1.lmat"
                                        }
                                    ]
                                },
                                "components": [],
                                "child": []
                            },
                            {
                                "type": "MeshSprite3D",
                                "instanceID": 31,
                                "props": {
                                    "name": "Box807_1",
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
                                        1,
                                        1
                                    ],
                                    "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_1.lm",
                                    "enableRender": true,
                                    "receiveShadows": true,
                                    "castShadow": true,
                                    "materials": [
                                        {
                                            "path": "../../3d/Conventional/Assets/tietu_new/Materials/diban2.lmat"
                                        }
                                    ]
                                },
                                "components": [],
                                "child": []
                            }
                        ]
                    },
                    {
                        "type": "Sprite3D",
                        "instanceID": 32,
                        "props": {
                            "name": "start_line",
                            "active": true,
                            "isStatic": true,
                            "layer": 0,
                            "position": [
                                -3.28,
                                0.48,
                                -0.02
                            ],
                            "rotation": [
                                0,
                                0,
                                0,
                                -1
                            ],
                            "scale": [
                                1.85,
                                1.85,
                                1.85
                            ]
                        },
                        "components": [],
                        "child": [
                            {
                                "type": "MeshSprite3D",
                                "instanceID": 33,
                                "props": {
                                    "name": "Plane001_0",
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
                                        1,
                                        1
                                    ],
                                    "meshPath": "../../3d/Conventional/Assets/Mesh/Plane001-Plane001_0.lm",
                                    "enableRender": true,
                                    "receiveShadows": true,
                                    "castShadow": true,
                                    "materials": [
                                        {
                                            "path": "../../3d/Conventional/Assets/Materials/T_Wall_05.lmat"
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
                        "instanceID": 34,
                        "props": {
                            "name": "floor",
                            "active": true,
                            "isStatic": true,
                            "layer": 0,
                            "position": [
                                -0.567,
                                -1,
                                0
                            ],
                            "rotation": [
                                0,
                                0,
                                0,
                                -1
                            ],
                            "scale": [
                                21.92173,
                                2,
                                3
                            ],
                            "meshPath": "../../3d/Conventional/Library/unity default resources-Cube.lm",
                            "enableRender": true,
                            "receiveShadows": true,
                            "castShadow": true,
                            "materials": [
                                {
                                    "path": "../../3d/Conventional/Assets/tietu_new/Materials/wood.lmat"
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
                                            1,
                                            1
                                        ]
                                    }
                                ],
                                "isTrigger": false
                            }
                        ],
                        "child": []
                    },
                    {
                        "type": "MeshSprite3D",
                        "instanceID": 35,
                        "props": {
                            "name": "floor (3)",
                            "active": true,
                            "isStatic": true,
                            "layer": 0,
                            "position": [
                                4.519,
                                1.71,
                                0
                            ],
                            "rotation": [
                                0,
                                0,
                                0,
                                -1
                            ],
                            "scale": [
                                4.216,
                                5.416,
                                2.95
                            ],
                            "meshPath": "../../3d/Conventional/Library/unity default resources-Cube.lm",
                            "enableRender": true,
                            "receiveShadows": true,
                            "castShadow": true,
                            "materials": [
                                {
                                    "path": "../../3d/Conventional/Assets/tietu_new/Materials/wood.lmat"
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
                                            1,
                                            1
                                        ]
                                    }
                                ],
                                "isTrigger": false
                            }
                        ],
                        "child": []
                    }
                ]
            },
            {
                "type": "Sprite3D",
                "instanceID": 36,
                "props": {
                    "name": "Step1",
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
                    ]
                },
                "components": [],
                "child": [
                    {
                        "type": "Sprite3D",
                        "instanceID": 37,
                        "props": {
                            "name": "CUSTOM",
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
                                "type": "Sprite3D",
                                "instanceID": 38,
                                "props": {
                                    "name": "coin2-fake",
                                    "active": true,
                                    "isStatic": false,
                                    "layer": 0,
                                    "position": [
                                        -44.23,
                                        10.93,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        2,
                                        2,
                                        2
                                    ]
                                },
                                "components": [],
                                "child": []
                            },
                            {
                                "type": "Sprite3D",
                                "instanceID": 39,
                                "props": {
                                    "name": "coin2-fake",
                                    "active": true,
                                    "isStatic": false,
                                    "layer": 0,
                                    "position": [
                                        -52.32,
                                        10.1,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        2,
                                        2,
                                        2
                                    ]
                                },
                                "components": [],
                                "child": []
                            },
                            {
                                "type": "Sprite3D",
                                "instanceID": 40,
                                "props": {
                                    "name": "coin2-fake",
                                    "active": true,
                                    "isStatic": false,
                                    "layer": 0,
                                    "position": [
                                        -60.27,
                                        9.27,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        2,
                                        2,
                                        2
                                    ]
                                },
                                "components": [],
                                "child": []
                            },
                            {
                                "type": "Sprite3D",
                                "instanceID": 41,
                                "props": {
                                    "name": "coin2-fake",
                                    "active": true,
                                    "isStatic": false,
                                    "layer": 0,
                                    "position": [
                                        -77.77,
                                        8.9,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        2,
                                        2,
                                        2
                                    ]
                                },
                                "components": [],
                                "child": []
                            },
                            {
                                "type": "Sprite3D",
                                "instanceID": 42,
                                "props": {
                                    "name": "coin2-fake",
                                    "active": true,
                                    "isStatic": false,
                                    "layer": 0,
                                    "position": [
                                        -85.67,
                                        8.07,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        2,
                                        2,
                                        2
                                    ]
                                },
                                "components": [],
                                "child": []
                            },
                            {
                                "type": "Sprite3D",
                                "instanceID": 43,
                                "props": {
                                    "name": "coin2-fake",
                                    "active": true,
                                    "isStatic": false,
                                    "layer": 0,
                                    "position": [
                                        -93.65,
                                        7.19,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        2,
                                        2,
                                        2
                                    ]
                                },
                                "components": [],
                                "child": []
                            }
                        ]
                    },
                    {
                        "type": "Sprite3D",
                        "instanceID": 44,
                        "props": {
                            "name": "STATIC",
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
                                1,
                                1
                            ]
                        },
                        "components": [],
                        "child": [
                            {
                                "type": "Sprite3D",
                                "instanceID": 45,
                                "props": {
                                    "name": "xie_po",
                                    "active": true,
                                    "isStatic": true,
                                    "layer": 0,
                                    "position": [
                                        -9.59,
                                        -0.02,
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
                                        2
                                    ]
                                },
                                "components": [],
                                "child": [
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 46,
                                        "props": {
                                            "name": "Box824_0",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box824-Box824_0.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_2.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 47,
                                        "props": {
                                            "name": "Box824_1",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box824-Box824_1.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_1.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "Sprite3D",
                                        "instanceID": 48,
                                        "props": {
                                            "name": "GameObject",
                                            "active": true,
                                            "isStatic": true,
                                            "layer": 0,
                                            "position": [
                                                0.312,
                                                0.514,
                                                0
                                            ],
                                            "rotation": [
                                                0,
                                                0,
                                                0.2850492,
                                                -0.9585129
                                            ],
                                            "scale": [
                                                1,
                                                1,
                                                1
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
                                                            0.01836204,
                                                            -0.05194758,
                                                            0
                                                        ],
                                                        "size": [
                                                            3.533978,
                                                            1.103889,
                                                            1
                                                        ]
                                                    }
                                                ],
                                                "isTrigger": false
                                            }
                                        ],
                                        "child": []
                                    },
                                    {
                                        "type": "Sprite3D",
                                        "instanceID": 49,
                                        "props": {
                                            "name": "GameObject (1)",
                                            "active": true,
                                            "isStatic": true,
                                            "layer": 0,
                                            "position": [
                                                -1.619,
                                                -0.292,
                                                0
                                            ],
                                            "rotation": [
                                                0,
                                                0,
                                                -0.4840662,
                                                -0.8750314
                                            ],
                                            "scale": [
                                                1,
                                                1,
                                                1
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
                                                            0.6414085,
                                                            0.02083788,
                                                            0
                                                        ],
                                                        "size": [
                                                            1.237521,
                                                            1.041675,
                                                            1
                                                        ]
                                                    }
                                                ],
                                                "isTrigger": false
                                            }
                                        ],
                                        "child": []
                                    }
                                ]
                            },
                            {
                                "type": "Sprite3D",
                                "instanceID": 50,
                                "props": {
                                    "name": "fangkuai (21)",
                                    "active": true,
                                    "isStatic": true,
                                    "layer": 0,
                                    "position": [
                                        -50.3,
                                        8.700001,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        2,
                                        0.8,
                                        1.95
                                    ]
                                },
                                "components": [],
                                "child": [
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 51,
                                        "props": {
                                            "name": "Box807_0",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_0.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_2.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 52,
                                        "props": {
                                            "name": "Box807_1",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_1.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_1.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "Sprite3D",
                                        "instanceID": 53,
                                        "props": {
                                            "name": "GameObject",
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
                                                1,
                                                1
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
                                                        "type": "CapsuleColliderShape",
                                                        "center": [
                                                            0,
                                                            0.5,
                                                            0
                                                        ],
                                                        "radius": 0.1965526,
                                                        "height": 2,
                                                        "orientation": 0
                                                    }
                                                ],
                                                "isTrigger": false
                                            }
                                        ],
                                        "child": []
                                    }
                                ]
                            },
                            {
                                "type": "Sprite3D",
                                "instanceID": 54,
                                "props": {
                                    "name": "fangkuai (22)",
                                    "active": true,
                                    "isStatic": true,
                                    "layer": 0,
                                    "position": [
                                        -42.31,
                                        9.53,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        2,
                                        0.8,
                                        1.95
                                    ]
                                },
                                "components": [],
                                "child": [
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 55,
                                        "props": {
                                            "name": "Box807_0",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_0.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_2.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 56,
                                        "props": {
                                            "name": "Box807_1",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_1.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_1.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "Sprite3D",
                                        "instanceID": 57,
                                        "props": {
                                            "name": "GameObject",
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
                                                1,
                                                1
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
                                                        "type": "CapsuleColliderShape",
                                                        "center": [
                                                            0,
                                                            0.5,
                                                            0
                                                        ],
                                                        "radius": 0.1965526,
                                                        "height": 2,
                                                        "orientation": 0
                                                    }
                                                ],
                                                "isTrigger": false
                                            }
                                        ],
                                        "child": []
                                    }
                                ]
                            },
                            {
                                "type": "Sprite3D",
                                "instanceID": 58,
                                "props": {
                                    "name": "fangkuai (23)",
                                    "active": true,
                                    "isStatic": true,
                                    "layer": 0,
                                    "position": [
                                        -62.29,
                                        7.82,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        2,
                                        0.8,
                                        1.95
                                    ]
                                },
                                "components": [],
                                "child": [
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 59,
                                        "props": {
                                            "name": "Box807_0",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_0.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_2.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 60,
                                        "props": {
                                            "name": "Box807_1",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_1.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_1.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "Sprite3D",
                                        "instanceID": 61,
                                        "props": {
                                            "name": "GameObject",
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
                                                1,
                                                1
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
                                                        "type": "CapsuleColliderShape",
                                                        "center": [
                                                            0,
                                                            0.5,
                                                            0
                                                        ],
                                                        "radius": 0.1965526,
                                                        "height": 2,
                                                        "orientation": 0
                                                    }
                                                ],
                                                "isTrigger": false
                                            }
                                        ],
                                        "child": []
                                    }
                                ]
                            },
                            {
                                "type": "Sprite3D",
                                "instanceID": 62,
                                "props": {
                                    "name": "fangkuai (24)",
                                    "active": true,
                                    "isStatic": true,
                                    "layer": 0,
                                    "position": [
                                        -46.3,
                                        9.53,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        2,
                                        0.8,
                                        1.95
                                    ]
                                },
                                "components": [],
                                "child": [
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 63,
                                        "props": {
                                            "name": "Box807_0",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_0.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_2.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 64,
                                        "props": {
                                            "name": "Box807_1",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_1.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_1.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "Sprite3D",
                                        "instanceID": 65,
                                        "props": {
                                            "name": "GameObject",
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
                                                1,
                                                1
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
                                                        "type": "CapsuleColliderShape",
                                                        "center": [
                                                            0,
                                                            0.5,
                                                            0
                                                        ],
                                                        "radius": 0.1965526,
                                                        "height": 2,
                                                        "orientation": 0
                                                    }
                                                ],
                                                "isTrigger": false
                                            }
                                        ],
                                        "child": []
                                    }
                                ]
                            },
                            {
                                "type": "Sprite3D",
                                "instanceID": 66,
                                "props": {
                                    "name": "fangkuai (25)",
                                    "active": true,
                                    "isStatic": true,
                                    "layer": 0,
                                    "position": [
                                        -54.28,
                                        8.700001,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        2,
                                        0.8,
                                        1.95
                                    ]
                                },
                                "components": [],
                                "child": [
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 67,
                                        "props": {
                                            "name": "Box807_0",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_0.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_2.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 68,
                                        "props": {
                                            "name": "Box807_1",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_1.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_1.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "Sprite3D",
                                        "instanceID": 69,
                                        "props": {
                                            "name": "GameObject",
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
                                                1,
                                                1
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
                                                        "type": "CapsuleColliderShape",
                                                        "center": [
                                                            0,
                                                            0.5,
                                                            0
                                                        ],
                                                        "radius": 0.1965526,
                                                        "height": 2,
                                                        "orientation": 0
                                                    }
                                                ],
                                                "isTrigger": false
                                            }
                                        ],
                                        "child": []
                                    }
                                ]
                            },
                            {
                                "type": "Sprite3D",
                                "instanceID": 70,
                                "props": {
                                    "name": "fangkuai (26)",
                                    "active": true,
                                    "isStatic": true,
                                    "layer": 0,
                                    "position": [
                                        -58.31001,
                                        7.82,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        2,
                                        0.8,
                                        1.95
                                    ]
                                },
                                "components": [],
                                "child": [
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 71,
                                        "props": {
                                            "name": "Box807_0",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_0.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_2.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 72,
                                        "props": {
                                            "name": "Box807_1",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_1.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_1.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "Sprite3D",
                                        "instanceID": 73,
                                        "props": {
                                            "name": "GameObject",
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
                                                1,
                                                1
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
                                                        "type": "CapsuleColliderShape",
                                                        "center": [
                                                            0,
                                                            0.5,
                                                            0
                                                        ],
                                                        "radius": 0.1965526,
                                                        "height": 2,
                                                        "orientation": 0
                                                    }
                                                ],
                                                "isTrigger": false
                                            }
                                        ],
                                        "child": []
                                    }
                                ]
                            },
                            {
                                "type": "Sprite3D",
                                "instanceID": 74,
                                "props": {
                                    "name": "fangkuai (25)",
                                    "active": true,
                                    "isStatic": true,
                                    "layer": 0,
                                    "position": [
                                        -87.63999,
                                        6.700001,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        2,
                                        0.8,
                                        1.95
                                    ]
                                },
                                "components": [],
                                "child": [
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 75,
                                        "props": {
                                            "name": "Box807_0",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_0.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_2.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 76,
                                        "props": {
                                            "name": "Box807_1",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_1.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_1.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "Sprite3D",
                                        "instanceID": 77,
                                        "props": {
                                            "name": "GameObject",
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
                                                1,
                                                1
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
                                                        "type": "CapsuleColliderShape",
                                                        "center": [
                                                            0,
                                                            0.5,
                                                            0
                                                        ],
                                                        "radius": 0.1965526,
                                                        "height": 2,
                                                        "orientation": 0
                                                    }
                                                ],
                                                "isTrigger": false
                                            }
                                        ],
                                        "child": []
                                    }
                                ]
                            },
                            {
                                "type": "Sprite3D",
                                "instanceID": 78,
                                "props": {
                                    "name": "fangkuai (29)",
                                    "active": true,
                                    "isStatic": true,
                                    "layer": 0,
                                    "position": [
                                        -91.60999,
                                        5.87,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        2,
                                        0.8,
                                        1.95
                                    ]
                                },
                                "components": [],
                                "child": [
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 79,
                                        "props": {
                                            "name": "Box807_0",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_0.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_2.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 80,
                                        "props": {
                                            "name": "Box807_1",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_1.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_1.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "Sprite3D",
                                        "instanceID": 81,
                                        "props": {
                                            "name": "GameObject",
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
                                                1,
                                                1
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
                                                        "type": "CapsuleColliderShape",
                                                        "center": [
                                                            0,
                                                            0.5,
                                                            0
                                                        ],
                                                        "radius": 0.1965526,
                                                        "height": 2,
                                                        "orientation": 0
                                                    }
                                                ],
                                                "isTrigger": false
                                            }
                                        ],
                                        "child": []
                                    }
                                ]
                            },
                            {
                                "type": "Sprite3D",
                                "instanceID": 82,
                                "props": {
                                    "name": "fangkuai (26)",
                                    "active": true,
                                    "isStatic": true,
                                    "layer": 0,
                                    "position": [
                                        -75.7,
                                        7.51,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        2,
                                        0.8,
                                        1.95
                                    ]
                                },
                                "components": [],
                                "child": [
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 83,
                                        "props": {
                                            "name": "Box807_0",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_0.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_2.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 84,
                                        "props": {
                                            "name": "Box807_1",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_1.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_1.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "Sprite3D",
                                        "instanceID": 85,
                                        "props": {
                                            "name": "GameObject",
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
                                                1,
                                                1
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
                                                        "type": "CapsuleColliderShape",
                                                        "center": [
                                                            0,
                                                            0.5,
                                                            0
                                                        ],
                                                        "radius": 0.1965526,
                                                        "height": 2,
                                                        "orientation": 0
                                                    }
                                                ],
                                                "isTrigger": false
                                            }
                                        ],
                                        "child": []
                                    }
                                ]
                            },
                            {
                                "type": "Sprite3D",
                                "instanceID": 86,
                                "props": {
                                    "name": "fangkuai (27)",
                                    "active": true,
                                    "isStatic": true,
                                    "layer": 0,
                                    "position": [
                                        -83.64,
                                        6.700001,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        2,
                                        0.8,
                                        1.95
                                    ]
                                },
                                "components": [],
                                "child": [
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 87,
                                        "props": {
                                            "name": "Box807_0",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_0.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_2.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 88,
                                        "props": {
                                            "name": "Box807_1",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_1.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_1.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "Sprite3D",
                                        "instanceID": 89,
                                        "props": {
                                            "name": "GameObject",
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
                                                1,
                                                1
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
                                                        "type": "CapsuleColliderShape",
                                                        "center": [
                                                            0,
                                                            0.5,
                                                            0
                                                        ],
                                                        "radius": 0.1965526,
                                                        "height": 2,
                                                        "orientation": 0
                                                    }
                                                ],
                                                "isTrigger": false
                                            }
                                        ],
                                        "child": []
                                    }
                                ]
                            },
                            {
                                "type": "Sprite3D",
                                "instanceID": 90,
                                "props": {
                                    "name": "fangkuai (28)",
                                    "active": true,
                                    "isStatic": true,
                                    "layer": 0,
                                    "position": [
                                        -79.68,
                                        7.51,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        2,
                                        0.8,
                                        1.95
                                    ]
                                },
                                "components": [],
                                "child": [
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 91,
                                        "props": {
                                            "name": "Box807_0",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_0.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_2.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 92,
                                        "props": {
                                            "name": "Box807_1",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_1.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_1.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "Sprite3D",
                                        "instanceID": 93,
                                        "props": {
                                            "name": "GameObject",
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
                                                1,
                                                1
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
                                                        "type": "CapsuleColliderShape",
                                                        "center": [
                                                            0,
                                                            0.5,
                                                            0
                                                        ],
                                                        "radius": 0.1965526,
                                                        "height": 2,
                                                        "orientation": 0
                                                    }
                                                ],
                                                "isTrigger": false
                                            }
                                        ],
                                        "child": []
                                    }
                                ]
                            },
                            {
                                "type": "Sprite3D",
                                "instanceID": 94,
                                "props": {
                                    "name": "fangkuai (30)",
                                    "active": true,
                                    "isStatic": true,
                                    "layer": 0,
                                    "position": [
                                        -95.61,
                                        5.87,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        2,
                                        0.8,
                                        1.95
                                    ]
                                },
                                "components": [],
                                "child": [
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 95,
                                        "props": {
                                            "name": "Box807_0",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_0.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_2.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 96,
                                        "props": {
                                            "name": "Box807_1",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_1.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_1.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "Sprite3D",
                                        "instanceID": 97,
                                        "props": {
                                            "name": "GameObject",
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
                                                1,
                                                1
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
                                                        "type": "CapsuleColliderShape",
                                                        "center": [
                                                            0,
                                                            0.5,
                                                            0
                                                        ],
                                                        "radius": 0.1965526,
                                                        "height": 2,
                                                        "orientation": 0
                                                    }
                                                ],
                                                "isTrigger": false
                                            }
                                        ],
                                        "child": []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "Sprite3D",
                "instanceID": 98,
                "props": {
                    "name": "Step2",
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
                    ]
                },
                "components": [],
                "child": [
                    {
                        "type": "Sprite3D",
                        "instanceID": 99,
                        "props": {
                            "name": "CUSTOM",
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
                                "type": "Sprite3D",
                                "instanceID": 100,
                                "props": {
                                    "name": "coin2-fake",
                                    "active": true,
                                    "isStatic": false,
                                    "layer": 0,
                                    "position": [
                                        -105.44,
                                        2.87,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        2,
                                        2,
                                        2
                                    ]
                                },
                                "components": [],
                                "child": []
                            },
                            {
                                "type": "Sprite3D",
                                "instanceID": 101,
                                "props": {
                                    "name": "coin2-fake",
                                    "active": true,
                                    "isStatic": false,
                                    "layer": 0,
                                    "position": [
                                        -113.41,
                                        2.01,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        2,
                                        2,
                                        2
                                    ]
                                },
                                "components": [],
                                "child": []
                            },
                            {
                                "type": "Sprite3D",
                                "instanceID": 102,
                                "props": {
                                    "name": "coin2-fake",
                                    "active": true,
                                    "isStatic": false,
                                    "layer": 0,
                                    "position": [
                                        -129.43,
                                        0.2500002,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        2,
                                        2,
                                        2
                                    ]
                                },
                                "components": [],
                                "child": []
                            },
                            {
                                "type": "Sprite3D",
                                "instanceID": 103,
                                "props": {
                                    "name": "coin2-fake",
                                    "active": true,
                                    "isStatic": false,
                                    "layer": 0,
                                    "position": [
                                        -141.36,
                                        -4.22,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        2,
                                        2,
                                        2
                                    ]
                                },
                                "components": [],
                                "child": []
                            },
                            {
                                "type": "Sprite3D",
                                "instanceID": 104,
                                "props": {
                                    "name": "coin2-fake",
                                    "active": true,
                                    "isStatic": false,
                                    "layer": 0,
                                    "position": [
                                        -149.33,
                                        -5.08,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        2,
                                        2,
                                        2
                                    ]
                                },
                                "components": [],
                                "child": []
                            },
                            {
                                "type": "Sprite3D",
                                "instanceID": 105,
                                "props": {
                                    "name": "coin2-fake",
                                    "active": true,
                                    "isStatic": false,
                                    "layer": 0,
                                    "position": [
                                        -165.35,
                                        -6.8,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        2,
                                        2,
                                        2
                                    ]
                                },
                                "components": [],
                                "child": []
                            },
                            {
                                "type": "Sprite3D",
                                "instanceID": 106,
                                "props": {
                                    "name": "coin2-fake",
                                    "active": true,
                                    "isStatic": false,
                                    "layer": 0,
                                    "position": [
                                        -121.42,
                                        1.04,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        2,
                                        2,
                                        2
                                    ]
                                },
                                "components": [],
                                "child": []
                            },
                            {
                                "type": "Sprite3D",
                                "instanceID": 107,
                                "props": {
                                    "name": "coin2-fake",
                                    "active": true,
                                    "isStatic": false,
                                    "layer": 0,
                                    "position": [
                                        -157.37,
                                        -5.92,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        2,
                                        2,
                                        2
                                    ]
                                },
                                "components": [],
                                "child": []
                            }
                        ]
                    },
                    {
                        "type": "Sprite3D",
                        "instanceID": 108,
                        "props": {
                            "name": "STATIC",
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
                                1,
                                1
                            ]
                        },
                        "components": [],
                        "child": [
                            {
                                "type": "Sprite3D",
                                "instanceID": 109,
                                "props": {
                                    "name": "fangkuai (31)",
                                    "active": true,
                                    "isStatic": true,
                                    "layer": 0,
                                    "position": [
                                        -127.39,
                                        -1.069999,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        2,
                                        0.8,
                                        1.95
                                    ]
                                },
                                "components": [],
                                "child": [
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 110,
                                        "props": {
                                            "name": "Box807_0",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_0.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_2.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 111,
                                        "props": {
                                            "name": "Box807_1",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_1.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_1.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "Sprite3D",
                                        "instanceID": 112,
                                        "props": {
                                            "name": "GameObject",
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
                                                1,
                                                1
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
                                                        "type": "CapsuleColliderShape",
                                                        "center": [
                                                            0,
                                                            0.5,
                                                            0
                                                        ],
                                                        "radius": 0.1965526,
                                                        "height": 2,
                                                        "orientation": 0
                                                    }
                                                ],
                                                "isTrigger": false
                                            }
                                        ],
                                        "child": []
                                    }
                                ]
                            },
                            {
                                "type": "Sprite3D",
                                "instanceID": 113,
                                "props": {
                                    "name": "fangkuai (32)",
                                    "active": true,
                                    "isStatic": true,
                                    "layer": 0,
                                    "position": [
                                        -103.44,
                                        1.450001,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        2,
                                        0.8,
                                        1.95
                                    ]
                                },
                                "components": [],
                                "child": [
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 114,
                                        "props": {
                                            "name": "Box807_0",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_0.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_2.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 115,
                                        "props": {
                                            "name": "Box807_1",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_1.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_1.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "Sprite3D",
                                        "instanceID": 116,
                                        "props": {
                                            "name": "GameObject",
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
                                                1,
                                                1
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
                                                        "type": "CapsuleColliderShape",
                                                        "center": [
                                                            0,
                                                            0.5,
                                                            0
                                                        ],
                                                        "radius": 0.1965526,
                                                        "height": 2,
                                                        "orientation": 0
                                                    }
                                                ],
                                                "isTrigger": false
                                            }
                                        ],
                                        "child": []
                                    }
                                ]
                            },
                            {
                                "type": "Sprite3D",
                                "instanceID": 117,
                                "props": {
                                    "name": "fangkuai (33)",
                                    "active": true,
                                    "isStatic": true,
                                    "layer": 0,
                                    "position": [
                                        -111.38,
                                        0.6400015,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        2,
                                        0.8,
                                        1.95
                                    ]
                                },
                                "components": [],
                                "child": [
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 118,
                                        "props": {
                                            "name": "Box807_0",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_0.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_2.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 119,
                                        "props": {
                                            "name": "Box807_1",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_1.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_1.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "Sprite3D",
                                        "instanceID": 120,
                                        "props": {
                                            "name": "GameObject",
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
                                                1,
                                                1
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
                                                        "type": "CapsuleColliderShape",
                                                        "center": [
                                                            0,
                                                            0.5,
                                                            0
                                                        ],
                                                        "radius": 0.1965526,
                                                        "height": 2,
                                                        "orientation": 0
                                                    }
                                                ],
                                                "isTrigger": false
                                            }
                                        ],
                                        "child": []
                                    }
                                ]
                            },
                            {
                                "type": "Sprite3D",
                                "instanceID": 121,
                                "props": {
                                    "name": "fangkuai (34)",
                                    "active": true,
                                    "isStatic": true,
                                    "layer": 0,
                                    "position": [
                                        -131.39,
                                        -1.069999,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        2,
                                        0.8,
                                        1.95
                                    ]
                                },
                                "components": [],
                                "child": [
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 122,
                                        "props": {
                                            "name": "Box807_0",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_0.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_2.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 123,
                                        "props": {
                                            "name": "Box807_1",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_1.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_1.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "Sprite3D",
                                        "instanceID": 124,
                                        "props": {
                                            "name": "GameObject",
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
                                                1,
                                                1
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
                                                        "type": "CapsuleColliderShape",
                                                        "center": [
                                                            0,
                                                            0.5,
                                                            0
                                                        ],
                                                        "radius": 0.1965526,
                                                        "height": 2,
                                                        "orientation": 0
                                                    }
                                                ],
                                                "isTrigger": false
                                            }
                                        ],
                                        "child": []
                                    }
                                ]
                            },
                            {
                                "type": "Sprite3D",
                                "instanceID": 125,
                                "props": {
                                    "name": "fangkuai (35)",
                                    "active": true,
                                    "isStatic": true,
                                    "layer": 0,
                                    "position": [
                                        -115.38,
                                        0.6400015,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        2,
                                        0.8,
                                        1.95
                                    ]
                                },
                                "components": [],
                                "child": [
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 126,
                                        "props": {
                                            "name": "Box807_0",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_0.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_2.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 127,
                                        "props": {
                                            "name": "Box807_1",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_1.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_1.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "Sprite3D",
                                        "instanceID": 128,
                                        "props": {
                                            "name": "GameObject",
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
                                                1,
                                                1
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
                                                        "type": "CapsuleColliderShape",
                                                        "center": [
                                                            0,
                                                            0.5,
                                                            0
                                                        ],
                                                        "radius": 0.1965526,
                                                        "height": 2,
                                                        "orientation": 0
                                                    }
                                                ],
                                                "isTrigger": false
                                            }
                                        ],
                                        "child": []
                                    }
                                ]
                            },
                            {
                                "type": "Sprite3D",
                                "instanceID": 129,
                                "props": {
                                    "name": "fangkuai (36)",
                                    "active": true,
                                    "isStatic": true,
                                    "layer": 0,
                                    "position": [
                                        -107.42,
                                        1.450001,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        2,
                                        0.8,
                                        1.95
                                    ]
                                },
                                "components": [],
                                "child": [
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 130,
                                        "props": {
                                            "name": "Box807_0",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_0.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_2.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 131,
                                        "props": {
                                            "name": "Box807_1",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_1.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_1.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "Sprite3D",
                                        "instanceID": 132,
                                        "props": {
                                            "name": "GameObject",
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
                                                1,
                                                1
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
                                                        "type": "CapsuleColliderShape",
                                                        "center": [
                                                            0,
                                                            0.5,
                                                            0
                                                        ],
                                                        "radius": 0.1965526,
                                                        "height": 2,
                                                        "orientation": 0
                                                    }
                                                ],
                                                "isTrigger": false
                                            }
                                        ],
                                        "child": []
                                    }
                                ]
                            },
                            {
                                "type": "Sprite3D",
                                "instanceID": 133,
                                "props": {
                                    "name": "fangkuai (37)",
                                    "active": true,
                                    "isStatic": true,
                                    "layer": 0,
                                    "position": [
                                        -163.31,
                                        -8.12,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        2,
                                        0.8,
                                        1.95
                                    ]
                                },
                                "components": [],
                                "child": [
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 134,
                                        "props": {
                                            "name": "Box807_0",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_0.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_2.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 135,
                                        "props": {
                                            "name": "Box807_1",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_1.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_1.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "Sprite3D",
                                        "instanceID": 136,
                                        "props": {
                                            "name": "GameObject",
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
                                                1,
                                                1
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
                                                        "type": "CapsuleColliderShape",
                                                        "center": [
                                                            0,
                                                            0.5,
                                                            0
                                                        ],
                                                        "radius": 0.1965526,
                                                        "height": 2,
                                                        "orientation": 0
                                                    }
                                                ],
                                                "isTrigger": false
                                            }
                                        ],
                                        "child": []
                                    }
                                ]
                            },
                            {
                                "type": "Sprite3D",
                                "instanceID": 137,
                                "props": {
                                    "name": "fangkuai (38)",
                                    "active": true,
                                    "isStatic": true,
                                    "layer": 0,
                                    "position": [
                                        -139.36,
                                        -5.639999,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        2,
                                        0.8,
                                        1.95
                                    ]
                                },
                                "components": [],
                                "child": [
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 138,
                                        "props": {
                                            "name": "Box807_0",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_0.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_2.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 139,
                                        "props": {
                                            "name": "Box807_1",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_1.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_1.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "Sprite3D",
                                        "instanceID": 140,
                                        "props": {
                                            "name": "GameObject",
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
                                                1,
                                                1
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
                                                        "type": "CapsuleColliderShape",
                                                        "center": [
                                                            0,
                                                            0.5,
                                                            0
                                                        ],
                                                        "radius": 0.1965526,
                                                        "height": 2,
                                                        "orientation": 0
                                                    }
                                                ],
                                                "isTrigger": false
                                            }
                                        ],
                                        "child": []
                                    }
                                ]
                            },
                            {
                                "type": "Sprite3D",
                                "instanceID": 141,
                                "props": {
                                    "name": "fangkuai (39)",
                                    "active": true,
                                    "isStatic": true,
                                    "layer": 0,
                                    "position": [
                                        -147.3,
                                        -6.449999,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        2,
                                        0.8,
                                        1.95
                                    ]
                                },
                                "components": [],
                                "child": [
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 142,
                                        "props": {
                                            "name": "Box807_0",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_0.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_2.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 143,
                                        "props": {
                                            "name": "Box807_1",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_1.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_1.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "Sprite3D",
                                        "instanceID": 144,
                                        "props": {
                                            "name": "GameObject",
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
                                                1,
                                                1
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
                                                        "type": "CapsuleColliderShape",
                                                        "center": [
                                                            0,
                                                            0.5,
                                                            0
                                                        ],
                                                        "radius": 0.1965526,
                                                        "height": 2,
                                                        "orientation": 0
                                                    }
                                                ],
                                                "isTrigger": false
                                            }
                                        ],
                                        "child": []
                                    }
                                ]
                            },
                            {
                                "type": "Sprite3D",
                                "instanceID": 145,
                                "props": {
                                    "name": "fangkuai (40)",
                                    "active": true,
                                    "isStatic": true,
                                    "layer": 0,
                                    "position": [
                                        -167.31,
                                        -8.12,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        2,
                                        0.8,
                                        1.95
                                    ]
                                },
                                "components": [],
                                "child": [
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 146,
                                        "props": {
                                            "name": "Box807_0",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_0.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_2.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 147,
                                        "props": {
                                            "name": "Box807_1",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_1.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_1.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "Sprite3D",
                                        "instanceID": 148,
                                        "props": {
                                            "name": "GameObject",
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
                                                1,
                                                1
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
                                                        "type": "CapsuleColliderShape",
                                                        "center": [
                                                            0,
                                                            0.5,
                                                            0
                                                        ],
                                                        "radius": 0.1965526,
                                                        "height": 2,
                                                        "orientation": 0
                                                    }
                                                ],
                                                "isTrigger": false
                                            }
                                        ],
                                        "child": []
                                    }
                                ]
                            },
                            {
                                "type": "Sprite3D",
                                "instanceID": 149,
                                "props": {
                                    "name": "fangkuai (41)",
                                    "active": true,
                                    "isStatic": true,
                                    "layer": 0,
                                    "position": [
                                        -151.3,
                                        -6.449999,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        2,
                                        0.8,
                                        1.95
                                    ]
                                },
                                "components": [],
                                "child": [
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 150,
                                        "props": {
                                            "name": "Box807_0",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_0.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_2.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 151,
                                        "props": {
                                            "name": "Box807_1",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_1.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_1.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "Sprite3D",
                                        "instanceID": 152,
                                        "props": {
                                            "name": "GameObject",
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
                                                1,
                                                1
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
                                                        "type": "CapsuleColliderShape",
                                                        "center": [
                                                            0,
                                                            0.5,
                                                            0
                                                        ],
                                                        "radius": 0.1965526,
                                                        "height": 2,
                                                        "orientation": 0
                                                    }
                                                ],
                                                "isTrigger": false
                                            }
                                        ],
                                        "child": []
                                    }
                                ]
                            },
                            {
                                "type": "Sprite3D",
                                "instanceID": 153,
                                "props": {
                                    "name": "fangkuai (42)",
                                    "active": true,
                                    "isStatic": true,
                                    "layer": 0,
                                    "position": [
                                        -143.34,
                                        -5.639999,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        2,
                                        0.8,
                                        1.95
                                    ]
                                },
                                "components": [],
                                "child": [
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 154,
                                        "props": {
                                            "name": "Box807_0",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_0.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_2.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 155,
                                        "props": {
                                            "name": "Box807_1",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_1.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_1.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "Sprite3D",
                                        "instanceID": 156,
                                        "props": {
                                            "name": "GameObject",
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
                                                1,
                                                1
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
                                                        "type": "CapsuleColliderShape",
                                                        "center": [
                                                            0,
                                                            0.5,
                                                            0
                                                        ],
                                                        "radius": 0.1965526,
                                                        "height": 2,
                                                        "orientation": 0
                                                    }
                                                ],
                                                "isTrigger": false
                                            }
                                        ],
                                        "child": []
                                    }
                                ]
                            },
                            {
                                "type": "MeshSprite3D",
                                "instanceID": 157,
                                "props": {
                                    "name": "jiantou (1)",
                                    "active": true,
                                    "isStatic": true,
                                    "layer": 0,
                                    "position": [
                                        -109.7,
                                        5.6,
                                        1.42
                                    ],
                                    "rotation": [
                                        -0.5258953,
                                        0.4726882,
                                        -0.472688,
                                        0.5258955
                                    ],
                                    "scale": [
                                        0.2,
                                        1,
                                        0.2
                                    ],
                                    "meshPath": "../../3d/Conventional/Library/unity default resources-Plane.lm",
                                    "enableRender": true,
                                    "receiveShadows": true,
                                    "castShadow": false,
                                    "materials": [
                                        {
                                            "path": "../../3d/Conventional/Assets/tietu_new/Materials/new_tietu1.lmat"
                                        }
                                    ]
                                },
                                "components": [],
                                "child": []
                            },
                            {
                                "type": "MeshSprite3D",
                                "instanceID": 158,
                                "props": {
                                    "name": "jiantou (2)",
                                    "active": true,
                                    "isStatic": true,
                                    "layer": 0,
                                    "position": [
                                        -145.05,
                                        -2.57,
                                        1.39
                                    ],
                                    "rotation": [
                                        -0.5424675,
                                        0.4535736,
                                        -0.4535733,
                                        0.5424678
                                    ],
                                    "scale": [
                                        0.2,
                                        1,
                                        0.2
                                    ],
                                    "meshPath": "../../3d/Conventional/Library/unity default resources-Plane.lm",
                                    "enableRender": true,
                                    "receiveShadows": true,
                                    "castShadow": false,
                                    "materials": [
                                        {
                                            "path": "../../3d/Conventional/Assets/tietu_new/Materials/new_tietu1.lmat"
                                        }
                                    ]
                                },
                                "components": [],
                                "child": []
                            },
                            {
                                "type": "Sprite3D",
                                "instanceID": 159,
                                "props": {
                                    "name": "fangkuai (43)",
                                    "active": true,
                                    "isStatic": true,
                                    "layer": 0,
                                    "position": [
                                        -119.39,
                                        -0.3299985,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        2,
                                        0.8,
                                        1.95
                                    ]
                                },
                                "components": [],
                                "child": [
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 160,
                                        "props": {
                                            "name": "Box807_0",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_0.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_2.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 161,
                                        "props": {
                                            "name": "Box807_1",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_1.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_1.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "Sprite3D",
                                        "instanceID": 162,
                                        "props": {
                                            "name": "GameObject",
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
                                                1,
                                                1
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
                                                        "type": "CapsuleColliderShape",
                                                        "center": [
                                                            0,
                                                            0.5,
                                                            0
                                                        ],
                                                        "radius": 0.1965526,
                                                        "height": 2,
                                                        "orientation": 0
                                                    }
                                                ],
                                                "isTrigger": false
                                            }
                                        ],
                                        "child": []
                                    }
                                ]
                            },
                            {
                                "type": "Sprite3D",
                                "instanceID": 163,
                                "props": {
                                    "name": "fangkuai (44)",
                                    "active": true,
                                    "isStatic": true,
                                    "layer": 0,
                                    "position": [
                                        -123.39,
                                        -0.3299985,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        2,
                                        0.8,
                                        1.95
                                    ]
                                },
                                "components": [],
                                "child": [
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 164,
                                        "props": {
                                            "name": "Box807_0",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_0.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_2.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 165,
                                        "props": {
                                            "name": "Box807_1",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_1.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_1.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "Sprite3D",
                                        "instanceID": 166,
                                        "props": {
                                            "name": "GameObject",
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
                                                1,
                                                1
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
                                                        "type": "CapsuleColliderShape",
                                                        "center": [
                                                            0,
                                                            0.5,
                                                            0
                                                        ],
                                                        "radius": 0.1965526,
                                                        "height": 2,
                                                        "orientation": 0
                                                    }
                                                ],
                                                "isTrigger": false
                                            }
                                        ],
                                        "child": []
                                    }
                                ]
                            },
                            {
                                "type": "Sprite3D",
                                "instanceID": 167,
                                "props": {
                                    "name": "fangkuai (45)",
                                    "active": true,
                                    "isStatic": true,
                                    "layer": 0,
                                    "position": [
                                        -155.34,
                                        -7.289999,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        2,
                                        0.8,
                                        1.95
                                    ]
                                },
                                "components": [],
                                "child": [
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 168,
                                        "props": {
                                            "name": "Box807_0",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_0.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_2.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 169,
                                        "props": {
                                            "name": "Box807_1",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_1.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_1.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "Sprite3D",
                                        "instanceID": 170,
                                        "props": {
                                            "name": "GameObject",
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
                                                1,
                                                1
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
                                                        "type": "CapsuleColliderShape",
                                                        "center": [
                                                            0,
                                                            0.5,
                                                            0
                                                        ],
                                                        "radius": 0.1965526,
                                                        "height": 2,
                                                        "orientation": 0
                                                    }
                                                ],
                                                "isTrigger": false
                                            }
                                        ],
                                        "child": []
                                    }
                                ]
                            },
                            {
                                "type": "Sprite3D",
                                "instanceID": 171,
                                "props": {
                                    "name": "fangkuai (46)",
                                    "active": true,
                                    "isStatic": true,
                                    "layer": 0,
                                    "position": [
                                        -159.34,
                                        -7.289999,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        2,
                                        0.8,
                                        1.95
                                    ]
                                },
                                "components": [],
                                "child": [
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 172,
                                        "props": {
                                            "name": "Box807_0",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_0.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_2.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 173,
                                        "props": {
                                            "name": "Box807_1",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_1.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_1.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "Sprite3D",
                                        "instanceID": 174,
                                        "props": {
                                            "name": "GameObject",
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
                                                1,
                                                1
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
                                                        "type": "CapsuleColliderShape",
                                                        "center": [
                                                            0,
                                                            0.5,
                                                            0
                                                        ],
                                                        "radius": 0.1965526,
                                                        "height": 2,
                                                        "orientation": 0
                                                    }
                                                ],
                                                "isTrigger": false
                                            }
                                        ],
                                        "child": []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "Sprite3D",
                "instanceID": 175,
                "props": {
                    "name": "Step3",
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
                    ]
                },
                "components": [],
                "child": [
                    {
                        "type": "Sprite3D",
                        "instanceID": 176,
                        "props": {
                            "name": "CUSTOM",
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
                                "type": "Sprite3D",
                                "instanceID": 177,
                                "props": {
                                    "name": "coin2-fake",
                                    "active": true,
                                    "isStatic": false,
                                    "layer": 0,
                                    "position": [
                                        -10.52,
                                        3.59,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        2,
                                        2,
                                        2
                                    ]
                                },
                                "components": [],
                                "child": []
                            },
                            {
                                "type": "Sprite3D",
                                "instanceID": 178,
                                "props": {
                                    "name": "coin2-fake",
                                    "active": true,
                                    "isStatic": false,
                                    "layer": 0,
                                    "position": [
                                        -11.68,
                                        5.88,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        2,
                                        2,
                                        2
                                    ]
                                },
                                "components": [],
                                "child": []
                            },
                            {
                                "type": "Sprite3D",
                                "instanceID": 179,
                                "props": {
                                    "name": "coin2-fake",
                                    "active": true,
                                    "isStatic": false,
                                    "layer": 0,
                                    "position": [
                                        -12.62,
                                        8.13,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        2,
                                        2,
                                        2
                                    ]
                                },
                                "components": [],
                                "child": []
                            },
                            {
                                "type": "Sprite3D",
                                "instanceID": 180,
                                "props": {
                                    "name": "coin2-fake",
                                    "active": true,
                                    "isStatic": false,
                                    "layer": 0,
                                    "position": [
                                        -13.72,
                                        10.52,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        2,
                                        2,
                                        2
                                    ]
                                },
                                "components": [],
                                "child": []
                            },
                            {
                                "type": "Sprite3D",
                                "instanceID": 181,
                                "props": {
                                    "name": "coin2-fake",
                                    "active": true,
                                    "isStatic": false,
                                    "layer": 0,
                                    "position": [
                                        -17.1,
                                        12.69,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        2,
                                        2,
                                        2
                                    ]
                                },
                                "components": [],
                                "child": []
                            },
                            {
                                "type": "Sprite3D",
                                "instanceID": 182,
                                "props": {
                                    "name": "coin2-fake",
                                    "active": true,
                                    "isStatic": false,
                                    "layer": 0,
                                    "position": [
                                        -21.16,
                                        12.69,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        2,
                                        2,
                                        2
                                    ]
                                },
                                "components": [],
                                "child": []
                            }
                        ]
                    },
                    {
                        "type": "Sprite3D",
                        "instanceID": 183,
                        "props": {
                            "name": "STATIC",
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
                                1,
                                1
                            ]
                        },
                        "components": [],
                        "child": [
                            {
                                "type": "Sprite3D",
                                "instanceID": 184,
                                "props": {
                                    "name": "fangkuai",
                                    "active": true,
                                    "isStatic": true,
                                    "layer": 0,
                                    "position": [
                                        -17.122,
                                        11.206,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        2,
                                        1,
                                        2
                                    ]
                                },
                                "components": [],
                                "child": [
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 185,
                                        "props": {
                                            "name": "Box807_0",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_0.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_2.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 186,
                                        "props": {
                                            "name": "Box807_1",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_1.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_1.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "Sprite3D",
                                        "instanceID": 187,
                                        "props": {
                                            "name": "GameObject",
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
                                                1,
                                                1
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
                                                        "type": "CapsuleColliderShape",
                                                        "center": [
                                                            0,
                                                            0.5,
                                                            0
                                                        ],
                                                        "radius": 0.25,
                                                        "height": 2,
                                                        "orientation": 0
                                                    }
                                                ],
                                                "isTrigger": false
                                            }
                                        ],
                                        "child": []
                                    }
                                ]
                            },
                            {
                                "type": "Sprite3D",
                                "instanceID": 188,
                                "props": {
                                    "name": "tizi02",
                                    "active": true,
                                    "isStatic": true,
                                    "layer": 0,
                                    "position": [
                                        -10.5,
                                        1.69,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        -0.2061187,
                                        -0.978527
                                    ],
                                    "scale": [
                                        1,
                                        2,
                                        2
                                    ]
                                },
                                "components": [],
                                "child": [
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 189,
                                        "props": {
                                            "name": "Box821_0",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box821-Box821_0.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_11.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 190,
                                        "props": {
                                            "name": "Box821_1",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box821-Box821_1.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/teitu/Materials/T_Obstacles_12.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 191,
                                        "props": {
                                            "name": "Box821_2",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box821-Box821_2.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/teitu/Materials/T_Obstacles_12.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "Sprite3D",
                                        "instanceID": 192,
                                        "props": {
                                            "name": "GameObject",
                                            "active": true,
                                            "isStatic": true,
                                            "layer": 0,
                                            "position": [
                                                -0.56,
                                                0.85,
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
                                                            0.5623226,
                                                            0.5769343,
                                                            0
                                                        ],
                                                        "size": [
                                                            0.278283,
                                                            2.804,
                                                            1
                                                        ]
                                                    }
                                                ],
                                                "isTrigger": false
                                            }
                                        ],
                                        "child": []
                                    }
                                ]
                            },
                            {
                                "type": "Sprite3D",
                                "instanceID": 193,
                                "props": {
                                    "name": "tizi02 (1)",
                                    "active": true,
                                    "isStatic": true,
                                    "layer": 0,
                                    "position": [
                                        -12.82,
                                        6.92,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        -0.2061187,
                                        -0.978527
                                    ],
                                    "scale": [
                                        1,
                                        2,
                                        2
                                    ]
                                },
                                "components": [],
                                "child": [
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 194,
                                        "props": {
                                            "name": "Box821_0",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box821-Box821_0.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_11.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 195,
                                        "props": {
                                            "name": "Box821_1",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box821-Box821_1.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/teitu/Materials/T_Obstacles_12.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 196,
                                        "props": {
                                            "name": "Box821_2",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box821-Box821_2.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/teitu/Materials/T_Obstacles_12.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "Sprite3D",
                                        "instanceID": 197,
                                        "props": {
                                            "name": "GameObject",
                                            "active": true,
                                            "isStatic": true,
                                            "layer": 0,
                                            "position": [
                                                -0.56,
                                                0.85,
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
                                                            0.5623226,
                                                            0.5769343,
                                                            0
                                                        ],
                                                        "size": [
                                                            0.278283,
                                                            2.804,
                                                            1
                                                        ]
                                                    }
                                                ],
                                                "isTrigger": false
                                            }
                                        ],
                                        "child": []
                                    }
                                ]
                            },
                            {
                                "type": "Sprite3D",
                                "instanceID": 198,
                                "props": {
                                    "name": "fangkuai (1)",
                                    "active": true,
                                    "isStatic": true,
                                    "layer": 0,
                                    "position": [
                                        -21.142,
                                        11.206,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        2,
                                        1,
                                        2
                                    ]
                                },
                                "components": [],
                                "child": [
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 199,
                                        "props": {
                                            "name": "Box807_0",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_0.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_2.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 200,
                                        "props": {
                                            "name": "Box807_1",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_1.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_1.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "Sprite3D",
                                        "instanceID": 201,
                                        "props": {
                                            "name": "GameObject",
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
                                                1,
                                                1
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
                                                        "type": "CapsuleColliderShape",
                                                        "center": [
                                                            0,
                                                            0.5,
                                                            0
                                                        ],
                                                        "radius": 0.25,
                                                        "height": 2,
                                                        "orientation": 0
                                                    }
                                                ],
                                                "isTrigger": false
                                            }
                                        ],
                                        "child": []
                                    }
                                ]
                            },
                            {
                                "type": "Sprite3D",
                                "instanceID": 202,
                                "props": {
                                    "name": "star",
                                    "active": true,
                                    "isStatic": false,
                                    "layer": 0,
                                    "position": [
                                        -17.59,
                                        21.95,
                                        0.8
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        0.5,
                                        0.5,
                                        0.5
                                    ]
                                },
                                "components": [],
                                "child": [
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 203,
                                        "props": {
                                            "name": "SM_Star_01_0",
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
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/SM_Star_01-SM_Star_01_0.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Accessories_18.lmat"
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
                                "instanceID": 204,
                                "props": {
                                    "name": "huojian",
                                    "active": true,
                                    "isStatic": false,
                                    "layer": 0,
                                    "position": [
                                        -17.07,
                                        20.86,
                                        -0.8
                                    ],
                                    "rotation": [
                                        0,
                                        0.991123,
                                        0,
                                        0.1329482
                                    ],
                                    "scale": [
                                        1,
                                        1,
                                        1
                                    ],
                                    "meshPath": "../../3d/Conventional/Assets/Mesh/huojian-huojian1_polySurface59.lm",
                                    "enableRender": true,
                                    "receiveShadows": true,
                                    "castShadow": true,
                                    "materials": [
                                        {
                                            "path": "../../3d/Conventional/Assets/teitu/Materials/huojian_Base_Color.lmat"
                                        }
                                    ]
                                },
                                "components": [],
                                "child": []
                            },
                            {
                                "type": "Sprite3D",
                                "instanceID": 205,
                                "props": {
                                    "name": "star (1)",
                                    "active": true,
                                    "isStatic": false,
                                    "layer": 0,
                                    "position": [
                                        -12.79,
                                        20.24,
                                        0.8
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        0.5,
                                        0.5,
                                        0.5
                                    ]
                                },
                                "components": [],
                                "child": [
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 206,
                                        "props": {
                                            "name": "SM_Star_01_0",
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
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/SM_Star_01-SM_Star_01_0.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Accessories_18.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    }
                                ]
                            },
                            {
                                "type": "Sprite3D",
                                "instanceID": 207,
                                "props": {
                                    "name": "star (2)",
                                    "active": true,
                                    "isStatic": false,
                                    "layer": 0,
                                    "position": [
                                        -11.13,
                                        20.93,
                                        0.8
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        0.2,
                                        0.2,
                                        0.2
                                    ]
                                },
                                "components": [],
                                "child": [
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 208,
                                        "props": {
                                            "name": "SM_Star_01_0",
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
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/SM_Star_01-SM_Star_01_0.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Accessories_18.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "Sprite3D",
                "instanceID": 209,
                "props": {
                    "name": "Step4",
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
                    ]
                },
                "components": [],
                "child": [
                    {
                        "type": "Sprite3D",
                        "instanceID": 210,
                        "props": {
                            "name": "CUSTOM",
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
                                "type": "Sprite3D",
                                "instanceID": 211,
                                "props": {
                                    "name": "ban_qqb",
                                    "active": true,
                                    "isStatic": false,
                                    "layer": 0,
                                    "position": [
                                        -35.82,
                                        11.31,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0.07845911,
                                        -0.9969174
                                    ],
                                    "scale": [
                                        1.25,
                                        1.25,
                                        1
                                    ]
                                },
                                "components": [],
                                "child": [
                                    {
                                        "type": "Sprite3D",
                                        "instanceID": 212,
                                        "props": {
                                            "name": "body",
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
                                                2
                                            ]
                                        },
                                        "components": [
                                            {
                                                "type": "Rigidbody3D",
                                                "mass": 1,
                                                "isKinematic": false,
                                                "restitution": 0,
                                                "friction": 0.5,
                                                "rollingFriction": 0,
                                                "linearDamping": 0,
                                                "angularDamping": 0.05,
                                                "overrideGravity": true,
                                                "gravity": [
                                                    0,
                                                    0,
                                                    0
                                                ],
                                                "shapes": [
                                                    {
                                                        "type": "BoxColliderShape",
                                                        "center": [
                                                            0.01907873,
                                                            2.384186E-07,
                                                            0
                                                        ],
                                                        "size": [
                                                            0.6057024,
                                                            0.3385968,
                                                            1
                                                        ]
                                                    }
                                                ],
                                                "isTrigger": false,
                                                "linearFactor": [
                                                    0,
                                                    0,
                                                    0
                                                ],
                                                "angularFactor": [
                                                    0,
                                                    0,
                                                    0
                                                ]
                                            }
                                        ],
                                        "child": [
                                            {
                                                "type": "MeshSprite3D",
                                                "instanceID": 213,
                                                "props": {
                                                    "name": "body",
                                                    "active": true,
                                                    "isStatic": false,
                                                    "layer": 0,
                                                    "position": [
                                                        0,
                                                        0,
                                                        0.25
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
                                                        0.7
                                                    ],
                                                    "meshPath": "../../3d/Conventional/Assets/Mesh/Cylinder523-Cylinder523_0.lm",
                                                    "enableRender": true,
                                                    "receiveShadows": true,
                                                    "castShadow": true,
                                                    "materials": [
                                                        {
                                                            "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_8.lmat"
                                                        }
                                                    ]
                                                },
                                                "components": [],
                                                "child": []
                                            }
                                        ]
                                    },
                                    {
                                        "type": "Sprite3D",
                                        "instanceID": 214,
                                        "props": {
                                            "name": "ban",
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
                                                0.7071068,
                                                -0.7071068
                                            ],
                                            "scale": [
                                                1,
                                                1,
                                                2
                                            ]
                                        },
                                        "components": [
                                            {
                                                "type": "Rigidbody3D",
                                                "mass": 50,
                                                "isKinematic": false,
                                                "restitution": 0,
                                                "friction": 0.5,
                                                "rollingFriction": 0,
                                                "linearDamping": 0,
                                                "angularDamping": 0.05,
                                                "overrideGravity": false,
                                                "gravity": [
                                                    0,
                                                    0,
                                                    0
                                                ],
                                                "shapes": [
                                                    {
                                                        "type": "BoxColliderShape",
                                                        "center": [
                                                            0.006872833,
                                                            0.05788279,
                                                            0
                                                        ],
                                                        "size": [
                                                            0.2990464,
                                                            8.333734,
                                                            1
                                                        ]
                                                    }
                                                ],
                                                "isTrigger": false,
                                                "linearFactor": [
                                                    1,
                                                    1,
                                                    1
                                                ],
                                                "angularFactor": [
                                                    1,
                                                    1,
                                                    1
                                                ]
                                            }
                                        ],
                                        "child": [
                                            {
                                                "type": "Sprite3D",
                                                "instanceID": 215,
                                                "props": {
                                                    "name": "tizi02",
                                                    "active": true,
                                                    "isStatic": false,
                                                    "layer": 0,
                                                    "position": [
                                                        0,
                                                        1.54,
                                                        0
                                                    ],
                                                    "rotation": [
                                                        0,
                                                        0,
                                                        -1,
                                                        0
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
                                                        "instanceID": 216,
                                                        "props": {
                                                            "name": "Box821_0",
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
                                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box821-Box821_0.lm",
                                                            "enableRender": true,
                                                            "receiveShadows": true,
                                                            "castShadow": true,
                                                            "materials": [
                                                                {
                                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_11.lmat"
                                                                }
                                                            ]
                                                        },
                                                        "components": [],
                                                        "child": []
                                                    },
                                                    {
                                                        "type": "MeshSprite3D",
                                                        "instanceID": 217,
                                                        "props": {
                                                            "name": "Box821_1",
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
                                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box821-Box821_1.lm",
                                                            "enableRender": true,
                                                            "receiveShadows": true,
                                                            "castShadow": true,
                                                            "materials": [
                                                                {
                                                                    "path": "../../3d/Conventional/Assets/teitu/Materials/T_Obstacles_12.lmat"
                                                                }
                                                            ]
                                                        },
                                                        "components": [],
                                                        "child": []
                                                    },
                                                    {
                                                        "type": "MeshSprite3D",
                                                        "instanceID": 218,
                                                        "props": {
                                                            "name": "Box821_2",
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
                                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box821-Box821_2.lm",
                                                            "enableRender": true,
                                                            "receiveShadows": true,
                                                            "castShadow": true,
                                                            "materials": [
                                                                {
                                                                    "path": "../../3d/Conventional/Assets/teitu/Materials/T_Obstacles_12.lmat"
                                                                }
                                                            ]
                                                        },
                                                        "components": [],
                                                        "child": []
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "Sprite3D",
                                                "instanceID": 219,
                                                "props": {
                                                    "name": "tizi02 (1)",
                                                    "active": true,
                                                    "isStatic": false,
                                                    "layer": 0,
                                                    "position": [
                                                        0,
                                                        1.44,
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
                                                        "instanceID": 220,
                                                        "props": {
                                                            "name": "Box821_0",
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
                                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box821-Box821_0.lm",
                                                            "enableRender": true,
                                                            "receiveShadows": true,
                                                            "castShadow": true,
                                                            "materials": [
                                                                {
                                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_11.lmat"
                                                                }
                                                            ]
                                                        },
                                                        "components": [],
                                                        "child": []
                                                    },
                                                    {
                                                        "type": "MeshSprite3D",
                                                        "instanceID": 221,
                                                        "props": {
                                                            "name": "Box821_1",
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
                                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box821-Box821_1.lm",
                                                            "enableRender": true,
                                                            "receiveShadows": true,
                                                            "castShadow": true,
                                                            "materials": [
                                                                {
                                                                    "path": "../../3d/Conventional/Assets/teitu/Materials/T_Obstacles_12.lmat"
                                                                }
                                                            ]
                                                        },
                                                        "components": [],
                                                        "child": []
                                                    },
                                                    {
                                                        "type": "MeshSprite3D",
                                                        "instanceID": 222,
                                                        "props": {
                                                            "name": "Box821_2",
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
                                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box821-Box821_2.lm",
                                                            "enableRender": true,
                                                            "receiveShadows": true,
                                                            "castShadow": true,
                                                            "materials": [
                                                                {
                                                                    "path": "../../3d/Conventional/Assets/teitu/Materials/T_Obstacles_12.lmat"
                                                                }
                                                            ]
                                                        },
                                                        "components": [],
                                                        "child": []
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "Sprite3D",
                                                "instanceID": 223,
                                                "props": {
                                                    "name": "tizi02 (2)",
                                                    "active": true,
                                                    "isStatic": false,
                                                    "layer": 0,
                                                    "position": [
                                                        0.01,
                                                        -1.28,
                                                        0
                                                    ],
                                                    "rotation": [
                                                        0,
                                                        0,
                                                        -1,
                                                        0
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
                                                        "instanceID": 224,
                                                        "props": {
                                                            "name": "Box821_0",
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
                                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box821-Box821_0.lm",
                                                            "enableRender": true,
                                                            "receiveShadows": true,
                                                            "castShadow": true,
                                                            "materials": [
                                                                {
                                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_11.lmat"
                                                                }
                                                            ]
                                                        },
                                                        "components": [],
                                                        "child": []
                                                    },
                                                    {
                                                        "type": "MeshSprite3D",
                                                        "instanceID": 225,
                                                        "props": {
                                                            "name": "Box821_1",
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
                                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box821-Box821_1.lm",
                                                            "enableRender": true,
                                                            "receiveShadows": true,
                                                            "castShadow": true,
                                                            "materials": [
                                                                {
                                                                    "path": "../../3d/Conventional/Assets/teitu/Materials/T_Obstacles_12.lmat"
                                                                }
                                                            ]
                                                        },
                                                        "components": [],
                                                        "child": []
                                                    },
                                                    {
                                                        "type": "MeshSprite3D",
                                                        "instanceID": 226,
                                                        "props": {
                                                            "name": "Box821_2",
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
                                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box821-Box821_2.lm",
                                                            "enableRender": true,
                                                            "receiveShadows": true,
                                                            "castShadow": true,
                                                            "materials": [
                                                                {
                                                                    "path": "../../3d/Conventional/Assets/teitu/Materials/T_Obstacles_12.lmat"
                                                                }
                                                            ]
                                                        },
                                                        "components": [],
                                                        "child": []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "type": "Sprite3D",
                                "instanceID": 227,
                                "props": {
                                    "name": "coin2-fake",
                                    "active": true,
                                    "isStatic": false,
                                    "layer": 0,
                                    "position": [
                                        -25.14,
                                        11.58,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        2,
                                        2,
                                        2
                                    ]
                                },
                                "components": [],
                                "child": []
                            },
                            {
                                "type": "Sprite3D",
                                "instanceID": 228,
                                "props": {
                                    "name": "coin2-fake",
                                    "active": true,
                                    "isStatic": false,
                                    "layer": 0,
                                    "position": [
                                        -29.12,
                                        10.79,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        2,
                                        2,
                                        2
                                    ]
                                },
                                "components": [],
                                "child": []
                            }
                        ]
                    },
                    {
                        "type": "Sprite3D",
                        "instanceID": 229,
                        "props": {
                            "name": "STATIC",
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
                                1,
                                1
                            ]
                        },
                        "components": [],
                        "child": [
                            {
                                "type": "MeshSprite3D",
                                "instanceID": 230,
                                "props": {
                                    "name": "jiantou",
                                    "active": true,
                                    "isStatic": true,
                                    "layer": 0,
                                    "position": [
                                        -8.25,
                                        4.45,
                                        1.42
                                    ],
                                    "rotation": [
                                        0.1638705,
                                        -0.6878564,
                                        0.6878564,
                                        -0.1638708
                                    ],
                                    "scale": [
                                        0.2,
                                        1,
                                        0.2
                                    ],
                                    "meshPath": "../../3d/Conventional/Library/unity default resources-Plane.lm",
                                    "enableRender": true,
                                    "receiveShadows": true,
                                    "castShadow": false,
                                    "materials": [
                                        {
                                            "path": "../../3d/Conventional/Assets/tietu_new/Materials/new_tietu1.lmat"
                                        }
                                    ]
                                },
                                "components": [],
                                "child": []
                            },
                            {
                                "type": "Sprite3D",
                                "instanceID": 231,
                                "props": {
                                    "name": "fangkuai (16)",
                                    "active": true,
                                    "isStatic": true,
                                    "layer": 0,
                                    "position": [
                                        -25.13,
                                        10.32,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        2,
                                        0.8,
                                        1.95
                                    ]
                                },
                                "components": [],
                                "child": [
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 232,
                                        "props": {
                                            "name": "Box807_0",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_0.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_2.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 233,
                                        "props": {
                                            "name": "Box807_1",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_1.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_1.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "Sprite3D",
                                        "instanceID": 234,
                                        "props": {
                                            "name": "GameObject",
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
                                                1,
                                                1
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
                                                        "type": "CapsuleColliderShape",
                                                        "center": [
                                                            0,
                                                            0.5,
                                                            0
                                                        ],
                                                        "radius": 0.1965526,
                                                        "height": 2,
                                                        "orientation": 0
                                                    }
                                                ],
                                                "isTrigger": false
                                            }
                                        ],
                                        "child": []
                                    }
                                ]
                            },
                            {
                                "type": "Sprite3D",
                                "instanceID": 235,
                                "props": {
                                    "name": "fangkuai (17)",
                                    "active": true,
                                    "isStatic": true,
                                    "layer": 0,
                                    "position": [
                                        -29.08,
                                        9.47,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        2,
                                        0.8,
                                        1.95
                                    ]
                                },
                                "components": [],
                                "child": [
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 236,
                                        "props": {
                                            "name": "Box807_0",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_0.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_2.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 237,
                                        "props": {
                                            "name": "Box807_1",
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
                                                1,
                                                1
                                            ],
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box807-Box807_1.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_1.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "Sprite3D",
                                        "instanceID": 238,
                                        "props": {
                                            "name": "GameObject",
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
                                                1,
                                                1
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
                                                        "type": "CapsuleColliderShape",
                                                        "center": [
                                                            0,
                                                            0.5,
                                                            0
                                                        ],
                                                        "radius": 0.1965526,
                                                        "height": 2,
                                                        "orientation": 0
                                                    }
                                                ],
                                                "isTrigger": false
                                            }
                                        ],
                                        "child": []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "Sprite3D",
                "instanceID": 239,
                "props": {
                    "name": "Step5",
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
                    ]
                },
                "components": [],
                "child": [
                    {
                        "type": "Sprite3D",
                        "instanceID": 240,
                        "props": {
                            "name": "CUSTOM",
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
                                "type": "Sprite3D",
                                "instanceID": 241,
                                "props": {
                                    "name": "ban_qqb",
                                    "active": true,
                                    "isStatic": false,
                                    "layer": 0,
                                    "position": [
                                        -69.14,
                                        9.37,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0.05251028,
                                        -0.9986205
                                    ],
                                    "scale": [
                                        1.25,
                                        1.25,
                                        1
                                    ]
                                },
                                "components": [],
                                "child": [
                                    {
                                        "type": "Sprite3D",
                                        "instanceID": 242,
                                        "props": {
                                            "name": "body",
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
                                                2
                                            ]
                                        },
                                        "components": [
                                            {
                                                "type": "Rigidbody3D",
                                                "mass": 1,
                                                "isKinematic": false,
                                                "restitution": 0,
                                                "friction": 0.5,
                                                "rollingFriction": 0,
                                                "linearDamping": 0,
                                                "angularDamping": 0.05,
                                                "overrideGravity": true,
                                                "gravity": [
                                                    0,
                                                    0,
                                                    0
                                                ],
                                                "shapes": [
                                                    {
                                                        "type": "BoxColliderShape",
                                                        "center": [
                                                            0.01907873,
                                                            2.384186E-07,
                                                            0
                                                        ],
                                                        "size": [
                                                            0.6057024,
                                                            0.3385968,
                                                            1
                                                        ]
                                                    }
                                                ],
                                                "isTrigger": false,
                                                "linearFactor": [
                                                    0,
                                                    0,
                                                    0
                                                ],
                                                "angularFactor": [
                                                    0,
                                                    0,
                                                    0
                                                ]
                                            }
                                        ],
                                        "child": [
                                            {
                                                "type": "MeshSprite3D",
                                                "instanceID": 243,
                                                "props": {
                                                    "name": "body",
                                                    "active": true,
                                                    "isStatic": false,
                                                    "layer": 0,
                                                    "position": [
                                                        0,
                                                        0,
                                                        0.25
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
                                                        0.7
                                                    ],
                                                    "meshPath": "../../3d/Conventional/Assets/Mesh/Cylinder523-Cylinder523_0.lm",
                                                    "enableRender": true,
                                                    "receiveShadows": true,
                                                    "castShadow": true,
                                                    "materials": [
                                                        {
                                                            "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_8.lmat"
                                                        }
                                                    ]
                                                },
                                                "components": [],
                                                "child": []
                                            }
                                        ]
                                    },
                                    {
                                        "type": "Sprite3D",
                                        "instanceID": 244,
                                        "props": {
                                            "name": "ban",
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
                                                0.7071068,
                                                -0.7071068
                                            ],
                                            "scale": [
                                                1,
                                                1,
                                                2
                                            ]
                                        },
                                        "components": [
                                            {
                                                "type": "Rigidbody3D",
                                                "mass": 50,
                                                "isKinematic": false,
                                                "restitution": 0,
                                                "friction": 0.5,
                                                "rollingFriction": 0,
                                                "linearDamping": 0,
                                                "angularDamping": 0.05,
                                                "overrideGravity": false,
                                                "gravity": [
                                                    0,
                                                    0,
                                                    0
                                                ],
                                                "shapes": [
                                                    {
                                                        "type": "BoxColliderShape",
                                                        "center": [
                                                            0.006872833,
                                                            0.05788279,
                                                            0
                                                        ],
                                                        "size": [
                                                            0.2990464,
                                                            8.333734,
                                                            1
                                                        ]
                                                    }
                                                ],
                                                "isTrigger": false,
                                                "linearFactor": [
                                                    1,
                                                    1,
                                                    1
                                                ],
                                                "angularFactor": [
                                                    1,
                                                    1,
                                                    1
                                                ]
                                            }
                                        ],
                                        "child": [
                                            {
                                                "type": "Sprite3D",
                                                "instanceID": 245,
                                                "props": {
                                                    "name": "tizi02",
                                                    "active": true,
                                                    "isStatic": false,
                                                    "layer": 0,
                                                    "position": [
                                                        0,
                                                        1.54,
                                                        0
                                                    ],
                                                    "rotation": [
                                                        0,
                                                        0,
                                                        -1,
                                                        0
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
                                                        "instanceID": 246,
                                                        "props": {
                                                            "name": "Box821_0",
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
                                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box821-Box821_0.lm",
                                                            "enableRender": true,
                                                            "receiveShadows": true,
                                                            "castShadow": true,
                                                            "materials": [
                                                                {
                                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_11.lmat"
                                                                }
                                                            ]
                                                        },
                                                        "components": [],
                                                        "child": []
                                                    },
                                                    {
                                                        "type": "MeshSprite3D",
                                                        "instanceID": 247,
                                                        "props": {
                                                            "name": "Box821_1",
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
                                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box821-Box821_1.lm",
                                                            "enableRender": true,
                                                            "receiveShadows": true,
                                                            "castShadow": true,
                                                            "materials": [
                                                                {
                                                                    "path": "../../3d/Conventional/Assets/teitu/Materials/T_Obstacles_12.lmat"
                                                                }
                                                            ]
                                                        },
                                                        "components": [],
                                                        "child": []
                                                    },
                                                    {
                                                        "type": "MeshSprite3D",
                                                        "instanceID": 248,
                                                        "props": {
                                                            "name": "Box821_2",
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
                                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box821-Box821_2.lm",
                                                            "enableRender": true,
                                                            "receiveShadows": true,
                                                            "castShadow": true,
                                                            "materials": [
                                                                {
                                                                    "path": "../../3d/Conventional/Assets/teitu/Materials/T_Obstacles_12.lmat"
                                                                }
                                                            ]
                                                        },
                                                        "components": [],
                                                        "child": []
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "Sprite3D",
                                                "instanceID": 249,
                                                "props": {
                                                    "name": "tizi02 (1)",
                                                    "active": true,
                                                    "isStatic": false,
                                                    "layer": 0,
                                                    "position": [
                                                        0,
                                                        1.44,
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
                                                        "instanceID": 250,
                                                        "props": {
                                                            "name": "Box821_0",
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
                                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box821-Box821_0.lm",
                                                            "enableRender": true,
                                                            "receiveShadows": true,
                                                            "castShadow": true,
                                                            "materials": [
                                                                {
                                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_11.lmat"
                                                                }
                                                            ]
                                                        },
                                                        "components": [],
                                                        "child": []
                                                    },
                                                    {
                                                        "type": "MeshSprite3D",
                                                        "instanceID": 251,
                                                        "props": {
                                                            "name": "Box821_1",
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
                                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box821-Box821_1.lm",
                                                            "enableRender": true,
                                                            "receiveShadows": true,
                                                            "castShadow": true,
                                                            "materials": [
                                                                {
                                                                    "path": "../../3d/Conventional/Assets/teitu/Materials/T_Obstacles_12.lmat"
                                                                }
                                                            ]
                                                        },
                                                        "components": [],
                                                        "child": []
                                                    },
                                                    {
                                                        "type": "MeshSprite3D",
                                                        "instanceID": 252,
                                                        "props": {
                                                            "name": "Box821_2",
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
                                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box821-Box821_2.lm",
                                                            "enableRender": true,
                                                            "receiveShadows": true,
                                                            "castShadow": true,
                                                            "materials": [
                                                                {
                                                                    "path": "../../3d/Conventional/Assets/teitu/Materials/T_Obstacles_12.lmat"
                                                                }
                                                            ]
                                                        },
                                                        "components": [],
                                                        "child": []
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "Sprite3D",
                                                "instanceID": 253,
                                                "props": {
                                                    "name": "tizi02 (2)",
                                                    "active": true,
                                                    "isStatic": false,
                                                    "layer": 0,
                                                    "position": [
                                                        0.01,
                                                        -1.28,
                                                        0
                                                    ],
                                                    "rotation": [
                                                        0,
                                                        0,
                                                        -1,
                                                        0
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
                                                        "instanceID": 254,
                                                        "props": {
                                                            "name": "Box821_0",
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
                                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box821-Box821_0.lm",
                                                            "enableRender": true,
                                                            "receiveShadows": true,
                                                            "castShadow": true,
                                                            "materials": [
                                                                {
                                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_11.lmat"
                                                                }
                                                            ]
                                                        },
                                                        "components": [],
                                                        "child": []
                                                    },
                                                    {
                                                        "type": "MeshSprite3D",
                                                        "instanceID": 255,
                                                        "props": {
                                                            "name": "Box821_1",
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
                                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box821-Box821_1.lm",
                                                            "enableRender": true,
                                                            "receiveShadows": true,
                                                            "castShadow": true,
                                                            "materials": [
                                                                {
                                                                    "path": "../../3d/Conventional/Assets/teitu/Materials/T_Obstacles_12.lmat"
                                                                }
                                                            ]
                                                        },
                                                        "components": [],
                                                        "child": []
                                                    },
                                                    {
                                                        "type": "MeshSprite3D",
                                                        "instanceID": 256,
                                                        "props": {
                                                            "name": "Box821_2",
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
                                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Box821-Box821_2.lm",
                                                            "enableRender": true,
                                                            "receiveShadows": true,
                                                            "castShadow": true,
                                                            "materials": [
                                                                {
                                                                    "path": "../../3d/Conventional/Assets/teitu/Materials/T_Obstacles_12.lmat"
                                                                }
                                                            ]
                                                        },
                                                        "components": [],
                                                        "child": []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "Sprite3D",
                        "instanceID": 257,
                        "props": {
                            "name": "STATIC",
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
                                1,
                                1
                            ]
                        },
                        "components": [],
                        "child": []
                    }
                ]
            },
            {
                "type": "Sprite3D",
                "instanceID": 258,
                "props": {
                    "name": "Step6",
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
                    ]
                },
                "components": [],
                "child": [
                    {
                        "type": "Sprite3D",
                        "instanceID": 259,
                        "props": {
                            "name": "CUSTOM",
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
                                "type": "Sprite3D",
                                "instanceID": 260,
                                "props": {
                                    "name": "ban_hdb2",
                                    "active": true,
                                    "isStatic": false,
                                    "layer": 0,
                                    "position": [
                                        -98.48999,
                                        5.34,
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
                                        "instanceID": 261,
                                        "props": {
                                            "name": "body",
                                            "active": true,
                                            "isStatic": false,
                                            "layer": 0,
                                            "position": [
                                                0.491,
                                                0.769,
                                                0.387
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
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Cylinder523-Cylinder523_0.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_8.lmat"
                                                }
                                            ]
                                        },
                                        "components": [
                                            {
                                                "type": "Rigidbody3D",
                                                "mass": 1,
                                                "isKinematic": false,
                                                "restitution": 0,
                                                "friction": 0.5,
                                                "rollingFriction": 0,
                                                "linearDamping": 0,
                                                "angularDamping": 0.05,
                                                "overrideGravity": true,
                                                "gravity": [
                                                    0,
                                                    0,
                                                    0
                                                ],
                                                "shapes": [
                                                    {
                                                        "type": "BoxColliderShape",
                                                        "center": [
                                                            2.533197E-07,
                                                            -1.490116E-07,
                                                            -0.3843211
                                                        ],
                                                        "size": [
                                                            0.5763747,
                                                            0.5852659,
                                                            2.36084
                                                        ]
                                                    }
                                                ],
                                                "isTrigger": false,
                                                "linearFactor": [
                                                    0,
                                                    0,
                                                    0
                                                ],
                                                "angularFactor": [
                                                    0,
                                                    0,
                                                    0
                                                ]
                                            }
                                        ],
                                        "child": []
                                    },
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 262,
                                        "props": {
                                            "name": "ban",
                                            "active": true,
                                            "isStatic": false,
                                            "layer": 0,
                                            "position": [
                                                -0.8,
                                                0.766,
                                                0
                                            ],
                                            "rotation": [
                                                0,
                                                0,
                                                1,
                                                0
                                            ],
                                            "scale": [
                                                2.5,
                                                0.3,
                                                2.2
                                            ],
                                            "meshPath": "../../3d/Conventional/Library/unity default resources-Cube.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_5.lmat"
                                                }
                                            ]
                                        },
                                        "components": [
                                            {
                                                "type": "Rigidbody3D",
                                                "mass": 25,
                                                "isKinematic": false,
                                                "restitution": 0,
                                                "friction": 0.5,
                                                "rollingFriction": 0,
                                                "linearDamping": 0,
                                                "angularDamping": 0.05,
                                                "overrideGravity": false,
                                                "gravity": [
                                                    0,
                                                    0,
                                                    0
                                                ],
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
                                                            1,
                                                            1
                                                        ]
                                                    }
                                                ],
                                                "isTrigger": false,
                                                "linearFactor": [
                                                    1,
                                                    1,
                                                    1
                                                ],
                                                "angularFactor": [
                                                    1,
                                                    1,
                                                    1
                                                ]
                                            }
                                        ],
                                        "child": []
                                    }
                                ]
                            },
                            {
                                "type": "Sprite3D",
                                "instanceID": 263,
                                "props": {
                                    "name": "ban_hdb2",
                                    "active": true,
                                    "isStatic": false,
                                    "layer": 0,
                                    "position": [
                                        -100.95,
                                        3.24,
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
                                        "instanceID": 264,
                                        "props": {
                                            "name": "body",
                                            "active": true,
                                            "isStatic": false,
                                            "layer": 0,
                                            "position": [
                                                0.491,
                                                0.769,
                                                0.387
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
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Cylinder523-Cylinder523_0.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_8.lmat"
                                                }
                                            ]
                                        },
                                        "components": [
                                            {
                                                "type": "Rigidbody3D",
                                                "mass": 1,
                                                "isKinematic": false,
                                                "restitution": 0,
                                                "friction": 0.5,
                                                "rollingFriction": 0,
                                                "linearDamping": 0,
                                                "angularDamping": 0.05,
                                                "overrideGravity": true,
                                                "gravity": [
                                                    0,
                                                    0,
                                                    0
                                                ],
                                                "shapes": [
                                                    {
                                                        "type": "BoxColliderShape",
                                                        "center": [
                                                            2.533197E-07,
                                                            -1.490116E-07,
                                                            -0.3843211
                                                        ],
                                                        "size": [
                                                            0.5763747,
                                                            0.5852659,
                                                            2.36084
                                                        ]
                                                    }
                                                ],
                                                "isTrigger": false,
                                                "linearFactor": [
                                                    0,
                                                    0,
                                                    0
                                                ],
                                                "angularFactor": [
                                                    0,
                                                    0,
                                                    0
                                                ]
                                            }
                                        ],
                                        "child": []
                                    },
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 265,
                                        "props": {
                                            "name": "ban",
                                            "active": true,
                                            "isStatic": false,
                                            "layer": 0,
                                            "position": [
                                                -0.8,
                                                0.766,
                                                0
                                            ],
                                            "rotation": [
                                                0,
                                                0,
                                                1,
                                                0
                                            ],
                                            "scale": [
                                                2.5,
                                                0.3,
                                                2.2
                                            ],
                                            "meshPath": "../../3d/Conventional/Library/unity default resources-Cube.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_5.lmat"
                                                }
                                            ]
                                        },
                                        "components": [
                                            {
                                                "type": "Rigidbody3D",
                                                "mass": 25,
                                                "isKinematic": false,
                                                "restitution": 0,
                                                "friction": 0.5,
                                                "rollingFriction": 0,
                                                "linearDamping": 0,
                                                "angularDamping": 0.05,
                                                "overrideGravity": false,
                                                "gravity": [
                                                    0,
                                                    0,
                                                    0
                                                ],
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
                                                            1,
                                                            1
                                                        ]
                                                    }
                                                ],
                                                "isTrigger": false,
                                                "linearFactor": [
                                                    1,
                                                    1,
                                                    1
                                                ],
                                                "angularFactor": [
                                                    1,
                                                    1,
                                                    1
                                                ]
                                            }
                                        ],
                                        "child": []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "Sprite3D",
                        "instanceID": 266,
                        "props": {
                            "name": "STATIC",
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
                                1,
                                1
                            ]
                        },
                        "components": [],
                        "child": []
                    }
                ]
            },
            {
                "type": "Sprite3D",
                "instanceID": 267,
                "props": {
                    "name": "Step7",
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
                    ]
                },
                "components": [],
                "child": [
                    {
                        "type": "Sprite3D",
                        "instanceID": 268,
                        "props": {
                            "name": "CUSTOM",
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
                                "type": "Sprite3D",
                                "instanceID": 269,
                                "props": {
                                    "name": "ban_hdb2",
                                    "active": true,
                                    "isStatic": false,
                                    "layer": 0,
                                    "position": [
                                        -134.28,
                                        -1.86,
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
                                        "instanceID": 270,
                                        "props": {
                                            "name": "body",
                                            "active": true,
                                            "isStatic": false,
                                            "layer": 0,
                                            "position": [
                                                0.491,
                                                0.769,
                                                0.387
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
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Cylinder523-Cylinder523_0.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_8.lmat"
                                                }
                                            ]
                                        },
                                        "components": [
                                            {
                                                "type": "Rigidbody3D",
                                                "mass": 1,
                                                "isKinematic": false,
                                                "restitution": 0,
                                                "friction": 0.5,
                                                "rollingFriction": 0,
                                                "linearDamping": 0,
                                                "angularDamping": 0.05,
                                                "overrideGravity": true,
                                                "gravity": [
                                                    0,
                                                    0,
                                                    0
                                                ],
                                                "shapes": [
                                                    {
                                                        "type": "BoxColliderShape",
                                                        "center": [
                                                            2.533197E-07,
                                                            -1.490116E-07,
                                                            -0.3843211
                                                        ],
                                                        "size": [
                                                            0.5763747,
                                                            0.5852659,
                                                            2.36084
                                                        ]
                                                    }
                                                ],
                                                "isTrigger": false,
                                                "linearFactor": [
                                                    0,
                                                    0,
                                                    0
                                                ],
                                                "angularFactor": [
                                                    0,
                                                    0,
                                                    0
                                                ]
                                            }
                                        ],
                                        "child": []
                                    },
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 271,
                                        "props": {
                                            "name": "ban",
                                            "active": true,
                                            "isStatic": false,
                                            "layer": 0,
                                            "position": [
                                                -0.8,
                                                0.766,
                                                0
                                            ],
                                            "rotation": [
                                                0,
                                                0,
                                                1,
                                                0
                                            ],
                                            "scale": [
                                                2.5,
                                                0.3,
                                                2.2
                                            ],
                                            "meshPath": "../../3d/Conventional/Library/unity default resources-Cube.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_5.lmat"
                                                }
                                            ]
                                        },
                                        "components": [
                                            {
                                                "type": "Rigidbody3D",
                                                "mass": 25,
                                                "isKinematic": false,
                                                "restitution": 0,
                                                "friction": 0.5,
                                                "rollingFriction": 0,
                                                "linearDamping": 0,
                                                "angularDamping": 0.05,
                                                "overrideGravity": false,
                                                "gravity": [
                                                    0,
                                                    0,
                                                    0
                                                ],
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
                                                            1,
                                                            1
                                                        ]
                                                    }
                                                ],
                                                "isTrigger": false,
                                                "linearFactor": [
                                                    1,
                                                    1,
                                                    1
                                                ],
                                                "angularFactor": [
                                                    1,
                                                    1,
                                                    1
                                                ]
                                            }
                                        ],
                                        "child": []
                                    }
                                ]
                            },
                            {
                                "type": "Sprite3D",
                                "instanceID": 272,
                                "props": {
                                    "name": "ban_hdb2",
                                    "active": true,
                                    "isStatic": false,
                                    "layer": 0,
                                    "position": [
                                        -136.54,
                                        -3.91,
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
                                        "instanceID": 273,
                                        "props": {
                                            "name": "body",
                                            "active": true,
                                            "isStatic": false,
                                            "layer": 0,
                                            "position": [
                                                0.491,
                                                0.769,
                                                0.387
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
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Cylinder523-Cylinder523_0.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_8.lmat"
                                                }
                                            ]
                                        },
                                        "components": [
                                            {
                                                "type": "Rigidbody3D",
                                                "mass": 1,
                                                "isKinematic": false,
                                                "restitution": 0,
                                                "friction": 0.5,
                                                "rollingFriction": 0,
                                                "linearDamping": 0,
                                                "angularDamping": 0.05,
                                                "overrideGravity": true,
                                                "gravity": [
                                                    0,
                                                    0,
                                                    0
                                                ],
                                                "shapes": [
                                                    {
                                                        "type": "BoxColliderShape",
                                                        "center": [
                                                            2.533197E-07,
                                                            -1.490116E-07,
                                                            -0.3843211
                                                        ],
                                                        "size": [
                                                            0.5763747,
                                                            0.5852659,
                                                            2.36084
                                                        ]
                                                    }
                                                ],
                                                "isTrigger": false,
                                                "linearFactor": [
                                                    0,
                                                    0,
                                                    0
                                                ],
                                                "angularFactor": [
                                                    0,
                                                    0,
                                                    0
                                                ]
                                            }
                                        ],
                                        "child": []
                                    },
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 274,
                                        "props": {
                                            "name": "ban",
                                            "active": true,
                                            "isStatic": false,
                                            "layer": 0,
                                            "position": [
                                                -0.8,
                                                0.766,
                                                0
                                            ],
                                            "rotation": [
                                                0,
                                                0,
                                                1,
                                                0
                                            ],
                                            "scale": [
                                                2.5,
                                                0.3,
                                                2.2
                                            ],
                                            "meshPath": "../../3d/Conventional/Library/unity default resources-Cube.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_5.lmat"
                                                }
                                            ]
                                        },
                                        "components": [
                                            {
                                                "type": "Rigidbody3D",
                                                "mass": 25,
                                                "isKinematic": false,
                                                "restitution": 0,
                                                "friction": 0.5,
                                                "rollingFriction": 0,
                                                "linearDamping": 0,
                                                "angularDamping": 0.05,
                                                "overrideGravity": false,
                                                "gravity": [
                                                    0,
                                                    0,
                                                    0
                                                ],
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
                                                            1,
                                                            1
                                                        ]
                                                    }
                                                ],
                                                "isTrigger": false,
                                                "linearFactor": [
                                                    1,
                                                    1,
                                                    1
                                                ],
                                                "angularFactor": [
                                                    1,
                                                    1,
                                                    1
                                                ]
                                            }
                                        ],
                                        "child": []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "Sprite3D",
                        "instanceID": 275,
                        "props": {
                            "name": "STATIC",
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
                                1,
                                1
                            ]
                        },
                        "components": [],
                        "child": []
                    }
                ]
            },
            {
                "type": "Sprite3D",
                "instanceID": 276,
                "props": {
                    "name": "Step8",
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
                    ]
                },
                "components": [],
                "child": [
                    {
                        "type": "Sprite3D",
                        "instanceID": 277,
                        "props": {
                            "name": "CUSTOM",
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
                                "type": "Sprite3D",
                                "instanceID": 278,
                                "props": {
                                    "name": "win_pos",
                                    "active": true,
                                    "isStatic": false,
                                    "layer": 0,
                                    "position": [
                                        -174.29,
                                        -16.176,
                                        -0.77
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        1.2,
                                        1.2,
                                        1.2
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
                                                    -0.03728485,
                                                    0.8015728,
                                                    0
                                                ],
                                                "size": [
                                                    1.894791,
                                                    1.29826,
                                                    1
                                                ]
                                            }
                                        ],
                                        "isTrigger": true
                                    }
                                ],
                                "child": [
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 279,
                                        "props": {
                                            "name": "Cylinder198_0",
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
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Cylinder198-Cylinder198_0.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_8.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 280,
                                        "props": {
                                            "name": "Cylinder198_1",
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
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Cylinder198-Cylinder198_1.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_2.lmat"
                                                }
                                            ]
                                        },
                                        "components": [],
                                        "child": []
                                    },
                                    {
                                        "type": "Sprite3D",
                                        "instanceID": 281,
                                        "props": {
                                            "name": "GameObject",
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
                                                            0.00775528,
                                                            0.04481828,
                                                            -0.01272202
                                                        ],
                                                        "size": [
                                                            2.101311,
                                                            0.08825755,
                                                            2.094177
                                                        ]
                                                    }
                                                ],
                                                "isTrigger": false
                                            }
                                        ],
                                        "child": []
                                    },
                                    {
                                        "type": "Sprite3D",
                                        "instanceID": 282,
                                        "props": {
                                            "name": "GameObject (1)",
                                            "active": true,
                                            "isStatic": false,
                                            "layer": 0,
                                            "position": [
                                                -1.345,
                                                0.24,
                                                0
                                            ],
                                            "rotation": [
                                                0,
                                                0,
                                                0.2535891,
                                                -0.967312
                                            ],
                                            "scale": [
                                                1,
                                                1,
                                                1
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
                                                            1.99164E-09,
                                                            0.04481751,
                                                            0.004241943
                                                        ],
                                                        "size": [
                                                            1.1638,
                                                            0.08825755,
                                                            3.603973
                                                        ]
                                                    }
                                                ],
                                                "isTrigger": false
                                            }
                                        ],
                                        "child": []
                                    },
                                    {
                                        "type": "Sprite3D",
                                        "instanceID": 283,
                                        "props": {
                                            "name": "GameObject (2)",
                                            "active": true,
                                            "isStatic": false,
                                            "layer": 0,
                                            "position": [
                                                1.33,
                                                0.221,
                                                0
                                            ],
                                            "rotation": [
                                                0,
                                                0,
                                                -0.2535891,
                                                -0.967312
                                            ],
                                            "scale": [
                                                1,
                                                1,
                                                1
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
                                                            -1.99164E-09,
                                                            0.04481751,
                                                            0.004243851
                                                        ],
                                                        "size": [
                                                            1.1638,
                                                            0.08825755,
                                                            3.60397
                                                        ]
                                                    }
                                                ],
                                                "isTrigger": false
                                            }
                                        ],
                                        "child": []
                                    }
                                ]
                            },
                            {
                                "type": "Sprite3D",
                                "instanceID": 284,
                                "props": {
                                    "name": "ban_hdb2",
                                    "active": true,
                                    "isStatic": false,
                                    "layer": 0,
                                    "position": [
                                        -170.133,
                                        -8.74,
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
                                        "instanceID": 285,
                                        "props": {
                                            "name": "body",
                                            "active": true,
                                            "isStatic": false,
                                            "layer": 0,
                                            "position": [
                                                0.491,
                                                0.769,
                                                0.387
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
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Cylinder523-Cylinder523_0.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_8.lmat"
                                                }
                                            ]
                                        },
                                        "components": [
                                            {
                                                "type": "Rigidbody3D",
                                                "mass": 1,
                                                "isKinematic": false,
                                                "restitution": 0,
                                                "friction": 0.5,
                                                "rollingFriction": 0,
                                                "linearDamping": 0,
                                                "angularDamping": 0.05,
                                                "overrideGravity": true,
                                                "gravity": [
                                                    0,
                                                    0,
                                                    0
                                                ],
                                                "shapes": [
                                                    {
                                                        "type": "BoxColliderShape",
                                                        "center": [
                                                            2.533197E-07,
                                                            -1.490116E-07,
                                                            -0.3843211
                                                        ],
                                                        "size": [
                                                            0.5763747,
                                                            0.5852659,
                                                            2.36084
                                                        ]
                                                    }
                                                ],
                                                "isTrigger": false,
                                                "linearFactor": [
                                                    0,
                                                    0,
                                                    0
                                                ],
                                                "angularFactor": [
                                                    0,
                                                    0,
                                                    0
                                                ]
                                            }
                                        ],
                                        "child": []
                                    },
                                    {
                                        "type": "MeshSprite3D",
                                        "instanceID": 286,
                                        "props": {
                                            "name": "ban",
                                            "active": true,
                                            "isStatic": false,
                                            "layer": 0,
                                            "position": [
                                                -0.8,
                                                0.766,
                                                0
                                            ],
                                            "rotation": [
                                                0,
                                                0,
                                                1,
                                                0
                                            ],
                                            "scale": [
                                                2.5,
                                                0.3,
                                                2.2
                                            ],
                                            "meshPath": "../../3d/Conventional/Library/unity default resources-Cube.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_5.lmat"
                                                }
                                            ]
                                        },
                                        "components": [
                                            {
                                                "type": "Rigidbody3D",
                                                "mass": 25,
                                                "isKinematic": false,
                                                "restitution": 0,
                                                "friction": 0.5,
                                                "rollingFriction": 0,
                                                "linearDamping": 0,
                                                "angularDamping": 0.05,
                                                "overrideGravity": false,
                                                "gravity": [
                                                    0,
                                                    0,
                                                    0
                                                ],
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
                                                            1,
                                                            1
                                                        ]
                                                    }
                                                ],
                                                "isTrigger": false,
                                                "linearFactor": [
                                                    1,
                                                    1,
                                                    1
                                                ],
                                                "angularFactor": [
                                                    1,
                                                    1,
                                                    1
                                                ]
                                            }
                                        ],
                                        "child": []
                                    }
                                ]
                            },
                            {
                                "type": "Sprite3D",
                                "instanceID": 287,
                                "props": {
                                    "name": "ban_hdb4",
                                    "active": true,
                                    "isStatic": false,
                                    "layer": 0,
                                    "position": [
                                        -172.21,
                                        -10.85,
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
                                        "instanceID": 288,
                                        "props": {
                                            "name": "body",
                                            "active": true,
                                            "isStatic": false,
                                            "layer": 0,
                                            "position": [
                                                0.491,
                                                0.769,
                                                0.387
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
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Cylinder523-Cylinder523_0.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_8.lmat"
                                                }
                                            ]
                                        },
                                        "components": [
                                            {
                                                "type": "Rigidbody3D",
                                                "mass": 1,
                                                "isKinematic": false,
                                                "restitution": 0,
                                                "friction": 0.5,
                                                "rollingFriction": 0,
                                                "linearDamping": 0,
                                                "angularDamping": 0.05,
                                                "overrideGravity": true,
                                                "gravity": [
                                                    0,
                                                    0,
                                                    0
                                                ],
                                                "shapes": [
                                                    {
                                                        "type": "BoxColliderShape",
                                                        "center": [
                                                            2.533197E-07,
                                                            -1.490116E-07,
                                                            -0.3843211
                                                        ],
                                                        "size": [
                                                            0.5763747,
                                                            0.5852659,
                                                            2.36084
                                                        ]
                                                    }
                                                ],
                                                "isTrigger": false,
                                                "linearFactor": [
                                                    0,
                                                    0,
                                                    0
                                                ],
                                                "angularFactor": [
                                                    0,
                                                    0,
                                                    0
                                                ]
                                            }
                                        ],
                                        "child": []
                                    },
                                    {
                                        "type": "Sprite3D",
                                        "instanceID": 289,
                                        "props": {
                                            "name": "ban",
                                            "active": true,
                                            "isStatic": false,
                                            "layer": 0,
                                            "position": [
                                                -0.8,
                                                0.905,
                                                0
                                            ],
                                            "rotation": [
                                                0,
                                                0,
                                                1,
                                                0
                                            ],
                                            "scale": [
                                                1.2,
                                                0.6,
                                                1.4
                                            ]
                                        },
                                        "components": [
                                            {
                                                "type": "Rigidbody3D",
                                                "mass": 30,
                                                "isKinematic": false,
                                                "restitution": 0,
                                                "friction": 0.5,
                                                "rollingFriction": 0,
                                                "linearDamping": 0,
                                                "angularDamping": 0.05,
                                                "overrideGravity": false,
                                                "gravity": [
                                                    0,
                                                    0,
                                                    0
                                                ],
                                                "shapes": [
                                                    {
                                                        "type": "BoxColliderShape",
                                                        "center": [
                                                            -0.002322515,
                                                            0.2380538,
                                                            0
                                                        ],
                                                        "size": [
                                                            1.998664,
                                                            0.5238923,
                                                            1
                                                        ]
                                                    }
                                                ],
                                                "isTrigger": false,
                                                "linearFactor": [
                                                    1,
                                                    1,
                                                    1
                                                ],
                                                "angularFactor": [
                                                    1,
                                                    1,
                                                    1
                                                ]
                                            }
                                        ],
                                        "child": [
                                            {
                                                "type": "MeshSprite3D",
                                                "instanceID": 290,
                                                "props": {
                                                    "name": "Box806_0",
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
                                                    "meshPath": "../../3d/Conventional/Assets/Mesh/Box806-Box806_0.lm",
                                                    "enableRender": true,
                                                    "receiveShadows": true,
                                                    "castShadow": true,
                                                    "materials": [
                                                        {
                                                            "path": "../../3d/Conventional/Assets/Materials/flag.lmat"
                                                        }
                                                    ]
                                                },
                                                "components": [],
                                                "child": []
                                            },
                                            {
                                                "type": "MeshSprite3D",
                                                "instanceID": 291,
                                                "props": {
                                                    "name": "Box806_1",
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
                                                    "meshPath": "../../3d/Conventional/Assets/Mesh/Box806-Box806_1.lm",
                                                    "enableRender": true,
                                                    "receiveShadows": true,
                                                    "castShadow": true,
                                                    "materials": [
                                                        {
                                                            "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_3.lmat"
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
                                "instanceID": 292,
                                "props": {
                                    "name": "ban_hdb4",
                                    "active": true,
                                    "isStatic": false,
                                    "layer": 0,
                                    "position": [
                                        -176.33,
                                        -9.34,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        1,
                                        0
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
                                        "instanceID": 293,
                                        "props": {
                                            "name": "body",
                                            "active": true,
                                            "isStatic": false,
                                            "layer": 0,
                                            "position": [
                                                0.491,
                                                0.769,
                                                0.387
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
                                            "meshPath": "../../3d/Conventional/Assets/Mesh/Cylinder523-Cylinder523_0.lm",
                                            "enableRender": true,
                                            "receiveShadows": true,
                                            "castShadow": true,
                                            "materials": [
                                                {
                                                    "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_8.lmat"
                                                }
                                            ]
                                        },
                                        "components": [
                                            {
                                                "type": "Rigidbody3D",
                                                "mass": 1,
                                                "isKinematic": false,
                                                "restitution": 0,
                                                "friction": 0.5,
                                                "rollingFriction": 0,
                                                "linearDamping": 0,
                                                "angularDamping": 0.05,
                                                "overrideGravity": true,
                                                "gravity": [
                                                    0,
                                                    0,
                                                    0
                                                ],
                                                "shapes": [
                                                    {
                                                        "type": "BoxColliderShape",
                                                        "center": [
                                                            2.533197E-07,
                                                            -1.490116E-07,
                                                            -0.3843211
                                                        ],
                                                        "size": [
                                                            0.5763747,
                                                            0.5852659,
                                                            2.36084
                                                        ]
                                                    }
                                                ],
                                                "isTrigger": false,
                                                "linearFactor": [
                                                    0,
                                                    0,
                                                    0
                                                ],
                                                "angularFactor": [
                                                    0,
                                                    0,
                                                    0
                                                ]
                                            }
                                        ],
                                        "child": []
                                    },
                                    {
                                        "type": "Sprite3D",
                                        "instanceID": 294,
                                        "props": {
                                            "name": "ban",
                                            "active": true,
                                            "isStatic": false,
                                            "layer": 0,
                                            "position": [
                                                -0.8,
                                                0.905,
                                                0
                                            ],
                                            "rotation": [
                                                0,
                                                0,
                                                1,
                                                0
                                            ],
                                            "scale": [
                                                1.2,
                                                0.6,
                                                1.4
                                            ]
                                        },
                                        "components": [
                                            {
                                                "type": "Rigidbody3D",
                                                "mass": 30,
                                                "isKinematic": false,
                                                "restitution": 0,
                                                "friction": 0.5,
                                                "rollingFriction": 0,
                                                "linearDamping": 0,
                                                "angularDamping": 0.05,
                                                "overrideGravity": false,
                                                "gravity": [
                                                    0,
                                                    0,
                                                    0
                                                ],
                                                "shapes": [
                                                    {
                                                        "type": "BoxColliderShape",
                                                        "center": [
                                                            -0.002322515,
                                                            0.2380538,
                                                            0
                                                        ],
                                                        "size": [
                                                            1.998664,
                                                            0.5238923,
                                                            1
                                                        ]
                                                    }
                                                ],
                                                "isTrigger": false,
                                                "linearFactor": [
                                                    1,
                                                    1,
                                                    1
                                                ],
                                                "angularFactor": [
                                                    1,
                                                    1,
                                                    1
                                                ]
                                            }
                                        ],
                                        "child": [
                                            {
                                                "type": "MeshSprite3D",
                                                "instanceID": 295,
                                                "props": {
                                                    "name": "Box806_0",
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
                                                    "meshPath": "../../3d/Conventional/Assets/Mesh/Box806-Box806_0.lm",
                                                    "enableRender": true,
                                                    "receiveShadows": true,
                                                    "castShadow": true,
                                                    "materials": [
                                                        {
                                                            "path": "../../3d/Conventional/Assets/Materials/flag.lmat"
                                                        }
                                                    ]
                                                },
                                                "components": [],
                                                "child": []
                                            },
                                            {
                                                "type": "MeshSprite3D",
                                                "instanceID": 296,
                                                "props": {
                                                    "name": "Box806_1",
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
                                                    "meshPath": "../../3d/Conventional/Assets/Mesh/Box806-Box806_1.lm",
                                                    "enableRender": true,
                                                    "receiveShadows": true,
                                                    "castShadow": true,
                                                    "materials": [
                                                        {
                                                            "path": "../../3d/Conventional/Assets/Materials/T_Obstacles_3.lmat"
                                                        }
                                                    ]
                                                },
                                                "components": [],
                                                "child": []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "Sprite3D",
                        "instanceID": 297,
                        "props": {
                            "name": "STATIC",
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
                                1,
                                1
                            ]
                        },
                        "components": [],
                        "child": [
                            {
                                "type": "MeshSprite3D",
                                "instanceID": 298,
                                "props": {
                                    "name": "yuanpai",
                                    "active": true,
                                    "isStatic": true,
                                    "layer": 0,
                                    "position": [
                                        -174.317,
                                        -12.4,
                                        1.46
                                    ],
                                    "rotation": [
                                        0.7071068,
                                        0,
                                        0,
                                        -0.7071068
                                    ],
                                    "scale": [
                                        3,
                                        3,
                                        3
                                    ],
                                    "meshPath": "../../3d/Conventional/Assets/Mesh/yuanpai-yuanbiao_pCylinder1.lm",
                                    "enableRender": true,
                                    "receiveShadows": true,
                                    "castShadow": true,
                                    "materials": [
                                        {
                                            "path": "../../3d/Conventional/Assets/tietu_new/Materials/end.lmat"
                                        }
                                    ]
                                },
                                "components": [],
                                "child": []
                            },
                            {
                                "type": "MeshSprite3D",
                                "instanceID": 299,
                                "props": {
                                    "name": "floor (1)",
                                    "active": true,
                                    "isStatic": true,
                                    "layer": 0,
                                    "position": [
                                        -174.32,
                                        -16.91,
                                        -0.791
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        4.6083,
                                        1.452,
                                        4.4625
                                    ],
                                    "meshPath": "../../3d/Conventional/Library/unity default resources-Cube.lm",
                                    "enableRender": true,
                                    "receiveShadows": true,
                                    "castShadow": true,
                                    "materials": [
                                        {
                                            "path": "../../3d/Conventional/Assets/tietu_new/Materials/wood.lmat"
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
                                                    1,
                                                    1
                                                ]
                                            }
                                        ],
                                        "isTrigger": false
                                    }
                                ],
                                "child": []
                            },
                            {
                                "type": "MeshSprite3D",
                                "instanceID": 300,
                                "props": {
                                    "name": "floor (2)",
                                    "active": true,
                                    "isStatic": true,
                                    "layer": 0,
                                    "position": [
                                        -180.977,
                                        -16.104,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        8.783986,
                                        3.044,
                                        3
                                    ],
                                    "meshPath": "../../3d/Conventional/Library/unity default resources-Cube.lm",
                                    "enableRender": true,
                                    "receiveShadows": true,
                                    "castShadow": true,
                                    "materials": [
                                        {
                                            "path": "../../3d/Conventional/Assets/tietu_new/Materials/wood.lmat"
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
                                                    1,
                                                    1
                                                ]
                                            }
                                        ],
                                        "isTrigger": false
                                    }
                                ],
                                "child": []
                            },
                            {
                                "type": "MeshSprite3D",
                                "instanceID": 301,
                                "props": {
                                    "name": "floor (3)",
                                    "active": true,
                                    "isStatic": true,
                                    "layer": 0,
                                    "position": [
                                        -167.627,
                                        -16.104,
                                        0
                                    ],
                                    "rotation": [
                                        0,
                                        0,
                                        0,
                                        -1
                                    ],
                                    "scale": [
                                        8.783986,
                                        3.044,
                                        3
                                    ],
                                    "meshPath": "../../3d/Conventional/Library/unity default resources-Cube.lm",
                                    "enableRender": true,
                                    "receiveShadows": true,
                                    "castShadow": true,
                                    "materials": [
                                        {
                                            "path": "../../3d/Conventional/Assets/tietu_new/Materials/wood.lmat"
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
                                                    1,
                                                    1
                                                ]
                                            }
                                        ],
                                        "isTrigger": false
                                    }
                                ],
                                "child": []
                            }
                        ]
                    }
                ]
            },
            {
                "type": "MeshSprite3D",
                "instanceID": 302,
                "props": {
                    "name": "logo",
                    "active": true,
                    "isStatic": false,
                    "layer": 0,
                    "position": [
                        -3.44,
                        9.43,
                        1.42
                    ],
                    "rotation": [
                        0,
                        0.7071068,
                        -0.7071068,
                        0
                    ],
                    "scale": [
                        1,
                        1,
                        1
                    ],
                    "meshPath": "../../3d/Conventional/Library/unity default resources-Plane.lm",
                    "enableRender": true,
                    "receiveShadows": true,
                    "castShadow": false,
                    "materials": [
                        {
                            "path": "../../3d/Conventional/Assets/tietu_new/Materials/logo.lmat"
                        }
                    ]
                },
                "components": [],
                "child": []
            }
        ]
    }
}