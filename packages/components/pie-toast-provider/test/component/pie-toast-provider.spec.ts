import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieToastProvider } from '../../src/index.ts';
import {
    ON_TOAST_PROVIDER_QUEUE_UPDATE_EVENT,
    PRIORITY_ORDER,
    type ExtendedToastProps,
} from '../../src/defs.ts';

const componentSelector = '[data-test-id="pie-toast-provider"]';

test.describe('PieToastProvider - Component tests', () => {
    test('should render successfully', async ({ mount, page }) => {
        // Arrange
        await mount(PieToastProvider);

        // Act
        const toastProvider = page.locator(componentSelector);

        // Assert
        expect(toastProvider).toBeDefined();
    });

    test.describe('Priority Order Tests', () => {
        test('should handle toast priority correctly', async ({ page, mount }) => {
            // Arrange
            let toasts: ExtendedToastProps[] = [];
            await mount(PieToastProvider, {
                on: {
                    [ON_TOAST_PROVIDER_QUEUE_UPDATE_EVENT]: (queue: ExtendedToastProps[]) => {
                        toasts = queue;
                    },
                },
            });

            // Act
            await page.evaluate(() => {
                const toastProvider = document.querySelector('pie-toast-provider') as PieToastProvider;

                toastProvider.createToast({
                    message: 'Neutral toast (Priority 10)',
                    variant: 'neutral',
                });

                toastProvider.createToast({
                    message: 'Success toast with action (Priority 4)',
                    variant: 'success',
                    leadingAction: { text: 'Action' },
                });

                toastProvider.createToast({
                    message: 'Info toast with action (5)',
                    variant: 'info',
                    leadingAction: { text: 'Action' },
                });

                toastProvider.createToast({
                    message: 'Error toast (Priority 2)',
                    variant: 'error',
                });
            });

            // Assert
            const queueVariants = toasts.map((toast: ExtendedToastProps) => `${toast.variant}${toast.leadingAction ? '-actionable' : ''}`);
            for (let i = 1; i < queueVariants.length; i++) {
                const prevPriority = PRIORITY_ORDER[queueVariants[i - 1]];
                const currPriority = PRIORITY_ORDER[queueVariants[i]];
                expect(currPriority).toBeGreaterThanOrEqual(prevPriority); // Ensure the current has a higher priority
            }
        });

        test('should clear all toasts when clearToasts is called', async ({ page, mount }) => {
            // Arrange
            let toasts: ExtendedToastProps[] = [];
            await mount(PieToastProvider, {
                on: {
                    [ON_TOAST_PROVIDER_QUEUE_UPDATE_EVENT]: (queue: ExtendedToastProps[]) => {
                        toasts = queue;
                    },
                },
            });

            // Act
            await page.evaluate(() => {
                const toastProvider = document.querySelector('pie-toast-provider') as PieToastProvider;

                toastProvider.createToast({
                    message: 'Toast 1',
                    variant: 'neutral',
                });

                toastProvider.createToast({
                    message: 'Toast 2',
                    variant: 'success',
                });
            });

            // Act
            await page.evaluate(() => {
                const toastProvider = document.querySelector('pie-toast-provider') as PieToastProvider;
                toastProvider.clearToasts();
            });

            // Assert
            expect(toasts.length).toBe(0);
        });
    });

    test.describe('Props', () => {
        test.describe('options', () => {
            test('should apply global options to all toasts when options are passed', async ({ page, mount }) => {
                let toasts: ExtendedToastProps[] = [];
                await mount(PieToastProvider, {
                    props: {
                        options: {
                            variant: 'neutral',
                            isDismissible: true,
                        },
                    } as PieToastProvider,
                    on: {
                        [ON_TOAST_PROVIDER_QUEUE_UPDATE_EVENT]: (queue: ExtendedToastProps[]) => {
                            toasts = queue;
                        },
                    },
                });

                // Act
                await page.evaluate(() => {
                    const toastProvider = document.querySelector('pie-toast-provider') as PieToastProvider;
                    toastProvider.createToast({ message: 'Toast 1' });
                    toastProvider.createToast({ message: 'Toast 2' });
                });

                // Assert
                toasts.forEach((toast) => {
                    expect(toast.isDismissible).toBeTruthy();
                    expect(toast.variant).toBe('neutral');
                });
            });

            test('should respect individual toast overrides when provided', async ({ page, mount }) => {
                const toasts: ExtendedToastProps[] = [];
                await mount(PieToastProvider, {
                    props: {
                        options: { duration: null },
                    } as PieToastProvider,

                });

                // Act
                await page.evaluate(() => {
                    const toastProvider = document.querySelector('pie-toast-provider') as PieToastProvider;
                    toastProvider.createToast({ message: 'Toast 1' });
                    toastProvider.createToast({ message: 'Toast 2' });
                    toastProvider.createToast({ message: 'Toast 3', isDismissible: false });
                });

                // Assert
                expect(toasts[0].isDismissible).toBeTruthy(); // Global option should apply
                expect(toasts[1].isDismissible).toBeFalsy(); // Override should take precedence
            });
        });
    });
});
