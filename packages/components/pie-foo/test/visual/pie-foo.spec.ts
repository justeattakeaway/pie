import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { PieFoo } from '../../src/index.ts';

test.describe('PieFoo - Visual tests`', () => {
    test('should display the PieFoo component successfully', async ({ page, mount }) => {
        await mount(PieFoo);

        await percySnapshot(page, 'PieFoo - Visual Test');
    });
});
