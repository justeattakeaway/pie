import { html, nothing } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { action } from '@storybook/addon-actions';
import '@justeattakeaway/pie-chip';
import '@justeattakeaway/pie-icons-webc/dist/IconHeartFilled.js';

import { type ChipProps as ChipPropsBase, variants, defaultProps } from '@justeattakeaway/pie-chip';
import { type Meta } from '@storybook/web-components';
import { type SlottedComponentProps } from '../../types';

import {
    createStory, createVariantStory, type TemplateFunction, sanitizeAndRenderHTML,
} from '../../utilities';

type ChipProps = SlottedComponentProps<ChipPropsBase> & {showIcon: boolean };
type ChipStoryMeta = Meta<ChipProps>;

const defaultArgs: ChipProps = {
    ...defaultProps,
    showIcon: false,
    slot: 'String',
};

const chipStoryMeta: ChipStoryMeta = {
    title: 'Chip',
    component: 'pie-chip'
};

export default chipStoryMeta;

const clickAction = action('clicked');
const closeAction = action('pie-chip-close');

const Template: TemplateFunction<ChipProps> = ({
    aria,
    disabled,
    isSelected,
    isLoading,
    isDismissible,
    showIcon,
    slot,
    variant,
}) => html`
           <pie-chip
                .aria="${aria}"
                ?disabled="${disabled}"
                ?isSelected="${isSelected}"
                ?isLoading="${isLoading}"
                ?isDismissible="${isDismissible}"
                variant="${ifDefined(variant)}"
                @pie-chip-close="${closeAction}"
                @click="${clickAction}">
                    ${showIcon ? html`<icon-heart-filled slot="icon"></icon-heart-filled>` : nothing}
                    ${sanitizeAndRenderHTML(slot)}
           </pie-chip>`;

// Define the prop options for the matrix
const sharedPropOptions = {
    disabled: [true, false],
    isSelected: [true, false],
    isLoading: [true, false],
    isDismissible: [true, false],
    showIcon: [true, false],
    slot: ['Hello World'],
};

const defaultPropOptions = {
    ...sharedPropOptions,
    variant: ['default'],
};

const ghostPropOptions = {
    ...sharedPropOptions,
    variant: ['ghost'],
};

const outlinePropOptions = {
    ...sharedPropOptions,
    variant: ['outline'],
};

const createChipStory = createStory<ChipProps>(Template, defaultArgs);

export const Default = createChipStory();
export const Outline = createChipStory({ variant: 'outline' });
export const Ghost = createChipStory({ variant: 'ghost' });

export const DefaultPropVariations = createVariantStory<Omit<ChipProps, 'aria'> >(Template, defaultPropOptions);
export const GhostPropVariations = createVariantStory<Omit<ChipProps, 'aria'>>(Template, ghostPropOptions);
export const OutlinePropVariations = createVariantStory<Omit<ChipProps, 'aria'>>(Template, outlinePropOptions);