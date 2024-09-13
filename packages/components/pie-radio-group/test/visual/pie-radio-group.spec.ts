import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { PieRadioGroup } from '../../src/index.ts';

test.describe('PieRadioGroup - Visual tests`', () => {
    test('should display the PieRadioGroup component successfully', async ({ page, mount }) => {
        await mount(PieRadioGroup);

        await percySnapshot(page, 'PieRadioGroup - Visual Test');
    });
});
