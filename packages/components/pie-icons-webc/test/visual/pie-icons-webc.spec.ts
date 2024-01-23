
import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { IconClose, IconsWebcProps } from '../../src/index.ts';

test.describe('PieIconsWebc - Visual tests`', () => {
    test('should display the PieIconsWebc component successfully', async ({ page, mount }) => {
        await mount(IconClose, {
            props: {} as IconsWebcProps,
        });

        await percySnapshot(page, 'PieIconsWebc - Visual Test');
    });
});
