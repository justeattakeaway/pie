---
eleventyNavigation:
    key: Android
    parent: Slider
    order: 2
shouldShowContents: true
permalink: /components/slider/android/
---

## Dos and Don'ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Always visually highlight the selected value within the trailing label of the form label, ensuring the user can easily see their precise choice."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don’t use when an element is displaying the status or completion of a task, using the Progress Bar instead.",
            "Don't use when exact values are critical. If a user must select an exact number, a text input is usually more appropriate."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src:"../../../assets/img/components/slider-apps/anatomy.svg",
    alt: "Anatomy of a slider that contains a form label, progress line, progress container, handle, and assistive text.",
    width: 1024,
    variant: "secondary"
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Form label (Optional):** The form label provides necessary content / information to a form with an optional trailing string.",
        "**Progress line**: Illustrates the visual representation of the selection.",
        "**Progress container:** Shows a user’s available minimum and maximum values on the range to select from.",
        "**Handle:** An indicator that can be moved on the track within the slider range to specify a selected value.",
        "**Assistive text (Optional):** The Assistive text provides additional instructional information / error / success messaging."
    ]
} %}

---

## Variants

### Default

<!-- [image to go here] -->

---

## Modifiers

### Tick marks

Tick marks are used to indicate specific values, providing users with clear reference points to move their handle to.

<!-- [image to go here] -->

### Assistive text

Assistive text can be used to add additional information for the user in order to help them use the form element.

<!-- [image to go here] -->

---

## Interactions

Users can adjust the handle's position by either dragging it along the progress container or clicking directly on a specific point within the container to reposition the handle.

<!-- [image to go here] -->

---

## Interactive states

Outlines the atomic level interactive elements for the component.

### Default state

<!-- [image to go here] -->

### Active state

<!-- [image to go here] -->

### Disabled state

<!-- [image to go here] -->

---

## Examples

### LTR examples

Here are some examples of the component in left-to-right context:

<!-- [image to go here] -->

### RTL examples

Here are some examples of the component in right-to-left context:

<!-- [image to go here] -->
