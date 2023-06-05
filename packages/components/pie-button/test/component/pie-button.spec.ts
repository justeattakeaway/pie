import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieButton, buttonSizes, buttonVariants } from '@/index';

const disabledStates = [true, false];

buttonVariants.forEach((variant) => {
    test(`should render - ${variant}`, async ({ mount }) => {
        for (const size of buttonSizes) {
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
                size: 'large',
                variant: 'primary',
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
