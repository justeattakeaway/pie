import { html, nothing } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-button';
import {
    type ButtonProps as ButtonPropsBase,
    defaultProps,
    iconPlacements,
    responsiveSizes,
    sizes,
    types,
    variants,
} from '@justeattakeaway/pie-button';
import '@justeattakeaway/pie-icons-webc/dist/IconPlusCircle.js';

import { createStory, type TemplateFunction, sanitizeAndRenderHTML } from '../utilities';
import { type SlottedComponentProps } from '../types';

type ButtonProps = SlottedComponentProps<ButtonPropsBase>;
type ButtonStoryMeta = Meta<ButtonProps>;

const defaultArgs: ButtonProps = {
    ...defaultProps,
    iconPlacement: undefined,
    slot: 'Label',
};

const buttonStoryMeta: ButtonStoryMeta = {
    title: 'Components/Button',
    component: 'pie-button',
    argTypes: {
        tag: {
            description: 'Choose the HTML element that will be used to render the button.<br>For this story, the prop has the value of `button`. See the Anchor story to interact with the component when this prop has a value of `a`.',
            control: {
                disable: true,
            },
            defaultValue: {
                summary: 'button',
            },
        },
        size: {
            description: 'Set the size of the button.',
            control: 'select',
            options: sizes,
            defaultValue: {
                summary: defaultProps.size,
            },
        },
        type: {
            description: 'Set the type of the button.<br><br>Set this to `submit` to reveal more controls relating to form submission.',
            control: 'select',
            options: types,
            defaultValue: {
                summary: defaultProps.type,
            },
        },
        variant: {
            description: 'Set the variant of the button.',
            control: 'select',
            options: variants,
            defaultValue: {
                summary: defaultProps.variant,
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
                summary: defaultProps.disabled,
            },
        },
        isFullWidth: {
            description: 'If `true`, sets the button width to 100% of it’s container.',
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.isFullWidth,
            },
        },
        isLoading: {
            description: 'If `true`, displays a loading indicator inside the button.',
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.isLoading,
            },
        },
        isResponsive: {
            description: 'If `true`, uses the next larger size on wide viewports.<br><br>Set this to `true` to show the `responsiveSize` control.',
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.isResponsive,
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
            description: 'If the button is a submit button (it\'s inside/associated with a `<form>` and doesn\'t have type="button"), specifies how to encode the form data that is submitted.',
            control: 'text',
            defaultValue: {
                summary: '',
            },
            if: { arg: 'type', eq: 'submit' },
        },
        formmethod: {
            description: 'If the button is a submit button (it\'s inside/associated with a `<form>` and doesn\'t have type="button"), this attribute specifies the HTTP method used to submit the form.',
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
        responsiveSize: {
            description: 'Set the size of the button when set as responsive for wider viewports.',
            control: 'select',
            options: ['', ...responsiveSizes],
            defaultValue: {
                summary: 'productive',
            },
            if: { arg: 'isResponsive', eq: true },
        },
        href: {
            description: 'Set the href attribute for the underlying anchor tag.',
            control: 'text',
        },
        download: {
            description: 'Set the download attribute for the underlying anchor tag. When an empty string, sets the download attribute without a value to trigger file downloads. When a non-empty string, sets the download attribute with the specified filename.',
            control: {
                type: 'select',
            },
            options: [undefined, '', 'custom-filename.svg'],
            defaultValue: {
                summary: undefined,
            },
        },
        target: {
            description: 'Set the target attribute for the underlying anchor tag.',
            control: 'text',
        },
        rel: {
            description: 'Set the rel attribute for the underlying anchor tag',
            control: 'text',
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
    isResponsive,
    slot,
    iconPlacement,
    name,
    value,
    formaction,
    formenctype,
    formmethod,
    formnovalidate,
    formtarget,
    responsiveSize,
}) => html`
<pie-button
    tag="button"
    size="${ifDefined(size)}"
    variant="${ifDefined(variant)}"
    type="${ifDefined(type)}"
    iconPlacement="${ifDefined(iconPlacement)}"
    ?disabled="${disabled}"
    ?isLoading="${isLoading}"
    ?isFullWidth="${isFullWidth}"
    ?isResponsive="${isResponsive}"
    name=${ifDefined(name)}
    value=${ifDefined(value)}
    responsiveSize="${ifDefined(responsiveSize)}"
    formaction=${ifDefined(formaction)}
    formenctype=${ifDefined(formenctype)}
    formmethod=${ifDefined(formmethod)}
    formtarget=${ifDefined(formtarget)}
    ?formnovalidate="${formnovalidate}">
    ${iconPlacement ? html`<icon-plus-circle slot="icon"></icon-plus-circle>` : nothing}
    ${sanitizeAndRenderHTML(slot)}
</pie-button>`;

