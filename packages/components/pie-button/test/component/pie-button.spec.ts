import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieButton } from '@/index';

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
