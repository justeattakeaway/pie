import { test, expect } from '@playwright/test';
import type { CardProps } from '../../src/index.ts';
import { tags, paddingValues } from '../../src/defs.ts';
import { CardDefaultPage } from '../helpers/page-object/pie-card-default.page.ts';
import { CardWithImagePage } from '../helpers/page-object/pie-card-with-image.page.ts';

test.describe('PieCard - Component tests', () => {
  test('should render successfully', async ({ page }) => {
    // Arrange
    const cardDefaultPage = new CardDefaultPage(page);
    await cardDefaultPage.load();

    // Assert
    await expect(cardDefaultPage.cardComponent.componentLocator).toBeVisible();
  });

  test('should correctly render the slot content', async ({ page }) => {
    // Arrange
    const cardDefaultPage = new CardDefaultPage(page);
    await cardDefaultPage.load();

    // Act
    const renderedSlotContent = cardDefaultPage.cardComponent.componentLocator.getByTestId('slot-content');

    // Assert
    await expect(renderedSlotContent).toBeAttached();
  });

  test('should render the card as an anchor tag with the provided href, target and rel attributes if tag = a', async ({ page }) => {
    // Arrange
    const props: CardProps = {
      tag: 'a',
      rel: 'noopener noreferrer',
      target: '_blank',
    };
    const cardDefaultPage = new CardDefaultPage(page);
    await cardDefaultPage.load({ ...props });

    // Act - Have to manually set the href as Storybook doesn't support certain characters when passed via query params
    await page.evaluate(() => {
      const card = document.querySelector('pie-card');
      card?.setAttribute('href', 'foo.com');
    });

    // Assert

    await expect.soft(cardDefaultPage.cardComponent.linkLocator).toBeAttached();

    await expect(cardDefaultPage.cardComponent.componentLocator).toHaveAttribute('href', 'foo.com' as string);
    await expect(cardDefaultPage.cardComponent.componentLocator).toHaveAttribute('rel', props.rel as string);
    await expect(cardDefaultPage.cardComponent.componentLocator).toHaveAttribute('target', props.target as string);
    await expect(cardDefaultPage.cardComponent.componentLocator).not.toHaveAttribute('role', 'button');
    await expect(cardDefaultPage.cardComponent.componentLocator).not.toHaveAttribute('tabindex', '0');
  });

  test('should render the card as a div that behaves like a button if tag = "button"', async ({ page }) => {
    // Arrange
    const props: CardProps = {
      tag: 'button',
    };

    const cardDefaultPage = new CardDefaultPage(page);
    await cardDefaultPage.load({ ...props });

    // Assert
    await expect(cardDefaultPage.cardComponent.buttonLocator).toBeVisible();
    await expect(cardDefaultPage.cardComponent.buttonLocator).toHaveAttribute('role', 'button');
    await expect(cardDefaultPage.cardComponent.buttonLocator).toHaveAttribute('tabindex', '0');
    await expect(cardDefaultPage.cardComponent.linkLocator).not.toBeVisible();
  });

  [true, false].forEach((disabled) => {
    test(`should add an aria-disabled attribute that matches the value of the disabled prop (${disabled})`, async ({ page }) => {
      // Arrange
      const props: CardProps = {
        disabled,
        tag: 'button',
      };
      const cardDefaultPage = new CardDefaultPage(page);
      await cardDefaultPage.load({ ...props });

      // Assert
      await expect(cardDefaultPage.cardComponent.buttonLocator).toHaveAttribute('aria-disabled', disabled.toString());
    });
  });

  tags.forEach((tag) => {
    test(`should add an aria-label attribute that matches the value of the aria.label prop when tag is ${tag}`, async ({ page }) => {
      // Arrange
      const label = 'foo';
      const props: CardProps = {
        tag,
        aria: { label },
      };
      const cardDefaultPage = new CardDefaultPage(page);
      await cardDefaultPage.load({ ...props });

      // Act
      const locatorId = tag === 'a' ? cardDefaultPage.cardComponent.linkLocator : cardDefaultPage.cardComponent.buttonLocator;

      // Assert
      await expect(locatorId).toHaveAttribute('aria-label', label);
    });
  });

  test.describe('Prop: `isDraggable`', () => {
    test.describe('when set to true', () => {
      test('should set a class of `c-card--draggable`', async ({ page }) => {
        // Arrange

        const cardDefaultPage = new CardDefaultPage(page);
        await cardDefaultPage.load({
          isDraggable: true,
          tag: 'button',
        });

        // Assert
        await expect(cardDefaultPage.cardComponent.buttonLocator).toHaveClass(/c-card--draggable/);
      });
    });

    test.describe('when set to false', () => {
      test('should not set a class of `c-card--draggable`', async ({ page }) => {
        // Arrange
        const cardDefaultPage = new CardDefaultPage(page);
        await cardDefaultPage.load({
          isDraggable: false,
          tag: 'button',
        });

        // Assert
        await expect(cardDefaultPage.cardComponent.buttonLocator).not.toHaveClass(/c-card--draggable/);
      });
    });
  });

  test.describe('Prop: `padding`', () => {
    test.describe('when `padding` is set as a single string value', () => {
      test('should set an attribute of style with the correct padding value', async ({ page }) => {
        // Arrange
        const props: CardProps = {
          padding: 'a',
          tag: 'button',
        };
        const cardDefaultPage = new CardDefaultPage(page);
        await cardDefaultPage.load({ ...props });

        // Assert
        expect(cardDefaultPage.cardComponent.buttonLocator).toHaveAttribute('style', 'padding: var(--dt-spacing-a)')
      });
    });
  });
});

