import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'UserFilledSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--userFilledSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M12.355 10.78C12.0556 9.98097 11.5166 9.294 10.8118 8.81313C10.1069 8.33226 9.27064 8.081 8.41747 8.09374H5.58247C4.7293 8.081 3.89305 8.33226 3.18819 8.81313C2.48333 9.294 1.94433 9.98097 1.64497 10.78L0.813721 13.125H13.1862L12.355 10.78Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M6.99994 7C8.69131 7 10.0624 5.62887 10.0624 3.9375C10.0624 2.24613 8.69131 0.875 6.99994 0.875C5.30857 0.875 3.93744 2.24613 3.93744 3.9375C3.93744 5.62887 5.30857 7 6.99994 7Z"
      }
    })]);
  }
};