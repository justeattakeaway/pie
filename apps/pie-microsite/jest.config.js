module.exports = {
    moduleFileExtensions: [
        'js',
        'json',
    ],

    transform: {
        '^.+\\.js$': 'babel-jest'
    },

    transformIgnorePatterns: [
        'node_modules/(?!(lodash-es)/)'
    ],

    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '^~include-media/(.*)$': '<rootDir>../../node_modules/include-media/$1',
        '^~@justeat/(.*)$': '<rootDir>../../node_modules/@justeat/$1'
    },


    globals: {
    },

    modulePathIgnorePatterns: [
        './test/system/',
        './test/visual/'
    ],

    testEnvironment: 'jsdom',

    testURL: 'http://localhost/'
};