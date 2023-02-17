---
eleventyComputed:
  # This is set in _data/togglePageOptions.js
  selectedToggle: "{{togglePageOptions.B}}"
  
  shownContent: "{% include './toggled-content/narrow-screen-alias.content.md' %}"
  hiddenContent: "{% include './toggled-content/wide-screen-alias.content.md' %}"
  
  # contentAKey and contentBKey are set in toggle-page-layout.njk
  shownContentKey: "{{contentBKey}}"
  hiddenContentKey: "{{contentAKey}}"

  # This is set in alias.json
  shownContentSlug: "{{toggleContent.b.slug}}"
  hiddenContentSlug: "{{toggleContent.a.slug}}"
---
