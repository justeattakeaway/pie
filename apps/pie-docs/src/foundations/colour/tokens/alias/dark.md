---
eleventyComputed:
  # This is set in _data/togglePageOptions.js
  selectedToggle: "{{togglePageOptions.B}}"
  
  shownContent: "{% include './toggled-content/dark-alias.content.md' %}"
  hiddenContent: "{% include './toggled-content/light-alias.content.md' %}"
  
  # contentAKey and contentBKey are set in toggle-page-layout.njk
  shownContentKey: "{{contentBKey}}"
  hiddenContentKey: "{{contentAKey}}"

  # This is set in alias.json
  shownContentSlug: "{{toggleContent.b.slug}}"
  hiddenContentSlug: "{{toggleContent.a.slug}}"
llmsTxtDescription: Dark theme colour alias tokens grouped by role, such as backgrounds, borders, content, feedback, brand, interactive and states, with usage guidance and their global tokens.
---
