import { useMutation } from '@tanstack/react-query';

import { authAPI } from 'api/modules/auth';

import { type LoginRequest, LoginResponse, RefreshRequest, RefreshResponse } from 'api/modules/auth/types';
import { type UseMutationOptions } from '@tanstack/react-query';
import { type CommonResponseReturnType } from 'api/modules/commonType';

// 로그인 훅
export const useAuthLogin = (
  options?: UseMutationOptions<CommonResponseReturnType<LoginResponse>, Error, LoginRequest>
) => {
  return useMutation({
    mutationFn: (payload: LoginRequest) => authAPI.login(payload),
    ...options,
  });
}

// 로그아웃 훅
export const useAuthLogout = () => {
  return useMutation({
    mutationFn: () => authAPI.logout(),
  });
}

// 리프레시 훅
export const useAuthRefresh = (options?: UseMutationOptions<CommonResponseReturnType<RefreshResponse>, Error, RefreshRequest>) => {
  return useMutation({
    mutationFn: (payload: RefreshRequest) => authAPI.refresh(payload),
    ...options
  });
}