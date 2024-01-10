
import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { PieNotification, NotificationProps } from '../../src/index';

test.describe('PieNotification - Visual tests`', () => {
    test('should display the PieNotification component successfully', async ({ page, mount }) => {
        await mount(PieNotification, {
            props: {} as NotificationProps,
        });

        await percySnapshot(page, 'PieNotification - Visual Test');
    });
});
