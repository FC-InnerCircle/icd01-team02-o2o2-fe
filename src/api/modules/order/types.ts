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

export type GetOrderParams = {
  storeId: number;
  orderId: number;
};

type Order = {
  orderId: number;
  status: string;
  storeName: string;
  ordererName: string;
  menuTotalPrice: number;
};

export type GetOrderResponse = {
  orderId: number;
  status: string;
  price: number;
  orderTime: string;
  store: Store;
  orderer: Orderer;
  menus: Menu[];
};

interface Menu {
  name: string;
  price: number;
  quantity: number;
  options: Option[];
}

interface Option {
  seq: number;
  name: string;
  value: string;
  price: number;
}

interface Orderer {
  userId: string;
  name: string;
  phone: string;
  address: string;
  addressDetail: string;
  zipCode: string;
}

interface Store {
  storeId: number;
  name: string;
}
