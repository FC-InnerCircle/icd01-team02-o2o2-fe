/* eslint-disable react-hooks/exhaustive-deps */
import { CreateMenuRequest } from 'api/modules/menu/types';
import { MenuDetailInfo } from 'api/modules/stores/types';
import { useMemo } from 'react';

interface Props {
  getData: () => CreateMenuRequest | MenuDetailInfo;
  isOpenPreview: boolean;
}

const usePreviewModal = ({ getData, isOpenPreview }: Props) => {
  const menuPreview = useMemo(() => {
    const data = getData();
    return {
      menuPrice: data.price,
      menuImage: data.images?.[0]?.imageUrl,
      menuTitle: data.name,
      menuDescription: data.desc,
      optionSections: data.options?.map((optionGroup) => ({
        title: optionGroup.title,
        requirement: optionGroup.isRequired ? '필수' : '선택',
        type: optionGroup.isMultiple ? '다중' : '단일',
        options: optionGroup.details.map((detail) => ({
          name: detail.name,
          price: detail.price,
          checked: false, // 기본값으로 false 설정
        })),
      })),
    };
  }, [getData, isOpenPreview]);

  return menuPreview;
};

export default usePreviewModal;
