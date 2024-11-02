import type {
  CreateMenuOptionGroupReq,
  EditMenuOptionGroupReq,
} from 'api/modules/menu/types';
import { OptionGroup } from 'api/modules/stores/types';
import { useState } from 'react';

/* API 연결하기 */
const useMenuOption = ({
  menuId,
  originOptions,
}: {
  menuId: number;
  originOptions: OptionGroup[];
}) => {
  const [options, setOptions] = useState<OptionGroup[]>(originOptions);
  const updateOption = (optionGroup: EditMenuOptionGroupReq) => {
    const req = { ...optionGroup };
    console.log(req);
    const newOptions = options.reduce((prev, cur) => {
      if (cur.optionGroupId === req.optionGroupId) {
        const newDetails = req.details.map((detail, idx) => ({
          ...detail,
          optionId: idx,
        }));
        return [...prev, { ...req, details: newDetails }];
      } else return prev;
    }, [] as OptionGroup[]);
    setOptions(newOptions);
  };
  const deleteOption = (optionGroupId: number) => {
    const newOptions = options.filter(
      (option) => option.optionGroupId !== optionGroupId,
    );
    setOptions(newOptions);
  };
  const addOption = (optionGroup: CreateMenuOptionGroupReq) => {
    const req = { menuId, ...optionGroup };
    const maxGroupId = Math.max(...options.map((v) => v.optionGroupId));
    setOptions([
      ...options,
      {
        ...req,
        optionGroupId: maxGroupId + 1,
        details: req.details.map((v, idx) => ({ ...v, optionId: idx })),
      },
    ]);
  };
  return { updateOption, deleteOption, addOption, options };
};

export default useMenuOption;
