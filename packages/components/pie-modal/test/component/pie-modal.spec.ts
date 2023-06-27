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

    const component = await mount(PieModal, { props });

    // h2 is the default / fallback value
    await expect(component.locator('h2.c-modal-heading')).toContainText(props.heading);
}));

test.describe('`Pie Modal is closed`', () => {
    test.describe('when via the close button click', () => {
        test.skip('should dispatch event `pie-modal-close`', async ({ mount, page }) => {
            const messages: string[] = [];
            await mount(
                PieModal,
                {
                    props: {
                        isOpen: true
                    },
                    on: {
                        click: (event: string) => messages.push(event),
                    },
                },
            );

            await page.locator('.c-modal-closeBtn').click();


            expect(messages).toHaveLength(1);
        });
    });

    test.describe('when via the backdrop click', () => {
        test.skip('should dispatch event `pie-modal-close`', async ({ mount, page }) => {
            const messages: string[] = [];
            await mount(
                PieModal,
                {
                    props: {
                        isOpen: true,
                    },
                    on: {
                        click: (event: string) => messages.push(event),
                    },
                },
            );

            await page.locator('#dialog').click();


            expect(messages).toHaveLength(1);
        });
    });
});

