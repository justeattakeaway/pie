
import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { PieSpinner, SpinnerProps } from '@/index';

test.describe('PieSpinner - Visual tests`', () => {
    test('should display the PieSpinner component successfully', async ({ page, mount }) => {
        await mount(PieSpinner, {
            props: {} as SpinnerProps,
        });

        await percySnapshot(page, 'PieSpinner - Visual Test');
    });
});
