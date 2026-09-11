---
eleventyNavigation:
    key: Apps
    parent: Map Pin
    order: 3
shouldShowContents: true
---

## Dos and Don'ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Keep tooltip labels short and succinct.",
            "Always use the map pin to show singular points on a map."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Do not use anywhere other than within a map.",
            "Don't display multiple tooltips at the same time on one map."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src:"../../../assets/img/components/map-pin/apps/anatomy.svg",
    alt: "Annotated diagram of a map pin component showing its parts: tooltip, pin, map point, icon, text, and thumbnail.",
    width: "200"
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Tooltip (Optional):** Provides succinctly written context.",
        "**Pin:** Contains the icon or text information.",
        "**Map point (Optional):** Marks a point on the map with higher prominence.",
        "**Icon:** Provides quickly recognised context.",
        "**Text:** Provides quickly recognised context.",
        "**Thumbnail:** Provides quickly recognised logos."
    ]
} %}

---

## Variants

### Icon

Can be used to mark points of interest on a map with visual or symbolic context.

{% contentPageImage {
    src:"../../../assets/img/components/map-pin/apps/variants-icon.svg",
    alt: "Map pin component using the icon variant, showing an icon placeholder inside the pin.",
    width: "200"
} %}

### Text

Text can be used to mark order of stops on a map with either numbers or letters depending on pillar alignment. It is recommended that no more than two characters should be used in this component.

{% contentPageImage {
    src:"../../../assets/img/components/map-pin/apps/variants-text.svg",
    alt: "Map pin component using the text variant, showing a short text label inside the pin.",
    width: "200"
} %}

### Thumbnail

Images can be added in the thumbnail to display partner logos. Check out the thumbnail documentation.

{% contentPageImage {
    src:"../../../assets/img/components/map-pin/apps/variants-thumbnail.svg",
    alt: "Map pin component using the thumbnail variant, showing a thumbnail image placeholder inside the pin.",
    variant: "secondary",
    width: "200"
} %}

---

## Modifiers

### Colour

Different colour variations can be used to visually identify different points on a map, which can be designated within individual pillars.

#### Primary

{% contentPageImage {
    src:"../../../assets/img/components/map-pin/apps/modifiers-colour-primary.svg",
    alt: "Map pin in the primary colour variant.",
    width: "200"
} %}

#### Inverse light

The inverse map pin can provide a greater contrast against different map views, such as satellite.

{% contentPageImage {
    src:"../../../assets/img/components/map-pin/apps/modifiers-colour-inverse-light.svg",
    alt: "Map pin in the inverse light colour variant.",
    variant: "inverse",
    width: "200"
} %}

#### 01 Orange

{% contentPageImage {
    src:"../../../assets/img/components/map-pin/apps/modifiers-colour-01-orange.svg",
    alt: "Map pin in the 01 orange colour variant.",
    width: "200"
} %}

#### 06 Aubergine

{% contentPageImage {
    src:"../../../assets/img/components/map-pin/apps/modifiers-colour-06-aubergine.svg",
    alt: "Map pin in the 06 aubergine variant.",
    width: "200"
} %}

### Interaction

#### Interactive

A map pin should be interactive when it serves a specific purpose or action within the user interface.

{% contentPageImage {
    src:"../../../assets/img/components/map-pin/apps/modifiers-interaction-interactive.svg",
    alt: "Map pin shown in its interactive state, indicating it responds to user interaction.",
    width: "200"
} %}

#### Non-interactive

Use the map pin in a static form, if you want the avatar to retain its original appearance without any interactive features tied with the content or context.

{% contentPageImage {
    src:"../../../assets/img/components/map-pin/apps/modifiers-interaction-not-interactive.svg",
    alt: "Map pin shown in its non-interactive state, appearing static without any interactive features.",
    width: "200"
} %}

### Tooltip position

Three tooltip positions are available within the map pin component; left, top and right. The tooltip can be removed if supporting body copy isn't required.

{% notification {
  type: "information",
  message: "Only one map pin per map can have a tooltip applied to avoid content overlap."
} %}

