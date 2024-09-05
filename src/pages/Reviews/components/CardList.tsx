/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useGetStoresReview } from 'queries/modules/stores/useStoresQuery';
import Card from './Card';

import { get, isUndefined } from 'lodash';
import StarRating from 'pages/Reviews/StarRating';

const CardList = () => {
  const { data } = useGetStoresReview(1);

  const reviews = get(data, ['response', 'reviews']) ;
  const grade = get(data, ['response', 'grade']);

  return (
    <div css={_container}>
      <div css={_header}>
        <div css={_score}>내 음식점 리뷰 평균 평점</div>
        <StarRating rating={grade ?? 0} size={18} />
      </div>
      {isUndefined(reviews) ?
        <div css={__emptyReviewContainer}>
          <div css={_emptyReview}>리뷰가 없습니다.</div>
        </div> :
        <>
          {reviews?.map((review) => (
            <Card
              key={review.id}
              grade={review.grade}
              member={review.member}
              menus={review.menus}
              content={review.content}
              images={review.images}
              reviewDate={review.reviewDate}
            />
          ))}
        </>
      }
    </div>
  )
}

export default CardList;

const _container = css`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const _header = css`
  display: flex;
  gap: 10px;
`;

const _score = css`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;

  @media (max-width: 480px) {
    font-size: 1.0rem;
  }
`

const _emptyReview = css`
  font-size: 1.0rem;
  color: #888;
  margin-top: 20px;
`

const __emptyReviewContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  font-size: 1.0rem;
  color: #888;
  margin-top: 20px;
`