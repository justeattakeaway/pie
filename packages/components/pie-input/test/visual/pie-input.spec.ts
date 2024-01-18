
import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { percyWidths } from '@justeattakeaway/pie-webc-testing/src/percy/breakpoints.ts';
import { PieInput, InputProps } from '../../src/index.ts';

test.describe('PieInput - Visual tests`', () => {
    test('should display the PieInput component successfully', async ({ page, mount }) => {
        await mount(PieInput, {
            props: {} as InputProps,
        });

        await percySnapshot(page, 'PieInput - Visual Test', percyWidths);
    });
});
