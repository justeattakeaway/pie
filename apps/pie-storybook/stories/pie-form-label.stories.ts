import { html, nothing } from 'lit';

/* eslint-disable import/no-duplicates */
import '@justeattakeaway/pie-form-label';
import { FormLabelProps as FormLabelPropsBase } from '@justeattakeaway/pie-form-label';
/* eslint-enable import/no-duplicates */

import { SlottedComponentProps, type StoryMeta } from '../types';
import { createStory, type TemplateFunction } from '../utilities';

type FormLabelProps = SlottedComponentProps<FormLabelPropsBase>;
type FormLabelStoryMeta = StoryMeta<FormLabelProps>;

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
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
};

export default formLabelStoryMeta;

const Template: TemplateFunction<FormLabelProps> = ({
    slot,
    optional,
    trailing,
    ...props
}) => html`
        <pie-form-label
            for="${props.for}"
            optional="${optional || nothing}"
            trailing="${trailing || nothing}">
                ${slot}
        </pie-form-label>`;

export const Default = createStory<FormLabelProps>(Template, defaultArgs)();
