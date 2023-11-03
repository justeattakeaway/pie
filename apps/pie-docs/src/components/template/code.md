---
eleventyNavigation:
    key: Code
    parent: Template
    order: 4
---

## Code

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

