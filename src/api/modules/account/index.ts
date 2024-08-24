import axiosInstance from 'api/core';
import { CreateManagerRequest, CreateManagerResponse, CreateOwnerRequest, CreateOwnerResponse, ProfileResponse, UpdateProfileRequest, UpdateProfileResponse } from './types';
import { CommonResponseReturnType } from '../commonType';

const URL_ROOT = "accounts";

// 프로필 조회 API
export const getProfileFn = async (id: number, queryParams?: Record<string, string>): Promise<CommonResponseReturnType<ProfileResponse>> => {
  const res = await axiosInstance.get(`${URL_ROOT}/${id}/profile`, {
    params: queryParams,
  });
  return res.data;
}

// 프로필 수정 API
export const updateProfileFn = async (id: number, payload: UpdateProfileRequest ): Promise<CommonResponseReturnType<UpdateProfileResponse>> => {
  const res = await axiosInstance.post(`${URL_ROOT}/${id}/profile`, payload);
  return res.data;
}

// 점주 생성 API
export const createOwnerFn = async (payload: CreateOwnerRequest): Promise<CommonResponseReturnType<CreateOwnerResponse>> => {
  const res = await axiosInstance.post(`${URL_ROOT}/owner`, payload);
  return res.data;
};

// 관리자 계정 생성
export const createManagerFn = async (payload: CreateManagerRequest ): Promise<CommonResponseReturnType<CreateManagerResponse>> => {
  const res = await axiosInstance.post(`${URL_ROOT}/admin`, payload);
  return res.data;
}
