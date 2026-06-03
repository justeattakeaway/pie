---
eleventyNavigation:
    key: Web
    parent: 'Onboarding and Guided Tour'
    order: 1
shouldShowContents: true
permalink: patterns/onboarding-and-guided-tour/web-guidance/
---

## Overview

The onboarding and guided tour pattern aims to create a smooth and engaging first interaction, helping users understand the core functionalities, value propositions, or changes within the system. By providing a clear, step-by-step guide, these patterns reduce friction, improve user confidence, and foster a positive experience from the very beginning.

{% contentPageImage {
src:"../../../assets/img/patterns/onboarding-and-guided-tour/web/overview.svg",
alt: "Part of a phone screen displaying an onboarding tooltip."
} %}

---

## Purpose

Onboarding can be designed using two approaches, depending on the purpose:

### Overview onboarding

Overview onboarding provides a high-level introduction to the product or a new feature set. It helps users understand the broader context of the system, setting expectations and aligning them with the key goals of the onboarding process.

### Contextual onboarding

Contextual onboarding offers a step-by-step guidance tied directly to specific features or actions. It delivers assistance as users interact with the interface, ensuring help is timely and relevant without overwhelming them.

{% contentPageImage {
src:"../../../assets/img/patterns/onboarding-and-guided-tour/web/decision-tree.svg",
alt: "A decision tree diagram for choosing between 'Overview' and 'Contextual' content types based on three questions: 1. Is it a high-level intro guide? If Yes, result is Overview. If No, proceed to next question. 2. Is it a multi-step flow? If No, result is Contextual. If Yes, proceed to next question. 3. Are the steps connected? If Yes, result is Contextual. If No, result is Overview.",
width: 120
} %}

---

## Overview onboarding options

These are UI elements you can use to enhance the onboarding experience:

### Modal

Use a Modal when you need to provide users with a high-level introduction to the onboarding process or summarise what they can expect to learn. A modal sets the stage for onboarding by creating a focused environment free of distractions, allowing users to concentrate on the essential information.

{% notification {
  type: "neutral",
  message: "Check out the [Modal documentation](https://www.pie.design/components/modal/web/)."
} %}

#### Actions

If the modal is used the beginning of the flow, always provide actions for user to start the onboarding tour and skip the tour within the component. This ensures users have full control over their onboarding experience and they can skip or exit the process at any point without feeling constrained.

{% contentPageImage {
src:"../../../assets/img/patterns/onboarding-and-guided-tour/web/overview-modal-actions-1.svg",
alt: "Example of a modal with actions for starting and skipping the onboarding tour.",
width: 120
} %}

When a modal is used between steps, connecting the onboarding journey, providing actions allows users to easily navigate back and forth as needed. This flexibility gives users more control over their journey, enabling them to review previous steps or adjust their choices without losing progress.

{% contentPageImage {
src:"../../../assets/img/patterns/onboarding-and-guided-tour/web/overview-modal-actions-2.svg",
alt: "Example of a modal with actions for navigating between steps in the onboarding tour.",
width: 120
} %}

#### Assets

Imagery or other assets are great for emphasising the most impactful or valuable tools and features users should explore, especially those not immediately visible in the interface.

{% contentPageImage {
src:"../../../assets/img/patterns/onboarding-and-guided-tour/web/overview-modal-assets.svg",
alt: "Example of a modal with visual assets for enhancing the onboarding experience.",
width: 120
} %}

#### Carousel

In a multi-step flow, a carousel helps users navigate through content in an organized and manageable way. It allows users to view and progress through steps one at a time while maintaining a clear overview of the entire process.

{% contentPageImage {
src:"../../../assets/img/patterns/onboarding-and-guided-tour/web/overview-modal-carousel.svg",
alt: "Example of a modal with a carousel for navigating through steps in the onboarding experience.",
width: 120
} %}

---

## Contextual onboarding options

These are UI elements you can use to enhance the onboarding experience:

### Tooltip

Use a Tooltip to guide users through specific features or highlight particular areas of the interface as they interact with it. Tooltips are most effective when used sparingly and targeted toward features that might not be immediately intuitive.

{% notification {
  type: "neutral",
  message: "Check out the [Tooltip documentation](https://www.pie.design/components/tooltip/)."
} %}

{% notification {
  type: "information",
  message: "The current tooltip component doesn't support all the following features. If required, additional functionality must be handled by pillar engineers."
} %}

{% notification {
  type: "information",
  message: "Spacing within the component can be adjusted based on the content requirements and the overall design layout."
} %}

#### Assets

