
import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/fixtures.ts';
import { PieTestComponent, TestComponentProps } from '../../src/index.ts';

test.describe('PieTestComponent - Accessibility tests', () => {
    test('a11y - should test the PieTestComponent component WCAG compliance', async ({ makeAxeBuilder, mount }) => {
        await mount(
            PieTestComponent,
            {
                props: {} as TestComponentProps,
            },
        );

        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });
});