paddingValues.forEach((paddingValue) => {
  test(`should allow valid "padding" values: ${paddingValue}`, async ({ page }) => {
    // Arrange
    const props: CardProps = {
      tag: 'button',
    };

    const cardDefaultPage = new CardDefaultPage(page);
    await cardDefaultPage.load({ ...props });

    const values = paddingValue.split(',');

    // Setting this manually due to Storybook limitations - https://storybook.js.org/docs/writing-stories/args#setting-args-through-the-url
    await page.evaluate((paddingValue) => {
      const card = document.querySelector('pie-card');
      if (card) {
        // example format
        card.padding = paddingValue as CardProps['padding'];
      } else {
        throw new Error('Card not found');
      }
    }, paddingValue);

    // Assert
    if (values.length > 1) {
      await expect(cardDefaultPage.cardComponent.buttonLocator).toHaveAttribute('style', `padding: var(--dt-spacing-${values[0]}) var(--dt-spacing-${values[1]})`);
    } else {
      await expect(cardDefaultPage.cardComponent.buttonLocator).toHaveAttribute('style', `padding: var(--dt-spacing-${values[0]})`);
    }
  });
});

test('should not allow values outside "a-g"', async ({ page }) => {
  const invalidPaddingValue = { padding: 'z' };

  // Arrange
  const props: CardProps = {
    padding: invalidPaddingValue.padding as CardProps['padding'],
    tag: 'button',
  }

  const cardDefaultPage = new CardDefaultPage(page);
  await cardDefaultPage.load({ ...props });

  // Assert
  await expect(cardDefaultPage.cardComponent.buttonLocator).toHaveAttribute('style', '');
});

test('should not allow more than one single value i.e "ab"', async ({ page }) => {
  const invalidPaddingValue = { padding: 'ab' };

  // Arrange
  const props: CardProps = {
    padding: invalidPaddingValue.padding as CardProps['padding'],
    tag: 'button',
  }

  const cardDefaultPage = new CardDefaultPage(page);
  await cardDefaultPage.load({ ...props });

  // Assert
  await expect(cardDefaultPage.cardComponent.buttonLocator).toHaveAttribute('style', '');
});

