import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieButton } from '@/index';
import { BUTTON_SIZE, BUTTON_VARIANT } from '@/defs';

const sizes = Object.values(BUTTON_SIZE);
const variants = Object.values(BUTTON_VARIANT);
const disabledStates = [true, false];

variants.forEach(variant => {
  test(`should render - ${variant}`, async ({ mount }) => {

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

        await expect(component).toContainText(`Hello, ${size} ${variant} Button!`);
      }
    }
  });
})

test('should emit an event when clicked', async ({ mount }) => {
  const messages: string[] = [];
  const component = await mount(PieButton,
    {
      props: {
        size: BUTTON_SIZE.LARGE,
        variant: BUTTON_VARIANT.PRIMARY
      },
      slots: {
        default: 'Click me!'
      },
      on: {
        CustomEvent: (data: string) => messages.push(data),
      },
    });

  await component.click();

  expect(messages).toEqual(['WC event dispatched'])
});