import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { action } from '@storybook/addon-actions';
import { useArgs as UseArgs } from '@storybook/preview-api';

/* eslint-disable import/no-duplicates */
import '@justeattakeaway/pie-input';
import { types, InputProps } from '@justeattakeaway/pie-input';
/* eslint-enable import/no-duplicates */

import { type StoryMeta } from '../types';
import { createStory, type TemplateFunction } from '../utilities';
import '@justeattakeaway/pie-button';

type InputStoryMeta = StoryMeta<InputProps>;

const defaultArgs: InputProps = {
    type: 'text',
    value: '',
    name: 'testName',
};

const inputStoryMeta: InputStoryMeta = {
    title: 'Input',
    component: 'pie-input',
    argTypes: {
        type: {
            description: 'The type of HTML input to render.',
            control: 'select',
            options: types,
            defaultValue: {
                summary: 'text',
            },
        },
        value: {
            description: 'The value of the input (used in HTML forms as a key/value pair in HTML forms with the name).',
            control: 'text',
            defaultValue: {
                summary: '',
            },
        },
        name: {
            description: 'The name of the input (used in HTML forms as a key/value pair with the value). This is required in order to work properly with forms.',
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

const Template = ({ type, value, name }: InputProps) => {
    const [, updateArgs] = UseArgs();

    function onInput (event: InputEvent) {
        const inputElement = event.target as HTMLInputElement;
        updateArgs({ value: inputElement?.value });

        action('input')({
            data: event.data,
            value: inputElement.value,
        });
    }

    return html`
    <pie-input
        type="${ifDefined(type)}"
        .value="${value}"
        name="${ifDefined(name)}"
        @input="${onInput}"></pie-input>
    `;
};

const FormTemplate: TemplateFunction<InputProps> = (props: InputProps) => {
    function onSubmit (event: SubmitEvent) {
        event.preventDefault();

        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);

        const data: { [key: string]: string } = {};
        formData.forEach((value, key) => {
            data[key] = value.toString();
        });

        action('submit')({
            ...data,
        });
    }

    return html`
        <h2>Fake form</h2>
        <form id="testForm" @submit="${onSubmit}">
                <section>
                    <h2>Contact information</h2>
                    <p>
                        <label for="name">
                            <span>Name: </span>
                        </label>
                        ${Template({ ...props, type: 'text' })}
                    </p>
                </section>
                <section style="display: flex; gap: var(--dt-spacing-a); justify-content: flex-end; flex-wrap: wrap; margin-top: var(--dt-spacing-b);">
                    <pie-button type="reset" variant="secondary">Reset</pie-button>
                    <pie-button type="submit" variant="primary">Submit</pie-button>
                </section>
            </form>
    `;
};

const createInputStoryWithForm = createStory<InputProps>(FormTemplate, defaultArgs);

export const Default = createStory<InputProps>(Template, defaultArgs)();
export const FormIntegration = createInputStoryWithForm();

export default inputStoryMeta;
