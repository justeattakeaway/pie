---
eleventyNavigation:
    key: Overview
    parent: Button
    order: 1
eleventyComputed:
    iconSizes: "{% include './icon-sizes.json' %}"
    sizes: "{% include './sizes.json' %}"
shouldShowContents: true
permalink: components/button/
---

## Overview
The purpose of buttons is to provide a clear and intuitive way for users to interact with the interface and perform various actions. They enhance the user experience by making key functionalities easily accessible and identifiable, helping users navigate and interact with the application or website more efficiently.

Buttons serve a wide range of purposes in user interfaces, such as submitting forms, confirming actions, navigating to different pages or sections, or executing specific functions.

{% contentPageImage {
    src:"../../../assets/img/components/button/overview.svg",
    alt: "A large primary button."
} %}

---

## Dos and Don’ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use buttons when you need to direct the user to an action.",
            "When pairing buttons, use the same sized buttons together.",
            "When multiple buttons are used within the same component or page, ensure that there is a clear hierarchy of actions."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don't mix button sizes when buttons are used together in a pair."
        ]
    }
} %}


---

## Anatomy

{% contentPageImage {
    src:"../../../assets/img/components/button/anatomy.svg",
    alt: "Anatomy of a button.",
    width: 291
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Icon (Optional):**  Leading or trailing that visually supports the label.",
        "**Label:** Informs the user of the action."
    ]
} %}

---

## Variations

### Primary

The primary call-to-action on the page, should be singular and prominent, limited to one per page. Used on crucial moments in the user flow such as a sign up, checkout, user agreement, etc.

{% contentPageImage {
    src:"../../../assets/img/components/button/variation-primary.svg",
    alt: "A primary button",
    width: 97
} %}

### Primary - alternative

The primary call-to-action on the section, should be singular and prominent. It should be reserved for the most critical actions expected from the user, such as "Next," "Save," "Submit," etc.

{% contentPageImage {
    src:"../../../assets/img/components/button/variation-primary-alternative.svg",
    alt: "A primary alternative button",
    width: 97
} %}

### Secondary

Secondary buttons serve as supplementary options for secondary, non-essential actions on a webpage. They can be utilised independently or in conjunction with a primary button.

{% contentPageImage {
    src:"../../../assets/img/components/button/variation-secondary.svg",
    alt: "A secondary button",
    width: 97,
    variant: "secondary"
} %}

### Outline

Outline buttons are designed to provide increased emphasis compared to ghost buttons, owing to their visible stroke. They can be utilised either as standalone buttons or in combination with a primary button.

{% contentPageImage {
    src:"../../../assets/img/components/button/variation-outline.svg",
    alt: "An outline button",
    width: 97
} %}

### Ghost

Ghost buttons are commonly employed for actions that are considered less crucial. They can be used independently or in tandem with a primary button. They are ideal for repetitive actions, such as an edit button on a recurring card.

{% contentPageImage {
    src:"../../../assets/img/components/button/variation-ghost.svg",
    alt: "A ghost button",
    width: 97
} %}

### Destructive

Destructive buttons are used for high impact deletion that can result in permanent or undesirable consequences, limited to one per page.

{% contentPageImage {
    src:"../../../assets/img/components/button/variation-destructive.svg",
    alt: "A destructive button",
    width: 97
} %}

### Destructive ghost

Destructive buttons are used for high impact deletion that can result in permanent or undesirable consequences, limited to one per page.

{% contentPageImage {
    src:"../../../assets/img/components/button/variation-destructive-ghost.svg",
    alt: "A destructive ghost button",
    width: 97
} %}

### Inverse

Inverse buttons are specifically designed to be used on backgrounds with colours or images, and it's recommended to limit their usage to just one per page. They are reserved for the most critical actions, such as "Next," "Save," "Submit," etc.

{% contentPageImage {
    src:"../../../assets/img/components/button/variation-inverse.svg",
    alt: "An inverse button",
    width: 97,
    variant: "inverse"
} %}

### Outline inverse 

Outline inverse buttons are used to signify a secondary action. They can be utilised independently or in conjunction with an inverse button.

{% contentPageImage {
    src:"../../../assets/img/components/button/variation-outline-inverse.svg",
    alt: "An outline inverse button",
    width: 97,
    variant: "inverse"
} %}

### Ghost inverse

