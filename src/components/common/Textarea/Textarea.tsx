/** @jsxImportSource @emotion/react */
import { forwardRef } from "react";

import * as S from "./Textarea.styled";
import type { TextareaProps } from "./Textarea.types";

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ isError = false, ...restProps }, ref) => {
    return <S.Textarea ref={ref} isError={isError} {...restProps} />;
  }
);

export default Textarea;
