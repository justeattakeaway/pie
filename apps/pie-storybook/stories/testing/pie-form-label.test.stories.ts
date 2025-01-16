import { html, nothing } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-form-label';
import '@justeattakeaway/pie-text-input';
import '@justeattakeaway/pie-switch';
import { type FormLabelProps as FormLabelPropsBase } from '@justeattakeaway/pie-form-label';

import { type SlottedComponentProps } from '../../types';
import {
    createStory, createVariantStory, type TemplateFunction, sanitizeAndRenderHTML,
} from '../../utilities';

type FormLabelProps = SlottedComponentProps<FormLabelPropsBase>;
type FormLabelStoryMeta = Meta<FormLabelProps>;

const defaultArgs: FormLabelProps = {
    for: 'form-label',
    slot: 'Label',
    optional: 'Optional',
    trailing: 'X of X',
};

const formLabelStoryMeta: FormLabelStoryMeta = {
    title: 'Form Label',
    component: 'pie-form-label',
    argTypes: {
        for: {
            description: 'The native HTML `for` attribute',
            control: 'text',
        },
        slot: {
            description: 'The default slot is used to pass the label text into the component.',
            control: 'text',
            defaultValue: {
                summary: '',
            },
        },
        optional: {
            description: 'Optional is used to pass an optional text next to the main label.',
            control: 'text',
            defaultValue: {
                summary: '',
            },
        },
        trailing: {
            description: 'Trailing is used to pass a trailing text into the component.',
            control: 'text',
            defaultValue: {
                summary: '',
            },
        },
    },
    args: defaultArgs,
};

export default formLabelStoryMeta;

const DefaultTemplate: TemplateFunction<FormLabelProps> = ({
    slot,
    optional,
    trailing,
    ...props
}) => html`
        <pie-form-label
            for="${props.for || nothing}"
            optional="${optional || nothing}"
            trailing="${trailing || nothing}">
            ${sanitizeAndRenderHTML(slot)}
        </pie-form-label>`;

const FormLabelWithTextInputTemplate: TemplateFunction<FormLabelProps> = () => html`
        <pie-form-label for="email">Email:</pie-form-label><pie-text-input  id="email" data-test-id="email-input"></pie-text-input>`;

const FormLabelWithSwitchTemplate: TemplateFunction<FormLabelProps> = () => html`
        <pie-form-label for="approveSettings">Approve settings</pie-form-label><pie-switch data-test-id="approve-settings-switch" id="approveSettings"></pie-switch>`;

export const Default = createStory<FormLabelProps>(DefaultTemplate, defaultArgs)();

export const WithTextInput = createStory<FormLabelProps>(FormLabelWithTextInputTemplate, defaultArgs)();
export const WithSwitch = createStory<FormLabelProps>(FormLabelWithSwitchTemplate, defaultArgs)();

const variantProps: Partial<Record<keyof FormLabelProps, unknown[]>> = {
    optional: ['Optional'],
    trailing: ['X of X'],
};

export const Variants = createVariantStory<FormLabelProps>(DefaultTemplate, variantProps);
