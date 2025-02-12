import { defineConfig, devices } from '@playwright/test';
import { getPlaywrightConfig as getPlaywrightConfigOG } from '@justeattakeaway/pie-components-config';
import type { PlaywrightTestConfig } from '@playwright/test';

const getPlaywrightConfig = () : PlaywrightTestConfig => ({
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

export default defineConfig(getPlaywrightConfig());
