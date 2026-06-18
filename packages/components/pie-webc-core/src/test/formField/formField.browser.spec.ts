import { test, expect, type Page } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

/** Reads an attribute from the checkbox's native input in its shadow root. */
const inputAttr = (page: Page, attr: string) => page.evaluate((a) => {
    const checkbox = document.querySelector('checkbox-mock');
    return checkbox?.shadowRoot?.querySelector('input')?.getAttribute(a) ?? null;
}, attr);

const isChecked = (page: Page) => page.evaluate(() => document.querySelector('checkbox-mock')?.shadowRoot?.querySelector('input')?.checked ?? false);

const loadStory = async (page: Page, storyId: string) => {
    await new BasePage(page, storyId).load();
    await page.locator('form-field-mock').waitFor({ state: 'visible' });
};

test.describe('FormField mock (context + clickable field)', () => {
    test.describe('fully clickable card', () => {
        test('should apply the marked label and description as aria on the native input', async ({ page }) => {
            await loadStory(page, 'webc-core--form-field-clickable-card');

            expect(await inputAttr(page, 'aria-label')).toBe('Some label');
            expect(await inputAttr(page, 'aria-description')).toBe('Some other longer text. more text');
        });

        test('should toggle the checkbox when clicking anywhere on the card', async ({ page }) => {
            await loadStory(page, 'webc-core--form-field-clickable-card');

            expect(await isChecked(page)).toBe(false);

            // Click the label area (not the checkbox) — the field forwards it.
            await page.locator('[data-field-label]').click();
            expect(await isChecked(page)).toBe(true);

            // Clicking the description area toggles it back.
            await page.locator('[data-field-description]').first().click();
            expect(await isChecked(page)).toBe(false);
        });
    });

    test.describe('traditional label + input', () => {
        test('should label the input and toggle it when the label is clicked', async ({ page }) => {
            await loadStory(page, 'webc-core--form-field-traditional');

            expect(await inputAttr(page, 'aria-label')).toBe('Accept terms and conditions');

            await page.locator('[data-field-label]').click();
            expect(await isChecked(page)).toBe(true);
        });
    });
});
