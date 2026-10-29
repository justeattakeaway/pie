---
eleventyNavigation:
    key: Alias tokens
    parent: Gradients
    order: 2

eleventyComputed:
  # This is set in _data/togglePageOptions.js
  selectedToggle: "{{togglePageOptions.A}}"
  
  shownContent: "{% include './toggled-content/light-alias.content.md' %}"
  hiddenContent: "{% include './toggled-content/dark-alias.content.md' %}"

  # contentAKey and contentBKey are set in toggle-page-layout.njk
  shownContentKey: "{{contentAKey}}"
  hiddenContentKey: "{{contentBKey}}"

  # This is set in alias-tokens.json
  shownContentSlug: "{{toggleContent.a.slug}}"
  hiddenContentSlug: "{{toggleContent.b.slug}}"
llmsTxtDescription: Light theme gradient alias tokens for AI, container, border, JET+, brand and support use, each made of global colour tokens set at stops between 0 and 100%.
---
