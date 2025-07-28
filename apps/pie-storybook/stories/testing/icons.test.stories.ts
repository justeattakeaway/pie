import { html } from 'lit/static-html.js';
import '@justeattakeaway/pie-icons-webc';
import {
    regularIconSizes, largeIconSizeDefault, regularIconSizeDefault, largeIconSizeModule, type LargeIconSize, type RegularIconSize,
} from '@justeattakeaway/pie-icons-configs';
import { createStory, createVariantStory, type TemplateFunction } from '../../utilities';

const iconsStoryMeta = {
    title: 'Icons',
    parameters: {
        layout: 'fullscreen',
    },
};

export default iconsStoryMeta;

type RegularIconProps = {
    size: RegularIconSize
}

const defaultRegularIconProps: RegularIconProps = {
    size: regularIconSizeDefault,
};

type LargeIconProps = {
    size: LargeIconSize
}

const defaultLargeIconProps: LargeIconProps = {
    size: largeIconSizeDefault,
};

const AlcoholFilledRegularIconTemplate: TemplateFunction<RegularIconProps> = ({ size }) => html`
    <div class="c-iconGrid">
        <icon-alcohol-filled size=${size}></icon-alcohol-filled>
    </div>
`;

const AlcoholFilledRegularIconWithOverrideTemplate: TemplateFunction<RegularIconProps> = ({ size }) => html`
    <div style="--icon-size-override: 200px;">
        <p>size: ${size}</p>
        <p>--icon-size-override: 200px</p>
        <icon-alcohol-filled size=${size}></icon-alcohol-filled>
    </div>
`;

const AlcoholFilledLargeIconTemplate: TemplateFunction<LargeIconProps> = ({ size }) => html`
    <div class="c-iconGrid">
        <icon-alcohol-filled-large size=${size}></icon-alcohol-filled-large>
    </div>
`;

const AlcoholFilledLargeIconWithOverrideTemplate: TemplateFunction<LargeIconProps> = ({ size }) => html`
    <div style="--icon-size-override: 200px;">
        <p>size: ${size}px</p>
        <p>--icon-size-override: 200px</p>
        <icon-alcohol-filled-large size=${size}></icon-alcohol-filled-large>
    </div>
`;

const AlcoholFilledIconWithClassTemplate: TemplateFunction<RegularIconProps> = ({ size }) => html`
    <div class="c-iconGrid">
        <icon-alcohol-filled size=${size} class="custom-class"></icon-alcohol-filled>
    </div>
`;

export const AlcoholFilledRegularIcon = createStory(AlcoholFilledRegularIconTemplate, defaultRegularIconProps)({}, {
    layout: 'centered',
    argTypes: {
        size: {
            control: 'select',
            options: regularIconSizes,
            defaultValue: {
                summary: regularIconSizeDefault,
            },
        },
    },
});

export const AlcoholFilledRegularIconWithOverride = createStory(AlcoholFilledRegularIconWithOverrideTemplate, defaultRegularIconProps)({}, {
    layout: 'centered',
    argTypes: {
        size: {
            control: 'select',
            options: regularIconSizes,
            defaultValue: {
                summary: regularIconSizeDefault,
            },
        },
    },
});

export const AlcoholFilledLargeIcon = createStory(AlcoholFilledLargeIconTemplate, defaultLargeIconProps)({}, {
    layout: 'centered',
    argTypes: {
        size: {
            control: { type: 'number', min: largeIconSizeDefault, step: largeIconSizeModule },
            defaultValue: {
                summary: largeIconSizeDefault,
            },
        },
    },
});

export const AlcoholFilledLargeIconWithOverride = createStory(AlcoholFilledLargeIconWithOverrideTemplate, defaultLargeIconProps)({}, {
    layout: 'centered',
    argTypes: {
        size: {
            control: { type: 'number', min: largeIconSizeDefault, step: largeIconSizeModule },
            defaultValue: {
                summary: largeIconSizeDefault,
            },
        },
    },
});

const regularIconPropMatrix : Partial<Record<keyof RegularIconProps, unknown[]>> = {
    size: [...regularIconSizes],
};

export const AlcoholFilledRegularIconVariations = createVariantStory<RegularIconProps>(AlcoholFilledRegularIconTemplate, regularIconPropMatrix);

const largeIconPropMatrix : Partial<Record<keyof LargeIconProps, unknown[]>> = {
    size: [largeIconSizeDefault, 64, 128],
};

export const AlcoholFilledLargeIconVariations = createVariantStory<LargeIconProps>(AlcoholFilledLargeIconTemplate, largeIconPropMatrix);

export const AlcoholFilledIconWithClass = createStory(AlcoholFilledIconWithClassTemplate, defaultRegularIconProps)({}, {
    layout: 'centered',
    argTypes: {
        size: {
            control: 'select',
            options: regularIconSizes,
            defaultValue: {
                summary: regularIconSizeDefault,
            },
        },
    },
});
