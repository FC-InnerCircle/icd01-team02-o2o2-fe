import type {
  CreateMenuOptionGroupReq,
  CreateMenuRequest,
} from "api/modules/menu/types";
import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import type { ImageMetadata } from "@pic-pik/core";
import { useResizeImage } from "@pic-pik/react";

const useCreateMenu = () => {
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

  const { control, register } = useForm<CreateMenuRequest>();
  const { fields, append, update, remove } = useFieldArray({
    control,
    name: "options",
  });

  const deleteOption = (index: number) => remove(index);
  const addOption = (optionGroup: CreateMenuOptionGroupReq) => {
    append(optionGroup);
  };

  const editOption = (index: number, optionGroup: CreateMenuOptionGroupReq) => {
    update(index, optionGroup);
  };

  useEffect(() => {
    //TODO image파일  form에 업데이트해주기
    console.log(file);
    //setValue("images",[file])
  }, [file]);

  return {
    register,
    options: fields,
    deleteOption,
    addOption,
    editOption,
    imageMetadata: metadata,
    addImageFile: setOriginalImageMetadata,
  };
};

export default useCreateMenu;
