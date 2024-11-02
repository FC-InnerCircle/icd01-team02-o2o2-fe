import type { CreateMenuRequest } from 'api/modules/menu/types';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import type { ImageMetadata } from '@pic-pik/core';
import { useResizeImage } from '@pic-pik/react';
import type { MenuDetailInfo } from 'api/modules/stores/types';
import { useUpdateStoresMenuQuery } from 'queries/modules/stores/useStoresQuery';
import { useNavigate, useParams } from 'react-router-dom';

const useMenuDetail = ({ menu }: { menu: MenuDetailInfo }) => {
  const { storeId: _storeId } = useParams<{ storeId: string }>();
  const storeId = _storeId ? Number(_storeId) : 1;
  const navigate = useNavigate();
  const { mutate: updateMenu, status } = useUpdateStoresMenuQuery({
    onSuccess: () => {
      alert('메뉴가 성공적으로 업데이트되었습니다.');
      navigate(`/${storeId ?? 0}/menu`);
    },
    onError: (error) => {
      console.error('메뉴 업데이트 중 오류 발생:', error);
      alert('메뉴 업데이트에 실패했습니다. 다시 시도해주세요.');
    },
  });

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

  const { register, setValue, getValues, handleSubmit } =
    useForm<CreateMenuRequest>({
      defaultValues: menu,
    });

  const handleMenuSubmit = handleSubmit((formData) => {
    const menuId = menu.menuId;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { options, ...payload } = formData;

    updateMenu({ storeId, menuId, payload });
  });

  useEffect(() => {
    //TODO image파일  form에 업데이트해주기
    console.log(file);
    //setValue("images",[file])
  }, [file]);

  useEffect(() => {
    //테스트 환경
    if (import.meta.env.VITE_USE_MSW === 'true' && metadata)
      setValue('images', [{ imageUrl: metadata?.src, seq: 0 }]);
  }, [metadata]);

  return {
    register,
    originalImage: menu.images?.[0]?.imageUrl,
    imageMetadata: metadata,
    addImageFile: setOriginalImageMetadata,
    getValues,
    handleMenuSubmit,
    isLoadingSubmit: status === 'pending',
  };
};

export default useMenuDetail;
