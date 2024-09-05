/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button } from 'components';

import CardList from 'pages/Reviews/components/CardList';

import colors from 'styles/color';

const Reviews = () => {
  return (
    <div css={[_container]}>
      <div>
        <div css={ _header}>
          <h2>
            Reviews
          </h2>
          <Button>Latest</Button>
          </div>
      </div>

      <CardList />
    </div>
  )
}

export default Reviews;

const _container = css`
  max-width: 80%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 16px;
  margin-top: 10px;
  background-color: ${colors.white};
  overflow-y: auto;
`;

const _header = css`
  display: flex;
  justify-content: space-between;
`;