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

    test('should render all pages without ellipsis when totalPages is small', async ({ page }) => {
        // Arrange
        const paginationPage = new PaginationDefaultPage(page);

        // Act
        await paginationPage.load({ currentPage: 4, totalPages: 7 });

        // Assert
        await expect(paginationPage.paginationComponent.pageButtonLocator).toHaveCount(7);
        await expect(paginationPage.paginationComponent.ellipsisLocator).toHaveCount(0);
    });

    test('should collapse large page ranges behind ellipsis items', async ({ page }) => {
        // Arrange
        const paginationPage = new PaginationDefaultPage(page);

        // Act
        await paginationPage.load({ currentPage: 4, totalPages: 8 });

        // Assert — start-anchored window: 1 2 3 4 5 … 8
        await expect(paginationPage.paginationComponent.pageButtonLocator).toHaveCount(6);
        await expect(paginationPage.paginationComponent.ellipsisLocator).toHaveCount(1);
    });

    test('should always show the first and last page for large ranges', async ({ page }) => {
        // Arrange
        const paginationPage = new PaginationDefaultPage(page);

        // Act
        await paginationPage.load({ currentPage: 25, totalPages: 50 });

        // Assert
        await expect(paginationPage.paginationComponent.getPageButton(1)).toHaveCount(1);
        await expect(paginationPage.paginationComponent.getPageButton(50)).toHaveCount(1);
    });

    test('should keep the current page and its neighbours visible for large ranges', async ({ page }) => {
        // Arrange
        const paginationPage = new PaginationDefaultPage(page);

        // Act
        await paginationPage.load({ currentPage: 25, totalPages: 50 });

        // Assert — 1 … 24 25 26 … 50
        await Promise.all([24, 25, 26].map((page_) => expect(paginationPage.paginationComponent.getPageButton(page_)).toHaveCount(1)));
        await Promise.all([23, 27].map((page_) => expect(paginationPage.paginationComponent.getPageButton(page_)).toHaveCount(0)));
    });

    test('should anchor the window to the first page when the current page is near the start', async ({ page }) => {
        // Arrange
        const paginationPage = new PaginationDefaultPage(page);

        // Act
        await paginationPage.load({ currentPage: 2, totalPages: 50 });

        // Assert — 1 2 3 4 5 … 50
        await expect(paginationPage.paginationComponent.pageButtonLocator).toHaveCount(6);
        await expect(paginationPage.paginationComponent.ellipsisLocator).toHaveCount(1);
        await Promise.all([1, 2, 3, 4, 5, 50].map((page_) => expect(paginationPage.paginationComponent.getPageButton(page_)).toHaveCount(1)));
    });

    test('should anchor the window to the last page when the current page is near the end', async ({ page }) => {
        // Arrange
        const paginationPage = new PaginationDefaultPage(page);

        // Act
        await paginationPage.load({ currentPage: 49, totalPages: 50 });

        // Assert — 1 … 46 47 48 49 50
        await expect(paginationPage.paginationComponent.pageButtonLocator).toHaveCount(6);
        await expect(paginationPage.paginationComponent.ellipsisLocator).toHaveCount(1);
        await Promise.all([1, 46, 47, 48, 49, 50].map((page_) => expect(paginationPage.paginationComponent.getPageButton(page_)).toHaveCount(1)));
    });

    test('should use the start-anchored window while the current page has a visible neighbour before the ellipsis', async ({ page }) => {
        // Arrange
        const paginationPage = new PaginationDefaultPage(page);

        // Act — last current page covered by the start window
        await paginationPage.load({ currentPage: 4, totalPages: 10 });

        // Assert — 1 2 3 4 5 … 10
        await expect(paginationPage.paginationComponent.pageButtonLocator).toHaveCount(6);
        await expect(paginationPage.paginationComponent.ellipsisLocator).toHaveCount(1);
        await Promise.all([1, 2, 3, 4, 5, 10].map((page_) => expect(paginationPage.paginationComponent.getPageButton(page_)).toHaveCount(1)));
    });

    test('should switch to the centred window once the current page would sit against the ellipsis', async ({ page }) => {
        // Arrange
        const paginationPage = new PaginationDefaultPage(page);

        // Act — first current page not covered by the start window
        await paginationPage.load({ currentPage: 5, totalPages: 10 });

        // Assert — 1 … 4 5 6 … 10
        await expect(paginationPage.paginationComponent.pageButtonLocator).toHaveCount(5);
        await expect(paginationPage.paginationComponent.ellipsisLocator).toHaveCount(2);
        await Promise.all([1, 4, 5, 6, 10].map((page_) => expect(paginationPage.paginationComponent.getPageButton(page_)).toHaveCount(1)));
        await expect(paginationPage.paginationComponent.getPageButton(2)).toHaveCount(0);
    });

    test('should switch to the end-anchored window near the end of the range', async ({ page }) => {
        // Arrange
        const paginationPage = new PaginationDefaultPage(page);

        // Act — first current page covered by the end window
        await paginationPage.load({ currentPage: 7, totalPages: 10 });

        // Assert — 1 … 6 7 8 9 10
        await expect(paginationPage.paginationComponent.pageButtonLocator).toHaveCount(6);
        await expect(paginationPage.paginationComponent.ellipsisLocator).toHaveCount(1);
        await Promise.all([1, 6, 7, 8, 9, 10].map((page_) => expect(paginationPage.paginationComponent.getPageButton(page_)).toHaveCount(1)));
        await expect(paginationPage.paginationComponent.getPageButton(4)).toHaveCount(0);
    });

    test('should render ellipsis items as non-interactive spans hidden from screen readers', async ({ page }) => {
        // Arrange
        const paginationPage = new PaginationDefaultPage(page);
        await paginationPage.load({ currentPage: 25, totalPages: 50 });

        // Act
        const ellipsisDetails = await page.evaluate(() => {
            const host = document.querySelector('pie-pagination');
            const ellipsisItems = host?.shadowRoot?.querySelectorAll('[data-test-id="pie-pagination-ellipsis"]') ?? [];

            return Array.from(ellipsisItems).map((item) => ({
                tag: item.tagName.toLowerCase(),
                ariaHidden: item.getAttribute('aria-hidden'),
                tabindex: item.getAttribute('tabindex'),
            }));
        });

        // Assert
        expect(ellipsisDetails).toHaveLength(2);
        ellipsisDetails.forEach((detail) => {
            expect(detail).toEqual({ tag: 'span', ariaHidden: 'true', tabindex: null });
        });
    });

    test('should still emit pie-pagination-page-change for visible pages in a large range', async ({ page }) => {
        // Arrange
        const paginationPage = new PaginationDefaultPage(page);
        await paginationPage.load({ currentPage: 25, totalPages: 50 });
        const { paginationComponent } = paginationPage;

        // Act
        const snapshots = await captureEvents(page, () => paginationComponent.getPageButton(24).click());

        // Assert
        expect(snapshots).toHaveLength(1);
        expect(snapshots[0]).toEqual({ currentPage: 24 });
    });

    test('should not emit pie-pagination-page-change when an ellipsis item is clicked', async ({ page }) => {
        // Arrange
        const paginationPage = new PaginationDefaultPage(page);
        await paginationPage.load({ currentPage: 25, totalPages: 50 });
        const { paginationComponent } = paginationPage;

        // Act
        const snapshots = await captureEventsAfterAction(page, () => paginationComponent.ellipsisLocator.first().click());

        // Assert
        expect(snapshots).toHaveLength(0);
    });

    test('should focus the previous control first when navigating with the keyboard', async ({ page }) => {
        // Arrange — currentPage 2 keeps the previous control enabled so it is tabbable.
        const paginationPage = new PaginationDefaultPage(page);
        await paginationPage.load({ currentPage: 2, totalPages: 50 });

        // Act
        await page.keyboard.press('Tab');

        // Assert
        await expect(paginationPage.paginationComponent.previousButtonLocator).toBeFocused();
    });

    test('should skip ellipsis items in the keyboard tab order', async ({ page }) => {
        // Arrange
        const paginationPage = new PaginationDefaultPage(page);
        await paginationPage.load({ currentPage: 25, totalPages: 50 });
        const { paginationComponent } = paginationPage;

        const getFocusedTestId = () => page.evaluate(() => {
            const host = document.querySelector('pie-pagination');
            const active = (host?.shadowRoot?.activeElement ?? document.activeElement) as HTMLElement | null;
            return active?.getAttribute('data-test-id') ?? null;
        });

        // Act — tab through the whole component: prev, 5 page buttons, next.
        // Keyboard presses are inherently sequential, so awaits inside the loop are required.
        const focusedTestIds: Array<string | null> = [];
        for (let index = 0; index < 7; index += 1) {
            // eslint-disable-next-line no-await-in-loop
            await page.keyboard.press('Tab');
            // eslint-disable-next-line no-await-in-loop
            focusedTestIds.push(await getFocusedTestId());
        }

        // Assert — no ellipsis item is ever focused; the page window has 5 buttons.
        expect(focusedTestIds[0]).toBe('pie-pagination-previous');
        expect(focusedTestIds.filter((testId) => testId === 'pie-pagination-page')).toHaveLength(5);
        expect(focusedTestIds[6]).toBe('pie-pagination-next');
        expect(focusedTestIds).not.toContain('pie-pagination-ellipsis');
        await expect(paginationComponent.nextButtonLocator).toBeFocused();
    });

    test('should activate the next control with Enter when it receives keyboard focus', async ({ page }) => {
        // Arrange
        const paginationPage = new PaginationDefaultPage(page);
        await paginationPage.load({ currentPage: 2, totalPages: 50 });
        const { paginationComponent } = paginationPage;

        // Act
        const snapshots = await captureEvents(page, async () => {
            await paginationComponent.nextButtonLocator.focus();
            await page.keyboard.press('Enter');
        });

        // Assert
        expect(snapshots).toHaveLength(1);
        expect(snapshots[0]).toEqual({ currentPage: 3 });
    });

    test('should activate a page control with Space when it receives keyboard focus', async ({ page }) => {
        // Arrange — the window at page 1 of 50 is 1 2 3 4 5 … 50, so page 2 is the target.
        const paginationPage = new PaginationDefaultPage(page);
        await paginationPage.load({ currentPage: 1, totalPages: 50 });
        const { paginationComponent } = paginationPage;

        // Act
        const snapshots = await captureEvents(page, async () => {
            await paginationComponent.getPageButton(2).focus();
            await page.keyboard.press('Space');
        });

        // Assert
        expect(snapshots).toHaveLength(1);
        expect(snapshots[0]).toEqual({ currentPage: 2 });
    });

    test.describe('Prop validation warnings', () => {
        /**
         * Sets a pagination property imperatively on the rendered element. Storybook
         * args cannot express NaN, Infinity or undefined, so invalid values are applied
         * as real property assignments from the browser instead. Values are passed as
         * serialisable tokens and converted browser-side.
         */
        async function setPaginationProp (page: Page, prop: 'currentPage' | 'totalPages', token: 'NaN' | 'Infinity' | 'undefined' | number) {
            await page.evaluate(({ name, token: raw }) => {
                const element = document.querySelector('pie-pagination') as HTMLElement & Record<string, unknown>;

                let value: unknown = raw;
                if (raw === 'NaN') value = NaN;
                else if (raw === 'Infinity') value = Infinity;
                else if (raw === 'undefined') value = undefined;

                element[name] = value;
            }, { name: prop, token });
        }

        test('should warn when totalPages is not a finite number', async ({ page }) => {
            // Arrange
            const paginationPage = new PaginationDefaultPage(page);
            await paginationPage.load({ currentPage: 1, totalPages: 20 });

            // Act / Assert — the listener is installed before each mutation so the
            // asynchronous CDP console message cannot be missed (see components AGENTS.md).
            const invalidTokens: Array<'NaN' | 'Infinity' | 'undefined'> = ['NaN', 'Infinity', 'undefined'];
            for (let index = 0; index < invalidTokens.length; index += 1) {
                const token = invalidTokens[index];
                // eslint-disable-next-line no-await-in-loop
                const received = page.waitForEvent('console', (msg) => msg.type() === 'warning' && msg.text() === `pie-pagination: "totalPages" must be a finite number, received "${token}".`);
                // eslint-disable-next-line no-await-in-loop
                await setPaginationProp(page, 'totalPages', token);
                // eslint-disable-next-line no-await-in-loop
                await received;
            }

            // Assert — the component still renders (garbage in, garbage out, but diagnosed).
            await expect(page.locator(componentSelector)).toBeVisible();
        });

        test('should warn when currentPage is not a finite number', async ({ page }) => {
            // Arrange
            const paginationPage = new PaginationDefaultPage(page);
            await paginationPage.load({ currentPage: 1, totalPages: 20 });

            // Act / Assert
            const invalidTokens: Array<'NaN' | 'Infinity' | 'undefined'> = ['NaN', 'Infinity', 'undefined'];
            for (let index = 0; index < invalidTokens.length; index += 1) {
                const token = invalidTokens[index];
                // eslint-disable-next-line no-await-in-loop
                const received = page.waitForEvent('console', (msg) => msg.type() === 'warning' && msg.text() === `pie-pagination: "currentPage" must be a finite number, received "${token}".`);
                // eslint-disable-next-line no-await-in-loop
                await setPaginationProp(page, 'currentPage', token);
                // eslint-disable-next-line no-await-in-loop
                await received;
            }

            // Assert — the component still renders.
            await expect(page.locator(componentSelector)).toBeVisible();
        });

        test('should warn when a prop is not an integer', async ({ page }) => {
            // Arrange
            const paginationPage = new PaginationDefaultPage(page);
            await paginationPage.load({ currentPage: 1, totalPages: 20 });

            // Act / Assert
            const totalPagesReceived = page.waitForEvent('console', (msg) => msg.type() === 'warning' && msg.text() === 'pie-pagination: "totalPages" must be a positive integer, received "8.5".');
            await setPaginationProp(page, 'totalPages', 8.5);
            await totalPagesReceived;

            const currentPageReceived = page.waitForEvent('console', (msg) => msg.type() === 'warning' && msg.text() === 'pie-pagination: "currentPage" must be a positive integer, received "4.5".');
            await setPaginationProp(page, 'currentPage', 4.5);
            await currentPageReceived;

            // Assert — the component still renders.
            await expect(page.locator(componentSelector)).toBeVisible();
        });

        test('should keep warning when a prop is out of range', async ({ page }) => {
            // Arrange — locks the pre-existing warning messages alongside the new predicates.
            const paginationPage = new PaginationDefaultPage(page);
            await paginationPage.load({ currentPage: 1, totalPages: 5 });

            // Act / Assert — the second warning compares against the mutated totalPages (0).
            const totalPagesReceived = page.waitForEvent('console', (msg) => msg.type() === 'warning' && msg.text() === 'pie-pagination: "totalPages" must be at least 1, received "0".');
            await setPaginationProp(page, 'totalPages', 0);
            await totalPagesReceived;

            const currentPageReceived = page.waitForEvent('console', (msg) => msg.type() === 'warning' && msg.text() === 'pie-pagination: "currentPage" (10) cannot be greater than "totalPages" (0).');
            await setPaginationProp(page, 'currentPage', 10);
            await currentPageReceived;

            // Assert — the component still renders.
            await expect(page.locator(componentSelector)).toBeVisible();
        });
    });
});
