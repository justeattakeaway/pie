
import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { PieTag, TagProps } from '@/index';

test.describe('PieTag - Visual tests`', () => {
    test('should display the PieTag component successfully', async ({ page, mount }) => {
        await mount(PieTag, {
            props: {} as TagProps,
        });

        await percySnapshot(page, 'PieTag - Visual Test');
    });
});
