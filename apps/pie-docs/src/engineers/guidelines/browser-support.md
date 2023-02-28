---
eleventyNavigation:
    key: browser-support
    title: Browser support
    parent: engineers-guidelines
    order: 1
eleventyComputed:
    desktopTableData: "{% include './browser-support-desktop.json' %}"
    mobileTableData: "{% include './browser-support-mobile.json' %}"
---

## Browser support

The number of browsers available to our users is vast, especially for those using mobile devices. Below, we have defined a rating system that helps us to specify the level of browser support we aim to achieve and to clarify what level of testing is required.

As with any browser support checklist, this list should be reviewed often and updated in-line with the browsers and devices that our users are choosing to access our platforms via.

---

## Priority definitions

### Priority level A – Fully supported
- Testing is required.
- All content must be available.
- Layout must comply with the creative design unless there is a technical need not to do so.
- All functionality must be available and work as required.

### Priority level B – Mostly supported
- Testing is required.
- Functionally, the user should be able to place an order (or carry out the main user objective for the relevant page/site).
- Layout does not have to look identical to creative design (i.e. degradation of appearance is acceptable).

### Priority level C – Not supported
- Testing is not required

{% notification {
type: "information",
message: "For any browsers rated at level B & C, the user experience may actually be at a higher level."
} %}

A good example of this would be users browsing using Opera. The reason we don't "Fully Support" this browser is simply down to user metrics, not the quality of the browser. We'd actually expect most functionality to work with no real issues, although we don't officially test in this browser.

---

## Browser Matrices

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

- iPhone: 6 - latest (all variants such as Pro and Mini)
- iPad / iPad mini - latest
- Samsung Galaxy: s21, s22
- Samsung Galaxy Tabel: s10 (or similar)
- Google pixel: 6, 4a
- Huawei: p30
