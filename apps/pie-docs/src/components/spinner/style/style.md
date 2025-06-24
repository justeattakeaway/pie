---
eleventyNavigation:
    key: Style
    parent: 'Spinner'
    order: 2

eleventyComputed:
    brand: "{% include './brand.json'
    %}"
    secondary: "{% include './secondary.json'
    %}"
    secondaryDark: "{% include './secondary-dark.json'
    %}"
    inverse: "{% include './inverse.json'
    %}"
    inverseLight: "{% include './inverse-light.json'
    %}"
shouldShowContents: true
---

## Colour tokens
### Brand

{% componentDetailsTable {
tableData: brand
} %}

### Secondary

{% componentDetailsTable {
tableData: secondary
} %}

### Secondary dark

{% componentDetailsTable {
tableData: secondaryDark
} %}

### Inverse

{% componentDetailsTable {
tableData: inverse
} %}

### Inverse light

{% componentDetailsTable {
tableData: inverseLight
} %}


{% notification {
 type: "information",
 message: "Check out the [colour](https://pie.design/foundations/colour/) documentation."
} %}