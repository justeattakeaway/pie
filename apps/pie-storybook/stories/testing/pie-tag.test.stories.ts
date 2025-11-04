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
import '@justeattakeaway/pie-icons-webc/dist/IconOfferFilled.js';
import '@justeattakeaway/pie-icons-webc/dist/IconFingerprint.js';
import '@justeattakeaway/pie-icons-webc/dist/IconInfoCircle.js';
import '@justeattakeaway/pie-icons-webc/dist/IconAlertTriangleFilled.js';
import '@justeattakeaway/pie-icons-webc/dist/IconCheckCircleFilled.js';

import { type SlottedComponentProps } from '../../types';
import {
    createStory, createVariantStory, type TemplateFunction, sanitizeAndRenderHTML,
} from '../../utilities';

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
        isDimmed: {
            description: 'When true, applies a dimmed styling to the tag.',
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.isDimmed,
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
};

export default tagStoryMeta;

const Template: TemplateFunction<TagProps> = ({
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

    // Use explicit values or determine based on content
    const effectiveIsIconOnly = isIconOnly ?? shouldBeIconOnly;
    let effectiveHasLeadingIcon = hasLeadingIcon ?? shouldHaveLeadingIcon;

    // Validation: Both attributes cannot be true simultaneously
    if (effectiveIsIconOnly && effectiveHasLeadingIcon) {
        console.warn('Invalid tag configuration: isIconOnly and hasLeadingIcon cannot both be true. Setting hasLeadingIcon to false.');
        effectiveHasLeadingIcon = false;
    }

    return html`
        <pie-tag
            variant="${ifDefined(variant)}"
            size="${ifDefined(size)}"
            ?isStrong="${isStrong}"
            ?isDimmed="${isDimmed}"
            ?is-icon-only="${effectiveIsIconOnly}"
            ?has-leading-icon="${effectiveHasLeadingIcon}">
            ${showIcon ? html`<icon-fingerprint data-test-id="tag-icon" slot="icon"></icon-fingerprint>` : nothing}
            ${sanitizeAndRenderHTML(slot)}
        </pie-tag>
    `;
};

const createTagStory = createStory<TagProps>(Template, defaultArgs);

// Individual variant stories
export const Default = createTagStory();
export const Neutral = createTagStory({ variant: 'neutral' });
export const NeutralAlternative = createTagStory({ variant: 'neutral-alternative' }, { bgColor: 'dark (container-dark)' });
export const Information = createTagStory({ variant: 'information' });
export const Success = createTagStory({ variant: 'success' });
export const Error = createTagStory({ variant: 'error' });
export const Warning = createTagStory({ variant: 'warning' });
export const Outline = createTagStory({ variant: 'outline' });
export const Ghost = createTagStory({ variant: 'ghost' });
export const Translucent = createTagStory({ variant: 'translucent' }, { bgColor: 'brand orange' });
export const DefaultWithIcon = createTagStory({
    slot: 'Label',
    showIcon: true,
    hasLeadingIcon: true,
});
export const IconOnlyStory = createTagStory({
    slot: '',
    showIcon: true,
    isIconOnly: true,
    variant: 'information',
});

// Base shared props matrix - text only scenarios
const baseSharedPropsMatrix: Partial<Record<keyof TagProps, unknown[]>> = {
    size: [...sizes],
    isStrong: [true, false],
    isDimmed: [true, false],
    showIcon: [false],
    isIconOnly: [false],
    hasLeadingIcon: [false],
    slot: ['Tag'],
};

// Neutral variant stories
const neutralPropsMatrix: Partial<Record<keyof TagProps, unknown[]>> = {
    ...baseSharedPropsMatrix,
    variant: ['neutral'],
};

// Information variant stories
const informationPropsMatrix: Partial<Record<keyof TagProps, unknown[]>> = {
    ...baseSharedPropsMatrix,
    variant: ['information'],
};

// Success variant stories
const successPropsMatrix: Partial<Record<keyof TagProps, unknown[]>> = {
    ...baseSharedPropsMatrix,
    variant: ['success'],
};

// Error variant stories
const errorPropsMatrix: Partial<Record<keyof TagProps, unknown[]>> = {
    ...baseSharedPropsMatrix,
    variant: ['error'],
};

// Warning variant stories
const warningPropsMatrix: Partial<Record<keyof TagProps, unknown[]>> = {
    ...baseSharedPropsMatrix,
    variant: ['warning'],
};

// Neutral Alternative variant stories (with dark background)
const neutralAlternativePropsMatrix: Partial<Record<keyof TagProps, unknown[]>> = {
    ...baseSharedPropsMatrix,
    variant: ['neutral-alternative'],
};

// Outline variant stories
const outlinePropsMatrix: Partial<Record<keyof TagProps, unknown[]>> = {
    ...baseSharedPropsMatrix,
    variant: ['outline'],
};

// Ghost variant stories
const ghostPropsMatrix: Partial<Record<keyof TagProps, unknown[]>> = {
    ...baseSharedPropsMatrix,
    variant: ['ghost'],
};

// Brand-02 variant stories
const brand02PropsMatrix: Partial<Record<keyof TagProps, unknown[]>> = {
    ...baseSharedPropsMatrix,
    variant: ['brand-02'],
};

// Brand-03 variant stories
const brand03PropsMatrix: Partial<Record<keyof TagProps, unknown[]>> = {
    ...baseSharedPropsMatrix,
    variant: ['brand-03'],
};

// Brand-04 variant stories
const brand04PropsMatrix: Partial<Record<keyof TagProps, unknown[]>> = {
    ...baseSharedPropsMatrix,
    variant: ['brand-04'],
};

// Brand-05 variant stories
const brand05PropsMatrix: Partial<Record<keyof TagProps, unknown[]>> = {
    ...baseSharedPropsMatrix,
    variant: ['brand-05'],
};

// Brand-06 variant stories
const brand06PropsMatrix: Partial<Record<keyof TagProps, unknown[]>> = {
    ...baseSharedPropsMatrix,
    variant: ['brand-06'],
};

// Brand-08 variant stories
const brand08PropsMatrix: Partial<Record<keyof TagProps, unknown[]>> = {
    ...baseSharedPropsMatrix,
    variant: ['brand-08'],
};

// Translucent variant stories
const translucentPropsMatrix: Partial<Record<keyof TagProps, unknown[]>> = {
    ...baseSharedPropsMatrix,
    variant: ['translucent'],
};

// IconOnly variant stories
const iconOnlyPropsMatrix: Partial<Record<keyof TagProps, unknown[]>> = {
    size: ['small', 'large'],
    showIcon: [true],
    slot: [''],
    isIconOnly: [true],
    hasLeadingIcon: [false],
    variant: ['information', 'success', 'error', 'warning', 'brand-05'],
    isStrong: [true, false],
    isDimmed: [true, false],
};

// Icon with text variant stories
const iconWithTextPropsMatrix: Partial<Record<keyof TagProps, unknown[]>> = {
    size: ['small', 'large'],
    showIcon: [true],
    slot: ['Label'],
    isIconOnly: [false],
    hasLeadingIcon: [true],
    variant: ['information', 'success', 'error', 'warning', 'brand-05'],
    isStrong: [true, false],
    isDimmed: [true, false],
};

// Custom styled tags using CSS parts
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
        font-size: calc(var(--dt-font-size-12) * 1px);
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
`;

const CombinedCustomTemplate: TemplateFunction<TagProps> = (args) => html`
    <div style="text-align: center;">
        <style>${allCustomStyles}</style>
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

const createCombinedCustomStory = createStory<TagProps>(CombinedCustomTemplate, defaultArgs);

// Debug story for raw SVG testing
const RawSVGSlotTemplate: TemplateFunction<TagProps> = () => html`
    <div style="display: flex; flex-direction: column; gap: 8px; align-items: flex-start;">
        <div style="text-align: left;">
            <h4 style="margin: 0 0 4px 0; font-size: 14px;">Large Tag</h4>
            <pie-tag size="large" variant="brand-04" isStrong has-leading-icon>
                <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 2a6 6 0 100 12A6 6 0 008 2zM7 7V5h2v2H7zm0 4V9h2v2H7z"/>
                </svg>
                Label
            </pie-tag>
        </div>

        <div style="text-align: left;">
            <h4 style="margin: 0 0 4px 0; font-size: 14px;">Small Tag</h4>
            <pie-tag size="small" variant="brand-04" isStrong has-leading-icon>
                <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 2a6 6 0 100 12A6 6 0 008 2zM7 7V5h2v2H7zm0 4V9h2v2H7z"/>
                </svg>
                Label
            </pie-tag>
        </div>

        <div style="text-align: left;">
            <h4 style="margin: 0 0 4px 0; font-size: 14px;">Large Icon Only</h4>
            <pie-tag size="large" variant="brand-04" isStrong is-icon-only>
                <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 2a6 6 0 100 12A6 6 0 008 2zM7 7V5h2v2H7zm0 4V9h2v2H7z"/>
                </svg>
            </pie-tag>
        </div>

        <div style="text-align: left;">
            <h4 style="margin: 0 0 4px 0; font-size: 14px;">Small Icon Only</h4>
            <pie-tag size="small" variant="brand-04" isStrong is-icon-only>
                <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 2a6 6 0 100 12A6 6 0 008 2zM7 7V5h2v2H7zm0 4V9h2v2H7z"/>
                </svg>
            </pie-tag>
        </div>
    </div>
`;

const createRawSVGSlotStory = createStory<TagProps>(RawSVGSlotTemplate, defaultArgs);

const TextTruncationTemplate: TemplateFunction<TagProps> = () => html`
    <div style="display: flex; flex-direction: column; gap: 24px; align-items: flex-start;">
        <div style="text-align: left;">
            <h4 style="margin: 0 0 8px 0; font-size: 14px;">Large Tags Without Icon - Different Max-Widths</h4>
            <div style="display: flex; flex-direction: column; gap: 8px;">
                <div style="max-width: 150px;">
                    <pie-tag size="large" variant="information" style="width: 100%;">
                        This is a very long text that should be truncated with ellipsis
                    </pie-tag>
                </div>
                <div style="max-width: 100px;">
                    <pie-tag size="large" variant="information" style="width: 100%;">
                        This is a very long text that should be truncated with ellipsis
                    </pie-tag>
                </div>
                <div style="max-width: 50px;">
                    <pie-tag size="large" variant="information" style="width: 100%;">
                        This is a very long text that should be truncated with ellipsis
                    </pie-tag>
                </div>
            </div>
        </div>

        <div style="text-align: left;">
            <h4 style="margin: 0 0 8px 0; font-size: 14px;">Large Tags With Icon - Different Max-Widths</h4>
            <div style="display: flex; flex-direction: column; gap: 8px;">
                <div style="max-width: 150px;">
                    <pie-tag size="large" variant="information" style="width: 100%;" has-leading-icon>
                        <icon-info-circle slot="icon"></icon-info-circle>
                        This is a very long text that should be truncated with ellipsis
                    </pie-tag>
                </div>
                <div style="max-width: 100px;">
                    <pie-tag size="large" variant="information" style="width: 100%;" has-leading-icon>
                        <icon-info-circle slot="icon"></icon-info-circle>
                        This is a very long text that should be truncated with ellipsis
                    </pie-tag>
                </div>
                <div style="max-width: 50px;">
                    <pie-tag size="large" variant="information" style="width: 100%;" has-leading-icon>
                        <icon-info-circle slot="icon"></icon-info-circle>
                        This is a very long text that should be truncated with ellipsis
                    </pie-tag>
                </div>
            </div>
        </div>

        <div style="text-align: left;">
            <h4 style="margin: 0 0 8px 0; font-size: 14px;">Small Tags Without Icon - Different Max-Widths</h4>
            <div style="display: flex; flex-direction: column; gap: 8px;">
                <div style="max-width: 150px;">
                    <pie-tag size="small" variant="information" style="width: 100%;">
                        This is a very long text that should be truncated with ellipsis
                    </pie-tag>
                </div>
                <div style="max-width: 100px;">
                    <pie-tag size="small" variant="information" style="width: 100%;">
                        This is a very long text that should be truncated with ellipsis
                    </pie-tag>
                </div>
                <div style="max-width: 50px;">
                    <pie-tag size="small" variant="information" style="width: 100%;">
                        This is a very long text that should be truncated with ellipsis
                    </pie-tag>
                </div>
            </div>
        </div>

        <div style="text-align: left;">
            <h4 style="margin: 0 0 8px 0; font-size: 14px;">Small Tags With Icon - Different Max-Widths</h4>
            <div style="display: flex; flex-direction: column; gap: 8px;">
                <div style="max-width: 150px;">
                    <pie-tag size="small" variant="information" style="width: 100%;" has-leading-icon>
                        <icon-info-circle slot="icon"></icon-info-circle>
                        This is a very long text that should be truncated with ellipsis
                    </pie-tag>
                </div>
                <div style="max-width: 100px;">
                    <pie-tag size="small" variant="information" style="width: 100%;" has-leading-icon>
                        <icon-info-circle slot="icon"></icon-info-circle>
                        This is a very long text that should be truncated with ellipsis
                    </pie-tag>
                </div>
                <div style="max-width: 50px;">
                    <pie-tag size="small" variant="information" style="width: 100%;" has-leading-icon>
                        <icon-info-circle slot="icon"></icon-info-circle>
                        This is a very long text that should be truncated with ellipsis
                    </pie-tag>
                </div>
            </div>
        </div>
    </div>
`;

const createTextTruncationStory = createStory<TagProps>(TextTruncationTemplate, defaultArgs);

const TranslucentOverImageTemplate: TemplateFunction<TagProps> = () => html`
    <div style="display: flex; flex-direction: column; gap: 24px; align-items: flex-start;">
        <div style="text-align: left;">
            <h4 style="margin: 0 0 8px 0; font-size: 14px;">Translucent Tags Over Gradient</h4>
            <div style="
                position: relative;
                background: linear-gradient(to right, #667eea, #764ba2, #f093fb, #f5576c, #4facfe, #00f2fe);
                border-radius: 8px;
                display: flex;
                flex-direction: column;
                gap: 16px;
                padding: 24px;
                align-items: flex-start;
                width: max-content;
            ">
                <pie-tag variant="translucent" size="large" has-leading-icon>
                    <icon-info-circle slot="icon"></icon-info-circle>
                    Large with icon
                </pie-tag>
                <pie-tag variant="translucent" size="large">
                    Large without icon
                </pie-tag>
                <pie-tag variant="translucent" size="small" has-leading-icon>
                    <icon-info-circle slot="icon"></icon-info-circle>
                    Small with icon
                </pie-tag>
                <pie-tag variant="translucent" size="small">
                    Small without icon
                </pie-tag>
                <pie-tag variant="translucent" size="large" isDimmed has-leading-icon>
                    <icon-info-circle slot="icon"></icon-info-circle>
                    Dimmed large with icon
                </pie-tag>
                <pie-tag variant="translucent" size="large" isDimmed>
                    Dimmed large without icon
                </pie-tag>
                <pie-tag variant="translucent" size="small" isDimmed has-leading-icon>
                    <icon-info-circle slot="icon"></icon-info-circle>
                    Dimmed small with icon
                </pie-tag>
                <pie-tag variant="translucent" size="small" isDimmed>
                    Dimmed small without icon
                </pie-tag>

                <pie-tag variant="translucent" size="large" is-icon-only>
                    <icon-info-circle slot="icon"></icon-info-circle>
                </pie-tag>

                <pie-tag variant="translucent" size="large" isDimmed is-icon-only>
                    <icon-info-circle slot="icon"></icon-info-circle>
                </pie-tag>
            </div>
        </div>
    </div>
`;

const createTranslucentOverImageStory = createStory<TagProps>(TranslucentOverImageTemplate, defaultArgs);

export const NeutralVariations = createVariantStory<TagProps>(Template, neutralPropsMatrix);
export const InformationVariations = createVariantStory<TagProps>(Template, informationPropsMatrix);
export const SuccessVariations = createVariantStory<TagProps>(Template, successPropsMatrix);
export const ErrorVariations = createVariantStory<TagProps>(Template, errorPropsMatrix);
export const WarningVariations = createVariantStory<TagProps>(Template, warningPropsMatrix);
export const NeutralAlternativeVariations = createVariantStory<TagProps>(Template, neutralAlternativePropsMatrix, { bgColor: 'dark (container-dark)' });
export const OutlineVariations = createVariantStory<TagProps>(Template, outlinePropsMatrix);
export const GhostVariations = createVariantStory<TagProps>(Template, ghostPropsMatrix);
export const TranslucentVariations = createVariantStory<TagProps>(Template, translucentPropsMatrix, { bgColor: 'brand orange' });
export const Brand02Variations = createVariantStory<TagProps>(Template, brand02PropsMatrix);
export const Brand03Variations = createVariantStory<TagProps>(Template, brand03PropsMatrix);
export const Brand04Variations = createVariantStory<TagProps>(Template, brand04PropsMatrix);
export const Brand05Variations = createVariantStory<TagProps>(Template, brand05PropsMatrix);
export const Brand06Variations = createVariantStory<TagProps>(Template, brand06PropsMatrix);
export const Brand08Variations = createVariantStory<TagProps>(Template, brand08PropsMatrix);
export const IconOnlyVariations = createVariantStory<TagProps>(Template, iconOnlyPropsMatrix);
export const IconWithTextVariations = createVariantStory<TagProps>(Template, iconWithTextPropsMatrix);
export const RawSVGSlot = createRawSVGSlotStory({}, {
    controls: { disable: true },
});
export const TextTruncation = createTextTruncationStory({}, {
    controls: { disable: true },
});
export const CustomStyledTags = createCombinedCustomStory({}, {
    bgColor: 'dark (container-dark)',
    controls: { disable: true },
});
export const TranslucentOverImage = createTranslucentOverImageStory({}, {
    controls: { disable: true },
});
