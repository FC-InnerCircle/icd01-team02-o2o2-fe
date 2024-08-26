import type { ComponentPropsWithoutRef } from "react";
import colors from "styles/color";
import fonts from "styles/font";

export type ButtonRounded = "small" | "medium" | "large";

export type ButtonProps = {
  textColor?: keyof typeof colors;
  backgroundColor?: keyof typeof colors;
  fontSize?: keyof typeof fonts;
  rounded?: ButtonRounded;
} & ComponentPropsWithoutRef<"button">;
