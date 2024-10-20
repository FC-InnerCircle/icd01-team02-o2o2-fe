/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import type { LabelInputProps } from "./LabelInput.types";
import { forwardRef } from "react";
import fonts from "styles/font";
import colors from "styles/color";
import { Input } from "common/components";

const LabelInput = forwardRef<HTMLInputElement, LabelInputProps>(
  ({ title, ...restProps }, ref) => {
    return (
      <div css={_container}>
        <label css={_label}>{title}</label>
        <Input {...restProps} ref={ref} css={_input} />
      </div>
    );
  }
);

export default LabelInput;

const _container = css`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const _label = [
  css`
    color: ${colors.textThird};
  `,
  fonts["16_600"],
];

const _input = css`
  width: 100%;
`;
