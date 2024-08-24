import { useMutation } from '@tanstack/react-query';
import { loginFn, logoutFn, refreshFn } from 'api/modules/auth';
import { LoginRequest, RefreshRequest } from 'api/modules/auth/types';

// 로그인 훅
export const useAuthLogin = () => {
  return useMutation({
    mutationFn: (payload: LoginRequest ) => loginFn(payload),
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
    mutationFn: () => logoutFn(),
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
    mutationFn: (payload: RefreshRequest) => refreshFn(payload),
    onError: (error) => {
      console.error(error);
    }
  });
}
