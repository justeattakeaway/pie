---
eleventyNavigation:
    key: iOS
    parent: Modal
    order: 5
shouldShowContents: true
---

## [iOS] Alert

An Alert is a pop-up window that prompts the user for interaction or information within an app interface.

---

## Dos and Don’ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use alerts in the neutral-alternative variant to display critical information and display urgent messages.",
            "Choose variants in brand colours for promotional and non-critical content.",
            "Use alerts to drive user input or prompt for decisions.",
            "Use alerts for confirmations for important actions.",
            "Ensure all content meets AA accessibility standards and is read by assistive technologies."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don't allow excessive content length. Alerts are for focused tasks, check out the [Overlay patterns](/patterns/overlay-patterns/) documentation to see if another component might be more suitable.",
            "Don't use alerts for minor notifications.",
            "Limit and avoid excessive interruptions.",
            "Don’t add crucial information to images."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src: "../../../assets/img/components/modal-apps/anatomy.svg",
    alt: "Anatomy of an Alert.",
    shouldShowPadding: true
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Header (optional):** Adds content to the header. Choose from illustration, image or slot.",
        "**Title:** Concise heading for clarity.",
        "**Body (Optional):** Clear description to offer more information/context.",
        "**Primary Button:** Main action for user interaction. Variant overrides available.",
        "**Ghost Button (Optional):** Secondary action option. Variant overrides available.",
        "**Container:** Alerts are in an elevated container.",
        "**Footer content (Optional):** Ability to add non interactive text below buttons.",
        "**Header slot:** Content which can be replaced with designed local components.",
        "**Body slot (Optional):** Content which can be replaced with designed local components.",
        "**Footer slot (Optional):** Content which can be replaced with designed local components."
    ]
} %}

---

## Variants

### Neutral - alternative

{% contentPageImage {
    src: "../../../assets/img/components/modal-apps/variants-neutral-alternative.svg",
    alt: "Neutral-alternative variation of the alert component.",
    width: 300
} %}

### 02 Orange subtle

{% contentPageImage {
    src: "../../../assets/img/components/modal-apps/variants-orange-subtle.svg",
    alt: "Orange subtle variation of the alert component.",
    width: 300
} %}

### 03 Cupcake strong

{% contentPageImage {
    src: "../../../assets/img/components/modal-apps/variants-cupcake-strong.svg",
    alt: "Cupcake strong variation of the alert component.",
    width: 300
} %}

### 03 Cupcake subtle

{% contentPageImage {
    src: "../../../assets/img/components/modal-apps/variants-cupcake-subtle.svg",
    alt: "Cupcake subtle variation of the alert component.",
    width: 300
} %}

### 04 Berry strong

{% contentPageImage {
    src: "../../../assets/img/components/modal-apps/variants-berry-strong.svg",
    alt: "Berry strong variation of the alert component.",
    width: 300
} %}

### 04 Berry subtle

{% contentPageImage {
    src: "../../../assets/img/components/modal-apps/variants-berry-subtle.svg",
    alt: "Berry subtle variation of the alert component.",
    width: 300
} %}

### 05 Turmeric strong

{% contentPageImage {
    src: "../../../assets/img/components/modal-apps/variants-turmeric-strong.svg",
    alt: "Turmeric strong variation of the alert component.",
    width: 300
} %}

### 05 Turmeric subtle

{% contentPageImage {
    src: "../../../assets/img/components/modal-apps/variants-turmeric-subtle.svg",
    alt: "Turmeric subtle variation of the alert component.",
    width: 300
} %}

### 06 Aubergine strong

{% contentPageImage {
    src: "../../../assets/img/components/modal-apps/variants-aubergine-strong.svg",
    alt: "Aubergine strong variation of the alert component.",
    width: 300
} %}

### 06 Aubergine subtle

