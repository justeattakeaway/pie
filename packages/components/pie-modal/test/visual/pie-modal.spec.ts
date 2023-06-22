import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { getLitPercyOptions } from '@justeattakeaway/pie-webc-core/src/test-helpers/percy-lit-options.ts';
import {
    WebComponentTestWrapper,
} from '@justeattakeaway/pie-webc-core/src/test-helpers/components/web-component-test-wrapper/WebComponentTestWrapper.ts';
import { WebComponentPropValues } from '@justeattakeaway/pie-webc-core/src/test-helpers/defs';
import { PieModal } from '@/index';

const propIsOpenValues = [{ heading: 'Modal Heading', isOpen: true }, { isOpen: false }];

propIsOpenValues.forEach((props) => test(`should render Modal correctly when prop isOpen is set to ${props.isOpen}`, async ({ page, mount }) => {
    await mount(
        PieModal,
        {
            props,
            slots: {
                default: 'Hello, this is the Pie Modal!',
            },
        },
    );

    await percySnapshot(page, `PIE Modal when isOpen is set to ${props.isOpen}`, getLitPercyOptions());
}));

const renderTestPieModal = (propVals: WebComponentPropValues) => `<pie-modal isOpen="${propVals.isOpen}" heading="${propVals.heading}" headingLevel="${propVals.headingLevel}"></pie-modal>`;

// Creates a <ul> with a large number of <li> nodes for testing page scrolling
const createTestPageHTML = () : string => {
    let list = '<ul>';

    for (let i = 0; i < 200; i++) {
        list += `<li>Item ${i}</li>`;
    }

    list += '</ul>';

    return list;
};

test('Should scroll lock when modal is open', async ({ page, mount }) => {
    const props: WebComponentPropValues = {
        heading: 'I am a Modal!',
        headingLevel: 'h2',
        isOpen: true,
    };

    const modalComponent = renderTestPieModal(props);

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

    await percySnapshot(page, 'PIE Modal scroll locks when open', getLitPercyOptions());
});
