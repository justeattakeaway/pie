---
eleventyNavigation:
  key: Overview
  parent: 'JET AI'
  order: 1
shouldShowContents: true
permalink: patterns/jet-ai/
llmsTxtDescription: JET AI visual identity guide covering brand principles, icons, AI gradients and colours for light and dark mode, motion, AI component styles and the language and tone to use.
---

## Overview

At JET we use AI to assist and elevate our users' experiences.

We have established an AI branding with its own, distinct visual identity for the purpose of providing clarity to our users on AI content across our products. This is so that we can continually be transparent in our use of AI.

{% notification {
  type: "information",
  message: "Only use PIE AI branded elements for AI content in our products."
} %}

{% notification {
  type: "neutral",
  message: "**Get in touch for new content**. If you’re working on AI content and need something additional, get in touch with the PIE Design System team and we can work with you to produce it!"
} %}

{% contentPageImage {
src:"../../../assets/img/patterns/jet-ai/overview.svg",
alt: "Overview example displaying a JET AI branded notification banner."
} %}

---

## Brand principles

### Dynamic

AI is ever-evolving, and our motion pieces reflect its dynamic nature bringing the technology to life.

### Futuristic

AI brings opportunity to elevate our user's experiences and drive efficiency, whilst supporting them with their tasks.

### Transparent

To overcome trust barriers, we must clearly communicate when and how AI is used.

### Humanistic

As AI is artificial, so it's important we create human-centered experiences that deliver real value.

{% contentPageImage {
src:"../../../assets/img/patterns/jet-ai/overview-brand-principles.svg",
alt: "Four JET AI branded notification banners each one having one of the brand principles which are Dynamic, Futuristic, Transparent, and Humanistic.",
width: 120
} %}

---

## Dos and Don'ts

{% usage {
  do: {
    type: usageTypes.text,
    items: [
      "**Be transparent.** Clearly label all AI content for user's trust and confidence.",
      "**Use exclusive AI branding.** Only use AI branding for content that uses AI. It will allow users to easily find and recognise it."
    ]
  },
  dont: {
    type: usageTypes.text,
    items: [
      "**Don't make changes to the gradient.** All gradients have specific uses, if you need something different, get in touch with the PIE Design System team."
    ]
  }
} %}

---

## Iconography

We use specific icons to communicate AI content at JET.
The sparkle icons are the primary visual indicators and look to enable AI recognition for users. Because of this, sparkle icons should not be used in any other contexts or meanings.

{% notification {
  type: "neutral",
  iconName: "link",
  message: "Check out the [iconography documentation](/foundations/iconography/)."
} %}

### Icon variants

Currently we are only using the filled variant for both AI icons, if you'd like to use the outline variant please get in touch with the PIE design system team.

We use two types of icon for AI content:

{% contentPageImage {
src:"../../../assets/img/patterns/jet-ai/icon-variants.svg",
alt: "Two types of JET AI icons.",
width: 120
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Type 1:** It's made up of 2 sparkles and should be used in all static AI content.",
        "**Type 2:** It's made up of 1 sparkle and should only be used in designs where the icon will be animated in build. See how we use this icon animated in the [motion section of these guidelines](/patterns/jet-ai/#motion) and [motion foundations](/foundations/motion/)."
    ]
} %}

### Icon examples

The primary AI icon is ‘Type 1’ and it includes 2 sparkles. This is to be used on all static AI content where the icon does not animate. We use this icon because it feels more interesting and dynamic than the alternative does when no animation is applied.

{% contentPageImage {
src:"../../../assets/img/patterns/jet-ai/icon-examples.svg",
alt: "Examples of icon button, container and tag AI branded components with the advice 'Use along with headings to signify the use of AI in the preceding information'.",
caption: "Use the Type 1 AI icon along with headings to signify the use of AI in the preceding information. Examples shown are scaled up.",
width: 120
} %}

