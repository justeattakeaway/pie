---
title: Alias
navKey: Colour
description: Our colour system builds on the recognition of the JET brand colours to make the product interface more usable.
layout: 'layouts/toggle-page-layout.njk'
defaultContent: dark
hiddenContent: light
---

I AM THE DARK 

{% include './dark-alias-content.md' %}
(hidden) {% include './light-alias-content.md' %}

{% toggledContent "default" %}
hi there
{% endtoggledContent %}
