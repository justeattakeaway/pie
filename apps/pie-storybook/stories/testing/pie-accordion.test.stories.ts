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
    console.info('toggle');
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
    <div class="responsive-story-container">
        <pie-accordion
            data-test-id="test-accordion"
            headingLabel="${headingLabel}"
            headingLevel="${ifDefined(headingLevel)}"
            ?isOpen="${isOpen}"
            ?isEmphasisReduced="${isEmphasisReduced}"
            ?isDividerHidden="${isDividerHidden}"
            size="${ifDefined(size)}"
            secondaryLabel="${ifDefined(secondaryLabel)}"
            @toggle="${handleToggle}">
            <p>Your order will be delivered between 30 and 45 minutes after placing your order.</p>
        </pie-accordion>
    </div>
`;

const createAccordionStory = createStory<AccordionProps>(Template, defaultArgs);

export const Default = createAccordionStory();

const StackedTemplate: TemplateFunction<AccordionProps> = ({ headingLevel, size }) => html`
    <div class="responsive-story-container">
        <pie-accordion
            headingLabel="Delivery information"
            headingLevel="${ifDefined(headingLevel)}"
            size="${ifDefined(size)}"
            ?isOpen="${true}"
            @toggle="${handleToggle}">
            <p>Your order will be delivered between 30 and 45 minutes after placing your order.</p>
        </pie-accordion>
        <pie-accordion
            headingLabel="Payment methods"
            headingLevel="${ifDefined(headingLevel)}"
            size="${ifDefined(size)}"
            @toggle="${handleToggle}">
            <p>We accept Visa, Mastercard, PayPal, and cash on delivery.</p>
        </pie-accordion>
        <pie-accordion
            headingLabel="Allergen information"
            headingLevel="${ifDefined(headingLevel)}"
            size="${ifDefined(size)}"
            secondaryLabel="Updated today"
            @toggle="${handleToggle}">
            <p>Please contact the restaurant directly for allergen information about specific dishes.</p>
        </pie-accordion>
        <pie-accordion
            headingLabel="Restaurant contact"
            headingLevel="${ifDefined(headingLevel)}"
            size="${ifDefined(size)}"
            ?isDividerHidden="${false}"
            @toggle="${handleToggle}">
            <p>Call +44 20 7123 4567 or email hello@restaurant.com</p>
        </pie-accordion>
    </div>
`;

export const Stacked = createStory<AccordionProps>(StackedTemplate, defaultArgs)();

const IconRegularSizeTemplate: TemplateFunction<AccordionProps> = () => html`
    <div class="responsive-story-container">
        <pie-accordion
            headingLabel="Delivery information"
            secondaryLabel="Regular icon size"
            ?isOpen="${false}"
            @toggle="${handleToggle}">
            <icon-restaurant-filled slot="icon" size="m"></icon-restaurant-filled>
            <p>Your order will be delivered between 30 and 45 minutes after placing your order.</p>
        </pie-accordion>
    </div>
`;

export const IconRegularSize = createStory<AccordionProps>(IconRegularSizeTemplate, defaultArgs)();

// Using a xxl size icon as placeholder while we look into how to provide the icon with background pattern
const IconLargeSizeTemplate: TemplateFunction<AccordionProps> = () => html`
    <div class="responsive-story-container">
        <pie-accordion
            headingLabel="Delivery information"
            secondaryLabel="Regular icon size"
            ?isOpen="${false}"
            @toggle="${handleToggle}">
            <icon-restaurant-filled slot="icon" size="xxl"></icon-restaurant-filled>
            <p>Your order will be delivered between 30 and 45 minutes after placing your order.</p>
        </pie-accordion>
    </div>
`;

export const IconLargeSize = createStory<AccordionProps>(IconLargeSizeTemplate, defaultArgs)();

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
        @toggle="${handleToggle}">
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

export const Variations = createVariantStory<AccordionVariantProps>(VariantTemplate, propsMatrix);
