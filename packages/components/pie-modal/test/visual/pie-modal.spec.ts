import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { PieIconButton } from '@justeattakeaway/pie-icon-button';
import { PieModal } from '@/index';
import { ModalProps, sizes } from '@/defs';

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
