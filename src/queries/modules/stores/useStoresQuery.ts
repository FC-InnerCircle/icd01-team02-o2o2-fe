import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createStoreFn, createStoresMenuFn, deleteStoreFn, deleteStoresMenuFn, getStoreFn, getStoresMenuFn, getStoresOrderDetailFn, getStoresOrdersFn, getStoresReviewsFn, updateStoresOrderFn } from 'api/modules/stores';
import { CreateMenuRequest, CreateMenuResponse, CreateStoreRequest, GetReviewsParams, GetStoresMenuParams, StoresParams, UpdateOrderRequest } from 'api/modules/stores/types';
import queryKeys from 'queries/keys';
import { getStoresMenuDetailFn } from '../../../api/modules/stores/index';

// 음식점 정보 등록 hooks
export const useCreateStoresQuery = () => {
  return useMutation({
    mutationFn: (payload: CreateStoreRequest) => createStoreFn(payload),
    onSuccess: () => {
      // 음식점 정보 등록 성공 메세지 출력
    },
    onError: (error) => {
      console.error(error);
    }
  });
}

// 음식점 정보 조회 hooks
export const useGetStoresQuery = (storeId: number, queryParams?: GetStoresMenuParams) => {
  return useQuery({
    queryKey: queryKeys.stores.getStores(storeId, queryParams),
    queryFn: () => getStoreFn(storeId, queryParams),
    enabled: !!storeId,
  });
}

// 음식점 정보 삭제
export const useDeleteStoresQuery = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (storeId: number) => deleteStoreFn(storeId),
    onSuccess: (_, storeId) => {
      // 음식점 정보 삭제 성공 메세지 출력

      // 쿼리 무효화
      queryClient.invalidateQueries({queryKey: queryKeys.stores.getStores(storeId)});
    },
    onError: (error) => {
      console.error(error);
    },
  });
}

// 메뉴 정보 조회 hooks
export const useGetStoresMenuQuery = (storeId: number, queryParams?: StoresParams) => {
  return useQuery({
    queryKey: queryKeys.stores.getStoreMenus(storeId, queryParams),
    queryFn: () => getStoresMenuFn(storeId, queryParams),
    enabled: !!storeId,
  });
}

// 메뉴 정보 상세 조회 hooks
export const useGetStoresMenuDetailQuery = (storeId: number, menuId: number) => {
  return useQuery({
    queryKey: queryKeys.stores.getMenusDetail(storeId, menuId),
    queryFn: () => getStoresMenuDetailFn(storeId, menuId),
    enabled: !!storeId,
  });
}

// 메뉴 정보 추가 hooks
export const useCreateStoresMenuQuery = () => {
  const queryClient = useQueryClient();

  return useMutation<CreateMenuResponse, Error, { storeId: number; payload: CreateMenuRequest }>({
    mutationFn: ({ storeId, payload }) => createStoresMenuFn(storeId, payload),

    // 성공 시 실행할 작업
    onSuccess: (_, { storeId }) => {
      queryClient.invalidateQueries({queryKey: queryKeys.stores.getStoreMenus(storeId)});
    },

    // 에러 처리
    onError: (error) => {
      console.error('메뉴 생성 중 오류 발생:', error);
    },
  });
};

// 메뉴 정보 삭제 hooks
export const useDeleteStoresMenuQuery = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ storeId, menuId }: { storeId: number; menuId: number }) => deleteStoresMenuFn(storeId, menuId),

    // 성공 시 실행할 작업
    onSuccess: (_, { storeId }) => {
      queryClient.invalidateQueries({queryKey: queryKeys.stores.getStoreMenus(storeId)});
    },

    // 에러 처리
    onError: (error) => {
      console.error('메뉴 삭제 중 오류 발생:', error);
    },
  });
};

// 주문 정보 조회 hooks
export const useGetStoresOrders = (storeId: number) => {
  return useQuery({
    queryKey: queryKeys.stores.getStoresOrders(storeId),
    queryFn: () => getStoresOrdersFn(storeId),
    enabled: !!storeId,
  });
};

// 주문 정보 상세 조회 hooks
export const useGetStoresOrderDetail = (storeId: number, orderId: number) => {
  return useQuery({
    queryKey: queryKeys.stores.getStoresDetailOrders(storeId, orderId),
    queryFn: () => getStoresOrderDetailFn(storeId, orderId),
    enabled: !!storeId,
  });
};

// 주문 정보 수정(취소) hooks
export const useUpdateStoresOrder = () => {
  const queryClient = useQueryClient();

  return useMutation<unknown, Error, { storeId: number; orderId: number, payload: UpdateOrderRequest }>({
    mutationFn: ({ storeId, orderId, payload }) => updateStoresOrderFn(storeId, orderId, payload),

    // 성공 시 실행할 작업
    onSuccess: (_, { storeId }) => {
      queryClient.invalidateQueries({queryKey: queryKeys.stores.getStoresOrders(storeId)});
    },

    // 에러 처리
    onError: (error) => {
      console.error('주문 수정 중 오류 발생:', error);
    },
  });
};

// 리뷰 정보 조회 hooks
export const useGetStoresReview = (storeId: number, queryParams: GetReviewsParams) => {
  return useQuery({
    queryKey: queryKeys.stores.getStoreReviews(storeId, queryParams),
    queryFn: () => getStoresReviewsFn(storeId, queryParams),
    enabled: !!storeId,
  });
}

// 리뷰 정보 삭제 hooks
export const useDeleteStoresReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ storeId, reviewId }: { storeId: number; reviewId: number }) => deleteStoresMenuFn(storeId, reviewId),

    // 성공 시 실행할 작업
    onSuccess: (_, { storeId }) => {
      queryClient.invalidateQueries({queryKey: queryKeys.stores.getStoreReviews(storeId)});
    },

    // 에러 처리
    onError: (error) => {
      console.error('리뷰 삭제 중 오류 발생:', error);
    },
  });
};
