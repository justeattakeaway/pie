
import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { PieRadio, RadioProps } from '../../src/index.ts';

test.describe('PieRadio - Visual tests`', () => {
    test('should display the PieRadio component successfully', async ({ page, mount }) => {
        await mount(PieRadio, {
            props: {} as RadioProps,
        });

        await percySnapshot(page, 'PieRadio - Visual Test');
    });
});
