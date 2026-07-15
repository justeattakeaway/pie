---
eleventyNavigation:
  key: Web
  parent: Slider
  order: 2
shouldShowContents: true
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
    src:"../../../assets/img/components/slider/anatomy.svg",
    alt: "Anatomy of a slider that contains a form label, progress line, progress container and handle.",
    width: 1024,
    variant: "secondary"
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Form label (optional):** The [form label](https://pie.design/components/form-label/) provides necessary content / information to a form.",
        "**Progress line**: Illustrates the visual representation of the selection.",
        "**Progress container:** Shows a user’s available minimum and maximum values on the range to select from.",
        "**Handle:** An indicator that can be moved on the track within the slider range to specify a selected value."
    ]
} %}

---

## Variants

### Default

{% contentPageImage {
    src: "../../../assets/img/components/slider/variants-default.svg",
    alt: "Default variant of the slider.",
    width: 300,
    variant: "secondary"
} %}

---

## Modifiers

### Tick marks

Tick marks are used to indicate specific values, providing users with clear reference points to move their handle to.

{% contentPageImage {
    src: "../../../assets/img/components/slider/modifiers-tick-marks.svg",
    alt: "Slider with tick marks.",
    width: 300,
    variant: "secondary"
} %}

---

## Interactions

Users can adjust the handle's position by either dragging it along the progress container or tapping directly on a specific point within the container to reposition the handle.


{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/slider/interactions1.svg",
      width: "200",
      alt: "Slider showing interactive state.",
      variant: "secondary"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/slider/interactions2.svg",
      width: "200",
      alt: "Slider showing interactive state.",
      variant: "secondary"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Interactive states

Outlines the atomic level interactive elements for the component.

{% contentLayout %}
  {% contentItem %}
    <h4>Default</h4>
    {% contentPageImage {
        src: "../../../assets/img/components/slider/interactive-default.svg",
        alt: "Slider in default state.",
        width: 300,
        variant: "secondary"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Hover</h4>
    {% contentPageImage {
        src: "../../../assets/img/components/slider/interactive-hover.svg",
        alt: "Slider in hover state.",
        width: 300,
        variant: "secondary"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Active</h4>
    {% contentPageImage {
        src: "../../../assets/img/components/slider/interactive-active.svg",
        alt: "Slider in active state.",
        width: 300,
        variant: "secondary"
    } %}
  {% endcontentItem %}
    {% contentItem %}
    <h4>Focus</h4>
    {% contentPageImage {
        src: "../../../assets/img/components/slider/interactive-focus.svg",
        alt: "Slider in focus state.",
        width: 300,
        variant: "secondary"
    } %}
  {% endcontentItem %}
    {% contentItem %}
    <h4>Disabled</h4>
    {% contentPageImage {
        src: "../../../assets/img/components/slider/interactive-disabled.svg",
        alt: "Slider in disabled state.",
        width: 300,
        variant: "secondary"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Examples

### LTR examples

Here are some examples of the component in left-to-right context:

{% contentPageImage {
    src: "../../../assets/img/components/slider/examples-ltr.svg",
    alt: "Slider example in left-to-right context showing a volume control at 50%.",
    width: 300,
    variant: "secondary"
} %}

### RTL examples

Here are some examples of the component in right-to-left context:

{% contentPageImage {
    src: "../../../assets/img/components/slider/examples-rtl.svg",
    alt: "Slider examples in right-to-left context showing a volume control at 50%.",
    width: 300,
    variant: "secondary"
} %}
