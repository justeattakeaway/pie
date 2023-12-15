import { test } from '@sand4rt/experimental-ct-web';
import { percyWidths } from '@justeattakeaway/pie-webc-testing/src/percy/breakpoints.ts';
import percySnapshot from '@percy/playwright';
import { positions } from '@/defs.ts';
import { PieModal } from '@/index';
import { ModalProps, sizes } from '@/defs';

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

        // Follow up to remove in Jan
        await page.waitForTimeout(5000);

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

            // Follow up to remove in Jan
            await page.waitForTimeout(5000);

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

            // Follow up to remove in Jan
            await page.waitForTimeout(5000);

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

                    // Follow up to remove in Jan
                    await page.waitForTimeout(5000);

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

            // Follow up to remove in Jan
            await page.waitForTimeout(5000);

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

            // Follow up to remove in Jan
            await page.waitForTimeout(5000);

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
                    } as PieModal,
                });

                // Follow up to remove in Jan
                await page.waitForTimeout(5000);

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
                    } as PieModal,
                });

                // Follow up to remove in Jan
                await page.waitForTimeout(5000);

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

        // Follow up to remove in Jan
        await page.waitForTimeout(5000);

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

        // Follow up to remove in Jan
        await page.waitForTimeout(5000);

        await percySnapshot(page, `Modal displays loading spinner - isLoading: ${true}`);
    });
});

test.describe('Prop: `leadingAction`', () => {
    test.describe('when prop is passed into component', () => {
        test('should display `leadingAction` when props are passed correctly', async ({ mount, page }) => {
            await mount(PieModal, {
                props: {
                    heading: 'This is a modal heading',
                    isOpen: true,
                    leadingAction: {
                        text: 'Confirm',
                        variant: 'primary',
                        ariaLabel: 'Confirmation text',
                    },
                } as ModalProps,
            });

            // Follow up to remove in Jan
            await page.waitForTimeout(5000);

            await percySnapshot(page, 'Modal displays leadingAction');
        });
    });

    test.describe('when prop is provided but the optional child properties of `leadingAction` are not provided', () => {
        test('should falls back to defaults', async ({ mount, page }) => {
            await mount(PieModal, {
                props: {
                    heading: 'This is a modal heading',
                    isOpen: true,
                    leadingAction: {
                        text: 'Confirm',
                    },
                } as ModalProps,
            });

            // Follow up to remove in Jan
            await page.waitForTimeout(5000);

            await percySnapshot(page, 'Modal falls back to default property `primary`');
        });
    });

    test.describe('when prop is provided but the `text` child property of `leadingAction` is empty', () => {
        test('should not render leadingAction markup', async ({ mount, page }) => {
            await mount(PieModal, {
                props: {
                    heading: 'This is a modal heading',
                    isOpen: true,
                    leadingAction: {
                        text: '',
                    },
                } as ModalProps,
            });

            // Follow up to remove in Jan
            await page.waitForTimeout(5000);

            await percySnapshot(page, 'Modal will not render `leadingAction` button when `text` is empty');
        });
    });

    test.describe('when prop is not passed into component', () => {
        test('should not display `leadingAction`', async ({ mount, page }) => {
            await mount(PieModal, {
                props: {
                    heading: 'This is a modal heading',
                    isOpen: true,
                } as ModalProps,
            });

            // Follow up to remove in Jan
            await page.waitForTimeout(5000);

            await percySnapshot(page, 'Modal does not display leadingAction');
        });
    });
});

