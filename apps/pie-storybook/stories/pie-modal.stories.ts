import type { Meta, StoryObj as Story } from '@storybook/web-components';
import { PieModal } from '@justeattakeaway/pie-modal';
import { html, TemplateResult } from 'lit';

const keptReference = PieModal; // TODO: Remove this const when other exports from PieModal are used on Stories, otherwise tree-shaking will get rid of the web component definition

export default {
    title: 'Modal',
    component: 'pie-modal',
    argTypes: {
        slot: {
            control: 'text',
        },
    },
    args: {},
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%5BPIE-2.0%5D?type=design&node-id=32007-376358&t=HIfzk0Y1IEnAJyUi-0',
        },
    },
} as Meta;

interface ModalProps {
    slot: TemplateResult;
}

const Template = ({
    slot,
}: ModalProps): TemplateResult => html`
        <pie-modal>
            ${slot}
        </pie-modal>
    `;

const defaultArgs = {
    slot: 'This is Lit!',
};

export const Default: Story = Template.bind({});
Default.args = {
    ...defaultArgs,
};
