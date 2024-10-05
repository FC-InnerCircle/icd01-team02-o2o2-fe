import { render, screen } from '@testing-library/react'
import Reviews from '.';
import { createWrapper } from 'tests/test-utils';

describe('Review 페이지', () => {
  it('Review 페이지가 렌더링 되어야한다.', () => {
    // Review 페이지가 렌더링 되는지 확인
    render(<Reviews />, { wrapper: createWrapper() });

    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
  })
})