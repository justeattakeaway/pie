import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/webc-fixtures.ts';
import { PieFoo } from '../../src/index.ts';

test.describe('PieFoo - Accessibility tests', () => {
    test('a11y - should test the PieFoo component WCAG compliance', async ({ makeAxeBuilder, mount }) => {
        await mount(PieFoo);

        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });
});
