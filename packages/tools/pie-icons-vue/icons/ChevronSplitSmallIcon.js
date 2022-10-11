import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'ChevronSplitSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--chevronSplitSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M10.3075 5.24998L7.00001 1.86373L3.69251 5.24998L2.79126 4.31373L6.29126 0.717484C6.4882 0.536706 6.7458 0.436401 7.01313 0.436401C7.28047 0.436401 7.53807 0.536706 7.73501 0.717484L11.2438 4.37498L10.3075 5.24998Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M3.69251 8.75002L7.00001 12.0488L10.3075 8.67126L11.2 9.59002L7.70001 13.1863C7.50306 13.367 7.24546 13.4673 6.97813 13.4673C6.7108 13.4673 6.4532 13.367 6.25626 13.1863L2.75626 9.62502L3.69251 8.75002Z"
      }
    })]);
  }

};