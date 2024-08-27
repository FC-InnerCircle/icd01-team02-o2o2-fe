/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { HTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import colors from "styles/color";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
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
            {/*   <li>
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
            </li> */}
          </ul>
        </nav>
      </aside>
      <div css={_wrapper}>
        <header css={_header}>
          <div css={_searchContainer}>
            <input id="search" type="search" placeholder="Search here" />
          </div>
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;

const _container = css`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const _sideMenu = css`
  width: 345px;
  background-color: rgba(255, 255, 255, 1);
  filter: drop-shadow(18px 4px 30px #00000002);
`;

const _wrapper = css`
  flex: 1;
  background-color: ${colors.mildWhite};
`;

const _header = css`
  height: 120px;
  background-color: rgba(255, 255, 255, 1);
  padding: 0 55px 0 45px;
  display: flex;
  align-items: center;
`;

const _searchContainer = css`
  background-color: #fdfdfd;
  height: 56px;
  width: 774px;
  border-radius: 8px;
  border: 1px solid ${colors.lightGray};
  padding: 14px 20px;
  input {
    border: none;
  }
`;
