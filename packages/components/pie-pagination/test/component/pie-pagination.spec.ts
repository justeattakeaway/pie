import { test, expect, type Page } from '@playwright/test';
import { PaginationDefaultPage } from '../helpers/page-object/pie-pagination-default.page.ts';

const componentSelector = 'pie-pagination';

/**
 * Installs a browser-side listener that accumulates the event details for the given
 * pagination event onto `window.__pageChangeEvents`. Keeping the accumulation in the
 * browser avoids the test-runner/CDP race condition described in
 * packages/components/AGENTS.md.
 */
async function installEventListener (page: Page, eventName = 'pie-pagination-page-change') {
    await page.evaluate((name) => {
        (window as unknown as { __pageChangeEvents: unknown[] }).__pageChangeEvents = [];
        document.querySelector('pie-pagination')?.addEventListener(name, (event) => {
            (window as unknown as { __pageChangeEvents: unknown[] }).__pageChangeEvents.push(structuredClone((event as CustomEvent).detail));
        });
    }, eventName);
}

/**
 * Triggers an action and waits in-browser until at least one event has arrived.
 */
async function captureEvents (page: Page, action: () => Promise<void>, eventName?: string) {
    await installEventListener(page, eventName);

    const countBefore = await page.evaluate(() => (window as unknown as { __pageChangeEvents: unknown[] }).__pageChangeEvents.length);

    await action();

    await page.waitForFunction(
        (count) => (window as unknown as { __pageChangeEvents: unknown[] }).__pageChangeEvents.length > count,
        countBefore,
    );

    return page.evaluate(() => (window as unknown as { __pageChangeEvents: unknown[] }).__pageChangeEvents);
}

/**
 * Triggers an action, then reads the accumulated events. `dispatchCustomEvent` runs
 * synchronously inside the click handler, so any event has already been recorded by
 * the browser-side listener before the action promise resolves.
 */
async function captureEventsAfterAction (page: Page, action: () => Promise<void>, eventName?: string) {
    await installEventListener(page, eventName);

    await action();

    // Flush a couple of animation frames to guarantee the synchronous click handler
    // has completed before reading. This is not a fixed-duration wait.
    await page.evaluate(() => new Promise<void>((resolve) => {
        requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
    }));

    return page.evaluate(() => (window as unknown as { __pageChangeEvents: unknown[] }).__pageChangeEvents);
}

/**
 * Installs listeners for several pagination events at once, accumulating each event's
 * details under its own key on `window.__paginationEvents`.
 */
async function installMultiEventListener (page: Page, eventNames: string[]) {
    await page.evaluate((names) => {
        (window as unknown as { __paginationEvents: Record<string, unknown[]> }).__paginationEvents = {};
        const element = document.querySelector('pie-pagination');

        names.forEach((name) => {
            (window as unknown as { __paginationEvents: Record<string, unknown[]> }).__paginationEvents[name] = [];
            element?.addEventListener(name, (event) => {
                (window as unknown as { __paginationEvents: Record<string, unknown[]> }).__paginationEvents[name].push(structuredClone((event as CustomEvent).detail));
            });
        });
    }, eventNames);
}

