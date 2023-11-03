import { html, nothing } from 'lit';
import {
    ButtonProps as ButtonPropsBase, iconPlacements, sizes, types, variants,
} from '@justeattakeaway/pie-button';
import { IconPlusCircle } from '@justeattakeaway/pie-icons-webc';
import { createStory, type TemplateFunction } from '../utilities';
import { StoryMeta, SlottedComponentProps } from '../types';

// This prevents storybook from tree shaking the components
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const keptReferences = [IconPlusCircle];

type ButtonProps = SlottedComponentProps<ButtonPropsBase>;
type ButtonStoryMeta = StoryMeta<ButtonProps>;

const defaultArgs: ButtonProps = {
    size: 'medium',
    type: 'submit',
    variant: 'primary',
    disabled: false,
    isFullWidth: false,
    isLoading: false,
    slot: 'Label',
};

const buttonStoryMeta: ButtonStoryMeta = {
    title: 'Button',
    component: 'pie-button',
    argTypes: {
        size: {
            description: 'Set the size of the button.',
            control: 'select',
            options: sizes,
            defaultValue: {
                summary: 'medium',
            },
        },
        type: {
            description: 'Set the type of the button.',
            control: 'select',
            options: types,
            defaultValue: {
                summary: 'submit',
            },
        },
        variant: {
            description: 'Set the variant of the button.',
            control: 'select',
            options: variants,
            defaultValue: {
                summary: 'primary',
            },
        },
        iconPlacement: {
            description: 'Show a leading/trailing icon.<br /><br />To use this with pie-button, you can pass an icon into the `icon` slot',
            control: 'select',
            options: [undefined, ...iconPlacements],
        },
        disabled: {
            description: 'If `true`, disables the button.',
            control: 'boolean',
            defaultValue: {
                summary: false,
            },
        },
        isFullWidth: {
            description: 'If `true`, sets the button width to 100% of it’s container.',
            control: 'boolean',
            defaultValue: {
                summary: false,
            },
        },
        isLoading: {
            description: 'If `true`, displays a loading indicator inside the button.',
            control: 'boolean',
            defaultValue: {
                summary: false,
            },
        },
        slot: {
            description: 'The default slot is used to pass the button text into the component.',
            control: 'text',
            defaultValue: {
                summary: '',
            },
        },
        name: {
            description: 'The name of the button, submitted as a pair with the button\'s value as part of the form data, when that button is used to submit the form.',
            control: 'text',
            defaultValue: {
                summary: '',
            },
            if: { arg: 'type', eq: 'submit' },
        },
        value: {
            description: 'Defines the value associated with the button\'s name when it\'s submitted with the form data. This value is passed to the server in params when the form is submitted using this button.',
            control: 'text',
            defaultValue: {
                summary: '',
            },
            if: { arg: 'type', eq: 'submit' },
        },
        formaction: {
            description: 'The URL that processes the information submitted by the button. Overrides the action attribute of the button\'s form owner. Does nothing if there is no form owner.',
            control: 'text',
            defaultValue: {
                summary: '',
            },
            if: { arg: 'type', eq: 'submit' },
        },
        formenctype: {
            description: 'If the button is a submit button (it\'s inside/associated with a <form> and doesn\'t have type="button"), specifies how to encode the form data that is submitted.',
            control: 'text',
            defaultValue: {
                summary: '',
            },
            if: { arg: 'type', eq: 'submit' },
        },
        formmethod: {
            description: 'If the button is a submit button (it\'s inside/associated with a <form> and doesn\'t have type="button"), this attribute specifies the HTTP method used to submit the form.',
            control: 'text',
            defaultValue: {
                summary: '',
            },
            if: { arg: 'type', eq: 'submit' },
        },
        formnovalidate: {
            description: 'If the button is a submit button, this Boolean attribute specifies that the form is not to be validated when it is submitted.',
            control: 'boolean',
            defaultValue: {
                summary: false,
            },
            if: { arg: 'type', eq: 'submit' },
        },
        formtarget: {
            description: 'If the button is a submit button, this attribute is an author-defined name or standardized, underscore-prefixed keyword indicating where to display the response from submitting the form.',
            control: 'text',
            defaultValue: {
                summary: '',
            },
            if: { arg: 'type', eq: 'submit' },
        },
    },
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=34706-406376&t=8JLrEVbwx7AEJbEL-0',
        },
    },
};

