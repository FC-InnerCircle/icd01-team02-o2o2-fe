type Option = {
  name: string;
  price: number;
  checked?: boolean;
};

type OptionSectionData = {
  title: string;
  requirement: string;
  type: string;
  options: Option[];
};

export type MenuPreviewModalProps = {
  onClose: () => void;
  menuImage: string;
  menuTitle: string;
  menuDescription: string;
  optionSections: OptionSectionData[];
  menuPrice: number;
};
