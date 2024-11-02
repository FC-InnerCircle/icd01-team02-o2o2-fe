// src/pages/menu/hooks/useCreateMenu.ts
import type {
  CreateMenuOptionGroupReq,
  CreateMenuRequest,
} from 'api/modules/menu/types';
import { useEffect, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import type { ImageMetadata } from '@pic-pik/core';
import { useResizeImage } from '@pic-pik/react';
import { useCreateStoresMenuQuery } from 'queries/modules/stores/useStoresQuery';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';

const useCreateMenu = () => {
  const navigate = useNavigate();
  const { storeId: _storeId } = useParams<{ storeId: string }>();
  const storeId = _storeId ? Number(_storeId) : 1;
  const queryClient = useQueryClient();
  const [originalImageMetadata, setOriginalImageMetadata] =
    useState<ImageMetadata | null>(null);

  const { metadata, file } = useResizeImage({
    metadata: originalImageMetadata,
    option: {
      mode: 'aspectRatio',
      ...(originalImageMetadata &&
      originalImageMetadata.width > originalImageMetadata.height
        ? { height: 350 }
        : { width: 350 }),
    },
  });

  const { control, register, handleSubmit, setValue, getValues } =
    useForm<CreateMenuRequest>();
  const { fields, append, update, remove } = useFieldArray({
    control,
    name: 'options',
  });

  const deleteOption = (index: number) => remove(index);
  const addOption = (optionGroup: CreateMenuOptionGroupReq) => {
    append(optionGroup);
  };
  const editOption = (index: number, optionGroup: CreateMenuOptionGroupReq) => {
    update(index, optionGroup);
  };

  // 메뉴 생성 mutation 훅 사용
  const { mutate: createMenu, status } = useCreateStoresMenuQuery({
    onSuccess: () => {
      alert('메뉴가 성공적으로 등록되었습니다.');
      queryClient.invalidateQueries({
        queryKey: ['@/stores/menus/list'],
        exact: false,
      });
      navigate(`/${storeId}/menu`);
    },
    onError: (error) => {
      console.error('메뉴 등록 중 오류가 발생했습니다:', error); // 디버그 출력
      alert('메뉴 등록에 실패했습니다. 다시 시도해주세요.');
    },
  });

  const handleMenuSubmit = handleSubmit((formData) => {
    const payload: CreateMenuRequest = {
      ...formData,
      price: parseFloat(formData.price as unknown as string),
      images: metadata ? [{ imageUrl: metadata.src, seq: 0 }] : [],
    };

    createMenu({ storeId, payload });
  });

  const isCreatingMenu = status === 'pending';

  useEffect(() => {
    //TODO image 파일 aws 올리는 API 실행 후 ? form에 업데이트해주기
    // setValue("images",[file])
  }, [file]);

  useEffect(() => {
    //테스트 환경
    if (import.meta.env.VITE_USE_MSW === 'true' && metadata)
      setValue('images', [{ imageUrl: metadata?.src, seq: 0 }]);
  }, [metadata]);

  return {
    register,
    options: fields,
    deleteOption,
    addOption,
    editOption,
    imageMetadata: metadata,
    addImageFile: setOriginalImageMetadata,
    handleMenuSubmit,
    isCreatingMenu,
    getValues,
  };
};

export default useCreateMenu;
