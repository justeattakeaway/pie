---
eleventyNavigation:
    key: Best practices
    parent: designers-getting-started
    order: 2
---

## Stay informed with PIE comms

We share updates and news through a variety of communications and Slack channels. These will keep you up to date with what’s happening in the Design System, where are we heading to and what changes or updates have been made to the system.

You can find a list of the Slack channels we use in our [Support](/support/contact-us) section.

{% contentPageImage {
src: "../../../assets/img/designers/getting-started/best-practices/monthly-slice.svg",
mobileSrc: "../../../assets/img/designers/getting-started/best-practices/monthly-slice_narrow.svg",
width: "280px",
caption: "The image above shows one of our usual PIE communications: The PIE monthly slice."
} %}

---

## Use our Foundation libraries

Make sure you always use the styles defined in our Foundation libraries. This will help ensure you’re aligned with the PIE design system and enhance consistency across our products and files.

{% contentPageImage {
src: "../../../assets/img/designers/getting-started/best-practices/token-selection.svg",
mobileSrc: "../../../assets/img/designers/getting-started/best-practices/token-selection_narrow.svg",
width: "650px"
} %}

---

## Keep your libraries up to date

Make sure you are working using the latest version of our component and Foundation libraries. This will ensure your files use components and styles which are up to date and are consistent with other teams.

When a library has a new update you’ll get a notification on the bottom-right corner of your Figma workspace. Tap on update to bring up the Updates modal, where you will be informed of any changes and updates that have been made to the library.

To check whether you’re working from the latest version of a library, select the Library icon in the Assets panel. Then click on the Updates section to check whether there are any pending updates from our libraries.

{% contentPageImage {
src: "../../../assets/img/designers/getting-started/best-practices/component-updates.svg",
mobileSrc: "../../../assets/img/designers/getting-started/best-practices/component-updates_narrow.svg",
width: "490px",
caption: "Example of a library update notification in Figma."
} %}

---

## Use Auto Layout

To ensure your designs adjust to the layout and are able to scale, try using Auto Layout when designing your product. This will ensure you create designs that grow to fill or shrink to fit your screens, accommodating longer text strings, maintaining alignment with our grid and ensuring the structure of your designs isn’t compromised as they evolve.

{% contentPageImage {
src: "../../../assets/img/designers/getting-started/best-practices/auto-layout.svg",
mobileSrc: "../../../assets/img/designers/getting-started/best-practices/auto-layout_narrow.svg",
width: "240px",
caption: "The image above shows Figma’s Auto layout controls."
} %}

---

## Use Figma slots

Guidance on how to use Figma slots in PIE components and in your own designs.

### What is a Figma slot?

Figma slot is a feature in Figma that enables more flexible component usage by allowing designers to add, edit, and organise content within predefined areas of a component.

{% contentPageImage {
src: "../../../assets/img/designers/getting-started/best-practices/slot-overview.svg",
width: "400px"
} %}

### Do's and don'ts

{% usage {
  do: {
    type: usageTypes.text,
    items: [
      "Use slots when flexibility and reusability are priorities.",
      "Use slots when a component needs to support varying content.",
      "Use slots when you want to reduce the number of variants."
    ]
  },
  dont: {
    type: usageTypes.text,
    items: [
      "Don't use slots when the content within the component or UI element should be fixed."
    ]
  }
} %}

---

### How to use components with a Figma slot?

{% usage {
  do: {
    type: usageTypes.text,
    items: [
      "Apply spacing and padding to maintain visual balance.",
      "Use resizing options (Hug contents, Fixed width, Fill container) in auto layout to organise the content."
    ]
  },
  dont: {
    type: usageTypes.text,
    items: [
      "Don't detach the components to use the slots."
    ]
  }
} %}

#### Step 1

Hover over the slot of a component instance.

{% contentPageImage {
src: "../../../assets/img/designers/getting-started/best-practices/slot-how-to-step-1.svg",
width: "400px"
} %}

#### Step 2

Search for the components you want to put into the slot.

OR

Drag and drop the content you prepared (e.g. text, images, or nested components) into the slot area of the component.

{% contentPageImage {
src: "../../../assets/img/designers/getting-started/best-practices/slot-how-to-step-2-example-1.svg",
width: "500px",
alt: "Example of clicking in the slot to add an element by choosing an option in the instances list.",
caption: "Example of clicking in the slot to add an element by choosing an option in the instances list."
} %}

{% contentPageImage {
src: "../../../assets/img/designers/getting-started/best-practices/slot-how-to-step-2-example-2.svg",
width: "500px",
alt: "Example of dragging and dropping a frame element into the slot area of the component.",
caption: "Example of dragging and dropping a frame element into the slot area of the component."
} %}

Some components may include preferred instances where users can use the predefined elements from the design system.

{% contentPageImage {
src: "../../../assets/img/designers/getting-started/best-practices/slot-how-to-step-2-example-3.svg",
width: "400px",
alt: "Example of a component with preferred instances where users can use the predefined elements from the design system.",
caption: "Example of a component with preferred instances where users can use the predefined elements from the design system."
} %}

#### Step 3

Apply appropriate spacing and padding tokens to maintain visual consistency.

{% contentPageImage {
src: "../../../assets/img/designers/getting-started/best-practices/slot-how-to-step-3.svg",
width: "400px",
alt: "Example of applying appropriate spacing and padding tokens to maintain visual consistency."
} %}

#### Step 4

Use Auto Layout and the resizing options for the height and width to organise content for responsiveness.

{% contentPageImage {
src: "../../../assets/img/designers/getting-started/best-practices/slot-how-to-step-4.svg",
width: "400px",
alt: "Example of using Auto Layout and the resizing options for the height and width to organise content for responsiveness."
} %}

---

### Create and use slots in your designs

Slots are not limited to design system components, they can also be applied across your own designs wherever flexibility is needed. Instead of creating multiple variants for different content, slots allow you to adapt a single component for multiple use cases. To use slot, you need to:

#### Step 1

Create a component for the element where you want to include a slot.

{% contentPageImage {
src: "../../../assets/img/designers/getting-started/best-practices/slot-create-step-1.svg",
width: "600px",
alt: "Example of creating a component for the element where you want to include a slot."
} %}

#### Step 2

Select the area where you want the slot to be (with/without predefined content).

{% contentPageImage {
src: "../../../assets/img/designers/getting-started/best-practices/slot-create-step-2.svg",
width: "600px",
alt: "Example of selecting the area where you want the slot to be (with/without predefined content)."
} %}

#### Step 3

Apply slot settings based on your design requirements.

{% contentPageImage {
src: "../../../assets/img/designers/getting-started/best-practices/slot-create-step-3-example-1.svg",
width: "300px",
alt: "Example of Figma UI for defining slot settings based on your design requirements."
} %}

By using slots, elements such as bars, labels, or content blocks can be easily repositioned or replaced within a container across different instances without creating additional variants or detaching components.

{% contentPageImage {
src: "../../../assets/img/designers/getting-started/best-practices/slot-create-step-3-example-2.svg",
width: "500px",
alt: "Example of using slots to easily reposition or replace elements within a container across different instances without creating additional variants or detaching components."
} %}
