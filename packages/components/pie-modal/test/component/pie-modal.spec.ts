import { type Page, test, expect } from '@playwright/test';
import { ModalDefaultPage } from 'test/helpers/page-object/pie-modal-default.page.ts';
import { ModalFocusToSpecifiedElementPage } from 'test/helpers/page-object/pie-modal-focus-to-specified-element.page.ts';
import { ModalFocusToFirstMatchingElementPage } from 'test/helpers/page-object/pie-modal-focus-to-first-matching-element.page.ts';
import { ModalScrollLockingPage } from 'test/helpers/page-object/pie-modal-scroll-locking.page.ts';
import { ModalEmbeddedFormPage } from 'test/helpers/page-object/pie-modal-embedded-form.page.ts';
import { ModalCustomFooterPage } from 'test/helpers/page-object/pie-modal-custom-footer.page.ts';
import { ModalMissingDialogSimulationPage } from 'test/helpers/page-object/pie-modal-missing-dialog-simulation.page.ts';
import { ModalCustomImageSlotContentPage } from 'test/helpers/page-object/pie-modal-custom-image-slot-content.page.ts';
import { ModalCustomHeadingStylePage } from 'test/helpers/page-object/pie-modal-custom-heading-style.page.ts';
import {
    type ModalProps, headingLevels, imageSlotModes,
} from '../../src/defs.ts';

const sharedProps: ModalProps = {
    heading: 'This is a modal heading',
};