Adding an illustration or image to a tooltip to make it more visually engaging and fun for the user. This addition helps break down complex information, making it easier to understand.

{% contentPageImage {
src:"../../../assets/img/patterns/onboarding-and-guided-tour/web/contextual-onboarding-tooltip-assets.svg",
alt: "Example of a tooltip with visual assets for enhancing the onboarding experience.",
width: 120
} %}

#### Text style

You can choose the text style that suits the hierarchy and aligns with the overall tooltip design, ensuring consistency and clear communication of information.

{% contentPageImage {
src:"../../../assets/img/patterns/onboarding-and-guided-tour/web/contextual-onboarding-tooltip-text-style.svg",
alt: "Example of a tooltip with different text styles for enhancing the onboarding experience.",
width: 120
} %}

#### Steps indicators

Displaying information such as the current step and total steps helps users understand their progress within the flow.

{% contentPageImage {
src:"../../../assets/img/patterns/onboarding-and-guided-tour/web/contextual-onboarding-tooltip-steps-indicators.svg",
alt: "Example of a tooltip with step indicators for enhancing the onboarding experience.",
width: 120
} %}

#### Actions

Providing additional actions allows users to easily navigate back and forth as needed.

{% contentPageImage {
src:"../../../assets/img/patterns/onboarding-and-guided-tour/web/contextual-onboarding-tooltip-actions.svg",
alt: "Example of a tooltip with actions for enhancing the onboarding experience.",
width: 120
} %}

#### Colour variants

The default tooltip colour is dark, providing good contrast on light backgrounds. However, when tooltips are displayed on dark backgrounds, you can use inverse colour variants to ensure optimal accessibility and readability.

{% notification {
  type: "information",
  message: "When changing colour variants, be mindful of button styles to ensure they remain accessible and maintain the correct visual hierarchy."
} %}

{% contentPageImage {
src:"../../../assets/img/patterns/onboarding-and-guided-tour/web/contextual-onboarding-tooltip-colours-1.svg",
alt: "Example of a tooltip variant with a dark container fill.",
width: 120
} %}

{% contentPageImage {
src:"../../../assets/img/patterns/onboarding-and-guided-tour/web/contextual-onboarding-tooltip-colours-2.svg",
alt: "Example of a tooltip variant with a light container fill.",
width: 120
} %}

#### Close

Try to always give users with the option to exit the tour, for example by adding a "Close" icon button or other options to end the onboarding journey within the component.

{% contentPageImage {
src:"../../../assets/img/patterns/onboarding-and-guided-tour/web/contextual-onboarding-tooltip-close-1.svg",
alt: "Example of a tooltip variant with a close button.",
width: 120
} %}

{% contentPageImage {
src:"../../../assets/img/patterns/onboarding-and-guided-tour/web/contextual-onboarding-tooltip-close-2.svg",
alt: "Example of a tooltip variant with a close button.",
width: 120
} %}

### Spotlight

During a step-by-step or new feature guide, a spotlight can be utilised to direct attention to specific areas, helping the tooltip focus on key elements. This helps guide the user's attention, making it easier to understand the process by highlighting important sections or actions and improving clarity.

Always use spotlight with an overlay to make onboarding elements stand out by minimising distraction.

{% contentPageImage {
src:"../../../assets/img/patterns/onboarding-and-guided-tour/web/contextual-onboarding-tooltip-spotlight-1.svg",
alt: "Example of a tooltip connected to a banner with more visual prominence as it is sitting on an overlay.",
width: 120
} %}

Use spotlight to all elements that are relevant to the specific feature guide, ensuring users have a comprehensive view of the functionality being explained.

{% contentPageImage {
src:"../../../assets/img/patterns/onboarding-and-guided-tour/web/contextual-onboarding-tooltip-spotlight-2.svg",
alt: "Example of a desktop screen with a tooltip being spotlighted on the left side of the screen together with map pin elements spotlighted across a map that's being greyed out by an overlay by an overlay.",
width: 120
} %}

---

## Examples

### LTR examples

Here are some examples of messaging in left-to-right context:

{% contentPageImage {
src:"../../../assets/img/patterns/onboarding-and-guided-tour/web/example-ltr.svg",
alt: "Example of an onboarding tooltip connected to a modal in a desktop web screen LTR context",
width: 120
} %}

### RTL examples

Here are some examples of messaging in right-to-left context:

{% contentPageImage {
src:"../../../assets/img/patterns/onboarding-and-guided-tour/web/example-rtl.svg",
alt: "Example of an onboarding tooltip connected to a modal in a desktop web screen RTL context",
width: 120
} %}