{% contentPageImage {
    src: "../../../assets/img/components/modal-apps/variants-aubergine-subtle.svg",
    alt: "Aubergine subtle variation of the alert component.",
    width: 300
} %}

### 08 Latte strong

{% contentPageImage {
    src: "../../../assets/img/components/modal-apps/variants-latte-strong.svg",
    alt: "Latte strong variation of the alert component.",
    width: 300
} %}

### 08 Latte subtle

{% contentPageImage {
    src: "../../../assets/img/components/modal-apps/variants-latte-subtle.svg",
    alt: "Latte subtle variation of the alert component.",
    width: 300
} %}

---

## Usage

### Colour

For critical messaging, the Neutral - alternative variant must be used. For non-critical messaging (offers/vouchers/promotions), the variants with coloured backgrounds can be used.

#### Critical messaging

{% contentPageImage {
    src: "../../../assets/img/components/modal-apps/usage-colour-critical.svg",
    alt: "Alert component in variant neutral-alternative for critical messaging.",
    width: 300
} %}

#### Promotional messaging

{% contentPageImage {
    src: "../../../assets/img/components/modal-apps/usage-colour-promotional.svg",
    alt: "Alert component in variant cupcake subtle for promotional messaging.",
    width: 300
} %}

### Alignment

Critical messaging should always be left-aligned. Promotional messaging can be center-aligned.

#### Critical messaging

{% contentPageImage {
    src: "../../../assets/img/components/modal-apps/usage-alignment-critical.svg",
    alt: "Alert component with text left-aligned for critical messaging.",
    width: 300
} %}

#### Promotional messaging

{% contentPageImage {
    src: "../../../assets/img/components/modal-apps/usage-alignment-promotional.svg",
    alt: "Alert component with text center-aligned for promotional messaging.",
    width: 300
} %}

### Title prominence

Critical messaging should use default title styling. Promotional messaging can use prominent styling.

#### Critical messaging

{% contentPageImage {
    src: "../../../assets/img/components/modal-apps/usage-title-critical.svg",
    alt: "Alert component with default title styling for critical messaging.",
    width: 300
} %}

#### Promotional messaging

{% contentPageImage {
    src: "../../../assets/img/components/modal-apps/usage-title-promotional.svg",
    alt: "Alert component with prominent title styling for promotional messaging.",
    width: 300
} %}

---

## Sizes

The default width of the component is set to 328px, however may be adjusted to fit specific device, ensuring a 16px margin is applied from the edge of the screen.

{% notification {
  type: "warning",
  message: "Please note that the minimum width of the modal component is 288px."
} %}

### Default

{% contentPageImage {
    src: "../../../assets/img/components/modal-apps/sizes-default.svg",
    alt: "Alert component in default size with 328px width and 16px margin.",
    width: 300
} %}

### Minimum Size

{% contentPageImage {
    src: "../../../assets/img/components/modal-apps/sizes-minimum.svg",
    alt: "Alert component in minimum size with 288px width.",
    width: 300
} %}

---

## Modifiers

### Emphasis through colour

Depending on the level of visual prominence you want to give to the Modal, you can choose between strong or subtle emphasis.

#### Strong

{% contentPageImage {
    src: "../../../assets/img/components/modal-apps/modifiers-colour-strong.svg",
    alt: "Alert component with strong colour emphasis.",
    width: 300
} %}

#### Subtle

{% contentPageImage {
    src: "../../../assets/img/components/modal-apps/modifiers-colour-subtle.svg",
    alt: "Alert component with subtle colour emphasis.",
    width: 300
} %}

### Title

Depending on the level of visual prominence you want to give to the title, you can choose between default or prominent emphasis.

#### Default title

{% contentPageImage {
    src: "../../../assets/img/components/modal-apps/modifiers-title-default.svg",
    alt: "Alert component with default title styling using the typography token Heading M.",
    width: 300
} %}

#### Prominent title

