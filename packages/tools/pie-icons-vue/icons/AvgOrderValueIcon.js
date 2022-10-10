import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'AvgOrderValueIcon',
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
      "class": "c-pieIcon c-pieIcon--avgOrderValue"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M7 20.125H8.75V27.125H7V20.125ZM13.125 27.125H14.875V14.875H13.125V27.125ZM19.25 18.375V27.125H21V18.375H19.25ZM19.25 7C19.2492 7.39358 19.16 7.78194 18.9888 8.13636C18.8177 8.49078 18.569 8.80217 18.2613 9.0475L14 12.495L9.73875 9.0825C9.42634 8.8335 9.17488 8.51649 9.00354 8.1556C8.83219 7.79471 8.74548 7.39947 8.75 7V0.875H19.25V7ZM17.5 2.625H10.5V7C10.5006 7.13143 10.5308 7.26103 10.5884 7.37919C10.6459 7.49734 10.7294 7.60101 10.8325 7.6825L14 10.255L17.1675 7.7175C17.2754 7.6324 17.3617 7.52311 17.4194 7.39846C17.4772 7.2738 17.5048 7.1373 17.5 7V2.625Z"
      }
    })]);
  }

};