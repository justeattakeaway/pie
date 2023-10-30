
import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/fixtures.ts';
import { PieCardContainer, CardContainerProps } from '@/index';
import { tags } from '@/defs';

test.describe('PieCardContainer - Accessibility tests', () => {
    tags.forEach((tag) => {
        test(`a11y - should test the PieCardContainer component WCAG compliance if tag is = "${tag}"`, async ({ makeAxeBuilder, mount }) => {
            await mount(
                PieCardContainer,
                {
                    props: {
                        tag,
                        aria: { label: 'card-container' },
                    } as CardContainerProps,
                },
            );

            const results = await makeAxeBuilder().analyze();

            expect(results.violations).toEqual([]);
        });
    });
});
