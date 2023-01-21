import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'ChequeFilledSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--chequeFilledSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M9.1 5.81002L7 6.12502L7.315 4.02502L10.2375 1.11127C10.4702 0.880438 10.7847 0.750916 11.1125 0.750916C11.4403 0.750916 11.7548 0.880438 11.9875 1.11127C12.2183 1.34399 12.3479 1.65849 12.3479 1.98627C12.3479 2.31405 12.2183 2.62855 11.9875 2.86127L9.1 5.81002ZM14 5.25002V13.125H0V5.25002H5.81875L5.4775 7.64752L9.72125 7.04377L11.515 5.25002H14ZM7.875 8.96877H2.625V10.2813H7.875V8.96877ZM11.375 8.96877H9.625V10.2813H11.375V8.96877Z"
      }
    })]);
  }
};