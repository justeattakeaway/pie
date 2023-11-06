---
eleventyNavigation:
    key: Code
    parent: Template
    order: 4
---

## Code

### Example 1

{% contentLayout %}
  {% contentItem %}
    <h2>test</h2>
    <p>words that are here</p>
    {% contentPageImage {
      src: "../../../assets/img/foundations/elevation/overlapping-elements.svg",
      width: "650px",
      height: 'l'
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h2>Another heading</h2>
    <p>words that are here</p>
    {% contentPageImage {
      src: "../../../assets/img/foundations/radius/full-rounding.svg",
      width: "97px",
      height: 'l'
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

### Example 2

{% contentLayout %}
  {% contentPageImage {
    src: "../../../assets/img/foundations/elevation/overlapping-elements.svg",
    width: "650px",
    height: 's'
  } %}
  {% contentPageImage {
    src: "../../../assets/img/foundations/radius/full-rounding.svg",
    width: "97px",
    height: 's'
  } %}
{% endcontentLayout %}

---

### Example 3

{% contentLayout %}
  {% contentItem %}
    <h3>Another heading</h3>
    <p>words that are here</p>
    {% contentPageImage {
      src: "../../../assets/img/foundations/elevation/overlapping-elements.svg",
      width: "650px",
      height: 'm'
  } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Another heading</h3>
    <p>words that are here</p>
    {% contentPageImage {
      src: "../../../assets/img/foundations/radius/full-rounding.svg",
      width: "97px",
      height: 'm'
    } %}
  {% endcontentItem %}
  {% contentPageImage {
    src: "../../../assets/img/foundations/elevation/overlapping-elements.svg",
    width: "650px",
    height: 'm'
  } %}
  {% contentPageImage {
    src: "../../../assets/img/foundations/radius/full-rounding.svg",
    width: "97px",
    height: 'm'
  } %}
  {% contentPageImage {
    src: "../../../assets/img/foundations/radius/full-rounding.svg",
    width: "97px",
    height: 'm'
  } %}
  {% contentPageImage {
    src: "../../../assets/img/foundations/elevation/overlapping-elements.svg",
    width: "650px",
    height: 'm'
  } %}
{% endcontentLayout %}

---

### Example 4

{% contentLayout %}
  {% contentItem %}
    <h3>Another heading</h3>
    <p>words that are here</p>
    {% contentPageImage {
      src: "../../../assets/img/foundations/elevation/overlapping-elements.svg",
      width: "650px",
      height: 'm'
  } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Another heading</h3>
    <p>words that are here</p>
    {% contentPageImage {
      src: "../../../assets/img/foundations/radius/full-rounding.svg",
      width: "97px",
      height: 'm'
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Another heading</h3>
    <p>words that are here</p>
    {% contentPageImage {
      src: "../../../assets/img/foundations/radius/full-rounding.svg",
      width: "97px",
      height: 'm'
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

