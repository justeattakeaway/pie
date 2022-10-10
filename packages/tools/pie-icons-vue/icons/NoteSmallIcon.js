import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'NoteSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--noteSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M14 6.34375H0V7.65625H14V6.34375Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M10.5 10.7188H0V12.0312H10.5V10.7188Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M14 1.96875H0V3.28125H14V1.96875Z"
      }
    })]);
  }

};