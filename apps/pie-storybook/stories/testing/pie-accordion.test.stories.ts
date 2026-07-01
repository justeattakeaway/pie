import { html } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-webc/components/accordion';
import { type AccordionProps } from '@justeattakeaway/pie-webc/components/accordion';

import { createStory } from '../../utilities';

type AccordionStoryMeta = Meta<AccordionProps>;

const defaultArgs: AccordionProps = {};

const accordionStoryMeta: AccordionStoryMeta = {
    title: 'Accordion',
    component: 'pie-accordion',
    argTypes: {},
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
};

export default accordionStoryMeta;

// TODO: remove the eslint-disable rule when props are added
// eslint-disable-next-line no-empty-pattern
const Template = ({}: AccordionProps) => html`
    <pie-accordion></pie-accordion>
`;

export const Default = createStory<AccordionProps>(Template, defaultArgs)();
