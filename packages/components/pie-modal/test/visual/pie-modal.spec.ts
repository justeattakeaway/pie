import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import type {
    PropObject, WebComponentPropValues, WebComponentTestInput,
} from '@justeattakeaway/pie-webc-core/src/test-helpers/defs.ts';
import {
    getAllPropCombinations, splitCombinationsByPropertyValue,
} from '@justeattakeaway/pie-webc-core/src/test-helpers/get-all-prop-combos.ts';
import {
    createTestWebComponent,
} from '@justeattakeaway/pie-webc-core/src/test-helpers/rendering.ts';
import {
    WebComponentTestWrapper,
} from '@justeattakeaway/pie-webc-core/src/test-helpers/components/web-component-test-wrapper/WebComponentTestWrapper.ts';
import { PieModal } from '@/index';
import { HEADING_LEVELS } from '@/defs';

const props: PropObject = {
    heading: 'Modal heading',
    headingLevel: Object.values(HEADING_LEVELS),
    isOpen: [true, false],
};

// Renders a <pie-modal> HTML string with the given prop values
const renderTestPieModal = (propVals: WebComponentPropValues) => `<pie-modal isOpen="${propVals.isOpen}" heading="${propVals.heading}" headingLevel="${propVals.headingLevel}">Hello, this is the Pie Modal!</pie-modal>`;

const componentPropsMatrix : WebComponentPropValues[] = getAllPropCombinations(props);
const componentPropsMatrixByIsOpenValues: Record<string, WebComponentPropValues[]> = splitCombinationsByPropertyValue(componentPropsMatrix, 'isOpen');
const componentIsOpenValues: string[] = Object.keys(componentPropsMatrixByIsOpenValues);

// This ensures the component is registered in the DOM for each test
// This is not required if your tests mount the web component directly in the tests
test('Component registered in the DOM', async ({ mount }) => {
    await mount(
        PieModal,
        {
            props: {},
            slots: {},
        },
    );
});

componentIsOpenValues.forEach((isOpen) => test(`Render all prop variations for isOpen: ${isOpen}`, async ({ page, mount }) => {
    await Promise.all(componentPropsMatrixByIsOpenValues[isOpen].map(async (combo: WebComponentPropValues) => {
        const testComponent: WebComponentTestInput = createTestWebComponent(combo, renderTestPieModal);
        const propKeyValues = `heading: ${testComponent.propValues.heading}, headingLevel: ${testComponent.propValues.headingLevel}`;

        await mount(
            WebComponentTestWrapper,
            {
                props: { propKeyValues },
                slots: {
                    default: testComponent.renderedString.trim(),
                },
            },
        );
    }));

    await percySnapshot(page, `PIE Modal - isOpen: ${isOpen}`);
}));
