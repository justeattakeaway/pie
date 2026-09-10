---
eleventyNavigation:
    key: Web
    parent: Tabs
    order: 2
shouldShowContents: true
---

## Dos and Don'ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use tabs to group related information into different categories, helping to reduce cognitive load.",
            "Use when there are two or more subsections of content."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Tabs should never be used for primary navigation. If tabs become too complex, consider using a standard navigation pattern.",
            "Tabs should not be used if the user is comparing information in two groups, as this would result in the user having to click back and forth to complete a task."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src:"../../../assets/img/components/tabs/anatomy.svg",
    alt: "Annotated diagram of a tabs component showing its main parts: label, indicator, expand icon button, and icon.",
    width: "200"
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Label:** Informs the user the type of content contained within the Tab.",
        "**Indicator:** Highlights which Tab is currently selected.",
        "**Expand (Optional):** Icon button for an expanded view on narrow screens — opens a Bottom Sheet.",
        "**Icon (Optional):** Non-interactive icon that can be used to visually support the label."
    ]
} %}

---

## Variants

### Default

{% contentPageImage {
    src:"../../../assets/img/components/tabs/variants-default.svg",
    alt: "A default tabs component showing three tab items with the first tab selected.",
    width: "200"
} %}

---

## Modifiers

### Colour

By default, the `$interactive-brand` is used for the Tabs, but an optional `$interactive-primary` variant is available for use depending on the use-case.

{% contentPageImage {
    src:"../../../assets/img/components/tabs/modifiers-colour-brand-true.svg",
    alt: "Tabs component using the interactive brand colour variant, with the selected tab indicator shown in brand colour.",
    caption: "Example of tabs with the selected state in brand orange.",
    width: "200"
} %}

{% contentPageImage {
    src:"../../../assets/img/components/tabs/modifiers-colour-brand-false.svg",
    alt: "Tabs component using the interactive primary colour variant, with the selected tab indicator shown in primary colour.",
    caption: "Example of tabs with the selected state in primary alternative.",
    width: "200"
} %}

### Icon

Icons can be used to visually support the Tab's label.

{% contentPageImage {
    src:"../../../assets/img/components/tabs/modifiers-icon.svg",
    alt: "Tabs component with icons displayed alongside each tab label.",
    width: "200"
} %}

---

## Content

### Labels

- Use short tab labels that are clear and specific. Labels should be one to two words, as these are easier to scan.
- Text labels should clearly communicate the view users will see and the content contained in the view.

---

## Behaviour

The default view is that one tab is preselected and is usually the first tab. Only one tab can be selected at a time. When a user chooses a new item, the previous tab is automatically deselected. If a user navigates away from a tab, a user should return to the last tab selected.

{% contentPageImage {
    src:"../../../assets/img/components/tabs/behaviour.svg",
    alt: "Edxample of tab component with one tab selected at a time with the others unselected.",
    width: "200"
} %}

---

## Overflow

### Scrolling

When the number of Tabs exceeds the available horizontal container, the Tabs become scrollable — this functionality is available across both wide and narrow screen sizes.

{% contentPageImage {
    src:"../../../assets/img/components/tabs/overflow-scrolling-start.svg",
    alt: "Tabs component with the scroll position at the start.",
    caption: "Tabs component with the scroll position at the start.",
    width: "200"
} %}

{% contentPageImage {
    src:"../../../assets/img/components/tabs/overflow-scrolling-middle.svg",
    alt: "Tabs component with the scroll position in the middle.",
    caption: "Tabs component with the scroll position at the start.",
    width: "200"
} %}

### Expand

On narrow screen sizes, the option to use an Icon Button to open all Tab options within a Bottom Sheet is available if there are a large quantity of Tabs. The Icon Button is always pinned to the right of the screen. The gradient attached to the Icon Button uses its token from the container background the Tabs are sitting on.

{% contentPageImage {
    src:"../../../assets/img/components/tabs/expand-tab.svg",
    alt: "Tabs component on a narrow screen with an expand icon button pinned to the right, indicating additional tabs are accessible via a Bottom Sheet.",
    caption: "Tabs component on a narrow screen with an expand icon button pinned to the right, indicating additional tabs are accessible via a Bottom Sheet.",
    width: "200"
} %}

{% contentPageImage {
    src:"../../../assets/img/components/tabs/expand-bottom-sheet.svg",
    alt: "A Bottom Sheet opened from the expand icon button, displaying all available tab options as a list.",
    caption: "A Bottom Sheet opened from the expand icon button, displaying all available tab options as a list.",
    width: "200"
} %}

---

## Narrow

On narrow screens, the spacing of the component is updated to maximise space.

{% contentPageImage {
    src:"../../../assets/img/components/tabs/narrow.svg",
    alt: "Tabs component displayed on a narrow screen with adjusted spacing to maximise available space.",
    width: "200"
} %}

---

## States

The Tabs allows for two states: unselected and selected.

{% contentLayout %}
  {% contentItem %}
    <h3>Selected</h3>
    {% contentPageImage {
        src:"../../../assets/img/components/tabs/states-selected.svg",
        alt: "Tabs component showing selected state.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Unselected</h3>
    {% contentPageImage {
        src:"../../../assets/img/components/tabs/states-unselected.svg",
        alt: "Tabs component showing unselected state.",
        width: "200"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Interactive states

Outlines the atomic level interactive elements for the component.

{% contentLayout %}
  {% contentItem %}
    <h3>Default</h3>
    {% contentPageImage {
        src:"../../../assets/img/components/tabs/interactive-states-default.svg",
        alt: "A tab item in its default interactive state.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Hover</h3>
    {% contentPageImage {
        src:"../../../assets/img/components/tabs/interactive-states-hover.svg",
        alt: "A tab item in its hover interactive state.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Active</h3>
    {% contentPageImage {
        src:"../../../assets/img/components/tabs/interactive-states-active.svg",
        alt: "A tab item in its active interactive state.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Focus</h3>
    {% contentPageImage {
        src:"../../../assets/img/components/tabs/interactive-states-focus.svg",
        alt: "A tab item in its focus interactive state, showing a focus ring.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Disabled</h3>
    {% contentPageImage {
        src:"../../../assets/img/components/tabs/interactive-states-disabled.svg",
        alt: "A tab item in its disabled interactive state.",
        width: "200"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## LTR examples

Here are some examples of Tabs in LTR context.

{% contentPageImage {
    src:"../../../assets/img/components/tabs/example-ltr-1.svg",
    alt: "Example of the tabs component used in a left-to-right layout, showing a real-world use case.",
    width: "200"
} %}

{% contentPageImage {
    src:"../../../assets/img/components/tabs/example-ltr-2.svg",
    alt: "A second example of the tabs component used in a left-to-right layout, showing an alternative use case.",
    width: "200"
} %}

---

## RTL examples

Here are some examples of Tabs in RTL context.

{% contentPageImage {
    src:"../../../assets/img/components/tabs/example-rtl-1.svg",
    alt: "Example of the tabs component displayed in a right-to-left layout.",
    width: "200"
} %}

{% contentPageImage {
    src:"../../../assets/img/components/tabs/example-rtl-2.svg",
    alt: "A second example of the tabs component displayed in a right-to-left layout.",
    width: "200"
} %}
