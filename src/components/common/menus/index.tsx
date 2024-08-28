/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Icons from "components/icons";
import { ROUTES } from "constants/common";
import { Link, useLocation } from "react-router-dom";
import colors from "styles/color";
import fonts from "styles/font";

const MENUS = {
  dashboard: {
    title: "Dashboard",
    link: ROUTES.HOME,
    icon: (
      <Icons.Dashboard width={"100%"} height={"100%"} fill="currentColor" />
    ),
  },
  order: {
    title: "Order",
    link: ROUTES.ORDER,
    icon: <Icons.Order width={"100%"} height={"100%"} fill="currentColor" />,
  },
  menu: {
    title: "Menu",
    link: ROUTES.MENU,
    icon: <Icons.Menu width={"100%"} height={"100%"} fill="currentColor" />,
  },
  review: {
    title: "Reviews",
    link: ROUTES.REVIEW,
    icon: <Icons.Review width={"100%"} height={"100%"} fill="currentColor" />,
  },
  // analytics: { title: "Analytics", link: "/", icon: <Icons.Dashboard /> },
} as const;

const Menus = () => {
  const location = useLocation();

  return (
    <ul style={{ width: "100%" }}>
      {Object.entries(MENUS).map(([key, obj]) => {
        const isSelected =
          key === "dashboard"
            ? location.pathname === "/"
            : location.pathname.match(obj.link);
        return (
          <li css={_menuContainer} key={`menu_${key}`}>
            <Link
              css={_menu}
              to={obj.link}
              style={{
                color: isSelected ? colors.primary : colors.gray,
                backgroundColor: isSelected ? colors.icy : colors.white,
                fontWeight: isSelected ? "600" : "500",
              }}
            >
              <span css={_bar} style={{ opacity: isSelected ? 1 : 0 }} />
              <span css={_iconWrap}>{obj.icon}</span>
              <p>{obj.title}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Menus;

const _menuContainer = css`
  width: 100%;
  height: 67px;
`;

const _menu = [
  css`
    min-width: 220px;
    width: 100%;
    height: 100%;
    padding-left: 50px;
    display: flex;
    align-items: center;
    gap: 15px;
    position: relative;
    transition:
      background-color 0.3s,
      color 0.3s;
    :hover {
      text-decoration: none;
    }
  `,
  fonts["18_500"],
];

const _bar = css`
  width: 8px;
  height: 100%;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: ${colors.primary};
  position: absolute;
  left: 0px;
  transition: opacity 0.3s;
`;

const _iconWrap = css`
  width: 24px;
  height: 24px;
`;
