import { Routes, Route } from "react-router-dom";
import { ROUTES } from "constants/common";

import Home from "pages/Home";
import Menu from "pages/Menu";
import MenuDetail from "pages/MenuDetail";
import Profile from "pages/Profile";
import Order from "pages/Order";
import OrderDetail from "pages/OrderDetail";
import SignIn from "pages/Signin";
import Reviews from "pages/Reviews";
import Store from "pages/Store";
import StoreDetail from "pages/StoreDetail";
import User from "pages/User";
import UserDetail from "pages/UserDetail";
import withAuth from "routes/WithAuth";
import Component from "pages/Component";

// 보호된 컴포넌트 생성
const ProtectedHome = withAuth(Home, { requiredRoles: ["owner", "admin"] });
const ProtectedUser = withAuth(User, { requiredRoles: ["admin"] });
const ProtectedUserDetail = withAuth(UserDetail, { requiredRoles: ["admin"] });
const ProtectedStore = withAuth(Store, { requiredRoles: ["admin"] });
const ProtectedStoreDetail = withAuth(StoreDetail, {
  requiredRoles: ["owner", "admin"],
});
const ProtectedMenu = withAuth(Menu, { requiredRoles: ["owner", "admin"] });
const ProtectedMenuDetail = withAuth(MenuDetail, {
  requiredRoles: ["owner", "admin"],
});
const ProtectedOrder = withAuth(Order, { requiredRoles: ["owner", "admin"] });
const ProtectedOrderDetail = withAuth(OrderDetail, {
  requiredRoles: ["owner", "admin"],
});
const ProtectedReviews = withAuth(Reviews, {
  requiredRoles: ["owner", "admin"],
});
const ProtectedProfile = withAuth(Profile, {
  requiredRoles: ["owner", "admin"],
});
const ProtectedSignIn = withAuth(SignIn, {
  requiredRoles: ["guest"],
  redirectPath: "/",
});

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<ProtectedHome role="owner" />} />
      <Route path={ROUTES.USER} element={<ProtectedUser />} />
      <Route path={ROUTES.USER_DETAIL} element={<ProtectedUserDetail />} />
      <Route path={ROUTES.STORE} element={<ProtectedStore />} />
      <Route path={ROUTES.STORE_DETAIL} element={<ProtectedStoreDetail />} />
      <Route path={ROUTES.MENU} element={<ProtectedMenu />} />
      <Route path={ROUTES.MENU_DETAIL} element={<ProtectedMenuDetail />} />
      <Route path={ROUTES.ORDER} element={<ProtectedOrder />} />
      <Route path={ROUTES.ORDER_DETAIL} element={<ProtectedOrderDetail />} />
      <Route path={ROUTES.REVIEW} element={<ProtectedReviews />} />
      <Route path={ROUTES.PROFILE} element={<ProtectedProfile />} />
      <Route path={ROUTES.SIGN_IN} element={<ProtectedSignIn />} />

      {/* NOTE: Storybook에 emotion 스타일이 적용되도록 아직 세팅을 못해서 임시로 컴포넌트를 확인할 수 있는 페이지를 만듭니다. @Seung-wan */}
      <Route path="/components" element={<Component />} />
    </Routes>
  );
};

export default AppRoutes;
