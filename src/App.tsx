/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { ROUTES } from "constants/common";
import AppRoutes from "routes/AppRoutes";
import { useState } from 'react';
import SignIn from 'pages/Signin/SignIn';

//아래 Route외 html Layout 컴포넌트로 변경 예정
function App() {
  const [isAuthenticated] = useState(false); // 로그인 상태 관리

  return (
    <>
      {!isAuthenticated ? (
        <SignIn />
      ) : (
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
                <AppRoutes />
              </main>
            </div>
        </div>
      )}
    </>
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
