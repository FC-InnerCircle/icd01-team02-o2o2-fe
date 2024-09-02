export const orderMockData = {
  list: {
    "response": {
				"status": "ORDER",
				"orders": [
						{
								"status": "ORDER",
								"store": {
										"storeId": 1,
										"name": "가게 상호명"
								},
								"orderer": {
											"userId": "사용자 id",
											"name": "사용자명",
											"phone": "주문자 휴대폰 번호",
											"address": "배달 주소",
											"addressDetail": "상세 주소",
											"zipCode": "우편 번호"
								},
								"menu": {
										"totalPrice": "목록이라 전체 금액 정도면 될 듯?",
										"???": "주문 메뉴들 한 줄에 보이게?"
								}
						},
						{
								"status": "ORDER",
								"store": {
										"storeId": 2,
										"name": "가게 상호명"
								},
								"orderer": {
											"userId": "사용자 id",
											"name": "사용자명",
											"phone": "주문자 휴대폰 번호",
											"address": "배달 주소",
											"addressDetail": "상세 주소",
											"zipCode": "우편 번호"
								},
								"menu": {
										"totalPrice": "목록이라 전체 금액 정도면 될 듯?",
										"???": "주문 메뉴들 한 줄에 보이게?"
								}
						},
				]
		}
  },
  detail: {
    "response": {
				"orderId": 1,
				"status": "주문 상태",
				"price": 11000,
				"orderTime": "2024-08-20 10:00:00",
				"store": {
						"storeId": 1,
						"name": "가게 상호명"
				},
				"orderer": {
						"userId": "사용자 id",
						"name": "주문자 이름",
						"phone": "주문자 휴대폰 번호",
						"address": "배달 주소",
						"addressDetail": "상세 주소",
						"zipCode": "355-14"
				},
				"menus": [
						{
								"name": "메뉴명",
								"price": 10000,
								"quantity": 1,
								"options": [
										{
												"seq": 1,
												"name": "맵기",
												"value": "맵기 1단계",
												"price": 1000
										},
										{
												"seq": 2,
												"name": "간",
												"value": "매우 짜게",
												"price": 0
										}
								]
						}
				]
		}
  }
}