import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { type PropObject, type WebComponentPropValues } from '@justeattakeaway/pie-webc-testing/src/helpers/defs.ts';
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
import { variants } from '@justeattakeaway/pie-thumbnail/src';
import { PieThumbnail } from '../../src/index.ts';

const props: PropObject = {
    variant: variants,
    src: 'https://www.takeaway.com/consumer-web/images/takeaway-brand.61e55e0b.svg',
    alt: 'JET logo',
};

// Renders a <pie-thumbnail> HTML string with the given prop values
const renderTestPieThumbnail = (propVals: WebComponentPropValues) => `<pie-thumbnail variant="${propVals.variant}" src="${propVals.src}" alt="${propVals.alt}"></pie-thumbnail>`;

const componentPropsMatrix = getAllPropCombinations(props);
const componentPropsMatrixByVariant = splitCombinationsByPropertyValue(componentPropsMatrix, 'variant');
const componentVariants = Object.keys(componentPropsMatrixByVariant);

// This ensures the component is registered in the DOM for each test
// This is not required if your tests mount the web component directly in the tests
test.beforeEach(async ({ mount }, testInfo) => {
    testInfo.setTimeout(testInfo.timeout + 40000);

    const component = await mount(PieThumbnail);
    await component.unmount();
});

componentVariants.forEach((variant) => test(`should render all prop variations for Variant: ${variant}`, async ({ page, mount }) => {
    for (const combo of componentPropsMatrixByVariant[variant]) {
        const testComponent = createTestWebComponent(combo, renderTestPieThumbnail);
        const propKeyValues = `
            variant: ${testComponent.propValues.variant},
            src: ${testComponent.propValues.src},
            alt: ${testComponent.propValues.alt}
        `;

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

    await percySnapshot(page, `PieThumbnail - Variant: ${variant}`, percyWidths);
}));
