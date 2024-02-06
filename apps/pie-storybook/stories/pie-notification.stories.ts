import { html } from 'lit';

/* eslint-disable import/no-duplicates */
import '@justeattakeaway/pie-notification';
import { NotificationProps as NotificationBaseProps, variants, headingLevels } from '@justeattakeaway/pie-notification';
/* eslint-enable import/no-duplicates */

import { type StoryMeta, SlottedComponentProps } from '../types';
import { createStory, type TemplateFunction } from '../utilities';

import '@justeattakeaway/pie-icons-webc/IconAlertCircleFilled';

type NotificationProps = SlottedComponentProps<NotificationBaseProps>;
type NotificationStoryMeta = StoryMeta<NotificationProps>;

const defaultArgs: NotificationProps = {
    isOpen: true,
    variant: 'neutral',
    compact: false,
    slot: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet tincidunt est, vitae vulputate turpis. Cras pretium venenatis elementum. Duis tristique neque non varius tempor. In hac habitasse platea dictumst. Aenean accumsan vehicula urna. Cras fringilla sed ipsum nec dignissim. Aliquam sit amet ullamcorper ligula.',
    heading: 'Title',
    headingLevel: 'h2',
    hideIcon: false,
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
        compact: {
            description: 'When true, the footer aligns to the header and icons which makes the component compact.',
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

const Template : TemplateFunction<NotificationProps> = ({
    isOpen,
    compact,
    variant,
    heading,
    headingLevel,
    hideIcon,
    slot,
}) => html`
    <pie-notification
        ?isOpen="${isOpen}"
        variant="${variant}"
        ?compact="${compact}"
        heading="${heading}"
        headingLevel="${headingLevel}"
        ?hideIcon="${hideIcon}"
        >
        <icon-alert-circle-filled slot="icon" size="s"></icon-alert-circle-filled>
        ${slot}
    </pie-notification>`;

export const Default = createStory<NotificationProps>(Template, defaultArgs)();
