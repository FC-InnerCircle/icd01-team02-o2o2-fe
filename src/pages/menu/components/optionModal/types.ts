import type {
  CreateMenuOptionGroupReq,
  EditMenuOptionGroupReq,
} from "api/modules/menu/types";
import { HTMLAttributes } from "react";

export interface OptionModalProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  initial?: EditMenuOptionGroupReq | CreateMenuOptionGroupReq;
}
