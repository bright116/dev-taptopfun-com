{
	"version":"LAYASCENE3D:01",
	"data":{
		"type":"Scene3D",
		"props":{
			"name":"Scene",
			"ambientColor":[
				0.445713,
				0.3287197,
				0.5588235
			],
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
				"type":"Camera",
				"props":{
					"name":"Main Camera",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						0,
						4,
						-9
					],
					"rotation":[
						0,
						0.8870109,
						0.4617486,
						0
					],
					"scale":[
						1,
						1,
						1
					],
					"clearFlag":0,
					"orthographic":false,
					"fieldOfView":60,
					"nearPlane":0.3,
					"farPlane":2000,
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
				"type":"DirectionLight",
				"props":{
					"name":"Directional Light",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						0,
						10,
						0
					],
					"rotation":[
						-0.09904577,
						0.8923991,
						0.3696438,
						0.2391177
					],
					"scale":[
						1,
						1,
						1
					],
					"intensity":1,
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
				"type":"Sprite3D",
				"props":{
					"name":"EnemyBox",
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
				"child":[]
			},
			{
				"type":"Sprite3D",
				"props":{
					"name":"PropBox",
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
				"child":[]
			},
			{
				"type":"Sprite3D",
				"props":{
					"name":"EffectBox",
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
				"child":[]
			},
			{
				"type":"MeshSprite3D",
				"props":{
					"name":"Bg",
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
					],
					"meshPath":"Assets/Moder/beij-Box024.lm",
					"enableRender":true,
					"materials":[
						{
							"path":"Assets/Materin/dxia.lmat"
						}
					]
				},
				"components":[],
				"child":[
					{
						"type":"MeshSprite3D",
						"props":{
							"name":"di",
							"active":true,
							"isStatic":false,
							"layer":0,
							"position":[
								0,
								-150,
								0
							],
							"rotation":[
								0,
								0,
								0,
								-1
							],
							"scale":[
								200,
								200,
								200
							],
							"meshPath":"Assets/Moder/mian-Plane001.lm",
							"enableRender":true,
							"materials":[
								{
									"path":"Assets/Materin/dxia 1.lmat"
								}
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