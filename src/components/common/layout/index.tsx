/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Icons from "components/icons";
import { HTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import colors from "styles/color";
import Menus from "components/common/menus";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div css={_container}>
      <aside css={_sideMenu}>
        <h1 css={_logoContainer}>
          <Link to="/" aria-label="Home">
            LOGO
          </Link>
        </h1>
        <nav aria-label="Sidebar navigation" css={_menuContainer}>
          <Menus />
        </nav>
      </aside>
      <div css={_wrapper}>
        <header css={_header}>
          <form css={_searchContainer}>
            <input id="search" type="search" placeholder="Search here" />
            <button>
              <Icons.Search width={24} />
            </button>
          </form>
          <div css={_userContainer}>
            <p>
              Hello, <b>Samuel!</b>
            </p>
            <div css={_profileImageBackground}>
              <div css={_profileImage}>{/* profile 사진 자리 */}</div>
            </div>
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
  justify-content: space-between;
`;

const _searchContainer = css`
  background-color: #fdfdfd;
  height: 56px;
  width: 567px;
  border-radius: 8px;
  border: 1px solid ${colors.lightGray};
  padding: 14px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  input {
    border: none;
    flex: 1;
  }
`;

const _userContainer = css`
  background-color: #2f4cdd;
  border-radius: 8px;
  height: 56px;
  position: relative;
  padding: 0 60px 0 20px;
  display: flex;
  align-items: center;
  color: #fff;
`;

const _profileImageBackground = css`
  position: absolute;
  right: -28px;
  top: 50%;
  transform: translateY(-50%);
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: #fff;
`;

const _profileImage = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: #c1c1c1;
`;
const _logoContainer = css`
  height: 120px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const _menuContainer = css`
  width: 100%;
`;
