import axiosInstance from 'api/core';
import { LoginRequest, LoginResponse, RefreshRequest, RefreshResponse } from './types';
import { CommonResponseReturnType } from '../commonType';

const URL_ROOT = 'auth';

// 로그인
export const loginFn = async (payload: LoginRequest): Promise<CommonResponseReturnType<LoginResponse>> => {
  const res = await axiosInstance.post(`${URL_ROOT}/login`, payload);
  return res.data;
};

// 리프레시
export const refreshFn = async (payload: RefreshRequest): Promise<CommonResponseReturnType<RefreshResponse>> => {
  const res = await axiosInstance.post(`${URL_ROOT}/refresh`, payload);
  return res.data;
};

// 로그아웃
export const logoutFn = async () => {
  await axiosInstance.post(`${URL_ROOT}/logout`);
};
