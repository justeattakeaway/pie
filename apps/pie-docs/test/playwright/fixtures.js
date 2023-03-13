const base = require('@playwright/test');
const AxeBuilder = require('@axe-core/playwright').default;
const percySnapshot = require('@percy/playwright');

// Extend base test by providing "makeAxeBuilder"
//
// This new "test" can be used in multiple test files, and each of them will get
// a consistently configured AxeBuilder instance.
exports.test = base.test.extend({
    screenshotName: ['', { option: true }],
    widths: [[414, 768, 1280], {option: true}],

    makeAxeBuilder: [async ({ page }, use) => {
        const makeAxeBuilder = () => new AxeBuilder({ page })
          .withTags(['wcag21a', 'wcag21aa', 'wcag143', 'cat.color', 'cat.aria'])
          .disableRules(['color-contrast', 'color-contrast-enhanced']);

        await use(makeAxeBuilder);
    }, { timeout: 60000 }],
    percyScreenshot: [async ({ page, screenshotName, widths }, use) => {
        const percyScreenshot = () => percySnapshot(page, screenshotName, { widths });

        await use(percyScreenshot);
    }, { timeout: 60000 }],
});

exports.expect = base.expect;
