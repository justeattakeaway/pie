import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'CloseIcon',
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
      "class": "c-pieIcon c-pieIcon--close"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M21.4199 22.6625L22.6624 21.42L15.2337 14L22.6624 6.57127L21.4199 5.33752L13.9999 12.7663L6.57115 5.33752L5.3374 6.57127L12.7662 14L5.3374 21.42L6.57115 22.6625L13.9999 15.2338L21.4199 22.6625Z"
      }
    })]);
  }
};