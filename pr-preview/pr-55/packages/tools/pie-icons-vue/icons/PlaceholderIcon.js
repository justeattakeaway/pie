import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'PlaceholderIcon',
  props: {},
  functional: true,

  render(h, ctx) {
    const attrs = ctx.data.attrs || {};
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 24 24"
      },
      "class": "c-pieIcon c-pieIcon--placeholder"
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        "d": "M23.8759 0L24 0.124136V23.8759L23.8759 24H0.124136L0 23.8759V0.124136L0.124136 0H23.8759ZM23.7507 0.248273H0.248228V23.7508H23.7507V0.248273ZM18.0833 3C19.6942 3 21 4.30584 21 5.91667V18.0833C21 19.6942 19.6942 21 18.0833 21H5.91667C4.30584 21 3 19.6942 3 18.0833V5.91667C3 4.30584 4.30584 3 5.91667 3H18.0833Z"
      }
    })]);
  }

};