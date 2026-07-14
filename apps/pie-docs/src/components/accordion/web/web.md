---
eleventyNavigation:
  key: Web
  parent: Accordion
  order: 2
shouldShowContents: true
---

## Dos and Don'ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use to organise related information.",
            "Use to shorten pages and reduce scrolling when content isn't crucial to read in full."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don't use if the quantity of the content within the Accordion is too large, consider Tabs instead."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src: "../../../assets/img/components/accordion/anatomy.svg",
    alt: "Anatomy of a accordion component showing numbered elements including icon, primary text, secondary text, chevron, divider and slot.",
    width: 593
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Icon (Optional):** Non-interactive icon that can be used to visually support the primary text.",
        "**Primary Text:** Informs the user the type of content contained within the Accordion.",
        "**Secondary Text (Optional):** Provides additional detail if required, aiming to be contained within two lines.",
        "**Chevron:** Indicates whether the Accordion is open or closed.",
        "**Divider (Optional):** Helps visually defining the end of a list item and the beginning of the next one.",
        "**Slot:** Allows for adding content directly into the component."
    ]
} %}

---

## Variants

### Default - Wide/Narrow

{% contentPageImage {
    src: "../../../assets/img/components/accordion/variants-default.svg",
    alt: "Accordion in default state, displayed in wide and narrow settings.",
    width: 898
} %}

### Hover - Wide/Narrow
<!-- TODO: How to set the bright background? -->
{% contentPageImage {
    variant: "secondary",
    src: "../../../assets/img/components/accordion/variants-hover.svg",
    alt: "Accordion in hover state, displayed in wide and narrow settings.",
    width: 898
} %}

### Active - Wide/Narrow

{% contentPageImage {
    src: "../../../assets/img/components/accordion/variants-active.svg",
    alt: "Accordion in active state, displayed in wide and narrow settings.",
    width: 898
} %}

### Focus - Wide/Narrow

{% contentPageImage {
    src: "../../../assets/img/components/accordion/variants-focus.svg",
    alt: "Accordion in focus state, displayed in wide and narrow settings.",
    width: 902
} %}

---

## Modifiers

### Icons

When incorporating an icon into an Accordion, it is essential to ensure that the icon clearly connects to the content of the Accordion, helping reinforce the Accordion's purpose.

{% usage {
    do: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/accordion/modifiers-icons-do.svg",
            width: "362px",
            alt: "Accordion with a meaningful icon that relates with the content."
        }]
    },
    dont: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/accordion/modifiers-icons-dont.svg",
            width: "362px",
            alt: "Accordion with improper generic icon."
        }]
    }
} %}

#### Leading

{% contentPageImage {
    src: "../../../assets/img/components/accordion/modifiers-leading.svg",
    alt: "Accordion with a leading icon.",
    width: 902
} %}

### Secondary text

Used for Accordions that require an additional secondary line of information to provide clarity to the user.

{% contentPageImage {
    src: "../../../assets/img/components/accordion/modifiers-secondary-text.svg",
    alt: "Accordion with a secondary line of information.",
    width: 902
} %}

### Divider

By default the divider is used, with the exception of the last Accordion in a stack to signify the end of the section.

{% contentPageImage {
    src: "../../../assets/img/components/accordion/modifiers-divider.svg",
    alt: "Accordions with dividers between each instance.",
    width: 902
} %}

### Expanded content

The accordion component includes a content slot in its expanded variant, allowing designers to insert their own content directly into the component. For guidance on working with slots in Figma, please refer to the Figma Slot Guidance.

{% contentPageImage {
    src: "../../../assets/img/components/accordion/modifiers-expanded-content.svg",
    alt: "Accordion in expanded state with a content slot.",
    width: 902
} %}

### Emphasis on primary text

#### Default/Wide
Used when the category title needs to be prominent on the page.

{% contentPageImage {
    src: "../../../assets/img/components/accordion/modifiers-emphasis-wide-prominent.svg",
    alt: "Accordion with wide default (prominent) emphasis.",
    width: 902
} %}

#### Low emphasis/Wide
Used when the category title doesn't need to be highly prominent.

{% contentPageImage {
    src: "../../../assets/img/components/accordion/modifiers-emphasis-wide-low.svg",
    alt: "Accordion with wide low emphasis.",
    width: 902
} %}

#### Default/Narrow
Used in areas with limited space or mobile screens when the category title needs to be prominent on the page.

