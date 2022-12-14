{
	"version":"LAYASCENE3D:02",
	"data":{
		"type":"Scene3D",
		"props":{
			"name":"Main",
			"sky":{
				"material":{
					"type":"Laya.SkyPanoramicMaterial",
					"path":"Assets/Material/sky.lmat"
				},
				"mesh":"SkyDome"
			},
			"ambientColor":[
				0.212,
				0.227,
				0.259
			],
			"ambientMode":1,
			"ambientSphericalHarmonics":[
				0.1678833,
				-0.01659219,
				-0.01137973,
				0.006569836,
				0.004985139,
				-0.00863496,
				0.009734808,
				-0.01030069,
				0.02333598,
				0.2107354,
				0.02701576,
				-0.0188861,
				0.01090351,
				0.008416954,
				-0.01457884,
				0.01416308,
				-0.01572332,
				0.03351187,
				0.2899403,
				0.109965,
				-0.0348096,
				0.0200939,
				0.01630429,
				-0.02824396,
				0.01814246,
				-0.02374582,
				0.04080005
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
				"type":"Camera",
				"instanceID":0,
				"props":{
					"name":"Main Camera",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						-11.46,
						19.47,
						-22.77
					],
					"rotation":[
						0.04576426,
						0.9187295,
						0.3759441,
						-0.1118383
					],
					"scale":[
						1,
						1,
						1
					],
					"clearFlag":1,
					"orthographic":false,
					"orthographicVerticalSize":10,
					"fieldOfView":60,
					"enableHDR":true,
					"nearPlane":0.3,
					"farPlane":1000,
					"viewport":[
						0,
						0,
						1,
						1
					],
					"clearColor":[
						1,
						1,
						1,
						0
					]
				},
				"components":[],
				"child":[]
			},
			{
				"type":"DirectionLight",
				"instanceID":1,
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
				"type":"Sprite3D",
				"instanceID":2,
				"props":{
					"name":"SceneRoot",
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
			}
		]
	}
}