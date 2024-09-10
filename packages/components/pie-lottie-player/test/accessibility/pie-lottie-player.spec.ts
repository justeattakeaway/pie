import { readFile } from 'fs/promises';
import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/webc-fixtures.ts';
import { PieLottiePlayer, LottiePlayerProps } from '../../src/index.ts';

const animationData = JSON.parse(await readFile(new URL('../courier.json', import.meta.url), { encoding: 'utf-8' }));

test.describe('PieLottiePlayer - Accessibility tests', () => {
    test('a11y - should test the PieLottiePlayer component WCAG compliance', async ({ makeAxeBuilder, mount }) => {
        await mount(
            PieLottiePlayer,
            {
                props: { animationData } as LottiePlayerProps,
            },
        );

        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });
});
