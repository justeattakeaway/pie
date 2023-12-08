import { html, nothing } from 'lit';
import { action } from '@storybook/addon-actions';

/* eslint-disable import/no-duplicates */
import '@justeattakeaway/pie-switch';
import { SwitchProps, labelPlacements } from '@justeattakeaway/pie-switch';
/* eslint-enable import/no-duplicates */
import '@justeattakeaway/pie-icons-webc/IconCheck';

import { StoryMeta } from '../types';
import { createStory, type TemplateFunction } from '../utilities';

type SwitchStoryMeta = StoryMeta<SwitchProps>;

const defaultArgs: SwitchProps = {
    checked: false,
    isDisabled: false,
    label: 'Label',
    labelPlacement: 'leading',
    aria: {
        label: 'switch label',
        describedBy: 'switch description',
    },
    name: 'switch',
    value: 'switchValue',
};

const switchStoryMeta: SwitchStoryMeta = {
    title: 'Switch',
    component: 'pie-switch',
    argTypes: {
        checked: {
            description: 'Same as the HTML checked attribute - indicates whether the switch is on or off',
            control: 'boolean',
            defaultValue: {
                summary: false,
            },
        },
        isDisabled: {
            description: 'Same as the HTML disabled attribute - indicates whether the switch is disabled or not',
            control: 'boolean',
            defaultValue: {
                summary: false,
            },
        },
        label: {
            description: 'The label text for the switch',
            control: {
                type: 'text',
                defaultValue: {
                    summary: 'Label',
                },
            },
        },
        labelPlacement: {
            description: 'Set the placement of the label.',
            control: 'select',
            if: { arg: 'label', truthy: true },
            options: labelPlacements,
            defaultValue: {
                summary: 'leading',
            },
        },
        aria: {
            description: 'The ARIA labels used for the switch.',
            control: 'object',
        },
        name: {
            description: 'Same as the HTML name attribute - indicates the name of the switch (for use with forms)',
            control: {
                type: 'text',
                defaultValue: {
                    summary: 'switch',
                },
            },
        },
        value: {
            description: 'Same as the HTML value attribute - indicates the value of the switch (for use with forms). Defaults to "on".',
            control: {
                type: 'text',
                defaultValue: {
                    summary: 'on',
                },
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

export default switchStoryMeta;

const changeAction = (event: Event) => action('change')({
    checked: (event.target as HTMLInputElement).checked,
});

const Template : TemplateFunction<SwitchProps> = (props) => {
    const {
        aria,
        checked,
        isDisabled,
        label,
        labelPlacement,
        name,
        value,
    } = props;

    return html`
        <pie-switch
            id="pie-switch"
            name="${name || nothing}"
            value="${value || nothing}"
            label="${label || nothing}"
            labelPlacement="${label && labelPlacement ? labelPlacement : nothing}"
            .aria="${aria}"
            required
            ?checked="${checked}"
            ?isDisabled="${isDisabled}"
            @change="${changeAction}">
        </pie-switch>`;
};

const FormTemplate: TemplateFunction<SwitchProps> = (props: SwitchProps) => html`
    <p id="formLog" style="display: none; font-size: 2rem; color: var(--dt-color-support-positive);"></p>
    <h2>Fake form</h2>
    <form id="testForm">
    <p>Required fields are followed by <strong><span aria-label="required">*</span></strong>.</p>

    <section>
    ${Template({
    ...props,
})}
    </section>
    <button type="submit">Submit</button>
    </form>
    <script>
        // Display a success message to the user when they submit the form
        const form = document.querySelector('#testForm');
        const formLog = document.querySelector('#formLog');

        const el = document.querySelector('pie-switch');

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            el.checkValidity();

            formLog.innerHTML = 'Form submitted!';
            formLog.style.display = 'block';

            // log out all form input values
            const formData = new FormData(form);
            console.log('All form elements:', form.elements);
            console.log('All form element data keys and values submitted:');

            for (const entry of formData.entries()) {
                console.table(entry);
            }

            // Reset the success message after roughly 8 seconds
            setTimeout(() => {
                formLog.innerHTML = '';
                formLog.style.display = 'none';
            }, 8000);
        });
    </script>
`;

const createSwitchStory = createStory(Template, defaultArgs);

const createSwitchStoryWithForm = createStory<SwitchProps>(FormTemplate, defaultArgs);

export const Default = createSwitchStory();
export const FormIntegration = createSwitchStoryWithForm({ label: 'Click me' });
