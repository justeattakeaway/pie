---
eleventyNavigation:
    key: Motion
    parent: Foundations
title: "Let's learn Markdown!"
description: "A fun lesson in how we build microsite pages"
---

[Cheatsheet](https://www.markdownguide.org/basic-syntax/)

# I am an h1

You should _probably_ never use me - we only want one per page (and already have one above! ☝️)

## I am an h2

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel nibh tincidunt, fermentum est a, viverra velit. Quisque posuere tellus nulla, ut pharetra orci venenatis ac. Phasellus blandit velit erat, et sagittis nibh vehicula vitae. Integer accumsan mauris elementum dictum ornare. Aliquam non facilisis dui. Phasellus nisi urna, mattis eget congue eget, tincidunt non tellus. Pellentesque sodales massa et urna iaculis, placerat mollis mauris pretium. Integer ut cursus tellus.

### I am an h3

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel nibh tincidunt, fermentum est a, viverra velit. Quisque posuere tellus nulla, ut pharetra orci venenatis ac. Phasellus blandit velit erat, et sagittis nibh vehicula vitae. Integer accumsan mauris elementum dictum ornare. Aliquam non facilisis dui. Phasellus nisi urna, mattis eget congue eget, tincidunt non tellus. Pellentesque sodales massa et urna iaculis, placerat mollis mauris pretium. Integer ut cursus tellus.

#### I am an h4
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel nibh tincidunt, fermentum est a, viverra velit. Quisque posuere tellus nulla, ut pharetra orci venenatis ac. Phasellus blandit velit erat, et sagittis nibh vehicula vitae. Integer accumsan mauris elementum dictum ornare. Aliquam non facilisis dui. Phasellus nisi urna, mattis eget congue eget, tincidunt non tellus. Pellentesque sodales massa et urna iaculis, placerat mollis mauris pretium. Integer ut cursus tellus.

---

#### Emphasis and style

**I am bold text**

I can make **certain words** bold within regular paragraphs.

*I am italicized text*

I can make *other words* italicized within regular paragraphs too.

> This is a blockquote

> Jamie is such a great teacher of markdown. - All PIE designers, 2023 (probably)
>
> This is a much longer blockquote that spans
>
> multiple lines

~~I am some false statement we want to cross out~~

---

### Lists

1. First numbered item
2. Second numbered item
3. Third numbered item

- First bullet item
- Second bullet item
- Third bullet item

---

I am between to horizontal rules

---

A proper code block:

```
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

---

## Microsite extras

### Captioned/Uncaptioned full-width images:
{% contentPageImage {
src:"../../../../../assets/img/foundations/colour/brand-colours.svg",
caption: "I'm a caption with **markdown added** for *style*"
} %}

### Captioned/Uncaptioned width-defined images:
{% contentPageImage {
src:"../../../../../assets/img/foundations/colour/colour-accessibility.svg",
width: "360px",
caption: "I'm a caption"
} %}

### Captioned/Uncaptioned image with mobile alternative:
{% contentPageImage {
    src:"../../../../../assets/img/foundations/typography/type-scale.svg",
    mobileSrc:"../../../../../assets/img/foundations/typography/type-scale-mobile.svg",
    caption: "I change for mobile."
} %}

---

### Notifications
{% notification {
type: "positive",
title: "Positive Notification",
message: "FYI - this thing has happened"
} %}

{% notification {
type: "information",
title: "Informational Notification",
message: "FYI - this thing has happened"
} %}

{% notification {
type: "warning",
title: "Warning Notification",
message: "FYI - this thing has happened"
} %}

{% notification {
type: "error",
title: "Error Notification",
message: "FYI - this thing has happened"
} %}


{% notification {
type: "positive",
message: "FYI - this thing has happened"
} %}

{% notification {
type: "information",
message: "FYI - this thing has happened"
} %}

{% notification {
type: "warning",
message: "FYI - this thing has happened"
} %}

{% notification {
type: "error",
message: "FYI - this thing has happened"
} %}

---

### Fancy lists

Ordered:

{% list {
    type: listTypes.ordered,
    items: [
        "**Icon area:** (Small (Default size): 14x14px / Large (Default size): 28x28px).",
        "**Bounding box:** (Small (Default size): 16x16px / Large (Default size): 32x32px)."
    ]
} %}

Inline pills:

{% list {
    type: listTypes.pill,
    items: [
        "16px",
        "20px",
        "24px",
        "28px",
        "32px",
        "30px"
    ]
} %}
