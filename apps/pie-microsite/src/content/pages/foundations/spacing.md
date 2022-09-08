---
eleventyNavigation:
    key: Spacing
    parent: Foundations
title: Spacing
description: Space is the horizontal and vertical distance between or around different design elements.
---

## Types of spacing

There are several types of spacing we can use to place elements within layouts and components. Although you’re most likely going to use them all when designing your products, it’s important to know what types of spacing are commonly used.

### Padding

Padding is the distance between elements within a component, which it can be applied vertically and horizontally.


{% contentPageImage { 
    src:"../../../../assets/img/foundations/spacing/spacing-01.svg", 
    width: "97px",
    caption: "The example above shows a 24px Left and Right Padding, which is part of our Button component." 
} %}

### Margins

Margins are the distance between components, which can be applied vertically and horizontally. They define the relationship between components, layout and viewport size.

{% contentPageImage { 
    src:"../../../../assets/img/foundations/spacing/margin-01.svg", 
    width: "224px", 
    caption: "The example above shows a 16px margin between a Secondary and Primary button." 
} %}

### Dimensions

Dimensions describe the overall width and height of a component or design element. While vertical dimensions should always stick to our spacing scale, horizontal dimensions won’t be specified because they are responsive to the viewport’s width.

{% contentPageImage { 
    src:"../../../../assets/img/foundations/spacing/dimensions-01.svg", 
    width: "360px", 
    caption: "The example above shows how a Primary Button’s width spans across 328px to fit the width of the X-Small Layout." 
} %}

--- 

## Element first approach

Our main approach for designing components can be categorised as ‘element first’. This means that the sizing of components and design elements takes priority when matched to our predetermined spatial system. We follow this approach to keep a consistent rythm within the overall composition and layout of our designs.

For instance, an element might be set to always have a height of 48px, regardless of the content that can be found inside it. This means that if the component has different variations (like different typographic sizes) it will always preserve a 48px height, and it’s the internal padding that’s going to change to accommodate the difference in height.

{% contentPageImage { 
    src:"../../../../assets/img/foundations/spacing/approach-01.svg", 
    width: "246px", 
    caption: "The Top and Bottom Padding for this button are set to 14px, which isn’t part of our spacing scale. However, this is done to preserve the overall height of the button (56px), which is a measure within our spacing scale." 
} %}

---

## Default and Compact spacing

We have a variety of different products within our pillars, and all of them have different spacing needs based on the nature of their target users. For instance, customer-facing products might need to use more generous space around components to incentivise white space, while operational products will want to use tighter measures to economise the use of space.

This is why we have defined two different spacing concepts to refer to these spacing needs:

### Default

Default spacing uses bigger space measures for its components’ paddings, margins and dimensions. This helps improve the readability and visibility of all the components and information within the layout. The use of breathing space around components is encouraged to help achieve this.

{% contentPageImage { 
    src:"../../../../assets/img/foundations/spacing/spacing-default.svg", 
    width: "408px", 
    caption: "The example above shows a One-Line List component which uses its default spacing variant." 
} %}

### Compact

Compact spacing uses smaller space measures for its components’ paddings, margins and dimensions. This helps economise the space used in the screen and allows us to include more contents and information within the viewport.

{% contentPageImage { 
    src:"../../../../assets/img/foundations/spacing/spacing-compact.svg", 
    width: "408px", 
    caption: "The example above shows a One-Line List component which uses its compact spacing variant" 
} %}

{% notification { 
    type: "information",
    title: "About Default and Compact",
    message: "While this is something you should keep in mind, it shouldn’t be taken as a strict rule and can be assessed on a case by case basis.",
    class: "c-contentPage-notification" 
} %}

---

## Examples of use

Here are some examples of use which might help guide your decisions when applying spacing within your designs. These are just suggestions, not strict rules you must follow. If you are unsure about what spacing works best between the components of your design you can use the following examples as a reference point.


### Layout spacing

Horizontal spacing within design layouts should always try to adhere to our predefined Grids.  As we follow an element first approach, try to expand your components to fill up the necessary columns within the Grid.

Regarding vertical spacing, make sure to use spacing as a way to create meaningful blocks of content, using bigger and smaller spacing measures to improve the visual hierarchy of your layout and to keep a consisten vertical rythm within the page.

{% contentPageImage { 
    src:"../../../../assets/img/foundations/spacing/layout-spacing.svg", 
    width: "904.01px", 
    caption: "In the example above you can see how most of the vertical spacing (pink guides) has been defined using our spacing scale, while horizontal spacing is mostly defined by the Layout Grid (purple guides – make sure your Grids are turned on to see these)." 
} %}


### Component spacing

A good rule of thumb for designing components is to try using the same spacing value for all your outer paddings, as this will make the overall component look more balanced. Also, try to use alignment centre alignment for design elements that are smaller than the area they occupy (e.g. the Toggle Button).

{% contentPageImage { 
    src:"../../../../assets/img/foundations/spacing/component-spacing.svg", 
    width: "424px"
} %}

### Typography spacing

When using spacing between typographic elements, try to ensure legibility is prioritised. You can also use spacing to dictate the visual hierarchy of your text, using tigther spaces to create blocks of content and bigger spaces to separate unrelated bits of content.

{% contentPageImage { 
    src:"../../../../assets/img/foundations/spacing/typography-spacing.svg", 
    width: "424px" 
} %}
