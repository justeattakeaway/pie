import { test, expect, type Page } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

/** The group's current value (array of selected keys). */
const groupValue = (page: Page) => page.evaluate(() => [...((document.querySelector('checkbox-group-mock') as unknown as { value: string[] })?.value ?? [])]);

/** Values of the checkboxes whose native input is checked, in DOM order. */
const checkedValues = (page: Page) => page.evaluate(() => [...document.querySelectorAll('checkbox-mock')]
        .filter((checkbox) => checkbox.shadowRoot?.querySelector('input')?.checked)
        .map((checkbox) => checkbox.getAttribute('value')));

const loadStory = async (page: Page, storyId: string) => {
    await new BasePage(page, storyId).load();
    await page.locator('checkbox-group-mock').waitFor({ state: 'visible' });
};

test.describe('CheckboxGroup mock (controllers + form-field)', () => {
    test.describe('plain checkboxes', () => {
        test('should toggle several checkboxes independently on click', async ({ page }) => {
            await loadStory(page, 'webc-core--checkbox-group-plain');

            await page.locator('[data-field-label]', { hasText: 'Pepperoni' }).click();
            await page.locator('[data-field-label]', { hasText: 'Olives' }).click();
            expect(await groupValue(page)).toEqual(['pepperoni', 'olives']);
            expect(await checkedValues(page)).toEqual(['pepperoni', 'olives']);

            // Toggling one off leaves the other selected.
            await page.locator('[data-field-label]', { hasText: 'Pepperoni' }).click();
            expect(await groupValue(page)).toEqual(['olives']);
        });

        test('should tab between checkboxes and toggle the focused one with Space', async ({ page }) => {
            await loadStory(page, 'webc-core--checkbox-group-plain');

            await page.keyboard.press('Tab'); // focus first checkbox (Pepperoni)
            await page.keyboard.press('Space'); // toggle it on
            expect(await groupValue(page)).toEqual(['pepperoni']);

            await page.keyboard.press('Tab'); // tab to the next checkbox (Mushroom)
            await page.keyboard.press('Space'); // toggle it on
            expect(await groupValue(page)).toEqual(['pepperoni', 'mushroom']);
        });

        test('should skip the disabled checkbox in the tab order', async ({ page }) => {
            await loadStory(page, 'webc-core--checkbox-group-plain');

            // The disabled checkbox's native input is removed from the tab order,
            // so tabbing past Mushroom lands on Olives (skipping Anchovies).
            await page.keyboard.press('Tab'); // Pepperoni
            await page.keyboard.press('Tab'); // Mushroom
            await page.keyboard.press('Tab'); // skips disabled Anchovies -> Olives
            await page.keyboard.press('Space');
            expect(await groupValue(page)).toEqual(['olives']);
        });

        test('should not select a disabled checkbox when clicked', async ({ page }) => {
            await loadStory(page, 'webc-core--checkbox-group-plain');

            await page.locator('[data-field-label]', { hasText: 'Anchovies' }).click();
            expect(await groupValue(page)).toEqual([]);
        });
    });

    test.describe('checkboxes in fully-clickable cards', () => {
        test('should toggle a checkbox when its card is clicked', async ({ page }) => {
            await loadStory(page, 'webc-core--checkbox-group-cards');

            await page.locator('[data-field-label]', { hasText: 'Email' }).click();
            await page.locator('[data-field-label]', { hasText: 'Push' }).click();
            expect(await groupValue(page)).toEqual(['email', 'push']);
        });

        test('should not toggle a disabled card', async ({ page }) => {
            await loadStory(page, 'webc-core--checkbox-group-cards');

            await page.locator('[data-field-label]', { hasText: 'SMS' }).click();
            expect(await groupValue(page)).toEqual([]);
        });
    });
});
