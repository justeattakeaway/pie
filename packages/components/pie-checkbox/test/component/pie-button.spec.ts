import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieButton } from '@/index';
import { ButtonProps } from '@/index';

const props: ButtonProps = {
    size: 'large',
    variant: 'primary',
}

test('should correctly work with native click events', async ({ mount }) => {
    const messages: string[] = [];
    const expectedEventMessage = 'Native event dispatched';
    const component = await mount(
        PieButton,
        {
            props,
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
