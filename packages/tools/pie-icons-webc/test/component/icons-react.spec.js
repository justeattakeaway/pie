import { test, expect } from '@playwright/experimental-ct-react';
import { IconAlcohol } from '../../icons/react/IconAlcohol.ts';

test.use({ viewport: { width: 500, height: 500 } });

/* maxDiffPixels: 2 - Prevents issues with rendering differences between local and CI */
test('should render', async ({ page, mount }) => {
    await mount(<IconAlcohol />);
    expect(await page.screenshot()).toMatchSnapshot('IconAlcohol.png', { maxDiffPixels: 2 });
});

test('should render with props', async ({ page, mount }) => {
    await mount(<IconAlcohol size="xxl" />);
    expect(await page.screenshot()).toMatchSnapshot('IconAlcoholXXL.png', { maxDiffPixels: 2 });
});
