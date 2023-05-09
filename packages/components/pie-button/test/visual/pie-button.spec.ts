import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { PieButton } from '@/index';
import { BUTTON_SIZE, BUTTON_TYPE, BUTTON_VARIANT } from '@/defs';

const sizes = Object.values(BUTTON_SIZE);
const variants = Object.values(BUTTON_VARIANT);
const booleanStates = [true, false];

variants.forEach((variant) => {
    test(`should render - ${variant}`, async ({ page, mount }) => {
        for (const size of sizes) {
            for (const booleanState of booleanStates) {
                await mount(
                    PieButton,
                    {
                        props: {
                            type: BUTTON_TYPE.BUTTON,
                            size,
                            variant,
                            disabled: booleanState,
                            isFullWidth: booleanState,
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
