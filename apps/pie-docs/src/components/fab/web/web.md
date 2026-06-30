---
eleventyNavigation:
    key: Web
    parent: FAB
    order: 2
eleventyComputed:
    sizes: "{% include '../overview/sizes.json' %}"
    sizesExtended: "{% include '../overview/sizes-extended.json' %}"
shouldShowContents: true
---

## Dos and Don’ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use recognisable, simple icons that clearly communicate the FAB's action.",
            "Ensure the FAB highlights the most important action on the screen."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Ensure the FAB doesn't block navigation buttons, key content, or interfere with the user's flow.",
            "Use the FAB only when it's necessary and adds real value, avoiding redundancy with other UI elements."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src:"../../../assets/img/components/fab/web/anatomy.svg",
    alt: "Anatomy of a FAB button with icon only and an icon and a label.",
    width: 200
} %}

1. **Container:** The FAB is in an elevated container.
2. **Icon:** Visually supports the label.
3. **Label:** Informs the user of the action.

---

## Variations

### Compact

The compact FAB should be used when an icon can easily communicate the action.

{% contentPageImage {
src:"../../../assets/img/components/fab/web/variations-compact.svg",
alt: "Compact icon only variation of the FAB button.",
width: 200
} %}

### Extended

The extended FAB should be used when a label is required to communicate the action.

{% contentPageImage {
src:"../../../assets/img/components/fab/web/variations-extended.svg",
alt: "Compact extended variation of the FAB button with an icon and text.",
width: 200
} %}

---

## Modifiers

### Primary

The primary call-to-action on the page should be singular and prominent, limited to one per page.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/fab/web/modifiers-primary-icon.svg",
      width: "200",
      alt: "A primary call to action button showing just an icon"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/fab/web/modifiers-primary-icon-label.svg",
      width: "200",
      alt: "A primary call to action button showing an icon and label"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Inverse

Inverse FABs are specifically designed to be used on backgrounds with colours or images.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/fab/web/modifiers-inverse-icon.svg",
      width: "200",
      alt: "An inverse call to action button showing just an icon",
      variant: 'inverse'
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/fab/web/modifiers-inverse-icon-label.svg",
      width: "200",
      alt: "An inverse call to action button showing an icon and label",
      variant: 'inverse'
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Inverse secondary

Inverse secondary FABs are similar to the inverse FABs, but are less prominent due to the icon's use a neutral colour.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/fab/web/modifiers-inverse-secondary-icon.svg",
      width: "200",
      alt: "An inverse secondary call to action button showing just an icon",
      variant: 'inverse'
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/fab/web/modifiers-inverse-secondary-icon-label.svg",
      width: "200",
      alt: "An inverse secondary call to action button showing an icon and label",
      variant: 'inverse'
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Sizes

Outlines the FAB sizes that are available, and where they should be used across our products.

### Compact

{% contentLayout %}
  {% contentItem %}
    <h4>Large</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/fab/web/sizes-compact-large.svg",
      width: "200",
      alt: "A large compact FAB button"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Medium</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/fab/web/sizes-compact-medium.svg",
      width: "200",
      alt: "A medium compact FAB button"
    } %}
{% endcontentItem %}
    {% contentItem %}
    <h4>Small</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/fab/web/sizes-compact-small.svg",
      width: "200",
      alt: "A small compact FAB button"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>XSmall</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/fab/web/sizes-compact-xsmall.svg",
      width: "200",
      alt: "A extra small compact FAB button"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% componentDetailsTable {
  tableData: sizes
} %}

### Extended

{% contentLayout %}
  {% contentItem %}
    <h4>Large</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/fab/web/sizes-extended-large.svg",
      width: "200",
      alt: "A large compact FAB button"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Medium</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/fab/web/sizes-extended-medium.svg",
      width: "200",
      alt: "A medium compact FAB button"
    } %}
  {% endcontentItem %}
    {% contentItem %}
    <h4>Small</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/fab/web/sizes-extended-small.svg",
      width: "200",
      alt: "A small compact FAB button"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>XSmall</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/fab/web/sizes-extended-xsmall.svg",
      width: "200",
      alt: "A extra small compact FAB button"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}


{% componentDetailsTable {
  tableData: sizesExtended
} %}

