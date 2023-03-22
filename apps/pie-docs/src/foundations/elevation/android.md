---
eleventyNavigation:
    key: Android specific
    parent: Elevation
    order: 4
eleventyComputed:
    tableData: "{% include './android.json' %}"
---

## Elevation on Android

Android uses built-in, Material Design tokens to represent elevation. This means that in order to show elevation within components, we need to assign an elevation value to it and the shadow will automatically be generated.

The table below shows the corresponding values between Material and PIE tokens.

{% simpleTable {
  tableData: tableData
} %}
