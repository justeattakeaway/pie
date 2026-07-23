import { html } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-webc/components/icon-with-background';
import { type IconWithBackgroundProps } from '@justeattakeaway/pie-webc/components/icon-with-background';
import '@justeattakeaway/pie-icons-webc/dist/IconHeartFilled.js';

import { createStory } from '../utilities';

type IconWithBackgroundStoryMeta = Meta<IconWithBackgroundProps>;

const defaultArgs: IconWithBackgroundProps = {};

const iconWithBackgroundStoryMeta: IconWithBackgroundStoryMeta = {
    title: 'Components/Icon With Background',
    component: 'pie-icon-with-background',
    argTypes: {},
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
};

export default iconWithBackgroundStoryMeta;

// TODO: remove the eslint-disable rule when props are added
// eslint-disable-next-line no-empty-pattern
const Template = ({}: IconWithBackgroundProps) => html`
    <pie-icon-with-background>
        <icon-heart-filled></icon-heart-filled>
    </pie-icon-with-background>
`;

export const Default = createStory<IconWithBackgroundProps>(Template, defaultArgs)();
