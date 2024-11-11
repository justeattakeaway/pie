import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/webc-fixtures.ts';
import { PieFooBar } from '../../src/index.ts';

test.describe('PieFooBar - Accessibility tests', () => {
    test('a11y - should test the PieFooBar component WCAG compliance', async ({ makeAxeBuilder, mount }) => {
        await mount(PieFooBar);

        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });
});
