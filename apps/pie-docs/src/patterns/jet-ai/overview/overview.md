---
eleventyNavigation:
  key: Overview
  parent: 'JET AI'
  order: 1
shouldShowContents: true
permalink: patterns/jet-ai/
---

## Overview

At JET we've started using AI to assist and elevate the customer experience.

We have established AI at JET with its own, distinct visual identity for the purpose of letting our customers quickly recognise AI generated content within our products. This is so that we can remain as transparent as possible in our use of AI.

We ask that you only use our AI branded elements for AI generated technology used in our product.

{% contentPageImage {
src:"../../../assets/img/patterns/jet-ai/overview.svg",
alt: "Overview example displaying a JET AI branded notification banner."
} %}

---

## Brand principles

### Dynamic

AI is ever-evolving, and our motion pieces reflect its dynamic nature—bringing the technology to life.

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
      "**Don't make changes to the gradient.** All gradients have specific uses, if you need something different, get in touch.",
      "**Don't overlay gradients with other gradients.** Gradient usage needs to be intentional. Please do not overlay gradients with other gradients (e.g. JET+)."
    ]
  }
} %}

---

## Iconography

We do not have a dedicated logo, instead we use specific icons to communicate AI content at JET.

The sparkle icons should be used as the primary visual indicator for AI generated content and serve the purpose of letting customers quickly recognise AI generated content within our products.

Because of this we ask that the sparkle icons not be used in any other context or to convey any other meanings.

{% notification {
  type: "neutral",
  iconName: "link",
  message: "Check out the [iconography documentation](https://pie.design/foundations/iconography/)."
} %}

### Icon variants

Currently we are only using the filled variant for both AI icons, if you'd like to use the outline variant please get in touch with the design system team in the #help-designsystem channel.

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
        "**Type 2:** It's made up of 1 sparkle and should only be used in designs where the icon will be animated in build. See how we use this icon animated in our motion section of these guidelines."
    ]
} %}

### Icon examples

The primary AI icon is ‘Type 1’ and includes 2 sparkles. This is to be used on all static AI content where the icon does not animate. For example, it can be used along with headings to signify the use of AI in the preceding information. We use this icon because it feels more interesting and dynamic than the alternative does when no animation is applied.

{% contentPageImage {
src:"../../../assets/img/patterns/jet-ai/icon-examples.svg",
alt: "Examples of icon button, container and tag AI branded components with the advice 'Use along with headings to signify the use of AI in the preceding information'.",
width: 120
} %}

To see examples of our ‘Type 2’ icon animated please check the motion section of these guidelines.

---

## Gradients

There are two main gradients available for AI content. A default gradient for containers, and another for borders. Both are available to be used independently or together. When applying them, consider the hierarchy of the AI content within the existing screen/journey.

AI gradients must be applied to neutral backgrounds and we never use gradients over other gradients.

