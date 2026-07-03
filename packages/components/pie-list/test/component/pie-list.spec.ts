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
        // Guards the `listType = 'list'` context path: a static list must not adopt the
        // radio/checkbox group behaviours (presentation role and hidden text) that only
        // apply when a `pie-list-item` is inside a radio or checkbox group. Uses the
        // meta-text story so both the text and meta-text containers are present.
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

    test.describe('primaryText', () => {
        test('should render nothing when primaryText is not provided', async ({ page }) => {
            // Arrange
            await new BasePage(page, 'list--no-primary-text').load();

            // Act
            const item = page.locator('pie-list-item');
            const primaryText = item.locator('.c-listItem-primaryText');

            // Assert
            await expect(item).toHaveCount(1); // the element still exists...
            await expect(primaryText).toHaveCount(0); // ...but renders no content
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
