import { html } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-toast-provider';
import { type ToastProviderProps } from '@justeattakeaway/pie-toast-provider';

import { createStory } from '../utilities';

type ToastProviderStoryMeta = Meta<ToastProviderProps>;

const defaultArgs: ToastProviderProps = {};

const toastProviderStoryMeta: ToastProviderStoryMeta = {
    title: 'Toast Provider',
    component: 'pie-toast-provider',
    argTypes: {},
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
};

export default toastProviderStoryMeta;

// TODO: remove the eslint-disable rule when props are added
// eslint-disable-next-line no-empty-pattern
const Template = ({}: ToastProviderProps) => html`
    <pie-toast-provider></pie-toast-provider>
`;

export const Default = createStory<ToastProviderProps>(Template, defaultArgs)();
