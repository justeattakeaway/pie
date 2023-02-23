---
eleventyNavigation:
    key: Overview
    parent: Design Tokens
    order: 1
---

## What are Design Tokens?

Design tokens are the visual design atoms of the design system — specifically, they are named entities that store interface design attributes.

We use them in place of hard-coded values (such as HEX values for Colour, or pixel values for Spacing) in order to maintain a scalable and consistent visual system for UI development.

Our tokens consist of two key elements:

- A **token name**, such as $color-orange-30
- **Associated values,** such as #FF8000

{% contentPageImage {
    src: "../../../assets/img/foundations/design-tokens/overview/what-are-tokens.svg",
    width: "416px",
    caption: "Example of some of the Alias Tokens that are used to build our Button component."
} %}

The difference between Design Tokens and other design variables lies in the fact that they provide an additional abstract layer which ensures they are platform-agnostic.

The naming conventions given to these layers create a common language for design properties (colour, spacing, elevation…) that can be used within all platforms and implementation frameworks.

---

## Types of Design Tokens

There are two types of Design Tokens which make up the PIE design language.

### Global Tokens

Global tokens are the primitive values in PIE’s design. They are the base-level tokens we use to attribute a token value to Alias Tokens.

These tokens are both context-agnostic (meaning the name should not reflect any use case context) and value-descriptive (meaning the name should reflect the value of that token).

{% contentPageImage {
    src: "../../../assets/img/foundations/design-tokens/overview/global.svg",
    width: "173px",
    caption: "The example above shows the HEX value assigned to the $color-orange-30 Global Token."
} %}

**Global Tokens’ key concepts:**
- They represent the building blocks of our foundations.
- Their naming should be value-specific.
- Their naming shouldn’t be context-specific.
- Their names should be the same across brands and themes.
- When possible, they should contain only one value.


### Alias Tokens

These are our second level of tokens. They are related to a particular use case that helps express the token’s intended purpose and provide context.

These should be singular in their intended purpose, meaning they should relate only to one use case (for example, $content-negative means it can only be used for negative bits of content in our products, such as error messages in text fields).


{% contentPageImage {
    src:"../../../assets/img/foundations/design-tokens/overview/alias.svg",
    width: "186px",
    caption: "The example above shows $color-orange-30 being assigned as the Global Token used for the $brand-support-01 Alias Token."
} %}

**Alias Tokens’ key concepts:**
- They hold design decisions.
- They can be made up of one or many Global Tokens.
- Their naming should be descriptive or semantic.
- Their names should be the same across brands and themes.
- They minimise future manual maintenance for products.
- They allow easy, scalable theming.

---

## Why are Design Tokens important?

Tokens enable our design system to have a single source of truth. They constitute a shared repository where we store and track style choices and changes within our Foundations.

Using Design Tokens in both design and implementation means that style updates will be replicated consistently through all our products.

### Tokens enhance flexibility

As we’ve mentioned before, tokens are used to replace hard-coded values, which allows designers to create more flexible and consistent design solutions. Design Tokens provide a way for designers to keep complete control over the atomic values used within the design system.

When a value needs to be updated, this can be done centrally (in one place, usually our source of truth file), and the new changes will be applied globally (in multiple places, usually in all our products and themes) across multiple platforms.

### Tokens promote consistency

Design tokens allow us to maintain a unified look and feel across our products and themes, helping product teams apply design decisions swiftly and with confidence. They also help keep our Foundations values in sync for every platform.

### Tokens simplify development

By providing a repository of all the Design Tokens and consistently communicating changes within tokens through our [Changelog](https://github.com/justeat/pie-design-tokens/blob/master/design-changelog.md/), developers are able to track and access the latest design attributes within our Foundations, rapidly replicating and implementing design decisions made by product teams.
