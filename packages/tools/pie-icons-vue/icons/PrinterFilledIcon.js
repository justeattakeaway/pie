import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'PrinterFilledIcon',
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
      "class": "c-pieIcon c-pieIcon--printerFilled"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M21 7V1.75H7V7H21Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M19.25 18.41H8.75V26.25H19.25V18.41Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M24.5 8.75H3.5C2.80381 8.75 2.13613 9.02656 1.64384 9.51884C1.15156 10.0111 0.875 10.6788 0.875 11.375V22.75H7V18.375H5.25V16.625H22.75V18.375H21V22.75H27.125V11.375C27.125 10.6788 26.8484 10.0111 26.3562 9.51884C25.8639 9.02656 25.1962 8.75 24.5 8.75ZM19.25 14.875V13.125H22.75V14.875H19.25Z"
      }
    })]);
  }
};