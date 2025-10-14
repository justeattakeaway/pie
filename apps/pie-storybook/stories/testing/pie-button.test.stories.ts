import { html, nothing } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-button';
import {
    type ButtonProps as ButtonPropsBase, defaultProps, iconPlacements, responsiveSizes, sizes, types, variants,
} from '@justeattakeaway/pie-button';
import '@justeattakeaway/pie-icons-webc/dist/IconPlusCircle.js';

import {
    createStory, createVariantStory, type TemplateFunction, sanitizeAndRenderHTML,
} from '../../utilities';
import { type SlottedComponentProps } from '../../types';

type ButtonProps = SlottedComponentProps<ButtonPropsBase> & {
    showSubmitButton?: boolean;
    showNativeResetButton?: boolean;
    renderIncorrectForm?: boolean;
};
type ButtonStoryMeta = Meta<ButtonProps>;

function handleClick () {
    console.info('Button clicked!');
}

const defaultArgs: ButtonProps = {
    ...defaultProps,
    iconPlacement: undefined,
    slot: 'Label',
    showNativeResetButton: false,
    showSubmitButton: true,
    renderIncorrectForm: false,
};

const buttonStoryMeta: ButtonStoryMeta = {
    title: 'Button',
    component: 'pie-button',
    argTypes: {
        tag: {
            control: {
                disable: true,
            },
            defaultValue: {
                summary: 'button',
            },
        },
        size: {
            control: 'select',
            options: sizes,
            defaultValue: {
                summary: defaultProps.size,
            },
        },
        type: {
            control: 'select',
            options: types,
            defaultValue: {
                summary: defaultProps.type,
            },
        },
        variant: {
            control: 'select',
            options: variants,
            defaultValue: {
                summary: defaultProps.variant,
            },
        },
        iconPlacement: {
            control: 'select',
            options: [undefined, ...iconPlacements],
        },
        disabled: {
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.disabled,
            },
        },
        isFullWidth: {
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.isFullWidth,
            },
        },
        isLoading: {
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.isLoading,
            },
        },
        isResponsive: {
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.isResponsive,
            },
        },
        slot: {
            control: 'text',
            defaultValue: {
                summary: '',
            },
        },
        name: {
            control: 'text',
            defaultValue: {
                summary: '',
            },
            if: { arg: 'type', eq: 'submit' },
        },
        value: {
            control: 'text',
            defaultValue: {
                summary: '',
            },
            if: { arg: 'type', eq: 'submit' },
        },
        responsiveSize: {
            control: 'select',
            options: ['', ...responsiveSizes],
            defaultValue: {
                summary: 'productive',
            },
            if: { arg: 'isResponsive', eq: true },
        },
        href: {
            control: 'text',
        },
        download: {
            control: 'text',
        },
        target: {
            control: 'text',
        },
        rel: {
            control: 'text',
        },
        showSubmitButton: {
            control: 'boolean',
            defaultValue: {
                summary: true,
            },
        },
        showNativeResetButton: {
            control: 'boolean',
            defaultValue: {
                summary: false,
            },
        },
    },
    args: {
        ...defaultArgs,
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
    responsiveSize,
}) => html`
<pie-button
    tag="button"
    data-test-id="pie-button-${type}"
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
    @click=${handleClick}
    responsiveSize="${ifDefined(responsiveSize)}">
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

const FormTemplate: TemplateFunction<ButtonProps> = ({
    showSubmitButton,
    showNativeResetButton,
    renderIncorrectForm,
    ...props
}) => {
    function onSubmit (event: Event) {
        event.preventDefault();

        const formLog = document.querySelector('#formLog') as HTMLElement;
        if (!formLog) return;

        formLog.textContent = 'Form submitted!';
        formLog.style.display = 'block';

        const span = document.createElement('span');
        span.id = 'formSubmittedFlag';
        span.setAttribute('data-test-id', 'formSubmittedFlag');
        span.style.display = 'none';
        document.body.appendChild(span);

        setTimeout(() => {
            formLog.textContent = '';
            formLog.style.display = 'none';
        }, 8000);
    }

    return html`
        ${renderIncorrectForm ? html`<form id="wrongForm"></form>` : nothing}
        <p id="formLog" style="display: none; font-size: 2rem; color: var(--dt-color-support-positive);"></p>
        <h2>Fake form</h2>
        <form data-test-id="testForm" id="testForm" @submit=${onSubmit}>
            <p>Required fields are followed by <strong><span aria-label="required">*</span></strong>.</p>
            <section>
                <h2>Contact information</h2>
                <p>
                    <label for="name">
                        <span>Name: </span>
                        <strong><span aria-label="required">*</span></strong>
                    </label>
                    <input type="text" id="name" data-test-id="name" name="username" required />
                </p>
                <p>
                    <label for="mail">
                        <span>E-mail: </span>
                        <strong><span aria-label="required">*</span></strong>
                    </label>
                    <input type="email" data-test-id="usermail" id="mail" name="usermail" required />
                </p>
                <p>
                    <label for="pwd">
                        <span>Password: </span>
                        <strong><span aria-label="required">*</span></strong>
                    </label>
                    <input type="password" data-test-id="password" id="pwd" name="password" required />
                </p>
            </section>
            <section>
                <h2>Payment information</h2>
                <p>
                    <label for="card">
                        <span>Card type:</span>
                    </label>
                    <select data-test-id="usercard" id="card" name="usercard">
                        <option value="visa">Visa</option>
                        <option value="mastercard">Mastercard</option>
                        <option value="amex">American Express</option>
                    </select>
                </p>
                <p>
                    <label for="number">
                        <span>Card number:</span>
                        <strong><span aria-label="required">*</span></strong>
                    </label>
                    <input type="tel" data-test-id="card-number" id="number" name="cardnumber" required />
                </p>
                <p>
                    <label for="expiration">
                        <span>Expiration date:</span>
                        <strong><span aria-label="required">*</span></strong>
                    </label>
                    <input type="text" data-test-id="card-expiration" id="expiration" required placeholder="MM/YY"
                        pattern="^(0[1-9]|1[0-2])\/([0-9]{2})$" />
                </p>
            </section>
            <section style="display: flex; gap: var(--dt-spacing-a); justify-content: flex-end; flex-wrap: wrap; margin-top: var(--dt-spacing-b);">
                ${showNativeResetButton ? html`<button data-test-id="button-reset" id="resetNativeButton" type="reset">Reset</button>` : Template({
        ...props,
        variant: 'secondary',
        slot: 'Reset',
        type: 'reset',
    })}
                ${showSubmitButton ? Template({
        ...props,
        variant: 'primary',
        slot: 'Submit payment',
        type: 'submit',
    }) : nothing}
            </section>
        </form>
    `;
};

const createButtonStory = createStory<ButtonProps>(Template, defaultArgs);

const createButtonStoryWithForm = createStory<ButtonProps>(FormTemplate, defaultArgs);

export const Primary = createButtonStory();

export const Anchor = createStory(AnchorTemplate, defaultArgs)({
    href: '/?path=/story/button--anchor',
}, {
    argTypes: {
        tag: {
            description: 'Choose the HTML element that will be used to render the button.<br>For this story, the prop has the value of `a`. See the other stories to interact with the component when this prop has a value of `button`.',
        },
    },
});

// Download specific Story
export const AnchorWithDownload = createStory(AnchorTemplate, defaultArgs)({
    href: '/static/images/logo--pie--dark.svg',
    download: 'foo.svg',
});

export const FormIntegration = createButtonStoryWithForm({ type: 'submit' });

const FormSubmissionTemplate: TemplateFunction<ButtonProps> = () => html`
    <form id="formSubmissionTestForm" action="/submit-endpoint" method="POST">
        <input type="text" name="username" placeholder="Enter your username" required>
        <pie-button
            id="TestButton"
            type="submit"
            name="submitButton"
            value="submitValue"
        >
          Submit
        </pie-button>
    </form>
