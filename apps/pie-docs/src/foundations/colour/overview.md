---
eleventyNavigation:
    key: Overview
    parent: Colour
    order: 1
permalink: foundations/colour/
---
## Our colour principles

Here are some principles which can help you apply colour in your products more effectively.

### Communication is key

Although we value an aesthetically pleasing use of colour, we place a higher value on clear communication. Colour supports the purpose of the content, communicating things like hierarchy of information, interactive states, and the difference between distinct elements.

{% contentPageImage {
src:"../../../assets/img/foundations/colour/brand-colours.svg",
caption: "The visual above shows a composition made of various of our brand colours."
} %}

### Colours have meaning

Colours have assigned roles, which hold a specific meaning based on how they function within the interface. Defined colour roles make things easy to modify and customize later. They also extend the colour system so it works across any touchpoint at JET.

{% contentPageImage {
src:"../../../assets/img/foundations/colour/colour-meaning.svg",
caption: "Some of the meanings we have determined for our ‘Supportive’ colour palette."
} %}

### Colours follow accessibility guidelines

The colour system is designed within the [HSLuv](https://www.hsluv.org) colour space to generate themes that meet **WCAG 2.1** compliant contrast ratios. This makes things easier to find, identify, and interact with. It also makes the whole experience more accessible for people who are colour blind or who have low vision. However, you should never convey information using colour alone.

{% contentPageImage {
src:"../../../assets/img/foundations/colour/colour-accessibility.svg",
width: "424px",
caption: "The image above shows the colour contrast for white text placed over our ‘Aubergine’ colour."
} %}

---
## Using orange in your designs

We’re an orange brand, which means that orange always takes centre stage. It represents our joyful personality, it’s bold, energising and we use it wherever we communicate.

However, there are significant difficulties when using orange in our designs, including colour contrast and accessibility issues. To tackle these we have come up with an additional colour called $color-orange.

### Brand orange vs Product orange

Product orange is a modified version of our Brand orange colour which has been created with the objective to use orange in interactive elements and components within our interfaces.

Here are some guidelines which outline when to use Brand orange and Product orange in your designs:

#### Brand orange

{% contentPageImage {
src:"../../../assets/img/foundations/colour/brand-orange.svg",
width: "243px"
} %}

You should use Brand orange for:

{% list {
    type: listTypes.icon,
    iconName: "check-circle-filled",
    iconFill: "support-positive",
    isCompact: true,
    items: [
        "Non-interactive elements",
        "Logos",
        "Illustrations",
        "Splash screens",
        "Navigation bars",
        "Marketing panel backgrounds"
    ]
} %}

#### Product orange

{% contentPageImage {
src:"../../../assets/img/foundations/colour/product-orange.svg",
width: "243px"
} %}

You should use Product orange for:

{% list {
    type: listTypes.icon,
    iconName: "check-circle-filled",
    iconFill: "support-positive",
    isCompact: true,
    items: [
        "Interactive elements",
        "Buttons",
        "Icons",
        "Interactive text",
        "Headings"
    ]
} %}

---

## Using content opacity in your designs

There are two types of colour tokens used for content: Opacity tokens (with transparency) and Solid tokens (fully opaque). 

Opacity tokens are only available for standard light and dark content. Coloured content tokens (for example, error, positive, brand) are always solid and have no opacity type.

### Opacity vs Solid Content

Opacity tokens contain a degree of transparency allowing the background to subtly influence the text colour. This results in a design that feels cohesive and visually integrated. 

Solid tokens colours remain consistent and are not affected by the background colour or any transparency effects.

{% notification {
    type: "info",
    message: "Content tokens can be used not only for text but also for icons."
} %}

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use content opacity tokens as the default choice in your designs.",
            "Use solid tokens when pairing text with elements that already apply opacity, such as backgrounds with blur effects or opacity fills."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Avoid pairing opacity tokens with backgrounds that use blur effects or opacity fills, as this reduces content readability.",
            "Do not apply opacity to error, positive, or brand content colours."
        ]
    }
} %}

#### Content with opacity

Content with opacity is best used on solid background colours from the PIE token set where accessibility has been tested and verified. In these situations, the slight transparency of the text works harmoniously with the background maintaining both visual coherence and legibility.

{% contentPageImage {
src:"../../../assets/img/foundations/colour/content-opacity-example.svg",
width: 693,
alt: "Examples of UI components with content opacity, showing a '20% off burger' promotion and a delivery/collection toggle component."
} %}

#### Content with solid colour

Content with solid colour should be used when text appears over backgrounds that contain blur or transparency effects. In these cases, the background can influence the perceived colour through multiple layers, and using opacity may compromise accessibility. Solid tokens ensure the text remains clear, consistent, and independent of any background variation.

{% contentPageImage {
src:"../../../assets/img/foundations/colour/content-solid-example.png",
width: "752px",
alt: "UI components with solid color backgrounds, featuring an address field and a mobile navigation bar to ensure text legibility."
} %}

