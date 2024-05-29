---
eleventyNavigation:
    key: Overview
    parent: Motion
    order: 1
eleventyComputed:
    principlesData: "{% include './motion-principles.json' %}"
---
## Introduction

Thoughtful and appropriate motion in design can greatly enhance the user’s experience and make our products feel professional and enjoyable. There are two ways we categorise motion in our design system: functional and expressive.

Functional motion refers to that which we use as default in our UI elements to provide an enhanced experience. Expressive motion refers to motion that is more exaggerated and playful.

The objectives of these guidelines is to provide guidance for using motion in our UI elements, and to empower designers to design with motion in mind so that we can evoke an emotive experience.

---

## Principles

These principles serve as a guide when using motion in our products.

{% mediaElementList {
    data: principlesData
} %}

---

## How we use motion

#### Do’s & Don’ts

{% usage {
do: {
  type: usageTypes.list,
  items: [
    "Apply motion effects that are contextually relevant to the task at hand.",
    "Ensure that motion effects do not slow down the user or hinder task completion.",
    "Keep animations and transitions at an appropriate speed to maintain a sense of efficiency.",
    "Ensure easing is always used to create smooth and natural motion."
  ]
},
dont: {
  type: usageTypes.list,
  items: [
    "Use motion for the sake of it, motion should always have a clear purpose or intent and contribute to the user experience.",
    "Use motion excessively, avoid overwhelming users with excessive or distracting motion.",
    "Use motion inconsistently, which can confuse users and reduce predictability."
  ]
}
} %}

---

## Accessibility

We must also provide options for transitions without animation that retain context and meaning to the user so that reduced motion can be applied for users that are sensitive or averse to motion.

