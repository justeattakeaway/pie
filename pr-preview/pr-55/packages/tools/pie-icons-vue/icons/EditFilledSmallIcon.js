import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'EditFilledSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--editFilledSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M13.4401 2.50251L11.4976 0.560012C11.2106 0.274149 10.8221 0.113647 10.417 0.113647C10.0119 0.113647 9.62336 0.274149 9.33637 0.560012L8.12012 1.75001L9.04762 2.67751L11.3051 4.92626L11.7689 5.39876L12.2326 5.86251L13.4401 4.64626C13.7228 4.36113 13.8814 3.97588 13.8814 3.57439C13.8814 3.17289 13.7228 2.78765 13.4401 2.50251Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M10.3776 5.88874L7.1926 2.70374L1.0676 8.82874C0.800915 9.08799 0.631073 9.43076 0.586348 9.79998L0.131348 13.8775L4.2001 13.4225C4.55763 13.3826 4.89092 13.2221 5.1451 12.9675L11.2701 6.84249L10.8063 6.37874L10.3776 5.88874Z"
      }
    })]);
  }

};