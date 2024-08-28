/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Icons from "components/icons";
import { ROUTES } from "constants/common";
import { Link, useLocation } from "react-router-dom";

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
        const isSelected = location.pathname.match(obj.link);
        return (
          <li css={_menuContainer} key={`menu_${key}`}>
            <Link
              css={_menu}
              to={obj.link}
              style={{
                color: isSelected ? "#2f4cdd" : "#969BA0",
                backgroundColor: isSelected ? "#fafbff" : "#fff",
              }}
            >
              <span css={_bar} style={{ opacity: isSelected ? 1 : 0 }} />
              <span style={{ width: 24, height: 24 }}>{obj.icon}</span>
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

const _menu = css`
  min-width: 220px;
  width: 100%;
  height: 100%;
  padding-left: 50px;
  display: flex;
  align-items: center;
  gap: 15px;
  position: relative;

  :hover {
    text-decoration: none;
  }
`;

const _bar = css`
  width: 8px;
  height: 100%;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: #2f4cdd;
  position: absolute;
  left: 0px;
`;
