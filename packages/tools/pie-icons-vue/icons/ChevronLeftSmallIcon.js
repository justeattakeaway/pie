import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'ChevronLeftSmallIcon',
  props: {},
  functional: true,
  render(h, ctx) {
    const attrs = ctx.data.attrs || {};
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 14 14"
      },
      "class": "c-pieIcon c-pieIcon--chevronLeftSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M9.96002 1.82L4.60503 7L10.0038 12.1975L9.12878 13.16L3.56378 7.79625C3.45185 7.68776 3.36285 7.55789 3.30208 7.41434C3.24131 7.2708 3.20999 7.1165 3.20999 6.96062C3.20999 6.80474 3.24131 6.65045 3.30208 6.50691C3.36285 6.36336 3.45185 6.23349 3.56378 6.125L9.05878 0.875L9.96002 1.82Z"
      }
    })]);
  }
};