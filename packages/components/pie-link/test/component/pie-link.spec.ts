import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { type LinkProps, tags } from '../../src/defs.ts';

import { link } from '../helpers/page-object/selectors.ts';

test.describe('PieLink - Component tests', () => {
    test('should be visible', async ({ page }) => {
        // Arrange
        const linkPage = new BasePage(page, 'link');
        await linkPage.load();

        // Act
        const linkComponent = page.locator(link.selectors.container.dataTestId);

        // Assert
        await expect(linkComponent).toBeVisible();
    });

    test('should render as anchor when tag="a"', async ({ page }) => {
        // Arrange
        const linkPage = new BasePage(page, 'link');
        const props: LinkProps = {
            tag: 'a',
            href: 'https://pie.design',
            target: '_blank',
            rel: 'nofollow',
        };

        await linkPage.load({ ...props });

        // Act
        const linkComponent = page.getByTestId(link.selectors.anchor.dataTestId);

        // Assert
        await expect(linkComponent).toBeVisible();
        await expect(linkComponent).toHaveAttribute('href', 'https://pie.design');
        await expect(linkComponent).toHaveAttribute('target', '_blank');
        await expect(linkComponent).toHaveAttribute('rel', 'nofollow');
        await expect(linkComponent).not.toHaveAttribute('type', 'submit');
    });

    test('should correctly download files when download is an empty string', async ({ page }) => {
        // Arrange
        const linkPage = new BasePage(page, 'link--download');

        await linkPage.load();

        // Act
        const linkComponent = page.getByTestId(link.selectors.anchor.dataTestId);
        const downloadPromise = page.waitForEvent('download');
        await linkComponent.click();
        const download = await downloadPromise;

        // Assert
        expect(download.suggestedFilename()).toBe('logo--pie--dark.svg');
        expect(download.url()).toContain('/static/images/logo--pie--dark.svg');
    });

    test('should correctly download files with custom filename when download is a non-empty string', async ({ page }) => {
        // Arrange
        const linkPage = new BasePage(page, 'link--download-with-filename');

        await linkPage.load();

        // Act
        const linkComponent = page.getByTestId(link.selectors.anchor.dataTestId);
        const downloadPromise = page.waitForEvent('download');
        await linkComponent.click();
        const download = await downloadPromise;

        // Assert
        expect(download.suggestedFilename()).toBe('pie-logo.svg');
        expect(download.url()).toContain('/static/images/logo--pie--dark.svg');
    });

    test('should render as button when tag="button"', async ({ page }) => {
        // Arrange
        const linkPage = new BasePage(page, 'link');
        const props: LinkProps = {
            tag: 'button',
        };

        await linkPage.load({ ...props });

        // Act
        const linkComponent = page.getByTestId(link.selectors.button.dataTestId);

        // Assert
        await expect(linkComponent).toBeVisible();
        await expect(linkComponent).toHaveAttribute('type', 'submit');
        await expect(linkComponent).not.toHaveAttribute('href', '#');
        await expect(linkComponent).not.toHaveAttribute('target', '_blank');
        await expect(linkComponent).not.toHaveAttribute('rel', 'nofollow');
    });

    tags.forEach((tag) => {
        test(`should add an aria-label attribute that matches the value of the aria.label prop when tag is ${tag}`, async ({ page }) => {
            // Arrange
            const linkPage = new BasePage(page, 'link');
            const mockedLabel = 'foo';
            const props: LinkProps = {
                tag,
                aria: {
                    label: mockedLabel,
                },
            };

            await linkPage.load({ ...props });

            // Act
            const locatorId = tag === 'a' ? link.selectors.anchor.dataTestId : link.selectors.button.dataTestId;
            const linkComponent = page.getByTestId(locatorId);

            // Assert
            await expect(linkComponent).toHaveAttribute('aria-label', mockedLabel);
        });
    });
});
