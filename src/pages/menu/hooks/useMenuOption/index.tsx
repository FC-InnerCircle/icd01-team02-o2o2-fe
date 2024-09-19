import type {
  CreateMenuOptionGroupReq,
  EditMenuOptionGroupReq,
} from "api/modules/menu/types";

/* API 연결하기 */
const useMenuOption = ({ menuId }: { menuId: number }) => {
  const updateOption = (optionGroup: EditMenuOptionGroupReq) => {
    const req = { ...optionGroup };
    console.log(req);
  };
  const deleteOption = (optionGroupId: number) => {
    console.log(optionGroupId);
  };
  const addOption = (optionGroup: CreateMenuOptionGroupReq) => {
    const req = { menuId, ...optionGroup };
    console.log(req);
  };
  return { updateOption, deleteOption, addOption };
};

export default useMenuOption;
