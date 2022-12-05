import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'PauseCircleFilledSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--pauseCircleFilledSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M7 0.21875C5.6588 0.21875 4.34771 0.616463 3.23254 1.3616C2.11737 2.10673 1.2482 3.16582 0.734945 4.40493C0.221688 5.64404 0.0873968 7.00752 0.349053 8.32296C0.610709 9.63839 1.25656 10.8467 2.20494 11.7951C3.15331 12.7434 4.36161 13.3893 5.67705 13.651C6.99248 13.9126 8.35596 13.7783 9.59508 13.2651C10.8342 12.7518 11.8933 11.8826 12.6384 10.7675C13.3835 9.65229 13.7813 8.3412 13.7813 7C13.7789 5.20221 13.0637 3.47872 11.7925 2.20749C10.5213 0.93626 8.79779 0.221065 7 0.21875ZM6.34375 9.1875H5.03125V4.8125H6.34375V9.1875ZM8.96875 9.1875H7.65625V4.8125H8.96875V9.1875Z"
      }
    })]);
  }

};