{% contentPageImage {
    src: "../../../assets/img/components/accordion/modifiers-emphasis-narrow-prominent.svg",
    alt: "Accordion with narrow default (prominent) emphasis.",
    width: 902
} %}

#### Low emphasis/Narrow
Used in areas with limited space or mobile screens when the category title doesn't need to be highly prominent.

{% contentPageImage {
    src: "../../../assets/img/components/accordion/modifiers-emphasis-narrow-low.svg",
    alt: "Accordion with narrow low emphasis.",
    width: 902
} %}

---

## Behaviours

### States

The Accordion has states, collapsed and expanded. The chevron pinned right of the Accordion indicates which state it is in. The chevron points down to indicate collapsed, and up to indicate expanded.

Accordions, by default are collapsed with all content panels closed. Starting in the collapsed state allows the user a high level overview of the available information.

{% contentLayout %}
  {% contentItem %}
    <h3>Collapsed</h3>
    {% contentPageImage {
        src: "../../../assets/img/components/accordion/behaviours-states-collapsed.svg",
        alt: "Accordion in collapsed state.",
        width: 902
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Expanded</h3>
    {% contentPageImage {
        src: "../../../assets/img/components/accordion/behaviours-states-expanded.svg",
        alt: "Accordion in expanded state.",
        width: 902
    } %}
  {% endcontentItem %}
{% endcontentLayout %}


### Multiple accordions open at once

Accordions expand independently allowing multiple Accordions to be open at once.

{% contentPageImage {
    src: "../../../assets/img/components/accordion/behaviours-states-multiple.svg",
    alt: "Multiple accordions open at once.",
    width: 902
} %}

### Overflow

When the content is too long to fit in one line, both the Primary and Secondary text should wrap into a new line.

{% contentPageImage {
    src: "../../../assets/img/components/accordion/modifiers-overflow.svg",
    alt: "Accordion with overflowing primary and secondary text wrapping to a new line.",
    width: 902
} %}

## Interactions

The whole container is clickable to expand or collapse the Accordion.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
        src: "../../../assets/img/components/accordion/interactions-example-1.svg",
        alt: "Accordion interaction example showing the clickable container area.",
        width: 902
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
        src: "../../../assets/img/components/accordion/interactions-example-2.svg",
        alt: "Accordion interaction example showing expanded content.",
        width: 902
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Overrides

### Padding

The accordion component supports padding overrides on both the trigger (the top bar containing the title and toggle icon) and the content slot (the expanded area below). Both can be adjusted independently to suit layout requirements.

{% contentPageImage {
    src: "../../../assets/img/components/accordion/overrides-padding.svg",
    alt: "Accordion with padding overrides applied.",
    width: 902
} %}

### Corner radius

The corner radius of the accordion can be overridden to align with the surrounding layout or surface it is placed on.

{% contentPageImage {
    src: "../../../assets/img/components/accordion/overrides-corner-radius.svg",
    alt: "Accordion with corner radius override applied.",
    width: 902
} %}

## Content

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Keep primary text concise and focused, ensuring it remains clear and descriptive enough to communicate the intended message.",
            "Use sentence-style capitalisation (only the first word in a phrase and any proper nouns capitalised)."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don't use lengthy or complex text for primary text; keep labels concise and scannable.",
            "Don't use title case or all caps capitalisation for labels or descriptions."
        ]
    }
} %}

---

## Interactive States

Outlines the atomic level interactive elements for the component.

{% contentPageImage {
    src: "../../../assets/img/components/accordion/interactions-states-table.svg",
    alt: "Table outlining the interactive states of the accordion component.",
    width: 902
} %}

---

## Examples

### LTR Examples

Here are some examples of Accordions in LTR context:

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
        src: "../../../assets/img/components/accordion/internationalization-ltr-1.svg",
        alt: "Accordion in LTR context, first example.",
        width: 902
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
        src: "../../../assets/img/components/accordion/internationalization-ltr-2.svg",
        alt: "Accordion in LTR context, second example.",
        width: 902
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### RTL Examples

Here are some examples of Accordions in RTL context:

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
        src: "../../../assets/img/components/accordion/internationalization-rtl-1.svg",
        alt: "Accordion in RTL context, first example.",
        width: 902
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
        src: "../../../assets/img/components/accordion/internationalization-rtl-2.svg",
        alt: "Accordion in RTL context, second example.",
        width: 902
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

