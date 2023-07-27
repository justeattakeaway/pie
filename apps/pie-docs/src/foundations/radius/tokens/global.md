---
eleventyNavigation:
    key: Global tokens
    parent: Radius
    order: 3
---

## Global radius tokens
We have set a number of global tokens which set the roundness of the corners.

{% globalTokensWarning '/foundations/radius/tokens/alias/' %}

{% simpleTable {
    isFullWidth: true,
    useMonospace: true,
    tokens: {
        path: 'radius.global',
        tokenType: tokenTypes.RADIUS
    }
} %}
