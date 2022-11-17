---
eleventyNavigation:
    key: Alias
    parent: Colour
    order: 3

eleventyComputed:
  selectedToggle: "{{togglePageOptions.A}}"
  
  shownContent: "{% include './toggled-content/light-alias.content.md' %}"
  hiddenContent: "{% include './toggled-content/dark-alias.content.md' %}"

  shownContentKey: "{{contentAKey}}"
  hiddenContentKey: "{{contentBKey}}"

  shownContentSlug: "{{toggleContent.a.slug}}"
  hiddenContentSlug: "{{toggleContent.b.slug}}"
---