Ghost Inverse buttons are intended for utilisation on backgrounds with colours or images, and are usually reserved for actions of lesser significance. They can be used independently or in conjunction with a primary button. Ghost Inverse buttons are ideal for repetitive actions, such as an edit button on a repeating card.

{% contentPageImage {
    src:"../../../assets/img/components/button/variation-ghost-inverse.svg",
    alt: "A ghost inverse button",
    width: 97,
    variant: "inverse"
} %}

---

## Modifiers

### Icons

When incorporating an icon into a Button, it is essential to ensure that the icon clearly conveys the intended action of the Button. The icon should be directly related to the action the user is taking, helping to reinforce the Button's purpose. Additionally, the colour of the icon must match the colour of the text label within the Button to maintain consistency.

{% usage {
    do: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/button/modifier-icons-do.svg",
            width: "234px",
            alt: "A button with a search icon and a label that says Find a restaurant."
        }]
    },
    dont: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/button/modifier-icons-dont.svg",
            width: "234px",
            alt: "A button with a eye icon and a label that says Find a restaurant."
        }]
    }
} %}

#### Leading

{% contentPageImage {
    src:"../../../assets/img/components/button/modifier-icons-leading.svg",
    alt: "A button with leading icon.",
    width: 129
} %}

#### Trailing

{% contentPageImage {
    src:"../../../assets/img/components/button/modifier-icons-trailing.svg",
    alt: "A button with trailing icon",
    width: 129
} %}

#### Icon sizes

Icons have different size depending on the size of the button.

{% componentDetailsTable {
  tableData: iconSizes
} %}

### Width

#### Fixed

Container width is fixed to fit the Button’s label that retains 24px left and right padding.

{% contentPageImage {
    src:"../../../assets/img/components/button/modifier-width-fixed.svg",
    alt: "A button with fixed width.",
    width: 97
} %}

#### Fluid

Left and right padding is automated depending on the fluid width of the container.

{% contentPageImage {
    src:"../../../assets/img/components/button/modifier-width-fluid.svg",
    alt: "A button with fluid width.",
    width: 320
} %}

---

## Sizes

Outlines the Button sizes that are available, and where they should be used across our products.

All button sizes are available in full width.

{% componentDetailsTable {
  tableData: sizes
} %}

### Responsive sizes

Button sizes can adapt to different screen widths, like wide and narrow views, but there are some restrictions. When buttons resize, they can only transition by one size category, such as going from Large to Medium. Additionally, they can only grow larger when transitioning to wider viewports, not the other way around.

---

## Behaviours

### Buttons that act as links

This is available when a button needs to be used as a navigational element to direct users to a new page or location.

Use these with caution - dictation software users may not be able to properly identify these actions, since they are semantically links, even though they may look like buttons.

---

## Content

### Labels

Button labels should clearly indicate the action of the Button and describe what will occur once the user clicks the Button. Use active verbs, such as Add or Delete. For sets of buttons, use specific labels, such as Save or Discard, instead of using OK and Cancel. This is particularly helpful when the user is confirming an action.

Use sentence-style capitalisation (only the first world in a phrase and any proper nouns capitalised).

---

## Overflow

### Singular word overflow

When a single word extends beyond the available horizontal space, the word truncates and an ellipsis is displayed.

{% contentPageImage {
    src:"../../../assets/img/components/button/overflow-singular.svg",
    alt: "A button with long text that stays on a single line.",
    width: 375
} %}

### Multiple words overflow

When a group of words extends beyond the available horizontal space, the text automatically wraps onto a new line, with no maximum height restriction.

{% contentPageImage {
    src:"../../../assets/img/components/button/overflow-multiple.svg",
    alt: "A button with long text that wraps onto two lines.",
    width: 375
} %}

---

## Hierarchy

Buttons should follow a hierarchy of importance with regards to the action that is being committed by the user and how the Buttons are paired together.

### Multiple Button pairing

When pairing Buttons, they should always have a relationship to one another; with the highest hierarchy Button is always positioned on the right / top depending on if the button pair is stacked with a 16px spacing between. Always ensure the same sized Buttons are paired together.

Button pairing options are:

- A high-emphasis Button with a medium / low-emphasis Button that performs a less important action.

- A medium-emphasis Button with a low-emphasis Button that performs a less important action. 

