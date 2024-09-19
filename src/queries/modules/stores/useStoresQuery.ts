import {
  QueryKey,
  useMutation,
  useQuery,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query';

import queryKeys from 'queries/keys';

import { storeAPI } from 'api/modules/stores/index';

import {
  type UseMutationOptions,
  UseQueryOptions,
} from '@tanstack/react-query';
import {
  type CreateMenuRequest,
  CreateMenuResponse,
  CreateStoreRequest,
  CreateStoreResponse,
  GetMenuDetailResponse,
  GetOrderDetailResponse,
  GetOrderResponse,
  GetReviewsParams,
  GetReviewsResponse,
  GetStoreResponse,
  GetStoresMenuResponse,
  StoresParams,
  UpdateOrderRequest,
} from 'api/modules/stores/types';
import { type CommonResponseReturnType } from 'api/modules/commonType';

// 음식점 정보 등록 hooks
export const useCreateStoresQuery = (
  options?: UseMutationOptions<
    CommonResponseReturnType<CreateStoreResponse>,
    Error,
    CreateStoreRequest
  >,
) => {
  return useMutation({
    mutationFn: (payload: CreateStoreRequest) =>
      storeAPI.store.createStore(payload),
    ...options,
  });
};

// 음식점 정보 조회 hooks
export const useGetStoresQuery = (
  storeId: number,
  queryParams?: StoresParams,
  options?: Omit<
    UseQueryOptions<
      GetStoreResponse, // queryFn이 반환하는 데이터 타입
      Error, // 에러 타입
      CommonResponseReturnType<GetStoreResponse>, // 데이터 타입
      QueryKey // queryKey 타입
    >,
    'queryKey' | 'queryFn' // 제거할 프로퍼티
  >,
) => {
  return useSuspenseQuery({
    queryKey: queryKeys.stores.store.list(storeId, queryParams),
    queryFn: () => storeAPI.store.getStore(storeId, queryParams),
    ...options,
  });
};

// 음식점 정보 삭제
export const useDeleteStoresQuery = (
  options?: UseMutationOptions<void, Error, number>,
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (storeId: number) => storeAPI.store.deleteStore(storeId),
    onSuccess: (_, storeId, context) => {
      if (options?.onSuccess) {
        options.onSuccess(_, storeId, context);
      }
      // 쿼리 무효화
      queryClient.invalidateQueries({
        queryKey: queryKeys.stores.store.list(storeId),
      });
    },
    onError: (error) => {
      console.error(error);
    },
    ...options,
  });
};

// 메뉴 정보 조회 hooks
export const useGetStoresMenuQuery = (
  storeId: number,
  queryParams?: StoresParams,
  options?: Omit<
    UseQueryOptions<
      GetStoresMenuResponse, // queryFn이 반환하는 데이터 타입
      Error, // 에러 타입
      GetStoresMenuResponse, // 데이터 타입
      QueryKey // queryKey 타입
    >,
    'queryKey' | 'queryFn' // 제거할 프로퍼티
  >,
) => {
  return useQuery({
    queryKey: queryKeys.stores.menus.list(storeId, queryParams),
    queryFn: () => storeAPI.menu.getStoresMenu(storeId, queryParams),
    enabled: !!storeId,
    ...options,
  });
};

// 메뉴 정보 상세 조회 hooks
export const useGetStoresMenuDetailQuery = (
  storeId: number,
  menuId: number,
  options?: Omit<
    UseQueryOptions<
      GetMenuDetailResponse, // queryFn이 반환하는 데이터 타입
      Error, // 에러 타입
      GetMenuDetailResponse, // 데이터 타입
      QueryKey // queryKey 타입
    >,
    'queryKey' | 'queryFn' // 제거할 프로퍼티
  >,
) => {
  return useQuery({
    queryKey: queryKeys.stores.menus.detail(storeId, menuId),
    queryFn: () => storeAPI.menu.getStoresMenuDetail(storeId, menuId),
    enabled: !!storeId,
    ...options,
  });
};

// 메뉴 정보 추가 hooks
export const useCreateStoresMenuQuery = (
  options?: UseMutationOptions<
    CreateMenuResponse,
    Error,
    { storeId: number; payload: CreateMenuRequest }
  >,
) => {
  const queryClient = useQueryClient();

  return useMutation<
    CreateMenuResponse,
    Error,
    { storeId: number; payload: CreateMenuRequest }
  >({
    mutationFn: ({ storeId, payload }) =>
      storeAPI.menu.createStoresMenu(storeId, payload),

    // 성공 시 실행할 작업
    onSuccess: (data, { storeId, payload }, context) => {
      if (options?.onSuccess) {
        options.onSuccess(
          data,
          { storeId: storeId, payload: payload },
          context,
        );
      }
      queryClient.invalidateQueries({
        queryKey: queryKeys.stores.menus.list(storeId),
      });
    },

    // 에러 처리
    onError: (error) => {
      console.error('메뉴 생성 중 오류 발생:', error);
    },
  });
};

