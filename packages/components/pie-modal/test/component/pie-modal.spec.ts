import { test, expect } from '@sand4rt/experimental-ct-web';
import { type Page } from '@playwright/test';
import { PieButton } from '@justeattakeaway/pie-button';
import { PieIconButton } from '@justeattakeaway/pie-icon-button';
import {
    WebComponentTestWrapper,
} from '@justeattakeaway/pie-webc-testing/src/helpers/components/web-component-test-wrapper/WebComponentTestWrapper.ts';
import { createScrollablePageHTML, renderTestPieModal } from '../helpers/index.ts';

import { PieModal } from '@/index';
import {
    ON_MODAL_BACK_EVENT,
    ON_MODAL_CLOSE_EVENT,
    headingLevels,
} from '@/defs';

const componentSelector = '[data-test-id="pie-modal"]';
const backButtonSelector = '[data-test-id="modal-back-button"]';
const closeButtonSelector = '[data-test-id="modal-close-button"]';

// Mount then unmount any components that are used inside of pie-modal so that
// they have been registered with the browser before the tests run.
// There is likely a nicer way to do this but this will temporarily
// unblock tests.
test.beforeEach(async ({ mount }) => {
    await (await mount(PieButton)).unmount();
    await (await mount(PieIconButton)).unmount();
});

test.describe('modal', () => {
    test('should be visible when opened', async ({ mount, page }) => {
        // Arrange
        await mount(PieModal, {
            props: {
                heading: 'Modal heading',
                isOpen: true,
            },
        });

        // Act
        const modal = page.locator(componentSelector);

        // Assert
        expect(modal).toBeVisible();
    });
});

headingLevels.forEach((headingLevel) => test(`should render the correct heading tag based on the value of headingLevel: ${headingLevel}`, async ({ mount }) => {
    // Arrange
    const props = {
        heading: 'Modal Header',
        headingLevel,
    };

    // Act
    const component = await mount(PieModal, { props });

    // Assert
    await expect(component.locator(`${props.headingLevel}.c-modal-heading`)).toContainText(props.heading);
}));

['span', 'section'].forEach((headingLevel) => test(`should render the fallback heading level 'h2' if invalid headingLevel: ${headingLevel} is passed`, async ({ mount }) => {
    // Arrange
    const props = {
        heading: 'Modal Header',
        headingLevel,
    };

    // Act
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore // Added this as we want to deliberately test with invalid headingLevel (which is an invalid type based on ModalProps)
    const component = await mount(PieModal, { props });

    // Assert
    await expect(component.locator('h2.c-modal-heading')).toContainText(props.heading);
}));

