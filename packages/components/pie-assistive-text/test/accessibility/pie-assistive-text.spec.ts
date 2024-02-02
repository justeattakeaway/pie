
import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/webc-fixtures.ts';
import { PieAssistiveText, AssistiveTextProps } from '../../src/index.ts';

test.describe('PieAssistiveText - Accessibility tests', () => {
    test('a11y - should test the PieAssistiveText component WCAG compliance', async ({ makeAxeBuilder, mount }) => {
        await mount(
            PieAssistiveText,
            {
                props: {} as AssistiveTextProps,
            },
        );

        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });
});
