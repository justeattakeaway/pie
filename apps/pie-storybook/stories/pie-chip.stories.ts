import { html, nothing } from 'lit';
import { action } from '@storybook/addon-actions';

/* eslint-disable import/no-duplicates */
import '@justeattakeaway/pie-chip';
import { ChipProps as ChipPropsBase, variants } from '@justeattakeaway/pie-chip';
/* eslint-enable import/no-duplicates */
import '@justeattakeaway/pie-icons-webc/IconHeartFilled';

import type { StoryMeta, SlottedComponentProps } from '../types';
import { createStory, type TemplateFunction, sanitizeAndRenderHTML } from '../utilities';

type ChipProps = SlottedComponentProps<ChipPropsBase> & { showIcon: boolean };
type ChipStoryMeta = StoryMeta<ChipProps>;

const defaultArgs: ChipProps = {
    variant: 'default',
    disabled: false,
    isSelected: false,
    isLoading: false,
    isDismissible: false,
    showIcon: false,
    slot: 'String',
};

const chipStoryMeta: ChipStoryMeta = {
    title: 'Chip',
    component: 'pie-chip',
    argTypes: {
        variant: {
            description: 'Set the variant of the chip.',
            control: 'select',
            options: variants,
            defaultValue: {
                summary: 'default',
            },
        },
        disabled: {
            description: 'If `true`, disables the chip.',
            control: 'boolean',
            defaultValue: {
                summary: false,
            },
        },
        isSelected: {
            description: 'If `true`, the chip element will apply the selected styles.',
            control: 'boolean',
            defaultValue: {
                summary: false,
            },
        },
        isLoading: {
            description: 'If `true`, displays a loading indicator inside the chip.',
            control: 'boolean',
            defaultValue: {
                summary: false,
            },
        },
        isDismissible: {
            description: 'If `true`, displays a close icon to dismiss the chip component. <br /><br /> Can be only used if `isSelected` is set to true',
            control: 'boolean',
            defaultValue: {
                summary: false,
            },
            if: { arg: 'isSelected', eq: true },
        },
        showIcon: {
            description: 'Enable to see the example of Chip with icon.',
            control: 'boolean',
            defaultValue: {
                summary: false,
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

const closeAction = action('pie-chip-close');

const Template: TemplateFunction<ChipProps> = ({
    variant,
    disabled,
    isSelected,
    isLoading,
    isDismissible,
    showIcon,
    slot,
}) => html`
           <pie-chip
                variant="${variant}"
                ?disabled="${disabled}"
                ?isSelected="${isSelected}"
                ?isLoading="${isLoading}"
                ?isDismissible="${isDismissible}"
                @pie-chip-close="${closeAction}">
                    ${showIcon ? html`<icon-heart-filled slot="icon"></icon-heart-filled>` : nothing}
                    ${sanitizeAndRenderHTML(slot)}
           </pie-chip>`;

const createCardStory = createStory<ChipProps>(Template, defaultArgs);

export const Default = createCardStory();
export const Outline = createCardStory({ variant: 'outline' });
export const Ghost = createCardStory({ variant: 'ghost' });
