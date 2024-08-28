import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { type UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';

import { type CreateOwnerRequest, CreateOwnerResponse, UpdateProfileRequest, UpdateProfileResponse } from 'api/modules/account/types';

import { accountApi } from 'api/modules/account/index';

import queryKeys from 'queries/keys';
import { CommonResponseReturnType } from 'api/modules/commonType';

// 프로필 조회 쿼리 훅
export const useProfileQuery = (id: number, queryParams?: Record<string, string>, options?: UseQueryOptions) => {
  return useQuery({
    queryKey: queryKeys.account.profile(id, queryParams),
    queryFn: () => accountApi.getProfile(id, queryParams),
    enabled: !!id,
    ...options,
  });
};

// 프로필 수정 쿼리 훅
/**
 * @TODO
 * Error: 추후에 커스텀
 */

export const useUpdateProfile = (
  id: number,
  options?: UseMutationOptions<CommonResponseReturnType<UpdateProfileResponse>, Error, UpdateProfileRequest>
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: UpdateProfileRequest) => accountApi.updateProfile(id, payload),
    onSuccess: (data, variables, context) => {
      if (options?.onSuccess) {
        options.onSuccess(data, variables, context);
      }
      queryClient.invalidateQueries({ queryKey: queryKeys.account.profile(id)} );
    },
    onError: (error) => {
      console.error(error);
    },
    ...options
  });
}

// 점주 생성 hooks
export const useCreateOwner = (
  options?: UseMutationOptions<CommonResponseReturnType<CreateOwnerResponse>, Error, CreateOwnerRequest>
) => {
  return useMutation({
    mutationFn: (payload: CreateOwnerRequest) => accountApi.createOwner(payload),
    onSuccess: (data, variables, context) => {
      // 로그인 성공 메세지 출력
      if (options?.onSuccess) {
        options.onSuccess(data, variables, context);
      }
    },
    onError: (error, variables, context) => {
      // 추후 에러 메세지 출력
      if (options?.onError) {
        options.onError(error, variables, context);
      }
      console.error(error);
    },
    ...options
  });
}
