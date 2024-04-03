import { html } from 'lit';

/* eslint-disable import/no-duplicates */
import '@justeattakeaway/pie-test';
import { TestProps } from '@justeattakeaway/pie-test';
/* eslint-enable import/no-duplicates */

import { type StoryMeta } from '../types';
import { createStory } from '../utilities';

type TestStoryMeta = StoryMeta<TestProps>;

const defaultArgs: TestProps = {};

const testStoryMeta: TestStoryMeta = {
    title: 'Test',
    component: 'pie-test',
    argTypes: {},
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
};

export default testStoryMeta;

// TODO: remove the eslint-disable rule when props are added
// eslint-disable-next-line no-empty-pattern
const Template = ({}: TestProps) => html`
    <pie-test></pie-test>
`;

export const Default = createStory<TestProps>(Template, defaultArgs)();
