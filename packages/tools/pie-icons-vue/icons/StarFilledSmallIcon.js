import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'StarFilledSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--starFilledSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M11.2876 13.4487L7.10507 11.2525C7.07288 11.2349 7.03677 11.2256 7.00007 11.2256C6.96337 11.2256 6.92726 11.2349 6.89507 11.2525L2.71257 13.4487L3.50007 8.79374C3.52535 8.73206 3.52535 8.66292 3.50007 8.60124L0.0700684 5.30249L4.74257 4.61999C4.77715 4.61507 4.81014 4.60224 4.83897 4.58252C4.8678 4.56279 4.8917 4.53669 4.90882 4.50624L7.00007 0.27124L9.09132 4.50624C9.10844 4.53669 9.13234 4.56279 9.16117 4.58252C9.19 4.60224 9.22298 4.61507 9.25757 4.61999L13.9301 5.30249L10.5438 8.60124C10.521 8.62742 10.5037 8.65802 10.4932 8.69113C10.4827 8.72425 10.4791 8.75917 10.4826 8.79374L11.2876 13.4487Z"
      }
    })]);
  }
};