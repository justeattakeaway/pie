import { html } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-webc/components/dropdown';
import { type DropdownProps } from '@justeattakeaway/pie-webc/components/dropdown';

import { createStory } from '../../utilities';

type DropdownStoryMeta = Meta<DropdownProps>;

const defaultArgs: DropdownProps = {};

const dropdownStoryMeta: DropdownStoryMeta = {
    title: 'Dropdown',
    component: 'pie-dropdown',
    argTypes: {},
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
};

export default dropdownStoryMeta;

// TODO: remove the eslint-disable rule when props are added
// eslint-disable-next-line no-empty-pattern
const Template = ({}: DropdownProps) => html`
    <pie-dropdown></pie-dropdown>
`;

export const Default = createStory<DropdownProps>(Template, defaultArgs)();
