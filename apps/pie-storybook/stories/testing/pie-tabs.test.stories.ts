import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-tabs';
import { type TabsProps as TabsPropsBase } from '@justeattakeaway/pie-tabs';

import { createStory, createVariantStory, sanitizeAndRenderHTML } from '../../utilities';
import { type SlottedComponentProps } from '../../types';

type TabsProps = SlottedComponentProps<TabsPropsBase>;
type TabsStoryMeta = Meta<TabsProps>;

const slot = `
        <pie-tab-panel title="Tab 1">Content 1</pie-tab-panel>
        <pie-tab-panel title="Tab 2">Content 2</pie-tab-panel>
        <pie-tab-panel title="Tab 3" disabled>Content 3</pie-tab-panel>
        <pie-tab-panel title="Tab 4">Content 4</pie-tab-panel>
    `;

const defaultArgs: TabsProps = {
    slot,
};

const tabsStoryMeta: TabsStoryMeta = {
    title: 'Tabs',
    component: 'pie-tabs',
    argTypes: {
        variant: {
            description: 'Set the variant of the tabs.',
            control: 'select',
            options: ['global', 'contained'],
            defaultValue: {
                summary: 'global',
            },
        },
        orientation: {
            description: 'Set the orientation of the tabs.',
            control: 'select',
            options: ['horizontal', 'vertical'],
            defaultValue: {
                summary: 'horizontal',
            },
        },
        slot: {
            description: 'The default slot is used to pass `pie-tab-panel` elements. You must provide at least one `pie-tab-panel` element for the tabs to be visible.',
            control: 'text',
        },
    },
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/branch/Mn7rERbBnNmaO2UAHT8qDz/%E2%9C%A8--Core--Web-Components--PIE-3-?node-id=12502-11771',
        },
    },
};

export default tabsStoryMeta;

const Template = ({ slot, variant, orientation }: TabsProps) => html`
    <pie-tabs
        variant=${ifDefined(variant)}
        orientation=${ifDefined(orientation)}
        data-test-id="pie-tabs"  
    >
        ${sanitizeAndRenderHTML(slot, { ALLOWED_TAGS: ['pie-tab-panel'] })}
    </pie-tabs>
`;

export const Default = createStory<TabsProps>(Template, defaultArgs)();

const sharedProperties = {
    orientation: ['horizontal', 'vertical'],
    variant: ['global', 'contained'],
    slot: [slot],
};

export const DefaultPropVariations = createVariantStory<TabsProps>(Template, sharedProperties);