test.describe('modal', () => {
    test('should be visible when opened', async ({ page }) => {
    // Arrange
        const modalDefaultPage = new ModalDefaultPage(page);

        await modalDefaultPage.load();

        // Act
        await expect(modalDefaultPage.modalComponent.componentLocator).toBeVisible();
    });

    headingLevels.forEach((headingLevel) => test(`should render the correct heading tag based on the value of headingLevel: ${headingLevel}`, async ({ page }) => {
    // Arrange
        const props: ModalProps = {
            ...sharedProps,
            headingLevel,
        };

        const modalDefaultPage = new ModalDefaultPage(page);
        await modalDefaultPage.load(props);

        // Act
        await expect.soft(modalDefaultPage.modalComponent.componentLocator).toBeVisible();
        const headingExists = await modalDefaultPage.modalComponent.headingByTagExists(headingLevel);

        // Assert
        expect(headingExists).toBe(true);
    }));

    ['span', 'section'].forEach((headingLevel) => test(`should render the fallback heading level 'h2' if invalid headingLevel: ${headingLevel} is passed`, async ({ page }) => {
    // Arrange
        const modalDefaultPage = new ModalDefaultPage(page);

        const props: ModalProps = {
            ...sharedProps,
            // Intentionally passing an invalid headingLevel to test the fallback
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            headingLevel: headingLevel as any,
        };

        await modalDefaultPage.load(props);
        const fallBackHeadingExists = await modalDefaultPage.modalComponent.headingByTagExists('h2');

        // Assert
        expect(fallBackHeadingExists).toBe(true);
    }));

    test.describe('When modal is closed', () => {
        test.describe('by clicking the close button', () => {
            test('should dispatch event `pie-modal-close`', async ({ page }) => {
                // Arrange
                const modalDefaultPage = new ModalDefaultPage(page);
                const props: ModalProps = {
                    ...sharedProps,
                    isDismissible: true,
                };

                await modalDefaultPage.load(props);

                // Set up a listener for console messages
                const consoleMessages: string[] = [];
                page.on('console', (message) => {
                    if (message.type() === 'info') {
                        consoleMessages.push(message.text());
                    }
                });

                // Act
                await modalDefaultPage.modalComponent.clickCloseModal();

                // Assert
                expect(consoleMessages).toContain('close-modal');
            });

            test('should close the modal', async ({ page }) => {
                // Arrange
                const modalDefaultPage = new ModalDefaultPage(page);
                const props: ModalProps = {
                    ...sharedProps,
                    isDismissible: true,
                };

                await modalDefaultPage.load(props);

                // Act
                await modalDefaultPage.modalComponent.clickCloseModal();

                // Assert
                await expect(modalDefaultPage.modalComponent.componentLocator).not.toBeVisible();
            });
        });

        test.describe('by clicking the back button', () => {
            test('should dispatch event `pie-modal-back`', async ({ page }) => {
                // Arrange
                const modalDefaultPage = new ModalDefaultPage(page);
                const props: ModalProps = {
                    ...sharedProps,
                    hasBackButton: true,
                };

                await modalDefaultPage.load(props);

                // Set up a listener for console messages
                const consoleMessages: string[] = [];
                page.on('console', (message) => {
                    if (message.type() === 'info') {
                        consoleMessages.push(message.text());
                    }
                });

                // Act
                await modalDefaultPage.modalComponent.clickBackModal();

                // Assert
                expect(consoleMessages).toContain('back-click');
            });
        });

        test.describe('by clicking the backdrop', () => {
            test('should dispatch event `pie-modal-close`', async ({ page }) => {
                // Arrange
                const modalDefaultPage = new ModalDefaultPage(page);
                const props: ModalProps = {
                    ...sharedProps,
                    isDismissible: true,
                };

                await modalDefaultPage.load(props);

                // Set up a listener for console messages
                const consoleMessages: string[] = [];
                page.on('console', (message) => {
                    if (message.type() === 'info') {
                        consoleMessages.push(message.text());
                    }
                });

                // Act
                await modalDefaultPage.modalComponent.clickBackdrop();

                // Assert
                expect(consoleMessages).toContain('close-modal');
            });

            test('should close the modal', async ({ page }) => {
                // Arrange
                const modalDefaultPage = new ModalDefaultPage(page);
                const props: ModalProps = {
                    ...sharedProps,
                    isDismissible: true,
                };

                await modalDefaultPage.load(props);

                // Act
                await modalDefaultPage.modalComponent.clickBackdrop();

                // Assert
                await expect(modalDefaultPage.modalComponent.componentLocator).not.toBeVisible();
            });
        });

        test.describe('`returnFocusAfterCloseSelector` prop', () => {
            test.describe('when given', () => {
                test('should return focus to specified element', async ({ page }) => {
                    // Arrange
                    const modalFocusToSpecifiedElementPage = new ModalFocusToSpecifiedElementPage(page);

                    await modalFocusToSpecifiedElementPage.load();

                    // Act
                    await modalFocusToSpecifiedElementPage.modalComponent.clickCloseModal();

                    await expect(page.locator('#focus-3')).toBeFocused();
                });

                test('should return focus to first matching element', async ({ page }) => {
                    // Arrange
                    const modalFocusToFirstMatchingElementPage = new ModalFocusToFirstMatchingElementPage(page);

                    await modalFocusToFirstMatchingElementPage.load();

                    // Act
                    await modalFocusToFirstMatchingElementPage.modalComponent.clickCloseModal();

                    // Assert
                    await expect(page.locator('#actual-focus')).toBeFocused();
                });
            });

            test.describe('when not given', () => {
                [{
                    mechanism: 'close button',
                    modalCloseFunction: async (page: Page) => {
                        const modalDefaultPage = new ModalDefaultPage(page);
                        await modalDefaultPage.modalComponent.clickCloseModal();
                    },
                }, {
                    mechanism: 'Esc key',
                    modalCloseFunction: async (page: Page) => {
                        await page.keyboard.press('Escape');
                    },
                }].forEach(({ mechanism, modalCloseFunction }) => {
                    test.describe(`and closed by the ${mechanism}`, () => {
                        test('should return focus to the element that opens the modal', async ({ page }) => {
                            // Arrange

                            const props: ModalProps = {
                                ...sharedProps,
                                isOpen: false,
                                isDismissible: true,
                            };

                            const modalDefaultPage = new ModalDefaultPage(page);

                            await modalDefaultPage.load(props);
                            // Act
                            await modalDefaultPage.openModal();
                            await modalCloseFunction(page);

                            // Assert
                            await expect(modalDefaultPage.openModalButtonLocator).toBeFocused();
                        });
                    });
                });
            });
        });
    });

    test.describe('`isDismissible` prop', () => {
        test.describe('when `true`', () => {
            test('should make the modal contain a close button', async ({ page }) => {
                // Arrange
                const modalDefaultPage = new ModalDefaultPage(page);
                const props: ModalProps = {
                    ...sharedProps,
                    isDismissible: true,
                };

                await modalDefaultPage.load(props);

                // Assert
                await expect(modalDefaultPage.modalComponent.closeButtonLocator).toBeVisible();
            });

            test('should close the modal when the close button is clicked', async ({ page }) => {
                // Arrange
                const modalDefaultPage = new ModalDefaultPage(page);
                const props: ModalProps = {
                    ...sharedProps,
                    isDismissible: true,
                };

                await modalDefaultPage.load(props);

                // Act
                await modalDefaultPage.modalComponent.clickCloseModal();

                // Assert
                await expect(modalDefaultPage.modalComponent.componentLocator).not.toBeVisible();
            });

            test('should close the modal when the backdrop is clicked', async ({ page }) => {
                // Arrange
                const modalDefaultPage = new ModalDefaultPage(page);
                const props: ModalProps = {
                    ...sharedProps,
                    isDismissible: true,
                };

                await modalDefaultPage.load(props);

                // Act
                await modalDefaultPage.modalComponent.clickBackdrop();

                // Assert
                await expect(modalDefaultPage.modalComponent.componentLocator).not.toBeVisible();
            });

            test('should close the modal when the Escape key is pressed', async ({ page }) => {
                // Arrange
                const modalDefaultPage = new ModalDefaultPage(page);
                const props: ModalProps = {
                    ...sharedProps,
                    isDismissible: true,
                };

                await modalDefaultPage.load(props);

                // Act
                await page.keyboard.press('Escape');

                // Assert
                await expect(modalDefaultPage.modalComponent.componentLocator).not.toBeVisible();
            });
        });

        test.describe('when `isDismissible` is `false`', () => {
            test('close button should not be visible', async ({ page }) => {
                // Arrange
                const modalDefaultPage = new ModalDefaultPage(page);
                const props: ModalProps = {
                    ...sharedProps,
                    isDismissible: false,
                };

                await modalDefaultPage.load(props);

                // Act
                await expect(modalDefaultPage.modalComponent.closeButtonLocator).not.toBeVisible();
            });

            test('should NOT close the modal when the backdrop is clicked', async ({ page }) => {
                // Arrange
                const modalDefaultPage = new ModalDefaultPage(page);
                const props: ModalProps = {
                    ...sharedProps,
                    isDismissible: false,
                };

                await modalDefaultPage.load(props);

                // Act
                await modalDefaultPage.modalComponent.clickBackdrop();

                // Assert
                await expect(modalDefaultPage.modalComponent.componentLocator).toBeVisible();
            });

            test('should NOT close the modal when the Escape key is pressed', async ({ page }) => {
                // Arrange
                const modalDefaultPage = new ModalDefaultPage(page);
                const props: ModalProps = {
                    ...sharedProps,
                    isDismissible: false,
                };

                await modalDefaultPage.load(props);

                // Act
                await page.keyboard.press('Escape');

                // Assert
                await expect(modalDefaultPage.modalComponent.componentLocator).toBeVisible();
            });
        });
    });
});

