{
	"version":"LAYASCENE3D:02",
	"data":{
		"type":"Scene3D",
		"props":{
			"name":"Main",
			"ambientColor":[
				0.212,
				0.227,
				0.259
			],
			"reflectionDecodingFormat":1,
			"reflection":"Assets/Scenes/MainGIReflection.ltcb.ls",
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
						73.6,
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
					"lightmapBakedType":0,
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
				"type":"Sprite3D",
				"instanceID":1,
				"props":{
					"name":"SceneBox",
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
				"instanceID":2,
				"props":{
					"name":"TrailBox",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						0,
						0.5,
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
				"type":"Camera",
				"instanceID":3,
				"props":{
					"name":"Main Camera",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						0,
						1.78,
						38.31
					],
					"rotation":[
						0,
						0.9935719,
						0.1132032,
						0
					],
					"scale":[
						0.4,
						0.4,
						0.4
					],
					"clearFlag":1,
					"orthographic":false,
					"orthographicVerticalSize":10,
					"fieldOfView":50,
					"enableHDR":true,
					"nearPlane":0.01,
					"farPlane":300,
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
}