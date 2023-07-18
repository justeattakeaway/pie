import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import {
    WebComponentTestWrapper,
} from '@justeattakeaway/pie-webc-testing/src/helpers/components/web-component-test-wrapper/WebComponentTestWrapper.ts';
import { PieIconButton } from '@justeattakeaway/pie-icon-button';
import { PieModal } from '@/index';
import { ModalProps, sizes } from '@/defs';
import { createScrollablePageHTML, renderTestPieModal } from '../helpers/index.ts';

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
                pageMarkup: createScrollablePageHTML(),
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
            isOpen: false,
        },
    });

    await percySnapshot(page, 'Modal - isOpen = false');
});

sizes.forEach((size) => {
    test(`should render correctly with size = ${size}`, async ({ page, mount }) => {
        await mount(PieModal, {
            props: {
                heading: 'This is a modal heading',
                isOpen: true,
                size,
            },
        });

        await percySnapshot(page, `Modal - size = ${size}`);
    });
});

test.describe('`isFullWidthBelowMid`', () => {
    test.describe('when true', () => {
        test('should be full width for a modal with size = medium', async ({ page, mount }) => {
            await mount(PieModal, {
                props: {
                    heading: 'This is a modal heading',
                    isFullWidthBelowMid: true,
                    isOpen: true,
                    size: 'medium',
                },
            });

            await percySnapshot(page, 'Modal - isFullWidthBelowMid = true, size = medium');
        });

        test('should not be full width when size = small', async ({ page, mount }) => {
            await mount(PieModal, {
                props: {
                    heading: 'This is a modal heading',
                    isFullWidthBelowMid: true,
                    isOpen: true,
                    size: 'small',
                },
            });

            await percySnapshot(page, 'Modal - isFullWidthBelowMid = true, size = small');
        });
    });

    test.describe('when false', () => {
        (['small', 'medium'] as Array<ModalProps['size']>)
        .forEach((size) => {
            test(`should not be full width for a modal with size = ${size}`, async ({ page, mount }) => {
                await mount(PieModal, {
                    props: {
                        heading: 'This is a modal heading',
                        isFullWidthBelowMid: false,
                        isOpen: true,
                        size,
                    },
                });

                await percySnapshot(page, `Modal - isFullWidthBelowMid = false, size = ${size}`);
            });
        });
    });
});

test.describe('`isDismissible`', () => {
    test.describe('when true', () => {
        test('should display a close button within the modal', async ({ mount, page }) => {
            await mount(PieModal, {
                props: {
                    heading: 'This is a modal heading',
                    isDismissible: true,
                    isOpen: true,
                },
            });

            await percySnapshot(page, 'Modal with close button displayed - isDismissible: `true`');
        });
    });

    test.describe('when false', () => {
        test('should NOT display a close button', async ({ mount, page }) => {
            await mount(PieModal, {
                props: {
                    heading: 'This is a modal heading',
                    isDismissible: false,
                    isOpen: true,
                },
            });

            await percySnapshot(page, 'Modal without close button - isDismissible: `false`');
        });
    });
});

const directions = ['ltr', 'rtl', 'auto'] as const;

test.describe('`hasBackButton`', () => {
    directions.forEach((dir) => {
        test.describe('when true', () => {
            test(`should display a back button within the modal and dir is ${dir}`, async ({ mount, page }) => {
                await mount(PieModal, {
                    props: {
                        heading: 'This is a modal heading',
                        hasBackButton: true,
                        isOpen: true,
                        dir,
                    },
                });

                await percySnapshot(page, `Modal with back button displayed - hasBackButton: ${true} - dir: ${dir}`);
            });
        });

        test.describe('when false', () => {
            test(`should NOT display a back button and dir is ${dir}`, async ({ mount, page }) => {
                await mount(PieModal, {
                    props: {
                        heading: 'This is a modal heading',
                        hasBackButton: false,
                        isOpen: true,
                        dir,
                    },
                });

                await percySnapshot(page, `Modal without back button - hasBackButton: ${false} - dir: ${dir}`);
            });
        });
    });
});

test('long heading renders correctly', async ({ page, mount }) => {
    await mount(PieModal, {
        props: {
            heading: 'This is a modal heading but super long and should span multiple lines, hopefully this should never happen on production!',
            isOpen: true,
            size: 'medium',
            hasBackButton: true,
            isDismissible: true,
        },
    });

    await percySnapshot(page, 'Modal - Long heading');
});
