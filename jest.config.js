module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
  coverageReporters: ['lcov', 'text', 'cobertura'],
  reporters: ['default'],
  collectCoverage: true,
  collectCoverageFrom: ['src/{components,features,utils}/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: ['spec'],
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css|less)$': 'identity-obj-proxy',
    '^assets/(.*)$': '<rootDir>/src/assets/$1',
    '^constants/(.*)$': '<rootDir>/src/constants/$1',
    '^utils/(.*)$': '<rootDir>/src/utils/$1',
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^features/(.*)$': '<rootDir>/src/features/$1',
    '^locale/(.*)$': '<rootDir>/src/locale/$1',
    '^hooks/(.*)$': '<rootDir>/src/hooks/$1',
  }
}