test.describe('isOpen prop', () => {
    test('should not render open when isOpen = false', async ({ page }) => {
    // Arrange
        const modalDefaultPage = new ModalDefaultPage(page);
        const props: ModalProps = {
            ...sharedProps,
            isOpen: false,
        };

        await modalDefaultPage.load(props);

        // Act
        await expect(modalDefaultPage.modalComponent.componentLocator).not.toBeVisible();
    });

    test('should render open when isOpen = true', async ({ page }) => {
    // Arrange
        const modalDefaultPage = new ModalDefaultPage(page);
        const props: ModalProps = {
            ...sharedProps,
            isOpen: true,
        };

        await modalDefaultPage.load(props);

        // Act
        await expect(modalDefaultPage.modalComponent.componentLocator).toBeVisible();
    });
});

test.describe('scrolling logic', () => {
    test('Should not be able to scroll when isOpen = true', async ({ page }) => {
    // Arrange
        const modalScrollLockingPage = new ModalScrollLockingPage(page);

        const props: ModalProps = {
            ...sharedProps,
            isOpen: true,
        };

        await modalScrollLockingPage.load(props);

        // Act
        // Scroll 800 pixels down the page
        await page.mouse.wheel(0, 5000);

        // The mouse.wheel function causes scrolling, but doesn't wait for the scroll to finish before returning.
        await page.waitForTimeout(3000);

        // Assert
        await expect.soft(page.getByText('Top of page copy')).toBeInViewport();
        await expect(page.getByText('Bottom of page copy')).not.toBeInViewport();
    });

    test('Should scroll to the bottom when Pie Modal is closed', async ({ page }) => {
    // Arrange
        const modalScrollLockingPage = new ModalScrollLockingPage(page);

        const props: ModalProps = {
            ...sharedProps,
            isOpen: false,
        };

        await modalScrollLockingPage.load(props);

        // Act
        // Scroll 800 pixels down the page
        await page.mouse.wheel(0, 5000);

        // The mouse.wheel function causes scrolling, but doesn't wait for the scroll to finish before returning.
        await page.waitForTimeout(3000);

        // Assert
        await expect.soft(page.getByText('Top of page copy')).not.toBeInViewport();
        await expect(page.getByText('Bottom of page copy')).toBeInViewport();
    });

    test('Should preserve scroll position after opening and closing the modal', async ({ page }) => {
        // Arrange
        const modalScrollLockingPage = new ModalScrollLockingPage(page);

        const props: ModalProps = {
            ...sharedProps,
            isOpen: false,
        };

        await modalScrollLockingPage.load(props);

        // Act
        // Scroll to the bottom of the page
        await page.mouse.wheel(0, 5000);

        // The mouse.wheel function causes scrolling, but doesn't wait for the scroll to finish before returning.
        await page.waitForTimeout(3000);

        // opens the modal
        await modalScrollLockingPage.openModalFromPageBottom();

        // closes the modal
        await page.keyboard.press('Escape');

        // Assert
        await expect.soft(page.getByText('Top of page copy')).not.toBeInViewport();
        await expect(page.getByText('Bottom of page copy')).toBeInViewport();
    });

    test.describe('When the dialog element is not found', () => {
        test('should release scroll lock correctly after being removed from the DOM', async ({ page }) => {
            // Arrange
            const modalErrorPage = new ModalMissingDialogSimulationPage(page);
            await modalErrorPage.load();

            // 1. Assert initial state: we can scroll to the bottom
            await page.mouse.wheel(0, 5000);
            await page.waitForTimeout(3000); // Wait for scroll to settle

            await expect.soft(page.getByText('Top of page copy')).not.toBeInViewport();
            await expect(page.getByText('Bottom of page copy')).toBeInViewport();

            // Reset scroll to top of the page for the main test
            await page.mouse.wheel(0, 0);
            await page.waitForTimeout(3000); // Wait for scroll to settle

            // 2. Act: Click the button to run the open/break/close sequence
            await modalErrorPage.runTestButton.click();

            // Wait for the entire sequence to finish
            await page.waitForTimeout(6000);

            // 3. Assert final state: we can still scroll to the bottom
            await page.mouse.wheel(0, 5000);
            await page.waitForTimeout(3000); // Wait for scroll to settle

            await expect.soft(page.getByText('Top of page copy')).not.toBeInViewport();
            await expect(page.getByText('Bottom of page copy')).toBeInViewport();
        });
    });
});