`;

export const FormSubmission = createStory<ButtonProps>(FormSubmissionTemplate, {
    ...defaultArgs,
    type: 'submit',
})();

const FormWithAllAttributesTemplate: TemplateFunction<ButtonProps> = () => html`
    <form id="testForm" action="/default-endpoint" method="GET">
        <input type="text" name="username" required>
        <pie-button id="testButton"
                    type="submit"
                    name="submitButton"
                    value="submitValue"
                    formaction="/custom-endpoint"
                    formenctype="multipart/form-data"
                    formmethod="POST"
                    formnovalidate
                    formtarget="_self">
            Submit
        </pie-button>
    </form>
`;

export const FormWithAllAttributes = createStory<ButtonProps>(FormWithAllAttributesTemplate, {
    ...defaultArgs,
    type: 'submit',
})();

const sharedPropMatrix : Partial<Record<keyof ButtonProps, unknown[]>> = {
    iconPlacement: [...iconPlacements],
    isFullWidth: [true, false],
    isLoading: [true, false],
    disabled: [true, false],
    slot: ['Label'],
    size: [...sizes],
};

export const DoubleLineTextButtonVariations = createVariantStory<ButtonProps>(Template, {
    slot: ['This is a really long string to test the overflow'],
    size: [...sizes],
    isResponsive: [true, false],
    responsiveSize: [...responsiveSizes],
});

export const ResponsiveButtonVariations = createVariantStory<ButtonProps>(Template, {
    slot: ['Hello World'],
    size: [...sizes],
    responsiveSize: [...responsiveSizes],
    isResponsive: [true, false],
}, { multiColumn: true });

/*----------------------------------------
  Anchor Variations
----------------------------------------*/
const sharedAnchorPropMatrix : Partial<Record<keyof ButtonProps, unknown[]>> = {
    tag: ['a'],
    slot: ['Hello World'],
    isResponsive: [true, false],
    responsiveSize: [...responsiveSizes],
    size: [...sizes],
};

export const PrimaryAnchorVariations = createVariantStory<ButtonProps>(AnchorTemplate, { ...sharedAnchorPropMatrix, variant: ['primary'] });
export const PrimaryAlternativeAnchorVariations = createVariantStory<ButtonProps>(AnchorTemplate, { ...sharedAnchorPropMatrix, variant: ['primary-alternative'] });
export const SecondaryAnchorVariations = createVariantStory<ButtonProps>(AnchorTemplate, { ...sharedAnchorPropMatrix, variant: ['secondary'] });
export const OutlineAnchorVariations = createVariantStory<ButtonProps>(AnchorTemplate, { ...sharedAnchorPropMatrix, variant: ['outline'] });
export const GhostAnchorVariations = createVariantStory<ButtonProps>(AnchorTemplate, { ...sharedAnchorPropMatrix, variant: ['ghost'] });
export const OutlineInverseAnchorVariations = createVariantStory<ButtonProps>(AnchorTemplate, { ...sharedAnchorPropMatrix, variant: ['outline-inverse'] }, { bgColor: 'background-dark' });
export const InverseAnchorVariations = createVariantStory<ButtonProps>(AnchorTemplate, { ...sharedAnchorPropMatrix, variant: ['inverse'] }, { bgColor: 'background-dark' });
export const GhostInverseAnchorVariations = createVariantStory<ButtonProps>(AnchorTemplate, { ...sharedAnchorPropMatrix, variant: ['ghost-inverse'] }, { bgColor: 'background-dark' });
export const DestructiveAnchorVariations = createVariantStory<ButtonProps>(AnchorTemplate, { ...sharedAnchorPropMatrix, variant: ['destructive'] });
export const DestructiveGhostAnchorVariations = createVariantStory<ButtonProps>(AnchorTemplate, { ...sharedAnchorPropMatrix, variant: ['destructive-ghost'] });

/*----------------------------------------
  Button Variations
----------------------------------------*/
export const PrimaryVariations = createVariantStory<ButtonProps>(Template, {
    ...sharedPropMatrix,
    variant: ['primary'],
}, { multiColumn: true });

export const PrimaryAlternativeVariations = createVariantStory<ButtonProps>(Template, {
    ...sharedPropMatrix,
    variant: ['primary-alternative'],
}, { multiColumn: true });

export const SecondaryVariations = createVariantStory<ButtonProps>(Template, {
    ...sharedPropMatrix,
    variant: ['secondary'],
}, { multiColumn: true });

export const OutlineVariations = createVariantStory<ButtonProps>(Template, {
    ...sharedPropMatrix,
    variant: ['outline'],
}, { multiColumn: true });

export const OutlineInverseVariations = createVariantStory<ButtonProps>(Template, {
    ...sharedPropMatrix,
    variant: ['outline-inverse'],
}, { bgColor: 'background-dark', multiColumn: true });

export const GhostVariations = createVariantStory<ButtonProps>(Template, {
    ...sharedPropMatrix,
    variant: ['ghost'],
}, { multiColumn: true });

export const InverseVariations = createVariantStory<ButtonProps>(Template, {
    ...sharedPropMatrix,
    variant: ['inverse'],
}, { bgColor: 'background-dark', multiColumn: true });

export const GhostInverseVariations = createVariantStory<ButtonProps>(Template, {
    ...sharedPropMatrix,
    variant: ['ghost-inverse'],
}, { bgColor: 'background-dark', multiColumn: true });

export const DestructiveVariations = createVariantStory<ButtonProps>(Template, {
    ...sharedPropMatrix,
    variant: ['destructive'],
}, { multiColumn: true });

export const DestructiveGhostVariations = createVariantStory<ButtonProps>(Template, {
    ...sharedPropMatrix,
    variant: ['destructive-ghost'],
}, { multiColumn: true });
