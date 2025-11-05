import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-icon-button';
import {
    type IconButtonProps, sizes, variants, defaultProps,
} from '@justeattakeaway/pie-icon-button';
import '@justeattakeaway/pie-icons-webc/dist/IconClose.js';

import { createStory, type TemplateFunction } from '../utilities';

type IconButtonStoryMeta = Meta<IconButtonProps>;

const defaultArgs: IconButtonProps = { ...defaultProps, aria: { label: 'Test Label ' } };

const iconButtonStoryMeta: IconButtonStoryMeta = {
    title: 'Components/Icon Button',
    component: 'pie-icon-button',
    argTypes: {
        aria: {
            description: 'The ARIA attributes available to use on the icon button. Offers `label`, `labelledby`, `describedby`, `expanded` and `controls`.',
            control: 'object',
        },
        size: {
            description: 'Set the size of the icon button.',
            control: 'select',
            options: sizes,
            defaultValue: {
                summary: defaultProps.size,
            },
        },
        variant: {
            description: 'Set the variant of the icon button.',
            control: 'select',
            options: variants,
            defaultValue: {
                summary: defaultProps.variant,
            },
        },
        disabled: {
            description: 'If `true`, disables the icon button.',
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.disabled,
            },
        },
        isLoading: {
            description: 'If `true`, displays a loading indicator inside the icon button.',
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.isLoading,
            },
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

const Template : TemplateFunction<IconButtonProps> = ({
    size,
    variant,
    disabled,
    isLoading,
    aria,
}) => html`
        <pie-icon-button
            size="${ifDefined(size)}"
            variant="${ifDefined(variant)}"
            ?disabled="${disabled}"
            ?isLoading="${isLoading}"
            .aria="${aria}">
            <icon-close></icon-close>
        </pie-icon-button>
        `;

const createIconButtonStory = createStory<IconButtonProps>(Template, defaultArgs);

export const Primary = createIconButtonStory();
export const Secondary = createIconButtonStory({ variant: 'secondary' });
export const Outline = createIconButtonStory({ variant: 'outline' }, { bgColor: 'background-subtle' });
export const Ghost = createIconButtonStory({ variant: 'ghost' }, { bgColor: 'background-subtle' });
export const GhostSecondary = createIconButtonStory({ variant: 'ghost-secondary' }, { bgColor: 'background-subtle' });
export const Inverse = createIconButtonStory({ variant: 'inverse' }, { bgColor: 'dark (container-dark)' });
export const GhostInverse = createIconButtonStory({ variant: 'ghost-inverse' }, { bgColor: 'dark (container-dark)' });
export const Translucent = createIconButtonStory({ variant: 'translucent' });
