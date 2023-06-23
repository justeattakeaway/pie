import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { PieModal } from '@/index';
import { getLitPercyOptions } from '@justeattakeaway/pie-webc-core/src/test-helpers/percy-lit-options.ts';

const propIsOpenValues = [{ heading: 'Modal Heading', isOpen: true }, { isOpen: false }];

propIsOpenValues.forEach((props) => test(`should render Modal correctly when prop isOpen is set to ${props.isOpen}`, async ({ page, mount }) => {
    await mount(
        PieModal,
        {
            props,
            slots: {
                default: 'Hello, this is the Pie Modal!',
            },
        },
    );

    await percySnapshot(page, `PIE Modal when isOpen is set to ${props.isOpen}`, getLitPercyOptions());
}));
