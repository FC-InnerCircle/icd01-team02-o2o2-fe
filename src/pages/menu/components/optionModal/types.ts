import { OptionGroup } from "api/modules/stores/types";
import { HTMLAttributes } from "react";

export interface OptionModalProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  initial?: OptionGroup;
}
