/** @jsxImportSource @emotion/react */
import { forwardRef } from "react";
import { css } from "@emotion/react";

import * as S from "./Input.styled";
import type { InputProps } from "./Input.types";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, isError, prefix, suffix, ...restProps }, ref) => {
    return (
      <S.Container className={className} isError={isError}>
        {prefix && <span css={_prefix}>{prefix}</span>}
        <S.Input ref={ref} prefix={prefix} {...restProps} />
        {suffix && <span css={_suffix}>{suffix}</span>}
      </S.Container>
    );
  }
);

const _prefix = css`
  padding-left: 12px;
`;

const _suffix = css`
  padding-right: 12px;
`;

export default Input;
