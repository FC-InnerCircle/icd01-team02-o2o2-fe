/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "pages/Home";
import Menu from "pages/Menu";
import MenuDetail from "pages/MenuDetail";
import Profile from "pages/Profile";
import Order from "pages/Order";
import OrderDetail from "pages/OrderDetail";
import SignIn from "pages/SignIn";

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
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="order">Order</Link>
            </li>
            <li>
              <Link to="menu">Menu</Link>
            </li>
            <li>
              <Link to="review">Review</Link>
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
            <Route path="/" element={<Home role="store-owner" />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/menu/:id" element={<MenuDetail />} />
            <Route path="/order" element={<Order />} />
            <Route path="/order/:id" element={<OrderDetail />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/sign-in" element={<SignIn />} />
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
