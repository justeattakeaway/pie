import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'GridViewIcon',
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
      "class": "c-pieIcon c-pieIcon--gridView"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M12.25 12.25H2.625V2.625H12.25V12.25ZM4.375 10.5H10.5V4.375H4.375V10.5ZM25.375 12.25H15.75V2.625H25.375V12.25ZM17.5 10.5H23.625V4.375H17.5V10.5ZM12.25 25.375H2.625V15.75H12.25V25.375ZM4.375 23.625H10.5V17.5H4.375V23.625ZM25.375 25.375H15.75V15.75H25.375V25.375ZM17.5 23.625H23.625V17.5H17.5V23.625Z"
      }
    })]);
  }

};