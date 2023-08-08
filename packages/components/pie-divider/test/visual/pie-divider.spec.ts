
import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { PieDivider, DividerProps } from '@/index';

test.describe('PieDivider - Visual tests`', () => {
    test('should display the PieDivider component successfully', async ({ page, mount }) => {
        await mount(PieDivider, {
            props: {} as DividerProps,
        });

        await percySnapshot(page, 'PieDivider - Visual Test');
    });
});
