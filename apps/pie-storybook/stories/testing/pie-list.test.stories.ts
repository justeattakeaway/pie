import { html } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-webc/components/list';
import '@justeattakeaway/pie-webc/components/list-item';
import '@justeattakeaway/pie-icons-webc/dist/IconPlaceholder';

import { type ListProps } from '@justeattakeaway/pie-webc/components/list';

import { createStory } from '../../utilities';

type ListStoryMeta = Meta<ListProps>;

const defaultArgs: ListProps = {};

const listStoryMeta: ListStoryMeta = {
    title: 'List',
    component: 'pie-list',
    argTypes: {},
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
};

export default listStoryMeta;

// TODO: remove the eslint-disable rule when props are added
// eslint-disable-next-line no-empty-pattern
const Template = ({}: ListProps) => html`
    <button>Focus anchor</button>
    <pie-list style="min-width: 350px; display: flex; flex-direction: column; gap: 10px;">
        <pie-list-item
            primaryText="Primary text"
            secondaryText="Secondary text"
            metaText="Meta text">
            <icon-placeholder slot="leading"></icon-placeholder>
        </pie-list-item>

        <pie-list-item
            primaryText="Primary text"
            secondaryText="Secondary text"
            metaText="Meta text">
        </pie-list-item>

        <pie-list-item
            primaryText="Primary text"
            secondaryText="Secondary text">
        </pie-list-item>

        <pie-list-item
            primaryText="Primary text">
        </pie-list-item>

        <pie-list-item
            is-compact
            is-bold
            primaryText="Primary text">
        </pie-list-item>

        <pie-list-item
            primaryText="Primary text"
            secondaryText="Secondary text">
            <icon-placeholder slot="trailing"></icon-placeholder>
        </pie-list-item>

        <pie-list-item
            primaryText="Primary text">
            <icon-placeholder slot="trailing"></icon-placeholder>
        </pie-list-item>

        <pie-list-item
            primaryText="Primary text"
            secondaryText="Secondary text">
            <icon-placeholder slot="leading"></icon-placeholder>
            <icon-placeholder slot="trailing"></icon-placeholder>
        </pie-list-item>
    </pie-list>

    <h2>Padding override</h2>
    <pie-list style="--list-item-inline-padding-override: var(--dt-spacing-f);">
        <pie-list-item
            primaryText="Primary text">
            <icon-placeholder slot="trailing"></icon-placeholder>
        </pie-list-item>
        <pie-list-item
            primaryText="Primary text">
            <icon-placeholder slot="trailing"></icon-placeholder>
        </pie-list-item>
    </pie-list>
    <button>Focus anchor</button>
`;

export const Default = createStory<ListProps>(Template, defaultArgs)();
