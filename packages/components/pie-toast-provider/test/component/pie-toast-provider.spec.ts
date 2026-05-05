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
 * Installs a browser-side listener on the component's public
 * `pie-toast-provider-queue-update` CustomEvent. Every emitted detail is
 * structuredClone'd and appended to `window.__queueSnapshots`, giving tests
 * access to every queue state the provider passed through — not just the last.
 *
 * Must be called after the component is attached to the DOM.
 */
async function installQueueListener (page: Page): Promise<void> {
    await page.evaluate(() => {
        window.__queueSnapshots = [];
        const provider = document.querySelector('pie-toast-provider');
        if (!provider) throw new Error('pie-toast-provider not found in DOM');
        provider.addEventListener(
            'pie-toast-provider-queue-update',
            (event) => {
                const { detail } = event as CustomEvent<ExtendedToastProps[]>;
                (window.__queueSnapshots ??= []).push(structuredClone(detail));
            },
        );
    });
}

/**
 * Reads the snapshot count before running `action`, then waits — via
 * `page.waitForFunction` so polling stays in-browser — until at least one new
 * snapshot has appeared. Returns the latest snapshot.
 *
 * Capturing the count *before* the action means the event can never be missed,
 * even if it fires before `waitForFunction` is reached.
 */
async function afterNextSnapshot (
    page: Page,
    action: () => Promise<void>,
): Promise<ExtendedToastProps[]> {
    const countBefore = await page.evaluate(() => window.__queueSnapshots?.length ?? 0);
    await action();
    await page.waitForFunction(
        (count: number) => (window.__queueSnapshots?.length ?? 0) > count,
        countBefore,
    );
    const snapshots = await page.evaluate(() => window.__queueSnapshots ?? []);
    return snapshots[snapshots.length - 1];
}

/** Returns every snapshot accumulated since `installQueueListener` was called. */
async function getQueueSnapshots (page: Page): Promise<ExtendedToastProps[][]> {
    return page.evaluate(() => window.__queueSnapshots ?? []);
}

/**
 * Finds the first toast whose `message` matches across all captured snapshots.
 * Searching by identity rather than queue position makes assertions resilient
 * to priority-driven reordering.
 */
