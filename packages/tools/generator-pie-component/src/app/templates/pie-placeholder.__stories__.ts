import { html, TemplateResult<% if (needsRTL) { %>, nothing <% } %>} from 'lit';
import { type StoryObj as Story } from '@storybook/web-components';
import { Pie<%= componentName %>, <%= componentName %>Props } from '@justeattakeaway/pie-<%= fileName %>';
import { type StoryMeta } from '../types';
<% if (needsRTL) { %>import { i18nArgTypes } from '../args/commonArgsTypes';<% } %>

// This prevents storybook from tree shaking the components
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const keptReferences = [Pie<%= componentName %>];

type <%= componentName %>StoryMeta = StoryMeta<<%= componentName %>Props>;

const defaultArgs: <%= componentName %>Props = {};

const <%= componentNameCamelCase %>StoryMeta: <%= componentName %>StoryMeta = {
    title: '<%= displayName %>',
    component: 'pie-<%= fileName %>',
    argTypes: {
    <% if (needsRTL) { %>...i18nArgTypes,<% } %>
    },
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
};

export default <%= componentNameCamelCase %>StoryMeta;

// TODO: remove the eslint-disable rule when props are added
// eslint-disable-next-line no-empty-pattern
const Template = ({ <% if (needsRTL) { %>dir<% } %> }: <%= componentName %>Props): TemplateResult => html`
  <pie-<%= fileName %><% if (needsRTL) { %> dir="${dir}"<% } %>></pie-<%= fileName %>>
`;

export const Default: Story<<%= componentName %>Props> = (args: <%= componentName %>Props) => Template(args);
Default.args = {
    ...defaultArgs,
};
