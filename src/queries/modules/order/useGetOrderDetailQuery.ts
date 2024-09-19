import { useQuery } from '@tanstack/react-query';

import { orderApi } from 'api/modules/order';
import type { GetOrderParams } from 'api/modules/order/types';

import queryKeys from 'queries/keys';

export const useGetOrderQuery = (params: GetOrderParams) => {
  const query = useQuery({
    queryKey: queryKeys.order.detail,
    queryFn: () => {
      return orderApi.getOrder(params);
    },
  });

  return query;
};
