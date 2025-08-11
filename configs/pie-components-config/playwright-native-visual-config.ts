import { devices } from '@playwright/test';

/**
 * See https://playwright.dev/docs/test-configuration
 */
export function getPlaywrightNativeVisualConfig() {
    return {
        /* Maximum time one test can run for. */
        timeout: 10 * 1000,
        /* Run tests in files in parallel */
        fullyParallel: true,
        /* Fail the build on CI if you accidentally left test.only in the source code. */
        forbidOnly: !!process.env.CI,
        /* Retry on CI only */
        retries: process.env.CI ? 2 : 0,
        /* Opt out of parallel tests on CI. */
        workers: '50%',
        /* Reporter to use. See https://playwright.dev/docs/test-reporters */
        reporter: [['html', { outputFolder: '../../../lit-visual-report' }]],
        /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
        use: {
            /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
            trace: 'on',
            testIdAttribute: 'data-test-id',
            discovery: {
                disallowedHostnames: [
                    'unpkg.com'
                ],
            },
        },

        /* Configure projects for major browsers */
        projects: [
            {
                name: 'visual:desktop',
                grepInvert: /@mobile/,
                use: {
                    ...devices['Desktop Chrome'],
                    channel: 'chrome',
                },
                testMatch: ['**/test/visual/*.spec.ts'],
            },
            {
                name: 'visual:mobile',
                grep: /@mobile/,
                use: {
                    ...devices['Galaxy S8'],
                    channel: 'chrome',
                },
                testMatch: ['**/test/visual/*.spec.ts'],
            },
        ],
    };
}
