import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'SalesIcon',
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
      "class": "c-pieIcon c-pieIcon--sales"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M4.375 21H6.125V25.375H4.375V21ZM16.625 25.375H18.375V16.625H16.625V25.375ZM10.5 25.375H12.25V19.25H10.5V25.375ZM22.75 25.375H24.5V13.125H22.75V25.375ZM23.625 0.875H16.625V2.625H21.77C15.015 10.71 10.2288 12.25 3.5 12.25V14C11.5062 14 16.555 11.4888 22.75 4.2V8.75H24.5V1.75C24.5 1.51794 24.4078 1.29538 24.2437 1.13128C24.0796 0.967187 23.8571 0.875 23.625 0.875Z"
      }
    })]);
  }

};