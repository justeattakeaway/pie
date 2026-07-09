import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { action } from 'storybook/actions';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-webc/components/accordion';
import '@justeattakeaway/pie-icons-webc/dist/IconRestaurantFilled.js';
import {
    type AccordionProps,
    type PieAccordion,
    headingLevels,
    sizes,
    defaultProps,
} from '@justeattakeaway/pie-webc/components/accordion';

import { type SlottedComponentProps } from '../types';
import { createStory, type TemplateFunction, sanitizeAndRenderHTML } from '../utilities';

type AccordionStoryProps = SlottedComponentProps<AccordionProps>;
type AccordionStoryMeta = Meta<AccordionStoryProps>;

const defaultArgs: AccordionStoryProps = {
    ...defaultProps,
    headingLabel: 'Delivery information',
    slot: 'Your order will be delivered between 30 and 45 minutes after placing your order.',
};

const accordionStoryMeta: AccordionStoryMeta = {
    title: 'Components/Accordion',
    component: 'pie-accordion',
    argTypes: {
        isOpen: {
            description: 'When `true`, the accordion panel is expanded.',
            control: 'boolean',
            defaultValue: { summary: defaultProps.isOpen },
        },
        headingLabel: {
            description: 'The text content for the accordion heading button.',
            control: 'text',
        },
        headingLevel: {
            description: 'The HTML heading element level (h1-h6) wrapping the trigger.',
            control: 'select',
            options: headingLevels,
            defaultValue: { summary: defaultProps.headingLevel },
        },
        secondaryLabel: {
            description: 'Optional secondary line of text displayed below the heading label.',
            control: 'text',
        },
        size: {
            description: 'Controls the responsive layout. `auto` is responsive; `narrow`/`wide` force the respective layout.',
            control: 'select',
            options: sizes,
            defaultValue: { summary: defaultProps.size },
        },
        isEmphasisReduced: {
            description: 'When `true`, applies reduced-emphasis typography to the heading.',
            control: 'boolean',
            defaultValue: { summary: defaultProps.isEmphasisReduced },
        },
        isDividerHidden: {
            description: 'When `true`, hides the `pie-divider` at the bottom of the accordion.',
            control: 'boolean',
            defaultValue: { summary: defaultProps.isDividerHidden },
        },
        slot: {
            description: 'Content placed in the default slot (accordion panel body).',
            control: 'text',
        },
    },
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/design/OOgnT2oNMdGFytj5AanYvt/-Core--Web-Component-Documentation--PIE-3-?node-id=21880-4486',
        },
    },
};

export default accordionStoryMeta;

const toggleAction = action('toggle');

const handleToggle = (event: CustomEvent) => {
    const accordion = event.target as PieAccordion;
    accordion.isOpen = !accordion.isOpen;
    toggleAction(event.detail);
};

const Template: TemplateFunction<AccordionStoryProps> = ({
    isOpen,
    headingLabel,
    headingLevel,
    secondaryLabel,
    size,
    isEmphasisReduced,
    isDividerHidden,
    slot,
}) => html`
    <div class="responsive-story-container">
        <pie-accordion
            headingLabel="${headingLabel}"
            headingLevel="${ifDefined(headingLevel)}"
            ?isOpen="${isOpen}"
            ?isEmphasisReduced="${isEmphasisReduced}"
            ?isDividerHidden="${isDividerHidden}"
            size="${ifDefined(size)}"
            secondaryLabel="${ifDefined(secondaryLabel)}"
            @toggle="${handleToggle}">
            ${sanitizeAndRenderHTML(slot)}
        </pie-accordion>
    </div>
`;

const WithIconTemplate: TemplateFunction<AccordionStoryProps> = ({
    isOpen,
    headingLabel,
    headingLevel,
    secondaryLabel,
    size,
    isEmphasisReduced,
    isDividerHidden,
    slot,
}) => html`
    <div class="responsive-story-container">
        <pie-accordion
            headingLabel="${headingLabel}"
            headingLevel="${ifDefined(headingLevel)}"
            ?isOpen="${isOpen}"
            ?isEmphasisReduced="${isEmphasisReduced}"
            ?isDividerHidden="${isDividerHidden}"
            size="${ifDefined(size)}"
            secondaryLabel="${ifDefined(secondaryLabel)}"
            @toggle="${handleToggle}">
            <icon-restaurant-filled slot="icon" size="m"></icon-restaurant-filled>
            ${sanitizeAndRenderHTML(slot)}
        </pie-accordion>
    </div>
`;

