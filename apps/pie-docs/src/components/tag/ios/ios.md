---
eleventyNavigation:
    key: iOS
    parent: Tag
    order: 4
shouldShowContents: true
eleventyComputed:
    sizes: "{% include './sizes.json' %}"
---

## Dos and Don'ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use when content is mapped to multiple categories, and the user needs a way to differentiate between them.",
            "Use to call attention to details in a way that makes it easy to scan."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "If only an icon is required to convey the message, use the [tag: icon only](/components/tag-icon-only) component instead."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src:"../../../assets/img/components/tag-apps/anatomy.svg",
    alt: "Anatomy of a tag.",
    width: 126
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Container:** Holds related UI elements.",
        "**Leading icon background (Optional):** Background container for leading icon.",
        "**Leading icon (Optional):** Visually supports the label.",
        "**Label:** Provides informative information to the user."
    ]
} %}

---

## Modifiers

### Icon

When incorporating an icon into a tag, it is essential to ensure that the icon clearly supports the label.

#### Leading

Leading icon provides context and visually supports the label and it is available for both variants.
{% contentPageImage {
    src:"../../../assets/img/components/tag-apps/modifiers-icon-leading.svg",
    alt: "A large and a small icon both using leading icons. These icons are placed before the icon text.",
    width: "128px"
} %}

### Emphasis

Depending on the level of visual prominence you want to give to the tag, you can choose between strong or subtle emphasis.

{% contentLayout %}
  {% contentItem %}
    <h4>Strong</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/tag-apps/strong.svg",
      width: "49px",
      alt: "A tag component with label text. The component has a dark background colour to indicate strong emphasis."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Subtle</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/tag-apps/subtle.svg",
      width: "49px",
      alt: "A tag component with label text. The component has a subtle background colour to indicate subtle emphasis.",
      variant: "secondary"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Colours

Select from a range of colour options across the two levels of emphasis.

{% notification {
  type: "information",
  message: "Please note that the translucent variant in iOS uses a container fill with transparency combined with blur."
} %}

{% contentLayout %}
  {% contentItem %}
    <h3>Neutral</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag-apps/neutral.svg",
      width: "123px",
      alt: "Tag demonstrating the neutral colour."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Neutral alternative</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag-apps/neutral-alt.svg",
      width: "57px",
      alt: "Tag demonstrating the neutral alternative colour."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Ghost</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag-apps/ghost.svg",
      width: "57px",
      alt: "Tag demonstrating the ghost colour."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Outline</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag-apps/outline.svg",
      width: "57px",
      alt: "Tag demonstrating the outline colour."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Translucent</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag-apps/translucent.svg",
      width: "57px",
      alt: "Tag demonstrating the translucent colour."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Information</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag-apps/info.svg",
      width: "123px",
      alt: "Tag demonstrating the information colour."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Success</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag-apps/success.svg",
      width: "123px",
      alt: "Tag demonstrating the success colour."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Error</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag-apps/error.svg",
      width: "123px",
      alt: "Tag demonstrating the error colour."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Warning</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag-apps/warning.svg",
      width: "123px",
      alt: "Tag demonstrating the warning colour."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>02 Orange subtle</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag-apps/orange-sub.svg",
      width: "57px",
      alt: "Tag demonstrating the orange subtle colour."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>03 Cupcake</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag-apps/cupcake.svg",
      width: "123px",
      alt: "Tag demonstrating the cupcake colour."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>04 Berry</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag-apps/berry.svg",
      width: "123px",
      alt: "Tag demonstrating the berry colour."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>05 Turmeric</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag-apps/turmeric.svg",
      width: "123px",
      alt: "Tag demonstrating the turmeric colour."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>06 Aubergine</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag-apps/aubergine.svg",
      width: "123px",
      alt: "Tag demonstrating the aubergine colour."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>08 Latte</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag-apps/latte.svg",
      width: "123px",
      alt: "Tag demonstrating the latte colour."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Sizes

### Height

Two size options are available to suit the scale required.

{% componentDetailsTable {
  tableData: sizes
} %}

### Width

Container width is dynamic to the content's width and retains 4px left and right padding.

{% contentPageImage {
    src:"../../../assets/img/components/tag/width.svg",
    alt: "A tag component with a long text",
    width: "108px"
} %}

---

## Content

### Overrides

{% contentPageImage {
    src:"../../../assets/img/components/tag/overrides.svg",
    alt: "A tag component with some label text. This is fully customisable.",
    width: "68px"
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Label:** The Tag’s label can be bold for increased emphasis."
    ]
} %}

---

## Meaning and purpose

Tags can be used to indicate status or used to convey specific meanings within JET which are displayed below.

{% contentPageImage {
    src:"../../../assets/img/components/tag/meaning-and-purpose.svg",
    alt: "A collection of different tag variants",
    width: "342px"
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Info:** Drawing attention to contextual information for the user",
        "**Warning:** Drawing attention to non-critical information for the user",
        "**Success:** Drawing attention to positive information for the user",
        "**Error:** Drawing attention to critical information for the user. Please review if an icon only tag is appropriate it might be better to use a dialogue, notification, toast or banner component",
        "**Offers:** Drawing attention to contextual information about the details of a deal or promotion to the user"
    ]
} %}

---

## Interactive states

The Tag includes the default and disabled states.

{% nofication {
  type: "information",
  message: "As the Tag is no longer interactive the design system team is currently reviewing the interactive states. Contact the design system team if you have any questions."
} %}

### Default state

{% contentPageImage {
    src:"../../../assets/img/components/tag-apps/interactive-state-default.svg",
    alt: "A collection of different tag variants showing the different interactive states.",
    width: "342px"
} %}

### Disabled state

{% contentPageImage {
    src:"../../../assets/img/components/tag-apps/interactive-state-disabled.svg",
    alt: "A collection of different tag variants showing the different interactive states.",
    width: "342px"
} %}

---

## Examples

### LTR examples

Here are some examples of tags in left-to-right context:

{% contentPageImage {
    src:"../../../assets/img/components/tag/example-ltr-restaurant-listing.svg",
    alt: "An example of the tag inside a restaurant listing that displays text from left to right. The tags start on the left of the image.",
    width: "343px"
} %}

### RTL examples

Here are some examples of tags in right-to-left context:

{% contentPageImage {
    src:"../../../assets/img/components/tag/example-rtl-restaurant-listing.svg",
    alt: "An example of the tag inside a restaurant listing that displays text from right to left. The tags start on the right of the image.",
    width: "343px"
} %}
