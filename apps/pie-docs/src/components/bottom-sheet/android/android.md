---
eleventyNavigation:
    key: Android
    parent: Bottom Sheet
    order: 2
---

## Dos and Don'ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use bottom sheets when you need to display additional information, controls or functionalities related to the underlying content.",
            "Use where the user needs to perform one specific task."
            "Use an overlay scrim in between the two layers of content."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don’t use bottom sheets in wide screens (over 768px wide). Use a modal box instead.",
            "Avoid stacking a bottom sheet on top of another as this can create usability issues and confusion in a user flow. Check the Overlay patterns guidelines for alternatives."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src:"../../../assets/img/components/bottom-sheet/anatomy.svg",
    alt: "Anatomy of the bottom sheet component for android.",
    width: 126
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Container:** Holds related UI elements.",
        "**Leading icon background (Optional):** Background container for leading icon.",
        "**Leading icon (Optional):** Visually supports the label.",
        "**Label:** Provides informative infromation to the user."
    ]
} %}

---

## Modifiers

### Icon 

When incorporating an icon into a tag, it is essential to ensure that the icon clearly supports the label.

#### Leading

Leading icon provides context and visually supports the label and it is available for both variants.
{% contentPageImage {
    src:"../../../assets/img/components/tag/modifiers-icon-leading.svg",
    alt: "A large and a small icon both using leading icons. These icons are placed before the icon text.",
    width: "128px"
} %}

### Emphasis

Depending on the level of visual prominence you want to give to the tag, you can choose between strong or subtle emphasis.

{% contentLayout %}
  {% contentItem %}
    <h4>Strong</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/tag/strong.svg",
      width: "49px",
      alt: "A tag component with label text. The component has a dark background color to indicate string emphasis."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Subtle</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/tag/subtle.svg",
      width: "49px",
      alt: "A tag component with label text. The component has a subtle background color (light grey) to indicate subtle emphasis.",
      variant: "secondary"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}


### Colours

Select from a range of colour options across the two levels of emphasis.

{% contentLayout %}
  {% contentItem %}
    <h3>Neutral</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag/neutral.svg",
      width: "123px",
      alt: "Tag demonstrating the neutral colour."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Neutral alternative</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag/neutral-alt.svg",
      width: "57px",
      alt: "Tag demonstrating the neutral alternative colour."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Ghost</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag/ghost.svg",
      width: "57px",
      alt: "Tag demonstrating the ghost colour."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Outline</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag/outline.svg",
      width: "57px",
      alt: "Tag demonstrating the outline colour."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Translucent</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag/translucent.svg",
      width: "57px",
      alt: "Tag demonstrating the translucent colour."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Information</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag/info.svg",
      width: "123px",
      alt: "Tag demonstrating the information colour."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Success</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag/success.svg",
      width: "123px",
      alt: "Tag demonstrating the success colour."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Error</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag/error.svg",
      width: "123px",
      alt: "Tag demonstrating the error colour."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Warning</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag/warning.svg",
      width: "123px",
      alt: "Tag demonstrating the warning colour."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>02 Orange subtle</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag/orange-sub.svg",
      width: "57px",
      alt: "Tag demonstrating the orange subtle colour."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>03 Cupcake</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag/cupcake.svg",
      width: "123px",
      alt: "Tag demonstrating the cupcake colour."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>04 Berry</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag/berry.svg",
      width: "123px",
      alt: "Tag demonstrating the berry colour."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>05 Turmeric</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag/turmeric.svg",
      width: "123px",
      alt: "Tag demonstrating the turmeric colour."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>06 Aubergine</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag/aubergine.svg",
      width: "123px",
      alt: "Tag demonstrating the aubergine colour."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>08 Latte</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag/latte.svg",
      width: "123px",
      alt: "Tag demonstrating the latte colour."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

___

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

___ 

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
        "**Error:** Drawing attention to critical information for the user. Please review if an icon only tag is appropriate it might be better to use a dialogue, notification, toast or banner 
