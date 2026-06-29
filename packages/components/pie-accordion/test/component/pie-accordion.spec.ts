import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { accordion } from '../helpers/page-object/selectors.ts';

declare global {
    interface Window {
        __accordionEvents: Array<{ isOpen: boolean }>;
    }
}

const loadAccordion = async (page: BasePage['page'], storyName = 'accordion--default', props: Record<string, unknown> = {}) => {
    const basePage = new BasePage(page, storyName);
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
        const host = await loadAccordion(page, 'accordion--default');
        await expect(host).toBeVisible();
    });

    test.describe('props', () => {
        test.describe('isOpen', () => {
            test('should hide panel when isOpen is false', async ({ page }) => {
                await loadAccordion(page, 'accordion--default', { isOpen: false });
                const panel = page.getByTestId(accordion.selectors.panel.dataTestId);
                await expect(panel).toHaveAttribute('hidden');
            });

            test('should show panel when isOpen is true', async ({ page }) => {
                await loadAccordion(page, 'accordion--default', { isOpen: true });
                const panel = page.getByTestId(accordion.selectors.panel.dataTestId);
                await expect(panel).not.toHaveAttribute('hidden');
            });

            test('should show panel when isOpen is set to true externally', async ({ page }) => {
                await loadAccordion(page, 'accordion--default', { isOpen: false });
                const panel = page.getByTestId(accordion.selectors.panel.dataTestId);

                await page.evaluate(() => {
                    (document.querySelector('pie-accordion') as HTMLElement & { isOpen: boolean }).isOpen = true;
                });

                await expect(panel).not.toHaveAttribute('hidden');
            });
        });
        test.describe('headingLabel', () => {
            test('should render the heading label text', async ({ page }) => {
                await loadAccordion(page, 'accordion--default', { headingLabel: 'New information' });

                const headingText = await page.evaluate(() => {
                    const shadow = document.querySelector('pie-accordion')!.shadowRoot!;
                    return shadow.querySelector('.c-accordion-headingLabel')?.textContent?.trim();
                });

                expect(headingText).toBe('New information');
            });
        });
        test.describe('headingLevel', () => {
            (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const).forEach((level) => {
                test(`should render the correct heading element when headingLevel is "${level}"`, async ({ page }) => {
                    await loadAccordion(page, 'accordion--default', { headingLevel: level });

                    const headingExists = await page.evaluate((tag) => {
                        const shadow = document.querySelector('pie-accordion')!.shadowRoot!;
                        return shadow.querySelector(tag) !== null;
                    }, level);

                    expect(headingExists).toBe(true);
                });
            });
        });
        test.describe('secondaryLabel', () => {
            test('should not render the secondary label when secondaryLabel is not provided', async ({ page }) => {
                await loadAccordion(page, 'accordion--default');

                const hasSecondaryLabel = await page.evaluate(() => {
                    const shadow = document.querySelector('pie-accordion')!.shadowRoot!;
                    return shadow.querySelector('.c-accordion-secondaryLabel') !== null;
                });

                expect(hasSecondaryLabel).toBe(false);
            });
            test('should render the secondary label when secondaryLabel is provided', async ({ page }) => {
                await loadAccordion(page, 'accordion--default', { secondaryLabel: 'Available in your area' });

                const secondaryText = await page.evaluate(() => {
                    const shadow = document.querySelector('pie-accordion')!.shadowRoot!;
                    return shadow.querySelector('.c-accordion-secondaryLabel')?.textContent?.trim();
                });

                expect(secondaryText).toBe('Available in your area');
            });
        });
        test.describe('isDividerHidden', () => {
            test('should render pie-divider by default', async ({ page }) => {
                await loadAccordion(page, 'accordion--default');

                const hasDivider = await page.evaluate(() => {
                    const shadow = document.querySelector('pie-accordion')!.shadowRoot!;
                    return shadow.querySelector('pie-divider') !== null;
                });

                expect(hasDivider).toBe(true);
            });

            test('should not render pie-divider when isDividerHidden is true', async ({ page }) => {
                await loadAccordion(page, 'accordion--default', { isDividerHidden: true });

                const hasDivider = await page.evaluate(() => {
                    const shadow = document.querySelector('pie-accordion')!.shadowRoot!;
                    return shadow.querySelector('pie-divider') !== null;
                });

                expect(hasDivider).toBe(false);
            });
        });
        test.describe('isEmphasisReduced', () => {
            test('should not have isemphasisreduced attribute by default', async ({ page }) => {
                const host = await loadAccordion(page, 'accordion--default');
                await expect(host).not.toHaveAttribute('isemphasisreduced');
            });

            test('should reflect isemphasisreduced attribute on host when isEmphasisReduced is true', async ({ page }) => {
                const host = await loadAccordion(page, 'accordion--default', { isEmphasisReduced: true });
                await expect(host).toHaveAttribute('isemphasisreduced');
            });
        });
    });
    test.describe('Behaviour', () => {
        test.describe('Panel visibility', () => {
            test('should open panel when trigger is clicked', async ({ page }) => {
                await loadAccordion(page, 'accordion--default', { isOpen: false });
                const trigger = page.getByTestId(accordion.selectors.trigger.dataTestId);
                const panel = page.getByTestId(accordion.selectors.panel.dataTestId);

                await trigger.click();

                await expect(panel).not.toHaveAttribute('hidden');
            });

            test('should close panel when trigger is clicked while open', async ({ page }) => {
                await loadAccordion(page, 'accordion--default', { isOpen: true });
                const trigger = page.getByTestId(accordion.selectors.trigger.dataTestId);
                const panel = page.getByTestId(accordion.selectors.panel.dataTestId);

                await trigger.click();

                await expect(panel).toHaveAttribute('hidden');
            });
        });
        test.describe('Keyboard interaction', () => {
            test('should dispatch pie-accordion-toggle when Space is pressed on the trigger', async ({ page }) => {
                await loadAccordion(page, 'accordion--default');
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
                await loadAccordion(page, 'accordion--default');
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
                await loadAccordion(page, 'accordion--default');
                await attachToggleListener(page);

                const trigger = page.getByTestId(accordion.selectors.trigger.dataTestId);
                await trigger.focus();
                await page.keyboard.press('Tab');

                const events = await page.evaluate(() => window.__accordionEvents);
                expect(events).toHaveLength(0);
            });
        });
    });

    test.describe('ARIA attributes', () => {
        test('should have aria-expanded="false" when isOpen is false', async ({ page }) => {
            await loadAccordion(page, 'accordion--default', { isOpen: false });
            const trigger = page.getByTestId(accordion.selectors.trigger.dataTestId);
            await expect(trigger).toHaveAttribute('aria-expanded', 'false');
        });

        test('should have aria-expanded="true" when isOpen is true', async ({ page }) => {
            await loadAccordion(page, 'accordion--default', { isOpen: true });
            const trigger = page.getByTestId(accordion.selectors.trigger.dataTestId);
            await expect(trigger).toHaveAttribute('aria-expanded', 'true');
        });

        test('should have aria-controls matching the panel id', async ({ page }) => {
            await loadAccordion(page, 'accordion--default');
            const trigger = page.getByTestId(accordion.selectors.trigger.dataTestId);
            const panel = page.getByTestId(accordion.selectors.panel.dataTestId);

            const ariaControls = await trigger.getAttribute('aria-controls');
            const panelId = await panel.getAttribute('id');

            expect(ariaControls).toBeTruthy();
            expect(ariaControls).toBe(panelId);
        });

        test('should have role="region" and aria-labelledby on the panel', async ({ page }) => {
            await loadAccordion(page, 'accordion--default');
            const trigger = page.getByTestId(accordion.selectors.trigger.dataTestId);
            const panel = page.getByTestId(accordion.selectors.panel.dataTestId);

            const triggerId = await trigger.getAttribute('id');
            const ariaLabelledBy = await panel.getAttribute('aria-labelledby');

            await expect(panel).toHaveAttribute('role', 'region');
            expect(ariaLabelledBy).toBeTruthy();
            expect(ariaLabelledBy).toBe(triggerId);
        });
    });

    test.describe('Toggle event', () => {
        test('should dispatch pie-accordion-toggle with current isOpen value on click', async ({ page }) => {
            await loadAccordion(page, 'accordion--default', { isOpen: false });
            await attachToggleListener(page);

            const trigger = page.getByTestId(accordion.selectors.trigger.dataTestId);
            const countBefore = await page.evaluate(() => window.__accordionEvents.length);
            await trigger.click();
            await page.waitForFunction((c) => window.__accordionEvents.length > c, countBefore);

            const [event] = await page.evaluate(() => window.__accordionEvents);
            expect(event.isOpen).toBe(false);
        });
    });
});
