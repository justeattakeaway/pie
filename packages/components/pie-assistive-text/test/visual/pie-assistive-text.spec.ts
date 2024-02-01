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
import { setRTL } from '@justeattakeaway/pie-webc-testing/src/helpers/set-rtl-direction.ts';
import { PieAssistiveText } from '../../src/index.ts';
import { variants } from '../../src/defs.ts';

const renderTestPieAssistiveText = (propVals: WebComponentPropValues) => `<pie-assistive-text variant="${propVals.variant}">Assistive Text</pie-assistive-text>`;

test.beforeEach(async ({ mount }) => {
    const component = await mount(PieAssistiveText);
    await component.unmount();
});

test.describe('PieCard - Visual tests`', () => {
    const props: PropObject = {
        variant: variants,
    };

    const componentPropsMatrix : WebComponentPropValues[] = getAllPropCombinations(props);
    const componentPropsMatrixByVariant: Record<string, WebComponentPropValues[]> = splitCombinationsByPropertyValue(componentPropsMatrix, 'variant');
    const componentVariants: string[] = Object.keys(componentPropsMatrixByVariant);

    componentVariants.forEach((variant) => test(`should render all prop variations for Variant: ${variant}`, async ({ page, mount }) => {
        await Promise.all(componentPropsMatrixByVariant[variant].map(async (combo: WebComponentPropValues) => {
            const testComponent: WebComponentTestInput = createTestWebComponent(combo, renderTestPieAssistiveText);
            const propKeyValues = `variant: ${variant}`;
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

        await percySnapshot(page, `PIE Assistive Text - Variant: ${variant}`, percyWidths);
    }));

    ['success', 'error'].forEach((variant) => test(`should render correctly when RTL is set: ${variant}`, async ({ page, mount }) => {
        await Promise.all(componentPropsMatrixByVariant[variant].map(async (combo: WebComponentPropValues) => {
            const testComponent: WebComponentTestInput = createTestWebComponent(combo, renderTestPieAssistiveText);
            const propKeyValues = `variant: ${variant}, dir: RTL`;
            await setRTL(page);

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

        await percySnapshot(page, `PIE Assistive Text - Variant: ${variant}`, percyWidths);
    }));
});
