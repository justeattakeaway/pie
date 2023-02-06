---
eleventyComputed:
  # This is set in _data/togglePageOptions.js
  selectedToggle: "{{togglePageOptions.B}}"

  shownContent: "{% include './toggled-content/dark-elevation-alias.content.md' %}"
  hiddenContent: "{% include './toggled-content/light-elevation-alias.content.md' %}"

  # contentAKey and contentBKey are set in toggle-page-layout.njk
  shownContentKey: "{{contentBKey}}"
  hiddenContentKey: "{{contentAKey}}"

  # This is set in alias.json
  shownContentSlug: "{{toggleContent.b.slug}}"
  hiddenContentSlug: "{{toggleContent.a.slug}}"
---
