import { test, expect } from '@sand4rt/experimental-ct-web';
import { IconClose } from '@justeattakeaway/pie-icons-webc';
import { PieIconButton } from '../../src/index.ts';

test.beforeEach(async ({ mount }, testInfo) => {
    testInfo.setTimeout(testInfo.timeout + 40000);

    // This ensures the icon-button and icon components are registered in the DOM for each test.
    // It appears to add them to a Playwright cache which we understand is required for the tests to work correctly.
    const iconButtonComponent = await mount(PieIconButton);
    await iconButtonComponent.unmount();
    const iconComponent = await mount(IconClose);
    await iconComponent.unmount();
});

test('should correctly work with native click events', async ({ mount }) => {
    const messages: string[] = [];
    const expectedEventMessage = 'Native event dispatched';
    const component = await mount(
        PieIconButton,
        {
            props: {
                variant: 'primary',
            },
            on: {
                click: () => {
                    messages.push(expectedEventMessage);
                },
            },
            slots: {
                default: '<icon-close></icon-close>',
            },
        },
    );

    await component.click();

    expect(messages).toEqual([expectedEventMessage]);
});

test('should apply all aria attributes to the underlying button element', async ({ mount }) => {
    const component = await mount(
        PieIconButton,
        {
            props: {
                aria: {
                    label: 'foo',
                    labelledby: 'bar',
                    describedby: 'baz',
                    expanded: true,
                    controls: 'test-controls',
                },
            },
            slots: {
                default: '<icon-close></icon-close>',
            },
        },
    );

    const button = component.getByTestId('pie-icon-button');

    await expect(button).toHaveAttribute('aria-label', 'foo');
    await expect(button).toHaveAttribute('aria-labelledby', 'bar');
    await expect(button).toHaveAttribute('aria-describedby', 'baz');
    await expect(button).toHaveAttribute('aria-expanded', 'true');
    await expect(button).toHaveAttribute('aria-controls', 'test-controls');
});
