import { html, nothing } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-webc/components/switch';
import '@justeattakeaway/pie-webc/components/button';
import { type SwitchProps, labelPlacements, defaultProps } from '@justeattakeaway/pie-webc/components/switch';
import '@justeattakeaway/pie-icons-webc/dist/IconCheck.js';

import { createStory, createVariantStory, type TemplateFunction } from '../../utilities';

const EXPECTED_EVENT_MESSAGE = 'Switch clicked';

type SwitchStoryMeta = Meta<SwitchProps>;

const defaultArgs: SwitchProps = {
    ...defaultProps,
    aria: {
        label: 'switch label',
        describedBy: 'switch description',
    },
    label: 'Label',
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
        defaultChecked: {
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.defaultChecked,
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
const changeAction = () => console.info(EXPECTED_EVENT_MESSAGE);
const submitAction = (event: Event) => {
    event.preventDefault(); // Prevent the actual submission

    const form = event.currentTarget as HTMLFormElement;
    const formLog = form.parentElement?.querySelector('#formLog') as HTMLElement | null;
    const output = form.parentElement?.querySelector('#formDataOutput') as HTMLDivElement | null;

    // Display a success message to the user when they submit the form
    if (formLog) {
        formLog.innerHTML = 'Form submitted!';
        formLog.style.display = 'block';
    }

    // Serialize form data into an object so tests can assert submitted payload.
    const formData = new FormData(form);
    const formDataObj: Record<string, unknown> = {};

    formData.forEach((value, key) => {
        formDataObj[key] = value;
    });

    if (output) {
        output.innerText = JSON.stringify(formDataObj);
    }

    // Reset the success message after roughly 8 seconds
    setTimeout(() => {
        if (formLog) {
            formLog.innerHTML = '';
            formLog.style.display = 'none';
        }
    }, 8000);
};

const resetAction = (event: Event) => {
    const form = event.currentTarget as HTMLFormElement;
    const formLog = form.parentElement?.querySelector('#formLog') as HTMLElement | null;
    const output = form.parentElement?.querySelector('#formDataOutput') as HTMLDivElement | null;

    if (formLog) {
        formLog.innerHTML = '';
        formLog.style.display = 'none';
    }

    if (output) {
        output.innerText = '';
    }
};

const Template : TemplateFunction<SwitchProps> = (props) => {
    const {
        aria,
        checked,
        defaultChecked,
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
            ?defaultChecked="${defaultChecked}"
            ?disabled="${disabled}"
            @change="${changeAction}">
        </pie-switch>`;
};

const FormTemplate: TemplateFunction<SwitchProps> = (props: SwitchProps) => html`
    <p id="formLog" style="display: none; font-size: 2rem; color: var(--dt-color-support-positive);"></p>
    <form id="testForm" @submit="${submitAction}" @reset="${resetAction}">

    <section>
    ${Template({
    ...props,
})}
    </section>
    <div style="display: flex; gap: var(--dt-spacing-b); align-items: center; margin-top: var(--dt-spacing-c);">
        <pie-button id="resetButton" type="reset" variant="secondary">Reset</pie-button>
        <pie-button id="submitButton" type="submit">Submit</pie-button>
    </div>
    </form>
    <div id="formDataOutput"></div>
`;

const ExternalLabelsTemplate: TemplateFunction<SwitchProps> = (props: SwitchProps) => html`
    <label for="external-switch" data-test-id="external-label-for">Toggle via for attribute</label>
    <pie-switch
        id="external-switch"
        data-test-id="external-switch-for"
        name="${props.name || nothing}"
        value="${props.value || nothing}"
        ?checked="${props.checked}"
        ?defaultChecked="${props.defaultChecked}"
        @change="${changeAction}">
    </pie-switch>

    <hr />

    <label data-test-id="external-label-wrapping">
        <span data-test-id="external-label-wrapping-text">Toggle via wrapping label</span>
        <pie-switch
            id="wrapping-switch"
            data-test-id="external-switch-wrapping"
            name="${props.name || nothing}"
            value="${props.value || nothing}"
            ?defaultChecked="${props.defaultChecked}"
            @change="${changeAction}">
        </pie-switch>
    </label>

    <hr />

    <label for="multi-label-switch" data-test-id="external-label-multi-a">First label</label>
    <label for="multi-label-switch" data-test-id="external-label-multi-b">Second label</label>
    <pie-switch
        id="multi-label-switch"
        data-test-id="external-switch-multi"
        name="${props.name || nothing}"
        value="${props.value || nothing}"
        ?defaultChecked="${props.defaultChecked}"
        @change="${changeAction}">
    </pie-switch>

`;

const createSwitchStory = createStory(Template, defaultArgs);

const createSwitchStoryWithForm = createStory<SwitchProps>(FormTemplate, defaultArgs);

const createSwitchStoryWithExternalLabels = createStory<SwitchProps>(ExternalLabelsTemplate, defaultArgs);

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

export const ExternalLabels = createSwitchStoryWithExternalLabels();

const baseSharedPropsMatrix: Partial<Record<keyof SwitchProps, unknown[]>> = {
    checked: [true, false],
    label: ['Label', ''],
    labelPlacement: ['leading', 'trailing'],
    disabled: [true, false],
};

export const Variations = createVariantStory<SwitchProps>(Template, baseSharedPropsMatrix);
