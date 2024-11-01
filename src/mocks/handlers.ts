import { http, HttpResponse } from 'msw';
import {
  accountsMockData,
  menuMockData,
  orderMockData,
  reviewsMockData,
  authMockData,
  storeMockData,
} from 'mocks/__fixtures__';
import { Menu } from 'api/modules/stores/types';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// 로그인 관련 API 요청 핸들러 정의
export const authHandlers = [
  http.post(`${BASE_URL}/auth/login`, async () => {
    return HttpResponse.json(authMockData.login);
  }),
  http.post(`${BASE_URL}/auth/refresh`, async () => {
    return HttpResponse.json(authMockData.refresh);
  }),
  http.post(`${BASE_URL}/auth/logout`, async () => {
    return HttpResponse.json(authMockData.logout);
  }),
];

// 계정 관련 API 요청 핸들러 정의
export const accountsHandlers = [
  http.get(`${BASE_URL}/accounts/:profileId/profile`, async ({ params }) => {
    const { profileId } = params;

    if (profileId === '1') {
      return HttpResponse.json(accountsMockData.getProfile);
    }

    if (profileId === 'false') {
      return new HttpResponse(null, {
        status: 404,
        statusText: 'Not Found',
      });
    }
  }),
  http.patch(`${BASE_URL}/accounts/:profileId/profile`, async ({ params }) => {
    const { profileId } = params;

    if (profileId === '1') {
      return HttpResponse.json(accountsMockData.updateProfile);
    }

    return HttpResponse.json(accountsMockData.updateProfile);
  }),
];

// 메뉴 관련 API 요청 핸들러 정의
// 메뉴 관련 API 요청 핸들러 정의
const menuList: Menu[] = [...menuMockData.list.response.menus]; // 기존 더미 메뉴 리스트 초기화

const menuHandlers = [
  // 메뉴 리스트 조회 핸들러
  http.get(`${BASE_URL}/stores/:storeId/menus`, async () => {
    const response = {
      ...menuMockData.list,
      response: {
        ...menuMockData.list.response,
        menus: menuList, // 업데이트된 메뉴 리스트 사용
        totalLength: menuList.length,
      },
    };
    return HttpResponse.json(response);
  }),

  // 메뉴 등록 핸들러
  http.post(`${BASE_URL}/stores/:storeId/menus`, async ({ request }) => {
    // 요청 본문에서 JSON 데이터를 가져옴
    const newMenu = (await request.json()) as Omit<Menu, 'id' | 'status'>;

    // 새로운 메뉴에 ID 할당 (기존 리스트 길이 + 1)
    const newId = menuList.length + 1;
    const createdMenu = {
      id: newId,
      status: 'available', // 기본 상태 설정
      ...newMenu,
    };

    // 더미 메뉴 리스트에 새로운 메뉴 추가
    menuList.push(createdMenu);

    return HttpResponse.json(createdMenu, { status: 201 });
  }),
];
// Store 관련 API 요청 핸들러 정의
export const storeHandlers = [
  http.post(`${BASE_URL}/stores`, async () => {
    return HttpResponse.json(storeMockData.store.create);
  }),
  http.get(`${BASE_URL}/stores/:storeId`, async () => {
    return HttpResponse.json(storeMockData.store.list);
  }),
  http.get(`${BASE_URL}/stores/:storeId`, async () => {
    return HttpResponse.json(storeMockData.store.detail);
  }),
  http.patch(`${BASE_URL}/stores/:storeId`, async () => {
    return HttpResponse.json(storeMockData.store.update);
  }),
];

// Order 관련 API 요청 핸들러 정의
export const orderHandlers = [
  http.get(`${BASE_URL}/stores/:storeId/orders`, async (req) => {
    const { request } = req;
    const url = new URL(request.url);

    const page = url.searchParams.get('page') ?? 1;
    const status = url.searchParams.get('status') ?? 'all';

    const filteredOrders = orderMockData.list.response.orders
      .filter((order) => {
        if (status === 'all') {
          return true;
        }

        return order.status === status;
      })
      .slice(10 * (Number(page) - 1), Number(page) * 10);

    const data = {
      response: {
        status,
        orders: filteredOrders,
        totalCount: orderMockData.list.response.orders.length,
      },
    };

    return HttpResponse.json(data);
  }),
  http.get(`${BASE_URL}/stores/:storeId/orders/:orderId`, async () => {
    return HttpResponse.json(orderMockData.detail);
  }),
  http.patch(`${BASE_URL}/stores/:storeId/orders/:orderId`, async () => {
    return HttpResponse.json();
  }),
];

// 리뷰 관련 API 요청 핸들러 정의
export const reviewHandlers = [
  http.get(`${BASE_URL}/stores/:storeId/reviews`, async () => {
    return HttpResponse.json(reviewsMockData.list);
  }),
  http.delete(`${BASE_URL}/stores/:storeId/reviews/:reviewId`, async () => {
    return HttpResponse.json({});
  }),
];

export const handlers = [
  ...menuHandlers,
  ...storeHandlers,
  ...reviewHandlers,
  ...orderHandlers,
  ...accountsHandlers,
  ...orderHandlers,
  ...authHandlers,
];
