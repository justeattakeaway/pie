import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'MinusIcon',
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
      "class": "c-pieIcon c-pieIcon--minus"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M25.375 14.875V13.125H14.875H13.125H2.625V14.875H13.125H14.875H25.375Z"
      }
    })]);
  }
};