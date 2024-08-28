import axiosInstance from 'api/core';

import { type LoginRequest, LoginResponse, RefreshRequest, RefreshResponse } from 'api/modules/auth/types';
import { type CommonResponseReturnType } from 'api/modules/commonType';

const URL_ROOT = 'auth';

export const authAPI = {
  // 로그인
  login: async (payload: LoginRequest): Promise<CommonResponseReturnType<LoginResponse>> => {
    const res = await axiosInstance.post(`${URL_ROOT}/login`, payload);
    return res.data;
  },
  refresh: async (payload: RefreshRequest): Promise<CommonResponseReturnType<RefreshResponse>> => {
    const res = await axiosInstance.post(`${URL_ROOT}/refresh`, payload);
    return res.data;
  },
  logout: async () => {
    await axiosInstance.post(`${URL_ROOT}/logout`);
  }
}
