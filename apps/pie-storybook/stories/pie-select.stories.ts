import { html } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-select';
import { type SelectProps } from '@justeattakeaway/pie-select';

import { createStory } from '../utilities';

type SelectStoryMeta = Meta<SelectProps>;

const defaultArgs: SelectProps = {};

const selectStoryMeta: SelectStoryMeta = {
    title: 'Select',
    component: 'pie-select',
    argTypes: {},
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
};

export default selectStoryMeta;

// TODO: remove the eslint-disable rule when props are added
// eslint-disable-next-line no-empty-pattern
const Template = ({}: SelectProps) => html`
    <pie-select></pie-select>
`;

export const Default = createStory<SelectProps>(Template, defaultArgs)();
