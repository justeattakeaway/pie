---
eleventyNavigation:
    key: Overview
    parent: Switch
    order: 1
shouldShowContents: true
---

## Overview
The purpose of switches is to offer users a quick and straightforward method to switch between two distinct options or states. Switches enhance the user experience by providing a clear and efficient way to make selections or enable/disable functionality.

Switches are commonly used to enable or disable settings, switch between modes or perform binary actions in user interfaces. When users interact with switches, they change their appearance to indicate the current state or selection.

{% contentPageImage {
    src:"../../../assets/img/components/switch/overview.svg",
    alt: "A switch that is currently in the off position, with a label positioned to the left."
} %}

---

## Dos and Don’ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use switches to trigger actions that have an immediate effect, such as turning dark mode on and off."

        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don’t use a switch to trigger actions that don’t have immediate effect. In that scenario use a checkbox instead."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src:"../../../assets/img/components/switch/anatomy.svg",
    alt: "Anatomy of a switch.",
    width: 85
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Label (Optional):** Maximum of one label. Provides necessary context to a form.",
        "**Handle:** Positioned to the right when the switch is turned on, and to the left when turned off.",
        "**Check icon:** Provides additional feedback when the switch is turned on."
    ]
} %}

---

## Content

### Labels

- Keep labels short so forms are easy to read and scan.
- Use sentence case.

---

## Modifiers

### Labels

Labels can be removed in certain use cases, but is advised against due to accessibility reasons. In instances where there is no label, it is recommended that a ‘hidden label’ is embedded into the code for screen readers to announce.

Switches can have their label placed to the left or the right of the switch.

{% notification {
  type: "information",
  message: "Only one label is allowed to be present."
} %}

{% contentLayout %}
  {% contentItem %}
    <h4>Left</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/switch/modifier-labels-left.svg",
      width: 97,
      alt: "A switch with its label placed to the left."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Right</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/switch/modifier-labels-right.svg",
      width: 94,
      alt: "A switch with its label placed to the right."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## States

The switch has two states available, unselected and selected.

### LTR

{% contentLayout %}
  {% contentItem %}
    <h4>Selected</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/switch/states-ltr-selected.svg",
      width: 97,
      alt: "A selected switch with LTR orientation."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Unselected</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/switch/states-ltr-unselected.svg",
      width: 94,
      alt: "An unselected switch with LTR orientation."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### RTL

{% contentLayout %}
  {% contentItem %}
    <h4>Selected</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/switch/states-rtl-selected.svg",
      width: 97,
      alt: "A selected switch with RTL orientation."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Unselected</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/switch/states-rtl-unselected.svg",
      width: 94,
      alt: "An unselected switch with RTL orientation."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Interactive states

Outlines the atomic level interactive elements for the component.

{% contentLayout %}
  {% contentItem %}
    <h4>Default</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/switch/interactive-states-default.svg",
      width: 114,
      alt: "Default state of a switch."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Hover</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/switch/interactive-states-hover.svg",
      width: 114,
      alt: "A switch that is hovered."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Active</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/switch/interactive-states-active.svg",
      width: 114,
      alt: "A switch that is active."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Focus</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/switch/interactive-states-focus.svg",
      width: 116,
      alt: "A switch that is focused."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Disabled</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/switch/interactive-states-disabled.svg",
      width: 108,
      alt: "A switch that is disabled."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Examples

Outlines the atomic level interactive elements for the component.

### LTR examples

Here are some examples of switches in left-to-right context:

{% contentLayout %}
  {% contentItem %}
    <h4>Default</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/switch/example-ltr-menu-item.svg",
      width: 428,
      alt: "A left to right example of switch with default state."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Hover</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/switch/example-ltr-item-availability.svg",
      width: 153,
      alt: "A left to right example of switch with hover state."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### RTL examples

Here are some examples of switches in right to left context:

{% contentLayout %}
  {% contentItem %}
    <h4>Default</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/switch/example-rtl-menu-item.svg",
      width: 428,
      alt: "A right to left example of switch with default state."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Hover</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/switch/example-rtl-item-availability.svg",
      width: 153,
      alt: "A right to left example of switch with hover state."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Resources

{% resourceTable {
    rows: [
        {
            resource: resourceTypes.COMPONENT,
            link: "https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=882-3264&mode=design",
            status: statusTypes.AVAILABLE
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: "https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=882-3264&mode=design",
            status: statusTypes.AVAILABLE
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            link: "https://webc.pie.design/?path=/story/switch--default",
            status: statusTypes.ALPHA
        },
        {
            resource: resourceTypes.VUE,
            link: "https://vue.pie.design/?path=/story/components-atoms--toggle-switch-component",
            status: statusTypes.AVAILABLE
        },
        {
            resource: resourceTypes.REACT,
            link: "https://snacks.takeaway.com/portal/components/switch/",
            status: statusTypes.AVAILABLE
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.AVAILABLE
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.AVAILABLE
        },
        {
            resource: resourceTypes.ANDROID_XML,
            status: statusTypes.AVAILABLE
        },
        {
            resource: resourceTypes.ANDROID_JETPACK,
            status: statusTypes.AVAILABLE
        }
    ]
} %}
