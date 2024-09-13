/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ImageLoader, useResizeImage } from "@pic-pik/react";
import { useEffect, useState } from "react";
import colors from "styles/color";
import type { ImageMetadata } from "@pic-pik/core";
import fonts from "styles/font";
import {
  LabelInput,
  LabelTextarea,
  MenuOption,
  OptionModal,
} from "pages/menu/components";
import { useFieldArray, useForm } from "react-hook-form";
import type {
  CreateMenuOptionGroupReq,
  CreateMenuRequest,
} from "api/modules/menu/types";

//TODO status 뭐로 추가하지?
const MenuRegistration = () => {
  const [isOptionModalOpen, setIsOptionModalOpen] = useState<boolean>(false);
  const [selectedOptionToEdit, setSelectedOptionToEdit] = useState<{
    data: CreateMenuOptionGroupReq;
    index: number;
  } | null>(null);
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

  const isSelectedOptionModalOpen = !!selectedOptionToEdit;
  const handleEditOption = (
    optionGroup: CreateMenuOptionGroupReq,
    index: number
  ) => setSelectedOptionToEdit({ data: optionGroup, index });
  const handleDeleteOption = (index: number) => remove(index);

  const handleCloseEditModal = () => setSelectedOptionToEdit(null);

  const handleOptionModalOpen = () => setIsOptionModalOpen((prev) => !prev);

  useEffect(() => {
    //TODO image파일  form에 업데이트해주기
    //  if(file) setValue('images',[file])
  }, [file]);

  return (
    <>
      <div css={[_container]}>
        <div css={_titleWrap}>
          <h2>Menu</h2>
          <button css={_subButton}>Preview</button>
        </div>
        <section css={_menuContainer}>
          <h3 css={_subtitle}>Main info</h3>
          <div css={_wrapper}>
            <div css={_imageWrapper}>
              <ImageLoader onMetadataLoaded={setOriginalImageMetadata}>
                {originalImageMetadata && metadata ? (
                  <div css={_imageLoader}>
                    <img src={metadata.src} width={"100%"} />
                  </div>
                ) : (
                  <div css={_imageLoader}>Please upload a picture</div>
                )}
              </ImageLoader>
            </div>
            <form css={_form}>
              <LabelInput title="Name" css={_input} {...register("name")} />
              <LabelTextarea
                title="Description"
                css={_textarea}
                {...register("desc")}
              />
              <LabelInput title="Price" css={_input} {...register("price")} />
            </form>
          </div>
        </section>
        <section css={_optionContainer}>
          <div css={_titleWrap}>
            <h3 css={_subtitle}>Options</h3>
            <button css={_addButton} onClick={handleOptionModalOpen}>
              Add
            </button>
          </div>
          {fields.map((field, index) => (
            <MenuOption
              key={`menu_option_${field.title}_${index}`}
              option={field}
              onEdit={() => handleEditOption(field, index)}
              onDelete={() => handleDeleteOption(index)}
            />
          ))}
        </section>
        <button css={_submit}>SAVE</button>
      </div>
      {isOptionModalOpen && (
        <OptionModal
          isOpen={isOptionModalOpen}
          onClose={handleOptionModalOpen}
          onSave={(optionGroup) => {
            append(optionGroup);
          }}
        />
      )}
      {isSelectedOptionModalOpen && (
        <OptionModal
          isOpen={isSelectedOptionModalOpen}
          onClose={handleCloseEditModal}
          initial={selectedOptionToEdit.data}
          onSave={(optionGroup) => {
            update(selectedOptionToEdit.index, optionGroup);
          }}
        />
      )}
    </>
  );
};

export default MenuRegistration;

const _container = css`
  padding: 44px;
  width: 880px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const _menuContainer = css`
  width: 100%;
`;

const _titleWrap = css`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const _wrapper = css`
  width: 100%;
  display: flex;
  gap: 50px;
`;

const _imageWrapper = css`
  position: relative;
  input {
    overflow: hidden !important;
    position: absolute;
  }
`;

const _imageLoader = css`
  width: 350px;
  height: 350px;
  background-color: ${colors.lightGray};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;
  border-radius: 10px;
`;

const _form = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const _input = css`
  width: 100%;
`;

const _textarea = css`
  width: 100%;
  height: 100px;
`;

const _subtitle = [
  css`
    color: ${colors.primary};
    margin-bottom: 8px;
  `,
  fonts["24_600"],
];

const _subButton = [
  css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 24px;
    border-radius: 24px;
    background-color: ${colors.accent};
    color: ${colors.white};
    min-width: 112px;
    transition: opacity 0.3s;
    :hover {
      opacity: 0.7;
    }
  `,
  fonts["16_800"],
];

const _addButton = [
  _subButton,
  css`
    background-color: ${colors.primary};
  `,
];

const _submit = [
  css`
    background-color: ${colors.primary};
    color: ${colors.white};
    padding: 12px 36px;
    border-radius: 36px;
    margin: 24px auto;
    width: 300px;
    transition: opacity 0.3s;
    :hover {
      opacity: 0.7;
    }
  `,
  fonts["28_600"],
];

const _optionContainer = css`
  width: 350px;
  margin-top: 50px;
`;
