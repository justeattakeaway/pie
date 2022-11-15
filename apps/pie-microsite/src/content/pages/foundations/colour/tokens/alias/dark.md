---
title: Alias
navKey: Colour
description: Our colour system builds on the recognition of the JET brand colours to make the product interface more usable.
layout: 'layouts/toggle-page-layout.njk'
defaultContent: dark
hiddenContent: light
---

<div id="default">
{% include './dark-alias-content.md' %}
</div>

{% toggledContent "hidden" %}
{% include './light-alias-content.md' %}
{% endtoggledContent %}
