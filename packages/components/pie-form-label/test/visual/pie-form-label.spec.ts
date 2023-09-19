
import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { PieFormLabel, FormLabelProps } from '@/index';

test.describe('PieFormLabel - Visual tests`', () => {
    test('should display the PieFormLabel component successfully', async ({ page, mount }) => {
        await mount(PieFormLabel, {
            props: {} as FormLabelProps,
        });

        await percySnapshot(page, 'PieFormLabel - Visual Test');
    });
});