test.describe('When modal is closed', () => {
    test.describe('by clicking the close button', () => {
        test('should dispatch event `pie-modal-close`', async ({ mount, page }) => {
            // Arrange
            const events : Array<Event> = [];

            await mount(
                PieModal,
                {
                    props: {
                        isOpen: true,
                        isDismissible: true,
                    },
                    on: {
                        [ON_MODAL_CLOSE_EVENT]: (event: Event) => events.push(event),
                    },
                },
            );

            await page.click(closeButtonSelector);

            // Assert
            expect(events).toHaveLength(1);
        });

        test('should close the modal', async ({ mount, page }) => {
            // Arrange
            await mount(PieModal, {
                props: {
                    isOpen: true,
                    isDismissible: true,
                },
            });

            const modal = page.locator(componentSelector);

            // Act
            await page.click(closeButtonSelector);

            // Assert
            expect(modal).not.toBeVisible();
        });
    });

    test.describe('by clicking the back button', () => {
        test('should dispatch event `pie-modal-back`', async ({ mount, page }) => {
            // Arrange
            const events: Event[] = [];
            await mount(
                PieModal,
                {
                    props: {
                        isOpen: true,
                        hasBackButton: true,
                    },
                    on: {
                        [ON_MODAL_BACK_EVENT]: (event: Event) => events.push(event),
                    },
                },
            );

            await page.locator(backButtonSelector).click();

            // Assert
            expect(events).toHaveLength(1);
        });
    });

    test.describe('by clicking the backdrop', () => {
        test('should dispatch event `pie-modal-close`', async ({ mount, page }) => {
            // Arrange
            const events : Array<Event> = [];

            await mount(PieModal, {
                props: {
                    isOpen: true,
                    isDismissible: true,
                },
                on: {
                    [ON_MODAL_CLOSE_EVENT]: (event: Event) => events.push(event),
                },
            });

            // Act
            await page.click(componentSelector, { position: { x: -10, y: -10 } }); // Click outside dialog

            // Assert
            expect(events).toHaveLength(1); // TODO - Event object is null for this test
        });

        test('should close the modal', async ({ mount, page }) => {
            // Arrange
            await mount(PieModal, {
                props: {
                    isOpen: true,
                    isDismissible: true,
                },
            });

            const modal = await page.locator(componentSelector);

            // Act
            await modal.click({ position: { x: -10, y: -10 } }); // Click outside dialog

            // Assert
            expect(modal).not.toBeVisible();
        });
    });

    test.describe('`returnFocusAfterCloseSelector` prop', () => {
        test.describe('when given', () => {
            test('should return focus to specified element', async ({ mount, page }) => {
                // Arrange
                const component = renderTestPieModal({
                    returnFocusAfterCloseSelector: '#focus-me',
                });

                await mount(WebComponentTestWrapper, {
                    props: {
                        pageMode: true,
                    },
                    slots: {
                        component,
                        pageMarkup: `<div>
                            <button id="default"></button>
                            <button id="focus-me"></button>
                            <button id="not-me"></button>
                        </div>`,
                    },
                });

                // Act
                await page.click(closeButtonSelector);

                const focusedElement = await page.locator(':focus');
                const focusedElementId = await focusedElement.getAttribute('id');

                // Assert
                expect(focusedElementId).toBe('focus-me');
            });

            test('should return focus to first matching element', async ({ page, mount }) => {
                // Arrange
                const component = renderTestPieModal({
                    returnFocusAfterCloseSelector: '[data-test-id="focus-me"]',
                });

                await mount(WebComponentTestWrapper, {
                    props: {
                        pageMode: true,
                    },
                    slots: {
                        component,
                        pageMarkup: `<div>
                            <button id="default"></button>
                            <button data-test-id="focus-me" id="actual-focus"></button>
                            <button data-test-id="focus-me"></button>
                        </div>`,
                    },
                });

                // Act
                await page.click(closeButtonSelector);

                const focusedElement = await page.locator(':focus');
                const focusedElementId = await focusedElement.getAttribute('id');

                // Assert
                expect(focusedElementId).toBe('actual-focus');
            });
        });

        test.describe('when not given', () => {
            [{
                mechanism: 'close button',
                modalCloseFunction: async (page : Page) => {
                    await page.click(closeButtonSelector);
                },
            }, {
                mechanism: 'Esc key',
                modalCloseFunction: async (page : Page) => {
                    await page.keyboard.press('Escape');
                },
            }].forEach(({ mechanism, modalCloseFunction }) => {
                test.describe(`and closed by the ${mechanism}`, () => {
                    test('should return focus to the element that opens the modal', async ({ page, mount }) => {
                        // Arrange
                        const component = renderTestPieModal({ isOpen: false });

                        await mount(WebComponentTestWrapper, {
                            props: {
                                pageMode: true,
                            },
                            slots: {
                                component,
                                pageMarkup: `<div>
                                    <button id="not-me"></button>
                                    <button data-test-id="open-modal" id="default"></button>
                                </div>`,
                            },
                        });

                        await page.evaluate(() => {
                            // Set up a button which opens the modal when clicked
                            document.querySelector('[data-test-id="open-modal"]')?.addEventListener('click', () => {
                                document.querySelector('pie-modal')?.setAttribute('isOpen', 'true');
                            });
                        });

                        // Act
                        await page.click('[data-test-id="open-modal"]');
                        await modalCloseFunction(page);

                        const focusedElement = await page.locator(':focus');
                        const focusedElementId = await focusedElement.getAttribute('id');

                        // Assert
                        expect(focusedElementId).toBe('default');
                    });
                });
            });
        });
    });
});

