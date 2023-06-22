module.exports = {
    setupFilesAfterEnv: ['jest-expect-message'],

    testURL: 'http://localhost/',

    testEnvironment: 'node',

    modulePathIgnorePatterns: ['./test/system/', './test/visual/', './test/accessibility/'],
};
