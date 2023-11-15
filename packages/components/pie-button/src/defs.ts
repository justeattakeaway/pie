export const sizes = ['xsmall', 'small-productive', 'small-expressive', 'medium', 'large'] as const;
export const responsiveSizes = ['productive', 'expressive'] as const;
export const types = ['submit', 'button', 'reset'] as const;
export const variants = [
    'primary', 'secondary', 'outline', 'outline-inverse', 'ghost',
    'inverse', 'ghost-inverse', 'destructive', 'destructive-ghost',
] as const;
export const iconPlacements = ['leading', 'trailing'] as const;

export type Variant = typeof variants[number];

export const formEncodingtypes = ['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain'] as const;
export const formMethodTypes = ['post', 'get', 'dialog'] as const;
export const formTargetTypes = ['_self', '_blank', '_parent', '_top'] as const;

export interface ButtonProps {
    /**
     * What size the button should be.
     */
    size: typeof sizes[number];
    /**
     * What type attribute should be applied to the button. For example submit, button.
     */
    type: typeof types[number];
    /**
     * What style variant the button should be such as primary, outline or ghost.
     */
    variant: Variant;
    /**
     * The placement of the icon slot, if provided, such as leading or trailing
     */
    iconPlacement?: typeof iconPlacements[number];
    /**
     * When true, the button element is disabled.
     */
    disabled: boolean;
    /**
     * When true, the button element will occupy the full width of its container.
     */
    isFullWidth: boolean;
    /**
     * When true, displays a loading indicator inside the button.
     */
    isLoading: boolean;

    /**
     * When true, enables the responsive size feature.
     */
    isResponsive: boolean;

    /**
     * The name of the button, submitted as a pair with the button's value as part of the form data, when that button is used to submit the form.
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes)
     */
    name?: string;

    /**
     * Defines the value associated with the button's name when it's submitted with the form data. This value is passed to the server in params when the form is submitted using this button.
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes)
     */
    value?: string;

    /**
     * The URL that processes the information submitted by the button. Overrides the action attribute of the button's form owner. Does nothing if there is no form owner.
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes)
     */
    formaction?: string;

    /**
     * If the button is a submit button (it's inside/associated with a <form> and doesn't have type="button"), specifies how to encode the form data that is submitted.
     * If this attribute is specified, it overrides the enctype attribute of the button's form owner.
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes)
     */
    formenctype?: typeof formEncodingtypes[number]

    /**
     * If the button is a submit button (it's inside/associated with a <form> and doesn't have type="button"), this attribute specifies the HTTP method used to submit the form.
     * If specified, this attribute overrides the method attribute of the button's form owner.
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes)
     */
    formmethod?: typeof formMethodTypes[number]

    /**
     * If the button is a submit button, this Boolean attribute specifies that the form is not to be validated when it is submitted.
     * If this attribute is specified, it overrides the novalidate attribute of the button's form owner.
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes)
     */
    formnovalidate?: boolean;

    /**
     * If the button is a submit button, this attribute is an author-defined name or standardized, underscore-prefixed keyword indicating where to display the response from submitting the form.
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes)
     */
    formtarget?: typeof formTargetTypes[number]

    /**
     * What size should be attributed to the button when isResponsive is true and the screen is wide.
     */
    responsiveSize?: typeof responsiveSizes[number];
}
