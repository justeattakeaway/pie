import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'FiltersFilledSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--filtersFilledSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M14 2.84375V4.15625H5.03125V5.6875H3.71875V4.15625H0V2.84375H3.71875V1.3125H5.03125V2.84375H14ZM10.2812 8.3125H8.96875V9.84375H0V11.1562H8.96875V12.6875H10.2812V11.1562H14V9.84375H10.2812V8.3125Z"
      }
    })]);
  }

};