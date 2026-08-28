---
eleventyNavigation:
    key: Web
    parent: Map Pin
    order: 2
---

## Dos and Don'ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Only use within a map component."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src: "../../../assets/img/components/map-pin/web/anatomy.svg",
    alt: "An annotated diagram of a map pin with numbered callouts identifying the optional tooltip and the pin.",
    width: "200"
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Tooltip (Optional):** Additional contextual information.",
        "**Pin:** Marks a point on the map."
    ]
} %}

---

## Variants

{% contentLayout %}
  {% contentItem %}
  <h3>Brand</h3>
  <p>Used for contrast on default maps.</p>
    {% contentPageImage {
        src: "../../../assets/img/components/map-pin/web/variants-brand.svg",
        alt: "A map pin in the brand variant displayed on a default map.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h3>Inverse</h3>
  <p>Used for contrast on satellite maps.</p>
    {% contentPageImage {
        src: "../../../assets/img/components/map-pin/web/variants-inverse.svg",
        alt: "A map pin in the white (inverse) variant displayed on a satellite map.",
        width: "200"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Modifiers

### Tooltip position

Three Tooltip positions are available within the Map Pin component; left, top and right.

#### Left

{% contentPageImage {
    src: "../../../assets/img/components/map-pin/web/modifiers-tooltip-left.svg",
    alt: "A map pin showing the tooltip positioned to the left.",
    width: "200"
} %}

#### Top

{% contentPageImage {
    src: "../../../assets/img/components/map-pin/web/modifiers-tooltip-top.svg",
    alt: "A map pin showing the tooltip positioned to the top.",
    width: "200"
} %}

#### Right

{% contentPageImage {
    src: "../../../assets/img/components/map-pin/web/modifiers-tooltip-right.svg",
    alt: "A map pin showing the tooltip positioned to the right.",
    width: "200"
} %}

---

## Overrides

{% contentPageImage {
    src: "../../../assets/img/components/map-pin/web/overrides.svg",
    alt: "A map pin tooltip displaying bold text within the string.",
    width: "200"
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**String:** The tooltip string can include bold type, when the string is a complete sentence or more."
    ]
} %}

---

## Examples

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
        src: "../../../assets/img/components/map-pin/web/example-default.svg",
        alt: "A map pin used to mark an exact location on a default map.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
        src: "../../../assets/img/components/map-pin/web/example-satellite.svg",
        alt: "A map pin used to mark an exact location on a satellite map.",
        width: "200"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}
