import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'MenuIcon',
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
      "class": "c-pieIcon c-pieIcon--menu"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M26.25 7H1.75V5.25H26.25V7ZM26.25 21H1.75V22.75H26.25V21ZM23.625 13.125H1.75V14.875H23.625V13.125Z"
      }
    })]);
  }

};