import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { percyWidths } from '@justeattakeaway/pie-webc-testing/src/percy/breakpoints.ts';
import { sizes, variants } from '../../src/defs.ts';
import { ButtonComponent } from 'test/helpers/page-object/pie-button.page.ts';


    variants.forEach((variant) => {
        test(`should render all prop variations for Variant: ${variant}`, async ({ page }) => {
            const button = new ButtonComponent(page, `button--${variant}-prop-variations`);
            await page.waitForLoadState('domcontentloaded');

            const snapshotName = `PIE Button - Variant: ${variant} - Size: ${size}`;
            await percySnapshot(page, snapshotName, percyWidths);
        });
    });
