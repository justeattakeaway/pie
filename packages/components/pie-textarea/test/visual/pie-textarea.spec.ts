
import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { PieTextarea, TextareaProps } from '../../src/index.ts';

test.describe('PieTextarea - Visual tests`', () => {
    test('should display the PieTextarea component successfully', async ({ page, mount }) => {
        await mount(PieTextarea, {
            props: {} as TextareaProps,
        });

        await percySnapshot(page, 'PieTextarea - Visual Test');
    });
});
