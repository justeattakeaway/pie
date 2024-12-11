import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/playwright-fixtures.ts';
import { ButtonComponent } from '../helpers/page-object/pie-button.page.ts';
import { variants } from '../../src/defs.ts';

variants.forEach((variant) => {
    test(`should test a11y for Variant: ${variant}`, async ({ makeAxeBuilder, page }) => {
        const button = new ButtonComponent(page, `button--${variant}-prop-variations`);
        await button.load();

        const results = await makeAxeBuilder().analyze();

        console.log(results.violations);
        expect(results.violations).toEqual([]);
    });
});
