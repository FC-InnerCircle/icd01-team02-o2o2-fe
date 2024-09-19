export type DashboardProps = {
  role: 'admin' | 'owner'; // 역할 타입 정의, enum으로 빼고 API에 맞출 예정
};

export type StoreInfoProps = {
  name: string;
  openTime: string;
  closeTime: string;
  contactNumber: string;
};

export type OptionMenuProps = {
  successTxt?: string;
  cancelTxt?: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSelected: React.Dispatch<React.SetStateAction<boolean>>;
};