#### Content with brand colours

To ensure accessibility, content tokens must be paired correctly with product and brand orange colours. 

{% contentLayout %}
  {% contentItem %}
    <h4>$background-interactive-brand</h4>
    {% contentPageImage {
      src:"../../../assets/img/foundations/colour/brand-button.svg",
      alt: "A primary button with brand orange background and white text.",
      width: 365
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>$support-brand-01</h4>
    {% contentPageImage {
      src:"../../../assets/img/foundations/colour/brand-avatar.svg",
      alt: "An avatar with brand orange background and black text.",
      width: 56
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Content token suffixes and their usage

Within the content token set, you will notice consistent naming patterns in the suffixes, such as “-inverse,” “-light,” and “-dark.” These suffixes indicate how a token behaves across themes and backgrounds, helping maintain the correct contrast and accessibility.

### Design tip

Always review your designs in dark theme to ensure the correct token is applied and that the text maintains the intended contrast and accessibility across all backgrounds.

To switch themes in Figma, you can click on the “Apply variable mode” icon in the right-hand Appearance panel, then easily toggle between light and dark themes.

{% contentLayout %}
  {% contentItem %}
    <h4>$background-interactive-brand</h4>
    {% contentPageImage {
      src:"../../../assets/img/foundations/colour/design-tip-1.svg",
      alt: "A screenshot of the Figma Appearance panel with a tooltip highlighting the 'Apply variable mode' icon.",
      width: 177
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>$support-brand-01</h4>
    {% contentPageImage {
      src:"../../../assets/img/foundations/colour/design-tip-2.svg",
      alt: "A screenshot of the Figma menu for variable modes, showing 'Dark Theme' being selected.",
      width: 177,
      variant: "inverse"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Inverse

An inverse token is used when text appears on a dark or high-contrast background in the light theme. This ensures the content maintains an accessible contrast ratio. In the dark theme, the same token automatically adjusts to a darker content colour for balance.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src:"../../../assets/img/foundations/colour/design-tip-inverse-1.svg",
      alt: "An example of the inverse token in light theme, showing light-colored text on a dark background to ensure high contrast.",
      width: 300
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src:"../../../assets/img/foundations/colour/design-tip-inverse-2.svg",
      alt: "An example of the inverse token in dark theme, showing dark-colored text on a light background for visual balance.",
      width: 300,
      variant: "inverse"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

Inverse tokens are typically paired with dark backgrounds or strong feedback colours such as info or success.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src:"../../../assets/img/foundations/colour/design-tip-inverse-3.svg",
      alt: "Three toast notifications (neutral, info, success) with dark and saturated color backgrounds, using white inverse text as they appear in a light theme.",
      width: 300
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src:"../../../assets/img/foundations/colour/design-tip-inverse-4.svg",
      alt: "The same three toast notifications shown in a dark theme, with their background colors lightened for appropriate contrast.",
      width: 300,
      variant: "inverse"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Light

A light token is used when text should remain light in the dark theme, ensuring visibility against darker backgrounds. 

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src:"../../../assets/img/foundations/colour/design-tip-light-1.svg",
      alt: "A visual example of light-colored text on a dark container, shown within a light theme context.",
      width: 440
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/foundations/colour/design-tip-light-2.svg",
      alt: "The same example in a dark theme, demonstrating how a 'light' token ensures the text remains light for visibility against its dark container.",
      width: 440,
      variant: "inverse"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

Light tokens are commonly paired with Product Orange, strong error feedback colour, and the brand colour 06 Aubergine.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/foundations/colour/design-tip-light-3.svg",
      alt: "An orange 'Primary button' and a red 'Destructive button,' both with light-colored text and icons, shown in a light theme.",
      width: 251
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/foundations/colour/design-tip-light-4.svg",
      alt: "The same primary and destructive buttons shown in a dark theme, with their colors slightly adjusted for contrast while the text and icons remain light.",
      width: 251,
      variant: "inverse"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Dark

A dark token is used when text should remain dark in the dark theme, maintaining a strong presence against lighter or neutral backgrounds. 

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/foundations/colour/design-tip-dark-1.svg",
      alt: "A visual example of dark text on a light background, shown as the default appearance in a light theme.",
      width: 440
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/foundations/colour/design-tip-dark-2.svg",
      alt: "The same example in a dark theme, demonstrating how a 'dark' token forces the text to remain dark for high contrast against a light background.",
      width: 440,
      variant: "inverse"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

Dark tokens are are typically paired with strong brand colours such as 03 Cupcake, 04 Berry, and 05 Turmeric.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/foundations/colour/design-tip-dark-3.svg",
      alt: "Three tags in light blue, pink, and yellow, each using a dark text token for readability as they appear in a light theme.",
      width: 53
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/foundations/colour/design-tip-dark-4.svg",
      alt: "The same three colored tags shown in a dark theme, where the dark text token is preserved for contrast against the light tag backgrounds.",
      width: 53,
      variant: "inverse"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}
