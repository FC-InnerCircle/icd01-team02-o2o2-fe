import axiosInstance from 'api/core';

import { type CreateManagerRequest, CreateManagerResponse, CreateOwnerRequest, CreateOwnerResponse, ProfileResponse, UpdateProfileRequest, UpdateProfileResponse } from 'api/modules/account/types';
import { type CommonResponseReturnType } from 'api/modules/commonType';

const URL_ROOT = "accounts";

export const accountApi = {
  // 프로필 조회 APIs
  getProfile: async (id: number, queryParams?: Record<string, string>): Promise<CommonResponseReturnType<ProfileResponse>> => {
    const res = await axiosInstance.get(`${URL_ROOT}/${id}/profile`, {
      params: queryParams,
    });
    return res.data;
  },

  // 프로필 수정 API
  updateProfile: async (id: number, payload: UpdateProfileRequest ): Promise<CommonResponseReturnType<UpdateProfileResponse>> => {
    const res = await axiosInstance.patch(`${URL_ROOT}/${id}/profile`, payload);
    return res.data;
  },

  // 점주 생성 API
  createOwner: async (payload: CreateOwnerRequest): Promise<CommonResponseReturnType<CreateOwnerResponse>> => {
    const res = await axiosInstance.post(`${URL_ROOT}/owner`, payload);
    return res.data;
  },

  // 관리자 계정 생성
  createManager: async (payload: CreateManagerRequest): Promise<CommonResponseReturnType<CreateManagerResponse>> => {
    const res = await axiosInstance.post(`${URL_ROOT}/admin`, payload);
    return res.data;
  }
};
