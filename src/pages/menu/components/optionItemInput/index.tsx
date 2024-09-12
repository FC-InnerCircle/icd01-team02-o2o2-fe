/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import LabelInput from "pages/menu/components/labelInput";
import type { OptionItemInputProps } from "./types";

const OptionItemInput = ({
  nameRegister,
  priceRegister,
}: OptionItemInputProps) => {
  return (
    <div css={_container}>
      <LabelInput title="Name" placeholder="ex) 과테말라" {...nameRegister} />
      <LabelInput
        title="Price"
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
  gap: 4px;
`;
