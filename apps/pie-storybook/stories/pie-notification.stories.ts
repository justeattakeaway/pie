import { html } from 'lit';
/* eslint-disable import/no-duplicates */
import '@justeattakeaway/pie-notification';
import { action } from '@storybook/addon-actions';
import { NotificationProps as NotificationBaseProps, variants, headingLevels, positions } from '@justeattakeaway/pie-notification';
/* eslint-enable import/no-duplicates */

import { type StoryMeta, SlottedComponentProps } from '../types';
import { createStory, type TemplateFunction } from '../utilities';

type NotificationProps = SlottedComponentProps<NotificationBaseProps>;
type NotificationStoryMeta = StoryMeta<NotificationProps>;

const defaultArgs: NotificationProps = {
    isOpen: true,
    variant: 'neutral',
    position: 'inline-content',
    isDismissible: true,
    isCompact: false,
    slot: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet tincidunt est, vitae vulputate turpis. Cras pretium venenatis elementum. Duis tristique neque non varius tempor. In hac habitasse platea dictumst. Aenean accumsan vehicula urna.',
    heading: 'Title',
    headingLevel: 'h2',
    hideIcon: false,
    leadingAction: {
        text: 'Confirm',
        ariaLabel: 'Descriptive confirmation text',
    },
    supportingAction: {
        text: 'Cancel',
        ariaLabel: 'Descriptive cancellation text',
    },
    hasStackedActions: false,
};

const notificationStoryMeta: NotificationStoryMeta = {
    title: 'Notification',
    component: 'pie-notification',
    argTypes: {
        isOpen: {
            description: 'When true, the notification is set to be open and visible.',
            control: 'boolean',
            defaultValue: {
                summary: true,
            },
        },
        variant: {
            description: 'Set the variant of the notification.',
            control: 'select',
            options: variants,
            defaultValue: {
                summary: 'neutral',
            },
        },
        position: {
            description: 'Notifications can appear anywhere inline within the content or full width which should appear at the top of the interface, under the header',
            control: 'select',
            options: positions,
            defaultValue: {
                summary: 'inline-content',
            },
        },
        isDismissible: {
            description: 'Allows dismissing the notification by clicking on the close button.',
            control: 'boolean',
            defaultValue: {
                summary: true,
            },
        },
        isCompact: {
            description: 'When true, the footer aligns to the header and icons which makes the component compact and the Close button is not shown.',
            control: 'boolean',
            defaultValue: {
                summary: false,
            },
        },
        heading: {
            description: 'The text to display in the notification\'s heading.',
            control: 'text',
        },
        headingLevel: {
            description: 'The HTML heading tag to use for the notification\'s heading. Can from h2 to h6. The font size is kept the same for all heading levels.',
            control: 'select',
            options: headingLevels,
            defaultValue: {
                summary: 'h2',
            },
        },
        hideIcon: {
            description: 'Option to hide the icon regardless its variant or if user provided an icon.',
            control: 'boolean',
            defaultValue: {
                summary: false,
            },
        },
        leadingAction: {
            description: 'The leading action configuration for the notification.',
            control: 'object',
        },
        supportingAction: {
            description: 'The supporting action configuration for the notification. Appears only if `leadingAction` is provided.',
            control: 'object',
        },
        hasStackedActions: {
            description: 'When true, the notification will stack the action buttons on narrow screens.',
            control: 'boolean',
            defaultValue: {
                summary: false,
            },
        },
        slot: {
            description: 'Content to place within the notification.',
            control: 'text',
        },
    },
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/pPSC73rPin4csb8DiK1CRr/branch/r96WaDE105zDbe5itnleVv/%E2%9C%A8-%5BCore%5D-Web-Components-%5BPIE-3%5D?type=design&node-id=1005-30849&mode=design&t=lYLzXOzJIeo6OvAw-0',
        },
    },
};

export default notificationStoryMeta;

const pieNotificationLeadingActionClick = action('pie-notification-leading-action-click');
const pieNotificationSupportingActionClick = action('pie-notification-supporting-action-click');
const pieNotificationClose = action('pie-notification-close');
const pieNotificationOpen = action('pie-notification-open');

const Template : TemplateFunction<NotificationProps> = ({
    isOpen,
    isDismissible,
    isCompact,
    variant,
    position,
    heading,
    headingLevel,
    hideIcon,
    leadingAction,
    supportingAction,
    hasStackedActions,
    slot,
}) => html`
    <pie-notification
        ?isOpen="${isOpen}"
        variant="${variant}"
        position="${position}"
        ?isCompact="${isCompact}"
        ?isDismissible="${isDismissible}"
        heading="${heading}"
        headingLevel="${headingLevel}"
        ?hideIcon="${hideIcon}"
        .leadingAction="${leadingAction}"
        .supportingAction="${supportingAction}"
        ?hasStackedActions="${hasStackedActions}"
        @pie-notification-leading-action-click="${pieNotificationLeadingActionClick}"
        @pie-notification-supporting-action-click="${pieNotificationSupportingActionClick}"
        @pie-notification-close="${pieNotificationClose}"
        @pie-notification-open="${pieNotificationOpen}"
        >
        ${slot}
    </pie-notification>`;

export const Default = createStory<NotificationProps>(Template, defaultArgs)();