test.describe('when `padding` is set as a comma separated string value', () => {
  test('should not allow more than 2 padding values', async ({ page }) => {
    // Arrange
    const paddingValue = { padding: 'a, b, c' };
    const props: CardProps = {
      padding: paddingValue.padding as CardProps['padding'],
      tag: 'button',
    }

    const cardDefaultPage = new CardDefaultPage(page);
    await cardDefaultPage.load({ ...props });

    await expect(cardDefaultPage.cardComponent.buttonLocator).toHaveAttribute('style', '');
  });
});


test.describe('Prop: disabled', () => {
  test.describe('when an image exists and the prop `disabled` is set to `true`', () => {
    test('should set the opacity to 50%', async ({ page }) => {
      // Arrange
      const props: CardProps = {
        disabled: true,
      }

      const cardWithImagePage = new CardWithImagePage(page);
      await cardWithImagePage.load({ ...props });


      // Act
      const component = cardWithImagePage.cardComponent.componentLocator.locator('[data-test-id="slot-content"]');
      const image = component.locator('img');

      // Assert the image has the correct opacity
      await expect(image).toHaveCSS('opacity', '0.5');
    });
  });

  test.describe('when an image exists and the prop `disabled` is set to `false`', () => {
    test('should not set the opacity style on the image element', async ({ page }) => {
      // Arrange
      const props: CardProps = {
        disabled: false,
      }

      const cardWithImagePage = new CardWithImagePage(page);
      await cardWithImagePage.load({ ...props });

      // Act
      const component = cardWithImagePage.cardComponent.componentLocator.locator('[data-test-id="slot-content"]');
      const image = component.locator('img');

      // Assert the image has the correct opacity
      await expect(image).not.toHaveCSS('opacity', '0.5');
    });
  });

  test.describe('when the prop `tag` is set to `button`', () => {
    test('should set `aria-disabled` to `true` when disabled', async ({ page }) => {
      // Arrange
      const props: CardProps = {
        tag: 'button',
        disabled: true,
      }

      const cardDefaultPage = new CardDefaultPage(page);
      await cardDefaultPage.load({ ...props });

      // Assert
      await expect(cardDefaultPage.cardComponent.buttonLocator).toHaveAttribute('aria-disabled', 'true');
    });

    test('should set `tabindex` to `-1` when disabled', async ({ page }) => {
      // Arrange
      const props: CardProps = {
        tag: 'button',
        disabled: true,
      }

      const cardDefaultPage = new CardDefaultPage(page);
      await cardDefaultPage.load({ ...props });

      // Assert
      await expect(cardDefaultPage.cardComponent.buttonLocator).toHaveAttribute('tabindex', '-1');
    });

    test('should not trigger the click event when the tag prop is set to `button` and is `disabled`', async ({ page }) => {
      // Arrange
      const props: CardProps = {
        tag: 'button',
        disabled: false,
      }

      const cardDefaultPage = new CardDefaultPage(page);
      await cardDefaultPage.load({ ...props });

      // Assert
      await expect(cardDefaultPage.cardComponent.buttonLocator).toBeDisabled();
    });
  });

  test.describe('when the prop `tag` is set to `a`', () => {
    test('should set `aria-disabled` to `true` when disabled', async ({ page }) => {
      // Arrange
      const props: CardProps = {
        tag: 'a',
        disabled: true,
      }

      const cardDefaultPage = new CardDefaultPage(page);
      await cardDefaultPage.load({ ...props });

      // Assert
      await expect(cardDefaultPage.cardComponent.linkLocator).toHaveAttribute('aria-disabled', 'true');
    });

    test('should not set the href attribute when disabled', async ({ page }) => {
      // Arrange
      const props: CardProps = {
        tag: 'a',
        disabled: true,
      }

      const cardDefaultPage = new CardDefaultPage(page);
      await cardDefaultPage.load({ ...props });

      await page.evaluate(() => {
        const card = document.querySelector('pie-card');
        card?.setAttribute('href', 'foo.com');
      });

      // Assert
      await expect(cardDefaultPage.cardComponent.linkLocator).not.toHaveAttribute('href');
    });
  });
});