test.describe('`hasBackButton` prop', () => {
    test.describe('when `true`', () => {
        test('should make the modal contain a back button', async ({ page }) => {
            // Arrange
            const modalDefaultPage = new ModalDefaultPage(page);
            const props: ModalProps = {
                ...sharedProps,
                hasBackButton: true,
            };

            await modalDefaultPage.load(props);

            // Act
            await expect(modalDefaultPage.modalComponent.backButtonLocator).toBeVisible();
        });

        test('should close the modal when the back button is clicked', async ({ page }) => {
            // Arrange
            const modalDefaultPage = new ModalDefaultPage(page);
            const props: ModalProps = {
                ...sharedProps,
                hasBackButton: true,
            };

            await modalDefaultPage.load(props);

            // Act
            await modalDefaultPage.modalComponent.clickBackModal();
            const isModalVisible = await modalDefaultPage.modalComponent.isModalVisible();

            // Assert
            expect(isModalVisible).toBe(false);
        });
    });
});

test.describe('when `hasBackButton` is `false`', () => {
    test('should make the modal NOT contain a back button', async ({ page }) => {
    // Arrange
        const modalDefaultPage = new ModalDefaultPage(page);
        const props: ModalProps = {
            ...sharedProps,
            hasBackButton: false,
        };

        await modalDefaultPage.load(props);

        // Assert
        await expect(modalDefaultPage.modalComponent.backButtonLocator).not.toBeVisible();
    });
});

