/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Routes, Link } from "react-router-dom";
import { ROUTES } from "constants/common";

import Home from "pages/Home";
import Menu from "pages/Menu";
import MenuDetail from "pages/MenuDetail";
import Profile from "pages/Profile";
import Order from "pages/Order";
import OrderDetail from "pages/OrderDetail";
import SignIn from "pages/SignIn";
import Reviews from "pages/Reviews";
import AuthRoute from "components/common/AuthRoute";
import Store from "pages/Store";
import StoreDetail from "pages/StoreDetail";
import User from "pages/User";
import UserDetail from "pages/UserDetail";

//아래 Route외 html Layout 컴포넌트로 변경 예정
function App() {
  return (
    <div css={_container}>
      <aside css={_sideMenu}>
        <h1>
          <Link to="/" aria-label="Home">
            LOGO 자리
          </Link>
        </h1>
        <nav aria-label="Sidebar navigation">
          <ul>
            <li>
              <Link to={ROUTES.HOME}>Dashboard</Link>
            </li>
            <li>
              <Link to={ROUTES.ORDER}>Order</Link>
            </li>
            <li>
              <Link to={ROUTES.MENU}>Menu</Link>
            </li>
            <li>
              <Link to={ROUTES.REVIEW}>Review</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <div css={_wrapper}>
        <header css={_header}>
          <div>
            <form role="search">
              <label htmlFor="search">Search</label>
              <input id="search" type="search" placeholder="Search..." />
            </form>
          </div>
        </header>
        <main>
          <Routes>
            <AuthRoute
              requiredRoles={["owner", "admin"]}
              path={ROUTES.HOME}
              element={<Home role="owner" />}
            />
            <AuthRoute
              requiredRoles={["admin"]}
              path={ROUTES.USER}
              element={<User />}
            />
            <AuthRoute
              requiredRoles={["admin"]}
              path={ROUTES.USER_DETAIL}
              element={<UserDetail />}
            />
            <AuthRoute
              requiredRoles={["admin"]}
              path={ROUTES.STORE}
              element={<Store />}
            />
            <AuthRoute
              requiredRoles={["owner", "admin"]}
              path={ROUTES.STORE_DETAIL}
              element={<StoreDetail />}
            />
            <AuthRoute
              requiredRoles={["owner", "admin"]}
              path={ROUTES.MENU}
              element={<Menu />}
            />
            <AuthRoute
              requiredRoles={["owner", "admin"]}
              path={ROUTES.MENU_DETAIL}
              element={<MenuDetail />}
            />
            <AuthRoute
              requiredRoles={["owner", "admin"]}
              path={ROUTES.ORDER}
              element={<Order />}
            />
            <AuthRoute
              requiredRoles={["owner", "admin"]}
              path={ROUTES.ORDER_DETAIL}
              element={<OrderDetail />}
            />
            <AuthRoute
              requiredRoles={["owner", "admin"]}
              path={ROUTES.REVIEW}
              element={<Reviews />}
            />
            <AuthRoute
              requiredRoles={["owner", "admin"]}
              path={ROUTES.PROFILE}
              element={<Profile />}
            />
            <AuthRoute
              requiredRoles={["guest"]}
              path={ROUTES.SIGN_IN}
              redirectPath="/"
              element={<SignIn />}
            />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;

const _container = css`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const _sideMenu = css`
  width: 345px;
  background-color: #e8e8e8;
`;

const _wrapper = css`
  flex: 1;
`;

const _header = css`
  height: 120px;
  background-color: aliceblue;
`;
