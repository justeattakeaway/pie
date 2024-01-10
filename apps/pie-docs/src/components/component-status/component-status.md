---
eleventyNavigation:
    key: 'Component status'
    parent: Components
eleventyComputed:
    data: "{% include './component-statuses.json' %}"
    descriptions: "{% include './status-descriptions.json' %}"
---

## Web

{% componentStatusTable {
  dataType: 'web'
} %}

## Apps

{% componentStatusTable {
  dataType: 'app'
} %}

## Status descriptions

{% termsAndDescriptions {
    rows: [
        {
            status: statusTypes.AVAILABLE,
            description: 'Ready to be used.'
        },
        {
            status: statusTypes.PLANNED,
            description: 'Will be created in the future.'
        },
        {
            status: statusTypes.ALPHA,
            description: 'Preliminary use-age, expect changes.'
        },
        {
            status: statusTypes.BETA,
            description: 'Testing a new major change of a stable component.'
        },
        {
            status: statusTypes.REMOVED,
            description: 'No longer supported by PIE.'
        },
        {
            status: statusTypes.DEPRECATED,
            description: 'In the future will no longer be supported by PIE.'
        },
        {
            status: statusTypes.NOT_APPLICABLE,
            description: 'Not applicable.'
        },
        {
            status: statusTypes.TBC,
            description: 'To be confirmed.'
        }
    ]
} %}
