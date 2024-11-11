import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { PieBarFoo } from '../../src/index.ts';

test.describe('PieBarFoo - Visual tests`', () => {
    test('should display the PieBarFoo component successfully', async ({ page, mount }) => {
        await mount(PieBarFoo);

        await percySnapshot(page, 'PieBarFoo - Visual Test');
    });
});
