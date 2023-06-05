import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { PieButton } from '@/index';
import { buttonSizes, buttonVariants } from '@/defs';

const disabledStates = [true, false];
const buttonType = 'button';

buttonVariants.forEach((variant) => {
    test(`should render - ${variant}`, async ({ page, mount }) => {
        for (const size of buttonSizes) {
            for (const disabledState of disabledStates) {
                await mount(
                    PieButton,
                    {
                        props: {
                            type: buttonType,
                            size,
                            variant,
                            disabled: disabledState,
                            isFullWidth: false,
                        },
                        slots: {
                            default: `Hello, ${size} ${variant} Button!`,
                        },
                    },
                );
            }

            for (const disabledState of disabledStates) {
                await mount(
                    PieButton,
                    {
                        props: {
                            type: buttonType,
                            size,
                            variant,
                            disabled: disabledState,
                            isFullWidth: true,
                        },
                        slots: {
                            default: `Hello, ${size} ${variant} Button!`,
                        },
                    },
                );
            }
        }

        await percySnapshot(page, `PIE Button - ${variant}`);
    });
});
