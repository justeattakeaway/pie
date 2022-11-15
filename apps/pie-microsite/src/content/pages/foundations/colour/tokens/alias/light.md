---
eleventyNavigation:
    key: Alias
    parent: Colour
    order: 3
title: Alias
navKey: Colour
description: Our colour system builds on the recognition of the JET brand colours to make the product interface more usable.
layout: layouts/toggle-page-layout.njk
defaultContentKey: toggled-content-light
defaultContentLabel: light
hiddenContentKey: toggled-content-dark
hiddenContentLabel: dark
---

{% toggledContent defaultContentKey %}
    {% include './light-alias-content.md' %}
{% endtoggledContent %}


{% toggledContent hiddenContentKey %}
    {% include './dark-alias-content.md' %}
{% endtoggledContent %}
