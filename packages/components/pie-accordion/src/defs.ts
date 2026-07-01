import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export const headingLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;
export const sizes = ['auto', 'narrow', 'wide'] as const;

export interface AccordionProps {
    /**
     * When true, the accordion panel is expanded.
     */
    isOpen?: boolean;
    /**
     * The text content for the accordion heading button.
     */
    headingLabel: string;
    /**
     * The HTML heading element level to use for the trigger wrapper (h1-h6).
     * Defaults to h2.
     */
    headingLevel?: typeof headingLevels[number];
    /**
     * Optional secondary line of text displayed below the heading label.
     */
    secondaryLabel?: string;
    /**
     * Controls the responsive layout behaviour.
     * 'auto' responds to container width via CSS container queries;
     * 'narrow' and 'wide' force the respective layout.
     */
    size?: typeof sizes[number];
    /**
     * When true, applies reduced-emphasis typography to the heading.
     */
    isEmphasisReduced?: boolean;
    /**
     * When true, hides the pie-divider at the bottom of the accordion.
     */
    isDividerHidden?: boolean;
}

export type AccordionToggleDetail = {
    isOpen: boolean;
};

export type DefaultProps = ComponentDefaultProps<AccordionProps, keyof Omit<AccordionProps, 'secondaryLabel'>>;

export const defaultProps: DefaultProps = {
    isOpen: false,
    headingLabel: '',
    headingLevel: 'h2',
    size: 'auto',
    isEmphasisReduced: false,
    isDividerHidden: false,
};
