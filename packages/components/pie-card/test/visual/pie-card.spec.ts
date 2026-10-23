import { test, expect } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { percyWidths } from '@justeattakeaway/pie-webc-testing/src/percy/breakpoints.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { CardWithImagePage } from 'test/helpers/page-object/pie-card-with-image.page.ts';
import { variants, type CardProps } from '../../src/defs.ts';

test.describe('PieCard - Visual tests`', () => {
    variants.forEach((variant) => test(`should render all prop variations for Variant: ${variant}`, async ({ page }) => {
        const variantPage = new BasePage(page, `card--${variant}-variants`);
        await variantPage.load();

        await percySnapshot(page, `PIE Card - Variant: ${variant}`, percyWidths);
    }));
});

test.describe('PieCard - `padding` prop', async () => {
    const paddingTokens = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    paddingTokens.forEach((paddingToken) => test(`should render the padding variants for padding token value: ${paddingToken}`, async ({ page }) => {
        const paddingVariantPage = new BasePage(page, `card--padding-${paddingToken}-variants`);

        await paddingVariantPage.load();
        await percySnapshot(page, `PIE Card - Padding values: ${paddingToken}`, percyWidths);
    }));
});

test.describe('PieCard - Disabled Prop Visual Tests', () => {
    test('should set image opacity to 50% when disabled is true', async ({ page }) => {
        const props: CardProps = {
            disabled: true,
        };

        const cardWithImagePage = new CardWithImagePage(page);
        await cardWithImagePage.load({ ...props });

        await expect.soft(cardWithImagePage.cardComponent.componentLocator.locator('img')).toHaveCSS('opacity', '0.5');
        await percySnapshot(page, 'PIE Card - Disabled State & image set to opacity of 50%');
    });

    test('should not set image opacity style when disabled is false', async ({ page }) => {
        const props: CardProps = {
            disabled: false,
        };

        const cardWithImagePage = new CardWithImagePage(page);
        await cardWithImagePage.load({ ...props });

        await expect.soft(cardWithImagePage.cardComponent.componentLocator.locator('img')).not.toHaveCSS('opacity', '0.5');

        await percySnapshot(page, 'PIE Card - Enabled State & image opacity not set');
    });
});

test.describe('PieCard - Slotted interactive controls visual tests', () => {
    test('should render a card containing a slotted interactive control raised above the overlay', async ({ page }) => {
        const cardPage = new BasePage(page, 'card--with-slotted-controls');
        await cardPage.load();

        await percySnapshot(page, 'PIE Card - With slotted interactive control');
    });
});

test.describe('PieCard - CSS Variables visual tests', () => {
    test('should render outline variants with the border colour overridden', async ({ page }) => {
        const borderColorOverridePage = new BasePage(page, 'card--border-color-override');
        await borderColorOverridePage.load();

        await percySnapshot(page, 'PIE Card - Border colour override');
    });

    test('should render variants with the box shadow disabled', async ({ page }) => {
        const boxShadowDisabledPage = new BasePage(page, 'card--box-shadow-disabled');
        await boxShadowDisabledPage.load();

        await percySnapshot(page, 'PIE Card - Box shadow disabled');
    });
});
