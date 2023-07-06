import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieIconButton } from '@justeattakeaway/pie-icon-button';
import {
    WebComponentTestWrapper,
} from '@justeattakeaway/pie-webc-testing/src/helpers/components/web-component-test-wrapper/WebComponentTestWrapper.ts';
import { renderTestPieModal } from '../helpers/index.ts';

import { PieModal } from '@/index';
import { headingLevels } from '@/defs';

const closeButtonSelector = '[data-test-id="modal-close-button"]';

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
    });
});

test.describe('`isDismissible` prop', () => {
    test.describe('when `true`', () => {
        test('should make modal contain a close button', async ({ mount }) => {
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
        test('should make modal NOT contain a close button', async ({ mount }) => {
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
