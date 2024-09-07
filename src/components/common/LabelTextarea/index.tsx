/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { LabelTextareaProps } from "./LabelTextarea.types";
import { forwardRef } from "react";
import fonts from "styles/font";
import { Textarea } from "components/common/Textarea";
import colors from "styles/color";

const LabelTextarea = forwardRef<HTMLTextAreaElement, LabelTextareaProps>(
  ({ title, ...restProps }, ref) => {
    return (
      <div css={_container}>
        <label css={_label}>{title}</label>
        <Textarea {...restProps} ref={ref} css={_input} />
      </div>
    );
  }
);

export default LabelTextarea;

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
