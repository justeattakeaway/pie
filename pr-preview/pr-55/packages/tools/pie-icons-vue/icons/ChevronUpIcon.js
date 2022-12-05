import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'ChevronUpIcon',
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
      "class": "c-pieIcon c-pieIcon--chevronUp"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M24.1237 20.125L14 9.62502H13.9038L3.87625 20.125L2.625 18.8913L12.6875 8.39127C13.0429 8.0572 13.5123 7.87122 14 7.87122C14.4877 7.87122 14.9571 8.0572 15.3125 8.39127L25.375 18.9088L24.1237 20.125Z"
      }
    })]);
  }

};