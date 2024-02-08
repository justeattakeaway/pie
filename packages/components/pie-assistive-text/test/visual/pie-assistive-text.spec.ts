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

const props: PropObject = {
    variant: variants,
};

const renderTestPieAssistiveText = (propVals: WebComponentPropValues) => `<pie-assistive-text variant="${propVals.variant}">Hello world</pie-assistive-text>`;

const componentPropsMatrix : WebComponentPropValues[] = getAllPropCombinations(props);
const componentPropsMatrixByVariant: Record<string, WebComponentPropValues[]> = splitCombinationsByPropertyValue(componentPropsMatrix, 'variant');
const componentVariants: string[] = Object.keys(componentPropsMatrixByVariant);

test.beforeEach(async ({ mount }, testInfo) => {
    testInfo.setTimeout(testInfo.timeout + 40000);

    const component = await mount(PieAssistiveText);
    await component.unmount();
});

test('should render all prop variations', async ({ page, mount }) => {
    componentVariants.forEach(async (variant) => {
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
    });

    await percySnapshot(page, 'PIE Assistive Text - Variants', percyWidths);
});

test('should render all prop variations with RTL set', async ({ page, mount }) => {
    componentVariants.forEach(async (variant) => {
        await Promise.all(componentPropsMatrixByVariant[variant].map(async (combo: WebComponentPropValues) => {
            const testComponent: WebComponentTestInput = createTestWebComponent(combo, renderTestPieAssistiveText);

            const propKeyValues = `variant: ${variant}, dir: RTL`;

            setRTL(page);

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
    });

    await percySnapshot(page, 'PIE Assistive Text - Variants with RTL', percyWidths);
});