test.describe('actions', () => {
    [{ name: 'leading', buttonText: 'Confirm' }, { name: 'supporting', buttonText: 'Cancel' }].forEach((action) => {
        test.describe(`${action.name} action, when clicked`, () => {
            test('should close the modal', async ({ page }) => {
                // Arrange
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

                // Act
                await modalDefaultPage.clickButtonWithText(action.buttonText);

                // Assert
                await expect(modalDefaultPage.modalComponent.componentLocator).not.toBeVisible();
            });

            test('should submit the correct return value', async ({ page }) => {
                // Arrange
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

                // Set up a listener for console messages
                const consoleMessages: string[] = [];
                page.on('console', (message) => {
                    if (message.type() === 'info') {
                        consoleMessages.push(message.text());
                    }
                });

                // Act
                await modalDefaultPage.clickButtonWithText(action.buttonText);

                // Assert
                expect(consoleMessages).toContain(`${action.name}-click`);
            });
        });
    });
});

test.describe('Props: `aria`', () => {
    test.describe('when aria exist', () => {
        test('should render component elements with the correct aria-labels', async ({ page }) => {
            // Arrange
            const modalDefaultPage = new ModalDefaultPage(page);

            const props: ModalProps = {
                ...sharedProps,
                isDismissible: true,
                hasBackButton: true,
                aria: {
                    close: 'Close label info',
                    back: 'Back label info',
                },
            };
            await modalDefaultPage.load(props);

            // Act
            // Close button
            const ariaCloseLabel = await modalDefaultPage.modalComponent.getCloseButtonAriaLabel();

            // Back button
            const ariaBackLabel = await modalDefaultPage.modalComponent.getBackButtonAriaLabel();

            // Assert
            expect(ariaCloseLabel).toBe('Close label info');
            expect(ariaBackLabel).toBe('Back label info');
        });

        test.describe('when modal `isloading` is true', () => {
            test('should render component with the correct aria values: `aria-label` & `aria-busy`', async ({ page }) => {
                // Arrange
                const modalDefaultPage = new ModalDefaultPage(page);
                const props: ModalProps = {
                    ...sharedProps,
                    isLoading: true,
                    aria: {
                        loading: 'Loading label info',
                    },
                };

                await modalDefaultPage.load(props);

                // Act
                // Loading state
                const ariaLoadingLabel = await modalDefaultPage.modalComponent.getModalAriaLabel();
                const ariaLoadingBusy = await modalDefaultPage.modalComponent.getModalAriaBusy();

                // Assert
                expect(ariaLoadingLabel).toBe('Loading label info');
                expect(ariaLoadingBusy).toBe('true');
            });
        });
    });
});

