import { test } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { percyWidths } from '@justeattakeaway/pie-webc-testing/src/percy/breakpoints.ts';
import { ButtonComponent } from 'test/helpers/page-object/pie-button.page';

test('should render all size and variant variations for anchor tag', async ({ page }) => {
  // Arrange
  const button = new ButtonComponent(page, 'button--anchor-prop-variations');
  await button.load();

  // Assert
  await percySnapshot(page, 'PIE Button Anchor - sizes/variants', percyWidths);
});
