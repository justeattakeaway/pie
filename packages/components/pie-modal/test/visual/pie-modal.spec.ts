import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { PieModal } from '@/index';

const propIsOpenValues = [true, false];

propIsOpenValues.forEach(propValue =>
    test(`should render Modal correctly when prop isOpen is set to ${propValue}`, async ({ page, mount }) => {
        await mount(
            PieModal,
            {
                props: {
                    isOpen: propValue
                },
                slots: {
                    default: 'Hello, this is the Pie Modal!',
                },
            },
        );

        await percySnapshot(page, `PIE Modal when isOpen is set to ${propValue}`);
}));
