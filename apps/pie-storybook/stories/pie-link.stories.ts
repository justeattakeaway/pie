import { html, TemplateResult } from 'lit';
import { type StoryObj as Story } from '@storybook/web-components';
import { PieLink, LinkProps } from '@justeattakeaway/pie-link';
import { type StoryMeta } from '../types';

// This prevents storybook from tree shaking the components
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const keptReferences = [PieLink];

type LinkStoryMeta = StoryMeta<LinkProps>;

const defaultArgs: LinkProps = {

};

const linkStoryMeta: LinkStoryMeta = {
    title: 'Link',
    component: 'pie-link',
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

export default linkStoryMeta;

// TODO: remove the eslint-disable rule when props are added
// eslint-disable-next-line no-empty-pattern
const Template = ({ }: LinkProps): TemplateResult => html`
  <pie-link></pie-link>
`;

export const Default: Story<LinkProps> = (args: LinkProps) => Template(args);
Default.args = {
    ...defaultArgs,
};
