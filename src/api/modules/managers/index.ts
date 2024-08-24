import axiosInstance from 'api/core';
import { CreateManagerRequest, CreateManagerResponse } from './types';

const URL_ROOT = "managers";

// 관리자 계정 생성
export const createManagerFn = async ({ payload }: { payload: CreateManagerRequest }): Promise<CreateManagerResponse> => {
  const res = await axiosInstance.post(URL_ROOT, payload);
  return res.data;
}
