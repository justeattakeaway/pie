import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import {
    type PropObject, type WebComponentPropValues,
} from '@justeattakeaway/pie-webc-testing/src/helpers/defs.ts';
import {
    getAllPropCombinations,
} from '@justeattakeaway/pie-webc-testing/src/helpers/get-all-prop-combos.ts';
import {
    createTestWebComponent,
} from '@justeattakeaway/pie-webc-testing/src/helpers/rendering.ts';
import {
    WebComponentTestWrapper,
} from '@justeattakeaway/pie-webc-testing/src/helpers/components/web-component-test-wrapper/WebComponentTestWrapper.ts';
import { percyWidths } from '@justeattakeaway/pie-webc-testing/src/percy/breakpoints.ts';
import { PieButton } from '../../src/index.ts';
import { type ButtonProps, sizes } from '../../src/defs.ts';

const props: PropObject<ButtonProps> = {
    variant: ['primary'],
    size: sizes,
    isResponsive: [true, false],
    responsiveSize: ['productive', 'expressive'],
};

// Renders a <pie-button> HTML string with the given prop values
const renderTestPieButton = (propVals: WebComponentPropValues) => `<pie-button size="${propVals.size}" ${propVals.isResponsive ? 'isResponsive' : ''} responsiveSize="${propVals.responsiveSize ? propVals.responsiveSize : ''}">Hello world</pie-button>`;
const renderTestPieButtonLargeText = (propVals: WebComponentPropValues) => `<pie-button size="${propVals.size}" ${propVals.isResponsive ? 'isResponsive' : ''} responsiveSize="${propVals.responsiveSize ? propVals.responsiveSize : ''}">This is a really long button string to test the overflow</pie-button>`;

const componentPropsMatrix = getAllPropCombinations(props);

test.beforeEach(async ({ mount }, testInfo) => {
    testInfo.setTimeout(testInfo.timeout + 40000);
    const component = await mount(PieButton);
    await component.unmount();
});

test('should render all size variations', async ({ page, mount }) => {
    for (const combo of componentPropsMatrix) {
        const testComponent = createTestWebComponent(combo, renderTestPieButton);
        const propKeyValues = `size: ${testComponent.propValues.size}, isResponsive: ${testComponent.propValues.isResponsive}, responsiveSize: ${testComponent.propValues.responsiveSize}`;

        await mount(
            WebComponentTestWrapper,
            {
                props: { propKeyValues },
                slots: {
                    component: testComponent.renderedString.trim(),
                },
            },
        );
    }

    // Follow up to remove in Jan
    await page.waitForTimeout(2500);

    await percySnapshot(page, 'PIE Button - sizes/isResponsive/responsiveSize', percyWidths);
});

test('should render all size variations, with larger button text string', async ({ page, mount }) => {
    for (const combo of componentPropsMatrix) {
        const testComponent = createTestWebComponent(combo, renderTestPieButtonLargeText);
        const propKeyValues = `size: ${testComponent.propValues.size}, isResponsive: ${testComponent.propValues.isResponsive}, responsiveSize: ${testComponent.propValues.responsiveSize}`;

        await mount(
            WebComponentTestWrapper,
            {
                props: { propKeyValues },
                slots: {
                    component: testComponent.renderedString.trim(),
                },
            },
        );
    }

    // Follow up to remove in Jan
    await page.waitForTimeout(2500);

    await percySnapshot(page, 'PIE Button - sizes/isResponsive/responsiveSize - double line text', percyWidths);
});
