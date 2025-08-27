import { test, expect } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { type ModalProps, sizes, positions } from '../../src/defs.ts';
import { ModalDefaultPage } from '../helpers/page-object/pie-modal-default.page.ts';
import { ModalLargeTextContentPage } from '../helpers/page-object/pie-modal-large-text-content.page.ts';
import { ModalCustomFooterPage } from '../helpers/page-object/pie-modal-custom-footer.page.ts';
import { ModalCustomHeaderContentPage } from '../helpers/page-object/pie-modal-custom-header-content.page.ts';

const sharedProps: ModalProps = {
    heading: 'This is a modal heading',
};

sizes.forEach((size) => {
    test(`should render correctly with size = ${size}`, async ({ page }) => {
        const modalDefaultPage = new ModalDefaultPage(page);
        const props: ModalProps = {
            ...sharedProps,
            hasStackedActions: false,
            size,
            leadingAction: {
                text: 'Confirm',
            },
        };
        await modalDefaultPage.load(props);
        await expect.soft(modalDefaultPage.modalComponent.componentLocator).toBeVisible();

        await percySnapshot(page, `Modal - size = ${size}`);
    });
});

test.describe('Prop: `isFullWidthBelowMid`', () => {
    test.describe('when true', () => {
        test('should be full width for a modal with size = medium', async ({ page }) => {
            const modalDefaultPage = new ModalDefaultPage(page);
            const props: ModalProps = {
                ...sharedProps,
                isFullWidthBelowMid: true,
                size: 'medium',
                isDismissible: false,
                leadingAction: {
                    text: 'Confirm',
                },
            };
            await modalDefaultPage.load(props);

            await expect.soft(modalDefaultPage.modalComponent.componentLocator).toBeVisible();

            await percySnapshot(page, 'Modal - isFullWidthBelowMid = true, size = medium');
        });

        test('should not be full width when size = small', async ({ page }) => {
            const modalDefaultPage = new ModalDefaultPage(page);
            const props: ModalProps = {
                ...sharedProps,
                isFullWidthBelowMid: true,
                size: 'small',
                leadingAction: {
                    text: 'Confirm',
                },
            };
            await modalDefaultPage.load(props);

            await expect.soft(modalDefaultPage.modalComponent.componentLocator).toBeVisible();

            await percySnapshot(page, 'Modal - isFullWidthBelowMid = true, size = small');
        });
    });

    test.describe('when false', () => {
        (['small', 'medium'] as Array<ModalProps['size']>)
      .forEach((size) => {
          test(`should not be full width for a modal with size = ${size}`, async ({ page }) => {
              const modalDefaultPage = new ModalDefaultPage(page);
              const props: ModalProps = {
                  ...sharedProps,
                  isFullWidthBelowMid: false,
                  size,
                  leadingAction: {
                      text: 'Confirm',
                  },
              };

              await modalDefaultPage.load(props);

              await expect.soft(modalDefaultPage.modalComponent.componentLocator).toBeVisible();

              await percySnapshot(page, `Modal - isFullWidthBelowMid = false, size = ${size}`);
          });
      });
    });
});

test.describe('Prop: `isDismissible`', () => {
    test.describe('when true', () => {
        test('should display a close button within the modal', async ({ page }) => {
            const modalDefaultPage = new ModalDefaultPage(page);
            const props: ModalProps = {
                ...sharedProps,
                isDismissible: true,
                leadingAction: {
                    text: 'Confirm',
                },
            };

            await modalDefaultPage.load(props);

            await expect.soft(modalDefaultPage.modalComponent.componentLocator).toBeVisible();

            await percySnapshot(page, 'Modal with close button displayed - isDismissible: `true`');
        });
    });

    test.describe('when false', () => {
        test('should not display a close button', async ({ page }) => {
            const modalDefaultPage = new ModalDefaultPage(page);
            const props: ModalProps = {
                ...sharedProps,
                isDismissible: false,
                leadingAction: {
                    text: 'Confirm',
                },
            };

            await modalDefaultPage.load(props);

            await expect.soft(modalDefaultPage.modalComponent.componentLocator).toBeVisible();

            await percySnapshot(page, 'Modal without close button - isDismissible: `false`');
        });
    });
});

