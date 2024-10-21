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

## 실행 방법

### 환경변수

```
VITE_USE_MSW="true" // MSW 사용하는 경우
VITE_API_BASE_URL="/api/v1"
VITE_KAKAO_MAP_KEY=ab8c859d7d2f6ccd51454ffee6559ff4
```

### 실행

```bash
npm install
npm run dev
```

### 버그바운티를 위한 현재까지 진행된 사항에 관련한 문서

- [버그바운티:구현 안내사항](https://github.com/FC-InnerCircle/icd01-team02-o2o2-fe/blob/main/docs/Bug.md)

## 구조

```md
project-root/
├── public/ # 정적 파일 (HTML, 이미지 등)
│ ├── index.html
│ └── favicon.ico
├── src/ # 소스 코드
│ ├── api/ # API 호출 관련 함수
│ │ └── instance/ # API instance
│ ├── atoms/ # Jotai atoms
│ │ └── sample.ts
│ ├── common/ # 공통으로 사용하는 컴포넌트, 훅, 모델, 상수
│ │ ├── components/ # 공통 컴포넌트
│ │ ├── hooks/ # 공통 훅
│ │ ├── models/ # 공통 모델
│ │ └── constants/ # 공통 상수
│ ├── pages/ # 페이지 컴포넌트
│ │ ├── dashboard/ # 홈 페이지 관련 파일들
│ │ │ ├── components/ # 페이지 전용 컴포넌트
│ │ │ ├── hooks/ # 페이지 전용 훅
│ │ │ ├── models/ # 페이지 전용 모델
│ │ │ ├── constants/ # 페이지 전용 상수
│ │ │ └── index.tsx # 홈 페이지 컴포넌트
│ │ └── menu/ # 다른 페이지 예시 (menu 페이지)
│ │ ├── components/
│ │ ├── hooks/
│ │ ├── models/
│ │ ├── constants/
│ │ └── Index.tsx # menu 페이지 컴포넌트
│ ├── queries/ # React Query 관련 hook들
│ │ └── keys/ # query key
│ ├── routes/ # route 관련 모음
│ │ ├── appRoutes/ # app의 기본 routes
│ │ └── WithAuth/ # 사용자 Role에 따른 페이지 접근 관리를 위한 고차원 컴포넌트
│ ├── styles/ # 스타일 모음
│ │ └── global.css/ # 전역 스타일 리셋
│ ├── App.tsx # 메인 앱 컴포넌트
│ └── main.tsx # 엔트리 포인트
├── .gitignore # Git 무시 규칙
├── package.json # 종속성 및 스크립트 정보
└── README.md # 프로젝트 설명 파일
```

## BaseURL

- src

```js
import { counterAtom } from 'atoms/sample';
```

## Rules

- 컴포넌트 폴더 명은 camelCase로 작성해주세요
- 컴포넌트의 내부 `type`은 파일을 분리해주세요(Ex, `~.types.ts`)
- utils의 파일명은 해당 유틸의 함수이름으로 만들어주세요
- 공통으로 사용하는 `components`, `hooks`, `constants`, `models`의 경우 `src/common`에 그외에는 각 페이지에 만들어주세요(위 구조 참조)
- `useState` 사용의 경우 `[상태, set+상태] = useState()` 형식으로 작성해주세요\
- `props`는 컴포넌트명+Props로 작성합니다(ex, UserProps)
