import { test } from '@playwright/test';

const path = 'components/card/';

test('Page Screenshot - main', async ({ page }) => {
    await page.goto(`http://localhost:6006/${path}`);
    await page.screenshot({ path: 'main.png' });
});

test('Page Screenshot - feature', async ({ page }) => {
    await page.goto(`http://localhost:6007/${path}`);
    await page.screenshot({ path: 'feature.png' });
});
