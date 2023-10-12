import { html, nothing } from 'lit';
import {
    ButtonProps as ButtonPropsBase, iconPlacements, sizes, types, variants,
} from '@justeattakeaway/pie-button';
import { IconPlusCircle } from '@justeattakeaway/pie-icons-webc';
import { createStory, type TemplateFunction } from '../utilities';
import { StoryMeta, SlottedComponentProps } from '../types';

// This prevents storybook from tree shaking the components
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const keptReferences = [IconPlusCircle];

type ButtonProps = SlottedComponentProps<ButtonPropsBase>;
type ButtonStoryMeta = StoryMeta<ButtonProps>;

const defaultArgs: ButtonProps = {
    size: 'medium',
    type: 'submit',
    variant: 'primary',
    disabled: false,
    isFullWidth: false,
    isLoading: false,
    slot: 'Label',
};

const buttonStoryMeta: ButtonStoryMeta = {
    title: 'Button',
    component: 'pie-button',
    argTypes: {
        size: {
            description: 'Set the size of the button.',
            control: 'select',
            options: sizes,
            defaultValue: {
                summary: 'medium',
            },
        },
        type: {
            description: 'Set the type of the button.',
            control: 'select',
            options: types,
            defaultValue: {
                summary: 'submit',
            },
        },
        variant: {
            description: 'Set the variant of the button.',
            control: 'select',
            options: variants,
            defaultValue: {
                summary: 'primary',
            },
        },
        iconPlacement: {
            description: 'Show a leading/trailing icon.<br /><br />To use this with pie-button, you can pass an icon into the `icon` slot',
            control: 'select',
            options: [undefined, ...iconPlacements],
        },
        disabled: {
            description: 'If `true`, disables the button.',
            control: 'boolean',
            defaultValue: {
                summary: false,
            },
        },
        isFullWidth: {
            description: 'If `true`, sets the button width to 100% of it’s container.',
            control: 'boolean',
            defaultValue: {
                summary: false,
            },
        },
        isLoading: {
            description: 'If `true`, displays a loading indicator inside the button.',
            control: 'boolean',
            defaultValue: {
                summary: false,
            },
        },
        slot: {
            description: 'The default slot is used to pass the button text into the component.',
            control: 'text',
            defaultValue: {
                summary: '',
            },
        },
    },
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=34706-406376&t=8JLrEVbwx7AEJbEL-0',
        },
    },
};

export default buttonStoryMeta;

const Template: TemplateFunction<ButtonProps> = ({
    size,
    variant,
    type,
    disabled,
    isFullWidth,
    isLoading,
    slot,
    iconPlacement,
}) => html`
        <pie-button
            size="${size}"
            variant="${variant}"
            type="${type}"
            iconPlacement="${iconPlacement || nothing}"
            ?disabled="${disabled}"
            ?isLoading="${isLoading}"
            ?isFullWidth="${isFullWidth}">
            ${iconPlacement ? html`<icon-plus-circle slot="icon"></icon-plus-circle>` : nothing}
            ${slot}
        </pie-button>`;

const createButtonStory = createStory<ButtonProps>(Template, defaultArgs);

export const Primary = createButtonStory();
export const Secondary = createButtonStory({ variant: 'secondary' });
export const Outline = createButtonStory({ variant: 'outline' }, { bgColor: 'background-subtle' });
export const Ghost = createButtonStory({ variant: 'ghost' }, { bgColor: 'background-subtle' });
export const Destructive = createButtonStory({ variant: 'destructive' });
export const DestructiveGhost = createButtonStory({ variant: 'destructive-ghost' }, { bgColor: 'background-subtle' });
export const Inverse = createButtonStory({ variant: 'inverse' }, { bgColor: 'dark (container-dark)' });
export const GhostInverse = createButtonStory({ variant: 'ghost-inverse' }, { bgColor: 'dark (container-dark)' });
export const OutlineInverse = createButtonStory({ variant: 'outline-inverse' }, { bgColor: 'dark (container-dark)' });
