import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'ChevronSplitIcon',
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
      "class": "c-pieIcon c-pieIcon--chevronSplit"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M21.0525 10.0362L14.0437 2.62499H13.9475L6.94749 10.0275L5.67874 8.82874L12.6787 1.41749C13.0341 1.08342 13.5035 0.89743 13.9912 0.89743C14.479 0.89743 14.9484 1.08342 15.3037 1.41749L22.3037 8.82874L21.0525 10.0362Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M6.94749 17.9725L14 25.375H14.0962L21.0962 17.9725L22.3737 19.1712L15.3737 26.5737C15.0194 26.9098 14.5496 27.0971 14.0612 27.0971C13.5729 27.0971 13.1031 26.9098 12.7487 26.5737L5.74874 19.1625L6.94749 17.9725Z"
      }
    })]);
  }
};