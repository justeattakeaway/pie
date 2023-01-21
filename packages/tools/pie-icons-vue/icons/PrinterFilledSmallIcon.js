import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'PrinterFilledSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--printerFilledSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M10.2812 2.84375V0.65625H3.71875V2.84375H10.2812Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M12.25 4.15625H1.75C1.3446 4.15855 0.95645 4.32061 0.669781 4.60728C0.383112 4.89395 0.221047 5.2821 0.21875 5.6875V11.5938H3.71875V8.96875H2.84375V7.65625H11.1562V8.96875H10.2812V11.5938H13.7812V5.6875C13.779 5.2821 13.6169 4.89395 13.3302 4.60728C13.0436 4.32061 12.6554 4.15855 12.25 4.15625Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M5.03125 8.96875V13.3438H8.96V12.6875H8.96875V8.96875H5.03125Z"
      }
    })]);
  }
};