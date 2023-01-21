import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'CasePresentationSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--casePresentationSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M14 1.09375H0V2.40625H1.09375V7.875C1.09605 8.2804 1.25811 8.66855 1.54478 8.95522C1.83145 9.24189 2.2196 9.40395 2.625 9.40625H6.34375V11.1125L4.375 13.125H6.195L7 12.3112L7.805 13.125H9.625L7.65625 11.1037V9.40625H11.375C11.7804 9.40395 12.1686 9.24189 12.4552 8.95522C12.7419 8.66855 12.904 8.2804 12.9062 7.875V2.40625H14V1.09375ZM11.5938 7.875C11.5938 7.93302 11.5707 7.98866 11.5297 8.02968C11.4887 8.0707 11.433 8.09375 11.375 8.09375H2.625C2.56698 8.09375 2.51134 8.0707 2.47032 8.02968C2.4293 7.98866 2.40625 7.93302 2.40625 7.875V2.40625H11.5938V7.875Z"
      }
    })]);
  }
};