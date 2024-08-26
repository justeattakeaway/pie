
import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { PieLottiePlayer, LottiePlayerProps } from '../../src/index.ts';

test.describe('PieLottiePlayer - Visual tests`', () => {
    test('should display the PieLottiePlayer component successfully', async ({ page, mount }) => {
        await mount(PieLottiePlayer, {
            props: {} as LottiePlayerProps,
        });

        await percySnapshot(page, 'PieLottiePlayer - Visual Test');
    });
});
