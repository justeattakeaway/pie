import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'ChevronDoubleLeftIcon',
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
      "class": "c-pieIcon c-pieIcon--chevronDoubleLeft"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M16.0213 3.87625L5.53877 14C5.52659 14.0309 5.52659 14.0653 5.53877 14.0963L16.0388 24.1588L14.8138 25.375L4.37502 15.33C4.039 14.9756 3.85168 14.5059 3.85168 14.0175C3.85168 13.5291 4.039 13.0594 4.37502 12.705L14.8225 2.625L16.0213 3.87625Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M24.1938 3.87625L13.7025 14C13.6903 14.0309 13.6903 14.0653 13.7025 14.0963L24.2025 24.1588L22.9775 25.375L12.4775 15.3125C12.1415 14.9581 11.9542 14.4884 11.9542 14C11.9542 13.5116 12.1415 13.0419 12.4775 12.6875L22.995 2.625L24.1938 3.87625Z"
      }
    })]);
  }

};