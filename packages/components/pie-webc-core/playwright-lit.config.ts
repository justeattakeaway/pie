import { defineConfig, devices } from '@playwright/test';
import { getPlaywrightNativeConfig as getPlaywrightConfigOG } from '@justeattakeaway/pie-components-config';
import type { PlaywrightTestConfig } from '@playwright/test';

const getPlaywrightNativeConfig = () : PlaywrightTestConfig => ({
    ...getPlaywrightConfigOG(),
    projects: [
        {
            name: 'component:chrome',
            use: {
                ...devices['Desktop Chrome'],
            },
            testMatch: ['**/test/**/*.browser.spec.ts'],
        },
    ],
});

export default defineConfig(getPlaywrightNativeConfig());
