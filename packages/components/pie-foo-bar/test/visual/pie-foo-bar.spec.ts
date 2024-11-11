import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { PieFooBar } from '../../src/index.ts';

test.describe('PieFooBar - Visual tests`', () => {
    test('should display the PieFooBar component successfully', async ({ page, mount }) => {
        await mount(PieFooBar);

        await percySnapshot(page, 'PieFooBar - Visual Test');
    });
});
