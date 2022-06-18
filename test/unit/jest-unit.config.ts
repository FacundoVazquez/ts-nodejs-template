import type { Config } from '@jest/types';

// Here we should add all allowed extensions to be included on test coverage
export const unitTest = {
  coverage: {
    allowedFileExtesions: ['util', 'helper'],
  },
};

const CI = process.env['CI'] === 'true';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testTimeout: 1000 * 20, // 20 seconds
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: '../../',
  testMatch: ['<rootDir>/test/unit/**/*.(test).{js,jsx,ts,tsx}'],
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: [`src/**/*.(${unitTest.coverage.allowedFileExtesions.join('|')}).{ts,js}`],
  coveragePathIgnorePatterns: ['node_modules', '.module.ts' /* '<rootDir>/src' */],
  setupFilesAfterEnv: ['<rootDir>/test/unit/test-unit.setup.ts'],
  collectCoverage: false,
  coverageDirectory: 'coverage.unit',
  coverageReporters: CI ? ['html', 'json'] : ['html', ['text', { skipFull: false }], 'json'],
  verbose: true,
  clearMocks: true,
  restoreMocks: true,
};

export default config;
