import type { Meta, StoryObj as Story } from '@storybook/web-components';
import { ModalProps as ModalPropsBase, headingLevels } from '@justeattakeaway/pie-modal';
import { html, TemplateResult } from 'lit';

type ModalProps = ModalPropsBase & { slot: string };

const defaultArgs: ModalProps = {
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

const Template = ({ isOpen, heading, headingLevel, slot }: ModalProps): TemplateResult => html`
    <pie-modal ?isOpen="${isOpen}" heading="${heading}" headingLevel="${headingLevel}">
        ${slot}
    </pie-modal>
`;

export const Default: Story<ModalProps> = (args: ModalProps) => Template(args);
Default.args = {
    ...defaultArgs,
};
