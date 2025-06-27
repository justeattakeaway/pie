import { html } from 'lit';
import { type Meta } from '@storybook/web-components';

import { type ListProps } from '@justeattakeaway/pie-list';
import '@justeattakeaway/pie-list';
import '@justeattakeaway/pie-list/dist/pie-list-item';

import { createStory } from '../../utilities';

type ListStoryMeta = Meta<ListProps>;

const defaultArgs: ListProps = {
    variant: 'default',
    dividers: false,
};

const listStoryMeta: ListStoryMeta = {
    title: 'List',
    component: 'pie-list',
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'compact'],
        },
        dividers: {
            control: 'boolean',
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

const Template = ({ variant, dividers }: ListProps) => html`
    <pie-list variant=${variant} ?dividers=${dividers}>
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
    dividers: true,
})();

export const CompactWithDividers = createStory<ListProps>(Template, {
    ...defaultArgs,
    variant: 'compact',
    dividers: true,
})();
