---
eleventyNavigation:
    key: 'Component status'
    parent: Components
    order: 1
---

## Web

{% componentStatusTable {
  dataType: 'web'
} %}

{% set tagName = 'web-table' %}
{% include "show-more.njk" %}

## Apps

{% componentStatusTable {
  dataType: 'apps'
} %}

{% set tagName = 'apps-table' %}
{% include "show-more.njk" %}

## Status descriptions

{% termsAndDescriptions {
    rows: [
        {
            term: statusTypes.AVAILABLE,
            description: 'Ready to be used.'
        },
        {
            term: statusTypes.PLANNED,
            description: 'Will be created in the future.'
        },
        {
            term: statusTypes.ALPHA,
            description: 'Preliminary use-age, expect changes.'
        },
        {
            term: statusTypes.BETA,
            description: 'Testing a new major change of a stable component.'
        },
        {
            term: statusTypes.REMOVED,
            description: 'No longer supported by PIE.'
        },
        {
            term: statusTypes.DEPRECATED,
            description: 'In the future will no longer be supported by PIE.'
        },
        {
            term: statusTypes.NOT_APPLICABLE,
            description: 'Not applicable.'
        },
        {
            term: statusTypes.TBC,
            description: 'To be confirmed.'
        }
    ]
} %}
