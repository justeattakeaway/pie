import { html, nothing } from 'lit';

/* eslint-disable import/no-duplicates */
import '@justeattakeaway/pie-tag';
import {
    TagProps as TagBaseProps, variants, sizes,
} from '@justeattakeaway/pie-tag';
/* eslint-enable import/no-duplicates */
import '@justeattakeaway/pie-icons-webc/IconHeartFilled';

import type { StoryMeta, SlottedComponentProps } from '../types';
import { createStory, type TemplateFunction } from '../utilities';

type TagProps = SlottedComponentProps<TagBaseProps>;
type TagStoryMeta = StoryMeta<TagProps>;

const defaultArgs: TagProps = {
    variant: 'neutral',
    size: 'large',
    isStrong: false,
    isDimmed: false,
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
                summary: 'neutral',
            },
        },
        size: {
            description: 'Set the size of the tag.',
            control: 'select',
            options: sizes,
            defaultValue: {
                summary: 'large',
            },
        },
        isStrong: {
            description: 'If `true`, displays strong tag styles for some of the variant',
            control: 'boolean',
            defaultValue: {
                summary: false,
            },
        },
        isDimmed: {
            description: 'If `true`, lowers the tag opacity.',
            control: 'boolean',
            defaultValue: {
                summary: false,
            },
        },
        showIcon: {
            description: 'Enable to see the example of Tag with icon. Available only for large tag size.',
            control: 'boolean',
            defaultValue: {
                summary: false,
            },
            if: { arg: 'size', eq: 'large' },
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
    isStrong,
    isDimmed,
    showIcon,
    slot,
}) => html`
    <pie-tag
        variant="${variant}"
        size="${size}"
        ?isStrong="${isStrong}"
        ?isDimmed="${isDimmed}">
        ${showIcon ? html`<icon-heart-filled slot="icon"></icon-heart-filled>` : nothing}
        ${slot}
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
