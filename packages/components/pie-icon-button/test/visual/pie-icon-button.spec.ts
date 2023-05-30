import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { PieIconButton } from '@/index';
import { ICON_BUTTON_VARIANT } from '@/defs';

const variants = Object.values(ICON_BUTTON_VARIANT);
test('should render', async ({ page, mount }) => {
    await mount(
        PieIconButton,
        {
            props: {
                variant: ICON_BUTTON_VARIANT.PRIMARY,
            },
        },
    );

    await percySnapshot(page, 'PIE Icon Button');
});