const directions = ['ltr', 'rtl', 'auto'] as const;

test.describe('Prop: `hasBackButton`', () => {
    directions.forEach((dir) => {
        test.describe('when true', () => {
            test(`should display a back button within the modal and dir is ${dir}`, async ({ page }) => {
                const modalDefaultPage = new ModalDefaultPage(page);
                const props: ModalProps = {
                    ...sharedProps,
                    hasBackButton: true,
                    leadingAction: {
                        text: 'Confirm',
                    },
                };

                await modalDefaultPage.load(props, { writingDirection: dir });

                await expect.soft(modalDefaultPage.modalComponent.componentLocator).toBeVisible();

                await percySnapshot(page, `Modal with back button displayed - hasBackButton: ${true} - dir: ${dir}`);
            });
        });

        test.describe('when false', () => {
            test(`should not display a back button and dir is ${dir}`, async ({ page }) => {
                const modalDefaultPage = new ModalDefaultPage(page);
                const props: ModalProps = {
                    ...sharedProps,
                    hasBackButton: false,
                    leadingAction: {
                        text: 'Confirm',
                    },
                };

                await modalDefaultPage.load(props, { writingDirection: dir });

                await expect.soft(modalDefaultPage.modalComponent.componentLocator).toBeVisible();

                await percySnapshot(page, `Modal without back button - hasBackButton: ${false} - dir: ${dir}`);
            });
        });
    });
});

test.describe('Prop: `heading`', () => {
    test('should display & render long headings correctly', async ({ page }) => {
        const modalDefaultPage = new ModalDefaultPage(page);
        const props: ModalProps = {
            heading: 'This is a modal heading but super long and should span multiple lines - hopefully this should never happen on production',
            hasBackButton: true,
            isDismissible: true,
            leadingAction: {
                text: 'Confirm',
            },
        };

        await modalDefaultPage.load({ ...props });

        await expect.soft(modalDefaultPage.modalComponent.componentLocator).toBeVisible();

        await percySnapshot(page, 'Modal - Long heading');
    });
});

test.describe('Prop: `isLoading`', () => {
    test('should display loading spinner when `isLoading` is true', async ({ page }) => {
        const modalDefaultPage = new ModalDefaultPage(page);
        const props: ModalProps = {
            ...sharedProps,
            hasBackButton: true,
            isDismissible: true,
            isLoading: true,
            leadingAction: {
                text: 'Confirm',
            },
        };

        await modalDefaultPage.load(props);

        await expect.soft(modalDefaultPage.modalComponent.componentLocator).toBeVisible();

        await percySnapshot(page, `Modal displays loading spinner - isLoading: ${true}`);
    });
});

test.describe('Prop: `leadingAction`', () => {
    test.describe('when prop is passed into component', () => {
        test('should display leading action button', async ({ page }) => {
            const modalDefaultPage = new ModalDefaultPage(page);
            const props: ModalProps = {
                ...sharedProps,
                leadingAction: {
                    text: 'Confirm',
                },
            };

            await modalDefaultPage.load(props);

            await expect.soft(modalDefaultPage.modalComponent.componentLocator).toBeVisible();

            await percySnapshot(page, 'Modal displays leadingAction');
        });
    });

    test.describe('when `leadingAction.variant` is set to "destructive"', () => {
        test('should show a "destructive" button', async ({ page }) => {
            const modalDefaultPage = new ModalDefaultPage(page);
            const props: ModalProps = {
                ...sharedProps,
                leadingAction: {
                    text: 'Confirm',
                    variant: 'destructive',
                },
            };

            await modalDefaultPage.load(props);

            await expect.soft(modalDefaultPage.modalComponent.componentLocator).toBeVisible();

            await percySnapshot(page, 'Modal leadingAction variant can be overridden');
        });
    });

    test.describe('when prop is provided empty', () => {
        test('should not render leading action markup', async ({ page }) => {
            const modalDefaultPage = new ModalDefaultPage(page);
            const props: ModalProps = {
                ...sharedProps,
                leadingAction: {
                    text: '',
                },
            };

            await modalDefaultPage.load(props);

            await expect.soft(modalDefaultPage.modalComponent.componentLocator).toBeVisible();

            await percySnapshot(page, 'Modal will not render `leadingAction` button when `text` is empty');
        });
    });

    test.describe('when prop is not passed into component', () => {
        test('should not display leading action or footer', async ({ page }) => {
            const modalDefaultPage = new ModalDefaultPage(page);
            const props: ModalProps = {
                ...sharedProps,
                isOpen: true,
                leadingAction: undefined,
            };

            await modalDefaultPage.load(props);

            await expect.soft(modalDefaultPage.modalComponent.componentLocator).toBeVisible();
            await expect.soft(modalDefaultPage.modalComponent.footerLocator).not.toBeVisible();

            await percySnapshot(page, 'Modal does not display leadingAction');
        });
    });
});

