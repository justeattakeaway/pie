import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'PauseSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--pauseSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M5.32632 3H4V11H5.32632V3Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M10 3H8.67368V11H10V3Z"
      }
    })]);
  }
};