---
eleventyNavigation:
    key: Apps
    parent: 'Onboarding and Guided Tour'
    order: 2
shouldShowContents: true
permalink: patterns/onboarding-and-guided-tour/apps-guidance/
---

## Overview

The onboarding and guided tour pattern aim to create a smooth and engaging first interaction, helping users understand the core functionalities, value propositions, or changes within the system. By providing a clear, step-by-step guide, these patterns reduce friction, improve user confidence, and foster a positive experience from the very beginning.

The onboarding and guided tour pattern aims to create a smooth and engaging first interaction, helping users understand the core functionalities, value propositions, or changes within the system. By providing a clear, step-by-step guide, these patterns reduce friction, improve user confidence, and foster a positive experience from the very beginning.

{% contentPageImage {
src:"../../../assets/img/patterns/onboarding-and-guided-tour/apps/overview.svg",
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
src:"../../../assets/img/patterns/onboarding-and-guided-tour/apps/decision-tree.svg",
alt: "Decision tree for selecting onboarding components in apps, including overview and contextual routes based on intro type, multi-step flow, and whether steps are connected.",
width: 120
} %}

---

## Overview onboarding options

These are UI elements you can use to enhance the onboarding experience:

### Alert (iOS) / Dialog (Android)

Use an alert / dialog when you need to provide users with a high-level introduction to the onboarding process or summarise what they can expect to learn. It works best at the beginning of the flow or pairs effectively with subsequent tooltip steps.

{% notification {
  type: "warning",
  message: "Don't use Alert modal for multi-step flows. Use Full screen sheet / Screen instead."
} %}

{% notification {
  type: "neutral",
  message: "Check out the [Alert (iOS) / Dialog (Android) documentation](/components/modal/)."
} %}

#### Actions

When an alert / dialog is used at the beginning of the flow, always provide actions for user to start the onboarding tour and skip the tour within the component. This ensures users have full control over their onboarding experience and they can skip or exit the process at any point without feeling constrained.

{% contentPageImage {
src:"../../../assets/img/patterns/onboarding-and-guided-tour/apps/overview-modal-actions-1.svg",
alt: "Overview modal actions for onboarding components in apps, including start and skip actions.",
width: 120
} %}

When an alert / dialog is used between steps, connecting the onboarding journey, providing actions allows users to easily navigate back and forth as needed. This flexibility gives users more control over their journey, enabling them to review previous steps or adjust their choices without losing progress.

{% contentPageImage {
src:"../../../assets/img/patterns/onboarding-and-guided-tour/apps/overview-modal-actions-2.svg",
alt: "Overview modal actions for onboarding components in apps, including back and next actions.",
width: 120
} %}

#### Assets

Imagery or other assets are great for emphasising the most impactful or valuable tools and features users should explore, especially those not immediately visible in the interface.

{% contentPageImage {
src:"../../../assets/img/patterns/onboarding-and-guided-tour/apps/overview-modal-assets.svg",
alt: "Overview modal assets for onboarding components in apps, including imagery and other visual elements.",
width: 120
} %}

### Full screen sheet (iOS) / Screen (Android)

A full screen sheet / screen provides a high-level introduction to the product or feature while occupying the entire screen. It provides users with a focused, immersive onboarding experience. A full screen sheet is especially useful for showcasing overall key features of a product or system or presenting multi-step processes where users need to complete a sequence of actions or when introducing multiple, interconnected features that require a comprehensive explanation.

#### Carousel

In a multi-step flow, a carousel helps users navigate through content in an organized and manageable way. It allows users to view and progress through steps one at a time while maintaining a clear overview of the entire process.

{% notification {
  type: "information",
  message: "Carousel is not currently built into iOS or Android - reach out to PIE for alternatives or to contribute."
} %}

{% contentPageImage {
src:"../../../assets/img/patterns/onboarding-and-guided-tour/apps/overview-modal-fullscreen-carousel.svg",
alt: "Overview modal fullscreen carousel for onboarding components in apps, including imagery and other visual elements.",
width: 120
} %}

#### Assets

A full-screen sheet or screen is ideal for accommodating more complex content or rich imagery. It provides sufficient space to present detailed information, visual elements, or interactive components without overwhelming the user.

{% contentPageImage {
src:"../../../assets/img/patterns/onboarding-and-guided-tour/apps/overview-modal-fullscreen-assets.svg",
alt: "Overview modal fullscreen assets for onboarding components in apps, including imagery and other visual elements.",
width: 120
} %}

---

## Contextual onboarding options

These are UI elements you can use to enhance the onboarding experience:

### Tooltip

Use a Tooltip to guide users through specific features or highlight particular areas of the interface as they interact with it. Tooltips are most effective when used sparingly and targeted toward features that might not be immediately intuitive.

