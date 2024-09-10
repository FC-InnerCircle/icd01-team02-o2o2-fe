/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { HTMLAttributes } from "react";
import LabelInput from "pages/menu/components/labelInput";
import { UseFormRegisterReturn } from "react-hook-form";

interface OptionItemInputProps extends HTMLAttributes<HTMLDivElement> {
  nameRegister: UseFormRegisterReturn;
  priceRegister: UseFormRegisterReturn;
}

const OptionItemInput = ({
  nameRegister,
  priceRegister,
}: OptionItemInputProps) => {
  return (
    <div css={_container}>
      <LabelInput
        title="Option Name"
        placeholder="ex) 과테말라"
        {...nameRegister}
      />
      <LabelInput
        title="Option Price"
        placeholder="ex) 1000"
        prefix={"₩"}
        {...priceRegister}
      />
    </div>
  );
};

export default OptionItemInput;

const _container = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
`;
