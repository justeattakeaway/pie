import { html } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-list';
import { type ListProps } from '@justeattakeaway/pie-list';

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

const Template = ({ variant, dividers }: ListProps) => html`
    <pie-list variant=${variant} ?dividers=${dividers}>
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
    dividers: true,
})();

export const CompactWithDividers = createStory<ListProps>(Template, {
    ...defaultArgs,
    variant: 'compact',
    dividers: true,
})();
