---
eleventyNavigation:
    key: Motion
    parent: 'Spinner'
    order: 2
---

## Example
Illustrates the animations that happen in the button component, on hover, active and loading states. You can see an animated example of this component [here](https://drive.google.com/drive/folders/1uz-RLSiNUkjDccpI89puM1cp_whpGobX).


{% contentPageImage {
    src:"../../../assets/img/components/spinner/spinner-motion-example.svg",
    alt: "A cyclical timeline shows eight circles, each progressively filled with orange, indicating a continuous progression.",
    width:680
} %}
 
---

## Loading

The spinner rotates 360 degrees in a clockwise direction on an infinite loop at a speed of 1150ms.

{% notification {
 type: "information",
 message: "For RTL the spinner rotates in an anti-clockwise direction."
} %}

{% contentPageImage {
    src:"../../../assets/img/components/spinner/MotionGraph.svg",
    alt: "A rotation graph over milliseconds is shown with a table detailing a linear transformation that rotates a shape infinitely."
} %}

