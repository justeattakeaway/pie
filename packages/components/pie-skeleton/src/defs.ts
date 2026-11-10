import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export const variants = ['box', 'circle', 'pill', 'text', 'star'] as const;

export const backgroundColors = ['default', 'strong', 'subtle'] as const;

export const backgroundColorClassNames: Record<typeof backgroundColors[number], string> = {
    default: 'c-skeleton--backgroundDefault',
    strong: 'c-skeleton--backgroundStrong',
    subtle: 'c-skeleton--backgroundSubtle',
};

export const aspectRatios = ['1by1', '4by3', '16by9', '3by4', '9by16'] as const;

export const borderRadii = [
    'radius-rounded-none',
    'radius-rounded-a',
    'radius-rounded-b',
    'radius-rounded-c',
    'radius-rounded-d',
    'radius-rounded-e',
    'radius-rounded-f',
    'radius-rounded-g',
] as const;

/**
 * The `pie-button` size names accepted by the `pill` variant's `height`.
 */
export const buttonSizes = [
    'button-xsmall',
    'button-small-productive',
    'button-small-expressive',
    'button-medium',
    'button-large',
] as const;

/**
 * The lettered spacing tokens accepted as a `height`, written as the token name without the
 * `--dt-` prefix (e.g. `spacing-e`). The numbered base tokens (`--dt-spacing-24`, etc.) are not supported.
 */
export const spacingIdentifiers = [
    'spacing-none',
    'spacing-a-small',
    'spacing-a',
    'spacing-b',
    'spacing-c',
    'spacing-d',
    'spacing-e',
    'spacing-f',
    'spacing-g',
    'spacing-h',
    'spacing-i',
    'spacing-j',
] as const;

/** The minimum number of lines the `text` variant can draw. */
export const LINES_MIN = 1;
/** The maximum number of lines the `text` variant can draw. */
export const LINES_MAX = 10;
/** The minimum number of stars the `star` variant can draw. */
export const STARS_MIN = 1;
/** The maximum number of stars the `star` variant can draw. */
export const STARS_MAX = 10;

export interface SkeletonProps {
    /**
     * The shape the skeleton draws: a box, a circle, a pill, a block of text lines or a row of stars.
     */
    variant?: typeof variants[number];

    /**
     * The background colour. `strong` is darker (for nested levels) and `subtle` is lighter (for nested levels or darker surfaces).
     */
    backgroundColor?: typeof backgroundColors[number];

    /**
     * The width of the skeleton. Accepts an absolute value (e.g. `120px`) or a percentage of the container (e.g. `50%`).
     * Ignored by the `circle` and `star` variants.
     */
    width?: string;

    /**
     * The height of the skeleton. The accepted formats depend on the variant. See the component documentation for the full list.
     */
    height?: string;

    /**
     * The number of text lines to draw. Applies to the `text` variant only. Values are clamped between 1 and 10.
     */
    lines?: number;

    /**
     * The number of stars to draw. Applies to the `star` variant only. Values are clamped between 1 and 10.
     */
    stars?: number;

    /**
     * The corner radius of the `box` variant, as a radius token identifier (e.g. `radius-rounded-b`).
     * Ignored by the `text`, `pill`, `circle` and `star` variants.
     */
    borderRadius?: typeof borderRadii[number];

    /**
     * The aspect ratio of the `box` variant. Ignored when both `width` and `height` are set.
     */
    aspectRatio?: typeof aspectRatios[number];

    /**
     * When true, a `pill` with a `button-*` height switches to the wide button height above the `md` breakpoint,
     * matching `pie-button`. Ignored otherwise.
     */
    isResponsive?: boolean;
}

export type DefaultProps = ComponentDefaultProps<SkeletonProps, keyof Omit<SkeletonProps, 'width' | 'height'>>;

export const defaultProps: DefaultProps = {
    variant: 'box',
    backgroundColor: 'default',
    lines: 1,
    stars: 1,
    borderRadius: 'radius-rounded-b',
    aspectRatio: '1by1',
    isResponsive: false,
};
