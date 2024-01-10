import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import type {
    PropObject, WebComponentPropValues, WebComponentTestInput,
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
import { sizes } from '../../src/defs';

const props: PropObject = {
    variant: ['primary'],
    size: sizes,
    isResponsive: [true, false],
    responsiveSize: ['productive', 'expressive'],
};

// Renders a <pie-button> HTML string with the given prop values
const renderTestPieButton = (propVals: WebComponentPropValues) => `<pie-button size="${propVals.size}" ${propVals.isResponsive ? 'isResponsive' : ''} responsiveSize="${propVals.responsiveSize ? propVals.responsiveSize : ''}">Hello world</pie-button>`;

const componentPropsMatrix : WebComponentPropValues[] = getAllPropCombinations(props);

// eslint-disable-next-line no-empty-pattern
test.beforeEach(async ({ }, testInfo) => {
    testInfo.setTimeout(testInfo.timeout + 40000);
});

test('should render all size variations', async ({ page, mount }) => {
    await Promise.all(componentPropsMatrix.map(async (combo: WebComponentPropValues) => {
        const testComponent: WebComponentTestInput = createTestWebComponent(combo, renderTestPieButton);
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
    }));

    // Follow up to remove in Jan
    await page.waitForTimeout(2500);

    await percySnapshot(page, 'PIE Button - sizes/isResponsive/responsiveSize', percyWidths);
});
