import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'ChevronLeftIcon',
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
      "class": "c-pieIcon c-pieIcon--chevronLeft"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M19.8038 3.87625L9.30379 14C9.30018 14.032 9.30018 14.0643 9.30379 14.0963L19.8038 24.1588L18.57 25.375L8.07004 15.3125C7.73597 14.9571 7.54999 14.4877 7.54999 14C7.54999 13.5123 7.73597 13.0429 8.07004 12.6875L18.5875 2.625L19.8038 3.87625Z"
      }
    })]);
  }

};