import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieButton } from '@/index';
import { BUTTON_SIZE, BUTTON_VARIANT } from '@/defs';

test('should correctly work with native click events - foo', async ({ mount }) => {
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
