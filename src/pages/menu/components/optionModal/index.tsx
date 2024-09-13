/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect } from "react";
import colors from "styles/color";
import { useFieldArray, useForm } from "react-hook-form";
import type {
  CreateMenuOptionGroupReq,
  EditMenuOptionGroupReq,
} from "api/modules/menu/types";
import { Button } from "common/components";
import { Plus } from "common/components/icons";
import {
  NEW_OPTION_GROUP_TEMPLATE,
  NEW_OPTION_ITEM_TEMPLATE,
} from "pages/menu/constants";
import { OptionModalProps } from "./types";
import { OnOffButton, OptionItemInput, LabelInput } from "..";

const OptionModal = ({
  initial,
  isOpen,
  onClose,
  ...rest
}: OptionModalProps) => {
  const { control, register, getValues, setValue, watch } = useForm<
    CreateMenuOptionGroupReq | EditMenuOptionGroupReq
  >({
    defaultValues: initial ?? NEW_OPTION_GROUP_TEMPLATE,
  });
  const { fields, append } = useFieldArray({
    control,
    name: "details",
  });

  const isMultiple = getValues("isMultiple");
  const isRequired = getValues("isRequired");
  const handleClickIsMultiple = () => {
    setValue("isMultiple", !isMultiple);
  };
  const handleClickIsRequired = () => {
    setValue("isRequired", !isRequired);
  };

  const handleClickSave = () => {
    //TODO: data 추가 로직
    onClose();
  };

  const handleAddNewOptionItem = () => {
    append({ ...NEW_OPTION_ITEM_TEMPLATE, ordering: fields.length });
  };

  useEffect(() => {
    watch(["isMultiple", "isRequired"]);
  }, [watch]);

  useEffect(() => {
    //background scroll 방지하는 코드
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isOpen]);

  return (
    <div css={[_background]} {...rest} onClick={onClose}>
      <div css={_container} onClick={(e) => e.stopPropagation()}>
        <h2>Option</h2>
        <div css={_wrapper}>
          <LabelInput
            title="Option title"
            placeholder="원두 선택"
            {...register("title")}
          />
          <div css={_toggleButtons}>
            <p>필수 선택 여부</p>
            <OnOffButton isOn={isMultiple} onToggle={handleClickIsMultiple} />
            <p>다중 선택 여부</p>
            <OnOffButton isOn={isRequired} onToggle={handleClickIsRequired} />
          </div>
          <div css={_inputWrapper}>
            {fields.map((field, index) => (
              <OptionItemInput
                key={field.id}
                nameRegister={register(`details.${index}.name`)}
                priceRegister={register(`details.${index}.price`)}
              />
            ))}
          </div>
          <button onClick={handleAddNewOptionItem} css={_addButton}>
            <Plus width={12} height={12} fill="currentColor" />
          </button>
        </div>
        <Button css={_saveButton} onClick={handleClickSave}>
          저장
        </Button>
      </div>
    </div>
  );
};

export default OptionModal;

const _background = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const _container = css`
  width: 420px;
  background-color: ${colors.white};
  padding: 40px;
  border-radius: 12px;
`;

const _wrapper = css`
  width: 100%;
  margin: 24px 0;
  max-height: 500px;
  overflow-y: scroll;
`;

const _toggleButtons = css`
  width: 100%;
  display: grid;
  grid-template-columns: auto 46px;
  grid-template-rows: 50% 50%;
  align-items: center;
  gap: 4px;
  justify-content: space-between;
  margin: 24px 0 36px;
`;

const _inputWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const _addButton = css`
  margin: 12px auto 24px;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.gray};
  border-radius: 50%;
  :hover {
    opacity: 0.7;
  }
`;
const _saveButton = css`
  width: 100%;
`;
