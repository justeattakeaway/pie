import { test, expect } from '@sand4rt/experimental-ct-web';
import { type Page } from '@playwright/test';
import {
    WebComponentTestWrapper,
} from '@justeattakeaway/pie-webc-testing/src/helpers/components/web-component-test-wrapper/WebComponentTestWrapper.ts';
import { ModalComponent } from 'test/helpers/page-object/pie-modal.page.ts';
import { createScrollablePageHTML, renderTestPieModal } from '../helpers/index.ts';

import { PieModal } from '../../src/index.ts';
import {
    ON_MODAL_BACK_EVENT,
    ON_MODAL_CLOSE_EVENT,
    ON_MODAL_LEADING_ACTION_CLICK,
    ON_MODAL_SUPPORTING_ACTION_CLICK,
    headingLevels,
} from '../../src/defs.ts';

let modalComponent: ModalComponent;

test.describe('modal', () => {
    test.beforeEach(async ({ page }) => {
        modalComponent = new ModalComponent(page);
    });

    test('should be visible when opened', async ({ mount }) => {
        // Arrange
        await mount(PieModal, {
            props: {
                heading: 'Modal heading',
                isOpen: true,
            },
        });

        // Act
        const isModalVisible = await modalComponent.isModalVisible();

        // Assert
        expect(isModalVisible).toBe(true);
    });

    headingLevels.forEach((headingLevel) => test(`should render the correct heading tag based on the value of headingLevel: ${headingLevel}`, async ({ mount }) => {
        // Arrange
        const props = {
            heading: 'Modal Header',
            headingLevel,
            isOpen: true,
        };

        // Act
        await mount(PieModal, { props });
        await modalComponent.isModalVisible();
        const headingExists = await modalComponent.headingByTagExists(headingLevel);

        // Assert
        expect(headingExists).toBe(true);
    }));

    ['span', 'section'].forEach((headingLevel) => test(`should render the fallback heading level 'h2' if invalid headingLevel: ${headingLevel} is passed`, async ({ mount }) => {
        // Arrange
        const props = {
            heading: 'Modal Header',
            headingLevel,
            isOpen: true,
        };

        // Act
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore // Added this as we want to deliberately test with invalid headingLevel (which is an invalid type based on ModalProps)
        await mount(PieModal, { props });
        await modalComponent.isModalVisible();
        const fallBackHeadingExists = await modalComponent.headingByTagExists('h2');

        // Assert
        expect(fallBackHeadingExists).toBe(true);
    }));

    test.describe('When modal is closed', () => {
        test.describe('by clicking the close button', () => {
            test('should dispatch event `pie-modal-close`', async ({ mount }) => {
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

                await modalComponent.clickCloseModal();

                // Assert
                expect(events).toHaveLength(1);
            });

            test('should close the modal', async ({ mount }) => {
            // Arrange

                await mount(PieModal, {
                    props: {
                        isOpen: true,
                        isDismissible: true,
                    },
                });

                // Act
                await modalComponent.clickCloseModal();
                const isModalVisible = await modalComponent.isModalVisible();

                // Assert
                expect(isModalVisible).toBe(false);
            });
        });

        test.describe('by clicking the back button', () => {
            test('should dispatch event `pie-modal-back`', async ({ mount }) => {
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

                // Act
                await modalComponent.clickBackModal();

                // Assert
                expect(events).toHaveLength(1);
            });
        });

        test.describe('by clicking the backdrop', () => {
            test('should dispatch event `pie-modal-close`', async ({ mount }) => {
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
                await modalComponent.clickBackdrop();

                // Assert
                expect(events).toHaveLength(1); // TODO - Event object is null for this test
            });

            test('should close the modal', async ({ mount }) => {
                // Arrange
                await mount(PieModal, {
                    props: {
                        isOpen: true,
                        isDismissible: true,
                    },
                });

                // Act
                await modalComponent.clickBackdrop();
                const isModalVisible = await modalComponent.isModalVisible();

                // Assert
                expect(isModalVisible).toBe(false);
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
                    await modalComponent.clickCloseModal();

                    const focusedElement = page.locator(':focus');
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
                    await modalComponent.clickCloseModal();

                    const focusedElement = page.locator(':focus');
                    const focusedElementId = await focusedElement.getAttribute('id');

                    // Assert
                    expect(focusedElementId).toBe('actual-focus');
                });
            });

            test.describe('when not given', () => {
                [{
                    mechanism: 'close button',
                    modalCloseFunction: async (page : Page) => {
                        const modalComponent = new ModalComponent(page);
                        await modalComponent.clickCloseModal();
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

                            const focusedElement = page.locator(':focus');
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
                const isCloseButtonVisible = await modalComponent.isCloseButtonVisible();

                // Assert
                expect(isCloseButtonVisible).toBe(true);
            });

            test('should close the modal when the close button is clicked', async ({ mount }) => {
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
                await modalComponent.clickCloseModal();
                const isModalVisible = await modalComponent.isModalVisible();

                // Assert
                expect(isModalVisible).toBe(false);
            });

            test('should close the modal when the backdrop is clicked', async ({ mount }) => {
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
                await modalComponent.clickBackdrop();
                const isModalVisible = await modalComponent.isModalVisible();

                // Assert
                expect(isModalVisible).toBe(false);
            });

            test('should close the modal when the Escape key is pressed', async ({ mount, page }) => {
                // Arrange
                await mount(PieModal, {
                    props: {
                        isOpen: true,
                        isDismissible: true,
                    },
                });

                // Act
                await modalComponent.isModalVisible();
                await page.keyboard.press('Escape');
                const isModalVisible = await modalComponent.isModalVisible();

                // Assert
                expect(isModalVisible).toBe(false);
            });
        });

        test.describe('when `isDismissible` is `false`', () => {
            test('close button should not be visible', async ({ mount }) => {
                // Arrange
                await mount(PieModal, {
                    props: {
                        isOpen: true,
                        isDismissible: false,
                    },
                });

                // Act
                const isCloseButtonVisible = await modalComponent.isCloseButtonVisible();

                // Assert
                expect(isCloseButtonVisible).toBe(false);
            });

            test('should NOT close the modal when the backdrop is clicked', async ({ mount }) => {
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
                await modalComponent.clickBackdrop();
                const isModalVisible = await modalComponent.isModalVisible();

                // Assert
                expect(isModalVisible).toBe(true);
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
                const isModalVisible = await modalComponent.isModalVisible();

                // Assert
                expect(isModalVisible).toBe(true);
            });
        });
    });

    test.describe('isOpen prop', () => {
        test('should not render open when isOpen = false', async ({ mount }) => {
            // Arrange
            await mount(PieModal, {
                props: {
                    isOpen: false,
                },
            });

            // Act
            const isModalVisible = await modalComponent.isModalVisible();

            // Assert
            expect(isModalVisible).toBe(false);
        });

        test('should render open when isOpen = true', async ({ mount }) => {
            // Arrange
            await mount(PieModal, {
                props: {
                    isOpen: true,
                },
            });

            // Act
            const isModalVisible = await modalComponent.isModalVisible();

            // Assert
            expect(isModalVisible).toBe(true);
        });
    });

    test.describe('scrolling logic', () => {
        test('Should not be able to scroll when isOpen = true', async ({ mount, page }) => {
            // Arrange
            const component = renderTestPieModal();

            await mount(
                WebComponentTestWrapper,
                {
                    props: {
                        pageMode: true,
                    },
                    slots: {
                        component,
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

        test('Should scroll to the bottom when Pie Modal is closedA', async ({ mount, page }) => {
            // Arrange
            const component = renderTestPieModal();

            await mount(
                WebComponentTestWrapper,
                {
                    props: {
                        pageMode: true,
                    },
                    slots: {
                        component,
                        pageMarkup: createScrollablePageHTML(),
                    },
                },
            );

            // Act
            await modalComponent.clickCloseModal();

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
                await mount(
                    PieModal,
                    {
                        props: {
                            isOpen: true,
                            hasBackButton: true,
                        },
                    },
                );

                // Act
                await modalComponent.isModalVisible();
                const isModalVisible = await modalComponent.isBackButtonVisible();

                // Assert
                expect(isModalVisible).toBe(true);
            });

            test('should close the modal when the back button is clicked', async ({ mount }) => {
                // Arrange
                await mount(
                    PieModal,
                    {
                        props: {
                            isOpen: true,
                            hasBackButton: true,
                        },
                    },
                );

                // Act
                await modalComponent.clickBackModal();
                const isModalVisible = await modalComponent.isModalVisible();

                // Assert
                expect(isModalVisible).toBe(false);
            });
        });

        test.describe('when `hasBackButton` is `false`', () => {
            test('should make the modal NOT contain a back button', async ({ mount }) => {
                // Arrange
                await mount(
                    PieModal,
                    {
                        props: {
                            isOpen: true,
                            hasBackButton: false,
                        },
                    },
                );

                // Act
                const isBackButtonVisible = await modalComponent.isBackButtonVisible();

                // Act & Assert
                expect(isBackButtonVisible).toBe(false);
            });
        });
    });

    test.describe('actions', () => {
        [{ name: 'leading', buttonText: 'Confirm' }, { name: 'supporting', buttonText: 'Cancel' }].forEach((action) => {
            test.describe(`${action.name} action, when clicked`, () => {
                test('should close the modal', async ({ mount }) => {
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
                    await modalComponent.isModalVisible();
                    await modalComponent.clickButtonWithText(action.buttonText);
                    const isModalVisible = await modalComponent.isModalVisible();

                    // Assert
                    expect(isModalVisible).toBe(false);
                });

                test('should submit the correct return value', async ({ mount }) => {
                    // Arrange
                    type ActionEvent = {
                        eventObject: Event,
                        eventName: string,
                    }
                    const events : Array<ActionEvent> = [];
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
                        on: {
                            [ON_MODAL_LEADING_ACTION_CLICK]: (event: Event) => events.push({ eventObject: event, eventName: 'leading' }),
                            [ON_MODAL_SUPPORTING_ACTION_CLICK]: (event: Event) => events.push({ eventObject: event, eventName: 'supporting' }),
                        },
                    });

                    // Act
                    await modalComponent.clickButtonWithText(action.buttonText);

                    // Assert
                    expect(events[0].eventName).toBe(action.name);
                });
            });
        });
    });

    test.describe('Props: `aria`', () => {
        test.describe('when aria exist', () => {
            test('should render component elements with the correct aria-labels', async ({ mount }) => {
                // Arrange
                await mount(PieModal, {
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
                const ariaCloseLabel = await modalComponent.getCloseButtonAriaLabel();

                // Back button
                const ariaBackLabel = await modalComponent.getBackButtonAriaLabel();

                // Assert
                expect(ariaCloseLabel).toBe('Close label info');
                expect(ariaBackLabel).toBe('Back label info');
            });

            test.describe('when modal `isloading` is true', () => {
                test('should render component with the correct aria values: `aria-label` & `aria-busy`', async ({ mount }) => {
                    // Arrange
                    await mount(PieModal, {
                        props: {
                            isOpen: true,
                            isLoading: true,
                            aria: {
                                loading: 'Loading label info',
                            },
                        },
                    });

                    // Loading state
                    const ariaLoadingLabel = await modalComponent.getModalAriaLabel();
                    const ariaLoadingBusy = await modalComponent.getModalAriaBusy();

                    // Assert
                    expect(ariaLoadingLabel).toBe('Loading label info');
                    expect(ariaLoadingBusy).toBe('true');
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

                    let ariaLoadingLabel = await modalComponent.getModalAriaLabel();
                    let ariaLoadingBusy = await modalComponent.getModalAriaBusy();

                    // Assert: When `isLoading: true`
                    expect(ariaLoadingLabel).toBe('Loading label info');
                    expect(ariaLoadingBusy).toBe('true');

                    await component.update({ props: { isLoading: false } });

                    ariaLoadingLabel = await modalComponent.getModalAriaLabel();
                    ariaLoadingBusy = await modalComponent.getModalAriaBusy();

                    // Assert: When `isLoading: false`
                    expect(ariaLoadingLabel).toBeNull();
                    expect(ariaLoadingBusy).toBe('false');
                });
            });
        });

        test.describe('when aria does not exist', () => {
            test('should not render the aria-labels', async ({ mount }) => {
                // Arrange
                await mount(PieModal, {
                    props: {
                        isOpen: true,
                        isDismissible: true,
                        hasBackButton: true,
                    },
                });

                // Act
                // Close button
                const ariaCloseLabel = await modalComponent.getCloseButtonAriaLabel();

                // Back button
                const ariaBackLabel = await modalComponent.getBackButtonAriaLabel();

                // Assert
                expect(ariaCloseLabel).toBe(null);
                expect(ariaBackLabel).toBe(null);
            });
        });

        test.describe('when modal `isloading` is false', () => {
            test('should not render aria-label', async ({ mount }) => {
                // Arrange
                await mount(PieModal, {
                    props: {
                        isOpen: true,
                        isLoading: false,
                    },
                });

                // Loading state
                const ariaLoadingLabel = await modalComponent.getModalAriaLabel();

                // Assert
                expect(ariaLoadingLabel).toBe(null);
            });

            test('should set `aria-busy` to `false`', async ({ mount }) => {
                // Arrange
                await mount(PieModal, {
                    props: {
                        isOpen: true,
                        isLoading: false,
                    },
                });

                // Loading state
                const ariaLoadingBusy = await modalComponent.getModalAriaBusy();

                // Assert
                expect(ariaLoadingBusy).toBe('false');
            });
        });
    });
});
