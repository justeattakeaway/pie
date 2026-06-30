---
eleventyNavigation:
    key: Overview
    parent: Notification
    order: 1
permalink: components/notification/
eleventyComputed:
    usage: "{% include './usage.json' %}"
---

## Overview

The purpose of notifications is to promptly inform users about relevant information or changes that require their attention. Notifications can be used to communicate messages like new messages, system updates, completed actions, errors or reminders.

Notifications often include options for users to interact with the displayed information, such as dismissing the notification, taking action or accessing related content. They play a crucial role in keeping users informed and engaged with the application or system.

{% contentPageImage {
    src:"../../../assets/img/components/notification/overview.svg",
    alt: "An informational notification with a single button"
} %}

---

## Resources

{% resourceTable {
    componentName: 'Notification'
} %}
