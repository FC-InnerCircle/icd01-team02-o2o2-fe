/**
 * query KEY 관리
 * 쿼리가 많아질 시 폴더 별로 관리
 */

import {
  type GetStoresMenuParams,
  StoresParams,
} from 'api/modules/stores/types';

const queryKeys = {
  account: {
    all: ['@/account'],
    profile: (id: number, queryParams?: Record<string, string>) => [
      { key: '@/account/profile', id, queryParams },
    ],
    updateProfile: (id: number) => [{ key: '@/account/profile/update', id }],
  },
  stores: {
    all: ['@/stores'],
    store: {
      all: ['@/stores/store'],
      list: (storeId: number, queryParams?: GetStoresMenuParams) => [
        { key: '@/stores/store/list', storeId, queryParams },
      ],
    },
    menus: {
      all: ['@/stores/menus'],
      list: (storeId: number, queryParams?: StoresParams) => [
        { key: '@/stores/menus/list', storeId, queryParams },
      ],
      detail: (storeId: number, menuId: number) => [
        { key: '@/stores/menus/detail', storeId, menuId },
      ],
    },
    orders: {
      all: ['@/stores/orders'],
      list: (storeId: number) => [{ key: '@/stores/orders/list', storeId }],
      detail: (storeId: number, orderId: number) => [
        { key: '@/stores/orders/detail', storeId, orderId },
      ],
    },
    reviews: {
      all: ['@/stores/reviews'],
      list: (storeId: number, queryParams?: StoresParams) => [
        { key: '@/stores/reviews/list', storeId, queryParams },
      ],
    },
  },
  order: {
    all: 'order',
    lists: (params?: Record<string, string | number>) => [
      'order',
      'list',
      params,
    ],
    detail: ['order', 'detail'],
  },
};

export default queryKeys;
