import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';

import { WebComponentTestWrapper } from '@justeattakeaway/pie-webc-core/src/test-helpers/components/web-component-test-wrapper/WebComponentTestWrapper';
import { createTestWebComponent } from '@justeattakeaway/pie-webc-core/src/test-helpers/rendering';
import {
    PropObject,
    WebComponentPropValues,
} from '@justeattakeaway/pie-webc-core/src/test-helpers/defs';
import {
    getAllPropCombinations,
    splitCombinationsByPropertyValue,
} from '@justeattakeaway/pie-webc-core/src/test-helpers/get-all-prop-combos';

import { ModalProps, PieModal } from '@/index';
import { headingLevels, sizes } from '@/defs';

const props: PropObject = {
    heading: 'This is a heading',
    headingLevel: headingLevels,
    isOpen: [true, false],
    size: sizes,
};

// Renders a <pie-modal> HTML string with the given prop values
const renderTestPieModal = ({
    heading, headingLevel, size, isOpen,
}: WebComponentPropValues) => `<pie-modal ${isOpen ? 'isOpen' : ''} heading="${heading}" headingLevel="${headingLevel}" size="${size}"></pie-modal>`;

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

    await percySnapshot(page, `PIE Modal - Size: ${size}`);
}));

// Creates a <ul> with a large number of <li> nodes for testing page scrolling
const createTestPageHTML = () : string => {
    let list = '<ul>';

    for (let i = 0; i < 200; i++) {
        list += `<li>Item ${i}</li>`;
    }

    list += '</ul>';

    return list;
};

test('Should not be able to scroll when modal is open', async ({ page, mount }) => {
    const modalComponent = renderTestPieModal({
        heading: 'I am a Modal!',
        headingLevel: 'h2',
        isOpen: true,
        size: 'medium',
    });

    await mount(
        WebComponentTestWrapper,
        {
            props: {
                pageMode: true,
            },
            slots: {
                component: modalComponent,
                pageMarkup: createTestPageHTML(),
            },
        },
    );

    // Scroll 800 pixels down the page
    await page.mouse.wheel(0, 800);

    await page.waitForTimeout(3000); // The mouse.wheel function causes scrolling, but doesn't wait for the scroll to finish before returning.

    await percySnapshot(page, 'PIE Modal scroll locking');
});
