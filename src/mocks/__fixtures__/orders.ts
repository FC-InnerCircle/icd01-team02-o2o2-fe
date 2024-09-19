export const orderMockData = {
  list: {
    response: {
      orders: [
        {
          orderId: 1,
          status: 'ORDER',
          storeName: '김밥천국 동대문점',
          ordererName: '김철수',
          menutotalPrice: 18500,
        },
        {
          orderId: 2,
          status: 'PREPARING',
          storeName: '스타벅스 강남역점',
          ordererName: '이영희',
          menutotalPrice: 7200,
        },
        {
          orderId: 3,
          status: 'DELIVERING',
          storeName: '맥도날드 홍대입구점',
          ordererName: '박민수',
          menutotalPrice: 15600,
        },
        {
          orderId: 4,
          status: 'DELIVERED',
          storeName: '피자헛 서울대점',
          ordererName: '정다인',
          menutotalPrice: 24800,
        },
        {
          orderId: 5,
          status: 'ORDER',
          storeName: '맘스터치 신촌점',
          ordererName: '최윤아',
          menutotalPrice: 13400,
        },
        {
          orderId: 6,
          status: 'PREPARING',
          storeName: '버거킹 종로3가점',
          ordererName: '홍길동',
          menutotalPrice: 17500,
        },
        {
          orderId: 7,
          status: 'CANCELLED',
          storeName: '설빙 명동점',
          ordererName: '서유진',
          menutotalPrice: 8900,
        },
        {
          orderId: 8,
          status: 'ORDER',
          storeName: '교촌치킨 강남구청점',
          ordererName: '이준혁',
          menutotalPrice: 29900,
        },
        {
          orderId: 9,
          status: 'DELIVERING',
          storeName: '롯데리아 압구정점',
          ordererName: '김미영',
          menutotalPrice: 11300,
        },
        {
          orderId: 10,
          status: 'DELIVERED',
          storeName: '배스킨라빈스 건대입구점',
          ordererName: '강하늘',
          menutotalPrice: 17800,
        },
        {
          orderId: 11,
          status: 'CANCELLED',
          storeName: '이디야커피 성수점',
          ordererName: '오수민',
          menutotalPrice: 5000,
        },
      ],
    },
  },
  detail: {
    response: {
      orderId: 1,
      status: '주문 상태',
      price: 11000,
      orderTime: '2024-08-20 10:00:00',
      store: {
        storeId: 1,
        name: '가게 상호명',
      },
      orderer: {
        userId: '사용자 id',
        name: '주문자 이름',
        phone: '주문자 휴대폰 번호',
        address: '배달 주소',
        addressDetail: '상세 주소',
        zipCode: '355-14',
      },
      menus: [
        {
          name: '메뉴명',
          price: 10000,
          quantity: 1,
          options: [
            {
              seq: 1,
              name: '맵기',
              value: '맵기 1단계',
              price: 1000,
            },
            {
              seq: 2,
              name: '간',
              value: '매우 짜게',
              price: 0,
            },
          ],
        },
      ],
    },
  },
};
