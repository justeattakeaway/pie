import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { type LinkProps, tags } from '../../src/defs.ts';

import { link } from '../helpers/page-object/selectors.ts';

const componentSelector = '[data-test-id="pie-link"]';

test.describe('PieLink - Component tests', () => {
    test('should be visible', async ({ page }) => {
        // Arrange
        const linkPage = new BasePage(page, 'link');
        const props: LinkProps & { slot: string } = {
            slot: 'Link',
        };

        await linkPage.load({ ...props });

        // Act
        const linkComponent = page.getByTestId(link.selectors.container.dataTestId);

        // Assert
        await expect(linkComponent).toBeVisible();
    });

    test('should render as anchor when tag="a"', async ({ page }) => {
        // Arrange
        const linkPage = new BasePage(page, 'link');
        const props: LinkProps & { slot: string } = {
            tag: 'a',
            href: 'https://pie.design',
            target: '_blank',
            rel: 'nofollow',
            slot: 'Anchor Link',
        };

        await linkPage.load({ ...props });

        // Act
        const link = page.locator(`a${componentSelector}`);

        // Assert
        await expect(link).toBeVisible();
        await expect(link).toHaveAttribute('href', 'https://pie.design');
        await expect(link).toHaveAttribute('target', '_blank');
        await expect(link).toHaveAttribute('rel', 'nofollow');
        await expect(link).not.toHaveAttribute('type', 'submit');
    });

    test('should render as button when tag="button"', async ({ page }) => {
        // Arrange
        const linkPage = new BasePage(page, 'link');
        const props: LinkProps & { slot: string } = {
            tag: 'button',
            slot: 'Button Link',
        };

        await linkPage.load({ ...props });

        // Act
        const buttonLink = page.locator(`button${componentSelector}`);

        // Assert
        await expect(buttonLink).toBeVisible();
        await expect(buttonLink).toHaveAttribute('type', 'submit');
        await expect(buttonLink).not.toHaveAttribute('href', '#');
        await expect(buttonLink).not.toHaveAttribute('target', '_blank');
        await expect(buttonLink).not.toHaveAttribute('rel', 'nofollow');
    });

    tags.forEach((tag) => {
        test(`should add an aria-label attribute that matches the value of the aria.label prop when tag is ${tag}`, async ({ page }) => {
            // Arrange
            const linkPage = new BasePage(page, 'link');
            const mockedLabel = 'foo';
            const props: LinkProps & { slot: string } = {
                tag,
                slot: 'Anchor Link',
                aria: {
                    label: mockedLabel,
                },
            };

            await linkPage.load({ ...props });

            // Act
            const linkComponent = page.getByTestId(link.selectors.container.dataTestId);

            // Assert
            await expect(linkComponent).toHaveAttribute('aria-label', mockedLabel);
        });
    });
});
