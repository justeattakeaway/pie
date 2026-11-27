import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/playwright-fixtures.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

// Button variants that need an accessible name via the `aria.label` prop.
const interactiveAvatarStories = [
    'avatar--with-button-as-image',
    'avatar--with-button-as-icon',
];

test.describe('PieAvatar - Accessibility tests', () => {
    test('a11y - should test the PieAvatar component WCAG compliance', async ({ page, makeAxeBuilder }) => {
        // Arrange
        const basePage = new BasePage(page, 'avatar--default');

        await basePage.load();

        // Act
        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });

    interactiveAvatarStories.forEach((story) => {
        test(`a11y - should test WCAG compliance for ${story}`, async ({ page, makeAxeBuilder }) => {
            // Arrange
            const basePage = new BasePage(page, story);

            await basePage.load({ aria: { label: 'Accessible avatar' } });

            // Act
            const results = await makeAxeBuilder().analyze();

            expect(results.violations).toEqual([]);
        });
    });
});
