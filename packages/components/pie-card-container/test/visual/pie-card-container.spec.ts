
import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { PieCardContainer, CardContainerProps } from '@/index';

test.describe('PieCardContainer - Visual tests`', () => {
    test('should display the PieCardContainer component successfully', async ({ page, mount }) => {
        await mount(PieCardContainer, {
            props: {} as CardContainerProps,
        });

        await percySnapshot(page, 'PieCardContainer - Visual Test');
    });
});
