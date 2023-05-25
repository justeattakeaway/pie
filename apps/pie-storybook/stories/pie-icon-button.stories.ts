import type { Meta, StoryObj as Story } from '@storybook/web-components';
import { html, TemplateResult } from 'lit';

export default {
    title: 'Icon Button',
    component: 'pie-icon-button',
    argTypes: {
        slot: {
            control: 'text',
        },
    },
    args: {},
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=32007-361476&t=gIg91Y13QC8Ndhly-4',
        },
    },
} as Meta;

interface IconButtonProps {
    slot: TemplateResult;
}

const Template = ({
    slot,
}: IconButtonProps): TemplateResult => html`
        <pie-icon-button>
            ${slot}
        </pie-icon-button>
    `;

const defaultArgs = {
    slot: 'This is Lit!',
};

export const Default: Story = Template.bind({});
Default.args = {
    ...defaultArgs,
};