test.describe('Prop: `supportingAction`', () => {
    test.describe('when `leadingAction` prop exists', () => {
        test.describe('and `supportingAction.text` is provided but `supportingAction.variant` is not', () => {
            test('should fall back to default variant', async ({ page }) => {
                const modalDefaultPage = new ModalDefaultPage(page);
                const props: ModalProps = {
                    ...sharedProps,
                    leadingAction: {
                        text: 'Confirm',
                    },
                    supportingAction: {
                        text: 'Cancel',
                    },
                };

                await modalDefaultPage.load(props);

                await expect.soft(modalDefaultPage.modalComponent.componentLocator).toBeVisible();

                await percySnapshot(page, 'Modal falls back to default variant property `ghost`');
            });
        });

        test.describe('and `supportingAction.text` is provided but empty', () => {
            test('should not render supporting action markup', async ({ page }) => {
                const modalDefaultPage = new ModalDefaultPage(page);
                const props: ModalProps = {
                    ...sharedProps,
                    leadingAction: {
                        text: 'Confirm',
                    },
                    supportingAction: {
                        text: '',
                    },
                };

                await modalDefaultPage.load(props);

                await expect.soft(modalDefaultPage.modalComponent.componentLocator).toBeVisible();

                await percySnapshot(page, 'Modal will not render `supportingAction` button when `text` is empty');
            });
        });

        test.describe('and `supportingAction.text` is not provided', () => {
            test('should not render supporting action markup', async ({ page }) => {
                const modalDefaultPage = new ModalDefaultPage(page);
                const props: ModalProps = {
                    ...sharedProps,
                    leadingAction: {
                        text: 'Confirm',
                    },
                };

                await modalDefaultPage.load(props);

                await expect.soft(modalDefaultPage.modalComponent.componentLocator).toBeVisible();

                await percySnapshot(page, 'Modal will not render `supportingAction` when it is not supplied');
            });
        });
    });
});

test.describe('when `supportingAction.text` is supplied but `leadingAction.text` is not', () => {
    test('should not render supporting action markup', async ({ page }) => {
        const modalDefaultPage = new ModalDefaultPage(page);
        const props: ModalProps = {
            ...sharedProps,
            supportingAction: {
                text: 'Cancel',
            },
        };

        await modalDefaultPage.load(props);

        await expect.soft(modalDefaultPage.modalComponent.componentLocator).toBeVisible();

        await percySnapshot(page, 'Modal will not render `supportingAction` when `leadingAction` is not supplied');
    });
});

