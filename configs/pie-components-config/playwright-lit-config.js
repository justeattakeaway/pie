import { devices } from '@sand4rt/experimental-ct-web';
import path from 'path';

/**
 * See https://playwright.dev/docs/test-configuration
 */
export function getPlaywrightConfig() {
    return {
        /* The base directory, relative to the config file, for snapshot files created with toMatchSnapshot and toHaveScreenshot. */
        snapshotDir: './__snapshots__',
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
        reporter: [['html', { outputFolder: 'lit-browsers-report' }]],
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
                name: 'component:chrome',
                use: {
                    ...devices['Desktop Chrome'],
                },
                testMatch: ['**/test/component/*.spec.ts'],
            },
            {
                name: 'a11y:chrome',
                use: {
                    ...devices['Desktop Chrome'],
                },
                testMatch: ['**/test/accessibility/*.spec.ts'],
            },
        ],
    };
}
