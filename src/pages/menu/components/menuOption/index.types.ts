import { HTMLAttributes } from "react";

export interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  options: { name: string; price: number }[];
}
