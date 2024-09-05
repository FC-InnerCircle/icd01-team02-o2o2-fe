import { render, screen } from '@testing-library/react';
import Card from './Card';

import { reviewsMockData } from 'mocks/__fixtures__/reviews';

describe('Card Components', () => {
  const cardData = reviewsMockData.list.response.reviews[0];

  /**
   * TODO: 백엔드 API 확정시 Image는 확인
   * Card 컴포넌트가 렌더 되는지 확인하는 테스트를 작성합니다.
   */
  describe('Card 컴포넌트가 렌더되어야한다.', () => {
    it('Card contents props가 렌더링 되어야한다.', () => {
      render(
        <Card {...cardData} />
      );

      expect(screen.getByText(cardData.content)).toBeInTheDocument();
    })

    it('Card reviewDate props가 렌더링 되어야한다.', () => {
      render(
        <Card {...cardData} />
      );

      expect(screen.getByText(cardData.reviewDate)).toBeInTheDocument();
    })

    it('Card reviewDate props가 렌더링 되어야한다.', () => {
      render(
        <Card {...cardData} />
      );

      expect(screen.getByText(cardData.reviewDate)).toBeInTheDocument();
    })

    it('Card menu props가 렌더링 되어야한다.', () => {
      render(
        <Card {...cardData} />
      );

      expect(screen.getByText(cardData.menus.name)).toBeInTheDocument();
    })

    it('Card members props가 렌더링 되어야한다.', () => {
      render(
        <Card {...cardData} />
      );

      expect(screen.getByText(cardData.member.nickname)).toBeInTheDocument();
    })
  });
})