{% contentPageImage {
    src: "../../../assets/img/components/modal-apps/modifiers-title-prominent.svg",
    alt: "Alert component with prominent title styling using the typography token Heading XL italic.",
    width: 300
} %}

### Centre-alignment

You can use centre-alignment to highlight short messages, like titles or brief instructions, enhancing readability and importance. However, longer text or multiple elements may benefit from left-aligned text for better flow.

{% contentPageImage {
    src: "../../../assets/img/components/modal-apps/modifiers-alignment.svg",
    alt: "Alert component with centre-aligned text.",
    width: 300
} %}

### Header content

#### Illustration

You can use an illustration in the header of an Alert component to add visual context, this can reinforce the alert's purpose and enhance engagement while aligning with the app's design.

{% contentPageImage {
    src: "../../../assets/img/components/modal-apps/modifiers-header-illustration.svg",
    alt: "Alert component with illustration in the header.",
    width: 300
} %}

#### Image 

You can use an image in the header of an Alert component to add visual context. This is available either with full bleed or with 16px margin either side. 

##### Full bleed image

{% contentPageImage {
    src: "../../../assets/img/components/modal-apps/modifiers-header-image.svg",
    alt: "Alert component with full bleed image in the header.",
    width: 300
} %}

##### Image with margin


{% contentPageImage {
    src: "../../../assets/img/components/modal-apps/modifiers-header-image-margin.svg",
    alt: "Alert component with image in the header and margin.",
    width: 300
} %}

###### Image size

There are 3 aspect ratios for imagery within the modal component. Aspect ratios are locked and will keep their height and width properties when resizing the component. There are 3 available sizes/ratios:

{% notification {
  type: "information",
  message: "The image aspect ration must be consistent across portrait and landscape design as to not distort or stretch the image."
} %}

**Small (3:1)**

{% contentPageImage {
    src: "../../../assets/img/components/modal-apps/modifiers-image-small.svg",
    alt: "Alert component with small image in the header.",
    width: 300
} %}

**Medium (16:9)**

{% contentPageImage {
    src: "../../../assets/img/components/modal-apps/modifiers-image-medium.svg",
    alt: "Alert component with medium image in the header.",
    width: 300
} %}

**Large (4:3)**

{% contentPageImage {
    src: "../../../assets/img/components/modal-apps/modifiers-image-large.svg",
    alt: "Alert component with large image in the header.",
    width: 300
} %}

#### Animation

Animation can be used in the header of an Alert component to add visual context. Lottie files will need to be used for implementing this in development; however, GIF animations can be used in Figma files for visual purposes only.

{% contentPageImage {
    src: "../../../assets/img/components/modal-apps/modifiers-animation.svg",
    alt: "Alert component with animation in the header.",
    width: 300
} %}

### No body

You can use an alert with no body for quick confirmation messages, alerts, notifications or confirmation prompts where the title alone is enough.

{% contentPageImage {
    src: "../../../assets/img/components/modal-apps/modifiers-no-body.svg",
    alt: "Alert component with no body text.",

    width: 300
} %}

### Side by side calls to action

You can use side-by-side calls to action when space is limited or when both actions are equally important. This is often seen in confirmation prompts for efficient interaction, like "OK" and "Cancel".

{% notification {
  type: "warning",
  message: "Please note that this modifier is only available for left-aligned Alerts."
} %}

{% contentPageImage {
    src: "../../../assets/img/components/modal-apps/modifiers-two-buttons.svg",
    alt: "Alert component with side-by-side calls to action.",
    width: 300
} %}

### Single call to action

You can use a single call to action in an alert when there's only one primary action and to simplify user decisions. This is often seen in scenarios without alternative choices.

{% contentPageImage {
    src: "../../../assets/img/components/modal-apps/modifiers-one-button.svg",
    alt: "Alert component with single call to action.",
    width: 300
} %}

### Footer

Designers have the option to add non-interactive text below the actions, or they can use a slot to add in other content below the actions. This option will be hidden by default and will be enabled by toggle.

