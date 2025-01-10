import { type Page, test, expect } from '@playwright/test';
import { ModalDefaultPage } from 'test/helpers/page-object/pie-modal-default.page.ts';
import { ModalFocusToSpecifiedElementPage } from 'test/helpers/page-object/pie-modal-focus-to-specified-element.page.ts';
import { ModalFocusToFirstMatchingElementPage } from 'test/helpers/page-object/pie-modal-focus-to-first-matching-element.page.ts';
import { ModalScrollLockingPage } from 'test/helpers/page-object/pie-modal-scroll-locking.page.ts';
import { ModalEmbeddedFormPage } from 'test/helpers/page-object/pie-modal-embedded-form.page.ts';
import { type ModalProps, headingLevels } from '../../src/defs.ts';

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
                    if (message.type() === 'log') {
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
                    if (message.type() === 'log') {
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
                    if (message.type() === 'log') {
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
                    if (message.type() === 'log') {
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
