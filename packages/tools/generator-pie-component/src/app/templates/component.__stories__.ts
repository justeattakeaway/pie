import type { Meta, StoryObj as Story } from '@storybook/web-components';
import { Pie<%= componentName%>, <%= componentName%>Props } from '@justeattakeaway/pie-<%= fileName %>';
import { html, TemplateResult } from 'lit';

// TODO: Remove this const when other exports from PieModal are used on Stories, 
// otherwise tree-shaking will get rid of the web component definition
const keptReference = Pie<%= componentName%>; 
export default {
    title: '<%= readme %>',
    component: 'pie-<%= fileName %>',
    argTypes: {

    },
    args: {

    },
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
} as Meta;

const Template = ({}: <%= componentName%>Props): TemplateResult => html`
        <pie-<%= fileName %>/>
        `;

const defaultArgs: <%= componentName%>Props = {
};

export const Default: Story<<%= componentName%>Props> = (args: <%= componentName%>Props) => Template(args);

Default.args = {
    ...defaultArgs,
};
