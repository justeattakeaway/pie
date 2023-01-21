import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'PrinterSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--printerSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M13.7812 6.125C13.779 5.7196 13.6169 5.33145 13.3302 5.04478C13.0436 4.75811 12.6554 4.59605 12.25 4.59375H10.2812V1.09375H3.71875V4.59375H1.75C1.3446 4.59605 0.95645 4.75811 0.669781 5.04478C0.383112 5.33145 0.221047 5.7196 0.21875 6.125V12.0312H3.71875V13.7812H10.2812V12.0312H13.7812V6.125ZM5.03125 2.40625H8.96875V4.59375H5.03125V2.40625ZM8.96875 12.4688H5.03125V9.40625H8.96875V12.4688ZM12.4688 10.7188H10.2812V9.40625H11.1562V8.09375H2.84375V9.40625H3.71875V10.7188H1.53125V6.125C1.53125 6.06698 1.5543 6.01134 1.59532 5.97032C1.63634 5.9293 1.69198 5.90625 1.75 5.90625H12.25C12.308 5.90625 12.3637 5.9293 12.4047 5.97032C12.4457 6.01134 12.4688 6.06698 12.4688 6.125V10.7188Z"
      }
    })]);
  }
};