---

## Content

### Labels

Labels within the FAB should clearly indicate the action and describe what will occur once the user clicks the FAB.

Use sentence-style capitalisation (only the first world in a phrase and any proper nouns capitalised).

### Icons

It is essential to ensure that the icon clearly conveys the intended action of the FAB. The icon should be directly related to the action the user is taking, helping to reinforce the FAB's purpose.

---

## Overflow

### Singular word overflow

When a single word extends beyond the the available horizontal space, the word truncates and an ellipsis is displayed.

{% contentPageImage {
    src:"../../../assets/img/components/fab/web/overflow-single-word.svg",
    alt: "Button with a truncated label",
    width: 300
} %}

### Multiple words overflow

When a group of words extends beyond the available horizontal space, the text automatically wraps onto a new line, with no maximum height restriction.

{% contentPageImage {
src:"../../../assets/img/components/fab/web/overflow-multiple-words.svg",
alt: "Button with a long label running over two lines",
width: 300
} %}

---

## Position

FABs should generally be aligned to the bottom-right of the screen. Due to being elevated and fixed this placement should remain consistent as the scrolling is active.

### LTR position

FABs should typically be positioned in the bottom-right corner and always remain within the main content area of the screen, ensuring they do not overlay navigational elements.

{% contentPageImage {
    src: "../../../assets/img/components/fab/web/position-ltr.svg",
    alt: "Form with a button aligned bottom right with a left-to-right label"
} %}

1. 24 px padding

### RTL position

FABs should typically be positioned in the bottom-left corner and always remain within the main content area of the screen, ensuring they do not overlay navigational elements.

{% contentPageImage {
src:"../../../assets/img/components/fab/web/position-rtl.svg",
alt: "Form with a button aligned bottom left with a right-to-left label"
} %}

1. 24 px padding

---

## Hierarchy

FABs should follow a hierarchy of importance with regards to the action that is being committed by the user and how the FABs are paired together.

{% contentPageImage {
src:"../../../assets/img/components/fab/web/hierarchy.svg",
alt: "Diagram showing hierarchy of FAB buttons",
width: 200
} %}

---

## Behaviours

### Scrolling

FABs remain in place during scrolling. They are persistent on the screen regardless of the actions taken.

{% contentPageImage {
src:"../../../assets/img/components/fab/web/behaviours-scrolling.svg",
alt: "Diagram showing a FAB button in a persistent location on a scrolling screen.",
width: 200
} %}

### Triggered content

A FAB can trigger a variety of different primary actions through modal overlays, launching forms, expanding menus, triggering navigation or child FABs.

The FAB is flexible and can complement a range of components depending on the context and needs of the situation.

---

## Interactive states

Outlines the atomic level interactive elements for the component.

{% contentLayout %}
  {% contentItem %}
    <h4>Default</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/fab/web/interactive-states-default.svg",
      width: "300",
      alt: "FAB buttons showing a default state"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Hover</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/fab/web/interactive-states-hover.svg",
      width: "300",
      alt: "FAB buttons showing a hover state"
    } %}
  {% endcontentItem %}
    {% contentItem %}
    <h4>Active</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/fab/web/interactive-states-active.svg",
      width: "300",
      alt: "FAB buttons showing an active state"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Focus</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/fab/web/interactive-states-focus.svg",
      width: "300",
      alt: "FAB buttons showing a focus state"
    } %}
  {% endcontentItem %}
    {% contentItem %}
    <h4>Loading</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/fab/web/interactive-states-loading.svg",
      width: "300",
      alt: "FAB buttons showing a loading state"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}


---

## Examples

### LTR examples

Here are some examples of the component in left-to-right context.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/fab/web/examples-ltr-example-label.svg",
      width: "200",
      alt: "Left to right FAB button with an icon and text label",
      variant: 'inverse'
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/fab/web/examples-ltr-example-icon.svg",
      width: "200",
      alt: "Left to right FAB button with an icon"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}


### RTL examples

Here is an example of the component in right-to-left context.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/fab/web/examples-rtl-example-label.svg",
      width: "200",
      alt: "Right to left FAB button with an icon and text label",
      variant: 'inverse'
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

The compact variation doesn't change in RTL.