import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieButton } from '@/index';
import { BUTTON_SIZE, BUTTON_VARIANT } from '@/defs';

const sizes = Object.values(BUTTON_SIZE);
const variants = Object.values(BUTTON_VARIANT);
const disabledStates = [true, false];

variants.forEach((variant) => {
    test(`should render - ${variant}`, async ({ mount }) => {
        for (const size of sizes) {
            for (const isDisabled of disabledStates) {
                const component = await mount(
                    PieButton,
                    {
                        props: {
                            size,
                            variant,
                            disabled: isDisabled,
                        },
                        slots: {
                            default: `Hello, ${size} ${variant} Button!`,
                        },
                    },
                );

                await expect(component).toContainText(`Hello, ${size} ${variant} Button!`);
            }
        }
    });
});

test('should correctly work with native click events', async ({ mount }) => {
    const messages: string[] = [];
    const expectedEventMessage = 'Native event dispatched';
    const component = await mount(
        PieButton,
        {
            props: {
                size: BUTTON_SIZE.LARGE,
                variant: BUTTON_VARIANT.PRIMARY,
            },
            slots: {
                default: 'Click me!',
            },
            on: {
                click: () => {
                    messages.push(expectedEventMessage);
                },
            },
        },
    );

    await component.click();

    expect(messages).toEqual([expectedEventMessage]);
});
