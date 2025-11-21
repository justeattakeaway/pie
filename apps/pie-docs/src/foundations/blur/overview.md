---
eleventyNavigation:
    key: Overview
    parent: Blur
    order: 1
eleventyComputed:
    containerFillBlurTokens: "{% include './container-fill-blur-tokens.json' %}"
permalink: foundations/blur/
---

## Background blur

The background blur is a visual effect used to distort the content behind the UI element where it’s applied. It helps to highlight the element in the foreground, making it stand out and grab the user’s attention.

{% contentPageImage {
    src:"../../../assets/img/foundations/blur/background-blur.svg",
    width: "230px",
    alt: "Visual example of how blur tokens work on an image"
} %}

---

## Blur tokens

{% notification {
  type: "warning",
  message: "Blur tokens shouldn’t be used in Android designs as this effect is not compatible with the operational system."
} %}

{% contentPageImage {
    src:"../../../assets/img/foundations/blur/blur-tokens.svg",
    width: "827px",
    alt: "Visual example of how blur tokens work on an image"
} %}

--- 

## Using blur in your products

Here are some tips to keep in mind when using our blur tokens:

{% notification {
  type: "information",
  message: "Always use the recommended pairing of container fill and blur tokens. "
} %}

### Combine blur with $content-solid tokens

To make sure the content is always legible and accessible use $content-solid tokens on the text and icons.

We don’t recommend using text with opacity as it can comprise accessibility and user experience. Learn more about the options available [here](/foundations/colour).

### Pair container fill and blur tokens

{% componentDetailsTable {
  tableData: containerFillBlurTokens
} %}