import { html } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-bar-foo';
import { type BarFooProps } from '@justeattakeaway/pie-bar-foo';

import { createStory } from '../utilities';

type BarFooStoryMeta = Meta<BarFooProps>;

const defaultArgs: BarFooProps = {};

const barFooStoryMeta: BarFooStoryMeta = {
    title: 'Bar Foo',
    component: 'pie-bar-foo',
    argTypes: {},
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
};

export default barFooStoryMeta;

// TODO: remove the eslint-disable rule when props are added
// eslint-disable-next-line no-empty-pattern
const Template = ({}: BarFooProps) => html`
    <pie-bar-foo></pie-bar-foo>
`;

export const Default = createStory<BarFooProps>(Template, defaultArgs)();
