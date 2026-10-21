---
eleventyNavigation:
    key: Web
    parent: List Item
    order: 2
shouldShowContents: true
---

## Dos and Don'ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Aim to keep the primary text to a single line without wrapping, and the secondary text to two lines if possible."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Consider a different component or clarify the design if you require lots of text."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src:"../../../../assets/img/components/list-item/list-item/web/anatomy.svg",
    alt: "Anatomy of the list item component with numbered callouts for the primary text, secondary text, divider, leading content and trailing content.",
    width: 1024
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Primary text:** Gives the users an overview of the content, aiming to be contained within one line.",
        "**Secondary text (Optional):** Provides additional detail if required, aiming to be contained within two lines.",
        "**Divider (Optional):** Helps visually define the end of a list item and the beginning of the next one.",
        "**Avatar (Optional):** Placeholder to be replaced with a close-up photo of a person.",
        "**Thumbnail (Optional):** Placeholder to be replaced with an image.",
        "**Leading icon (Optional):** Non-interactive icon that can be used to visually support the primary text.",
        "**Checkbox (Optional):** Allows users to select none, one, or more items from the list. Left or right alignment should be consistent through the pillar.",
        "**Radio (Optional):** Allows the user to select a single option from the list. Left or right alignment should be consistent through the pillar.",
        "**Payment icon (Optional):** Non-interactive payment icon that is used to visually support a payment method.",
        "**Toggle (Optional):** Used to quickly switch between two possible states.",
        "**Trailing icon (Optional):** Interactive icon, for example a bin or drag, but is not to be used as a secondary call to action.",
        "**Meta text (Optional):** Highlights basic information about the list item.",
        "**Tag (Optional):** Used to highlight special conditions like 'sold out'."
    ]
} %}

---

## Variants

### One-line

Used for single line list items.

{% contentPageImage {
    src:"../../../../assets/img/components/list-item/list-item/web/variants-one-line.svg",
    alt: "The one-line variant of the list item component with primary text only.",
    width: 360
} %}

### Multi-line

Used for list items that require an additional secondary line of information.

{% contentPageImage {
    src:"../../../../assets/img/components/list-item/list-item/web/variants-multi-line.svg",
    alt: "The multi-line variant of the list item component with primary and secondary text.",
    width: 360
} %}

### Compact

Used for situations where vertical space needs to be condensed.

{% contentPageImage {
    src:"../../../../assets/img/components/list-item/list-item/web/variants-compact.svg",
    alt: "The compact variant of the list item component with primary text only and a reduced height.",
    width: 360
} %}

---

## Modifiers

### Leading content

{% contentLayout %}
  {% contentItem %}
  <h4>Avatar</h4>
  <p>Not available in the Compact variant.</p>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/web/modifiers-leading-avatar.svg",
      width: "360px",
      alt: "A list item with a leading avatar."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Thumbnail</h4>
  <p>Not available in the Compact variant.</p>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/web/modifiers-leading-thumbnail.svg",
      width: "360px",
      alt: "A list item with a leading thumbnail."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentLayout %}
  {% contentItem %}
  <h4>Payment method</h4>
  <p>Payment method icon can be selected in properties.</p>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/web/modifiers-leading-payment.svg",
      width: "360px",
      alt: "A list item with a leading payment method icon."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Icon</h4>
  <p>Any decorative <a href="/foundations/iconography/library/">icon</a> can be inserted into the placeholder.</p>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/web/modifiers-leading-icon.svg",
      width: "360px",
      alt: "A list item with a leading icon."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentLayout %}
  {% contentItem %}
  <h4>Checkbox</h4>
  <p>Alignment should be consistent through the pillar.</p>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/web/modifiers-leading-checkbox.svg",
      width: "360px",
      alt: "A list item with a leading checkbox."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Radio</h4>
  <p>Alignment should be consistent through the pillar.</p>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/web/modifiers-leading-radio.svg",
      width: "360px",
      alt: "A list item with a leading radio."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Trailing content