{% notification {
  type: "neutral",
  iconName: "link",
  message: "Check out the [Gradients foundation documentation](https://pie.design/foundations/gradients/)."
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

We have created two distinct gradients for AI content.

The token **$ai-container-default** can be used for small containers and cards under 162px.

The token **$ai-border-default** can be used as a strong border for buttons, tags and other containers (component section).

There is a border animation which can be used to highlight returned AI queries. See the motion section for more details.

#### Light mode $ai-container-default

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

{% contentPageImage {
src:"../../../assets/img/patterns/jet-ai/gradients-dark-ai-container-default.svg",
alt: "Scale showing gradient stops from 0% to 100% for the dark mode ai-container-default token. 0% uses the token cupcake-10, 40% uses token cupcake-10 and 100% uses aubergine-5."
} %}

#### Dark mode $ai-border-default

{% contentPageImage {
src:"../../../assets/img/patterns/jet-ai/gradients-dark-ai-border-default.svg",
alt: "Scale showing gradient stops from 0% to 100% for the dark mode ai-border-default token. 0% uses the token cupcake-40, 40% uses token cupcake-40 and 100% uses aubergine-30."
} %}

### Using images versus gradients

We use gradients specifically for our container and borders, however we highly suggest using this static image gradient background for content with a height of 162px or above. There is an animation for this background but this is to only be used in the AI assistants.

This gradient is more dynamic and works better at larger sizes. It comes in both light and dark variants and should be switched out according to the theme.

For design purposes please use the background component in our AI library. In AI Assistant products please use our supplied SVG and add a blur of 80dp.

{% contentPageImage {
src:"../../../assets/img/patterns/jet-ai/gradients-images.svg",
alt: "Light and dark mode examples of the static image gradient background for content with a height of 162px or above. It is a blob shape with the same gradient direction and stops as the ai-container-default token.",
width: 120
} %}

### Examples

For content with a height below 162px use our linear fill gradient named ai-container-default. This has been created for specifically for containers and smaller UI elements such as tags and buttons.

For content with a height above 162px use the blob gradient background component in our AI library. In product please use our supplied SVG and add a blur of 80dp.

{% contentPageImage {
src:"../../../assets/img/patterns/jet-ai/gradients-examples.svg",
alt: "Two mobile screen examples with different gradient backgrounds for content with varying heights. The left screen shows content below 162px using the ai-container-default gradient in a notification banner, while the right screen shows content above 162px using the blob gradient background component.",
width: 120
} %}

{% notification {
  type: "information",
  message: "Contact the PIE Design Team for background SVG assets."
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
  message: "Check out the [Motion guidelines](https://pie.design/foundations/motion/)."
} %}

### Animated background

Motion is a huge part of how we communicate AI within our products. We use it to make the AI experience feel more dynamic whilst also enhancing loading states, usability, and new features.

Motion in AI should always feel smooth and fluid. Our motion intentionally mimics the pattern of breathing to ensure it feels calming and almost human like in nature.

If you would like additional motion pieces to support your work, please get in touch.

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
width: 120
} %}

### Thinking / Loading animation

Our thinking / loading animation is the heart of our AI and can be used in most places where AI query is in progress.

It plays on a loop - expanding from it's default shape to a subtle bloat before contracting back to default in order to mimic the pattern of breathing. It also spins between rounds.

{% contentPageImage {
src:"../../../assets/img/patterns/jet-ai/motion-thinking-animation.svg",
alt: "JET AI thinking/loading animation showing the AI icon expanding and contracting to mimic breathing.",
width: 120
} %}

---

## Components

There are a selection of components with the AI gradients applied. These should primarily be used on default containers to avoid layering gradients.

If you would like additional components made to support your work, please get in touch with us on #help-designsystem.

{% usage {
  do: {
    type: usageTypes.text,
    items: [
      "Use gradient backgrounds, borders and iconography. Keep work minimal and branding subtle."
    ]
  },
  dont: {
    type: usageTypes.text,
    items: [
      "Don’t use multiple gradients on top of each other and repetitively apply the AI icon."
    ]
  }
} %}

{% usage {
  do: {
    type: usageTypes.image,
    items: [{
            src: "../../../assets/img/patterns/jet-ai/components-do.svg",
            width: "256px",
            alt: "Container component with AI gradient fill applied correctly."
        }]
  },
  dont: {
    type: usageTypes.image,
    items: [{
            src: "../../../assets/img/patterns/jet-ai/components-dont.svg",
            width: "256px",
            alt: "Container component with AI gradient fill with a tag component inside representing incorrect layering of gradients."
        }]
  }
} %}

### Layering components

Avoid repetitive use of the AI icon, especially in instances where the screen content is AI only (e.g. the AI assistant).

Designs including AI should be subtle and simple, with little visual clutter. Allow the gradient to be the main focus, with supporting neutral components.

Avoid layering gradient styles as it causes additional visual clutter.

{% usage {
  do: {
    type: usageTypes.text,
    items: [
      "Create JET AI branded designs with little visual clutter, the UI should be subtle and simple.",
      "Allow the gradient to be the main focus, with supporting neutral components.",
      "Ensure AA compliant contrast when layering components and choose components with solid fill and text."
    ]
  },
  dont: {
    type: usageTypes.text,
    items: [
      "Avoid repetitive use of the AI icon, especially in instances where the screen content is AI only (e.g. the AI assistant).",
      "Avoid layering gradient styles as it causes additional visual clutter.",
      "Avoid using component variants ghost, outline, secondary, etc as they can impact accessibility and contrast."
    ]
  }
} %}

