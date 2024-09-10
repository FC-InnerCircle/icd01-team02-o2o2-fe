import { HTMLAttributes } from "react";

export interface OnOffButtonProps extends HTMLAttributes<HTMLButtonElement> {
  isOn?: boolean;
  onToggle: () => void;
}
