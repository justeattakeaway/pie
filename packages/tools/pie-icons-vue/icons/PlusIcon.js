import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'PlusIcon',
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
      "class": "c-pieIcon c-pieIcon--plus"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M25.375 14.875V13.125H14.875V2.625H13.125V13.125H2.625V14.875H13.125V25.375H14.875V14.875H25.375Z"
      }
    })]);
  }

};