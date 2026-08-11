import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-webc/components/icon-with-background';
import {
    type IconWithBackgroundProps,
    shapes,
    sizes,
    variants,
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
        size: {
            description: 'The size of the component (sizes both the container and the slotted icon).',
            control: 'select',
            options: sizes,
            defaultValue: {
                summary: defaultProps.size,
            },
        },
        variant: {
            description: 'The background colour variant of the component.',
            control: 'select',
            options: variants,
            defaultValue: {
                summary: defaultProps.variant,
            },
        },
        isStrong: {
            description: 'When true, applies a stronger colour emphasis. Has no effect on the `neutral-alternative` variant.',
            control: 'boolean',
            defaultValue: {
                summary: String(defaultProps.isStrong),
            },
        },
        isDimmed: {
            description: 'When true, applies a dimmed styling to the component.',
            control: 'boolean',
            defaultValue: {
                summary: String(defaultProps.isDimmed),
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

const Template: TemplateFunction<IconWithBackgroundProps> = ({
    shape,
    size,
    variant,
    isStrong,
    isDimmed,
}) => html`
    <pie-icon-with-background shape="${ifDefined(shape)}" size="${ifDefined(size)}" variant="${ifDefined(variant)}" ?isStrong="${isStrong}" ?isDimmed="${isDimmed}">
        <icon-heart-filled></icon-heart-filled>
    </pie-icon-with-background>
`;

const createIconWithBackgroundStory = createStory<IconWithBackgroundProps>(Template, defaultArgs);

export const Circle = createIconWithBackgroundStory({ shape: 'circle' });
export const Square = createIconWithBackgroundStory({ shape: 'square' });

export const Small = createIconWithBackgroundStory({ size: 'small' });
export const Medium = createIconWithBackgroundStory({ size: 'medium' });
export const Large = createIconWithBackgroundStory({ size: 'large' });
export const Xlarge = createIconWithBackgroundStory({ size: 'xlarge' });

export const Neutral = createIconWithBackgroundStory({ variant: 'neutral' });
export const NeutralAlternative = createIconWithBackgroundStory({ variant: 'neutral-alternative' }, {
    controls: {
        exclude: ['isStrong'],
    },
});
export const Information = createIconWithBackgroundStory({ variant: 'information' });
export const Success = createIconWithBackgroundStory({ variant: 'success' });
export const Error = createIconWithBackgroundStory({ variant: 'error' });
export const Warning = createIconWithBackgroundStory({ variant: 'warning' });
export const Brand02 = createIconWithBackgroundStory({ variant: 'brand-02' });
export const Brand03 = createIconWithBackgroundStory({ variant: 'brand-03' });
export const Brand04 = createIconWithBackgroundStory({ variant: 'brand-04' });
export const Brand05 = createIconWithBackgroundStory({ variant: 'brand-05' });
export const Brand06 = createIconWithBackgroundStory({ variant: 'brand-06' });
export const Brand08 = createIconWithBackgroundStory({ variant: 'brand-08' });

export const Brand05Strong = createIconWithBackgroundStory({ variant: 'brand-05', isStrong: true });

export const Dimmed = createIconWithBackgroundStory({ isDimmed: true });