test.describe('`isDismissible` prop', () => {
    test.describe('when `true`', () => {
        test('should make the modal contain a close button', async ({ mount }) => {
            // Arrange
            const component = await mount(
                PieModal,
                {
                    props: {
                        isOpen: true,
                        isDismissible: true,
                    },
                },
            );

            // Act
            const closeButton = component.locator(closeButtonSelector);

            // Assert
            await expect(closeButton).toBeVisible();
        });

        test('should close the modal when the close button is clicked', async ({ mount, page }) => {
            // Arrange
            const component = await mount(
                PieModal,
                {
                    props: {
                        isOpen: true,
                        isDismissible: true,
                    },
                },
            );

            // Act
            await page.click('[data-test-id="modal-close-button"]');

            // Assert
            await expect(component).not.toBeVisible();
        });

        test('should close the modal when the backdrop is clicked', async ({ mount, page }) => {
            // Arrange
            await mount(
                PieModal,
                {
                    props: {
                        isOpen: true,
                        isDismissible: true,
                    },
                },
            );

            // Act
            await page.click('body');

            const element = await page.locator(componentSelector);

            const styles = await element.evaluate((modal) => {
                const computedStyles = window.getComputedStyle(modal);
                return {
                    display: computedStyles.getPropertyValue('display'),
                };
            });

            // Assert
            expect(styles.display).toBe('none');
        });

        test('should close the modal when the Escape key is pressed', async ({ mount, page }) => {
            // Arrange
            await mount(PieModal, {
                props: {
                    isOpen: true,
                    isDismissible: true,
                },
            });

            const modal = await page.locator(componentSelector);

            // Act
            await page.keyboard.press('Escape');

            // Assert
            await expect(modal).not.toBeVisible();
        });
    });

    test.describe('when `isDismissible` is `false`', () => {
        test('should make the modal NOT contain a close button', async ({ mount }) => {
            // Arrange
            const component = await mount(PieModal, {
                props: {
                    isOpen: true,
                    isDismissible: false,
                },
            });

            // Act
            const closeButton = await component.locator(closeButtonSelector);

            // Assert
            await expect(closeButton).not.toBeVisible();
        });

        test('should NOT close the modal when the backdrop is clicked', async ({ mount, page }) => {
            // Arrange
            await mount(
                PieModal,
                {
                    props: {
                        isOpen: true,
                        isDismissible: false,
                    },
                },
            );

            // Act
            await page.locator('body').click();

            const element = await page.locator(componentSelector);

            const styles = await element.evaluate((modal) => {
                const computedStyles = window.getComputedStyle(modal);
                return {
                    display: computedStyles.getPropertyValue('display'),
                };
            });

            // Assert
            expect(styles.display).toBe('flex');
        });

        test('should NOT close the modal when the Escape key is pressed', async ({ mount, page }) => {
            // Arrange
            await mount(PieModal, {
                props: {
                    isOpen: true,
                    isDismissible: false,
                },
            });

            // Act
            await page.keyboard.press('Escape');
            const modal = await page.locator(componentSelector);

            // Assert
            await expect(modal).toBeVisible();
        });
    });
});

test.describe('isOpen prop', () => {
    test('should not render open when isOpen = false', async ({ mount, page }) => {
        // Arrange
        await mount(PieModal, {
            props: {
                isOpen: false,
            },
        });

        // Assert
        await expect(page.locator(componentSelector)).not.toBeVisible();
    });

    test('should render open when isOpen = true', async ({ mount, page }) => {
        // Arrange
        await mount(PieModal, {
            props: {
                isOpen: true,
            },
        });

        // Assert
        await expect(page.locator(componentSelector)).toBeVisible();
    });
});

test.describe('scrolling logic', () => {
    test('Should not be able to scroll when isOpen = true', async ({ page, mount }) => {
        // Arrange
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

        // Act
        // Scroll 800 pixels down the page
        await page.mouse.wheel(0, 5000);

        // The mouse.wheel function causes scrolling, but doesn't wait for the scroll to finish before returning.
        await page.waitForTimeout(3000);

        // Assert
        await expect.soft(page.getByText('Top of page copy')).toBeInViewport();
        await expect(page.getByText('Bottom of page copy')).not.toBeInViewport();
    });

    test('Should scroll to the bottom when Pie Modal is closed', async ({ page, mount }) => {
        // Arrange
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

        // Act
        await page.locator('[data-test-id="modal-close-button"]').click();

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
        test('should make the modal contain a back button', async ({ mount }) => {
            // Arrange
            const component = await mount(
                PieModal,
                {
                    props: {
                        isOpen: true,
                        hasBackButton: true,
                    },
                },
            );

            // Act & Assert
            await expect(component.locator(backButtonSelector)).toBeVisible();
        });

        test('should close the modal when the back button is clicked', async ({ mount }) => {
            // Arrange
            const component = await mount(
                PieModal,
                {
                    props: {
                        isOpen: true,
                        hasBackButton: true,
                    },
                },
            );

            // Act
            await component.locator(backButtonSelector).click();

            // Assert
            await expect(component).not.toBeVisible();
        });
    });

    test.describe('when `hasBackButton` is `false`', () => {
        test('should make the modal NOT contain a back button', async ({ mount }) => {
            // Arrange
            const component = await mount(
                PieModal,
                {
                    props: {
                        isOpen: true,
                        hasBackButton: false,
                    },
                },
            );

            // Act & Assert
            await expect(component.locator(backButtonSelector)).not.toBeVisible();
        });
    });
});

