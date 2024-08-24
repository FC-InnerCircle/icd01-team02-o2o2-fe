import axiosInstance from 'api/core';
import { CreateStoreRequest, CreateStoreResponse, GetStoreResponse, StoresParams, GetStoresMenuResponse, GetStoresMenuParams, GetMenuDetailResponse, CreateMenuRequest, CreateMenuResponse, GetOrderResponse, GetOrderDetailResponse, UpdateOrderRequest, GetReviewsResponse } from './types';

const URL_ROOT = 'stores';

// 음식정 정보 등록 API
export const createStoreFn = async (payload: CreateStoreRequest): Promise<CreateStoreResponse> => {
  const res = await axiosInstance.post(`${URL_ROOT}/stores`, payload);
  return res.data;
}

// 음식정 정보 조회 API
export const getStoreFn = async (storeId: number, queryParams?: GetStoresMenuParams): Promise<GetStoreResponse> => {
  const res = await axiosInstance.get(`${URL_ROOT}/stores/${storeId}`, {
    params: queryParams,
  });
  return res.data;
}

// 음식정 정보 수정 API - 백엔드 미정

// 음식정 정보 삭제 API
export const deleteStoreFn = async (storeId: number): Promise<void> => {
  await axiosInstance.delete(`${URL_ROOT}/stores/${storeId}`);
}

// 메뉴 정보 조회 API
export const getStoresMenuFn = async (storeId: number, queryParams?: StoresParams): Promise<GetStoresMenuResponse> => {
  const res = await axiosInstance.get(`${URL_ROOT}/stores/${storeId}/menus`, {
    params: queryParams,
  });
  return res.data;
}

// 메뉴 정보 상세 조회 API
export const getStoresMenuDetailFn = async (storeId: number, menuId: number): Promise<GetMenuDetailResponse> => {
  const res = await axiosInstance.get(`${URL_ROOT}/stores/${storeId}/menus/${menuId}`);
  return res.data;
}

// 메뉴 정보 추가
export const createStoresMenuFn = async (storeId: number, payload: CreateMenuRequest): Promise<CreateMenuResponse> => {
  const res = await axiosInstance.post(`${URL_ROOT}/stores/${storeId}/menus`, payload);
  return res.data;
}

// 메뉴 정보 수정 - 백엔드 미정

// 메뉴 정보 삭제
export const deleteStoresMenuFn = async (storeId: number, menuId: number): Promise<void> => {
  await axiosInstance.delete(`${URL_ROOT}/stores/${storeId}/menus/${menuId}`);
}

// 주문 정보 조회
export const getStoresOrdersFn = async (storeId: number): Promise<GetOrderResponse> => {
  const res = await axiosInstance.get(`${URL_ROOT}/stores/${storeId}/orders`);
  return res.data;
}

// 주문 정보 상세 조회
export const getStoresOrderDetailFn = async (storeId: number, orderId: number): Promise<GetOrderDetailResponse> => {
  const res = await axiosInstance.get(`${URL_ROOT}/stores/${storeId}/orders/${orderId}`);
  return res.data;
}

// 주문 정보 수정(취소) API - 백엔드 return type 미정
export const updateStoresOrderFn = async (storeId: number, orderId: number, payload: UpdateOrderRequest): Promise<void> => {
  await axiosInstance.patch(`${URL_ROOT}/stores/${storeId}/orders/${orderId}`,
    payload
  );
}

// 리뷰 정보 조회
export const getStoresReviewsFn = async (storeId: number, queryParams: StoresParams): Promise<GetReviewsResponse> => {
  const res = await axiosInstance.get(`${URL_ROOT}/stores/${storeId}/reviews`, {
    params: queryParams,
  });
  return res.data;
}

// 리뷰 정보 삭제 - 관리자만 가능
export const deleteStoresReviewFn = async (storeId: number, reviewId: number): Promise<void> => {
  await axiosInstance.delete(`${URL_ROOT}/stores/${storeId}/reviews/${reviewId}`);
}