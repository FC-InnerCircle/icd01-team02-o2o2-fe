import { Routes, Route, Outlet } from 'react-router-dom';

//pages들
import Home from 'pages/dashboard';
import MenuList from 'pages/menuList';
import MenuDetail from 'pages/menu/detail';
import Profile from 'pages/profile';
import Order from 'pages/order';
import OrderDetail from 'pages/orderDetail';
import SignIn from 'pages/Signin';
import Reviews from 'pages/Reviews';
import Store from 'pages/store';
import StoreDetail from 'pages/storeDetail';
import User from 'pages/user';
import UserDetail from 'pages/userDetail';
import Component from 'pages/Component';
import MenuRegistration from 'pages/menu/registration';

import { ROUTES } from 'common/constants/routes';
import Layout from 'common/components/layout';

// Layout을 사용하는 라우트 그룹
const LayoutRoutes = () => {
  return (
    <Layout>
      <Outlet /> {/* 자식 라우트를 표시하기 위한 Outlet */}
    </Layout>
  );
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* Layout이 없는 SignIn 페이지 */}
      <Route path={ROUTES.SIGN_IN} element={<SignIn />} />

      {/* Layout이 있는 페이지 - useAuth hooks으로 내부에 접근권한제어 적용  */}
      <Route element={<LayoutRoutes />}>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.USER} element={<User />} />
        <Route path={ROUTES.USER_DETAIL} element={<UserDetail />} />
        <Route path={ROUTES.STORE} element={<Store />} />
        <Route path={ROUTES.STORE_DETAIL} element={<StoreDetail />} />
        <Route path={ROUTES.MENU} element={<MenuList />} />
        <Route path={ROUTES.MENU_REGISTRATION} element={<MenuRegistration />} />
        <Route path={ROUTES.MENU_DETAIL} element={<MenuDetail />} />
        <Route path={ROUTES.ORDER} element={<Order />} />
        <Route path={ROUTES.ORDER_DETAIL} element={<OrderDetail />} />
        <Route path={ROUTES.REVIEW} element={<Reviews />} />
        <Route path={ROUTES.PROFILE} element={<Profile />} />

        <Route path="/components" element={<Component />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
