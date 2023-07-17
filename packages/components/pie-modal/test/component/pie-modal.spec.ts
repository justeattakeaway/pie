import { test, expect } from '@sand4rt/experimental-ct-web';
import { type Page } from '@playwright/test';
import { PieButton } from '@justeattakeaway/pie-button';
import { PieIconButton } from '@justeattakeaway/pie-icon-button';
import {
    WebComponentTestWrapper,
} from '@justeattakeaway/pie-webc-testing/src/helpers/components/web-component-test-wrapper/WebComponentTestWrapper.ts';
import { renderTestPieModal } from '../helpers/index.ts';

import { PieModal } from '@/index';
import { ON_MODAL_CLOSE_EVENT, headingLevels } from '@/defs';

const closeButtonSelector = '[data-test-id="modal-close-button"]';
const modalSelector = '[data-test-id="pie-modal"]';

// Mount then unmount any components that are used inside of pie-modal so that
// they have been registered with the browser before the tests run.
// There is likely a nicer way to do this but this will temporarily
// unblock tests.
test.beforeEach(async ({ mount }) => {
    await (await mount(PieButton)).unmount();
    await (await mount(PieIconButton)).unmount();
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

            const modal = page.locator(modalSelector);
            expect(modal).toBeVisible();

            // Act
            await page.click(closeButtonSelector);

            // Assert
            expect(modal).not.toBeVisible();
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
            await page.click(modalSelector, { position: { x: -10, y: -10 } }); // Click outside dialog

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

            const modal = await page.locator(modalSelector);
            expect(modal).toBeVisible();

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

            const element = await page.locator(modalSelector);

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

            const modal = await page.locator(modalSelector);
            await expect(modal).toBeVisible();

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

            const element = await page.locator(modalSelector);

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
            const modal = await page.locator(modalSelector);

            // Assert
            await expect(modal).toBeVisible();
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
                    },
                });

                const modal = await page.locator(modalSelector);
                expect(modal).toBeVisible();

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
                    },
                });

                // Act
                await page.click(buttonSelector);
                const returnValue = await page.$eval(
                    modalSelector,
                    (dialog : HTMLDialogElement) => dialog.returnValue,
                );

                // Assert
                expect(returnValue).toBe(actionName);
            });
        });
    });
});
