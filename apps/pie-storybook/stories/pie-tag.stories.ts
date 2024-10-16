import { html, nothing } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-tag';
import {
    type TagProps as TagBaseProps, variants, sizes, defaultProps,
} from '@justeattakeaway/pie-tag';
import '@justeattakeaway/pie-icons-webc/dist/IconHeartFilled.js';

import { type SlottedComponentProps } from '../types';
import { createStory, type TemplateFunction, sanitizeAndRenderHTML } from '../utilities';

type TagProps = SlottedComponentProps<TagBaseProps> & { showIcon: boolean };
type TagStoryMeta = Meta<TagProps>;

const defaultArgs: TagProps = {
    ...defaultProps,
    showIcon: false,
    slot: 'Label',
};

const tagStoryMeta: TagStoryMeta = {
    title: 'Tag',
    component: 'pie-tag',
    argTypes: {
        variant: {
            description: 'Set the variant of the tag.',
            control: 'select',
            options: variants,
            defaultValue: {
                summary: defaultProps.variant,
            },
        },
        size: {
            description: 'Set the size of the tag.',
            control: 'select',
            options: sizes,
            defaultValue: {
                summary: defaultProps.size,
            },
        },
        isStrong: {
            description: 'If `true`, displays strong tag styles for some of the variant',
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.isStrong,
            },
        },
        disabled: {
            description: 'For an interactive tag, this applies the disabled attribute to the button and styles it appropriately.<br>For a non-interactive tag, this only applies the disabled styling.',
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.disabled,
            },
        },
        showIcon: {
            description: 'Enable to see the example of Tag with icon. Available only for large tag size.',
            control: 'boolean',
            defaultValue: {
                summary: defaultArgs.showIcon,
            },
            if: { arg: 'size', eq: 'large' },
        },
        slot: {
            description: 'Content to place within the tag',
            control: 'text',
        },
    },
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OOgnT2oNMdGFytj5AanYvt/branch/QGEtmJqZM3OL9QG33L4053/%E2%9D%8C-%5BBETA%5D-%5BCore%5D-Component-Documentation-%5BPIE-3%5D-%E2%9D%8C?type=design&node-id=419-62146&mode=design',
        },
    },
};

export default tagStoryMeta;

const Template : TemplateFunction<TagProps> = ({
    variant,
    size,
    isInteractive,
    isStrong,
    disabled,
    showIcon,
    slot,
}) => html`
    <pie-tag
        variant="${ifDefined(variant)}"
        size="${ifDefined(size)}"
        ?isInteractive="${isInteractive}"
        ?isStrong="${isStrong}"
        ?disabled="${disabled}">
        ${showIcon ? html`<icon-heart-filled slot="icon"></icon-heart-filled>` : nothing}
        ${sanitizeAndRenderHTML(slot)}
    </pie-tag>
`;

const createTagStory = createStory<TagProps>(Template, defaultArgs);

export const Neutral = createTagStory({ variant: 'neutral' });
export const Blue = createTagStory({ variant: 'blue' });
export const Green = createTagStory({ variant: 'green' });
export const Yellow = createTagStory({ variant: 'yellow' });
export const Red = createTagStory({ variant: 'red' });

// For the following stories isStrong prop won't have any effect so it is excluded
export const Brand = createTagStory({ variant: 'brand' }, {
    controls: {
        exclude: ['isStrong'],
    },
});

export const NeutralAlternative = createTagStory({ variant: 'neutral-alternative' }, {
    bgColor: 'dark (container-dark)',
    controls: {
        exclude: ['isStrong'],
    },
});

export const Outline = createTagStory({ variant: 'outline' }, {
    controls: {
        exclude: ['isStrong'],
    },
});

export const Ghost = createTagStory({ variant: 'ghost' }, {
    controls: {
        exclude: ['isStrong'],
    },
});

export const Brand03 = createTagStory({ variant: 'brand-03' }, {
    controls: {
        exclude: ['isStrong'],
    },
});

export const Brand04 = createTagStory({ variant: 'brand-04' }, {
    controls: {
        exclude: ['isStrong'],
    },
});

export const Brand06 = createTagStory({ variant: 'brand-06' }, {
    controls: {
        exclude: ['isStrong'],
    },
});
