import styled from "@emotion/styled";

import colors from "styles/color";
import { TextareaProps } from "./Textarea.types";
import { css } from "@emotion/react";

export const Textarea = styled.textarea<TextareaProps>`
  position: relative;
  width: 318px;
  height: 86px;
  padding: 16px;
  border-radius: 10px;
  border: 1px solid #e5e5e5;
  resize: none;
  background-color: ${colors.white};

  ${({ isError }) =>
    isError &&
    css`
      border: 1px solid ${colors.danger};
    `}

  &::placeholder {
    color: ${colors.placeholder};
  }
`;
