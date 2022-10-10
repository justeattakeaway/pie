import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'MenuSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--menuSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M14 3.28125H0V1.96875H14V3.28125ZM14 10.7188H0V12.0312H14V10.7188ZM12.25 6.34375H0V7.65625H12.25V6.34375Z"
      }
    })]);
  }

};