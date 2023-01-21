import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'GridViewSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--gridViewSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M5.90625 5.90625H1.09375V1.09375H5.90625V5.90625ZM2.40625 4.59375H4.59375V2.40625H2.40625V4.59375ZM12.9062 5.90625H8.09375V1.09375H12.9062V5.90625ZM9.40625 4.59375H11.5938V2.40625H9.40625V4.59375ZM5.90625 12.9062H1.09375V8.09375H5.90625V12.9062ZM2.40625 11.5938H4.59375V9.40625H2.40625V11.5938ZM12.9062 12.9062H8.09375V8.09375H12.9062V12.9062ZM9.40625 11.5938H11.5938V9.40625H9.40625V11.5938Z"
      }
    })]);
  }
};