---
eleventyNavigation:
    key: Alias
    parent: Colour
    order: 3

eleventyComputed:
  selectedToggle: "{{togglePageOptions.A}}"
---

{% toggledContent defaultContentKey, false, 'light' %}
    {% include './toggled-content/light-alias.content.md' %}
{% endtoggledContent %}


{% toggledContent hiddenContentKey, true, 'dark' %}
    {% include './toggled-content/dark-alias.content.md' %}
{% endtoggledContent %}
