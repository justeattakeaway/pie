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

type ChipProps = Omit<SlottedComponentProps<ChipPropsBase>, 'aria'> & { showIcon: boolean };
type ChipStoryMeta = Meta<ChipProps>;

const defaultArgs: ChipProps = {
    ...defaultProps,
    showIcon: false,
    slot: 'String',
};

const chipStoryMeta: ChipStoryMeta & { showInTestingDeployment?: boolean } = {
    title: 'Chip',
    showInTestingDeployment: true,
    component: 'pie-chip'
};

export default chipStoryMeta;

const clickAction = action('clicked');
const closeAction = action('pie-chip-close');

const Template: TemplateFunction<ChipProps> = ({
    disabled,
    isSelected,
    isLoading,
    isDismissible,
    showIcon,
    slot,
    variant,
}) => html`
           <pie-chip
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

export const DefaultPropVariations = createVariantStory<ChipProps>(Template, defaultPropOptions);
export const GhostPropVariations = createVariantStory<ChipProps>(Template, ghostPropOptions);
export const OutlinePropVariations = createVariantStory<ChipProps>(Template, outlinePropOptions);