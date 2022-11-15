---
eleventyNavigation:
    key: Alias
    parent: Colour
    order: 3
title: Alias
navKey: Colour
description: Our colour system builds on the recognition of the JET brand colours to make the product interface more usable.
layout: layouts/toggle-page-layout.njk
defaultContentKey: toggled-content-a
defaultContentLabel: light
hiddenContentKey: toggled-content-b
hiddenContentLabel: dark
---

{% toggledContent defaultContentKey, false%}
    {% include './light-alias-content.md' %}
{% endtoggledContent %}


{% toggledContent hiddenContentKey, true %}
    {% include './dark-alias-content.md' %}
{% endtoggledContent %}
