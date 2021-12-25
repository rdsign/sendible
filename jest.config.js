module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
        '<rootDir>/components/**/*.{ts,tsx}',
        '<rootDir>/layouts/**/*.{ts,tsx}',
        '<rootDir>/pages/**/*.{ts,tsx}',
        '!<rootDir>/**/*.styles.ts',
        '!<rootDir>/**/*.d.ts',
    ],
    coverageThreshold: {
        global: {
            branches: 0,
            functions: 0,
            statements: 0,
            lines: 0,
        },
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
        '^.+\\.(css|sass|scss)$': '<rootDir>/spec/__mocks__/styleMock.js',
        '^.+\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/spec/__mocks__/fileMock.js',
    },
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
    testEnvironment: 'jsdom',
    transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
    setupFiles: ['jest-canvas-mock'],
    setupFilesAfterEnv: ['<rootDir>spec/jest.setup.js'],
};
