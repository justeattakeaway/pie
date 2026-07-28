import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-webc/components/icon-with-background';
import {
    type IconWithBackgroundProps,
    shapes,
    defaultProps,
} from '@justeattakeaway/pie-webc/components/icon-with-background';
import '@justeattakeaway/pie-icons-webc/dist/IconHeartFilled.js';

import { createStory, type TemplateFunction } from '../utilities';

type IconWithBackgroundStoryMeta = Meta<IconWithBackgroundProps>;

const defaultArgs: IconWithBackgroundProps = {
    ...defaultProps,
};

const iconWithBackgroundStoryMeta: IconWithBackgroundStoryMeta = {
    title: 'Components/Icon With Background',
    component: 'pie-icon-with-background',
    argTypes: {
        shape: {
            description: 'The shape of the background surrounding the icon.',
            control: 'select',
            options: shapes,
            defaultValue: {
                summary: defaultProps.shape,
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

export default iconWithBackgroundStoryMeta;

const Template: TemplateFunction<IconWithBackgroundProps> = ({ shape }) => html`
    <pie-icon-with-background shape="${ifDefined(shape)}">
        <icon-heart-filled></icon-heart-filled>
    </pie-icon-with-background>
`;

const createIconWithBackgroundStory = createStory<IconWithBackgroundProps>(Template, defaultArgs);

export const Circle = createIconWithBackgroundStory({ shape: 'circle' });
export const Square = createIconWithBackgroundStory({ shape: 'square' });
