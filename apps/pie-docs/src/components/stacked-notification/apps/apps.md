---
eleventyNavigation:
  key: Apps
  parent: Stacked Notification
  order: 2
shouldShowContents: true
---

## Dos and Don'ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Pair it with a container. For example [Bottom sheet](/components/bottom-sheet/) or [Card](/components/card/).",
            "Use it for additional information that is contextual and related to the component attached to it.",
            "Use it for app designs only."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don't display information that requires more than 3 lines of text.",
            "Don't add interactive icons or CTAs.",
            "Don't use more than one stacked notification per element."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src:"../../../assets/img/components/stacked-notification/anatomy.svg",
    alt: "Anatomy of a stacked notification.",
    width: 834
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Container:** Sits behind the container it is always attached to.",
        "**Leading icon (optional):** Non-interactive icon that can be used to visually support the primary text.",
        "**Title (optional):** Gives the users an overview of the content and contained within one line.",
        "**Primary text:** Provides additional detail."
    ]
} %}

---

## Variants

### Default

{% contentPageImage {
    src:"../../../assets/img/components/stacked-notification/variant-default.svg",
    alt: "A default stacked notification.",
    width: 360
} %}

---

## Modifiers

### Title

The title can be removed where it is not necessary and it truncates text after 1 line.

{% contentPageImage {
    src:"../../../assets/img/components/stacked-notification/modifiers-title.svg",
    alt: "A stacked notification with a title.",
    width: 360
} %}

### Leading icon

Leading icons can be removed for all variants if not required.

{% contentPageImage {
    src:"../../../assets/img/components/stacked-notification/modifiers-leading-icon.svg",
    alt: "A stacked notification with leading icon.",
    width: 360
} %}

### Emphasis

Depending on the level of visual prominence you want to give to the stacked notification you can choose between strong or subtle emphasis.

{% contentLayout %}
  {% contentItem %}
    <h4>Strong</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/stacked-notification/emphasis-strong.svg",
      width: 360,
      alt: "A stacked notification with strong emphasis."
    } %}
    {% endcontentItem %}
    {% contentItem %}
    <h4>Subtle</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/stacked-notification/emphasis-subtle.svg",
      width: 360,
      alt: "A stacked notification with subtle emphasis.",
      variant: "secondary"
    } %}
    {% endcontentItem %}
{% endcontentLayout %}

### Colours

Select from a range of colour options across the two levels of emphasis.

#### Neutral

{% contentPageImage {
    src:"../../../assets/img/components/stacked-notification/colours-neutral.svg",
    alt: "Two neutral colour stacked notifications.",
    width: 360
} %}

#### Positive

{% contentPageImage {
    src:"../../../assets/img/components/stacked-notification/colours-positive.svg",
    alt: "Two positive colour stacked notifications.",
    width: 360,
    variant: "secondary"
} %}

#### Warning

{% contentPageImage {
    src:"../../../assets/img/components/stacked-notification/colours-warning.svg",
    alt: "Two warning colour stacked notifications.",
    width: 360
} %}

{% notification {
  type: "warning",
  message: "**Keep in mind:** Please refer to our [Errors documentation](/patterns/errors/) to pick an appropriate component for the error you want to display."
} %}

#### Info

{% contentPageImage {
    src:"../../../assets/img/components/stacked-notification/colours-info.svg",
    alt: "Two info colour stacked notifications.",
    width: 360
} %}

#### 03 Cupcake

{% contentPageImage {
    src:"../../../assets/img/components/stacked-notification/colours-cupcake.svg",
    alt: "Two cupcake colour stacked notifications.",
    width: 360
} %}

#### 04 Berry

{% contentPageImage {
    src:"../../../assets/img/components/stacked-notification/colours-berry.svg",
    alt: "Two berry colour stacked notifications.",
    width: 360
} %}

#### 06 Aubergine

{% contentPageImage {
    src:"../../../assets/img/components/stacked-notification/colours-aubergine.svg",
    alt: "Two aubergine colour stacked notifications.",
    width: 360
} %}

#### 08 Latte

{% contentPageImage {
    src:"../../../assets/img/components/stacked-notification/colours-latte.svg",
    alt: "Two latte colour stacked notifications.",
    width: 360
} %}

### Alignment

#### Default

{% contentPageImage {
    src:"../../../assets/img/components/stacked-notification/alignment-default.svg",
    alt: "A default aligned stacked notification.",
    width: 360
} %}

#### Centre aligned

{% contentPageImage {
    src:"../../../assets/img/components/stacked-notification/alignment-centre.svg",
    alt: "A centre aligned stacked notification.",
    width: 360
} %}

---

## Sizes

### Width

