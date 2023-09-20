import { html } from 'lit';
import { PieFormLabel, FormLabelProps } from '@justeattakeaway/pie-form-label';
import { type StoryMeta } from '../types';
import { createStory } from '../utilities';

// This prevents storybook from tree shaking the components
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const keptReferences = [PieFormLabel];

type FormLabelStoryMeta = StoryMeta<FormLabelProps>;

const defaultArgs: FormLabelProps = {};

const formLabelStoryMeta: FormLabelStoryMeta = {
    title: 'Form Label',
    component: 'pie-form-label',
    argTypes: {},
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
};

export default formLabelStoryMeta;

// TODO: remove the eslint-disable rule when props are added
// eslint-disable-next-line no-empty-pattern
const Template = ({}: FormLabelProps) => html`
  <pie-form-label></pie-form-label>
`;

export const Default = createStory<FormLabelProps>(Template, defaultArgs)();
