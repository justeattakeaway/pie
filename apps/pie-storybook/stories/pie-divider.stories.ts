import { html, TemplateResult } from 'lit';
import { type StoryObj as Story } from '@storybook/web-components';
import { PieDivider, DividerProps } from '@justeattakeaway/pie-divider';
import { type StoryMeta } from '../types';

// This prevents storybook from tree shaking the components
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const keptReferences = [PieDivider];

type DividerStoryMeta = StoryMeta<DividerProps>;

const defaultArgs: DividerProps = {

};

const dividerStoryMeta: DividerStoryMeta = {
    title: 'Divider',
    component: 'pie-divider',
    argTypes: {

    },
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
};

export default dividerStoryMeta;

// TODO: remove the eslint-disable rule when props are added
// eslint-disable-next-line no-empty-pattern
const Template = ({ }: DividerProps): TemplateResult => html`
        <pie-divider></pie-divider>
        `;

export const Default: Story<DividerProps> = (args: DividerProps) => Template(args);
Default.args = {
    ...defaultArgs,
};
