import { html, nothing } from 'lit';
import { action } from '@storybook/addon-actions';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-switch';
import '@justeattakeaway/pie-button';
import { type SwitchProps, labelPlacements, defaultProps } from '@justeattakeaway/pie-switch';
import '@justeattakeaway/pie-icons-webc/dist/IconCheck.js';

import { createStory, type TemplateFunction } from '../utilities';

type SwitchStoryMeta = Meta<SwitchProps>;

const defaultArgs: SwitchProps = {
    ...defaultProps,
    label: 'Label',
    aria: {
        label: 'switch label',
        describedBy: 'switch description',
    },
    name: 'switch',
    value: 'switchValue',
};

const switchStoryMeta: SwitchStoryMeta = {
    title: 'Components/Switch',
    component: 'pie-switch',
    argTypes: {
        checked: {
            description: 'Same as the HTML checked attribute - indicates whether the switch is on or off',
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.checked,
            },
        },
        disabled: {
            description: 'Same as the HTML disabled attribute - indicates whether the switch is disabled or not',
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.disabled,
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
                summary: defaultProps.labelPlacement,
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
                    summary: defaultProps.value,
                },
            },
        },
        required: {
            description: 'Same as the HTML required attribute - for use in forms',
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.required,
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
        disabled,
        label,
        labelPlacement,
        name,
        value,
        required,
    } = props;

    return html`
        <pie-switch
            id="pie-switch"
            name="${name || nothing}"
            value="${value || nothing}"
            label="${label || nothing}"
            labelPlacement="${label && labelPlacement ? labelPlacement : nothing}"
            .aria="${aria}"
            ?required="${required}"
            ?checked="${checked}"
            ?disabled="${disabled}"
            @change="${changeAction}">
        </pie-switch>`;
};

const FormTemplate: TemplateFunction<SwitchProps> = (props: SwitchProps) => html`
    <p id="formLog" style="display: none; font-size: 2rem; color: var(--dt-color-support-positive);"></p>
    <h2>Example form with a single switch</h2>
    <form id="testForm">
        <p>A single switch inside a form.</p>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
            ${Template({
    ...props,
})}
        </div>
        <br />
        <pie-button type="submit">Submit</pie-button>
    </form>
    <script>
        // Prevent storybook from erroring when the script is re-run
        const form = document.querySelector('#testForm');
        const formLog = document.querySelector('#formLog');

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Display a success message to the user when they submit the form
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

const MultiSwitchFormTemplate: TemplateFunction<SwitchProps> = (props: SwitchProps) => html`
    <p id="formLog" style="display: none; font-size: 2rem; color: var(--dt-color-support-positive);"></p>
    <h2>Example form with multiple switches</h2>
    <form id="testForm">
        <p>Use the <strong>Tab</strong> key to navigate between the five switches below (one is disabled and should be skipped).</p>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
            ${Template({
    ...props,
    label: 'Bacon',

    name: 'bacon',
    aria: {},
    value: 'bacon_yes',
    checked: true,
    disabled: false,
    required: false,
})}
            ${Template({
    ...props,
    label: 'Lettuce',
    name: 'lettuce',
    aria: {},
    value: 'lettuce_yes',
    checked: true,
    disabled: true,
})}
            ${Template({
    ...props,
    label: 'Tomato',
    name: 'tomato',
    aria: {},
    value: 'tomato_yes',
    checked: false,
    disabled: false,
})}
            ${Template({
    ...props,
    label: 'Cheese',
    name: 'cheese',
    aria: {},
    value: 'cheese_yes',
    checked: true,
    disabled: false,
})}
            ${Template({
    ...props,
    label: 'Onion',
    name: 'onion',
    aria: {
        label: 'a custom label for the onion switch',
        describedBy: 'a custom description for the onion switch',
    },
    value: 'onion_yes',
    checked: false,
    disabled: false,
})}
        </div>
        <br />
        <pie-button type="submit">Submit</pie-button>
    </form>
    <script>
        // Prevent storybook from adding duplicate listeners on hot reloads
        const form = document.querySelector('#testForm');
        if (form && !form.dataset.listening) {
            form.dataset.listening = 'true';
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const formLog = document.querySelector('#formLog');

                // Display a success message to the user when they submit the form
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
        }
    </script>
`;

const createSwitchStory = createStory(Template, defaultArgs);
const createSwitchStoryWithForm = createStory<SwitchProps>(FormTemplate, defaultArgs);

const formIntegrationOnly = {
    description: 'This prop is only used when the switch is used inside a form. You can try it out in the Form Integration story.',
    table: {
        readonly: true,
    },
};

export const Default = createSwitchStory({}, {
    argTypes: {
        name: formIntegrationOnly,
        required: formIntegrationOnly,
        value: formIntegrationOnly,
    },
});

export const FormIntegration = createSwitchStoryWithForm({ label: 'Click me' });

const createMultiSwitchStory = createStory(MultiSwitchFormTemplate, {
    ...defaultArgs,
    // The label is set within the template for each switch, so we can clear the global one
    label: '',
});

// Generate the argTypes config to disable all controls
const controlArgNames = Object.keys(switchStoryMeta.argTypes || {});

const disabledArgTypes = controlArgNames.reduce((acc, key) => {
    acc[key] = { control: { type: null } };
    return acc;
}, {} as any);

export const MultipleSwitchesInAForm = createMultiSwitchStory({}, {
    argTypes: disabledArgTypes,
});
