import { html, TemplateResult } from 'lit';
import { type StoryObj as Story } from '@storybook/web-components';
import { PieCardContainer, CardContainerProps } from '@justeattakeaway/pie-card-container';
import { type StoryMeta } from '../types';

// This prevents storybook from tree shaking the components
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const keptReferences = [PieCardContainer];

type CardContainerStoryMeta = StoryMeta<CardContainerProps>;

const defaultArgs: CardContainerProps = {};

const cardContainerStoryMeta: CardContainerStoryMeta = {
    title: 'Card Container',
    component: 'pie-card-container',
    argTypes: {},
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
};

export default cardContainerStoryMeta;

// TODO: remove the eslint-disable rule when props are added
// eslint-disable-next-line no-empty-pattern
const Template = ({ }: CardContainerProps): TemplateResult => html`
    <pie-card-container></pie-card-container>
`;

export const Default: Story<CardContainerProps> = (args: CardContainerProps) => Template(args);
Default.args = {
    ...defaultArgs,
};
