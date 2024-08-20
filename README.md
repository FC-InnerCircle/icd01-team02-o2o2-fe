# icd01-team02-o2o2-fe

## 기술 스택

- 언어: Typescript
- 프레임워크 : React
- 번들러: Vite
- 서버 상태 관리 : React-Query
- 전역 상태 관리 : Jotai
- CSS 라이브러리:
- 디자인 시스템 : StoryBook
- 테스트 : StoryBook, Cypress(미정)
- node : node v20.16.0 이상

## 실행

```bash
npm install
npm run dev
```

## 구조

```md
project-root/
├── public/ # 정적 파일 (HTML, 이미지 등)
│ ├── index.html
│ └── favicon.ico
├── src/ # 소스 코드
│ ├── api/ # API 호출 관련 함수
│ │ └── instance # API instance
│ ├── atoms/ # Jotai atoms
│ │ └── sample.ts
│ ├── components/ # 리액트 컴포넌트
│ ├── models/ # API response를 모양을 변경하기 위한 model
│ │ └── sample.ts
│ ├── pages/ # 페이지 컴포넌트
│ │ └── Home.tsx
│ ├── queries/ # React Query 관련 hook들
│ │ └── keys/ # query key
│ ├── styles/ # Style들 모음
│ │ └── global.css/ # 전역 스타일 리셋
│ ├── App.tsx # 메인 앱 컴포넌트
│ └── main.tsx # 엔트리 포인트
├── .gitignore # Git 무시 규칙
├── package.json # 종속성 및 스크립트 정보
└── README.md # 프로젝트 설명 파일
```
