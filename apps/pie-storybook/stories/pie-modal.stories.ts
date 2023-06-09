import type { Meta, StoryObj as Story } from '@storybook/web-components';
import { HEADING_LEVELS } from '@justeattakeaway/pie-modal';
import { html, TemplateResult } from 'lit';

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
            options: Object.values(HEADING_LEVELS),
        },
        slot: {
            control: 'text',
        },
    },
    args: {
        isOpen: false,
        heading: 'Model Header',
        headingLevel: HEADING_LEVELS.H2,
    },
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
    headingLevel: HEADING_LEVELS;
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

const defaultArgs = {
    isOpen: false,
    heading: 'Modal header',
    headingLevel: HEADING_LEVELS.H2,
    slot: 'This is Lit!',
};

export const Default: Story = Template.bind({});
Default.args = {
    ...defaultArgs,
};
