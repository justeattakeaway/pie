
import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieLink, LinkProps } from '@/index';

const componentSelector = '[data-test-id="pie-link"]';

const props: LinkProps = {
    href: '#',
    target: '_blank',
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
        await expect(link).toHaveAttribute('href', '#');
        await expect(link).toHaveAttribute('target', '_blank');
    });
});
