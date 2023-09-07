import { html, TemplateResult, nothing } from 'lit';
import {
    ButtonProps as ButtonPropsBase, sizes, types,
    variants, iconPlacements, Variant,
} from '@justeattakeaway/pie-button';
import { IconPlusCircle } from '@justeattakeaway/pie-icons-webc';
import { StoryOptions } from '../interfaces/story-options';
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

const Template = ({
    size,
    variant,
    type,
    disabled,
    isFullWidth,
    isLoading,
    slot,
    iconPlacement,
}: ButtonProps): TemplateResult => html`
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
        </pie-button>
        `;

interface ButtonStoryOptions extends StoryOptions {
    variant?: Variant;
}

const createStory = <T>(opts?: ButtonStoryOptions) => ({
    render: (args: T) => Template(args),
    args: {
        ...defaultArgs,
        ...(opts && opts.variant ? { variant: opts.variant } : {}),
    },
    parameters: {
        backgrounds: {
            ...(opts && opts.bgColor ? { default: opts.bgColor } : {}),
        },
    },
});

export const Primary = createStory<ButtonProps>();

export const Secondary = createStory<ButtonProps>({
    variant: 'secondary',
});

export const Outline = createStory<ButtonProps>({
    variant: 'outline',
    bgColor: 'background-subtle',
});

export const Ghost = createStory<ButtonProps>({
    variant: 'ghost',
    bgColor: 'background-subtle',
});

export const Destructive = createStory<ButtonProps>({
    variant: 'destructive',
});

export const DestructiveGhost = createStory<ButtonProps>({
    variant: 'destructive-ghost',
    bgColor: 'background-subtle',
});

export const Inverse = createStory<ButtonProps>({
    variant: 'inverse',
    bgColor: 'dark (container-dark)',
});

export const GhostInverse = createStory<ButtonProps>({
    variant: 'ghost-inverse',
    bgColor: 'dark (container-dark)',
});

export const OutlineInverse = createStory<ButtonProps>({
    variant: 'outline-inverse',
    bgColor: 'dark (container-dark)',
});
