import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'NumberSymbolIcon',
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
      "class": "c-pieIcon c-pieIcon--numberSymbol"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M20.9999 11.375L21.2449 9.625H18.6199L19.2499 5.25H17.4999L16.8611 9.625H12.4861L13.1249 5.25H11.3749L10.7361 9.625H7.99738L7.75238 11.375H10.4386L9.66863 16.625H6.99988L6.75488 18.375H9.37988L8.74988 22.75H10.4999L11.1386 18.375H15.5136L14.8749 22.75H16.6249L17.2636 18.375H19.9586L20.2036 16.625H17.5611L18.3749 11.375H20.9999ZM15.8111 16.625H11.4361L12.2499 11.375H16.6249L15.8111 16.625Z"
      }
    })]);
  }
};