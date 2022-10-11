import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'CheckSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--checkSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M4.865 11.4888C4.70071 11.487 4.53848 11.452 4.38809 11.3858C4.2377 11.3197 4.10228 11.2237 3.99 11.1038L0.875 7.65626L1.855 6.78126L4.8825 10.15L12.1362 2.32751L13.0988 3.20251L5.74875 11.0775C5.63647 11.1975 5.50105 11.2934 5.35066 11.3596C5.20027 11.4258 5.03804 11.4608 4.87375 11.4625L4.865 11.4888Z"
      }
    })]);
  }

};