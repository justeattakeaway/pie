import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { PieModal } from '@/index';

test('should render Modal', async ({ page, mount }) => {
    await mount(
        PieModal,
        {
            slots: {
                default: 'Hello, this is the Pie Modal!',
            },
        },
    );

    await percySnapshot(page, 'PIE Modal');
});
