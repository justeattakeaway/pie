import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieModal } from '@/index';
import { HEADING_LEVELS } from '@/defs';

Object.values(HEADING_LEVELS).forEach((headingLevel) => test(`should render the correct heading tag based on the value of headingLevel: ${headingLevel}`, async ({ mount }) => {
    const props = {
        heading: 'Modal Header',
        headingLevel,
    };

    const component = await mount(PieModal, { props });

    await expect(component.locator(`${props.headingLevel}.c-modal-heading`)).toContainText(props.heading);
}));

['span', 'section'].forEach((headingLevel) => test(`should render the fallback heading level ${HEADING_LEVELS.H2} if invalid headingLevel: ${headingLevel} is passed`, async ({ mount }) => {
    const props = {
        heading: 'Modal Header',
        // assert type checking as we purposely provide incorrect value
        headingLevel: headingLevel as HEADING_LEVELS,
    };

    const component = await mount(PieModal, { props });

    // h2 is the default / fallback value
    await expect(component.locator(`${HEADING_LEVELS.H2}.c-modal-heading`)).toContainText(props.heading);
}));
