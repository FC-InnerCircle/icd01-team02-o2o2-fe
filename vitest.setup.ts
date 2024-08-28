// vitest.setup.ts 추가
import { beforeAll, afterEach, afterAll } from 'vitest'
import { server } from './src/mocks/server';

import '@testing-library/jest-dom';

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())