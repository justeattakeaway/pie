import { readFile } from 'fs/promises';
import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { PieLottiePlayer, type LottiePlayerProps } from '../../src/index.ts';

const animationData = JSON.parse(await readFile(new URL('../courier.json', import.meta.url), { encoding: 'utf-8' }));

test.describe('PieLottiePlayer - Visual tests`', () => {
    test('should display the PieLottiePlayer component successfully', async ({ page, mount }) => {
        await mount(PieLottiePlayer, {
            props: {
                animationData,
            } as LottiePlayerProps,
        });

        // Ensure to snapshot always the first frame
        page.locator('pie-lottie-player')
            .evaluate((el:PieLottiePlayer) => el.stop());

        await percySnapshot(page, 'PieLottiePlayer - Visual Test');
    });
});