async function findToastByMessage (page: Page, message: string): Promise<ExtendedToastProps | undefined> {
    return page.evaluate(
        (msg) => (window.__queueSnapshots ?? []).flat().find((t) => t.message === msg),
        message,
    );
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

            // Act — all four creates run synchronously so Lit batches them into one
            // updated() cycle, producing a single snapshot. afterNextSnapshot captures
            // the count before the action and waits in-browser, so the event can never
            // be missed regardless of CDP timing.
            await afterNextSnapshot(page, () => page.evaluate(() => {
                const tp = document.querySelector('pie-toast-provider') as PieToastProvider;
                tp.createToast({ message: 'Neutral toast (Priority 10)', variant: 'neutral' });
                tp.createToast({ message: 'Success toast with action (Priority 4)', variant: 'success', leadingAction: { text: 'Action' } });
                tp.createToast({ message: 'Info toast with action (Priority 5)', variant: 'info', leadingAction: { text: 'Action' } });
                tp.createToast({ message: 'Error toast (Priority 2)', variant: 'error' });
            }));

            // Assert — verify every snapshot the provider ever emitted was sorted by
            // priority, not just the final state.
            const snapshots = await getQueueSnapshots(page);
            const priorityOf = (toast: ExtendedToastProps): number => {
                const key: Priority = `${toast.variant || toastDefaultProps.variant}${toast.leadingAction ? '-actionable' : ''}`;
                return PRIORITY_ORDER[key];
            };

            snapshots.forEach((snapshot) => {
                snapshot.slice(1).forEach((toast, index) => {
                    expect(priorityOf(toast)).toBeGreaterThanOrEqual(priorityOf(snapshot[index])); // Ensure the current has a higher priority
                });
            });
        });

        test('should clear all toasts when clearToasts is called', async ({ page }) => {
            // Arrange
            const pieToastProviderPage = new BasePage(page, 'toast-provider--default');
            await pieToastProviderPage.load();
            await page.locator('pie-toast-provider').waitFor({ state: 'attached' });
            await installQueueListener(page);

            // Act — two separate evaluate calls so Lit produces two distinct updated()
            // cycles. The first snapshot verifies toasts were actually enqueued; the
            // second verifies clearToasts emptied the queue. A single evaluate would
            // batch all mutations into one cycle and only the final empty state would
            // be observable, making the populated intermediate state unverifiable.
            await afterNextSnapshot(page, () => page.evaluate(() => {
                const tp = document.querySelector('pie-toast-provider') as PieToastProvider;
                tp.createToast({ message: 'Toast 1', variant: 'neutral' });
                tp.createToast({ message: 'Toast 2', variant: 'success' });
            }));

            const clearedQueue = await afterNextSnapshot(page, () => page.evaluate(() => {
                (document.querySelector('pie-toast-provider') as PieToastProvider).clearToasts();
            }));

            // Assert
            expect(clearedQueue.length).toBe(0);
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
                await afterNextSnapshot(page, () => page.evaluate(() => {
                    const tp = document.querySelector('pie-toast-provider') as PieToastProvider;
                    tp.createToast({ message: 'Toast 1' });
                    tp.createToast({ message: 'Toast 2' });
                }));

                // Assert — iterate every toast that passed through the queue.
                // Note: the first toast is immediately moved to _currentToast by the component
                // and does not appear in the queue snapshots.
                const seenToasts = (await getQueueSnapshots(page)).flat();
                expect(seenToasts.length).toBeGreaterThan(0);
                seenToasts.forEach((toast) => {
                    expect(toast.isDismissible).toBeTruthy();
                    expect(toast.variant).toBe('neutral');
                });
            });

            test('should respect individual toast overrides when provided', async ({ page }) => {
                // Arrange
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
                await afterNextSnapshot(page, () => page.evaluate(() => {
                    const tp = document.querySelector('pie-toast-provider') as PieToastProvider;
                    tp.createToast({ message: 'Toast 1' });
                    tp.createToast({ message: 'Toast 2' });
                    tp.createToast({ message: 'Toast 3', isDismissible: false });
                }));

                // Assert by toast identity, not by queue index, to stay resilient to
                // priority-driven reordering.
                const toast2 = await findToastByMessage(page, 'Toast 2');
                const toast3 = await findToastByMessage(page, 'Toast 3');

                expect(toast2?.isDismissible).toBeTruthy(); // Global option should apply
                expect(toast3?.isDismissible).toBeFalsy(); // Override should take precedence
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
                if (message.type() === 'info' && message.text() === expectedEventMessage) {
                    consoleMessages.push(message.text());
                }
            });

            const toastElement = page.locator('pie-toast');
            await expect(toastElement).toBeVisible();

            // Act — register the waitForEvent BEFORE clicking to avoid a race condition
            // between the click handler firing console.info and the CDP message arriving.
            const sectionButton = page.locator('pie-button').filter({ hasText: 'Interactive element' });
            await expect(sectionButton).toBeVisible();

            const consoleMessageReceived = page.waitForEvent(
                'console',
                (msg) => msg.type() === 'info' && msg.text() === expectedEventMessage,
            );
            await sectionButton.click();
            await consoleMessageReceived;

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

            // Wait for the slide-in CSS animation to settle before sampling the initial
            // position — toBeVisible returns true mid-animation so boundingBox would
            // otherwise capture a transient value.
            await toastElement.evaluate((el) => Promise.all(el.getAnimations({ subtree: true }).map((a) => a.finished)));

            const initialPosition = await toastElement.boundingBox();

            // Act — scroll, then wait two rAF frames for layout to commit before measuring.
            await page.evaluate(() => new Promise<void>((resolve) => {
                window.scrollTo(0, document.body.scrollHeight);
                requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
            }));

            // Assert
            const finalPosition = await toastElement.boundingBox();

            expect(finalPosition?.x).toBe(initialPosition?.x);
            expect(finalPosition?.y).toBe(initialPosition?.y);
        });
    });
});
