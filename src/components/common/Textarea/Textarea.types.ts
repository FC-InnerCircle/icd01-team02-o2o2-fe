import type { ComponentPropsWithoutRef } from "react";

export type TextareaProps = {
  isError?: boolean;
} & ComponentPropsWithoutRef<"textarea">;
