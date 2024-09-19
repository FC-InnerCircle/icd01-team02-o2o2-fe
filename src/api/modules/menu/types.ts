import type { Image, OptionDetail, OptionGroup } from "../stores/types";

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
  optionGroupId: number;
};

export type CreateMenuRequest = {
  status: string;
  name: string;
  desc: string;
  price: number;
  images: Image[];
  options: CreateMenuOptionGroupReq[];
};

export type CreateMenuResponse = {
  response: {
    menuId: number;
    status: string;
    name: string;
    desc: string;
    price: number;
    images: Image[];
    options: OptionGroup[];
  };
};
