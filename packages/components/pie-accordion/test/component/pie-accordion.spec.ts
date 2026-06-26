import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { accordion } from '../helpers/page-object/selectors.ts';

declare global {
    interface Window {
        __accordionEvents: Array<{ isOpen: boolean }>;
    }
}

const loadAccordion = async (page: BasePage['page'], props: Record<string, unknown> = {}) => {
    const basePage = new BasePage(page, 'accordion--default');
    await basePage.load(props);
    return page.getByTestId(accordion.selectors.host.dataTestId);
};

const attachToggleListener = async (page: BasePage['page']) => {
    await page.evaluate(() => {
        window.__accordionEvents = [];
        document.querySelector('pie-accordion')!.addEventListener('pie-accordion-toggle', (e) => {
            window.__accordionEvents.push(structuredClone((e as CustomEvent).detail));
        });
    });
};

test.describe('PieAccordion - Component tests', () => {
    test('should render successfully', async ({ page }) => {
        const host = await loadAccordion(page);
        await expect(host).toBeVisible();
    });

    test.describe('ARIA attributes', () => {
        test('should have aria-expanded="false" when isOpen is false', async ({ page }) => {
            await loadAccordion(page, { isOpen: false });
            const trigger = page.getByTestId(accordion.selectors.trigger.dataTestId);
            await expect(trigger).toHaveAttribute('aria-expanded', 'false');
        });

        test('should have aria-expanded="true" when isOpen is true', async ({ page }) => {
            await loadAccordion(page, { isOpen: true });
            const trigger = page.getByTestId(accordion.selectors.trigger.dataTestId);
            await expect(trigger).toHaveAttribute('aria-expanded', 'true');
        });

        test('should have aria-controls matching the panel id', async ({ page }) => {
            await loadAccordion(page);
            const trigger = page.getByTestId(accordion.selectors.trigger.dataTestId);
            const panel = page.getByTestId(accordion.selectors.panel.dataTestId);

            const ariaControls = await trigger.getAttribute('aria-controls');
            const panelId = await panel.getAttribute('id');

            expect(ariaControls).toBeTruthy();
            expect(ariaControls).toBe(panelId);
        });

        test('should have role="region" and aria-labelledby on the panel', async ({ page }) => {
            await loadAccordion(page);
            const trigger = page.getByTestId(accordion.selectors.trigger.dataTestId);
            const panel = page.getByTestId(accordion.selectors.panel.dataTestId);

            const triggerId = await trigger.getAttribute('id');
            const ariaLabelledBy = await panel.getAttribute('aria-labelledby');

            await expect(panel).toHaveAttribute('role', 'region');
            expect(ariaLabelledBy).toBeTruthy();
            expect(ariaLabelledBy).toBe(triggerId);
        });
    });

    test.describe('Keyboard interaction', () => {
        test('should dispatch pie-accordion-toggle when Space is pressed on the trigger', async ({ page }) => {
            await loadAccordion(page);
            await attachToggleListener(page);

            const trigger = page.getByTestId(accordion.selectors.trigger.dataTestId);
            await trigger.focus();

            const countBefore = await page.evaluate(() => window.__accordionEvents.length);
            await page.keyboard.press('Space');
            await page.waitForFunction((c) => window.__accordionEvents.length > c, countBefore);

            const events = await page.evaluate(() => window.__accordionEvents);
            expect(events).toHaveLength(1);
        });

        test('should dispatch pie-accordion-toggle when Enter is pressed on the trigger', async ({ page }) => {
            await loadAccordion(page);
            await attachToggleListener(page);

            const trigger = page.getByTestId(accordion.selectors.trigger.dataTestId);
            await trigger.focus();

            const countBefore = await page.evaluate(() => window.__accordionEvents.length);
            await page.keyboard.press('Enter');
            await page.waitForFunction((c) => window.__accordionEvents.length > c, countBefore);

            const events = await page.evaluate(() => window.__accordionEvents);
            expect(events).toHaveLength(1);
        });

        test('should not dispatch pie-accordion-toggle when Tab is pressed on the trigger', async ({ page }) => {
            await loadAccordion(page);
            await attachToggleListener(page);

            const trigger = page.getByTestId(accordion.selectors.trigger.dataTestId);
            await trigger.focus();
            await page.keyboard.press('Tab');

            const events = await page.evaluate(() => window.__accordionEvents);
            expect(events).toHaveLength(0);
        });
    });

    test.describe('Controlled behaviour', () => {
        test('should dispatch pie-accordion-toggle with current isOpen value on click', async ({ page }) => {
            await loadAccordion(page, { isOpen: false });
            await attachToggleListener(page);

            const trigger = page.getByTestId(accordion.selectors.trigger.dataTestId);
            const countBefore = await page.evaluate(() => window.__accordionEvents.length);
            await trigger.click();
            await page.waitForFunction((c) => window.__accordionEvents.length > c, countBefore);

            const [event] = await page.evaluate(() => window.__accordionEvents);
            expect(event.isOpen).toBe(false);
        });

        test('should not toggle panel when no consumer updates isOpen', async ({ page }) => {
            await loadAccordion(page, { isOpen: false });
            const panel = page.getByTestId(accordion.selectors.panel.dataTestId);
            const trigger = page.getByTestId(accordion.selectors.trigger.dataTestId);

            await trigger.click();

            await expect(panel).toHaveAttribute('hidden');
        });
    });

    test.describe('Panel visibility', () => {
        test('should hide panel when isOpen is false', async ({ page }) => {
            await loadAccordion(page, { isOpen: false });
            const panel = page.getByTestId(accordion.selectors.panel.dataTestId);
            await expect(panel).toHaveAttribute('hidden');
        });

        test('should show panel when isOpen is true', async ({ page }) => {
            await loadAccordion(page, { isOpen: true });
            const panel = page.getByTestId(accordion.selectors.panel.dataTestId);
            await expect(panel).not.toHaveAttribute('hidden');
        });
    });
});
