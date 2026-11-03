---
eleventyNavigation:
    key: Alias tokens
    parent: Colour
    order: 2

eleventyComputed:
  # This is set in _data/togglePageOptions.js
  selectedToggle: "{{togglePageOptions.A}}"
  
  shownContent: "{% include './toggled-content/light-alias.content.md' %}"
  hiddenContent: "{% include './toggled-content/dark-alias.content.md' %}"

  # contentAKey and contentBKey are set in toggle-page-layout.njk
  shownContentKey: "{{contentAKey}}"
  hiddenContentKey: "{{contentBKey}}"

  # This is set in alias.json
  shownContentSlug: "{{toggleContent.a.slug}}"
  hiddenContentSlug: "{{toggleContent.b.slug}}"
llmsTxtDescription: Light theme colour alias tokens grouped by role, such as backgrounds, borders, content, feedback, brand, interactive and states, with usage guidance and their global tokens.
---
