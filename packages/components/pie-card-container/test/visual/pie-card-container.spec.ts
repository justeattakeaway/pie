
import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { PieCardContainer, CardContainerProps } from '@/index';

// This is just an arbitrary example of some markup a user may pass into the card
const slotContent = `<div style="font-size: calc(var(--dt-font-body-l-size) * 1px); font-family: var(--dt-font-interactive-m-family); padding: var(--dt-spacing-b);">
    <h2> Card title </h2>
    <p> Card content </p>
    <p> Lorem ipsum dolor sit amet
    consectetur adipisicing elit.
    Fugiat dolore dolorem maxime,
    quod, in minima esse fugit
    distinctio, officia et soluta
    dicta consequuntur commodi officiis
    tempora asperiores aspernatur atque quas.</p>
</div>`;

test.describe('PieCardContainer - Visual tests`', () => {
    test('should display the PieCardContainer component slot content successfully', async ({ page, mount }) => {
        await mount(PieCardContainer, {
            props: {} as CardContainerProps,
            slots: {
                default: slotContent,
            },
        });

        await percySnapshot(page, 'PieCardContainer - Visual Test');
    });
});
