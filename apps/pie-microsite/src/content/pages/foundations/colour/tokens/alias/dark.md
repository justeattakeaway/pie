---
# Eleventy Navigation data omitted to avoid rendering in navigation tabs
title: Alias
navKey: Colour
description: Our colour system builds on the recognition of the JET brand colours to make the product interface more usable.
layout: 'layouts/toggle-page-layout.njk'
defaultContentLabel: Light theme
hiddenContentLabel: Dark theme
---

{% toggledContent defaultContentKey, true, 'light' %}
    {% include './light-alias-content.md' %}
{% endtoggledContent %}


{% toggledContent hiddenContentKey, false, 'dark' %}
    {% include './dark-alias-content.md' %}
{% endtoggledContent %}
