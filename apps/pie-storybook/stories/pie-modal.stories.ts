import type { Meta, StoryObj as Story } from '@storybook/web-components';
import type { HeadingLevel } from '@justeattakeaway/pie-modal';
import { headingLevels } from '@justeattakeaway/pie-modal';
import { html, TemplateResult } from 'lit';

const defaultArgs = {
    isOpen: false,
    heading: 'Modal header',
    headingLevel: 'h2',
    slot: 'This is Lit!',
};

export default {
    title: 'Modal',
    component: 'pie-modal',
    argTypes: {
        isOpen: {
            control: 'boolean',
        },
        heading: {
            control: 'text',
        },
        headingLevel: {
            control: 'select',
            options: headingLevels,
        },
        slot: {
            control: 'text',
        },
    },
    args: { ...defaultArgs },
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%5BPIE-2.0%5D?type=design&node-id=32007-376358&t=HIfzk0Y1IEnAJyUi-0',
        },
    },
} as Meta;

interface ModalProps {
    isOpen: boolean;
    heading: string;
    headingLevel: HeadingLevel;
    slot: TemplateResult;
}

const Template = ({
    isOpen,
    heading,
    headingLevel,
    slot,
}: ModalProps): TemplateResult => html`
        <pie-modal 
        ?isOpen="${isOpen}"
        heading="${heading}"
        headingLevel="${headingLevel}">
            ${slot}
        </pie-modal>
    `;

export const Default: Story = Template.bind({});
Default.args = {
    ...defaultArgs,
};
