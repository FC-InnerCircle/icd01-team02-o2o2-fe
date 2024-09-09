/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Star, StarEmpty } from 'components/icons';

import { StarRatingProps } from './types';

const StarRating = ({ rating, size = 12 }: StarRatingProps) => {
  const filledStars = Math.floor(rating); // 꽉 찬 별의 개수
  const hasHalfStar = rating - filledStars >= 0.5; // 반 별이 필요한지 여부
  const emptyStars = 5 - filledStars - (hasHalfStar ? 1 : 0); // 빈 별의 개수

  return (
    <div css={starRatingStyle}>
      {[...Array(filledStars)].map((_, index) => (
        <Star key={`filled-${index}`} css={starStyle(size)} aria-label="filled star"/>
      ))}
      {hasHalfStar && (
        <div css={halfStarWrapper(size)} key="half" aria-label="half star">
          <Star css={halfStarStyle(size)} />
          <StarEmpty css={halfStarEmptyStyle(size)} />
        </div>
      )}
      {[...Array(emptyStars)].map((_, index) => (
        <StarEmpty key={`empty-${index}`} css={starStyle(size)} />
      ))}
    </div>
  );
};

export default StarRating;

// 스타일 정의
const starRatingStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const starStyle = (size: number) => css`
  width: ${size}px; // 별의 크기 설정
  height: ${size}px;
  margin: 0 2px; // 별 간격 설정
`;

const halfStarWrapper = (size: number) => css`
  position: relative; // 부모 컨테이너는 상대 위치
  width: ${size}px;
  height: ${size}px;
  margin: 0 2px;
`;

const halfStarStyle = (size: number) => css`
  position: absolute; // 절대 위치로 중첩
  width: ${size}px;
  height: ${size}px;
  clip-path: inset(0 50% 0 0); // 왼쪽 절반만 표시
`;

const halfStarEmptyStyle = (size: number) => css`
  width: ${size}px;
  height: ${size}px;
  position: absolute;
  clip-path: inset(0 0 0 50%); // 오른쪽 절반만 표시
`;