export type GetOrdersParams = {
  page?: number;
  size?: number;
  startDate?: string;
  endDate?: string;
  // TODO: Enum으로 수정
  status?: string;
};

export type GetOrdersResponse = {
  status: string;
  orders: Order[];
  totalCount: number;
};

type Order = {
  orderId: number;
  status: string;
  storeName: string;
  ordererName: string;
  menuTotalPrice: number;
};
