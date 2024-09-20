/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import CardList from './components/CardList';
import StoreInfo from './components/StoreInfo';
import { useGetStoresQueryTest } from 'queries/modules/stores/useStoresQuery';
import { CARD_LIST_ARR } from './constants';
import OrderTable from './components/OrderTable';

const OwnerHome = () => {
  const {
    data: { response },
  } = useGetStoresQueryTest(1);

  const storeData = response;

  const { name, contactNumber, openTime, closeTime } = storeData;

  return (
    <div css={_ownerContainer}>
      <CardList cardListArr={CARD_LIST_ARR} />
      <StoreInfo
        name={name}
        openTime={openTime}
        closeTime={closeTime}
        contactNumber={contactNumber}
      />
      <OrderTable />
    </div>
  );
};

export default OwnerHome;

const _ownerContainer = css`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
