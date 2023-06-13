import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieModal, headingLevels } from '@/index';

const levels = headingLevels;

levels.forEach((headingLevel) => test(`should render the correct heading tag based on the value of headingLevel: ${headingLevel}`, async ({ mount }) => {
    const props = {
        heading: 'Modal Header',
        headingLevel,
    };

    const component = await mount(PieModal, { props });

    await expect(component.locator(`${props.headingLevel}.c-modal-heading`)).toContainText(props.heading);
}));

['span', 'section'].forEach((headingLevel) => test(`should render the fallback heading level 'h2' if invalid headingLevel: ${headingLevel} is passed`, async ({ mount }) => {
    const props = {
        heading: 'Modal Header',
        // assert type checking as we purposely provide incorrect value
        headingLevel,
    };

    const component = await mount(PieModal, { props });

    // h2 is the default / fallback value
    await expect(component.locator('h2.c-modal-heading')).toContainText(props.heading);
}));
