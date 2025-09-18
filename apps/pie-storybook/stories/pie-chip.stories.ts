import { html, nothing } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { action } from '@storybook/addon-actions';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-chip';
import {
    type ChipProps as ChipPropsBase, variants, types, defaultProps, type PieChip,
} from '@justeattakeaway/pie-chip';
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
    type: 'button',
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
        type: {
            description: 'Set the type of the chip.',
            control: 'select',
            options: types,
            defaultValue: {
                summary: defaultProps.type,
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

const closeAction = action('close');
const changeAction = action('change');
const clickAction = action('click');

const Template: TemplateFunction<ChipProps> = ({
    aria,
    disabled,
    isSelected,
    isLoading,
    isDismissible,
    showIcon,
    slot,
    variant,
    type,
}) => html`
        <pie-chip
                .aria="${aria}"
                ?disabled="${disabled}"
                ?isSelected="${isSelected}"
                ?isLoading="${isLoading}"
                ?isDismissible="${isDismissible}"
                variant="${ifDefined(variant)}"
                type="${ifDefined(type)}"
                @close="${closeAction}"
                @change=${type === 'checkbox' ? changeAction : nothing}
                @click=${type === 'button' ? clickAction : nothing}>
                    ${showIcon ? html`<icon-heart-filled slot="icon"></icon-heart-filled>` : nothing}
                    ${sanitizeAndRenderHTML(slot)}
        </pie-chip>`;

const createChipStory = createStory<ChipProps>(Template, defaultArgs);

export const Default = createChipStory();
export const Outline = createChipStory({ variant: 'outline' });
export const Ghost = createChipStory({ variant: 'ghost' });

const handleCheckboxChange = (event: Event) => {
    const chip = event.currentTarget as PieChip;
    chip.isSelected = !chip.isSelected;
    changeAction({ isSelected: chip.isSelected, label: chip.textContent?.trim() });
};

const CheckboxGroupTemplate: TemplateFunction<ChipProps> = () => html`
    <fieldset style="border: none; padding: 0;">
        <legend style="padding-bottom: 8px; font-weight: bold;">Select your interests (multi-select)</legend>
        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            <pie-chip type="checkbox" @change=${handleCheckboxChange}>Chip 1</pie-chip>
            <pie-chip type="checkbox" ?isSelected=${true} @change=${handleCheckboxChange}>Chip 2</pie-chip>
            <pie-chip type="checkbox" ?disabled=${true}>Chip 3 (Disabled)</pie-chip>
            <pie-chip type="checkbox" ?disabled=${true} ?isSelected=${true}>Chip 4 (Disabled and Selected)</pie-chip>
            <pie-chip type="checkbox" @change=${handleCheckboxChange}>
                <icon-heart-filled slot="icon"></icon-heart-filled>
                Chip 5
            </pie-chip>
            <pie-chip type="checkbox" ?isSelected=${true} @change=${handleCheckboxChange}>
                <icon-heart-filled slot="icon"></icon-heart-filled>
                Chip 6
            </pie-chip>
        </div>
    </fieldset>
`;

export const SelectableCheckboxGroup = createStory<ChipProps>(CheckboxGroupTemplate, defaultArgs)();

const ButtonGroupTemplate: TemplateFunction<ChipProps> = () => {
    const handleButtonClick = (event: MouseEvent) => {
        const clickedChip = (event.target as HTMLElement).closest('pie-chip') as PieChip;

        if (!clickedChip || clickedChip.disabled) {
            return;
        }

        const wasSelected = clickedChip.isSelected;
        const group = clickedChip.parentElement;

        // Deselect all chips in the group
        group?.querySelectorAll('pie-chip').forEach((chip: any) => {
            chip.isSelected = false;
        });

        // Toggle the selected state of the clicked chip
        clickedChip.isSelected = !wasSelected;

        // Log the action to the Storybook actions panel
        clickAction({ isSelected: clickedChip.isSelected, label: clickedChip.textContent?.trim() });
    };

    return html`
        <div style="font-family: sans-serif; font-size: 14px; margin-bottom: 8px;">This group uses a single event listener on the container to manage selection (single-select with toggle off).</div>
        <div style="display: flex; flex-wrap: wrap; gap: 8px;" @click=${handleButtonClick}>
            <pie-chip type="button">Chip 1</pie-chip>
            <pie-chip type="button">Chip 2</pie-chip>
            <pie-chip type="button" ?disabled=${true}>Chip 3 (Disabled)</pie-chip>
            <pie-chip type="button">
                <icon-heart-filled slot="icon"></icon-heart-filled>
                Chip 4
            </pie-chip>
            <pie-chip type="button">
                <icon-heart-filled slot="icon"></icon-heart-filled>
                Chip 5
            </pie-chip>
        </div>
    `;
};

export const ButtonGroup = createStory<ChipProps>(ButtonGroupTemplate, defaultArgs)();