#### Fluid to container

The width should take 100% of the container the stacked notification is placed within.

{% contentPageImage {
    src:"../../../assets/img/components/stacked-notification/width-fluid.svg",
    alt: "A stacked notification spanning 100% width of the container.",
    width: 600
} %}

---

## Content

### Title

- The title should be short and descriptive; explain why the stacked notification is being displayed.
- If the primary text supplies all the information then using the title is optional.

### Primary text

- Be concise and avoid repeating or paraphrasing the content of the title.
- Limit content to one or two lines of text when paired with a title.

### Leading icon

- Use [iconography](/foundations/iconography/) related to the context and content.

{% contentPageImage {
    src:"../../../assets/img/components/stacked-notification/content-leading-icon.svg",
    alt: "A stacked notification with a leading icon, title and primary text.",
    width: 360
} %}
  
---

## Overflow

Default aligned and centre aligned variants follow different rules of text truncation and text line limit.

### Default aligned

If the content exceeds the available width, the title and primary text wrap to a new line.

{% notification {
  type: "warning",
  message: "**Keep in mind:** Having more than 3 lines of primary text is a signal to use a different component for your case."
} %}

{% contentPageImage {
    src:"../../../assets/img/components/stacked-notification/overflow-default.svg",
    alt: "Two stacked notifications with default aligned text that wraps to a new line.",
    width: 360
} %}

### Centre aligned

The amount of text can be as long as the width of the stacked notification. It won't truncate or do a line break.

{% notification {
  type: "warning",
  message: "**Keep in mind:** Centre aligned variant is locked to a single line of text and doesn't use a title."
} %}

{% contentPageImage {
    src:"../../../assets/img/components/stacked-notification/overflow-centre.svg",
    alt: "Two stacked notifications with centre aligned text on one line only.",
    width: 360
} %}

---

## Layout

The stacked notification is always attached to a container. Depending on the type of container it will sit partially behind a container.

### Rounder corners container

The stacked notification will need an overlap with the container so the corners are not left empty.

{% contentPageImage {
    src:"../../../assets/img/components/stacked-notification/layout-rounded-corners.svg",
    alt: "A stacked notification sitting behind a container with rounded corners.",
    width: 537
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Primary text bottom margin:** Allow for a 12px bottom margin between the bottom of the text and the top of the container.",
        "**Container overlap:** Give at least 16px of overlap so the color of the stacked notification shows around the rounded corners of the container."
    ]
} %}

### Default corners container

The margin from the text is the only consideration needed for placement.

{% contentPageImage {
    src:"../../../assets/img/components/stacked-notification/layout-default-corners.svg",
    alt: "A stacked notification sitting behind a container with default corners.",
    width: 682
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Primary text bottom margin:** Allow for a 12px bottom margin between the bottom of the text and the top of the container."
    ]
} %}

---

## Placement

Always place it attached to the top of the element you need to expand context and information on.

{% contentPageImage {
    src:"../../../assets/img/components/stacked-notification/placement.svg",
    alt: "Two stacked notifications showing placement above the content it is attached to.",
    width: 1048
} %}

---

## Behaviour

### Pop up

The stacked notification slides from under the container it is attached to. It doesn't affect the size or placement of the container.

{% notification {
  type: "information",
  message: "**Keep in mind:** The pop up behaviour is optional and only recommended to be used with cards."
} %}

{% contentPageImage {
    src:"../../../assets/img/components/stacked-notification/behaviour-popup.svg",
    alt: "A stacked notification showing pop up behaviour.",
    width: 1032
} %}

### Overrides

{% contentPageImage {
    src:"../../../assets/img/components/stacked-notification/overrides.svg",
    alt: "A stacked notification showing supporting text with a link.",
    width: 385
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Primary text:** The supporting text can include a link, when the string is a complete sentence or more."
    ]
} %}

---

## Examples

### LTR example

Here are some examples of a stacked notification in LTR context.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/stacked-notification/ltr-1.svg",
      width: 375,
      alt: "A stacked notification with left to right content."
    } %}
    {% endcontentItem %}
    {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/stacked-notification/ltr-2.svg",
      width: 375,
      alt: "A stacked notification with left to right content"
    } %}
    {% endcontentItem %}
{% endcontentLayout %}

### RTL example

Here are some examples of a stacked notification in RTL context.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/stacked-notification/rtl-1.svg",
      width: 375,
      alt: "A stacked notification with right to left content."
    } %}
    {% endcontentItem %}
    {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/stacked-notification/rtl-2.svg",
      width: 375,
      alt: "A stacked notification with right to left content."
    } %}
    {% endcontentItem %}
{% endcontentLayout %}
