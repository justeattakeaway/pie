import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'CheckIcon',
  props: {},
  functional: true,
  render(h, ctx) {
    const attrs = ctx.data.attrs || {};
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 28 28"
      },
      "class": "c-pieIcon c-pieIcon--check"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M9.2575 22.2425C9.00799 22.243 8.76106 22.192 8.53219 22.0927C8.30332 21.9933 8.09746 21.8477 7.9275 21.665L2.625 15.75L3.9375 14.5863L9.1875 20.51H9.275L24.0888 4.76001L25.375 5.95001L10.5962 21.7C10.4251 21.8841 10.2179 22.0311 9.98767 22.132C9.7574 22.2328 9.50888 22.2853 9.2575 22.2863V22.2425Z"
      }
    })]);
  }
};