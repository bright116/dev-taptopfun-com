{
	"version":"LAYASCENE3D:01",
	"data":{
		"type":"Scene3D",
		"props":{
			"name":"main",
			"ambientColor":[
				0.4823529,
				0.4823529,
				0.4823529
			],
			"lightmaps":[],
			"enableFog":false,
			"fogStart":30,
			"fogRange":70,
			"fogColor":[
				0.2901961,
				0.6156863,
				0.772549
			]
		},
		"child":[
			{
				"type":"DirectionLight",
				"props":{
					"name":"Directional Light",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						0.7882964,
						1.142028,
						-1326.8
					],
					"rotation":[
						0.05586113,
						0.9435637,
						-0.2471445,
						0.2132763
					],
					"scale":[
						1,
						1,
						1
					],
					"intensity":0.5,
					"lightmapBakedType":0,
					"color":[
						1,
						1,
						1
					]
				},
				"components":[],
				"child":[]
			},
			{
				"type":"Camera",
				"props":{
					"name":"Main Camera",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						0,
						3.5,
						-6
					],
					"rotation":[
						0,
						0.9935719,
						0.1132032,
						0
					],
					"scale":[
						1,
						1,
						1
					],
					"clearFlag":2,
					"orthographic":false,
					"fieldOfView":80,
					"nearPlane":0.3,
					"farPlane":500,
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
			},
			{
				"type":"Sprite3D",
				"props":{
					"name":"player",
					"active":true,
					"isStatic":false,
					"layer":13,
					"position":[
						0,
						0,
						0
					],
					"rotation":[
						0,
						-0.1822356,
						0,
						-0.9832549
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
						"type":"Sprite3D",
						"props":{
							"name":"player_anim",
							"active":true,
							"isStatic":false,
							"layer":13,
							"position":[
								0,
								3,
								0
							],
							"rotation":[
								0,
								1,
								0,
								0
							],
							"scale":[
								1,
								1,
								1
							]
						},
						"components":[
							{
								"type":"Rigidbody3D",
								"mass":1,
								"isKinematic":true,
								"restitution":0,
								"friction":0.5,
								"rollingFriction":0,
								"linearDamping":0,
								"angularDamping":0,
								"overrideGravity":true,
								"gravity":[
									0,
									0,
									0
								],
								"shapes":[
									{
										"type":"BoxColliderShape",
										"center":[
											0,
											1,
											0
										],
										"size":[
											0.7,
											2,
											1.5
										]
									}
								],
								"isTrigger":true
							},
							{
								"type":"Animator",
								"avatar":{
									"path":"Assets/Animation/player/moxing_1-player_anim-moxing_1Avatar.lav",
									"linkSprites":{}
								},
								"layers":[
									{
										"name":"Base Layer",
										"weight":0,
										"blendingMode":0,
										"states":[
											{
												"name":"stand",
												"clipPath":"Assets/Animation/player/pifu_1-pifu_1.lani"
											},
											{
												"name":"run",
												"clipPath":"Assets/Animation/player/lix_2-lix_2.lani"
											},
											{
												"name":"death01",
												"clipPath":"Assets/Animation/player/death_1-death_1.lani"
											},
											{
												"name":"idle"
											},
											{
												"name":"stand2",
												"clipPath":"Assets/Animation/player/moxing_1-moxing_1.lani"
											}
										]
									}
								],
								"cullingMode":0,
								"playOnWake":true
							}
						],
						"child":[
							{
								"type":"SkinnedMeshSprite3D",
								"props":{
									"name":"CL_HuaBang01",
									"active":false,
									"isStatic":false,
									"layer":13,
									"position":[
										-0.9006274,
										0.9804716,
										0.09376947
									],
									"rotation":[
										5.603881E-08,
										0.7071068,
										0.7071067,
										-5.60388E-08
									],
									"scale":[
										1,
										1,
										1
									],
									"rootBone":"Bone001",
									"boundBox":{
										"min":[
											0.01807556,
											-1.106128,
											-0.2376129
										],
										"max":[
											0.2260353,
											0.9631031,
											0.2398213
										]
									},
									"boundSphere":{
										"center":[
											0.1220554,
											-0.07151258,
											0.001104161
										],
										"radius":1.066877
									},
									"materials":[
										{
											"type":"Laya.BlinnPhongMaterial",
											"path":"Assets/Animation/player/moxing_1.lmat"
										}
									],
									"meshPath":"Assets/Animation/player/moxing_1-CL_HuaBang01.lm"
								},
								"components":[],
								"child":[]
							},
							{
								"type":"SkinnedMeshSprite3D",
								"props":{
									"name":"CL_HuaBang02",
									"active":false,
									"isStatic":false,
									"layer":13,
									"position":[
										-0.9004849,
										0.9533272,
										0.07302117
									],
									"rotation":[
										5.603881E-08,
										0.7071068,
										0.7071067,
										-5.60388E-08
									],
									"scale":[
										1,
										1,
										1
									],
									"rootBone":"Bone001",
									"boundBox":{
										"min":[
											0.05729756,
											-0.9623373,
											-0.275155
										],
										"max":[
											0.2448384,
											0.8752892,
											0.2770781
										]
									},
									"boundSphere":{
										"center":[
											0.151068,
											-0.04352403,
											0.0009615421
										],
										"radius":0.9639766
									},
									"materials":[
										{
											"type":"Laya.BlinnPhongMaterial",
											"path":"Assets/Animation/player/moxing_1.lmat"
										}
									],
									"meshPath":"Assets/Animation/player/moxing_1-CL_HuaBang02.lm"
								},
								"components":[],
								"child":[]
							},
							{
								"type":"SkinnedMeshSprite3D",
								"props":{
									"name":"CL_HuaBang03",
									"active":false,
									"isStatic":false,
									"layer":13,
									"position":[
										-0.9002028,
										0.9934473,
										0.0007764513
									],
									"rotation":[
										0.7071068,
										0,
										0,
										-0.7071067
									],
									"scale":[
										1,
										1,
										1
									],
									"rootBone":"Bone001",
									"boundBox":{
										"min":[
											-0.03927445,
											-1.063899,
											-0.2750736
										],
										"max":[
											0.3476385,
											0.901352,
											0.2764328
										]
									},
									"boundSphere":{
										"center":[
											0.154182,
											-0.0812737,
											0.000679642
										],
										"radius":1.038758
									},
									"materials":[
										{
											"path":"Assets/mode/Material/CL_HuaBang03.lmat"
										}
									],
									"meshPath":"Assets/Animation/player/moxing_1-CL_HuaBang03.lm"
								},
								"components":[],
								"child":[]
							},
							{
								"type":"SkinnedMeshSprite3D",
								"props":{
									"name":"CL_HuaBang04",
									"active":false,
									"isStatic":false,
									"layer":13,
									"position":[
										-0.9007661,
										0.9880183,
										0.021665
									],
									"rotation":[
										5.603881E-08,
										0.7071068,
										0.7071067,
										-5.60388E-08
									],
									"scale":[
										1,
										1,
										1
									],
									"rootBone":"Bone001",
									"boundBox":{
										"min":[
											0.0984441,
											-1.246895,
											-0.2714221
										],
										"max":[
											0.3221074,
											1.09429,
											0.2739081
										]
									},
									"boundSphere":{
										"center":[
											0.2102758,
											-0.07630217,
											0.001243025
										],
										"radius":1.20712
									},
									"materials":[
										{
											"path":"Assets/mode/Material/CL_HuaBang04-5.lmat"
										}
									],
									"meshPath":"Assets/Animation/player/moxing_1-CL_HuaBang04.lm"
								},
								"components":[],
								"child":[]
							},
							{
								"type":"SkinnedMeshSprite3D",
								"props":{
									"name":"CL_HuaBang05",
									"active":false,
									"isStatic":false,
									"layer":13,
									"position":[
										-0.9004893,
										0.933743,
										0.273089
									],
									"rotation":[
										5.603881E-08,
										0.7071068,
										0.7071067,
										-5.60388E-08
									],
									"scale":[
										1,
										1,
										1
									],
									"rootBone":"Bone001",
									"boundBox":{
										"min":[
											-0.3836426,
											-1.17587,
											-0.4919862
										],
										"max":[
											0.2936205,
											1.13071,
											0.4939182
										]
									},
									"boundSphere":{
										"center":[
											-0.04501104,
											-0.02258003,
											0.0009659827
										],
										"radius":1.299135
									},
									"materials":[
										{
											"path":"Assets/mode/Material/CL_HuaBang04-5.lmat"
										}
									],
									"meshPath":"Assets/Animation/player/moxing_1-CL_HuaBang05.lm"
								},
								"components":[],
								"child":[]
							},
							{
								"type":"SkinnedMeshSprite3D",
								"props":{
									"name":"CL_HuaBang06",
									"active":true,
									"isStatic":false,
									"layer":13,
									"position":[
										-0.9001727,
										0.9867959,
										0.01469075
									],
									"rotation":[
										5.603881E-08,
										0.7071068,
										0.7071067,
										-5.60388E-08
									],
									"scale":[
										1,
										1,
										1
									],
									"rootBone":"Bone001",
									"boundBox":{
										"min":[
											-0.157835,
											-1.237565,
											-0.4564219
										],
										"max":[
											0.5426595,
											1.086323,
											0.4577206
										]
									},
									"boundSphere":{
										"center":[
											0.1924123,
											-0.07562113,
											0.0006493926
										],
										"radius":1.296804
									},
									"materials":[
										{
											"path":"Assets/mode/Material/CL_HuaBang06.lmat"
										}
									],
									"meshPath":"Assets/Animation/player/moxing_1-CL_HuaBang06.lm"
								},
								"components":[],
								"child":[]
							},
							{
								"type":"SkinnedMeshSprite3D",
								"props":{
									"name":"CL_HuaBang07",
									"active":false,
									"isStatic":false,
									"layer":13,
									"position":[
										-0.9000498,
										0.9717159,
										0.05456374
									],
									"rotation":[
										5.603881E-08,
										0.7071068,
										0.7071067,
										-5.60388E-08
									],
									"scale":[
										1,
										1,
										1
									],
									"rootBone":"Bone001",
									"boundBox":{
										"min":[
											-0.1341898,
											-0.9859834,
											-0.3185464
										],
										"max":[
											0.4071005,
											0.8659174,
											0.3196
										]
									},
									"boundSphere":{
										"center":[
											0.1364553,
											-0.06003296,
											0.0005268157
										],
										"radius":1.016091
									},
									"materials":[
										{
											"path":"Assets/mode/Material/CL_HuaBang07-8.lmat"
										}
									],
									"meshPath":"Assets/Animation/player/moxing_1-CL_HuaBang07.lm"
								},
								"components":[],
								"child":[]
							},
							{
								"type":"SkinnedMeshSprite3D",
								"props":{
									"name":"CL_HuaBang08",
									"active":false,
									"isStatic":false,
									"layer":13,
									"position":[
										-0.899446,
										0.9891737,
										0.05722542
									],
									"rotation":[
										5.603881E-08,
										0.7071068,
										0.7071067,
										-5.60388E-08
									],
									"scale":[
										1,
										1,
										1
									],
									"rootBone":"Bone001",
									"boundBox":{
										"min":[
											0.04910034,
											-1.101656,
											-0.2790222
										],
										"max":[
											0.2912937,
											0.9445087,
											0.278868
										]
									},
									"boundSphere":{
										"center":[
											0.170197,
											-0.07857361,
											-7.709861E-05
										],
										"radius":1.06732
									},
									"materials":[
										{
											"path":"Assets/mode/Material/CL_HuaBang07-8.lmat"
										}
									],
									"meshPath":"Assets/Animation/player/moxing_1-CL_HuaBang08.lm"
								},
								"components":[],
								"child":[]
							},
							{
								"type":"SkinnedMeshSprite3D",
								"props":{
									"name":"CL_HuaBang09",
									"active":false,
									"isStatic":false,
									"layer":13,
									"position":[
										-0.9005687,
										0.9342203,
										0.0976642
									],
									"rotation":[
										5.603881E-08,
										0.7071068,
										0.7071067,
										-5.60388E-08
									],
									"scale":[
										1,
										1,
										1
									],
									"rootBone":"Bone001",
									"boundBox":{
										"min":[
											0.01556213,
											-0.9081892,
											-0.1969316
										],
										"max":[
											0.2229788,
											0.854844,
											0.1990225
										]
									},
									"boundSphere":{
										"center":[
											0.1192705,
											-0.0266726,
											0.001045436
										],
										"radius":0.9094074
									},
									"materials":[
										{
											"type":"Laya.BlinnPhongMaterial",
											"path":"Assets/Animation/player/moxing_1.lmat"
										}
									],
									"meshPath":"Assets/Animation/player/moxing_1-CL_HuaBang09.lm"
								},
								"components":[],
								"child":[]
							},
							{
								"type":"SkinnedMeshSprite3D",
								"props":{
									"name":"CL_MaoZi01",
									"active":false,
									"isStatic":false,
									"layer":13,
									"position":[
										0,
										0,
										0
									],
									"rotation":[
										0.7071068,
										0,
										0,
										-0.7071067
									],
									"scale":[
										1,
										1,
										1
									],
									"rootBone":"Bip001 Head",
									"boundBox":{
										"min":[
											0.06012964,
											-0.7375131,
											-0.3785043
										],
										"max":[
											0.9383743,
											0.5740885,
											0.3785045
										]
									},
									"boundSphere":{
										"center":[
											0.499252,
											-0.08171231,
											8.940697E-08
										],
										"radius":0.8753106
									},
									"materials":[
										{
											"path":"Assets/mode/Material/CL_MaoZi01.lmat"
										}
									],
									"meshPath":"Assets/Animation/player/moxing_1-CL_MaoZi01.lm"
								},
								"components":[],
								"child":[]
							},
							{
								"type":"SkinnedMeshSprite3D",
								"props":{
									"name":"CL_MaoZi02",
									"active":false,
									"isStatic":false,
									"layer":13,
									"position":[
										0,
										0,
										0
									],
									"rotation":[
										0.7071068,
										0,
										0,
										-0.7071067
									],
									"scale":[
										1,
										1,
										1
									],
									"rootBone":"Bip001 Head",
									"boundBox":{
										"min":[
											0.02965271,
											-0.3213739,
											-0.507986
										],
										"max":[
											0.7624602,
											0.5042585,
											0.5079859
										]
									},
									"boundSphere":{
										"center":[
											0.3960564,
											0.09144229,
											-5.960464E-08
										],
										"radius":0.7501457
									},
									"materials":[
										{
											"path":"Assets/mode/Material/CL_MaoZi02.lmat"
										}
									],
									"meshPath":"Assets/Animation/player/moxing_1-CL_MaoZi02.lm"
								},
								"components":[],
								"child":[]
							},
							{
								"type":"SkinnedMeshSprite3D",
								"props":{
									"name":"CL_MaoZi03",
									"active":false,
									"isStatic":false,
									"layer":13,
									"position":[
										0,
										0,
										0
									],
									"rotation":[
										0.7071068,
										0,
										0,
										-0.7071067
									],
									"scale":[
										1,
										1,
										1
									],
									"rootBone":"Bip001 Head",
									"boundBox":{
										"min":[
											0.2094418,
											-0.470694,
											-0.5125734
										],
										"max":[
											0.7386853,
											0.5791675,
											0.5125726
										]
									},
									"boundSphere":{
										"center":[
											0.4740635,
											0.05423677,
											-3.576279E-07
										],
										"radius":0.7799411
									},
									"materials":[
										{
											"path":"Assets/mode/Material/CL_MaoZi03.lmat"
										}
									],
									"meshPath":"Assets/Animation/player/moxing_1-CL_MaoZi03.lm"
								},
								"components":[],
								"child":[]
							},
							{
								"type":"SkinnedMeshSprite3D",
								"props":{
									"name":"CL_MaoZi04",
									"active":false,
									"isStatic":false,
									"layer":13,
									"position":[
										0,
										0,
										0
									],
									"rotation":[
										0.7071068,
										0,
										0,
										-0.7071067
									],
									"scale":[
										1,
										1,
										1
									],
									"rootBone":"Bip001 Head",
									"boundBox":{
										"min":[
											0.2461009,
											-0.293384,
											-0.3355823
										],
										"max":[
											1.152047,
											0.4377184,
											0.3355824
										]
									},
									"boundSphere":{
										"center":[
											0.6990741,
											0.07216719,
											5.960464E-08
										],
										"radius":0.6718839
									},
									"materials":[
										{
											"path":"Assets/mode/Material/CL_MaoZi04.lmat"
										}
									],
									"meshPath":"Assets/Animation/player/moxing_1-CL_MaoZi04.lm"
								},
								"components":[],
								"child":[]
							},
							{
								"type":"SkinnedMeshSprite3D",
								"props":{
									"name":"CL_MaoZi05",
									"active":false,
									"isStatic":false,
									"layer":13,
									"position":[
										0,
										0,
										0
									],
									"rotation":[
										0.7071068,
										0,
										0,
										-0.7071067
									],
									"scale":[
										1,
										1,
										1
									],
									"rootBone":"Bip001 Head",
									"boundBox":{
										"min":[
											-0.1032293,
											-0.7160861,
											-0.3979081
										],
										"max":[
											0.7476563,
											0.5580025,
											0.3979086
										]
									},
									"boundSphere":{
										"center":[
											0.3222135,
											-0.07904178,
											2.682209E-07
										],
										"radius":0.8632254
									},
									"materials":[
										{
											"path":"Assets/mode/Material/CL_MaoZi05.lmat"
										}
									],
									"meshPath":"Assets/Animation/player/moxing_1-CL_MaoZi05.lm"
								},
								"components":[],
								"child":[]
							},
							{
								"type":"SkinnedMeshSprite3D",
								"props":{
									"name":"CL_MaoZi06",
									"active":false,
									"isStatic":false,
									"layer":13,
									"position":[
										0,
										0,
										0
									],
									"rotation":[
										0.7071068,
										0,
										0,
										-0.7071067
									],
									"scale":[
										1,
										1,
										1
									],
									"rootBone":"Bip001 Head",
									"boundBox":{
										"min":[
											0.2848308,
											-0.272804,
											-0.3350536
										],
										"max":[
											0.7418902,
											0.6346695,
											0.3350548
										]
									},
									"boundSphere":{
										"center":[
											0.5133605,
											0.1809328,
											5.960464E-07
										],
										"radius":0.6085755
									},
									"materials":[
										{
											"path":"Assets/mode/Material/CL_MaoZi06.lmat"
										}
									],
									"meshPath":"Assets/Animation/player/moxing_1-CL_MaoZi06.lm"
								},
								"components":[],
								"child":[]
							},
							{
								"type":"SkinnedMeshSprite3D",
								"props":{
									"name":"CL_MaoZi07",
									"active":false,
									"isStatic":false,
									"layer":13,
									"position":[
										0,
										0,
										0
									],
									"rotation":[
										0.7071068,
										0,
										0,
										-0.7071067
									],
									"scale":[
										1,
										1,
										1
									],
									"rootBone":"Bip001 Head",
									"boundBox":{
										"min":[
											-0.02072656,
											-0.2787069,
											-0.3605546
										],
										"max":[
											0.8779162,
											0.3775191,
											0.3605547
										]
									},
									"boundSphere":{
										"center":[
											0.4285948,
											0.04940608,
											2.980232E-08
										],
										"radius":0.6629838
									},
									"materials":[
										{
											"type":"Laya.BlinnPhongMaterial",
											"path":"Assets/Animation/player/moxing_1.lmat"
										}
									],
									"meshPath":"Assets/Animation/player/moxing_1-CL_MaoZi07.lm"
								},
								"components":[],
								"child":[]
							},
							{
								"type":"SkinnedMeshSprite3D",
								"props":{
									"name":"CL_MaoZi08",
									"active":false,
									"isStatic":false,
									"layer":13,
									"position":[
										0,
										0,
										0
									],
									"rotation":[
										0.7071068,
										0,
										0,
										-0.7071067
									],
									"scale":[
										1,
										1,
										1
									],
									"rootBone":"Bip001 Head",
									"boundBox":{
										"min":[
											0.2021668,
											-0.298929,
											-0.3390412
										],
										"max":[
											0.8597032,
											0.3955094,
											0.3390414
										]
									},
									"boundSphere":{
										"center":[
											0.530935,
											0.04829022,
											5.960464E-08
										],
										"radius":0.5861729
									},
									"materials":[
										{
											"type":"Laya.BlinnPhongMaterial",
											"path":"Assets/Animation/player/moxing_1.lmat"
										}
									],
									"meshPath":"Assets/Animation/player/moxing_1-CL_MaoZi08.lm"
								},
								"components":[],
								"child":[]
							},
							{
								"type":"SkinnedMeshSprite3D",
								"props":{
									"name":"CL_MaoZi09",
									"active":false,
									"isStatic":false,
									"layer":13,
									"position":[
										-1.582106E-11,
										0,
										0.004028082
									],
									"rotation":[
										0.7071068,
										0,
										0,
										-0.7071067
									],
									"scale":[
										1,
										1,
										1
									],
									"rootBone":"Bip001 Head",
									"boundBox":{
										"min":[
											0.3617413,
											-0.1414199,
											-0.5668898
										],
										"max":[
											0.8751673,
											0.2086837,
											0.5668895
										]
									},
									"boundSphere":{
										"center":[
											0.6184543,
											0.03363188,
											-1.788139E-07
										],
										"radius":0.6464584
									},
									"materials":[
										{
											"type":"Laya.BlinnPhongMaterial",
											"path":"Assets/Animation/player/moxing_1.lmat"
										}
									],
									"meshPath":"Assets/Animation/player/moxing_1-CL_MaoZi09.lm"
								},
								"components":[],
								"child":[]
							},
							{
								"type":"SkinnedMeshSprite3D",
								"props":{
									"name":"CL_Player",
									"active":true,
									"isStatic":false,
									"layer":13,
									"position":[
										0,
										0,
										0
									],
									"rotation":[
										0.7071068,
										0,
										0,
										-0.7071067
									],
									"scale":[
										1,
										1,
										1
									],
									"rootBone":"Bip001 Pelvis",
									"boundBox":{
										"min":[
											-0.6687241,
											-0.2716241,
											-0.5160926
										],
										"max":[
											1.194659,
											0.340719,
											0.5160922
										]
									},
									"boundSphere":{
										"center":[
											0.2629675,
											0.03454745,
											-1.788139E-07
										],
										"radius":1.108216
									},
									"materials":[
										{
											"path":"Assets/mode/Material/CL_Player01.lmat"
										}
									],
									"meshPath":"Assets/Animation/player/moxing_1-CL_Player.lm"
								},
								"components":[],
								"child":[]
							},
							{
								"type":"SkinnedMeshSprite3D",
								"props":{
									"name":"CL_YanJing01",
									"active":false,
									"isStatic":false,
									"layer":13,
									"position":[
										0,
										0,
										0
									],
									"rotation":[
										0.7071068,
										0,
										0,
										-0.7071067
									],
									"scale":[
										1,
										1,
										1
									],
									"rootBone":"Bip001 Head",
									"boundBox":{
										"min":[
											0.1207307,
											0.261089,
											-0.2513879
										],
										"max":[
											0.3504959,
											0.3749755,
											0.2513886
										]
									},
									"boundSphere":{
										"center":[
											0.2356133,
											0.3180322,
											3.576279E-07
										],
										"radius":0.2821995
									},
									"materials":[
										{
											"path":"Assets/mode/Material/CL_YanJing01.lmat"
										}
									],
									"meshPath":"Assets/Animation/player/moxing_1-CL_YanJing01.lm"
								},
								"components":[],
								"child":[]
							},
							{
								"type":"SkinnedMeshSprite3D",
								"props":{
									"name":"CL_YanJing02",
									"active":false,
									"isStatic":false,
									"layer":13,
									"position":[
										0,
										0,
										0
									],
									"rotation":[
										0.7071068,
										0,
										0,
										-0.7071067
									],
									"scale":[
										1,
										1,
										1
									],
									"rootBone":"Bip001 Head",
									"boundBox":{
										"min":[
											0.1099637,
											0.22351,
											-0.2154099
										],
										"max":[
											0.2718548,
											0.3686714,
											0.2154105
										]
									},
									"boundSphere":{
										"center":[
											0.1909093,
											0.2960907,
											2.980232E-07
										],
										"radius":0.2412917
									},
									"materials":[
										{
											"path":"Assets/mode/Material/CL_YanJing02.lmat"
										}
									],
									"meshPath":"Assets/Animation/player/moxing_1-CL_YanJing02.lm"
								},
								"components":[],
								"child":[]
							},
							{
								"type":"SkinnedMeshSprite3D",
								"props":{
									"name":"CL_YanJing03",
									"active":false,
									"isStatic":false,
									"layer":13,
									"position":[
										0,
										0,
										0
									],
									"rotation":[
										0.7071068,
										0,
										0,
										-0.7071067
									],
									"scale":[
										1,
										1,
										1
									],
									"rootBone":"Bip001 Head",
									"boundBox":{
										"min":[
											0.1147308,
											0.0441916,
											-0.2774127
										],
										"max":[
											0.569182,
											0.3554124,
											0.2515228
										]
									},
									"boundSphere":{
										"center":[
											0.3419564,
											0.199802,
											-0.01294494
										],
										"radius":0.3818236
									},
									"materials":[
										{
											"path":"Assets/mode/Material/CL_YanJing03.lmat"
										}
									],
									"meshPath":"Assets/Animation/player/moxing_1-CL_YanJing03.lm"
								},
								"components":[],
								"child":[]
							},
							{
								"type":"SkinnedMeshSprite3D",
								"props":{
									"name":"CL_YanJing04",
									"active":false,
									"isStatic":false,
									"layer":13,
									"position":[
										0,
										0,
										0
									],
									"rotation":[
										0.7071068,
										0,
										0,
										-0.7071067
									],
									"scale":[
										1,
										1,
										1
									],
									"rootBone":"Bip001 Head",
									"boundBox":{
										"min":[
											0.09663162,
											0.2639292,
											-0.254577
										],
										"max":[
											0.2597877,
											0.3737924,
											0.2545775
										]
									},
									"boundSphere":{
										"center":[
											0.1782097,
											0.3188608,
											2.980232E-07
										],
										"radius":0.272914
									},
									"materials":[
										{
											"path":"Assets/mode/Material/CL_YanJing04.lmat"
										}
									],
									"meshPath":"Assets/Animation/player/moxing_1-CL_YanJing04.lm"
								},
								"components":[],
								"child":[]
							},
							{
								"type":"SkinnedMeshSprite3D",
								"props":{
									"name":"CL_YanJing05",
									"active":false,
									"isStatic":false,
									"layer":13,
									"position":[
										0,
										0,
										0
									],
									"rotation":[
										0.7071068,
										0,
										0,
										-0.7071067
									],
									"scale":[
										1,
										1,
										1
									],
									"rootBone":"Bip001 Head",
									"boundBox":{
										"min":[
											0.09966466,
											0.261089,
											-0.2513879
										],
										"max":[
											0.3294298,
											0.3749755,
											0.2513886
										]
									},
									"boundSphere":{
										"center":[
											0.2145472,
											0.3180322,
											3.576279E-07
										],
										"radius":0.2821996
									},
									"materials":[
										{
											"path":"Assets/mode/Material/CL_YanJing05.lmat"
										}
									],
									"meshPath":"Assets/Animation/player/moxing_1-CL_YanJing05.lm"
								},
								"components":[],
								"child":[]
							},
							{
								"type":"SkinnedMeshSprite3D",
								"props":{
									"name":"CL_YanJing06",
									"active":false,
									"isStatic":false,
									"layer":13,
									"position":[
										0,
										0,
										0
									],
									"rotation":[
										0.7071068,
										0,
										0,
										-0.7071067
									],
									"scale":[
										1,
										1,
										1
									],
									"rootBone":"Bip001 Head",
									"boundBox":{
										"min":[
											0.1252798,
											0.2280509,
											-0.3208623
										],
										"max":[
											0.3114109,
											0.3704174,
											0.3208633
										]
									},
									"boundSphere":{
										"center":[
											0.2183453,
											0.2992342,
											5.364418E-07
										],
										"radius":0.3415863
									},
									"materials":[
										{
											"path":"Assets/mode/Material/CL_YanJing06.lmat"
										}
									],
									"meshPath":"Assets/Animation/player/moxing_1-CL_YanJing06.lm"
								},
								"components":[],
								"child":[]
							},
							{
								"type":"SkinnedMeshSprite3D",
								"props":{
									"name":"CL_YanJing07",
									"active":false,
									"isStatic":false,
									"layer":13,
									"position":[
										0,
										0,
										0
									],
									"rotation":[
										0.7071068,
										0,
										0,
										-0.7071067
									],
									"scale":[
										1,
										1,
										1
									],
									"rootBone":"Bip001 Head",
									"boundBox":{
										"min":[
											0.1086602,
											0.217944,
											-0.2231092
										],
										"max":[
											0.2746274,
											0.3797888,
											0.2231098
										]
									},
									"boundSphere":{
										"center":[
											0.1916438,
											0.2988664,
											3.129244E-07
										],
										"radius":0.2514211
									},
									"materials":[
										{
											"type":"Laya.BlinnPhongMaterial",
											"path":"Assets/Animation/player/moxing_1.lmat"
										}
									],
									"meshPath":"Assets/Animation/player/moxing_1-CL_YanJing07.lm"
								},
								"components":[],
								"child":[]
							},
							{
								"type":"SkinnedMeshSprite3D",
								"props":{
									"name":"CL_YanJing08",
									"active":false,
									"isStatic":false,
									"layer":13,
									"position":[
										0,
										0,
										0
									],
									"rotation":[
										0.7071068,
										0,
										0,
										-0.7071067
									],
									"scale":[
										1,
										1,
										1
									],
									"rootBone":"Bip001 Head",
									"boundBox":{
										"min":[
											0.09488613,
											0.2342729,
											-0.2236427
										],
										"max":[
											0.2888255,
											0.3881638,
											0.2236434
										]
									},
									"boundSphere":{
										"center":[
											0.1918558,
											0.3112184,
											3.427267E-07
										],
										"radius":0.2556167
									},
									"materials":[
										{
											"type":"Laya.BlinnPhongMaterial",
											"path":"Assets/Animation/player/moxing_1.lmat"
										}
									],
									"meshPath":"Assets/Animation/player/moxing_1-CL_YanJing08.lm"
								},
								"components":[],
								"child":[]
							},
							{
								"type":"SkinnedMeshSprite3D",
								"props":{
									"name":"CL_YanJing09",
									"active":false,
									"isStatic":false,
									"layer":13,
									"position":[
										0,
										0,
										0
									],
									"rotation":[
										0.7071068,
										0,
										0,
										-0.7071067
									],
									"scale":[
										1,
										1,
										1
									],
									"rootBone":"Bip001 Head",
									"boundBox":{
										"min":[
											0.09488613,
											0.2342729,
											-0.2236427
										],
										"max":[
											0.2888255,
											0.3881638,
											0.2236434
										]
									},
									"boundSphere":{
										"center":[
											0.1918558,
											0.3112184,
											3.427267E-07
										],
										"radius":0.2556167
									},
									"materials":[
										{
											"type":"Laya.BlinnPhongMaterial",
											"path":"Assets/Animation/player/moxing_1.lmat"
										}
									],
									"meshPath":"Assets/Animation/player/moxing_1-CL_YanJing09.lm"
								},
								"components":[],
								"child":[]
							}
						]
					}
				]
			}
		]
	}
}