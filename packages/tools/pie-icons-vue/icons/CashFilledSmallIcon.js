import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'CashFilledSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--cashFilledSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M1.75 8.74999H11.375V10.5H0V4.37499H1.75V8.74999ZM13.7812 2.02124V7.60374H2.84375V2.02124H13.7812ZM9.52875 4.81249C9.52875 4.57194 9.45742 4.33679 9.32377 4.13678C9.19013 3.93677 9.00018 3.78088 8.77794 3.68882C8.5557 3.59677 8.31115 3.57268 8.07522 3.61961C7.83929 3.66654 7.62258 3.78238 7.45248 3.95247C7.28239 4.12257 7.16655 4.33928 7.11962 4.57521C7.07269 4.81114 7.09678 5.05569 7.18883 5.27793C7.28089 5.50017 7.43678 5.69012 7.63679 5.82377C7.8368 5.95741 8.07195 6.02874 8.3125 6.02874C8.63507 6.02874 8.94443 5.9006 9.17252 5.67251C9.40061 5.44442 9.52875 5.13506 9.52875 4.81249Z"
      }
    })]);
  }
};