{% notification {
  type: "neutral",
  message: "Check out the [Tooltip documentation](/components/tooltip/)."
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
src:"../../../assets/img/patterns/onboarding-and-guided-tour/apps/contextual-tooltip-assets.svg",
alt: "Example of a tooltip with visual assets for enhancing the onboarding experience.",
width: 120
} %}

#### Text style

You can choose the text style that suits the hierarchy and aligns with the overall design system, ensuring consistency and clear communication of information.

{% contentPageImage {
src:"../../../assets/img/patterns/onboarding-and-guided-tour/apps/contextual-tooltip-text.svg",
alt: "Example of a tooltip with different text styles for enhancing the onboarding experience.",
width: 120
} %}

#### Steps indicators

Displaying information such as the current step and total steps helps users understand their progress within the flow.

{% contentPageImage {
src:"../../../assets/img/patterns/onboarding-and-guided-tour/apps/contextual-tooltip-steps.svg",
alt: "Example of a tooltip with step indicators for enhancing the onboarding experience.",
width: 120
} %}

#### Actions

Providing additional actions allows users to easily navigate back and forth as needed.

{% contentPageImage {
src:"../../../assets/img/patterns/onboarding-and-guided-tour/apps/contextual-tooltip-actions.svg",
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
src:"../../../assets/img/patterns/onboarding-and-guided-tour/apps/contextual-tooltip-colour-1.svg",
alt: "Example of a tooltip variant with a dark container fill.",
width: 120
} %}

{% contentPageImage {
src:"../../../assets/img/patterns/onboarding-and-guided-tour/apps/contextual-tooltip-colour-2.svg",
alt: "Example of a tooltip variant with a light container fill.",
width: 120
} %}

#### Close

Try to always give users with the option to exit the tour, for example by adding a "Close" icon button or other options to end the onboarding journey within the component.

{% contentPageImage {
src:"../../../assets/img/patterns/onboarding-and-guided-tour/apps/contextual-tooltip-close-1.svg",
alt: "Example of a tooltip variant with a close button.",
width: 120
} %}

{% contentPageImage {
src:"../../../assets/img/patterns/onboarding-and-guided-tour/apps/contextual-tooltip-close-2.svg",
alt: "Example of a tooltip variant with a close button.",
width: 120
} %}

### Spotlight

During a step-by-step guide, the spotlight feature can be utilised to direct attention to specific areas, helping the tooltip focus on key elements. This helps guide the user's attention, making it easier to understand the process by highlighting important sections or actions and improving clarity.

{% notification {
  type: "information",
  message: "Always use spotlight with an overlay to make onboarding elements stand out by minimising distraction."
} %}

{% contentPageImage {
src:"../../../assets/img/patterns/onboarding-and-guided-tour/apps/contextual-spotlight-1.svg",
alt: "Example of a tooltip connected to a banner with more visual prominence as it is sitting on an overlay.",
width: 120
} %}

Use spotlight to all elements that are relevant to the specific feature guide, ensuring users have a comprehensive view of the functionality being explained.

{% contentPageImage {
src:"../../../assets/img/patterns/onboarding-and-guided-tour/apps/contextual-spotlight-2.svg",
alt: "Example of a desktop screen with a tooltip being spotlighted on the left side of the screen together with map pin elements spotlighted across a map that's being greyed out by an overlay.",
width: 120
} %}

### Bottom sheet

A bottom sheet provides a non-intrusive way to deliver contextual information or actions. This component is well-suited for specific steps within a user's flow or when triggered by user interactions. It is particularly effective for single-step interactions that require focused instructions or quick actions without involving multi-step processes.

{% notification {
  type: "neutral",
  message: "Check out the [Bottom sheet documentation](/components/bottom-sheet/)."
} %}

#### Single action

A bottom sheet should focus on a specific feature or action within the user's flow. It should not include navigation elements, carousels, or multiple actions—only a single, clear action.

{% contentPageImage {
src:"../../../assets/img/patterns/onboarding-and-guided-tour/apps/contextual-bottom-sheet-action.svg",
alt: "Example of a bottom sheet with a single action.",
width: 120
} %}

---

## Examples

### LTR examples

Here are some examples of messaging in left-to-right context:

{% contentPageImage {
src:"../../../assets/img/patterns/onboarding-and-guided-tour/apps/example-ltr.svg",
alt: "Example of a mobile screen with a tooltip being spotlighted together with a banner and the rest of the content is being greyed out by an overlay.",
width: 120
} %}

### RTL examples

Here are some examples of messaging in right-to-left context:

{% contentPageImage {
src:"../../../assets/img/patterns/onboarding-and-guided-tour/apps/example-rtl.svg",
alt: "Example of a mobile screen with a tooltip being spotlighted together with a banner and the rest of the content is being greyed out by an overlay with written content in Hebrew.",
width: 120
} %}
