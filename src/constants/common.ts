export const ROUTES = {
  HOME: "/",
  STORE: "/store", // 스토어 리스트, 관리자만 접근
  STORE_DETAIL: "/store/:storeId",
  USER: "/user", // 유저 리스트, 관리자만 접근
  USER_DETAIL: "user/:userId", //관리자만 접근
  ORDER: "/:storeId/order",
  ORDER_DETAIL: "/:storeId/order/:orderId",
  MENU: "/:storeId/menu",
  MENU_REGISTRATION: "/:storeId/menu/registration",
  MENU_DETAIL: "/:storeId/menu/:menuId",
  REVIEW: "/:storeId/review",
  PROFILE: "/profile",
  SIGN_IN: "/sign-in",
} as const;
