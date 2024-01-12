import { html } from 'lit';

/* eslint-disable import/no-duplicates */
import '@justeattakeaway/pie-test-component';
import { TestComponentProps } from '@justeattakeaway/pie-test-component';
/* eslint-enable import/no-duplicates */

import { type StoryMeta } from '../types';
import { createStory } from '../utilities';

type TestComponentStoryMeta = StoryMeta<TestComponentProps>;

const defaultArgs: TestComponentProps = {};

const testComponentStoryMeta: TestComponentStoryMeta = {
    title: 'Test Component',
    component: 'pie-test-component',
    argTypes: {},
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
};

export default testComponentStoryMeta;

// TODO: remove the eslint-disable rule when props are added
// eslint-disable-next-line no-empty-pattern
const Template = ({}: TestComponentProps) => html`
    <pie-test-component></pie-test-component>
`;

export const Default = createStory<TestComponentProps>(Template, defaultArgs)();
