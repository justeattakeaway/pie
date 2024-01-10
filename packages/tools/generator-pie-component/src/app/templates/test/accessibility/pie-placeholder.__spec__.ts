
import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/fixtures.ts';
import { Pie<%= componentName %>, <%= componentName %>Props } from '../../src/index.ts';

test.describe('Pie<%= componentName %> - Accessibility tests', () => {
    test('a11y - should test the Pie<%= componentName %> component WCAG compliance', async ({ makeAxeBuilder, mount }) => {
        await mount(
            Pie<%= componentName %>,
            {
                props: {} as <%= componentName %>Props,
            },
        );

        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });
});
