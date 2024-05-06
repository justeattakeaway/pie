import { html } from 'lit';

/* eslint-disable import/no-duplicates */
import '@justeattakeaway/pie-checkbox';
import { CheckboxProps } from '@justeattakeaway/pie-checkbox';
/* eslint-enable import/no-duplicates */

import { type StoryMeta } from '../types';
import { createStory } from '../utilities';

type CheckboxStoryMeta = StoryMeta<CheckboxProps>;

const defaultArgs: CheckboxProps = {};

const checkboxStoryMeta: CheckboxStoryMeta = {
    title: 'Checkbox',
    component: 'pie-checkbox',
    argTypes: {},
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
};

export default checkboxStoryMeta;

// TODO: remove the eslint-disable rule when props are added
// eslint-disable-next-line no-empty-pattern
const Template = ({}: CheckboxProps) => html`
    <pie-checkbox></pie-checkbox>
`;

export const Default = createStory<CheckboxProps>(Template, defaultArgs)();
