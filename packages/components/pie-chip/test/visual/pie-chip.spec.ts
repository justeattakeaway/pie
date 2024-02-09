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
import { variants } from '../../src/defs.ts';
import { PieChip } from '../../src/index.ts';

const props: PropObject = {
    variant: variants,
    disabled: [true, false],
    isSelected: [true, false],
    isLoading: [true, false],
    isDismissible: [true, false],
    iconSlot: ['', '<icon-heart-filled slot="icon"></icon-heart-filled>'],
};

// Renders a <pie-chip> HTML string with the given prop values
const renderTestPieChip = (propVals: WebComponentPropValues) => `<pie-chip variant="${propVals.variant}" ${propVals.isDismissible ? 'isDismissible' : ''} ${propVals.isLoading ? 'isLoading' : ''} ${propVals.isSelected ? 'isSelected' : ''} ${propVals.disabled ? 'disabled' : ''}>${propVals.iconSlot} Hello world</pie-chip>`;

const componentPropsMatrix: WebComponentPropValues[] = getAllPropCombinations(props);
const componentPropsMatrixByVariant: Record<string, WebComponentPropValues[]> = splitCombinationsByPropertyValue(componentPropsMatrix, 'variant');
const componentVariants: string[] = Object.keys(componentPropsMatrixByVariant);

test.beforeEach(async ({ mount }, testInfo) => {
    testInfo.setTimeout(testInfo.timeout + 40000);

    // This ensures the chip and icon components are registered in the DOM for each test.
    // It appears to add them to a Playwright cache which we understand is required for the tests to work correctly.
    const chipComponent = await mount(PieChip);
    await chipComponent.unmount();
    const iconComponent = await mount(IconHeartFilled);
    await iconComponent.unmount();
});

componentVariants.forEach((variant) => test(`should render all prop variations for Variant: ${variant}`, async ({ page, mount }) => {
    await Promise.all(componentPropsMatrixByVariant[variant].map(async (combo: WebComponentPropValues) => {
        const testComponent: WebComponentTestInput = createTestWebComponent(combo, renderTestPieChip);
        const propKeyValues = `
            variant: ${testComponent.propValues.variant},
            isSelected: ${testComponent.propValues.isSelected},
            isLoading: ${testComponent.propValues.isLoading},
            isDismissible: ${testComponent.propValues.isDismissible},
            disabled: ${testComponent.propValues.disabled},
            iconSlot: ${testComponent.propValues.iconSlot ? 'with icon' : 'no icon'}`;

        await mount(
            WebComponentTestWrapper,
            {
                props: { propKeyValues },
                slots: {
                    component: testComponent.renderedString.trim(),
                },
            },
        );
    }));

    // Follow up to remove in Jan
    await page.waitForTimeout(5000);

    await percySnapshot(page, `PIE Chip - Variant: ${variant}`, percyWidths);
}));
