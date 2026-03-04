import { html } from 'lit';
import { action } from '@storybook/addon-actions';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-popover';
import '@justeattakeaway/pie-button';
import {
    type PopoverProps, placements, defaultProps,
} from '@justeattakeaway/pie-popover';

import { createStory } from '../utilities';

type PopoverStoryMeta = Meta<PopoverProps>;

const defaultArgs: PopoverProps = {
    ...defaultProps,
    triggerSelector: '#popover-trigger',
};

const popoverStoryMeta: PopoverStoryMeta = {
    title: 'Components/Popover',
    component: 'pie-popover',
    argTypes: {
        isOpen: {
            description: 'When true, the popover is visible.',
            control: 'boolean',
            defaultValue: { summary: defaultProps.isOpen },
        },
        placement: {
            description: 'Preferred placement of the popover relative to the trigger.',
            control: 'select',
            options: placements,
            defaultValue: { summary: defaultProps.placement },
        },
        triggerSelector: {
            description: 'CSS selector for the trigger element. Used for positioning and returning focus on close.',
            control: 'text',
        },
    },
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
};

export default popoverStoryMeta;

const Template = ({ isOpen, placement, triggerSelector }: PopoverProps) => {
    const toggle = () => {
        const popover = document.querySelector<HTMLElement & PopoverProps>('pie-popover');
        if (popover) popover.isOpen = !popover.isOpen;
    };

    return html`
        <div style="padding: 200px; display: flex; justify-content: center;">
            <pie-button
                id="popover-trigger"
                @click="${toggle}">
                Toggle Popover
            </pie-button>
            <pie-popover
                .isOpen="${isOpen ?? false}"
                placement="${placement ?? defaultProps.placement}"
                triggerSelector="${triggerSelector ?? '#popover-trigger'}"
                @pie-popover-close="${action('pie-popover-close')}">
                <div style="padding: 8px; font-family: sans-serif;">
                    <p style="margin: 0 0 8px;">Popover content</p>
                    <pie-button size="small-productive" variant="ghost" @click="${toggle}">Close</pie-button>
                </div>
            </pie-popover>
        </div>
    `;
};

export const Default = createStory<PopoverProps>(Template, defaultArgs)();
