import { html, nothing, type TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { action } from '@storybook/addon-actions';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-notification';
import {
    type NotificationProps as NotificationBaseProps,
    variants,
    headingLevels,
    positions,
    actionSizes,
    defaultProps,
} from '@justeattakeaway/pie-notification';

import '@justeattakeaway/pie-icons-webc/dist/IconPlaceholder.js';
import '@justeattakeaway/pie-icons-webc/dist/IconHeartFilled';

import {
    createStory, createVariantStory, type TemplateFunction, sanitizeAndRenderHTML,
} from '../../utilities';

// Extending the props type definition to include storybook specific properties for controls
type NotificationProps = NotificationBaseProps & {
    slot: string;
    iconSlot: keyof typeof slotOptions | TemplateResult;
};

type NotificationStoryMeta = Meta<NotificationProps>;

const defaultArgs: NotificationProps = {
    ...defaultProps,
    slot: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet tincidunt est, vitae vulputate turpis. Cras pretium venenatis elementum. Duis tristique neque non varius tempor. In hac habitasse platea dictumst. Aenean accumsan vehicula urna.',
    heading: '',
    leadingAction: {
        text: 'Confirm',
        ariaLabel: 'Descriptive confirmation text',
        size: 'small-productive',
    },
    supportingAction: {
        text: 'Cancel',
        ariaLabel: 'Descriptive cancellation text',
        size: 'small-productive',
    },
    iconSlot: 'None',
    aria: {
        close: 'Close',
        label: '',
    },
};

const slotOptions = {
    None: nothing,
    Placeholder: html`<icon-placeholder slot="icon"></icon-placeholder>`,
};

const slotOptionsVisual = {
    None: nothing,
    Placeholder: html`<icon-heart-filled slot="icon"></icon-heart-filled>`,
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
            description: `The leading action configuration for the notification. <br/> The size property can be ${actionSizes.join(', ')}.`,
            control: 'object',
            defaultValue: {
                summary: JSON.stringify(defaultProps.leadingAction),
            },
        },
        supportingAction: {
            description: `The supporting action configuration for the notification. Appears only if leadingAction is provided. <br/>The size property can be ${actionSizes.join(', ')}.`,
            control: 'object',
            defaultValue: {
                summary: JSON.stringify(defaultProps.supportingAction),
            },
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
        iconSlot: {
            name: 'Icon Slot',
            options: Object.keys(slotOptions),
            description: '<b>**Not a component prop</b><br><br>Use the `icon` slot to pass a PIE icon component that differs from the default icon.',
            control: 'select',
            mapping: slotOptions,
        },
        aria: {
            description: 'The ARIA labels used for various parts of the notification',
            control: 'object',
        },
    },
    args: defaultArgs,
};

export default notificationStoryMeta;

const pieNotificationLeadingActionClick = action('pie-notification-leading-action-click');
const pieNotificationSupportingActionClick = action('pie-notification-supporting-action-click');
const pieNotificationClose = action('pie-notification-close');
const pieNotificationOpen = action('pie-notification-open');

const slotContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet tincidunt est, vitae vulputate turpis. Cras pretium venenatis elementum. Duis tristique neque non varius tempor. In hac habitasse platea dictumst. Aenean accumsan vehicula urna. Cras fringilla sed ipsum nec dignissim. Aliquam sit amet ullamcorper ligula.';
const mockSlottedIcon = html`<div slot="icon" data-test-id="pie-notification-icon-slotted">Mocked Icon Slot</div>`;

const slotContentRTL = 'هذه الفقرة باللغة العربية ، لذا يجب الانتقال من اليمين إلى اليسار.';
const titleRTL = 'عنوان';
const confirmRTL = 'يتأكد';
const denyRTL = 'ينكر';

const mainAction = {
    text: confirmRTL,
};
const secondaryAction = {
    text: denyRTL,
};

const Template : TemplateFunction<NotificationProps> = ({
    aria,
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
    iconSlot,
}) => html`
    <pie-notification
        .aria="${aria}"
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
        @pie-notification-open="${pieNotificationOpen}">
            ${iconSlot}
            ${sanitizeAndRenderHTML(slot)}
    </pie-notification>`;

const createNotificationStory = createStory<NotificationProps>(Template, defaultArgs);

export const Neutral = createNotificationStory();
export const NeutralAlternative = createNotificationStory({ variant: 'neutral-alternative' }, { bgColor: 'dark (container-dark)' });
export const Info = createNotificationStory({ variant: 'info' });
export const Success = createNotificationStory({ variant: 'success' });
export const Error = createNotificationStory({ variant: 'error' });
export const Warning = createNotificationStory({ variant: 'warning' });

export const NotificationWithSlot = createNotificationStory({
    slot: slotContent,
    iconSlot: mockSlottedIcon,
});

export const NotificationRTL = createNotificationStory({
    slot: slotContentRTL,
    heading: titleRTL,
    leadingAction: mainAction,
    supportingAction: secondaryAction,
});

const VariantsTemplate = (propVals: NotificationProps) => html`<pie-notification
        variant="${ifDefined(propVals.variant)}"
        ?isCompact="${propVals.isCompact}"
        ?isDismissible="${propVals.isDismissible}"
        ?hideIcon="${propVals.hideIcon}"
        heading="${ifDefined(propVals.heading)}">
            ${propVals.iconSlot}
            ${sanitizeAndRenderHTML(slotContent)}
        </pie-notification>`;

const sharedPropOptions = {
    isCompact: [true, false],
    isDismissible: [true, false],
    hideIcon: [true, false],
    heading: ['Title', nothing],
    iconSlot: [slotOptionsVisual.None, slotOptionsVisual.Placeholder],
};

const neutralPropOptions = {
    variant: ['neutral'],
    ...sharedPropOptions,
};

const neutralAlternativePropOptions = {
    variant: ['neutral-alternative'],
    ...sharedPropOptions,
};

const infoPropOptions = {
    variant: ['info'],
    ...sharedPropOptions,
};

const successPropOptions = {
    variant: ['success'],
    ...sharedPropOptions,
};

const warningPropOptions = {
    variant: ['warning'],
    ...sharedPropOptions,
};

const errorPropOptions = {
    variant: ['error'],
    ...sharedPropOptions,
};

export const NeutralPropVariations = createVariantStory<Partial<NotificationProps>>(VariantsTemplate, neutralPropOptions);
export const NeutralAlternativePropVariations = createVariantStory<Partial<NotificationProps>>(VariantsTemplate, neutralAlternativePropOptions);
export const InfoPropVariations = createVariantStory<Partial<NotificationProps>>(VariantsTemplate, infoPropOptions);
export const SuccessPropVariations = createVariantStory<Partial<NotificationProps>>(VariantsTemplate, successPropOptions);
export const WarningPropVariations = createVariantStory<Partial<NotificationProps>>(VariantsTemplate, warningPropOptions);
export const ErrorPropVariations = createVariantStory<Partial<NotificationProps>>(VariantsTemplate, errorPropOptions);
