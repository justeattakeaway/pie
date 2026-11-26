---
eleventyNavigation:
    key: Web
    parent: Skeleton
    order: 2
shouldShowContents: true
eleventyComputed:
    skeletonVsSpinnerData: "{% include './skeleton-vs-spinner.json' %}"
    motionTokensData: "{% include './motion-tokens.json' %}"
---

## Dos and don'ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use skeletons for common UI elements like images, text, avatars, buttons, and forms.",
            "Keep skeleton layouts simple. They should hint at the structure of the page, not recreate it exactly.",
            "Use skeletons for elements inside an overlaying component (e.g. modal) if needed.",
            "Use skeleton loading on its own - don't combine it with other loading types."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don't replace every element 1:1 with a skeleton. Complex skeletons can be distracting and create a poor experience.",
            "Don't use skeletons for tooltips, alert notices, snackbars, or navigation buttons.",
            "Don't use a skeleton to represent overlaying components (e.g. modal).",
            "Don't use skeletons when the layout is unknown - it can make the experience feel worse, not better."
        ]
    }
} %}

---

## Skeleton vs Spinner

Both skeletons and spinners indicate that something is loading, but they suit different situations.

{% notification {
    type: "information",
    message: "For guidance on the Spinner component, please see the [Spinner documentation](/components/spinner/)."
} %}

{% simpleTable {
    tableData: skeletonVsSpinnerData,
    isFullWidth: true
} %}

---

## Variants

Several shapes are available to match the different types of content that can be loaded.

### Box

Replaces squared or rectangular UI elements such as cards, images, thumbnails, banners, and text inputs.

{% contentPageImage {
    src: "../../../assets/img/components/skeleton/variants-box.svg",
    variant: "secondary",
    width: 120,
    alt: "A box skeleton shape."
} %}

### Circle

Replaces circular UI elements such as avatars, icon buttons, steppers, and pagination indicators.

{% contentPageImage {
    src: "../../../assets/img/components/skeleton/variants-circle.svg",
    variant: "secondary",
    width: 120,
    alt: "A circle skeleton shape."
} %}

### Pill

Replaces pill-shaped elements such as buttons (all sizes), chips, and segmented controls.

{% contentPageImage {
    src: "../../../assets/img/components/skeleton/variants-pill.svg",
    variant: "secondary",
    width: 120,
    alt: "A pill skeleton shape."
} %}

### Text

Replaces lines of text or whole paragraphs, regardless of the typographic style applied.

{% contentPageImage {
    src: "../../../assets/img/components/skeleton/variants-text.svg",
    variant: "secondary",
    width: 320,
    alt: "A single-line text skeleton shape."
} %}

{% notification {
    type: "warning",
    message: "**Important:** When using the 'Text' variant to display more than one line, the last line should be half-width. This signals to users that the block represents text content rather than a single line."
} %}

{% contentPageImage {
    src: "../../../assets/img/components/skeleton/variants-text-multi-line.svg",
    variant: "secondary",
    width: 320,
    alt: "A multi-line text skeleton shape with a half-width last line."
} %}

### Star

Replaces review and rating-related UI elements. Available in two sub-variants:

- **Single:** for components that show a rating using a single star.
- **Full:** for components that show a full star rating.

{% contentPageImage {
    src: "../../../assets/img/components/skeleton/variants-star.svg",
    variant: "secondary",
    width: 169,
    alt: "Star skeleton shapes showing the single and full sub-variants."
} %}

---

## Modifiers

### Colour

Depending on the context where a component might be found, different colours might need to be used so that the Skeleton is visible.

#### Default

This is the default colour for Skeleton components. You should try to use it as the main colour, provided that the context allows it.

{% contentPageImage {
    src: "../../../assets/img/components/skeleton/modifiers-colour-default.svg",
    variant: "secondary",
    width: 120,
    alt: "A box skeleton in the default colour."
} %}

#### Strong

A darker version of the default colour, to be used when there are multiple levels to the component the skeleton is replacing.

