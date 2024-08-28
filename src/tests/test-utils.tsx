import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { type QueryClientConfig } from '@tanstack/react-query';

// wrapper를 함수로 만들고, 외부에서 QueryClient 옵션을 주입할 수 있게 설정
export const createWrapper = (options?: QueryClientConfig) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false, // 기본 옵션
        ...options?.defaultOptions?.queries, // 외부에서 받은 옵션 병합
      },
      ...options?.defaultOptions,
    },
    ...options,
  });

  // wrapper 컴포넌트를 반환하며, 자식(children)을 받을 수 있게 설정
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );

  return Wrapper;
};