{% contentLayout %}
  {% contentItem %}
  <h4>Meta text</h4>
  <p>Highlights additional basic information about the list item.</p>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/web/modifiers-trailing-meta-text.svg",
      width: "360px",
      alt: "A list item with trailing meta text."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Icon</h4>
  <p>Any interactive <a href="/foundations/iconography/library/">icon</a> can be inserted into the placeholder.</p>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/web/modifiers-trailing-icon.svg",
      width: "360px",
      alt: "A list item with a trailing icon."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentLayout %}
  {% contentItem %}
  <h4>Toggle</h4>
  <p>Used to quickly switch between two possible states.</p>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/web/modifiers-trailing-toggle.svg",
      width: "360px",
      alt: "A list item with a trailing toggle."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Checkbox</h4>
  <p>Alignment should be consistent through the pillar.</p>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/web/modifiers-trailing-checkbox.svg",
      width: "360px",
      alt: "A list item with a trailing checkbox."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentLayout %}
  {% contentItem %}
  <h4>Radio</h4>
  <p>Alignment should be consistent through the pillar.</p>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/web/modifiers-trailing-radio.svg",
      width: "360px",
      alt: "A list item with a trailing radio."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Tag</h4>
  <p>Alignment should be consistent through the pillar.</p>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/web/modifiers-trailing-tag.svg",
      width: "360px",
      alt: "A list item with a trailing tag."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Dividers

All variants are available with and without dividers, and the divider is left aligned to the text.

{% contentLayout %}
  {% contentItem %}
  <h4>With leading content</h4>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/web/dividers-with-leading-icon.svg",
      width: "360px",
      alt: "A list item with a leading icon and a divider that is left aligned to the text."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Without leading content</h4>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/web/dividers-without-leading-content.svg",
      width: "360px",
      alt: "A list item without leading content and a divider that spans the full width."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Overrides

{% contentPageImage {
    src:"../../../../assets/img/components/list-item/list-item/web/overrides.svg",
    alt: "Two list items with numbered callouts showing the avatar and leading and trailing content overrides.",
    width: 440
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Avatar:** The [Avatar's](/components/avatar) variants can be overridden.",
        "**Leading / trailing content:** The vertical alignment of both leading and trailing content can be adjusted to centre alignment. However, both must maintain the same alignment."
    ]
} %}

---

## Layout

### Stacking

List items can be stacked vertically and horizontally. If dividers are being used, it is suggested that the last item's divider is removed.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/web/layout-stacking-vertical.svg",
      width: "600px",
      alt: "Three list items stacked vertically with dividers between them."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/web/layout-stacking-horizontal.svg",
      width: "600px",
      alt: "Six list items stacked horizontally in two columns with dividers."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Placement

#### Inset container

List items at both wide and narrow can be full width of an inset container.

{% contentPageImage {
    src:"../../../../assets/img/components/list-item/list-item/web/placement-inset-container.svg",
    alt: "List items at the full width of inset containers in both wide and narrow screen sizes.",
    width: 1024
} %}

#### Device container

Only list items at narrow have the option to be the full width of the device.

{% contentPageImage {
    src:"../../../../assets/img/components/list-item/list-item/web/placement-device-container.svg",
    alt: "List items at the full width of the device in a narrow screen size.",
    width: 256
} %}

---

## RTL examples

Here are some examples of the list item component in RTL context:

{% contentPageImage {
    src:"../../../../assets/img/components/list-item/list-item/web/examples-rtl-1.svg",
    alt: "Examples of list items in a right-to-left context with a leading avatar, payment method icon and icon, and trailing toggles, radios and checkboxes.",
    width: 1024
} %}

{% contentPageImage {
    src:"../../../../assets/img/components/list-item/list-item/web/examples-rtl-2.svg",
    alt: "Examples of list items in a right-to-left context with leading radios, checkboxes and a thumbnail, and trailing icons, checkboxes and meta text.",
    width: 1024
} %}