test.describe('`hasPrimaryActionsOnly` prop', () => {
    test('should set leading and support action variants to primary when true', async ({ mount }) => {
        // Arrange & Act
        const component = await mount(
            PieModal,
            {
                props: {
                    isOpen: true,
                    hasPrimaryActionsOnly: true,
                    leadingAction: {
                        text: 'Leading',
                        variant: 'secondary',
                    },
                    supportingAction: {
                        text: 'Supporting',
                        variant: 'ghost',
                    },
                },
            },
        );

        // Act
        const leadingAction = await component.locator('[data-test-id="modal-leading-action"]');
        const supportingAction = await component.locator('[data-test-id="modal-supporting-action"]');

        // Assert
        expect(await leadingAction.getAttribute('variant')).toBe('primary');
        expect(await supportingAction.getAttribute('variant')).toBe('primary');
    });

    [false, undefined].forEach((hasPrimaryActionsOnly) => {
        test(`should not override leading and support action variants when ${hasPrimaryActionsOnly}`, async ({ mount }) => {
            // Arrange & Act
            const component = await mount(
                PieModal,
                {
                    props: {
                        isOpen: true,
                        hasPrimaryActionsOnly: undefined,
                        leadingAction: {
                            text: 'Leading',
                            variant: 'secondary',
                        },
                        supportingAction: {
                            text: 'Supporting',
                            variant: 'ghost',
                        },
                    },
                },
            );

            // Act
            const leadingAction = await component.locator('[data-test-id="modal-leading-action"]');
            const supportingAction = await component.locator('[data-test-id="modal-supporting-action"]');

            // Assert
            expect(await leadingAction.getAttribute('variant')).toBe('secondary');
            expect(await supportingAction.getAttribute('variant')).toBe('ghost');
        });
    });
});

test.describe('actions', () => {
    ['leading', 'supporting'].forEach((actionName) => {
        test.describe(`${actionName} action, when clicked`, () => {
            const buttonSelector = `[data-test-id="modal-${actionName}-action"]`;

            test('should close the modal', async ({ page, mount }) => {
                // Arrange
                await mount(PieModal, {
                    props: {
                        heading: 'Modal Header',
                        isOpen: true,
                        leadingAction: {
                            text: 'Confirm',
                            variant: 'primary',
                            ariaLabel: 'Descriptive message',
                        },
                        supportingAction: {
                            text: 'Cancel',
                            variant: 'ghost',
                            ariaLabel: 'Descriptive message',
                        },
                    },
                });

                const modal = await page.locator(componentSelector);

                // Act
                await page.click(buttonSelector);

                // Assert
                expect(modal).not.toBeVisible();
            });

            test('should submit the correct return value', async ({ page, mount }) => {
                // Arrange
                await mount(PieModal, {
                    props: {
                        heading: 'Modal Header',
                        isOpen: true,
                        leadingAction: {
                            text: 'Confirm',
                            variant: 'primary',
                            ariaLabel: 'Descriptive message',
                        },
                        supportingAction: {
                            text: 'Cancel',
                            variant: 'ghost',
                            ariaLabel: 'Descriptive message',
                        },
                    },
                });

                // Act
                await page.click(buttonSelector);
                const returnValue = await page.$eval(
                    componentSelector,
                    (dialog : HTMLDialogElement) => dialog.returnValue,
                );

                // Assert
                expect(returnValue).toBe(actionName);
            });
        });
    });
});

