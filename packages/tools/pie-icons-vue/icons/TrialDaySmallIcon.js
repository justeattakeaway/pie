import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'TrialDaySmallIcon',
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
      "class": "c-pieIcon c-pieIcon--trialDaySmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M10.2812 1.96875V0.875H8.96875V1.96875H5.03125V0.875H3.71875V1.96875H1.09375V12.9062H9.625C10.4952 12.9062 11.3298 12.5605 11.9452 11.9452C12.5605 11.3298 12.9062 10.4952 12.9062 9.625V1.96875H10.2812ZM11.5938 9.625C11.5938 10.1471 11.3863 10.6479 11.0171 11.0171C10.6479 11.3863 10.1471 11.5938 9.625 11.5938H2.40625V3.28125H3.71875V4.375H5.03125V3.28125H8.96875V4.375H10.2812V3.28125H11.5938V9.625ZM7.21875 6.34375H9.40625V8.53125H7.21875V6.34375Z"
      }
    })]);
  }

};