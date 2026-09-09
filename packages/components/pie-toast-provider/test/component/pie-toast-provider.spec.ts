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
 * Creates toasts on the provider and waits for the resulting render to settle.
 *
 * `createToast` fills the visible slots synchronously, but Lit batches the render into a
 * microtask — so the toasts are not in the DOM yet when `page.evaluate` resolves. Awaiting
 * `updateComplete` covers that, and re-freezing motion covers the slide-in on the newly
 * rendered toasts.
 *
 * `toasts` is passed into the browser, so it must be plain serialisable data — no
 * `onPieToast*` callbacks.
 */
async function createToasts (
    page: Page,
    basePage: BasePage,
    toasts: ExtendedToastProps[],
): Promise<void> {
    await page.evaluate((queued) => {
        const provider = document.querySelector('pie-toast-provider') as PieToastProvider | null;
        if (!provider) throw new Error('pie-toast-provider not found in DOM');
        queued.forEach((toast) => provider.createToast(toast));
    }, toasts);

    await page.locator('pie-toast-provider')
        .evaluate((provider) => (provider as PieToastProvider).updateComplete);

    await basePage.freezeAnimations();
}

test.describe('PieToastProvider - Component tests', () => {
    test('should render successfully', async ({ page }) => {
        // Arrange
        const pieToastProviderPage = new BasePage(page, 'toast-provider--default');
        await pieToastProviderPage.load();

        // Act
        const toastProviderComponent = page.getByTestId(toastProvider.selectors.container.dataTestId);

        // Assert — the provider renders no toasts until one is created, and its only content is
        // absolutely positioned, so it has a zero-size box and is never "visible". Attachment is
        // the meaningful assertion here.
        await expect(toastProviderComponent).toBeAttached();
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
                    isStacked: true,
                    options: {
                        variant: 'neutral',
                        isDismissible: true,
                    },
                });
                await page.locator('pie-toast-provider').waitFor({ state: 'attached' });

                // Act — fill the visible slots (the helper waits for the render)
                await createToasts(page, pieToastProviderPage, [
                    { message: 'Toast 1' },
                    { message: 'Toast 2' },
                ]);

                // Assert — both toasts render with the global options applied. `isDismissible`
                // is asserted through the close button, which pie-toast only renders when the
                // prop is true.
                await expect(page.locator('pie-toast-provider pie-toast')).toHaveCount(2);
                await expect(page.locator('pie-toast-provider pie-toast[variant="neutral"]')).toHaveCount(2);
                await expect(page.getByTestId(toastProvider.selectors.toastClose.dataTestId)).toHaveCount(2);
            });

            test('should respect individual toast overrides when provided', async ({ page }) => {
                // Arrange
                const pieToastProviderPage = new BasePage(page, 'toast-provider--default');
                await pieToastProviderPage.load({
                    isStacked: true,
                    options: {
                        duration: null,
                        isDismissible: true,
                    },
                });
                await page.locator('pie-toast-provider').waitFor({ state: 'attached' });

                // Act — fill the visible slots (the helper waits for the render)
                await createToasts(page, pieToastProviderPage, [
                    { message: 'Toast 1' },
                    { message: 'Toast 2' },
                    { message: 'Toast 3', isDismissible: false },
                ]);

                // Assert by toast identity, using the close button as the observable proof of
                // `isDismissible`.
                const closeButton = toastProvider.selectors.toastClose.dataTestId;

                // Global option should apply
                await expect(page.locator('pie-toast[message="Toast 2"]').getByTestId(closeButton)).toBeVisible();

                // Override should take precedence
                await expect(page.locator('pie-toast[message="Toast 3"]').getByTestId(closeButton)).toHaveCount(0);
            });
        });

        test.describe('aria', () => {
            test('should pass the aria prop down to the rendered toast close button', async ({ page }) => {
                // Arrange
                const pieToastProviderPage = new BasePage(page, 'toast-provider--default');
                await pieToastProviderPage.load();
                await page.locator('pie-toast-provider').waitFor({ state: 'attached' });

                const closeLabel = 'Close the toast';

                // Act
                await page.evaluate((label) => {
                    const tp = document.querySelector('pie-toast-provider') as PieToastProvider;
                    tp.createToast({
                        message: 'Toast with aria',
                        duration: null,
                        isDismissible: true,
                        aria: { close: label },
                    });
                }, closeLabel);

                const closeButton = page.getByTestId('pie-toast-close').getByRole('button');

                // Assert
                await expect(closeButton).toHaveAttribute('aria-label', closeLabel);
                await expect(closeButton).toHaveAccessibleName(closeLabel);
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

    test.describe('Multiple Providers', () => {
        test('should target a specific provider using id', async ({ page }) => {
            // Arrange
            const pieToastProviderPage = new BasePage(page, 'toast-provider--multiple-providers');
            await pieToastProviderPage.load();
            await page.locator('pie-toast-provider#main').waitFor({ state: 'attached' });
            await page.locator('pie-toast-provider#modal').waitFor({ state: 'attached' });

            // Act — send a toast to the modal provider only
            await page.evaluate(() => {
                const modalProvider = document.querySelector('pie-toast-provider#modal') as PieToastProvider;
                modalProvider.createToast({ message: 'Modal toast' });
            });

            // Assert — the modal provider should show the toast, the main provider should not
            const modalToast = page.locator('pie-toast-provider#modal pie-toast');
            const mainToast = page.locator('pie-toast-provider#main pie-toast');

            await expect(modalToast).toBeVisible();
            await expect(mainToast).not.toBeVisible();
        });

        test('should handle independent queues per provider', async ({ page }) => {
            // Arrange
            const pieToastProviderPage = new BasePage(page, 'toast-provider--multiple-providers');
            await pieToastProviderPage.load();
            await page.locator('pie-toast-provider#main').waitFor({ state: 'attached' });
            await page.locator('pie-toast-provider#modal').waitFor({ state: 'attached' });

            // Act — add toasts to both providers
            await page.evaluate(() => {
                const mainProvider = document.querySelector('pie-toast-provider#main') as PieToastProvider;
                const modalProvider = document.querySelector('pie-toast-provider#modal') as PieToastProvider;

                mainProvider.createToast({ message: 'Main toast 1' });
                mainProvider.createToast({ message: 'Main toast 2' });
                modalProvider.createToast({ message: 'Modal toast 1' });
            });

            // Assert — both providers show their respective toasts independently
            const mainToast = page.locator('pie-toast-provider#main pie-toast');
            const modalToast = page.locator('pie-toast-provider#modal pie-toast');

            await expect(mainToast.first()).toBeVisible();
            await expect(modalToast).toBeVisible();

            // Verify message content — main has 2 visible toasts, use .first() to match the oldest
            await expect(mainToast.first()).toHaveAttribute('message', 'Main toast 1');
            await expect(modalToast).toHaveAttribute('message', 'Modal toast 1');
        });

        test('should clear only the targeted provider toasts', async ({ page }) => {
            // Arrange
            const pieToastProviderPage = new BasePage(page, 'toast-provider--multiple-providers');
            await pieToastProviderPage.load();
            await page.locator('pie-toast-provider#main').waitFor({ state: 'attached' });
            await page.locator('pie-toast-provider#modal').waitFor({ state: 'attached' });

            // Act — add toasts to both, then clear only the modal provider
            await page.evaluate(() => {
                const mainProvider = document.querySelector('pie-toast-provider#main') as PieToastProvider;
                const modalProvider = document.querySelector('pie-toast-provider#modal') as PieToastProvider;

                mainProvider.createToast({ message: 'Main toast', duration: null });
                modalProvider.createToast({ message: 'Modal toast', duration: null });
            });

            const mainToast = page.locator('pie-toast-provider#main pie-toast');
            const modalToast = page.locator('pie-toast-provider#modal pie-toast');

            await expect(mainToast).toBeVisible();
            await expect(modalToast).toBeVisible();

            // Clear the modal provider only
            await page.evaluate(() => {
                const modalProvider = document.querySelector('pie-toast-provider#modal') as PieToastProvider;
                modalProvider.clearToasts();
            });

            // Assert — main toast should remain, modal toast should be gone
            await expect(mainToast).toBeVisible();
            await expect(modalToast).not.toBeVisible();
        });

        test('should not affect other providers when creating toasts on one', async ({ page }) => {
            // Arrange
            const pieToastProviderPage = new BasePage(page, 'toast-provider--multiple-providers');
            await pieToastProviderPage.load();
            await page.locator('pie-toast-provider#main').waitFor({ state: 'attached' });
            await page.locator('pie-toast-provider#modal').waitFor({ state: 'attached' });

            // Act — create multiple toasts on the main provider only
            await page.evaluate(() => {
                const mainProvider = document.querySelector('pie-toast-provider#main') as PieToastProvider;
                mainProvider.createToast({ message: 'Main toast 1', duration: null });
                mainProvider.createToast({ message: 'Main toast 2', duration: null });
                mainProvider.createToast({ message: 'Main toast 3', duration: null });
            });

            // Assert — main provider shows a toast, modal provider remains empty
            const mainToast = page.locator('pie-toast-provider#main pie-toast');
            const modalToast = page.locator('pie-toast-provider#modal pie-toast');

            await expect(mainToast.first()).toBeVisible();
            await expect(modalToast).not.toBeVisible();
        });

        test('should auto-resolve to the nearest provider when providerId is not specified', async ({ page }) => {
            // Arrange
            const pieToastProviderPage = new BasePage(page, 'toast-provider--auto-resolve-provider');
            await pieToastProviderPage.load();
            await page.locator('pie-toast-provider#modal').waitFor({ state: 'attached' });

            // Act — click button inside modal that calls toaster.create() without providerId
            await page.locator('#modal-auto-btn').click();

            // Assert — the toast should appear in the modal provider (nearest scope), not the main one
            const modalToast = page.locator('pie-toast-provider#modal pie-toast');
            const mainToast = page.locator('pie-toast-provider#main pie-toast');

            await expect(modalToast).toBeVisible();
            await expect(mainToast).not.toBeVisible();
        });
    });

    test.describe('Live region announcer', () => {
        test('should always render a persistent, empty polite live region before any toast', async ({ page }) => {
            // Arrange
            const pieToastProviderPage = new BasePage(page, 'toast-provider--default');
            await pieToastProviderPage.load();
            await page.locator('pie-toast-provider').waitFor({ state: 'attached' });

            // Act
            const announcer = page.getByTestId(toastProvider.selectors.announcer.dataTestId);

            // Assert — the region exists (empty) before any toast so screen readers can observe it
            await expect(announcer).toHaveAttribute('role', 'status');
            await expect(announcer).toHaveAttribute('aria-live', 'polite');
            await expect(announcer).toHaveText('');
        });

        test('should announce a non-error toast message in the polite live region', async ({ page }) => {
            // Arrange
            const pieToastProviderPage = new BasePage(page, 'toast-provider--default');
            await pieToastProviderPage.load();
            await page.locator('pie-toast-provider').waitFor({ state: 'attached' });

            // Act
            await page.evaluate(() => {
                const tp = document.querySelector('pie-toast-provider') as PieToastProvider;
                tp.createToast({ message: 'You favourited KFC', variant: 'neutral', duration: null });
            });

            // Assert
            const announcer = page.getByTestId(toastProvider.selectors.announcer.dataTestId);
            await expect(announcer).toHaveAttribute('role', 'status');
            await expect(announcer).toHaveAttribute('aria-live', 'polite');
            await expect(announcer).toHaveText('You favourited KFC');
        });

        test('should announce an error toast message in the assertive live region', async ({ page }) => {
            // Arrange
            const pieToastProviderPage = new BasePage(page, 'toast-provider--default');
            await pieToastProviderPage.load();
            await page.locator('pie-toast-provider').waitFor({ state: 'attached' });

            // Act
            await page.evaluate(() => {
                const tp = document.querySelector('pie-toast-provider') as PieToastProvider;
                tp.createToast({ message: 'Something went wrong', variant: 'error', duration: null });
            });

            // Assert
            const announcer = page.getByTestId(toastProvider.selectors.announcer.dataTestId);
            await expect(announcer).toHaveAttribute('role', 'alert');
            await expect(announcer).toHaveAttribute('aria-live', 'assertive');
            await expect(announcer).toHaveText('Something went wrong');
        });

        test('should disable the rendered toast own live region to avoid double announcements', async ({ page }) => {
            // Arrange
            const pieToastProviderPage = new BasePage(page, 'toast-provider--default');
            await pieToastProviderPage.load();
            await page.locator('pie-toast-provider').waitFor({ state: 'attached' });

            // Act
            await page.evaluate(() => {
                const tp = document.querySelector('pie-toast-provider') as PieToastProvider;
                tp.createToast({ message: 'A toast', variant: 'neutral', duration: null });
            });

            // Assert — the provider owns the single live region, so the visible toast keeps its role
            // for semantics but has its own announcements switched off (aria-live="off").
            const toastContainer = page.getByTestId('pie-toast');
            await expect(toastContainer).toBeVisible();
            await expect(toastContainer).toHaveAttribute('role', 'status');
            await expect(toastContainer).toHaveAttribute('aria-live', 'off');
        });
    });

    test.describe('Stacking', () => {
        test('should display up to 3 toasts simultaneously', async ({ page }) => {
            // Arrange
            const pieToastProviderPage = new BasePage(page, 'toast-provider--default');
            await pieToastProviderPage.load({ isStacked: true });
            await page.locator('pie-toast-provider').waitFor({ state: 'attached' });

            // Act
            await page.evaluate(() => {
                const tp = document.querySelector('pie-toast-provider') as PieToastProvider;
                tp.createToast({ message: 'Toast 1', duration: null });
                tp.createToast({ message: 'Toast 2', duration: null });
                tp.createToast({ message: 'Toast 3', duration: null });
            });

            // Assert — all 3 rendered at the same time
            await expect(page.locator('pie-toast-provider pie-toast')).toHaveCount(3);
        });

        test('should queue additional toasts when 3 are already visible', async ({ page }) => {
            // Arrange
            const pieToastProviderPage = new BasePage(page, 'toast-provider--default');
            await pieToastProviderPage.load({ isStacked: true });
            await page.locator('pie-toast-provider').waitFor({ state: 'attached' });
            await installQueueListener(page);

            // Act — 4th toast cannot fit in visible slots and must enter the queue
            const snapshot = await afterNextSnapshot(page, () => page.evaluate(() => {
                const tp = document.querySelector('pie-toast-provider') as PieToastProvider;
                tp.createToast({ message: 'Toast 1', duration: null });
                tp.createToast({ message: 'Toast 2', duration: null });
                tp.createToast({ message: 'Toast 3', duration: null });
                tp.createToast({ message: 'Toast 4', duration: null });
            }));

            // Assert — 3 visible, exactly 1 in the waiting queue
            await expect(page.locator('pie-toast-provider pie-toast')).toHaveCount(3);
            expect(snapshot).toHaveLength(1);
            expect(snapshot[0].message).toBe('Toast 4');
        });

        test('should promote a queued toast when a visible toast is dismissed', async ({ page }) => {
            // Arrange
            const pieToastProviderPage = new BasePage(page, 'toast-provider--default');
            await pieToastProviderPage.load({ isStacked: true });
            await page.locator('pie-toast-provider').waitFor({ state: 'attached' });

            // Act — fill 3 visible slots and queue a 4th
            await page.evaluate(() => {
                const tp = document.querySelector('pie-toast-provider') as PieToastProvider;
                tp.createToast({ message: 'Toast 1', duration: null, isDismissible: true });
                tp.createToast({ message: 'Toast 2', duration: null });
                tp.createToast({ message: 'Toast 3', duration: null });
                tp.createToast({ message: 'Toast 4', duration: null });
            });

            const toastsLocator = page.locator('pie-toast-provider pie-toast');
            await expect(toastsLocator).toHaveCount(3);

            // Dismiss Toast 1 — only it has isDismissible: true so only one close button exists
            await page.getByTestId('pie-toast-close').getByRole('button').click();

            // Assert — Toast 4 is promoted from the queue; total stays at 3
            await expect(page.locator('pie-toast[message="Toast 4"]')).toBeVisible();
            await expect(toastsLocator).toHaveCount(3);
        });

        test('should display a single toast and queue the rest when isStacked is not set', async ({ page }) => {
            // Arrange — isStacked defaults to false
            const pieToastProviderPage = new BasePage(page, 'toast-provider--default');
            await pieToastProviderPage.load();
            await page.locator('pie-toast-provider').waitFor({ state: 'attached' });
            await installQueueListener(page);

            // Act
            const snapshot = await afterNextSnapshot(page, () => page.evaluate(() => {
                const tp = document.querySelector('pie-toast-provider') as PieToastProvider;
                tp.createToast({ message: 'Toast 1', duration: null });
                tp.createToast({ message: 'Toast 2', duration: null });
                tp.createToast({ message: 'Toast 3', duration: null });
            }));

            // Assert — only the first is displayed, the other two wait in the queue
            await expect(page.locator('pie-toast-provider pie-toast')).toHaveCount(1);
            await expect(page.locator('pie-toast[message="Toast 1"]')).toBeVisible();
            expect(snapshot.map(({ message }) => message)).toEqual(['Toast 2', 'Toast 3']);
        });

        test('should promote only one queued toast when isStacked is not set', async ({ page }) => {
            // Arrange — isStacked defaults to false
            const pieToastProviderPage = new BasePage(page, 'toast-provider--default');
            await pieToastProviderPage.load();
            await page.locator('pie-toast-provider').waitFor({ state: 'attached' });

            // Act
            await page.evaluate(() => {
                const tp = document.querySelector('pie-toast-provider') as PieToastProvider;
                tp.createToast({ message: 'Toast 1', duration: null, isDismissible: true });
                tp.createToast({ message: 'Toast 2', duration: null });
            });

            const toastsLocator = page.locator('pie-toast-provider pie-toast');
            await expect(toastsLocator).toHaveCount(1);

            await page.getByTestId(toastProvider.selectors.toastClose.dataTestId).getByRole('button').click();

            // Assert — Toast 2 replaces Toast 1 rather than joining it
            await expect(page.locator('pie-toast[message="Toast 2"]')).toBeVisible();
            await expect(toastsLocator).toHaveCount(1);
        });
    });
});
