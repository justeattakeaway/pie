import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import {
    type PropObject, type WebComponentPropValues,
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
import { IconHeartFilled } from '@justeattakeaway/pie-icons-webc/dist/IconHeartFilled';
import {
    type TagProps, sizes, variants, iconPlacements,
} from '../../src/defs.ts';
import { PieTag } from '../../src/index.ts';

const props: PropObject<TagProps & { iconSlot: string }> = {
    variant: variants,
    size: sizes,
    iconPlacement: iconPlacements,
    isInteractive: [true, false],
    isStrong: [true, false],
    disabled: [true, false],
    iconSlot: ['', '<icon-heart-filled slot="icon"></icon-heart-filled>'],
};

// Renders a <pie-tag> HTML string with the given prop values
const renderTestPieTag = (propVals: WebComponentPropValues) => `<pie-tag variant="${propVals.variant}" size="${propVals.size}" iconPlacement="${propVals.iconPlacement}" ${propVals.isStrong ? 'isStrong' : ''} ${propVals.disabled ? 'disabled' : ''} ${propVals.isInteractive ? 'isInteractive' : ''}>${propVals.iconSlot} Hello world</pie-tag>`;

const componentPropsMatrix = getAllPropCombinations(props);
const componentPropsMatrixByVariant = splitCombinationsByPropertyValue(componentPropsMatrix, 'variant');
const componentVariants = Object.keys(componentPropsMatrixByVariant);

test.beforeEach(async ({ mount }, testInfo) => {
    testInfo.setTimeout(testInfo.timeout + 40000);

    // This ensures the tag and icon components are registered in the DOM for each test.
    // It appears to add them to a Playwright cache which we understand is required for the tests to work correctly.
    const tagComponent = await mount(PieTag);
    await tagComponent.unmount();
    const iconComponent = await mount(IconHeartFilled);
    await iconComponent.unmount();
});

componentVariants.forEach((variant) => test(`should render all prop variations for Variant: ${variant}`, async ({ page, mount }) => {
    for (const combo of componentPropsMatrixByVariant[variant]) {
        const testComponent = createTestWebComponent(combo, renderTestPieTag);
        const propKeyValues = `
            size: ${testComponent.propValues.size},
            variant: ${testComponent.propValues.variant},
            iconPlacement: ${testComponent.propValues.iconPlacement},
            isStrong: ${testComponent.propValues.isStrong},
            isInteractive: ${testComponent.propValues.isInteractive},
            disabled: ${testComponent.propValues.disabled},
            iconSlot: ${testComponent.propValues.iconSlot ? 'with icon' : 'no icon'}`;
        const darkMode = ['neutral-alternative'].includes(variant);

        await mount(
            WebComponentTestWrapper,
            {
                props: { propKeyValues, darkMode },
                slots: {
                    component: testComponent.renderedString.trim(),
                },
            },
        );
    }

    // Follow up to remove in Jan
    await page.waitForTimeout(5000);

    await percySnapshot(page, `PIE Tag - Variant: ${variant}`, percyWidths);
}));
