import { http, HttpResponse } from 'msw';
import {
  accountsMockData,
  menuMockData,
  orderMockData,
  reviewsMockData,
  authMockData,
  storeMockData,
} from 'mocks/__fixtures__';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// 로그인 관련 API 요청 핸들러 정의
export const authHandlers = [
  http.post(`${BASE_URL}/auth/login`, async () => {
    return HttpResponse.json(authMockData.login);
  }),
  http.post(`${BASE_URL}/auth/refresh`, async () => {
    return HttpResponse.json(authMockData.refresh);
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
const menuHandlers = [
  http.get(`${BASE_URL}stores/:storeId/menus`, async () => {
    return HttpResponse.json(menuMockData.list);
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
  http.get(`${BASE_URL}/stores/:storeId/orders`, async () => {
    return HttpResponse.json(orderMockData.list);
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
  ...accountsHandlers,
  ...orderHandlers,
];
