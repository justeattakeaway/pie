import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'CloseSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--closeSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M10.8676 2.20496L7.0001 6.07248L3.13258 2.20496L2.20508 3.13246L6.0726 6.99998L2.20508 10.8675L3.13258 11.795L7.0001 7.92748L10.8676 11.795L11.7951 10.8675L7.92761 6.99998L11.7951 3.13246L10.8676 2.20496Z"
      }
    })]);
  }

};