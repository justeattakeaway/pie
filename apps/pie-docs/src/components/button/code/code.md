---
eleventyNavigation:
    key: Code
    parent: Button
    order: 3
shouldShowContents: true
eleventyComputed:
    props: "{% include './props.json' %}"
    slots: "{% include './slots.json' %}"
---

## Web

{% card {
  items: [
        {
          linkText: "PIE Web Components (Web)",
          href: "https://webc.pie.design/?path=/docs/components-button",
          src: "../../../assets/img/engineers/webComponents.png",
          shouldOpenInNewTab: true
        },
        {
          linkText: "Snacks (Web)",
          href: "https://snacks.takeaway.com/portal/components/button/",
          src: "../../../assets/img/engineers/react.png",
          shouldOpenInNewTab: true
        }
    ]
} %}

## iOS
For iOS, please ask internally about PIESwiftUI.

## Android
For Android, please ask internally about PIE Core
