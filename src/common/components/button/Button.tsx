import styled from "@emotion/styled";
import { css } from "@emotion/react";

import colors from "styles/color";
import fonts from "styles/font";

import { ButtonProps, ButtonRounded } from "./Button.types";

export default function Button({
  textColor = "white",
  backgroundColor = "primary",
  fontSize = "16_600",
  rounded = "small",
  children,
  ...restProps
}: ButtonProps) {
  return (
    <_Button
      textColor={textColor}
      backgroundColor={backgroundColor}
      fontSize={fontSize}
      rounded={rounded}
      {...restProps}
    >
      {children}
    </_Button>
  );
}

const _Button = styled.button<ButtonProps>`
  padding: 12px 24px;

  ${({ textColor = "white" }) => css`
    color: ${colors[textColor]};
  `};

  ${({ backgroundColor = "primary" }) => css`
    background-color: ${colors[backgroundColor]};
  `};

  ${({ fontSize = "16_600" }) => css`
    ${fonts[fontSize]}
  `};

  ${({ rounded = "small" }) => css`
    border-radius: ${BUTTON_ROUNDED_MAP[rounded]};
  `};

  &:disabled {
    color: ${colors.white};
    background-color: ${colors.textMuted};
  }
`;

const BUTTON_ROUNDED_MAP: Record<ButtonRounded, string> = {
  small: "12px",
  medium: "24px",
  large: "38px",
};
