---
eleventyComputed:
  selectedToggle: "{{togglePageOptions.B}}"
---
{% toggledContent ContentAKey, true, 'light' %}
    {% include './toggled-content/light-alias.content.md' %}
{% endtoggledContent %}


{% toggledContent ContentBKey, false, 'dark' %}
    {% include './toggled-content/dark-alias.content.md' %}
{% endtoggledContent %}
