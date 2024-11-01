import type { CreateMenuRequest } from 'api/modules/menu/types';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import type { ImageMetadata } from '@pic-pik/core';
import { useResizeImage } from '@pic-pik/react';
import type { MenuDetailInfo } from 'api/modules/stores/types';

const useMenuDetail = ({ menu }: { menu: MenuDetailInfo }) => {
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

  const { register, setValue, getValues } = useForm<CreateMenuRequest>({
    defaultValues: menu,
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
    originalImage: menu.images[0].imageUrl,
    imageMetadata: metadata,
    addImageFile: setOriginalImageMetadata,
    getValues,
  };
};

export default useMenuDetail;
