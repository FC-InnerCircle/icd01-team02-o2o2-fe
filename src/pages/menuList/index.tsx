/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import MenuCard from './components/menuCard';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from 'common/components';
import { MenuListProps } from './types';
import useAuth from 'common/hooks/useAuth';
import { useGetStoresMenuQuery } from 'queries/modules/stores/useStoresQuery';

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
  const { AuthGuard } = useAuth(['admin', 'owner']);
  const storeId = 1;

  // useGetStoresMenuQuery 훅을 사용해 데이터 받아오기
  const { data, isLoading, error } = useGetStoresMenuQuery(storeId);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading menus</div>;
  if (!data) return <></>;
  return (
    <AuthGuard>
      <MenuList data={data?.response} />
    </AuthGuard>
  );
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
  /* max-width: 1024px; */
`;

const _viewMoreButton = css`
  margin-top: 24px;
  padding: 24px;
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
`;
