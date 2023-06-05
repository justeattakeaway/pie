---
eleventyNavigation:
    key: Testing for accessibility
    parent: Accessibility
    order: 2
title: Testing for accessibility
description: Find out more about how we test for accessibility and ensure that our products meet accessibility standards.
---

## Why do we need to test for accessibility?

At JET we understand that accessibility is crucial when it comes to designing and building products. We are aiming for our products and services to meet at least **level AA** of the **Web Content Accessibility Guidelines 2.1 (WCAG)**. To achieve this, it's essential that you consider accessibility at the start of a project and run accessibility tests regularly throughout the design process.

We offer guidance on the different types of accessibility testing that should be used in your projects. We recommend a **mixture of automated**, **manual**, and **user testing methods** to ensure that most accessibility issues can be detected.

{% contentPageImage {
    src:"../../../assets/img/accessibility/testing-for-accessibility/aa-wcag.svg",
    mobileSrc:"../../../assets/img/accessibility/testing-for-accessibility/aa-wcag_narrow.svg",
    caption: "Our products should meet the AA level of WCAG 2.1’s accessibility guidelines."
} %}

---

## Automated testing

We use automated testing tools to audit our products for WCAG compliance, ensuring we follow best practices seamlessly.

We estimate that **automated testing can detect a large number of common WCAG issues**. Automated testing also gives your team more time to focus on the more complex accessibility tests that need to be completed manually.

We recommend using tools such as Deque’s [axe-core](https://www.deque.com/axe/) for the web, [Google’s Toolbox for Accessibility for iOS](https://github.com/google/GTXiLib) (GTXiLib), or [Google’s Accessibility Test Framework for Android](https://github.com/google/Accessibility-Test-Framework-for-Android) (ATF) for automated testing.

{% notification {
  type: "information",
  message: "Please [reach out to us](/support/contact-us/) if you need help integrating these tools."
} %}

It’s important to note that whilst automated accessibility tests are a great step towards providing an accessible application, **they do not guarantee that your app is accessible to real users**.

Some of the issues that automated checks don’t usually cover are:
- Correct reading order of content
- Appropriate use of HTML
- Good keyboard navigation experience
- Useful image captions and alt text
- Cognitive accessibility

{% notification {
  type: "warning",
  message: "Automated tests should always be used in combination with a variety of manual test methods."
} %}

---

## Manual testing

For manual accessibility testing, we recommend referring to a comprehensive [accessibility checklist](https://www.a11yproject.com/checklist/) for web products to help you test for common accessibility barriers.

**The A11y Project checklist** provides an excellent resource that includes items such as checking for proper colour contrast, keyboard accessibility, and the correct use of descriptive text and alt attributes for images. This checklist can serve as a good foundation for testing the accessibility of your product.

{% notification {
  type: "information",
  message: "You can use The A11y Project’s [accessibility checklist](https://www.a11yproject.com/checklist/) as a main resource to manually test your products."
} %}

{% contentPageImage {
    src:"../../../assets/img/accessibility/testing-for-accessibility/checklist.svg",
    mobileSrc:"../../../assets/img/accessibility/testing-for-accessibility/checklist_narrow.svg",
    width: "650px",
    caption: "The image above shows a screenshot of The A11y Project checklist landing page."
} %}

### Screen reader testing

We use screen reader testing to evaluate the accessibility of our digital products for **people who prefer to interact with our products using narration**. We use assistive technologies which convert on-screen content into synthesised speech or Braille output, enabling those users to access and interact with our digital content.

The goal of screen reader testing is to **ensure that our products are properly designed and coded to be compatible with screen readers**, providing an inclusive user experience for individuals with those needs.

#### How we carry out screen reader testing

To carry out screen reader testing we use popular screen reader software such as [Non Visual Desktop Access](https://www.nvaccess.org/about-nvda/) (NVDA) and [Apple Voiceover](https://support.apple.com/en-gb/guide/voiceover/welcome/mac) for desktop products. For mobile products, we use [TalkBack](https://support.google.com/accessibility/android/answer/6283677?hl=en-GB) and [Apple Voiceover](https://support.apple.com/en-gb/guide/voiceover/welcome/mac).

Below are some important factors we test when conducting screen reader testing:

{% list {
    type: listTypes.icon,
    iconName: "check-circle",
    iconFill: "support-positive",
    items: [
        "**Compatibility**: The screen reader should be able to navigate through the content, read the text, and interact with the controls.",
        "**Navigation and Focus**: The screen reader should be able to properly navigate through our product using keyboard commands, landmarks, headings, and other navigation techniques.",
        "**Reading Order**: The screen reader should read content in a logical and meaningful order. It should follow the intended reading order, especially for complex layouts with multiple columns, tables, or responsive designs.",
        "**Alternative Text (Alt Text)**: Images should have appropriate alternative text descriptions (alt text) to provide meaningful information to visually impaired users. We verify that alt text is available and properly announced by the screen reader when images are encountered.",
        "**Form Accessibility**: We ensure that form elements, labels, and error messages are properly associated and announced.",
        "**ARIA Roles and Attributes**: We use [Accessible Rich Internet Applications](https://www.w3.org/WAI/standards-guidelines/aria/) (ARIA) roles and attributes to enhance the accessibility of dynamic and interactive elements. We use screen reader testing to verify that ARIA roles and attributes are correctly implemented and announced by the screen reader, providing additional context and functionality.",
        "**Multimedia Accessibility**: Screen reader testing also involves assessing the accessibility of multimedia elements, such as audio and video. We use it to ensure that appropriate alternative text or captions are provided for multimedia content."
    ]
} %}

---

## Testing using Applause

We have partnered with [Applause](https://www.applause.com/), a third-party crowdsourcing company, to help us with accessibility testing through a contract.

Through this partnership, we can arrange **ad-hoc specialised audits**, conducted by trained accessibility testers from Applause, for both new and existing features. By doing this, we can help teams **understand the state of accessibility in their current products** and how they can improve them to increase their level of accessibility.

{% notification {
  type: "information",
  message: "If your team would like to schedule an audit then please [get in touch](/support/contact-us/) with us."
} %}

---

## Browser plugins

Browser plugins provide an alternative to implementing automated testing tools into your **CI/CD pipeline**.

Our recommended browser plugins are [axe DevTools - Web Accessibility Testing](https://www.deque.com/axe/devtools/) and [Accessibility Insights for Web](https://accessibilityinsights.io/docs/web/overview/). They offer fully automated checks and semi-automated or ‘review’ checks that **flag potential issues to be assessed by a human user**.

For our web components that use **Storybook**, we also use the [storybook-addon-a11y plugin](https://storybook.js.org/addons/@storybook/addon-a11y) that has similar features for instant accessibility feedback on the page for each component.

---

## User testing

User testing is strongly recommended whenever possible. It helps you understand real-world accessibility issues by allowing users with disabilities or those who use assistive technologies to complete a journey or task.

You can watch your users navigate and complete tasks to see how different aspects of the design or code could be improved. It also allows you to discuss and review the accessibility issues encountered by your users.

{% notification {
  type: "information",
  message: "Get in touch with the [research team](https://justeat.slack.com/archives/CD0M5FRRV){target=“_blank”} to learn how you can test your products with real users."
} %}