const StackedTemplate: TemplateFunction<AccordionStoryProps> = ({ headingLevel, size }) => html`
    <div class="responsive-story-container">
        <pie-accordion
            headingLabel="Delivery information"
            headingLevel="${ifDefined(headingLevel)}"
            size="${ifDefined(size)}"
            ?isOpen="${true}"
            @toggle="${handleToggle}">
            Your order will be delivered between 30 and 45 minutes after placing your order.
        </pie-accordion>
        <pie-accordion
            headingLabel="Payment methods"
            headingLevel="${ifDefined(headingLevel)}"
            size="${ifDefined(size)}"
            @toggle="${handleToggle}">
            We accept Visa, Mastercard, PayPal, and cash on delivery.
        </pie-accordion>
        <pie-accordion
            headingLabel="Allergen information"
            headingLevel="${ifDefined(headingLevel)}"
            size="${ifDefined(size)}"
            secondaryLabel="Updated today"
            @toggle="${handleToggle}">
            Please contact the restaurant directly for allergen information about specific dishes.
        </pie-accordion>
        <pie-accordion
            headingLabel="Restaurant contact"
            headingLevel="${ifDefined(headingLevel)}"
            size="${ifDefined(size)}"
            ?isDividerHidden="${true}"
            @toggle="${handleToggle}">
            Call +44 20 7123 4567 or email hello@restaurant.com
        </pie-accordion>
    </div>
`;

const BorderRadiusTemplate: TemplateFunction<AccordionStoryProps> = ({
    headingLevel,
    size,
}) => html`
    <div class="responsive-story-container">
        <style>
            pie-accordion.rounded {
                --accordion-border-radius: var(--dt-radius-rounded-c);
                margin-bottom: 1px;
            }
        </style>
        <pie-accordion
            class="rounded"
            isDividerHidden
            headingLabel="Delivery information"
            headingLevel="${ifDefined(headingLevel)}"
            size="${ifDefined(size)}"
            ?isOpen="${true}"
            @toggle="${handleToggle}">
            Your order will be delivered between 30 and 45 minutes after placing your order.
        </pie-accordion>
        <pie-accordion
            class="rounded"
            isDividerHidden
            headingLabel="Payment methods"
            headingLevel="${ifDefined(headingLevel)}"
            size="${ifDefined(size)}"
            @toggle="${handleToggle}">
            We accept Visa, Mastercard, PayPal, and cash on delivery.
        </pie-accordion>
        <pie-accordion
            class="rounded"
            isDividerHidden
            headingLabel="Allergen information"
            headingLevel="${ifDefined(headingLevel)}"
            size="${ifDefined(size)}"
            secondaryLabel="Updated today"
            @toggle="${handleToggle}">
            Please contact the restaurant directly for allergen information about specific dishes.
        </pie-accordion>
    </div>
`;

const createAccordionStory = createStory<AccordionStoryProps>(Template, defaultArgs);

export const Default = createAccordionStory();
export const Open = createAccordionStory({ isOpen: true });
export const WithIcon = createStory<AccordionStoryProps>(WithIconTemplate, defaultArgs)();
export const WithSecondaryLabel = createAccordionStory({ secondaryLabel: 'Available in your area' });
export const EmphasisReduced = createAccordionStory({ isEmphasisReduced: true });
export const Stacked = createStory<AccordionStoryProps>(StackedTemplate, defaultArgs)();
export const NoDivider = createAccordionStory({ isDividerHidden: true });
export const SizeWide = createAccordionStory({ size: 'wide' });
export const SizeNarrow = createAccordionStory({ size: 'narrow' });
export const BorderRadius = createStory<AccordionStoryProps>(BorderRadiusTemplate, defaultArgs)();
