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

import { createStory, createVariantStory, type TemplateFunction } from '../../utilities';

type IconWithBackgroundStoryMeta = Meta<IconWithBackgroundProps>;

const defaultArgs: IconWithBackgroundProps = {
    ...defaultProps,
};

const iconWithBackgroundStoryMeta: IconWithBackgroundStoryMeta = {
    title: 'Icon With Background',
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

const Template: TemplateFunction<IconWithBackgroundProps> = ({
    shape,
    size,
    variant,
    isStrong,
    disabled,
}) => html`
    <pie-icon-with-background shape="${ifDefined(shape)}" size="${ifDefined(size)}" variant="${ifDefined(variant)}" ?isStrong="${isStrong}" ?disabled="${disabled}">
        <icon-heart-filled></icon-heart-filled>
    </pie-icon-with-background>
`;

const createIconWithBackgroundStory = createStory<IconWithBackgroundProps>(Template, defaultArgs);

export const Default = createIconWithBackgroundStory();
export const Circle = createIconWithBackgroundStory({ shape: 'circle' });
export const Square = createIconWithBackgroundStory({ shape: 'square' });

const shapePropOptions = {
    shape: [...shapes],
};

export const ShapeVariations = createVariantStory<IconWithBackgroundProps>(Template, shapePropOptions);

const shapeAndSizePropOptions = {
    shape: [...shapes],
    size: [...sizes],
};

export const ShapeAndSizeVariations = createVariantStory<IconWithBackgroundProps>(Template, shapeAndSizePropOptions);

const variantAndStrengthPropOptions = {
    variant: [...variants],
    isStrong: [true, false],
};

export const VariantVariations = createVariantStory<IconWithBackgroundProps>(Template, variantAndStrengthPropOptions);

export const Disabled = createIconWithBackgroundStory({ disabled: true });
