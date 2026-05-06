import { html } from 'lit/static-html.js';
import '@justeattakeaway/pie-icons-webc';
import {
    regularIconSizes,
    largeIconSizeDefault,
    regularIconSizeDefault,
    largeIconSizeModule,
    iconFillDefault,
    type LargeIconSize,
    type RegularIconSize,
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
    size: RegularIconSize;
    fill: string;
}

const defaultRegularIconProps: RegularIconProps = {
    size: regularIconSizeDefault,
    fill: iconFillDefault,
};

type LargeIconProps = {
    size: LargeIconSize;
    fill: string;
}

const defaultLargeIconProps: LargeIconProps = {
    size: largeIconSizeDefault,
    fill: iconFillDefault,
};

const AlcoholFilledRegularIconTemplate: TemplateFunction<RegularIconProps> = ({ size, fill }) => html`
    <div class="c-iconGrid">
        <icon-alcohol-filled size=${size} fill=${fill}></icon-alcohol-filled>
    </div>
`;

const AlcoholFilledRegularIconWithOverrideTemplate: TemplateFunction<RegularIconProps> = ({ size, fill }) => html`
    <div style="--icon-size-override: 200px;">
        <p>size: ${size}</p>
        <p>--icon-size-override: 200px</p>
        <icon-alcohol-filled size=${size} fill=${fill}></icon-alcohol-filled>
    </div>
`;

const AlcoholFilledLargeIconTemplate: TemplateFunction<LargeIconProps> = ({ size, fill }) => html`
    <div class="c-iconGrid">
        <icon-alcohol-filled-large size=${size} fill=${fill}></icon-alcohol-filled-large>
    </div>
`;

const AlcoholFilledLargeIconWithOverrideTemplate: TemplateFunction<LargeIconProps> = ({ size, fill }) => html`
    <div style="--icon-size-override: 200px;">
        <p>size: ${size}px</p>
        <p>--icon-size-override: 200px</p>
        <icon-alcohol-filled-large size=${size} fill=${fill}></icon-alcohol-filled-large>
    </div>
`;

const AlcoholFilledIconWithClassTemplate: TemplateFunction<RegularIconProps> = ({ size, fill }) => html`
    <div class="c-iconGrid">
        <icon-alcohol-filled size=${size} fill=${fill} class="custom-class"></icon-alcohol-filled>
    </div>
`;

const fillArgType = {
    description: 'The fill colour of the icon. When overriding, you should rely on PIE colour design tokens, such as `var(--dt-color-content-brand)`.',
    control: 'text',
    defaultValue: {
        summary: 'currentColor',
    },
};

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
        fill: fillArgType,
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
        fill: fillArgType,
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
        fill: fillArgType,
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
        fill: fillArgType,
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
        fill: fillArgType,
    },
});
