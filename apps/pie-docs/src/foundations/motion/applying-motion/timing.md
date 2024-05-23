---
eleventyNavigation:
    key: Timing
    parent: Applying Motion
    order: 1
---
## Overview

Timing refers to the length of time that an interaction takes place. It’s important that motion timing is not so fast that the user can’t process the interaction, but not so slow that the user is waiting longer than necessary, which can make the UI feel unresponsive.

In our design system we use 100ms, 150ms, 200ms, 250ms, 300ms and 350ms timings for elements.

Timing is used in conjunction with easing to create natural and smooth movements.

---

## Timing, Size & Distance

Both the size of the element and the distance the element travels during the interaction should be taken into account when applying timing to motion. Smaller UI elements that appear lighter should mimic real-life physics by feeling quick and responsive, whilst larger UI elements that appear heavier should mimic real-life physics by moving slower due to their volume and mass. Objects that don’t travel very far should get from A to B quicker, than objects that travel longer distances (such as page level actions).

### Short: 100ms, 150ms

Short timings should be reserved for small sized UI elements that supply immediate feedback to the user and cover very little distance such as carousel indicators or checkboxes.

### Medium: 200ms - 250ms

Medium timings between 200ms and 250ms should be used for the majority of UI elements in our design system for smooth and clear animations that don’t feel so quick they are unrecognisable, but aren’t so slow that they UI feels slow or unresponsive.

### Long: 300 - 350ms

Long timings of 300-350ms should be reserved for the largest sized UI elements that transition at a page level. These are components such as modal, side sheet and bottom sheet.

### Extra long: 400ms +

We don’t use 400ms or above for any functional events, such as component transitions, as they start to feel slow and unresponsive for users which can be be frustrating. We do however, use durations of over 400ms for our animated icons and animated illustrations which need to feel more expressive and often communicate a short narrative to the user - these are not tokenised in our design system.

---

## Entrance & Exit Timings

With elements that have enter & exit states such as message type components like Toast and Banner, or components like Dropdown and Accordion that expand and collapse, elements should exit the user view slightly quicker than when they appeared. This is because once the element has served it’s purpose to the user it is no longer needed.

---

## Delay Timings

Timings can be used to delay an element from starting a transition, we do this so that we can choreograph multiple elements that animate within the same component or page view. In a component like the Accordion a delay is used so that we that the user can comprehend the container opening before the information is revealed instead of all at once.


