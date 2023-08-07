import { test as baseTest, expect as baseExpect } from '@sand4rt/experimental-ct-web';
import { Page } from 'playwright-core';
import AxeBuilder from '@axe-core/playwright';

interface ExtendedTestContext {
  page: Page;
  makeAxeBuilder: () => AxeBuilder;
}

// Extend base test by providing "makeAxeBuilder"
// This new "test" can be used in multiple test files, and each of them will get
// a consistently configured AxeBuilder instance.
export const test = baseTest.extend<ExtendedTestContext>({
    makeAxeBuilder: [async ({ page }: { page: Page }, use: (builder: () => AxeBuilder) => Promise<void>) => {
        const makeAxeBuilder = () => new AxeBuilder({ page })
          .withTags(['wcag21a', 'wcag21aa', 'wcag143', 'cat.color', 'cat.aria'])
          .disableRules(['color-contrast-enhanced']);

        await use(makeAxeBuilder);
    }, {
        timeout: 60000,
    }],
});

export const expect = baseExpect;
