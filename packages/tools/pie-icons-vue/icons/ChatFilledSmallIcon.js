import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'ChatFilledSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--chatFilledSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M11.375 1.96875H2.625C2.2196 1.97105 1.83145 2.13311 1.54478 2.41978C1.25811 2.70645 1.09605 3.0946 1.09375 3.5V13.7812H2.5375L5.0925 11.2175C5.13646 11.1797 5.19204 11.1581 5.25 11.1562H11.375C11.7804 11.154 12.1686 10.9919 12.4552 10.7052C12.7419 10.4186 12.904 10.0304 12.9062 9.625V3.5C12.904 3.0946 12.7419 2.70645 12.4552 2.41978C12.1686 2.13311 11.7804 1.97105 11.375 1.96875Z"
      }
    })]);
  }
};