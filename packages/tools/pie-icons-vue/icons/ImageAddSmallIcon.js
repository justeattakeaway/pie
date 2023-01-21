import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'ImageAddSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--imageAddSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M12.4688 6.46875V6.81875C12.2863 7.49206 11.8547 8.07077 11.2612 8.4375L11.2 8.48125C9.45 9.58375 8.2775 9.00625 6.825 8.28875C5.3725 7.57125 3.7625 6.775 1.575 7.76375V2.51375H8.575V1.21875H0.21875V13.0312H13.7812V6.46875H12.4688ZM12.4688 11.7188H1.53125V9.25125C3.5 8.13125 4.76 8.74375 6.23 9.46125C7.16804 10.0141 8.22329 10.3379 9.31 10.4062C10.2293 10.3877 11.1244 10.1085 11.8913 9.60125C12.0933 9.4717 12.2863 9.32845 12.4688 9.1725V11.7188Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M13.125 3.84375H11.1562V1.875H9.84375V3.84375H7.875V5.15625H9.84375V7.125H11.1562V5.15625H13.125V3.84375Z"
      }
    })]);
  }
};