test.describe('Prop: `supportingAction`', () => {
    test.describe('when `leadingAction` prop exists', () => {
        test('should display `supportingAction` correctly', async ({ mount, page }) => {
            await mount(PieModal, {
                props: {
                    heading: 'This is a modal heading',
                    isOpen: true,
                    leadingAction: {
                        text: 'Confirm',
                        variant: 'primary',
                        ariaLabel: 'Confirmation text',
                    },
                    supportingAction: {
                        text: 'Cancel',
                        variant: 'ghost',
                        ariaLabel: 'Cancellation text',
                    },
                } as ModalProps,
            });

            // Follow up to remove in Jan
            await page.waitForTimeout(5000);

            await percySnapshot(page, 'Modal displays supportingAction alongside leadingAction');
        });

        test.describe('when prop is provided but the optional child properties of `supportingAction` are not provided', () => {
            test('should fall back to default property', async ({ mount, page }) => {
                await mount(PieModal, {
                    props: {
                        heading: 'This is a modal heading',
                        isOpen: true,
                        leadingAction: {
                            text: 'Confirm',
                            variant: 'primary',
                            ariaLabel: 'Confirmation text',
                        },
                        supportingAction: {
                            text: 'Cancel',
                            ariaLabel: 'Confirmation text',
                        },
                    } as ModalProps,
                });

                // Follow up to remove in Jan
                await page.waitForTimeout(5000);

                await percySnapshot(page, 'Modal falls back to default variant property `ghost`');
            });
        });

        test.describe('when `supportingAction` prop is provided but the `text` child property of `supportingAction` is empty', () => {
            test('should not render supportingAction markup', async ({ mount, page }) => {
                await mount(PieModal, {
                    props: {
                        heading: 'This is a modal heading',
                        isOpen: true,
                        leadingAction: {
                            text: 'Confirm',
                            variant: 'primary',
                            ariaLabel: 'Confirmation text',
                        },
                        supportingAction: {
                            text: '',
                        },
                    } as ModalProps,
                });

                // Follow up to remove in Jan
                await page.waitForTimeout(5000);

                await percySnapshot(page, 'Modal will not render `supportingAction` button when `text` is empty');
            });
        });

        test.describe('when `supportingAction` is not supplied', () => {
            test('should not render supportingAction markup', async ({ mount, page }) => {
                await mount(PieModal, {
                    props: {
                        heading: 'This is a modal heading',
                        isOpen: true,
                        leadingAction: {
                            text: 'Confirm',
                            variant: 'primary',
                            ariaLabel: 'Confirmation text',
                        },
                    } as ModalProps,
                });

                // Follow up to remove in Jan
                await page.waitForTimeout(5000);

                await percySnapshot(page, 'Modal will not render `supportingAction` when it is not supplied');
            });
        });
    });

    test.describe('when `leadingAction` prop does not exist and `supportingAction` is supplied', () => {
        test('should not render supportingAction markup', async ({ mount, page }) => {
            await mount(PieModal, {
                props: {
                    heading: 'This is a modal heading',
                    isOpen: true,
                    supportingAction: {
                        text: 'Cancel',
                        variant: 'ghost',
                        ariaLabel: 'Cancellation text',
                    },
                } as ModalProps,
            });

            // Follow up to remove in Jan
            await page.waitForTimeout(5000);

            await percySnapshot(page, 'Modal will not render `supportingAction` when `leadingAction` is not supplied');
        });
    });
});

test.describe('Prop: `position`', () => {
    positions.forEach((position) => {
        test.describe(`should be positioned in the correct part of the page when position is ${position},`, () => {
            sizes.forEach((size) => {
                test.describe(`size is ${size},`, () => {
                    [true, false].forEach((isFullWidthBelowMid) => {
                        test(`and isFullWidthBelowMid is ${isFullWidthBelowMid}`, async ({ mount, page }) => {
                            await mount(PieModal, {
                                props: {
                                    heading: 'This is a modal heading',
                                    isOpen: true,
                                    isFullWidthBelowMid,
                                    position,
                                    size,
                                    leadingAction: {
                                        text: 'Confirm',
                                        variant: 'primary',
                                        ariaLabel: 'Confirmation text',
                                    },
                                } as ModalProps,
                            });

                            // Follow up to remove in Jan
                            await page.waitForTimeout(5000);

                            await percySnapshot(page, `Modal position: ${position}, size: ${size}, isFullWidthBelowMid: ${isFullWidthBelowMid}`);
                        });
                    });
                });
            });
        });
    });
});

