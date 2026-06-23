---
eleventyNavigation:
    key: Best practices
    parent: designers-getting-started
    order: 2
---
## Use our Foundation libraries

Make sure you always use the styles defined in our Foundation libraries. This will help ensure you’re aligned with the PIE design system and enhance consistency across our products and files.

Also make sure you’re using the right Foundation library when applying colour, typography, elevation or radius (among others) to your designs. For example, if your file uses the PIE 2.0 Light Theme, make sure you are pulling the styles from our PIE 2.0 Foundations – Light.

{% contentPageImage {
src: "../../../assets/img/designers/getting-started/best-practices/token-selection.svg",
mobileSrc: "../../../assets/img/designers/getting-started/best-practices/token-selection_narrow.svg",
width: "650px",
caption: "The image above shows that the colour token selected for the Notification component is pulled from the PIE 2.0 Foundations – Light library"
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

### What is Figma slot?

Figma slot is a feature in Figma that enables more flexible component usage by allowing designers to add, edit, and organise content within predefined areas of a component.

---> image placeholder

### Do's and don'ts

**Do**
- Use slots when flexibility and reusability are priorities.
- Use slots when a component needs to support varying content.
- Use slots when you want to reduce the number of variants.

**Don't**

- Don't use slots when the content within the component or UI element should be fixed.

### How to use components with a Figma slot?

**Do**

- Apply spacing and padding to maintain visual balance.
- Use resizing options (Hug contents, Fixed width, Fill container) in auto layout to organise the content.

**Don't**

- Don't detach the components to use the slots.

#### Step 1

Hover over the slot of a component instance.

---> image placeholder

#### Step 2

Search for the components you want to put into the slot.

OR

Drag and drop the content you prepared (e.g. text, images, or nested components) into the slot area of the component.

---> image placeholder

Some components may include preferred instances where users can use the predefined elements from the design system.

---> image placeholder

#### Step 3

Apply appropriate spacing and padding tokens to maintain visual consistency.

---> image placeholder

#### Step 4

Use Auto Layout and the resizing options for the height and width to organise content for responsiveness.

---> image placeholder

### Create and use slots in your designs

Slots are not limited to design system components, they can also be applied across your own designs wherever flexibility is needed. Instead of creating multiple variants for different content, slots allow you to adapt a single component for multiple use cases.


#### Step 1

Create a component for the element where you want to include a slot.

---> image placeholder

#### Step 2

Select the area where you want the slot to be (with/without predefined content).

---> image placeholder

#### Step 3

Apply slot settings based on your design requirements.

---> image placeholder

By using slots, elements such as bars, labels, or content blocks can be easily repositioned or replaced within a container across different instances without creating additional variants or detaching components.

---> image placeholder
