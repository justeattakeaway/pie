import { html, nothing } from 'lit';
import { action } from '@storybook/addon-actions';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-switch';
import { type SwitchProps, labelPlacements, defaultProps } from '@justeattakeaway/pie-switch';
import '@justeattakeaway/pie-icons-webc/dist/IconCheck.js';

import { createStory, createVariantStory, type TemplateFunction } from '../../utilities';

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
    title: 'Switch',
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
};

export default switchStoryMeta;
const changeAction = () => console.info('Switch clicked');

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
    <h2>Fake form</h2>
    <form id="testForm">
    <p>Required fields are followed by <strong><span aria-label="required">*</span></strong>.</p>

    <section>
    ${Template({
    ...props,
})}
    </section>
    <button id="submitButton" type="submit">Submit</button>
    </form>
    <script>
        // var is used to prevent storybook from erroring when the script is re-run
        var form = document.querySelector('#testForm');
        var formLog = document.querySelector('#formLog');

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

const TestFormTemplate: TemplateFunction<SwitchProps> = (props: SwitchProps) => html`
    <p id="formLog" style="display: none; font-size: 2rem; color: var(--dt-color-support-positive);"></p>
    <h2>Fake form</h2>
    <form id="testForm" action="/default-endpoint" method="POST">
    <p>Required fields are followed by <strong><span aria-label="required">*</span></strong>.</p>

    <section>
    ${Template({
    ...props,
})}
    </section>
    <button id="submitButton" type="submit">Submit</button>
    </form>
    <script>
        // var is used to prevent storybook from erroring when the script is re-run
        var form = document.querySelector('#testForm');
        var formLog = document.querySelector('#formLog');

         form.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent the actual submission

            // Serialize form data
            const formData = new FormData(form);
            const formDataObj = {};

            // This is JS - we don't need TS inside these calls
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            formData.forEach((value, key) => { formDataObj[key] = value; });

            // Append serialized form data as JSON to a hidden element
            const dataHolder = document.createElement('div');
            dataHolder.id = 'formDataJson';
            dataHolder.textContent = JSON.stringify(formDataObj);
            dataHolder.style.display = 'none';
            document.body.appendChild(dataHolder);
        });
    </script>
`;

const createSwitchStory = createStory(Template, defaultArgs);

const createSwitchStoryWithForm = createStory<SwitchProps>(FormTemplate, defaultArgs);

const createSwitchTestStoryWithForm = createStory<SwitchProps>(TestFormTemplate, defaultArgs);

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

export const TestFormIntegration = createSwitchTestStoryWithForm({ label: 'Click me' });

const baseSharedPropsMatrix: Partial<Record<keyof SwitchProps, unknown[]>> = {
    checked: [true, false],
    label: ['Label', ''],
    labelPlacement: ['leading', 'trailing'],
    disabled: [true, false],
};

export const Variations = createVariantStory<SwitchProps>(Template, baseSharedPropsMatrix);
