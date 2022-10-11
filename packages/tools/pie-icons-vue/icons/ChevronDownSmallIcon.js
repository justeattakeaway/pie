import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'ChevronDownSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--chevronDownSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M1.82 4.04375L7 9.39875L12.1975 4L13.16 4.875L7.79625 10.44C7.5784 10.6553 7.28444 10.7761 6.97812 10.7761C6.67181 10.7761 6.37785 10.6553 6.16 10.44L0.875 4.945L1.82 4.04375Z"
      }
    })]);
  }

};