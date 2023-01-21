import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'SortDescendingSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--sortDescendingSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M0 8.23021H6.81686L6.26556 6.91779H0V8.23021ZM8.287 11.73H0V10.4176H7.7357L8.287 11.73ZM0 3.41799H4.78668L5.34673 4.73041H0V3.41799ZM12.9949 5.92034L11.1573 4.0742V9.3239H9.84464V4.0742L8.00697 5.92034L7.07939 4.94915L9.70463 2.3243C9.80488 2.22165 9.92466 2.14008 10.0569 2.08439C10.1891 2.0287 10.3312 2.00001 10.4747 2.00001C10.6182 2.00001 10.7602 2.0287 10.8925 2.08439C11.0247 2.14008 11.1445 2.22165 11.2448 2.3243L13.87 4.94915L12.9949 5.92034Z"
      }
    })]);
  }
};