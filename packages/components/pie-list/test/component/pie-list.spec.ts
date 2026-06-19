import {
    test, expect, type Page,
} from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

const componentSelector = '[data-test-id="pie-list"]';

const getTabindex = (page: Page, testId: string) => page.getByTestId(testId).getAttribute('tabindex');

const getRole = (page: Page, testId: string) => page.getByTestId(testId).getAttribute('role');

const getAria = (page: Page, testId: string, attr: string) => page.getByTestId(testId).getAttribute(attr);

const getListAttr = (page: Page, attr: string) => page.locator(componentSelector).getAttribute(attr);

const focusBeforeButton = async (page: Page) => {
    const before = page.getByTestId('btn-before');
    await expect(before).toBeVisible();
    await before.focus();
};

test.describe('PieList - Component tests', () => {
    test('should render successfully', async ({ page }) => {
        const basePage = new BasePage(page, 'list--default');
        await basePage.load();
        await expect(page.locator(componentSelector)).toBeVisible();
    });

    test.describe('variant="static" (default)', () => {
        test('Tab from preceding focusable skips the list entirely', async ({ page }) => {
            await new BasePage(page, 'list--static-list').load();
            await focusBeforeButton(page);

            await page.keyboard.press('Tab');

            await expect(page.getByTestId('btn-after')).toBeFocused();
        });

        test('list has no tabindex; items have no tabindex', async ({ page }) => {
            await new BasePage(page, 'list--static-list').load();

            expect(await getListAttr(page, 'tabindex')).toBeNull();
            expect(await getTabindex(page, 'item-1')).toBeNull();
            expect(await getTabindex(page, 'item-2')).toBeNull();
            expect(await getTabindex(page, 'item-3')).toBeNull();
        });

        test('list has role="list"; items have role="listitem"', async ({ page }) => {
            await new BasePage(page, 'list--static-list').load();

            expect(await getListAttr(page, 'role')).toBe('list');
            expect(await getRole(page, 'item-1')).toBe('listitem');
            expect(await getRole(page, 'item-2')).toBe('listitem');
            expect(await getRole(page, 'item-3')).toBe('listitem');
        });
    });

    // For radio/checkbox/switch the list is a semantic grouping container;
    // it must not interfere with the slotted controls' own focus and selection.
    const slottedControlCases = [
        { variant: 'radio', story: 'list--radio-variant', listRole: 'radiogroup' },
        { variant: 'checkbox', story: 'list--checkbox-variant', listRole: 'group' },
        { variant: 'switch', story: 'list--switch-variant', listRole: 'group' },
    ] as const;

    slottedControlCases.forEach(({ variant, story, listRole }) => {
        test.describe(`variant="${variant}"`, () => {
            test(`list has role="${listRole}"; no tabindex; no aria-multiselectable`, async ({ page }) => {
                await new BasePage(page, story).load();

                expect(await getListAttr(page, 'role')).toBe(listRole);
                expect(await getListAttr(page, 'tabindex')).toBeNull();
                expect(await getListAttr(page, 'aria-multiselectable')).toBeNull();
                expect(await getListAttr(page, 'aria-activedescendant')).toBeNull();
            });

            test('items have no role and no aria-selected / aria-disabled', async ({ page }) => {
                await new BasePage(page, story).load();

                expect(await getRole(page, 'item-1')).toBeNull();
                expect(await getAria(page, 'item-1', 'aria-selected')).toBeNull();
                expect(await getAria(page, 'item-1', 'aria-disabled')).toBeNull();
                expect(await getRole(page, 'item-2')).toBeNull();
                expect(await getAria(page, 'item-2', 'aria-selected')).toBeNull();
            });

            test('Tab from preceding focusable does not stop on the list', async ({ page }) => {
                await new BasePage(page, story).load();
                await focusBeforeButton(page);

                // First Tab lands on the first slotted interactive control, not the list.
                await page.keyboard.press('Tab');
                await expect(page.locator(componentSelector)).not.toBeFocused();
            });
        });
    });
});
