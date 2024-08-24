import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getProfileFn, updateProfileFn } from 'api/modules/account';
import { UpdateProfileRequest } from 'api/modules/account/types';
import queryKeys from 'queries/keys';

// 프로필 조회 쿼리 훅
export const useProfileQuery = (id: number, queryParams?: Record<string, string>) => {
  return useQuery({
    queryKey: queryKeys.account.profile(id, queryParams),
    queryFn: () => getProfileFn(id, queryParams),
    staleTime: 0,
  });
};

// 프로필 수정 쿼리 훅
export const useUpdateProfile = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ payload }: { payload:  UpdateProfileRequest}) => updateProfileFn(id, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.account.updateProfile(id)});
    },
    onError: (error) => {
      console.error(error);
    }
  });
}
