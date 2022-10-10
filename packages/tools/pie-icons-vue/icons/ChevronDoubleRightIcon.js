import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'ChevronDoubleRightIcon',
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
      "class": "c-pieIcon c-pieIcon--chevronDoubleRight"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M11.9787 24.1237L22.4612 14C22.4734 13.9691 22.4734 13.9347 22.4612 13.9038L11.9612 3.84125L13.1862 2.625L23.6862 12.6875C24.0223 13.0419 24.2096 13.5116 24.2096 14C24.2096 14.4884 24.0223 14.9581 23.6862 15.3125L13.1775 25.375L11.9787 24.1237Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M3.80624 24.1237L14.2975 14C14.3097 13.9691 14.3097 13.9347 14.2975 13.9038L3.79749 3.84125L5.02248 2.625L15.5225 12.6875C15.8585 13.0419 16.0458 13.5116 16.0458 14C16.0458 14.4884 15.8585 14.9581 15.5225 15.3125L5.00498 25.375L3.80624 24.1237Z"
      }
    })]);
  }

};