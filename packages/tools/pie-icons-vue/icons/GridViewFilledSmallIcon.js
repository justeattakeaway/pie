import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'GridViewFilledSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--gridViewFilledSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M1.09375 5.90625H5.90625V1.09375H1.09375V5.90625Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M8.09375 5.90625H12.9062V1.09375H8.09375V5.90625Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M1.09375 12.9062H5.90625V8.09375H1.09375V12.9062Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M8.09375 12.9062H12.9062V8.09375H8.09375V12.9062Z"
      }
    })]);
  }

};