import { html } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-foo';
import { type FooProps } from '@justeattakeaway/pie-foo';

import { createStory } from '../utilities';

type FooStoryMeta = Meta<FooProps>;

const defaultArgs: FooProps = {};

const fooStoryMeta: FooStoryMeta = {
    title: 'Foo',
    component: 'pie-foo',
    argTypes: {},
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
};

export default fooStoryMeta;

// TODO: remove the eslint-disable rule when props are added
// eslint-disable-next-line no-empty-pattern
const Template = ({}: FooProps) => html`
    <pie-foo></pie-foo>
`;

export const Default = createStory<FooProps>(Template, defaultArgs)();