{% contentLayout %}
  {% contentItem %}
    <h4>Left</h4>
    {% contentPageImage {
        src:"../../../assets/img/components/map-pin/apps/modifiers-tooltip-position-left.svg",
        alt: "Map pin with the tooltip positioned to the left.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Top</h4>
    {% contentPageImage {
        src:"../../../assets/img/components/map-pin/apps/modifiers-tooltip-position-top.svg",
        alt: "Map pin with the tooltip positioned at the top.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Right</h4>
    {% contentPageImage {
        src:"../../../assets/img/components/map-pin/apps/modifiers-tooltip-position-right.svg",
        alt: "Map pin with the tooltip positioned to the right.",
        width: "200"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Map point

The map point should be used consistently across use-cases or pillars. The recommendation is for the map point to be used for low and high priority use-cases.

#### Low priority

Used to mark individual points on a map that aren't a high priority or interest to the user.

{% contentPageImage {
    src:"../../../assets/img/components/map-pin/apps/modifiers-map-point-low-priority.svg",
    alt: "Map pin with the low priority map point modifier applied.",
    width: "200"
} %}

#### High priority

Used to mark individual points on a map that are of high priority or interest to the user, such as their location, the courier or marking a delivery A to B.

{% contentPageImage {
    src:"../../../assets/img/components/map-pin/apps/modifiers-map-point-high-priority.svg",
    alt: "Map pin with the high priority map point modifier applied.",
    width: "200"
} %}

---

## Content

### Text

A maximum of two characters are permitted within the map pin, allowing pillars to add a '+' to show added stops.

{% contentPageImage {
    src:"../../../assets/img/components/map-pin/apps/content-text.svg",
    alt: "Map pin in the text modifier.",
    width: "200"
} %}

### Icon

The icon should visually provide context to the map pin location or stop.

{% contentPageImage {
    src:"../../../assets/img/components/map-pin/apps/content-icon.svg",
    alt: "Map pin in the icon modifier.",
    width: "200"
} %}

### Thumbnail

The image should be the logo of the partner.

{% contentPageImage {
    src:"../../../assets/img/components/map-pin/apps/content-images.svg",
    alt: "Map pin in the thumbnail modifier.",
    width: "200"
} %}

---

## Overrides

{% contentPageImage {
    src:"../../../assets/img/components/map-pin/apps/content-overrides.svg",
    alt: "Map pin tooltip showing bold text used within the string override.",
    width: "200"
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**String:** The tooltip string can include bold type, when the string is a complete sentence or more."
    ]
} %}

---

## Overflow

### Tooltip

If the content exceeds the maximum width of 180px, the copy will wrap onto a new line. However it is recommended that the body copy doesn't exceed two lines.

{% contentPageImage {
    src:"../../../assets/img/components/map-pin/apps/overflow-tooltip.svg",
    alt: "Map pin tooltip wrapping onto a second line when content exceeds the maximum width of 180px.",
    width: "200"
} %}

### Text

Map pin text will allow no more than two characters before truncating.

{% contentPageImage {
    src:"../../../assets/img/components/map-pin/apps/overflow-text.svg",
    alt: "Map pin text truncating after two characters.",
    width: "200"
} %}

---

## Interactive states

{% contentLayout %}
  {% contentItem %}
    <h3>Default</h3>
    {% contentPageImage {
        src:"../../../assets/img/components/map-pin/apps/interactive-states-default.svg",
        alt: "Map pin in its default interactive state.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Active</h3>
    {% contentPageImage {
        src:"../../../assets/img/components/map-pin/apps/interactive-states-active.svg",
        alt: "Map pin in its active interactive state.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Focus</h3>
    {% contentPageImage {
        src:"../../../assets/img/components/map-pin/apps/interactive-states-focus.svg",
        alt: "Map pin in its focus interactive state, showing a focus ring.",
        width: "200"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Examples

### LTR examples

Here are some examples of map pin in left-to-right context.

{% contentPageImage {
    src:"../../../assets/img/components/map-pin/apps/example-ltr.svg",
    alt: "Example of the map pin component used in a left-to-right layout.",
    width: "200"
} %}

### RTL examples

{% notification {
  type: "information",
  message: "The Map pin component doesn't change in RTL."
} %}
