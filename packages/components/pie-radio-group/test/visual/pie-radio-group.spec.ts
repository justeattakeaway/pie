import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import {
    type PropObject, type WebComponentPropValues, type WebComponentTestInput,
} from '@justeattakeaway/pie-webc-testing/src/helpers/defs.ts';
import {
    getAllPropCombinations, splitCombinationsByPropertyValue,
} from '@justeattakeaway/pie-webc-testing/src/helpers/get-all-prop-combos.ts';
import { createTestWebComponent } from '@justeattakeaway/pie-webc-testing/src/helpers/rendering.ts';
import { WebComponentTestWrapper } from '@justeattakeaway/pie-webc-testing/src/helpers/components/web-component-test-wrapper/WebComponentTestWrapper.ts';
import { percyWidths } from '@justeattakeaway/pie-webc-testing/src/percy/breakpoints.ts';
import { PieRadio } from '@justeattakeaway/pie-radio';
import { PieFormLabel } from '@justeattakeaway/pie-form-label';
import { PieRadioGroup } from '../../src/index.ts';

const props: PropObject = {
    isInline: [true, false],
    disabled: [true, false],
    hasGroupLabel: [true, false],
};

const renderTestPieRadioGroup = (propVals: WebComponentPropValues) => {
    let attributes = '';

    if (propVals.isInline) attributes += ` isInline="${propVals.isInline}"`;
    if (propVals.disabled) attributes += ` disabled="${propVals.disabled}"`;

    return `
    <pie-radio-group ${attributes}>
        ${propVals.hasGroupLabel ? '<pie-form-label slot="label">Group Label</pie-form-label>' : ''}
        <pie-radio value="radio-one">radio 1</pie-radio>
        <pie-radio value="radio-two" checked>radio 2</pie-radio>
        <pie-radio value="radio-three">radio 3</pie-radio>
    </pie-radio-group>`;
};

const componentPropsMatrix: WebComponentPropValues[] = getAllPropCombinations(props);
const componentPropsMatrixByInlineState: Record<string, WebComponentPropValues[]> = splitCombinationsByPropertyValue(componentPropsMatrix, 'isInline');
const componentVariants: string[] = Object.keys(componentPropsMatrixByInlineState);

test.beforeEach(async ({ mount }, testInfo) => {
    testInfo.setTimeout(testInfo.timeout + 40000);

    // This ensures the radio component is registered in the DOM for each test.
    // It appears to add them to a Playwright cache which we understand is required for the tests to work correctly.
    const radioGroupComponent = await mount(PieRadioGroup);
    await radioGroupComponent.unmount();

    const radioComponent = await mount(PieRadio);
    await radioComponent.unmount();

    const formLabelComponent = await mount(PieFormLabel);
    await formLabelComponent.unmount();
});

componentVariants.forEach((variant) => test(`should render all prop variations for the isInline state: ${variant}`, async ({ page, mount }) => {
    for (const combo of componentPropsMatrixByInlineState[variant]) {
        const testComponent: WebComponentTestInput = createTestWebComponent(combo, renderTestPieRadioGroup);
        const propKeyValues = `
            isInline: ${testComponent.propValues.isInline},
            disabled: ${testComponent.propValues.disabled},
            hasGroupLabel: ${testComponent.propValues.hasGroupLabel}`;

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

    await percySnapshot(page, `PIE Radio Group - isInline: ${variant}`, percyWidths);
}));

