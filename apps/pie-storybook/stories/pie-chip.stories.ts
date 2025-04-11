import { html, nothing } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { action } from '@storybook/addon-actions';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-chip';
import { type ChipProps as ChipPropsBase, variants, defaultProps } from '@justeattakeaway/pie-chip';
import '@justeattakeaway/pie-icons-webc/dist/IconHeartFilled.js';

import { type SlottedComponentProps } from '../types';
import { createStory, type TemplateFunction, sanitizeAndRenderHTML } from '../utilities';

type ChipProps = SlottedComponentProps<ChipPropsBase> & { showIcon: boolean };
type ChipStoryMeta = Meta<ChipProps>;

const defaultArgs: ChipProps = {
    ...defaultProps,
    aria: {
        label: 'Chip Label',
        close: 'Chip Close',
    },
    showIcon: false,
    slot: 'String',
};

const chipStoryMeta: ChipStoryMeta = {
    title: 'Components/Chip',
    component: 'pie-chip',
    argTypes: {
        aria: {
            description: 'The ARIA labels used for various parts of the chip.',
            control: 'object',
        },
        variant: {
            description: 'Set the variant of the chip.',
            control: 'select',
            options: variants,
            defaultValue: {
                summary: defaultProps.variant,
            },
        },
        disabled: {
            description: 'If `true`, disables the chip.',
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.disabled,
            },
        },
        isSelected: {
            description: 'If `true`, the chip element will apply the selected styles.',
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.isSelected,
            },
        },
        isLoading: {
            description: 'If `true`, displays a loading indicator inside the chip.',
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.isLoading,
            },
        },
        isDismissible: {
            description: 'If `true`, displays a close icon to dismiss the chip component. <br /><br /> Can be only used if `isSelected` is set to true',
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.isDismissible,
            },
            if: { arg: 'isSelected', eq: true },
        },
        showIcon: {
            description: 'Enable to see the example of Chip with icon.',
            control: 'boolean',
            defaultValue: {
                summary: defaultArgs.showIcon,
            },
        },
        slot: {
            description: 'Content to place within the chip',
            control: 'text',
        },
    },
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OOgnT2oNMdGFytj5AanYvt/%5BCore%5D-Web-Component-Documentation-%5BPIE-3%5D?type=design&node-id=575-6726&mode=design&t=axoB6cYrus8n0tdC-0',
        },
    },
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

const createChipStory = createStory<ChipProps>(Template, defaultArgs);

export const Default = createChipStory();
export const Outline = createChipStory({ variant: 'outline' });

export const Ghost = createChipStory({ variant: 'ghost' });
