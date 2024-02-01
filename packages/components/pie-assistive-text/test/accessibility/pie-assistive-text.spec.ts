import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/webc-fixtures.ts';
import { PieAssistiveText, AssistiveTextProps } from '../../src/index.ts';
import { variants } from '../../src/defs.ts';

test.describe('PieAssistiveText - Accessibility tests', () => {
    variants.forEach((variant) => {
        test(`a11y - should test the PieAssistiveText component WCAG compliance if variant is = "${variant}"`, async ({ makeAxeBuilder, mount }) => {
            await mount(
                PieAssistiveText,
                {
                    props: {
                        variant,
                    } as AssistiveTextProps,
                },
            );

            const results = await makeAxeBuilder().analyze();

            expect(results.violations).toEqual([]);
        });
    });
});
