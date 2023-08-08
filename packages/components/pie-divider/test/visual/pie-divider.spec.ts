
import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { PieDivider, DividerProps } from '@/index';
import { variants, orientations } from '@/defs';

variants.forEach((variant) => {
    test(`should render correctly with variant = ${variant}`, async ({ page, mount }) => {
        await mount(PieDivider, {
            props: { variant } as DividerProps,
        });

        await percySnapshot(page, `Divider - variant = ${variant}`);
    });
});

orientations.forEach((orientation) => {
    test(`should render correctly with orientation = ${orientation}`, async ({ page, mount }) => {
        await mount(PieDivider, {
            props: { orientation } as DividerProps,
        });

        await percySnapshot(page, `Divider - orientation = ${orientation}`);
    });
});
