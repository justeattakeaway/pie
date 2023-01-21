import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'ChevronDoubleLeftSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--chevronDoubleLeftSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M7.25003 1.82L1.89503 7L7.29378 12.1975L6.41878 13.16L0.853784 7.79625C0.741855 7.68776 0.652863 7.55789 0.59209 7.41434C0.531316 7.2708 0.5 7.1165 0.5 6.96062C0.5 6.80474 0.531316 6.65045 0.59209 6.50691C0.652863 6.36336 0.741855 6.23349 0.853784 6.125L6.34878 0.875L7.25003 1.82Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M12.22 1.82L6.86503 7L12.2638 12.1975L11.3888 13.16L5.82378 7.79625C5.71185 7.68776 5.62286 7.55789 5.56209 7.41434C5.50132 7.2708 5.47 7.1165 5.47 6.96062C5.47 6.80474 5.50132 6.65045 5.56209 6.50691C5.62286 6.36336 5.71185 6.23349 5.82378 6.125L11.3188 0.875L12.22 1.82Z"
      }
    })]);
  }
};