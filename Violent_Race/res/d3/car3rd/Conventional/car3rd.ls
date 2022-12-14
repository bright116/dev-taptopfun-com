{
	"version":"LAYASCENE3D:02",
	"data":{
		"type":"Scene3D",
		"props":{
			"name":"car3rd",
			"ambientColor":[
				0.212,
				0.227,
				0.259
			],
			"reflectionDecodingFormat":1,
			"reflection":"Assets/Scenes/car3rdGIReflection.ltcb",
			"reflectionIntensity":1,
			"ambientMode":1,
			"ambientSphericalHarmonics":[
				0.1678837,
				-0.01659179,
				-0.00844783,
				0.01006567,
				0.007637987,
				-0.006409361,
				0.007758347,
				-0.01170866,
				0.02531247,
				0.2107368,
				0.02701554,
				-0.01401821,
				0.01670577,
				0.0128954,
				-0.01082105,
				0.01113917,
				-0.01787408,
				0.03653724,
				0.2899397,
				0.1099632,
				-0.02583867,
				0.03078751,
				0.02498059,
				-0.02096314,
				0.01355308,
				-0.02699235,
				0.04539135
			],
			"ambientSphericalHarmonicsIntensity":1,
			"lightmaps":[],
			"enableFog":false,
			"fogStart":0,
			"fogRange":300,
			"fogColor":[
				0.5,
				0.5,
				0.5
			]
		},
		"child":[
			{
				"type":"DirectionLight",
				"instanceID":0,
				"props":{
					"name":"Directional Light",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						0,
						3,
						0
					],
					"rotation":[
						0.1786062,
						0.8213938,
						0.3830222,
						-0.3830222
					],
					"scale":[
						1,
						1,
						1
					],
					"intensity":1,
					"lightmapBakedType":0,
					"color":[
						0.8392157,
						0.906856,
						1
					]
				},
				"components":[],
				"child":[]
			},
			{
				"type":"SpotLight",
				"instanceID":1,
				"props":{
					"name":"Spotlight",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						-4.33,
						2.49,
						-3.54
					],
					"rotation":[
						-0.5704308,
						0.7012314,
						0.4058992,
						-0.1346443
					],
					"scale":[
						1,
						1,
						1
					],
					"intensity":4.6,
					"lightmapBakedType":0,
					"range":7.7,
					"spotAngle":46.6,
					"color":[
						0.1913792,
						0.125,
						1
					]
				},
				"components":[],
				"child":[]
			},
			{
				"type":"PointLight",
				"instanceID":2,
				"props":{
					"name":"Point light",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						4.42,
						2.17,
						0.43
					],
					"rotation":[
						0,
						0,
						0,
						-1
					],
					"scale":[
						1,
						1,
						1
					],
					"intensity":1.2,
					"lightmapBakedType":0,
					"range":7.4,
					"color":[
						1,
						0.8603448,
						0.4044118
					]
				},
				"components":[],
				"child":[]
			},
			{
				"type":"Sprite3D",
				"instanceID":3,
				"props":{
					"name":"car3rd",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						0,
						0,
						0
					],
					"rotation":[
						0,
						0,
						0,
						-1
					],
					"scale":[
						1,
						1,
						1
					]
				},
				"components":[],
				"child":[
					{
						"type":"MeshSprite3D",
						"instanceID":4,
						"props":{
							"name":"Car3rd_1",
							"active":true,
							"isStatic":false,
							"layer":0,
							"position":[
								0,
								0,
								0
							],
							"rotation":[
								-2.185569E-08,
								0,
								0,
								-1
							],
							"scale":[
								1,
								1,
								1
							],
							"meshPath":"Assets/Moeles/car3rd-Car3rd_1.lm",
							"enableRender":true,
							"materials":[
								{
									"path":"Assets/Material/other/material_car3rd_1.lmat"
								}
							]
						},
						"components":[
							{
								"type":"PhysicsCollider",
								"restitution":0,
								"friction":0.5,
								"rollingFriction":0,
								"shapes":[
									{
										"type":"BoxColliderShape",
										"center":[
											0,
											-1.203952,
											1.598365E-15
										],
										"size":[
											21.31669,
											2.407904,
											21.31669
										]
									}
								],
								"isTrigger":false
							}
						],
						"child":[]
					},
					{
						"type":"MeshSprite3D",
						"instanceID":5,
						"props":{
							"name":"Car3rd_2",
							"active":true,
							"isStatic":false,
							"layer":0,
							"position":[
								0,
								0,
								0
							],
							"rotation":[
								-2.185569E-08,
								0,
								0,
								-1
							],
							"scale":[
								1,
								1,
								1
							],
							"meshPath":"Assets/Moeles/car3rd-Car3rd_2.lm",
							"enableRender":true,
							"materials":[
								{
									"path":"Assets/Material/other/material_car3rd_2.lmat"
								}
							]
						},
						"components":[],
						"child":[]
					},
					{
						"type":"MeshSprite3D",
						"instanceID":6,
						"props":{
							"name":"Car3rd_3",
							"active":true,
							"isStatic":false,
							"layer":0,
							"position":[
								0,
								0,
								0
							],
							"rotation":[
								-2.185569E-08,
								0,
								0,
								-1
							],
							"scale":[
								1,
								1,
								1
							],
							"meshPath":"Assets/Moeles/car3rd-Car3rd_3.lm",
							"enableRender":true,
							"materials":[
								{
									"path":"Assets/Material/other/material_car3rd_3.lmat"
								}
							]
						},
						"components":[],
						"child":[]
					}
				]
			},
			{
				"type":"Sprite3D",
				"instanceID":7,
				"props":{
					"name":"node_camera",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						0,
						0,
						1.3
					],
					"rotation":[
						0,
						0,
						0,
						-1
					],
					"scale":[
						1,
						1,
						1
					]
				},
				"components":[],
				"child":[
					{
						"type":"Camera",
						"instanceID":8,
						"props":{
							"name":"main_camera",
							"active":true,
							"isStatic":false,
							"layer":0,
							"position":[
								3.74,
								1.2,
								3.96
							],
							"rotation":[
								-0.04835206,
								0.3821589,
								0.02002808,
								0.9226134
							],
							"scale":[
								1,
								1,
								1
							],
							"clearFlag":1,
							"orthographic":false,
							"orthographicVerticalSize":10,
							"fieldOfView":40,
							"enableHDR":false,
							"nearPlane":0.3,
							"farPlane":1000,
							"viewport":[
								0,
								0,
								1,
								1
							],
							"clearColor":[
								0.1921569,
								0.3019608,
								0.4745098,
								0
							]
						},
						"components":[],
						"child":[]
					}
				]
			}
		]
	}
}