{% contentPageImage {
    src:"../../../assets/img/components/button/hierarchy-multiple-pairing.svg",
    alt: "A pyramid that shows button hierarchy as primary and destructive buttons on top, secondary and inverse buttons in the middle, and the rest of the button variations on the bottom.",
    width: 499
} %}

{% usage {
    do: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/button/hierarchy-multiple-pairing-large-do.svg",
            width: "210px",
            alt: "A primary button paired with an outline button."
        }]
    },
    dont: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/button/hierarchy-multiple-pairing-large-dont.svg",
            width: "210px",
            alt: "A primary button paired with another primary button."
        }]
    }
} %}


{% usage {
    do: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/button/hierarchy-multiple-variants-pairing-do.svg",
            width: "210px",
            alt: "A primary button paired with an outline button."
        }]
    },
    dont: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/button/hierarchy-multiple-variants-pairing-dont.svg",
            width: "210px",
            alt: "A primary button paired with another primary button."
        }]
    }
} %}


{% usage {
    do: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/button/hierarchy-multiple-pairing-small-do.svg",
            width: "158px",
            alt: "A small - productive primary button paired with A small - productive outline button."
        }]
    },
    dont: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/button/hierarchy-multiple-pairing-small-dont.svg",
            width: "158px",
            alt: "A small - productive primary button paired with A small - expressive outline button."
        }]
    }
} %}

---

## Layout

### Alignment

The alignment of Buttons depends on where they appear and whether or not they’re container within another component.

As a general rule, on full-page designs the primary Button is on the left side of the page, as it’s best to have the Button where the user’s attention has been focused all along. Whereas in Modals, the primary Button traditionally sits right aligned. Buttons within components such as Bottom Sheets, Notifications, and Toasts are also right aligned.

In some cases Buttons may span the entire width of the screen or container, examples include Bottom Sheets, Forms, Modals, and Cards

{% notification {
  type: "information",
  message: "When using full width Buttons, change the horizontal resizing of the Label to ‘Fill container’."
} %}

---

## Interactive states

Outlines the atomic level interactive elements for the component.

{% contentLayout %}
  {% contentItem %}
    <h3>Default</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/button/interactive-state-default.svg",
      width: 97,
      alt: "Default state of a button."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Hover</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/button/interactive-state-hover.svg",
      width: 97,
      alt: "A button that is hovered."
    } %}
  {% endcontentItem %}
    {% contentItem %}
    <h3>Active</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/button/interactive-state-active.svg",
      width: 97,
      alt: "A button that is active."
    } %}
  {% endcontentItem %}
    {% contentItem %}
    <h3>Focus</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/button/interactive-state-focus.svg",
      width: 97,
      alt: "A button that is focused."
    } %}
  {% endcontentItem %}
    {% contentItem %}
    <h3>Disabled</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/button/interactive-state-disabled.svg",
      width: 97,
      alt: "A button that is disabled."
    } %}
  {% endcontentItem %}
      {% contentItem %}
    <h3>Loading</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/button/interactive-state-loading.svg",
      width: 97,
      alt: "A button that is loading."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Examples

Outlines the atomic level interactive elements for the component.

### LTR examples

Here are some examples of Buttons in left to right context:

{% contentPageImage {
    src:"../../../assets/img/components/button/example-ltr-button-in-homepage.svg",
    alt: "A left to right example of a primary button within an text input on the home page of JustEatTakeaway website.",
    width: 968
} %}

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/button/example-ltr-button-in-toast.svg",
      width: 300,
      alt: "A left to right example of a ghost inverse button within a toast notification with a dark background."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/button/example-ltr-button-paired-with-popover.svg",
      width: 206,
      alt: "A left to right example of an outline button paired with a popover."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### RTL examples

Here are some examples of Buttons in right to left context:

{% contentPageImage {
    src:"../../../assets/img/components/button/example-rtl-button-in-homepage.svg",
    alt: "A right to left example of a primary button within an text input on the home page of JustEatTakeaway website.",
    width: 968
} %}

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/button/example-rtl-button-in-toast.svg",
      width: 300,
      alt: "A right to left example of a ghost inverse button within a toast notification with a dark background."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/button/example-rtl-button-paired-with-popover.svg",
      width: 206,
      alt: "A right to left example of an outline button paired with a popover."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Resources

{% resourceTable {
    componentName: 'Button'
} %}
