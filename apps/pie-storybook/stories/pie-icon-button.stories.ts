import { html } from 'lit';
import { IconButtonProps, sizes, variants } from '@justeattakeaway/pie-icon-button';
import { IconClose } from '@justeattakeaway/pie-icons-webc';
import { StoryMeta } from '../types';
import { createStory, type TemplateFunction } from '../utilities';

// This prevents storybook from tree shaking the components
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const keptReferences = [IconClose];

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

const Template : TemplateFunction<IconButtonProps> = ({
    size,
    variant,
    disabled,
}) => html`
        <pie-icon-button
            size="${size}"
            variant="${variant}"
            ?disabled="${disabled}">
            <icon-close></icon-close>
        </pie-icon-button>
        `;

const createIconButtonStory = createStory<IconButtonProps>(Template, defaultArgs);

export const Primary = createIconButtonStory();
export const Secondary = createIconButtonStory({ variant: 'secondary' });
export const Outline = createIconButtonStory({ variant: 'outline' }, { bgColor: 'background-subtle' });
export const Ghost = createIconButtonStory({ variant: 'ghost' }, { bgColor: 'background-subtle' });
export const GhostSecondary = createIconButtonStory({ variant: 'ghost-secondary' }, { bgColor: 'background-subtle' });
