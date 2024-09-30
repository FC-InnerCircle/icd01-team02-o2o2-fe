import { defineConfig } from 'cypress';

export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
    // 명시적으로 Cypress가 컴포넌트 테스트 파일을 찾을 수 있는 경로를 설정
    specPattern: [
      'cypress/components/**/*.cy.{js,jsx,ts,tsx}', // cypress/components 경로 내 테스트 파일
      'src/common/components/**/*.cy.{js,jsx,ts,tsx}', // src/common/components 경로 내 테스트 파일
    ],

    // Cypress가 자동으로 명령어를 불러오도록 설정
    supportFile: 'cypress/support/commands.ts',
  },
});