{% usage {
  do: {
    type: usageTypes.image,
    items: [{
            src: "../../../assets/img/patterns/jet-ai/components-do.svg",
            width: "256px",
            alt: "Mobile screen using JET AI branded background with little visual clutter."
        }]
  },
  dont: {
    type: usageTypes.image,
    items: [{
            src: "../../../assets/img/patterns/jet-ai/components-dont.svg",
            width: "256px",
            alt: "Mobile screen using JET AI branded background with excessive use of the AI icon and layered gradient styles causing visual clutter."
        }]
  }
} %}

### Button with icon

- Use icon 1 to clearly label that the action uses AI.
- Use icon 1 as there is no 'thinking / loading' motion used for buttons.
- Use only on default backgrounds as this uses the AI border gradient.

{% contentPageImage {
src:"../../../assets/img/patterns/jet-ai/components-button-icon-true.svg",
alt: "JET AI button component with AI icon.",
width: 120
} %}

### Button without icon

- Use when accompanying content that either includes a lot of AI language or the AI icon is already in use within the content.
- Use only on default backgrounds as this uses the AI border gradient.
- If you're using a button on a gradient container then the inverse style can be used to avoid layering gradients and to reduce visual clutter.

{% contentPageImage {
src:"../../../assets/img/patterns/jet-ai/components-button-icon-false.svg",
alt: "JET AI button component without AI icon.",
width: 120
} %}

### Icon button

AI icon buttons should be used only on default backgrounds as they use the AI border gradient.

Use one of the AI icons as default to signify the use of AI:

- Use icon 1 if there is no motion involved.
- Use icon 2 if the 'thinking / loading' motion is involved.

You can also use other icons, as long as it relates to AI content or used within an AI experience, such as using the Microphone icon in the voice activation journey.

{% notification {
  type: "information",
  message: "If you're using an Icon button on a gradient container then the inverse style can be used to avoid layering gradients and to reduce visual clutter."
} %}

{% contentPageImage {
src:"../../../assets/img/patterns/jet-ai/components-icon-button.svg",
alt: "JET AI icon button component.",
width: 120
} %}

### Tag

#### Motion variant

- Use the tag to clearly label that the content uses AI. You can use an interactive variant if you need to specify information regarding AI.
- Use icon 2 for 'thinking / loading' motion and icon 1 if for 'ellipsis' motion.
- Use only on default backgrounds as this uses a AI border gradient.

{% contentPageImage {
src:"../../../assets/img/patterns/jet-ai/components-tag-motion.svg",
alt: "JET AI tag component variant that uses motion.",
width: 120
} %}

#### Static variant

- Use the tag to clearly label that the content uses AI. You can use an interactive variant if you need to specify information regarding AI.
- Use icon 1 as no motion is being used.
- Use only on default backgrounds as this uses the AI border gradient.

{% notification {
  type: "information",
  message: "If you're using the tag on a gradient container then the neutral styles can be used to avoid layering gradients and to reduce visual clutter."
} %}

{% contentPageImage {
src:"../../../assets/img/patterns/jet-ai/components-tag-static.svg",
alt: "JET AI tag component variant that is static and doesn't use motion.",
width: 120
} %}

### Generating query

AI content frequently requires loading states whilst queries are running in the background. During this time it's important that the user understands the feature isn't broken. Using a skeleton with motion can help do this and maintain a level of engagement for the user.

- The 'thinking / loading' motion visually shows the user that something is happening.
- The copy supports this and briefly gives feedback to the user on what is happening.

When the query is complete, replace the skeleton with the content. You can also add the border animation which will highlight the new content on the page.

{% contentPageImage {
src:"../../../assets/img/patterns/jet-ai/components-query.svg",
alt: "Two JET AI container components representing the use of motion. The container on the left shows the 'thinking / loading' motion with a skeleton, while the container on the right shows the border and gradient fill animation to highlight new content after a query is complete.",
width: 120
} %}

---

## Language overview

The Content Design team is working on a vision piece around the use of AI Voice at JET.

While this work progresses, here is our interim guidance:

### Tone and personality

Match to user's position in the flow.

- Empathetic for help.
- Friendly for search.
- Upbeat for orders.

### Clarity and pronunciation

Our number one priority must be ensuring clear enunciation and measured pacing.

For example: fun or comedy accents are secondary to clarity.

### Identity and demographics

This guidance will change as Voice technology develops but for now:

- Male.
- Late-20s-early-30s.
- Region-neutral English accent.
