---
eleventyNavigation:
    key: Apps
    parent: Tabs
    order: 3
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
    src:"../../../assets/img/components/tabs/apps/anatomy.svg",
    alt: "Annotated diagram of a tabs component showing its main parts: label, indicator, icon and badge.",
    width: "200"
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Label:** Informs the user the type of content contained within the Tab.",
        "**Indicator:** Highlights which Tab is currently selected.",
        "**Icon (Optional):** Non-interactive icon that can be used to visually support the label.",
        "**Badge (Optional):** Non-interactive element that can be used to visually support the label with a numeric value."
    ]
} %}

---

## Variants

### Default

{% contentPageImage {
    src:"../../../assets/img/components/tabs/apps/variants-default.svg",
    alt: "A default tabs component showing three tab items with the first tab selected.",
    width: "200"
} %}

---

## Modifiers

### Colour

By default, the `$interactive-brand` is used for the Tabs, but an optional `$interactive-primary` variant is available for use depending on the use-case.

{% contentPageImage {
    src:"../../../assets/img/components/tabs/apps/modifiers-colour-brand-true.svg",
    alt: "Tabs component using the interactive brand colour variant, with the selected tab indicator shown in brand colour.",
    caption: "Example of tabs with the selected state in brand orange.",
    width: "200"
} %}

{% contentPageImage {
    src:"../../../assets/img/components/tabs/apps/modifiers-colour-brand-false.svg",
    alt: "Tabs component using the interactive primary colour variant, with the selected tab indicator shown in primary colour.",
    caption: "Example of tabs with the selected state in primary alternative.",
    width: "200"
} %}

### Icon

Icons can be used to visually support the Tab's label.

{% contentPageImage {
    src:"../../../assets/img/components/tabs/apps/modifiers-icon.svg",
    alt: "Tabs component with icons displayed alongside each tab label.",
    width: "200"
} %}

### Badge

Numbered badges can be used to display a numeric value or count associated with the Tab’s label. A badge shouldn’t be used in conjunction with an icon on a tab.

{% contentPageImage {
    src:"../../../assets/img/components/tabs/apps/modifiers-badge.svg",
    alt: "Tabs component with a numbered badge displayed alongside each tab label.",
    width: "200"
} %}

---

## Content

### Labels

- Use short tab labels that are clear and specific. Labels should be one to two words, as these are easier to scan.
- Text labels should clearly communicate the view users will see and the content contained in the view.
- Use sentence case.
- Label will not truncate.

{% contentPageImage {
    src:"../../../assets/img/components/tabs/apps/content-labels.svg",
    alt: "Tabs component with an icon and label text written in sentence case.",
    width: "200"
} %}

---

## Behaviour

### Pre-select

The default view is that one tab is preselected and is usually the first tab. Only one tab can be selected at a time. When a user chooses a new item, the previous tab is automatically deselected. If a user navigates away from a tab, a user should return to the last tab selected.

{% contentPageImage {
    src:"../../../assets/img/components/tabs/apps/behaviour.svg",
    alt: "Edxample of tab component with one tab selected at a time with the others unselected.",
    width: "200"
} %}

### Alignment

The label is centre-aligned and a tab group takes the full screen width (considering the container’s additional horizontal padding).

Each tab holds the same width which is determined by the width of the widest tab.

{% contentPageImage {
    src:"../../../assets/img/components/tabs/apps/behaviour-alignment.svg",
    alt: "Edxample of tab component centre-aligned in a mobile screen.",
    width: "200"
} %}

---

## Overflow

### Scrolling

When the number of Tabs exceeds the available horizontal container, the Tabs become scrollable — this functionality is available across both wide and narrow screen sizes.

{% contentPageImage {
    src:"../../../assets/img/components/tabs/apps/overflow-scrolling-start.svg",
    alt: "Tabs component with the scroll position at the start.",
    caption: "Tabs component with the scroll position at the start.",
    width: "200"
} %}

{% contentPageImage {
    src:"../../../assets/img/components/tabs/apps/overflow-scrolling-middle.svg",
    alt: "Tabs component with the scroll position in the middle.",
    caption: "Tabs component with the scroll position at the start.",
    width: "200"
} %}

---

## States

The Tabs allows for two states: unselected and selected.

{% contentLayout %}
  {% contentItem %}
    <h3>Selected</h3>
    {% contentPageImage {
        src:"../../../assets/img/components/tabs/apps/states-selected.svg",
        alt: "Tabs component showing selected state.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Unselected</h3>
    {% contentPageImage {
        src:"../../../assets/img/components/tabs/apps/states-unselected.svg",
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
        src:"../../../assets/img/components/tabs/apps/interactive-states-default.svg",
        alt: "A tab item in its default interactive state.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Active</h3>
    {% contentPageImage {
        src:"../../../assets/img/components/tabs/apps/interactive-states-active.svg",
        alt: "A tab item in its active interactive state.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Disabled</h3>
    {% contentPageImage {
        src:"../../../assets/img/components/tabs/apps/interactive-states-disabled.svg",
        alt: "A tab item in its disabled interactive state.",
        width: "200"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## LTR examples

Here are some examples of Tabs in LTR context.

{% contentPageImage {
    src:"../../../assets/img/components/tabs/apps/example-ltr-1.svg",
    alt: "Example of the tabs component used in a left-to-right layout, showing a real-world use case.",
    width: "200"
} %}

{% contentPageImage {
    src:"../../../assets/img/components/tabs/apps/example-ltr-2.svg",
    alt: "A second example of the tabs component used in a left-to-right layout, showing an alternative use case.",
    width: "200"
} %}

---

## RTL examples

Here are some examples of Tabs in RTL context.

{% contentPageImage {
    src:"../../../assets/img/components/tabs/apps/example-rtl-1.svg",
    alt: "Example of the tabs component displayed in a right-to-left layout.",
    width: "200"
} %}

{% contentPageImage {
    src:"../../../assets/img/components/tabs/apps/example-rtl-2.svg",
    alt: "A second example of the tabs component displayed in a right-to-left layout.",
    width: "200"
} %}
