import { useQuery, type UseQueryOptions } from '@tanstack/react-query';

import { orderApi } from 'api/modules/order';
import type { GetOrdersParams } from 'api/modules/order/types';

import queryKeys from 'queries/keys';

// 프로필 조회 쿼리 훅
export const useGetOrdersQuery = (
  storeId: number,
  queryParams?: GetOrdersParams,
  options?: UseQueryOptions
) => {
  return useQuery({
    queryKey: queryKeys.order.lists(queryParams),
    queryFn: () => {
      return orderApi.getOrders(storeId, queryParams);
    },
    enabled: !!storeId,
    ...options,
  });
};
