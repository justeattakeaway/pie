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
    isChecked: false,
    isDisabled: false,
    label: 'Label',
    labelPlacement: 'leading',
    aria: {
        label: 'switch label',
        describedBy: 'switch description',
    },
};

const switchStoryMeta: SwitchStoryMeta = {
    title: 'Switch',
    component: 'pie-switch',
    argTypes: {
        isChecked: {
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
        isChecked,
        isDisabled,
        label,
        labelPlacement,
    } = props;

    return html`
        <pie-switch
            id="pie-switch"
            name="pie-switch"
            value="someValue"
            label="${label || nothing}"
            labelPlacement="${label && labelPlacement ? labelPlacement : nothing}"
            .aria="${aria}"
            ?isChecked="${isChecked}"
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
            <h2>Contact information</h2>
            <p>
                <label for="name">
                    <span>Name: </span>
                    <strong><span aria-label="required">*</span></strong>
                </label>
                <input type="text" id="name" name="username" required />
            </p>
        </section>

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
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            formLog.innerHTML = 'Form submitted!';
            formLog.style.display = 'block';

            // log out all form input values
            const formData = new FormData(form);
            for (const [key, value] of formData.entries()) {
                console.log('Form data key value pair:');
                console.log(key, value);
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
