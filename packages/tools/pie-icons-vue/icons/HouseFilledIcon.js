import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'HouseFilledIcon',
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
      "class": "c-pieIcon c-pieIcon--houseFilled"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M15.4875 3.02747C15.0315 2.7632 14.5139 2.62402 13.9869 2.62402C13.4599 2.62402 12.9422 2.7632 12.4863 3.02747C8.11125 5.82747 1.18125 13.125 0.875 13.3962L2.14375 14.6037C2.14375 14.6037 3.0625 13.65 4.375 12.355V25.375H23.625V12.355C24.9288 13.65 25.8213 14.5775 25.8388 14.6037L27.125 13.3962C26.8188 13.125 19.88 5.82747 15.4875 3.02747ZM12.4338 19.9412C12.4338 19.5258 12.5988 19.1274 12.8925 18.8337C13.1862 18.54 13.5846 18.375 14 18.375C14.4154 18.375 14.8138 18.54 15.1075 18.8337C15.4012 19.1274 15.5663 19.5258 15.5663 19.9412V23.625H12.4338V19.9412Z"
      }
    })]);
  }

};