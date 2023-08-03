
import { test, expect } from '@sand4rt/experimental-ct-web';
import AxeBuilder from '@axe-core/playwright';
import { axeTags, axeDisabledRules } from '@justeattakeaway/pie-components-config';
import { Pie<%= componentName %>, <%= componentName %>Props } from '@/index';

test.describe('Pie<%= componentName %> - Accessibility tests', () => {
    test('a11y - should test the Pie<%= componentName %> component WCAG compliance', async ({ page, mount }) => {
        await mount(
            Pie<%= componentName %>,
            {
                props: {} as <%= componentName %>Props,
            },
        );

        const results = await new AxeBuilder({ page })
        .withTags(axeTags)
        .disableRules(axeDisabledRules)
        .analyze();

        expect(results.violations).toEqual([]);
    });
});
