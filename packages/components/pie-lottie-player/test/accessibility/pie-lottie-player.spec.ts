
import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/webc-fixtures.ts';
import { PieLottiePlayer, LottiePlayerProps } from '../../src/index.ts';

test.describe('PieLottiePlayer - Accessibility tests', () => {
    test('a11y - should test the PieLottiePlayer component WCAG compliance', async ({ makeAxeBuilder, mount }) => {
        await mount(
            PieLottiePlayer,
            {
                props: {} as LottiePlayerProps,
            },
        );

        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });
});
