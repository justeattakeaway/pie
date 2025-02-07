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
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.checked,
            },
        },
        disabled: {
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
            control: 'select',
            if: { arg: 'label', truthy: true },
            options: labelPlacements,
            defaultValue: {
                summary: defaultProps.labelPlacement,
            },
        },
        aria: {
            control: 'object',
        },
        name: {
            control: {
                type: 'text',
                defaultValue: {
                    summary: 'switch',
                },
            },
        },
        value: {
            control: {
                type: 'text',
                defaultValue: {
                    summary: defaultProps.value,
                },
            },
        },
        required: {
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
const submitAction = (event: Event) => {
    event.preventDefault(); // Prevent the actual submission

    const formLog = document.querySelector('#formLog') as HTMLElement;

    // Display a success message to the user when they submit the form
    formLog.innerHTML = 'Form submitted!';
    formLog.style.display = 'block';

    // Reset the success message after roughly 8 seconds
    setTimeout(() => {
        formLog.innerHTML = '';
        formLog.style.display = 'none';
    }, 8000);
};

const submitActionTestForm = (event: Event) => {
    event.preventDefault(); // Prevent the actual submission

    const form = document.querySelector('#testForm') as HTMLFormElement;

    // Serialize form data
    const formData = new FormData(form);
    const formDataObj: Record<string, unknown> = {};

    // Serialize form data into an object
    formData.forEach((value, key) => { formDataObj[key] = value; });

    // Append serialized form data as JSON to a hidden element
    const dataHolder = document.createElement('div');
    dataHolder.id = 'formDataJson';
    dataHolder.textContent = JSON.stringify(formDataObj);
    dataHolder.style.display = 'none';
    document.body.appendChild(dataHolder);
};

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
    <form id="testForm" @submit="${submitAction}">

    <section>
    ${Template({
    ...props,
})}
    </section>
    <button id="submitButton" type="submit"">Submit</button>
    </form>
`;

const TestFormTemplate: TemplateFunction<SwitchProps> = (props: SwitchProps) => html`
    <p id="formLog" style="display: none; font-size: 2rem; color: var(--dt-color-support-positive);"></p>
    <form id="testForm" @submit="${submitActionTestForm}" action="/default-endpoint" method="POST">

    <section>
    ${Template({
    ...props,
})}
    </section>
    <button id="submitButton" type="submit">Submit</button>
    </form>
`;

const createSwitchStory = createStory(Template, defaultArgs);

const createSwitchStoryWithForm = createStory<SwitchProps>(FormTemplate, defaultArgs);

const createSwitchTestStoryWithForm = createStory<SwitchProps>(TestFormTemplate, defaultArgs);

const formIntegrationOnly = {
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

export const FormIntegration = createSwitchStoryWithForm();

export const TestFormIntegration = createSwitchTestStoryWithForm();

const baseSharedPropsMatrix: Partial<Record<keyof SwitchProps, unknown[]>> = {
    checked: [true, false],
    label: ['Label', ''],
    labelPlacement: ['leading', 'trailing'],
    disabled: [true, false],
};

export const Variations = createVariantStory<SwitchProps>(Template, baseSharedPropsMatrix);