To see examples of our ‘Type 2’ icon animated please check the [motion section of these guidelines](/patterns/jet-ai/#motion) and [motion foundations](/foundations/motion/).

---

## Gradients

There are two gradients used for AI content.

- The border gradient is available to use across products. The fill gradient is only available for use within the AI assistant.
- In the instance where both can be used, consider the hierarchy of the content within the existing screen/journey when choosing the gradient.

{% notification {
  type: "neutral",
  iconName: "link",
  message: "Check out the [Gradients foundation documentation](/foundations/gradients/)."
} %}

{% contentPageImage {
src:"../../../assets/img/patterns/jet-ai/gradients-examples.svg",
alt: "Example of the AI border token that can be used anywhere and the AI container default that should be used only in the AI assistant user flows.",
width: 120
} %}

### Direction and angle

The border and container gradients have the same 140° angle applied to them. Cupcake is always top-left and Aubergine bottom-right.

The gradient tokens have the above applied. Do not edit or detach the gradients.

{% contentPageImage {
src:"../../../assets/img/patterns/jet-ai/gradients-direction.svg",
alt: "Circle shape with the gradient direction for the ai-container-default and ai-border-default tokens.",
width: 120
} %}

{% notification {
  type: "warning",
  message: "Please make sure you're using our gradient alias tokens in your products."
} %}

### Gradients light mode

We have two distinct gradients for AI content:

- The token **ai-border-default** can be used as a strong border for buttons, tags and other containers (see more information in the component section). There is a border animation which can be used to highlight content. See the motion section for more details.
- The token **ai-container-default** can only be used within the AI assistant.

#### Light mode $ai-container-default

{% notification {
  type: "neutral",
  message: "Use the ai-container-default token only in the AI Assistant designs."
} %}

{% contentPageImage {
src:"../../../assets/img/patterns/jet-ai/gradients-light-ai-container-default.svg",
alt: "Scale showing gradient stops from 0% to 100% for the light mode ai-container-default token. 0% uses the token cupcake-10, 40% uses token cupcake-10 and 100% uses aubergine-5."
} %}

#### Light mode $ai-border-default

{% contentPageImage {
src:"../../../assets/img/patterns/jet-ai/gradients-light-ai-border-default.svg",
alt: "Scale showing gradient stops from 0% to 100% for the light mode ai-border-default token. 0% uses the token cupcake-40, 40% uses token cupcake-40 and 100% uses aubergine-30."
} %}

### Gradients dark mode

In dark mode, our **$ai-container-default** gradient token switches to a darker, but equally subtle version of the gradient on dark theme.

The token **$ai-border-default**, however remains the same. This is to preserve the brand identity of our AI content across themes.

#### Dark mode $ai-container-default

{% notification {
  type: "neutral",
  message: "Use the ai-container-default token only in the AI Assistant designs."
} %}

{% contentPageImage {
src:"../../../assets/img/patterns/jet-ai/gradients-dark-ai-container-default.svg",
alt: "Scale showing gradient stops from 0% to 100% for the dark mode ai-container-default token. 0% uses the token cupcake-10, 40% uses token cupcake-10 and 100% uses aubergine-5."
} %}

#### Dark mode $ai-border-default

{% contentPageImage {
src:"../../../assets/img/patterns/jet-ai/gradients-dark-ai-border-default.svg",
alt: "Scale showing gradient stops from 0% to 100% for the dark mode ai-border-default token. 0% uses the token cupcake-40, 40% uses token cupcake-40 and 100% uses aubergine-30."
} %}

#### Examples

The border gradient can be applied across all areas of our product. The container gradients can only be applied within the AI assistant.

{% contentPageImage {
src:"../../../assets/img/patterns/jet-ai/gradients-token-usage-examples.svg",
alt: "Examples of our gradients being used in Just Eat products.",
width: 120
} %}

---

## Colours

AI in product should primarily be communicated using gradients, as this is one of our main visual indicators for AI content.

However we aim to support our gradients with these additional colours from the PIE Foundations library.

### Colours light mode

{% contentPageImage {
src:"../../../assets/img/patterns/jet-ai/colours-light.svg",
alt: "JET AI light mode color palette showing color swatches with hex values for light theme implementation."
} %}

### Colours dark mode

{% contentPageImage {
src:"../../../assets/img/patterns/jet-ai/colours-dark.svg",
alt: "JET AI dark mode color palette showing color swatches with hex values for dark theme implementation."
} %}

---

## Motion

Motion is a huge part of how we communicate AI within our products. We use it to make the AI experience feel more dynamic whilst also enhancing loading states, usability, and new features.

Motion in AI should always feel smooth and fluid. Our motion intentionally mimics the pattern of breathing to ensure it feels calming and almost human like in nature.

If you would like additional motion pieces to support your work, please get in touch.

{% notification {
  type: "neutral",
  iconName: "link",
  message: "Check out the [Motion guidelines](/foundations/motion/)."
} %}

### Animated background

We have an animated background image that’s only used for the AI Assistants.

The animation is set to an extremely subtle loop to ensure users aren’t annoyed or disorientated by the motion. Please ensure that this motion, although subtle, can be turned off through device reduce motion settings.

We supply our animating background as Lottie and JSON files, please use this with a blur of 80dp.

{% contentPageImage {
src:"../../../assets/img/patterns/jet-ai/motion-animated-background.svg",
alt: "Examples of the light and dark mode options for JET AI animated background.",
caption: "In AI Assistant products please use our supplied Lottie pictured above and add a blur of 80dp.",
width: 120
} %}

{% notification {
  type: "information",
  message: "Contact the PIE Design Team for the Lottie assets."
} %}

### Border animation

We use gradient border animations to capture user attention or signify user action in relation to AI generated content. Our gradient borders move clockwise.

Gradient border animations can be applied to buttons or containers and can either be continuous or play on a loop of two rotations and come to a stop.

Continuous animation works great for buttons where we want to callout user action whilst animating twice and stopping can be used to simply highlight returned AI queries that we wouldn't want to keep distracting the user with.

{% contentPageImage {
src:"../../../assets/img/patterns/jet-ai/motion-border-animation.svg",
alt: "JET AI icon button and container components using the border animation. Above each component there's an orange arrow in the clockwise direction illustrating the motion effect in the ai border token.",
caption: "Examples shown are scaled up.",
width: 120
} %}

### Thinking / Loading animation

Our thinking / loading animation is the heart of our AI and can be used in most places where AI query is in progress.

It plays on a loop expanding from its default shape to a subtle bloat before contracting back to default in order to mimic the pattern of breathing. It also spins between rounds.

{% contentPageImage {
src:"../../../assets/img/patterns/jet-ai/motion-thinking-animation.svg",
alt: "JET AI thinking/loading animation showing the AI icon expanding and contracting to mimic breathing.",
width: 120
} %}

---

## Components

The [PIE AI component library](https://www.figma.com/design/qVVNVoZgeqkQhlMxsrUhd7/Core-AI-Components?m=auto) includes common components for designing AI user flows.

When designing, consider the use of the components and avoid applying duplicate gradients and icons.  AI design should be intentional and contain one prominent piece of branding, not multiple.

If you would like additional components made to support your work, please get in touch with the PIE Design System team.

{% contentPageImage {
src:"../../../assets/img/patterns/jet-ai/components-examples.svg",
alt: "Examples of AI components being used in JET products.",
width: 120,
variant: "secondary"
} %}

### Button with icon

The AI button component can be used to signify an entry point into an AI experience.

You can also choose to use standard PIE button variants for AI content if you have already applied the branding in another way.

- Use icon 1 to clearly label that the action uses AI.
- Use icon 1 as there is no 'thinking / loading' motion used for buttons.
- Use only on default backgrounds as this uses the AI border gradient.

{% contentPageImage {
src:"../../../assets/img/patterns/jet-ai/components-button-icon-true.svg",
alt: "JET AI button component with AI icon.",
width: 120
} %}

{% contentPageImage {
src:"../../../assets/img/patterns/jet-ai/components-button-icon-true-2.svg",
alt: "JET AI button used in conjunction with a primary button in the same container.",
width: 120
} %}

### Icon button

Use one of the AI icons to signify the use of AI:

- Use icon 1 if there is no motion involved.
- Use icon 2 if the 'thinking / loading' motion is involved.

{% contentPageImage {
src:"../../../assets/img/patterns/jet-ai/components-icon-button.svg",
alt: "JET AI icon button component.",
width: 120
} %}

{% contentPageImage {
src:"../../../assets/img/patterns/jet-ai/components-icon-button-2.svg",
alt: "Example of the JET AI icon button component used in the app bar.",
width: 120
} %}

### Chip

The AI chip component can be used alongside other chip variants.

You can also choose to use standard PIE chip variants for AI content if you have already applied the branding in another way.

{% contentPageImage {
src:"../../../assets/img/patterns/jet-ai/components-chip.svg",
alt: "Example of the JET AI chip component.",
width: 120
} %}

{% contentPageImage {
src:"../../../assets/img/patterns/jet-ai/components-chip-example.svg",
alt: "Example of the JET AI chip component used in a product.",
width: 120
} %}

### Tag

The AI tag component can be used to contextualise AI content.

You can also choose to use standard PIE tag variants for AI content if you have already applied the branding in another way.

{% contentPageImage {
src:"../../../assets/img/patterns/jet-ai/components-tag.svg",
alt: "JET AI tag component.",
width: 120
} %}

{% contentPageImage {
src:"../../../assets/img/patterns/jet-ai/components-tag-example.svg",
alt: "Example of the JET AI tag component used in a product.",
width: 120
} %}
