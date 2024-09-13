import axiosInstance from "api/core";

import {
  type CreateStoreRequest,
  CreateStoreResponse,
  GetStoreResponse,
  StoresParams,
  GetStoresMenuResponse,
  GetStoresMenuParams,
  GetMenuDetailResponse,
  GetOrderResponse,
  GetOrderDetailResponse,
  UpdateOrderRequest,
  GetReviewsResponse,
  GetReviewsParams,
} from "api/modules/stores/types";
import { type CommonResponseReturnType } from "api/modules/commonType";
import type { CreateMenuRequest, CreateMenuResponse } from "../menu/types";

const URL_ROOT = "stores";

export const storeAPI = {
  store: {
    // 음식점 정보 등록 API
    createStore: async (
      payload: CreateStoreRequest
    ): Promise<CommonResponseReturnType<CreateStoreResponse>> => {
      const res = await axiosInstance.post(`${URL_ROOT}/stores`, payload);
      return res.data;
    },

    // 음식점 정보 조회 API
    getStore: async (
      storeId: number,
      queryParams?: GetStoresMenuParams
    ): Promise<GetStoreResponse> => {
      const res = await axiosInstance.get(`${URL_ROOT}/stores/${storeId}`, {
        params: queryParams,
      });
      return res.data;
    },

    // 음식점 정보 삭제 API
    deleteStore: async (storeId: number): Promise<void> => {
      const res = await axiosInstance.delete(`${URL_ROOT}/stores/${storeId}`);
      return res.data;
    },
  },

  menu: {
    // 메뉴 정보 조회 API
    getStoresMenu: async (
      storeId: number,
      queryParams?: StoresParams
    ): Promise<GetStoresMenuResponse> => {
      const res = await axiosInstance.get(
        `${URL_ROOT}/stores/${storeId}/menus`,
        {
          params: queryParams,
        }
      );
      return res.data;
    },

    // 메뉴 정보 상세 조회 API
    getStoresMenuDetail: async (
      storeId: number,
      menuId: number
    ): Promise<GetMenuDetailResponse> => {
      const res = await axiosInstance.get(
        `${URL_ROOT}/stores/${storeId}/menus/${menuId}`
      );
      return res.data;
    },

    // 메뉴 정보 추가
    createStoresMenu: async (
      storeId: number,
      payload: CreateMenuRequest
    ): Promise<CreateMenuResponse> => {
      const res = await axiosInstance.post(
        `${URL_ROOT}/stores/${storeId}/menus`,
        payload
      );
      return res.data;
    },

    // 메뉴 정보 삭제
    deleteStoresMenu: async (
      storeId: number,
      menuId: number
    ): Promise<void> => {
      const res = await axiosInstance.delete(
        `${URL_ROOT}/stores/${storeId}/menus/${menuId}`
      );
      return res.data;
    },
  },

  order: {
    // 주문 정보 조회
    getStoresOrders: async (storeId: number): Promise<GetOrderResponse> => {
      const res = await axiosInstance.get(
        `${URL_ROOT}/stores/${storeId}/orders`
      );
      return res.data;
    },

    // 주문 정보 상세 조회
    getStoresOrderDetail: async (
      storeId: number,
      orderId: number
    ): Promise<GetOrderDetailResponse> => {
      const res = await axiosInstance.get(
        `${URL_ROOT}/stores/${storeId}/orders/${orderId}`
      );
      return res.data;
    },

    // 주문 정보 수정(취소) API
    updateStoresOrder: async (
      storeId: number,
      orderId: number,
      payload: UpdateOrderRequest
    ): Promise<void> => {
      const res = await axiosInstance.patch(
        `${URL_ROOT}/stores/${storeId}/orders/${orderId}`,
        payload
      );
      return res.data;
    },
  },

  review: {
    // 리뷰 정보 조회
    getStoresReviews: async (
      storeId: number,
      queryParams: GetReviewsParams
    ): Promise<GetReviewsResponse> => {
      const res = await axiosInstance.get(
        `${URL_ROOT}/stores/${storeId}/reviews`,
        {
          params: queryParams,
        }
      );
      return res.data;
    },

    // 리뷰 정보 삭제 - 관리자만 가능
    deleteStoresReview: async (
      storeId: number,
      reviewId: number
    ): Promise<void> => {
      await axiosInstance.delete(
        `${URL_ROOT}/stores/${storeId}/reviews/${reviewId}`
      );
    },
  },
};
