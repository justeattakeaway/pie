import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieToast } from '../../src/index.ts';
import { type ToastProps, variants } from '../../src/defs.ts';

const rootSelector = 'pie-toast';
const componentSelector = `[data-test-id="${rootSelector}"]`;
const messageSelector = `[data-test-id="${rootSelector}-message"]`;
const closeSelector = `[data-test-id="${rootSelector}-close"]`;
const footerSelector = `[data-test-id="${rootSelector}-footer"]`;
const leadingActionSelector = `[data-test-id="${rootSelector}-leading-action"]`;

function getToastIconSelectors (variant: string): string {
    return `[data-test-id="${rootSelector}-heading-icon-${variant}"]`;
}

test.describe('PieToast - Component tests', () => {
    // IMPORTANT: Mounting and Unmounting the component before each test ensures that any tests that do not explicitly
    // mount the component will still have it available in Playwright's cache (loaded and registered in the test browser)
    test.beforeEach(async ({ mount }) => {
        const component = await mount(PieToast);
        await component.unmount();
    });

    const mainAction = {
        text: 'Confirm',
        ariaLabel: 'Button that confirm the action',
    };

    test('should render successfully', async ({ mount, page }) => {
        // Arrange
        await mount(PieToast, {
            props: {} as ToastProps,
        });

        // Wait for the component to render alongside its animations
        await page.waitForTimeout(250);

        // Act
        const toast = page.locator(componentSelector);

        // Assert
        expect(toast).toBeVisible();
    });

    test.describe('Props', () => {
        test.describe('isOpen', () => {
            test('should have c-toast--animate-out class if isOpen is false', async ({ mount, page }) => {
                // Arrange
                await mount(PieToast, {
                    props: {
                        isOpen: false,
                    } as ToastProps,
                });

                // Wait for the component to render alongside its animations
                await page.waitForTimeout(250);

                // Act
                const toast = page.locator(componentSelector);

                // Assert
                expect(toast).toBeVisible();
                expect(toast).toHaveClass(' c-toast c-toast--neutral c-toast--animate-out ');
            });
        });

        test.describe('message', () => {
            test('should render the message', async ({ mount, page }) => {
                // Arrange
                const confirmMessage = 'Item has been created';
                await mount(PieToast, {
                    props: {
                        message: confirmMessage,
                    } as ToastProps,
                });

                // Wait for the component to render alongside its animations
                await page.waitForTimeout(250);

                // Act
                const toast = page.locator(componentSelector);
                const message = page.locator(messageSelector);

                // Assert
                expect(toast).toBeVisible();
                expect(message).toBeVisible();
                expect(message).toHaveText(confirmMessage);
            });

            test('should not render the message if is empty string', async ({ mount, page }) => {
                // Arrange
                await mount(PieToast, {
                    props: {
                        message: '',
                    } as ToastProps,
                });

                // Wait for the component to render alongside its animations
                await page.waitForTimeout(250);

                // Act
                const toast = page.locator(componentSelector);
                const message = page.locator(messageSelector);

                // Assert
                expect(toast).toBeVisible();
                expect(message).not.toBeVisible();
            });
        });

        test.describe('isDismissible', () => {
            test('should not show the close icon if isDismissible is false', async ({ mount, page }) => {
                // Arrange
                await mount(PieToast, {
                    props: {
                        isDismissible: false,
                    },
                });

                // Wait for the component to render alongside its animations
                await page.waitForTimeout(250);

                // Act
                const toast = page.locator(componentSelector);
                const iconClose = page.locator(closeSelector);

                // Assert
                expect(toast).toBeVisible();
                expect(iconClose).not.toBeVisible();
            });
        });

        test.describe('isMultiline', () => {
            test('should show the footer if isMultiline is true and has leadingAction', async ({ mount, page }) => {
                // Arrange
                await mount(PieToast, {
                    props: {
                        isMultiline: true,
                        leadingAction: mainAction,
                    } as ToastProps,
                });

                // Wait for the component to render alongside its animations
                await page.waitForTimeout(250);

                // Act
                const toast = page.locator(componentSelector);
                const footer = page.locator(footerSelector);
                const leadingAction = page.locator(leadingActionSelector);

                // Assert
                expect(toast).toBeVisible();
                expect(footer).toBeVisible();
                expect(leadingAction).toBeVisible();
            });
        });

        test.describe('leadingAction', () => {
            test('should show the leadingAction when provided and if multiline is false', async ({ mount, page }) => {
                // Arrange
                await mount(PieToast, {
                    props: {
                        isMultiline: false,
                        leadingAction: mainAction,
                    } as ToastProps,
                });

                // Wait for the component to render alongside its animations
                await page.waitForTimeout(250);

                // Act
                const toast = page.locator(componentSelector);
                const leadingAction = page.locator(leadingActionSelector);

                // Assert
                expect(toast).toBeVisible();
                expect(leadingAction).toBeVisible();
            });

            test('should not show the footer if leadingAction is not provided', async ({ mount, page }) => {
                // Arrange
                await mount(PieToast, {
                    props: {
                        isMultiline: true,
                    } as ToastProps,
                });

                // Wait for the component to render alongside its animations
                await page.waitForTimeout(250);

                // Act
                const toast = page.locator(componentSelector);
                const footer = page.locator(footerSelector);
                const leadingAction = page.locator(leadingActionSelector);

                // Assert
                expect(toast).toBeVisible();
                expect(footer).not.toBeVisible();
                expect(leadingAction).not.toBeVisible();
            });

            test('should show the footer if leadingAction is provided', async ({ mount, page }) => {
                // Arrange
                await mount(PieToast, {
                    props: {
                        isDismissible: false,
                        isMultiline: true,
                        leadingAction: mainAction,
                    } as ToastProps,
                });

                // Wait for the component to render alongside its animations
                await page.waitForTimeout(250);

                // Act
                const toast = page.locator(componentSelector);
                const footer = page.locator(footerSelector);
                const actionLeading = page.locator(leadingActionSelector);

                // Assert
                expect(toast).toBeVisible();
                expect(footer).toBeVisible();
                expect(actionLeading).toBeVisible();
            });
        });

        test.describe('variant', () => {
            variants.forEach((variant) => {
                if (variant !== 'neutral') {
                    test(`should show the ${variant} icon`, async ({ mount, page }) => {
                        // Arrange
                        await mount(PieToast, {
                            props: {
                                variant: variant as ToastProps['variant'],
                            } as ToastProps,
                        });

                        // Wait for the component to render alongside its animations
                        await await page.waitForTimeout(250);

                        // Act
                        const toast = page.locator(componentSelector);
                        const icon = page.locator(getToastIconSelectors(variant));

                        // Assert
                        expect(toast).toBeVisible();
                        expect(icon).toBeVisible();
                    });
                } else {
                    test('should not show the icon when variant is neutral', async ({ mount, page }) => {
                        // Arrange
                        await mount(PieToast, {
                            props: {
                                variant: variant as ToastProps['variant'],
                            } as ToastProps,
                        });

                        // Wait for the component to render alongside its animations
                        await page.waitForTimeout(250);

                        // Act
                        const toast = page.locator(componentSelector);
                        const icon = page.locator(getToastIconSelectors(variant));

                        // Assert
                        expect(toast).toBeVisible();
                        expect(icon).not.toBeVisible();
                    });
                }
            });
        });
    });
});
