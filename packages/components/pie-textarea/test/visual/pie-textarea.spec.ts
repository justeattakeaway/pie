import { test, expect } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

import { resizeModes, type TextareaProps } from '../../src/defs.ts';
import { textArea } from '../helpers/page-objects/selectors.ts';

const readingDirections = ['ltr', 'rtl'];

const percyWidths = {
    widths: [1280],
};

readingDirections.forEach((direction) => {
    test(`should render prop variations in writing direction: ${direction}`, async ({ page }) => {
        // Arrange
        const textareaVariationsPage = new BasePage(page, 'textarea--variations');
        await textareaVariationsPage.load({}, { writingDirection: direction });

        // Assert
        await percySnapshot(page, `PIE Textarea - Variations - ${direction}`, percyWidths);
    });
});

test('should render text related prop variations', async ({ page }) => {
    // Arrange
    const textareaVariationsPage = new BasePage(page, 'textarea--extended-text-variations');
    await textareaVariationsPage.load();

    // Assert
    await percySnapshot(page, 'PIE Textarea - Text Prop Variations', percyWidths);
});

readingDirections.forEach((direction) => {
    test(`should render assistive text and status prop variations in writing direction: ${direction}`, async ({ page }) => {
        // Arrange
        const textareaVariationsPage = new BasePage(page, 'textarea--status-variations');
        await textareaVariationsPage.load({}, { writingDirection: direction });

        // Assert
        await percySnapshot(page, `PIE Textarea - Assistive Text & Statuses - ${direction}`, percyWidths);
    });
});

resizeModes.forEach((size) => {
    test(`should render tall textarea with ${size}`, async ({ page }) => {
        const textareaPage = new BasePage(page, 'textarea');
        const props: Partial<TextareaProps> = {
            resize: size,
        };

        await textareaPage.load({ ...props });

        // Assumes you added the new `textArea` property I suggested above
        const element = page.getByTestId(textArea.selectors.textArea.dataTestId);
        await element.evaluate((el) => {
            el.setAttribute('style', 'height: 600px;'); // Setting the height too high, maxHeight should override this.
        });

        const textarea = page.getByTestId(textArea.selectors.textArea.dataTestId);

        await expect.soft(textarea).toBeVisible();

        await percySnapshot(page, `PIE Textarea - resize: ${size} - with large height`, percyWidths);
    });
});
