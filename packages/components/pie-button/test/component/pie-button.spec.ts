import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieButton } from '@/index';
import { BUTTON_SIZE, BUTTON_TYPE, BUTTON_VARIANT } from '@/defs';

const types = Object.values(BUTTON_TYPE);
const sizes = Object.values(BUTTON_SIZE);
const variants = Object.values(BUTTON_VARIANT);
const disabledStates = [true, false];

disabledStates.forEach(disabledState => {
  types.forEach(type => {
    sizes.forEach(size => {
      variants.forEach(variant => {
        test(`should render - ${type} - ${size} - ${variant} - ${disabledState}`, async ({ mount }) => {
            const component = await mount(PieButton,
            {
              props: {
                type,
                size,
                variant,
                disabled: disabledState
              },
              slots: {
                default: 'Hello, Playwright!'
              }
            });

          await expect(component).toContainText("Hello, Playwright!");
        });
      })
    })
  });
});

test('should emit an event when clicked', async ({ mount }) => {
    const messages: string[] = [];
    const component = await mount(PieButton,
        {
          props: {
            type: BUTTON_TYPE.BUTTON,
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