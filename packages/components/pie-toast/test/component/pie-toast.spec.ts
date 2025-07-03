import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { toast } from 'test/helpers/page-object/selectors.ts';
import { type ToastProps, variants } from '../../src/defs.ts';

test.describe('PieToast - Component tests', () => {
    const mainAction = {
        text: 'Confirm',
        ariaLabel: 'Button that confirm the action',
    };

    test('should render successfully', async ({ page }) => {
        // Arrange
        const toastPage = new BasePage(page, 'toast');
        await toastPage.load();

        // Act
        const toastComponent = page.getByTestId(toast.selectors.container.dataTestId);

        // Assert
        await expect(toastComponent).toBeVisible();
    });

    test.describe('Props', () => {
        test.describe('message', () => {
            test('should render the message', async ({ page }) => {
                // Arrange
                const toastPage = new BasePage(page, 'toast');
                const confirmMessage = 'Item has been created';

                const props: ToastProps = {
                    message: confirmMessage,
                };
                await toastPage.load({ ...props });

                // Act
                const toastComponent = page.getByTestId(toast.selectors.container.dataTestId);
                const toastMessage = page.getByTestId(toast.selectors.message.dataTestId);

                // Assert
                await expect(toastComponent).toBeVisible();
                await expect(toastMessage).toBeVisible();
                await expect(toastMessage).toHaveText(confirmMessage);
            });

            test('should not render the message if is empty string', async ({ page }) => {
                // Arrange
                const toastPage = new BasePage(page, 'toast');
                const props: ToastProps = {
                    message: '',
                };

                await toastPage.load({ ...props });

                // Act
                const toastComponent = page.getByTestId(toast.selectors.container.dataTestId);
                const toastMessage = page.getByTestId(toast.selectors.message.dataTestId);

                // Assert
                await expect(toastComponent).toBeVisible();
                await expect(toastMessage).not.toBeVisible();
            });
        });

        test.describe('isDismissible', () => {
            test('should not show the close icon if isDismissible is false', async ({ page }) => {
                // Arrange
                const toastPage = new BasePage(page, 'toast');
                const props: Partial<ToastProps> = {
                    isDismissible: false,
                };
                await toastPage.load({ ...props });

                // Act
                const toastComponent = page.getByTestId(toast.selectors.container.dataTestId);
                const iconClose = page.getByTestId(toast.selectors.close.dataTestId);

                // Assert
                await expect(toastComponent).toBeVisible();
                await expect(iconClose).not.toBeVisible();
            });
        });

        test.describe('isMultiline', () => {
            test('should show the footer if isMultiline is true and has leadingAction', async ({ page }) => {
                // Arrange
                const toastPage = new BasePage(page, 'toast');
                const props: Partial<ToastProps> = {
                    isMultiline: true,
                    leadingAction: mainAction,
                };
                await toastPage.load({ ...props });

                // Act
                const toastComponent = page.getByTestId(toast.selectors.container.dataTestId);
                const footer = page.getByTestId(toast.selectors.footer.dataTestId);
                const leadingAction = page.getByTestId(toast.selectors.leadingAction.dataTestId);

                // Assert
                await expect(toastComponent).toBeVisible();
                await expect(footer).toBeVisible();
                await expect(leadingAction).toBeVisible();
            });
        });

        test.describe('leadingAction', () => {
            test('should show the leadingAction when provided and if multiline is false', async ({ page }) => {
                // Arrange
                const toastPage = new BasePage(page, 'toast');
                const props: Partial<ToastProps> = {
                    isMultiline: false,
                    leadingAction: mainAction,
                };
                await toastPage.load({ ...props });

                // Act
                const toastComponent = page.getByTestId(toast.selectors.container.dataTestId);
                const leadingAction = page.getByTestId(toast.selectors.leadingAction.dataTestId);

                // Assert
                await expect(toastComponent).toBeVisible();
                await expect(leadingAction).toBeVisible();
            });

            test('should not show the footer if leadingAction is not provided', async ({ page }) => {
                // Arrange
                const toastPage = new BasePage(page, 'toast');
                const props: Partial<ToastProps> = {
                    isMultiline: true,
                };
                await toastPage.load({ ...props });

                // Act
                const toastComponent = page.getByTestId(toast.selectors.container.dataTestId);
                const footer = page.getByTestId(toast.selectors.footer.dataTestId);
                const leadingAction = page.getByTestId(toast.selectors.leadingAction.dataTestId);

                // Assert
                await expect(toastComponent).toBeVisible();
                await expect(footer).not.toBeVisible();
                await expect(leadingAction).not.toBeVisible();
            });

            test('should show the footer if leadingAction is provided', async ({ page }) => {
                // Arrange
                const toastPage = new BasePage(page, 'toast');
                const props: Partial<ToastProps> = {
                    isDismissible: false,
                    isMultiline: true,
                    leadingAction: mainAction,
                };
                await toastPage.load({ ...props });

                // Act
                const toastComponent = page.getByTestId(toast.selectors.container.dataTestId);
                const footer = page.getByTestId(toast.selectors.footer.dataTestId);
                const actionLeading = page.getByTestId(toast.selectors.leadingAction.dataTestId);

                // Assert
                await expect(toastComponent).toBeVisible();
                await expect(footer).toBeVisible();
                await expect(actionLeading).toBeVisible();
            });
        });
    });

    test.describe('role attribute', () => {
        test('should set role to "alert" when variant is "error"', async ({ page }) => {
            // Arrange
            const toastPage = new BasePage(page, 'toast');
            const props: Partial<ToastProps> = {
                variant: 'error',
            };
            await toastPage.load({ ...props });

            // Act
            const toastComponent = page.getByTestId(toast.selectors.container.dataTestId);

            // Assert
            await expect(toastComponent).toHaveAttribute('role', 'alert');
        });

        variants.filter((variant) => variant !== 'error').forEach((variant) => {
            test(`should set role to "status" when variant is "${variant}"`, async ({ page }) => {
                // Arrange
                const toastPage = new BasePage(page, 'toast');
                const props: Partial<ToastProps> = {
                    variant,
                };
                await toastPage.load({ ...props });

                // Act
                const toastComponent = page.getByTestId(toast.selectors.container.dataTestId);

                // Assert
                await expect(toastComponent).toHaveAttribute('role', 'status');
            });
        });
    });
});
