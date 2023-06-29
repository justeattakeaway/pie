import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';

import { WebComponentTestWrapper } from '@justeattakeaway/pie-webc-core/src/test-helpers/components/web-component-test-wrapper/WebComponentTestWrapper';
import { ModalProps, PieModal } from '@/index';
import { sizes } from '@/defs';

// Renders a <pie-modal> HTML string with the given prop values
const renderTestPieModal = ({
    heading = 'This is a modal heading',
    headingLevel = 'h2',
    size = 'medium',
    isOpen = true,
}: Partial<ModalProps> = {}) => `<pie-modal ${isOpen ? 'isOpen' : ''} heading="${heading}" headingLevel="${headingLevel}" size="${size}"></pie-modal>`;

// Creates a <ol> with a large number of <li> nodes for testing page scrolling
const createTestPageHTML = () : string => `<ol>
        ${'<li>List item</li>'.repeat(200)}
    </ol>`;

// This ensures the component is registered in the DOM for each test
// This is not required if your tests mount the web component directly in the tests
test('Component registered in the DOM', async ({ mount }) => {
    await mount(
        PieModal,
        {
            props: { heading: 'This is a heading' } as ModalProps,
        },
    );
});

test('Should not be able to scroll when modal is open', async ({ page, mount }) => {
    const modalComponent = renderTestPieModal();

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

test('should not render when isOpen = false', async ({ page, mount }) => {
    await mount(PieModal, {
        props: {
            heading: 'This is a modal heading',
            headingLevel: 'h2',
            isOpen: false,
            size: 'medium',
        },
    });

    await percySnapshot(page, 'Modal - isOpen = false');
});

sizes.forEach((size) => {
    test(`should render correctly with size = ${size}`, async ({ page, mount }) => {
        await mount(PieModal, {
            props: {
                heading: 'This is a modal heading',
                headingLevel: 'h2',
                isOpen: true,
                size,
            },
        });

        await percySnapshot(page, `Modal - size = ${size}`);
    });
});
