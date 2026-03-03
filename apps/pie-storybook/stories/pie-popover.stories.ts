import { html } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-popover';
import { type PopoverProps } from '@justeattakeaway/pie-popover';

import { createStory } from '../utilities';

type PopoverStoryMeta = Meta<PopoverProps>;

const defaultArgs: PopoverProps = {};

const popoverStoryMeta: PopoverStoryMeta = {
    title: 'Components/Popover',
    component: 'pie-popover',
    argTypes: {},
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
};

export default popoverStoryMeta;

// TODO: remove the eslint-disable rule when props are added
// eslint-disable-next-line no-empty-pattern
const Template = ({}: PopoverProps) => html`
    <pie-popover></pie-popover>
`;

export const Default = createStory<PopoverProps>(Template, defaultArgs)();
