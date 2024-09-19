import type { CreateMenuOptionGroupReq } from "api/modules/menu/types";
import { type HTMLAttributes } from "react";

export interface MenuOptionProps extends HTMLAttributes<HTMLDivElement> {
  option: CreateMenuOptionGroupReq;
  onEdit: () => void;
  onDelete: () => void;
}
