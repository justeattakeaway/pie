import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/playwright-fixtures.ts';
import { PieIconButton } from '../../src/index.ts';
import type { IconButtonProps } from '../../src/defs.ts';
import { variants } from '../../src/defs.ts';
å
componentVariants.forEach((variant) => test(`should render all prop variations for Variant: ${variant}`, async ({ makeAxeBuilder, mount }) => {
    await Promise.all(componentPropsMatrixByVariant[variant].map(async (combo: WebComponentPropValues) => {
        await mount(
            PieIconButton,
            {
                props: { ...combo },
                slots: {
                    default: '<icon-close></icon-close>',
                },
            },
        );
    }));

    const results = await makeAxeBuilder().analyze();

    expect(results.violations).toEqual([]);
}));
