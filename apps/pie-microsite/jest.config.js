module.exports = {

    setupFilesAfterEnv: ['jest-expect-message'],

    modulePathIgnorePatterns: [
        './test/system/',
        './test/visual/'
    ],

    testEnvironment: 'jsdom',

    testURL: 'http://localhost/'
};
