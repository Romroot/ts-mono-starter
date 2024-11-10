const { compilerOptions } = require('./tsconfig')

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  roots: ['<rootDir>'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  modulePaths: ['./'],
  setupFilesAfterEnv: ['./test/jestSetup.ts'],
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
    '.+\\.(css|less|sass|scss|png|jpg|gif|ttf|woff|woff2|svg)$':
      'jest-transform-stub',
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
}
