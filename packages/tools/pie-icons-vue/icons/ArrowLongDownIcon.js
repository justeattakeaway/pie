import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'ArrowLongDownIcon',
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
      "class": "c-pieIcon c-pieIcon--arrowLongDown"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M13.125 1.75V23.625L6.12501 16.625L4.88251 17.8325L12.7575 25.7075C12.92 25.8702 13.113 25.9993 13.3255 26.0874C13.5379 26.1754 13.7657 26.2208 13.9956 26.2208C14.2256 26.2208 14.4533 26.1754 14.6658 26.0874C14.8782 25.9993 15.0712 25.8702 15.2338 25.7075L23.1088 17.8325L21.875 16.625L14.875 23.625V1.75H13.125Z"
      }
    })]);
  }
};