test.describe('Props: `aria`', () => {
    test.describe('when aria exist', () => {
        test('should render component elements with the correct aria-labels', async ({ mount }) => {
            // Arrange
            const component = await mount(PieModal, {
                props: {
                    isOpen: true,
                    isDismissible: true,
                    isLoading: true,
                    hasBackButton: true,
                    aria: {
                        close: 'Close label info',
                        back: 'Back label info',
                        loading: 'Loading label info',
                    },
                },
            });

            // Act
            // Close button
            const closeButton = await component.locator(closeButtonSelector);
            const ariaCloseLabel = await closeButton.getAttribute('aria-label');

            // Back button
            const backButton = await component.locator(backButtonSelector);
            const ariaBackLabel = await backButton.getAttribute('aria-label');

            // Assert
            await expect(ariaCloseLabel).toBe('Close label info');
            await expect(ariaBackLabel).toBe('Back label info');
        });

        test.describe('when modal `isloading` is true', () => {
            test('should render component with the correct aria values: `aria-label` & `aria-busy`', async ({ mount }) => {
                // Arrange
                const component = await mount(PieModal, {
                    props: {
                        isOpen: true,
                        isLoading: true,
                        aria: {
                            loading: 'Loading label info',
                        },
                    },
                });

                // Loading state
                const pieModalComponent = await component.locator(componentSelector);
                const ariaLoadingLabel = await pieModalComponent.getAttribute('aria-label');
                const ariaLoadingBusy = await pieModalComponent.getAttribute('aria-busy');

                // Assert
                await expect(ariaLoadingLabel).toBe('Loading label info');
                await expect(ariaLoadingBusy).toBe('true');
            });
        });

        test.describe('when modal `isLoading` is dynamically changing from `isLoading: true` to `isLoading: false`', () => {
            test('should dynamically add, remove, and update `arial-label` & `aria-busy` labels', async ({ mount }) => {
                // Arrange
                const component = await mount(PieModal, {
                    props: {
                        isOpen: true,
                        isLoading: true,
                        aria: {
                            loading: 'Loading label info',
                        },
                    },
                });

                const pieModalComponent = await component.locator(componentSelector);
                let ariaLoadingLabel = await pieModalComponent.getAttribute('aria-label');
                let ariaLoadingBusy = await pieModalComponent.getAttribute('aria-busy');

                // Assert: When `isLoading: true`
                await expect(ariaLoadingLabel).toBe('Loading label info');
                await expect(ariaLoadingBusy).toBe('true');

                await component.update({ props: { isLoading: false } });

                ariaLoadingLabel = await pieModalComponent.getAttribute('aria-label');
                ariaLoadingBusy = await pieModalComponent.getAttribute('aria-busy');

                // Assert: When `isLoading: false`
                await expect(ariaLoadingLabel).toBeNull();
                await expect(ariaLoadingBusy).toBe('false');
            });
        });
    });

    test.describe('when aria does not exist', () => {
        test('should not render the aria-labels', async ({ mount }) => {
            // Arrange
            const component = await mount(PieModal, {
                props: {
                    isOpen: true,
                    isDismissible: true,
                    hasBackButton: true,
                },
            });

            // Act
            // Close button
            const closeButton = await component.locator(closeButtonSelector);
            const ariaCloseLabel = await closeButton.getAttribute('aria-label');

            // Back button
            const backButton = await component.locator(backButtonSelector);
            const ariaBackLabel = await backButton.getAttribute('aria-label');

            // Assert
            await expect(ariaCloseLabel).toBe(null);
            await expect(ariaBackLabel).toBe(null);
        });
    });

    test.describe('when modal `isloading` is false', () => {
        test('should not render aria-label', async ({ mount }) => {
            // Arrange
            const component = await mount(PieModal, {
                props: {
                    isOpen: true,
                    isLoading: false,
                },
            });

            // Loading state
            const pieModalComponent = await component.locator(componentSelector);
            const ariaLoadingLabel = await pieModalComponent.getAttribute('aria-label');

            // Assert
            await expect(ariaLoadingLabel).toBe(null);
        });

        test('should set `aria-busy` to `false`', async ({ mount }) => {
            // Arrange
            const component = await mount(PieModal, {
                props: {
                    isOpen: true,
                    isLoading: false,
                },
            });

            // Loading state
            const pieModalComponent = await component.locator(componentSelector);
            const ariaLoadingBusy = await pieModalComponent.getAttribute('aria-busy');

            // Assert
            await expect(ariaLoadingBusy).toBe('false');
        });
    });
});
