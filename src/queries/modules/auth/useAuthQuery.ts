import { useMutation } from '@tanstack/react-query';

import { authAPI } from 'api/modules/auth';
import { type LoginRequest, RefreshRequest } from 'api/modules/auth/types';

// 로그인 훅
export const useAuthLogin = () => {
  return useMutation({
    mutationFn: (payload: LoginRequest ) => authAPI.login(payload),
    onSuccess: () => {
      // 로그인 성공 메세지 출력
    },
    onError: (error) => {
      // 추후 에러 메세지 출력
      console.error(error);
    }
  });
}

// 로그아웃 훅
export const useAuthLogout = () => {
  return useMutation({
    mutationFn: () => authAPI.logout(),
    onSuccess: () => {
      // 로그아웃 성공 메세지 출력
    },
    onError: (error) => {
      console.error(error);
    }
  });
}

// 리프레시 훅
export const useAuthRefresh = () => {
  return useMutation({
    mutationFn: (payload: RefreshRequest) => authAPI.refresh(payload),
    onError: (error) => {
      console.error(error);
    }
  });
}
