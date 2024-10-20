import { LoginResponse } from 'api/modules/auth/types';
import { atom } from 'jotai';
import { saveTokenToLocalStorage } from 'utils/authStorage';

export type UserRole = 'admin' | 'owner' | 'guest'; //추후 API맞춰서 변경 예정

// 토큰 타입 정의
type TokenState = {
  accessToken: string | null;
  refreshToken: string | null;
};

export const roleAtom = atom<UserRole>('owner'); // 기본 역할은 'guest'지만 로그인페이지 개발전 Owner를 기본적으로

// 토큰 상태를 관리하는 read-only atom
export const tokenAtom = atom<TokenState>({
  accessToken: window.localStorage.getItem('accessToken'),
  refreshToken: window.localStorage.getItem('refreshToken'),
});

export const setTokenAtom = atom<null, [LoginResponse], void>(
  null, // 읽기 용도로 사용되지 않음
  (_, set, { accessToken, refreshToken }: LoginResponse) => {
    // 로컬 스토리지에 저장
    saveTokenToLocalStorage(accessToken, refreshToken);
    // tokenAtom 상태 업데이트
    set(tokenAtom, { accessToken, refreshToken });
  },
);
