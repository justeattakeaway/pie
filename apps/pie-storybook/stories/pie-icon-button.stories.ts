import type { StoryObj as Story } from '@storybook/web-components';
import { IconButtonProps, sizes, variants } from '@justeattakeaway/pie-icon-button';
import { html, TemplateResult } from 'lit';
import { StoryMeta } from '../types';
import '@justeattakeaway/pie-icons-webc/icons/IconClose';

type IconButtonStoryMeta = StoryMeta<IconButtonProps>;

const defaultArgs: IconButtonProps = {
    size: 'medium',
    variant: 'primary',
    disabled: false,
};

const iconButtonStoryMeta: IconButtonStoryMeta = {
    title: 'Icon Button',
    component: 'pie-icon-button',
    argTypes: {
        size: {
            control: 'select',
            options: sizes,
        },
        variant: {
            control: 'select',
            options: variants,
        },
        disabled: {
            control: 'boolean',
        },
    },
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=32007-361476&t=gIg91Y13QC8Ndhly-4',
        },
    },
};

export default iconButtonStoryMeta;

const Template = ({
    size,
    variant,
    disabled,
}: IconButtonProps): TemplateResult => html`
        <pie-icon-button
            size="${size}"
            variant="${variant}"
            ?disabled="${disabled}">
            <icon-close></icon-close>
        </pie-icon-button>
        `;

export const Primary: Story<IconButtonProps> = (args: IconButtonProps) => Template(args);
Primary.args = {
    ...defaultArgs,
};

export const Secondary: Story<IconButtonProps> = (args: IconButtonProps) => Template(args);
Secondary.args = {
    ...defaultArgs,
    variant: 'secondary',
};

export const Outline: Story<IconButtonProps> = (args: IconButtonProps) => Template(args);
Outline.args = {
    ...defaultArgs,
    variant: 'outline',
};

export const Ghost: Story<IconButtonProps> = (args: IconButtonProps) => Template(args);
Ghost.args = {
    ...defaultArgs,
    variant: 'ghost',
};

export const GhostSecondary: Story<IconButtonProps> = (args: IconButtonProps) => Template(args);
GhostSecondary.args = {
    ...defaultArgs,
    variant: 'ghost-secondary',
};
