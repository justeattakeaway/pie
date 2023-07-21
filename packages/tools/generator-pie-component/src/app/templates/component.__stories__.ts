import { html, TemplateResult } from 'lit';
import type { StoryObj as Story } from '@storybook/web-components';
import { Pie<%= componentName %>, <%= componentName %>Props } from '@justeattakeaway/pie-<%= fileName %>';
import { StoryMeta } from '../types';

// TODO: Remove this const when other exports from PieModal are used on Stories, 
// otherwise tree-shaking will get rid of the web component definition
const keptReference = Pie<%= componentName %>;

type <%= componentName %>StoryMeta = StoryMeta<<%= componentName %>Props>;

const defaultArgs: <%= componentName %>Props = {
};

const <%= componentNameCamelCase %>StoryMeta: <%= componentName %>StoryMeta = {
    title: '<%= displayName %>',
    component: 'pie-<%= fileName %>',
    argTypes: {

    },
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
}

export default <%= componentNameCamelCase %>StoryMeta;

const Template = ({}: <%= componentName %>Props): TemplateResult => html`
        <pie-<%= fileName %>/>
        `;

export const Default: Story<<%= componentName %>Props> = (args: <%= componentName %>Props) => Template(args);
Default.args = {
    ...defaultArgs,
};
