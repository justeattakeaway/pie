import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { PieIconButton } from '@justeattakeaway/pie-icon-button';
import { PieButton } from '@justeattakeaway/pie-button';
import { positions } from '@/defs.ts';
import { PieModal } from '@/index';
import { ModalProps, sizes } from '@/defs';

// Mount any components that are used inside pie-modal so that
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
                leadingAction: {
                    text: 'Confirm',
                    variant: 'primary',
                    ariaLabel: 'Confirmation text',
                },
            } as ModalProps,
        });

        await percySnapshot(page, `Modal - size = ${size}`);
    });
});

test.describe('Prop: `isFullWidthBelowMid`', () => {
    test.describe('when true', () => {
        test('should be full width for a modal with size = medium', async ({ page, mount }) => {
            await mount(PieModal, {
                props: {
                    heading: 'This is a modal heading',
                    isFullWidthBelowMid: true,
                    isOpen: true,
                    size: 'medium',
                    leadingAction: {
                        text: 'Confirm',
                        variant: 'primary',
                        ariaLabel: 'Confirmation text',
                    },
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
                    leadingAction: {
                        text: 'Confirm',
                        variant: 'primary',
                        ariaLabel: 'Confirmation text',
                    },
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
                        leadingAction: {
                            text: 'Confirm',
                            variant: 'primary',
                            ariaLabel: 'Confirmation text',
                        },
                    } as ModalProps,
                });

                await percySnapshot(page, `Modal - isFullWidthBelowMid = false, size = ${size}`);
            });
        });
    });
});

test.describe('Prop: `isDismissible`', () => {
    test.describe('when true', () => {
        test('should display a close button within the modal', async ({ mount, page }) => {
            await mount(PieModal, {
                props: {
                    heading: 'This is a modal heading',
                    isDismissible: true,
                    isOpen: true,
                    leadingAction: {
                        text: 'Confirm',
                        variant: 'primary',
                        ariaLabel: 'Confirmation text',
                    },
                } as ModalProps,
            });

            await percySnapshot(page, 'Modal with close button displayed - isDismissible: `true`');
        });
    });

    test.describe('when false', () => {
        test('should not display a close button', async ({ mount, page }) => {
            await mount(PieModal, {
                props: {
                    heading: 'This is a modal heading',
                    isDismissible: false,
                    isOpen: true,
                    leadingAction: {
                        text: 'Confirm',
                        variant: 'primary',
                        ariaLabel: 'Confirmation text',
                    },
                } as ModalProps,
            });

            await percySnapshot(page, 'Modal without close button - isDismissible: `false`');
        });
    });
});

const directions = ['ltr', 'rtl', 'auto'] as const;

test.describe('Prop: `hasBackButton`', () => {
    directions.forEach((dir) => {
        test.describe('when true', () => {
            test(`should display a back button within the modal and dir is ${dir}`, async ({ mount, page }) => {
                await mount(PieModal, {
                    props: {
                        heading: 'This is a modal heading',
                        hasBackButton: true,
                        isOpen: true,
                        dir,
                        leadingAction: {
                            text: 'Confirm',
                            variant: 'primary',
                            ariaLabel: 'Confirmation text',
                        },
                    } as ModalProps,
                });

                await percySnapshot(page, `Modal with back button displayed - hasBackButton: ${true} - dir: ${dir}`);
            });
        });

        test.describe('when false', () => {
            test(`should not display a back button and dir is ${dir}`, async ({ mount, page }) => {
                await mount(PieModal, {
                    props: {
                        heading: 'This is a modal heading',
                        hasBackButton: false,
                        isOpen: true,
                        dir,
                        leadingAction: {
                            text: 'Confirm',
                            variant: 'primary',
                            ariaLabel: 'Confirmation text',
                        },
                    } as ModalProps,
                });

                await percySnapshot(page, `Modal without back button - hasBackButton: ${false} - dir: ${dir}`);
            });
        });
    });
});

test.describe('Prop: `heading`', () => {
    test('should display & render long headings correctly', async ({ page, mount }) => {
        await mount(PieModal, {
            props: {
                heading: 'This is a modal heading but super long and should span multiple lines, hopefully this should never happen on production!',
                isOpen: true,
                size: 'medium',
                hasBackButton: true,
                isDismissible: true,
                leadingAction: {
                    text: 'Confirm',
                    variant: 'primary',
                    ariaLabel: 'Confirmation text',
                },
            } as ModalProps,
        });

        await percySnapshot(page, 'Modal - Long heading');
    });
});

test.describe('Prop: `isLoading`', () => {
    test('should display loading spinner when `isLoading` is true', async ({ mount, page }) => {
        await mount(PieModal, {
            props: {
                heading: 'This is a modal heading',
                hasBackButton: true,
                isDismissible: true,
                isOpen: true,
                isLoading: true,
                leadingAction: {
                    text: 'Confirm',
                    variant: 'primary',
                    ariaLabel: 'Confirmation text',
                },
            } as ModalProps,
        });

        await percySnapshot(page, `Modal displays loading spinner - isLoading: ${true}`);
    });
});

test.describe('Prop: `leadingAction`', () => {
    test.describe('when prop is passed into component', () => {
        test('should display `leadingAction` when props are passed correctly', async ({ mount, page }) => {
            await mount(PieModal, {
                props: {
                    heading: 'This is a modal heading',
                    hasBackButton: true,
                    isDismissible: true,
                    isOpen: true,
                    leadingAction: {
                        text: 'Confirm',
                        variant: 'primary',
                        ariaLabel: 'Confirmation text',
                    },
                } as ModalProps,
            });

            await percySnapshot(page, 'Modal displays leadingAction');
        });
    });

    test.describe('when prop is provided but the optional child properties of `leadingAction` are not provided', () => {
        test('should falls back to defaults', async ({ mount, page }) => {
            await mount(PieModal, {
                props: {
                    heading: 'This is a modal heading',
                    hasBackButton: true,
                    isDismissible: true,
                    isOpen: true,
                    leadingAction: {
                        text: 'Confirm',
                    },
                } as ModalProps,
            });

            await percySnapshot(page, 'Modal falls back to default property `primary`');
        });
    });

    test.describe('when prop is provided but the `text` child property of `leadingAction` is empty', () => {
        test('should not render leadingAction markup', async ({ mount, page }) => {
            await mount(PieModal, {
                props: {
                    heading: 'This is a modal heading',
                    hasBackButton: true,
                    isDismissible: true,
                    isOpen: true,
                    leadingAction: {
                        text: '',
                    },
                } as ModalProps,
            });

            await percySnapshot(page, 'Modal will not render `leadingAction` button when `text` is empty');
        });
    });

    test.describe('when prop is not passed into component', () => {
        test('should not display `leadingAction`', async ({ mount, page }) => {
            await mount(PieModal, {
                props: {
                    heading: 'This is a modal heading',
                    hasBackButton: true,
                    isDismissible: true,
                    isOpen: true,
                } as ModalProps,
            });

            await percySnapshot(page, 'Modal does not display leadingAction');
        });
    });
});

test.describe('`position`', () => {
    positions.forEach((position) => {
        test(`should be positioned in the correct part of the page when position is: ${position}`, async ({ mount, page }) => {
            await mount(PieModal, {
                props: {
                    heading: 'This is a modal heading',
                    isOpen: true,
                    position,
                    leadingAction: {
                        text: 'Confirm',
                        variant: 'primary',
                        ariaLabel: 'Confirmation text',
                    },
                } as ModalProps,
            });

            await percySnapshot(page, `Modal position: ${position}`);
        });
    });
});