test.describe('when modal `isLoading` is dynamically changing from `isLoading: true` to `isLoading: false`', () => {
    test('should dynamically add, remove, and update `arial-label` & `aria-busy` labels', async ({ page }) => {
    // Arrange
        const modalDefaultPage = new ModalDefaultPage(page);
        const props: ModalProps = {
            ...sharedProps,
            isLoading: true,
            aria: {
                loading: 'Loading label info',
            },
        };

        await modalDefaultPage.load(props);

        let ariaLoadingLabel = await modalDefaultPage.modalComponent.getModalAriaLabel();
        let ariaLoadingBusy = await modalDefaultPage.modalComponent.getModalAriaBusy();

        // Assert: When `isLoading: true`
        expect(ariaLoadingLabel).toBe('Loading label info');
        expect(ariaLoadingBusy).toBe('true');

        await page.evaluate(() => {
            const modal = document.querySelector('pie-modal');
            if (modal) {
                modal.isLoading = false;
            } else {
                throw new Error('Modal not found');
            }
        });

        ariaLoadingLabel = await modalDefaultPage.modalComponent.getModalAriaLabel();
        ariaLoadingBusy = await modalDefaultPage.modalComponent.getModalAriaBusy();

        // Assert: When `isLoading: false`
        expect(ariaLoadingLabel).toBeNull();
        expect(ariaLoadingBusy).toBe('false');
    });
});

test.describe('when aria does not exist', () => {
    test('should not render the aria-labels', async ({ page }) => {
    // Arrange
        const modalDefaultPage = new ModalDefaultPage(page);
        const props: ModalProps = {
            ...sharedProps,
            isDismissible: true,
            hasBackButton: true,
        };

        await modalDefaultPage.load({ ...props, aria: null });

        // Act
        // Close button
        const ariaCloseLabel = await modalDefaultPage.modalComponent.getCloseButtonAriaLabel();

        // Back button
        const ariaBackLabel = await modalDefaultPage.modalComponent.getBackButtonAriaLabel();

        // Assert
        expect(ariaCloseLabel).toBe(null);
        expect(ariaBackLabel).toBe(null);
    });
});

test.describe('when modal `isloading` is false', () => {
    test('should not render aria-label', async ({ page }) => {
    // Arrange
        const modalDefaultPage = new ModalDefaultPage(page);
        const props: ModalProps = {
            ...sharedProps,
            isLoading: false,
        };

        await modalDefaultPage.load(props);

        // Loading state
        const ariaLoadingLabel = await modalDefaultPage.modalComponent.getModalAriaLabel();

        // Assert
        expect(ariaLoadingLabel).toBe(null);
    });

    test('should set `aria-busy` to `false`', async ({ page }) => {
    // Arrange
        const modalDefaultPage = new ModalDefaultPage(page);
        const props: ModalProps = {
            ...sharedProps,
            isLoading: false,
        };

        await modalDefaultPage.load(props);

        // Loading state
        const ariaLoadingBusy = await modalDefaultPage.modalComponent.getModalAriaBusy();

        // Assert
        expect(ariaLoadingBusy).toBe('false');
    });
});

test('should not close the modal when a form is submitted', async ({ page }) => {
    // Arrange
    const modalEmbeddedFormPage = new ModalEmbeddedFormPage(page);

    await modalEmbeddedFormPage.load();

    // Act
    await modalEmbeddedFormPage.submitForm();
    const isModalVisible = await modalEmbeddedFormPage.modalComponent.isModalVisible();

    // Assert
    expect(isModalVisible).toBe(true);
});