test.describe('PiePagination - Component tests', () => {
    test('should render successfully', async ({ page }) => {
        // Arrange
        const paginationPage = new PaginationDefaultPage(page);

        // Act
        await paginationPage.load();

        // Assert
        await expect(page.locator(componentSelector)).toBeVisible();
    });

    test('should render a button for every page', async ({ page }) => {
        // Arrange
        const paginationPage = new PaginationDefaultPage(page);

        // Act
        await paginationPage.load({ totalPages: 5 });

        // Assert
        await expect(paginationPage.paginationComponent.pageButtonLocator).toHaveCount(5);
    });

    test('should mark the current page with aria-current="page"', async ({ page }) => {
        // Arrange
        const paginationPage = new PaginationDefaultPage(page);

        // Act
        await paginationPage.load({ currentPage: 3, totalPages: 5 });

        // Assert
        const currentButton = paginationPage.paginationComponent.getPageButton(3);
        await expect(currentButton).toHaveAttribute('aria-current', 'page');

        const otherButton = paginationPage.paginationComponent.getPageButton(2);
        await expect(otherButton).not.toHaveAttribute('aria-current', 'page');
    });

    test('should disable the previous control on the first page', async ({ page }) => {
        // Arrange
        const paginationPage = new PaginationDefaultPage(page);

        // Act
        await paginationPage.load({ currentPage: 1, totalPages: 5 });

        // Assert
        await expect(paginationPage.paginationComponent.previousButtonLocator).toBeDisabled();
        await expect(paginationPage.paginationComponent.nextButtonLocator).toBeEnabled();
    });

    test('should disable the next control on the last page', async ({ page }) => {
        // Arrange
        const paginationPage = new PaginationDefaultPage(page);

        // Act
        await paginationPage.load({ currentPage: 5, totalPages: 5 });

        // Assert
        await expect(paginationPage.paginationComponent.nextButtonLocator).toBeDisabled();
        await expect(paginationPage.paginationComponent.previousButtonLocator).toBeEnabled();
    });

    test('should disable all controls when disabled is true', async ({ page }) => {
        // Arrange
        const paginationPage = new PaginationDefaultPage(page);

        // Act
        await paginationPage.load({ currentPage: 3, totalPages: 5, disabled: true });

        // Assert
        await expect(paginationPage.paginationComponent.previousButtonLocator).toBeDisabled();
        await expect(paginationPage.paginationComponent.nextButtonLocator).toBeDisabled();
        await expect(paginationPage.paginationComponent.getPageButton(4)).toBeDisabled();
    });

    test('should emit pie-pagination-page-change with the next page when the next control is clicked', async ({ page }) => {
        // Arrange
        const paginationPage = new PaginationDefaultPage(page);
        await paginationPage.load({ currentPage: 2, totalPages: 5 });
        const { paginationComponent } = paginationPage;

        // Act
        const snapshots = await captureEvents(page, () => paginationComponent.nextButtonLocator.click());

        // Assert
        expect(snapshots).toHaveLength(1);
        expect(snapshots[0]).toEqual({ currentPage: 3 });
    });

    test('should emit pie-pagination-page-change with the previous page when the previous control is clicked', async ({ page }) => {
        // Arrange
        const paginationPage = new PaginationDefaultPage(page);
        await paginationPage.load({ currentPage: 3, totalPages: 5 });
        const { paginationComponent } = paginationPage;

        // Act
        const snapshots = await captureEvents(page, () => paginationComponent.previousButtonLocator.click());

        // Assert
        expect(snapshots).toHaveLength(1);
        expect(snapshots[0]).toEqual({ currentPage: 2 });
    });

    test('should emit pie-pagination-page-change with the selected page when a page number is clicked', async ({ page }) => {
        // Arrange
        const paginationPage = new PaginationDefaultPage(page);
        await paginationPage.load({ currentPage: 1, totalPages: 5 });
        const { paginationComponent } = paginationPage;

        // Act
        const snapshots = await captureEvents(page, () => paginationComponent.getPageButton(4).click());

        // Assert
        expect(snapshots).toHaveLength(1);
        expect(snapshots[0]).toEqual({ currentPage: 4 });
    });

    test('should emit pie-pagination-next with the next page when the next control is clicked', async ({ page }) => {
        // Arrange
        const paginationPage = new PaginationDefaultPage(page);
        await paginationPage.load({ currentPage: 2, totalPages: 5 });
        const { paginationComponent } = paginationPage;

        // Act
        const snapshots = await captureEvents(page, () => paginationComponent.nextButtonLocator.click(), 'pie-pagination-next');

        // Assert
        expect(snapshots).toHaveLength(1);
        expect(snapshots[0]).toEqual({ currentPage: 3 });
    });

    test('should emit pie-pagination-prev with the previous page when the previous control is clicked', async ({ page }) => {
        // Arrange
        const paginationPage = new PaginationDefaultPage(page);
        await paginationPage.load({ currentPage: 3, totalPages: 5 });
        const { paginationComponent } = paginationPage;

        // Act
        const snapshots = await captureEvents(page, () => paginationComponent.previousButtonLocator.click(), 'pie-pagination-prev');

        // Assert
        expect(snapshots).toHaveLength(1);
        expect(snapshots[0]).toEqual({ currentPage: 2 });
    });

    test('should emit both pie-pagination-next and pie-pagination-page-change when the next control is clicked', async ({ page }) => {
        // Arrange
        const paginationPage = new PaginationDefaultPage(page);
        await paginationPage.load({ currentPage: 2, totalPages: 5 });
        const { paginationComponent } = paginationPage;

        const eventNames = ['pie-pagination-next', 'pie-pagination-page-change'];
        await installMultiEventListener(page, eventNames);

        // Act
        await paginationComponent.nextButtonLocator.click();

        // Flush a couple of animation frames so the synchronous click handlers complete.
        await page.evaluate(() => new Promise<void>((resolve) => {
            requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
        }));

        const events = await page.evaluate(() => (window as unknown as { __paginationEvents: Record<string, unknown[]> }).__paginationEvents);

        // Assert
        expect(events['pie-pagination-next']).toEqual([{ currentPage: 3 }]);
        expect(events['pie-pagination-page-change']).toEqual([{ currentPage: 3 }]);
    });

    test('should not emit pie-pagination-prev when the previous control is disabled', async ({ page }) => {
        // Arrange
        const paginationPage = new PaginationDefaultPage(page);
        await paginationPage.load({ currentPage: 1, totalPages: 5 });
        const { paginationComponent } = paginationPage;

        // Act
        const snapshots = await captureEventsAfterAction(page, () => paginationComponent.previousButtonLocator.click({ force: true }), 'pie-pagination-prev');

        // Assert
        expect(snapshots).toHaveLength(0);
    });

    test('should not emit pie-pagination-next when the next control is disabled', async ({ page }) => {
        // Arrange
        const paginationPage = new PaginationDefaultPage(page);
        await paginationPage.load({ currentPage: 5, totalPages: 5 });
        const { paginationComponent } = paginationPage;

        // Act
        const snapshots = await captureEventsAfterAction(page, () => paginationComponent.nextButtonLocator.click({ force: true }), 'pie-pagination-next');

        // Assert
        expect(snapshots).toHaveLength(0);
    });

    test('should not emit pie-pagination-page-change when the current page is clicked', async ({ page }) => {
        // Arrange
        const paginationPage = new PaginationDefaultPage(page);
        await paginationPage.load({ currentPage: 2, totalPages: 5 });
        const { paginationComponent } = paginationPage;

        // Act
        const snapshots = await captureEventsAfterAction(page, () => paginationComponent.getPageButton(2).click());

        // Assert
        expect(snapshots).toHaveLength(0);
    });

    test('should not emit pie-pagination-page-change when a disabled control is clicked', async ({ page }) => {
        // Arrange
        const paginationPage = new PaginationDefaultPage(page);
        await paginationPage.load({ currentPage: 1, totalPages: 5 });
        const { paginationComponent } = paginationPage;

        // Act
        const snapshots = await captureEventsAfterAction(page, () => paginationComponent.previousButtonLocator.click({ force: true }));

        // Assert
        expect(snapshots).toHaveLength(0);
    });

    test('should not change currentPage itself when a control is clicked (controlled component)', async ({ page }) => {
        // Arrange
        const paginationPage = new PaginationDefaultPage(page);
        await paginationPage.load({ currentPage: 2, totalPages: 5 });

        // Act
        await paginationPage.paginationComponent.nextButtonLocator.click();

        // Assert
        const currentPage = await page.locator('pie-pagination').evaluate((el: HTMLElement & { currentPage: number }) => el.currentPage);
        expect(currentPage).toBe(2);
    });
});
