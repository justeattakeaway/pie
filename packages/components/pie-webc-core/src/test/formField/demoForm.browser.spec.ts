import { test, expect, type Page } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

/** The form's live state summary (the consumer owns all values). */
const summary = (page: Page) => page.evaluate(() => document.querySelector('demo-form-mock')?.shadowRoot?.querySelector('.summary')?.textContent ?? '');

const loadStory = async (page: Page) => {
    await new BasePage(page, 'webc-core--complex-form').load();
    await page.locator('demo-form-mock').waitFor({ state: 'visible' });
};

test.describe('Complex form (form-field pattern stress test)', () => {
    test('should name the text input from the field and capture typed text in the owned state', async ({ page }) => {
        await loadStory(page);

        const name = page.locator('input[aria-label*="Full name"]');
        await expect(name).toHaveAttribute('aria-required', 'true');

        await name.fill('Ada Lovelace');
        expect(await summary(page)).toContain('Ada Lovelace');
    });

    test('should reflect field-level validity onto the email input', async ({ page }) => {
        await loadStory(page);

        const email = page.locator('input[type="text"][aria-label*="Email"]');
        await expect(email).not.toHaveAttribute('aria-invalid', 'true');

        await email.fill('not-an-email');
        await expect(email).toHaveAttribute('aria-invalid', 'true');

        await email.fill('ada@example.com');
        await expect(email).not.toHaveAttribute('aria-invalid', 'true');
    });

    test('should capture textarea input', async ({ page }) => {
        await loadStory(page);

        await page.locator('textarea').fill('Leave at the door');
        expect(await summary(page)).toContain('Leave at the door');
    });

    test('should select a delivery option by clicking its card', async ({ page }) => {
        await loadStory(page);

        await page.locator('radio-group-mock [data-field-label]', { hasText: 'Express' }).click();
        expect(await summary(page)).toContain('"delivery": "express"');
    });

    test('should toggle notification channels and the terms checkbox', async ({ page }) => {
        await loadStory(page);

        await page.locator('checkbox-group-mock [data-field-label]', { hasText: 'Email' }).click();
        await page.locator('demo-form-mock [data-field-label]', { hasText: 'I accept' }).click();

        const state = await summary(page);
        expect(state).toContain('email');
        expect(state).toContain('"acceptedTerms": true');
    });

    test('should select delivery options via keyboard navigation', async ({ page }) => {
        await loadStory(page);

        await page.locator('radio-group-mock radio-mock').first().focus(); // Standard (no select on focus-in)
        await page.keyboard.press('ArrowDown'); // -> Express, selects
        expect(await summary(page)).toContain('"delivery": "express"');

        // After the parent re-rendered from the first selection, navigation must still work.
        await page.keyboard.press('ArrowDown'); // wraps Express -> Standard (Same day disabled)
        expect(await summary(page)).toContain('"delivery": "standard"');

        await page.keyboard.press('ArrowDown'); // Standard -> Express
        expect(await summary(page)).toContain('"delivery": "express"');
    });

    test('should not select the disabled delivery option', async ({ page }) => {
        await loadStory(page);

        await page.locator('radio-group-mock [data-field-label]', { hasText: 'Same day' }).click();
        expect(await summary(page)).toContain('"delivery": null');
    });
});
