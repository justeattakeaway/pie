---
eleventyComputed:
  selectedToggle: "{{togglePageOptions.B}}"
  shownContent: "{% include './toggled-content/dark-alias.content.md' %}"
  hiddenContent: "{% include './toggled-content/light-alias.content.md' %}"
  
  shownContentKey: "{{contentBKey}}"
  hiddenContentKey: "{{contentAKey}}"

  shownContentSlug: "{{toggleContent.b.slug}}"
  hiddenContentSlug: "{{toggleContent.a.slug}}"
---
