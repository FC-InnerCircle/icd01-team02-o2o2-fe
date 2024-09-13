import type { CreateMenuOptionGroupReq } from "api/modules/menu/types";
import { HTMLAttributes } from "react";

export interface OptionModalProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  onSave: (optionGroup: CreateMenuOptionGroupReq) => void;
  initial?: CreateMenuOptionGroupReq;
}
