---
eleventyNavigation:
    key: Guidance
    parent: 'Haptic Feedback'
    order: 2
shouldShowContents: true
---

## About our haptic feedback types

Our entire range of haptic feedback options relies on the system-default haptics provided by Apple in accordance with their [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines).

{% notification {
  type: "warning",
  message: "Please note that our default haptic feedback types **cannot be overridden or altered**."
} %}

---

## Soft haptic feedback

Soft haptic feedback can serve various purposes in order to enhance the overall user experience in a subtle and nuanced manner.

{% contentPageImage {
  src:"../../../../assets/img/patterns/haptic-feedback/soft-haptic-feedback.svg",
  alt: "An illustration that represents a single haptic pulse of a specific duration and strength by showing a bar of a specific size. This particular pattern represents a soft impact.",
  width: "344px"
} %}

#### Where can I use soft haptic feedback?

{% list {
    type: listTypes.icon,
    iconName: "check-circle",
    items: [
        "**Button presses:** Provide a gentle confirmation for various button presses to acknowledge user input without being intrusive.",
        "**Toggle and state changes:** Convey changes in toggle switches or activation of different states in the UI with a moderately pronounced haptic sensation.",
        "**Dynamic adjustments:** Provide users with tactile feedback when making dynamic adjustments, such as using sliders, to indicate significant changes.",
        "**Non-critical notifications:** Use soft haptic feedback for non-critical notifications to gently alert users without causing disruption.",
        "**Subtle transitions:** Enhance subtle transitions or animations between UI elements for a smooth and cohesive experience.",
        "**Incremental adjustments:** Offer soft haptic feedback for incremental adjustments, like scrolling or volume control, to provide a sense of granularity."
    ]
} %}

---

## Medium haptic feedback

Medium-intensity haptic feedback can convey a sense of importance and grab the user's attention. A good example of this might be the haptic feedback that occurs when a user navigates to a new screen, commonly known as a "screen transition haptic", which is designed to provide a tactile confirmation of the navigation action.

{% contentPageImage {
  src:"../../../../assets/img/patterns/haptic-feedback/medium-haptic-feedback.svg",
  alt: "An illustration that represents a single haptic pulse of a specific duration and strength by showing a bar of a specific size. This particular pattern represents a medium impact.",
  width: "344px"
} %}

#### Where can I use medium haptic feedback?

{% list {
    type: listTypes.icon,
    iconName: "check-circle",
    items: [
        "**Important actions:** Reinforce the significance of actions such as submitting a form, making a purchase, or saving changes with a medium level of haptic feedback.",
        "**Gesture recognition:** Use medium haptic feedback to confirm the recognition of gestures, such as pinch-to-zoom or swipe gestures."
    ]
} %}

---

## Success haptic feedback

A medium-intensity haptic response used to highlight the confirmation of an action. You can use it for the successful submission of a form or completion of a task, providing users with a reassuring response.

{% contentPageImage {
  src:"../../../../assets/img/patterns/haptic-feedback/success-haptic-feedback.svg",
  alt: "An illustration that represents a series of two haptic pulses of various durations and strengths by showing bars of different sizes. This particular pattern represents a success.",
  width: "344px"
} %}

#### Where can I use success haptic feedback?

{% list {
    type: listTypes.icon,
    iconName: "check-circle",
    items: [
        "**Task completion:** Use success haptic feedback to celebrate the successful completion of a task or operation, providing positive reinforcement.",
        "**Confirmation of positive events:** Accompany positive events, such as successful transactions or the completion of a level in a game, with success haptic feedback.",
        "**Goal achievement:** Celebrate users reaching specific milestones or goals within an app or gamified experience with success haptic feedback."
    ]
} %}

---

## Warning haptic feedback

They can be strategically used in various scenarios where it's essential to alert users to critical information or potential issues that demand their attention before they actually happen.

{% contentPageImage {
  src:"../../../../assets/img/patterns/haptic-feedback/warning-haptic-feedback.svg",
  alt: "An illustration that represents a series of two haptic pulses of various durations and strengths by showing bars of different sizes. This particular pattern represents a warning.",
  width: "344px"
} %}

#### Where can I use warning haptic feedback?

{% list {
    type: listTypes.icon,
    iconName: "check-circle",
    items: [
        "**Alerts and warnings:** Use warning haptic feedback to highlight critical information or alerts that require users' attention but are not urgent.",
        "**Potential issues:** Signal potential issues or warnings that users need to be aware of, such as incomplete form entries or system warnings.",
        "**Near limits:** Provide warning haptic feedback when users are approaching or exceeding certain limits, such as character count or storage capacity."
    ]
} %}

---

## Error haptic feedback

A strong, noticeable vibration. You can use this when an error occurs or an invalid action is attempted, signalling to the user that corrective action is needed.

{% contentPageImage {
  src:"../../../../assets/img/patterns/haptic-feedback/error-haptic-feedback.svg",
  alt: "An illustration that represents a series of four haptic pulses of various durations and strengths by showing bars of different sizes. This particular pattern represents an error.",
  width: "344px"
} %}

#### Where can I use error haptic feedback?

{% list {
    type: listTypes.icon,
    iconName: "check-circle",
    items: [
        "**Critical errors:** Accompany critical errors or issues that require immediate attention with an intense error haptic feedback.",
        "**Validation failures:** Use error haptic feedback for validation failures, indicating to users that their input needs correction before proceeding.",
        "**Loss of critical data:** Use error haptic feedback when there is a risk of losing critical data or when irreversible actions are about to be taken.",
        "**Security breaches:** Signal security breaches or unauthorised access attempts with an error haptic feedback."
    ]
} %}
