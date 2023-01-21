import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'FlagGermanyIcon',
  props: {},
  functional: true,
  render(h, ctx) {
    const attrs = ctx.data.attrs || {};
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 15 14"
      },
      "class": "c-pieIcon c-pieIcon--flagGermany"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M0.43763 9.43514C0.934966 10.775 1.83044 11.9306 3.00376 12.7466C4.17708 13.5626 5.57204 14 7.00122 14C8.43041 14 9.82537 13.5626 10.9987 12.7466C12.172 11.9306 13.0675 10.775 13.5648 9.43514L7.00122 8.828L0.43763 9.43514Z",
        "fill": "#FFDA44"
      }
    }), h("path", {
      "attrs": {
        "d": "M7.00122 0C5.57176 0.000174487 4.17661 0.437904 3.00326 1.25436C1.82991 2.07082 0.934591 3.22687 0.43763 4.56717L7.00122 5.1743L13.5648 4.56717C13.0679 3.22687 12.1725 2.07082 10.9992 1.25436C9.82584 0.437904 8.43069 0.000174487 7.00122 0Z",
        "fill": "#333333"
      }
    }), h("path", {
      "attrs": {
        "d": "M0.43763 4.56717C-0.145877 6.13738 -0.145877 7.86493 0.43763 9.43514H13.5648C14.1486 7.86497 14.1486 6.13733 13.5648 4.56717H0.43763Z",
        "fill": "#D80027"
      }
    })]);
  }
};