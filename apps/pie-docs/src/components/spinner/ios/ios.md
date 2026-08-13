---
eleventyNavigation:
    key: iOS
    parent: Spinner
    order: 4
shouldShowContents: true
eleventyComputed:
    sizes: "{% include './sizes.json'%}"
---

## Dos and don'ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use a spinner whenever the anticipated wait time is between 2 and 5 seconds.",
            "Use when retrieving data or performing slow computations to notify the user that their request is being processed."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Avoid showing multiple spinners on a single page."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src:"../../../assets/img/components/spinner/ios/anatomy.png",
    alt: "Number one attached to the spinner component.",
    width: 210
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Spinner:** Visual indicator that continuously animates."
    ]
} %}

---

## Variants

### Brand

{% contentPageImage {
    src:"../../../assets/img/components/spinner/ios/variants-brand.png",
    width: 48,
    alt: "Brand variant of the spinner component."
} %}

### Secondary

{% contentPageImage {
    src:"../../../assets/img/components/spinner/ios/variants-secondary.png",
    width: 48,
    alt: "Secondary variant of the spinner component"
} %}

### Secondary dark

{% contentPageImage {
    src:"../../../assets/img/components/spinner/ios/variants-secondary-dark.png",
    width: 48,
    alt: "Secondary dark variant of the spinner component."
} %}

### Inverse

{% contentPageImage {
    src:"../../../assets/img/components/spinner/ios/variants-inverse.png",
    width: 48,
    variant: "inverse",
    alt: "Inverse variant of the spinner component."
} %}

### Inverse light

{% contentPageImage {
    src:"../../../assets/img/components/spinner/ios/variants-inverse-light.png",
    width: 48,
    variant: "inverse",
    alt: "Inverse variant of the spinner component in white and grey colour on a black background"
} %}

---

## Size

Outlines the spinner sizes that are available, and where they should be used across our products.

{% componentDetailsTable {
tableData: sizes
} %}

---

## Placement

Spinners are positioned to indicate the process that they represent.

### Centered

When centered on the screen, they indicate the initial loading of screen content.

{% contentPageImage {
    src:"../../../assets/img/components/spinner/ios/placement-centered.png",
    width: 200,
    alt: "Example of the spinner component centered on the screen to indicate the initial loading of screen content."
} %}

### Above or below

When placed above or below existing content, they draw attention to where new content will appear.

{% contentPageImage {
    src:"../../../assets/img/components/spinner/ios/placement-above-or-below.png",
    width: 200,
    alt: "Example of the spinner component placed below existing content"
} %}

### Within a component

When placed within a component, they indicate the action is being placed after an interaction with the certain component, to express a connection between an interaction and a specific item. They are also typically used to express when an interaction, such as clicking a button again, isn’t available.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
        src:"../../../assets/img/components/spinner/ios/placement-component-1.png",
        width: 200,
        alt: "Example of the spinner component placed within a component to indicate that an action is being processed."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
        src:"../../../assets/img/components/spinner/ios/placement-component-2.png",
        width: 200,
        alt: "Example of the spinner component placed within a component to indicate that an action is being processed."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Animation

Preview the Spinner animation here.

{% contentPageImage {
    src:"../../../assets/img/components/spinner/ios/animation.png",
    width: 200,
    alt: "Example of the spinner component animation."
} %}

---

## Examples

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
        src:"../../../assets/img/components/spinner/ios/example-1.png",
        width: 200,
        alt: "Example of the spinner component in a button."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
        src:"../../../assets/img/components/spinner/ios/example-2.png",
        width: 200,
        alt: "Example of the spinner component in an icon button."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentPageImage {
    src:"../../../assets/img/components/spinner/ios/example-3.png",
    width: 200,
    alt: "Example of the spinner component in the uploader."
} %}
