import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { accountApi } from 'api/modules/account';

import { type CreateManagerRequest, CreateManagerResponse } from 'api/modules/account/types';
import { type CommonResponseReturnType } from 'api/modules/commonType';

// 관리자 계정 생성 hooks
export const useCreateManager = (options?: UseMutationOptions<CommonResponseReturnType<CreateManagerResponse>, Error, CreateManagerRequest>) => {
  return useMutation({
    mutationFn: (payload: CreateManagerRequest ) => accountApi.createManager(payload),
    onSuccess: () => {
      // 관리자 계정 생성 성공 메세지 출력
    },
    onError: (error) => {
      console.error(error);
    },
    ...options,
  });
}
