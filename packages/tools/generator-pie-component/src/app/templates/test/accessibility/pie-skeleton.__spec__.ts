
import { test, expect } from '@sand4rt/experimental-ct-web';
import AxeBuilder from '@axe-core/playwright';
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
        .withTags(['wcag21a', 'wcag21aa', 'wcag143', 'cat.color', 'cat.aria'])
        .disableRules(['color-contrast', 'color-contrast-enhanced'])
        .analyze();

        expect(results.violations).toEqual([]);
    });
});
