import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'AvgOrderValueSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--avgOrderValueSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M2.84375 10.5H4.15625V14H2.84375V10.5ZM6.34375 14H7.65625V7.875H6.34375V14ZM9.84375 9.625V14H11.1562V9.625H9.84375ZM9.68625 4.87375L7 7L4.31375 4.87375C4.12914 4.7311 3.97956 4.54816 3.87644 4.33889C3.77332 4.12962 3.71939 3.89955 3.71875 3.66625V0.21875H10.2812V3.66625C10.2806 3.89955 10.2267 4.12962 10.1236 4.33889C10.0204 4.54816 9.87086 4.7311 9.68625 4.87375ZM8.96875 1.53125H5.03125V3.66625C5.03303 3.69987 5.04172 3.73275 5.05677 3.76286C5.07183 3.79297 5.09293 3.81966 5.11875 3.84125L7 5.29375L8.88125 3.84125C8.90707 3.81966 8.92817 3.79297 8.94323 3.76286C8.95828 3.73275 8.96697 3.69987 8.96875 3.66625V1.53125Z"
      }
    })]);
  }
};