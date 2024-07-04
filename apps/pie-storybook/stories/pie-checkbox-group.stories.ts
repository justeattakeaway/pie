import { html } from 'lit';

/* eslint-disable import/no-duplicates */
import '@justeattakeaway/pie-checkbox-group';
import { CheckboxGroupProps } from '@justeattakeaway/pie-checkbox-group';
/* eslint-enable import/no-duplicates */

import { type StoryMeta } from '../types';
import { createStory } from '../utilities';

type CheckboxGroupStoryMeta = StoryMeta<CheckboxGroupProps>;

const defaultArgs: CheckboxGroupProps = {};

const checkboxGroupStoryMeta: CheckboxGroupStoryMeta = {
    title: 'Checkbox Group',
    component: 'pie-checkbox-group',
    argTypes: {},
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
};

export default checkboxGroupStoryMeta;

// TODO: remove the eslint-disable rule when props are added
// eslint-disable-next-line no-empty-pattern
const Template = ({}: CheckboxGroupProps) => html`
    <pie-checkbox-group></pie-checkbox-group>
`;

export const Default = createStory<CheckboxGroupProps>(Template, defaultArgs)();
