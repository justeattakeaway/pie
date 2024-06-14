
import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { PieToast, ToastProps } from '../../src/index.ts';

test.describe('PieToast - Visual tests`', () => {
    test('should display the PieToast component successfully', async ({ page, mount }) => {
        await mount(PieToast, {
            props: {} as ToastProps,
        });

        await percySnapshot(page, 'PieToast - Visual Test');
    });
});
