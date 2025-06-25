---
eleventyNavigation:
    key: Changelog
    parent: 'Spinner'
    order: 3
eleventyComputed:
    changelog: "{% include './changelog.json'
    %}"
---

{% componentDetailsTable {
tableData: changelog
} %}


