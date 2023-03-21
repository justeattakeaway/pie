---
eleventyNavigation:
    key: engineers-browser-support
    title: Browser support
    parent: engineers-guidelines
    order: 2
eleventyComputed:
    desktopTableData: "{% include './browser-support-desktop.json' %}"
    mobileTableData: "{% include './browser-support-mobile.json' %}"
    deviceTableData: "{% include './devices.json' %}"
---

## Browser support

Users have access to hundreds of browsers, so we've come up with a rating system to measure the level of browser support we want to achieve and the level of testing needed.

{% notification {
type: "warning",
message: "This list needs to be reviewed often,  so we can stay up-to-date with the browsers our users are choosing."
} %}

---

## Priority definitions

### Priority level A = Fully supported
- Testing is required
- All content must be available
- Layout must comply with the design, unless technical needs prevent this
- All functionality must be available and work as required

### Priority level B = Mostly supported
- Testing is required
- User should be able to place an order or carry out the main function of the page
- Layout doesn't have to be identical to the design, but should retain its functionality

### Priority level C = Not supported
- Testing is not required

{% notification {
type: "information",
message: "Browsers rated at B or C may have a higher user experience than expected."
} %}

A good example of this would be users browsing using Opera. The reason we don't "Fully Support" this browser is simply down to user metrics, not the quality of the browser. We'd actually expect most functionality to work with no real issues, although we don't officially test in this browser.

---

## Browsers and their ratings

### Desktop

{% simpleTable {
  tableData: desktopTableData
} %}

### Mobile

{% simpleTable {
  tableData: mobileTableData
} %}

---

## Devices

To give an idea as to what devices are worth testing on, these are the current recommended device types based on our analytics.

{% simpleTable {
  tableData: deviceTableData
} %}
