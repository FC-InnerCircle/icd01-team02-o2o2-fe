import type { OptionDetail, OptionGroup } from "../stores/types";

export type OptionDetailReq = Pick<OptionDetail, "name" | "ordering" | "price">;

export type OptionGroupReq = Pick<
  OptionGroup,
  "isMultiple" | "isRequired" | "ordering" | "title"
> & {
  title: string;
  isRequired: boolean;
  isMultiple: boolean;
  details: OptionDetailReq[];
};
