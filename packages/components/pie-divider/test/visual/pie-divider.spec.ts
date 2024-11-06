import { test } from '@justeattakeaway/pie-webc-testing/src/playwright/playwright-fixtures.ts';
import percySnapshot from '@percy/playwright';
import { DividerComponent } from 'test/helpers/page-object/pie-divider.page.ts';
import { percyWidths } from '@justeattakeaway/pie-webc-testing/src/percy/breakpoints.ts';
import { variants } from '../../src/defs.ts';

let pieDividerComponent: DividerComponent;

test.describe('PieDivider - Visual tests', () => {
    test.beforeEach(async ({ page }) => {
        pieDividerComponent = new DividerComponent(page);
    });

    variants.forEach((variant) => test(`should render all prop variations for variant: ${variant} `, async ({ page }) => {
        await pieDividerComponent.load({}, variant);

        await percySnapshot(page, `PIE Divider - variant: ${variant}`, percyWidths);
    }));
});
