{
	"version": "LAYASCENE3D:02",
	"data": {
		"type": "Scene3D",
		"props": {
			"name": "game",
			"ambientColor": [
				0.7,
				0.7,
				0.7
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
				"instanceID": 0,
				"props": {
					"name": "Main Camera",
					"active": true,
					"isStatic": false,
					"layer": 0,
					"position": [
						0,
						2.5,
						-20.8
					],
					"rotation": [
						0,
						0.9990483,
						0.04361941,
						0
					],
					"scale": [
						1,
						1,
						1
					],
					"clearFlag": 1,
					"orthographic": false,
					"orthographicVerticalSize": 10,
					"fieldOfView": 45,
					"enableHDR": false,
					"nearPlane": 0.3,
					"farPlane": 100,
					"viewport": [
						0,
						0,
						1,
						1
					],
					"clearColor": [
						0.3019608,
						0.8489321,
						0.8980392,
						1
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
						13.64,
						3,
						0
					],
					"rotation": [
						0,
						0.9659258,
						0.2588191,
						0
					],
					"scale": [
						1,
						1,
						1
					],
					"intensity": 0.5,
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
				"type": "Sprite3D",
				"instanceID": 2,
				"props": {
					"name": "cj",
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
						"instanceID": 3,
						"props": {
							"name": "box_01 (1)",
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
								0.7071068,
								0.7071068,
								0
							],
							"scale": [
								1,
								1,
								1
							],
							"meshPath": "Assets/Arts/model/box_01-Box01.lm",
							"enableRender": true,
							"materials": [
								{
									"path": "Assets/Arts/Materials/Materials/cj_01.lmat"
								}
							]
						},
						"components": [],
						"child": []
					},
					{
						"type": "MeshSprite3D",
						"instanceID": 4,
						"props": {
							"name": "box_01",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								0,
								0,
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
							"meshPath": "Assets/Arts/model/box_01-Box01.lm",
							"enableRender": true,
							"materials": [
								{
									"path": "Assets/Arts/Materials/Materials/cj_01.lmat"
								}
							]
						},
						"components": [],
						"child": []
					},
					{
						"type": "MeshSprite3D",
						"instanceID": 5,
						"props": {
							"name": "box_03 (3)",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								-3,
								2.5,
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
							"meshPath": "Assets/Arts/model/box_03-Object004.lm",
							"enableRender": true,
							"materials": [
								{
									"path": "Assets/Arts/Materials/Materials/cj_01.lmat"
								}
							]
						},
						"components": [],
						"child": []
					},
					{
						"type": "MeshSprite3D",
						"instanceID": 6,
						"props": {
							"name": "box_03 (2)",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								-3,
								0,
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
							"meshPath": "Assets/Arts/model/box_03-Object004.lm",
							"enableRender": true,
							"materials": [
								{
									"path": "Assets/Arts/Materials/Materials/cj_01.lmat"
								}
							]
						},
						"components": [],
						"child": []
					},
					{
						"type": "MeshSprite3D",
						"instanceID": 7,
						"props": {
							"name": "box_03",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								3,
								0,
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
							"meshPath": "Assets/Arts/model/box_03-Object004.lm",
							"enableRender": true,
							"materials": [
								{
									"path": "Assets/Arts/Materials/Materials/cj_01.lmat"
								}
							]
						},
						"components": [],
						"child": []
					},
					{
						"type": "MeshSprite3D",
						"instanceID": 8,
						"props": {
							"name": "box_02",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								0,
								-4.78,
								0.07
							],
							"rotation": [
								0.7071068,
								0,
								0,
								-0.7071068
							],
							"scale": [
								0.56131,
								1,
								1
							],
							"meshPath": "Assets/Arts/model/box_02-Object005.lm",
							"enableRender": true,
							"materials": [
								{
									"path": "Assets/Arts/Materials/Materials/cj_01.lmat"
								}
							]
						},
						"components": [],
						"child": []
					},
					{
						"type": "MeshSprite3D",
						"instanceID": 9,
						"props": {
							"name": "box_03 (1)",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								3,
								2.5,
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
							"meshPath": "Assets/Arts/model/box_03-Object004.lm",
							"enableRender": true,
							"materials": [
								{
									"path": "Assets/Arts/Materials/Materials/cj_01.lmat"
								}
							]
						},
						"components": [],
						"child": []
					},
					{
						"type": "MeshSprite3D",
						"instanceID": 10,
						"props": {
							"name": "box_03 (4)",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								3.03,
								-2.5,
								0.05
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
							"meshPath": "Assets/Arts/model/box_03-Object004.lm",
							"enableRender": true,
							"materials": [
								{
									"path": "Assets/Arts/Materials/Materials/cj_01.lmat"
								}
							]
						},
						"components": [],
						"child": []
					},
					{
						"type": "MeshSprite3D",
						"instanceID": 11,
						"props": {
							"name": "cheng_02",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								1.03,
								-3.64,
								-0.1
							],
							"rotation": [
								0.7071068,
								0,
								0,
								-0.7071068
							],
							"scale": [
								1.4757,
								1.4757,
								1.4757
							],
							"meshPath": "Assets/Arts/model/cheng_02-Object006.lm",
							"enableRender": true,
							"materials": [
								{
									"path": "Assets/Arts/Materials/Materials/tianping.lmat"
								}
							]
						},
						"components": [],
						"child": []
					},
					{
						"type": "MeshSprite3D",
						"instanceID": 12,
						"props": {
							"name": "lagan",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								0,
								-5.065,
								-1.32
							],
							"rotation": [
								0,
								0.7071068,
								0.7071068,
								0
							],
							"scale": [
								1,
								1,
								1
							],
							"meshPath": "Assets/Arts/model/lagan-Object002.lm",
							"enableRender": true,
							"materials": [
								{
									"path": "Assets/Arts/Materials/Materials/tianping.lmat"
								}
							]
						},
						"components": [],
						"child": []
					},
					{
						"type": "MeshSprite3D",
						"instanceID": 13,
						"props": {
							"name": "cheng_02 (1)",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								-1.04,
								-3.64,
								-0.1
							],
							"rotation": [
								0.7071068,
								0,
								0,
								-0.7071068
							],
							"scale": [
								1.4757,
								1.4757,
								1.4757
							],
							"meshPath": "Assets/Arts/model/cheng_02-Object006.lm",
							"enableRender": true,
							"materials": [
								{
									"path": "Assets/Arts/Materials/Materials/tianping.lmat"
								}
							]
						},
						"components": [],
						"child": []
					},
					{
						"type": "MeshSprite3D",
						"instanceID": 14,
						"props": {
							"name": "yun",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								-0.8,
								8.53,
								7.4
							],
							"rotation": [
								0.7071068,
								0,
								0,
								-0.7071068
							],
							"scale": [
								0.5944179,
								0.5944181,
								0.5944181
							],
							"meshPath": "Assets/Arts/model/yun-GeoSphere004.lm",
							"enableRender": true,
							"materials": [
								{
									"path": "Assets/Arts/Materials/Materials/yun.lmat"
								}
							]
						},
						"components": [],
						"child": []
					},
					{
						"type": "MeshSprite3D",
						"instanceID": 15,
						"props": {
							"name": "yun (1)",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								-3.5,
								4.88,
								7.4
							],
							"rotation": [
								0.7071068,
								0,
								0,
								-0.7071068
							],
							"scale": [
								0.6520023,
								0.5173802,
								0.5173802
							],
							"meshPath": "Assets/Arts/model/yun-GeoSphere004.lm",
							"enableRender": true,
							"materials": [
								{
									"path": "Assets/Arts/Materials/Materials/yun.lmat"
								}
							]
						},
						"components": [],
						"child": []
					},
					{
						"type": "MeshSprite3D",
						"instanceID": 16,
						"props": {
							"name": "yun (2)",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								3.2,
								5.5,
								4.1
							],
							"rotation": [
								0.7071068,
								0,
								0,
								-0.7071068
							],
							"scale": [
								0.7025503,
								0.7025505,
								0.7025505
							],
							"meshPath": "Assets/Arts/model/yun-GeoSphere004.lm",
							"enableRender": true,
							"materials": [
								{
									"path": "Assets/Arts/Materials/Materials/yun.lmat"
								}
							]
						},
						"components": [],
						"child": []
					},
					{
						"type": "MeshSprite3D",
						"instanceID": 17,
						"props": {
							"name": "bj",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								0,
								2.25,
								13.6
							],
							"rotation": [
								0,
								1,
								0,
								0
							],
							"scale": [
								25.32528,
								25.32528,
								25.32528
							],
							"meshPath": "Assets/Arts/model/bj-bj.lm",
							"enableRender": true,
							"materials": [
								{
									"path": "Assets/Arts/Materials/Materials/bj.lmat"
								}
							]
						},
						"components": [],
						"child": []
					},
					{
						"type": "MeshSprite3D",
						"instanceID": 18,
						"props": {
							"name": "kedu",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								0,
								1.5,
								-1.466
							],
							"rotation": [
								0.7071068,
								0,
								0,
								-0.7071068
							],
							"scale": [
								0.8458942,
								0.02049725,
								-0.004459873
							],
							"meshPath": "Assets/Arts/model/box_02-Object005.lm",
							"enableRender": true,
							"materials": [
								{
									"path": "Assets/Arts/Materials/Materials/Bear Brown 1.lmat"
								}
							]
						},
						"components": [],
						"child": []
					},
					{
						"type": "MeshSprite3D",
						"instanceID": 19,
						"props": {
							"name": "kedu (1)",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								0,
								1,
								-1.466
							],
							"rotation": [
								0.7071068,
								0,
								0,
								-0.7071068
							],
							"scale": [
								0.8458942,
								0.02049725,
								-0.004459873
							],
							"meshPath": "Assets/Arts/model/box_02-Object005.lm",
							"enableRender": true,
							"materials": [
								{
									"path": "Assets/Arts/Materials/Materials/Bear Brown 1.lmat"
								}
							]
						},
						"components": [],
						"child": []
					},
					{
						"type": "MeshSprite3D",
						"instanceID": 20,
						"props": {
							"name": "kedu (2)",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								0,
								0.5,
								-1.466
							],
							"rotation": [
								0.7071068,
								0,
								0,
								-0.7071068
							],
							"scale": [
								0.8458942,
								0.02049725,
								-0.004459873
							],
							"meshPath": "Assets/Arts/model/box_02-Object005.lm",
							"enableRender": true,
							"materials": [
								{
									"path": "Assets/Arts/Materials/Materials/Bear Brown 1.lmat"
								}
							]
						},
						"components": [],
						"child": []
					},
					{
						"type": "MeshSprite3D",
						"instanceID": 21,
						"props": {
							"name": "kedu (3)",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								0,
								0,
								-1.466
							],
							"rotation": [
								0.7071068,
								0,
								0,
								-0.7071068
							],
							"scale": [
								0.8458942,
								0.02049725,
								-0.004459873
							],
							"meshPath": "Assets/Arts/model/box_02-Object005.lm",
							"enableRender": true,
							"materials": [
								{
									"path": "Assets/Arts/Materials/Materials/Bear Brown 1.lmat"
								}
							]
						},
						"components": [],
						"child": []
					},
					{
						"type": "MeshSprite3D",
						"instanceID": 22,
						"props": {
							"name": "kedu (4)",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								0,
								2,
								-1.466
							],
							"rotation": [
								0.7071068,
								0,
								0,
								-0.7071068
							],
							"scale": [
								0.8458942,
								0.02049725,
								-0.004459873
							],
							"meshPath": "Assets/Arts/model/box_02-Object005.lm",
							"enableRender": true,
							"materials": [
								{
									"path": "Assets/Arts/Materials/Materials/Bear Brown 1.lmat"
								}
							]
						},
						"components": [],
						"child": []
					},
					{
						"type": "MeshSprite3D",
						"instanceID": 23,
						"props": {
							"name": "kedu (5)",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								0,
								2.5,
								-1.466
							],
							"rotation": [
								0.7071068,
								0,
								0,
								-0.7071068
							],
							"scale": [
								0.8458942,
								0.02049725,
								-0.004459873
							],
							"meshPath": "Assets/Arts/model/box_02-Object005.lm",
							"enableRender": true,
							"materials": [
								{
									"path": "Assets/Arts/Materials/Materials/Bear Brown 1.lmat"
								}
							]
						},
						"components": [],
						"child": []
					},
					{
						"type": "MeshSprite3D",
						"instanceID": 24,
						"props": {
							"name": "kedu (6)",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								0,
								-0.5,
								-1.466
							],
							"rotation": [
								0.7071068,
								0,
								0,
								-0.7071068
							],
							"scale": [
								0.8458942,
								0.02049725,
								-0.004459873
							],
							"meshPath": "Assets/Arts/model/box_02-Object005.lm",
							"enableRender": true,
							"materials": [
								{
									"path": "Assets/Arts/Materials/Materials/Bear Brown 1.lmat"
								}
							]
						},
						"components": [],
						"child": []
					},
					{
						"type": "MeshSprite3D",
						"instanceID": 25,
						"props": {
							"name": "kedu (7)",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								0,
								-1,
								-1.466
							],
							"rotation": [
								0.7071068,
								0,
								0,
								-0.7071068
							],
							"scale": [
								0.8458942,
								0.02049725,
								-0.004459873
							],
							"meshPath": "Assets/Arts/model/box_02-Object005.lm",
							"enableRender": true,
							"materials": [
								{
									"path": "Assets/Arts/Materials/Materials/Bear Brown 1.lmat"
								}
							]
						},
						"components": [],
						"child": []
					},
					{
						"type": "MeshSprite3D",
						"instanceID": 26,
						"props": {
							"name": "kedu (8)",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								0,
								-1.5,
								-1.466
							],
							"rotation": [
								0.7071068,
								0,
								0,
								-0.7071068
							],
							"scale": [
								0.8458942,
								0.02049725,
								-0.004459873
							],
							"meshPath": "Assets/Arts/model/box_02-Object005.lm",
							"enableRender": true,
							"materials": [
								{
									"path": "Assets/Arts/Materials/Materials/Bear Brown 1.lmat"
								}
							]
						},
						"components": [],
						"child": []
					},
					{
						"type": "MeshSprite3D",
						"instanceID": 27,
						"props": {
							"name": "kedu (9)",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								0,
								-2,
								-1.466
							],
							"rotation": [
								0.7071068,
								0,
								0,
								-0.7071068
							],
							"scale": [
								0.8458942,
								0.02049725,
								-0.004459873
							],
							"meshPath": "Assets/Arts/model/box_02-Object005.lm",
							"enableRender": true,
							"materials": [
								{
									"path": "Assets/Arts/Materials/Materials/Bear Brown 1.lmat"
								}
							]
						},
						"components": [],
						"child": []
					},
					{
						"type": "MeshSprite3D",
						"instanceID": 28,
						"props": {
							"name": "kedu (10)",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								0,
								-2.5,
								-1.466
							],
							"rotation": [
								0.7071068,
								0,
								0,
								-0.7071068
							],
							"scale": [
								0.8458942,
								0.02049725,
								-0.004459873
							],
							"meshPath": "Assets/Arts/model/box_02-Object005.lm",
							"enableRender": true,
							"materials": [
								{
									"path": "Assets/Arts/Materials/Materials/Bear Brown 1.lmat"
								}
							]
						},
						"components": [],
						"child": []
					},
					{
						"type": "MeshSprite3D",
						"instanceID": 29,
						"props": {
							"name": "box_03 (5)",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								-3.03,
								-2.5,
								0.05
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
							"meshPath": "Assets/Arts/model/box_03-Object004.lm",
							"enableRender": true,
							"materials": [
								{
									"path": "Assets/Arts/Materials/Materials/cj_01.lmat"
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
				"instanceID": 30,
				"props": {
					"name": "Prefabs",
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
						"instanceID": 31,
						"props": {
							"name": "trap_1",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								0,
								0,
								0
							],
							"rotation": [
								0.6532815,
								-0.270598,
								-0.270598,
								-0.6532815
							],
							"scale": [
								1,
								1,
								1
							],
							"meshPath": "Assets/Arts/model/trap_1-Box009.lm",
							"enableRender": true,
							"materials": [
								{
									"path": "Assets/Arts/Materials/Materials/trap_1.lmat"
								}
							]
						},
						"components": [],
						"child": []
					},
					{
						"type": "Sprite3D",
						"instanceID": 32,
						"props": {
							"name": "fama1_5",
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
											0,
											0,
											0
										],
										"size": [
											0.8,
											0.8,
											0.8
										]
									}
								],
								"isTrigger": false
							}
						],
						"child": [
							{
								"type": "MeshSprite3D",
								"instanceID": 33,
								"props": {
									"name": "shuzi",
									"active": true,
									"isStatic": false,
									"layer": 0,
									"position": [
										0,
										0,
										-0.473
									],
									"rotation": [
										0,
										1,
										0,
										0
									],
									"scale": [
										1,
										1,
										1
									],
									"meshPath": "Assets/Arts/model/shuzi-shuzi.lm",
									"enableRender": true,
									"materials": [
										{
											"path": "Assets/Arts/Materials/Materials/shuzi_5.lmat"
										}
									]
								},
								"components": [],
								"child": []
							},
							{
								"type": "MeshSprite3D",
								"instanceID": 34,
								"props": {
									"name": "fama_1",
									"active": true,
									"isStatic": false,
									"layer": 0,
									"position": [
										0,
										0,
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
									"meshPath": "Assets/Arts/model/fama_1-fama_1.lm",
									"enableRender": true,
									"materials": [
										{
											"path": "Assets/Arts/Materials/Materials/fama.lmat"
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
						"instanceID": 35,
						"props": {
							"name": "trap_3_L",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								0,
								0,
								0
							],
							"rotation": [
								0.5,
								0.5,
								-0.5,
								-0.5
							],
							"scale": [
								1,
								1,
								1
							],
							"meshPath": "Assets/Arts/model/trap_3-jiannv.lm",
							"enableRender": true,
							"materials": [
								{
									"path": "Assets/Arts/Materials/Materials/tianping.lmat"
								}
							]
						},
						"components": [],
						"child": []
					},
					{
						"type": "Sprite3D",
						"instanceID": 36,
						"props": {
							"name": "trap_5_L",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								3.65,
								3.45,
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
								"instanceID": 37,
								"props": {
									"name": "kaiguan_1",
									"active": true,
									"isStatic": false,
									"layer": 0,
									"position": [
										0,
										0,
										0
									],
									"rotation": [
										0.5,
										0.5,
										0.5,
										-0.5
									],
									"scale": [
										0.4310363,
										0.4310363,
										0.4310363
									],
									"meshPath": "Assets/Arts/model/kaiguan-kaiguan_1.lm",
									"enableRender": true,
									"materials": [
										{
											"path": "Assets/Arts/Materials/Materials/kaiguan_2.lmat"
										}
									]
								},
								"components": [],
								"child": []
							},
							{
								"type": "MeshSprite3D",
								"instanceID": 38,
								"props": {
									"name": "kaiguan_2",
									"active": true,
									"isStatic": false,
									"layer": 0,
									"position": [
										0,
										0,
										0
									],
									"rotation": [
										0.5,
										0.5,
										0.5,
										-0.5
									],
									"scale": [
										0.4310363,
										0.4310363,
										0.4310363
									],
									"meshPath": "Assets/Arts/model/kaiguan-kaiguan_2.lm",
									"enableRender": true,
									"materials": [
										{
											"path": "Assets/Arts/Materials/Materials/kaiguan_1.lmat"
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
						"instanceID": 39,
						"props": {
							"name": "trap_5_R",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								1.49,
								3.45,
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
								"instanceID": 40,
								"props": {
									"name": "kaiguan_1",
									"active": true,
									"isStatic": false,
									"layer": 0,
									"position": [
										0,
										0,
										0
									],
									"rotation": [
										0.5,
										-0.5,
										-0.5,
										-0.5
									],
									"scale": [
										0.4310363,
										0.4310363,
										0.4310363
									],
									"meshPath": "Assets/Arts/model/kaiguan-kaiguan_1.lm",
									"enableRender": true,
									"materials": [
										{
											"path": "Assets/Arts/Materials/Materials/kaiguan_2.lmat"
										}
									]
								},
								"components": [],
								"child": []
							},
							{
								"type": "MeshSprite3D",
								"instanceID": 41,
								"props": {
									"name": "kaiguan_2",
									"active": true,
									"isStatic": false,
									"layer": 0,
									"position": [
										0,
										0,
										0
									],
									"rotation": [
										0.5,
										-0.5,
										-0.5,
										-0.5
									],
									"scale": [
										0.4310363,
										0.4310363,
										0.4310363
									],
									"meshPath": "Assets/Arts/model/kaiguan-kaiguan_2.lm",
									"enableRender": true,
									"materials": [
										{
											"path": "Assets/Arts/Materials/Materials/kaiguan_1.lmat"
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
						"instanceID": 42,
						"props": {
							"name": "trap_7",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								-3.55,
								-1.6,
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
								"instanceID": 43,
								"props": {
									"name": "trap_7",
									"active": true,
									"isStatic": false,
									"layer": 0,
									"position": [
										0.09,
										-0.9,
										4.93988E-08
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
									"meshPath": "Assets/Arts/model/trap_7-trap_7.lm",
									"enableRender": true,
									"materials": [
										{
											"path": "Assets/Arts/juese/Animator/Elevator_Lock/New Material 1.lmat"
										}
									]
								},
								"components": [],
								"child": []
							},
							{
								"type": "MeshSprite3D",
								"instanceID": 44,
								"props": {
									"name": "trap_7 1",
									"active": true,
									"isStatic": false,
									"layer": 0,
									"position": [
										0.08999991,
										-0.175648,
										-0.005194573
									],
									"rotation": [
										-1.545431E-08,
										0.7071067,
										-1.545431E-08,
										-0.7071068
									],
									"scale": [
										1,
										1,
										1
									],
									"meshPath": "Assets/Arts/model/trap_7-trap_7-copy.lm",
									"enableRender": true,
									"materials": [
										{
											"path": "Assets/Arts/Materials/Materials/bj.lmat"
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
						"instanceID": 45,
						"props": {
							"name": "fama1_10",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								-1.3,
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
											0,
											0,
											0
										],
										"size": [
											0.8,
											0.8,
											0.8
										]
									}
								],
								"isTrigger": false
							}
						],
						"child": [
							{
								"type": "MeshSprite3D",
								"instanceID": 46,
								"props": {
									"name": "shuzi",
									"active": true,
									"isStatic": false,
									"layer": 0,
									"position": [
										0,
										0,
										-0.473
									],
									"rotation": [
										0,
										1,
										0,
										0
									],
									"scale": [
										1,
										1,
										1
									],
									"meshPath": "Assets/Arts/model/shuzi-shuzi.lm",
									"enableRender": true,
									"materials": [
										{
											"path": "Assets/Arts/Materials/Materials/shuzi_10.lmat"
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
									"name": "fama_1",
									"active": true,
									"isStatic": false,
									"layer": 0,
									"position": [
										0,
										0,
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
									"meshPath": "Assets/Arts/model/fama_1-fama_1.lm",
									"enableRender": true,
									"materials": [
										{
											"path": "Assets/Arts/Materials/Materials/fama 1.lmat"
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
						"instanceID": 48,
						"props": {
							"name": "fama1_15",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								-2.54,
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
											0,
											0,
											0
										],
										"size": [
											0.8,
											0.8,
											0.8
										]
									}
								],
								"isTrigger": false
							}
						],
						"child": [
							{
								"type": "MeshSprite3D",
								"instanceID": 49,
								"props": {
									"name": "shuzi",
									"active": true,
									"isStatic": false,
									"layer": 0,
									"position": [
										0,
										0,
										-0.473
									],
									"rotation": [
										0,
										1,
										0,
										0
									],
									"scale": [
										1,
										1,
										1
									],
									"meshPath": "Assets/Arts/model/shuzi-shuzi.lm",
									"enableRender": true,
									"materials": [
										{
											"path": "Assets/Arts/Materials/Materials/shuzi_15.lmat"
										}
									]
								},
								"components": [],
								"child": []
							},
							{
								"type": "MeshSprite3D",
								"instanceID": 50,
								"props": {
									"name": "fama_1",
									"active": true,
									"isStatic": false,
									"layer": 0,
									"position": [
										0,
										0,
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
									"meshPath": "Assets/Arts/model/fama_1-fama_1.lm",
									"enableRender": true,
									"materials": [
										{
											"path": "Assets/Arts/Materials/Materials/fama 2.lmat"
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
						"instanceID": 51,
						"props": {
							"name": "fama1_20",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								-3.84,
								6.62,
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
											0.8,
											0.8,
											0.8
										]
									}
								],
								"isTrigger": false
							}
						],
						"child": [
							{
								"type": "MeshSprite3D",
								"instanceID": 52,
								"props": {
									"name": "shuzi",
									"active": true,
									"isStatic": false,
									"layer": 0,
									"position": [
										0,
										0,
										-0.473
									],
									"rotation": [
										0,
										1,
										0,
										0
									],
									"scale": [
										1,
										1,
										1
									],
									"meshPath": "Assets/Arts/model/shuzi-shuzi.lm",
									"enableRender": true,
									"materials": [
										{
											"path": "Assets/Arts/Materials/Materials/shuzi_20.lmat"
										}
									]
								},
								"components": [],
								"child": []
							},
							{
								"type": "MeshSprite3D",
								"instanceID": 53,
								"props": {
									"name": "fama_1",
									"active": true,
									"isStatic": false,
									"layer": 0,
									"position": [
										0,
										0,
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
									"meshPath": "Assets/Arts/model/fama_1-fama_1.lm",
									"enableRender": true,
									"materials": [
										{
											"path": "Assets/Arts/Materials/Materials/fama 3.lmat"
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
						"instanceID": 54,
						"props": {
							"name": "fama1_25",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								-5.14,
								6.56,
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
											0.8,
											0.8,
											0.8
										]
									}
								],
								"isTrigger": false
							}
						],
						"child": [
							{
								"type": "MeshSprite3D",
								"instanceID": 55,
								"props": {
									"name": "shuzi",
									"active": true,
									"isStatic": false,
									"layer": 0,
									"position": [
										0,
										0,
										-0.473
									],
									"rotation": [
										0,
										1,
										0,
										0
									],
									"scale": [
										1,
										1,
										1
									],
									"meshPath": "Assets/Arts/model/shuzi-shuzi.lm",
									"enableRender": true,
									"materials": [
										{
											"path": "Assets/Arts/Materials/Materials/shuzi_25.lmat"
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
									"name": "fama_1",
									"active": true,
									"isStatic": false,
									"layer": 0,
									"position": [
										0,
										0,
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
									"meshPath": "Assets/Arts/model/fama_1-fama_1.lm",
									"enableRender": true,
									"materials": [
										{
											"path": "Assets/Arts/Materials/Materials/fama 4.lmat"
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
						"instanceID": 57,
						"props": {
							"name": "trap_4",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								-0.766,
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
								"instanceID": 58,
								"props": {
									"name": "trap_4",
									"active": true,
									"isStatic": false,
									"layer": 0,
									"position": [
										0,
										0.3,
										0
									],
									"rotation": [
										0.04085522,
										0.7059256,
										0.7059256,
										-0.04085522
									],
									"scale": [
										1,
										1,
										1
									],
									"meshPath": "Assets/Arts/model/trap_4-tou_01.lm",
									"enableRender": true,
									"materials": [
										{
											"path": "Assets/Arts/Materials/Materials/trap_4.lmat"
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
						"instanceID": 59,
						"props": {
							"name": "fama1_30",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								-6.41,
								6.63,
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
											0.8,
											0.8,
											0.8
										]
									}
								],
								"isTrigger": false
							}
						],
						"child": [
							{
								"type": "MeshSprite3D",
								"instanceID": 60,
								"props": {
									"name": "shuzi",
									"active": true,
									"isStatic": false,
									"layer": 0,
									"position": [
										0,
										0,
										-0.473
									],
									"rotation": [
										0,
										1,
										0,
										0
									],
									"scale": [
										1,
										1,
										1
									],
									"meshPath": "Assets/Arts/model/shuzi-shuzi.lm",
									"enableRender": true,
									"materials": [
										{
											"path": "Assets/Arts/Materials/Materials/shuzi_30.lmat"
										}
									]
								},
								"components": [],
								"child": []
							},
							{
								"type": "MeshSprite3D",
								"instanceID": 61,
								"props": {
									"name": "fama_1",
									"active": true,
									"isStatic": false,
									"layer": 0,
									"position": [
										0,
										0,
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
									"meshPath": "Assets/Arts/model/fama_1-fama_1.lm",
									"enableRender": true,
									"materials": [
										{
											"path": "Assets/Arts/Materials/Materials/fama 5.lmat"
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
						"instanceID": 62,
						"props": {
							"name": "monster_1",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								-1.41,
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
								"instanceID": 63,
								"props": {
									"name": "monster_1",
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
										-0.7071068,
										0,
										-0.7071068
									],
									"scale": [
										1,
										1,
										1
									]
								},
								"components": [
									{
										"type": "Animator",
										"layers": [
											{
												"name": "Base Layer",
												"weight": 0,
												"blendingMode": 0,
												"states": [
													{
														"name": "arder",
														"clipPath": "Assets/Arts/juese/Animator/Bear 1/Bear 1-arder.lani"
													},
													{
														"name": "attack",
														"clipPath": "Assets/Arts/juese/Animator/Bear 1/Bear 1-attack.lani"
													}
												]
											}
										],
										"cullingMode": 0,
										"playOnWake": true
									}
								],
								"child": [
									{
										"type": "Sprite3D",
										"instanceID": 64,
										"props": {
											"name": "LeftBottomFloor",
											"active": true,
											"isStatic": false,
											"layer": 0,
											"position": [
												0,
												0,
												0
											],
											"rotation": [
												-2.318357E-07,
												0.7071068,
												-0.7071067,
												-4.352183E-08
											],
											"scale": [
												80,
												80,
												80
											]
										},
										"components": [],
										"child": [
											{
												"type": "Sprite3D",
												"instanceID": 65,
												"props": {
													"name": "Bear 1",
													"active": true,
													"isStatic": false,
													"layer": 0,
													"position": [
														2.350001E-05,
														1.999912E-06,
														-1.180001E-05
													],
													"rotation": [
														0.5000001,
														0.5000001,
														-0.5,
														-0.5
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
														"type": "SkinnedMeshSprite3D",
														"instanceID": 66,
														"props": {
															"name": "Bear",
															"active": true,
															"isStatic": false,
															"layer": 0,
															"position": [
																-2E-05,
																0,
																0.00611
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
															"rootBone": 67,
															"boundBox": {
																"min": [
																	-0.01232382,
																	-0.005938647,
																	-0.007272575
																],
																"max": [
																	0.004610584,
																	0.02181103,
																	0.007562672
																]
															},
															"boundSphere": {
																"center": [
																	-0.003856619,
																	0.00793619,
																	0.0001450484
																],
																"radius": 0.01786689
															},
															"bones": [
																68,
																69,
																70,
																71,
																72,
																73,
																74,
																67,
																75,
																76,
																77,
																78,
																79,
																80,
																81,
																82,
																83,
																84,
																85,
																86,
																87,
																88,
																89,
																90,
																91,
																92,
																93,
																94,
																95,
																96,
																97
															],
															"materials": [
																{
																	"path": "Assets/Arts/juese/Animator/Bear 1/Materials/Bear Brown.lmat"
																}
															],
															"meshPath": "Assets/Arts/juese/Animator/Bear 1/Bear 1-Bear.lm"
														},
														"components": [],
														"child": []
													},
													{
														"type": "Sprite3D",
														"instanceID": 98,
														"props": {
															"name": "CG",
															"active": true,
															"isStatic": false,
															"layer": 0,
															"position": [
																0,
																0.01132853,
																0
															],
															"rotation": [
																0.5000226,
																0.5000628,
																0.5000119,
																-0.4999028
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
																"instanceID": 67,
																"props": {
																	"name": "Pelvis",
																	"active": true,
																	"isStatic": false,
																	"layer": 0,
																	"position": [
																		0,
																		0,
																		0
																	],
																	"rotation": [
																		0.4999382,
																		0.4999535,
																		0.5000457,
																		-0.5000627
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
																		"instanceID": 74,
																		"props": {
																			"name": "L Thigh",
																			"active": true,
																			"isStatic": false,
																			"layer": 0,
																			"position": [
																				-3.814697E-09,
																				4.577636E-09,
																				0.002882503
																			],
																			"rotation": [
																				0.09109838,
																				0.9958225,
																				-0.0003866043,
																				-0.006196474
																			],
																			"scale": [
																				0.9999999,
																				1,
																				1
																			]
																		},
																		"components": [],
																		"child": [
																			{
																				"type": "Sprite3D",
																				"instanceID": 76,
																				"props": {
																					"name": "L Calf",
																					"active": true,
																					"isStatic": false,
																					"layer": 0,
																					"position": [
																						0.007490003,
																						-2.670288E-09,
																						1.525879E-09
																					],
																					"rotation": [
																						-2.494896E-10,
																						-8.972831E-10,
																						0.2678874,
																						-0.9634503
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
																						"instanceID": 82,
																						"props": {
																							"name": "L Foot",
																							"active": true,
																							"isStatic": false,
																							"layer": 0,
																							"position": [
																								0.003018687,
																								3.933906E-10,
																								-1.525879E-09
																							],
																							"rotation": [
																								0.0947393,
																								0.02351566,
																								-0.1775521,
																								-0.9792583
																							],
																							"scale": [
																								1,
																								0.9999999,
																								0.9999999
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
																		"instanceID": 75,
																		"props": {
																			"name": "R Thigh",
																			"active": true,
																			"isStatic": false,
																			"layer": 0,
																			"position": [
																				3.814697E-09,
																				-3.814697E-09,
																				-0.002882503
																			],
																			"rotation": [
																				-0.04670953,
																				0.9975134,
																				-0.002577284,
																				-0.05271218
																			],
																			"scale": [
																				0.9999999,
																				1,
																				1
																			]
																		},
																		"components": [],
																		"child": [
																			{
																				"type": "Sprite3D",
																				"instanceID": 91,
																				"props": {
																					"name": "R Calf",
																					"active": true,
																					"isStatic": false,
																					"layer": 0,
																					"position": [
																						0.007490003,
																						0,
																						1.525879E-09
																					],
																					"rotation": [
																						1.65806E-09,
																						-2.661743E-08,
																						0.1483321,
																						-0.9889376
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
																						"instanceID": 93,
																						"props": {
																							"name": "R Foot",
																							"active": true,
																							"isStatic": false,
																							"layer": 0,
																							"position": [
																								0.003018686,
																								1.91927E-09,
																								-1.335144E-09
																							],
																							"rotation": [
																								-0.1591228,
																								0.02135182,
																								-0.1999952,
																								-0.9665537
																							],
																							"scale": [
																								1,
																								0.9999999,
																								0.9999999
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
																		"instanceID": 69,
																		"props": {
																			"name": "Spine",
																			"active": true,
																			"isStatic": false,
																			"layer": 0,
																			"position": [
																				0.0005193555,
																				0.001665305,
																				2.297187E-07
																			],
																			"rotation": [
																				9.859203E-05,
																				0.0001130672,
																				-0.6866248,
																				-0.7270119
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
																				"instanceID": 68,
																				"props": {
																					"name": "Spine1",
																					"active": true,
																					"isStatic": false,
																					"layer": 0,
																					"position": [
																						0.00354008,
																						-2.825165E-06,
																						-7.840571E-12
																					],
																					"rotation": [
																						0.0005661843,
																						-0.0002233973,
																						-0.0002936519,
																						-0.9999998
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
																						"instanceID": 71,
																						"props": {
																							"name": "Spine2",
																							"active": true,
																							"isStatic": false,
																							"layer": 0,
																							"position": [
																								0.003540079,
																								-3.165436E-06,
																								-8.766073E-12
																							],
																							"rotation": [
																								2.481703E-08,
																								1.80263E-07,
																								-2.775393E-08,
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
																								"instanceID": 78,
																								"props": {
																									"name": "L Clavicle",
																									"active": true,
																									"isStatic": false,
																									"layer": 0,
																									"position": [
																										0.001134685,
																										0.001408849,
																										-4.908228E-05
																									],
																									"rotation": [
																										0.6973958,
																										-0.02201207,
																										0.7160436,
																										-0.02088384
																									],
																									"scale": [
																										1,
																										1,
																										0.9999999
																									]
																								},
																								"components": [],
																								"child": [
																									{
																										"type": "Sprite3D",
																										"instanceID": 70,
																										"props": {
																											"name": "L UpperArm",
																											"active": true,
																											"isStatic": false,
																											"layer": 0,
																											"position": [
																												0.002433561,
																												-5.340576E-09,
																												-7.629394E-10
																											],
																											"rotation": [
																												0.3572132,
																												-0.4363631,
																												0.4862397,
																												-0.6675005
																											],
																											"scale": [
																												1,
																												1,
																												0.9999999
																											]
																										},
																										"components": [],
																										"child": [
																											{
																												"type": "Sprite3D",
																												"instanceID": 72,
																												"props": {
																													"name": "L Forearm",
																													"active": true,
																													"isStatic": false,
																													"layer": 0,
																													"position": [
																														0.006202715,
																														7.629394E-10,
																														-1.525879E-09
																													],
																													"rotation": [
																														6.343357E-09,
																														-1.504172E-09,
																														0.2307276,
																														-0.9730184
																													],
																													"scale": [
																														1,
																														1,
																														0.9999999
																													]
																												},
																												"components": [],
																												"child": [
																													{
																														"type": "Sprite3D",
																														"instanceID": 83,
																														"props": {
																															"name": "L Hand",
																															"active": true,
																															"isStatic": false,
																															"layer": 0,
																															"position": [
																																0.003950259,
																																-7.629394E-10,
																																1.716614E-09
																															],
																															"rotation": [
																																-0.03980225,
																																-0.06833678,
																																-0.1100465,
																																-0.9907753
																															],
																															"scale": [
																																0.9999998,
																																0.9999996,
																																0.9999999
																															]
																														},
																														"components": [],
																														"child": [
																															{
																																"type": "Sprite3D",
																																"instanceID": 84,
																																"props": {
																																	"name": " L Finger0",
																																	"active": true,
																																	"isStatic": false,
																																	"layer": 0,
																																	"position": [
																																		0.0007642756,
																																		-0.001311158,
																																		8.934574E-05
																																	],
																																	"rotation": [
																																		-1.202714E-08,
																																		-7.226647E-08,
																																		0.7071075,
																																		-0.7071061
																																	],
																																	"scale": [
																																		0.9999999,
																																		1,
																																		0.9999999
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
																								"instanceID": 73,
																								"props": {
																									"name": "Neck",
																									"active": true,
																									"isStatic": false,
																									"layer": 0,
																									"position": [
																										0.003596815,
																										0.0003595024,
																										-1.588429E-10
																									],
																									"rotation": [
																										-0.0001878911,
																										-0.0006589365,
																										-0.1672634,
																										-0.985912
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
																										"instanceID": 79,
																										"props": {
																											"name": "Head",
																											"active": true,
																											"isStatic": false,
																											"layer": 0,
																											"position": [
																												0.003331174,
																												-5.340576E-09,
																												-5.820766E-15
																											],
																											"rotation": [
																												-4.150034E-07,
																												-1.892835E-06,
																												0.7392516,
																												-0.6734294
																											],
																											"scale": [
																												0.9999997,
																												0.9999997,
																												1
																											]
																										},
																										"components": [],
																										"child": [
																											{
																												"type": "Sprite3D",
																												"instanceID": 86,
																												"props": {
																													"name": "Cheek L",
																													"active": true,
																													"isStatic": false,
																													"layer": 0,
																													"position": [
																														-0.0008475326,
																														0.003924108,
																														3.502074E-07
																													],
																													"rotation": [
																														-0.06396496,
																														0.6414675,
																														-0.1805641,
																														-0.742849
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
																												"instanceID": 97,
																												"props": {
																													"name": "Cheek R",
																													"active": true,
																													"isStatic": false,
																													"layer": 0,
																													"position": [
																														-0.0008468304,
																														0.003924153,
																														-5.29562E-07
																													],
																													"rotation": [
																														0.06396498,
																														-0.6414666,
																														-0.1805676,
																														-0.742849
																													],
																													"scale": [
																														0.9999998,
																														1,
																														1
																													]
																												},
																												"components": [],
																												"child": []
																											},
																											{
																												"type": "Sprite3D",
																												"instanceID": 81,
																												"props": {
																													"name": "EarL",
																													"active": true,
																													"isStatic": false,
																													"layer": 0,
																													"position": [
																														0.001168745,
																														0.001079845,
																														0.001502237
																													],
																													"rotation": [
																														0.5997465,
																														0.3438691,
																														0.07078223,
																														-0.7190605
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
																												"instanceID": 90,
																												"props": {
																													"name": "EarR",
																													"active": true,
																													"isStatic": false,
																													"layer": 0,
																													"position": [
																														0.001168745,
																														0.001079849,
																														-0.001502229
																													],
																													"rotation": [
																														-0.5997464,
																														-0.3438697,
																														0.07078037,
																														-0.7190605
																													],
																													"scale": [
																														1,
																														0.9999999,
																														1
																													]
																												},
																												"components": [],
																												"child": []
																											},
																											{
																												"type": "Sprite3D",
																												"instanceID": 85,
																												"props": {
																													"name": "Eye L",
																													"active": true,
																													"isStatic": false,
																													"layer": 0,
																													"position": [
																														0.0001768326,
																														0.003234152,
																														0.0008460637
																													],
																													"rotation": [
																														-0.7007486,
																														-0.6809219,
																														-0.1451164,
																														0.1556858
																													],
																													"scale": [
																														1,
																														0.999998,
																														1
																													]
																												},
																												"components": [],
																												"child": []
																											},
																											{
																												"type": "Sprite3D",
																												"instanceID": 96,
																												"props": {
																													"name": "Eye R",
																													"active": true,
																													"isStatic": false,
																													"layer": 0,
																													"position": [
																														0.0001768371,
																														0.003234157,
																														-0.000846044
																													],
																													"rotation": [
																														-0.7007486,
																														-0.6809227,
																														0.1451125,
																														-0.1556857
																													],
																													"scale": [
																														1,
																														0.9999994,
																														1
																													]
																												},
																												"components": [],
																												"child": []
																											},
																											{
																												"type": "Sprite3D",
																												"instanceID": 80,
																												"props": {
																													"name": "Jaw",
																													"active": true,
																													"isStatic": false,
																													"layer": 0,
																													"position": [
																														-0.001189628,
																														0.001846774,
																														-9.410033E-07
																													],
																													"rotation": [
																														-1.02613E-06,
																														3.779262E-06,
																														-0.8435735,
																														-0.5370138
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
																														"instanceID": 87,
																														"props": {
																															"name": "Tongue",
																															"active": true,
																															"isStatic": false,
																															"layer": 0,
																															"position": [
																																0.0007818794,
																																-0.000311618,
																																1.119566E-10
																															],
																															"rotation": [
																																-0.9995295,
																																-0.03067037,
																																-1.0297E-07,
																																3.159612E-09
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
																											}
																										]
																									}
																								]
																							},
																							{
																								"type": "Sprite3D",
																								"instanceID": 89,
																								"props": {
																									"name": "R Clavicle",
																									"active": true,
																									"isStatic": false,
																									"layer": 0,
																									"position": [
																										0.001134685,
																										0.001408849,
																										4.90901E-05
																									],
																									"rotation": [
																										-0.6976416,
																										0.02158249,
																										0.715829,
																										-0.02047748
																									],
																									"scale": [
																										0.9999998,
																										1,
																										1
																									]
																								},
																								"components": [],
																								"child": [
																									{
																										"type": "Sprite3D",
																										"instanceID": 88,
																										"props": {
																											"name": "R UpperArm",
																											"active": true,
																											"isStatic": false,
																											"layer": 0,
																											"position": [
																												0.00243356,
																												-6.866455E-09,
																												0
																											],
																											"rotation": [
																												-0.4267609,
																												0.4011371,
																												0.5385936,
																												-0.605707
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
																												"instanceID": 92,
																												"props": {
																													"name": "R Forearm",
																													"active": true,
																													"isStatic": false,
																													"layer": 0,
																													"position": [
																														0.006202715,
																														7.629394E-10,
																														0
																													],
																													"rotation": [
																														-5.499925E-09,
																														9.878512E-10,
																														0.1767828,
																														-0.9842499
																													],
																													"scale": [
																														1,
																														1,
																														0.9999999
																													]
																												},
																												"components": [],
																												"child": [
																													{
																														"type": "Sprite3D",
																														"instanceID": 94,
																														"props": {
																															"name": "R Hand",
																															"active": true,
																															"isStatic": false,
																															"layer": 0,
																															"position": [
																																0.003950262,
																																-7.629394E-10,
																																0
																															],
																															"rotation": [
																																0.05958027,
																																0.09235007,
																																-0.1619385,
																																-0.9806618
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
																																"instanceID": 95,
																																"props": {
																																	"name": " R Finger0",
																																	"active": true,
																																	"isStatic": false,
																																	"layer": 0,
																																	"position": [
																																		0.0007642757,
																																		-0.001311157,
																																		-8.934688E-05
																																	],
																																	"rotation": [
																																		3.319609E-08,
																																		9.336949E-08,
																																		0.7071058,
																																		-0.7071078
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
																													}
																												]
																											}
																										]
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
																		"instanceID": 77,
																		"props": {
																			"name": "Tail",
																			"active": true,
																			"isStatic": false,
																			"layer": 0,
																			"position": [
																				0.0002990173,
																				-0.002951773,
																				-2.461534E-09
																			],
																			"rotation": [
																				-4.083491E-07,
																				-6.071249E-07,
																				0.9937806,
																				-0.111356
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
															}
														]
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
						"instanceID": 99,
						"props": {
							"name": "trap_6_L",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								3.57,
								3.22,
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
									"name": "trap_6_L",
									"active": true,
									"isStatic": false,
									"layer": 0,
									"position": [
										0.19,
										0,
										0
									],
									"rotation": [
										0,
										-0.7071068,
										0,
										-0.7071068
									],
									"scale": [
										1,
										1,
										1
									]
								},
								"components": [
									{
										"type": "Animator",
										"layers": [
											{
												"name": "Base Layer",
												"weight": 0,
												"blendingMode": 0,
												"states": [
													{
														"name": "kaisuo",
														"clipPath": "Assets/Arts/juese/Animator/Elevator_Lock/Elevator_Lock-kaisuo.lani"
													}
												]
											}
										],
										"cullingMode": 0,
										"playOnWake": true
									}
								],
								"child": [
									{
										"type": "Sprite3D",
										"instanceID": 101,
										"props": {
											"name": "RightBottomFloor",
											"active": true,
											"isStatic": false,
											"layer": 0,
											"position": [
												0,
												-0.225,
												-0.418
											],
											"rotation": [
												0.7071068,
												0,
												0,
												-0.7071068
											],
											"scale": [
												100,
												-100,
												100
											]
										},
										"components": [],
										"child": [
											{
												"type": "Sprite3D",
												"instanceID": 102,
												"props": {
													"name": "Door",
													"active": true,
													"isStatic": false,
													"layer": 0,
													"position": [
														0,
														0,
														0
													],
													"rotation": [
														-0.7071068,
														0,
														0,
														-0.7071068
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
														"instanceID": 103,
														"props": {
															"name": "Elevator_Lock",
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
																"instanceID": 104,
																"props": {
																	"name": "Cube.014",
																	"active": true,
																	"isStatic": false,
																	"layer": 0,
																	"position": [
																		0.0001304364,
																		0.002381613,
																		0.0002303982
																	],
																	"rotation": [
																		-0.6980922,
																		-0.1125494,
																		0.1125494,
																		-0.6980921
																	],
																	"scale": [
																		-23.44482,
																		-23.44482,
																		-23.44481
																	],
																	"meshPath": "Assets/Arts/juese/Animator/Elevator_Lock/Elevator_Lock-Cube.014.lm",
																	"enableRender": true,
																	"materials": [
																		{
																			"path": "Assets/Arts/juese/Animator/Elevator_Lock/New Material 1.lmat"
																		},
																		{
																			"path": "Assets/Arts/juese/Animator/Elevator_Lock/New Material.lmat"
																		}
																	]
																},
																"components": [],
																"child": []
															},
															{
																"type": "MeshSprite3D",
																"instanceID": 105,
																"props": {
																	"name": "Cube.022",
																	"active": true,
																	"isStatic": false,
																	"layer": 0,
																	"position": [
																		0.001560665,
																		0.002593973,
																		-0.0006242392
																	],
																	"rotation": [
																		0.7071068,
																		0,
																		0,
																		-0.7071067
																	],
																	"scale": [
																		100,
																		100,
																		100
																	],
																	"meshPath": "Assets/Arts/juese/Animator/Elevator_Lock/Elevator_Lock-Cube.022.lm",
																	"enableRender": true,
																	"materials": [
																		{
																			"path": "Assets/Arts/juese/Animator/Elevator_Lock/New Material.lmat"
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
							}
						]
					},
					{
						"type": "Sprite3D",
						"instanceID": 106,
						"props": {
							"name": "trap_6_R",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								-3.63,
								5.05,
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
								"instanceID": 107,
								"props": {
									"name": "trap_6_R",
									"active": true,
									"isStatic": false,
									"layer": 0,
									"position": [
										-0.19,
										0,
										0
									],
									"rotation": [
										0,
										-0.7071068,
										0,
										-0.7071068
									],
									"scale": [
										1,
										1,
										1
									]
								},
								"components": [
									{
										"type": "Animator",
										"layers": [
											{
												"name": "Base Layer",
												"weight": 0,
												"blendingMode": 0,
												"states": [
													{
														"name": "kaisuo",
														"clipPath": "Assets/Arts/juese/Animator/Elevator_Lock/Elevator_Lock-kaisuo.lani"
													}
												]
											}
										],
										"cullingMode": 0,
										"playOnWake": true
									}
								],
								"child": [
									{
										"type": "Sprite3D",
										"instanceID": 108,
										"props": {
											"name": "RightBottomFloor",
											"active": true,
											"isStatic": false,
											"layer": 0,
											"position": [
												0,
												-0.22,
												0.47
											],
											"rotation": [
												0.7071068,
												0,
												0,
												-0.7071068
											],
											"scale": [
												100,
												100,
												100
											]
										},
										"components": [],
										"child": [
											{
												"type": "Sprite3D",
												"instanceID": 109,
												"props": {
													"name": "Door",
													"active": true,
													"isStatic": false,
													"layer": 0,
													"position": [
														0,
														0,
														0
													],
													"rotation": [
														-0.7071068,
														0,
														0,
														-0.7071068
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
														"instanceID": 110,
														"props": {
															"name": "Elevator_Lock",
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
																"instanceID": 111,
																"props": {
																	"name": "Cube.014",
																	"active": true,
																	"isStatic": false,
																	"layer": 0,
																	"position": [
																		0.0001304364,
																		0.002381613,
																		0.0002303982
																	],
																	"rotation": [
																		-0.6980922,
																		-0.1125494,
																		0.1125494,
																		-0.6980921
																	],
																	"scale": [
																		-23.44482,
																		-23.44482,
																		-23.44481
																	],
																	"meshPath": "Assets/Arts/juese/Animator/Elevator_Lock/Elevator_Lock-Cube.014.lm",
																	"enableRender": true,
																	"materials": [
																		{
																			"path": "Assets/Arts/juese/Animator/Elevator_Lock/New Material 1.lmat"
																		},
																		{
																			"path": "Assets/Arts/juese/Animator/Elevator_Lock/New Material.lmat"
																		}
																	]
																},
																"components": [],
																"child": []
															},
															{
																"type": "MeshSprite3D",
																"instanceID": 112,
																"props": {
																	"name": "Cube.022",
																	"active": true,
																	"isStatic": false,
																	"layer": 0,
																	"position": [
																		0.001560665,
																		0.002593973,
																		-0.0006242392
																	],
																	"rotation": [
																		0.7071068,
																		0,
																		0,
																		-0.7071067
																	],
																	"scale": [
																		100,
																		100,
																		100
																	],
																	"meshPath": "Assets/Arts/juese/Animator/Elevator_Lock/Elevator_Lock-Cube.022.lm",
																	"enableRender": true,
																	"materials": [
																		{
																			"path": "Assets/Arts/juese/Animator/Elevator_Lock/New Material.lmat"
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
							}
						]
					},
					{
						"type": "Sprite3D",
						"instanceID": 113,
						"props": {
							"name": "monster_2",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								1.35,
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
								"instanceID": 114,
								"props": {
									"name": "monster_2",
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
										1,
										0,
										0
									],
									"scale": [
										1,
										1,
										1
									]
								},
								"components": [
									{
										"type": "Animator",
										"layers": [
											{
												"name": "Base Layer",
												"weight": 0,
												"blendingMode": 0,
												"states": [
													{
														"name": "arder",
														"clipPath": "Assets/Arts/juese/npc/npc_arder-arder.lani"
													},
													{
														"name": "attack",
														"clipPath": "Assets/Arts/juese/npc/npc_attack-attack.lani"
													},
													{
														"name": "dead",
														"clipPath": "Assets/Arts/juese/npc/npc_dead-dead.lani"
													},
													{
														"name": "run",
														"clipPath": "Assets/Arts/juese/npc/npc_run-run.lani"
													}
												]
											}
										],
										"cullingMode": 0,
										"playOnWake": true
									}
								],
								"child": [
									{
										"type": "Sprite3D",
										"instanceID": 115,
										"props": {
											"name": "Bip001",
											"active": true,
											"isStatic": false,
											"layer": 0,
											"position": [
												0,
												0.3196793,
												0
											],
											"rotation": [
												0.4522519,
												0.589635,
												0.5673391,
												-0.3548593
											],
											"scale": [
												0.9999998,
												0.9999998,
												1
											]
										},
										"components": [],
										"child": [
											{
												"type": "Sprite3D",
												"instanceID": 116,
												"props": {
													"name": "Bip001 Pelvis",
													"active": true,
													"isStatic": false,
													"layer": 0,
													"position": [
														0,
														0,
														0
													],
													"rotation": [
														0.4999997,
														0.5000004,
														0.4999997,
														-0.5000004
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
														"instanceID": 117,
														"props": {
															"name": "Bip001 Spine",
															"active": true,
															"isStatic": false,
															"layer": 0,
															"position": [
																0.06623492,
																-6.743148E-05,
																1.061708E-07
															],
															"rotation": [
																-0.001408546,
																-0.03710236,
																0.0392473,
																-0.9985395
															],
															"scale": [
																1,
																0.9999999,
																1
															]
														},
														"components": [],
														"child": [
															{
																"type": "Sprite3D",
																"instanceID": 118,
																"props": {
																	"name": "Bip001 L Thigh",
																	"active": true,
																	"isStatic": false,
																	"layer": 0,
																	"position": [
																		-0.07043201,
																		-0.005137235,
																		0.05662315
																	],
																	"rotation": [
																		0.1486401,
																		0.9669421,
																		0.1371993,
																		-0.1552591
																	],
																	"scale": [
																		0.9999999,
																		1,
																		1
																	]
																},
																"components": [],
																"child": [
																	{
																		"type": "Sprite3D",
																		"instanceID": 119,
																		"props": {
																			"name": "Bip001 L Calf",
																			"active": true,
																			"isStatic": false,
																			"layer": 0,
																			"position": [
																				0.1459677,
																				0,
																				0
																			],
																			"rotation": [
																				-2.252957E-09,
																				-1.491274E-08,
																				0.3002349,
																				-0.9538653
																			],
																			"scale": [
																				1,
																				0.9999998,
																				0.9999999
																			]
																		},
																		"components": [],
																		"child": [
																			{
																				"type": "Sprite3D",
																				"instanceID": 120,
																				"props": {
																					"name": "Bip001 L Foot",
																					"active": true,
																					"isStatic": false,
																					"layer": 0,
																					"position": [
																						0.1427178,
																						0,
																						0
																					],
																					"rotation": [
																						-0.04681168,
																						0.1028308,
																						-0.03034839,
																						-0.9931332
																					],
																					"scale": [
																						1,
																						1,
																						0.9999999
																					]
																				},
																				"components": [],
																				"child": [
																					{
																						"type": "Sprite3D",
																						"instanceID": 121,
																						"props": {
																							"name": "Bip001 L Toe0",
																							"active": true,
																							"isStatic": false,
																							"layer": 0,
																							"position": [
																								0.05582524,
																								0.07184467,
																								-7.450581E-09
																							],
																							"rotation": [
																								1.955041E-08,
																								-6.474328E-08,
																								-0.7071068,
																								-0.7071068
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
																			}
																		]
																	}
																]
															},
															{
																"type": "Sprite3D",
																"instanceID": 122,
																"props": {
																	"name": "Bip001 R Thigh",
																	"active": true,
																	"isStatic": false,
																	"layer": 0,
																	"position": [
																		-0.06127554,
																		-0.00512512,
																		-0.066425
																	],
																	"rotation": [
																		0.008002523,
																		0.9586053,
																		-0.2259916,
																		0.1730309
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
																		"instanceID": 123,
																		"props": {
																			"name": "Bip001 R Calf",
																			"active": true,
																			"isStatic": false,
																			"layer": 0,
																			"position": [
																				0.1459677,
																				7.450581E-09,
																				0
																			],
																			"rotation": [
																				-7.938934E-09,
																				1.083442E-08,
																				0.3432955,
																				-0.9392275
																			],
																			"scale": [
																				0.9999999,
																				1,
																				0.9999999
																			]
																		},
																		"components": [],
																		"child": [
																			{
																				"type": "Sprite3D",
																				"instanceID": 124,
																				"props": {
																					"name": "Bip001 R Foot",
																					"active": true,
																					"isStatic": false,
																					"layer": 0,
																					"position": [
																						0.1427178,
																						1.490116E-08,
																						0
																					],
																					"rotation": [
																						0.0779307,
																						-0.09299444,
																						-0.2134922,
																						-0.9693812
																					],
																					"scale": [
																						1,
																						1,
																						0.9999999
																					]
																				},
																				"components": [],
																				"child": [
																					{
																						"type": "Sprite3D",
																						"instanceID": 125,
																						"props": {
																							"name": "Bip001 R Toe0",
																							"active": true,
																							"isStatic": false,
																							"layer": 0,
																							"position": [
																								0.05582525,
																								0.07184466,
																								0
																							],
																							"rotation": [
																								-4.179613E-08,
																								-4.179608E-08,
																								-0.7071068,
																								-0.7071068
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
																			}
																		]
																	}
																]
															},
															{
																"type": "Sprite3D",
																"instanceID": 126,
																"props": {
																	"name": "Bip001 Spine1",
																	"active": true,
																	"isStatic": false,
																	"layer": 0,
																	"position": [
																		0.08499119,
																		-7.858127E-05,
																		-8.482486E-06
																	],
																	"rotation": [
																		-0.06583164,
																		0.0868044,
																		-0.1598088,
																		-0.9811179
																	],
																	"scale": [
																		1,
																		1,
																		0.9999999
																	]
																},
																"components": [],
																"child": [
																	{
																		"type": "Sprite3D",
																		"instanceID": 127,
																		"props": {
																			"name": "Bip001 Neck",
																			"active": true,
																			"isStatic": false,
																			"layer": 0,
																			"position": [
																				0.1496472,
																				-6.09383E-05,
																				-4.336238E-06
																			],
																			"rotation": [
																				-0.09394696,
																				0.07407112,
																				-0.4283007,
																				-0.8956819
																			],
																			"scale": [
																				1,
																				0.9999999,
																				1
																			]
																		},
																		"components": [],
																		"child": [
																			{
																				"type": "Sprite3D",
																				"instanceID": 128,
																				"props": {
																					"name": "Bip001 Head",
																					"active": true,
																					"isStatic": false,
																					"layer": 0,
																					"position": [
																						0.05173457,
																						0,
																						-7.450581E-09
																					],
																					"rotation": [
																						0.06490112,
																						0.001010554,
																						0.341909,
																						-0.9374887
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
																				"instanceID": 129,
																				"props": {
																					"name": "Bip001 L Clavicle",
																					"active": true,
																					"isStatic": false,
																					"layer": 0,
																					"position": [
																						-0.01712167,
																						0.02400488,
																						0.09854747
																					],
																					"rotation": [
																						-0.7294981,
																						0.3347067,
																						-0.5288178,
																						-0.2759631
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
																						"instanceID": 130,
																						"props": {
																							"name": "Bip001 L UpperArm",
																							"active": true,
																							"isStatic": false,
																							"layer": 0,
																							"position": [
																								0.0958198,
																								7.450581E-09,
																								5.960464E-08
																							],
																							"rotation": [
																								-0.3259518,
																								-0.5534821,
																								0.07618161,
																								-0.7626332
																							],
																							"scale": [
																								0.9999999,
																								1,
																								1
																							]
																						},
																						"components": [],
																						"child": [
																							{
																								"type": "Sprite3D",
																								"instanceID": 131,
																								"props": {
																									"name": "Bip001 L Forearm",
																									"active": true,
																									"isStatic": false,
																									"layer": 0,
																									"position": [
																										0.1456311,
																										0,
																										0
																									],
																									"rotation": [
																										-1.811014E-08,
																										-1.077552E-08,
																										0.246109,
																										-0.9692422
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
																										"instanceID": 132,
																										"props": {
																											"name": "Bip001 L Hand",
																											"active": true,
																											"isStatic": false,
																											"layer": 0,
																											"position": [
																												0.1456311,
																												-2.980232E-08,
																												0
																											],
																											"rotation": [
																												-0.9764316,
																												-0.10764,
																												0.1140291,
																												0.1482983
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
																												"instanceID": 133,
																												"props": {
																													"name": "Bip001 L Finger0",
																													"active": true,
																													"isStatic": false,
																													"layer": 0,
																													"position": [
																														0.1293674,
																														-2.980232E-08,
																														7.450581E-09
																													],
																													"rotation": [
																														0.07603353,
																														-0.2232257,
																														0.04313051,
																														-0.9708393
																													],
																													"scale": [
																														0.9999999,
																														1,
																														1
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
																				"instanceID": 134,
																				"props": {
																					"name": "Bip001 R Clavicle",
																					"active": true,
																					"isStatic": false,
																					"layer": 0,
																					"position": [
																						-0.05744724,
																						0.004170954,
																						-0.08521599
																					],
																					"rotation": [
																						-0.520776,
																						0.4031184,
																						0.7246301,
																						0.2029756
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
																						"instanceID": 135,
																						"props": {
																							"name": "Bip001 R UpperArm",
																							"active": true,
																							"isStatic": false,
																							"layer": 0,
																							"position": [
																								0.0958198,
																								-1.490116E-08,
																								0
																							],
																							"rotation": [
																								0.1906729,
																								0.4677804,
																								-0.08324902,
																								-0.8590081
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
																								"instanceID": 136,
																								"props": {
																									"name": "Bip001 R Forearm",
																									"active": true,
																									"isStatic": false,
																									"layer": 0,
																									"position": [
																										0.1456311,
																										0,
																										2.980232E-08
																									],
																									"rotation": [
																										-6.891298E-09,
																										-2.923297E-08,
																										0.3484017,
																										-0.9373453
																									],
																									"scale": [
																										0.9999999,
																										1,
																										1
																									]
																								},
																								"components": [],
																								"child": [
																									{
																										"type": "Sprite3D",
																										"instanceID": 137,
																										"props": {
																											"name": "Bip001 R Hand",
																											"active": true,
																											"isStatic": false,
																											"layer": 0,
																											"position": [
																												0.1456311,
																												-1.490116E-08,
																												0
																											],
																											"rotation": [
																												-0.7068252,
																												2.108181E-08,
																												-2.106503E-08,
																												-0.7073883
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
																												"instanceID": 138,
																												"props": {
																													"name": "Bip001 R Finger0",
																													"active": true,
																													"isStatic": false,
																													"layer": 0,
																													"position": [
																														0.1293674,
																														-2.980232E-08,
																														0
																													],
																													"rotation": [
																														-0.0003981591,
																														0,
																														0,
																														-0.9999999
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
																												"instanceID": 139,
																												"props": {
																													"name": "wuqi",
																													"active": true,
																													"isStatic": false,
																													"layer": 0,
																													"position": [
																														0.06590211,
																														0.03107408,
																														-0.0123651
																													],
																													"rotation": [
																														-0.1874476,
																														-0.6439123,
																														0.6547764,
																														0.3485803
																													],
																													"scale": [
																														1,
																														1,
																														1
																													],
																													"meshPath": "Assets/Arts/juese/npc/npc_arder-wuqi.lm",
																													"enableRender": true,
																													"materials": [
																														{
																															"path": "Assets/Arts/juese/npc/Materials/NPC_01.lmat"
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
																			}
																		]
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
										"type": "SkinnedMeshSprite3D",
										"instanceID": 140,
										"props": {
											"name": "npc_01",
											"active": true,
											"isStatic": false,
											"layer": 0,
											"position": [
												0,
												0,
												0
											],
											"rotation": [
												0.7071068,
												0,
												0,
												-0.7071067
											],
											"scale": [
												1,
												1,
												1
											],
											"rootBone": 115,
											"boundBox": {
												"min": [
													-0.3192967,
													-0.4826438,
													-0.3261079
												],
												"max": [
													0.5329089,
													0.4287842,
													0.8904252
												]
											},
											"boundSphere": {
												"center": [
													0.1068061,
													-0.02692978,
													0.2821586
												],
												"radius": 0.8713364
											},
											"bones": [
												129,
												126,
												117,
												128,
												134,
												115,
												116,
												118,
												119,
												120,
												121,
												130,
												127,
												132,
												131,
												133,
												122,
												123,
												124,
												125,
												135,
												137,
												136,
												138
											],
											"materials": [
												{
													"path": "Assets/Arts/juese/npc/Materials/NPC_01.lmat"
												}
											],
											"meshPath": "Assets/Arts/juese/npc/npc_arder-npc_01.lm"
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
						"instanceID": 141,
						"props": {
							"name": "role_boy",
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
											0,
											0.5,
											0
										],
										"size": [
											0.8,
											1,
											1
										]
									}
								],
								"isTrigger": false
							}
						],
						"child": [
							{
								"type": "Sprite3D",
								"instanceID": 142,
								"props": {
									"name": "role_boy",
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
										1,
										0,
										0
									],
									"scale": [
										1.1,
										1.1,
										1.1
									]
								},
								"components": [
									{
										"type": "Animator",
										"layers": [
											{
												"name": "Base Layer",
												"weight": 0,
												"blendingMode": 0,
												"states": [
													{
														"name": "arder",
														"clipPath": "Assets/Arts/juese/role_boy_arder-arder.lani"
													},
													{
														"name": "run",
														"clipPath": "Assets/Arts/juese/role_boy_run-run.lani"
													},
													{
														"name": "push",
														"clipPath": "Assets/Arts/juese/role_boy_push-push.lani"
													},
													{
														"name": "dead",
														"clipPath": "Assets/Arts/juese/role_girl_death-dead.lani"
													},
													{
														"name": "shengli",
														"clipPath": "Assets/Arts/juese/shengli-shengli.lani"
													}
												]
											}
										],
										"cullingMode": 0,
										"playOnWake": true
									}
								],
								"child": [
									{
										"type": "Sprite3D",
										"instanceID": 143,
										"props": {
											"name": "Bip001",
											"active": true,
											"isStatic": false,
											"layer": 0,
											"position": [
												2.572072E-11,
												0.33,
												-0.0005884063
											],
											"rotation": [
												-0.5002366,
												-0.500236,
												-0.4997633,
												0.4997639
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
												"instanceID": 144,
												"props": {
													"name": "Bip001 Pelvis",
													"active": true,
													"isStatic": false,
													"layer": 0,
													"position": [
														0,
														0,
														0
													],
													"rotation": [
														0.4999997,
														0.5000004,
														0.4999997,
														-0.5000004
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
														"instanceID": 145,
														"props": {
															"name": "Bip001 Spine",
															"active": true,
															"isStatic": false,
															"layer": 0,
															"position": [
																0.04479945,
																0.0022873,
																5.56625E-08
															],
															"rotation": [
																2.080476E-06,
																6.93676E-07,
																-0.000398159,
																-0.9999999
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
																"instanceID": 146,
																"props": {
																	"name": "Bip001 L Thigh",
																	"active": true,
																	"isStatic": false,
																	"layer": 0,
																	"position": [
																		-0.04480127,
																		-0.002251781,
																		0.06164327
																	],
																	"rotation": [
																		0.004336892,
																		0.9993033,
																		0.002742411,
																		-0.03696812
																	],
																	"scale": [
																		0.9999999,
																		1,
																		1
																	]
																},
																"components": [],
																"child": [
																	{
																		"type": "Sprite3D",
																		"instanceID": 147,
																		"props": {
																			"name": "Bip001 L Calf",
																			"active": true,
																			"isStatic": false,
																			"layer": 0,
																			"position": [
																				0.1514456,
																				0,
																				0
																			],
																			"rotation": [
																				1.307775E-10,
																				1.492966E-08,
																				0.07111809,
																				-0.9974679
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
																				"instanceID": 148,
																				"props": {
																					"name": "Bip001 L Foot",
																					"active": true,
																					"isStatic": false,
																					"layer": 0,
																					"position": [
																						0.134597,
																						-3.72529E-09,
																						0
																					],
																					"rotation": [
																						0.01041194,
																						0.03773839,
																						-0.06655141,
																						-0.9970147
																					],
																					"scale": [
																						0.9999999,
																						0.9999998,
																						0.9999999
																					]
																				},
																				"components": [],
																				"child": [
																					{
																						"type": "Sprite3D",
																						"instanceID": 149,
																						"props": {
																							"name": "Bip001 L Toe0",
																							"active": true,
																							"isStatic": false,
																							"layer": 0,
																							"position": [
																								0.04630503,
																								0.07184466,
																								7.450581E-09
																							],
																							"rotation": [
																								1.601415E-08,
																								1.4895E-08,
																								-0.7071068,
																								-0.7071068
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
																			}
																		]
																	}
																]
															},
															{
																"type": "Sprite3D",
																"instanceID": 150,
																"props": {
																	"name": "Bip001 R Thigh",
																	"active": true,
																	"isStatic": false,
																	"layer": 0,
																	"position": [
																		-0.04480127,
																		-0.002251439,
																		-0.06164328
																	],
																	"rotation": [
																		0.004336921,
																		0.9993033,
																		-0.002739622,
																		0.03696826
																	],
																	"scale": [
																		0.9999999,
																		1,
																		1
																	]
																},
																"components": [],
																"child": [
																	{
																		"type": "Sprite3D",
																		"instanceID": 151,
																		"props": {
																			"name": "Bip001 R Calf",
																			"active": true,
																			"isStatic": false,
																			"layer": 0,
																			"position": [
																				0.1514456,
																				2.328306E-10,
																				7.450581E-09
																			],
																			"rotation": [
																				1.34158E-10,
																				-1.121381E-08,
																				0.07111809,
																				-0.9974679
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
																				"instanceID": 152,
																				"props": {
																					"name": "Bip001 R Foot",
																					"active": true,
																					"isStatic": false,
																					"layer": 0,
																					"position": [
																						0.134597,
																						-1.862645E-09,
																						0
																					],
																					"rotation": [
																						-0.01041193,
																						-0.03773848,
																						-0.06655142,
																						-0.9970147
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
																						"instanceID": 153,
																						"props": {
																							"name": "Bip001 R Toe0",
																							"active": true,
																							"isStatic": false,
																							"layer": 0,
																							"position": [
																								0.04630503,
																								0.07184465,
																								0
																							],
																							"rotation": [
																								-1.600533E-08,
																								-1.490382E-08,
																								-0.7071068,
																								-0.7071068
																							],
																							"scale": [
																								0.9999999,
																								0.9999999,
																								0.9999999
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
																"instanceID": 154,
																"props": {
																	"name": "Bip001 Spine1",
																	"active": true,
																	"isStatic": false,
																	"layer": 0,
																	"position": [
																		0.05124032,
																		-4.688115E-05,
																		-1.300302E-10
																	],
																	"rotation": [
																		-2.627322E-15,
																		-9.310939E-08,
																		0.03356987,
																		-0.9994364
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
																		"instanceID": 155,
																		"props": {
																			"name": "Bip001 Spine2",
																			"active": true,
																			"isStatic": false,
																			"layer": 0,
																			"position": [
																				0.0590069,
																				-4.639104E-05,
																				-1.286864E-10
																			],
																			"rotation": [
																				6.889866E-14,
																				-1.232998E-07,
																				0.04445478,
																				-0.9990114
																			],
																			"scale": [
																				0.9999999,
																				0.9999999,
																				1
																			]
																		},
																		"components": [],
																		"child": [
																			{
																				"type": "Sprite3D",
																				"instanceID": 156,
																				"props": {
																					"name": "Bip001 Neck",
																					"active": true,
																					"isStatic": false,
																					"layer": 0,
																					"position": [
																						0.0885703,
																						-0.008441545,
																						-9.228387E-09
																					],
																					"rotation": [
																						5.120776E-15,
																						4.676802E-07,
																						-0.1686185,
																						-0.9856814
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
																						"instanceID": 157,
																						"props": {
																							"name": "Bip001 Head",
																							"active": true,
																							"isStatic": false,
																							"layer": 0,
																							"position": [
																								0.0401153,
																								-0.007424995,
																								-7.13132E-09
																							],
																							"rotation": [
																								1.173165E-13,
																								-2.54205E-07,
																								0.09165232,
																								-0.9957911
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
																						"instanceID": 158,
																						"props": {
																							"name": "Bip001 L Clavicle",
																							"active": true,
																							"isStatic": false,
																							"layer": 0,
																							"position": [
																								-0.03214753,
																								0.007267371,
																								0.04008244
																							],
																							"rotation": [
																								-0.699359,
																								0.1043906,
																								-0.6941832,
																								-0.1345709
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
																								"instanceID": 159,
																								"props": {
																									"name": "Bip001 L UpperArm",
																									"active": true,
																									"isStatic": false,
																									"layer": 0,
																									"position": [
																										0.05034646,
																										-7.450581E-09,
																										5.960464E-08
																									],
																									"rotation": [
																										-0.09016536,
																										-0.3104663,
																										0.01830907,
																										-0.9461214
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
																										"instanceID": 160,
																										"props": {
																											"name": "Bip001 L Forearm",
																											"active": true,
																											"isStatic": false,
																											"layer": 0,
																											"position": [
																												0.1107747,
																												3.72529E-09,
																												0
																											],
																											"rotation": [
																												4.009726E-09,
																												-2.989623E-08,
																												0.02166923,
																												-0.9997652
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
																												"instanceID": 161,
																												"props": {
																													"name": "Bip001 L Hand",
																													"active": true,
																													"isStatic": false,
																													"layer": 0,
																													"position": [
																														0.08703777,
																														0,
																														-2.980232E-08
																													],
																													"rotation": [
																														0.7068252,
																														9.874233E-10,
																														-9.882098E-10,
																														-0.7073883
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
																														"instanceID": 162,
																														"props": {
																															"name": "Bip001 L Finger0",
																															"active": true,
																															"isStatic": false,
																															"layer": 0,
																															"position": [
																																0.03852724,
																																0.01335078,
																																-0.02700011
																															],
																															"rotation": [
																																-0.4942095,
																																0.07042696,
																																-0.1883026,
																																-0.8457772
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
																														"instanceID": 163,
																														"props": {
																															"name": "Bip001 L Finger1",
																															"active": true,
																															"isStatic": false,
																															"layer": 0,
																															"position": [
																																0.05709358,
																																-0.001786113,
																																0.001224391
																															],
																															"rotation": [
																																0.000365339,
																																-0.0001583117,
																																-0.3976016,
																																-0.9175581
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
																											}
																										]
																									}
																								]
																							}
																						]
																					},
																					{
																						"type": "Sprite3D",
																						"instanceID": 164,
																						"props": {
																							"name": "Bip001 R Clavicle",
																							"active": true,
																							"isStatic": false,
																							"layer": 0,
																							"position": [
																								-0.03214753,
																								0.007267587,
																								-0.04008242
																							],
																							"rotation": [
																								-0.6993587,
																								0.1043887,
																								0.6941835,
																								0.1345728
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
																								"instanceID": 165,
																								"props": {
																									"name": "Bip001 R UpperArm",
																									"active": true,
																									"isStatic": false,
																									"layer": 0,
																									"position": [
																										0.05034646,
																										-3.72529E-09,
																										-5.960464E-08
																									],
																									"rotation": [
																										0.09016536,
																										0.3104663,
																										0.01830908,
																										-0.9461214
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
																										"instanceID": 166,
																										"props": {
																											"name": "Bip001 R Forearm",
																											"active": true,
																											"isStatic": false,
																											"layer": 0,
																											"position": [
																												0.1107747,
																												-3.72529E-09,
																												0
																											],
																											"rotation": [
																												-4.940829E-09,
																												2.991641E-08,
																												0.02166924,
																												-0.9997652
																											],
																											"scale": [
																												0.9999999,
																												1,
																												0.9999999
																											]
																										},
																										"components": [],
																										"child": [
																											{
																												"type": "Sprite3D",
																												"instanceID": 167,
																												"props": {
																													"name": "Bip001 R Hand",
																													"active": true,
																													"isStatic": false,
																													"layer": 0,
																													"position": [
																														0.0870378,
																														3.72529E-09,
																														0
																													],
																													"rotation": [
																														-0.7068252,
																														-2.96227E-09,
																														-2.96463E-09,
																														-0.7073883
																													],
																													"scale": [
																														1,
																														1,
																														0.9999999
																													]
																												},
																												"components": [],
																												"child": [
																													{
																														"type": "Sprite3D",
																														"instanceID": 168,
																														"props": {
																															"name": "Bip001 R Finger0",
																															"active": true,
																															"isStatic": false,
																															"layer": 0,
																															"position": [
																																0.03852724,
																																0.01335078,
																																0.0270001
																															],
																															"rotation": [
																																0.4942095,
																																-0.07042698,
																																-0.1883026,
																																-0.8457772
																															],
																															"scale": [
																																0.9999999,
																																1,
																																0.9999999
																															]
																														},
																														"components": [],
																														"child": []
																													},
																													{
																														"type": "Sprite3D",
																														"instanceID": 169,
																														"props": {
																															"name": "Bip001 R Finger1",
																															"active": true,
																															"isStatic": false,
																															"layer": 0,
																															"position": [
																																0.05709356,
																																-0.001786172,
																																-0.001224384
																															],
																															"rotation": [
																																-0.0003653365,
																																0.0001583057,
																																-0.3976016,
																																-0.9175581
																															],
																															"scale": [
																																0.9999999,
																																0.9999999,
																																0.9999998
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
																					}
																				]
																			}
																		]
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
										"type": "SkinnedMeshSprite3D",
										"instanceID": 170,
										"props": {
											"name": "role_boy",
											"active": true,
											"isStatic": false,
											"layer": 0,
											"position": [
												0,
												0,
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
											"rootBone": 143,
											"boundBox": {
												"min": [
													-0.299583,
													-0.314118,
													-0.3350308
												],
												"max": [
													0.1743732,
													0.3141181,
													0.7280601
												]
											},
											"boundSphere": {
												"center": [
													-0.06260487,
													4.470348E-08,
													0.1965147
												],
												"radius": 0.661339
											},
											"bones": [
												157,
												155,
												154,
												156,
												166,
												167,
												169,
												168,
												165,
												164,
												145,
												160,
												161,
												163,
												162,
												159,
												158,
												143,
												144,
												146,
												147,
												148,
												149,
												150,
												151,
												152,
												153
											],
											"materials": [
												{
													"path": "Assets/Arts/juese/Materials/zhujue_nan.lmat"
												}
											],
											"meshPath": "Assets/Arts/juese/role_boy-role_boy.lm"
										},
										"components": [],
										"child": []
									}
								]
							},
							{
								"type": "MeshSprite3D",
								"instanceID": 171,
								"props": {
									"name": "tips",
									"active": true,
									"isStatic": false,
									"layer": 0,
									"position": [
										0,
										1.53,
										0
									],
									"rotation": [
										-2.980233E-08,
										-0.7071068,
										0.7071068,
										-2.980233E-08
									],
									"scale": [
										0.200829,
										0.200829,
										0.08201052
									],
									"meshPath": "Library/unity default resources-Plane.lm",
									"enableRender": true,
									"materials": [
										{
											"path": "Assets/Arts/Eff/boy.lmat"
										}
									]
								},
								"components": [],
								"child": []
							},
							{
								"type": "Sprite3D",
								"instanceID": 172,
								"props": {
									"name": "cam",
									"active": true,
									"isStatic": false,
									"layer": 0,
									"position": [
										0,
										2,
										-5
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
						"instanceID": 173,
						"props": {
							"name": "role_girl",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								-2.34,
								2.69,
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
											0.5,
											0
										],
										"size": [
											0.8,
											1,
											1
										]
									}
								],
								"isTrigger": false
							}
						],
						"child": [
							{
								"type": "Sprite3D",
								"instanceID": 174,
								"props": {
									"name": "role_girl",
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
										1,
										0,
										0
									],
									"scale": [
										1,
										1,
										1
									]
								},
								"components": [
									{
										"type": "Animator",
										"layers": [
											{
												"name": "Base Layer",
												"weight": 0,
												"blendingMode": 0,
												"states": [
													{
														"name": "arder",
														"clipPath": "Assets/Arts/juese/role_girl-arder.lani"
													},
													{
														"name": "dead",
														"clipPath": "Assets/Arts/juese/role_girl_death-dead.lani"
													},
													{
														"name": "run",
														"clipPath": "Assets/Arts/juese/role_girl_move-run.lani"
													}
												]
											}
										],
										"cullingMode": 0,
										"playOnWake": true
									}
								],
								"child": [
									{
										"type": "Sprite3D",
										"instanceID": 175,
										"props": {
											"name": "Bip001",
											"active": true,
											"isStatic": false,
											"layer": 0,
											"position": [
												0,
												0.4190438,
												0
											],
											"rotation": [
												0.5000004,
												0.4999997,
												0.4999997,
												-0.5000004
											],
											"scale": [
												0.9999999,
												0.9999999,
												1
											]
										},
										"components": [],
										"child": [
											{
												"type": "Sprite3D",
												"instanceID": 176,
												"props": {
													"name": "Bip001 Pelvis",
													"active": true,
													"isStatic": false,
													"layer": 0,
													"position": [
														0,
														0,
														0
													],
													"rotation": [
														0.4999997,
														0.5000004,
														0.4999997,
														-0.5000004
													],
													"scale": [
														1,
														0.9999999,
														0.9999999
													]
												},
												"components": [],
												"child": [
													{
														"type": "Sprite3D",
														"instanceID": 177,
														"props": {
															"name": "Bip001 Spine",
															"active": true,
															"isStatic": false,
															"layer": 0,
															"position": [
																0.03834026,
																-3.58623E-05,
																5.321999E-08
															],
															"rotation": [
																2.080476E-06,
																6.93676E-07,
																-0.000398159,
																-0.9999999
															],
															"scale": [
																1,
																0.9999999,
																0.9999999
															]
														},
														"components": [],
														"child": [
															{
																"type": "Sprite3D",
																"instanceID": 178,
																"props": {
																	"name": "Bip001 L Thigh",
																	"active": true,
																	"isStatic": false,
																	"layer": 0,
																	"position": [
																		-0.03834018,
																		6.625932E-05,
																		0.05491816
																	],
																	"rotation": [
																		0.05037686,
																		0.9987303,
																		1.336598E-06,
																		-6.590813E-08
																	],
																	"scale": [
																		0.9999999,
																		1,
																		1
																	]
																},
																"components": [],
																"child": [
																	{
																		"type": "Sprite3D",
																		"instanceID": 179,
																		"props": {
																			"name": "Bip001 L Calf",
																			"active": true,
																			"isStatic": false,
																			"layer": 0,
																			"position": [
																				0.1887578,
																				0,
																				-4.768371E-09
																			],
																			"rotation": [
																				-1.193051E-14,
																				1.197044E-15,
																				0.09983344,
																				-0.9950042
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
																				"instanceID": 180,
																				"props": {
																					"name": "Bip001 L Foot",
																					"active": true,
																					"isStatic": false,
																					"layer": 0,
																					"position": [
																						0.1887577,
																						0,
																						4.768371E-09
																					],
																					"rotation": [
																						2.184718E-09,
																						-4.365676E-08,
																						-0.04997917,
																						-0.9987503
																					],
																					"scale": [
																						0.9999999,
																						0.9999999,
																						1
																					]
																				},
																				"components": [],
																				"child": [
																					{
																						"type": "Sprite3D",
																						"instanceID": 181,
																						"props": {
																							"name": "Bip001 L Toe0",
																							"active": true,
																							"isStatic": false,
																							"layer": 0,
																							"position": [
																								0.04341429,
																								0.05587231,
																								0
																							],
																							"rotation": [
																								1.545431E-08,
																								1.545431E-08,
																								-0.7071068,
																								-0.7071068
																							],
																							"scale": [
																								0.9999999,
																								1,
																								0.9999999
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
																"instanceID": 182,
																"props": {
																	"name": "Bip001 R Thigh",
																	"active": true,
																	"isStatic": false,
																	"layer": 0,
																	"position": [
																		-0.03834018,
																		6.656397E-05,
																		-0.05491816
																	],
																	"rotation": [
																		0.05037686,
																		0.9987303,
																		1.336598E-06,
																		-6.590813E-08
																	],
																	"scale": [
																		0.9999999,
																		1,
																		1
																	]
																},
																"components": [],
																"child": [
																	{
																		"type": "Sprite3D",
																		"instanceID": 183,
																		"props": {
																			"name": "Bip001 R Calf",
																			"active": true,
																			"isStatic": false,
																			"layer": 0,
																			"position": [
																				0.1887578,
																				0,
																				-4.768371E-09
																			],
																			"rotation": [
																				-1.193051E-14,
																				1.197044E-15,
																				0.09983344,
																				-0.9950042
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
																					"name": "Bip001 R Foot",
																					"active": true,
																					"isStatic": false,
																					"layer": 0,
																					"position": [
																						0.1887578,
																						-1.490116E-09,
																						4.768371E-09
																					],
																					"rotation": [
																						2.184718E-09,
																						-4.365676E-08,
																						-0.04997917,
																						-0.9987503
																					],
																					"scale": [
																						0.9999999,
																						0.9999999,
																						1
																					]
																				},
																				"components": [],
																				"child": [
																					{
																						"type": "Sprite3D",
																						"instanceID": 185,
																						"props": {
																							"name": "Bip001 R Toe0",
																							"active": true,
																							"isStatic": false,
																							"layer": 0,
																							"position": [
																								0.04341429,
																								0.05587231,
																								0
																							],
																							"rotation": [
																								1.545431E-08,
																								1.545431E-08,
																								-0.7071068,
																								-0.7071068
																							],
																							"scale": [
																								0.9999999,
																								1,
																								0.9999999
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
																"instanceID": 186,
																"props": {
																	"name": "Bip001 Spine1",
																	"active": true,
																	"isStatic": false,
																	"layer": 0,
																	"position": [
																		0.04505569,
																		-5.030665E-05,
																		-1.395302E-10
																	],
																	"rotation": [
																		1.042669E-13,
																		-1.556949E-07,
																		0.05613459,
																		-0.9984232
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
																		"instanceID": 187,
																		"props": {
																			"name": "Bip001 Neck",
																			"active": true,
																			"isStatic": false,
																			"layer": 0,
																			"position": [
																				0.08514946,
																				-3.946781E-05,
																				-1.09485E-10
																			],
																			"rotation": [
																				2.526301E-14,
																				2.043641E-07,
																				-0.07368188,
																				-0.9972818
																			],
																			"scale": [
																				0.9999999,
																				0.9999999,
																				0.9999999
																			]
																		},
																		"components": [],
																		"child": [
																			{
																				"type": "Sprite3D",
																				"instanceID": 188,
																				"props": {
																					"name": "Bip001 Head",
																					"active": true,
																					"isStatic": false,
																					"layer": 0,
																					"position": [
																						0.0382278,
																						-0.01140343,
																						-1.319097E-08
																					],
																					"rotation": [
																						-8.922093E-14,
																						-4.987423E-08,
																						0.01798246,
																						-0.9998384
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
																				"instanceID": 189,
																				"props": {
																					"name": "Bip001 L Clavicle",
																					"active": true,
																					"isStatic": false,
																					"layer": 0,
																					"position": [
																						-0.02163105,
																						-0.005210848,
																						0.01321305
																					],
																					"rotation": [
																						0.6223268,
																						-0.04622941,
																						0.7792443,
																						0.05788379
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
																						"instanceID": 190,
																						"props": {
																							"name": "Bip001 L UpperArm",
																							"active": true,
																							"isStatic": false,
																							"layer": 0,
																							"position": [
																								0.06508397,
																								4.768371E-09,
																								0
																							],
																							"rotation": [
																								-0.2805745,
																								-0.4718262,
																								0.04193134,
																								-0.8348053
																							],
																							"scale": [
																								0.9999999,
																								1,
																								0.9999999
																							]
																						},
																						"components": [],
																						"child": [
																							{
																								"type": "Sprite3D",
																								"instanceID": 191,
																								"props": {
																									"name": "Bip001 L Forearm",
																									"active": true,
																									"isStatic": false,
																									"layer": 0,
																									"position": [
																										0.1132547,
																										0,
																										0
																									],
																									"rotation": [
																										-2.93432E-08,
																										-6.405711E-09,
																										0.7424492,
																										-0.6699024
																									],
																									"scale": [
																										1,
																										0.9999999,
																										1
																									]
																								},
																								"components": [],
																								"child": [
																									{
																										"type": "Sprite3D",
																										"instanceID": 192,
																										"props": {
																											"name": "Bip001 L Hand",
																											"active": true,
																											"isStatic": false,
																											"layer": 0,
																											"position": [
																												0.09195475,
																												0,
																												3.814697E-08
																											],
																											"rotation": [
																												0.6979361,
																												-0.1118346,
																												-0.1117456,
																												-0.6984921
																											],
																											"scale": [
																												0.9999999,
																												1,
																												0.9999999
																											]
																										},
																										"components": [],
																										"child": [
																											{
																												"type": "Sprite3D",
																												"instanceID": 193,
																												"props": {
																													"name": "Bip001 L Finger0",
																													"active": true,
																													"isStatic": false,
																													"layer": 0,
																													"position": [
																														0.02407173,
																														0.01388365,
																														-0.02762073
																													],
																													"rotation": [
																														-0.481831,
																														0.02525058,
																														-0.1534255,
																														-0.8623584
																													],
																													"scale": [
																														1,
																														1,
																														0.9999999
																													]
																												},
																												"components": [],
																												"child": []
																											},
																											{
																												"type": "Sprite3D",
																												"instanceID": 194,
																												"props": {
																													"name": "Bip001 L Finger1",
																													"active": true,
																													"isStatic": false,
																													"layer": 0,
																													"position": [
																														0.05340139,
																														0.002568645,
																														-0.007785988
																													],
																													"rotation": [
																														0.0003576076,
																														-0.0001750776,
																														-0.4397148,
																														-0.8981374
																													],
																													"scale": [
																														0.9999999,
																														0.9999999,
																														0.9999999
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
																				"instanceID": 195,
																				"props": {
																					"name": "Bip001 R Clavicle",
																					"active": true,
																					"isStatic": false,
																					"layer": 0,
																					"position": [
																						-0.02163105,
																						-0.005210776,
																						-0.01321308
																					],
																					"rotation": [
																						-0.6223267,
																						0.04622727,
																						0.7792445,
																						0.05788553
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
																						"instanceID": 196,
																						"props": {
																							"name": "Bip001 R UpperArm",
																							"active": true,
																							"isStatic": false,
																							"layer": 0,
																							"position": [
																								0.06508399,
																								0,
																								0
																							],
																							"rotation": [
																								0.3362978,
																								0.407459,
																								0.06924339,
																								-0.8462188
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
																								"instanceID": 197,
																								"props": {
																									"name": "Bip001 R Forearm",
																									"active": true,
																									"isStatic": false,
																									"layer": 0,
																									"position": [
																										0.1132547,
																										0,
																										0
																									],
																									"rotation": [
																										-3.23259E-08,
																										-3.258061E-09,
																										0.8381487,
																										-0.5454418
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
																										"instanceID": 198,
																										"props": {
																											"name": "Bip001 R Hand",
																											"active": true,
																											"isStatic": false,
																											"layer": 0,
																											"position": [
																												0.09195475,
																												0,
																												1.907349E-08
																											],
																											"rotation": [
																												-0.6217626,
																												0.1466907,
																												-0.1200205,
																												-0.7599264
																											],
																											"scale": [
																												0.9999999,
																												0.9999999,
																												0.9999999
																											]
																										},
																										"components": [],
																										"child": [
																											{
																												"type": "Sprite3D",
																												"instanceID": 199,
																												"props": {
																													"name": "Bip001 R Finger0",
																													"active": true,
																													"isStatic": false,
																													"layer": 0,
																													"position": [
																														0.02407174,
																														0.01388365,
																														0.02762073
																													],
																													"rotation": [
																														0.481831,
																														-0.02525057,
																														-0.1534255,
																														-0.8623584
																													],
																													"scale": [
																														0.9999999,
																														1,
																														0.9999999
																													]
																												},
																												"components": [],
																												"child": []
																											},
																											{
																												"type": "Sprite3D",
																												"instanceID": 200,
																												"props": {
																													"name": "Bip001 R Finger1",
																													"active": true,
																													"isStatic": false,
																													"layer": 0,
																													"position": [
																														0.05340139,
																														0.002568607,
																														0.007786026
																													],
																													"rotation": [
																														-0.0003575709,
																														0.000175079,
																														-0.4397147,
																														-0.8981375
																													],
																													"scale": [
																														1,
																														0.9999999,
																														0.9999999
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
																			}
																		]
																	}
																]
															}
														]
													},
													{
														"type": "Sprite3D",
														"instanceID": 201,
														"props": {
															"name": "Bone001",
															"active": true,
															"isStatic": false,
															"layer": 0,
															"position": [
																-0.004281654,
																-0.002390509,
																3.814697E-08
															],
															"rotation": [
																0.06497001,
																0.9978873,
																-2.45234E-06,
																7.744141E-07
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
																"instanceID": 202,
																"props": {
																	"name": "Bone002",
																	"active": true,
																	"isStatic": false,
																	"layer": 0,
																	"position": [
																		0.157805,
																		-4.768371E-09,
																		-2.01638E-08
																	],
																	"rotation": [
																		9.720899E-07,
																		1.462176E-07,
																		0.09553622,
																		-0.995426
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
																		"instanceID": 203,
																		"props": {
																			"name": "Bone003",
																			"active": true,
																			"isStatic": false,
																			"layer": 0,
																			"position": [
																				0.137466,
																				-3.874302E-08,
																				-3.199965E-08
																			],
																			"rotation": [
																				-1.003542E-08,
																				-1.119288E-07,
																				0.08930073,
																				-0.9960047
																			],
																			"scale": [
																				0.9999998,
																				0.9999998,
																				1
																			]
																		},
																		"components": [],
																		"child": [
																			{
																				"type": "Sprite3D",
																				"instanceID": 204,
																				"props": {
																					"name": "Bone004",
																					"active": true,
																					"isStatic": false,
																					"layer": 0,
																					"position": [
																						0.1214385,
																						1.311302E-08,
																						1.16529E-14
																					],
																					"rotation": [
																						0,
																						0,
																						-1.503766E-30,
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
										"type": "SkinnedMeshSprite3D",
										"instanceID": 205,
										"props": {
											"name": "girl",
											"active": true,
											"isStatic": false,
											"layer": 0,
											"position": [
												-4.924928E-09,
												-4.924928E-09,
												0
											],
											"rotation": [
												0.7071068,
												0,
												0,
												-0.7071068
											],
											"scale": [
												100,
												100,
												100
											],
											"rootBone": 175,
											"boundBox": {
												"min": [
													-0.2720025,
													-0.3075532,
													-0.5173652
												],
												"max": [
													0.2267083,
													0.3075434,
													0.7056361
												]
											},
											"boundSphere": {
												"center": [
													-0.02264714,
													-4.917383E-06,
													0.09413546
												],
												"radius": 0.7284896
											},
											"bones": [
												188,
												189,
												186,
												190,
												195,
												196,
												176,
												177,
												201,
												175,
												187,
												202,
												193,
												191,
												192,
												194,
												203,
												204,
												199,
												197,
												198,
												200
											],
											"materials": [
												{
													"path": "Assets/Arts/Materials/Materials/role_girl.lmat"
												}
											],
											"meshPath": "Assets/Arts/juese/role_girl-girl.lm"
										},
										"components": [],
										"child": []
									}
								]
							},
							{
								"type": "MeshSprite3D",
								"instanceID": 206,
								"props": {
									"name": "tips",
									"active": true,
									"isStatic": false,
									"layer": 0,
									"position": [
										0,
										1.53,
										0
									],
									"rotation": [
										-2.980233E-08,
										-0.7071068,
										0.7071068,
										-2.980233E-08
									],
									"scale": [
										0.200829,
										0.200829,
										0.08201052
									],
									"meshPath": "Library/unity default resources-Plane.lm",
									"enableRender": true,
									"materials": [
										{
											"path": "Assets/Arts/Eff/girl.lmat"
										}
									]
								},
								"components": [],
								"child": []
							},
							{
								"type": "Sprite3D",
								"instanceID": 207,
								"props": {
									"name": "cam",
									"active": true,
									"isStatic": false,
									"layer": 0,
									"position": [
										0,
										2,
										-5
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
						"instanceID": 208,
						"props": {
							"name": "monster_3",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								2.4,
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
								"instanceID": 209,
								"props": {
									"name": "monster_3",
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
										1,
										0,
										0
									],
									"scale": [
										0.25,
										0.25,
										0.25
									]
								},
								"components": [
									{
										"type": "Animator",
										"layers": [
											{
												"name": "Base Layer",
												"weight": 0,
												"blendingMode": 0,
												"states": [
													{
														"name": "arder",
														"clipPath": "Assets/Arts/juese/Animator/Tiger 1/daiji-arder.lani"
													},
													{
														"name": "run",
														"clipPath": "Assets/Arts/juese/Animator/Tiger 1/zuo-run.lani"
													},
													{
														"name": "dead",
														"clipPath": "Assets/Arts/juese/Animator/Tiger 1/dead-dead.lani"
													},
													{
														"name": "attack",
														"clipPath": "Assets/Arts/juese/Animator/Tiger 1/gongji-attack.lani"
													}
												]
											}
										],
										"cullingMode": 0,
										"playOnWake": true
									}
								],
								"child": [
									{
										"type": "Sprite3D",
										"instanceID": 210,
										"props": {
											"name": "Bip01",
											"active": true,
											"isStatic": false,
											"layer": 0,
											"position": [
												0.007879329,
												2.945639,
												-1.973728
											],
											"rotation": [
												0.07391296,
												0.02467762,
												0.7066755,
												-0.7032337
											],
											"scale": [
												0.9999999,
												0.9999999,
												0.9999999
											]
										},
										"components": [],
										"child": [
											{
												"type": "Sprite3D",
												"instanceID": 211,
												"props": {
													"name": "Bip01 Pelvis",
													"active": true,
													"isStatic": false,
													"layer": 0,
													"position": [
														0.01212271,
														3.391266E-07,
														0.05958483
													],
													"rotation": [
														0.4999997,
														0.5000004,
														0.4999997,
														-0.5000004
													],
													"scale": [
														1,
														0.9999999,
														1
													]
												},
												"components": [],
												"child": [
													{
														"type": "Sprite3D",
														"instanceID": 212,
														"props": {
															"name": "Bip01 L Thigh",
															"active": true,
															"isStatic": false,
															"layer": 0,
															"position": [
																-7.751465E-07,
																9.689331E-07,
																0.6699418
															],
															"rotation": [
																0.5927252,
																0.8046403,
																0.01624087,
																-0.031101
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
																"instanceID": 213,
																"props": {
																	"name": "Bip01 L Calf",
																	"active": true,
																	"isStatic": false,
																	"layer": 0,
																	"position": [
																		1.319366,
																		-1.937866E-07,
																		0
																	],
																	"rotation": [
																		-2.068611E-09,
																		2.401208E-10,
																		0.5473619,
																		-0.8368961
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
																		"instanceID": 214,
																		"props": {
																			"name": "Bip01 L HorseLink",
																			"active": true,
																			"isStatic": false,
																			"layer": 0,
																			"position": [
																				1.085939,
																				0,
																				0
																			],
																			"rotation": [
																				-3.950579E-09,
																				1.921385E-09,
																				-0.5307833,
																				-0.8475076
																			],
																			"scale": [
																				1,
																				1,
																				0.9999999
																			]
																		},
																		"components": [],
																		"child": [
																			{
																				"type": "Sprite3D",
																				"instanceID": 215,
																				"props": {
																					"name": "Bip01 L Foot",
																					"active": true,
																					"isStatic": false,
																					"layer": 0,
																					"position": [
																						1.00255,
																						0,
																						0
																					],
																					"rotation": [
																						-0.04728115,
																						0.01087481,
																						0.1373544,
																						-0.9893332
																					],
																					"scale": [
																						0.9999999,
																						1,
																						1
																					]
																				},
																				"components": [],
																				"child": [
																					{
																						"type": "Sprite3D",
																						"instanceID": 216,
																						"props": {
																							"name": "Bip01 L Toe0",
																							"active": true,
																							"isStatic": false,
																							"layer": 0,
																							"position": [
																								0.3053217,
																								0.2941714,
																								0
																							],
																							"rotation": [
																								1.67534E-08,
																								1.241542E-08,
																								-0.796002,
																								-0.6052939
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
																								"instanceID": 217,
																								"props": {
																									"name": "Bip01 L Toe0Nub",
																									"active": true,
																									"isStatic": false,
																									"layer": 0,
																									"position": [
																										0.2424833,
																										0,
																										0
																									],
																									"rotation": [
																										4.074536E-10,
																										4.656613E-10,
																										1,
																										-6.142208E-17
																									],
																									"scale": [
																										-1,
																										-1,
																										-0.9999999
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
															}
														]
													},
													{
														"type": "Sprite3D",
														"instanceID": 218,
														"props": {
															"name": "Bip01 R Thigh",
															"active": true,
															"isStatic": false,
															"layer": 0,
															"position": [
																1.356506E-06,
																-9.689331E-07,
																-0.6699418
															],
															"rotation": [
																-0.8814103,
																-0.4720182,
																0.009507552,
																-0.01497456
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
																"instanceID": 219,
																"props": {
																	"name": "Bip01 R Calf",
																	"active": true,
																	"isStatic": false,
																	"layer": 0,
																	"position": [
																		1.319366,
																		-2.906799E-07,
																		0
																	],
																	"rotation": [
																		-7.948238E-09,
																		-6.11878E-09,
																		0.509169,
																		-0.8606666
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
																		"instanceID": 220,
																		"props": {
																			"name": "Bip01 R HorseLink",
																			"active": true,
																			"isStatic": false,
																			"layer": 0,
																			"position": [
																				1.085939,
																				-1.937866E-07,
																				-4.844665E-08
																			],
																			"rotation": [
																				3.590869E-09,
																				-2.110189E-09,
																				-0.5445535,
																				-0.8387261
																			],
																			"scale": [
																				0.9999999,
																				1,
																				1
																			]
																		},
																		"components": [],
																		"child": [
																			{
																				"type": "Sprite3D",
																				"instanceID": 221,
																				"props": {
																					"name": "Bip01 R Foot",
																					"active": true,
																					"isStatic": false,
																					"layer": 0,
																					"position": [
																						1.00255,
																						-2.422333E-08,
																						0
																					],
																					"rotation": [
																						-0.04954318,
																						-0.005885644,
																						0.4144009,
																						-0.9087259
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
																						"instanceID": 222,
																						"props": {
																							"name": "Bip01 R Toe0",
																							"active": true,
																							"isStatic": false,
																							"layer": 0,
																							"position": [
																								0.3053218,
																								0.2941714,
																								0
																							],
																							"rotation": [
																								-1.582077E-08,
																								-1.496035E-08,
																								-0.6723669,
																								-0.740218
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
																								"instanceID": 223,
																								"props": {
																									"name": "Bip01 R Toe0Nub",
																									"active": true,
																									"isStatic": false,
																									"layer": 0,
																									"position": [
																										0.2424832,
																										0,
																										4.844665E-08
																									],
																									"rotation": [
																										0,
																										-2.328306E-10,
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
														"instanceID": 224,
														"props": {
															"name": "Bip01 Spine",
															"active": true,
															"isStatic": false,
															"layer": 0,
															"position": [
																0.7291711,
																0.04102715,
																-1.550293E-06
															],
															"rotation": [
																-0.002421761,
																0.00427105,
																-0.2126547,
																-0.9771151
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
																"instanceID": 225,
																"props": {
																	"name": "Bip01 Spine1",
																	"active": true,
																	"isStatic": false,
																	"layer": 0,
																	"position": [
																		1.038408,
																		-0.0009555618,
																		3.827286E-06
																	],
																	"rotation": [
																		-0.003175574,
																		-0.03038046,
																		0.1650276,
																		-0.9858158
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
																		"instanceID": 226,
																		"props": {
																			"name": "Bip01 Spine2",
																			"active": true,
																			"isStatic": false,
																			"layer": 0,
																			"position": [
																				1.269157,
																				-0.001147217,
																				4.529762E-06
																			],
																			"rotation": [
																				-0.002765105,
																				-0.05662555,
																				0.08267492,
																				-0.9949627
																			],
																			"scale": [
																				0.9999999,
																				1,
																				0.9999999
																			]
																		},
																		"components": [],
																		"child": [
																			{
																				"type": "Sprite3D",
																				"instanceID": 227,
																				"props": {
																					"name": "Bip01 Neck",
																					"active": true,
																					"isStatic": false,
																					"layer": 0,
																					"position": [
																						1.639722,
																						-0.01655403,
																						8.478165E-06
																					],
																					"rotation": [
																						0.006764985,
																						0.02249957,
																						-0.2099078,
																						-0.9774389
																					],
																					"scale": [
																						1,
																						0.9999999,
																						1
																					]
																				},
																				"components": [],
																				"child": [
																					{
																						"type": "Sprite3D",
																						"instanceID": 228,
																						"props": {
																							"name": "Bip01 L Clavicle",
																							"active": true,
																							"isStatic": false,
																							"layer": 0,
																							"position": [
																								-0.0358451,
																								0.1427456,
																								0.1638694
																							],
																							"rotation": [
																								0.6338882,
																								0.1514089,
																								0.6704972,
																								0.3545342
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
																								"instanceID": 229,
																								"props": {
																									"name": "Bip01 L UpperArm",
																									"active": true,
																									"isStatic": false,
																									"layer": 0,
																									"position": [
																										0.7396904,
																										-1.937866E-07,
																										1.937866E-07
																									],
																									"rotation": [
																										0.3447492,
																										-0.5626666,
																										-0.03211736,
																										-0.7506816
																									],
																									"scale": [
																										0.9999999,
																										0.9999999,
																										1
																									]
																								},
																								"components": [],
																								"child": [
																									{
																										"type": "Sprite3D",
																										"instanceID": 230,
																										"props": {
																											"name": "Bip01 L Forearm",
																											"active": true,
																											"isStatic": false,
																											"layer": 0,
																											"position": [
																												1.068626,
																												4.844666E-07,
																												-4.844665E-08
																											],
																											"rotation": [
																												-8.329599E-10,
																												4.165805E-10,
																												0.4473,
																												-0.894384
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
																												"instanceID": 231,
																												"props": {
																													"name": "Bip01 L Hand",
																													"active": true,
																													"isStatic": false,
																													"layer": 0,
																													"position": [
																														1.145969,
																														-9.689331E-08,
																														0
																													],
																													"rotation": [
																														-0.004716916,
																														-0.01064372,
																														0.02199857,
																														-0.9996902
																													],
																													"scale": [
																														0.9999999,
																														0.9999999,
																														0.9999999
																													]
																												},
																												"components": [],
																												"child": [
																													{
																														"type": "Sprite3D",
																														"instanceID": 232,
																														"props": {
																															"name": "Bip01 L Finger0",
																															"active": true,
																															"isStatic": false,
																															"layer": 0,
																															"position": [
																																0.4131663,
																																-0.009011756,
																																-0.03568096
																															],
																															"rotation": [
																																-0.008948623,
																																-0.02892086,
																																0.410495,
																																-0.9113602
																															],
																															"scale": [
																																1,
																																0.9999999,
																																1
																															]
																														},
																														"components": [],
																														"child": [
																															{
																																"type": "Sprite3D",
																																"instanceID": 233,
																																"props": {
																																	"name": "Bip01 L Finger01",
																																	"active": true,
																																	"isStatic": false,
																																	"layer": 0,
																																	"position": [
																																		0.4033377,
																																		-9.689331E-08,
																																		-9.689331E-08
																																	],
																																	"rotation": [
																																		-8.537463E-09,
																																		-2.075315E-09,
																																		0.3147004,
																																		-0.9491911
																																	],
																																	"scale": [
																																		0.9999999,
																																		0.9999999,
																																		0.9999999
																																	]
																																},
																																"components": [],
																																"child": [
																																	{
																																		"type": "Sprite3D",
																																		"instanceID": 234,
																																		"props": {
																																			"name": "Bip01 L Finger0Nub",
																																			"active": true,
																																			"isStatic": false,
																																			"layer": 0,
																																			"position": [
																																				0.2729768,
																																				0,
																																				0
																																			],
																																			"rotation": [
																																				-3.469446E-18,
																																				-9.313225E-10,
																																				3.72529E-09,
																																				-1
																																			],
																																			"scale": [
																																				1,
																																				1,
																																				0.9999999
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
																									}
																								]
																							}
																						]
																					},
																					{
																						"type": "Sprite3D",
																						"instanceID": 235,
																						"props": {
																							"name": "Bip01 Neck1",
																							"active": true,
																							"isStatic": false,
																							"layer": 0,
																							"position": [
																								0.4715034,
																								-0.0003976501,
																								1.211166E-08
																							],
																							"rotation": [
																								0.0001992813,
																								0.02617619,
																								0.006814315,
																								-0.9996341
																							],
																							"scale": [
																								0.9999999,
																								1,
																								1
																							]
																						},
																						"components": [],
																						"child": [
																							{
																								"type": "Sprite3D",
																								"instanceID": 236,
																								"props": {
																									"name": "Bip01 Head",
																									"active": true,
																									"isStatic": false,
																									"layer": 0,
																									"position": [
																										0.4995681,
																										0,
																										3.027916E-09
																									],
																									"rotation": [
																										0.006976795,
																										-0.0006198737,
																										-0.04784003,
																										-0.9988304
																									],
																									"scale": [
																										1,
																										0.9999998,
																										0.9999999
																									]
																								},
																								"components": [],
																								"child": [
																									{
																										"type": "Sprite3D",
																										"instanceID": 237,
																										"props": {
																											"name": "Bip01 HeadNub",
																											"active": true,
																											"isStatic": false,
																											"layer": 0,
																											"position": [
																												1.154549,
																												-3.875732E-07,
																												0
																											],
																											"rotation": [
																												1.164153E-10,
																												-5.820765E-11,
																												-6.776262E-21,
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
																										"instanceID": 238,
																										"props": {
																											"name": "Bip01 Ponytail1",
																											"active": true,
																											"isStatic": false,
																											"layer": 0,
																											"position": [
																												0.2285386,
																												0.4638771,
																												4.69327E-07
																											],
																											"rotation": [
																												-1.475091E-10,
																												3.973909E-07,
																												-0.1433266,
																												-0.9896755
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
																												"instanceID": 239,
																												"props": {
																													"name": "Bip01 Ponytail1Nub",
																													"active": true,
																													"isStatic": false,
																													"layer": 0,
																													"position": [
																														0.8446848,
																														0,
																														-3.027916E-09
																													],
																													"rotation": [
																														-0.7073883,
																														-0.7068252,
																														-9.80963E-07,
																														9.801822E-07
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
																									}
																								]
																							}
																						]
																					},
																					{
																						"type": "Sprite3D",
																						"instanceID": 240,
																						"props": {
																							"name": "Bip01 R Clavicle",
																							"active": true,
																							"isStatic": false,
																							"layer": 0,
																							"position": [
																								-0.04892724,
																								0.1499548,
																								-0.1537511
																							],
																							"rotation": [
																								-0.7525527,
																								-0.05124429,
																								0.5215116,
																								0.3988285
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
																									"name": "Bip01 R UpperArm",
																									"active": true,
																									"isStatic": false,
																									"layer": 0,
																									"position": [
																										0.7396906,
																										1.937866E-07,
																										0
																									],
																									"rotation": [
																										-0.4350933,
																										0.5298615,
																										0.02082926,
																										-0.7276722
																									],
																									"scale": [
																										0.9999998,
																										1,
																										0.9999999
																									]
																								},
																								"components": [],
																								"child": [
																									{
																										"type": "Sprite3D",
																										"instanceID": 242,
																										"props": {
																											"name": "Bip01 R Forearm",
																											"active": true,
																											"isStatic": false,
																											"layer": 0,
																											"position": [
																												1.068626,
																												0,
																												0
																											],
																											"rotation": [
																												4.285886E-09,
																												-2.502173E-10,
																												0.6939366,
																												-0.7200361
																											],
																											"scale": [
																												0.9999999,
																												1,
																												1
																											]
																										},
																										"components": [],
																										"child": [
																											{
																												"type": "Sprite3D",
																												"instanceID": 243,
																												"props": {
																													"name": "Bip01 R Hand",
																													"active": true,
																													"isStatic": false,
																													"layer": 0,
																													"position": [
																														1.14597,
																														0,
																														0
																													],
																													"rotation": [
																														-0.003525087,
																														0.01570863,
																														-0.2446259,
																														-0.9694839
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
																														"instanceID": 244,
																														"props": {
																															"name": "Bip01 R Finger0",
																															"active": true,
																															"isStatic": false,
																															"layer": 0,
																															"position": [
																																0.4131663,
																																-0.009012046,
																																0.03568106
																															],
																															"rotation": [
																																0.02280606,
																																0.01990925,
																																-0.1294091,
																																-0.9911291
																															],
																															"scale": [
																																0.9999999,
																																0.9999999,
																																0.9999999
																															]
																														},
																														"components": [],
																														"child": [
																															{
																																"type": "Sprite3D",
																																"instanceID": 245,
																																"props": {
																																	"name": "Bip01 R Finger01",
																																	"active": true,
																																	"isStatic": false,
																																	"layer": 0,
																																	"position": [
																																		0.4033378,
																																		3.875732E-07,
																																		0
																																	],
																																	"rotation": [
																																		-1.516256E-08,
																																		8.881298E-09,
																																		-0.4638444,
																																		-0.8859167
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
																																		"instanceID": 246,
																																		"props": {
																																			"name": "Bip01 R Finger0Nub",
																																			"active": true,
																																			"isStatic": false,
																																			"layer": 0,
																																			"position": [
																																				0.2729769,
																																				3.875732E-07,
																																				0
																																			],
																																			"rotation": [
																																				-9.313226E-10,
																																				-3.725291E-09,
																																				1,
																																				-6.470179E-17
																																			],
																																			"scale": [
																																				-1,
																																				-0.9999999,
																																				-1
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
																									}
																								]
																							}
																						]
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
														"instanceID": 247,
														"props": {
															"name": "Bip01 Tail",
															"active": true,
															"isStatic": false,
															"layer": 0,
															"position": [
																-0.5484291,
																-0.2538483,
																-5.256462E-05
															],
															"rotation": [
																0.0505552,
																0.0201498,
																0.9495867,
																0.3087448
															],
															"scale": [
																1,
																1,
																0.9999999
															]
														},
														"components": [],
														"child": [
															{
																"type": "Sprite3D",
																"instanceID": 248,
																"props": {
																	"name": "Bip01 Tail1",
																	"active": true,
																	"isStatic": false,
																	"layer": 0,
																	"position": [
																		0.9325095,
																		-0.0006728271,
																		1.241446E-05
																	],
																	"rotation": [
																		0.01534981,
																		0.08676981,
																		0.07005069,
																		-0.9936439
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
																		"instanceID": 249,
																		"props": {
																			"name": "Bip01 Tail2",
																			"active": true,
																			"isStatic": false,
																			"layer": 0,
																			"position": [
																				0.8547045,
																				-0.0006088776,
																				4.166412E-05
																			],
																			"rotation": [
																				0.03070239,
																				0.07102636,
																				-0.04958678,
																				-0.995768
																			],
																			"scale": [
																				0.9999999,
																				0.9999999,
																				1
																			]
																		},
																		"components": [],
																		"child": [
																			{
																				"type": "Sprite3D",
																				"instanceID": 250,
																				"props": {
																					"name": "Bip01 Tail3",
																					"active": true,
																					"isStatic": false,
																					"layer": 0,
																					"position": [
																						0.7694717,
																						-0.0004829162,
																						-6.954517E-05
																					],
																					"rotation": [
																						-0.04054826,
																						-0.1104079,
																						-0.2281809,
																						-0.9664882
																					],
																					"scale": [
																						0.9999999,
																						0.9999998,
																						1
																					]
																				},
																				"components": [],
																				"child": [
																					{
																						"type": "Sprite3D",
																						"instanceID": 251,
																						"props": {
																							"name": "Bip01 Tail4",
																							"active": true,
																							"isStatic": false,
																							"layer": 0,
																							"position": [
																								0.6799523,
																								-0.0004290436,
																								-3.628654E-05
																							],
																							"rotation": [
																								0.01624392,
																								-0.1370573,
																								-0.3452773,
																								-0.9282968
																							],
																							"scale": [
																								1,
																								1,
																								0.9999999
																							]
																						},
																						"components": [],
																						"child": [
																							{
																								"type": "Sprite3D",
																								"instanceID": 252,
																								"props": {
																									"name": "Bip01 TailNub",
																									"active": true,
																									"isStatic": false,
																									"layer": 0,
																									"position": [
																										0.707006,
																										0,
																										0
																									],
																									"rotation": [
																										-0.7073883,
																										-0.7068252,
																										-9.750338E-07,
																										9.742577E-07
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
																					}
																				]
																			}
																		]
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
										"type": "SkinnedMeshSprite3D",
										"instanceID": 253,
										"props": {
											"name": "Tiger_0",
											"active": true,
											"isStatic": false,
											"layer": 0,
											"position": [
												0,
												0,
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
											"rootBone": 210,
											"boundBox": {
												"min": [
													-1.635812,
													-1.788665,
													-4.069004
												],
												"max": [
													4.129665,
													1.435581,
													7.38069
												]
											},
											"boundSphere": {
												"center": [
													1.246926,
													-0.1765422,
													1.655843
												],
												"radius": 6.609311
											},
											"bones": [
												236,
												237,
												235,
												238,
												227,
												239,
												225,
												226,
												224,
												213,
												212,
												211,
												218,
												210,
												247,
												229,
												230,
												241,
												252,
												232,
												234,
												233,
												214,
												231,
												248,
												249,
												250,
												228,
												215,
												216,
												217,
												219,
												240,
												242,
												244,
												246,
												245,
												243,
												220,
												221,
												222,
												223,
												251
											],
											"materials": [
												{
													"path": "Assets/Arts/juese/Animator/Tiger 1/Materials/Tiger Skin Bengala.lmat"
												}
											],
											"meshPath": "Assets/Arts/juese/Animator/Tiger 1/zuo-Tiger_0.lm"
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
						"instanceID": 254,
						"props": {
							"name": "Eff_lihua",
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
								"type": "ShuriKenParticle3D",
								"instanceID": 255,
								"props": {
									"name": "Particle System",
									"active": true,
									"isStatic": false,
									"layer": 0,
									"position": [
										-3.58,
										-6.29,
										-2.28
									],
									"rotation": [
										0.6979425,
										-0.1134739,
										0.1134739,
										-0.6979425
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
									"startLifetimeType": 0,
									"startLifetimeConstant": 1,
									"startLifetimeConstantMin": 0,
									"startLifetimeConstantMax": 1,
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
									"startSpeedConstant": 16,
									"startSpeedConstantMin": 0,
									"startSpeedConstantMax": 16,
									"threeDStartSize": false,
									"startSizeType": 0,
									"startSizeConstant": 1,
									"startSizeConstantMin": 0,
									"startSizeConstantMax": 1,
									"startSizeConstantSeparate": [
										1,
										1,
										1
									],
									"startSizeConstantMinSeparate": [
										0,
										0,
										0
									],
									"startSizeConstantMaxSeparate": [
										1,
										1,
										1
									],
									"threeDStartRotation": false,
									"startRotationType": 0,
									"startRotationConstant": 0,
									"startRotationConstantMin": 0,
									"startRotationConstantMax": 0,
									"startRotationConstantSeparate": [
										0,
										0,
										0
									],
									"startRotationConstantMinSeparate": [
										0,
										0,
										0
									],
									"startRotationConstantMaxSeparate": [
										0,
										0,
										0
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
									"gravityModifier": 0,
									"simulationSpace": 1,
									"simulationSpeed": 1,
									"scaleMode": 1,
									"playOnAwake": true,
									"maxParticles": 50,
									"autoRandomSeed": true,
									"randomSeed": 0,
									"emission": {
										"enable": true,
										"emissionRate": 20,
										"emissionRateTip": "Time",
										"bursts": [
											{
												"time": 0,
												"min": 0,
												"max": 10
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
										"coneAngle": 25,
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
									"textureSheetAnimation": {
										"enable": true,
										"tiles": [
											3,
											3
										],
										"type": 1,
										"randomRow": true,
										"rowIndex": 0,
										"frame": {
											"type": 1,
											"constant": 0,
											"overTime": {
												"frames": [
													{
														"key": 0,
														"value": 0
													},
													{
														"key": 1,
														"value": 2.9997
													}
												]
											},
											"constantMin": 0,
											"constantMax": 0,
											"overTimeMin": {
												"frames": []
											},
											"overTimeMax": {
												"frames": [
													{
														"key": 0,
														"value": 0
													},
													{
														"key": 1,
														"value": 2.9997
													}
												]
											}
										},
										"startFrame": {
											"type": 0,
											"constant": 0,
											"constantMin": 0,
											"constantMax": 0
										},
										"cycles": 1,
										"enableUVChannels": 1,
										"enableUVChannelsTip": "-1"
									},
									"renderMode": 0,
									"stretchedBillboardCameraSpeedScale": 0,
									"stretchedBillboardSpeedScale": 0,
									"stretchedBillboardLengthScale": 2,
									"sortingFudge": 0,
									"material": {
										"type": "Laya.ShurikenParticleMaterial",
										"path": "Assets/Arts/Eff/Eff_lihua.lmat"
									}
								},
								"components": [],
								"child": []
							},
							{
								"type": "ShuriKenParticle3D",
								"instanceID": 256,
								"props": {
									"name": "Particle System (1)",
									"active": true,
									"isStatic": false,
									"layer": 0,
									"position": [
										4.07,
										-6.29,
										-2.28
									],
									"rotation": [
										0.7048797,
										0.0560769,
										-0.0560769,
										-0.7048797
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
									"startLifetimeType": 0,
									"startLifetimeConstant": 1,
									"startLifetimeConstantMin": 0,
									"startLifetimeConstantMax": 1,
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
									"startSpeedConstant": 16,
									"startSpeedConstantMin": 0,
									"startSpeedConstantMax": 16,
									"threeDStartSize": false,
									"startSizeType": 0,
									"startSizeConstant": 1,
									"startSizeConstantMin": 0,
									"startSizeConstantMax": 1,
									"startSizeConstantSeparate": [
										1,
										1,
										1
									],
									"startSizeConstantMinSeparate": [
										0,
										0,
										0
									],
									"startSizeConstantMaxSeparate": [
										1,
										1,
										1
									],
									"threeDStartRotation": false,
									"startRotationType": 0,
									"startRotationConstant": 0,
									"startRotationConstantMin": 0,
									"startRotationConstantMax": 0,
									"startRotationConstantSeparate": [
										0,
										0,
										0
									],
									"startRotationConstantMinSeparate": [
										0,
										0,
										0
									],
									"startRotationConstantMaxSeparate": [
										0,
										0,
										0
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
									"gravityModifier": 0,
									"simulationSpace": 1,
									"simulationSpeed": 1,
									"scaleMode": 1,
									"playOnAwake": true,
									"maxParticles": 50,
									"autoRandomSeed": true,
									"randomSeed": 0,
									"emission": {
										"enable": true,
										"emissionRate": 20,
										"emissionRateTip": "Time",
										"bursts": [
											{
												"time": 0,
												"min": 0,
												"max": 10
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
										"coneAngle": 25,
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
									"textureSheetAnimation": {
										"enable": true,
										"tiles": [
											3,
											3
										],
										"type": 1,
										"randomRow": true,
										"rowIndex": 0,
										"frame": {
											"type": 1,
											"constant": 0,
											"overTime": {
												"frames": [
													{
														"key": 0,
														"value": 0
													},
													{
														"key": 1,
														"value": 2.9997
													}
												]
											},
											"constantMin": 0,
											"constantMax": 0,
											"overTimeMin": {
												"frames": []
											},
											"overTimeMax": {
												"frames": [
													{
														"key": 0,
														"value": 0
													},
													{
														"key": 1,
														"value": 2.9997
													}
												]
											}
										},
										"startFrame": {
											"type": 0,
											"constant": 0,
											"constantMin": 0,
											"constantMax": 0
										},
										"cycles": 1,
										"enableUVChannels": 1,
										"enableUVChannelsTip": "-1"
									},
									"renderMode": 0,
									"stretchedBillboardCameraSpeedScale": 0,
									"stretchedBillboardSpeedScale": 0,
									"stretchedBillboardLengthScale": 2,
									"sortingFudge": 0,
									"material": {
										"type": "Laya.ShurikenParticleMaterial",
										"path": "Assets/Arts/Eff/Eff_lihua.lmat"
									}
								},
								"components": [],
								"child": []
							}
						]
					},
					{
						"type": "ShuriKenParticle3D",
						"instanceID": 257,
						"props": {
							"name": "Eff_baozha2",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								0,
								0,
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
							"duration": 0.6,
							"looping": false,
							"prewarm": false,
							"startDelayType": 0,
							"startDelay": 0,
							"startDelayMin": 0,
							"startDelayMax": 0,
							"startLifetimeType": 0,
							"startLifetimeConstant": 1,
							"startLifetimeConstantMin": 0,
							"startLifetimeConstantMax": 1,
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
							"startSpeedConstant": 0,
							"startSpeedConstantMin": 0,
							"startSpeedConstantMax": 0,
							"threeDStartSize": false,
							"startSizeType": 0,
							"startSizeConstant": 2.5,
							"startSizeConstantMin": 0,
							"startSizeConstantMax": 2.5,
							"startSizeConstantSeparate": [
								2.5,
								1,
								1
							],
							"startSizeConstantMinSeparate": [
								0,
								0,
								0
							],
							"startSizeConstantMaxSeparate": [
								2.5,
								1,
								1
							],
							"threeDStartRotation": false,
							"startRotationType": 0,
							"startRotationConstant": 0,
							"startRotationConstantMin": 0,
							"startRotationConstantMax": 0,
							"startRotationConstantSeparate": [
								0,
								0,
								0
							],
							"startRotationConstantMinSeparate": [
								0,
								0,
								0
							],
							"startRotationConstantMaxSeparate": [
								0,
								0,
								0
							],
							"randomizeRotationDirection": 0,
							"startColorType": 0,
							"startColorConstant": [
								0.7735849,
								0.7735849,
								0.7735849,
								0.8588235
							],
							"startColorConstantMin": [
								0,
								0,
								0,
								0
							],
							"startColorConstantMax": [
								0.7735849,
								0.7735849,
								0.7735849,
								0.8588235
							],
							"gravity": [
								0,
								-9.81,
								0
							],
							"gravityModifier": 0,
							"simulationSpace": 1,
							"simulationSpeed": 1,
							"scaleMode": 1,
							"playOnAwake": true,
							"maxParticles": 1,
							"autoRandomSeed": true,
							"randomSeed": 0,
							"emission": {
								"enable": true,
								"emissionRate": 10,
								"emissionRateTip": "Time",
								"bursts": []
							},
							"textureSheetAnimation": {
								"enable": true,
								"tiles": [
									4,
									4
								],
								"type": 0,
								"randomRow": true,
								"rowIndex": 0,
								"frame": {
									"type": 1,
									"constant": 0,
									"overTime": {
										"frames": [
											{
												"key": 0,
												"value": 0
											},
											{
												"key": 1,
												"value": 15.9984
											}
										]
									},
									"constantMin": 0,
									"constantMax": 0,
									"overTimeMin": {
										"frames": []
									},
									"overTimeMax": {
										"frames": [
											{
												"key": 0,
												"value": 0
											},
											{
												"key": 1,
												"value": 15.9984
											}
										]
									}
								},
								"startFrame": {
									"type": 0,
									"constant": 0,
									"constantMin": 0,
									"constantMax": 0
								},
								"cycles": 1,
								"enableUVChannels": 1,
								"enableUVChannelsTip": "-1"
							},
							"renderMode": 0,
							"stretchedBillboardCameraSpeedScale": 0,
							"stretchedBillboardSpeedScale": 0,
							"stretchedBillboardLengthScale": 2,
							"sortingFudge": 0,
							"material": {
								"type": "Laya.ShurikenParticleMaterial",
								"path": "Assets/Arts/Eff/cannon_mu.lmat"
							}
						},
						"components": [],
						"child": []
					},
					{
						"type": "MeshSprite3D",
						"instanceID": 258,
						"props": {
							"name": "trap_3_R",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								0,
								0,
								0
							],
							"rotation": [
								0.5,
								0.5,
								0.5,
								0.5
							],
							"scale": [
								1,
								1,
								1
							],
							"meshPath": "Assets/Arts/model/trap_3-jiannv.lm",
							"enableRender": true,
							"materials": [
								{
									"path": "Assets/Arts/Materials/Materials/tianping.lmat"
								}
							]
						},
						"components": [],
						"child": []
					},
					{
						"type": "Sprite3D",
						"instanceID": 259,
						"props": {
							"name": "trap_2",
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
								"instanceID": 260,
								"props": {
									"name": "trap_2",
									"active": true,
									"isStatic": false,
									"layer": 0,
									"position": [
										0,
										0.1,
										0
									],
									"rotation": [
										0.7071068,
										0,
										0,
										-0.7071068
									],
									"scale": [
										0.587889,
										0.5878894,
										0.5878894
									],
									"meshPath": "Assets/Arts/model/trap_2-trap_2.lm",
									"enableRender": true,
									"materials": [
										{
											"path": "Assets/Arts/Materials/Materials/trap_2.lmat"
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
						"instanceID": 261,
						"props": {
							"name": "zhuju_nv_orange",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								-1.26,
								7.29,
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
							"meshPath": "Library/unity default resources-Cube.lm",
							"enableRender": true,
							"materials": [
								{
									"path": "Assets/Arts/Materials/Materials/zhuju_nv_orange.lmat"
								}
							]
						},
						"components": [],
						"child": []
					},
					{
						"type": "MeshSprite3D",
						"instanceID": 262,
						"props": {
							"name": "zhuju_nv_green",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								0,
								7.33,
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
							"meshPath": "Library/unity default resources-Cube.lm",
							"enableRender": true,
							"materials": [
								{
									"path": "Assets/Arts/Materials/Materials/zhuju_nv_green.lmat"
								}
							]
						},
						"components": [],
						"child": []
					},
					{
						"type": "MeshSprite3D",
						"instanceID": 263,
						"props": {
							"name": "zhuju_nv_bule",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								1.29,
								7.31,
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
							"meshPath": "Library/unity default resources-Cube.lm",
							"enableRender": true,
							"materials": [
								{
									"path": "Assets/Arts/Materials/Materials/zhuju_nv_bule.lmat"
								}
							]
						},
						"components": [],
						"child": []
					},
					{
						"type": "MeshSprite3D",
						"instanceID": 264,
						"props": {
							"name": "zhuju_nv_violet",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								2.64,
								7.29,
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
							"meshPath": "Library/unity default resources-Cube.lm",
							"enableRender": true,
							"materials": [
								{
									"path": "Assets/Arts/Materials/Materials/zhuju_nv_violet.lmat"
								}
							]
						},
						"components": [],
						"child": []
					},
					{
						"type": "MeshSprite3D",
						"instanceID": 265,
						"props": {
							"name": "zhujue_nan_grey",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								2.64,
								8.56,
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
							"meshPath": "Library/unity default resources-Cube.lm",
							"enableRender": true,
							"materials": [
								{
									"path": "Assets/Arts/Materials/Materials/zhujue_nan_grey.lmat"
								}
							]
						},
						"components": [],
						"child": []
					},
					{
						"type": "MeshSprite3D",
						"instanceID": 266,
						"props": {
							"name": "zhujue_nan_orange",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								1.3,
								8.56,
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
							"meshPath": "Library/unity default resources-Cube.lm",
							"enableRender": true,
							"materials": [
								{
									"path": "Assets/Arts/Materials/Materials/zhujue_nan_orange.lmat"
								}
							]
						},
						"components": [],
						"child": []
					},
					{
						"type": "MeshSprite3D",
						"instanceID": 267,
						"props": {
							"name": "zhujue_nan_red",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								-0.02,
								8.56,
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
							"meshPath": "Library/unity default resources-Cube.lm",
							"enableRender": true,
							"materials": [
								{
									"path": "Assets/Arts/Materials/Materials/zhujue_nan_red.lmat"
								}
							]
						},
						"components": [],
						"child": []
					},
					{
						"type": "MeshSprite3D",
						"instanceID": 268,
						"props": {
							"name": "zhujue_nan_violet",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								-1.32,
								8.56,
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
							"meshPath": "Library/unity default resources-Cube.lm",
							"enableRender": true,
							"materials": [
								{
									"path": "Assets/Arts/Materials/Materials/zhujue_nan_violet.lmat"
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
				"instanceID": 269,
				"props": {
					"name": "ActiveObject",
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
						"instanceID": 270,
						"props": {
							"name": "gunzi_left",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								1.03,
								-3.6,
								-0.092
							],
							"rotation": [
								0,
								0,
								0,
								-1
							],
							"scale": [
								1,
								3.3,
								1
							]
						},
						"components": [],
						"child": [
							{
								"type": "MeshSprite3D",
								"instanceID": 271,
								"props": {
									"name": "gunzi_left",
									"active": true,
									"isStatic": false,
									"layer": 0,
									"position": [
										0,
										0,
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
									"meshPath": "Assets/Arts/model/gunzi-Object001.lm",
									"enableRender": true,
									"materials": [
										{
											"path": "Assets/Arts/Materials/Materials/tianping.lmat"
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
						"instanceID": 272,
						"props": {
							"name": "gunzi_right",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								-1.04,
								-3.6,
								-0.092
							],
							"rotation": [
								0,
								0,
								0,
								-1
							],
							"scale": [
								1,
								3.3,
								1
							]
						},
						"components": [],
						"child": [
							{
								"type": "MeshSprite3D",
								"instanceID": 273,
								"props": {
									"name": "gunzi_right",
									"active": true,
									"isStatic": false,
									"layer": 0,
									"position": [
										0,
										0,
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
									"meshPath": "Assets/Arts/model/gunzi-Object001.lm",
									"enableRender": true,
									"materials": [
										{
											"path": "Assets/Arts/Materials/Materials/tianping.lmat"
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
						"instanceID": 274,
						"props": {
							"name": "cheng_left",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								1,
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
								"instanceID": 275,
								"props": {
									"name": "cheng_left",
									"active": true,
									"isStatic": false,
									"layer": 0,
									"position": [
										0,
										0,
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
									"meshPath": "Assets/Arts/model/cheng_01-Object003.lm",
									"enableRender": true,
									"materials": [
										{
											"path": "Assets/Arts/Materials/Materials/tianping.lmat"
										}
									]
								},
								"components": [],
								"child": []
							},
							{
								"type": "Sprite3D",
								"instanceID": 276,
								"props": {
									"name": "famaPoint",
									"active": true,
									"isStatic": false,
									"layer": 0,
									"position": [
										-0.45,
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
										0.1,
										0.1,
										0.1
									]
								},
								"components": [],
								"child": []
							},
							{
								"type": "Sprite3D",
								"instanceID": 277,
								"props": {
									"name": "itemPoint",
									"active": true,
									"isStatic": false,
									"layer": 0,
									"position": [
										0.4,
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
										0.1,
										0.1,
										0.1
									]
								},
								"components": [],
								"child": []
							}
						]
					},
					{
						"type": "Sprite3D",
						"instanceID": 278,
						"props": {
							"name": "cheng_right",
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
							]
						},
						"components": [],
						"child": [
							{
								"type": "MeshSprite3D",
								"instanceID": 279,
								"props": {
									"name": "cheng_right",
									"active": true,
									"isStatic": false,
									"layer": 0,
									"position": [
										0,
										0,
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
									"meshPath": "Assets/Arts/model/cheng_01-Object003.lm",
									"enableRender": true,
									"materials": [
										{
											"path": "Assets/Arts/Materials/Materials/tianping.lmat"
										}
									]
								},
								"components": [],
								"child": []
							},
							{
								"type": "Sprite3D",
								"instanceID": 280,
								"props": {
									"name": "famaPoint",
									"active": true,
									"isStatic": false,
									"layer": 0,
									"position": [
										0.4,
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
										0.1,
										0.1,
										0.1
									]
								},
								"components": [],
								"child": []
							},
							{
								"type": "Sprite3D",
								"instanceID": 281,
								"props": {
									"name": "itemPoint",
									"active": true,
									"isStatic": false,
									"layer": 0,
									"position": [
										-0.45,
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
										0.1,
										0.1,
										0.1
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
				"instanceID": 282,
				"props": {
					"name": "famaRoot",
					"active": true,
					"isStatic": false,
					"layer": 0,
					"position": [
						0,
						-5.55,
						-2.45
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
						"instanceID": 283,
						"props": {
							"name": "OddNum",
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
								"instanceID": 284,
								"props": {
									"name": "fama0",
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
								"instanceID": 285,
								"props": {
									"name": "fama1",
									"active": true,
									"isStatic": false,
									"layer": 0,
									"position": [
										1.23,
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
								"instanceID": 286,
								"props": {
									"name": "fama2",
									"active": true,
									"isStatic": false,
									"layer": 0,
									"position": [
										-1.31,
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
								"instanceID": 287,
								"props": {
									"name": "fama3",
									"active": true,
									"isStatic": false,
									"layer": 0,
									"position": [
										2.53,
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
								"instanceID": 288,
								"props": {
									"name": "fama4",
									"active": true,
									"isStatic": false,
									"layer": 0,
									"position": [
										-2.61,
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
						"instanceID": 289,
						"props": {
							"name": "EvenNum",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								-0.62,
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
								"instanceID": 290,
								"props": {
									"name": "fama0",
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
								"instanceID": 291,
								"props": {
									"name": "fama1",
									"active": true,
									"isStatic": false,
									"layer": 0,
									"position": [
										1.23,
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
								"instanceID": 292,
								"props": {
									"name": "fama2",
									"active": true,
									"isStatic": false,
									"layer": 0,
									"position": [
										-1.31,
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
								"instanceID": 293,
								"props": {
									"name": "fama3",
									"active": true,
									"isStatic": false,
									"layer": 0,
									"position": [
										2.53,
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
						"type": "MeshSprite3D",
						"instanceID": 294,
						"props": {
							"name": "nearPlane",
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
								20,
								30,
								0.1
							],
							"meshPath": "Library/unity default resources-Cube.lm",
							"enableRender": false,
							"materials": [
								{
									"type": "Laya.BlinnPhongMaterial",
									"path": "Resources/unity_builtin_extra.lmat"
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
						"instanceID": 295,
						"props": {
							"name": "farPlane",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								0,
								7.4,
								2.45
							],
							"rotation": [
								0,
								0,
								0,
								-1
							],
							"scale": [
								4.04,
								12.4,
								0.1
							],
							"meshPath": "Library/unity default resources-Cube.lm",
							"enableRender": false,
							"materials": [
								{
									"type": "Laya.BlinnPhongMaterial",
									"path": "Resources/unity_builtin_extra.lmat"
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
				"instanceID": 296,
				"props": {
					"name": "Points",
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
						"instanceID": 297,
						"props": {
							"name": "point1",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								3.57,
								3.22,
								0
							],
							"rotation": [
								0,
								0,
								0,
								-1
							],
							"scale": [
								0.1,
								0.1,
								0.1
							],
							"meshPath": "Library/unity default resources-Sphere.lm",
							"enableRender": false,
							"materials": [
								{
									"type": "Laya.BlinnPhongMaterial",
									"path": "Resources/unity_builtin_extra.lmat"
								}
							]
						},
						"components": [],
						"child": []
					},
					{
						"type": "MeshSprite3D",
						"instanceID": 298,
						"props": {
							"name": "point2",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								2.86,
								2.46,
								0
							],
							"rotation": [
								0,
								0,
								0,
								-1
							],
							"scale": [
								0.1,
								0.1,
								0.1
							],
							"meshPath": "Library/unity default resources-Sphere.lm",
							"enableRender": false,
							"materials": [
								{
									"type": "Laya.BlinnPhongMaterial",
									"path": "Resources/unity_builtin_extra.lmat"
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
							"name": "point3",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								2.86,
								2.21,
								0
							],
							"rotation": [
								0,
								0,
								0,
								-1
							],
							"scale": [
								0.1,
								0.1,
								0.1
							],
							"meshPath": "Library/unity default resources-Sphere.lm",
							"enableRender": false,
							"materials": [
								{
									"type": "Laya.BlinnPhongMaterial",
									"path": "Resources/unity_builtin_extra.lmat"
								}
							]
						},
						"components": [],
						"child": []
					},
					{
						"type": "MeshSprite3D",
						"instanceID": 300,
						"props": {
							"name": "point4",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								3.57,
								0.92,
								0
							],
							"rotation": [
								0,
								0,
								0,
								-1
							],
							"scale": [
								0.1,
								0.1,
								0.1
							],
							"meshPath": "Library/unity default resources-Sphere.lm",
							"enableRender": false,
							"materials": [
								{
									"type": "Laya.BlinnPhongMaterial",
									"path": "Resources/unity_builtin_extra.lmat"
								}
							]
						},
						"components": [],
						"child": [
							{
								"type": "Sprite3D",
								"instanceID": 301,
								"props": {
									"name": "kaiguan_L (1)",
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
										10,
										10,
										10
									]
								},
								"components": [],
								"child": [
									{
										"type": "MeshSprite3D",
										"instanceID": 302,
										"props": {
											"name": "kaiguan_1",
											"active": true,
											"isStatic": false,
											"layer": 0,
											"position": [
												0,
												0,
												0
											],
											"rotation": [
												0.5,
												0.5,
												0.5,
												-0.5
											],
											"scale": [
												0.4310363,
												0.4310363,
												0.4310363
											],
											"meshPath": "Assets/Arts/model/kaiguan-kaiguan_1.lm",
											"enableRender": true,
											"materials": [
												{
													"path": "Assets/Arts/Materials/Materials/kaiguan_2.lmat"
												}
											]
										},
										"components": [],
										"child": []
									},
									{
										"type": "MeshSprite3D",
										"instanceID": 303,
										"props": {
											"name": "kaiguan_2",
											"active": true,
											"isStatic": false,
											"layer": 0,
											"position": [
												0,
												0,
												0
											],
											"rotation": [
												0.5,
												0.5,
												0.5,
												-0.5
											],
											"scale": [
												0.4310363,
												0.4310363,
												0.4310363
											],
											"meshPath": "Assets/Arts/model/kaiguan-kaiguan_2.lm",
											"enableRender": true,
											"materials": [
												{
													"path": "Assets/Arts/Materials/Materials/kaiguan_1.lmat"
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
						"type": "MeshSprite3D",
						"instanceID": 304,
						"props": {
							"name": "point5",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								2.86,
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
								0.1,
								0.1,
								0.1
							],
							"meshPath": "Library/unity default resources-Sphere.lm",
							"enableRender": false,
							"materials": [
								{
									"type": "Laya.BlinnPhongMaterial",
									"path": "Resources/unity_builtin_extra.lmat"
								}
							]
						},
						"components": [],
						"child": []
					},
					{
						"type": "MeshSprite3D",
						"instanceID": 305,
						"props": {
							"name": "point6",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								2.86,
								-0.29,
								0
							],
							"rotation": [
								0,
								0,
								0,
								-1
							],
							"scale": [
								0.1,
								0.1,
								0.1
							],
							"meshPath": "Library/unity default resources-Sphere.lm",
							"enableRender": false,
							"materials": [
								{
									"type": "Laya.BlinnPhongMaterial",
									"path": "Resources/unity_builtin_extra.lmat"
								}
							]
						},
						"components": [],
						"child": []
					},
					{
						"type": "MeshSprite3D",
						"instanceID": 306,
						"props": {
							"name": "point7",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								3.57,
								-1.6,
								0
							],
							"rotation": [
								0,
								0,
								0,
								-1
							],
							"scale": [
								0.1,
								0.1,
								0.1
							],
							"meshPath": "Library/unity default resources-Sphere.lm",
							"enableRender": false,
							"materials": [
								{
									"type": "Laya.BlinnPhongMaterial",
									"path": "Resources/unity_builtin_extra.lmat"
								}
							]
						},
						"components": [],
						"child": [
							{
								"type": "Sprite3D",
								"instanceID": 307,
								"props": {
									"name": "kaiguan_L (1)",
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
										10,
										10,
										10
									]
								},
								"components": [],
								"child": [
									{
										"type": "MeshSprite3D",
										"instanceID": 308,
										"props": {
											"name": "kaiguan_1",
											"active": true,
											"isStatic": false,
											"layer": 0,
											"position": [
												0,
												0,
												0
											],
											"rotation": [
												0.5,
												0.5,
												0.5,
												-0.5
											],
											"scale": [
												0.4310363,
												0.4310363,
												0.4310363
											],
											"meshPath": "Assets/Arts/model/kaiguan-kaiguan_1.lm",
											"enableRender": true,
											"materials": [
												{
													"path": "Assets/Arts/Materials/Materials/kaiguan_2.lmat"
												}
											]
										},
										"components": [],
										"child": []
									},
									{
										"type": "MeshSprite3D",
										"instanceID": 309,
										"props": {
											"name": "kaiguan_2",
											"active": true,
											"isStatic": false,
											"layer": 0,
											"position": [
												0,
												0,
												0
											],
											"rotation": [
												0.5,
												0.5,
												0.5,
												-0.5
											],
											"scale": [
												0.4310363,
												0.4310363,
												0.4310363
											],
											"meshPath": "Assets/Arts/model/kaiguan-kaiguan_2.lm",
											"enableRender": true,
											"materials": [
												{
													"path": "Assets/Arts/Materials/Materials/kaiguan_1.lmat"
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
						"type": "MeshSprite3D",
						"instanceID": 310,
						"props": {
							"name": "point8",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								2.86,
								-2.518,
								0
							],
							"rotation": [
								0,
								0,
								0,
								-1
							],
							"scale": [
								0.1,
								0.1,
								0.1
							],
							"meshPath": "Library/unity default resources-Sphere.lm",
							"enableRender": false,
							"materials": [
								{
									"type": "Laya.BlinnPhongMaterial",
									"path": "Resources/unity_builtin_extra.lmat"
								}
							]
						},
						"components": [],
						"child": []
					},
					{
						"type": "MeshSprite3D",
						"instanceID": 311,
						"props": {
							"name": "point10",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								-3.55,
								3.22,
								0
							],
							"rotation": [
								0,
								0,
								0,
								-1
							],
							"scale": [
								0.1,
								0.1,
								0.1
							],
							"meshPath": "Library/unity default resources-Sphere.lm",
							"enableRender": false,
							"materials": [
								{
									"type": "Laya.BlinnPhongMaterial",
									"path": "Resources/unity_builtin_extra.lmat"
								}
							]
						},
						"components": [],
						"child": []
					},
					{
						"type": "MeshSprite3D",
						"instanceID": 312,
						"props": {
							"name": "point11",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								-2.62,
								2.46,
								0
							],
							"rotation": [
								0,
								0,
								0,
								-1
							],
							"scale": [
								0.1,
								0.1,
								0.1
							],
							"meshPath": "Library/unity default resources-Sphere.lm",
							"enableRender": false,
							"materials": [
								{
									"type": "Laya.BlinnPhongMaterial",
									"path": "Resources/unity_builtin_extra.lmat"
								}
							]
						},
						"components": [],
						"child": []
					},
					{
						"type": "MeshSprite3D",
						"instanceID": 313,
						"props": {
							"name": "point12",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								-2.9,
								2.21,
								0
							],
							"rotation": [
								0,
								0,
								0,
								-1
							],
							"scale": [
								0.1,
								0.1,
								0.1
							],
							"meshPath": "Library/unity default resources-Sphere.lm",
							"enableRender": false,
							"materials": [
								{
									"type": "Laya.BlinnPhongMaterial",
									"path": "Resources/unity_builtin_extra.lmat"
								}
							]
						},
						"components": [],
						"child": []
					},
					{
						"type": "MeshSprite3D",
						"instanceID": 314,
						"props": {
							"name": "point13",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								-3.55,
								0.92,
								0
							],
							"rotation": [
								0,
								0,
								0,
								-1
							],
							"scale": [
								0.1,
								0.1,
								0.1
							],
							"meshPath": "Library/unity default resources-Sphere.lm",
							"enableRender": false,
							"materials": [
								{
									"type": "Laya.BlinnPhongMaterial",
									"path": "Resources/unity_builtin_extra.lmat"
								}
							]
						},
						"components": [],
						"child": [
							{
								"type": "Sprite3D",
								"instanceID": 315,
								"props": {
									"name": "kaiguan_R (1)",
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
										10,
										10,
										10
									]
								},
								"components": [],
								"child": [
									{
										"type": "MeshSprite3D",
										"instanceID": 316,
										"props": {
											"name": "kaiguan_1",
											"active": true,
											"isStatic": false,
											"layer": 0,
											"position": [
												0,
												0,
												0
											],
											"rotation": [
												0.5,
												-0.5,
												-0.5,
												-0.5
											],
											"scale": [
												0.4310363,
												0.4310363,
												0.4310363
											],
											"meshPath": "Assets/Arts/model/kaiguan-kaiguan_1.lm",
											"enableRender": true,
											"materials": [
												{
													"path": "Assets/Arts/Materials/Materials/kaiguan_2.lmat"
												}
											]
										},
										"components": [],
										"child": []
									},
									{
										"type": "MeshSprite3D",
										"instanceID": 317,
										"props": {
											"name": "kaiguan_2",
											"active": true,
											"isStatic": false,
											"layer": 0,
											"position": [
												0,
												0,
												0
											],
											"rotation": [
												0.5,
												-0.5,
												-0.5,
												-0.5
											],
											"scale": [
												0.4310363,
												0.4310363,
												0.4310363
											],
											"meshPath": "Assets/Arts/model/kaiguan-kaiguan_2.lm",
											"enableRender": true,
											"materials": [
												{
													"path": "Assets/Arts/Materials/Materials/kaiguan_1.lmat"
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
						"type": "MeshSprite3D",
						"instanceID": 318,
						"props": {
							"name": "point14",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								-2.62,
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
								0.1,
								0.1,
								0.1
							],
							"meshPath": "Library/unity default resources-Sphere.lm",
							"enableRender": false,
							"materials": [
								{
									"type": "Laya.BlinnPhongMaterial",
									"path": "Resources/unity_builtin_extra.lmat"
								}
							]
						},
						"components": [],
						"child": []
					},
					{
						"type": "MeshSprite3D",
						"instanceID": 319,
						"props": {
							"name": "point15",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								-2.9,
								-0.3,
								0
							],
							"rotation": [
								0,
								0,
								0,
								-1
							],
							"scale": [
								0.1,
								0.1,
								0.1
							],
							"meshPath": "Library/unity default resources-Sphere.lm",
							"enableRender": false,
							"materials": [
								{
									"type": "Laya.BlinnPhongMaterial",
									"path": "Resources/unity_builtin_extra.lmat"
								}
							]
						},
						"components": [],
						"child": []
					},
					{
						"type": "MeshSprite3D",
						"instanceID": 320,
						"props": {
							"name": "point16",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								-3.55,
								-1.6,
								0
							],
							"rotation": [
								0,
								0,
								0,
								-1
							],
							"scale": [
								0.1,
								0.1,
								0.1
							],
							"meshPath": "Library/unity default resources-Sphere.lm",
							"enableRender": false,
							"materials": [
								{
									"type": "Laya.BlinnPhongMaterial",
									"path": "Resources/unity_builtin_extra.lmat"
								}
							]
						},
						"components": [],
						"child": [
							{
								"type": "Sprite3D",
								"instanceID": 321,
								"props": {
									"name": "kaiguan_R (1)",
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
										10,
										10,
										10
									]
								},
								"components": [],
								"child": [
									{
										"type": "MeshSprite3D",
										"instanceID": 322,
										"props": {
											"name": "kaiguan_1",
											"active": true,
											"isStatic": false,
											"layer": 0,
											"position": [
												0,
												0,
												0
											],
											"rotation": [
												0.5,
												-0.5,
												-0.5,
												-0.5
											],
											"scale": [
												0.4310363,
												0.4310363,
												0.4310363
											],
											"meshPath": "Assets/Arts/model/kaiguan-kaiguan_1.lm",
											"enableRender": true,
											"materials": [
												{
													"path": "Assets/Arts/Materials/Materials/kaiguan_2.lmat"
												}
											]
										},
										"components": [],
										"child": []
									},
									{
										"type": "MeshSprite3D",
										"instanceID": 323,
										"props": {
											"name": "kaiguan_2",
											"active": true,
											"isStatic": false,
											"layer": 0,
											"position": [
												0,
												0,
												0
											],
											"rotation": [
												0.5,
												-0.5,
												-0.5,
												-0.5
											],
											"scale": [
												0.4310363,
												0.4310363,
												0.4310363
											],
											"meshPath": "Assets/Arts/model/kaiguan-kaiguan_2.lm",
											"enableRender": true,
											"materials": [
												{
													"path": "Assets/Arts/Materials/Materials/kaiguan_1.lmat"
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
						"type": "MeshSprite3D",
						"instanceID": 324,
						"props": {
							"name": "point17",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								-2.62,
								-2.518,
								0
							],
							"rotation": [
								0,
								0,
								0,
								-1
							],
							"scale": [
								0.1,
								0.1,
								0.1
							],
							"meshPath": "Library/unity default resources-Sphere.lm",
							"enableRender": false,
							"materials": [
								{
									"type": "Laya.BlinnPhongMaterial",
									"path": "Resources/unity_builtin_extra.lmat"
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
				"instanceID": 325,
				"props": {
					"name": "levelRoot",
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
				"instanceID": 326,
				"props": {
					"name": "arts",
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
				"instanceID": 327,
				"props": {
					"name": "Effects",
					"active": true,
					"isStatic": false,
					"layer": 0,
					"position": [
						0,
						-100,
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
						"type": "ShuriKenParticle3D",
						"instanceID": 328,
						"props": {
							"name": "Eff_baozha2 (1)",
							"active": true,
							"isStatic": false,
							"layer": 0,
							"position": [
								0,
								0,
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
							"duration": 0.6,
							"looping": false,
							"prewarm": false,
							"startDelayType": 0,
							"startDelay": 0,
							"startDelayMin": 0,
							"startDelayMax": 0,
							"startLifetimeType": 0,
							"startLifetimeConstant": 1,
							"startLifetimeConstantMin": 0,
							"startLifetimeConstantMax": 1,
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
							"startSpeedConstant": 0,
							"startSpeedConstantMin": 0,
							"startSpeedConstantMax": 0,
							"threeDStartSize": false,
							"startSizeType": 0,
							"startSizeConstant": 2.5,
							"startSizeConstantMin": 0,
							"startSizeConstantMax": 2.5,
							"startSizeConstantSeparate": [
								2.5,
								1,
								1
							],
							"startSizeConstantMinSeparate": [
								0,
								0,
								0
							],
							"startSizeConstantMaxSeparate": [
								2.5,
								1,
								1
							],
							"threeDStartRotation": false,
							"startRotationType": 0,
							"startRotationConstant": 0,
							"startRotationConstantMin": 0,
							"startRotationConstantMax": 0,
							"startRotationConstantSeparate": [
								0,
								0,
								0
							],
							"startRotationConstantMinSeparate": [
								0,
								0,
								0
							],
							"startRotationConstantMaxSeparate": [
								0,
								0,
								0
							],
							"randomizeRotationDirection": 0,
							"startColorType": 0,
							"startColorConstant": [
								0.7735849,
								0.7735849,
								0.7735849,
								0.8588235
							],
							"startColorConstantMin": [
								0,
								0,
								0,
								0
							],
							"startColorConstantMax": [
								0.7735849,
								0.7735849,
								0.7735849,
								0.8588235
							],
							"gravity": [
								0,
								-9.81,
								0
							],
							"gravityModifier": 0,
							"simulationSpace": 1,
							"simulationSpeed": 1,
							"scaleMode": 1,
							"playOnAwake": true,
							"maxParticles": 1,
							"autoRandomSeed": true,
							"randomSeed": 0,
							"emission": {
								"enable": true,
								"emissionRate": 10,
								"emissionRateTip": "Time",
								"bursts": []
							},
							"textureSheetAnimation": {
								"enable": true,
								"tiles": [
									4,
									4
								],
								"type": 0,
								"randomRow": true,
								"rowIndex": 0,
								"frame": {
									"type": 1,
									"constant": 0,
									"overTime": {
										"frames": [
											{
												"key": 0,
												"value": 0
											},
											{
												"key": 1,
												"value": 15.9984
											}
										]
									},
									"constantMin": 0,
									"constantMax": 0,
									"overTimeMin": {
										"frames": []
									},
									"overTimeMax": {
										"frames": [
											{
												"key": 0,
												"value": 0
											},
											{
												"key": 1,
												"value": 15.9984
											}
										]
									}
								},
								"startFrame": {
									"type": 0,
									"constant": 0,
									"constantMin": 0,
									"constantMax": 0
								},
								"cycles": 1,
								"enableUVChannels": 1,
								"enableUVChannelsTip": "-1"
							},
							"renderMode": 0,
							"stretchedBillboardCameraSpeedScale": 0,
							"stretchedBillboardSpeedScale": 0,
							"stretchedBillboardLengthScale": 2,
							"sortingFudge": 0,
							"material": {
								"type": "Laya.ShurikenParticleMaterial",
								"path": "Assets/Arts/Eff/cannon_mu.lmat"
							}
						},
						"components": [],
						"child": []
					}
				]
			}
		]
	}
}