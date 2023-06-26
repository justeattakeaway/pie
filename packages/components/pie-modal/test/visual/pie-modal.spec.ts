import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import {
    createTestWebComponent,
    getAllPropCombinations,
    getLitPercyOptions,
    PropObject,
    splitCombinationsByPropertyValue,
    WebComponentPropValues,
    WebComponentTestWrapper,
} from '@justeattakeaway/pie-webc-core';

import {
    headingLevels,
    ModalProps,
    PieModal,
    sizes,
} from '@/index';

const props: PropObject = {
    heading: 'This is a heading',
    headingLevel: headingLevels,
    isOpen: [true, false],
    size: sizes,
};

// Renders a <pie-modal> HTML string with the given prop values
const renderTestPieModal = ({
    heading, headingLevel, size, isOpen,
}: WebComponentPropValues) => `<pie-modal heading="${heading}" headingLevel="${headingLevel}" size="${size}" ${isOpen ? 'isOpen' : ''}></pie-modal>`;

const componentPropsMatrix : WebComponentPropValues[] = getAllPropCombinations(props as WebComponentPropValues);
const componentPropsMatrixBySize: Record<string, WebComponentPropValues[]> = splitCombinationsByPropertyValue(componentPropsMatrix, 'size');
const componentSizes: string[] = Object.keys(componentPropsMatrixBySize);

// This ensures the component is registered in the DOM for each test
// This is not required if your tests mount the web component directly in the tests
test('Component registered in the DOM', async ({ mount }) => {
    await mount(
        PieModal,
        {
            props: { heading: 'This is a heading' } as ModalProps,
            slots: {},
        },
    );
});

componentSizes.forEach((size) => test(`Render all prop variations for Size: ${size}`, async ({ page, mount }) => {
    await Promise.all(componentPropsMatrixBySize[size].map(async (combo) => {
        const testComponent = createTestWebComponent(combo, renderTestPieModal);
        const propKeyValues = `isOpen: ${testComponent.propValues.isOpen}`;

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

    await percySnapshot(page, `PIE Modal - Size: ${size}`, getLitPercyOptions());
}));
