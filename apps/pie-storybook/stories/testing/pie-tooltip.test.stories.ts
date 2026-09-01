import { html } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-webc/components/tooltip';
import { type TooltipProps } from '@justeattakeaway/pie-webc/components/tooltip';

import { createStory } from '../../utilities';

type TooltipStoryMeta = Meta<TooltipProps>;

const defaultArgs: TooltipProps = {};

const tooltipStoryMeta: TooltipStoryMeta = {
    title: 'Tooltip',
    component: 'pie-tooltip',
    argTypes: {},
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
};

export default tooltipStoryMeta;

// TODO: remove the eslint-disable rule when props are added
// eslint-disable-next-line no-empty-pattern
const Template = ({}: TooltipProps) => html`
    <pie-tooltip></pie-tooltip>
`;

export const Default = createStory<TooltipProps>(Template, defaultArgs)();
