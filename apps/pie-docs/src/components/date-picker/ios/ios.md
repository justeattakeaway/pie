---
eleventyNavigation:
    key: iOS
    parent: Date Picker
    order: 4
---

## Dos and Don'ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use when the input requires the user to select a specific date.",
            "Date picker should be triggered by or used in conjunction with another component, such as a text input or chip."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don't use a date picker if the user already knows or is very familiar with the date, e.g. date of birth."
        ]
    }
} %}

---

## Anatomy

### Graphical

{% contentPageImage {
    src: "../../../assets/img/components/date-picker/ios/anatomy-graphical.svg",
    alt: "An annotated diagram of the graphical date picker with numbered callouts identifying the container, current date, icon button, and content area.",
    width: "200"
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Container:** Background container that organises the information.",
        "**Current date:** Informs the user of the action.",
        "**Icon button:** Allows the user to move forwards or backwards through a set of content.",
        "**Content:** Displays selectable dates, months and years."
    ]
} %}

### Wheel

{% contentPageImage {
    src: "../../../assets/img/components/date-picker/ios/anatomy-wheel.svg",
    alt: "An annotated diagram of the wheel date picker with numbered callouts identifying the bottom sheet, title, content area, and confirm button.",
    width: "200"
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Bottom sheet:** Modal that organises and contains the information.",
        "**Title:** Header used to add contextual information.",
        "**Content:** Displays selectable dates, months and years.",
        "**Button:** Allows the user to confirm their selection."
    ]
} %}

---

## Variants

### Graphical

Use when users need to see a range of dates, days of the week and availability at a glance.

{% contentPageImage {
    src: "../../../assets/img/components/date-picker/ios/variants-graphical.svg",
    alt: "A graphical date picker showing a calendar grid with selectable dates, days of the week, and navigation controls.",
    width: "200"
} %}

### Wheel

Use for quick date selection when users know the exact date they need to select.

{% contentPageImage {
    src: "../../../assets/img/components/date-picker/ios/variants-wheel.svg",
    alt: "A wheel date picker displayed in a bottom sheet with scrollable columns for day, month, and year selection.",
    width: "200"
} %}

---

## Modifiers

### Week

The structure of the content can be customised based on the amount of weeks needed to display for the month.

{% contentLayout %}
  {% contentItem %}
  <h4>5 week view</h4>
    {% contentPageImage {
        src: "../../../assets/img/components/date-picker/ios/modifiers-5-week.svg",
        alt: "A graphical date picker displaying a month that spans five weeks.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>6 week view</h4>
    {% contentPageImage {
        src: "../../../assets/img/components/date-picker/ios/modifiers-6-week.svg",
        alt: "A graphical date picker displaying a month that spans six weeks.",
        width: "200"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Day

The day nested instance can be customised based on the status.

{% contentLayout %}
  {% contentItem %}
  <h4>Default</h4>
    {% contentPageImage {
        src: "../../../assets/img/components/date-picker/ios/modifiers-day-default.svg",
        alt: "A date picker day cell in its default state.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Today</h4>
    {% contentPageImage {
        src: "../../../assets/img/components/date-picker/ios/modifiers-day-today.svg",
        alt: "A date picker day cell indicating today's date.",
        width: "200"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentLayout %}
  {% contentItem %}
  <h4>Selected</h4>
    {% contentPageImage {
        src: "../../../assets/img/components/date-picker/ios/modifiers-day-selected.svg",
        alt: "A date picker day cell in its selected state.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Today and selected</h4>
    {% contentPageImage {
        src: "../../../assets/img/components/date-picker/ios/modifiers-day-today-selected.svg",
        alt: "A date picker day cell indicating today's date in its selected state.",
        width: "200"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Interactive states

Outlines the atomic level interactive elements for the nested day instance.

### Day selector

The day nested instance can be customised based on the status.

{% contentLayout %}
  {% contentItem %}
  <h4>Default</h4>
    {% contentPageImage {
        src: "../../../assets/img/components/date-picker/ios/interactive-states-default.svg",
        alt: "A date picker day selector in its default interactive state.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Active</h4>
    {% contentPageImage {
        src: "../../../assets/img/components/date-picker/ios/interactive-states-active.svg",
        alt: "A date picker day selector in its active (pressed) interactive state.",
        width: "200"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Examples

### LTR examples

Here are some examples of the components in left-to-right context.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
        src: "../../../assets/img/components/date-picker/ios/examples-ltr-1.svg",
        alt: "A date picker displayed in a left-to-right layout context.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
        src: "../../../assets/img/components/date-picker/ios/examples-ltr-2.svg",
        alt: "A second example of a date picker displayed in a left-to-right layout context.",
        width: "200"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### RTL examples

Here are some examples of the components in right-to-left context.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
        src: "../../../assets/img/components/date-picker/ios/examples-rtl-1.svg",
        alt: "A date picker displayed in a right-to-left layout context.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
        src: "../../../assets/img/components/date-picker/ios/examples-rtl-2.svg",
        alt: "A second example of a date picker displayed in a right-to-left layout context.",
        width: "200"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}
