// vitest.setup.ts 추가
import { beforeAll, afterEach, afterAll } from 'vitest'
import { server } from './src/mocks/server';

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())