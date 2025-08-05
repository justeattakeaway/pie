import { html } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-tabs';
import { type TabsProps } from '@justeattakeaway/pie-tabs';

import { createStory } from '../utilities';

type TabsStoryMeta = Meta<TabsProps>;

const defaultArgs: TabsProps = {};

const tabsStoryMeta: TabsStoryMeta = {
    title: 'Components/Tabs',
    component: 'pie-tabs',
    argTypes: {},
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
};

export default tabsStoryMeta;

// TODO: remove the eslint-disable rule when props are added
// eslint-disable-next-line no-empty-pattern
const Template = ({}: TabsProps) => html`
    <pie-tabs></pie-tabs>
`;

export const Default = createStory<TabsProps>(Template, defaultArgs)();
