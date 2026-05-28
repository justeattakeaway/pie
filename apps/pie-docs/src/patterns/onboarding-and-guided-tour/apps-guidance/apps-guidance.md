---
eleventyNavigation:
    key: Apps
    parent: 'Onboarding and Guided Tour'
    order: 2
shouldShowContents: true
permalink: patterns/onboarding-and-guided-tour/apps-guidance/
---

# Onboarding & guided tour

Onboarding and guided tour patterns are essential tools for welcoming new users to a product or introducing existing users to new features.

## Overview

The onboarding and guided tour pattern aim to create a smooth and engaging first interaction, helping users understand the core functionalities, value propositions, or changes within the system. By providing a clear, step-by-step guide, these patterns reduce friction, improve user confidence, and foster a positive experience from the very beginning.

## Purpose

Onboarding can be designed using two approaches, depending on the purpose:

### Overview onboarding

Overview onboarding provides a high-level introduction to the product or a new feature set. It helps users understand the broader context of the system, setting expectations and aligning them with the key goals of the onboarding process.

### Contextual onboarding

Contextual onboarding offers a step-by-step guidance tied directly to specific features or actions. It delivers assistance as users interact with the interface, ensuring help is timely and relevant without overwhelming them.

## Overview onboarding

These are UI elements you can use to enhance the onboarding experience:

### Alert (iOS) / Dialog (Android)

Use an alert / dialog when you need to provide users with a high-level introduction to the onboarding process or summarise what they can expect to learn. It works best at the beginning of the flow or pairs effectively with subsequent tooltip steps.

Don't use Alert modal for multi-step flows. Use Full screen sheet / Screen instead.

Check out the Alert (iOS) / Dialog (Android) documentation.

#### Actions

When an alert / dialog is used at the beginning of the flow, always provide actions for user to start the onboarding tour and skip the tour within the component. This ensures users have full control over their onboarding experience and they can skip or exit the process at any point without feeling constrained.

When an alert / dialog is used between steps, connecting the onboarding journey, providing actions allows users to easily navigate back and forth as needed. This flexibility gives users more control over their journey, enabling them to review previous steps or adjust their choices without losing progress.

#### Assets

Imagery or other assets are great for emphasising the most impactful or valuable tools and features users should explore, especially those not immediately visible in the interface.

### Full screen sheet (iOS) / Screen (Android)

A full screen sheet / screen provides a high-level introduction to the product or feature while occupying the entire screen. It provides users with a focused, immersive onboarding experience. A full screen sheet is especially useful for showcasing overall key features of a product or system or presenting multi-step processes where users need to complete a sequence of actions or when introducing multiple, interconnected features that require a comprehensive explanation.

#### Carousel

In a multi-step flow, a carousel helps users navigate through content in an organized and manageable way. It allows users to view and progress through steps one at a time while maintaining a clear overview of the entire process.

**Carousel is not currently built into iOS or Android - reach out to PIE for alternatives or to contribute.**

#### Assets

A full-screen sheet or screen is ideal for accommodating more complex content or rich imagery. It provides sufficient space to present detailed information, visual elements, or interactive components without overwhelming the user.

## Contextual onboarding

These are UI elements you can use to enhance the onboarding experience:

### Tooltip

Use a Tooltip to guide users through specific features or highlight particular areas of the interface as they interact with it. Tooltips are most effective when used sparingly and targeted toward features that might not be immediately intuitive.

Check out the Tooltip documentation.

The current tooltip component doesn't support all the following features. If required, additional functionality must be handled by pillar engineers.

Spacing within the component can be adjusted based on the content requirements and the overall design layout.

#### Assets

Adding an illustration or image to a tooltip to make it more visually engaging and fun for the user. This addition helps break down complex information, making it easier to understand.

#### Text style

You can choose the text style that suits the hierarchy and aligns with the overall design system, ensuring consistency and clear communication of information.

#### Steps indicators

Displaying information such as the current step and total steps helps users understand their progress within the flow.

#### Actions

Providing additional actions allows users to easily navigate back and forth as needed.

#### Colour variants

The default tooltip colour is dark, providing good contrast on light backgrounds. However, when tooltips are displayed on dark backgrounds, you can use inverse colour variants to ensure optimal accessibility and readability.

When changing colour variants, be mindful of button styles to ensure they remain accessible and maintain the correct visual hierarchy.

#### Close

Try to always give users with the option to exit the tour, for example by adding a "Close" icon button or other options to end the onboarding journey within the component.

### Spotlight

During a step-by-step guide, the spotlight feature can be utilised to direct attention to specific areas, helping the tooltip focus on key elements. This helps guide the user's attention, making it easier to understand the process by highlighting important sections or actions and improving clarity.

Always use spotlight with an overlay to make onboarding elements stand out by minimising distraction.

Use spotlight to all elements that are relevant to the specific feature guide, ensuring users have a comprehensive view of the functionality being explained.

### Bottom sheet

A bottom sheet provides a non-intrusive way to deliver contextual information or actions. This component is well-suited for specific steps within a user's flow or when triggered by user interactions. It is particularly effective for single-step interactions that require focused instructions or quick actions without involving multi-step processes.

Check out the Bottom sheet documentation.

#### Single action

A bottom sheet should focus on a specific feature or action within the user's flow. It should not include navigation elements, carousels, or multiple actions—only a single, clear action.

## Examples

### LTR examples

Here are some examples of messaging in left-to-right context:

### RTL examples

Here are some examples of messaging in right-to-left context:

---

Download the markdown file: apps_onboarding_guided_tour_v1.md