{% contentPageImage {
    src: "../../../assets/img/components/skeleton/modifiers-colour-strong.svg",
    variant: "secondary",
    width: 120,
    alt: "A box skeleton in the strong colour."
} %}

#### Subtle

A lighter version of the default colour, to be used when there are multiple levels to the component the skeleton is replacing.

{% contentPageImage {
    src: "../../../assets/img/components/skeleton/modifiers-colour-subtle.svg",
    variant: "strong",
    width: 120,
    alt: "A box skeleton in the subtle colour."
} %}

---

## Size

Skeleton shapes should mimic the size of the UI element they're replacing:

Always match the height exactly. If a UI element is 40px tall, the skeleton should also be 40px tall.

Match the width if the element has a fixed size (e.g. an icon button). If the width varies, set the skeleton to fill the container width and use percentages to represent the element.

{% contentPageImage {
    src: "../../../assets/img/components/skeleton/modifiers-size-example.svg",
    alt: "A 'Tip your courier?' card shown as loaded content next to its skeleton placeholder, both 40px tall.",
    width: 951
} %}

### Resizing

We've carefully crafted our main Skeleton shapes so multiple components and UI elements can be recreated using a small amount of variations.

In the example below we've resized our Pill Skeleton to recreate our Button component (Large & Small sizes) and our Chip component.

{% contentPageImage {
    src: "../../../assets/img/components/skeleton/modifiers-size-resizing-example.svg",
    variant: "secondary",
    width: 460,
    alt: "Pill skeletons resized to recreate large and small buttons and a chip."
} %}

---

## Position

Skeleton placeholders sit in the same position on the screen as their loaded counterparts would. This is done to avoid the feeling of UI elements and components jumping around on the page.

{% contentPageImage {
    src: "../../../assets/img/components/skeleton/position-example.avif",
    width: "861px",
    alt: "A skeleton screen on the left and the same screen with loaded content on the right, showing elements in the same position."
} %}

{% notification {
    type: "information",
    title: "Cumulative Layout Shift (CLS)",
    message: "Cumulative Layout Shift (CLS) is a Core Web Vital that measures visual stability and how often users experience unexpected layout shifts on a page, and must be considered when creating skeleton layouts for a page. A low CLS means a more stable, less frustrating experience for a user. <a href='https://web.dev/articles/cls' target='_blank'>See here for more info.</a>"
} %}

---

## Overrides

### Corner radius

Each skeleton shape has default corner radius values that reflect the components they represent:

- **Box:** 8px
- **Circle:** fully rounded
- **Pill:** fully rounded
- **Text:** 4px

{% contentPageImage {
    src: "../../../assets/img/components/skeleton/overrides-corner-radius-box.svg",
    width: 178,
    alt: "A box skeleton with an annotation pointing to its corner radius."
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Box:** Override available for the corner radius to match the UI element being loaded. This ensures the skeleton closely resembles the real content and maintains visual continuity."
    ]
} %}

{% notification {
    type: "information",
    message: "The Pill, Circle and Text variants have a predefined radius. Do not modify this to preserve consistency."
} %}

{% contentPageImage {
    src: "../../../assets/img/components/skeleton/overrides-corner-radius-other-shapes.svg",
    width: 292,
    alt: "Circle, pill and text skeleton shapes with annotations showing their predefined corner radii."
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Circle:** fully rounded",
        "**Pill:** fully rounded",
        "**Text:** 4px"
    ]
} %}

---

## Using colour within Skeletons

### Be mindful of the background colour

When building Skeletons, make sure you use the right base colour by observing the colour of the background where the Skeleton will be placed. Don't use a Skeleton colour which matches the colour of the background.

{% contentLayout { columns: 3 } %}
    {% contentItem %}
        {% contentPageImage {
            src: "../../../assets/img/components/skeleton/using-colour-background-default.svg",
            variant: "secondary",
            width: 120,
            alt: "A box skeleton placed on a white background."
        } %}
    {% endcontentItem %}
    {% contentItem %}
        {% contentPageImage {
            src: "../../../assets/img/components/skeleton/using-colour-background-strong.svg",
            width: 120,
            alt: "A box skeleton placed on a subtle background."
        } %}
    {% endcontentItem %}
    {% contentItem %}
        {% contentPageImage {
            src: "../../../assets/img/components/skeleton/using-colour-background-default.svg",
            variant: "strong",
            width: 120,
            alt: "A box skeleton placed on a strong background."
        } %}
    {% endcontentItem %}
{% endcontentLayout %}

