import { test, expect } from '@sand4rt/experimental-ct-web';
import AxeBuilder from '@axe-core/playwright';
import { PieButton, buttonSizes, buttonVariants } from '@/index';

const disabledStates = [true, false];

buttonVariants.forEach((variant) => {
    test(`should render - ${variant}`, async ({ mount, page }) => {
        for (const size of buttonSizes) {
            for (const isDisabled of disabledStates) {
                const component = await mount(
                    PieButton,
                    {
                        props: {
                            size,
                            variant,
                            disabled: isDisabled,
                        },
                        slots: {
                            default: `Hello, ${size} ${variant} Button!`,
                        },
                    },
                );
            }
        }

        const results = await new AxeBuilder.default({ page })
    .withTags(['wcag21a', 'wcag21aa', 'wcag143', 'cat.color', 'cat.aria'])
    .disableRules(['color-contrast', 'color-contrast-enhanced'])
    .analyze();

        expect(results.violations).toEqual([]);
    });
});
