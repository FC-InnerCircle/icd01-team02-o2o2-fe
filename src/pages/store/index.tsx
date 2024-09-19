/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Button } from 'common/components';

import { useGetStoresQuery } from 'queries/modules/stores/useStoresQuery';
import get from 'lodash/get';

import ImageUpload from './components/ImageUpload';
import Category from './components/Category';
import OpeningHoursAndFees from './components/EditableItem';
import fonts from 'styles/font';
import colors from 'styles/color';

const Store = ({ ...rest }) => {
  const { data } = useGetStoresQuery(1);

  const storeData = get(data, 'response');

  const {
    name,
    contactNumber,
    zipCode,
    addressDetail,
    address,
    categories,
    openTime,
    closeTime,
    minimumOrderAmount,
  } = storeData;

  return (
    <div css={[_container]} {...rest}>
      <h3>{name}</h3>

      <div css={_contentsContainer}>
        <section>
          <span css={[_titleText]}>기본 정보</span>
          <div css={_bcontainer}>
            <ImageUpload />
            <Category
              contactNumber={contactNumber}
              zipCode={zipCode}
              addressDetail={addressDetail}
              address={address}
              categories={categories}
            />
          </div>
        </section>

        <section>
          <span css={[_titleText]}>영업 및 금액 정보</span>
          <OpeningHoursAndFees
            open={openTime}
            close={closeTime}
            minCost={minimumOrderAmount}
            delivery={'배달료 백엔드 데이터 존재하지 않음'}
          />
        </section>
      </div>

      <div css={_btnStyleContainer}>
        <Button onClick={() => console.log('저장')}>저장</Button>
      </div>
    </div>
  );
};

export default Store;

const _container = css`
  display: flex;
  flex-direction: column;
`;

const _titleText = [
  css`
    color: ${colors.primary};
  `,
  fonts['24_800'],
];

const _bcontainer = css`
  display: flex;
  width: 100%;
  gap: 10%;
`;

const _btnStyleContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const _contentsContainer = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
