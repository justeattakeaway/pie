import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import {
    WebComponentTestWrapper,
} from '@justeattakeaway/pie-webc-testing/src/helpers/components/web-component-test-wrapper/WebComponentTestWrapper.ts';
import { PieIconButton } from '@justeattakeaway/pie-icon-button';
import { PieModal } from '@/index';
import { ModalProps, sizes } from '@/defs';

// Renders a <pie-modal> HTML string with the given prop values
const renderTestPieModal = ({
    heading = 'This is a modal heading',
    headingLevel = 'h2',
    size = 'medium',
    isOpen = true,
} : Partial<ModalProps> = {}) => `<pie-modal ${isOpen ? 'isOpen' : ''} heading="${heading}" headingLevel="${headingLevel}" size="${size}"></pie-modal>`;

// Creates a <ol> with a large number of <li> nodes for testing page scrolling
const createTestPageHTML = () => `<ol>
        ${'<li>List item</li>'.repeat(200)}
    </ol>`;

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

    await percySnapshot(page, 'Modal - scroll locking');
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

test.describe('PIE Modal `isDismissible`', () => {
    test.describe('when truthy', () => {
        test('should display a close button within the modal', async ({ mount, page }) => {
            await mount(PieModal, {
                props: {
                    heading: 'This is a modal heading',
                    headingLevel: 'h2',
                    isOpen: true,
                    isDismissible: true,
                },
            });

            await percySnapshot(page, 'Modal with close button displayed - isDismissible: `truthy`');
        });
    });

    test.describe('when falsey', () => {
        test('should NOT display a close button within the modal', async ({ mount, page }) => {
            await mount(PieModal, {
                props: {
                    heading: 'This is a modal heading',
                    headingLevel: 'h2',
                    isOpen: true,
                    isDismissible: false,
                },
            });

            await percySnapshot(page, 'Modal without close button - isDismissible: `falsey`');
        });
    });
});
