import type { ComponentPropsWithoutRef, ReactNode } from "react";

export type InputProps = {
  prefix?: ReactNode;
  suffix?: ReactNode;
  isError?: boolean;
} & ComponentPropsWithoutRef<"input">;
