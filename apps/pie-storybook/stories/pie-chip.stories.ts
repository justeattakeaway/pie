import { html } from 'lit';

/* eslint-disable import/no-duplicates */
import '@justeattakeaway/pie-chip';
import { ChipProps as ChipPropsBase, variants } from '@justeattakeaway/pie-chip';
/* eslint-enable import/no-duplicates */

import type { StoryMeta, SlottedComponentProps } from '../types';
import { createStory, type TemplateFunction, sanitizeAndRenderHTML } from '../utilities';

type ChipProps = SlottedComponentProps<ChipPropsBase>;
type ChipStoryMeta = StoryMeta<ChipProps>;

const defaultArgs: ChipProps = {
    variant: 'default',
    disabled: false,
    isSelected: false,
    isLoading: false,
    slot: 'String'
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

const Template: TemplateFunction<ChipProps> = ({
    variant,
    disabled,
    isSelected,
    isLoading,
    slot
}) => html`
           <pie-chip
                variant="${variant}"
                ?disabled="${disabled}"
                ?isSelected="${isSelected}"
                ?isLoading="${isLoading}">
                    ${sanitizeAndRenderHTML(slot)}
           </pie-chip>`;

const createCardStory = createStory<ChipProps>(Template, defaultArgs);

export const Default = createCardStory();
export const Outline = createCardStory({ variant: 'outline' });
export const Ghost = createCardStory({ variant: 'ghost' });
