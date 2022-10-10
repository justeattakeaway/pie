import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'DragIcon',
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
      "class": "c-pieIcon c-pieIcon--drag"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M26.25 9.1875H1.75V10.9375H26.25V9.1875Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M26.25 17.0625H1.75V18.8125H26.25V17.0625Z"
      }
    })]);
  }

};