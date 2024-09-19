import type { Menu } from "api/modules/stores/types";
import { HTMLAttributes } from "react";

export interface MenuCardProps extends HTMLAttributes<HTMLDivElement> {
  menu: Menu;
}
