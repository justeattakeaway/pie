import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { PieToastProvider } from '../../src/index.ts';

test.describe('PieToastProvider - Visual tests`', () => {
    test('should display the PieToastProvider component successfully', async ({ page, mount }) => {
        await mount(PieToastProvider);

        await percySnapshot(page, 'PieToastProvider - Visual Test');
    });
});
