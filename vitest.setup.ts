// vitest.setup.ts 추가
import { beforeAll, afterEach, afterAll } from 'vitest'
import { server } from './src/mocks/core/server';

import '@testing-library/jest-dom';

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())