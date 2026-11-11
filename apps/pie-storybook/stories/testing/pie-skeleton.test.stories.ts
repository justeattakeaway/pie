import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-webc/components/skeleton';
import {
    type SkeletonProps,
    defaultProps,
    variants,
    backgroundColors,
    borderRadii,
    aspectRatios,
    buttonSizes,
} from '@justeattakeaway/pie-webc/components/skeleton';

import { createStory, createVariantStory, type TemplateFunction } from '../../utilities';
import { typographyIdentifiers } from '../../utilities/typographyIdentifiers';

type SkeletonStoryMeta = Meta<SkeletonProps>;

// `width` and `height` are omitted from `defaultProps` (they have no default), but they must be
// present in the story args for the browser tests to set them through the story URL. `height` is
// left undefined so the box keeps its default 1:1 aspect ratio.
const defaultArgs: SkeletonProps = {
    ...defaultProps,
    width: '200px',
    height: undefined,
};

const skeletonStoryMeta: SkeletonStoryMeta = {
    title: 'Skeleton',
    component: 'pie-skeleton',
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/design/9CUn6OqiHWmpr9dg3lzysI/-Web-component-audit--Skeleton?node-id=345-32232',
        },
    },
};

export default skeletonStoryMeta;

const Template: TemplateFunction<SkeletonProps> = ({
    variant,
    backgroundColor,
    width,
    height,
    lines,
    stars,
    borderRadius,
    aspectRatio,
    isResponsive,
}) => html`
    <pie-skeleton
        variant="${ifDefined(variant)}"
        backgroundColor="${ifDefined(backgroundColor)}"
        width="${ifDefined(width)}"
        height="${ifDefined(height)}"
        lines="${ifDefined(lines)}"
        stars="${ifDefined(stars)}"
        borderRadius="${ifDefined(borderRadius)}"
        aspectRatio="${ifDefined(aspectRatio)}"
        ?isResponsive="${isResponsive}">
    </pie-skeleton>`;

export const Default = createStory<SkeletonProps>(Template, defaultArgs)();

// Every variant, using each variant's default height.
export const Variants = createVariantStory<SkeletonProps>(Template, {
    variant: [...variants],
}, { multiColumn: true });

// Every background colour across all variants, shown on a neutral grey container rather than the
// default white, so the light-mode skeleton colours (including the white subtle one) stand out.
export const BackgroundColors = createVariantStory<SkeletonProps>(Template, {
    variant: [...variants],
    backgroundColor: [...backgroundColors],
}, { multiColumn: true, bgColor: 'grey-80%-L' });

// Every available text height (typography identifier), except the redundant strong/italic variants.
export const TextHeights = createVariantStory<SkeletonProps>(Template, {
    variant: ['text'],
    height: typographyIdentifiers,
    lines: [3],
}, { multiColumn: true });

// Number of text lines, including the single-line and maximum cases.
export const TextLines = createVariantStory<SkeletonProps>(Template, {
    variant: ['text'],
    height: ['font-body-l'],
    lines: [1, 3, 10],
}, { multiColumn: true });

// Spacing identifier heights across the variants that accept them.
export const SpacingHeights = createVariantStory<SkeletonProps>(Template, {
    variant: ['box', 'circle', 'pill', 'star'],
    height: ['spacing-b', 'spacing-e', 'spacing-i'],
}, { multiColumn: true });

// Absolute and percentage widths.
export const Widths = createVariantStory<SkeletonProps>(Template, {
    variant: ['box', 'pill'],
    width: ['100%', '50%', '120px'],
}, { multiColumn: true });

// Pill heights matching each pie-button size, with and without isResponsive.
export const PillButtonHeights = createVariantStory<SkeletonProps>(Template, {
    variant: ['pill'],
    height: [...buttonSizes],
    isResponsive: [false, true],
}, { multiColumn: true });

// Star sizes as absolute values and spacing identifiers, for a single star and a full row.
export const StarSizes = createVariantStory<SkeletonProps>(Template, {
    variant: ['star'],
    height: ['16px', 'spacing-e'],
    stars: [1, 5],
}, { multiColumn: true });

// Box corner radius overrides.
export const BorderRadii = createVariantStory<SkeletonProps>(Template, {
    variant: ['box'],
    borderRadius: [...borderRadii],
}, { multiColumn: true });

// Box aspect ratios, including the portrait ones.
export const AspectRatios = createVariantStory<SkeletonProps>(Template, {
    variant: ['box'],
    aspectRatio: [...aspectRatios],
}, { multiColumn: true });

// Out-of-range lines are clamped to 1 to 10.
export const ClampedLines = createVariantStory<SkeletonProps>(Template, {
    variant: ['text'],
    height: ['font-body-l'],
    lines: [0, 12],
}, { multiColumn: true });

// Out-of-range stars are clamped to 1 to 10.
export const ClampedStars = createVariantStory<SkeletonProps>(Template, {
    variant: ['star'],
    stars: [0, 12],
}, { multiColumn: true });

// A composed list of skeleton rows (a copy of the `ListItems` story from the main stories file, with
// fewer rows), so the combined layout is available to the browser and visual tests.
const listRow = () => html`
    <div style="display: flex; align-items: flex-start; gap: 12px; padding-block: 12px; border-bottom: 1px solid var(--dt-color-divider-default);">
        <pie-skeleton variant="circle" height="40px"></pie-skeleton>
        <div style="flex: 1; display: grid; gap: 8px;">
            <pie-skeleton variant="text" height="font-body-l" lines="2"></pie-skeleton>
            <div style="display: flex;">
              <pie-skeleton variant="star" stars="5"></pie-skeleton>
            </div>
        </div>
        <pie-skeleton variant="text" height="font-body-l" lines="1" width="64px"></pie-skeleton>
    </div>`;

const ListItemsTemplate: TemplateFunction<SkeletonProps> = () => html`
    <div style="width: 360px; padding: 16px; background-color: var(--dt-color-container-default); border-radius: 12px;">
        <pie-skeleton variant="box" width="100%" height="56px"></pie-skeleton>
        <div style="margin-block-start: 8px;">
            ${Array.from({ length: 6 }, () => listRow())}
        </div>
    </div>`;

export const ListItems = ListItemsTemplate.bind({});
ListItems.parameters = {
    layout: 'padded',
    controls: { disable: true },
};
