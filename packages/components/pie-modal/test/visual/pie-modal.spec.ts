import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import {
    WebComponentTestWrapper,
} from '@justeattakeaway/pie-webc-core/src/test-helpers/components/web-component-test-wrapper/WebComponentTestWrapper.ts';
import { WebComponentPropValues } from '@justeattakeaway/pie-webc-core/src/test-helpers/defs';
import { PieIconButton } from '@justeattakeaway/pie-icon-button';
import { PieModal } from '@/index';

const propIsOpenValues = [{ heading: 'Modal Heading', isOpen: true }, { isOpen: false }];

// Mount any components that are used inside of pie-modal so that
// they have been registered with the browser before the tests run.
// There is likely a nicer way to do this but this will temporarily
// unblock tests.
test.beforeEach(async ({ page, mount }) => {
    await mount(
        PieIconButton,
        {},
    );

    // Removing the element so it's not present in the tests (but is still registered in the DOM)
    await page.evaluate(() => {
        const element : Element | null = document.querySelector('pie-icon-button');
        element?.remove();
    });
});

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

    await percySnapshot(page, `PIE Modal when isOpen is set to ${props.isOpen}`);
}));

const renderTestPieModal = (propVals: WebComponentPropValues) => `<pie-modal ${propVals.isOpen ? 'isOpen' : ''} heading="${propVals.heading}" headingLevel="${propVals.headingLevel}"></pie-modal>`;

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

    // Scroll 800 pixels down the page
    await page.mouse.wheel(0, 800);

    await page.waitForTimeout(3000); // The mouse.wheel function causes scrolling, but doesn't wait for the scroll to finish before returning.

    await percySnapshot(page, 'PIE Modal scroll locking');
});
