import { html, nothing } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-tag';
import {
    type TagProps as TagBaseProps,
    variants,
    sizes,
    defaultProps,
} from '@justeattakeaway/pie-tag';
import '@justeattakeaway/pie-notification';
import '@justeattakeaway/pie-icons-webc/dist/IconOfferFilled.js';
import '@justeattakeaway/pie-icons-webc/dist/IconVegan.js';
import '@justeattakeaway/pie-icons-webc/dist/IconFingerprint.js';

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
        isDimmed: {
            description: 'When true, applies a dimmed styling to the tag.',
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.isDimmed,
            },
        },
        isIconOnly: {
            description: 'Required to correctly render the tag when it contains only an icon.',
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.isIconOnly,
            },
        },
        hasLeadingIcon: {
            description: 'Required to correctly render the tag when it has a leading icon plus text.',
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.hasLeadingIcon,
            },
        },
        showIcon: {
            description: '<b>**Not a component prop</b><br><br>Use the `icon` slot to pass a PIE icon component. Available only for large tag size.',
            control: 'boolean',
            defaultValue: {
                summary: defaultArgs.showIcon,
            },
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
    isStrong,
    isDimmed,
    isIconOnly,
    hasLeadingIcon,
    showIcon,
    slot,
}) => {
    const hasText = slot && slot.trim() !== '';
    const shouldBeIconOnly = showIcon && !hasText;
    const shouldHaveLeadingIcon = showIcon && hasText;

    // Check for incorrect property settings
    let instructionalMessage = '';

    if (showIcon) {
        // When showIcon is enabled, check for missing attributes
        if (shouldBeIconOnly && !isIconOnly) {
            instructionalMessage = 'Set "isIconOnly" to true for icon-only tags.';
        } else if (shouldHaveLeadingIcon && !hasLeadingIcon) {
            instructionalMessage = 'Set "hasLeadingIcon" to true for tags with icon + text.';
        } else if (!shouldBeIconOnly && isIconOnly) {
            instructionalMessage = 'Set "isIconOnly" to false when tag has text content.';
        } else if (!shouldHaveLeadingIcon && hasLeadingIcon) {
            instructionalMessage = 'Set "hasLeadingIcon" to false for icon-only tags.';
        }
    }

    // When showIcon is disabled, check for incorrectly set attributes
    if (!showIcon && (isIconOnly || hasLeadingIcon)) {
        if (isIconOnly) {
            instructionalMessage = 'Set "isIconOnly" to false when no icon is provided.';
        } else if (hasLeadingIcon) {
            instructionalMessage = 'Set "hasLeadingIcon" to false when no icon is provided.';
        }
    }

    return html`
        ${instructionalMessage ? html`
            <pie-notification
                variant="warning"
                position="inline-content"
                isOpen>
                ${instructionalMessage}
            </pie-notification>
            <br>
        ` : nothing}
        <pie-tag
            variant="${ifDefined(variant)}"
            size="${ifDefined(size)}"
            ?isStrong="${isStrong}"
            ?isDimmed="${isDimmed}"
            ?isIconOnly="${isIconOnly}"
            ?hasLeadingIcon="${hasLeadingIcon}">
            ${showIcon ? html`<icon-fingerprint slot="icon"></icon-fingerprint>` : nothing}
            ${sanitizeAndRenderHTML(slot)}
        </pie-tag>
    `;
};

const createTagStory = createStory<TagProps>(Template, defaultArgs);

const IconAndTextTemplate : TemplateFunction<TagProps> = (args) => html`
    <p><b>Note:</b> The <code>isStrong</code> property will change the colours of some variants.</p>
    ${Template(args)}
`;

const createIconAndTextStory = createStory<TagProps>(IconAndTextTemplate, defaultArgs);

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

export const Brand08 = createTagStory({ variant: 'brand-08' });

export const Translucent = createTagStory({ variant: 'translucent' }, {
    bgColor: 'brand orange',
    controls: {
        exclude: ['isStrong'],
    },
});

export const IconOnly = createTagStory({
    size: 'large',
    showIcon: true,
    slot: '',
    variant: 'brand-06',
    isIconOnly: true,
}, {});

export const IconAndText = createIconAndTextStory({
    size: 'large',
    showIcon: true,
    hasLeadingIcon: true,
});

