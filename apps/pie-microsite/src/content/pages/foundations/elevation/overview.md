---
eleventyNavigation:
    key: Overview
    parent: Elevation
    order: 1
---

## Why do we use elevation?

We use elevation to create create a visual distinction between components and visual elements with different spatial relationships.

Each elevation level assigns a three-dimensional appearance to an object, using shadows and blurs to achieve it. The levels of elevation we have created help us differentiate the elevation within the Z-axis at which these components are placed.

{% contentPageImage {
src:"../../../../../assets/img/foundations/elevation/squares.svg",
mobileSrc: "../../../../../assets/img/foundations/elevation/squares_narrow.svg",
width: "280px",
alt: "Visual representation of squares."
} %}

---

## Using elevation in your products

Here are some tips to keep in mind when using our elevation tokens:

### Use different levels of elevation to create hierarchy

If you have multiple design elements that need to use elevation, try assigning more elevation to the component with most importance. This will help differentiate them and indicate a clear hierarchy for the users.

{% contentPageImage {
src:"../../../../../assets/img/foundations/elevation/different-elevation.svg",
mobileSrc: "../../../../../assets/img/foundations/elevation/different-elevation_narrow.svg",
width: "528px",
caption: "Visual representation of the difference in hierarchy achieved by using $elevation-04 and $elevation-01."
} %}

### Use elevation to help distinguish overlapping elements

For components which appear on top of other elements of the design, try using elevation to make them more visible.

{% contentPageImage {
src:"../../../../../assets/img/foundations/elevation/overlapping-elements.svg",
mobileSrc: "../../../../../assets/img/foundations/elevation/overlapping-elements_narrow.svg",
width: "850px",
caption: "Visual representation of an Icon Button floating over a carousel of cards."
} %}

### Don’t overdo it

Using elevation consistently but sparingly will help your users understand the hierarchy and interaction patterns for the design elements in your product. Using too many elevation tokens in your designs will only diminish the user’s experience.