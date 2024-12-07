import { devices } from '@playwright/test';
import path from 'path';

/**
 * See https://playwright.dev/docs/test-configuration
 */
export function getPlaywrightNativeConfig () {
    return {
        /* The base directory, relative to the config file, for snapshot files created with toMatchSnapshot and toHaveScreenshot. */
        snapshotDir: './__snapshots__',
        /* Maximum time one test can run for. */
        timeout: 10 * 1000,
        testIgnore: '*-react.spec.js',
        /* Run tests in files in parallel */
        fullyParallel: true,
        /* Fail the build on CI if you accidentally left test.only in the source code. */
        forbidOnly: !!process.env.CI,
        /* Retry on CI only */
        retries: process.env.CI ? 2 : 0,
        /* Opt out of parallel tests on CI. */
        workers: '50%',
        /* Reporter to use. See https://playwright.dev/docs/test-reporters */
        reporter: [['html', { outputFolder: '../../../lit-browsers-report' }]],

        /* Configure projects for major browsers */
        projects: [
            {
                name: 'component:chrome',
                use: {
                    ...devices['Desktop Chrome'],
                },
                testMatch: ['**/test/component/*.spec.{js,ts}'],
            },
            {
                name: 'a11y:chrome',
                use: {
                    ...devices['Desktop Chrome'],
                },
                testMatch: ['**/test/accessibility/*.spec.{js,ts}'],
            },
        ],
        webServer: !process.env.CI ? {
            command: 'npx turbo dev:testing --filter=pie-storybook',
            url: 'http://localhost:6006',
            timeout: 120 * 10000,
            reuseExistingServer: !process.env.CI,
        } : undefined,
    };
}
