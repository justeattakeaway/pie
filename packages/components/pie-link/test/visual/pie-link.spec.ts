
import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { PieLink, LinkProps } from '@/index';

test.describe.skip('PieLink - Visual tests`', () => {
    test('should display the PieLink component successfully', async ({ page, mount }) => {
        await mount(PieLink, {
            props: {} as LinkProps,
        });

        await percySnapshot(page, 'PieLink - Visual Test');
    });
});
