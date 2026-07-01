import { html } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-webc/components/list';
import '@justeattakeaway/pie-webc/components/list-item';
import '@justeattakeaway/pie-webc/components/tag';
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
    <style>
        pie-list {
            max-width: 450px;
        }
    </style>
    <button>Focus anchor</button>
    <pie-list>
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
            <pie-tag slot="trailing">Label</pie-tag>
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

    <h2>Compact list</h2>
    <pie-list>
        <pie-list-item
            is-compact
            primaryText="Primary text">
            <icon-placeholder slot="trailing"></icon-placeholder>
        </pie-list-item>
        <pie-list-item
            is-compact
            primaryText="Primary text">
            <icon-placeholder slot="trailing"></icon-placeholder>
        </pie-list-item>
        <pie-list-item
            is-compact
            primaryText="Primary text">
            <icon-placeholder slot="trailing"></icon-placeholder>
        </pie-list-item>
    </pie-list>

    <h2>Tags</h2>
    <pie-list>
        <pie-list-item
            primaryText="Primary text"
            secondaryText="Secondary text">
            <pie-tag slot="trailing">Label</pie-tag>
        </pie-list-item>
        <pie-list-item
            primaryText="Primary text"
            secondaryText="Secondary text">
            <pie-tag slot="trailing">Label</pie-tag>
        </pie-list-item>
        <pie-list-item
            primaryText="Primary text"
            secondaryText="Secondary text">
            <pie-tag slot="trailing">Label</pie-tag>
        </pie-list-item>
    </pie-list>

    <h3>Tags (compact)</h3>
    <pie-list>
        <pie-list-item
            is-compact
            primaryText="Primary text">
            <pie-tag slot="trailing">Label</pie-tag>
        </pie-list-item>
        <pie-list-item
            is-compact
            primaryText="Primary text">
            <pie-tag slot="trailing">Label</pie-tag>
        </pie-list-item>
        <pie-list-item
            is-compact
            primaryText="Primary text">
            <pie-tag slot="trailing">Label</pie-tag>
        </pie-list-item>
    </pie-list>

    <h2>Alignment override</h2>
    <pie-list style="--list-item-alignment-override: center;">
        <pie-list-item
            primaryText="Primary text"
            secondaryText="Secondary text">
            <icon-placeholder slot="trailing"></icon-placeholder>
        </pie-list-item>
        <pie-list-item
            primaryText="Primary text"
            secondaryText="Secondary text">
            <icon-placeholder slot="trailing"></icon-placeholder>
        </pie-list-item>
    </pie-list>

    <h2>Custom Padding override</h2>
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

    <h2>Removed Padding - override</h2>
    <pie-list style="--list-item-inline-padding-override: 0;">
        <pie-list-item
            primaryText="Primary text">
            <icon-placeholder slot="trailing"></icon-placeholder>
        </pie-list-item>
        <pie-list-item
            primaryText="Primary text">
            <icon-placeholder slot="trailing"></icon-placeholder>
        </pie-list-item>
    </pie-list>

    <h2>Edge cases</h2>
    <h3>Long text</h3>
    <pie-list>
        <pie-list-item
            primaryText="Primary text that goes on far too long Primary text that goes on far too long"
            secondaryText="Secondary text that goes on far too long" Secondary text that goes on far too long"
            metaText="Some very long awful meta text Some very long awful meta text">
            <icon-placeholder slot="leading"></icon-placeholder>
        </pie-list-item>

        <pie-list-item
            primaryText="Primary text that goes on far too long Primary text that goes on far too long"
            secondaryText="Secondary text that goes on far too long" Secondary text that goes on far too long"
            metaText="Some very long awful meta text Some very long awful meta text">
            <icon-placeholder slot="leading"></icon-placeholder>
        </pie-list-item>

        <pie-list-item
            primaryText="Primary text that goes on far too long Primary text that goes on far too long"
            secondaryText="Secondary text that goes on far too long" Secondary text that goes on far too long"
            metaText="Some very long awful meta text Some very long awful meta text">
            <icon-placeholder slot="leading"></icon-placeholder>
        </pie-list-item>
    </pie-list>

    <h3>Long text + center aligned</h3>
    <pie-list style="--list-item-alignment-override: center;">
        <pie-list-item
            primaryText="Primary text that goes on far too long Primary text that goes on far too long"
            secondaryText="Secondary text that goes on far too long" Secondary text that goes on far too long Secondary text that goes on far too long" Secondary text that goes on far too long">
            <icon-placeholder slot="leading"></icon-placeholder>
            <pie-tag slot="trailing">Label</pie-tag>
        </pie-list-item>

        <pie-list-item
            primaryText="Primary text that goes on far too long Primary text that goes on far too long"
            secondaryText="Secondary text that goes on far too long" Secondary text that goes on far too long Secondary text that goes on far too long" Secondary text that goes on far too long">
            <icon-placeholder slot="leading"></icon-placeholder>
            <pie-tag slot="trailing">Label</pie-tag>
        </pie-list-item>

        <pie-list-item
            primaryText="Primary text that goes on far too long Primary text that goes on far too long"
            secondaryText="Secondary text that goes on far too long" Secondary text that goes on far too long Secondary text that goes on far too long" Secondary text that goes on far too long">
            <icon-placeholder slot="leading"></icon-placeholder>
            <pie-tag slot="trailing">Label</pie-tag>
        </pie-list-item>
    </pie-list>
    <button>Focus anchor</button>
`;

export const Default = createStory<ListProps>(Template, defaultArgs)();