const allCustomStyles = `
    pie-tag.custom-style {
        display: inline-flex;
    }
    pie-tag.custom-style::part(body) {
        all: initial;
        font-family: inherit;
        box-sizing: border-box;
        text-rendering: inherit;
        -webkit-font-smoothing: inherit;

        --custom-tag-whitespace: var(--dt-spacing-a);

        display: flex;
        align-items: center;
        gap: var(--custom-tag-whitespace);
        border-radius: var(--dt-radius-rounded-e);
        padding-inline-start: 0;
        padding-inline-end: var(--custom-tag-whitespace);
        padding-block: 0;
        font-size: calc(var(--dt-font-caption-size) * 1px);
        font-variant-numeric: lining-nums tabular-nums;
        font-feature-settings: 'liga' off, 'clig' off;
        line-height: 1;
    }
    pie-tag.custom-style::part(icon) {
        all: initial;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        border-radius: 50%;
        aspect-ratio: 1/1;
    }
    pie-tag.custom-style::part(icon)::before {
        all: initial;
    }
    pie-tag.custom-1::part(body),
    pie-tag.custom-2::part(body) {
        color: var(--dt-color-white);
    }
    pie-tag.custom-1::part(icon),
    pie-tag.custom-2::part(icon) {
        --icon-size-override: 14px;

        color: var(--dt-color-content-dark-solid);
        background-color: var(--dt-color-support-brand-05);
        padding: 3px;
    }
    pie-tag.custom-1::part(body) {
        font-weight: var(--dt-font-weight-bold);
    }
    pie-tag.custom-2::part(body) {
        background-color: var(--dt-color-turmeric-90);
        font-weight: var(--dt-font-weight-regular);
    }
    pie-tag.custom-3::part(body) {
        --icon-size-override: 12px;
        color: var(--dt-color-content-default);
        font-weight: var(--dt-font-weight-regular);
    }
    pie-tag.custom-3::part(icon) {
        color: var(--dt-color-support-positive);
        background-color: var(--dt-color-support-positive-02);
        padding: 2px;
    }
`;

const CombinedCustomTemplate: TemplateFunction<TagProps> = (args) => html`
    <div style="text-align: center;">
        <style>${allCustomStyles}</style>
        <p style="color: #fff">We are using the CSS parts ::body and ::icon to customise the tag.</p>
        <p style="color: #fff">Please use with caution. Updates to the core component styles could override custom styles.</p>
        <p style="color: #fff">When using CSS parts we strongly recommend removing base styles by applying the css: <code>all: initial</code> to reduce risk of regression when core styles are updated.</p>

        <pie-tag class="custom-style custom-1" .args=${args}>
            <icon-offer-filled slot="icon"></icon-offer-filled>
            <span>Label 1</span>
        </pie-tag>
        <pie-tag class="custom-style custom-2" .args=${args}>
            <icon-offer-filled slot="icon"></icon-offer-filled>
            <span>Label 2</span>
        </pie-tag>
    </div>
`;

const CustomTagAlternateTemplate: TemplateFunction<TagProps> = (args) => html`
    <div style="text-align: center;">
        <style>${allCustomStyles}</style>
        <p style="color: #000">We are using the CSS parts ::body and ::icon to customise the tag.</p>
        <p style="color: #000">Please use with caution. Updates to the core component styles could override custom styles.</p>
        <p style="color: #000">When using CSS parts we strongly recommend removing base styles by applying the css: <code>all: initial</code> to reduce risk of regression when core styles are updated.</p>

        <pie-tag class="custom-style custom-3" .args=${args}>
            <icon-vegan slot="icon"></icon-vegan>
            <span>Vegan</span>
        </pie-tag>
    </div>
`;

const createCombinedCustomStory = createStory<TagProps>(CombinedCustomTemplate, defaultArgs);
export const CustomStyledTags = createCombinedCustomStory({
    size: 'large',
    showIcon: true,
}, {
    bgColor: 'dark (container-dark)',
    controls: { disable: true },
});

const createCustomTagAlternateStory = createStory<TagProps>(CustomTagAlternateTemplate, defaultArgs);
export const CustomStyledTagAlternate = createCustomTagAlternateStory({
    size: 'large',
    showIcon: true,
}, {
    controls: { disable: true },
});

