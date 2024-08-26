import * as S from "./Button.styled";
import type { ButtonProps } from "./Button.types";

export default function Button({
  textColor = "white",
  backgroundColor = "primary",
  fontSize = "16_600",
  rounded = "small",
  children,
  ...restProps
}: ButtonProps) {
  return (
    <S.Button
      textColor={textColor}
      backgroundColor={backgroundColor}
      fontSize={fontSize}
      rounded={rounded}
      {...restProps}
    >
      {children}
    </S.Button>
  );
}
