import { html, nothing } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

/* eslint-disable import/no-duplicates */
import '@justeattakeaway/pie-notification';
import { action } from '@storybook/addon-actions';
import {
    type NotificationProps as NotificationBaseProps, variants, headingLevels, positions, defaultProps,
} from '@justeattakeaway/pie-notification';
/* eslint-enable import/no-duplicates */

import '@justeattakeaway/pie-icons-webc/dist/IconPlaceholder.js';

import { type StoryMeta, type SlottedComponentProps } from '../types';
import { createStory, type TemplateFunction } from '../utilities';

type NotificationProps = SlottedComponentProps<NotificationBaseProps>;
type NotificationStoryMeta = StoryMeta<NotificationProps>;

const defaultArgs: NotificationProps = {
    ...defaultProps,
    slot: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet tincidunt est, vitae vulputate turpis. Cras pretium venenatis elementum. Duis tristique neque non varius tempor. In hac habitasse platea dictumst. Aenean accumsan vehicula urna.',
    heading: 'Heading',
    leadingAction: {
        text: 'Confirm',
        ariaLabel: 'Descriptive confirmation text',
    },
    supportingAction: {
        text: 'Cancel',
        ariaLabel: 'Descriptive cancellation text',
    },
};

const notificationStoryMeta: NotificationStoryMeta = {
    title: 'Notification',
    component: 'pie-notification',
    argTypes: {
        isOpen: {
            description: 'When true, the notification is set to be open and visible.',
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.isOpen,
            },
        },
        variant: {
            description: 'Set the variant of the notification.',
            control: 'select',
            options: variants,
            defaultValue: {
                summary: defaultProps.variant,
            },
        },
        position: {
            description: 'Specifies whether the notification should be displayed inline, within the content, or full width (recommended at the top of the interface, under the header)',
            control: 'select',
            options: positions,
            defaultValue: {
                summary: defaultProps.position,
            },
        },
        isDismissible: {
            description: 'Allows dismissing the notification by clicking on the close button.',
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.isDismissible,
            },
            if: { arg: 'isCompact', eq: false },
        },
        isCompact: {
            description: 'When true, the footer aligns to the header and icons which makes the component compact and the Close button is not shown.',
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.isCompact,
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
                summary: defaultProps.headingLevel,
            },
        },
        hideIcon: {
            description: 'Option to hide the icon regardless its variant or if user provided an icon.',
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.hideIcon,
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
                summary: defaultProps.hasStackedActions,
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
}) => {
    const shouldShowPlaceholderIcon = variant && ['neutral', 'neutral-alternative'].includes(variant);

    return html`
    <pie-notification
        ?isOpen="${isOpen}"
        variant="${ifDefined(variant)}"
        position="${ifDefined(position)}"
        ?isCompact="${isCompact}"
        ?isDismissible="${isDismissible}"
        heading="${ifDefined(heading)}"
        headingLevel="${ifDefined(headingLevel)}"
        ?hideIcon="${hideIcon}"
        .leadingAction="${leadingAction}"
        .supportingAction="${supportingAction}"
        ?hasStackedActions="${hasStackedActions}"
        @pie-notification-leading-action-click="${pieNotificationLeadingActionClick}"
        @pie-notification-supporting-action-click="${pieNotificationSupportingActionClick}"
        @pie-notification-close="${pieNotificationClose}"
        @pie-notification-open="${pieNotificationOpen}"
        >
            ${shouldShowPlaceholderIcon ? html`<icon-placeholder slot="icon"></icon-placeholder>` : nothing}
            ${slot}
    </pie-notification>`;
};

const createNotificationStory = createStory<NotificationProps>(Template, defaultArgs);

export const Neutral = createNotificationStory();
export const NeutralAlternative = createNotificationStory({ variant: 'neutral-alternative' }, { bgColor: 'dark (container-dark)' });
export const Info = createNotificationStory({ variant: 'info' });
export const Success = createNotificationStory({ variant: 'success' });
export const Error = createNotificationStory({ variant: 'error' });
export const Warning = createNotificationStory({ variant: 'warning' });

