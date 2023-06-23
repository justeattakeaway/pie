import { devices } from '@sand4rt/experimental-ct-web';
import path from 'path';

/**
 * See https://playwright.dev/docs/test-configuration
 */
export function getPlaywrightVisualConfig () {
    return {
        /* Maximum time one test can run for. */
        timeout: 30 * 1000,
        /* Run tests in files in parallel */
        fullyParallel: true,
        /* Fail the build on CI if you accidentally left test.only in the source code. */
        forbidOnly: !!process.env.CI,
        /* Retry on CI only */
        retries: process.env.CI ? 2 : 0,
        /* Opt out of parallel tests on CI. */
        workers: '50%',
        /* Reporter to use. See https://playwright.dev/docs/test-reporters */
        reporter: [['html', { outputFolder: 'lit-visual-report' }]],
        /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
        use: {
            ctViteConfig: {
                resolve: {
                    alias: {
                        '@': path.resolve('./src'),
                    },
                },
            },
            /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
            trace: 'on',
        },

        /* Configure projects for major browsers */
        projects: [
            {
                name: 'visual:desktop',
                grepInvert: /@mobile/,
                use: {
                    ...devices['Desktop Chrome'],
                },
                testMatch: ['**/test/visual/*.spec.ts'],
            },
            {
                name: 'visual:mobile',
                grep: /@mobile/,
                use: {
                    ...devices['Pixel 5'],
                },
                testMatch: ['**/test/visual/*.spec.ts'],
            },
        ],
    };
}
