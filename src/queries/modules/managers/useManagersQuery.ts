import { useMutation } from '@tanstack/react-query';
import { createManagerFn } from 'api/modules/account';
import { CreateManagerRequest } from 'api/modules/account/types';

// 관리자 계정 생성 hooks
export const useCreateManager = () => {
  return useMutation({
    mutationFn: (payload: CreateManagerRequest ) => createManagerFn(payload),
    onSuccess: () => {
      // 관리자 계정 생성 성공 메세지 출력
    },
    onError: (error) => {
      console.error(error);
    }
  });
}
