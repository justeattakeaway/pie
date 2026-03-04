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

const LOREM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const ScrollableTemplate = ({ isOpen, placement, triggerSelector }: PopoverProps) => {
    const toggle = () => {
        const popover = document.querySelector<HTMLElement & PopoverProps>('pie-popover');
        if (popover) popover.isOpen = !popover.isOpen;
    };

    const paragraphs = Array.from({ length: 6 }, (_, i) => `<p style="margin: 0 0 16px; font-family: sans-serif; line-height: 1.6;">${LOREM}</p>`).join('');

    return html`
        <div style="max-width: 680px; margin: 0 auto; padding: 24px;">
            <div .innerHTML="${paragraphs}"></div>
            <div .innerHTML="${paragraphs}"></div>

            <div style="display: flex; justify-content: center; margin: 32px 0;">
                <pie-button
                    id="popover-trigger-scroll"
                    @click="${toggle}">
                    Toggle Popover
                </pie-button>
                <pie-popover
                    .isOpen="${isOpen ?? false}"
                    placement="${placement ?? defaultProps.placement}"
                    triggerSelector="${triggerSelector ?? '#popover-trigger-scroll'}"
                    @pie-popover-close="${action('pie-popover-close')}">
                    <div style="padding: 8px; font-family: sans-serif;">
                        <p style="margin: 0 0 8px;">Popover content</p>
                        <pie-button size="small-productive" variant="ghost" @click="${toggle}">Close</pie-button>
                    </div>
                </pie-popover>
            </div>
        </div>
    `;
};

export const Scrollable = createStory<PopoverProps>(
    ScrollableTemplate,
    { ...defaultArgs, triggerSelector: '#popover-trigger-scroll' },
)();

const MultipleTemplate = (_args: PopoverProps) => {
    // Consumers manage their own open/close state.
    // Here we close the other popover before opening the requested one,
    // demonstrating how to implement mutual exclusion without built-in singleton logic.
    const open = (openId: string, closeId: string) => {
        const toClose = document.querySelector<HTMLElement & PopoverProps>(`#${closeId}`);
        const toOpen = document.querySelector<HTMLElement & PopoverProps>(`#${openId}`);
        if (toClose) toClose.isOpen = false;
        if (toOpen) toOpen.isOpen = !toOpen.isOpen;
    };

    return html`
        <div style="padding: 200px; display: flex; justify-content: center; gap: 32px;">
            <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
                <pie-button
                    id="popover-trigger-a"
                    @click="${() => open('popover-a', 'popover-b')}">
                    Toggle Popover A
                </pie-button>
                <pie-popover
                    id="popover-a"
                    placement="bottom-start"
                    triggerSelector="#popover-trigger-a"
                    @pie-popover-close="${action('pie-popover-close (A)')}">
                    <div style="padding: 8px; font-family: sans-serif;">
                        <p style="margin: 0 0 8px;">Popover A content</p>
                        <pie-button size="small-productive" variant="ghost" @click="${() => open('popover-a', 'popover-b')}">Close</pie-button>
                    </div>
                </pie-popover>
            </div>

            <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
                <pie-button
                    id="popover-trigger-b"
                    @click="${() => open('popover-b', 'popover-a')}">
                    Toggle Popover B
                </pie-button>
                <pie-popover
                    id="popover-b"
                    placement="bottom-start"
                    triggerSelector="#popover-trigger-b"
                    @pie-popover-close="${action('pie-popover-close (B)')}">
                    <div style="padding: 8px; font-family: sans-serif;">
                        <p style="margin: 0 0 8px;">Popover B content</p>
                        <pie-button size="small-productive" variant="ghost" @click="${() => open('popover-b', 'popover-a')}">Close</pie-button>
                    </div>
                </pie-popover>
            </div>
        </div>
    `;
};

export const Multiple = createStory<PopoverProps>(
    MultipleTemplate,
    { ...defaultArgs },
)();

const HEBREW = 'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קלי קלי פרוטי להאמית, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אנטה איפסום פרימיס אין פאוסיבוס אורסי מונטס נסקטורר בוניס אולטריסס.';

const RtlTemplate = ({ isOpen, placement, triggerSelector }: PopoverProps) => {
    const toggle = () => {
        const popover = document.querySelector<HTMLElement & PopoverProps>('#popover-rtl');
        if (popover) popover.isOpen = !popover.isOpen;
    };

    return html`
        <div dir="rtl" style="padding: 200px; font-family: sans-serif; text-align: right;">
            <p style="margin: 0 0 16px; line-height: 1.6; max-width: 480px;">${HEBREW}</p>

            <pie-button
                id="popover-trigger-rtl"
                @click="${toggle}">
                פתח תפריט
            </pie-button>
            <pie-popover
                id="popover-rtl"
                dir="rtl"
                .isOpen="${isOpen ?? false}"
                placement="${placement ?? defaultProps.placement}"
                triggerSelector="${triggerSelector ?? '#popover-trigger-rtl'}"
                @pie-popover-close="${action('pie-popover-close')}">
                <div style="padding: 8px; font-family: sans-serif; direction: rtl; text-align: right;">
                    <p style="margin: 0 0 8px;">תוכן הפופאובר</p>
                    <p style="margin: 0 0 8px; font-size: 0.875em; color: #666;">זהו תוכן לדוגמה בעברית.</p>
                    <pie-button size="small-productive" variant="ghost" @click="${toggle}">סגור</pie-button>
                </div>
            </pie-popover>

            <p style="margin: 16px 0 0; line-height: 1.6; max-width: 480px;">${HEBREW}</p>
        </div>
    `;
};

export const Rtl = createStory<PopoverProps>(
    RtlTemplate,
    { ...defaultArgs, triggerSelector: '#popover-trigger-rtl' },
)();
