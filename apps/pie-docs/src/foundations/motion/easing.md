---
eleventyNavigation:
    key: Easing
    parent: Motion
    order: 3
---
## Overview

Easing controls the acceleration and deceleration of elements in motion. When paired with timing it allows us to create realistic and natural movements that mimic real-world physics and feel smooth and organic to the user.

Easing can be categorised by three different types of movement; Entrance, Exit and Persistent. Entrance and Exit relate to the object entering and exiting from view, whilst Persistent movement remains in view. We use functional and expressive persistent easing to differentiate between functional and expressive motion.

Motion that does not have easing applied is described as linear. Meaning that it goes from A to B without any acceleration or deceleration. This can feel unnatural to users.

---

## Entrance Easing (easing-out)

Entrance easing describes the deceleration of motion as it enters from off the screen. Objects that enter from off the screen (such as Toast) will move in quickly before slowing down to a gentle stop. This mimics real-life physics where objects in motion slow down to a halt rather just stop instantaneously.

{% contentPageImage {
src:"../../../../assets/img/foundations/motion/easing/easing-out.svg",
alt: "Graph showing the deceleration of motion with an ease-out curve.",
width: "250px"
} %}

---

## Exit Easing (easing-in)

Exit easing describes the acceleration of motion as it exits the screen. Objects that leave the screen (such as Toast) will move slowly before getting faster as they exit. This mimics real-life physics where objects in motion take time to get up to speed from a stationary position. Exit easing should be used for objects that are off screen permanently. In cases where elements need to be recalled again default easing should be used so that the object appears as if it is just off screen to the user.

{% contentPageImage {
src:"../../../../assets/img/foundations/motion/easing/easing-in.svg",
alt: "Graph showing the acceleration of motion with an ease-in curve.",
width: "250px"
} %}

---

## Persistent

### Functional easing

Persistent functional easing describes the acceleration and deceleration of motion, this is used for elements that are persistent on screen and transition from A-B in sight of the user. This mimics real-life physics where objects take time to speed up from stationary but also take time to slow down to a halt. We use functional easing over expressive easing for motion that serves a functional purpose in our design system, the majority of our core components use functional easing.

{% contentPageImage {
src:"../../../../assets/img/foundations/motion/easing/easing-functional.svg",
alt: "Graph showing the acceleration and deceleration of motion with an ease-in-and-out curve.",
width: "250px"
} %}

