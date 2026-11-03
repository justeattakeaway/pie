import { test } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { percyWidths } from '@justeattakeaway/pie-webc-testing/src/percy/breakpoints.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

const trigger = 'pie-dropdown-trigger';
const popover = 'pie-dropdown-popover';
const input = 'pie-dropdown-input';

test.describe('PieDropdown - Visual tests', () => {
    test('should render the default dropdown', async ({ page }) => {
        const basePage = new BasePage(page, 'dropdown--default');
        await basePage.load();

        await percySnapshot(page, 'PieDropdown - Default', percyWidths);
    });

    test('should render selection variations', async ({ page }) => {
        const basePage = new BasePage(page, 'dropdown--selection-variations');
        await basePage.load();

        await percySnapshot(page, 'PieDropdown - Selection variations', percyWidths);
    });

    test('should render multiselect variations', async ({ page }) => {
        const basePage = new BasePage(page, 'dropdown--multiselect-variations');
        await basePage.load();

        await percySnapshot(page, 'PieDropdown - Multiselect variations', percyWidths);
    });

    test('should render searchable variations', async ({ page }) => {
        const basePage = new BasePage(page, 'dropdown--searchable-variations');
        await basePage.load();

        await percySnapshot(page, 'PieDropdown - Searchable variations', percyWidths);
    });

    test('should render size and status variations', async ({ page }) => {
        const basePage = new BasePage(page, 'dropdown--size-status-variations');
        await basePage.load();

        await percySnapshot(page, 'PieDropdown - Size and status variations', percyWidths);
    });

    test('should render complex options (secondary text, icons, selection)', async ({ page }) => {
        const basePage = new BasePage(page, 'dropdown--complex-options');
        await basePage.load();

        await percySnapshot(page, 'PieDropdown - Complex options', percyWidths);
    });

    test('should render the open single-select popover', async ({ page }) => {
        const basePage = new BasePage(page, 'dropdown--single-select');
        await basePage.load();

        await page.getByTestId(trigger).click();
        await basePage.freezeAnimations();

        await percySnapshot(page, 'PieDropdown - Open single select', percyWidths);
    });

    test('should render the open multi-select popover', async ({ page }) => {
        const basePage = new BasePage(page, 'dropdown--multi-select');
        await basePage.load();

        await page.getByTestId('pie-dropdown-field').click({ position: { x: 10, y: 24 } });
        await basePage.freezeAnimations();

        await percySnapshot(page, 'PieDropdown - Open multi select', percyWidths);
    });

    test('should render the loading state', async ({ page }) => {
        const basePage = new BasePage(page, 'dropdown--loading-state');
        await basePage.load();

        await page.getByTestId(trigger).click();
        await basePage.freezeAnimations();

        await percySnapshot(page, 'PieDropdown - Loading', percyWidths);
    });

    test('should render the no-results state', async ({ page }) => {
        const basePage = new BasePage(page, 'dropdown--single-select-searchable');
        await basePage.load();

        const searchField = page.getByTestId(input);
        await searchField.fill('zzz');
        await basePage.freezeAnimations();

        await percySnapshot(page, 'PieDropdown - No results', percyWidths);
    });

    test('should render the filtered searchable state', async ({ page }) => {
        const basePage = new BasePage(page, 'dropdown--single-select-searchable');
        await basePage.load();

        const searchField = page.getByTestId(input);
        await searchField.fill('Pas');
        await basePage.freezeAnimations();

        await percySnapshot(page, 'PieDropdown - Filtered searchable', percyWidths);
    });

    test('should render the open complex options popover', async ({ page }) => {
        const basePage = new BasePage(page, 'dropdown--complex-options');
        await basePage.load();

        await page.getByTestId(trigger).click();
        await basePage.freezeAnimations();

        await percySnapshot(page, 'PieDropdown - Open complex options', percyWidths);
    });
});
