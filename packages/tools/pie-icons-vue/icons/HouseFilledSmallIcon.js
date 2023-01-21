import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'HouseFilledSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--houseFilledSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M7.875 1.34754C7.6082 1.19527 7.30602 1.11592 6.99883 1.11745C6.69164 1.11899 6.39026 1.20136 6.125 1.35629C3.77125 2.90504 0.11375 6.90379 0 7.07879L0.97125 7.95379C0.97125 7.95379 1.39125 7.49004 2.0125 6.84254V12.8975H12.075V6.86004C12.6875 7.49879 13.0987 7.94504 13.1075 7.96254L14.0788 7.08754C12.1873 4.9919 10.111 3.07081 7.875 1.34754V1.34754ZM6.125 9.62504C6.125 9.39297 6.21719 9.17041 6.38128 9.00632C6.54538 8.84222 6.76794 8.75004 7 8.75004C7.23206 8.75004 7.45462 8.84222 7.61872 9.00632C7.78281 9.17041 7.875 9.39297 7.875 9.62504V11.5938H6.125V9.62504Z"
      }
    })]);
  }
};