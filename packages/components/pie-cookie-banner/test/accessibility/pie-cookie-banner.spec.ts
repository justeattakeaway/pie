
import { litTest, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/fixtures.ts';
import { PieCookieBanner, CookieBannerProps } from '../../src/index.ts';

litTest.describe('PieCookieBanner - Accessibility tests', () => {
    litTest('a11y - should test the PieCookieBanner component WCAG compliance', async ({ makeAxeBuilder, mount }) => {
        await mount(
            PieCookieBanner,
            {
                props: {} as CookieBannerProps,
            },
        );

        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });
});
