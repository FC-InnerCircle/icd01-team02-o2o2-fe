import { renderHook, waitFor } from '@testing-library/react';
import { createWrapper } from 'tests/test-utils';
import useCreateMenu from '.';

describe('useCreateMenu', () => {
  it('useCreateMenu의 image의 초기값은 Null이여야한다.', async () => {
    const { result } = renderHook(() => useCreateMenu(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => {
      expect(result.current.imageMetadata).toBe(null);
    });
  });
});