test.describe('when the `footer` slot is assigned', () => {
    test('the footer element should not be available', async ({ page }) => {
        // Arrange
        const modalCustomFooterPage = new ModalCustomFooterPage(page);

        await modalCustomFooterPage.load();

        // Assert
        await expect(modalCustomFooterPage.footerLocator).not.toBeVisible();
    });

    test('should have the slot `footer` available', async ({ page }) => {
        // Arrange
        const modalCustomFooterPage = new ModalCustomFooterPage(page);

        await modalCustomFooterPage.load();

        // Act
        const slotLocator = modalCustomFooterPage.footerSlotLocator;

        // Assert
        await expect(slotLocator).toBeVisible();
    });

    test('should have the content assigned to the slot', async ({ page }) => {
        // Arrange
        const modalCustomFooterPage = new ModalCustomFooterPage(page);

        await modalCustomFooterPage.load();

        // Act
        const slotLocator = modalCustomFooterPage.footerSlotLocator;
        const textContent = await slotLocator.textContent();

        // Assert
        expect(textContent?.trim()).toBe('Footer slotted content');
    });
});

test.describe('`image` slot', () => {
    test.describe('when the imageSlotMode is not set', () => {
        test('it should not have the image slot wrapper', async ({ page }) => {
            // Arrange
            const modalCustomImageSlotContentPage = new ModalCustomImageSlotContentPage(page);
            await modalCustomImageSlotContentPage.load();

            // Assert
            await expect(modalCustomImageSlotContentPage.imageLocator).not.toBeVisible();
        });
        test('it should not have the slot `image` available', async ({ page }) => {
            // Arrange
            const modalCustomImageSlotContentPage = new ModalCustomImageSlotContentPage(page);

            await modalCustomImageSlotContentPage.load();

            // Act
            const slotLocator = modalCustomImageSlotContentPage.imageSlotLocator;

            // Assert
            await expect(slotLocator).not.toBeVisible();
        });

        test.describe('when `isDismissible` and the `backgroundColor` is set to', () => {
            const bgColorToButtonVariant = {
                default: 'ghost-secondary',
                subtle: 'ghost-secondary',
                'brand-01': 'ghost-secondary',
                'brand-02': 'ghost-secondary',
                'brand-03': 'ghost-secondary',
                'brand-03-subtle': 'ghost-secondary',
                'brand-04': 'ghost-secondary',
                'brand-04-subtle': 'ghost-secondary',
                'brand-05': 'ghost-secondary',
                'brand-05-subtle': 'ghost-secondary',
                'brand-06': 'ghost-inverse',
                'brand-06-subtle': 'ghost-secondary',
                'brand-08': 'ghost-secondary',
                'brand-08-subtle': 'ghost-secondary',
            };

            Object.entries(bgColorToButtonVariant).forEach(([backgroundColor, variant]) => {
                test(`\`${backgroundColor}\`, the dismiss button variant should be "${variant}"`, async ({ page }) => {
                    // Arrange
                    const modalCustomImageSlotContentPage = new ModalCustomImageSlotContentPage(page);
                    const props: ModalProps = {
                        ...sharedProps,
                        isDismissible: true,
                        backgroundColor: backgroundColor as ModalProps['backgroundColor'],
                    };
                    await modalCustomImageSlotContentPage.load(props);

                    // Act
                    const { closeButtonLocator } = modalCustomImageSlotContentPage;

                    // Assert
                    await expect(closeButtonLocator).toBeVisible();
                    await expect(closeButtonLocator).toHaveAttribute('variant', variant);
                });
            });
        });
    });

    test.describe('when the imageSlotMode is set', () => {
        test('it should have the image slot wrapper', async ({ page }) => {
            // Arrange
            const modalCustomImageSlotContentPage = new ModalCustomImageSlotContentPage(page);
            const props: ModalProps = {
                ...sharedProps,
                imageSlotMode: 'illustration',
            };
            await modalCustomImageSlotContentPage.load(props);

            // Assert
            await expect(modalCustomImageSlotContentPage.imageLocator).toBeVisible();
        });
        [...imageSlotModes].forEach((imageSlotMode) => {
            test.describe(`as "${imageSlotMode}"`, () => {
                test('it should have the slot `image` available', async ({ page }) => {
                    // Arrange
                    const modalCustomImageSlotContentPage = new ModalCustomImageSlotContentPage(page);
                    const props: ModalProps = {
                        ...sharedProps,
                        imageSlotMode,
                    };
                    await modalCustomImageSlotContentPage.load(props);

                    // Act
                    const slotLocator = modalCustomImageSlotContentPage.imageSlotLocator;

                    // Assert
                    await expect(slotLocator).toBeVisible();
                });

                [true, false].forEach((isDismissible) => {
                    test.describe(`when \`isDismissible\` is \`${isDismissible}\`   `, () => {
                        test(`the dismiss button should ${isDismissible ? 'be' : 'not be'} visible`, async ({ page }) => {
                            // Arrange
                            const modalCustomImageSlotContentPage = new ModalCustomImageSlotContentPage(page);
                            const props: ModalProps = {
                                ...sharedProps,
                                imageSlotMode,
                                isDismissible,
                            };
                            await modalCustomImageSlotContentPage.load(props);

                            // Act
                            const { closeButtonLocator } = modalCustomImageSlotContentPage;

                            // Assert
                            if (isDismissible) {
                                await expect(closeButtonLocator).toBeVisible();
                            } else {
                                await expect(closeButtonLocator).not.toBeVisible();
                            }
                        });

                        const bgColorToButtonVariant = {
                            default: imageSlotMode === 'illustration' ? 'ghost-secondary' : 'secondary',
                            subtle: 'secondary',
                            'brand-01': 'secondary',
                            'brand-02': 'secondary',
                            'brand-03': 'secondary',
                            'brand-03-subtle': 'secondary',
                            'brand-04': 'secondary',
                            'brand-04-subtle': 'secondary',
                            'brand-05': 'secondary',
                            'brand-05-subtle': 'secondary',
                            'brand-06': 'ghost-inverse',
                            'brand-06-subtle': 'secondary',
                            'brand-08': 'secondary',
                            'brand-08-subtle': 'secondary',
                        };

                        Object.entries(bgColorToButtonVariant).forEach(([backgroundColor, variant]) => {
                            test(`when \`backgroundColor\` is \`${backgroundColor}\`, the dismiss button variant should be \`${variant}\``, async ({ page }) => {
                                // Arrange
                                const modalCustomImageSlotContentPage = new ModalCustomImageSlotContentPage(page);
                                const props: ModalProps = {
                                    ...sharedProps,
                                    imageSlotMode,
                                    isDismissible: true,
                                    backgroundColor: backgroundColor as ModalProps['backgroundColor'],
                                };
                                await modalCustomImageSlotContentPage.load(props);

                                // Act
                                const { closeButtonLocator } = modalCustomImageSlotContentPage;

                                // Assert
                                await expect(closeButtonLocator).toBeVisible();
                                await expect(closeButtonLocator).toHaveAttribute('variant', variant);
                            });
                        });
                    });
                });
            });
        });
    });
});

test.describe('CSS Parts', () => {
    test('should expose a `heading` part', async ({ page }) => {
        // Arrange
        const modalPage = new ModalCustomHeadingStylePage(page);
        const props: ModalProps = {
            ...sharedProps,
            isDismissible: true,
        };

        await modalPage.load(props);

        // Assert
        const { headingLocator } = modalPage;
        const partAttribute = await headingLocator.getAttribute('part');

        await expect(headingLocator).toBeVisible();
        expect(partAttribute).toBe('heading');
    });
});
