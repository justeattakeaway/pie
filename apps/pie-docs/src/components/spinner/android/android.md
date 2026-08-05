---
eleventyNavigation:
    key: Android
    parent: Spinner
    order: 3
shouldShowContents: true
eleventyComputed:
    sizes: "{% include './sizes.json'%}"
---

## Do's and Don'ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use a spinner whenever the wait anticipated wait time is between 2 and 5 seconds.",
            "Use when retrieving data or performing slow computations to notify the user that their request is being processed.",
            "On Android, the “swipe to refresh” gesture displays a circular progress indicator to indicate that the UI is being refreshed."
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
    src:"../../../assets/img/components/spinner/android/anatomy.svg",
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
    src:"../../../assets/img/components/spinner/android/variants-brand.svg",
    width: 48,
    alt: "Brand variant of the spinner component."
} %}

### Secondary

{% contentPageImage {
    src:"../../../assets/img/components/spinner/android/variants-secondary.svg",
    width: 48,
    alt: "Secondary variant of the spinner component"
} %}

### Secondary dark

{% contentPageImage {
    src:"../../../assets/img/components/spinner/android/variants-secondary-dark.svg",
    width: 48,
    alt: "Secondary dark variant of the spinner component."
} %}

### Inverse

{% contentPageImage {
    src:"../../../assets/img/components/spinner/android/variants-inverse.svg",
    width: 48,
    variant: "inverse",
    alt: "Inverse variant of the spinner component."
} %}

### Inverse light

{% contentPageImage {
    src:"../../../assets/img/components/spinner/android/variants-inverse-light.svg",
    width: 48,
    variant: "inverse",
    alt: "Inverse variant of the spinner component in white and gray colour on a black background"
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
    src:"../../../assets/img/components/spinner/android/placement-centered.svg",
    width: 200,
    alt: "Example of the spinner component centered on the screen to indicate the initial loading of screen content."
} %}

### Above or below

When placed above or below existing content, they draw attention to where new content will appear.

{% contentPageImage {
    src:"../../../assets/img/components/spinner/android/placement-above-or-below.svg",
    width: 200,
    alt: "Example of the spinner component placed below existing content"
} %}

### Within a component

When placed within a component, they indicate the action is being placed after an interaction with the certain component, to express a connection between an interaction and a specific item. They are also typically used to express when an interaction, such as clicking a button again, isn’t available.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
        src:"../../../assets/img/components/spinner/android/placement-component-1.svg",
        width: 200,
        alt: "Example of the spinner component placed within a component to indicate that an action is being processed."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
        src:"../../../assets/img/components/spinner/android/placement-component-2.svg",
        width: 200,
        alt: "Example of the spinner component placed within a component to indicate that an action is being processed."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Animation

Preview the Spinner animation here.

{% contentPageImage {
    src:"../../../assets/img/components/spinner/android/animation.svg",
    width: 200,
    alt: "Example of the spinner component animation."
} %}

---

## Examples

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
        src:"../../../assets/img/components/spinner/android/example-1.svg",
        width: 200,
        alt: "Example of the spinner component in a button."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
        src:"../../../assets/img/components/spinner/android/example-2.svg",
        width: 200,
        alt: "Example of the spinner component in an icon button."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentPageImage {
    src:"../../../assets/img/components/spinner/android/example-3.svg",
    width: 200,
    alt: "Example of the spinner component in the uploader."
} %}
