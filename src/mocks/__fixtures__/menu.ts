export const menuMockData = {
  list: {
    "response": {
				"menus": [
						{
								"id": 1,
								"status": "SOLDOUT",
								"name": "비빔밥",
								"desc": "나물만 들어간 비빔밥",
								"price": 8000,
								"thumbImageUrl": "",
								"ordering": 1
						},
						{
								"id": 2,
								"status": "ENABLED",
								"name": "김치볶음밥",
								"desc": "김치만 들어간 볶음밥",
								"price": 7000,
								"thumbImageUrl": "",
								"ordering": 2
						}
				],
				"page": 1,
				"size": 10,
				"totalLength": 100
		},
		"code": "200",
		"message": "성공"
	},
	detail: {
		"response": {
				"menuId": 1,
				"status": "SOLDOUT",
				"name": "비빔밥",
				"desc": "나물만 들어간 비빔밥",
				"price": 8000,
				"images": [
						{
								"imageId": 1,
								"ordering": 1,
								"imageUrl": ""
						},
						{
								"imageId": 2,
								"ordering": 2,
								"imageUrl": ""
						}
				],
				"optionGroups": [
						{
								"optionGroupId": 1,
								"ordering": 1,
								"isRequired": true,
								"title": "토핑 추가",
								"options": [
										{
												"optionId": 3,
												"ordering": 1,
												"name": "토핑 없음",
												"price": 0,
												"desc": "나물만?ㄷㄷ",
										},
										{
												"optionId": 1,
												"ordering": 2,
												"name": "육회",
												"price": 4000,
												"desc": "육 비",
										},
										{
												"optionId": 2,
												"ordering": 3,
												"name": "연어",
												"price": 4000,
												"desc": "생연어 추가"
										}
								]
						},
						{
								"optionGroupId": 2,
								"ordering": 2,
								"isRequired": false,
								"title": "리뷰 이벤트",
								"options": [
										{
												"optionId": 1,
												"ordering": 1,
												"name": "참여 x",
												"price": 0,
												"desc": "",
										},
										{
												"optionId": 2,
												"ordering": 2,
												"name": "참여 o (콜라 500ml)",
												"price": 0,
												"desc": "",
										},
										{
												"optionId": 3,
												"ordering": 3,
												"name": "참여 o (장국 추가)",
												"price": 0,
												"desc": ""
										}
								]
						},
				]
		},
		"code": "200",
		"message": "성공"
	},
	create: {
		"response": {
		"menuId": 1,
		"status": "SOLDOUT",
		"name": "비빔밥",
		"desc": "나물만 들어간 비빔밥",
		"price": 8000,
		"images": [
				{
						"seq": 1,
						"imageUrl": ""
				},
				{
						"seq": 2,
						"imageUrl": ""
				}
		],
		"options": [
				{
						"optionGroupId": 1,
						"title": "토핑 추가",
						"isRequired": true,
						"details": [
								{
										"optionId": 3,
										"seq": 1,
										"name": "토핑 없음",
										"price": 0,
										"desc": "나물만?ㄷㄷ",
								},
								{
										"optionId": 1,
										"seq": 2,
										"name": "육회",
										"price": 4000,
										"desc": "육 비",
								},
								{
										"optionId": 2,
										"seq": 3,
										"name": "연어",
										"price": 4000,
										"desc": "생연어 추가"
								}
						]
				},
				{
						"optionGroupId": 2,
						"title": "리뷰 이벤트",
						"isRequired": false,
						"details": [
								{
										"optionId": 1,
										"seq": 1,
										"name": "참여 x",
										"price": 0,
										"desc": "",
								},
								{
										"optionId": 2,
										"seq": 2,
										"name": "참여 o (콜라 500ml)",
										"price": 0,
										"desc": "",
								},
								{
										"optionId": 3,
										"seq": 3,
										"name": "참여 o (장국 추가)",
										"price": 0,
										"desc": ""
								}
						]
				},
		]
}
	},
	update: {
		"name": "BBQ",
		"contactNumber": "01012345678",
		"zipCode": "12345",
		"address": "주소",
		"addressDetail": "상세주소",
		"latitude": 37.5453458368972,
		"longitude": 127.18484365063364,
		"openTime": "10:00",
		"closeTime": "23:00",
		"categories": ["", ""],
		"minimumOrderAmount": 10000,
		"deliveryArea": "금천구",
		"createdAt": "2024-01-01 12:00:00",
		"updatedAt": "2024-01-01 12:00:00"
	}
}
