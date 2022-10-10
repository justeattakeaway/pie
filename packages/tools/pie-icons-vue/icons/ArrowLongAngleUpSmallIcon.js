import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'ArrowLongAngleUpSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--arrowLongAngleUpSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M11.795 10.8675L4.58501 3.65747H9.24002V2.34497H3.43875C3.14867 2.34497 2.87047 2.46021 2.66535 2.66532C2.46024 2.87044 2.345 3.14864 2.345 3.43872V9.23999H3.65751V4.58498L10.8675 11.795L11.795 10.8675Z"
      }
    })]);
  }

};