import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { action } from '@storybook/addon-actions';
import { useArgs as UseArgs } from '@storybook/preview-api';

/* eslint-disable import/no-duplicates */
import '@justeattakeaway/pie-input';
import { types, InputProps, PIE_INPUT_EVENT } from '@justeattakeaway/pie-input';
/* eslint-enable import/no-duplicates */

import { type StoryMeta } from '../types';
import { createStory, type TemplateFunction } from '../utilities';
import '@justeattakeaway/pie-button';

type InputStoryMeta = StoryMeta<InputProps>;

const defaultArgs: InputProps = {
    type: 'text',
    value: '',
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
            description: 'The value of the input.',
            control: 'text',
            defaultValue: {
                summary: 'value',
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

const Template = ({ type, value }: InputProps) => {
    const [, updateArgs] = UseArgs();

    function onInput (event: CustomEvent) {
        updateArgs({ value: event.detail.value });

        action(PIE_INPUT_EVENT)({
            ...event.detail,
        });
    }

    return html`
    <pie-input
        type="${ifDefined(type)}"
        .value="${value}"
        @input="${onInput}"></pie-input>
    `;
};

const FormTemplate: TemplateFunction<InputProps> = (props: InputProps) => html`
<h2>Fake form</h2>
<form id="testForm">
        <p>Required fields are followed by <strong><span aria-label="required">*</span></strong>.</p>
        <section>
            <h2>Contact information</h2>
            <p>
                <label for="name">
                    <span>Name: </span>
                    <strong><span aria-label="required">*</span></strong>
                </label>
                ${Template({ ...props, type: 'text' })}
            </p>
        </section>
        <section style="display: flex; gap: var(--dt-spacing-a); justify-content: flex-end; flex-wrap: wrap; margin-top: var(--dt-spacing-b);">
            <pie-button type="reset" variant="secondary">Reset</pie-button>
            <pie-button type="submit" variant="primary">Submit</pie-button>
        </section>
    </form>
    <p id="formLog" style="display: none; font-size: 2rem; color: var(--dt-color-support-positive);"></p>
    <script>
        // Display a success message to the user when they submit the form
        const form = document.querySelector('#testForm');
        const formLog = document.querySelector('#formLog');
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            formLog.innerHTML = 'Form submitted!';
            formLog.style.display = 'block';

            // Reset the success message after roughly 8 seconds
            setTimeout(() => {
                formLog.innerHTML = '';
                formLog.style.display = 'none';
            }, 8000);
        });

    </script>
`;

const createInputStoryWithForm = createStory<InputProps>(FormTemplate, defaultArgs);

export const Default = createStory<InputProps>(Template, defaultArgs)();
export const FormIntegration = createInputStoryWithForm();

export default inputStoryMeta;
