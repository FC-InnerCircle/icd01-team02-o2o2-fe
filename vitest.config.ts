import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(viteConfig, defineConfig({
  test: {
    globals: true,  // 전역적으로 describe, it, expect 등을 사용할 수 있게 함
    environment: 'jsdom',  // 브라우저 환경 시뮬레이션을 원할 때 설정
    coverage: {
      provider: 'v8',  // 커버리지를 수집하는 방식
      reporter: ['text', 'json', 'html'],  // 커버리지 리포트를 출력하는 형식
      include: ['src/**/*.{ts,tsx}'], // 커버리지를 포함할 파일 경로
      exclude: ['node_modules/', 'dist/'], // 커버리지를 제외할 파일 경로
      reportsDirectory: './coverage', // 커버리지 리포트가 저장될 디렉토리
    },
    setupFiles: ['./vitest.setup.ts'],
  },
}));
