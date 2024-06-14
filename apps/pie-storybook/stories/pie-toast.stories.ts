import { html } from 'lit';

/* eslint-disable import/no-duplicates */
import '@justeattakeaway/pie-toast';
import { ToastProps } from '@justeattakeaway/pie-toast';
/* eslint-enable import/no-duplicates */

import { type StoryMeta } from '../types';
import { createStory } from '../utilities';

type ToastStoryMeta = StoryMeta<ToastProps>;

const defaultArgs: ToastProps = {};

const toastStoryMeta: ToastStoryMeta = {
    title: 'Toast',
    component: 'pie-toast',
    argTypes: {},
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
};

export default toastStoryMeta;

// TODO: remove the eslint-disable rule when props are added
// eslint-disable-next-line no-empty-pattern
const Template = ({}: ToastProps) => html`
    <pie-toast></pie-toast>
`;

export const Default = createStory<ToastProps>(Template, defaultArgs)();
