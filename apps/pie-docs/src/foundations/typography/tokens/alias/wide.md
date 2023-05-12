---
eleventyNavigation:
    key: Alias tokens
    parent: Typography
    order: 2

eleventyComputed:
  # This is set in _data/togglePageOptions.js
  selectedToggle: "{{togglePageOptions.A}}"
  
  shownContent: "{% include './toggled-content/wide-screen-alias.content.md' %}"
  hiddenContent: "{% include './toggled-content/narrow-screen-alias.content.md' %}"

  # contentAKey and contentBKey are set in toggle-page-layout.njk
  shownContentKey: "{{contentAKey}}"
  hiddenContentKey: "{{contentBKey}}"

  # This is set in alias.json
  shownContentSlug: "{{toggleContent.a.slug}}"
  hiddenContentSlug: "{{toggleContent.b.slug}}"
---
