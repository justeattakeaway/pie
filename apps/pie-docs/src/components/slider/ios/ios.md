---
eleventyNavigation:
    key: iOS
    parent: Slider
    order: 4
shouldShowContents: true
permalink: /components/slider/ios/
---

## Dos and Don'ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use for long operations or a process that can take a considerable or unknown amount of time.",
            "Use when you can describe the process with numbers, such as a percentage.",
            "Use to visually show the progression of a system operation such as downloading, uploading or saving updates.",
            "Use to convey that data is being requested, transferred or processed."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don’t use when manual user actions are required to progress. Use the Progress stepper instead.",
            "If the process takes less than 5 seconds to load, use the Spinner instead."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src:"../../../assets/img/components/slider-apps/ios-anatomy.svg",
    alt: "Anatomy of a slider that contains a form label, progress line, progress container, handle, and assistive text.",
    width: 1024,
    variant: "secondary"
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Form label (Optional):** The [form label](https://pie.design/components/form-label/) provides necessary content / information to a form.",
        "**Progress line**: Illustrates the visual representation of the selection.",
        "**Progress container:** Shows a user’s available minimum and maximum values on the range to select from.",
        "**Handle:** An indicator that can be moved on the track within the slider range to specify a selected value.",
        "**Assistive text (Optional):** The [Assistive text](https://pie.design/components/assistive-text/) provides additional instructional information / error / success messaging."
    ]
} %}

---

## Variants

### Default

{% contentPageImage {
    src: "../../../assets/img/components/slider-apps/ios-variants-default.svg",
    alt: "Default variation of the slider.",
    width: 300,
    variant: "secondary"
} %}

---

## Modifiers

### Tick marks

Tick marks are used to indicate specific values, providing users with clear reference points to move their handle to.

{% contentPageImage {
    src: "../../../assets/img/components/slider-apps/ios-modifiers-tick-marks.svg",
    alt: "Slider with tick marks.",
    width: 300,
    variant: "secondary"
} %}

### Assistive text

Assistive text can be used to add additional information for the user in order to help them use the form element.

{% contentPageImage {
    src: "../../../assets/img/components/slider-apps/ios-modifiers-assistive-text.svg",
    alt: "Slider with assistive text.",
    width: 300,
    variant: "secondary"
} %}

---

## Interactions

Users can adjust the handle's position by either dragging it along the progress container or tapping directly on a specific point within the container to reposition the handle.

In its active state the handle responds by changing to its Liquid Glass state, allowing users to see the track beneath. 


{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/slider-apps/ios-interactions1.svg",
      width: "200",
      alt: "A primary call to action button showing just an icon",
      variant: "secondary"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/slider-apps/ios-interactions2.svg",
      width: "200",
      alt: "A primary call to action button showing an icon and label",
      variant: "secondary"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Interactive states

Outlines the atomic level interactive elements for the component.

### Default

{% contentPageImage {
    src: "../../../assets/img/components/slider-apps/ios-interactive-states-default.svg",
    alt: "Slider in default interactive state.",
    width: 300,
    variant: "secondary"
} %}

### Disabled

{% contentPageImage {
    src: "../../../assets/img/components/slider-apps/ios-interactive-states-disabled.svg",
    alt: "Slider in disabled interactive state.",
    width: 300,
    variant: "secondary"
} %}

---

## Examples

### LTR examples

Here are some examples of the component in left-to-right context:

{% contentPageImage {
    src: "../../../assets/img/components/slider-apps/ios-examples-ltr.svg",
    alt: "Slider example in left-to-right context.",
    width: 300,
    variant: "secondary"
} %}

### RTL examples

Here are some examples of the component in right-to-left context:

{% contentPageImage {
    src: "../../../assets/img/components/slider-apps/ios-examples-rtl.svg",
    alt: "Slider examples in right-to-left context.",
    width: 300,
    variant: "secondary"
} %}
