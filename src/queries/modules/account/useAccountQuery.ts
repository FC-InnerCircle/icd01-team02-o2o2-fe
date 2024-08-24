import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createOwnerFn, getProfileFn, updateProfileFn } from 'api/modules/account';
import { CreateOwnerRequest, UpdateProfileRequest } from 'api/modules/account/types';
import queryKeys from 'queries/keys';

// 프로필 조회 쿼리 훅
export const useProfileQuery = (id: number, queryParams?: Record<string, string>) => {
  return useQuery({
    queryKey: queryKeys.account.profile(id, queryParams),
    queryFn: () => getProfileFn(id, queryParams),
    enabled: !!id,
  });
};

// 프로필 수정 쿼리 훅
export const useUpdateProfile = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ payload }: { payload:  UpdateProfileRequest}) => updateProfileFn(id, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.account.profile(id)} );
    },
    onError: (error) => {
      console.error(error);
    }
  });
}

// 점주 생성 hooks
export const useCreateOwner = () => {
  return useMutation({
    mutationFn: (payload: CreateOwnerRequest) => createOwnerFn(payload),
    onSuccess: () => {
      // 점주 생성 성공 메세지 출력
    },
    onError: (error) => {
      console.error(error);
    }
  });
}
