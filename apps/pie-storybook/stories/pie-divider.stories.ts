import { html, TemplateResult } from 'lit';
import { type StoryObj as Story } from '@storybook/web-components';
import { PieDivider, DividerProps } from '@justeattakeaway/pie-divider';
import { type StoryMeta } from '../types';

// TODO: Remove this const when other exports from PieDivider are used on Stories,
// otherwise tree-shaking will get rid of the web component definition
const keptReference = PieDivider;

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