const AnchorTemplate: TemplateFunction<ButtonProps> = (props: ButtonProps) => html`
    <pie-button
        tag="a"
        size="${ifDefined(props.size)}"
        variant="${ifDefined(props.variant)}"
        iconPlacement="${ifDefined(props.iconPlacement)}"
        ?isFullWidth="${props.isFullWidth}"
        ?isResponsive="${props.isResponsive}"
        responsiveSize="${ifDefined(props.responsiveSize)}"
        href="${ifDefined(props.href)}"
        download="${ifDefined(props.download)}"
        rel="${ifDefined(props.rel)}"
        target="${ifDefined(props.target)}">
        ${props.iconPlacement ? html`<icon-plus-circle slot="icon"></icon-plus-circle>` : nothing}
        ${sanitizeAndRenderHTML(props.slot)}
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
        // var is used to prevent storybook from erroring when the script is re-run
        var form = document.querySelector('#testForm');
        var formLog = document.querySelector('#formLog');

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Display a success message to the user when they submit the form
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

const anchorOnlyProps = ['href', 'target', 'rel', 'download'] as const;

export const Primary = createButtonStory({}, {
    controls: { exclude: ['variant', ...anchorOnlyProps] },
});

export const PrimaryAlternative = createButtonStory({ variant: 'primary-alternative' }, {
    controls: { exclude: ['variant', ...anchorOnlyProps] },
});

export const Secondary = createButtonStory({ variant: 'secondary' }, {
    controls: { exclude: ['variant', ...anchorOnlyProps] },
});

export const Outline = createButtonStory({ variant: 'outline' }, {
    bgColor: 'background-subtle',
    controls: { exclude: ['variant', ...anchorOnlyProps] },
});

export const Ghost = createButtonStory({ variant: 'ghost' }, {
    bgColor: 'background-subtle',
    controls: { exclude: ['variant', ...anchorOnlyProps] },
});

export const Destructive = createButtonStory({ variant: 'destructive' }, {
    controls: { exclude: ['variant', ...anchorOnlyProps] },
});

export const DestructiveGhost = createButtonStory({ variant: 'destructive-ghost' }, {
    bgColor: 'background-subtle',
    controls: { exclude: ['variant', ...anchorOnlyProps] },
});

export const Inverse = createButtonStory({ variant: 'inverse' }, {
    bgColor: 'dark (container-dark)',
    controls: { exclude: ['variant', ...anchorOnlyProps] },
});

export const GhostInverse = createButtonStory({ variant: 'ghost-inverse' }, {
    bgColor: 'dark (container-dark)',
    controls: { exclude: ['variant', ...anchorOnlyProps] },
});

export const OutlineInverse = createButtonStory({ variant: 'outline-inverse' }, {
    bgColor: 'dark (container-dark)',
    controls: { exclude: ['variant', ...anchorOnlyProps] },
});

export const Anchor = createStory(AnchorTemplate, defaultArgs)({
    href: '/static/images/logo--pie--dark.svg',
}, {
    argTypes: {
        tag: {
            description: 'Choose the HTML element that will be used to render the button.<br>For this story, the prop has the value of `a`. See the other stories to interact with the component when this prop has a value of `button`.',
            control: {
                disable: true,
            },
        },
    },
    controls: {
        // Hide button-only controls
        exclude: ['type', 'disabled', 'formaction', 'formenctype', 'formmethod', 'formnovalidate', 'formtarget', 'isLoading', 'name', 'value'],
    },
});

export const FormIntegration = createButtonStoryWithForm({ type: 'submit' }, {
    controls: {
        // For this story we simply want to test form integration with a reset and submit button. Therefore we are restricting what controls are shown.
        exclude: ['type', 'slot', 'variant', 'isFullWidth', 'iconPlacement', ...anchorOnlyProps],
    },
});
