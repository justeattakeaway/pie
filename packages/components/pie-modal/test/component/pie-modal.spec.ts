import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieModal } from '@/index';
import { headingLevels } from '@/defs';

headingLevels.forEach((headingLevel) => test(`should render the correct heading tag based on the value of headingLevel: ${headingLevel}`, async ({ mount }) => {
    const props = {
        heading: 'Modal Header',
        headingLevel,
    };

    const component = await mount(PieModal, { props });

    await expect(component.locator(`${props.headingLevel}.c-modal-heading`)).toContainText(props.heading);
}));

['span', 'section'].forEach((headingLevel) => test(`should render the fallback heading level 'h2' if invalid headingLevel: ${headingLevel} is passed`, async ({ mount }) => {
    const props = {
        heading: 'Modal Header',
        // assert type checking as we purposely provide incorrect value
        headingLevel,
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore // Added this as we want to deliberately test with invalid headingLevel (which is an invalid type based on ModalProps)
    const component = await mount(PieModal, { props });

    // h2 is the default / fallback value
    await expect(component.locator('h2.c-modal-heading')).toContainText(props.heading);
}));

test.describe('`When the Pie Modal is closed`', () => {
    test.skip('should dispatch event `pie-modal-close`', async ({ mount }) => {
        const messages: string[] = [];
        const component = await mount(
            PieModal,
            {
                props: {
                    isOpen: true,
                },
            },
        );

        await component.update({
            on: {
                click: (event: string) => messages.push(event),
            },
        });

        await component.locator('.c-modal-closeBtn').click({ });

        expect(messages).toHaveLength(1);
    });
});

