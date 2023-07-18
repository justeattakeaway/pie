import { test, expect } from '@sand4rt/experimental-ct-web';
import { type Page } from '@playwright/test';
import { PieIconButton } from '@justeattakeaway/pie-icon-button';
import {
    WebComponentTestWrapper,
} from '@justeattakeaway/pie-webc-testing/src/helpers/components/web-component-test-wrapper/WebComponentTestWrapper.ts';
import { createScrollablePageHTML, renderTestPieModal } from '../helpers/index.ts';

import { PieModal } from '@/index';
import { headingLevels } from '@/defs';

const closeButtonSelector = '[data-test-id="modal-close-button"]';
const componentSelector = '[data-test-id="pie-modal"]';

// Mount any components that are used inside of pie-modal so that
// they have been registered with the browser before the tests run.
// There is likely a nicer way to do this but this will temporarily
// unblock tests.
test.beforeEach(async ({ page, mount }) => {
    await mount(
        PieIconButton,
        {},
    );

    // Removing the element so it's not present in the tests (but is still registered in the DOM)
    await page.evaluate(() => {
        const element : Element | null = document.querySelector('pie-icon-button');
        element?.remove();
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
            const messages: string[] = [];
            await mount(
                PieModal,
                {
                    props: {
                        isOpen: true,
                        isDismissible: true,
                    },
                    on: {
                        click: (event: string) => messages.push(event),
                    },
                },
            );

            await page.locator(closeButtonSelector).click();

            // Assert
            expect(messages).toHaveLength(1);
        });
    });

    test.describe('by clicking the backdrop', () => {
        test('should dispatch event `pie-modal-close`', async ({ mount, page }) => {
            // Arrange
            const messages: string[] = [];
            await mount(
                PieModal,
                {
                    props: {
                        isOpen: true,
                    },
                    on: {
                        click: (event: string) => messages.push(event),
                    },
                },
            );

            // Act
            await page.locator('#dialog').click();

            // Assert
            expect(messages).toHaveLength(1);
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
                await page.locator(closeButtonSelector).click();

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
                await page.locator(closeButtonSelector).click();

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
                    await page.locator(closeButtonSelector).click();
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
                        await page.locator('[data-test-id="open-modal"]').click();
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

            // Act & Assert
            await expect(component.locator(closeButtonSelector)).toBeVisible();
        });

        test('should close the modal when the close button is clicked', async ({ mount }) => {
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
            await component.locator('[data-test-id="modal-close-button"]').click();

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
            await page.locator('body').click();

            const element = await page.locator('#dialog');

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
            const component = await mount(
                PieModal,
                {
                    props: {
                        isOpen: true,
                        isDismissible: false,
                    },
                },
            );

            // Act
            await page.keyboard.press('Escape');

            // Assert
            await expect(component).not.toBeVisible();
        });
    });

    test.describe('when `isDismissible` is `false`', () => {
        test('should make the modal NOT contain a close button', async ({ mount }) => {
            // Arrange
            const component = await mount(
                PieModal,
                {
                    props: {
                        isOpen: true,
                        isDismissible: false,
                    },
                },
            );

            // Act & Assert
            await expect(component.locator(closeButtonSelector)).not.toBeVisible();
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

            const element = await page.locator('#dialog');

            const styles = await element.evaluate((modal) => {
                const computedStyles = window.getComputedStyle(modal);
                return {
                    display: computedStyles.getPropertyValue('display'),
                };
            });

            // Assert
            expect(styles.display).toBe('block');
        });

        test('should NOT close the modal when the Escape key is pressed', async ({ mount, page }) => {
            // Arrange
            const component = await mount(
                PieModal,
                {
                    props: {
                        isOpen: true,
                        isDismissible: false,
                    },
                },
            );

            // Act
            await page.keyboard.press('Escape');

            // Assert
            await expect(component.locator('dialog')).toBeVisible();
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
