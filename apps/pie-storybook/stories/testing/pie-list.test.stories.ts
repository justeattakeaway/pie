import { html } from 'lit';
import { type Meta } from '@storybook/web-components';

import { type ListProps } from '@justeattakeaway/pie-list';
import '@justeattakeaway/pie-list';
import '@justeattakeaway/pie-list/dist/pie-list-item';

import { createStory, createVariantStory } from '../../utilities';

type ListStoryMeta = Meta<ListProps>;

const defaultArgs: ListProps = {
    variant: 'default',
    hasDividers: false,
    listType: 'unordered',
};

const listStoryMeta: ListStoryMeta = {
    title: 'List',
    component: 'pie-list',
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'compact'],
        },
        hasDividers: {
            control: 'boolean',
        },
        listType: {
            control: 'select',
            options: ['unordered', 'ordered'],
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
        variant=${variant}
        list-type=${listType ?? 'unordered'}
        ?has-dividers=${hasDividers}>
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

const propsMatrix: Partial<Record<keyof ListProps, unknown[]>> = {
    variant: ['default', 'compact'],
    hasDividers: [true, false],
    listType: ['unordered', 'ordered'],
};

export const Variants = createVariantStory<ListProps>(Template, propsMatrix);
