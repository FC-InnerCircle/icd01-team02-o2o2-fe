/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import OwnerHome from './OwnerHome';
import AdminHome from './AdminHome';
import { DashboardProps } from './types';
import fonts from 'styles/font';

const Home = ({ role }: DashboardProps) => {
  return (
    <div css={_container}>
      <div css={_mainTxt}>Dashboard</div>
      <div>{role === 'admin' ? <AdminHome /> : <OwnerHome />}</div>
    </div>
  );
};

export default Home;

const _container = css`
  display: flex;
  flex-direction: column;
  padding: 32px;
  gap: 16px;
`;

const _mainTxt = [css``, fonts['24_800']];
