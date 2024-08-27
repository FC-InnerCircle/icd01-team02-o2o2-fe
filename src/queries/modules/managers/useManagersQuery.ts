import { useMutation } from '@tanstack/react-query';

import { accountApi } from 'api/modules/account';
import { type CreateManagerRequest } from 'api/modules/account/types';

// 관리자 계정 생성 hooks
export const useCreateManager = () => {
  return useMutation({
    mutationFn: (payload: CreateManagerRequest ) => accountApi.createManager(payload),
    onSuccess: () => {
      // 관리자 계정 생성 성공 메세지 출력
    },
    onError: (error) => {
      console.error(error);
    }
  });
}
