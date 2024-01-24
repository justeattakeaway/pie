
import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/webc-fixtures.ts';
import { PieCard, CardProps } from '../../src/index.ts';
import { tags } from '../../src/defs.ts';

test.describe('PieCard - Accessibility tests', () => {
    tags.forEach((tag) => {
        test(`a11y - should test the PieCard component WCAG compliance if tag is = "${tag}"`, async ({ makeAxeBuilder, mount }) => {
            await mount(
                PieCard,
                {
                    props: {
                        tag,
                        aria: { label: 'card' },
                    } as CardProps,
                },
            );

            const results = await makeAxeBuilder().analyze();

            expect(results.violations).toEqual([]);
        });
    });
});
