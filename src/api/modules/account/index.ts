import axiosInstance from 'api/core';
import { ProfileResponse, UpdateProfileRequest, UpdateProfileResponse } from './types';

const URL_ROOT = "accounts";

// 프로필 조회 API
export const getProfileFn = async (id: number, queryParams?: Record<string, string>): Promise<ProfileResponse> => {
  const res = await axiosInstance.get(`${URL_ROOT}/${id}/profile`, {
    params: queryParams,
  });
  return res.data;
}

// 프로필 수정 API
export const updateProfileFn = async (id: number, { payload }: { payload: UpdateProfileRequest }): Promise<UpdateProfileResponse> => {
  const res = await axiosInstance.post(`${URL_ROOT}/${id}/profile`, payload);
  return res.data;
}
