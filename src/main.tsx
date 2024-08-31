import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import App from "App";
import "./styles/global.css";

/**
 * QueryClient 생성 및 모듈로 관리
 * default 설정
 * - queries.retry: 실패 시 한 번만 재시도
 * - queries.staleTime: Stale time을 0으로 설정하여 항상 새로운 데이터를 요청
 * - queries.gcTime: 0: 쿼리 데이터 설정이 변경되면 즉시 GC
 */

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1, // 실패 시 한 번만 재시도
      gcTime: 0, //
      refetchOnWindowFocus: false,
    },
  },
  queryCache: new QueryCache({
    onError: (error) => {
      /**
       * 추후 에러 처리에 대해 논의 후 수정
       * 에러 발생시 에러 메세지 토스트 모듈 구현
       */
      console.error(error);
    },
    onSuccess: (data) => {
      console.log(data);
    },
  }),
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
