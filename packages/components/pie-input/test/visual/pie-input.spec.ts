
import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { PieInput, InputProps } from '@/index';

test.describe('PieInput - Visual tests`', () => {
    test('should display the PieInput component successfully', async ({ page, mount }) => {
        await mount(PieInput, {
            props: {} as InputProps,
        });

        await percySnapshot(page, 'PieInput - Visual Test');
    });
});
