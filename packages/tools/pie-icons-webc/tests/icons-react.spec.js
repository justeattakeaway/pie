import { test, expect } from '@playwright/experimental-ct-react';
import { IconAlcohol } from '../icons/react/IconAlcohol.ts';

test.use({ viewport: { width: 500, height: 500 } });

test('should render', async ({ page, mount }) => {
    await mount(<IconAlcohol />);
    expect(await page.screenshot()).toMatchSnapshot('IconAlcohol.png');
});

test('should render with props', async ({ page, mount }) => {
    await mount(<IconAlcohol size="xxl" />);
    expect(await page.screenshot()).toMatchSnapshot('IconAlcoholXXL.png');
});
