export type CategoryProps = {
  contactNumber: string;
  zipCode: string;
  addressDetail: string;
  address: string;
  categories: string[];
};

export type OpeningHoursAndFeesProps = {
  open: string;
  close: string;
  minCost: number;
  delivery: string;
};

// EditableItem Props 타입 정의
export type EditableItemProps = {
  width?: string;
  label: string;
  value: string | number;
  type: 'text' | 'number' | 'time';
  onChange: (value: string) => void;
};

export type MultiSelectProps = {
  options: { [key: string]: string[] }; // 카테고리별 옵션
};
