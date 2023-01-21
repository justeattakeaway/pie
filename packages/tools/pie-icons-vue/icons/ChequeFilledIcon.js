import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'ChequeFilledIcon',
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
      "class": "c-pieIcon c-pieIcon--chequeFilled"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M17.8325 12.5387L14.0437 13.125L14.5863 9.33622L20.8162 3.06247C21.1383 2.74272 21.5473 2.5249 21.9924 2.4362C22.4374 2.3475 22.8988 2.39186 23.3188 2.56372L24.7537 1.12872L25.9963 2.37122L24.5612 3.80622C24.7331 4.22622 24.7775 4.68754 24.6888 5.13259C24.6001 5.57764 24.3823 5.98671 24.0625 6.30872L17.8325 12.5387ZM27.125 9.62497V23.625H0.875V9.62497H12.7663L11.9787 15.1462L18.655 14.1925L23.2138 9.62497H27.125ZM15.75 17.5H5.25V19.25H15.75V17.5ZM22.75 17.5H19.25V19.25H22.75V17.5Z"
      }
    })]);
  }
};