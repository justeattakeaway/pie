import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'ArrowLongAngleUpIcon',
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
      "class": "c-pieIcon c-pieIcon--arrowLongAngleUp"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M23.2838 22.0412L7.81375 6.57123H17.7363V4.82123H6.58C6.11587 4.82123 5.67075 5.0056 5.34256 5.33379C5.01438 5.66198 4.83 6.1071 4.83 6.57123V17.7362H6.58V7.80498L22.05 23.275L23.2838 22.0412Z"
      }
    })]);
  }

};