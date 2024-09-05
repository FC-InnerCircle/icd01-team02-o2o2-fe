import { render, renderHook, screen, waitFor } from '@testing-library/react';
import CardList from 'pages/Reviews/components/CardList';
import { createWrapper } from 'tests/test-utils';

import { useGetStoresReview } from 'queries/modules/stores/useStoresQuery';
import { reviewsMockData } from 'mocks/__fixtures__';

describe('CardList Components', () => {
  it('CardList 컴포넌트가 렌더되어야한다.', async () => {
    render(<CardList />, { wrapper: createWrapper() });

    expect(screen.getByText(/내 음식점 리뷰 평균 평점/i)).toBeInTheDocument();
  })

  it('useGetStoresReview API를 가져온 후 Card가 렌더링 되어야한다.', async () => {
    render(<CardList />, { wrapper: createWrapper() });

    const { result } = renderHook(() => useGetStoresReview(1), { wrapper: createWrapper() });

    // useGetStoresReview 훅을 사용하여 API 호출 확인
    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    })

    // 데이터가 로드되고, Card 컴포넌트들이 렌더링되는지 확인
    await waitFor(() => {
      reviewsMockData.list.response.reviews.forEach((review) => {
        // 각 리뷰 내용이 화면에 존재하는지 확인
        expect(screen.getByText(review.member.nickname)).toBeInTheDocument();
        expect(screen.getByText(review.content)).toBeInTheDocument();
      });
    });
  })
})