### Use defined container background colours

If the component you're trying to recreate using Skeleton components uses a container or card component with a defined colour, try using the same colour for the Box Skeleton which will be replacing it.

{% usage {
    do: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/skeleton/use-defined-container-background-colours-do.avif",
            width: "358px",
            alt: "A restaurant card skeleton using the same background colour as its container."
        }]
    },
    dont: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/skeleton/use-defined-container-background-colours-dont.avif",
            width: "358px",
            alt: "A restaurant card skeleton whose background colour matches its container, making it hard to see."
        }]
    }
} %}

### Work out the number of overlapping layers

Observe the component you're trying to recreate using Skeleton shapes and make sure you use different colours to indicate the overlapping of elements within the component.

Be mindful of the order in which they appear, using lighter colours for elements that are overlaid on top of others. However, this is subject to your criteria, so always try to use colours that will help the user recognise the component better when it loads.

{% usage {
    do: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/skeleton/using-colour-container-do.avif",
            width: "375px",
            alt: "A restaurant card skeleton using the same background colour as its container."
        }]
    },
    dont: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/skeleton/using-colour-container-dont.avif",
            width: "375px",
            alt: "A restaurant card skeleton whose background colour matches its container, making it hard to see."
        }]
    }
} %}

---

## Loading order

When content replaces the skeleton, it should load in from the top of the screen downwards, starting at the top left. This creates a natural reading direction that matches how users scan a page, making the transition feel smooth rather than disruptive to the user.

{% notification {
    type: "warning",
    message: "Avoid loading content in a random order or from the bottom up, as this can cause elements to shift unexpectedly and disorient the user. The goal is for the skeleton to dissolve into real content in a way that feels predictable and calm."
} %}

{% contentPageImage {
    src: "../../../assets/img/components/skeleton/loading-order-example.avif",
    width: "1001px",
    alt: "Five frames showing skeleton content being replaced by loaded content progressively from the top of the screen downwards."
} %}

---

## Accessibility considerations

Skeletons are visual-only components and require specific considerations to ensure a good experience for all users.

### Exceptions

3:1 contrast ratio is not enforced for skeleton loaders by default. While technically recommended, skeletons are non-interactive placeholders, not content or controls that users need to interact with. Increasing contrast risks making them look like real content, creating confusion and a poorer user experience. We should prioritise subtle, low-contrast placeholders, provided they respect reduced-motion preferences and include a programmatic loading announcement for assistive technologies.

{% usage {
    do: {
        type: usageTypes.image,
        variant: "secondary",
        items: [{
            src: "../../../assets/img/components/skeleton/accessibility-contrast-do.svg",
            width: "358px",
            alt: "A restaurant card skeleton using the standard colours."
        }]
    },
    dont: {
        type: usageTypes.image,
        variant: "secondary",
        items: [{
            src: "../../../assets/img/components/skeleton/accessibility-contrast-dont.svg",
            width: "358px",
            alt: "A restaurant card skeleton using increased contrast colours."
        }]
    }
} %}

### Screen readers

Skeleton shapes are decorative and should be hidden from assistive technology (e.g. using `aria-hidden="true"`). Use a live region (e.g. `aria-live="polite"`) to announce when content has finished loading, so screen reader users know the page is ready.

### Timing

Do not show skeletons indefinitely. Always provide an end state (loaded content, error, or timeout message) so users are not left waiting without feedback.

### Motion sensitivity

When reduce motion is active, the animation/motion is removed. The shimmer will not be shown and the skeleton shapes will stay the default colour.

{% simpleTable {
    tableData: motionTokensData,
    isFullWidth: true
} %}
