import { html } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-headless-radio-group';
import { type HeadlessRadioGroupProps } from '@justeattakeaway/pie-headless-radio-group';

import { createStory } from '../../utilities';

type HeadlessRadioGroupStoryMeta = Meta<HeadlessRadioGroupProps>;

const defaultArgs: HeadlessRadioGroupProps = {};

const headlessRadioGroupStoryMeta: HeadlessRadioGroupStoryMeta = {
    title: 'Headless Radio Group',
    component: 'pie-headless-radio-group',
    argTypes: {},
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
};

export default headlessRadioGroupStoryMeta;

// TODO: remove the eslint-disable rule when props are added
// eslint-disable-next-line no-empty-pattern
const Template = ({}: HeadlessRadioGroupProps) => html`
    <pie-headless-radio-group></pie-headless-radio-group>
`;

export const Default = createStory<HeadlessRadioGroupProps>(Template, defaultArgs)();
