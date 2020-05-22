const { defaults: tsjPreset } = require('ts-jest/presets');
const { compilerOptions } = require('./tsconfig.json');

const { baseUrl } = compilerOptions;

module.exports = {
  moduleDirectories: [
    baseUrl,
    'node_modules',
  ],
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
  },
  transform: {
    ...tsjPreset.transform // only .ts files will go through jest-ts
  },
  testMatch: ['**/*/*.spec.(ts|tsx)'],
  setupFiles: ['./enzyme.setup.js'],
  testPathIgnorePatterns: ['./.next/', './node_modules/'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.jest.json',
    },
  },
};
