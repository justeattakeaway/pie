import { test, expect } from '@playwright/test';
import { getShadowElementStylePropValues } from '@justeattakeaway/pie-webc-testing/src/helpers/get-shadow-element-style-prop-values.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { type TagProps } from '../../src/defs.ts';

import { tag } from '../helpers/page-object/selectors.ts';

const componentSelector = '[data-test-id="pie-tag"]';

test.describe('PieTag - Component tests', () => {
    test('should be visible', async ({ page }) => {
        // Arrange
        const tagPage = new BasePage(page, 'tag');
        await tagPage.load();

        // Act
        const tagComponent = page.locator(tag.selectors.container.dataTestId, { hasText: 'Label' });

        // Assert
        await expect(tagComponent).toBeVisible();
    });

    test.describe('icon slot', () => {
        test('should render icon when size is large', async ({ page }) => {
            // Arrange
            const tagPage = new BasePage(page, 'tag--default-with-icon');
            const props: TagProps = {
                size: 'large',
            };

            await tagPage.load({ ...props });

            // Act
            const tagIcon = page.getByTestId(tag.selectors.icon.dataTestId);

            // Assert
            await expect(tagIcon).toBeVisible();
        });

        test('should render icon when size is small', async ({ page }) => {
            // Arrange
            const tagPage = new BasePage(page, 'tag--default-with-icon');
            const props: TagProps = {
                size: 'small',
            };

            await tagPage.load({ ...props });

            // Act
            const tagIcon = page.getByTestId(tag.selectors.icon.dataTestId);

            // Assert
            await expect(tagIcon).toBeVisible();
        });

        test('should NOT render icon when not provided', async ({ page }) => {
            // Arrange
            const tagPage = new BasePage(page, 'tag');
            await tagPage.load();

            // Act
            const tagIcon = page.getByTestId(tag.selectors.icon.dataTestId);

            // Assert
            await expect(tagIcon).toBeHidden();
        });
    });
});
