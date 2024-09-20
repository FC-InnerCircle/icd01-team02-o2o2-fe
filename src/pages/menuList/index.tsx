/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { GetStoresMenuResponse } from "api/modules/stores/types";
import MenuCard from "./components/menuCard";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "common/components";
import { MenuListProps } from "./types";

const MenuList = ({ data }: MenuListProps) => {
  const { storeId } = useParams<{ storeId: string }>();
  const navigate = useNavigate();

  const { menus, page, totalLength, size } = data;
  const handleClickAddMenu = () => {
    navigate(`/${storeId}/menu/registration`);
  };
  const wholePage = Math.ceil(totalLength / size);
  const hasNextPage = wholePage > page;
  return (
    <div css={[_container]}>
      <div css={_titleWrap}>
        <h2>Menu</h2>
        <Button
          backgroundColor="accent"
          rounded="large"
          onClick={handleClickAddMenu}
        >
          메뉴 추가
        </Button>
      </div>
      <section css={_menuList}>
        {menus.map((menu, idx) => (
          <MenuCard menu={menu} key={`menu_card_${idx}_${menu.name}`} />
        ))}
        {hasNextPage ? <button css={_viewMoreButton}>View more</button> : <></>}
      </section>
    </div>
  );
};

const MenuListWrapper = () => {
  const MENU_LIST_RES: GetStoresMenuResponse = {
    response: {
      menus: [
        {
          id: 1,
          status: "available",
          name: "카라멜 마키아토",
          desc: "에스프레소, 스팀 밀크, 카라멜 시럽이 완벽하게 조화된 음료.",
          price: 4500,
          images: [{ imageUrl: "/src/assets/caramel.webp", seq: 0 }],
        },
        {
          id: 2,
          status: "available",
          name: "바닐라 라떼",
          desc: "부드러운 라떼에 바닐라의 달콤함을 더한 음료.",
          price: 4000,
          images: [{ imageUrl: "/src/assets/vanila.webp", seq: 0 }],
        },
        {
          id: 3,
          status: "available",
          name: "에스프레소",
          desc: "진하고 풍부한 맛의 순수 에스프레소 샷.",
          price: 3000,
          images: [{ imageUrl: "/src/assets/espresso.webp", seq: 0 }],
        },
        {
          id: 4,
          status: "available",
          name: "카푸치노",
          desc: "에스프레소, 스팀 밀크, 폼이 균등하게 조화된 클래식 이탈리아 커피.",
          price: 4000,
          images: [{ imageUrl: "/src/assets/cappuccino.webp", seq: 0 }],
        },
        {
          id: 5,
          status: "available",
          name: "플랫 화이트",
          desc: "에스프레소와 우유의 비율이 높은 부드럽고 벨벳같은 커피.",
          price: 4200,
          images: [{ imageUrl: "/src/assets/latte.webp", seq: 0 }],
        },
        {
          id: 6,
          status: "available",
          name: "모카",
          desc: "에스프레소, 스팀 밀크, 초콜릿 시럽의 맛있는 조합.",
          price: 4800,
          images: [{ imageUrl: "/src/assets/mocha.webp", seq: 0 }],
        },
        {
          id: 7,
          status: "available",
          name: "아메리카노",
          desc: "에스프레소에 뜨거운 물을 더해 부드러운 맛을 내는 커피.",
          price: 3500,
          images: [{ imageUrl: "/src/assets/hotamericano.webp", seq: 0 }],
        },
        {
          id: 8,
          status: "available",
          name: "차이 라떼",
          desc: "블랙 티와 향신료, 스팀 밀크로 만들어진 달콤하고 매콤한 티 라떼.",
          price: 4000,
          images: [{ imageUrl: "/src/assets/chailatte.webp", seq: 0 }],
        },
        {
          id: 9,
          status: "available",
          name: "말차 라떼",
          desc: "말차 가루와 우유로 만든 크리미하고 생동감 넘치는 녹차 라떼.",
          price: 4500,
          images: [{ imageUrl: "/src/assets/matcha.webp", seq: 0 }],
        },
        {
          id: 10,
          status: "available",
          name: "아이스 커피",
          desc: "차갑게 추출한 커피를 얼음 위에 제공.",
          price: 3000,
          images: [{ imageUrl: "/src/assets/iceamericano.webp", seq: 0 }],
        },
        {
          id: 11,
          status: "available",
          name: "핫 초콜릿",
          desc: "생크림을 얹은 풍부하고 크리미한 핫 초콜릿.",
          price: 4000,
          images: [{ imageUrl: "/src/assets/hotchoco.webp", seq: 0 }],
        },
      ],
      totalLength: 11,
      page: 1,
      size: 11,
    },
    statusCode: 200,
    msg: "",
  };
  return <MenuList data={MENU_LIST_RES.response} />;
};
export default MenuListWrapper;

const _container = css`
  padding: 44px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const _titleWrap = css`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: end;
  h2 {
    margin: 0;
  }
`;

const _menuList = css`
  display: flex;
  width: 100%;
  gap: 40px;
  flex-wrap: wrap;
  margin-top: 24px;
  position: relative;
  padding-bottom: 100px;
`;

const _viewMoreButton = css`
  margin-top: 24px;
  padding: 24px;
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
`;
