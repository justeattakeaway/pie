import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'ChevronRightSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--chevronRightSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M4.04375 12.18L9.39875 7.00004L4 1.82004L4.875 0.857544L10.4137 6.20379C10.6291 6.42164 10.7499 6.7156 10.7499 7.02192C10.7499 7.32823 10.6291 7.6222 10.4137 7.84004L4.945 13.125L4.04375 12.18Z"
      }
    })]);
  }

};