
import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieLink, LinkProps } from '../../src/index.ts';
import { tags } from '../../src/defs.ts';

const componentSelector = '[data-test-id="pie-link"]';

const props: Partial<LinkProps> = {
    // common props
    variant: 'default',
    size: 'medium',
    isBold: false,
    isStandalone: false,
    // valid anchor props
    href: '#',
    target: '_blank',
    rel: 'nofollow',
    // valid button props
    type: 'submit',
};

test.describe('PieLink - Component tests', () => {
    test('should be visible', async ({ mount, page }) => {
        // Arrange
        await mount(PieLink, {
            props,
            slots: { default: 'Link!' },
        });

        // Act
        const link = page.locator(componentSelector);

        // Assert
        await expect(link).toBeVisible();
    });

    test('should render as anchor when tag="a"', async ({ mount, page }) => {
        // Arrange
        await mount(PieLink, {
            props: {
                ...props,
                tag: 'a',
            },
            slots: { default: 'Anchor Link!' },
        });

        // Act
        const link = page.locator(`a${componentSelector}`);

        // Assert
        await expect(link).toBeVisible();
        await expect(link).toHaveAttribute('href', '#');
        await expect(link).toHaveAttribute('target', '_blank');
        await expect(link).toHaveAttribute('rel', 'nofollow');
        await expect(link).not.toHaveAttribute('type', 'submit');
    });

    test('should render as button when tag="button"', async ({ mount, page }) => {
        // Arrange
        await mount(PieLink, {
            props: {
                ...props,
                tag: 'button',
            },
            slots: { default: 'Button Link!' },
        });

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
        test(`should add an aria-label attribute that matches the value of the aria.label prop when tag is ${tag}`, async ({ mount, page }) => {
            // Arrange
            const label = 'foo';

            await mount(PieLink, {
                props: {
                    ...props,
                    tag,
                    aria: { label },
                },
                slots: { default: 'Anchor Link!' },

            });

            // Act
            const component = page.locator(componentSelector);

            // Assert
            await expect(component).toHaveAttribute('aria-label', label);
        });
    });
});
