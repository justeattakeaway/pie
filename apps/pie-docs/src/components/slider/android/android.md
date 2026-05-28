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
    src:"../../../assets/img/components/slider-apps/android-anatomy.svg",
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
        "**Assistive text (Optional):** The Assistive text provides additional instructional information / error / success messaging.",
        "**String (Optional):** A text label aligned to the end of the slider, for showing a unit, limit, or contextual value alongside the range.",
        "**Tick marks (Optional):** Tick marks indicators show which predetermined values can be chosen on the slider. The slider handle snaps to the closest stop.",
        "**Help or info tooltip (Optional):** A small icon users can tap to see extra information about what the slider does or how to use it."
    ]
} %}

---

## Variants

### Default

{% contentPageImage {
    src: "../../../assets/img/components/slider-apps/android-variants-default.svg",
    alt: "Default variation of the slider.",
    width: 300
} %}

---

## Modifiers

### Tick marks

Tick marks are used to indicate specific values, providing users with clear reference points to move their handle to.

{% contentPageImage {
    src: "../../../assets/img/components/slider-apps/android-modifiers-tick-marks.svg",
    alt: "Android slider with tick marks.",
    width: 300
} %}

### Assistive text

Assistive text can be used to add additional information for the user in order to help them use the form element.

{% contentPageImage {
    src: "../../../assets/img/components/slider-apps/android-modifiers-assistive-text.svg",
    alt: "Android slider with assistive text.",
    width: 300
} %}

### String

The String displays the current numeric value of the slider at the position of the thumb (the end handle). It can be toggled on or off depending on whether you want users to see a precise readout alongside the visual slider position.

{% contentPageImage {
    src: "../../../assets/img/components/slider-apps/android-modifiers-string.svg",
    alt: "Android slider with string.",
    width: 300
} %}

### Help or info icon

The help or info icon is an optional element. When interacted with, it triggers a tooltip with additional information about the slider. This element is useful when the label alone may not be enough to guide the user.

{% contentPageImage {
    src: "../../../assets/img/components/slider-apps/android-modifiers-help-info-icon.svg",
    alt: "Android slider with help icon beside the label.",
    width: 300
} %}

---

## Interactions

Users can adjust the handle's position by either dragging it along the progress container or tapping directly on a specific point within the container to reposition the handle.

### Start position

{% contentPageImage {
    src: "../../../assets/img/components/slider-apps/android-interactions-start.svg",
    alt: "Android slider with handle at start position.",
    width: 300
} %}

### Middle position

{% contentPageImage {
    src: "../../../assets/img/components/slider-apps/android-interactions-middle.svg",
    alt: "Android slider with handle at middle position.",
    width: 300
} %}

### End position

{% contentPageImage {
    src: "../../../assets/img/components/slider-apps/android-interactions-end.svg",
    alt: "Android slider with handle at end position.",
    width: 300
} %}

---

## Interactive states

Outlines the atomic level interactive elements for the component.

### Default state

{% contentPageImage {
    src: "../../../assets/img/components/slider-apps/android-interactive-states-default.svg",
    alt: "Android slider in default interactive state.",
    width: 300
} %}

### Active state

{% contentPageImage {
    src: "../../../assets/img/components/slider-apps/android-interactive-states-active.svg",
    alt: "Android slider in active interactive state.",
    width: 300
} %}

### Disabled state

{% contentPageImage {
    src: "../../../assets/img/components/slider-apps/android-interactive-states-disabled.svg",
    alt: "Android slider in disabled interactive state.",
    width: 300
} %}

---

## Examples

### LTR examples

Here are some examples of the component in left-to-right context:

{% contentPageImage {
    src: "../../../assets/img/components/slider-apps/android-examples-ltr.svg",
    alt: "Android slider examples in left-to-right context.",
    width: 300
} %}

### RTL examples

Here are some examples of the component in right-to-left context:

{% contentPageImage {
    src: "../../../assets/img/components/slider-apps/android-examples-rtl.svg",
    alt: "Android slider examples in right-to-left context.",
    width: 300
} %}
