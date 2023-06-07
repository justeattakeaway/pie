import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieIconButton } from '@/index';
import { ICON_BUTTON_VARIANT } from '@/defs';

test('should correctly work with native click events', async ({ mount }) => {
    const messages: string[] = [];
    const expectedEventMessage = 'Native event dispatched';
    const component = await mount(
        PieIconButton,
        {
            props: {
                variant: ICON_BUTTON_VARIANT.PRIMARY,
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
