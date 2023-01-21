import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'ArrowLongDownCircleFilledIcon',
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
      "class": "c-pieIcon c-pieIcon--arrowLongDownCircleFilled"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M14.875 1.79376V17.1413L19.04 12.9763L20.2738 14.21L15.2338 19.25C14.9059 19.576 14.4623 19.7589 14 19.7589C13.5377 19.7589 13.0941 19.576 12.7663 19.25L7.72626 14.21L8.96001 12.9763L13.125 17.1413V1.79376C9.96001 2.02041 7.00644 3.46633 4.88619 5.82707C2.76593 8.18782 1.64444 11.2792 1.75783 14.4503C1.87123 17.6213 3.21067 20.6247 5.49414 22.828C7.7776 25.0312 10.8269 26.2625 14 26.2625C17.1731 26.2625 20.2224 25.0312 22.5059 22.828C24.7893 20.6247 26.1288 17.6213 26.2422 14.4503C26.3556 11.2792 25.2341 8.18782 23.1138 5.82707C20.9936 3.46633 18.04 2.02041 14.875 1.79376Z"
      }
    })]);
  }
};