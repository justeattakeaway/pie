import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-list';
import { type ListProps, defaultProps } from '@justeattakeaway/pie-list';
import '@justeattakeaway/pie-list/dist/pie-list-item';

import { createStory } from '../../utilities';

type ListStoryMeta = Meta<ListProps>;

const defaultArgs: ListProps = { ...defaultProps };

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

const Template = ({ variant, hasDividers, listType }: ListProps) => html`
    <pie-list
        variant="${ifDefined(variant)}"
        list-type="${ifDefined(listType)}"
        ?has-dividers=${hasDividers}>
        <pie-list-item>Item 1</pie-list-item>
        <pie-list-item>Item 2</pie-list-item>
        <pie-list-item>Item 3</pie-list-item>
    </pie-list>
`;

export const Default = createStory<ListProps>(Template, defaultArgs)();

export const Compact = createStory<ListProps>(Template, {
    ...defaultArgs,
    variant: 'compact',
})();

export const WithDividers = createStory<ListProps>(Template, {
    ...defaultArgs,
    hasDividers: true,
})();

export const CompactWithDividers = createStory<ListProps>(Template, {
    ...defaultArgs,
    variant: 'compact',
    hasDividers: true,
})();

export const Ordered = createStory<ListProps>(Template, {
    ...defaultArgs,
    listType: 'ordered',
})();
