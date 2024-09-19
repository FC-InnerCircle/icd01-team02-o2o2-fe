import type {
  CreateMenuOptionDetailReq,
  CreateMenuOptionGroupReq,
} from "api/modules/menu/types";

export const NEW_OPTION_ITEM_TEMPLATE: CreateMenuOptionDetailReq = {
  name: "",
  ordering: 0,
  price: 0,
};
export const NEW_OPTION_GROUP_TEMPLATE: CreateMenuOptionGroupReq = {
  title: "",
  isMultiple: false,
  isRequired: false,
  details: [NEW_OPTION_ITEM_TEMPLATE],
  ordering: 0,
};
