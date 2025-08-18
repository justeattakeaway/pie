
import { test, expect } from '@playwright/test';
import { sizeToValueMap, largeIconSizeDefault, regularIconSizeDefault } from '@justeattakeaway/pie-icons-configs';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { icons } from '../helpers/page-object/selectors.ts';

test('regular icon should use the default width and height when not provided', async ({ page }) => {
    // Arrange
    const regularIconPage = new BasePage(page, 'icons--alcohol-filled-regular-icon');
    await regularIconPage.load();
    await page.waitForSelector(icons.selectors.alcoholFilled.dataTestId);

    // Assert
    const exepectedValue = sizeToValueMap[regularIconSizeDefault].toString();

    const svg = page.locator(`${icons.selectors.alcoholFilled.dataTestId} svg`);
    await expect(svg).toHaveAttribute('width', exepectedValue);
    await expect(svg).toHaveAttribute('height', exepectedValue);
});

test('regular icon should fall back to the default width and height if an invalid value is given', async ({ page }) => {
    // Arrange
    const regularIconPage = new BasePage(page, 'icons--alcohol-filled-regular-icon');
    await regularIconPage.load({ size: 'xm' });
    await page.waitForSelector(icons.selectors.alcoholFilled.dataTestId);

    // Assert
    const exepectedValue = sizeToValueMap[regularIconSizeDefault].toString();

    const svg = page.locator(`${icons.selectors.alcoholFilled.dataTestId} svg`);
    await expect(svg).toHaveAttribute('width', exepectedValue);
    await expect(svg).toHaveAttribute('height', exepectedValue);
});

test('regular should have the default classes applied', async ({ page }) => {
    // Arrange
    const regularIconPage = new BasePage(page, 'icons--alcohol-filled-regular-icon');
    await regularIconPage.load();
    await page.waitForSelector(icons.selectors.alcoholFilled.dataTestId);

    // Assert
    const icon = page.locator(icons.selectors.alcoholFilled.dataTestId);
    await expect(icon).toHaveClass('c-pieIcon c-pieIcon--alcoholFilled');
});

test('large icon should use the default width and height when not provided', async ({ page }) => {
    // Arrange
    const largeIconPage = new BasePage(page, 'icons--alcohol-filled-large-icon');
    await largeIconPage.load();
    await page.waitForSelector(icons.selectors.alcoholFilledLarge.dataTestId);

    // Assert
    const exepectedValue = largeIconSizeDefault.toString();

    const svg = page.locator(`${icons.selectors.alcoholFilledLarge.dataTestId} svg`);
    await expect(svg).toHaveAttribute('width', exepectedValue);
    await expect(svg).toHaveAttribute('height', exepectedValue);
});

test('large icon should fall back to the default width and height if an invalid value is given', async ({ page }) => {
    // Arrange
    const largeIconPage = new BasePage(page, 'icons--alcohol-filled-large-icon');
    await largeIconPage.load({ size: '55' });
    await page.waitForSelector(icons.selectors.alcoholFilledLarge.dataTestId);

    // Assert
    const exepectedValue = largeIconSizeDefault.toString();

    const svg = page.locator(`${icons.selectors.alcoholFilledLarge.dataTestId} svg`);
    await expect(svg).toHaveAttribute('width', exepectedValue);
    await expect(svg).toHaveAttribute('height', exepectedValue);
});

test('large should have the default classes applied', async ({ page }) => {
    // Arrange
    const largeIconPage = new BasePage(page, 'icons--alcohol-filled-large-icon');
    await largeIconPage.load();
    await page.waitForSelector(icons.selectors.alcoholFilledLarge.dataTestId);

    // Assert
    const icon = page.locator(icons.selectors.alcoholFilledLarge.dataTestId);
    await expect(icon).toHaveClass('c-pieIcon c-pieIcon--alcoholFilledLarge');
});

test('when extra classes are provided, the icon should render the expected classes', async ({ page }) => {
    // Arrange
    const regularIconPage = new BasePage(page, 'icons--alcohol-filled-icon-with-class');
    await regularIconPage.load();
    await page.waitForSelector(icons.selectors.alcoholFilled.dataTestId);

    // Assert
    const icon = page.locator(icons.selectors.alcoholFilled.dataTestId);
    await expect(icon).toHaveClass('c-pieIcon c-pieIcon--alcoholFilled custom-class');
});
