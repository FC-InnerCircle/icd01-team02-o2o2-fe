import type { OptionDetail, OptionGroup } from "../stores/types";

export type CreateMenuOptionDetailReq = Pick<
  OptionDetail,
  "name" | "ordering" | "price"
>;

export type CreateMenuOptionGroupReq = Pick<
  OptionGroup,
  "isMultiple" | "isRequired" | "ordering" | "title"
> & {
  title: string;
  isRequired: boolean;
  isMultiple: boolean;
  details: CreateMenuOptionDetailReq[];
};

export type EditMenuOptionGroupReq = CreateMenuOptionGroupReq & {
  optionGroupId: string;
};
