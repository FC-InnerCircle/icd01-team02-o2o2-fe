import { atom } from "jotai";

export type UserRole = "admin" | "owner" | "guest"; //추후 API맞춰서 변경 예정

export const roleAtom = atom<UserRole>("admin"); // 기본 역할은 'guest'지만 로그인페이지 개발전 Owner를 기본적으로
