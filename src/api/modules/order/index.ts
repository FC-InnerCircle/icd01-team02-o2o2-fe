import axiosInstance from 'api/core';

import type { CommonResponseReturnType } from '../commonType';
import type {
  GetOrderParams,
  GetOrderResponse,
  GetOrdersParams,
  GetOrdersResponse,
} from './types';

const URL_ROOT = '/stores';

export const orderApi = {
  getOrders: async (
    storeId: number,
    params?: GetOrdersParams
  ): Promise<CommonResponseReturnType<GetOrdersResponse>> => {
    const { data } = await axiosInstance.get(`${URL_ROOT}/${storeId}/orders`, {
      params,
    });

    return data;
  },

  getOrder: async ({
    storeId,
    orderId,
  }: GetOrderParams): Promise<CommonResponseReturnType<GetOrderResponse>> => {
    const { data } = await axiosInstance.get(
      `${URL_ROOT}/${storeId}/orders/${orderId}`
    );

    return data;
  },
};
