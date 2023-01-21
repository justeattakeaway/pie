import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'CaretRightFilledIcon',
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
      "class": "c-pieIcon c-pieIcon--caretRightFilled"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M21.875 12.425L7.87502 3.75375C7.61287 3.58891 7.3097 3.50099 7.00002 3.5C6.55365 3.49999 6.12543 3.67671 5.80898 3.99153C5.49253 4.30634 5.31359 4.73363 5.31127 5.18V22.82C5.30765 23.1271 5.38828 23.4293 5.54439 23.6938C5.7005 23.9583 5.92612 24.1749 6.19673 24.3201C6.46734 24.4653 6.77258 24.5336 7.07927 24.5175C7.38596 24.5014 7.68237 24.4015 7.93627 24.2288L21.875 15.2688C22.1154 15.1175 22.3136 14.9077 22.4509 14.659C22.5882 14.4104 22.6602 14.1309 22.6602 13.8469C22.6602 13.5628 22.5882 13.2834 22.4509 13.0347C22.3136 12.7861 22.1154 12.5763 21.875 12.425Z"
      }
    })]);
  }
};