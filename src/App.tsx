import AppRoutes from 'routes/AppRoutes';
import ErrorBoundary from 'common/components/errorBoundary';
import ErrorOrLoaderMsg from 'common/components/loader';
import { Suspense } from 'react';

//아래 Route외 html Layout 컴포넌트로 변경 예정
function App() {
  // 레이아웃 내부에 에러바운더리, 로더 추가
  return (
    <ErrorBoundary fallbackUI={<ErrorOrLoaderMsg type="error" />}>
      <Suspense fallback={<ErrorOrLoaderMsg type="loading" />}>
        <AppRoutes />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
