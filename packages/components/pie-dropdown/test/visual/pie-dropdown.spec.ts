import { test, expect } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

const trigger = 'pie-dropdown-trigger';
const input = 'pie-dropdown-input';
const field = 'pie-dropdown-field';
const popover = 'pie-dropdown-popover';

/**
 * The popover hangs from the field with pure CSS (absolute positioning),
 * so every state — open or closed — renders correctly at any capture
 * width. The open states keep their pinned widths (1280px desktop, 360px
 * for the @mobile test) purely for stable baselines; closed states are
 * captured responsively.
 */
const DESKTOP_WIDTH = { widths: [1280] };
const MOBILE_WIDTH = { widths: [360] };

/** Closed states are pure CSS (no JavaScript positioning), so they render safely at any width. */
const RESPONSIVE_WIDTHS = { widths: [375, 1280] };

test.describe('PieDropdown - Visual tests', () => {
    test.describe('Closed states', () => {
        test('should render the closed variant gallery', async ({ page }) => {
            const basePage = new BasePage(page, 'dropdown--closed-variants');
            await basePage.load();

            await expect(page.getByTestId(field).first()).toBeVisible();

            await percySnapshot(page, 'PieDropdown - Closed variants', RESPONSIVE_WIDTHS);
        });

        test('should render the closed rich variant gallery (icons and secondary text)', async ({ page }) => {
            const basePage = new BasePage(page, 'dropdown--closed-rich-variants');
            await basePage.load();

            await expect(page.getByTestId(field).first()).toBeVisible();

            await percySnapshot(page, 'PieDropdown - Closed rich variants', RESPONSIVE_WIDTHS);
        });

        test('should render the size variations', async ({ page }) => {
            const basePage = new BasePage(page, 'dropdown--size-variations');
            await basePage.load();

            await expect(page.getByTestId(field).first()).toBeVisible();

            await percySnapshot(page, 'PieDropdown - Size variations', DESKTOP_WIDTH);
        });

        test('should render the status variations', async ({ page }) => {
            const basePage = new BasePage(page, 'dropdown--status-variations');
            await basePage.load();

            await expect(page.getByTestId(field).first()).toBeVisible();

            await percySnapshot(page, 'PieDropdown - Status variations', DESKTOP_WIDTH);
        });

        test('should render the disabled variations', async ({ page }) => {
            const basePage = new BasePage(page, 'dropdown--disabled-variations');
            await basePage.load();

            await expect(page.getByTestId(field).first()).toBeVisible();

            await percySnapshot(page, 'PieDropdown - Disabled variations', DESKTOP_WIDTH);
        });
    });

    test.describe('Open states', () => {
        test('should render the open single-select popover', async ({ page }) => {
            const basePage = new BasePage(page, 'dropdown--single-select');
            await basePage.load();

            await page.getByTestId(trigger).click();
            await expect(page.getByTestId(popover)).toBeVisible();
            await basePage.freezeAnimations();

            await percySnapshot(page, 'PieDropdown - Open single select', DESKTOP_WIDTH);
        });

        test('should render the open single-select popover with icons and secondary text', async ({ page }) => {
            const basePage = new BasePage(page, 'dropdown--complex-options');
            await basePage.load();

            await page.getByTestId(trigger).click();
            await expect(page.getByTestId(popover)).toBeVisible();
            await basePage.freezeAnimations();

            await percySnapshot(page, 'PieDropdown - Open single select, complex options', DESKTOP_WIDTH);
        });

        test('should render the open multi-select popover', async ({ page }) => {
            const basePage = new BasePage(page, 'dropdown--multi-select');
            await basePage.load();

            // Click near the start of the field: the count chip (with its own
            // close button) sits at the start of a multi-select field.
            await page.getByTestId(field).click({ position: { x: 10, y: 24 } });
            await expect(page.getByTestId(popover)).toBeVisible();
            await basePage.freezeAnimations();

            await percySnapshot(page, 'PieDropdown - Open multi select', DESKTOP_WIDTH);
        });

        test('should render the open multi-select popover with secondary text', async ({ page }) => {
            const basePage = new BasePage(page, 'dropdown--multi-select-secondary-text');
            await basePage.load();

            await page.getByTestId(field).click({ position: { x: 10, y: 24 } });
            await expect(page.getByTestId(popover)).toBeVisible();
            await basePage.freezeAnimations();

            await percySnapshot(page, 'PieDropdown - Open multi select, secondary text', DESKTOP_WIDTH);
        });

        test('should render the filtered searchable popover', async ({ page }) => {
            const basePage = new BasePage(page, 'dropdown--single-select-searchable');
            await basePage.load();

            const searchField = page.getByTestId(input);
            await searchField.fill('Pas');
            await expect(page.getByTestId(popover)).toBeVisible();
            await basePage.freezeAnimations();

            await percySnapshot(page, 'PieDropdown - Filtered searchable', DESKTOP_WIDTH);
        });

        test('should render the no-results searchable state', async ({ page }) => {
            const basePage = new BasePage(page, 'dropdown--single-select-searchable');
            await basePage.load();

            const searchField = page.getByTestId(input);
            await searchField.fill('zzz');
            await expect(page.getByTestId(popover)).toBeVisible();
            await basePage.freezeAnimations();

            await percySnapshot(page, 'PieDropdown - No results', DESKTOP_WIDTH);
        });

        test('should render the loading state', async ({ page }) => {
            const basePage = new BasePage(page, 'dropdown--loading-state');
            await basePage.load();

            await page.getByTestId(trigger).click();
            await expect(page.getByTestId(popover)).toBeVisible();
            await basePage.freezeAnimations();

            await percySnapshot(page, 'PieDropdown - Loading', DESKTOP_WIDTH);
        });

        // The popover hangs from the field inside the modal's scrollable
        // body, which clips anything that overflows it — the story's content
        // below the field leaves the popover room. The open dialog
        // autofocuses the field, which opens the popover by itself; the
        // click only runs if that autofocus behaviour ever changes.
        test('should render the open popover inside a modal', async ({ page }) => {
            const basePage = new BasePage(page, 'dropdown--dropdown-in-modal');
            await basePage.load();

            const popoverEl = page.getByTestId(popover);
            if (!(await popoverEl.isVisible())) {
                await page.getByTestId(trigger).click();
            }
            await expect(popoverEl).toBeVisible();
            await basePage.freezeAnimations();

            await percySnapshot(page, 'PieDropdown - Open single select, in modal', DESKTOP_WIDTH);
        });

        // Runs only in the `visual:mobile` project (Galaxy S8, 360px capture):
        // the popover renders at the same width the page is captured at.
        test('should render the open popover on a mobile canvas @mobile', async ({ page }) => {
            const basePage = new BasePage(page, 'dropdown--complex-options');
            await basePage.load();

            await page.getByTestId(trigger).click();
            await expect(page.getByTestId(popover)).toBeVisible();
            await basePage.freezeAnimations();

            await percySnapshot(page, 'PieDropdown - Open complex options, mobile', MOBILE_WIDTH);
        });
    });
});
