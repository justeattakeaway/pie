import { test, expect, type Page } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

import type { PieToastProvider } from 'src/index.ts';
import { defaultProps as toastDefaultProps } from '@justeattakeaway/pie-toast/src/defs.ts';
import {
    PRIORITY_ORDER,
    type Priority,
    type ExtendedToastProps,
} from '../../src/defs.ts';

import { toastProvider } from '../helpers/page-object/selectors.ts';

declare global {
    interface Window {
        __queueSnapshots?: ExtendedToastProps[][];
    }
}

/**
 * Subscribe to the provider's public `pie-toast-provider-queue-update` event
 * and stash every detail snapshot on `window.__queueSnapshots`. Snapshots are
 * structuredClone'd so later mutations to the live queue can't poison earlier
 * captures.
 */
async function installQueueListener (page: Page): Promise<void> {
    await page.evaluate(() => {
        window.__queueSnapshots = [];
        document.querySelector('pie-toast-provider')!.addEventListener(
            'pie-toast-provider-queue-update',
            (event) => {
                const detail = (event as CustomEvent<ExtendedToastProps[]>).detail;
                window.__queueSnapshots!.push(structuredClone(detail));
            },
        );
    });
}

/** Find the first toast across all captured snapshots whose `message` matches. */
async function findToastByMessage (page: Page, message: string): Promise<ExtendedToastProps | undefined> {
    return page.evaluate(
        (msg) => (window.__queueSnapshots ?? []).flat().find((toast) => toast.message === msg),
        message,
    );
}

/** Read every captured snapshot back into the test runner. */
async function getQueueSnapshots (page: Page): Promise<ExtendedToastProps[][]> {
    return page.evaluate(() => window.__queueSnapshots ?? []);
}

test.describe('PieToastProvider - Component tests', () => {

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
            await page.locator('pie-toast-provider').waitFor({ state: 'attached' });
            await installQueueListener(page);

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

            // Wait for the lowest-priority toast (last created) to surface in
            // some snapshot — guarantees all create events have been processed.
            await expect.poll(() => findToastByMessage(page, 'Error toast (Priority 2)')).toBeDefined();

            // Assert — the contract under test is "the queue is always sorted
            // by priority". Walk every captured snapshot and verify each one
            // is non-decreasing in priority. This is independent of how many
            // toasts the provider keeps in the queue vs displays immediately.
            const snapshots = await getQueueSnapshots(page);
            for (const snapshot of snapshots) {
                const priorities: number[] = snapshot.map((toast) => {
                    const key: Priority = `${toast.variant || toastDefaultProps.variant}${toast.leadingAction ? '-actionable' : ''}`;
                    return PRIORITY_ORDER[key];
                });
                for (let i = 1; i < priorities.length; i++) {
                    expect(priorities[i]).toBeGreaterThanOrEqual(priorities[i - 1]);
                }
            }
        });

        test('should clear all toasts when clearToasts is called', async ({ page }) => {
            // Arrange
            const pieToastProviderPage = new BasePage(page, 'toast-provider--default');
            await pieToastProviderPage.load();
            await page.locator('pie-toast-provider').waitFor({ state: 'attached' });
            await installQueueListener(page);

            // Act
            await page.evaluate(() => {
                const toastProvider = document.querySelector('pie-toast-provider') as PieToastProvider;

                toastProvider.createToast({ message: 'Toast 1', variant: 'neutral' });
                toastProvider.createToast({ message: 'Toast 2', variant: 'success' });

                toastProvider.clearToasts();
            });

            // Assert — after clearToasts, the last queue snapshot should be empty.
            await expect.poll(async () => {
                const snapshots = await getQueueSnapshots(page);
                return snapshots[snapshots.length - 1]?.length;
            }).toBe(0);
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
                await page.locator('pie-toast-provider').waitFor({ state: 'attached' });
                await installQueueListener(page);

                // Act
                await page.evaluate(() => {
                    const toastProvider = document.querySelector('pie-toast-provider') as PieToastProvider;
                    toastProvider.createToast({ message: 'Toast 1' });
                    toastProvider.createToast({ message: 'Toast 2' });
                });

                // Assert — every toast we observe should carry the global
                // options. (We can only verify queued toasts, not the one
                // popped immediately into `_currentToast`.) Wait for at least
                // one toast of interest to surface, then iterate every snapshot.
                await expect.poll(() => findToastByMessage(page, 'Toast 2')).toBeDefined();

                const snapshots = await getQueueSnapshots(page);
                const seenToasts = snapshots.flat();
                expect(seenToasts.length).toBeGreaterThan(0);
                seenToasts.forEach((toast) => {
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
                await page.locator('pie-toast-provider').waitFor({ state: 'attached' });
                await installQueueListener(page);

                // Act
                await page.evaluate(() => {
                    const toastProvider = document.querySelector('pie-toast-provider') as PieToastProvider;
                    toastProvider.createToast({ message: 'Toast 1' });
                    toastProvider.createToast({ message: 'Toast 2' });
                    toastProvider.createToast({ message: 'Toast 3', isDismissible: false });
                });

                // Assert against toast identity, not queue position. Wait until
                // both toasts of interest have appeared in some snapshot, then
                // assert their merged props.
                await expect.poll(() => findToastByMessage(page, 'Toast 2')).toBeDefined();
                await expect.poll(() => findToastByMessage(page, 'Toast 3')).toBeDefined();

                expect((await findToastByMessage(page, 'Toast 2'))!.isDismissible).toBeTruthy(); // Global option applies
                expect((await findToastByMessage(page, 'Toast 3'))!.isDismissible).toBeFalsy();  // Override wins
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
                if (message.type() === 'info' && !message.text().includes('toast provider queue:')) {
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

            // The toast slides in via CSS transform on mount. `toBeVisible`
            // returns true mid-animation, so reading boundingBox now would
            // sample a transient position. Wait for all animations on the
            // toast (and its descendants) to settle before measuring.
            await toastElement.evaluate((el) => Promise.all(
                el.getAnimations({ subtree: true }).map((animation) => animation.finished),
            ));

            const initialPosition = await toastElement.boundingBox();

            // Act — scroll, then wait two frames so layout commits before measuring.
            await page.evaluate(() => new Promise<void>((resolve) => {
                window.scrollTo(0, document.body.scrollHeight);
                requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
            }));

            // Assert — viewport coords should be unchanged after scroll.
            const finalPosition = await toastElement.boundingBox();

            expect(finalPosition?.x).toBe(initialPosition?.x);
            expect(finalPosition?.y).toBe(initialPosition?.y);
        });
    });
});
