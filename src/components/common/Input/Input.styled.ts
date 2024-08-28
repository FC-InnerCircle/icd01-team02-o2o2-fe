import styled from "@emotion/styled";
import { css } from "@emotion/react";

import colors from "styles/color";

import type { InputProps } from "./Input.types";

export const Container = styled.div<InputProps>`
  position: relative;
  height: 50px;
  display: flex;
  align-items: center;
  width: fit-content;
  border-radius: 10px;
  background-color: ${colors.white};
  border: 1px solid #e5e5e5;

  ${({ isError }) =>
    isError &&
    css`
      border: 1px solid ${colors.danger};
    `};

  &::placeholder {
    color: ${colors.secondary};
  }
`;

export const Input = styled.input`
  height: 100%;
  padding: 10px 16px;
  flex: 1;
`;
