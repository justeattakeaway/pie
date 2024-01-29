
import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { PieChip, ChipProps } from '../../src/index.ts';

test.describe('PieChip - Visual tests`', () => {
    test('should display the PieChip component successfully', async ({ page, mount }) => {
        await mount(PieChip, {
            props: {} as ChipProps,
        });

        await percySnapshot(page, 'PieChip - Visual Test');
    });
});
