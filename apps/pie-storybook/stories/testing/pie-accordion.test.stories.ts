import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-webc/components/accordion';
import '@justeattakeaway/pie-icons-webc/dist/IconRestaurantFilled.js';
import {
    type AccordionProps,
    headingLevels,
    sizes,
    iconSizes,
    defaultProps,
} from '@justeattakeaway/pie-webc/components/accordion';

import { createStory, type TemplateFunction } from '../../utilities';

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
        iconSize: {
            control: 'select',
            options: iconSizes,
        },
        size: {
            control: 'select',
            options: sizes,
        },
        isEmphasisReduced: {
            control: 'boolean',
        },
        isDividerEnabled: {
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

const toggleAction = () => {
    console.info('pie-accordion-toggle');
};

const Template: TemplateFunction<AccordionProps> = ({
    isOpen,
    headingLabel,
    headingLevel,
    secondaryLabel,
    iconSize,
    size,
    isEmphasisReduced,
    isDividerEnabled,
}) => html`
    <pie-accordion
        data-test-id="test-accordion"
        headingLabel="${headingLabel}"
        headingLevel="${ifDefined(headingLevel)}"
        ?isOpen="${isOpen}"
        ?isEmphasisReduced="${isEmphasisReduced}"
        ?isDividerEnabled="${isDividerEnabled}"
        iconSize="${ifDefined(iconSize)}"
        size="${ifDefined(size)}"
        secondaryLabel="${ifDefined(secondaryLabel)}"
        @pie-accordion-toggle="${toggleAction}">
        <p>Your order will be delivered between 30 and 45 minutes after placing your order.</p>
    </pie-accordion>
`;

const createAccordionStory = createStory<AccordionProps>(Template, defaultArgs);

export const Default = createAccordionStory();
export const Open = createAccordionStory({ isOpen: true });
export const EmphasisReduced = createAccordionStory({ isEmphasisReduced: true });
export const WithSecondaryLabel = createAccordionStory({ secondaryLabel: 'Available in your area' });
export const SizeNarrow = createAccordionStory({ size: 'narrow' });
export const SizeWide = createAccordionStory({ size: 'wide' });
export const NoDivider = createAccordionStory({ isDividerEnabled: false });

const WithIconTemplate: TemplateFunction<AccordionProps> = ({
    isOpen,
    headingLabel,
    headingLevel,
    secondaryLabel,
    iconSize,
    size,
    isEmphasisReduced,
    isDividerEnabled,
}) => html`
    <pie-accordion
        data-test-id="test-accordion"
        headingLabel="${headingLabel}"
        headingLevel="${ifDefined(headingLevel)}"
        ?isOpen="${isOpen}"
        ?isEmphasisReduced="${isEmphasisReduced}"
        ?isDividerEnabled="${isDividerEnabled}"
        iconSize="${ifDefined(iconSize)}"
        size="${ifDefined(size)}"
        secondaryLabel="${ifDefined(secondaryLabel)}"
        @pie-accordion-toggle="${toggleAction}">
        <icon-restaurant-filled slot="icon"></icon-restaurant-filled>
        <p>Your order will be delivered between 30 and 45 minutes after placing your order.</p>
    </pie-accordion>
`;

export const WithIcon = createStory<AccordionProps>(WithIconTemplate, defaultArgs)();

const RTLTemplate: TemplateFunction<AccordionProps> = ({
    isOpen,
    headingLabel,
    headingLevel,
    secondaryLabel,
    iconSize,
    size,
    isEmphasisReduced,
    isDividerEnabled,
}) => html`
    <div dir="rtl">
        <pie-accordion
            data-test-id="test-accordion"
            headingLabel="${headingLabel}"
            headingLevel="${ifDefined(headingLevel)}"
            ?isOpen="${isOpen}"
            ?isEmphasisReduced="${isEmphasisReduced}"
            ?isDividerEnabled="${isDividerEnabled}"
            iconSize="${ifDefined(iconSize)}"
            size="${ifDefined(size)}"
            secondaryLabel="${ifDefined(secondaryLabel)}"
            @pie-accordion-toggle="${toggleAction}">
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
            @pie-accordion-toggle="${toggleAction}">
            <p>Your order will be delivered between 30 and 45 minutes after placing your order.</p>
        </pie-accordion>
        <pie-accordion
            headingLabel="Payment methods"
            headingLevel="${ifDefined(headingLevel)}"
            size="${ifDefined(size)}"
            @pie-accordion-toggle="${toggleAction}">
            <p>We accept Visa, Mastercard, PayPal, and cash on delivery.</p>
        </pie-accordion>
        <pie-accordion
            headingLabel="Allergen information"
            headingLevel="${ifDefined(headingLevel)}"
            size="${ifDefined(size)}"
            secondaryLabel="Updated today"
            @pie-accordion-toggle="${toggleAction}">
            <p>Please contact the restaurant directly for allergen information about specific dishes.</p>
        </pie-accordion>
        <pie-accordion
            headingLabel="Restaurant contact"
            headingLevel="${ifDefined(headingLevel)}"
            size="${ifDefined(size)}"
            ?isDividerEnabled="${false}"
            @pie-accordion-toggle="${toggleAction}">
            <p>Call +44 20 7123 4567 or email hello@restaurant.com</p>
        </pie-accordion>
    </div>
`;

export const Stacked = createStory<AccordionProps>(StackedTemplate, defaultArgs)();
