import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import type {
    PropObject, WebComponentPropValues, WebComponentTestInput,
} from '@justeattakeaway/pie-webc-testing/src/helpers/defs.ts';
import {
    getAllPropCombinations, splitCombinationsByPropertyValue,
} from '@justeattakeaway/pie-webc-testing/src/helpers/get-all-prop-combos.ts';
import {
    createTestWebComponent,
} from '@justeattakeaway/pie-webc-testing/src/helpers/rendering.ts';
import {
    WebComponentTestWrapper,
} from '@justeattakeaway/pie-webc-testing/src/helpers/components/web-component-test-wrapper/WebComponentTestWrapper.ts';
import { percyWidths } from '@justeattakeaway/pie-webc-testing/src/percy/breakpoints.ts';
import { IconHeartFilled } from '@justeattakeaway/pie-icons-webc';
import { PieButton } from '../../src/index.ts';
import { sizes, variants, iconPlacements } from '../../src/defs.ts';

const props: PropObject = {
    variant: variants,
    size: sizes,
    type: 'button', // Changing the type does not affect the appearance of the button
    isFullWidth: [true, false],
    disabled: [true, false],
    isLoading: [true, false],
    iconPlacement: [undefined, ...iconPlacements],
};

// Renders a <pie-button> HTML string with the given prop values
const renderTestPieButton = (propVals: WebComponentPropValues) => `<pie-button variant="${propVals.variant}" size="${propVals.size}" type="${propVals.type}" iconPlacement="${propVals.iconPlacement}" ${propVals.isFullWidth ? 'isFullWidth' : ''} ${propVals.disabled ? 'disabled' : ''} ${propVals.isLoading ? 'isLoading' : ''}>${propVals.iconPlacement ? '<icon-heart-filled slot="icon"></icon-heart-filled>' : ''} Hello world</pie-button>`;

const componentPropsMatrix : WebComponentPropValues[] = getAllPropCombinations(props);
const componentPropsMatrixByVariant: Record<string, WebComponentPropValues[]> = splitCombinationsByPropertyValue(componentPropsMatrix, 'variant');
const componentVariants: string[] = Object.keys(componentPropsMatrixByVariant);

test.beforeEach(async ({ mount }, testInfo) => {
    testInfo.setTimeout(testInfo.timeout + 40000);

    // This ensures the button and icon components are registered in the DOM for each test.
    // It appears to add them to a Playwright cache which we understand is required for the tests to work correctly.
    const buttonComponent = await mount(PieButton);
    await buttonComponent.unmount();
    const iconComponent = await mount(IconHeartFilled);
    await iconComponent.unmount();
});

componentVariants.forEach((variant) => test(`should render all prop variations for Variant: ${variant}`, async ({ page, mount }) => {
    await Promise.all(componentPropsMatrixByVariant[variant].map(async (combo: WebComponentPropValues) => {
        const testComponent: WebComponentTestInput = createTestWebComponent(combo, renderTestPieButton);
        const propKeyValues = `size: ${testComponent.propValues.size}, iconPlacement: ${testComponent.propValues.iconPlacement}, isFullWidth: ${testComponent.propValues.isFullWidth}, disabled: ${testComponent.propValues.disabled}, isLoading: ${testComponent.propValues.isLoading}`;
        const darkMode = ['inverse', 'ghost-inverse', 'outline-inverse'].includes(variant);

        await mount(
            WebComponentTestWrapper,
            {
                props: { propKeyValues, darkMode },
                slots: {
                    component: testComponent.renderedString.trim(),
                },
            },
        );
    }));

    // Follow up to remove in Jan
    await page.waitForTimeout(2500);

    await percySnapshot(page, `PIE Button - Variant: ${variant}`, percyWidths);
}));
