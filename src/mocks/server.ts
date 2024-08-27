// src/mocks/server.ts 생성
import { setupServer } from 'msw/node';
import { handlers } from 'mocks/handler';

export const server = setupServer(...handlers)