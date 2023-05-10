---
eleventyNavigation:
    key: Accessibility overview
    parent: Accessibility
    order: 1
title: Accessibility overview
description: In this section you’ll find useful information about accessibility and why it is important at JustEatTakeaway.com
---

## Introduction

Welcome to the **Accessibility** section of PIE design system’s documentation site. Our goal is to make our platforms better for everyone by creating inclusive and user-friendly products. We are committed to accessibility based on the principles of universal design and inclusivity.

{% contentPageImage {
    src:"../../../assets/img/accessibility/accessibility-overview/accessibility-introduction.svg",
    mobileSrc:"../../../assets/img/accessibility/accessibility-overview/accessibility-introduction_narrow.svg",
    caption: "Inclusive design is better design for everyone, no user should be excluded because of disability."
} %}

---

## Why is accessibility important?

Just as a good recipe caters to the diverse tastes and dietary needs of all diners, a design system that incorporates accessibility ensures that all users, **regardless of their abilities or disabilities**, can access and use digital products and services.

Incorporating accessibility into a design system can lead to a **better user experience, increased engagement**, and **increased customer loyalty**.

Finally, it’s important to highlight that designing with accessibility in mind can help organisations comply with accessibility standards and regulations, avoiding **legal and financial consequences**.

---

## How we build inclusive experiences

Using our components is a way to improve accessibility and consistency when building products for JustEatTakeaway.com.

The component library in this documentation site includes code that we can use across applications, and this code includes **accessible markup**. Since the code exists in a single component that gets reused, it's easier to update and fix any bugs.

The build-it-once, use-it-everywhere model means the **accessibility knowledge** of the designers and developers who build these components is available to all of JET and our partners.

Many accessibility features come free in the components, but it's important to make sure that components are integrated in a way that doesn't create **unforeseen accessibility barriers**. Depending on how components are used, there may be more design and implementation considerations.

---

## Assistive technology support

Our components are tested for accessibility with automated and manual techniques. Users should expect to be able to access features built with our components using **modern assistive technologies**, including native and **third-party tools** like screen readers, speech recognition programs, supports for low vision and colour blindness, alternative keyboards, switch devices, and tools for readability.

---

## Meeting global accessibility guidelines

PIE is built to meet the Web Content **Accessibility Guidelines (WCAG)** 2.1 Level A and Level AA success criteria.

In addition to meeting the previously mentioned accessibility guidelines, we also strive to provide a highly usable experience for everyone. Our goal is to make it easy for everyone to use our components, whether they have a disability or not.

To learn more about the guidelines we adhere to, check out these resources:

{% card {
  items: [
        {
          linkText: "Inclusion, Diversity & Belonging at JET",
          href: "https://kitchen.just-eat.com/home/inclusion-diversity-belonging-at-jet-update",
          src: "../../../assets/img/accessibility/accessibility-overview/jet-guidelines.svg",
          shouldOpenInNewTab: true
        },
        {
          linkText: "Introduction to web accessibility",
          href: "https://www.w3.org/WAI/fundamentals/accessibility-intro/",
          src: "../../../assets/img/accessibility/accessibility-overview/w3c-guidelines.svg"
        },
        {
          linkText: "WCAG 2.1 guidelines",
          href: "https://www.w3.org/WAI/standards-guidelines/wcag/",
          src: "../../../assets/img/accessibility/accessibility-overview/wcag-guidelines.svg"
        }
    ]
} %}

<!-- {% notification {
  type: "information",
  message: "You can find more useful links in our [accessibility resources](/accessibility/accessibility-resources) section."
} %} -->
<!--  TODO: Remove comment when page is ready -->


