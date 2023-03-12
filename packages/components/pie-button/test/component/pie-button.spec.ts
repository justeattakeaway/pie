import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieButton } from '../../src/index';
import { BUTTON_SIZE, BUTTON_TYPE, BUTTON_VARIANT } from '../../src/defs';

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
              }
            });
  
          await expect(component).toContainText("I'm a PIE button");
        });
      })
    })
  });
});