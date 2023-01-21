import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'PoliciesIcon',
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
      "class": "c-pieIcon c-pieIcon--policies"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M16.625 1.75H2.625V27.125H25.375V10.5C25.375 9.35093 25.1487 8.21312 24.7089 7.15152C24.2692 6.08992 23.6247 5.12533 22.8122 4.31282C21.9997 3.5003 21.0351 2.85578 19.9735 2.41605C18.9119 1.97633 17.7741 1.75 16.625 1.75ZM23.3975 8.75H18.375V3.7275C19.5821 4.04466 20.6832 4.67683 21.5657 5.55933C22.4482 6.44182 23.0803 7.54294 23.3975 8.75ZM23.625 25.375H4.375V3.5H16.625V10.5H23.625V25.375ZM13.125 11.375H8.75V9.625H13.125V11.375ZM8.75 18.375H15.75V20.125H8.75V18.375ZM8.75 14H19.25V15.75H8.75V14Z"
      }
    })]);
  }
};