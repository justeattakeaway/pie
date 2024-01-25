
import { test, expect } from '@sand4rt/experimental-ct-web';
import { sizeToValueMap, largeIconSizeDefault, regularIconSizeDefault } from '@justeattakeaway/pie-icons-configs';
import { IconAlcoholFilled } from '../icons/IconAlcoholFilled.ts';
import { IconAlcoholFilledLarge } from '../icons/IconAlcoholFilledLarge.ts';

const iconAlcoholFilledSelector = 'icon-alcohol-filled';
const iconAlcoholFilledLargeSelector = 'icon-alcohol-filled-large';

test('regular icon should use the default width and height when not provided', async ({ mount, page }) => {
    // Arrange
    await mount(IconAlcoholFilled);
    await page.waitForSelector(iconAlcoholFilledSelector);

    // Assert
    const exepectedValue = sizeToValueMap[regularIconSizeDefault].toString();

    const svg = await page.locator(`${iconAlcoholFilledSelector} svg`);
    await expect(svg).toHaveAttribute('width', exepectedValue);
    await expect(svg).toHaveAttribute('height', exepectedValue);
});

test('regular icon should fall back to the default width and height if an invalid value is given', async ({ mount, page }) => {
    // Arrange
    await mount(IconAlcoholFilled, {
        props: {
            size: 'xm',
        },
    });

    await page.waitForSelector(iconAlcoholFilledSelector);

    // Assert
    const exepectedValue = sizeToValueMap[regularIconSizeDefault].toString();

    const svg = await page.locator(`${iconAlcoholFilledSelector} svg`);
    await expect(svg).toHaveAttribute('width', exepectedValue);
    await expect(svg).toHaveAttribute('height', exepectedValue);
});

test('regular should have the default classes applied', async ({ mount, page }) => {
    // Arrange
    await mount(IconAlcoholFilled);
    await page.waitForSelector(iconAlcoholFilledSelector);

    const icon = await page.locator(iconAlcoholFilledSelector);

    await expect(icon).toHaveClass('c-pieIcon c-pieIcon--alcoholFilled');
});

test('large icon should use the default width and height when not provided', async ({ mount, page }) => {
    // Arrange
    await mount(IconAlcoholFilledLarge);
    await page.waitForSelector(iconAlcoholFilledLargeSelector);

    // Assert
    const exepectedValue = largeIconSizeDefault.toString();

    const svg = await page.locator(`${iconAlcoholFilledLargeSelector} svg`);
    await expect(svg).toHaveAttribute('width', exepectedValue);
    await expect(svg).toHaveAttribute('height', exepectedValue);
});

test('large icon should fall back to the default width and height if an invalid value is given', async ({ mount, page }) => {
    // Arrange
    await mount(IconAlcoholFilledLarge, {
        props: {
            size: '55',
        },
    });

    await page.waitForSelector(iconAlcoholFilledLargeSelector);

    // Assert
    const exepectedValue = largeIconSizeDefault.toString();

    const svg = await page.locator(`${iconAlcoholFilledLargeSelector} svg`);
    await expect(svg).toHaveAttribute('width', exepectedValue);
    await expect(svg).toHaveAttribute('height', exepectedValue);
});

test('large should have the default classes applied', async ({ mount, page }) => {
    // Arrange
    await mount(IconAlcoholFilledLarge);
    await page.waitForSelector(iconAlcoholFilledLargeSelector);

    const icon = await page.locator(iconAlcoholFilledLargeSelector);

    await expect(icon).toHaveClass('c-pieIcon c-pieIcon--alcoholFilledLarge');
});
