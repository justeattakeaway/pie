import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'ArrowLongUpSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--arrowLongUpSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M7.65625 13.125V2.93126L10.9463 6.22126L11.8738 5.29376L7.77 1.19876C7.66915 1.09717 7.54919 1.01654 7.41704 0.961522C7.28488 0.906501 7.14315 0.878174 7 0.878174C6.85685 0.878174 6.71512 0.906501 6.58296 0.961522C6.45081 1.01654 6.33085 1.09717 6.23 1.19876L2.12625 5.29376L3.05375 6.22126L6.34375 2.93126V13.125H7.65625Z"
      }
    })]);
  }

};