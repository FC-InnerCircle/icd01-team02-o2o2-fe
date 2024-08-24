
/**
 * query KEY 관리
 * 쿼리가 많아질 시 폴더 별로 관리
 */

import { GetStoresMenuParams, StoresParams } from 'api/modules/stores/types';

const queryKeys = {
  account: {
    profile: (id: number, queryParams?: Record<string, string>) => [{ key: '@/account/profile', id, queryParams }],
    updateProfile: (id: number) => [{ key: '@/account/profile/update', id }],
  },
  stores: {
    getStores: (storeId: number, queryParams?: GetStoresMenuParams) => [{ key: '@/stores/list', storeId, queryParams }],
    createStore: () => [{ key: '@/stores/create' }],
    getStoreMenus: (storeId: number, queryParams?: StoresParams) => [{ key: '@/stores/menus', storeId, queryParams }],
    getMenusDetail: (storeId: number, menuId: number) => [{ key: '@/stores/menus/detail', storeId, menuId }],
    getStoresOrders: (storeId: number) => [{ key: '@/stores/orders', storeId }],
    getStoresDetailOrders: (storeId: number, orderId: number) => [{ key: '@/stores/orders/detail', storeId, orderId }],
    getStoreReviews: (storeId: number, queryParams?: StoresParams) => [{ key: '@/stores/review', storeId, queryParams }],
  }
}

export default queryKeys;