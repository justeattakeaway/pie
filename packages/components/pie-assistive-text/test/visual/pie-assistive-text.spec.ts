import { test, expect } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { percyWidths } from '@justeattakeaway/pie-webc-testing/src/percy/breakpoints.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { assistiveText } from 'test/helpers/page-object/selectors';

const directions = ['ltr', 'rtl'];

directions.forEach((dir) => {
    test(`should render all prop variations with ${dir} direction`, async ({ page }) => {
        const assistiveTextVariantsPage = new BasePage(page, 'assistive-text--variants');
        await assistiveTextVariantsPage.load({}, { writingDirection: dir });

        await expect.soft(page.getByTestId(assistiveText.selectors.container.dataTestId).first()).toBeVisible();
        await percySnapshot(page, `PIE Assistive Text - Variants - ${dir}`, percyWidths);
    });
});
