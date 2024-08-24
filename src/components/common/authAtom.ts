import { atom } from "jotai";

export type UserRole = "admin" | "owner" | "guest"; //추후 API맞춰서 변경 예정

export const roleAtom = atom<UserRole>("guest"); // 기본 역할은 'guest'
