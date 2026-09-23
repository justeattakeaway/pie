---
eleventyNavigation:
    key: Apps
    parent: Progress Bar
    order: 3
shouldShowContents: true
---

## Dos and Don'ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "For a long operation or a process that can take a considerable or unknown amount of time.",
            "When the process can be described with quantitative information, such as a percentage.",
            "To visually show the progression of a system operation such as downloading, uploading, loading data, submitting a form, or saving updates.",
            "To convey that data is being requested, transferred, or processed."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "When manual user actions are required to progress, use the Progress Stepper instead.",
            "If the process takes longer than 5 seconds to load, use the Spinner instead."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src:"../../../assets/img/components/progress-bar/apps/anatomy.svg",
    alt: "Annotated diagram of a progress bar component showing its main parts: form label, progress line, track, assistive text, help icon, trailing text, and leading icon.",
    width: "200",
    variant: "secondary"
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Form label (Optional):** The form label provides clear and concise information to describe the contents of the field.",
        "**Progress line:** Visually illustrates the current progress.",
        "**Track (Optional):** Flexible width determined by the designer or available screen space.",
        "**Assistive text (Optional):** The assistive text provides additional instructional information, as well as error and success messages.",
        "**Help or info tooltip icon (Optional):** A small interactive icon users can tap to see extra information about the progress bar content.",
        "**Optional trailing text (Optional):** A text label aligned to the end of the progress bar to inform the user the field is optional.",
        "**Leading icon (Optional):** Leading icon that visually supports the label."
    ]
} %}

---

## Variants

### Default

Determinate progress bars fill the container from 0 to 100%. This reflects the progress of the process.

{% contentPageImage {
    src:"../../../assets/img/components/progress-bar/apps/variants-default.svg",
    alt: "A determinate progress bar showing a filled progress line at approximately 60% completion.",
    width: "200",
    variant: "secondary"
} %}

### Indeterminate

Indeterminate progress bars display movement along the container until the process is finished.

{% contentPageImage {
    src:"../../../assets/img/components/progress-bar/apps/variants-indeterminate.svg",
    alt: "An indeterminate progress bar showing an animated segment moving along the track to indicate an ongoing process.",
    width: "200",
    variant: "secondary"
} %}

---

## Modifiers

### Colour

#### Secondary

{% contentPageImage {
    src:"../../../assets/img/components/progress-bar/apps/modifiers-colour-secondary.svg",
    alt: "A progress bar using the secondary colour variant.",
    width: "200",
    variant: "secondary"
} %}

#### Brand

{% contentPageImage {
    src:"../../../assets/img/components/progress-bar/apps/modifiers-colour-brand.svg",
    alt: "A progress bar using the brand colour variant.",
    width: "200",
    variant: "secondary"
} %}

### Track

The progress bar's track is removable for specific use cases, but this should not be the default. When the track is removed, the progress bar must reside within a fixed-width container that visually indicates its potential full width. This choice requires careful consideration.

{% notification {
    type: "information",
    message: "The track and form label cannot be simultaneously removed; one must be present at all times."
} %}

{% contentPageImage {
    src:"../../../assets/img/components/progress-bar/apps/modifiers-track.svg",
    alt: "A progress bar with the track removed, showing the progress line without a background track.",
    width: "200",
    variant: "secondary"
} %}

### Label with leading icon

The leading icon is available within the form label nested component. By default the colour of the leading placeholder icon is the same as the text. The colour of the placeholder icon can be overridden.

{% contentPageImage {
    src:"../../../assets/img/components/progress-bar/apps/modifiers-label-leading-icon.svg",
    alt: "A progress bar with a leading icon displayed to the left of the form label.",
    width: "200",
    variant: "secondary"
} %}

---

## Examples

### LTR example

Here are some examples of a progress bar in LTR context.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
        src:"../../../assets/img/components/progress-bar/apps/examples-ltr-1.svg",
        alt: "Examples of progress bar in a left-to-right layout, showing various configurations.",
        width: "200",
        variant: "secondary"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
        src:"../../../assets/img/components/progress-bar/apps/examples-ltr-2.svg",
        alt: "Further examples of progress bar in a left-to-right layout.",
        width: "200"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### RTL example

Here are some examples of a progress bar in RTL context.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
        src:"../../../assets/img/components/progress-bar/apps/examples-rtl-1.svg",
        alt: "Examples of progress bar in a right-to-left layout, showing various configurations mirrored.",
        width: "200",
        variant: "secondary"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
        src:"../../../assets/img/components/progress-bar/apps/examples-rtl-2.svg",
        alt: "Further examples of progress bar in a right-to-left layout.",
        width: "200"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}
