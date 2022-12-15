---
eleventyNavigation:
    key: Overview
    parent: Radius
    order: 1
---
## Why do we use radius?

Radius aids us in emphasising and highlighting specific design features in our products. It's easier to scan an interface by following circles and curves rather than abrupt edges, which can disrupt our line of sight.

--- 

## Types of radius

We use two types of radius to give rounded edges to our components.
These include:

### Partial rounding

This group includes all radiuses that maintain the component’s proportions by partially rounding their edges. We use multiples of 4px/pt/dp to set the levels of roundness.

{% contentPageImage {
    src:"../../../../../assets/img/foundations/radius/default-rounding.svg",
    width: "270px",
    caption: "Visual example of how default rounding looks in a Modal component."
} %}

### Full rounding

It allows us to create fully rounded corners keeping the component’s proportions. We use a set size of 50rem, which ensures our components always have fully rounded corners regardless of their size.


{% contentPageImage {
    src:"../../../../../assets/img/foundations/radius/full-rounding.svg",
    width: "97px",
    caption: "Visual example of how full rounding looks in a Button component."
} %}

--- 

## Using radius in your products

Although we set the values available through our alias tokens, you will need to choose when to use rounded corners, and the level of roundness you need for the design elements within your products.

As a general rule, design elements that are in a higher position within the visual hierarchy will use corners that are more rounded (with a larger corner radius) while elements that sit lower in the visual hierarchy will use corners that are less rounded (with a smaller corner radius).

We’ve put together a quick set of tips that will help you choose which rounding values you should use depending on your needs:

### 0px/pt/dp radius

Use 0px/pt/dp (non-rounded) corners for basic or structural design elements. This would apply to any design element or component that spans full width within its container or the page. 

Basic layout structures and containers, such as toolbars or section splitters should use 0dp corners. 

The example above shows two components without any radius applied to their corners.

{% contentPageImage {
    src:"../../../../../assets/img/foundations/radius/no-radius.svg",
    width: "800px",
    caption: "The example above shows two components without any radius applied to their corners."
} %}

### Partial rounding

Partial rounding units are the most commonly used measures for our design elements. The JET brand includes a lot of rounded shapes throughout its communications, and we ensure the continuity of this visual style by using default rounding within our digital components and design elements.


{% contentPageImage {
    src:"../../../../../assets/img/foundations/radius/default-rounding-components.svg",
    width: "535.5px",
    caption: "The example above shows three cards with default rounding around their corners."
} %}

### Full rounding

Full rounding should be used sparingly, trying to only assign it to elements that sit in a higher position within the visual hierarchy (like Buttons, Chips and FABs). Using full rounding strategically allows us to draw the user’s attention to these design elements, maintaining their position as the highest priority elements in the visual hierarchy.


{% contentPageImage {
    src:"../../../../../assets/img/foundations/radius/full-rounding-components.svg",
    width: "396px",
    caption: "The example above shows some components which use full rounding as part of their design."
} %}
