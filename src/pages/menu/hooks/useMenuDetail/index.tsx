import type { CreateMenuRequest } from "api/modules/menu/types";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import type { ImageMetadata } from "@pic-pik/core";
import { useResizeImage } from "@pic-pik/react";
import type { MenuDetailInfo } from "api/modules/stores/types";

const useMenuDetail = ({ menu }: { menu: MenuDetailInfo }) => {
  const [originalImageMetadata, setOriginalImageMetadata] =
    useState<ImageMetadata | null>(null);

  const { metadata, file } = useResizeImage({
    metadata: originalImageMetadata,
    option: {
      mode: "aspectRatio",
      ...(originalImageMetadata &&
      originalImageMetadata.width > originalImageMetadata.height
        ? { height: 350 }
        : { width: 350 }),
    },
  });

  const { register } = useForm<CreateMenuRequest>({ defaultValues: menu });

  useEffect(() => {
    //TODO image파일  form에 업데이트해주기
    console.log(file);
    //setValue("images",[file])
  }, [file]);

  return {
    register,
    originalImage: menu.images[0].imageUrl,
    imageMetadata: metadata,
    addImageFile: setOriginalImageMetadata,
  };
};

export default useMenuDetail;