#### Footer text

{% contentPageImage {
    src: "../../../assets/img/components/modal-apps/modifiers-footer-text.svg",
    alt: "Alert component with footer text.",
    width: 300
} %}

#### Footer slot

{% contentPageImage {
    src: "../../../assets/img/components/modal-apps/modifiers-footer-slot.svg",
    alt: "Alert component with footer slot.",
    width: 300
} %}

---

## Interactions

### Closing the alert

Tapping outside the alert's boundaries will close it, providing an intuitive way to dismiss it without interacting with specific UI elements like calls to action (unless that is otherwise specified by the interaction).

This interaction is enabled by default. Designers need to ask engineers to disabled during in the handover.

{% contentPageImage {
    src: "../../../assets/img/components/modal-apps/interactions-close.svg",
    alt: "Example of an alert closing when tapping outside its boundaries.",
    width: 300
} %}

### Slots available

The purpose of chips is to provide a visual representation of a specific entity or attribute, such as a selected option or a labelled category. Chips can also be interactive, allowing users to remove or modify the selected choices.
Chips are commonly used in various contexts, including filtering options, search results or any situation where concise and visually distinct information needs to be displayed.

{% list {
    type: listTypes.ordered,
    items: [
        "**Header slot:** Hidden by default.",
        "**Body slot:** Available as a variant.",
        "**Footer slot:** Hidden by default."
    ]
} %}

---

## Content

### Title content

Ensure the title clearly communicates the purpose or topic of the alert.
Keep the title brief and to the point, avoiding unnecessary wording.
Make sure the title directly relates to the content of the alert, helping users understand its significance.
Maintain consistency in tone and style with the rest of the application's UI for a cohesive user experience.
Titles have the ability to toggle on and off prominence:

- Default (Heading M/Narrow)
- Prominent (Heading XL/Narrow italic)

### Body

Provide clear and concise information or instructions that help users understand the context or purpose of the alert.
Include only essential details relevant to the user's current task or decision-making process, avoiding unnecessary information.

### Calls to action

Clearly label each call to action to indicate its purpose and the outcome of selecting it.
Use verbs that prompt immediate action and clearly convey what will happen when the user selects the option.
Use language that is familiar and understandable to the target audience, avoiding technical or industry-specific terms that may confuse users.

### Footer content

Use it for non-interactive, secondary information. This includes disclaimers, terms and conditions, legal text, and specific offer restrictions.
Do not use it for primary actions or critical messaging. Content here must be purely supplementary and non-essential to completing the main task of the alert.

---

## Overrides

### Title overrides

{% contentPageImage {
    src: "../../../assets/img/components/modal-apps/content-overrides-title.svg",
    alt: "Example of an alert component title using default heading being replaced with heading italic.",
    width: 300
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Title:** Title can be overridden to use any of the Heading font tokens. As a  default state, the title will use Heading M / Narrow. When the prominent toggle is engaged, Heading XL / Narrow italic is applied."
    ]
} %}

### Buttons overrides

{% contentPageImage {
    src: "../../../assets/img/components/modal-apps/content-overrides-buttons.svg",
    alt: "Example pointing at alert component buttons that can be overridden to use different variants.",
    width: 300
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Buttons:** The Button’s size can be decreased, and their variant can be changed. But all changes must adhere to the button pair guidelines if they are kept as a pair, including the size of both buttons remaining consistent."
    ]
} %}

---

## Examples

Here’s some examples of an Alert component in context:

### LTR examples

{% contentPageImage {
    src: "../../../assets/img/components/modal-apps/example-ltr.svg",
    alt: "Example of an alert component in LTR context.",
    width: 300
} %}

### RTL Examples

{% contentPageImage {
    src: "../../../assets/img/components/modal-apps/example-rtl.svg",
    alt: "Example of an alert component in RTL context.",
    width: 300
} %}
