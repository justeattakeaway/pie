import { html } from 'lit';
import { PieSpinner, SpinnerProps } from '@justeattakeaway/pie-spinner';
import { type StoryMeta } from '../types';
import { createStory } from '../utilities';

// This prevents storybook from tree shaking the components
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const keptReferences = [PieSpinner];

type SpinnerStoryMeta = StoryMeta<SpinnerProps>;

const defaultArgs: SpinnerProps = {};

const spinnerStoryMeta: SpinnerStoryMeta = {
    title: 'Spinner',
    component: 'pie-spinner',
    argTypes: {},
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
};

export default spinnerStoryMeta;

// TODO: remove the eslint-disable rule when props are added
// eslint-disable-next-line no-empty-pattern
const Template = ({}: SpinnerProps) => html`
    <pie-spinner></pie-spinner>
`;

export const Default = createStory<SpinnerProps>(Template, defaultArgs)();
