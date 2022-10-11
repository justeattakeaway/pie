import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'GeolocationFilledSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--geolocationFilledSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M0.534668 5.54755V7.00005L2.66967 7.5338C3.59936 7.76292 4.44868 8.24192 5.12574 8.91898C5.8028 9.59604 6.2818 10.4454 6.51092 11.3751L7.04467 13.5101H8.45342L12.4172 1.5838L0.534668 5.54755Z"
      }
    })]);
  }

};