import type { PlaywrightTestConfig } from '@sand4rt/experimental-ct-web';
import { devices } from '@playwright/test';
import os from 'os';

const { getBaseUrl } = require('./apps/pie-docs/test/helpers/configuration-helper');
const baseURL = getBaseUrl();
process.env.BASE_URL = baseURL;
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {

  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: os.cpus().length,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: process.env.BASE_URL,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',

    /* Sets the default getByTestId function attribute to the data-test-id format */
    testIdAttribute: 'data-test-id',
  },

  /* Configure projects for major browsers */

  projects: [
    {
      name: 'a11y:chrome',
      use: {
        ...devices['Desktop Chrome'],
      },
      testMatch: ['**/test/accessibility/*.spec.js']
    },
    {
      name: 'system:chrome',
      grep: /@desktop/,
      use: {
        ...devices['Desktop Chrome'],
      },
      testMatch: ['**/test/system/*.spec.js']
    },
    {
      name: 'system:ios',
      grep: /@mobile/,
      use: {
        ...devices['iPhone X'],
        
      },
      testMatch: ['**/test/system/*.spec.js']
    },
    {
      name: 'system:android',
      grep: /@mobile/,
      use: {
        ...devices['Pixel 5'],
        
      },
      testMatch: ['**/test/system/*.spec.js']
    },
  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  // outputDir: 'test-results/',
};

export default config;