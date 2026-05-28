---
eleventyNavigation:
    key: Code
    parent: Toast
    order: 5
---

## Web

{% contentLayout { columns: 3 } %}
    {% contentItem %}
        <h3>Toast</h3>
        {% card {
          items: [
                {
                  linkText: "PIE Web Components",
                  href: "https://webc.pie.design/?path=/docs/components-toast--overview",
                  src: "../../../assets/img/engineers/webComponents.png",
                  shouldOpenInNewTab: true
                }
            ]
        } %}
    {% endcontentItem %}
    {% contentItem %}
        <h3>Toast Provider</h3>
        {% card {
            items: [
                {
                  linkText: "PIE Web Components",
                  href: "https://webc.pie.design/?path=/docs/components-toast-provider--overview",
                  src: "../../../../assets/img/engineers/webComponents.png",
                  shouldOpenInNewTab: true
                }
            ]
        } %}
    {% endcontentItem %}
{% endcontentLayout %}

{% include "ios-and-android-code.md" %}
