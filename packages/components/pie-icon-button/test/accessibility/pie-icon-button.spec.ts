import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/webc-fixtures.ts';
import type {
    PropObject, WebComponentPropValues,
} from '@justeattakeaway/pie-webc-testing/src/helpers/defs.ts';
import {
    getAllPropCombinations, splitCombinationsByPropertyValue,
} from '@justeattakeaway/pie-webc-testing/src/helpers/get-all-prop-combos.ts';
import { IconClose } from '@justeattakeaway/pie-icons-webc';
import { PieIconButton } from '../../src/index.ts';
import { variants } from '../../src/defs.ts';

const props: PropObject = {
    variant: variants,
    disabled: [true, false],
    aria: {
        label: 'qux',
    },
};

const componentPropsMatrix: WebComponentPropValues[] = getAllPropCombinations(props);
const componentPropsMatrixByVariant: Record<string, WebComponentPropValues[]> = splitCombinationsByPropertyValue(componentPropsMatrix, 'variant');
const componentVariants: string[] = Object.keys(componentPropsMatrixByVariant);

test.beforeEach(async ({ mount }, testInfo) => {
    testInfo.setTimeout(testInfo.timeout + 40000);

    // This ensures the icon-button and icon components are registered in the DOM for each test.
    // It appears to add them to a Playwright cache which we understand is required for the tests to work correctly.
    const iconButtonComponent = await mount(PieIconButton);
    await iconButtonComponent.unmount();
    const iconComponent = await mount(IconClose);
    await iconComponent.unmount();
});

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
