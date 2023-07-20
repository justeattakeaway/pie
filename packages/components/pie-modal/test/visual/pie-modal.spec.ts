import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { PieIconButton } from '@justeattakeaway/pie-icon-button';
import { PieButton } from '@justeattakeaway/pie-button';
import { positions } from '../../src/defs.ts';
import { PieModal } from '@/index';
import { ModalProps, sizes } from '@/defs';

// Mount any components that are used inside of pie-modal so that
// they have been registered with the browser before the tests run.
// There is likely a nicer way to do this but this will temporarily
// unblock tests.
test.beforeEach(async ({ mount }) => {
    await (await mount(PieButton)).unmount();
    await (await mount(PieIconButton)).unmount();
});

sizes.forEach((size) => {
    test(`should render correctly with size = ${size}`, async ({ page, mount }) => {
        await mount(PieModal, {
            props: {
                heading: 'This is a modal heading',
                isOpen: true,
                size,
            } as ModalProps,
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
                } as ModalProps,
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
                } as ModalProps,
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
                    } as ModalProps,
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
                } as ModalProps,
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
                } as ModalProps,
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
                    } as ModalProps,
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
                    } as ModalProps,
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

test('Should display loading spinner when `isLoading` is true', async ({ mount, page }) => {
    await mount(PieModal, {
        props: {
            heading: 'This is a modal heading',
            hasBackButton: true,
            isDismissible: true,
            isOpen: true,
            isLoading: true,
        } as ModalProps,
    });

    await percySnapshot(page, `Modal displays loading spinner - isLoading: ${true}`);
});

test.describe('`position`', () => {
    positions.forEach((position) => {
        test(`should be positioned in the correct part of the page when position is: ${position}`, async ({ mount, page }) => {
            await mount(PieModal, {
                props: {
                    heading: 'This is a modal heading',
                    isOpen: true,
                    position,
                } as ModalProps,
            });

            await percySnapshot(page, `Modal position: ${position}`);
        });
    });
});
