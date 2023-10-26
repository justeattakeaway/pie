
import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/fixtures.ts';
import { PieCardContainer, CardContainerProps } from '@/index';

test.describe('PieCardContainer - Accessibility tests', () => {
    test('a11y - should test the PieCardContainer component WCAG compliance if tag is "button"', async ({ makeAxeBuilder, mount }) => {
        await mount(
            PieCardContainer,
            {
                props: {
                    tag: 'button',
                    aria: {
                        label: 'card-container',
                    },
                } as CardContainerProps,
            },
        );

        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });

    test('a11y - should test the PieCardContainer component WCAG compliance', async ({ makeAxeBuilder, mount }) => {
        await mount(
            PieCardContainer,
            {
                props: {
                    tag: 'a',
                } as CardContainerProps,
            },
        );

        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });
});