test.describe('Prop: `position`', () => {
    positions.forEach((position) => {
        test.describe(`should be positioned in the correct part of the page when position is ${position},`, () => {
            sizes.forEach((size) => {
                test.describe(`size is ${size},`, () => {
                    [true, false].forEach((isFullWidthBelowMid) => {
                        test(`and isFullWidthBelowMid is ${isFullWidthBelowMid}`, async ({ page }) => {
                            const modalDefaultPage = new ModalDefaultPage(page);
                            const props: ModalProps = {
                                ...sharedProps,
                                isFullWidthBelowMid,
                                position,
                                size,
                                leadingAction: {
                                    text: 'Confirm',
                                },
                            };

                            await modalDefaultPage.load(props);

                            await expect.soft(modalDefaultPage.modalComponent.componentLocator).toBeVisible();

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
        test(`when isFooterPinned is: ${isFooterPinned}`, async ({ page }) => {
            const modalLargeTextContentPage = new ModalLargeTextContentPage(page);
            const props: ModalProps = {
                ...sharedProps,
                leadingAction: {
                    text: 'Confirm',
                    variant: 'primary',
                },
            };

            await modalLargeTextContentPage.load(props);

            // when !isFooterPinned, the Storybook boolean control has no effect so we need to remove the attribute from the DOM manually.
            if (!isFooterPinned) {
                await page.evaluate(() => {
                    document.querySelector('pie-modal')?.removeAttribute('isfooterpinned');
                });
            }

            await expect.soft(modalLargeTextContentPage.modalComponent.componentLocator).toBeVisible();

            await percySnapshot(page, `Modal isFooterPinned: ${isFooterPinned}`);
        });

        (['medium', 'large'] as Array<ModalProps['size']>).forEach((size) => {
            test(`when modal is fullscreen with size: ${size} and isFooterPinned: ${isFooterPinned}`, async ({ page }) => {
                const modalLargeTextContentPage = new ModalLargeTextContentPage(page);
                const props: ModalProps = {
                    ...sharedProps,
                    leadingAction: {
                        text: 'Confirm',
                    },
                    size,
                    isFullWidthBelowMid: size === 'medium',
                };

                await modalLargeTextContentPage.load(props);

                if (!isFooterPinned) {
                    await page.evaluate(() => {
                        document.querySelector('pie-modal')?.removeAttribute('isfooterpinned');
                    });
                }

                await expect.soft(modalLargeTextContentPage.modalComponent.componentLocator).toBeVisible();

                await percySnapshot(page, `Modal isFooterPinned: ${isFooterPinned}, fullscreen with size: ${size}`);
            });
        });
    });
});

test.describe('Prop: `hasStackedActions`', () => {
    test.describe('when true', () => {
        sizes
      .forEach((size) => {
          test(`should display actions full width (at narrow viewports – with leading action on top) for a modal with size = ${size}`, async ({ page }) => {
              const modalDefaultPage = new ModalDefaultPage(page);
              const props: ModalProps = {
                  ...sharedProps,
                  hasStackedActions: true,
                  size,
                  leadingAction: {
                      text: 'Confirm',
                  },
                  supportingAction: {
                      text: 'Cancel',
                  },
              };

              await modalDefaultPage.load(props);

              await expect.soft(modalDefaultPage.modalComponent.componentLocator).toBeVisible();

              await percySnapshot(page, `Modal - hasStackedActions = true, size = ${size}`);
          });
      });
    });
});

test.describe('Slot: `footer`', () => {
    test.describe('is assigned', () => {
        test('should display the "footer" slot content in the modal footer', async ({ page }) => {
            const modalCustomFooterPage = new ModalCustomFooterPage(page);
            const props:ModalProps = { ...sharedProps };
            await modalCustomFooterPage.load(props);

            await expect.soft(modalCustomFooterPage.modalComponent.componentLocator).toBeVisible();

            await percySnapshot(page, 'Modal - has footer slot content');
        });
    });
});

test.describe('Slot: `headerContent`', () => {
    test.describe('is assigned', () => {
        test('should display the "headerContent" slot content in the modal header and scroll correctly', async ({ page }) => {
            const modalCustomHeaderContentPage = new ModalCustomHeaderContentPage(page);
            const props: ModalProps = { ...sharedProps };
            await modalCustomHeaderContentPage.load(props);

            await expect.soft(modalCustomHeaderContentPage.modalComponent.componentLocator).toBeVisible();

            await modalCustomHeaderContentPage.scrollableContentSlotLocator.evaluate((el) => {
                el.scrollTop = el.scrollHeight;
            });

            await page.waitForTimeout(3000); // Wait for scroll to settle

            await percySnapshot(page, 'Modal - has headerContent slot content and sticks to top of modal when scrolling');
        });
    });
});
