import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'DrinkSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--drinkSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M11.375 3.71875H7.65625V2.2225L9.835 1.49625L9.415 0.253754L6.34375 1.2775V3.71875H2.625V5.03125H3.21125L3.87625 12.39C3.91126 12.7714 4.08792 13.1258 4.37138 13.3833C4.65484 13.6409 5.02452 13.7829 5.4075 13.7813H8.5925C8.97548 13.7829 9.34516 13.6409 9.62862 13.3833C9.91208 13.1258 10.0887 12.7714 10.1237 12.39L10.7887 5.03125H11.375V3.71875ZM8.81125 12.25C8.80684 12.3049 8.78186 12.3562 8.74131 12.3935C8.70075 12.4308 8.64761 12.4514 8.5925 12.4513H5.4075C5.35239 12.4514 5.29925 12.4308 5.25869 12.3935C5.21814 12.3562 5.19316 12.3049 5.18875 12.25L4.52375 5.03125H9.47625L8.81125 12.25Z"
      }
    })]);
  }
};