import { html, nothing } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
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

import { createStory, createVariantStory, type TemplateFunction } from '../../utilities';

type AccordionStoryMeta = Meta<AccordionProps>;

const defaultArgs: AccordionProps = {
    ...defaultProps,
    headingLabel: 'Delivery information',
};

const accordionStoryMeta: AccordionStoryMeta = {
    title: 'Accordion',
    component: 'pie-accordion',
    argTypes: {
        isOpen: {
            control: 'boolean',
        },
        headingLabel: {
            control: 'text',
        },
        headingLevel: {
            control: 'select',
            options: headingLevels,
        },
        secondaryLabel: {
            control: 'text',
        },
        size: {
            control: 'select',
            options: sizes,
        },
        isEmphasisReduced: {
            control: 'boolean',
        },
        isDividerHidden: {
            control: 'boolean',
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

export default accordionStoryMeta;

const handleToggle = (event: CustomEvent) => {
    const accordion = event.target as PieAccordion;
    accordion.isOpen = !accordion.isOpen;
    console.info('pie-accordion-toggle');
};

const Template: TemplateFunction<AccordionProps> = ({
    isOpen,
    headingLabel,
    headingLevel,
    secondaryLabel,

    size,
    isEmphasisReduced,
    isDividerHidden,
}) => html`
    <pie-accordion
        data-test-id="test-accordion"
        headingLabel="${headingLabel}"
        headingLevel="${ifDefined(headingLevel)}"
        ?isOpen="${isOpen}"
        ?isEmphasisReduced="${isEmphasisReduced}"
        ?isDividerHidden="${isDividerHidden}"

        size="${ifDefined(size)}"
        secondaryLabel="${ifDefined(secondaryLabel)}"
        @pie-accordion-toggle="${handleToggle}">
        <p>Your order will be delivered between 30 and 45 minutes after placing your order.</p>
    </pie-accordion>
`;

const createAccordionStory = createStory<AccordionProps>(Template, defaultArgs);

export const Default = createAccordionStory();

const WithIconTemplate: TemplateFunction<AccordionProps> = ({
    isOpen,
    headingLabel,
    headingLevel,
    secondaryLabel,

    size,
    isEmphasisReduced,
    isDividerHidden,
}) => html`
    <pie-accordion
        data-test-id="test-accordion"
        headingLabel="${headingLabel}"
        headingLevel="${ifDefined(headingLevel)}"
        ?isOpen="${isOpen}"
        ?isEmphasisReduced="${isEmphasisReduced}"
        ?isDividerHidden="${isDividerHidden}"

        size="${ifDefined(size)}"
        secondaryLabel="${ifDefined(secondaryLabel)}"
        @pie-accordion-toggle="${handleToggle}">
        <icon-restaurant-filled slot="icon" size="m"></icon-restaurant-filled>
        <p>Your order will be delivered between 30 and 45 minutes after placing your order.</p>
    </pie-accordion>
`;

export const WithIcon = createStory<AccordionProps>(WithIconTemplate, defaultArgs)();

const RTLTemplate: TemplateFunction<AccordionProps> = ({
    isOpen,
    headingLabel,
    headingLevel,
    secondaryLabel,

    size,
    isEmphasisReduced,
    isDividerHidden,
}) => html`
    <div dir="rtl">
        <pie-accordion
            data-test-id="test-accordion"
            headingLabel="${headingLabel}"
            headingLevel="${ifDefined(headingLevel)}"
            ?isOpen="${isOpen}"
            ?isEmphasisReduced="${isEmphasisReduced}"
            ?isDividerHidden="${isDividerHidden}"

            size="${ifDefined(size)}"
            secondaryLabel="${ifDefined(secondaryLabel)}"
            @pie-accordion-toggle="${handleToggle}">
            <p>محتوى القسم المنسدل هنا</p>
        </pie-accordion>
    </div>
`;

export const RTL = createStory<AccordionProps>(RTLTemplate, {
    ...defaultArgs,
    headingLabel: 'معلومات التوصيل',
    isOpen: true,
})();

const StackedTemplate: TemplateFunction<AccordionProps> = ({ headingLevel, size }) => html`
    <div style="max-width: 480px;">
        <pie-accordion
            headingLabel="Delivery information"
            headingLevel="${ifDefined(headingLevel)}"
            size="${ifDefined(size)}"
            ?isOpen="${true}"
            @pie-accordion-toggle="${handleToggle}">
            <p>Your order will be delivered between 30 and 45 minutes after placing your order.</p>
        </pie-accordion>
        <pie-accordion
            headingLabel="Payment methods"
            headingLevel="${ifDefined(headingLevel)}"
            size="${ifDefined(size)}"
            @pie-accordion-toggle="${handleToggle}">
            <p>We accept Visa, Mastercard, PayPal, and cash on delivery.</p>
        </pie-accordion>
        <pie-accordion
            headingLabel="Allergen information"
            headingLevel="${ifDefined(headingLevel)}"
            size="${ifDefined(size)}"
            secondaryLabel="Updated today"
            @pie-accordion-toggle="${handleToggle}">
            <p>Please contact the restaurant directly for allergen information about specific dishes.</p>
        </pie-accordion>
        <pie-accordion
            headingLabel="Restaurant contact"
            headingLevel="${ifDefined(headingLevel)}"
            size="${ifDefined(size)}"
            ?isDividerHidden="${false}"
            @pie-accordion-toggle="${handleToggle}">
            <p>Call +44 20 7123 4567 or email hello@restaurant.com</p>
        </pie-accordion>
    </div>
`;

export const Stacked = createStory<AccordionProps>(StackedTemplate, defaultArgs)();

type AccordionVariantProps = AccordionProps & { icon?: boolean };

const VariantTemplate: TemplateFunction<AccordionVariantProps> = ({
    isOpen,
    headingLabel,
    headingLevel,
    secondaryLabel,

    size,
    isEmphasisReduced,
    isDividerHidden,
    icon,
}) => html`
    <pie-accordion
        data-test-id="test-accordion"
        headingLabel="${headingLabel}"
        headingLevel="${ifDefined(headingLevel)}"
        ?isOpen="${isOpen}"
        ?isEmphasisReduced="${isEmphasisReduced}"
        ?isDividerHidden="${isDividerHidden}"

        size="${ifDefined(size)}"
        secondaryLabel="${ifDefined(secondaryLabel)}"
        @pie-accordion-toggle="${handleToggle}">
        ${icon ? html`<icon-restaurant-filled slot="icon" size="m"></icon-restaurant-filled>` : nothing}
        <p>Your order will be delivered between 30 and 45 minutes after placing your order.</p>
    </pie-accordion>
`;

const propsMatrix: Partial<Record<keyof AccordionVariantProps, unknown[]>> = {
    isOpen: [false, true],
    isEmphasisReduced: [false, true],
    isDividerHidden: [false, true],
    size: ['narrow', 'wide'],
    icon: [false, true],
    headingLabel: ['Delivery information'],
    secondaryLabel: ['Available in your area', ''],
};

export const Variants = createVariantStory<AccordionVariantProps>(VariantTemplate, propsMatrix);
