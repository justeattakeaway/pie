import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieIconButton } from '@/index';

test('should correctly work with native click events', async ({ mount }) => {
    const messages: string[] = [];
    const expectedEventMessage = 'Native event dispatched';
    const component = await mount(PieIconButton, {
        props: {
            variant: 'primary',
        },
        on: {
            click: () => {
                messages.push(expectedEventMessage);
            },
        },
    });

    await component.click();

    expect(messages).toEqual([expectedEventMessage]);
});
