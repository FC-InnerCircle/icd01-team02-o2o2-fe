/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const CardList = ({ cardListArr }: { cardListArr: React.ReactNode[] }) => {
  return (
    <div css={_container}>
      {cardListArr.map((card, idx) => (
        <div key={idx}>{card}</div>
      ))}
    </div>
  );
};

export default CardList;

const _container = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
`;
