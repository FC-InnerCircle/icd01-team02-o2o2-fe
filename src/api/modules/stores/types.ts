export type CreateStoreRequest = {
  name: string;
  contactNumber: string;
  zipCode: string;
  address: string;
  addressDetail: string;
  latitude: number;
  longitude: number;
  openTime: string;
  closeTime: string;
  categories: string[];
  minimumOrderAmount: number;
};

export type CreateStoreResponse = {
  id: number;
  name: string;
  contactNumber: string;
  zipCode: string;
  address: string;
  addressDetail: string;
  latitude: number;
  longitude: number;
  openTime: string;
  closeTime: string;
  categories: string[];
  minimumOrderAmount: number;
  createdAt: string;
};

export type GetStoreResponse = CreateStoreResponse & {
  deliveryArea: string;
  updatedAt: string;
};

export type StoresParams = {
  page?: number;
  size?: number;
};

export type Menu = {
  id: number;
  status: string;
  name: string;
  desc: string;
  price: number;
  images: Image[];
};

export type Image = {
  seq: number;
  imageUrl: string;
};

export type GetStoresMenuParams = StoresParams & {
  status?: "SOLDOUT" | "DISABLED" | "ENABLED";
};

export type GetStoresMenuResponse = {
  response: {
    menus: Menu[];
    page: number;
    totalLength: number;
    size: number;
  };
  statusCode: number;
  msg: string;
};

export type OptionGroup = {
  optionGroupId: number;
  ordering: number;
  isRequired: boolean;
  isMultiple: boolean;
  title: string;
  details: OptionDetail[];
};

export type OptionDetail = {
  optionId: number;
  ordering: number;
  name: string;
  price: number;
};

export type MenuDetailInfo = {
  menuId: number;
  status: string;
  name: string;
  desc: string;
  price: number;
  images: Image[];
  options: OptionGroup[];
};

export type GetMenuDetailResponse = {
  response: MenuDetailInfo;
};

export type GetOrderRequest = {
  startDate: string;
  endDate: string;
  status: "ORDER" | "CANCEL";
  page: number;
  size: number;
};

export type Store = {
  storeId: number;
  name: string;
};

export type Orderer = {
  userId: string;
  name: string;
  phone: string;
  address: string;
  addressDetail: string;
  zipCode: string;
};

export type OrderMenu = {
  totalPrice: string;
};

export type Order = {
  status: string;
  store: Store;
  orderer: Orderer;
  menu: OrderMenu;
};

export type GetOrderResponse = {
  response: {
    status: string;
    orders: Order[];
  };
};

export type GetOrderDetailResponse = {
  response: {
    orderId: number;
    status: string;
    price: number;
    orderTime: string;
    store: {
      storeId: number;
      name: string;
    };
    orderer: {
      userId: string;
      name: string;
      phone: string;
      address: string;
      addressDetail: string;
      zipCode: string;
    };
    menus: {
      name: string;
      price: number;
      quantity: number;
      options: {
        seq: number;
        name: string;
        value: string;
        price: number;
      }[];
    }[];
  };
};

export type UpdateOrderRequest = {
  orderId: number;
  reason: string;
};

export type Review = {
  reviewId: number;
  content: string;
  grade: number;
  images: Image[];
  reviewDate: string;
};

export type ReviewImage = {
  seq: number;
  imageUrl: string;
};

export type GetReviewsParams = StoresParams & {
  sort?: "GRADE" | "ID";
};

export type GetReviewsResponse = {
  response: {
    grade: number; // 평균 평점
    reviews: Review[];
  };
};
