import type { Menu } from "api/modules/stores/types";

export interface MenuListProps {
  data: { menus: Menu[]; page: number; totalLength: number; size: number };
}
