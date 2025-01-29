import { test, expect } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { toast } from 'test/helpers/page-object/selectors.ts';
import { variants } from '../../src/defs.ts';

const percyWidths = {
    widths: [480],
};

variants.forEach((variant) => {
    test(`should render all prop variations for Variant: ${variant}`, async ({ page }) => {
        const toastVariationsPage = new BasePage(page, `toast--${variant}-variations`);

        await toastVariationsPage.load();
        await expect.soft(page.getByTestId(toast.selectors.container.dataTestId).first()).toBeVisible();

        await percySnapshot(page, `PIE Toast - Variant: ${variant}`, percyWidths);
    });
});

test.describe('Props', () => {
    test.describe('leadingAction', () => {
        test('should display leadingAction in footer if isMultiline is true', async ({ page }) => {
            const toastPage = new BasePage(page, 'toast');
            const props = {
                message: 'Item was added',
                isMultiline: true,
                leadingAction: {
                    text: 'Confirm',
                    ariaLabel: 'Button to confirm the action',
                },
            };

            await toastPage.load({ ...props });

            await percySnapshot(page, 'PIE Toast - isMultiline - Displays leadingAction in footer if isMultiline is true', percyWidths);
        });

        test('should display leadingAction inline if isMultiline is false', async ({ page }) => {
            const toastPage = new BasePage(page, 'toast');
            const props = {
                message: 'Item was added',
                isMultiline: false,
                leadingAction: {
                    text: 'Confirm',
                    ariaLabel: 'Button to confirm the action',
                },
            };

            await toastPage.load({ ...props });

            await percySnapshot(page, 'PIE Toast - isMultiline - Displays leadingAction inline if isMultiline is false', percyWidths);
        });
    });
});

