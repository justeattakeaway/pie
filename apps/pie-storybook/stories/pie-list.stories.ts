import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type Meta } from '@storybook/web-components';

import {
    type ListProps,
    defaultProps,
    variants,
    listTypes,
} from '@justeattakeaway/pie-list';
import '@justeattakeaway/pie-list';
import '@justeattakeaway/pie-list/dist/pie-list-item';

import { createStory } from '../utilities';

type ListStoryMeta = Meta<ListProps>;

const defaultArgs: ListProps = { ...defaultProps };

const listStoryMeta: ListStoryMeta = {
    title: 'Components/List',
    component: 'pie-list',
    argTypes: {
        variant: {
            control: 'select',
            options: variants,
            defaultValue: {
                summary: defaultProps.variant,
            },
        },
        hasDividers: {
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.hasDividers,
            },
        },
        listType: {
            control: 'select',
            options: listTypes,
            defaultValue: {
                summary: defaultProps.listType,
            },
        },
    },
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
        variant=${ifDefined(variant)}
        listType=${ifDefined(listType)}
        ?hasDividers=${hasDividers}>
        <pie-list-item primaryText="First item"></pie-list-item>
        <pie-list-item primaryText="Second item"></pie-list-item>
        <pie-list-item primaryText="Third item"></pie-list-item>
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