// 메뉴 정보 삭제 hooks
export const useDeleteStoresMenuQuery = (
  options?: UseMutationOptions<
    void,
    Error,
    { storeId: number; menuId: number }
  >,
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ storeId, menuId }: { storeId: number; menuId: number }) =>
      storeAPI.menu.deleteStoresMenu(storeId, menuId),

    // 성공 시 실행할 작업
    onSuccess: (data, variables, context) => {
      if (options?.onSuccess) {
        options.onSuccess(data, variables, context);
      }
      queryClient.invalidateQueries({
        queryKey: queryKeys.stores.menus.all,
        exact: false,
      });
    },

    // 에러 처리
    onError: (error, variables, context) => {
      if (options?.onError) {
        options.onError(error, variables, context);
      }
      console.error('메뉴 삭제 중 오류 발생:', error);
    },
    ...options,
  });
};

// 주문 정보 조회 hooks
export const useGetStoresOrders = (
  storeId: number,
  options?: Omit<
    UseQueryOptions<
      GetOrderResponse,
      Error,
      CommonResponseReturnType<GetOrderResponse>,
      QueryKey
    >,
    'queryKey' | 'queryFn'
  >,
) => {
  return useSuspenseQuery({
    queryKey: queryKeys.stores.orders.list(storeId),
    queryFn: () => storeAPI.order.getStoresOrders(storeId),
    ...options,
  });
};

// 주문 정보 상세 조회 hooks
export const useGetStoresOrderDetail = (
  storeId: number,
  orderId: number,
  options?: Omit<
    UseQueryOptions<
      GetOrderDetailResponse,
      Error,
      GetOrderDetailResponse,
      QueryKey
    >,
    'queryKey' | 'queryFn'
  >,
) => {
  return useQuery({
    queryKey: queryKeys.stores.orders.detail(storeId, orderId),
    queryFn: () => storeAPI.order.getStoresOrderDetail(storeId, orderId),
    enabled: !!storeId,
    ...options,
  });
};

// 주문 정보 수정(취소) hooks
export const useUpdateStoresOrder = (
  options?: UseMutationOptions<
    void,
    Error,
    { storeId: number; orderId: number; payload: UpdateOrderRequest }
  >,
) => {
  const queryClient = useQueryClient();

  return useMutation<
    void,
    Error,
    { storeId: number; orderId: number; payload: UpdateOrderRequest }
  >({
    mutationFn: ({ storeId, orderId, payload }) =>
      storeAPI.order.updateStoresOrder(storeId, orderId, payload),

    // 성공 시 실행할 작업
    onSuccess: (_, { storeId, orderId, payload }, context) => {
      if (options?.onSuccess) {
        options.onSuccess(_, { storeId, orderId, payload }, context);
      }
      queryClient.invalidateQueries({
        queryKey: queryKeys.stores.orders.list(storeId),
      });
    },

    // 에러 처리
    onError: (error, variables, context) => {
      if (options?.onError) {
        options.onError(error, variables, context);
      }

      console.error('주문 수정 중 오류 발생:', error);
    },
  });
};

// 리뷰 정보 조회 hooks
export const useGetStoresReview = (
  storeId: number,
  queryParams?: GetReviewsParams,
  options?: Omit<
    UseQueryOptions<GetReviewsResponse, Error, GetReviewsResponse, QueryKey>,
    'queryKey' | 'queryFn'
  >,
) => {
  return useQuery({
    queryKey: queryKeys.stores.reviews.list(storeId, queryParams),
    queryFn: () => storeAPI.review.getStoresReviews(storeId, queryParams),
    enabled: !!storeId,
    ...options,
  });
};

// 리뷰 정보 삭제 hooks
export const useDeleteStoresReview = (
  options?: UseMutationOptions<
    void,
    Error,
    { storeId: number; reviewId: number }
  >,
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      storeId,
      reviewId,
    }: {
      storeId: number;
      reviewId: number;
    }) => storeAPI.review.deleteStoresReview(storeId, reviewId),

    // 성공 시 실행할 작업
    onSuccess: (data, variables, context) => {
      // 로그인 성공 메세지 출력
      if (options?.onSuccess) {
        options.onSuccess(data, variables, context);
      }
      queryClient.invalidateQueries({ queryKey: queryKeys.stores.reviews.all });
    },

    // 에러 처리
    onError: (error, variables, context) => {
      if (options?.onError) {
        options.onError(error, variables, context);
      }
      console.error(error);
    },
    ...options,
  });
};
