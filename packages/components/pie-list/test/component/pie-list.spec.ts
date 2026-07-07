import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

test.describe('PieList - Component tests', () => {
    test('should render the list and its items with the correct ARIA roles', async ({ page }) => {
        // Arrange
        await new BasePage(page, 'list--text-only').load();

        // Act
        const list = page.getByRole('list');
        const items = page.getByRole('listitem');

        // Assert
        await expect(list).toBeVisible();
        await expect(items).toHaveCount(4);
    });

    test('should not apply selectable behaviours to items in a static list', async ({ page }) => {
        // A static list item (`selection-type` defaults to `none`) must not adopt the selectable
        // behaviours (presentation role and hidden text) that only apply for a radio/checkbox/switch
        // selection type. Uses the meta-text story so both the text and meta-text containers exist.
        await new BasePage(page, 'list--meta-text').load();

        await expect(page.getByRole('listitem').first()).toBeVisible();

        // No item should be demoted to presentation.
        await expect(page.locator('pie-list-item[role="presentation"]')).toHaveCount(0);

        // Neither the primary/secondary text nor the meta text should be hidden from
        // assistive technology in a static list.
        const hidden = await page.evaluate(() => {
            const root = document.querySelector('pie-list-item')?.shadowRoot;
            return {
                text: root?.querySelector('.c-listItem-text')?.getAttribute('aria-hidden'),
                meta: root?.querySelector('.c-listItem-metaText')?.getAttribute('aria-hidden'),
            };
        });

        expect(hidden.text).toBeNull();
        expect(hidden.meta).toBeNull();
    });

    test('should set the item role from selection-type', async ({ page }) => {
        await new BasePage(page, 'list--selection-types').load();

        // radio/checkbox are owned by a group, so the item becomes `presentation`.
        await expect(page.getByTestId('item-radio')).toHaveAttribute('role', 'presentation');
        await expect(page.getByTestId('item-checkbox')).toHaveAttribute('role', 'presentation');
        // `none` (default) and `switch` (no group) keep `listitem`.
        await expect(page.getByTestId('item-none')).toHaveAttribute('role', 'listitem');
        await expect(page.getByTestId('item-switch')).toHaveAttribute('role', 'listitem');
    });

    test.describe('primaryText', () => {
        test('should still render the item when primaryText is not provided', async ({ page }) => {
            // Arrange
            await new BasePage(page, 'list--no-primary-text').load();

            // Act
            const item = page.locator('pie-list-item');
            const primaryText = item.locator('.c-listItem-primaryText');

            // Assert
            await expect(item).toHaveCount(1);
            // The item renders as normal; the primary text span is present but empty (the component
            // no longer short-circuits to rendering nothing when primaryText is missing).
            await expect(primaryText).toHaveCount(1);
            await expect(primaryText).toHaveText('');
        });
    });

    test.describe('metaText', () => {
        test('should render metaText and not the trailing slot when both are provided', async ({ page }) => {
            // Arrange
            await new BasePage(page, 'list--meta-text-with-trailing').load();

            // Act
            const metaText = page.locator('.c-listItem-metaText');
            const trailingContent = page.locator('pie-tag[slot="trailing"]');

            // Assert
            await expect(metaText).toHaveText('Meta text');
            await expect(trailingContent).toBeHidden(); // no trailing slot is rendered, so it cannot project
        });
    });

    test.describe('slotted media (has-media)', () => {
        test('should display slotted media when has-media is set', async ({ page }) => {
            // Arrange
            await new BasePage(page, 'list--media').load();

            // Act
            const thumbnail = page.locator('pie-thumbnail').first();

            // Assert
            await expect(thumbnail).toBeVisible();
        });
    });
});