test.describe('Prop: `isFooterPinned`', () => {
    [true, false].forEach((isFooterPinned) => {
        test(`when isFooterPinned is: ${isFooterPinned}`, async ({ mount, page }) => {
            await mount(PieModal, {
                props: {
                    heading: 'This is a modal heading',
                    isFooterPinned,
                    isOpen: true,
                    leadingAction: {
                        text: 'Confirm',
                        variant: 'primary',
                        ariaLabel: 'Confirmation text',
                    },
                } as ModalProps,
                slots: {
                    default: `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti fugit id exercitationem repellendus in magni
                    quis obcaecati laboriosam est vero, perspiciatis ratione porro dolore repudiandae ea numquam! Ipsa, fugiat aut.Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Deleniti fugit id exercitationem repellendus in magni quis obcaecati laboriosam est vero,
                    perspiciatis ratione porro dolore repudiandae ea numquam! Ipsa, fugiat aut.Lorem ipsum dolor sit amet consectetur adipisicing elit.

                    Deleniti fugit id exercitationem repellendus in magni quis obcaecati laboriosam est vero, perspiciatis ratione porro dolore
                    repudiandae ea numquam! Ipsa, fugiat aut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti fugit id exercitationem repellendus
                    in magni quis obcaecati laboriosam est vero, perspiciatis ratione porro dolore repudiandae ea numquam! Ipsa, fugiat aut.Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Deleniti fugit id exercitationem repellendus in magni quis obcaecati laboriosam est vero, perspiciatis ratione
                    porro dolore repudiandae ea numquam! Ipsa, fugiat aut.Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti fugit id
                    exercitationem repellendus in magni quis obcaecati laboriosam est vero,
                    perspiciatis ratione porro dolore repudiandae ea numquam! Ipsa, fugiat aut.

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti fugit id exercitationem repellendus in magni
                    quis obcaecati laboriosam est vero, perspiciatis ratione porro dolore repudiandae ea numquam! Ipsa, fugiat aut.Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Deleniti fugit id exercitationem repellendus in magni quis obcaecati laboriosam est vero,
                    perspiciatis ratione porro dolore repudiandae ea numquam! Ipsa, fugiat aut.Lorem ipsum dolor sit amet consectetur adipisicing elit.

                    Deleniti fugit id exercitationem repellendus in magni quis obcaecati laboriosam est vero, perspiciatis ratione porro dolore
                    repudiandae ea numquam! Ipsa, fugiat aut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti fugit id exercitationem repellendus
                    in magni quis obcaecati laboriosam est vero, perspiciatis ratione porro dolore repudiandae ea numquam! Ipsa, fugiat aut.Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Deleniti fugit id exercitationem repellendus in magni quis obcaecati laboriosam est vero, perspiciatis ratione
                    porro dolore repudiandae ea numquam! Ipsa, fugiat aut.Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti fugit id
                    exercitationem repellendus in magni quis obcaecati laboriosam est vero,
                    perspiciatis ratione porro dolore repudiandae ea numquam! Ipsa, fugiat aut.</p>`,
                },
            });

            // Follow up to remove in Jan
            await page.waitForTimeout(5000);

            await percySnapshot(page, `Modal isFooterPinned: ${isFooterPinned}`);
        });

        (['medium', 'large'] as Array<ModalProps['size']>).forEach((size) => {
            test(`when modal is fullscreen with size: ${size} and isFooterPinned: ${isFooterPinned}`, async ({ mount, page }) => {
                await mount(PieModal, {
                    props: {
                        heading: 'This is a modal heading',
                        isFooterPinned,
                        isOpen: true,
                        leadingAction: {
                            text: 'Confirm',
                            variant: 'primary',
                            ariaLabel: 'Confirmation text',
                        },
                        size,
                        isFullWidthBelowMid: size === 'medium',
                    } as ModalProps,
                    slots: {
                        default: `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti fugit id exercitationem repellendus in magni
                        quis obcaecati laboriosam est vero, perspiciatis ratione porro dolore repudiandae ea numquam! Ipsa, fugiat aut.Lorem ipsum dolor
                        sit amet consectetur adipisicing elit. Deleniti fugit id exercitationem repellendus in magni quis obcaecati laboriosam est vero,
                        perspiciatis ratione porro dolore repudiandae ea numquam! Ipsa, fugiat aut.</p>`,
                    },
                });

                // Follow up to remove in Jan
                await page.waitForTimeout(5000);

                await percySnapshot(page, `Modal isFooterPinned: ${isFooterPinned}, fullscreen with size: ${size}`, percyWidths);
            });
        });
    });
});

test.describe('Prop: `hasStackedActions`', () => {
    test.describe('when true', () => {
        (['small', 'medium', 'large'] as Array<ModalProps['size']>)
            .forEach((size) => {
                test(`should display actions full width (at narrow viewports – with leading action on top) for a modal with size = ${size}`, async ({ page, mount }) => {
                    await mount(PieModal, {
                        props: {
                            heading: 'This is a modal heading',
                            hasStackedActions: true,
                            isOpen: true,
                            size,
                            leadingAction: {
                                text: 'Confirm',
                                variant: 'primary',
                                ariaLabel: 'Confirmation text',
                            },
                            supportingAction: {
                                text: 'Cancel',
                                variant: 'ghost',
                                ariaLabel: 'Cancel and close modal',
                            },
                        } as ModalProps,
                    });

                    // Follow up to remove in Jan
                    await page.waitForTimeout(5000);

                    await percySnapshot(page, `Modal - hasStackedActions = true, size = ${size}`);
                });
            });
    });
});
