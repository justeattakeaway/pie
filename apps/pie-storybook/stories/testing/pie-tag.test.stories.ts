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

import { type SlottedComponentProps } from '../../types';
import {
    createStory, createVariantStory, type TemplateFunction, sanitizeAndRenderHTML
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
};

export default tagStoryMeta;

const Template: TemplateFunction<TagProps> = ({
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

const icon = '<svg slot="icon" data-test-id="tag-icon" xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--plusCircle"><path d="M8.656 4.596H7.344v2.748H4.596v1.312h2.748v2.748h1.312V8.656h2.748V7.344H8.656V4.596Z"></path><path d="M12.795 3.205a6.781 6.781 0 1 0 0 9.625 6.79 6.79 0 0 0 0-9.625Zm-.927 8.662a5.469 5.469 0 1 1-7.734-7.735 5.469 5.469 0 0 1 7.734 7.736Z"></path></svg>';

// Individual variant stories
export const Default = createTagStory();
export const Neutral = createTagStory({ variant: 'neutral' });
export const NeutralAlternative = createTagStory({ variant: 'neutral-alternative' }, { bgColor: 'dark (container-dark)' });
export const Information = createTagStory({ variant: 'information' });
export const Success = createTagStory({ variant: 'success' });
export const Error = createTagStory({ variant: 'error' });
export const Outline = createTagStory({ variant: 'outline' });
export const Ghost = createTagStory({ variant: 'ghost' });
export const DefaultWithIcon = createTagStory({ slot: `Label ${icon}` });

// Base shared props matrix
const baseSharedPropsMatrix: Partial<Record<keyof TagProps, unknown[]>> = {
    size: [...sizes],
    iconPlacement: ['leading', 'trailing'],
    isStrong: [true, false],
    isInteractive: [true, false],
    disabled: [true, false],
    showIcon: [true, false],
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

export const NeutralVariations = createVariantStory<TagProps>(Template, neutralPropsMatrix);
export const InformationVariations = createVariantStory<TagProps>(Template, informationPropsMatrix);
export const SuccessVariations = createVariantStory<TagProps>(Template, successPropsMatrix);
export const ErrorVariations = createVariantStory<TagProps>(Template, errorPropsMatrix);
export const NeutralAlternativeVariations = createVariantStory<TagProps>(Template, neutralAlternativePropsMatrix, { bgColor: 'dark (container-dark)' });
export const OutlineVariations = createVariantStory<TagProps>(Template, outlinePropsMatrix);
export const GhostVariations = createVariantStory<TagProps>(Template, ghostPropsMatrix);
export const Brand02Variations = createVariantStory<TagProps>(Template, brand02PropsMatrix);
export const Brand03Variations = createVariantStory<TagProps>(Template, brand03PropsMatrix);
export const Brand04Variations = createVariantStory<TagProps>(Template, brand04PropsMatrix);
export const Brand05Variations = createVariantStory<TagProps>(Template, brand05PropsMatrix);
export const Brand06Variations = createVariantStory<TagProps>(Template, brand06PropsMatrix);
