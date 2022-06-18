import type { Config } from '@jest/types';
import { unitTest } from '../unit/jest-unit.config';

const CI = process.env['CI'] === 'true';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testTimeout: 1000 * 20, // 20 seconds
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: '../../',
  testMatch: ['<rootDir>/test/e2e/**/*.(test).{js,jsx,ts,tsx}'],
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: [`src/**/*.[^${unitTest.coverage.allowedFileExtesions.join('|')}].{ts,js}`],
  coveragePathIgnorePatterns: ['node_modules', '.module.ts' /* '<rootDir>/src' */],
  setupFilesAfterEnv: ['<rootDir>/test/e2e/test-e2e.setup.ts'],
  collectCoverage: false,
  coverageDirectory: 'coverage.e2e',
  coverageReporters: CI ? ['html', 'json'] : ['html', ['text', { skipFull: false }], 'json'],
  verbose: true,
  clearMocks: true,
  restoreMocks: true,
};

export default config;
