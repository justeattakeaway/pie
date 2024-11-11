import { html } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-foo-bar';
import { type FooBarProps } from '@justeattakeaway/pie-foo-bar';

import { createStory } from '../utilities';

type FooBarStoryMeta = Meta<FooBarProps>;

const defaultArgs: FooBarProps = {};

const fooBarStoryMeta: FooBarStoryMeta = {
    title: 'Foo Bar',
    component: 'pie-foo-bar',
    argTypes: {},
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
};

export default fooBarStoryMeta;

// TODO: remove the eslint-disable rule when props are added
// eslint-disable-next-line no-empty-pattern
const Template = ({}: FooBarProps) => html`
    <pie-foo-bar></pie-foo-bar>
`;

export const Default = createStory<FooBarProps>(Template, defaultArgs)();
