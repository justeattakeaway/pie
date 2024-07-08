---
eleventyNavigation:
    key: Overview
    parent: 'Haptic Feedback'
    order: 1
shouldShowContents: true
permalink: patterns/haptic-feedback/
---


## What are haptics?

Haptics refer to the incorporation of tactile feedback into user interfaces to enhance the overall user experience. It involves the use of touch-based sensations, such as vibrations or pulses, in response to user interactions with our products.

By integrating haptic feedback, we aim to provide users with a more intuitive and engaging interaction, making the digital experience feel more tangible and responsive.

{% contentPageImage {
  src:"../../../assets/img/patterns/haptic-feedback/overview-desktop.svg",
  mobileSrc: "../../../assets/img/patterns/haptic-feedback/overview-mobile.svg",
  alt: "Illustration of a mobile device surrounded by shapes that indicate vibration."
} %}

---

## Best practices

Here are some best practices when adding haptic feedback to your apps:

### Understand user expectations

Familiarise yourself with system-provided haptic patterns and their meanings. Users often associate specific haptic feedback with particular interactions, so aligning with these expectations enhances usability.

### Use system-provided patterns

Leverage built-in haptic patterns provided by the operating system for standard interactions like toggles, sliders, and pickers. This ensures a consistent experience across the platform and makes your app more intuitive.

### Be consistent

Establish a clear and causal relationship between haptic feedback and user actions. Consistency helps users associate specific haptic patterns with particular experiences, reinforcing the cause-and-effect relationship.

### Complement other types of feedback

Ensure that haptic feedback complements visual and auditory cues in your app. Harmonising these elements creates a more coherent and natural user experience. Match the intensity and timing of haptic feedback with accompanying animations or sounds.

### Don’t overuse

Overusing haptic feedback can lead to a diminished impact or even annoyance. Conduct user testing to find a balance that enhances the user experience without becoming intrusive.

---

## Working with haptics

In this section you’ll find everything you should know about how to communicate haptic feedback points with your team.

### Who’s responsible for adding haptic feedback points?

It is the designer’s responsibility to indicate which interactions should provide haptic feedback and where (and why) should they occur. If you’re unsure about our types of haptic feedback, please check the [guidance](/patterns/haptic-feedback/guidance/) section, which outlines our different types of haptic feedback presets.

### How do I share haptic interactions with development?

Ensure that you provide annotations or include comments specifically directed to the engineers involved in your project. Clearly indicate the locations where haptic feedback is intended and specify the type of haptic feedback to be implemented.

