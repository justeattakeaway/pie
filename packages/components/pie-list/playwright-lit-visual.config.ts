import { defineConfig } from '@playwright/test';
import { getPlaywrightNativeVisualConfig } from '@justeattakeaway/pie-components-config';

export default defineConfig(getPlaywrightNativeVisualConfig());
