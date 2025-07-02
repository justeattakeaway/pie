import { html } from 'lit';
import { type Meta } from '@storybook/web-components';
import { type TabsProps as TabsPropsBase } from '@justeattakeaway/pie-tabs';

import '@justeattakeaway/pie-tabs';
import '@justeattakeaway/pie-tabs/dist/pie-tab-panel';

import { type SlottedComponentProps } from '../types';
import { createStory, sanitizeAndRenderHTML } from '../utilities';

type TabsProps = SlottedComponentProps<TabsPropsBase>;
type TabsStoryMeta = Meta<TabsProps>;

const slot = `
        <pie-tab-panel title="Tab 1">Content 1</pie-tab-panel>
        <pie-tab-panel title="Tab 2">Content 2</pie-tab-panel>
        <pie-tab-panel title="Tab 3">Content 3</pie-tab-panel>
        <pie-tab-panel title="Tab 4">Content 4</pie-tab-panel>
    `;

const defaultArgs: TabsProps = {
    slot,
};

const tabsStoryMeta: TabsStoryMeta = {
    title: 'Tabs',
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
const Template = ({ slot }: TabsProps) => html`
    <pie-tabs>
        ${sanitizeAndRenderHTML(slot, { ALLOWED_TAGS: ['pie-tab-panel'] })}
    </pie-tabs>
`;

export const Default = createStory<TabsProps>(Template, defaultArgs)();
