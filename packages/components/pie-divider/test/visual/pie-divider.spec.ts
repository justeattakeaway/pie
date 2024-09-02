
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
import { variants, orientations, type DividerProps } from '../../src/defs.ts';
import { PieDivider } from '../../src/index.ts';

const props: PropObject<DividerProps> = {
    variant: variants,
    orientation: orientations,
    label: ['', 'Label'],
};

const renderTestPieDivider = (propVals: WebComponentPropValues) => {
    const { variant, orientation, label } = propVals;
    if (orientation === 'vertical') {
        return `
            <div style="height: 250px">
                <pie-divider variant="${variant}" orientation="${orientation}" label="${label}"></pie-divider>
            </div>
        `;
    }
    return `<pie-divider variant="${variant}" orientation="${orientation}" label="${label}"></pie-divider>`;
};

const componentPropsMatrix : WebComponentPropValues[] = getAllPropCombinations(props);
const componentPropsMatrixByVariant: Record<string, WebComponentPropValues[]> = splitCombinationsByPropertyValue(componentPropsMatrix, 'variant');
const componentVariants: string[] = Object.keys(componentPropsMatrixByVariant);

test.beforeEach(async ({ mount }) => {
    const component = await mount(PieDivider);
    await component.unmount();
});

componentVariants.forEach((variant) => test(`should render all prop variations for variant: ${variant} `, async ({
    page,
    mount,
}) => {
    for (const combo of componentPropsMatrixByVariant[variant]) {
        const testComponent: WebComponentTestInput = createTestWebComponent(combo, renderTestPieDivider);
        const propKeyValues = `orientation: ${testComponent.propValues.orientation}, label: ${testComponent.propValues.label || '-'}`;

        await mount(
            WebComponentTestWrapper,
            {
                props: { propKeyValues, darkMode: variant === 'inverse' },
                slots: {
                    component: testComponent.renderedString.trim(),
                },
            },
        );
    }

    await percySnapshot(page, `PIE Divider - variant: ${variant}`, percyWidths);
}));
