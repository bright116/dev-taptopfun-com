{
	"version":"LAYASCENE3D:02",
	"data":{
		"type":"Scene3D",
		"props":{
			"name":"scene_game",
			"ambientColor":[
				0.212,
				0.227,
				0.259
			],
			"reflectionDecodingFormat":1,
			"reflection":"Assets/Scenes/scene_gameGIReflection.ltcb",
			"reflectionIntensity":1,
			"ambientMode":1,
			"ambientSphericalHarmonics":[
				0.1678838,
				-0.01659165,
				-0.01137983,
				0.00656961,
				0.004985159,
				-0.008635049,
				0.009734819,
				-0.01030053,
				0.02333619,
				0.2107363,
				0.02701665,
				-0.0188861,
				0.01090373,
				0.008416965,
				-0.01457904,
				0.01416337,
				-0.01572322,
				0.03351215,
				0.2899413,
				0.1099665,
				-0.0348094,
				0.02009422,
				0.01630473,
				-0.02824404,
				0.01814265,
				-0.02374644,
				0.04080036
			],
			"ambientSphericalHarmonicsIntensity":1,
			"lightmaps":[],
			"enableFog":false,
			"fogStart":10,
			"fogRange":40,
			"fogColor":[
				0.4666252,
				0.7598525,
				0.9245283
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
						0.1093816,
						0.8754261,
						0.4082179,
						-0.2345697
					],
					"scale":[
						1,
						1,
						1
					],
					"intensity":1,
					"lightmapBakedType":1,
					"color":[
						1,
						0.9568627,
						0.8392157
					]
				},
				"components":[],
				"child":[]
			},
			{
				"type":"MeshSprite3D",
				"instanceID":1,
				"props":{
					"name":"skybox1",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						0,
						-600,
						0
					],
					"rotation":[
						0,
						0,
						0,
						-1
					],
					"scale":[
						30,
						30,
						30
					],
					"meshPath":"Assets/Moeles/mesh_skybox1-mesh_skybox1.lm",
					"enableRender":true,
					"materials":[
						{
							"path":"Assets/Material/other/material_sky_box1.lmat"
						}
					]
				},
				"components":[],
				"child":[]
			}
		]
	}
}