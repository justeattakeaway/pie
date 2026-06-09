---
eleventyNavigation:
  key: Overview
  parent: Gradients
  order: 1
shouldShowContents: true
permalink: foundations/gradients/
---

## Overview

Gradients are a type of style that are made up of two or more global colour tokens that fade from one into another, set at stops between 0-100%. We use primarily linear gradient styles for use in backgrounds, containers and smaller UI elements.

We use gradients to signify and visually communicate ‘special’ content in our products, like messaging, imagery and motion related to our sub-brands, Just Eat+ and the Just Eat AI Assistant. Because of this, please don't use gradients to convey other meanings in product.

{% notification {
    type: "warning",
    message: "We are happy to support new gradients but we ask that this is approached with caution and restraint. Gradients are intended to communicate ‘special’ content in our products and should not be used for every corner of product. Please reach out to the PIE team for support with gradients."
} %}

{% contentPageImage {
src:"../../../assets/img/foundations/gradients/overview.svg",
caption: "Composition made of various PIE gradients.",
alt: "A visual showing three circles and a background made of different PIE gradients."
} %}

---

## Anatomy

A gradient is always made up of at least two colours at defined stops. A stop is the point at which a gradient changes from one colour to the next and are communicated as percentages on a scale of 0-100. Our gradients always have a stop at 0% and 100%.

{% contentPageImage {
src:"../../../assets/img/foundations/gradients/anatomy.svg",
alt: "A scale showing stops between 0% and 100% and highlighting the 0%, 40% and 100% stops.",
width: 230
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**0%:** The first stop used in the gradient, this is always 0%.",
        "**Additional stops (optional):** These can be any additional stops used in the gradient on a scale of 1-99. This can include multiples of the colours used at either 0% or 100% to create different gradient effects.",
        "**100%:** The last stop used in the gradient, this is always 100%."
    ]
} %}

---

## Using gradients in your products

If you’re using gradients that belong to JET AI or JET+ we highly suggest you check out our Core [JET AI documentation](https://www.pie.design/patterns/jet-ai/) and [JET+ documentation](https://www.pie.design/patterns/just-eat-plus/) for how to use these specific gradients for their intended purpose.

{% notification {
    type: "warning",
    message: "Please never manually adjust the direction, stops, colours or opacity of any of our gradient styles. Doing so will detach the gradient from our styles and create an entirely new gradient."
} %}

{% usage {
    do: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/foundations/gradients/style-do.svg",
            width: "256px",
            alt: "A screenshot of our AI gradient style in Figma."
        }]
    },
    dont: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/foundations/gradients/style-dont.svg",
            width: "256px",
            alt: "A screenshot of our AI gradient detached from its style in Figma."
        }]
    }
} %}

### Choosing the right gradient

As a rule we use stronger gradients for small UI elements and borders in components, and more subtle gradients for backgrounds in containers and cards. Please do not use stronger gradients for backgrounds and vice versa.

{% usage {
    do: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/foundations/gradients/choice-do.svg",
            width: "460px",
            alt: "A notification banner using a subtle gradient for the background."
        }]
    },
    dont: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/foundations/gradients/choice-dont.svg",
            width: "460px",
            alt: "A notification banner using a strong gradient for the background representing a misuse of gradients."
        }]
    }
} %}

---

## Applying gradients

### Use in specific approved components

Please do not use gradients that have been specifically created as part of the visual identity of our sub-brands (such as AI or JET+) for other content or use cases in our products. **Gradients created for a sub-brand should always be used for their specific purpose.**

{% usage {
    do: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/foundations/gradients/ai-component-do.svg",
            width: "400px",
            alt: "Our AI gradient being correctly used for AI content in a notification banner component."
        }]
    },
    dont: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/foundations/gradients/ai-component-dont.svg",
            width: "400px",
            alt: "Our AI gradient being incorrectly used for non AI content in a notification banner component."
        }]
    }
} %}

### Don't use gradients in text

We do not recommend using gradients for text currently as none of our gradients have been tested on text and this can have a big impact on accessibility. **Please use any of our content colour tokens for text.**

{% usage {
    do: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/foundations/gradients/text-do.svg",
            width: "256px",
            alt: "Text saying 'Unlock Just Eat +' using a content token in the text."
        }]
    },
    dont: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/foundations/gradients/text-dont.svg",
            width: "256px",
            alt: "Text saying 'Unlock Just Eat +' using a gradient in the text, which is not recommended."
        }]
    }
} %}

### Pair with solid colours which complement the brand

We highly encourage using gradients alongside solid brand, container and background colours, to maximise the impact of the gradient. We suggest avoiding using too many gradients together as this can feel overwhelming.

{% usage {
    do: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/foundations/gradients/pairing-do.svg",
            width: "120px",
            alt: "A JET+ tag using only one gradient from the JET+ brand."
        }]
    },
    dont: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/foundations/gradients/pairing-dont.svg",
            width: "120px",
            alt: "A JET+ tag using two gradients from the JET+ brand representing a bad practice of mixing gradients."
        }]
    }
} %}

---

## Mixing gradient sub-brands

### Using JET+ and AI together

In places where we need to mix two visual identities that include gradients please ensure that there is a clear hierarchy in content. For example, in the AI assistant we use just the gradient border on the JET+ card to nod to the brand without the two identities clashing.

{% notification {
    type: "information",
    message: "Please reach out to the PIE team to see how we can help in specific use cases."
} %}

{% contentPageImage {
src:"../../../assets/img/foundations/gradients/sub-brand-mixing-example.svg",
alt: "A screen design showing appropriate use of mixing gradient sub-brands together.",
width: 230
} %}
