---
eleventyNavigation:
    key: Overview
    parent: Elevation
    order: 1
permalink: foundations/elevation/
---

## Why do we use elevation?

We use elevation to create a visual distinction between components and visual elements with different spatial relationships.

Each elevation level assigns a three-dimensional appearance to an object, using shadows and blurs to achieve it. The levels of elevation we have created help us differentiate the elevation within the Z-axis at which these components are placed.

{% contentPageImage {
src:"../../../assets/img/foundations/elevation/squares.svg",
mobileSrc: "../../../assets/img/foundations/elevation/squares_narrow.svg",
width: "280px",
alt: "Visual representation of squares."
} %}

---

## Elevation tokens

Elevation values define the perceived depth of an element by combining shadow position and shadow level, adapted to both light and dark surfaces.

### Shadow position

Our elevation tokens have two shadow positions, they are influenced by two different light sources. This results in two variations of shadows: shadow above the element and shadow below it.

{% notification {
type: "information",
iconName: "info-circle",
message: "For consistency, ensure you choose one shadow direction for the same element throughout the design."
} %}

{% contentPageImage {
src:"../../../assets/img/foundations/elevation/shadow-position.svg",
width: "414px",
caption: "This image illustrates how shadows are cast based on different light sources, showing their position relative to the element."
} %}

### Shadow level

In addition to shadow position, our elevation tokens also account for the intensity of the shadow. The strength of the shadow determines the elevation level, where higher intensity shadows with increasing values indicate a greater elevation and provide a stronger visual emphasis.

{% contentPageImage {
src:"../../../assets/img/foundations/elevation/shadow-level.svg",
width: "324px",
caption: "This image shows the depth created by shadow levels 10 and 20, with level 10 being lighter and level 20 appearing stronger."
} %}

### Default vs Inverse tokens

We offer two sets of elevation tokens: default and inverse.
Use default elevation when the element sits on a background that matches the overall theme, for example, a light background in a light theme, or a dark background in a dark theme. Use inverse elevation when the element sits on a background that contrasts with the theme, for example, a dark background in a light theme or a light background in a dark theme.

{% notification {
  type: "information",
  iconName: "info-circle",
  message: "Figma currently doesn’t support theme swapping for effects or elevation tokens, so designers need to manually adjust elevation styles when working in dark theme."
} %}

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src:"../../../assets/img/foundations/elevation/default-token.svg",
      width: "407px"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      variant: "inverse",
      src:"../../../assets/img/foundations/elevation/inverse-token.svg",
      width: "407px"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

This images show how to apply default and inverse elevation shadows, depending on the background or surface context.

---

## Using elevation in your products

Here are some tips to keep in mind when using our elevation tokens:

### Create a clear hierarchy

If you have multiple design elements that require elevation, using different levels of elevation can effectively define their hierarchy. Assigning different elevation levels to each component or element helps differentiate their importance and function. The most prominent and interactive elements should be placed at higher elevations, making them more visually distinct and ensuring they stand out to users.

{% contentPageImage {
src:"../../../assets/img/foundations/elevation/clear-hierarchy.svg",
width: "674px",
caption: "Visual representation of the difference in hierarchy achieved by using $elevation-below-10 and $elevation-below-20."
} %}

### Distinguish overlapping elements

In designs where components or elements overlap, elevation plays a crucial role in enhancing visibility and focus. By assigning higher elevations to elements that need to be interacted with or emphasised, you can draw attention to those components and ensure users can easily distinguish between different layers of content. 

{% contentPageImage {
src:"../../../assets/img/foundations/elevation/overlapping-elements.svg",
width: "851px",
caption: "Visual representation of an icon button floating over a carousel of cards."
} %}

{% contentPageImage {
src:"../../../assets/img/foundations/elevation/overlapping-elements-floating.svg",
width: "851px",
caption: "Visual representation of a toast floating over the background UI."
} %}


### Visual signals for interaction

Elevation often signals that an element is interactive, such as with cards or buttons. By using elevation to lift interactive components off the page, users can easily recognise them as clickable/tappable, scrollable or draggable elements, improving overall usability and engagement.

{% contentPageImage {
src:"../../../assets/img/foundations/elevation/quick-actions.svg",
width: "528px",
caption: "Visual representation of a set of clickable cards."
} %}

{% contentPageImage {
src:"../../../assets/img/foundations/elevation/scrollable-modal.svg",
width: "600px",
caption: "Visual representation of a shadow being used on the footer indicates the modal is scrollable."
} %}

{% contentPageImage {
src:"../../../assets/img/foundations/elevation/slider.svg",
width: "288px",
caption: "Visual representation of a shadow under the slider knob indicates that it can be dragged."
} %}

### Don’t overdo it

Using elevation consistently but sparingly will help your users understand the hierarchy and interaction patterns for the design elements in your product. Overusing elevations in your designs will only diminish the user’s experience.