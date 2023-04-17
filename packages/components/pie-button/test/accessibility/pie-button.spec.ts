import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieButton } from '@/index';
import { BUTTON_SIZE, BUTTON_VARIANT } from '@/defs';
import AxeBuilder from '@axe-core/playwright';

const sizes = Object.values(BUTTON_SIZE);
const variants = Object.values(BUTTON_VARIANT);
const disabledStates = [true, false];

variants.forEach(variant => {
  test(`should render - ${variant}`, async ({ mount, page }) => {

    for (const size of sizes) {
      for (const isDisabled of disabledStates) {
        const component = await mount(PieButton,
          {
            props: {
              size,
              variant,
              disabled: isDisabled
            },
            slots: {
              default: `Hello, ${size} ${variant} Button!`
            },
          });
      }
    }

    const results = await new AxeBuilder.default({ page })
    .withTags(['wcag21a', 'wcag21aa', 'wcag143', 'cat.color', 'cat.aria'])
    .disableRules(['color-contrast', 'color-contrast-enhanced'])
    .analyze();

    expect(results.violations).toEqual([]);
  });
})