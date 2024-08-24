import axiosInstance from 'api/core';
import { CreateOwnerRequest, CreateOwnerResponse } from './types';

const URL_ROOT = 'owners';

// 점주 생성
export const createOwnerFn = async ({ payload }: { payload: CreateOwnerRequest }): Promise<CreateOwnerResponse> => {
  const res = await axiosInstance.post(URL_ROOT, payload);
  return res.data;
};
