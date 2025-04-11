import { html, nothing } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-tag';
import {
    type TagProps as TagBaseProps,
    variants,
    sizes,
    defaultProps,
    iconPlacements,
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
    title: 'Components/Tag',
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
            description: '<b>**Not a component prop</b><br><br>Use the `icon` slot to pass a PIE icon component. Available only for large tag size.',
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
        iconPlacement: {
            description: 'The placement of the icon slot such as leading or trailing. <br /><br /> Can be only used if `isInteractive` is set to true',
            control: 'select',
            options: iconPlacements,
            defaultValue: {
                summary: defaultArgs.iconPlacement,
            },
            if: { arg: 'isInteractive', eq: true },
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
    iconPlacement,
}) => html`
    <pie-tag
        variant="${ifDefined(variant)}"
        size="${ifDefined(size)}"
        iconPlacement="${ifDefined(iconPlacement)}"
        ?isInteractive="${isInteractive}"
        ?isStrong="${isStrong}"
        ?disabled="${disabled}">
        ${showIcon ? html`<icon-heart-filled slot="icon"></icon-heart-filled>` : nothing}
        ${sanitizeAndRenderHTML(slot)}
    </pie-tag>
`;

const createTagStory = createStory<TagProps>(Template, defaultArgs);

export const Neutral = createTagStory({ variant: 'neutral' });
export const Information = createTagStory({ variant: 'information' });
export const Success = createTagStory({ variant: 'success' });
export const Error = createTagStory({ variant: 'error' });
export const Brand05 = createTagStory({ variant: 'brand-05' });

// For the following stories isStrong prop won't have any effect so it is excluded

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

export const Brand02 = createTagStory({ variant: 'brand-02' }, {
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

export const IconOnly = createTagStory({
    size: 'large',
    showIcon: true,
    slot: '',
    isInteractive: false,
    variant: 'brand-06',
}, {});
