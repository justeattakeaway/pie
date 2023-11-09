import { html } from 'lit';

/* eslint-disable import/no-duplicates */
import '@justeattakeaway/pie-icon-button';
import { IconButtonProps, sizes, variants } from '@justeattakeaway/pie-icon-button';
/* eslint-enable import/no-duplicates */
import '@justeattakeaway/pie-icons-webc/IconClose';

import { StoryMeta } from '../types';
import { createStory, type TemplateFunction } from '../utilities';

type IconButtonStoryMeta = StoryMeta<IconButtonProps>;

const defaultArgs: IconButtonProps = {
    size: 'medium',
    variant: 'primary',
    disabled: false,
    isLoading: false,
};

const iconButtonStoryMeta: IconButtonStoryMeta = {
    title: 'Icon Button',
    component: 'pie-icon-button',
    argTypes: {
        size: {
            description: 'Set the size of the icon button.',
            control: 'select',
            options: sizes,
            defaultValue: {
                summary: 'medium',
            },
        },
        variant: {
            description: 'Set the variant of the icon button.',
            control: 'select',
            options: variants,
            defaultValue: {
                summary: 'primary',
            },
        },
        disabled: {
            description: 'If `true`, disables the icon button.',
            control: 'boolean',
            defaultValue: {
                summary: false,
            },
        },
        isLoading: {
            description: 'If `true`, displays a loading indicator inside the icon button.',
            control: 'boolean',
            defaultValue: {
                summary: false,
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
}) => html`
        <pie-icon-button
            size="${size}"
            variant="${variant}"
            ?disabled="${disabled}"
            ?isLoading="${isLoading}">
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
