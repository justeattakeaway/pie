import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import {
    type PropObject, type WebComponentPropValues, type WebComponentTestInput,
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

import { PieRadio, type RadioProps } from '../../src/index.ts';

const readingDirections = ['LTR', 'RTL'];

const props: PropObject<RadioProps> = {
    checked: [true, false],
    disabled: [true, false],
    value: 'foo',
};

const renderTestPieRadio = (propVals: WebComponentPropValues) => {
    let attributes = '';

    if (propVals.disabled) attributes += ` disabled="${propVals.disabled}"`;
    if (propVals.checked) attributes += ` checked="${propVals.checked}"`;

    return `<pie-radio${attributes}>Label</pie-radio>`;
};

const componentPropsMatrix: WebComponentPropValues[] = getAllPropCombinations(props);
const componentPropsMatrixByCheckedState: Record<string, WebComponentPropValues[]> = splitCombinationsByPropertyValue(componentPropsMatrix, 'checked');
const componentVariants: string[] = Object.keys(componentPropsMatrixByCheckedState);

test.beforeEach(async ({ mount }, testInfo) => {
    testInfo.setTimeout(testInfo.timeout + 40000);

    // This ensures the radio component is registered in the DOM for each test.
    // It appears to add them to a Playwright cache which we understand is required for the tests to work correctly.
    const radioComponent = await mount(PieRadio);
    await radioComponent.unmount();
});

componentVariants.forEach((variant) => test(`should render all prop variations for the checked state: ${variant}`, async ({ page, mount }) => {
    for (const combo of componentPropsMatrixByCheckedState[variant]) {
        const testComponent: WebComponentTestInput = createTestWebComponent(combo, renderTestPieRadio);
        const propKeyValues = `
            checked: ${testComponent.propValues.checked},
            disabled: ${testComponent.propValues.disabled}`;

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

    await percySnapshot(page, `PIE Radio - Checked State: ${variant}`, percyWidths);
}));

for (const dir of readingDirections) {
    test(`Labelled - ${dir}`, async ({ mount, page }) => {
        if (dir === 'RTL') {
            setRTL(page);
        }

        await mount(
            PieRadio,
            {
                props: {
                    checked: true,
                } as RadioProps,
                slots: {
                    default: 'Label',
                },
            },
        );

        await percySnapshot(page, `PIE Radio - Labelled - ${dir}`, percyWidths);
    });
}
