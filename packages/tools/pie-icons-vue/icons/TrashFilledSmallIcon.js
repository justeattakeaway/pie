import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'TrashFilledSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--trashFilledSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M8.86375 0.21875H5.13625L4.48875 1.53125H9.51125L8.86375 0.21875Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M0.875 2.84375V4.15625H1.8375L2.625 12.3988C2.66192 12.7771 2.83823 13.1281 3.11963 13.3836C3.40102 13.6391 3.7674 13.7809 4.1475 13.7812H9.87C10.2471 13.7766 10.6092 13.6329 10.8869 13.3778C11.1646 13.1227 11.3384 12.7741 11.375 12.3988L12.1538 4.15625H13.125V2.84375H0.875Z"
      }
    })]);
  }

};