/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { ReviewImage } from 'api/modules/stores/types';
import { P1, P2, P3, P4 } from 'components/icons';
import colors from 'styles/color';
import { hexToRgba } from 'utils';
import StarRating from 'pages/Reviews/components/StarRating';

type CardProps = {
  content: string;
  images: ReviewImage[];
  reviewDate: string;
  member: {
    profileImage: string;
    nickname: string;
    id: string;
  }
  menus: {
    name: string;
  }
  grade: number;
}

const Card = ({ content, member, menus, reviewDate, grade }: CardProps) => {
  const { profileImage, nickname } = member;
  const { name } = menus;

  const profileImageSrc = (profileSrc: string) => {
    switch (profileSrc) {
      case 'p1':
        return <P1 width={54} height={54} />
      case 'p2':
        return <P2 width={54} height={54} />
      case 'p3':
        return <P3 width={54} height={54} />
      case 'p4':
        return <P4 width={54} height={54} />
    }
  }

  return (
    <div css={_cardContainer}>
      <div css={_reviewContainer}>
        <div css={_profileContainer}>
          <div>{profileImageSrc(profileImage)}</div>
          <div css={_contentsContainer}>
            <div css={_menuContainer}>
              <div css={_nickname}>{nickname}</div>
              <div css={_menuTag}>{name}</div>
            </div>
            <div css={_reviewDate}>{reviewDate}</div>
            <div css={_reviewContent}>
              <div>{content}</div>
            </div>
          </div>
        </div>

        <div css={_gradeContainer}>
          <div css={_grade}>{grade.toFixed(1)}</div>
          <StarRating rating={grade} />
        </div>
      </div>
    </div>
  )
}

export default Card;

const _cardContainer = css`
  border: 1px solid ${colors.icy};
  padding: 16px;
  margin: 16px 0;
  border-radius: 8px;
  background-color: ${colors.white};
  max-width: 100%;  // 하단 가로 스크롤 방지
  overflow: hidden;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {  // 테블릿 대응
    padding: 12px;
  }

  @media (max-width: 480px) {  // 모바일 대응
    padding: 8px;
  }
`;

const _menuContainer = css`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const _reviewContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;  // 반응형을 위해 요소들을 줄 바꿈
  gap: 16px;  // 간격을 설정하여 반응형 레이아웃에서의 간격 유지

  @media (max-width: 768px) {
    flex-direction: column;  // 테블릿에서 세로 정렬
    align-items: flex-start;
  }
`;

const _profileContainer = css`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  width: 85%;

  @media (max-width: 480px) {  // 모바일 대응
    gap: 12px;
  }
`;

const _contentsContainer = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 100%;

  @media (max-width: 480px) {
    gap: 6px;
  }
`;

const _nickname = css`
  font-size: 1rem;
  font-weight: bold;
  color: #333;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const _menuTag = css`
  background-color: ${hexToRgba(colors.brightRed, 0.1)};
  color: ${colors.brightRed};
  font-size: 0.875rem;
  padding: 4px 8px;
  border-radius: 12px;
  display: inline-block;
  margin-top: 4px;
  width: fit-content;

  @media (max-width: 480px) {
    font-size: 0.75rem;
    padding: 3px 6px;
  }
`;

const _reviewDate = css`
  font-size: 0.875rem;
  color: #888;

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

const _reviewContent = css`
  font-size: 0.875rem;
  color: #555;
  margin-top: 8px;

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

const _gradeContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 10%;

  @media (max-width: 768px) {
    align-self: flex-end;  // 테블릿에서 오른쪽 정렬
  }

  @media (max-width: 480px) {
    align-self: flex-start;  // 모바일에서는 세로로 정렬
    margin-top: 12px;
  }
`;

const _grade = css`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 4px;

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;
