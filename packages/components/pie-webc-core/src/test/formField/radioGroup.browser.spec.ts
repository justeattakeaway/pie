import { test, expect, type Page } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

/** The group's current value. */
const groupValue = (page: Page) => page.evaluate(() => (document.querySelector('radio-group-mock') as unknown as { value: string | null })?.value ?? null);

/** The value of the radio whose host carries the reflected `checked` attribute. */
const checkedValue = (page: Page) => page.evaluate(() => document.querySelector('radio-mock[checked]')?.getAttribute('value') ?? null);

/** aria-labels of each radio's native input, in order. */
const inputLabels = (page: Page) => page.evaluate(() => [...document.querySelectorAll('radio-mock')]
        .map((radio) => radio.shadowRoot?.querySelector('input')?.getAttribute('aria-label') ?? null));

const loadStory = async (page: Page, storyId: string) => {
    await new BasePage(page, storyId).load();
    await page.locator('radio-group-mock').waitFor({ state: 'visible' });
};

test.describe('RadioGroup mock (controllers + form-field)', () => {
    test.describe('plain radios', () => {
        test('should name each input from its label prop', async ({ page }) => {
            await loadStory(page, 'webc-core--radio-group-plain');

            expect(await inputLabels(page)).toEqual(['Option A', 'Option B', 'Option C (disabled)', 'Option D']);
        });

        test('should focus the first radio on Tab without selecting, then select as arrows move (skipping disabled)', async ({ page }) => {
            await loadStory(page, 'webc-core--radio-group-plain');

            await page.keyboard.press('Tab'); // focus first radio — no selection yet
            expect(await groupValue(page)).toBeNull();

            await page.keyboard.press('ArrowDown'); // move to B and select it
            expect(await groupValue(page)).toBe('b');
            expect(await checkedValue(page)).toBe('b');

            await page.keyboard.press('ArrowDown'); // skips disabled C, selects D
            expect(await groupValue(page)).toBe('d');
            expect(await checkedValue(page)).toBe('d');
        });

        test('should select a radio when it is clicked', async ({ page }) => {
            await loadStory(page, 'webc-core--radio-group-plain');

            await page.locator('radio-mock[value="d"]').click();
            expect(await groupValue(page)).toBe('d');
            expect(await checkedValue(page)).toBe('d');
        });

        test('should not select a disabled radio when clicked', async ({ page }) => {
            await loadStory(page, 'webc-core--radio-group-plain');

            await page.locator('radio-mock[value="c"]').click();
            expect(await groupValue(page)).toBeNull();
        });
    });

    test.describe('radios in fully-clickable cards', () => {
        test('should name each input from the card markup via context', async ({ page }) => {
            await loadStory(page, 'webc-core--radio-group-cards');

            expect(await inputLabels(page)).toEqual(['Standard delivery', 'Express delivery', 'Scheduled delivery']);
        });

        test('should select a radio when its card is clicked', async ({ page }) => {
            await loadStory(page, 'webc-core--radio-group-cards');

            // Click the card label area (not the radio itself).
            await page.locator('[data-field-label]').nth(1).click();
            expect(await groupValue(page)).toBe('opt-1');
            expect(await checkedValue(page)).toBe('opt-1');
        });

        test('should navigate across the nested radios with arrow keys', async ({ page }) => {
            await loadStory(page, 'webc-core--radio-group-cards');

            await page.keyboard.press('Tab'); // focus first card's radio
            await page.keyboard.press('ArrowDown'); // → second card
            expect(await groupValue(page)).toBe('opt-1');
        });
    });
});
