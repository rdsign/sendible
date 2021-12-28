module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{ts,tsx}',
        '!src/**/*.ts',
        '!src/index.tsx',
        '!src/pages/**/*.tsx',
    ],
    coverageThreshold: {
        global: {
            branches: 70,
            functions: 70,
            statements: 70,
            lines: 70,
        },
    },
    moduleDirectories: ['node_modules', 'src'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
        '^.+\\.(css|sass|scss)$': '<rootDir>/spec/__mocks__/styleMock.js',
        '^.+\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/spec/__mocks__/fileMock.js',
    },
    setupFiles: ['jest-canvas-mock'],
    setupFilesAfterEnv: ['<rootDir>spec/jest.setup.js'],
    testPathIgnorePatterns: ['/node_modules/'],
    testEnvironment: 'jsdom',
};
