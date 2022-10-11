import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'ArrowLongUpIcon',
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
      "class": "c-pieIcon c-pieIcon--arrowLongUp"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M14.875 26.25V4.37499L21.875 11.375L23.1088 10.1412L15.2338 2.26624C15.0712 2.10353 14.8782 1.97446 14.6658 1.88639C14.4533 1.79832 14.2256 1.75299 13.9956 1.75299C13.7657 1.75299 13.5379 1.79832 13.3255 1.88639C13.113 1.97446 12.92 2.10353 12.7575 2.26624L4.88251 10.1412L6.12501 11.375L13.125 4.37499V26.25H14.875Z"
      }
    })]);
  }

};