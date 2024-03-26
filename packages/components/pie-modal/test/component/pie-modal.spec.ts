import { test, expect } from '@sand4rt/experimental-ct-web';
import { type Page } from '@playwright/test';
import {
    WebComponentTestWrapper,
} from '@justeattakeaway/pie-webc-testing/src/helpers/components/web-component-test-wrapper/WebComponentTestWrapper.ts';
import { PieModalPage } from 'test/helpers/page-object/pie-modal.page.ts';
import { createScrollablePageHTML, renderTestPieModal } from '../helpers/index.ts';

import { PieModal } from '../../src/index.ts';
import {
    ON_MODAL_BACK_EVENT,
    ON_MODAL_CLOSE_EVENT,
    ON_MODAL_LEADING_ACTION_CLICK,
    ON_MODAL_SUPPORTING_ACTION_CLICK,
    headingLevels,
} from '../../src/defs.ts';

let modalPage: PieModalPage;

test.describe('modal', () => {
    test.beforeEach(async ({ page }) => {
        modalPage = new PieModalPage(page);
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
        const modal = await modalPage.isModalVisible();

        // Assert
        expect(modal).toBe(true);
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

        await modalPage.isModalVisible();

        const headingExists = await modalPage.headingByTagExists(headingLevel);

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

        await modalPage.isModalVisible();

        const fallBackHeadingExists = await modalPage.headingByTagExists('h2');

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

                await modalPage.clickCloseModal();

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
                await modalPage.clickCloseModal();

                // Assert
                expect(await modalPage.isModalVisible()).toBe(false);
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

                await modalPage.clickBackModal();

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
                await modalPage.clickBackdrop();

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
                await modalPage.clickBackdrop();

                // Assert
                expect(await modalPage.isModalVisible()).toBe(false);
            });
        });

        test.describe('`returnFocusAfterCloseSelector` prop', () => {
            test.describe('when given', () => {
                test('should return focus to specified element', async ({ mount, page }) => {
                    // Arrange
                    const modalPage = new PieModalPage(page);

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
                    await modalPage.clickCloseModal();

                    const focusedElement = await page.locator(':focus');
                    const focusedElementId = await focusedElement.getAttribute('id');

                    // Assert
                    expect(focusedElementId).toBe('focus-me');
                });

                test('should return focus to first matching element', async ({ page, mount }) => {
                    // Arrange
                    const modalPage = new PieModalPage(page);

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
                    await modalPage.clickCloseModal();

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
                        const modalPage = new PieModalPage(page);
                        await modalPage.clickCloseModal();
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
                await mount(
                    PieModal,
                    {
                        props: {
                            isOpen: true,
                            isDismissible: true,
                        },
                    },
                );

                // Assert
                expect(await modalPage.isCloseButtonVisible()).toBe(true);
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
                await modalPage.clickCloseModal();

                // Assert
                expect(await modalPage.isModalVisible()).toBe(false);
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
                await modalPage.clickBackdrop();

                // Assert
                expect(await modalPage.isModalVisible()).toBe(false);
            });

            test('should close the modal when the Escape key is pressed', async ({ mount, page }) => {
                // Arrange
                await mount(PieModal, {
                    props: {
                        isOpen: true,
                        isDismissible: true,
                    },
                });

                await modalPage.isModalVisible();

                // Act
                await page.keyboard.press('Escape');

                // Assert
                expect(await modalPage.isModalVisible()).toBe(false);
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

                // Assert
                expect(await modalPage.isCloseButtonVisible()).toBe(false);
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
                await modalPage.clickBackdrop();

                // Assert
                expect(await modalPage.isModalVisible()).toBe(true);
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

                // Assert
                expect(await modalPage.isModalVisible()).toBe(true);
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

            // Assert
            expect(await modalPage.isModalVisible()).toBe(false);
        });

        test('should render open when isOpen = true', async ({ mount }) => {
            // Arrange
            await mount(PieModal, {
                props: {
                    isOpen: true,
                },
            });

            // Assert
            expect(await modalPage.isModalVisible()).toBe(true);
        });
    });

    test.describe('scrolling logic', () => {
        test('Should not be able to scroll when isOpen = true', async ({ mount, page }) => {
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

        test('Should scroll to the bottom when Pie Modal is closed', async ({ mount, page }) => {
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
            await modalPage.clickCloseModal();

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

                await modalPage.isModalVisible();

                // Act & Assert
                expect(await modalPage.isBackButtonVisible()).toBe(true);
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
                await modalPage.clickBackModal();

                // Assert
                expect(await modalPage.isModalVisible()).toBe(false);
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

                // Act & Assert
                expect(await modalPage.isBackButtonVisible()).toBe(false);
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

                    await modalPage.isModalVisible();

                    // Act
                    await modalPage.clickButtonWithText(action.buttonText);

                    // Assert
                    expect(await modalPage.isModalVisible()).toBe(false);
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
                    await modalPage.clickButtonWithText(action.buttonText);

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
                const ariaCloseLabel = await modalPage.getCloseButtonAriaLabel();

                // Back button
                const ariaBackLabel = await modalPage.getBackButtonAriaLabel();

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
                    const ariaLoadingLabel = await modalPage.getModalAriaLabel();
                    const ariaLoadingBusy = await modalPage.getModalAriaBusy();

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

                    let ariaLoadingLabel = await modalPage.getModalAriaLabel();
                    let ariaLoadingBusy = await modalPage.getModalAriaBusy();

                    // Assert: When `isLoading: true`
                    expect(ariaLoadingLabel).toBe('Loading label info');
                    expect(ariaLoadingBusy).toBe('true');

                    await component.update({ props: { isLoading: false } });

                    ariaLoadingLabel = await modalPage.getModalAriaLabel();
                    ariaLoadingBusy = await modalPage.getModalAriaBusy();

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
                const ariaCloseLabel = await modalPage.getCloseButtonAriaLabel();

                // Back button
                const ariaBackLabel = await modalPage.getBackButtonAriaLabel();

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
                const ariaLoadingLabel = await modalPage.getModalAriaLabel();

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
                const ariaLoadingBusy = await modalPage.getModalAriaBusy();

                // Assert
                expect(ariaLoadingBusy).toBe('false');
            });
        });
    });
});