export default buttonStoryMeta;

const Template: TemplateFunction<ButtonProps> = ({
    size,
    variant,
    type,
    disabled,
    isFullWidth,
    isLoading,
    slot,
    iconPlacement,
    name,
    value,
    formaction,
    formenctype,
    formmethod,
    formnovalidate,
    formtarget,
}) => html`
        <pie-button
            size="${size}"
            variant="${variant}"
            type="${type}"
            iconPlacement="${iconPlacement || nothing}"
            ?disabled="${disabled}"
            ?isLoading="${isLoading}"
            ?isFullWidth="${isFullWidth}"
            name=${name || nothing}
            value=${value || nothing}
            formaction=${formaction || nothing}
            formenctype=${formenctype || nothing}
            formmethod=${formmethod || nothing}
            formtarget=${formtarget || nothing}
            ?formnovalidate="${formnovalidate}">
            ${iconPlacement ? html`<icon-plus-circle slot="icon"></icon-plus-circle>` : nothing}
            ${slot}
        </pie-button>`;

const FormTemplate: TemplateFunction<ButtonProps> = (props: ButtonProps) => html`
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
            <p>
                <label for="mail">
                    <span>E-mail: </span>
                    <strong><span aria-label="required">*</span></strong>
                </label>
                <input type="email" id="mail" name="usermail" required />
            </p>
            <p>
                <label for="pwd">
                    <span>Password: </span>
                    <strong><span aria-label="required">*</span></strong>
                </label>
                <input type="password" id="pwd" name="password" required />
            </p>
        </section>
        <section>
            <h2>Payment information</h2>
            <p>
                <label for="card">
                    <span>Card type:</span>
                </label>
                <select id="card" name="usercard">
                    <option value="visa">Visa</option>
                    <option value="mc">Mastercard</option>
                    <option value="amex">American Express</option>
                </select>
            </p>
            <p>
                <label for="number">
                    <span>Card number:</span>
                    <strong><span aria-label="required">*</span></strong>
                </label>
                <input type="tel" id="number" name="cardnumber" required />
            </p>
            <p>
                <label for="expiration">
                    <span>Expiration date:</span>
                    <strong><span aria-label="required">*</span></strong>
                </label>
                <input type="text" id="expiration" required placeholder="MM/YY"
                    pattern="^(0[1-9]|1[0-2])\/([0-9]{2})$" />
            </p>
        </section>
        <section style="display: flex; gap: var(--dt-spacing-a); justify-content: flex-end; flex-wrap: wrap; margin-top: var(--dt-spacing-b);">
            ${Template({
    ...props,
    variant: 'secondary',
    slot: 'Reset',
    type: 'reset',
})}
            ${Template({
    ...props,
    variant: 'primary',
    slot: 'Submit payment',
    type: 'submit',
})}
        </section>
    </form>
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

const createButtonStory = createStory<ButtonProps>(Template, defaultArgs);

const createButtonStoryWithForm = createStory<ButtonProps>(FormTemplate, defaultArgs);

export const Primary = createButtonStory();
export const Secondary = createButtonStory({ variant: 'secondary' });
export const Outline = createButtonStory({ variant: 'outline' }, { bgColor: 'background-subtle' });
export const Ghost = createButtonStory({ variant: 'ghost' }, { bgColor: 'background-subtle' });
export const Destructive = createButtonStory({ variant: 'destructive' });
export const DestructiveGhost = createButtonStory({ variant: 'destructive-ghost' }, { bgColor: 'background-subtle' });
export const Inverse = createButtonStory({ variant: 'inverse' }, { bgColor: 'dark (container-dark)' });
export const GhostInverse = createButtonStory({ variant: 'ghost-inverse' }, { bgColor: 'dark (container-dark)' });
export const OutlineInverse = createButtonStory({ variant: 'outline-inverse' }, { bgColor: 'dark (container-dark)' });
// For this story we simply want to test form integration with a reset and submit button. Therefore we are restricting what controls are shown.
export const FormIntegration = createButtonStoryWithForm({ type: 'submit' }, {
    controls: {
        exclude: ['type', 'slot', 'variant', 'isFullWidth', 'iconPlacement'],
    },
});
