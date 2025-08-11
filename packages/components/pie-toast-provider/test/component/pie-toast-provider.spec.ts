import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

import type { PieToastProvider } from 'src/index.ts';
import { defaultProps as toastDefaultProps } from '@justeattakeaway/pie-toast/src/defs.ts';
import {
    PRIORITY_ORDER,
    type Priority,
    type ExtendedToastProps,
} from '../../src/defs.ts';

import { toastProvider } from '../helpers/page-object/selectors.ts';

test.describe('PieToastProvider - Component tests', () => {
    let toastsQueue: ExtendedToastProps[] = [];

    test.beforeEach(({ page }) => {
        // Set up a listener for the queue update log
        page.on('console', async (message) => {
            if (message.text().includes('toast provider queue:')) {
                toastsQueue = await message.args()[1].jsonValue();
            }
        });
    });

    test('should render successfully', async ({ page }) => {
        // Arrange
        const pieToastProviderPage = new BasePage(page, 'toast-provider--default');
        await pieToastProviderPage.load();

        // Act
        const toastProviderComponent = page.locator(toastProvider.selectors.container.dataTestId);

        // Assert
        await expect(toastProviderComponent).toBeDefined();
    });

    test.describe('Priority Order Tests', () => {
        test('should handle toast priority correctly', async ({ page }) => {
            // Arrange
            const pieToastProviderPage = new BasePage(page, 'toast-provider--default');
            await pieToastProviderPage.load();

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
                    message: 'Info toast with action (Priority 5)',
                    variant: 'info',
                    leadingAction: { text: 'Action' },
                });

                toastProvider.createToast({
                    message: 'Error toast (Priority 2)',
                    variant: 'error',
                });
            });

            // Assert
            const queueVariants: Priority[] = toastsQueue.map((toast: ExtendedToastProps): Priority => `${toast.variant || toastDefaultProps.variant}${toast.leadingAction ? '-actionable' : ''}`);
            for (let i = 1; i < queueVariants.length; i++) {
                const prevPriority = PRIORITY_ORDER[queueVariants[i - 1]];
                const currPriority = PRIORITY_ORDER[queueVariants[i]];
                expect(currPriority).toBeGreaterThanOrEqual(prevPriority); // Ensure the current has a higher priority
            }
        });

        test('should clear all toasts when clearToasts is called', async ({ page }) => {
            // Arrange
            const pieToastProviderPage = new BasePage(page, 'toast-provider--default');
            await pieToastProviderPage.load();

            // Act
            await page.evaluate(() => {
                const toastProvider = document.querySelector('pie-toast-provider') as PieToastProvider;

                toastProvider.createToast({ message: 'Toast 1', variant: 'neutral' });
                toastProvider.createToast({ message: 'Toast 2', variant: 'success' });

                toastProvider.clearToasts();
            });

            // Assert
            await expect(toastsQueue.length).toBe(0);
        });
    });

    test.describe('Props', () => {
        test.describe('options', () => {
            test('should apply global options to all toasts when options are passed', async ({ page }) => {
                // Arrange
                const pieToastProviderPage = new BasePage(page, 'toast-provider--default');
                await pieToastProviderPage.load({
                    options: {
                        variant: 'neutral',
                        isDismissible: true,
                    },
                });

                // Act
                await page.evaluate(() => {
                    const toastProvider = document.querySelector('pie-toast-provider') as PieToastProvider;
                    toastProvider.createToast({ message: 'Toast 1' });
                    toastProvider.createToast({ message: 'Toast 2' });
                });

                // Assert
                toastsQueue.forEach((toast) => {
                    expect(toast.isDismissible).toBeTruthy();
                    expect(toast.variant).toBe('neutral');
                });
            });

            test('should respect individual toast overrides when provided', async ({ page }) => {
                const pieToastProviderPage = new BasePage(page, 'toast-provider--default');
                await pieToastProviderPage.load({
                    options: {
                        duration: null,
                        isDismissible: true,
                    },
                });

                // Act
                await page.evaluate(() => {
                    const toastProvider = document.querySelector('pie-toast-provider') as PieToastProvider;
                    toastProvider.createToast({ message: 'Toast 1' });
                    toastProvider.createToast({ message: 'Toast 2' });
                    toastProvider.createToast({ message: 'Toast 3', isDismissible: false });
                });

                // Assert
                expect(toastsQueue[0].isDismissible).toBeTruthy(); // Global option should apply
                expect(toastsQueue[1].isDismissible).toBeFalsy(); // Override should take precedence
            });
        });
    });

    test.describe('Interactivity', () => {
        test('should keep page interactive when toast is displayed', async ({ page }) => {
            // Arrange
            const pieToastProviderPage = new BasePage(page, 'toast-provider--scroll-page');
            await pieToastProviderPage.load();

            const expectedEventMessage = 'Section button clicked';

            const consoleMessages: string[] = [];
            page.on('console', (message) => {
                if (message.type() === 'info') {
                    consoleMessages.push(message.text());
                }
            });

            const toastElement = page.locator('pie-toast');
            await expect(toastElement).toBeVisible();

            // Act
            const sectionButton = page.locator('pie-button').filter({ hasText: 'Interactive element' });
            await expect(sectionButton).toBeVisible();
            await sectionButton.click();

            // Assert
            expect(consoleMessages).toEqual([expectedEventMessage]);
        });
    });

    test.describe('Position and Scrolling', () => {
        test('should maintain fixed position when scrolling', async ({ page }) => {
            // Arrange
            const pieToastProviderPage = new BasePage(page, 'toast-provider--scroll-page');
            await pieToastProviderPage.load();

            const toastElement = page.locator('pie-toast');
            await expect(toastElement).toBeVisible();

            const initialPosition = await toastElement.boundingBox();

            // Act
            await page.evaluate(() => {
                window.scrollTo(0, document.body.scrollHeight);
            });

            // Assert
            const finalPosition = await toastElement.boundingBox();

            expect(finalPosition?.x).toBe(initialPosition?.x);
            expect(finalPosition?.y).toBe(initialPosition?.y);
        });
    });
});
